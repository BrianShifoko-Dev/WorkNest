import { Breadcrumbs } from "../Breadcrumbs";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Badge } from "../ui/badge";
import { Utensils, Clock, Users, Calendar, Coffee, Award } from "lucide-react";
import { useState } from "react";

export function ReserveTable({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  const featuredItems = [
    {
      name: "Kenyan Coffee",
      description: "Locally sourced premium beans",
      price: "KES 250",
      image: "https://images.unsplash.com/photo-1640587662002-ae577f8f96dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBlc3ByZXNzbyUyMGN1cHxlbnwxfHx8fDE3NjIxOTQyNjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Signature Lunch",
      description: "Chef's daily special with local ingredients",
      price: "KES 850",
      image: "https://images.unsplash.com/photo-1669131196140-49591336b13e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXN0YXVyYW50JTIwY2FmZXxlbnwxfHx8fDE3NjIyMzM2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Business Lunch Set",
      description: "Perfect for client meetings",
      price: "KES 1,200",
      image: "https://images.unsplash.com/photo-1558507652-2d9626c4e67a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZm9vZHxlbnwwfHx8fDE3MzA3Mjk2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const highlights = [
    { icon: Coffee, title: "Premium Beverages", description: "Specialty coffee, tea, and fresh juices" },
    { icon: Utensils, title: "Fresh Cuisine", description: "Locally-sourced ingredients daily" },
    { icon: Award, title: "Professional Setting", description: "Perfect for business meetings" },
    { icon: Clock, title: "Quick Service", description: "Efficient for busy professionals" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle reservation submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-[#FFFFF0]" data-section="restaurant">
      <Breadcrumbs
        items={[{ name: "Restaurant" }, { name: "Reserve a Table" }]}
        onNavigate={onNavigate}
      />

      {/* Hero */}
      <section className="relative h-[450px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 z-10" />
        <img
          src="https://images.unsplash.com/photo-1669131196140-49591336b13e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXN0YXVyYW50JTIwY2FmZXxlbnwxfHx8fDE3NjIyMzM2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Restaurant Dining"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <Utensils className="w-16 h-16 mx-auto mb-4 text-[#D4AF37]" />
            <h1 className="text-5xl mb-4">Reserve Your Table</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Enjoy premium dining in Eldoret's The WorkNest co-working Space restaurant
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-1 bg-[#D4AF37] mb-6 mx-auto" />
            <h2 className="text-[#5C4033] mb-6">
              Where Business Meets Culinary Excellence
            </h2>
            <p className="text-xl text-[#5C4033]/70 mb-8">
              Our in-house restaurant combines gourmet cuisine with a
              professional atmosphere, making it the perfect spot for business
              lunches, client meetings, or a relaxing break from your workday.
            </p>
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <Clock className="w-8 h-8 mx-auto mb-2 text-[#D4AF37]" />
                <p className="text-sm text-[#5C4033]">Mon-Fri: 7AM-6PM</p>
                <p className="text-xs text-[#5C4033]/60">Sat: 9AM-2PM</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 mx-auto mb-2 text-[#D4AF37]" />
                <p className="text-sm text-[#5C4033]">Seats 80</p>
                <p className="text-xs text-[#5C4033]/60">Indoor & Terrace</p>
              </div>
              <div className="text-center">
                <Utensils className="w-8 h-8 mx-auto mb-2 text-[#D4AF37]" />
                <p className="text-sm text-[#5C4033]">Fresh Daily</p>
                <p className="text-xs text-[#5C4033]/60">Local Ingredients</p>
              </div>
              <div className="text-center">
                <Coffee className="w-8 h-8 mx-auto mb-2 text-[#D4AF37]" />
                <p className="text-sm text-[#5C4033]">Premium Coffee</p>
                <p className="text-xs text-[#5C4033]/60">Specialty Drinks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Items */}
      <section className="py-16 bg-[#FFFFF0]">
        <div className="container mx-auto px-4">
          <div className="w-16 h-1 bg-[#D4AF37] mb-6 mx-auto" />
          <h2 className="text-center text-[#5C4033] mb-4">
            Featured This Week
          </h2>
          <p className="text-center text-[#5C4033]/70 mb-12 max-w-2xl mx-auto">
            A taste of what awaits you at our restaurant
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {featuredItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-refined border border-[#5C4033]/10 hover:shadow-lg transition-all group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg text-[#5C4033]">{item.name}</h3>
                    <Badge className="bg-[#D4AF37] text-[#5C4033]">
                      {item.price}
                    </Badge>
                  </div>
                  <p className="text-sm text-[#5C4033]/70">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button
              onClick={() => onNavigate("menu")}
              variant="outline"
              className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#5C4033]"
            >
              View Full Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Why Dine With Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="w-16 h-1 bg-[#D4AF37] mb-6 mx-auto" />
          <h2 className="text-center text-[#5C4033] mb-12">Why Dine With Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="text-lg text-[#5C4033] mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-[#5C4033]/70">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-16 bg-[#FFFFF0]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-1 bg-[#D4AF37] mb-6 mx-auto" />
            <h2 className="text-center text-[#5C4033] mb-4">
              Make a Reservation
            </h2>
            <p className="text-center text-[#5C4033]/70 mb-12 max-w-2xl mx-auto">
              Secure your table for breakfast, lunch, or an afternoon coffee
              meeting. Walk-ins welcome based on availability.
            </p>

            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-lg p-8 shadow-refined-lg border border-[#5C4033]/10"
            >
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-[#5C4033] mb-2">
                      Reservation Date *
                    </label>
                    <Input
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      required
                      className="border-[#5C4033]/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#5C4033] mb-2">
                      Preferred Time *
                    </label>
                    <Select
                      value={formData.time}
                      onValueChange={(value) =>
                        setFormData({ ...formData, time: value })
                      }
                    >
                      <SelectTrigger className="border-[#5C4033]/20">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7:00">7:00 AM</SelectItem>
                        <SelectItem value="8:00">8:00 AM</SelectItem>
                        <SelectItem value="9:00">9:00 AM</SelectItem>
                        <SelectItem value="10:00">10:00 AM</SelectItem>
                        <SelectItem value="11:00">11:00 AM</SelectItem>
                        <SelectItem value="12:00">12:00 PM</SelectItem>
                        <SelectItem value="13:00">1:00 PM</SelectItem>
                        <SelectItem value="14:00">2:00 PM</SelectItem>
                        <SelectItem value="15:00">3:00 PM</SelectItem>
                        <SelectItem value="16:00">4:00 PM</SelectItem>
                        <SelectItem value="17:00">5:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[#5C4033] mb-2">
                    Number of Guests *
                  </label>
                  <Select
                    value={formData.guests}
                    onValueChange={(value) =>
                      setFormData({ ...formData, guests: value })
                    }
                  >
                    <SelectTrigger className="border-[#5C4033]/20">
                      <SelectValue placeholder="Select number" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? "Guest" : "Guests"}
                        </SelectItem>
                      ))}
                      <SelectItem value="9+">
                        9+ Guests (Contact for group bookings)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="pt-4 border-t border-[#5C4033]/10">
                  <h3 className="text-sm text-[#5C4033] mb-4">Your Details</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-[#5C4033] mb-2">
                        Full Name *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
                        required
                        className="border-[#5C4033]/20"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#5C4033] mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@email.com"
                        required
                        className="border-[#5C4033]/20"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label className="block text-sm text-[#5C4033] mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+254 745 319 042"
                      required
                      className="border-[#5C4033]/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[#5C4033] mb-2">
                    Special Requests
                  </label>
                  <Textarea
                    value={formData.specialRequests}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        specialRequests: e.target.value,
                      })
                    }
                    placeholder="Dietary restrictions, seating preferences, occasion, etc."
                    rows={4}
                    className="border-[#5C4033]/20"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-[#5C4033]"
                >
                  Confirm Reservation
                </Button>
                <p className="text-xs text-center text-[#5C4033]/60">
                  You will receive a confirmation email within 30 minutes
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#5C4033] to-[#4A3329]">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-white mb-4">Questions About Our Restaurant?</h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Contact our restaurant team for group bookings, catering services,
            or dietary accommodations.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              onClick={() => onNavigate("contact")}
              className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#5C4033]"
            >
              Contact Restaurant
            </Button>
            <Button
              onClick={() => onNavigate("menu")}
              variant="outline"
              className="border-white text-[rgb(92,64,51)] hover:bg-white hover:text-[#5C4033]"
            >
              View Full Menu
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
