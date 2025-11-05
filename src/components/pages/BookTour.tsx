import { useState } from "react";
import { Calendar, Clock, Users, Mail, Phone, User } from "lucide-react";
import { Breadcrumbs } from "../Breadcrumbs";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner@2.0.3";

export function BookTour({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    attendees: "",
    interests: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Tour booked successfully! We'll send you a confirmation email.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      attendees: "",
      interests: "",
      notes: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#FFFFF0]">
      <Breadcrumbs items={[{ name: "Get Started" }, { name: "Book a Tour" }]} onNavigate={onNavigate} />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-1 bg-[#D4AF37] mb-6 mx-auto" />
          <h1 className="text-5xl text-[#5C4033] mb-6">Book Your Workspace Tour</h1>
          <p className="text-xl text-[#5C4033]/70 max-w-3xl mx-auto">
            Experience our spaces firsthand. Schedule a personalized tour with our team.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#FFFFF0]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg border border-[#5C4033]/10">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-[#5C4033]">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="mt-1 border-[#5C4033]/20 focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-[#5C4033]">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="mt-1 border-[#5C4033]/20 focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-[#5C4033]">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="mt-1 border-[#5C4033]/20 focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <Label htmlFor="attendees" className="text-[#5C4033]">
                    <Users className="w-4 h-4 inline mr-2" />
                    Number of Attendees
                  </Label>
                  <Select value={formData.attendees} onValueChange={(value) => setFormData({ ...formData, attendees: value })}>
                    <SelectTrigger className="mt-1 border-[#5C4033]/20 focus:border-[#D4AF37]">
                      <SelectValue placeholder="Select attendees" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Just me</SelectItem>
                      <SelectItem value="2">2 people</SelectItem>
                      <SelectItem value="3-5">3-5 people</SelectItem>
                      <SelectItem value="6+">6+ people</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="date" className="text-[#5C4033]">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Preferred Date
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                    className="mt-1 border-[#5C4033]/20 focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <Label htmlFor="time" className="text-[#5C4033]">
                    <Clock className="w-4 h-4 inline mr-2" />
                    Preferred Time
                  </Label>
                  <Select value={formData.time} onValueChange={(value) => setFormData({ ...formData, time: value })}>
                    <SelectTrigger className="mt-1 border-[#5C4033]/20 focus:border-[#D4AF37]">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="9:00">9:00 AM</SelectItem>
                      <SelectItem value="10:00">10:00 AM</SelectItem>
                      <SelectItem value="11:00">11:00 AM</SelectItem>
                      <SelectItem value="14:00">2:00 PM</SelectItem>
                      <SelectItem value="15:00">3:00 PM</SelectItem>
                      <SelectItem value="16:00">4:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-6">
                <Label htmlFor="interests" className="text-[#5C4033]">What spaces are you interested in?</Label>
                <Select value={formData.interests} onValueChange={(value) => setFormData({ ...formData, interests: value })}>
                  <SelectTrigger className="mt-1 border-[#5C4033]/20 focus:border-[#D4AF37]">
                    <SelectValue placeholder="Select interest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hot-desk">Hot Desk</SelectItem>
                    <SelectItem value="dedicated-desk">Dedicated Desk</SelectItem>
                    <SelectItem value="private-office">Private Office</SelectItem>
                    <SelectItem value="meeting-rooms">Meeting Rooms</SelectItem>
                    <SelectItem value="event-space">Event Space</SelectItem>
                    <SelectItem value="all">All Spaces</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="mt-6">
                <Label htmlFor="notes" className="text-[#5C4033]">Additional Notes (Optional)</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="mt-1 border-[#5C4033]/20 focus:border-[#D4AF37]"
                  placeholder="Any specific questions or requirements?"
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                className="w-full mt-8 bg-[#D4AF37] hover:bg-[#B8941F] text-[#5C4033]"
              >
                Book Tour
              </Button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-[#5C4033] mb-6">What to Expect</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Meet the Team", description: "Get to know our friendly staff and community managers" },
                { title: "Tour the Spaces", description: "Explore our offices, meeting rooms, and amenities" },
                { title: "Ask Questions", description: "Learn about membership options and get all your questions answered" },
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-[#FFFFF0] rounded-lg border border-[#5C4033]/10">
                  <h4 className="text-[#5C4033] mb-2">{item.title}</h4>
                  <p className="text-sm text-[#5C4033]/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
