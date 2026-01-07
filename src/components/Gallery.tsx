import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import playground from "@/assets/playground.jpg";
import restaurant from "@/assets/restaurant.jpg";
import gardenGrounds from "@/assets/garden-grounds.jpg";
import resortLandscape from "@/assets/resort-landscape.jpg";
import resortTerrace from "@/assets/resort-terrace.jpg";
import balconyView from "@/assets/balcony-view.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { src: balconyView, alt: "Private balcony with valley view", label: "Balcony View" },
    { src: restaurant, alt: "Resort restaurant dining area", label: "Restaurant" },
    { src: playground, alt: "Children's play area", label: "Kids Area" },
    { src: gardenGrounds, alt: "Beautiful garden grounds", label: "Gardens" },
    { src: resortLandscape, alt: "Resort landscape and greenery", label: "Surroundings" },
    { src: resortTerrace, alt: "Resort terrace with seating", label: "Terrace" },
  ];

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const nextImage = () => setSelectedImage((prev) => (prev !== null ? (prev + 1) % images.length : 0));
  const prevImage = () => setSelectedImage((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : 0));

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Visual Tour
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Gallery
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our resort through these glimpses of comfort and natural beauty
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`image-zoom rounded-xl overflow-hidden shadow-lg cursor-pointer group ${
                index === 0 ? "col-span-2 lg:col-span-1 lg:row-span-2" : ""
              }`}
              onClick={() => openLightbox(index)}
            >
              <div className="relative h-48 lg:h-full min-h-[200px] lg:min-h-[250px]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-full object-cover ${index === 0 ? "lg:min-h-[520px]" : ""}`}
                />
                <div className="absolute inset-0 bg-forest-dark/0 group-hover:bg-forest-dark/40 transition-all duration-300 flex items-end justify-start p-4">
                  <span className="text-primary-foreground font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {image.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-forest-dark/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground hover:text-accent transition-colors"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            className="absolute left-4 md:left-8 text-primary-foreground hover:text-accent transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          
          <img
            src={images[selectedImage].src}
            alt={images[selectedImage].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          
          <button
            className="absolute right-4 md:right-8 text-primary-foreground hover:text-accent transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-primary-foreground">
            <p className="font-medium">{images[selectedImage].label}</p>
            <p className="text-sm text-primary-foreground/70 text-center mt-1">
              {selectedImage + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
