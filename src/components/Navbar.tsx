
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-sports-blue flex items-center justify-center text-white font-bold">
            B
          </div>
          <span className="font-bold text-xl text-sports-blue">Baller</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-gray-600 hover:text-sports-blue transition-colors">Features</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-sports-blue transition-colors">How It Works</a>
          <a href="#testimonials" className="text-gray-600 hover:text-sports-blue transition-colors">Testimonials</a>
          <a href="#faq" className="text-gray-600 hover:text-sports-blue transition-colors">FAQ</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:inline-flex">
            Log in
          </Button>
          <Button className="bg-sports-blue hover:bg-sports-blue/90">
            Download App
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
