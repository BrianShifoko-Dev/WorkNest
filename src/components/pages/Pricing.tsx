import { Check } from "lucide-react";
import { Breadcrumbs } from "../Breadcrumbs";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export function Pricing({ onNavigate }: { onNavigate: (page: string) => void }) {
  const plans = [
    {
      name: "Hot Desk",
      description: "Flexible workspace solution for individuals",
      daily: "KES 800",
      monthly: "KES 15,000",
      yearly: "KES 150,000",
      popular: false,
      features: [
        "Access to shared workspace",
        "High-speed WiFi",
        "Complimentary coffee/tea",
        "Kitchen access",
        "Community events",
        "Mail handling",
      ],
    },
    {
      name: "Dedicated Desk",
      description: "Your own desk in a shared environment",
      daily: "KES 1,500",
      monthly: "KES 25,000",
      yearly: "KES 250,000",
      popular: true,
      features: [
        "All Hot Desk features",
        "Reserved desk space",
        "Personal storage locker",
        "Meeting room credits (2hrs/month)",
        "Priority booking",
        "24/7 access",
      ],
    },
    {
      name: "Private Office",
      description: "Secure private office for teams",
      daily: "KES 5,000",
      monthly: "From KES 80,000",
      yearly: "From KES 800,000",
      popular: false,
      features: [
        "All Dedicated Desk features",
        "Private lockable office",
        "Customizable space",
        "Meeting room credits (10hrs/month)",
        "Company signage",
        "Dedicated phone line",
        "Priority support",
      ],
    },
  ];

  const addOns = [
    { name: "Additional Meeting Room Hours", price: "KES 1,500/hr" },
    { name: "Parking Space", price: "KES 5,000/month" },
    { name: "Business Address Service", price: "KES 3,000/month" },
    { name: "Virtual Office", price: "KES 10,000/month" },
    { name: "Phone Booth Access", price: "KES 500/hour" },
  ];

  return (
    <div className="min-h-screen bg-[#FFFFF0]">
      <Breadcrumbs items={[{ name: "Get Started" }, { name: "Pricing" }]} onNavigate={onNavigate} />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-1 bg-[#D4AF37] mb-6 mx-auto" />
          <h1 className="text-5xl text-[#5C4033] mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-[#5C4033]/70 max-w-3xl mx-auto">
            Choose the plan that works best for you. All plans include our core amenities.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#FFFFF0]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border-2 ${
                  plan.popular ? "border-[#D4AF37]" : "border-[#5C4033]/10"
                } relative`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-[#5C4033]">
                    Most Popular
                  </Badge>
                )}
                <h3 className="text-[#5C4033] mb-2">{plan.name}</h3>
                <p className="text-sm text-[#5C4033]/70 mb-6">{plan.description}</p>

                <div className="space-y-2 mb-6 pb-6 border-b border-[#5C4033]/10">
                  <div>
                    <span className="text-sm text-[#5C4033]/60">Daily:</span>
                    <span className="text-2xl text-[#D4AF37] ml-2">{plan.daily}</span>
                  </div>
                  <div>
                    <span className="text-sm text-[#5C4033]/60">Monthly:</span>
                    <span className="text-2xl text-[#D4AF37] ml-2">{plan.monthly}</span>
                  </div>
                  <div>
                    <span className="text-sm text-[#5C4033]/60">Yearly:</span>
                    <span className="text-2xl text-[#D4AF37] ml-2">{plan.yearly}</span>
                    {plan.yearly !== "From KES 800,000" && (
                      <Badge className="ml-2 bg-green-100 text-green-700 text-xs">Save 17%</Badge>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#5C4033]/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => onNavigate("products")}
                  className={`w-full ${
                    plan.popular
                      ? "bg-[#D4AF37] hover:bg-[#B8941F] text-[#5C4033]"
                      : "bg-[#5C4033] hover:bg-[#4A3329] text-white"
                  }`}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="w-16 h-1 bg-[#D4AF37] mb-6 mx-auto" />
            <h2 className="text-center text-[#5C4033] mb-12">Add-On Services</h2>
            <div className="bg-[#FFFFF0] rounded-lg p-8 border border-[#5C4033]/10">
              <div className="grid md:grid-cols-2 gap-6">
                {addOns.map((addon, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-4 bg-white rounded-lg border border-[#5C4033]/10"
                  >
                    <span className="text-[#5C4033]">{addon.name}</span>
                    <span className="text-[#D4AF37]">{addon.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#FFFFF0]">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-[#5C4033] mb-4">Need a Custom Solution?</h3>
          <p className="text-[#5C4033]/70 mb-8">
            Contact us for enterprise plans and custom workspace solutions
          </p>
          <Button
            onClick={() => onNavigate("contact")}
            className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#5C4033]"
          >
            Contact Sales
          </Button>
        </div>
      </section>
    </div>
  );
}
