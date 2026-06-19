import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { o as Check } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/thank-you-DXTARvY8.js
var import_jsx_runtime = require_jsx_runtime();
function ThankYouPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen flex items-center justify-center px-6 py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto h-16 w-16 border border-foreground flex items-center justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						className: "h-7 w-7",
						strokeWidth: 1.5
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-[10px] tracking-luxe text-muted-foreground",
					children: "Confirmation"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl md:text-5xl mt-3",
					children: "Payment Successful"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 max-w-md mx-auto space-y-4 text-muted-foreground leading-relaxed",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Thank you for registering with The Personal Style Lab." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Your Personal Style Report is currently being prepared by our styling team." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The completed report will be sent to your WhatsApp number shortly." })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "h-12 px-10 rounded-none tracking-luxe text-xs",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							children: "Return Home"
						})
					})
				})
			]
		})
	});
}
//#endregion
export { ThankYouPage as component };
