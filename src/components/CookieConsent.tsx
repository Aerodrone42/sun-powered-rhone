import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { X, Cookie, Shield, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem('cookie-consent', 'necessary');
    setIsVisible(false);
  };

  const rejectAll = () => {
    localStorage.setItem('cookie-consent', 'none');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in">
      <Card className="max-w-4xl mx-auto bg-background/95 backdrop-blur-xl border border-border/50 shadow-2xl">
        <div className="p-6">
          {!showDetails ? (
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex items-center gap-3 text-primary">
                <Cookie className="h-6 w-6" />
                <h3 className="font-semibold text-lg">Respect de votre vie privée</h3>
              </div>
              
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">
                  Nous utilisons des cookies pour améliorer votre expérience de navigation, 
                  analyser le trafic du site et personnaliser le contenu. 
                  <Link to="/politique-confidentialite" className="text-primary hover:underline ml-1">
                    En savoir plus
                  </Link>
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowDetails(true)}
                  className="text-xs"
                >
                  <Settings className="h-3 w-3 mr-1" />
                  Paramétrer
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={acceptNecessary}
                  className="text-xs"
                >
                  Nécessaires uniquement
                </Button>
                <Button
                  variant="hero"
                  size="sm"
                  onClick={acceptAll}
                  className="text-xs"
                >
                  Tout accepter
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-primary">
                  <Shield className="h-6 w-6" />
                  <h3 className="font-semibold text-lg">Gestion des cookies</h3>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowDetails(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid gap-4">
                <div className="p-4 border border-border/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Cookies nécessaires</h4>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Obligatoires</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Ces cookies sont essentiels au fonctionnement du site web et ne peuvent pas être désactivés.
                  </p>
                </div>

                <div className="p-4 border border-border/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Cookies analytiques</h4>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Optionnels</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Ces cookies nous aident à comprendre comment vous utilisez notre site pour l'améliorer.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={rejectAll}
                  className="text-xs"
                >
                  Tout refuser
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={acceptNecessary}
                  className="text-xs"
                >
                  Nécessaires uniquement
                </Button>
                <Button
                  variant="hero"
                  size="sm"
                  onClick={acceptAll}
                  className="text-xs"
                >
                  Tout accepter
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default CookieConsent;