import { jsx as n, jsxs as i } from "react/jsx-runtime";
import { useRef as x, useEffect as N } from "react";
import { gsap as s } from "gsap";
import { ScrollTrigger as D } from "gsap/ScrollTrigger";
const M = (e, t) => {
  let o = null;
  return (...r) => {
    o && clearTimeout(o), o = setTimeout(() => {
      e(...r);
    }, t);
  };
}, k = {
  getLastMonth: () => {
    const e = /* @__PURE__ */ new Date(), t = new Date(e);
    return t.setMonth(e.getMonth() - 1), t;
  },
  getCurrentMonth: () => {
    const e = /* @__PURE__ */ new Date(), t = new Date(e);
    return t.setMonth(e.getMonth()), t;
  },
  getLastYear: () => {
    const e = /* @__PURE__ */ new Date();
    return new Date(e.getFullYear() - 1, e.getMonth(), e.getDate());
  },
  getCurrentYear: () => {
    const e = /* @__PURE__ */ new Date();
    return new Date(e.getFullYear(), e.getMonth(), e.getDate());
  },
  getTomorrow: () => {
    const e = /* @__PURE__ */ new Date();
    return e.setDate(e.getDate() + 1), e;
  },
  getYesterday: () => {
    const e = /* @__PURE__ */ new Date();
    return e.setDate(e.getDate() - 1), e;
  },
  getToday: () => /* @__PURE__ */ new Date()
}, A = (e) => e.then((t) => [void 0, t.data]).catch((t) => [t]), E = (e) => e ? Object.fromEntries(
  Object.entries(e).filter(
    ([t, o]) => o !== void 0 && o !== "" && o !== null
  )
) : {}, P = (e) => {
  const t = new URLSearchParams();
  return Object.entries(e).forEach(([o, r]) => {
    Array.isArray(r) ? r.forEach((m) => t.append(o, m)) : t.append(o, r);
  }), t.toString();
}, C = {
  filteredParams: E,
  filteredParamsSerializer: P
}, w = (e) => {
  let t = [];
  return Object.keys(e).forEach((o) => {
    const r = o;
    e[r] !== void 0 || typeof e[r] != "object" ? t.push(r) : t = [...t, ...w(e[r])];
  }), t;
};
s.registerPlugin(D);
const F = [
  {
    year: "2021",
    items: [
      "Development of global stock ledger system",
      "Development of global currency API system"
    ]
  },
  {
    year: "2020",
    items: [
      "Development of arbitrage transaction and order management for Japan market",
      "Euras Prisma Margin calculation solution development and SPAN",
      "Prisma integration margin calculation Solution",
      "Bank FX Documentation system development"
    ]
  },
  {
    year: "2019",
    items: [
      "Development of bank foreign currency trading system based on PC Client",
      "Development of RMS based on server"
    ]
  },
  {
    year: "2018",
    items: [
      "Development of message distribution/sending system",
      "Development of OMS system"
    ]
  },
  {
    year: "2017",
    items: [
      "Development of domestic & global derivatives integration HTS, MTS, and ledger system",
      "Development of future exchange future ledger system for Vietnam security"
    ]
  },
  {
    year: "2016",
    items: [
      "Development of PD Client platform Posco",
      "Development of global future option portfolio margin calculation solution Posco"
    ]
  },
  {
    year: "2015",
    items: ["Adopt Viance mobile platform and take over Mitech Co."]
  },
  {
    year: "2014",
    items: [
      "Development of FIX Gateway solution",
      "Development of global market data manufacture solution",
      "Development of global stock LIS exchange HTS with Samsung Securities",
      "Transferred global future option market data vendor and DC Partnership to Genshintech Co."
    ]
  },
  {
    year: "2013",
    items: ["Development of MxHQ server platform"]
  },
  {
    year: "2012",
    items: [
      "Selected as Government R&D business partner*",
      "KRX derivatives HFT High Frequency Trading Solution development",
      "Development of global option system",
      "Development of Real communication platform"
    ]
  },
  {
    year: "2011",
    items: [
      "Development of FIX SME 1.0 interface solution and qualification of CME Group & IRN Independent Software Vendor",
      "Made a contract to Korea base and Interactive Data Corporation(IDC) which is Global Data Vendor",
      "Began global future option market data vendor service"
    ]
  }
], j = ({
  list: e,
  clsYearStyles: t,
  clsDescStyles: o
}) => {
  const r = x(null), m = x(null), T = e || F;
  return N(() => {
    const c = s.context(() => {
      var y, h, b, v;
      s.fromTo(
        m.current,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: m.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
      const d = (y = r.current) == null ? void 0 : y.querySelectorAll(".timeline-item");
      d == null || d.forEach((a, S) => {
        s.fromTo(
          a.querySelector(".title-year"),
          {
            opacity: 0,
            y: window.innerWidth <= 768 ? 50 : 100,
            // Mobile: slide from right
            scale: 0.7
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: a,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        ), s.fromTo(
          a.querySelector(".desc"),
          {
            opacity: 0,
            y: window.innerWidth <= 768 ? 50 : 100,
            // Mobile: slide from right
            scale: 0.7
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: a,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
      const u = (h = r.current) == null ? void 0 : h.querySelector(".timeline-line");
      u && s.set(u, { scaleY: 1, opacity: 1 });
      const g = (b = r.current) == null ? void 0 : b.querySelector(
        ".timeline-line-purple"
      );
      g && s.fromTo(
        g,
        {
          height: "0%"
        },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: r.current,
            start: "top center",
            end: "bottom center",
            scrub: 1,
            // Smooth sync with scroll
            invalidateOnRefresh: !0
          }
        }
      );
      const p = (v = r.current) == null ? void 0 : v.querySelectorAll(".year-dot");
      p == null || p.forEach((a, S) => {
        s.fromTo(
          a,
          {
            scale: 0,
            opacity: 0
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: a,
              start: "top 90%",
              end: "bottom 10%",
              toggleActions: "play none none reverse"
            }
          }
        );
        const f = document.createElement("div");
        f.className = "absolute inset-0 rounded-full border-2 border-[#6F77DA] opacity-0 pointer-events-none", a.appendChild(f);
        const l = s.timeline({ paused: !0, repeat: -1 });
        l.to(a, {
          scale: 1.3,
          duration: 0.8,
          ease: "power2.inOut",
          yoyo: !0,
          repeat: 1
        }), l.to(
          f,
          {
            scale: 4,
            opacity: 0.4,
            duration: 1.5,
            ease: "power2.out"
          },
          0
        ), l.to(
          f,
          {
            opacity: 0,
            duration: 0.5
          },
          1
        ), D.create({
          trigger: a,
          start: "top 70%",
          end: "bottom 30%",
          onEnter: () => l.play(),
          onLeave: () => l.pause(),
          onEnterBack: () => l.play(),
          onLeaveBack: () => l.pause()
        });
      });
    }, r);
    return () => c.revert();
  }, []), /* @__PURE__ */ n("section", { className: "py-12 md:py-20 bg-white", children: /* @__PURE__ */ i("div", { className: "max-w-7xl mx-auto px-4 md:px-6", children: [
    /* @__PURE__ */ i("div", { className: "text-center mb-12 md:mb-16", children: [
      /* @__PURE__ */ n("p", { className: "text-primary-500 text-[1.5rem] md:text-base font-normal mb-2", children: "Company History" }),
      /* @__PURE__ */ n(
        "h2",
        {
          ref: m,
          className: "text-[1.5rem] md:text-[2.5rem] leading-[2rem] md:leading-[3rem] font-medium text-gray-900",
          children: "Our Journey Through Time"
        }
      )
    ] }),
    /* @__PURE__ */ i("div", { ref: r, className: "relative", children: [
      /* @__PURE__ */ n("div", { className: "timeline-line absolute left-1/2 md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2 w-[0.125rem] bg-gray-200 h-full md:block hidden rounded-2xl" }),
      /* @__PURE__ */ n("div", { className: "timeline-line absolute left-8 md:hidden w-1 bg-gray-200 h-full block" }),
      /* @__PURE__ */ n(
        "div",
        {
          className: "timeline-line-purple absolute left-[34px] md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2 w-[0.25rem] bg-gradient-to-b from-transparent to-[rgba(111,119,218,1)]  md:block top-0 rounded-b-2xl",
          style: { height: "0%" }
        }
      ),
      /* @__PURE__ */ n("div", { className: "space-y-16 md:space-y-24", children: T.map((c, d) => {
        const u = d % 2 === 0;
        return /* @__PURE__ */ i(
          "div",
          {
            className: `timeline-item overflow-hidden relative flex items-start md:items-start ${u ? "md:justify-start justify-start" : "md:justify-end justify-start"}`,
            children: [
              /* @__PURE__ */ n("div", { className: "year-dot absolute left-1/2 transform -translate-x-1/2 w-[0.25rem] h-[0.25rem] bg-[#6F77DA] rounded-[0.125rem] top-[calc(3.2rem_/_2)] shadow-lg z-10 hidden md:block" }),
              /* @__PURE__ */ n("div", { className: "year-dot absolute left-[34px] transform -translate-x-1/2 w-[0.5rem] h-[0.5rem] bg-[#6F77DA] rounded-full shadow-lg z-10 block md:hidden top-2" }),
              /* @__PURE__ */ i(
                "div",
                {
                  className: `w-full md:w-5/12 ${u ? "md:pr-8 md:text-right pr-0 pl-16 text-left" : "md:pl-8 md:text-left pl-16  text-left"}`,
                  children: [
                    /* @__PURE__ */ n(
                      "h3",
                      {
                        className: `title-year text-[2rem] md:text-[2.5rem] leading-[2.5rem] md:leading-[3rem] font-bold bg-gradient-to-b from-[#6F77DA] to-transparent bg-clip-text text-transparent mb-3 md:mb-4  ${t || ""}`,
                        children: c.year
                      }
                    ),
                    /* @__PURE__ */ n("div", { className: "desc space-y-2", children: c.items.map((g, p) => /* @__PURE__ */ i(
                      "p",
                      {
                        className: `text-[1rem] md:text-[1.125rem] leading-[1.5rem] md:leading-[1.75rem] text-gray-800 ${o || ""}`,
                        children: [
                          "• ",
                          g
                        ]
                      },
                      p
                    )) })
                  ]
                }
              )
            ]
          },
          c.year
        );
      }) })
    ] })
  ] }) });
}, R = ({ clsStyles: e }) => /* @__PURE__ */ n(
  "div",
  {
    className: `scroll-progress origin-left h-1 w-full bg-gradient-to-r from-indigo-500 to-teal-500 z-[1000] fixed top-0 left-0 ${e || ""}`
  }
), L = { debounce: M, dates: k, catchError: A, params: C, extractObjectKeys: w }, O = { ScrollTimeline: j, ScrollProgressBar: R }, B = {
  utils: L,
  ui: O
};
export {
  R as ScrollProgressBar,
  j as ScrollTimeline,
  A as catchError,
  k as dates,
  M as debounce,
  B as default,
  w as extractObjectKeys,
  C as params,
  L as utils
};
