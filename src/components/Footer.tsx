const Footer = () => {
  return (
    <footer className="bg-literary-brown text-warm-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-display font-bold mb-4">The Literary Corner</h3>
            <p className="text-warm-cream/80 mb-4 leading-relaxed">
              Your neighborhood bookstore where stories come alive and every reader 
              finds their perfect book. Join our community of book lovers today.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-warm-cream/60 hover:text-gold-accent transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-warm-cream/60 hover:text-gold-accent transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-warm-cream/60 hover:text-gold-accent transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.219-.359-1.219c0-1.142.662-1.995 1.482-1.995.699 0 1.037.219 1.037 1.142 0 .696-.442 1.737-.669 2.699-.188.793.399 1.434 1.188 1.434 1.425 0 2.522-1.504 2.522-3.677 0-1.921-1.378-3.265-3.348-3.265-2.28 0-3.617 1.71-3.617 3.478 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.223.907-.035.146-.116.177-.268.107-1.001-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.287-4.84 2.781 0 4.943 1.98 4.943 4.628 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A12.013 12.013 0 0 0 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-warm-cream/80">
              <li><a href="#home" className="hover:text-gold-accent transition-colors">Home</a></li>
              <li><a href="#books" className="hover:text-gold-accent transition-colors">Books</a></li>
              <li><a href="#about" className="hover:text-gold-accent transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-gold-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold mb-4">Categories</h4>
            <ul className="space-y-2 text-warm-cream/80">
              <li><a href="#" className="hover:text-gold-accent transition-colors">Fiction</a></li>
              <li><a href="#" className="hover:text-gold-accent transition-colors">Non-Fiction</a></li>
              <li><a href="#" className="hover:text-gold-accent transition-colors">Mystery</a></li>
              <li><a href="#" className="hover:text-gold-accent transition-colors">Romance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-warm-cream/20 mt-8 pt-8 text-center text-warm-cream/60">
          <p>&copy; 2024 The Literary Corner. All rights reserved. Made with ❤️ for book lovers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;