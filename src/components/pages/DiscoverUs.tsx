import { Target, Eye, Users, Zap, Heart, Shield, Award } from "lucide-react";
import { Button } from "../ui/button";
import { ReviewCard } from "../ReviewCard";

export function DiscoverUs({ onNavigate }: { onNavigate: (page: string) => void }) {
  const features = [
    {
      icon: Zap,
      title: "Flexibility",
      description: "Daily, monthly, or yearly plans that adapt to your changing needs",
    },
    {
      icon: Award,
      title: "Premium Design",
      description: "Thoughtfully designed spaces that inspire creativity and productivity",
    },
    {
      icon: Users,
      title: "Community",
      description: "Network with like-minded professionals and entrepreneurs",
    },
    {
      icon: Shield,
      title: "Security",
      description: "24/7 secure access with modern security systems",
    },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1626187777040-ffb7cb2c5450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3dvcmtpbmclMjBzcGFjZXxlbnwxfHx8fDE3NjIxNTc0NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1640109341881-1cd3eaf50909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyMjMzNjI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1692133226337-55e513450a32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcml2YXRlJTIwb2ZmaWNlJTIwcm9vbXxlbnwxfHx8fDE3NjIyMzM2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1462826303086-329426d1aef5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwYm9hcmRyb29tfGVufDF8fHx8MTc2MjIzMzYyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1693902997450-7e912c0d3554?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZW55YSUyMG5haXJvYmklMjBjaXR5c2NhcGV8ZW58MXx8fHwxNzYyMjMzNjMwfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Nairobi"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl mb-4">Discover Finale Workspace</h1>
            <p className="text-xl">Your premier workspace partner in Nairobi, Kenya</p>
          </div>
        </div>
      </section>

      {/* About Company */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[#5C4033] mb-6">Who We Are</h2>
              <p className="text-[#5C4033]/70 mb-4">
                Finale Workspace Kenya was founded with a vision to transform the way professionals work 
                in Nairobi. We believe that your workspace should be more than just a desk—it should be 
                a community, an inspiration, and a catalyst for success.
              </p>
              <p className="text-[#5C4033]/70 mb-4">
                Since our inception, we've been committed to providing premium coworking solutions that 
                combine luxury, functionality, and flexibility. Our state-of-the-art facilities are designed 
                to meet the diverse needs of freelancers, startups, and established enterprises.
              </p>
              <p className="text-[#5C4033]/70">
                Located in the vibrant Westlands district, we're at the heart of Nairobi's business ecosystem, 
                offering easy access to major transport links, restaurants, and amenities.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1626187777040-ffb7cb2c5450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3dvcmtpbmclMjBzcGFjZXxlbnwxfHx8fDE3NjIxNTc0NTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Workspace"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1640109341881-1cd3eaf50909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyMjMzNjI3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Office"
                className="w-full h-48 object-cover rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-[#FFFFF0]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-[#5C4033]/10">
              <Target className="w-12 h-12 text-[#D4AF37] mb-4" />
              <h3 className="text-[#5C4033] mb-4">Our Mission</h3>
              <p className="text-[#5C4033]/70">
                To empower professionals and businesses by providing world-class workspace solutions 
                that foster innovation, collaboration, and growth. We strive to create an environment 
                where every member can thrive and achieve their full potential.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-[#5C4033]/10">
              <Eye className="w-12 h-12 text-[#D4AF37] mb-4" />
              <h3 className="text-[#5C4033] mb-4">Our Vision</h3>
              <p className="text-[#5C4033]/70">
                To be East Africa's leading workspace provider, recognized for our commitment to 
                excellence, innovation, and community building. We envision a future where flexible, 
                premium workspaces are accessible to all professionals across Kenya and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-[#5C4033] mb-12">Why Choose Finale?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-[#FFFFF0] rounded-lg hover:shadow-lg transition-shadow"
              >
                <feature.icon className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
                <h4 className="text-[#5C4033] mb-2">{feature.title}</h4>
                <p className="text-sm text-[#5C4033]/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Carousel */}
      <section className="py-16 bg-[#FFFFF0]">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-[#5C4033] mb-12">Tour Our Workspace</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg aspect-square">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-[#5C4033] mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ReviewCard
              problem="Our remote team needed a professional space in Nairobi for quarterly meetings and collaboration sessions."
              solution="Finale's flexible booking system allowed us to reserve private offices and boardrooms exactly when we needed them, without long-term commitments."
              testimonial="The flexibility and professionalism at Finale are unmatched. It's become our go-to space for all our Nairobi operations."
              clientName="Michael Chen"
              clientRole="Operations Manager, Tech Company"
            />
            <ReviewCard
              problem="As a growing law firm, we needed to project a professional image but couldn't afford premium office space full-time."
              solution="Finale provided us with access to elegant boardrooms and meeting spaces on demand, helping us impress clients without breaking the bank."
              testimonial="Finale helped us maintain our professional image while keeping costs manageable. The spaces are always pristine and well-equipped."
              clientName="Advocate Jane Muthoni"
              clientRole="Partner, Law Firm"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#D4AF37] to-[#B8941F]">
        <div className="container mx-auto px-4 text-center">
          <Heart className="w-16 h-16 text-[#5C4033] mx-auto mb-6" />
          <h2 className="text-[#5C4033] mb-4">Join Our Community</h2>
          <p className="text-xl mb-8 text-[#5C4033]/80 max-w-2xl mx-auto">
            Be part of a thriving community of innovators, entrepreneurs, and professionals
          </p>
          <Button
            onClick={() => onNavigate("getstarted")}
            className="bg-[#5C4033] hover:bg-[#4A3329] text-white"
          >
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
}
