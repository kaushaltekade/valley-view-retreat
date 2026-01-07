import { ChevronDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-valley.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Scenic valley view at Chikhaldara"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Location Tag */}
          <div className="inline-flex items-center gap-2 bg-charcoal-light/60 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-primary/30">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-foreground text-sm font-medium">
              Mozari Point, Chikhaldara, Maharashtra
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground text-shadow-lg mb-6 leading-tight">
            Your Serene Escape
            <br />
            <span className="text-primary text-glow">Amidst the Hills</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Experience tranquility at VRK Resort — where breathtaking valley views meet 
            comfortable hospitality at Maharashtra's only hill station.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              className="btn-gold rounded-full px-8 py-6 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Your Stay
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-8 py-6 text-lg bg-transparent border-2 border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary"
              onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Rooms
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-foreground/60 hover:text-primary transition-colors">
            <span className="text-sm mb-2 font-medium">Discover More</span>
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
