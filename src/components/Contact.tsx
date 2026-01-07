import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import resortSign from "@/assets/resort-sign.jpg";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: "Plot No.1/1, Mozari Point Road, Chikhaldara, Maharashtra 444807",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@vrkresort.com",
      href: "mailto:info@vrkresort.com",
    },
    {
      icon: Clock,
      label: "Check-in / Check-out",
      value: "12:00 PM / 11:00 AM",
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 section-nature">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Get In Touch
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              Plan Your Visit
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Ready to experience the serenity of Chikhaldara? Reach out to us for 
              bookings, inquiries, or any assistance you need.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-10">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button className="btn-gold rounded-full px-8 py-6 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
              <Button 
                variant="outline" 
                className="rounded-full px-8 py-6 text-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open("https://www.google.com/maps/place/VRK+Resort,MTDC+Mozari+Point+Chikhldara/@21.3923263,77.3188083,17z", "_blank")}
              >
                <Navigation className="w-5 h-5 mr-2" />
                Get Directions
              </Button>
            </div>
          </div>

          {/* Image & Map Preview */}
          <div className="space-y-6">
            {/* Resort Sign Image */}
            <div className="image-zoom rounded-2xl overflow-hidden shadow-xl">
              <img
                src={resortSign}
                alt="VRK Retreat Resort Sign"
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Map Embed */}
            <div className="rounded-2xl overflow-hidden shadow-xl h-64 lg:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.8!2d77.3188083!3d21.3923263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd656377b54fffd%3A0x1068499ebfff4ee9!2sVRK%20Resort%2CMTDC%20Mozari%20Point%20Chikhldara!5e0!3m2!1sen!2sin!4v1704200000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="VRK Resort Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
