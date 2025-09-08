import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import featuredBooksImage from "@/assets/featured-books.jpg";

const FeaturedBooks = () => {
  const books = [
    {
      title: "The Seven Husbands of Evelyn Hugo",
      author: "Taylor Jenkins Reid",
      price: "$16.99",
      category: "Fiction"
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      price: "$18.99",
      category: "Self-Help"
    },
    {
      title: "The Thursday Murder Club",
      author: "Richard Osman",
      price: "$15.99",
      category: "Mystery"
    },
    {
      title: "Educated",
      author: "Tara Westover",
      price: "$17.99",
      category: "Memoir"
    }
  ];

  return (
    <section id="books" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Featured Books
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked selections from our team of book lovers, featuring bestsellers, 
            hidden gems, and timeless classics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {books.map((book, index) => (
            <Card key={index} className="group hover:shadow-book transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                <div 
                  className="w-full h-48 bg-cover bg-center rounded-lg mb-4 shadow-book"
                  style={{ backgroundImage: `url(${featuredBooksImage})` }}
                ></div>
                <div className="space-y-2">
                  <span className="text-xs font-medium text-gold-accent uppercase tracking-wider">
                    {book.category}
                  </span>
                  <h3 className="font-display font-bold text-lg text-primary line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="text-muted-foreground">by {book.author}</p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="font-bold text-lg text-primary">{book.price}</span>
                    <Button variant="literary" size="sm">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="secondary" size="lg">
            View All Books
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;