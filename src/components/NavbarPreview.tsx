import { Monitor, Smartphone, CheckCircle2, MousePointer2, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export function NavbarPreview() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#FFFFF0] py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-1 bg-[#D4AF37] mb-6 mx-auto" />
          <h1 className="text-5xl text-[#5C4033] mb-6">Enhanced Navigation Bar</h1>
          <p className="text-xl text-[#5C4033]/70 max-w-3xl mx-auto mb-8">
            WorkNest-inspired elegance meets precision with smooth interactions
          </p>
          
          {/* Quick Test Notice */}
          <div className="inline-block bg-[#D4AF37]/10 border-2 border-[#D4AF37] rounded-lg p-6 max-w-2xl">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Sparkles className="w-6 h-6 text-[#D4AF37]" />
              <h3 className="text-[#5C4033]">Try It Now!</h3>
            </div>
            <p className="text-[#5C4033]/80 mb-4">
              The navigation bar at the top of this page is fully interactive. 
              Hover over or tap any menu item to see the dropdown menus in action.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-[#5C4033]/70">
              <MousePointer2 className="w-4 h-4 text-[#D4AF37]" />
              <span>Scroll up to test the navigation</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </div>
          </div>
        </div>

        {/* Desktop Preview */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <Monitor className="w-6 h-6 text-[#D4AF37]" />
            <h2 className="text-[#5C4033]">Desktop Navigation</h2>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-refined-lg border border-[#5C4033]/10">
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-[#5C4033] mb-1">Smooth Hover Interactions</h4>
                  <p className="text-sm text-[#5C4033]/70">
                    Dropdowns appear with 150-200ms fade-in and slide-down animation. Gold underline animates on hover.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-[#5C4033] mb-1">20px Hover Buffer</h4>
                  <p className="text-sm text-[#5C4033]/70">
                    Invisible 20px padding between nav item and dropdown prevents flickering when moving mouse.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-[#5C4033] mb-1">Perfect Alignment</h4>
                  <p className="text-sm text-[#5C4033]/70">
                    Each dropdown aligns precisely beneath its parent item with ivory background (#FFFFF0).
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-[#5C4033] mb-1">Click Outside to Close</h4>
                  <p className="text-sm text-[#5C4033]/70">
                    Dropdowns automatically close when clicking anywhere outside the navigation area.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-[#5C4033] mb-1">Refined Shadows & Borders</h4>
                  <p className="text-sm text-[#5C4033]/70">
                    Soft, elegant shadows with subtle borders create depth without overwhelming the design.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Demo */}
            <div className="border-t border-[#5C4033]/10 pt-8">
              <h4 className="text-[#5C4033] mb-4">Desktop Menu Structure:</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                {[
                  { title: "Discover Us", items: ["About Our Spaces", "Why Choose Us", "Gallery", "Our Mission & Vision"] },
                  { title: "Products & Book", items: ["Office Spaces", "Boardrooms", "Event Spaces", "Kids Zone", "Telephone Booths"] },
                  { title: "Restaurant", items: ["View Menu", "Reserve a Table", "Coffee & Drinks", "Lunch & Snacks"] },
                  { title: "Events", items: ["Upcoming Events", "Host Your Event", "Past Highlights"] },
                  { title: "Magazine", items: ["Workstyle Tips", "Design Inspirations", "Success Stories"] },
                  { title: "Get Started", items: ["Book a Space", "Join Our Community", "Host an Event"] },
                ].map((menu, idx) => (
                  <div key={idx} className="bg-[#FFFFF0] p-4 rounded-lg border border-[#5C4033]/10">
                    <p className="text-[#D4AF37] mb-2">{menu.title}</p>
                    <ul className="space-y-1">
                      {menu.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="text-xs text-[#5C4033]/70 flex items-center gap-1">
                          <span className="w-1 h-1 bg-[#D4AF37] rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Preview */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <Smartphone className="w-6 h-6 text-[#D4AF37]" />
            <h2 className="text-[#5C4033]">Mobile Navigation</h2>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-refined-lg border border-[#5C4033]/10">
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-[#5C4033] mb-1">Accordion-Style Dropdowns</h4>
                  <p className="text-sm text-[#5C4033]/70">
                    All dropdowns transform into collapsible accordions that open on tap with smooth animation.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-[#5C4033] mb-1">48px Touch Targets</h4>
                  <p className="text-sm text-[#5C4033]/70">
                    All nav items and dropdown items have minimum 48px height for comfortable mobile interaction.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-[#5C4033] mb-1">Consistent Icons & Typography</h4>
                  <p className="text-sm text-[#5C4033]/70">
                    ChevronDown icons rotate 180° when expanded. Typography matches desktop exactly.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-[#5C4033] mb-1">Scrollable Menu</h4>
                  <p className="text-sm text-[#5C4033]/70">
                    Mobile menu has max-height with smooth scrolling for devices with limited screen space.
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Demo Visualization */}
            <div className="border-t border-[#5C4033]/10 pt-8">
              <h4 className="text-[#5C4033] mb-4">Mobile Interaction Flow:</h4>
              <div className="max-w-sm mx-auto bg-[#FFFFF0] rounded-lg p-4 border border-[#5C4033]/10">
                <div className="space-y-2">
                  <div className="bg-white p-3 rounded border border-[#5C4033]/10 flex items-center justify-between min-h-[48px]">
                    <span className="text-sm text-[#5C4033]">Discover Us</span>
                    <MousePointer2 className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div className="bg-[#D4AF37]/5 rounded overflow-hidden">
                    {["About Our Spaces", "Why Choose Us", "Gallery", "Our Mission & Vision"].map((item, idx) => (
                      <div
                        key={idx}
                        className="pl-6 pr-3 py-2.5 text-xs text-[#5C4033]/80 min-h-[48px] flex items-center border-b border-[#5C4033]/5 last:border-0"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="bg-white p-3 rounded border border-[#5C4033]/10 flex items-center justify-between min-h-[48px]">
                    <span className="text-sm text-[#5C4033]">Contact</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Tokens */}
        <section>
          <h2 className="text-[#5C4033] mb-6">Design System</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-refined border border-[#5C4033]/10">
              <h4 className="text-[#5C4033] mb-4">Color Palette</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-[#D4AF37] border border-[#5C4033]/10" />
                  <div className="text-sm">
                    <p className="text-[#5C4033]">Woody Gold</p>
                    <p className="text-xs text-[#5C4033]/60">#D4AF37</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-[#FFFFF0] border border-[#5C4033]/20" />
                  <div className="text-sm">
                    <p className="text-[#5C4033]">Ivory</p>
                    <p className="text-xs text-[#5C4033]/60">#FFFFF0</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-[#5C4033] border border-[#5C4033]/10" />
                  <div className="text-sm">
                    <p className="text-[#5C4033]">Rich Brown</p>
                    <p className="text-xs text-[#5C4033]/60">#5C4033</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-refined border border-[#5C4033]/10">
              <h4 className="text-[#5C4033] mb-4">Animations</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-[#5C4033]">Fade-in Duration</p>
                  <p className="text-xs text-[#5C4033]/60">150-200ms ease-out</p>
                </div>
                <div>
                  <p className="text-[#5C4033]">Slide Animation</p>
                  <p className="text-xs text-[#5C4033]/60">translateY(-10px) to 0</p>
                </div>
                <div>
                  <p className="text-[#5C4033]">Hover Transition</p>
                  <p className="text-xs text-[#5C4033]/60">200ms all properties</p>
                </div>
                <div>
                  <p className="text-[#5C4033]">Icon Rotation</p>
                  <p className="text-xs text-[#5C4033]/60">180° on expand</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-refined border border-[#5C4033]/10">
              <h4 className="text-[#5C4033] mb-4">Spacing & Layout</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-[#5C4033]">Nav Height</p>
                  <p className="text-xs text-[#5C4033]/60">80px (h-20)</p>
                </div>
                <div>
                  <p className="text-[#5C4033]">Hover Buffer</p>
                  <p className="text-xs text-[#5C4033]/60">20px padding-top</p>
                </div>
                <div>
                  <p className="text-[#5C4033]">Dropdown Width</p>
                  <p className="text-xs text-[#5C4033]/60">256px (w-64)</p>
                </div>
                <div>
                  <p className="text-[#5C4033]">Touch Target</p>
                  <p className="text-xs text-[#5C4033]/60">48px minimum</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="mt-16 bg-white rounded-lg p-8 shadow-refined-lg border border-[#5C4033]/10">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-[#D4AF37]" />
            <h2 className="text-[#5C4033]">Interactive Navigation Demo</h2>
          </div>
          <div className="bg-[#FFFFF0] rounded-lg p-8 border-2 border-dashed border-[#D4AF37]/30">
            <p className="text-center text-[#5C4033] mb-6">
              The navigation bar you see at the top of this page is fully interactive!
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-refined border border-[#5C4033]/10">
                <h4 className="text-[#5C4033] mb-3 flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-[#D4AF37]" />
                  Try on Desktop
                </h4>
                <ul className="space-y-2 text-sm text-[#5C4033]/70">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#D4AF37]" />
                    Hover over any menu item to see dropdown
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#D4AF37]" />
                    Watch the gold underline animate
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#D4AF37]" />
                    Move mouse to dropdown without it closing
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#D4AF37]" />
                    Click any item to navigate to that page
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-refined border border-[#5C4033]/10">
                <h4 className="text-[#5C4033] mb-3 flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-[#D4AF37]" />
                  Try on Mobile
                </h4>
                <ul className="space-y-2 text-sm text-[#5C4033]/70">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#D4AF37]" />
                    Tap the hamburger menu icon
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#D4AF37]" />
                    Tap any item to expand/collapse
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#D4AF37]" />
                    Notice the smooth accordion animation
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#D4AF37]" />
                    All touch targets are 48px minimum
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-6">
              <p className="text-sm text-[#5C4033]/60 italic">
                Resize your browser window to see the responsive behavior in action
              </p>
            </div>
          </div>
        </section>

        {/* Feature Summary */}
        <section className="mt-16 bg-gradient-to-r from-[#5C4033] to-[#4A3329] rounded-lg p-12 text-center">
          <h3 className="text-white mb-4">Navigation Features Summary</h3>
          <p className="text-white/90 max-w-3xl mx-auto mb-8">
            Premium navigation experience combining Westhive's sophisticated design with Regus's 
            functional excellence, optimized for both desktop and mobile interactions.
          </p>
          <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto text-sm mb-8">
            {[
              "6 Dropdown Menus",
              "Smooth Animations",
              "Click Outside Close",
              "Mobile Accordion",
              "48px Touch Targets",
              "Perfect Alignment",
              "20px Hover Buffer",
              "Luxury Aesthetics",
            ].map((feature, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded px-4 py-3 text-white">
                {feature}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              onClick={() => window.location.href = '/'}
              className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#5C4033]"
            >
              Back to Home
            </Button>
            <Button
              onClick={() => window.location.href = '/#/sitemap'}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#5C4033]"
            >
              View All Pages (Site Map)
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
