import { Target, Eye, Heart, Zap } from "lucide-react";
import { Breadcrumbs } from "../Breadcrumbs";

export function Mission({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="min-h-screen bg-[#FFFFF0]">
      <Breadcrumbs items={[{ name: "Discover Us" }, { name: "Our Mission" }]} onNavigate={onNavigate} />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-white to-[#FFFFF0]">
        <div className="container mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Target className="w-10 h-10 text-[#5C4033]" />
          </div>
          <h1 className="text-5xl text-[#5C4033] mb-6">Our Mission & Vision</h1>
          <p className="text-xl text-[#5C4033]/70 max-w-3xl mx-auto">
            Driving workspace excellence and empowering Kenya's business community
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-1 bg-[#D4AF37] mb-6" />
                <h2 className="text-[#5C4033] mb-6">Our Mission</h2>
                <p className="text-[#5C4033]/70 mb-4">
                  To provide flexible, world-class workspaces that enhance productivity, foster meaningful connections, and support growth through exceptional service, modern design, and a vibrant community.
                </p>
                <p className="text-[#5C4033]/70">
                  We believe that the right workspace isn't just about desks and chairs it's about 
                  creating an ecosystem that supports success, encourages community, and inspires excellence.
                </p>
              </div>
              <div className="bg-[#D4AF37]/10 p-8 rounded-lg border-l-4 border-[#D4AF37]">
                <Target className="w-12 h-12 text-[#D4AF37] mb-4" />
                <h3 className="text-[#5C4033] mb-3">Mission Statement</h3>
                <p className="text-[#5C4033]/80 italic">
                  "To be the catalyst for professional success in Kenya by delivering premium co-working space 
                  solutions, fostering meaningful connections, and creating an environment where innovation thrives."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-[#FFFFF0]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-[#5C4033] p-8 rounded-lg text-white">
                <Eye className="w-12 h-12 text-[#D4AF37] mb-4" />
                <h3 className="mb-3">Vision Statement</h3>
                <p className="text-white/90 italic">
                  "To be Kenya’s leading hub for innovation and collaboration empowering professionals, entrepreneurs, and businesses to thrive in a dynamic, inspiring workspace."
                </p>
              </div>
              <div>
                <div className="w-16 h-1 bg-[#D4AF37] mb-6" />
                <h2 className="text-[#5C4033] mb-6">Our Vision</h2>
                <p className="text-[#5C4033]/70 mb-4">
                  We envision a future where flexible, premium coworking space accessible to all 
                  professionals across Kenya and beyond. A future where work is not confined to 
                  traditional offices, but flourishes in dynamic, collaborative environments.
                </p>
                <p className="text-[#5C4033]/70">
                  Through continuous innovation and unwavering commitment to our members, we aim to 
                  set new standards for workspace excellence throughout East Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="w-16 h-1 bg-[#D4AF37] mb-6 mx-auto" />
          <h2 className="text-center text-[#5C4033] mb-16">Our Core Pillars</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Heart,
                title: "People First",
                description: "Our members are at the heart of everything we do. Their success is our success.",
              },
              {
                icon: Zap,
                title: "Innovation",
                description: "Continuously evolving our spaces and services to meet the changing needs of modern professionals.",
              },
              {
                icon: Target,
                title: "Excellence",
                description: "Maintaining the highest standards in facilities, service, and community support.",
              },
            ].map((pillar, index) => (
              <div key={index} className="text-center p-6 bg-[#FFFFF0] rounded-lg border border-[#5C4033]/10 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <pillar.icon className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h4 className="text-[#5C4033] mb-3">{pillar.title}</h4>
                <p className="text-sm text-[#5C4033]/70">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
