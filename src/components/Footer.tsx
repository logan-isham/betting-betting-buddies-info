
import React from 'react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-md bg-sports-blue flex items-center justify-center text-white font-bold">
                SB
              </div>
              <span className="font-bold text-xl text-sports-blue">BetSmart</span>
            </div>
            <p className="text-gray-600 mb-4">
              Educating sports enthusiasts on responsible betting strategies and techniques.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-sports-blue">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-sports-blue">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-sports-blue">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">BetSmart App</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-600 hover:text-sports-blue">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-600 hover:text-sports-blue">How It Works</a></li>
              <li><a href="#testimonials" className="text-gray-600 hover:text-sports-blue">Testimonials</a></li>
              <li><a href="#faq" className="text-gray-600 hover:text-sports-blue">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-sports-blue">Betting Guide</a></li>
              <li><a href="#" className="text-gray-600 hover:text-sports-blue">Sports Analytics</a></li>
              <li><a href="#" className="text-gray-600 hover:text-sports-blue">Responsible Gambling</a></li>
              <li><a href="#" className="text-gray-600 hover:text-sports-blue">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-sports-blue">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-sports-blue">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-sports-blue">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-sports-blue">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} BetSmart. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 mt-1">
            BetSmart is an educational platform and does not offer real money gambling services.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
