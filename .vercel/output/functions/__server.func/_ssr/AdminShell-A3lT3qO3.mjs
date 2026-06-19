import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as store } from "./store-DVSyp8Ru.mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AdminShell-A3lT3qO3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminShell({ children, title }) {
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		if (!store.isAdmin()) navigate({ to: "/admin" });
	}, [navigate]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-7xl mx-auto px-6 h-16 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/admin/dashboard",
					className: "flex items-baseline gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg",
						children: "The Personal Style Lab"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] tracking-luxe text-muted-foreground",
						children: "Admin"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					className: "rounded-none tracking-luxe text-[10px] h-9",
					onClick: () => {
						store.adminLogout();
						navigate({ to: "/admin" });
					},
					children: "Sign Out"
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "flex-1 max-w-7xl w-full mx-auto px-6 py-10",
			children: [title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl mb-8",
				children: title
			}), children]
		})]
	});
}
//#endregion
export { AdminShell as t };
