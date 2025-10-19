import { Button } from "../ui/button";
import { Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="overflow-hidden">
      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-background grid-pattern relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-black text-foreground mb-6 sm:mb-8 leading-none px-2">
            LET'S WORK
            <br />
            TOGETHER
          </h2>
          <Button 
            variant="outline" 
            size="lg"
            className="px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg"
          >
            <a 
              href="mailto:info@rogerreyescreative.com?subject=Contact%20from%20you%20website&body=Hello%20Roger,%20I%20want%20to%20get%20in%20touch%20with%20you." 
              className="no-underline text-inherit"
            >
              CONTACT
            </a>
          </Button>
        </div>
      </section>

      {/* Footer Bar */}
      <div className="bg-black dark:bg-card text-white dark:text-card-foreground py-4 sm:py-5 md:py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 font-saira">
          {/* Copyright */}
          <p className="text-xs sm:text-sm font-medium text-center md:text-left">
            Copyright © 2025 - Roger Reyes
          </p>

          {/* Email */}
          <p className="text-xs sm:text-sm font-medium text-center">
            Email me at: info@rogerreyescreative.com
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a 
              href="https://www.linkedin.com/in/roger-enrique-reyes-bola%C3%B1o/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a 
              href="https://www.facebook.com/rogerreyes5780" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;