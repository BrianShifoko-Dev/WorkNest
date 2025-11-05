import { Breadcrumbs } from "../Breadcrumbs";
import { SpaceImage } from "../ImageLightbox";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Users, Monitor, Wifi, Coffee, Clock, Video, Projector, CheckCircle2 } from "lucide-react";
import { BookingForm } from "../BookingForm";

export function Boardrooms({ onNavigate }: { onNavigate: (page: string) => void }) {
  const boardrooms = [
    {
      name: "Executive Boardroom",
      capacity: "12-16 people",
      size: "45 sqm",
      hourlyRate: "KES 5,000",
      halfDayRate: "KES 18,000",
      fullDayRate: "KES 30,000",
      images: [
        { url: "https://images.unsplash.com/photo-1462826303086-329426d1aef5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwcm9vbSUyMGJvYXJkcm9vbXxlbnwxfHx8fDE3NjIyNTAyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080", title: "Executive Boardroom", description: "Premium boardroom with executive seating for 12-16 people" },
        { url: "https://images.unsplash.com/photo-1677078610588-aed2834ad968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWV0aW5nJTIwcm9vbSUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NjIyNTAyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080", title: "Executive Boardroom", description: "State-of-the-art presentation and video conferencing setup" },
        { url: "https://images.unsplash.com/photo-1687945727613-a4d06cc41024?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2FyZHJvb20lMjB0YWJsZSUyMGNoYWlyc3xlbnwxfHx8fDE3NjIyNTAyMDF8MA&ixlib=rb-4.1.0&q=80&w=1080", title: "Executive Boardroom", description: "Premium conference table with luxury executive chairs" },
        { url: "https://images.unsplash.com/photo-1615983234885-918e049a2254?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGNvbmZlcmVuY2UlMjByb29tfGVufDF8fHx8MTc2MjI1MDIwMXww&ixlib=rb-4.1.0&q=80&w=1080", title: "Executive Boardroom", description: "HD video conferencing system with crystal-clear audio" },
        { url: "https://images.unsplash.com/photo-1613186145425-5bb4eca455d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBib2FyZHJvb218ZW58MXx8fHwxNzYyMTg4OTExfDA&ixlib=rb-4.1.0&q=80&w=1080", title: "Executive Boardroom", description: "Professional ambiance with ambient lighting controls" },
        { url: "https://images.unsplash.com/photo-1505624198937-c704aff72608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjByb29tfGVufDF8fHx8MTc2MjI1MDE5NXww&ixlib=rb-4.1.0&q=80&w=1080", title: "Executive Boardroom", description: "Floor-to-ceiling windows with panoramic city views" },
        { url: "https://images.unsplash.com/photo-1758520145175-aa3b593b81af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjIyNTAxOTV8MA&ixlib=rb-4.1.0&q=80&w=1080", title: "Executive Boardroom", description: "Climate control system for optimal comfort" },
      ],
      description: "Our flagship boardroom designed for high-level meetings and presentations. Features state-of-the-art AV equipment, executive seating for up to 16 guests, and a professional ambiance perfect for board meetings, investor pitches, and strategic planning sessions.",
      features: [
        "4K Display Screen",
        "Video Conferencing System",
        "Premium Sound System",
        "Executive Seating",
        "Whiteboard & Flipchart",
        "Climate Control",
      ],
    },
    {
      name: "Meeting Room - Large",
      capacity: "8-10 people",
      size: "30 sqm",
      hourlyRate: "KES 3,500",
      halfDayRate: "KES 12,000",
      fullDayRate: "KES 20,000",
      images: [
        { url: "https://images.unsplash.com/photo-1640109341881-1cd3eaf50909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyMjMzNjI3fDA&ixlib=rb-4.1.0&q=80&w=1080", title: "Meeting Room - Large", description: "Spacious meeting room for 8-10 people with modern setup" },
        { url: "https://images.unsplash.com/photo-1677078610588-aed2834ad968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWV0aW5nJTIwcm9vbSUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NjIyNTAyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080", title: "Meeting Room - Large", description: "HD display and presentation tools for workshops" },
        { url: "https://images.unsplash.com/photo-1615983234885-918e049a2254?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGNvbmZlcmVuY2UlMjByb29tfGVufDF8fHx8MTc2MjI1MDIwMXww&ixlib=rb-4.1.0&q=80&w=1080", title: "Meeting Room - Large", description: "Video conferencing capabilities for remote collaboration" },
        { url: "https://images.unsplash.com/photo-1687945727613-a4d06cc41024?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2FyZHJvb20lMjB0YWJsZSUyMGNoYWlyc3xlbnwxfHx8fDE3NjIyNTAyMDF8MA&ixlib=rb-4.1.0&q=80&w=1080", title: "Meeting Room - Large", description: "Comfortable conference table with ergonomic chairs" },
        { url: "https://images.unsplash.com/photo-1610387819413-f88dec15dae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBtZWV0aW5nJTIwc3BhY2V8ZW58MXx8fHwxNzYyMjUwMTk1fDA&ixlib=rb-4.1.0&q=80&w=1080", title: "Meeting Room - Large", description: "Whiteboard and flipcharts for brainstorming sessions" },
        { url: "https://images.unsplash.com/photo-1462826303086-329426d1aef5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwcm9vbSUyMGJvYXJkcm9vbXxlbnwxfHx8fDE3NjIyNTAyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080", title: "Meeting Room - Large", description: "Professional environment for client presentations" },
        { url: "https://images.unsplash.com/photo-1613186145425-5bb4eca455d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBib2FyZHJvb218ZW58MXx8fHwxNzYyMTg4OTExfDA&ixlib=rb-4.1.0&q=80&w=1080", title: "Meeting Room - Large", description: "Refreshments available with coffee and tea service" },
      ],
      description: "Spacious meeting room ideal for team workshops, client presentations, and collaborative sessions. Equipped with HD display, video conferencing capabilities, and comfortable seating for productive discussions.",
      features: [
        "HD Display",
        "Video Calling Setup",
        "High-Speed WiFi",
        "Conference Table",
        "Presentation Tools",
        "Refreshments Available",
      ],
    },
    {
      name: "Meeting Room - Medium",
      capacity: "4-6 people",
      size: "20 sqm",
      hourlyRate: "KES 2,500",
      halfDayRate: "KES 8,000",
      fullDayRate: "KES 14,000",
      images: [
        { url: "https://images.unsplash.com/photo-1692133226337-55e513450a32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcml2YXRlJTIwb2ZmaWNlJTIwcm9vbXxlbnwxfHx8fDE3NjIyMzM2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080", title: "Meeting Room - Medium", description: "Intimate meeting space for 4-6 people" },
        { url: "https://images.unsplash.com/photo-1615983234885-918e049a2254?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGNvbmZlcmVuY2UlMjByb29tfGVufDF8fHx8MTc2MjI1MDIwMXww&ixlib=rb-4.1.0&q=80&w=1080", title: "Meeting Room - Medium", description: "Smart TV with wireless screen sharing" },
        { url: "https://images.unsplash.com/photo-1610387819413-f88dec15dae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBtZWV0aW5nJTIwc3BhY2V8ZW58MXx8fHwxNzYyMjUwMTk1fDA&ixlib=rb-4.1.0&q=80&w=1080", title: "Meeting Room - Medium", description: "Video conferencing for remote team members" },
        { url: "https://images.unsplash.com/photo-1746021375246-7dc8ab0583f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyMjE5NTA3fDA&ixlib=rb-4.1.0&q=80&w=1080", title: "Meeting Room - Medium", description: "Comfortable seating with ergonomic chairs" },
        { url: "https://images.unsplash.com/photo-1625461291092-13d0c45608b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBkZXNrfGVufDF8fHx8MTc2MjE3MzUyN3ww&ixlib=rb-4.1.0&q=80&w=1080", title: "Meeting Room - Medium", description: "Whiteboard for notes and collaboration" },
        { url: "https://images.unsplash.com/photo-1505624198937-c704aff72608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjByb29tfGVufDF8fHx8MTc2MjI1MDE5NXww&ixlib=rb-4.1.0&q=80&w=1080", title: "Meeting Room - Medium", description: "Natural lighting with large windows" },
        { url: "https://images.unsplash.com/photo-1640109341881-1cd3eaf50909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyMjMzNjI3fDA&ixlib=rb-4.1.0&q=80&w=1080", title: "Meeting Room - Medium", description: "Professional yet comfortable atmosphere" },
      ],
      description: "Intimate meeting space perfect for small team meetings, one-on-one sessions, and focused discussions. Features natural lighting, modern amenities, and a professional yet comfortable atmosphere.",
      features: [
        "Smart TV",
        "Video Conferencing",
        "WiFi Access",
        "Comfortable Seating",
        "Whiteboard",
        "Natural Lighting",
      ],
    },
  ];

  const amenities = [
    { icon: Projector, title: "AV Equipment", description: "Professional presentation tools" },
    { icon: Video, title: "Video Conferencing", description: "HD cameras and microphones" },
    { icon: Wifi, title: "High-Speed WiFi", description: "Dedicated fiber connection" },
    { icon: Coffee, title: "Refreshments", description: "Complimentary coffee & tea" },
    { icon: Monitor, title: "Smart Displays", description: "4K screens in all rooms" },
    { icon: Clock, title: "Flexible Booking", description: "Hourly, half-day, or full-day" },
  ];

  return (
    <div className="min-h-screen bg-[#FFFFF0]" data-section="spaces">
      <Breadcrumbs
        items={[{ name: "Products & Book" }, { name: "Boardrooms" }]}
        onNavigate={onNavigate}
      />

      {/* Hero */}
      <section className="relative h-[450px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 z-10" />
        <img
          src="https://images.unsplash.com/photo-1462826303086-329426d1aef5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwYm9hcmRyb29tfGVufDF8fHx8MTc2MjIzMzYyN3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Professional Boardrooms"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <Badge className="bg-[#D4AF37] text-[#5C4033] mb-4 px-4 py-1">
              Premium Meeting Spaces
            </Badge>
            <h1 className="text-5xl mb-4">Professional Boardrooms</h1>
            <p className="text-xl max-w-3xl mx-auto">
              State-of-the-art meeting rooms designed for presentations, client meetings, 
              and important discussions
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-1 bg-[#D4AF37] mb-6 mx-auto" />
            <h2 className="text-[#5C4033] mb-6">Impress Clients, Close Deals</h2>
            <p className="text-xl text-[#5C4033]/70 mb-8">
              Our fully-equipped boardrooms provide the perfect setting for board meetings, client 
              presentations, team workshops, and important discussions. Book by the hour, half-day, 
              or full day with all amenities included.
            </p>
          </div>
        </div>
      </section>

      {/* Boardroom Options */}
      <section className="py-16 bg-[#FFFFF0]">
        <div className="container mx-auto px-4">
          <div className="w-16 h-1 bg-[#D4AF37] mb-6 mx-auto" />
          <h2 className="text-center text-[#5C4033] mb-12">Choose Your Meeting Space</h2>
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {boardrooms.map((room, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-refined-lg hover:shadow-xl transition-all border border-[#5C4033]/10 group"
              >
                <div className="h-64 overflow-hidden relative">
                  <SpaceImage
                    src={room.images[0].url}
                    alt={room.name}
                    title={room.name}
                    description={room.description}
                    allImages={room.images}
                    className="h-full"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[#D4AF37] text-[#5C4033]">
                      <Users className="w-3 h-3 mr-1" />
                      {room.capacity}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl text-[#5C4033] mb-2">{room.name}</h3>
                  <p className="text-sm text-[#5C4033]/60 mb-6">{room.size}</p>

                  {/* Pricing */}
                  <div className="bg-[#FFFFF0] rounded-lg p-4 mb-6">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-[#5C4033]/70">Hourly Rate:</span>
                        <span className="text-[#D4AF37]">{room.hourlyRate}/hr</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#5C4033]/70">Half Day (4hrs):</span>
                        <span className="text-[#D4AF37]">{room.halfDayRate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#5C4033]/70">Full Day (8hrs):</span>
                        <span className="text-[#D4AF37]">{room.fullDayRate}</span>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {room.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-[#5C4033]/70 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="w-16 h-1 bg-[#D4AF37] mb-6 mx-auto" />
          <h2 className="text-center text-[#5C4033] mb-12">Everything You Need</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex gap-4 p-6 bg-[#FFFFF0] rounded-lg border border-[#5C4033]/10">
                <div className="w-12 h-12 bg-[#D4AF37]/15 rounded-lg flex items-center justify-center flex-shrink-0">
                  <amenity.icon className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-[#5C4033] mb-1">{amenity.title}</h4>
                  <p className="text-sm text-[#5C4033]/60">{amenity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-[#FFFFF0]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="w-16 h-1 bg-[#D4AF37] mb-6 mx-auto" />
            <h2 className="text-center text-[#5C4033] mb-4">Book Your Boardroom</h2>
            <p className="text-center text-[#5C4033]/70 mb-12 max-w-2xl mx-auto">
              Reserve your preferred meeting space today. Our team will confirm availability 
              and prepare the room to your specifications.
            </p>
            <div className="bg-white rounded-lg shadow-refined-lg p-8 border border-[#5C4033]/10">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#5C4033] to-[#4A3329]">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-white mb-4">Need Help Choosing?</h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Our team can help you select the perfect boardroom for your meeting needs 
            and provide custom setup options.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              onClick={() => onNavigate("contact")}
              className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#5C4033]"
            >
              Contact Us
            </Button>
            <Button 
              onClick={() => onNavigate("book-tour")}
              variant="outline"
              className="border-white text-[rgb(92,64,51)] hover:bg-white hover:text-[#5C4033]"
            >
              Schedule a Tour
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
