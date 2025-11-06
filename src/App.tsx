import { useState } from "react";
import { Toaster } from "./components/ui/sonner";
import { LanguageProvider } from "./components/LanguageContext";
import { TopMiniMenu } from "./components/TopMiniMenu";
import { MainNavbar } from "./components/MainNavbar";
import { Footer } from "./components/Footer";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import { HomePage } from "./components/pages/HomePage";
import { DiscoverUs } from "./components/pages/DiscoverUs";
import { AboutUs } from "./components/pages/AboutUs";
import { Mission } from "./components/pages/Mission";
import { Team } from "./components/pages/Team";
import { SpacesGallery } from "./components/pages/SpacesGallery";
import { OfficeSpaces } from "./components/pages/OfficeSpaces";
import { ProductsBook } from "./components/pages/ProductsBook";
import { GetStarted } from "./components/pages/GetStarted";
import { BookTour } from "./components/pages/BookTour";
import { Pricing } from "./components/pages/Pricing";
import { FAQ } from "./components/pages/FAQ";
import { Restaurant } from "./components/pages/Restaurant";
import { Menu } from "./components/pages/Menu";
import { Events } from "./components/pages/Events";
import { Magazine } from "./components/pages/Magazine";
import { ArticleSingle } from "./components/pages/ArticleSingle";
import { Boardrooms } from "./components/pages/Boardrooms";
import { KidsZone } from "./components/pages/KidsZone";
import { TelephoneBooths } from "./components/pages/TelephoneBooths";
import { HostEvent } from "./components/pages/HostEvent";
import { ReserveTable } from "./components/pages/ReserveTable";
import { Contact } from "./components/pages/Contact";
import { NavbarPreview } from "./components/NavbarPreview";
import { SiteMap } from "./components/SiteMap";
import { TermsOfService } from "./components/pages/TermsOfService";
import { PrivacyPolicy } from "./components/pages/PrivacyPolicy";
import { PaymentMethods } from "./components/pages/PaymentMethods";
import { useEffect } from "react";


function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      // Main pages
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "navbar-preview":
        return <NavbarPreview />;
      case "sitemap":
        return <SiteMap onNavigate={handleNavigate} />;
      case "contact":
        return <Contact />;

      // Discover Us section
      case "discover":
        return <DiscoverUs onNavigate={handleNavigate} />;
      case "about":
        return <AboutUs onNavigate={handleNavigate} />;
      case "mission":
        return <Mission onNavigate={handleNavigate} />;
      case "team":
        return <Team onNavigate={handleNavigate} />;
      case "spaces-gallery":
        return <SpacesGallery onNavigate={handleNavigate} />;

      // Products & Book section
      case "products":
        return <ProductsBook />;
      case "office-spaces":
        return <OfficeSpaces onNavigate={handleNavigate} />;
      case "boardrooms":
        return <Boardrooms onNavigate={handleNavigate} />;
      case "event-spaces":
        return <ProductsBook />;
      case "kids-zone":
        return <KidsZone onNavigate={handleNavigate} />;
      case "telephone-booths":
        return <TelephoneBooths onNavigate={handleNavigate} />;

      // Get Started section
      case "getstarted":
        return <GetStarted onNavigate={handleNavigate} />;
      case "join-member":
        return <GetStarted onNavigate={handleNavigate} />;
      case "book-tour":
        return <BookTour onNavigate={handleNavigate} />;
      case "pricing":
        return <Pricing onNavigate={handleNavigate} />;
      case "faq":
        return <FAQ onNavigate={handleNavigate} />;

      // Restaurant section
      case "restaurant":
        return <Restaurant />;
      case "menu":
        return <Menu onNavigate={handleNavigate} />;
      case "reserve-table":
        return <ReserveTable onNavigate={handleNavigate} />;
      case "special-offers":
        return <Restaurant />;

      // Events section
      case "events":
        return <Events onNavigate={handleNavigate} />;
      case "host-event":
        return <HostEvent onNavigate={handleNavigate} />;
      case "past-events":
        return <Events onNavigate={handleNavigate} />;

      // Magazine section
      case "magazine":
      case "workstyle-tips":
      case "design-inspirations":
      case "success-stories":
        return <Magazine onNavigate={handleNavigate} />;
      case "article":
        return <ArticleSingle onNavigate={handleNavigate} />;

      // Legal pages
      case "terms-of-service":
        return <TermsOfService />;
      case "privacy-policy":
        return <PrivacyPolicy />;

      // Payment
      case "payment-methods":
        return <PaymentMethods onNavigate={handleNavigate} />;

      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#FFFFF0]">
        <TopMiniMenu />
        <MainNavbar currentPage={currentPage} onNavigate={handleNavigate} />
        <main>{renderPage()}</main>
        <Footer onNavigate={handleNavigate} />
        <WhatsAppFloat />
        <Toaster position="top-right" />
      </div>
    </LanguageProvider>
  );
}

export default App;
