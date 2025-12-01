(() => {
  // ../pms_system/pms_system/public/pms-ui/index.bundle.js
  var wy = Object.defineProperty;
  var Ry = Object.defineProperties;
  var Ny = Object.getOwnPropertyDescriptors;
  var rr = Object.getOwnPropertySymbols;
  var qp = Object.prototype.hasOwnProperty;
  var Hp = Object.prototype.propertyIsEnumerable;
  var vi = (s, u) => (u = Symbol[s]) ? u : Symbol.for("Symbol." + s);
  var zy = (s) => {
    throw TypeError(s);
  };
  var Bp = (s, u, r) => u in s ? wy(s, u, { enumerable: true, configurable: true, writable: true, value: r }) : s[u] = r;
  var Ze = (s, u) => {
    for (var r in u || (u = {}))
      qp.call(u, r) && Bp(s, r, u[r]);
    if (rr)
      for (var r of rr(u))
        Hp.call(u, r) && Bp(s, r, u[r]);
    return s;
  };
  var Yt = (s, u) => Ry(s, Ny(u));
  var Nc = (s, u) => {
    var r = {};
    for (var o in s)
      qp.call(s, o) && u.indexOf(o) < 0 && (r[o] = s[o]);
    if (s != null && rr)
      for (var o of rr(s))
        u.indexOf(o) < 0 && Hp.call(s, o) && (r[o] = s[o]);
    return r;
  };
  var fa = (s, u, r) => new Promise((o, g) => {
    var b = (m) => {
      try {
        v(r.next(m));
      } catch (h) {
        g(h);
      }
    }, p = (m) => {
      try {
        v(r.throw(m));
      } catch (h) {
        g(h);
      }
    }, v = (m) => m.done ? o(m.value) : Promise.resolve(m.value).then(b, p);
    v((r = r.apply(s, u)).next());
  });
  var Sl = function(s, u) {
    this[0] = s, this[1] = u;
  };
  var zc = (s, u, r) => {
    var o = (p, v, m, h) => {
      try {
        var _ = r[p](v), R = (v = _.value) instanceof Sl, X = _.done;
        Promise.resolve(R ? v[0] : v).then((w) => R ? o(p === "return" ? p : "next", v[1] ? { done: w.done, value: w.value } : w, m, h) : m({ value: w, done: X })).catch((w) => o("throw", w, m, h));
      } catch (w) {
        h(w);
      }
    }, g = (p) => b[p] = (v) => new Promise((m, h) => o(p, v, m, h)), b = {};
    return r = r.apply(s, u), b[vi("asyncIterator")] = () => b, g("next"), g("throw"), g("return"), b;
  };
  var jc = (s) => {
    var u = s[vi("asyncIterator")], r = false, o, g = {};
    return u == null ? (u = s[vi("iterator")](), o = (b) => g[b] = (p) => u[b](p)) : (u = u.call(s), o = (b) => g[b] = (p) => {
      if (r) {
        if (r = false, b === "throw")
          throw p;
        return p;
      }
      return r = true, { done: false, value: new Sl(new Promise((v) => {
        var m = u[b](p);
        m instanceof Object || zy("Object expected"), v(m);
      }), 1) };
    }), g[vi("iterator")] = () => g, o("next"), "throw" in u ? o("throw") : g.throw = (b) => {
      throw b;
    }, "return" in u && o("return"), g;
  };
  var Lp = (s, u, r) => (u = s[vi("asyncIterator")]) ? u.call(s) : (s = s[vi("iterator")](), u = {}, r = (o, g) => (g = s[o]) && (u[o] = (b) => new Promise((p, v, m) => (b = g.call(s, b), m = b.done, Promise.resolve(b.value).then((h) => p({ value: h, done: m }), v)))), r("next"), r("return"), u);
  (function() {
    const u = document.createElement("link").relList;
    if (u && u.supports && u.supports("modulepreload"))
      return;
    for (const g of document.querySelectorAll('link[rel="modulepreload"]'))
      o(g);
    new MutationObserver((g) => {
      for (const b of g)
        if (b.type === "childList")
          for (const p of b.addedNodes)
            p.tagName === "LINK" && p.rel === "modulepreload" && o(p);
    }).observe(document, { childList: true, subtree: true });
    function r(g) {
      const b = {};
      return g.integrity && (b.integrity = g.integrity), g.referrerPolicy && (b.referrerPolicy = g.referrerPolicy), g.crossOrigin === "use-credentials" ? b.credentials = "include" : g.crossOrigin === "anonymous" ? b.credentials = "omit" : b.credentials = "same-origin", b;
    }
    function o(g) {
      if (g.ep)
        return;
      g.ep = true;
      const b = r(g);
      fetch(g.href, b);
    }
  })();
  function Em(s) {
    return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
  }
  var Cc = { exports: {} };
  var Au = {};
  var Yp;
  function jy() {
    if (Yp)
      return Au;
    Yp = 1;
    var s = Symbol.for("react.transitional.element"), u = Symbol.for("react.fragment");
    function r(o, g, b) {
      var p = null;
      if (b !== void 0 && (p = "" + b), g.key !== void 0 && (p = "" + g.key), "key" in g) {
        b = {};
        for (var v in g)
          v !== "key" && (b[v] = g[v]);
      } else
        b = g;
      return g = b.ref, { $$typeof: s, type: o, key: p, ref: g !== void 0 ? g : null, props: b };
    }
    return Au.Fragment = u, Au.jsx = r, Au.jsxs = r, Au;
  }
  var Xp;
  function Cy() {
    return Xp || (Xp = 1, Cc.exports = jy()), Cc.exports;
  }
  var z = Cy();
  var Uy = (s) => z.jsxs("label", { children: [s.label && z.jsx("div", { children: s.label }), z.jsx("input", { className: "ef-border ef-border-gray-400 ef-rounded ef-px-2 ef-py-1", onChange: (u) => s.onChange(u.target.value), type: "text", value: s.value })] });
  var Dy = (s, u) => {
    var o;
    const r = window.cur_frm;
    return r ? (o = r.set_value) == null ? void 0 : o.call(r, s, u) : null;
  };
  var My = () => {
    const s = window.cur_frm;
    return s ? s.doc : null;
  };
  var Uc = { exports: {} };
  var me = {};
  var Qp;
  function By() {
    if (Qp)
      return me;
    Qp = 1;
    var s = Symbol.for("react.transitional.element"), u = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), p = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), R = Symbol.for("react.activity"), X = Symbol.iterator;
    function w(A) {
      return A === null || typeof A != "object" ? null : (A = X && A[X] || A["@@iterator"], typeof A == "function" ? A : null);
    }
    var q = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } }, k = Object.assign, ue = {};
    function ge(A, V, P) {
      this.props = A, this.context = V, this.refs = ue, this.updater = P || q;
    }
    ge.prototype.isReactComponent = {}, ge.prototype.setState = function(A, V) {
      if (typeof A != "object" && typeof A != "function" && A != null)
        throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, A, V, "setState");
    }, ge.prototype.forceUpdate = function(A) {
      this.updater.enqueueForceUpdate(this, A, "forceUpdate");
    };
    function je() {
    }
    je.prototype = ge.prototype;
    function oe(A, V, P) {
      this.props = A, this.context = V, this.refs = ue, this.updater = P || q;
    }
    var Oe = oe.prototype = new je();
    Oe.constructor = oe, k(Oe, ge.prototype), Oe.isPureReactComponent = true;
    var we = Array.isArray;
    function Qe() {
    }
    var ce = { H: null, A: null, T: null, S: null }, it = Object.prototype.hasOwnProperty;
    function ht(A, V, P) {
      var te = P.ref;
      return { $$typeof: s, type: A, key: V, ref: te !== void 0 ? te : null, props: P };
    }
    function Rt(A, V) {
      return ht(A.type, V, A.props);
    }
    function dt(A) {
      return typeof A == "object" && A !== null && A.$$typeof === s;
    }
    function We(A) {
      var V = { "=": "=0", ":": "=2" };
      return "$" + A.replace(/[=:]/g, function(P) {
        return V[P];
      });
    }
    var he = /\/+/g;
    function Se(A, V) {
      return typeof A == "object" && A !== null && A.key != null ? We("" + A.key) : V.toString(36);
    }
    function se(A) {
      switch (A.status) {
        case "fulfilled":
          return A.value;
        case "rejected":
          throw A.reason;
        default:
          switch (typeof A.status == "string" ? A.then(Qe, Qe) : (A.status = "pending", A.then(function(V) {
            A.status === "pending" && (A.status = "fulfilled", A.value = V);
          }, function(V) {
            A.status === "pending" && (A.status = "rejected", A.reason = V);
          })), A.status) {
            case "fulfilled":
              return A.value;
            case "rejected":
              throw A.reason;
          }
      }
      throw A;
    }
    function B(A, V, P, te, de) {
      var xe = typeof A;
      (xe === "undefined" || xe === "boolean") && (A = null);
      var Ce = false;
      if (A === null)
        Ce = true;
      else
        switch (xe) {
          case "bigint":
          case "string":
          case "number":
            Ce = true;
            break;
          case "object":
            switch (A.$$typeof) {
              case s:
              case u:
                Ce = true;
                break;
              case _:
                return Ce = A._init, B(Ce(A._payload), V, P, te, de);
            }
        }
      if (Ce)
        return de = de(A), Ce = te === "" ? "." + Se(A, 0) : te, we(de) ? (P = "", Ce != null && (P = Ce.replace(he, "$&/") + "/"), B(de, V, P, "", function(Za) {
          return Za;
        })) : de != null && (dt(de) && (de = Rt(de, P + (de.key == null || A && A.key === de.key ? "" : ("" + de.key).replace(he, "$&/") + "/") + Ce)), V.push(de)), 1;
      Ce = 0;
      var xt = te === "" ? "." : te + ":";
      if (we(A))
        for (var $e = 0; $e < A.length; $e++)
          te = A[$e], xe = xt + Se(te, $e), Ce += B(te, V, P, xe, de);
      else if ($e = w(A), typeof $e == "function")
        for (A = $e.call(A), $e = 0; !(te = A.next()).done; )
          te = te.value, xe = xt + Se(te, $e++), Ce += B(te, V, P, xe, de);
      else if (xe === "object") {
        if (typeof A.then == "function")
          return B(se(A), V, P, te, de);
        throw V = String(A), Error("Objects are not valid as a React child (found: " + (V === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : V) + "). If you meant to render a collection of children, use an array instead.");
      }
      return Ce;
    }
    function Q(A, V, P) {
      if (A == null)
        return A;
      var te = [], de = 0;
      return B(A, te, "", "", function(xe) {
        return V.call(P, xe, de++);
      }), te;
    }
    function J(A) {
      if (A._status === -1) {
        var V = A._result;
        V = V(), V.then(function(P) {
          (A._status === 0 || A._status === -1) && (A._status = 1, A._result = P);
        }, function(P) {
          (A._status === 0 || A._status === -1) && (A._status = 2, A._result = P);
        }), A._status === -1 && (A._status = 0, A._result = V);
      }
      if (A._status === 1)
        return A._result.default;
      throw A._result;
    }
    var ve = typeof reportError == "function" ? reportError : function(A) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var V = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof A == "object" && A !== null && typeof A.message == "string" ? String(A.message) : String(A), error: A });
        if (!window.dispatchEvent(V))
          return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", A);
        return;
      }
      console.error(A);
    }, ze = { map: Q, forEach: function(A, V, P) {
      Q(A, function() {
        V.apply(this, arguments);
      }, P);
    }, count: function(A) {
      var V = 0;
      return Q(A, function() {
        V++;
      }), V;
    }, toArray: function(A) {
      return Q(A, function(V) {
        return V;
      }) || [];
    }, only: function(A) {
      if (!dt(A))
        throw Error("React.Children.only expected to receive a single React element child.");
      return A;
    } };
    return me.Activity = R, me.Children = ze, me.Component = ge, me.Fragment = r, me.Profiler = g, me.PureComponent = oe, me.StrictMode = o, me.Suspense = m, me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ce, me.__COMPILER_RUNTIME = { __proto__: null, c: function(A) {
      return ce.H.useMemoCache(A);
    } }, me.cache = function(A) {
      return function() {
        return A.apply(null, arguments);
      };
    }, me.cacheSignal = function() {
      return null;
    }, me.cloneElement = function(A, V, P) {
      if (A == null)
        throw Error("The argument must be a React element, but you passed " + A + ".");
      var te = k({}, A.props), de = A.key;
      if (V != null)
        for (xe in V.key !== void 0 && (de = "" + V.key), V)
          !it.call(V, xe) || xe === "key" || xe === "__self" || xe === "__source" || xe === "ref" && V.ref === void 0 || (te[xe] = V[xe]);
      var xe = arguments.length - 2;
      if (xe === 1)
        te.children = P;
      else if (1 < xe) {
        for (var Ce = Array(xe), xt = 0; xt < xe; xt++)
          Ce[xt] = arguments[xt + 2];
        te.children = Ce;
      }
      return ht(A.type, de, te);
    }, me.createContext = function(A) {
      return A = { $$typeof: p, _currentValue: A, _currentValue2: A, _threadCount: 0, Provider: null, Consumer: null }, A.Provider = A, A.Consumer = { $$typeof: b, _context: A }, A;
    }, me.createElement = function(A, V, P) {
      var te, de = {}, xe = null;
      if (V != null)
        for (te in V.key !== void 0 && (xe = "" + V.key), V)
          it.call(V, te) && te !== "key" && te !== "__self" && te !== "__source" && (de[te] = V[te]);
      var Ce = arguments.length - 2;
      if (Ce === 1)
        de.children = P;
      else if (1 < Ce) {
        for (var xt = Array(Ce), $e = 0; $e < Ce; $e++)
          xt[$e] = arguments[$e + 2];
        de.children = xt;
      }
      if (A && A.defaultProps)
        for (te in Ce = A.defaultProps, Ce)
          de[te] === void 0 && (de[te] = Ce[te]);
      return ht(A, xe, de);
    }, me.createRef = function() {
      return { current: null };
    }, me.forwardRef = function(A) {
      return { $$typeof: v, render: A };
    }, me.isValidElement = dt, me.lazy = function(A) {
      return { $$typeof: _, _payload: { _status: -1, _result: A }, _init: J };
    }, me.memo = function(A, V) {
      return { $$typeof: h, type: A, compare: V === void 0 ? null : V };
    }, me.startTransition = function(A) {
      var V = ce.T, P = {};
      ce.T = P;
      try {
        var te = A(), de = ce.S;
        de !== null && de(P, te), typeof te == "object" && te !== null && typeof te.then == "function" && te.then(Qe, ve);
      } catch (xe) {
        ve(xe);
      } finally {
        V !== null && P.types !== null && (V.types = P.types), ce.T = V;
      }
    }, me.unstable_useCacheRefresh = function() {
      return ce.H.useCacheRefresh();
    }, me.use = function(A) {
      return ce.H.use(A);
    }, me.useActionState = function(A, V, P) {
      return ce.H.useActionState(A, V, P);
    }, me.useCallback = function(A, V) {
      return ce.H.useCallback(A, V);
    }, me.useContext = function(A) {
      return ce.H.useContext(A);
    }, me.useDebugValue = function() {
    }, me.useDeferredValue = function(A, V) {
      return ce.H.useDeferredValue(A, V);
    }, me.useEffect = function(A, V) {
      return ce.H.useEffect(A, V);
    }, me.useEffectEvent = function(A) {
      return ce.H.useEffectEvent(A);
    }, me.useId = function() {
      return ce.H.useId();
    }, me.useImperativeHandle = function(A, V, P) {
      return ce.H.useImperativeHandle(A, V, P);
    }, me.useInsertionEffect = function(A, V) {
      return ce.H.useInsertionEffect(A, V);
    }, me.useLayoutEffect = function(A, V) {
      return ce.H.useLayoutEffect(A, V);
    }, me.useMemo = function(A, V) {
      return ce.H.useMemo(A, V);
    }, me.useOptimistic = function(A, V) {
      return ce.H.useOptimistic(A, V);
    }, me.useReducer = function(A, V, P) {
      return ce.H.useReducer(A, V, P);
    }, me.useRef = function(A) {
      return ce.H.useRef(A);
    }, me.useState = function(A) {
      return ce.H.useState(A);
    }, me.useSyncExternalStore = function(A, V, P) {
      return ce.H.useSyncExternalStore(A, V, P);
    }, me.useTransition = function() {
      return ce.H.useTransition();
    }, me.version = "19.2.0", me;
  }
  var Gp;
  function lf() {
    return Gp || (Gp = 1, Uc.exports = By()), Uc.exports;
  }
  var Ie = lf();
  var ju = Em(Ie);
  var uf = () => {
    var r;
    const [s, u] = Ie.useState((r = My()) == null ? void 0 : r.client_name);
    return Ie.useEffect(() => {
      Dy("client_name", s);
    }, [s]), z.jsx(z.Fragment, { children: z.jsx(Uy, { value: s, onChange: u, label: "Client Name" }) });
  };
  uf.component = "pms-demo-component";
  uf.simulator = { doctype: "Appraisal Cycle", docname: "2025-26" };
  var qy = (s) => s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  var Hy = (s) => s.replace(/^([A-Z])|[\s-_]+(\w)/g, (u, r, o) => o ? o.toUpperCase() : r.toLowerCase());
  var Vp = (s) => {
    const u = Hy(s);
    return u.charAt(0).toUpperCase() + u.slice(1);
  };
  var Am = (...s) => s.filter((u, r, o) => !!u && u.trim() !== "" && o.indexOf(u) === r).join(" ").trim();
  var Ly = (s) => {
    for (const u in s)
      if (u.startsWith("aria-") || u === "role" || u === "title")
        return true;
  };
  var Yy = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
  var Xy = Ie.forwardRef((h, m) => {
    var _ = h, { color: s = "currentColor", size: u = 24, strokeWidth: r = 2, absoluteStrokeWidth: o, className: g = "", children: b, iconNode: p } = _, v = Nc(_, ["color", "size", "strokeWidth", "absoluteStrokeWidth", "className", "children", "iconNode"]);
    return Ie.createElement("svg", Ze(Ze(Yt(Ze({ ref: m }, Yy), { width: u, height: u, stroke: s, strokeWidth: o ? Number(r) * 24 / Number(u) : r, className: Am("lucide", g) }), !b && !Ly(v) && { "aria-hidden": "true" }), v), [...p.map(([R, X]) => Ie.createElement(R, X)), ...Array.isArray(b) ? b : [b]]);
  });
  var sf = (s, u) => {
    const r = Ie.forwardRef((p, b) => {
      var v = p, { className: o } = v, g = Nc(v, ["className"]);
      return Ie.createElement(Xy, Ze({ ref: b, iconNode: u, className: Am(`lucide-${qy(Vp(s))}`, `lucide-${s}`, o) }, g));
    });
    return r.displayName = Vp(s), r;
  };
  var Qy = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
  var Gy = sf("chevron-down", Qy);
  var Vy = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
  var Zy = sf("chevron-up", Vy);
  var ky = [["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }], ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]];
  var xr = sf("lock", ky);
  var xi = ({ rating: s, onChange: u, disabled: r }) => z.jsx("div", { className: "ef-space-y-2", children: z.jsxs("div", { className: "ef-flex ef-items-center ef-gap-3", children: [z.jsx("input", { type: "number", min: 0, max: 10, step: 0.5, value: s != null ? s : "", onChange: (o) => {
    let g = parseFloat(o.target.value);
    if (isNaN(g)) {
      u(0);
      return;
    }
    g < 0 && (g = 0), g > 10 && (g = 10), u(g);
  }, disabled: r, className: "ef-w-20 ef-px-3 ef-py-2 ef-border ef-rounded-lg ef-text-center ef-font-semibold ef-text-lg", placeholder: "0-10" }), z.jsx("span", { className: "ef-text-gray-600", children: "/ 10" })] }) });
  var Ky = ({ kra: s, goal: u, appraisalMode: r, updateGoalRating: o, employeeCanEdit: g, managerCanEdit: b, showManagerData: p }) => {
    const v = () => z.jsxs("div", { className: "ef-absolute ef-top-2 ef-right-2 ef-flex ef-items-center ef-gap-1 ef-bg-gray-200 ef-text-gray-600 ef-text-xs ef-px-2 ef-py-1 ef-rounded-lg ef-shadow-sm", children: [z.jsx(xr, { size: 12 }), "Locked"] });
    return r === "self" ? z.jsxs("div", { className: "ef-relative ef-bg-white ef-p-4 ef-rounded-2xl ef-border ef-border-blue-200 ef-shadow-md ef-hover:shadow-lg ef-transition", children: [!g && z.jsx(v, {}), z.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-3", children: [z.jsx("div", { className: "ef-w-1 ef-h-6 ef-bg-blue-500 ef-rounded-full" }), z.jsx("h4", { className: "ef-font-bold ef-text-gray-800 ef-text-base", children: "Self Appraisal" })] }), z.jsxs("div", { className: "ef-mb-3", children: [z.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-ba ef-tracking-wide ef-mb-2", children: "Rating" }), z.jsx(xi, { rating: u.selfRating, onChange: (m) => g && o(s.id, u.id, "selfRating", m), disabled: !g })] }), z.jsxs("div", { children: [z.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-mb-2", children: "Comments" }), z.jsx("textarea", { value: u.selfComments, onChange: (m) => g && o(s.id, u.id, "selfComments", m.target.value), disabled: !g, className: `
                            ef-w-full ef-p-3 ef-rounded-xl ef-text-sm ef-resize-none
                            ${g ? "ef-bg-gray-50 ef-border ef-border-blue-300 ef-focus:ring-2 ef-focus:ring-blue-400" : "ef-bg-gray-100 ef-text-gray-500 ef-border ef-border-gray-300 ef-cursor-not-allowed"}
                        `, rows: 3, placeholder: "Share your thoughts..." })] })] }) : z.jsxs("div", { className: `ef-mt-4 ${p ? "ef-grid ef-grid-cols-2 ef-gap-4" : ""}`, children: [z.jsxs("div", { className: "ef-bg-white ef-p-4 ef-rounded-2xl ef-border ef-border-blue-200 ef-shadow-md", children: [z.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-3", children: [z.jsx("div", { className: "ef-w-1 ef-h-6 ef-bg-blue-500 ef-rounded-full" }), z.jsx("h4", { className: "ef-font-bold ef-text-gray-800 ef-text-sm", children: "Employee Self Rating" })] }), z.jsxs("div", { className: "ef-mb-3", children: [z.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-mb-2", children: "Rating" }), z.jsxs("div", { className: "ef-inline-flex ef-items-center ef-gap-2 ef-px-3 ef-py-1.5 ef-bg-blue-50 ef-rounded-lg ef-border ef-border-blue-200", children: [z.jsx("span", { className: "ef-text-2xl ef-font-black ef-text-blue-600", children: u.selfRating }), z.jsx("span", { className: "ef-text-sm ef-font-medium ef-text-gray-500", children: "/10" })] })] }), z.jsxs("div", { children: [z.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-mb-2", children: "Comments" }), z.jsx("div", { className: "ef-p-3 ef-bg-gray-50 ef-rounded-xl ef-text-sm ef-text-gray-700 ef-min-h-[60px]", children: u.selfComments || z.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] }), p && z.jsxs("div", { className: "ef-relative ef-bg-white ef-p-4 ef-rounded-2xl ef-border ef-border-purple-200 ef-shadow-md", children: [!b && z.jsx(v, {}), z.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-3", children: [z.jsx("div", { className: "ef-w-1 ef-h-6 ef-bg-purple-500 ef-rounded-full" }), z.jsx("h4", { className: "ef-font-bold ef-text-gray-800 ef-text-sm", children: "Manager Review" })] }), z.jsxs("div", { className: "ef-mb-3", children: [z.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-mb-2", children: "Rating" }), z.jsx(xi, { rating: u.managerRating, onChange: (m) => b && o(s.id, u.id, "managerRating", m), disabled: !b })] }), z.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-mb-2", children: "Comments" }), z.jsx("textarea", { value: u.managerComments, onChange: (m) => b && o(s.id, u.id, "managerComments", m.target.value), disabled: !b, className: `
                            ef-w-full ef-p-3 ef-rounded-xl ef-text-sm ef-resize-none
                            ${b ? "ef-bg-gray-50 ef-border ef-border-purple-300 ef-focus:ring-2 ef-focus:ring-purple-400" : "ef-bg-gray-100 ef-text-gray-500 ef-border ef-border-gray-300 ef-cursor-not-allowed"}
                        `, rows: 3, placeholder: "Add your review..." })] })] });
  };
  var Jy = ({ kra: s, appraisalMode: u, updateKRARating: r, employeeCanEdit: o, managerCanEdit: g, showManagerData: b }) => {
    const p = () => z.jsxs("div", { className: "ef-absolute ef-top-2 ef-right-2 ef-flex ef-items-center ef-gap-1 ef-bg-gray-200 ef-text-gray-600 ef-text-xs ef-px-2 ef-py-1 ef-rounded-lg ef-shadow-sm", children: [z.jsx(xr, { size: 12 }), "Locked"] });
    return u === "self" ? z.jsxs("div", { className: "ef-relative ef-bg-white ef-p-4 ef-rounded-2xl ef-border ef-border-blue-200 ef-shadow-md ef-hover:shadow-lg ef-transition", children: [!o && z.jsx(p, {}), z.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-3", children: [z.jsx("div", { className: "ef-w-1 ef-h-6 ef-bg-blue-500 ef-rounded-full" }), z.jsxs("h4", { className: "ef-font-bold ef-text-blue-900", children: ["Self Appraisal \u2013 ", s.title] })] }), z.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-mb-1", children: "Rating" }), z.jsx(xi, { rating: s.selfRating, onChange: (v) => o && r(s.id, "selfRating", v), disabled: !o }), z.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-mt-4 ef-mb-1", children: "Comments" }), z.jsx("textarea", { value: s.selfComments, onChange: (v) => o && r(s.id, "selfComments", v.target.value), disabled: !o, className: `
                        ef-w-full ef-p-3 ef-rounded-xl ef-text-sm ef-resize-none 
                        ${o ? "ef-bg-white ef-border ef-border-blue-300 ef-focus:ring-2 ef-focus:ring-blue-400" : "ef-bg-gray-100 ef-text-gray-500 ef-border ef-border-gray-300 ef-cursor-not-allowed"}
                    `, rows: 3, placeholder: "Add your comments..." })] }) : z.jsxs("div", { className: `ef-mt-4 ${b ? "ef-grid ef-grid-cols-2 ef-gap-4" : ""}`, children: [z.jsxs("div", { className: "ef-bg-blue-50 ef-p-4 ef-rounded-2xl ef-border ef-border-blue-200 ef-shadow-md", children: [z.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-3", children: [z.jsx("div", { className: "ef-w-1 ef-h-6 ef-bg-blue-500 ef-rounded-full" }), z.jsxs("h4", { className: "ef-font-bold ef-text-blue-900 ef-text-sm", children: ["Employee Self Rating \u2013 ", s.title] })] }), z.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-600 ef-mb-2", children: "Rating" }), z.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-blue-100 ef-border ef-border-blue-200 ef-px-3 ef-py-2 ef-rounded-lg", children: [z.jsx("span", { className: "ef-text-2xl ef-font-bold ef-text-blue-700", children: s.selfRating }), z.jsx("span", { className: "ef-text-gray-600", children: "/10" })] }), z.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-600 ef-mt-3 ef-mb-1", children: "Comments" }), z.jsx("div", { className: "ef-bg-white ef-border ef-border-blue-100 ef-p-3 ef-rounded-xl ef-text-sm ef-min-h-[70px]", children: s.selfComments || z.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] }), b && z.jsxs("div", { className: "ef-relative ef-bg-purple-50 ef-p-4 ef-rounded-2xl ef-border ef-border-purple-200 ef-shadow-md", children: [!g && z.jsx(p, {}), z.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-3", children: [z.jsx("div", { className: "ef-w-1 ef-h-6 ef-bg-purple-500 ef-rounded-full" }), z.jsxs("h4", { className: "ef-font-bold ef-text-purple-900 ef-text-sm", children: ["Manager Review \u2013 ", s.title] })] }), z.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-600 ef-mb-2", children: "Rating" }), z.jsx(xi, { rating: s.managerRating, onChange: (v) => g && r(s.id, "managerRating", v), disabled: !g }), z.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-600 ef-mt-3 ef-mb-1", children: "Comments" }), z.jsx("textarea", { value: s.managerComments, onChange: (v) => g && r(s.id, "managerComments", v.target.value), disabled: !g, className: `
                            ef-w-full ef-p-3 ef-rounded-xl ef-text-sm ef-resize-none
                            ${g ? "ef-bg-white ef-border ef-border-purple-300 ef-focus:ring-2 ef-focus:ring-purple-400" : "ef-bg-gray-100 ef-text-gray-500 ef-border ef-border-gray-300 ef-cursor-not-allowed"}
                        `, rows: 3, placeholder: "Add your review..." })] })] });
  };
  var Fy = ({ kra: s, expanded: u, onToggle: r, appraisalMode: o, updateGoalRating: g, updateKRARating: b, employeeCanEdit: p, managerCanEdit: v, showManagerData: m }) => z.jsxs("div", { className: "ef-border ef-rounded-lg", children: [z.jsxs("div", { onClick: r, className: "ef-flex ef-justify-between ef-items-center ef-p-4 ef-bg-gray-50 ef-cursor-pointer ef-hover:bg-gray-100", children: [z.jsxs("div", { className: "ef-flex-1", children: [z.jsxs("div", { className: "ef-flex ef-items-center ef-gap-3", children: [z.jsx("h3", { className: "ef-text-lg ef-font-semibold ef-text-gray-900", children: s.title }), z.jsxs("span", { className: "ef-px-3 ef-py-1 ef-bg-blue-100 ef-text-blue-700 ef-text-sm ef-rounded-full", children: [s.weightage, "% weightage"] })] }), z.jsx("p", { className: "ef-text-gray-600 ef-text-sm ef-mt-1", children: s.description })] }), u ? z.jsx(Zy, {}) : z.jsx(Gy, {})] }), u && z.jsx("div", { className: "ef-p-4", children: s.goals.length > 0 ? s.goals.map((h) => z.jsxs("div", { className: "ef-mb-6 ef-last:mb-0 ef-pb-6 ef-last:pb-0 ef-border-b ef-last:border-b-0", children: [z.jsxs("div", { className: "ef-mb-3", children: [z.jsxs("p", { className: "ef-font-medium ef-text-gray-900", children: [h.description, z.jsxs("span", { className: "ef-inline-flex ef-items-center ef-px-3 ef-py-1 ef-bg-gradient-to-r ef-from-purple-500 ef-to-pink-500 ef-text-white ef-text-xs ef-font-semibold ef-rounded-full ef-shadow-sm ef-mx-3", children: [h.weightage, "% weightage"] })] }), z.jsx("div", { className: "ef-w-full ef-bg-gray-200 ef-rounded-full ef-h-3 ef-overflow-hidden ef-mt-2", children: z.jsx("div", { className: "ef-h-full ef-bg-gradient-to-r ef-from-green-400 ef-to-green-600 ef-transition-all ef-duration-500", style: { width: `${Math.min(h.progress, 100)}%` } }) }), z.jsxs("p", { className: "ef-text-sm ef-text-gray-600 ef-mt-1", children: ["Progress: ", Math.min(h.progress, 100), "%"] })] }), z.jsx(Ky, { kra: s, goal: h, appraisalMode: o, updateGoalRating: g, employeeCanEdit: p, managerCanEdit: v, showManagerData: m })] }, h.id)) : z.jsx(Jy, { kra: s, appraisalMode: o, updateKRARating: b, employeeCanEdit: p, managerCanEdit: v, showManagerData: m }) })] });
  var Wy = ({ kraList: s, expandedKRA: u, toggleKRA: r, appraisalMode: o, updateGoalRating: g, updateKRARating: b, employeeCanEdit: p, managerCanEdit: v, showManagerData: m }) => z.jsx("div", { className: "ef-space-y-4", children: s.map((h) => z.jsx(Fy, { kra: h, expanded: u[h.id], onToggle: () => r(h.id), appraisalMode: o, updateGoalRating: g, updateKRARating: b, employeeCanEdit: p, managerCanEdit: v, showManagerData: m }, h.id)) });
  var $y = ({ comp: s, appraisalMode: u, updateCompetency: r, employeeCanEdit: o, managerCanEdit: g, showManagerData: b }) => {
    const p = () => z.jsxs("div", { className: "ef-absolute ef-top-2 ef-right-2 ef-flex ef-items-center ef-gap-1 ef-bg-gray-200 ef-text-gray-600 ef-text-xs ef-px-2 ef-py-1 ef-rounded-lg ef-shadow-sm", children: [z.jsx(xr, { size: 12 }), "Locked"] });
    return z.jsxs("div", { className: "ef-relative ef-bg-white ef-rounded-2xl ef-border ef-border-gray-200 ef-p-5 ef-shadow-md ef-hover:shadow-lg ef-transition", children: [z.jsxs("div", { className: "ef-flex ef-items-center ef-gap-3", children: [z.jsx("h3", { className: "ef-text-base ef-font-bold ef-text-gray-900", children: s.name }), z.jsxs("span", { className: "ef-px-3 ef-py-1 ef-bg-purple-600 ef-text-white ef-text-xs ef-rounded-full", children: [s.weightage, "% Weightage"] })] }), u === "self" && z.jsxs("div", { className: "ef-relative ef-bg-blue-50 ef-p-4 ef-rounded-xl ef-border ef-border-blue-200 ef-mt-4", children: [!o && z.jsx(p, {}), z.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-2", children: [z.jsx("div", { className: "ef-w-1 ef-h-5 ef-bg-blue-500 ef-rounded-full" }), z.jsx("h4", { className: "ef-font-semibold ef-text-gray-800 ef-text-sm", children: "Self Appraisal" })] }), z.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-mb-1", children: "Rating" }), z.jsx(xi, { rating: s.selfRating, onChange: (v) => o && r(s.id, "selfRating", v), disabled: !o }), z.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-mt-4 ef-mb-1", children: "Comments" }), z.jsx("textarea", { value: s.selfComments, onChange: (v) => o && r(s.id, "selfComments", v.target.value), disabled: !o, className: `
                            ef-w-full ef-p-3 ef-rounded-xl ef-text-sm ef-resize-none
                            ${o ? "ef-bg-white ef-border ef-border-blue-300 ef-focus:ring-2 ef-focus:ring-blue-400" : "ef-bg-gray-100 ef-text-gray-500 ef-border ef-border-gray-300 ef-cursor-not-allowed"}
                        `, rows: 3, placeholder: "Share your thoughts..." })] }), u === "manager" && z.jsxs("div", { className: `ef-mt-4 ${b ? "ef-grid ef-grid-cols-2 ef-gap-4" : ""}`, children: [z.jsxs("div", { className: "ef-bg-blue-50 ef-p-4 ef-rounded-xl ef-border ef-border-blue-200", children: [z.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-2", children: [z.jsx("div", { className: "ef-w-1 ef-h-5 ef-bg-blue-500 ef-rounded-full" }), z.jsx("h4", { className: "ef-font-semibold ef-text-gray-800 ef-text-sm", children: "Employee Self Rating" })] }), z.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-mb-1", children: "Rating" }), z.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-blue-100 ef-border ef-border-blue-200 ef-px-3 ef-py-2 ef-rounded-lg", children: [z.jsx("span", { className: "ef-text-2xl ef-font-bold ef-text-blue-700", children: s.selfRating }), z.jsx("span", { className: "ef-text-gray-600", children: "/10" })] }), z.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-mt-3 ef-mb-1", children: "Comments" }), z.jsx("div", { className: "ef-bg-white ef-border ef-border-blue-100 ef-p-3 ef-rounded-xl ef-text-sm ef-min-h-[70px]", children: s.selfComments || z.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] }), b && z.jsxs("div", { className: "ef-relative ef-bg-purple-50 ef-p-4 ef-rounded-xl ef-border ef-border-purple-200", children: [!g && z.jsx(p, {}), z.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-2", children: [z.jsx("div", { className: "ef-w-1 ef-h-5 ef-bg-purple-500 ef-rounded-full" }), z.jsx("h4", { className: "ef-font-semibold ef-text-gray-800 ef-text-sm", children: "Manager Review" })] }), z.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-mb-1", children: "Rating" }), z.jsx(xi, { rating: s.managerRating, onChange: (v) => g && r(s.id, "managerRating", v), disabled: !g }), z.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-mt-3 ef-mb-1", children: "Comments" }), z.jsx("textarea", { value: s.managerComments, onChange: (v) => g && r(s.id, "managerComments", v.target.value), disabled: !g, className: `
                                    ef-w-full ef-p-3 ef-rounded-xl ef-text-sm ef-resize-none
                                    ${g ? "ef-bg-white ef-border ef-border-purple-300 ef-focus:ring-2 ef-focus:ring-purple-400" : "ef-bg-gray-100 ef-text-gray-500 ef-border ef-border-gray-300 ef-cursor-not-allowed"}
                                `, rows: 3, placeholder: "Add your review..." })] })] })] });
  };
  var Py = ({ competencies: s, appraisalMode: u, selfAppraisalSubmitted: r, updateCompetency: o, employeeCanEdit: g, managerCanEdit: b, showManagerData: p }) => z.jsx("div", { className: "ef-space-y-6", children: s.map((v) => z.jsx($y, { comp: v, appraisalMode: u, selfAppraisalSubmitted: r, updateCompetency: o, employeeCanEdit: g, managerCanEdit: b, showManagerData: p }, v.id)) });
  var Iy = ({ question: s, appraisalMode: u, updateQuestion: r, index: o, employeeCanEdit: g, managerCanEdit: b, showManagerData: p }) => {
    const v = () => z.jsxs("div", { className: "ef-absolute ef-top-2 ef-right-2 ef-flex ef-items-center ef-gap-1 ef-bg-gray-200 ef-text-gray-600 ef-text-xs ef-py-1 ef-px-2 ef-rounded-lg ef-shadow-sm", children: [z.jsx(xr, { size: 12 }), "Locked"] });
    return z.jsxs("div", { className: "ef-relative ef-bg-white ef-rounded-2xl ef-border ef-border-gray-200 ef-p-5 ef-shadow-md ef-space-y-4 ef-transition-all ef-duration-300 hover:ef-shadow-lg", children: [z.jsxs("div", { className: "ef-flex ef-items-start ef-gap-3", children: [z.jsx("div", { className: "ef-flex-shrink-0 ef-w-8 ef-h-8 ef-bg-gray-800 ef-rounded-lg ef-flex ef-items-center ef-justify-center ef-text-white ef-font-bold", children: o + 1 }), z.jsx("h3", { className: "ef-text-base ef-font-semibold ef-text-gray-900", children: s.question })] }), u === "self" && z.jsxs("div", { className: "ef-relative ef-bg-blue-50 ef-p-4 ef-rounded-xl ef-border ef-border-blue-200", children: [!g && z.jsx(v, {}), z.jsx("h4", { className: "ef-font-semibold ef-text-gray-700 ef-text-sm ef-mb-2", children: "Your Answer" }), z.jsx("textarea", { value: s.selfAnswer, onChange: (m) => g && r(s.id, "selfAnswer", m.target.value), disabled: !g, className: `
                            ef-w-full ef-p-3 ef-rounded-xl ef-resize-none ef-text-sm ef-transition
                            ${g ? "ef-bg-white ef-border ef-border-blue-300 ef-focus:ring-2 ef-focus:ring-blue-400" : "ef-bg-gray-100 ef-text-gray-500 ef-border ef-border-gray-300 ef-cursor-not-allowed"}
                        `, rows: 4, placeholder: "Enter your answer..." })] }), u === "manager" && z.jsxs("div", { className: "ef-space-y-4", children: [z.jsxs("div", { className: "ef-bg-blue-50 ef-p-4 ef-rounded-xl ef-border ef-border-blue-200", children: [z.jsx("h4", { className: "ef-font-semibold ef-text-gray-700 ef-text-sm ef-mb-2", children: "Employee's Answer" }), z.jsx("div", { className: "ef-bg-white ef-p-3 ef-rounded-xl ef-text-sm ef-min-h-[70px] ef-border ef-border-blue-100", children: s.selfAnswer || z.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No answer provided" }) })] }), p && z.jsxs("div", { className: "ef-relative ef-bg-purple-50 ef-p-4 ef-rounded-xl ef-border ef-border-purple-200", children: [!b && z.jsx(v, {}), z.jsx("h4", { className: "ef-font-semibold ef-text-gray-700 ef-text-sm ef-mb-2", children: "Manager's Comments" }), z.jsx("textarea", { value: s.managerComments, onChange: (m) => b && r(s.id, "managerComments", m.target.value), disabled: !b, className: `
                                    ef-w-full ef-p-3 ef-rounded-xl ef-resize-none ef-text-sm ef-transition
                                    ${b ? "ef-bg-white ef-border ef-border-purple-300 ef-focus:ring-2 ef-focus:ring-purple-400" : "ef-bg-gray-100 ef-text-gray-500 ef-border ef-border-gray-300 ef-cursor-not-allowed"}
                                `, rows: 4, placeholder: "Enter your feedback..." })] })] })] });
  };
  var eg = ({ questions: s, appraisalMode: u, selfAppraisalSubmitted: r, updateQuestion: o, employeeCanEdit: g, managerCanEdit: b, showManagerData: p }) => z.jsx("div", { className: "ef-space-y-6", children: s.map((v, m) => z.jsx(Iy, { question: v, index: m, appraisalMode: u, selfAppraisalSubmitted: r, updateQuestion: o, employeeCanEdit: g, managerCanEdit: b, showManagerData: p }, v.id)) });
  var Om = () => {
    const [s, u] = Ie.useState("kra"), [r, o] = Ie.useState("self"), [g, b] = Ie.useState({}), [p, v] = Ie.useState({ employee: { name: "John Doe", designation: "Senior Developer", department: "Engineering", period: "Jan 2025 - Dec 2025" }, selfAppraisalSubmitted: true, kra: [{ id: 1, title: "Project Delivery", description: "Deliver assigned projects on time", weightage: 30, goals: [{ id: 1, description: "Complete 3 major projects", progress: 2, selfRating: 8, selfComments: "Completed 3 projects successfully", managerRating: 9, managerComments: "Excellent delivery" }, { id: 2, description: "Maintain 95% on-time delivery", progress: 2, selfRating: 7, selfComments: "Achieved 90%", managerRating: 7, managerComments: "Slight delay" }] }], competencies: [{ id: 1, name: "Technical Skills", description: "Proficiency in technologies", weightage: 25, selfRating: 8, selfComments: "Strong in React/Node", managerRating: 8, managerComments: "Very competent" }], questions: [{ id: 1, question: "What are your key achievements?", selfAnswer: "Led migration project", managerComments: "Excellent ownership" }] });
    function m(he) {
      var B, Q;
      he.workflow_state == "Self Appraisal" ? o("self") : o("manager");
      const Se = he.kra || [], se = he.kra_vs_goal || [];
      return { employee: { name: he.employee_name, designation: he.designation, department: he.department, period: `${he.from_date} - ${he.to_date}` }, selfAppraisalSubmitted: he.self_appraisal_submitted || true, kra: Se.map((J, ve) => {
        const ze = se.filter((A) => A.kra === J.kra).map((A, V) => ({ id: V + 1, description: A.goal_name, progress: A.progress || "", weightage: A.weightage, selfRating: A.employee_rating_number, selfComments: A.employee_description, managerRating: A.manager_rating_number, managerComments: A.management_description }));
        return { id: ve + 1, title: J.kra, description: J.description || "", weightage: J.weightage, selfRating: J.employee_rating_number, selfComments: J.employee_description, managerRating: J.manager_rating_number, managerComments: J.management_description, goals: ze };
      }) || [], competencies: ((B = he.competency) == null ? void 0 : B.map((J, ve) => ({ id: ve + 1, name: J.competency, description: J.description || "", weightage: J.weightage, selfRating: J.employee_rating_number, selfComments: J.employee_description, managerRating: J.manager_rating, managerComments: J.manager_description }))) || [], questions: ((Q = he.answer) == null ? void 0 : Q.map((J, ve) => ({ id: ve + 1, question: J.question, selfAnswer: J.employee_ans_in_discriptive, managerComments: J.manager_comment }))) || [] };
    }
    const h = () => {
      const he = window.cur_frm;
      if (!he)
        return;
      const Se = he.doc;
      Se.kra.forEach((se, B) => {
        const Q = p.kra.find((J) => J.id === B + 1);
        Q && (se.employee_rating_number = Q.selfRating, se.employee_description = Q.selfComments, se.manager_rating_number = Q.managerRating, se.management_description = Q.managerComments, se.weightage = Q.weightage);
      }), Se.kra_vs_goal.forEach((se) => {
        const B = p.kra.find((J) => J.title === se.kra);
        if (!B)
          return;
        const Q = B.goals.find((J) => J.description === se.goal_name);
        Q && (se.employee_rating_number = Q.selfRating, se.employee_description = Q.selfComments, se.manager_rating_number = Q.managerRating, se.management_description = Q.managerComments, se.progress = Q.progress, se.weightage = Q.weightage);
      }), Se.competency.forEach((se, B) => {
        const Q = p.competencies.find((J) => J.id === B + 1);
        Q && (se.employee_rating_number = Q.selfRating, se.employee_description = Q.selfComments, se.manager_rating = Q.managerRating, se.manager_description = Q.managerComments, se.weightage = Q.weightage);
      }), Se.answer.forEach((se, B) => {
        const Q = p.questions.find((J) => J.id === B + 1);
        Q && (se.employee_ans_in_discriptive = Q.selfAnswer, se.manager_comment = Q.managerComments);
      }), he.doc.__unsaved = 1, he.dirty(), he.save().catch((se) => console.error(se));
    }, _ = (he) => {
      b((Se) => Yt(Ze({}, Se), { [he]: !Se[he] }));
    }, R = (he, Se, se, B) => {
      v((Q) => Yt(Ze({}, Q), { kra: Q.kra.map((J) => J.id === he ? Yt(Ze({}, J), { goals: J.goals.map((ve) => ve.id === Se ? Yt(Ze({}, ve), { [se]: B }) : ve) }) : J) }));
    }, X = (he, Se, se) => {
      v((B) => Yt(Ze({}, B), { kra: B.kra.map((Q) => Q.id === he ? Yt(Ze({}, Q), { [Se]: se }) : Q) }));
    }, w = (he, Se, se) => {
      v((B) => Yt(Ze({}, B), { competencies: B.competencies.map((Q) => Q.id === he ? Yt(Ze({}, Q), { [Se]: se }) : Q) }));
    }, q = (he, Se, se) => {
      v((B) => Yt(Ze({}, B), { questions: B.questions.map((Q) => Q.id === he ? Yt(Ze({}, Q), { [Se]: se }) : Q) }));
    }, k = window.cur_frm;
    if (!(k != null && k.doc))
      return "Loading...";
    Ie.useEffect(() => {
      v(m(k.doc));
    }, [k == null ? void 0 : k.doc]);
    const ue = frappe.session.user, ge = k.doc.employee_user_id, je = k.doc.reports_to_user_id, oe = k.doc.workflow_state, Oe = ue === ge, we = ue === je, ht = (frappe.user_roles || []).includes("HR Manager") || ue === "Administrator", Rt = Oe && oe === "Self Appraisal" && !ht, dt = we && oe === "Manager Appraisal" && !ht, We = we || ht;
    return z.jsx("div", { className: "ef-min-h-screen ef-bg-gray-50 ef-p-6", children: z.jsx("div", { className: "ef-max-w-7xl ef-mx-auto", children: z.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-shadow-sm", children: [z.jsx("div", { className: "ef-border-b", children: z.jsxs("div", { className: "ef-flex", children: [z.jsx("button", { onClick: () => u("kra"), className: `ef-px-6 ef-py-4 ef-font-semibold ${s === "kra" ? "ef-border-b-2 ef-border-blue-600 ef-text-blue-600" : "ef-text-gray-600"}`, children: "KRA vs Goals" }), z.jsx("button", { onClick: () => u("competency"), className: `ef-px-6 ef-py-4 ef-font-semibold ${s === "competency" ? "ef-border-b-2 ef-border-blue-600 ef-text-blue-600" : "ef-text-gray-600"}`, children: "Competencies" }), z.jsx("button", { onClick: () => u("questions"), className: `ef-px-6 ef-py-4 ef-font-semibold ${s === "questions" ? "ef-border-b-2 ef-border-blue-600 ef-text-blue-600" : "ef-text-gray-600"}`, children: "Questions" })] }) }), z.jsxs("div", { className: "ef-p-6", children: [s === "kra" && z.jsx(Wy, { kraList: p.kra, expandedKRA: g, toggleKRA: _, appraisalMode: r, updateGoalRating: R, updateKRARating: X, employeeCanEdit: Rt, managerCanEdit: dt, showManagerData: We }), s === "competency" && z.jsx(Py, { competencies: p.competencies, appraisalMode: r, selfAppraisalSubmitted: p.selfAppraisalSubmitted, updateCompetency: w, employeeCanEdit: Rt, managerCanEdit: dt, showManagerData: We }), s === "questions" && z.jsx(eg, { questions: p.questions, appraisalMode: r, selfAppraisalSubmitted: p.selfAppraisalSubmitted, updateQuestion: q, employeeCanEdit: Rt, managerCanEdit: dt, showManagerData: We })] }), z.jsx("div", { className: "ef-flex ef-justify-end ef-px-6 ef-pb-6", children: z.jsx("button", { onClick: h, className: "ef-bg-blue-600 ef-text-white ef-px-6 ef-py-2 ef-rounded-lg ef-font-semibold hover:ef-bg-blue-700 ef-transition", children: "Save Appraisal" }) })] }) }) });
  };
  Om.component = "appraisal-rating";
  var Zp = Object.freeze(Object.defineProperty({ __proto__: null, AppraisalRating: Om, DemoComponent: uf }, Symbol.toStringTag, { value: "Module" }));
  var tg = Object.defineProperty;
  var ng = (s, u, r) => u in s ? tg(s, u, { enumerable: true, configurable: true, writable: true, value: r }) : s[u] = r;
  var or = (s, u, r) => ng(s, typeof u != "symbol" ? u + "" : u, r);
  var ag = { stringify: (s) => s ? "true" : "false", parse: (s) => /^[ty1-9]/i.test(s) };
  var lg = { stringify: (s) => s.name, parse: (s, u, r) => {
    const o = (() => {
      if (typeof window < "u" && s in window)
        return window[s];
      if (typeof global < "u" && s in global)
        return global[s];
    })();
    return typeof o == "function" ? o.bind(r) : void 0;
  } };
  var ig = { stringify: (s) => JSON.stringify(s), parse: (s) => JSON.parse(s) };
  function ug(s) {
    return s.replace(/([a-z0-9])([A-Z])/g, (u, r, o) => `${r}-${o.toLowerCase()}`);
  }
  function wm(s) {
    return s.replace(/[-:]([a-z])/g, (u, r) => `${r.toUpperCase()}`);
  }
  var sg = { stringify: (s) => s.name, parse: (s, u, r) => {
    const o = (() => {
      const g = wm(u);
      if (typeof r < "u" && g in r.container)
        return r.container[g];
    })();
    return typeof o == "function" ? o.bind(r) : void 0;
  } };
  var rg = { stringify: (s) => `${s}`, parse: (s) => parseFloat(s) };
  var og = { stringify: (s) => s, parse: (s) => s };
  var Dc = { string: og, number: rg, boolean: ag, function: lg, method: sg, json: ig };
  var Ou = Symbol.for("r2wc.render");
  var cr = Symbol.for("r2wc.connected");
  var xl = Symbol.for("r2wc.context");
  var $t = Symbol.for("r2wc.props");
  function cg(s, u, r) {
    var o, g, b;
    u.props || (u.props = s.propTypes ? Object.keys(s.propTypes) : []), u.events || (u.events = []);
    const p = Array.isArray(u.props) ? u.props.slice() : Object.keys(u.props), v = Array.isArray(u.events) ? u.events.slice() : Object.keys(u.events), m = {}, h = {}, _ = {}, R = {};
    for (const w of p) {
      m[w] = Array.isArray(u.props) ? "string" : u.props[w];
      const q = ug(w);
      _[w] = q, R[q] = w;
    }
    for (const w of v)
      h[w] = Array.isArray(u.events) ? {} : u.events[w];
    class X extends HTMLElement {
      constructor() {
        super(), or(this, b, true), or(this, g), or(this, o, {}), or(this, "container"), u.shadow ? this.container = this.attachShadow({ mode: u.shadow }) : this.container = this, this[$t].container = this.container;
        for (const q of p) {
          const k = _[q], ue = this.getAttribute(k), ge = m[q], je = ge ? Dc[ge] : null;
          if (ge === "method") {
            const oe = wm(k);
            Object.defineProperty(this[$t].container, oe, { enumerable: true, configurable: true, get() {
              return this[$t][oe];
            }, set(Oe) {
              this[$t][oe] = Oe, this[Ou]();
            } }), this[$t][q] = je.parse(ue, k, this);
          }
          je != null && je.parse && ue && (this[$t][q] = je.parse(ue, k, this));
        }
        for (const q of v)
          this[$t][q] = (k) => {
            const ue = q.replace(/^on/, "").toLowerCase();
            this.dispatchEvent(new CustomEvent(ue, Ze({ detail: k }, h[q])));
          };
      }
      static get observedAttributes() {
        return Object.keys(R);
      }
      connectedCallback() {
        this[cr] = true, this[Ou]();
      }
      disconnectedCallback() {
        this[cr] = false, this[xl] && r.unmount(this[xl]), delete this[xl];
      }
      attributeChangedCallback(q, k, ue) {
        const ge = R[q], je = m[ge], oe = je ? Dc[je] : null;
        ge in m && oe != null && oe.parse && ue && (this[$t][ge] = oe.parse(ue, q, this), this[Ou]());
      }
      [(b = cr, g = xl, o = $t, Ou)]() {
        this[cr] && (this[xl] ? r.update(this[xl], this[$t]) : this[xl] = r.mount(this.container, s, this[$t]));
      }
    }
    for (const w of p) {
      const q = _[w], k = m[w];
      Object.defineProperty(X.prototype, w, { enumerable: true, configurable: true, get() {
        return this[$t][w];
      }, set(ue) {
        this[$t][w] = ue;
        const ge = k ? Dc[k] : null;
        if (ge != null && ge.stringify) {
          const je = ge.stringify(ue, q, this);
          this.getAttribute(q) !== je && this.setAttribute(q, je);
        } else
          this[Ou]();
      } });
    }
    return X;
  }
  function fg(s, u, r, o = {}) {
    function g(v, m, h) {
      const _ = u.createElement(m, h);
      if ("createRoot" in r) {
        const R = r.createRoot(v);
        return R.render(_), { container: v, root: R, ReactComponent: m };
      }
      if ("render" in r)
        return r.render(_, v), { container: v, ReactComponent: m };
      throw new Error("Invalid ReactDOM instance provided.");
    }
    function b({ container: v, root: m, ReactComponent: h }, _) {
      const R = u.createElement(h, _);
      if (m) {
        m.render(R);
        return;
      }
      if ("render" in r) {
        r.render(R, v);
        return;
      }
    }
    function p({ container: v, root: m }) {
      if (m) {
        m.unmount();
        return;
      }
      if ("unmountComponentAtNode" in r) {
        r.unmountComponentAtNode(v);
        return;
      }
    }
    return cg(s, o, { mount: g, unmount: p, update: b });
  }
  var Mc = { exports: {} };
  var wu = {};
  var Bc = { exports: {} };
  var qc = {};
  var kp;
  function hg() {
    return kp || (kp = 1, function(s) {
      function u(B, Q) {
        var J = B.length;
        B.push(Q);
        e:
          for (; 0 < J; ) {
            var ve = J - 1 >>> 1, ze = B[ve];
            if (0 < g(ze, Q))
              B[ve] = Q, B[J] = ze, J = ve;
            else
              break e;
          }
      }
      function r(B) {
        return B.length === 0 ? null : B[0];
      }
      function o(B) {
        if (B.length === 0)
          return null;
        var Q = B[0], J = B.pop();
        if (J !== Q) {
          B[0] = J;
          e:
            for (var ve = 0, ze = B.length, A = ze >>> 1; ve < A; ) {
              var V = 2 * (ve + 1) - 1, P = B[V], te = V + 1, de = B[te];
              if (0 > g(P, J))
                te < ze && 0 > g(de, P) ? (B[ve] = de, B[te] = J, ve = te) : (B[ve] = P, B[V] = J, ve = V);
              else if (te < ze && 0 > g(de, J))
                B[ve] = de, B[te] = J, ve = te;
              else
                break e;
            }
        }
        return Q;
      }
      function g(B, Q) {
        var J = B.sortIndex - Q.sortIndex;
        return J !== 0 ? J : B.id - Q.id;
      }
      if (s.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var b = performance;
        s.unstable_now = function() {
          return b.now();
        };
      } else {
        var p = Date, v = p.now();
        s.unstable_now = function() {
          return p.now() - v;
        };
      }
      var m = [], h = [], _ = 1, R = null, X = 3, w = false, q = false, k = false, ue = false, ge = typeof setTimeout == "function" ? setTimeout : null, je = typeof clearTimeout == "function" ? clearTimeout : null, oe = typeof setImmediate != "undefined" ? setImmediate : null;
      function Oe(B) {
        for (var Q = r(h); Q !== null; ) {
          if (Q.callback === null)
            o(h);
          else if (Q.startTime <= B)
            o(h), Q.sortIndex = Q.expirationTime, u(m, Q);
          else
            break;
          Q = r(h);
        }
      }
      function we(B) {
        if (k = false, Oe(B), !q)
          if (r(m) !== null)
            q = true, Qe || (Qe = true, We());
          else {
            var Q = r(h);
            Q !== null && se(we, Q.startTime - B);
          }
      }
      var Qe = false, ce = -1, it = 5, ht = -1;
      function Rt() {
        return ue ? true : !(s.unstable_now() - ht < it);
      }
      function dt() {
        if (ue = false, Qe) {
          var B = s.unstable_now();
          ht = B;
          var Q = true;
          try {
            e: {
              q = false, k && (k = false, je(ce), ce = -1), w = true;
              var J = X;
              try {
                t: {
                  for (Oe(B), R = r(m); R !== null && !(R.expirationTime > B && Rt()); ) {
                    var ve = R.callback;
                    if (typeof ve == "function") {
                      R.callback = null, X = R.priorityLevel;
                      var ze = ve(R.expirationTime <= B);
                      if (B = s.unstable_now(), typeof ze == "function") {
                        R.callback = ze, Oe(B), Q = true;
                        break t;
                      }
                      R === r(m) && o(m), Oe(B);
                    } else
                      o(m);
                    R = r(m);
                  }
                  if (R !== null)
                    Q = true;
                  else {
                    var A = r(h);
                    A !== null && se(we, A.startTime - B), Q = false;
                  }
                }
                break e;
              } finally {
                R = null, X = J, w = false;
              }
              Q = void 0;
            }
          } finally {
            Q ? We() : Qe = false;
          }
        }
      }
      var We;
      if (typeof oe == "function")
        We = function() {
          oe(dt);
        };
      else if (typeof MessageChannel != "undefined") {
        var he = new MessageChannel(), Se = he.port2;
        he.port1.onmessage = dt, We = function() {
          Se.postMessage(null);
        };
      } else
        We = function() {
          ge(dt, 0);
        };
      function se(B, Q) {
        ce = ge(function() {
          B(s.unstable_now());
        }, Q);
      }
      s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function(B) {
        B.callback = null;
      }, s.unstable_forceFrameRate = function(B) {
        0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : it = 0 < B ? Math.floor(1e3 / B) : 5;
      }, s.unstable_getCurrentPriorityLevel = function() {
        return X;
      }, s.unstable_next = function(B) {
        switch (X) {
          case 1:
          case 2:
          case 3:
            var Q = 3;
            break;
          default:
            Q = X;
        }
        var J = X;
        X = Q;
        try {
          return B();
        } finally {
          X = J;
        }
      }, s.unstable_requestPaint = function() {
        ue = true;
      }, s.unstable_runWithPriority = function(B, Q) {
        switch (B) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            B = 3;
        }
        var J = X;
        X = B;
        try {
          return Q();
        } finally {
          X = J;
        }
      }, s.unstable_scheduleCallback = function(B, Q, J) {
        var ve = s.unstable_now();
        switch (typeof J == "object" && J !== null ? (J = J.delay, J = typeof J == "number" && 0 < J ? ve + J : ve) : J = ve, B) {
          case 1:
            var ze = -1;
            break;
          case 2:
            ze = 250;
            break;
          case 5:
            ze = 1073741823;
            break;
          case 4:
            ze = 1e4;
            break;
          default:
            ze = 5e3;
        }
        return ze = J + ze, B = { id: _++, callback: Q, priorityLevel: B, startTime: J, expirationTime: ze, sortIndex: -1 }, J > ve ? (B.sortIndex = J, u(h, B), r(m) === null && B === r(h) && (k ? (je(ce), ce = -1) : k = true, se(we, J - ve))) : (B.sortIndex = ze, u(m, B), q || w || (q = true, Qe || (Qe = true, We()))), B;
      }, s.unstable_shouldYield = Rt, s.unstable_wrapCallback = function(B) {
        var Q = X;
        return function() {
          var J = X;
          X = Q;
          try {
            return B.apply(this, arguments);
          } finally {
            X = J;
          }
        };
      };
    }(qc)), qc;
  }
  var Kp;
  function dg() {
    return Kp || (Kp = 1, Bc.exports = hg()), Bc.exports;
  }
  var Hc = { exports: {} };
  var wt = {};
  var Jp;
  function pg() {
    if (Jp)
      return wt;
    Jp = 1;
    var s = lf();
    function u(m) {
      var h = "https://react.dev/errors/" + m;
      if (1 < arguments.length) {
        h += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var _ = 2; _ < arguments.length; _++)
          h += "&args[]=" + encodeURIComponent(arguments[_]);
      }
      return "Minified React error #" + m + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function r() {
    }
    var o = { d: { f: r, r: function() {
      throw Error(u(522));
    }, D: r, C: r, L: r, m: r, X: r, S: r, M: r }, p: 0, findDOMNode: null }, g = Symbol.for("react.portal");
    function b(m, h, _) {
      var R = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return { $$typeof: g, key: R == null ? null : "" + R, children: m, containerInfo: h, implementation: _ };
    }
    var p = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function v(m, h) {
      if (m === "font")
        return "";
      if (typeof h == "string")
        return h === "use-credentials" ? h : "";
    }
    return wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, wt.createPortal = function(m, h) {
      var _ = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11)
        throw Error(u(299));
      return b(m, h, null, _);
    }, wt.flushSync = function(m) {
      var h = p.T, _ = o.p;
      try {
        if (p.T = null, o.p = 2, m)
          return m();
      } finally {
        p.T = h, o.p = _, o.d.f();
      }
    }, wt.preconnect = function(m, h) {
      typeof m == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, o.d.C(m, h));
    }, wt.prefetchDNS = function(m) {
      typeof m == "string" && o.d.D(m);
    }, wt.preinit = function(m, h) {
      if (typeof m == "string" && h && typeof h.as == "string") {
        var _ = h.as, R = v(_, h.crossOrigin), X = typeof h.integrity == "string" ? h.integrity : void 0, w = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
        _ === "style" ? o.d.S(m, typeof h.precedence == "string" ? h.precedence : void 0, { crossOrigin: R, integrity: X, fetchPriority: w }) : _ === "script" && o.d.X(m, { crossOrigin: R, integrity: X, fetchPriority: w, nonce: typeof h.nonce == "string" ? h.nonce : void 0 });
      }
    }, wt.preinitModule = function(m, h) {
      if (typeof m == "string")
        if (typeof h == "object" && h !== null) {
          if (h.as == null || h.as === "script") {
            var _ = v(h.as, h.crossOrigin);
            o.d.M(m, { crossOrigin: _, integrity: typeof h.integrity == "string" ? h.integrity : void 0, nonce: typeof h.nonce == "string" ? h.nonce : void 0 });
          }
        } else
          h == null && o.d.M(m);
    }, wt.preload = function(m, h) {
      if (typeof m == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
        var _ = h.as, R = v(_, h.crossOrigin);
        o.d.L(m, _, { crossOrigin: R, integrity: typeof h.integrity == "string" ? h.integrity : void 0, nonce: typeof h.nonce == "string" ? h.nonce : void 0, type: typeof h.type == "string" ? h.type : void 0, fetchPriority: typeof h.fetchPriority == "string" ? h.fetchPriority : void 0, referrerPolicy: typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0, imageSrcSet: typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0, imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0, media: typeof h.media == "string" ? h.media : void 0 });
      }
    }, wt.preloadModule = function(m, h) {
      if (typeof m == "string")
        if (h) {
          var _ = v(h.as, h.crossOrigin);
          o.d.m(m, { as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0, crossOrigin: _, integrity: typeof h.integrity == "string" ? h.integrity : void 0 });
        } else
          o.d.m(m);
    }, wt.requestFormReset = function(m) {
      o.d.r(m);
    }, wt.unstable_batchedUpdates = function(m, h) {
      return m(h);
    }, wt.useFormState = function(m, h, _) {
      return p.H.useFormState(m, h, _);
    }, wt.useFormStatus = function() {
      return p.H.useHostTransitionStatus();
    }, wt.version = "19.2.0", wt;
  }
  var Fp;
  function mg() {
    if (Fp)
      return Hc.exports;
    Fp = 1;
    function s() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
        } catch (u) {
          console.error(u);
        }
    }
    return s(), Hc.exports = pg(), Hc.exports;
  }
  var Wp;
  function yg() {
    if (Wp)
      return wu;
    Wp = 1;
    var s = dg(), u = lf(), r = mg();
    function o(e) {
      var t = "https://react.dev/errors/" + e;
      if (1 < arguments.length) {
        t += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += "&args[]=" + encodeURIComponent(arguments[n]);
      }
      return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function g(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function b(e) {
      var t = e, n = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        e = t;
        do
          t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
        while (e);
      }
      return t.tag === 3 ? n : null;
    }
    function p(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function v(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function m(e) {
      if (b(e) !== e)
        throw Error(o(188));
    }
    function h(e) {
      var t = e.alternate;
      if (!t) {
        if (t = b(e), t === null)
          throw Error(o(188));
        return t !== e ? null : e;
      }
      for (var n = e, a = t; ; ) {
        var l = n.return;
        if (l === null)
          break;
        var i = l.alternate;
        if (i === null) {
          if (a = l.return, a !== null) {
            n = a;
            continue;
          }
          break;
        }
        if (l.child === i.child) {
          for (i = l.child; i; ) {
            if (i === n)
              return m(l), e;
            if (i === a)
              return m(l), t;
            i = i.sibling;
          }
          throw Error(o(188));
        }
        if (n.return !== a.return)
          n = l, a = i;
        else {
          for (var c = false, y = l.child; y; ) {
            if (y === n) {
              c = true, n = l, a = i;
              break;
            }
            if (y === a) {
              c = true, a = l, n = i;
              break;
            }
            y = y.sibling;
          }
          if (!c) {
            for (y = i.child; y; ) {
              if (y === n) {
                c = true, n = i, a = l;
                break;
              }
              if (y === a) {
                c = true, a = i, n = l;
                break;
              }
              y = y.sibling;
            }
            if (!c)
              throw Error(o(189));
          }
        }
        if (n.alternate !== a)
          throw Error(o(190));
      }
      if (n.tag !== 3)
        throw Error(o(188));
      return n.stateNode.current === n ? e : t;
    }
    function _(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6)
        return e;
      for (e = e.child; e !== null; ) {
        if (t = _(e), t !== null)
          return t;
        e = e.sibling;
      }
      return null;
    }
    var R = Object.assign, X = Symbol.for("react.element"), w = Symbol.for("react.transitional.element"), q = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), ue = Symbol.for("react.strict_mode"), ge = Symbol.for("react.profiler"), je = Symbol.for("react.consumer"), oe = Symbol.for("react.context"), Oe = Symbol.for("react.forward_ref"), we = Symbol.for("react.suspense"), Qe = Symbol.for("react.suspense_list"), ce = Symbol.for("react.memo"), it = Symbol.for("react.lazy"), ht = Symbol.for("react.activity"), Rt = Symbol.for("react.memo_cache_sentinel"), dt = Symbol.iterator;
    function We(e) {
      return e === null || typeof e != "object" ? null : (e = dt && e[dt] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var he = Symbol.for("react.client.reference");
    function Se(e) {
      if (e == null)
        return null;
      if (typeof e == "function")
        return e.$$typeof === he ? null : e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case k:
          return "Fragment";
        case ge:
          return "Profiler";
        case ue:
          return "StrictMode";
        case we:
          return "Suspense";
        case Qe:
          return "SuspenseList";
        case ht:
          return "Activity";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case q:
            return "Portal";
          case oe:
            return e.displayName || "Context";
          case je:
            return (e._context.displayName || "Context") + ".Consumer";
          case Oe:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case ce:
            return t = e.displayName || null, t !== null ? t : Se(e.type) || "Memo";
          case it:
            t = e._payload, e = e._init;
            try {
              return Se(e(t));
            } catch (n) {
            }
        }
      return null;
    }
    var se = Array.isArray, B = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = { pending: false, data: null, method: null, action: null }, ve = [], ze = -1;
    function A(e) {
      return { current: e };
    }
    function V(e) {
      0 > ze || (e.current = ve[ze], ve[ze] = null, ze--);
    }
    function P(e, t) {
      ze++, ve[ze] = e.current, e.current = t;
    }
    var te = A(null), de = A(null), xe = A(null), Ce = A(null);
    function xt(e, t) {
      switch (P(xe, t), P(de, e), P(te, null), t.nodeType) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? ip(e) : 0;
          break;
        default:
          if (e = t.tagName, t = t.namespaceURI)
            t = ip(t), e = up(t, e);
          else
            switch (e) {
              case "svg":
                e = 1;
                break;
              case "math":
                e = 2;
                break;
              default:
                e = 0;
            }
      }
      V(te), P(te, e);
    }
    function $e() {
      V(te), V(de), V(xe);
    }
    function Za(e) {
      e.memoizedState !== null && P(Ce, e);
      var t = te.current, n = up(t, e.type);
      t !== n && (P(de, e), P(te, n));
    }
    function El(e) {
      de.current === e && (V(te), V(de)), Ce.current === e && (V(Ce), xu._currentValue = J);
    }
    var Al, Cu;
    function On(e) {
      if (Al === void 0)
        try {
          throw Error();
        } catch (n) {
          var t = n.stack.trim().match(/\n( *(at )?)/);
          Al = t && t[1] || "", Cu = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + Al + e + Cu;
    }
    var Ti = false;
    function Ei(e, t) {
      if (!e || Ti)
        return "";
      Ti = true;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var a = { DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var Z = function() {
                throw Error();
              };
              if (Object.defineProperty(Z.prototype, "props", { set: function() {
                throw Error();
              } }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(Z, []);
                } catch (L) {
                  var M = L;
                }
                Reflect.construct(e, [], Z);
              } else {
                try {
                  Z.call();
                } catch (L) {
                  M = L;
                }
                e.call(Z.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (L) {
                M = L;
              }
              (Z = e()) && typeof Z.catch == "function" && Z.catch(function() {
              });
            }
          } catch (L) {
            if (L && M && typeof L.stack == "string")
              return [L.stack, M.stack];
          }
          return [null, null];
        } };
        a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var l = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
        l && l.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
        var i = a.DetermineComponentFrameRoot(), c = i[0], y = i[1];
        if (c && y) {
          var T = c.split(`
`), D = y.split(`
`);
          for (l = a = 0; a < T.length && !T[a].includes("DetermineComponentFrameRoot"); )
            a++;
          for (; l < D.length && !D[l].includes("DetermineComponentFrameRoot"); )
            l++;
          if (a === T.length || l === D.length)
            for (a = T.length - 1, l = D.length - 1; 1 <= a && 0 <= l && T[a] !== D[l]; )
              l--;
          for (; 1 <= a && 0 <= l; a--, l--)
            if (T[a] !== D[l]) {
              if (a !== 1 || l !== 1)
                do
                  if (a--, l--, 0 > l || T[a] !== D[l]) {
                    var Y = `
` + T[a].replace(" at new ", " at ");
                    return e.displayName && Y.includes("<anonymous>") && (Y = Y.replace("<anonymous>", e.displayName)), Y;
                  }
                while (1 <= a && 0 <= l);
              break;
            }
        }
      } finally {
        Ti = false, Error.prepareStackTrace = n;
      }
      return (n = e ? e.displayName || e.name : "") ? On(n) : "";
    }
    function Er(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return On(e.type);
        case 16:
          return On("Lazy");
        case 13:
          return e.child !== t && t !== null ? On("Suspense Fallback") : On("Suspense");
        case 19:
          return On("SuspenseList");
        case 0:
        case 15:
          return Ei(e.type, false);
        case 11:
          return Ei(e.type.render, false);
        case 1:
          return Ei(e.type, true);
        case 31:
          return On("Activity");
        default:
          return "";
      }
    }
    function Uu(e) {
      try {
        var t = "", n = null;
        do
          t += Er(e, n), n = e, e = e.return;
        while (e);
        return t;
      } catch (a) {
        return `
Error generating stack: ` + a.message + `
` + a.stack;
      }
    }
    var Ai = Object.prototype.hasOwnProperty, Oi = s.unstable_scheduleCallback, wi = s.unstable_cancelCallback, Ar = s.unstable_shouldYield, Du = s.unstable_requestPaint, Nt = s.unstable_now, H = s.unstable_getCurrentPriorityLevel, fe = s.unstable_ImmediatePriority, Ri = s.unstable_UserBlockingPriority, ka = s.unstable_NormalPriority, Or = s.unstable_LowPriority, Ol = s.unstable_IdlePriority, Mu = s.log, Bu = s.unstable_setDisableYieldValue, Ka = null, zt = null;
    function Qt(e) {
      if (typeof Mu == "function" && Bu(e), zt && typeof zt.setStrictMode == "function")
        try {
          zt.setStrictMode(Ka, e);
        } catch (t) {
        }
    }
    var Ot = Math.clz32 ? Math.clz32 : wr, Ni = Math.log, qu = Math.LN2;
    function wr(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (Ni(e) / qu | 0) | 0;
    }
    var Ja = 256, wl = 262144, Fa = 4194304;
    function wn(e) {
      var t = e & 42;
      if (t !== 0)
        return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return e;
      }
    }
    function Rl(e, t, n) {
      var a = e.pendingLanes;
      if (a === 0)
        return 0;
      var l = 0, i = e.suspendedLanes, c = e.pingedLanes;
      e = e.warmLanes;
      var y = a & 134217727;
      return y !== 0 ? (a = y & ~i, a !== 0 ? l = wn(a) : (c &= y, c !== 0 ? l = wn(c) : n || (n = y & ~e, n !== 0 && (l = wn(n))))) : (y = a & ~i, y !== 0 ? l = wn(y) : c !== 0 ? l = wn(c) : n || (n = a & ~e, n !== 0 && (l = wn(n)))), l === 0 ? 0 : t !== 0 && t !== l && (t & i) === 0 && (i = l & -l, n = t & -t, i >= n || i === 32 && (n & 4194048) !== 0) ? t : l;
    }
    function Wa(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function Rr(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function Hu() {
      var e = Fa;
      return Fa <<= 1, (Fa & 62914560) === 0 && (Fa = 4194304), e;
    }
    function $a(e) {
      for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
      return t;
    }
    function Xn(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function Nr(e, t, n, a, l, i) {
      var c = e.pendingLanes;
      e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
      var y = e.entanglements, T = e.expirationTimes, D = e.hiddenUpdates;
      for (n = c & ~n; 0 < n; ) {
        var Y = 31 - Ot(n), Z = 1 << Y;
        y[Y] = 0, T[Y] = -1;
        var M = D[Y];
        if (M !== null)
          for (D[Y] = null, Y = 0; Y < M.length; Y++) {
            var L = M[Y];
            L !== null && (L.lane &= -536870913);
          }
        n &= ~Z;
      }
      a !== 0 && Lu(e, a, 0), i !== 0 && l === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(c & ~t));
    }
    function Lu(e, t, n) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var a = 31 - Ot(t);
      e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | n & 261930;
    }
    function Yu(e, t) {
      var n = e.entangledLanes |= t;
      for (e = e.entanglements; n; ) {
        var a = 31 - Ot(n), l = 1 << a;
        l & t | e[a] & t && (e[a] |= t), n &= ~l;
      }
    }
    function Xu(e, t) {
      var n = t & -t;
      return n = (n & 42) !== 0 ? 1 : ut(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
    }
    function ut(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function zi(e) {
      return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
    }
    function Qu() {
      var e = Q.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Np(e.type));
    }
    function Gu(e, t) {
      var n = Q.p;
      try {
        return Q.p = e, t();
      } finally {
        Q.p = n;
      }
    }
    var mn = Math.random().toString(36).slice(2), pt = "__reactFiber$" + mn, gt = "__reactProps$" + mn, Rn = "__reactContainer$" + mn, ji = "__reactEvents$" + mn, zr = "__reactListeners$" + mn, Vu = "__reactHandles$" + mn, da = "__reactResources$" + mn, Nn = "__reactMarker$" + mn;
    function Ci(e) {
      delete e[pt], delete e[gt], delete e[ji], delete e[zr], delete e[Vu];
    }
    function pa(e) {
      var t = e[pt];
      if (t)
        return t;
      for (var n = e.parentNode; n; ) {
        if (t = n[Rn] || n[pt]) {
          if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
            for (e = dp(e); e !== null; ) {
              if (n = e[pt])
                return n;
              e = dp(e);
            }
          return t;
        }
        e = n, n = e.parentNode;
      }
      return null;
    }
    function zn(e) {
      if (e = e[pt] || e[Rn]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
          return e;
      }
      return null;
    }
    function Pa(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6)
        return e.stateNode;
      throw Error(o(33));
    }
    function ma(e) {
      var t = e[da];
      return t || (t = e[da] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function Pe(e) {
      e[Nn] = true;
    }
    var Ut = /* @__PURE__ */ new Set(), Nl = {};
    function jn(e, t) {
      Gt(e, t), Gt(e + "Capture", t);
    }
    function Gt(e, t) {
      for (Nl[e] = t, e = 0; e < t.length; e++)
        Ut.add(t[e]);
    }
    var Zu = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), ku = {}, Ku = {};
    function jr(e) {
      return Ai.call(Ku, e) ? true : Ai.call(ku, e) ? false : Zu.test(e) ? Ku[e] = true : (ku[e] = true, false);
    }
    function Qn(e, t, n) {
      if (jr(t))
        if (n === null)
          e.removeAttribute(t);
        else {
          switch (typeof n) {
            case "undefined":
            case "function":
            case "symbol":
              e.removeAttribute(t);
              return;
            case "boolean":
              var a = t.toLowerCase().slice(0, 5);
              if (a !== "data-" && a !== "aria-") {
                e.removeAttribute(t);
                return;
              }
          }
          e.setAttribute(t, "" + n);
        }
    }
    function Ia(e, t, n) {
      if (n === null)
        e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        e.setAttribute(t, "" + n);
      }
    }
    function Pt(e, t, n, a) {
      if (a === null)
        e.removeAttribute(n);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(n);
            return;
        }
        e.setAttributeNS(t, n, "" + a);
      }
    }
    function Dt(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return e;
        default:
          return "";
      }
    }
    function Ju(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Cr(e, t, n) {
      var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      if (!e.hasOwnProperty(t) && typeof a != "undefined" && typeof a.get == "function" && typeof a.set == "function") {
        var l = a.get, i = a.set;
        return Object.defineProperty(e, t, { configurable: true, get: function() {
          return l.call(this);
        }, set: function(c) {
          n = "" + c, i.call(this, c);
        } }), Object.defineProperty(e, t, { enumerable: a.enumerable }), { getValue: function() {
          return n;
        }, setValue: function(c) {
          n = "" + c;
        }, stopTracking: function() {
          e._valueTracker = null, delete e[t];
        } };
      }
    }
    function Ui(e) {
      if (!e._valueTracker) {
        var t = Ju(e) ? "checked" : "value";
        e._valueTracker = Cr(e, t, "" + e[t]);
      }
    }
    function Di(e) {
      if (!e)
        return false;
      var t = e._valueTracker;
      if (!t)
        return true;
      var n = t.getValue(), a = "";
      return e && (a = Ju(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== n ? (t.setValue(e), true) : false;
    }
    function el(e) {
      if (e = e || (typeof document != "undefined" ? document : void 0), typeof e == "undefined")
        return null;
      try {
        return e.activeElement || e.body;
      } catch (t) {
        return e.body;
      }
    }
    var Gn = /[\n"\\]/g;
    function jt(e) {
      return e.replace(Gn, function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      });
    }
    function Mi(e, t, n, a, l, i, c, y) {
      e.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? e.type = c : e.removeAttribute("type"), t != null ? c === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Dt(t)) : e.value !== "" + Dt(t) && (e.value = "" + Dt(t)) : c !== "submit" && c !== "reset" || e.removeAttribute("value"), t != null ? Bi(e, c, Dt(t)) : n != null ? Bi(e, c, Dt(n)) : a != null && e.removeAttribute("value"), l == null && i != null && (e.defaultChecked = !!i), l != null && (e.checked = l && typeof l != "function" && typeof l != "symbol"), y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? e.name = "" + Dt(y) : e.removeAttribute("name");
    }
    function Fu(e, t, n, a, l, i, c, y) {
      if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || n != null) {
        if (!(i !== "submit" && i !== "reset" || t != null)) {
          Ui(e);
          return;
        }
        n = n != null ? "" + Dt(n) : "", t = t != null ? "" + Dt(t) : n, y || t === e.value || (e.value = t), e.defaultValue = t;
      }
      a = a != null ? a : l, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = y ? e.checked : !!a, e.defaultChecked = !!a, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.name = c), Ui(e);
    }
    function Bi(e, t, n) {
      t === "number" && el(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
    }
    function ya(e, t, n, a) {
      if (e = e.options, t) {
        t = {};
        for (var l = 0; l < n.length; l++)
          t["$" + n[l]] = true;
        for (n = 0; n < e.length; n++)
          l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && a && (e[n].defaultSelected = true);
      } else {
        for (n = "" + Dt(n), t = null, l = 0; l < e.length; l++) {
          if (e[l].value === n) {
            e[l].selected = true, a && (e[l].defaultSelected = true);
            return;
          }
          t !== null || e[l].disabled || (t = e[l]);
        }
        t !== null && (t.selected = true);
      }
    }
    function Wu(e, t, n) {
      if (t != null && (t = "" + Dt(t), t !== e.value && (e.value = t), n == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = n != null ? "" + Dt(n) : "";
    }
    function qi(e, t, n, a) {
      if (t == null) {
        if (a != null) {
          if (n != null)
            throw Error(o(92));
          if (se(a)) {
            if (1 < a.length)
              throw Error(o(93));
            a = a[0];
          }
          n = a;
        }
        n == null && (n = ""), t = n;
      }
      n = Dt(t), e.defaultValue = n, a = e.textContent, a === n && a !== "" && a !== null && (e.value = a), Ui(e);
    }
    function Vn(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var zl = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function $u(e, t, n) {
      var a = t.indexOf("--") === 0;
      n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || zl.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
    }
    function Hi(e, t, n) {
      if (t != null && typeof t != "object")
        throw Error(o(62));
      if (e = e.style, n != null) {
        for (var a in n)
          !n.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
        for (var l in t)
          a = t[l], t.hasOwnProperty(l) && n[l] !== a && $u(e, l, a);
      } else
        for (var i in t)
          t.hasOwnProperty(i) && $u(e, i, t[i]);
    }
    function jl(e) {
      if (e.indexOf("-") === -1)
        return false;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    var Pu = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), Ur = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Cl(e) {
      return Ur.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function It() {
    }
    var tl = null;
    function Ul(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    var ga = null, Zn = null;
    function Dl(e) {
      var t = zn(e);
      if (t && (e = t.stateNode)) {
        var n = e[gt] || null;
        e:
          switch (e = t.stateNode, t.type) {
            case "input":
              if (Mi(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode; )
                  n = n.parentNode;
                for (n = n.querySelectorAll('input[name="' + jt("" + t) + '"][type="radio"]'), t = 0; t < n.length; t++) {
                  var a = n[t];
                  if (a !== e && a.form === e.form) {
                    var l = a[gt] || null;
                    if (!l)
                      throw Error(o(90));
                    Mi(a, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name);
                  }
                }
                for (t = 0; t < n.length; t++)
                  a = n[t], a.form === e.form && Di(a);
              }
              break e;
            case "textarea":
              Wu(e, n.value, n.defaultValue);
              break e;
            case "select":
              t = n.value, t != null && ya(e, !!n.multiple, t, false);
          }
      }
    }
    var Ml = false;
    function Li(e, t, n) {
      if (Ml)
        return e(t, n);
      Ml = true;
      try {
        var a = e(t);
        return a;
      } finally {
        if (Ml = false, (ga !== null || Zn !== null) && (Ys(), ga && (t = ga, e = Zn, Zn = ga = null, Dl(t), e)))
          for (t = 0; t < e.length; t++)
            Dl(e[t]);
      }
    }
    function Cn(e, t) {
      var n = e.stateNode;
      if (n === null)
        return null;
      var a = n[gt] || null;
      if (a === null)
        return null;
      n = a[t];
      e:
        switch (t) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (a = !a.disabled) || (e = e.type, a = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !a;
            break e;
          default:
            e = false;
        }
      if (e)
        return null;
      if (n && typeof n != "function")
        throw Error(o(231, t, typeof n));
      return n;
    }
    var en = !(typeof window == "undefined" || typeof window.document == "undefined" || typeof window.document.createElement == "undefined"), Yi = false;
    if (en)
      try {
        var Un = {};
        Object.defineProperty(Un, "passive", { get: function() {
          Yi = true;
        } }), window.addEventListener("test", Un, Un), window.removeEventListener("test", Un, Un);
      } catch (e) {
        Yi = false;
      }
    var mt = null, va = null, kn = null;
    function Bl() {
      if (kn)
        return kn;
      var e, t = va, n = t.length, a, l = "value" in mt ? mt.value : mt.textContent, i = l.length;
      for (e = 0; e < n && t[e] === l[e]; e++)
        ;
      var c = n - e;
      for (a = 1; a <= c && t[n - a] === l[i - a]; a++)
        ;
      return kn = l.slice(e, 1 < a ? 1 - a : void 0);
    }
    function ql(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Hl() {
      return true;
    }
    function Iu() {
      return false;
    }
    function vt(e) {
      function t(n, a, l, i, c) {
        this._reactName = n, this._targetInst = l, this.type = a, this.nativeEvent = i, this.target = c, this.currentTarget = null;
        for (var y in e)
          e.hasOwnProperty(y) && (n = e[y], this[y] = n ? n(i) : i[y]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === false) ? Hl : Iu, this.isPropagationStopped = Iu, this;
      }
      return R(t.prototype, { preventDefault: function() {
        this.defaultPrevented = true;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = Hl);
      }, stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = Hl);
      }, persist: function() {
      }, isPersistent: Hl }), t;
    }
    var Kn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
      return e.timeStamp || Date.now();
    }, defaultPrevented: 0, isTrusted: 0 }, nl = vt(Kn), Ve = R({}, Kn, { view: 0, detail: 0 }), f = vt(Ve), d, S, x, E = R({}, Ve, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: nn, button: 0, buttons: 0, relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    }, movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== x && (x && e.type === "mousemove" ? (d = e.screenX - x.screenX, S = e.screenY - x.screenY) : S = d = 0, x = e), d);
    }, movementY: function(e) {
      return "movementY" in e ? e.movementY : S;
    } }), C = vt(E), j = R({}, E, { dataTransfer: 0 }), K = vt(j), ne = R({}, Ve, { relatedTarget: 0 }), F = vt(ne), W = R({}, Kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), re = vt(W), He = R({}, Kn, { clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    } }), pe = vt(He), $ = R({}, Kn, { data: 0 }), I = vt($), ke = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, bt = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, nt = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function tn(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = nt[e]) ? !!t[e] : false;
    }
    function nn() {
      return tn;
    }
    var Xi = R({}, Ve, { key: function(e) {
      if (e.key) {
        var t = ke[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      return e.type === "keypress" ? (e = ql(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? bt[e.keyCode] || "Unidentified" : "";
    }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: nn, charCode: function(e) {
      return e.type === "keypress" ? ql(e) : 0;
    }, keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }, which: function(e) {
      return e.type === "keypress" ? ql(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    } }), es = vt(Xi), Dn = R({}, E, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ll = vt(Dn), Yl = R({}, Ve, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: nn }), ts = vt(Yl), ns = R({}, Kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xl = vt(ns), al = R({}, E, { deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    }, deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    }, deltaZ: 0, deltaMode: 0 }), Jn = vt(al), as = R({}, Kn, { newState: 0, oldState: 0 }), an = vt(as), ls = [9, 13, 27, 32], ln = en && "CompositionEvent" in window, ba = null;
    en && "documentMode" in document && (ba = document.documentMode);
    var Dr = en && "TextEvent" in window && !ba, yn = en && (!ln || ba && 8 < ba && 11 >= ba), Fn = " ", Ql = false;
    function ll(e, t) {
      switch (e) {
        case "keyup":
          return ls.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function Qi(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    var Gl = false;
    function $m(e, t) {
      switch (e) {
        case "compositionend":
          return Qi(t);
        case "keypress":
          return t.which !== 32 ? null : (Ql = true, Fn);
        case "textInput":
          return e = t.data, e === Fn && Ql ? null : e;
        default:
          return null;
      }
    }
    function Pm(e, t) {
      if (Gl)
        return e === "compositionend" || !ln && ll(e, t) ? (e = Bl(), kn = va = mt = null, Gl = false, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return yn && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    var Im = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
    function yf(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Im[e.type] : t === "textarea";
    }
    function gf(e, t, n, a) {
      ga ? Zn ? Zn.push(a) : Zn = [a] : ga = a, t = Ks(t, "onChange"), 0 < t.length && (n = new nl("onChange", "change", null, n, a), e.push({ event: n, listeners: t }));
    }
    var Gi = null, Vi = null;
    function e0(e) {
      Id(e, 0);
    }
    function is(e) {
      var t = Pa(e);
      if (Di(t))
        return e;
    }
    function vf(e, t) {
      if (e === "change")
        return t;
    }
    var bf = false;
    if (en) {
      var Mr;
      if (en) {
        var Br = "oninput" in document;
        if (!Br) {
          var Sf = document.createElement("div");
          Sf.setAttribute("oninput", "return;"), Br = typeof Sf.oninput == "function";
        }
        Mr = Br;
      } else
        Mr = false;
      bf = Mr && (!document.documentMode || 9 < document.documentMode);
    }
    function xf() {
      Gi && (Gi.detachEvent("onpropertychange", _f), Vi = Gi = null);
    }
    function _f(e) {
      if (e.propertyName === "value" && is(Vi)) {
        var t = [];
        gf(t, Vi, e, Ul(e)), Li(e0, t);
      }
    }
    function t0(e, t, n) {
      e === "focusin" ? (xf(), Gi = t, Vi = n, Gi.attachEvent("onpropertychange", _f)) : e === "focusout" && xf();
    }
    function n0(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return is(Vi);
    }
    function a0(e, t) {
      if (e === "click")
        return is(t);
    }
    function l0(e, t) {
      if (e === "input" || e === "change")
        return is(t);
    }
    function i0(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Vt = typeof Object.is == "function" ? Object.is : i0;
    function Zi(e, t) {
      if (Vt(e, t))
        return true;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return false;
      var n = Object.keys(e), a = Object.keys(t);
      if (n.length !== a.length)
        return false;
      for (a = 0; a < n.length; a++) {
        var l = n[a];
        if (!Ai.call(t, l) || !Vt(e[l], t[l]))
          return false;
      }
      return true;
    }
    function Tf(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Ef(e, t) {
      var n = Tf(e);
      e = 0;
      for (var a; n; ) {
        if (n.nodeType === 3) {
          if (a = e + n.textContent.length, e <= t && a >= t)
            return { node: n, offset: t - e };
          e = a;
        }
        e: {
          for (; n; ) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break e;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = Tf(n);
      }
    }
    function Af(e, t) {
      return e && t ? e === t ? true : e && e.nodeType === 3 ? false : t && t.nodeType === 3 ? Af(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false : false;
    }
    function Of(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = el(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var n = typeof t.contentWindow.location.href == "string";
        } catch (a) {
          n = false;
        }
        if (n)
          e = t.contentWindow;
        else
          break;
        t = el(e.document);
      }
      return t;
    }
    function qr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    var u0 = en && "documentMode" in document && 11 >= document.documentMode, Vl = null, Hr = null, ki = null, Lr = false;
    function wf(e, t, n) {
      var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      Lr || Vl == null || Vl !== el(a) || (a = Vl, "selectionStart" in a && qr(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset }), ki && Zi(ki, a) || (ki = a, a = Ks(Hr, "onSelect"), 0 < a.length && (t = new nl("onSelect", "select", null, t, n), e.push({ event: t, listeners: a }), t.target = Vl)));
    }
    function il(e, t) {
      var n = {};
      return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
    }
    var Zl = { animationend: il("Animation", "AnimationEnd"), animationiteration: il("Animation", "AnimationIteration"), animationstart: il("Animation", "AnimationStart"), transitionrun: il("Transition", "TransitionRun"), transitionstart: il("Transition", "TransitionStart"), transitioncancel: il("Transition", "TransitionCancel"), transitionend: il("Transition", "TransitionEnd") }, Yr = {}, Rf = {};
    en && (Rf = document.createElement("div").style, "AnimationEvent" in window || (delete Zl.animationend.animation, delete Zl.animationiteration.animation, delete Zl.animationstart.animation), "TransitionEvent" in window || delete Zl.transitionend.transition);
    function ul(e) {
      if (Yr[e])
        return Yr[e];
      if (!Zl[e])
        return e;
      var t = Zl[e], n;
      for (n in t)
        if (t.hasOwnProperty(n) && n in Rf)
          return Yr[e] = t[n];
      return e;
    }
    var Nf = ul("animationend"), zf = ul("animationiteration"), jf = ul("animationstart"), s0 = ul("transitionrun"), r0 = ul("transitionstart"), o0 = ul("transitioncancel"), Cf = ul("transitionend"), Uf = /* @__PURE__ */ new Map(), Xr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Xr.push("scrollEnd");
    function gn(e, t) {
      Uf.set(e, t), jn(t, [e]);
    }
    var us = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e), error: e });
        if (!window.dispatchEvent(t))
          return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    }, un = [], kl = 0, Qr = 0;
    function ss() {
      for (var e = kl, t = Qr = kl = 0; t < e; ) {
        var n = un[t];
        un[t++] = null;
        var a = un[t];
        un[t++] = null;
        var l = un[t];
        un[t++] = null;
        var i = un[t];
        if (un[t++] = null, a !== null && l !== null) {
          var c = a.pending;
          c === null ? l.next = l : (l.next = c.next, c.next = l), a.pending = l;
        }
        i !== 0 && Df(n, l, i);
      }
    }
    function rs(e, t, n, a) {
      un[kl++] = e, un[kl++] = t, un[kl++] = n, un[kl++] = a, Qr |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
    }
    function Gr(e, t, n, a) {
      return rs(e, t, n, a), os(e);
    }
    function sl(e, t) {
      return rs(e, null, null, t), os(e);
    }
    function Df(e, t, n) {
      e.lanes |= n;
      var a = e.alternate;
      a !== null && (a.lanes |= n);
      for (var l = false, i = e.return; i !== null; )
        i.childLanes |= n, a = i.alternate, a !== null && (a.childLanes |= n), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (l = true)), e = i, i = i.return;
      return e.tag === 3 ? (i = e.stateNode, l && t !== null && (l = 31 - Ot(n), e = i.hiddenUpdates, a = e[l], a === null ? e[l] = [t] : a.push(t), t.lane = n | 536870912), i) : null;
    }
    function os(e) {
      if (50 < pu)
        throw pu = 0, Io = null, Error(o(185));
      for (var t = e.return; t !== null; )
        e = t, t = e.return;
      return e.tag === 3 ? e.stateNode : null;
    }
    var Kl = {};
    function c0(e, t, n, a) {
      this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function Zt(e, t, n, a) {
      return new c0(e, t, n, a);
    }
    function Vr(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function Wn(e, t) {
      var n = e.alternate;
      return n === null ? (n = Zt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
    }
    function Mf(e, t) {
      e.flags &= 65011714;
      var n = e.alternate;
      return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), e;
    }
    function cs(e, t, n, a, l, i) {
      var c = 0;
      if (a = e, typeof e == "function")
        Vr(e) && (c = 1);
      else if (typeof e == "string")
        c = my(e, n, te.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e:
          switch (e) {
            case ht:
              return e = Zt(31, n, t, l), e.elementType = ht, e.lanes = i, e;
            case k:
              return rl(n.children, l, i, t);
            case ue:
              c = 8, l |= 24;
              break;
            case ge:
              return e = Zt(12, n, t, l | 2), e.elementType = ge, e.lanes = i, e;
            case we:
              return e = Zt(13, n, t, l), e.elementType = we, e.lanes = i, e;
            case Qe:
              return e = Zt(19, n, t, l), e.elementType = Qe, e.lanes = i, e;
            default:
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case oe:
                    c = 10;
                    break e;
                  case je:
                    c = 9;
                    break e;
                  case Oe:
                    c = 11;
                    break e;
                  case ce:
                    c = 14;
                    break e;
                  case it:
                    c = 16, a = null;
                    break e;
                }
              c = 29, n = Error(o(130, e === null ? "null" : typeof e, "")), a = null;
          }
      return t = Zt(c, n, t, l), t.elementType = e, t.type = a, t.lanes = i, t;
    }
    function rl(e, t, n, a) {
      return e = Zt(7, e, a, t), e.lanes = n, e;
    }
    function Zr(e, t, n) {
      return e = Zt(6, e, null, t), e.lanes = n, e;
    }
    function Bf(e) {
      var t = Zt(18, null, null, 0);
      return t.stateNode = e, t;
    }
    function kr(e, t, n) {
      return t = Zt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
    }
    var qf = /* @__PURE__ */ new WeakMap();
    function sn(e, t) {
      if (typeof e == "object" && e !== null) {
        var n = qf.get(e);
        return n !== void 0 ? n : (t = { value: e, source: t, stack: Uu(t) }, qf.set(e, t), t);
      }
      return { value: e, source: t, stack: Uu(t) };
    }
    var Jl = [], Fl = 0, fs = null, Ki = 0, rn = [], on = 0, Sa = null, Mn = 1, Bn = "";
    function $n(e, t) {
      Jl[Fl++] = Ki, Jl[Fl++] = fs, fs = e, Ki = t;
    }
    function Hf(e, t, n) {
      rn[on++] = Mn, rn[on++] = Bn, rn[on++] = Sa, Sa = e;
      var a = Mn;
      e = Bn;
      var l = 32 - Ot(a) - 1;
      a &= ~(1 << l), n += 1;
      var i = 32 - Ot(t) + l;
      if (30 < i) {
        var c = l - l % 5;
        i = (a & (1 << c) - 1).toString(32), a >>= c, l -= c, Mn = 1 << 32 - Ot(t) + l | n << l | a, Bn = i + e;
      } else
        Mn = 1 << i | n << l | a, Bn = e;
    }
    function Kr(e) {
      e.return !== null && ($n(e, 1), Hf(e, 1, 0));
    }
    function Jr(e) {
      for (; e === fs; )
        fs = Jl[--Fl], Jl[Fl] = null, Ki = Jl[--Fl], Jl[Fl] = null;
      for (; e === Sa; )
        Sa = rn[--on], rn[on] = null, Bn = rn[--on], rn[on] = null, Mn = rn[--on], rn[on] = null;
    }
    function Lf(e, t) {
      rn[on++] = Mn, rn[on++] = Bn, rn[on++] = Sa, Mn = t.id, Bn = t.overflow, Sa = e;
    }
    var _t = null, Ke = null, Re = false, xa = null, cn = false, Fr = Error(o(519));
    function _a(e) {
      var t = Error(o(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
      throw Ji(sn(t, e)), Fr;
    }
    function Yf(e) {
      var t = e.stateNode, n = e.type, a = e.memoizedProps;
      switch (t[pt] = e, t[gt] = a, n) {
        case "dialog":
          Te("cancel", t), Te("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          Te("load", t);
          break;
        case "video":
        case "audio":
          for (n = 0; n < yu.length; n++)
            Te(yu[n], t);
          break;
        case "source":
          Te("error", t);
          break;
        case "img":
        case "image":
        case "link":
          Te("error", t), Te("load", t);
          break;
        case "details":
          Te("toggle", t);
          break;
        case "input":
          Te("invalid", t), Fu(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, true);
          break;
        case "select":
          Te("invalid", t);
          break;
        case "textarea":
          Te("invalid", t), qi(t, a.value, a.defaultValue, a.children);
      }
      n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === true || ap(t.textContent, n) ? (a.popover != null && (Te("beforetoggle", t), Te("toggle", t)), a.onScroll != null && Te("scroll", t), a.onScrollEnd != null && Te("scrollend", t), a.onClick != null && (t.onclick = It), t = true) : t = false, t || _a(e, true);
    }
    function Xf(e) {
      for (_t = e.return; _t; )
        switch (_t.tag) {
          case 5:
          case 31:
          case 13:
            cn = false;
            return;
          case 27:
          case 3:
            cn = true;
            return;
          default:
            _t = _t.return;
        }
    }
    function Wl(e) {
      if (e !== _t)
        return false;
      if (!Re)
        return Xf(e), Re = true, false;
      var t = e.tag, n;
      if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || pc(e.type, e.memoizedProps)), n = !n), n && Ke && _a(e), Xf(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(o(317));
        Ke = hp(e);
      } else if (t === 31) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(o(317));
        Ke = hp(e);
      } else
        t === 27 ? (t = Ke, Ba(e.type) ? (e = bc, bc = null, Ke = e) : Ke = t) : Ke = _t ? hn(e.stateNode.nextSibling) : null;
      return true;
    }
    function ol() {
      Ke = _t = null, Re = false;
    }
    function Wr() {
      var e = xa;
      return e !== null && (Ht === null ? Ht = e : Ht.push.apply(Ht, e), xa = null), e;
    }
    function Ji(e) {
      xa === null ? xa = [e] : xa.push(e);
    }
    var $r = A(null), cl = null, Pn = null;
    function Ta(e, t, n) {
      P($r, t._currentValue), t._currentValue = n;
    }
    function In(e) {
      e._currentValue = $r.current, V($r);
    }
    function Pr(e, t, n) {
      for (; e !== null; ) {
        var a = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === n)
          break;
        e = e.return;
      }
    }
    function Ir(e, t, n, a) {
      var l = e.child;
      for (l !== null && (l.return = e); l !== null; ) {
        var i = l.dependencies;
        if (i !== null) {
          var c = l.child;
          i = i.firstContext;
          e:
            for (; i !== null; ) {
              var y = i;
              i = l;
              for (var T = 0; T < t.length; T++)
                if (y.context === t[T]) {
                  i.lanes |= n, y = i.alternate, y !== null && (y.lanes |= n), Pr(i.return, n, e), a || (c = null);
                  break e;
                }
              i = y.next;
            }
        } else if (l.tag === 18) {
          if (c = l.return, c === null)
            throw Error(o(341));
          c.lanes |= n, i = c.alternate, i !== null && (i.lanes |= n), Pr(c, n, e), c = null;
        } else
          c = l.child;
        if (c !== null)
          c.return = l;
        else
          for (c = l; c !== null; ) {
            if (c === e) {
              c = null;
              break;
            }
            if (l = c.sibling, l !== null) {
              l.return = c.return, c = l;
              break;
            }
            c = c.return;
          }
        l = c;
      }
    }
    function $l(e, t, n, a) {
      e = null;
      for (var l = t, i = false; l !== null; ) {
        if (!i) {
          if ((l.flags & 524288) !== 0)
            i = true;
          else if ((l.flags & 262144) !== 0)
            break;
        }
        if (l.tag === 10) {
          var c = l.alternate;
          if (c === null)
            throw Error(o(387));
          if (c = c.memoizedProps, c !== null) {
            var y = l.type;
            Vt(l.pendingProps.value, c.value) || (e !== null ? e.push(y) : e = [y]);
          }
        } else if (l === Ce.current) {
          if (c = l.alternate, c === null)
            throw Error(o(387));
          c.memoizedState.memoizedState !== l.memoizedState.memoizedState && (e !== null ? e.push(xu) : e = [xu]);
        }
        l = l.return;
      }
      e !== null && Ir(t, e, n, a), t.flags |= 262144;
    }
    function hs(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!Vt(e.context._currentValue, e.memoizedValue))
          return true;
        e = e.next;
      }
      return false;
    }
    function fl(e) {
      cl = e, Pn = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function Tt(e) {
      return Qf(cl, e);
    }
    function ds(e, t) {
      return cl === null && fl(e), Qf(e, t);
    }
    function Qf(e, t) {
      var n = t._currentValue;
      if (t = { context: t, memoizedValue: n, next: null }, Pn === null) {
        if (e === null)
          throw Error(o(308));
        Pn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
      } else
        Pn = Pn.next = t;
      return n;
    }
    var f0 = typeof AbortController != "undefined" ? AbortController : function() {
      var e = [], t = this.signal = { aborted: false, addEventListener: function(n, a) {
        e.push(a);
      } };
      this.abort = function() {
        t.aborted = true, e.forEach(function(n) {
          return n();
        });
      };
    }, h0 = s.unstable_scheduleCallback, d0 = s.unstable_NormalPriority, st = { $$typeof: oe, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
    function eo() {
      return { controller: new f0(), data: /* @__PURE__ */ new Map(), refCount: 0 };
    }
    function Fi(e) {
      e.refCount--, e.refCount === 0 && h0(d0, function() {
        e.controller.abort();
      });
    }
    var Wi = null, to = 0, Pl = 0, Il = null;
    function p0(e, t) {
      if (Wi === null) {
        var n = Wi = [];
        to = 0, Pl = ic(), Il = { status: "pending", value: void 0, then: function(a) {
          n.push(a);
        } };
      }
      return to++, t.then(Gf, Gf), t;
    }
    function Gf() {
      if (--to === 0 && Wi !== null) {
        Il !== null && (Il.status = "fulfilled");
        var e = Wi;
        Wi = null, Pl = 0, Il = null;
        for (var t = 0; t < e.length; t++)
          (0, e[t])();
      }
    }
    function m0(e, t) {
      var n = [], a = { status: "pending", value: null, reason: null, then: function(l) {
        n.push(l);
      } };
      return e.then(function() {
        a.status = "fulfilled", a.value = t;
        for (var l = 0; l < n.length; l++)
          (0, n[l])(t);
      }, function(l) {
        for (a.status = "rejected", a.reason = l, l = 0; l < n.length; l++)
          (0, n[l])(void 0);
      }), a;
    }
    var Vf = B.S;
    B.S = function(e, t) {
      wd = Nt(), typeof t == "object" && t !== null && typeof t.then == "function" && p0(e, t), Vf !== null && Vf(e, t);
    };
    var hl = A(null);
    function no() {
      var e = hl.current;
      return e !== null ? e : Ge.pooledCache;
    }
    function ps(e, t) {
      t === null ? P(hl, hl.current) : P(hl, t.pool);
    }
    function Zf() {
      var e = no();
      return e === null ? null : { parent: st._currentValue, pool: e };
    }
    var ei = Error(o(460)), ao = Error(o(474)), ms = Error(o(542)), ys = { then: function() {
    } };
    function kf(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function Kf(e, t, n) {
      switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(It, It), t = n), t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, Ff(e), e;
        default:
          if (typeof t.status == "string")
            t.then(It, It);
          else {
            if (e = Ge, e !== null && 100 < e.shellSuspendCounter)
              throw Error(o(482));
            e = t, e.status = "pending", e.then(function(a) {
              if (t.status === "pending") {
                var l = t;
                l.status = "fulfilled", l.value = a;
              }
            }, function(a) {
              if (t.status === "pending") {
                var l = t;
                l.status = "rejected", l.reason = a;
              }
            });
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, Ff(e), e;
          }
          throw pl = t, ei;
      }
    }
    function dl(e) {
      try {
        var t = e._init;
        return t(e._payload);
      } catch (n) {
        throw n !== null && typeof n == "object" && typeof n.then == "function" ? (pl = n, ei) : n;
      }
    }
    var pl = null;
    function Jf() {
      if (pl === null)
        throw Error(o(459));
      var e = pl;
      return pl = null, e;
    }
    function Ff(e) {
      if (e === ei || e === ms)
        throw Error(o(483));
    }
    var ti = null, $i = 0;
    function gs(e) {
      var t = $i;
      return $i += 1, ti === null && (ti = []), Kf(ti, e, t);
    }
    function Pi(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function vs(e, t) {
      throw t.$$typeof === X ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
    }
    function Wf(e) {
      function t(N, O) {
        if (e) {
          var U = N.deletions;
          U === null ? (N.deletions = [O], N.flags |= 16) : U.push(O);
        }
      }
      function n(N, O) {
        if (!e)
          return null;
        for (; O !== null; )
          t(N, O), O = O.sibling;
        return null;
      }
      function a(N) {
        for (var O = /* @__PURE__ */ new Map(); N !== null; )
          N.key !== null ? O.set(N.key, N) : O.set(N.index, N), N = N.sibling;
        return O;
      }
      function l(N, O) {
        return N = Wn(N, O), N.index = 0, N.sibling = null, N;
      }
      function i(N, O, U) {
        return N.index = U, e ? (U = N.alternate, U !== null ? (U = U.index, U < O ? (N.flags |= 67108866, O) : U) : (N.flags |= 67108866, O)) : (N.flags |= 1048576, O);
      }
      function c(N) {
        return e && N.alternate === null && (N.flags |= 67108866), N;
      }
      function y(N, O, U, G) {
        return O === null || O.tag !== 6 ? (O = Zr(U, N.mode, G), O.return = N, O) : (O = l(O, U), O.return = N, O);
      }
      function T(N, O, U, G) {
        var le = U.type;
        return le === k ? Y(N, O, U.props.children, G, U.key) : O !== null && (O.elementType === le || typeof le == "object" && le !== null && le.$$typeof === it && dl(le) === O.type) ? (O = l(O, U.props), Pi(O, U), O.return = N, O) : (O = cs(U.type, U.key, U.props, null, N.mode, G), Pi(O, U), O.return = N, O);
      }
      function D(N, O, U, G) {
        return O === null || O.tag !== 4 || O.stateNode.containerInfo !== U.containerInfo || O.stateNode.implementation !== U.implementation ? (O = kr(U, N.mode, G), O.return = N, O) : (O = l(O, U.children || []), O.return = N, O);
      }
      function Y(N, O, U, G, le) {
        return O === null || O.tag !== 7 ? (O = rl(U, N.mode, G, le), O.return = N, O) : (O = l(O, U), O.return = N, O);
      }
      function Z(N, O, U) {
        if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
          return O = Zr("" + O, N.mode, U), O.return = N, O;
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case w:
              return U = cs(O.type, O.key, O.props, null, N.mode, U), Pi(U, O), U.return = N, U;
            case q:
              return O = kr(O, N.mode, U), O.return = N, O;
            case it:
              return O = dl(O), Z(N, O, U);
          }
          if (se(O) || We(O))
            return O = rl(O, N.mode, U, null), O.return = N, O;
          if (typeof O.then == "function")
            return Z(N, gs(O), U);
          if (O.$$typeof === oe)
            return Z(N, ds(N, O), U);
          vs(N, O);
        }
        return null;
      }
      function M(N, O, U, G) {
        var le = O !== null ? O.key : null;
        if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
          return le !== null ? null : y(N, O, "" + U, G);
        if (typeof U == "object" && U !== null) {
          switch (U.$$typeof) {
            case w:
              return U.key === le ? T(N, O, U, G) : null;
            case q:
              return U.key === le ? D(N, O, U, G) : null;
            case it:
              return U = dl(U), M(N, O, U, G);
          }
          if (se(U) || We(U))
            return le !== null ? null : Y(N, O, U, G, null);
          if (typeof U.then == "function")
            return M(N, O, gs(U), G);
          if (U.$$typeof === oe)
            return M(N, O, ds(N, U), G);
          vs(N, U);
        }
        return null;
      }
      function L(N, O, U, G, le) {
        if (typeof G == "string" && G !== "" || typeof G == "number" || typeof G == "bigint")
          return N = N.get(U) || null, y(O, N, "" + G, le);
        if (typeof G == "object" && G !== null) {
          switch (G.$$typeof) {
            case w:
              return N = N.get(G.key === null ? U : G.key) || null, T(O, N, G, le);
            case q:
              return N = N.get(G.key === null ? U : G.key) || null, D(O, N, G, le);
            case it:
              return G = dl(G), L(N, O, U, G, le);
          }
          if (se(G) || We(G))
            return N = N.get(U) || null, Y(O, N, G, le, null);
          if (typeof G.then == "function")
            return L(N, O, U, gs(G), le);
          if (G.$$typeof === oe)
            return L(N, O, U, ds(O, G), le);
          vs(O, G);
        }
        return null;
      }
      function ee(N, O, U, G) {
        for (var le = null, Ue = null, ae = O, be = O = 0, Ae = null; ae !== null && be < U.length; be++) {
          ae.index > be ? (Ae = ae, ae = null) : Ae = ae.sibling;
          var De = M(N, ae, U[be], G);
          if (De === null) {
            ae === null && (ae = Ae);
            break;
          }
          e && ae && De.alternate === null && t(N, ae), O = i(De, O, be), Ue === null ? le = De : Ue.sibling = De, Ue = De, ae = Ae;
        }
        if (be === U.length)
          return n(N, ae), Re && $n(N, be), le;
        if (ae === null) {
          for (; be < U.length; be++)
            ae = Z(N, U[be], G), ae !== null && (O = i(ae, O, be), Ue === null ? le = ae : Ue.sibling = ae, Ue = ae);
          return Re && $n(N, be), le;
        }
        for (ae = a(ae); be < U.length; be++)
          Ae = L(ae, N, be, U[be], G), Ae !== null && (e && Ae.alternate !== null && ae.delete(Ae.key === null ? be : Ae.key), O = i(Ae, O, be), Ue === null ? le = Ae : Ue.sibling = Ae, Ue = Ae);
        return e && ae.forEach(function(Xa) {
          return t(N, Xa);
        }), Re && $n(N, be), le;
      }
      function ie(N, O, U, G) {
        if (U == null)
          throw Error(o(151));
        for (var le = null, Ue = null, ae = O, be = O = 0, Ae = null, De = U.next(); ae !== null && !De.done; be++, De = U.next()) {
          ae.index > be ? (Ae = ae, ae = null) : Ae = ae.sibling;
          var Xa = M(N, ae, De.value, G);
          if (Xa === null) {
            ae === null && (ae = Ae);
            break;
          }
          e && ae && Xa.alternate === null && t(N, ae), O = i(Xa, O, be), Ue === null ? le = Xa : Ue.sibling = Xa, Ue = Xa, ae = Ae;
        }
        if (De.done)
          return n(N, ae), Re && $n(N, be), le;
        if (ae === null) {
          for (; !De.done; be++, De = U.next())
            De = Z(N, De.value, G), De !== null && (O = i(De, O, be), Ue === null ? le = De : Ue.sibling = De, Ue = De);
          return Re && $n(N, be), le;
        }
        for (ae = a(ae); !De.done; be++, De = U.next())
          De = L(ae, N, be, De.value, G), De !== null && (e && De.alternate !== null && ae.delete(De.key === null ? be : De.key), O = i(De, O, be), Ue === null ? le = De : Ue.sibling = De, Ue = De);
        return e && ae.forEach(function(Oy) {
          return t(N, Oy);
        }), Re && $n(N, be), le;
      }
      function Xe(N, O, U, G) {
        if (typeof U == "object" && U !== null && U.type === k && U.key === null && (U = U.props.children), typeof U == "object" && U !== null) {
          switch (U.$$typeof) {
            case w:
              e: {
                for (var le = U.key; O !== null; ) {
                  if (O.key === le) {
                    if (le = U.type, le === k) {
                      if (O.tag === 7) {
                        n(N, O.sibling), G = l(O, U.props.children), G.return = N, N = G;
                        break e;
                      }
                    } else if (O.elementType === le || typeof le == "object" && le !== null && le.$$typeof === it && dl(le) === O.type) {
                      n(N, O.sibling), G = l(O, U.props), Pi(G, U), G.return = N, N = G;
                      break e;
                    }
                    n(N, O);
                    break;
                  } else
                    t(N, O);
                  O = O.sibling;
                }
                U.type === k ? (G = rl(U.props.children, N.mode, G, U.key), G.return = N, N = G) : (G = cs(U.type, U.key, U.props, null, N.mode, G), Pi(G, U), G.return = N, N = G);
              }
              return c(N);
            case q:
              e: {
                for (le = U.key; O !== null; ) {
                  if (O.key === le)
                    if (O.tag === 4 && O.stateNode.containerInfo === U.containerInfo && O.stateNode.implementation === U.implementation) {
                      n(N, O.sibling), G = l(O, U.children || []), G.return = N, N = G;
                      break e;
                    } else {
                      n(N, O);
                      break;
                    }
                  else
                    t(N, O);
                  O = O.sibling;
                }
                G = kr(U, N.mode, G), G.return = N, N = G;
              }
              return c(N);
            case it:
              return U = dl(U), Xe(N, O, U, G);
          }
          if (se(U))
            return ee(N, O, U, G);
          if (We(U)) {
            if (le = We(U), typeof le != "function")
              throw Error(o(150));
            return U = le.call(U), ie(N, O, U, G);
          }
          if (typeof U.then == "function")
            return Xe(N, O, gs(U), G);
          if (U.$$typeof === oe)
            return Xe(N, O, ds(N, U), G);
          vs(N, U);
        }
        return typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint" ? (U = "" + U, O !== null && O.tag === 6 ? (n(N, O.sibling), G = l(O, U), G.return = N, N = G) : (n(N, O), G = Zr(U, N.mode, G), G.return = N, N = G), c(N)) : n(N, O);
      }
      return function(N, O, U, G) {
        try {
          $i = 0;
          var le = Xe(N, O, U, G);
          return ti = null, le;
        } catch (ae) {
          if (ae === ei || ae === ms)
            throw ae;
          var Ue = Zt(29, ae, null, N.mode);
          return Ue.lanes = G, Ue.return = N, Ue;
        } finally {
        }
      };
    }
    var ml = Wf(true), $f = Wf(false), Ea = false;
    function lo(e) {
      e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
    }
    function io(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, callbacks: null });
    }
    function Aa(e) {
      return { lane: e, tag: 0, payload: null, callback: null, next: null };
    }
    function Oa(e, t, n) {
      var a = e.updateQueue;
      if (a === null)
        return null;
      if (a = a.shared, (Me & 2) !== 0) {
        var l = a.pending;
        return l === null ? t.next = t : (t.next = l.next, l.next = t), a.pending = t, t = os(e), Df(e, null, n), t;
      }
      return rs(e, a, t, n), os(e);
    }
    function Ii(e, t, n) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
        var a = t.lanes;
        a &= e.pendingLanes, n |= a, t.lanes = n, Yu(e, n);
      }
    }
    function uo(e, t) {
      var n = e.updateQueue, a = e.alternate;
      if (a !== null && (a = a.updateQueue, n === a)) {
        var l = null, i = null;
        if (n = n.firstBaseUpdate, n !== null) {
          do {
            var c = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
            i === null ? l = i = c : i = i.next = c, n = n.next;
          } while (n !== null);
          i === null ? l = i = t : i = i.next = t;
        } else
          l = i = t;
        n = { baseState: a.baseState, firstBaseUpdate: l, lastBaseUpdate: i, shared: a.shared, callbacks: a.callbacks }, e.updateQueue = n;
        return;
      }
      e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
    }
    var so = false;
    function eu() {
      if (so) {
        var e = Il;
        if (e !== null)
          throw e;
      }
    }
    function tu(e, t, n, a) {
      so = false;
      var l = e.updateQueue;
      Ea = false;
      var i = l.firstBaseUpdate, c = l.lastBaseUpdate, y = l.shared.pending;
      if (y !== null) {
        l.shared.pending = null;
        var T = y, D = T.next;
        T.next = null, c === null ? i = D : c.next = D, c = T;
        var Y = e.alternate;
        Y !== null && (Y = Y.updateQueue, y = Y.lastBaseUpdate, y !== c && (y === null ? Y.firstBaseUpdate = D : y.next = D, Y.lastBaseUpdate = T));
      }
      if (i !== null) {
        var Z = l.baseState;
        c = 0, Y = D = T = null, y = i;
        do {
          var M = y.lane & -536870913, L = M !== y.lane;
          if (L ? (Ee & M) === M : (a & M) === M) {
            M !== 0 && M === Pl && (so = true), Y !== null && (Y = Y.next = { lane: 0, tag: y.tag, payload: y.payload, callback: null, next: null });
            e: {
              var ee = e, ie = y;
              M = t;
              var Xe = n;
              switch (ie.tag) {
                case 1:
                  if (ee = ie.payload, typeof ee == "function") {
                    Z = ee.call(Xe, Z, M);
                    break e;
                  }
                  Z = ee;
                  break e;
                case 3:
                  ee.flags = ee.flags & -65537 | 128;
                case 0:
                  if (ee = ie.payload, M = typeof ee == "function" ? ee.call(Xe, Z, M) : ee, M == null)
                    break e;
                  Z = R({}, Z, M);
                  break e;
                case 2:
                  Ea = true;
              }
            }
            M = y.callback, M !== null && (e.flags |= 64, L && (e.flags |= 8192), L = l.callbacks, L === null ? l.callbacks = [M] : L.push(M));
          } else
            L = { lane: M, tag: y.tag, payload: y.payload, callback: y.callback, next: null }, Y === null ? (D = Y = L, T = Z) : Y = Y.next = L, c |= M;
          if (y = y.next, y === null) {
            if (y = l.shared.pending, y === null)
              break;
            L = y, y = L.next, L.next = null, l.lastBaseUpdate = L, l.shared.pending = null;
          }
        } while (true);
        Y === null && (T = Z), l.baseState = T, l.firstBaseUpdate = D, l.lastBaseUpdate = Y, i === null && (l.shared.lanes = 0), ja |= c, e.lanes = c, e.memoizedState = Z;
      }
    }
    function Pf(e, t) {
      if (typeof e != "function")
        throw Error(o(191, e));
      e.call(t);
    }
    function If(e, t) {
      var n = e.callbacks;
      if (n !== null)
        for (e.callbacks = null, e = 0; e < n.length; e++)
          Pf(n[e], t);
    }
    var ni = A(null), bs = A(0);
    function eh(e, t) {
      e = ra, P(bs, e), P(ni, t), ra = e | t.baseLanes;
    }
    function ro() {
      P(bs, ra), P(ni, ni.current);
    }
    function oo() {
      ra = bs.current, V(ni), V(bs);
    }
    var kt = A(null), fn = null;
    function wa(e) {
      var t = e.alternate;
      P(at, at.current & 1), P(kt, e), fn === null && (t === null || ni.current !== null || t.memoizedState !== null) && (fn = e);
    }
    function co(e) {
      P(at, at.current), P(kt, e), fn === null && (fn = e);
    }
    function th(e) {
      e.tag === 22 ? (P(at, at.current), P(kt, e), fn === null && (fn = e)) : Ra();
    }
    function Ra() {
      P(at, at.current), P(kt, kt.current);
    }
    function Kt(e) {
      V(kt), fn === e && (fn = null), V(at);
    }
    var at = A(0);
    function Ss(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && (n = n.dehydrated, n === null || gc(n) || vc(n)))
            return t;
        } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
          if ((t.flags & 128) !== 0)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var ea = 0, ye = null, Le = null, rt = null, xs = false, ai = false, yl = false, _s = 0, nu = 0, li = null, y0 = 0;
    function et() {
      throw Error(o(321));
    }
    function fo(e, t) {
      if (t === null)
        return false;
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Vt(e[n], t[n]))
          return false;
      return true;
    }
    function ho(e, t, n, a, l, i) {
      return ea = i, ye = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, B.H = e === null || e.memoizedState === null ? Hh : Ro, yl = false, i = n(a, l), yl = false, ai && (i = ah(t, n, a, l)), nh(e), i;
    }
    function nh(e) {
      B.H = iu;
      var t = Le !== null && Le.next !== null;
      if (ea = 0, rt = Le = ye = null, xs = false, nu = 0, li = null, t)
        throw Error(o(300));
      e === null || ot || (e = e.dependencies, e !== null && hs(e) && (ot = true));
    }
    function ah(e, t, n, a) {
      ye = e;
      var l = 0;
      do {
        if (ai && (li = null), nu = 0, ai = false, 25 <= l)
          throw Error(o(301));
        if (l += 1, rt = Le = null, e.updateQueue != null) {
          var i = e.updateQueue;
          i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
        }
        B.H = Lh, i = t(n, a);
      } while (ai);
      return i;
    }
    function g0() {
      var e = B.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? au(t) : t, e = e.useState()[0], (Le !== null ? Le.memoizedState : null) !== e && (ye.flags |= 1024), t;
    }
    function po() {
      var e = _s !== 0;
      return _s = 0, e;
    }
    function mo(e, t, n) {
      t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
    }
    function yo(e) {
      if (xs) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        xs = false;
      }
      ea = 0, rt = Le = ye = null, ai = false, nu = _s = 0, li = null;
    }
    function Ct() {
      var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return rt === null ? ye.memoizedState = rt = e : rt = rt.next = e, rt;
    }
    function lt() {
      if (Le === null) {
        var e = ye.alternate;
        e = e !== null ? e.memoizedState : null;
      } else
        e = Le.next;
      var t = rt === null ? ye.memoizedState : rt.next;
      if (t !== null)
        rt = t, Le = e;
      else {
        if (e === null)
          throw ye.alternate === null ? Error(o(467)) : Error(o(310));
        Le = e, e = { memoizedState: Le.memoizedState, baseState: Le.baseState, baseQueue: Le.baseQueue, queue: Le.queue, next: null }, rt === null ? ye.memoizedState = rt = e : rt = rt.next = e;
      }
      return rt;
    }
    function Ts() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function au(e) {
      var t = nu;
      return nu += 1, li === null && (li = []), e = Kf(li, e, t), t = ye, (rt === null ? t.memoizedState : rt.next) === null && (t = t.alternate, B.H = t === null || t.memoizedState === null ? Hh : Ro), e;
    }
    function Es(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function")
          return au(e);
        if (e.$$typeof === oe)
          return Tt(e);
      }
      throw Error(o(438, String(e)));
    }
    function go(e) {
      var t = null, n = ye.updateQueue;
      if (n !== null && (t = n.memoCache), t == null) {
        var a = ye.alternate;
        a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = { data: a.data.map(function(l) {
          return l.slice();
        }), index: 0 })));
      }
      if (t == null && (t = { data: [], index: 0 }), n === null && (n = Ts(), ye.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
        for (n = t.data[t.index] = Array(e), a = 0; a < e; a++)
          n[a] = Rt;
      return t.index++, n;
    }
    function ta(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function As(e) {
      var t = lt();
      return vo(t, Le, e);
    }
    function vo(e, t, n) {
      var a = e.queue;
      if (a === null)
        throw Error(o(311));
      a.lastRenderedReducer = n;
      var l = e.baseQueue, i = a.pending;
      if (i !== null) {
        if (l !== null) {
          var c = l.next;
          l.next = i.next, i.next = c;
        }
        t.baseQueue = l = i, a.pending = null;
      }
      if (i = e.baseState, l === null)
        e.memoizedState = i;
      else {
        t = l.next;
        var y = c = null, T = null, D = t, Y = false;
        do {
          var Z = D.lane & -536870913;
          if (Z !== D.lane ? (Ee & Z) === Z : (ea & Z) === Z) {
            var M = D.revertLane;
            if (M === 0)
              T !== null && (T = T.next = { lane: 0, revertLane: 0, gesture: null, action: D.action, hasEagerState: D.hasEagerState, eagerState: D.eagerState, next: null }), Z === Pl && (Y = true);
            else if ((ea & M) === M) {
              D = D.next, M === Pl && (Y = true);
              continue;
            } else
              Z = { lane: 0, revertLane: D.revertLane, gesture: null, action: D.action, hasEagerState: D.hasEagerState, eagerState: D.eagerState, next: null }, T === null ? (y = T = Z, c = i) : T = T.next = Z, ye.lanes |= M, ja |= M;
            Z = D.action, yl && n(i, Z), i = D.hasEagerState ? D.eagerState : n(i, Z);
          } else
            M = { lane: Z, revertLane: D.revertLane, gesture: D.gesture, action: D.action, hasEagerState: D.hasEagerState, eagerState: D.eagerState, next: null }, T === null ? (y = T = M, c = i) : T = T.next = M, ye.lanes |= Z, ja |= Z;
          D = D.next;
        } while (D !== null && D !== t);
        if (T === null ? c = i : T.next = y, !Vt(i, e.memoizedState) && (ot = true, Y && (n = Il, n !== null)))
          throw n;
        e.memoizedState = i, e.baseState = c, e.baseQueue = T, a.lastRenderedState = i;
      }
      return l === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
    }
    function bo(e) {
      var t = lt(), n = t.queue;
      if (n === null)
        throw Error(o(311));
      n.lastRenderedReducer = e;
      var a = n.dispatch, l = n.pending, i = t.memoizedState;
      if (l !== null) {
        n.pending = null;
        var c = l = l.next;
        do
          i = e(i, c.action), c = c.next;
        while (c !== l);
        Vt(i, t.memoizedState) || (ot = true), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
      }
      return [i, a];
    }
    function lh(e, t, n) {
      var a = ye, l = lt(), i = Re;
      if (i) {
        if (n === void 0)
          throw Error(o(407));
        n = n();
      } else
        n = t();
      var c = !Vt((Le || l).memoizedState, n);
      if (c && (l.memoizedState = n, ot = true), l = l.queue, _o(sh.bind(null, a, l, e), [e]), l.getSnapshot !== t || c || rt !== null && rt.memoizedState.tag & 1) {
        if (a.flags |= 2048, ii(9, { destroy: void 0 }, uh.bind(null, a, l, n, t), null), Ge === null)
          throw Error(o(349));
        i || (ea & 127) !== 0 || ih(a, t, n);
      }
      return n;
    }
    function ih(e, t, n) {
      e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ye.updateQueue, t === null ? (t = Ts(), ye.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
    }
    function uh(e, t, n, a) {
      t.value = n, t.getSnapshot = a, rh(t) && oh(e);
    }
    function sh(e, t, n) {
      return n(function() {
        rh(t) && oh(e);
      });
    }
    function rh(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !Vt(e, n);
      } catch (a) {
        return true;
      }
    }
    function oh(e) {
      var t = sl(e, 2);
      t !== null && Lt(t, e, 2);
    }
    function So(e) {
      var t = Ct();
      if (typeof e == "function") {
        var n = e;
        if (e = n(), yl) {
          Qt(true);
          try {
            n();
          } finally {
            Qt(false);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ta, lastRenderedState: e }, t;
    }
    function ch(e, t, n, a) {
      return e.baseState = n, vo(e, Le, typeof a == "function" ? a : ta);
    }
    function v0(e, t, n, a, l) {
      if (Rs(e))
        throw Error(o(485));
      if (e = t.action, e !== null) {
        var i = { payload: l, action: e, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(c) {
          i.listeners.push(c);
        } };
        B.T !== null ? n(true) : i.isTransition = false, a(i), n = t.pending, n === null ? (i.next = t.pending = i, fh(t, i)) : (i.next = n.next, t.pending = n.next = i);
      }
    }
    function fh(e, t) {
      var n = t.action, a = t.payload, l = e.state;
      if (t.isTransition) {
        var i = B.T, c = {};
        B.T = c;
        try {
          var y = n(l, a), T = B.S;
          T !== null && T(c, y), hh(e, t, y);
        } catch (D) {
          xo(e, t, D);
        } finally {
          i !== null && c.types !== null && (i.types = c.types), B.T = i;
        }
      } else
        try {
          i = n(l, a), hh(e, t, i);
        } catch (D) {
          xo(e, t, D);
        }
    }
    function hh(e, t, n) {
      n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(a) {
        dh(e, t, a);
      }, function(a) {
        return xo(e, t, a);
      }) : dh(e, t, n);
    }
    function dh(e, t, n) {
      t.status = "fulfilled", t.value = n, ph(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, fh(e, n)));
    }
    function xo(e, t, n) {
      var a = e.pending;
      if (e.pending = null, a !== null) {
        a = a.next;
        do
          t.status = "rejected", t.reason = n, ph(t), t = t.next;
        while (t !== a);
      }
      e.action = null;
    }
    function ph(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++)
        (0, e[t])();
    }
    function mh(e, t) {
      return t;
    }
    function yh(e, t) {
      if (Re) {
        var n = Ge.formState;
        if (n !== null) {
          e: {
            var a = ye;
            if (Re) {
              if (Ke) {
                t: {
                  for (var l = Ke, i = cn; l.nodeType !== 8; ) {
                    if (!i) {
                      l = null;
                      break t;
                    }
                    if (l = hn(l.nextSibling), l === null) {
                      l = null;
                      break t;
                    }
                  }
                  i = l.data, l = i === "F!" || i === "F" ? l : null;
                }
                if (l) {
                  Ke = hn(l.nextSibling), a = l.data === "F!";
                  break e;
                }
              }
              _a(a);
            }
            a = false;
          }
          a && (t = n[0]);
        }
      }
      return n = Ct(), n.memoizedState = n.baseState = t, a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: mh, lastRenderedState: t }, n.queue = a, n = Mh.bind(null, ye, a), a.dispatch = n, a = So(false), i = wo.bind(null, ye, false, a.queue), a = Ct(), l = { state: t, dispatch: null, action: e, pending: null }, a.queue = l, n = v0.bind(null, ye, l, i, n), l.dispatch = n, a.memoizedState = e, [t, n, false];
    }
    function gh(e) {
      var t = lt();
      return vh(t, Le, e);
    }
    function vh(e, t, n) {
      if (t = vo(e, t, mh)[0], e = As(ta)[0], typeof t == "object" && t !== null && typeof t.then == "function")
        try {
          var a = au(t);
        } catch (c) {
          throw c === ei ? ms : c;
        }
      else
        a = t;
      t = lt();
      var l = t.queue, i = l.dispatch;
      return n !== t.memoizedState && (ye.flags |= 2048, ii(9, { destroy: void 0 }, b0.bind(null, l, n), null)), [a, i, e];
    }
    function b0(e, t) {
      e.action = t;
    }
    function bh(e) {
      var t = lt(), n = Le;
      if (n !== null)
        return vh(t, n, e);
      lt(), t = t.memoizedState, n = lt();
      var a = n.queue.dispatch;
      return n.memoizedState = e, [t, a, false];
    }
    function ii(e, t, n, a) {
      return e = { tag: e, create: n, deps: a, inst: t, next: null }, t = ye.updateQueue, t === null && (t = Ts(), ye.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e;
    }
    function Sh() {
      return lt().memoizedState;
    }
    function Os(e, t, n, a) {
      var l = Ct();
      ye.flags |= e, l.memoizedState = ii(1 | t, { destroy: void 0 }, n, a === void 0 ? null : a);
    }
    function ws(e, t, n, a) {
      var l = lt();
      a = a === void 0 ? null : a;
      var i = l.memoizedState.inst;
      Le !== null && a !== null && fo(a, Le.memoizedState.deps) ? l.memoizedState = ii(t, i, n, a) : (ye.flags |= e, l.memoizedState = ii(1 | t, i, n, a));
    }
    function xh(e, t) {
      Os(8390656, 8, e, t);
    }
    function _o(e, t) {
      ws(2048, 8, e, t);
    }
    function S0(e) {
      ye.flags |= 4;
      var t = ye.updateQueue;
      if (t === null)
        t = Ts(), ye.updateQueue = t, t.events = [e];
      else {
        var n = t.events;
        n === null ? t.events = [e] : n.push(e);
      }
    }
    function _h(e) {
      var t = lt().memoizedState;
      return S0({ ref: t, nextImpl: e }), function() {
        if ((Me & 2) !== 0)
          throw Error(o(440));
        return t.impl.apply(void 0, arguments);
      };
    }
    function Th(e, t) {
      return ws(4, 2, e, t);
    }
    function Eh(e, t) {
      return ws(4, 4, e, t);
    }
    function Ah(e, t) {
      if (typeof t == "function") {
        e = e();
        var n = t(e);
        return function() {
          typeof n == "function" ? n() : t(null);
        };
      }
      if (t != null)
        return e = e(), t.current = e, function() {
          t.current = null;
        };
    }
    function Oh(e, t, n) {
      n = n != null ? n.concat([e]) : null, ws(4, 4, Ah.bind(null, t, e), n);
    }
    function To() {
    }
    function wh(e, t) {
      var n = lt();
      t = t === void 0 ? null : t;
      var a = n.memoizedState;
      return t !== null && fo(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e);
    }
    function Rh(e, t) {
      var n = lt();
      t = t === void 0 ? null : t;
      var a = n.memoizedState;
      if (t !== null && fo(t, a[1]))
        return a[0];
      if (a = e(), yl) {
        Qt(true);
        try {
          e();
        } finally {
          Qt(false);
        }
      }
      return n.memoizedState = [a, t], a;
    }
    function Eo(e, t, n) {
      return n === void 0 || (ea & 1073741824) !== 0 && (Ee & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = Nd(), ye.lanes |= e, ja |= e, n);
    }
    function Nh(e, t, n, a) {
      return Vt(n, t) ? n : ni.current !== null ? (e = Eo(e, n, a), Vt(e, t) || (ot = true), e) : (ea & 42) === 0 || (ea & 1073741824) !== 0 && (Ee & 261930) === 0 ? (ot = true, e.memoizedState = n) : (e = Nd(), ye.lanes |= e, ja |= e, t);
    }
    function zh(e, t, n, a, l) {
      var i = Q.p;
      Q.p = i !== 0 && 8 > i ? i : 8;
      var c = B.T, y = {};
      B.T = y, wo(e, false, t, n);
      try {
        var T = l(), D = B.S;
        if (D !== null && D(y, T), T !== null && typeof T == "object" && typeof T.then == "function") {
          var Y = m0(T, a);
          lu(e, t, Y, Wt(e));
        } else
          lu(e, t, a, Wt(e));
      } catch (Z) {
        lu(e, t, { then: function() {
        }, status: "rejected", reason: Z }, Wt());
      } finally {
        Q.p = i, c !== null && y.types !== null && (c.types = y.types), B.T = c;
      }
    }
    function x0() {
    }
    function Ao(e, t, n, a) {
      if (e.tag !== 5)
        throw Error(o(476));
      var l = jh(e).queue;
      zh(e, l, t, J, n === null ? x0 : function() {
        return Ch(e), n(a);
      });
    }
    function jh(e) {
      var t = e.memoizedState;
      if (t !== null)
        return t;
      t = { memoizedState: J, baseState: J, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ta, lastRenderedState: J }, next: null };
      var n = {};
      return t.next = { memoizedState: n, baseState: n, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ta, lastRenderedState: n }, next: null }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function Ch(e) {
      var t = jh(e);
      t.next === null && (t = e.alternate.memoizedState), lu(e, t.next.queue, {}, Wt());
    }
    function Oo() {
      return Tt(xu);
    }
    function Uh() {
      return lt().memoizedState;
    }
    function Dh() {
      return lt().memoizedState;
    }
    function _0(e) {
      for (var t = e.return; t !== null; ) {
        switch (t.tag) {
          case 24:
          case 3:
            var n = Wt();
            e = Aa(n);
            var a = Oa(t, e, n);
            a !== null && (Lt(a, t, n), Ii(a, t, n)), t = { cache: eo() }, e.payload = t;
            return;
        }
        t = t.return;
      }
    }
    function T0(e, t, n) {
      var a = Wt();
      n = { lane: a, revertLane: 0, gesture: null, action: n, hasEagerState: false, eagerState: null, next: null }, Rs(e) ? Bh(t, n) : (n = Gr(e, t, n, a), n !== null && (Lt(n, e, a), qh(n, t, a)));
    }
    function Mh(e, t, n) {
      var a = Wt();
      lu(e, t, n, a);
    }
    function lu(e, t, n, a) {
      var l = { lane: a, revertLane: 0, gesture: null, action: n, hasEagerState: false, eagerState: null, next: null };
      if (Rs(e))
        Bh(t, l);
      else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
          try {
            var c = t.lastRenderedState, y = i(c, n);
            if (l.hasEagerState = true, l.eagerState = y, Vt(y, c))
              return rs(e, t, l, 0), Ge === null && ss(), false;
          } catch (T) {
          } finally {
          }
        if (n = Gr(e, t, l, a), n !== null)
          return Lt(n, e, a), qh(n, t, a), true;
      }
      return false;
    }
    function wo(e, t, n, a) {
      if (a = { lane: 2, revertLane: ic(), gesture: null, action: a, hasEagerState: false, eagerState: null, next: null }, Rs(e)) {
        if (t)
          throw Error(o(479));
      } else
        t = Gr(e, n, a, 2), t !== null && Lt(t, e, 2);
    }
    function Rs(e) {
      var t = e.alternate;
      return e === ye || t !== null && t === ye;
    }
    function Bh(e, t) {
      ai = xs = true;
      var n = e.pending;
      n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
    }
    function qh(e, t, n) {
      if ((n & 4194048) !== 0) {
        var a = t.lanes;
        a &= e.pendingLanes, n |= a, t.lanes = n, Yu(e, n);
      }
    }
    var iu = { readContext: Tt, use: Es, useCallback: et, useContext: et, useEffect: et, useImperativeHandle: et, useLayoutEffect: et, useInsertionEffect: et, useMemo: et, useReducer: et, useRef: et, useState: et, useDebugValue: et, useDeferredValue: et, useTransition: et, useSyncExternalStore: et, useId: et, useHostTransitionStatus: et, useFormState: et, useActionState: et, useOptimistic: et, useMemoCache: et, useCacheRefresh: et };
    iu.useEffectEvent = et;
    var Hh = { readContext: Tt, use: Es, useCallback: function(e, t) {
      return Ct().memoizedState = [e, t === void 0 ? null : t], e;
    }, useContext: Tt, useEffect: xh, useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, Os(4194308, 4, Ah.bind(null, t, e), n);
    }, useLayoutEffect: function(e, t) {
      return Os(4194308, 4, e, t);
    }, useInsertionEffect: function(e, t) {
      Os(4, 2, e, t);
    }, useMemo: function(e, t) {
      var n = Ct();
      t = t === void 0 ? null : t;
      var a = e();
      if (yl) {
        Qt(true);
        try {
          e();
        } finally {
          Qt(false);
        }
      }
      return n.memoizedState = [a, t], a;
    }, useReducer: function(e, t, n) {
      var a = Ct();
      if (n !== void 0) {
        var l = n(t);
        if (yl) {
          Qt(true);
          try {
            n(t);
          } finally {
            Qt(false);
          }
        }
      } else
        l = t;
      return a.memoizedState = a.baseState = l, e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: l }, a.queue = e, e = e.dispatch = T0.bind(null, ye, e), [a.memoizedState, e];
    }, useRef: function(e) {
      var t = Ct();
      return e = { current: e }, t.memoizedState = e;
    }, useState: function(e) {
      e = So(e);
      var t = e.queue, n = Mh.bind(null, ye, t);
      return t.dispatch = n, [e.memoizedState, n];
    }, useDebugValue: To, useDeferredValue: function(e, t) {
      var n = Ct();
      return Eo(n, e, t);
    }, useTransition: function() {
      var e = So(false);
      return e = zh.bind(null, ye, e.queue, true, false), Ct().memoizedState = e, [false, e];
    }, useSyncExternalStore: function(e, t, n) {
      var a = ye, l = Ct();
      if (Re) {
        if (n === void 0)
          throw Error(o(407));
        n = n();
      } else {
        if (n = t(), Ge === null)
          throw Error(o(349));
        (Ee & 127) !== 0 || ih(a, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return l.queue = i, xh(sh.bind(null, a, i, e), [e]), a.flags |= 2048, ii(9, { destroy: void 0 }, uh.bind(null, a, i, n, t), null), n;
    }, useId: function() {
      var e = Ct(), t = Ge.identifierPrefix;
      if (Re) {
        var n = Bn, a = Mn;
        n = (a & ~(1 << 32 - Ot(a) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = _s++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = y0++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    }, useHostTransitionStatus: Oo, useFormState: yh, useActionState: yh, useOptimistic: function(e) {
      var t = Ct();
      t.memoizedState = t.baseState = e;
      var n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
      return t.queue = n, t = wo.bind(null, ye, true, n), n.dispatch = t, [e, t];
    }, useMemoCache: go, useCacheRefresh: function() {
      return Ct().memoizedState = _0.bind(null, ye);
    }, useEffectEvent: function(e) {
      var t = Ct(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((Me & 2) !== 0)
          throw Error(o(440));
        return n.impl.apply(void 0, arguments);
      };
    } }, Ro = { readContext: Tt, use: Es, useCallback: wh, useContext: Tt, useEffect: _o, useImperativeHandle: Oh, useInsertionEffect: Th, useLayoutEffect: Eh, useMemo: Rh, useReducer: As, useRef: Sh, useState: function() {
      return As(ta);
    }, useDebugValue: To, useDeferredValue: function(e, t) {
      var n = lt();
      return Nh(n, Le.memoizedState, e, t);
    }, useTransition: function() {
      var e = As(ta)[0], t = lt().memoizedState;
      return [typeof e == "boolean" ? e : au(e), t];
    }, useSyncExternalStore: lh, useId: Uh, useHostTransitionStatus: Oo, useFormState: gh, useActionState: gh, useOptimistic: function(e, t) {
      var n = lt();
      return ch(n, Le, e, t);
    }, useMemoCache: go, useCacheRefresh: Dh };
    Ro.useEffectEvent = _h;
    var Lh = { readContext: Tt, use: Es, useCallback: wh, useContext: Tt, useEffect: _o, useImperativeHandle: Oh, useInsertionEffect: Th, useLayoutEffect: Eh, useMemo: Rh, useReducer: bo, useRef: Sh, useState: function() {
      return bo(ta);
    }, useDebugValue: To, useDeferredValue: function(e, t) {
      var n = lt();
      return Le === null ? Eo(n, e, t) : Nh(n, Le.memoizedState, e, t);
    }, useTransition: function() {
      var e = bo(ta)[0], t = lt().memoizedState;
      return [typeof e == "boolean" ? e : au(e), t];
    }, useSyncExternalStore: lh, useId: Uh, useHostTransitionStatus: Oo, useFormState: bh, useActionState: bh, useOptimistic: function(e, t) {
      var n = lt();
      return Le !== null ? ch(n, Le, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    }, useMemoCache: go, useCacheRefresh: Dh };
    Lh.useEffectEvent = _h;
    function No(e, t, n, a) {
      t = e.memoizedState, n = n(a, t), n = n == null ? t : R({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
    }
    var zo = { enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var a = Wt(), l = Aa(a);
      l.payload = t, n != null && (l.callback = n), t = Oa(e, l, a), t !== null && (Lt(t, e, a), Ii(t, e, a));
    }, enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var a = Wt(), l = Aa(a);
      l.tag = 1, l.payload = t, n != null && (l.callback = n), t = Oa(e, l, a), t !== null && (Lt(t, e, a), Ii(t, e, a));
    }, enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = Wt(), a = Aa(n);
      a.tag = 2, t != null && (a.callback = t), t = Oa(e, a, n), t !== null && (Lt(t, e, n), Ii(t, e, n));
    } };
    function Yh(e, t, n, a, l, i, c) {
      return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, i, c) : t.prototype && t.prototype.isPureReactComponent ? !Zi(n, a) || !Zi(l, i) : true;
    }
    function Xh(e, t, n, a) {
      e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && zo.enqueueReplaceState(t, t.state, null);
    }
    function gl(e, t) {
      var n = t;
      if ("ref" in t) {
        n = {};
        for (var a in t)
          a !== "ref" && (n[a] = t[a]);
      }
      if (e = e.defaultProps) {
        n === t && (n = R({}, n));
        for (var l in e)
          n[l] === void 0 && (n[l] = e[l]);
      }
      return n;
    }
    function Qh(e) {
      us(e);
    }
    function Gh(e) {
      console.error(e);
    }
    function Vh(e) {
      us(e);
    }
    function Ns(e, t) {
      try {
        var n = e.onUncaughtError;
        n(t.value, { componentStack: t.stack });
      } catch (a) {
        setTimeout(function() {
          throw a;
        });
      }
    }
    function Zh(e, t, n) {
      try {
        var a = e.onCaughtError;
        a(n.value, { componentStack: n.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
      } catch (l) {
        setTimeout(function() {
          throw l;
        });
      }
    }
    function jo(e, t, n) {
      return n = Aa(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
        Ns(e, t);
      }, n;
    }
    function kh(e) {
      return e = Aa(e), e.tag = 3, e;
    }
    function Kh(e, t, n, a) {
      var l = n.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var i = a.value;
        e.payload = function() {
          return l(i);
        }, e.callback = function() {
          Zh(t, n, a);
        };
      }
      var c = n.stateNode;
      c !== null && typeof c.componentDidCatch == "function" && (e.callback = function() {
        Zh(t, n, a), typeof l != "function" && (Ca === null ? Ca = /* @__PURE__ */ new Set([this]) : Ca.add(this));
        var y = a.stack;
        this.componentDidCatch(a.value, { componentStack: y !== null ? y : "" });
      });
    }
    function E0(e, t, n, a, l) {
      if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
        if (t = n.alternate, t !== null && $l(t, n, l, true), n = kt.current, n !== null) {
          switch (n.tag) {
            case 31:
            case 13:
              return fn === null ? Xs() : n.alternate === null && tt === 0 && (tt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = l, a === ys ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), nc(e, a, l)), false;
            case 22:
              return n.flags |= 65536, a === ys ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([a]) }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), nc(e, a, l)), false;
          }
          throw Error(o(435, n.tag));
        }
        return nc(e, a, l), Xs(), false;
      }
      if (Re)
        return t = kt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = l, a !== Fr && (e = Error(o(422), { cause: a }), Ji(sn(e, n)))) : (a !== Fr && (t = Error(o(423), { cause: a }), Ji(sn(t, n))), e = e.current.alternate, e.flags |= 65536, l &= -l, e.lanes |= l, a = sn(a, n), l = jo(e.stateNode, a, l), uo(e, l), tt !== 4 && (tt = 2)), false;
      var i = Error(o(520), { cause: a });
      if (i = sn(i, n), du === null ? du = [i] : du.push(i), tt !== 4 && (tt = 2), t === null)
        return true;
      a = sn(a, n), n = t;
      do {
        switch (n.tag) {
          case 3:
            return n.flags |= 65536, e = l & -l, n.lanes |= e, e = jo(n.stateNode, a, e), uo(n, e), false;
          case 1:
            if (t = n.type, i = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Ca === null || !Ca.has(i))))
              return n.flags |= 65536, l &= -l, n.lanes |= l, l = kh(l), Kh(l, e, n, a), uo(n, l), false;
        }
        n = n.return;
      } while (n !== null);
      return false;
    }
    var Co = Error(o(461)), ot = false;
    function Et(e, t, n, a) {
      t.child = e === null ? $f(t, null, n, a) : ml(t, e.child, n, a);
    }
    function Jh(e, t, n, a, l) {
      n = n.render;
      var i = t.ref;
      if ("ref" in a) {
        var c = {};
        for (var y in a)
          y !== "ref" && (c[y] = a[y]);
      } else
        c = a;
      return fl(t), a = ho(e, t, n, c, i, l), y = po(), e !== null && !ot ? (mo(e, t, l), na(e, t, l)) : (Re && y && Kr(t), t.flags |= 1, Et(e, t, a, l), t.child);
    }
    function Fh(e, t, n, a, l) {
      if (e === null) {
        var i = n.type;
        return typeof i == "function" && !Vr(i) && i.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = i, Wh(e, t, i, a, l)) : (e = cs(n.type, null, a, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (i = e.child, !Yo(e, l)) {
        var c = i.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Zi, n(c, a) && e.ref === t.ref)
          return na(e, t, l);
      }
      return t.flags |= 1, e = Wn(i, a), e.ref = t.ref, e.return = t, t.child = e;
    }
    function Wh(e, t, n, a, l) {
      if (e !== null) {
        var i = e.memoizedProps;
        if (Zi(i, a) && e.ref === t.ref)
          if (ot = false, t.pendingProps = a = i, Yo(e, l))
            (e.flags & 131072) !== 0 && (ot = true);
          else
            return t.lanes = e.lanes, na(e, t, l);
      }
      return Uo(e, t, n, a, l);
    }
    function $h(e, t, n, a) {
      var l = a.children, i = e !== null ? e.memoizedState : null;
      if (e === null && t.stateNode === null && (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), a.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
          if (i = i !== null ? i.baseLanes | n : n, e !== null) {
            for (a = t.child = e.child, l = 0; a !== null; )
              l = l | a.lanes | a.childLanes, a = a.sibling;
            a = l & ~i;
          } else
            a = 0, t.child = null;
          return Ph(e, t, i, n, a);
        }
        if ((n & 536870912) !== 0)
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && ps(t, i !== null ? i.cachePool : null), i !== null ? eh(t, i) : ro(), th(t);
        else
          return a = t.lanes = 536870912, Ph(e, t, i !== null ? i.baseLanes | n : n, n, a);
      } else
        i !== null ? (ps(t, i.cachePool), eh(t, i), Ra(), t.memoizedState = null) : (e !== null && ps(t, null), ro(), Ra());
      return Et(e, t, l, n), t.child;
    }
    function uu(e, t) {
      return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), t.sibling;
    }
    function Ph(e, t, n, a, l) {
      var i = no();
      return i = i === null ? null : { parent: st._currentValue, pool: i }, t.memoizedState = { baseLanes: n, cachePool: i }, e !== null && ps(t, null), ro(), th(t), e !== null && $l(e, t, a, true), t.childLanes = l, null;
    }
    function zs(e, t) {
      return t = Cs({ mode: t.mode, children: t.children }, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function Ih(e, t, n) {
      return ml(t, e.child, null, n), e = zs(t, t.pendingProps), e.flags |= 2, Kt(t), t.memoizedState = null, e;
    }
    function A0(e, t, n) {
      var a = t.pendingProps, l = (t.flags & 128) !== 0;
      if (t.flags &= -129, e === null) {
        if (Re) {
          if (a.mode === "hidden")
            return e = zs(t, a), t.lanes = 536870912, uu(null, e);
          if (co(t), (e = Ke) ? (e = fp(e, cn), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = { dehydrated: e, treeContext: Sa !== null ? { id: Mn, overflow: Bn } : null, retryLane: 536870912, hydrationErrors: null }, n = Bf(e), n.return = t, t.child = n, _t = t, Ke = null)) : e = null, e === null)
            throw _a(t);
          return t.lanes = 536870912, null;
        }
        return zs(t, a);
      }
      var i = e.memoizedState;
      if (i !== null) {
        var c = i.dehydrated;
        if (co(t), l)
          if (t.flags & 256)
            t.flags &= -257, t = Ih(e, t, n);
          else if (t.memoizedState !== null)
            t.child = e.child, t.flags |= 128, t = null;
          else
            throw Error(o(558));
        else if (ot || $l(e, t, n, false), l = (n & e.childLanes) !== 0, ot || l) {
          if (a = Ge, a !== null && (c = Xu(a, n), c !== 0 && c !== i.retryLane))
            throw i.retryLane = c, sl(e, c), Lt(a, e, c), Co;
          Xs(), t = Ih(e, t, n);
        } else
          e = i.treeContext, Ke = hn(c.nextSibling), _t = t, Re = true, xa = null, cn = false, e !== null && Lf(t, e), t = zs(t, a), t.flags |= 4096;
        return t;
      }
      return e = Wn(e.child, { mode: a.mode, children: a.children }), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function js(e, t) {
      var n = t.ref;
      if (n === null)
        e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof n != "function" && typeof n != "object")
          throw Error(o(284));
        (e === null || e.ref !== n) && (t.flags |= 4194816);
      }
    }
    function Uo(e, t, n, a, l) {
      return fl(t), n = ho(e, t, n, a, void 0, l), a = po(), e !== null && !ot ? (mo(e, t, l), na(e, t, l)) : (Re && a && Kr(t), t.flags |= 1, Et(e, t, n, l), t.child);
    }
    function ed(e, t, n, a, l, i) {
      return fl(t), t.updateQueue = null, n = ah(t, a, n, l), nh(e), a = po(), e !== null && !ot ? (mo(e, t, i), na(e, t, i)) : (Re && a && Kr(t), t.flags |= 1, Et(e, t, n, i), t.child);
    }
    function td(e, t, n, a, l) {
      if (fl(t), t.stateNode === null) {
        var i = Kl, c = n.contextType;
        typeof c == "object" && c !== null && (i = Tt(c)), i = new n(a, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = zo, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = a, i.state = t.memoizedState, i.refs = {}, lo(t), c = n.contextType, i.context = typeof c == "object" && c !== null ? Tt(c) : Kl, i.state = t.memoizedState, c = n.getDerivedStateFromProps, typeof c == "function" && (No(t, n, c, a), i.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (c = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), c !== i.state && zo.enqueueReplaceState(i, i.state, null), tu(t, a, i, l), eu(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = true;
      } else if (e === null) {
        i = t.stateNode;
        var y = t.memoizedProps, T = gl(n, y);
        i.props = T;
        var D = i.context, Y = n.contextType;
        c = Kl, typeof Y == "object" && Y !== null && (c = Tt(Y));
        var Z = n.getDerivedStateFromProps;
        Y = typeof Z == "function" || typeof i.getSnapshotBeforeUpdate == "function", y = t.pendingProps !== y, Y || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (y || D !== c) && Xh(t, i, a, c), Ea = false;
        var M = t.memoizedState;
        i.state = M, tu(t, a, i, l), eu(), D = t.memoizedState, y || M !== D || Ea ? (typeof Z == "function" && (No(t, n, Z, a), D = t.memoizedState), (T = Ea || Yh(t, n, T, a, M, D, c)) ? (Y || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = D), i.props = a, i.state = D, i.context = c, a = T) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = false);
      } else {
        i = t.stateNode, io(e, t), c = t.memoizedProps, Y = gl(n, c), i.props = Y, Z = t.pendingProps, M = i.context, D = n.contextType, T = Kl, typeof D == "object" && D !== null && (T = Tt(D)), y = n.getDerivedStateFromProps, (D = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (c !== Z || M !== T) && Xh(t, i, a, T), Ea = false, M = t.memoizedState, i.state = M, tu(t, a, i, l), eu();
        var L = t.memoizedState;
        c !== Z || M !== L || Ea || e !== null && e.dependencies !== null && hs(e.dependencies) ? (typeof y == "function" && (No(t, n, y, a), L = t.memoizedState), (Y = Ea || Yh(t, n, Y, a, M, L, T) || e !== null && e.dependencies !== null && hs(e.dependencies)) ? (D || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, L, T), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(a, L, T)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || c === e.memoizedProps && M === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = L), i.props = a, i.state = L, i.context = T, a = Y) : (typeof i.componentDidUpdate != "function" || c === e.memoizedProps && M === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024), a = false);
      }
      return i = a, js(e, t), a = (t.flags & 128) !== 0, i || a ? (i = t.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && a ? (t.child = ml(t, e.child, null, l), t.child = ml(t, null, n, l)) : Et(e, t, n, l), t.memoizedState = i.state, e = t.child) : e = na(e, t, l), e;
    }
    function nd(e, t, n, a) {
      return ol(), t.flags |= 256, Et(e, t, n, a), t.child;
    }
    var Do = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
    function Mo(e) {
      return { baseLanes: e, cachePool: Zf() };
    }
    function Bo(e, t, n) {
      return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Ft), e;
    }
    function ad(e, t, n) {
      var a = t.pendingProps, l = false, i = (t.flags & 128) !== 0, c;
      if ((c = i) || (c = e !== null && e.memoizedState === null ? false : (at.current & 2) !== 0), c && (l = true, t.flags &= -129), c = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (Re) {
          if (l ? wa(t) : Ra(), (e = Ke) ? (e = fp(e, cn), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = { dehydrated: e, treeContext: Sa !== null ? { id: Mn, overflow: Bn } : null, retryLane: 536870912, hydrationErrors: null }, n = Bf(e), n.return = t, t.child = n, _t = t, Ke = null)) : e = null, e === null)
            throw _a(t);
          return vc(e) ? t.lanes = 32 : t.lanes = 536870912, null;
        }
        var y = a.children;
        return a = a.fallback, l ? (Ra(), l = t.mode, y = Cs({ mode: "hidden", children: y }, l), a = rl(a, l, n, null), y.return = t, a.return = t, y.sibling = a, t.child = y, a = t.child, a.memoizedState = Mo(n), a.childLanes = Bo(e, c, n), t.memoizedState = Do, uu(null, a)) : (wa(t), qo(t, y));
      }
      var T = e.memoizedState;
      if (T !== null && (y = T.dehydrated, y !== null)) {
        if (i)
          t.flags & 256 ? (wa(t), t.flags &= -257, t = Ho(e, t, n)) : t.memoizedState !== null ? (Ra(), t.child = e.child, t.flags |= 128, t = null) : (Ra(), y = a.fallback, l = t.mode, a = Cs({ mode: "visible", children: a.children }, l), y = rl(y, l, n, null), y.flags |= 2, a.return = t, y.return = t, a.sibling = y, t.child = a, ml(t, e.child, null, n), a = t.child, a.memoizedState = Mo(n), a.childLanes = Bo(e, c, n), t.memoizedState = Do, t = uu(null, a));
        else if (wa(t), vc(y)) {
          if (c = y.nextSibling && y.nextSibling.dataset, c)
            var D = c.dgst;
          c = D, a = Error(o(419)), a.stack = "", a.digest = c, Ji({ value: a, source: null, stack: null }), t = Ho(e, t, n);
        } else if (ot || $l(e, t, n, false), c = (n & e.childLanes) !== 0, ot || c) {
          if (c = Ge, c !== null && (a = Xu(c, n), a !== 0 && a !== T.retryLane))
            throw T.retryLane = a, sl(e, a), Lt(c, e, a), Co;
          gc(y) || Xs(), t = Ho(e, t, n);
        } else
          gc(y) ? (t.flags |= 192, t.child = e.child, t = null) : (e = T.treeContext, Ke = hn(y.nextSibling), _t = t, Re = true, xa = null, cn = false, e !== null && Lf(t, e), t = qo(t, a.children), t.flags |= 4096);
        return t;
      }
      return l ? (Ra(), y = a.fallback, l = t.mode, T = e.child, D = T.sibling, a = Wn(T, { mode: "hidden", children: a.children }), a.subtreeFlags = T.subtreeFlags & 65011712, D !== null ? y = Wn(D, y) : (y = rl(y, l, n, null), y.flags |= 2), y.return = t, a.return = t, a.sibling = y, t.child = a, uu(null, a), a = t.child, y = e.child.memoizedState, y === null ? y = Mo(n) : (l = y.cachePool, l !== null ? (T = st._currentValue, l = l.parent !== T ? { parent: T, pool: T } : l) : l = Zf(), y = { baseLanes: y.baseLanes | n, cachePool: l }), a.memoizedState = y, a.childLanes = Bo(e, c, n), t.memoizedState = Do, uu(e.child, a)) : (wa(t), n = e.child, e = n.sibling, n = Wn(n, { mode: "visible", children: a.children }), n.return = t, n.sibling = null, e !== null && (c = t.deletions, c === null ? (t.deletions = [e], t.flags |= 16) : c.push(e)), t.child = n, t.memoizedState = null, n);
    }
    function qo(e, t) {
      return t = Cs({ mode: "visible", children: t }, e.mode), t.return = e, e.child = t;
    }
    function Cs(e, t) {
      return e = Zt(22, e, null, t), e.lanes = 0, e;
    }
    function Ho(e, t, n) {
      return ml(t, e.child, null, n), e = qo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
    }
    function ld(e, t, n) {
      e.lanes |= t;
      var a = e.alternate;
      a !== null && (a.lanes |= t), Pr(e.return, t, n);
    }
    function Lo(e, t, n, a, l, i) {
      var c = e.memoizedState;
      c === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: a, tail: n, tailMode: l, treeForkCount: i } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = a, c.tail = n, c.tailMode = l, c.treeForkCount = i);
    }
    function id(e, t, n) {
      var a = t.pendingProps, l = a.revealOrder, i = a.tail;
      a = a.children;
      var c = at.current, y = (c & 2) !== 0;
      if (y ? (c = c & 1 | 2, t.flags |= 128) : c &= 1, P(at, c), Et(e, t, a, n), a = Re ? Ki : 0, !y && e !== null && (e.flags & 128) !== 0)
        e:
          for (e = t.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && ld(e, n, t);
            else if (e.tag === 19)
              ld(e, n, t);
            else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t)
              break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t)
                break e;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            e = n.alternate, e !== null && Ss(e) === null && (l = n), n = n.sibling;
          n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Lo(t, false, l, n, i, a);
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (e = l.alternate, e !== null && Ss(e) === null) {
              t.child = l;
              break;
            }
            e = l.sibling, l.sibling = n, n = l, l = e;
          }
          Lo(t, true, n, null, i, a);
          break;
        case "together":
          Lo(t, false, null, null, void 0, a);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function na(e, t, n) {
      if (e !== null && (t.dependencies = e.dependencies), ja |= t.lanes, (n & t.childLanes) === 0)
        if (e !== null) {
          if ($l(e, t, n, false), (n & t.childLanes) === 0)
            return null;
        } else
          return null;
      if (e !== null && t.child !== e.child)
        throw Error(o(153));
      if (t.child !== null) {
        for (e = t.child, n = Wn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
          e = e.sibling, n = n.sibling = Wn(e, e.pendingProps), n.return = t;
        n.sibling = null;
      }
      return t.child;
    }
    function Yo(e, t) {
      return (e.lanes & t) !== 0 ? true : (e = e.dependencies, !!(e !== null && hs(e)));
    }
    function O0(e, t, n) {
      switch (t.tag) {
        case 3:
          xt(t, t.stateNode.containerInfo), Ta(t, st, e.memoizedState.cache), ol();
          break;
        case 27:
        case 5:
          Za(t);
          break;
        case 4:
          xt(t, t.stateNode.containerInfo);
          break;
        case 10:
          Ta(t, t.type, t.memoizedProps.value);
          break;
        case 31:
          if (t.memoizedState !== null)
            return t.flags |= 128, co(t), null;
          break;
        case 13:
          var a = t.memoizedState;
          if (a !== null)
            return a.dehydrated !== null ? (wa(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? ad(e, t, n) : (wa(t), e = na(e, t, n), e !== null ? e.sibling : null);
          wa(t);
          break;
        case 19:
          var l = (e.flags & 128) !== 0;
          if (a = (n & t.childLanes) !== 0, a || ($l(e, t, n, false), a = (n & t.childLanes) !== 0), l) {
            if (a)
              return id(e, t, n);
            t.flags |= 128;
          }
          if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), P(at, at.current), a)
            break;
          return null;
        case 22:
          return t.lanes = 0, $h(e, t, n, t.pendingProps);
        case 24:
          Ta(t, st, e.memoizedState.cache);
      }
      return na(e, t, n);
    }
    function ud(e, t, n) {
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps)
          ot = true;
        else {
          if (!Yo(e, n) && (t.flags & 128) === 0)
            return ot = false, O0(e, t, n);
          ot = (e.flags & 131072) !== 0;
        }
      else
        ot = false, Re && (t.flags & 1048576) !== 0 && Hf(t, Ki, t.index);
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: {
            var a = t.pendingProps;
            if (e = dl(t.elementType), t.type = e, typeof e == "function")
              Vr(e) ? (a = gl(e, a), t.tag = 1, t = td(null, t, e, a, n)) : (t.tag = 0, t = Uo(null, t, e, a, n));
            else {
              if (e != null) {
                var l = e.$$typeof;
                if (l === Oe) {
                  t.tag = 11, t = Jh(null, t, e, a, n);
                  break e;
                } else if (l === ce) {
                  t.tag = 14, t = Fh(null, t, e, a, n);
                  break e;
                }
              }
              throw t = Se(e) || e, Error(o(306, t, ""));
            }
          }
          return t;
        case 0:
          return Uo(e, t, t.type, t.pendingProps, n);
        case 1:
          return a = t.type, l = gl(a, t.pendingProps), td(e, t, a, l, n);
        case 3:
          e: {
            if (xt(t, t.stateNode.containerInfo), e === null)
              throw Error(o(387));
            a = t.pendingProps;
            var i = t.memoizedState;
            l = i.element, io(e, t), tu(t, a, null, n);
            var c = t.memoizedState;
            if (a = c.cache, Ta(t, st, a), a !== i.cache && Ir(t, [st], n, true), eu(), a = c.element, i.isDehydrated)
              if (i = { element: a, isDehydrated: false, cache: c.cache }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                t = nd(e, t, a, n);
                break e;
              } else if (a !== l) {
                l = sn(Error(o(424)), t), Ji(l), t = nd(e, t, a, n);
                break e;
              } else {
                switch (e = t.stateNode.containerInfo, e.nodeType) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                }
                for (Ke = hn(e.firstChild), _t = t, Re = true, xa = null, cn = true, n = $f(t, null, a, n), t.child = n; n; )
                  n.flags = n.flags & -3 | 4096, n = n.sibling;
              }
            else {
              if (ol(), a === l) {
                t = na(e, t, n);
                break e;
              }
              Et(e, t, a, n);
            }
            t = t.child;
          }
          return t;
        case 26:
          return js(e, t), e === null ? (n = gp(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : Re || (n = t.type, e = t.pendingProps, a = Js(xe.current).createElement(n), a[pt] = t, a[gt] = e, At(a, n, e), Pe(a), t.stateNode = a) : t.memoizedState = gp(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
        case 27:
          return Za(t), e === null && Re && (a = t.stateNode = pp(t.type, t.pendingProps, xe.current), _t = t, cn = true, l = Ke, Ba(t.type) ? (bc = l, Ke = hn(a.firstChild)) : Ke = l), Et(e, t, t.pendingProps.children, n), js(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && Re && ((l = a = Ke) && (a = ny(a, t.type, t.pendingProps, cn), a !== null ? (t.stateNode = a, _t = t, Ke = hn(a.firstChild), cn = false, l = true) : l = false), l || _a(t)), Za(t), l = t.type, i = t.pendingProps, c = e !== null ? e.memoizedProps : null, a = i.children, pc(l, i) ? a = null : c !== null && pc(l, c) && (t.flags |= 32), t.memoizedState !== null && (l = ho(e, t, g0, null, null, n), xu._currentValue = l), js(e, t), Et(e, t, a, n), t.child;
        case 6:
          return e === null && Re && ((e = n = Ke) && (n = ay(n, t.pendingProps, cn), n !== null ? (t.stateNode = n, _t = t, Ke = null, e = true) : e = false), e || _a(t)), null;
        case 13:
          return ad(e, t, n);
        case 4:
          return xt(t, t.stateNode.containerInfo), a = t.pendingProps, e === null ? t.child = ml(t, null, a, n) : Et(e, t, a, n), t.child;
        case 11:
          return Jh(e, t, t.type, t.pendingProps, n);
        case 7:
          return Et(e, t, t.pendingProps, n), t.child;
        case 8:
          return Et(e, t, t.pendingProps.children, n), t.child;
        case 12:
          return Et(e, t, t.pendingProps.children, n), t.child;
        case 10:
          return a = t.pendingProps, Ta(t, t.type, a.value), Et(e, t, a.children, n), t.child;
        case 9:
          return l = t.type._context, a = t.pendingProps.children, fl(t), l = Tt(l), a = a(l), t.flags |= 1, Et(e, t, a, n), t.child;
        case 14:
          return Fh(e, t, t.type, t.pendingProps, n);
        case 15:
          return Wh(e, t, t.type, t.pendingProps, n);
        case 19:
          return id(e, t, n);
        case 31:
          return A0(e, t, n);
        case 22:
          return $h(e, t, n, t.pendingProps);
        case 24:
          return fl(t), a = Tt(st), e === null ? (l = no(), l === null && (l = Ge, i = eo(), l.pooledCache = i, i.refCount++, i !== null && (l.pooledCacheLanes |= n), l = i), t.memoizedState = { parent: a, cache: l }, lo(t), Ta(t, st, l)) : ((e.lanes & n) !== 0 && (io(e, t), tu(t, null, null, n), eu()), l = e.memoizedState, i = t.memoizedState, l.parent !== a ? (l = { parent: a, cache: a }, t.memoizedState = l, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = l), Ta(t, st, a)) : (a = i.cache, Ta(t, st, a), a !== l.cache && Ir(t, [st], n, true))), Et(e, t, t.pendingProps.children, n), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(o(156, t.tag));
    }
    function aa(e) {
      e.flags |= 4;
    }
    function Xo(e, t, n, a, l) {
      if ((t = (e.mode & 32) !== 0) && (t = false), t) {
        if (e.flags |= 16777216, (l & 335544128) === l)
          if (e.stateNode.complete)
            e.flags |= 8192;
          else if (Ud())
            e.flags |= 8192;
          else
            throw pl = ys, ao;
      } else
        e.flags &= -16777217;
    }
    function sd(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !_p(t))
        if (Ud())
          e.flags |= 8192;
        else
          throw pl = ys, ao;
    }
    function Us(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Hu() : 536870912, e.lanes |= t, oi |= t);
    }
    function su(e, t) {
      if (!Re)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
              t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
          case "collapsed":
            n = e.tail;
            for (var a = null; n !== null; )
              n.alternate !== null && (a = n), n = n.sibling;
            a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null;
        }
    }
    function Je(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, n = 0, a = 0;
      if (t)
        for (var l = e.child; l !== null; )
          n |= l.lanes | l.childLanes, a |= l.subtreeFlags & 65011712, a |= l.flags & 65011712, l.return = e, l = l.sibling;
      else
        for (l = e.child; l !== null; )
          n |= l.lanes | l.childLanes, a |= l.subtreeFlags, a |= l.flags, l.return = e, l = l.sibling;
      return e.subtreeFlags |= a, e.childLanes = n, t;
    }
    function w0(e, t, n) {
      var a = t.pendingProps;
      switch (Jr(t), t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Je(t), null;
        case 1:
          return Je(t), null;
        case 3:
          return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), In(st), $e(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Wl(t) ? aa(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Wr())), Je(t), null;
        case 26:
          var l = t.type, i = t.memoizedState;
          return e === null ? (aa(t), i !== null ? (Je(t), sd(t, i)) : (Je(t), Xo(t, l, null, a, n))) : i ? i !== e.memoizedState ? (aa(t), Je(t), sd(t, i)) : (Je(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && aa(t), Je(t), Xo(t, l, e, a, n)), null;
        case 27:
          if (El(t), n = xe.current, l = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== a && aa(t);
          else {
            if (!a) {
              if (t.stateNode === null)
                throw Error(o(166));
              return Je(t), null;
            }
            e = te.current, Wl(t) ? Yf(t) : (e = pp(l, a, n), t.stateNode = e, aa(t));
          }
          return Je(t), null;
        case 5:
          if (El(t), l = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== a && aa(t);
          else {
            if (!a) {
              if (t.stateNode === null)
                throw Error(o(166));
              return Je(t), null;
            }
            if (i = te.current, Wl(t))
              Yf(t);
            else {
              var c = Js(xe.current);
              switch (i) {
                case 1:
                  i = c.createElementNS("http://www.w3.org/2000/svg", l);
                  break;
                case 2:
                  i = c.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                  break;
                default:
                  switch (l) {
                    case "svg":
                      i = c.createElementNS("http://www.w3.org/2000/svg", l);
                      break;
                    case "math":
                      i = c.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                      break;
                    case "script":
                      i = c.createElement("div"), i.innerHTML = "<script><\/script>", i = i.removeChild(i.firstChild);
                      break;
                    case "select":
                      i = typeof a.is == "string" ? c.createElement("select", { is: a.is }) : c.createElement("select"), a.multiple ? i.multiple = true : a.size && (i.size = a.size);
                      break;
                    default:
                      i = typeof a.is == "string" ? c.createElement(l, { is: a.is }) : c.createElement(l);
                  }
              }
              i[pt] = t, i[gt] = a;
              e:
                for (c = t.child; c !== null; ) {
                  if (c.tag === 5 || c.tag === 6)
                    i.appendChild(c.stateNode);
                  else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                    c.child.return = c, c = c.child;
                    continue;
                  }
                  if (c === t)
                    break e;
                  for (; c.sibling === null; ) {
                    if (c.return === null || c.return === t)
                      break e;
                    c = c.return;
                  }
                  c.sibling.return = c.return, c = c.sibling;
                }
              t.stateNode = i;
              e:
                switch (At(i, l, a), l) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a = !!a.autoFocus;
                    break e;
                  case "img":
                    a = true;
                    break e;
                  default:
                    a = false;
                }
              a && aa(t);
            }
          }
          return Je(t), Xo(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
        case 6:
          if (e && t.stateNode != null)
            e.memoizedProps !== a && aa(t);
          else {
            if (typeof a != "string" && t.stateNode === null)
              throw Error(o(166));
            if (e = xe.current, Wl(t)) {
              if (e = t.stateNode, n = t.memoizedProps, a = null, l = _t, l !== null)
                switch (l.tag) {
                  case 27:
                  case 5:
                    a = l.memoizedProps;
                }
              e[pt] = t, e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === true || ap(e.nodeValue, n)), e || _a(t, true);
            } else
              e = Js(e).createTextNode(a), e[pt] = t, t.stateNode = e;
          }
          return Je(t), null;
        case 31:
          if (n = t.memoizedState, e === null || e.memoizedState !== null) {
            if (a = Wl(t), n !== null) {
              if (e === null) {
                if (!a)
                  throw Error(o(318));
                if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e)
                  throw Error(o(557));
                e[pt] = t;
              } else
                ol(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
              Je(t), e = false;
            } else
              n = Wr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = true;
            if (!e)
              return t.flags & 256 ? (Kt(t), t) : (Kt(t), null);
            if ((t.flags & 128) !== 0)
              throw Error(o(558));
          }
          return Je(t), null;
        case 13:
          if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (l = Wl(t), a !== null && a.dehydrated !== null) {
              if (e === null) {
                if (!l)
                  throw Error(o(318));
                if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l)
                  throw Error(o(317));
                l[pt] = t;
              } else
                ol(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
              Je(t), l = false;
            } else
              l = Wr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), l = true;
            if (!l)
              return t.flags & 256 ? (Kt(t), t) : (Kt(t), null);
          }
          return Kt(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = a !== null, e = e !== null && e.memoizedState !== null, n && (a = t.child, l = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (l = a.alternate.memoizedState.cachePool.pool), i = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool), i !== l && (a.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), Us(t, t.updateQueue), Je(t), null);
        case 4:
          return $e(), e === null && oc(t.stateNode.containerInfo), Je(t), null;
        case 10:
          return In(t.type), Je(t), null;
        case 19:
          if (V(at), a = t.memoizedState, a === null)
            return Je(t), null;
          if (l = (t.flags & 128) !== 0, i = a.rendering, i === null)
            if (l)
              su(a, false);
            else {
              if (tt !== 0 || e !== null && (e.flags & 128) !== 0)
                for (e = t.child; e !== null; ) {
                  if (i = Ss(e), i !== null) {
                    for (t.flags |= 128, su(a, false), e = i.updateQueue, t.updateQueue = e, Us(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                      Mf(n, e), n = n.sibling;
                    return P(at, at.current & 1 | 2), Re && $n(t, a.treeForkCount), t.child;
                  }
                  e = e.sibling;
                }
              a.tail !== null && Nt() > Hs && (t.flags |= 128, l = true, su(a, false), t.lanes = 4194304);
            }
          else {
            if (!l)
              if (e = Ss(i), e !== null) {
                if (t.flags |= 128, l = true, e = e.updateQueue, t.updateQueue = e, Us(t, e), su(a, true), a.tail === null && a.tailMode === "hidden" && !i.alternate && !Re)
                  return Je(t), null;
              } else
                2 * Nt() - a.renderingStartTime > Hs && n !== 536870912 && (t.flags |= 128, l = true, su(a, false), t.lanes = 4194304);
            a.isBackwards ? (i.sibling = t.child, t.child = i) : (e = a.last, e !== null ? e.sibling = i : t.child = i, a.last = i);
          }
          return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = Nt(), e.sibling = null, n = at.current, P(at, l ? n & 1 | 2 : n & 1), Re && $n(t, a.treeForkCount), e) : (Je(t), null);
        case 22:
        case 23:
          return Kt(t), oo(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Je(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Je(t), n = t.updateQueue, n !== null && Us(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), e !== null && V(hl), null;
        case 24:
          return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), In(st), Je(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(o(156, t.tag));
    }
    function R0(e, t) {
      switch (Jr(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
          return In(st), $e(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return El(t), null;
        case 31:
          if (t.memoizedState !== null) {
            if (Kt(t), t.alternate === null)
              throw Error(o(340));
            ol();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 13:
          if (Kt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(o(340));
            ol();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
          return V(at), null;
        case 4:
          return $e(), null;
        case 10:
          return In(t.type), null;
        case 22:
        case 23:
          return Kt(t), oo(), e !== null && V(hl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 24:
          return In(st), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function rd(e, t) {
      switch (Jr(t), t.tag) {
        case 3:
          In(st), $e();
          break;
        case 26:
        case 27:
        case 5:
          El(t);
          break;
        case 4:
          $e();
          break;
        case 31:
          t.memoizedState !== null && Kt(t);
          break;
        case 13:
          Kt(t);
          break;
        case 19:
          V(at);
          break;
        case 10:
          In(t.type);
          break;
        case 22:
        case 23:
          Kt(t), oo(), e !== null && V(hl);
          break;
        case 24:
          In(st);
      }
    }
    function ru(e, t) {
      try {
        var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
        if (a !== null) {
          var l = a.next;
          n = l;
          do {
            if ((n.tag & e) === e) {
              a = void 0;
              var i = n.create, c = n.inst;
              a = i(), c.destroy = a;
            }
            n = n.next;
          } while (n !== l);
        }
      } catch (y) {
        qe(t, t.return, y);
      }
    }
    function Na(e, t, n) {
      try {
        var a = t.updateQueue, l = a !== null ? a.lastEffect : null;
        if (l !== null) {
          var i = l.next;
          a = i;
          do {
            if ((a.tag & e) === e) {
              var c = a.inst, y = c.destroy;
              if (y !== void 0) {
                c.destroy = void 0, l = t;
                var T = n, D = y;
                try {
                  D();
                } catch (Y) {
                  qe(l, T, Y);
                }
              }
            }
            a = a.next;
          } while (a !== i);
        }
      } catch (Y) {
        qe(t, t.return, Y);
      }
    }
    function od(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var n = e.stateNode;
        try {
          If(t, n);
        } catch (a) {
          qe(e, e.return, a);
        }
      }
    }
    function cd(e, t, n) {
      n.props = gl(e.type, e.memoizedProps), n.state = e.memoizedState;
      try {
        n.componentWillUnmount();
      } catch (a) {
        qe(e, t, a);
      }
    }
    function ou(e, t) {
      try {
        var n = e.ref;
        if (n !== null) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              var a = e.stateNode;
              break;
            case 30:
              a = e.stateNode;
              break;
            default:
              a = e.stateNode;
          }
          typeof n == "function" ? e.refCleanup = n(a) : n.current = a;
        }
      } catch (l) {
        qe(e, t, l);
      }
    }
    function qn(e, t) {
      var n = e.ref, a = e.refCleanup;
      if (n !== null)
        if (typeof a == "function")
          try {
            a();
          } catch (l) {
            qe(e, t, l);
          } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
          }
        else if (typeof n == "function")
          try {
            n(null);
          } catch (l) {
            qe(e, t, l);
          }
        else
          n.current = null;
    }
    function fd(e) {
      var t = e.type, n = e.memoizedProps, a = e.stateNode;
      try {
        e:
          switch (t) {
            case "button":
            case "input":
            case "select":
            case "textarea":
              n.autoFocus && a.focus();
              break e;
            case "img":
              n.src ? a.src = n.src : n.srcSet && (a.srcset = n.srcSet);
          }
      } catch (l) {
        qe(e, e.return, l);
      }
    }
    function Qo(e, t, n) {
      try {
        var a = e.stateNode;
        W0(a, e.type, n, t), a[gt] = t;
      } catch (l) {
        qe(e, e.return, l);
      }
    }
    function hd(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ba(e.type) || e.tag === 4;
    }
    function Go(e) {
      e:
        for (; ; ) {
          for (; e.sibling === null; ) {
            if (e.return === null || hd(e.return))
              return null;
            e = e.return;
          }
          for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.tag === 27 && Ba(e.type) || e.flags & 2 || e.child === null || e.tag === 4)
              continue e;
            e.child.return = e, e = e.child;
          }
          if (!(e.flags & 2))
            return e.stateNode;
        }
    }
    function Vo(e, t, n) {
      var a = e.tag;
      if (a === 5 || a === 6)
        e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = It));
      else if (a !== 4 && (a === 27 && Ba(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
        for (Vo(e, t, n), e = e.sibling; e !== null; )
          Vo(e, t, n), e = e.sibling;
    }
    function Ds(e, t, n) {
      var a = e.tag;
      if (a === 5 || a === 6)
        e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
      else if (a !== 4 && (a === 27 && Ba(e.type) && (n = e.stateNode), e = e.child, e !== null))
        for (Ds(e, t, n), e = e.sibling; e !== null; )
          Ds(e, t, n), e = e.sibling;
    }
    function dd(e) {
      var t = e.stateNode, n = e.memoizedProps;
      try {
        for (var a = e.type, l = t.attributes; l.length; )
          t.removeAttributeNode(l[0]);
        At(t, a, n), t[pt] = e, t[gt] = n;
      } catch (i) {
        qe(e, e.return, i);
      }
    }
    var la = false, ct = false, Zo = false, pd = typeof WeakSet == "function" ? WeakSet : Set, St = null;
    function N0(e, t) {
      if (e = e.containerInfo, hc = tr, e = Of(e), qr(e)) {
        if ("selectionStart" in e)
          var n = { start: e.selectionStart, end: e.selectionEnd };
        else
          e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var a = n.getSelection && n.getSelection();
            if (a && a.rangeCount !== 0) {
              n = a.anchorNode;
              var l = a.anchorOffset, i = a.focusNode;
              a = a.focusOffset;
              try {
                n.nodeType, i.nodeType;
              } catch (ie) {
                n = null;
                break e;
              }
              var c = 0, y = -1, T = -1, D = 0, Y = 0, Z = e, M = null;
              t:
                for (; ; ) {
                  for (var L; Z !== n || l !== 0 && Z.nodeType !== 3 || (y = c + l), Z !== i || a !== 0 && Z.nodeType !== 3 || (T = c + a), Z.nodeType === 3 && (c += Z.nodeValue.length), (L = Z.firstChild) !== null; )
                    M = Z, Z = L;
                  for (; ; ) {
                    if (Z === e)
                      break t;
                    if (M === n && ++D === l && (y = c), M === i && ++Y === a && (T = c), (L = Z.nextSibling) !== null)
                      break;
                    Z = M, M = Z.parentNode;
                  }
                  Z = L;
                }
              n = y === -1 || T === -1 ? null : { start: y, end: T };
            } else
              n = null;
          }
        n = n || { start: 0, end: 0 };
      } else
        n = null;
      for (dc = { focusedElem: e, selectionRange: n }, tr = false, St = t; St !== null; )
        if (t = St, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
          e.return = t, St = e;
        else
          for (; St !== null; ) {
            switch (t = St, i = t.alternate, e = t.flags, t.tag) {
              case 0:
                if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                  for (n = 0; n < e.length; n++)
                    l = e[n], l.ref.impl = l.nextImpl;
                break;
              case 11:
              case 15:
                break;
              case 1:
                if ((e & 1024) !== 0 && i !== null) {
                  e = void 0, n = t, l = i.memoizedProps, i = i.memoizedState, a = n.stateNode;
                  try {
                    var ee = gl(n.type, l);
                    e = a.getSnapshotBeforeUpdate(ee, i), a.__reactInternalSnapshotBeforeUpdate = e;
                  } catch (ie) {
                    qe(n, n.return, ie);
                  }
                }
                break;
              case 3:
                if ((e & 1024) !== 0) {
                  if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9)
                    yc(e);
                  else if (n === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        yc(e);
                        break;
                      default:
                        e.textContent = "";
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if ((e & 1024) !== 0)
                  throw Error(o(163));
            }
            if (e = t.sibling, e !== null) {
              e.return = t.return, St = e;
              break;
            }
            St = t.return;
          }
    }
    function md(e, t, n) {
      var a = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ua(e, n), a & 4 && ru(5, n);
          break;
        case 1:
          if (ua(e, n), a & 4)
            if (e = n.stateNode, t === null)
              try {
                e.componentDidMount();
              } catch (c) {
                qe(n, n.return, c);
              }
            else {
              var l = gl(n.type, t.memoizedProps);
              t = t.memoizedState;
              try {
                e.componentDidUpdate(l, t, e.__reactInternalSnapshotBeforeUpdate);
              } catch (c) {
                qe(n, n.return, c);
              }
            }
          a & 64 && od(n), a & 512 && ou(n, n.return);
          break;
        case 3:
          if (ua(e, n), a & 64 && (e = n.updateQueue, e !== null)) {
            if (t = null, n.child !== null)
              switch (n.child.tag) {
                case 27:
                case 5:
                  t = n.child.stateNode;
                  break;
                case 1:
                  t = n.child.stateNode;
              }
            try {
              If(e, t);
            } catch (c) {
              qe(n, n.return, c);
            }
          }
          break;
        case 27:
          t === null && a & 4 && dd(n);
        case 26:
        case 5:
          ua(e, n), t === null && a & 4 && fd(n), a & 512 && ou(n, n.return);
          break;
        case 12:
          ua(e, n);
          break;
        case 31:
          ua(e, n), a & 4 && vd(e, n);
          break;
        case 13:
          ua(e, n), a & 4 && bd(e, n), a & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = H0.bind(null, n), ly(e, n))));
          break;
        case 22:
          if (a = n.memoizedState !== null || la, !a) {
            t = t !== null && t.memoizedState !== null || ct, l = la;
            var i = ct;
            la = a, (ct = t) && !i ? sa(e, n, (n.subtreeFlags & 8772) !== 0) : ua(e, n), la = l, ct = i;
          }
          break;
        case 30:
          break;
        default:
          ua(e, n);
      }
    }
    function yd(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, yd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Ci(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    var Fe = null, Mt = false;
    function ia(e, t, n) {
      for (n = n.child; n !== null; )
        gd(e, t, n), n = n.sibling;
    }
    function gd(e, t, n) {
      if (zt && typeof zt.onCommitFiberUnmount == "function")
        try {
          zt.onCommitFiberUnmount(Ka, n);
        } catch (i) {
        }
      switch (n.tag) {
        case 26:
          ct || qn(n, t), ia(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
          break;
        case 27:
          ct || qn(n, t);
          var a = Fe, l = Mt;
          Ba(n.type) && (Fe = n.stateNode, Mt = false), ia(e, t, n), vu(n.stateNode), Fe = a, Mt = l;
          break;
        case 5:
          ct || qn(n, t);
        case 6:
          if (a = Fe, l = Mt, Fe = null, ia(e, t, n), Fe = a, Mt = l, Fe !== null)
            if (Mt)
              try {
                (Fe.nodeType === 9 ? Fe.body : Fe.nodeName === "HTML" ? Fe.ownerDocument.body : Fe).removeChild(n.stateNode);
              } catch (i) {
                qe(n, t, i);
              }
            else
              try {
                Fe.removeChild(n.stateNode);
              } catch (i) {
                qe(n, t, i);
              }
          break;
        case 18:
          Fe !== null && (Mt ? (e = Fe, op(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), gi(e)) : op(Fe, n.stateNode));
          break;
        case 4:
          a = Fe, l = Mt, Fe = n.stateNode.containerInfo, Mt = true, ia(e, t, n), Fe = a, Mt = l;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Na(2, n, t), ct || Na(4, n, t), ia(e, t, n);
          break;
        case 1:
          ct || (qn(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function" && cd(n, t, a)), ia(e, t, n);
          break;
        case 21:
          ia(e, t, n);
          break;
        case 22:
          ct = (a = ct) || n.memoizedState !== null, ia(e, t, n), ct = a;
          break;
        default:
          ia(e, t, n);
      }
    }
    function vd(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
        e = e.dehydrated;
        try {
          gi(e);
        } catch (n) {
          qe(t, t.return, n);
        }
      }
    }
    function bd(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
          gi(e);
        } catch (n) {
          qe(t, t.return, n);
        }
    }
    function z0(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new pd()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new pd()), t;
        default:
          throw Error(o(435, e.tag));
      }
    }
    function Ms(e, t) {
      var n = z0(e);
      t.forEach(function(a) {
        if (!n.has(a)) {
          n.add(a);
          var l = L0.bind(null, e, a);
          a.then(l, l);
        }
      });
    }
    function Bt(e, t) {
      var n = t.deletions;
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var l = n[a], i = e, c = t, y = c;
          e:
            for (; y !== null; ) {
              switch (y.tag) {
                case 27:
                  if (Ba(y.type)) {
                    Fe = y.stateNode, Mt = false;
                    break e;
                  }
                  break;
                case 5:
                  Fe = y.stateNode, Mt = false;
                  break e;
                case 3:
                case 4:
                  Fe = y.stateNode.containerInfo, Mt = true;
                  break e;
              }
              y = y.return;
            }
          if (Fe === null)
            throw Error(o(160));
          gd(i, c, l), Fe = null, Mt = false, i = l.alternate, i !== null && (i.return = null), l.return = null;
        }
      if (t.subtreeFlags & 13886)
        for (t = t.child; t !== null; )
          Sd(t, e), t = t.sibling;
    }
    var vn = null;
    function Sd(e, t) {
      var n = e.alternate, a = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Bt(t, e), qt(e), a & 4 && (Na(3, e, e.return), ru(3, e), Na(5, e, e.return));
          break;
        case 1:
          Bt(t, e), qt(e), a & 512 && (ct || n === null || qn(n, n.return)), a & 64 && la && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
          break;
        case 26:
          var l = vn;
          if (Bt(t, e), qt(e), a & 512 && (ct || n === null || qn(n, n.return)), a & 4) {
            var i = n !== null ? n.memoizedState : null;
            if (a = e.memoizedState, n === null)
              if (a === null)
                if (e.stateNode === null) {
                  e: {
                    a = e.type, n = e.memoizedProps, l = l.ownerDocument || l;
                    t:
                      switch (a) {
                        case "title":
                          i = l.getElementsByTagName("title")[0], (!i || i[Nn] || i[pt] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = l.createElement(a), l.head.insertBefore(i, l.querySelector("head > title"))), At(i, a, n), i[pt] = e, Pe(i), a = i;
                          break e;
                        case "link":
                          var c = Sp("link", "href", l).get(a + (n.href || ""));
                          if (c) {
                            for (var y = 0; y < c.length; y++)
                              if (i = c[y], i.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && i.getAttribute("rel") === (n.rel == null ? null : n.rel) && i.getAttribute("title") === (n.title == null ? null : n.title) && i.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                                c.splice(y, 1);
                                break t;
                              }
                          }
                          i = l.createElement(a), At(i, a, n), l.head.appendChild(i);
                          break;
                        case "meta":
                          if (c = Sp("meta", "content", l).get(a + (n.content || ""))) {
                            for (y = 0; y < c.length; y++)
                              if (i = c[y], i.getAttribute("content") === (n.content == null ? null : "" + n.content) && i.getAttribute("name") === (n.name == null ? null : n.name) && i.getAttribute("property") === (n.property == null ? null : n.property) && i.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && i.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                                c.splice(y, 1);
                                break t;
                              }
                          }
                          i = l.createElement(a), At(i, a, n), l.head.appendChild(i);
                          break;
                        default:
                          throw Error(o(468, a));
                      }
                    i[pt] = e, Pe(i), a = i;
                  }
                  e.stateNode = a;
                } else
                  xp(l, e.type, e.stateNode);
              else
                e.stateNode = bp(l, a, e.memoizedProps);
            else
              i !== a ? (i === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : i.count--, a === null ? xp(l, e.type, e.stateNode) : bp(l, a, e.memoizedProps)) : a === null && e.stateNode !== null && Qo(e, e.memoizedProps, n.memoizedProps);
          }
          break;
        case 27:
          Bt(t, e), qt(e), a & 512 && (ct || n === null || qn(n, n.return)), n !== null && a & 4 && Qo(e, e.memoizedProps, n.memoizedProps);
          break;
        case 5:
          if (Bt(t, e), qt(e), a & 512 && (ct || n === null || qn(n, n.return)), e.flags & 32) {
            l = e.stateNode;
            try {
              Vn(l, "");
            } catch (ee) {
              qe(e, e.return, ee);
            }
          }
          a & 4 && e.stateNode != null && (l = e.memoizedProps, Qo(e, l, n !== null ? n.memoizedProps : l)), a & 1024 && (Zo = true);
          break;
        case 6:
          if (Bt(t, e), qt(e), a & 4) {
            if (e.stateNode === null)
              throw Error(o(162));
            a = e.memoizedProps, n = e.stateNode;
            try {
              n.nodeValue = a;
            } catch (ee) {
              qe(e, e.return, ee);
            }
          }
          break;
        case 3:
          if ($s = null, l = vn, vn = Fs(t.containerInfo), Bt(t, e), vn = l, qt(e), a & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
              gi(t.containerInfo);
            } catch (ee) {
              qe(e, e.return, ee);
            }
          Zo && (Zo = false, xd(e));
          break;
        case 4:
          a = vn, vn = Fs(e.stateNode.containerInfo), Bt(t, e), qt(e), vn = a;
          break;
        case 12:
          Bt(t, e), qt(e);
          break;
        case 31:
          Bt(t, e), qt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Ms(e, a)));
          break;
        case 13:
          Bt(t, e), qt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (qs = Nt()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Ms(e, a)));
          break;
        case 22:
          l = e.memoizedState !== null;
          var T = n !== null && n.memoizedState !== null, D = la, Y = ct;
          if (la = D || l, ct = Y || T, Bt(t, e), ct = Y, la = D, qt(e), a & 8192)
            e:
              for (t = e.stateNode, t._visibility = l ? t._visibility & -2 : t._visibility | 1, l && (n === null || T || la || ct || vl(e)), n = null, t = e; ; ) {
                if (t.tag === 5 || t.tag === 26) {
                  if (n === null) {
                    T = n = t;
                    try {
                      if (i = T.stateNode, l)
                        c = i.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                      else {
                        y = T.stateNode;
                        var Z = T.memoizedProps.style, M = Z != null && Z.hasOwnProperty("display") ? Z.display : null;
                        y.style.display = M == null || typeof M == "boolean" ? "" : ("" + M).trim();
                      }
                    } catch (ee) {
                      qe(T, T.return, ee);
                    }
                  }
                } else if (t.tag === 6) {
                  if (n === null) {
                    T = t;
                    try {
                      T.stateNode.nodeValue = l ? "" : T.memoizedProps;
                    } catch (ee) {
                      qe(T, T.return, ee);
                    }
                  }
                } else if (t.tag === 18) {
                  if (n === null) {
                    T = t;
                    try {
                      var L = T.stateNode;
                      l ? cp(L, true) : cp(T.stateNode, false);
                    } catch (ee) {
                      qe(T, T.return, ee);
                    }
                  }
                } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                  t.child.return = t, t = t.child;
                  continue;
                }
                if (t === e)
                  break e;
                for (; t.sibling === null; ) {
                  if (t.return === null || t.return === e)
                    break e;
                  n === t && (n = null), t = t.return;
                }
                n === t && (n = null), t.sibling.return = t.return, t = t.sibling;
              }
          a & 4 && (a = e.updateQueue, a !== null && (n = a.retryQueue, n !== null && (a.retryQueue = null, Ms(e, n))));
          break;
        case 19:
          Bt(t, e), qt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Ms(e, a)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          Bt(t, e), qt(e);
      }
    }
    function qt(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          for (var n, a = e.return; a !== null; ) {
            if (hd(a)) {
              n = a;
              break;
            }
            a = a.return;
          }
          if (n == null)
            throw Error(o(160));
          switch (n.tag) {
            case 27:
              var l = n.stateNode, i = Go(e);
              Ds(e, i, l);
              break;
            case 5:
              var c = n.stateNode;
              n.flags & 32 && (Vn(c, ""), n.flags &= -33);
              var y = Go(e);
              Ds(e, y, c);
              break;
            case 3:
            case 4:
              var T = n.stateNode.containerInfo, D = Go(e);
              Vo(e, D, T);
              break;
            default:
              throw Error(o(161));
          }
        } catch (Y) {
          qe(e, e.return, Y);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function xd(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          xd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        }
    }
    function ua(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          md(e, t.alternate, t), t = t.sibling;
    }
    function vl(e) {
      for (e = e.child; e !== null; ) {
        var t = e;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            Na(4, t, t.return), vl(t);
            break;
          case 1:
            qn(t, t.return);
            var n = t.stateNode;
            typeof n.componentWillUnmount == "function" && cd(t, t.return, n), vl(t);
            break;
          case 27:
            vu(t.stateNode);
          case 26:
          case 5:
            qn(t, t.return), vl(t);
            break;
          case 22:
            t.memoizedState === null && vl(t);
            break;
          case 30:
            vl(t);
            break;
          default:
            vl(t);
        }
        e = e.sibling;
      }
    }
    function sa(e, t, n) {
      for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
        var a = t.alternate, l = e, i = t, c = i.flags;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            sa(l, i, n), ru(4, i);
            break;
          case 1:
            if (sa(l, i, n), a = i, l = a.stateNode, typeof l.componentDidMount == "function")
              try {
                l.componentDidMount();
              } catch (D) {
                qe(a, a.return, D);
              }
            if (a = i, l = a.updateQueue, l !== null) {
              var y = a.stateNode;
              try {
                var T = l.shared.hiddenCallbacks;
                if (T !== null)
                  for (l.shared.hiddenCallbacks = null, l = 0; l < T.length; l++)
                    Pf(T[l], y);
              } catch (D) {
                qe(a, a.return, D);
              }
            }
            n && c & 64 && od(i), ou(i, i.return);
            break;
          case 27:
            dd(i);
          case 26:
          case 5:
            sa(l, i, n), n && a === null && c & 4 && fd(i), ou(i, i.return);
            break;
          case 12:
            sa(l, i, n);
            break;
          case 31:
            sa(l, i, n), n && c & 4 && vd(l, i);
            break;
          case 13:
            sa(l, i, n), n && c & 4 && bd(l, i);
            break;
          case 22:
            i.memoizedState === null && sa(l, i, n), ou(i, i.return);
            break;
          case 30:
            break;
          default:
            sa(l, i, n);
        }
        t = t.sibling;
      }
    }
    function ko(e, t) {
      var n = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Fi(n));
    }
    function Ko(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Fi(e));
    }
    function bn(e, t, n, a) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; )
          _d(e, t, n, a), t = t.sibling;
    }
    function _d(e, t, n, a) {
      var l = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          bn(e, t, n, a), l & 2048 && ru(9, t);
          break;
        case 1:
          bn(e, t, n, a);
          break;
        case 3:
          bn(e, t, n, a), l & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Fi(e)));
          break;
        case 12:
          if (l & 2048) {
            bn(e, t, n, a), e = t.stateNode;
            try {
              var i = t.memoizedProps, c = i.id, y = i.onPostCommit;
              typeof y == "function" && y(c, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
            } catch (T) {
              qe(t, t.return, T);
            }
          } else
            bn(e, t, n, a);
          break;
        case 31:
          bn(e, t, n, a);
          break;
        case 13:
          bn(e, t, n, a);
          break;
        case 23:
          break;
        case 22:
          i = t.stateNode, c = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? bn(e, t, n, a) : cu(e, t) : i._visibility & 2 ? bn(e, t, n, a) : (i._visibility |= 2, ui(e, t, n, a, (t.subtreeFlags & 10256) !== 0 || false)), l & 2048 && ko(c, t);
          break;
        case 24:
          bn(e, t, n, a), l & 2048 && Ko(t.alternate, t);
          break;
        default:
          bn(e, t, n, a);
      }
    }
    function ui(e, t, n, a, l) {
      for (l = l && ((t.subtreeFlags & 10256) !== 0 || false), t = t.child; t !== null; ) {
        var i = e, c = t, y = n, T = a, D = c.flags;
        switch (c.tag) {
          case 0:
          case 11:
          case 15:
            ui(i, c, y, T, l), ru(8, c);
            break;
          case 23:
            break;
          case 22:
            var Y = c.stateNode;
            c.memoizedState !== null ? Y._visibility & 2 ? ui(i, c, y, T, l) : cu(i, c) : (Y._visibility |= 2, ui(i, c, y, T, l)), l && D & 2048 && ko(c.alternate, c);
            break;
          case 24:
            ui(i, c, y, T, l), l && D & 2048 && Ko(c.alternate, c);
            break;
          default:
            ui(i, c, y, T, l);
        }
        t = t.sibling;
      }
    }
    function cu(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var n = e, a = t, l = a.flags;
          switch (a.tag) {
            case 22:
              cu(n, a), l & 2048 && ko(a.alternate, a);
              break;
            case 24:
              cu(n, a), l & 2048 && Ko(a.alternate, a);
              break;
            default:
              cu(n, a);
          }
          t = t.sibling;
        }
    }
    var fu = 8192;
    function si(e, t, n) {
      if (e.subtreeFlags & fu)
        for (e = e.child; e !== null; )
          Td(e, t, n), e = e.sibling;
    }
    function Td(e, t, n) {
      switch (e.tag) {
        case 26:
          si(e, t, n), e.flags & fu && e.memoizedState !== null && yy(n, vn, e.memoizedState, e.memoizedProps);
          break;
        case 5:
          si(e, t, n);
          break;
        case 3:
        case 4:
          var a = vn;
          vn = Fs(e.stateNode.containerInfo), si(e, t, n), vn = a;
          break;
        case 22:
          e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = fu, fu = 16777216, si(e, t, n), fu = a) : si(e, t, n));
          break;
        default:
          si(e, t, n);
      }
    }
    function Ed(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function hu(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var a = t[n];
            St = a, Od(a, e);
          }
        Ed(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; )
          Ad(e), e = e.sibling;
    }
    function Ad(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          hu(e), e.flags & 2048 && Na(9, e, e.return);
          break;
        case 3:
          hu(e);
          break;
        case 12:
          hu(e);
          break;
        case 22:
          var t = e.stateNode;
          e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Bs(e)) : hu(e);
          break;
        default:
          hu(e);
      }
    }
    function Bs(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var a = t[n];
            St = a, Od(a, e);
          }
        Ed(e);
      }
      for (e = e.child; e !== null; ) {
        switch (t = e, t.tag) {
          case 0:
          case 11:
          case 15:
            Na(8, t, t.return), Bs(t);
            break;
          case 22:
            n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Bs(t));
            break;
          default:
            Bs(t);
        }
        e = e.sibling;
      }
    }
    function Od(e, t) {
      for (; St !== null; ) {
        var n = St;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            Na(8, n, t);
            break;
          case 23:
          case 22:
            if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
              var a = n.memoizedState.cachePool.pool;
              a != null && a.refCount++;
            }
            break;
          case 24:
            Fi(n.memoizedState.cache);
        }
        if (a = n.child, a !== null)
          a.return = n, St = a;
        else
          e:
            for (n = e; St !== null; ) {
              a = St;
              var l = a.sibling, i = a.return;
              if (yd(a), a === n) {
                St = null;
                break e;
              }
              if (l !== null) {
                l.return = i, St = l;
                break e;
              }
              St = i;
            }
      }
    }
    var j0 = { getCacheForType: function(e) {
      var t = Tt(st), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    }, cacheSignal: function() {
      return Tt(st).controller.signal;
    } }, C0 = typeof WeakMap == "function" ? WeakMap : Map, Me = 0, Ge = null, _e = null, Ee = 0, Be = 0, Jt = null, za = false, ri = false, Jo = false, ra = 0, tt = 0, ja = 0, bl = 0, Fo = 0, Ft = 0, oi = 0, du = null, Ht = null, Wo = false, qs = 0, wd = 0, Hs = 1 / 0, Ls = null, Ca = null, yt = 0, Ua = null, ci = null, oa = 0, $o = 0, Po = null, Rd = null, pu = 0, Io = null;
    function Wt() {
      return (Me & 2) !== 0 && Ee !== 0 ? Ee & -Ee : B.T !== null ? ic() : Qu();
    }
    function Nd() {
      if (Ft === 0)
        if ((Ee & 536870912) === 0 || Re) {
          var e = wl;
          wl <<= 1, (wl & 3932160) === 0 && (wl = 262144), Ft = e;
        } else
          Ft = 536870912;
      return e = kt.current, e !== null && (e.flags |= 32), Ft;
    }
    function Lt(e, t, n) {
      (e === Ge && (Be === 2 || Be === 9) || e.cancelPendingCommit !== null) && (fi(e, 0), Da(e, Ee, Ft, false)), Xn(e, n), ((Me & 2) === 0 || e !== Ge) && (e === Ge && ((Me & 2) === 0 && (bl |= n), tt === 4 && Da(e, Ee, Ft, false)), Hn(e));
    }
    function zd(e, t, n) {
      if ((Me & 6) !== 0)
        throw Error(o(327));
      var a = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Wa(e, t), l = a ? M0(e, t) : tc(e, t, true), i = a;
      do {
        if (l === 0) {
          ri && !a && Da(e, t, 0, false);
          break;
        } else {
          if (n = e.current.alternate, i && !U0(n)) {
            l = tc(e, t, false), i = false;
            continue;
          }
          if (l === 2) {
            if (i = t, e.errorRecoveryDisabledLanes & i)
              var c = 0;
            else
              c = e.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
            if (c !== 0) {
              t = c;
              e: {
                var y = e;
                l = du;
                var T = y.current.memoizedState.isDehydrated;
                if (T && (fi(y, c).flags |= 256), c = tc(y, c, false), c !== 2) {
                  if (Jo && !T) {
                    y.errorRecoveryDisabledLanes |= i, bl |= i, l = 4;
                    break e;
                  }
                  i = Ht, Ht = l, i !== null && (Ht === null ? Ht = i : Ht.push.apply(Ht, i));
                }
                l = c;
              }
              if (i = false, l !== 2)
                continue;
            }
          }
          if (l === 1) {
            fi(e, 0), Da(e, t, 0, true);
            break;
          }
          e: {
            switch (a = e, i = l, i) {
              case 0:
              case 1:
                throw Error(o(345));
              case 4:
                if ((t & 4194048) !== t)
                  break;
              case 6:
                Da(a, t, Ft, !za);
                break e;
              case 2:
                Ht = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(o(329));
            }
            if ((t & 62914560) === t && (l = qs + 300 - Nt(), 10 < l)) {
              if (Da(a, t, Ft, !za), Rl(a, 0, true) !== 0)
                break e;
              oa = t, a.timeoutHandle = sp(jd.bind(null, a, n, Ht, Ls, Wo, t, Ft, bl, oi, za, i, "Throttled", -0, 0), l);
              break e;
            }
            jd(a, n, Ht, Ls, Wo, t, Ft, bl, oi, za, i, null, -0, 0);
          }
        }
        break;
      } while (true);
      Hn(e);
    }
    function jd(e, t, n, a, l, i, c, y, T, D, Y, Z, M, L) {
      if (e.timeoutHandle = -1, Z = t.subtreeFlags, Z & 8192 || (Z & 16785408) === 16785408) {
        Z = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: true, waitingForViewTransition: false, unsuspend: It }, Td(t, i, Z);
        var ee = (i & 62914560) === i ? qs - Nt() : (i & 4194048) === i ? wd - Nt() : 0;
        if (ee = gy(Z, ee), ee !== null) {
          oa = i, e.cancelPendingCommit = ee(Ld.bind(null, e, t, i, n, a, l, c, y, T, Y, Z, null, M, L)), Da(e, i, c, !D);
          return;
        }
      }
      Ld(e, t, i, n, a, l, c, y, T);
    }
    function U0(e) {
      for (var t = e; ; ) {
        var n = t.tag;
        if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
          for (var a = 0; a < n.length; a++) {
            var l = n[a], i = l.getSnapshot;
            l = l.value;
            try {
              if (!Vt(i(), l))
                return false;
            } catch (c) {
              return false;
            }
          }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null)
          n.return = t, t = n;
        else {
          if (t === e)
            break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
              return true;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return true;
    }
    function Da(e, t, n, a) {
      t &= ~Fo, t &= ~bl, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
      for (var l = t; 0 < l; ) {
        var i = 31 - Ot(l), c = 1 << i;
        a[i] = -1, l &= ~c;
      }
      n !== 0 && Lu(e, n, t);
    }
    function Ys() {
      return (Me & 6) === 0 ? (mu(0), false) : true;
    }
    function ec() {
      if (_e !== null) {
        if (Be === 0)
          var e = _e.return;
        else
          e = _e, Pn = cl = null, yo(e), ti = null, $i = 0, e = _e;
        for (; e !== null; )
          rd(e.alternate, e), e = e.return;
        _e = null;
      }
    }
    function fi(e, t) {
      var n = e.timeoutHandle;
      n !== -1 && (e.timeoutHandle = -1, I0(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), oa = 0, ec(), Ge = e, _e = n = Wn(e.current, null), Ee = t, Be = 0, Jt = null, za = false, ri = Wa(e, t), Jo = false, oi = Ft = Fo = bl = ja = tt = 0, Ht = du = null, Wo = false, (t & 8) !== 0 && (t |= t & 32);
      var a = e.entangledLanes;
      if (a !== 0)
        for (e = e.entanglements, a &= t; 0 < a; ) {
          var l = 31 - Ot(a), i = 1 << l;
          t |= e[l], a &= ~i;
        }
      return ra = t, ss(), n;
    }
    function Cd(e, t) {
      ye = null, B.H = iu, t === ei || t === ms ? (t = Jf(), Be = 3) : t === ao ? (t = Jf(), Be = 4) : Be = t === Co ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Jt = t, _e === null && (tt = 1, Ns(e, sn(t, e.current)));
    }
    function Ud() {
      var e = kt.current;
      return e === null ? true : (Ee & 4194048) === Ee ? fn === null : (Ee & 62914560) === Ee || (Ee & 536870912) !== 0 ? e === fn : false;
    }
    function Dd() {
      var e = B.H;
      return B.H = iu, e === null ? iu : e;
    }
    function Md() {
      var e = B.A;
      return B.A = j0, e;
    }
    function Xs() {
      tt = 4, za || (Ee & 4194048) !== Ee && kt.current !== null || (ri = true), (ja & 134217727) === 0 && (bl & 134217727) === 0 || Ge === null || Da(Ge, Ee, Ft, false);
    }
    function tc(e, t, n) {
      var a = Me;
      Me |= 2;
      var l = Dd(), i = Md();
      (Ge !== e || Ee !== t) && (Ls = null, fi(e, t)), t = false;
      var c = tt;
      e:
        do
          try {
            if (Be !== 0 && _e !== null) {
              var y = _e, T = Jt;
              switch (Be) {
                case 8:
                  ec(), c = 6;
                  break e;
                case 3:
                case 2:
                case 9:
                case 6:
                  kt.current === null && (t = true);
                  var D = Be;
                  if (Be = 0, Jt = null, hi(e, y, T, D), n && ri) {
                    c = 0;
                    break e;
                  }
                  break;
                default:
                  D = Be, Be = 0, Jt = null, hi(e, y, T, D);
              }
            }
            D0(), c = tt;
            break;
          } catch (Y) {
            Cd(e, Y);
          }
        while (true);
      return t && e.shellSuspendCounter++, Pn = cl = null, Me = a, B.H = l, B.A = i, _e === null && (Ge = null, Ee = 0, ss()), c;
    }
    function D0() {
      for (; _e !== null; )
        Bd(_e);
    }
    function M0(e, t) {
      var n = Me;
      Me |= 2;
      var a = Dd(), l = Md();
      Ge !== e || Ee !== t ? (Ls = null, Hs = Nt() + 500, fi(e, t)) : ri = Wa(e, t);
      e:
        do
          try {
            if (Be !== 0 && _e !== null) {
              t = _e;
              var i = Jt;
              t:
                switch (Be) {
                  case 1:
                    Be = 0, Jt = null, hi(e, t, i, 1);
                    break;
                  case 2:
                  case 9:
                    if (kf(i)) {
                      Be = 0, Jt = null, qd(t);
                      break;
                    }
                    t = function() {
                      Be !== 2 && Be !== 9 || Ge !== e || (Be = 7), Hn(e);
                    }, i.then(t, t);
                    break e;
                  case 3:
                    Be = 7;
                    break e;
                  case 4:
                    Be = 5;
                    break e;
                  case 7:
                    kf(i) ? (Be = 0, Jt = null, qd(t)) : (Be = 0, Jt = null, hi(e, t, i, 7));
                    break;
                  case 5:
                    var c = null;
                    switch (_e.tag) {
                      case 26:
                        c = _e.memoizedState;
                      case 5:
                      case 27:
                        var y = _e;
                        if (c ? _p(c) : y.stateNode.complete) {
                          Be = 0, Jt = null;
                          var T = y.sibling;
                          if (T !== null)
                            _e = T;
                          else {
                            var D = y.return;
                            D !== null ? (_e = D, Qs(D)) : _e = null;
                          }
                          break t;
                        }
                    }
                    Be = 0, Jt = null, hi(e, t, i, 5);
                    break;
                  case 6:
                    Be = 0, Jt = null, hi(e, t, i, 6);
                    break;
                  case 8:
                    ec(), tt = 6;
                    break e;
                  default:
                    throw Error(o(462));
                }
            }
            B0();
            break;
          } catch (Y) {
            Cd(e, Y);
          }
        while (true);
      return Pn = cl = null, B.H = a, B.A = l, Me = n, _e !== null ? 0 : (Ge = null, Ee = 0, ss(), tt);
    }
    function B0() {
      for (; _e !== null && !Ar(); )
        Bd(_e);
    }
    function Bd(e) {
      var t = ud(e.alternate, e, ra);
      e.memoizedProps = e.pendingProps, t === null ? Qs(e) : _e = t;
    }
    function qd(e) {
      var t = e, n = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = ed(n, t, t.pendingProps, t.type, void 0, Ee);
          break;
        case 11:
          t = ed(n, t, t.pendingProps, t.type.render, t.ref, Ee);
          break;
        case 5:
          yo(t);
        default:
          rd(n, t), t = _e = Mf(t, ra), t = ud(n, t, ra);
      }
      e.memoizedProps = e.pendingProps, t === null ? Qs(e) : _e = t;
    }
    function hi(e, t, n, a) {
      Pn = cl = null, yo(t), ti = null, $i = 0;
      var l = t.return;
      try {
        if (E0(e, l, t, n, Ee)) {
          tt = 1, Ns(e, sn(n, e.current)), _e = null;
          return;
        }
      } catch (i) {
        if (l !== null)
          throw _e = l, i;
        tt = 1, Ns(e, sn(n, e.current)), _e = null;
        return;
      }
      t.flags & 32768 ? (Re || a === 1 ? e = true : ri || (Ee & 536870912) !== 0 ? e = false : (za = e = true, (a === 2 || a === 9 || a === 3 || a === 6) && (a = kt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Hd(t, e)) : Qs(t);
    }
    function Qs(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          Hd(t, za);
          return;
        }
        e = t.return;
        var n = w0(t.alternate, t, ra);
        if (n !== null) {
          _e = n;
          return;
        }
        if (t = t.sibling, t !== null) {
          _e = t;
          return;
        }
        _e = t = e;
      } while (t !== null);
      tt === 0 && (tt = 5);
    }
    function Hd(e, t) {
      do {
        var n = R0(e.alternate, e);
        if (n !== null) {
          n.flags &= 32767, _e = n;
          return;
        }
        if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
          _e = e;
          return;
        }
        _e = e = n;
      } while (e !== null);
      tt = 6, _e = null;
    }
    function Ld(e, t, n, a, l, i, c, y, T) {
      e.cancelPendingCommit = null;
      do
        Gs();
      while (yt !== 0);
      if ((Me & 6) !== 0)
        throw Error(o(327));
      if (t !== null) {
        if (t === e.current)
          throw Error(o(177));
        if (i = t.lanes | t.childLanes, i |= Qr, Nr(e, n, i, c, y, T), e === Ge && (_e = Ge = null, Ee = 0), ci = t, Ua = e, oa = n, $o = i, Po = l, Rd = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Y0(ka, function() {
          return Vd(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
          a = B.T, B.T = null, l = Q.p, Q.p = 2, c = Me, Me |= 4;
          try {
            N0(e, t, n);
          } finally {
            Me = c, Q.p = l, B.T = a;
          }
        }
        yt = 1, Yd(), Xd(), Qd();
      }
    }
    function Yd() {
      if (yt === 1) {
        yt = 0;
        var e = Ua, t = ci, n = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || n) {
          n = B.T, B.T = null;
          var a = Q.p;
          Q.p = 2;
          var l = Me;
          Me |= 4;
          try {
            Sd(t, e);
            var i = dc, c = Of(e.containerInfo), y = i.focusedElem, T = i.selectionRange;
            if (c !== y && y && y.ownerDocument && Af(y.ownerDocument.documentElement, y)) {
              if (T !== null && qr(y)) {
                var D = T.start, Y = T.end;
                if (Y === void 0 && (Y = D), "selectionStart" in y)
                  y.selectionStart = D, y.selectionEnd = Math.min(Y, y.value.length);
                else {
                  var Z = y.ownerDocument || document, M = Z && Z.defaultView || window;
                  if (M.getSelection) {
                    var L = M.getSelection(), ee = y.textContent.length, ie = Math.min(T.start, ee), Xe = T.end === void 0 ? ie : Math.min(T.end, ee);
                    !L.extend && ie > Xe && (c = Xe, Xe = ie, ie = c);
                    var N = Ef(y, ie), O = Ef(y, Xe);
                    if (N && O && (L.rangeCount !== 1 || L.anchorNode !== N.node || L.anchorOffset !== N.offset || L.focusNode !== O.node || L.focusOffset !== O.offset)) {
                      var U = Z.createRange();
                      U.setStart(N.node, N.offset), L.removeAllRanges(), ie > Xe ? (L.addRange(U), L.extend(O.node, O.offset)) : (U.setEnd(O.node, O.offset), L.addRange(U));
                    }
                  }
                }
              }
              for (Z = [], L = y; L = L.parentNode; )
                L.nodeType === 1 && Z.push({ element: L, left: L.scrollLeft, top: L.scrollTop });
              for (typeof y.focus == "function" && y.focus(), y = 0; y < Z.length; y++) {
                var G = Z[y];
                G.element.scrollLeft = G.left, G.element.scrollTop = G.top;
              }
            }
            tr = !!hc, dc = hc = null;
          } finally {
            Me = l, Q.p = a, B.T = n;
          }
        }
        e.current = t, yt = 2;
      }
    }
    function Xd() {
      if (yt === 2) {
        yt = 0;
        var e = Ua, t = ci, n = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || n) {
          n = B.T, B.T = null;
          var a = Q.p;
          Q.p = 2;
          var l = Me;
          Me |= 4;
          try {
            md(e, t.alternate, t);
          } finally {
            Me = l, Q.p = a, B.T = n;
          }
        }
        yt = 3;
      }
    }
    function Qd() {
      if (yt === 4 || yt === 3) {
        yt = 0, Du();
        var e = Ua, t = ci, n = oa, a = Rd;
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? yt = 5 : (yt = 0, ci = Ua = null, Gd(e, e.pendingLanes));
        var l = e.pendingLanes;
        if (l === 0 && (Ca = null), zi(n), t = t.stateNode, zt && typeof zt.onCommitFiberRoot == "function")
          try {
            zt.onCommitFiberRoot(Ka, t, void 0, (t.current.flags & 128) === 128);
          } catch (T) {
          }
        if (a !== null) {
          t = B.T, l = Q.p, Q.p = 2, B.T = null;
          try {
            for (var i = e.onRecoverableError, c = 0; c < a.length; c++) {
              var y = a[c];
              i(y.value, { componentStack: y.stack });
            }
          } finally {
            B.T = t, Q.p = l;
          }
        }
        (oa & 3) !== 0 && Gs(), Hn(e), l = e.pendingLanes, (n & 261930) !== 0 && (l & 42) !== 0 ? e === Io ? pu++ : (pu = 0, Io = e) : pu = 0, mu(0);
      }
    }
    function Gd(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Fi(t)));
    }
    function Gs() {
      return Yd(), Xd(), Qd(), Vd();
    }
    function Vd() {
      if (yt !== 5)
        return false;
      var e = Ua, t = $o;
      $o = 0;
      var n = zi(oa), a = B.T, l = Q.p;
      try {
        Q.p = 32 > n ? 32 : n, B.T = null, n = Po, Po = null;
        var i = Ua, c = oa;
        if (yt = 0, ci = Ua = null, oa = 0, (Me & 6) !== 0)
          throw Error(o(331));
        var y = Me;
        if (Me |= 4, Ad(i.current), _d(i, i.current, c, n), Me = y, mu(0, false), zt && typeof zt.onPostCommitFiberRoot == "function")
          try {
            zt.onPostCommitFiberRoot(Ka, i);
          } catch (T) {
          }
        return true;
      } finally {
        Q.p = l, B.T = a, Gd(e, t);
      }
    }
    function Zd(e, t, n) {
      t = sn(n, t), t = jo(e.stateNode, t, 2), e = Oa(e, t, 2), e !== null && (Xn(e, 2), Hn(e));
    }
    function qe(e, t, n) {
      if (e.tag === 3)
        Zd(e, e, n);
      else
        for (; t !== null; ) {
          if (t.tag === 3) {
            Zd(t, e, n);
            break;
          } else if (t.tag === 1) {
            var a = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Ca === null || !Ca.has(a))) {
              e = sn(n, e), n = kh(2), a = Oa(t, n, 2), a !== null && (Kh(n, a, t, e), Xn(a, 2), Hn(a));
              break;
            }
          }
          t = t.return;
        }
    }
    function nc(e, t, n) {
      var a = e.pingCache;
      if (a === null) {
        a = e.pingCache = new C0();
        var l = /* @__PURE__ */ new Set();
        a.set(t, l);
      } else
        l = a.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), a.set(t, l));
      l.has(n) || (Jo = true, l.add(n), e = q0.bind(null, e, t, n), t.then(e, e));
    }
    function q0(e, t, n) {
      var a = e.pingCache;
      a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Ge === e && (Ee & n) === n && (tt === 4 || tt === 3 && (Ee & 62914560) === Ee && 300 > Nt() - qs ? (Me & 2) === 0 && fi(e, 0) : Fo |= n, oi === Ee && (oi = 0)), Hn(e);
    }
    function kd(e, t) {
      t === 0 && (t = Hu()), e = sl(e, t), e !== null && (Xn(e, t), Hn(e));
    }
    function H0(e) {
      var t = e.memoizedState, n = 0;
      t !== null && (n = t.retryLane), kd(e, n);
    }
    function L0(e, t) {
      var n = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var a = e.stateNode, l = e.memoizedState;
          l !== null && (n = l.retryLane);
          break;
        case 19:
          a = e.stateNode;
          break;
        case 22:
          a = e.stateNode._retryCache;
          break;
        default:
          throw Error(o(314));
      }
      a !== null && a.delete(t), kd(e, n);
    }
    function Y0(e, t) {
      return Oi(e, t);
    }
    var Vs = null, di = null, ac = false, Zs = false, lc = false, Ma = 0;
    function Hn(e) {
      e !== di && e.next === null && (di === null ? Vs = di = e : di = di.next = e), Zs = true, ac || (ac = true, Q0());
    }
    function mu(e, t) {
      if (!lc && Zs) {
        lc = true;
        do
          for (var n = false, a = Vs; a !== null; ) {
            if (e !== 0) {
              var l = a.pendingLanes;
              if (l === 0)
                var i = 0;
              else {
                var c = a.suspendedLanes, y = a.pingedLanes;
                i = (1 << 31 - Ot(42 | e) + 1) - 1, i &= l & ~(c & ~y), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
              }
              i !== 0 && (n = true, Wd(a, i));
            } else
              i = Ee, i = Rl(a, a === Ge ? i : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (i & 3) === 0 || Wa(a, i) || (n = true, Wd(a, i));
            a = a.next;
          }
        while (n);
        lc = false;
      }
    }
    function X0() {
      Kd();
    }
    function Kd() {
      Zs = ac = false;
      var e = 0;
      Ma !== 0 && P0() && (e = Ma);
      for (var t = Nt(), n = null, a = Vs; a !== null; ) {
        var l = a.next, i = Jd(a, t);
        i === 0 ? (a.next = null, n === null ? Vs = l : n.next = l, l === null && (di = n)) : (n = a, (e !== 0 || (i & 3) !== 0) && (Zs = true)), a = l;
      }
      yt !== 0 && yt !== 5 || mu(e), Ma !== 0 && (Ma = 0);
    }
    function Jd(e, t) {
      for (var n = e.suspendedLanes, a = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
        var c = 31 - Ot(i), y = 1 << c, T = l[c];
        T === -1 ? ((y & n) === 0 || (y & a) !== 0) && (l[c] = Rr(y, t)) : T <= t && (e.expiredLanes |= y), i &= ~y;
      }
      if (t = Ge, n = Ee, n = Rl(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a = e.callbackNode, n === 0 || e === t && (Be === 2 || Be === 9) || e.cancelPendingCommit !== null)
        return a !== null && a !== null && wi(a), e.callbackNode = null, e.callbackPriority = 0;
      if ((n & 3) === 0 || Wa(e, n)) {
        if (t = n & -n, t === e.callbackPriority)
          return t;
        switch (a !== null && wi(a), zi(n)) {
          case 2:
          case 8:
            n = Ri;
            break;
          case 32:
            n = ka;
            break;
          case 268435456:
            n = Ol;
            break;
          default:
            n = ka;
        }
        return a = Fd.bind(null, e), n = Oi(n, a), e.callbackPriority = t, e.callbackNode = n, t;
      }
      return a !== null && a !== null && wi(a), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function Fd(e, t) {
      if (yt !== 0 && yt !== 5)
        return e.callbackNode = null, e.callbackPriority = 0, null;
      var n = e.callbackNode;
      if (Gs() && e.callbackNode !== n)
        return null;
      var a = Ee;
      return a = Rl(e, e === Ge ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a === 0 ? null : (zd(e, a, t), Jd(e, Nt()), e.callbackNode != null && e.callbackNode === n ? Fd.bind(null, e) : null);
    }
    function Wd(e, t) {
      if (Gs())
        return null;
      zd(e, t, true);
    }
    function Q0() {
      ey(function() {
        (Me & 6) !== 0 ? Oi(fe, X0) : Kd();
      });
    }
    function ic() {
      if (Ma === 0) {
        var e = Pl;
        e === 0 && (e = Ja, Ja <<= 1, (Ja & 261888) === 0 && (Ja = 256)), Ma = e;
      }
      return Ma;
    }
    function $d(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Cl("" + e);
    }
    function Pd(e, t) {
      var n = t.ownerDocument.createElement("input");
      return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
    }
    function G0(e, t, n, a, l) {
      if (t === "submit" && n && n.stateNode === l) {
        var i = $d((l[gt] || null).action), c = a.submitter;
        c && (t = (t = c[gt] || null) ? $d(t.formAction) : c.getAttribute("formAction"), t !== null && (i = t, c = null));
        var y = new nl("action", "action", null, a, l);
        e.push({ event: y, listeners: [{ instance: null, listener: function() {
          if (a.defaultPrevented) {
            if (Ma !== 0) {
              var T = c ? Pd(l, c) : new FormData(l);
              Ao(n, { pending: true, data: T, method: l.method, action: i }, null, T);
            }
          } else
            typeof i == "function" && (y.preventDefault(), T = c ? Pd(l, c) : new FormData(l), Ao(n, { pending: true, data: T, method: l.method, action: i }, i, T));
        }, currentTarget: l }] });
      }
    }
    for (var uc = 0; uc < Xr.length; uc++) {
      var sc = Xr[uc], V0 = sc.toLowerCase(), Z0 = sc[0].toUpperCase() + sc.slice(1);
      gn(V0, "on" + Z0);
    }
    gn(Nf, "onAnimationEnd"), gn(zf, "onAnimationIteration"), gn(jf, "onAnimationStart"), gn("dblclick", "onDoubleClick"), gn("focusin", "onFocus"), gn("focusout", "onBlur"), gn(s0, "onTransitionRun"), gn(r0, "onTransitionStart"), gn(o0, "onTransitionCancel"), gn(Cf, "onTransitionEnd"), Gt("onMouseEnter", ["mouseout", "mouseover"]), Gt("onMouseLeave", ["mouseout", "mouseover"]), Gt("onPointerEnter", ["pointerout", "pointerover"]), Gt("onPointerLeave", ["pointerout", "pointerover"]), jn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), jn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), jn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), jn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), jn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), jn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var yu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), k0 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yu));
    function Id(e, t) {
      t = (t & 4) !== 0;
      for (var n = 0; n < e.length; n++) {
        var a = e[n], l = a.event;
        a = a.listeners;
        e: {
          var i = void 0;
          if (t)
            for (var c = a.length - 1; 0 <= c; c--) {
              var y = a[c], T = y.instance, D = y.currentTarget;
              if (y = y.listener, T !== i && l.isPropagationStopped())
                break e;
              i = y, l.currentTarget = D;
              try {
                i(l);
              } catch (Y) {
                us(Y);
              }
              l.currentTarget = null, i = T;
            }
          else
            for (c = 0; c < a.length; c++) {
              if (y = a[c], T = y.instance, D = y.currentTarget, y = y.listener, T !== i && l.isPropagationStopped())
                break e;
              i = y, l.currentTarget = D;
              try {
                i(l);
              } catch (Y) {
                us(Y);
              }
              l.currentTarget = null, i = T;
            }
        }
      }
    }
    function Te(e, t) {
      var n = t[ji];
      n === void 0 && (n = t[ji] = /* @__PURE__ */ new Set());
      var a = e + "__bubble";
      n.has(a) || (ep(t, e, 2, false), n.add(a));
    }
    function rc(e, t, n) {
      var a = 0;
      t && (a |= 4), ep(n, e, a, t);
    }
    var ks = "_reactListening" + Math.random().toString(36).slice(2);
    function oc(e) {
      if (!e[ks]) {
        e[ks] = true, Ut.forEach(function(n) {
          n !== "selectionchange" && (k0.has(n) || rc(n, false, e), rc(n, true, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[ks] || (t[ks] = true, rc("selectionchange", false, t));
      }
    }
    function ep(e, t, n, a) {
      switch (Np(t)) {
        case 2:
          var l = Sy;
          break;
        case 8:
          l = xy;
          break;
        default:
          l = Ec;
      }
      n = l.bind(null, t, n, e), l = void 0, !Yi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = true), a ? l !== void 0 ? e.addEventListener(t, n, { capture: true, passive: l }) : e.addEventListener(t, n, true) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, false);
    }
    function cc(e, t, n, a, l) {
      var i = a;
      if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
        e:
          for (; ; ) {
            if (a === null)
              return;
            var c = a.tag;
            if (c === 3 || c === 4) {
              var y = a.stateNode.containerInfo;
              if (y === l)
                break;
              if (c === 4)
                for (c = a.return; c !== null; ) {
                  var T = c.tag;
                  if ((T === 3 || T === 4) && c.stateNode.containerInfo === l)
                    return;
                  c = c.return;
                }
              for (; y !== null; ) {
                if (c = pa(y), c === null)
                  return;
                if (T = c.tag, T === 5 || T === 6 || T === 26 || T === 27) {
                  a = i = c;
                  continue e;
                }
                y = y.parentNode;
              }
            }
            a = a.return;
          }
      Li(function() {
        var D = i, Y = Ul(n), Z = [];
        e: {
          var M = Uf.get(e);
          if (M !== void 0) {
            var L = nl, ee = e;
            switch (e) {
              case "keypress":
                if (ql(n) === 0)
                  break e;
              case "keydown":
              case "keyup":
                L = es;
                break;
              case "focusin":
                ee = "focus", L = F;
                break;
              case "focusout":
                ee = "blur", L = F;
                break;
              case "beforeblur":
              case "afterblur":
                L = F;
                break;
              case "click":
                if (n.button === 2)
                  break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                L = C;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                L = K;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                L = ts;
                break;
              case Nf:
              case zf:
              case jf:
                L = re;
                break;
              case Cf:
                L = Xl;
                break;
              case "scroll":
              case "scrollend":
                L = f;
                break;
              case "wheel":
                L = Jn;
                break;
              case "copy":
              case "cut":
              case "paste":
                L = pe;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                L = Ll;
                break;
              case "toggle":
              case "beforetoggle":
                L = an;
            }
            var ie = (t & 4) !== 0, Xe = !ie && (e === "scroll" || e === "scrollend"), N = ie ? M !== null ? M + "Capture" : null : M;
            ie = [];
            for (var O = D, U; O !== null; ) {
              var G = O;
              if (U = G.stateNode, G = G.tag, G !== 5 && G !== 26 && G !== 27 || U === null || N === null || (G = Cn(O, N), G != null && ie.push(gu(O, G, U))), Xe)
                break;
              O = O.return;
            }
            0 < ie.length && (M = new L(M, ee, null, n, Y), Z.push({ event: M, listeners: ie }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (M = e === "mouseover" || e === "pointerover", L = e === "mouseout" || e === "pointerout", M && n !== tl && (ee = n.relatedTarget || n.fromElement) && (pa(ee) || ee[Rn]))
              break e;
            if ((L || M) && (M = Y.window === Y ? Y : (M = Y.ownerDocument) ? M.defaultView || M.parentWindow : window, L ? (ee = n.relatedTarget || n.toElement, L = D, ee = ee ? pa(ee) : null, ee !== null && (Xe = b(ee), ie = ee.tag, ee !== Xe || ie !== 5 && ie !== 27 && ie !== 6) && (ee = null)) : (L = null, ee = D), L !== ee)) {
              if (ie = C, G = "onMouseLeave", N = "onMouseEnter", O = "mouse", (e === "pointerout" || e === "pointerover") && (ie = Ll, G = "onPointerLeave", N = "onPointerEnter", O = "pointer"), Xe = L == null ? M : Pa(L), U = ee == null ? M : Pa(ee), M = new ie(G, O + "leave", L, n, Y), M.target = Xe, M.relatedTarget = U, G = null, pa(Y) === D && (ie = new ie(N, O + "enter", ee, n, Y), ie.target = U, ie.relatedTarget = Xe, G = ie), Xe = G, L && ee)
                t: {
                  for (ie = K0, N = L, O = ee, U = 0, G = N; G; G = ie(G))
                    U++;
                  G = 0;
                  for (var le = O; le; le = ie(le))
                    G++;
                  for (; 0 < U - G; )
                    N = ie(N), U--;
                  for (; 0 < G - U; )
                    O = ie(O), G--;
                  for (; U--; ) {
                    if (N === O || O !== null && N === O.alternate) {
                      ie = N;
                      break t;
                    }
                    N = ie(N), O = ie(O);
                  }
                  ie = null;
                }
              else
                ie = null;
              L !== null && tp(Z, M, L, ie, false), ee !== null && Xe !== null && tp(Z, Xe, ee, ie, true);
            }
          }
          e: {
            if (M = D ? Pa(D) : window, L = M.nodeName && M.nodeName.toLowerCase(), L === "select" || L === "input" && M.type === "file")
              var Ue = vf;
            else if (yf(M))
              if (bf)
                Ue = l0;
              else {
                Ue = n0;
                var ae = t0;
              }
            else
              L = M.nodeName, !L || L.toLowerCase() !== "input" || M.type !== "checkbox" && M.type !== "radio" ? D && jl(D.elementType) && (Ue = vf) : Ue = a0;
            if (Ue && (Ue = Ue(e, D))) {
              gf(Z, Ue, n, Y);
              break e;
            }
            ae && ae(e, M, D), e === "focusout" && D && M.type === "number" && D.memoizedProps.value != null && Bi(M, "number", M.value);
          }
          switch (ae = D ? Pa(D) : window, e) {
            case "focusin":
              (yf(ae) || ae.contentEditable === "true") && (Vl = ae, Hr = D, ki = null);
              break;
            case "focusout":
              ki = Hr = Vl = null;
              break;
            case "mousedown":
              Lr = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Lr = false, wf(Z, n, Y);
              break;
            case "selectionchange":
              if (u0)
                break;
            case "keydown":
            case "keyup":
              wf(Z, n, Y);
          }
          var be;
          if (ln)
            e: {
              switch (e) {
                case "compositionstart":
                  var Ae = "onCompositionStart";
                  break e;
                case "compositionend":
                  Ae = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  Ae = "onCompositionUpdate";
                  break e;
              }
              Ae = void 0;
            }
          else
            Gl ? ll(e, n) && (Ae = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Ae = "onCompositionStart");
          Ae && (yn && n.locale !== "ko" && (Gl || Ae !== "onCompositionStart" ? Ae === "onCompositionEnd" && Gl && (be = Bl()) : (mt = Y, va = "value" in mt ? mt.value : mt.textContent, Gl = true)), ae = Ks(D, Ae), 0 < ae.length && (Ae = new I(Ae, e, null, n, Y), Z.push({ event: Ae, listeners: ae }), be ? Ae.data = be : (be = Qi(n), be !== null && (Ae.data = be)))), (be = Dr ? $m(e, n) : Pm(e, n)) && (Ae = Ks(D, "onBeforeInput"), 0 < Ae.length && (ae = new I("onBeforeInput", "beforeinput", null, n, Y), Z.push({ event: ae, listeners: Ae }), ae.data = be)), G0(Z, e, D, n, Y);
        }
        Id(Z, t);
      });
    }
    function gu(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function Ks(e, t) {
      for (var n = t + "Capture", a = []; e !== null; ) {
        var l = e, i = l.stateNode;
        if (l = l.tag, l !== 5 && l !== 26 && l !== 27 || i === null || (l = Cn(e, n), l != null && a.unshift(gu(e, l, i)), l = Cn(e, t), l != null && a.push(gu(e, l, i))), e.tag === 3)
          return a;
        e = e.return;
      }
      return [];
    }
    function K0(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function tp(e, t, n, a, l) {
      for (var i = t._reactName, c = []; n !== null && n !== a; ) {
        var y = n, T = y.alternate, D = y.stateNode;
        if (y = y.tag, T !== null && T === a)
          break;
        y !== 5 && y !== 26 && y !== 27 || D === null || (T = D, l ? (D = Cn(n, i), D != null && c.unshift(gu(n, D, T))) : l || (D = Cn(n, i), D != null && c.push(gu(n, D, T)))), n = n.return;
      }
      c.length !== 0 && e.push({ event: t, listeners: c });
    }
    var J0 = /\r\n?/g, F0 = /\u0000|\uFFFD/g;
    function np(e) {
      return (typeof e == "string" ? e : "" + e).replace(J0, `
`).replace(F0, "");
    }
    function ap(e, t) {
      return t = np(t), np(e) === t;
    }
    function Ye(e, t, n, a, l, i) {
      switch (n) {
        case "children":
          typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Vn(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Vn(e, "" + a);
          break;
        case "className":
          Ia(e, "class", a);
          break;
        case "tabIndex":
          Ia(e, "tabindex", a);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          Ia(e, n, a);
          break;
        case "style":
          Hi(e, a, i);
          break;
        case "data":
          if (t !== "object") {
            Ia(e, "data", a);
            break;
          }
        case "src":
        case "href":
          if (a === "" && (t !== "a" || n !== "href")) {
            e.removeAttribute(n);
            break;
          }
          if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
            e.removeAttribute(n);
            break;
          }
          a = Cl("" + a), e.setAttribute(n, a);
          break;
        case "action":
        case "formAction":
          if (typeof a == "function") {
            e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
            break;
          } else
            typeof i == "function" && (n === "formAction" ? (t !== "input" && Ye(e, t, "name", l.name, l, null), Ye(e, t, "formEncType", l.formEncType, l, null), Ye(e, t, "formMethod", l.formMethod, l, null), Ye(e, t, "formTarget", l.formTarget, l, null)) : (Ye(e, t, "encType", l.encType, l, null), Ye(e, t, "method", l.method, l, null), Ye(e, t, "target", l.target, l, null)));
          if (a == null || typeof a == "symbol" || typeof a == "boolean") {
            e.removeAttribute(n);
            break;
          }
          a = Cl("" + a), e.setAttribute(n, a);
          break;
        case "onClick":
          a != null && (e.onclick = It);
          break;
        case "onScroll":
          a != null && Te("scroll", e);
          break;
        case "onScrollEnd":
          a != null && Te("scrollend", e);
          break;
        case "dangerouslySetInnerHTML":
          if (a != null) {
            if (typeof a != "object" || !("__html" in a))
              throw Error(o(61));
            if (n = a.__html, n != null) {
              if (l.children != null)
                throw Error(o(60));
              e.innerHTML = n;
            }
          }
          break;
        case "multiple":
          e.multiple = a && typeof a != "function" && typeof a != "symbol";
          break;
        case "muted":
          e.muted = a && typeof a != "function" && typeof a != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
            e.removeAttribute("xlink:href");
            break;
          }
          n = Cl("" + a), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, "" + a) : e.removeAttribute(n);
          break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          a && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
          break;
        case "capture":
        case "download":
          a === true ? e.setAttribute(n, "") : a !== false && a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, a) : e.removeAttribute(n);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? e.setAttribute(n, a) : e.removeAttribute(n);
          break;
        case "rowSpan":
        case "start":
          a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? e.removeAttribute(n) : e.setAttribute(n, a);
          break;
        case "popover":
          Te("beforetoggle", e), Te("toggle", e), Qn(e, "popover", a);
          break;
        case "xlinkActuate":
          Pt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
          break;
        case "xlinkArcrole":
          Pt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
          break;
        case "xlinkRole":
          Pt(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
          break;
        case "xlinkShow":
          Pt(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
          break;
        case "xlinkTitle":
          Pt(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
          break;
        case "xlinkType":
          Pt(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
          break;
        case "xmlBase":
          Pt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
          break;
        case "xmlLang":
          Pt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
          break;
        case "xmlSpace":
          Pt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
          break;
        case "is":
          Qn(e, "is", a);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Pu.get(n) || n, Qn(e, n, a));
      }
    }
    function fc(e, t, n, a, l, i) {
      switch (n) {
        case "style":
          Hi(e, a, i);
          break;
        case "dangerouslySetInnerHTML":
          if (a != null) {
            if (typeof a != "object" || !("__html" in a))
              throw Error(o(61));
            if (n = a.__html, n != null) {
              if (l.children != null)
                throw Error(o(60));
              e.innerHTML = n;
            }
          }
          break;
        case "children":
          typeof a == "string" ? Vn(e, a) : (typeof a == "number" || typeof a == "bigint") && Vn(e, "" + a);
          break;
        case "onScroll":
          a != null && Te("scroll", e);
          break;
        case "onScrollEnd":
          a != null && Te("scrollend", e);
          break;
        case "onClick":
          a != null && (e.onclick = It);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (!Nl.hasOwnProperty(n))
            e: {
              if (n[0] === "o" && n[1] === "n" && (l = n.endsWith("Capture"), t = n.slice(2, l ? n.length - 7 : void 0), i = e[gt] || null, i = i != null ? i[n] : null, typeof i == "function" && e.removeEventListener(t, i, l), typeof a == "function")) {
                typeof i != "function" && i !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, a, l);
                break e;
              }
              n in e ? e[n] = a : a === true ? e.setAttribute(n, "") : Qn(e, n, a);
            }
      }
    }
    function At(e, t, n) {
      switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          Te("error", e), Te("load", e);
          var a = false, l = false, i;
          for (i in n)
            if (n.hasOwnProperty(i)) {
              var c = n[i];
              if (c != null)
                switch (i) {
                  case "src":
                    a = true;
                    break;
                  case "srcSet":
                    l = true;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(o(137, t));
                  default:
                    Ye(e, t, i, c, n, null);
                }
            }
          l && Ye(e, t, "srcSet", n.srcSet, n, null), a && Ye(e, t, "src", n.src, n, null);
          return;
        case "input":
          Te("invalid", e);
          var y = i = c = l = null, T = null, D = null;
          for (a in n)
            if (n.hasOwnProperty(a)) {
              var Y = n[a];
              if (Y != null)
                switch (a) {
                  case "name":
                    l = Y;
                    break;
                  case "type":
                    c = Y;
                    break;
                  case "checked":
                    T = Y;
                    break;
                  case "defaultChecked":
                    D = Y;
                    break;
                  case "value":
                    i = Y;
                    break;
                  case "defaultValue":
                    y = Y;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (Y != null)
                      throw Error(o(137, t));
                    break;
                  default:
                    Ye(e, t, a, Y, n, null);
                }
            }
          Fu(e, i, y, T, D, c, l, false);
          return;
        case "select":
          Te("invalid", e), a = c = i = null;
          for (l in n)
            if (n.hasOwnProperty(l) && (y = n[l], y != null))
              switch (l) {
                case "value":
                  i = y;
                  break;
                case "defaultValue":
                  c = y;
                  break;
                case "multiple":
                  a = y;
                default:
                  Ye(e, t, l, y, n, null);
              }
          t = i, n = c, e.multiple = !!a, t != null ? ya(e, !!a, t, false) : n != null && ya(e, !!a, n, true);
          return;
        case "textarea":
          Te("invalid", e), i = l = a = null;
          for (c in n)
            if (n.hasOwnProperty(c) && (y = n[c], y != null))
              switch (c) {
                case "value":
                  a = y;
                  break;
                case "defaultValue":
                  l = y;
                  break;
                case "children":
                  i = y;
                  break;
                case "dangerouslySetInnerHTML":
                  if (y != null)
                    throw Error(o(91));
                  break;
                default:
                  Ye(e, t, c, y, n, null);
              }
          qi(e, a, l, i);
          return;
        case "option":
          for (T in n)
            if (n.hasOwnProperty(T) && (a = n[T], a != null))
              switch (T) {
                case "selected":
                  e.selected = a && typeof a != "function" && typeof a != "symbol";
                  break;
                default:
                  Ye(e, t, T, a, n, null);
              }
          return;
        case "dialog":
          Te("beforetoggle", e), Te("toggle", e), Te("cancel", e), Te("close", e);
          break;
        case "iframe":
        case "object":
          Te("load", e);
          break;
        case "video":
        case "audio":
          for (a = 0; a < yu.length; a++)
            Te(yu[a], e);
          break;
        case "image":
          Te("error", e), Te("load", e);
          break;
        case "details":
          Te("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          Te("error", e), Te("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (D in n)
            if (n.hasOwnProperty(D) && (a = n[D], a != null))
              switch (D) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  Ye(e, t, D, a, n, null);
              }
          return;
        default:
          if (jl(t)) {
            for (Y in n)
              n.hasOwnProperty(Y) && (a = n[Y], a !== void 0 && fc(e, t, Y, a, n, void 0));
            return;
          }
      }
      for (y in n)
        n.hasOwnProperty(y) && (a = n[y], a != null && Ye(e, t, y, a, n, null));
    }
    function W0(e, t, n, a) {
      switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var l = null, i = null, c = null, y = null, T = null, D = null, Y = null;
          for (L in n) {
            var Z = n[L];
            if (n.hasOwnProperty(L) && Z != null)
              switch (L) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  T = Z;
                default:
                  a.hasOwnProperty(L) || Ye(e, t, L, null, a, Z);
              }
          }
          for (var M in a) {
            var L = a[M];
            if (Z = n[M], a.hasOwnProperty(M) && (L != null || Z != null))
              switch (M) {
                case "type":
                  i = L;
                  break;
                case "name":
                  l = L;
                  break;
                case "checked":
                  D = L;
                  break;
                case "defaultChecked":
                  Y = L;
                  break;
                case "value":
                  c = L;
                  break;
                case "defaultValue":
                  y = L;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (L != null)
                    throw Error(o(137, t));
                  break;
                default:
                  L !== Z && Ye(e, t, M, L, a, Z);
              }
          }
          Mi(e, c, y, T, D, Y, i, l);
          return;
        case "select":
          L = c = y = M = null;
          for (i in n)
            if (T = n[i], n.hasOwnProperty(i) && T != null)
              switch (i) {
                case "value":
                  break;
                case "multiple":
                  L = T;
                default:
                  a.hasOwnProperty(i) || Ye(e, t, i, null, a, T);
              }
          for (l in a)
            if (i = a[l], T = n[l], a.hasOwnProperty(l) && (i != null || T != null))
              switch (l) {
                case "value":
                  M = i;
                  break;
                case "defaultValue":
                  y = i;
                  break;
                case "multiple":
                  c = i;
                default:
                  i !== T && Ye(e, t, l, i, a, T);
              }
          t = y, n = c, a = L, M != null ? ya(e, !!n, M, false) : !!a != !!n && (t != null ? ya(e, !!n, t, true) : ya(e, !!n, n ? [] : "", false));
          return;
        case "textarea":
          L = M = null;
          for (y in n)
            if (l = n[y], n.hasOwnProperty(y) && l != null && !a.hasOwnProperty(y))
              switch (y) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  Ye(e, t, y, null, a, l);
              }
          for (c in a)
            if (l = a[c], i = n[c], a.hasOwnProperty(c) && (l != null || i != null))
              switch (c) {
                case "value":
                  M = l;
                  break;
                case "defaultValue":
                  L = l;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (l != null)
                    throw Error(o(91));
                  break;
                default:
                  l !== i && Ye(e, t, c, l, a, i);
              }
          Wu(e, M, L);
          return;
        case "option":
          for (var ee in n)
            if (M = n[ee], n.hasOwnProperty(ee) && M != null && !a.hasOwnProperty(ee))
              switch (ee) {
                case "selected":
                  e.selected = false;
                  break;
                default:
                  Ye(e, t, ee, null, a, M);
              }
          for (T in a)
            if (M = a[T], L = n[T], a.hasOwnProperty(T) && M !== L && (M != null || L != null))
              switch (T) {
                case "selected":
                  e.selected = M && typeof M != "function" && typeof M != "symbol";
                  break;
                default:
                  Ye(e, t, T, M, a, L);
              }
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var ie in n)
            M = n[ie], n.hasOwnProperty(ie) && M != null && !a.hasOwnProperty(ie) && Ye(e, t, ie, null, a, M);
          for (D in a)
            if (M = a[D], L = n[D], a.hasOwnProperty(D) && M !== L && (M != null || L != null))
              switch (D) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (M != null)
                    throw Error(o(137, t));
                  break;
                default:
                  Ye(e, t, D, M, a, L);
              }
          return;
        default:
          if (jl(t)) {
            for (var Xe in n)
              M = n[Xe], n.hasOwnProperty(Xe) && M !== void 0 && !a.hasOwnProperty(Xe) && fc(e, t, Xe, void 0, a, M);
            for (Y in a)
              M = a[Y], L = n[Y], !a.hasOwnProperty(Y) || M === L || M === void 0 && L === void 0 || fc(e, t, Y, M, a, L);
            return;
          }
      }
      for (var N in n)
        M = n[N], n.hasOwnProperty(N) && M != null && !a.hasOwnProperty(N) && Ye(e, t, N, null, a, M);
      for (Z in a)
        M = a[Z], L = n[Z], !a.hasOwnProperty(Z) || M === L || M == null && L == null || Ye(e, t, Z, M, a, L);
    }
    function lp(e) {
      switch (e) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
          return true;
        default:
          return false;
      }
    }
    function $0() {
      if (typeof performance.getEntriesByType == "function") {
        for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
          var l = n[a], i = l.transferSize, c = l.initiatorType, y = l.duration;
          if (i && y && lp(c)) {
            for (c = 0, y = l.responseEnd, a += 1; a < n.length; a++) {
              var T = n[a], D = T.startTime;
              if (D > y)
                break;
              var Y = T.transferSize, Z = T.initiatorType;
              Y && lp(Z) && (T = T.responseEnd, c += Y * (T < y ? 1 : (y - D) / (T - D)));
            }
            if (--a, t += 8 * (i + c) / (l.duration / 1e3), e++, 10 < e)
              break;
          }
        }
        if (0 < e)
          return t / e / 1e6;
      }
      return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
    }
    var hc = null, dc = null;
    function Js(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function ip(e) {
      switch (e) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function up(e, t) {
      if (e === 0)
        switch (t) {
          case "svg":
            return 1;
          case "math":
            return 2;
          default:
            return 0;
        }
      return e === 1 && t === "foreignObject" ? 0 : e;
    }
    function pc(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    var mc = null;
    function P0() {
      var e = window.event;
      return e && e.type === "popstate" ? e === mc ? false : (mc = e, true) : (mc = null, false);
    }
    var sp = typeof setTimeout == "function" ? setTimeout : void 0, I0 = typeof clearTimeout == "function" ? clearTimeout : void 0, rp = typeof Promise == "function" ? Promise : void 0, ey = typeof queueMicrotask == "function" ? queueMicrotask : typeof rp != "undefined" ? function(e) {
      return rp.resolve(null).then(e).catch(ty);
    } : sp;
    function ty(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Ba(e) {
      return e === "head";
    }
    function op(e, t) {
      var n = t, a = 0;
      do {
        var l = n.nextSibling;
        if (e.removeChild(n), l && l.nodeType === 8)
          if (n = l.data, n === "/$" || n === "/&") {
            if (a === 0) {
              e.removeChild(l), gi(t);
              return;
            }
            a--;
          } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
            a++;
          else if (n === "html")
            vu(e.ownerDocument.documentElement);
          else if (n === "head") {
            n = e.ownerDocument.head, vu(n);
            for (var i = n.firstChild; i; ) {
              var c = i.nextSibling, y = i.nodeName;
              i[Nn] || y === "SCRIPT" || y === "STYLE" || y === "LINK" && i.rel.toLowerCase() === "stylesheet" || n.removeChild(i), i = c;
            }
          } else
            n === "body" && vu(e.ownerDocument.body);
        n = l;
      } while (n);
      gi(t);
    }
    function cp(e, t) {
      var n = e;
      e = 0;
      do {
        var a = n.nextSibling;
        if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), a && a.nodeType === 8)
          if (n = a.data, n === "/$") {
            if (e === 0)
              break;
            e--;
          } else
            n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
        n = a;
      } while (n);
    }
    function yc(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var n = t;
        switch (t = t.nextSibling, n.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            yc(n), Ci(n);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (n.rel.toLowerCase() === "stylesheet")
              continue;
        }
        e.removeChild(n);
      }
    }
    function ny(e, t, n, a) {
      for (; e.nodeType === 1; ) {
        var l = n;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
            break;
        } else if (a) {
          if (!e[Nn])
            switch (t) {
              case "meta":
                if (!e.hasAttribute("itemprop"))
                  break;
                return e;
              case "link":
                if (i = e.getAttribute("rel"), i === "stylesheet" && e.hasAttribute("data-precedence"))
                  break;
                if (i !== l.rel || e.getAttribute("href") !== (l.href == null || l.href === "" ? null : l.href) || e.getAttribute("crossorigin") !== (l.crossOrigin == null ? null : l.crossOrigin) || e.getAttribute("title") !== (l.title == null ? null : l.title))
                  break;
                return e;
              case "style":
                if (e.hasAttribute("data-precedence"))
                  break;
                return e;
              case "script":
                if (i = e.getAttribute("src"), (i !== (l.src == null ? null : l.src) || e.getAttribute("type") !== (l.type == null ? null : l.type) || e.getAttribute("crossorigin") !== (l.crossOrigin == null ? null : l.crossOrigin)) && i && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                  break;
                return e;
              default:
                return e;
            }
        } else if (t === "input" && e.type === "hidden") {
          var i = l.name == null ? null : "" + l.name;
          if (l.type === "hidden" && e.getAttribute("name") === i)
            return e;
        } else
          return e;
        if (e = hn(e.nextSibling), e === null)
          break;
      }
      return null;
    }
    function ay(e, t, n) {
      if (t === "")
        return null;
      for (; e.nodeType !== 3; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = hn(e.nextSibling), e === null))
          return null;
      return e;
    }
    function fp(e, t) {
      for (; e.nodeType !== 8; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = hn(e.nextSibling), e === null))
          return null;
      return e;
    }
    function gc(e) {
      return e.data === "$?" || e.data === "$~";
    }
    function vc(e) {
      return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
    }
    function ly(e, t) {
      var n = e.ownerDocument;
      if (e.data === "$~")
        e._reactRetry = t;
      else if (e.data !== "$?" || n.readyState !== "loading")
        t();
      else {
        var a = function() {
          t(), n.removeEventListener("DOMContentLoaded", a);
        };
        n.addEventListener("DOMContentLoaded", a), e._reactRetry = a;
      }
    }
    function hn(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
          break;
        if (t === 8) {
          if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
            break;
          if (t === "/$" || t === "/&")
            return null;
        }
      }
      return e;
    }
    var bc = null;
    function hp(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$" || n === "/&") {
            if (t === 0)
              return hn(e.nextSibling);
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function dp(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
            if (t === 0)
              return e;
            t--;
          } else
            n !== "/$" && n !== "/&" || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function pp(e, t, n) {
      switch (t = Js(n), e) {
        case "html":
          if (e = t.documentElement, !e)
            throw Error(o(452));
          return e;
        case "head":
          if (e = t.head, !e)
            throw Error(o(453));
          return e;
        case "body":
          if (e = t.body, !e)
            throw Error(o(454));
          return e;
        default:
          throw Error(o(451));
      }
    }
    function vu(e) {
      for (var t = e.attributes; t.length; )
        e.removeAttributeNode(t[0]);
      Ci(e);
    }
    var dn = /* @__PURE__ */ new Map(), mp = /* @__PURE__ */ new Set();
    function Fs(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    var ca = Q.d;
    Q.d = { f: iy, r: uy, D: sy, C: ry, L: oy, m: cy, X: hy, S: fy, M: dy };
    function iy() {
      var e = ca.f(), t = Ys();
      return e || t;
    }
    function uy(e) {
      var t = zn(e);
      t !== null && t.tag === 5 && t.type === "form" ? Ch(t) : ca.r(e);
    }
    var pi = typeof document == "undefined" ? null : document;
    function yp(e, t, n) {
      var a = pi;
      if (a && typeof t == "string" && t) {
        var l = jt(t);
        l = 'link[rel="' + e + '"][href="' + l + '"]', typeof n == "string" && (l += '[crossorigin="' + n + '"]'), mp.has(l) || (mp.add(l), e = { rel: e, crossOrigin: n, href: t }, a.querySelector(l) === null && (t = a.createElement("link"), At(t, "link", e), Pe(t), a.head.appendChild(t)));
      }
    }
    function sy(e) {
      ca.D(e), yp("dns-prefetch", e, null);
    }
    function ry(e, t) {
      ca.C(e, t), yp("preconnect", e, t);
    }
    function oy(e, t, n) {
      ca.L(e, t, n);
      var a = pi;
      if (a && e && t) {
        var l = 'link[rel="preload"][as="' + jt(t) + '"]';
        t === "image" && n && n.imageSrcSet ? (l += '[imagesrcset="' + jt(n.imageSrcSet) + '"]', typeof n.imageSizes == "string" && (l += '[imagesizes="' + jt(n.imageSizes) + '"]')) : l += '[href="' + jt(e) + '"]';
        var i = l;
        switch (t) {
          case "style":
            i = mi(e);
            break;
          case "script":
            i = yi(e);
        }
        dn.has(i) || (e = R({ rel: "preload", href: t === "image" && n && n.imageSrcSet ? void 0 : e, as: t }, n), dn.set(i, e), a.querySelector(l) !== null || t === "style" && a.querySelector(bu(i)) || t === "script" && a.querySelector(Su(i)) || (t = a.createElement("link"), At(t, "link", e), Pe(t), a.head.appendChild(t)));
      }
    }
    function cy(e, t) {
      ca.m(e, t);
      var n = pi;
      if (n && e) {
        var a = t && typeof t.as == "string" ? t.as : "script", l = 'link[rel="modulepreload"][as="' + jt(a) + '"][href="' + jt(e) + '"]', i = l;
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            i = yi(e);
        }
        if (!dn.has(i) && (e = R({ rel: "modulepreload", href: e }, t), dn.set(i, e), n.querySelector(l) === null)) {
          switch (a) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (n.querySelector(Su(i)))
                return;
          }
          a = n.createElement("link"), At(a, "link", e), Pe(a), n.head.appendChild(a);
        }
      }
    }
    function fy(e, t, n) {
      ca.S(e, t, n);
      var a = pi;
      if (a && e) {
        var l = ma(a).hoistableStyles, i = mi(e);
        t = t || "default";
        var c = l.get(i);
        if (!c) {
          var y = { loading: 0, preload: null };
          if (c = a.querySelector(bu(i)))
            y.loading = 5;
          else {
            e = R({ rel: "stylesheet", href: e, "data-precedence": t }, n), (n = dn.get(i)) && Sc(e, n);
            var T = c = a.createElement("link");
            Pe(T), At(T, "link", e), T._p = new Promise(function(D, Y) {
              T.onload = D, T.onerror = Y;
            }), T.addEventListener("load", function() {
              y.loading |= 1;
            }), T.addEventListener("error", function() {
              y.loading |= 2;
            }), y.loading |= 4, Ws(c, t, a);
          }
          c = { type: "stylesheet", instance: c, count: 1, state: y }, l.set(i, c);
        }
      }
    }
    function hy(e, t) {
      ca.X(e, t);
      var n = pi;
      if (n && e) {
        var a = ma(n).hoistableScripts, l = yi(e), i = a.get(l);
        i || (i = n.querySelector(Su(l)), i || (e = R({ src: e, async: true }, t), (t = dn.get(l)) && xc(e, t), i = n.createElement("script"), Pe(i), At(i, "link", e), n.head.appendChild(i)), i = { type: "script", instance: i, count: 1, state: null }, a.set(l, i));
      }
    }
    function dy(e, t) {
      ca.M(e, t);
      var n = pi;
      if (n && e) {
        var a = ma(n).hoistableScripts, l = yi(e), i = a.get(l);
        i || (i = n.querySelector(Su(l)), i || (e = R({ src: e, async: true, type: "module" }, t), (t = dn.get(l)) && xc(e, t), i = n.createElement("script"), Pe(i), At(i, "link", e), n.head.appendChild(i)), i = { type: "script", instance: i, count: 1, state: null }, a.set(l, i));
      }
    }
    function gp(e, t, n, a) {
      var l = (l = xe.current) ? Fs(l) : null;
      if (!l)
        throw Error(o(446));
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof n.precedence == "string" && typeof n.href == "string" ? (t = mi(n.href), n = ma(l).hoistableStyles, a = n.get(t), a || (a = { type: "style", instance: null, count: 0, state: null }, n.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
            e = mi(n.href);
            var i = ma(l).hoistableStyles, c = i.get(e);
            if (c || (l = l.ownerDocument || l, c = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, i.set(e, c), (i = l.querySelector(bu(e))) && !i._p && (c.instance = i, c.state.loading = 5), dn.has(e) || (n = { rel: "preload", as: "style", href: n.href, crossOrigin: n.crossOrigin, integrity: n.integrity, media: n.media, hrefLang: n.hrefLang, referrerPolicy: n.referrerPolicy }, dn.set(e, n), i || py(l, e, n, c.state))), t && a === null)
              throw Error(o(528, ""));
            return c;
          }
          if (t && a !== null)
            throw Error(o(529, ""));
          return null;
        case "script":
          return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = yi(n), n = ma(l).hoistableScripts, a = n.get(t), a || (a = { type: "script", instance: null, count: 0, state: null }, n.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(o(444, e));
      }
    }
    function mi(e) {
      return 'href="' + jt(e) + '"';
    }
    function bu(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function vp(e) {
      return R({}, e, { "data-precedence": e.precedence, precedence: null });
    }
    function py(e, t, n, a) {
      e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
        return a.loading |= 1;
      }), t.addEventListener("error", function() {
        return a.loading |= 2;
      }), At(t, "link", n), Pe(t), e.head.appendChild(t));
    }
    function yi(e) {
      return '[src="' + jt(e) + '"]';
    }
    function Su(e) {
      return "script[async]" + e;
    }
    function bp(e, t, n) {
      if (t.count++, t.instance === null)
        switch (t.type) {
          case "style":
            var a = e.querySelector('style[data-href~="' + jt(n.href) + '"]');
            if (a)
              return t.instance = a, Pe(a), a;
            var l = R({}, n, { "data-href": n.href, "data-precedence": n.precedence, href: null, precedence: null });
            return a = (e.ownerDocument || e).createElement("style"), Pe(a), At(a, "style", l), Ws(a, n.precedence, e), t.instance = a;
          case "stylesheet":
            l = mi(n.href);
            var i = e.querySelector(bu(l));
            if (i)
              return t.state.loading |= 4, t.instance = i, Pe(i), i;
            a = vp(n), (l = dn.get(l)) && Sc(a, l), i = (e.ownerDocument || e).createElement("link"), Pe(i);
            var c = i;
            return c._p = new Promise(function(y, T) {
              c.onload = y, c.onerror = T;
            }), At(i, "link", a), t.state.loading |= 4, Ws(i, n.precedence, e), t.instance = i;
          case "script":
            return i = yi(n.src), (l = e.querySelector(Su(i))) ? (t.instance = l, Pe(l), l) : (a = n, (l = dn.get(i)) && (a = R({}, n), xc(a, l)), e = e.ownerDocument || e, l = e.createElement("script"), Pe(l), At(l, "link", a), e.head.appendChild(l), t.instance = l);
          case "void":
            return null;
          default:
            throw Error(o(443, t.type));
        }
      else
        t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Ws(a, n.precedence, e));
      return t.instance;
    }
    function Ws(e, t, n) {
      for (var a = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), l = a.length ? a[a.length - 1] : null, i = l, c = 0; c < a.length; c++) {
        var y = a[c];
        if (y.dataset.precedence === t)
          i = y;
        else if (i !== l)
          break;
      }
      i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
    }
    function Sc(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function xc(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    var $s = null;
    function Sp(e, t, n) {
      if ($s === null) {
        var a = /* @__PURE__ */ new Map(), l = $s = /* @__PURE__ */ new Map();
        l.set(n, a);
      } else
        l = $s, a = l.get(n), a || (a = /* @__PURE__ */ new Map(), l.set(n, a));
      if (a.has(e))
        return a;
      for (a.set(e, null), n = n.getElementsByTagName(e), l = 0; l < n.length; l++) {
        var i = n[l];
        if (!(i[Nn] || i[pt] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
          var c = i.getAttribute(t) || "";
          c = e + c;
          var y = a.get(c);
          y ? y.push(i) : a.set(c, [i]);
        }
      }
      return a;
    }
    function xp(e, t, n) {
      e = e.ownerDocument || e, e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null);
    }
    function my(e, t, n) {
      if (n === 1 || t.itemProp != null)
        return false;
      switch (e) {
        case "meta":
        case "title":
          return true;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
            break;
          return true;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
            break;
          switch (t.rel) {
            case "stylesheet":
              return e = t.disabled, typeof t.precedence == "string" && e == null;
            default:
              return true;
          }
        case "script":
          if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
            return true;
      }
      return false;
    }
    function _p(e) {
      return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
    }
    function yy(e, t, n, a) {
      if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== false) && (n.state.loading & 4) === 0) {
        if (n.instance === null) {
          var l = mi(a.href), i = t.querySelector(bu(l));
          if (i) {
            t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Ps.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = i, Pe(i);
            return;
          }
          i = t.ownerDocument || t, a = vp(a), (l = dn.get(l)) && Sc(a, l), i = i.createElement("link"), Pe(i);
          var c = i;
          c._p = new Promise(function(y, T) {
            c.onload = y, c.onerror = T;
          }), At(i, "link", a), n.instance = i;
        }
        e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Ps.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
      }
    }
    var _c = 0;
    function gy(e, t) {
      return e.stylesheets && e.count === 0 && er(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
        var a = setTimeout(function() {
          if (e.stylesheets && er(e, e.stylesheets), e.unsuspend) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        }, 6e4 + t);
        0 < e.imgBytes && _c === 0 && (_c = 62500 * $0());
        var l = setTimeout(function() {
          if (e.waitingForImages = false, e.count === 0 && (e.stylesheets && er(e, e.stylesheets), e.unsuspend)) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        }, (e.imgBytes > _c ? 50 : 800) + t);
        return e.unsuspend = n, function() {
          e.unsuspend = null, clearTimeout(a), clearTimeout(l);
        };
      } : null;
    }
    function Ps() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets)
          er(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    var Is = null;
    function er(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, Is = /* @__PURE__ */ new Map(), t.forEach(vy, e), Is = null, Ps.call(e));
    }
    function vy(e, t) {
      if (!(t.state.loading & 4)) {
        var n = Is.get(e);
        if (n)
          var a = n.get(null);
        else {
          n = /* @__PURE__ */ new Map(), Is.set(e, n);
          for (var l = e.querySelectorAll("link[data-precedence],style[data-precedence]"), i = 0; i < l.length; i++) {
            var c = l[i];
            (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (n.set(c.dataset.precedence, c), a = c);
          }
          a && n.set(null, a);
        }
        l = t.instance, c = l.getAttribute("data-precedence"), i = n.get(c) || a, i === a && n.set(null, l), n.set(c, l), this.count++, a = Ps.bind(this), l.addEventListener("load", a), l.addEventListener("error", a), i ? i.parentNode.insertBefore(l, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(l, e.firstChild)), t.state.loading |= 4;
      }
    }
    var xu = { $$typeof: oe, Provider: null, Consumer: null, _currentValue: J, _currentValue2: J, _threadCount: 0 };
    function by(e, t, n, a, l, i, c, y, T) {
      this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = $a(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = $a(0), this.hiddenUpdates = $a(null), this.identifierPrefix = a, this.onUncaughtError = l, this.onCaughtError = i, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = T, this.incompleteTransitions = /* @__PURE__ */ new Map();
    }
    function Tp(e, t, n, a, l, i, c, y, T, D, Y, Z) {
      return e = new by(e, t, n, c, T, D, Y, Z, y), t = 1, i === true && (t |= 24), i = Zt(3, null, null, t), e.current = i, i.stateNode = e, t = eo(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = { element: a, isDehydrated: n, cache: t }, lo(i), e;
    }
    function Ep(e) {
      return e ? (e = Kl, e) : Kl;
    }
    function Ap(e, t, n, a, l, i) {
      l = Ep(l), a.context === null ? a.context = l : a.pendingContext = l, a = Aa(t), a.payload = { element: n }, i = i === void 0 ? null : i, i !== null && (a.callback = i), n = Oa(e, a, t), n !== null && (Lt(n, e, t), Ii(n, e, t));
    }
    function Op(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function Tc(e, t) {
      Op(e, t), (e = e.alternate) && Op(e, t);
    }
    function wp(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = sl(e, 67108864);
        t !== null && Lt(t, e, 67108864), Tc(e, 67108864);
      }
    }
    function Rp(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = Wt();
        t = ut(t);
        var n = sl(e, t);
        n !== null && Lt(n, e, t), Tc(e, t);
      }
    }
    var tr = true;
    function Sy(e, t, n, a) {
      var l = B.T;
      B.T = null;
      var i = Q.p;
      try {
        Q.p = 2, Ec(e, t, n, a);
      } finally {
        Q.p = i, B.T = l;
      }
    }
    function xy(e, t, n, a) {
      var l = B.T;
      B.T = null;
      var i = Q.p;
      try {
        Q.p = 8, Ec(e, t, n, a);
      } finally {
        Q.p = i, B.T = l;
      }
    }
    function Ec(e, t, n, a) {
      if (tr) {
        var l = Ac(a);
        if (l === null)
          cc(e, t, a, nr, n), zp(e, a);
        else if (Ty(l, e, t, n, a))
          a.stopPropagation();
        else if (zp(e, a), t & 4 && -1 < _y.indexOf(e)) {
          for (; l !== null; ) {
            var i = zn(l);
            if (i !== null)
              switch (i.tag) {
                case 3:
                  if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                    var c = wn(i.pendingLanes);
                    if (c !== 0) {
                      var y = i;
                      for (y.pendingLanes |= 2, y.entangledLanes |= 2; c; ) {
                        var T = 1 << 31 - Ot(c);
                        y.entanglements[1] |= T, c &= ~T;
                      }
                      Hn(i), (Me & 6) === 0 && (Hs = Nt() + 500, mu(0));
                    }
                  }
                  break;
                case 31:
                case 13:
                  y = sl(i, 2), y !== null && Lt(y, i, 2), Ys(), Tc(i, 2);
              }
            if (i = Ac(a), i === null && cc(e, t, a, nr, n), i === l)
              break;
            l = i;
          }
          l !== null && a.stopPropagation();
        } else
          cc(e, t, a, null, n);
      }
    }
    function Ac(e) {
      return e = Ul(e), Oc(e);
    }
    var nr = null;
    function Oc(e) {
      if (nr = null, e = pa(e), e !== null) {
        var t = b(e);
        if (t === null)
          e = null;
        else {
          var n = t.tag;
          if (n === 13) {
            if (e = p(t), e !== null)
              return e;
            e = null;
          } else if (n === 31) {
            if (e = v(t), e !== null)
              return e;
            e = null;
          } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else
            t !== e && (e = null);
        }
      }
      return nr = e, null;
    }
    function Np(e) {
      switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 8;
        case "message":
          switch (H()) {
            case fe:
              return 2;
            case Ri:
              return 8;
            case ka:
            case Or:
              return 32;
            case Ol:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var wc = false, qa = null, Ha = null, La = null, _u = /* @__PURE__ */ new Map(), Tu = /* @__PURE__ */ new Map(), Ya = [], _y = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function zp(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          qa = null;
          break;
        case "dragenter":
        case "dragleave":
          Ha = null;
          break;
        case "mouseover":
        case "mouseout":
          La = null;
          break;
        case "pointerover":
        case "pointerout":
          _u.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Tu.delete(t.pointerId);
      }
    }
    function Eu(e, t, n, a, l, i) {
      return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: a, nativeEvent: i, targetContainers: [l] }, t !== null && (t = zn(t), t !== null && wp(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
    }
    function Ty(e, t, n, a, l) {
      switch (t) {
        case "focusin":
          return qa = Eu(qa, e, t, n, a, l), true;
        case "dragenter":
          return Ha = Eu(Ha, e, t, n, a, l), true;
        case "mouseover":
          return La = Eu(La, e, t, n, a, l), true;
        case "pointerover":
          var i = l.pointerId;
          return _u.set(i, Eu(_u.get(i) || null, e, t, n, a, l)), true;
        case "gotpointercapture":
          return i = l.pointerId, Tu.set(i, Eu(Tu.get(i) || null, e, t, n, a, l)), true;
      }
      return false;
    }
    function jp(e) {
      var t = pa(e.target);
      if (t !== null) {
        var n = b(t);
        if (n !== null) {
          if (t = n.tag, t === 13) {
            if (t = p(n), t !== null) {
              e.blockedOn = t, Gu(e.priority, function() {
                Rp(n);
              });
              return;
            }
          } else if (t === 31) {
            if (t = v(n), t !== null) {
              e.blockedOn = t, Gu(e.priority, function() {
                Rp(n);
              });
              return;
            }
          } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function ar(e) {
      if (e.blockedOn !== null)
        return false;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Ac(e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var a = new n.constructor(n.type, n);
          tl = a, n.target.dispatchEvent(a), tl = null;
        } else
          return t = zn(n), t !== null && wp(t), e.blockedOn = n, false;
        t.shift();
      }
      return true;
    }
    function Cp(e, t, n) {
      ar(e) && n.delete(t);
    }
    function Ey() {
      wc = false, qa !== null && ar(qa) && (qa = null), Ha !== null && ar(Ha) && (Ha = null), La !== null && ar(La) && (La = null), _u.forEach(Cp), Tu.forEach(Cp);
    }
    function lr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, wc || (wc = true, s.unstable_scheduleCallback(s.unstable_NormalPriority, Ey)));
    }
    var ir = null;
    function Up(e) {
      ir !== e && (ir = e, s.unstable_scheduleCallback(s.unstable_NormalPriority, function() {
        ir === e && (ir = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], a = e[t + 1], l = e[t + 2];
          if (typeof a != "function") {
            if (Oc(a || n) === null)
              continue;
            break;
          }
          var i = zn(n);
          i !== null && (e.splice(t, 3), t -= 3, Ao(i, { pending: true, data: l, method: n.method, action: a }, a, l));
        }
      }));
    }
    function gi(e) {
      function t(T) {
        return lr(T, e);
      }
      qa !== null && lr(qa, e), Ha !== null && lr(Ha, e), La !== null && lr(La, e), _u.forEach(t), Tu.forEach(t);
      for (var n = 0; n < Ya.length; n++) {
        var a = Ya[n];
        a.blockedOn === e && (a.blockedOn = null);
      }
      for (; 0 < Ya.length && (n = Ya[0], n.blockedOn === null); )
        jp(n), n.blockedOn === null && Ya.shift();
      if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
        for (a = 0; a < n.length; a += 3) {
          var l = n[a], i = n[a + 1], c = l[gt] || null;
          if (typeof i == "function")
            c || Up(n);
          else if (c) {
            var y = null;
            if (i && i.hasAttribute("formAction")) {
              if (l = i, c = i[gt] || null)
                y = c.formAction;
              else if (Oc(l) !== null)
                continue;
            } else
              y = c.action;
            typeof y == "function" ? n[a + 1] = y : (n.splice(a, 3), a -= 3), Up(n);
          }
        }
    }
    function Dp() {
      function e(i) {
        i.canIntercept && i.info === "react-transition" && i.intercept({ handler: function() {
          return new Promise(function(c) {
            return l = c;
          });
        }, focusReset: "manual", scroll: "manual" });
      }
      function t() {
        l !== null && (l(), l = null), a || setTimeout(n, 20);
      }
      function n() {
        if (!a && !navigation.transition) {
          var i = navigation.currentEntry;
          i && i.url != null && navigation.navigate(i.url, { state: i.getState(), info: "react-transition", history: "replace" });
        }
      }
      if (typeof navigation == "object") {
        var a = false, l = null;
        return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
          a = true, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), l !== null && (l(), l = null);
        };
      }
    }
    function Rc(e) {
      this._internalRoot = e;
    }
    ur.prototype.render = Rc.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw Error(o(409));
      var n = t.current, a = Wt();
      Ap(n, a, e, t, null, null);
    }, ur.prototype.unmount = Rc.prototype.unmount = function() {
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Ap(e.current, 2, null, e, null, null), Ys(), t[Rn] = null;
      }
    };
    function ur(e) {
      this._internalRoot = e;
    }
    ur.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = Qu();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < Ya.length && t !== 0 && t < Ya[n].priority; n++)
          ;
        Ya.splice(n, 0, e), n === 0 && jp(e);
      }
    };
    var Mp = u.version;
    if (Mp !== "19.2.0")
      throw Error(o(527, Mp, "19.2.0"));
    Q.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
      return e = h(t), e = e !== null ? _(e) : null, e = e === null ? null : e.stateNode, e;
    };
    var Ay = { bundleType: 0, version: "19.2.0", rendererPackageName: "react-dom", currentDispatcherRef: B, reconcilerVersion: "19.2.0" };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
      var sr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!sr.isDisabled && sr.supportsFiber)
        try {
          Ka = sr.inject(Ay), zt = sr;
        } catch (e) {
        }
    }
    return wu.createRoot = function(e, t) {
      if (!g(e))
        throw Error(o(299));
      var n = false, a = "", l = Qh, i = Gh, c = Vh;
      return t != null && (t.unstable_strictMode === true && (n = true), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (l = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = Tp(e, 1, false, null, null, n, a, null, l, i, c, Dp), e[Rn] = t.current, oc(e), new Rc(t);
    }, wu.hydrateRoot = function(e, t, n) {
      if (!g(e))
        throw Error(o(299));
      var a = false, l = "", i = Qh, c = Gh, y = Vh, T = null;
      return n != null && (n.unstable_strictMode === true && (a = true), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onUncaughtError !== void 0 && (i = n.onUncaughtError), n.onCaughtError !== void 0 && (c = n.onCaughtError), n.onRecoverableError !== void 0 && (y = n.onRecoverableError), n.formState !== void 0 && (T = n.formState)), t = Tp(e, 1, true, t, n != null ? n : null, a, l, T, i, c, y, Dp), t.context = Ep(null), n = t.current, a = Wt(), a = ut(a), l = Aa(a), l.callback = null, Oa(n, l, a), n = a, t.current.lanes = n, Xn(t, n), Hn(t), e[Rn] = t.current, oc(e), new ur(t);
    }, wu.version = "19.2.0", wu;
  }
  var $p;
  function gg() {
    if ($p)
      return Mc.exports;
    $p = 1;
    function s() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
        } catch (u) {
          console.error(u);
        }
    }
    return s(), Mc.exports = yg(), Mc.exports;
  }
  var vg = gg();
  var bg = Em(vg);
  var Sg = Object.defineProperty;
  var xg = (s, u, r) => u in s ? Sg(s, u, { enumerable: true, configurable: true, writable: true, value: r }) : s[u] = r;
  var _l = (s, u, r) => xg(s, typeof u != "symbol" ? u + "" : u, r);
  var _g = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  var bi = {};
  var Ru = {};
  var Sn = {};
  var Pp;
  function Rm() {
    if (Pp)
      return Sn;
    Pp = 1;
    var s = Sn && Sn.__assign || function() {
      return s = Object.assign || function(g) {
        for (var b, p = 1, v = arguments.length; p < v; p++) {
          b = arguments[p];
          for (var m in b)
            Object.prototype.hasOwnProperty.call(b, m) && (g[m] = b[m]);
        }
        return g;
      }, s.apply(this, arguments);
    }, u = Sn && Sn.__awaiter || function(g, b, p, v) {
      function m(h) {
        return h instanceof p ? h : new p(function(_) {
          _(h);
        });
      }
      return new (p || (p = Promise))(function(h, _) {
        function R(q) {
          try {
            w(v.next(q));
          } catch (k) {
            _(k);
          }
        }
        function X(q) {
          try {
            w(v.throw(q));
          } catch (k) {
            _(k);
          }
        }
        function w(q) {
          q.done ? h(q.value) : m(q.value).then(R, X);
        }
        w((v = v.apply(g, b || [])).next());
      });
    }, r = Sn && Sn.__generator || function(g, b) {
      var p = { label: 0, sent: function() {
        if (h[0] & 1)
          throw h[1];
        return h[1];
      }, trys: [], ops: [] }, v, m, h, _;
      return _ = { next: R(0), throw: R(1), return: R(2) }, typeof Symbol == "function" && (_[Symbol.iterator] = function() {
        return this;
      }), _;
      function R(w) {
        return function(q) {
          return X([w, q]);
        };
      }
      function X(w) {
        if (v)
          throw new TypeError("Generator is already executing.");
        for (; _ && (_ = 0, w[0] && (p = 0)), p; )
          try {
            if (v = 1, m && (h = w[0] & 2 ? m.return : w[0] ? m.throw || ((h = m.return) && h.call(m), 0) : m.next) && !(h = h.call(m, w[1])).done)
              return h;
            switch (m = 0, h && (w = [w[0] & 2, h.value]), w[0]) {
              case 0:
              case 1:
                h = w;
                break;
              case 4:
                return p.label++, { value: w[1], done: false };
              case 5:
                p.label++, m = w[1], w = [0];
                continue;
              case 7:
                w = p.ops.pop(), p.trys.pop();
                continue;
              default:
                if (h = p.trys, !(h = h.length > 0 && h[h.length - 1]) && (w[0] === 6 || w[0] === 2)) {
                  p = 0;
                  continue;
                }
                if (w[0] === 3 && (!h || w[1] > h[0] && w[1] < h[3])) {
                  p.label = w[1];
                  break;
                }
                if (w[0] === 6 && p.label < h[1]) {
                  p.label = h[1], h = w;
                  break;
                }
                if (h && p.label < h[2]) {
                  p.label = h[2], p.ops.push(w);
                  break;
                }
                h[2] && p.ops.pop(), p.trys.pop();
                continue;
            }
            w = b.call(g, p);
          } catch (q) {
            w = [6, q], m = 0;
          } finally {
            v = h = 0;
          }
        if (w[0] & 5)
          throw w[1];
        return { value: w[0] ? w[1] : void 0, done: true };
      }
    };
    Object.defineProperty(Sn, "__esModule", { value: true }), Sn.FrappeCall = void 0;
    var o = function() {
      function g(b, p, v, m, h) {
        this.appURL = b, this.axios = p, this.useToken = v != null ? v : false, this.token = m, this.tokenType = h;
      }
      return g.prototype.get = function(b, p) {
        return u(this, void 0, void 0, function() {
          var v;
          return r(this, function(m) {
            return v = new URLSearchParams(), p && Object.entries(p).forEach(function(h) {
              var _ = h[0], R = h[1];
              if (R != null) {
                var X = typeof R == "object" ? JSON.stringify(R) : R;
                v.set(_, X);
              }
            }), [2, this.axios.get("/api/method/".concat(b), { params: v }).then(function(h) {
              return h.data;
            }).catch(function(h) {
              var _, R;
              throw s(s({}, h.response.data), { httpStatus: h.response.status, httpStatusText: h.response.statusText, message: (_ = h.response.data.message) !== null && _ !== void 0 ? _ : "There was an error.", exception: (R = h.response.data.exception) !== null && R !== void 0 ? R : "" });
            })];
          });
        });
      }, g.prototype.post = function(b, p) {
        return u(this, void 0, void 0, function() {
          return r(this, function(v) {
            return [2, this.axios.post("/api/method/".concat(b), s({}, p)).then(function(m) {
              return m.data;
            }).catch(function(m) {
              var h, _;
              throw s(s({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: (h = m.response.data.message) !== null && h !== void 0 ? h : "There was an error.", exception: (_ = m.response.data.exception) !== null && _ !== void 0 ? _ : "" });
            })];
          });
        });
      }, g.prototype.put = function(b, p) {
        return u(this, void 0, void 0, function() {
          return r(this, function(v) {
            return [2, this.axios.put("/api/method/".concat(b), s({}, p)).then(function(m) {
              return m.data;
            }).catch(function(m) {
              var h, _;
              throw s(s({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: (h = m.response.data.message) !== null && h !== void 0 ? h : "There was an error.", exception: (_ = m.response.data.exception) !== null && _ !== void 0 ? _ : "" });
            })];
          });
        });
      }, g.prototype.delete = function(b, p) {
        return u(this, void 0, void 0, function() {
          return r(this, function(v) {
            return [2, this.axios.delete("/api/method/".concat(b), { params: p }).then(function(m) {
              return m.data;
            }).catch(function(m) {
              var h, _;
              throw s(s({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: (h = m.response.data.message) !== null && h !== void 0 ? h : "There was an error.", exception: (_ = m.response.data.exception) !== null && _ !== void 0 ? _ : "" });
            })];
          });
        });
      }, g;
    }();
    return Sn.FrappeCall = o, Sn;
  }
  var xn = {};
  var Ip;
  function Nm() {
    if (Ip)
      return xn;
    Ip = 1;
    var s = xn && xn.__assign || function() {
      return s = Object.assign || function(g) {
        for (var b, p = 1, v = arguments.length; p < v; p++) {
          b = arguments[p];
          for (var m in b)
            Object.prototype.hasOwnProperty.call(b, m) && (g[m] = b[m]);
        }
        return g;
      }, s.apply(this, arguments);
    }, u = xn && xn.__awaiter || function(g, b, p, v) {
      function m(h) {
        return h instanceof p ? h : new p(function(_) {
          _(h);
        });
      }
      return new (p || (p = Promise))(function(h, _) {
        function R(q) {
          try {
            w(v.next(q));
          } catch (k) {
            _(k);
          }
        }
        function X(q) {
          try {
            w(v.throw(q));
          } catch (k) {
            _(k);
          }
        }
        function w(q) {
          q.done ? h(q.value) : m(q.value).then(R, X);
        }
        w((v = v.apply(g, b || [])).next());
      });
    }, r = xn && xn.__generator || function(g, b) {
      var p = { label: 0, sent: function() {
        if (h[0] & 1)
          throw h[1];
        return h[1];
      }, trys: [], ops: [] }, v, m, h, _;
      return _ = { next: R(0), throw: R(1), return: R(2) }, typeof Symbol == "function" && (_[Symbol.iterator] = function() {
        return this;
      }), _;
      function R(w) {
        return function(q) {
          return X([w, q]);
        };
      }
      function X(w) {
        if (v)
          throw new TypeError("Generator is already executing.");
        for (; _ && (_ = 0, w[0] && (p = 0)), p; )
          try {
            if (v = 1, m && (h = w[0] & 2 ? m.return : w[0] ? m.throw || ((h = m.return) && h.call(m), 0) : m.next) && !(h = h.call(m, w[1])).done)
              return h;
            switch (m = 0, h && (w = [w[0] & 2, h.value]), w[0]) {
              case 0:
              case 1:
                h = w;
                break;
              case 4:
                return p.label++, { value: w[1], done: false };
              case 5:
                p.label++, m = w[1], w = [0];
                continue;
              case 7:
                w = p.ops.pop(), p.trys.pop();
                continue;
              default:
                if (h = p.trys, !(h = h.length > 0 && h[h.length - 1]) && (w[0] === 6 || w[0] === 2)) {
                  p = 0;
                  continue;
                }
                if (w[0] === 3 && (!h || w[1] > h[0] && w[1] < h[3])) {
                  p.label = w[1];
                  break;
                }
                if (w[0] === 6 && p.label < h[1]) {
                  p.label = h[1], h = w;
                  break;
                }
                if (h && p.label < h[2]) {
                  p.label = h[2], p.ops.push(w);
                  break;
                }
                h[2] && p.ops.pop(), p.trys.pop();
                continue;
            }
            w = b.call(g, p);
          } catch (q) {
            w = [6, q], m = 0;
          } finally {
            v = h = 0;
          }
        if (w[0] & 5)
          throw w[1];
        return { value: w[0] ? w[1] : void 0, done: true };
      }
    };
    Object.defineProperty(xn, "__esModule", { value: true }), xn.FrappeDB = void 0;
    var o = function() {
      function g(b, p, v, m, h) {
        this.appURL = b, this.axios = p, this.useToken = v != null ? v : false, this.token = m, this.tokenType = h;
      }
      return g.prototype.getDoc = function(b, p) {
        return p === void 0 && (p = ""), u(this, void 0, void 0, function() {
          return r(this, function(v) {
            return [2, this.axios.get("/api/resource/".concat(b, "/").concat(encodeURIComponent(p))).then(function(m) {
              return m.data.data;
            }).catch(function(m) {
              var h, _;
              throw s(s({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: "There was an error while fetching the document.", exception: (_ = (h = m.response.data.exception) !== null && h !== void 0 ? h : m.response.data.exc_type) !== null && _ !== void 0 ? _ : "" });
            })];
          });
        });
      }, g.prototype.getDocList = function(b, p) {
        var v;
        return u(this, void 0, void 0, function() {
          var m, h, _, R, X, w, q, k, ue, ge, je;
          return r(this, function(oe) {
            return m = {}, p && (h = p.fields, _ = p.filters, R = p.orFilters, X = p.orderBy, w = p.limit, q = p.limit_start, k = p.groupBy, ue = p.asDict, ge = ue === void 0 ? true : ue, je = X ? "".concat(String(X == null ? void 0 : X.field), " ").concat((v = X == null ? void 0 : X.order) !== null && v !== void 0 ? v : "asc") : "", m = { fields: h ? JSON.stringify(h) : void 0, filters: _ ? JSON.stringify(_) : void 0, or_filters: R ? JSON.stringify(R) : void 0, order_by: je, group_by: k, limit: w, limit_start: q, as_dict: ge }), [2, this.axios.get("/api/resource/".concat(b), { params: m }).then(function(Oe) {
              return Oe.data.data;
            }).catch(function(Oe) {
              var we, Qe;
              throw s(s({}, Oe.response.data), { httpStatus: Oe.response.status, httpStatusText: Oe.response.statusText, message: "There was an error while fetching the documents.", exception: (Qe = (we = Oe.response.data.exception) !== null && we !== void 0 ? we : Oe.response.data.exc_type) !== null && Qe !== void 0 ? Qe : "" });
            })];
          });
        });
      }, g.prototype.createDoc = function(b, p) {
        return u(this, void 0, void 0, function() {
          return r(this, function(v) {
            return [2, this.axios.post("/api/resource/".concat(b), s({}, p)).then(function(m) {
              return m.data.data;
            }).catch(function(m) {
              var h, _, R;
              throw s(s({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: (h = m.response.data.message) !== null && h !== void 0 ? h : "There was an error while creating the document.", exception: (R = (_ = m.response.data.exception) !== null && _ !== void 0 ? _ : m.response.data.exc_type) !== null && R !== void 0 ? R : "" });
            })];
          });
        });
      }, g.prototype.updateDoc = function(b, p, v) {
        return u(this, void 0, void 0, function() {
          return r(this, function(m) {
            return [2, this.axios.put("/api/resource/".concat(b, "/").concat(p && encodeURIComponent(p)), s({}, v)).then(function(h) {
              return h.data.data;
            }).catch(function(h) {
              var _, R, X;
              throw s(s({}, h.response.data), { httpStatus: h.response.status, httpStatusText: h.response.statusText, message: (_ = h.response.data.message) !== null && _ !== void 0 ? _ : "There was an error while updating the document.", exception: (X = (R = h.response.data.exception) !== null && R !== void 0 ? R : h.response.data.exc_type) !== null && X !== void 0 ? X : "" });
            })];
          });
        });
      }, g.prototype.deleteDoc = function(b, p) {
        return u(this, void 0, void 0, function() {
          return r(this, function(v) {
            return [2, this.axios.delete("/api/resource/".concat(b, "/").concat(p && encodeURIComponent(p))).then(function(m) {
              return m.data;
            }).catch(function(m) {
              var h, _;
              throw s(s({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: "There was an error while deleting the document.", exception: (_ = (h = m.response.data.exception) !== null && h !== void 0 ? h : m.response.data.exc_type) !== null && _ !== void 0 ? _ : "" });
            })];
          });
        });
      }, g.prototype.getCount = function(b, p, v, m) {
        return v === void 0 && (v = false), m === void 0 && (m = false), u(this, void 0, void 0, function() {
          var h;
          return r(this, function(_) {
            return h = { doctype: b, filters: [] }, v && (h.cache = v), m && (h.debug = m), p && (h.filters = p ? JSON.stringify(p) : void 0), [2, this.axios.get("/api/method/frappe.client.get_count", { params: h }).then(function(R) {
              return R.data.message;
            }).catch(function(R) {
              var X, w;
              throw s(s({}, R.response.data), { httpStatus: R.response.status, httpStatusText: R.response.statusText, message: "There was an error while getting the count.", exception: (w = (X = R.response.data.exception) !== null && X !== void 0 ? X : R.response.data.exc_type) !== null && w !== void 0 ? w : "" });
            })];
          });
        });
      }, g.prototype.getLastDoc = function(b, p) {
        return u(this, void 0, void 0, function() {
          var v, m;
          return r(this, function(h) {
            switch (h.label) {
              case 0:
                return v = { orderBy: { field: "creation", order: "desc" } }, p && (v = s(s({}, v), p)), [4, this.getDocList(b, s(s({}, v), { limit: 1, fields: ["name"] }))];
              case 1:
                return m = h.sent(), m.length > 0 ? [2, this.getDoc(b, m[0].name)] : [2, {}];
            }
          });
        });
      }, g.prototype.renameDoc = function(b, p, v, m) {
        return m === void 0 && (m = false), u(this, void 0, void 0, function() {
          return r(this, function(h) {
            return [2, this.axios.post("/api/method/frappe.client.rename_doc", { doctype: b, old_name: p, new_name: v, merge: m }).then(function(_) {
              return _.data;
            }).catch(function(_) {
              var R, X, w;
              throw s(s({}, _.response.data), { httpStatus: _.response.status, httpStatusText: _.response.statusText, message: (R = _.response.data.message) !== null && R !== void 0 ? R : "There was an error while renaming the document.", exception: (w = (X = _.response.data.exception) !== null && X !== void 0 ? X : _.response.data.exc_type) !== null && w !== void 0 ? w : "" });
            })];
          });
        });
      }, g.prototype.getValue = function(b, p, v, m, h, _) {
        return m === void 0 && (m = true), h === void 0 && (h = false), _ === void 0 && (_ = null), u(this, void 0, void 0, function() {
          var R;
          return r(this, function(X) {
            return R = { doctype: b, fieldname: "[]", filters: [], as_dict: m, debug: h, parent: null }, p && (R.fieldname = typeof p == "object" ? JSON.stringify(p) : p), v && (R.filters = v ? JSON.stringify(v) : void 0), _ && (R.parent = _), [2, this.axios.get("/api/method/frappe.client.get_value", { params: R }).then(function(w) {
              return w.data;
            }).catch(function(w) {
              var q, k;
              throw s(s({}, w.response.data), { httpStatus: w.response.status, httpStatusText: w.response.statusText, message: "There was an error while getting the value.", exception: (k = (q = w.response.data.exception) !== null && q !== void 0 ? q : w.response.data.exc_type) !== null && k !== void 0 ? k : "" });
            })];
          });
        });
      }, g.prototype.setValue = function(b, p, v, m) {
        return u(this, void 0, void 0, function() {
          return r(this, function(h) {
            return v !== null && typeof v == "object" && !Array.isArray(v) && (m = void 0), [2, this.axios.post("/api/method/frappe.client.set_value", { doctype: b, name: p, fieldname: v, value: m }).then(function(_) {
              return _.data;
            }).catch(function(_) {
              var R, X;
              throw s(s({}, _.response.data), { httpStatus: _.response.status, httpStatusText: _.response.statusText, message: "There was an error while setting the value.", exception: (X = (R = _.response.data.exception) !== null && R !== void 0 ? R : _.response.data.exc_type) !== null && X !== void 0 ? X : "" });
            })];
          });
        });
      }, g.prototype.getSingleValue = function(b, p) {
        return u(this, void 0, void 0, function() {
          var v;
          return r(this, function(m) {
            return v = { doctype: b, field: p }, [2, this.axios.get("/api/method/frappe.client.get_single_value", { params: v }).then(function(h) {
              return h.data;
            }).catch(function(h) {
              var _, R;
              throw s(s({}, h.response.data), { httpStatus: h.response.status, httpStatusText: h.response.statusText, message: "There was an error while getting the value of single doctype.", exception: (R = (_ = h.response.data.exception) !== null && _ !== void 0 ? _ : h.response.data.exc_type) !== null && R !== void 0 ? R : "" });
            })];
          });
        });
      }, g.prototype.submit = function(b) {
        return u(this, void 0, void 0, function() {
          return r(this, function(p) {
            return [2, this.axios.post("/api/method/frappe.client.submit", { doc: b }).then(function(v) {
              return v.data.message;
            }).catch(function(v) {
              var m, h;
              throw s(s({}, v.response.data), { httpStatus: v.response.status, httpStatusText: v.response.statusText, message: "There was an error while submitting the document.", exception: (h = (m = v.response.data.exception) !== null && m !== void 0 ? m : v.response.data.exc_type) !== null && h !== void 0 ? h : "" });
            })];
          });
        });
      }, g.prototype.cancel = function(b, p) {
        return u(this, void 0, void 0, function() {
          return r(this, function(v) {
            return [2, this.axios.post("/api/method/frappe.client.cancel", { doctype: b, name: p }).then(function(m) {
              return m.data;
            }).catch(function(m) {
              var h, _;
              throw s(s({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: "There was an error while cancelling the document.", exception: (_ = (h = m.response.data.exception) !== null && h !== void 0 ? h : m.response.data.exc_type) !== null && _ !== void 0 ? _ : "" });
            })];
          });
        });
      }, g;
    }();
    return xn.FrappeDB = o, xn;
  }
  var _n = {};
  var ha = {};
  var Lc;
  var em;
  function Tg() {
    if (em)
      return Lc;
    em = 1;
    function s(f, d) {
      return function() {
        return f.apply(d, arguments);
      };
    }
    const { toString: u } = Object.prototype, { getPrototypeOf: r } = Object, { iterator: o, toStringTag: g } = Symbol, b = ((f) => (d) => {
      const S = u.call(d);
      return f[S] || (f[S] = S.slice(8, -1).toLowerCase());
    })(/* @__PURE__ */ Object.create(null)), p = (f) => (f = f.toLowerCase(), (d) => b(d) === f), v = (f) => (d) => typeof d === f, { isArray: m } = Array, h = v("undefined");
    function _(f) {
      return f !== null && !h(f) && f.constructor !== null && !h(f.constructor) && q(f.constructor.isBuffer) && f.constructor.isBuffer(f);
    }
    const R = p("ArrayBuffer");
    function X(f) {
      let d;
      return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? d = ArrayBuffer.isView(f) : d = f && f.buffer && R(f.buffer), d;
    }
    const w = v("string"), q = v("function"), k = v("number"), ue = (f) => f !== null && typeof f == "object", ge = (f) => f === true || f === false, je = (f) => {
      if (b(f) !== "object")
        return false;
      const d = r(f);
      return (d === null || d === Object.prototype || Object.getPrototypeOf(d) === null) && !(g in f) && !(o in f);
    }, oe = (f) => {
      if (!ue(f) || _(f))
        return false;
      try {
        return Object.keys(f).length === 0 && Object.getPrototypeOf(f) === Object.prototype;
      } catch (d) {
        return false;
      }
    }, Oe = p("Date"), we = p("File"), Qe = p("Blob"), ce = p("FileList"), it = (f) => ue(f) && q(f.pipe), ht = (f) => {
      let d;
      return f && (typeof FormData == "function" && f instanceof FormData || q(f.append) && ((d = b(f)) === "formdata" || d === "object" && q(f.toString) && f.toString() === "[object FormData]"));
    }, Rt = p("URLSearchParams"), [dt, We, he, Se] = ["ReadableStream", "Request", "Response", "Headers"].map(p), se = (f) => f.trim ? f.trim() : f.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    function B(f, d, { allOwnKeys: S = false } = {}) {
      if (f === null || typeof f > "u")
        return;
      let x, E;
      if (typeof f != "object" && (f = [f]), m(f))
        for (x = 0, E = f.length; x < E; x++)
          d.call(null, f[x], x, f);
      else {
        if (_(f))
          return;
        const C = S ? Object.getOwnPropertyNames(f) : Object.keys(f), j = C.length;
        let K;
        for (x = 0; x < j; x++)
          K = C[x], d.call(null, f[K], K, f);
      }
    }
    function Q(f, d) {
      if (_(f))
        return null;
      d = d.toLowerCase();
      const S = Object.keys(f);
      let x = S.length, E;
      for (; x-- > 0; )
        if (E = S[x], d === E.toLowerCase())
          return E;
      return null;
    }
    const J = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : _g, ve = (f) => !h(f) && f !== J;
    function ze() {
      const { caseless: f, skipUndefined: d } = ve(this) && this || {}, S = {}, x = (E, C) => {
        const j = f && Q(S, C) || C;
        je(S[j]) && je(E) ? S[j] = ze(S[j], E) : je(E) ? S[j] = ze({}, E) : m(E) ? S[j] = E.slice() : (!d || !h(E)) && (S[j] = E);
      };
      for (let E = 0, C = arguments.length; E < C; E++)
        arguments[E] && B(arguments[E], x);
      return S;
    }
    const A = (f, d, S, { allOwnKeys: x } = {}) => (B(d, (E, C) => {
      S && q(E) ? f[C] = s(E, S) : f[C] = E;
    }, { allOwnKeys: x }), f), V = (f) => (f.charCodeAt(0) === 65279 && (f = f.slice(1)), f), P = (f, d, S, x) => {
      f.prototype = Object.create(d.prototype, x), f.prototype.constructor = f, Object.defineProperty(f, "super", { value: d.prototype }), S && Object.assign(f.prototype, S);
    }, te = (f, d, S, x) => {
      let E, C, j;
      const K = {};
      if (d = d || {}, f == null)
        return d;
      do {
        for (E = Object.getOwnPropertyNames(f), C = E.length; C-- > 0; )
          j = E[C], (!x || x(j, f, d)) && !K[j] && (d[j] = f[j], K[j] = true);
        f = S !== false && r(f);
      } while (f && (!S || S(f, d)) && f !== Object.prototype);
      return d;
    }, de = (f, d, S) => {
      f = String(f), (S === void 0 || S > f.length) && (S = f.length), S -= d.length;
      const x = f.indexOf(d, S);
      return x !== -1 && x === S;
    }, xe = (f) => {
      if (!f)
        return null;
      if (m(f))
        return f;
      let d = f.length;
      if (!k(d))
        return null;
      const S = new Array(d);
      for (; d-- > 0; )
        S[d] = f[d];
      return S;
    }, Ce = ((f) => (d) => f && d instanceof f)(typeof Uint8Array < "u" && r(Uint8Array)), xt = (f, d) => {
      const S = (f && f[o]).call(f);
      let x;
      for (; (x = S.next()) && !x.done; ) {
        const E = x.value;
        d.call(f, E[0], E[1]);
      }
    }, $e = (f, d) => {
      let S;
      const x = [];
      for (; (S = f.exec(d)) !== null; )
        x.push(S);
      return x;
    }, Za = p("HTMLFormElement"), El = (f) => f.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(d, S, x) {
      return S.toUpperCase() + x;
    }), Al = (({ hasOwnProperty: f }) => (d, S) => f.call(d, S))(Object.prototype), Cu = p("RegExp"), On = (f, d) => {
      const S = Object.getOwnPropertyDescriptors(f), x = {};
      B(S, (E, C) => {
        let j;
        (j = d(E, C, f)) !== false && (x[C] = j || E);
      }), Object.defineProperties(f, x);
    }, Ti = (f) => {
      On(f, (d, S) => {
        if (q(f) && ["arguments", "caller", "callee"].indexOf(S) !== -1)
          return false;
        const x = f[S];
        if (q(x)) {
          if (d.enumerable = false, "writable" in d) {
            d.writable = false;
            return;
          }
          d.set || (d.set = () => {
            throw Error("Can not rewrite read-only method '" + S + "'");
          });
        }
      });
    }, Ei = (f, d) => {
      const S = {}, x = (E) => {
        E.forEach((C) => {
          S[C] = true;
        });
      };
      return m(f) ? x(f) : x(String(f).split(d)), S;
    }, Er = () => {
    }, Uu = (f, d) => f != null && Number.isFinite(f = +f) ? f : d;
    function Ai(f) {
      return !!(f && q(f.append) && f[g] === "FormData" && f[o]);
    }
    const Oi = (f) => {
      const d = new Array(10), S = (x, E) => {
        if (ue(x)) {
          if (d.indexOf(x) >= 0)
            return;
          if (_(x))
            return x;
          if (!("toJSON" in x)) {
            d[E] = x;
            const C = m(x) ? [] : {};
            return B(x, (j, K) => {
              const ne = S(j, E + 1);
              !h(ne) && (C[K] = ne);
            }), d[E] = void 0, C;
          }
        }
        return x;
      };
      return S(f, 0);
    }, wi = p("AsyncFunction"), Ar = (f) => f && (ue(f) || q(f)) && q(f.then) && q(f.catch), Du = ((f, d) => f ? setImmediate : d ? ((S, x) => (J.addEventListener("message", ({ source: E, data: C }) => {
      E === J && C === S && x.length && x.shift()();
    }, false), (E) => {
      x.push(E), J.postMessage(S, "*");
    }))(`axios@${Math.random()}`, []) : (S) => setTimeout(S))(typeof setImmediate == "function", q(J.postMessage)), Nt = typeof queueMicrotask < "u" ? queueMicrotask.bind(J) : typeof process < "u" && process.nextTick || Du;
    var H = { isArray: m, isArrayBuffer: R, isBuffer: _, isFormData: ht, isArrayBufferView: X, isString: w, isNumber: k, isBoolean: ge, isObject: ue, isPlainObject: je, isEmptyObject: oe, isReadableStream: dt, isRequest: We, isResponse: he, isHeaders: Se, isUndefined: h, isDate: Oe, isFile: we, isBlob: Qe, isRegExp: Cu, isFunction: q, isStream: it, isURLSearchParams: Rt, isTypedArray: Ce, isFileList: ce, forEach: B, merge: ze, extend: A, trim: se, stripBOM: V, inherits: P, toFlatObject: te, kindOf: b, kindOfTest: p, endsWith: de, toArray: xe, forEachEntry: xt, matchAll: $e, isHTMLForm: Za, hasOwnProperty: Al, hasOwnProp: Al, reduceDescriptors: On, freezeMethods: Ti, toObjectSet: Ei, toCamelCase: El, noop: Er, toFiniteNumber: Uu, findKey: Q, global: J, isContextDefined: ve, isSpecCompliantForm: Ai, toJSONObject: Oi, isAsyncFn: wi, isThenable: Ar, setImmediate: Du, asap: Nt, isIterable: (f) => f != null && q(f[o]) };
    function fe(f, d, S, x, E) {
      Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = f, this.name = "AxiosError", d && (this.code = d), S && (this.config = S), x && (this.request = x), E && (this.response = E, this.status = E.status ? E.status : null);
    }
    H.inherits(fe, Error, { toJSON: function() {
      return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: H.toJSONObject(this.config), code: this.code, status: this.status };
    } });
    const Ri = fe.prototype, ka = {};
    ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((f) => {
      ka[f] = { value: f };
    }), Object.defineProperties(fe, ka), Object.defineProperty(Ri, "isAxiosError", { value: true }), fe.from = (f, d, S, x, E, C) => {
      const j = Object.create(Ri);
      H.toFlatObject(f, j, function(F) {
        return F !== Error.prototype;
      }, (F) => F !== "isAxiosError");
      const K = f && f.message ? f.message : "Error", ne = d == null && f ? f.code : d;
      return fe.call(j, K, ne, S, x, E), f && j.cause == null && Object.defineProperty(j, "cause", { value: f, configurable: true }), j.name = f && f.name || "Error", C && Object.assign(j, C), j;
    };
    var Or = null;
    function Ol(f) {
      return H.isPlainObject(f) || H.isArray(f);
    }
    function Mu(f) {
      return H.endsWith(f, "[]") ? f.slice(0, -2) : f;
    }
    function Bu(f, d, S) {
      return f ? f.concat(d).map(function(x, E) {
        return x = Mu(x), !S && E ? "[" + x + "]" : x;
      }).join(S ? "." : "") : d;
    }
    function Ka(f) {
      return H.isArray(f) && !f.some(Ol);
    }
    const zt = H.toFlatObject(H, {}, null, function(f) {
      return /^is[A-Z]/.test(f);
    });
    function Qt(f, d, S) {
      if (!H.isObject(f))
        throw new TypeError("target must be an object");
      d = d || new FormData(), S = H.toFlatObject(S, { metaTokens: true, dots: false, indexes: false }, false, function(pe, $) {
        return !H.isUndefined($[pe]);
      });
      const x = S.metaTokens, E = S.visitor || F, C = S.dots, j = S.indexes, K = (S.Blob || typeof Blob < "u" && Blob) && H.isSpecCompliantForm(d);
      if (!H.isFunction(E))
        throw new TypeError("visitor must be a function");
      function ne(pe) {
        if (pe === null)
          return "";
        if (H.isDate(pe))
          return pe.toISOString();
        if (H.isBoolean(pe))
          return pe.toString();
        if (!K && H.isBlob(pe))
          throw new fe("Blob is not supported. Use a Buffer instead.");
        return H.isArrayBuffer(pe) || H.isTypedArray(pe) ? K && typeof Blob == "function" ? new Blob([pe]) : Buffer.from(pe) : pe;
      }
      function F(pe, $, I) {
        let ke = pe;
        if (pe && !I && typeof pe == "object") {
          if (H.endsWith($, "{}"))
            $ = x ? $ : $.slice(0, -2), pe = JSON.stringify(pe);
          else if (H.isArray(pe) && Ka(pe) || (H.isFileList(pe) || H.endsWith($, "[]")) && (ke = H.toArray(pe)))
            return $ = Mu($), ke.forEach(function(bt, nt) {
              !(H.isUndefined(bt) || bt === null) && d.append(j === true ? Bu([$], nt, C) : j === null ? $ : $ + "[]", ne(bt));
            }), false;
        }
        return Ol(pe) ? true : (d.append(Bu(I, $, C), ne(pe)), false);
      }
      const W = [], re = Object.assign(zt, { defaultVisitor: F, convertValue: ne, isVisitable: Ol });
      function He(pe, $) {
        if (!H.isUndefined(pe)) {
          if (W.indexOf(pe) !== -1)
            throw Error("Circular reference detected in " + $.join("."));
          W.push(pe), H.forEach(pe, function(I, ke) {
            (!(H.isUndefined(I) || I === null) && E.call(d, I, H.isString(ke) ? ke.trim() : ke, $, re)) === true && He(I, $ ? $.concat(ke) : [ke]);
          }), W.pop();
        }
      }
      if (!H.isObject(f))
        throw new TypeError("data must be an object");
      return He(f), d;
    }
    function Ot(f) {
      const d = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
      return encodeURIComponent(f).replace(/[!'()~]|%20|%00/g, function(S) {
        return d[S];
      });
    }
    function Ni(f, d) {
      this._pairs = [], f && Qt(f, this, d);
    }
    const qu = Ni.prototype;
    qu.append = function(f, d) {
      this._pairs.push([f, d]);
    }, qu.toString = function(f) {
      const d = f ? function(S) {
        return f.call(this, S, Ot);
      } : Ot;
      return this._pairs.map(function(S) {
        return d(S[0]) + "=" + d(S[1]);
      }, "").join("&");
    };
    function wr(f) {
      return encodeURIComponent(f).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
    }
    function Ja(f, d, S) {
      if (!d)
        return f;
      const x = S && S.encode || wr;
      H.isFunction(S) && (S = { serialize: S });
      const E = S && S.serialize;
      let C;
      if (E ? C = E(d, S) : C = H.isURLSearchParams(d) ? d.toString() : new Ni(d, S).toString(x), C) {
        const j = f.indexOf("#");
        j !== -1 && (f = f.slice(0, j)), f += (f.indexOf("?") === -1 ? "?" : "&") + C;
      }
      return f;
    }
    class wl {
      constructor() {
        this.handlers = [];
      }
      use(d, S, x) {
        return this.handlers.push({ fulfilled: d, rejected: S, synchronous: x ? x.synchronous : false, runWhen: x ? x.runWhen : null }), this.handlers.length - 1;
      }
      eject(d) {
        this.handlers[d] && (this.handlers[d] = null);
      }
      clear() {
        this.handlers && (this.handlers = []);
      }
      forEach(d) {
        H.forEach(this.handlers, function(S) {
          S !== null && d(S);
        });
      }
    }
    var Fa = wl, wn = { silentJSONParsing: true, forcedJSONParsing: true, clarifyTimeoutError: false }, Rl = typeof URLSearchParams < "u" ? URLSearchParams : Ni, Wa = typeof FormData < "u" ? FormData : null, Rr = typeof Blob < "u" ? Blob : null, Hu = { isBrowser: true, classes: { URLSearchParams: Rl, FormData: Wa, Blob: Rr }, protocols: ["http", "https", "file", "blob", "url", "data"] };
    const $a = typeof window < "u" && typeof document < "u", Xn = typeof navigator == "object" && navigator || void 0, Nr = $a && (!Xn || ["ReactNative", "NativeScript", "NS"].indexOf(Xn.product) < 0), Lu = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Yu = $a && window.location.href || "http://localhost";
    var Xu = Object.freeze({ __proto__: null, hasBrowserEnv: $a, hasStandardBrowserWebWorkerEnv: Lu, hasStandardBrowserEnv: Nr, navigator: Xn, origin: Yu }), ut = Ze(Ze({}, Xu), Hu);
    function zi(f, d) {
      return Qt(f, new ut.classes.URLSearchParams(), Ze({ visitor: function(S, x, E, C) {
        return ut.isNode && H.isBuffer(S) ? (this.append(x, S.toString("base64")), false) : C.defaultVisitor.apply(this, arguments);
      } }, d));
    }
    function Qu(f) {
      return H.matchAll(/\w+|\[(\w*)]/g, f).map((d) => d[0] === "[]" ? "" : d[1] || d[0]);
    }
    function Gu(f) {
      const d = {}, S = Object.keys(f);
      let x;
      const E = S.length;
      let C;
      for (x = 0; x < E; x++)
        C = S[x], d[C] = f[C];
      return d;
    }
    function mn(f) {
      function d(S, x, E, C) {
        let j = S[C++];
        if (j === "__proto__")
          return true;
        const K = Number.isFinite(+j), ne = C >= S.length;
        return j = !j && H.isArray(E) ? E.length : j, ne ? (H.hasOwnProp(E, j) ? E[j] = [E[j], x] : E[j] = x, !K) : ((!E[j] || !H.isObject(E[j])) && (E[j] = []), d(S, x, E[j], C) && H.isArray(E[j]) && (E[j] = Gu(E[j])), !K);
      }
      if (H.isFormData(f) && H.isFunction(f.entries)) {
        const S = {};
        return H.forEachEntry(f, (x, E) => {
          d(Qu(x), E, S, 0);
        }), S;
      }
      return null;
    }
    function pt(f, d, S) {
      if (H.isString(f))
        try {
          return (d || JSON.parse)(f), H.trim(f);
        } catch (x) {
          if (x.name !== "SyntaxError")
            throw x;
        }
      return (S || JSON.stringify)(f);
    }
    const gt = { transitional: wn, adapter: ["xhr", "http", "fetch"], transformRequest: [function(f, d) {
      const S = d.getContentType() || "", x = S.indexOf("application/json") > -1, E = H.isObject(f);
      if (E && H.isHTMLForm(f) && (f = new FormData(f)), H.isFormData(f))
        return x ? JSON.stringify(mn(f)) : f;
      if (H.isArrayBuffer(f) || H.isBuffer(f) || H.isStream(f) || H.isFile(f) || H.isBlob(f) || H.isReadableStream(f))
        return f;
      if (H.isArrayBufferView(f))
        return f.buffer;
      if (H.isURLSearchParams(f))
        return d.setContentType("application/x-www-form-urlencoded;charset=utf-8", false), f.toString();
      let C;
      if (E) {
        if (S.indexOf("application/x-www-form-urlencoded") > -1)
          return zi(f, this.formSerializer).toString();
        if ((C = H.isFileList(f)) || S.indexOf("multipart/form-data") > -1) {
          const j = this.env && this.env.FormData;
          return Qt(C ? { "files[]": f } : f, j && new j(), this.formSerializer);
        }
      }
      return E || x ? (d.setContentType("application/json", false), pt(f)) : f;
    }], transformResponse: [function(f) {
      const d = this.transitional || gt.transitional, S = d && d.forcedJSONParsing, x = this.responseType === "json";
      if (H.isResponse(f) || H.isReadableStream(f))
        return f;
      if (f && H.isString(f) && (S && !this.responseType || x)) {
        const E = !(d && d.silentJSONParsing) && x;
        try {
          return JSON.parse(f, this.parseReviver);
        } catch (C) {
          if (E)
            throw C.name === "SyntaxError" ? fe.from(C, fe.ERR_BAD_RESPONSE, this, null, this.response) : C;
        }
      }
      return f;
    }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, env: { FormData: ut.classes.FormData, Blob: ut.classes.Blob }, validateStatus: function(f) {
      return f >= 200 && f < 300;
    }, headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } } };
    H.forEach(["delete", "get", "head", "post", "put", "patch"], (f) => {
      gt.headers[f] = {};
    });
    var Rn = gt;
    const ji = H.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);
    var zr = (f) => {
      const d = {};
      let S, x, E;
      return f && f.split(`
`).forEach(function(C) {
        E = C.indexOf(":"), S = C.substring(0, E).trim().toLowerCase(), x = C.substring(E + 1).trim(), !(!S || d[S] && ji[S]) && (S === "set-cookie" ? d[S] ? d[S].push(x) : d[S] = [x] : d[S] = d[S] ? d[S] + ", " + x : x);
      }), d;
    };
    const Vu = Symbol("internals");
    function da(f) {
      return f && String(f).trim().toLowerCase();
    }
    function Nn(f) {
      return f === false || f == null ? f : H.isArray(f) ? f.map(Nn) : String(f);
    }
    function Ci(f) {
      const d = /* @__PURE__ */ Object.create(null), S = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
      let x;
      for (; x = S.exec(f); )
        d[x[1]] = x[2];
      return d;
    }
    const pa = (f) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(f.trim());
    function zn(f, d, S, x, E) {
      if (H.isFunction(x))
        return x.call(this, d, S);
      if (E && (d = S), !!H.isString(d)) {
        if (H.isString(x))
          return d.indexOf(x) !== -1;
        if (H.isRegExp(x))
          return x.test(d);
      }
    }
    function Pa(f) {
      return f.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (d, S, x) => S.toUpperCase() + x);
    }
    function ma(f, d) {
      const S = H.toCamelCase(" " + d);
      ["get", "set", "has"].forEach((x) => {
        Object.defineProperty(f, x + S, { value: function(E, C, j) {
          return this[x].call(this, d, E, C, j);
        }, configurable: true });
      });
    }
    class Pe {
      constructor(d) {
        d && this.set(d);
      }
      set(d, S, x) {
        const E = this;
        function C(K, ne, F) {
          const W = da(ne);
          if (!W)
            throw new Error("header name must be a non-empty string");
          const re = H.findKey(E, W);
          (!re || E[re] === void 0 || F === true || F === void 0 && E[re] !== false) && (E[re || ne] = Nn(K));
        }
        const j = (K, ne) => H.forEach(K, (F, W) => C(F, W, ne));
        if (H.isPlainObject(d) || d instanceof this.constructor)
          j(d, S);
        else if (H.isString(d) && (d = d.trim()) && !pa(d))
          j(zr(d), S);
        else if (H.isObject(d) && H.isIterable(d)) {
          let K = {}, ne, F;
          for (const W of d) {
            if (!H.isArray(W))
              throw TypeError("Object iterator must return a key-value pair");
            K[F = W[0]] = (ne = K[F]) ? H.isArray(ne) ? [...ne, W[1]] : [ne, W[1]] : W[1];
          }
          j(K, S);
        } else
          d != null && C(S, d, x);
        return this;
      }
      get(d, S) {
        if (d = da(d), d) {
          const x = H.findKey(this, d);
          if (x) {
            const E = this[x];
            if (!S)
              return E;
            if (S === true)
              return Ci(E);
            if (H.isFunction(S))
              return S.call(this, E, x);
            if (H.isRegExp(S))
              return S.exec(E);
            throw new TypeError("parser must be boolean|regexp|function");
          }
        }
      }
      has(d, S) {
        if (d = da(d), d) {
          const x = H.findKey(this, d);
          return !!(x && this[x] !== void 0 && (!S || zn(this, this[x], x, S)));
        }
        return false;
      }
      delete(d, S) {
        const x = this;
        let E = false;
        function C(j) {
          if (j = da(j), j) {
            const K = H.findKey(x, j);
            K && (!S || zn(x, x[K], K, S)) && (delete x[K], E = true);
          }
        }
        return H.isArray(d) ? d.forEach(C) : C(d), E;
      }
      clear(d) {
        const S = Object.keys(this);
        let x = S.length, E = false;
        for (; x--; ) {
          const C = S[x];
          (!d || zn(this, this[C], C, d, true)) && (delete this[C], E = true);
        }
        return E;
      }
      normalize(d) {
        const S = this, x = {};
        return H.forEach(this, (E, C) => {
          const j = H.findKey(x, C);
          if (j) {
            S[j] = Nn(E), delete S[C];
            return;
          }
          const K = d ? Pa(C) : String(C).trim();
          K !== C && delete S[C], S[K] = Nn(E), x[K] = true;
        }), this;
      }
      concat(...d) {
        return this.constructor.concat(this, ...d);
      }
      toJSON(d) {
        const S = /* @__PURE__ */ Object.create(null);
        return H.forEach(this, (x, E) => {
          x != null && x !== false && (S[E] = d && H.isArray(x) ? x.join(", ") : x);
        }), S;
      }
      [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
      }
      toString() {
        return Object.entries(this.toJSON()).map(([d, S]) => d + ": " + S).join(`
`);
      }
      getSetCookie() {
        return this.get("set-cookie") || [];
      }
      get [Symbol.toStringTag]() {
        return "AxiosHeaders";
      }
      static from(d) {
        return d instanceof this ? d : new this(d);
      }
      static concat(d, ...S) {
        const x = new this(d);
        return S.forEach((E) => x.set(E)), x;
      }
      static accessor(d) {
        const S = (this[Vu] = this[Vu] = { accessors: {} }).accessors, x = this.prototype;
        function E(C) {
          const j = da(C);
          S[j] || (ma(x, C), S[j] = true);
        }
        return H.isArray(d) ? d.forEach(E) : E(d), this;
      }
    }
    Pe.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), H.reduceDescriptors(Pe.prototype, ({ value: f }, d) => {
      let S = d[0].toUpperCase() + d.slice(1);
      return { get: () => f, set(x) {
        this[S] = x;
      } };
    }), H.freezeMethods(Pe);
    var Ut = Pe;
    function Nl(f, d) {
      const S = this || Rn, x = d || S, E = Ut.from(x.headers);
      let C = x.data;
      return H.forEach(f, function(j) {
        C = j.call(S, C, E.normalize(), d ? d.status : void 0);
      }), E.normalize(), C;
    }
    function jn(f) {
      return !!(f && f.__CANCEL__);
    }
    function Gt(f, d, S) {
      fe.call(this, f != null ? f : "canceled", fe.ERR_CANCELED, d, S), this.name = "CanceledError";
    }
    H.inherits(Gt, fe, { __CANCEL__: true });
    function Zu(f, d, S) {
      const x = S.config.validateStatus;
      !S.status || !x || x(S.status) ? f(S) : d(new fe("Request failed with status code " + S.status, [fe.ERR_BAD_REQUEST, fe.ERR_BAD_RESPONSE][Math.floor(S.status / 100) - 4], S.config, S.request, S));
    }
    function ku(f) {
      const d = /^([-+\w]{1,25})(:?\/\/|:)/.exec(f);
      return d && d[1] || "";
    }
    function Ku(f, d) {
      f = f || 10;
      const S = new Array(f), x = new Array(f);
      let E = 0, C = 0, j;
      return d = d !== void 0 ? d : 1e3, function(K) {
        const ne = Date.now(), F = x[C];
        j || (j = ne), S[E] = K, x[E] = ne;
        let W = C, re = 0;
        for (; W !== E; )
          re += S[W++], W = W % f;
        if (E = (E + 1) % f, E === C && (C = (C + 1) % f), ne - j < d)
          return;
        const He = F && ne - F;
        return He ? Math.round(re * 1e3 / He) : void 0;
      };
    }
    function jr(f, d) {
      let S = 0, x = 1e3 / d, E, C;
      const j = (K, ne = Date.now()) => {
        S = ne, E = null, C && (clearTimeout(C), C = null), f(...K);
      };
      return [(...K) => {
        const ne = Date.now(), F = ne - S;
        F >= x ? j(K, ne) : (E = K, C || (C = setTimeout(() => {
          C = null, j(E);
        }, x - F)));
      }, () => E && j(E)];
    }
    const Qn = (f, d, S = 3) => {
      let x = 0;
      const E = Ku(50, 250);
      return jr((C) => {
        const j = C.loaded, K = C.lengthComputable ? C.total : void 0, ne = j - x, F = E(ne), W = j <= K;
        x = j;
        const re = { loaded: j, total: K, progress: K ? j / K : void 0, bytes: ne, rate: F || void 0, estimated: F && K && W ? (K - j) / F : void 0, event: C, lengthComputable: K != null, [d ? "download" : "upload"]: true };
        f(re);
      }, S);
    }, Ia = (f, d) => {
      const S = f != null;
      return [(x) => d[0]({ lengthComputable: S, total: f, loaded: x }), d[1]];
    }, Pt = (f) => (...d) => H.asap(() => f(...d));
    var Dt = ut.hasStandardBrowserEnv ? ((f, d) => (S) => (S = new URL(S, ut.origin), f.protocol === S.protocol && f.host === S.host && (d || f.port === S.port)))(new URL(ut.origin), ut.navigator && /(msie|trident)/i.test(ut.navigator.userAgent)) : () => true, Ju = ut.hasStandardBrowserEnv ? { write(f, d, S, x, E, C) {
      const j = [f + "=" + encodeURIComponent(d)];
      H.isNumber(S) && j.push("expires=" + new Date(S).toGMTString()), H.isString(x) && j.push("path=" + x), H.isString(E) && j.push("domain=" + E), C === true && j.push("secure"), document.cookie = j.join("; ");
    }, read(f) {
      const d = document.cookie.match(new RegExp("(^|;\\s*)(" + f + ")=([^;]*)"));
      return d ? decodeURIComponent(d[3]) : null;
    }, remove(f) {
      this.write(f, "", Date.now() - 864e5);
    } } : { write() {
    }, read() {
      return null;
    }, remove() {
    } };
    function Cr(f) {
      return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(f);
    }
    function Ui(f, d) {
      return d ? f.replace(/\/?\/$/, "") + "/" + d.replace(/^\/+/, "") : f;
    }
    function Di(f, d, S) {
      let x = !Cr(d);
      return f && (x || S == false) ? Ui(f, d) : d;
    }
    const el = (f) => f instanceof Ut ? Ze({}, f) : f;
    function Gn(f, d) {
      d = d || {};
      const S = {};
      function x(F, W, re, He) {
        return H.isPlainObject(F) && H.isPlainObject(W) ? H.merge.call({ caseless: He }, F, W) : H.isPlainObject(W) ? H.merge({}, W) : H.isArray(W) ? W.slice() : W;
      }
      function E(F, W, re, He) {
        if (H.isUndefined(W)) {
          if (!H.isUndefined(F))
            return x(void 0, F, re, He);
        } else
          return x(F, W, re, He);
      }
      function C(F, W) {
        if (!H.isUndefined(W))
          return x(void 0, W);
      }
      function j(F, W) {
        if (H.isUndefined(W)) {
          if (!H.isUndefined(F))
            return x(void 0, F);
        } else
          return x(void 0, W);
      }
      function K(F, W, re) {
        if (re in d)
          return x(F, W);
        if (re in f)
          return x(void 0, F);
      }
      const ne = { url: C, method: C, data: C, baseURL: j, transformRequest: j, transformResponse: j, paramsSerializer: j, timeout: j, timeoutMessage: j, withCredentials: j, withXSRFToken: j, adapter: j, responseType: j, xsrfCookieName: j, xsrfHeaderName: j, onUploadProgress: j, onDownloadProgress: j, decompress: j, maxContentLength: j, maxBodyLength: j, beforeRedirect: j, transport: j, httpAgent: j, httpsAgent: j, cancelToken: j, socketPath: j, responseEncoding: j, validateStatus: K, headers: (F, W, re) => E(el(F), el(W), re, true) };
      return H.forEach(Object.keys(Ze(Ze({}, f), d)), function(F) {
        const W = ne[F] || E, re = W(f[F], d[F], F);
        H.isUndefined(re) && W !== K || (S[F] = re);
      }), S;
    }
    var jt = (f) => {
      const d = Gn({}, f);
      let { data: S, withXSRFToken: x, xsrfHeaderName: E, xsrfCookieName: C, headers: j, auth: K } = d;
      if (d.headers = j = Ut.from(j), d.url = Ja(Di(d.baseURL, d.url, d.allowAbsoluteUrls), f.params, f.paramsSerializer), K && j.set("Authorization", "Basic " + btoa((K.username || "") + ":" + (K.password ? unescape(encodeURIComponent(K.password)) : ""))), H.isFormData(S)) {
        if (ut.hasStandardBrowserEnv || ut.hasStandardBrowserWebWorkerEnv)
          j.setContentType(void 0);
        else if (H.isFunction(S.getHeaders)) {
          const ne = S.getHeaders(), F = ["content-type", "content-length"];
          Object.entries(ne).forEach(([W, re]) => {
            F.includes(W.toLowerCase()) && j.set(W, re);
          });
        }
      }
      if (ut.hasStandardBrowserEnv && (x && H.isFunction(x) && (x = x(d)), x || x !== false && Dt(d.url))) {
        const ne = E && C && Ju.read(C);
        ne && j.set(E, ne);
      }
      return d;
    }, Mi = typeof XMLHttpRequest < "u" && function(f) {
      return new Promise(function(d, S) {
        const x = jt(f);
        let E = x.data;
        const C = Ut.from(x.headers).normalize();
        let { responseType: j, onUploadProgress: K, onDownloadProgress: ne } = x, F, W, re, He, pe;
        function $() {
          He && He(), pe && pe(), x.cancelToken && x.cancelToken.unsubscribe(F), x.signal && x.signal.removeEventListener("abort", F);
        }
        let I = new XMLHttpRequest();
        I.open(x.method.toUpperCase(), x.url, true), I.timeout = x.timeout;
        function ke() {
          if (!I)
            return;
          const nt = Ut.from("getAllResponseHeaders" in I && I.getAllResponseHeaders()), tn = { data: !j || j === "text" || j === "json" ? I.responseText : I.response, status: I.status, statusText: I.statusText, headers: nt, config: f, request: I };
          Zu(function(nn) {
            d(nn), $();
          }, function(nn) {
            S(nn), $();
          }, tn), I = null;
        }
        "onloadend" in I ? I.onloadend = ke : I.onreadystatechange = function() {
          !I || I.readyState !== 4 || I.status === 0 && !(I.responseURL && I.responseURL.indexOf("file:") === 0) || setTimeout(ke);
        }, I.onabort = function() {
          I && (S(new fe("Request aborted", fe.ECONNABORTED, f, I)), I = null);
        }, I.onerror = function(nt) {
          const tn = nt && nt.message ? nt.message : "Network Error", nn = new fe(tn, fe.ERR_NETWORK, f, I);
          nn.event = nt || null, S(nn), I = null;
        }, I.ontimeout = function() {
          let nt = x.timeout ? "timeout of " + x.timeout + "ms exceeded" : "timeout exceeded";
          const tn = x.transitional || wn;
          x.timeoutErrorMessage && (nt = x.timeoutErrorMessage), S(new fe(nt, tn.clarifyTimeoutError ? fe.ETIMEDOUT : fe.ECONNABORTED, f, I)), I = null;
        }, E === void 0 && C.setContentType(null), "setRequestHeader" in I && H.forEach(C.toJSON(), function(nt, tn) {
          I.setRequestHeader(tn, nt);
        }), H.isUndefined(x.withCredentials) || (I.withCredentials = !!x.withCredentials), j && j !== "json" && (I.responseType = x.responseType), ne && ([re, pe] = Qn(ne, true), I.addEventListener("progress", re)), K && I.upload && ([W, He] = Qn(K), I.upload.addEventListener("progress", W), I.upload.addEventListener("loadend", He)), (x.cancelToken || x.signal) && (F = (nt) => {
          I && (S(!nt || nt.type ? new Gt(null, f, I) : nt), I.abort(), I = null);
        }, x.cancelToken && x.cancelToken.subscribe(F), x.signal && (x.signal.aborted ? F() : x.signal.addEventListener("abort", F)));
        const bt = ku(x.url);
        if (bt && ut.protocols.indexOf(bt) === -1) {
          S(new fe("Unsupported protocol " + bt + ":", fe.ERR_BAD_REQUEST, f));
          return;
        }
        I.send(E || null);
      });
    }, Fu = (f, d) => {
      const { length: S } = f = f ? f.filter(Boolean) : [];
      if (d || S) {
        let x = new AbortController(), E;
        const C = function(F) {
          if (!E) {
            E = true, K();
            const W = F instanceof Error ? F : this.reason;
            x.abort(W instanceof fe ? W : new Gt(W instanceof Error ? W.message : W));
          }
        };
        let j = d && setTimeout(() => {
          j = null, C(new fe(`timeout ${d} of ms exceeded`, fe.ETIMEDOUT));
        }, d);
        const K = () => {
          f && (j && clearTimeout(j), j = null, f.forEach((F) => {
            F.unsubscribe ? F.unsubscribe(C) : F.removeEventListener("abort", C);
          }), f = null);
        };
        f.forEach((F) => F.addEventListener("abort", C));
        const { signal: ne } = x;
        return ne.unsubscribe = () => H.asap(K), ne;
      }
    };
    const Bi = function* (f, d) {
      let S = f.byteLength;
      if (S < d) {
        yield f;
        return;
      }
      let x = 0, E;
      for (; x < S; )
        E = x + d, yield f.slice(x, E), x = E;
    }, ya = function(f, d) {
      return zc(this, null, function* () {
        try {
          for (var S = Lp(Wu(f)), x, E, C; x = !(E = yield new Sl(S.next())).done; x = false) {
            const j = E.value;
            yield* jc(Bi(j, d));
          }
        } catch (E2) {
          C = [E2];
        } finally {
          try {
            x && (E = S.return) && (yield new Sl(E.call(S)));
          } finally {
            if (C)
              throw C[0];
          }
        }
      });
    }, Wu = function(f) {
      return zc(this, null, function* () {
        if (f[Symbol.asyncIterator]) {
          yield* jc(f);
          return;
        }
        const d = f.getReader();
        try {
          for (; ; ) {
            const { done: S, value: x } = yield new Sl(d.read());
            if (S)
              break;
            yield x;
          }
        } finally {
          yield new Sl(d.cancel());
        }
      });
    }, qi = (f, d, S, x) => {
      const E = ya(f, d);
      let C = 0, j, K = (F) => {
        j || (j = true, x && x(F));
      };
      return new ReadableStream({ pull(F) {
        return fa(this, null, function* () {
          try {
            const { done: W, value: re } = yield E.next();
            if (W) {
              K(), F.close();
              return;
            }
            let He = re.byteLength;
            if (S) {
              let pe = C += He;
              S(pe);
            }
            F.enqueue(new Uint8Array(re));
          } catch (W) {
            throw K(W), W;
          }
        });
      }, cancel(F) {
        return K(F), E.return();
      } }, { highWaterMark: 2 });
    }, Vn = 64 * 1024, { isFunction: zl } = H, $u = (({ Request: f, Response: d }) => ({ Request: f, Response: d }))(H.global), { ReadableStream: Hi, TextEncoder: jl } = H.global, Pu = (f, ...d) => {
      try {
        return !!f(...d);
      } catch (S) {
        return false;
      }
    }, Ur = (f) => {
      f = H.merge.call({ skipUndefined: true }, $u, f);
      const { fetch: d, Request: S, Response: x } = f, E = d ? zl(d) : typeof fetch == "function", C = zl(S), j = zl(x);
      if (!E)
        return false;
      const K = E && zl(Hi), ne = E && (typeof jl == "function" ? (($) => (I) => $.encode(I))(new jl()) : ($) => fa(null, null, function* () {
        return new Uint8Array(yield new S($).arrayBuffer());
      })), F = C && K && Pu(() => {
        let $ = false;
        const I = new S(ut.origin, { body: new Hi(), method: "POST", get duplex() {
          return $ = true, "half";
        } }).headers.has("Content-Type");
        return $ && !I;
      }), W = j && K && Pu(() => H.isReadableStream(new x("").body)), re = { stream: W && (($) => $.body) };
      E && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(($) => {
        !re[$] && (re[$] = (I, ke) => {
          let bt = I && I[$];
          if (bt)
            return bt.call(I);
          throw new fe(`Response type '${$}' is not supported`, fe.ERR_NOT_SUPPORT, ke);
        });
      });
      const He = ($) => fa(null, null, function* () {
        if ($ == null)
          return 0;
        if (H.isBlob($))
          return $.size;
        if (H.isSpecCompliantForm($))
          return (yield new S(ut.origin, { method: "POST", body: $ }).arrayBuffer()).byteLength;
        if (H.isArrayBufferView($) || H.isArrayBuffer($))
          return $.byteLength;
        if (H.isURLSearchParams($) && ($ = $ + ""), H.isString($))
          return (yield ne($)).byteLength;
      }), pe = ($, I) => fa(null, null, function* () {
        const ke = H.toFiniteNumber($.getContentLength());
        return ke != null ? ke : He(I);
      });
      return ($) => fa(null, null, function* () {
        let { url: I, method: ke, data: bt, signal: nt, cancelToken: tn, timeout: nn, onDownloadProgress: Xi, onUploadProgress: es, responseType: Dn, headers: Ll, withCredentials: Yl = "same-origin", fetchOptions: ts } = jt($), ns = d || fetch;
        Dn = Dn ? (Dn + "").toLowerCase() : "text";
        let Xl = Fu([nt, tn && tn.toAbortSignal()], nn), al = null;
        const Jn = Xl && Xl.unsubscribe && (() => {
          Xl.unsubscribe();
        });
        let as;
        try {
          if (es && F && ke !== "get" && ke !== "head" && (as = yield pe(Ll, bt)) !== 0) {
            let yn = new S(I, { method: "POST", body: bt, duplex: "half" }), Fn;
            if (H.isFormData(bt) && (Fn = yn.headers.get("content-type")) && Ll.setContentType(Fn), yn.body) {
              const [Ql, ll] = Ia(as, Qn(Pt(es)));
              bt = qi(yn.body, Vn, Ql, ll);
            }
          }
          H.isString(Yl) || (Yl = Yl ? "include" : "omit");
          const an = C && "credentials" in S.prototype, ls = Yt(Ze({}, ts), { signal: Xl, method: ke.toUpperCase(), headers: Ll.normalize().toJSON(), body: bt, duplex: "half", credentials: an ? Yl : void 0 });
          al = C && new S(I, ls);
          let ln = yield C ? ns(al, ts) : ns(I, ls);
          const ba = W && (Dn === "stream" || Dn === "response");
          if (W && (Xi || ba && Jn)) {
            const yn = {};
            ["status", "statusText", "headers"].forEach((Qi) => {
              yn[Qi] = ln[Qi];
            });
            const Fn = H.toFiniteNumber(ln.headers.get("content-length")), [Ql, ll] = Xi && Ia(Fn, Qn(Pt(Xi), true)) || [];
            ln = new x(qi(ln.body, Vn, Ql, () => {
              ll && ll(), Jn && Jn();
            }), yn);
          }
          Dn = Dn || "text";
          let Dr = yield re[H.findKey(re, Dn) || "text"](ln, $);
          return !ba && Jn && Jn(), yield new Promise((yn, Fn) => {
            Zu(yn, Fn, { data: Dr, headers: Ut.from(ln.headers), status: ln.status, statusText: ln.statusText, config: $, request: al });
          });
        } catch (an) {
          throw Jn && Jn(), an && an.name === "TypeError" && /Load failed|fetch/i.test(an.message) ? Object.assign(new fe("Network Error", fe.ERR_NETWORK, $, al), { cause: an.cause || an }) : fe.from(an, an && an.code, $, al);
        }
      });
    }, Cl = /* @__PURE__ */ new Map(), It = (f) => {
      let d = f ? f.env : {};
      const { fetch: S, Request: x, Response: E } = d, C = [x, E, S];
      let j = C.length, K = j, ne, F, W = Cl;
      for (; K--; )
        ne = C[K], F = W.get(ne), F === void 0 && W.set(ne, F = K ? /* @__PURE__ */ new Map() : Ur(d)), W = F;
      return F;
    };
    It();
    const tl = { http: Or, xhr: Mi, fetch: { get: It } };
    H.forEach(tl, (f, d) => {
      if (f) {
        try {
          Object.defineProperty(f, "name", { value: d });
        } catch (S) {
        }
        Object.defineProperty(f, "adapterName", { value: d });
      }
    });
    const Ul = (f) => `- ${f}`, ga = (f) => H.isFunction(f) || f === null || f === false;
    var Zn = { getAdapter: (f, d) => {
      f = H.isArray(f) ? f : [f];
      const { length: S } = f;
      let x, E;
      const C = {};
      for (let j = 0; j < S; j++) {
        x = f[j];
        let K;
        if (E = x, !ga(x) && (E = tl[(K = String(x)).toLowerCase()], E === void 0))
          throw new fe(`Unknown adapter '${K}'`);
        if (E && (H.isFunction(E) || (E = E.get(d))))
          break;
        C[K || "#" + j] = E;
      }
      if (!E) {
        const j = Object.entries(C).map(([ne, F]) => `adapter ${ne} ` + (F === false ? "is not supported by the environment" : "is not available in the build"));
        let K = S ? j.length > 1 ? `since :
` + j.map(Ul).join(`
`) : " " + Ul(j[0]) : "as no adapter specified";
        throw new fe("There is no suitable adapter to dispatch the request " + K, "ERR_NOT_SUPPORT");
      }
      return E;
    }, adapters: tl };
    function Dl(f) {
      if (f.cancelToken && f.cancelToken.throwIfRequested(), f.signal && f.signal.aborted)
        throw new Gt(null, f);
    }
    function Ml(f) {
      return Dl(f), f.headers = Ut.from(f.headers), f.data = Nl.call(f, f.transformRequest), ["post", "put", "patch"].indexOf(f.method) !== -1 && f.headers.setContentType("application/x-www-form-urlencoded", false), Zn.getAdapter(f.adapter || Rn.adapter, f)(f).then(function(d) {
        return Dl(f), d.data = Nl.call(f, f.transformResponse, d), d.headers = Ut.from(d.headers), d;
      }, function(d) {
        return jn(d) || (Dl(f), d && d.response && (d.response.data = Nl.call(f, f.transformResponse, d.response), d.response.headers = Ut.from(d.response.headers))), Promise.reject(d);
      });
    }
    const Li = "1.12.2", Cn = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach((f, d) => {
      Cn[f] = function(S) {
        return typeof S === f || "a" + (d < 1 ? "n " : " ") + f;
      };
    });
    const en = {};
    Cn.transitional = function(f, d, S) {
      function x(E, C) {
        return "[Axios v" + Li + "] Transitional option '" + E + "'" + C + (S ? ". " + S : "");
      }
      return (E, C, j) => {
        if (f === false)
          throw new fe(x(C, " has been removed" + (d ? " in " + d : "")), fe.ERR_DEPRECATED);
        return d && !en[C] && (en[C] = true, console.warn(x(C, " has been deprecated since v" + d + " and will be removed in the near future"))), f ? f(E, C, j) : true;
      };
    }, Cn.spelling = function(f) {
      return (d, S) => (console.warn(`${S} is likely a misspelling of ${f}`), true);
    };
    function Yi(f, d, S) {
      if (typeof f != "object")
        throw new fe("options must be an object", fe.ERR_BAD_OPTION_VALUE);
      const x = Object.keys(f);
      let E = x.length;
      for (; E-- > 0; ) {
        const C = x[E], j = d[C];
        if (j) {
          const K = f[C], ne = K === void 0 || j(K, C, f);
          if (ne !== true)
            throw new fe("option " + C + " must be " + ne, fe.ERR_BAD_OPTION_VALUE);
          continue;
        }
        if (S !== true)
          throw new fe("Unknown option " + C, fe.ERR_BAD_OPTION);
      }
    }
    var Un = { assertOptions: Yi, validators: Cn };
    const mt = Un.validators;
    class va {
      constructor(d) {
        this.defaults = d || {}, this.interceptors = { request: new Fa(), response: new Fa() };
      }
      request(d, S) {
        return fa(this, null, function* () {
          try {
            return yield this._request(d, S);
          } catch (x) {
            if (x instanceof Error) {
              let E = {};
              Error.captureStackTrace ? Error.captureStackTrace(E) : E = new Error();
              const C = E.stack ? E.stack.replace(/^.+\n/, "") : "";
              try {
                x.stack ? C && !String(x.stack).endsWith(C.replace(/^.+\n.+\n/, "")) && (x.stack += `
` + C) : x.stack = C;
              } catch (j) {
              }
            }
            throw x;
          }
        });
      }
      _request(d, S) {
        typeof d == "string" ? (S = S || {}, S.url = d) : S = d || {}, S = Gn(this.defaults, S);
        const { transitional: x, paramsSerializer: E, headers: C } = S;
        x !== void 0 && Un.assertOptions(x, { silentJSONParsing: mt.transitional(mt.boolean), forcedJSONParsing: mt.transitional(mt.boolean), clarifyTimeoutError: mt.transitional(mt.boolean) }, false), E != null && (H.isFunction(E) ? S.paramsSerializer = { serialize: E } : Un.assertOptions(E, { encode: mt.function, serialize: mt.function }, true)), S.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? S.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : S.allowAbsoluteUrls = true), Un.assertOptions(S, { baseUrl: mt.spelling("baseURL"), withXsrfToken: mt.spelling("withXSRFToken") }, true), S.method = (S.method || this.defaults.method || "get").toLowerCase();
        let j = C && H.merge(C.common, C[S.method]);
        C && H.forEach(["delete", "get", "head", "post", "put", "patch", "common"], ($) => {
          delete C[$];
        }), S.headers = Ut.concat(j, C);
        const K = [];
        let ne = true;
        this.interceptors.request.forEach(function($) {
          typeof $.runWhen == "function" && $.runWhen(S) === false || (ne = ne && $.synchronous, K.unshift($.fulfilled, $.rejected));
        });
        const F = [];
        this.interceptors.response.forEach(function($) {
          F.push($.fulfilled, $.rejected);
        });
        let W, re = 0, He;
        if (!ne) {
          const $ = [Ml.bind(this), void 0];
          for ($.unshift(...K), $.push(...F), He = $.length, W = Promise.resolve(S); re < He; )
            W = W.then($[re++], $[re++]);
          return W;
        }
        He = K.length;
        let pe = S;
        for (; re < He; ) {
          const $ = K[re++], I = K[re++];
          try {
            pe = $(pe);
          } catch (ke) {
            I.call(this, ke);
            break;
          }
        }
        try {
          W = Ml.call(this, pe);
        } catch ($) {
          return Promise.reject($);
        }
        for (re = 0, He = F.length; re < He; )
          W = W.then(F[re++], F[re++]);
        return W;
      }
      getUri(d) {
        d = Gn(this.defaults, d);
        const S = Di(d.baseURL, d.url, d.allowAbsoluteUrls);
        return Ja(S, d.params, d.paramsSerializer);
      }
    }
    H.forEach(["delete", "get", "head", "options"], function(f) {
      va.prototype[f] = function(d, S) {
        return this.request(Gn(S || {}, { method: f, url: d, data: (S || {}).data }));
      };
    }), H.forEach(["post", "put", "patch"], function(f) {
      function d(S) {
        return function(x, E, C) {
          return this.request(Gn(C || {}, { method: f, headers: S ? { "Content-Type": "multipart/form-data" } : {}, url: x, data: E }));
        };
      }
      va.prototype[f] = d(), va.prototype[f + "Form"] = d(true);
    });
    var kn = va;
    class Bl {
      constructor(d) {
        if (typeof d != "function")
          throw new TypeError("executor must be a function.");
        let S;
        this.promise = new Promise(function(E) {
          S = E;
        });
        const x = this;
        this.promise.then((E) => {
          if (!x._listeners)
            return;
          let C = x._listeners.length;
          for (; C-- > 0; )
            x._listeners[C](E);
          x._listeners = null;
        }), this.promise.then = (E) => {
          let C;
          const j = new Promise((K) => {
            x.subscribe(K), C = K;
          }).then(E);
          return j.cancel = function() {
            x.unsubscribe(C);
          }, j;
        }, d(function(E, C, j) {
          x.reason || (x.reason = new Gt(E, C, j), S(x.reason));
        });
      }
      throwIfRequested() {
        if (this.reason)
          throw this.reason;
      }
      subscribe(d) {
        if (this.reason) {
          d(this.reason);
          return;
        }
        this._listeners ? this._listeners.push(d) : this._listeners = [d];
      }
      unsubscribe(d) {
        if (!this._listeners)
          return;
        const S = this._listeners.indexOf(d);
        S !== -1 && this._listeners.splice(S, 1);
      }
      toAbortSignal() {
        const d = new AbortController(), S = (x) => {
          d.abort(x);
        };
        return this.subscribe(S), d.signal.unsubscribe = () => this.unsubscribe(S), d.signal;
      }
      static source() {
        let d;
        return { token: new Bl(function(S) {
          d = S;
        }), cancel: d };
      }
    }
    var ql = Bl;
    function Hl(f) {
      return function(d) {
        return f.apply(null, d);
      };
    }
    function Iu(f) {
      return H.isObject(f) && f.isAxiosError === true;
    }
    const vt = { Continue: 100, SwitchingProtocols: 101, Processing: 102, EarlyHints: 103, Ok: 200, Created: 201, Accepted: 202, NonAuthoritativeInformation: 203, NoContent: 204, ResetContent: 205, PartialContent: 206, MultiStatus: 207, AlreadyReported: 208, ImUsed: 226, MultipleChoices: 300, MovedPermanently: 301, Found: 302, SeeOther: 303, NotModified: 304, UseProxy: 305, Unused: 306, TemporaryRedirect: 307, PermanentRedirect: 308, BadRequest: 400, Unauthorized: 401, PaymentRequired: 402, Forbidden: 403, NotFound: 404, MethodNotAllowed: 405, NotAcceptable: 406, ProxyAuthenticationRequired: 407, RequestTimeout: 408, Conflict: 409, Gone: 410, LengthRequired: 411, PreconditionFailed: 412, PayloadTooLarge: 413, UriTooLong: 414, UnsupportedMediaType: 415, RangeNotSatisfiable: 416, ExpectationFailed: 417, ImATeapot: 418, MisdirectedRequest: 421, UnprocessableEntity: 422, Locked: 423, FailedDependency: 424, TooEarly: 425, UpgradeRequired: 426, PreconditionRequired: 428, TooManyRequests: 429, RequestHeaderFieldsTooLarge: 431, UnavailableForLegalReasons: 451, InternalServerError: 500, NotImplemented: 501, BadGateway: 502, ServiceUnavailable: 503, GatewayTimeout: 504, HttpVersionNotSupported: 505, VariantAlsoNegotiates: 506, InsufficientStorage: 507, LoopDetected: 508, NotExtended: 510, NetworkAuthenticationRequired: 511 };
    Object.entries(vt).forEach(([f, d]) => {
      vt[d] = f;
    });
    var Kn = vt;
    function nl(f) {
      const d = new kn(f), S = s(kn.prototype.request, d);
      return H.extend(S, kn.prototype, d, { allOwnKeys: true }), H.extend(S, d, null, { allOwnKeys: true }), S.create = function(x) {
        return nl(Gn(f, x));
      }, S;
    }
    const Ve = nl(Rn);
    return Ve.Axios = kn, Ve.CanceledError = Gt, Ve.CancelToken = ql, Ve.isCancel = jn, Ve.VERSION = Li, Ve.toFormData = Qt, Ve.AxiosError = fe, Ve.Cancel = Ve.CanceledError, Ve.all = function(f) {
      return Promise.all(f);
    }, Ve.spread = Hl, Ve.isAxiosError = Iu, Ve.mergeConfig = Gn, Ve.AxiosHeaders = Ut, Ve.formToJSON = (f) => mn(H.isHTMLForm(f) ? new FormData(f) : f), Ve.getAdapter = Zn.getAdapter, Ve.HttpStatusCode = Kn, Ve.default = Ve, Lc = Ve, Lc;
  }
  var tm;
  function zm() {
    if (tm)
      return ha;
    tm = 1;
    var s = ha && ha.__assign || function() {
      return s = Object.assign || function(g) {
        for (var b, p = 1, v = arguments.length; p < v; p++) {
          b = arguments[p];
          for (var m in b)
            Object.prototype.hasOwnProperty.call(b, m) && (g[m] = b[m]);
        }
        return g;
      }, s.apply(this, arguments);
    };
    Object.defineProperty(ha, "__esModule", { value: true }), ha.getRequestHeaders = ha.getAxiosClient = void 0;
    var u = Tg();
    function r(g, b, p, v, m) {
      var h = u.default.create({ baseURL: g, headers: o(b, v, p, g, m), withCredentials: true });
      return h.interceptors.request.use(function(_) {
        return typeof window < "u" && window.csrf_token && window.csrf_token !== "{{ csrf_token }}" && (_.headers["X-Frappe-CSRF-Token"] = window.csrf_token), b && v && p && (_.headers.Authorization = "".concat(v, " ").concat(p())), _;
      }), h;
    }
    ha.getAxiosClient = r;
    function o(g, b, p, v, m) {
      g === void 0 && (g = false);
      var h = { Accept: "application/json", "Content-Type": "application/json; charset=utf-8" };
      return g && b && p && (h.Authorization = "".concat(b, " ").concat(p())), typeof window < "u" && typeof document < "u" && (window.location && (v && v !== window.location.origin || (h["X-Frappe-Site-Name"] = window.location.hostname)), window.csrf_token && window.csrf_token !== "{{ csrf_token }}" && (h["X-Frappe-CSRF-Token"] = window.csrf_token)), s(s({}, h), m != null ? m : {});
    }
    return ha.getRequestHeaders = o, ha;
  }
  var nm;
  function jm() {
    if (nm)
      return _n;
    nm = 1;
    var s = _n && _n.__assign || function() {
      return s = Object.assign || function(b) {
        for (var p, v = 1, m = arguments.length; v < m; v++) {
          p = arguments[v];
          for (var h in p)
            Object.prototype.hasOwnProperty.call(p, h) && (b[h] = p[h]);
        }
        return b;
      }, s.apply(this, arguments);
    }, u = _n && _n.__awaiter || function(b, p, v, m) {
      function h(_) {
        return _ instanceof v ? _ : new v(function(R) {
          R(_);
        });
      }
      return new (v || (v = Promise))(function(_, R) {
        function X(k) {
          try {
            q(m.next(k));
          } catch (ue) {
            R(ue);
          }
        }
        function w(k) {
          try {
            q(m.throw(k));
          } catch (ue) {
            R(ue);
          }
        }
        function q(k) {
          k.done ? _(k.value) : h(k.value).then(X, w);
        }
        q((m = m.apply(b, p || [])).next());
      });
    }, r = _n && _n.__generator || function(b, p) {
      var v = { label: 0, sent: function() {
        if (_[0] & 1)
          throw _[1];
        return _[1];
      }, trys: [], ops: [] }, m, h, _, R;
      return R = { next: X(0), throw: X(1), return: X(2) }, typeof Symbol == "function" && (R[Symbol.iterator] = function() {
        return this;
      }), R;
      function X(q) {
        return function(k) {
          return w([q, k]);
        };
      }
      function w(q) {
        if (m)
          throw new TypeError("Generator is already executing.");
        for (; R && (R = 0, q[0] && (v = 0)), v; )
          try {
            if (m = 1, h && (_ = q[0] & 2 ? h.return : q[0] ? h.throw || ((_ = h.return) && _.call(h), 0) : h.next) && !(_ = _.call(h, q[1])).done)
              return _;
            switch (h = 0, _ && (q = [q[0] & 2, _.value]), q[0]) {
              case 0:
              case 1:
                _ = q;
                break;
              case 4:
                return v.label++, { value: q[1], done: false };
              case 5:
                v.label++, h = q[1], q = [0];
                continue;
              case 7:
                q = v.ops.pop(), v.trys.pop();
                continue;
              default:
                if (_ = v.trys, !(_ = _.length > 0 && _[_.length - 1]) && (q[0] === 6 || q[0] === 2)) {
                  v = 0;
                  continue;
                }
                if (q[0] === 3 && (!_ || q[1] > _[0] && q[1] < _[3])) {
                  v.label = q[1];
                  break;
                }
                if (q[0] === 6 && v.label < _[1]) {
                  v.label = _[1], _ = q;
                  break;
                }
                if (_ && v.label < _[2]) {
                  v.label = _[2], v.ops.push(q);
                  break;
                }
                _[2] && v.ops.pop(), v.trys.pop();
                continue;
            }
            q = p.call(b, v);
          } catch (k) {
            q = [6, k], h = 0;
          } finally {
            m = _ = 0;
          }
        if (q[0] & 5)
          throw q[1];
        return { value: q[0] ? q[1] : void 0, done: true };
      }
    };
    Object.defineProperty(_n, "__esModule", { value: true }), _n.FrappeFileUpload = void 0;
    var o = zm(), g = function() {
      function b(p, v, m, h, _, R) {
        this.appURL = p, this.axios = v, this.useToken = m != null ? m : false, this.token = h, this.tokenType = _, this.customHeaders = R;
      }
      return b.prototype.uploadFile = function(p, v, m, h) {
        return h === void 0 && (h = "upload_file"), u(this, void 0, void 0, function() {
          var _, R, X, w, q, k, ue, ge;
          return r(this, function(je) {
            return _ = new FormData(), p && _.append("file", p, p.name), R = v.isPrivate, X = v.folder, w = v.file_url, q = v.doctype, k = v.docname, ue = v.fieldname, ge = v.otherData, R && _.append("is_private", "1"), X && _.append("folder", X), w && _.append("file_url", w), q && k && (_.append("doctype", q), _.append("docname", k), ue && _.append("fieldname", ue)), ge && Object.keys(ge).forEach(function(oe) {
              var Oe = ge[oe];
              _.append(oe, Oe);
            }), [2, this.axios.post("/api/method/".concat(h), _, { onUploadProgress: function(oe) {
              m && m(oe.loaded, oe.total, oe);
            }, headers: s(s({}, (0, o.getRequestHeaders)(this.useToken, this.tokenType, this.token, this.appURL, this.customHeaders)), { "Content-Type": "multipart/form-data" }) }).catch(function(oe) {
              var Oe, we;
              throw s(s({}, oe.response.data), { httpStatus: oe.response.status, httpStatusText: oe.response.statusText, message: (Oe = oe.response.data.message) !== null && Oe !== void 0 ? Oe : "There was an error while uploading the file.", exception: (we = oe.response.data.exception) !== null && we !== void 0 ? we : "" });
            })];
          });
        });
      }, b;
    }();
    return _n.FrappeFileUpload = g, _n;
  }
  var am;
  function Eg() {
    if (am)
      return Ru;
    am = 1, Object.defineProperty(Ru, "__esModule", { value: true }), Ru.FrappeApp = void 0;
    var s = Cm(), u = Rm(), r = Nm(), o = jm(), g = zm(), b = function() {
      function p(v, m, h, _) {
        var R, X;
        this.url = v, this.name = h != null ? h : "FrappeApp", this.useToken = (R = m == null ? void 0 : m.useToken) !== null && R !== void 0 ? R : false, this.token = m == null ? void 0 : m.token, this.tokenType = (X = m == null ? void 0 : m.type) !== null && X !== void 0 ? X : "Bearer", this.customHeaders = _, this.axios = (0, g.getAxiosClient)(this.url, this.useToken, this.token, this.tokenType, this.customHeaders);
      }
      return p.prototype.auth = function() {
        return new s.FrappeAuth(this.url, this.axios, this.useToken, this.token, this.tokenType);
      }, p.prototype.db = function() {
        return new r.FrappeDB(this.url, this.axios, this.useToken, this.token, this.tokenType);
      }, p.prototype.file = function() {
        return new o.FrappeFileUpload(this.url, this.axios, this.useToken, this.token, this.tokenType, this.customHeaders);
      }, p.prototype.call = function() {
        return new u.FrappeCall(this.url, this.axios, this.useToken, this.token, this.tokenType);
      }, p;
    }();
    return Ru.FrappeApp = b, Ru;
  }
  var Tn = {};
  var lm;
  function Ag() {
    if (lm)
      return Tn;
    lm = 1;
    var s = Tn && Tn.__assign || function() {
      return s = Object.assign || function(g) {
        for (var b, p = 1, v = arguments.length; p < v; p++) {
          b = arguments[p];
          for (var m in b)
            Object.prototype.hasOwnProperty.call(b, m) && (g[m] = b[m]);
        }
        return g;
      }, s.apply(this, arguments);
    }, u = Tn && Tn.__awaiter || function(g, b, p, v) {
      function m(h) {
        return h instanceof p ? h : new p(function(_) {
          _(h);
        });
      }
      return new (p || (p = Promise))(function(h, _) {
        function R(q) {
          try {
            w(v.next(q));
          } catch (k) {
            _(k);
          }
        }
        function X(q) {
          try {
            w(v.throw(q));
          } catch (k) {
            _(k);
          }
        }
        function w(q) {
          q.done ? h(q.value) : m(q.value).then(R, X);
        }
        w((v = v.apply(g, b || [])).next());
      });
    }, r = Tn && Tn.__generator || function(g, b) {
      var p = { label: 0, sent: function() {
        if (h[0] & 1)
          throw h[1];
        return h[1];
      }, trys: [], ops: [] }, v, m, h, _;
      return _ = { next: R(0), throw: R(1), return: R(2) }, typeof Symbol == "function" && (_[Symbol.iterator] = function() {
        return this;
      }), _;
      function R(w) {
        return function(q) {
          return X([w, q]);
        };
      }
      function X(w) {
        if (v)
          throw new TypeError("Generator is already executing.");
        for (; _ && (_ = 0, w[0] && (p = 0)), p; )
          try {
            if (v = 1, m && (h = w[0] & 2 ? m.return : w[0] ? m.throw || ((h = m.return) && h.call(m), 0) : m.next) && !(h = h.call(m, w[1])).done)
              return h;
            switch (m = 0, h && (w = [w[0] & 2, h.value]), w[0]) {
              case 0:
              case 1:
                h = w;
                break;
              case 4:
                return p.label++, { value: w[1], done: false };
              case 5:
                p.label++, m = w[1], w = [0];
                continue;
              case 7:
                w = p.ops.pop(), p.trys.pop();
                continue;
              default:
                if (h = p.trys, !(h = h.length > 0 && h[h.length - 1]) && (w[0] === 6 || w[0] === 2)) {
                  p = 0;
                  continue;
                }
                if (w[0] === 3 && (!h || w[1] > h[0] && w[1] < h[3])) {
                  p.label = w[1];
                  break;
                }
                if (w[0] === 6 && p.label < h[1]) {
                  p.label = h[1], h = w;
                  break;
                }
                if (h && p.label < h[2]) {
                  p.label = h[2], p.ops.push(w);
                  break;
                }
                h[2] && p.ops.pop(), p.trys.pop();
                continue;
            }
            w = b.call(g, p);
          } catch (q) {
            w = [6, q], m = 0;
          } finally {
            v = h = 0;
          }
        if (w[0] & 5)
          throw w[1];
        return { value: w[0] ? w[1] : void 0, done: true };
      }
    };
    Object.defineProperty(Tn, "__esModule", { value: true }), Tn.FrappeAuth = void 0;
    var o = function() {
      function g(b, p, v, m, h) {
        this.appURL = b, this.axios = p, this.useToken = v != null ? v : false, this.token = m, this.tokenType = h;
      }
      return g.prototype.loginWithUsernamePassword = function(b) {
        return u(this, void 0, void 0, function() {
          return r(this, function(p) {
            return [2, this.axios.post("/api/method/login", { usr: b.username, pwd: b.password, otp: b.otp, tmp_id: b.tmp_id, device: b.device }).then(function(v) {
              return v.data;
            }).catch(function(v) {
              var m, h;
              throw s(s({}, v.response.data), { httpStatus: v.response.status, httpStatusText: v.response.statusText, message: (m = v.response.data.message) !== null && m !== void 0 ? m : "There was an error while logging in", exception: (h = v.response.data.exception) !== null && h !== void 0 ? h : "" });
            })];
          });
        });
      }, g.prototype.getLoggedInUser = function() {
        return u(this, void 0, void 0, function() {
          return r(this, function(b) {
            return [2, this.axios.get("/api/method/frappe.auth.get_logged_user").then(function(p) {
              return p.data.message;
            }).catch(function(p) {
              var v;
              throw s(s({}, p.response.data), { httpStatus: p.response.status, httpStatusText: p.response.statusText, message: "There was an error while fetching the logged in user", exception: (v = p.response.data.exception) !== null && v !== void 0 ? v : "" });
            })];
          });
        });
      }, g.prototype.logout = function() {
        return u(this, void 0, void 0, function() {
          return r(this, function(b) {
            return [2, this.axios.post("/api/method/logout", {}).then(function() {
            }).catch(function(p) {
              var v, m;
              throw s(s({}, p.response.data), { httpStatus: p.response.status, httpStatusText: p.response.statusText, message: (v = p.response.data.message) !== null && v !== void 0 ? v : "There was an error while logging out", exception: (m = p.response.data.exception) !== null && m !== void 0 ? m : "" });
            })];
          });
        });
      }, g.prototype.forgetPassword = function(b) {
        return u(this, void 0, void 0, function() {
          return r(this, function(p) {
            return [2, this.axios.post("/", { cmd: "frappe.core.doctype.user.user.reset_password", user: b }).then(function() {
            }).catch(function(v) {
              var m, h;
              throw s(s({}, v.response.data), { httpStatus: v.response.status, httpStatusText: v.response.statusText, message: (m = v.response.data.message) !== null && m !== void 0 ? m : "There was an error sending password reset email.", exception: (h = v.response.data.exception) !== null && h !== void 0 ? h : "" });
            })];
          });
        });
      }, g;
    }();
    return Tn.FrappeAuth = o, Tn;
  }
  var im;
  function Cm() {
    return im || (im = 1, function(s) {
      var u = bi && bi.__createBinding || (Object.create ? function(o, g, b, p) {
        p === void 0 && (p = b);
        var v = Object.getOwnPropertyDescriptor(g, b);
        (!v || ("get" in v ? !g.__esModule : v.writable || v.configurable)) && (v = { enumerable: true, get: function() {
          return g[b];
        } }), Object.defineProperty(o, p, v);
      } : function(o, g, b, p) {
        p === void 0 && (p = b), o[p] = g[b];
      }), r = bi && bi.__exportStar || function(o, g) {
        for (var b in o)
          b !== "default" && !Object.prototype.hasOwnProperty.call(g, b) && u(g, o, b);
      };
      Object.defineProperty(s, "__esModule", { value: true }), r(Eg(), s), r(Ag(), s), r(Nm(), s), r(jm(), s), r(Rm(), s);
    }(bi)), bi;
  }
  var Og = Cm();
  var um = { exports: {} };
  var Yc = {};
  var sm;
  function wg() {
    if (sm)
      return Yc;
    sm = 1;
    var s = ju;
    function u(R, X) {
      return R === X && (R !== 0 || 1 / R === 1 / X) || R !== R && X !== X;
    }
    var r = typeof Object.is == "function" ? Object.is : u, o = s.useState, g = s.useEffect, b = s.useLayoutEffect, p = s.useDebugValue;
    function v(R, X) {
      var w = X(), q = o({ inst: { value: w, getSnapshot: X } }), k = q[0].inst, ue = q[1];
      return b(function() {
        k.value = w, k.getSnapshot = X, m(k) && ue({ inst: k });
      }, [R, w, X]), g(function() {
        return m(k) && ue({ inst: k }), R(function() {
          m(k) && ue({ inst: k });
        });
      }, [R]), p(w), w;
    }
    function m(R) {
      var X = R.getSnapshot;
      R = R.value;
      try {
        var w = X();
        return !r(R, w);
      } catch (q) {
        return true;
      }
    }
    function h(R, X) {
      return X();
    }
    var _ = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? h : v;
    return Yc.useSyncExternalStore = s.useSyncExternalStore !== void 0 ? s.useSyncExternalStore : _, Yc;
  }
  var rm;
  function Rg() {
    return rm || (rm = 1, um.exports = wg()), um.exports;
  }
  Rg();
  var Ng = 0;
  var zg = 1;
  var jg = 2;
  var om = Object.prototype.hasOwnProperty;
  function kc(s, u) {
    var r, o;
    if (s === u)
      return true;
    if (s && u && (r = s.constructor) === u.constructor) {
      if (r === Date)
        return s.getTime() === u.getTime();
      if (r === RegExp)
        return s.toString() === u.toString();
      if (r === Array) {
        if ((o = s.length) === u.length)
          for (; o-- && kc(s[o], u[o]); )
            ;
        return o === -1;
      }
      if (!r || typeof s == "object") {
        o = 0;
        for (r in s)
          if (om.call(s, r) && ++o && !om.call(u, r) || !(r in u) || !kc(s[r], u[r]))
            return false;
        return Object.keys(u).length === o;
      }
    }
    return s !== s && u !== u;
  }
  var Qa = /* @__PURE__ */ new WeakMap();
  var Va = () => {
  };
  var Xt = Va();
  var Sr = Object;
  var An = (s) => s === Xt;
  var Ga = (s) => typeof s == "function";
  var Tl = (s, u) => Ze(Ze({}, s), u);
  var Cg = (s) => Ga(s.then);
  var Xc = {};
  var fr = {};
  var Um = "undefined";
  var _r = typeof window != Um;
  var Kc = typeof document != Um;
  var Ug = _r && "Deno" in window;
  var Dg = (s, u) => {
    const r = Qa.get(s);
    return [() => !An(u) && s.get(u) || Xc, (o) => {
      if (!An(u)) {
        const g = s.get(u);
        u in fr || (fr[u] = g), r[5](u, Tl(g, o), g || Xc);
      }
    }, r[6], () => !An(u) && u in fr ? fr[u] : !An(u) && s.get(u) || Xc];
  };
  var Jc = true;
  var Mg = () => Jc;
  var [Fc, Wc] = _r && window.addEventListener ? [window.addEventListener.bind(window), window.removeEventListener.bind(window)] : [Va, Va];
  var Bg = () => {
    const s = Kc && document.visibilityState;
    return An(s) || s !== "hidden";
  };
  var qg = (s) => (Kc && document.addEventListener("visibilitychange", s), Fc("focus", s), () => {
    Kc && document.removeEventListener("visibilitychange", s), Wc("focus", s);
  });
  var Hg = (s) => {
    const u = () => {
      Jc = true, s();
    }, r = () => {
      Jc = false;
    };
    return Fc("online", u), Fc("offline", r), () => {
      Wc("online", u), Wc("offline", r);
    };
  };
  var Lg = { isOnline: Mg, isVisible: Bg };
  var Yg = { initFocus: qg, initReconnect: Hg };
  ju.useId;
  var rf = !_r || Ug;
  var Xg = rf ? Ie.useEffect : Ie.useLayoutEffect;
  var Qc = typeof navigator < "u" && navigator.connection;
  var cm = !rf && Qc && (["slow-2g", "2g"].includes(Qc.effectiveType) || Qc.saveData);
  var hr = /* @__PURE__ */ new WeakMap();
  var Qg = (s) => Sr.prototype.toString.call(s);
  var Gc = (s, u) => s === `[object ${u}]`;
  var Gg = 0;
  var $c = (s) => {
    const u = typeof s, r = Qg(s), o = Gc(r, "Date"), g = Gc(r, "RegExp"), b = Gc(r, "Object");
    let p, v;
    if (Sr(s) === s && !o && !g) {
      if (p = hr.get(s), p)
        return p;
      if (p = ++Gg + "~", hr.set(s, p), Array.isArray(s)) {
        for (p = "@", v = 0; v < s.length; v++)
          p += $c(s[v]) + ",";
        hr.set(s, p);
      }
      if (b) {
        p = "#";
        const m = Sr.keys(s).sort();
        for (; !An(v = m.pop()); )
          An(s[v]) || (p += v + ":" + $c(s[v]) + ",");
        hr.set(s, p);
      }
    } else
      p = o ? s.toJSON() : u == "symbol" ? s.toString() : u == "string" ? JSON.stringify(s) : "" + s;
    return p;
  };
  var Dm = (s) => {
    if (Ga(s))
      try {
        s = s();
      } catch (r) {
        s = "";
      }
    const u = s;
    return s = typeof s == "string" ? s : (Array.isArray(s) ? s.length : s) ? $c(s) : "", [s, u];
  };
  var Vg = 0;
  var fm = () => ++Vg;
  function Zg(...s) {
    return fa(this, null, function* () {
      const [u, r, o, g] = s, b = Tl({ populateCache: true, throwOnError: true }, typeof g == "boolean" ? { revalidate: g } : g || {});
      let p = b.populateCache;
      const v = b.rollbackOnError;
      let m = b.optimisticData;
      const h = (X) => typeof v == "function" ? v(X) : v !== false, _ = b.throwOnError;
      if (Ga(r)) {
        const X = r, w = [], q = u.keys();
        for (const k of q)
          !/^\$(inf|sub)\$/.test(k) && X(u.get(k)._k) && w.push(k);
        return Promise.all(w.map(R));
      }
      return R(r);
      function R(X) {
        return fa(this, null, function* () {
          const [w] = Dm(X);
          if (!w)
            return;
          const [q, k] = Dg(u, w), [ue, ge, je, oe] = Qa.get(u), Oe = () => {
            const Se = ue[w];
            return (Ga(b.revalidate) ? b.revalidate(q().data, X) : b.revalidate !== false) && (delete je[w], delete oe[w], Se && Se[0]) ? Se[0](jg).then(() => q().data) : q().data;
          };
          if (s.length < 3)
            return Oe();
          let we = o, Qe, ce = false;
          const it = fm();
          ge[w] = [it, 0];
          const ht = !An(m), Rt = q(), dt = Rt.data, We = Rt._c, he = An(We) ? dt : We;
          if (ht && (m = Ga(m) ? m(he, dt) : m, k({ data: m, _c: he })), Ga(we))
            try {
              we = we(he);
            } catch (Se) {
              Qe = Se, ce = true;
            }
          if (we && Cg(we))
            if (we = yield we.catch((Se) => {
              Qe = Se, ce = true;
            }), it !== ge[w][0]) {
              if (ce)
                throw Qe;
              return we;
            } else
              ce && ht && h(Qe) && (p = true, k({ data: he, _c: Xt }));
          if (p && !ce)
            if (Ga(p)) {
              const Se = p(we, he);
              k({ data: Se, error: Xt, _c: Xt });
            } else
              k({ data: we, error: Xt, _c: Xt });
          if (ge[w][1] = fm(), Promise.resolve(Oe()).then(() => {
            k({ _c: Xt });
          }), ce) {
            if (_)
              throw Qe;
            return;
          }
          return we;
        });
      }
    });
  }
  var hm = (s, u) => {
    for (const r in s)
      s[r][0] && s[r][0](u);
  };
  var Mm = (s, u) => {
    if (!Qa.has(s)) {
      const r = Tl(Yg, u), o = /* @__PURE__ */ Object.create(null), g = Zg.bind(Xt, s);
      let b = Va;
      const p = /* @__PURE__ */ Object.create(null), v = (_, R) => {
        const X = p[_] || [];
        return p[_] = X, X.push(R), () => X.splice(X.indexOf(R), 1);
      }, m = (_, R, X) => {
        s.set(_, R);
        const w = p[_];
        if (w)
          for (const q of w)
            q(R, X);
      }, h = () => {
        if (!Qa.has(s) && (Qa.set(s, [o, /* @__PURE__ */ Object.create(null), /* @__PURE__ */ Object.create(null), /* @__PURE__ */ Object.create(null), g, m, v]), !rf)) {
          const _ = r.initFocus(setTimeout.bind(Xt, hm.bind(Xt, o, Ng))), R = r.initReconnect(setTimeout.bind(Xt, hm.bind(Xt, o, zg)));
          b = () => {
            _ && _(), R && R(), Qa.delete(s);
          };
        }
      };
      return h(), [s, g, h, b];
    }
    return [s, Qa.get(s)[4]];
  };
  var kg = (s, u, r, o, g) => {
    const b = r.errorRetryCount, p = g.retryCount, v = ~~((Math.random() + 0.5) * (1 << (p < 8 ? p : 8))) * r.errorRetryInterval;
    !An(b) && p > b || setTimeout(o, v, g);
  };
  var Kg = kc;
  var [of, Jg] = Mm(/* @__PURE__ */ new Map());
  var Fg = Tl({ onLoadingSlow: Va, onSuccess: Va, onError: Va, onErrorRetry: kg, onDiscarded: Va, revalidateOnFocus: true, revalidateOnReconnect: true, revalidateIfStale: true, shouldRetryOnError: true, errorRetryInterval: cm ? 1e4 : 5e3, focusThrottleInterval: 5 * 1e3, dedupingInterval: 2 * 1e3, loadingTimeout: cm ? 5e3 : 3e3, compare: Kg, isPaused: () => false, cache: of, mutate: Jg, fallback: {} }, Lg);
  var Wg = (s, u) => {
    const r = Tl(s, u);
    if (u) {
      const { use: o, fallback: g } = s, { use: b, fallback: p } = u;
      o && b && (r.use = o.concat(b)), g && p && (r.fallback = Tl(g, p));
    }
    return r;
  };
  var dm = Ie.createContext({});
  var $g = (s) => {
    const { value: u } = s, r = Ie.useContext(dm), o = Ga(u), g = Ie.useMemo(() => o ? u(r) : u, [o, r, u]), b = Ie.useMemo(() => o ? g : Wg(r, g), [o, r, g]), p = g && g.provider, v = Ie.useRef(Xt);
    p && !v.current && (v.current = Mm(p(b.cache || of), g));
    const m = v.current;
    return m && (b.cache = m[0], b.mutate = m[1]), Xg(() => {
      if (m)
        return m[2] && m[2](), m[3];
    }, []), Ie.createElement(dm.Provider, Tl(s, { value: b }));
  };
  var Pg = "$inf$";
  var Bm = _r && window.__SWR_DEVTOOLS_USE__;
  var Ig = Bm ? window.__SWR_DEVTOOLS_USE__ : [];
  var ev = () => {
    Bm && (window.__SWR_DEVTOOLS_REACT__ = ju);
  };
  var tv = (s) => (u, r, o) => s(u, r && ((...g) => {
    const [b] = Dm(u), [, , , p] = Qa.get(of);
    if (b.startsWith(Pg))
      return r(...g);
    const v = p[b];
    return An(v) ? r(...g) : (delete p[b], v);
  }), o);
  Ig.concat(tv);
  ev();
  ju.use;
  Promise.resolve(Xt);
  var nv = Sr.defineProperty($g, "defaultValue", { value: Fg });
  Promise.resolve();
  var Yn = /* @__PURE__ */ Object.create(null);
  Yn.open = "0";
  Yn.close = "1";
  Yn.ping = "2";
  Yn.pong = "3";
  Yn.message = "4";
  Yn.upgrade = "5";
  Yn.noop = "6";
  var gr = /* @__PURE__ */ Object.create(null);
  Object.keys(Yn).forEach((s) => {
    gr[Yn[s]] = s;
  });
  var Pc = { type: "error", data: "parser error" };
  var qm = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
  var Hm = typeof ArrayBuffer == "function";
  var Lm = (s) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(s) : s && s.buffer instanceof ArrayBuffer;
  var cf = ({ type: s, data: u }, r, o) => qm && u instanceof Blob ? r ? o(u) : pm(u, o) : Hm && (u instanceof ArrayBuffer || Lm(u)) ? r ? o(u) : pm(new Blob([u]), o) : o(Yn[s] + (u || ""));
  var pm = (s, u) => {
    const r = new FileReader();
    return r.onload = function() {
      const o = r.result.split(",")[1];
      u("b" + (o || ""));
    }, r.readAsDataURL(s);
  };
  function mm(s) {
    return s instanceof Uint8Array ? s : s instanceof ArrayBuffer ? new Uint8Array(s) : new Uint8Array(s.buffer, s.byteOffset, s.byteLength);
  }
  var Vc;
  function av(s, u) {
    if (qm && s.data instanceof Blob)
      return s.data.arrayBuffer().then(mm).then(u);
    if (Hm && (s.data instanceof ArrayBuffer || Lm(s.data)))
      return u(mm(s.data));
    cf(s, false, (r) => {
      Vc || (Vc = new TextEncoder()), u(Vc.encode(r));
    });
  }
  var ym = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var zu = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (let s = 0; s < ym.length; s++)
    zu[ym.charCodeAt(s)] = s;
  var lv = (s) => {
    let u = s.length * 0.75, r = s.length, o, g = 0, b, p, v, m;
    s[s.length - 1] === "=" && (u--, s[s.length - 2] === "=" && u--);
    const h = new ArrayBuffer(u), _ = new Uint8Array(h);
    for (o = 0; o < r; o += 4)
      b = zu[s.charCodeAt(o)], p = zu[s.charCodeAt(o + 1)], v = zu[s.charCodeAt(o + 2)], m = zu[s.charCodeAt(o + 3)], _[g++] = b << 2 | p >> 4, _[g++] = (p & 15) << 4 | v >> 2, _[g++] = (v & 3) << 6 | m & 63;
    return h;
  };
  var iv = typeof ArrayBuffer == "function";
  var ff = (s, u) => {
    if (typeof s != "string")
      return { type: "message", data: Ym(s, u) };
    const r = s.charAt(0);
    return r === "b" ? { type: "message", data: uv(s.substring(1), u) } : gr[r] ? s.length > 1 ? { type: gr[r], data: s.substring(1) } : { type: gr[r] } : Pc;
  };
  var uv = (s, u) => {
    if (iv) {
      const r = lv(s);
      return Ym(r, u);
    } else
      return { base64: true, data: s };
  };
  var Ym = (s, u) => {
    switch (u) {
      case "blob":
        return s instanceof Blob ? s : new Blob([s]);
      case "arraybuffer":
      default:
        return s instanceof ArrayBuffer ? s : s.buffer;
    }
  };
  var Xm = "";
  var sv = (s, u) => {
    const r = s.length, o = new Array(r);
    let g = 0;
    s.forEach((b, p) => {
      cf(b, false, (v) => {
        o[p] = v, ++g === r && u(o.join(Xm));
      });
    });
  };
  var rv = (s, u) => {
    const r = s.split(Xm), o = [];
    for (let g = 0; g < r.length; g++) {
      const b = ff(r[g], u);
      if (o.push(b), b.type === "error")
        break;
    }
    return o;
  };
  function ov() {
    return new TransformStream({ transform(s, u) {
      av(s, (r) => {
        const o = r.length;
        let g;
        if (o < 126)
          g = new Uint8Array(1), new DataView(g.buffer).setUint8(0, o);
        else if (o < 65536) {
          g = new Uint8Array(3);
          const b = new DataView(g.buffer);
          b.setUint8(0, 126), b.setUint16(1, o);
        } else {
          g = new Uint8Array(9);
          const b = new DataView(g.buffer);
          b.setUint8(0, 127), b.setBigUint64(1, BigInt(o));
        }
        s.data && typeof s.data != "string" && (g[0] |= 128), u.enqueue(g), u.enqueue(r);
      });
    } });
  }
  var Zc;
  function dr(s) {
    return s.reduce((u, r) => u + r.length, 0);
  }
  function pr(s, u) {
    if (s[0].length === u)
      return s.shift();
    const r = new Uint8Array(u);
    let o = 0;
    for (let g = 0; g < u; g++)
      r[g] = s[0][o++], o === s[0].length && (s.shift(), o = 0);
    return s.length && o < s[0].length && (s[0] = s[0].slice(o)), r;
  }
  function cv(s, u) {
    Zc || (Zc = new TextDecoder());
    const r = [];
    let o = 0, g = -1, b = false;
    return new TransformStream({ transform(p, v) {
      for (r.push(p); ; ) {
        if (o === 0) {
          if (dr(r) < 1)
            break;
          const m = pr(r, 1);
          b = (m[0] & 128) === 128, g = m[0] & 127, g < 126 ? o = 3 : g === 126 ? o = 1 : o = 2;
        } else if (o === 1) {
          if (dr(r) < 2)
            break;
          const m = pr(r, 2);
          g = new DataView(m.buffer, m.byteOffset, m.length).getUint16(0), o = 3;
        } else if (o === 2) {
          if (dr(r) < 8)
            break;
          const m = pr(r, 8), h = new DataView(m.buffer, m.byteOffset, m.length), _ = h.getUint32(0);
          if (_ > Math.pow(2, 21) - 1) {
            v.enqueue(Pc);
            break;
          }
          g = _ * Math.pow(2, 32) + h.getUint32(4), o = 3;
        } else {
          if (dr(r) < g)
            break;
          const m = pr(r, g);
          v.enqueue(ff(b ? m : Zc.decode(m), u)), o = 0;
        }
        if (g === 0 || g > s) {
          v.enqueue(Pc);
          break;
        }
      }
    } });
  }
  var Qm = 4;
  function ft(s) {
    if (s)
      return fv(s);
  }
  function fv(s) {
    for (var u in ft.prototype)
      s[u] = ft.prototype[u];
    return s;
  }
  ft.prototype.on = ft.prototype.addEventListener = function(s, u) {
    return this._callbacks = this._callbacks || {}, (this._callbacks["$" + s] = this._callbacks["$" + s] || []).push(u), this;
  };
  ft.prototype.once = function(s, u) {
    function r() {
      this.off(s, r), u.apply(this, arguments);
    }
    return r.fn = u, this.on(s, r), this;
  };
  ft.prototype.off = ft.prototype.removeListener = ft.prototype.removeAllListeners = ft.prototype.removeEventListener = function(s, u) {
    if (this._callbacks = this._callbacks || {}, arguments.length == 0)
      return this._callbacks = {}, this;
    var r = this._callbacks["$" + s];
    if (!r)
      return this;
    if (arguments.length == 1)
      return delete this._callbacks["$" + s], this;
    for (var o, g = 0; g < r.length; g++)
      if (o = r[g], o === u || o.fn === u) {
        r.splice(g, 1);
        break;
      }
    return r.length === 0 && delete this._callbacks["$" + s], this;
  };
  ft.prototype.emit = function(s) {
    this._callbacks = this._callbacks || {};
    for (var u = new Array(arguments.length - 1), r = this._callbacks["$" + s], o = 1; o < arguments.length; o++)
      u[o - 1] = arguments[o];
    if (r) {
      r = r.slice(0);
      for (var o = 0, g = r.length; o < g; ++o)
        r[o].apply(this, u);
    }
    return this;
  };
  ft.prototype.emitReserved = ft.prototype.emit;
  ft.prototype.listeners = function(s) {
    return this._callbacks = this._callbacks || {}, this._callbacks["$" + s] || [];
  };
  ft.prototype.hasListeners = function(s) {
    return !!this.listeners(s).length;
  };
  var pn = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
  function Gm(s, ...u) {
    return u.reduce((r, o) => (s.hasOwnProperty(o) && (r[o] = s[o]), r), {});
  }
  var hv = pn.setTimeout;
  var dv = pn.clearTimeout;
  function Tr(s, u) {
    u.useNativeTimers ? (s.setTimeoutFn = hv.bind(pn), s.clearTimeoutFn = dv.bind(pn)) : (s.setTimeoutFn = pn.setTimeout.bind(pn), s.clearTimeoutFn = pn.clearTimeout.bind(pn));
  }
  var pv = 1.33;
  function mv(s) {
    return typeof s == "string" ? yv(s) : Math.ceil((s.byteLength || s.size) * pv);
  }
  function yv(s) {
    let u = 0, r = 0;
    for (let o = 0, g = s.length; o < g; o++)
      u = s.charCodeAt(o), u < 128 ? r += 1 : u < 2048 ? r += 2 : u < 55296 || u >= 57344 ? r += 3 : (o++, r += 4);
    return r;
  }
  function gv(s) {
    let u = "";
    for (let r in s)
      s.hasOwnProperty(r) && (u.length && (u += "&"), u += encodeURIComponent(r) + "=" + encodeURIComponent(s[r]));
    return u;
  }
  function vv(s) {
    let u = {}, r = s.split("&");
    for (let o = 0, g = r.length; o < g; o++) {
      let b = r[o].split("=");
      u[decodeURIComponent(b[0])] = decodeURIComponent(b[1]);
    }
    return u;
  }
  var bv = class extends Error {
    constructor(u, r, o) {
      super(u), this.description = r, this.context = o, this.type = "TransportError";
    }
  };
  var hf = class extends ft {
    constructor(u) {
      super(), this.writable = false, Tr(this, u), this.opts = u, this.query = u.query, this.socket = u.socket;
    }
    onError(u, r, o) {
      return super.emitReserved("error", new bv(u, r, o)), this;
    }
    open() {
      return this.readyState = "opening", this.doOpen(), this;
    }
    close() {
      return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this;
    }
    send(u) {
      this.readyState === "open" && this.write(u);
    }
    onOpen() {
      this.readyState = "open", this.writable = true, super.emitReserved("open");
    }
    onData(u) {
      const r = ff(u, this.socket.binaryType);
      this.onPacket(r);
    }
    onPacket(u) {
      super.emitReserved("packet", u);
    }
    onClose(u) {
      this.readyState = "closed", super.emitReserved("close", u);
    }
    pause(u) {
    }
    createUri(u, r = {}) {
      return u + "://" + this._hostname() + this._port() + this.opts.path + this._query(r);
    }
    _hostname() {
      const u = this.opts.hostname;
      return u.indexOf(":") === -1 ? u : "[" + u + "]";
    }
    _port() {
      return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
    }
    _query(u) {
      const r = gv(u);
      return r.length ? "?" + r : "";
    }
  };
  var Vm = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split("");
  var Ic = 64;
  var Sv = {};
  var gm = 0;
  var mr = 0;
  var vm;
  function bm(s) {
    let u = "";
    do
      u = Vm[s % Ic] + u, s = Math.floor(s / Ic);
    while (s > 0);
    return u;
  }
  function Zm() {
    const s = bm(+new Date());
    return s !== vm ? (gm = 0, vm = s) : s + "." + bm(gm++);
  }
  for (; mr < Ic; mr++)
    Sv[Vm[mr]] = mr;
  var km = false;
  try {
    km = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
  } catch (s) {
  }
  var xv = km;
  function Km(s) {
    const u = s.xdomain;
    try {
      if (typeof XMLHttpRequest < "u" && (!u || xv))
        return new XMLHttpRequest();
    } catch (r) {
    }
    if (!u)
      try {
        return new pn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
      } catch (r) {
      }
  }
  function _v() {
  }
  var Tv = function() {
    return new Km({ xdomain: false }).responseType != null;
  }();
  var Ev = class extends hf {
    constructor(u) {
      if (super(u), this.polling = false, typeof location < "u") {
        const o = location.protocol === "https:";
        let g = location.port;
        g || (g = o ? "443" : "80"), this.xd = typeof location < "u" && u.hostname !== location.hostname || g !== u.port;
      }
      const r = u && u.forceBase64;
      this.supportsBinary = Tv && !r, this.opts.withCredentials && (this.cookieJar = void 0);
    }
    get name() {
      return "polling";
    }
    doOpen() {
      this.poll();
    }
    pause(u) {
      this.readyState = "pausing";
      const r = () => {
        this.readyState = "paused", u();
      };
      if (this.polling || !this.writable) {
        let o = 0;
        this.polling && (o++, this.once("pollComplete", function() {
          --o || r();
        })), this.writable || (o++, this.once("drain", function() {
          --o || r();
        }));
      } else
        r();
    }
    poll() {
      this.polling = true, this.doPoll(), this.emitReserved("poll");
    }
    onData(u) {
      const r = (o) => {
        if (this.readyState === "opening" && o.type === "open" && this.onOpen(), o.type === "close")
          return this.onClose({ description: "transport closed by the server" }), false;
        this.onPacket(o);
      };
      rv(u, this.socket.binaryType).forEach(r), this.readyState !== "closed" && (this.polling = false, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll());
    }
    doClose() {
      const u = () => {
        this.write([{ type: "close" }]);
      };
      this.readyState === "open" ? u() : this.once("open", u);
    }
    write(u) {
      this.writable = false, sv(u, (r) => {
        this.doWrite(r, () => {
          this.writable = true, this.emitReserved("drain");
        });
      });
    }
    uri() {
      const u = this.opts.secure ? "https" : "http", r = this.query || {};
      return this.opts.timestampRequests !== false && (r[this.opts.timestampParam] = Zm()), !this.supportsBinary && !r.sid && (r.b64 = 1), this.createUri(u, r);
    }
    request(u = {}) {
      return Object.assign(u, { xd: this.xd, cookieJar: this.cookieJar }, this.opts), new Ln(this.uri(), u);
    }
    doWrite(u, r) {
      const o = this.request({ method: "POST", data: u });
      o.on("success", r), o.on("error", (g, b) => {
        this.onError("xhr post error", g, b);
      });
    }
    doPoll() {
      const u = this.request();
      u.on("data", this.onData.bind(this)), u.on("error", (r, o) => {
        this.onError("xhr poll error", r, o);
      }), this.pollXhr = u;
    }
  };
  var Ln = class extends ft {
    constructor(u, r) {
      super(), Tr(this, r), this.opts = r, this.method = r.method || "GET", this.uri = u, this.data = r.data !== void 0 ? r.data : null, this.create();
    }
    create() {
      var u;
      const r = Gm(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
      r.xdomain = !!this.opts.xd;
      const o = this.xhr = new Km(r);
      try {
        o.open(this.method, this.uri, true);
        try {
          if (this.opts.extraHeaders) {
            o.setDisableHeaderCheck && o.setDisableHeaderCheck(true);
            for (let g in this.opts.extraHeaders)
              this.opts.extraHeaders.hasOwnProperty(g) && o.setRequestHeader(g, this.opts.extraHeaders[g]);
          }
        } catch (g) {
        }
        if (this.method === "POST")
          try {
            o.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
          } catch (g) {
          }
        try {
          o.setRequestHeader("Accept", "*/*");
        } catch (g) {
        }
        (u = this.opts.cookieJar) === null || u === void 0 || u.addCookies(o), "withCredentials" in o && (o.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (o.timeout = this.opts.requestTimeout), o.onreadystatechange = () => {
          var g;
          o.readyState === 3 && ((g = this.opts.cookieJar) === null || g === void 0 || g.parseCookies(o)), o.readyState === 4 && (o.status === 200 || o.status === 1223 ? this.onLoad() : this.setTimeoutFn(() => {
            this.onError(typeof o.status == "number" ? o.status : 0);
          }, 0));
        }, o.send(this.data);
      } catch (g) {
        this.setTimeoutFn(() => {
          this.onError(g);
        }, 0);
        return;
      }
      typeof document < "u" && (this.index = Ln.requestsCount++, Ln.requests[this.index] = this);
    }
    onError(u) {
      this.emitReserved("error", u, this.xhr), this.cleanup(true);
    }
    cleanup(u) {
      if (!(typeof this.xhr > "u" || this.xhr === null)) {
        if (this.xhr.onreadystatechange = _v, u)
          try {
            this.xhr.abort();
          } catch (r) {
          }
        typeof document < "u" && delete Ln.requests[this.index], this.xhr = null;
      }
    }
    onLoad() {
      const u = this.xhr.responseText;
      u !== null && (this.emitReserved("data", u), this.emitReserved("success"), this.cleanup());
    }
    abort() {
      this.cleanup();
    }
  };
  Ln.requestsCount = 0;
  Ln.requests = {};
  if (typeof document < "u") {
    if (typeof attachEvent == "function")
      attachEvent("onunload", Sm);
    else if (typeof addEventListener == "function") {
      const s = "onpagehide" in pn ? "pagehide" : "unload";
      addEventListener(s, Sm, false);
    }
  }
  function Sm() {
    for (let s in Ln.requests)
      Ln.requests.hasOwnProperty(s) && Ln.requests[s].abort();
  }
  var df = typeof Promise == "function" && typeof Promise.resolve == "function" ? (s) => Promise.resolve().then(s) : (s, u) => u(s, 0);
  var yr = pn.WebSocket || pn.MozWebSocket;
  var xm = true;
  var Av = "arraybuffer";
  var _m = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
  var Ov = class extends hf {
    constructor(u) {
      super(u), this.supportsBinary = !u.forceBase64;
    }
    get name() {
      return "websocket";
    }
    doOpen() {
      if (!this.check())
        return;
      const u = this.uri(), r = this.opts.protocols, o = _m ? {} : Gm(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
      this.opts.extraHeaders && (o.headers = this.opts.extraHeaders);
      try {
        this.ws = xm && !_m ? r ? new yr(u, r) : new yr(u) : new yr(u, r, o);
      } catch (g) {
        return this.emitReserved("error", g);
      }
      this.ws.binaryType = this.socket.binaryType, this.addEventListeners();
    }
    addEventListeners() {
      this.ws.onopen = () => {
        this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
      }, this.ws.onclose = (u) => this.onClose({ description: "websocket connection closed", context: u }), this.ws.onmessage = (u) => this.onData(u.data), this.ws.onerror = (u) => this.onError("websocket error", u);
    }
    write(u) {
      this.writable = false;
      for (let r = 0; r < u.length; r++) {
        const o = u[r], g = r === u.length - 1;
        cf(o, this.supportsBinary, (b) => {
          try {
            xm && this.ws.send(b);
          } catch (p) {
          }
          g && df(() => {
            this.writable = true, this.emitReserved("drain");
          }, this.setTimeoutFn);
        });
      }
    }
    doClose() {
      typeof this.ws < "u" && (this.ws.close(), this.ws = null);
    }
    uri() {
      const u = this.opts.secure ? "wss" : "ws", r = this.query || {};
      return this.opts.timestampRequests && (r[this.opts.timestampParam] = Zm()), this.supportsBinary || (r.b64 = 1), this.createUri(u, r);
    }
    check() {
      return !!yr;
    }
  };
  var wv = class extends hf {
    get name() {
      return "webtransport";
    }
    doOpen() {
      typeof WebTransport == "function" && (this.transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]), this.transport.closed.then(() => {
        this.onClose();
      }).catch((u) => {
        this.onError("webtransport error", u);
      }), this.transport.ready.then(() => {
        this.transport.createBidirectionalStream().then((u) => {
          const r = cv(Number.MAX_SAFE_INTEGER, this.socket.binaryType), o = u.readable.pipeThrough(r).getReader(), g = ov();
          g.readable.pipeTo(u.writable), this.writer = g.writable.getWriter();
          const b = () => {
            o.read().then(({ done: v, value: m }) => {
              v || (this.onPacket(m), b());
            }).catch((v) => {
            });
          };
          b();
          const p = { type: "open" };
          this.query.sid && (p.data = `{"sid":"${this.query.sid}"}`), this.writer.write(p).then(() => this.onOpen());
        });
      }));
    }
    write(u) {
      this.writable = false;
      for (let r = 0; r < u.length; r++) {
        const o = u[r], g = r === u.length - 1;
        this.writer.write(o).then(() => {
          g && df(() => {
            this.writable = true, this.emitReserved("drain");
          }, this.setTimeoutFn);
        });
      }
    }
    doClose() {
      var u;
      (u = this.transport) === null || u === void 0 || u.close();
    }
  };
  var Rv = { websocket: Ov, webtransport: wv, polling: Ev };
  var Nv = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
  var zv = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
  function ef(s) {
    if (s.length > 2e3)
      throw "URI too long";
    const u = s, r = s.indexOf("["), o = s.indexOf("]");
    r != -1 && o != -1 && (s = s.substring(0, r) + s.substring(r, o).replace(/:/g, ";") + s.substring(o, s.length));
    let g = Nv.exec(s || ""), b = {}, p = 14;
    for (; p--; )
      b[zv[p]] = g[p] || "";
    return r != -1 && o != -1 && (b.source = u, b.host = b.host.substring(1, b.host.length - 1).replace(/;/g, ":"), b.authority = b.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), b.ipv6uri = true), b.pathNames = jv(b, b.path), b.queryKey = Cv(b, b.query), b;
  }
  function jv(s, u) {
    const r = /\/{2,9}/g, o = u.replace(r, "/").split("/");
    return (u.slice(0, 1) == "/" || u.length === 0) && o.splice(0, 1), u.slice(-1) == "/" && o.splice(o.length - 1, 1), o;
  }
  function Cv(s, u) {
    const r = {};
    return u.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(o, g, b) {
      g && (r[g] = b);
    }), r;
  }
  var Jm = class Si extends ft {
    constructor(u, r = {}) {
      super(), this.binaryType = Av, this.writeBuffer = [], u && typeof u == "object" && (r = u, u = null), u ? (u = ef(u), r.hostname = u.host, r.secure = u.protocol === "https" || u.protocol === "wss", r.port = u.port, u.query && (r.query = u.query)) : r.host && (r.hostname = ef(r.host).host), Tr(this, r), this.secure = r.secure != null ? r.secure : typeof location < "u" && location.protocol === "https:", r.hostname && !r.port && (r.port = this.secure ? "443" : "80"), this.hostname = r.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = r.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = r.transports || ["polling", "websocket", "webtransport"], this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({ path: "/engine.io", agent: false, withCredentials: false, upgrade: true, timestampParam: "t", rememberUpgrade: false, addTrailingSlash: true, rejectUnauthorized: true, perMessageDeflate: { threshold: 1024 }, transportOptions: {}, closeOnBeforeunload: false }, r), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = vv(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
        this.transport && (this.transport.removeAllListeners(), this.transport.close());
      }, addEventListener("beforeunload", this.beforeunloadEventListener, false)), this.hostname !== "localhost" && (this.offlineEventListener = () => {
        this.onClose("transport close", { description: "network connection lost" });
      }, addEventListener("offline", this.offlineEventListener, false))), this.open();
    }
    createTransport(u) {
      const r = Object.assign({}, this.opts.query);
      r.EIO = Qm, r.transport = u, this.id && (r.sid = this.id);
      const o = Object.assign({}, this.opts, { query: r, socket: this, hostname: this.hostname, secure: this.secure, port: this.port }, this.opts.transportOptions[u]);
      return new Rv[u](o);
    }
    open() {
      let u;
      if (this.opts.rememberUpgrade && Si.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1)
        u = "websocket";
      else if (this.transports.length === 0) {
        this.setTimeoutFn(() => {
          this.emitReserved("error", "No transports available");
        }, 0);
        return;
      } else
        u = this.transports[0];
      this.readyState = "opening";
      try {
        u = this.createTransport(u);
      } catch (r) {
        this.transports.shift(), this.open();
        return;
      }
      u.open(), this.setTransport(u);
    }
    setTransport(u) {
      this.transport && this.transport.removeAllListeners(), this.transport = u, u.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (r) => this.onClose("transport close", r));
    }
    probe(u) {
      let r = this.createTransport(u), o = false;
      Si.priorWebsocketSuccess = false;
      const g = () => {
        o || (r.send([{ type: "ping", data: "probe" }]), r.once("packet", (R) => {
          if (!o)
            if (R.type === "pong" && R.data === "probe") {
              if (this.upgrading = true, this.emitReserved("upgrading", r), !r)
                return;
              Si.priorWebsocketSuccess = r.name === "websocket", this.transport.pause(() => {
                o || this.readyState !== "closed" && (_(), this.setTransport(r), r.send([{ type: "upgrade" }]), this.emitReserved("upgrade", r), r = null, this.upgrading = false, this.flush());
              });
            } else {
              const X = new Error("probe error");
              X.transport = r.name, this.emitReserved("upgradeError", X);
            }
        }));
      };
      function b() {
        o || (o = true, _(), r.close(), r = null);
      }
      const p = (R) => {
        const X = new Error("probe error: " + R);
        X.transport = r.name, b(), this.emitReserved("upgradeError", X);
      };
      function v() {
        p("transport closed");
      }
      function m() {
        p("socket closed");
      }
      function h(R) {
        r && R.name !== r.name && b();
      }
      const _ = () => {
        r.removeListener("open", g), r.removeListener("error", p), r.removeListener("close", v), this.off("close", m), this.off("upgrading", h);
      };
      r.once("open", g), r.once("error", p), r.once("close", v), this.once("close", m), this.once("upgrading", h), this.upgrades.indexOf("webtransport") !== -1 && u !== "webtransport" ? this.setTimeoutFn(() => {
        o || r.open();
      }, 200) : r.open();
    }
    onOpen() {
      if (this.readyState = "open", Si.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(), this.readyState === "open" && this.opts.upgrade) {
        let u = 0;
        const r = this.upgrades.length;
        for (; u < r; u++)
          this.probe(this.upgrades[u]);
      }
    }
    onPacket(u) {
      if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
        switch (this.emitReserved("packet", u), this.emitReserved("heartbeat"), this.resetPingTimeout(), u.type) {
          case "open":
            this.onHandshake(JSON.parse(u.data));
            break;
          case "ping":
            this.sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong");
            break;
          case "error":
            const r = new Error("server error");
            r.code = u.data, this.onError(r);
            break;
          case "message":
            this.emitReserved("data", u.data), this.emitReserved("message", u.data);
            break;
        }
    }
    onHandshake(u) {
      this.emitReserved("handshake", u), this.id = u.sid, this.transport.query.sid = u.sid, this.upgrades = this.filterUpgrades(u.upgrades), this.pingInterval = u.pingInterval, this.pingTimeout = u.pingTimeout, this.maxPayload = u.maxPayload, this.onOpen(), this.readyState !== "closed" && this.resetPingTimeout();
    }
    resetPingTimeout() {
      this.clearTimeoutFn(this.pingTimeoutTimer), this.pingTimeoutTimer = this.setTimeoutFn(() => {
        this.onClose("ping timeout");
      }, this.pingInterval + this.pingTimeout), this.opts.autoUnref && this.pingTimeoutTimer.unref();
    }
    onDrain() {
      this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
    }
    flush() {
      if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
        const u = this.getWritablePackets();
        this.transport.send(u), this.prevBufferLen = u.length, this.emitReserved("flush");
      }
    }
    getWritablePackets() {
      if (!(this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
        return this.writeBuffer;
      let u = 1;
      for (let r = 0; r < this.writeBuffer.length; r++) {
        const o = this.writeBuffer[r].data;
        if (o && (u += mv(o)), r > 0 && u > this.maxPayload)
          return this.writeBuffer.slice(0, r);
        u += 2;
      }
      return this.writeBuffer;
    }
    write(u, r, o) {
      return this.sendPacket("message", u, r, o), this;
    }
    send(u, r, o) {
      return this.sendPacket("message", u, r, o), this;
    }
    sendPacket(u, r, o, g) {
      if (typeof r == "function" && (g = r, r = void 0), typeof o == "function" && (g = o, o = null), this.readyState === "closing" || this.readyState === "closed")
        return;
      o = o || {}, o.compress = o.compress !== false;
      const b = { type: u, data: r, options: o };
      this.emitReserved("packetCreate", b), this.writeBuffer.push(b), g && this.once("flush", g), this.flush();
    }
    close() {
      const u = () => {
        this.onClose("forced close"), this.transport.close();
      }, r = () => {
        this.off("upgrade", r), this.off("upgradeError", r), u();
      }, o = () => {
        this.once("upgrade", r), this.once("upgradeError", r);
      };
      return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
        this.upgrading ? o() : u();
      }) : this.upgrading ? o() : u()), this;
    }
    onError(u) {
      Si.priorWebsocketSuccess = false, this.emitReserved("error", u), this.onClose("transport error", u);
    }
    onClose(u, r) {
      (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") && (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), typeof removeEventListener == "function" && (removeEventListener("beforeunload", this.beforeunloadEventListener, false), removeEventListener("offline", this.offlineEventListener, false)), this.readyState = "closed", this.id = null, this.emitReserved("close", u, r), this.writeBuffer = [], this.prevBufferLen = 0);
    }
    filterUpgrades(u) {
      const r = [];
      let o = 0;
      const g = u.length;
      for (; o < g; o++)
        ~this.transports.indexOf(u[o]) && r.push(u[o]);
      return r;
    }
  };
  Jm.protocol = Qm;
  function Uv(s, u = "", r) {
    let o = s;
    r = r || typeof location < "u" && location, s == null && (s = r.protocol + "//" + r.host), typeof s == "string" && (s.charAt(0) === "/" && (s.charAt(1) === "/" ? s = r.protocol + s : s = r.host + s), /^(https?|wss?):\/\//.test(s) || (typeof r < "u" ? s = r.protocol + "//" + s : s = "https://" + s), o = ef(s)), o.port || (/^(http|ws)$/.test(o.protocol) ? o.port = "80" : /^(http|ws)s$/.test(o.protocol) && (o.port = "443")), o.path = o.path || "/";
    const g = o.host.indexOf(":") !== -1 ? "[" + o.host + "]" : o.host;
    return o.id = o.protocol + "://" + g + ":" + o.port + u, o.href = o.protocol + "://" + g + (r && r.port === o.port ? "" : ":" + o.port), o;
  }
  var Dv = typeof ArrayBuffer == "function";
  var Mv = (s) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(s) : s.buffer instanceof ArrayBuffer;
  var Fm = Object.prototype.toString;
  var Bv = typeof Blob == "function" || typeof Blob < "u" && Fm.call(Blob) === "[object BlobConstructor]";
  var qv = typeof File == "function" || typeof File < "u" && Fm.call(File) === "[object FileConstructor]";
  function pf(s) {
    return Dv && (s instanceof ArrayBuffer || Mv(s)) || Bv && s instanceof Blob || qv && s instanceof File;
  }
  function vr(s, u) {
    if (!s || typeof s != "object")
      return false;
    if (Array.isArray(s)) {
      for (let r = 0, o = s.length; r < o; r++)
        if (vr(s[r]))
          return true;
      return false;
    }
    if (pf(s))
      return true;
    if (s.toJSON && typeof s.toJSON == "function" && arguments.length === 1)
      return vr(s.toJSON(), true);
    for (const r in s)
      if (Object.prototype.hasOwnProperty.call(s, r) && vr(s[r]))
        return true;
    return false;
  }
  function Hv(s) {
    const u = [], r = s.data, o = s;
    return o.data = tf(r, u), o.attachments = u.length, { packet: o, buffers: u };
  }
  function tf(s, u) {
    if (!s)
      return s;
    if (pf(s)) {
      const r = { _placeholder: true, num: u.length };
      return u.push(s), r;
    } else if (Array.isArray(s)) {
      const r = new Array(s.length);
      for (let o = 0; o < s.length; o++)
        r[o] = tf(s[o], u);
      return r;
    } else if (typeof s == "object" && !(s instanceof Date)) {
      const r = {};
      for (const o in s)
        Object.prototype.hasOwnProperty.call(s, o) && (r[o] = tf(s[o], u));
      return r;
    }
    return s;
  }
  function Lv(s, u) {
    return s.data = nf(s.data, u), delete s.attachments, s;
  }
  function nf(s, u) {
    if (!s)
      return s;
    if (s && s._placeholder === true) {
      if (typeof s.num == "number" && s.num >= 0 && s.num < u.length)
        return u[s.num];
      throw new Error("illegal attachments");
    } else if (Array.isArray(s))
      for (let r = 0; r < s.length; r++)
        s[r] = nf(s[r], u);
    else if (typeof s == "object")
      for (const r in s)
        Object.prototype.hasOwnProperty.call(s, r) && (s[r] = nf(s[r], u));
    return s;
  }
  var Yv = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"];
  var Xv = 5;
  var Ne;
  (function(s) {
    s[s.CONNECT = 0] = "CONNECT", s[s.DISCONNECT = 1] = "DISCONNECT", s[s.EVENT = 2] = "EVENT", s[s.ACK = 3] = "ACK", s[s.CONNECT_ERROR = 4] = "CONNECT_ERROR", s[s.BINARY_EVENT = 5] = "BINARY_EVENT", s[s.BINARY_ACK = 6] = "BINARY_ACK";
  })(Ne || (Ne = {}));
  var Qv = class {
    constructor(u) {
      this.replacer = u;
    }
    encode(u) {
      return (u.type === Ne.EVENT || u.type === Ne.ACK) && vr(u) ? this.encodeAsBinary({ type: u.type === Ne.EVENT ? Ne.BINARY_EVENT : Ne.BINARY_ACK, nsp: u.nsp, data: u.data, id: u.id }) : [this.encodeAsString(u)];
    }
    encodeAsString(u) {
      let r = "" + u.type;
      return (u.type === Ne.BINARY_EVENT || u.type === Ne.BINARY_ACK) && (r += u.attachments + "-"), u.nsp && u.nsp !== "/" && (r += u.nsp + ","), u.id != null && (r += u.id), u.data != null && (r += JSON.stringify(u.data, this.replacer)), r;
    }
    encodeAsBinary(u) {
      const r = Hv(u), o = this.encodeAsString(r.packet), g = r.buffers;
      return g.unshift(o), g;
    }
  };
  function Tm(s) {
    return Object.prototype.toString.call(s) === "[object Object]";
  }
  var mf = class extends ft {
    constructor(u) {
      super(), this.reviver = u;
    }
    add(u) {
      let r;
      if (typeof u == "string") {
        if (this.reconstructor)
          throw new Error("got plaintext data when reconstructing a packet");
        r = this.decodeString(u);
        const o = r.type === Ne.BINARY_EVENT;
        o || r.type === Ne.BINARY_ACK ? (r.type = o ? Ne.EVENT : Ne.ACK, this.reconstructor = new Gv(r), r.attachments === 0 && super.emitReserved("decoded", r)) : super.emitReserved("decoded", r);
      } else if (pf(u) || u.base64)
        if (this.reconstructor)
          r = this.reconstructor.takeBinaryData(u), r && (this.reconstructor = null, super.emitReserved("decoded", r));
        else
          throw new Error("got binary data when not reconstructing a packet");
      else
        throw new Error("Unknown type: " + u);
    }
    decodeString(u) {
      let r = 0;
      const o = { type: Number(u.charAt(0)) };
      if (Ne[o.type] === void 0)
        throw new Error("unknown packet type " + o.type);
      if (o.type === Ne.BINARY_EVENT || o.type === Ne.BINARY_ACK) {
        const b = r + 1;
        for (; u.charAt(++r) !== "-" && r != u.length; )
          ;
        const p = u.substring(b, r);
        if (p != Number(p) || u.charAt(r) !== "-")
          throw new Error("Illegal attachments");
        o.attachments = Number(p);
      }
      if (u.charAt(r + 1) === "/") {
        const b = r + 1;
        for (; ++r && !(u.charAt(r) === "," || r === u.length); )
          ;
        o.nsp = u.substring(b, r);
      } else
        o.nsp = "/";
      const g = u.charAt(r + 1);
      if (g !== "" && Number(g) == g) {
        const b = r + 1;
        for (; ++r; ) {
          const p = u.charAt(r);
          if (p == null || Number(p) != p) {
            --r;
            break;
          }
          if (r === u.length)
            break;
        }
        o.id = Number(u.substring(b, r + 1));
      }
      if (u.charAt(++r)) {
        const b = this.tryParse(u.substr(r));
        if (mf.isPayloadValid(o.type, b))
          o.data = b;
        else
          throw new Error("invalid payload");
      }
      return o;
    }
    tryParse(u) {
      try {
        return JSON.parse(u, this.reviver);
      } catch (r) {
        return false;
      }
    }
    static isPayloadValid(u, r) {
      switch (u) {
        case Ne.CONNECT:
          return Tm(r);
        case Ne.DISCONNECT:
          return r === void 0;
        case Ne.CONNECT_ERROR:
          return typeof r == "string" || Tm(r);
        case Ne.EVENT:
        case Ne.BINARY_EVENT:
          return Array.isArray(r) && (typeof r[0] == "number" || typeof r[0] == "string" && Yv.indexOf(r[0]) === -1);
        case Ne.ACK:
        case Ne.BINARY_ACK:
          return Array.isArray(r);
      }
    }
    destroy() {
      this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
    }
  };
  var Gv = class {
    constructor(u) {
      this.packet = u, this.buffers = [], this.reconPack = u;
    }
    takeBinaryData(u) {
      if (this.buffers.push(u), this.buffers.length === this.reconPack.attachments) {
        const r = Lv(this.reconPack, this.buffers);
        return this.finishedReconstruction(), r;
      }
      return null;
    }
    finishedReconstruction() {
      this.reconPack = null, this.buffers = [];
    }
  };
  var Vv = Object.freeze(Object.defineProperty({ __proto__: null, Decoder: mf, Encoder: Qv, get PacketType() {
    return Ne;
  }, protocol: Xv }, Symbol.toStringTag, { value: "Module" }));
  function En(s, u, r) {
    return s.on(u, r), function() {
      s.off(u, r);
    };
  }
  var Zv = Object.freeze({ connect: 1, connect_error: 1, disconnect: 1, disconnecting: 1, newListener: 1, removeListener: 1 });
  var Wm = class extends ft {
    constructor(u, r, o) {
      super(), this.connected = false, this.recovered = false, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = u, this.nsp = r, o && o.auth && (this.auth = o.auth), this._opts = Object.assign({}, o), this.io._autoConnect && this.open();
    }
    get disconnected() {
      return !this.connected;
    }
    subEvents() {
      if (this.subs)
        return;
      const u = this.io;
      this.subs = [En(u, "open", this.onopen.bind(this)), En(u, "packet", this.onpacket.bind(this)), En(u, "error", this.onerror.bind(this)), En(u, "close", this.onclose.bind(this))];
    }
    get active() {
      return !!this.subs;
    }
    connect() {
      return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this);
    }
    open() {
      return this.connect();
    }
    send(...u) {
      return u.unshift("message"), this.emit.apply(this, u), this;
    }
    emit(u, ...r) {
      if (Zv.hasOwnProperty(u))
        throw new Error('"' + u.toString() + '" is a reserved event name');
      if (r.unshift(u), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
        return this._addToQueue(r), this;
      const o = { type: Ne.EVENT, data: r };
      if (o.options = {}, o.options.compress = this.flags.compress !== false, typeof r[r.length - 1] == "function") {
        const b = this.ids++, p = r.pop();
        this._registerAckCallback(b, p), o.id = b;
      }
      const g = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
      return this.flags.volatile && (!g || !this.connected) || (this.connected ? (this.notifyOutgoingListeners(o), this.packet(o)) : this.sendBuffer.push(o)), this.flags = {}, this;
    }
    _registerAckCallback(u, r) {
      var o;
      const g = (o = this.flags.timeout) !== null && o !== void 0 ? o : this._opts.ackTimeout;
      if (g === void 0) {
        this.acks[u] = r;
        return;
      }
      const b = this.io.setTimeoutFn(() => {
        delete this.acks[u];
        for (let p = 0; p < this.sendBuffer.length; p++)
          this.sendBuffer[p].id === u && this.sendBuffer.splice(p, 1);
        r.call(this, new Error("operation has timed out"));
      }, g);
      this.acks[u] = (...p) => {
        this.io.clearTimeoutFn(b), r.apply(this, [null, ...p]);
      };
    }
    emitWithAck(u, ...r) {
      const o = this.flags.timeout !== void 0 || this._opts.ackTimeout !== void 0;
      return new Promise((g, b) => {
        r.push((p, v) => o ? p ? b(p) : g(v) : g(p)), this.emit(u, ...r);
      });
    }
    _addToQueue(u) {
      let r;
      typeof u[u.length - 1] == "function" && (r = u.pop());
      const o = { id: this._queueSeq++, tryCount: 0, pending: false, args: u, flags: Object.assign({ fromQueue: true }, this.flags) };
      u.push((g, ...b) => o !== this._queue[0] ? void 0 : (g !== null ? o.tryCount > this._opts.retries && (this._queue.shift(), r && r(g)) : (this._queue.shift(), r && r(null, ...b)), o.pending = false, this._drainQueue())), this._queue.push(o), this._drainQueue();
    }
    _drainQueue(u = false) {
      if (!this.connected || this._queue.length === 0)
        return;
      const r = this._queue[0];
      r.pending && !u || (r.pending = true, r.tryCount++, this.flags = r.flags, this.emit.apply(this, r.args));
    }
    packet(u) {
      u.nsp = this.nsp, this.io._packet(u);
    }
    onopen() {
      typeof this.auth == "function" ? this.auth((u) => {
        this._sendConnectPacket(u);
      }) : this._sendConnectPacket(this.auth);
    }
    _sendConnectPacket(u) {
      this.packet({ type: Ne.CONNECT, data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, u) : u });
    }
    onerror(u) {
      this.connected || this.emitReserved("connect_error", u);
    }
    onclose(u, r) {
      this.connected = false, delete this.id, this.emitReserved("disconnect", u, r);
    }
    onpacket(u) {
      if (u.nsp === this.nsp)
        switch (u.type) {
          case Ne.CONNECT:
            u.data && u.data.sid ? this.onconnect(u.data.sid, u.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
            break;
          case Ne.EVENT:
          case Ne.BINARY_EVENT:
            this.onevent(u);
            break;
          case Ne.ACK:
          case Ne.BINARY_ACK:
            this.onack(u);
            break;
          case Ne.DISCONNECT:
            this.ondisconnect();
            break;
          case Ne.CONNECT_ERROR:
            this.destroy();
            const r = new Error(u.data.message);
            r.data = u.data.data, this.emitReserved("connect_error", r);
            break;
        }
    }
    onevent(u) {
      const r = u.data || [];
      u.id != null && r.push(this.ack(u.id)), this.connected ? this.emitEvent(r) : this.receiveBuffer.push(Object.freeze(r));
    }
    emitEvent(u) {
      if (this._anyListeners && this._anyListeners.length) {
        const r = this._anyListeners.slice();
        for (const o of r)
          o.apply(this, u);
      }
      super.emit.apply(this, u), this._pid && u.length && typeof u[u.length - 1] == "string" && (this._lastOffset = u[u.length - 1]);
    }
    ack(u) {
      const r = this;
      let o = false;
      return function(...g) {
        o || (o = true, r.packet({ type: Ne.ACK, id: u, data: g }));
      };
    }
    onack(u) {
      const r = this.acks[u.id];
      typeof r == "function" && (r.apply(this, u.data), delete this.acks[u.id]);
    }
    onconnect(u, r) {
      this.id = u, this.recovered = r && this._pid === r, this._pid = r, this.connected = true, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(true);
    }
    emitBuffered() {
      this.receiveBuffer.forEach((u) => this.emitEvent(u)), this.receiveBuffer = [], this.sendBuffer.forEach((u) => {
        this.notifyOutgoingListeners(u), this.packet(u);
      }), this.sendBuffer = [];
    }
    ondisconnect() {
      this.destroy(), this.onclose("io server disconnect");
    }
    destroy() {
      this.subs && (this.subs.forEach((u) => u()), this.subs = void 0), this.io._destroy(this);
    }
    disconnect() {
      return this.connected && this.packet({ type: Ne.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
    }
    close() {
      return this.disconnect();
    }
    compress(u) {
      return this.flags.compress = u, this;
    }
    get volatile() {
      return this.flags.volatile = true, this;
    }
    timeout(u) {
      return this.flags.timeout = u, this;
    }
    onAny(u) {
      return this._anyListeners = this._anyListeners || [], this._anyListeners.push(u), this;
    }
    prependAny(u) {
      return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(u), this;
    }
    offAny(u) {
      if (!this._anyListeners)
        return this;
      if (u) {
        const r = this._anyListeners;
        for (let o = 0; o < r.length; o++)
          if (u === r[o])
            return r.splice(o, 1), this;
      } else
        this._anyListeners = [];
      return this;
    }
    listenersAny() {
      return this._anyListeners || [];
    }
    onAnyOutgoing(u) {
      return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(u), this;
    }
    prependAnyOutgoing(u) {
      return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(u), this;
    }
    offAnyOutgoing(u) {
      if (!this._anyOutgoingListeners)
        return this;
      if (u) {
        const r = this._anyOutgoingListeners;
        for (let o = 0; o < r.length; o++)
          if (u === r[o])
            return r.splice(o, 1), this;
      } else
        this._anyOutgoingListeners = [];
      return this;
    }
    listenersAnyOutgoing() {
      return this._anyOutgoingListeners || [];
    }
    notifyOutgoingListeners(u) {
      if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
        const r = this._anyOutgoingListeners.slice();
        for (const o of r)
          o.apply(this, u.data);
      }
    }
  };
  function _i(s) {
    s = s || {}, this.ms = s.min || 100, this.max = s.max || 1e4, this.factor = s.factor || 2, this.jitter = s.jitter > 0 && s.jitter <= 1 ? s.jitter : 0, this.attempts = 0;
  }
  _i.prototype.duration = function() {
    var s = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
      var u = Math.random(), r = Math.floor(u * this.jitter * s);
      s = (Math.floor(u * 10) & 1) == 0 ? s - r : s + r;
    }
    return Math.min(s, this.max) | 0;
  };
  _i.prototype.reset = function() {
    this.attempts = 0;
  };
  _i.prototype.setMin = function(s) {
    this.ms = s;
  };
  _i.prototype.setMax = function(s) {
    this.max = s;
  };
  _i.prototype.setJitter = function(s) {
    this.jitter = s;
  };
  var af = class extends ft {
    constructor(u, r) {
      var o;
      super(), this.nsps = {}, this.subs = [], u && typeof u == "object" && (r = u, u = void 0), r = r || {}, r.path = r.path || "/socket.io", this.opts = r, Tr(this, r), this.reconnection(r.reconnection !== false), this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0), this.reconnectionDelay(r.reconnectionDelay || 1e3), this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3), this.randomizationFactor((o = r.randomizationFactor) !== null && o !== void 0 ? o : 0.5), this.backoff = new _i({ min: this.reconnectionDelay(), max: this.reconnectionDelayMax(), jitter: this.randomizationFactor() }), this.timeout(r.timeout == null ? 2e4 : r.timeout), this._readyState = "closed", this.uri = u;
      const g = r.parser || Vv;
      this.encoder = new g.Encoder(), this.decoder = new g.Decoder(), this._autoConnect = r.autoConnect !== false, this._autoConnect && this.open();
    }
    reconnection(u) {
      return arguments.length ? (this._reconnection = !!u, this) : this._reconnection;
    }
    reconnectionAttempts(u) {
      return u === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = u, this);
    }
    reconnectionDelay(u) {
      var r;
      return u === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = u, (r = this.backoff) === null || r === void 0 || r.setMin(u), this);
    }
    randomizationFactor(u) {
      var r;
      return u === void 0 ? this._randomizationFactor : (this._randomizationFactor = u, (r = this.backoff) === null || r === void 0 || r.setJitter(u), this);
    }
    reconnectionDelayMax(u) {
      var r;
      return u === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = u, (r = this.backoff) === null || r === void 0 || r.setMax(u), this);
    }
    timeout(u) {
      return arguments.length ? (this._timeout = u, this) : this._timeout;
    }
    maybeReconnectOnOpen() {
      !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect();
    }
    open(u) {
      if (~this._readyState.indexOf("open"))
        return this;
      this.engine = new Jm(this.uri, this.opts);
      const r = this.engine, o = this;
      this._readyState = "opening", this.skipReconnect = false;
      const g = En(r, "open", function() {
        o.onopen(), u && u();
      }), b = (v) => {
        this.cleanup(), this._readyState = "closed", this.emitReserved("error", v), u ? u(v) : this.maybeReconnectOnOpen();
      }, p = En(r, "error", b);
      if (this._timeout !== false) {
        const v = this._timeout, m = this.setTimeoutFn(() => {
          g(), b(new Error("timeout")), r.close();
        }, v);
        this.opts.autoUnref && m.unref(), this.subs.push(() => {
          this.clearTimeoutFn(m);
        });
      }
      return this.subs.push(g), this.subs.push(p), this;
    }
    connect(u) {
      return this.open(u);
    }
    onopen() {
      this.cleanup(), this._readyState = "open", this.emitReserved("open");
      const u = this.engine;
      this.subs.push(En(u, "ping", this.onping.bind(this)), En(u, "data", this.ondata.bind(this)), En(u, "error", this.onerror.bind(this)), En(u, "close", this.onclose.bind(this)), En(this.decoder, "decoded", this.ondecoded.bind(this)));
    }
    onping() {
      this.emitReserved("ping");
    }
    ondata(u) {
      try {
        this.decoder.add(u);
      } catch (r) {
        this.onclose("parse error", r);
      }
    }
    ondecoded(u) {
      df(() => {
        this.emitReserved("packet", u);
      }, this.setTimeoutFn);
    }
    onerror(u) {
      this.emitReserved("error", u);
    }
    socket(u, r) {
      let o = this.nsps[u];
      return o ? this._autoConnect && !o.active && o.connect() : (o = new Wm(this, u, r), this.nsps[u] = o), o;
    }
    _destroy(u) {
      const r = Object.keys(this.nsps);
      for (const o of r)
        if (this.nsps[o].active)
          return;
      this._close();
    }
    _packet(u) {
      const r = this.encoder.encode(u);
      for (let o = 0; o < r.length; o++)
        this.engine.write(r[o], u.options);
    }
    cleanup() {
      this.subs.forEach((u) => u()), this.subs.length = 0, this.decoder.destroy();
    }
    _close() {
      this.skipReconnect = true, this._reconnecting = false, this.onclose("forced close"), this.engine && this.engine.close();
    }
    disconnect() {
      return this._close();
    }
    onclose(u, r) {
      this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", u, r), this._reconnection && !this.skipReconnect && this.reconnect();
    }
    reconnect() {
      if (this._reconnecting || this.skipReconnect)
        return this;
      const u = this;
      if (this.backoff.attempts >= this._reconnectionAttempts)
        this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = false;
      else {
        const r = this.backoff.duration();
        this._reconnecting = true;
        const o = this.setTimeoutFn(() => {
          u.skipReconnect || (this.emitReserved("reconnect_attempt", u.backoff.attempts), !u.skipReconnect && u.open((g) => {
            g ? (u._reconnecting = false, u.reconnect(), this.emitReserved("reconnect_error", g)) : u.onreconnect();
          }));
        }, r);
        this.opts.autoUnref && o.unref(), this.subs.push(() => {
          this.clearTimeoutFn(o);
        });
      }
    }
    onreconnect() {
      const u = this.backoff.attempts;
      this._reconnecting = false, this.backoff.reset(), this.emitReserved("reconnect", u);
    }
  };
  var Nu = {};
  function br(s, u) {
    typeof s == "object" && (u = s, s = void 0), u = u || {};
    const r = Uv(s, u.path || "/socket.io"), o = r.source, g = r.id, b = r.path, p = Nu[g] && b in Nu[g].nsps, v = u.forceNew || u["force new connection"] || u.multiplex === false || p;
    let m;
    return v ? m = new af(o, u) : (Nu[g] || (Nu[g] = new af(o, u)), m = Nu[g]), r.query && !u.query && (u.query = r.queryKey), m.socket(r.path, u);
  }
  Object.assign(br, { Manager: af, Socket: Wm, io: br, connect: br });
  var kv = class {
    constructor(u, r, o, g) {
      _l(this, "socket_port"), _l(this, "host"), _l(this, "port"), _l(this, "protocol"), _l(this, "url"), _l(this, "site_name"), _l(this, "socket");
      var b, p, v, m;
      if (this.socket_port = o != null ? o : "9000", this.host = (b = window.location) == null ? void 0 : b.hostname, this.port = (p = window.location) != null && p.port ? `:${this.socket_port}` : "", this.protocol = ((v = window.location) == null ? void 0 : v.protocol) === "https:" ? "https" : "http", u) {
        let h = new URL(u);
        h.port = "", o ? (h.port = o, this.url = h.toString()) : this.url = h.toString();
      } else
        this.url = `${this.protocol}://${this.host}${this.port}/`;
      r && (this.url = `${this.url}${r}`), this.site_name = r, this.socket = br(`${this.url}`, { withCredentials: true, secure: this.protocol === "https", extraHeaders: g && g.useToken === true ? { Authorization: `${g.type} ${(m = g.token) == null ? void 0 : m.call(g)}` } : {} });
    }
  };
  var Kv = Ie.createContext(null);
  var Jv = ({ url: s = "", tokenParams: u, socketPort: r, swrConfig: o, siteName: g, enableSocket: b = true, children: p, customHeaders: v }) => {
    const m = Ie.useMemo(() => {
      const h = new Og.FrappeApp(s, u, void 0, v);
      return { url: s, tokenParams: u, app: h, auth: h.auth(), db: h.db(), call: h.call(), file: h.file(), socket: b ? new kv(s, g, r, u).socket : void 0, enableSocket: b, socketPort: r };
    }, [s, u, r, b, v]);
    return z.jsx(Kv.Provider, { value: m, children: z.jsx(nv, { value: o, children: p }) });
  };
  var Fv = (s) => {
    var u;
    return z.jsx(Jv, { enableSocket: false, customHeaders: { "x-frappe-csrf-token": (u = window.frappe) == null ? void 0 : u.csrf_token }, children: s.children });
  };
  Object.keys(Zp).map((s) => Zp[s]).filter((s) => s.component).map((s) => {
    const u = (r) => z.jsx(Fv, Yt(Ze({}, r), { children: z.jsx(s, {}) }));
    return customElements.get(s.component) || customElements.define(s.component, fg(u, ju, bg)), { element: u, simulator: "simulator" in s ? s.simulator : void 0, renderInReact: "renderInReact" in s ? s.renderInReact : void 0, tag: s.component };
  }).filter(Boolean);
})();
/*! Axios v1.12.2 Copyright (c) 2025 Matt Zabriskie and contributors */
/**
* @license React
* react-dom-client.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
/**
* @license React
* scheduler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
/**
* @license React
* use-sync-external-store-shim.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
/**
* @license lucide-react v0.542.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
//# sourceMappingURL=index.bundle.N2U77PLX.js.map
