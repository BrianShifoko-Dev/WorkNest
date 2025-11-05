import { Breadcrumbs } from "../Breadcrumbs";
import { SpaceImage } from "../ImageLightbox";
import { Button } from "../ui/button";
import Masonry from "react-responsive-masonry";

export function SpacesGallery({ onNavigate }: { onNavigate: (page: string) => void }) {
  const galleryImages = [
    { url: "https://images.unsplash.com/photo-1626187777040-ffb7cb2c5450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3dvcmtpbmclMjBzcGFjZXxlbnwxfHx8fDE3NjIxNTc0NTF8MA&ixlib=rb-4.1.0&q=80&w=1080", title: "Coworking Space", description: "Open collaborative workspace with modern furniture and natural lighting, perfect for networking and productivity." },
    { url: "https://images.unsplash.com/photo-1640109341881-1cd3eaf50909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyMjMzNjI3fDA&ixlib=rb-4.1.0&q=80&w=1080", title: "Private Office", description: "Fully furnished private office with premium amenities, adjustable desks, and lockable door for complete privacy." },
    { url: "https://images.unsplash.com/photo-1692133226337-55e513450a32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcml2YXRlJTIwb2ZmaWNlJTIwcm9vbXxlbnwxfHx8fDE3NjIyMzM2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080", title: "Executive Suite", description: "Spacious executive suite with dedicated entrance, reception area, and custom layout for established teams." },
    { url: "https://images.unsplash.com/photo-1462826303086-329426d1aef5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwYm9hcmRyb29tfGVufDF8fHx8MTc2MjIzMzYyN3ww&ixlib=rb-4.1.0&q=80&w=1080", title: "Boardroom", description: "Executive boardroom equipped with 4K display, video conferencing system, and premium sound for important meetings." },
    { url: "https://images.unsplash.com/photo-1716703435698-031227389c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB0ZWxlcGhvbmUlMjBib290aHxlbnwxfHx8fDE3NjIyMzM2Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080", title: "Phone Booth", description: "Soundproof telephone booth with WiFi, USB charging ports, and climate control for private calls and video conferences." },
    { url: "https://images.unsplash.com/photo-1759873148521-c49d9497cf64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHNwYWNlJTIwdmVudWV8ZW58MXx8fHwxNzYyMTgyNDEzfDA&ixlib=rb-4.1.0&q=80&w=1080", title: "Event Space", description: "Elegant event venue perfect for conferences, product launches, and corporate events with full AV equipment." },
    { url: "https://images.unsplash.com/photo-1669131196140-49591336b13e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXN0YXVyYW50JTIwY2FmZXxlbnwxfHx8fDE3NjIyMzM2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080", title: "Café Area", description: "Modern café and restaurant space with comfortable seating, perfect for casual meetings and lunch breaks." },
    { url: "https://images.unsplash.com/photo-1640587662002-ae577f8f96dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBlc3ByZXNzbyUyMGN1cHxlbnwxfHx8fDE3NjIxOTQyNjN8MA&ixlib=rb-4.1.0&q=80&w=1080", title: "Coffee Bar", description: "Premium espresso bar serving artisanal coffee and beverages throughout the day for our members." },
    { url: "https://images.unsplash.com/photo-1758518731572-7791381c5ce8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMG1lZXRpbmd8ZW58MXx8fHwxNzYyMTg4NzE1fDA&ixlib=rb-4.1.0&q=80&w=1080", title: "Meeting Room", description: "Professional meeting room with smart displays, whiteboard, and comfortable seating for productive discussions." },
  ];

  return (
    <div className="min-h-screen bg-[#FFFFF0]">
      <Breadcrumbs items={[{ name: "Discover Us" }, { name: "Spaces Gallery" }]} onNavigate={onNavigate} />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-1 bg-[#D4AF37] mb-6 mx-auto" />
          <h1 className="text-5xl text-[#5C4033] mb-6">Our Spaces Gallery</h1>
          <p className="text-xl text-[#5C4033]/70 max-w-3xl mx-auto mb-12">
            Explore our beautifully designed workspace environments
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#FFFFF0]">
        <div className="container mx-auto px-4">
          <Masonry columnsCount={3} gutter="24px">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all mb-6"
              >
                <SpaceImage
                  src={image.url}
                  alt={image.title}
                  title={image.title}
                  description={image.description}
                  allImages={galleryImages}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </Masonry>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-[#5C4033] mb-4">Ready to Experience It Yourself?</h3>
          <p className="text-[#5C4033]/70 mb-8">Book a tour and see our spaces in person</p>
          <Button
            onClick={() => onNavigate("book-tour")}
            className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#5C4033]"
          >
            Schedule a Tour
          </Button>
        </div>
      </section>
    </div>
  );
}
