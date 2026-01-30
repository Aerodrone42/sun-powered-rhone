import { Toaster } from "@/components/ui/toaster";
import SitemapRedirect from "./components/SitemapRedirect";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import SunParticles from "./components/SunParticles";
import CookieConsent from "./components/CookieConsent";
import { MetaPixelTracker } from "./hooks/useMetaPixel";
import Index from "./pages/Index";
import Particuliers from "./pages/Particuliers";
import Professionnels from "./pages/Professionnels";
import Agriculteurs from "./pages/Agriculteurs";
import MarchesPublics from "./pages/MarchesPublics";
import Contact from "./pages/Contact";
import Simulateur from "./pages/Simulateur";
import BorneRecharge from "./pages/BorneRecharge";
import BatterieSolaire from "./pages/BatterieSolaire";
import InstallationConsommation from "./pages/InstallationConsommation";
import PanneauxSolaires from "./pages/PanneauxSolaires";
import PanneauxSolairesPro from "./pages/PanneauxSolairesPro";
import InstallationConsommationPro from "./pages/InstallationConsommationPro";
import BorneRechargePro from "./pages/BorneRechargePro";
import BatterieSolairePro from "./pages/BatterieSolairePro";
import CommercePro from "./pages/CommercePro";
import ZoneIntervention from "./pages/ZoneIntervention";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import NotFound from "./pages/NotFound";
import TarifsAides from "./pages/TarifsAides";
import VillePage from "./pages/VillePage";
import Blog from "./pages/Blog";

const queryClient = new QueryClient();
// Force refresh for TarifsAides route

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HelmetProvider>
        <BrowserRouter>
          <MetaPixelTracker />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/particuliers" element={<Particuliers />} />
            <Route path="/particuliers/panneaux-solaires" element={<PanneauxSolaires />} />
            <Route path="/particuliers/batterie-solaire" element={<BatterieSolaire />} />
            <Route path="/particuliers/borne-recharge" element={<BorneRecharge />} />
            <Route path="/particuliers/installation-consommation" element={<InstallationConsommation />} />
            <Route path="/professionnels" element={<Professionnels />} />
            <Route path="/professionnels/panneaux-solaires" element={<PanneauxSolairesPro />} />
            <Route path="/professionnels/installation-consommation" element={<InstallationConsommationPro />} />
            <Route path="/professionnels/borne-recharge" element={<BorneRechargePro />} />
            <Route path="/professionnels/batterie-solaire" element={<BatterieSolairePro />} />
            <Route path="/professionnels/commerce" element={<CommercePro />} />
            <Route path="/professionnels/industrie-agricoles" element={<Agriculteurs />} />
            <Route path="/agriculteurs" element={<Agriculteurs />} />
            <Route path="/marches-publics" element={<MarchesPublics />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
            <Route path="/simulateur" element={<Simulateur />} />
            <Route path="/zone-intervention" element={<ZoneIntervention />} />
            <Route path="/tarifs-aides" element={<TarifsAides />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/ville/:citySlug" element={<VillePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sitemap.xml" element={<SitemapRedirect />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CookieConsent />
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
