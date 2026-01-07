import { 
  Utensils, 
  Car, 
  Baby, 
  Wifi, 
  Zap, 
  Phone,
  Mountain,
  Coffee
} from "lucide-react";

const Amenities = () => {
  const amenities = [
    {
      icon: Utensils,
      title: "Restaurant",
      description: "Onsite dining with delicious veg & non-veg options",
    },
    {
      icon: Car,
      title: "Free Parking",
      description: "Spacious parking area for all guests",
    },
    {
      icon: Baby,
      title: "Kids Play Area",
      description: "Safe and fun outdoor playground for children",
    },
    {
      icon: Wifi,
      title: "Free WiFi",
      description: "High-speed internet in lobby and rooms",
    },
    {
      icon: Zap,
      title: "EV Charging",
      description: "Electric vehicle charging station available",
    },
    {
      icon: Coffee,
      title: "Room Service",
      description: "24/7 in-room dining and housekeeping",
    },
    {
      icon: Mountain,
      title: "Valley Views",
      description: "Panoramic views from rooms and common areas",
    },
    {
      icon: Phone,
      title: "Front Desk",
      description: "Helpful staff available round the clock",
    },
  ];

  return (
    <section id="amenities" className="py-20 lg:py-28 section-nature gold-border-accent">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Resort Amenities
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need for a comfortable and memorable stay
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={amenity.title}
              className="group bg-charcoal-light/50 backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <amenity.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">
                {amenity.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
