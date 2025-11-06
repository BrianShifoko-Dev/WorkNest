import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form:", formData);
    toast.success("Message sent! We'll get back to you shortly.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-[#FFFFF0]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#5C4033] to-[#4A3329] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            We're here to help. Reach out to us and we'll respond as soon as
            possible
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-[#5C4033] mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-[#5C4033] mb-1">Phone</h4>
                    <p className="text-[#5C4033]/70">+254 745 319 042</p>
                    <p className="text-[#5C4033]/70">+254 722 987 654</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-[#5C4033] mb-1">Email</h4>
                    <p className="text-[#5C4033]/70">
                      hello@finaleworkspace.co.ke
                    </p>
                    <p className="text-[#5C4033]/70">
                      bookings@finaleworkspace.co.ke
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-[#5C4033] mb-1">Address</h4>
                    <p className="text-[#5C4033]/70">
                      The   WorkNest Co-working space
                      <br />
                      Eldoret
                      <br />
                      Eldoret, Kenya
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-lg shadow-lg border border-[#5C4033]/10">
                <h4 className="text-[#5C4033] mb-4">Office Hours</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#5C4033]/70">Monday - Friday</span>
                    <span className="text-[#5C4033]">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5C4033]/70">Saturday</span>
                    <span className="text-[#5C4033]">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5C4033]/70">Sunday</span>
                    <span className="text-[#5C4033]">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-lg border border-[#5C4033]/10"
              >
                <h3 className="text-[#5C4033] mb-6">Send Us a Message</h3>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-[#5C4033]">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="mt-1 border-[#5C4033]/20 focus:border-[#D4AF37]"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-[#5C4033]">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="mt-1 border-[#5C4033]/20 focus:border-[#D4AF37]"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-[#5C4033]">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      required
                      className="mt-1 border-[#5C4033]/20 focus:border-[#D4AF37]"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-[#5C4033]">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      className="mt-1 border-[#5C4033]/20 focus:border-[#D4AF37]"
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-[#5C4033]"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.202273669347!2d36.8002!3d-1.2674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a6bf7445dc1%3A0x940b62a3c8efde4c!2sWestlands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}
