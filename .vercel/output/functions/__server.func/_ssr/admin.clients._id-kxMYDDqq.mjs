import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Route } from "./admin.clients._id-CtdCLSQe.mjs";
import { t as store } from "./store-VC9iouhy.mjs";
import { n as cn, t as Button } from "./button-DRsC1qZi.mjs";
import { t as AdminShell } from "./AdminShell-CyQ4WQUV.mjs";
import { t as Label } from "./label-B4PTMSG2.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as RadioGroupIndicator, r as RadioGroupItem$1, t as RadioGroup$1 } from "../_libs/@radix-ui/react-radio-group+[...].mjs";
import { n as FileDown, r as Circle, s as ArrowLeft, t as Mail } from "../_libs/lucide-react.mjs";
import { t as Resend } from "../_libs/resend+standardwebhooks.mjs";
import { t as require_jspdf_node_min } from "../_libs/jspdf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.clients._id-kxMYDDqq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_jspdf_node_min = /* @__PURE__ */ __toESM(require_jspdf_node_min());
var RadioGroup = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup$1, {
		className: cn("grid gap-2", className),
		...props,
		ref
	});
});
RadioGroup.displayName = RadioGroup$1.displayName;
var RadioGroupItem = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem$1, {
		ref,
		className: cn("aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupIndicator, {
			className: "flex items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-3.5 w-3.5 fill-primary" })
		})
	});
});
RadioGroupItem.displayName = RadioGroupItem$1.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var resend = new Resend("re_Cm2rqf9j_F2EAgDuy9zsnTfzyw5hXixcr");
async function sendReportEmail({ to, userName, pdfBase64, pdfFileName = "personal-style-report.pdf" }) {
	try {
		return {
			success: true,
			messageId: (await resend.emails.send({
				from: "Nine Profiles <kayatarun2004@gmail.com>",
				to,
				subject: "Your Personal Style Report - Nine Profiles",
				html: `
        <html>
          <body style="font-family: 'Montserrat', sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
            <div style="text-align: center; padding: 40px 20px; border-top: 1px solid #e0e0e0;">
              <p style="font-size: 12px; letter-spacing: 2px; color: #999; text-transform: uppercase;">Nine Profiles</p>
              <h1 style="font-size: 32px; font-family: 'Cormorant Garamond'; margin: 20px 0;">Your Personal Style Report</h1>
            </div>

            <div style="padding: 40px 20px;">
              <p style="font-size: 14px; margin-bottom: 20px;">Dear ${userName},</p>

              <p style="font-size: 14px; line-height: 1.6; margin-bottom: 20px;">
                Thank you for choosing Nine Profiles' Personal Style Lab. Your personalized style report is ready!
              </p>

              <p style="font-size: 14px; line-height: 1.6; margin-bottom: 20px;">
                We've analyzed your unique characteristics and created a comprehensive report tailored just for you. Inside you'll find:
              </p>

              <ul style="font-size: 14px; line-height: 1.8; margin: 20px 0 20px 20px;">
                <li>Your best colors suit you</li>
                <li>Metal harmony recommendations</li>
                <li>Face shape analysis</li>
                <li>Personal styling tips</li>
              </ul>

              <p style="font-size: 14px; line-height: 1.6; margin-bottom: 30px;">
                Please find your complete report attached to this email.
              </p>

              <div style="text-align: center; padding: 20px; background: #f8f8f8; margin: 30px 0;">
                <p style="font-size: 12px; letter-spacing: 1px; color: #666; text-transform: uppercase; margin: 0;">
                  Style for the Life You're Building
                </p>
              </div>
            </div>

            <div style="border-top: 1px solid #e0e0e0; padding: 20px; text-align: center;">
              <p style="font-size: 12px; color: #999;">
                © Nine Profiles. All rights reserved.
              </p>
            </div>
          </body>
        </html>
      `,
				attachments: [{
					filename: pdfFileName,
					content: Buffer.from(pdfBase64, "base64")
				}]
			})).data?.id
		};
	} catch (error) {
		console.error("Failed to send email:", error);
		throw new Error(`Failed to send email: ${error instanceof Error ? error.message : "Unknown error"}`);
	}
}
var COLOURS = [
	"Warm",
	"Warm-Neutral",
	"Neutral",
	"Neutral-Cool",
	"Cool"
];
var METALS = [
	"Gold",
	"Rose Gold",
	"Silver",
	"Gold + Silver"
];
var FACES = [
	"Oval",
	"Square",
	"Triangle",
	"Diamond",
	"Inverted Triangle",
	"Round",
	"Rectangle",
	"Heart",
	"Oblong"
];
function buildPdf(user, report) {
	const doc = new import_jspdf_node_min.default({
		unit: "pt",
		format: "a5"
	});
	const W = doc.internal.pageSize.getWidth();
	const margin = 56;
	const colRight = W - margin;
	let y = 0;
	let x = 170;
	doc.setFillColor(20, 20, 20);
	doc.rect(0, 0, W, 4, "F");
	y = 48;
	doc.setFont("helvetica", "normal");
	doc.setFontSize(7);
	doc.setTextColor(140, 140, 140);
	doc.setCharSpace(2);
	doc.text("NINE PROFILES  ·  THE PERSONAL STYLE LAB", x, y, { align: "center" });
	y += 24;
	doc.setFont("times", "bold");
	doc.setFontSize(20);
	doc.setTextColor(20, 20, 20);
	doc.setCharSpace(0);
	doc.text("Personal Style Report", W / 2, y, { align: "center" });
	y += 20;
	doc.setDrawColor(220, 220, 220);
	doc.setLineWidth(.5);
	doc.line(margin, y, colRight, y);
	y += 24;
	doc.setFont("helvetica", "normal");
	doc.setFontSize(7);
	doc.setTextColor(140, 140, 140);
	doc.setCharSpace(2);
	doc.text("PREPARED FOR", margin, y);
	y += 20;
	doc.setFont("times", "normal");
	doc.setFontSize(15);
	doc.setTextColor(20, 20, 20);
	doc.setCharSpace(0);
	doc.text(user.name, margin, y);
	y += 20;
	const rows = [
		{
			label: "BEST COLOURS",
			value: report.best_colours
		},
		{
			label: "METAL HARMONY",
			value: report.metal_harmony
		},
		{
			label: "FACE SHAPE",
			value: report.face_shape
		}
	];
	for (const row of rows) {
		doc.setDrawColor(220, 220, 220);
		doc.setLineWidth(.3);
		doc.setLineDashPattern([3, 3], 0);
		doc.line(margin, y + 4, colRight, y + 4);
		doc.setLineDashPattern([], 0);
		doc.setFont("helvetica", "normal");
		doc.setFontSize(7);
		doc.setTextColor(140, 140, 140);
		doc.setCharSpace(2);
		doc.text(row.label, margin, y);
		doc.setFont("times", "normal");
		doc.setFontSize(10);
		doc.setTextColor(20, 20, 20);
		doc.setCharSpace(0);
		doc.text(row.value || "—", colRight, y, { align: "right" });
		y += 36;
	}
	y += 12;
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
	doc.setDrawColor(220, 220, 220);
	doc.setLineWidth(.5);
	doc.line(margin, y, colRight, y);
	y += 18;
	doc.setFont("helvetica", "normal");
	doc.setFontSize(7);
	doc.setTextColor(140, 140, 140);
	doc.setCharSpace(2);
	doc.text("STYLE FOR THE LIFE YOU'RE BUILDING", x, y, { align: "center" });
	return doc;
}
function ClientDetail() {
	const { id } = Route.useParams();
	const navigate = useNavigate();
	const [user, setUser] = (0, import_react.useState)(null);
	const [report, setReport] = (0, import_react.useState)({
		best_colours: "",
		metal_harmony: "",
		face_shape: "",
		styling_tips: ""
	});
	const [isSending, setIsSending] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
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
	const isReportComplete = !!report.best_colours && !!report.metal_harmony && !!report.face_shape;
	/** Save report to store, return true on success */
	const saveReport = async () => {
		if (!isReportComplete) {
			toast.error("Please complete all report fields");
			return false;
		}
		try {
			await store.saveReport({
				user_id: user.id,
				best_colours: report.best_colours,
				metal_harmony: report.metal_harmony,
				face_shape: report.face_shape,
				styling_tips: report.styling_tips ?? ""
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
		if (!await saveReport()) return;
		buildPdf(user, report).save(`Style_Report_${user.name.replace(/\s+/g, "_")}.pdf`);
		toast.success("PDF downloaded");
	};
	/** Generate PDF + send via Resend API */
	const handleSendEmail = async () => {
		if (!await saveReport()) return;
		setIsSending(true);
		try {
			const pdfOutput = buildPdf(user, report).output("arraybuffer");
			const pdfBase64 = btoa(String.fromCharCode(...new Uint8Array(pdfOutput)));
			await sendReportEmail({
				to: user.email,
				userName: user.name,
				pdfBase64,
				pdfFileName: `Style_Report_${user.name.replace(/\s+/g, "_")}.pdf`
			});
			await store.updateUser(user.id, { report_status: "Sent" });
			setUser({
				...user,
				report_status: "Sent"
			});
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
		if (!await saveReport()) return;
		try {
			await store.updateUser(user.id, { report_status: "Sent" });
			setUser({
				...user,
				report_status: "Sent"
			});
			toast.success("Report Successfully Marked as Sent");
		} catch (error) {
			toast.error("Failed to update report status");
			console.error(error);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AdminShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/admin/dashboard",
			className: "inline-flex items-center gap-2 text-[10px] tracking-luxe text-muted-foreground hover:text-foreground mb-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3 w-3" }), " Back to Clients"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border border-border p-8 mb-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] tracking-luxe text-muted-foreground",
					children: "Client Information"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl mt-2",
					children: user.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
							label: "Email",
							value: user.email
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
							label: "Contact",
							value: user.whatsapp_number
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
							label: "Payment",
							value: user.payment_status
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
							label: "Report",
							value: user.report_status
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 lg:grid-cols-2 gap-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl",
						children: "Report Composition"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioBlock, {
						title: "Best Colours Suit You",
						options: COLOURS,
						value: report.best_colours ?? "",
						onChange: (v) => setReport({
							...report,
							best_colours: v
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioBlock, {
						title: "Metal Harmony",
						options: METALS,
						value: report.metal_harmony ?? "",
						onChange: (v) => setReport({
							...report,
							metal_harmony: v
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioBlock, {
						title: "Face Shape",
						options: FACES,
						value: report.face_shape ?? "",
						onChange: (v) => setReport({
							...report,
							face_shape: v
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						className: "text-[10px] tracking-luxe text-muted-foreground",
						children: "Personal Styling Tips"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						value: report.styling_tips ?? "",
						onChange: (e) => setReport({
							...report,
							styling_tips: e.target.value
						}),
						rows: 8,
						placeholder: "Enter personalized styling recommendations for the client...",
						className: "mt-2 rounded-none"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								onClick: handleDownloadPdf,
								variant: "outline",
								className: "w-full h-12 rounded-none tracking-luxe text-xs gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDown, { className: "h-4 w-4" }), "Download PDF"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								onClick: handleSendEmail,
								disabled: isSending,
								className: "w-full h-12 rounded-none tracking-luxe text-xs gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }), isSending ? "Preparing…" : `Send PDF to ${user.email}`]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: handleSend,
								variant: "ghost",
								className: "w-full h-10 rounded-none tracking-luxe text-xs text-muted-foreground",
								children: "Mark as Sent (no email)"
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-2xl mb-6",
				children: "Live Preview"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "border border-foreground p-10 bg-background relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 right-0 h-1 bg-foreground" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] tracking-luxe text-muted-foreground text-center",
						children: "Nine Profiles · The Personal Style Lab"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-display text-3xl text-center mt-4",
						children: "Personal Style Report"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-6 h-px bg-border" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] tracking-luxe text-muted-foreground",
						children: "Prepared For"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl mt-1",
						children: user.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewRow, {
						label: "Best Colours",
						value: report.best_colours
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewRow, {
						label: "Metal Harmony",
						value: report.metal_harmony
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewRow, {
						label: "Face Shape",
						value: report.face_shape
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] tracking-luxe text-muted-foreground",
							children: "Personal Styling Tips"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed whitespace-pre-wrap text-foreground/90 min-h-[80px]",
							children: report.styling_tips || /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground italic",
								children: "Your personalized styling notes will appear here."
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 pt-6 border-t border-border text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] tracking-luxe text-muted-foreground",
							children: "Style for the Life You're Building"
						})
					})
				]
			})] })]
		})
	] });
}
function Info({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-[10px] tracking-luxe text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1",
		children: value
	})] });
}
function PreviewRow({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-6 flex items-baseline justify-between gap-6 border-b border-dashed border-border pb-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[10px] tracking-luxe text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-lg text-right",
			children: value || /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground italic text-sm",
				children: "—"
			})
		})]
	});
}
function RadioBlock({ title, options, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
		className: "text-[10px] tracking-luxe text-muted-foreground",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
		value,
		onValueChange: onChange,
		className: "mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2",
		children: options.map((opt) => {
			const id = `${title}-${opt}`;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				htmlFor: id,
				className: `flex items-center gap-2 border px-3 py-2.5 cursor-pointer text-sm transition-colors ${value === opt ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, {
					id,
					value: opt,
					className: "sr-only"
				}), opt]
			}, opt);
		})
	})] });
}
//#endregion
export { ClientDetail as component };
