import { Breadcrumbs } from "../Breadcrumbs";
import { Restaurant } from "./Restaurant";

export function Menu({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="min-h-screen bg-[#FFFFF0]">
      <Breadcrumbs items={[{ name: "Restaurant" }, { name: "Menu" }]} onNavigate={onNavigate} />
      <Restaurant />
    </div>
  );
}
