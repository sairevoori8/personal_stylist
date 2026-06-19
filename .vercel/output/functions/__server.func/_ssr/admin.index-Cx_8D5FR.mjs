import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as store } from "./store-DVSyp8Ru.mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { t as Label } from "./label-B4PTMSG2.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Input } from "./input-DicJzR9-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.index-Cx_8D5FR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminLogin() {
	const navigate = useNavigate();
	const [username, setUsername] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const submit = async (e) => {
		e.preventDefault();
		try {
			if (await store.adminLogin(username, password)) {
				toast.success("Welcome back");
				navigate({ to: "/admin/dashboard" });
			} else toast.error("Invalid credentials");
		} catch (error) {
			toast.error("Login failed. Please try again.");
			console.error(error);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen flex items-center justify-center px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] tracking-luxe text-muted-foreground",
					children: "Nine Profiles"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl mt-2",
					children: "Admin Access"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				className: "mt-12 space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						className: "text-[10px] tracking-luxe text-muted-foreground",
						children: "Username"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: username,
						onChange: (e) => setUsername(e.target.value),
						className: "h-12 mt-1 rounded-none border-0 border-b bg-transparent px-0 focus-visible:ring-0 focus-visible:border-foreground"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						className: "text-[10px] tracking-luxe text-muted-foreground",
						children: "Password"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "password",
						value: password,
						onChange: (e) => setPassword(e.target.value),
						className: "h-12 mt-1 rounded-none border-0 border-b bg-transparent px-0 focus-visible:ring-0 focus-visible:border-foreground"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "w-full h-12 rounded-none tracking-luxe text-xs",
						children: "Sign In"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] text-center text-muted-foreground tracking-wide",
						children: "Demo credentials — admin / admin"
					})
				]
			})]
		})
	});
}
//#endregion
export { AdminLogin as component };
