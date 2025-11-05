import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbsProps {
  items: { name: string; path?: string }[];
  onNavigate: (page: string) => void;
}

export function Breadcrumbs({ items, onNavigate }: BreadcrumbsProps) {
  return (
    <nav className="py-4 bg-white/50 border-b border-[#5C4033]/5">
      <div className="container mx-auto px-4">
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <button
              onClick={() => onNavigate("home")}
              className="flex items-center gap-1 text-[#5C4033]/60 hover:text-[#D4AF37] transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-[#5C4033]/30" />
              {item.path && index !== items.length - 1 ? (
                <button
                  onClick={() => onNavigate(item.path!)}
                  className="text-[#5C4033]/60 hover:text-[#D4AF37] transition-colors"
                >
                  {item.name}
                </button>
              ) : (
                <span className="text-[#D4AF37]">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
