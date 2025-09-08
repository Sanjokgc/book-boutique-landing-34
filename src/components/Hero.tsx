import { Button } from "@/components/ui/button";
import heroImage from "@/assets/bookstore-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-75"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
          Welcome to
          <br />
          <span className="text-gold-accent">The Literary Corner</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
          Discover your next favorite read in our carefully curated collection of books, 
          where every story finds its perfect reader.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
            Browse Our Collection
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            Visit Our Store
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;