import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  const handleClick = () => {
    window.open("https://wa.me/254745319042", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20BA5A] transition-all hover:scale-110 z-50"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
}

// import { MessageCircle } from 'lucide-react';

// export function WhatsAppButton() {
//   const phoneNumber = '‪+254712345678‬'; // Replace with actual number
//   const whatsappUrl = https://api.whatsapp.com/send?phone=${phoneNumber};

//   return (
//     <button
//       href={whatsappUrl}
//       target="_blank"
//       rel="noopener noreferrer"
//       aria-label="Contact via WhatsApp"
//       className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 group"
//     >
//       <div className="relative">
//         {/* Pulse effect */}
//         <div className="absolute inset-0 bg-[var(--gold)] rounded-full animate-ping opacity-75"></div>
        
//         {/* Button */}
//         <div className="relative w-14 h-14 md:w-16 md:h-16 bg-[var(--gold)] rounded-full flex items-center justify-center shadow-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-300 hover:scale-110 cursor-pointer">
//           <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-[var(--ink)]" />
//         </div>

//         {/* Tooltip */}
//         <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-[var(--card)] border border-[var(--border)] rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//           <span className="text-sm text-[var(--ivory)]">Chat on WhatsApp</span>
//         </div>
//       </div>
//     </button>
//   );
// }