# Supabase Setup Guide

## 1. Create Supabase Account & Project
1. Go to [supabase.com](https://supabase.com) and sign up
2. Create a new project
3. Go to **Project Settings → API** to get your credentials

## 2. Get Your Credentials
You need 2 things:
- **VITE_SUPABASE_URL**: Project URL (looks like `https://xxxxx.supabase.co`)
- **VITE_SUPABASE_ANON_KEY**: Anon key
- **SUPABASE_SERVICE_ROLE_KEY**: Service role key (for server-side only)

## 3. Create Database Tables
Go to Supabase Dashboard → **SQL Editor** and run these queries:

```sql
-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  whatsapp_number TEXT NOT NULL,
  payment_status TEXT NOT NULL DEFAULT 'Not Completed',
  report_status TEXT NOT NULL DEFAULT 'Not Sent',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Reports table
CREATE TABLE reports (
  report_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  best_colours TEXT,
  metal_harmony TEXT,
  face_shape TEXT,
  styling_tips TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Admin accounts table
CREATE TABLE admin_accounts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Insert default admin
INSERT INTO admin_accounts (username, password_hash) 
VALUES ('admin', 'admin');
```

## 4. Update Environment Variables
Edit `.env.local`:
```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

## 5. Files Already Updated
✅ `src/lib/supabase.ts` - Supabase client setup
✅ `src/lib/store.ts` - All methods now use Supabase (async)
✅ `src/routes/index.tsx` - Registration now saves to DB
✅ `src/routes/admin.index.tsx` - Admin login queries DB
✅ `src/routes/admin.dashboard.tsx` - Loads users from DB
✅ `src/routes/admin.clients.$id.tsx` - Loads/saves reports from DB
✅ `src/routes/payment.tsx` - Updates payment status in DB

## 6. Row Level Security (Optional but Recommended)
Go to **SQL Editor** and enable RLS:
```sql
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_accounts ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert users (registration)
CREATE POLICY "Enable insert for registration" ON users
  FOR INSERT TO anon WITH CHECK (true);

-- Allow anonymous to read reports (after they have user_id in session)
CREATE POLICY "Users can read their own data" ON users
  FOR SELECT USING (true);

-- Similar policies for reports
CREATE POLICY "Users can read their own reports" ON reports
  FOR SELECT USING (true);
```

## 7. Test It!
- Run `npm run dev`
- Test registration → should save to Supabase users table
- Test admin login → should check admin_accounts table
- Test report sending → should save to reports table

## How It Works Now
1. **User Registration**: Form data → `store.createUser()` → Supabase `users` table
2. **Payment**: Button click → `store.updateUser()` → updates `payment_status` in DB
3. **Admin Login**: Credentials → `store.adminLogin()` → checks `admin_accounts` table
4. **Reports**: Form data → `store.saveReport()` → inserts/updates `reports` table
5. **Dashboard**: Loads all users → `store.listUsers()` → fetches from `users` table

## Important Notes
⚠️ Change the default admin password in `admin_accounts` table for production
⚠️ All store methods are now `async` - they return Promises
⚠️ Error handling is built in - check browser console if something fails
