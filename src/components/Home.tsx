import React from "react";
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { AccommodationsSection } from '../components/AccommodationSection';
import { ExperiencesSection } from '../components/ExperienceSection';
import { DiningSection } from '../components/DiningSection';
import { SustainabilitySection } from '../components/SustainabilitySection';
import { Footer } from '../components/Footer';


export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <Hero />
        <AboutSection />
        <AccommodationsSection />
        <ExperiencesSection />
        <DiningSection />
        <SustainabilitySection />
      </main>
      
      <Footer />
    </div>
  );
}
