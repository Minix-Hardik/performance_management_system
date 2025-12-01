(() => {
  // ../pms_system/pms_system/public/pms-ui/index.bundle.js
  var O0 = Object.defineProperty;
  var w0 = Object.defineProperties;
  var R0 = Object.getOwnPropertyDescriptors;
  var rr = Object.getOwnPropertySymbols;
  var Mp = Object.prototype.hasOwnProperty;
  var Bp = Object.prototype.propertyIsEnumerable;
  var vi = (s, u) => (u = Symbol[s]) ? u : Symbol.for("Symbol." + s);
  var C0 = (s) => {
    throw TypeError(s);
  };
  var Dp = (s, u, r) => u in s ? O0(s, u, { enumerable: true, configurable: true, writable: true, value: r }) : s[u] = r;
  var Ge = (s, u) => {
    for (var r in u || (u = {}))
      Mp.call(u, r) && Dp(s, r, u[r]);
    if (rr)
      for (var r of rr(u))
        Bp.call(u, r) && Dp(s, r, u[r]);
    return s;
  };
  var Ht = (s, u) => w0(s, R0(u));
  var Rc = (s, u) => {
    var r = {};
    for (var o in s)
      Mp.call(s, o) && u.indexOf(o) < 0 && (r[o] = s[o]);
    if (s != null && rr)
      for (var o of rr(s))
        u.indexOf(o) < 0 && Bp.call(s, o) && (r[o] = s[o]);
    return r;
  };
  var fa = (s, u, r) => new Promise((o, g) => {
    var b = (m) => {
      try {
        S(r.next(m));
      } catch (h) {
        g(h);
      }
    }, p = (m) => {
      try {
        S(r.throw(m));
      } catch (h) {
        g(h);
      }
    }, S = (m) => m.done ? o(m.value) : Promise.resolve(m.value).then(b, p);
    S((r = r.apply(s, u)).next());
  });
  var Sl = function(s, u) {
    this[0] = s, this[1] = u;
  };
  var Cc = (s, u, r) => {
    var o = (p, S, m, h) => {
      try {
        var E = r[p](S), R = (S = E.value) instanceof Sl, X = E.done;
        Promise.resolve(R ? S[0] : S).then((w) => R ? o(p === "return" ? p : "next", S[1] ? { done: w.done, value: w.value } : w, m, h) : m({ value: w, done: X })).catch((w) => o("throw", w, m, h));
      } catch (w) {
        h(w);
      }
    }, g = (p) => b[p] = (S) => new Promise((m, h) => o(p, S, m, h)), b = {};
    return r = r.apply(s, u), b[vi("asyncIterator")] = () => b, g("next"), g("throw"), g("return"), b;
  };
  var Nc = (s) => {
    var u = s[vi("asyncIterator")], r = false, o, g = {};
    return u == null ? (u = s[vi("iterator")](), o = (b) => g[b] = (p) => u[b](p)) : (u = u.call(s), o = (b) => g[b] = (p) => {
      if (r) {
        if (r = false, b === "throw")
          throw p;
        return p;
      }
      return r = true, { done: false, value: new Sl(new Promise((S) => {
        var m = u[b](p);
        m instanceof Object || C0("Object expected"), S(m);
      }), 1) };
    }), g[vi("iterator")] = () => g, o("next"), "throw" in u ? o("throw") : g.throw = (b) => {
      throw b;
    }, "return" in u && o("return"), g;
  };
  var qp = (s, u, r) => (u = s[vi("asyncIterator")]) ? u.call(s) : (s = s[vi("iterator")](), u = {}, r = (o, g) => (g = s[o]) && (u[o] = (b) => new Promise((p, S, m) => (b = g.call(s, b), m = b.done, Promise.resolve(b.value).then((h) => p({ value: h, done: m }), S)))), r("next"), r("return"), u);
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
  var zc = { exports: {} };
  var Au = {};
  var Hp;
  function N0() {
    if (Hp)
      return Au;
    Hp = 1;
    var s = Symbol.for("react.transitional.element"), u = Symbol.for("react.fragment");
    function r(o, g, b) {
      var p = null;
      if (b !== void 0 && (p = "" + b), g.key !== void 0 && (p = "" + g.key), "key" in g) {
        b = {};
        for (var S in g)
          S !== "key" && (b[S] = g[S]);
      } else
        b = g;
      return g = b.ref, { $$typeof: s, type: o, key: p, ref: g !== void 0 ? g : null, props: b };
    }
    return Au.Fragment = u, Au.jsx = r, Au.jsxs = r, Au;
  }
  var Lp;
  function z0() {
    return Lp || (Lp = 1, zc.exports = N0()), zc.exports;
  }
  var j = z0();
  var j0 = (s) => j.jsxs("label", { children: [s.label && j.jsx("div", { children: s.label }), j.jsx("input", { className: "ef-border ef-border-gray-400 ef-rounded ef-px-2 ef-py-1", onChange: (u) => s.onChange(u.target.value), type: "text", value: s.value })] });
  var U0 = (s, u) => {
    var o;
    const r = window.cur_frm;
    return r ? (o = r.set_value) == null ? void 0 : o.call(r, s, u) : null;
  };
  var D0 = () => {
    const s = window.cur_frm;
    return s ? s.doc : null;
  };
  var jc = { exports: {} };
  var ye = {};
  var Yp;
  function M0() {
    if (Yp)
      return ye;
    Yp = 1;
    var s = Symbol.for("react.transitional.element"), u = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), p = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), R = Symbol.for("react.activity"), X = Symbol.iterator;
    function w(O) {
      return O === null || typeof O != "object" ? null : (O = X && O[X] || O["@@iterator"], typeof O == "function" ? O : null);
    }
    var B = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } }, Z = Object.assign, ie = {};
    function ce(O, V, $) {
      this.props = O, this.context = V, this.refs = ie, this.updater = $ || B;
    }
    ce.prototype.isReactComponent = {}, ce.prototype.setState = function(O, V) {
      if (typeof O != "object" && typeof O != "function" && O != null)
        throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, O, V, "setState");
    }, ce.prototype.forceUpdate = function(O) {
      this.updater.enqueueForceUpdate(this, O, "forceUpdate");
    };
    function de() {
    }
    de.prototype = ce.prototype;
    function ae(O, V, $) {
      this.props = O, this.context = V, this.refs = ie, this.updater = $ || B;
    }
    var le = ae.prototype = new de();
    le.constructor = ae, Z(le, ce.prototype), le.isPureReactComponent = true;
    var ge = Array.isArray;
    function Me() {
    }
    var re = { H: null, A: null, T: null, S: null }, Pe = Object.prototype.hasOwnProperty;
    function _t(O, V, $) {
      var ee = $.ref;
      return { $$typeof: s, type: O, key: V, ref: ee !== void 0 ? ee : null, props: $ };
    }
    function pn(O, V) {
      return _t(O.type, V, O.props);
    }
    function At(O) {
      return typeof O == "object" && O !== null && O.$$typeof === s;
    }
    function ot(O) {
      var V = { "=": "=0", ":": "=2" };
      return "$" + O.replace(/[=:]/g, function($) {
        return V[$];
      });
    }
    var Ot = /\/+/g;
    function Ie(O, V) {
      return typeof O == "object" && O !== null && O.key != null ? ot("" + O.key) : V.toString(36);
    }
    function Yt(O) {
      switch (O.status) {
        case "fulfilled":
          return O.value;
        case "rejected":
          throw O.reason;
        default:
          switch (typeof O.status == "string" ? O.then(Me, Me) : (O.status = "pending", O.then(function(V) {
            O.status === "pending" && (O.status = "fulfilled", O.value = V);
          }, function(V) {
            O.status === "pending" && (O.status = "rejected", O.reason = V);
          })), O.status) {
            case "fulfilled":
              return O.value;
            case "rejected":
              throw O.reason;
          }
      }
      throw O;
    }
    function L(O, V, $, ee, pe) {
      var Se = typeof O;
      (Se === "undefined" || Se === "boolean") && (O = null);
      var we = false;
      if (O === null)
        we = true;
      else
        switch (Se) {
          case "bigint":
          case "string":
          case "number":
            we = true;
            break;
          case "object":
            switch (O.$$typeof) {
              case s:
              case u:
                we = true;
                break;
              case E:
                return we = O._init, L(we(O._payload), V, $, ee, pe);
            }
        }
      if (we)
        return pe = pe(O), we = ee === "" ? "." + Ie(O, 0) : ee, ge(pe) ? ($ = "", we != null && ($ = we.replace(Ot, "$&/") + "/"), L(pe, V, $, "", function(Za) {
          return Za;
        })) : pe != null && (At(pe) && (pe = pn(pe, $ + (pe.key == null || O && O.key === pe.key ? "" : ("" + pe.key).replace(Ot, "$&/") + "/") + we)), V.push(pe)), 1;
      we = 0;
      var gt = ee === "" ? "." : ee + ":";
      if (ge(O))
        for (var Ke = 0; Ke < O.length; Ke++)
          ee = O[Ke], Se = gt + Ie(ee, Ke), we += L(ee, V, $, Se, pe);
      else if (Ke = w(O), typeof Ke == "function")
        for (O = Ke.call(O), Ke = 0; !(ee = O.next()).done; )
          ee = ee.value, Se = gt + Ie(ee, Ke++), we += L(ee, V, $, Se, pe);
      else if (Se === "object") {
        if (typeof O.then == "function")
          return L(Yt(O), V, $, ee, pe);
        throw V = String(O), Error("Objects are not valid as a React child (found: " + (V === "[object Object]" ? "object with keys {" + Object.keys(O).join(", ") + "}" : V) + "). If you meant to render a collection of children, use an array instead.");
      }
      return we;
    }
    function W(O, V, $) {
      if (O == null)
        return O;
      var ee = [], pe = 0;
      return L(O, ee, "", "", function(Se) {
        return V.call($, Se, pe++);
      }), ee;
    }
    function ue(O) {
      if (O._status === -1) {
        var V = O._result;
        V = V(), V.then(function($) {
          (O._status === 0 || O._status === -1) && (O._status = 1, O._result = $);
        }, function($) {
          (O._status === 0 || O._status === -1) && (O._status = 2, O._result = $);
        }), O._status === -1 && (O._status = 0, O._result = V);
      }
      if (O._status === 1)
        return O._result.default;
      throw O._result;
    }
    var Ne = typeof reportError == "function" ? reportError : function(O) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var V = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof O == "object" && O !== null && typeof O.message == "string" ? String(O.message) : String(O), error: O });
        if (!window.dispatchEvent(V))
          return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", O);
        return;
      }
      console.error(O);
    }, ze = { map: W, forEach: function(O, V, $) {
      W(O, function() {
        V.apply(this, arguments);
      }, $);
    }, count: function(O) {
      var V = 0;
      return W(O, function() {
        V++;
      }), V;
    }, toArray: function(O) {
      return W(O, function(V) {
        return V;
      }) || [];
    }, only: function(O) {
      if (!At(O))
        throw Error("React.Children.only expected to receive a single React element child.");
      return O;
    } };
    return ye.Activity = R, ye.Children = ze, ye.Component = ce, ye.Fragment = r, ye.Profiler = g, ye.PureComponent = ae, ye.StrictMode = o, ye.Suspense = m, ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = re, ye.__COMPILER_RUNTIME = { __proto__: null, c: function(O) {
      return re.H.useMemoCache(O);
    } }, ye.cache = function(O) {
      return function() {
        return O.apply(null, arguments);
      };
    }, ye.cacheSignal = function() {
      return null;
    }, ye.cloneElement = function(O, V, $) {
      if (O == null)
        throw Error("The argument must be a React element, but you passed " + O + ".");
      var ee = Z({}, O.props), pe = O.key;
      if (V != null)
        for (Se in V.key !== void 0 && (pe = "" + V.key), V)
          !Pe.call(V, Se) || Se === "key" || Se === "__self" || Se === "__source" || Se === "ref" && V.ref === void 0 || (ee[Se] = V[Se]);
      var Se = arguments.length - 2;
      if (Se === 1)
        ee.children = $;
      else if (1 < Se) {
        for (var we = Array(Se), gt = 0; gt < Se; gt++)
          we[gt] = arguments[gt + 2];
        ee.children = we;
      }
      return _t(O.type, pe, ee);
    }, ye.createContext = function(O) {
      return O = { $$typeof: p, _currentValue: O, _currentValue2: O, _threadCount: 0, Provider: null, Consumer: null }, O.Provider = O, O.Consumer = { $$typeof: b, _context: O }, O;
    }, ye.createElement = function(O, V, $) {
      var ee, pe = {}, Se = null;
      if (V != null)
        for (ee in V.key !== void 0 && (Se = "" + V.key), V)
          Pe.call(V, ee) && ee !== "key" && ee !== "__self" && ee !== "__source" && (pe[ee] = V[ee]);
      var we = arguments.length - 2;
      if (we === 1)
        pe.children = $;
      else if (1 < we) {
        for (var gt = Array(we), Ke = 0; Ke < we; Ke++)
          gt[Ke] = arguments[Ke + 2];
        pe.children = gt;
      }
      if (O && O.defaultProps)
        for (ee in we = O.defaultProps, we)
          pe[ee] === void 0 && (pe[ee] = we[ee]);
      return _t(O, Se, pe);
    }, ye.createRef = function() {
      return { current: null };
    }, ye.forwardRef = function(O) {
      return { $$typeof: S, render: O };
    }, ye.isValidElement = At, ye.lazy = function(O) {
      return { $$typeof: E, _payload: { _status: -1, _result: O }, _init: ue };
    }, ye.memo = function(O, V) {
      return { $$typeof: h, type: O, compare: V === void 0 ? null : V };
    }, ye.startTransition = function(O) {
      var V = re.T, $ = {};
      re.T = $;
      try {
        var ee = O(), pe = re.S;
        pe !== null && pe($, ee), typeof ee == "object" && ee !== null && typeof ee.then == "function" && ee.then(Me, Ne);
      } catch (Se) {
        Ne(Se);
      } finally {
        V !== null && $.types !== null && (V.types = $.types), re.T = V;
      }
    }, ye.unstable_useCacheRefresh = function() {
      return re.H.useCacheRefresh();
    }, ye.use = function(O) {
      return re.H.use(O);
    }, ye.useActionState = function(O, V, $) {
      return re.H.useActionState(O, V, $);
    }, ye.useCallback = function(O, V) {
      return re.H.useCallback(O, V);
    }, ye.useContext = function(O) {
      return re.H.useContext(O);
    }, ye.useDebugValue = function() {
    }, ye.useDeferredValue = function(O, V) {
      return re.H.useDeferredValue(O, V);
    }, ye.useEffect = function(O, V) {
      return re.H.useEffect(O, V);
    }, ye.useEffectEvent = function(O) {
      return re.H.useEffectEvent(O);
    }, ye.useId = function() {
      return re.H.useId();
    }, ye.useImperativeHandle = function(O, V, $) {
      return re.H.useImperativeHandle(O, V, $);
    }, ye.useInsertionEffect = function(O, V) {
      return re.H.useInsertionEffect(O, V);
    }, ye.useLayoutEffect = function(O, V) {
      return re.H.useLayoutEffect(O, V);
    }, ye.useMemo = function(O, V) {
      return re.H.useMemo(O, V);
    }, ye.useOptimistic = function(O, V) {
      return re.H.useOptimistic(O, V);
    }, ye.useReducer = function(O, V, $) {
      return re.H.useReducer(O, V, $);
    }, ye.useRef = function(O) {
      return re.H.useRef(O);
    }, ye.useState = function(O) {
      return re.H.useState(O);
    }, ye.useSyncExternalStore = function(O, V, $) {
      return re.H.useSyncExternalStore(O, V, $);
    }, ye.useTransition = function() {
      return re.H.useTransition();
    }, ye.version = "19.2.0", ye;
  }
  var Xp;
  function af() {
    return Xp || (Xp = 1, jc.exports = M0()), jc.exports;
  }
  var Fe = af();
  var zu = Em(Fe);
  var lf = () => {
    var r;
    const [s, u] = Fe.useState((r = D0()) == null ? void 0 : r.client_name);
    return Fe.useEffect(() => {
      U0("client_name", s);
    }, [s]), j.jsx(j.Fragment, { children: j.jsx(j0, { value: s, onChange: u, label: "Client Name" }) });
  };
  lf.component = "pms-demo-component";
  lf.simulator = { doctype: "Appraisal Cycle", docname: "2025-26" };
  var B0 = (s) => s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  var q0 = (s) => s.replace(/^([A-Z])|[\s-_]+(\w)/g, (u, r, o) => o ? o.toUpperCase() : r.toLowerCase());
  var Gp = (s) => {
    const u = q0(s);
    return u.charAt(0).toUpperCase() + u.slice(1);
  };
  var Tm = (...s) => s.filter((u, r, o) => !!u && u.trim() !== "" && o.indexOf(u) === r).join(" ").trim();
  var H0 = (s) => {
    for (const u in s)
      if (u.startsWith("aria-") || u === "role" || u === "title")
        return true;
  };
  var L0 = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
  var Y0 = Fe.forwardRef((h, m) => {
    var E = h, { color: s = "currentColor", size: u = 24, strokeWidth: r = 2, absoluteStrokeWidth: o, className: g = "", children: b, iconNode: p } = E, S = Rc(E, ["color", "size", "strokeWidth", "absoluteStrokeWidth", "className", "children", "iconNode"]);
    return Fe.createElement("svg", Ge(Ge(Ht(Ge({ ref: m }, L0), { width: u, height: u, stroke: s, strokeWidth: o ? Number(r) * 24 / Number(u) : r, className: Tm("lucide", g) }), !b && !H0(S) && { "aria-hidden": "true" }), S), [...p.map(([R, X]) => Fe.createElement(R, X)), ...Array.isArray(b) ? b : [b]]);
  });
  var _m = (s, u) => {
    const r = Fe.forwardRef((p, b) => {
      var S = p, { className: o } = S, g = Rc(S, ["className"]);
      return Fe.createElement(Y0, Ge({ ref: b, iconNode: u, className: Tm(`lucide-${B0(Gp(s))}`, `lucide-${s}`, o) }, g));
    });
    return r.displayName = Gp(s), r;
  };
  var X0 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
  var G0 = _m("chevron-down", X0);
  var Q0 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
  var V0 = _m("chevron-up", Q0);
  var xi = ({ rating: s, onChange: u, disabled: r }) => j.jsx("div", { className: "ef-space-y-2", children: j.jsxs("div", { className: "ef-flex ef-items-center ef-gap-3", children: [j.jsx("input", { type: "number", min: 0, max: 10, step: 0.5, value: s != null ? s : "", onChange: (o) => u(parseFloat(o.target.value)), disabled: r, className: "ef-w-20 ef-px-3 ef-py-2 ef-border ef-rounded-lg ef-text-center ef-font-semibold ef-text-lg", placeholder: "0-10" }), j.jsx("span", { className: "ef-text-gray-600", children: "/ 10" })] }) });
  var Z0 = ({ kra: s, goal: u, appraisalMode: r, updateGoalRating: o, selfAppraisalSubmitted: g }) => r === "self" ? j.jsxs("div", { className: "ef-bg-white ef-p-4 ef-rounded-2xl ef-border-2 ef-border-blue-200 ef-shadow-lg ef-shadow-blue-100/50 ef-hover:shadow-xl ef-hover:shadow-blue-200/60 ef-transition-all ef-duration-300", children: [j.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-3", children: [j.jsx("div", { className: "ef-w-1 ef-h-6 ef-bg-blue-500 ef-rounded-full" }), j.jsx("h4", { className: "ef-font-bold ef-text-gray-800 ef-text-base", children: "Self Appraisal" })] }), j.jsxs("div", { className: "ef-mb-3", children: [j.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-uppercase ef-tracking-wide ef-mb-2", children: "Rating" }), j.jsx(xi, { rating: u.selfRating, onChange: (b) => o(s.id, u.id, "selfRating", b), disabled: false })] }), j.jsxs("div", { children: [j.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-uppercase ef-tracking-wide ef-mb-2", children: "Comments" }), j.jsx("textarea", { value: u.selfComments, onChange: (b) => o(s.id, u.id, "selfComments", b.target.value), className: "ef-w-full ef-p-3 ef-bg-gray-50 ef-border-0 ef-rounded-xl ef-resize-none ef-text-sm ef-text-gray-700 ef-focus:outline-none ef-focus:ring-2 ef-focus:ring-blue-400 ef-transition-all", rows: 2, placeholder: "Share your thoughts..." })] })] }) : j.jsxs("div", { className: "ef-grid ef-grid-cols-2 ef-gap-4", children: [j.jsxs("div", { className: "ef-bg-white ef-p-4 ef-rounded-2xl ef-border-2 ef-border-blue-200 ef-shadow-lg ef-shadow-blue-100/50 ef-hover:shadow-xl ef-hover:shadow-blue-200/60 ef-transition-all ef-duration-300", children: [j.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-3", children: [j.jsx("div", { className: "ef-w-1 ef-h-6 ef-bg-blue-500 ef-rounded-full" }), j.jsx("h4", { className: "ef-font-bold ef-text-gray-800 ef-text-sm", children: "Employee Self Rating" })] }), j.jsxs("div", { className: "ef-mb-3", children: [j.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-uppercase ef-tracking-wide ef-mb-2", children: "Rating" }), j.jsxs("div", { className: "ef-inline-flex ef-items-center ef-gap-2 ef-px-3 ef-py-1.5 ef-bg-blue-50 ef-rounded-lg ef-border ef-border-blue-200", children: [j.jsx("span", { className: "ef-text-2xl ef-font-black ef-text-blue-600", children: u.selfRating }), j.jsx("span", { className: "ef-text-sm ef-font-medium ef-text-gray-500", children: "/10" })] })] }), j.jsxs("div", { children: [j.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-uppercase ef-tracking-wide ef-mb-2", children: "Comments" }), j.jsx("div", { className: "ef-p-3 ef-bg-gray-50 ef-rounded-xl ef-text-sm ef-text-gray-700 ef-min-h-[60px] ef-leading-relaxed", children: u.selfComments || j.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] }), j.jsxs("div", { className: "ef-bg-white ef-p-4 ef-rounded-2xl ef-border-2 ef-border-purple-200 ef-shadow-lg ef-shadow-purple-100/50 ef-hover:shadow-xl ef-hover:shadow-purple-200/60 ef-transition-all ef-duration-300", children: [j.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-3", children: [j.jsx("div", { className: "ef-w-1 ef-h-6 ef-bg-purple-500 ef-rounded-full" }), j.jsx("h4", { className: "ef-font-bold ef-text-gray-800 ef-text-sm", children: "Manager Review" })] }), j.jsxs("div", { className: "ef-mb-3", children: [j.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-uppercase ef-tracking-wide ef-mb-2", children: "Rating" }), j.jsx(xi, { rating: u.managerRating, onChange: (b) => o(s.id, u.id, "managerRating", b), disabled: !g })] }), j.jsxs("div", { children: [j.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-uppercase ef-tracking-wide ef-mb-2", children: "Comments" }), j.jsx("textarea", { value: u.managerComments, onChange: (b) => o(s.id, u.id, "managerComments", b.target.value), disabled: !g, className: "ef-w-full ef-p-3 ef-bg-gray-50 ef-border-0 ef-rounded-xl ef-resize-none ef-text-sm ef-text-gray-700 ef-focus:outline-none ef-focus:ring-2 ef-focus:ring-purple-400 ef-transition-all ef-disabled:bg-gray-100 ef-disabled:text-gray-400", rows: 2, placeholder: "Add your review..." })] })] })] });
  var k0 = ({ kra: s, appraisalMode: u, updateKRARating: r, selfAppraisalSubmitted: o }) => u === "self" ? j.jsxs("div", { className: "ef-bg-blue-50 ef-p-4 ef-rounded-lg", children: [j.jsx("h4", { className: "ef-font-semibold ef-text-blue-900 ef-mb-3", children: "Self Appraisal" }), j.jsx("label", { className: "ef-block ef-text-sm ef-font-medium ef-mb-2", children: "Rating" }), j.jsx(xi, { rating: s.selfRating, onChange: (g) => r(s.id, "selfRating", g), disabled: false }), j.jsx("label", { className: "ef-block ef-text-sm ef-font-medium ef-mt-4 ef-mb-2", children: "Comments" }), j.jsx("textarea", { value: s.selfComments, onChange: (g) => r(s.id, "selfComments", g.target.value), className: "ef-w-full ef-p-2 ef-border ef-rounded-lg ef-resize-none", rows: 3 })] }) : j.jsxs("div", { className: "ef-grid ef-grid-cols-2 ef-gap-4", children: [j.jsxs("div", { className: "ef-bg-blue-50 ef-p-4 ef-rounded-lg", children: [j.jsx("h4", { className: "ef-font-semibold ef-text-blue-900 ef-mb-3", children: "Employee Self Rating" }), j.jsx("label", { className: "ef-block ef-text-sm ef-font-medium ef-mb-2", children: "Rating" }), j.jsxs("div", { className: "ef-text-2xl ef-font-bold ef-text-blue-600", children: [s.selfRating, "/10"] }), j.jsx("label", { className: "ef-block ef-text-sm ef-font-medium ef-mt-4 ef-mb-2", children: "Comments" }), j.jsx("div", { className: "ef-p-3 ef-bg-white ef-rounded-lg ef-text-gray-700 ef-min-h-[80px]", children: s.selfComments || "No comments" })] }), j.jsxs("div", { className: "ef-bg-purple-50 ef-p-4 ef-rounded-lg", children: [j.jsx("h4", { className: "ef-font-semibold ef-text-purple-900 ef-mb-3", children: "Manager Review" }), j.jsx("label", { className: "ef-block ef-text-sm ef-font-medium ef-mb-2", children: "Rating" }), j.jsx(xi, { rating: s.managerRating, onChange: (g) => r(s.id, "managerRating", g), disabled: !o }), j.jsx("label", { className: "ef-block ef-text-sm ef-font-medium ef-mt-4 ef-mb-2", children: "Comments" }), j.jsx("textarea", { value: s.managerComments, onChange: (g) => r(s.id, "managerComments", g.target.value), disabled: !o, className: "ef-w-full ef-p-2 ef-border ef-rounded-lg ef-resize-none", rows: 3 })] })] });
  var K0 = ({ kra: s, expanded: u, onToggle: r, appraisalMode: o, selfAppraisalSubmitted: g, updateGoalRating: b, updateKRARating: p }) => j.jsxs("div", { className: "ef-border ef-rounded-lg", children: [j.jsxs("div", { onClick: r, className: "ef-flex ef-justify-between ef-items-center ef-p-4 ef-bg-gray-50 ef-cursor-pointer ef-hover:bg-gray-100", children: [j.jsxs("div", { className: "ef-flex-1", children: [j.jsxs("div", { className: "ef-flex ef-items-center ef-gap-3", children: [j.jsx("h3", { className: "ef-text-lg ef-font-semibold ef-text-gray-900", children: s.title }), j.jsxs("span", { className: "ef-px-3 ef-py-1 ef-bg-blue-100 ef-text-blue-700 ef-text-sm ef-rounded-full", children: [s.weightage, "% weightage"] })] }), j.jsx("p", { className: "ef-text-gray-600 ef-text-sm ef-mt-1", children: s.description })] }), u ? j.jsx(V0, {}) : j.jsx(G0, {})] }), u && j.jsx("div", { className: "ef-p-4", children: s.goals.length > 0 ? s.goals.map((S) => j.jsxs("div", { className: "ef-mb-6 ef-last:mb-0 ef-pb-6 ef-last:pb-0 ef-border-b ef-last:border-b-0", children: [j.jsxs("div", { className: "ef-mb-3", children: [j.jsxs("p", { className: "ef-font-medium ef-text-gray-900", children: [S.description, j.jsxs("span", { className: "ef-inline-flex ef-items-center ef-px-3 ef-py-1 ef-bg-gradient-to-r ef-from-purple-500 ef-to-pink-500 ef-text-white ef-text-xs ef-font-semibold ef-rounded-full ef-shadow-sm ef-mx-3", children: [S.weightage, "% weightage"] })] }), j.jsx("div", { className: "ef-w-full ef-bg-gray-200 ef-rounded-full ef-h-3 ef-overflow-hidden ef-mt-2", children: j.jsx("div", { className: "ef-h-full ef-bg-gradient-to-r ef-from-green-400 ef-to-green-600 ef-transition-all ef-duration-500", style: { width: `${Math.min(S.progress, 100)}%` } }) }), j.jsxs("p", { className: "ef-text-sm ef-text-gray-600 ef-mt-1", children: ["Progress: ", Math.min(S.progress, 100), "%"] })] }), j.jsx(Z0, { kra: s, goal: S, appraisalMode: o, updateGoalRating: b, selfAppraisalSubmitted: g })] }, S.id)) : j.jsx(k0, { kra: s, appraisalMode: o, updateKRARating: p, selfAppraisalSubmitted: g }) })] });
  var J0 = ({ kraList: s, expandedKRA: u, toggleKRA: r, appraisalMode: o, selfAppraisalSubmitted: g, updateGoalRating: b, updateKRARating: p }) => j.jsx("div", { className: "ef-space-y-4", children: s.map((S) => j.jsx(K0, { kra: S, expanded: u[S.id], onToggle: () => r(S.id), appraisalMode: o, selfAppraisalSubmitted: g, updateGoalRating: b, updateKRARating: p }, S.id)) });
  var F0 = ({ comp: s, appraisalMode: u, selfAppraisalSubmitted: r, updateCompetency: o }) => j.jsxs("div", { className: "ef-bg-white ef-rounded-2xl ef-border-2 ef-border-gray-200 ef-p-5 ef-shadow-lg ef-shadow-gray-100/50 ef-hover:shadow-xl ef-hover:shadow-gray-200/60 ef-transition-all ef-duration-300 ef-space-y-4", children: [j.jsxs("div", { className: "ef-flex ef-items-center ef-gap-3 ef-flex-wrap", children: [j.jsx("h3", { className: "ef-text-base ef-font-bold ef-text-gray-900", children: s.name }), j.jsxs("span", { className: "ef-inline-flex ef-items-center ef-px-3 ef-py-1 ef-bg-gradient-to-r ef-from-purple-500 ef-to-pink-500 ef-text-white ef-text-xs ef-font-semibold ef-rounded-full ef-shadow-sm", children: [s.weightage, "% weightage"] })] }), u === "self" ? j.jsxs("div", { className: "ef-bg-white ef-p-4 ef-rounded-xl ef-border-2 ef-border-blue-200 ef-shadow-md ef-shadow-blue-100/50", children: [j.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-3", children: [j.jsx("div", { className: "ef-w-1 ef-h-6 ef-bg-blue-500 ef-rounded-full" }), j.jsx("h4", { className: "ef-font-bold ef-text-gray-800 ef-text-sm", children: "Self Appraisal" })] }), j.jsxs("div", { className: "ef-mb-3", children: [j.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-uppercase ef-tracking-wide ef-mb-2", children: "Rating" }), j.jsx(xi, { rating: s.selfRating, onChange: (g) => o(s.id, "selfRating", g), disabled: false })] }), j.jsxs("div", { children: [j.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-uppercase ef-tracking-wide ef-mb-2", children: "Comments" }), j.jsx("textarea", { value: s.selfComments, onChange: (g) => o(s.id, "selfComments", g.target.value), className: "ef-w-full ef-p-3 ef-bg-gray-50 ef-border-0 ef-rounded-xl ef-resize-none ef-text-sm ef-text-gray-700 ef-focus:outline-none ef-focus:ring-2 ef-focus:ring-blue-400 ef-transition-all", rows: 2, placeholder: "Share your thoughts..." })] })] }) : j.jsxs("div", { className: "ef-grid ef-grid-cols-2 ef-gap-4", children: [j.jsxs("div", { className: "ef-bg-white ef-p-4 ef-rounded-xl ef-border-2 ef-border-blue-200 ef-shadow-md ef-shadow-blue-100/50", children: [j.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-3", children: [j.jsx("div", { className: "ef-w-1 ef-h-6 ef-bg-blue-500 ef-rounded-full" }), j.jsx("h4", { className: "ef-font-bold ef-text-gray-800 ef-text-sm", children: "Employee Self Rating" })] }), j.jsxs("div", { className: "ef-mb-3", children: [j.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-uppercase ef-tracking-wide ef-mb-2", children: "Rating" }), j.jsxs("div", { className: "ef-inline-flex ef-items-center ef-gap-2 ef-px-3 ef-py-1.5 ef-bg-blue-50 ef-rounded-lg ef-border ef-border-blue-200", children: [j.jsx("span", { className: "ef-text-2xl ef-font-black ef-text-blue-600", children: s.selfRating }), j.jsx("span", { className: "ef-text-sm ef-font-medium ef-text-gray-500", children: "/10" })] })] }), j.jsxs("div", { children: [j.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-uppercase ef-tracking-wide ef-mb-2", children: "Comments" }), j.jsx("div", { className: "ef-p-3 ef-bg-gray-50 ef-rounded-xl ef-text-sm ef-text-gray-700 ef-min-h-[80px] ef-leading-relaxed", children: s.selfComments || j.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] }), j.jsxs("div", { className: "ef-bg-white ef-p-4 ef-rounded-xl ef-border-2 ef-border-purple-200 ef-shadow-md ef-shadow-purple-100/50", children: [j.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-3", children: [j.jsx("div", { className: "ef-w-1 ef-h-6 ef-bg-purple-500 ef-rounded-full" }), j.jsx("h4", { className: "ef-font-bold ef-text-gray-800 ef-text-sm", children: "Manager Review" })] }), j.jsxs("div", { className: "ef-mb-3", children: [j.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-uppercase ef-tracking-wide ef-mb-2", children: "Rating" }), j.jsx(xi, { rating: s.managerRating, onChange: (g) => o(s.id, "managerRating", g), disabled: !r })] }), j.jsxs("div", { children: [j.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-uppercase ef-tracking-wide ef-mb-2", children: "Comments" }), j.jsx("textarea", { value: s.managerComments, onChange: (g) => o(s.id, "managerComments", g.target.value), disabled: !r, className: "ef-w-full ef-p-3 ef-bg-gray-50 ef-border-0 ef-rounded-xl ef-resize-none ef-text-sm ef-text-gray-700 ef-focus:outline-none ef-focus:ring-2 ef-focus:ring-purple-400 ef-transition-all ef-disabled:bg-gray-100 ef-disabled:text-gray-400", rows: 2, placeholder: "Add your review..." })] })] })] })] });
  var W0 = ({ competencies: s, appraisalMode: u, selfAppraisalSubmitted: r, updateCompetency: o }) => j.jsx("div", { className: "ef-space-y-6", children: s.map((g) => j.jsx(F0, { comp: g, appraisalMode: u, selfAppraisalSubmitted: r, updateCompetency: o }, g.id)) });
  var $0 = ({ question: s, appraisalMode: u, selfAppraisalSubmitted: r, updateQuestion: o, index: g }) => j.jsxs("div", { className: "ef-bg-white ef-rounded-2xl ef-border-2 ef-border-gray-200 ef-p-5 ef-shadow-lg ef-shadow-gray-100/50 ef-hover:shadow-xl ef-hover:shadow-gray-200/60 ef-transition-all ef-duration-300 ef-space-y-4", children: [j.jsxs("div", { className: "ef-flex ef-items-start ef-gap-3", children: [j.jsx("div", { className: "ef-flex-shrink-0 ef-w-8 ef-h-8 ef-bg-gradient-to-br ef-from-gray-700 ef-to-gray-900 ef-rounded-lg ef-flex ef-items-center ef-justify-center ef-text-white ef-font-bold ef-text-sm ef-shadow-md", children: g + 1 }), j.jsx("h3", { className: "ef-text-base ef-font-bold ef-text-gray-900 ef-leading-tight ef-pt-1", children: s.question })] }), u === "self" ? j.jsxs("div", { className: "ef-bg-white ef-p-4 ef-rounded-xl ef-border-2 ef-border-blue-200 ef-shadow-md ef-shadow-blue-100/50", children: [j.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-3", children: [j.jsx("div", { className: "ef-w-1 ef-h-5 ef-bg-blue-500 ef-rounded-full" }), j.jsx("h4", { className: "ef-font-bold ef-text-gray-800 ef-text-sm", children: "Your Answer" })] }), j.jsx("textarea", { value: s.selfAnswer, onChange: (b) => o(s.id, "selfAnswer", b.target.value), className: "ef-w-full ef-p-3 ef-bg-gray-50 ef-border-0 ef-rounded-xl ef-resize-none ef-text-sm ef-text-gray-700 ef-focus:outline-none ef-focus:ring-2 ef-focus:ring-blue-400 ef-transition-all", rows: 4, placeholder: "Enter your answer..." })] }) : j.jsxs("div", { className: "ef-space-y-3", children: [j.jsxs("div", { className: "ef-bg-white ef-p-4 ef-rounded-xl ef-border-2 ef-border-blue-200 ef-shadow-md ef-shadow-blue-100/50", children: [j.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-3", children: [j.jsx("div", { className: "ef-w-1 ef-h-5 ef-bg-blue-500 ef-rounded-full" }), j.jsx("h4", { className: "ef-font-bold ef-text-gray-800 ef-text-sm", children: "Employee's Answer" })] }), j.jsx("div", { className: "ef-p-3 ef-bg-gray-50 ef-rounded-xl ef-text-sm ef-text-gray-700 ef-min-h-[80px] ef-leading-relaxed", children: s.selfAnswer || j.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No answer provided" }) })] }), j.jsxs("div", { className: "ef-bg-white ef-p-4 ef-rounded-xl ef-border-2 ef-border-purple-200 ef-shadow-md ef-shadow-purple-100/50", children: [j.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-3", children: [j.jsx("div", { className: "ef-w-1 ef-h-5 ef-bg-purple-500 ef-rounded-full" }), j.jsx("h4", { className: "ef-font-bold ef-text-gray-800 ef-text-sm", children: "Manager's Comments" })] }), j.jsx("textarea", { value: s.managerComments, onChange: (b) => o(s.id, "managerComments", b.target.value), disabled: !r, className: "ef-w-full ef-p-3 ef-bg-gray-50 ef-border-0 ef-rounded-xl ef-resize-none ef-text-sm ef-text-gray-700 ef-focus:outline-none ef-focus:ring-2 ef-focus:ring-purple-400 ef-transition-all ef-disabled:bg-gray-100 ef-disabled:text-gray-400", rows: 4, placeholder: "Enter your feedback..." })] })] })] });
  var P0 = ({ questions: s, appraisalMode: u, selfAppraisalSubmitted: r, updateQuestion: o }) => j.jsx("div", { className: "ef-space-y-6", children: s.map((g, b) => j.jsx($0, { question: g, index: b, appraisalMode: u, selfAppraisalSubmitted: r, updateQuestion: o }, g.id)) });
  var Am = () => {
    const [s, u] = Fe.useState("kra"), [r, o] = Fe.useState("self"), [g, b] = Fe.useState({}), [p, S] = Fe.useState({ employee: { name: "John Doe", designation: "Senior Developer", department: "Engineering", period: "Jan 2025 - Dec 2025" }, selfAppraisalSubmitted: true, kra: [{ id: 1, title: "Project Delivery", description: "Deliver assigned projects on time", weightage: 30, goals: [{ id: 1, description: "Complete 3 major projects", progress: 2, selfRating: 8, selfComments: "Completed 3 projects successfully", managerRating: 9, managerComments: "Excellent delivery" }, { id: 2, description: "Maintain 95% on-time delivery", progress: 2, selfRating: 7, selfComments: "Achieved 90%", managerRating: 7, managerComments: "Slight delay" }] }, { id: 2, title: "Code Quality", description: "Maintain high code quality standards", weightage: 25, goals: [{ id: 3, description: "Reduce bug count by 20%", progress: 2, selfRating: 9, selfComments: "Reduced bugs by 25%", managerRating: 9, managerComments: "Outstanding" }] }, { id: 3, title: "Team Collaboration", description: "Work effectively with team members", weightage: 20, selfRating: 8, selfComments: "Collaborated well", managerRating: 8, managerComments: "Great team player", goals: [] }, { id: 4, title: "Innovation", description: "Contribute innovative ideas", weightage: 15, goals: [{ id: 4, description: "Propose 2 process improvements", progress: 2, selfRating: 8, selfComments: "Proposed automation", managerRating: 8, managerComments: "Good job" }] }], competencies: [{ id: 1, name: "Technical Skills", description: "Proficiency in technologies", weightage: 25, selfRating: 8, selfComments: "Strong in React/Node", managerRating: 8, managerComments: "Very competent" }, { id: 2, name: "Communication", description: "Effective communication", weightage: 15, selfRating: 7, selfComments: "Improving", managerRating: 8, managerComments: "Much better" }], questions: [{ id: 1, question: "What are your key achievements?", selfAnswer: "Led migration project", managerComments: "Excellent ownership" }, { id: 2, question: "What areas do you want to develop?", selfAnswer: "Public speaking", managerComments: "Good focus" }] });
    function m(Z) {
      var de, ae;
      Z.workflow_state == "Self Appraisal" ? o("self") : o("manager");
      const ie = Z.kra || [], ce = Z.kra_vs_goal || [];
      return { employee: { name: Z.employee_name, designation: Z.designation, department: Z.department, period: `${Z.from_date} - ${Z.to_date}` }, selfAppraisalSubmitted: Z.self_appraisal_submitted || true, kra: ie.map((le, ge) => {
        const Me = ce.filter((re) => re.kra === le.kra).map((re, Pe) => ({ id: Pe + 1, description: re.goal_name, progress: re.progress || "", weightage: re.weightage, selfRating: re.employee_rating_number, selfComments: re.employee_description, managerRating: re.manager_rating_number, managerComments: re.management_description }));
        return { id: ge + 1, title: le.kra, description: le.description || "", weightage: le.weightage, selfRating: le.employee_rating_number, selfComments: le.employee_description, managerRating: le.manager_rating_number, managerComments: le.management_description, goals: Me };
      }) || [], competencies: ((de = Z.competency) == null ? void 0 : de.map((le, ge) => ({ id: ge + 1, name: le.competency, description: le.description || "", weightage: le.weightage, selfRating: le.employee_rating_number, selfComments: le.employee_description, managerRating: le.manager_rating, managerComments: le.manager_description }))) || [], questions: ((ae = Z.answer) == null ? void 0 : ae.map((le, ge) => ({ id: ge + 1, question: le.question, selfAnswer: le.employee_ans_in_discriptive, managerComments: le.manager_comment }))) || [] };
    }
    const h = (Z) => {
      b((ie) => Ht(Ge({}, ie), { [Z]: !ie[Z] }));
    }, E = (Z, ie, ce, de) => {
      S((ae) => Ht(Ge({}, ae), { kra: ae.kra.map((le) => le.id === Z ? Ht(Ge({}, le), { goals: le.goals.map((ge) => ge.id === ie ? Ht(Ge({}, ge), { [ce]: de }) : ge) }) : le) }));
    }, R = (Z, ie, ce) => {
      S((de) => Ht(Ge({}, de), { kra: de.kra.map((ae) => ae.id === Z ? Ht(Ge({}, ae), { [ie]: ce }) : ae) }));
    }, X = (Z, ie, ce) => {
      S((de) => Ht(Ge({}, de), { competencies: de.competencies.map((ae) => ae.id === Z ? Ht(Ge({}, ae), { [ie]: ce }) : ae) }));
    }, w = (Z, ie, ce) => {
      S((de) => Ht(Ge({}, de), { questions: de.questions.map((ae) => ae.id === Z ? Ht(Ge({}, ae), { [ie]: ce }) : ae) }));
    }, B = window.cur_frm;
    return B != null && B.doc ? (Fe.useEffect(() => {
      S(m(B.doc));
    }, [B == null ? void 0 : B.doc]), j.jsx("div", { className: "ef-min-h-screen ef-bg-gray-50 ef-p-6", children: j.jsx("div", { className: "ef-max-w-7xl ef-mx-auto", children: j.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-shadow-sm", children: [j.jsx("div", { className: "ef-border-b", children: j.jsxs("div", { className: "ef-flex", children: [j.jsx("button", { onClick: () => u("kra"), className: `ef-px-6 ef-py-4 ef-font-semibold ${s === "kra" ? "ef-border-b-2 ef-border-blue-600 ef-text-blue-600" : "ef-text-gray-600"}`, children: "KRA vs Goals" }), j.jsx("button", { onClick: () => u("competency"), className: `ef-px-6 ef-py-4 ef-font-semibold ${s === "competency" ? "ef-border-b-2 ef-border-blue-600 ef-text-blue-600" : "ef-text-gray-600"}`, children: "Competencies" }), j.jsx("button", { onClick: () => u("questions"), className: `ef-px-6 ef-py-4 ef-font-semibold ${s === "questions" ? "ef-border-b-2 ef-border-blue-600 ef-text-blue-600" : "ef-text-gray-600"}`, children: "Questions" })] }) }), j.jsxs("div", { className: "ef-p-6", children: [s === "kra" && j.jsx(J0, { kraList: p.kra, expandedKRA: g, toggleKRA: h, appraisalMode: r, selfAppraisalSubmitted: p.selfAppraisalSubmitted, updateGoalRating: E, updateKRARating: R }), s === "competency" && j.jsx(W0, { competencies: p.competencies, appraisalMode: r, selfAppraisalSubmitted: p.selfAppraisalSubmitted, updateCompetency: X }), s === "questions" && j.jsx(P0, { questions: p.questions, appraisalMode: r, selfAppraisalSubmitted: p.selfAppraisalSubmitted, updateQuestion: w })] })] }) }) })) : "Loading...";
  };
  Am.component = "appraisal-rating";
  var Qp = Object.freeze(Object.defineProperty({ __proto__: null, AppraisalRating: Am, DemoComponent: lf }, Symbol.toStringTag, { value: "Module" }));
  var I0 = Object.defineProperty;
  var eg = (s, u, r) => u in s ? I0(s, u, { enumerable: true, configurable: true, writable: true, value: r }) : s[u] = r;
  var or = (s, u, r) => eg(s, typeof u != "symbol" ? u + "" : u, r);
  var tg = { stringify: (s) => s ? "true" : "false", parse: (s) => /^[ty1-9]/i.test(s) };
  var ng = { stringify: (s) => s.name, parse: (s, u, r) => {
    const o = (() => {
      if (typeof window < "u" && s in window)
        return window[s];
      if (typeof global < "u" && s in global)
        return global[s];
    })();
    return typeof o == "function" ? o.bind(r) : void 0;
  } };
  var ag = { stringify: (s) => JSON.stringify(s), parse: (s) => JSON.parse(s) };
  function lg(s) {
    return s.replace(/([a-z0-9])([A-Z])/g, (u, r, o) => `${r}-${o.toLowerCase()}`);
  }
  function Om(s) {
    return s.replace(/[-:]([a-z])/g, (u, r) => `${r.toUpperCase()}`);
  }
  var ig = { stringify: (s) => s.name, parse: (s, u, r) => {
    const o = (() => {
      const g = Om(u);
      if (typeof r < "u" && g in r.container)
        return r.container[g];
    })();
    return typeof o == "function" ? o.bind(r) : void 0;
  } };
  var ug = { stringify: (s) => `${s}`, parse: (s) => parseFloat(s) };
  var sg = { stringify: (s) => s, parse: (s) => s };
  var Uc = { string: sg, number: ug, boolean: tg, function: ng, method: ig, json: ag };
  var Ou = Symbol.for("r2wc.render");
  var cr = Symbol.for("r2wc.connected");
  var xl = Symbol.for("r2wc.context");
  var Wt = Symbol.for("r2wc.props");
  function rg(s, u, r) {
    var o, g, b;
    u.props || (u.props = s.propTypes ? Object.keys(s.propTypes) : []), u.events || (u.events = []);
    const p = Array.isArray(u.props) ? u.props.slice() : Object.keys(u.props), S = Array.isArray(u.events) ? u.events.slice() : Object.keys(u.events), m = {}, h = {}, E = {}, R = {};
    for (const w of p) {
      m[w] = Array.isArray(u.props) ? "string" : u.props[w];
      const B = lg(w);
      E[w] = B, R[B] = w;
    }
    for (const w of S)
      h[w] = Array.isArray(u.events) ? {} : u.events[w];
    class X extends HTMLElement {
      constructor() {
        super(), or(this, b, true), or(this, g), or(this, o, {}), or(this, "container"), u.shadow ? this.container = this.attachShadow({ mode: u.shadow }) : this.container = this, this[Wt].container = this.container;
        for (const B of p) {
          const Z = E[B], ie = this.getAttribute(Z), ce = m[B], de = ce ? Uc[ce] : null;
          if (ce === "method") {
            const ae = Om(Z);
            Object.defineProperty(this[Wt].container, ae, { enumerable: true, configurable: true, get() {
              return this[Wt][ae];
            }, set(le) {
              this[Wt][ae] = le, this[Ou]();
            } }), this[Wt][B] = de.parse(ie, Z, this);
          }
          de != null && de.parse && ie && (this[Wt][B] = de.parse(ie, Z, this));
        }
        for (const B of S)
          this[Wt][B] = (Z) => {
            const ie = B.replace(/^on/, "").toLowerCase();
            this.dispatchEvent(new CustomEvent(ie, Ge({ detail: Z }, h[B])));
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
      attributeChangedCallback(B, Z, ie) {
        const ce = R[B], de = m[ce], ae = de ? Uc[de] : null;
        ce in m && ae != null && ae.parse && ie && (this[Wt][ce] = ae.parse(ie, B, this), this[Ou]());
      }
      [(b = cr, g = xl, o = Wt, Ou)]() {
        this[cr] && (this[xl] ? r.update(this[xl], this[Wt]) : this[xl] = r.mount(this.container, s, this[Wt]));
      }
    }
    for (const w of p) {
      const B = E[w], Z = m[w];
      Object.defineProperty(X.prototype, w, { enumerable: true, configurable: true, get() {
        return this[Wt][w];
      }, set(ie) {
        this[Wt][w] = ie;
        const ce = Z ? Uc[Z] : null;
        if (ce != null && ce.stringify) {
          const de = ce.stringify(ie, B, this);
          this.getAttribute(B) !== de && this.setAttribute(B, de);
        } else
          this[Ou]();
      } });
    }
    return X;
  }
  function og(s, u, r, o = {}) {
    function g(S, m, h) {
      const E = u.createElement(m, h);
      if ("createRoot" in r) {
        const R = r.createRoot(S);
        return R.render(E), { container: S, root: R, ReactComponent: m };
      }
      if ("render" in r)
        return r.render(E, S), { container: S, ReactComponent: m };
      throw new Error("Invalid ReactDOM instance provided.");
    }
    function b({ container: S, root: m, ReactComponent: h }, E) {
      const R = u.createElement(h, E);
      if (m) {
        m.render(R);
        return;
      }
      if ("render" in r) {
        r.render(R, S);
        return;
      }
    }
    function p({ container: S, root: m }) {
      if (m) {
        m.unmount();
        return;
      }
      if ("unmountComponentAtNode" in r) {
        r.unmountComponentAtNode(S);
        return;
      }
    }
    return rg(s, o, { mount: g, unmount: p, update: b });
  }
  var Dc = { exports: {} };
  var wu = {};
  var Mc = { exports: {} };
  var Bc = {};
  var Vp;
  function cg() {
    return Vp || (Vp = 1, function(s) {
      function u(L, W) {
        var ue = L.length;
        L.push(W);
        e:
          for (; 0 < ue; ) {
            var Ne = ue - 1 >>> 1, ze = L[Ne];
            if (0 < g(ze, W))
              L[Ne] = W, L[ue] = ze, ue = Ne;
            else
              break e;
          }
      }
      function r(L) {
        return L.length === 0 ? null : L[0];
      }
      function o(L) {
        if (L.length === 0)
          return null;
        var W = L[0], ue = L.pop();
        if (ue !== W) {
          L[0] = ue;
          e:
            for (var Ne = 0, ze = L.length, O = ze >>> 1; Ne < O; ) {
              var V = 2 * (Ne + 1) - 1, $ = L[V], ee = V + 1, pe = L[ee];
              if (0 > g($, ue))
                ee < ze && 0 > g(pe, $) ? (L[Ne] = pe, L[ee] = ue, Ne = ee) : (L[Ne] = $, L[V] = ue, Ne = V);
              else if (ee < ze && 0 > g(pe, ue))
                L[Ne] = pe, L[ee] = ue, Ne = ee;
              else
                break e;
            }
        }
        return W;
      }
      function g(L, W) {
        var ue = L.sortIndex - W.sortIndex;
        return ue !== 0 ? ue : L.id - W.id;
      }
      if (s.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var b = performance;
        s.unstable_now = function() {
          return b.now();
        };
      } else {
        var p = Date, S = p.now();
        s.unstable_now = function() {
          return p.now() - S;
        };
      }
      var m = [], h = [], E = 1, R = null, X = 3, w = false, B = false, Z = false, ie = false, ce = typeof setTimeout == "function" ? setTimeout : null, de = typeof clearTimeout == "function" ? clearTimeout : null, ae = typeof setImmediate != "undefined" ? setImmediate : null;
      function le(L) {
        for (var W = r(h); W !== null; ) {
          if (W.callback === null)
            o(h);
          else if (W.startTime <= L)
            o(h), W.sortIndex = W.expirationTime, u(m, W);
          else
            break;
          W = r(h);
        }
      }
      function ge(L) {
        if (Z = false, le(L), !B)
          if (r(m) !== null)
            B = true, Me || (Me = true, ot());
          else {
            var W = r(h);
            W !== null && Yt(ge, W.startTime - L);
          }
      }
      var Me = false, re = -1, Pe = 5, _t = -1;
      function pn() {
        return ie ? true : !(s.unstable_now() - _t < Pe);
      }
      function At() {
        if (ie = false, Me) {
          var L = s.unstable_now();
          _t = L;
          var W = true;
          try {
            e: {
              B = false, Z && (Z = false, de(re), re = -1), w = true;
              var ue = X;
              try {
                t: {
                  for (le(L), R = r(m); R !== null && !(R.expirationTime > L && pn()); ) {
                    var Ne = R.callback;
                    if (typeof Ne == "function") {
                      R.callback = null, X = R.priorityLevel;
                      var ze = Ne(R.expirationTime <= L);
                      if (L = s.unstable_now(), typeof ze == "function") {
                        R.callback = ze, le(L), W = true;
                        break t;
                      }
                      R === r(m) && o(m), le(L);
                    } else
                      o(m);
                    R = r(m);
                  }
                  if (R !== null)
                    W = true;
                  else {
                    var O = r(h);
                    O !== null && Yt(ge, O.startTime - L), W = false;
                  }
                }
                break e;
              } finally {
                R = null, X = ue, w = false;
              }
              W = void 0;
            }
          } finally {
            W ? ot() : Me = false;
          }
        }
      }
      var ot;
      if (typeof ae == "function")
        ot = function() {
          ae(At);
        };
      else if (typeof MessageChannel != "undefined") {
        var Ot = new MessageChannel(), Ie = Ot.port2;
        Ot.port1.onmessage = At, ot = function() {
          Ie.postMessage(null);
        };
      } else
        ot = function() {
          ce(At, 0);
        };
      function Yt(L, W) {
        re = ce(function() {
          L(s.unstable_now());
        }, W);
      }
      s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function(L) {
        L.callback = null;
      }, s.unstable_forceFrameRate = function(L) {
        0 > L || 125 < L ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Pe = 0 < L ? Math.floor(1e3 / L) : 5;
      }, s.unstable_getCurrentPriorityLevel = function() {
        return X;
      }, s.unstable_next = function(L) {
        switch (X) {
          case 1:
          case 2:
          case 3:
            var W = 3;
            break;
          default:
            W = X;
        }
        var ue = X;
        X = W;
        try {
          return L();
        } finally {
          X = ue;
        }
      }, s.unstable_requestPaint = function() {
        ie = true;
      }, s.unstable_runWithPriority = function(L, W) {
        switch (L) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            L = 3;
        }
        var ue = X;
        X = L;
        try {
          return W();
        } finally {
          X = ue;
        }
      }, s.unstable_scheduleCallback = function(L, W, ue) {
        var Ne = s.unstable_now();
        switch (typeof ue == "object" && ue !== null ? (ue = ue.delay, ue = typeof ue == "number" && 0 < ue ? Ne + ue : Ne) : ue = Ne, L) {
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
        return ze = ue + ze, L = { id: E++, callback: W, priorityLevel: L, startTime: ue, expirationTime: ze, sortIndex: -1 }, ue > Ne ? (L.sortIndex = ue, u(h, L), r(m) === null && L === r(h) && (Z ? (de(re), re = -1) : Z = true, Yt(ge, ue - Ne))) : (L.sortIndex = ze, u(m, L), B || w || (B = true, Me || (Me = true, ot()))), L;
      }, s.unstable_shouldYield = pn, s.unstable_wrapCallback = function(L) {
        var W = X;
        return function() {
          var ue = X;
          X = W;
          try {
            return L.apply(this, arguments);
          } finally {
            X = ue;
          }
        };
      };
    }(Bc)), Bc;
  }
  var Zp;
  function fg() {
    return Zp || (Zp = 1, Mc.exports = cg()), Mc.exports;
  }
  var qc = { exports: {} };
  var Tt = {};
  var kp;
  function hg() {
    if (kp)
      return Tt;
    kp = 1;
    var s = af();
    function u(m) {
      var h = "https://react.dev/errors/" + m;
      if (1 < arguments.length) {
        h += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var E = 2; E < arguments.length; E++)
          h += "&args[]=" + encodeURIComponent(arguments[E]);
      }
      return "Minified React error #" + m + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function r() {
    }
    var o = { d: { f: r, r: function() {
      throw Error(u(522));
    }, D: r, C: r, L: r, m: r, X: r, S: r, M: r }, p: 0, findDOMNode: null }, g = Symbol.for("react.portal");
    function b(m, h, E) {
      var R = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return { $$typeof: g, key: R == null ? null : "" + R, children: m, containerInfo: h, implementation: E };
    }
    var p = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function S(m, h) {
      if (m === "font")
        return "";
      if (typeof h == "string")
        return h === "use-credentials" ? h : "";
    }
    return Tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, Tt.createPortal = function(m, h) {
      var E = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11)
        throw Error(u(299));
      return b(m, h, null, E);
    }, Tt.flushSync = function(m) {
      var h = p.T, E = o.p;
      try {
        if (p.T = null, o.p = 2, m)
          return m();
      } finally {
        p.T = h, o.p = E, o.d.f();
      }
    }, Tt.preconnect = function(m, h) {
      typeof m == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, o.d.C(m, h));
    }, Tt.prefetchDNS = function(m) {
      typeof m == "string" && o.d.D(m);
    }, Tt.preinit = function(m, h) {
      if (typeof m == "string" && h && typeof h.as == "string") {
        var E = h.as, R = S(E, h.crossOrigin), X = typeof h.integrity == "string" ? h.integrity : void 0, w = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
        E === "style" ? o.d.S(m, typeof h.precedence == "string" ? h.precedence : void 0, { crossOrigin: R, integrity: X, fetchPriority: w }) : E === "script" && o.d.X(m, { crossOrigin: R, integrity: X, fetchPriority: w, nonce: typeof h.nonce == "string" ? h.nonce : void 0 });
      }
    }, Tt.preinitModule = function(m, h) {
      if (typeof m == "string")
        if (typeof h == "object" && h !== null) {
          if (h.as == null || h.as === "script") {
            var E = S(h.as, h.crossOrigin);
            o.d.M(m, { crossOrigin: E, integrity: typeof h.integrity == "string" ? h.integrity : void 0, nonce: typeof h.nonce == "string" ? h.nonce : void 0 });
          }
        } else
          h == null && o.d.M(m);
    }, Tt.preload = function(m, h) {
      if (typeof m == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
        var E = h.as, R = S(E, h.crossOrigin);
        o.d.L(m, E, { crossOrigin: R, integrity: typeof h.integrity == "string" ? h.integrity : void 0, nonce: typeof h.nonce == "string" ? h.nonce : void 0, type: typeof h.type == "string" ? h.type : void 0, fetchPriority: typeof h.fetchPriority == "string" ? h.fetchPriority : void 0, referrerPolicy: typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0, imageSrcSet: typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0, imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0, media: typeof h.media == "string" ? h.media : void 0 });
      }
    }, Tt.preloadModule = function(m, h) {
      if (typeof m == "string")
        if (h) {
          var E = S(h.as, h.crossOrigin);
          o.d.m(m, { as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0, crossOrigin: E, integrity: typeof h.integrity == "string" ? h.integrity : void 0 });
        } else
          o.d.m(m);
    }, Tt.requestFormReset = function(m) {
      o.d.r(m);
    }, Tt.unstable_batchedUpdates = function(m, h) {
      return m(h);
    }, Tt.useFormState = function(m, h, E) {
      return p.H.useFormState(m, h, E);
    }, Tt.useFormStatus = function() {
      return p.H.useHostTransitionStatus();
    }, Tt.version = "19.2.0", Tt;
  }
  var Kp;
  function dg() {
    if (Kp)
      return qc.exports;
    Kp = 1;
    function s() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
        } catch (u) {
          console.error(u);
        }
    }
    return s(), qc.exports = hg(), qc.exports;
  }
  var Jp;
  function pg() {
    if (Jp)
      return wu;
    Jp = 1;
    var s = fg(), u = af(), r = dg();
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
    function S(e) {
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
    function E(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6)
        return e;
      for (e = e.child; e !== null; ) {
        if (t = E(e), t !== null)
          return t;
        e = e.sibling;
      }
      return null;
    }
    var R = Object.assign, X = Symbol.for("react.element"), w = Symbol.for("react.transitional.element"), B = Symbol.for("react.portal"), Z = Symbol.for("react.fragment"), ie = Symbol.for("react.strict_mode"), ce = Symbol.for("react.profiler"), de = Symbol.for("react.consumer"), ae = Symbol.for("react.context"), le = Symbol.for("react.forward_ref"), ge = Symbol.for("react.suspense"), Me = Symbol.for("react.suspense_list"), re = Symbol.for("react.memo"), Pe = Symbol.for("react.lazy"), _t = Symbol.for("react.activity"), pn = Symbol.for("react.memo_cache_sentinel"), At = Symbol.iterator;
    function ot(e) {
      return e === null || typeof e != "object" ? null : (e = At && e[At] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var Ot = Symbol.for("react.client.reference");
    function Ie(e) {
      if (e == null)
        return null;
      if (typeof e == "function")
        return e.$$typeof === Ot ? null : e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Z:
          return "Fragment";
        case ce:
          return "Profiler";
        case ie:
          return "StrictMode";
        case ge:
          return "Suspense";
        case Me:
          return "SuspenseList";
        case _t:
          return "Activity";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case B:
            return "Portal";
          case ae:
            return e.displayName || "Context";
          case de:
            return (e._context.displayName || "Context") + ".Consumer";
          case le:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case re:
            return t = e.displayName || null, t !== null ? t : Ie(e.type) || "Memo";
          case Pe:
            t = e._payload, e = e._init;
            try {
              return Ie(e(t));
            } catch (n) {
            }
        }
      return null;
    }
    var Yt = Array.isArray, L = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ue = { pending: false, data: null, method: null, action: null }, Ne = [], ze = -1;
    function O(e) {
      return { current: e };
    }
    function V(e) {
      0 > ze || (e.current = Ne[ze], Ne[ze] = null, ze--);
    }
    function $(e, t) {
      ze++, Ne[ze] = e.current, e.current = t;
    }
    var ee = O(null), pe = O(null), Se = O(null), we = O(null);
    function gt(e, t) {
      switch ($(Se, t), $(pe, e), $(ee, null), t.nodeType) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? ap(e) : 0;
          break;
        default:
          if (e = t.tagName, t = t.namespaceURI)
            t = ap(t), e = lp(t, e);
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
      V(ee), $(ee, e);
    }
    function Ke() {
      V(ee), V(pe), V(Se);
    }
    function Za(e) {
      e.memoizedState !== null && $(we, e);
      var t = ee.current, n = lp(t, e.type);
      t !== n && ($(pe, e), $(ee, n));
    }
    function _l(e) {
      pe.current === e && (V(ee), V(pe)), we.current === e && (V(we), xu._currentValue = ue);
    }
    var Al, ju;
    function On(e) {
      if (Al === void 0)
        try {
          throw Error();
        } catch (n) {
          var t = n.stack.trim().match(/\n( *(at )?)/);
          Al = t && t[1] || "", ju = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + Al + e + ju;
    }
    var Ti = false;
    function _i(e, t) {
      if (!e || Ti)
        return "";
      Ti = true;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var a = { DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var Q = function() {
                throw Error();
              };
              if (Object.defineProperty(Q.prototype, "props", { set: function() {
                throw Error();
              } }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(Q, []);
                } catch (H) {
                  var M = H;
                }
                Reflect.construct(e, [], Q);
              } else {
                try {
                  Q.call();
                } catch (H) {
                  M = H;
                }
                e.call(Q.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (H) {
                M = H;
              }
              (Q = e()) && typeof Q.catch == "function" && Q.catch(function() {
              });
            }
          } catch (H) {
            if (H && M && typeof H.stack == "string")
              return [H.stack, M.stack];
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
    function Tr(e, t) {
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
          return _i(e.type, false);
        case 11:
          return _i(e.type.render, false);
        case 1:
          return _i(e.type, true);
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
          t += Tr(e, n), n = e, e = e.return;
        while (e);
        return t;
      } catch (a) {
        return `
Error generating stack: ` + a.message + `
` + a.stack;
      }
    }
    var Ai = Object.prototype.hasOwnProperty, Oi = s.unstable_scheduleCallback, wi = s.unstable_cancelCallback, _r = s.unstable_shouldYield, Du = s.unstable_requestPaint, wt = s.unstable_now, q = s.unstable_getCurrentPriorityLevel, he = s.unstable_ImmediatePriority, Ri = s.unstable_UserBlockingPriority, ka = s.unstable_NormalPriority, Ar = s.unstable_LowPriority, Ol = s.unstable_IdlePriority, Mu = s.log, Bu = s.unstable_setDisableYieldValue, Ka = null, Rt = null;
    function Xt(e) {
      if (typeof Mu == "function" && Bu(e), Rt && typeof Rt.setStrictMode == "function")
        try {
          Rt.setStrictMode(Ka, e);
        } catch (t) {
        }
    }
    var Et = Math.clz32 ? Math.clz32 : Or, Ci = Math.log, qu = Math.LN2;
    function Or(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (Ci(e) / qu | 0) | 0;
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
    function wr(e, t) {
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
    function Rr(e, t, n, a, l, i) {
      var c = e.pendingLanes;
      e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
      var y = e.entanglements, T = e.expirationTimes, D = e.hiddenUpdates;
      for (n = c & ~n; 0 < n; ) {
        var Y = 31 - Et(n), Q = 1 << Y;
        y[Y] = 0, T[Y] = -1;
        var M = D[Y];
        if (M !== null)
          for (D[Y] = null, Y = 0; Y < M.length; Y++) {
            var H = M[Y];
            H !== null && (H.lane &= -536870913);
          }
        n &= ~Q;
      }
      a !== 0 && Lu(e, a, 0), i !== 0 && l === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(c & ~t));
    }
    function Lu(e, t, n) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var a = 31 - Et(t);
      e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | n & 261930;
    }
    function Yu(e, t) {
      var n = e.entangledLanes |= t;
      for (e = e.entanglements; n; ) {
        var a = 31 - Et(n), l = 1 << a;
        l & t | e[a] & t && (e[a] |= t), n &= ~l;
      }
    }
    function Xu(e, t) {
      var n = t & -t;
      return n = (n & 42) !== 0 ? 1 : at(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
    }
    function at(e) {
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
    function Ni(e) {
      return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
    }
    function Gu() {
      var e = W.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : wp(e.type));
    }
    function Qu(e, t) {
      var n = W.p;
      try {
        return W.p = e, t();
      } finally {
        W.p = n;
      }
    }
    var mn = Math.random().toString(36).slice(2), ct = "__reactFiber$" + mn, dt = "__reactProps$" + mn, Rn = "__reactContainer$" + mn, zi = "__reactEvents$" + mn, Cr = "__reactListeners$" + mn, Vu = "__reactHandles$" + mn, da = "__reactResources$" + mn, Cn = "__reactMarker$" + mn;
    function ji(e) {
      delete e[ct], delete e[dt], delete e[zi], delete e[Cr], delete e[Vu];
    }
    function pa(e) {
      var t = e[ct];
      if (t)
        return t;
      for (var n = e.parentNode; n; ) {
        if (t = n[Rn] || n[ct]) {
          if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
            for (e = fp(e); e !== null; ) {
              if (n = e[ct])
                return n;
              e = fp(e);
            }
          return t;
        }
        e = n, n = e.parentNode;
      }
      return null;
    }
    function Nn(e) {
      if (e = e[ct] || e[Rn]) {
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
    function Je(e) {
      e[Cn] = true;
    }
    var zt = /* @__PURE__ */ new Set(), Cl = {};
    function zn(e, t) {
      Gt(e, t), Gt(e + "Capture", t);
    }
    function Gt(e, t) {
      for (Cl[e] = t, e = 0; e < t.length; e++)
        zt.add(t[e]);
    }
    var Zu = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), ku = {}, Ku = {};
    function Nr(e) {
      return Ai.call(Ku, e) ? true : Ai.call(ku, e) ? false : Zu.test(e) ? Ku[e] = true : (ku[e] = true, false);
    }
    function Gn(e, t, n) {
      if (Nr(t))
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
    function $t(e, t, n, a) {
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
    function jt(e) {
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
    function zr(e, t, n) {
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
        e._valueTracker = zr(e, t, "" + e[t]);
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
    var Qn = /[\n"\\]/g;
    function Ct(e) {
      return e.replace(Qn, function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      });
    }
    function Mi(e, t, n, a, l, i, c, y) {
      e.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? e.type = c : e.removeAttribute("type"), t != null ? c === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + jt(t)) : e.value !== "" + jt(t) && (e.value = "" + jt(t)) : c !== "submit" && c !== "reset" || e.removeAttribute("value"), t != null ? Bi(e, c, jt(t)) : n != null ? Bi(e, c, jt(n)) : a != null && e.removeAttribute("value"), l == null && i != null && (e.defaultChecked = !!i), l != null && (e.checked = l && typeof l != "function" && typeof l != "symbol"), y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? e.name = "" + jt(y) : e.removeAttribute("name");
    }
    function Fu(e, t, n, a, l, i, c, y) {
      if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || n != null) {
        if (!(i !== "submit" && i !== "reset" || t != null)) {
          Ui(e);
          return;
        }
        n = n != null ? "" + jt(n) : "", t = t != null ? "" + jt(t) : n, y || t === e.value || (e.value = t), e.defaultValue = t;
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
        for (n = "" + jt(n), t = null, l = 0; l < e.length; l++) {
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
      if (t != null && (t = "" + jt(t), t !== e.value && (e.value = t), n == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = n != null ? "" + jt(n) : "";
    }
    function qi(e, t, n, a) {
      if (t == null) {
        if (a != null) {
          if (n != null)
            throw Error(o(92));
          if (Yt(a)) {
            if (1 < a.length)
              throw Error(o(93));
            a = a[0];
          }
          n = a;
        }
        n == null && (n = ""), t = n;
      }
      n = jt(t), e.defaultValue = n, a = e.textContent, a === n && a !== "" && a !== null && (e.value = a), Ui(e);
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
    var Nl = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function $u(e, t, n) {
      var a = t.indexOf("--") === 0;
      n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Nl.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
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
    function zl(e) {
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
    var Pu = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), jr = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function jl(e) {
      return jr.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function Pt() {
    }
    var tl = null;
    function Ul(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    var ga = null, Zn = null;
    function Dl(e) {
      var t = Nn(e);
      if (t && (e = t.stateNode)) {
        var n = e[dt] || null;
        e:
          switch (e = t.stateNode, t.type) {
            case "input":
              if (Mi(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode; )
                  n = n.parentNode;
                for (n = n.querySelectorAll('input[name="' + Ct("" + t) + '"][type="radio"]'), t = 0; t < n.length; t++) {
                  var a = n[t];
                  if (a !== e && a.form === e.form) {
                    var l = a[dt] || null;
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
    function jn(e, t) {
      var n = e.stateNode;
      if (n === null)
        return null;
      var a = n[dt] || null;
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
    var It = !(typeof window == "undefined" || typeof window.document == "undefined" || typeof window.document.createElement == "undefined"), Yi = false;
    if (It)
      try {
        var Un = {};
        Object.defineProperty(Un, "passive", { get: function() {
          Yi = true;
        } }), window.addEventListener("test", Un, Un), window.removeEventListener("test", Un, Un);
      } catch (e) {
        Yi = false;
      }
    var ft = null, va = null, kn = null;
    function Bl() {
      if (kn)
        return kn;
      var e, t = va, n = t.length, a, l = "value" in ft ? ft.value : ft.textContent, i = l.length;
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
    function pt(e) {
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
    }, defaultPrevented: 0, isTrusted: 0 }, nl = pt(Kn), Xe = R({}, Kn, { view: 0, detail: 0 }), f = pt(Xe), d, v, x, _ = R({}, Xe, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: tn, button: 0, buttons: 0, relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    }, movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== x && (x && e.type === "mousemove" ? (d = e.screenX - x.screenX, v = e.screenY - x.screenY) : v = d = 0, x = e), d);
    }, movementY: function(e) {
      return "movementY" in e ? e.movementY : v;
    } }), z = pt(_), N = R({}, _, { dataTransfer: 0 }), k = pt(N), te = R({}, Xe, { relatedTarget: 0 }), K = pt(te), J = R({}, Kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), fe = pt(J), Be = R({}, Kn, { clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    } }), me = pt(Be), F = R({}, Kn, { data: 0 }), P = pt(F), Qe = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, mt = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, et = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function en(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = et[e]) ? !!t[e] : false;
    }
    function tn() {
      return en;
    }
    var Xi = R({}, Xe, { key: function(e) {
      if (e.key) {
        var t = Qe[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      return e.type === "keypress" ? (e = ql(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? mt[e.keyCode] || "Unidentified" : "";
    }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: tn, charCode: function(e) {
      return e.type === "keypress" ? ql(e) : 0;
    }, keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }, which: function(e) {
      return e.type === "keypress" ? ql(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    } }), es = pt(Xi), Dn = R({}, _, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ll = pt(Dn), Yl = R({}, Xe, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: tn }), ts = pt(Yl), ns = R({}, Kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xl = pt(ns), al = R({}, _, { deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    }, deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    }, deltaZ: 0, deltaMode: 0 }), Jn = pt(al), as = R({}, Kn, { newState: 0, oldState: 0 }), nn = pt(as), ls = [9, 13, 27, 32], an = It && "CompositionEvent" in window, ba = null;
    It && "documentMode" in document && (ba = document.documentMode);
    var Ur = It && "TextEvent" in window && !ba, yn = It && (!an || ba && 8 < ba && 11 >= ba), Fn = " ", Gl = false;
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
    function Gi(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    var Ql = false;
    function Wm(e, t) {
      switch (e) {
        case "compositionend":
          return Gi(t);
        case "keypress":
          return t.which !== 32 ? null : (Gl = true, Fn);
        case "textInput":
          return e = t.data, e === Fn && Gl ? null : e;
        default:
          return null;
      }
    }
    function $m(e, t) {
      if (Ql)
        return e === "compositionend" || !an && ll(e, t) ? (e = Bl(), kn = va = ft = null, Ql = false, e) : null;
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
    var Pm = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
    function pf(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Pm[e.type] : t === "textarea";
    }
    function mf(e, t, n, a) {
      ga ? Zn ? Zn.push(a) : Zn = [a] : ga = a, t = Ks(t, "onChange"), 0 < t.length && (n = new nl("onChange", "change", null, n, a), e.push({ event: n, listeners: t }));
    }
    var Qi = null, Vi = null;
    function Im(e) {
      $d(e, 0);
    }
    function is(e) {
      var t = Pa(e);
      if (Di(t))
        return e;
    }
    function yf(e, t) {
      if (e === "change")
        return t;
    }
    var gf = false;
    if (It) {
      var Dr;
      if (It) {
        var Mr = "oninput" in document;
        if (!Mr) {
          var vf = document.createElement("div");
          vf.setAttribute("oninput", "return;"), Mr = typeof vf.oninput == "function";
        }
        Dr = Mr;
      } else
        Dr = false;
      gf = Dr && (!document.documentMode || 9 < document.documentMode);
    }
    function bf() {
      Qi && (Qi.detachEvent("onpropertychange", Sf), Vi = Qi = null);
    }
    function Sf(e) {
      if (e.propertyName === "value" && is(Vi)) {
        var t = [];
        mf(t, Vi, e, Ul(e)), Li(Im, t);
      }
    }
    function ey(e, t, n) {
      e === "focusin" ? (bf(), Qi = t, Vi = n, Qi.attachEvent("onpropertychange", Sf)) : e === "focusout" && bf();
    }
    function ty(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return is(Vi);
    }
    function ny(e, t) {
      if (e === "click")
        return is(t);
    }
    function ay(e, t) {
      if (e === "input" || e === "change")
        return is(t);
    }
    function ly(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Qt = typeof Object.is == "function" ? Object.is : ly;
    function Zi(e, t) {
      if (Qt(e, t))
        return true;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return false;
      var n = Object.keys(e), a = Object.keys(t);
      if (n.length !== a.length)
        return false;
      for (a = 0; a < n.length; a++) {
        var l = n[a];
        if (!Ai.call(t, l) || !Qt(e[l], t[l]))
          return false;
      }
      return true;
    }
    function xf(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Ef(e, t) {
      var n = xf(e);
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
        n = xf(n);
      }
    }
    function Tf(e, t) {
      return e && t ? e === t ? true : e && e.nodeType === 3 ? false : t && t.nodeType === 3 ? Tf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false : false;
    }
    function _f(e) {
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
    function Br(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    var iy = It && "documentMode" in document && 11 >= document.documentMode, Vl = null, qr = null, ki = null, Hr = false;
    function Af(e, t, n) {
      var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      Hr || Vl == null || Vl !== el(a) || (a = Vl, "selectionStart" in a && Br(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset }), ki && Zi(ki, a) || (ki = a, a = Ks(qr, "onSelect"), 0 < a.length && (t = new nl("onSelect", "select", null, t, n), e.push({ event: t, listeners: a }), t.target = Vl)));
    }
    function il(e, t) {
      var n = {};
      return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
    }
    var Zl = { animationend: il("Animation", "AnimationEnd"), animationiteration: il("Animation", "AnimationIteration"), animationstart: il("Animation", "AnimationStart"), transitionrun: il("Transition", "TransitionRun"), transitionstart: il("Transition", "TransitionStart"), transitioncancel: il("Transition", "TransitionCancel"), transitionend: il("Transition", "TransitionEnd") }, Lr = {}, Of = {};
    It && (Of = document.createElement("div").style, "AnimationEvent" in window || (delete Zl.animationend.animation, delete Zl.animationiteration.animation, delete Zl.animationstart.animation), "TransitionEvent" in window || delete Zl.transitionend.transition);
    function ul(e) {
      if (Lr[e])
        return Lr[e];
      if (!Zl[e])
        return e;
      var t = Zl[e], n;
      for (n in t)
        if (t.hasOwnProperty(n) && n in Of)
          return Lr[e] = t[n];
      return e;
    }
    var wf = ul("animationend"), Rf = ul("animationiteration"), Cf = ul("animationstart"), uy = ul("transitionrun"), sy = ul("transitionstart"), ry = ul("transitioncancel"), Nf = ul("transitionend"), zf = /* @__PURE__ */ new Map(), Yr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Yr.push("scrollEnd");
    function gn(e, t) {
      zf.set(e, t), zn(t, [e]);
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
    }, ln = [], kl = 0, Xr = 0;
    function ss() {
      for (var e = kl, t = Xr = kl = 0; t < e; ) {
        var n = ln[t];
        ln[t++] = null;
        var a = ln[t];
        ln[t++] = null;
        var l = ln[t];
        ln[t++] = null;
        var i = ln[t];
        if (ln[t++] = null, a !== null && l !== null) {
          var c = a.pending;
          c === null ? l.next = l : (l.next = c.next, c.next = l), a.pending = l;
        }
        i !== 0 && jf(n, l, i);
      }
    }
    function rs(e, t, n, a) {
      ln[kl++] = e, ln[kl++] = t, ln[kl++] = n, ln[kl++] = a, Xr |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
    }
    function Gr(e, t, n, a) {
      return rs(e, t, n, a), os(e);
    }
    function sl(e, t) {
      return rs(e, null, null, t), os(e);
    }
    function jf(e, t, n) {
      e.lanes |= n;
      var a = e.alternate;
      a !== null && (a.lanes |= n);
      for (var l = false, i = e.return; i !== null; )
        i.childLanes |= n, a = i.alternate, a !== null && (a.childLanes |= n), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (l = true)), e = i, i = i.return;
      return e.tag === 3 ? (i = e.stateNode, l && t !== null && (l = 31 - Et(n), e = i.hiddenUpdates, a = e[l], a === null ? e[l] = [t] : a.push(t), t.lane = n | 536870912), i) : null;
    }
    function os(e) {
      if (50 < pu)
        throw pu = 0, Po = null, Error(o(185));
      for (var t = e.return; t !== null; )
        e = t, t = e.return;
      return e.tag === 3 ? e.stateNode : null;
    }
    var Kl = {};
    function oy(e, t, n, a) {
      this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function Vt(e, t, n, a) {
      return new oy(e, t, n, a);
    }
    function Qr(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function Wn(e, t) {
      var n = e.alternate;
      return n === null ? (n = Vt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
    }
    function Uf(e, t) {
      e.flags &= 65011714;
      var n = e.alternate;
      return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), e;
    }
    function cs(e, t, n, a, l, i) {
      var c = 0;
      if (a = e, typeof e == "function")
        Qr(e) && (c = 1);
      else if (typeof e == "string")
        c = p0(e, n, ee.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e:
          switch (e) {
            case _t:
              return e = Vt(31, n, t, l), e.elementType = _t, e.lanes = i, e;
            case Z:
              return rl(n.children, l, i, t);
            case ie:
              c = 8, l |= 24;
              break;
            case ce:
              return e = Vt(12, n, t, l | 2), e.elementType = ce, e.lanes = i, e;
            case ge:
              return e = Vt(13, n, t, l), e.elementType = ge, e.lanes = i, e;
            case Me:
              return e = Vt(19, n, t, l), e.elementType = Me, e.lanes = i, e;
            default:
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case ae:
                    c = 10;
                    break e;
                  case de:
                    c = 9;
                    break e;
                  case le:
                    c = 11;
                    break e;
                  case re:
                    c = 14;
                    break e;
                  case Pe:
                    c = 16, a = null;
                    break e;
                }
              c = 29, n = Error(o(130, e === null ? "null" : typeof e, "")), a = null;
          }
      return t = Vt(c, n, t, l), t.elementType = e, t.type = a, t.lanes = i, t;
    }
    function rl(e, t, n, a) {
      return e = Vt(7, e, a, t), e.lanes = n, e;
    }
    function Vr(e, t, n) {
      return e = Vt(6, e, null, t), e.lanes = n, e;
    }
    function Df(e) {
      var t = Vt(18, null, null, 0);
      return t.stateNode = e, t;
    }
    function Zr(e, t, n) {
      return t = Vt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
    }
    var Mf = /* @__PURE__ */ new WeakMap();
    function un(e, t) {
      if (typeof e == "object" && e !== null) {
        var n = Mf.get(e);
        return n !== void 0 ? n : (t = { value: e, source: t, stack: Uu(t) }, Mf.set(e, t), t);
      }
      return { value: e, source: t, stack: Uu(t) };
    }
    var Jl = [], Fl = 0, fs = null, Ki = 0, sn = [], rn = 0, Sa = null, Mn = 1, Bn = "";
    function $n(e, t) {
      Jl[Fl++] = Ki, Jl[Fl++] = fs, fs = e, Ki = t;
    }
    function Bf(e, t, n) {
      sn[rn++] = Mn, sn[rn++] = Bn, sn[rn++] = Sa, Sa = e;
      var a = Mn;
      e = Bn;
      var l = 32 - Et(a) - 1;
      a &= ~(1 << l), n += 1;
      var i = 32 - Et(t) + l;
      if (30 < i) {
        var c = l - l % 5;
        i = (a & (1 << c) - 1).toString(32), a >>= c, l -= c, Mn = 1 << 32 - Et(t) + l | n << l | a, Bn = i + e;
      } else
        Mn = 1 << i | n << l | a, Bn = e;
    }
    function kr(e) {
      e.return !== null && ($n(e, 1), Bf(e, 1, 0));
    }
    function Kr(e) {
      for (; e === fs; )
        fs = Jl[--Fl], Jl[Fl] = null, Ki = Jl[--Fl], Jl[Fl] = null;
      for (; e === Sa; )
        Sa = sn[--rn], sn[rn] = null, Bn = sn[--rn], sn[rn] = null, Mn = sn[--rn], sn[rn] = null;
    }
    function qf(e, t) {
      sn[rn++] = Mn, sn[rn++] = Bn, sn[rn++] = Sa, Mn = t.id, Bn = t.overflow, Sa = e;
    }
    var vt = null, Ve = null, Ae = false, xa = null, on = false, Jr = Error(o(519));
    function Ea(e) {
      var t = Error(o(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
      throw Ji(un(t, e)), Jr;
    }
    function Hf(e) {
      var t = e.stateNode, n = e.type, a = e.memoizedProps;
      switch (t[ct] = e, t[dt] = a, n) {
        case "dialog":
          Ee("cancel", t), Ee("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          Ee("load", t);
          break;
        case "video":
        case "audio":
          for (n = 0; n < yu.length; n++)
            Ee(yu[n], t);
          break;
        case "source":
          Ee("error", t);
          break;
        case "img":
        case "image":
        case "link":
          Ee("error", t), Ee("load", t);
          break;
        case "details":
          Ee("toggle", t);
          break;
        case "input":
          Ee("invalid", t), Fu(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, true);
          break;
        case "select":
          Ee("invalid", t);
          break;
        case "textarea":
          Ee("invalid", t), qi(t, a.value, a.defaultValue, a.children);
      }
      n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === true || tp(t.textContent, n) ? (a.popover != null && (Ee("beforetoggle", t), Ee("toggle", t)), a.onScroll != null && Ee("scroll", t), a.onScrollEnd != null && Ee("scrollend", t), a.onClick != null && (t.onclick = Pt), t = true) : t = false, t || Ea(e, true);
    }
    function Lf(e) {
      for (vt = e.return; vt; )
        switch (vt.tag) {
          case 5:
          case 31:
          case 13:
            on = false;
            return;
          case 27:
          case 3:
            on = true;
            return;
          default:
            vt = vt.return;
        }
    }
    function Wl(e) {
      if (e !== vt)
        return false;
      if (!Ae)
        return Lf(e), Ae = true, false;
      var t = e.tag, n;
      if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || dc(e.type, e.memoizedProps)), n = !n), n && Ve && Ea(e), Lf(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(o(317));
        Ve = cp(e);
      } else if (t === 31) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(o(317));
        Ve = cp(e);
      } else
        t === 27 ? (t = Ve, Ba(e.type) ? (e = vc, vc = null, Ve = e) : Ve = t) : Ve = vt ? fn(e.stateNode.nextSibling) : null;
      return true;
    }
    function ol() {
      Ve = vt = null, Ae = false;
    }
    function Fr() {
      var e = xa;
      return e !== null && (Bt === null ? Bt = e : Bt.push.apply(Bt, e), xa = null), e;
    }
    function Ji(e) {
      xa === null ? xa = [e] : xa.push(e);
    }
    var Wr = O(null), cl = null, Pn = null;
    function Ta(e, t, n) {
      $(Wr, t._currentValue), t._currentValue = n;
    }
    function In(e) {
      e._currentValue = Wr.current, V(Wr);
    }
    function $r(e, t, n) {
      for (; e !== null; ) {
        var a = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === n)
          break;
        e = e.return;
      }
    }
    function Pr(e, t, n, a) {
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
                  i.lanes |= n, y = i.alternate, y !== null && (y.lanes |= n), $r(i.return, n, e), a || (c = null);
                  break e;
                }
              i = y.next;
            }
        } else if (l.tag === 18) {
          if (c = l.return, c === null)
            throw Error(o(341));
          c.lanes |= n, i = c.alternate, i !== null && (i.lanes |= n), $r(c, n, e), c = null;
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
            Qt(l.pendingProps.value, c.value) || (e !== null ? e.push(y) : e = [y]);
          }
        } else if (l === we.current) {
          if (c = l.alternate, c === null)
            throw Error(o(387));
          c.memoizedState.memoizedState !== l.memoizedState.memoizedState && (e !== null ? e.push(xu) : e = [xu]);
        }
        l = l.return;
      }
      e !== null && Pr(t, e, n, a), t.flags |= 262144;
    }
    function hs(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!Qt(e.context._currentValue, e.memoizedValue))
          return true;
        e = e.next;
      }
      return false;
    }
    function fl(e) {
      cl = e, Pn = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function bt(e) {
      return Yf(cl, e);
    }
    function ds(e, t) {
      return cl === null && fl(e), Yf(e, t);
    }
    function Yf(e, t) {
      var n = t._currentValue;
      if (t = { context: t, memoizedValue: n, next: null }, Pn === null) {
        if (e === null)
          throw Error(o(308));
        Pn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
      } else
        Pn = Pn.next = t;
      return n;
    }
    var cy = typeof AbortController != "undefined" ? AbortController : function() {
      var e = [], t = this.signal = { aborted: false, addEventListener: function(n, a) {
        e.push(a);
      } };
      this.abort = function() {
        t.aborted = true, e.forEach(function(n) {
          return n();
        });
      };
    }, fy = s.unstable_scheduleCallback, hy = s.unstable_NormalPriority, lt = { $$typeof: ae, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
    function Ir() {
      return { controller: new cy(), data: /* @__PURE__ */ new Map(), refCount: 0 };
    }
    function Fi(e) {
      e.refCount--, e.refCount === 0 && fy(hy, function() {
        e.controller.abort();
      });
    }
    var Wi = null, eo = 0, Pl = 0, Il = null;
    function dy(e, t) {
      if (Wi === null) {
        var n = Wi = [];
        eo = 0, Pl = lc(), Il = { status: "pending", value: void 0, then: function(a) {
          n.push(a);
        } };
      }
      return eo++, t.then(Xf, Xf), t;
    }
    function Xf() {
      if (--eo === 0 && Wi !== null) {
        Il !== null && (Il.status = "fulfilled");
        var e = Wi;
        Wi = null, Pl = 0, Il = null;
        for (var t = 0; t < e.length; t++)
          (0, e[t])();
      }
    }
    function py(e, t) {
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
    var Gf = L.S;
    L.S = function(e, t) {
      Ad = wt(), typeof t == "object" && t !== null && typeof t.then == "function" && dy(e, t), Gf !== null && Gf(e, t);
    };
    var hl = O(null);
    function to() {
      var e = hl.current;
      return e !== null ? e : Ye.pooledCache;
    }
    function ps(e, t) {
      t === null ? $(hl, hl.current) : $(hl, t.pool);
    }
    function Qf() {
      var e = to();
      return e === null ? null : { parent: lt._currentValue, pool: e };
    }
    var ei = Error(o(460)), no = Error(o(474)), ms = Error(o(542)), ys = { then: function() {
    } };
    function Vf(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function Zf(e, t, n) {
      switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(Pt, Pt), t = n), t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, Kf(e), e;
        default:
          if (typeof t.status == "string")
            t.then(Pt, Pt);
          else {
            if (e = Ye, e !== null && 100 < e.shellSuspendCounter)
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
              throw e = t.reason, Kf(e), e;
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
    function kf() {
      if (pl === null)
        throw Error(o(459));
      var e = pl;
      return pl = null, e;
    }
    function Kf(e) {
      if (e === ei || e === ms)
        throw Error(o(483));
    }
    var ti = null, $i = 0;
    function gs(e) {
      var t = $i;
      return $i += 1, ti === null && (ti = []), Zf(ti, e, t);
    }
    function Pi(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function vs(e, t) {
      throw t.$$typeof === X ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
    }
    function Jf(e) {
      function t(C, A) {
        if (e) {
          var U = C.deletions;
          U === null ? (C.deletions = [A], C.flags |= 16) : U.push(A);
        }
      }
      function n(C, A) {
        if (!e)
          return null;
        for (; A !== null; )
          t(C, A), A = A.sibling;
        return null;
      }
      function a(C) {
        for (var A = /* @__PURE__ */ new Map(); C !== null; )
          C.key !== null ? A.set(C.key, C) : A.set(C.index, C), C = C.sibling;
        return A;
      }
      function l(C, A) {
        return C = Wn(C, A), C.index = 0, C.sibling = null, C;
      }
      function i(C, A, U) {
        return C.index = U, e ? (U = C.alternate, U !== null ? (U = U.index, U < A ? (C.flags |= 67108866, A) : U) : (C.flags |= 67108866, A)) : (C.flags |= 1048576, A);
      }
      function c(C) {
        return e && C.alternate === null && (C.flags |= 67108866), C;
      }
      function y(C, A, U, G) {
        return A === null || A.tag !== 6 ? (A = Vr(U, C.mode, G), A.return = C, A) : (A = l(A, U), A.return = C, A);
      }
      function T(C, A, U, G) {
        var se = U.type;
        return se === Z ? Y(C, A, U.props.children, G, U.key) : A !== null && (A.elementType === se || typeof se == "object" && se !== null && se.$$typeof === Pe && dl(se) === A.type) ? (A = l(A, U.props), Pi(A, U), A.return = C, A) : (A = cs(U.type, U.key, U.props, null, C.mode, G), Pi(A, U), A.return = C, A);
      }
      function D(C, A, U, G) {
        return A === null || A.tag !== 4 || A.stateNode.containerInfo !== U.containerInfo || A.stateNode.implementation !== U.implementation ? (A = Zr(U, C.mode, G), A.return = C, A) : (A = l(A, U.children || []), A.return = C, A);
      }
      function Y(C, A, U, G, se) {
        return A === null || A.tag !== 7 ? (A = rl(U, C.mode, G, se), A.return = C, A) : (A = l(A, U), A.return = C, A);
      }
      function Q(C, A, U) {
        if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
          return A = Vr("" + A, C.mode, U), A.return = C, A;
        if (typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case w:
              return U = cs(A.type, A.key, A.props, null, C.mode, U), Pi(U, A), U.return = C, U;
            case B:
              return A = Zr(A, C.mode, U), A.return = C, A;
            case Pe:
              return A = dl(A), Q(C, A, U);
          }
          if (Yt(A) || ot(A))
            return A = rl(A, C.mode, U, null), A.return = C, A;
          if (typeof A.then == "function")
            return Q(C, gs(A), U);
          if (A.$$typeof === ae)
            return Q(C, ds(C, A), U);
          vs(C, A);
        }
        return null;
      }
      function M(C, A, U, G) {
        var se = A !== null ? A.key : null;
        if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
          return se !== null ? null : y(C, A, "" + U, G);
        if (typeof U == "object" && U !== null) {
          switch (U.$$typeof) {
            case w:
              return U.key === se ? T(C, A, U, G) : null;
            case B:
              return U.key === se ? D(C, A, U, G) : null;
            case Pe:
              return U = dl(U), M(C, A, U, G);
          }
          if (Yt(U) || ot(U))
            return se !== null ? null : Y(C, A, U, G, null);
          if (typeof U.then == "function")
            return M(C, A, gs(U), G);
          if (U.$$typeof === ae)
            return M(C, A, ds(C, U), G);
          vs(C, U);
        }
        return null;
      }
      function H(C, A, U, G, se) {
        if (typeof G == "string" && G !== "" || typeof G == "number" || typeof G == "bigint")
          return C = C.get(U) || null, y(A, C, "" + G, se);
        if (typeof G == "object" && G !== null) {
          switch (G.$$typeof) {
            case w:
              return C = C.get(G.key === null ? U : G.key) || null, T(A, C, G, se);
            case B:
              return C = C.get(G.key === null ? U : G.key) || null, D(A, C, G, se);
            case Pe:
              return G = dl(G), H(C, A, U, G, se);
          }
          if (Yt(G) || ot(G))
            return C = C.get(U) || null, Y(A, C, G, se, null);
          if (typeof G.then == "function")
            return H(C, A, U, gs(G), se);
          if (G.$$typeof === ae)
            return H(C, A, U, ds(A, G), se);
          vs(A, G);
        }
        return null;
      }
      function I(C, A, U, G) {
        for (var se = null, Re = null, ne = A, be = A = 0, _e = null; ne !== null && be < U.length; be++) {
          ne.index > be ? (_e = ne, ne = null) : _e = ne.sibling;
          var Ce = M(C, ne, U[be], G);
          if (Ce === null) {
            ne === null && (ne = _e);
            break;
          }
          e && ne && Ce.alternate === null && t(C, ne), A = i(Ce, A, be), Re === null ? se = Ce : Re.sibling = Ce, Re = Ce, ne = _e;
        }
        if (be === U.length)
          return n(C, ne), Ae && $n(C, be), se;
        if (ne === null) {
          for (; be < U.length; be++)
            ne = Q(C, U[be], G), ne !== null && (A = i(ne, A, be), Re === null ? se = ne : Re.sibling = ne, Re = ne);
          return Ae && $n(C, be), se;
        }
        for (ne = a(ne); be < U.length; be++)
          _e = H(ne, C, be, U[be], G), _e !== null && (e && _e.alternate !== null && ne.delete(_e.key === null ? be : _e.key), A = i(_e, A, be), Re === null ? se = _e : Re.sibling = _e, Re = _e);
        return e && ne.forEach(function(Xa) {
          return t(C, Xa);
        }), Ae && $n(C, be), se;
      }
      function oe(C, A, U, G) {
        if (U == null)
          throw Error(o(151));
        for (var se = null, Re = null, ne = A, be = A = 0, _e = null, Ce = U.next(); ne !== null && !Ce.done; be++, Ce = U.next()) {
          ne.index > be ? (_e = ne, ne = null) : _e = ne.sibling;
          var Xa = M(C, ne, Ce.value, G);
          if (Xa === null) {
            ne === null && (ne = _e);
            break;
          }
          e && ne && Xa.alternate === null && t(C, ne), A = i(Xa, A, be), Re === null ? se = Xa : Re.sibling = Xa, Re = Xa, ne = _e;
        }
        if (Ce.done)
          return n(C, ne), Ae && $n(C, be), se;
        if (ne === null) {
          for (; !Ce.done; be++, Ce = U.next())
            Ce = Q(C, Ce.value, G), Ce !== null && (A = i(Ce, A, be), Re === null ? se = Ce : Re.sibling = Ce, Re = Ce);
          return Ae && $n(C, be), se;
        }
        for (ne = a(ne); !Ce.done; be++, Ce = U.next())
          Ce = H(ne, C, be, Ce.value, G), Ce !== null && (e && Ce.alternate !== null && ne.delete(Ce.key === null ? be : Ce.key), A = i(Ce, A, be), Re === null ? se = Ce : Re.sibling = Ce, Re = Ce);
        return e && ne.forEach(function(A0) {
          return t(C, A0);
        }), Ae && $n(C, be), se;
      }
      function Le(C, A, U, G) {
        if (typeof U == "object" && U !== null && U.type === Z && U.key === null && (U = U.props.children), typeof U == "object" && U !== null) {
          switch (U.$$typeof) {
            case w:
              e: {
                for (var se = U.key; A !== null; ) {
                  if (A.key === se) {
                    if (se = U.type, se === Z) {
                      if (A.tag === 7) {
                        n(C, A.sibling), G = l(A, U.props.children), G.return = C, C = G;
                        break e;
                      }
                    } else if (A.elementType === se || typeof se == "object" && se !== null && se.$$typeof === Pe && dl(se) === A.type) {
                      n(C, A.sibling), G = l(A, U.props), Pi(G, U), G.return = C, C = G;
                      break e;
                    }
                    n(C, A);
                    break;
                  } else
                    t(C, A);
                  A = A.sibling;
                }
                U.type === Z ? (G = rl(U.props.children, C.mode, G, U.key), G.return = C, C = G) : (G = cs(U.type, U.key, U.props, null, C.mode, G), Pi(G, U), G.return = C, C = G);
              }
              return c(C);
            case B:
              e: {
                for (se = U.key; A !== null; ) {
                  if (A.key === se)
                    if (A.tag === 4 && A.stateNode.containerInfo === U.containerInfo && A.stateNode.implementation === U.implementation) {
                      n(C, A.sibling), G = l(A, U.children || []), G.return = C, C = G;
                      break e;
                    } else {
                      n(C, A);
                      break;
                    }
                  else
                    t(C, A);
                  A = A.sibling;
                }
                G = Zr(U, C.mode, G), G.return = C, C = G;
              }
              return c(C);
            case Pe:
              return U = dl(U), Le(C, A, U, G);
          }
          if (Yt(U))
            return I(C, A, U, G);
          if (ot(U)) {
            if (se = ot(U), typeof se != "function")
              throw Error(o(150));
            return U = se.call(U), oe(C, A, U, G);
          }
          if (typeof U.then == "function")
            return Le(C, A, gs(U), G);
          if (U.$$typeof === ae)
            return Le(C, A, ds(C, U), G);
          vs(C, U);
        }
        return typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint" ? (U = "" + U, A !== null && A.tag === 6 ? (n(C, A.sibling), G = l(A, U), G.return = C, C = G) : (n(C, A), G = Vr(U, C.mode, G), G.return = C, C = G), c(C)) : n(C, A);
      }
      return function(C, A, U, G) {
        try {
          $i = 0;
          var se = Le(C, A, U, G);
          return ti = null, se;
        } catch (ne) {
          if (ne === ei || ne === ms)
            throw ne;
          var Re = Vt(29, ne, null, C.mode);
          return Re.lanes = G, Re.return = C, Re;
        } finally {
        }
      };
    }
    var ml = Jf(true), Ff = Jf(false), _a = false;
    function ao(e) {
      e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
    }
    function lo(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, callbacks: null });
    }
    function Aa(e) {
      return { lane: e, tag: 0, payload: null, callback: null, next: null };
    }
    function Oa(e, t, n) {
      var a = e.updateQueue;
      if (a === null)
        return null;
      if (a = a.shared, (je & 2) !== 0) {
        var l = a.pending;
        return l === null ? t.next = t : (t.next = l.next, l.next = t), a.pending = t, t = os(e), jf(e, null, n), t;
      }
      return rs(e, a, t, n), os(e);
    }
    function Ii(e, t, n) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
        var a = t.lanes;
        a &= e.pendingLanes, n |= a, t.lanes = n, Yu(e, n);
      }
    }
    function io(e, t) {
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
    var uo = false;
    function eu() {
      if (uo) {
        var e = Il;
        if (e !== null)
          throw e;
      }
    }
    function tu(e, t, n, a) {
      uo = false;
      var l = e.updateQueue;
      _a = false;
      var i = l.firstBaseUpdate, c = l.lastBaseUpdate, y = l.shared.pending;
      if (y !== null) {
        l.shared.pending = null;
        var T = y, D = T.next;
        T.next = null, c === null ? i = D : c.next = D, c = T;
        var Y = e.alternate;
        Y !== null && (Y = Y.updateQueue, y = Y.lastBaseUpdate, y !== c && (y === null ? Y.firstBaseUpdate = D : y.next = D, Y.lastBaseUpdate = T));
      }
      if (i !== null) {
        var Q = l.baseState;
        c = 0, Y = D = T = null, y = i;
        do {
          var M = y.lane & -536870913, H = M !== y.lane;
          if (H ? (Te & M) === M : (a & M) === M) {
            M !== 0 && M === Pl && (uo = true), Y !== null && (Y = Y.next = { lane: 0, tag: y.tag, payload: y.payload, callback: null, next: null });
            e: {
              var I = e, oe = y;
              M = t;
              var Le = n;
              switch (oe.tag) {
                case 1:
                  if (I = oe.payload, typeof I == "function") {
                    Q = I.call(Le, Q, M);
                    break e;
                  }
                  Q = I;
                  break e;
                case 3:
                  I.flags = I.flags & -65537 | 128;
                case 0:
                  if (I = oe.payload, M = typeof I == "function" ? I.call(Le, Q, M) : I, M == null)
                    break e;
                  Q = R({}, Q, M);
                  break e;
                case 2:
                  _a = true;
              }
            }
            M = y.callback, M !== null && (e.flags |= 64, H && (e.flags |= 8192), H = l.callbacks, H === null ? l.callbacks = [M] : H.push(M));
          } else
            H = { lane: M, tag: y.tag, payload: y.payload, callback: y.callback, next: null }, Y === null ? (D = Y = H, T = Q) : Y = Y.next = H, c |= M;
          if (y = y.next, y === null) {
            if (y = l.shared.pending, y === null)
              break;
            H = y, y = H.next, H.next = null, l.lastBaseUpdate = H, l.shared.pending = null;
          }
        } while (true);
        Y === null && (T = Q), l.baseState = T, l.firstBaseUpdate = D, l.lastBaseUpdate = Y, i === null && (l.shared.lanes = 0), za |= c, e.lanes = c, e.memoizedState = Q;
      }
    }
    function Wf(e, t) {
      if (typeof e != "function")
        throw Error(o(191, e));
      e.call(t);
    }
    function $f(e, t) {
      var n = e.callbacks;
      if (n !== null)
        for (e.callbacks = null, e = 0; e < n.length; e++)
          Wf(n[e], t);
    }
    var ni = O(null), bs = O(0);
    function Pf(e, t) {
      e = ra, $(bs, e), $(ni, t), ra = e | t.baseLanes;
    }
    function so() {
      $(bs, ra), $(ni, ni.current);
    }
    function ro() {
      ra = bs.current, V(ni), V(bs);
    }
    var Zt = O(null), cn = null;
    function wa(e) {
      var t = e.alternate;
      $(tt, tt.current & 1), $(Zt, e), cn === null && (t === null || ni.current !== null || t.memoizedState !== null) && (cn = e);
    }
    function oo(e) {
      $(tt, tt.current), $(Zt, e), cn === null && (cn = e);
    }
    function If(e) {
      e.tag === 22 ? ($(tt, tt.current), $(Zt, e), cn === null && (cn = e)) : Ra();
    }
    function Ra() {
      $(tt, tt.current), $(Zt, Zt.current);
    }
    function kt(e) {
      V(Zt), cn === e && (cn = null), V(tt);
    }
    var tt = O(0);
    function Ss(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && (n = n.dehydrated, n === null || yc(n) || gc(n)))
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
    var ea = 0, ve = null, qe = null, it = null, xs = false, ai = false, yl = false, Es = 0, nu = 0, li = null, my = 0;
    function We() {
      throw Error(o(321));
    }
    function co(e, t) {
      if (t === null)
        return false;
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Qt(e[n], t[n]))
          return false;
      return true;
    }
    function fo(e, t, n, a, l, i) {
      return ea = i, ve = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, L.H = e === null || e.memoizedState === null ? Bh : wo, yl = false, i = n(a, l), yl = false, ai && (i = th(t, n, a, l)), eh(e), i;
    }
    function eh(e) {
      L.H = iu;
      var t = qe !== null && qe.next !== null;
      if (ea = 0, it = qe = ve = null, xs = false, nu = 0, li = null, t)
        throw Error(o(300));
      e === null || ut || (e = e.dependencies, e !== null && hs(e) && (ut = true));
    }
    function th(e, t, n, a) {
      ve = e;
      var l = 0;
      do {
        if (ai && (li = null), nu = 0, ai = false, 25 <= l)
          throw Error(o(301));
        if (l += 1, it = qe = null, e.updateQueue != null) {
          var i = e.updateQueue;
          i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
        }
        L.H = qh, i = t(n, a);
      } while (ai);
      return i;
    }
    function yy() {
      var e = L.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? au(t) : t, e = e.useState()[0], (qe !== null ? qe.memoizedState : null) !== e && (ve.flags |= 1024), t;
    }
    function ho() {
      var e = Es !== 0;
      return Es = 0, e;
    }
    function po(e, t, n) {
      t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
    }
    function mo(e) {
      if (xs) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        xs = false;
      }
      ea = 0, it = qe = ve = null, ai = false, nu = Es = 0, li = null;
    }
    function Nt() {
      var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return it === null ? ve.memoizedState = it = e : it = it.next = e, it;
    }
    function nt() {
      if (qe === null) {
        var e = ve.alternate;
        e = e !== null ? e.memoizedState : null;
      } else
        e = qe.next;
      var t = it === null ? ve.memoizedState : it.next;
      if (t !== null)
        it = t, qe = e;
      else {
        if (e === null)
          throw ve.alternate === null ? Error(o(467)) : Error(o(310));
        qe = e, e = { memoizedState: qe.memoizedState, baseState: qe.baseState, baseQueue: qe.baseQueue, queue: qe.queue, next: null }, it === null ? ve.memoizedState = it = e : it = it.next = e;
      }
      return it;
    }
    function Ts() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function au(e) {
      var t = nu;
      return nu += 1, li === null && (li = []), e = Zf(li, e, t), t = ve, (it === null ? t.memoizedState : it.next) === null && (t = t.alternate, L.H = t === null || t.memoizedState === null ? Bh : wo), e;
    }
    function _s(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function")
          return au(e);
        if (e.$$typeof === ae)
          return bt(e);
      }
      throw Error(o(438, String(e)));
    }
    function yo(e) {
      var t = null, n = ve.updateQueue;
      if (n !== null && (t = n.memoCache), t == null) {
        var a = ve.alternate;
        a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = { data: a.data.map(function(l) {
          return l.slice();
        }), index: 0 })));
      }
      if (t == null && (t = { data: [], index: 0 }), n === null && (n = Ts(), ve.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
        for (n = t.data[t.index] = Array(e), a = 0; a < e; a++)
          n[a] = pn;
      return t.index++, n;
    }
    function ta(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function As(e) {
      var t = nt();
      return go(t, qe, e);
    }
    function go(e, t, n) {
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
          var Q = D.lane & -536870913;
          if (Q !== D.lane ? (Te & Q) === Q : (ea & Q) === Q) {
            var M = D.revertLane;
            if (M === 0)
              T !== null && (T = T.next = { lane: 0, revertLane: 0, gesture: null, action: D.action, hasEagerState: D.hasEagerState, eagerState: D.eagerState, next: null }), Q === Pl && (Y = true);
            else if ((ea & M) === M) {
              D = D.next, M === Pl && (Y = true);
              continue;
            } else
              Q = { lane: 0, revertLane: D.revertLane, gesture: null, action: D.action, hasEagerState: D.hasEagerState, eagerState: D.eagerState, next: null }, T === null ? (y = T = Q, c = i) : T = T.next = Q, ve.lanes |= M, za |= M;
            Q = D.action, yl && n(i, Q), i = D.hasEagerState ? D.eagerState : n(i, Q);
          } else
            M = { lane: Q, revertLane: D.revertLane, gesture: D.gesture, action: D.action, hasEagerState: D.hasEagerState, eagerState: D.eagerState, next: null }, T === null ? (y = T = M, c = i) : T = T.next = M, ve.lanes |= Q, za |= Q;
          D = D.next;
        } while (D !== null && D !== t);
        if (T === null ? c = i : T.next = y, !Qt(i, e.memoizedState) && (ut = true, Y && (n = Il, n !== null)))
          throw n;
        e.memoizedState = i, e.baseState = c, e.baseQueue = T, a.lastRenderedState = i;
      }
      return l === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
    }
    function vo(e) {
      var t = nt(), n = t.queue;
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
        Qt(i, t.memoizedState) || (ut = true), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
      }
      return [i, a];
    }
    function nh(e, t, n) {
      var a = ve, l = nt(), i = Ae;
      if (i) {
        if (n === void 0)
          throw Error(o(407));
        n = n();
      } else
        n = t();
      var c = !Qt((qe || l).memoizedState, n);
      if (c && (l.memoizedState = n, ut = true), l = l.queue, xo(ih.bind(null, a, l, e), [e]), l.getSnapshot !== t || c || it !== null && it.memoizedState.tag & 1) {
        if (a.flags |= 2048, ii(9, { destroy: void 0 }, lh.bind(null, a, l, n, t), null), Ye === null)
          throw Error(o(349));
        i || (ea & 127) !== 0 || ah(a, t, n);
      }
      return n;
    }
    function ah(e, t, n) {
      e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ve.updateQueue, t === null ? (t = Ts(), ve.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
    }
    function lh(e, t, n, a) {
      t.value = n, t.getSnapshot = a, uh(t) && sh(e);
    }
    function ih(e, t, n) {
      return n(function() {
        uh(t) && sh(e);
      });
    }
    function uh(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !Qt(e, n);
      } catch (a) {
        return true;
      }
    }
    function sh(e) {
      var t = sl(e, 2);
      t !== null && qt(t, e, 2);
    }
    function bo(e) {
      var t = Nt();
      if (typeof e == "function") {
        var n = e;
        if (e = n(), yl) {
          Xt(true);
          try {
            n();
          } finally {
            Xt(false);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ta, lastRenderedState: e }, t;
    }
    function rh(e, t, n, a) {
      return e.baseState = n, go(e, qe, typeof a == "function" ? a : ta);
    }
    function gy(e, t, n, a, l) {
      if (Rs(e))
        throw Error(o(485));
      if (e = t.action, e !== null) {
        var i = { payload: l, action: e, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(c) {
          i.listeners.push(c);
        } };
        L.T !== null ? n(true) : i.isTransition = false, a(i), n = t.pending, n === null ? (i.next = t.pending = i, oh(t, i)) : (i.next = n.next, t.pending = n.next = i);
      }
    }
    function oh(e, t) {
      var n = t.action, a = t.payload, l = e.state;
      if (t.isTransition) {
        var i = L.T, c = {};
        L.T = c;
        try {
          var y = n(l, a), T = L.S;
          T !== null && T(c, y), ch(e, t, y);
        } catch (D) {
          So(e, t, D);
        } finally {
          i !== null && c.types !== null && (i.types = c.types), L.T = i;
        }
      } else
        try {
          i = n(l, a), ch(e, t, i);
        } catch (D) {
          So(e, t, D);
        }
    }
    function ch(e, t, n) {
      n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(a) {
        fh(e, t, a);
      }, function(a) {
        return So(e, t, a);
      }) : fh(e, t, n);
    }
    function fh(e, t, n) {
      t.status = "fulfilled", t.value = n, hh(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, oh(e, n)));
    }
    function So(e, t, n) {
      var a = e.pending;
      if (e.pending = null, a !== null) {
        a = a.next;
        do
          t.status = "rejected", t.reason = n, hh(t), t = t.next;
        while (t !== a);
      }
      e.action = null;
    }
    function hh(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++)
        (0, e[t])();
    }
    function dh(e, t) {
      return t;
    }
    function ph(e, t) {
      if (Ae) {
        var n = Ye.formState;
        if (n !== null) {
          e: {
            var a = ve;
            if (Ae) {
              if (Ve) {
                t: {
                  for (var l = Ve, i = on; l.nodeType !== 8; ) {
                    if (!i) {
                      l = null;
                      break t;
                    }
                    if (l = fn(l.nextSibling), l === null) {
                      l = null;
                      break t;
                    }
                  }
                  i = l.data, l = i === "F!" || i === "F" ? l : null;
                }
                if (l) {
                  Ve = fn(l.nextSibling), a = l.data === "F!";
                  break e;
                }
              }
              Ea(a);
            }
            a = false;
          }
          a && (t = n[0]);
        }
      }
      return n = Nt(), n.memoizedState = n.baseState = t, a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: dh, lastRenderedState: t }, n.queue = a, n = Uh.bind(null, ve, a), a.dispatch = n, a = bo(false), i = Oo.bind(null, ve, false, a.queue), a = Nt(), l = { state: t, dispatch: null, action: e, pending: null }, a.queue = l, n = gy.bind(null, ve, l, i, n), l.dispatch = n, a.memoizedState = e, [t, n, false];
    }
    function mh(e) {
      var t = nt();
      return yh(t, qe, e);
    }
    function yh(e, t, n) {
      if (t = go(e, t, dh)[0], e = As(ta)[0], typeof t == "object" && t !== null && typeof t.then == "function")
        try {
          var a = au(t);
        } catch (c) {
          throw c === ei ? ms : c;
        }
      else
        a = t;
      t = nt();
      var l = t.queue, i = l.dispatch;
      return n !== t.memoizedState && (ve.flags |= 2048, ii(9, { destroy: void 0 }, vy.bind(null, l, n), null)), [a, i, e];
    }
    function vy(e, t) {
      e.action = t;
    }
    function gh(e) {
      var t = nt(), n = qe;
      if (n !== null)
        return yh(t, n, e);
      nt(), t = t.memoizedState, n = nt();
      var a = n.queue.dispatch;
      return n.memoizedState = e, [t, a, false];
    }
    function ii(e, t, n, a) {
      return e = { tag: e, create: n, deps: a, inst: t, next: null }, t = ve.updateQueue, t === null && (t = Ts(), ve.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e;
    }
    function vh() {
      return nt().memoizedState;
    }
    function Os(e, t, n, a) {
      var l = Nt();
      ve.flags |= e, l.memoizedState = ii(1 | t, { destroy: void 0 }, n, a === void 0 ? null : a);
    }
    function ws(e, t, n, a) {
      var l = nt();
      a = a === void 0 ? null : a;
      var i = l.memoizedState.inst;
      qe !== null && a !== null && co(a, qe.memoizedState.deps) ? l.memoizedState = ii(t, i, n, a) : (ve.flags |= e, l.memoizedState = ii(1 | t, i, n, a));
    }
    function bh(e, t) {
      Os(8390656, 8, e, t);
    }
    function xo(e, t) {
      ws(2048, 8, e, t);
    }
    function by(e) {
      ve.flags |= 4;
      var t = ve.updateQueue;
      if (t === null)
        t = Ts(), ve.updateQueue = t, t.events = [e];
      else {
        var n = t.events;
        n === null ? t.events = [e] : n.push(e);
      }
    }
    function Sh(e) {
      var t = nt().memoizedState;
      return by({ ref: t, nextImpl: e }), function() {
        if ((je & 2) !== 0)
          throw Error(o(440));
        return t.impl.apply(void 0, arguments);
      };
    }
    function xh(e, t) {
      return ws(4, 2, e, t);
    }
    function Eh(e, t) {
      return ws(4, 4, e, t);
    }
    function Th(e, t) {
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
    function _h(e, t, n) {
      n = n != null ? n.concat([e]) : null, ws(4, 4, Th.bind(null, t, e), n);
    }
    function Eo() {
    }
    function Ah(e, t) {
      var n = nt();
      t = t === void 0 ? null : t;
      var a = n.memoizedState;
      return t !== null && co(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e);
    }
    function Oh(e, t) {
      var n = nt();
      t = t === void 0 ? null : t;
      var a = n.memoizedState;
      if (t !== null && co(t, a[1]))
        return a[0];
      if (a = e(), yl) {
        Xt(true);
        try {
          e();
        } finally {
          Xt(false);
        }
      }
      return n.memoizedState = [a, t], a;
    }
    function To(e, t, n) {
      return n === void 0 || (ea & 1073741824) !== 0 && (Te & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = wd(), ve.lanes |= e, za |= e, n);
    }
    function wh(e, t, n, a) {
      return Qt(n, t) ? n : ni.current !== null ? (e = To(e, n, a), Qt(e, t) || (ut = true), e) : (ea & 42) === 0 || (ea & 1073741824) !== 0 && (Te & 261930) === 0 ? (ut = true, e.memoizedState = n) : (e = wd(), ve.lanes |= e, za |= e, t);
    }
    function Rh(e, t, n, a, l) {
      var i = W.p;
      W.p = i !== 0 && 8 > i ? i : 8;
      var c = L.T, y = {};
      L.T = y, Oo(e, false, t, n);
      try {
        var T = l(), D = L.S;
        if (D !== null && D(y, T), T !== null && typeof T == "object" && typeof T.then == "function") {
          var Y = py(T, a);
          lu(e, t, Y, Ft(e));
        } else
          lu(e, t, a, Ft(e));
      } catch (Q) {
        lu(e, t, { then: function() {
        }, status: "rejected", reason: Q }, Ft());
      } finally {
        W.p = i, c !== null && y.types !== null && (c.types = y.types), L.T = c;
      }
    }
    function Sy() {
    }
    function _o(e, t, n, a) {
      if (e.tag !== 5)
        throw Error(o(476));
      var l = Ch(e).queue;
      Rh(e, l, t, ue, n === null ? Sy : function() {
        return Nh(e), n(a);
      });
    }
    function Ch(e) {
      var t = e.memoizedState;
      if (t !== null)
        return t;
      t = { memoizedState: ue, baseState: ue, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ta, lastRenderedState: ue }, next: null };
      var n = {};
      return t.next = { memoizedState: n, baseState: n, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ta, lastRenderedState: n }, next: null }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function Nh(e) {
      var t = Ch(e);
      t.next === null && (t = e.alternate.memoizedState), lu(e, t.next.queue, {}, Ft());
    }
    function Ao() {
      return bt(xu);
    }
    function zh() {
      return nt().memoizedState;
    }
    function jh() {
      return nt().memoizedState;
    }
    function xy(e) {
      for (var t = e.return; t !== null; ) {
        switch (t.tag) {
          case 24:
          case 3:
            var n = Ft();
            e = Aa(n);
            var a = Oa(t, e, n);
            a !== null && (qt(a, t, n), Ii(a, t, n)), t = { cache: Ir() }, e.payload = t;
            return;
        }
        t = t.return;
      }
    }
    function Ey(e, t, n) {
      var a = Ft();
      n = { lane: a, revertLane: 0, gesture: null, action: n, hasEagerState: false, eagerState: null, next: null }, Rs(e) ? Dh(t, n) : (n = Gr(e, t, n, a), n !== null && (qt(n, e, a), Mh(n, t, a)));
    }
    function Uh(e, t, n) {
      var a = Ft();
      lu(e, t, n, a);
    }
    function lu(e, t, n, a) {
      var l = { lane: a, revertLane: 0, gesture: null, action: n, hasEagerState: false, eagerState: null, next: null };
      if (Rs(e))
        Dh(t, l);
      else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
          try {
            var c = t.lastRenderedState, y = i(c, n);
            if (l.hasEagerState = true, l.eagerState = y, Qt(y, c))
              return rs(e, t, l, 0), Ye === null && ss(), false;
          } catch (T) {
          } finally {
          }
        if (n = Gr(e, t, l, a), n !== null)
          return qt(n, e, a), Mh(n, t, a), true;
      }
      return false;
    }
    function Oo(e, t, n, a) {
      if (a = { lane: 2, revertLane: lc(), gesture: null, action: a, hasEagerState: false, eagerState: null, next: null }, Rs(e)) {
        if (t)
          throw Error(o(479));
      } else
        t = Gr(e, n, a, 2), t !== null && qt(t, e, 2);
    }
    function Rs(e) {
      var t = e.alternate;
      return e === ve || t !== null && t === ve;
    }
    function Dh(e, t) {
      ai = xs = true;
      var n = e.pending;
      n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
    }
    function Mh(e, t, n) {
      if ((n & 4194048) !== 0) {
        var a = t.lanes;
        a &= e.pendingLanes, n |= a, t.lanes = n, Yu(e, n);
      }
    }
    var iu = { readContext: bt, use: _s, useCallback: We, useContext: We, useEffect: We, useImperativeHandle: We, useLayoutEffect: We, useInsertionEffect: We, useMemo: We, useReducer: We, useRef: We, useState: We, useDebugValue: We, useDeferredValue: We, useTransition: We, useSyncExternalStore: We, useId: We, useHostTransitionStatus: We, useFormState: We, useActionState: We, useOptimistic: We, useMemoCache: We, useCacheRefresh: We };
    iu.useEffectEvent = We;
    var Bh = { readContext: bt, use: _s, useCallback: function(e, t) {
      return Nt().memoizedState = [e, t === void 0 ? null : t], e;
    }, useContext: bt, useEffect: bh, useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, Os(4194308, 4, Th.bind(null, t, e), n);
    }, useLayoutEffect: function(e, t) {
      return Os(4194308, 4, e, t);
    }, useInsertionEffect: function(e, t) {
      Os(4, 2, e, t);
    }, useMemo: function(e, t) {
      var n = Nt();
      t = t === void 0 ? null : t;
      var a = e();
      if (yl) {
        Xt(true);
        try {
          e();
        } finally {
          Xt(false);
        }
      }
      return n.memoizedState = [a, t], a;
    }, useReducer: function(e, t, n) {
      var a = Nt();
      if (n !== void 0) {
        var l = n(t);
        if (yl) {
          Xt(true);
          try {
            n(t);
          } finally {
            Xt(false);
          }
        }
      } else
        l = t;
      return a.memoizedState = a.baseState = l, e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: l }, a.queue = e, e = e.dispatch = Ey.bind(null, ve, e), [a.memoizedState, e];
    }, useRef: function(e) {
      var t = Nt();
      return e = { current: e }, t.memoizedState = e;
    }, useState: function(e) {
      e = bo(e);
      var t = e.queue, n = Uh.bind(null, ve, t);
      return t.dispatch = n, [e.memoizedState, n];
    }, useDebugValue: Eo, useDeferredValue: function(e, t) {
      var n = Nt();
      return To(n, e, t);
    }, useTransition: function() {
      var e = bo(false);
      return e = Rh.bind(null, ve, e.queue, true, false), Nt().memoizedState = e, [false, e];
    }, useSyncExternalStore: function(e, t, n) {
      var a = ve, l = Nt();
      if (Ae) {
        if (n === void 0)
          throw Error(o(407));
        n = n();
      } else {
        if (n = t(), Ye === null)
          throw Error(o(349));
        (Te & 127) !== 0 || ah(a, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return l.queue = i, bh(ih.bind(null, a, i, e), [e]), a.flags |= 2048, ii(9, { destroy: void 0 }, lh.bind(null, a, i, n, t), null), n;
    }, useId: function() {
      var e = Nt(), t = Ye.identifierPrefix;
      if (Ae) {
        var n = Bn, a = Mn;
        n = (a & ~(1 << 32 - Et(a) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Es++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = my++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    }, useHostTransitionStatus: Ao, useFormState: ph, useActionState: ph, useOptimistic: function(e) {
      var t = Nt();
      t.memoizedState = t.baseState = e;
      var n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
      return t.queue = n, t = Oo.bind(null, ve, true, n), n.dispatch = t, [e, t];
    }, useMemoCache: yo, useCacheRefresh: function() {
      return Nt().memoizedState = xy.bind(null, ve);
    }, useEffectEvent: function(e) {
      var t = Nt(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((je & 2) !== 0)
          throw Error(o(440));
        return n.impl.apply(void 0, arguments);
      };
    } }, wo = { readContext: bt, use: _s, useCallback: Ah, useContext: bt, useEffect: xo, useImperativeHandle: _h, useInsertionEffect: xh, useLayoutEffect: Eh, useMemo: Oh, useReducer: As, useRef: vh, useState: function() {
      return As(ta);
    }, useDebugValue: Eo, useDeferredValue: function(e, t) {
      var n = nt();
      return wh(n, qe.memoizedState, e, t);
    }, useTransition: function() {
      var e = As(ta)[0], t = nt().memoizedState;
      return [typeof e == "boolean" ? e : au(e), t];
    }, useSyncExternalStore: nh, useId: zh, useHostTransitionStatus: Ao, useFormState: mh, useActionState: mh, useOptimistic: function(e, t) {
      var n = nt();
      return rh(n, qe, e, t);
    }, useMemoCache: yo, useCacheRefresh: jh };
    wo.useEffectEvent = Sh;
    var qh = { readContext: bt, use: _s, useCallback: Ah, useContext: bt, useEffect: xo, useImperativeHandle: _h, useInsertionEffect: xh, useLayoutEffect: Eh, useMemo: Oh, useReducer: vo, useRef: vh, useState: function() {
      return vo(ta);
    }, useDebugValue: Eo, useDeferredValue: function(e, t) {
      var n = nt();
      return qe === null ? To(n, e, t) : wh(n, qe.memoizedState, e, t);
    }, useTransition: function() {
      var e = vo(ta)[0], t = nt().memoizedState;
      return [typeof e == "boolean" ? e : au(e), t];
    }, useSyncExternalStore: nh, useId: zh, useHostTransitionStatus: Ao, useFormState: gh, useActionState: gh, useOptimistic: function(e, t) {
      var n = nt();
      return qe !== null ? rh(n, qe, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    }, useMemoCache: yo, useCacheRefresh: jh };
    qh.useEffectEvent = Sh;
    function Ro(e, t, n, a) {
      t = e.memoizedState, n = n(a, t), n = n == null ? t : R({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
    }
    var Co = { enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var a = Ft(), l = Aa(a);
      l.payload = t, n != null && (l.callback = n), t = Oa(e, l, a), t !== null && (qt(t, e, a), Ii(t, e, a));
    }, enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var a = Ft(), l = Aa(a);
      l.tag = 1, l.payload = t, n != null && (l.callback = n), t = Oa(e, l, a), t !== null && (qt(t, e, a), Ii(t, e, a));
    }, enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = Ft(), a = Aa(n);
      a.tag = 2, t != null && (a.callback = t), t = Oa(e, a, n), t !== null && (qt(t, e, n), Ii(t, e, n));
    } };
    function Hh(e, t, n, a, l, i, c) {
      return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, i, c) : t.prototype && t.prototype.isPureReactComponent ? !Zi(n, a) || !Zi(l, i) : true;
    }
    function Lh(e, t, n, a) {
      e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && Co.enqueueReplaceState(t, t.state, null);
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
    function Yh(e) {
      us(e);
    }
    function Xh(e) {
      console.error(e);
    }
    function Gh(e) {
      us(e);
    }
    function Cs(e, t) {
      try {
        var n = e.onUncaughtError;
        n(t.value, { componentStack: t.stack });
      } catch (a) {
        setTimeout(function() {
          throw a;
        });
      }
    }
    function Qh(e, t, n) {
      try {
        var a = e.onCaughtError;
        a(n.value, { componentStack: n.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
      } catch (l) {
        setTimeout(function() {
          throw l;
        });
      }
    }
    function No(e, t, n) {
      return n = Aa(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
        Cs(e, t);
      }, n;
    }
    function Vh(e) {
      return e = Aa(e), e.tag = 3, e;
    }
    function Zh(e, t, n, a) {
      var l = n.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var i = a.value;
        e.payload = function() {
          return l(i);
        }, e.callback = function() {
          Qh(t, n, a);
        };
      }
      var c = n.stateNode;
      c !== null && typeof c.componentDidCatch == "function" && (e.callback = function() {
        Qh(t, n, a), typeof l != "function" && (ja === null ? ja = /* @__PURE__ */ new Set([this]) : ja.add(this));
        var y = a.stack;
        this.componentDidCatch(a.value, { componentStack: y !== null ? y : "" });
      });
    }
    function Ty(e, t, n, a, l) {
      if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
        if (t = n.alternate, t !== null && $l(t, n, l, true), n = Zt.current, n !== null) {
          switch (n.tag) {
            case 31:
            case 13:
              return cn === null ? Xs() : n.alternate === null && $e === 0 && ($e = 3), n.flags &= -257, n.flags |= 65536, n.lanes = l, a === ys ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), tc(e, a, l)), false;
            case 22:
              return n.flags |= 65536, a === ys ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([a]) }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), tc(e, a, l)), false;
          }
          throw Error(o(435, n.tag));
        }
        return tc(e, a, l), Xs(), false;
      }
      if (Ae)
        return t = Zt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = l, a !== Jr && (e = Error(o(422), { cause: a }), Ji(un(e, n)))) : (a !== Jr && (t = Error(o(423), { cause: a }), Ji(un(t, n))), e = e.current.alternate, e.flags |= 65536, l &= -l, e.lanes |= l, a = un(a, n), l = No(e.stateNode, a, l), io(e, l), $e !== 4 && ($e = 2)), false;
      var i = Error(o(520), { cause: a });
      if (i = un(i, n), du === null ? du = [i] : du.push(i), $e !== 4 && ($e = 2), t === null)
        return true;
      a = un(a, n), n = t;
      do {
        switch (n.tag) {
          case 3:
            return n.flags |= 65536, e = l & -l, n.lanes |= e, e = No(n.stateNode, a, e), io(n, e), false;
          case 1:
            if (t = n.type, i = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (ja === null || !ja.has(i))))
              return n.flags |= 65536, l &= -l, n.lanes |= l, l = Vh(l), Zh(l, e, n, a), io(n, l), false;
        }
        n = n.return;
      } while (n !== null);
      return false;
    }
    var zo = Error(o(461)), ut = false;
    function St(e, t, n, a) {
      t.child = e === null ? Ff(t, null, n, a) : ml(t, e.child, n, a);
    }
    function kh(e, t, n, a, l) {
      n = n.render;
      var i = t.ref;
      if ("ref" in a) {
        var c = {};
        for (var y in a)
          y !== "ref" && (c[y] = a[y]);
      } else
        c = a;
      return fl(t), a = fo(e, t, n, c, i, l), y = ho(), e !== null && !ut ? (po(e, t, l), na(e, t, l)) : (Ae && y && kr(t), t.flags |= 1, St(e, t, a, l), t.child);
    }
    function Kh(e, t, n, a, l) {
      if (e === null) {
        var i = n.type;
        return typeof i == "function" && !Qr(i) && i.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = i, Jh(e, t, i, a, l)) : (e = cs(n.type, null, a, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (i = e.child, !Lo(e, l)) {
        var c = i.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Zi, n(c, a) && e.ref === t.ref)
          return na(e, t, l);
      }
      return t.flags |= 1, e = Wn(i, a), e.ref = t.ref, e.return = t, t.child = e;
    }
    function Jh(e, t, n, a, l) {
      if (e !== null) {
        var i = e.memoizedProps;
        if (Zi(i, a) && e.ref === t.ref)
          if (ut = false, t.pendingProps = a = i, Lo(e, l))
            (e.flags & 131072) !== 0 && (ut = true);
          else
            return t.lanes = e.lanes, na(e, t, l);
      }
      return jo(e, t, n, a, l);
    }
    function Fh(e, t, n, a) {
      var l = a.children, i = e !== null ? e.memoizedState : null;
      if (e === null && t.stateNode === null && (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), a.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
          if (i = i !== null ? i.baseLanes | n : n, e !== null) {
            for (a = t.child = e.child, l = 0; a !== null; )
              l = l | a.lanes | a.childLanes, a = a.sibling;
            a = l & ~i;
          } else
            a = 0, t.child = null;
          return Wh(e, t, i, n, a);
        }
        if ((n & 536870912) !== 0)
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && ps(t, i !== null ? i.cachePool : null), i !== null ? Pf(t, i) : so(), If(t);
        else
          return a = t.lanes = 536870912, Wh(e, t, i !== null ? i.baseLanes | n : n, n, a);
      } else
        i !== null ? (ps(t, i.cachePool), Pf(t, i), Ra(), t.memoizedState = null) : (e !== null && ps(t, null), so(), Ra());
      return St(e, t, l, n), t.child;
    }
    function uu(e, t) {
      return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), t.sibling;
    }
    function Wh(e, t, n, a, l) {
      var i = to();
      return i = i === null ? null : { parent: lt._currentValue, pool: i }, t.memoizedState = { baseLanes: n, cachePool: i }, e !== null && ps(t, null), so(), If(t), e !== null && $l(e, t, a, true), t.childLanes = l, null;
    }
    function Ns(e, t) {
      return t = js({ mode: t.mode, children: t.children }, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function $h(e, t, n) {
      return ml(t, e.child, null, n), e = Ns(t, t.pendingProps), e.flags |= 2, kt(t), t.memoizedState = null, e;
    }
    function _y(e, t, n) {
      var a = t.pendingProps, l = (t.flags & 128) !== 0;
      if (t.flags &= -129, e === null) {
        if (Ae) {
          if (a.mode === "hidden")
            return e = Ns(t, a), t.lanes = 536870912, uu(null, e);
          if (oo(t), (e = Ve) ? (e = op(e, on), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = { dehydrated: e, treeContext: Sa !== null ? { id: Mn, overflow: Bn } : null, retryLane: 536870912, hydrationErrors: null }, n = Df(e), n.return = t, t.child = n, vt = t, Ve = null)) : e = null, e === null)
            throw Ea(t);
          return t.lanes = 536870912, null;
        }
        return Ns(t, a);
      }
      var i = e.memoizedState;
      if (i !== null) {
        var c = i.dehydrated;
        if (oo(t), l)
          if (t.flags & 256)
            t.flags &= -257, t = $h(e, t, n);
          else if (t.memoizedState !== null)
            t.child = e.child, t.flags |= 128, t = null;
          else
            throw Error(o(558));
        else if (ut || $l(e, t, n, false), l = (n & e.childLanes) !== 0, ut || l) {
          if (a = Ye, a !== null && (c = Xu(a, n), c !== 0 && c !== i.retryLane))
            throw i.retryLane = c, sl(e, c), qt(a, e, c), zo;
          Xs(), t = $h(e, t, n);
        } else
          e = i.treeContext, Ve = fn(c.nextSibling), vt = t, Ae = true, xa = null, on = false, e !== null && qf(t, e), t = Ns(t, a), t.flags |= 4096;
        return t;
      }
      return e = Wn(e.child, { mode: a.mode, children: a.children }), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function zs(e, t) {
      var n = t.ref;
      if (n === null)
        e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof n != "function" && typeof n != "object")
          throw Error(o(284));
        (e === null || e.ref !== n) && (t.flags |= 4194816);
      }
    }
    function jo(e, t, n, a, l) {
      return fl(t), n = fo(e, t, n, a, void 0, l), a = ho(), e !== null && !ut ? (po(e, t, l), na(e, t, l)) : (Ae && a && kr(t), t.flags |= 1, St(e, t, n, l), t.child);
    }
    function Ph(e, t, n, a, l, i) {
      return fl(t), t.updateQueue = null, n = th(t, a, n, l), eh(e), a = ho(), e !== null && !ut ? (po(e, t, i), na(e, t, i)) : (Ae && a && kr(t), t.flags |= 1, St(e, t, n, i), t.child);
    }
    function Ih(e, t, n, a, l) {
      if (fl(t), t.stateNode === null) {
        var i = Kl, c = n.contextType;
        typeof c == "object" && c !== null && (i = bt(c)), i = new n(a, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Co, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = a, i.state = t.memoizedState, i.refs = {}, ao(t), c = n.contextType, i.context = typeof c == "object" && c !== null ? bt(c) : Kl, i.state = t.memoizedState, c = n.getDerivedStateFromProps, typeof c == "function" && (Ro(t, n, c, a), i.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (c = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), c !== i.state && Co.enqueueReplaceState(i, i.state, null), tu(t, a, i, l), eu(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = true;
      } else if (e === null) {
        i = t.stateNode;
        var y = t.memoizedProps, T = gl(n, y);
        i.props = T;
        var D = i.context, Y = n.contextType;
        c = Kl, typeof Y == "object" && Y !== null && (c = bt(Y));
        var Q = n.getDerivedStateFromProps;
        Y = typeof Q == "function" || typeof i.getSnapshotBeforeUpdate == "function", y = t.pendingProps !== y, Y || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (y || D !== c) && Lh(t, i, a, c), _a = false;
        var M = t.memoizedState;
        i.state = M, tu(t, a, i, l), eu(), D = t.memoizedState, y || M !== D || _a ? (typeof Q == "function" && (Ro(t, n, Q, a), D = t.memoizedState), (T = _a || Hh(t, n, T, a, M, D, c)) ? (Y || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = D), i.props = a, i.state = D, i.context = c, a = T) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = false);
      } else {
        i = t.stateNode, lo(e, t), c = t.memoizedProps, Y = gl(n, c), i.props = Y, Q = t.pendingProps, M = i.context, D = n.contextType, T = Kl, typeof D == "object" && D !== null && (T = bt(D)), y = n.getDerivedStateFromProps, (D = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (c !== Q || M !== T) && Lh(t, i, a, T), _a = false, M = t.memoizedState, i.state = M, tu(t, a, i, l), eu();
        var H = t.memoizedState;
        c !== Q || M !== H || _a || e !== null && e.dependencies !== null && hs(e.dependencies) ? (typeof y == "function" && (Ro(t, n, y, a), H = t.memoizedState), (Y = _a || Hh(t, n, Y, a, M, H, T) || e !== null && e.dependencies !== null && hs(e.dependencies)) ? (D || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, H, T), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(a, H, T)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || c === e.memoizedProps && M === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = H), i.props = a, i.state = H, i.context = T, a = Y) : (typeof i.componentDidUpdate != "function" || c === e.memoizedProps && M === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024), a = false);
      }
      return i = a, zs(e, t), a = (t.flags & 128) !== 0, i || a ? (i = t.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && a ? (t.child = ml(t, e.child, null, l), t.child = ml(t, null, n, l)) : St(e, t, n, l), t.memoizedState = i.state, e = t.child) : e = na(e, t, l), e;
    }
    function ed(e, t, n, a) {
      return ol(), t.flags |= 256, St(e, t, n, a), t.child;
    }
    var Uo = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
    function Do(e) {
      return { baseLanes: e, cachePool: Qf() };
    }
    function Mo(e, t, n) {
      return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Jt), e;
    }
    function td(e, t, n) {
      var a = t.pendingProps, l = false, i = (t.flags & 128) !== 0, c;
      if ((c = i) || (c = e !== null && e.memoizedState === null ? false : (tt.current & 2) !== 0), c && (l = true, t.flags &= -129), c = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (Ae) {
          if (l ? wa(t) : Ra(), (e = Ve) ? (e = op(e, on), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = { dehydrated: e, treeContext: Sa !== null ? { id: Mn, overflow: Bn } : null, retryLane: 536870912, hydrationErrors: null }, n = Df(e), n.return = t, t.child = n, vt = t, Ve = null)) : e = null, e === null)
            throw Ea(t);
          return gc(e) ? t.lanes = 32 : t.lanes = 536870912, null;
        }
        var y = a.children;
        return a = a.fallback, l ? (Ra(), l = t.mode, y = js({ mode: "hidden", children: y }, l), a = rl(a, l, n, null), y.return = t, a.return = t, y.sibling = a, t.child = y, a = t.child, a.memoizedState = Do(n), a.childLanes = Mo(e, c, n), t.memoizedState = Uo, uu(null, a)) : (wa(t), Bo(t, y));
      }
      var T = e.memoizedState;
      if (T !== null && (y = T.dehydrated, y !== null)) {
        if (i)
          t.flags & 256 ? (wa(t), t.flags &= -257, t = qo(e, t, n)) : t.memoizedState !== null ? (Ra(), t.child = e.child, t.flags |= 128, t = null) : (Ra(), y = a.fallback, l = t.mode, a = js({ mode: "visible", children: a.children }, l), y = rl(y, l, n, null), y.flags |= 2, a.return = t, y.return = t, a.sibling = y, t.child = a, ml(t, e.child, null, n), a = t.child, a.memoizedState = Do(n), a.childLanes = Mo(e, c, n), t.memoizedState = Uo, t = uu(null, a));
        else if (wa(t), gc(y)) {
          if (c = y.nextSibling && y.nextSibling.dataset, c)
            var D = c.dgst;
          c = D, a = Error(o(419)), a.stack = "", a.digest = c, Ji({ value: a, source: null, stack: null }), t = qo(e, t, n);
        } else if (ut || $l(e, t, n, false), c = (n & e.childLanes) !== 0, ut || c) {
          if (c = Ye, c !== null && (a = Xu(c, n), a !== 0 && a !== T.retryLane))
            throw T.retryLane = a, sl(e, a), qt(c, e, a), zo;
          yc(y) || Xs(), t = qo(e, t, n);
        } else
          yc(y) ? (t.flags |= 192, t.child = e.child, t = null) : (e = T.treeContext, Ve = fn(y.nextSibling), vt = t, Ae = true, xa = null, on = false, e !== null && qf(t, e), t = Bo(t, a.children), t.flags |= 4096);
        return t;
      }
      return l ? (Ra(), y = a.fallback, l = t.mode, T = e.child, D = T.sibling, a = Wn(T, { mode: "hidden", children: a.children }), a.subtreeFlags = T.subtreeFlags & 65011712, D !== null ? y = Wn(D, y) : (y = rl(y, l, n, null), y.flags |= 2), y.return = t, a.return = t, a.sibling = y, t.child = a, uu(null, a), a = t.child, y = e.child.memoizedState, y === null ? y = Do(n) : (l = y.cachePool, l !== null ? (T = lt._currentValue, l = l.parent !== T ? { parent: T, pool: T } : l) : l = Qf(), y = { baseLanes: y.baseLanes | n, cachePool: l }), a.memoizedState = y, a.childLanes = Mo(e, c, n), t.memoizedState = Uo, uu(e.child, a)) : (wa(t), n = e.child, e = n.sibling, n = Wn(n, { mode: "visible", children: a.children }), n.return = t, n.sibling = null, e !== null && (c = t.deletions, c === null ? (t.deletions = [e], t.flags |= 16) : c.push(e)), t.child = n, t.memoizedState = null, n);
    }
    function Bo(e, t) {
      return t = js({ mode: "visible", children: t }, e.mode), t.return = e, e.child = t;
    }
    function js(e, t) {
      return e = Vt(22, e, null, t), e.lanes = 0, e;
    }
    function qo(e, t, n) {
      return ml(t, e.child, null, n), e = Bo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
    }
    function nd(e, t, n) {
      e.lanes |= t;
      var a = e.alternate;
      a !== null && (a.lanes |= t), $r(e.return, t, n);
    }
    function Ho(e, t, n, a, l, i) {
      var c = e.memoizedState;
      c === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: a, tail: n, tailMode: l, treeForkCount: i } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = a, c.tail = n, c.tailMode = l, c.treeForkCount = i);
    }
    function ad(e, t, n) {
      var a = t.pendingProps, l = a.revealOrder, i = a.tail;
      a = a.children;
      var c = tt.current, y = (c & 2) !== 0;
      if (y ? (c = c & 1 | 2, t.flags |= 128) : c &= 1, $(tt, c), St(e, t, a, n), a = Ae ? Ki : 0, !y && e !== null && (e.flags & 128) !== 0)
        e:
          for (e = t.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && nd(e, n, t);
            else if (e.tag === 19)
              nd(e, n, t);
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
          n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Ho(t, false, l, n, i, a);
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
          Ho(t, true, n, null, i, a);
          break;
        case "together":
          Ho(t, false, null, null, void 0, a);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function na(e, t, n) {
      if (e !== null && (t.dependencies = e.dependencies), za |= t.lanes, (n & t.childLanes) === 0)
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
    function Lo(e, t) {
      return (e.lanes & t) !== 0 ? true : (e = e.dependencies, !!(e !== null && hs(e)));
    }
    function Ay(e, t, n) {
      switch (t.tag) {
        case 3:
          gt(t, t.stateNode.containerInfo), Ta(t, lt, e.memoizedState.cache), ol();
          break;
        case 27:
        case 5:
          Za(t);
          break;
        case 4:
          gt(t, t.stateNode.containerInfo);
          break;
        case 10:
          Ta(t, t.type, t.memoizedProps.value);
          break;
        case 31:
          if (t.memoizedState !== null)
            return t.flags |= 128, oo(t), null;
          break;
        case 13:
          var a = t.memoizedState;
          if (a !== null)
            return a.dehydrated !== null ? (wa(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? td(e, t, n) : (wa(t), e = na(e, t, n), e !== null ? e.sibling : null);
          wa(t);
          break;
        case 19:
          var l = (e.flags & 128) !== 0;
          if (a = (n & t.childLanes) !== 0, a || ($l(e, t, n, false), a = (n & t.childLanes) !== 0), l) {
            if (a)
              return ad(e, t, n);
            t.flags |= 128;
          }
          if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), $(tt, tt.current), a)
            break;
          return null;
        case 22:
          return t.lanes = 0, Fh(e, t, n, t.pendingProps);
        case 24:
          Ta(t, lt, e.memoizedState.cache);
      }
      return na(e, t, n);
    }
    function ld(e, t, n) {
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps)
          ut = true;
        else {
          if (!Lo(e, n) && (t.flags & 128) === 0)
            return ut = false, Ay(e, t, n);
          ut = (e.flags & 131072) !== 0;
        }
      else
        ut = false, Ae && (t.flags & 1048576) !== 0 && Bf(t, Ki, t.index);
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: {
            var a = t.pendingProps;
            if (e = dl(t.elementType), t.type = e, typeof e == "function")
              Qr(e) ? (a = gl(e, a), t.tag = 1, t = Ih(null, t, e, a, n)) : (t.tag = 0, t = jo(null, t, e, a, n));
            else {
              if (e != null) {
                var l = e.$$typeof;
                if (l === le) {
                  t.tag = 11, t = kh(null, t, e, a, n);
                  break e;
                } else if (l === re) {
                  t.tag = 14, t = Kh(null, t, e, a, n);
                  break e;
                }
              }
              throw t = Ie(e) || e, Error(o(306, t, ""));
            }
          }
          return t;
        case 0:
          return jo(e, t, t.type, t.pendingProps, n);
        case 1:
          return a = t.type, l = gl(a, t.pendingProps), Ih(e, t, a, l, n);
        case 3:
          e: {
            if (gt(t, t.stateNode.containerInfo), e === null)
              throw Error(o(387));
            a = t.pendingProps;
            var i = t.memoizedState;
            l = i.element, lo(e, t), tu(t, a, null, n);
            var c = t.memoizedState;
            if (a = c.cache, Ta(t, lt, a), a !== i.cache && Pr(t, [lt], n, true), eu(), a = c.element, i.isDehydrated)
              if (i = { element: a, isDehydrated: false, cache: c.cache }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                t = ed(e, t, a, n);
                break e;
              } else if (a !== l) {
                l = un(Error(o(424)), t), Ji(l), t = ed(e, t, a, n);
                break e;
              } else {
                switch (e = t.stateNode.containerInfo, e.nodeType) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                }
                for (Ve = fn(e.firstChild), vt = t, Ae = true, xa = null, on = true, n = Ff(t, null, a, n), t.child = n; n; )
                  n.flags = n.flags & -3 | 4096, n = n.sibling;
              }
            else {
              if (ol(), a === l) {
                t = na(e, t, n);
                break e;
              }
              St(e, t, a, n);
            }
            t = t.child;
          }
          return t;
        case 26:
          return zs(e, t), e === null ? (n = mp(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : Ae || (n = t.type, e = t.pendingProps, a = Js(Se.current).createElement(n), a[ct] = t, a[dt] = e, xt(a, n, e), Je(a), t.stateNode = a) : t.memoizedState = mp(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
        case 27:
          return Za(t), e === null && Ae && (a = t.stateNode = hp(t.type, t.pendingProps, Se.current), vt = t, on = true, l = Ve, Ba(t.type) ? (vc = l, Ve = fn(a.firstChild)) : Ve = l), St(e, t, t.pendingProps.children, n), zs(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && Ae && ((l = a = Ve) && (a = t0(a, t.type, t.pendingProps, on), a !== null ? (t.stateNode = a, vt = t, Ve = fn(a.firstChild), on = false, l = true) : l = false), l || Ea(t)), Za(t), l = t.type, i = t.pendingProps, c = e !== null ? e.memoizedProps : null, a = i.children, dc(l, i) ? a = null : c !== null && dc(l, c) && (t.flags |= 32), t.memoizedState !== null && (l = fo(e, t, yy, null, null, n), xu._currentValue = l), zs(e, t), St(e, t, a, n), t.child;
        case 6:
          return e === null && Ae && ((e = n = Ve) && (n = n0(n, t.pendingProps, on), n !== null ? (t.stateNode = n, vt = t, Ve = null, e = true) : e = false), e || Ea(t)), null;
        case 13:
          return td(e, t, n);
        case 4:
          return gt(t, t.stateNode.containerInfo), a = t.pendingProps, e === null ? t.child = ml(t, null, a, n) : St(e, t, a, n), t.child;
        case 11:
          return kh(e, t, t.type, t.pendingProps, n);
        case 7:
          return St(e, t, t.pendingProps, n), t.child;
        case 8:
          return St(e, t, t.pendingProps.children, n), t.child;
        case 12:
          return St(e, t, t.pendingProps.children, n), t.child;
        case 10:
          return a = t.pendingProps, Ta(t, t.type, a.value), St(e, t, a.children, n), t.child;
        case 9:
          return l = t.type._context, a = t.pendingProps.children, fl(t), l = bt(l), a = a(l), t.flags |= 1, St(e, t, a, n), t.child;
        case 14:
          return Kh(e, t, t.type, t.pendingProps, n);
        case 15:
          return Jh(e, t, t.type, t.pendingProps, n);
        case 19:
          return ad(e, t, n);
        case 31:
          return _y(e, t, n);
        case 22:
          return Fh(e, t, n, t.pendingProps);
        case 24:
          return fl(t), a = bt(lt), e === null ? (l = to(), l === null && (l = Ye, i = Ir(), l.pooledCache = i, i.refCount++, i !== null && (l.pooledCacheLanes |= n), l = i), t.memoizedState = { parent: a, cache: l }, ao(t), Ta(t, lt, l)) : ((e.lanes & n) !== 0 && (lo(e, t), tu(t, null, null, n), eu()), l = e.memoizedState, i = t.memoizedState, l.parent !== a ? (l = { parent: a, cache: a }, t.memoizedState = l, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = l), Ta(t, lt, a)) : (a = i.cache, Ta(t, lt, a), a !== l.cache && Pr(t, [lt], n, true))), St(e, t, t.pendingProps.children, n), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(o(156, t.tag));
    }
    function aa(e) {
      e.flags |= 4;
    }
    function Yo(e, t, n, a, l) {
      if ((t = (e.mode & 32) !== 0) && (t = false), t) {
        if (e.flags |= 16777216, (l & 335544128) === l)
          if (e.stateNode.complete)
            e.flags |= 8192;
          else if (zd())
            e.flags |= 8192;
          else
            throw pl = ys, no;
      } else
        e.flags &= -16777217;
    }
    function id(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !Sp(t))
        if (zd())
          e.flags |= 8192;
        else
          throw pl = ys, no;
    }
    function Us(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Hu() : 536870912, e.lanes |= t, oi |= t);
    }
    function su(e, t) {
      if (!Ae)
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
    function Ze(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, n = 0, a = 0;
      if (t)
        for (var l = e.child; l !== null; )
          n |= l.lanes | l.childLanes, a |= l.subtreeFlags & 65011712, a |= l.flags & 65011712, l.return = e, l = l.sibling;
      else
        for (l = e.child; l !== null; )
          n |= l.lanes | l.childLanes, a |= l.subtreeFlags, a |= l.flags, l.return = e, l = l.sibling;
      return e.subtreeFlags |= a, e.childLanes = n, t;
    }
    function Oy(e, t, n) {
      var a = t.pendingProps;
      switch (Kr(t), t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Ze(t), null;
        case 1:
          return Ze(t), null;
        case 3:
          return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), In(lt), Ke(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Wl(t) ? aa(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Fr())), Ze(t), null;
        case 26:
          var l = t.type, i = t.memoizedState;
          return e === null ? (aa(t), i !== null ? (Ze(t), id(t, i)) : (Ze(t), Yo(t, l, null, a, n))) : i ? i !== e.memoizedState ? (aa(t), Ze(t), id(t, i)) : (Ze(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && aa(t), Ze(t), Yo(t, l, e, a, n)), null;
        case 27:
          if (_l(t), n = Se.current, l = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== a && aa(t);
          else {
            if (!a) {
              if (t.stateNode === null)
                throw Error(o(166));
              return Ze(t), null;
            }
            e = ee.current, Wl(t) ? Hf(t) : (e = hp(l, a, n), t.stateNode = e, aa(t));
          }
          return Ze(t), null;
        case 5:
          if (_l(t), l = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== a && aa(t);
          else {
            if (!a) {
              if (t.stateNode === null)
                throw Error(o(166));
              return Ze(t), null;
            }
            if (i = ee.current, Wl(t))
              Hf(t);
            else {
              var c = Js(Se.current);
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
              i[ct] = t, i[dt] = a;
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
                switch (xt(i, l, a), l) {
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
          return Ze(t), Yo(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
        case 6:
          if (e && t.stateNode != null)
            e.memoizedProps !== a && aa(t);
          else {
            if (typeof a != "string" && t.stateNode === null)
              throw Error(o(166));
            if (e = Se.current, Wl(t)) {
              if (e = t.stateNode, n = t.memoizedProps, a = null, l = vt, l !== null)
                switch (l.tag) {
                  case 27:
                  case 5:
                    a = l.memoizedProps;
                }
              e[ct] = t, e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === true || tp(e.nodeValue, n)), e || Ea(t, true);
            } else
              e = Js(e).createTextNode(a), e[ct] = t, t.stateNode = e;
          }
          return Ze(t), null;
        case 31:
          if (n = t.memoizedState, e === null || e.memoizedState !== null) {
            if (a = Wl(t), n !== null) {
              if (e === null) {
                if (!a)
                  throw Error(o(318));
                if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e)
                  throw Error(o(557));
                e[ct] = t;
              } else
                ol(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
              Ze(t), e = false;
            } else
              n = Fr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = true;
            if (!e)
              return t.flags & 256 ? (kt(t), t) : (kt(t), null);
            if ((t.flags & 128) !== 0)
              throw Error(o(558));
          }
          return Ze(t), null;
        case 13:
          if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (l = Wl(t), a !== null && a.dehydrated !== null) {
              if (e === null) {
                if (!l)
                  throw Error(o(318));
                if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l)
                  throw Error(o(317));
                l[ct] = t;
              } else
                ol(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
              Ze(t), l = false;
            } else
              l = Fr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), l = true;
            if (!l)
              return t.flags & 256 ? (kt(t), t) : (kt(t), null);
          }
          return kt(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = a !== null, e = e !== null && e.memoizedState !== null, n && (a = t.child, l = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (l = a.alternate.memoizedState.cachePool.pool), i = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool), i !== l && (a.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), Us(t, t.updateQueue), Ze(t), null);
        case 4:
          return Ke(), e === null && rc(t.stateNode.containerInfo), Ze(t), null;
        case 10:
          return In(t.type), Ze(t), null;
        case 19:
          if (V(tt), a = t.memoizedState, a === null)
            return Ze(t), null;
          if (l = (t.flags & 128) !== 0, i = a.rendering, i === null)
            if (l)
              su(a, false);
            else {
              if ($e !== 0 || e !== null && (e.flags & 128) !== 0)
                for (e = t.child; e !== null; ) {
                  if (i = Ss(e), i !== null) {
                    for (t.flags |= 128, su(a, false), e = i.updateQueue, t.updateQueue = e, Us(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                      Uf(n, e), n = n.sibling;
                    return $(tt, tt.current & 1 | 2), Ae && $n(t, a.treeForkCount), t.child;
                  }
                  e = e.sibling;
                }
              a.tail !== null && wt() > Hs && (t.flags |= 128, l = true, su(a, false), t.lanes = 4194304);
            }
          else {
            if (!l)
              if (e = Ss(i), e !== null) {
                if (t.flags |= 128, l = true, e = e.updateQueue, t.updateQueue = e, Us(t, e), su(a, true), a.tail === null && a.tailMode === "hidden" && !i.alternate && !Ae)
                  return Ze(t), null;
              } else
                2 * wt() - a.renderingStartTime > Hs && n !== 536870912 && (t.flags |= 128, l = true, su(a, false), t.lanes = 4194304);
            a.isBackwards ? (i.sibling = t.child, t.child = i) : (e = a.last, e !== null ? e.sibling = i : t.child = i, a.last = i);
          }
          return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = wt(), e.sibling = null, n = tt.current, $(tt, l ? n & 1 | 2 : n & 1), Ae && $n(t, a.treeForkCount), e) : (Ze(t), null);
        case 22:
        case 23:
          return kt(t), ro(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Ze(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ze(t), n = t.updateQueue, n !== null && Us(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), e !== null && V(hl), null;
        case 24:
          return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), In(lt), Ze(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(o(156, t.tag));
    }
    function wy(e, t) {
      switch (Kr(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
          return In(lt), Ke(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return _l(t), null;
        case 31:
          if (t.memoizedState !== null) {
            if (kt(t), t.alternate === null)
              throw Error(o(340));
            ol();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 13:
          if (kt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(o(340));
            ol();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
          return V(tt), null;
        case 4:
          return Ke(), null;
        case 10:
          return In(t.type), null;
        case 22:
        case 23:
          return kt(t), ro(), e !== null && V(hl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 24:
          return In(lt), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function ud(e, t) {
      switch (Kr(t), t.tag) {
        case 3:
          In(lt), Ke();
          break;
        case 26:
        case 27:
        case 5:
          _l(t);
          break;
        case 4:
          Ke();
          break;
        case 31:
          t.memoizedState !== null && kt(t);
          break;
        case 13:
          kt(t);
          break;
        case 19:
          V(tt);
          break;
        case 10:
          In(t.type);
          break;
        case 22:
        case 23:
          kt(t), ro(), e !== null && V(hl);
          break;
        case 24:
          In(lt);
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
        De(t, t.return, y);
      }
    }
    function Ca(e, t, n) {
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
                  De(l, T, Y);
                }
              }
            }
            a = a.next;
          } while (a !== i);
        }
      } catch (Y) {
        De(t, t.return, Y);
      }
    }
    function sd(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var n = e.stateNode;
        try {
          $f(t, n);
        } catch (a) {
          De(e, e.return, a);
        }
      }
    }
    function rd(e, t, n) {
      n.props = gl(e.type, e.memoizedProps), n.state = e.memoizedState;
      try {
        n.componentWillUnmount();
      } catch (a) {
        De(e, t, a);
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
        De(e, t, l);
      }
    }
    function qn(e, t) {
      var n = e.ref, a = e.refCleanup;
      if (n !== null)
        if (typeof a == "function")
          try {
            a();
          } catch (l) {
            De(e, t, l);
          } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
          }
        else if (typeof n == "function")
          try {
            n(null);
          } catch (l) {
            De(e, t, l);
          }
        else
          n.current = null;
    }
    function od(e) {
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
        De(e, e.return, l);
      }
    }
    function Xo(e, t, n) {
      try {
        var a = e.stateNode;
        Fy(a, e.type, n, t), a[dt] = t;
      } catch (l) {
        De(e, e.return, l);
      }
    }
    function cd(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ba(e.type) || e.tag === 4;
    }
    function Go(e) {
      e:
        for (; ; ) {
          for (; e.sibling === null; ) {
            if (e.return === null || cd(e.return))
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
    function Qo(e, t, n) {
      var a = e.tag;
      if (a === 5 || a === 6)
        e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Pt));
      else if (a !== 4 && (a === 27 && Ba(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
        for (Qo(e, t, n), e = e.sibling; e !== null; )
          Qo(e, t, n), e = e.sibling;
    }
    function Ds(e, t, n) {
      var a = e.tag;
      if (a === 5 || a === 6)
        e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
      else if (a !== 4 && (a === 27 && Ba(e.type) && (n = e.stateNode), e = e.child, e !== null))
        for (Ds(e, t, n), e = e.sibling; e !== null; )
          Ds(e, t, n), e = e.sibling;
    }
    function fd(e) {
      var t = e.stateNode, n = e.memoizedProps;
      try {
        for (var a = e.type, l = t.attributes; l.length; )
          t.removeAttributeNode(l[0]);
        xt(t, a, n), t[ct] = e, t[dt] = n;
      } catch (i) {
        De(e, e.return, i);
      }
    }
    var la = false, st = false, Vo = false, hd = typeof WeakSet == "function" ? WeakSet : Set, yt = null;
    function Ry(e, t) {
      if (e = e.containerInfo, fc = tr, e = _f(e), Br(e)) {
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
              } catch (oe) {
                n = null;
                break e;
              }
              var c = 0, y = -1, T = -1, D = 0, Y = 0, Q = e, M = null;
              t:
                for (; ; ) {
                  for (var H; Q !== n || l !== 0 && Q.nodeType !== 3 || (y = c + l), Q !== i || a !== 0 && Q.nodeType !== 3 || (T = c + a), Q.nodeType === 3 && (c += Q.nodeValue.length), (H = Q.firstChild) !== null; )
                    M = Q, Q = H;
                  for (; ; ) {
                    if (Q === e)
                      break t;
                    if (M === n && ++D === l && (y = c), M === i && ++Y === a && (T = c), (H = Q.nextSibling) !== null)
                      break;
                    Q = M, M = Q.parentNode;
                  }
                  Q = H;
                }
              n = y === -1 || T === -1 ? null : { start: y, end: T };
            } else
              n = null;
          }
        n = n || { start: 0, end: 0 };
      } else
        n = null;
      for (hc = { focusedElem: e, selectionRange: n }, tr = false, yt = t; yt !== null; )
        if (t = yt, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
          e.return = t, yt = e;
        else
          for (; yt !== null; ) {
            switch (t = yt, i = t.alternate, e = t.flags, t.tag) {
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
                    var I = gl(n.type, l);
                    e = a.getSnapshotBeforeUpdate(I, i), a.__reactInternalSnapshotBeforeUpdate = e;
                  } catch (oe) {
                    De(n, n.return, oe);
                  }
                }
                break;
              case 3:
                if ((e & 1024) !== 0) {
                  if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9)
                    mc(e);
                  else if (n === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        mc(e);
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
              e.return = t.return, yt = e;
              break;
            }
            yt = t.return;
          }
    }
    function dd(e, t, n) {
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
                De(n, n.return, c);
              }
            else {
              var l = gl(n.type, t.memoizedProps);
              t = t.memoizedState;
              try {
                e.componentDidUpdate(l, t, e.__reactInternalSnapshotBeforeUpdate);
              } catch (c) {
                De(n, n.return, c);
              }
            }
          a & 64 && sd(n), a & 512 && ou(n, n.return);
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
              $f(e, t);
            } catch (c) {
              De(n, n.return, c);
            }
          }
          break;
        case 27:
          t === null && a & 4 && fd(n);
        case 26:
        case 5:
          ua(e, n), t === null && a & 4 && od(n), a & 512 && ou(n, n.return);
          break;
        case 12:
          ua(e, n);
          break;
        case 31:
          ua(e, n), a & 4 && yd(e, n);
          break;
        case 13:
          ua(e, n), a & 4 && gd(e, n), a & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = qy.bind(null, n), a0(e, n))));
          break;
        case 22:
          if (a = n.memoizedState !== null || la, !a) {
            t = t !== null && t.memoizedState !== null || st, l = la;
            var i = st;
            la = a, (st = t) && !i ? sa(e, n, (n.subtreeFlags & 8772) !== 0) : ua(e, n), la = l, st = i;
          }
          break;
        case 30:
          break;
        default:
          ua(e, n);
      }
    }
    function pd(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, pd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && ji(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    var ke = null, Ut = false;
    function ia(e, t, n) {
      for (n = n.child; n !== null; )
        md(e, t, n), n = n.sibling;
    }
    function md(e, t, n) {
      if (Rt && typeof Rt.onCommitFiberUnmount == "function")
        try {
          Rt.onCommitFiberUnmount(Ka, n);
        } catch (i) {
        }
      switch (n.tag) {
        case 26:
          st || qn(n, t), ia(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
          break;
        case 27:
          st || qn(n, t);
          var a = ke, l = Ut;
          Ba(n.type) && (ke = n.stateNode, Ut = false), ia(e, t, n), vu(n.stateNode), ke = a, Ut = l;
          break;
        case 5:
          st || qn(n, t);
        case 6:
          if (a = ke, l = Ut, ke = null, ia(e, t, n), ke = a, Ut = l, ke !== null)
            if (Ut)
              try {
                (ke.nodeType === 9 ? ke.body : ke.nodeName === "HTML" ? ke.ownerDocument.body : ke).removeChild(n.stateNode);
              } catch (i) {
                De(n, t, i);
              }
            else
              try {
                ke.removeChild(n.stateNode);
              } catch (i) {
                De(n, t, i);
              }
          break;
        case 18:
          ke !== null && (Ut ? (e = ke, sp(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), gi(e)) : sp(ke, n.stateNode));
          break;
        case 4:
          a = ke, l = Ut, ke = n.stateNode.containerInfo, Ut = true, ia(e, t, n), ke = a, Ut = l;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Ca(2, n, t), st || Ca(4, n, t), ia(e, t, n);
          break;
        case 1:
          st || (qn(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function" && rd(n, t, a)), ia(e, t, n);
          break;
        case 21:
          ia(e, t, n);
          break;
        case 22:
          st = (a = st) || n.memoizedState !== null, ia(e, t, n), st = a;
          break;
        default:
          ia(e, t, n);
      }
    }
    function yd(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
        e = e.dehydrated;
        try {
          gi(e);
        } catch (n) {
          De(t, t.return, n);
        }
      }
    }
    function gd(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
          gi(e);
        } catch (n) {
          De(t, t.return, n);
        }
    }
    function Cy(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new hd()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new hd()), t;
        default:
          throw Error(o(435, e.tag));
      }
    }
    function Ms(e, t) {
      var n = Cy(e);
      t.forEach(function(a) {
        if (!n.has(a)) {
          n.add(a);
          var l = Hy.bind(null, e, a);
          a.then(l, l);
        }
      });
    }
    function Dt(e, t) {
      var n = t.deletions;
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var l = n[a], i = e, c = t, y = c;
          e:
            for (; y !== null; ) {
              switch (y.tag) {
                case 27:
                  if (Ba(y.type)) {
                    ke = y.stateNode, Ut = false;
                    break e;
                  }
                  break;
                case 5:
                  ke = y.stateNode, Ut = false;
                  break e;
                case 3:
                case 4:
                  ke = y.stateNode.containerInfo, Ut = true;
                  break e;
              }
              y = y.return;
            }
          if (ke === null)
            throw Error(o(160));
          md(i, c, l), ke = null, Ut = false, i = l.alternate, i !== null && (i.return = null), l.return = null;
        }
      if (t.subtreeFlags & 13886)
        for (t = t.child; t !== null; )
          vd(t, e), t = t.sibling;
    }
    var vn = null;
    function vd(e, t) {
      var n = e.alternate, a = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Dt(t, e), Mt(e), a & 4 && (Ca(3, e, e.return), ru(3, e), Ca(5, e, e.return));
          break;
        case 1:
          Dt(t, e), Mt(e), a & 512 && (st || n === null || qn(n, n.return)), a & 64 && la && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
          break;
        case 26:
          var l = vn;
          if (Dt(t, e), Mt(e), a & 512 && (st || n === null || qn(n, n.return)), a & 4) {
            var i = n !== null ? n.memoizedState : null;
            if (a = e.memoizedState, n === null)
              if (a === null)
                if (e.stateNode === null) {
                  e: {
                    a = e.type, n = e.memoizedProps, l = l.ownerDocument || l;
                    t:
                      switch (a) {
                        case "title":
                          i = l.getElementsByTagName("title")[0], (!i || i[Cn] || i[ct] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = l.createElement(a), l.head.insertBefore(i, l.querySelector("head > title"))), xt(i, a, n), i[ct] = e, Je(i), a = i;
                          break e;
                        case "link":
                          var c = vp("link", "href", l).get(a + (n.href || ""));
                          if (c) {
                            for (var y = 0; y < c.length; y++)
                              if (i = c[y], i.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && i.getAttribute("rel") === (n.rel == null ? null : n.rel) && i.getAttribute("title") === (n.title == null ? null : n.title) && i.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                                c.splice(y, 1);
                                break t;
                              }
                          }
                          i = l.createElement(a), xt(i, a, n), l.head.appendChild(i);
                          break;
                        case "meta":
                          if (c = vp("meta", "content", l).get(a + (n.content || ""))) {
                            for (y = 0; y < c.length; y++)
                              if (i = c[y], i.getAttribute("content") === (n.content == null ? null : "" + n.content) && i.getAttribute("name") === (n.name == null ? null : n.name) && i.getAttribute("property") === (n.property == null ? null : n.property) && i.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && i.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                                c.splice(y, 1);
                                break t;
                              }
                          }
                          i = l.createElement(a), xt(i, a, n), l.head.appendChild(i);
                          break;
                        default:
                          throw Error(o(468, a));
                      }
                    i[ct] = e, Je(i), a = i;
                  }
                  e.stateNode = a;
                } else
                  bp(l, e.type, e.stateNode);
              else
                e.stateNode = gp(l, a, e.memoizedProps);
            else
              i !== a ? (i === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : i.count--, a === null ? bp(l, e.type, e.stateNode) : gp(l, a, e.memoizedProps)) : a === null && e.stateNode !== null && Xo(e, e.memoizedProps, n.memoizedProps);
          }
          break;
        case 27:
          Dt(t, e), Mt(e), a & 512 && (st || n === null || qn(n, n.return)), n !== null && a & 4 && Xo(e, e.memoizedProps, n.memoizedProps);
          break;
        case 5:
          if (Dt(t, e), Mt(e), a & 512 && (st || n === null || qn(n, n.return)), e.flags & 32) {
            l = e.stateNode;
            try {
              Vn(l, "");
            } catch (I) {
              De(e, e.return, I);
            }
          }
          a & 4 && e.stateNode != null && (l = e.memoizedProps, Xo(e, l, n !== null ? n.memoizedProps : l)), a & 1024 && (Vo = true);
          break;
        case 6:
          if (Dt(t, e), Mt(e), a & 4) {
            if (e.stateNode === null)
              throw Error(o(162));
            a = e.memoizedProps, n = e.stateNode;
            try {
              n.nodeValue = a;
            } catch (I) {
              De(e, e.return, I);
            }
          }
          break;
        case 3:
          if ($s = null, l = vn, vn = Fs(t.containerInfo), Dt(t, e), vn = l, Mt(e), a & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
              gi(t.containerInfo);
            } catch (I) {
              De(e, e.return, I);
            }
          Vo && (Vo = false, bd(e));
          break;
        case 4:
          a = vn, vn = Fs(e.stateNode.containerInfo), Dt(t, e), Mt(e), vn = a;
          break;
        case 12:
          Dt(t, e), Mt(e);
          break;
        case 31:
          Dt(t, e), Mt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Ms(e, a)));
          break;
        case 13:
          Dt(t, e), Mt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (qs = wt()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Ms(e, a)));
          break;
        case 22:
          l = e.memoizedState !== null;
          var T = n !== null && n.memoizedState !== null, D = la, Y = st;
          if (la = D || l, st = Y || T, Dt(t, e), st = Y, la = D, Mt(e), a & 8192)
            e:
              for (t = e.stateNode, t._visibility = l ? t._visibility & -2 : t._visibility | 1, l && (n === null || T || la || st || vl(e)), n = null, t = e; ; ) {
                if (t.tag === 5 || t.tag === 26) {
                  if (n === null) {
                    T = n = t;
                    try {
                      if (i = T.stateNode, l)
                        c = i.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                      else {
                        y = T.stateNode;
                        var Q = T.memoizedProps.style, M = Q != null && Q.hasOwnProperty("display") ? Q.display : null;
                        y.style.display = M == null || typeof M == "boolean" ? "" : ("" + M).trim();
                      }
                    } catch (I) {
                      De(T, T.return, I);
                    }
                  }
                } else if (t.tag === 6) {
                  if (n === null) {
                    T = t;
                    try {
                      T.stateNode.nodeValue = l ? "" : T.memoizedProps;
                    } catch (I) {
                      De(T, T.return, I);
                    }
                  }
                } else if (t.tag === 18) {
                  if (n === null) {
                    T = t;
                    try {
                      var H = T.stateNode;
                      l ? rp(H, true) : rp(T.stateNode, false);
                    } catch (I) {
                      De(T, T.return, I);
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
          Dt(t, e), Mt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Ms(e, a)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          Dt(t, e), Mt(e);
      }
    }
    function Mt(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          for (var n, a = e.return; a !== null; ) {
            if (cd(a)) {
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
              Qo(e, D, T);
              break;
            default:
              throw Error(o(161));
          }
        } catch (Y) {
          De(e, e.return, Y);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function bd(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          bd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        }
    }
    function ua(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          dd(e, t.alternate, t), t = t.sibling;
    }
    function vl(e) {
      for (e = e.child; e !== null; ) {
        var t = e;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            Ca(4, t, t.return), vl(t);
            break;
          case 1:
            qn(t, t.return);
            var n = t.stateNode;
            typeof n.componentWillUnmount == "function" && rd(t, t.return, n), vl(t);
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
                De(a, a.return, D);
              }
            if (a = i, l = a.updateQueue, l !== null) {
              var y = a.stateNode;
              try {
                var T = l.shared.hiddenCallbacks;
                if (T !== null)
                  for (l.shared.hiddenCallbacks = null, l = 0; l < T.length; l++)
                    Wf(T[l], y);
              } catch (D) {
                De(a, a.return, D);
              }
            }
            n && c & 64 && sd(i), ou(i, i.return);
            break;
          case 27:
            fd(i);
          case 26:
          case 5:
            sa(l, i, n), n && a === null && c & 4 && od(i), ou(i, i.return);
            break;
          case 12:
            sa(l, i, n);
            break;
          case 31:
            sa(l, i, n), n && c & 4 && yd(l, i);
            break;
          case 13:
            sa(l, i, n), n && c & 4 && gd(l, i);
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
    function Zo(e, t) {
      var n = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Fi(n));
    }
    function ko(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Fi(e));
    }
    function bn(e, t, n, a) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; )
          Sd(e, t, n, a), t = t.sibling;
    }
    function Sd(e, t, n, a) {
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
              De(t, t.return, T);
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
          i = t.stateNode, c = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? bn(e, t, n, a) : cu(e, t) : i._visibility & 2 ? bn(e, t, n, a) : (i._visibility |= 2, ui(e, t, n, a, (t.subtreeFlags & 10256) !== 0 || false)), l & 2048 && Zo(c, t);
          break;
        case 24:
          bn(e, t, n, a), l & 2048 && ko(t.alternate, t);
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
            c.memoizedState !== null ? Y._visibility & 2 ? ui(i, c, y, T, l) : cu(i, c) : (Y._visibility |= 2, ui(i, c, y, T, l)), l && D & 2048 && Zo(c.alternate, c);
            break;
          case 24:
            ui(i, c, y, T, l), l && D & 2048 && ko(c.alternate, c);
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
              cu(n, a), l & 2048 && Zo(a.alternate, a);
              break;
            case 24:
              cu(n, a), l & 2048 && ko(a.alternate, a);
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
          xd(e, t, n), e = e.sibling;
    }
    function xd(e, t, n) {
      switch (e.tag) {
        case 26:
          si(e, t, n), e.flags & fu && e.memoizedState !== null && m0(n, vn, e.memoizedState, e.memoizedProps);
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
            yt = a, _d(a, e);
          }
        Ed(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; )
          Td(e), e = e.sibling;
    }
    function Td(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          hu(e), e.flags & 2048 && Ca(9, e, e.return);
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
            yt = a, _d(a, e);
          }
        Ed(e);
      }
      for (e = e.child; e !== null; ) {
        switch (t = e, t.tag) {
          case 0:
          case 11:
          case 15:
            Ca(8, t, t.return), Bs(t);
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
    function _d(e, t) {
      for (; yt !== null; ) {
        var n = yt;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            Ca(8, n, t);
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
          a.return = n, yt = a;
        else
          e:
            for (n = e; yt !== null; ) {
              a = yt;
              var l = a.sibling, i = a.return;
              if (pd(a), a === n) {
                yt = null;
                break e;
              }
              if (l !== null) {
                l.return = i, yt = l;
                break e;
              }
              yt = i;
            }
      }
    }
    var Ny = { getCacheForType: function(e) {
      var t = bt(lt), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    }, cacheSignal: function() {
      return bt(lt).controller.signal;
    } }, zy = typeof WeakMap == "function" ? WeakMap : Map, je = 0, Ye = null, xe = null, Te = 0, Ue = 0, Kt = null, Na = false, ri = false, Ko = false, ra = 0, $e = 0, za = 0, bl = 0, Jo = 0, Jt = 0, oi = 0, du = null, Bt = null, Fo = false, qs = 0, Ad = 0, Hs = 1 / 0, Ls = null, ja = null, ht = 0, Ua = null, ci = null, oa = 0, Wo = 0, $o = null, Od = null, pu = 0, Po = null;
    function Ft() {
      return (je & 2) !== 0 && Te !== 0 ? Te & -Te : L.T !== null ? lc() : Gu();
    }
    function wd() {
      if (Jt === 0)
        if ((Te & 536870912) === 0 || Ae) {
          var e = wl;
          wl <<= 1, (wl & 3932160) === 0 && (wl = 262144), Jt = e;
        } else
          Jt = 536870912;
      return e = Zt.current, e !== null && (e.flags |= 32), Jt;
    }
    function qt(e, t, n) {
      (e === Ye && (Ue === 2 || Ue === 9) || e.cancelPendingCommit !== null) && (fi(e, 0), Da(e, Te, Jt, false)), Xn(e, n), ((je & 2) === 0 || e !== Ye) && (e === Ye && ((je & 2) === 0 && (bl |= n), $e === 4 && Da(e, Te, Jt, false)), Hn(e));
    }
    function Rd(e, t, n) {
      if ((je & 6) !== 0)
        throw Error(o(327));
      var a = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Wa(e, t), l = a ? Dy(e, t) : ec(e, t, true), i = a;
      do {
        if (l === 0) {
          ri && !a && Da(e, t, 0, false);
          break;
        } else {
          if (n = e.current.alternate, i && !jy(n)) {
            l = ec(e, t, false), i = false;
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
                if (T && (fi(y, c).flags |= 256), c = ec(y, c, false), c !== 2) {
                  if (Ko && !T) {
                    y.errorRecoveryDisabledLanes |= i, bl |= i, l = 4;
                    break e;
                  }
                  i = Bt, Bt = l, i !== null && (Bt === null ? Bt = i : Bt.push.apply(Bt, i));
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
                Da(a, t, Jt, !Na);
                break e;
              case 2:
                Bt = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(o(329));
            }
            if ((t & 62914560) === t && (l = qs + 300 - wt(), 10 < l)) {
              if (Da(a, t, Jt, !Na), Rl(a, 0, true) !== 0)
                break e;
              oa = t, a.timeoutHandle = ip(Cd.bind(null, a, n, Bt, Ls, Fo, t, Jt, bl, oi, Na, i, "Throttled", -0, 0), l);
              break e;
            }
            Cd(a, n, Bt, Ls, Fo, t, Jt, bl, oi, Na, i, null, -0, 0);
          }
        }
        break;
      } while (true);
      Hn(e);
    }
    function Cd(e, t, n, a, l, i, c, y, T, D, Y, Q, M, H) {
      if (e.timeoutHandle = -1, Q = t.subtreeFlags, Q & 8192 || (Q & 16785408) === 16785408) {
        Q = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: true, waitingForViewTransition: false, unsuspend: Pt }, xd(t, i, Q);
        var I = (i & 62914560) === i ? qs - wt() : (i & 4194048) === i ? Ad - wt() : 0;
        if (I = y0(Q, I), I !== null) {
          oa = i, e.cancelPendingCommit = I(qd.bind(null, e, t, i, n, a, l, c, y, T, Y, Q, null, M, H)), Da(e, i, c, !D);
          return;
        }
      }
      qd(e, t, i, n, a, l, c, y, T);
    }
    function jy(e) {
      for (var t = e; ; ) {
        var n = t.tag;
        if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
          for (var a = 0; a < n.length; a++) {
            var l = n[a], i = l.getSnapshot;
            l = l.value;
            try {
              if (!Qt(i(), l))
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
      t &= ~Jo, t &= ~bl, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
      for (var l = t; 0 < l; ) {
        var i = 31 - Et(l), c = 1 << i;
        a[i] = -1, l &= ~c;
      }
      n !== 0 && Lu(e, n, t);
    }
    function Ys() {
      return (je & 6) === 0 ? (mu(0), false) : true;
    }
    function Io() {
      if (xe !== null) {
        if (Ue === 0)
          var e = xe.return;
        else
          e = xe, Pn = cl = null, mo(e), ti = null, $i = 0, e = xe;
        for (; e !== null; )
          ud(e.alternate, e), e = e.return;
        xe = null;
      }
    }
    function fi(e, t) {
      var n = e.timeoutHandle;
      n !== -1 && (e.timeoutHandle = -1, Py(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), oa = 0, Io(), Ye = e, xe = n = Wn(e.current, null), Te = t, Ue = 0, Kt = null, Na = false, ri = Wa(e, t), Ko = false, oi = Jt = Jo = bl = za = $e = 0, Bt = du = null, Fo = false, (t & 8) !== 0 && (t |= t & 32);
      var a = e.entangledLanes;
      if (a !== 0)
        for (e = e.entanglements, a &= t; 0 < a; ) {
          var l = 31 - Et(a), i = 1 << l;
          t |= e[l], a &= ~i;
        }
      return ra = t, ss(), n;
    }
    function Nd(e, t) {
      ve = null, L.H = iu, t === ei || t === ms ? (t = kf(), Ue = 3) : t === no ? (t = kf(), Ue = 4) : Ue = t === zo ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Kt = t, xe === null && ($e = 1, Cs(e, un(t, e.current)));
    }
    function zd() {
      var e = Zt.current;
      return e === null ? true : (Te & 4194048) === Te ? cn === null : (Te & 62914560) === Te || (Te & 536870912) !== 0 ? e === cn : false;
    }
    function jd() {
      var e = L.H;
      return L.H = iu, e === null ? iu : e;
    }
    function Ud() {
      var e = L.A;
      return L.A = Ny, e;
    }
    function Xs() {
      $e = 4, Na || (Te & 4194048) !== Te && Zt.current !== null || (ri = true), (za & 134217727) === 0 && (bl & 134217727) === 0 || Ye === null || Da(Ye, Te, Jt, false);
    }
    function ec(e, t, n) {
      var a = je;
      je |= 2;
      var l = jd(), i = Ud();
      (Ye !== e || Te !== t) && (Ls = null, fi(e, t)), t = false;
      var c = $e;
      e:
        do
          try {
            if (Ue !== 0 && xe !== null) {
              var y = xe, T = Kt;
              switch (Ue) {
                case 8:
                  Io(), c = 6;
                  break e;
                case 3:
                case 2:
                case 9:
                case 6:
                  Zt.current === null && (t = true);
                  var D = Ue;
                  if (Ue = 0, Kt = null, hi(e, y, T, D), n && ri) {
                    c = 0;
                    break e;
                  }
                  break;
                default:
                  D = Ue, Ue = 0, Kt = null, hi(e, y, T, D);
              }
            }
            Uy(), c = $e;
            break;
          } catch (Y) {
            Nd(e, Y);
          }
        while (true);
      return t && e.shellSuspendCounter++, Pn = cl = null, je = a, L.H = l, L.A = i, xe === null && (Ye = null, Te = 0, ss()), c;
    }
    function Uy() {
      for (; xe !== null; )
        Dd(xe);
    }
    function Dy(e, t) {
      var n = je;
      je |= 2;
      var a = jd(), l = Ud();
      Ye !== e || Te !== t ? (Ls = null, Hs = wt() + 500, fi(e, t)) : ri = Wa(e, t);
      e:
        do
          try {
            if (Ue !== 0 && xe !== null) {
              t = xe;
              var i = Kt;
              t:
                switch (Ue) {
                  case 1:
                    Ue = 0, Kt = null, hi(e, t, i, 1);
                    break;
                  case 2:
                  case 9:
                    if (Vf(i)) {
                      Ue = 0, Kt = null, Md(t);
                      break;
                    }
                    t = function() {
                      Ue !== 2 && Ue !== 9 || Ye !== e || (Ue = 7), Hn(e);
                    }, i.then(t, t);
                    break e;
                  case 3:
                    Ue = 7;
                    break e;
                  case 4:
                    Ue = 5;
                    break e;
                  case 7:
                    Vf(i) ? (Ue = 0, Kt = null, Md(t)) : (Ue = 0, Kt = null, hi(e, t, i, 7));
                    break;
                  case 5:
                    var c = null;
                    switch (xe.tag) {
                      case 26:
                        c = xe.memoizedState;
                      case 5:
                      case 27:
                        var y = xe;
                        if (c ? Sp(c) : y.stateNode.complete) {
                          Ue = 0, Kt = null;
                          var T = y.sibling;
                          if (T !== null)
                            xe = T;
                          else {
                            var D = y.return;
                            D !== null ? (xe = D, Gs(D)) : xe = null;
                          }
                          break t;
                        }
                    }
                    Ue = 0, Kt = null, hi(e, t, i, 5);
                    break;
                  case 6:
                    Ue = 0, Kt = null, hi(e, t, i, 6);
                    break;
                  case 8:
                    Io(), $e = 6;
                    break e;
                  default:
                    throw Error(o(462));
                }
            }
            My();
            break;
          } catch (Y) {
            Nd(e, Y);
          }
        while (true);
      return Pn = cl = null, L.H = a, L.A = l, je = n, xe !== null ? 0 : (Ye = null, Te = 0, ss(), $e);
    }
    function My() {
      for (; xe !== null && !_r(); )
        Dd(xe);
    }
    function Dd(e) {
      var t = ld(e.alternate, e, ra);
      e.memoizedProps = e.pendingProps, t === null ? Gs(e) : xe = t;
    }
    function Md(e) {
      var t = e, n = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = Ph(n, t, t.pendingProps, t.type, void 0, Te);
          break;
        case 11:
          t = Ph(n, t, t.pendingProps, t.type.render, t.ref, Te);
          break;
        case 5:
          mo(t);
        default:
          ud(n, t), t = xe = Uf(t, ra), t = ld(n, t, ra);
      }
      e.memoizedProps = e.pendingProps, t === null ? Gs(e) : xe = t;
    }
    function hi(e, t, n, a) {
      Pn = cl = null, mo(t), ti = null, $i = 0;
      var l = t.return;
      try {
        if (Ty(e, l, t, n, Te)) {
          $e = 1, Cs(e, un(n, e.current)), xe = null;
          return;
        }
      } catch (i) {
        if (l !== null)
          throw xe = l, i;
        $e = 1, Cs(e, un(n, e.current)), xe = null;
        return;
      }
      t.flags & 32768 ? (Ae || a === 1 ? e = true : ri || (Te & 536870912) !== 0 ? e = false : (Na = e = true, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Zt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Bd(t, e)) : Gs(t);
    }
    function Gs(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          Bd(t, Na);
          return;
        }
        e = t.return;
        var n = Oy(t.alternate, t, ra);
        if (n !== null) {
          xe = n;
          return;
        }
        if (t = t.sibling, t !== null) {
          xe = t;
          return;
        }
        xe = t = e;
      } while (t !== null);
      $e === 0 && ($e = 5);
    }
    function Bd(e, t) {
      do {
        var n = wy(e.alternate, e);
        if (n !== null) {
          n.flags &= 32767, xe = n;
          return;
        }
        if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
          xe = e;
          return;
        }
        xe = e = n;
      } while (e !== null);
      $e = 6, xe = null;
    }
    function qd(e, t, n, a, l, i, c, y, T) {
      e.cancelPendingCommit = null;
      do
        Qs();
      while (ht !== 0);
      if ((je & 6) !== 0)
        throw Error(o(327));
      if (t !== null) {
        if (t === e.current)
          throw Error(o(177));
        if (i = t.lanes | t.childLanes, i |= Xr, Rr(e, n, i, c, y, T), e === Ye && (xe = Ye = null, Te = 0), ci = t, Ua = e, oa = n, Wo = i, $o = l, Od = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Ly(ka, function() {
          return Gd(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
          a = L.T, L.T = null, l = W.p, W.p = 2, c = je, je |= 4;
          try {
            Ry(e, t, n);
          } finally {
            je = c, W.p = l, L.T = a;
          }
        }
        ht = 1, Hd(), Ld(), Yd();
      }
    }
    function Hd() {
      if (ht === 1) {
        ht = 0;
        var e = Ua, t = ci, n = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || n) {
          n = L.T, L.T = null;
          var a = W.p;
          W.p = 2;
          var l = je;
          je |= 4;
          try {
            vd(t, e);
            var i = hc, c = _f(e.containerInfo), y = i.focusedElem, T = i.selectionRange;
            if (c !== y && y && y.ownerDocument && Tf(y.ownerDocument.documentElement, y)) {
              if (T !== null && Br(y)) {
                var D = T.start, Y = T.end;
                if (Y === void 0 && (Y = D), "selectionStart" in y)
                  y.selectionStart = D, y.selectionEnd = Math.min(Y, y.value.length);
                else {
                  var Q = y.ownerDocument || document, M = Q && Q.defaultView || window;
                  if (M.getSelection) {
                    var H = M.getSelection(), I = y.textContent.length, oe = Math.min(T.start, I), Le = T.end === void 0 ? oe : Math.min(T.end, I);
                    !H.extend && oe > Le && (c = Le, Le = oe, oe = c);
                    var C = Ef(y, oe), A = Ef(y, Le);
                    if (C && A && (H.rangeCount !== 1 || H.anchorNode !== C.node || H.anchorOffset !== C.offset || H.focusNode !== A.node || H.focusOffset !== A.offset)) {
                      var U = Q.createRange();
                      U.setStart(C.node, C.offset), H.removeAllRanges(), oe > Le ? (H.addRange(U), H.extend(A.node, A.offset)) : (U.setEnd(A.node, A.offset), H.addRange(U));
                    }
                  }
                }
              }
              for (Q = [], H = y; H = H.parentNode; )
                H.nodeType === 1 && Q.push({ element: H, left: H.scrollLeft, top: H.scrollTop });
              for (typeof y.focus == "function" && y.focus(), y = 0; y < Q.length; y++) {
                var G = Q[y];
                G.element.scrollLeft = G.left, G.element.scrollTop = G.top;
              }
            }
            tr = !!fc, hc = fc = null;
          } finally {
            je = l, W.p = a, L.T = n;
          }
        }
        e.current = t, ht = 2;
      }
    }
    function Ld() {
      if (ht === 2) {
        ht = 0;
        var e = Ua, t = ci, n = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || n) {
          n = L.T, L.T = null;
          var a = W.p;
          W.p = 2;
          var l = je;
          je |= 4;
          try {
            dd(e, t.alternate, t);
          } finally {
            je = l, W.p = a, L.T = n;
          }
        }
        ht = 3;
      }
    }
    function Yd() {
      if (ht === 4 || ht === 3) {
        ht = 0, Du();
        var e = Ua, t = ci, n = oa, a = Od;
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? ht = 5 : (ht = 0, ci = Ua = null, Xd(e, e.pendingLanes));
        var l = e.pendingLanes;
        if (l === 0 && (ja = null), Ni(n), t = t.stateNode, Rt && typeof Rt.onCommitFiberRoot == "function")
          try {
            Rt.onCommitFiberRoot(Ka, t, void 0, (t.current.flags & 128) === 128);
          } catch (T) {
          }
        if (a !== null) {
          t = L.T, l = W.p, W.p = 2, L.T = null;
          try {
            for (var i = e.onRecoverableError, c = 0; c < a.length; c++) {
              var y = a[c];
              i(y.value, { componentStack: y.stack });
            }
          } finally {
            L.T = t, W.p = l;
          }
        }
        (oa & 3) !== 0 && Qs(), Hn(e), l = e.pendingLanes, (n & 261930) !== 0 && (l & 42) !== 0 ? e === Po ? pu++ : (pu = 0, Po = e) : pu = 0, mu(0);
      }
    }
    function Xd(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Fi(t)));
    }
    function Qs() {
      return Hd(), Ld(), Yd(), Gd();
    }
    function Gd() {
      if (ht !== 5)
        return false;
      var e = Ua, t = Wo;
      Wo = 0;
      var n = Ni(oa), a = L.T, l = W.p;
      try {
        W.p = 32 > n ? 32 : n, L.T = null, n = $o, $o = null;
        var i = Ua, c = oa;
        if (ht = 0, ci = Ua = null, oa = 0, (je & 6) !== 0)
          throw Error(o(331));
        var y = je;
        if (je |= 4, Td(i.current), Sd(i, i.current, c, n), je = y, mu(0, false), Rt && typeof Rt.onPostCommitFiberRoot == "function")
          try {
            Rt.onPostCommitFiberRoot(Ka, i);
          } catch (T) {
          }
        return true;
      } finally {
        W.p = l, L.T = a, Xd(e, t);
      }
    }
    function Qd(e, t, n) {
      t = un(n, t), t = No(e.stateNode, t, 2), e = Oa(e, t, 2), e !== null && (Xn(e, 2), Hn(e));
    }
    function De(e, t, n) {
      if (e.tag === 3)
        Qd(e, e, n);
      else
        for (; t !== null; ) {
          if (t.tag === 3) {
            Qd(t, e, n);
            break;
          } else if (t.tag === 1) {
            var a = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (ja === null || !ja.has(a))) {
              e = un(n, e), n = Vh(2), a = Oa(t, n, 2), a !== null && (Zh(n, a, t, e), Xn(a, 2), Hn(a));
              break;
            }
          }
          t = t.return;
        }
    }
    function tc(e, t, n) {
      var a = e.pingCache;
      if (a === null) {
        a = e.pingCache = new zy();
        var l = /* @__PURE__ */ new Set();
        a.set(t, l);
      } else
        l = a.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), a.set(t, l));
      l.has(n) || (Ko = true, l.add(n), e = By.bind(null, e, t, n), t.then(e, e));
    }
    function By(e, t, n) {
      var a = e.pingCache;
      a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Ye === e && (Te & n) === n && ($e === 4 || $e === 3 && (Te & 62914560) === Te && 300 > wt() - qs ? (je & 2) === 0 && fi(e, 0) : Jo |= n, oi === Te && (oi = 0)), Hn(e);
    }
    function Vd(e, t) {
      t === 0 && (t = Hu()), e = sl(e, t), e !== null && (Xn(e, t), Hn(e));
    }
    function qy(e) {
      var t = e.memoizedState, n = 0;
      t !== null && (n = t.retryLane), Vd(e, n);
    }
    function Hy(e, t) {
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
      a !== null && a.delete(t), Vd(e, n);
    }
    function Ly(e, t) {
      return Oi(e, t);
    }
    var Vs = null, di = null, nc = false, Zs = false, ac = false, Ma = 0;
    function Hn(e) {
      e !== di && e.next === null && (di === null ? Vs = di = e : di = di.next = e), Zs = true, nc || (nc = true, Xy());
    }
    function mu(e, t) {
      if (!ac && Zs) {
        ac = true;
        do
          for (var n = false, a = Vs; a !== null; ) {
            if (e !== 0) {
              var l = a.pendingLanes;
              if (l === 0)
                var i = 0;
              else {
                var c = a.suspendedLanes, y = a.pingedLanes;
                i = (1 << 31 - Et(42 | e) + 1) - 1, i &= l & ~(c & ~y), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
              }
              i !== 0 && (n = true, Jd(a, i));
            } else
              i = Te, i = Rl(a, a === Ye ? i : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (i & 3) === 0 || Wa(a, i) || (n = true, Jd(a, i));
            a = a.next;
          }
        while (n);
        ac = false;
      }
    }
    function Yy() {
      Zd();
    }
    function Zd() {
      Zs = nc = false;
      var e = 0;
      Ma !== 0 && $y() && (e = Ma);
      for (var t = wt(), n = null, a = Vs; a !== null; ) {
        var l = a.next, i = kd(a, t);
        i === 0 ? (a.next = null, n === null ? Vs = l : n.next = l, l === null && (di = n)) : (n = a, (e !== 0 || (i & 3) !== 0) && (Zs = true)), a = l;
      }
      ht !== 0 && ht !== 5 || mu(e), Ma !== 0 && (Ma = 0);
    }
    function kd(e, t) {
      for (var n = e.suspendedLanes, a = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
        var c = 31 - Et(i), y = 1 << c, T = l[c];
        T === -1 ? ((y & n) === 0 || (y & a) !== 0) && (l[c] = wr(y, t)) : T <= t && (e.expiredLanes |= y), i &= ~y;
      }
      if (t = Ye, n = Te, n = Rl(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a = e.callbackNode, n === 0 || e === t && (Ue === 2 || Ue === 9) || e.cancelPendingCommit !== null)
        return a !== null && a !== null && wi(a), e.callbackNode = null, e.callbackPriority = 0;
      if ((n & 3) === 0 || Wa(e, n)) {
        if (t = n & -n, t === e.callbackPriority)
          return t;
        switch (a !== null && wi(a), Ni(n)) {
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
        return a = Kd.bind(null, e), n = Oi(n, a), e.callbackPriority = t, e.callbackNode = n, t;
      }
      return a !== null && a !== null && wi(a), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function Kd(e, t) {
      if (ht !== 0 && ht !== 5)
        return e.callbackNode = null, e.callbackPriority = 0, null;
      var n = e.callbackNode;
      if (Qs() && e.callbackNode !== n)
        return null;
      var a = Te;
      return a = Rl(e, e === Ye ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a === 0 ? null : (Rd(e, a, t), kd(e, wt()), e.callbackNode != null && e.callbackNode === n ? Kd.bind(null, e) : null);
    }
    function Jd(e, t) {
      if (Qs())
        return null;
      Rd(e, t, true);
    }
    function Xy() {
      Iy(function() {
        (je & 6) !== 0 ? Oi(he, Yy) : Zd();
      });
    }
    function lc() {
      if (Ma === 0) {
        var e = Pl;
        e === 0 && (e = Ja, Ja <<= 1, (Ja & 261888) === 0 && (Ja = 256)), Ma = e;
      }
      return Ma;
    }
    function Fd(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : jl("" + e);
    }
    function Wd(e, t) {
      var n = t.ownerDocument.createElement("input");
      return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
    }
    function Gy(e, t, n, a, l) {
      if (t === "submit" && n && n.stateNode === l) {
        var i = Fd((l[dt] || null).action), c = a.submitter;
        c && (t = (t = c[dt] || null) ? Fd(t.formAction) : c.getAttribute("formAction"), t !== null && (i = t, c = null));
        var y = new nl("action", "action", null, a, l);
        e.push({ event: y, listeners: [{ instance: null, listener: function() {
          if (a.defaultPrevented) {
            if (Ma !== 0) {
              var T = c ? Wd(l, c) : new FormData(l);
              _o(n, { pending: true, data: T, method: l.method, action: i }, null, T);
            }
          } else
            typeof i == "function" && (y.preventDefault(), T = c ? Wd(l, c) : new FormData(l), _o(n, { pending: true, data: T, method: l.method, action: i }, i, T));
        }, currentTarget: l }] });
      }
    }
    for (var ic = 0; ic < Yr.length; ic++) {
      var uc = Yr[ic], Qy = uc.toLowerCase(), Vy = uc[0].toUpperCase() + uc.slice(1);
      gn(Qy, "on" + Vy);
    }
    gn(wf, "onAnimationEnd"), gn(Rf, "onAnimationIteration"), gn(Cf, "onAnimationStart"), gn("dblclick", "onDoubleClick"), gn("focusin", "onFocus"), gn("focusout", "onBlur"), gn(uy, "onTransitionRun"), gn(sy, "onTransitionStart"), gn(ry, "onTransitionCancel"), gn(Nf, "onTransitionEnd"), Gt("onMouseEnter", ["mouseout", "mouseover"]), Gt("onMouseLeave", ["mouseout", "mouseover"]), Gt("onPointerEnter", ["pointerout", "pointerover"]), Gt("onPointerLeave", ["pointerout", "pointerover"]), zn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), zn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), zn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), zn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), zn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), zn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var yu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Zy = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yu));
    function $d(e, t) {
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
    function Ee(e, t) {
      var n = t[zi];
      n === void 0 && (n = t[zi] = /* @__PURE__ */ new Set());
      var a = e + "__bubble";
      n.has(a) || (Pd(t, e, 2, false), n.add(a));
    }
    function sc(e, t, n) {
      var a = 0;
      t && (a |= 4), Pd(n, e, a, t);
    }
    var ks = "_reactListening" + Math.random().toString(36).slice(2);
    function rc(e) {
      if (!e[ks]) {
        e[ks] = true, zt.forEach(function(n) {
          n !== "selectionchange" && (Zy.has(n) || sc(n, false, e), sc(n, true, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[ks] || (t[ks] = true, sc("selectionchange", false, t));
      }
    }
    function Pd(e, t, n, a) {
      switch (wp(t)) {
        case 2:
          var l = b0;
          break;
        case 8:
          l = S0;
          break;
        default:
          l = Tc;
      }
      n = l.bind(null, t, n, e), l = void 0, !Yi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = true), a ? l !== void 0 ? e.addEventListener(t, n, { capture: true, passive: l }) : e.addEventListener(t, n, true) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, false);
    }
    function oc(e, t, n, a, l) {
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
        var D = i, Y = Ul(n), Q = [];
        e: {
          var M = zf.get(e);
          if (M !== void 0) {
            var H = nl, I = e;
            switch (e) {
              case "keypress":
                if (ql(n) === 0)
                  break e;
              case "keydown":
              case "keyup":
                H = es;
                break;
              case "focusin":
                I = "focus", H = K;
                break;
              case "focusout":
                I = "blur", H = K;
                break;
              case "beforeblur":
              case "afterblur":
                H = K;
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
                H = z;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                H = k;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                H = ts;
                break;
              case wf:
              case Rf:
              case Cf:
                H = fe;
                break;
              case Nf:
                H = Xl;
                break;
              case "scroll":
              case "scrollend":
                H = f;
                break;
              case "wheel":
                H = Jn;
                break;
              case "copy":
              case "cut":
              case "paste":
                H = me;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                H = Ll;
                break;
              case "toggle":
              case "beforetoggle":
                H = nn;
            }
            var oe = (t & 4) !== 0, Le = !oe && (e === "scroll" || e === "scrollend"), C = oe ? M !== null ? M + "Capture" : null : M;
            oe = [];
            for (var A = D, U; A !== null; ) {
              var G = A;
              if (U = G.stateNode, G = G.tag, G !== 5 && G !== 26 && G !== 27 || U === null || C === null || (G = jn(A, C), G != null && oe.push(gu(A, G, U))), Le)
                break;
              A = A.return;
            }
            0 < oe.length && (M = new H(M, I, null, n, Y), Q.push({ event: M, listeners: oe }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (M = e === "mouseover" || e === "pointerover", H = e === "mouseout" || e === "pointerout", M && n !== tl && (I = n.relatedTarget || n.fromElement) && (pa(I) || I[Rn]))
              break e;
            if ((H || M) && (M = Y.window === Y ? Y : (M = Y.ownerDocument) ? M.defaultView || M.parentWindow : window, H ? (I = n.relatedTarget || n.toElement, H = D, I = I ? pa(I) : null, I !== null && (Le = b(I), oe = I.tag, I !== Le || oe !== 5 && oe !== 27 && oe !== 6) && (I = null)) : (H = null, I = D), H !== I)) {
              if (oe = z, G = "onMouseLeave", C = "onMouseEnter", A = "mouse", (e === "pointerout" || e === "pointerover") && (oe = Ll, G = "onPointerLeave", C = "onPointerEnter", A = "pointer"), Le = H == null ? M : Pa(H), U = I == null ? M : Pa(I), M = new oe(G, A + "leave", H, n, Y), M.target = Le, M.relatedTarget = U, G = null, pa(Y) === D && (oe = new oe(C, A + "enter", I, n, Y), oe.target = U, oe.relatedTarget = Le, G = oe), Le = G, H && I)
                t: {
                  for (oe = ky, C = H, A = I, U = 0, G = C; G; G = oe(G))
                    U++;
                  G = 0;
                  for (var se = A; se; se = oe(se))
                    G++;
                  for (; 0 < U - G; )
                    C = oe(C), U--;
                  for (; 0 < G - U; )
                    A = oe(A), G--;
                  for (; U--; ) {
                    if (C === A || A !== null && C === A.alternate) {
                      oe = C;
                      break t;
                    }
                    C = oe(C), A = oe(A);
                  }
                  oe = null;
                }
              else
                oe = null;
              H !== null && Id(Q, M, H, oe, false), I !== null && Le !== null && Id(Q, Le, I, oe, true);
            }
          }
          e: {
            if (M = D ? Pa(D) : window, H = M.nodeName && M.nodeName.toLowerCase(), H === "select" || H === "input" && M.type === "file")
              var Re = yf;
            else if (pf(M))
              if (gf)
                Re = ay;
              else {
                Re = ty;
                var ne = ey;
              }
            else
              H = M.nodeName, !H || H.toLowerCase() !== "input" || M.type !== "checkbox" && M.type !== "radio" ? D && zl(D.elementType) && (Re = yf) : Re = ny;
            if (Re && (Re = Re(e, D))) {
              mf(Q, Re, n, Y);
              break e;
            }
            ne && ne(e, M, D), e === "focusout" && D && M.type === "number" && D.memoizedProps.value != null && Bi(M, "number", M.value);
          }
          switch (ne = D ? Pa(D) : window, e) {
            case "focusin":
              (pf(ne) || ne.contentEditable === "true") && (Vl = ne, qr = D, ki = null);
              break;
            case "focusout":
              ki = qr = Vl = null;
              break;
            case "mousedown":
              Hr = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Hr = false, Af(Q, n, Y);
              break;
            case "selectionchange":
              if (iy)
                break;
            case "keydown":
            case "keyup":
              Af(Q, n, Y);
          }
          var be;
          if (an)
            e: {
              switch (e) {
                case "compositionstart":
                  var _e = "onCompositionStart";
                  break e;
                case "compositionend":
                  _e = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  _e = "onCompositionUpdate";
                  break e;
              }
              _e = void 0;
            }
          else
            Ql ? ll(e, n) && (_e = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_e = "onCompositionStart");
          _e && (yn && n.locale !== "ko" && (Ql || _e !== "onCompositionStart" ? _e === "onCompositionEnd" && Ql && (be = Bl()) : (ft = Y, va = "value" in ft ? ft.value : ft.textContent, Ql = true)), ne = Ks(D, _e), 0 < ne.length && (_e = new P(_e, e, null, n, Y), Q.push({ event: _e, listeners: ne }), be ? _e.data = be : (be = Gi(n), be !== null && (_e.data = be)))), (be = Ur ? Wm(e, n) : $m(e, n)) && (_e = Ks(D, "onBeforeInput"), 0 < _e.length && (ne = new P("onBeforeInput", "beforeinput", null, n, Y), Q.push({ event: ne, listeners: _e }), ne.data = be)), Gy(Q, e, D, n, Y);
        }
        $d(Q, t);
      });
    }
    function gu(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function Ks(e, t) {
      for (var n = t + "Capture", a = []; e !== null; ) {
        var l = e, i = l.stateNode;
        if (l = l.tag, l !== 5 && l !== 26 && l !== 27 || i === null || (l = jn(e, n), l != null && a.unshift(gu(e, l, i)), l = jn(e, t), l != null && a.push(gu(e, l, i))), e.tag === 3)
          return a;
        e = e.return;
      }
      return [];
    }
    function ky(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Id(e, t, n, a, l) {
      for (var i = t._reactName, c = []; n !== null && n !== a; ) {
        var y = n, T = y.alternate, D = y.stateNode;
        if (y = y.tag, T !== null && T === a)
          break;
        y !== 5 && y !== 26 && y !== 27 || D === null || (T = D, l ? (D = jn(n, i), D != null && c.unshift(gu(n, D, T))) : l || (D = jn(n, i), D != null && c.push(gu(n, D, T)))), n = n.return;
      }
      c.length !== 0 && e.push({ event: t, listeners: c });
    }
    var Ky = /\r\n?/g, Jy = /\u0000|\uFFFD/g;
    function ep(e) {
      return (typeof e == "string" ? e : "" + e).replace(Ky, `
`).replace(Jy, "");
    }
    function tp(e, t) {
      return t = ep(t), ep(e) === t;
    }
    function He(e, t, n, a, l, i) {
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
          a = jl("" + a), e.setAttribute(n, a);
          break;
        case "action":
        case "formAction":
          if (typeof a == "function") {
            e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
            break;
          } else
            typeof i == "function" && (n === "formAction" ? (t !== "input" && He(e, t, "name", l.name, l, null), He(e, t, "formEncType", l.formEncType, l, null), He(e, t, "formMethod", l.formMethod, l, null), He(e, t, "formTarget", l.formTarget, l, null)) : (He(e, t, "encType", l.encType, l, null), He(e, t, "method", l.method, l, null), He(e, t, "target", l.target, l, null)));
          if (a == null || typeof a == "symbol" || typeof a == "boolean") {
            e.removeAttribute(n);
            break;
          }
          a = jl("" + a), e.setAttribute(n, a);
          break;
        case "onClick":
          a != null && (e.onclick = Pt);
          break;
        case "onScroll":
          a != null && Ee("scroll", e);
          break;
        case "onScrollEnd":
          a != null && Ee("scrollend", e);
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
          n = jl("" + a), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
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
          Ee("beforetoggle", e), Ee("toggle", e), Gn(e, "popover", a);
          break;
        case "xlinkActuate":
          $t(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
          break;
        case "xlinkArcrole":
          $t(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
          break;
        case "xlinkRole":
          $t(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
          break;
        case "xlinkShow":
          $t(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
          break;
        case "xlinkTitle":
          $t(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
          break;
        case "xlinkType":
          $t(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
          break;
        case "xmlBase":
          $t(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
          break;
        case "xmlLang":
          $t(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
          break;
        case "xmlSpace":
          $t(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
          break;
        case "is":
          Gn(e, "is", a);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Pu.get(n) || n, Gn(e, n, a));
      }
    }
    function cc(e, t, n, a, l, i) {
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
          a != null && Ee("scroll", e);
          break;
        case "onScrollEnd":
          a != null && Ee("scrollend", e);
          break;
        case "onClick":
          a != null && (e.onclick = Pt);
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
          if (!Cl.hasOwnProperty(n))
            e: {
              if (n[0] === "o" && n[1] === "n" && (l = n.endsWith("Capture"), t = n.slice(2, l ? n.length - 7 : void 0), i = e[dt] || null, i = i != null ? i[n] : null, typeof i == "function" && e.removeEventListener(t, i, l), typeof a == "function")) {
                typeof i != "function" && i !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, a, l);
                break e;
              }
              n in e ? e[n] = a : a === true ? e.setAttribute(n, "") : Gn(e, n, a);
            }
      }
    }
    function xt(e, t, n) {
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
          Ee("error", e), Ee("load", e);
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
                    He(e, t, i, c, n, null);
                }
            }
          l && He(e, t, "srcSet", n.srcSet, n, null), a && He(e, t, "src", n.src, n, null);
          return;
        case "input":
          Ee("invalid", e);
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
                    He(e, t, a, Y, n, null);
                }
            }
          Fu(e, i, y, T, D, c, l, false);
          return;
        case "select":
          Ee("invalid", e), a = c = i = null;
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
                  He(e, t, l, y, n, null);
              }
          t = i, n = c, e.multiple = !!a, t != null ? ya(e, !!a, t, false) : n != null && ya(e, !!a, n, true);
          return;
        case "textarea":
          Ee("invalid", e), i = l = a = null;
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
                  He(e, t, c, y, n, null);
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
                  He(e, t, T, a, n, null);
              }
          return;
        case "dialog":
          Ee("beforetoggle", e), Ee("toggle", e), Ee("cancel", e), Ee("close", e);
          break;
        case "iframe":
        case "object":
          Ee("load", e);
          break;
        case "video":
        case "audio":
          for (a = 0; a < yu.length; a++)
            Ee(yu[a], e);
          break;
        case "image":
          Ee("error", e), Ee("load", e);
          break;
        case "details":
          Ee("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          Ee("error", e), Ee("load", e);
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
                  He(e, t, D, a, n, null);
              }
          return;
        default:
          if (zl(t)) {
            for (Y in n)
              n.hasOwnProperty(Y) && (a = n[Y], a !== void 0 && cc(e, t, Y, a, n, void 0));
            return;
          }
      }
      for (y in n)
        n.hasOwnProperty(y) && (a = n[y], a != null && He(e, t, y, a, n, null));
    }
    function Fy(e, t, n, a) {
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
          for (H in n) {
            var Q = n[H];
            if (n.hasOwnProperty(H) && Q != null)
              switch (H) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  T = Q;
                default:
                  a.hasOwnProperty(H) || He(e, t, H, null, a, Q);
              }
          }
          for (var M in a) {
            var H = a[M];
            if (Q = n[M], a.hasOwnProperty(M) && (H != null || Q != null))
              switch (M) {
                case "type":
                  i = H;
                  break;
                case "name":
                  l = H;
                  break;
                case "checked":
                  D = H;
                  break;
                case "defaultChecked":
                  Y = H;
                  break;
                case "value":
                  c = H;
                  break;
                case "defaultValue":
                  y = H;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (H != null)
                    throw Error(o(137, t));
                  break;
                default:
                  H !== Q && He(e, t, M, H, a, Q);
              }
          }
          Mi(e, c, y, T, D, Y, i, l);
          return;
        case "select":
          H = c = y = M = null;
          for (i in n)
            if (T = n[i], n.hasOwnProperty(i) && T != null)
              switch (i) {
                case "value":
                  break;
                case "multiple":
                  H = T;
                default:
                  a.hasOwnProperty(i) || He(e, t, i, null, a, T);
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
                  i !== T && He(e, t, l, i, a, T);
              }
          t = y, n = c, a = H, M != null ? ya(e, !!n, M, false) : !!a != !!n && (t != null ? ya(e, !!n, t, true) : ya(e, !!n, n ? [] : "", false));
          return;
        case "textarea":
          H = M = null;
          for (y in n)
            if (l = n[y], n.hasOwnProperty(y) && l != null && !a.hasOwnProperty(y))
              switch (y) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  He(e, t, y, null, a, l);
              }
          for (c in a)
            if (l = a[c], i = n[c], a.hasOwnProperty(c) && (l != null || i != null))
              switch (c) {
                case "value":
                  M = l;
                  break;
                case "defaultValue":
                  H = l;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (l != null)
                    throw Error(o(91));
                  break;
                default:
                  l !== i && He(e, t, c, l, a, i);
              }
          Wu(e, M, H);
          return;
        case "option":
          for (var I in n)
            if (M = n[I], n.hasOwnProperty(I) && M != null && !a.hasOwnProperty(I))
              switch (I) {
                case "selected":
                  e.selected = false;
                  break;
                default:
                  He(e, t, I, null, a, M);
              }
          for (T in a)
            if (M = a[T], H = n[T], a.hasOwnProperty(T) && M !== H && (M != null || H != null))
              switch (T) {
                case "selected":
                  e.selected = M && typeof M != "function" && typeof M != "symbol";
                  break;
                default:
                  He(e, t, T, M, a, H);
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
          for (var oe in n)
            M = n[oe], n.hasOwnProperty(oe) && M != null && !a.hasOwnProperty(oe) && He(e, t, oe, null, a, M);
          for (D in a)
            if (M = a[D], H = n[D], a.hasOwnProperty(D) && M !== H && (M != null || H != null))
              switch (D) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (M != null)
                    throw Error(o(137, t));
                  break;
                default:
                  He(e, t, D, M, a, H);
              }
          return;
        default:
          if (zl(t)) {
            for (var Le in n)
              M = n[Le], n.hasOwnProperty(Le) && M !== void 0 && !a.hasOwnProperty(Le) && cc(e, t, Le, void 0, a, M);
            for (Y in a)
              M = a[Y], H = n[Y], !a.hasOwnProperty(Y) || M === H || M === void 0 && H === void 0 || cc(e, t, Y, M, a, H);
            return;
          }
      }
      for (var C in n)
        M = n[C], n.hasOwnProperty(C) && M != null && !a.hasOwnProperty(C) && He(e, t, C, null, a, M);
      for (Q in a)
        M = a[Q], H = n[Q], !a.hasOwnProperty(Q) || M === H || M == null && H == null || He(e, t, Q, M, a, H);
    }
    function np(e) {
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
    function Wy() {
      if (typeof performance.getEntriesByType == "function") {
        for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
          var l = n[a], i = l.transferSize, c = l.initiatorType, y = l.duration;
          if (i && y && np(c)) {
            for (c = 0, y = l.responseEnd, a += 1; a < n.length; a++) {
              var T = n[a], D = T.startTime;
              if (D > y)
                break;
              var Y = T.transferSize, Q = T.initiatorType;
              Y && np(Q) && (T = T.responseEnd, c += Y * (T < y ? 1 : (y - D) / (T - D)));
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
    var fc = null, hc = null;
    function Js(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function ap(e) {
      switch (e) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function lp(e, t) {
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
    function dc(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    var pc = null;
    function $y() {
      var e = window.event;
      return e && e.type === "popstate" ? e === pc ? false : (pc = e, true) : (pc = null, false);
    }
    var ip = typeof setTimeout == "function" ? setTimeout : void 0, Py = typeof clearTimeout == "function" ? clearTimeout : void 0, up = typeof Promise == "function" ? Promise : void 0, Iy = typeof queueMicrotask == "function" ? queueMicrotask : typeof up != "undefined" ? function(e) {
      return up.resolve(null).then(e).catch(e0);
    } : ip;
    function e0(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Ba(e) {
      return e === "head";
    }
    function sp(e, t) {
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
              i[Cn] || y === "SCRIPT" || y === "STYLE" || y === "LINK" && i.rel.toLowerCase() === "stylesheet" || n.removeChild(i), i = c;
            }
          } else
            n === "body" && vu(e.ownerDocument.body);
        n = l;
      } while (n);
      gi(t);
    }
    function rp(e, t) {
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
    function mc(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var n = t;
        switch (t = t.nextSibling, n.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            mc(n), ji(n);
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
    function t0(e, t, n, a) {
      for (; e.nodeType === 1; ) {
        var l = n;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
            break;
        } else if (a) {
          if (!e[Cn])
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
        if (e = fn(e.nextSibling), e === null)
          break;
      }
      return null;
    }
    function n0(e, t, n) {
      if (t === "")
        return null;
      for (; e.nodeType !== 3; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = fn(e.nextSibling), e === null))
          return null;
      return e;
    }
    function op(e, t) {
      for (; e.nodeType !== 8; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = fn(e.nextSibling), e === null))
          return null;
      return e;
    }
    function yc(e) {
      return e.data === "$?" || e.data === "$~";
    }
    function gc(e) {
      return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
    }
    function a0(e, t) {
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
    function fn(e) {
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
    var vc = null;
    function cp(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$" || n === "/&") {
            if (t === 0)
              return fn(e.nextSibling);
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function fp(e) {
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
    function hp(e, t, n) {
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
      ji(e);
    }
    var hn = /* @__PURE__ */ new Map(), dp = /* @__PURE__ */ new Set();
    function Fs(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    var ca = W.d;
    W.d = { f: l0, r: i0, D: u0, C: s0, L: r0, m: o0, X: f0, S: c0, M: h0 };
    function l0() {
      var e = ca.f(), t = Ys();
      return e || t;
    }
    function i0(e) {
      var t = Nn(e);
      t !== null && t.tag === 5 && t.type === "form" ? Nh(t) : ca.r(e);
    }
    var pi = typeof document == "undefined" ? null : document;
    function pp(e, t, n) {
      var a = pi;
      if (a && typeof t == "string" && t) {
        var l = Ct(t);
        l = 'link[rel="' + e + '"][href="' + l + '"]', typeof n == "string" && (l += '[crossorigin="' + n + '"]'), dp.has(l) || (dp.add(l), e = { rel: e, crossOrigin: n, href: t }, a.querySelector(l) === null && (t = a.createElement("link"), xt(t, "link", e), Je(t), a.head.appendChild(t)));
      }
    }
    function u0(e) {
      ca.D(e), pp("dns-prefetch", e, null);
    }
    function s0(e, t) {
      ca.C(e, t), pp("preconnect", e, t);
    }
    function r0(e, t, n) {
      ca.L(e, t, n);
      var a = pi;
      if (a && e && t) {
        var l = 'link[rel="preload"][as="' + Ct(t) + '"]';
        t === "image" && n && n.imageSrcSet ? (l += '[imagesrcset="' + Ct(n.imageSrcSet) + '"]', typeof n.imageSizes == "string" && (l += '[imagesizes="' + Ct(n.imageSizes) + '"]')) : l += '[href="' + Ct(e) + '"]';
        var i = l;
        switch (t) {
          case "style":
            i = mi(e);
            break;
          case "script":
            i = yi(e);
        }
        hn.has(i) || (e = R({ rel: "preload", href: t === "image" && n && n.imageSrcSet ? void 0 : e, as: t }, n), hn.set(i, e), a.querySelector(l) !== null || t === "style" && a.querySelector(bu(i)) || t === "script" && a.querySelector(Su(i)) || (t = a.createElement("link"), xt(t, "link", e), Je(t), a.head.appendChild(t)));
      }
    }
    function o0(e, t) {
      ca.m(e, t);
      var n = pi;
      if (n && e) {
        var a = t && typeof t.as == "string" ? t.as : "script", l = 'link[rel="modulepreload"][as="' + Ct(a) + '"][href="' + Ct(e) + '"]', i = l;
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            i = yi(e);
        }
        if (!hn.has(i) && (e = R({ rel: "modulepreload", href: e }, t), hn.set(i, e), n.querySelector(l) === null)) {
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
          a = n.createElement("link"), xt(a, "link", e), Je(a), n.head.appendChild(a);
        }
      }
    }
    function c0(e, t, n) {
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
            e = R({ rel: "stylesheet", href: e, "data-precedence": t }, n), (n = hn.get(i)) && bc(e, n);
            var T = c = a.createElement("link");
            Je(T), xt(T, "link", e), T._p = new Promise(function(D, Y) {
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
    function f0(e, t) {
      ca.X(e, t);
      var n = pi;
      if (n && e) {
        var a = ma(n).hoistableScripts, l = yi(e), i = a.get(l);
        i || (i = n.querySelector(Su(l)), i || (e = R({ src: e, async: true }, t), (t = hn.get(l)) && Sc(e, t), i = n.createElement("script"), Je(i), xt(i, "link", e), n.head.appendChild(i)), i = { type: "script", instance: i, count: 1, state: null }, a.set(l, i));
      }
    }
    function h0(e, t) {
      ca.M(e, t);
      var n = pi;
      if (n && e) {
        var a = ma(n).hoistableScripts, l = yi(e), i = a.get(l);
        i || (i = n.querySelector(Su(l)), i || (e = R({ src: e, async: true, type: "module" }, t), (t = hn.get(l)) && Sc(e, t), i = n.createElement("script"), Je(i), xt(i, "link", e), n.head.appendChild(i)), i = { type: "script", instance: i, count: 1, state: null }, a.set(l, i));
      }
    }
    function mp(e, t, n, a) {
      var l = (l = Se.current) ? Fs(l) : null;
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
            if (c || (l = l.ownerDocument || l, c = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, i.set(e, c), (i = l.querySelector(bu(e))) && !i._p && (c.instance = i, c.state.loading = 5), hn.has(e) || (n = { rel: "preload", as: "style", href: n.href, crossOrigin: n.crossOrigin, integrity: n.integrity, media: n.media, hrefLang: n.hrefLang, referrerPolicy: n.referrerPolicy }, hn.set(e, n), i || d0(l, e, n, c.state))), t && a === null)
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
      return 'href="' + Ct(e) + '"';
    }
    function bu(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function yp(e) {
      return R({}, e, { "data-precedence": e.precedence, precedence: null });
    }
    function d0(e, t, n, a) {
      e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
        return a.loading |= 1;
      }), t.addEventListener("error", function() {
        return a.loading |= 2;
      }), xt(t, "link", n), Je(t), e.head.appendChild(t));
    }
    function yi(e) {
      return '[src="' + Ct(e) + '"]';
    }
    function Su(e) {
      return "script[async]" + e;
    }
    function gp(e, t, n) {
      if (t.count++, t.instance === null)
        switch (t.type) {
          case "style":
            var a = e.querySelector('style[data-href~="' + Ct(n.href) + '"]');
            if (a)
              return t.instance = a, Je(a), a;
            var l = R({}, n, { "data-href": n.href, "data-precedence": n.precedence, href: null, precedence: null });
            return a = (e.ownerDocument || e).createElement("style"), Je(a), xt(a, "style", l), Ws(a, n.precedence, e), t.instance = a;
          case "stylesheet":
            l = mi(n.href);
            var i = e.querySelector(bu(l));
            if (i)
              return t.state.loading |= 4, t.instance = i, Je(i), i;
            a = yp(n), (l = hn.get(l)) && bc(a, l), i = (e.ownerDocument || e).createElement("link"), Je(i);
            var c = i;
            return c._p = new Promise(function(y, T) {
              c.onload = y, c.onerror = T;
            }), xt(i, "link", a), t.state.loading |= 4, Ws(i, n.precedence, e), t.instance = i;
          case "script":
            return i = yi(n.src), (l = e.querySelector(Su(i))) ? (t.instance = l, Je(l), l) : (a = n, (l = hn.get(i)) && (a = R({}, n), Sc(a, l)), e = e.ownerDocument || e, l = e.createElement("script"), Je(l), xt(l, "link", a), e.head.appendChild(l), t.instance = l);
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
    function bc(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function Sc(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    var $s = null;
    function vp(e, t, n) {
      if ($s === null) {
        var a = /* @__PURE__ */ new Map(), l = $s = /* @__PURE__ */ new Map();
        l.set(n, a);
      } else
        l = $s, a = l.get(n), a || (a = /* @__PURE__ */ new Map(), l.set(n, a));
      if (a.has(e))
        return a;
      for (a.set(e, null), n = n.getElementsByTagName(e), l = 0; l < n.length; l++) {
        var i = n[l];
        if (!(i[Cn] || i[ct] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
          var c = i.getAttribute(t) || "";
          c = e + c;
          var y = a.get(c);
          y ? y.push(i) : a.set(c, [i]);
        }
      }
      return a;
    }
    function bp(e, t, n) {
      e = e.ownerDocument || e, e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null);
    }
    function p0(e, t, n) {
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
    function Sp(e) {
      return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
    }
    function m0(e, t, n, a) {
      if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== false) && (n.state.loading & 4) === 0) {
        if (n.instance === null) {
          var l = mi(a.href), i = t.querySelector(bu(l));
          if (i) {
            t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Ps.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = i, Je(i);
            return;
          }
          i = t.ownerDocument || t, a = yp(a), (l = hn.get(l)) && bc(a, l), i = i.createElement("link"), Je(i);
          var c = i;
          c._p = new Promise(function(y, T) {
            c.onload = y, c.onerror = T;
          }), xt(i, "link", a), n.instance = i;
        }
        e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Ps.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
      }
    }
    var xc = 0;
    function y0(e, t) {
      return e.stylesheets && e.count === 0 && er(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
        var a = setTimeout(function() {
          if (e.stylesheets && er(e, e.stylesheets), e.unsuspend) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        }, 6e4 + t);
        0 < e.imgBytes && xc === 0 && (xc = 62500 * Wy());
        var l = setTimeout(function() {
          if (e.waitingForImages = false, e.count === 0 && (e.stylesheets && er(e, e.stylesheets), e.unsuspend)) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        }, (e.imgBytes > xc ? 50 : 800) + t);
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
      e.stylesheets = null, e.unsuspend !== null && (e.count++, Is = /* @__PURE__ */ new Map(), t.forEach(g0, e), Is = null, Ps.call(e));
    }
    function g0(e, t) {
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
    var xu = { $$typeof: ae, Provider: null, Consumer: null, _currentValue: ue, _currentValue2: ue, _threadCount: 0 };
    function v0(e, t, n, a, l, i, c, y, T) {
      this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = $a(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = $a(0), this.hiddenUpdates = $a(null), this.identifierPrefix = a, this.onUncaughtError = l, this.onCaughtError = i, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = T, this.incompleteTransitions = /* @__PURE__ */ new Map();
    }
    function xp(e, t, n, a, l, i, c, y, T, D, Y, Q) {
      return e = new v0(e, t, n, c, T, D, Y, Q, y), t = 1, i === true && (t |= 24), i = Vt(3, null, null, t), e.current = i, i.stateNode = e, t = Ir(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = { element: a, isDehydrated: n, cache: t }, ao(i), e;
    }
    function Ep(e) {
      return e ? (e = Kl, e) : Kl;
    }
    function Tp(e, t, n, a, l, i) {
      l = Ep(l), a.context === null ? a.context = l : a.pendingContext = l, a = Aa(t), a.payload = { element: n }, i = i === void 0 ? null : i, i !== null && (a.callback = i), n = Oa(e, a, t), n !== null && (qt(n, e, t), Ii(n, e, t));
    }
    function _p(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function Ec(e, t) {
      _p(e, t), (e = e.alternate) && _p(e, t);
    }
    function Ap(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = sl(e, 67108864);
        t !== null && qt(t, e, 67108864), Ec(e, 67108864);
      }
    }
    function Op(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = Ft();
        t = at(t);
        var n = sl(e, t);
        n !== null && qt(n, e, t), Ec(e, t);
      }
    }
    var tr = true;
    function b0(e, t, n, a) {
      var l = L.T;
      L.T = null;
      var i = W.p;
      try {
        W.p = 2, Tc(e, t, n, a);
      } finally {
        W.p = i, L.T = l;
      }
    }
    function S0(e, t, n, a) {
      var l = L.T;
      L.T = null;
      var i = W.p;
      try {
        W.p = 8, Tc(e, t, n, a);
      } finally {
        W.p = i, L.T = l;
      }
    }
    function Tc(e, t, n, a) {
      if (tr) {
        var l = _c(a);
        if (l === null)
          oc(e, t, a, nr, n), Rp(e, a);
        else if (E0(l, e, t, n, a))
          a.stopPropagation();
        else if (Rp(e, a), t & 4 && -1 < x0.indexOf(e)) {
          for (; l !== null; ) {
            var i = Nn(l);
            if (i !== null)
              switch (i.tag) {
                case 3:
                  if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                    var c = wn(i.pendingLanes);
                    if (c !== 0) {
                      var y = i;
                      for (y.pendingLanes |= 2, y.entangledLanes |= 2; c; ) {
                        var T = 1 << 31 - Et(c);
                        y.entanglements[1] |= T, c &= ~T;
                      }
                      Hn(i), (je & 6) === 0 && (Hs = wt() + 500, mu(0));
                    }
                  }
                  break;
                case 31:
                case 13:
                  y = sl(i, 2), y !== null && qt(y, i, 2), Ys(), Ec(i, 2);
              }
            if (i = _c(a), i === null && oc(e, t, a, nr, n), i === l)
              break;
            l = i;
          }
          l !== null && a.stopPropagation();
        } else
          oc(e, t, a, null, n);
      }
    }
    function _c(e) {
      return e = Ul(e), Ac(e);
    }
    var nr = null;
    function Ac(e) {
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
            if (e = S(t), e !== null)
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
    function wp(e) {
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
          switch (q()) {
            case he:
              return 2;
            case Ri:
              return 8;
            case ka:
            case Ar:
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
    var Oc = false, qa = null, Ha = null, La = null, Eu = /* @__PURE__ */ new Map(), Tu = /* @__PURE__ */ new Map(), Ya = [], x0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Rp(e, t) {
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
          Eu.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Tu.delete(t.pointerId);
      }
    }
    function _u(e, t, n, a, l, i) {
      return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: a, nativeEvent: i, targetContainers: [l] }, t !== null && (t = Nn(t), t !== null && Ap(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
    }
    function E0(e, t, n, a, l) {
      switch (t) {
        case "focusin":
          return qa = _u(qa, e, t, n, a, l), true;
        case "dragenter":
          return Ha = _u(Ha, e, t, n, a, l), true;
        case "mouseover":
          return La = _u(La, e, t, n, a, l), true;
        case "pointerover":
          var i = l.pointerId;
          return Eu.set(i, _u(Eu.get(i) || null, e, t, n, a, l)), true;
        case "gotpointercapture":
          return i = l.pointerId, Tu.set(i, _u(Tu.get(i) || null, e, t, n, a, l)), true;
      }
      return false;
    }
    function Cp(e) {
      var t = pa(e.target);
      if (t !== null) {
        var n = b(t);
        if (n !== null) {
          if (t = n.tag, t === 13) {
            if (t = p(n), t !== null) {
              e.blockedOn = t, Qu(e.priority, function() {
                Op(n);
              });
              return;
            }
          } else if (t === 31) {
            if (t = S(n), t !== null) {
              e.blockedOn = t, Qu(e.priority, function() {
                Op(n);
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
        var n = _c(e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var a = new n.constructor(n.type, n);
          tl = a, n.target.dispatchEvent(a), tl = null;
        } else
          return t = Nn(n), t !== null && Ap(t), e.blockedOn = n, false;
        t.shift();
      }
      return true;
    }
    function Np(e, t, n) {
      ar(e) && n.delete(t);
    }
    function T0() {
      Oc = false, qa !== null && ar(qa) && (qa = null), Ha !== null && ar(Ha) && (Ha = null), La !== null && ar(La) && (La = null), Eu.forEach(Np), Tu.forEach(Np);
    }
    function lr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Oc || (Oc = true, s.unstable_scheduleCallback(s.unstable_NormalPriority, T0)));
    }
    var ir = null;
    function zp(e) {
      ir !== e && (ir = e, s.unstable_scheduleCallback(s.unstable_NormalPriority, function() {
        ir === e && (ir = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], a = e[t + 1], l = e[t + 2];
          if (typeof a != "function") {
            if (Ac(a || n) === null)
              continue;
            break;
          }
          var i = Nn(n);
          i !== null && (e.splice(t, 3), t -= 3, _o(i, { pending: true, data: l, method: n.method, action: a }, a, l));
        }
      }));
    }
    function gi(e) {
      function t(T) {
        return lr(T, e);
      }
      qa !== null && lr(qa, e), Ha !== null && lr(Ha, e), La !== null && lr(La, e), Eu.forEach(t), Tu.forEach(t);
      for (var n = 0; n < Ya.length; n++) {
        var a = Ya[n];
        a.blockedOn === e && (a.blockedOn = null);
      }
      for (; 0 < Ya.length && (n = Ya[0], n.blockedOn === null); )
        Cp(n), n.blockedOn === null && Ya.shift();
      if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
        for (a = 0; a < n.length; a += 3) {
          var l = n[a], i = n[a + 1], c = l[dt] || null;
          if (typeof i == "function")
            c || zp(n);
          else if (c) {
            var y = null;
            if (i && i.hasAttribute("formAction")) {
              if (l = i, c = i[dt] || null)
                y = c.formAction;
              else if (Ac(l) !== null)
                continue;
            } else
              y = c.action;
            typeof y == "function" ? n[a + 1] = y : (n.splice(a, 3), a -= 3), zp(n);
          }
        }
    }
    function jp() {
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
    function wc(e) {
      this._internalRoot = e;
    }
    ur.prototype.render = wc.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw Error(o(409));
      var n = t.current, a = Ft();
      Tp(n, a, e, t, null, null);
    }, ur.prototype.unmount = wc.prototype.unmount = function() {
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Tp(e.current, 2, null, e, null, null), Ys(), t[Rn] = null;
      }
    };
    function ur(e) {
      this._internalRoot = e;
    }
    ur.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = Gu();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < Ya.length && t !== 0 && t < Ya[n].priority; n++)
          ;
        Ya.splice(n, 0, e), n === 0 && Cp(e);
      }
    };
    var Up = u.version;
    if (Up !== "19.2.0")
      throw Error(o(527, Up, "19.2.0"));
    W.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
      return e = h(t), e = e !== null ? E(e) : null, e = e === null ? null : e.stateNode, e;
    };
    var _0 = { bundleType: 0, version: "19.2.0", rendererPackageName: "react-dom", currentDispatcherRef: L, reconcilerVersion: "19.2.0" };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
      var sr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!sr.isDisabled && sr.supportsFiber)
        try {
          Ka = sr.inject(_0), Rt = sr;
        } catch (e) {
        }
    }
    return wu.createRoot = function(e, t) {
      if (!g(e))
        throw Error(o(299));
      var n = false, a = "", l = Yh, i = Xh, c = Gh;
      return t != null && (t.unstable_strictMode === true && (n = true), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (l = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = xp(e, 1, false, null, null, n, a, null, l, i, c, jp), e[Rn] = t.current, rc(e), new wc(t);
    }, wu.hydrateRoot = function(e, t, n) {
      if (!g(e))
        throw Error(o(299));
      var a = false, l = "", i = Yh, c = Xh, y = Gh, T = null;
      return n != null && (n.unstable_strictMode === true && (a = true), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onUncaughtError !== void 0 && (i = n.onUncaughtError), n.onCaughtError !== void 0 && (c = n.onCaughtError), n.onRecoverableError !== void 0 && (y = n.onRecoverableError), n.formState !== void 0 && (T = n.formState)), t = xp(e, 1, true, t, n != null ? n : null, a, l, T, i, c, y, jp), t.context = Ep(null), n = t.current, a = Ft(), a = at(a), l = Aa(a), l.callback = null, Oa(n, l, a), n = a, t.current.lanes = n, Xn(t, n), Hn(t), e[Rn] = t.current, rc(e), new ur(t);
    }, wu.version = "19.2.0", wu;
  }
  var Fp;
  function mg() {
    if (Fp)
      return Dc.exports;
    Fp = 1;
    function s() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
        } catch (u) {
          console.error(u);
        }
    }
    return s(), Dc.exports = pg(), Dc.exports;
  }
  var yg = mg();
  var gg = Em(yg);
  var vg = Object.defineProperty;
  var bg = (s, u, r) => u in s ? vg(s, u, { enumerable: true, configurable: true, writable: true, value: r }) : s[u] = r;
  var El = (s, u, r) => bg(s, typeof u != "symbol" ? u + "" : u, r);
  var Sg = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  var bi = {};
  var Ru = {};
  var Sn = {};
  var Wp;
  function wm() {
    if (Wp)
      return Sn;
    Wp = 1;
    var s = Sn && Sn.__assign || function() {
      return s = Object.assign || function(g) {
        for (var b, p = 1, S = arguments.length; p < S; p++) {
          b = arguments[p];
          for (var m in b)
            Object.prototype.hasOwnProperty.call(b, m) && (g[m] = b[m]);
        }
        return g;
      }, s.apply(this, arguments);
    }, u = Sn && Sn.__awaiter || function(g, b, p, S) {
      function m(h) {
        return h instanceof p ? h : new p(function(E) {
          E(h);
        });
      }
      return new (p || (p = Promise))(function(h, E) {
        function R(B) {
          try {
            w(S.next(B));
          } catch (Z) {
            E(Z);
          }
        }
        function X(B) {
          try {
            w(S.throw(B));
          } catch (Z) {
            E(Z);
          }
        }
        function w(B) {
          B.done ? h(B.value) : m(B.value).then(R, X);
        }
        w((S = S.apply(g, b || [])).next());
      });
    }, r = Sn && Sn.__generator || function(g, b) {
      var p = { label: 0, sent: function() {
        if (h[0] & 1)
          throw h[1];
        return h[1];
      }, trys: [], ops: [] }, S, m, h, E;
      return E = { next: R(0), throw: R(1), return: R(2) }, typeof Symbol == "function" && (E[Symbol.iterator] = function() {
        return this;
      }), E;
      function R(w) {
        return function(B) {
          return X([w, B]);
        };
      }
      function X(w) {
        if (S)
          throw new TypeError("Generator is already executing.");
        for (; E && (E = 0, w[0] && (p = 0)), p; )
          try {
            if (S = 1, m && (h = w[0] & 2 ? m.return : w[0] ? m.throw || ((h = m.return) && h.call(m), 0) : m.next) && !(h = h.call(m, w[1])).done)
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
          } catch (B) {
            w = [6, B], m = 0;
          } finally {
            S = h = 0;
          }
        if (w[0] & 5)
          throw w[1];
        return { value: w[0] ? w[1] : void 0, done: true };
      }
    };
    Object.defineProperty(Sn, "__esModule", { value: true }), Sn.FrappeCall = void 0;
    var o = function() {
      function g(b, p, S, m, h) {
        this.appURL = b, this.axios = p, this.useToken = S != null ? S : false, this.token = m, this.tokenType = h;
      }
      return g.prototype.get = function(b, p) {
        return u(this, void 0, void 0, function() {
          var S;
          return r(this, function(m) {
            return S = new URLSearchParams(), p && Object.entries(p).forEach(function(h) {
              var E = h[0], R = h[1];
              if (R != null) {
                var X = typeof R == "object" ? JSON.stringify(R) : R;
                S.set(E, X);
              }
            }), [2, this.axios.get("/api/method/".concat(b), { params: S }).then(function(h) {
              return h.data;
            }).catch(function(h) {
              var E, R;
              throw s(s({}, h.response.data), { httpStatus: h.response.status, httpStatusText: h.response.statusText, message: (E = h.response.data.message) !== null && E !== void 0 ? E : "There was an error.", exception: (R = h.response.data.exception) !== null && R !== void 0 ? R : "" });
            })];
          });
        });
      }, g.prototype.post = function(b, p) {
        return u(this, void 0, void 0, function() {
          return r(this, function(S) {
            return [2, this.axios.post("/api/method/".concat(b), s({}, p)).then(function(m) {
              return m.data;
            }).catch(function(m) {
              var h, E;
              throw s(s({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: (h = m.response.data.message) !== null && h !== void 0 ? h : "There was an error.", exception: (E = m.response.data.exception) !== null && E !== void 0 ? E : "" });
            })];
          });
        });
      }, g.prototype.put = function(b, p) {
        return u(this, void 0, void 0, function() {
          return r(this, function(S) {
            return [2, this.axios.put("/api/method/".concat(b), s({}, p)).then(function(m) {
              return m.data;
            }).catch(function(m) {
              var h, E;
              throw s(s({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: (h = m.response.data.message) !== null && h !== void 0 ? h : "There was an error.", exception: (E = m.response.data.exception) !== null && E !== void 0 ? E : "" });
            })];
          });
        });
      }, g.prototype.delete = function(b, p) {
        return u(this, void 0, void 0, function() {
          return r(this, function(S) {
            return [2, this.axios.delete("/api/method/".concat(b), { params: p }).then(function(m) {
              return m.data;
            }).catch(function(m) {
              var h, E;
              throw s(s({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: (h = m.response.data.message) !== null && h !== void 0 ? h : "There was an error.", exception: (E = m.response.data.exception) !== null && E !== void 0 ? E : "" });
            })];
          });
        });
      }, g;
    }();
    return Sn.FrappeCall = o, Sn;
  }
  var xn = {};
  var $p;
  function Rm() {
    if ($p)
      return xn;
    $p = 1;
    var s = xn && xn.__assign || function() {
      return s = Object.assign || function(g) {
        for (var b, p = 1, S = arguments.length; p < S; p++) {
          b = arguments[p];
          for (var m in b)
            Object.prototype.hasOwnProperty.call(b, m) && (g[m] = b[m]);
        }
        return g;
      }, s.apply(this, arguments);
    }, u = xn && xn.__awaiter || function(g, b, p, S) {
      function m(h) {
        return h instanceof p ? h : new p(function(E) {
          E(h);
        });
      }
      return new (p || (p = Promise))(function(h, E) {
        function R(B) {
          try {
            w(S.next(B));
          } catch (Z) {
            E(Z);
          }
        }
        function X(B) {
          try {
            w(S.throw(B));
          } catch (Z) {
            E(Z);
          }
        }
        function w(B) {
          B.done ? h(B.value) : m(B.value).then(R, X);
        }
        w((S = S.apply(g, b || [])).next());
      });
    }, r = xn && xn.__generator || function(g, b) {
      var p = { label: 0, sent: function() {
        if (h[0] & 1)
          throw h[1];
        return h[1];
      }, trys: [], ops: [] }, S, m, h, E;
      return E = { next: R(0), throw: R(1), return: R(2) }, typeof Symbol == "function" && (E[Symbol.iterator] = function() {
        return this;
      }), E;
      function R(w) {
        return function(B) {
          return X([w, B]);
        };
      }
      function X(w) {
        if (S)
          throw new TypeError("Generator is already executing.");
        for (; E && (E = 0, w[0] && (p = 0)), p; )
          try {
            if (S = 1, m && (h = w[0] & 2 ? m.return : w[0] ? m.throw || ((h = m.return) && h.call(m), 0) : m.next) && !(h = h.call(m, w[1])).done)
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
          } catch (B) {
            w = [6, B], m = 0;
          } finally {
            S = h = 0;
          }
        if (w[0] & 5)
          throw w[1];
        return { value: w[0] ? w[1] : void 0, done: true };
      }
    };
    Object.defineProperty(xn, "__esModule", { value: true }), xn.FrappeDB = void 0;
    var o = function() {
      function g(b, p, S, m, h) {
        this.appURL = b, this.axios = p, this.useToken = S != null ? S : false, this.token = m, this.tokenType = h;
      }
      return g.prototype.getDoc = function(b, p) {
        return p === void 0 && (p = ""), u(this, void 0, void 0, function() {
          return r(this, function(S) {
            return [2, this.axios.get("/api/resource/".concat(b, "/").concat(encodeURIComponent(p))).then(function(m) {
              return m.data.data;
            }).catch(function(m) {
              var h, E;
              throw s(s({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: "There was an error while fetching the document.", exception: (E = (h = m.response.data.exception) !== null && h !== void 0 ? h : m.response.data.exc_type) !== null && E !== void 0 ? E : "" });
            })];
          });
        });
      }, g.prototype.getDocList = function(b, p) {
        var S;
        return u(this, void 0, void 0, function() {
          var m, h, E, R, X, w, B, Z, ie, ce, de;
          return r(this, function(ae) {
            return m = {}, p && (h = p.fields, E = p.filters, R = p.orFilters, X = p.orderBy, w = p.limit, B = p.limit_start, Z = p.groupBy, ie = p.asDict, ce = ie === void 0 ? true : ie, de = X ? "".concat(String(X == null ? void 0 : X.field), " ").concat((S = X == null ? void 0 : X.order) !== null && S !== void 0 ? S : "asc") : "", m = { fields: h ? JSON.stringify(h) : void 0, filters: E ? JSON.stringify(E) : void 0, or_filters: R ? JSON.stringify(R) : void 0, order_by: de, group_by: Z, limit: w, limit_start: B, as_dict: ce }), [2, this.axios.get("/api/resource/".concat(b), { params: m }).then(function(le) {
              return le.data.data;
            }).catch(function(le) {
              var ge, Me;
              throw s(s({}, le.response.data), { httpStatus: le.response.status, httpStatusText: le.response.statusText, message: "There was an error while fetching the documents.", exception: (Me = (ge = le.response.data.exception) !== null && ge !== void 0 ? ge : le.response.data.exc_type) !== null && Me !== void 0 ? Me : "" });
            })];
          });
        });
      }, g.prototype.createDoc = function(b, p) {
        return u(this, void 0, void 0, function() {
          return r(this, function(S) {
            return [2, this.axios.post("/api/resource/".concat(b), s({}, p)).then(function(m) {
              return m.data.data;
            }).catch(function(m) {
              var h, E, R;
              throw s(s({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: (h = m.response.data.message) !== null && h !== void 0 ? h : "There was an error while creating the document.", exception: (R = (E = m.response.data.exception) !== null && E !== void 0 ? E : m.response.data.exc_type) !== null && R !== void 0 ? R : "" });
            })];
          });
        });
      }, g.prototype.updateDoc = function(b, p, S) {
        return u(this, void 0, void 0, function() {
          return r(this, function(m) {
            return [2, this.axios.put("/api/resource/".concat(b, "/").concat(p && encodeURIComponent(p)), s({}, S)).then(function(h) {
              return h.data.data;
            }).catch(function(h) {
              var E, R, X;
              throw s(s({}, h.response.data), { httpStatus: h.response.status, httpStatusText: h.response.statusText, message: (E = h.response.data.message) !== null && E !== void 0 ? E : "There was an error while updating the document.", exception: (X = (R = h.response.data.exception) !== null && R !== void 0 ? R : h.response.data.exc_type) !== null && X !== void 0 ? X : "" });
            })];
          });
        });
      }, g.prototype.deleteDoc = function(b, p) {
        return u(this, void 0, void 0, function() {
          return r(this, function(S) {
            return [2, this.axios.delete("/api/resource/".concat(b, "/").concat(p && encodeURIComponent(p))).then(function(m) {
              return m.data;
            }).catch(function(m) {
              var h, E;
              throw s(s({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: "There was an error while deleting the document.", exception: (E = (h = m.response.data.exception) !== null && h !== void 0 ? h : m.response.data.exc_type) !== null && E !== void 0 ? E : "" });
            })];
          });
        });
      }, g.prototype.getCount = function(b, p, S, m) {
        return S === void 0 && (S = false), m === void 0 && (m = false), u(this, void 0, void 0, function() {
          var h;
          return r(this, function(E) {
            return h = { doctype: b, filters: [] }, S && (h.cache = S), m && (h.debug = m), p && (h.filters = p ? JSON.stringify(p) : void 0), [2, this.axios.get("/api/method/frappe.client.get_count", { params: h }).then(function(R) {
              return R.data.message;
            }).catch(function(R) {
              var X, w;
              throw s(s({}, R.response.data), { httpStatus: R.response.status, httpStatusText: R.response.statusText, message: "There was an error while getting the count.", exception: (w = (X = R.response.data.exception) !== null && X !== void 0 ? X : R.response.data.exc_type) !== null && w !== void 0 ? w : "" });
            })];
          });
        });
      }, g.prototype.getLastDoc = function(b, p) {
        return u(this, void 0, void 0, function() {
          var S, m;
          return r(this, function(h) {
            switch (h.label) {
              case 0:
                return S = { orderBy: { field: "creation", order: "desc" } }, p && (S = s(s({}, S), p)), [4, this.getDocList(b, s(s({}, S), { limit: 1, fields: ["name"] }))];
              case 1:
                return m = h.sent(), m.length > 0 ? [2, this.getDoc(b, m[0].name)] : [2, {}];
            }
          });
        });
      }, g.prototype.renameDoc = function(b, p, S, m) {
        return m === void 0 && (m = false), u(this, void 0, void 0, function() {
          return r(this, function(h) {
            return [2, this.axios.post("/api/method/frappe.client.rename_doc", { doctype: b, old_name: p, new_name: S, merge: m }).then(function(E) {
              return E.data;
            }).catch(function(E) {
              var R, X, w;
              throw s(s({}, E.response.data), { httpStatus: E.response.status, httpStatusText: E.response.statusText, message: (R = E.response.data.message) !== null && R !== void 0 ? R : "There was an error while renaming the document.", exception: (w = (X = E.response.data.exception) !== null && X !== void 0 ? X : E.response.data.exc_type) !== null && w !== void 0 ? w : "" });
            })];
          });
        });
      }, g.prototype.getValue = function(b, p, S, m, h, E) {
        return m === void 0 && (m = true), h === void 0 && (h = false), E === void 0 && (E = null), u(this, void 0, void 0, function() {
          var R;
          return r(this, function(X) {
            return R = { doctype: b, fieldname: "[]", filters: [], as_dict: m, debug: h, parent: null }, p && (R.fieldname = typeof p == "object" ? JSON.stringify(p) : p), S && (R.filters = S ? JSON.stringify(S) : void 0), E && (R.parent = E), [2, this.axios.get("/api/method/frappe.client.get_value", { params: R }).then(function(w) {
              return w.data;
            }).catch(function(w) {
              var B, Z;
              throw s(s({}, w.response.data), { httpStatus: w.response.status, httpStatusText: w.response.statusText, message: "There was an error while getting the value.", exception: (Z = (B = w.response.data.exception) !== null && B !== void 0 ? B : w.response.data.exc_type) !== null && Z !== void 0 ? Z : "" });
            })];
          });
        });
      }, g.prototype.setValue = function(b, p, S, m) {
        return u(this, void 0, void 0, function() {
          return r(this, function(h) {
            return S !== null && typeof S == "object" && !Array.isArray(S) && (m = void 0), [2, this.axios.post("/api/method/frappe.client.set_value", { doctype: b, name: p, fieldname: S, value: m }).then(function(E) {
              return E.data;
            }).catch(function(E) {
              var R, X;
              throw s(s({}, E.response.data), { httpStatus: E.response.status, httpStatusText: E.response.statusText, message: "There was an error while setting the value.", exception: (X = (R = E.response.data.exception) !== null && R !== void 0 ? R : E.response.data.exc_type) !== null && X !== void 0 ? X : "" });
            })];
          });
        });
      }, g.prototype.getSingleValue = function(b, p) {
        return u(this, void 0, void 0, function() {
          var S;
          return r(this, function(m) {
            return S = { doctype: b, field: p }, [2, this.axios.get("/api/method/frappe.client.get_single_value", { params: S }).then(function(h) {
              return h.data;
            }).catch(function(h) {
              var E, R;
              throw s(s({}, h.response.data), { httpStatus: h.response.status, httpStatusText: h.response.statusText, message: "There was an error while getting the value of single doctype.", exception: (R = (E = h.response.data.exception) !== null && E !== void 0 ? E : h.response.data.exc_type) !== null && R !== void 0 ? R : "" });
            })];
          });
        });
      }, g.prototype.submit = function(b) {
        return u(this, void 0, void 0, function() {
          return r(this, function(p) {
            return [2, this.axios.post("/api/method/frappe.client.submit", { doc: b }).then(function(S) {
              return S.data.message;
            }).catch(function(S) {
              var m, h;
              throw s(s({}, S.response.data), { httpStatus: S.response.status, httpStatusText: S.response.statusText, message: "There was an error while submitting the document.", exception: (h = (m = S.response.data.exception) !== null && m !== void 0 ? m : S.response.data.exc_type) !== null && h !== void 0 ? h : "" });
            })];
          });
        });
      }, g.prototype.cancel = function(b, p) {
        return u(this, void 0, void 0, function() {
          return r(this, function(S) {
            return [2, this.axios.post("/api/method/frappe.client.cancel", { doctype: b, name: p }).then(function(m) {
              return m.data;
            }).catch(function(m) {
              var h, E;
              throw s(s({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: "There was an error while cancelling the document.", exception: (E = (h = m.response.data.exception) !== null && h !== void 0 ? h : m.response.data.exc_type) !== null && E !== void 0 ? E : "" });
            })];
          });
        });
      }, g;
    }();
    return xn.FrappeDB = o, xn;
  }
  var En = {};
  var ha = {};
  var Hc;
  var Pp;
  function xg() {
    if (Pp)
      return Hc;
    Pp = 1;
    function s(f, d) {
      return function() {
        return f.apply(d, arguments);
      };
    }
    const { toString: u } = Object.prototype, { getPrototypeOf: r } = Object, { iterator: o, toStringTag: g } = Symbol, b = ((f) => (d) => {
      const v = u.call(d);
      return f[v] || (f[v] = v.slice(8, -1).toLowerCase());
    })(/* @__PURE__ */ Object.create(null)), p = (f) => (f = f.toLowerCase(), (d) => b(d) === f), S = (f) => (d) => typeof d === f, { isArray: m } = Array, h = S("undefined");
    function E(f) {
      return f !== null && !h(f) && f.constructor !== null && !h(f.constructor) && B(f.constructor.isBuffer) && f.constructor.isBuffer(f);
    }
    const R = p("ArrayBuffer");
    function X(f) {
      let d;
      return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? d = ArrayBuffer.isView(f) : d = f && f.buffer && R(f.buffer), d;
    }
    const w = S("string"), B = S("function"), Z = S("number"), ie = (f) => f !== null && typeof f == "object", ce = (f) => f === true || f === false, de = (f) => {
      if (b(f) !== "object")
        return false;
      const d = r(f);
      return (d === null || d === Object.prototype || Object.getPrototypeOf(d) === null) && !(g in f) && !(o in f);
    }, ae = (f) => {
      if (!ie(f) || E(f))
        return false;
      try {
        return Object.keys(f).length === 0 && Object.getPrototypeOf(f) === Object.prototype;
      } catch (d) {
        return false;
      }
    }, le = p("Date"), ge = p("File"), Me = p("Blob"), re = p("FileList"), Pe = (f) => ie(f) && B(f.pipe), _t = (f) => {
      let d;
      return f && (typeof FormData == "function" && f instanceof FormData || B(f.append) && ((d = b(f)) === "formdata" || d === "object" && B(f.toString) && f.toString() === "[object FormData]"));
    }, pn = p("URLSearchParams"), [At, ot, Ot, Ie] = ["ReadableStream", "Request", "Response", "Headers"].map(p), Yt = (f) => f.trim ? f.trim() : f.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    function L(f, d, { allOwnKeys: v = false } = {}) {
      if (f === null || typeof f > "u")
        return;
      let x, _;
      if (typeof f != "object" && (f = [f]), m(f))
        for (x = 0, _ = f.length; x < _; x++)
          d.call(null, f[x], x, f);
      else {
        if (E(f))
          return;
        const z = v ? Object.getOwnPropertyNames(f) : Object.keys(f), N = z.length;
        let k;
        for (x = 0; x < N; x++)
          k = z[x], d.call(null, f[k], k, f);
      }
    }
    function W(f, d) {
      if (E(f))
        return null;
      d = d.toLowerCase();
      const v = Object.keys(f);
      let x = v.length, _;
      for (; x-- > 0; )
        if (_ = v[x], d === _.toLowerCase())
          return _;
      return null;
    }
    const ue = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Sg, Ne = (f) => !h(f) && f !== ue;
    function ze() {
      const { caseless: f, skipUndefined: d } = Ne(this) && this || {}, v = {}, x = (_, z) => {
        const N = f && W(v, z) || z;
        de(v[N]) && de(_) ? v[N] = ze(v[N], _) : de(_) ? v[N] = ze({}, _) : m(_) ? v[N] = _.slice() : (!d || !h(_)) && (v[N] = _);
      };
      for (let _ = 0, z = arguments.length; _ < z; _++)
        arguments[_] && L(arguments[_], x);
      return v;
    }
    const O = (f, d, v, { allOwnKeys: x } = {}) => (L(d, (_, z) => {
      v && B(_) ? f[z] = s(_, v) : f[z] = _;
    }, { allOwnKeys: x }), f), V = (f) => (f.charCodeAt(0) === 65279 && (f = f.slice(1)), f), $ = (f, d, v, x) => {
      f.prototype = Object.create(d.prototype, x), f.prototype.constructor = f, Object.defineProperty(f, "super", { value: d.prototype }), v && Object.assign(f.prototype, v);
    }, ee = (f, d, v, x) => {
      let _, z, N;
      const k = {};
      if (d = d || {}, f == null)
        return d;
      do {
        for (_ = Object.getOwnPropertyNames(f), z = _.length; z-- > 0; )
          N = _[z], (!x || x(N, f, d)) && !k[N] && (d[N] = f[N], k[N] = true);
        f = v !== false && r(f);
      } while (f && (!v || v(f, d)) && f !== Object.prototype);
      return d;
    }, pe = (f, d, v) => {
      f = String(f), (v === void 0 || v > f.length) && (v = f.length), v -= d.length;
      const x = f.indexOf(d, v);
      return x !== -1 && x === v;
    }, Se = (f) => {
      if (!f)
        return null;
      if (m(f))
        return f;
      let d = f.length;
      if (!Z(d))
        return null;
      const v = new Array(d);
      for (; d-- > 0; )
        v[d] = f[d];
      return v;
    }, we = ((f) => (d) => f && d instanceof f)(typeof Uint8Array < "u" && r(Uint8Array)), gt = (f, d) => {
      const v = (f && f[o]).call(f);
      let x;
      for (; (x = v.next()) && !x.done; ) {
        const _ = x.value;
        d.call(f, _[0], _[1]);
      }
    }, Ke = (f, d) => {
      let v;
      const x = [];
      for (; (v = f.exec(d)) !== null; )
        x.push(v);
      return x;
    }, Za = p("HTMLFormElement"), _l = (f) => f.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(d, v, x) {
      return v.toUpperCase() + x;
    }), Al = (({ hasOwnProperty: f }) => (d, v) => f.call(d, v))(Object.prototype), ju = p("RegExp"), On = (f, d) => {
      const v = Object.getOwnPropertyDescriptors(f), x = {};
      L(v, (_, z) => {
        let N;
        (N = d(_, z, f)) !== false && (x[z] = N || _);
      }), Object.defineProperties(f, x);
    }, Ti = (f) => {
      On(f, (d, v) => {
        if (B(f) && ["arguments", "caller", "callee"].indexOf(v) !== -1)
          return false;
        const x = f[v];
        if (B(x)) {
          if (d.enumerable = false, "writable" in d) {
            d.writable = false;
            return;
          }
          d.set || (d.set = () => {
            throw Error("Can not rewrite read-only method '" + v + "'");
          });
        }
      });
    }, _i = (f, d) => {
      const v = {}, x = (_) => {
        _.forEach((z) => {
          v[z] = true;
        });
      };
      return m(f) ? x(f) : x(String(f).split(d)), v;
    }, Tr = () => {
    }, Uu = (f, d) => f != null && Number.isFinite(f = +f) ? f : d;
    function Ai(f) {
      return !!(f && B(f.append) && f[g] === "FormData" && f[o]);
    }
    const Oi = (f) => {
      const d = new Array(10), v = (x, _) => {
        if (ie(x)) {
          if (d.indexOf(x) >= 0)
            return;
          if (E(x))
            return x;
          if (!("toJSON" in x)) {
            d[_] = x;
            const z = m(x) ? [] : {};
            return L(x, (N, k) => {
              const te = v(N, _ + 1);
              !h(te) && (z[k] = te);
            }), d[_] = void 0, z;
          }
        }
        return x;
      };
      return v(f, 0);
    }, wi = p("AsyncFunction"), _r = (f) => f && (ie(f) || B(f)) && B(f.then) && B(f.catch), Du = ((f, d) => f ? setImmediate : d ? ((v, x) => (ue.addEventListener("message", ({ source: _, data: z }) => {
      _ === ue && z === v && x.length && x.shift()();
    }, false), (_) => {
      x.push(_), ue.postMessage(v, "*");
    }))(`axios@${Math.random()}`, []) : (v) => setTimeout(v))(typeof setImmediate == "function", B(ue.postMessage)), wt = typeof queueMicrotask < "u" ? queueMicrotask.bind(ue) : typeof process < "u" && process.nextTick || Du;
    var q = { isArray: m, isArrayBuffer: R, isBuffer: E, isFormData: _t, isArrayBufferView: X, isString: w, isNumber: Z, isBoolean: ce, isObject: ie, isPlainObject: de, isEmptyObject: ae, isReadableStream: At, isRequest: ot, isResponse: Ot, isHeaders: Ie, isUndefined: h, isDate: le, isFile: ge, isBlob: Me, isRegExp: ju, isFunction: B, isStream: Pe, isURLSearchParams: pn, isTypedArray: we, isFileList: re, forEach: L, merge: ze, extend: O, trim: Yt, stripBOM: V, inherits: $, toFlatObject: ee, kindOf: b, kindOfTest: p, endsWith: pe, toArray: Se, forEachEntry: gt, matchAll: Ke, isHTMLForm: Za, hasOwnProperty: Al, hasOwnProp: Al, reduceDescriptors: On, freezeMethods: Ti, toObjectSet: _i, toCamelCase: _l, noop: Tr, toFiniteNumber: Uu, findKey: W, global: ue, isContextDefined: Ne, isSpecCompliantForm: Ai, toJSONObject: Oi, isAsyncFn: wi, isThenable: _r, setImmediate: Du, asap: wt, isIterable: (f) => f != null && B(f[o]) };
    function he(f, d, v, x, _) {
      Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = f, this.name = "AxiosError", d && (this.code = d), v && (this.config = v), x && (this.request = x), _ && (this.response = _, this.status = _.status ? _.status : null);
    }
    q.inherits(he, Error, { toJSON: function() {
      return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: q.toJSONObject(this.config), code: this.code, status: this.status };
    } });
    const Ri = he.prototype, ka = {};
    ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((f) => {
      ka[f] = { value: f };
    }), Object.defineProperties(he, ka), Object.defineProperty(Ri, "isAxiosError", { value: true }), he.from = (f, d, v, x, _, z) => {
      const N = Object.create(Ri);
      q.toFlatObject(f, N, function(K) {
        return K !== Error.prototype;
      }, (K) => K !== "isAxiosError");
      const k = f && f.message ? f.message : "Error", te = d == null && f ? f.code : d;
      return he.call(N, k, te, v, x, _), f && N.cause == null && Object.defineProperty(N, "cause", { value: f, configurable: true }), N.name = f && f.name || "Error", z && Object.assign(N, z), N;
    };
    var Ar = null;
    function Ol(f) {
      return q.isPlainObject(f) || q.isArray(f);
    }
    function Mu(f) {
      return q.endsWith(f, "[]") ? f.slice(0, -2) : f;
    }
    function Bu(f, d, v) {
      return f ? f.concat(d).map(function(x, _) {
        return x = Mu(x), !v && _ ? "[" + x + "]" : x;
      }).join(v ? "." : "") : d;
    }
    function Ka(f) {
      return q.isArray(f) && !f.some(Ol);
    }
    const Rt = q.toFlatObject(q, {}, null, function(f) {
      return /^is[A-Z]/.test(f);
    });
    function Xt(f, d, v) {
      if (!q.isObject(f))
        throw new TypeError("target must be an object");
      d = d || new FormData(), v = q.toFlatObject(v, { metaTokens: true, dots: false, indexes: false }, false, function(me, F) {
        return !q.isUndefined(F[me]);
      });
      const x = v.metaTokens, _ = v.visitor || K, z = v.dots, N = v.indexes, k = (v.Blob || typeof Blob < "u" && Blob) && q.isSpecCompliantForm(d);
      if (!q.isFunction(_))
        throw new TypeError("visitor must be a function");
      function te(me) {
        if (me === null)
          return "";
        if (q.isDate(me))
          return me.toISOString();
        if (q.isBoolean(me))
          return me.toString();
        if (!k && q.isBlob(me))
          throw new he("Blob is not supported. Use a Buffer instead.");
        return q.isArrayBuffer(me) || q.isTypedArray(me) ? k && typeof Blob == "function" ? new Blob([me]) : Buffer.from(me) : me;
      }
      function K(me, F, P) {
        let Qe = me;
        if (me && !P && typeof me == "object") {
          if (q.endsWith(F, "{}"))
            F = x ? F : F.slice(0, -2), me = JSON.stringify(me);
          else if (q.isArray(me) && Ka(me) || (q.isFileList(me) || q.endsWith(F, "[]")) && (Qe = q.toArray(me)))
            return F = Mu(F), Qe.forEach(function(mt, et) {
              !(q.isUndefined(mt) || mt === null) && d.append(N === true ? Bu([F], et, z) : N === null ? F : F + "[]", te(mt));
            }), false;
        }
        return Ol(me) ? true : (d.append(Bu(P, F, z), te(me)), false);
      }
      const J = [], fe = Object.assign(Rt, { defaultVisitor: K, convertValue: te, isVisitable: Ol });
      function Be(me, F) {
        if (!q.isUndefined(me)) {
          if (J.indexOf(me) !== -1)
            throw Error("Circular reference detected in " + F.join("."));
          J.push(me), q.forEach(me, function(P, Qe) {
            (!(q.isUndefined(P) || P === null) && _.call(d, P, q.isString(Qe) ? Qe.trim() : Qe, F, fe)) === true && Be(P, F ? F.concat(Qe) : [Qe]);
          }), J.pop();
        }
      }
      if (!q.isObject(f))
        throw new TypeError("data must be an object");
      return Be(f), d;
    }
    function Et(f) {
      const d = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
      return encodeURIComponent(f).replace(/[!'()~]|%20|%00/g, function(v) {
        return d[v];
      });
    }
    function Ci(f, d) {
      this._pairs = [], f && Xt(f, this, d);
    }
    const qu = Ci.prototype;
    qu.append = function(f, d) {
      this._pairs.push([f, d]);
    }, qu.toString = function(f) {
      const d = f ? function(v) {
        return f.call(this, v, Et);
      } : Et;
      return this._pairs.map(function(v) {
        return d(v[0]) + "=" + d(v[1]);
      }, "").join("&");
    };
    function Or(f) {
      return encodeURIComponent(f).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
    }
    function Ja(f, d, v) {
      if (!d)
        return f;
      const x = v && v.encode || Or;
      q.isFunction(v) && (v = { serialize: v });
      const _ = v && v.serialize;
      let z;
      if (_ ? z = _(d, v) : z = q.isURLSearchParams(d) ? d.toString() : new Ci(d, v).toString(x), z) {
        const N = f.indexOf("#");
        N !== -1 && (f = f.slice(0, N)), f += (f.indexOf("?") === -1 ? "?" : "&") + z;
      }
      return f;
    }
    class wl {
      constructor() {
        this.handlers = [];
      }
      use(d, v, x) {
        return this.handlers.push({ fulfilled: d, rejected: v, synchronous: x ? x.synchronous : false, runWhen: x ? x.runWhen : null }), this.handlers.length - 1;
      }
      eject(d) {
        this.handlers[d] && (this.handlers[d] = null);
      }
      clear() {
        this.handlers && (this.handlers = []);
      }
      forEach(d) {
        q.forEach(this.handlers, function(v) {
          v !== null && d(v);
        });
      }
    }
    var Fa = wl, wn = { silentJSONParsing: true, forcedJSONParsing: true, clarifyTimeoutError: false }, Rl = typeof URLSearchParams < "u" ? URLSearchParams : Ci, Wa = typeof FormData < "u" ? FormData : null, wr = typeof Blob < "u" ? Blob : null, Hu = { isBrowser: true, classes: { URLSearchParams: Rl, FormData: Wa, Blob: wr }, protocols: ["http", "https", "file", "blob", "url", "data"] };
    const $a = typeof window < "u" && typeof document < "u", Xn = typeof navigator == "object" && navigator || void 0, Rr = $a && (!Xn || ["ReactNative", "NativeScript", "NS"].indexOf(Xn.product) < 0), Lu = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Yu = $a && window.location.href || "http://localhost";
    var Xu = Object.freeze({ __proto__: null, hasBrowserEnv: $a, hasStandardBrowserWebWorkerEnv: Lu, hasStandardBrowserEnv: Rr, navigator: Xn, origin: Yu }), at = Ge(Ge({}, Xu), Hu);
    function Ni(f, d) {
      return Xt(f, new at.classes.URLSearchParams(), Ge({ visitor: function(v, x, _, z) {
        return at.isNode && q.isBuffer(v) ? (this.append(x, v.toString("base64")), false) : z.defaultVisitor.apply(this, arguments);
      } }, d));
    }
    function Gu(f) {
      return q.matchAll(/\w+|\[(\w*)]/g, f).map((d) => d[0] === "[]" ? "" : d[1] || d[0]);
    }
    function Qu(f) {
      const d = {}, v = Object.keys(f);
      let x;
      const _ = v.length;
      let z;
      for (x = 0; x < _; x++)
        z = v[x], d[z] = f[z];
      return d;
    }
    function mn(f) {
      function d(v, x, _, z) {
        let N = v[z++];
        if (N === "__proto__")
          return true;
        const k = Number.isFinite(+N), te = z >= v.length;
        return N = !N && q.isArray(_) ? _.length : N, te ? (q.hasOwnProp(_, N) ? _[N] = [_[N], x] : _[N] = x, !k) : ((!_[N] || !q.isObject(_[N])) && (_[N] = []), d(v, x, _[N], z) && q.isArray(_[N]) && (_[N] = Qu(_[N])), !k);
      }
      if (q.isFormData(f) && q.isFunction(f.entries)) {
        const v = {};
        return q.forEachEntry(f, (x, _) => {
          d(Gu(x), _, v, 0);
        }), v;
      }
      return null;
    }
    function ct(f, d, v) {
      if (q.isString(f))
        try {
          return (d || JSON.parse)(f), q.trim(f);
        } catch (x) {
          if (x.name !== "SyntaxError")
            throw x;
        }
      return (v || JSON.stringify)(f);
    }
    const dt = { transitional: wn, adapter: ["xhr", "http", "fetch"], transformRequest: [function(f, d) {
      const v = d.getContentType() || "", x = v.indexOf("application/json") > -1, _ = q.isObject(f);
      if (_ && q.isHTMLForm(f) && (f = new FormData(f)), q.isFormData(f))
        return x ? JSON.stringify(mn(f)) : f;
      if (q.isArrayBuffer(f) || q.isBuffer(f) || q.isStream(f) || q.isFile(f) || q.isBlob(f) || q.isReadableStream(f))
        return f;
      if (q.isArrayBufferView(f))
        return f.buffer;
      if (q.isURLSearchParams(f))
        return d.setContentType("application/x-www-form-urlencoded;charset=utf-8", false), f.toString();
      let z;
      if (_) {
        if (v.indexOf("application/x-www-form-urlencoded") > -1)
          return Ni(f, this.formSerializer).toString();
        if ((z = q.isFileList(f)) || v.indexOf("multipart/form-data") > -1) {
          const N = this.env && this.env.FormData;
          return Xt(z ? { "files[]": f } : f, N && new N(), this.formSerializer);
        }
      }
      return _ || x ? (d.setContentType("application/json", false), ct(f)) : f;
    }], transformResponse: [function(f) {
      const d = this.transitional || dt.transitional, v = d && d.forcedJSONParsing, x = this.responseType === "json";
      if (q.isResponse(f) || q.isReadableStream(f))
        return f;
      if (f && q.isString(f) && (v && !this.responseType || x)) {
        const _ = !(d && d.silentJSONParsing) && x;
        try {
          return JSON.parse(f, this.parseReviver);
        } catch (z) {
          if (_)
            throw z.name === "SyntaxError" ? he.from(z, he.ERR_BAD_RESPONSE, this, null, this.response) : z;
        }
      }
      return f;
    }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, env: { FormData: at.classes.FormData, Blob: at.classes.Blob }, validateStatus: function(f) {
      return f >= 200 && f < 300;
    }, headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } } };
    q.forEach(["delete", "get", "head", "post", "put", "patch"], (f) => {
      dt.headers[f] = {};
    });
    var Rn = dt;
    const zi = q.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);
    var Cr = (f) => {
      const d = {};
      let v, x, _;
      return f && f.split(`
`).forEach(function(z) {
        _ = z.indexOf(":"), v = z.substring(0, _).trim().toLowerCase(), x = z.substring(_ + 1).trim(), !(!v || d[v] && zi[v]) && (v === "set-cookie" ? d[v] ? d[v].push(x) : d[v] = [x] : d[v] = d[v] ? d[v] + ", " + x : x);
      }), d;
    };
    const Vu = Symbol("internals");
    function da(f) {
      return f && String(f).trim().toLowerCase();
    }
    function Cn(f) {
      return f === false || f == null ? f : q.isArray(f) ? f.map(Cn) : String(f);
    }
    function ji(f) {
      const d = /* @__PURE__ */ Object.create(null), v = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
      let x;
      for (; x = v.exec(f); )
        d[x[1]] = x[2];
      return d;
    }
    const pa = (f) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(f.trim());
    function Nn(f, d, v, x, _) {
      if (q.isFunction(x))
        return x.call(this, d, v);
      if (_ && (d = v), !!q.isString(d)) {
        if (q.isString(x))
          return d.indexOf(x) !== -1;
        if (q.isRegExp(x))
          return x.test(d);
      }
    }
    function Pa(f) {
      return f.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (d, v, x) => v.toUpperCase() + x);
    }
    function ma(f, d) {
      const v = q.toCamelCase(" " + d);
      ["get", "set", "has"].forEach((x) => {
        Object.defineProperty(f, x + v, { value: function(_, z, N) {
          return this[x].call(this, d, _, z, N);
        }, configurable: true });
      });
    }
    class Je {
      constructor(d) {
        d && this.set(d);
      }
      set(d, v, x) {
        const _ = this;
        function z(k, te, K) {
          const J = da(te);
          if (!J)
            throw new Error("header name must be a non-empty string");
          const fe = q.findKey(_, J);
          (!fe || _[fe] === void 0 || K === true || K === void 0 && _[fe] !== false) && (_[fe || te] = Cn(k));
        }
        const N = (k, te) => q.forEach(k, (K, J) => z(K, J, te));
        if (q.isPlainObject(d) || d instanceof this.constructor)
          N(d, v);
        else if (q.isString(d) && (d = d.trim()) && !pa(d))
          N(Cr(d), v);
        else if (q.isObject(d) && q.isIterable(d)) {
          let k = {}, te, K;
          for (const J of d) {
            if (!q.isArray(J))
              throw TypeError("Object iterator must return a key-value pair");
            k[K = J[0]] = (te = k[K]) ? q.isArray(te) ? [...te, J[1]] : [te, J[1]] : J[1];
          }
          N(k, v);
        } else
          d != null && z(v, d, x);
        return this;
      }
      get(d, v) {
        if (d = da(d), d) {
          const x = q.findKey(this, d);
          if (x) {
            const _ = this[x];
            if (!v)
              return _;
            if (v === true)
              return ji(_);
            if (q.isFunction(v))
              return v.call(this, _, x);
            if (q.isRegExp(v))
              return v.exec(_);
            throw new TypeError("parser must be boolean|regexp|function");
          }
        }
      }
      has(d, v) {
        if (d = da(d), d) {
          const x = q.findKey(this, d);
          return !!(x && this[x] !== void 0 && (!v || Nn(this, this[x], x, v)));
        }
        return false;
      }
      delete(d, v) {
        const x = this;
        let _ = false;
        function z(N) {
          if (N = da(N), N) {
            const k = q.findKey(x, N);
            k && (!v || Nn(x, x[k], k, v)) && (delete x[k], _ = true);
          }
        }
        return q.isArray(d) ? d.forEach(z) : z(d), _;
      }
      clear(d) {
        const v = Object.keys(this);
        let x = v.length, _ = false;
        for (; x--; ) {
          const z = v[x];
          (!d || Nn(this, this[z], z, d, true)) && (delete this[z], _ = true);
        }
        return _;
      }
      normalize(d) {
        const v = this, x = {};
        return q.forEach(this, (_, z) => {
          const N = q.findKey(x, z);
          if (N) {
            v[N] = Cn(_), delete v[z];
            return;
          }
          const k = d ? Pa(z) : String(z).trim();
          k !== z && delete v[z], v[k] = Cn(_), x[k] = true;
        }), this;
      }
      concat(...d) {
        return this.constructor.concat(this, ...d);
      }
      toJSON(d) {
        const v = /* @__PURE__ */ Object.create(null);
        return q.forEach(this, (x, _) => {
          x != null && x !== false && (v[_] = d && q.isArray(x) ? x.join(", ") : x);
        }), v;
      }
      [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
      }
      toString() {
        return Object.entries(this.toJSON()).map(([d, v]) => d + ": " + v).join(`
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
      static concat(d, ...v) {
        const x = new this(d);
        return v.forEach((_) => x.set(_)), x;
      }
      static accessor(d) {
        const v = (this[Vu] = this[Vu] = { accessors: {} }).accessors, x = this.prototype;
        function _(z) {
          const N = da(z);
          v[N] || (ma(x, z), v[N] = true);
        }
        return q.isArray(d) ? d.forEach(_) : _(d), this;
      }
    }
    Je.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), q.reduceDescriptors(Je.prototype, ({ value: f }, d) => {
      let v = d[0].toUpperCase() + d.slice(1);
      return { get: () => f, set(x) {
        this[v] = x;
      } };
    }), q.freezeMethods(Je);
    var zt = Je;
    function Cl(f, d) {
      const v = this || Rn, x = d || v, _ = zt.from(x.headers);
      let z = x.data;
      return q.forEach(f, function(N) {
        z = N.call(v, z, _.normalize(), d ? d.status : void 0);
      }), _.normalize(), z;
    }
    function zn(f) {
      return !!(f && f.__CANCEL__);
    }
    function Gt(f, d, v) {
      he.call(this, f != null ? f : "canceled", he.ERR_CANCELED, d, v), this.name = "CanceledError";
    }
    q.inherits(Gt, he, { __CANCEL__: true });
    function Zu(f, d, v) {
      const x = v.config.validateStatus;
      !v.status || !x || x(v.status) ? f(v) : d(new he("Request failed with status code " + v.status, [he.ERR_BAD_REQUEST, he.ERR_BAD_RESPONSE][Math.floor(v.status / 100) - 4], v.config, v.request, v));
    }
    function ku(f) {
      const d = /^([-+\w]{1,25})(:?\/\/|:)/.exec(f);
      return d && d[1] || "";
    }
    function Ku(f, d) {
      f = f || 10;
      const v = new Array(f), x = new Array(f);
      let _ = 0, z = 0, N;
      return d = d !== void 0 ? d : 1e3, function(k) {
        const te = Date.now(), K = x[z];
        N || (N = te), v[_] = k, x[_] = te;
        let J = z, fe = 0;
        for (; J !== _; )
          fe += v[J++], J = J % f;
        if (_ = (_ + 1) % f, _ === z && (z = (z + 1) % f), te - N < d)
          return;
        const Be = K && te - K;
        return Be ? Math.round(fe * 1e3 / Be) : void 0;
      };
    }
    function Nr(f, d) {
      let v = 0, x = 1e3 / d, _, z;
      const N = (k, te = Date.now()) => {
        v = te, _ = null, z && (clearTimeout(z), z = null), f(...k);
      };
      return [(...k) => {
        const te = Date.now(), K = te - v;
        K >= x ? N(k, te) : (_ = k, z || (z = setTimeout(() => {
          z = null, N(_);
        }, x - K)));
      }, () => _ && N(_)];
    }
    const Gn = (f, d, v = 3) => {
      let x = 0;
      const _ = Ku(50, 250);
      return Nr((z) => {
        const N = z.loaded, k = z.lengthComputable ? z.total : void 0, te = N - x, K = _(te), J = N <= k;
        x = N;
        const fe = { loaded: N, total: k, progress: k ? N / k : void 0, bytes: te, rate: K || void 0, estimated: K && k && J ? (k - N) / K : void 0, event: z, lengthComputable: k != null, [d ? "download" : "upload"]: true };
        f(fe);
      }, v);
    }, Ia = (f, d) => {
      const v = f != null;
      return [(x) => d[0]({ lengthComputable: v, total: f, loaded: x }), d[1]];
    }, $t = (f) => (...d) => q.asap(() => f(...d));
    var jt = at.hasStandardBrowserEnv ? ((f, d) => (v) => (v = new URL(v, at.origin), f.protocol === v.protocol && f.host === v.host && (d || f.port === v.port)))(new URL(at.origin), at.navigator && /(msie|trident)/i.test(at.navigator.userAgent)) : () => true, Ju = at.hasStandardBrowserEnv ? { write(f, d, v, x, _, z) {
      const N = [f + "=" + encodeURIComponent(d)];
      q.isNumber(v) && N.push("expires=" + new Date(v).toGMTString()), q.isString(x) && N.push("path=" + x), q.isString(_) && N.push("domain=" + _), z === true && N.push("secure"), document.cookie = N.join("; ");
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
    function zr(f) {
      return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(f);
    }
    function Ui(f, d) {
      return d ? f.replace(/\/?\/$/, "") + "/" + d.replace(/^\/+/, "") : f;
    }
    function Di(f, d, v) {
      let x = !zr(d);
      return f && (x || v == false) ? Ui(f, d) : d;
    }
    const el = (f) => f instanceof zt ? Ge({}, f) : f;
    function Qn(f, d) {
      d = d || {};
      const v = {};
      function x(K, J, fe, Be) {
        return q.isPlainObject(K) && q.isPlainObject(J) ? q.merge.call({ caseless: Be }, K, J) : q.isPlainObject(J) ? q.merge({}, J) : q.isArray(J) ? J.slice() : J;
      }
      function _(K, J, fe, Be) {
        if (q.isUndefined(J)) {
          if (!q.isUndefined(K))
            return x(void 0, K, fe, Be);
        } else
          return x(K, J, fe, Be);
      }
      function z(K, J) {
        if (!q.isUndefined(J))
          return x(void 0, J);
      }
      function N(K, J) {
        if (q.isUndefined(J)) {
          if (!q.isUndefined(K))
            return x(void 0, K);
        } else
          return x(void 0, J);
      }
      function k(K, J, fe) {
        if (fe in d)
          return x(K, J);
        if (fe in f)
          return x(void 0, K);
      }
      const te = { url: z, method: z, data: z, baseURL: N, transformRequest: N, transformResponse: N, paramsSerializer: N, timeout: N, timeoutMessage: N, withCredentials: N, withXSRFToken: N, adapter: N, responseType: N, xsrfCookieName: N, xsrfHeaderName: N, onUploadProgress: N, onDownloadProgress: N, decompress: N, maxContentLength: N, maxBodyLength: N, beforeRedirect: N, transport: N, httpAgent: N, httpsAgent: N, cancelToken: N, socketPath: N, responseEncoding: N, validateStatus: k, headers: (K, J, fe) => _(el(K), el(J), fe, true) };
      return q.forEach(Object.keys(Ge(Ge({}, f), d)), function(K) {
        const J = te[K] || _, fe = J(f[K], d[K], K);
        q.isUndefined(fe) && J !== k || (v[K] = fe);
      }), v;
    }
    var Ct = (f) => {
      const d = Qn({}, f);
      let { data: v, withXSRFToken: x, xsrfHeaderName: _, xsrfCookieName: z, headers: N, auth: k } = d;
      if (d.headers = N = zt.from(N), d.url = Ja(Di(d.baseURL, d.url, d.allowAbsoluteUrls), f.params, f.paramsSerializer), k && N.set("Authorization", "Basic " + btoa((k.username || "") + ":" + (k.password ? unescape(encodeURIComponent(k.password)) : ""))), q.isFormData(v)) {
        if (at.hasStandardBrowserEnv || at.hasStandardBrowserWebWorkerEnv)
          N.setContentType(void 0);
        else if (q.isFunction(v.getHeaders)) {
          const te = v.getHeaders(), K = ["content-type", "content-length"];
          Object.entries(te).forEach(([J, fe]) => {
            K.includes(J.toLowerCase()) && N.set(J, fe);
          });
        }
      }
      if (at.hasStandardBrowserEnv && (x && q.isFunction(x) && (x = x(d)), x || x !== false && jt(d.url))) {
        const te = _ && z && Ju.read(z);
        te && N.set(_, te);
      }
      return d;
    }, Mi = typeof XMLHttpRequest < "u" && function(f) {
      return new Promise(function(d, v) {
        const x = Ct(f);
        let _ = x.data;
        const z = zt.from(x.headers).normalize();
        let { responseType: N, onUploadProgress: k, onDownloadProgress: te } = x, K, J, fe, Be, me;
        function F() {
          Be && Be(), me && me(), x.cancelToken && x.cancelToken.unsubscribe(K), x.signal && x.signal.removeEventListener("abort", K);
        }
        let P = new XMLHttpRequest();
        P.open(x.method.toUpperCase(), x.url, true), P.timeout = x.timeout;
        function Qe() {
          if (!P)
            return;
          const et = zt.from("getAllResponseHeaders" in P && P.getAllResponseHeaders()), en = { data: !N || N === "text" || N === "json" ? P.responseText : P.response, status: P.status, statusText: P.statusText, headers: et, config: f, request: P };
          Zu(function(tn) {
            d(tn), F();
          }, function(tn) {
            v(tn), F();
          }, en), P = null;
        }
        "onloadend" in P ? P.onloadend = Qe : P.onreadystatechange = function() {
          !P || P.readyState !== 4 || P.status === 0 && !(P.responseURL && P.responseURL.indexOf("file:") === 0) || setTimeout(Qe);
        }, P.onabort = function() {
          P && (v(new he("Request aborted", he.ECONNABORTED, f, P)), P = null);
        }, P.onerror = function(et) {
          const en = et && et.message ? et.message : "Network Error", tn = new he(en, he.ERR_NETWORK, f, P);
          tn.event = et || null, v(tn), P = null;
        }, P.ontimeout = function() {
          let et = x.timeout ? "timeout of " + x.timeout + "ms exceeded" : "timeout exceeded";
          const en = x.transitional || wn;
          x.timeoutErrorMessage && (et = x.timeoutErrorMessage), v(new he(et, en.clarifyTimeoutError ? he.ETIMEDOUT : he.ECONNABORTED, f, P)), P = null;
        }, _ === void 0 && z.setContentType(null), "setRequestHeader" in P && q.forEach(z.toJSON(), function(et, en) {
          P.setRequestHeader(en, et);
        }), q.isUndefined(x.withCredentials) || (P.withCredentials = !!x.withCredentials), N && N !== "json" && (P.responseType = x.responseType), te && ([fe, me] = Gn(te, true), P.addEventListener("progress", fe)), k && P.upload && ([J, Be] = Gn(k), P.upload.addEventListener("progress", J), P.upload.addEventListener("loadend", Be)), (x.cancelToken || x.signal) && (K = (et) => {
          P && (v(!et || et.type ? new Gt(null, f, P) : et), P.abort(), P = null);
        }, x.cancelToken && x.cancelToken.subscribe(K), x.signal && (x.signal.aborted ? K() : x.signal.addEventListener("abort", K)));
        const mt = ku(x.url);
        if (mt && at.protocols.indexOf(mt) === -1) {
          v(new he("Unsupported protocol " + mt + ":", he.ERR_BAD_REQUEST, f));
          return;
        }
        P.send(_ || null);
      });
    }, Fu = (f, d) => {
      const { length: v } = f = f ? f.filter(Boolean) : [];
      if (d || v) {
        let x = new AbortController(), _;
        const z = function(K) {
          if (!_) {
            _ = true, k();
            const J = K instanceof Error ? K : this.reason;
            x.abort(J instanceof he ? J : new Gt(J instanceof Error ? J.message : J));
          }
        };
        let N = d && setTimeout(() => {
          N = null, z(new he(`timeout ${d} of ms exceeded`, he.ETIMEDOUT));
        }, d);
        const k = () => {
          f && (N && clearTimeout(N), N = null, f.forEach((K) => {
            K.unsubscribe ? K.unsubscribe(z) : K.removeEventListener("abort", z);
          }), f = null);
        };
        f.forEach((K) => K.addEventListener("abort", z));
        const { signal: te } = x;
        return te.unsubscribe = () => q.asap(k), te;
      }
    };
    const Bi = function* (f, d) {
      let v = f.byteLength;
      if (v < d) {
        yield f;
        return;
      }
      let x = 0, _;
      for (; x < v; )
        _ = x + d, yield f.slice(x, _), x = _;
    }, ya = function(f, d) {
      return Cc(this, null, function* () {
        try {
          for (var v = qp(Wu(f)), x, _, z; x = !(_ = yield new Sl(v.next())).done; x = false) {
            const N = _.value;
            yield* Nc(Bi(N, d));
          }
        } catch (_2) {
          z = [_2];
        } finally {
          try {
            x && (_ = v.return) && (yield new Sl(_.call(v)));
          } finally {
            if (z)
              throw z[0];
          }
        }
      });
    }, Wu = function(f) {
      return Cc(this, null, function* () {
        if (f[Symbol.asyncIterator]) {
          yield* Nc(f);
          return;
        }
        const d = f.getReader();
        try {
          for (; ; ) {
            const { done: v, value: x } = yield new Sl(d.read());
            if (v)
              break;
            yield x;
          }
        } finally {
          yield new Sl(d.cancel());
        }
      });
    }, qi = (f, d, v, x) => {
      const _ = ya(f, d);
      let z = 0, N, k = (K) => {
        N || (N = true, x && x(K));
      };
      return new ReadableStream({ pull(K) {
        return fa(this, null, function* () {
          try {
            const { done: J, value: fe } = yield _.next();
            if (J) {
              k(), K.close();
              return;
            }
            let Be = fe.byteLength;
            if (v) {
              let me = z += Be;
              v(me);
            }
            K.enqueue(new Uint8Array(fe));
          } catch (J) {
            throw k(J), J;
          }
        });
      }, cancel(K) {
        return k(K), _.return();
      } }, { highWaterMark: 2 });
    }, Vn = 64 * 1024, { isFunction: Nl } = q, $u = (({ Request: f, Response: d }) => ({ Request: f, Response: d }))(q.global), { ReadableStream: Hi, TextEncoder: zl } = q.global, Pu = (f, ...d) => {
      try {
        return !!f(...d);
      } catch (v) {
        return false;
      }
    }, jr = (f) => {
      f = q.merge.call({ skipUndefined: true }, $u, f);
      const { fetch: d, Request: v, Response: x } = f, _ = d ? Nl(d) : typeof fetch == "function", z = Nl(v), N = Nl(x);
      if (!_)
        return false;
      const k = _ && Nl(Hi), te = _ && (typeof zl == "function" ? ((F) => (P) => F.encode(P))(new zl()) : (F) => fa(null, null, function* () {
        return new Uint8Array(yield new v(F).arrayBuffer());
      })), K = z && k && Pu(() => {
        let F = false;
        const P = new v(at.origin, { body: new Hi(), method: "POST", get duplex() {
          return F = true, "half";
        } }).headers.has("Content-Type");
        return F && !P;
      }), J = N && k && Pu(() => q.isReadableStream(new x("").body)), fe = { stream: J && ((F) => F.body) };
      _ && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((F) => {
        !fe[F] && (fe[F] = (P, Qe) => {
          let mt = P && P[F];
          if (mt)
            return mt.call(P);
          throw new he(`Response type '${F}' is not supported`, he.ERR_NOT_SUPPORT, Qe);
        });
      });
      const Be = (F) => fa(null, null, function* () {
        if (F == null)
          return 0;
        if (q.isBlob(F))
          return F.size;
        if (q.isSpecCompliantForm(F))
          return (yield new v(at.origin, { method: "POST", body: F }).arrayBuffer()).byteLength;
        if (q.isArrayBufferView(F) || q.isArrayBuffer(F))
          return F.byteLength;
        if (q.isURLSearchParams(F) && (F = F + ""), q.isString(F))
          return (yield te(F)).byteLength;
      }), me = (F, P) => fa(null, null, function* () {
        const Qe = q.toFiniteNumber(F.getContentLength());
        return Qe != null ? Qe : Be(P);
      });
      return (F) => fa(null, null, function* () {
        let { url: P, method: Qe, data: mt, signal: et, cancelToken: en, timeout: tn, onDownloadProgress: Xi, onUploadProgress: es, responseType: Dn, headers: Ll, withCredentials: Yl = "same-origin", fetchOptions: ts } = Ct(F), ns = d || fetch;
        Dn = Dn ? (Dn + "").toLowerCase() : "text";
        let Xl = Fu([et, en && en.toAbortSignal()], tn), al = null;
        const Jn = Xl && Xl.unsubscribe && (() => {
          Xl.unsubscribe();
        });
        let as;
        try {
          if (es && K && Qe !== "get" && Qe !== "head" && (as = yield me(Ll, mt)) !== 0) {
            let yn = new v(P, { method: "POST", body: mt, duplex: "half" }), Fn;
            if (q.isFormData(mt) && (Fn = yn.headers.get("content-type")) && Ll.setContentType(Fn), yn.body) {
              const [Gl, ll] = Ia(as, Gn($t(es)));
              mt = qi(yn.body, Vn, Gl, ll);
            }
          }
          q.isString(Yl) || (Yl = Yl ? "include" : "omit");
          const nn = z && "credentials" in v.prototype, ls = Ht(Ge({}, ts), { signal: Xl, method: Qe.toUpperCase(), headers: Ll.normalize().toJSON(), body: mt, duplex: "half", credentials: nn ? Yl : void 0 });
          al = z && new v(P, ls);
          let an = yield z ? ns(al, ts) : ns(P, ls);
          const ba = J && (Dn === "stream" || Dn === "response");
          if (J && (Xi || ba && Jn)) {
            const yn = {};
            ["status", "statusText", "headers"].forEach((Gi) => {
              yn[Gi] = an[Gi];
            });
            const Fn = q.toFiniteNumber(an.headers.get("content-length")), [Gl, ll] = Xi && Ia(Fn, Gn($t(Xi), true)) || [];
            an = new x(qi(an.body, Vn, Gl, () => {
              ll && ll(), Jn && Jn();
            }), yn);
          }
          Dn = Dn || "text";
          let Ur = yield fe[q.findKey(fe, Dn) || "text"](an, F);
          return !ba && Jn && Jn(), yield new Promise((yn, Fn) => {
            Zu(yn, Fn, { data: Ur, headers: zt.from(an.headers), status: an.status, statusText: an.statusText, config: F, request: al });
          });
        } catch (nn) {
          throw Jn && Jn(), nn && nn.name === "TypeError" && /Load failed|fetch/i.test(nn.message) ? Object.assign(new he("Network Error", he.ERR_NETWORK, F, al), { cause: nn.cause || nn }) : he.from(nn, nn && nn.code, F, al);
        }
      });
    }, jl = /* @__PURE__ */ new Map(), Pt = (f) => {
      let d = f ? f.env : {};
      const { fetch: v, Request: x, Response: _ } = d, z = [x, _, v];
      let N = z.length, k = N, te, K, J = jl;
      for (; k--; )
        te = z[k], K = J.get(te), K === void 0 && J.set(te, K = k ? /* @__PURE__ */ new Map() : jr(d)), J = K;
      return K;
    };
    Pt();
    const tl = { http: Ar, xhr: Mi, fetch: { get: Pt } };
    q.forEach(tl, (f, d) => {
      if (f) {
        try {
          Object.defineProperty(f, "name", { value: d });
        } catch (v) {
        }
        Object.defineProperty(f, "adapterName", { value: d });
      }
    });
    const Ul = (f) => `- ${f}`, ga = (f) => q.isFunction(f) || f === null || f === false;
    var Zn = { getAdapter: (f, d) => {
      f = q.isArray(f) ? f : [f];
      const { length: v } = f;
      let x, _;
      const z = {};
      for (let N = 0; N < v; N++) {
        x = f[N];
        let k;
        if (_ = x, !ga(x) && (_ = tl[(k = String(x)).toLowerCase()], _ === void 0))
          throw new he(`Unknown adapter '${k}'`);
        if (_ && (q.isFunction(_) || (_ = _.get(d))))
          break;
        z[k || "#" + N] = _;
      }
      if (!_) {
        const N = Object.entries(z).map(([te, K]) => `adapter ${te} ` + (K === false ? "is not supported by the environment" : "is not available in the build"));
        let k = v ? N.length > 1 ? `since :
` + N.map(Ul).join(`
`) : " " + Ul(N[0]) : "as no adapter specified";
        throw new he("There is no suitable adapter to dispatch the request " + k, "ERR_NOT_SUPPORT");
      }
      return _;
    }, adapters: tl };
    function Dl(f) {
      if (f.cancelToken && f.cancelToken.throwIfRequested(), f.signal && f.signal.aborted)
        throw new Gt(null, f);
    }
    function Ml(f) {
      return Dl(f), f.headers = zt.from(f.headers), f.data = Cl.call(f, f.transformRequest), ["post", "put", "patch"].indexOf(f.method) !== -1 && f.headers.setContentType("application/x-www-form-urlencoded", false), Zn.getAdapter(f.adapter || Rn.adapter, f)(f).then(function(d) {
        return Dl(f), d.data = Cl.call(f, f.transformResponse, d), d.headers = zt.from(d.headers), d;
      }, function(d) {
        return zn(d) || (Dl(f), d && d.response && (d.response.data = Cl.call(f, f.transformResponse, d.response), d.response.headers = zt.from(d.response.headers))), Promise.reject(d);
      });
    }
    const Li = "1.12.2", jn = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach((f, d) => {
      jn[f] = function(v) {
        return typeof v === f || "a" + (d < 1 ? "n " : " ") + f;
      };
    });
    const It = {};
    jn.transitional = function(f, d, v) {
      function x(_, z) {
        return "[Axios v" + Li + "] Transitional option '" + _ + "'" + z + (v ? ". " + v : "");
      }
      return (_, z, N) => {
        if (f === false)
          throw new he(x(z, " has been removed" + (d ? " in " + d : "")), he.ERR_DEPRECATED);
        return d && !It[z] && (It[z] = true, console.warn(x(z, " has been deprecated since v" + d + " and will be removed in the near future"))), f ? f(_, z, N) : true;
      };
    }, jn.spelling = function(f) {
      return (d, v) => (console.warn(`${v} is likely a misspelling of ${f}`), true);
    };
    function Yi(f, d, v) {
      if (typeof f != "object")
        throw new he("options must be an object", he.ERR_BAD_OPTION_VALUE);
      const x = Object.keys(f);
      let _ = x.length;
      for (; _-- > 0; ) {
        const z = x[_], N = d[z];
        if (N) {
          const k = f[z], te = k === void 0 || N(k, z, f);
          if (te !== true)
            throw new he("option " + z + " must be " + te, he.ERR_BAD_OPTION_VALUE);
          continue;
        }
        if (v !== true)
          throw new he("Unknown option " + z, he.ERR_BAD_OPTION);
      }
    }
    var Un = { assertOptions: Yi, validators: jn };
    const ft = Un.validators;
    class va {
      constructor(d) {
        this.defaults = d || {}, this.interceptors = { request: new Fa(), response: new Fa() };
      }
      request(d, v) {
        return fa(this, null, function* () {
          try {
            return yield this._request(d, v);
          } catch (x) {
            if (x instanceof Error) {
              let _ = {};
              Error.captureStackTrace ? Error.captureStackTrace(_) : _ = new Error();
              const z = _.stack ? _.stack.replace(/^.+\n/, "") : "";
              try {
                x.stack ? z && !String(x.stack).endsWith(z.replace(/^.+\n.+\n/, "")) && (x.stack += `
` + z) : x.stack = z;
              } catch (N) {
              }
            }
            throw x;
          }
        });
      }
      _request(d, v) {
        typeof d == "string" ? (v = v || {}, v.url = d) : v = d || {}, v = Qn(this.defaults, v);
        const { transitional: x, paramsSerializer: _, headers: z } = v;
        x !== void 0 && Un.assertOptions(x, { silentJSONParsing: ft.transitional(ft.boolean), forcedJSONParsing: ft.transitional(ft.boolean), clarifyTimeoutError: ft.transitional(ft.boolean) }, false), _ != null && (q.isFunction(_) ? v.paramsSerializer = { serialize: _ } : Un.assertOptions(_, { encode: ft.function, serialize: ft.function }, true)), v.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? v.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : v.allowAbsoluteUrls = true), Un.assertOptions(v, { baseUrl: ft.spelling("baseURL"), withXsrfToken: ft.spelling("withXSRFToken") }, true), v.method = (v.method || this.defaults.method || "get").toLowerCase();
        let N = z && q.merge(z.common, z[v.method]);
        z && q.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (F) => {
          delete z[F];
        }), v.headers = zt.concat(N, z);
        const k = [];
        let te = true;
        this.interceptors.request.forEach(function(F) {
          typeof F.runWhen == "function" && F.runWhen(v) === false || (te = te && F.synchronous, k.unshift(F.fulfilled, F.rejected));
        });
        const K = [];
        this.interceptors.response.forEach(function(F) {
          K.push(F.fulfilled, F.rejected);
        });
        let J, fe = 0, Be;
        if (!te) {
          const F = [Ml.bind(this), void 0];
          for (F.unshift(...k), F.push(...K), Be = F.length, J = Promise.resolve(v); fe < Be; )
            J = J.then(F[fe++], F[fe++]);
          return J;
        }
        Be = k.length;
        let me = v;
        for (; fe < Be; ) {
          const F = k[fe++], P = k[fe++];
          try {
            me = F(me);
          } catch (Qe) {
            P.call(this, Qe);
            break;
          }
        }
        try {
          J = Ml.call(this, me);
        } catch (F) {
          return Promise.reject(F);
        }
        for (fe = 0, Be = K.length; fe < Be; )
          J = J.then(K[fe++], K[fe++]);
        return J;
      }
      getUri(d) {
        d = Qn(this.defaults, d);
        const v = Di(d.baseURL, d.url, d.allowAbsoluteUrls);
        return Ja(v, d.params, d.paramsSerializer);
      }
    }
    q.forEach(["delete", "get", "head", "options"], function(f) {
      va.prototype[f] = function(d, v) {
        return this.request(Qn(v || {}, { method: f, url: d, data: (v || {}).data }));
      };
    }), q.forEach(["post", "put", "patch"], function(f) {
      function d(v) {
        return function(x, _, z) {
          return this.request(Qn(z || {}, { method: f, headers: v ? { "Content-Type": "multipart/form-data" } : {}, url: x, data: _ }));
        };
      }
      va.prototype[f] = d(), va.prototype[f + "Form"] = d(true);
    });
    var kn = va;
    class Bl {
      constructor(d) {
        if (typeof d != "function")
          throw new TypeError("executor must be a function.");
        let v;
        this.promise = new Promise(function(_) {
          v = _;
        });
        const x = this;
        this.promise.then((_) => {
          if (!x._listeners)
            return;
          let z = x._listeners.length;
          for (; z-- > 0; )
            x._listeners[z](_);
          x._listeners = null;
        }), this.promise.then = (_) => {
          let z;
          const N = new Promise((k) => {
            x.subscribe(k), z = k;
          }).then(_);
          return N.cancel = function() {
            x.unsubscribe(z);
          }, N;
        }, d(function(_, z, N) {
          x.reason || (x.reason = new Gt(_, z, N), v(x.reason));
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
        const v = this._listeners.indexOf(d);
        v !== -1 && this._listeners.splice(v, 1);
      }
      toAbortSignal() {
        const d = new AbortController(), v = (x) => {
          d.abort(x);
        };
        return this.subscribe(v), d.signal.unsubscribe = () => this.unsubscribe(v), d.signal;
      }
      static source() {
        let d;
        return { token: new Bl(function(v) {
          d = v;
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
      return q.isObject(f) && f.isAxiosError === true;
    }
    const pt = { Continue: 100, SwitchingProtocols: 101, Processing: 102, EarlyHints: 103, Ok: 200, Created: 201, Accepted: 202, NonAuthoritativeInformation: 203, NoContent: 204, ResetContent: 205, PartialContent: 206, MultiStatus: 207, AlreadyReported: 208, ImUsed: 226, MultipleChoices: 300, MovedPermanently: 301, Found: 302, SeeOther: 303, NotModified: 304, UseProxy: 305, Unused: 306, TemporaryRedirect: 307, PermanentRedirect: 308, BadRequest: 400, Unauthorized: 401, PaymentRequired: 402, Forbidden: 403, NotFound: 404, MethodNotAllowed: 405, NotAcceptable: 406, ProxyAuthenticationRequired: 407, RequestTimeout: 408, Conflict: 409, Gone: 410, LengthRequired: 411, PreconditionFailed: 412, PayloadTooLarge: 413, UriTooLong: 414, UnsupportedMediaType: 415, RangeNotSatisfiable: 416, ExpectationFailed: 417, ImATeapot: 418, MisdirectedRequest: 421, UnprocessableEntity: 422, Locked: 423, FailedDependency: 424, TooEarly: 425, UpgradeRequired: 426, PreconditionRequired: 428, TooManyRequests: 429, RequestHeaderFieldsTooLarge: 431, UnavailableForLegalReasons: 451, InternalServerError: 500, NotImplemented: 501, BadGateway: 502, ServiceUnavailable: 503, GatewayTimeout: 504, HttpVersionNotSupported: 505, VariantAlsoNegotiates: 506, InsufficientStorage: 507, LoopDetected: 508, NotExtended: 510, NetworkAuthenticationRequired: 511 };
    Object.entries(pt).forEach(([f, d]) => {
      pt[d] = f;
    });
    var Kn = pt;
    function nl(f) {
      const d = new kn(f), v = s(kn.prototype.request, d);
      return q.extend(v, kn.prototype, d, { allOwnKeys: true }), q.extend(v, d, null, { allOwnKeys: true }), v.create = function(x) {
        return nl(Qn(f, x));
      }, v;
    }
    const Xe = nl(Rn);
    return Xe.Axios = kn, Xe.CanceledError = Gt, Xe.CancelToken = ql, Xe.isCancel = zn, Xe.VERSION = Li, Xe.toFormData = Xt, Xe.AxiosError = he, Xe.Cancel = Xe.CanceledError, Xe.all = function(f) {
      return Promise.all(f);
    }, Xe.spread = Hl, Xe.isAxiosError = Iu, Xe.mergeConfig = Qn, Xe.AxiosHeaders = zt, Xe.formToJSON = (f) => mn(q.isHTMLForm(f) ? new FormData(f) : f), Xe.getAdapter = Zn.getAdapter, Xe.HttpStatusCode = Kn, Xe.default = Xe, Hc = Xe, Hc;
  }
  var Ip;
  function Cm() {
    if (Ip)
      return ha;
    Ip = 1;
    var s = ha && ha.__assign || function() {
      return s = Object.assign || function(g) {
        for (var b, p = 1, S = arguments.length; p < S; p++) {
          b = arguments[p];
          for (var m in b)
            Object.prototype.hasOwnProperty.call(b, m) && (g[m] = b[m]);
        }
        return g;
      }, s.apply(this, arguments);
    };
    Object.defineProperty(ha, "__esModule", { value: true }), ha.getRequestHeaders = ha.getAxiosClient = void 0;
    var u = xg();
    function r(g, b, p, S, m) {
      var h = u.default.create({ baseURL: g, headers: o(b, S, p, g, m), withCredentials: true });
      return h.interceptors.request.use(function(E) {
        return typeof window < "u" && window.csrf_token && window.csrf_token !== "{{ csrf_token }}" && (E.headers["X-Frappe-CSRF-Token"] = window.csrf_token), b && S && p && (E.headers.Authorization = "".concat(S, " ").concat(p())), E;
      }), h;
    }
    ha.getAxiosClient = r;
    function o(g, b, p, S, m) {
      g === void 0 && (g = false);
      var h = { Accept: "application/json", "Content-Type": "application/json; charset=utf-8" };
      return g && b && p && (h.Authorization = "".concat(b, " ").concat(p())), typeof window < "u" && typeof document < "u" && (window.location && (S && S !== window.location.origin || (h["X-Frappe-Site-Name"] = window.location.hostname)), window.csrf_token && window.csrf_token !== "{{ csrf_token }}" && (h["X-Frappe-CSRF-Token"] = window.csrf_token)), s(s({}, h), m != null ? m : {});
    }
    return ha.getRequestHeaders = o, ha;
  }
  var em;
  function Nm() {
    if (em)
      return En;
    em = 1;
    var s = En && En.__assign || function() {
      return s = Object.assign || function(b) {
        for (var p, S = 1, m = arguments.length; S < m; S++) {
          p = arguments[S];
          for (var h in p)
            Object.prototype.hasOwnProperty.call(p, h) && (b[h] = p[h]);
        }
        return b;
      }, s.apply(this, arguments);
    }, u = En && En.__awaiter || function(b, p, S, m) {
      function h(E) {
        return E instanceof S ? E : new S(function(R) {
          R(E);
        });
      }
      return new (S || (S = Promise))(function(E, R) {
        function X(Z) {
          try {
            B(m.next(Z));
          } catch (ie) {
            R(ie);
          }
        }
        function w(Z) {
          try {
            B(m.throw(Z));
          } catch (ie) {
            R(ie);
          }
        }
        function B(Z) {
          Z.done ? E(Z.value) : h(Z.value).then(X, w);
        }
        B((m = m.apply(b, p || [])).next());
      });
    }, r = En && En.__generator || function(b, p) {
      var S = { label: 0, sent: function() {
        if (E[0] & 1)
          throw E[1];
        return E[1];
      }, trys: [], ops: [] }, m, h, E, R;
      return R = { next: X(0), throw: X(1), return: X(2) }, typeof Symbol == "function" && (R[Symbol.iterator] = function() {
        return this;
      }), R;
      function X(B) {
        return function(Z) {
          return w([B, Z]);
        };
      }
      function w(B) {
        if (m)
          throw new TypeError("Generator is already executing.");
        for (; R && (R = 0, B[0] && (S = 0)), S; )
          try {
            if (m = 1, h && (E = B[0] & 2 ? h.return : B[0] ? h.throw || ((E = h.return) && E.call(h), 0) : h.next) && !(E = E.call(h, B[1])).done)
              return E;
            switch (h = 0, E && (B = [B[0] & 2, E.value]), B[0]) {
              case 0:
              case 1:
                E = B;
                break;
              case 4:
                return S.label++, { value: B[1], done: false };
              case 5:
                S.label++, h = B[1], B = [0];
                continue;
              case 7:
                B = S.ops.pop(), S.trys.pop();
                continue;
              default:
                if (E = S.trys, !(E = E.length > 0 && E[E.length - 1]) && (B[0] === 6 || B[0] === 2)) {
                  S = 0;
                  continue;
                }
                if (B[0] === 3 && (!E || B[1] > E[0] && B[1] < E[3])) {
                  S.label = B[1];
                  break;
                }
                if (B[0] === 6 && S.label < E[1]) {
                  S.label = E[1], E = B;
                  break;
                }
                if (E && S.label < E[2]) {
                  S.label = E[2], S.ops.push(B);
                  break;
                }
                E[2] && S.ops.pop(), S.trys.pop();
                continue;
            }
            B = p.call(b, S);
          } catch (Z) {
            B = [6, Z], h = 0;
          } finally {
            m = E = 0;
          }
        if (B[0] & 5)
          throw B[1];
        return { value: B[0] ? B[1] : void 0, done: true };
      }
    };
    Object.defineProperty(En, "__esModule", { value: true }), En.FrappeFileUpload = void 0;
    var o = Cm(), g = function() {
      function b(p, S, m, h, E, R) {
        this.appURL = p, this.axios = S, this.useToken = m != null ? m : false, this.token = h, this.tokenType = E, this.customHeaders = R;
      }
      return b.prototype.uploadFile = function(p, S, m, h) {
        return h === void 0 && (h = "upload_file"), u(this, void 0, void 0, function() {
          var E, R, X, w, B, Z, ie, ce;
          return r(this, function(de) {
            return E = new FormData(), p && E.append("file", p, p.name), R = S.isPrivate, X = S.folder, w = S.file_url, B = S.doctype, Z = S.docname, ie = S.fieldname, ce = S.otherData, R && E.append("is_private", "1"), X && E.append("folder", X), w && E.append("file_url", w), B && Z && (E.append("doctype", B), E.append("docname", Z), ie && E.append("fieldname", ie)), ce && Object.keys(ce).forEach(function(ae) {
              var le = ce[ae];
              E.append(ae, le);
            }), [2, this.axios.post("/api/method/".concat(h), E, { onUploadProgress: function(ae) {
              m && m(ae.loaded, ae.total, ae);
            }, headers: s(s({}, (0, o.getRequestHeaders)(this.useToken, this.tokenType, this.token, this.appURL, this.customHeaders)), { "Content-Type": "multipart/form-data" }) }).catch(function(ae) {
              var le, ge;
              throw s(s({}, ae.response.data), { httpStatus: ae.response.status, httpStatusText: ae.response.statusText, message: (le = ae.response.data.message) !== null && le !== void 0 ? le : "There was an error while uploading the file.", exception: (ge = ae.response.data.exception) !== null && ge !== void 0 ? ge : "" });
            })];
          });
        });
      }, b;
    }();
    return En.FrappeFileUpload = g, En;
  }
  var tm;
  function Eg() {
    if (tm)
      return Ru;
    tm = 1, Object.defineProperty(Ru, "__esModule", { value: true }), Ru.FrappeApp = void 0;
    var s = zm(), u = wm(), r = Rm(), o = Nm(), g = Cm(), b = function() {
      function p(S, m, h, E) {
        var R, X;
        this.url = S, this.name = h != null ? h : "FrappeApp", this.useToken = (R = m == null ? void 0 : m.useToken) !== null && R !== void 0 ? R : false, this.token = m == null ? void 0 : m.token, this.tokenType = (X = m == null ? void 0 : m.type) !== null && X !== void 0 ? X : "Bearer", this.customHeaders = E, this.axios = (0, g.getAxiosClient)(this.url, this.useToken, this.token, this.tokenType, this.customHeaders);
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
  var nm;
  function Tg() {
    if (nm)
      return Tn;
    nm = 1;
    var s = Tn && Tn.__assign || function() {
      return s = Object.assign || function(g) {
        for (var b, p = 1, S = arguments.length; p < S; p++) {
          b = arguments[p];
          for (var m in b)
            Object.prototype.hasOwnProperty.call(b, m) && (g[m] = b[m]);
        }
        return g;
      }, s.apply(this, arguments);
    }, u = Tn && Tn.__awaiter || function(g, b, p, S) {
      function m(h) {
        return h instanceof p ? h : new p(function(E) {
          E(h);
        });
      }
      return new (p || (p = Promise))(function(h, E) {
        function R(B) {
          try {
            w(S.next(B));
          } catch (Z) {
            E(Z);
          }
        }
        function X(B) {
          try {
            w(S.throw(B));
          } catch (Z) {
            E(Z);
          }
        }
        function w(B) {
          B.done ? h(B.value) : m(B.value).then(R, X);
        }
        w((S = S.apply(g, b || [])).next());
      });
    }, r = Tn && Tn.__generator || function(g, b) {
      var p = { label: 0, sent: function() {
        if (h[0] & 1)
          throw h[1];
        return h[1];
      }, trys: [], ops: [] }, S, m, h, E;
      return E = { next: R(0), throw: R(1), return: R(2) }, typeof Symbol == "function" && (E[Symbol.iterator] = function() {
        return this;
      }), E;
      function R(w) {
        return function(B) {
          return X([w, B]);
        };
      }
      function X(w) {
        if (S)
          throw new TypeError("Generator is already executing.");
        for (; E && (E = 0, w[0] && (p = 0)), p; )
          try {
            if (S = 1, m && (h = w[0] & 2 ? m.return : w[0] ? m.throw || ((h = m.return) && h.call(m), 0) : m.next) && !(h = h.call(m, w[1])).done)
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
          } catch (B) {
            w = [6, B], m = 0;
          } finally {
            S = h = 0;
          }
        if (w[0] & 5)
          throw w[1];
        return { value: w[0] ? w[1] : void 0, done: true };
      }
    };
    Object.defineProperty(Tn, "__esModule", { value: true }), Tn.FrappeAuth = void 0;
    var o = function() {
      function g(b, p, S, m, h) {
        this.appURL = b, this.axios = p, this.useToken = S != null ? S : false, this.token = m, this.tokenType = h;
      }
      return g.prototype.loginWithUsernamePassword = function(b) {
        return u(this, void 0, void 0, function() {
          return r(this, function(p) {
            return [2, this.axios.post("/api/method/login", { usr: b.username, pwd: b.password, otp: b.otp, tmp_id: b.tmp_id, device: b.device }).then(function(S) {
              return S.data;
            }).catch(function(S) {
              var m, h;
              throw s(s({}, S.response.data), { httpStatus: S.response.status, httpStatusText: S.response.statusText, message: (m = S.response.data.message) !== null && m !== void 0 ? m : "There was an error while logging in", exception: (h = S.response.data.exception) !== null && h !== void 0 ? h : "" });
            })];
          });
        });
      }, g.prototype.getLoggedInUser = function() {
        return u(this, void 0, void 0, function() {
          return r(this, function(b) {
            return [2, this.axios.get("/api/method/frappe.auth.get_logged_user").then(function(p) {
              return p.data.message;
            }).catch(function(p) {
              var S;
              throw s(s({}, p.response.data), { httpStatus: p.response.status, httpStatusText: p.response.statusText, message: "There was an error while fetching the logged in user", exception: (S = p.response.data.exception) !== null && S !== void 0 ? S : "" });
            })];
          });
        });
      }, g.prototype.logout = function() {
        return u(this, void 0, void 0, function() {
          return r(this, function(b) {
            return [2, this.axios.post("/api/method/logout", {}).then(function() {
            }).catch(function(p) {
              var S, m;
              throw s(s({}, p.response.data), { httpStatus: p.response.status, httpStatusText: p.response.statusText, message: (S = p.response.data.message) !== null && S !== void 0 ? S : "There was an error while logging out", exception: (m = p.response.data.exception) !== null && m !== void 0 ? m : "" });
            })];
          });
        });
      }, g.prototype.forgetPassword = function(b) {
        return u(this, void 0, void 0, function() {
          return r(this, function(p) {
            return [2, this.axios.post("/", { cmd: "frappe.core.doctype.user.user.reset_password", user: b }).then(function() {
            }).catch(function(S) {
              var m, h;
              throw s(s({}, S.response.data), { httpStatus: S.response.status, httpStatusText: S.response.statusText, message: (m = S.response.data.message) !== null && m !== void 0 ? m : "There was an error sending password reset email.", exception: (h = S.response.data.exception) !== null && h !== void 0 ? h : "" });
            })];
          });
        });
      }, g;
    }();
    return Tn.FrappeAuth = o, Tn;
  }
  var am;
  function zm() {
    return am || (am = 1, function(s) {
      var u = bi && bi.__createBinding || (Object.create ? function(o, g, b, p) {
        p === void 0 && (p = b);
        var S = Object.getOwnPropertyDescriptor(g, b);
        (!S || ("get" in S ? !g.__esModule : S.writable || S.configurable)) && (S = { enumerable: true, get: function() {
          return g[b];
        } }), Object.defineProperty(o, p, S);
      } : function(o, g, b, p) {
        p === void 0 && (p = b), o[p] = g[b];
      }), r = bi && bi.__exportStar || function(o, g) {
        for (var b in o)
          b !== "default" && !Object.prototype.hasOwnProperty.call(g, b) && u(g, o, b);
      };
      Object.defineProperty(s, "__esModule", { value: true }), r(Eg(), s), r(Tg(), s), r(Rm(), s), r(Nm(), s), r(wm(), s);
    }(bi)), bi;
  }
  var _g = zm();
  var lm = { exports: {} };
  var Lc = {};
  var im;
  function Ag() {
    if (im)
      return Lc;
    im = 1;
    var s = zu;
    function u(R, X) {
      return R === X && (R !== 0 || 1 / R === 1 / X) || R !== R && X !== X;
    }
    var r = typeof Object.is == "function" ? Object.is : u, o = s.useState, g = s.useEffect, b = s.useLayoutEffect, p = s.useDebugValue;
    function S(R, X) {
      var w = X(), B = o({ inst: { value: w, getSnapshot: X } }), Z = B[0].inst, ie = B[1];
      return b(function() {
        Z.value = w, Z.getSnapshot = X, m(Z) && ie({ inst: Z });
      }, [R, w, X]), g(function() {
        return m(Z) && ie({ inst: Z }), R(function() {
          m(Z) && ie({ inst: Z });
        });
      }, [R]), p(w), w;
    }
    function m(R) {
      var X = R.getSnapshot;
      R = R.value;
      try {
        var w = X();
        return !r(R, w);
      } catch (B) {
        return true;
      }
    }
    function h(R, X) {
      return X();
    }
    var E = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? h : S;
    return Lc.useSyncExternalStore = s.useSyncExternalStore !== void 0 ? s.useSyncExternalStore : E, Lc;
  }
  var um;
  function Og() {
    return um || (um = 1, lm.exports = Ag()), lm.exports;
  }
  Og();
  var wg = 0;
  var Rg = 1;
  var Cg = 2;
  var sm = Object.prototype.hasOwnProperty;
  function Zc(s, u) {
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
          for (; o-- && Zc(s[o], u[o]); )
            ;
        return o === -1;
      }
      if (!r || typeof s == "object") {
        o = 0;
        for (r in s)
          if (sm.call(s, r) && ++o && !sm.call(u, r) || !(r in u) || !Zc(s[r], u[r]))
            return false;
        return Object.keys(u).length === o;
      }
    }
    return s !== s && u !== u;
  }
  var Ga = /* @__PURE__ */ new WeakMap();
  var Va = () => {
  };
  var Lt = Va();
  var Sr = Object;
  var An = (s) => s === Lt;
  var Qa = (s) => typeof s == "function";
  var Tl = (s, u) => Ge(Ge({}, s), u);
  var Ng = (s) => Qa(s.then);
  var Yc = {};
  var fr = {};
  var jm = "undefined";
  var xr = typeof window != jm;
  var kc = typeof document != jm;
  var zg = xr && "Deno" in window;
  var jg = (s, u) => {
    const r = Ga.get(s);
    return [() => !An(u) && s.get(u) || Yc, (o) => {
      if (!An(u)) {
        const g = s.get(u);
        u in fr || (fr[u] = g), r[5](u, Tl(g, o), g || Yc);
      }
    }, r[6], () => !An(u) && u in fr ? fr[u] : !An(u) && s.get(u) || Yc];
  };
  var Kc = true;
  var Ug = () => Kc;
  var [Jc, Fc] = xr && window.addEventListener ? [window.addEventListener.bind(window), window.removeEventListener.bind(window)] : [Va, Va];
  var Dg = () => {
    const s = kc && document.visibilityState;
    return An(s) || s !== "hidden";
  };
  var Mg = (s) => (kc && document.addEventListener("visibilitychange", s), Jc("focus", s), () => {
    kc && document.removeEventListener("visibilitychange", s), Fc("focus", s);
  });
  var Bg = (s) => {
    const u = () => {
      Kc = true, s();
    }, r = () => {
      Kc = false;
    };
    return Jc("online", u), Jc("offline", r), () => {
      Fc("online", u), Fc("offline", r);
    };
  };
  var qg = { isOnline: Ug, isVisible: Dg };
  var Hg = { initFocus: Mg, initReconnect: Bg };
  zu.useId;
  var uf = !xr || zg;
  var Lg = uf ? Fe.useEffect : Fe.useLayoutEffect;
  var Xc = typeof navigator < "u" && navigator.connection;
  var rm = !uf && Xc && (["slow-2g", "2g"].includes(Xc.effectiveType) || Xc.saveData);
  var hr = /* @__PURE__ */ new WeakMap();
  var Yg = (s) => Sr.prototype.toString.call(s);
  var Gc = (s, u) => s === `[object ${u}]`;
  var Xg = 0;
  var Wc = (s) => {
    const u = typeof s, r = Yg(s), o = Gc(r, "Date"), g = Gc(r, "RegExp"), b = Gc(r, "Object");
    let p, S;
    if (Sr(s) === s && !o && !g) {
      if (p = hr.get(s), p)
        return p;
      if (p = ++Xg + "~", hr.set(s, p), Array.isArray(s)) {
        for (p = "@", S = 0; S < s.length; S++)
          p += Wc(s[S]) + ",";
        hr.set(s, p);
      }
      if (b) {
        p = "#";
        const m = Sr.keys(s).sort();
        for (; !An(S = m.pop()); )
          An(s[S]) || (p += S + ":" + Wc(s[S]) + ",");
        hr.set(s, p);
      }
    } else
      p = o ? s.toJSON() : u == "symbol" ? s.toString() : u == "string" ? JSON.stringify(s) : "" + s;
    return p;
  };
  var Um = (s) => {
    if (Qa(s))
      try {
        s = s();
      } catch (r) {
        s = "";
      }
    const u = s;
    return s = typeof s == "string" ? s : (Array.isArray(s) ? s.length : s) ? Wc(s) : "", [s, u];
  };
  var Gg = 0;
  var om = () => ++Gg;
  function Qg(...s) {
    return fa(this, null, function* () {
      const [u, r, o, g] = s, b = Tl({ populateCache: true, throwOnError: true }, typeof g == "boolean" ? { revalidate: g } : g || {});
      let p = b.populateCache;
      const S = b.rollbackOnError;
      let m = b.optimisticData;
      const h = (X) => typeof S == "function" ? S(X) : S !== false, E = b.throwOnError;
      if (Qa(r)) {
        const X = r, w = [], B = u.keys();
        for (const Z of B)
          !/^\$(inf|sub)\$/.test(Z) && X(u.get(Z)._k) && w.push(Z);
        return Promise.all(w.map(R));
      }
      return R(r);
      function R(X) {
        return fa(this, null, function* () {
          const [w] = Um(X);
          if (!w)
            return;
          const [B, Z] = jg(u, w), [ie, ce, de, ae] = Ga.get(u), le = () => {
            const Ie = ie[w];
            return (Qa(b.revalidate) ? b.revalidate(B().data, X) : b.revalidate !== false) && (delete de[w], delete ae[w], Ie && Ie[0]) ? Ie[0](Cg).then(() => B().data) : B().data;
          };
          if (s.length < 3)
            return le();
          let ge = o, Me, re = false;
          const Pe = om();
          ce[w] = [Pe, 0];
          const _t = !An(m), pn = B(), At = pn.data, ot = pn._c, Ot = An(ot) ? At : ot;
          if (_t && (m = Qa(m) ? m(Ot, At) : m, Z({ data: m, _c: Ot })), Qa(ge))
            try {
              ge = ge(Ot);
            } catch (Ie) {
              Me = Ie, re = true;
            }
          if (ge && Ng(ge))
            if (ge = yield ge.catch((Ie) => {
              Me = Ie, re = true;
            }), Pe !== ce[w][0]) {
              if (re)
                throw Me;
              return ge;
            } else
              re && _t && h(Me) && (p = true, Z({ data: Ot, _c: Lt }));
          if (p && !re)
            if (Qa(p)) {
              const Ie = p(ge, Ot);
              Z({ data: Ie, error: Lt, _c: Lt });
            } else
              Z({ data: ge, error: Lt, _c: Lt });
          if (ce[w][1] = om(), Promise.resolve(le()).then(() => {
            Z({ _c: Lt });
          }), re) {
            if (E)
              throw Me;
            return;
          }
          return ge;
        });
      }
    });
  }
  var cm = (s, u) => {
    for (const r in s)
      s[r][0] && s[r][0](u);
  };
  var Dm = (s, u) => {
    if (!Ga.has(s)) {
      const r = Tl(Hg, u), o = /* @__PURE__ */ Object.create(null), g = Qg.bind(Lt, s);
      let b = Va;
      const p = /* @__PURE__ */ Object.create(null), S = (E, R) => {
        const X = p[E] || [];
        return p[E] = X, X.push(R), () => X.splice(X.indexOf(R), 1);
      }, m = (E, R, X) => {
        s.set(E, R);
        const w = p[E];
        if (w)
          for (const B of w)
            B(R, X);
      }, h = () => {
        if (!Ga.has(s) && (Ga.set(s, [o, /* @__PURE__ */ Object.create(null), /* @__PURE__ */ Object.create(null), /* @__PURE__ */ Object.create(null), g, m, S]), !uf)) {
          const E = r.initFocus(setTimeout.bind(Lt, cm.bind(Lt, o, wg))), R = r.initReconnect(setTimeout.bind(Lt, cm.bind(Lt, o, Rg)));
          b = () => {
            E && E(), R && R(), Ga.delete(s);
          };
        }
      };
      return h(), [s, g, h, b];
    }
    return [s, Ga.get(s)[4]];
  };
  var Vg = (s, u, r, o, g) => {
    const b = r.errorRetryCount, p = g.retryCount, S = ~~((Math.random() + 0.5) * (1 << (p < 8 ? p : 8))) * r.errorRetryInterval;
    !An(b) && p > b || setTimeout(o, S, g);
  };
  var Zg = Zc;
  var [sf, kg] = Dm(/* @__PURE__ */ new Map());
  var Kg = Tl({ onLoadingSlow: Va, onSuccess: Va, onError: Va, onErrorRetry: Vg, onDiscarded: Va, revalidateOnFocus: true, revalidateOnReconnect: true, revalidateIfStale: true, shouldRetryOnError: true, errorRetryInterval: rm ? 1e4 : 5e3, focusThrottleInterval: 5 * 1e3, dedupingInterval: 2 * 1e3, loadingTimeout: rm ? 5e3 : 3e3, compare: Zg, isPaused: () => false, cache: sf, mutate: kg, fallback: {} }, qg);
  var Jg = (s, u) => {
    const r = Tl(s, u);
    if (u) {
      const { use: o, fallback: g } = s, { use: b, fallback: p } = u;
      o && b && (r.use = o.concat(b)), g && p && (r.fallback = Tl(g, p));
    }
    return r;
  };
  var fm = Fe.createContext({});
  var Fg = (s) => {
    const { value: u } = s, r = Fe.useContext(fm), o = Qa(u), g = Fe.useMemo(() => o ? u(r) : u, [o, r, u]), b = Fe.useMemo(() => o ? g : Jg(r, g), [o, r, g]), p = g && g.provider, S = Fe.useRef(Lt);
    p && !S.current && (S.current = Dm(p(b.cache || sf), g));
    const m = S.current;
    return m && (b.cache = m[0], b.mutate = m[1]), Lg(() => {
      if (m)
        return m[2] && m[2](), m[3];
    }, []), Fe.createElement(fm.Provider, Tl(s, { value: b }));
  };
  var Wg = "$inf$";
  var Mm = xr && window.__SWR_DEVTOOLS_USE__;
  var $g = Mm ? window.__SWR_DEVTOOLS_USE__ : [];
  var Pg = () => {
    Mm && (window.__SWR_DEVTOOLS_REACT__ = zu);
  };
  var Ig = (s) => (u, r, o) => s(u, r && ((...g) => {
    const [b] = Um(u), [, , , p] = Ga.get(sf);
    if (b.startsWith(Wg))
      return r(...g);
    const S = p[b];
    return An(S) ? r(...g) : (delete p[b], S);
  }), o);
  $g.concat(Ig);
  Pg();
  zu.use;
  Promise.resolve(Lt);
  var ev = Sr.defineProperty(Fg, "defaultValue", { value: Kg });
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
  var $c = { type: "error", data: "parser error" };
  var Bm = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
  var qm = typeof ArrayBuffer == "function";
  var Hm = (s) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(s) : s && s.buffer instanceof ArrayBuffer;
  var rf = ({ type: s, data: u }, r, o) => Bm && u instanceof Blob ? r ? o(u) : hm(u, o) : qm && (u instanceof ArrayBuffer || Hm(u)) ? r ? o(u) : hm(new Blob([u]), o) : o(Yn[s] + (u || ""));
  var hm = (s, u) => {
    const r = new FileReader();
    return r.onload = function() {
      const o = r.result.split(",")[1];
      u("b" + (o || ""));
    }, r.readAsDataURL(s);
  };
  function dm(s) {
    return s instanceof Uint8Array ? s : s instanceof ArrayBuffer ? new Uint8Array(s) : new Uint8Array(s.buffer, s.byteOffset, s.byteLength);
  }
  var Qc;
  function tv(s, u) {
    if (Bm && s.data instanceof Blob)
      return s.data.arrayBuffer().then(dm).then(u);
    if (qm && (s.data instanceof ArrayBuffer || Hm(s.data)))
      return u(dm(s.data));
    rf(s, false, (r) => {
      Qc || (Qc = new TextEncoder()), u(Qc.encode(r));
    });
  }
  var pm = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var Nu = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (let s = 0; s < pm.length; s++)
    Nu[pm.charCodeAt(s)] = s;
  var nv = (s) => {
    let u = s.length * 0.75, r = s.length, o, g = 0, b, p, S, m;
    s[s.length - 1] === "=" && (u--, s[s.length - 2] === "=" && u--);
    const h = new ArrayBuffer(u), E = new Uint8Array(h);
    for (o = 0; o < r; o += 4)
      b = Nu[s.charCodeAt(o)], p = Nu[s.charCodeAt(o + 1)], S = Nu[s.charCodeAt(o + 2)], m = Nu[s.charCodeAt(o + 3)], E[g++] = b << 2 | p >> 4, E[g++] = (p & 15) << 4 | S >> 2, E[g++] = (S & 3) << 6 | m & 63;
    return h;
  };
  var av = typeof ArrayBuffer == "function";
  var of = (s, u) => {
    if (typeof s != "string")
      return { type: "message", data: Lm(s, u) };
    const r = s.charAt(0);
    return r === "b" ? { type: "message", data: lv(s.substring(1), u) } : gr[r] ? s.length > 1 ? { type: gr[r], data: s.substring(1) } : { type: gr[r] } : $c;
  };
  var lv = (s, u) => {
    if (av) {
      const r = nv(s);
      return Lm(r, u);
    } else
      return { base64: true, data: s };
  };
  var Lm = (s, u) => {
    switch (u) {
      case "blob":
        return s instanceof Blob ? s : new Blob([s]);
      case "arraybuffer":
      default:
        return s instanceof ArrayBuffer ? s : s.buffer;
    }
  };
  var Ym = "";
  var iv = (s, u) => {
    const r = s.length, o = new Array(r);
    let g = 0;
    s.forEach((b, p) => {
      rf(b, false, (S) => {
        o[p] = S, ++g === r && u(o.join(Ym));
      });
    });
  };
  var uv = (s, u) => {
    const r = s.split(Ym), o = [];
    for (let g = 0; g < r.length; g++) {
      const b = of(r[g], u);
      if (o.push(b), b.type === "error")
        break;
    }
    return o;
  };
  function sv() {
    return new TransformStream({ transform(s, u) {
      tv(s, (r) => {
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
  var Vc;
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
  function rv(s, u) {
    Vc || (Vc = new TextDecoder());
    const r = [];
    let o = 0, g = -1, b = false;
    return new TransformStream({ transform(p, S) {
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
          const m = pr(r, 8), h = new DataView(m.buffer, m.byteOffset, m.length), E = h.getUint32(0);
          if (E > Math.pow(2, 21) - 1) {
            S.enqueue($c);
            break;
          }
          g = E * Math.pow(2, 32) + h.getUint32(4), o = 3;
        } else {
          if (dr(r) < g)
            break;
          const m = pr(r, g);
          S.enqueue(of(b ? m : Vc.decode(m), u)), o = 0;
        }
        if (g === 0 || g > s) {
          S.enqueue($c);
          break;
        }
      }
    } });
  }
  var Xm = 4;
  function rt(s) {
    if (s)
      return ov(s);
  }
  function ov(s) {
    for (var u in rt.prototype)
      s[u] = rt.prototype[u];
    return s;
  }
  rt.prototype.on = rt.prototype.addEventListener = function(s, u) {
    return this._callbacks = this._callbacks || {}, (this._callbacks["$" + s] = this._callbacks["$" + s] || []).push(u), this;
  };
  rt.prototype.once = function(s, u) {
    function r() {
      this.off(s, r), u.apply(this, arguments);
    }
    return r.fn = u, this.on(s, r), this;
  };
  rt.prototype.off = rt.prototype.removeListener = rt.prototype.removeAllListeners = rt.prototype.removeEventListener = function(s, u) {
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
  rt.prototype.emit = function(s) {
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
  rt.prototype.emitReserved = rt.prototype.emit;
  rt.prototype.listeners = function(s) {
    return this._callbacks = this._callbacks || {}, this._callbacks["$" + s] || [];
  };
  rt.prototype.hasListeners = function(s) {
    return !!this.listeners(s).length;
  };
  var dn = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
  function Gm(s, ...u) {
    return u.reduce((r, o) => (s.hasOwnProperty(o) && (r[o] = s[o]), r), {});
  }
  var cv = dn.setTimeout;
  var fv = dn.clearTimeout;
  function Er(s, u) {
    u.useNativeTimers ? (s.setTimeoutFn = cv.bind(dn), s.clearTimeoutFn = fv.bind(dn)) : (s.setTimeoutFn = dn.setTimeout.bind(dn), s.clearTimeoutFn = dn.clearTimeout.bind(dn));
  }
  var hv = 1.33;
  function dv(s) {
    return typeof s == "string" ? pv(s) : Math.ceil((s.byteLength || s.size) * hv);
  }
  function pv(s) {
    let u = 0, r = 0;
    for (let o = 0, g = s.length; o < g; o++)
      u = s.charCodeAt(o), u < 128 ? r += 1 : u < 2048 ? r += 2 : u < 55296 || u >= 57344 ? r += 3 : (o++, r += 4);
    return r;
  }
  function mv(s) {
    let u = "";
    for (let r in s)
      s.hasOwnProperty(r) && (u.length && (u += "&"), u += encodeURIComponent(r) + "=" + encodeURIComponent(s[r]));
    return u;
  }
  function yv(s) {
    let u = {}, r = s.split("&");
    for (let o = 0, g = r.length; o < g; o++) {
      let b = r[o].split("=");
      u[decodeURIComponent(b[0])] = decodeURIComponent(b[1]);
    }
    return u;
  }
  var gv = class extends Error {
    constructor(u, r, o) {
      super(u), this.description = r, this.context = o, this.type = "TransportError";
    }
  };
  var cf = class extends rt {
    constructor(u) {
      super(), this.writable = false, Er(this, u), this.opts = u, this.query = u.query, this.socket = u.socket;
    }
    onError(u, r, o) {
      return super.emitReserved("error", new gv(u, r, o)), this;
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
      const r = of(u, this.socket.binaryType);
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
      const r = mv(u);
      return r.length ? "?" + r : "";
    }
  };
  var Qm = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split("");
  var Pc = 64;
  var vv = {};
  var mm = 0;
  var mr = 0;
  var ym;
  function gm(s) {
    let u = "";
    do
      u = Qm[s % Pc] + u, s = Math.floor(s / Pc);
    while (s > 0);
    return u;
  }
  function Vm() {
    const s = gm(+new Date());
    return s !== ym ? (mm = 0, ym = s) : s + "." + gm(mm++);
  }
  for (; mr < Pc; mr++)
    vv[Qm[mr]] = mr;
  var Zm = false;
  try {
    Zm = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
  } catch (s) {
  }
  var bv = Zm;
  function km(s) {
    const u = s.xdomain;
    try {
      if (typeof XMLHttpRequest < "u" && (!u || bv))
        return new XMLHttpRequest();
    } catch (r) {
    }
    if (!u)
      try {
        return new dn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
      } catch (r) {
      }
  }
  function Sv() {
  }
  var xv = function() {
    return new km({ xdomain: false }).responseType != null;
  }();
  var Ev = class extends cf {
    constructor(u) {
      if (super(u), this.polling = false, typeof location < "u") {
        const o = location.protocol === "https:";
        let g = location.port;
        g || (g = o ? "443" : "80"), this.xd = typeof location < "u" && u.hostname !== location.hostname || g !== u.port;
      }
      const r = u && u.forceBase64;
      this.supportsBinary = xv && !r, this.opts.withCredentials && (this.cookieJar = void 0);
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
      uv(u, this.socket.binaryType).forEach(r), this.readyState !== "closed" && (this.polling = false, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll());
    }
    doClose() {
      const u = () => {
        this.write([{ type: "close" }]);
      };
      this.readyState === "open" ? u() : this.once("open", u);
    }
    write(u) {
      this.writable = false, iv(u, (r) => {
        this.doWrite(r, () => {
          this.writable = true, this.emitReserved("drain");
        });
      });
    }
    uri() {
      const u = this.opts.secure ? "https" : "http", r = this.query || {};
      return this.opts.timestampRequests !== false && (r[this.opts.timestampParam] = Vm()), !this.supportsBinary && !r.sid && (r.b64 = 1), this.createUri(u, r);
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
  var Ln = class extends rt {
    constructor(u, r) {
      super(), Er(this, r), this.opts = r, this.method = r.method || "GET", this.uri = u, this.data = r.data !== void 0 ? r.data : null, this.create();
    }
    create() {
      var u;
      const r = Gm(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
      r.xdomain = !!this.opts.xd;
      const o = this.xhr = new km(r);
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
        if (this.xhr.onreadystatechange = Sv, u)
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
      attachEvent("onunload", vm);
    else if (typeof addEventListener == "function") {
      const s = "onpagehide" in dn ? "pagehide" : "unload";
      addEventListener(s, vm, false);
    }
  }
  function vm() {
    for (let s in Ln.requests)
      Ln.requests.hasOwnProperty(s) && Ln.requests[s].abort();
  }
  var ff = typeof Promise == "function" && typeof Promise.resolve == "function" ? (s) => Promise.resolve().then(s) : (s, u) => u(s, 0);
  var yr = dn.WebSocket || dn.MozWebSocket;
  var bm = true;
  var Tv = "arraybuffer";
  var Sm = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
  var _v = class extends cf {
    constructor(u) {
      super(u), this.supportsBinary = !u.forceBase64;
    }
    get name() {
      return "websocket";
    }
    doOpen() {
      if (!this.check())
        return;
      const u = this.uri(), r = this.opts.protocols, o = Sm ? {} : Gm(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
      this.opts.extraHeaders && (o.headers = this.opts.extraHeaders);
      try {
        this.ws = bm && !Sm ? r ? new yr(u, r) : new yr(u) : new yr(u, r, o);
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
        rf(o, this.supportsBinary, (b) => {
          try {
            bm && this.ws.send(b);
          } catch (p) {
          }
          g && ff(() => {
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
      return this.opts.timestampRequests && (r[this.opts.timestampParam] = Vm()), this.supportsBinary || (r.b64 = 1), this.createUri(u, r);
    }
    check() {
      return !!yr;
    }
  };
  var Av = class extends cf {
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
          const r = rv(Number.MAX_SAFE_INTEGER, this.socket.binaryType), o = u.readable.pipeThrough(r).getReader(), g = sv();
          g.readable.pipeTo(u.writable), this.writer = g.writable.getWriter();
          const b = () => {
            o.read().then(({ done: S, value: m }) => {
              S || (this.onPacket(m), b());
            }).catch((S) => {
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
          g && ff(() => {
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
  var Ov = { websocket: _v, webtransport: Av, polling: Ev };
  var wv = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
  var Rv = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
  function Ic(s) {
    if (s.length > 2e3)
      throw "URI too long";
    const u = s, r = s.indexOf("["), o = s.indexOf("]");
    r != -1 && o != -1 && (s = s.substring(0, r) + s.substring(r, o).replace(/:/g, ";") + s.substring(o, s.length));
    let g = wv.exec(s || ""), b = {}, p = 14;
    for (; p--; )
      b[Rv[p]] = g[p] || "";
    return r != -1 && o != -1 && (b.source = u, b.host = b.host.substring(1, b.host.length - 1).replace(/;/g, ":"), b.authority = b.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), b.ipv6uri = true), b.pathNames = Cv(b, b.path), b.queryKey = Nv(b, b.query), b;
  }
  function Cv(s, u) {
    const r = /\/{2,9}/g, o = u.replace(r, "/").split("/");
    return (u.slice(0, 1) == "/" || u.length === 0) && o.splice(0, 1), u.slice(-1) == "/" && o.splice(o.length - 1, 1), o;
  }
  function Nv(s, u) {
    const r = {};
    return u.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(o, g, b) {
      g && (r[g] = b);
    }), r;
  }
  var Km = class Si extends rt {
    constructor(u, r = {}) {
      super(), this.binaryType = Tv, this.writeBuffer = [], u && typeof u == "object" && (r = u, u = null), u ? (u = Ic(u), r.hostname = u.host, r.secure = u.protocol === "https" || u.protocol === "wss", r.port = u.port, u.query && (r.query = u.query)) : r.host && (r.hostname = Ic(r.host).host), Er(this, r), this.secure = r.secure != null ? r.secure : typeof location < "u" && location.protocol === "https:", r.hostname && !r.port && (r.port = this.secure ? "443" : "80"), this.hostname = r.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = r.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = r.transports || ["polling", "websocket", "webtransport"], this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({ path: "/engine.io", agent: false, withCredentials: false, upgrade: true, timestampParam: "t", rememberUpgrade: false, addTrailingSlash: true, rejectUnauthorized: true, perMessageDeflate: { threshold: 1024 }, transportOptions: {}, closeOnBeforeunload: false }, r), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = yv(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
        this.transport && (this.transport.removeAllListeners(), this.transport.close());
      }, addEventListener("beforeunload", this.beforeunloadEventListener, false)), this.hostname !== "localhost" && (this.offlineEventListener = () => {
        this.onClose("transport close", { description: "network connection lost" });
      }, addEventListener("offline", this.offlineEventListener, false))), this.open();
    }
    createTransport(u) {
      const r = Object.assign({}, this.opts.query);
      r.EIO = Xm, r.transport = u, this.id && (r.sid = this.id);
      const o = Object.assign({}, this.opts, { query: r, socket: this, hostname: this.hostname, secure: this.secure, port: this.port }, this.opts.transportOptions[u]);
      return new Ov[u](o);
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
                o || this.readyState !== "closed" && (E(), this.setTransport(r), r.send([{ type: "upgrade" }]), this.emitReserved("upgrade", r), r = null, this.upgrading = false, this.flush());
              });
            } else {
              const X = new Error("probe error");
              X.transport = r.name, this.emitReserved("upgradeError", X);
            }
        }));
      };
      function b() {
        o || (o = true, E(), r.close(), r = null);
      }
      const p = (R) => {
        const X = new Error("probe error: " + R);
        X.transport = r.name, b(), this.emitReserved("upgradeError", X);
      };
      function S() {
        p("transport closed");
      }
      function m() {
        p("socket closed");
      }
      function h(R) {
        r && R.name !== r.name && b();
      }
      const E = () => {
        r.removeListener("open", g), r.removeListener("error", p), r.removeListener("close", S), this.off("close", m), this.off("upgrading", h);
      };
      r.once("open", g), r.once("error", p), r.once("close", S), this.once("close", m), this.once("upgrading", h), this.upgrades.indexOf("webtransport") !== -1 && u !== "webtransport" ? this.setTimeoutFn(() => {
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
        if (o && (u += dv(o)), r > 0 && u > this.maxPayload)
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
  Km.protocol = Xm;
  function zv(s, u = "", r) {
    let o = s;
    r = r || typeof location < "u" && location, s == null && (s = r.protocol + "//" + r.host), typeof s == "string" && (s.charAt(0) === "/" && (s.charAt(1) === "/" ? s = r.protocol + s : s = r.host + s), /^(https?|wss?):\/\//.test(s) || (typeof r < "u" ? s = r.protocol + "//" + s : s = "https://" + s), o = Ic(s)), o.port || (/^(http|ws)$/.test(o.protocol) ? o.port = "80" : /^(http|ws)s$/.test(o.protocol) && (o.port = "443")), o.path = o.path || "/";
    const g = o.host.indexOf(":") !== -1 ? "[" + o.host + "]" : o.host;
    return o.id = o.protocol + "://" + g + ":" + o.port + u, o.href = o.protocol + "://" + g + (r && r.port === o.port ? "" : ":" + o.port), o;
  }
  var jv = typeof ArrayBuffer == "function";
  var Uv = (s) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(s) : s.buffer instanceof ArrayBuffer;
  var Jm = Object.prototype.toString;
  var Dv = typeof Blob == "function" || typeof Blob < "u" && Jm.call(Blob) === "[object BlobConstructor]";
  var Mv = typeof File == "function" || typeof File < "u" && Jm.call(File) === "[object FileConstructor]";
  function hf(s) {
    return jv && (s instanceof ArrayBuffer || Uv(s)) || Dv && s instanceof Blob || Mv && s instanceof File;
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
    if (hf(s))
      return true;
    if (s.toJSON && typeof s.toJSON == "function" && arguments.length === 1)
      return vr(s.toJSON(), true);
    for (const r in s)
      if (Object.prototype.hasOwnProperty.call(s, r) && vr(s[r]))
        return true;
    return false;
  }
  function Bv(s) {
    const u = [], r = s.data, o = s;
    return o.data = ef(r, u), o.attachments = u.length, { packet: o, buffers: u };
  }
  function ef(s, u) {
    if (!s)
      return s;
    if (hf(s)) {
      const r = { _placeholder: true, num: u.length };
      return u.push(s), r;
    } else if (Array.isArray(s)) {
      const r = new Array(s.length);
      for (let o = 0; o < s.length; o++)
        r[o] = ef(s[o], u);
      return r;
    } else if (typeof s == "object" && !(s instanceof Date)) {
      const r = {};
      for (const o in s)
        Object.prototype.hasOwnProperty.call(s, o) && (r[o] = ef(s[o], u));
      return r;
    }
    return s;
  }
  function qv(s, u) {
    return s.data = tf(s.data, u), delete s.attachments, s;
  }
  function tf(s, u) {
    if (!s)
      return s;
    if (s && s._placeholder === true) {
      if (typeof s.num == "number" && s.num >= 0 && s.num < u.length)
        return u[s.num];
      throw new Error("illegal attachments");
    } else if (Array.isArray(s))
      for (let r = 0; r < s.length; r++)
        s[r] = tf(s[r], u);
    else if (typeof s == "object")
      for (const r in s)
        Object.prototype.hasOwnProperty.call(s, r) && (s[r] = tf(s[r], u));
    return s;
  }
  var Hv = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"];
  var Lv = 5;
  var Oe;
  (function(s) {
    s[s.CONNECT = 0] = "CONNECT", s[s.DISCONNECT = 1] = "DISCONNECT", s[s.EVENT = 2] = "EVENT", s[s.ACK = 3] = "ACK", s[s.CONNECT_ERROR = 4] = "CONNECT_ERROR", s[s.BINARY_EVENT = 5] = "BINARY_EVENT", s[s.BINARY_ACK = 6] = "BINARY_ACK";
  })(Oe || (Oe = {}));
  var Yv = class {
    constructor(u) {
      this.replacer = u;
    }
    encode(u) {
      return (u.type === Oe.EVENT || u.type === Oe.ACK) && vr(u) ? this.encodeAsBinary({ type: u.type === Oe.EVENT ? Oe.BINARY_EVENT : Oe.BINARY_ACK, nsp: u.nsp, data: u.data, id: u.id }) : [this.encodeAsString(u)];
    }
    encodeAsString(u) {
      let r = "" + u.type;
      return (u.type === Oe.BINARY_EVENT || u.type === Oe.BINARY_ACK) && (r += u.attachments + "-"), u.nsp && u.nsp !== "/" && (r += u.nsp + ","), u.id != null && (r += u.id), u.data != null && (r += JSON.stringify(u.data, this.replacer)), r;
    }
    encodeAsBinary(u) {
      const r = Bv(u), o = this.encodeAsString(r.packet), g = r.buffers;
      return g.unshift(o), g;
    }
  };
  function xm(s) {
    return Object.prototype.toString.call(s) === "[object Object]";
  }
  var df = class extends rt {
    constructor(u) {
      super(), this.reviver = u;
    }
    add(u) {
      let r;
      if (typeof u == "string") {
        if (this.reconstructor)
          throw new Error("got plaintext data when reconstructing a packet");
        r = this.decodeString(u);
        const o = r.type === Oe.BINARY_EVENT;
        o || r.type === Oe.BINARY_ACK ? (r.type = o ? Oe.EVENT : Oe.ACK, this.reconstructor = new Xv(r), r.attachments === 0 && super.emitReserved("decoded", r)) : super.emitReserved("decoded", r);
      } else if (hf(u) || u.base64)
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
      if (Oe[o.type] === void 0)
        throw new Error("unknown packet type " + o.type);
      if (o.type === Oe.BINARY_EVENT || o.type === Oe.BINARY_ACK) {
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
        if (df.isPayloadValid(o.type, b))
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
        case Oe.CONNECT:
          return xm(r);
        case Oe.DISCONNECT:
          return r === void 0;
        case Oe.CONNECT_ERROR:
          return typeof r == "string" || xm(r);
        case Oe.EVENT:
        case Oe.BINARY_EVENT:
          return Array.isArray(r) && (typeof r[0] == "number" || typeof r[0] == "string" && Hv.indexOf(r[0]) === -1);
        case Oe.ACK:
        case Oe.BINARY_ACK:
          return Array.isArray(r);
      }
    }
    destroy() {
      this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
    }
  };
  var Xv = class {
    constructor(u) {
      this.packet = u, this.buffers = [], this.reconPack = u;
    }
    takeBinaryData(u) {
      if (this.buffers.push(u), this.buffers.length === this.reconPack.attachments) {
        const r = qv(this.reconPack, this.buffers);
        return this.finishedReconstruction(), r;
      }
      return null;
    }
    finishedReconstruction() {
      this.reconPack = null, this.buffers = [];
    }
  };
  var Gv = Object.freeze(Object.defineProperty({ __proto__: null, Decoder: df, Encoder: Yv, get PacketType() {
    return Oe;
  }, protocol: Lv }, Symbol.toStringTag, { value: "Module" }));
  function _n(s, u, r) {
    return s.on(u, r), function() {
      s.off(u, r);
    };
  }
  var Qv = Object.freeze({ connect: 1, connect_error: 1, disconnect: 1, disconnecting: 1, newListener: 1, removeListener: 1 });
  var Fm = class extends rt {
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
      this.subs = [_n(u, "open", this.onopen.bind(this)), _n(u, "packet", this.onpacket.bind(this)), _n(u, "error", this.onerror.bind(this)), _n(u, "close", this.onclose.bind(this))];
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
      if (Qv.hasOwnProperty(u))
        throw new Error('"' + u.toString() + '" is a reserved event name');
      if (r.unshift(u), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
        return this._addToQueue(r), this;
      const o = { type: Oe.EVENT, data: r };
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
        r.push((p, S) => o ? p ? b(p) : g(S) : g(p)), this.emit(u, ...r);
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
      this.packet({ type: Oe.CONNECT, data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, u) : u });
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
          case Oe.CONNECT:
            u.data && u.data.sid ? this.onconnect(u.data.sid, u.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
            break;
          case Oe.EVENT:
          case Oe.BINARY_EVENT:
            this.onevent(u);
            break;
          case Oe.ACK:
          case Oe.BINARY_ACK:
            this.onack(u);
            break;
          case Oe.DISCONNECT:
            this.ondisconnect();
            break;
          case Oe.CONNECT_ERROR:
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
        o || (o = true, r.packet({ type: Oe.ACK, id: u, data: g }));
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
      return this.connected && this.packet({ type: Oe.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
  function Ei(s) {
    s = s || {}, this.ms = s.min || 100, this.max = s.max || 1e4, this.factor = s.factor || 2, this.jitter = s.jitter > 0 && s.jitter <= 1 ? s.jitter : 0, this.attempts = 0;
  }
  Ei.prototype.duration = function() {
    var s = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
      var u = Math.random(), r = Math.floor(u * this.jitter * s);
      s = (Math.floor(u * 10) & 1) == 0 ? s - r : s + r;
    }
    return Math.min(s, this.max) | 0;
  };
  Ei.prototype.reset = function() {
    this.attempts = 0;
  };
  Ei.prototype.setMin = function(s) {
    this.ms = s;
  };
  Ei.prototype.setMax = function(s) {
    this.max = s;
  };
  Ei.prototype.setJitter = function(s) {
    this.jitter = s;
  };
  var nf = class extends rt {
    constructor(u, r) {
      var o;
      super(), this.nsps = {}, this.subs = [], u && typeof u == "object" && (r = u, u = void 0), r = r || {}, r.path = r.path || "/socket.io", this.opts = r, Er(this, r), this.reconnection(r.reconnection !== false), this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0), this.reconnectionDelay(r.reconnectionDelay || 1e3), this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3), this.randomizationFactor((o = r.randomizationFactor) !== null && o !== void 0 ? o : 0.5), this.backoff = new Ei({ min: this.reconnectionDelay(), max: this.reconnectionDelayMax(), jitter: this.randomizationFactor() }), this.timeout(r.timeout == null ? 2e4 : r.timeout), this._readyState = "closed", this.uri = u;
      const g = r.parser || Gv;
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
      this.engine = new Km(this.uri, this.opts);
      const r = this.engine, o = this;
      this._readyState = "opening", this.skipReconnect = false;
      const g = _n(r, "open", function() {
        o.onopen(), u && u();
      }), b = (S) => {
        this.cleanup(), this._readyState = "closed", this.emitReserved("error", S), u ? u(S) : this.maybeReconnectOnOpen();
      }, p = _n(r, "error", b);
      if (this._timeout !== false) {
        const S = this._timeout, m = this.setTimeoutFn(() => {
          g(), b(new Error("timeout")), r.close();
        }, S);
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
      this.subs.push(_n(u, "ping", this.onping.bind(this)), _n(u, "data", this.ondata.bind(this)), _n(u, "error", this.onerror.bind(this)), _n(u, "close", this.onclose.bind(this)), _n(this.decoder, "decoded", this.ondecoded.bind(this)));
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
      ff(() => {
        this.emitReserved("packet", u);
      }, this.setTimeoutFn);
    }
    onerror(u) {
      this.emitReserved("error", u);
    }
    socket(u, r) {
      let o = this.nsps[u];
      return o ? this._autoConnect && !o.active && o.connect() : (o = new Fm(this, u, r), this.nsps[u] = o), o;
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
  var Cu = {};
  function br(s, u) {
    typeof s == "object" && (u = s, s = void 0), u = u || {};
    const r = zv(s, u.path || "/socket.io"), o = r.source, g = r.id, b = r.path, p = Cu[g] && b in Cu[g].nsps, S = u.forceNew || u["force new connection"] || u.multiplex === false || p;
    let m;
    return S ? m = new nf(o, u) : (Cu[g] || (Cu[g] = new nf(o, u)), m = Cu[g]), r.query && !u.query && (u.query = r.queryKey), m.socket(r.path, u);
  }
  Object.assign(br, { Manager: nf, Socket: Fm, io: br, connect: br });
  var Vv = class {
    constructor(u, r, o, g) {
      El(this, "socket_port"), El(this, "host"), El(this, "port"), El(this, "protocol"), El(this, "url"), El(this, "site_name"), El(this, "socket");
      var b, p, S, m;
      if (this.socket_port = o != null ? o : "9000", this.host = (b = window.location) == null ? void 0 : b.hostname, this.port = (p = window.location) != null && p.port ? `:${this.socket_port}` : "", this.protocol = ((S = window.location) == null ? void 0 : S.protocol) === "https:" ? "https" : "http", u) {
        let h = new URL(u);
        h.port = "", o ? (h.port = o, this.url = h.toString()) : this.url = h.toString();
      } else
        this.url = `${this.protocol}://${this.host}${this.port}/`;
      r && (this.url = `${this.url}${r}`), this.site_name = r, this.socket = br(`${this.url}`, { withCredentials: true, secure: this.protocol === "https", extraHeaders: g && g.useToken === true ? { Authorization: `${g.type} ${(m = g.token) == null ? void 0 : m.call(g)}` } : {} });
    }
  };
  var Zv = Fe.createContext(null);
  var kv = ({ url: s = "", tokenParams: u, socketPort: r, swrConfig: o, siteName: g, enableSocket: b = true, children: p, customHeaders: S }) => {
    const m = Fe.useMemo(() => {
      const h = new _g.FrappeApp(s, u, void 0, S);
      return { url: s, tokenParams: u, app: h, auth: h.auth(), db: h.db(), call: h.call(), file: h.file(), socket: b ? new Vv(s, g, r, u).socket : void 0, enableSocket: b, socketPort: r };
    }, [s, u, r, b, S]);
    return j.jsx(Zv.Provider, { value: m, children: j.jsx(ev, { value: o, children: p }) });
  };
  var Kv = (s) => {
    var u;
    return j.jsx(kv, { enableSocket: false, customHeaders: { "x-frappe-csrf-token": (u = window.frappe) == null ? void 0 : u.csrf_token }, children: s.children });
  };
  Object.keys(Qp).map((s) => Qp[s]).filter((s) => s.component).map((s) => {
    const u = (r) => j.jsx(Kv, Ht(Ge({}, r), { children: j.jsx(s, {}) }));
    return customElements.get(s.component) || customElements.define(s.component, og(u, zu, gg)), { element: u, simulator: "simulator" in s ? s.simulator : void 0, renderInReact: "renderInReact" in s ? s.renderInReact : void 0, tag: s.component };
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
//# sourceMappingURL=index.bundle.VOZZGBD2.js.map
