import certQualiPV from "@/assets/cert-qualipv.png";
import certQualitEnR from "@/assets/cert-qualitenr.jpg";

export const CertificationBadges = () => {
  return (
    <div className="flex items-center justify-center gap-4 opacity-60 hover:opacity-100 transition-opacity">
      <img 
        src={certQualiPV} 
        alt="Certification RGE QualiPV 2025" 
        className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all"
      />
      <img 
        src={certQualitEnR} 
        alt="Certification Qualit'EnR" 
        className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all"
      />
    </div>
  );
};
