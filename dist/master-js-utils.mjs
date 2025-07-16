import ro, { useRef as Yn, useEffect as Do } from "react";
import { gsap as Ft } from "gsap";
const Po = (i, e) => {
  let n = null;
  return (...t) => {
    n && clearTimeout(n), n = setTimeout(() => {
      i(...t);
    }, e);
  };
}, Oo = {
  getLastMonth: () => {
    const i = /* @__PURE__ */ new Date(), e = new Date(i);
    return e.setMonth(i.getMonth() - 1), e;
  },
  getCurrentMonth: () => {
    const i = /* @__PURE__ */ new Date(), e = new Date(i);
    return e.setMonth(i.getMonth()), e;
  },
  getLastYear: () => {
    const i = /* @__PURE__ */ new Date();
    return new Date(i.getFullYear() - 1, i.getMonth(), i.getDate());
  },
  getCurrentYear: () => {
    const i = /* @__PURE__ */ new Date();
    return new Date(i.getFullYear(), i.getMonth(), i.getDate());
  },
  getTomorrow: () => {
    const i = /* @__PURE__ */ new Date();
    return i.setDate(i.getDate() + 1), i;
  },
  getYesterday: () => {
    const i = /* @__PURE__ */ new Date();
    return i.setDate(i.getDate() - 1), i;
  },
  getToday: () => /* @__PURE__ */ new Date()
}, Mo = (i) => i.then((e) => [void 0, e.data]).catch((e) => [e]), Ao = (i) => i ? Object.fromEntries(
  Object.entries(i).filter(
    ([e, n]) => n !== void 0 && n !== "" && n !== null
  )
) : {}, Fo = (i) => {
  const e = new URLSearchParams();
  return Object.entries(i).forEach(([n, t]) => {
    Array.isArray(t) ? t.forEach((r) => e.append(n, r)) : e.append(n, t);
  }), e.toString();
}, Yo = {
  filteredParams: Ao,
  filteredParamsSerializer: Fo
}, no = (i) => {
  let e = [];
  return Object.keys(i).forEach((n) => {
    const t = n;
    i[t] !== void 0 || typeof i[t] != "object" ? e.push(t) : e = [...e, ...no(i[t])];
  }), e;
};
var hn = { exports: {} }, _r = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var In;
function Io() {
  if (In) return _r;
  In = 1;
  var i = ro, e = Symbol.for("react.element"), n = Symbol.for("react.fragment"), t = Object.prototype.hasOwnProperty, r = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(s, p, y) {
    var S, R = {}, v = null, d = null;
    y !== void 0 && (v = "" + y), p.key !== void 0 && (v = "" + p.key), p.ref !== void 0 && (d = p.ref);
    for (S in p) t.call(p, S) && !a.hasOwnProperty(S) && (R[S] = p[S]);
    if (s && s.defaultProps) for (S in p = s.defaultProps, p) R[S] === void 0 && (R[S] = p[S]);
    return { $$typeof: e, type: s, key: v, ref: d, props: R, _owner: r.current };
  }
  return _r.Fragment = n, _r.jsx = u, _r.jsxs = u, _r;
}
var mr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nn;
function No() {
  return Nn || (Nn = 1, process.env.NODE_ENV !== "production" && function() {
    var i = ro, e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), s = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), d = Symbol.for("react.offscreen"), w = Symbol.iterator, H = "@@iterator";
    function K(o) {
      if (o === null || typeof o != "object")
        return null;
      var f = w && o[w] || o[H];
      return typeof f == "function" ? f : null;
    }
    var U = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(o) {
      {
        for (var f = arguments.length, g = new Array(f > 1 ? f - 1 : 0), _ = 1; _ < f; _++)
          g[_ - 1] = arguments[_];
        we("error", o, g);
      }
    }
    function we(o, f, g) {
      {
        var _ = U.ReactDebugCurrentFrame, b = _.getStackAddendum();
        b !== "" && (f += "%s", g = g.concat([b]));
        var N = g.map(function(x) {
          return String(x);
        });
        N.unshift("Warning: " + f), Function.prototype.apply.call(console[o], console, N);
      }
    }
    var Y = !1, Ke = !1, te = !1, O = !1, Me = !1, Ae;
    Ae = Symbol.for("react.module.reference");
    function T(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === t || o === a || Me || o === r || o === y || o === S || O || o === d || Y || Ke || te || typeof o == "object" && o !== null && (o.$$typeof === v || o.$$typeof === R || o.$$typeof === u || o.$$typeof === s || o.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === Ae || o.getModuleId !== void 0));
    }
    function _e(o, f, g) {
      var _ = o.displayName;
      if (_)
        return _;
      var b = f.displayName || f.name || "";
      return b !== "" ? g + "(" + b + ")" : g;
    }
    function D(o) {
      return o.displayName || "Context";
    }
    function Re(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case t:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case r:
          return "StrictMode";
        case y:
          return "Suspense";
        case S:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case s:
            var f = o;
            return D(f) + ".Consumer";
          case u:
            var g = o;
            return D(g._context) + ".Provider";
          case p:
            return _e(o, o.render, "ForwardRef");
          case R:
            var _ = o.displayName || null;
            return _ !== null ? _ : Re(o.type) || "Memo";
          case v: {
            var b = o, N = b._payload, x = b._init;
            try {
              return Re(x(N));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ee = Object.assign, pe = 0, ke, J, se, le, l, fe, Tt;
    function _t() {
    }
    _t.__reactDisabledLog = !0;
    function Je() {
      {
        if (pe === 0) {
          ke = console.log, J = console.info, se = console.warn, le = console.error, l = console.group, fe = console.groupCollapsed, Tt = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: _t,
            writable: !0
          };
          Object.defineProperties(console, {
            info: o,
            log: o,
            warn: o,
            error: o,
            group: o,
            groupCollapsed: o,
            groupEnd: o
          });
        }
        pe++;
      }
    }
    function mt() {
      {
        if (pe--, pe === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ee({}, o, {
              value: ke
            }),
            info: ee({}, o, {
              value: J
            }),
            warn: ee({}, o, {
              value: se
            }),
            error: ee({}, o, {
              value: le
            }),
            group: ee({}, o, {
              value: l
            }),
            groupCollapsed: ee({}, o, {
              value: fe
            }),
            groupEnd: ee({}, o, {
              value: Tt
            })
          });
        }
        pe < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var me = U.ReactCurrentDispatcher, oe;
    function ve(o, f, g) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (b) {
            var _ = b.stack.trim().match(/\n( *(at )?)/);
            oe = _ && _[1] || "";
          }
        return `
` + oe + o;
      }
    }
    var ye = !1, nt;
    {
      var Fe = typeof WeakMap == "function" ? WeakMap : Map;
      nt = new Fe();
    }
    function Ye(o, f) {
      if (!o || ye)
        return "";
      {
        var g = nt.get(o);
        if (g !== void 0)
          return g;
      }
      var _;
      ye = !0;
      var b = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var N;
      N = me.current, me.current = null, Je();
      try {
        if (f) {
          var x = function() {
            throw Error();
          };
          if (Object.defineProperty(x.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(x, []);
            } catch (q) {
              _ = q;
            }
            Reflect.construct(o, [], x);
          } else {
            try {
              x.call();
            } catch (q) {
              _ = q;
            }
            o.call(x.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (q) {
            _ = q;
          }
          o();
        }
      } catch (q) {
        if (q && _ && typeof q.stack == "string") {
          for (var k = q.stack.split(`
`), re = _.stack.split(`
`), j = k.length - 1, W = re.length - 1; j >= 1 && W >= 0 && k[j] !== re[W]; )
            W--;
          for (; j >= 1 && W >= 0; j--, W--)
            if (k[j] !== re[W]) {
              if (j !== 1 || W !== 1)
                do
                  if (j--, W--, W < 0 || k[j] !== re[W]) {
                    var Q = `
` + k[j].replace(" at new ", " at ");
                    return o.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", o.displayName)), typeof o == "function" && nt.set(o, Q), Q;
                  }
                while (j >= 1 && W >= 0);
              break;
            }
        }
      } finally {
        ye = !1, me.current = N, mt(), Error.prepareStackTrace = b;
      }
      var tt = o ? o.displayName || o.name : "", ft = tt ? ve(tt) : "";
      return typeof o == "function" && nt.set(o, ft), ft;
    }
    function V(o, f, g) {
      return Ye(o, !1);
    }
    function ue(o) {
      var f = o.prototype;
      return !!(f && f.isReactComponent);
    }
    function Te(o, f, g) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return Ye(o, ue(o));
      if (typeof o == "string")
        return ve(o);
      switch (o) {
        case y:
          return ve("Suspense");
        case S:
          return ve("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case p:
            return V(o.render);
          case R:
            return Te(o.type, f, g);
          case v: {
            var _ = o, b = _._payload, N = _._init;
            try {
              return Te(N(b), f, g);
            } catch {
            }
          }
        }
      return "";
    }
    var Ee = Object.prototype.hasOwnProperty, c = {}, Ne = U.ReactDebugCurrentFrame;
    function Ze(o) {
      if (o) {
        var f = o._owner, g = Te(o.type, o._source, f ? f.type : null);
        Ne.setExtraStackFrame(g);
      } else
        Ne.setExtraStackFrame(null);
    }
    function Et(o, f, g, _, b) {
      {
        var N = Function.call.bind(Ee);
        for (var x in o)
          if (N(o, x)) {
            var k = void 0;
            try {
              if (typeof o[x] != "function") {
                var re = Error((_ || "React class") + ": " + g + " type `" + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[x] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw re.name = "Invariant Violation", re;
              }
              k = o[x](f, x, _, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (j) {
              k = j;
            }
            k && !(k instanceof Error) && (Ze(b), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", _ || "React class", g, x, typeof k), Ze(null)), k instanceof Error && !(k.message in c) && (c[k.message] = !0, Ze(b), P("Failed %s type: %s", g, k.message), Ze(null));
          }
      }
    }
    var ie = Array.isArray;
    function ot(o) {
      return ie(o);
    }
    function St(o) {
      {
        var f = typeof Symbol == "function" && Symbol.toStringTag, g = f && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return g;
      }
    }
    function Ot(o) {
      try {
        return ge(o), !1;
      } catch {
        return !0;
      }
    }
    function ge(o) {
      return "" + o;
    }
    function vt(o) {
      if (Ot(o))
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", St(o)), ge(o);
    }
    var ae = U.ReactCurrentOwner, it = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Be, ct;
    function Gt(o) {
      if (Ee.call(o, "ref")) {
        var f = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function de(o) {
      if (Ee.call(o, "key")) {
        var f = Object.getOwnPropertyDescriptor(o, "key").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function nr(o, f) {
      typeof o.ref == "string" && ae.current;
    }
    function yt(o, f) {
      {
        var g = function() {
          Be || (Be = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        g.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: g,
          configurable: !0
        });
      }
    }
    function jt(o, f) {
      {
        var g = function() {
          ct || (ct = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        g.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: g,
          configurable: !0
        });
      }
    }
    var Lt = function(o, f, g, _, b, N, x) {
      var k = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: o,
        key: f,
        ref: g,
        props: x,
        // Record the component responsible for creating this element.
        _owner: N
      };
      return k._store = {}, Object.defineProperty(k._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(k, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.defineProperty(k, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.freeze && (Object.freeze(k.props), Object.freeze(k)), k;
    };
    function Ct(o, f, g, _, b) {
      {
        var N, x = {}, k = null, re = null;
        g !== void 0 && (vt(g), k = "" + g), de(f) && (vt(f.key), k = "" + f.key), Gt(f) && (re = f.ref, nr(f, b));
        for (N in f)
          Ee.call(f, N) && !it.hasOwnProperty(N) && (x[N] = f[N]);
        if (o && o.defaultProps) {
          var j = o.defaultProps;
          for (N in j)
            x[N] === void 0 && (x[N] = j[N]);
        }
        if (k || re) {
          var W = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          k && yt(x, W), re && jt(x, W);
        }
        return Lt(o, k, re, b, _, ae.current, x);
      }
    }
    var bt = U.ReactCurrentOwner, I = U.ReactDebugCurrentFrame;
    function Qe(o) {
      if (o) {
        var f = o._owner, g = Te(o.type, o._source, f ? f.type : null);
        I.setExtraStackFrame(g);
      } else
        I.setExtraStackFrame(null);
    }
    var ze;
    ze = !1;
    function Xe(o) {
      return typeof o == "object" && o !== null && o.$$typeof === e;
    }
    function et() {
      {
        if (bt.current) {
          var o = Re(bt.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function Mt(o) {
      return "";
    }
    var At = {};
    function xt(o) {
      {
        var f = et();
        if (!f) {
          var g = typeof o == "string" ? o : o.displayName || o.name;
          g && (f = `

Check the top-level render call using <` + g + ">.");
        }
        return f;
      }
    }
    function Wt(o, f) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var g = xt(f);
        if (At[g])
          return;
        At[g] = !0;
        var _ = "";
        o && o._owner && o._owner !== bt.current && (_ = " It was passed a child from " + Re(o._owner.type) + "."), Qe(o), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, _), Qe(null);
      }
    }
    function A(o, f) {
      {
        if (typeof o != "object")
          return;
        if (ot(o))
          for (var g = 0; g < o.length; g++) {
            var _ = o[g];
            Xe(_) && Wt(_, f);
          }
        else if (Xe(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var b = K(o);
          if (typeof b == "function" && b !== o.entries)
            for (var N = b.call(o), x; !(x = N.next()).done; )
              Xe(x.value) && Wt(x.value, f);
        }
      }
    }
    function C(o) {
      {
        var f = o.type;
        if (f == null || typeof f == "string")
          return;
        var g;
        if (typeof f == "function")
          g = f.propTypes;
        else if (typeof f == "object" && (f.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        f.$$typeof === R))
          g = f.propTypes;
        else
          return;
        if (g) {
          var _ = Re(f);
          Et(g, o.props, "prop", _, o);
        } else if (f.PropTypes !== void 0 && !ze) {
          ze = !0;
          var b = Re(f);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function G(o) {
      {
        for (var f = Object.keys(o.props), g = 0; g < f.length; g++) {
          var _ = f[g];
          if (_ !== "children" && _ !== "key") {
            Qe(o), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", _), Qe(null);
            break;
          }
        }
        o.ref !== null && (Qe(o), P("Invalid attribute `ref` supplied to `React.Fragment`."), Qe(null));
      }
    }
    var h = {};
    function M(o, f, g, _, b, N) {
      {
        var x = T(o);
        if (!x) {
          var k = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (k += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var re = Mt();
          re ? k += re : k += et();
          var j;
          o === null ? j = "null" : ot(o) ? j = "array" : o !== void 0 && o.$$typeof === e ? (j = "<" + (Re(o.type) || "Unknown") + " />", k = " Did you accidentally export a JSX literal instead of a component?") : j = typeof o, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", j, k);
        }
        var W = Ct(o, f, g, b, N);
        if (W == null)
          return W;
        if (x) {
          var Q = f.children;
          if (Q !== void 0)
            if (_)
              if (ot(Q)) {
                for (var tt = 0; tt < Q.length; tt++)
                  A(Q[tt], o);
                Object.freeze && Object.freeze(Q);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              A(Q, o);
        }
        if (Ee.call(f, "key")) {
          var ft = Re(o), q = Object.keys(f).filter(function(pr) {
            return pr !== "key";
          }), ce = q.length > 0 ? "{key: someKey, " + q.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!h[ft + ce]) {
            var dt = q.length > 0 ? "{" + q.join(": ..., ") + ": ...}" : "{}";
            P(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ce, ft, dt, ft), h[ft + ce] = !0;
          }
        }
        return o === t ? G(W) : C(W), W;
      }
    }
    function E(o, f, g) {
      return M(o, f, g, !0);
    }
    function F(o, f, g) {
      return M(o, f, g, !1);
    }
    var be = F, $ = E;
    mr.Fragment = t, mr.jsx = be, mr.jsxs = $;
  }()), mr;
}
process.env.NODE_ENV === "production" ? hn.exports = Io() : hn.exports = No();
var De = hn.exports;
function jo(i, e) {
  for (var n = 0; n < e.length; n++) {
    var t = e[n];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(i, t.key, t);
  }
}
function Lo(i, e, n) {
  return e && jo(i.prototype, e), i;
}
/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var Ie, qr, ut, Xt, $t, ur, oo, Ut, Sr, io, It, wt, ao, so = function() {
  return Ie || typeof window < "u" && (Ie = window.gsap) && Ie.registerPlugin && Ie;
}, lo = 1, lr = [], z = [], Pt = [], Cr = Date.now, _n = function(e, n) {
  return n;
}, Wo = function() {
  var e = Sr.core, n = e.bridge || {}, t = e._scrollers, r = e._proxies;
  t.push.apply(t, z), r.push.apply(r, Pt), z = t, Pt = r, _n = function(u, s) {
    return n[u](s);
  };
}, Ht = function(e, n) {
  return ~Pt.indexOf(e) && Pt[Pt.indexOf(e) + 1][n];
}, Rr = function(e) {
  return !!~io.indexOf(e);
}, He = function(e, n, t, r, a) {
  return e.addEventListener(n, t, {
    passive: r !== !1,
    capture: !!a
  });
}, $e = function(e, n, t, r) {
  return e.removeEventListener(n, t, !!r);
}, Nr = "scrollLeft", jr = "scrollTop", mn = function() {
  return It && It.isPressed || z.cache++;
}, tn = function(e, n) {
  var t = function r(a) {
    if (a || a === 0) {
      lo && (ut.history.scrollRestoration = "manual");
      var u = It && It.isPressed;
      a = r.v = Math.round(a) || (It && It.iOS ? 1 : 0), e(a), r.cacheID = z.cache, u && _n("ss", a);
    } else (n || z.cache !== r.cacheID || _n("ref")) && (r.cacheID = z.cache, r.v = e());
    return r.v + r.offset;
  };
  return t.offset = 0, e && t;
}, qe = {
  s: Nr,
  p: "left",
  p2: "Left",
  os: "right",
  os2: "Right",
  d: "width",
  d2: "Width",
  a: "x",
  sc: tn(function(i) {
    return arguments.length ? ut.scrollTo(i, Ce.sc()) : ut.pageXOffset || Xt[Nr] || $t[Nr] || ur[Nr] || 0;
  })
}, Ce = {
  s: jr,
  p: "top",
  p2: "Top",
  os: "bottom",
  os2: "Bottom",
  d: "height",
  d2: "Height",
  a: "y",
  op: qe,
  sc: tn(function(i) {
    return arguments.length ? ut.scrollTo(qe.sc(), i) : ut.pageYOffset || Xt[jr] || $t[jr] || ur[jr] || 0;
  })
}, rt = function(e, n) {
  return (n && n._ctx && n._ctx.selector || Ie.utils.toArray)(e)[0] || (typeof e == "string" && Ie.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null);
}, Bo = function(e, n) {
  for (var t = n.length; t--; )
    if (n[t] === e || n[t].contains(e))
      return !0;
  return !1;
}, Vt = function(e, n) {
  var t = n.s, r = n.sc;
  Rr(e) && (e = Xt.scrollingElement || $t);
  var a = z.indexOf(e), u = r === Ce.sc ? 1 : 2;
  !~a && (a = z.push(e) - 1), z[a + u] || He(e, "scroll", mn);
  var s = z[a + u], p = s || (z[a + u] = tn(Ht(e, t), !0) || (Rr(e) ? r : tn(function(y) {
    return arguments.length ? e[t] = y : e[t];
  })));
  return p.target = e, s || (p.smooth = Ie.getProperty(e, "scrollBehavior") === "smooth"), p;
}, vn = function(e, n, t) {
  var r = e, a = e, u = Cr(), s = u, p = n || 50, y = Math.max(500, p * 3), S = function(w, H) {
    var K = Cr();
    H || K - u > p ? (a = r, r = w, s = u, u = K) : t ? r += w : r = a + (w - a) / (K - s) * (u - s);
  }, R = function() {
    a = r = t ? 0 : r, s = u = 0;
  }, v = function(w) {
    var H = s, K = a, U = Cr();
    return (w || w === 0) && w !== r && S(w), u === s || U - s > y ? 0 : (r + (t ? K : -K)) / ((t ? U : u) - H) * 1e3;
  };
  return {
    update: S,
    reset: R,
    getVelocity: v
  };
}, vr = function(e, n) {
  return n && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
}, jn = function(e) {
  var n = Math.max.apply(Math, e), t = Math.min.apply(Math, e);
  return Math.abs(n) >= Math.abs(t) ? n : t;
}, uo = function() {
  Sr = Ie.core.globals().ScrollTrigger, Sr && Sr.core && Wo();
}, co = function(e) {
  return Ie = e || so(), !qr && Ie && typeof document < "u" && document.body && (ut = window, Xt = document, $t = Xt.documentElement, ur = Xt.body, io = [ut, Xt, $t, ur], Ie.utils.clamp, ao = Ie.core.context || function() {
  }, Ut = "onpointerenter" in ur ? "pointer" : "mouse", oo = he.isTouch = ut.matchMedia && ut.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in ut || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, wt = he.eventTypes = ("ontouchstart" in $t ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in $t ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
    return lo = 0;
  }, 500), uo(), qr = 1), qr;
};
qe.op = Ce;
z.cache = 0;
var he = /* @__PURE__ */ function() {
  function i(n) {
    this.init(n);
  }
  var e = i.prototype;
  return e.init = function(t) {
    qr || co(Ie) || console.warn("Please gsap.registerPlugin(Observer)"), Sr || uo();
    var r = t.tolerance, a = t.dragMinimum, u = t.type, s = t.target, p = t.lineHeight, y = t.debounce, S = t.preventDefault, R = t.onStop, v = t.onStopDelay, d = t.ignore, w = t.wheelSpeed, H = t.event, K = t.onDragStart, U = t.onDragEnd, P = t.onDrag, we = t.onPress, Y = t.onRelease, Ke = t.onRight, te = t.onLeft, O = t.onUp, Me = t.onDown, Ae = t.onChangeX, T = t.onChangeY, _e = t.onChange, D = t.onToggleX, Re = t.onToggleY, ee = t.onHover, pe = t.onHoverEnd, ke = t.onMove, J = t.ignoreCheck, se = t.isNormalizer, le = t.onGestureStart, l = t.onGestureEnd, fe = t.onWheel, Tt = t.onEnable, _t = t.onDisable, Je = t.onClick, mt = t.scrollSpeed, me = t.capture, oe = t.allowClicks, ve = t.lockAxis, ye = t.onLockAxis;
    this.target = s = rt(s) || $t, this.vars = t, d && (d = Ie.utils.toArray(d)), r = r || 1e-9, a = a || 0, w = w || 1, mt = mt || 1, u = u || "wheel,touch,pointer", y = y !== !1, p || (p = parseFloat(ut.getComputedStyle(ur).lineHeight) || 22);
    var nt, Fe, Ye, V, ue, Te, Ee, c = this, Ne = 0, Ze = 0, Et = t.passive || !S && t.passive !== !1, ie = Vt(s, qe), ot = Vt(s, Ce), St = ie(), Ot = ot(), ge = ~u.indexOf("touch") && !~u.indexOf("pointer") && wt[0] === "pointerdown", vt = Rr(s), ae = s.ownerDocument || Xt, it = [0, 0, 0], Be = [0, 0, 0], ct = 0, Gt = function() {
      return ct = Cr();
    }, de = function(C, G) {
      return (c.event = C) && d && Bo(C.target, d) || G && ge && C.pointerType !== "touch" || J && J(C, G);
    }, nr = function() {
      c._vx.reset(), c._vy.reset(), Fe.pause(), R && R(c);
    }, yt = function() {
      var C = c.deltaX = jn(it), G = c.deltaY = jn(Be), h = Math.abs(C) >= r, M = Math.abs(G) >= r;
      _e && (h || M) && _e(c, C, G, it, Be), h && (Ke && c.deltaX > 0 && Ke(c), te && c.deltaX < 0 && te(c), Ae && Ae(c), D && c.deltaX < 0 != Ne < 0 && D(c), Ne = c.deltaX, it[0] = it[1] = it[2] = 0), M && (Me && c.deltaY > 0 && Me(c), O && c.deltaY < 0 && O(c), T && T(c), Re && c.deltaY < 0 != Ze < 0 && Re(c), Ze = c.deltaY, Be[0] = Be[1] = Be[2] = 0), (V || Ye) && (ke && ke(c), Ye && (K && Ye === 1 && K(c), P && P(c), Ye = 0), V = !1), Te && !(Te = !1) && ye && ye(c), ue && (fe(c), ue = !1), nt = 0;
    }, jt = function(C, G, h) {
      it[h] += C, Be[h] += G, c._vx.update(C), c._vy.update(G), y ? nt || (nt = requestAnimationFrame(yt)) : yt();
    }, Lt = function(C, G) {
      ve && !Ee && (c.axis = Ee = Math.abs(C) > Math.abs(G) ? "x" : "y", Te = !0), Ee !== "y" && (it[2] += C, c._vx.update(C, !0)), Ee !== "x" && (Be[2] += G, c._vy.update(G, !0)), y ? nt || (nt = requestAnimationFrame(yt)) : yt();
    }, Ct = function(C) {
      if (!de(C, 1)) {
        C = vr(C, S);
        var G = C.clientX, h = C.clientY, M = G - c.x, E = h - c.y, F = c.isDragging;
        c.x = G, c.y = h, (F || (M || E) && (Math.abs(c.startX - G) >= a || Math.abs(c.startY - h) >= a)) && (Ye = F ? 2 : 1, F || (c.isDragging = !0), Lt(M, E));
      }
    }, bt = c.onPress = function(A) {
      de(A, 1) || A && A.button || (c.axis = Ee = null, Fe.pause(), c.isPressed = !0, A = vr(A), Ne = Ze = 0, c.startX = c.x = A.clientX, c.startY = c.y = A.clientY, c._vx.reset(), c._vy.reset(), He(se ? s : ae, wt[1], Ct, Et, !0), c.deltaX = c.deltaY = 0, we && we(c));
    }, I = c.onRelease = function(A) {
      if (!de(A, 1)) {
        $e(se ? s : ae, wt[1], Ct, !0);
        var C = !isNaN(c.y - c.startY), G = c.isDragging, h = G && (Math.abs(c.x - c.startX) > 3 || Math.abs(c.y - c.startY) > 3), M = vr(A);
        !h && C && (c._vx.reset(), c._vy.reset(), S && oe && Ie.delayedCall(0.08, function() {
          if (Cr() - ct > 300 && !A.defaultPrevented) {
            if (A.target.click)
              A.target.click();
            else if (ae.createEvent) {
              var E = ae.createEvent("MouseEvents");
              E.initMouseEvent("click", !0, !0, ut, 1, M.screenX, M.screenY, M.clientX, M.clientY, !1, !1, !1, !1, 0, null), A.target.dispatchEvent(E);
            }
          }
        })), c.isDragging = c.isGesturing = c.isPressed = !1, R && G && !se && Fe.restart(!0), Ye && yt(), U && G && U(c), Y && Y(c, h);
      }
    }, Qe = function(C) {
      return C.touches && C.touches.length > 1 && (c.isGesturing = !0) && le(C, c.isDragging);
    }, ze = function() {
      return (c.isGesturing = !1) || l(c);
    }, Xe = function(C) {
      if (!de(C)) {
        var G = ie(), h = ot();
        jt((G - St) * mt, (h - Ot) * mt, 1), St = G, Ot = h, R && Fe.restart(!0);
      }
    }, et = function(C) {
      if (!de(C)) {
        C = vr(C, S), fe && (ue = !0);
        var G = (C.deltaMode === 1 ? p : C.deltaMode === 2 ? ut.innerHeight : 1) * w;
        jt(C.deltaX * G, C.deltaY * G, 0), R && !se && Fe.restart(!0);
      }
    }, Mt = function(C) {
      if (!de(C)) {
        var G = C.clientX, h = C.clientY, M = G - c.x, E = h - c.y;
        c.x = G, c.y = h, V = !0, R && Fe.restart(!0), (M || E) && Lt(M, E);
      }
    }, At = function(C) {
      c.event = C, ee(c);
    }, xt = function(C) {
      c.event = C, pe(c);
    }, Wt = function(C) {
      return de(C) || vr(C, S) && Je(c);
    };
    Fe = c._dc = Ie.delayedCall(v || 0.25, nr).pause(), c.deltaX = c.deltaY = 0, c._vx = vn(0, 50, !0), c._vy = vn(0, 50, !0), c.scrollX = ie, c.scrollY = ot, c.isDragging = c.isGesturing = c.isPressed = !1, ao(this), c.enable = function(A) {
      return c.isEnabled || (He(vt ? ae : s, "scroll", mn), u.indexOf("scroll") >= 0 && He(vt ? ae : s, "scroll", Xe, Et, me), u.indexOf("wheel") >= 0 && He(s, "wheel", et, Et, me), (u.indexOf("touch") >= 0 && oo || u.indexOf("pointer") >= 0) && (He(s, wt[0], bt, Et, me), He(ae, wt[2], I), He(ae, wt[3], I), oe && He(s, "click", Gt, !0, !0), Je && He(s, "click", Wt), le && He(ae, "gesturestart", Qe), l && He(ae, "gestureend", ze), ee && He(s, Ut + "enter", At), pe && He(s, Ut + "leave", xt), ke && He(s, Ut + "move", Mt)), c.isEnabled = !0, c.isDragging = c.isGesturing = c.isPressed = V = Ye = !1, c._vx.reset(), c._vy.reset(), St = ie(), Ot = ot(), A && A.type && bt(A), Tt && Tt(c)), c;
    }, c.disable = function() {
      c.isEnabled && (lr.filter(function(A) {
        return A !== c && Rr(A.target);
      }).length || $e(vt ? ae : s, "scroll", mn), c.isPressed && (c._vx.reset(), c._vy.reset(), $e(se ? s : ae, wt[1], Ct, !0)), $e(vt ? ae : s, "scroll", Xe, me), $e(s, "wheel", et, me), $e(s, wt[0], bt, me), $e(ae, wt[2], I), $e(ae, wt[3], I), $e(s, "click", Gt, !0), $e(s, "click", Wt), $e(ae, "gesturestart", Qe), $e(ae, "gestureend", ze), $e(s, Ut + "enter", At), $e(s, Ut + "leave", xt), $e(s, Ut + "move", Mt), c.isEnabled = c.isPressed = c.isDragging = !1, _t && _t(c));
    }, c.kill = c.revert = function() {
      c.disable();
      var A = lr.indexOf(c);
      A >= 0 && lr.splice(A, 1), It === c && (It = 0);
    }, lr.push(c), se && Rr(s) && (It = c), c.enable(H);
  }, Lo(i, [{
    key: "velocityX",
    get: function() {
      return this._vx.getVelocity();
    }
  }, {
    key: "velocityY",
    get: function() {
      return this._vy.getVelocity();
    }
  }]), i;
}();
he.version = "3.13.0";
he.create = function(i) {
  return new he(i);
};
he.register = co;
he.getAll = function() {
  return lr.slice();
};
he.getById = function(i) {
  return lr.filter(function(e) {
    return e.vars.id === i;
  })[0];
};
so() && Ie.registerPlugin(he);
/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var m, ar, B, ne, lt, Z, Cn, rn, Fr, kr, br, Lr, je, sn, yn, Ge, Ln, Wn, sr, fo, ln, po, Ve, bn, go, ho, zt, xn, Rn, cr, kn, nn, wn, un, Wr = 1, Le = Date.now, cn = Le(), ht = 0, xr = 0, Bn = function(e, n, t) {
  var r = st(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
  return t["_" + n + "Clamp"] = r, r ? e.substr(6, e.length - 7) : e;
}, zn = function(e, n) {
  return n && (!st(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e;
}, zo = function i() {
  return xr && requestAnimationFrame(i);
}, Xn = function() {
  return sn = 1;
}, $n = function() {
  return sn = 0;
}, kt = function(e) {
  return e;
}, wr = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, _o = function() {
  return typeof window < "u";
}, mo = function() {
  return m || _o() && (m = window.gsap) && m.registerPlugin && m;
}, er = function(e) {
  return !!~Cn.indexOf(e);
}, vo = function(e) {
  return (e === "Height" ? kn : B["inner" + e]) || lt["client" + e] || Z["client" + e];
}, yo = function(e) {
  return Ht(e, "getBoundingClientRect") || (er(e) ? function() {
    return en.width = B.innerWidth, en.height = kn, en;
  } : function() {
    return Yt(e);
  });
}, Xo = function(e, n, t) {
  var r = t.d, a = t.d2, u = t.a;
  return (u = Ht(e, "getBoundingClientRect")) ? function() {
    return u()[r];
  } : function() {
    return (n ? vo(a) : e["client" + a]) || 0;
  };
}, $o = function(e, n) {
  return !n || ~Pt.indexOf(e) ? yo(e) : function() {
    return en;
  };
}, Dt = function(e, n) {
  var t = n.s, r = n.d2, a = n.d, u = n.a;
  return Math.max(0, (t = "scroll" + r) && (u = Ht(e, t)) ? u() - yo(e)()[a] : er(e) ? (lt[t] || Z[t]) - vo(r) : e[t] - e["offset" + r]);
}, Br = function(e, n) {
  for (var t = 0; t < sr.length; t += 3)
    (!n || ~n.indexOf(sr[t + 1])) && e(sr[t], sr[t + 1], sr[t + 2]);
}, st = function(e) {
  return typeof e == "string";
}, We = function(e) {
  return typeof e == "function";
}, Tr = function(e) {
  return typeof e == "number";
}, qt = function(e) {
  return typeof e == "object";
}, yr = function(e, n, t) {
  return e && e.progress(n ? 0 : 1) && t && e.pause();
}, fn = function(e, n) {
  if (e.enabled) {
    var t = e._ctx ? e._ctx.add(function() {
      return n(e);
    }) : n(e);
    t && t.totalTime && (e.callbackAnimation = t);
  }
}, or = Math.abs, bo = "left", xo = "top", Dn = "right", Pn = "bottom", Jt = "width", Zt = "height", Dr = "Right", Pr = "Left", Or = "Top", Mr = "Bottom", xe = "padding", pt = "margin", dr = "Width", On = "Height", Se = "px", gt = function(e) {
  return B.getComputedStyle(e);
}, Ho = function(e) {
  var n = gt(e).position;
  e.style.position = n === "absolute" || n === "fixed" ? n : "relative";
}, Hn = function(e, n) {
  for (var t in n)
    t in e || (e[t] = n[t]);
  return e;
}, Yt = function(e, n) {
  var t = n && gt(e)[yn] !== "matrix(1, 0, 0, 1, 0, 0)" && m.to(e, {
    x: 0,
    y: 0,
    xPercent: 0,
    yPercent: 0,
    rotation: 0,
    rotationX: 0,
    rotationY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0
  }).progress(1), r = e.getBoundingClientRect();
  return t && t.progress(0).kill(), r;
}, on = function(e, n) {
  var t = n.d2;
  return e["offset" + t] || e["client" + t] || 0;
}, wo = function(e) {
  var n = [], t = e.labels, r = e.duration(), a;
  for (a in t)
    n.push(t[a] / r);
  return n;
}, Vo = function(e) {
  return function(n) {
    return m.utils.snap(wo(e), n);
  };
}, Mn = function(e) {
  var n = m.utils.snap(e), t = Array.isArray(e) && e.slice(0).sort(function(r, a) {
    return r - a;
  });
  return t ? function(r, a, u) {
    u === void 0 && (u = 1e-3);
    var s;
    if (!a)
      return n(r);
    if (a > 0) {
      for (r -= u, s = 0; s < t.length; s++)
        if (t[s] >= r)
          return t[s];
      return t[s - 1];
    } else
      for (s = t.length, r += u; s--; )
        if (t[s] <= r)
          return t[s];
    return t[0];
  } : function(r, a, u) {
    u === void 0 && (u = 1e-3);
    var s = n(r);
    return !a || Math.abs(s - r) < u || s - r < 0 == a < 0 ? s : n(a < 0 ? r - e : r + e);
  };
}, Go = function(e) {
  return function(n, t) {
    return Mn(wo(e))(n, t.direction);
  };
}, zr = function(e, n, t, r) {
  return t.split(",").forEach(function(a) {
    return e(n, a, r);
  });
}, Oe = function(e, n, t, r, a) {
  return e.addEventListener(n, t, {
    passive: !r,
    capture: !!a
  });
}, Pe = function(e, n, t, r) {
  return e.removeEventListener(n, t, !!r);
}, Xr = function(e, n, t) {
  t = t && t.wheelHandler, t && (e(n, "wheel", t), e(n, "touchmove", t));
}, Vn = {
  startColor: "green",
  endColor: "red",
  indent: 0,
  fontSize: "16px",
  fontWeight: "normal"
}, $r = {
  toggleActions: "play",
  anticipatePin: 0
}, an = {
  top: 0,
  left: 0,
  center: 0.5,
  bottom: 1,
  right: 1
}, Kr = function(e, n) {
  if (st(e)) {
    var t = e.indexOf("="), r = ~t ? +(e.charAt(t - 1) + 1) * parseFloat(e.substr(t + 1)) : 0;
    ~t && (e.indexOf("%") > t && (r *= n / 100), e = e.substr(0, t - 1)), e = r + (e in an ? an[e] * n : ~e.indexOf("%") ? parseFloat(e) * n / 100 : parseFloat(e) || 0);
  }
  return e;
}, Hr = function(e, n, t, r, a, u, s, p) {
  var y = a.startColor, S = a.endColor, R = a.fontSize, v = a.indent, d = a.fontWeight, w = ne.createElement("div"), H = er(t) || Ht(t, "pinType") === "fixed", K = e.indexOf("scroller") !== -1, U = H ? Z : t, P = e.indexOf("start") !== -1, we = P ? y : S, Y = "border-color:" + we + ";font-size:" + R + ";color:" + we + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
  return Y += "position:" + ((K || p) && H ? "fixed;" : "absolute;"), (K || p || !H) && (Y += (r === Ce ? Dn : Pn) + ":" + (u + parseFloat(v)) + "px;"), s && (Y += "box-sizing:border-box;text-align:left;width:" + s.offsetWidth + "px;"), w._isStart = P, w.setAttribute("class", "gsap-marker-" + e + (n ? " marker-" + n : "")), w.style.cssText = Y, w.innerText = n || n === 0 ? e + "-" + n : e, U.children[0] ? U.insertBefore(w, U.children[0]) : U.appendChild(w), w._offset = w["offset" + r.op.d2], Jr(w, 0, r, P), w;
}, Jr = function(e, n, t, r) {
  var a = {
    display: "block"
  }, u = t[r ? "os2" : "p2"], s = t[r ? "p2" : "os2"];
  e._isFlipped = r, a[t.a + "Percent"] = r ? -100 : 0, a[t.a] = r ? "1px" : 0, a["border" + u + dr] = 1, a["border" + s + dr] = 0, a[t.p] = n + "px", m.set(e, a);
}, L = [], Tn = {}, Yr, Gn = function() {
  return Le() - ht > 34 && (Yr || (Yr = requestAnimationFrame(Nt)));
}, ir = function() {
  (!Ve || !Ve.isPressed || Ve.startX > Z.clientWidth) && (z.cache++, Ve ? Yr || (Yr = requestAnimationFrame(Nt)) : Nt(), ht || rr("scrollStart"), ht = Le());
}, dn = function() {
  ho = B.innerWidth, go = B.innerHeight;
}, Er = function(e) {
  z.cache++, (e === !0 || !je && !po && !ne.fullscreenElement && !ne.webkitFullscreenElement && (!bn || ho !== B.innerWidth || Math.abs(B.innerHeight - go) > B.innerHeight * 0.25)) && rn.restart(!0);
}, tr = {}, Uo = [], To = function i() {
  return Pe(X, "scrollEnd", i) || Kt(!0);
}, rr = function(e) {
  return tr[e] && tr[e].map(function(n) {
    return n();
  }) || Uo;
}, at = [], Eo = function(e) {
  for (var n = 0; n < at.length; n += 5)
    (!e || at[n + 4] && at[n + 4].query === e) && (at[n].style.cssText = at[n + 1], at[n].getBBox && at[n].setAttribute("transform", at[n + 2] || ""), at[n + 3].uncache = 1);
}, An = function(e, n) {
  var t;
  for (Ge = 0; Ge < L.length; Ge++)
    t = L[Ge], t && (!n || t._ctx === n) && (e ? t.kill(1) : t.revert(!0, !0));
  nn = !0, n && Eo(n), n || rr("revert");
}, So = function(e, n) {
  z.cache++, (n || !Ue) && z.forEach(function(t) {
    return We(t) && t.cacheID++ && (t.rec = 0);
  }), st(e) && (B.history.scrollRestoration = Rn = e);
}, Ue, Qt = 0, Un, qo = function() {
  if (Un !== Qt) {
    var e = Un = Qt;
    requestAnimationFrame(function() {
      return e === Qt && Kt(!0);
    });
  }
}, Co = function() {
  Z.appendChild(cr), kn = !Ve && cr.offsetHeight || B.innerHeight, Z.removeChild(cr);
}, qn = function(e) {
  return Fr(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(n) {
    return n.style.display = e ? "none" : "block";
  });
}, Kt = function(e, n) {
  if (lt = ne.documentElement, Z = ne.body, Cn = [B, ne, lt, Z], ht && !e && !nn) {
    Oe(X, "scrollEnd", To);
    return;
  }
  Co(), Ue = X.isRefreshing = !0, z.forEach(function(r) {
    return We(r) && ++r.cacheID && (r.rec = r());
  });
  var t = rr("refreshInit");
  fo && X.sort(), n || An(), z.forEach(function(r) {
    We(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
  }), L.slice(0).forEach(function(r) {
    return r.refresh();
  }), nn = !1, L.forEach(function(r) {
    if (r._subPinOffset && r.pin) {
      var a = r.vars.horizontal ? "offsetWidth" : "offsetHeight", u = r.pin[a];
      r.revert(!0, 1), r.adjustPinSpacing(r.pin[a] - u), r.refresh();
    }
  }), wn = 1, qn(!0), L.forEach(function(r) {
    var a = Dt(r.scroller, r._dir), u = r.vars.end === "max" || r._endClamp && r.end > a, s = r._startClamp && r.start >= a;
    (u || s) && r.setPositions(s ? a - 1 : r.start, u ? Math.max(s ? a : r.start + 1, a) : r.end, !0);
  }), qn(!1), wn = 0, t.forEach(function(r) {
    return r && r.render && r.render(-1);
  }), z.forEach(function(r) {
    We(r) && (r.smooth && requestAnimationFrame(function() {
      return r.target.style.scrollBehavior = "smooth";
    }), r.rec && r(r.rec));
  }), So(Rn, 1), rn.pause(), Qt++, Ue = 2, Nt(2), L.forEach(function(r) {
    return We(r.vars.onRefresh) && r.vars.onRefresh(r);
  }), Ue = X.isRefreshing = !1, rr("refresh");
}, En = 0, Zr = 1, Ar, Nt = function(e) {
  if (e === 2 || !Ue && !nn) {
    X.isUpdating = !0, Ar && Ar.update(0);
    var n = L.length, t = Le(), r = t - cn >= 50, a = n && L[0].scroll();
    if (Zr = En > a ? -1 : 1, Ue || (En = a), r && (ht && !sn && t - ht > 200 && (ht = 0, rr("scrollEnd")), br = cn, cn = t), Zr < 0) {
      for (Ge = n; Ge-- > 0; )
        L[Ge] && L[Ge].update(0, r);
      Zr = 1;
    } else
      for (Ge = 0; Ge < n; Ge++)
        L[Ge] && L[Ge].update(0, r);
    X.isUpdating = !1;
  }
  Yr = 0;
}, Sn = [bo, xo, Pn, Dn, pt + Mr, pt + Dr, pt + Or, pt + Pr, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], Qr = Sn.concat([Jt, Zt, "boxSizing", "max" + dr, "max" + On, "position", pt, xe, xe + Or, xe + Dr, xe + Mr, xe + Pr]), Ko = function(e, n, t) {
  fr(t);
  var r = e._gsap;
  if (r.spacerIsNative)
    fr(r.spacerState);
  else if (e._gsap.swappedIn) {
    var a = n.parentNode;
    a && (a.insertBefore(e, n), a.removeChild(n));
  }
  e._gsap.swappedIn = !1;
}, pn = function(e, n, t, r) {
  if (!e._gsap.swappedIn) {
    for (var a = Sn.length, u = n.style, s = e.style, p; a--; )
      p = Sn[a], u[p] = t[p];
    u.position = t.position === "absolute" ? "absolute" : "relative", t.display === "inline" && (u.display = "inline-block"), s[Pn] = s[Dn] = "auto", u.flexBasis = t.flexBasis || "auto", u.overflow = "visible", u.boxSizing = "border-box", u[Jt] = on(e, qe) + Se, u[Zt] = on(e, Ce) + Se, u[xe] = s[pt] = s[xo] = s[bo] = "0", fr(r), s[Jt] = s["max" + dr] = t[Jt], s[Zt] = s["max" + On] = t[Zt], s[xe] = t[xe], e.parentNode !== n && (e.parentNode.insertBefore(n, e), n.appendChild(e)), e._gsap.swappedIn = !0;
  }
}, Jo = /([A-Z])/g, fr = function(e) {
  if (e) {
    var n = e.t.style, t = e.length, r = 0, a, u;
    for ((e.t._gsap || m.core.getCache(e.t)).uncache = 1; r < t; r += 2)
      u = e[r + 1], a = e[r], u ? n[a] = u : n[a] && n.removeProperty(a.replace(Jo, "-$1").toLowerCase());
  }
}, Vr = function(e) {
  for (var n = Qr.length, t = e.style, r = [], a = 0; a < n; a++)
    r.push(Qr[a], t[Qr[a]]);
  return r.t = e, r;
}, Zo = function(e, n, t) {
  for (var r = [], a = e.length, u = t ? 8 : 0, s; u < a; u += 2)
    s = e[u], r.push(s, s in n ? n[s] : e[u + 1]);
  return r.t = e.t, r;
}, en = {
  left: 0,
  top: 0
}, Kn = function(e, n, t, r, a, u, s, p, y, S, R, v, d, w) {
  We(e) && (e = e(p)), st(e) && e.substr(0, 3) === "max" && (e = v + (e.charAt(4) === "=" ? Kr("0" + e.substr(3), t) : 0));
  var H = d ? d.time() : 0, K, U, P;
  if (d && d.seek(0), isNaN(e) || (e = +e), Tr(e))
    d && (e = m.utils.mapRange(d.scrollTrigger.start, d.scrollTrigger.end, 0, v, e)), s && Jr(s, t, r, !0);
  else {
    We(n) && (n = n(p));
    var we = (e || "0").split(" "), Y, Ke, te, O;
    P = rt(n, p) || Z, Y = Yt(P) || {}, (!Y || !Y.left && !Y.top) && gt(P).display === "none" && (O = P.style.display, P.style.display = "block", Y = Yt(P), O ? P.style.display = O : P.style.removeProperty("display")), Ke = Kr(we[0], Y[r.d]), te = Kr(we[1] || "0", t), e = Y[r.p] - y[r.p] - S + Ke + a - te, s && Jr(s, te, r, t - te < 20 || s._isStart && te > 20), t -= t - te;
  }
  if (w && (p[w] = e || -1e-3, e < 0 && (e = 0)), u) {
    var Me = e + t, Ae = u._isStart;
    K = "scroll" + r.d2, Jr(u, Me, r, Ae && Me > 20 || !Ae && (R ? Math.max(Z[K], lt[K]) : u.parentNode[K]) <= Me + 1), R && (y = Yt(s), R && (u.style[r.op.p] = y[r.op.p] - r.op.m - u._offset + Se));
  }
  return d && P && (K = Yt(P), d.seek(v), U = Yt(P), d._caScrollDist = K[r.p] - U[r.p], e = e / d._caScrollDist * v), d && d.seek(H), d ? e : Math.round(e);
}, Qo = /(webkit|moz|length|cssText|inset)/i, Jn = function(e, n, t, r) {
  if (e.parentNode !== n) {
    var a = e.style, u, s;
    if (n === Z) {
      e._stOrig = a.cssText, s = gt(e);
      for (u in s)
        !+u && !Qo.test(u) && s[u] && typeof a[u] == "string" && u !== "0" && (a[u] = s[u]);
      a.top = t, a.left = r;
    } else
      a.cssText = e._stOrig;
    m.core.getCache(e).uncache = 1, n.appendChild(e);
  }
}, Ro = function(e, n, t) {
  var r = n, a = r;
  return function(u) {
    var s = Math.round(e());
    return s !== r && s !== a && Math.abs(s - r) > 3 && Math.abs(s - a) > 3 && (u = s, t && t()), a = r, r = Math.round(u), r;
  };
}, Gr = function(e, n, t) {
  var r = {};
  r[n.p] = "+=" + t, m.set(e, r);
}, Zn = function(e, n) {
  var t = Vt(e, n), r = "_scroll" + n.p2, a = function u(s, p, y, S, R) {
    var v = u.tween, d = p.onComplete, w = {};
    y = y || t();
    var H = Ro(t, y, function() {
      v.kill(), u.tween = 0;
    });
    return R = S && R || 0, S = S || s - y, v && v.kill(), p[r] = s, p.inherit = !1, p.modifiers = w, w[r] = function() {
      return H(y + S * v.ratio + R * v.ratio * v.ratio);
    }, p.onUpdate = function() {
      z.cache++, u.tween && Nt();
    }, p.onComplete = function() {
      u.tween = 0, d && d.call(v);
    }, v = u.tween = m.to(e, p), v;
  };
  return e[r] = t, t.wheelHandler = function() {
    return a.tween && a.tween.kill() && (a.tween = 0);
  }, Oe(e, "wheel", t.wheelHandler), X.isTouch && Oe(e, "touchmove", t.wheelHandler), a;
}, X = /* @__PURE__ */ function() {
  function i(n, t) {
    ar || i.register(m) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), xn(this), this.init(n, t);
  }
  var e = i.prototype;
  return e.init = function(t, r) {
    if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !xr) {
      this.update = this.refresh = this.kill = kt;
      return;
    }
    t = Hn(st(t) || Tr(t) || t.nodeType ? {
      trigger: t
    } : t, $r);
    var a = t, u = a.onUpdate, s = a.toggleClass, p = a.id, y = a.onToggle, S = a.onRefresh, R = a.scrub, v = a.trigger, d = a.pin, w = a.pinSpacing, H = a.invalidateOnRefresh, K = a.anticipatePin, U = a.onScrubComplete, P = a.onSnapComplete, we = a.once, Y = a.snap, Ke = a.pinReparent, te = a.pinSpacer, O = a.containerAnimation, Me = a.fastScrollEnd, Ae = a.preventOverlaps, T = t.horizontal || t.containerAnimation && t.horizontal !== !1 ? qe : Ce, _e = !R && R !== 0, D = rt(t.scroller || B), Re = m.core.getCache(D), ee = er(D), pe = ("pinType" in t ? t.pinType : Ht(D, "pinType") || ee && "fixed") === "fixed", ke = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack], J = _e && t.toggleActions.split(" "), se = "markers" in t ? t.markers : $r.markers, le = ee ? 0 : parseFloat(gt(D)["border" + T.p2 + dr]) || 0, l = this, fe = t.onRefreshInit && function() {
      return t.onRefreshInit(l);
    }, Tt = Xo(D, ee, T), _t = $o(D, ee), Je = 0, mt = 0, me = 0, oe = Vt(D, T), ve, ye, nt, Fe, Ye, V, ue, Te, Ee, c, Ne, Ze, Et, ie, ot, St, Ot, ge, vt, ae, it, Be, ct, Gt, de, nr, yt, jt, Lt, Ct, bt, I, Qe, ze, Xe, et, Mt, At, xt;
    if (l._startClamp = l._endClamp = !1, l._dir = T, K *= 45, l.scroller = D, l.scroll = O ? O.time.bind(O) : oe, Fe = oe(), l.vars = t, r = r || t.animation, "refreshPriority" in t && (fo = 1, t.refreshPriority === -9999 && (Ar = l)), Re.tweenScroll = Re.tweenScroll || {
      top: Zn(D, Ce),
      left: Zn(D, qe)
    }, l.tweenTo = ve = Re.tweenScroll[T.p], l.scrubDuration = function(h) {
      Qe = Tr(h) && h, Qe ? I ? I.duration(h) : I = m.to(r, {
        ease: "expo",
        totalProgress: "+=0",
        inherit: !1,
        duration: Qe,
        paused: !0,
        onComplete: function() {
          return U && U(l);
        }
      }) : (I && I.progress(1).kill(), I = 0);
    }, r && (r.vars.lazy = !1, r._initted && !l.isReverted || r.vars.immediateRender !== !1 && t.immediateRender !== !1 && r.duration() && r.render(0, !0, !0), l.animation = r.pause(), r.scrollTrigger = l, l.scrubDuration(R), Ct = 0, p || (p = r.vars.id)), Y && ((!qt(Y) || Y.push) && (Y = {
      snapTo: Y
    }), "scrollBehavior" in Z.style && m.set(ee ? [Z, lt] : D, {
      scrollBehavior: "auto"
    }), z.forEach(function(h) {
      return We(h) && h.target === (ee ? ne.scrollingElement || lt : D) && (h.smooth = !1);
    }), nt = We(Y.snapTo) ? Y.snapTo : Y.snapTo === "labels" ? Vo(r) : Y.snapTo === "labelsDirectional" ? Go(r) : Y.directional !== !1 ? function(h, M) {
      return Mn(Y.snapTo)(h, Le() - mt < 500 ? 0 : M.direction);
    } : m.utils.snap(Y.snapTo), ze = Y.duration || {
      min: 0.1,
      max: 2
    }, ze = qt(ze) ? kr(ze.min, ze.max) : kr(ze, ze), Xe = m.delayedCall(Y.delay || Qe / 2 || 0.1, function() {
      var h = oe(), M = Le() - mt < 500, E = ve.tween;
      if ((M || Math.abs(l.getVelocity()) < 10) && !E && !sn && Je !== h) {
        var F = (h - V) / ie, be = r && !_e ? r.totalProgress() : F, $ = M ? 0 : (be - bt) / (Le() - br) * 1e3 || 0, o = m.utils.clamp(-F, 1 - F, or($ / 2) * $ / 0.185), f = F + (Y.inertia === !1 ? 0 : o), g, _, b = Y, N = b.onStart, x = b.onInterrupt, k = b.onComplete;
        if (g = nt(f, l), Tr(g) || (g = f), _ = Math.max(0, Math.round(V + g * ie)), h <= ue && h >= V && _ !== h) {
          if (E && !E._initted && E.data <= or(_ - h))
            return;
          Y.inertia === !1 && (o = g - F), ve(_, {
            duration: ze(or(Math.max(or(f - be), or(g - be)) * 0.185 / $ / 0.05 || 0)),
            ease: Y.ease || "power3",
            data: or(_ - h),
            // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
            onInterrupt: function() {
              return Xe.restart(!0) && x && x(l);
            },
            onComplete: function() {
              l.update(), Je = oe(), r && !_e && (I ? I.resetTo("totalProgress", g, r._tTime / r._tDur) : r.progress(g)), Ct = bt = r && !_e ? r.totalProgress() : l.progress, P && P(l), k && k(l);
            }
          }, h, o * ie, _ - h - o * ie), N && N(l, ve.tween);
        }
      } else l.isActive && Je !== h && Xe.restart(!0);
    }).pause()), p && (Tn[p] = l), v = l.trigger = rt(v || d !== !0 && d), xt = v && v._gsap && v._gsap.stRevert, xt && (xt = xt(l)), d = d === !0 ? v : rt(d), st(s) && (s = {
      targets: v,
      className: s
    }), d && (w === !1 || w === pt || (w = !w && d.parentNode && d.parentNode.style && gt(d.parentNode).display === "flex" ? !1 : xe), l.pin = d, ye = m.core.getCache(d), ye.spacer ? ot = ye.pinState : (te && (te = rt(te), te && !te.nodeType && (te = te.current || te.nativeElement), ye.spacerIsNative = !!te, te && (ye.spacerState = Vr(te))), ye.spacer = ge = te || ne.createElement("div"), ge.classList.add("pin-spacer"), p && ge.classList.add("pin-spacer-" + p), ye.pinState = ot = Vr(d)), t.force3D !== !1 && m.set(d, {
      force3D: !0
    }), l.spacer = ge = ye.spacer, Lt = gt(d), Gt = Lt[w + T.os2], ae = m.getProperty(d), it = m.quickSetter(d, T.a, Se), pn(d, ge, Lt), Ot = Vr(d)), se) {
      Ze = qt(se) ? Hn(se, Vn) : Vn, c = Hr("scroller-start", p, D, T, Ze, 0), Ne = Hr("scroller-end", p, D, T, Ze, 0, c), vt = c["offset" + T.op.d2];
      var Wt = rt(Ht(D, "content") || D);
      Te = this.markerStart = Hr("start", p, Wt, T, Ze, vt, 0, O), Ee = this.markerEnd = Hr("end", p, Wt, T, Ze, vt, 0, O), O && (At = m.quickSetter([Te, Ee], T.a, Se)), !pe && !(Pt.length && Ht(D, "fixedMarkers") === !0) && (Ho(ee ? Z : D), m.set([c, Ne], {
        force3D: !0
      }), nr = m.quickSetter(c, T.a, Se), jt = m.quickSetter(Ne, T.a, Se));
    }
    if (O) {
      var A = O.vars.onUpdate, C = O.vars.onUpdateParams;
      O.eventCallback("onUpdate", function() {
        l.update(0, 0, 1), A && A.apply(O, C || []);
      });
    }
    if (l.previous = function() {
      return L[L.indexOf(l) - 1];
    }, l.next = function() {
      return L[L.indexOf(l) + 1];
    }, l.revert = function(h, M) {
      if (!M)
        return l.kill(!0);
      var E = h !== !1 || !l.enabled, F = je;
      E !== l.isReverted && (E && (et = Math.max(oe(), l.scroll.rec || 0), me = l.progress, Mt = r && r.progress()), Te && [Te, Ee, c, Ne].forEach(function(be) {
        return be.style.display = E ? "none" : "block";
      }), E && (je = l, l.update(E)), d && (!Ke || !l.isActive) && (E ? Ko(d, ge, ot) : pn(d, ge, gt(d), de)), E || l.update(E), je = F, l.isReverted = E);
    }, l.refresh = function(h, M, E, F) {
      if (!((je || !l.enabled) && !M)) {
        if (d && h && ht) {
          Oe(i, "scrollEnd", To);
          return;
        }
        !Ue && fe && fe(l), je = l, ve.tween && !E && (ve.tween.kill(), ve.tween = 0), I && I.pause(), H && r && (r.revert({
          kill: !1
        }).invalidate(), r.getChildren && r.getChildren(!0, !0, !1).forEach(function(Bt) {
          return Bt.vars.immediateRender && Bt.render(0, !0, !0);
        })), l.isReverted || l.revert(!0, !0), l._subPinOffset = !1;
        var be = Tt(), $ = _t(), o = O ? O.duration() : Dt(D, T), f = ie <= 0.01 || !ie, g = 0, _ = F || 0, b = qt(E) ? E.end : t.end, N = t.endTrigger || v, x = qt(E) ? E.start : t.start || (t.start === 0 || !v ? 0 : d ? "0 0" : "0 100%"), k = l.pinnedContainer = t.pinnedContainer && rt(t.pinnedContainer, l), re = v && Math.max(0, L.indexOf(l)) || 0, j = re, W, Q, tt, ft, q, ce, dt, pr, Fn, gr, Rt, hr, Ir;
        for (se && qt(E) && (hr = m.getProperty(c, T.p), Ir = m.getProperty(Ne, T.p)); j-- > 0; )
          ce = L[j], ce.end || ce.refresh(0, 1) || (je = l), dt = ce.pin, dt && (dt === v || dt === d || dt === k) && !ce.isReverted && (gr || (gr = []), gr.unshift(ce), ce.revert(!0, !0)), ce !== L[j] && (re--, j--);
        for (We(x) && (x = x(l)), x = Bn(x, "start", l), V = Kn(x, v, be, T, oe(), Te, c, l, $, le, pe, o, O, l._startClamp && "_startClamp") || (d ? -1e-3 : 0), We(b) && (b = b(l)), st(b) && !b.indexOf("+=") && (~b.indexOf(" ") ? b = (st(x) ? x.split(" ")[0] : "") + b : (g = Kr(b.substr(2), be), b = st(x) ? x : (O ? m.utils.mapRange(0, O.duration(), O.scrollTrigger.start, O.scrollTrigger.end, V) : V) + g, N = v)), b = Bn(b, "end", l), ue = Math.max(V, Kn(b || (N ? "100% 0" : o), N, be, T, oe() + g, Ee, Ne, l, $, le, pe, o, O, l._endClamp && "_endClamp")) || -1e-3, g = 0, j = re; j--; )
          ce = L[j], dt = ce.pin, dt && ce.start - ce._pinPush <= V && !O && ce.end > 0 && (W = ce.end - (l._startClamp ? Math.max(0, ce.start) : ce.start), (dt === v && ce.start - ce._pinPush < V || dt === k) && isNaN(x) && (g += W * (1 - ce.progress)), dt === d && (_ += W));
        if (V += g, ue += g, l._startClamp && (l._startClamp += g), l._endClamp && !Ue && (l._endClamp = ue || -1e-3, ue = Math.min(ue, Dt(D, T))), ie = ue - V || (V -= 0.01) && 1e-3, f && (me = m.utils.clamp(0, 1, m.utils.normalize(V, ue, et))), l._pinPush = _, Te && g && (W = {}, W[T.a] = "+=" + g, k && (W[T.p] = "-=" + oe()), m.set([Te, Ee], W)), d && !(wn && l.end >= Dt(D, T)))
          W = gt(d), ft = T === Ce, tt = oe(), Be = parseFloat(ae(T.a)) + _, !o && ue > 1 && (Rt = (ee ? ne.scrollingElement || lt : D).style, Rt = {
            style: Rt,
            value: Rt["overflow" + T.a.toUpperCase()]
          }, ee && gt(Z)["overflow" + T.a.toUpperCase()] !== "scroll" && (Rt.style["overflow" + T.a.toUpperCase()] = "scroll")), pn(d, ge, W), Ot = Vr(d), Q = Yt(d, !0), pr = pe && Vt(D, ft ? qe : Ce)(), w ? (de = [w + T.os2, ie + _ + Se], de.t = ge, j = w === xe ? on(d, T) + ie + _ : 0, j && (de.push(T.d, j + Se), ge.style.flexBasis !== "auto" && (ge.style.flexBasis = j + Se)), fr(de), k && L.forEach(function(Bt) {
            Bt.pin === k && Bt.vars.pinSpacing !== !1 && (Bt._subPinOffset = !0);
          }), pe && oe(et)) : (j = on(d, T), j && ge.style.flexBasis !== "auto" && (ge.style.flexBasis = j + Se)), pe && (q = {
            top: Q.top + (ft ? tt - V : pr) + Se,
            left: Q.left + (ft ? pr : tt - V) + Se,
            boxSizing: "border-box",
            position: "fixed"
          }, q[Jt] = q["max" + dr] = Math.ceil(Q.width) + Se, q[Zt] = q["max" + On] = Math.ceil(Q.height) + Se, q[pt] = q[pt + Or] = q[pt + Dr] = q[pt + Mr] = q[pt + Pr] = "0", q[xe] = W[xe], q[xe + Or] = W[xe + Or], q[xe + Dr] = W[xe + Dr], q[xe + Mr] = W[xe + Mr], q[xe + Pr] = W[xe + Pr], St = Zo(ot, q, Ke), Ue && oe(0)), r ? (Fn = r._initted, ln(1), r.render(r.duration(), !0, !0), ct = ae(T.a) - Be + ie + _, yt = Math.abs(ie - ct) > 1, pe && yt && St.splice(St.length - 2, 2), r.render(0, !0, !0), Fn || r.invalidate(!0), r.parent || r.totalTime(r.totalTime()), ln(0)) : ct = ie, Rt && (Rt.value ? Rt.style["overflow" + T.a.toUpperCase()] = Rt.value : Rt.style.removeProperty("overflow-" + T.a));
        else if (v && oe() && !O)
          for (Q = v.parentNode; Q && Q !== Z; )
            Q._pinOffset && (V -= Q._pinOffset, ue -= Q._pinOffset), Q = Q.parentNode;
        gr && gr.forEach(function(Bt) {
          return Bt.revert(!1, !0);
        }), l.start = V, l.end = ue, Fe = Ye = Ue ? et : oe(), !O && !Ue && (Fe < et && oe(et), l.scroll.rec = 0), l.revert(!1, !0), mt = Le(), Xe && (Je = -1, Xe.restart(!0)), je = 0, r && _e && (r._initted || Mt) && r.progress() !== Mt && r.progress(Mt || 0, !0).render(r.time(), !0, !0), (f || me !== l.progress || O || H || r && !r._initted) && (r && !_e && (r._initted || me || r.vars.immediateRender !== !1) && r.totalProgress(O && V < -1e-3 && !me ? m.utils.normalize(V, ue, 0) : me, !0), l.progress = f || (Fe - V) / ie === me ? 0 : me), d && w && (ge._pinOffset = Math.round(l.progress * ct)), I && I.invalidate(), isNaN(hr) || (hr -= m.getProperty(c, T.p), Ir -= m.getProperty(Ne, T.p), Gr(c, T, hr), Gr(Te, T, hr - (F || 0)), Gr(Ne, T, Ir), Gr(Ee, T, Ir - (F || 0))), f && !Ue && l.update(), S && !Ue && !Et && (Et = !0, S(l), Et = !1);
      }
    }, l.getVelocity = function() {
      return (oe() - Ye) / (Le() - br) * 1e3 || 0;
    }, l.endAnimation = function() {
      yr(l.callbackAnimation), r && (I ? I.progress(1) : r.paused() ? _e || yr(r, l.direction < 0, 1) : yr(r, r.reversed()));
    }, l.labelToScroll = function(h) {
      return r && r.labels && (V || l.refresh() || V) + r.labels[h] / r.duration() * ie || 0;
    }, l.getTrailing = function(h) {
      var M = L.indexOf(l), E = l.direction > 0 ? L.slice(0, M).reverse() : L.slice(M + 1);
      return (st(h) ? E.filter(function(F) {
        return F.vars.preventOverlaps === h;
      }) : E).filter(function(F) {
        return l.direction > 0 ? F.end <= V : F.start >= ue;
      });
    }, l.update = function(h, M, E) {
      if (!(O && !E && !h)) {
        var F = Ue === !0 ? et : l.scroll(), be = h ? 0 : (F - V) / ie, $ = be < 0 ? 0 : be > 1 ? 1 : be || 0, o = l.progress, f, g, _, b, N, x, k, re;
        if (M && (Ye = Fe, Fe = O ? oe() : F, Y && (bt = Ct, Ct = r && !_e ? r.totalProgress() : $)), K && d && !je && !Wr && ht && (!$ && V < F + (F - Ye) / (Le() - br) * K ? $ = 1e-4 : $ === 1 && ue > F + (F - Ye) / (Le() - br) * K && ($ = 0.9999)), $ !== o && l.enabled) {
          if (f = l.isActive = !!$ && $ < 1, g = !!o && o < 1, x = f !== g, N = x || !!$ != !!o, l.direction = $ > o ? 1 : -1, l.progress = $, N && !je && (_ = $ && !o ? 0 : $ === 1 ? 1 : o === 1 ? 2 : 3, _e && (b = !x && J[_ + 1] !== "none" && J[_ + 1] || J[_], re = r && (b === "complete" || b === "reset" || b in r))), Ae && (x || re) && (re || R || !r) && (We(Ae) ? Ae(l) : l.getTrailing(Ae).forEach(function(tt) {
            return tt.endAnimation();
          })), _e || (I && !je && !Wr ? (I._dp._time - I._start !== I._time && I.render(I._dp._time - I._start), I.resetTo ? I.resetTo("totalProgress", $, r._tTime / r._tDur) : (I.vars.totalProgress = $, I.invalidate().restart())) : r && r.totalProgress($, !!(je && (mt || h)))), d) {
            if (h && w && (ge.style[w + T.os2] = Gt), !pe)
              it(wr(Be + ct * $));
            else if (N) {
              if (k = !h && $ > o && ue + 1 > F && F + 1 >= Dt(D, T), Ke)
                if (!h && (f || k)) {
                  var j = Yt(d, !0), W = F - V;
                  Jn(d, Z, j.top + (T === Ce ? W : 0) + Se, j.left + (T === Ce ? 0 : W) + Se);
                } else
                  Jn(d, ge);
              fr(f || k ? St : Ot), yt && $ < 1 && f || it(Be + ($ === 1 && !k ? ct : 0));
            }
          }
          Y && !ve.tween && !je && !Wr && Xe.restart(!0), s && (x || we && $ && ($ < 1 || !un)) && Fr(s.targets).forEach(function(tt) {
            return tt.classList[f || we ? "add" : "remove"](s.className);
          }), u && !_e && !h && u(l), N && !je ? (_e && (re && (b === "complete" ? r.pause().totalProgress(1) : b === "reset" ? r.restart(!0).pause() : b === "restart" ? r.restart(!0) : r[b]()), u && u(l)), (x || !un) && (y && x && fn(l, y), ke[_] && fn(l, ke[_]), we && ($ === 1 ? l.kill(!1, 1) : ke[_] = 0), x || (_ = $ === 1 ? 1 : 3, ke[_] && fn(l, ke[_]))), Me && !f && Math.abs(l.getVelocity()) > (Tr(Me) ? Me : 2500) && (yr(l.callbackAnimation), I ? I.progress(1) : yr(r, b === "reverse" ? 1 : !$, 1))) : _e && u && !je && u(l);
        }
        if (jt) {
          var Q = O ? F / O.duration() * (O._caScrollDist || 0) : F;
          nr(Q + (c._isFlipped ? 1 : 0)), jt(Q);
        }
        At && At(-F / O.duration() * (O._caScrollDist || 0));
      }
    }, l.enable = function(h, M) {
      l.enabled || (l.enabled = !0, Oe(D, "resize", Er), ee || Oe(D, "scroll", ir), fe && Oe(i, "refreshInit", fe), h !== !1 && (l.progress = me = 0, Fe = Ye = Je = oe()), M !== !1 && l.refresh());
    }, l.getTween = function(h) {
      return h && ve ? ve.tween : I;
    }, l.setPositions = function(h, M, E, F) {
      if (O) {
        var be = O.scrollTrigger, $ = O.duration(), o = be.end - be.start;
        h = be.start + o * h / $, M = be.start + o * M / $;
      }
      l.refresh(!1, !1, {
        start: zn(h, E && !!l._startClamp),
        end: zn(M, E && !!l._endClamp)
      }, F), l.update();
    }, l.adjustPinSpacing = function(h) {
      if (de && h) {
        var M = de.indexOf(T.d) + 1;
        de[M] = parseFloat(de[M]) + h + Se, de[1] = parseFloat(de[1]) + h + Se, fr(de);
      }
    }, l.disable = function(h, M) {
      if (l.enabled && (h !== !1 && l.revert(!0, !0), l.enabled = l.isActive = !1, M || I && I.pause(), et = 0, ye && (ye.uncache = 1), fe && Pe(i, "refreshInit", fe), Xe && (Xe.pause(), ve.tween && ve.tween.kill() && (ve.tween = 0)), !ee)) {
        for (var E = L.length; E--; )
          if (L[E].scroller === D && L[E] !== l)
            return;
        Pe(D, "resize", Er), ee || Pe(D, "scroll", ir);
      }
    }, l.kill = function(h, M) {
      l.disable(h, M), I && !M && I.kill(), p && delete Tn[p];
      var E = L.indexOf(l);
      E >= 0 && L.splice(E, 1), E === Ge && Zr > 0 && Ge--, E = 0, L.forEach(function(F) {
        return F.scroller === l.scroller && (E = 1);
      }), E || Ue || (l.scroll.rec = 0), r && (r.scrollTrigger = null, h && r.revert({
        kill: !1
      }), M || r.kill()), Te && [Te, Ee, c, Ne].forEach(function(F) {
        return F.parentNode && F.parentNode.removeChild(F);
      }), Ar === l && (Ar = 0), d && (ye && (ye.uncache = 1), E = 0, L.forEach(function(F) {
        return F.pin === d && E++;
      }), E || (ye.spacer = 0)), t.onKill && t.onKill(l);
    }, L.push(l), l.enable(!1, !1), xt && xt(l), r && r.add && !ie) {
      var G = l.update;
      l.update = function() {
        l.update = G, z.cache++, V || ue || l.refresh();
      }, m.delayedCall(0.01, l.update), ie = 0.01, V = ue = 0;
    } else
      l.refresh();
    d && qo();
  }, i.register = function(t) {
    return ar || (m = t || mo(), _o() && window.document && i.enable(), ar = xr), ar;
  }, i.defaults = function(t) {
    if (t)
      for (var r in t)
        $r[r] = t[r];
    return $r;
  }, i.disable = function(t, r) {
    xr = 0, L.forEach(function(u) {
      return u[r ? "kill" : "disable"](t);
    }), Pe(B, "wheel", ir), Pe(ne, "scroll", ir), clearInterval(Lr), Pe(ne, "touchcancel", kt), Pe(Z, "touchstart", kt), zr(Pe, ne, "pointerdown,touchstart,mousedown", Xn), zr(Pe, ne, "pointerup,touchend,mouseup", $n), rn.kill(), Br(Pe);
    for (var a = 0; a < z.length; a += 3)
      Xr(Pe, z[a], z[a + 1]), Xr(Pe, z[a], z[a + 2]);
  }, i.enable = function() {
    if (B = window, ne = document, lt = ne.documentElement, Z = ne.body, m && (Fr = m.utils.toArray, kr = m.utils.clamp, xn = m.core.context || kt, ln = m.core.suppressOverwrites || kt, Rn = B.history.scrollRestoration || "auto", En = B.pageYOffset || 0, m.core.globals("ScrollTrigger", i), Z)) {
      xr = 1, cr = document.createElement("div"), cr.style.height = "100vh", cr.style.position = "absolute", Co(), zo(), he.register(m), i.isTouch = he.isTouch, zt = he.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), bn = he.isTouch === 1, Oe(B, "wheel", ir), Cn = [B, ne, lt, Z], m.matchMedia ? (i.matchMedia = function(y) {
        var S = m.matchMedia(), R;
        for (R in y)
          S.add(R, y[R]);
        return S;
      }, m.addEventListener("matchMediaInit", function() {
        return An();
      }), m.addEventListener("matchMediaRevert", function() {
        return Eo();
      }), m.addEventListener("matchMedia", function() {
        Kt(0, 1), rr("matchMedia");
      }), m.matchMedia().add("(orientation: portrait)", function() {
        return dn(), dn;
      })) : console.warn("Requires GSAP 3.11.0 or later"), dn(), Oe(ne, "scroll", ir);
      var t = Z.hasAttribute("style"), r = Z.style, a = r.borderTopStyle, u = m.core.Animation.prototype, s, p;
      for (u.revert || Object.defineProperty(u, "revert", {
        value: function() {
          return this.time(-0.01, !0);
        }
      }), r.borderTopStyle = "solid", s = Yt(Z), Ce.m = Math.round(s.top + Ce.sc()) || 0, qe.m = Math.round(s.left + qe.sc()) || 0, a ? r.borderTopStyle = a : r.removeProperty("border-top-style"), t || (Z.setAttribute("style", ""), Z.removeAttribute("style")), Lr = setInterval(Gn, 250), m.delayedCall(0.5, function() {
        return Wr = 0;
      }), Oe(ne, "touchcancel", kt), Oe(Z, "touchstart", kt), zr(Oe, ne, "pointerdown,touchstart,mousedown", Xn), zr(Oe, ne, "pointerup,touchend,mouseup", $n), yn = m.utils.checkPrefix("transform"), Qr.push(yn), ar = Le(), rn = m.delayedCall(0.2, Kt).pause(), sr = [ne, "visibilitychange", function() {
        var y = B.innerWidth, S = B.innerHeight;
        ne.hidden ? (Ln = y, Wn = S) : (Ln !== y || Wn !== S) && Er();
      }, ne, "DOMContentLoaded", Kt, B, "load", Kt, B, "resize", Er], Br(Oe), L.forEach(function(y) {
        return y.enable(0, 1);
      }), p = 0; p < z.length; p += 3)
        Xr(Pe, z[p], z[p + 1]), Xr(Pe, z[p], z[p + 2]);
    }
  }, i.config = function(t) {
    "limitCallbacks" in t && (un = !!t.limitCallbacks);
    var r = t.syncInterval;
    r && clearInterval(Lr) || (Lr = r) && setInterval(Gn, r), "ignoreMobileResize" in t && (bn = i.isTouch === 1 && t.ignoreMobileResize), "autoRefreshEvents" in t && (Br(Pe) || Br(Oe, t.autoRefreshEvents || "none"), po = (t.autoRefreshEvents + "").indexOf("resize") === -1);
  }, i.scrollerProxy = function(t, r) {
    var a = rt(t), u = z.indexOf(a), s = er(a);
    ~u && z.splice(u, s ? 6 : 2), r && (s ? Pt.unshift(B, r, Z, r, lt, r) : Pt.unshift(a, r));
  }, i.clearMatchMedia = function(t) {
    L.forEach(function(r) {
      return r._ctx && r._ctx.query === t && r._ctx.kill(!0, !0);
    });
  }, i.isInViewport = function(t, r, a) {
    var u = (st(t) ? rt(t) : t).getBoundingClientRect(), s = u[a ? Jt : Zt] * r || 0;
    return a ? u.right - s > 0 && u.left + s < B.innerWidth : u.bottom - s > 0 && u.top + s < B.innerHeight;
  }, i.positionInViewport = function(t, r, a) {
    st(t) && (t = rt(t));
    var u = t.getBoundingClientRect(), s = u[a ? Jt : Zt], p = r == null ? s / 2 : r in an ? an[r] * s : ~r.indexOf("%") ? parseFloat(r) * s / 100 : parseFloat(r) || 0;
    return a ? (u.left + p) / B.innerWidth : (u.top + p) / B.innerHeight;
  }, i.killAll = function(t) {
    if (L.slice(0).forEach(function(a) {
      return a.vars.id !== "ScrollSmoother" && a.kill();
    }), t !== !0) {
      var r = tr.killAll || [];
      tr = {}, r.forEach(function(a) {
        return a();
      });
    }
  }, i;
}();
X.version = "3.13.0";
X.saveStyles = function(i) {
  return i ? Fr(i).forEach(function(e) {
    if (e && e.style) {
      var n = at.indexOf(e);
      n >= 0 && at.splice(n, 5), at.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), m.core.getCache(e), xn());
    }
  }) : at;
};
X.revert = function(i, e) {
  return An(!i, e);
};
X.create = function(i, e) {
  return new X(i, e);
};
X.refresh = function(i) {
  return i ? Er(!0) : (ar || X.register()) && Kt(!0);
};
X.update = function(i) {
  return ++z.cache && Nt(i === !0 ? 2 : 0);
};
X.clearScrollMemory = So;
X.maxScroll = function(i, e) {
  return Dt(i, e ? qe : Ce);
};
X.getScrollFunc = function(i, e) {
  return Vt(rt(i), e ? qe : Ce);
};
X.getById = function(i) {
  return Tn[i];
};
X.getAll = function() {
  return L.filter(function(i) {
    return i.vars.id !== "ScrollSmoother";
  });
};
X.isScrolling = function() {
  return !!ht;
};
X.snapDirectional = Mn;
X.addEventListener = function(i, e) {
  var n = tr[i] || (tr[i] = []);
  ~n.indexOf(e) || n.push(e);
};
X.removeEventListener = function(i, e) {
  var n = tr[i], t = n && n.indexOf(e);
  t >= 0 && n.splice(t, 1);
};
X.batch = function(i, e) {
  var n = [], t = {}, r = e.interval || 0.016, a = e.batchMax || 1e9, u = function(y, S) {
    var R = [], v = [], d = m.delayedCall(r, function() {
      S(R, v), R = [], v = [];
    }).pause();
    return function(w) {
      R.length || d.restart(!0), R.push(w.trigger), v.push(w), a <= R.length && d.progress(1);
    };
  }, s;
  for (s in e)
    t[s] = s.substr(0, 2) === "on" && We(e[s]) && s !== "onRefreshInit" ? u(s, e[s]) : e[s];
  return We(a) && (a = a(), Oe(X, "refresh", function() {
    return a = e.batchMax();
  })), Fr(i).forEach(function(p) {
    var y = {};
    for (s in t)
      y[s] = t[s];
    y.trigger = p, n.push(X.create(y));
  }), n;
};
var Qn = function(e, n, t, r) {
  return n > r ? e(r) : n < 0 && e(0), t > r ? (r - n) / (t - n) : t < 0 ? n / (n - t) : 1;
}, gn = function i(e, n) {
  n === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = n === !0 ? "auto" : n ? "pan-" + n + (he.isTouch ? " pinch-zoom" : "") : "none", e === lt && i(Z, n);
}, Ur = {
  auto: 1,
  scroll: 1
}, ei = function(e) {
  var n = e.event, t = e.target, r = e.axis, a = (n.changedTouches ? n.changedTouches[0] : n).target, u = a._gsap || m.core.getCache(a), s = Le(), p;
  if (!u._isScrollT || s - u._isScrollT > 2e3) {
    for (; a && a !== Z && (a.scrollHeight <= a.clientHeight && a.scrollWidth <= a.clientWidth || !(Ur[(p = gt(a)).overflowY] || Ur[p.overflowX])); )
      a = a.parentNode;
    u._isScroll = a && a !== t && !er(a) && (Ur[(p = gt(a)).overflowY] || Ur[p.overflowX]), u._isScrollT = s;
  }
  (u._isScroll || r === "x") && (n.stopPropagation(), n._gsapAllow = !0);
}, ko = function(e, n, t, r) {
  return he.create({
    target: e,
    capture: !0,
    debounce: !1,
    lockAxis: !0,
    type: n,
    onWheel: r = r && ei,
    onPress: r,
    onDrag: r,
    onScroll: r,
    onEnable: function() {
      return t && Oe(ne, he.eventTypes[0], to, !1, !0);
    },
    onDisable: function() {
      return Pe(ne, he.eventTypes[0], to, !0);
    }
  });
}, ti = /(input|label|select|textarea)/i, eo, to = function(e) {
  var n = ti.test(e.target.tagName);
  (n || eo) && (e._gsapAllow = !0, eo = n);
}, ri = function(e) {
  qt(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
  var n = e, t = n.normalizeScrollX, r = n.momentum, a = n.allowNestedScroll, u = n.onRelease, s, p, y = rt(e.target) || lt, S = m.core.globals().ScrollSmoother, R = S && S.get(), v = zt && (e.content && rt(e.content) || R && e.content !== !1 && !R.smooth() && R.content()), d = Vt(y, Ce), w = Vt(y, qe), H = 1, K = (he.isTouch && B.visualViewport ? B.visualViewport.scale * B.visualViewport.width : B.outerWidth) / B.innerWidth, U = 0, P = We(r) ? function() {
    return r(s);
  } : function() {
    return r || 2.8;
  }, we, Y, Ke = ko(y, e.type, !0, a), te = function() {
    return Y = !1;
  }, O = kt, Me = kt, Ae = function() {
    p = Dt(y, Ce), Me = kr(zt ? 1 : 0, p), t && (O = kr(0, Dt(y, qe))), we = Qt;
  }, T = function() {
    v._gsap.y = wr(parseFloat(v._gsap.y) + d.offset) + "px", v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(v._gsap.y) + ", 0, 1)", d.offset = d.cacheID = 0;
  }, _e = function() {
    if (Y) {
      requestAnimationFrame(te);
      var se = wr(s.deltaY / 2), le = Me(d.v - se);
      if (v && le !== d.v + d.offset) {
        d.offset = le - d.v;
        var l = wr((parseFloat(v && v._gsap.y) || 0) - d.offset);
        v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + l + ", 0, 1)", v._gsap.y = l + "px", d.cacheID = z.cache, Nt();
      }
      return !0;
    }
    d.offset && T(), Y = !0;
  }, D, Re, ee, pe, ke = function() {
    Ae(), D.isActive() && D.vars.scrollY > p && (d() > p ? D.progress(1) && d(p) : D.resetTo("scrollY", p));
  };
  return v && m.set(v, {
    y: "+=0"
  }), e.ignoreCheck = function(J) {
    return zt && J.type === "touchmove" && _e() || H > 1.05 && J.type !== "touchstart" || s.isGesturing || J.touches && J.touches.length > 1;
  }, e.onPress = function() {
    Y = !1;
    var J = H;
    H = wr((B.visualViewport && B.visualViewport.scale || 1) / K), D.pause(), J !== H && gn(y, H > 1.01 ? !0 : t ? !1 : "x"), Re = w(), ee = d(), Ae(), we = Qt;
  }, e.onRelease = e.onGestureStart = function(J, se) {
    if (d.offset && T(), !se)
      pe.restart(!0);
    else {
      z.cache++;
      var le = P(), l, fe;
      t && (l = w(), fe = l + le * 0.05 * -J.velocityX / 0.227, le *= Qn(w, l, fe, Dt(y, qe)), D.vars.scrollX = O(fe)), l = d(), fe = l + le * 0.05 * -J.velocityY / 0.227, le *= Qn(d, l, fe, Dt(y, Ce)), D.vars.scrollY = Me(fe), D.invalidate().duration(le).play(0.01), (zt && D.vars.scrollY >= p || l >= p - 1) && m.to({}, {
        onUpdate: ke,
        duration: le
      });
    }
    u && u(J);
  }, e.onWheel = function() {
    D._ts && D.pause(), Le() - U > 1e3 && (we = 0, U = Le());
  }, e.onChange = function(J, se, le, l, fe) {
    if (Qt !== we && Ae(), se && t && w(O(l[2] === se ? Re + (J.startX - J.x) : w() + se - l[1])), le) {
      d.offset && T();
      var Tt = fe[2] === le, _t = Tt ? ee + J.startY - J.y : d() + le - fe[1], Je = Me(_t);
      Tt && _t !== Je && (ee += Je - _t), d(Je);
    }
    (le || se) && Nt();
  }, e.onEnable = function() {
    gn(y, t ? !1 : "x"), X.addEventListener("refresh", ke), Oe(B, "resize", ke), d.smooth && (d.target.style.scrollBehavior = "auto", d.smooth = w.smooth = !1), Ke.enable();
  }, e.onDisable = function() {
    gn(y, !0), Pe(B, "resize", ke), X.removeEventListener("refresh", ke), Ke.kill();
  }, e.lockAxis = e.lockAxis !== !1, s = new he(e), s.iOS = zt, zt && !d() && d(1), zt && m.ticker.add(kt), pe = s._dc, D = m.to(s, {
    ease: "power4",
    paused: !0,
    inherit: !1,
    scrollX: t ? "+=0.1" : "+=0",
    scrollY: "+=0.1",
    modifiers: {
      scrollY: Ro(d, d(), function() {
        return D.pause();
      })
    },
    onUpdate: Nt,
    onComplete: pe.vars.onComplete
  }), s;
};
X.sort = function(i) {
  if (We(i))
    return L.sort(i);
  var e = B.pageYOffset || 0;
  return X.getAll().forEach(function(n) {
    return n._sortY = n.trigger ? e + n.trigger.getBoundingClientRect().top : n.start + B.innerHeight;
  }), L.sort(i || function(n, t) {
    return (n.vars.refreshPriority || 0) * -1e6 + (n.vars.containerAnimation ? 1e6 : n._sortY) - ((t.vars.containerAnimation ? 1e6 : t._sortY) + (t.vars.refreshPriority || 0) * -1e6);
  });
};
X.observe = function(i) {
  return new he(i);
};
X.normalizeScroll = function(i) {
  if (typeof i > "u")
    return Ve;
  if (i === !0 && Ve)
    return Ve.enable();
  if (i === !1) {
    Ve && Ve.kill(), Ve = i;
    return;
  }
  var e = i instanceof he ? i : ri(i);
  return Ve && Ve.target === e.target && Ve.kill(), er(e.target) && (Ve = e), e;
};
X.core = {
  // smaller file size way to leverage in ScrollSmoother and Observer
  _getVelocityProp: vn,
  _inputObserver: ko,
  _scrollers: z,
  _proxies: Pt,
  bridge: {
    // when normalizeScroll sets the scroll position (ss = setScroll)
    ss: function() {
      ht || rr("scrollStart"), ht = Le();
    },
    // a way to get the _refreshing value in Observer
    ref: function() {
      return je;
    }
  }
};
mo() && m.registerPlugin(X);
Ft.registerPlugin(X);
const ni = [
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
], oi = ({
  list: i,
  clsYearStyles: e,
  clsDescStyles: n
}) => {
  const t = Yn(null), r = Yn(null), a = i || ni;
  return Do(() => {
    const u = Ft.context(() => {
      var R, v, d, w;
      Ft.fromTo(
        r.current,
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
            trigger: r.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
      const s = (R = t.current) == null ? void 0 : R.querySelectorAll(".timeline-item");
      s == null || s.forEach((H, K) => {
        Ft.fromTo(
          H.querySelector(".title-year"),
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
              trigger: H,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        ), Ft.fromTo(
          H.querySelector(".desc"),
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
              trigger: H,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
      const p = (v = t.current) == null ? void 0 : v.querySelector(".timeline-line");
      p && Ft.set(p, { scaleY: 1, opacity: 1 });
      const y = (d = t.current) == null ? void 0 : d.querySelector(
        ".timeline-line-purple"
      );
      y && Ft.fromTo(
        y,
        {
          height: "0%"
        },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: t.current,
            start: "top center",
            end: "bottom center",
            scrub: 1,
            // Smooth sync with scroll
            invalidateOnRefresh: !0
          }
        }
      );
      const S = (w = t.current) == null ? void 0 : w.querySelectorAll(".year-dot");
      S == null || S.forEach((H, K) => {
        Ft.fromTo(
          H,
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
              trigger: H,
              start: "top 90%",
              end: "bottom 10%",
              toggleActions: "play none none reverse"
            }
          }
        );
        const U = document.createElement("div");
        U.className = "absolute inset-0 rounded-full border-2 border-[#6F77DA] opacity-0 pointer-events-none", H.appendChild(U);
        const P = Ft.timeline({ paused: !0, repeat: -1 });
        P.to(H, {
          scale: 1.3,
          duration: 0.8,
          ease: "power2.inOut",
          yoyo: !0,
          repeat: 1
        }), P.to(
          U,
          {
            scale: 4,
            opacity: 0.4,
            duration: 1.5,
            ease: "power2.out"
          },
          0
        ), P.to(
          U,
          {
            opacity: 0,
            duration: 0.5
          },
          1
        ), X.create({
          trigger: H,
          start: "top 70%",
          end: "bottom 30%",
          onEnter: () => P.play(),
          onLeave: () => P.pause(),
          onEnterBack: () => P.play(),
          onLeaveBack: () => P.pause()
        });
      });
    }, t);
    return () => u.revert();
  }, []), /* @__PURE__ */ De.jsx("section", { className: "py-12 md:py-20 bg-white", children: /* @__PURE__ */ De.jsxs("div", { className: "max-w-7xl mx-auto px-4 md:px-6", children: [
    /* @__PURE__ */ De.jsxs("div", { className: "text-center mb-12 md:mb-16", children: [
      /* @__PURE__ */ De.jsx("p", { className: "text-primary-500 text-[1.5rem] md:text-base font-normal mb-2", children: "Company History" }),
      /* @__PURE__ */ De.jsx(
        "h2",
        {
          ref: r,
          className: "text-[1.5rem] md:text-[2.5rem] leading-[2rem] md:leading-[3rem] font-medium text-gray-900",
          children: "Our Journey Through Time"
        }
      )
    ] }),
    /* @__PURE__ */ De.jsxs("div", { ref: t, className: "relative", children: [
      /* @__PURE__ */ De.jsx("div", { className: "timeline-line absolute left-1/2 md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2 w-[0.125rem] bg-gray-200 h-full md:block hidden rounded-2xl" }),
      /* @__PURE__ */ De.jsx("div", { className: "timeline-line absolute left-8 md:hidden w-1 bg-gray-200 h-full block" }),
      /* @__PURE__ */ De.jsx(
        "div",
        {
          className: "timeline-line-purple absolute left-[34px] md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2 w-[0.25rem] bg-gradient-to-b from-transparent to-[rgba(111,119,218,1)]  md:block top-0 rounded-b-2xl",
          style: { height: "0%" }
        }
      ),
      /* @__PURE__ */ De.jsx("div", { className: "space-y-16 md:space-y-24", children: a.map((u, s) => {
        const p = s % 2 === 0;
        return /* @__PURE__ */ De.jsxs(
          "div",
          {
            className: `timeline-item overflow-hidden relative flex items-start md:items-start ${p ? "md:justify-start justify-start" : "md:justify-end justify-start"}`,
            children: [
              /* @__PURE__ */ De.jsx("div", { className: "year-dot absolute left-1/2 transform -translate-x-1/2 w-[0.25rem] h-[0.25rem] bg-[#6F77DA] rounded-[0.125rem] top-[calc(3.2rem_/_2)] shadow-lg z-10 hidden md:block" }),
              /* @__PURE__ */ De.jsx("div", { className: "year-dot absolute left-[34px] transform -translate-x-1/2 w-[0.5rem] h-[0.5rem] bg-[#6F77DA] rounded-full shadow-lg z-10 block md:hidden top-2" }),
              /* @__PURE__ */ De.jsxs(
                "div",
                {
                  className: `w-full md:w-5/12 ${p ? "md:pr-8 md:text-right pr-0 pl-16 text-left" : "md:pl-8 md:text-left pl-16  text-left"}`,
                  children: [
                    /* @__PURE__ */ De.jsx(
                      "h3",
                      {
                        className: `title-year text-[2rem] md:text-[2.5rem] leading-[2.5rem] md:leading-[3rem] font-bold bg-gradient-to-b from-[#6F77DA] to-transparent bg-clip-text text-transparent mb-3 md:mb-4  ${e || ""}`,
                        children: u.year
                      }
                    ),
                    /* @__PURE__ */ De.jsx("div", { className: "desc space-y-2", children: u.items.map((y, S) => /* @__PURE__ */ De.jsxs(
                      "p",
                      {
                        className: `text-[1rem] md:text-[1.125rem] leading-[1.5rem] md:leading-[1.75rem] text-gray-800 ${n || ""}`,
                        children: [
                          "• ",
                          y
                        ]
                      },
                      S
                    )) })
                  ]
                }
              )
            ]
          },
          u.year
        );
      }) })
    ] })
  ] }) });
}, ii = ({ clsStyles: i }) => /* @__PURE__ */ De.jsx(
  "div",
  {
    className: `scroll-progress origin-left h-1 w-full bg-gradient-to-r from-indigo-500 to-teal-500 z-[1000] fixed top-0 left-0 ${i || ""}`
  }
), ai = { debounce: Po, dates: Oo, catchError: Mo, params: Yo, extractObjectKeys: no }, si = { ScrollTimeline: oi, ScrollProgressBar: ii }, ci = {
  utils: ai,
  ui: si
};
export {
  ci as default
};
