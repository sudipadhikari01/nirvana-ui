import React from "react";
import { cn } from "../utils/cn";

export interface Props {
  className?: string;
}

export function AboutSection({ className }: Props) {
  return (
    <section
      id="about"
      className={cn(
        "py-20 bg-background",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-primary">
              A Sanctuary of Peace in Nepal's Wilderness
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Nirvana Jungle Retreat was born from a vision to create a space where luxury meets 
              sustainability, where guests can reconnect with nature without compromising comfort.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Nestled between the flowing rivers and lush forests of Nepal, our retreat offers a unique 
              blend of local culture, mindful experiences, and eco-conscious hospitality.
            </p>
            <div className="flex items-center space-x-6 mt-8">
              <div className="text-center">
                <h3 className="text-4xl font-serif text-primary mb-2">15+</h3>
                <p className="text-sm text-muted-foreground">Unique Experiences</p>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div className="text-center">
                <h3 className="text-4xl font-serif text-primary mb-2">100%</h3>
                <p className="text-sm text-muted-foreground">Eco-Friendly</p>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div className="text-center">
                <h3 className="text-4xl font-serif text-primary mb-2">5★</h3>
                <p className="text-sm text-muted-foreground">Guest Experience</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="aspect-square rounded-full overflow-hidden border-8 border-background shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="Peaceful forest setting"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full overflow-hidden border-8 border-background shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1593397974725-4b53c68b1696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
                alt="Nepalese culture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
