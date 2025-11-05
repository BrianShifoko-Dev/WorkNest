import { Breadcrumbs } from "../Breadcrumbs";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Badge } from "../ui/badge";
import { Calendar, Users, Utensils, Wifi, Monitor, Music, CheckCircle2, PartyPopper } from "lucide-react";
import { useState } from "react";

export function HostEvent({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [formData, setFormData] = useState({
    eventName: "",
    eventType: "",
    date: "",
    time: "",
    duration: "",
    guests: "",
    catering: "",
    requirements: "",
    name: "",
    email: "",
    phone: "",
  });

  const eventTypes = [
    {
      name: "Corporate Events",
      description: "Product launches, team building, company celebrations",
      icon: "💼",
    },
    {
      name: "Workshops & Training",
      description: "Professional development, skill-building sessions",
      icon: "📚",
    },
    {
      name: "Networking Events",
      description: "Industry meetups, business mixers, community gatherings",
      icon: "🤝",
    },
    {
      name: "Presentations & Talks",
      description: "Keynote speeches, panel discussions, seminars",
      icon: "🎤",
    },
  ];

  const venues = [
    {
      name: "Main Event Hall",
      capacity: "Up to 100 guests",
      size: "120 sqm",
      rate: "From KES 50,000",
      image: "https://images.unsplash.com/photo-1626187777040-ffb7cb2c5450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3dvcmtpbmclMjBzcGFjZXxlbnwxfHx8fDE3NjIxNTc0NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Workshop Space",
      capacity: "Up to 50 guests",
      size: "70 sqm",
      rate: "From KES 30,000",
      image: "https://images.unsplash.com/photo-1640109341881-1cd3eaf50909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyMjMzNjI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Intimate Gathering Room",
      capacity: "Up to 25 guests",
      size: "40 sqm",
      rate: "From KES 18,000",
      image: "https://images.unsplash.com/photo-1462826303086-329426d1aef5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwYm9hcmRyb29tfGVufDF8fHx8MTc2MjIzMzYyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const amenities = [
    { icon: Wifi, title: "High-Speed WiFi" },
    { icon: Monitor, title: "AV Equipment" },
    { icon: Utensils, title: "Catering Options" },
    { icon: Music, title: "Sound System" },
    { icon: Users, title: "Flexible Seating" },
    { icon: Calendar, title: "Event Support" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-[#FFFFF0]" data-section="events">
      <Breadcrumbs
        items={[{ name: "Events" }, { name: "Host Your Event" }]}
        onNavigate={onNavigate}
      />

      {/* Hero */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1626187777040-ffb7cb2c5450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3dvcmtpbmclMjBzcGFjZXxlbnwxfHx8fDE3NjIxNTc0NTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Host Your Event"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <PartyPopper className="w-16 h-16 mx-auto mb-4 text-[#D4AF37]" />
            <h1 className="text-5xl mb-4">Host Your Event at Finale</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Premium event spaces in Eldoret for workshops, product launches, networking events, and corporate gatherings
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-1 bg-[#D4AF37] mb-6 mx-auto" />
            <h2 className="text-[#5C4033] mb-6">Create Memorable Experiences</h2>
            <p className="text-xl text-[#5C4033]/70 mb-12">
              Whether you're planning a corporate event, workshop, product launch, or networking mixer, 
              our flexible event spaces and professional support team ensure your event is a success.
            </p>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 bg-[#FFFFF0]">
        <div className="container mx-auto px-4">
          <div className="w-16 h-1 bg-[#D4AF37] mb-6 mx-auto" />
          <h2 className="text-center text-[#5C4033] mb-12">Perfect For Any Event</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {eventTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-refined border border-[#5C4033]/10 hover:shadow-lg transition-all text-center"
              >
                <div className="text-5xl mb-4">{type.icon}</div>
                <h3 className="text-lg text-[#5C4033] mb-2">{type.name}</h3>
                <p className="text-sm text-[#5C4033]/70">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="w-16 h-1 bg-[#D4AF37] mb-6 mx-auto" />
          <h2 className="text-center text-[#5C4033] mb-12">Choose Your Venue</h2>
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {venues.map((venue, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-refined-lg border border-[#5C4033]/10 hover:shadow-xl transition-all group"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-[#5C4033] mb-2">{venue.name}</h3>
                  <div className="space-y-2 text-sm text-[#5C4033]/70 mb-4">
                    <p className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#D4AF37]" />
                      {venue.capacity}
                    </p>
                    <p className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#D4AF37]" />
                      {venue.size}
                    </p>
                  </div>
                  <div className="text-2xl text-[#D4AF37] mb-4">{venue.rate}</div>
                  <p className="text-xs text-[#5C4033]/50 mb-4">Per event / Customizable packages available</p>
                  <Button className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-[#5C4033]">
                    Inquire Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 bg-[#FFFFF0]">
        <div className="container mx-auto px-4">
          <div className="w-16 h-1 bg-[#D4AF37] mb-6 mx-auto" />
          <h2 className="text-center text-[#5C4033] mb-12">Included Amenities</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {amenities.map((amenity, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-refined border border-[#5C4033]/10">
                  <amenity.icon className="w-7 h-7 text-[#D4AF37]" />
                </div>
                <p className="text-sm text-[#5C4033]">{amenity.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Request Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="w-16 h-1 bg-[#D4AF37] mb-6 mx-auto" />
            <h2 className="text-center text-[#5C4033] mb-4">Request Event Quote</h2>
            <p className="text-center text-[#5C4033]/70 mb-12 max-w-2xl mx-auto">
              Fill out the form below and our events team will contact you within 24 hours 
              with a customized proposal and pricing.
            </p>

            <form onSubmit={handleSubmit} className="bg-[#FFFFF0] rounded-lg p-8 border border-[#5C4033]/10">
              <div className="space-y-6">
                {/* Event Details */}
                <div>
                  <h3 className="text-lg text-[#5C4033] mb-4 pb-2 border-b border-[#5C4033]/10">
                    Event Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-[#5C4033] mb-2">Event Name *</label>
                      <Input
                        value={formData.eventName}
                        onChange={(e) => setFormData({ ...formData, eventName: e.target.value })}
                        placeholder="Annual Sales Conference"
                        required
                        className="bg-white border-[#5C4033]/20"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#5C4033] mb-2">Event Type *</label>
                      <Select value={formData.eventType} onValueChange={(value) => setFormData({ ...formData, eventType: value })}>
                        <SelectTrigger className="bg-white border-[#5C4033]/20">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="corporate">Corporate Event</SelectItem>
                          <SelectItem value="workshop">Workshop/Training</SelectItem>
                          <SelectItem value="networking">Networking Event</SelectItem>
                          <SelectItem value="presentation">Presentation/Talk</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm text-[#5C4033] mb-2">Preferred Date *</label>
                      <Input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        required
                        className="bg-white border-[#5C4033]/20"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#5C4033] mb-2">Start Time *</label>
                      <Input
                        type="time"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        required
                        className="bg-white border-[#5C4033]/20"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#5C4033] mb-2">Duration *</label>
                      <Select value={formData.duration} onValueChange={(value) => setFormData({ ...formData, duration: value })}>
                        <SelectTrigger className="bg-white border-[#5C4033]/20">
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2">2 hours</SelectItem>
                          <SelectItem value="4">4 hours (Half day)</SelectItem>
                          <SelectItem value="8">8 hours (Full day)</SelectItem>
                          <SelectItem value="multi">Multiple days</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm text-[#5C4033] mb-2">Expected Guests *</label>
                      <Input
                        type="number"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        placeholder="50"
                        required
                        className="bg-white border-[#5C4033]/20"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Services */}
                <div>
                  <h3 className="text-lg text-[#5C4033] mb-4 pb-2 border-b border-[#5C4033]/10">
                    Additional Services
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-[#5C4033] mb-2">Catering Requirements</label>
                      <Select value={formData.catering} onValueChange={(value) => setFormData({ ...formData, catering: value })}>
                        <SelectTrigger className="bg-white border-[#5C4033]/20">
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">No catering needed</SelectItem>
                          <SelectItem value="coffee">Coffee & tea only</SelectItem>
                          <SelectItem value="snacks">Light snacks</SelectItem>
                          <SelectItem value="lunch">Full lunch</SelectItem>
                          <SelectItem value="custom">Custom menu</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm text-[#5C4033] mb-2">Special Requirements</label>
                      <Textarea
                        value={formData.requirements}
                        onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                        placeholder="AV needs, seating arrangement, etc."
                        rows={3}
                        className="bg-white border-[#5C4033]/20"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-lg text-[#5C4033] mb-4 pb-2 border-b border-[#5C4033]/10">
                    Your Contact Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-[#5C4033] mb-2">Full Name *</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        required
                        className="bg-white border-[#5C4033]/20"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#5C4033] mb-2">Email Address *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        required
                        className="bg-white border-[#5C4033]/20"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#5C4033] mb-2">Phone Number *</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+254 700 123 456"
                        required
                        className="bg-white border-[#5C4033]/20"
                      />
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-[#5C4033]">
                  Submit Event Request
                </Button>
                <p className="text-xs text-center text-[#5C4033]/60">
                  Our events team will respond within 24 hours with availability and pricing
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#D4AF37] to-[#B8941F]">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-[#5C4033] mb-4">Have Questions About Hosting?</h3>
          <p className="text-[#5C4033]/80 mb-8 max-w-2xl mx-auto">
            Our experienced events team is here to help you plan every detail. 
            Contact us for a consultation or to schedule a venue tour.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              onClick={() => onNavigate("contact")}
              className="bg-[#5C4033] hover:bg-[#4A3329] text-white"
            >
              Contact Events Team
            </Button>
            <Button 
              onClick={() => onNavigate("book-tour")}
              variant="outline"
              className="border-[#5C4033] bg-white text-[#5C4033] hover:bg-[#5C4033] hover:text-white"
            >
              Schedule Venue Tour
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
