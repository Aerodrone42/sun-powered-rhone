import { Button } from "@/components/ui/button";

interface StickyCTAProps {
  phone?: string;
  quoteHref?: string;
}

const StickyCTA = ({ phone = "07 71 41 85 68", quoteHref = "/contact" }: StickyCTAProps) => {
  const tel = phone ? `tel:${phone.replace(/\s+/g, "")}` : undefined;
  return (
    <div className="fixed bottom-4 inset-x-4 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:bottom-6 z-50">
      <div className="mx-auto w-full md:w-auto bg-background/80 backdrop-blur-xl border border-border/40 rounded-2xl px-4 py-3 shadow-lg shadow-primary/10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild variant="hero" size="lg" className="w-full sm:w-auto">
            <a href={quoteHref} aria-label="Demander un devis gratuit">Devis gratuit</a>
          </Button>
          {tel && (
            <Button asChild variant="glass" size="lg" className="w-full sm:w-auto">
              <a href={tel} aria-label={`Appeler le ${phone}`}>Appeler {phone}</a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
