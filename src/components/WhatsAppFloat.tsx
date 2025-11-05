import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  const handleClick = () => {
    window.open("https://wa.me/254700123456", "_blank");
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
