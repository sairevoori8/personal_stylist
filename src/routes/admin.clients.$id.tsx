import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AdminShell } from "@/components/AdminShell";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { store, type User, type Report } from "@/lib/store";
import { sendReportEmail } from "@/lib/email";
import { toast } from "sonner";
import { ArrowLeft, FileDown, Mail } from "lucide-react";
import jsPDF from "jspdf";

export const Route = createFileRoute("/admin/clients/$id")({
  head: () => ({ meta: [{ title: "Client — Admin" }] }),
  component: ClientDetail,
});

const COLOURS = ["Warm", "Warm-Neutral", "Neutral", "Neutral-Cool", "Cool"];
const METALS = ["Gold", "Rose Gold", "Silver", "Gold + Silver"];
const FACES = ["Oval", "Square", "Triangle", "Diamond", "Inverted Triangle", "Round", "Rectangle", "Heart", "Oblong"];

// ─── PDF Generation ──────────────────────────────────────────────────────────

function buildPdf(user: User, report: Partial<Report>): jsPDF {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const W = doc.internal.pageSize.getWidth();
  const margin = 56;
  const colRight = W - margin;
  let y = 0;

  // Top accent bar
  doc.setFillColor(20, 20, 20);
  doc.rect(0, 0, W, 4, "F");
  y = 48;

  // Header label
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  doc.setTextColor(140, 140, 140);
  doc.setCharSpace(2);
  doc.text("NINE PROFILES  ·  THE PERSONAL STYLE LAB", W / 2, y, { align: "center" });
  y += 28;

  // Title
  doc.setFont("times", "bold");
  doc.setFontSize(28);
  doc.setTextColor(20, 20, 20);
  doc.setCharSpace(0);
  doc.text("Personal Style Report", W / 2, y, { align: "center" });
  y += 20;

  // Divider
  doc.setDrawColor(220, 220, 220);
  doc.setLineWidth(0.5);
  doc.line(margin, y, colRight, y);
  y += 24;

  // Prepared For
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  doc.setTextColor(140, 140, 140);
  doc.setCharSpace(2);
  doc.text("PREPARED FOR", margin, y);
  y += 16;

  doc.setFont("times", "normal");
  doc.setFontSize(22);
  doc.setTextColor(20, 20, 20);
  doc.setCharSpace(0);
  doc.text(user.name, margin, y);
  y += 32;

  // Report rows
  const rows = [
    { label: "BEST COLOURS", value: report.best_colours },
    { label: "METAL HARMONY", value: report.metal_harmony },
    { label: "FACE SHAPE", value: report.face_shape },
  ];

  for (const row of rows) {
    doc.setDrawColor(220, 220, 220);
    doc.setLineWidth(0.3);
    doc.setLineDashPattern([3, 3], 0);
    doc.line(margin, y + 4, colRight, y + 4);
    doc.setLineDashPattern([], 0);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    doc.setTextColor(140, 140, 140);
    doc.setCharSpace(2);
    doc.text(row.label, margin, y);

    doc.setFont("times", "normal");
    doc.setFontSize(16);
    doc.setTextColor(20, 20, 20);
    doc.setCharSpace(0);
    doc.text(row.value || "—", colRight, y, { align: "right" });

    y += 36;
  }

  y += 12;

  // Styling Tips
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  doc.setTextColor(140, 140, 140);
  doc.setCharSpace(2);
  doc.text("PERSONAL STYLING TIPS", margin, y);
  y += 16;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(40, 40, 40);
  doc.setCharSpace(0);

  const tips = report.styling_tips || "No styling tips provided.";
  const lines = doc.splitTextToSize(tips, colRight - margin);
  doc.text(lines, margin, y);
  y += lines.length * 14 + 32;

  // Footer divider
  doc.setDrawColor(220, 220, 220);
  doc.setLineWidth(0.5);
  doc.line(margin, y, colRight, y);
  y += 18;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  doc.setTextColor(140, 140, 140);
  doc.setCharSpace(2);
  doc.text("STYLE FOR THE LIFE YOU'RE BUILDING", W / 2, y, { align: "center" });

  return doc;
}

