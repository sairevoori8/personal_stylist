import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AdminShell } from "@/components/AdminShell";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { store } from "@/lib/store";

export const Route = createFileRoute("/admin/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — Admin" }] }),
  component: Dashboard,
});

function Dashboard() {
  const [query, setQuery] = useState("");
  const [payment, setPayment] = useState("all");
  const [report, setReport] = useState("all");
  const [tick, setTick] = useState(0);

  const users = useMemo(() => {
    // re-read on tick
    void tick;
    return store.listUsers();
  }, [tick]);

  const filtered = users.filter((u) => {
    const q = query.trim().toLowerCase();
    const matches =
      !q ||
      u.name.toLowerCase().includes(q) ||
      u.email.toLowerCase().includes(q) ||
      u.whatsapp_number.toLowerCase().includes(q);
    const pm = payment === "all" || u.payment_status === payment;
    const rp = report === "all" || u.report_status === report;
    return matches && pm && rp;
  });

  return (
    <AdminShell title="Clients">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-8">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name, email, or phone"
          className="md:col-span-2 h-11 rounded-none"
        />
        <Select value={payment} onValueChange={setPayment}>
          <SelectTrigger className="h-11 rounded-none">
            <SelectValue placeholder="Payment" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Payments</SelectItem>
            <SelectItem value="Completed">Completed</SelectItem>
            <SelectItem value="Not Completed">Not Completed</SelectItem>
          </SelectContent>
        </Select>
        <Select value={report} onValueChange={setReport}>
          <SelectTrigger className="h-11 rounded-none">
            <SelectValue placeholder="Report" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Reports</SelectItem>
            <SelectItem value="Sent">Sent</SelectItem>
            <SelectItem value="Not Sent">Not Sent</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="border border-border overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Contact</Th>
              <Th>Payment</Th>
              <Th>Report</Th>
              <Th className="text-right">Action</Th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center py-16 text-muted-foreground text-sm">
                  No clients match your filters.
                </td>
              </tr>
            )}
            {filtered.map((u, i) => (
              <tr key={u.id} className="border-b border-border hover:bg-muted/40 transition-colors">
                <Td className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(3, "0")}
                </Td>
                <Td className="font-medium">{u.name}</Td>
                <Td className="text-muted-foreground">{u.email}</Td>
                <Td className="text-muted-foreground">{u.whatsapp_number}</Td>
                <Td>
                  <StatusPill ok={u.payment_status === "Completed"} label={u.payment_status} />
                </Td>
                <Td>
                  <StatusPill ok={u.report_status === "Sent"} label={u.report_status} />
                </Td>
                <Td className="text-right">
                  <Button
                    asChild
                    variant="outline"
                    className="h-8 rounded-none tracking-luxe text-[10px]"
                  >
                    <Link to="/admin/clients/$id" params={{ id: u.id }}>
                      View
                    </Link>
                  </Button>
                </Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 text-xs text-muted-foreground">
        Showing {filtered.length} of {users.length} clients ·{" "}
        <button onClick={() => setTick((t) => t + 1)} className="underline underline-offset-2">
          Refresh
        </button>
      </div>
    </AdminShell>
  );
}

function Th({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <th className={`text-left px-4 py-3 text-[10px] tracking-luxe text-muted-foreground ${className}`}>
      {children}
    </th>
  );
}
function Td({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <td className={`px-4 py-4 ${className}`}>{children}</td>;
}

function StatusPill({ ok, label }: { ok: boolean; label: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-[10px] tracking-luxe px-2 py-1 border ${
        ok ? "border-foreground bg-foreground text-background" : "border-border text-muted-foreground"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${ok ? "bg-background" : "bg-muted-foreground"}`} />
      {label}
    </span>
  );
}
