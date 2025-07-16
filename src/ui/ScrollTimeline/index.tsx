import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export interface TimelineItem {
  year: string;
  items: string[];
}

const demoTimeline: TimelineItem[] = [
  {
    year: "2021",
    items: [
      "Development of global stock ledger system",
      "Development of global currency API system",
    ],
  },
  {
    year: "2020",
    items: [
      "Development of arbitrage transaction and order management for Japan market",
      "Euras Prisma Margin calculation solution development and SPAN",
      "Prisma integration margin calculation Solution",
      "Bank FX Documentation system development",
    ],
  },
  {
    year: "2019",
    items: [
      "Development of bank foreign currency trading system based on PC Client",
      "Development of RMS based on server",
    ],
  },
  {
    year: "2018",
    items: [
      "Development of message distribution/sending system",
      "Development of OMS system",
    ],
  },
  {
    year: "2017",
    items: [
      "Development of domestic & global derivatives integration HTS, MTS, and ledger system",
      "Development of future exchange future ledger system for Vietnam security",
    ],
  },
  {
    year: "2016",
    items: [
      "Development of PD Client platform Posco",
      "Development of global future option portfolio margin calculation solution Posco",
    ],
  },
  {
    year: "2015",
    items: ["Adopt Viance mobile platform and take over Mitech Co."],
  },
  {
    year: "2014",
    items: [
      "Development of FIX Gateway solution",
      "Development of global market data manufacture solution",
      "Development of global stock LIS exchange HTS with Samsung Securities",
      "Transferred global future option market data vendor and DC Partnership to Genshintech Co.",
    ],
  },
  {
    year: "2013",
    items: ["Development of MxHQ server platform"],
  },
  {
    year: "2012",
    items: [
      "Selected as Government R&D business partner*",
      "KRX derivatives HFT High Frequency Trading Solution development",
      "Development of global option system",
      "Development of Real communication platform",
    ],
  },
  {
    year: "2011",
    items: [
      "Development of FIX SME 1.0 interface solution and qualification of CME Group & IRN Independent Software Vendor",
      "Made a contract to Korea base and Interactive Data Corporation(IDC) which is Global Data Vendor",
      "Began global future option market data vendor service",
    ],
  },
];

type Props = {
  list?: TimelineItem[];
  clsYearStyles?: string;
  clsDescStyles?: string;
};

