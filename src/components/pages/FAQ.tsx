import { Breadcrumbs } from "../Breadcrumbs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Button } from "../ui/button";

export function FAQ({ onNavigate }: { onNavigate: (page: string) => void }) {
  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "What is Finale Workspace?",
          a: "Finale Workspace is Kenya's premier coworking and flexible workspace provider, offering private offices, shared desks, meeting rooms, and event spaces in Nairobi's Westlands district.",
        },
        {
          q: "What are your operating hours?",
          a: "We're open Monday-Friday 8AM-6PM, and Saturday 9AM-2PM. Members with 24/7 access can use the space anytime.",
        },
        {
          q: "Where are you located?",
          a: "We're located in the heart of Westlands, Nairobi, with easy access to public transport, restaurants, and amenities.",
        },
      ],
    },
    {
      category: "Membership & Booking",
      questions: [
        {
          q: "What membership plans do you offer?",
          a: "We offer daily, monthly, and yearly plans for all our spaces. Pricing varies by space type and includes amenities like high-speed WiFi, meeting room access, and café discounts.",
        },
        {
          q: "How do I book a space?",
          a: "You can book through our website booking form, call us, or visit in person. Our team will help you find the perfect space for your needs.",
        },
        {
          q: "Can I upgrade or downgrade my membership?",
          a: "Yes! We offer flexible membership options. You can adjust your plan at any time to suit your changing needs.",
        },
        {
          q: "Is there a deposit required?",
          a: "Yes, we require a refundable security deposit equal to one month's rent for office spaces. Daily and hot desk bookings don't require a deposit.",
        },
      ],
    },
    {
      category: "Facilities & Amenities",
      questions: [
        {
          q: "What amenities are included?",
          a: "All memberships include high-speed WiFi, printing services, complimentary coffee/tea, kitchen access, cleaning services, and access to communal areas.",
        },
        {
          q: "Do you have parking?",
          a: "Yes, we provide secure parking for members at an additional monthly fee. Visitor parking is also available.",
        },
        {
          q: "Is there a café or restaurant on-site?",
          a: "Yes! Our café serves artisan coffee, fresh meals, and snacks throughout the day. Members receive a 10% discount.",
        },
        {
          q: "Can I receive mail and packages?",
          a: "Yes, we provide mail handling services for members. You can use our business address and we'll notify you when packages arrive.",
        },
      ],
    },
    {
      category: "Events & Meetings",
      questions: [
        {
          q: "Can I book meeting rooms by the hour?",
          a: "Yes, meeting rooms and boardrooms can be booked hourly. Members receive preferential rates.",
        },
        {
          q: "Do you host events?",
          a: "Yes, we regularly host networking events, workshops, and community gatherings. Check our Events page for upcoming activities.",
        },
        {
          q: "Can I host my own event at Finale?",
          a: "Absolutely! Our event spaces are available for private bookings. We can help with planning, catering, and AV setup.",
        },
      ],
    },
    {
      category: "Payments",
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept M-PESA, bank transfers, credit/debit cards, and PayPal. Monthly memberships are auto-billed.",
        },
        {
          q: "Are there any hidden fees?",
          a: "No hidden fees! All our pricing is transparent. Any additional services (extra printing, parking, etc.) are clearly communicated upfront.",
        },
        {
          q: "Do you offer refunds?",
          a: "Monthly and yearly memberships are non-refundable, but can be transferred. Security deposits are fully refundable upon checkout.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFFF0]">
      <Breadcrumbs items={[{ name: "Get Started" }, { name: "FAQ" }]} onNavigate={onNavigate} />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-1 bg-[#D4AF37] mb-6 mx-auto" />
          <h1 className="text-5xl text-[#5C4033] mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-[#5C4033]/70 max-w-3xl mx-auto">
            Find answers to common questions about Finale Workspace
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#FFFFF0]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {faqs.map((category, catIndex) => (
              <div key={catIndex} className="bg-white rounded-lg p-8 shadow-md border border-[#5C4033]/10">
                <h3 className="text-[#5C4033] mb-6">{category.category}</h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, qIndex) => (
                    <AccordionItem key={qIndex} value={`${catIndex}-${qIndex}`}>
                      <AccordionTrigger className="text-left text-[#5C4033] hover:text-[#D4AF37]">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-[#5C4033]/70">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-[#5C4033] mb-4">Still Have Questions?</h3>
          <p className="text-[#5C4033]/70 mb-8 max-w-2xl mx-auto">
            Our team is here to help. Reach out and we'll get back to you promptly.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              onClick={() => onNavigate("contact")}
              className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#5C4033]"
            >
              Contact Us
            </Button>
            <Button
              onClick={() => onNavigate("book-tour")}
              variant="outline"
              className="border-[#5C4033] text-[#5C4033] hover:bg-[#5C4033] hover:text-white"
            >
              Book a Tour
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
