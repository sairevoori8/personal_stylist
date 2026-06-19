import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as store } from "./store-DVSyp8Ru.mjs";
import { n as cn, t as Button } from "./button-DRsC1qZi.mjs";
import { t as AdminShell } from "./AdminShell-A3lT3qO3.mjs";
import { a as ChevronDown, i as ChevronUp, o as Check } from "../_libs/lucide-react.mjs";
import { t as Input } from "./input-DicJzR9-.mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.dashboard-VyZmXIF-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
function Dashboard() {
	const [query, setQuery] = (0, import_react.useState)("");
	const [payment, setPayment] = (0, import_react.useState)("all");
	const [report, setReport] = (0, import_react.useState)("all");
	const [users, setUsers] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const loadUsers = async () => {
			try {
				setLoading(true);
				setUsers(await store.listUsers());
			} catch (error) {
				console.error("Failed to load users:", error);
			} finally {
				setLoading(false);
			}
		};
		loadUsers();
	}, []);
	const filtered = users.filter((u) => {
		const q = query.trim().toLowerCase();
		const matches = !q || u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q) || u.whatsapp_number.toLowerCase().includes(q);
		const pm = payment === "all" || u.payment_status === payment;
		const rp = report === "all" || u.report_status === report;
		return matches && pm && rp;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AdminShell, {
		title: "Clients",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-4 gap-3 mb-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: query,
						onChange: (e) => setQuery(e.target.value),
						placeholder: "Search by name, email, or phone",
						className: "md:col-span-2 h-11 rounded-none"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: payment,
						onValueChange: setPayment,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							className: "h-11 rounded-none",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Payment" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "all",
								children: "All Payments"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "Completed",
								children: "Completed"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "Not Completed",
								children: "Not Completed"
							})
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: report,
						onValueChange: setReport,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							className: "h-11 rounded-none",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Report" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "all",
								children: "All Reports"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "Sent",
								children: "Sent"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "Not Sent",
								children: "Not Sent"
							})
						] })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border border-border overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-border bg-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, { children: "ID" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, { children: "Name" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, { children: "Email" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, { children: "Contact" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, { children: "Payment" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, { children: "Report" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, {
								className: "text-right",
								children: "Action"
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						colSpan: 7,
						className: "text-center py-16 text-muted-foreground text-sm",
						children: "No clients match your filters."
					}) }), filtered.map((u, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-border hover:bg-muted/40 transition-colors",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, {
								className: "font-mono text-xs text-muted-foreground",
								children: String(i + 1).padStart(3, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, {
								className: "font-medium",
								children: u.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, {
								className: "text-muted-foreground",
								children: u.email
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, {
								className: "text-muted-foreground",
								children: u.whatsapp_number
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, {
								ok: u.payment_status === "Completed",
								label: u.payment_status
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, {
								ok: u.report_status === "Sent",
								label: u.report_status
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, {
								className: "text-right",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									className: "h-8 rounded-none tracking-luxe text-[10px]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/admin/clients/$id",
										params: { id: u.id },
										children: "View"
									})
								})
							})
						]
					}, u.id))] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 text-xs text-muted-foreground",
				children: [
					"Showing ",
					filtered.length,
					" of ",
					users.length,
					" clients ·",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: async () => {
							setLoading(true);
							setUsers(await store.listUsers());
							setLoading(false);
						},
						className: "underline underline-offset-2",
						disabled: loading,
						children: loading ? "Refreshing..." : "Refresh"
					})
				]
			})
		]
	});
}
function Th({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
		className: `text-left px-4 py-3 text-[10px] tracking-luxe text-muted-foreground ${className}`,
		children
	});
}
function Td({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
		className: `px-4 py-4 ${className}`,
		children
	});
}
function StatusPill({ ok, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: `inline-flex items-center gap-2 text-[10px] tracking-luxe px-2 py-1 border ${ok ? "border-foreground bg-foreground text-background" : "border-border text-muted-foreground"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-1.5 w-1.5 rounded-full ${ok ? "bg-background" : "bg-muted-foreground"}` }), label]
	});
}
//#endregion
export { Dashboard as component };
