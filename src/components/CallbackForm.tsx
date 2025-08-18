import { useState } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { CalendarIcon, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
const CallbackForm = () => {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !time || !firstName || !lastName || !phone) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive"
      });
      return;
    }

    // Simulation d'envoi
    toast({
      title: "Demande envoyée !",
      description: `Nous vous rappellerons le ${format(date, "dd MMMM yyyy", {
        locale: fr
      })} à ${time}`
    });

    // Reset form
    setDate(undefined);
    setTime("");
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };
  const timeSlots = ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00"];
  return <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl">
          <Phone className="h-6 w-6 text-primary" />
          Demande de rappel gratuit
        </CardTitle>
        <p className="text-muted-foreground">Nous vous recontactons dans votre date et heure choisies pour discuter de votre projet solaire</p>
      </CardHeader>
      <CardContent>
        <form action="https://formsubmit.co/contact@wn-energies.fr" method="POST" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Prénom *</Label>
              <Input id="firstName" name="prenom" className="solar-hover" placeholder="Votre prénom" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Nom *</Label>
              <Input id="lastName" name="nom" className="solar-hover" placeholder="Votre nom" required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone *</Label>
              <Input id="phone" name="telephone" type="tel" className="solar-hover" placeholder="06 12 34 56 78" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" className="solar-hover" placeholder="votre@email.com" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Date souhaitée *</Label>
              <input type="hidden" name="date" id="date-hidden" />
              <Popover>
                <PopoverTrigger asChild>
                  <Button type="button" variant="outline" className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}>
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "dd MMMM yyyy", {
                    locale: fr
                  }) : "Choisir une date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar mode="single" selected={date} onSelect={selectedDate => {
                  setDate(selectedDate);
                  if (selectedDate) {
                    const dateInput = document.getElementById('date-hidden') as HTMLInputElement;
                    dateInput.value = format(selectedDate, "dd/MM/yyyy", {
                      locale: fr
                    });
                  }
                }} disabled={date => date < new Date() || date.getDay() === 0} initialFocus locale={fr} className="pointer-events-auto" />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label>Heure souhaitée *</Label>
              <select name="heure" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 solar-hover" required>
                <option value="">Choisir une heure</option>
                {timeSlots.map(slot => <option key={slot} value={slot}>
                    {slot}
                  </option>)}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message (optionnel)</Label>
            <Textarea id="message" name="message" className="solar-hover" placeholder="Décrivez brièvement votre projet ou vos questions..." rows={3} />
          </div>

          {/* Champs cachés pour formsubmit */}
          <input type="hidden" name="_subject" value="Demande de rappel - WN Energies" />
          <input type="hidden" name="_next" value={window.location.origin + "?callback=true"} />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_autoresponse" value="Merci pour votre demande de rappel ! Nous vous recontacterons dans les plus brefs délais." />
          
          <Button type="submit" className="w-full btn-solar" size="lg">
            Demander un rappel
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            * Champs obligatoires. Nous nous engageons à vous rappeler dans les 24h ouvrées.
          </p>
        </form>
      </CardContent>
    </Card>;
};
export default CallbackForm;