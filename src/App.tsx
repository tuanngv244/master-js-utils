import FlipCard from "./ui/FlipCard";
import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import "lenis/dist/lenis.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const listCardRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const horizontalSection = horizontalRef.current;
    const container = listCardRef.current;

    if (horizontalSection && container) {
      // Get all cards and calculate scroll distance
      const cards = horizontalSection.children;
      const cardWidth = 2000;
      const gap = 4;
      const totalWidth = (cardWidth + gap) * cards.length - gap;
      const viewportWidth = window.innerWidth;
      const scrollDistance = Math.max(0, totalWidth - viewportWidth);

      // Create the horizontal scroll timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${scrollDistance + window.innerHeight}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Add progress indicator or other effects
            const progress = self.progress;
            // Optional: Update a progress bar or other visual elements
          },
        },
      });

      // Animate the horizontal movement
      tl.to(horizontalSection, {
        x: -scrollDistance,
        ease: "none",
        duration: 1,
      });

      // Add individual card animations (optional)
      gsap.from(cards, {
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Handle resize
      const handleResize = () => {
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        tl.kill();
        window.removeEventListener("resize", handleResize);
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    }
  }, []);

  const cardData = [
    "https://images.unsplash.com/photo-1506426305266-2b7e740fd828?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1527685609591-44b0aef2400b?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1523419163445-589ebf1785c8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1506426305266-2b7e740fd828?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1527685609591-44b0aef2400b?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1523419163445-589ebf1785c8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div className="bg-black w-screen">
      {/* Initial content */}
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-6xl font-bold mb-4">
            Horizontal Scroll
          </h1>
          <p className="text-gray-200 text-xl pt-4">
            Scroll down to experience the magic
          </p>
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={listCardRef}
        id="list-card"
        // className="h-screen overflow-hidden relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900"
        className="h-screen overflow-hidden relative "
      >
        <div
          ref={horizontalRef}
          className="flex flex-row h-full items-center pl-8 will-change-transform"
          style={{ width: "max-content" }}
        >
          {cardData.map((img, index) => (
            <FlipCard
              key={index}
              className="flip-card flex-shrink-0 w-[400px] mx-1"
              img={img}
            />
          ))}
        </div>
      </div>

      {/* Content after horizontal section */}
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-white text-4xl font-bold mb-4">
            Back to Vertical
          </h2>
          <p className="text-gray-400 text-lg">
            Normal scrolling continues here
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
