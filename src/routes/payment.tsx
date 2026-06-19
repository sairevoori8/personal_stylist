import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Brand } from "@/components/Brand";
import { Button } from "@/components/ui/button";
import { REPORT_PRICE, store } from "@/lib/store";
import { sendPaymentConfirmationEmail } from "@/lib/email";
import { toast } from "sonner";

export const Route = createFileRoute("/payment")({
  head: () => ({ meta: [{ title: "Payment — The Personal Style Lab" }] }),
  component: PaymentPage,
});

function PaymentPage() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    const id = store.currentUserId();
    if (!id) {
      navigate({ to: "/" });
      return;
    }
    setUserId(id);
  }, [navigate]);

  const handlePay = () => {
    if (!userId) return;

    setProcessing(true);

    // Razorpay Payment Link
    window.location.href = "https://rzp.io/rzp/IVzBG1uu";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-lg">
          <Brand small />
          <div className="mt-12 text-center">
            <p className="text-[10px] tracking-luxe text-muted-foreground">Your Order</p>
            <h2 className="font-display text-3xl md:text-4xl mt-3">Personal Style Report</h2>
            <div className="mt-8 inline-flex items-baseline gap-2">
              <span className="text-xs tracking-luxe text-muted-foreground">Amount</span>
              <span className="font-display text-4xl">₹{REPORT_PRICE.toLocaleString("en-IN")}</span>
            </div>
          </div>

          <div className="mt-12 border border-border p-8 md:p-10">
            <div className="flex items-center justify-between border-b border-border pb-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 border border-border flex items-center justify-center font-display text-lg">
                  R
                </div>
                <div>
                  <div className="text-sm font-medium">Razorpay</div>
                  <div className="text-[10px] tracking-luxe text-muted-foreground">Secure Checkout</div>
                </div>
              </div>
              <span className="text-[10px] tracking-luxe text-muted-foreground">Placeholder</span>
            </div>
            <div className="py-8 text-center">
              <p className="text-sm text-muted-foreground">Payment Gateway Integration Placeholder</p>
              <p className="text-xs text-muted-foreground mt-2">
                Razorpay Checkout Will Be Added Later
              </p>
            </div>
            <Button
              onClick={handlePay}
              disabled={processing}
              className="w-full h-12 rounded-none tracking-luxe text-xs"
            >
              {processing ? "Processing…" : "Pay Now"}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