const ScrollTimeline: React.FC<Props> = ({
  list,
  clsYearStyles,
  clsDescStyles,
}) => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const listTimelineData = list || demoTimeline;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Timeline items animation
      const timelineItems =
        timelineRef.current?.querySelectorAll(".timeline-item");

      timelineItems?.forEach((item, index) => {
        const isLeft = index % 2 === 0;

        gsap.fromTo(
          item.querySelector(".title-year"),
          {
            opacity: 0,
            y: window.innerWidth <= 768 ? 50 : 100, // Mobile: slide from right
            scale: 0.7,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.fromTo(
          item.querySelector(".desc"),
          {
            opacity: 0,
            y: window.innerWidth <= 768 ? 50 : 100, // Mobile: slide from right
            scale: 0.7,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Gray timeline line (static background)
      const timelineLine = timelineRef.current?.querySelector(".timeline-line");
      if (timelineLine) {
        gsap.set(timelineLine, { scaleY: 1, opacity: 1 });
      }

      // Purple timeline line animation (progressive reveal)
      const purpleLine = timelineRef.current?.querySelector(
        ".timeline-line-purple"
      );
      if (purpleLine) {
        gsap.fromTo(
          purpleLine,
          {
            height: "0%",
          },
          {
            height: "100%",
            ease: "none",
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top center",
              end: "bottom center",
              scrub: 1, // Smooth sync with scroll
              invalidateOnRefresh: true,
            },
          }
        );
      }

      // Remove circle animations since we don't need dotted circles
      // Purple line is the main focus now

      // Year dots animation with bubble effect
      const yearDots = timelineRef.current?.querySelectorAll(".year-dot");
      yearDots?.forEach((dot, index) => {
        // Main dot animation
        gsap.fromTo(
          dot,
          {
            scale: 0,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: dot,
              start: "top 90%",
              end: "bottom 10%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Create ripple effect element
        const ripple = document.createElement("div");
        ripple.className =
          "absolute inset-0 rounded-full border-2 border-[#6F77DA] opacity-0 pointer-events-none";
        dot.appendChild(ripple);

        // Timeline for bubble animations that can be controlled
        const bubbleTimeline = gsap.timeline({ paused: true, repeat: -1 });

        // Add pulse animation to timeline
        bubbleTimeline.to(dot, {
          scale: 1.3,
          duration: 0.8,
          ease: "power2.inOut",
          yoyo: true,
          repeat: 1,
        });

        // Add ripple animation to timeline
        bubbleTimeline.to(
          ripple,
          {
            scale: 4,
            opacity: 0.4,
            duration: 1.5,
            ease: "power2.out",
          },
          0
        );

        bubbleTimeline.to(
          ripple,
          {
            opacity: 0,
            duration: 0.5,
          },
          1
        );

        // ScrollTrigger to control when bubble animation plays
        ScrollTrigger.create({
          trigger: dot,
          start: "top 70%",
          end: "bottom 30%",
          onEnter: () => bubbleTimeline.play(),
          onLeave: () => bubbleTimeline.pause(),
          onEnterBack: () => bubbleTimeline.play(),
          onLeaveBack: () => bubbleTimeline.pause(),
        });
      });
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary-500 text-[1.5rem] md:text-base font-normal mb-2">
            Company History
          </p>
          <h2
            ref={titleRef}
            className="text-[1.5rem] md:text-[2.5rem] leading-[2rem] md:leading-[3rem] font-medium text-gray-900"
          >
            Our Journey Through Time
          </h2>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Gray Timeline Line (Background) */}
          <div className="timeline-line absolute left-1/2 md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2 w-[0.125rem] bg-gray-200 h-full md:block hidden rounded-2xl"></div>

          {/* Mobile Timeline Line */}
          <div className="timeline-line absolute left-8 md:hidden w-1 bg-gray-200 h-full block"></div>

          {/* Purple Timeline Line (Animated) */}
          <div
            className="timeline-line-purple absolute left-[34px] md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2 w-[0.25rem] bg-gradient-to-b from-transparent to-[rgba(111,119,218,1)]  md:block top-0 rounded-b-2xl"
            style={{ height: "0%" }}
          ></div>

          {/* Timeline Items */}
          <div className="space-y-16 md:space-y-24">
            {listTimelineData.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.year}
                  className={`timeline-item overflow-hidden relative flex items-start md:items-start ${
                    isLeft
                      ? "md:justify-start justify-start"
                      : "md:justify-end justify-start"
                  }`}
                >
                  {/* Year Dots */}
                  <div className="year-dot absolute left-1/2 transform -translate-x-1/2 w-[0.25rem] h-[0.25rem] bg-[#6F77DA] rounded-[0.125rem] top-[calc(3.2rem_/_2)] shadow-lg z-10 hidden md:block"></div>

                  {/* Mobile Year Dot */}
                  <div className="year-dot absolute left-[34px] transform -translate-x-1/2 w-[0.5rem] h-[0.5rem] bg-[#6F77DA] rounded-full shadow-lg z-10 block md:hidden top-2"></div>

                  {/* Content */}
                  <div
                    className={`w-full md:w-5/12 ${
                      isLeft
                        ? "md:pr-8 md:text-right pr-0 pl-16 text-left"
                        : "md:pl-8 md:text-left pl-16  text-left"
                    }`}
                  >
                    {/* Year */}
                    <h3
                      className={`title-year text-[2rem] md:text-[2.5rem] leading-[2.5rem] md:leading-[3rem] font-bold bg-gradient-to-b from-[#6F77DA] to-transparent bg-clip-text text-transparent mb-3 md:mb-4  ${
                        clsYearStyles || ""
                      }`}
                    >
                      {item.year}
                    </h3>

                    {/* Items */}
                    <div className="desc space-y-2">
                      {item.items.map((description, idx) => (
                        <p
                          key={idx}
                          className={`text-[1rem] md:text-[1.125rem] leading-[1.5rem] md:leading-[1.75rem] text-gray-800 ${
                            clsDescStyles || ""
                          }`}
                        >
                          • {description}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollTimeline;
