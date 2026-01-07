import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Phone Button */}
      <a href="tel:+919876543210">
        <Button
          className="btn-gold w-14 h-14 rounded-full shadow-2xl p-0 hover:scale-110 transition-transform"
          aria-label="Call us"
        >
          <Phone className="w-6 h-6" />
        </Button>
      </a>
    </div>
  );
};

export default FloatingCTA;
