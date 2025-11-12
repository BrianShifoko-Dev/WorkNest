import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

interface MainNavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

interface DropdownItem {
  name: string;
  path: string;
}

interface NavItem {
  name: string;
  path?: string;
  dropdown?: DropdownItem[];
}

export function MainNavbar({ currentPage, onNavigate }: MainNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const navItems: NavItem[] = [
    {
      name: "Discover Us",
      dropdown: [
        { name: "About Our Spaces", path: "about" },
        { name: "Why Choose Us", path: "discover" },
        { name: "Gallery", path: "spaces-gallery" },
        { name: "Our Mission & Vision", path: "mission" },
      ],
    },
    {
      name: "Products & Book",
      dropdown: [
        { name: "Office Spaces", path: "office-spaces" },
        { name: "Boardrooms", path: "boardrooms" },
        { name: "Event Spaces", path: "event-spaces" },
        { name: "Kids Zone", path: "kids-zone" },
        { name: "Telephone Booths", path: "telephone-booths" },
      ],
    },
    {
      name: "Restaurant",
      dropdown: [
        { name: "View Menu", path: "menu" },
        { name: "Reserve a Table", path: "reserve-table" },
        { name: "Our Restaurant", path: "restaurant" },
      ],
    },
    {
      name: "Events",
      dropdown: [
        { name: "Upcoming Events", path: "events" },
        { name: "Host Your Event", path: "host-event" },
        { name: "Past Highlights", path: "past-events" },
      ],
    },
    {
      name: "Magazine",
      dropdown: [
        { name: "Workstyle Tips", path: "workstyle-tips" },
        { name: "Design Inspirations", path: "design-inspirations" },
        { name: "Success Stories", path: "success-stories" },
      ],
    },
    {
      name: "Get Started",
      dropdown: [
        { name: "Book a Space", path: "products" },
        { name: "Join Our Community", path: "join-member" },
        { name: "Host an Event", path: "host-event" },
      ],
    },
    { name: "Contact", path: "contact" },
  ];

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNavClick = (path?: string) => {
    if (path) {
      onNavigate(path);
      setOpenDropdown(null);
      setMobileOpenDropdown(null);
      setIsOpen(false);
    }
  };

  const handleMouseEnter = (itemName: string, hasDropdown: boolean) => {
    if (hasDropdown) {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
      setOpenDropdown(itemName);
    }
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
  };

  const toggleMobileDropdown = (itemName: string) => {
    setMobileOpenDropdown(mobileOpenDropdown === itemName ? null : itemName);
  };

  return (
    <nav
      ref={navRef}
      className="bg-white/95 backdrop-blur-sm shadow-refined sticky top-0 z-50 border-b border-[#5C4033]/10"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer group"
            onClick={() => onNavigate("home")}
          >
            <div className="flex items-center gap-0">
              {/* Replace this block with your actual logo image */}
              <img
                src="./logo.svg"
                alt="The WorkNest Logo"
                className="w-24 h-16 bg-white/95 object-contain transition-transform duration-200 group-hover:scale-105"
              />
              <div className="-ml-1">
                <div className="text-2xl text-[#5C4033] font-bold">
                  The WorkNest
                </div>
                <div className="text-2xs text-[#8B7355]">Coworking space</div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  handleMouseEnter(item.name, !!item.dropdown)
                }
                onMouseLeave={handleMouseLeave}
              >
                {/* NavLink Component */}
                {item.dropdown ? (
                  <button
                    className={`flex items-center gap-1 px-4 py-6 transition-all duration-200 relative group/nav ${
                      openDropdown === item.name
                        ? "text-[#D4AF37]"
                        : "text-[#5C4033] hover:text-[#D4AF37]"
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                    <span
                      className={`absolute bottom-0 left-4 right-4 h-0.5 bg-[#D4AF37] transform origin-left transition-transform duration-200 ${
                        openDropdown === item.name ? "scale-x-100" : "scale-x-0"
                      } group-hover/nav:scale-x-100`}
                    />
                  </button>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.path)}
                    className={`px-4 py-6 transition-all duration-200 relative group/nav ${
                      currentPage === item.path
                        ? "text-[#D4AF37]"
                        : "text-[#5C4033] hover:text-[#D4AF37]"
                    }`}
                  >
                    <span>{item.name}</span>
                    <span
                      className={`absolute bottom-0 left-4 right-4 h-0.5 bg-[#D4AF37] transform origin-left transition-transform duration-200 ${
                        currentPage === item.path ? "scale-x-100" : "scale-x-0"
                      } group-hover/nav:scale-x-100`}
                    />
                  </button>
                )}

                {/* DropdownMenu Component - with 20px hover buffer */}
                {item.dropdown && openDropdown === item.name && (
                  <div
                    className="absolute top-full left-0 pt-5"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="w-64 bg-[#FFFFF0]/98 backdrop-blur-sm rounded-lg shadow-refined-lg border border-[#5C4033]/10 overflow-hidden animate-in fade-in slide-in-from-top duration-200">
                      {item.dropdown.map((dropdownItem, idx) => (
                        <button
                          key={dropdownItem.path}
                          onClick={() => handleNavClick(dropdownItem.path)}
                          className={`w-full text-left px-6 py-3.5 text-sm transition-all duration-150 ${
                            currentPage === dropdownItem.path
                              ? "bg-[#D4AF37]/15 text-[#D4AF37] pl-8"
                              : "text-[#5C4033] hover:bg-[#D4AF37]/8 hover:text-[#D4AF37] hover:pl-8"
                          } ${
                            idx !== item.dropdown!.length - 1
                              ? "border-b border-[#5C4033]/5"
                              : ""
                          }`}
                        >
                          {dropdownItem.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#5C4033] p-2 hover:bg-[#D4AF37]/10 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-[#5C4033]/10 animate-in slide-in-from-top duration-200 max-h-[80vh] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    {/* Mobile Accordion Trigger - 48px touch target */}
                    <button
                      onClick={() => toggleMobileDropdown(item.name)}
                      className="flex items-center justify-between w-full text-left py-3 px-4 text-[#5C4033] hover:bg-[#D4AF37]/5 transition-colors min-h-[48px]"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          mobileOpenDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {/* Mobile Dropdown Items */}
                    {mobileOpenDropdown === item.name && (
                      <div className="bg-[#D4AF37]/5 animate-in slide-in-from-top duration-150">
                        {item.dropdown.map((dropdownItem) => (
                          <button
                            key={dropdownItem.path}
                            onClick={() => handleNavClick(dropdownItem.path)}
                            className={`block w-full text-left py-3 px-8 text-sm transition-colors min-h-[48px] ${
                              currentPage === dropdownItem.path
                                ? "text-[#D4AF37] bg-[#D4AF37]/10"
                                : "text-[#5C4033]/80 hover:text-[#D4AF37] hover:bg-[#D4AF37]/5"
                            }`}
                          >
                            {dropdownItem.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.path)}
                    className={`block w-full text-left py-3 px-4 transition-colors min-h-[48px] ${
                      currentPage === item.path
                        ? "text-[#D4AF37] bg-[#D4AF37]/10"
                        : "text-[#5C4033] hover:bg-[#D4AF37]/5"
                    }`}
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
