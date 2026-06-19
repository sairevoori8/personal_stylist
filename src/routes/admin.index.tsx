import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { store } from "@/lib/store";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/")({
  head: () => ({ meta: [{ title: "Admin Login — The Personal Style Lab" }] }),
  component: AdminLogin,
});

function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace placeholder auth with  Cloud auth + role check.
    if (store.adminLogin(username, password)) {
      toast.success("Welcome back");
      navigate({ to: "/admin/dashboard" });
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="text-center">
          <p className="text-[10px] tracking-luxe text-muted-foreground">Nine Profiles</p>
          <h1 className="font-display text-3xl mt-2">Admin Access</h1>
        </div>
        <form onSubmit={submit} className="mt-12 space-y-6">
          <div>
            <Label className="text-[10px] tracking-luxe text-muted-foreground">Username</Label>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="h-12 mt-1 rounded-none border-0 border-b bg-transparent px-0 focus-visible:ring-0 focus-visible:border-foreground"
            />
          </div>
          <div>
            <Label className="text-[10px] tracking-luxe text-muted-foreground">Password</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12 mt-1 rounded-none border-0 border-b bg-transparent px-0 focus-visible:ring-0 focus-visible:border-foreground"
            />
          </div>
          <Button type="submit" className="w-full h-12 rounded-none tracking-luxe text-xs">
            Sign In
          </Button>
          <p className="text-[10px] text-center text-muted-foreground tracking-wide">
            Demo credentials — admin / admin
          </p>
        </form>
      </div>
    </div>
  );
}

