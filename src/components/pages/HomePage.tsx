import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Briefcase,
  Users,
  Coffee,
  Calendar,
  Building,
  Phone,
  TrendingUp,
  Shield,
  MapPin,
  Network,
  Clock,
  Star,
  CheckCircle,
  Award,
  Target,
  Heart,
  ArrowRight,
  Play,
  Zap,
  Globe,
  MessageCircle,
} from "lucide-react";
import { BookingForm } from "../BookingForm";
import { ReviewCard } from "../ReviewCard";
import { SpaceImage } from "../ImageLightbox";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1626187777040-ffb7cb2c5450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3dvcmtpbmclMjBzcGFjZXxlbnwxfHx8fDE3NjIxNTc0NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Premium Workspace in Eldoret",
    subtitle: "Elevate your work experience in the heart of Kenya",
  },
  {
    image:
      "https://images.unsplash.com/photo-1640109341881-1cd3eaf50909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyMjMzNjI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Luxury Offices & Event Spaces",
    subtitle: "Perfect for teams and entrepreneurs",
  },
  {
    image:
      "https://images.unsplash.com/photo-1693902997450-7e912c0d3554?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZW55YSUyMG5haXJvYmklMjBjaXR5c2NhcGV8ZW58MXx8fHwxNzYyMjMzNjMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Your Success Starts Here",
    subtitle: "Join Kenya's premier business community",
  },
];

const featuredSpaces = [
  {
    title: "Private Offices",
    description:
      "Fully furnished offices for teams of 1-20 people with 24/7 access",
    image:
      "https://images.unsplash.com/photo-1692133226337-55e513450a32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcml2YXRlJTIwb2ZmaWNlJTIwcm9vbXxlbnwxfHx8fDE3NjIyMzM2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "office-spaces",
    price: "From KES 35,000/month",
  },
  {
    title: "Boardrooms",
    description: "Professional meeting rooms with cutting-edge AV technology",
    image:
      "https://images.unsplash.com/photo-1462826303086-329426d1aef5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwYm9hcmRyb29tfGVufDF8fHx8MTc2MjIzMzYyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    link: "boardrooms",
    price: "From KES 2,500/hour",
  },
  {
    title: "Event Spaces",
    description: "Versatile venues for workshops, launches, and celebrations",
    image:
      "https://images.unsplash.com/photo-1759873148521-c49d9497cf64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHNwYWNlJTIwdmVudWV8ZW58MXx8fHwxNzYyMTgyNDEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "host-event",
    price: "From KES 15,000/day",
  },
  {
    title: "Telephone Booths",
    description:
      "Private soundproof booths for focused calls and video meetings",
    image:
      "https://images.unsplash.com/photo-1716703435698-031227389c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB0ZWxlcGhvbmUlMjBib290aHxlbnwxfHx8fDE3NjIyMzM2Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "telephone-booths",
    price: "From KES 500/hour",
  },
  {
    title: "Kids Zone",
    description: "Safe, supervised play area for your little ones",
    image:
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwcGxheSUyMGFyZWF8ZW58MXx8fHwxNzYyMTQzODY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "kids-zone",
    price: "Included with membership",
  },
];

const upcomingEvents = [
  {
    title: "Startup Pitch Night",
    date: "November 15, 2025",
    time: "6:00 PM - 9:00 PM",
    description:
      "Watch emerging startups pitch their innovative ideas to investors and mentors",
    category: "Networking",
  },
  {
    title: "Digital Marketing Masterclass",
    date: "November 22, 2025",
    time: "2:00 PM - 5:00 PM",
    description:
      "Learn advanced strategies to grow your business online with industry experts",
    category: "Workshop",
  },
  {
    title: "Women in Business Lunch",
    date: "November 28, 2025",
    time: "12:00 PM - 2:00 PM",
    description:
      "Connect with fellow female entrepreneurs over a premium lunch experience",
    category: "Community",
  },
];

