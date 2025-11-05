import { Breadcrumbs } from "../Breadcrumbs";
import { SpaceImage } from "../ImageLightbox";
import { Button } from "../ui/button";
import { Users, Wifi, Coffee, Shield, Clock, Zap } from "lucide-react";

export function OfficeSpaces({ onNavigate }: { onNavigate: (page: string) => void }) {
  const officeTypes = [
    {
      title: "Private Office - Small",
      capacity: "1-2 people",
      size: "10 sqm",
      price: "From KES 80,000/month",
      images: [
        { url: "https://images.unsplash.com/photo-1640109341881-1cd3eaf50909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyMjMzNjI3fDA&ixlib=rb-4.1.0&q=80&w=1080", title: "Private Office - Small", description: "Compact private office with modern desk and ergonomic chair" },
        { url: "https://images.unsplash.com/photo-1746021375246-7dc8ab0583f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcml2YXRlJTIwb2ZmaWNlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MjIxNzk0OXww&ixlib=rb-4.1.0&q=80&w=1080", title: "Private Office - Small", description: "Lockable door ensuring complete privacy for focused work" },
        { url: "https://images.unsplash.com/photo-1625461291092-13d0c45608b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBkZXNrfGVufDF8fHx8MTc2MjE3MzUyN3ww&ixlib=rb-4.1.0&q=80&w=1080", title: "Private Office - Small", description: "Adjustable standing desk with premium workspace setup" },
        { url: "https://images.unsplash.com/photo-1758520145175-aa3b593b81af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjIyNTAxOTV8MA&ixlib=rb-4.1.0&q=80&w=1080", title: "Private Office - Small", description: "Elegant interior with professional lighting and storage" },
        { url: "https://images.unsplash.com/photo-1610387819413-f88dec15dae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBtZWV0aW5nJTIwc3BhY2V8ZW58MXx8fHwxNzYyMjUwMTk1fDA&ixlib=rb-4.1.0&q=80&w=1080", title: "Private Office - Small", description: "Compact meeting area for client consultations" },
        { url: "https://images.unsplash.com/photo-1505624198937-c704aff72608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjByb29tfGVufDF8fHx8MTc2MjI1MDE5NXww&ixlib=rb-4.1.0&q=80&w=1080", title: "Private Office - Small", description: "Well-lit workspace with natural light and city views" },
        { url: "https://images.unsplash.com/photo-1653972233597-05822baa3c4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzYyMjUwMTk1fDA&ixlib=rb-4.1.0&q=80&w=1080", title: "Private Office - Small", description: "Premium furniture and ergonomic seating for comfort" },
      ],
      features: ["Lockable door", "Adjustable desk", "Ergonomic chair", "Storage cabinet"],
      description: "Perfect for solopreneurs and small teams. Fully furnished with premium furniture, lockable door for privacy, and all essential amenities included.",
    },
    {
      title: "Private Office - Medium",
      capacity: "3-5 people",
      size: "20 sqm",
      price: "From KES 150,000/month",
      images: [
        { url: "https://images.unsplash.com/photo-1692133226337-55e513450a32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcml2YXRlJTIwb2ZmaWNlJTIwcm9vbXxlbnwxfHx8fDE3NjIyMzM2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080", title: "Private Office - Medium", description: "Spacious office with multiple workstations for growing teams" },
        { url: "https://images.unsplash.com/photo-1746021375246-7dc8ab0583f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyMjE5NTA3fDA&ixlib=rb-4.1.0&q=80&w=1080", title: "Private Office - Medium", description: "Modern workspace layout with collaborative zones" },
        { url: "https://images.unsplash.com/photo-1758520145175-aa3b593b81af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjIyNTAxOTV8MA&ixlib=rb-4.1.0&q=80&w=1080", title: "Private Office - Medium", description: "Executive design with premium finishes and furniture" },
        { url: "https://images.unsplash.com/photo-1625461291092-13d0c45608b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBkZXNrfGVufDF8fHx8MTc2MjE3MzUyN3ww&ixlib=rb-4.1.0&q=80&w=1080", title: "Private Office - Medium", description: "Dedicated meeting table for team collaboration" },
        { url: "https://images.unsplash.com/photo-1610387819413-f88dec15dae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBtZWV0aW5nJTIwc3BhY2V8ZW58MXx8fHwxNzYyMjUwMTk1fDA&ixlib=rb-4.1.0&q=80&w=1080", title: "Private Office - Medium", description: "Professional meeting space with whiteboard and AV setup" },
        { url: "https://images.unsplash.com/photo-1505624198937-c704aff72608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjByb29tfGVufDF8fHx8MTc2MjI1MDE5NXww&ixlib=rb-4.1.0&q=80&w=1080", title: "Private Office - Medium", description: "Abundant natural lighting with floor-to-ceiling windows" },
        { url: "https://images.unsplash.com/photo-1653972233597-05822baa3c4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzYyMjUwMTk1fDA&ixlib=rb-4.1.0&q=80&w=1080", title: "Private Office - Medium", description: "Custom branding and company signage on door" },
      ],
      features: ["Meeting table", "Multiple workstations", "Whiteboard", "Company signage"],
      description: "Ideal for growing teams. Spacious workspace with dedicated meeting area, custom company branding, and collaborative tools to boost productivity.",
    },
    {
      title: "Private Office - Large",
      capacity: "6-10 people",
      size: "40 sqm",
      price: "From KES 280,000/month",
      images: [
        { url: "https://images.unsplash.com/photo-1626187777040-ffb7cb2c5450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3dvcmtpbmclMjBzcGFjZXxlbnwxfHx8fDE3NjIxNTc0NTF8MA&ixlib=rb-4.1.0&q=80&w=1080", title: "Private Office - Large", description: "Executive suite with dedicated entrance and reception" },
        { url: "https://images.unsplash.com/photo-1746021375246-7dc8ab0583f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyMjE5NTA3fDA&ixlib=rb-4.1.0&q=80&w=1080", title: "Private Office - Large", description: "Open-plan workspace with 10+ workstations" },
        { url: "https://images.unsplash.com/photo-1758520145175-aa3b593b81af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjIyNTAxOTV8MA&ixlib=rb-4.1.0&q=80&w=1080", title: "Private Office - Large", description: "Luxury executive furniture and premium finishes" },
        { url: "https://images.unsplash.com/photo-1640109341881-1cd3eaf50909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyMjMzNjI3fDA&ixlib=rb-4.1.0&q=80&w=1080", title: "Private Office - Large", description: "Customizable layout to suit your team structure" },
        { url: "https://images.unsplash.com/photo-1610387819413-f88dec15dae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBtZWV0aW5nJTIwc3BhY2V8ZW58MXx8fHwxNzYyMjUwMTk1fDA&ixlib=rb-4.1.0&q=80&w=1080", title: "Private Office - Large", description: "Private meeting room included within office suite" },
        { url: "https://images.unsplash.com/photo-1505624198937-c704aff72608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjByb29tfGVufDF8fHx8MTc2MjI1MDE5NXww&ixlib=rb-4.1.0&q=80&w=1080", title: "Private Office - Large", description: "Panoramic views with floor-to-ceiling glass walls" },
        { url: "https://images.unsplash.com/photo-1653972233597-05822baa3c4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzYyMjUwMTk1fDA&ixlib=rb-4.1.0&q=80&w=1080", title: "Private Office - Large", description: "Reception area perfect for greeting clients" },
      ],
      features: ["Dedicated entrance", "Reception area", "Custom layout", "Executive furniture"],
      description: "Executive suite for established teams. Features dedicated entrance, reception area, customizable layout, and premium executive furniture for a professional image.",
    },
  ];

  const amenities = [
    { icon: Wifi, title: "High-Speed WiFi", description: "Reliable 100Mbps+ internet" },
    { icon: Coffee, title: "Coffee & Tea", description: "Complimentary beverages" },
    { icon: Shield, title: "24/7 Security", description: "Secure access control" },
    { icon: Clock, title: "Flexible Access", description: "Round-the-clock availability" },
    { icon: Users, title: "Meeting Rooms", description: "Included credits monthly" },
    { icon: Zap, title: "Power Backup", description: "Uninterrupted operations" },
  ];

  return (
    <div className="min-h-screen bg-[#FFFFF0]">
      <Breadcrumbs
        items={[{ name: "Products & Book" }, { name: "Office Spaces" }]}
        onNavigate={onNavigate}
      />

      {/* Hero */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 z-10" />
        <img
          src="https://images.unsplash.com/photo-1640109341881-1cd3eaf50909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyMjMzNjI3fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Office Spaces"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl mb-4">Private Office Spaces</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Secure, professional offices tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Office Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="w-16 h-1 bg-[#D4AF37] mb-6 mx-auto" />
          <h2 className="text-center text-[#5C4033] mb-4">Choose Your Office</h2>
          <p className="text-center text-[#5C4033]/70 mb-12 max-w-2xl mx-auto">
            Find the perfect private office for your team
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {officeTypes.map((office, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-refined-lg hover:shadow-xl transition-all border border-[#5C4033]/10 group"
              >
                <div className="h-56 overflow-hidden">
                  <SpaceImage
                    src={office.images[0].url}
                    alt={office.title}
                    title={office.title}
                    description={office.description}
                    allImages={office.images}
                    className="h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-[#5C4033] mb-2">{office.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-[#5C4033]/70 mb-4">
                    <span>{office.capacity}</span>
                    <span>•</span>
                    <span>{office.size}</span>
                  </div>
                  <p className="text-2xl text-[#D4AF37] mb-4">{office.price}</p>
                  <ul className="space-y-2 mb-6">
                    {office.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-[#5C4033]/70 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => onNavigate("products")}
                    className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-[#5C4033]"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 bg-[#FFFFF0]">
        <div className="container mx-auto px-4">
          <div className="w-16 h-1 bg-[#D4AF37] mb-6 mx-auto" />
          <h2 className="text-center text-[#5C4033] mb-12">Included Amenities</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {amenities.map((amenity, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-refined border border-[#5C4033]/10">
                <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <amenity.icon className="w-7 h-7 text-[#D4AF37]" />
                </div>
                <h4 className="text-sm text-[#5C4033] mb-1">{amenity.title}</h4>
                <p className="text-xs text-[#5C4033]/60">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-[#5C4033] mb-4">Ready to Move In?</h3>
          <p className="text-[#5C4033]/70 mb-8">Schedule a tour to view our available offices</p>
          <Button
            onClick={() => onNavigate("book-tour")}
            className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#5C4033]"
          >
            Book a Tour
          </Button>
        </div>
      </section>
    </div>
  );
}
