import certRgeQualiPV from "@/assets/cert-rge-qualipv.png";
import certQualitEnR from "@/assets/cert-qualitenr.jpg";

export const CertificationBadges = () => {
  return (
    <div className="flex items-center justify-center gap-6 py-4">
      <div className="bg-white rounded-xl p-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.15)] transition-all hover:scale-105 transform">
        <img 
          src={certRgeQualiPV} 
          alt="Certification RGE QualiPV - PV 36 et PV 500" 
          className="h-20 w-auto object-contain"
        />
      </div>
      <div className="bg-white rounded-xl p-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.15)] transition-all hover:scale-105 transform">
        <img 
          src={certQualitEnR} 
          alt="Certification Qualit'EnR" 
          className="h-20 w-auto object-contain"
        />
      </div>
    </div>
  );
};
