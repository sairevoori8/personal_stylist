import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as store } from "./store-VC9iouhy.mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { t as Brand } from "./Brand-SfKC6J_m.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/payment-CP4XQeSk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PaymentPage() {
	const navigate = useNavigate();
	const [userId, setUserId] = (0, import_react.useState)(null);
	const [processing, setProcessing] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const id = store.currentUserId();
		if (!id) {
			navigate({ to: "/" });
			return;
		}
		setUserId(id);
	}, [navigate]);
	const handlePay = () => {
		if (!userId) return;
		setProcessing(true);
		window.location.href = "https://rzp.io/rzp/M4CgLaCb";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen flex flex-col",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "flex-1 flex items-center justify-center px-6 py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full max-w-lg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, { small: true }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] tracking-luxe text-muted-foreground",
								children: "Your Order"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl md:text-4xl mt-3",
								children: "Personal Style Report"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 inline-flex items-baseline gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs tracking-luxe text-muted-foreground",
									children: "Amount"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-display text-4xl",
									children: ["₹", 499 .toLocaleString("en-IN")]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 border border-border p-8 md:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between border-b border-border pb-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-10 w-10 border border-border flex items-center justify-center font-display text-lg",
										children: "R"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm font-medium",
										children: "Razorpay"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] tracking-luxe text-muted-foreground",
										children: "Secure Checkout"
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] tracking-luxe text-muted-foreground",
									children: "Placeholder"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "py-8 text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: "Payment Gateway Integration Placeholder"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground mt-2",
									children: "Razorpay Checkout Will Be Added Later"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: handlePay,
								disabled: processing,
								className: "w-full h-12 rounded-none tracking-luxe text-xs",
								children: processing ? "Processing…" : "Pay Now"
							})
						]
					})
				]
			})
		})
	});
}
//#endregion
export { PaymentPage as component };
