import { supabase } from './supabase';

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

const SESSION_KEY = "psl_current_user";
const ADMIN_KEY = "psl_admin_session";

const isBrowser = () => typeof window !== "undefined";

function readLocal<T>(key: string, fallback: T): T {
  if (!isBrowser()) return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeLocal<T>(key: string, value: T) {
  if (!isBrowser()) return;
  localStorage.setItem(key, JSON.stringify(value));
}

export const store = {
  async listUsers(): Promise<User[]> {
    try {
      const { data, error } = await supabase.from('users').select('*');
      if (error) throw error;
      return data || [];
    } catch (err) {
      console.error('Failed to list users:', err);
      return [];
    }
  },

  async getUser(id: string): Promise<User | undefined> {
    try {
      const { data, error } = await supabase.from('users').select('*').eq('id', id).single();
      if (error) throw error;
      return data || undefined;
    } catch (err) {
      console.error('Failed to get user:', err);
      return undefined;
    }
  },

  async createUser(data: Omit<User, "id" | "payment_status" | "report_status" | "created_at">): Promise<User> {
    try {
      const { data: user, error } = await supabase
        .from('users')
        .insert([{
          name: data.name,
          email: data.email,
          whatsapp_number: data.whatsapp_number,
          payment_status: 'Not Completed',
          report_status: 'Not Sent',
        }])
        .select()
        .single();

      if (error) throw error;
      if (user) writeLocal(SESSION_KEY, user.id);
      return user;
    } catch (err) {
      console.error('Failed to create user:', err);
      throw err;
    }
  },

  async updateUser(id: string, patch: Partial<User>): Promise<void> {
    try {
      const { error } = await supabase
        .from('users')
        .update(patch)
        .eq('id', id);
      if (error) throw error;
    } catch (err) {
      console.error('Failed to update user:', err);
      throw err;
    }
  },

  currentUserId(): string | null {
    return readLocal<string | null>(SESSION_KEY, null);
  },

  clearSession() {
    if (isBrowser()) localStorage.removeItem(SESSION_KEY);
  },

  async listReports(): Promise<Report[]> {
    try {
      const { data, error } = await supabase.from('reports').select('*');
      if (error) throw error;
      return data || [];
    } catch (err) {
      console.error('Failed to list reports:', err);
      return [];
    }
  },

  async getReportByUser(user_id: string): Promise<Report | undefined> {
    try {
      const { data, error } = await supabase
        .from('reports')
        .select('*')
        .eq('user_id', user_id)
        .single();
      if (error) throw error;
      return data || undefined;
    } catch (err) {
      console.error('Failed to get report:', err);
      return undefined;
    }
  },

  async saveReport(data: Omit<Report, "report_id" | "created_at">): Promise<Report> {
    try {
      const existing = await this.getReportByUser(data.user_id);
      let report: Report;

      if (existing) {
        const { data: updated, error } = await supabase
          .from('reports')
          .update(data)
          .eq('user_id', data.user_id)
          .select()
          .single();
        if (error) throw error;
        report = updated;
      } else {
        const { data: created, error } = await supabase
          .from('reports')
          .insert([data])
          .select()
          .single();
        if (error) throw error;
        report = created;
      }

      return report;
    } catch (err) {
      console.error('Failed to save report:', err);
      throw err;
    }
  },

  async adminLogin(username: string, password: string): Promise<boolean> {
    try {
      const { data, error } = await supabase
        .from('admin_accounts')
        .select('*')
        .eq('username', username)
        .eq('password_hash', password)
        .single();

      if (error || !data) return false;
      writeLocal(ADMIN_KEY, true);
      return true;
    } catch (err) {
      console.error('Admin login failed:', err);
      return false;
    }
  },

  isAdmin(): boolean {
    return readLocal<boolean>(ADMIN_KEY, false);
  },

  adminLogout() {
    if (isBrowser()) localStorage.removeItem(ADMIN_KEY);
  },
};

export const REPORT_PRICE = 2499;
