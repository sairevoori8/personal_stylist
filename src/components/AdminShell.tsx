import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { store } from "@/lib/store";
import { Button } from "@/components/ui/button";

export function AdminShell({ children, title }: { children: ReactNode; title?: string }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!store.isAdmin()) navigate({ to: "/admin" });
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/admin/dashboard" className="flex items-baseline gap-3">
            <span className="font-display text-lg">The Personal Style Lab</span>
            <span className="text-[10px] tracking-luxe text-muted-foreground">Admin</span>
          </Link>
          <Button
            variant="ghost"
            className="rounded-none tracking-luxe text-[10px] h-9"
            onClick={() => {
              store.adminLogout();
              navigate({ to: "/admin" });
            }}
          >
            Sign Out
          </Button>
        </div>
      </header>
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-10">
        {title && <h1 className="font-display text-3xl mb-8">{title}</h1>}
        {children}
      </main>
    </div>
  );
}
