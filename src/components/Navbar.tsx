import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "../utils/cn"

export interface Props {
  className?: string;
}

export function Navbar({ className }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-sm shadow-sm py-4"
          : "bg-transparent py-6",
        className
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <a 
            href="/" 
            className="text-2xl font-serif tracking-wide text-primary"
          >
            Nirvana Haven
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#accommodations"
            className="text-primary/80 hover:text-primary transition-colors duration-300"
          >
            Accommodations
          </a>
          <a
            href="#experiences"
            className="text-primary/80 hover:text-primary transition-colors duration-300"
          >
            Experiences
          </a>
          <a
            href="#dining"
            className="text-primary/80 hover:text-primary transition-colors duration-300"
          >
            Dining
          </a>
          <a
            href="#sustainability"
            className="text-primary/80 hover:text-primary transition-colors duration-300"
          >
            Sustainability
          </a>
          <button
            onClick={() => navigate("/booking")}
            className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors duration-300 font-medium"
          >
            Book Now
          </button>
        </nav>

        <button className="md:hidden text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
