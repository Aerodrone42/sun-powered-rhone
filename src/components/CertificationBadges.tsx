import certQualiPV from "@/assets/cert-qualipv.png";
import certQualitEnR from "@/assets/cert-qualitenr.jpg";

export const CertificationBadges = () => {
  return (
    <div className="flex items-center justify-center gap-6 py-6 opacity-70 hover:opacity-100 transition-opacity">
      <img 
        src={certQualiPV} 
        alt="Certification RGE QualiPV 2025" 
        className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
      />
      <img 
        src={certQualitEnR} 
        alt="Certification Qualit'EnR" 
        className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
      />
    </div>
  );
};
