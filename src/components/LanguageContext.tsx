import React, { createContext, useContext, useState } from "react";

type Language = "en" | "sw" | "fr" | "es" | "de" | "pt";

interface Translations {
  [key: string]: {
    [lang in Language]: string;
  };
}

const translations: Translations = {
  // Navigation
  "nav.home": { en: "Home", sw: "Nyumbani", fr: "Accueil", es: "Inicio", de: "Startseite", pt: "Início" },
  "nav.discover": { en: "Discover Us", sw: "Gundua Sisi", fr: "Découvrez-nous", es: "Descúbrenos", de: "Entdecken Sie uns", pt: "Descubra-nos" },
  "nav.products": { en: "Products & Book", sw: "Bidhaa na Hifadhi", fr: "Produits & Réserver", es: "Productos y Reservar", de: "Produkte & Buchen", pt: "Produtos e Reservar" },
  "nav.getstarted": { en: "Get Started", sw: "Anza", fr: "Commencer", es: "Empezar", de: "Loslegen", pt: "Começar" },
  "nav.restaurant": { en: "Restaurant", sw: "Mkahawa", fr: "Restaurant", es: "Restaurante", de: "Restaurant", pt: "Restaurante" },
  "nav.events": { en: "Events", sw: "Matukio", fr: "Événements", es: "Eventos", de: "Veranstaltungen", pt: "Eventos" },
  "nav.magazine": { en: "Magazine", sw: "Jarida", fr: "Magazine", es: "Revista", de: "Magazin", pt: "Revista" },
  
  // Common
  "common.bookNow": { en: "Book Now", sw: "Hifadhi Sasa", fr: "Réserver maintenant", es: "Reservar ahora", de: "Jetzt buchen", pt: "Reservar agora" },
  "common.learnMore": { en: "Learn More", sw: "Jifunze Zaidi", fr: "En savoir plus", es: "Saber más", de: "Mehr erfahren", pt: "Saiba mais" },
  "common.contactUs": { en: "Contact Us", sw: "Wasiliana Nasi", fr: "Contactez-nous", es: "Contáctenos", de: "Kontaktieren Sie uns", pt: "Entre em contato" },
  "common.submit": { en: "Submit", sw: "Wasilisha", fr: "Soumettre", es: "Enviar", de: "Einreichen", pt: "Enviar" },
  "common.subscribe": { en: "Subscribe", sw: "Jiandikishe", fr: "S'abonner", es: "Suscribirse", de: "Abonnieren", pt: "Subscrever" },
  
  // Hero Section
  "hero.title1": { en: "Premium Workspace in Eldoret", sw: "Nafasi ya Kazi ya Ubora Eldoret", fr: "Espace de travail premium à Eldoret", es: "Espacio de trabajo premium en Eldoret", de: "Premium-Arbeitsbereich in Eldoret", pt: "Espaço de trabalho premium em Eldoret" },
  "hero.subtitle1": { en: "Elevate your work experience in the heart of Kenya", sw: "Inua uzoefu wako wa kazi katika moyo wa Kenya", fr: "Élevez votre expérience de travail au cœur du Kenya", es: "Eleva tu experiencia laboral en el corazón de Kenia", de: "Verbessern Sie Ihre Arbeitserfahrung im Herzen Kenias", pt: "Eleve sua experiência de trabalho no coração do Quênia" },
  
  // Booking Form
  "booking.selectSpace": { en: "Select Space", sw: "Chagua Nafasi", fr: "Sélectionner l'espace", es: "Seleccionar espacio", de: "Raum auswählen", pt: "Selecionar espaço" },
  "booking.checkIn": { en: "Check-in Date", sw: "Tarehe ya Kuingia", fr: "Date d'arrivée", es: "Fecha de entrada", de: "Anreisedatum", pt: "Data de entrada" },
  "booking.checkOut": { en: "Check-out Date", sw: "Tarehe ya Kutoka", fr: "Date de départ", es: "Fecha de salida", de: "Abreisedatum", pt: "Data de saída" },
  "booking.guests": { en: "Guests", sw: "Wageni", fr: "Invités", es: "Huéspedes", de: "Gäste", pt: "Hóspedes" },
  
  // Footer
  "footer.copyright": { en: "© 2025 WorkNest Co-Working space Kenya. All rights reserved.", sw: "© 2025 WorkNest Co-Working space Kenya. Haki zote zimehifadhiwa.", fr: "© 2025 Finale Workspace Kenya. Tous droits réservés.", es: "© 2025 Finale Workspace Kenya. Todos los derechos reservados.", de: "© 2025 Finale Workspace Kenya. Alle Rechte vorbehalten.", pt: "© 2025 Finale Workspace Kenya. Todos os direitos reservados." },
  "footer.termsOfService": { en: "Terms of Service", sw: "Masharti ya Huduma", fr: "Conditions d'utilisation", es: "Términos de servicio", de: "Nutzungsbedingungen", pt: "Termos de serviço" },
  "footer.privacyPolicy": { en: "Privacy Policy", sw: "Sera ya Faragha", fr: "Politique de confidentialité", es: "Política de privacidad", de: "Datenschutzrichtlinie", pt: "Política de privacidade" },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
