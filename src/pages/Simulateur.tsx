import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const SolarSimulator = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Calculateur Solaire PVGIS | WN Energies</title>
        <meta name="description" content="Utilisez notre calculateur solaire PVGIS pour estimer la production potentielle de vos panneaux solaires en Rhône-Alpes." />
      </Helmet>
      
      <Header />
      
      <main className="flex-1 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Calculateur Solaire PVGIS
            </h1>
            <p className="text-center text-muted-foreground mb-8 text-lg">
              Outil officiel de calcul de production photovoltaïque de la Commission Européenne
            </p>
            
            <div className="bg-card rounded-2xl shadow-2xl overflow-hidden">
              <iframe 
                src="https://re.jrc.ec.europa.eu/pvg_tools/en/#PVP=47.2_-1.55_35_0_1_0_0.1_1_0_0_0" 
                width="100%" 
                height="800" 
                style={{ border: 'none' }}
                title="Calcul PVGIS"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SolarSimulator;
