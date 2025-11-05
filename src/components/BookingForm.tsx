import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner@2.0.3";
import { Calendar, User, Mail, Phone, ArrowRight } from "lucide-react";

interface BookingFormProps {
  variant?: "hero" | "full";
}

export function BookingForm({ variant = "hero" }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    spaceType: "",
    date: "",
    duration: "",
    paymentPlan: "",
    additionalRequests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    toast.success("Booking request submitted! Our team will contact you shortly.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      spaceType: "",
      date: "",
      duration: "",
      paymentPlan: "",
      additionalRequests: "",
    });
  };

  const isHero = variant === "hero";

  if (isHero) {
    // Hero variant with horizontal layout and full form fields
    return (
      <form
        onSubmit={handleSubmit}
        className="HeroBookingBar_Pill group w-full rounded-2xl border shadow-2xl overflow-hidden"
        data-api="bookings"
        style={{
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 50%, rgba(92, 64, 51, 0.25) 100%)",
          backdropFilter: "blur(40px) saturate(180%) brightness(1.1)",
          WebkitBackdropFilter: "blur(40px) saturate(180%) brightness(1.1)",
          borderColor: "rgba(255, 255, 255, 0.25)",
          borderWidth: "1px",
          boxShadow: "0 8px 32px rgba(31, 38, 135, 0.37), 0 0 0 1px rgba(255, 255, 255, 0.18) inset, 0 20px 60px rgba(0, 0, 0, 0.4), 0 0 100px rgba(212, 175, 55, 0.15)",
        }}
      >
        {/* Desktop/Tablet: Two-Row Layout */}
        <div className="hidden lg:block px-5 py-5">
          {/* Row 1: Personal Information */}
          <div className="flex items-end gap-2 mb-3">
            {/* Segment 1: Full Name */}
            <div className="BookingSegment_Column flex-1 px-3 py-2 transition-all duration-300 min-w-0">
              <label htmlFor="hero-name" className="block text-xs text-[#D4AF37] mb-2 uppercase tracking-wider" style={{ fontWeight: 500 }}>
                <User className="w-3.5 h-3.5 inline mr-1.5" />
                Full Name
              </label>
              <Input
                id="hero-name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="h-11 px-3.5 rounded-lg text-[#2C1810] border placeholder:text-[#5C4033]/70 focus:border-[#D4AF37]/80 focus:ring-2 focus:ring-[#D4AF37]/40 transition-all duration-300"
                placeholder="Enter your name"
                style={{
                  background: "rgba(255, 255, 255, 0.4)",
                  backdropFilter: "blur(20px) saturate(180%) brightness(1.2)",
                  WebkitBackdropFilter: "blur(20px) saturate(180%) brightness(1.2)",
                  borderColor: "rgba(255, 255, 255, 0.4)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.3) inset, 0 1px 2px rgba(212, 175, 55, 0.2) inset",
                }}
              />
            </div>

            {/* Segment 2: Email */}
            <div className="BookingSegment_Column flex-1 px-3 py-2 transition-all duration-300 min-w-0">
              <label htmlFor="hero-email" className="block text-xs text-[#D4AF37] mb-2 uppercase tracking-wider" style={{ fontWeight: 500 }}>
                <Mail className="w-3.5 h-3.5 inline mr-1.5" />
                Email
              </label>
              <Input
                id="hero-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="h-11 px-3.5 rounded-lg text-[#2C1810] border placeholder:text-[#5C4033]/70 focus:border-[#D4AF37]/80 focus:ring-2 focus:ring-[#D4AF37]/40 transition-all duration-300"
                placeholder="your@email.com"
                style={{
                  background: "rgba(255, 255, 255, 0.4)",
                  backdropFilter: "blur(20px) saturate(180%) brightness(1.2)",
                  WebkitBackdropFilter: "blur(20px) saturate(180%) brightness(1.2)",
                  borderColor: "rgba(255, 255, 255, 0.4)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.3) inset, 0 1px 2px rgba(212, 175, 55, 0.2) inset",
                }}
              />
            </div>

            {/* Segment 3: Phone */}
            <div className="BookingSegment_Column flex-1 px-3 py-2 transition-all duration-300 min-w-0">
              <label htmlFor="hero-phone" className="block text-xs text-[#D4AF37] mb-2 uppercase tracking-wider" style={{ fontWeight: 500 }}>
                <Phone className="w-3.5 h-3.5 inline mr-1.5" />
                Phone
              </label>
              <Input
                id="hero-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="h-11 px-3.5 rounded-lg text-[#2C1810] border placeholder:text-[#5C4033]/70 focus:border-[#D4AF37]/80 focus:ring-2 focus:ring-[#D4AF37]/40 transition-all duration-300"
                placeholder="+254 7XX XXX XXX"
                style={{
                  background: "rgba(255, 255, 255, 0.4)",
                  backdropFilter: "blur(20px) saturate(180%) brightness(1.2)",
                  WebkitBackdropFilter: "blur(20px) saturate(180%) brightness(1.2)",
                  borderColor: "rgba(255, 255, 255, 0.4)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.3) inset, 0 1px 2px rgba(212, 175, 55, 0.2) inset",
                }}
              />
            </div>
          </div>

          {/* Row 2: Booking Details + CTA */}
          <div className="flex items-end gap-2">
            {/* Segment 4: Space Type */}
            <div className="BookingSegment_Column flex-1 px-3 py-2 transition-all duration-300 min-w-0">
              <label htmlFor="hero-spaceType" className="block text-xs text-[#D4AF37] mb-2 uppercase tracking-wider" style={{ fontWeight: 500 }}>
                Space Type
              </label>
              <Select 
                value={formData.spaceType} 
                onValueChange={(value) => setFormData({ ...formData, spaceType: value })}
              >
                <SelectTrigger 
                  id="hero-spaceType"
                  className="h-11 px-3.5 rounded-lg text-[#2C1810] border focus:border-[#D4AF37]/80 focus:ring-2 focus:ring-[#D4AF37]/40 transition-all duration-300"
                  style={{
                    background: "rgba(255, 255, 255, 0.4)",
                    backdropFilter: "blur(20px) saturate(180%) brightness(1.2)",
                    WebkitBackdropFilter: "blur(20px) saturate(180%) brightness(1.2)",
                    borderColor: "rgba(255, 255, 255, 0.4)",
                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.3) inset, 0 1px 2px rgba(212, 175, 55, 0.2) inset",
                  }}
                >
                  <SelectValue placeholder="Select workspace" />
                </SelectTrigger>
                <SelectContent 
                  className="border"
                  style={{
                    background: "rgba(255, 255, 255, 0.85)",
                    backdropFilter: "blur(30px) saturate(180%) brightness(1.15)",
                    WebkitBackdropFilter: "blur(30px) saturate(180%) brightness(1.15)",
                    borderColor: "rgba(255, 255, 255, 0.5)",
                    boxShadow: "0 8px 32px rgba(31, 38, 135, 0.37)",
                  }}
                >
                  <SelectItem value="private-office" className="text-[#5C4033] hover:bg-[#D4AF37]/20 focus:bg-[#D4AF37]/30">Private Office</SelectItem>
                  <SelectItem value="shared-desk" className="text-[#5C4033] hover:bg-[#D4AF37]/20 focus:bg-[#D4AF37]/30">Shared Desk</SelectItem>
                  <SelectItem value="boardroom" className="text-[#5C4033] hover:bg-[#D4AF37]/20 focus:bg-[#D4AF37]/30">Boardroom</SelectItem>
                  <SelectItem value="event-space" className="text-[#5C4033] hover:bg-[#D4AF37]/20 focus:bg-[#D4AF37]/30">Event Space</SelectItem>
                  <SelectItem value="telephone-booth" className="text-[#5C4033] hover:bg-[#D4AF37]/20 focus:bg-[#D4AF37]/30">Telephone Booth</SelectItem>
                  <SelectItem value="kids-space" className="text-[#5C4033] hover:bg-[#D4AF37]/20 focus:bg-[#D4AF37]/30">Kids Space</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Segment 5: Start Date */}
            <div className="BookingSegment_Column flex-1 px-3 py-2 transition-all duration-300 min-w-0">
              <label htmlFor="hero-date" className="block text-xs text-[#D4AF37] mb-2 uppercase tracking-wider" style={{ fontWeight: 500 }}>
                <Calendar className="w-3.5 h-3.5 inline mr-1.5" />
                Start Date
              </label>
              <Input
                id="hero-date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                required
                className="h-11 px-3.5 rounded-lg text-[#2C1810] border focus:border-[#D4AF37]/80 focus:ring-2 focus:ring-[#D4AF37]/40 transition-all duration-300"
                style={{
                  background: "rgba(255, 255, 255, 0.4)",
                  backdropFilter: "blur(20px) saturate(180%) brightness(1.2)",
                  WebkitBackdropFilter: "blur(20px) saturate(180%) brightness(1.2)",
                  borderColor: "rgba(255, 255, 255, 0.4)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.3) inset, 0 1px 2px rgba(212, 175, 55, 0.2) inset",
                  colorScheme: "light",
                }}
              />
            </div>

            {/* Segment 6: Payment Plan */}
            <div className="BookingSegment_Column flex-1 px-3 py-2 transition-all duration-300 min-w-0">
              <label htmlFor="hero-paymentPlan" className="block text-xs text-[#D4AF37] mb-2 uppercase tracking-wider" style={{ fontWeight: 500 }}>
                Payment Plan
              </label>
              <Select 
                value={formData.paymentPlan} 
                onValueChange={(value) => setFormData({ ...formData, paymentPlan: value })}
              >
                <SelectTrigger 
                  id="hero-paymentPlan"
                  className="h-11 px-3.5 rounded-lg text-[#2C1810] border focus:border-[#D4AF37]/80 focus:ring-2 focus:ring-[#D4AF37]/40 transition-all duration-300"
                  style={{
                    background: "rgba(255, 255, 255, 0.4)",
                    backdropFilter: "blur(20px) saturate(180%) brightness(1.2)",
                    WebkitBackdropFilter: "blur(20px) saturate(180%) brightness(1.2)",
                    borderColor: "rgba(255, 255, 255, 0.4)",
                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.3) inset, 0 1px 2px rgba(212, 175, 55, 0.2) inset",
                  }}
                >
                  <SelectValue placeholder="Select plan" />
                </SelectTrigger>
                <SelectContent 
                  className="border"
                  style={{
                    background: "rgba(255, 255, 255, 0.85)",
                    backdropFilter: "blur(30px) saturate(180%) brightness(1.15)",
                    WebkitBackdropFilter: "blur(30px) saturate(180%) brightness(1.15)",
                    borderColor: "rgba(255, 255, 255, 0.5)",
                    boxShadow: "0 8px 32px rgba(31, 38, 135, 0.37)",
                  }}
                >
                  <SelectItem value="daily" className="text-[#5C4033] hover:bg-[#D4AF37]/20 focus:bg-[#D4AF37]/30">Daily</SelectItem>
                  <SelectItem value="monthly" className="text-[#5C4033] hover:bg-[#D4AF37]/20 focus:bg-[#D4AF37]/30">Monthly</SelectItem>
                  <SelectItem value="yearly" className="text-[#5C4033] hover:bg-[#D4AF37]/20 focus:bg-[#D4AF37]/30">Yearly</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Book Now Button */}
            <button
              type="submit"
              className="BookingButton_Search px-12 h-11 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#D4AF37]/50 whitespace-nowrap flex-shrink-0 group/btn"
              style={{
                background: "linear-gradient(135deg, #D4AF37 0%, #C5A028 100%)",
                color: "#5C4033",
                border: "2px solid rgba(212, 175, 55, 0.4)",
                boxShadow: "0 0 20px rgba(212, 175, 55, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset",
                fontWeight: 600,
              }}
            >
              <span>Book Now</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Mobile/Tablet: Stacked Layout */}
        <div className="lg:hidden space-y-4 p-6">
          <div className="BookingSegment_Column">
            <label htmlFor="hero-name-mobile" className="block text-xs text-[#D4AF37] mb-2 uppercase tracking-wider" style={{ fontWeight: 500 }}>
              <User className="w-3.5 h-3.5 inline mr-1.5" />
              Full Name
            </label>
            <Input
              id="hero-name-mobile"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="h-12 px-4 rounded-lg text-[#2C1810] border placeholder:text-[#5C4033]/70 focus:border-[#D4AF37]/80 focus:ring-2 focus:ring-[#D4AF37]/40 transition-all duration-300"
              placeholder="Enter your name"
              style={{
                background: "rgba(255, 255, 255, 0.4)",
                backdropFilter: "blur(20px) saturate(180%) brightness(1.2)",
                WebkitBackdropFilter: "blur(20px) saturate(180%) brightness(1.2)",
                borderColor: "rgba(255, 255, 255, 0.4)",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.3) inset, 0 1px 2px rgba(212, 175, 55, 0.2) inset",
              }}
            />
          </div>

          <div className="BookingSegment_Column">
            <label htmlFor="hero-email-mobile" className="block text-xs text-[#D4AF37] mb-2 uppercase tracking-wider" style={{ fontWeight: 500 }}>
              <Mail className="w-3.5 h-3.5 inline mr-1.5" />
              Email
            </label>
            <Input
              id="hero-email-mobile"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="h-12 px-4 rounded-lg text-[#2C1810] border placeholder:text-[#5C4033]/70 focus:border-[#D4AF37]/80 focus:ring-2 focus:ring-[#D4AF37]/40 transition-all duration-300"
              placeholder="your@email.com"
              style={{
                background: "rgba(255, 255, 255, 0.4)",
                backdropFilter: "blur(20px) saturate(180%) brightness(1.2)",
                WebkitBackdropFilter: "blur(20px) saturate(180%) brightness(1.2)",
                borderColor: "rgba(255, 255, 255, 0.4)",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.3) inset, 0 1px 2px rgba(212, 175, 55, 0.2) inset",
              }}
            />
          </div>

          <div className="BookingSegment_Column">
            <label htmlFor="hero-phone-mobile" className="block text-xs text-[#D4AF37] mb-2 uppercase tracking-wider" style={{ fontWeight: 500 }}>
              <Phone className="w-3.5 h-3.5 inline mr-1.5" />
              Phone
            </label>
            <Input
              id="hero-phone-mobile"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="h-12 px-4 rounded-lg text-[#2C1810] border placeholder:text-[#5C4033]/70 focus:border-[#D4AF37]/80 focus:ring-2 focus:ring-[#D4AF37]/40 transition-all duration-300"
              placeholder="+254 7XX XXX XXX"
              style={{
                background: "rgba(255, 255, 255, 0.4)",
                backdropFilter: "blur(20px) saturate(180%) brightness(1.2)",
                WebkitBackdropFilter: "blur(20px) saturate(180%) brightness(1.2)",
                borderColor: "rgba(255, 255, 255, 0.4)",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.3) inset, 0 1px 2px rgba(212, 175, 55, 0.2) inset",
              }}
            />
          </div>

          <div className="BookingSegment_Column">
            <label htmlFor="hero-spaceType-mobile" className="block text-xs text-[#D4AF37] mb-2 uppercase tracking-wider" style={{ fontWeight: 500 }}>
              Space Type
            </label>
            <Select 
              value={formData.spaceType} 
              onValueChange={(value) => setFormData({ ...formData, spaceType: value })}
            >
              <SelectTrigger 
                id="hero-spaceType-mobile"
                className="h-12 px-4 rounded-lg text-[#2C1810] border focus:border-[#D4AF37]/80 focus:ring-2 focus:ring-[#D4AF37]/40 transition-all duration-300"
                style={{
                  background: "rgba(255, 255, 255, 0.4)",
                  backdropFilter: "blur(20px) saturate(180%) brightness(1.2)",
                  WebkitBackdropFilter: "blur(20px) saturate(180%) brightness(1.2)",
                  borderColor: "rgba(255, 255, 255, 0.4)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.3) inset, 0 1px 2px rgba(212, 175, 55, 0.2) inset",
                }}
              >
                <SelectValue placeholder="Select workspace" />
              </SelectTrigger>
              <SelectContent 
                className="border"
                style={{
                  background: "rgba(255, 255, 255, 0.85)",
                  backdropFilter: "blur(30px) saturate(180%) brightness(1.15)",
                  WebkitBackdropFilter: "blur(30px) saturate(180%) brightness(1.15)",
                  borderColor: "rgba(255, 255, 255, 0.5)",
                  boxShadow: "0 8px 32px rgba(31, 38, 135, 0.37)",
                }}
              >
                <SelectItem value="private-office" className="text-[#5C4033] hover:bg-[#D4AF37]/20 focus:bg-[#D4AF37]/30">Private Office</SelectItem>
                <SelectItem value="shared-desk" className="text-[#5C4033] hover:bg-[#D4AF37]/20 focus:bg-[#D4AF37]/30">Shared Desk</SelectItem>
                <SelectItem value="boardroom" className="text-[#5C4033] hover:bg-[#D4AF37]/20 focus:bg-[#D4AF37]/30">Boardroom</SelectItem>
                <SelectItem value="event-space" className="text-[#5C4033] hover:bg-[#D4AF37]/20 focus:bg-[#D4AF37]/30">Event Space</SelectItem>
                <SelectItem value="telephone-booth" className="text-[#5C4033] hover:bg-[#D4AF37]/20 focus:bg-[#D4AF37]/30">Telephone Booth</SelectItem>
                <SelectItem value="kids-space" className="text-[#5C4033] hover:bg-[#D4AF37]/20 focus:bg-[#D4AF37]/30">Kids Space</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="BookingSegment_Column">
            <label htmlFor="hero-date-mobile" className="block text-xs text-[#D4AF37] mb-2 uppercase tracking-wider" style={{ fontWeight: 500 }}>
              <Calendar className="w-3.5 h-3.5 inline mr-1.5" />
              Start Date
            </label>
            <Input
              id="hero-date-mobile"
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              required
              className="h-12 px-4 rounded-lg text-[#2C1810] border focus:border-[#D4AF37]/80 focus:ring-2 focus:ring-[#D4AF37]/40 transition-all duration-300"
              style={{
                background: "rgba(255, 255, 255, 0.4)",
                backdropFilter: "blur(20px) saturate(180%) brightness(1.2)",
                WebkitBackdropFilter: "blur(20px) saturate(180%) brightness(1.2)",
                borderColor: "rgba(255, 255, 255, 0.4)",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.3) inset, 0 1px 2px rgba(212, 175, 55, 0.2) inset",
                colorScheme: "light",
              }}
            />
          </div>

          <div className="BookingSegment_Column">
            <label htmlFor="hero-paymentPlan-mobile" className="block text-xs text-[#D4AF37] mb-2 uppercase tracking-wider" style={{ fontWeight: 500 }}>
              Payment Plan
            </label>
            <Select 
              value={formData.paymentPlan} 
              onValueChange={(value) => setFormData({ ...formData, paymentPlan: value })}
            >
              <SelectTrigger 
                id="hero-paymentPlan-mobile"
                className="h-12 px-4 rounded-lg text-[#2C1810] border focus:border-[#D4AF37]/80 focus:ring-2 focus:ring-[#D4AF37]/40 transition-all duration-300"
                style={{
                  background: "rgba(255, 255, 255, 0.4)",
                  backdropFilter: "blur(20px) saturate(180%) brightness(1.2)",
                  WebkitBackdropFilter: "blur(20px) saturate(180%) brightness(1.2)",
                  borderColor: "rgba(255, 255, 255, 0.4)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.3) inset, 0 1px 2px rgba(212, 175, 55, 0.2) inset",
                }}
              >
                <SelectValue placeholder="Select plan" />
              </SelectTrigger>
              <SelectContent 
                className="border"
                style={{
                  background: "rgba(255, 255, 255, 0.85)",
                  backdropFilter: "blur(30px) saturate(180%) brightness(1.15)",
                  WebkitBackdropFilter: "blur(30px) saturate(180%) brightness(1.15)",
                  borderColor: "rgba(255, 255, 255, 0.5)",
                  boxShadow: "0 8px 32px rgba(31, 38, 135, 0.37)",
                }}
              >
                <SelectItem value="daily" className="text-[#5C4033] hover:bg-[#D4AF37]/20 focus:bg-[#D4AF37]/30">Daily</SelectItem>
                <SelectItem value="monthly" className="text-[#5C4033] hover:bg-[#D4AF37]/20 focus:bg-[#D4AF37]/30">Monthly</SelectItem>
                <SelectItem value="yearly" className="text-[#5C4033] hover:bg-[#D4AF37]/20 focus:bg-[#D4AF37]/30">Yearly</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            className="w-full h-14 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#D4AF37]/50 flex items-center justify-center gap-2 group/btn"
            style={{
              background: "linear-gradient(135deg, #D4AF37 0%, #C5A028 100%)",
              color: "#5C4033",
              borderRadius: "12px",
              border: "2px solid rgba(212, 175, 55, 0.4)",
              boxShadow: "0 0 20px rgba(212, 175, 55, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset",
              fontWeight: 600,
            }}
          >
            <span>Book Now</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Hover & Focus Styles */}
        <style>{`
          .HeroBookingBar_Pill:hover {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.12) 50%, rgba(92, 64, 51, 0.3) 100%);
            border-color: rgba(255, 255, 255, 0.35);
            box-shadow: 0 8px 32px rgba(31, 38, 135, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.25) inset, 0 25px 70px rgba(0, 0, 0, 0.45), 0 0 120px rgba(212, 175, 55, 0.2);
          }
          
          /* Input focus enhancement */
          input:focus, select:focus, [role="combobox"]:focus {
            background: rgba(255, 255, 255, 0.5) !important;
            border-color: rgba(212, 175, 55, 0.8) !important;
          }

          /* Equal size for all fields - smooth grow on interaction */
          .BookingSegment_Column {
            flex: 1 1 0;
            min-width: 0;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }

          @media (min-width: 1024px) {
            .BookingSegment_Column:focus-within {
              flex: 1.5 1 0 !important;
              transform: scale(1.02);
              z-index: 10;
            }

            .BookingSegment_Column:hover {
              flex: 1.35 1 0 !important;
              transform: scale(1.01);
              z-index: 5;
            }
          }

          .BookingButton_Search:hover {
            background: linear-gradient(135deg, #E5C050 0%, #D4AF37 100%) !important;
            box-shadow: 0 0 30px rgba(212, 175, 55, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.2) inset !important;
            transform: scale(1.05) translateY(-2px);
          }

          .BookingButton_Search:active {
            transform: scale(0.98) translateY(0px);
          }

          /* Date input styling */
          input[type="date"]::-webkit-calendar-picker-indicator {
            opacity: 0.7;
            cursor: pointer;
            transition: opacity 0.2s ease;
          }
          
          input[type="date"]::-webkit-calendar-picker-indicator:hover {
            opacity: 1;
          }
        `}</style>
      </form>
    );
  }

  // Full variant - original stacked layout
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-lg border border-[#5C4033]/10 max-w-2xl mx-auto"
      data-api="bookings"
    >
      <h3 className="text-[#5C4033] mb-4">Complete Your Booking</h3>

      <div className="space-y-4">
        <div>
          <Label htmlFor="full-name" className="text-[#5C4033]">
            <User className="w-4 h-4 inline mr-2" />
            Full Name
          </Label>
          <Input
            id="full-name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="mt-1 border-[#5C4033]/20 focus:border-[#D4AF37]"
            placeholder="John Doe"
          />
        </div>

        <div>
          <Label htmlFor="full-email" className="text-[#5C4033]">
            <Mail className="w-4 h-4 inline mr-2" />
            Email
          </Label>
          <Input
            id="full-email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="mt-1 border-[#5C4033]/20 focus:border-[#D4AF37]"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <Label htmlFor="full-phone" className="text-[#5C4033]">
            <Phone className="w-4 h-4 inline mr-2" />
            Phone
          </Label>
          <Input
            id="full-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
            className="mt-1 border-[#5C4033]/20 focus:border-[#D4AF37]"
            placeholder="+254 700 123 456"
          />
        </div>

        <div>
          <Label htmlFor="full-spaceType" className="text-[#5C4033]">Space Type</Label>
          <Select value={formData.spaceType} onValueChange={(value) => setFormData({ ...formData, spaceType: value })}>
            <SelectTrigger id="full-spaceType" className="mt-1 border-[#5C4033]/20 focus:border-[#D4AF37]">
              <SelectValue placeholder="Select space type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="private-office">Private Office</SelectItem>
              <SelectItem value="shared-desk">Shared Desk</SelectItem>
              <SelectItem value="boardroom">Boardroom</SelectItem>
              <SelectItem value="event-space">Event Space</SelectItem>
              <SelectItem value="telephone-booth">Telephone Booth</SelectItem>
              <SelectItem value="kids-space">Kids Space</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="full-date" className="text-[#5C4033]">
            <Calendar className="w-4 h-4 inline mr-2" />
            Preferred Date
          </Label>
          <Input
            id="full-date"
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            required
            className="mt-1 border-[#5C4033]/20 focus:border-[#D4AF37]"
          />
        </div>

        <div>
          <Label htmlFor="full-paymentPlan" className="text-[#5C4033]">Payment Plan</Label>
          <Select value={formData.paymentPlan} onValueChange={(value) => setFormData({ ...formData, paymentPlan: value })}>
            <SelectTrigger id="full-paymentPlan" className="mt-1 border-[#5C4033]/20 focus:border-[#D4AF37]">
              <SelectValue placeholder="Select payment plan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="full-duration" className="text-[#5C4033]">Duration (in days/months)</Label>
          <Input
            id="full-duration"
            value={formData.duration}
            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
            className="mt-1 border-[#5C4033]/20 focus:border-[#D4AF37]"
            placeholder="e.g., 3 months"
          />
        </div>

        <div>
          <Label htmlFor="full-additionalRequests" className="text-[#5C4033]">Additional Requests</Label>
          <Textarea
            id="full-additionalRequests"
            value={formData.additionalRequests}
            onChange={(e) => setFormData({ ...formData, additionalRequests: e.target.value })}
            className="mt-1 border-[#5C4033]/20 focus:border-[#D4AF37]"
            placeholder="Any special requirements?"
            rows={3}
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-[#5C4033]"
        >
          Submit Booking Request
        </Button>
      </div>
    </form>
  );
}
