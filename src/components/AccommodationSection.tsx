import React from "react";
import { cn } from "../utils/cn";

export interface Props {
  className?: string;
}

interface Accommodation {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  features: string[];
}

const accommodations: Accommodation[] = [
  {
    id: "river-bungalow",
    title: "River-View Bungalow",
    description: "Perched above flowing waters, these bungalows offer stunning views and the soothing sounds of the river below.",
    price: "$250/night",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: ["Private Balcony", "Panoramic Views", "King Size Bed", "Outdoor Shower"]
  },
  {
    id: "romantic-bungalow",
    title: "Romantic Bungalow",
    description: "Designed for couples, these intimate hideaways feature luxurious amenities in a secluded natural setting.",
    price: "$320/night",
    image: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    features: ["Private Hot Tub", "Stargazing Deck", "Champagne Service", "Fireplace"]
  },
  {
    id: "glamping-tent",
    title: "Luxury Glamping Tent",
    description: "Experience the magic of sleeping under canvas with all the comforts of a luxury suite.",
    price: "$180/night",
    image: "https://images.unsplash.com/photo-1688430578164-e243bfca0971?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    features: ["King Size Bed", "Private Deck", "En-suite Bathroom", "Solar Lanterns"]
  }
];

export function AccommodationsSection({ className }: Props) {
  return (
    <section
      id="accommodations"
      className={cn(
        "py-20 bg-secondary/30",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-primary">
            Eco-Luxury Accommodations
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Each of our accommodations is thoughtfully designed to blend seamlessly with 
            the natural surroundings while providing exceptional comfort and luxury.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodations.map((accommodation) => (
            <div 
              key={accommodation.id}
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={accommodation.image}
                  alt={accommodation.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-serif text-primary">{accommodation.title}</h3>
                  <span className="text-sm font-medium text-primary bg-primary/5 px-3 py-1 rounded-full">
                    {accommodation.price}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">{accommodation.description}</p>
                <div className="border-t border-border pt-4">
                  <h4 className="text-sm font-medium text-primary mb-2">Features:</h4>
                  <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                    {accommodation.features.map((feature, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center">
                        <svg className="w-4 h-4 mr-1 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
