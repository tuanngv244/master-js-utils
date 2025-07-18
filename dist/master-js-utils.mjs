var F = Object.defineProperty;
var I = (e, t, r) => t in e ? F(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var k = (e, t, r) => I(e, typeof t != "symbol" ? t + "" : t, r);
import { jsx as s, jsxs as x, Fragment as O } from "react/jsx-runtime";
import { useRef as N, useEffect as L, useCallback as S } from "react";
import { gsap as v } from "gsap";
import { ScrollTrigger as M } from "gsap/ScrollTrigger";
const j = (e, t) => {
  let r = null;
  return (...o) => {
    r && clearTimeout(r), r = setTimeout(() => {
      e(...o);
    }, t);
  };
}, _ = {
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
}, q = (e) => e ? Object.fromEntries(
  Object.entries(e).filter(
    ([t, r]) => r !== void 0 && r !== "" && r !== null
  )
) : {}, X = (e) => {
  const t = new URLSearchParams();
  return Object.entries(e).forEach(([r, o]) => {
    Array.isArray(o) ? o.forEach((c) => t.append(r, c)) : t.append(r, o);
  }), t.toString();
}, G = {
  filteredParams: q,
  filteredParamsSerializer: X
}, P = (e) => {
  let t = [];
  return Object.keys(e).forEach((r) => {
    const o = r;
    e[o] !== void 0 || typeof e[o] != "object" ? t.push(o) : t = [...t, ...P(e[o])];
  }), t;
}, Y = (e) => e.then((t) => [void 0, t.data]).catch((t) => [t]), B = async (e, t = 3, r = 0) => async (...o) => {
  for (let c = 0; c < t; c++)
    try {
      await e(...o);
      break;
    } catch (u) {
      if ((u == null ? void 0 : u.code) !== "ERR_CANCELLED")
        await new Promise((p) => setTimeout(p, r));
      else
        break;
    }
}, H = {
  catchError: Y,
  retryFetch: B
};
class $ {
  constructor() {
    k(this, "controllers", {});
    this.controllers = {};
  }
  newSignal(t) {
    return this.controllers[t] && this.controllers[t].abort(), this.controllers[t] = new AbortController(), this.controllers[t].signal;
  }
  abort(t) {
    this.controllers[t] && (this.controllers[t].abort(), delete this.controllers[t]);
  }
}
const z = (e, t) => {
  const r = document.createElement("span");
  r.appendChild(document.createTextNode(e)), Object.assign(r.style, {
    font: t,
    margin: "0",
    padding: "0",
    border: "0"
  }), document.body.appendChild(r);
  const { width: o, height: c } = r.getBoundingClientRect();
  return r.remove(), { width: o, height: c };
};
v.registerPlugin(M);
const K = [
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
], V = ({
  list: e,
  clsYearStyles: t,
  clsDescStyles: r
}) => {
  const o = N(null), c = N(null), u = e || K;
  return L(() => {
    const p = v.context(() => {
      var n, i, a, l;
      v.fromTo(
        c.current,
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
            trigger: c.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
      const f = (n = o.current) == null ? void 0 : n.querySelectorAll(".timeline-item");
      f == null || f.forEach((m, w) => {
        v.fromTo(
          m.querySelector(".title-year"),
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
              trigger: m,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        ), v.fromTo(
          m.querySelector(".desc"),
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
              trigger: m,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
      const y = (i = o.current) == null ? void 0 : i.querySelector(".timeline-line");
      y && v.set(y, { scaleY: 1, opacity: 1 });
      const D = (a = o.current) == null ? void 0 : a.querySelector(
        ".timeline-line-purple"
      );
      D && v.fromTo(
        D,
        {
          height: "0%"
        },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: o.current,
            start: "top center",
            end: "bottom center",
            scrub: 1,
            // Smooth sync with scroll
            invalidateOnRefresh: !0
          }
        }
      );
      const b = (l = o.current) == null ? void 0 : l.querySelectorAll(".year-dot");
      b == null || b.forEach((m, w) => {
        v.fromTo(
          m,
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
              trigger: m,
              start: "top 90%",
              end: "bottom 10%",
              toggleActions: "play none none reverse"
            }
          }
        );
        const h = document.createElement("div");
        h.className = "absolute inset-0 rounded-full border-2 border-[#6F77DA] opacity-0 pointer-events-none", m.appendChild(h);
        const g = v.timeline({ paused: !0, repeat: -1 });
        g.to(m, {
          scale: 1.3,
          duration: 0.8,
          ease: "power2.inOut",
          yoyo: !0,
          repeat: 1
        }), g.to(
          h,
          {
            scale: 4,
            opacity: 0.4,
            duration: 1.5,
            ease: "power2.out"
          },
          0
        ), g.to(
          h,
          {
            opacity: 0,
            duration: 0.5
          },
          1
        ), M.create({
          trigger: m,
          start: "top 70%",
          end: "bottom 30%",
          onEnter: () => g.play(),
          onLeave: () => g.pause(),
          onEnterBack: () => g.play(),
          onLeaveBack: () => g.pause()
        });
      });
    }, o);
    return () => p.revert();
  }, []), /* @__PURE__ */ s("section", { className: "py-12 md:py-20 bg-white", children: /* @__PURE__ */ x("div", { className: "max-w-7xl mx-auto px-4 md:px-6", children: [
    /* @__PURE__ */ x("div", { className: "text-center mb-12 md:mb-16", children: [
      /* @__PURE__ */ s("p", { className: "text-primary-500 text-[1.5rem] md:text-base font-normal mb-2", children: "Company History" }),
      /* @__PURE__ */ s(
        "h2",
        {
          ref: c,
          className: "text-[1.5rem] md:text-[2.5rem] leading-[2rem] md:leading-[3rem] font-medium text-gray-900",
          children: "Our Journey Through Time"
        }
      )
    ] }),
    /* @__PURE__ */ x("div", { ref: o, className: "relative", children: [
      /* @__PURE__ */ s("div", { className: "timeline-line absolute left-1/2 md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2 w-[0.125rem] bg-gray-200 h-full md:block hidden rounded-2xl" }),
      /* @__PURE__ */ s("div", { className: "timeline-line absolute left-8 md:hidden w-1 bg-gray-200 h-full block" }),
      /* @__PURE__ */ s(
        "div",
        {
          className: "timeline-line-purple absolute left-[34px] md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2 w-[0.25rem] bg-gradient-to-b from-transparent to-[rgba(111,119,218,1)]  md:block top-0 rounded-b-2xl",
          style: { height: "0%" }
        }
      ),
      /* @__PURE__ */ s("div", { className: "space-y-16 md:space-y-24", children: u.map((p, f) => {
        const y = f % 2 === 0;
        return /* @__PURE__ */ x(
          "div",
          {
            className: `timeline-item overflow-hidden relative flex items-start md:items-start ${y ? "md:justify-start justify-start" : "md:justify-end justify-start"}`,
            children: [
              /* @__PURE__ */ s("div", { className: "year-dot absolute left-1/2 transform -translate-x-1/2 w-[0.25rem] h-[0.25rem] bg-[#6F77DA] rounded-[0.125rem] top-[calc(3.2rem_/_2)] shadow-lg z-10 hidden md:block" }),
              /* @__PURE__ */ s("div", { className: "year-dot absolute left-[34px] transform -translate-x-1/2 w-[0.5rem] h-[0.5rem] bg-[#6F77DA] rounded-full shadow-lg z-10 block md:hidden top-2" }),
              /* @__PURE__ */ x(
                "div",
                {
                  className: `w-full md:w-5/12 ${y ? "md:pr-8 md:text-right pr-0 pl-16 text-left" : "md:pl-8 md:text-left pl-16  text-left"}`,
                  children: [
                    /* @__PURE__ */ s(
                      "h3",
                      {
                        className: `title-year text-[2rem] md:text-[2.5rem] leading-[2.5rem] md:leading-[3rem] font-bold bg-gradient-to-b from-[#6F77DA] to-transparent bg-clip-text text-transparent mb-3 md:mb-4  ${t || ""}`,
                        children: p.year
                      }
                    ),
                    /* @__PURE__ */ s("div", { className: "desc space-y-2", children: p.items.map((D, b) => /* @__PURE__ */ x(
                      "p",
                      {
                        className: `text-[1rem] md:text-[1.125rem] leading-[1.5rem] md:leading-[1.75rem] text-gray-800 ${r || ""}`,
                        children: [
                          "• ",
                          D
                        ]
                      },
                      b
                    )) })
                  ]
                }
              )
            ]
          },
          p.year
        );
      }) })
    ] })
  ] }) });
}, W = ({ clsStyles: e }) => /* @__PURE__ */ s(
  "div",
  {
    className: `scroll-progress origin-left h-1 w-full bg-gradient-to-r from-indigo-500 to-teal-500 z-[1000] fixed top-0 left-0 ${e || ""}`
  }
), J = ({ onProcess: e, children: t }) => {
  const r = N(null), o = S((c) => {
    r.current && r.current.disconnect(), r.current = new IntersectionObserver((u) => {
      u[0].isIntersecting && e();
    }), c && r.current.observe(c);
  }, []);
  return /* @__PURE__ */ s("div", { ref: o, children: t });
}, Q = ({ ulClsStyles: e, liClsStyles: t, data: r }) => {
  let o = !1, c = 0, u, p, f;
  const y = (n, i, a) => Math.abs(
    (n.x * (i.y - a.y) + i.x * (a.y - n.y) + a.x * (n.y - i.y)) / 2
  ), D = function(n, i, a, l) {
    var m = y(i, a, n), w = y(a, n, l), h = y(l, i, n), g = y(i, a, l);
    return g == m + w + h;
  }, b = function(n, i) {
    var a;
    return [...(a = n == null ? void 0 : n.parentNode) == null ? void 0 : a.children].filter(
      (l) => i ? l.className === i : l !== n
    );
  };
  return L(() => {
    const n = document.querySelectorAll(".menu .menu-item a"), i = document.getElementById(
      "magic-triangle"
    );
    n.forEach(function(a) {
      a.addEventListener("mousemove", function(l) {
        var h, g, A, E, C;
        const m = l.target, w = m.closest(".menu-item");
        if (o) {
          const T = { x: l.pageX, y: l.pageY };
          (l.pageX < c || !D(T, u, p, f)) && (o = !1), c = l.pageX;
        } else {
          w.classList.add("active");
          const T = b(w, null), d = b(m, "sub-menu");
          T.forEach(
            (R) => R.classList.remove("active")
          ), u = { x: l.pageX, y: l.pageY }, p = {
            x: (h = d == null ? void 0 : d[0]) == null ? void 0 : h.offsetLeft,
            y: (g = d == null ? void 0 : d[0]) == null ? void 0 : g.offsetTop
          }, f = {
            x: (A = d == null ? void 0 : d[0]) == null ? void 0 : A.offsetLeft,
            y: ((E = d == null ? void 0 : d[0]) == null ? void 0 : E.offsetTop) + ((C = d == null ? void 0 : d[0]) == null ? void 0 : C.offsetHeight)
          }, i.setAttribute(
            "points",
            u.x + "," + u.y + " " + p.x + "," + p.y + " " + f.x + "," + f.y + " "
          ), o = !0;
        }
      });
    });
  }, []), /* @__PURE__ */ x(O, { children: [
    /* @__PURE__ */ s("svg", { children: /* @__PURE__ */ s(
      "polygon",
      {
        id: "magic-triangle",
        points: "",
        style: {
          fill: "lime",
          stroke: "purple",
          strokeWidth: 0
        }
      }
    ) }),
    /* @__PURE__ */ s("ul", { className: `menu ${e || ""}`, children: r == null ? void 0 : r.map((n, i) => /* @__PURE__ */ x(
      "li",
      {
        className: `menu-item ${t || ""}`,
        children: [
          /* @__PURE__ */ s("a", { href: n.path, target: n.target, children: n.label }),
          (n == null ? void 0 : n.subs) && n.subs.length > 0 && /* @__PURE__ */ s("ul", { className: "sub-menu", children: n.subs.map((a, l) => /* @__PURE__ */ s("li", { className: "sub-menu-item", children: /* @__PURE__ */ s("a", { href: a.path, target: a == null ? void 0 : a.target, children: a.label }) })) })
        ]
      },
      n.path + "-" + i
    )) })
  ] });
}, U = {
  debounce: j,
  dates: _,
  apis: H,
  params: G,
  measureText: z,
  extractObjectKeys: P,
  Aborter: $
}, Z = {
  ScrollTimeline: V,
  ScrollProgressBar: W,
  DetectIntersectionObserver: J,
  MagicMenuTriangle: Q
}, ae = {
  utils: U,
  ui: Z
};
export {
  $ as Aborter,
  J as DetectIntersectionObserver,
  Q as MagicMenuTriangle,
  W as ScrollProgressBar,
  V as ScrollTimeline,
  H as apis,
  _ as dates,
  j as debounce,
  ae as default,
  P as extractObjectKeys,
  z as measureText,
  G as params,
  U as utils
};
