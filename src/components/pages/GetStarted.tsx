import { Briefcase, Calendar as CalendarIcon, BookOpen, Play } from "lucide-react";
import { Button } from "../ui/button";

export function GetStarted({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="min-h-screen bg-[#FFFFF0]">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#5C4033] to-[#4A3329] opacity-90 z-10" />
        <img
          src="https://images.unsplash.com/photo-1758518731572-7791381c5ce8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMG1lZXRpbmd8ZW58MXx8fHwxNzYyMTg4NzE1fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Get Started"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl mb-4">Begin Your Workspace Journey</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Join Kenya's premier business community and take your work to the next level
            </p>
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[#5C4033] mb-6">Welcome to Finale Workspace</h2>
            <p className="text-[#5C4033]/70 mb-4">
              We're thrilled that you're considering joining our community of innovative professionals, 
              entrepreneurs, and growing businesses. Getting started is easy—choose the path that's 
              right for you.
            </p>
            <p className="text-[#5C4033]/70">
              Whether you need a dedicated office, a space for events, or want to contribute to our 
              magazine, we're here to support your journey every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Cards */}
      <section className="py-16 bg-[#FFFFF0]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Book a Space */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-[#5C4033]/10 text-center">
              <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-[#5C4033] mb-4">Book a Space</h3>
              <p className="text-sm text-[#5C4033]/70 mb-6">
                Find the perfect workspace solution for your needs. From private offices to shared desks, 
                we have options for everyone.
              </p>
              <Button
                onClick={() => onNavigate("products")}
                className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-[#5C4033]"
              >
                Browse Spaces
              </Button>
            </div>

            {/* Host an Event */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-[#5C4033]/10 text-center">
              <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CalendarIcon className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-[#5C4033] mb-4">Host an Event</h3>
              <p className="text-sm text-[#5C4033]/70 mb-6">
                Our event spaces are perfect for conferences, workshops, product launches, and corporate 
                gatherings of all sizes.
              </p>
              <Button
                onClick={() => onNavigate("events")}
                className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-[#5C4033]"
              >
                Explore Events
              </Button>
            </div>

            {/* Join the Magazine */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-[#5C4033]/10 text-center">
              <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-[#5C4033] mb-4">Join the Magazine</h3>
              <p className="text-sm text-[#5C4033]/70 mb-6">
                Share your story, insights, or expertise with our community. Contribute articles to our 
                magazine and inspire others.
              </p>
              <Button
                onClick={() => onNavigate("magazine")}
                className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-[#5C4033]"
              >
                Read Magazine
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-[#5C4033] mb-12">Our Story</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video bg-[#5C4033]/10 rounded-lg overflow-hidden group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1626187777040-ffb7cb2c5450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3dvcmtpbmclMjBzcGFjZXxlbnwxfHx8fDE3NjIxNTc0NTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                <div className="w-20 h-20 bg-[#D4AF37] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-10 h-10 text-[#5C4033] ml-1" />
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-[#5C4033]/70">
                Watch our story and discover how Finale Workspace is transforming the way people work 
                in Nairobi. From our humble beginnings to becoming Kenya's premier workspace provider, 
                we're proud to be part of your success story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-16 bg-[#FFFFF0]">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-[#5C4033] mb-12">How It Works</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {[
                {
                  step: 1,
                  title: "Explore Our Spaces",
                  description: "Browse through our range of offices, boardrooms, and event spaces to find what suits you best.",
                },
                {
                  step: 2,
                  title: "Choose Your Plan",
                  description: "Select from daily, monthly, or yearly plans based on your needs and budget.",
                },
                {
                  step: 3,
                  title: "Book & Pay",
                  description: "Complete your booking through our simple form and make payment via M-PESA, card, or bank transfer.",
                },
                {
                  step: 4,
                  title: "Move In",
                  description: "Receive your access credentials and start working in your new premium workspace!",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#5C4033]">{item.step}</span>
                  </div>
                  <div>
                    <h4 className="text-[#5C4033] mb-2">{item.title}</h4>
                    <p className="text-sm text-[#5C4033]/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-[#5C4033] to-[#4A3329] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-white">Ready to Start?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Don't wait—your perfect workspace is just a click away
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              onClick={() => onNavigate("products")}
              className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#5C4033]"
            >
              Book Your Space Now
            </Button>
            <Button
              onClick={() => onNavigate("contact")}
              variant="outline"
              className="border-white text-[rgb(92,64,51)] hover:bg-white hover:text-[#5C4033]"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
