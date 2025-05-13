
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-sport-gradient py-20 md:py-32">
      {/* Background elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-sports-gold/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-sports-green/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-white mb-6">
              Master the Art of <span className="text-sports-gold">Sports Betting</span> with Confidence
            </h1>
            <p className="text-white/80 text-lg mb-8">
              BetSmart is your personal educational companion for understanding betting odds, strategies, and making informed decisions based on real data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-sports-gold hover:bg-sports-gold/90 text-sports-blue">
                Download Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
            
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs font-medium text-sports-blue">JD</div>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs font-medium text-sports-blue">KM</div>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs font-medium text-sports-blue">SL</div>
              </div>
              <p className="text-white/80 text-sm">
                Joined by 5,000+ sports enthusiasts
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-sports-gold/20 to-sports-blue/20 transform rotate-6 rounded-2xl"></div>
            <div className="relative bg-white p-1 rounded-2xl shadow-xl">
              <div className="aspect-[9/16] rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-24 h-24 mx-auto mb-4 bg-sports-blue rounded-full flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">BS</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
                    <div className="h-8 bg-sports-gold/20 rounded w-2/3 mx-auto mt-6"></div>
                  </div>
                  <div className="mt-8 grid grid-cols-2 gap-3">
                    <div className="h-20 bg-gray-200 rounded"></div>
                    <div className="h-20 bg-gray-200 rounded"></div>
                    <div className="h-20 bg-gray-200 rounded"></div>
                    <div className="h-20 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
