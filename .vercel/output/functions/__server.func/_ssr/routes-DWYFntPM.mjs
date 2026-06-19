import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as store } from "./store-VC9iouhy.mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { t as Label } from "./label-B4PTMSG2.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Input } from "./input-DicJzR9-.mjs";
import { t as Brand } from "./Brand-SfKC6J_m.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DWYFntPM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var schema = objectType({
	name: stringType().trim().min(2, "Enter your full name").max(100),
	email: stringType().trim().email("Enter a valid email").max(255),
	whatsapp_number: stringType().trim().min(7, "Enter a valid WhatsApp number").max(20).regex(/^[+\d\s()-]+$/, "Only digits, spaces and + - ( ) allowed")
});
function RegistrationPage() {
	const navigate = useNavigate();
	const [values, setValues] = (0, import_react.useState)({
		name: "",
		email: "",
		whatsapp_number: ""
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const onSubmit = async (e) => {
		e.preventDefault();
		const parsed = schema.safeParse(values);
		if (!parsed.success) {
			const fieldErrors = {};
			parsed.error.issues.forEach((i) => {
				fieldErrors[i.path[0]] = i.message;
			});
			setErrors(fieldErrors);
			return;
		}
		setErrors({});
		setSubmitting(true);
		try {
			await store.createUser(parsed.data);
			toast.success("Registration complete");
			navigate({ to: "/payment" });
		} catch (error) {
			toast.error("Registration failed. Please try again.");
			console.error(error);
			setSubmitting(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "flex justify-end px-6 py-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/admin",
					className: "text-[10px] tracking-luxe text-muted-foreground hover:text-foreground border border-border px-4 py-2 transition-colors",
					children: "Admin"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 flex items-center justify-center px-6 py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16 border-t border-border pt-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xs tracking-luxe text-muted-foreground text-center mb-10",
							children: "Begin Your Journey"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit,
							className: "space-y-6",
							noValidate: true,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Full Name",
									error: errors.name,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: values.name,
										onChange: (e) => setValues({
											...values,
											name: e.target.value
										}),
										placeholder: "Your name",
										className: "h-12 rounded-none border-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-foreground"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Email Address",
									error: errors.email,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										type: "email",
										value: values.email,
										onChange: (e) => setValues({
											...values,
											email: e.target.value
										}),
										placeholder: "you@example.com",
										className: "h-12 rounded-none border-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-foreground"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "WhatsApp Number",
									error: errors.whatsapp_number,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: values.whatsapp_number,
										onChange: (e) => setValues({
											...values,
											whatsapp_number: e.target.value
										}),
										placeholder: "+91 98765 43210",
										className: "h-12 rounded-none border-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-foreground"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									disabled: submitting,
									className: "w-full h-12 mt-8 rounded-none tracking-luxe text-xs",
									children: "Register"
								})
							]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "py-6 text-center text-xs tracking-luxe text-muted-foreground",
				children: "© Nine Profiles"
			})
		]
	});
}
function Field({ label, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			className: "text-[10px] tracking-luxe text-muted-foreground",
			children: label
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1",
			children
		}),
		error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-xs text-destructive",
			children: error
		})
	] });
}
//#endregion
export { RegistrationPage as component };
