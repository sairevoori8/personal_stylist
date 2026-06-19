// Mock database backed by localStorage.
// TODO: Replace with Lovable Cloud (Supabase) tables: users, reports.

export type PaymentStatus = "Completed" | "Not Completed";
export type ReportStatus = "Sent" | "Not Sent";

export interface User {
  id: string;
  name: string;
  email: string;
  whatsapp_number: string;
  payment_status: PaymentStatus;
  report_status: ReportStatus;
  created_at: string;
}

export interface Report {
  report_id: string;
  user_id: string;
  best_colours: string;
  metal_harmony: string;
  face_shape: string;
  styling_tips: string;
  created_at: string;
}

const USERS_KEY = "psl_users";
const REPORTS_KEY = "psl_reports";
const SESSION_KEY = "psl_current_user";
const ADMIN_KEY = "psl_admin_session";

const isBrowser = () => typeof window !== "undefined";

function read<T>(key: string, fallback: T): T {
  if (!isBrowser()) return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write<T>(key: string, value: T) {
  if (!isBrowser()) return;
  localStorage.setItem(key, JSON.stringify(value));
}

export const store = {
  listUsers(): User[] {
    return read<User[]>(USERS_KEY, []);
  },
  getUser(id: string): User | undefined {
    return this.listUsers().find((u) => u.id === id);
  },
  createUser(data: Omit<User, "id" | "payment_status" | "report_status" | "created_at">): User {
    const user: User = {
      id: crypto.randomUUID(),
      ...data,
      payment_status: "Not Completed",
      report_status: "Not Sent",
      created_at: new Date().toISOString(),
    };
    const users = this.listUsers();
    users.push(user);
    write(USERS_KEY, users);
    write(SESSION_KEY, user.id);
    return user;
  },
  updateUser(id: string, patch: Partial<User>) {
    const users = this.listUsers().map((u) => (u.id === id ? { ...u, ...patch } : u));
    write(USERS_KEY, users);
  },
  currentUserId(): string | null {
    return read<string | null>(SESSION_KEY, null);
  },
  clearSession() {
    if (isBrowser()) localStorage.removeItem(SESSION_KEY);
  },

  listReports(): Report[] {
    return read<Report[]>(REPORTS_KEY, []);
  },
  getReportByUser(user_id: string): Report | undefined {
    return this.listReports().find((r) => r.user_id === user_id);
  },
  saveReport(data: Omit<Report, "report_id" | "created_at">): Report {
    const reports = this.listReports();
    const existing = reports.find((r) => r.user_id === data.user_id);
    let report: Report;
    if (existing) {
      report = { ...existing, ...data };
      const idx = reports.indexOf(existing);
      reports[idx] = report;
    } else {
      report = { ...data, report_id: crypto.randomUUID(), created_at: new Date().toISOString() };
      reports.push(report);
    }
    write(REPORTS_KEY, reports);
    return report;
  },

  adminLogin(username: string, password: string): boolean {
    // Placeholder auth. TODO: replace with real Lovable Cloud auth + roles.
    if (username === "admin" && password === "admin") {
      write(ADMIN_KEY, true);
      return true;
    }
    return false;
  },
  isAdmin(): boolean {
    return read<boolean>(ADMIN_KEY, false);
  },
  adminLogout() {
    if (isBrowser()) localStorage.removeItem(ADMIN_KEY);
  },
};

export const REPORT_PRICE = 2499;
