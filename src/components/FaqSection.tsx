
import React, { useState } from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is BetSmart a gambling application?",
    answer: "No, BetSmart is purely educational. We don't facilitate any real-money gambling or betting. Our focus is on teaching sports enthusiasts how betting markets work and how to make informed decisions if they choose to bet elsewhere."
  },
  {
    question: "Do I need to have betting experience to use BetSmart?",
    answer: "Not at all. BetSmart is designed for all experience levels, from complete beginners to those with some betting knowledge. Our step-by-step tutorials start with the basics and progressively cover more advanced concepts."
  },
  {
    question: "How does the simulation feature work?",
    answer: "Our simulation feature allows you to practice betting strategies using virtual currency in a risk-free environment. You can place simulated bets on real sporting events, track your performance over time, and learn from the outcomes without any financial risk."
  },
  {
    question: "Which sports does BetSmart cover?",
    answer: "BetSmart covers a wide range of popular sports including football, basketball, baseball, hockey, soccer, tennis, golf, MMA, boxing, and more. We're constantly expanding our coverage based on user feedback."
  },
  {
    question: "Is BetSmart free to use?",
    answer: "BetSmart offers a free version with access to basic tutorials and limited simulations. Premium subscribers get access to advanced tutorials, expert analysis, all simulation features, and ad-free experience."
  },
  {
    question: "How does BetSmart promote responsible gambling?",
    answer: "Education is our primary goal. We include modules on responsible gambling practices, bankroll management, and recognizing problem gambling behaviors. We also provide resources for those seeking help with gambling-related issues."
  }
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-lg">
            Find answers to common questions about our sports betting educational platform.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions? We're here to help.
          </p>
          <a href="#" className="text-sports-blue font-medium hover:underline">
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
