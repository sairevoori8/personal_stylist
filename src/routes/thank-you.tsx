import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/thank-you")({
  head: () => ({ meta: [{ title: "Thank You — The Personal Style Lab" }] }),
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-xl text-center">
        <div className="mx-auto h-16 w-16 border border-foreground flex items-center justify-center">
          <Check className="h-7 w-7" strokeWidth={1.5} />
        </div>
        <p className="mt-8 text-[10px] tracking-luxe text-muted-foreground">Confirmation</p>
        <h1 className="font-display text-4xl md:text-5xl mt-3">Payment Successful</h1>
        <div className="mt-10 max-w-md mx-auto space-y-4 text-muted-foreground leading-relaxed">
          <p>Thank you for registering with The Personal Style Lab.</p>
          <p>Your Personal Style Report is currently being prepared by our styling team.</p>
          <p>The completed report will be sent to your WhatsApp number shortly.</p>
        </div>
        <div className="mt-12">
          <Button asChild className="h-12 px-10 rounded-none tracking-luxe text-xs">
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