// ─── Component ───────────────────────────────────────────────────────────────

function ClientDetail() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [report, setReport] = useState<Partial<Report>>({
    best_colours: "",
    metal_harmony: "",
    face_shape: "",
    styling_tips: "",
  });
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const u = await store.getUser(id);
        if (!u) {
          navigate({ to: "/admin/dashboard" });
          return;
        }
        setUser(u);
        const existing = await store.getReportByUser(id);
        if (existing) setReport(existing);
      } catch (error) {
        console.error("Failed to load client data:", error);
        navigate({ to: "/admin/dashboard" });
      }
    };
    loadData();
  }, [id, navigate]);

  if (!user) return null;

  const isReportComplete =
    !!report.best_colours && !!report.metal_harmony && !!report.face_shape;

  /** Save report to store, return true on success */
  const saveReport = async (): Promise<boolean> => {
    if (!isReportComplete) {
      toast.error("Please complete all report fields");
      return false;
    }
    try {
      await store.saveReport({
        user_id: user.id,
        best_colours: report.best_colours!,
        metal_harmony: report.metal_harmony!,
        face_shape: report.face_shape!,
        styling_tips: report.styling_tips ?? "",
      });
      return true;
    } catch (error) {
      toast.error("Failed to save report");
      console.error(error);
      return false;
    }
  };

  /** Download PDF only */
  const handleDownloadPdf = async () => {
    if (!(await saveReport())) return;
    const doc = buildPdf(user, report);
    doc.save(`Style_Report_${user.name.replace(/\s+/g, "_")}.pdf`);
    toast.success("PDF downloaded");
  };

  /** Generate PDF + send via Resend API */
  const handleSendEmail = async () => {
    if (!(await saveReport())) return;
    setIsSending(true);

    try {
      // 1. Build the PDF
      const doc = buildPdf(user, report);

      // 2. Convert PDF to Base64
      const pdfOutput = doc.output("arraybuffer");
      const pdfBase64 = btoa(String.fromCharCode(...new Uint8Array(pdfOutput)));

      // 3. Send via Resend API
      await sendReportEmail({
        to: user.email,
        userName: user.name,
        pdfBase64,
        pdfFileName: `Style_Report_${user.name.replace(/\s+/g, "_")}.pdf`
      });

      // 4. Update status
      await store.updateUser(user.id, { report_status: "Sent" });
      setUser({ ...user, report_status: "Sent" });
      toast.success("Report sent successfully!");
    } catch (error) {
      toast.error("Failed to send report. Please try again.");
      console.error(error);
    } finally {
      setIsSending(false);
    }
  };

  /** Original mark-as-sent flow */
  const handleSend = async () => {
    if (!(await saveReport())) return;
    try {
      await store.updateUser(user.id, { report_status: "Sent" });
      setUser({ ...user, report_status: "Sent" });
      toast.success("Report Successfully Marked as Sent");
    } catch (error) {
      toast.error("Failed to update report status");
      console.error(error);
    }
  };

  return (
    <AdminShell>
      <Link
        to="/admin/dashboard"
        className="inline-flex items-center gap-2 text-[10px] tracking-luxe text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft className="h-3 w-3" /> Back to Clients
      </Link>

      <div className="border border-border p-8 mb-10">
        <p className="text-[10px] tracking-luxe text-muted-foreground">Client Information</p>
        <h2 className="font-display text-3xl mt-2">{user.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 text-sm">
          <Info label="Email" value={user.email} />
          <Info label="Contact" value={user.whatsapp_number} />
          <Info label="Payment" value={user.payment_status} />
          <Info label="Report" value={user.report_status} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-10">
          <h3 className="font-display text-2xl">Report Composition</h3>

          <RadioBlock
            title="Best Colours Suit You"
            options={COLOURS}
            value={report.best_colours ?? ""}
            onChange={(v) => setReport({ ...report, best_colours: v })}
          />
          <RadioBlock
            title="Metal Harmony"
            options={METALS}
            value={report.metal_harmony ?? ""}
            onChange={(v) => setReport({ ...report, metal_harmony: v })}
          />
          <RadioBlock
            title="Face Shape"
            options={FACES}
            value={report.face_shape ?? ""}
            onChange={(v) => setReport({ ...report, face_shape: v })}
          />

          <div>
            <Label className="text-[10px] tracking-luxe text-muted-foreground">
              Personal Styling Tips
            </Label>
            <Textarea
              value={report.styling_tips ?? ""}
              onChange={(e) => setReport({ ...report, styling_tips: e.target.value })}
              rows={8}
              placeholder="Enter personalized styling recommendations for the client..."
              className="mt-2 rounded-none"
            />
          </div>

          {/* Action buttons */}
          <div className="flex flex-col gap-3">
            <Button
              onClick={handleDownloadPdf}
              variant="outline"
              className="w-full h-12 rounded-none tracking-luxe text-xs gap-2"
            >
              <FileDown className="h-4 w-4" />
              Download PDF
            </Button>

            <Button
              onClick={handleSendEmail}
              disabled={isSending}
              className="w-full h-12 rounded-none tracking-luxe text-xs gap-2"
            >
              <Mail className="h-4 w-4" />
              {isSending ? "Preparing…" : `Send PDF to ${user.email}`}
            </Button>

            <Button
              onClick={handleSend}
              variant="ghost"
              className="w-full h-10 rounded-none tracking-luxe text-xs text-muted-foreground"
            >
              Mark as Sent (no email)
            </Button>
          </div>
        </div>

        <div>
          <h3 className="font-display text-2xl mb-6">Live Preview</h3>
          <article className="border border-foreground p-10 bg-background relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-foreground" />
            <p className="text-[10px] tracking-luxe text-muted-foreground text-center">
              Nine Profiles · The Personal Style Lab
            </p>
            <h4 className="font-display text-3xl text-center mt-4">Personal Style Report</h4>
            <div className="my-6 h-px bg-border" />
            <p className="text-[10px] tracking-luxe text-muted-foreground">Prepared For</p>
            <p className="font-display text-2xl mt-1">{user.name}</p>

            <PreviewRow label="Best Colours" value={report.best_colours} />
            <PreviewRow label="Metal Harmony" value={report.metal_harmony} />
            <PreviewRow label="Face Shape" value={report.face_shape} />

            <div className="mt-8">
              <p className="text-[10px] tracking-luxe text-muted-foreground">Personal Styling Tips</p>
              <p className="mt-2 text-sm leading-relaxed whitespace-pre-wrap text-foreground/90 min-h-[80px]">
                {report.styling_tips || (
                  <span className="text-muted-foreground italic">
                    Your personalized styling notes will appear here.
                  </span>
                )}
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-border text-center">
              <p className="text-[10px] tracking-luxe text-muted-foreground">
                Style for the Life You're Building
              </p>
            </div>
          </article>
        </div>
      </div>
    </AdminShell>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] tracking-luxe text-muted-foreground">{label}</p>
      <p className="mt-1">{value}</p>
    </div>
  );
}

function PreviewRow({ label, value }: { label: string; value?: string }) {
  return (
    <div className="mt-6 flex items-baseline justify-between gap-6 border-b border-dashed border-border pb-2">
      <span className="text-[10px] tracking-luxe text-muted-foreground">{label}</span>
      <span className="font-display text-lg text-right">
        {value || <span className="text-muted-foreground italic text-sm">—</span>}
      </span>
    </div>
  );
}

function RadioBlock({
  title,
  options,
  value,
  onChange,
}: {
  title: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <Label className="text-[10px] tracking-luxe text-muted-foreground">{title}</Label>
      <RadioGroup value={value} onValueChange={onChange} className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2">
        {options.map((opt) => {
          const id = `${title}-${opt}`;
          const active = value === opt;
          return (
            <label
              key={opt}
              htmlFor={id}
              className={`flex items-center gap-2 border px-3 py-2.5 cursor-pointer text-sm transition-colors ${
                active ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground"
              }`}
            >
              <RadioGroupItem id={id} value={opt} className="sr-only" />
              {opt}
            </label>
          );
        })}
      </RadioGroup>
    </div>
  );
}