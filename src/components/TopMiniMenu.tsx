import { Phone, Clock, MapPin, Facebook, Twitter, Instagram, Linkedin, Globe, ChevronDown } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function TopMiniMenu() {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: "en" as const, name: "English", flag: "🇬🇧" },
    { code: "sw" as const, name: "Swahili", flag: "🇰🇪" },
    { code: "fr" as const, name: "Français", flag: "🇫🇷" },
    { code: "es" as const, name: "Español", flag: "🇪🇸" },
    { code: "de" as const, name: "Deutsch", flag: "🇩🇪" },
    { code: "pt" as const, name: "Português", flag: "🇵🇹" },
  ];

  const currentLang = languages.find(l => l.code === language);

  return (
    <div className="bg-[#5C4033] text-[#FFFFF0] py-2.5 border-b border-[#D4AF37]/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center flex-wrap gap-2">
          <div className="flex items-center gap-4 md:gap-6 flex-wrap text-sm">
            <a
              href="tel:+254 745 319042"
              className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+254 745 319042</span>
            </a>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Mon-Fri: 8AM - 6PM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Eldoret, Kenya</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3">
              <a href="https://facebook.com/finaleworkspace" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="https://twitter.com/finaleworkspace" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a href="https://instagram.com/finaleworkspace" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="https://linkedin.com/company/finaleworkspace" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="border-l border-[#FFFFF0]/20 pl-4">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 text-xs hover:text-[#D4AF37] transition-colors">
                  <Globe className="w-3.5 h-3.5" />
                  <span>{currentLang?.flag} {currentLang?.code.toUpperCase()}</span>
                  <ChevronDown className="w-3 h-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-white border-[#5C4033]/20">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`flex items-center gap-2 cursor-pointer ${
                        language === lang.code ? "bg-[#D4AF37]/10 text-[#5C4033]" : "text-[#5C4033]/80"
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
