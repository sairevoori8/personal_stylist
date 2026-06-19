import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/store-VC9iouhy.js
var supabase = createClient("https://vypojzkqcaevhiaziscf.supabase.co", "sb_publishable_WB1jXPYIegaIIh2ubdMvhw_hqW-cvBx");
var SESSION_KEY = "psl_current_user";
var ADMIN_KEY = "psl_admin_session";
var isBrowser = () => typeof window !== "undefined";
function readLocal(key, fallback) {
	if (!isBrowser()) return fallback;
	try {
		const raw = localStorage.getItem(key);
		return raw ? JSON.parse(raw) : fallback;
	} catch {
		return fallback;
	}
}
function writeLocal(key, value) {
	if (!isBrowser()) return;
	localStorage.setItem(key, JSON.stringify(value));
}
var store = {
	async listUsers() {
		try {
			const { data, error } = await supabase.from("users").select("*");
			if (error) throw error;
			return data || [];
		} catch (err) {
			console.error("Failed to list users:", err);
			return [];
		}
	},
	async getUser(id) {
		try {
			const { data, error } = await supabase.from("users").select("*").eq("id", id).single();
			if (error) throw error;
			return data || void 0;
		} catch (err) {
			console.error("Failed to get user:", err);
			return;
		}
	},
	async createUser(data) {
		try {
			const { data: user, error } = await supabase.from("users").insert([{
				name: data.name,
				email: data.email,
				whatsapp_number: data.whatsapp_number,
				payment_status: "Not Completed",
				report_status: "Not Sent"
			}]).select().single();
			if (error) throw error;
			if (user) writeLocal(SESSION_KEY, user.id);
			return user;
		} catch (err) {
			console.error("Failed to create user:", err);
			throw err;
		}
	},
	async updateUser(id, patch) {
		try {
			const { error } = await supabase.from("users").update(patch).eq("id", id);
			if (error) throw error;
		} catch (err) {
			console.error("Failed to update user:", err);
			throw err;
		}
	},
	currentUserId() {
		return readLocal(SESSION_KEY, null);
	},
	clearSession() {
		if (isBrowser()) localStorage.removeItem(SESSION_KEY);
	},
	async listReports() {
		try {
			const { data, error } = await supabase.from("reports").select("*");
			if (error) throw error;
			return data || [];
		} catch (err) {
			console.error("Failed to list reports:", err);
			return [];
		}
	},
	async getReportByUser(user_id) {
		try {
			const { data, error } = await supabase.from("reports").select("*").eq("user_id", user_id).single();
			if (error) throw error;
			return data || void 0;
		} catch (err) {
			console.error("Failed to get report:", err);
			return;
		}
	},
	async saveReport(data) {
		try {
			const existing = await this.getReportByUser(data.user_id);
			let report;
			if (existing) {
				const { data: updated, error } = await supabase.from("reports").update(data).eq("user_id", data.user_id).select().single();
				if (error) throw error;
				report = updated;
			} else {
				const { data: created, error } = await supabase.from("reports").insert([data]).select().single();
				if (error) throw error;
				report = created;
			}
			return report;
		} catch (err) {
			console.error("Failed to save report:", err);
			throw err;
		}
	},
	async adminLogin(username, password) {
		try {
			const { data, error } = await supabase.from("admin_accounts").select("*").eq("username", username).eq("password_hash", password).single();
			if (error || !data) return false;
			writeLocal(ADMIN_KEY, true);
			return true;
		} catch (err) {
			console.error("Admin login failed:", err);
			return false;
		}
	},
	isAdmin() {
		return readLocal(ADMIN_KEY, false);
	},
	adminLogout() {
		if (isBrowser()) localStorage.removeItem(ADMIN_KEY);
	}
};
//#endregion
export { store as t };
