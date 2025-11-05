import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { toast } from "sonner@2.0.3";

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for subscribing to our newsletter!");
    setEmail("");
  };

  return (
    <footer className="bg-[#5C4033] text-[#FFFFF0]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#D4AF37] rounded-lg flex items-center justify-center">
                <span className="text-[#5C4033]">W</span>
              </div>
              <div>
                <div className="text-lg">WorkNest</div>
                <div className="text-xs text-[#D4AF37]">Workspace Kenya</div>
              </div>
            </div>
            <p className="text-sm text-[#FFFFF0]/80 mb-4">
              Premium coworking and workspace solutions in the heart of Nairobi, Kenya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-[#D4AF37]">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Discover Us</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Products & Book</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Restaurant</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Magazine</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-[#D4AF37]">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-[#D4AF37]" />
                <span>+254 745 319042</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-[#D4AF37]" />
                <span>info@worknest.co.ke</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-[#D4AF37]" />
                <span>Eldoret, Kenya</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 text-[#D4AF37]">Newsletter</h4>
            <p className="text-sm text-[#FFFFF0]/80 mb-4">
              Subscribe to get updates and exclusive offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button
                type="submit"
                className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-[#5C4033]"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#FFFFF0]/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#FFFFF0]/80">
            © 2025 WorkNest Workspace Kenya. All rights reserved.
          </p>
          
          {/* Legal Links */}
          <div className="flex items-center gap-4 text-sm">
            <button 
              onClick={() => onNavigate?.('terms-of-service')}
              className="hover:text-[#D4AF37] transition-colors underline-offset-4 hover:underline"
            >
              Terms of Service
            </button>
            <span className="text-[#FFFFF0]/40">•</span>
            <button 
              onClick={() => onNavigate?.('privacy-policy')}
              className="hover:text-[#D4AF37] transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
