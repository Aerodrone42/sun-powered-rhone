import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface StickyCTAProps {
  phone?: string;
  quoteHref?: string;
}

const StickyCTA = ({ phone = "07 65 56 10 50", quoteHref = "/contact" }: StickyCTAProps) => {
  const tel = phone ? `tel:${phone.replace(/\s+/g, "")}` : undefined;
  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 animate-fade-in">
      <div className="mx-auto w-full md:w-auto bg-background/80 backdrop-blur-xl border border-border/40 rounded-2xl px-4 py-3 shadow-lg shadow-primary/10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild variant="hero" size="lg" className="w-full sm:w-auto">
            <Link to={quoteHref} aria-label="Demander un devis gratuit">Devis gratuit</Link>
          </Button>
          {tel && (
            <Button asChild variant="glass" size="lg" className="w-full sm:w-auto text-foreground">
              <a href={tel} aria-label={`Appeler le ${phone}`}>Appeler {phone}</a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
