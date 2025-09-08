import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedBooks from "@/components/FeaturedBooks";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedBooks />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
