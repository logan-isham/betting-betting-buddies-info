
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael T.",
    role: "Fantasy Football Player",
    content: "BetSmart helped me understand how odds actually work. Now I can place educated bets based on real data rather than just gut feelings.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    role: "Beginner Sports Bettor",
    content: "The tutorials are amazing! I've gone from completely confused to confidently analyzing betting opportunities in just a few weeks.",
    rating: 5,
  },
  {
    name: "David P.",
    role: "Basketball Fan",
    content: "The simulation feature is a game-changer. I can practice strategies without risking real money, which has improved my decision-making.",
    rating: 4,
  },
  {
    name: "Jennifer R.",
    role: "Sports Enthusiast",
    content: "I appreciate how BetSmart focuses on education rather than pushing me to place bets. It's made sports more enjoyable for me.",
    rating: 5,
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">
            <span className="gradient-text">What Our Users Say</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Hear from sports enthusiasts who have improved their understanding of betting through our educational platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-sports-green/20 flex items-center justify-center text-sports-green font-bold mr-4">
                    {testimonial.name.split(' ')[0][0]}{testimonial.name.split(' ')[1][0]}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {Array(testimonial.rating).fill(0).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-sports-gold text-sports-gold" />
                  ))}
                </div>
                
                <p className="text-gray-700">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <div className="text-center mb-8">
            <div className="inline-block bg-sports-blue/10 text-sports-blue px-4 py-1 rounded-full text-sm font-medium mb-4">
              TRUSTED BY SPORTS FANS
            </div>
            <h3 className="text-2xl font-semibold">Join thousands of educated sports bettors</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-sports-blue mb-1">5,000+</div>
              <div className="text-gray-600 text-sm text-center">Active Users</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-sports-blue mb-1">4.8/5</div>
              <div className="text-gray-600 text-sm text-center">App Rating</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-sports-blue mb-1">500+</div>
              <div className="text-gray-600 text-sm text-center">Tutorials</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-sports-blue mb-1">15+</div>
              <div className="text-gray-600 text-sm text-center">Sports Covered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
