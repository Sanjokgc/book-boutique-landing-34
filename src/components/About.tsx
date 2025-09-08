const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                For over three decades, The Literary Corner has been a beacon for book lovers 
                in our community. What started as a small neighborhood bookshop has grown into 
                a beloved literary sanctuary.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We believe that every book has the power to transport, transform, and inspire. 
                Our carefully curated collection spans genres and generations, ensuring there's 
                something magical waiting for every reader who walks through our doors.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-parchment rounded-lg">
                  <div className="text-3xl font-display font-bold text-primary">50,000+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Books in Stock</div>
                </div>
                <div className="text-center p-4 bg-parchment rounded-lg">
                  <div className="text-3xl font-display font-bold text-primary">30+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Years of Service</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 bg-card border border-border rounded-lg shadow-elegant">
                <h3 className="font-display font-bold text-xl text-primary mb-3">
                  Community Events
                </h3>
                <p className="text-muted-foreground">
                  Join our weekly book clubs, author readings, and literary discussions 
                  that bring our community together.
                </p>
              </div>
              
              <div className="p-6 bg-card border border-border rounded-lg shadow-elegant">
                <h3 className="font-display font-bold text-xl text-primary mb-3">
                  Personal Recommendations
                </h3>
                <p className="text-muted-foreground">
                  Our knowledgeable staff loves helping you discover your next favorite read 
                  with personalized book recommendations.
                </p>
              </div>
              
              <div className="p-6 bg-card border border-border rounded-lg shadow-elegant">
                <h3 className="font-display font-bold text-xl text-primary mb-3">
                  Cozy Reading Spaces
                </h3>
                <p className="text-muted-foreground">
                  Settle into our comfortable reading nooks with a cup of coffee and 
                  preview your next purchase in a welcoming atmosphere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;