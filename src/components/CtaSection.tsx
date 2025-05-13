
import React from 'react';
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-20 bg-sport-gradient relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sports-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sports-green/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white mb-6">Start Your Sports Betting Education Today</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Download BetSmart now and join thousands of sports fans who are learning to understand odds, analyze data, and make more informed betting decisions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <Button size="lg" className="bg-sports-gold hover:bg-sports-gold/90 text-sports-blue">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M12 2H2v10h10V2z"></path><path d="M22 12h-10v10h10V12z"></path><path d="M12 12H2v10h10V12z"></path><path d="M22 2h-10v10h10V2z"></path></svg>
              App Store
            </Button>
            <Button size="lg" className="bg-sports-gold hover:bg-sports-gold/90 text-sports-blue">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><rect width="12" height="14" x="6" y="8" rx="1"></rect></svg>
              Google Play
            </Button>
          </div>
          
          <div className="flex justify-center items-center gap-8">
            <div className="flex flex-col items-center">
              <div className="text-white font-semibold text-xl mb-1">24/7</div>
              <div className="text-white/70 text-sm">Support</div>
            </div>
            <div className="h-12 w-px bg-white/20"></div>
            <div className="flex flex-col items-center">
              <div className="text-white font-semibold text-xl mb-1">100%</div>
              <div className="text-white/70 text-sm">Educational</div>
            </div>
            <div className="h-12 w-px bg-white/20"></div>
            <div className="flex flex-col items-center">
              <div className="text-white font-semibold text-xl mb-1">Free</div>
              <div className="text-white/70 text-sm">Starter Plan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