const magazineArticles = [
  {
    title: "5 Tips for Productive Remote Work in Kenya",
    category: "Workstyle Tips",
    image:
      "https://images.unsplash.com/photo-1559310451-19481b3c7ec8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3dvcmtpbmclMjBzcGFjZSUyMHBlb3BsZSUyMHdvcmtpbmd8ZW58MXx8fHwxNzYyMjQwNDI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    excerpt:
      "Discover how successful professionals are maximizing productivity in flexible workspaces...",
    slug: "5-tips-productive-remote-work",
  },
  {
    title: "How Sarah Built Her Tech Startup at Finale",
    category: "Success Stories",
    image:
      "https://images.unsplash.com/photo-1720700126957-769e2f2fc0fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZW55YSUyMGJ1c2luZXNzJTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzYyMjQwNDI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    excerpt:
      "From a one-person team to a thriving 15-member company, here's Sarah's inspiring journey...",
    slug: "sarah-tech-startup-story",
  },
  {
    title: "The Future of Coworking in East Africa",
    category: "Inside Kenya Spaces",
    image:
      "https://images.unsplash.com/photo-1750124662229-47a8e16b8f14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBjb21tdW5pdHl8ZW58MXx8fHwxNzYyMjAwMDY1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    excerpt:
      "Exploring the trends shaping workspace design and business culture across Kenya and beyond...",
    slug: "future-coworking-east-africa",
  },
];

