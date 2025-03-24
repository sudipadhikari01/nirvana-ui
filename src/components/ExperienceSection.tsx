import React from "react";
import { cn } from "../utils/cn";

export interface Props {
  className?: string;
}

interface Experience {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

const experiences: Experience[] = [
  {
    id: "yoga-retreat",
    title: "Sunrise Yoga & Meditation",
    description: "Begin your day with an energizing yoga session overlooking the misty mountains, followed by guided meditation.",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    category: "Wellness"
  },
  {
    id: "river-rafting",
    title: "White Water Rafting Adventure",
    description: "Experience the thrill of navigating through rapids while surrounded by pristine forest landscapes.",
    image: "https://images.unsplash.com/photo-1562157646-4303262188c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    category: "Adventure"
  },
  {
    id: "wildlife-safari",
    title: "Jungle Wildlife Safari",
    description: "Explore the rich biodiversity of Nepal's forests with our expert naturalist guides.",
    image: "https://images.unsplash.com/photo-1561038080-95385ad56d94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    category: "Nature"
  },
  {
    id: "cooking-class",
    title: "Nepalese Cooking Class",
    description: "Learn to prepare traditional Nepalese dishes using fresh ingredients from our organic garden.",
    image: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    category: "Cultural"
  },
  {
    id: "spa-treatment",
    title: "Riverstone Spa Journey",
    description: "Indulge in our signature spa treatment using warm river stones and locally-sourced essential oils.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    category: "Wellness"
  },
  {
    id: "stargazing",
    title: "Night Sky Stargazing",
    description: "Observe the cosmos through our telescope while our astronomy guide shares ancient Nepalese star lore.",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    category: "Nature"
  }
];

export function ExperiencesSection({ className }: Props) {
  return (
    <section
      id="experiences"
      className={cn(
        "py-20 bg-background",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-primary">
            Transformative Experiences
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Immerse yourself in our curated collection of mindful activities and adventures, 
            each designed to create meaningful connections with nature and Nepalese culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <div 
              key={experience.id}
              className="group relative rounded-2xl overflow-hidden shadow-lg h-80"
            >
              <img
                src={experience.image}
                alt={experience.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/10 group-hover:via-black/30 transition-colors duration-300"></div>
              <div className="absolute top-4 right-4 z-10">
                <span className="text-xs font-medium text-white bg-primary/80 px-3 py-1 rounded-full">
                  {experience.category}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <h3 className="text-xl font-serif text-white mb-2 group-hover:underline decoration-2 underline-offset-4">
                  {experience.title}
                </h3>
                <p className="text-white/80 text-sm line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-colors duration-300">
            View All Experiences
          </button>
        </div>
      </div>
    </section>
  );
}
