
import React from 'react';
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Download & Install",
    description: "Download BallerBets from your app store and create your free account to get started.",
  },
  {
    number: "02",
    title: "Complete Tutorials",
    description: "Go through our interactive tutorials to understand betting fundamentals and terminology.",
  },
  {
    number: "03",
    title: "Practice with Simulations",
    description: "Use our risk-free simulations to practice strategies without using real money.",
  },
  {
    number: "04",
    title: "Track Your Progress",
    description: "Monitor your learning progress and simulate betting performance over time.",
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">How BallerBets Works</h2>
          <p className="text-gray-600 text-lg">
            Our educational platform is designed to help you build knowledge and confidence before placing real bets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connecting lines between steps */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gray-200 z-0"></div>
              )}
              
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-md relative z-10">
                <div className="text-4xl font-bold text-sports-gold mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-sports-blue rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-semibold text-white mb-4">Learn Through Practical Experience</h3>
              <p className="text-white/80 mb-6">
                Our interactive simulations let you practice betting strategies in a risk-free environment using virtual currency. Learn from experience without the financial risk.
              </p>
              <Button className="bg-sports-gold hover:bg-sports-gold/90 text-sports-blue">
                Try a Demo Simulation
              </Button>
            </div>
            
            <div className="bg-sports-blue/80 p-8 lg:p-12 flex items-center">
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="col-span-2">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="h-4 w-3/4 bg-white/20 rounded mb-2"></div>
                    <div className="h-6 w-1/2 bg-sports-gold/50 rounded"></div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="h-16 bg-white/20 rounded-lg mb-2"></div>
                  <div className="h-4 w-3/4 bg-white/20 rounded"></div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="h-16 bg-white/20 rounded-lg mb-2"></div>
                  <div className="h-4 w-3/4 bg-white/20 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
