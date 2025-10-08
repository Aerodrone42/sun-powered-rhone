import certQualiPV from "@/assets/cert-qualipv.png";
import certQualitEnR from "@/assets/cert-qualitenr.jpg";

export const CertificationBadges = () => {
  return (
    <div className="flex items-center justify-center gap-6 py-4">
      <div className="bg-white rounded-xl p-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.15)] transition-all hover:scale-105 transform">
        <img 
          src={certQualiPV} 
          alt="Certification RGE QualiPV 2025" 
          className="h-16 w-auto object-contain"
        />
      </div>
      <div className="bg-white rounded-xl p-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.15)] transition-all hover:scale-105 transform">
        <img 
          src={certQualitEnR} 
          alt="Certification Qualit'EnR" 
          className="h-16 w-auto object-contain"
        />
      </div>
    </div>
  );
};
