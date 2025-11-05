import { Home, ChevronRight } from "lucide-react";

export function SiteMap({ onNavigate }: { onNavigate: (page: string) => void }) {
  const siteStructure = [
    {
      category: "Main Pages",
      pages: [
        { name: "Home", path: "home" },
        { name: "Contact", path: "contact" },
        { name: "Navigation Preview", path: "navbar-preview" },
      ],
    },
    {
      category: "Discover Us",
      pages: [
        { name: "About Our Spaces", path: "about" },
        { name: "Why Choose Us", path: "discover" },
        { name: "Gallery", path: "spaces-gallery" },
        { name: "Our Mission & Vision", path: "mission" },
        { name: "The Team", path: "team" },
      ],
    },
    {
      category: "Products & Book",
      pages: [
        { name: "All Spaces", path: "products" },
        { name: "Office Spaces", path: "office-spaces" },
        { name: "Boardrooms", path: "boardrooms" },
        { name: "Event Spaces", path: "event-spaces" },
        { name: "Kids Zone", path: "kids-zone" },
        { name: "Telephone Booths", path: "telephone-booths" },
      ],
    },
    {
      category: "Get Started",
      pages: [
        { name: "Get Started Hub", path: "getstarted" },
        { name: "Book a Space", path: "products" },
        { name: "Join Our Community", path: "join-member" },
        { name: "Book a Tour", path: "book-tour" },
        { name: "View Pricing", path: "pricing" },
        { name: "FAQ", path: "faq" },
      ],
    },
    {
      category: "Restaurant",
      pages: [
        { name: "Restaurant Home", path: "restaurant" },
        { name: "View Menu", path: "menu" },
        { name: "Reserve a Table", path: "reserve-table" },
        { name: "Special Offers", path: "special-offers" },
      ],
    },
    {
      category: "Events",
      pages: [
        { name: "Upcoming Events", path: "events" },
        { name: "Host Your Event", path: "host-event" },
        { name: "Past Highlights", path: "past-events" },
      ],
    },
    {
      category: "Magazine",
      pages: [
        { name: "Latest Stories", path: "magazine" },
        { name: "Workstyle Tips", path: "workstyle-tips" },
        { name: "Design Inspirations", path: "design-inspirations" },
        { name: "Success Stories", path: "success-stories" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFFF0] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-20 h-1 bg-[#D4AF37] mb-6 mx-auto" />
          <h1 className="text-5xl text-[#5C4033] mb-6">Complete Site Map</h1>
          <p className="text-xl text-[#5C4033]/70 max-w-3xl mx-auto">
            All pages accessible through the enhanced navigation system
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {siteStructure.map((section, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 shadow-refined-lg border border-[#5C4033]/10"
              >
                <h3 className="text-[#5C4033] mb-4 pb-3 border-b border-[#D4AF37]/20">
                  {section.category}
                </h3>
                <ul className="space-y-2">
                  {section.pages.map((page, pageIdx) => (
                    <li key={pageIdx}>
                      <button
                        onClick={() => onNavigate(page.path)}
                        className="w-full text-left px-3 py-2 rounded text-sm text-[#5C4033]/80 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-colors flex items-center gap-2 group"
                      >
                        <ChevronRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                        <span>{page.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] rounded-lg p-8 text-center">
            <Home className="w-12 h-12 text-[#5C4033] mx-auto mb-4" />
            <h3 className="text-[#5C4033] mb-2">Total Pages: {siteStructure.reduce((acc, section) => acc + section.pages.length, 0)}</h3>
            <p className="text-[#5C4033]/80">
              Complete multi-page platform with enhanced navigation and routing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
