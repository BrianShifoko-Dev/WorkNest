import { Award, Users, Target, TrendingUp } from "lucide-react";
import { Breadcrumbs } from "../Breadcrumbs";
import { Button } from "../ui/button";

export function AboutUs({ onNavigate }: { onNavigate: (page: string) => void }) {
  const milestones = [
    { year: "2020", title: "Founded", description: "Finale Workspace was established in Nairobi" },
    { year: "2021", title: "Expansion", description: "Opened our flagship location in Westlands" },
    { year: "2023", title: "Award Winning", description: "Named Best Coworking Space in East Africa" },
    { year: "2025", title: "Community Growth", description: "Over 500 members and growing" },
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from our facilities to our service.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive community of professionals who inspire and empower each other.",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Embracing new ideas and technologies to enhance the workspace experience.",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Supporting the growth and success of every member of our community.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFFF0]">
      <Breadcrumbs items={[{ name: "Discover Us" }, { name: "About Us" }]} onNavigate={onNavigate} />

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 z-10" />
        <img
          src="https://images.unsplash.com/photo-1626187777040-ffb7cb2c5450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3dvcmtpbmclMjBzcGFjZXxlbnwxfHx8fDE3NjIxNTc0NTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="About Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl mb-4">About Finale Workspace</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Redefining workspace excellence in Kenya since 2020
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="w-16 h-1 bg-[#D4AF37] mb-6 mx-auto" />
            <h2 className="text-center text-[#5C4033] mb-6">Our Story</h2>
            <div className="prose prose-lg mx-auto text-[#5C4033]/70">
              <p className="mb-4">
                Finale Workspace Kenya was born from a simple observation: Nairobi's professionals 
                deserved workspace solutions that matched their ambition and drive. In 2020, we opened 
                our doors with a mission to create more than just office space—we wanted to build a 
                community where innovation thrives and businesses flourish.
              </p>
              <p className="mb-4">
                What started as a single location in Westlands has grown into Kenya's premier workspace 
                provider, serving hundreds of professionals, entrepreneurs, and companies. Our success 
                is built on a foundation of exceptional service, world-class facilities, and an 
                unwavering commitment to our members' success.
              </p>
              <p>
                Today, Finale Workspace stands as a testament to what's possible when vision meets 
                execution. We're not just providing desks and offices—we're creating an ecosystem 
                where businesses grow, relationships form, and dreams become reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#FFFFF0]">
        <div className="container mx-auto px-4">
          <div className="w-16 h-1 bg-[#D4AF37] mb-6 mx-auto" />
          <h2 className="text-center text-[#5C4033] mb-16">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-8 items-start">
                  <div className="w-24 flex-shrink-0">
                    <div className="w-20 h-20 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-[#5C4033] text-xl">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-lg shadow-md border border-[#5C4033]/10">
                    <h3 className="text-[#5C4033] mb-2">{milestone.title}</h3>
                    <p className="text-[#5C4033]/70">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="w-16 h-1 bg-[#D4AF37] mb-6 mx-auto" />
          <h2 className="text-center text-[#5C4033] mb-4">Our Values</h2>
          <p className="text-center text-[#5C4033]/70 mb-12 max-w-2xl mx-auto">
            These core values guide everything we do and shape the experience we create for our members
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 bg-[#FFFFF0] rounded-lg hover:shadow-lg transition-shadow border border-[#5C4033]/5"
              >
                <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h4 className="text-[#5C4033] mb-3">{value.title}</h4>
                <p className="text-sm text-[#5C4033]/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#5C4033] to-[#4A3329]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white mb-4">Join Our Story</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Become part of Kenya's most dynamic workspace community
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              onClick={() => onNavigate("join-member")}
              className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#5C4033]"
            >
              Join as Member
            </Button>
            <Button
              onClick={() => onNavigate("book-tour")}
              variant="outline"
              className="border-white text-[rgb(92,64,51)] hover:bg-white hover:text-[#5C4033]"
            >
              Book a Tour
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
