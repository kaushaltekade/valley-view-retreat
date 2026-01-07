import { Check, Wifi, Wind, Coffee, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import balconyView from "@/assets/balcony-view.jpg";

const Rooms = () => {
  const rooms = [
    {
      name: "Deluxe Valley View",
      description: "Spacious rooms with stunning valley views, perfect for couples and small families.",
      image: roomDeluxe,
      price: "₹3,500",
      priceNote: "per night",
      features: ["King Size Bed", "Valley View Balcony", "Air Conditioned", "Free WiFi", "Room Service"],
    },
    {
      name: "Premium Suite",
      description: "Our finest accommodation with private balcony overlooking Mozari Point.",
      image: balconyView,
      price: "₹5,500",
      priceNote: "per night",
      features: ["Luxury Suite", "Private Balcony", "Premium Amenities", "Scenic Views", "24/7 Service"],
    },
  ];

  const amenityIcons: Record<string, typeof Wifi> = {
    "Free WiFi": Wifi,
    "Air Conditioned": Wind,
    "Room Service": Coffee,
    "Valley View Balcony": Eye,
    "Private Balcony": Eye,
  };

  return (
    <section id="rooms" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Accommodation
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Comfortable Rooms & Suites
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose from our well-appointed rooms designed for comfort and relaxation, 
            each offering beautiful views of the surrounding landscape.
          </p>
        </div>

        {/* Room Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {rooms.map((room, index) => (
            <div
              key={room.name}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <div className="image-zoom h-64 lg:h-80">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                      {room.name}
                    </h3>
                    <p className="text-muted-foreground">{room.description}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {room.features.map((feature) => {
                    const Icon = amenityIcons[feature] || Check;
                    return (
                      <span
                        key={feature}
                        className="inline-flex items-center gap-1.5 text-sm bg-secondary rounded-full px-3 py-1.5"
                      >
                        <Icon className="w-3.5 h-3.5 text-primary" />
                        {feature}
                      </span>
                    );
                  })}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <span className="font-display text-3xl font-bold text-primary">
                      {room.price}
                    </span>
                    <span className="text-muted-foreground text-sm ml-1">
                      {room.priceNote}
                    </span>
                  </div>
                  <Button className="btn-nature rounded-full px-6">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