export function HomePage({
  onNavigate,
}: {
  onNavigate: (page: string) => void;
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSpaceIndex, setCurrentSpaceIndex] = useState(0);
  const [isFormActive, setIsFormActive] = useState(false);

  useEffect(() => {
    // Only auto-play carousel if form is not active
    if (isFormActive) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isFormActive]);

  const handleFormInteraction = () => {
    if (!isFormActive) {
      setCurrentSlide(2); // Set to third image (index 2)
      setIsFormActive(true); // Stop carousel auto-play
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsFormActive(true); // Stop auto-play when user manually navigates
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
    setIsFormActive(true); // Stop auto-play when user manually navigates
  };

  const nextSpace = () => {
    setCurrentSpaceIndex((prev) => (prev + 1) % featuredSpaces.length);
  };

  const prevSpace = () => {
    setCurrentSpaceIndex(
      (prev) => (prev - 1 + featuredSpaces.length) % featuredSpaces.length
    );
  };

  return (
    <div className="min-h-screen">
      {/* Trust Indicators Bar - Added pt-8 for spacing below sticky navbar */}
      <div
        className="bg-white border-b border-[#5C4033]/10 pt-[6px] pr-[0px] pb-[0px] pl-[0px]"
        data-section="trust-bar"
      >
        <div className="container mx-auto px-4 py-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
              <div className="flex items-baseline gap-1">
                <span className="text-[#5C4033]">500+</span>
                <span className="text-xs text-[#5C4033]/60">
                  Active Members
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Building className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
              <div className="flex items-baseline gap-1">
                <span className="text-[#5C4033]">50+</span>
                <span className="text-xs text-[#5C4033]/60">
                  Private Offices
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
              <div className="flex items-baseline gap-1">
                <span className="text-[#5C4033]">10+</span>
                <span className="text-xs text-[#5C4033]/60">Meeting Rooms</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
              <div className="flex items-baseline gap-1">
                <span className="text-[#5C4033]">Since 2025</span>
                <span className="text-xs text-[#5C4033]/60">Serving Kenya</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Carousel with Booking Form */}
      <section
        className="relative h-[600px] overflow-hidden"
        data-section="hero"
      >
        {/* Top Gradient Vignette */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/30 to-transparent z-[15] pointer-events-none" />

        {/* Ambient Light Flare - Top Left */}
        <div
          className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl z-[15] pointer-events-none animate-pulse"
          style={{ animationDuration: "4s" }}
        />

        {/* Ambient Light Flare - Bottom Right */}
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl z-[15] pointer-events-none animate-pulse"
          style={{ animationDuration: "6s", animationDelay: "1s" }}
        />

        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            {/* Enhanced overlay gradient for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              style={{
                transform: index === currentSlide ? "scale(1.02)" : "scale(1)",
              }}
            />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center md:justify-start md:pt-24">
              <div className="container mx-auto px-4">
                {/* Row 1: Hero Text Content - Centered on mobile, top positioned on desktop with refined typography */}
                <div className="text-white text-center animate-in fade-in slide-in-from-top-4 duration-700 flex flex-col items-center justify-center">
                  <p
                    className="text-xs md:text-sm mb-3 tracking-wide uppercase text-[#D4AF37] max-w-4xl"
                    style={{ letterSpacing: "0.15em", fontWeight: 500 }}
                  >
                    {slide.subtitle}
                  </p>
                  <h1
                    className="text-3xl md:text-5xl lg:text-6xl drop-shadow-2xl max-w-5xl"
                    style={{ fontWeight: 600, lineHeight: 1.1 }}
                  >
                    {slide.title}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Static Booking Form (Desktop Only) - Stays in place while carousel slides change */}
        <div
          className="hidden lg:flex absolute top-1/2 left-0 right-0 z-30 justify-center pointer-events-none"
          style={{ transform: "translateY(-10%)" }}
        >
          <div className="pointer-events-auto" onClick={handleFormInteraction}>
            <BookingForm variant="hero" />
          </div>
        </div>

        {/* Enhanced Carousel Controls - Hidden on mobile for better readability */}
        <button
          onClick={prevSlide}
          className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md transition-all border border-white/20 hover:border-white/40 hover:scale-110 shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md transition-all border border-white/20 hover:border-white/40 hover:scale-110 shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Enhanced Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setIsFormActive(true); // Stop auto-play when user manually selects a slide
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-[#D4AF37] w-8 shadow-lg shadow-[#D4AF37]/50"
                  : "bg-white/40 w-2 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Mobile Booking Form */}
      <section
        className="lg:hidden py-8 bg-white"
        data-section="mobile-booking"
      >
        <div className="container mx-auto px-4">
          <BookingForm variant="hero" />
        </div>
      </section>

      {/* Intro / About Preview Section */}
      <section
        className="py-16 bg-[#FFFFF0] px-[0px] py-[48px]"
        data-section="intro-about"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-[#5C4033] mb-4">
              A Space Where Productivity Meets Comfort in Kenya
            </h2>
            <p className="text-[#5C4033]/80">
              At The WorkNest Eldoret, we redefine professional environments in Kenya’s vibrant western hub. Our world-class amenities blend seamlessly with authentic Kenyan hospitality, creating spaces where businesses thrive, ideas grow, and communities flourish
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              className="p-8 text-center border-[#5C4033]/10 bg-white hover:shadow-lg transition-all"
              data-card="who-we-are"
            >
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-[#5C4033] mb-3">Who We Are</h3>
              <p className="text-sm text-[#5C4033]/70 mb-4">
                The WorkNest Eldoret is a premium coworking and innovation space in Elgon View, offering flexible, executive-grade workspaces that inspire productivity, collaboration, and growth. From hot desks and private offices to meeting suites, event spaces, and a kids’ zone, every detail is designed to help businesses thrive and ideas take flight.
              </p>
            </Card>

            <Card
              className="p-8 text-center border-[#5C4033]/10 bg-white hover:shadow-lg transition-all"
              data-card="our-mission"
            >
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-[#5C4033] mb-3">Our Mission</h3>
              <p className="text-sm text-[#5C4033]/70 mb-4">
                To provide flexible, world-class workspaces that enhance productivity, foster meaningful connections, and support growth through exceptional service, modern design, and a vibrant community.
              </p>
            </Card>

            <Card
              className="p-8 text-center border-[#5C4033]/10 bg-white hover:shadow-lg transition-all"
              data-card="our-vision"
            >
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-[#5C4033] mb-3">Our Vision</h3>
              <p className="text-sm text-[#5C4033]/70 mb-4">
                To be Kenya’s leading hub for innovation and collaboration empowering professionals, entrepreneurs, and businesses to thrive in a dynamic, inspiring workspace.
              </p>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button
              onClick={() => onNavigate("discover")}
              className="bg-[#5C4033] hover:bg-[#4A3329] text-white"
            >
              Discover Our Story
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Workspaces Showcase */}
      <section
        className="py-16 bg-white px-[0px] py-[32px]"
        data-section="featured-spaces"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-[#5C4033] mb-4">Explore Our Premium Spaces</h2>
            <p className="text-[#5C4033]/70 max-w-2xl mx-auto">
              From private offices to collaborative areas, discover workspace
              solutions designed for every need
            </p>
          </div>

          {/* Desktop Grid View */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredSpaces.map((space, index) => (
              <Card
                key={index}
                className="overflow-hidden border-[#5C4033]/10 hover:shadow-xl transition-all group"
                data-workspace={space.link}
              >
                <div className="relative h-64 overflow-hidden">
                  <SpaceImage
                    src={space.image}
                    alt={space.title}
                    title={space.title}
                    description={space.description}
                    className="h-full"
                  />
                  <div className="absolute top-4 right-4 z-10 pointer-events-none">
                    <Badge className="bg-[#D4AF37] text-[#5C4033] border-0">
                      {space.price}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-[#5C4033] mb-2">{space.title}</h3>
                  <p className="text-sm text-[#5C4033]/70 mb-4">
                    {space.description}
                  </p>
                  <Button
                    onClick={() => onNavigate(space.link)}
                    variant="ghost"
                    className="text-[#D4AF37] hover:bg-[#D4AF37]/10 p-0"
                  >
                    Book Now <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Mobile Carousel View */}
          <div className="md:hidden relative">
            <Card
              className="overflow-hidden border-[#5C4033]/10"
              data-workspace={featuredSpaces[currentSpaceIndex].link}
            >
              <div className="relative h-64 overflow-hidden">
                <SpaceImage
                  src={featuredSpaces[currentSpaceIndex].image}
                  alt={featuredSpaces[currentSpaceIndex].title}
                  title={featuredSpaces[currentSpaceIndex].title}
                  description={featuredSpaces[currentSpaceIndex].description}
                  className="h-full"
                />
                <div className="absolute top-4 right-4 z-10 pointer-events-none">
                  <Badge className="bg-[#D4AF37] text-[#5C4033] border-0">
                    {featuredSpaces[currentSpaceIndex].price}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-[#5C4033] mb-2">
                  {featuredSpaces[currentSpaceIndex].title}
                </h3>
                <p className="text-sm text-[#5C4033]/70 mb-4">
                  {featuredSpaces[currentSpaceIndex].description}
                </p>
                <Button
                  onClick={() =>
                    onNavigate(featuredSpaces[currentSpaceIndex].link)
                  }
                  variant="ghost"
                  className="text-[#D4AF37] hover:bg-[#D4AF37]/10 p-0"
                >
                  Book Now <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>

            <button
              onClick={prevSpace}
              className="absolute left-2 top-32 bg-white/80 hover:bg-white text-[#5C4033] p-2 rounded-full shadow-md"
              aria-label="Previous space"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSpace}
              className="absolute right-2 top-32 bg-white/80 hover:bg-white text-[#5C4033] p-2 rounded-full shadow-md"
              aria-label="Next space"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="text-center mt-8">
            <Button
              onClick={() => onNavigate("products")}
              variant="outline"
              className="border-[#5C4033] text-[#5C4033] hover:bg-[#5C4033] hover:text-white"
            >
              View All Spaces
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-[#FFFFF0]" data-section="why-choose-us">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-[#5C4033] mb-4">Why choose The WorkNest coworking space</h2>
            <p className="text-[#5C4033]/70 max-w-2xl mx-auto">
              Experience the difference that premium amenities and thoughtful
              design make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group" data-feature="flexible-plans">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all">
                <Calendar className="w-10 h-10 text-[#D4AF37]" />
              </div>
              <h3 className="text-[#5C4033] mb-2">Flexible Plans</h3>
              <p className="text-sm text-[#5C4033]/70">
                Daily, monthly, or yearly memberships that adapt to your
                business needs
              </p>
            </div>

            <div className="text-center group" data-feature="prime-locations">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all">
                <MapPin className="w-10 h-10 text-[#D4AF37]" />
              </div>
              <h3 className="text-[#5C4033] mb-2">Prime Location</h3>
              <p className="text-sm text-[#5C4033]/70">
                Strategically located in Eldoret's most accessible business
                district
              </p>
            </div>

            <div className="text-center group" data-feature="modern-design">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all">
                <Zap className="w-10 h-10 text-[#D4AF37]" />
              </div>
              <h3 className="text-[#5C4033] mb-2">Modern Design</h3>
              <p className="text-sm text-[#5C4033]/70">
                Aesthetically stunning spaces with ergonomic furniture and
                natural lighting
              </p>
            </div>

            <div className="text-center group" data-feature="community-network">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all">
                <Network className="w-10 h-10 text-[#D4AF37]" />
              </div>
              <h3 className="text-[#5C4033] mb-2">Vibrant Community</h3>
              <p className="text-sm text-[#5C4033]/70">
                Network with 500+ professionals, entrepreneurs, and innovators
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div
              className="text-center p-4 bg-white rounded-lg"
              data-amenity="wifi"
            >
              <CheckCircle className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
              <p className="text-sm text-[#5C4033]">High-Speed WiFi</p>
            </div>
            <div
              className="text-center p-4 bg-white rounded-lg"
              data-amenity="access"
            >
              <Clock className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
              <p className="text-sm text-[#5C4033]">Convenient Access Hours</p>
            </div>
            <div
              className="text-center p-4 bg-white rounded-lg"
              data-amenity="security"
            >
              <Shield className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
              <p className="text-sm text-[#5C4033]">Secure Premises</p>
            </div>
            <div
              className="text-center p-4 bg-white rounded-lg"
              data-amenity="cafe"
            >
              <Coffee className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
              <p className="text-sm text-[#5C4033]">On-Site Café</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Spaces in Action */}
      <section
        className="relative py-32 bg-fixed bg-center bg-cover"
        data-section="spaces-in-action"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1750124662229-47a8e16b8f14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBjb21tdW5pdHl8ZW58MXx8fHwxNzYyMjAwMDY1fDA&ixlib=rb-4.1.0&q=80&w=1080)`,
        }}
      >
        <div className="absolute inset-0 bg-[#5C4033]/85" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="w-20 h-20 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6">
              <Play className="w-10 h-10 text-[#5C4033]" />
            </div>
            <h2 className="text-white mb-4">
              Work, Connect, and Grow in Style
            </h2>
            <p className="text-xl mb-8 text-white/90">
              See how our members are transforming their businesses in inspiring
              environments
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                onClick={() => onNavigate("spaces-gallery")}
                className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#5C4033]"
              >
                Explore Gallery
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
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section
        className="py-16 bg-white px-[0px] py-[48px]"
        data-section="reviews"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-6 h-6 fill-[#D4AF37] text-[#D4AF37]" />
              <Star className="w-6 h-6 fill-[#D4AF37] text-[#D4AF37]" />
              <Star className="w-6 h-6 fill-[#D4AF37] text-[#D4AF37]" />
              <Star className="w-6 h-6 fill-[#D4AF37] text-[#D4AF37]" />
              <Star className="w-6 h-6 fill-[#D4AF37] text-[#D4AF37]" />
            </div>
            <h2 className="text-[#5C4033] mb-4">What Our Clients Say</h2>
            <p className="text-[#5C4033]/70 max-w-2xl mx-auto">
              Real stories from real members who've grown their businesses with
              us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative" data-review="1">
              <Badge className="absolute -top-2 -right-2 z-10 bg-[#D4AF37] text-[#5C4033] border-0">
                Verified Member
              </Badge>
              <ReviewCard
                challenge="Our startup needed a professional space without the long-term commitment and high costs of a traditional office."
                solution="Finale provided us with a flexible monthly plan in a beautiful private office, complete with meeting rooms and all amenities."
                testimonial="WorkNest coworking space has been instrumental in our growth. The environment is professional yet welcoming, and the flexibility is exactly what we needed."
                clientName="Sarah Kamau"
                clientRole="CEO, Tech Startup"
              />
              <p className="text-xs text-[#5C4033]/50 text-center mt-2">
                Member since Nov 2025
              </p>
            </div>

            <div className="relative" data-review="2">
              <Badge className="absolute -top-2 -right-2 z-10 bg-[#D4AF37] text-[#5C4033] border-0">
                Verified Member
              </Badge>
              <ReviewCard
                challenge="As a freelance consultant, I struggled to find quiet, professional spaces for client meetings in Eldoret."
                solution="The boardroom booking system at Finale made it easy to reserve premium meeting spaces by the hour whenever I needed them."
                testimonial="The boardrooms are world-class, and the booking process is seamless. My clients are always impressed when we meet here."
                clientName="David Omondi"
                clientRole="Business Consultant"
              />
              <p className="text-xs text-[#5C4033]/50 text-center mt-2">
                Member since Nov 2025
              </p>
            </div>

            <div className="relative" data-review="3">
              <Badge className="absolute -top-2 -right-2 z-10 bg-[#D4AF37] text-[#5C4033] border-0">
                Verified Member
              </Badge>
              <ReviewCard
                challenge="We wanted to host a product launch event but couldn't find a venue that offered both elegance and modern technology."
                solution="Finale's event space provided the perfect blend of sophistication and functionality, with excellent AV equipment and catering options."
                testimonial="Our event was a huge success! The team at WorkNest Coworking space went above and beyond to ensure everything was perfect."
                clientName="Grace Wanjiru"
                clientRole="Marketing Director"
              />
              <p className="text-xs text-[#5C4033]/50 text-center mt-2">
                Member since Oct 2025
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button
              onClick={() => onNavigate("getstarted")}
              className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#5C4033]"
            >
              Join 500+ Happy Members
            </Button>
          </div>
        </div>
      </section>

      {/* Events Preview Section */}
      <section
        className="py-16 bg-[#FFFFF0] px-[0px] py-[48px]"
        data-section="events-preview"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-[#5C4033] mb-4">Upcoming Events & Workshops</h2>
            <p className="text-[#5C4033]/70 max-w-2xl mx-auto">
              Connect, learn, and grow with our community through exclusive
              networking events and educational workshops
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="p-6 border-[#5C4033]/10 bg-white hover:shadow-lg transition-all"
                data-event={index}
              >
                <Badge className="bg-[#D4AF37]/10 text-[#D4AF37] border-0 mb-4">
                  {event.category}
                </Badge>
                <h3 className="text-[#5C4033] mb-2">{event.title}</h3>
                <div className="flex items-center gap-2 text-sm text-[#5C4033]/70 mb-1">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#5C4033]/70 mb-3">
                  <Clock className="w-4 h-4" />
                  <span>{event.time}</span>
                </div>
                <p className="text-sm text-[#5C4033]/70 mb-4">
                  {event.description}
                </p>
                <Button
                  variant="ghost"
                  className="text-[#D4AF37] hover:bg-[#D4AF37]/10 p-0"
                >
                  Register Now <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={() => onNavigate("events")}
              variant="outline"
              className="border-[#5C4033] text-[#5C4033] hover:bg-[#5C4033] hover:text-white"
            >
              View All Events
            </Button>
          </div>
        </div>
      </section>

      {/* Magazine Highlights Section */}
      <section className="py-16 bg-white" data-section="magazine-highlights">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-[#5C4033] mb-4">Stories from Our Community</h2>
            <p className="text-[#5C4033]/70 max-w-2xl mx-auto">
              Insights, inspiration, and success stories from the Finale
              community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {magazineArticles.map((article, index) => (
              <Card
                key={index}
                className="overflow-hidden border-[#5C4033]/10 hover:shadow-xl transition-all cursor-pointer group"
                onClick={() => onNavigate("magazine")}
                data-article={article.slug}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-[#D4AF37] text-[#5C4033] border-0">
                    {article.category}
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-[#5C4033] mb-2">{article.title}</h3>
                  <p className="text-sm text-[#5C4033]/70 mb-4">
                    {article.excerpt}
                  </p>
                  <Button
                    variant="ghost"
                    className="text-[#D4AF37] hover:bg-[#D4AF37]/10 p-0"
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={() => onNavigate("magazine")}
              variant="outline"
              className="border-[#5C4033] text-[#5C4033] hover:bg-[#5C4033] hover:text-white"
            >
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Restaurant / Eat & Drink Preview */}
      <section
        className="relative py-32 bg-fixed bg-center bg-cover"
        data-section="restaurant-preview"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1687945512099-400cbe94460c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYyMTc0NzczfDA&ixlib=rb-4.1.0&q=80&w=1080)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#5C4033]/90 to-[#5C4033]/70" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <Coffee className="w-16 h-16 text-[#D4AF37] mb-6" />
            <h2 className="text-white mb-4">
              Fuel Your Day at Our Restaurant & Café
            </h2>
            <p className="text-xl mb-6 text-white/90">
              From artisan coffee to gourmet lunches, enjoy premium dining
              without leaving your workspace
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <p className="text-sm text-[#D4AF37] mb-1">Breakfast</p>
                <p className="text-white/90">7:00 AM - 11:00 AM</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <p className="text-sm text-[#D4AF37] mb-1">Lunch & Dinner</p>
                <p className="text-white/90">12:00 PM - 8:00 PM</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <p className="text-sm text-[#D4AF37] mb-1">Coffee Bar</p>
                <p className="text-white/90">All Day</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => onNavigate("restaurant")}
                className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#5C4033]"
              >
                Explore Our Menu
              </Button>
              <Button
                onClick={() => onNavigate("reserve-table")}
                variant="outline"
                className="border-white text-[rgb(92,64,51)] hover:bg-white hover:text-[#5C4033]"
              >
                Reserve a Table
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Community CTA */}
      <section
        className="py-20 bg-gradient-to-br from-[#5C4033] via-[#4A3329] to-[#5C4033]"
        data-section="join-community"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Globe className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
            <h2 className="text-white mb-4">
              Your Next Great Idea Deserves the Right Space
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join a thriving community of entrepreneurs, freelancers, and
              established businesses in Kenya's most inspiring workspace
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
                <p className="text-white/90">Grow Your Business</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
                <p className="text-white/90">Build Your Network</p>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
                <p className="text-white/90">Achieve Excellence</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Button
                onClick={() => onNavigate("getstarted")}
                className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#5C4033]"
              >
                Get Started Today
              </Button>
              <Button
                onClick={() => onNavigate("book-tour")}
                variant="outline"
                className="border-white text-[rgb(92,64,51)] hover:bg-white hover:text-[#5C4033]"
              >
                Book a Tour
              </Button>
              <Button
                onClick={() => onNavigate("pricing")}
                variant="outline"
                className="border-white text-[rgb(92,64,51)] hover:bg-white hover:text-[#5C4033]"
              >
                View Pricing
              </Button>
            </div>

            {/* Social Community Links */}
            <div className="border-t border-white/20 pt-8 mt-8">
              <p className="text-white/80 mb-4">Join our online communities:</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href="https://chat.whatsapp.com/finaleworkspace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp Community</span>
                </a>
                <a
                  href="https://t.me/finaleworkspace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Telegram Channel</span>
                </a>
                <a
                  href="https://discord.gg/finaleworkspace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all"
                >
                  <Users className="w-4 h-4" />
                  <span>Discord Server</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="h-96" data-section="location-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31908.669!2d35.2698!3d0.5143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178101e99e3a0d8b%3A0x7cf7d1a7b3e6f8d0!2sEldoret%2C%20Kenya!5e0!3m2!1sen!2ske!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="WorkNest Coworking space Location in Eldoret, Kenya"
        />
      </section>
    </div>
  );
}
