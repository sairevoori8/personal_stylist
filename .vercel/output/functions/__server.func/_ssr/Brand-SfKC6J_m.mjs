import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Brand-SfKC6J_m.js
var import_jsx_runtime = require_jsx_runtime();
function Brand({ small = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: "block text-center group",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: small ? "text-xs tracking-luxe text-muted-foreground" : "text-sm tracking-luxe text-muted-foreground mb-3",
				children: "Nine Profiles"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: small ? "font-display text-xl" : "font-display text-3xl md:text-5xl",
				children: "The Personal Style Lab"
			}),
			!small && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm tracking-[0.2em] uppercase text-muted-foreground",
				children: "Style for the Life You're Building"
			})
		]
	});
}
//#endregion
export { Brand as t };
