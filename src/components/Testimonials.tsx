import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Regular Customer",
      content: "The Literary Corner has been my sanctuary for over five years. The staff recommendations are always spot-on, and the cozy reading nooks make it impossible to leave without spending hours here.",
      rating: 5,
      location: "Local Book Lover"
    },
    {
      name: "Dr. James Peterson",
      role: "University Professor",
      content: "As an English professor, I appreciate their curated collection of literary classics and contemporary works. Their book club discussions are intellectually stimulating and welcoming to all levels.",
      rating: 5,
      location: "Academia"
    },
    {
      name: "Emma Rodriguez",
      role: "Young Adult Reader",
      content: "I discovered my love for reading at The Literary Corner. The staff helped me find books that matched my interests perfectly, and now I'm a voracious reader thanks to their guidance!",
      rating: 5,
      location: "Teen Book Club Member"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "fill-gold-accent text-gold-accent" : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-parchment">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            What Our Readers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover why book lovers from our community choose The Literary Corner 
            as their favorite destination for literary adventures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1 bg-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <blockquote className="text-foreground mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-display font-semibold text-primary">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center">
                      <span className="font-display font-bold text-accent-foreground text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground text-lg">
            Join our community of <span className="font-semibold text-primary">2,500+</span> satisfied readers
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;