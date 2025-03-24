
import React from "react";
import { cn } from "../utils/cn";
import { useNavigate } from "react-router-dom";

export interface Props {
  className?: string;
}

export function Hero({ className }: Props) {
  const navigate = useNavigate();
  
  return (
    <section
      id="hero"
      className={cn(
        "relative min-h-screen flex items-center justify-center overflow-hidden",
        className
      )}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
          alt="Nepal mountains"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-light text-white mb-6 tracking-wide max-w-4xl mx-auto leading-tight">
          Find Your <span className="font-medium">Serenity</span> in the Heart of Nepal
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          An eco-friendly luxury retreat nestled between pristine rivers and lush forests, 
          offering mindful experiences that reconnect you with nature.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate("/booking")}
            className="px-8 py-3 bg-white text-primary font-medium rounded-full hover:bg-white/90 transition-colors duration-300 shadow-lg"
          >
            Book Your Stay
          </button>
          <a
            href="#experiences"
            className="px-8 py-3 border border-white text-white font-medium rounded-full hover:bg-white/10 transition-colors duration-300"
          >
            Explore Experiences
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </section>
  );
}
