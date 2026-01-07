import { Mountain, Sun, Leaf, Heart } from "lucide-react";
import resortBuilding from "@/assets/resort-building.jpg";

const About = () => {
  const features = [
    {
      icon: Mountain,
      title: "Scenic Location",
      description: "Steps away from Mozari Point with panoramic valley views",
    },
    {
      icon: Sun,
      title: "Sunrise & Sunset",
      description: "Wake up to golden sunrises and magical sunset vistas",
    },
    {
      icon: Leaf,
      title: "Nature's Embrace",
      description: "Surrounded by lush greenery and fresh mountain air",
    },
    {
      icon: Heart,
      title: "Warm Hospitality",
      description: "Experience genuine care and comfortable stays",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 section-nature gold-border-accent">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="image-zoom rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-primary/20">
              <img
                src={resortBuilding}
                alt="VRK Resort Building"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="glass-card absolute -bottom-6 -right-6 md:right-6 rounded-xl p-6 shadow-xl max-w-[280px]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-display font-bold text-xl">3.9</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Rated Excellent</p>
                  <p className="text-sm text-muted-foreground">100+ Reviews</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Welcome to VRK Resort
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              A Hill Station Retreat Like No Other
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Nestled at Mozari Point in Chikhaldara — Maharashtra's only hill station — 
              VRK Resort offers an escape from the ordinary. Our property combines 
              natural beauty with comfortable accommodation, making it the perfect 
              destination for families, couples, and nature enthusiasts seeking peace.
            </p>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
