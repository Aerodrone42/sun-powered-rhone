import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Particuliers from "./pages/Particuliers";
import Professionnels from "./pages/Professionnels";
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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/particuliers" element={<Particuliers />} />
            <Route path="/particuliers/panneaux-solaires" element={<PanneauxSolaires />} />
            
            <Route path="/particuliers/batterie-solaire" element={<BatterieSolaire />} />
            <Route path="/particuliers/borne-recharge" element={<BorneRecharge />} />
            <Route path="/particuliers/installation-consommation" element={<InstallationConsommation />} />
            <Route path="/professionnels/panneaux-solaires" element={<PanneauxSolairesPro />} />
            <Route path="/professionnels/installation-consommation" element={<InstallationConsommationPro />} />
            <Route path="/professionnels/borne-recharge" element={<BorneRechargePro />} />
            <Route path="/professionnels/batterie-solaire" element={<BatterieSolairePro />} />
            <Route path="/professionnels/commerce" element={<CommercePro />} />
            <Route path="/professionnels" element={<Professionnels />} />
            <Route path="/simulateur" element={<Simulateur />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
