import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
type Props = {
  img: string;
  className: string;
};

const FlipCard: React.FC<Props> = ({ img, className }) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        {
          scale: 0.9,
          clipPath: "inset(49% 49% 49% 49%)",
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "start start+=5%",
            end: "end end",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        }
      );
    }
  }, []);
  return (
    <div
      ref={cardRef}
      className={`min-w-[2000px] w-[2000px] h-screen ${className}`}
    >
      <img ref={imgRef} className="w-full h-full object-cover" src={img} />
    </div>
  );
};
export default FlipCard;
