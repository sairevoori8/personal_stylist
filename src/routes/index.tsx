import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Brand } from "@/components/Brand";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { store } from "@/lib/store";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Personal Style Lab — by Nine Profiles" },
      { name: "description", content: "Register for your Personal Style Report. Style for the life you're building." },
    ],
  }),
  component: RegistrationPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  whatsapp_number: z
    .string()
    .trim()
    .min(7, "Enter a valid WhatsApp number")
    .max(20)
    .regex(/^[+\d\s()-]+$/, "Only digits, spaces and + - ( ) allowed"),
});

function RegistrationPage() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ name: "", email: "", whatsapp_number: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        fieldErrors[i.path[0] as string] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);
    store.createUser(parsed.data);
    toast.success("Registration complete");
    navigate({ to: "/payment" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-end px-6 py-4">
        <Link
          to="/admin"
          className="text-[10px] tracking-luxe text-muted-foreground hover:text-foreground border border-border px-4 py-2 transition-colors"
        >
          Admin
        </Link>
      </header>
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          <Brand />
          <div className="mt-16 border-t border-border pt-12">
            <h2 className="text-xs tracking-luxe text-muted-foreground text-center mb-10">
              Begin Your Journey
            </h2>
            <form onSubmit={onSubmit} className="space-y-6" noValidate>
              <Field label="Full Name" error={errors.name}>
                <Input
                  value={values.name}
                  onChange={(e) => setValues({ ...values, name: e.target.value })}
                  placeholder="Your name"
                  className="h-12 rounded-none border-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-foreground"
                />
              </Field>
              <Field label="Email Address" error={errors.email}>
                <Input
                  type="email"
                  value={values.email}
                  onChange={(e) => setValues({ ...values, email: e.target.value })}
                  placeholder="you@example.com"
                  className="h-12 rounded-none border-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-foreground"
                />
              </Field>
              <Field label="WhatsApp Number" error={errors.whatsapp_number}>
                <Input
                  value={values.whatsapp_number}
                  onChange={(e) => setValues({ ...values, whatsapp_number: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="h-12 rounded-none border-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-foreground"
                />
              </Field>
              <Button
                type="submit"
                disabled={submitting}
                className="w-full h-12 mt-8 rounded-none tracking-luxe text-xs"
              >
                Register
              </Button>
            </form>
          </div>
        </div>
      </main>
      <footer className="py-6 text-center text-xs tracking-luxe text-muted-foreground">
        © Nine Profiles
      </footer>
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <Label className="text-[10px] tracking-luxe text-muted-foreground">{label}</Label>
      <div className="mt-1">{children}</div>
      {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
    </div>
  );
}
