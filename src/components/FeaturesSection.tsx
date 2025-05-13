
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Book, ChartBar, Calendar, Info } from "lucide-react";

const features = [
  {
    title: "Odds Education",
    description: "Learn how to understand and interpret betting odds across different formats and bookmakers.",
    icon: <Book className="h-8 w-8 text-sports-blue" />,
  },
  {
    title: "Strategy Analysis",
    description: "Discover proven betting strategies with detailed explanations and practical examples.",
    icon: <TrendingUp className="h-8 w-8 text-sports-green" />,
  },
  {
    title: "Data Visualization",
    description: "See key statistics and trends visualized in easy-to-understand charts and graphs.",
    icon: <ChartBar className="h-8 w-8 text-sports-red" />,
  },
  {
    title: "Event Tracking",
    description: "Stay updated with upcoming sporting events and betting opportunities.",
    icon: <Calendar className="h-8 w-8 text-sports-grey" />,
  },
  {
    title: "Risk Management",
    description: "Learn responsible gambling practices and effective bankroll management techniques.",
    icon: <Info className="h-8 w-8 text-sports-gold" />,
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">
            <span className="gradient-text">Educational Features</span>
          </h2>
          <p className="text-gray-600 text-lg">
            BetSmart provides comprehensive educational tools designed to help you understand sports betting fundamentals and develop informed strategies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="feature-card overflow-hidden border-none">
              <CardContent className="p-6">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="col-span-1 md:col-span-1">
              <h3 className="text-2xl font-semibold mb-4">
                <span className="highlight-text">Premium Content</span>
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="h-5 w-5 rounded-full bg-sports-gold/20 flex items-center justify-center">
                    <span className="h-2 w-2 bg-sports-gold rounded-full"></span>
                  </span>
                  <span>Expert Analysis Videos</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-5 w-5 rounded-full bg-sports-gold/20 flex items-center justify-center">
                    <span className="h-2 w-2 bg-sports-gold rounded-full"></span>
                  </span>
                  <span>Advanced Statistical Models</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-5 w-5 rounded-full bg-sports-gold/20 flex items-center justify-center">
                    <span className="h-2 w-2 bg-sports-gold rounded-full"></span>
                  </span>
                  <span>Interactive Learning Modules</span>
                </li>
              </ul>
            </div>
            
            <div className="col-span-1 md:col-span-2 bg-gray-50 rounded-lg p-6">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-sports-blue flex items-center justify-center">
                    <Book className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Educational First Approach</h4>
                  <p className="text-gray-600">
                    Our app focuses on education rather than promoting gambling. We teach you how to understand odds, make informed decisions, and practice responsible betting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
