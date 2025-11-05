import { Quote, Star } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface ReviewCardProps {
  challenge: string;
  solution: string;
  testimonial: string;
  clientName: string;
  clientRole: string;
  clientImage?: string;
}

export function ReviewCard({
  challenge,
  solution,
  testimonial,
  clientName,
  clientRole,
  clientImage,
}: ReviewCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-[#5C4033]/10 hover:shadow-xl transition-shadow">
      {/* Client Info & Stars */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center overflow-hidden">
            {clientImage ? (
              <img src={clientImage} alt={clientName} className="w-full h-full object-cover" />
            ) : (
              <span className="text-[#D4AF37]">{clientName.charAt(0)}</span>
            )}
          </div>
          <div>
            <p className="text-[#5C4033]">{clientName}</p>
            <p className="text-xs text-[#5C4033]/60">{clientRole}</p>
          </div>
        </div>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 text-[#D4AF37] fill-[#D4AF37]" />
          ))}
        </div>
      </div>

      {/* Tabs for Challenge & Solution */}
      <Tabs defaultValue="challenge" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="challenge">Challenge</TabsTrigger>
          <TabsTrigger value="solution">Solution</TabsTrigger>
        </TabsList>
        <TabsContent value="challenge" className="mt-0">
          <p className="text-sm text-[#5C4033]/70 min-h-[80px]">{challenge}</p>
        </TabsContent>
        <TabsContent value="solution" className="mt-0">
          <p className="text-sm text-[#5C4033]/70 min-h-[80px]">{solution}</p>
        </TabsContent>
      </Tabs>

      {/* Testimonial Quote */}
      <div className="border-t border-[#5C4033]/10 pt-4 mt-4">
        <Quote className="w-6 h-6 text-[#D4AF37] mb-2" />
        <p className="text-sm text-[#5C4033]/80 italic">{testimonial}</p>
      </div>
    </div>
  );
}
