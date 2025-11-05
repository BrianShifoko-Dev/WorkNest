import { Calendar, MapPin, Users, Clock } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const upcomingEvents = [
  {
    id: 1,
    title: "Tech Startup Networking Night",
    date: "November 15, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "Grand Hall, Finale Workspace",
    capacity: "50 attendees",
    description: "Connect with fellow entrepreneurs, investors, and tech enthusiasts in Nairobi's vibrant startup ecosystem.",
    image: "https://images.unsplash.com/photo-1759873148521-c49d9497cf64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHNwYWNlJTIwdmVudWV8ZW58MXx8fHwxNzYyMTgyNDEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Networking",
    status: "Open",
  },
  {
    id: 2,
    title: "Product Design Workshop",
    date: "November 22, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Boardroom 2, Finale Workspace",
    capacity: "20 attendees",
    description: "Learn the fundamentals of user-centered design from industry experts. Hands-on exercises included.",
    image: "https://images.unsplash.com/photo-1758518731572-7791381c5ce8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMG1lZXRpbmd8ZW58MXx8fHwxNzYyMTg4NzE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Workshop",
    status: "Open",
  },
  {
    id: 3,
    title: "Business Growth Summit",
    date: "December 5, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Grand Hall, Finale Workspace",
    capacity: "100 attendees",
    description: "A full-day conference featuring keynote speakers, panel discussions, and breakout sessions on scaling your business.",
    image: "https://images.unsplash.com/photo-1462826303086-329426d1aef5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwYm9hcmRyb29tfGVufDF8fHx8MTc2MjIzMzYyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Conference",
    status: "Open",
  },
  {
    id: 4,
    title: "Women in Tech Meetup",
    date: "December 12, 2025",
    time: "5:30 PM - 8:00 PM",
    location: "Event Space, Finale Workspace",
    capacity: "40 attendees",
    description: "An evening of inspiration, mentorship, and networking for women pursuing careers in technology.",
    image: "https://images.unsplash.com/photo-1640109341881-1cd3eaf50909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyMjMzNjI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Meetup",
    status: "Open",
  },
  {
    id: 5,
    title: "Digital Marketing Masterclass",
    date: "December 18, 2025",
    time: "2:00 PM - 6:00 PM",
    location: "Boardroom 1, Finale Workspace",
    capacity: "25 attendees",
    description: "Master the latest digital marketing strategies and tools to grow your online presence.",
    image: "https://images.unsplash.com/photo-1626187777040-ffb7cb2c5450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3dvcmtpbmclMjBzcGFjZXxlbnwxfHx8fDE3NjIxNTc0NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Workshop",
    status: "Filling Fast",
  },
  {
    id: 6,
    title: "Year-End Celebration & Networking",
    date: "December 28, 2025",
    time: "6:00 PM - 10:00 PM",
    location: "Grand Hall, Finale Workspace",
    capacity: "80 attendees",
    description: "Join us for an evening of celebration as we reflect on 2025 and toast to new beginnings.",
    image: "https://images.unsplash.com/photo-1693902997450-7e912c0d3554?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZW55YSUyMG5haXJvYmklMjBjaXR5c2NhcGV8ZW58MXx8fHwxNzYyMjMzNjMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Social",
    status: "Open",
  },
];

export function Events({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="min-h-screen bg-[#FFFFF0]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#5C4033] to-[#4A3329] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Calendar className="w-16 h-16 mx-auto mb-6 text-[#D4AF37]" />
          <h1 className="text-5xl mb-4">Events & Workshops</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Join our community events, learn new skills, and network with like-minded professionals
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[#5C4033] mb-4">What's Happening at Finale</h2>
            <p className="text-[#5C4033]/70">
              From networking sessions to skill-building workshops, our events are designed to help you 
              grow professionally, connect with peers, and stay ahead in your industry. Whether you're 
              looking to learn, network, or simply unwind, there's something for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-[#FFFFF0]" data-type="event">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-[#5C4033] mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-[#5C4033]/10"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Badge className="bg-[#D4AF37] text-[#5C4033]">{event.category}</Badge>
                    {event.status === "Filling Fast" && (
                      <Badge className="bg-red-500 text-white">Filling Fast</Badge>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-[#5C4033] mb-3">{event.title}</h3>
                  <p className="text-sm text-[#5C4033]/70 mb-4">{event.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-[#5C4033]/60">
                      <Calendar className="w-4 h-4 text-[#D4AF37]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#5C4033]/60">
                      <Clock className="w-4 h-4 text-[#D4AF37]" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#5C4033]/60">
                      <MapPin className="w-4 h-4 text-[#D4AF37]" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#5C4033]/60">
                      <Users className="w-4 h-4 text-[#D4AF37]" />
                      <span>{event.capacity}</span>
                    </div>
                  </div>

                  <Button
                    onClick={() => onNavigate("products")}
                    className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-[#5C4033]"
                  >
                    Book a Space
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Host Your Event */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-[#5C4033] mb-4">Host Your Event at Finale</h2>
                <p className="text-[#5C4033]/70 mb-6">
                  Looking for the perfect venue for your next corporate event, workshop, or celebration? 
                  Our versatile event spaces can accommodate gatherings of all sizes, from intimate 
                  meetings to large conferences.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "State-of-the-art AV equipment",
                    "Flexible seating arrangements",
                    "In-house catering options",
                    "Dedicated event support team",
                    "High-speed WiFi throughout",
                    "Professional ambiance",
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[#5C4033]/70">
                      <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => onNavigate("products")}
                  className="bg-[#5C4033] hover:bg-[#4A3329] text-white"
                >
                  Book Event Space
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1759873148521-c49d9497cf64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHNwYWNlJTIwdmVudWV8ZW58MXx8fHwxNzYyMTgyNDEzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Event space"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1462826303086-329426d1aef5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwYm9hcmRyb29tfGVufDF8fHx8MTc2MjIzMzYyN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Boardroom"
                  className="w-full h-48 object-cover rounded-lg shadow-lg mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events Highlight */}
      <section className="py-16 bg-[#FFFFF0]">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-[#5C4033] mb-12">Past Events Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Startup Pitch Night",
                date: "October 2025",
                image: "https://images.unsplash.com/photo-1640109341881-1cd3eaf50909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyMjMzNjI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
                description: "10 startups pitched to investors",
              },
              {
                title: "Leadership Workshop",
                date: "September 2025",
                image: "https://images.unsplash.com/photo-1758518731572-7791381c5ce8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMG1lZXRpbmd8ZW58MXx8fHwxNzYyMTg4NzE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
                description: "35 professionals attended",
              },
              {
                title: "Tech Community Mixer",
                date: "August 2025",
                image: "https://images.unsplash.com/photo-1626187777040-ffb7cb2c5450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3dvcmtpbmclMjBzcGFjZXxlbnwxfHx8fDE3NjIxNTc0NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
                description: "50+ attendees networking",
              },
            ].map((event, idx) => (
              <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-[#5C4033] mb-1">{event.title}</h4>
                  <p className="text-xs text-[#5C4033]/60 mb-2">{event.date}</p>
                  <p className="text-sm text-[#5C4033]/70">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#D4AF37] to-[#B8941F]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-[#5C4033] mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 text-[#5C4033]/80 max-w-2xl mx-auto">
            Never miss an event! Subscribe to our newsletter to get the latest updates on upcoming events and workshops
          </p>
          <Button
            onClick={() => onNavigate("home")}
            className="bg-[#5C4033] hover:bg-[#4A3329] text-white"
          >
            Subscribe Now
          </Button>
        </div>
      </section>
    </div>
  );
}
