(() => {
  // ../pms_system/pms_system/public/pms-ui/index.bundle.js
  var g0 = Object.defineProperty;
  var b0 = Object.defineProperties;
  var S0 = Object.getOwnPropertyDescriptors;
  var Dp = Object.getOwnPropertySymbols;
  var E0 = Object.prototype.hasOwnProperty;
  var T0 = Object.prototype.propertyIsEnumerable;
  var vu = (s, i) => (i = Symbol[s]) ? i : Symbol.for("Symbol." + s);
  var _0 = (s) => {
    throw TypeError(s);
  };
  var xp = (s, i, c) => i in s ? g0(s, i, { enumerable: true, configurable: true, writable: true, value: c }) : s[i] = c;
  var rn = (s, i) => {
    for (var c in i || (i = {}))
      E0.call(i, c) && xp(s, c, i[c]);
    if (Dp)
      for (var c of Dp(i))
        T0.call(i, c) && xp(s, c, i[c]);
    return s;
  };
  var Or = (s, i) => b0(s, S0(i));
  var ra = (s, i, c) => new Promise((o, g) => {
    var b = (y) => {
      try {
        E(c.next(y));
      } catch (h) {
        g(h);
      }
    }, m = (y) => {
      try {
        E(c.throw(y));
      } catch (h) {
        g(h);
      }
    }, E = (y) => y.done ? o(y.value) : Promise.resolve(y.value).then(b, m);
    E((c = c.apply(s, i)).next());
  });
  var bl = function(s, i) {
    this[0] = s, this[1] = i;
  };
  var Rr = (s, i, c) => {
    var o = (m, E, y, h) => {
      try {
        var T = c[m](E), w = (E = T.value) instanceof bl, X = T.done;
        Promise.resolve(w ? E[0] : E).then((z) => w ? o(m === "return" ? m : "next", E[1] ? { done: z.done, value: z.value } : z, y, h) : y({ value: z, done: X })).catch((z) => o("throw", z, y, h));
      } catch (z) {
        h(z);
      }
    }, g = (m) => b[m] = (E) => new Promise((y, h) => o(m, E, y, h)), b = {};
    return c = c.apply(s, i), b[vu("asyncIterator")] = () => b, g("next"), g("throw"), g("return"), b;
  };
  var zr = (s) => {
    var i = s[vu("asyncIterator")], c = false, o, g = {};
    return i == null ? (i = s[vu("iterator")](), o = (b) => g[b] = (m) => i[b](m)) : (i = i.call(s), o = (b) => g[b] = (m) => {
      if (c) {
        if (c = false, b === "throw")
          throw m;
        return m;
      }
      return c = true, { done: false, value: new bl(new Promise((E) => {
        var y = i[b](m);
        y instanceof Object || _0("Object expected"), E(y);
      }), 1) };
    }), g[vu("iterator")] = () => g, o("next"), "throw" in i ? o("throw") : g.throw = (b) => {
      throw b;
    }, "return" in i && o("return"), g;
  };
  var Mp = (s, i, c) => (i = s[vu("asyncIterator")]) ? i.call(s) : (s = s[vu("iterator")](), i = {}, c = (o, g) => (g = s[o]) && (i[o] = (b) => new Promise((m, E, y) => (b = g.call(s, b), y = b.done, Promise.resolve(b.value).then((h) => m({ value: h, done: y }), E)))), c("next"), c("return"), i);
  (function() {
    const i = document.createElement("link").relList;
    if (i && i.supports && i.supports("modulepreload"))
      return;
    for (const g of document.querySelectorAll('link[rel="modulepreload"]'))
      o(g);
    new MutationObserver((g) => {
      for (const b of g)
        if (b.type === "childList")
          for (const m of b.addedNodes)
            m.tagName === "LINK" && m.rel === "modulepreload" && o(m);
    }).observe(document, { childList: true, subtree: true });
    function c(g) {
      const b = {};
      return g.integrity && (b.integrity = g.integrity), g.referrerPolicy && (b.referrerPolicy = g.referrerPolicy), g.crossOrigin === "use-credentials" ? b.credentials = "include" : g.crossOrigin === "anonymous" ? b.credentials = "omit" : b.credentials = "same-origin", b;
    }
    function o(g) {
      if (g.ep)
        return;
      g.ep = true;
      const b = c(g);
      fetch(g.href, b);
    }
  })();
  function vy(s) {
    return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
  }
  var wr = { exports: {} };
  var _i = {};
  var Np;
  function A0() {
    if (Np)
      return _i;
    Np = 1;
    var s = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
    function c(o, g, b) {
      var m = null;
      if (b !== void 0 && (m = "" + b), g.key !== void 0 && (m = "" + g.key), "key" in g) {
        b = {};
        for (var E in g)
          E !== "key" && (b[E] = g[E]);
      } else
        b = g;
      return g = b.ref, { $$typeof: s, type: o, key: m, ref: g !== void 0 ? g : null, props: b };
    }
    return _i.Fragment = i, _i.jsx = c, _i.jsxs = c, _i;
  }
  var Bp;
  function O0() {
    return Bp || (Bp = 1, wr.exports = A0()), wr.exports;
  }
  var An = O0();
  var R0 = (s) => An.jsxs("label", { children: [s.label && An.jsx("div", { children: s.label }), An.jsx("input", { className: "ef-border ef-border-gray-400 ef-rounded ef-px-2 ef-py-1", onChange: (i) => s.onChange(i.target.value), type: "text", value: s.value })] });
  var z0 = (s, i) => {
    var o;
    const c = window.cur_frm;
    return c ? (o = c.set_value) == null ? void 0 : o.call(c, s, i) : null;
  };
  var w0 = () => {
    const s = window.cur_frm;
    return s ? s.doc : null;
  };
  var Ur = { exports: {} };
  var ft = {};
  var jp;
  function U0() {
    if (jp)
      return ft;
    jp = 1;
    var s = Symbol.for("react.transitional.element"), i = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), m = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), w = Symbol.for("react.activity"), X = Symbol.iterator;
    function z(R) {
      return R === null || typeof R != "object" ? null : (R = X && R[X] || R["@@iterator"], typeof R == "function" ? R : null);
    }
    var j = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } }, K = Object.assign, it = {};
    function yt(R, Q, W) {
      this.props = R, this.context = Q, this.refs = it, this.updater = W || j;
    }
    yt.prototype.isReactComponent = {}, yt.prototype.setState = function(R, Q) {
      if (typeof R != "object" && typeof R != "function" && R != null)
        throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, R, Q, "setState");
    }, yt.prototype.forceUpdate = function(R) {
      this.updater.enqueueForceUpdate(this, R, "forceUpdate");
    };
    function Dt() {
    }
    Dt.prototype = yt.prototype;
    function ht(R, Q, W) {
      this.props = R, this.context = Q, this.refs = it, this.updater = W || j;
    }
    var _t = ht.prototype = new Dt();
    _t.constructor = ht, K(_t, yt.prototype), _t.isPureReactComponent = true;
    var At = Array.isArray;
    function Lt() {
    }
    var ct = { H: null, A: null, T: null, S: null }, ue = Object.prototype.hasOwnProperty;
    function Ee(R, Q, W) {
      var I = W.ref;
      return { $$typeof: s, type: R, key: Q, ref: I !== void 0 ? I : null, props: W };
    }
    function hn(R, Q) {
      return Ee(R.type, Q, R.props);
    }
    function Te(R) {
      return typeof R == "object" && R !== null && R.$$typeof === s;
    }
    function ie(R) {
      var Q = { "=": "=0", ":": "=2" };
      return "$" + R.replace(/[=:]/g, function(W) {
        return Q[W];
      });
    }
    var _e = /\/+/g;
    function Ft(R, Q) {
      return typeof R == "object" && R !== null && R.key != null ? ie("" + R.key) : Q.toString(36);
    }
    function je(R) {
      switch (R.status) {
        case "fulfilled":
          return R.value;
        case "rejected":
          throw R.reason;
        default:
          switch (typeof R.status == "string" ? R.then(Lt, Lt) : (R.status = "pending", R.then(function(Q) {
            R.status === "pending" && (R.status = "fulfilled", R.value = Q);
          }, function(Q) {
            R.status === "pending" && (R.status = "rejected", R.reason = Q);
          })), R.status) {
            case "fulfilled":
              return R.value;
            case "rejected":
              throw R.reason;
          }
      }
      throw R;
    }
    function H(R, Q, W, I, ot) {
      var mt = typeof R;
      (mt === "undefined" || mt === "boolean") && (R = null);
      var Ot = false;
      if (R === null)
        Ot = true;
      else
        switch (mt) {
          case "bigint":
          case "string":
          case "number":
            Ot = true;
            break;
          case "object":
            switch (R.$$typeof) {
              case s:
              case i:
                Ot = true;
                break;
              case T:
                return Ot = R._init, H(Ot(R._payload), Q, W, I, ot);
            }
        }
      if (Ot)
        return ot = ot(R), Ot = I === "" ? "." + Ft(R, 0) : I, At(ot) ? (W = "", Ot != null && (W = Ot.replace(_e, "$&/") + "/"), H(ot, Q, W, "", function(Va) {
          return Va;
        })) : ot != null && (Te(ot) && (ot = hn(ot, W + (ot.key == null || R && R.key === ot.key ? "" : ("" + ot.key).replace(_e, "$&/") + "/") + Ot)), Q.push(ot)), 1;
      Ot = 0;
      var pe = I === "" ? "." : I + ":";
      if (At(R))
        for (var Zt = 0; Zt < R.length; Zt++)
          I = R[Zt], mt = pe + Ft(I, Zt), Ot += H(I, Q, W, mt, ot);
      else if (Zt = z(R), typeof Zt == "function")
        for (R = Zt.call(R), Zt = 0; !(I = R.next()).done; )
          I = I.value, mt = pe + Ft(I, Zt++), Ot += H(I, Q, W, mt, ot);
      else if (mt === "object") {
        if (typeof R.then == "function")
          return H(je(R), Q, W, I, ot);
        throw Q = String(R), Error("Objects are not valid as a React child (found: " + (Q === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}" : Q) + "). If you meant to render a collection of children, use an array instead.");
      }
      return Ot;
    }
    function F(R, Q, W) {
      if (R == null)
        return R;
      var I = [], ot = 0;
      return H(R, I, "", "", function(mt) {
        return Q.call(W, mt, ot++);
      }), I;
    }
    function nt(R) {
      if (R._status === -1) {
        var Q = R._result;
        Q = Q(), Q.then(function(W) {
          (R._status === 0 || R._status === -1) && (R._status = 1, R._result = W);
        }, function(W) {
          (R._status === 0 || R._status === -1) && (R._status = 2, R._result = W);
        }), R._status === -1 && (R._status = 0, R._result = Q);
      }
      if (R._status === 1)
        return R._result.default;
      throw R._result;
    }
    var wt = typeof reportError == "function" ? reportError : function(R) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var Q = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof R == "object" && R !== null && typeof R.message == "string" ? String(R.message) : String(R), error: R });
        if (!window.dispatchEvent(Q))
          return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", R);
        return;
      }
      console.error(R);
    }, Ut = { map: F, forEach: function(R, Q, W) {
      F(R, function() {
        Q.apply(this, arguments);
      }, W);
    }, count: function(R) {
      var Q = 0;
      return F(R, function() {
        Q++;
      }), Q;
    }, toArray: function(R) {
      return F(R, function(Q) {
        return Q;
      }) || [];
    }, only: function(R) {
      if (!Te(R))
        throw Error("React.Children.only expected to receive a single React element child.");
      return R;
    } };
    return ft.Activity = w, ft.Children = Ut, ft.Component = yt, ft.Fragment = c, ft.Profiler = g, ft.PureComponent = ht, ft.StrictMode = o, ft.Suspense = y, ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ct, ft.__COMPILER_RUNTIME = { __proto__: null, c: function(R) {
      return ct.H.useMemoCache(R);
    } }, ft.cache = function(R) {
      return function() {
        return R.apply(null, arguments);
      };
    }, ft.cacheSignal = function() {
      return null;
    }, ft.cloneElement = function(R, Q, W) {
      if (R == null)
        throw Error("The argument must be a React element, but you passed " + R + ".");
      var I = K({}, R.props), ot = R.key;
      if (Q != null)
        for (mt in Q.key !== void 0 && (ot = "" + Q.key), Q)
          !ue.call(Q, mt) || mt === "key" || mt === "__self" || mt === "__source" || mt === "ref" && Q.ref === void 0 || (I[mt] = Q[mt]);
      var mt = arguments.length - 2;
      if (mt === 1)
        I.children = W;
      else if (1 < mt) {
        for (var Ot = Array(mt), pe = 0; pe < mt; pe++)
          Ot[pe] = arguments[pe + 2];
        I.children = Ot;
      }
      return Ee(R.type, ot, I);
    }, ft.createContext = function(R) {
      return R = { $$typeof: m, _currentValue: R, _currentValue2: R, _threadCount: 0, Provider: null, Consumer: null }, R.Provider = R, R.Consumer = { $$typeof: b, _context: R }, R;
    }, ft.createElement = function(R, Q, W) {
      var I, ot = {}, mt = null;
      if (Q != null)
        for (I in Q.key !== void 0 && (mt = "" + Q.key), Q)
          ue.call(Q, I) && I !== "key" && I !== "__self" && I !== "__source" && (ot[I] = Q[I]);
      var Ot = arguments.length - 2;
      if (Ot === 1)
        ot.children = W;
      else if (1 < Ot) {
        for (var pe = Array(Ot), Zt = 0; Zt < Ot; Zt++)
          pe[Zt] = arguments[Zt + 2];
        ot.children = pe;
      }
      if (R && R.defaultProps)
        for (I in Ot = R.defaultProps, Ot)
          ot[I] === void 0 && (ot[I] = Ot[I]);
      return Ee(R, mt, ot);
    }, ft.createRef = function() {
      return { current: null };
    }, ft.forwardRef = function(R) {
      return { $$typeof: E, render: R };
    }, ft.isValidElement = Te, ft.lazy = function(R) {
      return { $$typeof: T, _payload: { _status: -1, _result: R }, _init: nt };
    }, ft.memo = function(R, Q) {
      return { $$typeof: h, type: R, compare: Q === void 0 ? null : Q };
    }, ft.startTransition = function(R) {
      var Q = ct.T, W = {};
      ct.T = W;
      try {
        var I = R(), ot = ct.S;
        ot !== null && ot(W, I), typeof I == "object" && I !== null && typeof I.then == "function" && I.then(Lt, wt);
      } catch (mt) {
        wt(mt);
      } finally {
        Q !== null && W.types !== null && (Q.types = W.types), ct.T = Q;
      }
    }, ft.unstable_useCacheRefresh = function() {
      return ct.H.useCacheRefresh();
    }, ft.use = function(R) {
      return ct.H.use(R);
    }, ft.useActionState = function(R, Q, W) {
      return ct.H.useActionState(R, Q, W);
    }, ft.useCallback = function(R, Q) {
      return ct.H.useCallback(R, Q);
    }, ft.useContext = function(R) {
      return ct.H.useContext(R);
    }, ft.useDebugValue = function() {
    }, ft.useDeferredValue = function(R, Q) {
      return ct.H.useDeferredValue(R, Q);
    }, ft.useEffect = function(R, Q) {
      return ct.H.useEffect(R, Q);
    }, ft.useEffectEvent = function(R) {
      return ct.H.useEffectEvent(R);
    }, ft.useId = function() {
      return ct.H.useId();
    }, ft.useImperativeHandle = function(R, Q, W) {
      return ct.H.useImperativeHandle(R, Q, W);
    }, ft.useInsertionEffect = function(R, Q) {
      return ct.H.useInsertionEffect(R, Q);
    }, ft.useLayoutEffect = function(R, Q) {
      return ct.H.useLayoutEffect(R, Q);
    }, ft.useMemo = function(R, Q) {
      return ct.H.useMemo(R, Q);
    }, ft.useOptimistic = function(R, Q) {
      return ct.H.useOptimistic(R, Q);
    }, ft.useReducer = function(R, Q, W) {
      return ct.H.useReducer(R, Q, W);
    }, ft.useRef = function(R) {
      return ct.H.useRef(R);
    }, ft.useState = function(R) {
      return ct.H.useState(R);
    }, ft.useSyncExternalStore = function(R, Q, W) {
      return ct.H.useSyncExternalStore(R, Q, W);
    }, ft.useTransition = function() {
      return ct.H.useTransition();
    }, ft.version = "19.2.0", ft;
  }
  var qp;
  function tf() {
    return qp || (qp = 1, Ur.exports = U0()), Ur.exports;
  }
  var Je = tf();
  var Ui = vy(Je);
  var ef = () => {
    var c;
    const [s, i] = Je.useState((c = w0()) == null ? void 0 : c.client_name);
    return Je.useEffect(() => {
      z0("client_name", s);
    }, [s]), An.jsx(An.Fragment, { children: An.jsx(R0, { value: s, onChange: i, label: "Client Name" }) });
  };
  ef.component = "pms-demo-component";
  ef.simulator = { doctype: "Appraisal Cycle", docname: "2025-26" };
  var Hp = Object.freeze(Object.defineProperty({ __proto__: null, DemoComponent: ef }, Symbol.toStringTag, { value: "Module" }));
  var C0 = Object.defineProperty;
  var D0 = (s, i, c) => i in s ? C0(s, i, { enumerable: true, configurable: true, writable: true, value: c }) : s[i] = c;
  var ic = (s, i, c) => D0(s, typeof i != "symbol" ? i + "" : i, c);
  var x0 = { stringify: (s) => s ? "true" : "false", parse: (s) => /^[ty1-9]/i.test(s) };
  var M0 = { stringify: (s) => s.name, parse: (s, i, c) => {
    const o = (() => {
      if (typeof window < "u" && s in window)
        return window[s];
      if (typeof global < "u" && s in global)
        return global[s];
    })();
    return typeof o == "function" ? o.bind(c) : void 0;
  } };
  var N0 = { stringify: (s) => JSON.stringify(s), parse: (s) => JSON.parse(s) };
  function B0(s) {
    return s.replace(/([a-z0-9])([A-Z])/g, (i, c, o) => `${c}-${o.toLowerCase()}`);
  }
  function gy(s) {
    return s.replace(/[-:]([a-z])/g, (i, c) => `${c.toUpperCase()}`);
  }
  var j0 = { stringify: (s) => s.name, parse: (s, i, c) => {
    const o = (() => {
      const g = gy(i);
      if (typeof c < "u" && g in c.container)
        return c.container[g];
    })();
    return typeof o == "function" ? o.bind(c) : void 0;
  } };
  var q0 = { stringify: (s) => `${s}`, parse: (s) => parseFloat(s) };
  var H0 = { stringify: (s) => s, parse: (s) => s };
  var Cr = { string: H0, number: q0, boolean: x0, function: M0, method: j0, json: N0 };
  var Ai = Symbol.for("r2wc.render");
  var sc = Symbol.for("r2wc.connected");
  var Sl = Symbol.for("r2wc.context");
  var Ke = Symbol.for("r2wc.props");
  function L0(s, i, c) {
    var o, g, b;
    i.props || (i.props = s.propTypes ? Object.keys(s.propTypes) : []), i.events || (i.events = []);
    const m = Array.isArray(i.props) ? i.props.slice() : Object.keys(i.props), E = Array.isArray(i.events) ? i.events.slice() : Object.keys(i.events), y = {}, h = {}, T = {}, w = {};
    for (const z of m) {
      y[z] = Array.isArray(i.props) ? "string" : i.props[z];
      const j = B0(z);
      T[z] = j, w[j] = z;
    }
    for (const z of E)
      h[z] = Array.isArray(i.events) ? {} : i.events[z];
    class X extends HTMLElement {
      constructor() {
        super(), ic(this, b, true), ic(this, g), ic(this, o, {}), ic(this, "container"), i.shadow ? this.container = this.attachShadow({ mode: i.shadow }) : this.container = this, this[Ke].container = this.container;
        for (const j of m) {
          const K = T[j], it = this.getAttribute(K), yt = y[j], Dt = yt ? Cr[yt] : null;
          if (yt === "method") {
            const ht = gy(K);
            Object.defineProperty(this[Ke].container, ht, { enumerable: true, configurable: true, get() {
              return this[Ke][ht];
            }, set(_t) {
              this[Ke][ht] = _t, this[Ai]();
            } }), this[Ke][j] = Dt.parse(it, K, this);
          }
          Dt != null && Dt.parse && it && (this[Ke][j] = Dt.parse(it, K, this));
        }
        for (const j of E)
          this[Ke][j] = (K) => {
            const it = j.replace(/^on/, "").toLowerCase();
            this.dispatchEvent(new CustomEvent(it, rn({ detail: K }, h[j])));
          };
      }
      static get observedAttributes() {
        return Object.keys(w);
      }
      connectedCallback() {
        this[sc] = true, this[Ai]();
      }
      disconnectedCallback() {
        this[sc] = false, this[Sl] && c.unmount(this[Sl]), delete this[Sl];
      }
      attributeChangedCallback(j, K, it) {
        const yt = w[j], Dt = y[yt], ht = Dt ? Cr[Dt] : null;
        yt in y && ht != null && ht.parse && it && (this[Ke][yt] = ht.parse(it, j, this), this[Ai]());
      }
      [(b = sc, g = Sl, o = Ke, Ai)]() {
        this[sc] && (this[Sl] ? c.update(this[Sl], this[Ke]) : this[Sl] = c.mount(this.container, s, this[Ke]));
      }
    }
    for (const z of m) {
      const j = T[z], K = y[z];
      Object.defineProperty(X.prototype, z, { enumerable: true, configurable: true, get() {
        return this[Ke][z];
      }, set(it) {
        this[Ke][z] = it;
        const yt = K ? Cr[K] : null;
        if (yt != null && yt.stringify) {
          const Dt = yt.stringify(it, j, this);
          this.getAttribute(j) !== Dt && this.setAttribute(j, Dt);
        } else
          this[Ai]();
      } });
    }
    return X;
  }
  function Y0(s, i, c, o = {}) {
    function g(E, y, h) {
      const T = i.createElement(y, h);
      if ("createRoot" in c) {
        const w = c.createRoot(E);
        return w.render(T), { container: E, root: w, ReactComponent: y };
      }
      if ("render" in c)
        return c.render(T, E), { container: E, ReactComponent: y };
      throw new Error("Invalid ReactDOM instance provided.");
    }
    function b({ container: E, root: y, ReactComponent: h }, T) {
      const w = i.createElement(h, T);
      if (y) {
        y.render(w);
        return;
      }
      if ("render" in c) {
        c.render(w, E);
        return;
      }
    }
    function m({ container: E, root: y }) {
      if (y) {
        y.unmount();
        return;
      }
      if ("unmountComponentAtNode" in c) {
        c.unmountComponentAtNode(E);
        return;
      }
    }
    return L0(s, o, { mount: g, unmount: m, update: b });
  }
  var Dr = { exports: {} };
  var Oi = {};
  var xr = { exports: {} };
  var Mr = {};
  var Lp;
  function X0() {
    return Lp || (Lp = 1, function(s) {
      function i(H, F) {
        var nt = H.length;
        H.push(F);
        t:
          for (; 0 < nt; ) {
            var wt = nt - 1 >>> 1, Ut = H[wt];
            if (0 < g(Ut, F))
              H[wt] = F, H[nt] = Ut, nt = wt;
            else
              break t;
          }
      }
      function c(H) {
        return H.length === 0 ? null : H[0];
      }
      function o(H) {
        if (H.length === 0)
          return null;
        var F = H[0], nt = H.pop();
        if (nt !== F) {
          H[0] = nt;
          t:
            for (var wt = 0, Ut = H.length, R = Ut >>> 1; wt < R; ) {
              var Q = 2 * (wt + 1) - 1, W = H[Q], I = Q + 1, ot = H[I];
              if (0 > g(W, nt))
                I < Ut && 0 > g(ot, W) ? (H[wt] = ot, H[I] = nt, wt = I) : (H[wt] = W, H[Q] = nt, wt = Q);
              else if (I < Ut && 0 > g(ot, nt))
                H[wt] = ot, H[I] = nt, wt = I;
              else
                break t;
            }
        }
        return F;
      }
      function g(H, F) {
        var nt = H.sortIndex - F.sortIndex;
        return nt !== 0 ? nt : H.id - F.id;
      }
      if (s.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var b = performance;
        s.unstable_now = function() {
          return b.now();
        };
      } else {
        var m = Date, E = m.now();
        s.unstable_now = function() {
          return m.now() - E;
        };
      }
      var y = [], h = [], T = 1, w = null, X = 3, z = false, j = false, K = false, it = false, yt = typeof setTimeout == "function" ? setTimeout : null, Dt = typeof clearTimeout == "function" ? clearTimeout : null, ht = typeof setImmediate != "undefined" ? setImmediate : null;
      function _t(H) {
        for (var F = c(h); F !== null; ) {
          if (F.callback === null)
            o(h);
          else if (F.startTime <= H)
            o(h), F.sortIndex = F.expirationTime, i(y, F);
          else
            break;
          F = c(h);
        }
      }
      function At(H) {
        if (K = false, _t(H), !j)
          if (c(y) !== null)
            j = true, Lt || (Lt = true, ie());
          else {
            var F = c(h);
            F !== null && je(At, F.startTime - H);
          }
      }
      var Lt = false, ct = -1, ue = 5, Ee = -1;
      function hn() {
        return it ? true : !(s.unstable_now() - Ee < ue);
      }
      function Te() {
        if (it = false, Lt) {
          var H = s.unstable_now();
          Ee = H;
          var F = true;
          try {
            t: {
              j = false, K && (K = false, Dt(ct), ct = -1), z = true;
              var nt = X;
              try {
                e: {
                  for (_t(H), w = c(y); w !== null && !(w.expirationTime > H && hn()); ) {
                    var wt = w.callback;
                    if (typeof wt == "function") {
                      w.callback = null, X = w.priorityLevel;
                      var Ut = wt(w.expirationTime <= H);
                      if (H = s.unstable_now(), typeof Ut == "function") {
                        w.callback = Ut, _t(H), F = true;
                        break e;
                      }
                      w === c(y) && o(y), _t(H);
                    } else
                      o(y);
                    w = c(y);
                  }
                  if (w !== null)
                    F = true;
                  else {
                    var R = c(h);
                    R !== null && je(At, R.startTime - H), F = false;
                  }
                }
                break t;
              } finally {
                w = null, X = nt, z = false;
              }
              F = void 0;
            }
          } finally {
            F ? ie() : Lt = false;
          }
        }
      }
      var ie;
      if (typeof ht == "function")
        ie = function() {
          ht(Te);
        };
      else if (typeof MessageChannel != "undefined") {
        var _e = new MessageChannel(), Ft = _e.port2;
        _e.port1.onmessage = Te, ie = function() {
          Ft.postMessage(null);
        };
      } else
        ie = function() {
          yt(Te, 0);
        };
      function je(H, F) {
        ct = yt(function() {
          H(s.unstable_now());
        }, F);
      }
      s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function(H) {
        H.callback = null;
      }, s.unstable_forceFrameRate = function(H) {
        0 > H || 125 < H ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ue = 0 < H ? Math.floor(1e3 / H) : 5;
      }, s.unstable_getCurrentPriorityLevel = function() {
        return X;
      }, s.unstable_next = function(H) {
        switch (X) {
          case 1:
          case 2:
          case 3:
            var F = 3;
            break;
          default:
            F = X;
        }
        var nt = X;
        X = F;
        try {
          return H();
        } finally {
          X = nt;
        }
      }, s.unstable_requestPaint = function() {
        it = true;
      }, s.unstable_runWithPriority = function(H, F) {
        switch (H) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            H = 3;
        }
        var nt = X;
        X = H;
        try {
          return F();
        } finally {
          X = nt;
        }
      }, s.unstable_scheduleCallback = function(H, F, nt) {
        var wt = s.unstable_now();
        switch (typeof nt == "object" && nt !== null ? (nt = nt.delay, nt = typeof nt == "number" && 0 < nt ? wt + nt : wt) : nt = wt, H) {
          case 1:
            var Ut = -1;
            break;
          case 2:
            Ut = 250;
            break;
          case 5:
            Ut = 1073741823;
            break;
          case 4:
            Ut = 1e4;
            break;
          default:
            Ut = 5e3;
        }
        return Ut = nt + Ut, H = { id: T++, callback: F, priorityLevel: H, startTime: nt, expirationTime: Ut, sortIndex: -1 }, nt > wt ? (H.sortIndex = nt, i(h, H), c(y) === null && H === c(h) && (K ? (Dt(ct), ct = -1) : K = true, je(At, nt - wt))) : (H.sortIndex = Ut, i(y, H), j || z || (j = true, Lt || (Lt = true, ie()))), H;
      }, s.unstable_shouldYield = hn, s.unstable_wrapCallback = function(H) {
        var F = X;
        return function() {
          var nt = X;
          X = F;
          try {
            return H.apply(this, arguments);
          } finally {
            X = nt;
          }
        };
      };
    }(Mr)), Mr;
  }
  var Yp;
  function G0() {
    return Yp || (Yp = 1, xr.exports = X0()), xr.exports;
  }
  var Nr = { exports: {} };
  var Se = {};
  var Xp;
  function Q0() {
    if (Xp)
      return Se;
    Xp = 1;
    var s = tf();
    function i(y) {
      var h = "https://react.dev/errors/" + y;
      if (1 < arguments.length) {
        h += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var T = 2; T < arguments.length; T++)
          h += "&args[]=" + encodeURIComponent(arguments[T]);
      }
      return "Minified React error #" + y + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function c() {
    }
    var o = { d: { f: c, r: function() {
      throw Error(i(522));
    }, D: c, C: c, L: c, m: c, X: c, S: c, M: c }, p: 0, findDOMNode: null }, g = Symbol.for("react.portal");
    function b(y, h, T) {
      var w = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return { $$typeof: g, key: w == null ? null : "" + w, children: y, containerInfo: h, implementation: T };
    }
    var m = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function E(y, h) {
      if (y === "font")
        return "";
      if (typeof h == "string")
        return h === "use-credentials" ? h : "";
    }
    return Se.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, Se.createPortal = function(y, h) {
      var T = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11)
        throw Error(i(299));
      return b(y, h, null, T);
    }, Se.flushSync = function(y) {
      var h = m.T, T = o.p;
      try {
        if (m.T = null, o.p = 2, y)
          return y();
      } finally {
        m.T = h, o.p = T, o.d.f();
      }
    }, Se.preconnect = function(y, h) {
      typeof y == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, o.d.C(y, h));
    }, Se.prefetchDNS = function(y) {
      typeof y == "string" && o.d.D(y);
    }, Se.preinit = function(y, h) {
      if (typeof y == "string" && h && typeof h.as == "string") {
        var T = h.as, w = E(T, h.crossOrigin), X = typeof h.integrity == "string" ? h.integrity : void 0, z = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
        T === "style" ? o.d.S(y, typeof h.precedence == "string" ? h.precedence : void 0, { crossOrigin: w, integrity: X, fetchPriority: z }) : T === "script" && o.d.X(y, { crossOrigin: w, integrity: X, fetchPriority: z, nonce: typeof h.nonce == "string" ? h.nonce : void 0 });
      }
    }, Se.preinitModule = function(y, h) {
      if (typeof y == "string")
        if (typeof h == "object" && h !== null) {
          if (h.as == null || h.as === "script") {
            var T = E(h.as, h.crossOrigin);
            o.d.M(y, { crossOrigin: T, integrity: typeof h.integrity == "string" ? h.integrity : void 0, nonce: typeof h.nonce == "string" ? h.nonce : void 0 });
          }
        } else
          h == null && o.d.M(y);
    }, Se.preload = function(y, h) {
      if (typeof y == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
        var T = h.as, w = E(T, h.crossOrigin);
        o.d.L(y, T, { crossOrigin: w, integrity: typeof h.integrity == "string" ? h.integrity : void 0, nonce: typeof h.nonce == "string" ? h.nonce : void 0, type: typeof h.type == "string" ? h.type : void 0, fetchPriority: typeof h.fetchPriority == "string" ? h.fetchPriority : void 0, referrerPolicy: typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0, imageSrcSet: typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0, imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0, media: typeof h.media == "string" ? h.media : void 0 });
      }
    }, Se.preloadModule = function(y, h) {
      if (typeof y == "string")
        if (h) {
          var T = E(h.as, h.crossOrigin);
          o.d.m(y, { as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0, crossOrigin: T, integrity: typeof h.integrity == "string" ? h.integrity : void 0 });
        } else
          o.d.m(y);
    }, Se.requestFormReset = function(y) {
      o.d.r(y);
    }, Se.unstable_batchedUpdates = function(y, h) {
      return y(h);
    }, Se.useFormState = function(y, h, T) {
      return m.H.useFormState(y, h, T);
    }, Se.useFormStatus = function() {
      return m.H.useHostTransitionStatus();
    }, Se.version = "19.2.0", Se;
  }
  var Gp;
  function V0() {
    if (Gp)
      return Nr.exports;
    Gp = 1;
    function s() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
        } catch (i) {
          console.error(i);
        }
    }
    return s(), Nr.exports = Q0(), Nr.exports;
  }
  var Qp;
  function Z0() {
    if (Qp)
      return Oi;
    Qp = 1;
    var s = G0(), i = tf(), c = V0();
    function o(t) {
      var e = "https://react.dev/errors/" + t;
      if (1 < arguments.length) {
        e += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          e += "&args[]=" + encodeURIComponent(arguments[n]);
      }
      return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function g(t) {
      return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
    }
    function b(t) {
      var e = t, n = t;
      if (t.alternate)
        for (; e.return; )
          e = e.return;
      else {
        t = e;
        do
          e = t, (e.flags & 4098) !== 0 && (n = e.return), t = e.return;
        while (t);
      }
      return e.tag === 3 ? n : null;
    }
    function m(t) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null)
          return e.dehydrated;
      }
      return null;
    }
    function E(t) {
      if (t.tag === 31) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null)
          return e.dehydrated;
      }
      return null;
    }
    function y(t) {
      if (b(t) !== t)
        throw Error(o(188));
    }
    function h(t) {
      var e = t.alternate;
      if (!e) {
        if (e = b(t), e === null)
          throw Error(o(188));
        return e !== t ? null : t;
      }
      for (var n = t, a = e; ; ) {
        var l = n.return;
        if (l === null)
          break;
        var u = l.alternate;
        if (u === null) {
          if (a = l.return, a !== null) {
            n = a;
            continue;
          }
          break;
        }
        if (l.child === u.child) {
          for (u = l.child; u; ) {
            if (u === n)
              return y(l), t;
            if (u === a)
              return y(l), e;
            u = u.sibling;
          }
          throw Error(o(188));
        }
        if (n.return !== a.return)
          n = l, a = u;
        else {
          for (var r = false, p = l.child; p; ) {
            if (p === n) {
              r = true, n = l, a = u;
              break;
            }
            if (p === a) {
              r = true, a = l, n = u;
              break;
            }
            p = p.sibling;
          }
          if (!r) {
            for (p = u.child; p; ) {
              if (p === n) {
                r = true, n = u, a = l;
                break;
              }
              if (p === a) {
                r = true, a = u, n = l;
                break;
              }
              p = p.sibling;
            }
            if (!r)
              throw Error(o(189));
          }
        }
        if (n.alternate !== a)
          throw Error(o(190));
      }
      if (n.tag !== 3)
        throw Error(o(188));
      return n.stateNode.current === n ? t : e;
    }
    function T(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6)
        return t;
      for (t = t.child; t !== null; ) {
        if (e = T(t), e !== null)
          return e;
        t = t.sibling;
      }
      return null;
    }
    var w = Object.assign, X = Symbol.for("react.element"), z = Symbol.for("react.transitional.element"), j = Symbol.for("react.portal"), K = Symbol.for("react.fragment"), it = Symbol.for("react.strict_mode"), yt = Symbol.for("react.profiler"), Dt = Symbol.for("react.consumer"), ht = Symbol.for("react.context"), _t = Symbol.for("react.forward_ref"), At = Symbol.for("react.suspense"), Lt = Symbol.for("react.suspense_list"), ct = Symbol.for("react.memo"), ue = Symbol.for("react.lazy"), Ee = Symbol.for("react.activity"), hn = Symbol.for("react.memo_cache_sentinel"), Te = Symbol.iterator;
    function ie(t) {
      return t === null || typeof t != "object" ? null : (t = Te && t[Te] || t["@@iterator"], typeof t == "function" ? t : null);
    }
    var _e = Symbol.for("react.client.reference");
    function Ft(t) {
      if (t == null)
        return null;
      if (typeof t == "function")
        return t.$$typeof === _e ? null : t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case K:
          return "Fragment";
        case yt:
          return "Profiler";
        case it:
          return "StrictMode";
        case At:
          return "Suspense";
        case Lt:
          return "SuspenseList";
        case Ee:
          return "Activity";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case j:
            return "Portal";
          case ht:
            return t.displayName || "Context";
          case Dt:
            return (t._context.displayName || "Context") + ".Consumer";
          case _t:
            var e = t.render;
            return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case ct:
            return e = t.displayName || null, e !== null ? e : Ft(t.type) || "Memo";
          case ue:
            e = t._payload, t = t._init;
            try {
              return Ft(t(e));
            } catch (n) {
            }
        }
      return null;
    }
    var je = Array.isArray, H = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, nt = { pending: false, data: null, method: null, action: null }, wt = [], Ut = -1;
    function R(t) {
      return { current: t };
    }
    function Q(t) {
      0 > Ut || (t.current = wt[Ut], wt[Ut] = null, Ut--);
    }
    function W(t, e) {
      Ut++, wt[Ut] = t.current, t.current = e;
    }
    var I = R(null), ot = R(null), mt = R(null), Ot = R(null);
    function pe(t, e) {
      switch (W(mt, e), W(ot, t), W(I, null), e.nodeType) {
        case 9:
        case 11:
          t = (t = e.documentElement) && (t = t.namespaceURI) ? tp(t) : 0;
          break;
        default:
          if (t = e.tagName, e = e.namespaceURI)
            e = tp(e), t = ep(e, t);
          else
            switch (t) {
              case "svg":
                t = 1;
                break;
              case "math":
                t = 2;
                break;
              default:
                t = 0;
            }
      }
      Q(I), W(I, t);
    }
    function Zt() {
      Q(I), Q(ot), Q(mt);
    }
    function Va(t) {
      t.memoizedState !== null && W(Ot, t);
      var e = I.current, n = ep(e, t.type);
      e !== n && (W(ot, t), W(I, n));
    }
    function _l(t) {
      ot.current === t && (Q(I), Q(ot)), Ot.current === t && (Q(Ot), bi._currentValue = nt);
    }
    var Al, Ci;
    function On(t) {
      if (Al === void 0)
        try {
          throw Error();
        } catch (n) {
          var e = n.stack.trim().match(/\n( *(at )?)/);
          Al = e && e[1] || "", Ci = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + Al + t + Ci;
    }
    var Eu = false;
    function Tu(t, e) {
      if (!t || Eu)
        return "";
      Eu = true;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var a = { DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var G = function() {
                throw Error();
              };
              if (Object.defineProperty(G.prototype, "props", { set: function() {
                throw Error();
              } }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(G, []);
                } catch (q) {
                  var N = q;
                }
                Reflect.construct(t, [], G);
              } else {
                try {
                  G.call();
                } catch (q) {
                  N = q;
                }
                t.call(G.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (q) {
                N = q;
              }
              (G = t()) && typeof G.catch == "function" && G.catch(function() {
              });
            }
          } catch (q) {
            if (q && N && typeof q.stack == "string")
              return [q.stack, N.stack];
          }
          return [null, null];
        } };
        a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var l = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
        l && l.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
        var u = a.DetermineComponentFrameRoot(), r = u[0], p = u[1];
        if (r && p) {
          var _ = r.split(`
`), M = p.split(`
`);
          for (l = a = 0; a < _.length && !_[a].includes("DetermineComponentFrameRoot"); )
            a++;
          for (; l < M.length && !M[l].includes("DetermineComponentFrameRoot"); )
            l++;
          if (a === _.length || l === M.length)
            for (a = _.length - 1, l = M.length - 1; 1 <= a && 0 <= l && _[a] !== M[l]; )
              l--;
          for (; 1 <= a && 0 <= l; a--, l--)
            if (_[a] !== M[l]) {
              if (a !== 1 || l !== 1)
                do
                  if (a--, l--, 0 > l || _[a] !== M[l]) {
                    var L = `
` + _[a].replace(" at new ", " at ");
                    return t.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", t.displayName)), L;
                  }
                while (1 <= a && 0 <= l);
              break;
            }
        }
      } finally {
        Eu = false, Error.prepareStackTrace = n;
      }
      return (n = t ? t.displayName || t.name : "") ? On(n) : "";
    }
    function Sc(t, e) {
      switch (t.tag) {
        case 26:
        case 27:
        case 5:
          return On(t.type);
        case 16:
          return On("Lazy");
        case 13:
          return t.child !== e && e !== null ? On("Suspense Fallback") : On("Suspense");
        case 19:
          return On("SuspenseList");
        case 0:
        case 15:
          return Tu(t.type, false);
        case 11:
          return Tu(t.type.render, false);
        case 1:
          return Tu(t.type, true);
        case 31:
          return On("Activity");
        default:
          return "";
      }
    }
    function Di(t) {
      try {
        var e = "", n = null;
        do
          e += Sc(t, n), n = t, t = t.return;
        while (t);
        return e;
      } catch (a) {
        return `
Error generating stack: ` + a.message + `
` + a.stack;
      }
    }
    var _u = Object.prototype.hasOwnProperty, Au = s.unstable_scheduleCallback, Ou = s.unstable_cancelCallback, Ec = s.unstable_shouldYield, xi = s.unstable_requestPaint, Ae = s.unstable_now, B = s.unstable_getCurrentPriorityLevel, st = s.unstable_ImmediatePriority, Ru = s.unstable_UserBlockingPriority, Za = s.unstable_NormalPriority, Tc = s.unstable_LowPriority, Ol = s.unstable_IdlePriority, Mi = s.log, Ni = s.unstable_setDisableYieldValue, Ka = null, Oe = null;
    function qe(t) {
      if (typeof Mi == "function" && Ni(t), Oe && typeof Oe.setStrictMode == "function")
        try {
          Oe.setStrictMode(Ka, t);
        } catch (e) {
        }
    }
    var be = Math.clz32 ? Math.clz32 : _c, zu = Math.log, Bi = Math.LN2;
    function _c(t) {
      return t >>>= 0, t === 0 ? 32 : 31 - (zu(t) / Bi | 0) | 0;
    }
    var Ja = 256, Rl = 262144, ka = 4194304;
    function Rn(t) {
      var e = t & 42;
      if (e !== 0)
        return e;
      switch (t & -t) {
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
          return t & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return t & 62914560;
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
          return t;
      }
    }
    function zl(t, e, n) {
      var a = t.pendingLanes;
      if (a === 0)
        return 0;
      var l = 0, u = t.suspendedLanes, r = t.pingedLanes;
      t = t.warmLanes;
      var p = a & 134217727;
      return p !== 0 ? (a = p & ~u, a !== 0 ? l = Rn(a) : (r &= p, r !== 0 ? l = Rn(r) : n || (n = p & ~t, n !== 0 && (l = Rn(n))))) : (p = a & ~u, p !== 0 ? l = Rn(p) : r !== 0 ? l = Rn(r) : n || (n = a & ~t, n !== 0 && (l = Rn(n)))), l === 0 ? 0 : e !== 0 && e !== l && (e & u) === 0 && (u = l & -l, n = e & -e, u >= n || u === 32 && (n & 4194048) !== 0) ? e : l;
    }
    function Fa(t, e) {
      return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
    }
    function Ac(t, e) {
      switch (t) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return e + 250;
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
          return e + 5e3;
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
    function ji() {
      var t = ka;
      return ka <<= 1, (ka & 62914560) === 0 && (ka = 4194304), t;
    }
    function Wa(t) {
      for (var e = [], n = 0; 31 > n; n++)
        e.push(t);
      return e;
    }
    function Yn(t, e) {
      t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
    }
    function Oc(t, e, n, a, l, u) {
      var r = t.pendingLanes;
      t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
      var p = t.entanglements, _ = t.expirationTimes, M = t.hiddenUpdates;
      for (n = r & ~n; 0 < n; ) {
        var L = 31 - be(n), G = 1 << L;
        p[L] = 0, _[L] = -1;
        var N = M[L];
        if (N !== null)
          for (M[L] = null, L = 0; L < N.length; L++) {
            var q = N[L];
            q !== null && (q.lane &= -536870913);
          }
        n &= ~G;
      }
      a !== 0 && qi(t, a, 0), u !== 0 && l === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(r & ~e));
    }
    function qi(t, e, n) {
      t.pendingLanes |= e, t.suspendedLanes &= ~e;
      var a = 31 - be(e);
      t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | n & 261930;
    }
    function Hi(t, e) {
      var n = t.entangledLanes |= e;
      for (t = t.entanglements; n; ) {
        var a = 31 - be(n), l = 1 << a;
        l & e | t[a] & e && (t[a] |= e), n &= ~l;
      }
    }
    function Li(t, e) {
      var n = e & -e;
      return n = (n & 42) !== 0 ? 1 : It(n), (n & (t.suspendedLanes | e)) !== 0 ? 0 : n;
    }
    function It(t) {
      switch (t) {
        case 2:
          t = 1;
          break;
        case 8:
          t = 4;
          break;
        case 32:
          t = 16;
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
          t = 128;
          break;
        case 268435456:
          t = 134217728;
          break;
        default:
          t = 0;
      }
      return t;
    }
    function wu(t) {
      return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
    }
    function Yi() {
      var t = F.p;
      return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Ap(t.type));
    }
    function Xi(t, e) {
      var n = F.p;
      try {
        return F.p = t, e();
      } finally {
        F.p = n;
      }
    }
    var dn = Math.random().toString(36).slice(2), se = "__reactFiber$" + dn, re = "__reactProps$" + dn, zn = "__reactContainer$" + dn, Uu = "__reactEvents$" + dn, Rc = "__reactListeners$" + dn, Gi = "__reactHandles$" + dn, ha = "__reactResources$" + dn, wn = "__reactMarker$" + dn;
    function Cu(t) {
      delete t[se], delete t[re], delete t[Uu], delete t[Rc], delete t[Gi];
    }
    function da(t) {
      var e = t[se];
      if (e)
        return e;
      for (var n = t.parentNode; n; ) {
        if (e = n[zn] || n[se]) {
          if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
            for (t = cp(t); t !== null; ) {
              if (n = t[se])
                return n;
              t = cp(t);
            }
          return e;
        }
        t = n, n = t.parentNode;
      }
      return null;
    }
    function Un(t) {
      if (t = t[se] || t[zn]) {
        var e = t.tag;
        if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
          return t;
      }
      return null;
    }
    function $a(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6)
        return t.stateNode;
      throw Error(o(33));
    }
    function pa(t) {
      var e = t[ha];
      return e || (e = t[ha] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
    }
    function Kt(t) {
      t[wn] = true;
    }
    var we = /* @__PURE__ */ new Set(), wl = {};
    function Cn(t, e) {
      He(t, e), He(t + "Capture", e);
    }
    function He(t, e) {
      for (wl[t] = e, t = 0; t < e.length; t++)
        we.add(e[t]);
    }
    var Qi = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Vi = {}, Zi = {};
    function zc(t) {
      return _u.call(Zi, t) ? true : _u.call(Vi, t) ? false : Qi.test(t) ? Zi[t] = true : (Vi[t] = true, false);
    }
    function Xn(t, e, n) {
      if (zc(e))
        if (n === null)
          t.removeAttribute(e);
        else {
          switch (typeof n) {
            case "undefined":
            case "function":
            case "symbol":
              t.removeAttribute(e);
              return;
            case "boolean":
              var a = e.toLowerCase().slice(0, 5);
              if (a !== "data-" && a !== "aria-") {
                t.removeAttribute(e);
                return;
              }
          }
          t.setAttribute(e, "" + n);
        }
    }
    function Pa(t, e, n) {
      if (n === null)
        t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            t.removeAttribute(e);
            return;
        }
        t.setAttribute(e, "" + n);
      }
    }
    function ke(t, e, n, a) {
      if (a === null)
        t.removeAttribute(n);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            t.removeAttribute(n);
            return;
        }
        t.setAttributeNS(e, n, "" + a);
      }
    }
    function Ue(t) {
      switch (typeof t) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return t;
        case "object":
          return t;
        default:
          return "";
      }
    }
    function Ki(t) {
      var e = t.type;
      return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
    }
    function wc(t, e, n) {
      var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
      if (!t.hasOwnProperty(e) && typeof a != "undefined" && typeof a.get == "function" && typeof a.set == "function") {
        var l = a.get, u = a.set;
        return Object.defineProperty(t, e, { configurable: true, get: function() {
          return l.call(this);
        }, set: function(r) {
          n = "" + r, u.call(this, r);
        } }), Object.defineProperty(t, e, { enumerable: a.enumerable }), { getValue: function() {
          return n;
        }, setValue: function(r) {
          n = "" + r;
        }, stopTracking: function() {
          t._valueTracker = null, delete t[e];
        } };
      }
    }
    function Du(t) {
      if (!t._valueTracker) {
        var e = Ki(t) ? "checked" : "value";
        t._valueTracker = wc(t, e, "" + t[e]);
      }
    }
    function xu(t) {
      if (!t)
        return false;
      var e = t._valueTracker;
      if (!e)
        return true;
      var n = e.getValue(), a = "";
      return t && (a = Ki(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== n ? (e.setValue(t), true) : false;
    }
    function Ia(t) {
      if (t = t || (typeof document != "undefined" ? document : void 0), typeof t == "undefined")
        return null;
      try {
        return t.activeElement || t.body;
      } catch (e) {
        return t.body;
      }
    }
    var Gn = /[\n"\\]/g;
    function Re(t) {
      return t.replace(Gn, function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      });
    }
    function Mu(t, e, n, a, l, u, r, p) {
      t.name = "", r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" ? t.type = r : t.removeAttribute("type"), e != null ? r === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Ue(e)) : t.value !== "" + Ue(e) && (t.value = "" + Ue(e)) : r !== "submit" && r !== "reset" || t.removeAttribute("value"), e != null ? Nu(t, r, Ue(e)) : n != null ? Nu(t, r, Ue(n)) : a != null && t.removeAttribute("value"), l == null && u != null && (t.defaultChecked = !!u), l != null && (t.checked = l && typeof l != "function" && typeof l != "symbol"), p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? t.name = "" + Ue(p) : t.removeAttribute("name");
    }
    function Ji(t, e, n, a, l, u, r, p) {
      if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || n != null) {
        if (!(u !== "submit" && u !== "reset" || e != null)) {
          Du(t);
          return;
        }
        n = n != null ? "" + Ue(n) : "", e = e != null ? "" + Ue(e) : n, p || e === t.value || (t.value = e), t.defaultValue = e;
      }
      a = a != null ? a : l, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = p ? t.checked : !!a, t.defaultChecked = !!a, r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (t.name = r), Du(t);
    }
    function Nu(t, e, n) {
      e === "number" && Ia(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n);
    }
    function ya(t, e, n, a) {
      if (t = t.options, e) {
        e = {};
        for (var l = 0; l < n.length; l++)
          e["$" + n[l]] = true;
        for (n = 0; n < t.length; n++)
          l = e.hasOwnProperty("$" + t[n].value), t[n].selected !== l && (t[n].selected = l), l && a && (t[n].defaultSelected = true);
      } else {
        for (n = "" + Ue(n), e = null, l = 0; l < t.length; l++) {
          if (t[l].value === n) {
            t[l].selected = true, a && (t[l].defaultSelected = true);
            return;
          }
          e !== null || t[l].disabled || (e = t[l]);
        }
        e !== null && (e.selected = true);
      }
    }
    function ki(t, e, n) {
      if (e != null && (e = "" + Ue(e), e !== t.value && (t.value = e), n == null)) {
        t.defaultValue !== e && (t.defaultValue = e);
        return;
      }
      t.defaultValue = n != null ? "" + Ue(n) : "";
    }
    function Bu(t, e, n, a) {
      if (e == null) {
        if (a != null) {
          if (n != null)
            throw Error(o(92));
          if (je(a)) {
            if (1 < a.length)
              throw Error(o(93));
            a = a[0];
          }
          n = a;
        }
        n == null && (n = ""), e = n;
      }
      n = Ue(e), t.defaultValue = n, a = t.textContent, a === n && a !== "" && a !== null && (t.value = a), Du(t);
    }
    function Qn(t, e) {
      if (e) {
        var n = t.firstChild;
        if (n && n === t.lastChild && n.nodeType === 3) {
          n.nodeValue = e;
          return;
        }
      }
      t.textContent = e;
    }
    var Ul = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function Fi(t, e, n) {
      var a = e.indexOf("--") === 0;
      n == null || typeof n == "boolean" || n === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, n) : typeof n != "number" || n === 0 || Ul.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
    }
    function ju(t, e, n) {
      if (e != null && typeof e != "object")
        throw Error(o(62));
      if (t = t.style, n != null) {
        for (var a in n)
          !n.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
        for (var l in e)
          a = e[l], e.hasOwnProperty(l) && n[l] !== a && Fi(t, l, a);
      } else
        for (var u in e)
          e.hasOwnProperty(u) && Fi(t, u, e[u]);
    }
    function Cl(t) {
      if (t.indexOf("-") === -1)
        return false;
      switch (t) {
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
    var Wi = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), Uc = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Dl(t) {
      return Uc.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
    }
    function Fe() {
    }
    var tl = null;
    function xl(t) {
      return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
    }
    var ma = null, Vn = null;
    function Ml(t) {
      var e = Un(t);
      if (e && (t = e.stateNode)) {
        var n = t[re] || null;
        t:
          switch (t = e.stateNode, e.type) {
            case "input":
              if (Mu(t, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), e = n.name, n.type === "radio" && e != null) {
                for (n = t; n.parentNode; )
                  n = n.parentNode;
                for (n = n.querySelectorAll('input[name="' + Re("" + e) + '"][type="radio"]'), e = 0; e < n.length; e++) {
                  var a = n[e];
                  if (a !== t && a.form === t.form) {
                    var l = a[re] || null;
                    if (!l)
                      throw Error(o(90));
                    Mu(a, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name);
                  }
                }
                for (e = 0; e < n.length; e++)
                  a = n[e], a.form === t.form && xu(a);
              }
              break t;
            case "textarea":
              ki(t, n.value, n.defaultValue);
              break t;
            case "select":
              e = n.value, e != null && ya(t, !!n.multiple, e, false);
          }
      }
    }
    var Nl = false;
    function qu(t, e, n) {
      if (Nl)
        return t(e, n);
      Nl = true;
      try {
        var a = t(e);
        return a;
      } finally {
        if (Nl = false, (ma !== null || Vn !== null) && (Hs(), ma && (e = ma, t = Vn, Vn = ma = null, Ml(e), t)))
          for (e = 0; e < t.length; e++)
            Ml(t[e]);
      }
    }
    function Dn(t, e) {
      var n = t.stateNode;
      if (n === null)
        return null;
      var a = n[re] || null;
      if (a === null)
        return null;
      n = a[e];
      t:
        switch (e) {
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
            (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
            break t;
          default:
            t = false;
        }
      if (t)
        return null;
      if (n && typeof n != "function")
        throw Error(o(231, e, typeof n));
      return n;
    }
    var We = !(typeof window == "undefined" || typeof window.document == "undefined" || typeof window.document.createElement == "undefined"), Hu = false;
    if (We)
      try {
        var xn = {};
        Object.defineProperty(xn, "passive", { get: function() {
          Hu = true;
        } }), window.addEventListener("test", xn, xn), window.removeEventListener("test", xn, xn);
      } catch (t) {
        Hu = false;
      }
    var ce = null, va = null, Zn = null;
    function Bl() {
      if (Zn)
        return Zn;
      var t, e = va, n = e.length, a, l = "value" in ce ? ce.value : ce.textContent, u = l.length;
      for (t = 0; t < n && e[t] === l[t]; t++)
        ;
      var r = n - t;
      for (a = 1; a <= r && e[n - a] === l[u - a]; a++)
        ;
      return Zn = l.slice(t, 1 < a ? 1 - a : void 0);
    }
    function jl(t) {
      var e = t.keyCode;
      return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
    }
    function ql() {
      return true;
    }
    function $i() {
      return false;
    }
    function fe(t) {
      function e(n, a, l, u, r) {
        this._reactName = n, this._targetInst = l, this.type = a, this.nativeEvent = u, this.target = r, this.currentTarget = null;
        for (var p in t)
          t.hasOwnProperty(p) && (n = t[p], this[p] = n ? n(u) : u[p]);
        return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === false) ? ql : $i, this.isPropagationStopped = $i, this;
      }
      return w(e.prototype, { preventDefault: function() {
        this.defaultPrevented = true;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = ql);
      }, stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = ql);
      }, persist: function() {
      }, isPersistent: ql }), e;
    }
    var Kn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(t) {
      return t.timeStamp || Date.now();
    }, defaultPrevented: 0, isTrusted: 0 }, el = fe(Kn), Yt = w({}, Kn, { view: 0, detail: 0 }), f = fe(Yt), d, v, S, A = w({}, Yt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Pe, button: 0, buttons: 0, relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    }, movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== S && (S && t.type === "mousemove" ? (d = t.screenX - S.screenX, v = t.screenY - S.screenY) : v = d = 0, S = t), d);
    }, movementY: function(t) {
      return "movementY" in t ? t.movementY : v;
    } }), D = fe(A), C = w({}, A, { dataTransfer: 0 }), V = fe(C), tt = w({}, Yt, { relatedTarget: 0 }), Z = fe(tt), J = w({}, Kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ut = fe(J), Nt = w({}, Kn, { clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    } }), rt = fe(Nt), k = w({}, Kn, { data: 0 }), $ = fe(k), Xt = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, he = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, Wt = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function $e(t) {
      var e = this.nativeEvent;
      return e.getModifierState ? e.getModifierState(t) : (t = Wt[t]) ? !!e[t] : false;
    }
    function Pe() {
      return $e;
    }
    var Lu = w({}, Yt, { key: function(t) {
      if (t.key) {
        var e = Xt[t.key] || t.key;
        if (e !== "Unidentified")
          return e;
      }
      return t.type === "keypress" ? (t = jl(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? he[t.keyCode] || "Unidentified" : "";
    }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Pe, charCode: function(t) {
      return t.type === "keypress" ? jl(t) : 0;
    }, keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }, which: function(t) {
      return t.type === "keypress" ? jl(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    } }), Pi = fe(Lu), Mn = w({}, A, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Hl = fe(Mn), Ll = w({}, Yt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Pe }), Ii = fe(Ll), ts = w({}, Kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Yl = fe(ts), nl = w({}, A, { deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    }, deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    }, deltaZ: 0, deltaMode: 0 }), Jn = fe(nl), es = w({}, Kn, { newState: 0, oldState: 0 }), Ie = fe(es), ns = [9, 13, 27, 32], tn = We && "CompositionEvent" in window, ga = null;
    We && "documentMode" in document && (ga = document.documentMode);
    var Cc = We && "TextEvent" in window && !ga, pn = We && (!tn || ga && 8 < ga && 11 >= ga), kn = " ", Xl = false;
    function al(t, e) {
      switch (t) {
        case "keyup":
          return ns.indexOf(e.keyCode) !== -1;
        case "keydown":
          return e.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function Yu(t) {
      return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
    }
    var Gl = false;
    function Gy(t, e) {
      switch (t) {
        case "compositionend":
          return Yu(e);
        case "keypress":
          return e.which !== 32 ? null : (Xl = true, kn);
        case "textInput":
          return t = e.data, t === kn && Xl ? null : t;
        default:
          return null;
      }
    }
    function Qy(t, e) {
      if (Gl)
        return t === "compositionend" || !tn && al(t, e) ? (t = Bl(), Zn = va = ce = null, Gl = false, t) : null;
      switch (t) {
        case "paste":
          return null;
        case "keypress":
          if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
            if (e.char && 1 < e.char.length)
              return e.char;
            if (e.which)
              return String.fromCharCode(e.which);
          }
          return null;
        case "compositionend":
          return pn && e.locale !== "ko" ? null : e.data;
        default:
          return null;
      }
    }
    var Vy = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
    function ff(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e === "input" ? !!Vy[t.type] : e === "textarea";
    }
    function hf(t, e, n, a) {
      ma ? Vn ? Vn.push(a) : Vn = [a] : ma = a, e = Zs(e, "onChange"), 0 < e.length && (n = new el("onChange", "change", null, n, a), t.push({ event: n, listeners: e }));
    }
    var Xu = null, Gu = null;
    function Zy(t) {
      kd(t, 0);
    }
    function as(t) {
      var e = $a(t);
      if (xu(e))
        return t;
    }
    function df(t, e) {
      if (t === "change")
        return e;
    }
    var pf = false;
    if (We) {
      var Dc;
      if (We) {
        var xc = "oninput" in document;
        if (!xc) {
          var yf = document.createElement("div");
          yf.setAttribute("oninput", "return;"), xc = typeof yf.oninput == "function";
        }
        Dc = xc;
      } else
        Dc = false;
      pf = Dc && (!document.documentMode || 9 < document.documentMode);
    }
    function mf() {
      Xu && (Xu.detachEvent("onpropertychange", vf), Gu = Xu = null);
    }
    function vf(t) {
      if (t.propertyName === "value" && as(Gu)) {
        var e = [];
        hf(e, Gu, t, xl(t)), qu(Zy, e);
      }
    }
    function Ky(t, e, n) {
      t === "focusin" ? (mf(), Xu = e, Gu = n, Xu.attachEvent("onpropertychange", vf)) : t === "focusout" && mf();
    }
    function Jy(t) {
      if (t === "selectionchange" || t === "keyup" || t === "keydown")
        return as(Gu);
    }
    function ky(t, e) {
      if (t === "click")
        return as(e);
    }
    function Fy(t, e) {
      if (t === "input" || t === "change")
        return as(e);
    }
    function Wy(t, e) {
      return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
    }
    var Le = typeof Object.is == "function" ? Object.is : Wy;
    function Qu(t, e) {
      if (Le(t, e))
        return true;
      if (typeof t != "object" || t === null || typeof e != "object" || e === null)
        return false;
      var n = Object.keys(t), a = Object.keys(e);
      if (n.length !== a.length)
        return false;
      for (a = 0; a < n.length; a++) {
        var l = n[a];
        if (!_u.call(e, l) || !Le(t[l], e[l]))
          return false;
      }
      return true;
    }
    function gf(t) {
      for (; t && t.firstChild; )
        t = t.firstChild;
      return t;
    }
    function bf(t, e) {
      var n = gf(t);
      t = 0;
      for (var a; n; ) {
        if (n.nodeType === 3) {
          if (a = t + n.textContent.length, t <= e && a >= e)
            return { node: n, offset: e - t };
          t = a;
        }
        t: {
          for (; n; ) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break t;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = gf(n);
      }
    }
    function Sf(t, e) {
      return t && e ? t === e ? true : t && t.nodeType === 3 ? false : e && e.nodeType === 3 ? Sf(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : false : false;
    }
    function Ef(t) {
      t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
      for (var e = Ia(t.document); e instanceof t.HTMLIFrameElement; ) {
        try {
          var n = typeof e.contentWindow.location.href == "string";
        } catch (a) {
          n = false;
        }
        if (n)
          t = e.contentWindow;
        else
          break;
        e = Ia(t.document);
      }
      return e;
    }
    function Mc(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
    }
    var $y = We && "documentMode" in document && 11 >= document.documentMode, Ql = null, Nc = null, Vu = null, Bc = false;
    function Tf(t, e, n) {
      var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      Bc || Ql == null || Ql !== Ia(a) || (a = Ql, "selectionStart" in a && Mc(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset }), Vu && Qu(Vu, a) || (Vu = a, a = Zs(Nc, "onSelect"), 0 < a.length && (e = new el("onSelect", "select", null, e, n), t.push({ event: e, listeners: a }), e.target = Ql)));
    }
    function ll(t, e) {
      var n = {};
      return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
    }
    var Vl = { animationend: ll("Animation", "AnimationEnd"), animationiteration: ll("Animation", "AnimationIteration"), animationstart: ll("Animation", "AnimationStart"), transitionrun: ll("Transition", "TransitionRun"), transitionstart: ll("Transition", "TransitionStart"), transitioncancel: ll("Transition", "TransitionCancel"), transitionend: ll("Transition", "TransitionEnd") }, jc = {}, _f = {};
    We && (_f = document.createElement("div").style, "AnimationEvent" in window || (delete Vl.animationend.animation, delete Vl.animationiteration.animation, delete Vl.animationstart.animation), "TransitionEvent" in window || delete Vl.transitionend.transition);
    function ul(t) {
      if (jc[t])
        return jc[t];
      if (!Vl[t])
        return t;
      var e = Vl[t], n;
      for (n in e)
        if (e.hasOwnProperty(n) && n in _f)
          return jc[t] = e[n];
      return t;
    }
    var Af = ul("animationend"), Of = ul("animationiteration"), Rf = ul("animationstart"), Py = ul("transitionrun"), Iy = ul("transitionstart"), tm = ul("transitioncancel"), zf = ul("transitionend"), wf = /* @__PURE__ */ new Map(), qc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    qc.push("scrollEnd");
    function yn(t, e) {
      wf.set(t, e), Cn(e, [t]);
    }
    var ls = typeof reportError == "function" ? reportError : function(t) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var e = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t), error: t });
        if (!window.dispatchEvent(e))
          return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", t);
        return;
      }
      console.error(t);
    }, en = [], Zl = 0, Hc = 0;
    function us() {
      for (var t = Zl, e = Hc = Zl = 0; e < t; ) {
        var n = en[e];
        en[e++] = null;
        var a = en[e];
        en[e++] = null;
        var l = en[e];
        en[e++] = null;
        var u = en[e];
        if (en[e++] = null, a !== null && l !== null) {
          var r = a.pending;
          r === null ? l.next = l : (l.next = r.next, r.next = l), a.pending = l;
        }
        u !== 0 && Uf(n, l, u);
      }
    }
    function is(t, e, n, a) {
      en[Zl++] = t, en[Zl++] = e, en[Zl++] = n, en[Zl++] = a, Hc |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
    }
    function Lc(t, e, n, a) {
      return is(t, e, n, a), ss(t);
    }
    function il(t, e) {
      return is(t, null, null, e), ss(t);
    }
    function Uf(t, e, n) {
      t.lanes |= n;
      var a = t.alternate;
      a !== null && (a.lanes |= n);
      for (var l = false, u = t.return; u !== null; )
        u.childLanes |= n, a = u.alternate, a !== null && (a.childLanes |= n), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (l = true)), t = u, u = u.return;
      return t.tag === 3 ? (u = t.stateNode, l && e !== null && (l = 31 - be(n), t = u.hiddenUpdates, a = t[l], a === null ? t[l] = [e] : a.push(e), e.lane = n | 536870912), u) : null;
    }
    function ss(t) {
      if (50 < hi)
        throw hi = 0, Fo = null, Error(o(185));
      for (var e = t.return; e !== null; )
        t = e, e = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    var Kl = {};
    function em(t, e, n, a) {
      this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function Ye(t, e, n, a) {
      return new em(t, e, n, a);
    }
    function Yc(t) {
      return t = t.prototype, !(!t || !t.isReactComponent);
    }
    function Fn(t, e) {
      var n = t.alternate;
      return n === null ? (n = Ye(t.tag, e, t.key, t.mode), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 65011712, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n;
    }
    function Cf(t, e) {
      t.flags &= 65011714;
      var n = t.alternate;
      return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t;
    }
    function cs(t, e, n, a, l, u) {
      var r = 0;
      if (a = t, typeof t == "function")
        Yc(t) && (r = 1);
      else if (typeof t == "string")
        r = i0(t, n, I.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
      else
        t:
          switch (t) {
            case Ee:
              return t = Ye(31, n, e, l), t.elementType = Ee, t.lanes = u, t;
            case K:
              return sl(n.children, l, u, e);
            case it:
              r = 8, l |= 24;
              break;
            case yt:
              return t = Ye(12, n, e, l | 2), t.elementType = yt, t.lanes = u, t;
            case At:
              return t = Ye(13, n, e, l), t.elementType = At, t.lanes = u, t;
            case Lt:
              return t = Ye(19, n, e, l), t.elementType = Lt, t.lanes = u, t;
            default:
              if (typeof t == "object" && t !== null)
                switch (t.$$typeof) {
                  case ht:
                    r = 10;
                    break t;
                  case Dt:
                    r = 9;
                    break t;
                  case _t:
                    r = 11;
                    break t;
                  case ct:
                    r = 14;
                    break t;
                  case ue:
                    r = 16, a = null;
                    break t;
                }
              r = 29, n = Error(o(130, t === null ? "null" : typeof t, "")), a = null;
          }
      return e = Ye(r, n, e, l), e.elementType = t, e.type = a, e.lanes = u, e;
    }
    function sl(t, e, n, a) {
      return t = Ye(7, t, a, e), t.lanes = n, t;
    }
    function Xc(t, e, n) {
      return t = Ye(6, t, null, e), t.lanes = n, t;
    }
    function Df(t) {
      var e = Ye(18, null, null, 0);
      return e.stateNode = t, e;
    }
    function Gc(t, e, n) {
      return e = Ye(4, t.children !== null ? t.children : [], t.key, e), e.lanes = n, e.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, e;
    }
    var xf = /* @__PURE__ */ new WeakMap();
    function nn(t, e) {
      if (typeof t == "object" && t !== null) {
        var n = xf.get(t);
        return n !== void 0 ? n : (e = { value: t, source: e, stack: Di(e) }, xf.set(t, e), e);
      }
      return { value: t, source: e, stack: Di(e) };
    }
    var Jl = [], kl = 0, os = null, Zu = 0, an = [], ln = 0, ba = null, Nn = 1, Bn = "";
    function Wn(t, e) {
      Jl[kl++] = Zu, Jl[kl++] = os, os = t, Zu = e;
    }
    function Mf(t, e, n) {
      an[ln++] = Nn, an[ln++] = Bn, an[ln++] = ba, ba = t;
      var a = Nn;
      t = Bn;
      var l = 32 - be(a) - 1;
      a &= ~(1 << l), n += 1;
      var u = 32 - be(e) + l;
      if (30 < u) {
        var r = l - l % 5;
        u = (a & (1 << r) - 1).toString(32), a >>= r, l -= r, Nn = 1 << 32 - be(e) + l | n << l | a, Bn = u + t;
      } else
        Nn = 1 << u | n << l | a, Bn = t;
    }
    function Qc(t) {
      t.return !== null && (Wn(t, 1), Mf(t, 1, 0));
    }
    function Vc(t) {
      for (; t === os; )
        os = Jl[--kl], Jl[kl] = null, Zu = Jl[--kl], Jl[kl] = null;
      for (; t === ba; )
        ba = an[--ln], an[ln] = null, Bn = an[--ln], an[ln] = null, Nn = an[--ln], an[ln] = null;
    }
    function Nf(t, e) {
      an[ln++] = Nn, an[ln++] = Bn, an[ln++] = ba, Nn = e.id, Bn = e.overflow, ba = t;
    }
    var ye = null, Gt = null, Et = false, Sa = null, un = false, Zc = Error(o(519));
    function Ea(t) {
      var e = Error(o(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
      throw Ku(nn(e, t)), Zc;
    }
    function Bf(t) {
      var e = t.stateNode, n = t.type, a = t.memoizedProps;
      switch (e[se] = t, e[re] = a, n) {
        case "dialog":
          gt("cancel", e), gt("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          gt("load", e);
          break;
        case "video":
        case "audio":
          for (n = 0; n < pi.length; n++)
            gt(pi[n], e);
          break;
        case "source":
          gt("error", e);
          break;
        case "img":
        case "image":
        case "link":
          gt("error", e), gt("load", e);
          break;
        case "details":
          gt("toggle", e);
          break;
        case "input":
          gt("invalid", e), Ji(e, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, true);
          break;
        case "select":
          gt("invalid", e);
          break;
        case "textarea":
          gt("invalid", e), Bu(e, a.value, a.defaultValue, a.children);
      }
      n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || a.suppressHydrationWarning === true || Pd(e.textContent, n) ? (a.popover != null && (gt("beforetoggle", e), gt("toggle", e)), a.onScroll != null && gt("scroll", e), a.onScrollEnd != null && gt("scrollend", e), a.onClick != null && (e.onclick = Fe), e = true) : e = false, e || Ea(t, true);
    }
    function jf(t) {
      for (ye = t.return; ye; )
        switch (ye.tag) {
          case 5:
          case 31:
          case 13:
            un = false;
            return;
          case 27:
          case 3:
            un = true;
            return;
          default:
            ye = ye.return;
        }
    }
    function Fl(t) {
      if (t !== ye)
        return false;
      if (!Et)
        return jf(t), Et = true, false;
      var e = t.tag, n;
      if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || rr(t.type, t.memoizedProps)), n = !n), n && Gt && Ea(t), jf(t), e === 13) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t)
          throw Error(o(317));
        Gt = sp(t);
      } else if (e === 31) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t)
          throw Error(o(317));
        Gt = sp(t);
      } else
        e === 27 ? (e = Gt, Ba(t.type) ? (t = yr, yr = null, Gt = t) : Gt = e) : Gt = ye ? cn(t.stateNode.nextSibling) : null;
      return true;
    }
    function cl() {
      Gt = ye = null, Et = false;
    }
    function Kc() {
      var t = Sa;
      return t !== null && (Me === null ? Me = t : Me.push.apply(Me, t), Sa = null), t;
    }
    function Ku(t) {
      Sa === null ? Sa = [t] : Sa.push(t);
    }
    var Jc = R(null), ol = null, $n = null;
    function Ta(t, e, n) {
      W(Jc, e._currentValue), e._currentValue = n;
    }
    function Pn(t) {
      t._currentValue = Jc.current, Q(Jc);
    }
    function kc(t, e, n) {
      for (; t !== null; ) {
        var a = t.alternate;
        if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === n)
          break;
        t = t.return;
      }
    }
    function Fc(t, e, n, a) {
      var l = t.child;
      for (l !== null && (l.return = t); l !== null; ) {
        var u = l.dependencies;
        if (u !== null) {
          var r = l.child;
          u = u.firstContext;
          t:
            for (; u !== null; ) {
              var p = u;
              u = l;
              for (var _ = 0; _ < e.length; _++)
                if (p.context === e[_]) {
                  u.lanes |= n, p = u.alternate, p !== null && (p.lanes |= n), kc(u.return, n, t), a || (r = null);
                  break t;
                }
              u = p.next;
            }
        } else if (l.tag === 18) {
          if (r = l.return, r === null)
            throw Error(o(341));
          r.lanes |= n, u = r.alternate, u !== null && (u.lanes |= n), kc(r, n, t), r = null;
        } else
          r = l.child;
        if (r !== null)
          r.return = l;
        else
          for (r = l; r !== null; ) {
            if (r === t) {
              r = null;
              break;
            }
            if (l = r.sibling, l !== null) {
              l.return = r.return, r = l;
              break;
            }
            r = r.return;
          }
        l = r;
      }
    }
    function Wl(t, e, n, a) {
      t = null;
      for (var l = e, u = false; l !== null; ) {
        if (!u) {
          if ((l.flags & 524288) !== 0)
            u = true;
          else if ((l.flags & 262144) !== 0)
            break;
        }
        if (l.tag === 10) {
          var r = l.alternate;
          if (r === null)
            throw Error(o(387));
          if (r = r.memoizedProps, r !== null) {
            var p = l.type;
            Le(l.pendingProps.value, r.value) || (t !== null ? t.push(p) : t = [p]);
          }
        } else if (l === Ot.current) {
          if (r = l.alternate, r === null)
            throw Error(o(387));
          r.memoizedState.memoizedState !== l.memoizedState.memoizedState && (t !== null ? t.push(bi) : t = [bi]);
        }
        l = l.return;
      }
      t !== null && Fc(e, t, n, a), e.flags |= 262144;
    }
    function rs(t) {
      for (t = t.firstContext; t !== null; ) {
        if (!Le(t.context._currentValue, t.memoizedValue))
          return true;
        t = t.next;
      }
      return false;
    }
    function rl(t) {
      ol = t, $n = null, t = t.dependencies, t !== null && (t.firstContext = null);
    }
    function me(t) {
      return qf(ol, t);
    }
    function fs(t, e) {
      return ol === null && rl(t), qf(t, e);
    }
    function qf(t, e) {
      var n = e._currentValue;
      if (e = { context: e, memoizedValue: n, next: null }, $n === null) {
        if (t === null)
          throw Error(o(308));
        $n = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
      } else
        $n = $n.next = e;
      return n;
    }
    var nm = typeof AbortController != "undefined" ? AbortController : function() {
      var t = [], e = this.signal = { aborted: false, addEventListener: function(n, a) {
        t.push(a);
      } };
      this.abort = function() {
        e.aborted = true, t.forEach(function(n) {
          return n();
        });
      };
    }, am = s.unstable_scheduleCallback, lm = s.unstable_NormalPriority, te = { $$typeof: ht, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
    function Wc() {
      return { controller: new nm(), data: /* @__PURE__ */ new Map(), refCount: 0 };
    }
    function Ju(t) {
      t.refCount--, t.refCount === 0 && am(lm, function() {
        t.controller.abort();
      });
    }
    var ku = null, $c = 0, $l = 0, Pl = null;
    function um(t, e) {
      if (ku === null) {
        var n = ku = [];
        $c = 0, $l = er(), Pl = { status: "pending", value: void 0, then: function(a) {
          n.push(a);
        } };
      }
      return $c++, e.then(Hf, Hf), e;
    }
    function Hf() {
      if (--$c === 0 && ku !== null) {
        Pl !== null && (Pl.status = "fulfilled");
        var t = ku;
        ku = null, $l = 0, Pl = null;
        for (var e = 0; e < t.length; e++)
          (0, t[e])();
      }
    }
    function im(t, e) {
      var n = [], a = { status: "pending", value: null, reason: null, then: function(l) {
        n.push(l);
      } };
      return t.then(function() {
        a.status = "fulfilled", a.value = e;
        for (var l = 0; l < n.length; l++)
          (0, n[l])(e);
      }, function(l) {
        for (a.status = "rejected", a.reason = l, l = 0; l < n.length; l++)
          (0, n[l])(void 0);
      }), a;
    }
    var Lf = H.S;
    H.S = function(t, e) {
      Td = Ae(), typeof e == "object" && e !== null && typeof e.then == "function" && um(t, e), Lf !== null && Lf(t, e);
    };
    var fl = R(null);
    function Pc() {
      var t = fl.current;
      return t !== null ? t : Ht.pooledCache;
    }
    function hs(t, e) {
      e === null ? W(fl, fl.current) : W(fl, e.pool);
    }
    function Yf() {
      var t = Pc();
      return t === null ? null : { parent: te._currentValue, pool: t };
    }
    var Il = Error(o(460)), Ic = Error(o(474)), ds = Error(o(542)), ps = { then: function() {
    } };
    function Xf(t) {
      return t = t.status, t === "fulfilled" || t === "rejected";
    }
    function Gf(t, e, n) {
      switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(Fe, Fe), e = n), e.status) {
        case "fulfilled":
          return e.value;
        case "rejected":
          throw t = e.reason, Vf(t), t;
        default:
          if (typeof e.status == "string")
            e.then(Fe, Fe);
          else {
            if (t = Ht, t !== null && 100 < t.shellSuspendCounter)
              throw Error(o(482));
            t = e, t.status = "pending", t.then(function(a) {
              if (e.status === "pending") {
                var l = e;
                l.status = "fulfilled", l.value = a;
              }
            }, function(a) {
              if (e.status === "pending") {
                var l = e;
                l.status = "rejected", l.reason = a;
              }
            });
          }
          switch (e.status) {
            case "fulfilled":
              return e.value;
            case "rejected":
              throw t = e.reason, Vf(t), t;
          }
          throw dl = e, Il;
      }
    }
    function hl(t) {
      try {
        var e = t._init;
        return e(t._payload);
      } catch (n) {
        throw n !== null && typeof n == "object" && typeof n.then == "function" ? (dl = n, Il) : n;
      }
    }
    var dl = null;
    function Qf() {
      if (dl === null)
        throw Error(o(459));
      var t = dl;
      return dl = null, t;
    }
    function Vf(t) {
      if (t === Il || t === ds)
        throw Error(o(483));
    }
    var tu = null, Fu = 0;
    function ys(t) {
      var e = Fu;
      return Fu += 1, tu === null && (tu = []), Gf(tu, t, e);
    }
    function Wu(t, e) {
      e = e.props.ref, t.ref = e !== void 0 ? e : null;
    }
    function ms(t, e) {
      throw e.$$typeof === X ? Error(o(525)) : (t = Object.prototype.toString.call(e), Error(o(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)));
    }
    function Zf(t) {
      function e(U, O) {
        if (t) {
          var x = U.deletions;
          x === null ? (U.deletions = [O], U.flags |= 16) : x.push(O);
        }
      }
      function n(U, O) {
        if (!t)
          return null;
        for (; O !== null; )
          e(U, O), O = O.sibling;
        return null;
      }
      function a(U) {
        for (var O = /* @__PURE__ */ new Map(); U !== null; )
          U.key !== null ? O.set(U.key, U) : O.set(U.index, U), U = U.sibling;
        return O;
      }
      function l(U, O) {
        return U = Fn(U, O), U.index = 0, U.sibling = null, U;
      }
      function u(U, O, x) {
        return U.index = x, t ? (x = U.alternate, x !== null ? (x = x.index, x < O ? (U.flags |= 67108866, O) : x) : (U.flags |= 67108866, O)) : (U.flags |= 1048576, O);
      }
      function r(U) {
        return t && U.alternate === null && (U.flags |= 67108866), U;
      }
      function p(U, O, x, Y) {
        return O === null || O.tag !== 6 ? (O = Xc(x, U.mode, Y), O.return = U, O) : (O = l(O, x), O.return = U, O);
      }
      function _(U, O, x, Y) {
        var at = x.type;
        return at === K ? L(U, O, x.props.children, Y, x.key) : O !== null && (O.elementType === at || typeof at == "object" && at !== null && at.$$typeof === ue && hl(at) === O.type) ? (O = l(O, x.props), Wu(O, x), O.return = U, O) : (O = cs(x.type, x.key, x.props, null, U.mode, Y), Wu(O, x), O.return = U, O);
      }
      function M(U, O, x, Y) {
        return O === null || O.tag !== 4 || O.stateNode.containerInfo !== x.containerInfo || O.stateNode.implementation !== x.implementation ? (O = Gc(x, U.mode, Y), O.return = U, O) : (O = l(O, x.children || []), O.return = U, O);
      }
      function L(U, O, x, Y, at) {
        return O === null || O.tag !== 7 ? (O = sl(x, U.mode, Y, at), O.return = U, O) : (O = l(O, x), O.return = U, O);
      }
      function G(U, O, x) {
        if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
          return O = Xc("" + O, U.mode, x), O.return = U, O;
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case z:
              return x = cs(O.type, O.key, O.props, null, U.mode, x), Wu(x, O), x.return = U, x;
            case j:
              return O = Gc(O, U.mode, x), O.return = U, O;
            case ue:
              return O = hl(O), G(U, O, x);
          }
          if (je(O) || ie(O))
            return O = sl(O, U.mode, x, null), O.return = U, O;
          if (typeof O.then == "function")
            return G(U, ys(O), x);
          if (O.$$typeof === ht)
            return G(U, fs(U, O), x);
          ms(U, O);
        }
        return null;
      }
      function N(U, O, x, Y) {
        var at = O !== null ? O.key : null;
        if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint")
          return at !== null ? null : p(U, O, "" + x, Y);
        if (typeof x == "object" && x !== null) {
          switch (x.$$typeof) {
            case z:
              return x.key === at ? _(U, O, x, Y) : null;
            case j:
              return x.key === at ? M(U, O, x, Y) : null;
            case ue:
              return x = hl(x), N(U, O, x, Y);
          }
          if (je(x) || ie(x))
            return at !== null ? null : L(U, O, x, Y, null);
          if (typeof x.then == "function")
            return N(U, O, ys(x), Y);
          if (x.$$typeof === ht)
            return N(U, O, fs(U, x), Y);
          ms(U, x);
        }
        return null;
      }
      function q(U, O, x, Y, at) {
        if (typeof Y == "string" && Y !== "" || typeof Y == "number" || typeof Y == "bigint")
          return U = U.get(x) || null, p(O, U, "" + Y, at);
        if (typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case z:
              return U = U.get(Y.key === null ? x : Y.key) || null, _(O, U, Y, at);
            case j:
              return U = U.get(Y.key === null ? x : Y.key) || null, M(O, U, Y, at);
            case ue:
              return Y = hl(Y), q(U, O, x, Y, at);
          }
          if (je(Y) || ie(Y))
            return U = U.get(x) || null, L(O, U, Y, at, null);
          if (typeof Y.then == "function")
            return q(U, O, x, ys(Y), at);
          if (Y.$$typeof === ht)
            return q(U, O, x, fs(O, Y), at);
          ms(O, Y);
        }
        return null;
      }
      function P(U, O, x, Y) {
        for (var at = null, Rt = null, et = O, pt = O = 0, St = null; et !== null && pt < x.length; pt++) {
          et.index > pt ? (St = et, et = null) : St = et.sibling;
          var zt = N(U, et, x[pt], Y);
          if (zt === null) {
            et === null && (et = St);
            break;
          }
          t && et && zt.alternate === null && e(U, et), O = u(zt, O, pt), Rt === null ? at = zt : Rt.sibling = zt, Rt = zt, et = St;
        }
        if (pt === x.length)
          return n(U, et), Et && Wn(U, pt), at;
        if (et === null) {
          for (; pt < x.length; pt++)
            et = G(U, x[pt], Y), et !== null && (O = u(et, O, pt), Rt === null ? at = et : Rt.sibling = et, Rt = et);
          return Et && Wn(U, pt), at;
        }
        for (et = a(et); pt < x.length; pt++)
          St = q(et, U, pt, x[pt], Y), St !== null && (t && St.alternate !== null && et.delete(St.key === null ? pt : St.key), O = u(St, O, pt), Rt === null ? at = St : Rt.sibling = St, Rt = St);
        return t && et.forEach(function(Ya) {
          return e(U, Ya);
        }), Et && Wn(U, pt), at;
      }
      function lt(U, O, x, Y) {
        if (x == null)
          throw Error(o(151));
        for (var at = null, Rt = null, et = O, pt = O = 0, St = null, zt = x.next(); et !== null && !zt.done; pt++, zt = x.next()) {
          et.index > pt ? (St = et, et = null) : St = et.sibling;
          var Ya = N(U, et, zt.value, Y);
          if (Ya === null) {
            et === null && (et = St);
            break;
          }
          t && et && Ya.alternate === null && e(U, et), O = u(Ya, O, pt), Rt === null ? at = Ya : Rt.sibling = Ya, Rt = Ya, et = St;
        }
        if (zt.done)
          return n(U, et), Et && Wn(U, pt), at;
        if (et === null) {
          for (; !zt.done; pt++, zt = x.next())
            zt = G(U, zt.value, Y), zt !== null && (O = u(zt, O, pt), Rt === null ? at = zt : Rt.sibling = zt, Rt = zt);
          return Et && Wn(U, pt), at;
        }
        for (et = a(et); !zt.done; pt++, zt = x.next())
          zt = q(et, U, pt, zt.value, Y), zt !== null && (t && zt.alternate !== null && et.delete(zt.key === null ? pt : zt.key), O = u(zt, O, pt), Rt === null ? at = zt : Rt.sibling = zt, Rt = zt);
        return t && et.forEach(function(v0) {
          return e(U, v0);
        }), Et && Wn(U, pt), at;
      }
      function qt(U, O, x, Y) {
        if (typeof x == "object" && x !== null && x.type === K && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
          switch (x.$$typeof) {
            case z:
              t: {
                for (var at = x.key; O !== null; ) {
                  if (O.key === at) {
                    if (at = x.type, at === K) {
                      if (O.tag === 7) {
                        n(U, O.sibling), Y = l(O, x.props.children), Y.return = U, U = Y;
                        break t;
                      }
                    } else if (O.elementType === at || typeof at == "object" && at !== null && at.$$typeof === ue && hl(at) === O.type) {
                      n(U, O.sibling), Y = l(O, x.props), Wu(Y, x), Y.return = U, U = Y;
                      break t;
                    }
                    n(U, O);
                    break;
                  } else
                    e(U, O);
                  O = O.sibling;
                }
                x.type === K ? (Y = sl(x.props.children, U.mode, Y, x.key), Y.return = U, U = Y) : (Y = cs(x.type, x.key, x.props, null, U.mode, Y), Wu(Y, x), Y.return = U, U = Y);
              }
              return r(U);
            case j:
              t: {
                for (at = x.key; O !== null; ) {
                  if (O.key === at)
                    if (O.tag === 4 && O.stateNode.containerInfo === x.containerInfo && O.stateNode.implementation === x.implementation) {
                      n(U, O.sibling), Y = l(O, x.children || []), Y.return = U, U = Y;
                      break t;
                    } else {
                      n(U, O);
                      break;
                    }
                  else
                    e(U, O);
                  O = O.sibling;
                }
                Y = Gc(x, U.mode, Y), Y.return = U, U = Y;
              }
              return r(U);
            case ue:
              return x = hl(x), qt(U, O, x, Y);
          }
          if (je(x))
            return P(U, O, x, Y);
          if (ie(x)) {
            if (at = ie(x), typeof at != "function")
              throw Error(o(150));
            return x = at.call(x), lt(U, O, x, Y);
          }
          if (typeof x.then == "function")
            return qt(U, O, ys(x), Y);
          if (x.$$typeof === ht)
            return qt(U, O, fs(U, x), Y);
          ms(U, x);
        }
        return typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint" ? (x = "" + x, O !== null && O.tag === 6 ? (n(U, O.sibling), Y = l(O, x), Y.return = U, U = Y) : (n(U, O), Y = Xc(x, U.mode, Y), Y.return = U, U = Y), r(U)) : n(U, O);
      }
      return function(U, O, x, Y) {
        try {
          Fu = 0;
          var at = qt(U, O, x, Y);
          return tu = null, at;
        } catch (et) {
          if (et === Il || et === ds)
            throw et;
          var Rt = Ye(29, et, null, U.mode);
          return Rt.lanes = Y, Rt.return = U, Rt;
        } finally {
        }
      };
    }
    var pl = Zf(true), Kf = Zf(false), _a = false;
    function to(t) {
      t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
    }
    function eo(t, e) {
      t = t.updateQueue, e.updateQueue === t && (e.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, callbacks: null });
    }
    function Aa(t) {
      return { lane: t, tag: 0, payload: null, callback: null, next: null };
    }
    function Oa(t, e, n) {
      var a = t.updateQueue;
      if (a === null)
        return null;
      if (a = a.shared, (Ct & 2) !== 0) {
        var l = a.pending;
        return l === null ? e.next = e : (e.next = l.next, l.next = e), a.pending = e, e = ss(t), Uf(t, null, n), e;
      }
      return is(t, a, e, n), ss(t);
    }
    function $u(t, e, n) {
      if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
        var a = e.lanes;
        a &= t.pendingLanes, n |= a, e.lanes = n, Hi(t, n);
      }
    }
    function no(t, e) {
      var n = t.updateQueue, a = t.alternate;
      if (a !== null && (a = a.updateQueue, n === a)) {
        var l = null, u = null;
        if (n = n.firstBaseUpdate, n !== null) {
          do {
            var r = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
            u === null ? l = u = r : u = u.next = r, n = n.next;
          } while (n !== null);
          u === null ? l = u = e : u = u.next = e;
        } else
          l = u = e;
        n = { baseState: a.baseState, firstBaseUpdate: l, lastBaseUpdate: u, shared: a.shared, callbacks: a.callbacks }, t.updateQueue = n;
        return;
      }
      t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e;
    }
    var ao = false;
    function Pu() {
      if (ao) {
        var t = Pl;
        if (t !== null)
          throw t;
      }
    }
    function Iu(t, e, n, a) {
      ao = false;
      var l = t.updateQueue;
      _a = false;
      var u = l.firstBaseUpdate, r = l.lastBaseUpdate, p = l.shared.pending;
      if (p !== null) {
        l.shared.pending = null;
        var _ = p, M = _.next;
        _.next = null, r === null ? u = M : r.next = M, r = _;
        var L = t.alternate;
        L !== null && (L = L.updateQueue, p = L.lastBaseUpdate, p !== r && (p === null ? L.firstBaseUpdate = M : p.next = M, L.lastBaseUpdate = _));
      }
      if (u !== null) {
        var G = l.baseState;
        r = 0, L = M = _ = null, p = u;
        do {
          var N = p.lane & -536870913, q = N !== p.lane;
          if (q ? (bt & N) === N : (a & N) === N) {
            N !== 0 && N === $l && (ao = true), L !== null && (L = L.next = { lane: 0, tag: p.tag, payload: p.payload, callback: null, next: null });
            t: {
              var P = t, lt = p;
              N = e;
              var qt = n;
              switch (lt.tag) {
                case 1:
                  if (P = lt.payload, typeof P == "function") {
                    G = P.call(qt, G, N);
                    break t;
                  }
                  G = P;
                  break t;
                case 3:
                  P.flags = P.flags & -65537 | 128;
                case 0:
                  if (P = lt.payload, N = typeof P == "function" ? P.call(qt, G, N) : P, N == null)
                    break t;
                  G = w({}, G, N);
                  break t;
                case 2:
                  _a = true;
              }
            }
            N = p.callback, N !== null && (t.flags |= 64, q && (t.flags |= 8192), q = l.callbacks, q === null ? l.callbacks = [N] : q.push(N));
          } else
            q = { lane: N, tag: p.tag, payload: p.payload, callback: p.callback, next: null }, L === null ? (M = L = q, _ = G) : L = L.next = q, r |= N;
          if (p = p.next, p === null) {
            if (p = l.shared.pending, p === null)
              break;
            q = p, p = q.next, q.next = null, l.lastBaseUpdate = q, l.shared.pending = null;
          }
        } while (true);
        L === null && (_ = G), l.baseState = _, l.firstBaseUpdate = M, l.lastBaseUpdate = L, u === null && (l.shared.lanes = 0), Ca |= r, t.lanes = r, t.memoizedState = G;
      }
    }
    function Jf(t, e) {
      if (typeof t != "function")
        throw Error(o(191, t));
      t.call(e);
    }
    function kf(t, e) {
      var n = t.callbacks;
      if (n !== null)
        for (t.callbacks = null, t = 0; t < n.length; t++)
          Jf(n[t], e);
    }
    var eu = R(null), vs = R(0);
    function Ff(t, e) {
      t = sa, W(vs, t), W(eu, e), sa = t | e.baseLanes;
    }
    function lo() {
      W(vs, sa), W(eu, eu.current);
    }
    function uo() {
      sa = vs.current, Q(eu), Q(vs);
    }
    var Xe = R(null), sn = null;
    function Ra(t) {
      var e = t.alternate;
      W($t, $t.current & 1), W(Xe, t), sn === null && (e === null || eu.current !== null || e.memoizedState !== null) && (sn = t);
    }
    function io(t) {
      W($t, $t.current), W(Xe, t), sn === null && (sn = t);
    }
    function Wf(t) {
      t.tag === 22 ? (W($t, $t.current), W(Xe, t), sn === null && (sn = t)) : za();
    }
    function za() {
      W($t, $t.current), W(Xe, Xe.current);
    }
    function Ge(t) {
      Q(Xe), sn === t && (sn = null), Q($t);
    }
    var $t = R(0);
    function gs(t) {
      for (var e = t; e !== null; ) {
        if (e.tag === 13) {
          var n = e.memoizedState;
          if (n !== null && (n = n.dehydrated, n === null || dr(n) || pr(n)))
            return e;
        } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
          if ((e.flags & 128) !== 0)
            return e;
        } else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t)
          break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t)
            return null;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      return null;
    }
    var In = 0, dt = null, Bt = null, ee = null, bs = false, nu = false, yl = false, Ss = 0, ti = 0, au = null, sm = 0;
    function Jt() {
      throw Error(o(321));
    }
    function so(t, e) {
      if (e === null)
        return false;
      for (var n = 0; n < e.length && n < t.length; n++)
        if (!Le(t[n], e[n]))
          return false;
      return true;
    }
    function co(t, e, n, a, l, u) {
      return In = u, dt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, H.H = t === null || t.memoizedState === null ? Mh : Ao, yl = false, u = n(a, l), yl = false, nu && (u = Pf(e, n, a, l)), $f(t), u;
    }
    function $f(t) {
      H.H = ai;
      var e = Bt !== null && Bt.next !== null;
      if (In = 0, ee = Bt = dt = null, bs = false, ti = 0, au = null, e)
        throw Error(o(300));
      t === null || ne || (t = t.dependencies, t !== null && rs(t) && (ne = true));
    }
    function Pf(t, e, n, a) {
      dt = t;
      var l = 0;
      do {
        if (nu && (au = null), ti = 0, nu = false, 25 <= l)
          throw Error(o(301));
        if (l += 1, ee = Bt = null, t.updateQueue != null) {
          var u = t.updateQueue;
          u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
        }
        H.H = Nh, u = e(n, a);
      } while (nu);
      return u;
    }
    function cm() {
      var t = H.H, e = t.useState()[0];
      return e = typeof e.then == "function" ? ei(e) : e, t = t.useState()[0], (Bt !== null ? Bt.memoizedState : null) !== t && (dt.flags |= 1024), e;
    }
    function oo() {
      var t = Ss !== 0;
      return Ss = 0, t;
    }
    function ro(t, e, n) {
      e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
    }
    function fo(t) {
      if (bs) {
        for (t = t.memoizedState; t !== null; ) {
          var e = t.queue;
          e !== null && (e.pending = null), t = t.next;
        }
        bs = false;
      }
      In = 0, ee = Bt = dt = null, nu = false, ti = Ss = 0, au = null;
    }
    function ze() {
      var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return ee === null ? dt.memoizedState = ee = t : ee = ee.next = t, ee;
    }
    function Pt() {
      if (Bt === null) {
        var t = dt.alternate;
        t = t !== null ? t.memoizedState : null;
      } else
        t = Bt.next;
      var e = ee === null ? dt.memoizedState : ee.next;
      if (e !== null)
        ee = e, Bt = t;
      else {
        if (t === null)
          throw dt.alternate === null ? Error(o(467)) : Error(o(310));
        Bt = t, t = { memoizedState: Bt.memoizedState, baseState: Bt.baseState, baseQueue: Bt.baseQueue, queue: Bt.queue, next: null }, ee === null ? dt.memoizedState = ee = t : ee = ee.next = t;
      }
      return ee;
    }
    function Es() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function ei(t) {
      var e = ti;
      return ti += 1, au === null && (au = []), t = Gf(au, t, e), e = dt, (ee === null ? e.memoizedState : ee.next) === null && (e = e.alternate, H.H = e === null || e.memoizedState === null ? Mh : Ao), t;
    }
    function Ts(t) {
      if (t !== null && typeof t == "object") {
        if (typeof t.then == "function")
          return ei(t);
        if (t.$$typeof === ht)
          return me(t);
      }
      throw Error(o(438, String(t)));
    }
    function ho(t) {
      var e = null, n = dt.updateQueue;
      if (n !== null && (e = n.memoCache), e == null) {
        var a = dt.alternate;
        a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = { data: a.data.map(function(l) {
          return l.slice();
        }), index: 0 })));
      }
      if (e == null && (e = { data: [], index: 0 }), n === null && (n = Es(), dt.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0)
        for (n = e.data[e.index] = Array(t), a = 0; a < t; a++)
          n[a] = hn;
      return e.index++, n;
    }
    function ta(t, e) {
      return typeof e == "function" ? e(t) : e;
    }
    function _s(t) {
      var e = Pt();
      return po(e, Bt, t);
    }
    function po(t, e, n) {
      var a = t.queue;
      if (a === null)
        throw Error(o(311));
      a.lastRenderedReducer = n;
      var l = t.baseQueue, u = a.pending;
      if (u !== null) {
        if (l !== null) {
          var r = l.next;
          l.next = u.next, u.next = r;
        }
        e.baseQueue = l = u, a.pending = null;
      }
      if (u = t.baseState, l === null)
        t.memoizedState = u;
      else {
        e = l.next;
        var p = r = null, _ = null, M = e, L = false;
        do {
          var G = M.lane & -536870913;
          if (G !== M.lane ? (bt & G) === G : (In & G) === G) {
            var N = M.revertLane;
            if (N === 0)
              _ !== null && (_ = _.next = { lane: 0, revertLane: 0, gesture: null, action: M.action, hasEagerState: M.hasEagerState, eagerState: M.eagerState, next: null }), G === $l && (L = true);
            else if ((In & N) === N) {
              M = M.next, N === $l && (L = true);
              continue;
            } else
              G = { lane: 0, revertLane: M.revertLane, gesture: null, action: M.action, hasEagerState: M.hasEagerState, eagerState: M.eagerState, next: null }, _ === null ? (p = _ = G, r = u) : _ = _.next = G, dt.lanes |= N, Ca |= N;
            G = M.action, yl && n(u, G), u = M.hasEagerState ? M.eagerState : n(u, G);
          } else
            N = { lane: G, revertLane: M.revertLane, gesture: M.gesture, action: M.action, hasEagerState: M.hasEagerState, eagerState: M.eagerState, next: null }, _ === null ? (p = _ = N, r = u) : _ = _.next = N, dt.lanes |= G, Ca |= G;
          M = M.next;
        } while (M !== null && M !== e);
        if (_ === null ? r = u : _.next = p, !Le(u, t.memoizedState) && (ne = true, L && (n = Pl, n !== null)))
          throw n;
        t.memoizedState = u, t.baseState = r, t.baseQueue = _, a.lastRenderedState = u;
      }
      return l === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
    }
    function yo(t) {
      var e = Pt(), n = e.queue;
      if (n === null)
        throw Error(o(311));
      n.lastRenderedReducer = t;
      var a = n.dispatch, l = n.pending, u = e.memoizedState;
      if (l !== null) {
        n.pending = null;
        var r = l = l.next;
        do
          u = t(u, r.action), r = r.next;
        while (r !== l);
        Le(u, e.memoizedState) || (ne = true), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), n.lastRenderedState = u;
      }
      return [u, a];
    }
    function If(t, e, n) {
      var a = dt, l = Pt(), u = Et;
      if (u) {
        if (n === void 0)
          throw Error(o(407));
        n = n();
      } else
        n = e();
      var r = !Le((Bt || l).memoizedState, n);
      if (r && (l.memoizedState = n, ne = true), l = l.queue, go(nh.bind(null, a, l, t), [t]), l.getSnapshot !== e || r || ee !== null && ee.memoizedState.tag & 1) {
        if (a.flags |= 2048, lu(9, { destroy: void 0 }, eh.bind(null, a, l, n, e), null), Ht === null)
          throw Error(o(349));
        u || (In & 127) !== 0 || th(a, e, n);
      }
      return n;
    }
    function th(t, e, n) {
      t.flags |= 16384, t = { getSnapshot: e, value: n }, e = dt.updateQueue, e === null ? (e = Es(), dt.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
    }
    function eh(t, e, n, a) {
      e.value = n, e.getSnapshot = a, ah(e) && lh(t);
    }
    function nh(t, e, n) {
      return n(function() {
        ah(e) && lh(t);
      });
    }
    function ah(t) {
      var e = t.getSnapshot;
      t = t.value;
      try {
        var n = e();
        return !Le(t, n);
      } catch (a) {
        return true;
      }
    }
    function lh(t) {
      var e = il(t, 2);
      e !== null && Ne(e, t, 2);
    }
    function mo(t) {
      var e = ze();
      if (typeof t == "function") {
        var n = t;
        if (t = n(), yl) {
          qe(true);
          try {
            n();
          } finally {
            qe(false);
          }
        }
      }
      return e.memoizedState = e.baseState = t, e.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ta, lastRenderedState: t }, e;
    }
    function uh(t, e, n, a) {
      return t.baseState = n, po(t, Bt, typeof a == "function" ? a : ta);
    }
    function om(t, e, n, a, l) {
      if (Rs(t))
        throw Error(o(485));
      if (t = e.action, t !== null) {
        var u = { payload: l, action: t, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(r) {
          u.listeners.push(r);
        } };
        H.T !== null ? n(true) : u.isTransition = false, a(u), n = e.pending, n === null ? (u.next = e.pending = u, ih(e, u)) : (u.next = n.next, e.pending = n.next = u);
      }
    }
    function ih(t, e) {
      var n = e.action, a = e.payload, l = t.state;
      if (e.isTransition) {
        var u = H.T, r = {};
        H.T = r;
        try {
          var p = n(l, a), _ = H.S;
          _ !== null && _(r, p), sh(t, e, p);
        } catch (M) {
          vo(t, e, M);
        } finally {
          u !== null && r.types !== null && (u.types = r.types), H.T = u;
        }
      } else
        try {
          u = n(l, a), sh(t, e, u);
        } catch (M) {
          vo(t, e, M);
        }
    }
    function sh(t, e, n) {
      n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(a) {
        ch(t, e, a);
      }, function(a) {
        return vo(t, e, a);
      }) : ch(t, e, n);
    }
    function ch(t, e, n) {
      e.status = "fulfilled", e.value = n, oh(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, ih(t, n)));
    }
    function vo(t, e, n) {
      var a = t.pending;
      if (t.pending = null, a !== null) {
        a = a.next;
        do
          e.status = "rejected", e.reason = n, oh(e), e = e.next;
        while (e !== a);
      }
      t.action = null;
    }
    function oh(t) {
      t = t.listeners;
      for (var e = 0; e < t.length; e++)
        (0, t[e])();
    }
    function rh(t, e) {
      return e;
    }
    function fh(t, e) {
      if (Et) {
        var n = Ht.formState;
        if (n !== null) {
          t: {
            var a = dt;
            if (Et) {
              if (Gt) {
                e: {
                  for (var l = Gt, u = un; l.nodeType !== 8; ) {
                    if (!u) {
                      l = null;
                      break e;
                    }
                    if (l = cn(l.nextSibling), l === null) {
                      l = null;
                      break e;
                    }
                  }
                  u = l.data, l = u === "F!" || u === "F" ? l : null;
                }
                if (l) {
                  Gt = cn(l.nextSibling), a = l.data === "F!";
                  break t;
                }
              }
              Ea(a);
            }
            a = false;
          }
          a && (e = n[0]);
        }
      }
      return n = ze(), n.memoizedState = n.baseState = e, a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: rh, lastRenderedState: e }, n.queue = a, n = Ch.bind(null, dt, a), a.dispatch = n, a = mo(false), u = _o.bind(null, dt, false, a.queue), a = ze(), l = { state: e, dispatch: null, action: t, pending: null }, a.queue = l, n = om.bind(null, dt, l, u, n), l.dispatch = n, a.memoizedState = t, [e, n, false];
    }
    function hh(t) {
      var e = Pt();
      return dh(e, Bt, t);
    }
    function dh(t, e, n) {
      if (e = po(t, e, rh)[0], t = _s(ta)[0], typeof e == "object" && e !== null && typeof e.then == "function")
        try {
          var a = ei(e);
        } catch (r) {
          throw r === Il ? ds : r;
        }
      else
        a = e;
      e = Pt();
      var l = e.queue, u = l.dispatch;
      return n !== e.memoizedState && (dt.flags |= 2048, lu(9, { destroy: void 0 }, rm.bind(null, l, n), null)), [a, u, t];
    }
    function rm(t, e) {
      t.action = e;
    }
    function ph(t) {
      var e = Pt(), n = Bt;
      if (n !== null)
        return dh(e, n, t);
      Pt(), e = e.memoizedState, n = Pt();
      var a = n.queue.dispatch;
      return n.memoizedState = t, [e, a, false];
    }
    function lu(t, e, n, a) {
      return t = { tag: t, create: n, deps: a, inst: e, next: null }, e = dt.updateQueue, e === null && (e = Es(), dt.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (a = n.next, n.next = t, t.next = a, e.lastEffect = t), t;
    }
    function yh() {
      return Pt().memoizedState;
    }
    function As(t, e, n, a) {
      var l = ze();
      dt.flags |= t, l.memoizedState = lu(1 | e, { destroy: void 0 }, n, a === void 0 ? null : a);
    }
    function Os(t, e, n, a) {
      var l = Pt();
      a = a === void 0 ? null : a;
      var u = l.memoizedState.inst;
      Bt !== null && a !== null && so(a, Bt.memoizedState.deps) ? l.memoizedState = lu(e, u, n, a) : (dt.flags |= t, l.memoizedState = lu(1 | e, u, n, a));
    }
    function mh(t, e) {
      As(8390656, 8, t, e);
    }
    function go(t, e) {
      Os(2048, 8, t, e);
    }
    function fm(t) {
      dt.flags |= 4;
      var e = dt.updateQueue;
      if (e === null)
        e = Es(), dt.updateQueue = e, e.events = [t];
      else {
        var n = e.events;
        n === null ? e.events = [t] : n.push(t);
      }
    }
    function vh(t) {
      var e = Pt().memoizedState;
      return fm({ ref: e, nextImpl: t }), function() {
        if ((Ct & 2) !== 0)
          throw Error(o(440));
        return e.impl.apply(void 0, arguments);
      };
    }
    function gh(t, e) {
      return Os(4, 2, t, e);
    }
    function bh(t, e) {
      return Os(4, 4, t, e);
    }
    function Sh(t, e) {
      if (typeof e == "function") {
        t = t();
        var n = e(t);
        return function() {
          typeof n == "function" ? n() : e(null);
        };
      }
      if (e != null)
        return t = t(), e.current = t, function() {
          e.current = null;
        };
    }
    function Eh(t, e, n) {
      n = n != null ? n.concat([t]) : null, Os(4, 4, Sh.bind(null, e, t), n);
    }
    function bo() {
    }
    function Th(t, e) {
      var n = Pt();
      e = e === void 0 ? null : e;
      var a = n.memoizedState;
      return e !== null && so(e, a[1]) ? a[0] : (n.memoizedState = [t, e], t);
    }
    function _h(t, e) {
      var n = Pt();
      e = e === void 0 ? null : e;
      var a = n.memoizedState;
      if (e !== null && so(e, a[1]))
        return a[0];
      if (a = t(), yl) {
        qe(true);
        try {
          t();
        } finally {
          qe(false);
        }
      }
      return n.memoizedState = [a, e], a;
    }
    function So(t, e, n) {
      return n === void 0 || (In & 1073741824) !== 0 && (bt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = n, t = Ad(), dt.lanes |= t, Ca |= t, n);
    }
    function Ah(t, e, n, a) {
      return Le(n, e) ? n : eu.current !== null ? (t = So(t, n, a), Le(t, e) || (ne = true), t) : (In & 42) === 0 || (In & 1073741824) !== 0 && (bt & 261930) === 0 ? (ne = true, t.memoizedState = n) : (t = Ad(), dt.lanes |= t, Ca |= t, e);
    }
    function Oh(t, e, n, a, l) {
      var u = F.p;
      F.p = u !== 0 && 8 > u ? u : 8;
      var r = H.T, p = {};
      H.T = p, _o(t, false, e, n);
      try {
        var _ = l(), M = H.S;
        if (M !== null && M(p, _), _ !== null && typeof _ == "object" && typeof _.then == "function") {
          var L = im(_, a);
          ni(t, e, L, Ze(t));
        } else
          ni(t, e, a, Ze(t));
      } catch (G) {
        ni(t, e, { then: function() {
        }, status: "rejected", reason: G }, Ze());
      } finally {
        F.p = u, r !== null && p.types !== null && (r.types = p.types), H.T = r;
      }
    }
    function hm() {
    }
    function Eo(t, e, n, a) {
      if (t.tag !== 5)
        throw Error(o(476));
      var l = Rh(t).queue;
      Oh(t, l, e, nt, n === null ? hm : function() {
        return zh(t), n(a);
      });
    }
    function Rh(t) {
      var e = t.memoizedState;
      if (e !== null)
        return e;
      e = { memoizedState: nt, baseState: nt, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ta, lastRenderedState: nt }, next: null };
      var n = {};
      return e.next = { memoizedState: n, baseState: n, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ta, lastRenderedState: n }, next: null }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
    }
    function zh(t) {
      var e = Rh(t);
      e.next === null && (e = t.alternate.memoizedState), ni(t, e.next.queue, {}, Ze());
    }
    function To() {
      return me(bi);
    }
    function wh() {
      return Pt().memoizedState;
    }
    function Uh() {
      return Pt().memoizedState;
    }
    function dm(t) {
      for (var e = t.return; e !== null; ) {
        switch (e.tag) {
          case 24:
          case 3:
            var n = Ze();
            t = Aa(n);
            var a = Oa(e, t, n);
            a !== null && (Ne(a, e, n), $u(a, e, n)), e = { cache: Wc() }, t.payload = e;
            return;
        }
        e = e.return;
      }
    }
    function pm(t, e, n) {
      var a = Ze();
      n = { lane: a, revertLane: 0, gesture: null, action: n, hasEagerState: false, eagerState: null, next: null }, Rs(t) ? Dh(e, n) : (n = Lc(t, e, n, a), n !== null && (Ne(n, t, a), xh(n, e, a)));
    }
    function Ch(t, e, n) {
      var a = Ze();
      ni(t, e, n, a);
    }
    function ni(t, e, n, a) {
      var l = { lane: a, revertLane: 0, gesture: null, action: n, hasEagerState: false, eagerState: null, next: null };
      if (Rs(t))
        Dh(e, l);
      else {
        var u = t.alternate;
        if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null))
          try {
            var r = e.lastRenderedState, p = u(r, n);
            if (l.hasEagerState = true, l.eagerState = p, Le(p, r))
              return is(t, e, l, 0), Ht === null && us(), false;
          } catch (_) {
          } finally {
          }
        if (n = Lc(t, e, l, a), n !== null)
          return Ne(n, t, a), xh(n, e, a), true;
      }
      return false;
    }
    function _o(t, e, n, a) {
      if (a = { lane: 2, revertLane: er(), gesture: null, action: a, hasEagerState: false, eagerState: null, next: null }, Rs(t)) {
        if (e)
          throw Error(o(479));
      } else
        e = Lc(t, n, a, 2), e !== null && Ne(e, t, 2);
    }
    function Rs(t) {
      var e = t.alternate;
      return t === dt || e !== null && e === dt;
    }
    function Dh(t, e) {
      nu = bs = true;
      var n = t.pending;
      n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
    }
    function xh(t, e, n) {
      if ((n & 4194048) !== 0) {
        var a = e.lanes;
        a &= t.pendingLanes, n |= a, e.lanes = n, Hi(t, n);
      }
    }
    var ai = { readContext: me, use: Ts, useCallback: Jt, useContext: Jt, useEffect: Jt, useImperativeHandle: Jt, useLayoutEffect: Jt, useInsertionEffect: Jt, useMemo: Jt, useReducer: Jt, useRef: Jt, useState: Jt, useDebugValue: Jt, useDeferredValue: Jt, useTransition: Jt, useSyncExternalStore: Jt, useId: Jt, useHostTransitionStatus: Jt, useFormState: Jt, useActionState: Jt, useOptimistic: Jt, useMemoCache: Jt, useCacheRefresh: Jt };
    ai.useEffectEvent = Jt;
    var Mh = { readContext: me, use: Ts, useCallback: function(t, e) {
      return ze().memoizedState = [t, e === void 0 ? null : e], t;
    }, useContext: me, useEffect: mh, useImperativeHandle: function(t, e, n) {
      n = n != null ? n.concat([t]) : null, As(4194308, 4, Sh.bind(null, e, t), n);
    }, useLayoutEffect: function(t, e) {
      return As(4194308, 4, t, e);
    }, useInsertionEffect: function(t, e) {
      As(4, 2, t, e);
    }, useMemo: function(t, e) {
      var n = ze();
      e = e === void 0 ? null : e;
      var a = t();
      if (yl) {
        qe(true);
        try {
          t();
        } finally {
          qe(false);
        }
      }
      return n.memoizedState = [a, e], a;
    }, useReducer: function(t, e, n) {
      var a = ze();
      if (n !== void 0) {
        var l = n(e);
        if (yl) {
          qe(true);
          try {
            n(e);
          } finally {
            qe(false);
          }
        }
      } else
        l = e;
      return a.memoizedState = a.baseState = l, t = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: l }, a.queue = t, t = t.dispatch = pm.bind(null, dt, t), [a.memoizedState, t];
    }, useRef: function(t) {
      var e = ze();
      return t = { current: t }, e.memoizedState = t;
    }, useState: function(t) {
      t = mo(t);
      var e = t.queue, n = Ch.bind(null, dt, e);
      return e.dispatch = n, [t.memoizedState, n];
    }, useDebugValue: bo, useDeferredValue: function(t, e) {
      var n = ze();
      return So(n, t, e);
    }, useTransition: function() {
      var t = mo(false);
      return t = Oh.bind(null, dt, t.queue, true, false), ze().memoizedState = t, [false, t];
    }, useSyncExternalStore: function(t, e, n) {
      var a = dt, l = ze();
      if (Et) {
        if (n === void 0)
          throw Error(o(407));
        n = n();
      } else {
        if (n = e(), Ht === null)
          throw Error(o(349));
        (bt & 127) !== 0 || th(a, e, n);
      }
      l.memoizedState = n;
      var u = { value: n, getSnapshot: e };
      return l.queue = u, mh(nh.bind(null, a, u, t), [t]), a.flags |= 2048, lu(9, { destroy: void 0 }, eh.bind(null, a, u, n, e), null), n;
    }, useId: function() {
      var t = ze(), e = Ht.identifierPrefix;
      if (Et) {
        var n = Bn, a = Nn;
        n = (a & ~(1 << 32 - be(a) - 1)).toString(32) + n, e = "_" + e + "R_" + n, n = Ss++, 0 < n && (e += "H" + n.toString(32)), e += "_";
      } else
        n = sm++, e = "_" + e + "r_" + n.toString(32) + "_";
      return t.memoizedState = e;
    }, useHostTransitionStatus: To, useFormState: fh, useActionState: fh, useOptimistic: function(t) {
      var e = ze();
      e.memoizedState = e.baseState = t;
      var n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
      return e.queue = n, e = _o.bind(null, dt, true, n), n.dispatch = e, [t, e];
    }, useMemoCache: ho, useCacheRefresh: function() {
      return ze().memoizedState = dm.bind(null, dt);
    }, useEffectEvent: function(t) {
      var e = ze(), n = { impl: t };
      return e.memoizedState = n, function() {
        if ((Ct & 2) !== 0)
          throw Error(o(440));
        return n.impl.apply(void 0, arguments);
      };
    } }, Ao = { readContext: me, use: Ts, useCallback: Th, useContext: me, useEffect: go, useImperativeHandle: Eh, useInsertionEffect: gh, useLayoutEffect: bh, useMemo: _h, useReducer: _s, useRef: yh, useState: function() {
      return _s(ta);
    }, useDebugValue: bo, useDeferredValue: function(t, e) {
      var n = Pt();
      return Ah(n, Bt.memoizedState, t, e);
    }, useTransition: function() {
      var t = _s(ta)[0], e = Pt().memoizedState;
      return [typeof t == "boolean" ? t : ei(t), e];
    }, useSyncExternalStore: If, useId: wh, useHostTransitionStatus: To, useFormState: hh, useActionState: hh, useOptimistic: function(t, e) {
      var n = Pt();
      return uh(n, Bt, t, e);
    }, useMemoCache: ho, useCacheRefresh: Uh };
    Ao.useEffectEvent = vh;
    var Nh = { readContext: me, use: Ts, useCallback: Th, useContext: me, useEffect: go, useImperativeHandle: Eh, useInsertionEffect: gh, useLayoutEffect: bh, useMemo: _h, useReducer: yo, useRef: yh, useState: function() {
      return yo(ta);
    }, useDebugValue: bo, useDeferredValue: function(t, e) {
      var n = Pt();
      return Bt === null ? So(n, t, e) : Ah(n, Bt.memoizedState, t, e);
    }, useTransition: function() {
      var t = yo(ta)[0], e = Pt().memoizedState;
      return [typeof t == "boolean" ? t : ei(t), e];
    }, useSyncExternalStore: If, useId: wh, useHostTransitionStatus: To, useFormState: ph, useActionState: ph, useOptimistic: function(t, e) {
      var n = Pt();
      return Bt !== null ? uh(n, Bt, t, e) : (n.baseState = t, [t, n.queue.dispatch]);
    }, useMemoCache: ho, useCacheRefresh: Uh };
    Nh.useEffectEvent = vh;
    function Oo(t, e, n, a) {
      e = t.memoizedState, n = n(a, e), n = n == null ? e : w({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
    }
    var Ro = { enqueueSetState: function(t, e, n) {
      t = t._reactInternals;
      var a = Ze(), l = Aa(a);
      l.payload = e, n != null && (l.callback = n), e = Oa(t, l, a), e !== null && (Ne(e, t, a), $u(e, t, a));
    }, enqueueReplaceState: function(t, e, n) {
      t = t._reactInternals;
      var a = Ze(), l = Aa(a);
      l.tag = 1, l.payload = e, n != null && (l.callback = n), e = Oa(t, l, a), e !== null && (Ne(e, t, a), $u(e, t, a));
    }, enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var n = Ze(), a = Aa(n);
      a.tag = 2, e != null && (a.callback = e), e = Oa(t, a, n), e !== null && (Ne(e, t, n), $u(e, t, n));
    } };
    function Bh(t, e, n, a, l, u, r) {
      return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, r) : e.prototype && e.prototype.isPureReactComponent ? !Qu(n, a) || !Qu(l, u) : true;
    }
    function jh(t, e, n, a) {
      t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, a), e.state !== t && Ro.enqueueReplaceState(e, e.state, null);
    }
    function ml(t, e) {
      var n = e;
      if ("ref" in e) {
        n = {};
        for (var a in e)
          a !== "ref" && (n[a] = e[a]);
      }
      if (t = t.defaultProps) {
        n === e && (n = w({}, n));
        for (var l in t)
          n[l] === void 0 && (n[l] = t[l]);
      }
      return n;
    }
    function qh(t) {
      ls(t);
    }
    function Hh(t) {
      console.error(t);
    }
    function Lh(t) {
      ls(t);
    }
    function zs(t, e) {
      try {
        var n = t.onUncaughtError;
        n(e.value, { componentStack: e.stack });
      } catch (a) {
        setTimeout(function() {
          throw a;
        });
      }
    }
    function Yh(t, e, n) {
      try {
        var a = t.onCaughtError;
        a(n.value, { componentStack: n.stack, errorBoundary: e.tag === 1 ? e.stateNode : null });
      } catch (l) {
        setTimeout(function() {
          throw l;
        });
      }
    }
    function zo(t, e, n) {
      return n = Aa(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
        zs(t, e);
      }, n;
    }
    function Xh(t) {
      return t = Aa(t), t.tag = 3, t;
    }
    function Gh(t, e, n, a) {
      var l = n.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var u = a.value;
        t.payload = function() {
          return l(u);
        }, t.callback = function() {
          Yh(e, n, a);
        };
      }
      var r = n.stateNode;
      r !== null && typeof r.componentDidCatch == "function" && (t.callback = function() {
        Yh(e, n, a), typeof l != "function" && (Da === null ? Da = /* @__PURE__ */ new Set([this]) : Da.add(this));
        var p = a.stack;
        this.componentDidCatch(a.value, { componentStack: p !== null ? p : "" });
      });
    }
    function ym(t, e, n, a, l) {
      if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
        if (e = n.alternate, e !== null && Wl(e, n, l, true), n = Xe.current, n !== null) {
          switch (n.tag) {
            case 31:
            case 13:
              return sn === null ? Ls() : n.alternate === null && kt === 0 && (kt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = l, a === ps ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : e.add(a), Po(t, a, l)), false;
            case 22:
              return n.flags |= 65536, a === ps ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([a]) }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), Po(t, a, l)), false;
          }
          throw Error(o(435, n.tag));
        }
        return Po(t, a, l), Ls(), false;
      }
      if (Et)
        return e = Xe.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = l, a !== Zc && (t = Error(o(422), { cause: a }), Ku(nn(t, n)))) : (a !== Zc && (e = Error(o(423), { cause: a }), Ku(nn(e, n))), t = t.current.alternate, t.flags |= 65536, l &= -l, t.lanes |= l, a = nn(a, n), l = zo(t.stateNode, a, l), no(t, l), kt !== 4 && (kt = 2)), false;
      var u = Error(o(520), { cause: a });
      if (u = nn(u, n), fi === null ? fi = [u] : fi.push(u), kt !== 4 && (kt = 2), e === null)
        return true;
      a = nn(a, n), n = e;
      do {
        switch (n.tag) {
          case 3:
            return n.flags |= 65536, t = l & -l, n.lanes |= t, t = zo(n.stateNode, a, t), no(n, t), false;
          case 1:
            if (e = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Da === null || !Da.has(u))))
              return n.flags |= 65536, l &= -l, n.lanes |= l, l = Xh(l), Gh(l, t, n, a), no(n, l), false;
        }
        n = n.return;
      } while (n !== null);
      return false;
    }
    var wo = Error(o(461)), ne = false;
    function ve(t, e, n, a) {
      e.child = t === null ? Kf(e, null, n, a) : pl(e, t.child, n, a);
    }
    function Qh(t, e, n, a, l) {
      n = n.render;
      var u = e.ref;
      if ("ref" in a) {
        var r = {};
        for (var p in a)
          p !== "ref" && (r[p] = a[p]);
      } else
        r = a;
      return rl(e), a = co(t, e, n, r, u, l), p = oo(), t !== null && !ne ? (ro(t, e, l), ea(t, e, l)) : (Et && p && Qc(e), e.flags |= 1, ve(t, e, a, l), e.child);
    }
    function Vh(t, e, n, a, l) {
      if (t === null) {
        var u = n.type;
        return typeof u == "function" && !Yc(u) && u.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = u, Zh(t, e, u, a, l)) : (t = cs(n.type, null, a, e, e.mode, l), t.ref = e.ref, t.return = e, e.child = t);
      }
      if (u = t.child, !jo(t, l)) {
        var r = u.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Qu, n(r, a) && t.ref === e.ref)
          return ea(t, e, l);
      }
      return e.flags |= 1, t = Fn(u, a), t.ref = e.ref, t.return = e, e.child = t;
    }
    function Zh(t, e, n, a, l) {
      if (t !== null) {
        var u = t.memoizedProps;
        if (Qu(u, a) && t.ref === e.ref)
          if (ne = false, e.pendingProps = a = u, jo(t, l))
            (t.flags & 131072) !== 0 && (ne = true);
          else
            return e.lanes = t.lanes, ea(t, e, l);
      }
      return Uo(t, e, n, a, l);
    }
    function Kh(t, e, n, a) {
      var l = a.children, u = t !== null ? t.memoizedState : null;
      if (t === null && e.stateNode === null && (e.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), a.mode === "hidden") {
        if ((e.flags & 128) !== 0) {
          if (u = u !== null ? u.baseLanes | n : n, t !== null) {
            for (a = e.child = t.child, l = 0; a !== null; )
              l = l | a.lanes | a.childLanes, a = a.sibling;
            a = l & ~u;
          } else
            a = 0, e.child = null;
          return Jh(t, e, u, n, a);
        }
        if ((n & 536870912) !== 0)
          e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && hs(e, u !== null ? u.cachePool : null), u !== null ? Ff(e, u) : lo(), Wf(e);
        else
          return a = e.lanes = 536870912, Jh(t, e, u !== null ? u.baseLanes | n : n, n, a);
      } else
        u !== null ? (hs(e, u.cachePool), Ff(e, u), za(), e.memoizedState = null) : (t !== null && hs(e, null), lo(), za());
      return ve(t, e, l, n), e.child;
    }
    function li(t, e) {
      return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), e.sibling;
    }
    function Jh(t, e, n, a, l) {
      var u = Pc();
      return u = u === null ? null : { parent: te._currentValue, pool: u }, e.memoizedState = { baseLanes: n, cachePool: u }, t !== null && hs(e, null), lo(), Wf(e), t !== null && Wl(t, e, a, true), e.childLanes = l, null;
    }
    function ws(t, e) {
      return e = Cs({ mode: e.mode, children: e.children }, t.mode), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function kh(t, e, n) {
      return pl(e, t.child, null, n), t = ws(e, e.pendingProps), t.flags |= 2, Ge(e), e.memoizedState = null, t;
    }
    function mm(t, e, n) {
      var a = e.pendingProps, l = (e.flags & 128) !== 0;
      if (e.flags &= -129, t === null) {
        if (Et) {
          if (a.mode === "hidden")
            return t = ws(e, a), e.lanes = 536870912, li(null, t);
          if (io(e), (t = Gt) ? (t = ip(t, un), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = { dehydrated: t, treeContext: ba !== null ? { id: Nn, overflow: Bn } : null, retryLane: 536870912, hydrationErrors: null }, n = Df(t), n.return = e, e.child = n, ye = e, Gt = null)) : t = null, t === null)
            throw Ea(e);
          return e.lanes = 536870912, null;
        }
        return ws(e, a);
      }
      var u = t.memoizedState;
      if (u !== null) {
        var r = u.dehydrated;
        if (io(e), l)
          if (e.flags & 256)
            e.flags &= -257, e = kh(t, e, n);
          else if (e.memoizedState !== null)
            e.child = t.child, e.flags |= 128, e = null;
          else
            throw Error(o(558));
        else if (ne || Wl(t, e, n, false), l = (n & t.childLanes) !== 0, ne || l) {
          if (a = Ht, a !== null && (r = Li(a, n), r !== 0 && r !== u.retryLane))
            throw u.retryLane = r, il(t, r), Ne(a, t, r), wo;
          Ls(), e = kh(t, e, n);
        } else
          t = u.treeContext, Gt = cn(r.nextSibling), ye = e, Et = true, Sa = null, un = false, t !== null && Nf(e, t), e = ws(e, a), e.flags |= 4096;
        return e;
      }
      return t = Fn(t.child, { mode: a.mode, children: a.children }), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function Us(t, e) {
      var n = e.ref;
      if (n === null)
        t !== null && t.ref !== null && (e.flags |= 4194816);
      else {
        if (typeof n != "function" && typeof n != "object")
          throw Error(o(284));
        (t === null || t.ref !== n) && (e.flags |= 4194816);
      }
    }
    function Uo(t, e, n, a, l) {
      return rl(e), n = co(t, e, n, a, void 0, l), a = oo(), t !== null && !ne ? (ro(t, e, l), ea(t, e, l)) : (Et && a && Qc(e), e.flags |= 1, ve(t, e, n, l), e.child);
    }
    function Fh(t, e, n, a, l, u) {
      return rl(e), e.updateQueue = null, n = Pf(e, a, n, l), $f(t), a = oo(), t !== null && !ne ? (ro(t, e, u), ea(t, e, u)) : (Et && a && Qc(e), e.flags |= 1, ve(t, e, n, u), e.child);
    }
    function Wh(t, e, n, a, l) {
      if (rl(e), e.stateNode === null) {
        var u = Kl, r = n.contextType;
        typeof r == "object" && r !== null && (u = me(r)), u = new n(a, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Ro, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = a, u.state = e.memoizedState, u.refs = {}, to(e), r = n.contextType, u.context = typeof r == "object" && r !== null ? me(r) : Kl, u.state = e.memoizedState, r = n.getDerivedStateFromProps, typeof r == "function" && (Oo(e, n, r, a), u.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (r = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), r !== u.state && Ro.enqueueReplaceState(u, u.state, null), Iu(e, a, u, l), Pu(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = true;
      } else if (t === null) {
        u = e.stateNode;
        var p = e.memoizedProps, _ = ml(n, p);
        u.props = _;
        var M = u.context, L = n.contextType;
        r = Kl, typeof L == "object" && L !== null && (r = me(L));
        var G = n.getDerivedStateFromProps;
        L = typeof G == "function" || typeof u.getSnapshotBeforeUpdate == "function", p = e.pendingProps !== p, L || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (p || M !== r) && jh(e, u, a, r), _a = false;
        var N = e.memoizedState;
        u.state = N, Iu(e, a, u, l), Pu(), M = e.memoizedState, p || N !== M || _a ? (typeof G == "function" && (Oo(e, n, G, a), M = e.memoizedState), (_ = _a || Bh(e, n, _, a, N, M, r)) ? (L || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = M), u.props = a, u.state = M, u.context = r, a = _) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = false);
      } else {
        u = e.stateNode, eo(t, e), r = e.memoizedProps, L = ml(n, r), u.props = L, G = e.pendingProps, N = u.context, M = n.contextType, _ = Kl, typeof M == "object" && M !== null && (_ = me(M)), p = n.getDerivedStateFromProps, (M = typeof p == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (r !== G || N !== _) && jh(e, u, a, _), _a = false, N = e.memoizedState, u.state = N, Iu(e, a, u, l), Pu();
        var q = e.memoizedState;
        r !== G || N !== q || _a || t !== null && t.dependencies !== null && rs(t.dependencies) ? (typeof p == "function" && (Oo(e, n, p, a), q = e.memoizedState), (L = _a || Bh(e, n, L, a, N, q, _) || t !== null && t.dependencies !== null && rs(t.dependencies)) ? (M || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, q, _), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, q, _)), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || r === t.memoizedProps && N === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || r === t.memoizedProps && N === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = q), u.props = a, u.state = q, u.context = _, a = L) : (typeof u.componentDidUpdate != "function" || r === t.memoizedProps && N === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || r === t.memoizedProps && N === t.memoizedState || (e.flags |= 1024), a = false);
      }
      return u = a, Us(t, e), a = (e.flags & 128) !== 0, u || a ? (u = e.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && a ? (e.child = pl(e, t.child, null, l), e.child = pl(e, null, n, l)) : ve(t, e, n, l), e.memoizedState = u.state, t = e.child) : t = ea(t, e, l), t;
    }
    function $h(t, e, n, a) {
      return cl(), e.flags |= 256, ve(t, e, n, a), e.child;
    }
    var Co = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
    function Do(t) {
      return { baseLanes: t, cachePool: Yf() };
    }
    function xo(t, e, n) {
      return t = t !== null ? t.childLanes & ~n : 0, e && (t |= Ve), t;
    }
    function Ph(t, e, n) {
      var a = e.pendingProps, l = false, u = (e.flags & 128) !== 0, r;
      if ((r = u) || (r = t !== null && t.memoizedState === null ? false : ($t.current & 2) !== 0), r && (l = true, e.flags &= -129), r = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
        if (Et) {
          if (l ? Ra(e) : za(), (t = Gt) ? (t = ip(t, un), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = { dehydrated: t, treeContext: ba !== null ? { id: Nn, overflow: Bn } : null, retryLane: 536870912, hydrationErrors: null }, n = Df(t), n.return = e, e.child = n, ye = e, Gt = null)) : t = null, t === null)
            throw Ea(e);
          return pr(t) ? e.lanes = 32 : e.lanes = 536870912, null;
        }
        var p = a.children;
        return a = a.fallback, l ? (za(), l = e.mode, p = Cs({ mode: "hidden", children: p }, l), a = sl(a, l, n, null), p.return = e, a.return = e, p.sibling = a, e.child = p, a = e.child, a.memoizedState = Do(n), a.childLanes = xo(t, r, n), e.memoizedState = Co, li(null, a)) : (Ra(e), Mo(e, p));
      }
      var _ = t.memoizedState;
      if (_ !== null && (p = _.dehydrated, p !== null)) {
        if (u)
          e.flags & 256 ? (Ra(e), e.flags &= -257, e = No(t, e, n)) : e.memoizedState !== null ? (za(), e.child = t.child, e.flags |= 128, e = null) : (za(), p = a.fallback, l = e.mode, a = Cs({ mode: "visible", children: a.children }, l), p = sl(p, l, n, null), p.flags |= 2, a.return = e, p.return = e, a.sibling = p, e.child = a, pl(e, t.child, null, n), a = e.child, a.memoizedState = Do(n), a.childLanes = xo(t, r, n), e.memoizedState = Co, e = li(null, a));
        else if (Ra(e), pr(p)) {
          if (r = p.nextSibling && p.nextSibling.dataset, r)
            var M = r.dgst;
          r = M, a = Error(o(419)), a.stack = "", a.digest = r, Ku({ value: a, source: null, stack: null }), e = No(t, e, n);
        } else if (ne || Wl(t, e, n, false), r = (n & t.childLanes) !== 0, ne || r) {
          if (r = Ht, r !== null && (a = Li(r, n), a !== 0 && a !== _.retryLane))
            throw _.retryLane = a, il(t, a), Ne(r, t, a), wo;
          dr(p) || Ls(), e = No(t, e, n);
        } else
          dr(p) ? (e.flags |= 192, e.child = t.child, e = null) : (t = _.treeContext, Gt = cn(p.nextSibling), ye = e, Et = true, Sa = null, un = false, t !== null && Nf(e, t), e = Mo(e, a.children), e.flags |= 4096);
        return e;
      }
      return l ? (za(), p = a.fallback, l = e.mode, _ = t.child, M = _.sibling, a = Fn(_, { mode: "hidden", children: a.children }), a.subtreeFlags = _.subtreeFlags & 65011712, M !== null ? p = Fn(M, p) : (p = sl(p, l, n, null), p.flags |= 2), p.return = e, a.return = e, a.sibling = p, e.child = a, li(null, a), a = e.child, p = t.child.memoizedState, p === null ? p = Do(n) : (l = p.cachePool, l !== null ? (_ = te._currentValue, l = l.parent !== _ ? { parent: _, pool: _ } : l) : l = Yf(), p = { baseLanes: p.baseLanes | n, cachePool: l }), a.memoizedState = p, a.childLanes = xo(t, r, n), e.memoizedState = Co, li(t.child, a)) : (Ra(e), n = t.child, t = n.sibling, n = Fn(n, { mode: "visible", children: a.children }), n.return = e, n.sibling = null, t !== null && (r = e.deletions, r === null ? (e.deletions = [t], e.flags |= 16) : r.push(t)), e.child = n, e.memoizedState = null, n);
    }
    function Mo(t, e) {
      return e = Cs({ mode: "visible", children: e }, t.mode), e.return = t, t.child = e;
    }
    function Cs(t, e) {
      return t = Ye(22, t, null, e), t.lanes = 0, t;
    }
    function No(t, e, n) {
      return pl(e, t.child, null, n), t = Mo(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t;
    }
    function Ih(t, e, n) {
      t.lanes |= e;
      var a = t.alternate;
      a !== null && (a.lanes |= e), kc(t.return, e, n);
    }
    function Bo(t, e, n, a, l, u) {
      var r = t.memoizedState;
      r === null ? t.memoizedState = { isBackwards: e, rendering: null, renderingStartTime: 0, last: a, tail: n, tailMode: l, treeForkCount: u } : (r.isBackwards = e, r.rendering = null, r.renderingStartTime = 0, r.last = a, r.tail = n, r.tailMode = l, r.treeForkCount = u);
    }
    function td(t, e, n) {
      var a = e.pendingProps, l = a.revealOrder, u = a.tail;
      a = a.children;
      var r = $t.current, p = (r & 2) !== 0;
      if (p ? (r = r & 1 | 2, e.flags |= 128) : r &= 1, W($t, r), ve(t, e, a, n), a = Et ? Zu : 0, !p && t !== null && (t.flags & 128) !== 0)
        t:
          for (t = e.child; t !== null; ) {
            if (t.tag === 13)
              t.memoizedState !== null && Ih(t, n, e);
            else if (t.tag === 19)
              Ih(t, n, e);
            else if (t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e)
              break t;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e)
                break t;
              t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
          }
      switch (l) {
        case "forwards":
          for (n = e.child, l = null; n !== null; )
            t = n.alternate, t !== null && gs(t) === null && (l = n), n = n.sibling;
          n = l, n === null ? (l = e.child, e.child = null) : (l = n.sibling, n.sibling = null), Bo(e, false, l, n, u, a);
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (n = null, l = e.child, e.child = null; l !== null; ) {
            if (t = l.alternate, t !== null && gs(t) === null) {
              e.child = l;
              break;
            }
            t = l.sibling, l.sibling = n, n = l, l = t;
          }
          Bo(e, true, n, null, u, a);
          break;
        case "together":
          Bo(e, false, null, null, void 0, a);
          break;
        default:
          e.memoizedState = null;
      }
      return e.child;
    }
    function ea(t, e, n) {
      if (t !== null && (e.dependencies = t.dependencies), Ca |= e.lanes, (n & e.childLanes) === 0)
        if (t !== null) {
          if (Wl(t, e, n, false), (n & e.childLanes) === 0)
            return null;
        } else
          return null;
      if (t !== null && e.child !== t.child)
        throw Error(o(153));
      if (e.child !== null) {
        for (t = e.child, n = Fn(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
          t = t.sibling, n = n.sibling = Fn(t, t.pendingProps), n.return = e;
        n.sibling = null;
      }
      return e.child;
    }
    function jo(t, e) {
      return (t.lanes & e) !== 0 ? true : (t = t.dependencies, !!(t !== null && rs(t)));
    }
    function vm(t, e, n) {
      switch (e.tag) {
        case 3:
          pe(e, e.stateNode.containerInfo), Ta(e, te, t.memoizedState.cache), cl();
          break;
        case 27:
        case 5:
          Va(e);
          break;
        case 4:
          pe(e, e.stateNode.containerInfo);
          break;
        case 10:
          Ta(e, e.type, e.memoizedProps.value);
          break;
        case 31:
          if (e.memoizedState !== null)
            return e.flags |= 128, io(e), null;
          break;
        case 13:
          var a = e.memoizedState;
          if (a !== null)
            return a.dehydrated !== null ? (Ra(e), e.flags |= 128, null) : (n & e.child.childLanes) !== 0 ? Ph(t, e, n) : (Ra(e), t = ea(t, e, n), t !== null ? t.sibling : null);
          Ra(e);
          break;
        case 19:
          var l = (t.flags & 128) !== 0;
          if (a = (n & e.childLanes) !== 0, a || (Wl(t, e, n, false), a = (n & e.childLanes) !== 0), l) {
            if (a)
              return td(t, e, n);
            e.flags |= 128;
          }
          if (l = e.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), W($t, $t.current), a)
            break;
          return null;
        case 22:
          return e.lanes = 0, Kh(t, e, n, e.pendingProps);
        case 24:
          Ta(e, te, t.memoizedState.cache);
      }
      return ea(t, e, n);
    }
    function ed(t, e, n) {
      if (t !== null)
        if (t.memoizedProps !== e.pendingProps)
          ne = true;
        else {
          if (!jo(t, n) && (e.flags & 128) === 0)
            return ne = false, vm(t, e, n);
          ne = (t.flags & 131072) !== 0;
        }
      else
        ne = false, Et && (e.flags & 1048576) !== 0 && Mf(e, Zu, e.index);
      switch (e.lanes = 0, e.tag) {
        case 16:
          t: {
            var a = e.pendingProps;
            if (t = hl(e.elementType), e.type = t, typeof t == "function")
              Yc(t) ? (a = ml(t, a), e.tag = 1, e = Wh(null, e, t, a, n)) : (e.tag = 0, e = Uo(null, e, t, a, n));
            else {
              if (t != null) {
                var l = t.$$typeof;
                if (l === _t) {
                  e.tag = 11, e = Qh(null, e, t, a, n);
                  break t;
                } else if (l === ct) {
                  e.tag = 14, e = Vh(null, e, t, a, n);
                  break t;
                }
              }
              throw e = Ft(t) || t, Error(o(306, e, ""));
            }
          }
          return e;
        case 0:
          return Uo(t, e, e.type, e.pendingProps, n);
        case 1:
          return a = e.type, l = ml(a, e.pendingProps), Wh(t, e, a, l, n);
        case 3:
          t: {
            if (pe(e, e.stateNode.containerInfo), t === null)
              throw Error(o(387));
            a = e.pendingProps;
            var u = e.memoizedState;
            l = u.element, eo(t, e), Iu(e, a, null, n);
            var r = e.memoizedState;
            if (a = r.cache, Ta(e, te, a), a !== u.cache && Fc(e, [te], n, true), Pu(), a = r.element, u.isDehydrated)
              if (u = { element: a, isDehydrated: false, cache: r.cache }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
                e = $h(t, e, a, n);
                break t;
              } else if (a !== l) {
                l = nn(Error(o(424)), e), Ku(l), e = $h(t, e, a, n);
                break t;
              } else {
                switch (t = e.stateNode.containerInfo, t.nodeType) {
                  case 9:
                    t = t.body;
                    break;
                  default:
                    t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
                }
                for (Gt = cn(t.firstChild), ye = e, Et = true, Sa = null, un = true, n = Kf(e, null, a, n), e.child = n; n; )
                  n.flags = n.flags & -3 | 4096, n = n.sibling;
              }
            else {
              if (cl(), a === l) {
                e = ea(t, e, n);
                break t;
              }
              ve(t, e, a, n);
            }
            e = e.child;
          }
          return e;
        case 26:
          return Us(t, e), t === null ? (n = hp(e.type, null, e.pendingProps, null)) ? e.memoizedState = n : Et || (n = e.type, t = e.pendingProps, a = Ks(mt.current).createElement(n), a[se] = e, a[re] = t, ge(a, n, t), Kt(a), e.stateNode = a) : e.memoizedState = hp(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
        case 27:
          return Va(e), t === null && Et && (a = e.stateNode = op(e.type, e.pendingProps, mt.current), ye = e, un = true, l = Gt, Ba(e.type) ? (yr = l, Gt = cn(a.firstChild)) : Gt = l), ve(t, e, e.pendingProps.children, n), Us(t, e), t === null && (e.flags |= 4194304), e.child;
        case 5:
          return t === null && Et && ((l = a = Gt) && (a = Jm(a, e.type, e.pendingProps, un), a !== null ? (e.stateNode = a, ye = e, Gt = cn(a.firstChild), un = false, l = true) : l = false), l || Ea(e)), Va(e), l = e.type, u = e.pendingProps, r = t !== null ? t.memoizedProps : null, a = u.children, rr(l, u) ? a = null : r !== null && rr(l, r) && (e.flags |= 32), e.memoizedState !== null && (l = co(t, e, cm, null, null, n), bi._currentValue = l), Us(t, e), ve(t, e, a, n), e.child;
        case 6:
          return t === null && Et && ((t = n = Gt) && (n = km(n, e.pendingProps, un), n !== null ? (e.stateNode = n, ye = e, Gt = null, t = true) : t = false), t || Ea(e)), null;
        case 13:
          return Ph(t, e, n);
        case 4:
          return pe(e, e.stateNode.containerInfo), a = e.pendingProps, t === null ? e.child = pl(e, null, a, n) : ve(t, e, a, n), e.child;
        case 11:
          return Qh(t, e, e.type, e.pendingProps, n);
        case 7:
          return ve(t, e, e.pendingProps, n), e.child;
        case 8:
          return ve(t, e, e.pendingProps.children, n), e.child;
        case 12:
          return ve(t, e, e.pendingProps.children, n), e.child;
        case 10:
          return a = e.pendingProps, Ta(e, e.type, a.value), ve(t, e, a.children, n), e.child;
        case 9:
          return l = e.type._context, a = e.pendingProps.children, rl(e), l = me(l), a = a(l), e.flags |= 1, ve(t, e, a, n), e.child;
        case 14:
          return Vh(t, e, e.type, e.pendingProps, n);
        case 15:
          return Zh(t, e, e.type, e.pendingProps, n);
        case 19:
          return td(t, e, n);
        case 31:
          return mm(t, e, n);
        case 22:
          return Kh(t, e, n, e.pendingProps);
        case 24:
          return rl(e), a = me(te), t === null ? (l = Pc(), l === null && (l = Ht, u = Wc(), l.pooledCache = u, u.refCount++, u !== null && (l.pooledCacheLanes |= n), l = u), e.memoizedState = { parent: a, cache: l }, to(e), Ta(e, te, l)) : ((t.lanes & n) !== 0 && (eo(t, e), Iu(e, null, null, n), Pu()), l = t.memoizedState, u = e.memoizedState, l.parent !== a ? (l = { parent: a, cache: a }, e.memoizedState = l, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = l), Ta(e, te, a)) : (a = u.cache, Ta(e, te, a), a !== l.cache && Fc(e, [te], n, true))), ve(t, e, e.pendingProps.children, n), e.child;
        case 29:
          throw e.pendingProps;
      }
      throw Error(o(156, e.tag));
    }
    function na(t) {
      t.flags |= 4;
    }
    function qo(t, e, n, a, l) {
      if ((e = (t.mode & 32) !== 0) && (e = false), e) {
        if (t.flags |= 16777216, (l & 335544128) === l)
          if (t.stateNode.complete)
            t.flags |= 8192;
          else if (wd())
            t.flags |= 8192;
          else
            throw dl = ps, Ic;
      } else
        t.flags &= -16777217;
    }
    function nd(t, e) {
      if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
        t.flags &= -16777217;
      else if (t.flags |= 16777216, !vp(e))
        if (wd())
          t.flags |= 8192;
        else
          throw dl = ps, Ic;
    }
    function Ds(t, e) {
      e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? ji() : 536870912, t.lanes |= e, cu |= e);
    }
    function ui(t, e) {
      if (!Et)
        switch (t.tailMode) {
          case "hidden":
            e = t.tail;
            for (var n = null; e !== null; )
              e.alternate !== null && (n = e), e = e.sibling;
            n === null ? t.tail = null : n.sibling = null;
            break;
          case "collapsed":
            n = t.tail;
            for (var a = null; n !== null; )
              n.alternate !== null && (a = n), n = n.sibling;
            a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
        }
    }
    function Qt(t) {
      var e = t.alternate !== null && t.alternate.child === t.child, n = 0, a = 0;
      if (e)
        for (var l = t.child; l !== null; )
          n |= l.lanes | l.childLanes, a |= l.subtreeFlags & 65011712, a |= l.flags & 65011712, l.return = t, l = l.sibling;
      else
        for (l = t.child; l !== null; )
          n |= l.lanes | l.childLanes, a |= l.subtreeFlags, a |= l.flags, l.return = t, l = l.sibling;
      return t.subtreeFlags |= a, t.childLanes = n, e;
    }
    function gm(t, e, n) {
      var a = e.pendingProps;
      switch (Vc(e), e.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Qt(e), null;
        case 1:
          return Qt(e), null;
        case 3:
          return n = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Pn(te), Zt(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (Fl(e) ? na(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Kc())), Qt(e), null;
        case 26:
          var l = e.type, u = e.memoizedState;
          return t === null ? (na(e), u !== null ? (Qt(e), nd(e, u)) : (Qt(e), qo(e, l, null, a, n))) : u ? u !== t.memoizedState ? (na(e), Qt(e), nd(e, u)) : (Qt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && na(e), Qt(e), qo(e, l, t, a, n)), null;
        case 27:
          if (_l(e), n = mt.current, l = e.type, t !== null && e.stateNode != null)
            t.memoizedProps !== a && na(e);
          else {
            if (!a) {
              if (e.stateNode === null)
                throw Error(o(166));
              return Qt(e), null;
            }
            t = I.current, Fl(e) ? Bf(e) : (t = op(l, a, n), e.stateNode = t, na(e));
          }
          return Qt(e), null;
        case 5:
          if (_l(e), l = e.type, t !== null && e.stateNode != null)
            t.memoizedProps !== a && na(e);
          else {
            if (!a) {
              if (e.stateNode === null)
                throw Error(o(166));
              return Qt(e), null;
            }
            if (u = I.current, Fl(e))
              Bf(e);
            else {
              var r = Ks(mt.current);
              switch (u) {
                case 1:
                  u = r.createElementNS("http://www.w3.org/2000/svg", l);
                  break;
                case 2:
                  u = r.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                  break;
                default:
                  switch (l) {
                    case "svg":
                      u = r.createElementNS("http://www.w3.org/2000/svg", l);
                      break;
                    case "math":
                      u = r.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                      break;
                    case "script":
                      u = r.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(u.firstChild);
                      break;
                    case "select":
                      u = typeof a.is == "string" ? r.createElement("select", { is: a.is }) : r.createElement("select"), a.multiple ? u.multiple = true : a.size && (u.size = a.size);
                      break;
                    default:
                      u = typeof a.is == "string" ? r.createElement(l, { is: a.is }) : r.createElement(l);
                  }
              }
              u[se] = e, u[re] = a;
              t:
                for (r = e.child; r !== null; ) {
                  if (r.tag === 5 || r.tag === 6)
                    u.appendChild(r.stateNode);
                  else if (r.tag !== 4 && r.tag !== 27 && r.child !== null) {
                    r.child.return = r, r = r.child;
                    continue;
                  }
                  if (r === e)
                    break t;
                  for (; r.sibling === null; ) {
                    if (r.return === null || r.return === e)
                      break t;
                    r = r.return;
                  }
                  r.sibling.return = r.return, r = r.sibling;
                }
              e.stateNode = u;
              t:
                switch (ge(u, l, a), l) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a = !!a.autoFocus;
                    break t;
                  case "img":
                    a = true;
                    break t;
                  default:
                    a = false;
                }
              a && na(e);
            }
          }
          return Qt(e), qo(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n), null;
        case 6:
          if (t && e.stateNode != null)
            t.memoizedProps !== a && na(e);
          else {
            if (typeof a != "string" && e.stateNode === null)
              throw Error(o(166));
            if (t = mt.current, Fl(e)) {
              if (t = e.stateNode, n = e.memoizedProps, a = null, l = ye, l !== null)
                switch (l.tag) {
                  case 27:
                  case 5:
                    a = l.memoizedProps;
                }
              t[se] = e, t = !!(t.nodeValue === n || a !== null && a.suppressHydrationWarning === true || Pd(t.nodeValue, n)), t || Ea(e, true);
            } else
              t = Ks(t).createTextNode(a), t[se] = e, e.stateNode = t;
          }
          return Qt(e), null;
        case 31:
          if (n = e.memoizedState, t === null || t.memoizedState !== null) {
            if (a = Fl(e), n !== null) {
              if (t === null) {
                if (!a)
                  throw Error(o(318));
                if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t)
                  throw Error(o(557));
                t[se] = e;
              } else
                cl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
              Qt(e), t = false;
            } else
              n = Kc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), t = true;
            if (!t)
              return e.flags & 256 ? (Ge(e), e) : (Ge(e), null);
            if ((e.flags & 128) !== 0)
              throw Error(o(558));
          }
          return Qt(e), null;
        case 13:
          if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
            if (l = Fl(e), a !== null && a.dehydrated !== null) {
              if (t === null) {
                if (!l)
                  throw Error(o(318));
                if (l = e.memoizedState, l = l !== null ? l.dehydrated : null, !l)
                  throw Error(o(317));
                l[se] = e;
              } else
                cl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
              Qt(e), l = false;
            } else
              l = Kc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), l = true;
            if (!l)
              return e.flags & 256 ? (Ge(e), e) : (Ge(e), null);
          }
          return Ge(e), (e.flags & 128) !== 0 ? (e.lanes = n, e) : (n = a !== null, t = t !== null && t.memoizedState !== null, n && (a = e.child, l = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (l = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== l && (a.flags |= 2048)), n !== t && n && (e.child.flags |= 8192), Ds(e, e.updateQueue), Qt(e), null);
        case 4:
          return Zt(), t === null && ur(e.stateNode.containerInfo), Qt(e), null;
        case 10:
          return Pn(e.type), Qt(e), null;
        case 19:
          if (Q($t), a = e.memoizedState, a === null)
            return Qt(e), null;
          if (l = (e.flags & 128) !== 0, u = a.rendering, u === null)
            if (l)
              ui(a, false);
            else {
              if (kt !== 0 || t !== null && (t.flags & 128) !== 0)
                for (t = e.child; t !== null; ) {
                  if (u = gs(t), u !== null) {
                    for (e.flags |= 128, ui(a, false), t = u.updateQueue, e.updateQueue = t, Ds(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; )
                      Cf(n, t), n = n.sibling;
                    return W($t, $t.current & 1 | 2), Et && Wn(e, a.treeForkCount), e.child;
                  }
                  t = t.sibling;
                }
              a.tail !== null && Ae() > js && (e.flags |= 128, l = true, ui(a, false), e.lanes = 4194304);
            }
          else {
            if (!l)
              if (t = gs(u), t !== null) {
                if (e.flags |= 128, l = true, t = t.updateQueue, e.updateQueue = t, Ds(e, t), ui(a, true), a.tail === null && a.tailMode === "hidden" && !u.alternate && !Et)
                  return Qt(e), null;
              } else
                2 * Ae() - a.renderingStartTime > js && n !== 536870912 && (e.flags |= 128, l = true, ui(a, false), e.lanes = 4194304);
            a.isBackwards ? (u.sibling = e.child, e.child = u) : (t = a.last, t !== null ? t.sibling = u : e.child = u, a.last = u);
          }
          return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Ae(), t.sibling = null, n = $t.current, W($t, l ? n & 1 | 2 : n & 1), Et && Wn(e, a.treeForkCount), t) : (Qt(e), null);
        case 22:
        case 23:
          return Ge(e), uo(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (Qt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Qt(e), n = e.updateQueue, n !== null && Ds(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== n && (e.flags |= 2048), t !== null && Q(fl), null;
        case 24:
          return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), Pn(te), Qt(e), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(o(156, e.tag));
    }
    function bm(t, e) {
      switch (Vc(e), e.tag) {
        case 1:
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 3:
          return Pn(te), Zt(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
        case 26:
        case 27:
        case 5:
          return _l(e), null;
        case 31:
          if (e.memoizedState !== null) {
            if (Ge(e), e.alternate === null)
              throw Error(o(340));
            cl();
          }
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 13:
          if (Ge(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
            if (e.alternate === null)
              throw Error(o(340));
            cl();
          }
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 19:
          return Q($t), null;
        case 4:
          return Zt(), null;
        case 10:
          return Pn(e.type), null;
        case 22:
        case 23:
          return Ge(e), uo(), t !== null && Q(fl), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 24:
          return Pn(te), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function ad(t, e) {
      switch (Vc(e), e.tag) {
        case 3:
          Pn(te), Zt();
          break;
        case 26:
        case 27:
        case 5:
          _l(e);
          break;
        case 4:
          Zt();
          break;
        case 31:
          e.memoizedState !== null && Ge(e);
          break;
        case 13:
          Ge(e);
          break;
        case 19:
          Q($t);
          break;
        case 10:
          Pn(e.type);
          break;
        case 22:
        case 23:
          Ge(e), uo(), t !== null && Q(fl);
          break;
        case 24:
          Pn(te);
      }
    }
    function ii(t, e) {
      try {
        var n = e.updateQueue, a = n !== null ? n.lastEffect : null;
        if (a !== null) {
          var l = a.next;
          n = l;
          do {
            if ((n.tag & t) === t) {
              a = void 0;
              var u = n.create, r = n.inst;
              a = u(), r.destroy = a;
            }
            n = n.next;
          } while (n !== l);
        }
      } catch (p) {
        Mt(e, e.return, p);
      }
    }
    function wa(t, e, n) {
      try {
        var a = e.updateQueue, l = a !== null ? a.lastEffect : null;
        if (l !== null) {
          var u = l.next;
          a = u;
          do {
            if ((a.tag & t) === t) {
              var r = a.inst, p = r.destroy;
              if (p !== void 0) {
                r.destroy = void 0, l = e;
                var _ = n, M = p;
                try {
                  M();
                } catch (L) {
                  Mt(l, _, L);
                }
              }
            }
            a = a.next;
          } while (a !== u);
        }
      } catch (L) {
        Mt(e, e.return, L);
      }
    }
    function ld(t) {
      var e = t.updateQueue;
      if (e !== null) {
        var n = t.stateNode;
        try {
          kf(e, n);
        } catch (a) {
          Mt(t, t.return, a);
        }
      }
    }
    function ud(t, e, n) {
      n.props = ml(t.type, t.memoizedProps), n.state = t.memoizedState;
      try {
        n.componentWillUnmount();
      } catch (a) {
        Mt(t, e, a);
      }
    }
    function si(t, e) {
      try {
        var n = t.ref;
        if (n !== null) {
          switch (t.tag) {
            case 26:
            case 27:
            case 5:
              var a = t.stateNode;
              break;
            case 30:
              a = t.stateNode;
              break;
            default:
              a = t.stateNode;
          }
          typeof n == "function" ? t.refCleanup = n(a) : n.current = a;
        }
      } catch (l) {
        Mt(t, e, l);
      }
    }
    function jn(t, e) {
      var n = t.ref, a = t.refCleanup;
      if (n !== null)
        if (typeof a == "function")
          try {
            a();
          } catch (l) {
            Mt(t, e, l);
          } finally {
            t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
          }
        else if (typeof n == "function")
          try {
            n(null);
          } catch (l) {
            Mt(t, e, l);
          }
        else
          n.current = null;
    }
    function id(t) {
      var e = t.type, n = t.memoizedProps, a = t.stateNode;
      try {
        t:
          switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
              n.autoFocus && a.focus();
              break t;
            case "img":
              n.src ? a.src = n.src : n.srcSet && (a.srcset = n.srcSet);
          }
      } catch (l) {
        Mt(t, t.return, l);
      }
    }
    function Ho(t, e, n) {
      try {
        var a = t.stateNode;
        Xm(a, t.type, n, e), a[re] = e;
      } catch (l) {
        Mt(t, t.return, l);
      }
    }
    function sd(t) {
      return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Ba(t.type) || t.tag === 4;
    }
    function Lo(t) {
      t:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || sd(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
            if (t.tag === 27 && Ba(t.type) || t.flags & 2 || t.child === null || t.tag === 4)
              continue t;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & 2))
            return t.stateNode;
        }
    }
    function Yo(t, e, n) {
      var a = t.tag;
      if (a === 5 || a === 6)
        t = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(t, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(t), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = Fe));
      else if (a !== 4 && (a === 27 && Ba(t.type) && (n = t.stateNode, e = null), t = t.child, t !== null))
        for (Yo(t, e, n), t = t.sibling; t !== null; )
          Yo(t, e, n), t = t.sibling;
    }
    function xs(t, e, n) {
      var a = t.tag;
      if (a === 5 || a === 6)
        t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
      else if (a !== 4 && (a === 27 && Ba(t.type) && (n = t.stateNode), t = t.child, t !== null))
        for (xs(t, e, n), t = t.sibling; t !== null; )
          xs(t, e, n), t = t.sibling;
    }
    function cd(t) {
      var e = t.stateNode, n = t.memoizedProps;
      try {
        for (var a = t.type, l = e.attributes; l.length; )
          e.removeAttributeNode(l[0]);
        ge(e, a, n), e[se] = t, e[re] = n;
      } catch (u) {
        Mt(t, t.return, u);
      }
    }
    var aa = false, ae = false, Xo = false, od = typeof WeakSet == "function" ? WeakSet : Set, de = null;
    function Sm(t, e) {
      if (t = t.containerInfo, cr = Is, t = Ef(t), Mc(t)) {
        if ("selectionStart" in t)
          var n = { start: t.selectionStart, end: t.selectionEnd };
        else
          t: {
            n = (n = t.ownerDocument) && n.defaultView || window;
            var a = n.getSelection && n.getSelection();
            if (a && a.rangeCount !== 0) {
              n = a.anchorNode;
              var l = a.anchorOffset, u = a.focusNode;
              a = a.focusOffset;
              try {
                n.nodeType, u.nodeType;
              } catch (lt) {
                n = null;
                break t;
              }
              var r = 0, p = -1, _ = -1, M = 0, L = 0, G = t, N = null;
              e:
                for (; ; ) {
                  for (var q; G !== n || l !== 0 && G.nodeType !== 3 || (p = r + l), G !== u || a !== 0 && G.nodeType !== 3 || (_ = r + a), G.nodeType === 3 && (r += G.nodeValue.length), (q = G.firstChild) !== null; )
                    N = G, G = q;
                  for (; ; ) {
                    if (G === t)
                      break e;
                    if (N === n && ++M === l && (p = r), N === u && ++L === a && (_ = r), (q = G.nextSibling) !== null)
                      break;
                    G = N, N = G.parentNode;
                  }
                  G = q;
                }
              n = p === -1 || _ === -1 ? null : { start: p, end: _ };
            } else
              n = null;
          }
        n = n || { start: 0, end: 0 };
      } else
        n = null;
      for (or = { focusedElem: t, selectionRange: n }, Is = false, de = e; de !== null; )
        if (e = de, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
          t.return = e, de = t;
        else
          for (; de !== null; ) {
            switch (e = de, u = e.alternate, t = e.flags, e.tag) {
              case 0:
                if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null))
                  for (n = 0; n < t.length; n++)
                    l = t[n], l.ref.impl = l.nextImpl;
                break;
              case 11:
              case 15:
                break;
              case 1:
                if ((t & 1024) !== 0 && u !== null) {
                  t = void 0, n = e, l = u.memoizedProps, u = u.memoizedState, a = n.stateNode;
                  try {
                    var P = ml(n.type, l);
                    t = a.getSnapshotBeforeUpdate(P, u), a.__reactInternalSnapshotBeforeUpdate = t;
                  } catch (lt) {
                    Mt(n, n.return, lt);
                  }
                }
                break;
              case 3:
                if ((t & 1024) !== 0) {
                  if (t = e.stateNode.containerInfo, n = t.nodeType, n === 9)
                    hr(t);
                  else if (n === 1)
                    switch (t.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        hr(t);
                        break;
                      default:
                        t.textContent = "";
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
                if ((t & 1024) !== 0)
                  throw Error(o(163));
            }
            if (t = e.sibling, t !== null) {
              t.return = e.return, de = t;
              break;
            }
            de = e.return;
          }
    }
    function rd(t, e, n) {
      var a = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ua(t, n), a & 4 && ii(5, n);
          break;
        case 1:
          if (ua(t, n), a & 4)
            if (t = n.stateNode, e === null)
              try {
                t.componentDidMount();
              } catch (r) {
                Mt(n, n.return, r);
              }
            else {
              var l = ml(n.type, e.memoizedProps);
              e = e.memoizedState;
              try {
                t.componentDidUpdate(l, e, t.__reactInternalSnapshotBeforeUpdate);
              } catch (r) {
                Mt(n, n.return, r);
              }
            }
          a & 64 && ld(n), a & 512 && si(n, n.return);
          break;
        case 3:
          if (ua(t, n), a & 64 && (t = n.updateQueue, t !== null)) {
            if (e = null, n.child !== null)
              switch (n.child.tag) {
                case 27:
                case 5:
                  e = n.child.stateNode;
                  break;
                case 1:
                  e = n.child.stateNode;
              }
            try {
              kf(t, e);
            } catch (r) {
              Mt(n, n.return, r);
            }
          }
          break;
        case 27:
          e === null && a & 4 && cd(n);
        case 26:
        case 5:
          ua(t, n), e === null && a & 4 && id(n), a & 512 && si(n, n.return);
          break;
        case 12:
          ua(t, n);
          break;
        case 31:
          ua(t, n), a & 4 && dd(t, n);
          break;
        case 13:
          ua(t, n), a & 4 && pd(t, n), a & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = Um.bind(null, n), Fm(t, n))));
          break;
        case 22:
          if (a = n.memoizedState !== null || aa, !a) {
            e = e !== null && e.memoizedState !== null || ae, l = aa;
            var u = ae;
            aa = a, (ae = e) && !u ? ia(t, n, (n.subtreeFlags & 8772) !== 0) : ua(t, n), aa = l, ae = u;
          }
          break;
        case 30:
          break;
        default:
          ua(t, n);
      }
    }
    function fd(t) {
      var e = t.alternate;
      e !== null && (t.alternate = null, fd(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Cu(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
    }
    var Vt = null, Ce = false;
    function la(t, e, n) {
      for (n = n.child; n !== null; )
        hd(t, e, n), n = n.sibling;
    }
    function hd(t, e, n) {
      if (Oe && typeof Oe.onCommitFiberUnmount == "function")
        try {
          Oe.onCommitFiberUnmount(Ka, n);
        } catch (u) {
        }
      switch (n.tag) {
        case 26:
          ae || jn(n, e), la(t, e, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
          break;
        case 27:
          ae || jn(n, e);
          var a = Vt, l = Ce;
          Ba(n.type) && (Vt = n.stateNode, Ce = false), la(t, e, n), mi(n.stateNode), Vt = a, Ce = l;
          break;
        case 5:
          ae || jn(n, e);
        case 6:
          if (a = Vt, l = Ce, Vt = null, la(t, e, n), Vt = a, Ce = l, Vt !== null)
            if (Ce)
              try {
                (Vt.nodeType === 9 ? Vt.body : Vt.nodeName === "HTML" ? Vt.ownerDocument.body : Vt).removeChild(n.stateNode);
              } catch (u) {
                Mt(n, e, u);
              }
            else
              try {
                Vt.removeChild(n.stateNode);
              } catch (u) {
                Mt(n, e, u);
              }
          break;
        case 18:
          Vt !== null && (Ce ? (t = Vt, lp(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, n.stateNode), mu(t)) : lp(Vt, n.stateNode));
          break;
        case 4:
          a = Vt, l = Ce, Vt = n.stateNode.containerInfo, Ce = true, la(t, e, n), Vt = a, Ce = l;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          wa(2, n, e), ae || wa(4, n, e), la(t, e, n);
          break;
        case 1:
          ae || (jn(n, e), a = n.stateNode, typeof a.componentWillUnmount == "function" && ud(n, e, a)), la(t, e, n);
          break;
        case 21:
          la(t, e, n);
          break;
        case 22:
          ae = (a = ae) || n.memoizedState !== null, la(t, e, n), ae = a;
          break;
        default:
          la(t, e, n);
      }
    }
    function dd(t, e) {
      if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
        t = t.dehydrated;
        try {
          mu(t);
        } catch (n) {
          Mt(e, e.return, n);
        }
      }
    }
    function pd(t, e) {
      if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
        try {
          mu(t);
        } catch (n) {
          Mt(e, e.return, n);
        }
    }
    function Em(t) {
      switch (t.tag) {
        case 31:
        case 13:
        case 19:
          var e = t.stateNode;
          return e === null && (e = t.stateNode = new od()), e;
        case 22:
          return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new od()), e;
        default:
          throw Error(o(435, t.tag));
      }
    }
    function Ms(t, e) {
      var n = Em(t);
      e.forEach(function(a) {
        if (!n.has(a)) {
          n.add(a);
          var l = Cm.bind(null, t, a);
          a.then(l, l);
        }
      });
    }
    function De(t, e) {
      var n = e.deletions;
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var l = n[a], u = t, r = e, p = r;
          t:
            for (; p !== null; ) {
              switch (p.tag) {
                case 27:
                  if (Ba(p.type)) {
                    Vt = p.stateNode, Ce = false;
                    break t;
                  }
                  break;
                case 5:
                  Vt = p.stateNode, Ce = false;
                  break t;
                case 3:
                case 4:
                  Vt = p.stateNode.containerInfo, Ce = true;
                  break t;
              }
              p = p.return;
            }
          if (Vt === null)
            throw Error(o(160));
          hd(u, r, l), Vt = null, Ce = false, u = l.alternate, u !== null && (u.return = null), l.return = null;
        }
      if (e.subtreeFlags & 13886)
        for (e = e.child; e !== null; )
          yd(e, t), e = e.sibling;
    }
    var mn = null;
    function yd(t, e) {
      var n = t.alternate, a = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          De(e, t), xe(t), a & 4 && (wa(3, t, t.return), ii(3, t), wa(5, t, t.return));
          break;
        case 1:
          De(e, t), xe(t), a & 512 && (ae || n === null || jn(n, n.return)), a & 64 && aa && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
          break;
        case 26:
          var l = mn;
          if (De(e, t), xe(t), a & 512 && (ae || n === null || jn(n, n.return)), a & 4) {
            var u = n !== null ? n.memoizedState : null;
            if (a = t.memoizedState, n === null)
              if (a === null)
                if (t.stateNode === null) {
                  t: {
                    a = t.type, n = t.memoizedProps, l = l.ownerDocument || l;
                    e:
                      switch (a) {
                        case "title":
                          u = l.getElementsByTagName("title")[0], (!u || u[wn] || u[se] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = l.createElement(a), l.head.insertBefore(u, l.querySelector("head > title"))), ge(u, a, n), u[se] = t, Kt(u), a = u;
                          break t;
                        case "link":
                          var r = yp("link", "href", l).get(a + (n.href || ""));
                          if (r) {
                            for (var p = 0; p < r.length; p++)
                              if (u = r[p], u.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && u.getAttribute("rel") === (n.rel == null ? null : n.rel) && u.getAttribute("title") === (n.title == null ? null : n.title) && u.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                                r.splice(p, 1);
                                break e;
                              }
                          }
                          u = l.createElement(a), ge(u, a, n), l.head.appendChild(u);
                          break;
                        case "meta":
                          if (r = yp("meta", "content", l).get(a + (n.content || ""))) {
                            for (p = 0; p < r.length; p++)
                              if (u = r[p], u.getAttribute("content") === (n.content == null ? null : "" + n.content) && u.getAttribute("name") === (n.name == null ? null : n.name) && u.getAttribute("property") === (n.property == null ? null : n.property) && u.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && u.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                                r.splice(p, 1);
                                break e;
                              }
                          }
                          u = l.createElement(a), ge(u, a, n), l.head.appendChild(u);
                          break;
                        default:
                          throw Error(o(468, a));
                      }
                    u[se] = t, Kt(u), a = u;
                  }
                  t.stateNode = a;
                } else
                  mp(l, t.type, t.stateNode);
              else
                t.stateNode = pp(l, a, t.memoizedProps);
            else
              u !== a ? (u === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : u.count--, a === null ? mp(l, t.type, t.stateNode) : pp(l, a, t.memoizedProps)) : a === null && t.stateNode !== null && Ho(t, t.memoizedProps, n.memoizedProps);
          }
          break;
        case 27:
          De(e, t), xe(t), a & 512 && (ae || n === null || jn(n, n.return)), n !== null && a & 4 && Ho(t, t.memoizedProps, n.memoizedProps);
          break;
        case 5:
          if (De(e, t), xe(t), a & 512 && (ae || n === null || jn(n, n.return)), t.flags & 32) {
            l = t.stateNode;
            try {
              Qn(l, "");
            } catch (P) {
              Mt(t, t.return, P);
            }
          }
          a & 4 && t.stateNode != null && (l = t.memoizedProps, Ho(t, l, n !== null ? n.memoizedProps : l)), a & 1024 && (Xo = true);
          break;
        case 6:
          if (De(e, t), xe(t), a & 4) {
            if (t.stateNode === null)
              throw Error(o(162));
            a = t.memoizedProps, n = t.stateNode;
            try {
              n.nodeValue = a;
            } catch (P) {
              Mt(t, t.return, P);
            }
          }
          break;
        case 3:
          if (Fs = null, l = mn, mn = Js(e.containerInfo), De(e, t), mn = l, xe(t), a & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
              mu(e.containerInfo);
            } catch (P) {
              Mt(t, t.return, P);
            }
          Xo && (Xo = false, md(t));
          break;
        case 4:
          a = mn, mn = Js(t.stateNode.containerInfo), De(e, t), xe(t), mn = a;
          break;
        case 12:
          De(e, t), xe(t);
          break;
        case 31:
          De(e, t), xe(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Ms(t, a)));
          break;
        case 13:
          De(e, t), xe(t), t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Bs = Ae()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Ms(t, a)));
          break;
        case 22:
          l = t.memoizedState !== null;
          var _ = n !== null && n.memoizedState !== null, M = aa, L = ae;
          if (aa = M || l, ae = L || _, De(e, t), ae = L, aa = M, xe(t), a & 8192)
            t:
              for (e = t.stateNode, e._visibility = l ? e._visibility & -2 : e._visibility | 1, l && (n === null || _ || aa || ae || vl(t)), n = null, e = t; ; ) {
                if (e.tag === 5 || e.tag === 26) {
                  if (n === null) {
                    _ = n = e;
                    try {
                      if (u = _.stateNode, l)
                        r = u.style, typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none";
                      else {
                        p = _.stateNode;
                        var G = _.memoizedProps.style, N = G != null && G.hasOwnProperty("display") ? G.display : null;
                        p.style.display = N == null || typeof N == "boolean" ? "" : ("" + N).trim();
                      }
                    } catch (P) {
                      Mt(_, _.return, P);
                    }
                  }
                } else if (e.tag === 6) {
                  if (n === null) {
                    _ = e;
                    try {
                      _.stateNode.nodeValue = l ? "" : _.memoizedProps;
                    } catch (P) {
                      Mt(_, _.return, P);
                    }
                  }
                } else if (e.tag === 18) {
                  if (n === null) {
                    _ = e;
                    try {
                      var q = _.stateNode;
                      l ? up(q, true) : up(_.stateNode, false);
                    } catch (P) {
                      Mt(_, _.return, P);
                    }
                  }
                } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
                  e.child.return = e, e = e.child;
                  continue;
                }
                if (e === t)
                  break t;
                for (; e.sibling === null; ) {
                  if (e.return === null || e.return === t)
                    break t;
                  n === e && (n = null), e = e.return;
                }
                n === e && (n = null), e.sibling.return = e.return, e = e.sibling;
              }
          a & 4 && (a = t.updateQueue, a !== null && (n = a.retryQueue, n !== null && (a.retryQueue = null, Ms(t, n))));
          break;
        case 19:
          De(e, t), xe(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Ms(t, a)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          De(e, t), xe(t);
      }
    }
    function xe(t) {
      var e = t.flags;
      if (e & 2) {
        try {
          for (var n, a = t.return; a !== null; ) {
            if (sd(a)) {
              n = a;
              break;
            }
            a = a.return;
          }
          if (n == null)
            throw Error(o(160));
          switch (n.tag) {
            case 27:
              var l = n.stateNode, u = Lo(t);
              xs(t, u, l);
              break;
            case 5:
              var r = n.stateNode;
              n.flags & 32 && (Qn(r, ""), n.flags &= -33);
              var p = Lo(t);
              xs(t, p, r);
              break;
            case 3:
            case 4:
              var _ = n.stateNode.containerInfo, M = Lo(t);
              Yo(t, M, _);
              break;
            default:
              throw Error(o(161));
          }
        } catch (L) {
          Mt(t, t.return, L);
        }
        t.flags &= -3;
      }
      e & 4096 && (t.flags &= -4097);
    }
    function md(t) {
      if (t.subtreeFlags & 1024)
        for (t = t.child; t !== null; ) {
          var e = t;
          md(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
        }
    }
    function ua(t, e) {
      if (e.subtreeFlags & 8772)
        for (e = e.child; e !== null; )
          rd(t, e.alternate, e), e = e.sibling;
    }
    function vl(t) {
      for (t = t.child; t !== null; ) {
        var e = t;
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            wa(4, e, e.return), vl(e);
            break;
          case 1:
            jn(e, e.return);
            var n = e.stateNode;
            typeof n.componentWillUnmount == "function" && ud(e, e.return, n), vl(e);
            break;
          case 27:
            mi(e.stateNode);
          case 26:
          case 5:
            jn(e, e.return), vl(e);
            break;
          case 22:
            e.memoizedState === null && vl(e);
            break;
          case 30:
            vl(e);
            break;
          default:
            vl(e);
        }
        t = t.sibling;
      }
    }
    function ia(t, e, n) {
      for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
        var a = e.alternate, l = t, u = e, r = u.flags;
        switch (u.tag) {
          case 0:
          case 11:
          case 15:
            ia(l, u, n), ii(4, u);
            break;
          case 1:
            if (ia(l, u, n), a = u, l = a.stateNode, typeof l.componentDidMount == "function")
              try {
                l.componentDidMount();
              } catch (M) {
                Mt(a, a.return, M);
              }
            if (a = u, l = a.updateQueue, l !== null) {
              var p = a.stateNode;
              try {
                var _ = l.shared.hiddenCallbacks;
                if (_ !== null)
                  for (l.shared.hiddenCallbacks = null, l = 0; l < _.length; l++)
                    Jf(_[l], p);
              } catch (M) {
                Mt(a, a.return, M);
              }
            }
            n && r & 64 && ld(u), si(u, u.return);
            break;
          case 27:
            cd(u);
          case 26:
          case 5:
            ia(l, u, n), n && a === null && r & 4 && id(u), si(u, u.return);
            break;
          case 12:
            ia(l, u, n);
            break;
          case 31:
            ia(l, u, n), n && r & 4 && dd(l, u);
            break;
          case 13:
            ia(l, u, n), n && r & 4 && pd(l, u);
            break;
          case 22:
            u.memoizedState === null && ia(l, u, n), si(u, u.return);
            break;
          case 30:
            break;
          default:
            ia(l, u, n);
        }
        e = e.sibling;
      }
    }
    function Go(t, e) {
      var n = null;
      t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && Ju(n));
    }
    function Qo(t, e) {
      t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Ju(t));
    }
    function vn(t, e, n, a) {
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; )
          vd(t, e, n, a), e = e.sibling;
    }
    function vd(t, e, n, a) {
      var l = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          vn(t, e, n, a), l & 2048 && ii(9, e);
          break;
        case 1:
          vn(t, e, n, a);
          break;
        case 3:
          vn(t, e, n, a), l & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Ju(t)));
          break;
        case 12:
          if (l & 2048) {
            vn(t, e, n, a), t = e.stateNode;
            try {
              var u = e.memoizedProps, r = u.id, p = u.onPostCommit;
              typeof p == "function" && p(r, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
            } catch (_) {
              Mt(e, e.return, _);
            }
          } else
            vn(t, e, n, a);
          break;
        case 31:
          vn(t, e, n, a);
          break;
        case 13:
          vn(t, e, n, a);
          break;
        case 23:
          break;
        case 22:
          u = e.stateNode, r = e.alternate, e.memoizedState !== null ? u._visibility & 2 ? vn(t, e, n, a) : ci(t, e) : u._visibility & 2 ? vn(t, e, n, a) : (u._visibility |= 2, uu(t, e, n, a, (e.subtreeFlags & 10256) !== 0 || false)), l & 2048 && Go(r, e);
          break;
        case 24:
          vn(t, e, n, a), l & 2048 && Qo(e.alternate, e);
          break;
        default:
          vn(t, e, n, a);
      }
    }
    function uu(t, e, n, a, l) {
      for (l = l && ((e.subtreeFlags & 10256) !== 0 || false), e = e.child; e !== null; ) {
        var u = t, r = e, p = n, _ = a, M = r.flags;
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            uu(u, r, p, _, l), ii(8, r);
            break;
          case 23:
            break;
          case 22:
            var L = r.stateNode;
            r.memoizedState !== null ? L._visibility & 2 ? uu(u, r, p, _, l) : ci(u, r) : (L._visibility |= 2, uu(u, r, p, _, l)), l && M & 2048 && Go(r.alternate, r);
            break;
          case 24:
            uu(u, r, p, _, l), l && M & 2048 && Qo(r.alternate, r);
            break;
          default:
            uu(u, r, p, _, l);
        }
        e = e.sibling;
      }
    }
    function ci(t, e) {
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; ) {
          var n = t, a = e, l = a.flags;
          switch (a.tag) {
            case 22:
              ci(n, a), l & 2048 && Go(a.alternate, a);
              break;
            case 24:
              ci(n, a), l & 2048 && Qo(a.alternate, a);
              break;
            default:
              ci(n, a);
          }
          e = e.sibling;
        }
    }
    var oi = 8192;
    function iu(t, e, n) {
      if (t.subtreeFlags & oi)
        for (t = t.child; t !== null; )
          gd(t, e, n), t = t.sibling;
    }
    function gd(t, e, n) {
      switch (t.tag) {
        case 26:
          iu(t, e, n), t.flags & oi && t.memoizedState !== null && s0(n, mn, t.memoizedState, t.memoizedProps);
          break;
        case 5:
          iu(t, e, n);
          break;
        case 3:
        case 4:
          var a = mn;
          mn = Js(t.stateNode.containerInfo), iu(t, e, n), mn = a;
          break;
        case 22:
          t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = oi, oi = 16777216, iu(t, e, n), oi = a) : iu(t, e, n));
          break;
        default:
          iu(t, e, n);
      }
    }
    function bd(t) {
      var e = t.alternate;
      if (e !== null && (t = e.child, t !== null)) {
        e.child = null;
        do
          e = t.sibling, t.sibling = null, t = e;
        while (t !== null);
      }
    }
    function ri(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null)
          for (var n = 0; n < e.length; n++) {
            var a = e[n];
            de = a, Ed(a, t);
          }
        bd(t);
      }
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; )
          Sd(t), t = t.sibling;
    }
    function Sd(t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          ri(t), t.flags & 2048 && wa(9, t, t.return);
          break;
        case 3:
          ri(t);
          break;
        case 12:
          ri(t);
          break;
        case 22:
          var e = t.stateNode;
          t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Ns(t)) : ri(t);
          break;
        default:
          ri(t);
      }
    }
    function Ns(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null)
          for (var n = 0; n < e.length; n++) {
            var a = e[n];
            de = a, Ed(a, t);
          }
        bd(t);
      }
      for (t = t.child; t !== null; ) {
        switch (e = t, e.tag) {
          case 0:
          case 11:
          case 15:
            wa(8, e, e.return), Ns(e);
            break;
          case 22:
            n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, Ns(e));
            break;
          default:
            Ns(e);
        }
        t = t.sibling;
      }
    }
    function Ed(t, e) {
      for (; de !== null; ) {
        var n = de;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            wa(8, n, e);
            break;
          case 23:
          case 22:
            if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
              var a = n.memoizedState.cachePool.pool;
              a != null && a.refCount++;
            }
            break;
          case 24:
            Ju(n.memoizedState.cache);
        }
        if (a = n.child, a !== null)
          a.return = n, de = a;
        else
          t:
            for (n = t; de !== null; ) {
              a = de;
              var l = a.sibling, u = a.return;
              if (fd(a), a === n) {
                de = null;
                break t;
              }
              if (l !== null) {
                l.return = u, de = l;
                break t;
              }
              de = u;
            }
      }
    }
    var Tm = { getCacheForType: function(t) {
      var e = me(te), n = e.data.get(t);
      return n === void 0 && (n = t(), e.data.set(t, n)), n;
    }, cacheSignal: function() {
      return me(te).controller.signal;
    } }, _m = typeof WeakMap == "function" ? WeakMap : Map, Ct = 0, Ht = null, vt = null, bt = 0, xt = 0, Qe = null, Ua = false, su = false, Vo = false, sa = 0, kt = 0, Ca = 0, gl = 0, Zo = 0, Ve = 0, cu = 0, fi = null, Me = null, Ko = false, Bs = 0, Td = 0, js = 1 / 0, qs = null, Da = null, oe = 0, xa = null, ou = null, ca = 0, Jo = 0, ko = null, _d = null, hi = 0, Fo = null;
    function Ze() {
      return (Ct & 2) !== 0 && bt !== 0 ? bt & -bt : H.T !== null ? er() : Yi();
    }
    function Ad() {
      if (Ve === 0)
        if ((bt & 536870912) === 0 || Et) {
          var t = Rl;
          Rl <<= 1, (Rl & 3932160) === 0 && (Rl = 262144), Ve = t;
        } else
          Ve = 536870912;
      return t = Xe.current, t !== null && (t.flags |= 32), Ve;
    }
    function Ne(t, e, n) {
      (t === Ht && (xt === 2 || xt === 9) || t.cancelPendingCommit !== null) && (ru(t, 0), Ma(t, bt, Ve, false)), Yn(t, n), ((Ct & 2) === 0 || t !== Ht) && (t === Ht && ((Ct & 2) === 0 && (gl |= n), kt === 4 && Ma(t, bt, Ve, false)), qn(t));
    }
    function Od(t, e, n) {
      if ((Ct & 6) !== 0)
        throw Error(o(327));
      var a = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Fa(t, e), l = a ? Rm(t, e) : $o(t, e, true), u = a;
      do {
        if (l === 0) {
          su && !a && Ma(t, e, 0, false);
          break;
        } else {
          if (n = t.current.alternate, u && !Am(n)) {
            l = $o(t, e, false), u = false;
            continue;
          }
          if (l === 2) {
            if (u = e, t.errorRecoveryDisabledLanes & u)
              var r = 0;
            else
              r = t.pendingLanes & -536870913, r = r !== 0 ? r : r & 536870912 ? 536870912 : 0;
            if (r !== 0) {
              e = r;
              t: {
                var p = t;
                l = fi;
                var _ = p.current.memoizedState.isDehydrated;
                if (_ && (ru(p, r).flags |= 256), r = $o(p, r, false), r !== 2) {
                  if (Vo && !_) {
                    p.errorRecoveryDisabledLanes |= u, gl |= u, l = 4;
                    break t;
                  }
                  u = Me, Me = l, u !== null && (Me === null ? Me = u : Me.push.apply(Me, u));
                }
                l = r;
              }
              if (u = false, l !== 2)
                continue;
            }
          }
          if (l === 1) {
            ru(t, 0), Ma(t, e, 0, true);
            break;
          }
          t: {
            switch (a = t, u = l, u) {
              case 0:
              case 1:
                throw Error(o(345));
              case 4:
                if ((e & 4194048) !== e)
                  break;
              case 6:
                Ma(a, e, Ve, !Ua);
                break t;
              case 2:
                Me = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(o(329));
            }
            if ((e & 62914560) === e && (l = Bs + 300 - Ae(), 10 < l)) {
              if (Ma(a, e, Ve, !Ua), zl(a, 0, true) !== 0)
                break t;
              ca = e, a.timeoutHandle = np(Rd.bind(null, a, n, Me, qs, Ko, e, Ve, gl, cu, Ua, u, "Throttled", -0, 0), l);
              break t;
            }
            Rd(a, n, Me, qs, Ko, e, Ve, gl, cu, Ua, u, null, -0, 0);
          }
        }
        break;
      } while (true);
      qn(t);
    }
    function Rd(t, e, n, a, l, u, r, p, _, M, L, G, N, q) {
      if (t.timeoutHandle = -1, G = e.subtreeFlags, G & 8192 || (G & 16785408) === 16785408) {
        G = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: true, waitingForViewTransition: false, unsuspend: Fe }, gd(e, u, G);
        var P = (u & 62914560) === u ? Bs - Ae() : (u & 4194048) === u ? Td - Ae() : 0;
        if (P = c0(G, P), P !== null) {
          ca = u, t.cancelPendingCommit = P(Nd.bind(null, t, e, u, n, a, l, r, p, _, L, G, null, N, q)), Ma(t, u, r, !M);
          return;
        }
      }
      Nd(t, e, u, n, a, l, r, p, _);
    }
    function Am(t) {
      for (var e = t; ; ) {
        var n = e.tag;
        if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null)))
          for (var a = 0; a < n.length; a++) {
            var l = n[a], u = l.getSnapshot;
            l = l.value;
            try {
              if (!Le(u(), l))
                return false;
            } catch (r) {
              return false;
            }
          }
        if (n = e.child, e.subtreeFlags & 16384 && n !== null)
          n.return = e, e = n;
        else {
          if (e === t)
            break;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              return true;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      }
      return true;
    }
    function Ma(t, e, n, a) {
      e &= ~Zo, e &= ~gl, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
      for (var l = e; 0 < l; ) {
        var u = 31 - be(l), r = 1 << u;
        a[u] = -1, l &= ~r;
      }
      n !== 0 && qi(t, n, e);
    }
    function Hs() {
      return (Ct & 6) === 0 ? (di(0), false) : true;
    }
    function Wo() {
      if (vt !== null) {
        if (xt === 0)
          var t = vt.return;
        else
          t = vt, $n = ol = null, fo(t), tu = null, Fu = 0, t = vt;
        for (; t !== null; )
          ad(t.alternate, t), t = t.return;
        vt = null;
      }
    }
    function ru(t, e) {
      var n = t.timeoutHandle;
      n !== -1 && (t.timeoutHandle = -1, Vm(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), ca = 0, Wo(), Ht = t, vt = n = Fn(t.current, null), bt = e, xt = 0, Qe = null, Ua = false, su = Fa(t, e), Vo = false, cu = Ve = Zo = gl = Ca = kt = 0, Me = fi = null, Ko = false, (e & 8) !== 0 && (e |= e & 32);
      var a = t.entangledLanes;
      if (a !== 0)
        for (t = t.entanglements, a &= e; 0 < a; ) {
          var l = 31 - be(a), u = 1 << l;
          e |= t[l], a &= ~u;
        }
      return sa = e, us(), n;
    }
    function zd(t, e) {
      dt = null, H.H = ai, e === Il || e === ds ? (e = Qf(), xt = 3) : e === Ic ? (e = Qf(), xt = 4) : xt = e === wo ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Qe = e, vt === null && (kt = 1, zs(t, nn(e, t.current)));
    }
    function wd() {
      var t = Xe.current;
      return t === null ? true : (bt & 4194048) === bt ? sn === null : (bt & 62914560) === bt || (bt & 536870912) !== 0 ? t === sn : false;
    }
    function Ud() {
      var t = H.H;
      return H.H = ai, t === null ? ai : t;
    }
    function Cd() {
      var t = H.A;
      return H.A = Tm, t;
    }
    function Ls() {
      kt = 4, Ua || (bt & 4194048) !== bt && Xe.current !== null || (su = true), (Ca & 134217727) === 0 && (gl & 134217727) === 0 || Ht === null || Ma(Ht, bt, Ve, false);
    }
    function $o(t, e, n) {
      var a = Ct;
      Ct |= 2;
      var l = Ud(), u = Cd();
      (Ht !== t || bt !== e) && (qs = null, ru(t, e)), e = false;
      var r = kt;
      t:
        do
          try {
            if (xt !== 0 && vt !== null) {
              var p = vt, _ = Qe;
              switch (xt) {
                case 8:
                  Wo(), r = 6;
                  break t;
                case 3:
                case 2:
                case 9:
                case 6:
                  Xe.current === null && (e = true);
                  var M = xt;
                  if (xt = 0, Qe = null, fu(t, p, _, M), n && su) {
                    r = 0;
                    break t;
                  }
                  break;
                default:
                  M = xt, xt = 0, Qe = null, fu(t, p, _, M);
              }
            }
            Om(), r = kt;
            break;
          } catch (L) {
            zd(t, L);
          }
        while (true);
      return e && t.shellSuspendCounter++, $n = ol = null, Ct = a, H.H = l, H.A = u, vt === null && (Ht = null, bt = 0, us()), r;
    }
    function Om() {
      for (; vt !== null; )
        Dd(vt);
    }
    function Rm(t, e) {
      var n = Ct;
      Ct |= 2;
      var a = Ud(), l = Cd();
      Ht !== t || bt !== e ? (qs = null, js = Ae() + 500, ru(t, e)) : su = Fa(t, e);
      t:
        do
          try {
            if (xt !== 0 && vt !== null) {
              e = vt;
              var u = Qe;
              e:
                switch (xt) {
                  case 1:
                    xt = 0, Qe = null, fu(t, e, u, 1);
                    break;
                  case 2:
                  case 9:
                    if (Xf(u)) {
                      xt = 0, Qe = null, xd(e);
                      break;
                    }
                    e = function() {
                      xt !== 2 && xt !== 9 || Ht !== t || (xt = 7), qn(t);
                    }, u.then(e, e);
                    break t;
                  case 3:
                    xt = 7;
                    break t;
                  case 4:
                    xt = 5;
                    break t;
                  case 7:
                    Xf(u) ? (xt = 0, Qe = null, xd(e)) : (xt = 0, Qe = null, fu(t, e, u, 7));
                    break;
                  case 5:
                    var r = null;
                    switch (vt.tag) {
                      case 26:
                        r = vt.memoizedState;
                      case 5:
                      case 27:
                        var p = vt;
                        if (r ? vp(r) : p.stateNode.complete) {
                          xt = 0, Qe = null;
                          var _ = p.sibling;
                          if (_ !== null)
                            vt = _;
                          else {
                            var M = p.return;
                            M !== null ? (vt = M, Ys(M)) : vt = null;
                          }
                          break e;
                        }
                    }
                    xt = 0, Qe = null, fu(t, e, u, 5);
                    break;
                  case 6:
                    xt = 0, Qe = null, fu(t, e, u, 6);
                    break;
                  case 8:
                    Wo(), kt = 6;
                    break t;
                  default:
                    throw Error(o(462));
                }
            }
            zm();
            break;
          } catch (L) {
            zd(t, L);
          }
        while (true);
      return $n = ol = null, H.H = a, H.A = l, Ct = n, vt !== null ? 0 : (Ht = null, bt = 0, us(), kt);
    }
    function zm() {
      for (; vt !== null && !Ec(); )
        Dd(vt);
    }
    function Dd(t) {
      var e = ed(t.alternate, t, sa);
      t.memoizedProps = t.pendingProps, e === null ? Ys(t) : vt = e;
    }
    function xd(t) {
      var e = t, n = e.alternate;
      switch (e.tag) {
        case 15:
        case 0:
          e = Fh(n, e, e.pendingProps, e.type, void 0, bt);
          break;
        case 11:
          e = Fh(n, e, e.pendingProps, e.type.render, e.ref, bt);
          break;
        case 5:
          fo(e);
        default:
          ad(n, e), e = vt = Cf(e, sa), e = ed(n, e, sa);
      }
      t.memoizedProps = t.pendingProps, e === null ? Ys(t) : vt = e;
    }
    function fu(t, e, n, a) {
      $n = ol = null, fo(e), tu = null, Fu = 0;
      var l = e.return;
      try {
        if (ym(t, l, e, n, bt)) {
          kt = 1, zs(t, nn(n, t.current)), vt = null;
          return;
        }
      } catch (u) {
        if (l !== null)
          throw vt = l, u;
        kt = 1, zs(t, nn(n, t.current)), vt = null;
        return;
      }
      e.flags & 32768 ? (Et || a === 1 ? t = true : su || (bt & 536870912) !== 0 ? t = false : (Ua = t = true, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Xe.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Md(e, t)) : Ys(e);
    }
    function Ys(t) {
      var e = t;
      do {
        if ((e.flags & 32768) !== 0) {
          Md(e, Ua);
          return;
        }
        t = e.return;
        var n = gm(e.alternate, e, sa);
        if (n !== null) {
          vt = n;
          return;
        }
        if (e = e.sibling, e !== null) {
          vt = e;
          return;
        }
        vt = e = t;
      } while (e !== null);
      kt === 0 && (kt = 5);
    }
    function Md(t, e) {
      do {
        var n = bm(t.alternate, t);
        if (n !== null) {
          n.flags &= 32767, vt = n;
          return;
        }
        if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
          vt = t;
          return;
        }
        vt = t = n;
      } while (t !== null);
      kt = 6, vt = null;
    }
    function Nd(t, e, n, a, l, u, r, p, _) {
      t.cancelPendingCommit = null;
      do
        Xs();
      while (oe !== 0);
      if ((Ct & 6) !== 0)
        throw Error(o(327));
      if (e !== null) {
        if (e === t.current)
          throw Error(o(177));
        if (u = e.lanes | e.childLanes, u |= Hc, Oc(t, n, u, r, p, _), t === Ht && (vt = Ht = null, bt = 0), ou = e, xa = t, ca = n, Jo = u, ko = l, _d = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Dm(Za, function() {
          return Ld(), null;
        })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
          a = H.T, H.T = null, l = F.p, F.p = 2, r = Ct, Ct |= 4;
          try {
            Sm(t, e, n);
          } finally {
            Ct = r, F.p = l, H.T = a;
          }
        }
        oe = 1, Bd(), jd(), qd();
      }
    }
    function Bd() {
      if (oe === 1) {
        oe = 0;
        var t = xa, e = ou, n = (e.flags & 13878) !== 0;
        if ((e.subtreeFlags & 13878) !== 0 || n) {
          n = H.T, H.T = null;
          var a = F.p;
          F.p = 2;
          var l = Ct;
          Ct |= 4;
          try {
            yd(e, t);
            var u = or, r = Ef(t.containerInfo), p = u.focusedElem, _ = u.selectionRange;
            if (r !== p && p && p.ownerDocument && Sf(p.ownerDocument.documentElement, p)) {
              if (_ !== null && Mc(p)) {
                var M = _.start, L = _.end;
                if (L === void 0 && (L = M), "selectionStart" in p)
                  p.selectionStart = M, p.selectionEnd = Math.min(L, p.value.length);
                else {
                  var G = p.ownerDocument || document, N = G && G.defaultView || window;
                  if (N.getSelection) {
                    var q = N.getSelection(), P = p.textContent.length, lt = Math.min(_.start, P), qt = _.end === void 0 ? lt : Math.min(_.end, P);
                    !q.extend && lt > qt && (r = qt, qt = lt, lt = r);
                    var U = bf(p, lt), O = bf(p, qt);
                    if (U && O && (q.rangeCount !== 1 || q.anchorNode !== U.node || q.anchorOffset !== U.offset || q.focusNode !== O.node || q.focusOffset !== O.offset)) {
                      var x = G.createRange();
                      x.setStart(U.node, U.offset), q.removeAllRanges(), lt > qt ? (q.addRange(x), q.extend(O.node, O.offset)) : (x.setEnd(O.node, O.offset), q.addRange(x));
                    }
                  }
                }
              }
              for (G = [], q = p; q = q.parentNode; )
                q.nodeType === 1 && G.push({ element: q, left: q.scrollLeft, top: q.scrollTop });
              for (typeof p.focus == "function" && p.focus(), p = 0; p < G.length; p++) {
                var Y = G[p];
                Y.element.scrollLeft = Y.left, Y.element.scrollTop = Y.top;
              }
            }
            Is = !!cr, or = cr = null;
          } finally {
            Ct = l, F.p = a, H.T = n;
          }
        }
        t.current = e, oe = 2;
      }
    }
    function jd() {
      if (oe === 2) {
        oe = 0;
        var t = xa, e = ou, n = (e.flags & 8772) !== 0;
        if ((e.subtreeFlags & 8772) !== 0 || n) {
          n = H.T, H.T = null;
          var a = F.p;
          F.p = 2;
          var l = Ct;
          Ct |= 4;
          try {
            rd(t, e.alternate, e);
          } finally {
            Ct = l, F.p = a, H.T = n;
          }
        }
        oe = 3;
      }
    }
    function qd() {
      if (oe === 4 || oe === 3) {
        oe = 0, xi();
        var t = xa, e = ou, n = ca, a = _d;
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? oe = 5 : (oe = 0, ou = xa = null, Hd(t, t.pendingLanes));
        var l = t.pendingLanes;
        if (l === 0 && (Da = null), wu(n), e = e.stateNode, Oe && typeof Oe.onCommitFiberRoot == "function")
          try {
            Oe.onCommitFiberRoot(Ka, e, void 0, (e.current.flags & 128) === 128);
          } catch (_) {
          }
        if (a !== null) {
          e = H.T, l = F.p, F.p = 2, H.T = null;
          try {
            for (var u = t.onRecoverableError, r = 0; r < a.length; r++) {
              var p = a[r];
              u(p.value, { componentStack: p.stack });
            }
          } finally {
            H.T = e, F.p = l;
          }
        }
        (ca & 3) !== 0 && Xs(), qn(t), l = t.pendingLanes, (n & 261930) !== 0 && (l & 42) !== 0 ? t === Fo ? hi++ : (hi = 0, Fo = t) : hi = 0, di(0);
      }
    }
    function Hd(t, e) {
      (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Ju(e)));
    }
    function Xs() {
      return Bd(), jd(), qd(), Ld();
    }
    function Ld() {
      if (oe !== 5)
        return false;
      var t = xa, e = Jo;
      Jo = 0;
      var n = wu(ca), a = H.T, l = F.p;
      try {
        F.p = 32 > n ? 32 : n, H.T = null, n = ko, ko = null;
        var u = xa, r = ca;
        if (oe = 0, ou = xa = null, ca = 0, (Ct & 6) !== 0)
          throw Error(o(331));
        var p = Ct;
        if (Ct |= 4, Sd(u.current), vd(u, u.current, r, n), Ct = p, di(0, false), Oe && typeof Oe.onPostCommitFiberRoot == "function")
          try {
            Oe.onPostCommitFiberRoot(Ka, u);
          } catch (_) {
          }
        return true;
      } finally {
        F.p = l, H.T = a, Hd(t, e);
      }
    }
    function Yd(t, e, n) {
      e = nn(n, e), e = zo(t.stateNode, e, 2), t = Oa(t, e, 2), t !== null && (Yn(t, 2), qn(t));
    }
    function Mt(t, e, n) {
      if (t.tag === 3)
        Yd(t, t, n);
      else
        for (; e !== null; ) {
          if (e.tag === 3) {
            Yd(e, t, n);
            break;
          } else if (e.tag === 1) {
            var a = e.stateNode;
            if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Da === null || !Da.has(a))) {
              t = nn(n, t), n = Xh(2), a = Oa(e, n, 2), a !== null && (Gh(n, a, e, t), Yn(a, 2), qn(a));
              break;
            }
          }
          e = e.return;
        }
    }
    function Po(t, e, n) {
      var a = t.pingCache;
      if (a === null) {
        a = t.pingCache = new _m();
        var l = /* @__PURE__ */ new Set();
        a.set(e, l);
      } else
        l = a.get(e), l === void 0 && (l = /* @__PURE__ */ new Set(), a.set(e, l));
      l.has(n) || (Vo = true, l.add(n), t = wm.bind(null, t, e, n), e.then(t, t));
    }
    function wm(t, e, n) {
      var a = t.pingCache;
      a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, Ht === t && (bt & n) === n && (kt === 4 || kt === 3 && (bt & 62914560) === bt && 300 > Ae() - Bs ? (Ct & 2) === 0 && ru(t, 0) : Zo |= n, cu === bt && (cu = 0)), qn(t);
    }
    function Xd(t, e) {
      e === 0 && (e = ji()), t = il(t, e), t !== null && (Yn(t, e), qn(t));
    }
    function Um(t) {
      var e = t.memoizedState, n = 0;
      e !== null && (n = e.retryLane), Xd(t, n);
    }
    function Cm(t, e) {
      var n = 0;
      switch (t.tag) {
        case 31:
        case 13:
          var a = t.stateNode, l = t.memoizedState;
          l !== null && (n = l.retryLane);
          break;
        case 19:
          a = t.stateNode;
          break;
        case 22:
          a = t.stateNode._retryCache;
          break;
        default:
          throw Error(o(314));
      }
      a !== null && a.delete(e), Xd(t, n);
    }
    function Dm(t, e) {
      return Au(t, e);
    }
    var Gs = null, hu = null, Io = false, Qs = false, tr = false, Na = 0;
    function qn(t) {
      t !== hu && t.next === null && (hu === null ? Gs = hu = t : hu = hu.next = t), Qs = true, Io || (Io = true, Mm());
    }
    function di(t, e) {
      if (!tr && Qs) {
        tr = true;
        do
          for (var n = false, a = Gs; a !== null; ) {
            if (t !== 0) {
              var l = a.pendingLanes;
              if (l === 0)
                var u = 0;
              else {
                var r = a.suspendedLanes, p = a.pingedLanes;
                u = (1 << 31 - be(42 | t) + 1) - 1, u &= l & ~(r & ~p), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
              }
              u !== 0 && (n = true, Zd(a, u));
            } else
              u = bt, u = zl(a, a === Ht ? u : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (u & 3) === 0 || Fa(a, u) || (n = true, Zd(a, u));
            a = a.next;
          }
        while (n);
        tr = false;
      }
    }
    function xm() {
      Gd();
    }
    function Gd() {
      Qs = Io = false;
      var t = 0;
      Na !== 0 && Qm() && (t = Na);
      for (var e = Ae(), n = null, a = Gs; a !== null; ) {
        var l = a.next, u = Qd(a, e);
        u === 0 ? (a.next = null, n === null ? Gs = l : n.next = l, l === null && (hu = n)) : (n = a, (t !== 0 || (u & 3) !== 0) && (Qs = true)), a = l;
      }
      oe !== 0 && oe !== 5 || di(t), Na !== 0 && (Na = 0);
    }
    function Qd(t, e) {
      for (var n = t.suspendedLanes, a = t.pingedLanes, l = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
        var r = 31 - be(u), p = 1 << r, _ = l[r];
        _ === -1 ? ((p & n) === 0 || (p & a) !== 0) && (l[r] = Ac(p, e)) : _ <= e && (t.expiredLanes |= p), u &= ~p;
      }
      if (e = Ht, n = bt, n = zl(t, t === e ? n : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a = t.callbackNode, n === 0 || t === e && (xt === 2 || xt === 9) || t.cancelPendingCommit !== null)
        return a !== null && a !== null && Ou(a), t.callbackNode = null, t.callbackPriority = 0;
      if ((n & 3) === 0 || Fa(t, n)) {
        if (e = n & -n, e === t.callbackPriority)
          return e;
        switch (a !== null && Ou(a), wu(n)) {
          case 2:
          case 8:
            n = Ru;
            break;
          case 32:
            n = Za;
            break;
          case 268435456:
            n = Ol;
            break;
          default:
            n = Za;
        }
        return a = Vd.bind(null, t), n = Au(n, a), t.callbackPriority = e, t.callbackNode = n, e;
      }
      return a !== null && a !== null && Ou(a), t.callbackPriority = 2, t.callbackNode = null, 2;
    }
    function Vd(t, e) {
      if (oe !== 0 && oe !== 5)
        return t.callbackNode = null, t.callbackPriority = 0, null;
      var n = t.callbackNode;
      if (Xs() && t.callbackNode !== n)
        return null;
      var a = bt;
      return a = zl(t, t === Ht ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a === 0 ? null : (Od(t, a, e), Qd(t, Ae()), t.callbackNode != null && t.callbackNode === n ? Vd.bind(null, t) : null);
    }
    function Zd(t, e) {
      if (Xs())
        return null;
      Od(t, e, true);
    }
    function Mm() {
      Zm(function() {
        (Ct & 6) !== 0 ? Au(st, xm) : Gd();
      });
    }
    function er() {
      if (Na === 0) {
        var t = $l;
        t === 0 && (t = Ja, Ja <<= 1, (Ja & 261888) === 0 && (Ja = 256)), Na = t;
      }
      return Na;
    }
    function Kd(t) {
      return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Dl("" + t);
    }
    function Jd(t, e) {
      var n = e.ownerDocument.createElement("input");
      return n.name = e.name, n.value = e.value, t.id && n.setAttribute("form", t.id), e.parentNode.insertBefore(n, e), t = new FormData(t), n.parentNode.removeChild(n), t;
    }
    function Nm(t, e, n, a, l) {
      if (e === "submit" && n && n.stateNode === l) {
        var u = Kd((l[re] || null).action), r = a.submitter;
        r && (e = (e = r[re] || null) ? Kd(e.formAction) : r.getAttribute("formAction"), e !== null && (u = e, r = null));
        var p = new el("action", "action", null, a, l);
        t.push({ event: p, listeners: [{ instance: null, listener: function() {
          if (a.defaultPrevented) {
            if (Na !== 0) {
              var _ = r ? Jd(l, r) : new FormData(l);
              Eo(n, { pending: true, data: _, method: l.method, action: u }, null, _);
            }
          } else
            typeof u == "function" && (p.preventDefault(), _ = r ? Jd(l, r) : new FormData(l), Eo(n, { pending: true, data: _, method: l.method, action: u }, u, _));
        }, currentTarget: l }] });
      }
    }
    for (var nr = 0; nr < qc.length; nr++) {
      var ar = qc[nr], Bm = ar.toLowerCase(), jm = ar[0].toUpperCase() + ar.slice(1);
      yn(Bm, "on" + jm);
    }
    yn(Af, "onAnimationEnd"), yn(Of, "onAnimationIteration"), yn(Rf, "onAnimationStart"), yn("dblclick", "onDoubleClick"), yn("focusin", "onFocus"), yn("focusout", "onBlur"), yn(Py, "onTransitionRun"), yn(Iy, "onTransitionStart"), yn(tm, "onTransitionCancel"), yn(zf, "onTransitionEnd"), He("onMouseEnter", ["mouseout", "mouseover"]), He("onMouseLeave", ["mouseout", "mouseover"]), He("onPointerEnter", ["pointerout", "pointerover"]), He("onPointerLeave", ["pointerout", "pointerover"]), Cn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Cn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Cn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Cn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Cn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Cn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var pi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), qm = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pi));
    function kd(t, e) {
      e = (e & 4) !== 0;
      for (var n = 0; n < t.length; n++) {
        var a = t[n], l = a.event;
        a = a.listeners;
        t: {
          var u = void 0;
          if (e)
            for (var r = a.length - 1; 0 <= r; r--) {
              var p = a[r], _ = p.instance, M = p.currentTarget;
              if (p = p.listener, _ !== u && l.isPropagationStopped())
                break t;
              u = p, l.currentTarget = M;
              try {
                u(l);
              } catch (L) {
                ls(L);
              }
              l.currentTarget = null, u = _;
            }
          else
            for (r = 0; r < a.length; r++) {
              if (p = a[r], _ = p.instance, M = p.currentTarget, p = p.listener, _ !== u && l.isPropagationStopped())
                break t;
              u = p, l.currentTarget = M;
              try {
                u(l);
              } catch (L) {
                ls(L);
              }
              l.currentTarget = null, u = _;
            }
        }
      }
    }
    function gt(t, e) {
      var n = e[Uu];
      n === void 0 && (n = e[Uu] = /* @__PURE__ */ new Set());
      var a = t + "__bubble";
      n.has(a) || (Fd(e, t, 2, false), n.add(a));
    }
    function lr(t, e, n) {
      var a = 0;
      e && (a |= 4), Fd(n, t, a, e);
    }
    var Vs = "_reactListening" + Math.random().toString(36).slice(2);
    function ur(t) {
      if (!t[Vs]) {
        t[Vs] = true, we.forEach(function(n) {
          n !== "selectionchange" && (qm.has(n) || lr(n, false, t), lr(n, true, t));
        });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[Vs] || (e[Vs] = true, lr("selectionchange", false, e));
      }
    }
    function Fd(t, e, n, a) {
      switch (Ap(e)) {
        case 2:
          var l = f0;
          break;
        case 8:
          l = h0;
          break;
        default:
          l = Sr;
      }
      n = l.bind(null, e, n, t), l = void 0, !Hu || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (l = true), a ? l !== void 0 ? t.addEventListener(e, n, { capture: true, passive: l }) : t.addEventListener(e, n, true) : l !== void 0 ? t.addEventListener(e, n, { passive: l }) : t.addEventListener(e, n, false);
    }
    function ir(t, e, n, a, l) {
      var u = a;
      if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
        t:
          for (; ; ) {
            if (a === null)
              return;
            var r = a.tag;
            if (r === 3 || r === 4) {
              var p = a.stateNode.containerInfo;
              if (p === l)
                break;
              if (r === 4)
                for (r = a.return; r !== null; ) {
                  var _ = r.tag;
                  if ((_ === 3 || _ === 4) && r.stateNode.containerInfo === l)
                    return;
                  r = r.return;
                }
              for (; p !== null; ) {
                if (r = da(p), r === null)
                  return;
                if (_ = r.tag, _ === 5 || _ === 6 || _ === 26 || _ === 27) {
                  a = u = r;
                  continue t;
                }
                p = p.parentNode;
              }
            }
            a = a.return;
          }
      qu(function() {
        var M = u, L = xl(n), G = [];
        t: {
          var N = wf.get(t);
          if (N !== void 0) {
            var q = el, P = t;
            switch (t) {
              case "keypress":
                if (jl(n) === 0)
                  break t;
              case "keydown":
              case "keyup":
                q = Pi;
                break;
              case "focusin":
                P = "focus", q = Z;
                break;
              case "focusout":
                P = "blur", q = Z;
                break;
              case "beforeblur":
              case "afterblur":
                q = Z;
                break;
              case "click":
                if (n.button === 2)
                  break t;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                q = D;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                q = V;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                q = Ii;
                break;
              case Af:
              case Of:
              case Rf:
                q = ut;
                break;
              case zf:
                q = Yl;
                break;
              case "scroll":
              case "scrollend":
                q = f;
                break;
              case "wheel":
                q = Jn;
                break;
              case "copy":
              case "cut":
              case "paste":
                q = rt;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                q = Hl;
                break;
              case "toggle":
              case "beforetoggle":
                q = Ie;
            }
            var lt = (e & 4) !== 0, qt = !lt && (t === "scroll" || t === "scrollend"), U = lt ? N !== null ? N + "Capture" : null : N;
            lt = [];
            for (var O = M, x; O !== null; ) {
              var Y = O;
              if (x = Y.stateNode, Y = Y.tag, Y !== 5 && Y !== 26 && Y !== 27 || x === null || U === null || (Y = Dn(O, U), Y != null && lt.push(yi(O, Y, x))), qt)
                break;
              O = O.return;
            }
            0 < lt.length && (N = new q(N, P, null, n, L), G.push({ event: N, listeners: lt }));
          }
        }
        if ((e & 7) === 0) {
          t: {
            if (N = t === "mouseover" || t === "pointerover", q = t === "mouseout" || t === "pointerout", N && n !== tl && (P = n.relatedTarget || n.fromElement) && (da(P) || P[zn]))
              break t;
            if ((q || N) && (N = L.window === L ? L : (N = L.ownerDocument) ? N.defaultView || N.parentWindow : window, q ? (P = n.relatedTarget || n.toElement, q = M, P = P ? da(P) : null, P !== null && (qt = b(P), lt = P.tag, P !== qt || lt !== 5 && lt !== 27 && lt !== 6) && (P = null)) : (q = null, P = M), q !== P)) {
              if (lt = D, Y = "onMouseLeave", U = "onMouseEnter", O = "mouse", (t === "pointerout" || t === "pointerover") && (lt = Hl, Y = "onPointerLeave", U = "onPointerEnter", O = "pointer"), qt = q == null ? N : $a(q), x = P == null ? N : $a(P), N = new lt(Y, O + "leave", q, n, L), N.target = qt, N.relatedTarget = x, Y = null, da(L) === M && (lt = new lt(U, O + "enter", P, n, L), lt.target = x, lt.relatedTarget = qt, Y = lt), qt = Y, q && P)
                e: {
                  for (lt = Hm, U = q, O = P, x = 0, Y = U; Y; Y = lt(Y))
                    x++;
                  Y = 0;
                  for (var at = O; at; at = lt(at))
                    Y++;
                  for (; 0 < x - Y; )
                    U = lt(U), x--;
                  for (; 0 < Y - x; )
                    O = lt(O), Y--;
                  for (; x--; ) {
                    if (U === O || O !== null && U === O.alternate) {
                      lt = U;
                      break e;
                    }
                    U = lt(U), O = lt(O);
                  }
                  lt = null;
                }
              else
                lt = null;
              q !== null && Wd(G, N, q, lt, false), P !== null && qt !== null && Wd(G, qt, P, lt, true);
            }
          }
          t: {
            if (N = M ? $a(M) : window, q = N.nodeName && N.nodeName.toLowerCase(), q === "select" || q === "input" && N.type === "file")
              var Rt = df;
            else if (ff(N))
              if (pf)
                Rt = Fy;
              else {
                Rt = Jy;
                var et = Ky;
              }
            else
              q = N.nodeName, !q || q.toLowerCase() !== "input" || N.type !== "checkbox" && N.type !== "radio" ? M && Cl(M.elementType) && (Rt = df) : Rt = ky;
            if (Rt && (Rt = Rt(t, M))) {
              hf(G, Rt, n, L);
              break t;
            }
            et && et(t, N, M), t === "focusout" && M && N.type === "number" && M.memoizedProps.value != null && Nu(N, "number", N.value);
          }
          switch (et = M ? $a(M) : window, t) {
            case "focusin":
              (ff(et) || et.contentEditable === "true") && (Ql = et, Nc = M, Vu = null);
              break;
            case "focusout":
              Vu = Nc = Ql = null;
              break;
            case "mousedown":
              Bc = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Bc = false, Tf(G, n, L);
              break;
            case "selectionchange":
              if ($y)
                break;
            case "keydown":
            case "keyup":
              Tf(G, n, L);
          }
          var pt;
          if (tn)
            t: {
              switch (t) {
                case "compositionstart":
                  var St = "onCompositionStart";
                  break t;
                case "compositionend":
                  St = "onCompositionEnd";
                  break t;
                case "compositionupdate":
                  St = "onCompositionUpdate";
                  break t;
              }
              St = void 0;
            }
          else
            Gl ? al(t, n) && (St = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (St = "onCompositionStart");
          St && (pn && n.locale !== "ko" && (Gl || St !== "onCompositionStart" ? St === "onCompositionEnd" && Gl && (pt = Bl()) : (ce = L, va = "value" in ce ? ce.value : ce.textContent, Gl = true)), et = Zs(M, St), 0 < et.length && (St = new $(St, t, null, n, L), G.push({ event: St, listeners: et }), pt ? St.data = pt : (pt = Yu(n), pt !== null && (St.data = pt)))), (pt = Cc ? Gy(t, n) : Qy(t, n)) && (St = Zs(M, "onBeforeInput"), 0 < St.length && (et = new $("onBeforeInput", "beforeinput", null, n, L), G.push({ event: et, listeners: St }), et.data = pt)), Nm(G, t, M, n, L);
        }
        kd(G, e);
      });
    }
    function yi(t, e, n) {
      return { instance: t, listener: e, currentTarget: n };
    }
    function Zs(t, e) {
      for (var n = e + "Capture", a = []; t !== null; ) {
        var l = t, u = l.stateNode;
        if (l = l.tag, l !== 5 && l !== 26 && l !== 27 || u === null || (l = Dn(t, n), l != null && a.unshift(yi(t, l, u)), l = Dn(t, e), l != null && a.push(yi(t, l, u))), t.tag === 3)
          return a;
        t = t.return;
      }
      return [];
    }
    function Hm(t) {
      if (t === null)
        return null;
      do
        t = t.return;
      while (t && t.tag !== 5 && t.tag !== 27);
      return t || null;
    }
    function Wd(t, e, n, a, l) {
      for (var u = e._reactName, r = []; n !== null && n !== a; ) {
        var p = n, _ = p.alternate, M = p.stateNode;
        if (p = p.tag, _ !== null && _ === a)
          break;
        p !== 5 && p !== 26 && p !== 27 || M === null || (_ = M, l ? (M = Dn(n, u), M != null && r.unshift(yi(n, M, _))) : l || (M = Dn(n, u), M != null && r.push(yi(n, M, _)))), n = n.return;
      }
      r.length !== 0 && t.push({ event: e, listeners: r });
    }
    var Lm = /\r\n?/g, Ym = /\u0000|\uFFFD/g;
    function $d(t) {
      return (typeof t == "string" ? t : "" + t).replace(Lm, `
`).replace(Ym, "");
    }
    function Pd(t, e) {
      return e = $d(e), $d(t) === e;
    }
    function jt(t, e, n, a, l, u) {
      switch (n) {
        case "children":
          typeof a == "string" ? e === "body" || e === "textarea" && a === "" || Qn(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && Qn(t, "" + a);
          break;
        case "className":
          Pa(t, "class", a);
          break;
        case "tabIndex":
          Pa(t, "tabindex", a);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          Pa(t, n, a);
          break;
        case "style":
          ju(t, a, u);
          break;
        case "data":
          if (e !== "object") {
            Pa(t, "data", a);
            break;
          }
        case "src":
        case "href":
          if (a === "" && (e !== "a" || n !== "href")) {
            t.removeAttribute(n);
            break;
          }
          if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
            t.removeAttribute(n);
            break;
          }
          a = Dl("" + a), t.setAttribute(n, a);
          break;
        case "action":
        case "formAction":
          if (typeof a == "function") {
            t.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
            break;
          } else
            typeof u == "function" && (n === "formAction" ? (e !== "input" && jt(t, e, "name", l.name, l, null), jt(t, e, "formEncType", l.formEncType, l, null), jt(t, e, "formMethod", l.formMethod, l, null), jt(t, e, "formTarget", l.formTarget, l, null)) : (jt(t, e, "encType", l.encType, l, null), jt(t, e, "method", l.method, l, null), jt(t, e, "target", l.target, l, null)));
          if (a == null || typeof a == "symbol" || typeof a == "boolean") {
            t.removeAttribute(n);
            break;
          }
          a = Dl("" + a), t.setAttribute(n, a);
          break;
        case "onClick":
          a != null && (t.onclick = Fe);
          break;
        case "onScroll":
          a != null && gt("scroll", t);
          break;
        case "onScrollEnd":
          a != null && gt("scrollend", t);
          break;
        case "dangerouslySetInnerHTML":
          if (a != null) {
            if (typeof a != "object" || !("__html" in a))
              throw Error(o(61));
            if (n = a.__html, n != null) {
              if (l.children != null)
                throw Error(o(60));
              t.innerHTML = n;
            }
          }
          break;
        case "multiple":
          t.multiple = a && typeof a != "function" && typeof a != "symbol";
          break;
        case "muted":
          t.muted = a && typeof a != "function" && typeof a != "symbol";
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
            t.removeAttribute("xlink:href");
            break;
          }
          n = Dl("" + a), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, "" + a) : t.removeAttribute(n);
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
          a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
          break;
        case "capture":
        case "download":
          a === true ? t.setAttribute(n, "") : a !== false && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, a) : t.removeAttribute(n);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(n, a) : t.removeAttribute(n);
          break;
        case "rowSpan":
        case "start":
          a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(n) : t.setAttribute(n, a);
          break;
        case "popover":
          gt("beforetoggle", t), gt("toggle", t), Xn(t, "popover", a);
          break;
        case "xlinkActuate":
          ke(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
          break;
        case "xlinkArcrole":
          ke(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
          break;
        case "xlinkRole":
          ke(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
          break;
        case "xlinkShow":
          ke(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
          break;
        case "xlinkTitle":
          ke(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
          break;
        case "xlinkType":
          ke(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
          break;
        case "xmlBase":
          ke(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
          break;
        case "xmlLang":
          ke(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
          break;
        case "xmlSpace":
          ke(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
          break;
        case "is":
          Xn(t, "is", a);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Wi.get(n) || n, Xn(t, n, a));
      }
    }
    function sr(t, e, n, a, l, u) {
      switch (n) {
        case "style":
          ju(t, a, u);
          break;
        case "dangerouslySetInnerHTML":
          if (a != null) {
            if (typeof a != "object" || !("__html" in a))
              throw Error(o(61));
            if (n = a.__html, n != null) {
              if (l.children != null)
                throw Error(o(60));
              t.innerHTML = n;
            }
          }
          break;
        case "children":
          typeof a == "string" ? Qn(t, a) : (typeof a == "number" || typeof a == "bigint") && Qn(t, "" + a);
          break;
        case "onScroll":
          a != null && gt("scroll", t);
          break;
        case "onScrollEnd":
          a != null && gt("scrollend", t);
          break;
        case "onClick":
          a != null && (t.onclick = Fe);
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
          if (!wl.hasOwnProperty(n))
            t: {
              if (n[0] === "o" && n[1] === "n" && (l = n.endsWith("Capture"), e = n.slice(2, l ? n.length - 7 : void 0), u = t[re] || null, u = u != null ? u[n] : null, typeof u == "function" && t.removeEventListener(e, u, l), typeof a == "function")) {
                typeof u != "function" && u !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(e, a, l);
                break t;
              }
              n in t ? t[n] = a : a === true ? t.setAttribute(n, "") : Xn(t, n, a);
            }
      }
    }
    function ge(t, e, n) {
      switch (e) {
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
          gt("error", t), gt("load", t);
          var a = false, l = false, u;
          for (u in n)
            if (n.hasOwnProperty(u)) {
              var r = n[u];
              if (r != null)
                switch (u) {
                  case "src":
                    a = true;
                    break;
                  case "srcSet":
                    l = true;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(o(137, e));
                  default:
                    jt(t, e, u, r, n, null);
                }
            }
          l && jt(t, e, "srcSet", n.srcSet, n, null), a && jt(t, e, "src", n.src, n, null);
          return;
        case "input":
          gt("invalid", t);
          var p = u = r = l = null, _ = null, M = null;
          for (a in n)
            if (n.hasOwnProperty(a)) {
              var L = n[a];
              if (L != null)
                switch (a) {
                  case "name":
                    l = L;
                    break;
                  case "type":
                    r = L;
                    break;
                  case "checked":
                    _ = L;
                    break;
                  case "defaultChecked":
                    M = L;
                    break;
                  case "value":
                    u = L;
                    break;
                  case "defaultValue":
                    p = L;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (L != null)
                      throw Error(o(137, e));
                    break;
                  default:
                    jt(t, e, a, L, n, null);
                }
            }
          Ji(t, u, p, _, M, r, l, false);
          return;
        case "select":
          gt("invalid", t), a = r = u = null;
          for (l in n)
            if (n.hasOwnProperty(l) && (p = n[l], p != null))
              switch (l) {
                case "value":
                  u = p;
                  break;
                case "defaultValue":
                  r = p;
                  break;
                case "multiple":
                  a = p;
                default:
                  jt(t, e, l, p, n, null);
              }
          e = u, n = r, t.multiple = !!a, e != null ? ya(t, !!a, e, false) : n != null && ya(t, !!a, n, true);
          return;
        case "textarea":
          gt("invalid", t), u = l = a = null;
          for (r in n)
            if (n.hasOwnProperty(r) && (p = n[r], p != null))
              switch (r) {
                case "value":
                  a = p;
                  break;
                case "defaultValue":
                  l = p;
                  break;
                case "children":
                  u = p;
                  break;
                case "dangerouslySetInnerHTML":
                  if (p != null)
                    throw Error(o(91));
                  break;
                default:
                  jt(t, e, r, p, n, null);
              }
          Bu(t, a, l, u);
          return;
        case "option":
          for (_ in n)
            if (n.hasOwnProperty(_) && (a = n[_], a != null))
              switch (_) {
                case "selected":
                  t.selected = a && typeof a != "function" && typeof a != "symbol";
                  break;
                default:
                  jt(t, e, _, a, n, null);
              }
          return;
        case "dialog":
          gt("beforetoggle", t), gt("toggle", t), gt("cancel", t), gt("close", t);
          break;
        case "iframe":
        case "object":
          gt("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < pi.length; a++)
            gt(pi[a], t);
          break;
        case "image":
          gt("error", t), gt("load", t);
          break;
        case "details":
          gt("toggle", t);
          break;
        case "embed":
        case "source":
        case "link":
          gt("error", t), gt("load", t);
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
          for (M in n)
            if (n.hasOwnProperty(M) && (a = n[M], a != null))
              switch (M) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, e));
                default:
                  jt(t, e, M, a, n, null);
              }
          return;
        default:
          if (Cl(e)) {
            for (L in n)
              n.hasOwnProperty(L) && (a = n[L], a !== void 0 && sr(t, e, L, a, n, void 0));
            return;
          }
      }
      for (p in n)
        n.hasOwnProperty(p) && (a = n[p], a != null && jt(t, e, p, a, n, null));
    }
    function Xm(t, e, n, a) {
      switch (e) {
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
          var l = null, u = null, r = null, p = null, _ = null, M = null, L = null;
          for (q in n) {
            var G = n[q];
            if (n.hasOwnProperty(q) && G != null)
              switch (q) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  _ = G;
                default:
                  a.hasOwnProperty(q) || jt(t, e, q, null, a, G);
              }
          }
          for (var N in a) {
            var q = a[N];
            if (G = n[N], a.hasOwnProperty(N) && (q != null || G != null))
              switch (N) {
                case "type":
                  u = q;
                  break;
                case "name":
                  l = q;
                  break;
                case "checked":
                  M = q;
                  break;
                case "defaultChecked":
                  L = q;
                  break;
                case "value":
                  r = q;
                  break;
                case "defaultValue":
                  p = q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (q != null)
                    throw Error(o(137, e));
                  break;
                default:
                  q !== G && jt(t, e, N, q, a, G);
              }
          }
          Mu(t, r, p, _, M, L, u, l);
          return;
        case "select":
          q = r = p = N = null;
          for (u in n)
            if (_ = n[u], n.hasOwnProperty(u) && _ != null)
              switch (u) {
                case "value":
                  break;
                case "multiple":
                  q = _;
                default:
                  a.hasOwnProperty(u) || jt(t, e, u, null, a, _);
              }
          for (l in a)
            if (u = a[l], _ = n[l], a.hasOwnProperty(l) && (u != null || _ != null))
              switch (l) {
                case "value":
                  N = u;
                  break;
                case "defaultValue":
                  p = u;
                  break;
                case "multiple":
                  r = u;
                default:
                  u !== _ && jt(t, e, l, u, a, _);
              }
          e = p, n = r, a = q, N != null ? ya(t, !!n, N, false) : !!a != !!n && (e != null ? ya(t, !!n, e, true) : ya(t, !!n, n ? [] : "", false));
          return;
        case "textarea":
          q = N = null;
          for (p in n)
            if (l = n[p], n.hasOwnProperty(p) && l != null && !a.hasOwnProperty(p))
              switch (p) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  jt(t, e, p, null, a, l);
              }
          for (r in a)
            if (l = a[r], u = n[r], a.hasOwnProperty(r) && (l != null || u != null))
              switch (r) {
                case "value":
                  N = l;
                  break;
                case "defaultValue":
                  q = l;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (l != null)
                    throw Error(o(91));
                  break;
                default:
                  l !== u && jt(t, e, r, l, a, u);
              }
          ki(t, N, q);
          return;
        case "option":
          for (var P in n)
            if (N = n[P], n.hasOwnProperty(P) && N != null && !a.hasOwnProperty(P))
              switch (P) {
                case "selected":
                  t.selected = false;
                  break;
                default:
                  jt(t, e, P, null, a, N);
              }
          for (_ in a)
            if (N = a[_], q = n[_], a.hasOwnProperty(_) && N !== q && (N != null || q != null))
              switch (_) {
                case "selected":
                  t.selected = N && typeof N != "function" && typeof N != "symbol";
                  break;
                default:
                  jt(t, e, _, N, a, q);
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
          for (var lt in n)
            N = n[lt], n.hasOwnProperty(lt) && N != null && !a.hasOwnProperty(lt) && jt(t, e, lt, null, a, N);
          for (M in a)
            if (N = a[M], q = n[M], a.hasOwnProperty(M) && N !== q && (N != null || q != null))
              switch (M) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (N != null)
                    throw Error(o(137, e));
                  break;
                default:
                  jt(t, e, M, N, a, q);
              }
          return;
        default:
          if (Cl(e)) {
            for (var qt in n)
              N = n[qt], n.hasOwnProperty(qt) && N !== void 0 && !a.hasOwnProperty(qt) && sr(t, e, qt, void 0, a, N);
            for (L in a)
              N = a[L], q = n[L], !a.hasOwnProperty(L) || N === q || N === void 0 && q === void 0 || sr(t, e, L, N, a, q);
            return;
          }
      }
      for (var U in n)
        N = n[U], n.hasOwnProperty(U) && N != null && !a.hasOwnProperty(U) && jt(t, e, U, null, a, N);
      for (G in a)
        N = a[G], q = n[G], !a.hasOwnProperty(G) || N === q || N == null && q == null || jt(t, e, G, N, a, q);
    }
    function Id(t) {
      switch (t) {
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
    function Gm() {
      if (typeof performance.getEntriesByType == "function") {
        for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
          var l = n[a], u = l.transferSize, r = l.initiatorType, p = l.duration;
          if (u && p && Id(r)) {
            for (r = 0, p = l.responseEnd, a += 1; a < n.length; a++) {
              var _ = n[a], M = _.startTime;
              if (M > p)
                break;
              var L = _.transferSize, G = _.initiatorType;
              L && Id(G) && (_ = _.responseEnd, r += L * (_ < p ? 1 : (p - M) / (_ - M)));
            }
            if (--a, e += 8 * (u + r) / (l.duration / 1e3), t++, 10 < t)
              break;
          }
        }
        if (0 < t)
          return e / t / 1e6;
      }
      return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
    }
    var cr = null, or = null;
    function Ks(t) {
      return t.nodeType === 9 ? t : t.ownerDocument;
    }
    function tp(t) {
      switch (t) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function ep(t, e) {
      if (t === 0)
        switch (e) {
          case "svg":
            return 1;
          case "math":
            return 2;
          default:
            return 0;
        }
      return t === 1 && e === "foreignObject" ? 0 : t;
    }
    function rr(t, e) {
      return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
    }
    var fr = null;
    function Qm() {
      var t = window.event;
      return t && t.type === "popstate" ? t === fr ? false : (fr = t, true) : (fr = null, false);
    }
    var np = typeof setTimeout == "function" ? setTimeout : void 0, Vm = typeof clearTimeout == "function" ? clearTimeout : void 0, ap = typeof Promise == "function" ? Promise : void 0, Zm = typeof queueMicrotask == "function" ? queueMicrotask : typeof ap != "undefined" ? function(t) {
      return ap.resolve(null).then(t).catch(Km);
    } : np;
    function Km(t) {
      setTimeout(function() {
        throw t;
      });
    }
    function Ba(t) {
      return t === "head";
    }
    function lp(t, e) {
      var n = e, a = 0;
      do {
        var l = n.nextSibling;
        if (t.removeChild(n), l && l.nodeType === 8)
          if (n = l.data, n === "/$" || n === "/&") {
            if (a === 0) {
              t.removeChild(l), mu(e);
              return;
            }
            a--;
          } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
            a++;
          else if (n === "html")
            mi(t.ownerDocument.documentElement);
          else if (n === "head") {
            n = t.ownerDocument.head, mi(n);
            for (var u = n.firstChild; u; ) {
              var r = u.nextSibling, p = u.nodeName;
              u[wn] || p === "SCRIPT" || p === "STYLE" || p === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u), u = r;
            }
          } else
            n === "body" && mi(t.ownerDocument.body);
        n = l;
      } while (n);
      mu(e);
    }
    function up(t, e) {
      var n = t;
      t = 0;
      do {
        var a = n.nextSibling;
        if (n.nodeType === 1 ? e ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (e ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), a && a.nodeType === 8)
          if (n = a.data, n === "/$") {
            if (t === 0)
              break;
            t--;
          } else
            n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || t++;
        n = a;
      } while (n);
    }
    function hr(t) {
      var e = t.firstChild;
      for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
        var n = e;
        switch (e = e.nextSibling, n.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            hr(n), Cu(n);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (n.rel.toLowerCase() === "stylesheet")
              continue;
        }
        t.removeChild(n);
      }
    }
    function Jm(t, e, n, a) {
      for (; t.nodeType === 1; ) {
        var l = n;
        if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
          if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
            break;
        } else if (a) {
          if (!t[wn])
            switch (e) {
              case "meta":
                if (!t.hasAttribute("itemprop"))
                  break;
                return t;
              case "link":
                if (u = t.getAttribute("rel"), u === "stylesheet" && t.hasAttribute("data-precedence"))
                  break;
                if (u !== l.rel || t.getAttribute("href") !== (l.href == null || l.href === "" ? null : l.href) || t.getAttribute("crossorigin") !== (l.crossOrigin == null ? null : l.crossOrigin) || t.getAttribute("title") !== (l.title == null ? null : l.title))
                  break;
                return t;
              case "style":
                if (t.hasAttribute("data-precedence"))
                  break;
                return t;
              case "script":
                if (u = t.getAttribute("src"), (u !== (l.src == null ? null : l.src) || t.getAttribute("type") !== (l.type == null ? null : l.type) || t.getAttribute("crossorigin") !== (l.crossOrigin == null ? null : l.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                  break;
                return t;
              default:
                return t;
            }
        } else if (e === "input" && t.type === "hidden") {
          var u = l.name == null ? null : "" + l.name;
          if (l.type === "hidden" && t.getAttribute("name") === u)
            return t;
        } else
          return t;
        if (t = cn(t.nextSibling), t === null)
          break;
      }
      return null;
    }
    function km(t, e, n) {
      if (e === "")
        return null;
      for (; t.nodeType !== 3; )
        if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = cn(t.nextSibling), t === null))
          return null;
      return t;
    }
    function ip(t, e) {
      for (; t.nodeType !== 8; )
        if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = cn(t.nextSibling), t === null))
          return null;
      return t;
    }
    function dr(t) {
      return t.data === "$?" || t.data === "$~";
    }
    function pr(t) {
      return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
    }
    function Fm(t, e) {
      var n = t.ownerDocument;
      if (t.data === "$~")
        t._reactRetry = e;
      else if (t.data !== "$?" || n.readyState !== "loading")
        e();
      else {
        var a = function() {
          e(), n.removeEventListener("DOMContentLoaded", a);
        };
        n.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
      }
    }
    function cn(t) {
      for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3)
          break;
        if (e === 8) {
          if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
            break;
          if (e === "/$" || e === "/&")
            return null;
        }
      }
      return t;
    }
    var yr = null;
    function sp(t) {
      t = t.nextSibling;
      for (var e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === "/$" || n === "/&") {
            if (e === 0)
              return cn(t.nextSibling);
            e--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || e++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function cp(t) {
      t = t.previousSibling;
      for (var e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
            if (e === 0)
              return t;
            e--;
          } else
            n !== "/$" && n !== "/&" || e++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function op(t, e, n) {
      switch (e = Ks(n), t) {
        case "html":
          if (t = e.documentElement, !t)
            throw Error(o(452));
          return t;
        case "head":
          if (t = e.head, !t)
            throw Error(o(453));
          return t;
        case "body":
          if (t = e.body, !t)
            throw Error(o(454));
          return t;
        default:
          throw Error(o(451));
      }
    }
    function mi(t) {
      for (var e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      Cu(t);
    }
    var on = /* @__PURE__ */ new Map(), rp = /* @__PURE__ */ new Set();
    function Js(t) {
      return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
    }
    var oa = F.d;
    F.d = { f: Wm, r: $m, D: Pm, C: Im, L: t0, m: e0, X: a0, S: n0, M: l0 };
    function Wm() {
      var t = oa.f(), e = Hs();
      return t || e;
    }
    function $m(t) {
      var e = Un(t);
      e !== null && e.tag === 5 && e.type === "form" ? zh(e) : oa.r(t);
    }
    var du = typeof document == "undefined" ? null : document;
    function fp(t, e, n) {
      var a = du;
      if (a && typeof e == "string" && e) {
        var l = Re(e);
        l = 'link[rel="' + t + '"][href="' + l + '"]', typeof n == "string" && (l += '[crossorigin="' + n + '"]'), rp.has(l) || (rp.add(l), t = { rel: t, crossOrigin: n, href: e }, a.querySelector(l) === null && (e = a.createElement("link"), ge(e, "link", t), Kt(e), a.head.appendChild(e)));
      }
    }
    function Pm(t) {
      oa.D(t), fp("dns-prefetch", t, null);
    }
    function Im(t, e) {
      oa.C(t, e), fp("preconnect", t, e);
    }
    function t0(t, e, n) {
      oa.L(t, e, n);
      var a = du;
      if (a && t && e) {
        var l = 'link[rel="preload"][as="' + Re(e) + '"]';
        e === "image" && n && n.imageSrcSet ? (l += '[imagesrcset="' + Re(n.imageSrcSet) + '"]', typeof n.imageSizes == "string" && (l += '[imagesizes="' + Re(n.imageSizes) + '"]')) : l += '[href="' + Re(t) + '"]';
        var u = l;
        switch (e) {
          case "style":
            u = pu(t);
            break;
          case "script":
            u = yu(t);
        }
        on.has(u) || (t = w({ rel: "preload", href: e === "image" && n && n.imageSrcSet ? void 0 : t, as: e }, n), on.set(u, t), a.querySelector(l) !== null || e === "style" && a.querySelector(vi(u)) || e === "script" && a.querySelector(gi(u)) || (e = a.createElement("link"), ge(e, "link", t), Kt(e), a.head.appendChild(e)));
      }
    }
    function e0(t, e) {
      oa.m(t, e);
      var n = du;
      if (n && t) {
        var a = e && typeof e.as == "string" ? e.as : "script", l = 'link[rel="modulepreload"][as="' + Re(a) + '"][href="' + Re(t) + '"]', u = l;
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            u = yu(t);
        }
        if (!on.has(u) && (t = w({ rel: "modulepreload", href: t }, e), on.set(u, t), n.querySelector(l) === null)) {
          switch (a) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (n.querySelector(gi(u)))
                return;
          }
          a = n.createElement("link"), ge(a, "link", t), Kt(a), n.head.appendChild(a);
        }
      }
    }
    function n0(t, e, n) {
      oa.S(t, e, n);
      var a = du;
      if (a && t) {
        var l = pa(a).hoistableStyles, u = pu(t);
        e = e || "default";
        var r = l.get(u);
        if (!r) {
          var p = { loading: 0, preload: null };
          if (r = a.querySelector(vi(u)))
            p.loading = 5;
          else {
            t = w({ rel: "stylesheet", href: t, "data-precedence": e }, n), (n = on.get(u)) && mr(t, n);
            var _ = r = a.createElement("link");
            Kt(_), ge(_, "link", t), _._p = new Promise(function(M, L) {
              _.onload = M, _.onerror = L;
            }), _.addEventListener("load", function() {
              p.loading |= 1;
            }), _.addEventListener("error", function() {
              p.loading |= 2;
            }), p.loading |= 4, ks(r, e, a);
          }
          r = { type: "stylesheet", instance: r, count: 1, state: p }, l.set(u, r);
        }
      }
    }
    function a0(t, e) {
      oa.X(t, e);
      var n = du;
      if (n && t) {
        var a = pa(n).hoistableScripts, l = yu(t), u = a.get(l);
        u || (u = n.querySelector(gi(l)), u || (t = w({ src: t, async: true }, e), (e = on.get(l)) && vr(t, e), u = n.createElement("script"), Kt(u), ge(u, "link", t), n.head.appendChild(u)), u = { type: "script", instance: u, count: 1, state: null }, a.set(l, u));
      }
    }
    function l0(t, e) {
      oa.M(t, e);
      var n = du;
      if (n && t) {
        var a = pa(n).hoistableScripts, l = yu(t), u = a.get(l);
        u || (u = n.querySelector(gi(l)), u || (t = w({ src: t, async: true, type: "module" }, e), (e = on.get(l)) && vr(t, e), u = n.createElement("script"), Kt(u), ge(u, "link", t), n.head.appendChild(u)), u = { type: "script", instance: u, count: 1, state: null }, a.set(l, u));
      }
    }
    function hp(t, e, n, a) {
      var l = (l = mt.current) ? Js(l) : null;
      if (!l)
        throw Error(o(446));
      switch (t) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof n.precedence == "string" && typeof n.href == "string" ? (e = pu(n.href), n = pa(l).hoistableStyles, a = n.get(e), a || (a = { type: "style", instance: null, count: 0, state: null }, n.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
            t = pu(n.href);
            var u = pa(l).hoistableStyles, r = u.get(t);
            if (r || (l = l.ownerDocument || l, r = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, u.set(t, r), (u = l.querySelector(vi(t))) && !u._p && (r.instance = u, r.state.loading = 5), on.has(t) || (n = { rel: "preload", as: "style", href: n.href, crossOrigin: n.crossOrigin, integrity: n.integrity, media: n.media, hrefLang: n.hrefLang, referrerPolicy: n.referrerPolicy }, on.set(t, n), u || u0(l, t, n, r.state))), e && a === null)
              throw Error(o(528, ""));
            return r;
          }
          if (e && a !== null)
            throw Error(o(529, ""));
          return null;
        case "script":
          return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = yu(n), n = pa(l).hoistableScripts, a = n.get(e), a || (a = { type: "script", instance: null, count: 0, state: null }, n.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(o(444, t));
      }
    }
    function pu(t) {
      return 'href="' + Re(t) + '"';
    }
    function vi(t) {
      return 'link[rel="stylesheet"][' + t + "]";
    }
    function dp(t) {
      return w({}, t, { "data-precedence": t.precedence, precedence: null });
    }
    function u0(t, e, n, a) {
      t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function() {
        return a.loading |= 1;
      }), e.addEventListener("error", function() {
        return a.loading |= 2;
      }), ge(e, "link", n), Kt(e), t.head.appendChild(e));
    }
    function yu(t) {
      return '[src="' + Re(t) + '"]';
    }
    function gi(t) {
      return "script[async]" + t;
    }
    function pp(t, e, n) {
      if (e.count++, e.instance === null)
        switch (e.type) {
          case "style":
            var a = t.querySelector('style[data-href~="' + Re(n.href) + '"]');
            if (a)
              return e.instance = a, Kt(a), a;
            var l = w({}, n, { "data-href": n.href, "data-precedence": n.precedence, href: null, precedence: null });
            return a = (t.ownerDocument || t).createElement("style"), Kt(a), ge(a, "style", l), ks(a, n.precedence, t), e.instance = a;
          case "stylesheet":
            l = pu(n.href);
            var u = t.querySelector(vi(l));
            if (u)
              return e.state.loading |= 4, e.instance = u, Kt(u), u;
            a = dp(n), (l = on.get(l)) && mr(a, l), u = (t.ownerDocument || t).createElement("link"), Kt(u);
            var r = u;
            return r._p = new Promise(function(p, _) {
              r.onload = p, r.onerror = _;
            }), ge(u, "link", a), e.state.loading |= 4, ks(u, n.precedence, t), e.instance = u;
          case "script":
            return u = yu(n.src), (l = t.querySelector(gi(u))) ? (e.instance = l, Kt(l), l) : (a = n, (l = on.get(u)) && (a = w({}, n), vr(a, l)), t = t.ownerDocument || t, l = t.createElement("script"), Kt(l), ge(l, "link", a), t.head.appendChild(l), e.instance = l);
          case "void":
            return null;
          default:
            throw Error(o(443, e.type));
        }
      else
        e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, ks(a, n.precedence, t));
      return e.instance;
    }
    function ks(t, e, n) {
      for (var a = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), l = a.length ? a[a.length - 1] : null, u = l, r = 0; r < a.length; r++) {
        var p = a[r];
        if (p.dataset.precedence === e)
          u = p;
        else if (u !== l)
          break;
      }
      u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild));
    }
    function mr(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
    }
    function vr(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
    }
    var Fs = null;
    function yp(t, e, n) {
      if (Fs === null) {
        var a = /* @__PURE__ */ new Map(), l = Fs = /* @__PURE__ */ new Map();
        l.set(n, a);
      } else
        l = Fs, a = l.get(n), a || (a = /* @__PURE__ */ new Map(), l.set(n, a));
      if (a.has(t))
        return a;
      for (a.set(t, null), n = n.getElementsByTagName(t), l = 0; l < n.length; l++) {
        var u = n[l];
        if (!(u[wn] || u[se] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
          var r = u.getAttribute(e) || "";
          r = t + r;
          var p = a.get(r);
          p ? p.push(u) : a.set(r, [u]);
        }
      }
      return a;
    }
    function mp(t, e, n) {
      t = t.ownerDocument || t, t.head.insertBefore(n, e === "title" ? t.querySelector("head > title") : null);
    }
    function i0(t, e, n) {
      if (n === 1 || e.itemProp != null)
        return false;
      switch (t) {
        case "meta":
        case "title":
          return true;
        case "style":
          if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
            break;
          return true;
        case "link":
          if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
            break;
          switch (e.rel) {
            case "stylesheet":
              return t = e.disabled, typeof e.precedence == "string" && t == null;
            default:
              return true;
          }
        case "script":
          if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
            return true;
      }
      return false;
    }
    function vp(t) {
      return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
    }
    function s0(t, e, n, a) {
      if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== false) && (n.state.loading & 4) === 0) {
        if (n.instance === null) {
          var l = pu(a.href), u = e.querySelector(vi(l));
          if (u) {
            e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = Ws.bind(t), e.then(t, t)), n.state.loading |= 4, n.instance = u, Kt(u);
            return;
          }
          u = e.ownerDocument || e, a = dp(a), (l = on.get(l)) && mr(a, l), u = u.createElement("link"), Kt(u);
          var r = u;
          r._p = new Promise(function(p, _) {
            r.onload = p, r.onerror = _;
          }), ge(u, "link", a), n.instance = u;
        }
        t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (t.count++, n = Ws.bind(t), e.addEventListener("load", n), e.addEventListener("error", n));
      }
    }
    var gr = 0;
    function c0(t, e) {
      return t.stylesheets && t.count === 0 && Ps(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(n) {
        var a = setTimeout(function() {
          if (t.stylesheets && Ps(t, t.stylesheets), t.unsuspend) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        }, 6e4 + e);
        0 < t.imgBytes && gr === 0 && (gr = 62500 * Gm());
        var l = setTimeout(function() {
          if (t.waitingForImages = false, t.count === 0 && (t.stylesheets && Ps(t, t.stylesheets), t.unsuspend)) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        }, (t.imgBytes > gr ? 50 : 800) + e);
        return t.unsuspend = n, function() {
          t.unsuspend = null, clearTimeout(a), clearTimeout(l);
        };
      } : null;
    }
    function Ws() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets)
          Ps(this, this.stylesheets);
        else if (this.unsuspend) {
          var t = this.unsuspend;
          this.unsuspend = null, t();
        }
      }
    }
    var $s = null;
    function Ps(t, e) {
      t.stylesheets = null, t.unsuspend !== null && (t.count++, $s = /* @__PURE__ */ new Map(), e.forEach(o0, t), $s = null, Ws.call(t));
    }
    function o0(t, e) {
      if (!(e.state.loading & 4)) {
        var n = $s.get(t);
        if (n)
          var a = n.get(null);
        else {
          n = /* @__PURE__ */ new Map(), $s.set(t, n);
          for (var l = t.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < l.length; u++) {
            var r = l[u];
            (r.nodeName === "LINK" || r.getAttribute("media") !== "not all") && (n.set(r.dataset.precedence, r), a = r);
          }
          a && n.set(null, a);
        }
        l = e.instance, r = l.getAttribute("data-precedence"), u = n.get(r) || a, u === a && n.set(null, l), n.set(r, l), this.count++, a = Ws.bind(this), l.addEventListener("load", a), l.addEventListener("error", a), u ? u.parentNode.insertBefore(l, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(l, t.firstChild)), e.state.loading |= 4;
      }
    }
    var bi = { $$typeof: ht, Provider: null, Consumer: null, _currentValue: nt, _currentValue2: nt, _threadCount: 0 };
    function r0(t, e, n, a, l, u, r, p, _) {
      this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Wa(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wa(0), this.hiddenUpdates = Wa(null), this.identifierPrefix = a, this.onUncaughtError = l, this.onCaughtError = u, this.onRecoverableError = r, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = _, this.incompleteTransitions = /* @__PURE__ */ new Map();
    }
    function gp(t, e, n, a, l, u, r, p, _, M, L, G) {
      return t = new r0(t, e, n, r, _, M, L, G, p), e = 1, u === true && (e |= 24), u = Ye(3, null, null, e), t.current = u, u.stateNode = t, e = Wc(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = { element: a, isDehydrated: n, cache: e }, to(u), t;
    }
    function bp(t) {
      return t ? (t = Kl, t) : Kl;
    }
    function Sp(t, e, n, a, l, u) {
      l = bp(l), a.context === null ? a.context = l : a.pendingContext = l, a = Aa(e), a.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (a.callback = u), n = Oa(t, a, e), n !== null && (Ne(n, t, e), $u(n, t, e));
    }
    function Ep(t, e) {
      if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
        var n = t.retryLane;
        t.retryLane = n !== 0 && n < e ? n : e;
      }
    }
    function br(t, e) {
      Ep(t, e), (t = t.alternate) && Ep(t, e);
    }
    function Tp(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = il(t, 67108864);
        e !== null && Ne(e, t, 67108864), br(t, 67108864);
      }
    }
    function _p(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = Ze();
        e = It(e);
        var n = il(t, e);
        n !== null && Ne(n, t, e), br(t, e);
      }
    }
    var Is = true;
    function f0(t, e, n, a) {
      var l = H.T;
      H.T = null;
      var u = F.p;
      try {
        F.p = 2, Sr(t, e, n, a);
      } finally {
        F.p = u, H.T = l;
      }
    }
    function h0(t, e, n, a) {
      var l = H.T;
      H.T = null;
      var u = F.p;
      try {
        F.p = 8, Sr(t, e, n, a);
      } finally {
        F.p = u, H.T = l;
      }
    }
    function Sr(t, e, n, a) {
      if (Is) {
        var l = Er(a);
        if (l === null)
          ir(t, e, a, tc, n), Op(t, a);
        else if (p0(l, t, e, n, a))
          a.stopPropagation();
        else if (Op(t, a), e & 4 && -1 < d0.indexOf(t)) {
          for (; l !== null; ) {
            var u = Un(l);
            if (u !== null)
              switch (u.tag) {
                case 3:
                  if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                    var r = Rn(u.pendingLanes);
                    if (r !== 0) {
                      var p = u;
                      for (p.pendingLanes |= 2, p.entangledLanes |= 2; r; ) {
                        var _ = 1 << 31 - be(r);
                        p.entanglements[1] |= _, r &= ~_;
                      }
                      qn(u), (Ct & 6) === 0 && (js = Ae() + 500, di(0));
                    }
                  }
                  break;
                case 31:
                case 13:
                  p = il(u, 2), p !== null && Ne(p, u, 2), Hs(), br(u, 2);
              }
            if (u = Er(a), u === null && ir(t, e, a, tc, n), u === l)
              break;
            l = u;
          }
          l !== null && a.stopPropagation();
        } else
          ir(t, e, a, null, n);
      }
    }
    function Er(t) {
      return t = xl(t), Tr(t);
    }
    var tc = null;
    function Tr(t) {
      if (tc = null, t = da(t), t !== null) {
        var e = b(t);
        if (e === null)
          t = null;
        else {
          var n = e.tag;
          if (n === 13) {
            if (t = m(e), t !== null)
              return t;
            t = null;
          } else if (n === 31) {
            if (t = E(e), t !== null)
              return t;
            t = null;
          } else if (n === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated)
              return e.tag === 3 ? e.stateNode.containerInfo : null;
            t = null;
          } else
            e !== t && (t = null);
        }
      }
      return tc = t, null;
    }
    function Ap(t) {
      switch (t) {
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
          switch (B()) {
            case st:
              return 2;
            case Ru:
              return 8;
            case Za:
            case Tc:
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
    var _r = false, ja = null, qa = null, Ha = null, Si = /* @__PURE__ */ new Map(), Ei = /* @__PURE__ */ new Map(), La = [], d0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Op(t, e) {
      switch (t) {
        case "focusin":
        case "focusout":
          ja = null;
          break;
        case "dragenter":
        case "dragleave":
          qa = null;
          break;
        case "mouseover":
        case "mouseout":
          Ha = null;
          break;
        case "pointerover":
        case "pointerout":
          Si.delete(e.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Ei.delete(e.pointerId);
      }
    }
    function Ti(t, e, n, a, l, u) {
      return t === null || t.nativeEvent !== u ? (t = { blockedOn: e, domEventName: n, eventSystemFlags: a, nativeEvent: u, targetContainers: [l] }, e !== null && (e = Un(e), e !== null && Tp(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, l !== null && e.indexOf(l) === -1 && e.push(l), t);
    }
    function p0(t, e, n, a, l) {
      switch (e) {
        case "focusin":
          return ja = Ti(ja, t, e, n, a, l), true;
        case "dragenter":
          return qa = Ti(qa, t, e, n, a, l), true;
        case "mouseover":
          return Ha = Ti(Ha, t, e, n, a, l), true;
        case "pointerover":
          var u = l.pointerId;
          return Si.set(u, Ti(Si.get(u) || null, t, e, n, a, l)), true;
        case "gotpointercapture":
          return u = l.pointerId, Ei.set(u, Ti(Ei.get(u) || null, t, e, n, a, l)), true;
      }
      return false;
    }
    function Rp(t) {
      var e = da(t.target);
      if (e !== null) {
        var n = b(e);
        if (n !== null) {
          if (e = n.tag, e === 13) {
            if (e = m(n), e !== null) {
              t.blockedOn = e, Xi(t.priority, function() {
                _p(n);
              });
              return;
            }
          } else if (e === 31) {
            if (e = E(n), e !== null) {
              t.blockedOn = e, Xi(t.priority, function() {
                _p(n);
              });
              return;
            }
          } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
            t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      t.blockedOn = null;
    }
    function ec(t) {
      if (t.blockedOn !== null)
        return false;
      for (var e = t.targetContainers; 0 < e.length; ) {
        var n = Er(t.nativeEvent);
        if (n === null) {
          n = t.nativeEvent;
          var a = new n.constructor(n.type, n);
          tl = a, n.target.dispatchEvent(a), tl = null;
        } else
          return e = Un(n), e !== null && Tp(e), t.blockedOn = n, false;
        e.shift();
      }
      return true;
    }
    function zp(t, e, n) {
      ec(t) && n.delete(e);
    }
    function y0() {
      _r = false, ja !== null && ec(ja) && (ja = null), qa !== null && ec(qa) && (qa = null), Ha !== null && ec(Ha) && (Ha = null), Si.forEach(zp), Ei.forEach(zp);
    }
    function nc(t, e) {
      t.blockedOn === e && (t.blockedOn = null, _r || (_r = true, s.unstable_scheduleCallback(s.unstable_NormalPriority, y0)));
    }
    var ac = null;
    function wp(t) {
      ac !== t && (ac = t, s.unstable_scheduleCallback(s.unstable_NormalPriority, function() {
        ac === t && (ac = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e], a = t[e + 1], l = t[e + 2];
          if (typeof a != "function") {
            if (Tr(a || n) === null)
              continue;
            break;
          }
          var u = Un(n);
          u !== null && (t.splice(e, 3), e -= 3, Eo(u, { pending: true, data: l, method: n.method, action: a }, a, l));
        }
      }));
    }
    function mu(t) {
      function e(_) {
        return nc(_, t);
      }
      ja !== null && nc(ja, t), qa !== null && nc(qa, t), Ha !== null && nc(Ha, t), Si.forEach(e), Ei.forEach(e);
      for (var n = 0; n < La.length; n++) {
        var a = La[n];
        a.blockedOn === t && (a.blockedOn = null);
      }
      for (; 0 < La.length && (n = La[0], n.blockedOn === null); )
        Rp(n), n.blockedOn === null && La.shift();
      if (n = (t.ownerDocument || t).$$reactFormReplay, n != null)
        for (a = 0; a < n.length; a += 3) {
          var l = n[a], u = n[a + 1], r = l[re] || null;
          if (typeof u == "function")
            r || wp(n);
          else if (r) {
            var p = null;
            if (u && u.hasAttribute("formAction")) {
              if (l = u, r = u[re] || null)
                p = r.formAction;
              else if (Tr(l) !== null)
                continue;
            } else
              p = r.action;
            typeof p == "function" ? n[a + 1] = p : (n.splice(a, 3), a -= 3), wp(n);
          }
        }
    }
    function Up() {
      function t(u) {
        u.canIntercept && u.info === "react-transition" && u.intercept({ handler: function() {
          return new Promise(function(r) {
            return l = r;
          });
        }, focusReset: "manual", scroll: "manual" });
      }
      function e() {
        l !== null && (l(), l = null), a || setTimeout(n, 20);
      }
      function n() {
        if (!a && !navigation.transition) {
          var u = navigation.currentEntry;
          u && u.url != null && navigation.navigate(u.url, { state: u.getState(), info: "react-transition", history: "replace" });
        }
      }
      if (typeof navigation == "object") {
        var a = false, l = null;
        return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(n, 100), function() {
          a = true, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), l !== null && (l(), l = null);
        };
      }
    }
    function Ar(t) {
      this._internalRoot = t;
    }
    lc.prototype.render = Ar.prototype.render = function(t) {
      var e = this._internalRoot;
      if (e === null)
        throw Error(o(409));
      var n = e.current, a = Ze();
      Sp(n, a, t, e, null, null);
    }, lc.prototype.unmount = Ar.prototype.unmount = function() {
      var t = this._internalRoot;
      if (t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        Sp(t.current, 2, null, t, null, null), Hs(), e[zn] = null;
      }
    };
    function lc(t) {
      this._internalRoot = t;
    }
    lc.prototype.unstable_scheduleHydration = function(t) {
      if (t) {
        var e = Yi();
        t = { blockedOn: null, target: t, priority: e };
        for (var n = 0; n < La.length && e !== 0 && e < La[n].priority; n++)
          ;
        La.splice(n, 0, t), n === 0 && Rp(t);
      }
    };
    var Cp = i.version;
    if (Cp !== "19.2.0")
      throw Error(o(527, Cp, "19.2.0"));
    F.findDOMNode = function(t) {
      var e = t._reactInternals;
      if (e === void 0)
        throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","), Error(o(268, t)));
      return t = h(e), t = t !== null ? T(t) : null, t = t === null ? null : t.stateNode, t;
    };
    var m0 = { bundleType: 0, version: "19.2.0", rendererPackageName: "react-dom", currentDispatcherRef: H, reconcilerVersion: "19.2.0" };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
      var uc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!uc.isDisabled && uc.supportsFiber)
        try {
          Ka = uc.inject(m0), Oe = uc;
        } catch (t) {
        }
    }
    return Oi.createRoot = function(t, e) {
      if (!g(t))
        throw Error(o(299));
      var n = false, a = "", l = qh, u = Hh, r = Lh;
      return e != null && (e.unstable_strictMode === true && (n = true), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (l = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (r = e.onRecoverableError)), e = gp(t, 1, false, null, null, n, a, null, l, u, r, Up), t[zn] = e.current, ur(t), new Ar(e);
    }, Oi.hydrateRoot = function(t, e, n) {
      if (!g(t))
        throw Error(o(299));
      var a = false, l = "", u = qh, r = Hh, p = Lh, _ = null;
      return n != null && (n.unstable_strictMode === true && (a = true), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (r = n.onCaughtError), n.onRecoverableError !== void 0 && (p = n.onRecoverableError), n.formState !== void 0 && (_ = n.formState)), e = gp(t, 1, true, e, n != null ? n : null, a, l, _, u, r, p, Up), e.context = bp(null), n = e.current, a = Ze(), a = It(a), l = Aa(a), l.callback = null, Oa(n, l, a), n = a, e.current.lanes = n, Yn(e, n), qn(e), t[zn] = e.current, ur(t), new lc(e);
    }, Oi.version = "19.2.0", Oi;
  }
  var Vp;
  function K0() {
    if (Vp)
      return Dr.exports;
    Vp = 1;
    function s() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
        } catch (i) {
          console.error(i);
        }
    }
    return s(), Dr.exports = Z0(), Dr.exports;
  }
  var J0 = K0();
  var k0 = vy(J0);
  var F0 = Object.defineProperty;
  var W0 = (s, i, c) => i in s ? F0(s, i, { enumerable: true, configurable: true, writable: true, value: c }) : s[i] = c;
  var El = (s, i, c) => W0(s, typeof i != "symbol" ? i + "" : i, c);
  var $0 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  var gu = {};
  var Ri = {};
  var gn = {};
  var Zp;
  function by() {
    if (Zp)
      return gn;
    Zp = 1;
    var s = gn && gn.__assign || function() {
      return s = Object.assign || function(g) {
        for (var b, m = 1, E = arguments.length; m < E; m++) {
          b = arguments[m];
          for (var y in b)
            Object.prototype.hasOwnProperty.call(b, y) && (g[y] = b[y]);
        }
        return g;
      }, s.apply(this, arguments);
    }, i = gn && gn.__awaiter || function(g, b, m, E) {
      function y(h) {
        return h instanceof m ? h : new m(function(T) {
          T(h);
        });
      }
      return new (m || (m = Promise))(function(h, T) {
        function w(j) {
          try {
            z(E.next(j));
          } catch (K) {
            T(K);
          }
        }
        function X(j) {
          try {
            z(E.throw(j));
          } catch (K) {
            T(K);
          }
        }
        function z(j) {
          j.done ? h(j.value) : y(j.value).then(w, X);
        }
        z((E = E.apply(g, b || [])).next());
      });
    }, c = gn && gn.__generator || function(g, b) {
      var m = { label: 0, sent: function() {
        if (h[0] & 1)
          throw h[1];
        return h[1];
      }, trys: [], ops: [] }, E, y, h, T;
      return T = { next: w(0), throw: w(1), return: w(2) }, typeof Symbol == "function" && (T[Symbol.iterator] = function() {
        return this;
      }), T;
      function w(z) {
        return function(j) {
          return X([z, j]);
        };
      }
      function X(z) {
        if (E)
          throw new TypeError("Generator is already executing.");
        for (; T && (T = 0, z[0] && (m = 0)), m; )
          try {
            if (E = 1, y && (h = z[0] & 2 ? y.return : z[0] ? y.throw || ((h = y.return) && h.call(y), 0) : y.next) && !(h = h.call(y, z[1])).done)
              return h;
            switch (y = 0, h && (z = [z[0] & 2, h.value]), z[0]) {
              case 0:
              case 1:
                h = z;
                break;
              case 4:
                return m.label++, { value: z[1], done: false };
              case 5:
                m.label++, y = z[1], z = [0];
                continue;
              case 7:
                z = m.ops.pop(), m.trys.pop();
                continue;
              default:
                if (h = m.trys, !(h = h.length > 0 && h[h.length - 1]) && (z[0] === 6 || z[0] === 2)) {
                  m = 0;
                  continue;
                }
                if (z[0] === 3 && (!h || z[1] > h[0] && z[1] < h[3])) {
                  m.label = z[1];
                  break;
                }
                if (z[0] === 6 && m.label < h[1]) {
                  m.label = h[1], h = z;
                  break;
                }
                if (h && m.label < h[2]) {
                  m.label = h[2], m.ops.push(z);
                  break;
                }
                h[2] && m.ops.pop(), m.trys.pop();
                continue;
            }
            z = b.call(g, m);
          } catch (j) {
            z = [6, j], y = 0;
          } finally {
            E = h = 0;
          }
        if (z[0] & 5)
          throw z[1];
        return { value: z[0] ? z[1] : void 0, done: true };
      }
    };
    Object.defineProperty(gn, "__esModule", { value: true }), gn.FrappeCall = void 0;
    var o = function() {
      function g(b, m, E, y, h) {
        this.appURL = b, this.axios = m, this.useToken = E != null ? E : false, this.token = y, this.tokenType = h;
      }
      return g.prototype.get = function(b, m) {
        return i(this, void 0, void 0, function() {
          var E;
          return c(this, function(y) {
            return E = new URLSearchParams(), m && Object.entries(m).forEach(function(h) {
              var T = h[0], w = h[1];
              if (w != null) {
                var X = typeof w == "object" ? JSON.stringify(w) : w;
                E.set(T, X);
              }
            }), [2, this.axios.get("/api/method/".concat(b), { params: E }).then(function(h) {
              return h.data;
            }).catch(function(h) {
              var T, w;
              throw s(s({}, h.response.data), { httpStatus: h.response.status, httpStatusText: h.response.statusText, message: (T = h.response.data.message) !== null && T !== void 0 ? T : "There was an error.", exception: (w = h.response.data.exception) !== null && w !== void 0 ? w : "" });
            })];
          });
        });
      }, g.prototype.post = function(b, m) {
        return i(this, void 0, void 0, function() {
          return c(this, function(E) {
            return [2, this.axios.post("/api/method/".concat(b), s({}, m)).then(function(y) {
              return y.data;
            }).catch(function(y) {
              var h, T;
              throw s(s({}, y.response.data), { httpStatus: y.response.status, httpStatusText: y.response.statusText, message: (h = y.response.data.message) !== null && h !== void 0 ? h : "There was an error.", exception: (T = y.response.data.exception) !== null && T !== void 0 ? T : "" });
            })];
          });
        });
      }, g.prototype.put = function(b, m) {
        return i(this, void 0, void 0, function() {
          return c(this, function(E) {
            return [2, this.axios.put("/api/method/".concat(b), s({}, m)).then(function(y) {
              return y.data;
            }).catch(function(y) {
              var h, T;
              throw s(s({}, y.response.data), { httpStatus: y.response.status, httpStatusText: y.response.statusText, message: (h = y.response.data.message) !== null && h !== void 0 ? h : "There was an error.", exception: (T = y.response.data.exception) !== null && T !== void 0 ? T : "" });
            })];
          });
        });
      }, g.prototype.delete = function(b, m) {
        return i(this, void 0, void 0, function() {
          return c(this, function(E) {
            return [2, this.axios.delete("/api/method/".concat(b), { params: m }).then(function(y) {
              return y.data;
            }).catch(function(y) {
              var h, T;
              throw s(s({}, y.response.data), { httpStatus: y.response.status, httpStatusText: y.response.statusText, message: (h = y.response.data.message) !== null && h !== void 0 ? h : "There was an error.", exception: (T = y.response.data.exception) !== null && T !== void 0 ? T : "" });
            })];
          });
        });
      }, g;
    }();
    return gn.FrappeCall = o, gn;
  }
  var bn = {};
  var Kp;
  function Sy() {
    if (Kp)
      return bn;
    Kp = 1;
    var s = bn && bn.__assign || function() {
      return s = Object.assign || function(g) {
        for (var b, m = 1, E = arguments.length; m < E; m++) {
          b = arguments[m];
          for (var y in b)
            Object.prototype.hasOwnProperty.call(b, y) && (g[y] = b[y]);
        }
        return g;
      }, s.apply(this, arguments);
    }, i = bn && bn.__awaiter || function(g, b, m, E) {
      function y(h) {
        return h instanceof m ? h : new m(function(T) {
          T(h);
        });
      }
      return new (m || (m = Promise))(function(h, T) {
        function w(j) {
          try {
            z(E.next(j));
          } catch (K) {
            T(K);
          }
        }
        function X(j) {
          try {
            z(E.throw(j));
          } catch (K) {
            T(K);
          }
        }
        function z(j) {
          j.done ? h(j.value) : y(j.value).then(w, X);
        }
        z((E = E.apply(g, b || [])).next());
      });
    }, c = bn && bn.__generator || function(g, b) {
      var m = { label: 0, sent: function() {
        if (h[0] & 1)
          throw h[1];
        return h[1];
      }, trys: [], ops: [] }, E, y, h, T;
      return T = { next: w(0), throw: w(1), return: w(2) }, typeof Symbol == "function" && (T[Symbol.iterator] = function() {
        return this;
      }), T;
      function w(z) {
        return function(j) {
          return X([z, j]);
        };
      }
      function X(z) {
        if (E)
          throw new TypeError("Generator is already executing.");
        for (; T && (T = 0, z[0] && (m = 0)), m; )
          try {
            if (E = 1, y && (h = z[0] & 2 ? y.return : z[0] ? y.throw || ((h = y.return) && h.call(y), 0) : y.next) && !(h = h.call(y, z[1])).done)
              return h;
            switch (y = 0, h && (z = [z[0] & 2, h.value]), z[0]) {
              case 0:
              case 1:
                h = z;
                break;
              case 4:
                return m.label++, { value: z[1], done: false };
              case 5:
                m.label++, y = z[1], z = [0];
                continue;
              case 7:
                z = m.ops.pop(), m.trys.pop();
                continue;
              default:
                if (h = m.trys, !(h = h.length > 0 && h[h.length - 1]) && (z[0] === 6 || z[0] === 2)) {
                  m = 0;
                  continue;
                }
                if (z[0] === 3 && (!h || z[1] > h[0] && z[1] < h[3])) {
                  m.label = z[1];
                  break;
                }
                if (z[0] === 6 && m.label < h[1]) {
                  m.label = h[1], h = z;
                  break;
                }
                if (h && m.label < h[2]) {
                  m.label = h[2], m.ops.push(z);
                  break;
                }
                h[2] && m.ops.pop(), m.trys.pop();
                continue;
            }
            z = b.call(g, m);
          } catch (j) {
            z = [6, j], y = 0;
          } finally {
            E = h = 0;
          }
        if (z[0] & 5)
          throw z[1];
        return { value: z[0] ? z[1] : void 0, done: true };
      }
    };
    Object.defineProperty(bn, "__esModule", { value: true }), bn.FrappeDB = void 0;
    var o = function() {
      function g(b, m, E, y, h) {
        this.appURL = b, this.axios = m, this.useToken = E != null ? E : false, this.token = y, this.tokenType = h;
      }
      return g.prototype.getDoc = function(b, m) {
        return m === void 0 && (m = ""), i(this, void 0, void 0, function() {
          return c(this, function(E) {
            return [2, this.axios.get("/api/resource/".concat(b, "/").concat(encodeURIComponent(m))).then(function(y) {
              return y.data.data;
            }).catch(function(y) {
              var h, T;
              throw s(s({}, y.response.data), { httpStatus: y.response.status, httpStatusText: y.response.statusText, message: "There was an error while fetching the document.", exception: (T = (h = y.response.data.exception) !== null && h !== void 0 ? h : y.response.data.exc_type) !== null && T !== void 0 ? T : "" });
            })];
          });
        });
      }, g.prototype.getDocList = function(b, m) {
        var E;
        return i(this, void 0, void 0, function() {
          var y, h, T, w, X, z, j, K, it, yt, Dt;
          return c(this, function(ht) {
            return y = {}, m && (h = m.fields, T = m.filters, w = m.orFilters, X = m.orderBy, z = m.limit, j = m.limit_start, K = m.groupBy, it = m.asDict, yt = it === void 0 ? true : it, Dt = X ? "".concat(String(X == null ? void 0 : X.field), " ").concat((E = X == null ? void 0 : X.order) !== null && E !== void 0 ? E : "asc") : "", y = { fields: h ? JSON.stringify(h) : void 0, filters: T ? JSON.stringify(T) : void 0, or_filters: w ? JSON.stringify(w) : void 0, order_by: Dt, group_by: K, limit: z, limit_start: j, as_dict: yt }), [2, this.axios.get("/api/resource/".concat(b), { params: y }).then(function(_t) {
              return _t.data.data;
            }).catch(function(_t) {
              var At, Lt;
              throw s(s({}, _t.response.data), { httpStatus: _t.response.status, httpStatusText: _t.response.statusText, message: "There was an error while fetching the documents.", exception: (Lt = (At = _t.response.data.exception) !== null && At !== void 0 ? At : _t.response.data.exc_type) !== null && Lt !== void 0 ? Lt : "" });
            })];
          });
        });
      }, g.prototype.createDoc = function(b, m) {
        return i(this, void 0, void 0, function() {
          return c(this, function(E) {
            return [2, this.axios.post("/api/resource/".concat(b), s({}, m)).then(function(y) {
              return y.data.data;
            }).catch(function(y) {
              var h, T, w;
              throw s(s({}, y.response.data), { httpStatus: y.response.status, httpStatusText: y.response.statusText, message: (h = y.response.data.message) !== null && h !== void 0 ? h : "There was an error while creating the document.", exception: (w = (T = y.response.data.exception) !== null && T !== void 0 ? T : y.response.data.exc_type) !== null && w !== void 0 ? w : "" });
            })];
          });
        });
      }, g.prototype.updateDoc = function(b, m, E) {
        return i(this, void 0, void 0, function() {
          return c(this, function(y) {
            return [2, this.axios.put("/api/resource/".concat(b, "/").concat(m && encodeURIComponent(m)), s({}, E)).then(function(h) {
              return h.data.data;
            }).catch(function(h) {
              var T, w, X;
              throw s(s({}, h.response.data), { httpStatus: h.response.status, httpStatusText: h.response.statusText, message: (T = h.response.data.message) !== null && T !== void 0 ? T : "There was an error while updating the document.", exception: (X = (w = h.response.data.exception) !== null && w !== void 0 ? w : h.response.data.exc_type) !== null && X !== void 0 ? X : "" });
            })];
          });
        });
      }, g.prototype.deleteDoc = function(b, m) {
        return i(this, void 0, void 0, function() {
          return c(this, function(E) {
            return [2, this.axios.delete("/api/resource/".concat(b, "/").concat(m && encodeURIComponent(m))).then(function(y) {
              return y.data;
            }).catch(function(y) {
              var h, T;
              throw s(s({}, y.response.data), { httpStatus: y.response.status, httpStatusText: y.response.statusText, message: "There was an error while deleting the document.", exception: (T = (h = y.response.data.exception) !== null && h !== void 0 ? h : y.response.data.exc_type) !== null && T !== void 0 ? T : "" });
            })];
          });
        });
      }, g.prototype.getCount = function(b, m, E, y) {
        return E === void 0 && (E = false), y === void 0 && (y = false), i(this, void 0, void 0, function() {
          var h;
          return c(this, function(T) {
            return h = { doctype: b, filters: [] }, E && (h.cache = E), y && (h.debug = y), m && (h.filters = m ? JSON.stringify(m) : void 0), [2, this.axios.get("/api/method/frappe.client.get_count", { params: h }).then(function(w) {
              return w.data.message;
            }).catch(function(w) {
              var X, z;
              throw s(s({}, w.response.data), { httpStatus: w.response.status, httpStatusText: w.response.statusText, message: "There was an error while getting the count.", exception: (z = (X = w.response.data.exception) !== null && X !== void 0 ? X : w.response.data.exc_type) !== null && z !== void 0 ? z : "" });
            })];
          });
        });
      }, g.prototype.getLastDoc = function(b, m) {
        return i(this, void 0, void 0, function() {
          var E, y;
          return c(this, function(h) {
            switch (h.label) {
              case 0:
                return E = { orderBy: { field: "creation", order: "desc" } }, m && (E = s(s({}, E), m)), [4, this.getDocList(b, s(s({}, E), { limit: 1, fields: ["name"] }))];
              case 1:
                return y = h.sent(), y.length > 0 ? [2, this.getDoc(b, y[0].name)] : [2, {}];
            }
          });
        });
      }, g.prototype.renameDoc = function(b, m, E, y) {
        return y === void 0 && (y = false), i(this, void 0, void 0, function() {
          return c(this, function(h) {
            return [2, this.axios.post("/api/method/frappe.client.rename_doc", { doctype: b, old_name: m, new_name: E, merge: y }).then(function(T) {
              return T.data;
            }).catch(function(T) {
              var w, X, z;
              throw s(s({}, T.response.data), { httpStatus: T.response.status, httpStatusText: T.response.statusText, message: (w = T.response.data.message) !== null && w !== void 0 ? w : "There was an error while renaming the document.", exception: (z = (X = T.response.data.exception) !== null && X !== void 0 ? X : T.response.data.exc_type) !== null && z !== void 0 ? z : "" });
            })];
          });
        });
      }, g.prototype.getValue = function(b, m, E, y, h, T) {
        return y === void 0 && (y = true), h === void 0 && (h = false), T === void 0 && (T = null), i(this, void 0, void 0, function() {
          var w;
          return c(this, function(X) {
            return w = { doctype: b, fieldname: "[]", filters: [], as_dict: y, debug: h, parent: null }, m && (w.fieldname = typeof m == "object" ? JSON.stringify(m) : m), E && (w.filters = E ? JSON.stringify(E) : void 0), T && (w.parent = T), [2, this.axios.get("/api/method/frappe.client.get_value", { params: w }).then(function(z) {
              return z.data;
            }).catch(function(z) {
              var j, K;
              throw s(s({}, z.response.data), { httpStatus: z.response.status, httpStatusText: z.response.statusText, message: "There was an error while getting the value.", exception: (K = (j = z.response.data.exception) !== null && j !== void 0 ? j : z.response.data.exc_type) !== null && K !== void 0 ? K : "" });
            })];
          });
        });
      }, g.prototype.setValue = function(b, m, E, y) {
        return i(this, void 0, void 0, function() {
          return c(this, function(h) {
            return E !== null && typeof E == "object" && !Array.isArray(E) && (y = void 0), [2, this.axios.post("/api/method/frappe.client.set_value", { doctype: b, name: m, fieldname: E, value: y }).then(function(T) {
              return T.data;
            }).catch(function(T) {
              var w, X;
              throw s(s({}, T.response.data), { httpStatus: T.response.status, httpStatusText: T.response.statusText, message: "There was an error while setting the value.", exception: (X = (w = T.response.data.exception) !== null && w !== void 0 ? w : T.response.data.exc_type) !== null && X !== void 0 ? X : "" });
            })];
          });
        });
      }, g.prototype.getSingleValue = function(b, m) {
        return i(this, void 0, void 0, function() {
          var E;
          return c(this, function(y) {
            return E = { doctype: b, field: m }, [2, this.axios.get("/api/method/frappe.client.get_single_value", { params: E }).then(function(h) {
              return h.data;
            }).catch(function(h) {
              var T, w;
              throw s(s({}, h.response.data), { httpStatus: h.response.status, httpStatusText: h.response.statusText, message: "There was an error while getting the value of single doctype.", exception: (w = (T = h.response.data.exception) !== null && T !== void 0 ? T : h.response.data.exc_type) !== null && w !== void 0 ? w : "" });
            })];
          });
        });
      }, g.prototype.submit = function(b) {
        return i(this, void 0, void 0, function() {
          return c(this, function(m) {
            return [2, this.axios.post("/api/method/frappe.client.submit", { doc: b }).then(function(E) {
              return E.data.message;
            }).catch(function(E) {
              var y, h;
              throw s(s({}, E.response.data), { httpStatus: E.response.status, httpStatusText: E.response.statusText, message: "There was an error while submitting the document.", exception: (h = (y = E.response.data.exception) !== null && y !== void 0 ? y : E.response.data.exc_type) !== null && h !== void 0 ? h : "" });
            })];
          });
        });
      }, g.prototype.cancel = function(b, m) {
        return i(this, void 0, void 0, function() {
          return c(this, function(E) {
            return [2, this.axios.post("/api/method/frappe.client.cancel", { doctype: b, name: m }).then(function(y) {
              return y.data;
            }).catch(function(y) {
              var h, T;
              throw s(s({}, y.response.data), { httpStatus: y.response.status, httpStatusText: y.response.statusText, message: "There was an error while cancelling the document.", exception: (T = (h = y.response.data.exception) !== null && h !== void 0 ? h : y.response.data.exc_type) !== null && T !== void 0 ? T : "" });
            })];
          });
        });
      }, g;
    }();
    return bn.FrappeDB = o, bn;
  }
  var Sn = {};
  var fa = {};
  var Br;
  var Jp;
  function P0() {
    if (Jp)
      return Br;
    Jp = 1;
    function s(f, d) {
      return function() {
        return f.apply(d, arguments);
      };
    }
    const { toString: i } = Object.prototype, { getPrototypeOf: c } = Object, { iterator: o, toStringTag: g } = Symbol, b = ((f) => (d) => {
      const v = i.call(d);
      return f[v] || (f[v] = v.slice(8, -1).toLowerCase());
    })(/* @__PURE__ */ Object.create(null)), m = (f) => (f = f.toLowerCase(), (d) => b(d) === f), E = (f) => (d) => typeof d === f, { isArray: y } = Array, h = E("undefined");
    function T(f) {
      return f !== null && !h(f) && f.constructor !== null && !h(f.constructor) && j(f.constructor.isBuffer) && f.constructor.isBuffer(f);
    }
    const w = m("ArrayBuffer");
    function X(f) {
      let d;
      return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? d = ArrayBuffer.isView(f) : d = f && f.buffer && w(f.buffer), d;
    }
    const z = E("string"), j = E("function"), K = E("number"), it = (f) => f !== null && typeof f == "object", yt = (f) => f === true || f === false, Dt = (f) => {
      if (b(f) !== "object")
        return false;
      const d = c(f);
      return (d === null || d === Object.prototype || Object.getPrototypeOf(d) === null) && !(g in f) && !(o in f);
    }, ht = (f) => {
      if (!it(f) || T(f))
        return false;
      try {
        return Object.keys(f).length === 0 && Object.getPrototypeOf(f) === Object.prototype;
      } catch (d) {
        return false;
      }
    }, _t = m("Date"), At = m("File"), Lt = m("Blob"), ct = m("FileList"), ue = (f) => it(f) && j(f.pipe), Ee = (f) => {
      let d;
      return f && (typeof FormData == "function" && f instanceof FormData || j(f.append) && ((d = b(f)) === "formdata" || d === "object" && j(f.toString) && f.toString() === "[object FormData]"));
    }, hn = m("URLSearchParams"), [Te, ie, _e, Ft] = ["ReadableStream", "Request", "Response", "Headers"].map(m), je = (f) => f.trim ? f.trim() : f.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    function H(f, d, { allOwnKeys: v = false } = {}) {
      if (f === null || typeof f > "u")
        return;
      let S, A;
      if (typeof f != "object" && (f = [f]), y(f))
        for (S = 0, A = f.length; S < A; S++)
          d.call(null, f[S], S, f);
      else {
        if (T(f))
          return;
        const D = v ? Object.getOwnPropertyNames(f) : Object.keys(f), C = D.length;
        let V;
        for (S = 0; S < C; S++)
          V = D[S], d.call(null, f[V], V, f);
      }
    }
    function F(f, d) {
      if (T(f))
        return null;
      d = d.toLowerCase();
      const v = Object.keys(f);
      let S = v.length, A;
      for (; S-- > 0; )
        if (A = v[S], d === A.toLowerCase())
          return A;
      return null;
    }
    const nt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : $0, wt = (f) => !h(f) && f !== nt;
    function Ut() {
      const { caseless: f, skipUndefined: d } = wt(this) && this || {}, v = {}, S = (A, D) => {
        const C = f && F(v, D) || D;
        Dt(v[C]) && Dt(A) ? v[C] = Ut(v[C], A) : Dt(A) ? v[C] = Ut({}, A) : y(A) ? v[C] = A.slice() : (!d || !h(A)) && (v[C] = A);
      };
      for (let A = 0, D = arguments.length; A < D; A++)
        arguments[A] && H(arguments[A], S);
      return v;
    }
    const R = (f, d, v, { allOwnKeys: S } = {}) => (H(d, (A, D) => {
      v && j(A) ? f[D] = s(A, v) : f[D] = A;
    }, { allOwnKeys: S }), f), Q = (f) => (f.charCodeAt(0) === 65279 && (f = f.slice(1)), f), W = (f, d, v, S) => {
      f.prototype = Object.create(d.prototype, S), f.prototype.constructor = f, Object.defineProperty(f, "super", { value: d.prototype }), v && Object.assign(f.prototype, v);
    }, I = (f, d, v, S) => {
      let A, D, C;
      const V = {};
      if (d = d || {}, f == null)
        return d;
      do {
        for (A = Object.getOwnPropertyNames(f), D = A.length; D-- > 0; )
          C = A[D], (!S || S(C, f, d)) && !V[C] && (d[C] = f[C], V[C] = true);
        f = v !== false && c(f);
      } while (f && (!v || v(f, d)) && f !== Object.prototype);
      return d;
    }, ot = (f, d, v) => {
      f = String(f), (v === void 0 || v > f.length) && (v = f.length), v -= d.length;
      const S = f.indexOf(d, v);
      return S !== -1 && S === v;
    }, mt = (f) => {
      if (!f)
        return null;
      if (y(f))
        return f;
      let d = f.length;
      if (!K(d))
        return null;
      const v = new Array(d);
      for (; d-- > 0; )
        v[d] = f[d];
      return v;
    }, Ot = ((f) => (d) => f && d instanceof f)(typeof Uint8Array < "u" && c(Uint8Array)), pe = (f, d) => {
      const v = (f && f[o]).call(f);
      let S;
      for (; (S = v.next()) && !S.done; ) {
        const A = S.value;
        d.call(f, A[0], A[1]);
      }
    }, Zt = (f, d) => {
      let v;
      const S = [];
      for (; (v = f.exec(d)) !== null; )
        S.push(v);
      return S;
    }, Va = m("HTMLFormElement"), _l = (f) => f.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(d, v, S) {
      return v.toUpperCase() + S;
    }), Al = (({ hasOwnProperty: f }) => (d, v) => f.call(d, v))(Object.prototype), Ci = m("RegExp"), On = (f, d) => {
      const v = Object.getOwnPropertyDescriptors(f), S = {};
      H(v, (A, D) => {
        let C;
        (C = d(A, D, f)) !== false && (S[D] = C || A);
      }), Object.defineProperties(f, S);
    }, Eu = (f) => {
      On(f, (d, v) => {
        if (j(f) && ["arguments", "caller", "callee"].indexOf(v) !== -1)
          return false;
        const S = f[v];
        if (j(S)) {
          if (d.enumerable = false, "writable" in d) {
            d.writable = false;
            return;
          }
          d.set || (d.set = () => {
            throw Error("Can not rewrite read-only method '" + v + "'");
          });
        }
      });
    }, Tu = (f, d) => {
      const v = {}, S = (A) => {
        A.forEach((D) => {
          v[D] = true;
        });
      };
      return y(f) ? S(f) : S(String(f).split(d)), v;
    }, Sc = () => {
    }, Di = (f, d) => f != null && Number.isFinite(f = +f) ? f : d;
    function _u(f) {
      return !!(f && j(f.append) && f[g] === "FormData" && f[o]);
    }
    const Au = (f) => {
      const d = new Array(10), v = (S, A) => {
        if (it(S)) {
          if (d.indexOf(S) >= 0)
            return;
          if (T(S))
            return S;
          if (!("toJSON" in S)) {
            d[A] = S;
            const D = y(S) ? [] : {};
            return H(S, (C, V) => {
              const tt = v(C, A + 1);
              !h(tt) && (D[V] = tt);
            }), d[A] = void 0, D;
          }
        }
        return S;
      };
      return v(f, 0);
    }, Ou = m("AsyncFunction"), Ec = (f) => f && (it(f) || j(f)) && j(f.then) && j(f.catch), xi = ((f, d) => f ? setImmediate : d ? ((v, S) => (nt.addEventListener("message", ({ source: A, data: D }) => {
      A === nt && D === v && S.length && S.shift()();
    }, false), (A) => {
      S.push(A), nt.postMessage(v, "*");
    }))(`axios@${Math.random()}`, []) : (v) => setTimeout(v))(typeof setImmediate == "function", j(nt.postMessage)), Ae = typeof queueMicrotask < "u" ? queueMicrotask.bind(nt) : typeof process < "u" && process.nextTick || xi;
    var B = { isArray: y, isArrayBuffer: w, isBuffer: T, isFormData: Ee, isArrayBufferView: X, isString: z, isNumber: K, isBoolean: yt, isObject: it, isPlainObject: Dt, isEmptyObject: ht, isReadableStream: Te, isRequest: ie, isResponse: _e, isHeaders: Ft, isUndefined: h, isDate: _t, isFile: At, isBlob: Lt, isRegExp: Ci, isFunction: j, isStream: ue, isURLSearchParams: hn, isTypedArray: Ot, isFileList: ct, forEach: H, merge: Ut, extend: R, trim: je, stripBOM: Q, inherits: W, toFlatObject: I, kindOf: b, kindOfTest: m, endsWith: ot, toArray: mt, forEachEntry: pe, matchAll: Zt, isHTMLForm: Va, hasOwnProperty: Al, hasOwnProp: Al, reduceDescriptors: On, freezeMethods: Eu, toObjectSet: Tu, toCamelCase: _l, noop: Sc, toFiniteNumber: Di, findKey: F, global: nt, isContextDefined: wt, isSpecCompliantForm: _u, toJSONObject: Au, isAsyncFn: Ou, isThenable: Ec, setImmediate: xi, asap: Ae, isIterable: (f) => f != null && j(f[o]) };
    function st(f, d, v, S, A) {
      Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = f, this.name = "AxiosError", d && (this.code = d), v && (this.config = v), S && (this.request = S), A && (this.response = A, this.status = A.status ? A.status : null);
    }
    B.inherits(st, Error, { toJSON: function() {
      return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: B.toJSONObject(this.config), code: this.code, status: this.status };
    } });
    const Ru = st.prototype, Za = {};
    ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((f) => {
      Za[f] = { value: f };
    }), Object.defineProperties(st, Za), Object.defineProperty(Ru, "isAxiosError", { value: true }), st.from = (f, d, v, S, A, D) => {
      const C = Object.create(Ru);
      B.toFlatObject(f, C, function(Z) {
        return Z !== Error.prototype;
      }, (Z) => Z !== "isAxiosError");
      const V = f && f.message ? f.message : "Error", tt = d == null && f ? f.code : d;
      return st.call(C, V, tt, v, S, A), f && C.cause == null && Object.defineProperty(C, "cause", { value: f, configurable: true }), C.name = f && f.name || "Error", D && Object.assign(C, D), C;
    };
    var Tc = null;
    function Ol(f) {
      return B.isPlainObject(f) || B.isArray(f);
    }
    function Mi(f) {
      return B.endsWith(f, "[]") ? f.slice(0, -2) : f;
    }
    function Ni(f, d, v) {
      return f ? f.concat(d).map(function(S, A) {
        return S = Mi(S), !v && A ? "[" + S + "]" : S;
      }).join(v ? "." : "") : d;
    }
    function Ka(f) {
      return B.isArray(f) && !f.some(Ol);
    }
    const Oe = B.toFlatObject(B, {}, null, function(f) {
      return /^is[A-Z]/.test(f);
    });
    function qe(f, d, v) {
      if (!B.isObject(f))
        throw new TypeError("target must be an object");
      d = d || new FormData(), v = B.toFlatObject(v, { metaTokens: true, dots: false, indexes: false }, false, function(rt, k) {
        return !B.isUndefined(k[rt]);
      });
      const S = v.metaTokens, A = v.visitor || Z, D = v.dots, C = v.indexes, V = (v.Blob || typeof Blob < "u" && Blob) && B.isSpecCompliantForm(d);
      if (!B.isFunction(A))
        throw new TypeError("visitor must be a function");
      function tt(rt) {
        if (rt === null)
          return "";
        if (B.isDate(rt))
          return rt.toISOString();
        if (B.isBoolean(rt))
          return rt.toString();
        if (!V && B.isBlob(rt))
          throw new st("Blob is not supported. Use a Buffer instead.");
        return B.isArrayBuffer(rt) || B.isTypedArray(rt) ? V && typeof Blob == "function" ? new Blob([rt]) : Buffer.from(rt) : rt;
      }
      function Z(rt, k, $) {
        let Xt = rt;
        if (rt && !$ && typeof rt == "object") {
          if (B.endsWith(k, "{}"))
            k = S ? k : k.slice(0, -2), rt = JSON.stringify(rt);
          else if (B.isArray(rt) && Ka(rt) || (B.isFileList(rt) || B.endsWith(k, "[]")) && (Xt = B.toArray(rt)))
            return k = Mi(k), Xt.forEach(function(he, Wt) {
              !(B.isUndefined(he) || he === null) && d.append(C === true ? Ni([k], Wt, D) : C === null ? k : k + "[]", tt(he));
            }), false;
        }
        return Ol(rt) ? true : (d.append(Ni($, k, D), tt(rt)), false);
      }
      const J = [], ut = Object.assign(Oe, { defaultVisitor: Z, convertValue: tt, isVisitable: Ol });
      function Nt(rt, k) {
        if (!B.isUndefined(rt)) {
          if (J.indexOf(rt) !== -1)
            throw Error("Circular reference detected in " + k.join("."));
          J.push(rt), B.forEach(rt, function($, Xt) {
            (!(B.isUndefined($) || $ === null) && A.call(d, $, B.isString(Xt) ? Xt.trim() : Xt, k, ut)) === true && Nt($, k ? k.concat(Xt) : [Xt]);
          }), J.pop();
        }
      }
      if (!B.isObject(f))
        throw new TypeError("data must be an object");
      return Nt(f), d;
    }
    function be(f) {
      const d = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
      return encodeURIComponent(f).replace(/[!'()~]|%20|%00/g, function(v) {
        return d[v];
      });
    }
    function zu(f, d) {
      this._pairs = [], f && qe(f, this, d);
    }
    const Bi = zu.prototype;
    Bi.append = function(f, d) {
      this._pairs.push([f, d]);
    }, Bi.toString = function(f) {
      const d = f ? function(v) {
        return f.call(this, v, be);
      } : be;
      return this._pairs.map(function(v) {
        return d(v[0]) + "=" + d(v[1]);
      }, "").join("&");
    };
    function _c(f) {
      return encodeURIComponent(f).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
    }
    function Ja(f, d, v) {
      if (!d)
        return f;
      const S = v && v.encode || _c;
      B.isFunction(v) && (v = { serialize: v });
      const A = v && v.serialize;
      let D;
      if (A ? D = A(d, v) : D = B.isURLSearchParams(d) ? d.toString() : new zu(d, v).toString(S), D) {
        const C = f.indexOf("#");
        C !== -1 && (f = f.slice(0, C)), f += (f.indexOf("?") === -1 ? "?" : "&") + D;
      }
      return f;
    }
    class Rl {
      constructor() {
        this.handlers = [];
      }
      use(d, v, S) {
        return this.handlers.push({ fulfilled: d, rejected: v, synchronous: S ? S.synchronous : false, runWhen: S ? S.runWhen : null }), this.handlers.length - 1;
      }
      eject(d) {
        this.handlers[d] && (this.handlers[d] = null);
      }
      clear() {
        this.handlers && (this.handlers = []);
      }
      forEach(d) {
        B.forEach(this.handlers, function(v) {
          v !== null && d(v);
        });
      }
    }
    var ka = Rl, Rn = { silentJSONParsing: true, forcedJSONParsing: true, clarifyTimeoutError: false }, zl = typeof URLSearchParams < "u" ? URLSearchParams : zu, Fa = typeof FormData < "u" ? FormData : null, Ac = typeof Blob < "u" ? Blob : null, ji = { isBrowser: true, classes: { URLSearchParams: zl, FormData: Fa, Blob: Ac }, protocols: ["http", "https", "file", "blob", "url", "data"] };
    const Wa = typeof window < "u" && typeof document < "u", Yn = typeof navigator == "object" && navigator || void 0, Oc = Wa && (!Yn || ["ReactNative", "NativeScript", "NS"].indexOf(Yn.product) < 0), qi = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Hi = Wa && window.location.href || "http://localhost";
    var Li = Object.freeze({ __proto__: null, hasBrowserEnv: Wa, hasStandardBrowserWebWorkerEnv: qi, hasStandardBrowserEnv: Oc, navigator: Yn, origin: Hi }), It = rn(rn({}, Li), ji);
    function wu(f, d) {
      return qe(f, new It.classes.URLSearchParams(), rn({ visitor: function(v, S, A, D) {
        return It.isNode && B.isBuffer(v) ? (this.append(S, v.toString("base64")), false) : D.defaultVisitor.apply(this, arguments);
      } }, d));
    }
    function Yi(f) {
      return B.matchAll(/\w+|\[(\w*)]/g, f).map((d) => d[0] === "[]" ? "" : d[1] || d[0]);
    }
    function Xi(f) {
      const d = {}, v = Object.keys(f);
      let S;
      const A = v.length;
      let D;
      for (S = 0; S < A; S++)
        D = v[S], d[D] = f[D];
      return d;
    }
    function dn(f) {
      function d(v, S, A, D) {
        let C = v[D++];
        if (C === "__proto__")
          return true;
        const V = Number.isFinite(+C), tt = D >= v.length;
        return C = !C && B.isArray(A) ? A.length : C, tt ? (B.hasOwnProp(A, C) ? A[C] = [A[C], S] : A[C] = S, !V) : ((!A[C] || !B.isObject(A[C])) && (A[C] = []), d(v, S, A[C], D) && B.isArray(A[C]) && (A[C] = Xi(A[C])), !V);
      }
      if (B.isFormData(f) && B.isFunction(f.entries)) {
        const v = {};
        return B.forEachEntry(f, (S, A) => {
          d(Yi(S), A, v, 0);
        }), v;
      }
      return null;
    }
    function se(f, d, v) {
      if (B.isString(f))
        try {
          return (d || JSON.parse)(f), B.trim(f);
        } catch (S) {
          if (S.name !== "SyntaxError")
            throw S;
        }
      return (v || JSON.stringify)(f);
    }
    const re = { transitional: Rn, adapter: ["xhr", "http", "fetch"], transformRequest: [function(f, d) {
      const v = d.getContentType() || "", S = v.indexOf("application/json") > -1, A = B.isObject(f);
      if (A && B.isHTMLForm(f) && (f = new FormData(f)), B.isFormData(f))
        return S ? JSON.stringify(dn(f)) : f;
      if (B.isArrayBuffer(f) || B.isBuffer(f) || B.isStream(f) || B.isFile(f) || B.isBlob(f) || B.isReadableStream(f))
        return f;
      if (B.isArrayBufferView(f))
        return f.buffer;
      if (B.isURLSearchParams(f))
        return d.setContentType("application/x-www-form-urlencoded;charset=utf-8", false), f.toString();
      let D;
      if (A) {
        if (v.indexOf("application/x-www-form-urlencoded") > -1)
          return wu(f, this.formSerializer).toString();
        if ((D = B.isFileList(f)) || v.indexOf("multipart/form-data") > -1) {
          const C = this.env && this.env.FormData;
          return qe(D ? { "files[]": f } : f, C && new C(), this.formSerializer);
        }
      }
      return A || S ? (d.setContentType("application/json", false), se(f)) : f;
    }], transformResponse: [function(f) {
      const d = this.transitional || re.transitional, v = d && d.forcedJSONParsing, S = this.responseType === "json";
      if (B.isResponse(f) || B.isReadableStream(f))
        return f;
      if (f && B.isString(f) && (v && !this.responseType || S)) {
        const A = !(d && d.silentJSONParsing) && S;
        try {
          return JSON.parse(f, this.parseReviver);
        } catch (D) {
          if (A)
            throw D.name === "SyntaxError" ? st.from(D, st.ERR_BAD_RESPONSE, this, null, this.response) : D;
        }
      }
      return f;
    }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, env: { FormData: It.classes.FormData, Blob: It.classes.Blob }, validateStatus: function(f) {
      return f >= 200 && f < 300;
    }, headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } } };
    B.forEach(["delete", "get", "head", "post", "put", "patch"], (f) => {
      re.headers[f] = {};
    });
    var zn = re;
    const Uu = B.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);
    var Rc = (f) => {
      const d = {};
      let v, S, A;
      return f && f.split(`
`).forEach(function(D) {
        A = D.indexOf(":"), v = D.substring(0, A).trim().toLowerCase(), S = D.substring(A + 1).trim(), !(!v || d[v] && Uu[v]) && (v === "set-cookie" ? d[v] ? d[v].push(S) : d[v] = [S] : d[v] = d[v] ? d[v] + ", " + S : S);
      }), d;
    };
    const Gi = Symbol("internals");
    function ha(f) {
      return f && String(f).trim().toLowerCase();
    }
    function wn(f) {
      return f === false || f == null ? f : B.isArray(f) ? f.map(wn) : String(f);
    }
    function Cu(f) {
      const d = /* @__PURE__ */ Object.create(null), v = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
      let S;
      for (; S = v.exec(f); )
        d[S[1]] = S[2];
      return d;
    }
    const da = (f) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(f.trim());
    function Un(f, d, v, S, A) {
      if (B.isFunction(S))
        return S.call(this, d, v);
      if (A && (d = v), !!B.isString(d)) {
        if (B.isString(S))
          return d.indexOf(S) !== -1;
        if (B.isRegExp(S))
          return S.test(d);
      }
    }
    function $a(f) {
      return f.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (d, v, S) => v.toUpperCase() + S);
    }
    function pa(f, d) {
      const v = B.toCamelCase(" " + d);
      ["get", "set", "has"].forEach((S) => {
        Object.defineProperty(f, S + v, { value: function(A, D, C) {
          return this[S].call(this, d, A, D, C);
        }, configurable: true });
      });
    }
    class Kt {
      constructor(d) {
        d && this.set(d);
      }
      set(d, v, S) {
        const A = this;
        function D(V, tt, Z) {
          const J = ha(tt);
          if (!J)
            throw new Error("header name must be a non-empty string");
          const ut = B.findKey(A, J);
          (!ut || A[ut] === void 0 || Z === true || Z === void 0 && A[ut] !== false) && (A[ut || tt] = wn(V));
        }
        const C = (V, tt) => B.forEach(V, (Z, J) => D(Z, J, tt));
        if (B.isPlainObject(d) || d instanceof this.constructor)
          C(d, v);
        else if (B.isString(d) && (d = d.trim()) && !da(d))
          C(Rc(d), v);
        else if (B.isObject(d) && B.isIterable(d)) {
          let V = {}, tt, Z;
          for (const J of d) {
            if (!B.isArray(J))
              throw TypeError("Object iterator must return a key-value pair");
            V[Z = J[0]] = (tt = V[Z]) ? B.isArray(tt) ? [...tt, J[1]] : [tt, J[1]] : J[1];
          }
          C(V, v);
        } else
          d != null && D(v, d, S);
        return this;
      }
      get(d, v) {
        if (d = ha(d), d) {
          const S = B.findKey(this, d);
          if (S) {
            const A = this[S];
            if (!v)
              return A;
            if (v === true)
              return Cu(A);
            if (B.isFunction(v))
              return v.call(this, A, S);
            if (B.isRegExp(v))
              return v.exec(A);
            throw new TypeError("parser must be boolean|regexp|function");
          }
        }
      }
      has(d, v) {
        if (d = ha(d), d) {
          const S = B.findKey(this, d);
          return !!(S && this[S] !== void 0 && (!v || Un(this, this[S], S, v)));
        }
        return false;
      }
      delete(d, v) {
        const S = this;
        let A = false;
        function D(C) {
          if (C = ha(C), C) {
            const V = B.findKey(S, C);
            V && (!v || Un(S, S[V], V, v)) && (delete S[V], A = true);
          }
        }
        return B.isArray(d) ? d.forEach(D) : D(d), A;
      }
      clear(d) {
        const v = Object.keys(this);
        let S = v.length, A = false;
        for (; S--; ) {
          const D = v[S];
          (!d || Un(this, this[D], D, d, true)) && (delete this[D], A = true);
        }
        return A;
      }
      normalize(d) {
        const v = this, S = {};
        return B.forEach(this, (A, D) => {
          const C = B.findKey(S, D);
          if (C) {
            v[C] = wn(A), delete v[D];
            return;
          }
          const V = d ? $a(D) : String(D).trim();
          V !== D && delete v[D], v[V] = wn(A), S[V] = true;
        }), this;
      }
      concat(...d) {
        return this.constructor.concat(this, ...d);
      }
      toJSON(d) {
        const v = /* @__PURE__ */ Object.create(null);
        return B.forEach(this, (S, A) => {
          S != null && S !== false && (v[A] = d && B.isArray(S) ? S.join(", ") : S);
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
        const S = new this(d);
        return v.forEach((A) => S.set(A)), S;
      }
      static accessor(d) {
        const v = (this[Gi] = this[Gi] = { accessors: {} }).accessors, S = this.prototype;
        function A(D) {
          const C = ha(D);
          v[C] || (pa(S, D), v[C] = true);
        }
        return B.isArray(d) ? d.forEach(A) : A(d), this;
      }
    }
    Kt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), B.reduceDescriptors(Kt.prototype, ({ value: f }, d) => {
      let v = d[0].toUpperCase() + d.slice(1);
      return { get: () => f, set(S) {
        this[v] = S;
      } };
    }), B.freezeMethods(Kt);
    var we = Kt;
    function wl(f, d) {
      const v = this || zn, S = d || v, A = we.from(S.headers);
      let D = S.data;
      return B.forEach(f, function(C) {
        D = C.call(v, D, A.normalize(), d ? d.status : void 0);
      }), A.normalize(), D;
    }
    function Cn(f) {
      return !!(f && f.__CANCEL__);
    }
    function He(f, d, v) {
      st.call(this, f != null ? f : "canceled", st.ERR_CANCELED, d, v), this.name = "CanceledError";
    }
    B.inherits(He, st, { __CANCEL__: true });
    function Qi(f, d, v) {
      const S = v.config.validateStatus;
      !v.status || !S || S(v.status) ? f(v) : d(new st("Request failed with status code " + v.status, [st.ERR_BAD_REQUEST, st.ERR_BAD_RESPONSE][Math.floor(v.status / 100) - 4], v.config, v.request, v));
    }
    function Vi(f) {
      const d = /^([-+\w]{1,25})(:?\/\/|:)/.exec(f);
      return d && d[1] || "";
    }
    function Zi(f, d) {
      f = f || 10;
      const v = new Array(f), S = new Array(f);
      let A = 0, D = 0, C;
      return d = d !== void 0 ? d : 1e3, function(V) {
        const tt = Date.now(), Z = S[D];
        C || (C = tt), v[A] = V, S[A] = tt;
        let J = D, ut = 0;
        for (; J !== A; )
          ut += v[J++], J = J % f;
        if (A = (A + 1) % f, A === D && (D = (D + 1) % f), tt - C < d)
          return;
        const Nt = Z && tt - Z;
        return Nt ? Math.round(ut * 1e3 / Nt) : void 0;
      };
    }
    function zc(f, d) {
      let v = 0, S = 1e3 / d, A, D;
      const C = (V, tt = Date.now()) => {
        v = tt, A = null, D && (clearTimeout(D), D = null), f(...V);
      };
      return [(...V) => {
        const tt = Date.now(), Z = tt - v;
        Z >= S ? C(V, tt) : (A = V, D || (D = setTimeout(() => {
          D = null, C(A);
        }, S - Z)));
      }, () => A && C(A)];
    }
    const Xn = (f, d, v = 3) => {
      let S = 0;
      const A = Zi(50, 250);
      return zc((D) => {
        const C = D.loaded, V = D.lengthComputable ? D.total : void 0, tt = C - S, Z = A(tt), J = C <= V;
        S = C;
        const ut = { loaded: C, total: V, progress: V ? C / V : void 0, bytes: tt, rate: Z || void 0, estimated: Z && V && J ? (V - C) / Z : void 0, event: D, lengthComputable: V != null, [d ? "download" : "upload"]: true };
        f(ut);
      }, v);
    }, Pa = (f, d) => {
      const v = f != null;
      return [(S) => d[0]({ lengthComputable: v, total: f, loaded: S }), d[1]];
    }, ke = (f) => (...d) => B.asap(() => f(...d));
    var Ue = It.hasStandardBrowserEnv ? ((f, d) => (v) => (v = new URL(v, It.origin), f.protocol === v.protocol && f.host === v.host && (d || f.port === v.port)))(new URL(It.origin), It.navigator && /(msie|trident)/i.test(It.navigator.userAgent)) : () => true, Ki = It.hasStandardBrowserEnv ? { write(f, d, v, S, A, D) {
      const C = [f + "=" + encodeURIComponent(d)];
      B.isNumber(v) && C.push("expires=" + new Date(v).toGMTString()), B.isString(S) && C.push("path=" + S), B.isString(A) && C.push("domain=" + A), D === true && C.push("secure"), document.cookie = C.join("; ");
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
    function wc(f) {
      return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(f);
    }
    function Du(f, d) {
      return d ? f.replace(/\/?\/$/, "") + "/" + d.replace(/^\/+/, "") : f;
    }
    function xu(f, d, v) {
      let S = !wc(d);
      return f && (S || v == false) ? Du(f, d) : d;
    }
    const Ia = (f) => f instanceof we ? rn({}, f) : f;
    function Gn(f, d) {
      d = d || {};
      const v = {};
      function S(Z, J, ut, Nt) {
        return B.isPlainObject(Z) && B.isPlainObject(J) ? B.merge.call({ caseless: Nt }, Z, J) : B.isPlainObject(J) ? B.merge({}, J) : B.isArray(J) ? J.slice() : J;
      }
      function A(Z, J, ut, Nt) {
        if (B.isUndefined(J)) {
          if (!B.isUndefined(Z))
            return S(void 0, Z, ut, Nt);
        } else
          return S(Z, J, ut, Nt);
      }
      function D(Z, J) {
        if (!B.isUndefined(J))
          return S(void 0, J);
      }
      function C(Z, J) {
        if (B.isUndefined(J)) {
          if (!B.isUndefined(Z))
            return S(void 0, Z);
        } else
          return S(void 0, J);
      }
      function V(Z, J, ut) {
        if (ut in d)
          return S(Z, J);
        if (ut in f)
          return S(void 0, Z);
      }
      const tt = { url: D, method: D, data: D, baseURL: C, transformRequest: C, transformResponse: C, paramsSerializer: C, timeout: C, timeoutMessage: C, withCredentials: C, withXSRFToken: C, adapter: C, responseType: C, xsrfCookieName: C, xsrfHeaderName: C, onUploadProgress: C, onDownloadProgress: C, decompress: C, maxContentLength: C, maxBodyLength: C, beforeRedirect: C, transport: C, httpAgent: C, httpsAgent: C, cancelToken: C, socketPath: C, responseEncoding: C, validateStatus: V, headers: (Z, J, ut) => A(Ia(Z), Ia(J), ut, true) };
      return B.forEach(Object.keys(rn(rn({}, f), d)), function(Z) {
        const J = tt[Z] || A, ut = J(f[Z], d[Z], Z);
        B.isUndefined(ut) && J !== V || (v[Z] = ut);
      }), v;
    }
    var Re = (f) => {
      const d = Gn({}, f);
      let { data: v, withXSRFToken: S, xsrfHeaderName: A, xsrfCookieName: D, headers: C, auth: V } = d;
      if (d.headers = C = we.from(C), d.url = Ja(xu(d.baseURL, d.url, d.allowAbsoluteUrls), f.params, f.paramsSerializer), V && C.set("Authorization", "Basic " + btoa((V.username || "") + ":" + (V.password ? unescape(encodeURIComponent(V.password)) : ""))), B.isFormData(v)) {
        if (It.hasStandardBrowserEnv || It.hasStandardBrowserWebWorkerEnv)
          C.setContentType(void 0);
        else if (B.isFunction(v.getHeaders)) {
          const tt = v.getHeaders(), Z = ["content-type", "content-length"];
          Object.entries(tt).forEach(([J, ut]) => {
            Z.includes(J.toLowerCase()) && C.set(J, ut);
          });
        }
      }
      if (It.hasStandardBrowserEnv && (S && B.isFunction(S) && (S = S(d)), S || S !== false && Ue(d.url))) {
        const tt = A && D && Ki.read(D);
        tt && C.set(A, tt);
      }
      return d;
    }, Mu = typeof XMLHttpRequest < "u" && function(f) {
      return new Promise(function(d, v) {
        const S = Re(f);
        let A = S.data;
        const D = we.from(S.headers).normalize();
        let { responseType: C, onUploadProgress: V, onDownloadProgress: tt } = S, Z, J, ut, Nt, rt;
        function k() {
          Nt && Nt(), rt && rt(), S.cancelToken && S.cancelToken.unsubscribe(Z), S.signal && S.signal.removeEventListener("abort", Z);
        }
        let $ = new XMLHttpRequest();
        $.open(S.method.toUpperCase(), S.url, true), $.timeout = S.timeout;
        function Xt() {
          if (!$)
            return;
          const Wt = we.from("getAllResponseHeaders" in $ && $.getAllResponseHeaders()), $e = { data: !C || C === "text" || C === "json" ? $.responseText : $.response, status: $.status, statusText: $.statusText, headers: Wt, config: f, request: $ };
          Qi(function(Pe) {
            d(Pe), k();
          }, function(Pe) {
            v(Pe), k();
          }, $e), $ = null;
        }
        "onloadend" in $ ? $.onloadend = Xt : $.onreadystatechange = function() {
          !$ || $.readyState !== 4 || $.status === 0 && !($.responseURL && $.responseURL.indexOf("file:") === 0) || setTimeout(Xt);
        }, $.onabort = function() {
          $ && (v(new st("Request aborted", st.ECONNABORTED, f, $)), $ = null);
        }, $.onerror = function(Wt) {
          const $e = Wt && Wt.message ? Wt.message : "Network Error", Pe = new st($e, st.ERR_NETWORK, f, $);
          Pe.event = Wt || null, v(Pe), $ = null;
        }, $.ontimeout = function() {
          let Wt = S.timeout ? "timeout of " + S.timeout + "ms exceeded" : "timeout exceeded";
          const $e = S.transitional || Rn;
          S.timeoutErrorMessage && (Wt = S.timeoutErrorMessage), v(new st(Wt, $e.clarifyTimeoutError ? st.ETIMEDOUT : st.ECONNABORTED, f, $)), $ = null;
        }, A === void 0 && D.setContentType(null), "setRequestHeader" in $ && B.forEach(D.toJSON(), function(Wt, $e) {
          $.setRequestHeader($e, Wt);
        }), B.isUndefined(S.withCredentials) || ($.withCredentials = !!S.withCredentials), C && C !== "json" && ($.responseType = S.responseType), tt && ([ut, rt] = Xn(tt, true), $.addEventListener("progress", ut)), V && $.upload && ([J, Nt] = Xn(V), $.upload.addEventListener("progress", J), $.upload.addEventListener("loadend", Nt)), (S.cancelToken || S.signal) && (Z = (Wt) => {
          $ && (v(!Wt || Wt.type ? new He(null, f, $) : Wt), $.abort(), $ = null);
        }, S.cancelToken && S.cancelToken.subscribe(Z), S.signal && (S.signal.aborted ? Z() : S.signal.addEventListener("abort", Z)));
        const he = Vi(S.url);
        if (he && It.protocols.indexOf(he) === -1) {
          v(new st("Unsupported protocol " + he + ":", st.ERR_BAD_REQUEST, f));
          return;
        }
        $.send(A || null);
      });
    }, Ji = (f, d) => {
      const { length: v } = f = f ? f.filter(Boolean) : [];
      if (d || v) {
        let S = new AbortController(), A;
        const D = function(Z) {
          if (!A) {
            A = true, V();
            const J = Z instanceof Error ? Z : this.reason;
            S.abort(J instanceof st ? J : new He(J instanceof Error ? J.message : J));
          }
        };
        let C = d && setTimeout(() => {
          C = null, D(new st(`timeout ${d} of ms exceeded`, st.ETIMEDOUT));
        }, d);
        const V = () => {
          f && (C && clearTimeout(C), C = null, f.forEach((Z) => {
            Z.unsubscribe ? Z.unsubscribe(D) : Z.removeEventListener("abort", D);
          }), f = null);
        };
        f.forEach((Z) => Z.addEventListener("abort", D));
        const { signal: tt } = S;
        return tt.unsubscribe = () => B.asap(V), tt;
      }
    };
    const Nu = function* (f, d) {
      let v = f.byteLength;
      if (v < d) {
        yield f;
        return;
      }
      let S = 0, A;
      for (; S < v; )
        A = S + d, yield f.slice(S, A), S = A;
    }, ya = function(f, d) {
      return Rr(this, null, function* () {
        try {
          for (var v = Mp(ki(f)), S, A, D; S = !(A = yield new bl(v.next())).done; S = false) {
            const C = A.value;
            yield* zr(Nu(C, d));
          }
        } catch (A2) {
          D = [A2];
        } finally {
          try {
            S && (A = v.return) && (yield new bl(A.call(v)));
          } finally {
            if (D)
              throw D[0];
          }
        }
      });
    }, ki = function(f) {
      return Rr(this, null, function* () {
        if (f[Symbol.asyncIterator]) {
          yield* zr(f);
          return;
        }
        const d = f.getReader();
        try {
          for (; ; ) {
            const { done: v, value: S } = yield new bl(d.read());
            if (v)
              break;
            yield S;
          }
        } finally {
          yield new bl(d.cancel());
        }
      });
    }, Bu = (f, d, v, S) => {
      const A = ya(f, d);
      let D = 0, C, V = (Z) => {
        C || (C = true, S && S(Z));
      };
      return new ReadableStream({ pull(Z) {
        return ra(this, null, function* () {
          try {
            const { done: J, value: ut } = yield A.next();
            if (J) {
              V(), Z.close();
              return;
            }
            let Nt = ut.byteLength;
            if (v) {
              let rt = D += Nt;
              v(rt);
            }
            Z.enqueue(new Uint8Array(ut));
          } catch (J) {
            throw V(J), J;
          }
        });
      }, cancel(Z) {
        return V(Z), A.return();
      } }, { highWaterMark: 2 });
    }, Qn = 64 * 1024, { isFunction: Ul } = B, Fi = (({ Request: f, Response: d }) => ({ Request: f, Response: d }))(B.global), { ReadableStream: ju, TextEncoder: Cl } = B.global, Wi = (f, ...d) => {
      try {
        return !!f(...d);
      } catch (v) {
        return false;
      }
    }, Uc = (f) => {
      f = B.merge.call({ skipUndefined: true }, Fi, f);
      const { fetch: d, Request: v, Response: S } = f, A = d ? Ul(d) : typeof fetch == "function", D = Ul(v), C = Ul(S);
      if (!A)
        return false;
      const V = A && Ul(ju), tt = A && (typeof Cl == "function" ? ((k) => ($) => k.encode($))(new Cl()) : (k) => ra(null, null, function* () {
        return new Uint8Array(yield new v(k).arrayBuffer());
      })), Z = D && V && Wi(() => {
        let k = false;
        const $ = new v(It.origin, { body: new ju(), method: "POST", get duplex() {
          return k = true, "half";
        } }).headers.has("Content-Type");
        return k && !$;
      }), J = C && V && Wi(() => B.isReadableStream(new S("").body)), ut = { stream: J && ((k) => k.body) };
      A && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((k) => {
        !ut[k] && (ut[k] = ($, Xt) => {
          let he = $ && $[k];
          if (he)
            return he.call($);
          throw new st(`Response type '${k}' is not supported`, st.ERR_NOT_SUPPORT, Xt);
        });
      });
      const Nt = (k) => ra(null, null, function* () {
        if (k == null)
          return 0;
        if (B.isBlob(k))
          return k.size;
        if (B.isSpecCompliantForm(k))
          return (yield new v(It.origin, { method: "POST", body: k }).arrayBuffer()).byteLength;
        if (B.isArrayBufferView(k) || B.isArrayBuffer(k))
          return k.byteLength;
        if (B.isURLSearchParams(k) && (k = k + ""), B.isString(k))
          return (yield tt(k)).byteLength;
      }), rt = (k, $) => ra(null, null, function* () {
        const Xt = B.toFiniteNumber(k.getContentLength());
        return Xt != null ? Xt : Nt($);
      });
      return (k) => ra(null, null, function* () {
        let { url: $, method: Xt, data: he, signal: Wt, cancelToken: $e, timeout: Pe, onDownloadProgress: Lu, onUploadProgress: Pi, responseType: Mn, headers: Hl, withCredentials: Ll = "same-origin", fetchOptions: Ii } = Re(k), ts = d || fetch;
        Mn = Mn ? (Mn + "").toLowerCase() : "text";
        let Yl = Ji([Wt, $e && $e.toAbortSignal()], Pe), nl = null;
        const Jn = Yl && Yl.unsubscribe && (() => {
          Yl.unsubscribe();
        });
        let es;
        try {
          if (Pi && Z && Xt !== "get" && Xt !== "head" && (es = yield rt(Hl, he)) !== 0) {
            let pn = new v($, { method: "POST", body: he, duplex: "half" }), kn;
            if (B.isFormData(he) && (kn = pn.headers.get("content-type")) && Hl.setContentType(kn), pn.body) {
              const [Xl, al] = Pa(es, Xn(ke(Pi)));
              he = Bu(pn.body, Qn, Xl, al);
            }
          }
          B.isString(Ll) || (Ll = Ll ? "include" : "omit");
          const Ie = D && "credentials" in v.prototype, ns = Or(rn({}, Ii), { signal: Yl, method: Xt.toUpperCase(), headers: Hl.normalize().toJSON(), body: he, duplex: "half", credentials: Ie ? Ll : void 0 });
          nl = D && new v($, ns);
          let tn = yield D ? ts(nl, Ii) : ts($, ns);
          const ga = J && (Mn === "stream" || Mn === "response");
          if (J && (Lu || ga && Jn)) {
            const pn = {};
            ["status", "statusText", "headers"].forEach((Yu) => {
              pn[Yu] = tn[Yu];
            });
            const kn = B.toFiniteNumber(tn.headers.get("content-length")), [Xl, al] = Lu && Pa(kn, Xn(ke(Lu), true)) || [];
            tn = new S(Bu(tn.body, Qn, Xl, () => {
              al && al(), Jn && Jn();
            }), pn);
          }
          Mn = Mn || "text";
          let Cc = yield ut[B.findKey(ut, Mn) || "text"](tn, k);
          return !ga && Jn && Jn(), yield new Promise((pn, kn) => {
            Qi(pn, kn, { data: Cc, headers: we.from(tn.headers), status: tn.status, statusText: tn.statusText, config: k, request: nl });
          });
        } catch (Ie) {
          throw Jn && Jn(), Ie && Ie.name === "TypeError" && /Load failed|fetch/i.test(Ie.message) ? Object.assign(new st("Network Error", st.ERR_NETWORK, k, nl), { cause: Ie.cause || Ie }) : st.from(Ie, Ie && Ie.code, k, nl);
        }
      });
    }, Dl = /* @__PURE__ */ new Map(), Fe = (f) => {
      let d = f ? f.env : {};
      const { fetch: v, Request: S, Response: A } = d, D = [S, A, v];
      let C = D.length, V = C, tt, Z, J = Dl;
      for (; V--; )
        tt = D[V], Z = J.get(tt), Z === void 0 && J.set(tt, Z = V ? /* @__PURE__ */ new Map() : Uc(d)), J = Z;
      return Z;
    };
    Fe();
    const tl = { http: Tc, xhr: Mu, fetch: { get: Fe } };
    B.forEach(tl, (f, d) => {
      if (f) {
        try {
          Object.defineProperty(f, "name", { value: d });
        } catch (v) {
        }
        Object.defineProperty(f, "adapterName", { value: d });
      }
    });
    const xl = (f) => `- ${f}`, ma = (f) => B.isFunction(f) || f === null || f === false;
    var Vn = { getAdapter: (f, d) => {
      f = B.isArray(f) ? f : [f];
      const { length: v } = f;
      let S, A;
      const D = {};
      for (let C = 0; C < v; C++) {
        S = f[C];
        let V;
        if (A = S, !ma(S) && (A = tl[(V = String(S)).toLowerCase()], A === void 0))
          throw new st(`Unknown adapter '${V}'`);
        if (A && (B.isFunction(A) || (A = A.get(d))))
          break;
        D[V || "#" + C] = A;
      }
      if (!A) {
        const C = Object.entries(D).map(([tt, Z]) => `adapter ${tt} ` + (Z === false ? "is not supported by the environment" : "is not available in the build"));
        let V = v ? C.length > 1 ? `since :
` + C.map(xl).join(`
`) : " " + xl(C[0]) : "as no adapter specified";
        throw new st("There is no suitable adapter to dispatch the request " + V, "ERR_NOT_SUPPORT");
      }
      return A;
    }, adapters: tl };
    function Ml(f) {
      if (f.cancelToken && f.cancelToken.throwIfRequested(), f.signal && f.signal.aborted)
        throw new He(null, f);
    }
    function Nl(f) {
      return Ml(f), f.headers = we.from(f.headers), f.data = wl.call(f, f.transformRequest), ["post", "put", "patch"].indexOf(f.method) !== -1 && f.headers.setContentType("application/x-www-form-urlencoded", false), Vn.getAdapter(f.adapter || zn.adapter, f)(f).then(function(d) {
        return Ml(f), d.data = wl.call(f, f.transformResponse, d), d.headers = we.from(d.headers), d;
      }, function(d) {
        return Cn(d) || (Ml(f), d && d.response && (d.response.data = wl.call(f, f.transformResponse, d.response), d.response.headers = we.from(d.response.headers))), Promise.reject(d);
      });
    }
    const qu = "1.12.2", Dn = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach((f, d) => {
      Dn[f] = function(v) {
        return typeof v === f || "a" + (d < 1 ? "n " : " ") + f;
      };
    });
    const We = {};
    Dn.transitional = function(f, d, v) {
      function S(A, D) {
        return "[Axios v" + qu + "] Transitional option '" + A + "'" + D + (v ? ". " + v : "");
      }
      return (A, D, C) => {
        if (f === false)
          throw new st(S(D, " has been removed" + (d ? " in " + d : "")), st.ERR_DEPRECATED);
        return d && !We[D] && (We[D] = true, console.warn(S(D, " has been deprecated since v" + d + " and will be removed in the near future"))), f ? f(A, D, C) : true;
      };
    }, Dn.spelling = function(f) {
      return (d, v) => (console.warn(`${v} is likely a misspelling of ${f}`), true);
    };
    function Hu(f, d, v) {
      if (typeof f != "object")
        throw new st("options must be an object", st.ERR_BAD_OPTION_VALUE);
      const S = Object.keys(f);
      let A = S.length;
      for (; A-- > 0; ) {
        const D = S[A], C = d[D];
        if (C) {
          const V = f[D], tt = V === void 0 || C(V, D, f);
          if (tt !== true)
            throw new st("option " + D + " must be " + tt, st.ERR_BAD_OPTION_VALUE);
          continue;
        }
        if (v !== true)
          throw new st("Unknown option " + D, st.ERR_BAD_OPTION);
      }
    }
    var xn = { assertOptions: Hu, validators: Dn };
    const ce = xn.validators;
    class va {
      constructor(d) {
        this.defaults = d || {}, this.interceptors = { request: new ka(), response: new ka() };
      }
      request(d, v) {
        return ra(this, null, function* () {
          try {
            return yield this._request(d, v);
          } catch (S) {
            if (S instanceof Error) {
              let A = {};
              Error.captureStackTrace ? Error.captureStackTrace(A) : A = new Error();
              const D = A.stack ? A.stack.replace(/^.+\n/, "") : "";
              try {
                S.stack ? D && !String(S.stack).endsWith(D.replace(/^.+\n.+\n/, "")) && (S.stack += `
` + D) : S.stack = D;
              } catch (C) {
              }
            }
            throw S;
          }
        });
      }
      _request(d, v) {
        typeof d == "string" ? (v = v || {}, v.url = d) : v = d || {}, v = Gn(this.defaults, v);
        const { transitional: S, paramsSerializer: A, headers: D } = v;
        S !== void 0 && xn.assertOptions(S, { silentJSONParsing: ce.transitional(ce.boolean), forcedJSONParsing: ce.transitional(ce.boolean), clarifyTimeoutError: ce.transitional(ce.boolean) }, false), A != null && (B.isFunction(A) ? v.paramsSerializer = { serialize: A } : xn.assertOptions(A, { encode: ce.function, serialize: ce.function }, true)), v.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? v.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : v.allowAbsoluteUrls = true), xn.assertOptions(v, { baseUrl: ce.spelling("baseURL"), withXsrfToken: ce.spelling("withXSRFToken") }, true), v.method = (v.method || this.defaults.method || "get").toLowerCase();
        let C = D && B.merge(D.common, D[v.method]);
        D && B.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (k) => {
          delete D[k];
        }), v.headers = we.concat(C, D);
        const V = [];
        let tt = true;
        this.interceptors.request.forEach(function(k) {
          typeof k.runWhen == "function" && k.runWhen(v) === false || (tt = tt && k.synchronous, V.unshift(k.fulfilled, k.rejected));
        });
        const Z = [];
        this.interceptors.response.forEach(function(k) {
          Z.push(k.fulfilled, k.rejected);
        });
        let J, ut = 0, Nt;
        if (!tt) {
          const k = [Nl.bind(this), void 0];
          for (k.unshift(...V), k.push(...Z), Nt = k.length, J = Promise.resolve(v); ut < Nt; )
            J = J.then(k[ut++], k[ut++]);
          return J;
        }
        Nt = V.length;
        let rt = v;
        for (; ut < Nt; ) {
          const k = V[ut++], $ = V[ut++];
          try {
            rt = k(rt);
          } catch (Xt) {
            $.call(this, Xt);
            break;
          }
        }
        try {
          J = Nl.call(this, rt);
        } catch (k) {
          return Promise.reject(k);
        }
        for (ut = 0, Nt = Z.length; ut < Nt; )
          J = J.then(Z[ut++], Z[ut++]);
        return J;
      }
      getUri(d) {
        d = Gn(this.defaults, d);
        const v = xu(d.baseURL, d.url, d.allowAbsoluteUrls);
        return Ja(v, d.params, d.paramsSerializer);
      }
    }
    B.forEach(["delete", "get", "head", "options"], function(f) {
      va.prototype[f] = function(d, v) {
        return this.request(Gn(v || {}, { method: f, url: d, data: (v || {}).data }));
      };
    }), B.forEach(["post", "put", "patch"], function(f) {
      function d(v) {
        return function(S, A, D) {
          return this.request(Gn(D || {}, { method: f, headers: v ? { "Content-Type": "multipart/form-data" } : {}, url: S, data: A }));
        };
      }
      va.prototype[f] = d(), va.prototype[f + "Form"] = d(true);
    });
    var Zn = va;
    class Bl {
      constructor(d) {
        if (typeof d != "function")
          throw new TypeError("executor must be a function.");
        let v;
        this.promise = new Promise(function(A) {
          v = A;
        });
        const S = this;
        this.promise.then((A) => {
          if (!S._listeners)
            return;
          let D = S._listeners.length;
          for (; D-- > 0; )
            S._listeners[D](A);
          S._listeners = null;
        }), this.promise.then = (A) => {
          let D;
          const C = new Promise((V) => {
            S.subscribe(V), D = V;
          }).then(A);
          return C.cancel = function() {
            S.unsubscribe(D);
          }, C;
        }, d(function(A, D, C) {
          S.reason || (S.reason = new He(A, D, C), v(S.reason));
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
        const d = new AbortController(), v = (S) => {
          d.abort(S);
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
    var jl = Bl;
    function ql(f) {
      return function(d) {
        return f.apply(null, d);
      };
    }
    function $i(f) {
      return B.isObject(f) && f.isAxiosError === true;
    }
    const fe = { Continue: 100, SwitchingProtocols: 101, Processing: 102, EarlyHints: 103, Ok: 200, Created: 201, Accepted: 202, NonAuthoritativeInformation: 203, NoContent: 204, ResetContent: 205, PartialContent: 206, MultiStatus: 207, AlreadyReported: 208, ImUsed: 226, MultipleChoices: 300, MovedPermanently: 301, Found: 302, SeeOther: 303, NotModified: 304, UseProxy: 305, Unused: 306, TemporaryRedirect: 307, PermanentRedirect: 308, BadRequest: 400, Unauthorized: 401, PaymentRequired: 402, Forbidden: 403, NotFound: 404, MethodNotAllowed: 405, NotAcceptable: 406, ProxyAuthenticationRequired: 407, RequestTimeout: 408, Conflict: 409, Gone: 410, LengthRequired: 411, PreconditionFailed: 412, PayloadTooLarge: 413, UriTooLong: 414, UnsupportedMediaType: 415, RangeNotSatisfiable: 416, ExpectationFailed: 417, ImATeapot: 418, MisdirectedRequest: 421, UnprocessableEntity: 422, Locked: 423, FailedDependency: 424, TooEarly: 425, UpgradeRequired: 426, PreconditionRequired: 428, TooManyRequests: 429, RequestHeaderFieldsTooLarge: 431, UnavailableForLegalReasons: 451, InternalServerError: 500, NotImplemented: 501, BadGateway: 502, ServiceUnavailable: 503, GatewayTimeout: 504, HttpVersionNotSupported: 505, VariantAlsoNegotiates: 506, InsufficientStorage: 507, LoopDetected: 508, NotExtended: 510, NetworkAuthenticationRequired: 511 };
    Object.entries(fe).forEach(([f, d]) => {
      fe[d] = f;
    });
    var Kn = fe;
    function el(f) {
      const d = new Zn(f), v = s(Zn.prototype.request, d);
      return B.extend(v, Zn.prototype, d, { allOwnKeys: true }), B.extend(v, d, null, { allOwnKeys: true }), v.create = function(S) {
        return el(Gn(f, S));
      }, v;
    }
    const Yt = el(zn);
    return Yt.Axios = Zn, Yt.CanceledError = He, Yt.CancelToken = jl, Yt.isCancel = Cn, Yt.VERSION = qu, Yt.toFormData = qe, Yt.AxiosError = st, Yt.Cancel = Yt.CanceledError, Yt.all = function(f) {
      return Promise.all(f);
    }, Yt.spread = ql, Yt.isAxiosError = $i, Yt.mergeConfig = Gn, Yt.AxiosHeaders = we, Yt.formToJSON = (f) => dn(B.isHTMLForm(f) ? new FormData(f) : f), Yt.getAdapter = Vn.getAdapter, Yt.HttpStatusCode = Kn, Yt.default = Yt, Br = Yt, Br;
  }
  var kp;
  function Ey() {
    if (kp)
      return fa;
    kp = 1;
    var s = fa && fa.__assign || function() {
      return s = Object.assign || function(g) {
        for (var b, m = 1, E = arguments.length; m < E; m++) {
          b = arguments[m];
          for (var y in b)
            Object.prototype.hasOwnProperty.call(b, y) && (g[y] = b[y]);
        }
        return g;
      }, s.apply(this, arguments);
    };
    Object.defineProperty(fa, "__esModule", { value: true }), fa.getRequestHeaders = fa.getAxiosClient = void 0;
    var i = P0();
    function c(g, b, m, E, y) {
      var h = i.default.create({ baseURL: g, headers: o(b, E, m, g, y), withCredentials: true });
      return h.interceptors.request.use(function(T) {
        return typeof window < "u" && window.csrf_token && window.csrf_token !== "{{ csrf_token }}" && (T.headers["X-Frappe-CSRF-Token"] = window.csrf_token), b && E && m && (T.headers.Authorization = "".concat(E, " ").concat(m())), T;
      }), h;
    }
    fa.getAxiosClient = c;
    function o(g, b, m, E, y) {
      g === void 0 && (g = false);
      var h = { Accept: "application/json", "Content-Type": "application/json; charset=utf-8" };
      return g && b && m && (h.Authorization = "".concat(b, " ").concat(m())), typeof window < "u" && typeof document < "u" && (window.location && (E && E !== window.location.origin || (h["X-Frappe-Site-Name"] = window.location.hostname)), window.csrf_token && window.csrf_token !== "{{ csrf_token }}" && (h["X-Frappe-CSRF-Token"] = window.csrf_token)), s(s({}, h), y != null ? y : {});
    }
    return fa.getRequestHeaders = o, fa;
  }
  var Fp;
  function Ty() {
    if (Fp)
      return Sn;
    Fp = 1;
    var s = Sn && Sn.__assign || function() {
      return s = Object.assign || function(b) {
        for (var m, E = 1, y = arguments.length; E < y; E++) {
          m = arguments[E];
          for (var h in m)
            Object.prototype.hasOwnProperty.call(m, h) && (b[h] = m[h]);
        }
        return b;
      }, s.apply(this, arguments);
    }, i = Sn && Sn.__awaiter || function(b, m, E, y) {
      function h(T) {
        return T instanceof E ? T : new E(function(w) {
          w(T);
        });
      }
      return new (E || (E = Promise))(function(T, w) {
        function X(K) {
          try {
            j(y.next(K));
          } catch (it) {
            w(it);
          }
        }
        function z(K) {
          try {
            j(y.throw(K));
          } catch (it) {
            w(it);
          }
        }
        function j(K) {
          K.done ? T(K.value) : h(K.value).then(X, z);
        }
        j((y = y.apply(b, m || [])).next());
      });
    }, c = Sn && Sn.__generator || function(b, m) {
      var E = { label: 0, sent: function() {
        if (T[0] & 1)
          throw T[1];
        return T[1];
      }, trys: [], ops: [] }, y, h, T, w;
      return w = { next: X(0), throw: X(1), return: X(2) }, typeof Symbol == "function" && (w[Symbol.iterator] = function() {
        return this;
      }), w;
      function X(j) {
        return function(K) {
          return z([j, K]);
        };
      }
      function z(j) {
        if (y)
          throw new TypeError("Generator is already executing.");
        for (; w && (w = 0, j[0] && (E = 0)), E; )
          try {
            if (y = 1, h && (T = j[0] & 2 ? h.return : j[0] ? h.throw || ((T = h.return) && T.call(h), 0) : h.next) && !(T = T.call(h, j[1])).done)
              return T;
            switch (h = 0, T && (j = [j[0] & 2, T.value]), j[0]) {
              case 0:
              case 1:
                T = j;
                break;
              case 4:
                return E.label++, { value: j[1], done: false };
              case 5:
                E.label++, h = j[1], j = [0];
                continue;
              case 7:
                j = E.ops.pop(), E.trys.pop();
                continue;
              default:
                if (T = E.trys, !(T = T.length > 0 && T[T.length - 1]) && (j[0] === 6 || j[0] === 2)) {
                  E = 0;
                  continue;
                }
                if (j[0] === 3 && (!T || j[1] > T[0] && j[1] < T[3])) {
                  E.label = j[1];
                  break;
                }
                if (j[0] === 6 && E.label < T[1]) {
                  E.label = T[1], T = j;
                  break;
                }
                if (T && E.label < T[2]) {
                  E.label = T[2], E.ops.push(j);
                  break;
                }
                T[2] && E.ops.pop(), E.trys.pop();
                continue;
            }
            j = m.call(b, E);
          } catch (K) {
            j = [6, K], h = 0;
          } finally {
            y = T = 0;
          }
        if (j[0] & 5)
          throw j[1];
        return { value: j[0] ? j[1] : void 0, done: true };
      }
    };
    Object.defineProperty(Sn, "__esModule", { value: true }), Sn.FrappeFileUpload = void 0;
    var o = Ey(), g = function() {
      function b(m, E, y, h, T, w) {
        this.appURL = m, this.axios = E, this.useToken = y != null ? y : false, this.token = h, this.tokenType = T, this.customHeaders = w;
      }
      return b.prototype.uploadFile = function(m, E, y, h) {
        return h === void 0 && (h = "upload_file"), i(this, void 0, void 0, function() {
          var T, w, X, z, j, K, it, yt;
          return c(this, function(Dt) {
            return T = new FormData(), m && T.append("file", m, m.name), w = E.isPrivate, X = E.folder, z = E.file_url, j = E.doctype, K = E.docname, it = E.fieldname, yt = E.otherData, w && T.append("is_private", "1"), X && T.append("folder", X), z && T.append("file_url", z), j && K && (T.append("doctype", j), T.append("docname", K), it && T.append("fieldname", it)), yt && Object.keys(yt).forEach(function(ht) {
              var _t = yt[ht];
              T.append(ht, _t);
            }), [2, this.axios.post("/api/method/".concat(h), T, { onUploadProgress: function(ht) {
              y && y(ht.loaded, ht.total, ht);
            }, headers: s(s({}, (0, o.getRequestHeaders)(this.useToken, this.tokenType, this.token, this.appURL, this.customHeaders)), { "Content-Type": "multipart/form-data" }) }).catch(function(ht) {
              var _t, At;
              throw s(s({}, ht.response.data), { httpStatus: ht.response.status, httpStatusText: ht.response.statusText, message: (_t = ht.response.data.message) !== null && _t !== void 0 ? _t : "There was an error while uploading the file.", exception: (At = ht.response.data.exception) !== null && At !== void 0 ? At : "" });
            })];
          });
        });
      }, b;
    }();
    return Sn.FrappeFileUpload = g, Sn;
  }
  var Wp;
  function I0() {
    if (Wp)
      return Ri;
    Wp = 1, Object.defineProperty(Ri, "__esModule", { value: true }), Ri.FrappeApp = void 0;
    var s = _y(), i = by(), c = Sy(), o = Ty(), g = Ey(), b = function() {
      function m(E, y, h, T) {
        var w, X;
        this.url = E, this.name = h != null ? h : "FrappeApp", this.useToken = (w = y == null ? void 0 : y.useToken) !== null && w !== void 0 ? w : false, this.token = y == null ? void 0 : y.token, this.tokenType = (X = y == null ? void 0 : y.type) !== null && X !== void 0 ? X : "Bearer", this.customHeaders = T, this.axios = (0, g.getAxiosClient)(this.url, this.useToken, this.token, this.tokenType, this.customHeaders);
      }
      return m.prototype.auth = function() {
        return new s.FrappeAuth(this.url, this.axios, this.useToken, this.token, this.tokenType);
      }, m.prototype.db = function() {
        return new c.FrappeDB(this.url, this.axios, this.useToken, this.token, this.tokenType);
      }, m.prototype.file = function() {
        return new o.FrappeFileUpload(this.url, this.axios, this.useToken, this.token, this.tokenType, this.customHeaders);
      }, m.prototype.call = function() {
        return new i.FrappeCall(this.url, this.axios, this.useToken, this.token, this.tokenType);
      }, m;
    }();
    return Ri.FrappeApp = b, Ri;
  }
  var En = {};
  var $p;
  function tv() {
    if ($p)
      return En;
    $p = 1;
    var s = En && En.__assign || function() {
      return s = Object.assign || function(g) {
        for (var b, m = 1, E = arguments.length; m < E; m++) {
          b = arguments[m];
          for (var y in b)
            Object.prototype.hasOwnProperty.call(b, y) && (g[y] = b[y]);
        }
        return g;
      }, s.apply(this, arguments);
    }, i = En && En.__awaiter || function(g, b, m, E) {
      function y(h) {
        return h instanceof m ? h : new m(function(T) {
          T(h);
        });
      }
      return new (m || (m = Promise))(function(h, T) {
        function w(j) {
          try {
            z(E.next(j));
          } catch (K) {
            T(K);
          }
        }
        function X(j) {
          try {
            z(E.throw(j));
          } catch (K) {
            T(K);
          }
        }
        function z(j) {
          j.done ? h(j.value) : y(j.value).then(w, X);
        }
        z((E = E.apply(g, b || [])).next());
      });
    }, c = En && En.__generator || function(g, b) {
      var m = { label: 0, sent: function() {
        if (h[0] & 1)
          throw h[1];
        return h[1];
      }, trys: [], ops: [] }, E, y, h, T;
      return T = { next: w(0), throw: w(1), return: w(2) }, typeof Symbol == "function" && (T[Symbol.iterator] = function() {
        return this;
      }), T;
      function w(z) {
        return function(j) {
          return X([z, j]);
        };
      }
      function X(z) {
        if (E)
          throw new TypeError("Generator is already executing.");
        for (; T && (T = 0, z[0] && (m = 0)), m; )
          try {
            if (E = 1, y && (h = z[0] & 2 ? y.return : z[0] ? y.throw || ((h = y.return) && h.call(y), 0) : y.next) && !(h = h.call(y, z[1])).done)
              return h;
            switch (y = 0, h && (z = [z[0] & 2, h.value]), z[0]) {
              case 0:
              case 1:
                h = z;
                break;
              case 4:
                return m.label++, { value: z[1], done: false };
              case 5:
                m.label++, y = z[1], z = [0];
                continue;
              case 7:
                z = m.ops.pop(), m.trys.pop();
                continue;
              default:
                if (h = m.trys, !(h = h.length > 0 && h[h.length - 1]) && (z[0] === 6 || z[0] === 2)) {
                  m = 0;
                  continue;
                }
                if (z[0] === 3 && (!h || z[1] > h[0] && z[1] < h[3])) {
                  m.label = z[1];
                  break;
                }
                if (z[0] === 6 && m.label < h[1]) {
                  m.label = h[1], h = z;
                  break;
                }
                if (h && m.label < h[2]) {
                  m.label = h[2], m.ops.push(z);
                  break;
                }
                h[2] && m.ops.pop(), m.trys.pop();
                continue;
            }
            z = b.call(g, m);
          } catch (j) {
            z = [6, j], y = 0;
          } finally {
            E = h = 0;
          }
        if (z[0] & 5)
          throw z[1];
        return { value: z[0] ? z[1] : void 0, done: true };
      }
    };
    Object.defineProperty(En, "__esModule", { value: true }), En.FrappeAuth = void 0;
    var o = function() {
      function g(b, m, E, y, h) {
        this.appURL = b, this.axios = m, this.useToken = E != null ? E : false, this.token = y, this.tokenType = h;
      }
      return g.prototype.loginWithUsernamePassword = function(b) {
        return i(this, void 0, void 0, function() {
          return c(this, function(m) {
            return [2, this.axios.post("/api/method/login", { usr: b.username, pwd: b.password, otp: b.otp, tmp_id: b.tmp_id, device: b.device }).then(function(E) {
              return E.data;
            }).catch(function(E) {
              var y, h;
              throw s(s({}, E.response.data), { httpStatus: E.response.status, httpStatusText: E.response.statusText, message: (y = E.response.data.message) !== null && y !== void 0 ? y : "There was an error while logging in", exception: (h = E.response.data.exception) !== null && h !== void 0 ? h : "" });
            })];
          });
        });
      }, g.prototype.getLoggedInUser = function() {
        return i(this, void 0, void 0, function() {
          return c(this, function(b) {
            return [2, this.axios.get("/api/method/frappe.auth.get_logged_user").then(function(m) {
              return m.data.message;
            }).catch(function(m) {
              var E;
              throw s(s({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: "There was an error while fetching the logged in user", exception: (E = m.response.data.exception) !== null && E !== void 0 ? E : "" });
            })];
          });
        });
      }, g.prototype.logout = function() {
        return i(this, void 0, void 0, function() {
          return c(this, function(b) {
            return [2, this.axios.post("/api/method/logout", {}).then(function() {
            }).catch(function(m) {
              var E, y;
              throw s(s({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: (E = m.response.data.message) !== null && E !== void 0 ? E : "There was an error while logging out", exception: (y = m.response.data.exception) !== null && y !== void 0 ? y : "" });
            })];
          });
        });
      }, g.prototype.forgetPassword = function(b) {
        return i(this, void 0, void 0, function() {
          return c(this, function(m) {
            return [2, this.axios.post("/", { cmd: "frappe.core.doctype.user.user.reset_password", user: b }).then(function() {
            }).catch(function(E) {
              var y, h;
              throw s(s({}, E.response.data), { httpStatus: E.response.status, httpStatusText: E.response.statusText, message: (y = E.response.data.message) !== null && y !== void 0 ? y : "There was an error sending password reset email.", exception: (h = E.response.data.exception) !== null && h !== void 0 ? h : "" });
            })];
          });
        });
      }, g;
    }();
    return En.FrappeAuth = o, En;
  }
  var Pp;
  function _y() {
    return Pp || (Pp = 1, function(s) {
      var i = gu && gu.__createBinding || (Object.create ? function(o, g, b, m) {
        m === void 0 && (m = b);
        var E = Object.getOwnPropertyDescriptor(g, b);
        (!E || ("get" in E ? !g.__esModule : E.writable || E.configurable)) && (E = { enumerable: true, get: function() {
          return g[b];
        } }), Object.defineProperty(o, m, E);
      } : function(o, g, b, m) {
        m === void 0 && (m = b), o[m] = g[b];
      }), c = gu && gu.__exportStar || function(o, g) {
        for (var b in o)
          b !== "default" && !Object.prototype.hasOwnProperty.call(g, b) && i(g, o, b);
      };
      Object.defineProperty(s, "__esModule", { value: true }), c(I0(), s), c(tv(), s), c(Sy(), s), c(Ty(), s), c(by(), s);
    }(gu)), gu;
  }
  var ev = _y();
  var Ip = { exports: {} };
  var jr = {};
  var ty;
  function nv() {
    if (ty)
      return jr;
    ty = 1;
    var s = Ui;
    function i(w, X) {
      return w === X && (w !== 0 || 1 / w === 1 / X) || w !== w && X !== X;
    }
    var c = typeof Object.is == "function" ? Object.is : i, o = s.useState, g = s.useEffect, b = s.useLayoutEffect, m = s.useDebugValue;
    function E(w, X) {
      var z = X(), j = o({ inst: { value: z, getSnapshot: X } }), K = j[0].inst, it = j[1];
      return b(function() {
        K.value = z, K.getSnapshot = X, y(K) && it({ inst: K });
      }, [w, z, X]), g(function() {
        return y(K) && it({ inst: K }), w(function() {
          y(K) && it({ inst: K });
        });
      }, [w]), m(z), z;
    }
    function y(w) {
      var X = w.getSnapshot;
      w = w.value;
      try {
        var z = X();
        return !c(w, z);
      } catch (j) {
        return true;
      }
    }
    function h(w, X) {
      return X();
    }
    var T = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? h : E;
    return jr.useSyncExternalStore = s.useSyncExternalStore !== void 0 ? s.useSyncExternalStore : T, jr;
  }
  var ey;
  function av() {
    return ey || (ey = 1, Ip.exports = nv()), Ip.exports;
  }
  av();
  var lv = 0;
  var uv = 1;
  var iv = 2;
  var ny = Object.prototype.hasOwnProperty;
  function Gr(s, i) {
    var c, o;
    if (s === i)
      return true;
    if (s && i && (c = s.constructor) === i.constructor) {
      if (c === Date)
        return s.getTime() === i.getTime();
      if (c === RegExp)
        return s.toString() === i.toString();
      if (c === Array) {
        if ((o = s.length) === i.length)
          for (; o-- && Gr(s[o], i[o]); )
            ;
        return o === -1;
      }
      if (!c || typeof s == "object") {
        o = 0;
        for (c in s)
          if (ny.call(s, c) && ++o && !ny.call(i, c) || !(c in i) || !Gr(s[c], i[c]))
            return false;
        return Object.keys(i).length === o;
      }
    }
    return s !== s && i !== i;
  }
  var Xa = /* @__PURE__ */ new WeakMap();
  var Qa = () => {
  };
  var Be = Qa();
  var vc = Object;
  var _n = (s) => s === Be;
  var Ga = (s) => typeof s == "function";
  var Tl = (s, i) => rn(rn({}, s), i);
  var sv = (s) => Ga(s.then);
  var qr = {};
  var cc = {};
  var Ay = "undefined";
  var gc = typeof window != Ay;
  var Qr = typeof document != Ay;
  var cv = gc && "Deno" in window;
  var ov = (s, i) => {
    const c = Xa.get(s);
    return [() => !_n(i) && s.get(i) || qr, (o) => {
      if (!_n(i)) {
        const g = s.get(i);
        i in cc || (cc[i] = g), c[5](i, Tl(g, o), g || qr);
      }
    }, c[6], () => !_n(i) && i in cc ? cc[i] : !_n(i) && s.get(i) || qr];
  };
  var Vr = true;
  var rv = () => Vr;
  var [Zr, Kr] = gc && window.addEventListener ? [window.addEventListener.bind(window), window.removeEventListener.bind(window)] : [Qa, Qa];
  var fv = () => {
    const s = Qr && document.visibilityState;
    return _n(s) || s !== "hidden";
  };
  var hv = (s) => (Qr && document.addEventListener("visibilitychange", s), Zr("focus", s), () => {
    Qr && document.removeEventListener("visibilitychange", s), Kr("focus", s);
  });
  var dv = (s) => {
    const i = () => {
      Vr = true, s();
    }, c = () => {
      Vr = false;
    };
    return Zr("online", i), Zr("offline", c), () => {
      Kr("online", i), Kr("offline", c);
    };
  };
  var pv = { isOnline: rv, isVisible: fv };
  var yv = { initFocus: hv, initReconnect: dv };
  Ui.useId;
  var nf = !gc || cv;
  var mv = nf ? Je.useEffect : Je.useLayoutEffect;
  var Hr = typeof navigator < "u" && navigator.connection;
  var ay = !nf && Hr && (["slow-2g", "2g"].includes(Hr.effectiveType) || Hr.saveData);
  var oc = /* @__PURE__ */ new WeakMap();
  var vv = (s) => vc.prototype.toString.call(s);
  var Lr = (s, i) => s === `[object ${i}]`;
  var gv = 0;
  var Jr = (s) => {
    const i = typeof s, c = vv(s), o = Lr(c, "Date"), g = Lr(c, "RegExp"), b = Lr(c, "Object");
    let m, E;
    if (vc(s) === s && !o && !g) {
      if (m = oc.get(s), m)
        return m;
      if (m = ++gv + "~", oc.set(s, m), Array.isArray(s)) {
        for (m = "@", E = 0; E < s.length; E++)
          m += Jr(s[E]) + ",";
        oc.set(s, m);
      }
      if (b) {
        m = "#";
        const y = vc.keys(s).sort();
        for (; !_n(E = y.pop()); )
          _n(s[E]) || (m += E + ":" + Jr(s[E]) + ",");
        oc.set(s, m);
      }
    } else
      m = o ? s.toJSON() : i == "symbol" ? s.toString() : i == "string" ? JSON.stringify(s) : "" + s;
    return m;
  };
  var Oy = (s) => {
    if (Ga(s))
      try {
        s = s();
      } catch (c) {
        s = "";
      }
    const i = s;
    return s = typeof s == "string" ? s : (Array.isArray(s) ? s.length : s) ? Jr(s) : "", [s, i];
  };
  var bv = 0;
  var ly = () => ++bv;
  function Sv(...s) {
    return ra(this, null, function* () {
      const [i, c, o, g] = s, b = Tl({ populateCache: true, throwOnError: true }, typeof g == "boolean" ? { revalidate: g } : g || {});
      let m = b.populateCache;
      const E = b.rollbackOnError;
      let y = b.optimisticData;
      const h = (X) => typeof E == "function" ? E(X) : E !== false, T = b.throwOnError;
      if (Ga(c)) {
        const X = c, z = [], j = i.keys();
        for (const K of j)
          !/^\$(inf|sub)\$/.test(K) && X(i.get(K)._k) && z.push(K);
        return Promise.all(z.map(w));
      }
      return w(c);
      function w(X) {
        return ra(this, null, function* () {
          const [z] = Oy(X);
          if (!z)
            return;
          const [j, K] = ov(i, z), [it, yt, Dt, ht] = Xa.get(i), _t = () => {
            const Ft = it[z];
            return (Ga(b.revalidate) ? b.revalidate(j().data, X) : b.revalidate !== false) && (delete Dt[z], delete ht[z], Ft && Ft[0]) ? Ft[0](iv).then(() => j().data) : j().data;
          };
          if (s.length < 3)
            return _t();
          let At = o, Lt, ct = false;
          const ue = ly();
          yt[z] = [ue, 0];
          const Ee = !_n(y), hn = j(), Te = hn.data, ie = hn._c, _e = _n(ie) ? Te : ie;
          if (Ee && (y = Ga(y) ? y(_e, Te) : y, K({ data: y, _c: _e })), Ga(At))
            try {
              At = At(_e);
            } catch (Ft) {
              Lt = Ft, ct = true;
            }
          if (At && sv(At))
            if (At = yield At.catch((Ft) => {
              Lt = Ft, ct = true;
            }), ue !== yt[z][0]) {
              if (ct)
                throw Lt;
              return At;
            } else
              ct && Ee && h(Lt) && (m = true, K({ data: _e, _c: Be }));
          if (m && !ct)
            if (Ga(m)) {
              const Ft = m(At, _e);
              K({ data: Ft, error: Be, _c: Be });
            } else
              K({ data: At, error: Be, _c: Be });
          if (yt[z][1] = ly(), Promise.resolve(_t()).then(() => {
            K({ _c: Be });
          }), ct) {
            if (T)
              throw Lt;
            return;
          }
          return At;
        });
      }
    });
  }
  var uy = (s, i) => {
    for (const c in s)
      s[c][0] && s[c][0](i);
  };
  var Ry = (s, i) => {
    if (!Xa.has(s)) {
      const c = Tl(yv, i), o = /* @__PURE__ */ Object.create(null), g = Sv.bind(Be, s);
      let b = Qa;
      const m = /* @__PURE__ */ Object.create(null), E = (T, w) => {
        const X = m[T] || [];
        return m[T] = X, X.push(w), () => X.splice(X.indexOf(w), 1);
      }, y = (T, w, X) => {
        s.set(T, w);
        const z = m[T];
        if (z)
          for (const j of z)
            j(w, X);
      }, h = () => {
        if (!Xa.has(s) && (Xa.set(s, [o, /* @__PURE__ */ Object.create(null), /* @__PURE__ */ Object.create(null), /* @__PURE__ */ Object.create(null), g, y, E]), !nf)) {
          const T = c.initFocus(setTimeout.bind(Be, uy.bind(Be, o, lv))), w = c.initReconnect(setTimeout.bind(Be, uy.bind(Be, o, uv)));
          b = () => {
            T && T(), w && w(), Xa.delete(s);
          };
        }
      };
      return h(), [s, g, h, b];
    }
    return [s, Xa.get(s)[4]];
  };
  var Ev = (s, i, c, o, g) => {
    const b = c.errorRetryCount, m = g.retryCount, E = ~~((Math.random() + 0.5) * (1 << (m < 8 ? m : 8))) * c.errorRetryInterval;
    !_n(b) && m > b || setTimeout(o, E, g);
  };
  var Tv = Gr;
  var [af, _v] = Ry(/* @__PURE__ */ new Map());
  var Av = Tl({ onLoadingSlow: Qa, onSuccess: Qa, onError: Qa, onErrorRetry: Ev, onDiscarded: Qa, revalidateOnFocus: true, revalidateOnReconnect: true, revalidateIfStale: true, shouldRetryOnError: true, errorRetryInterval: ay ? 1e4 : 5e3, focusThrottleInterval: 5 * 1e3, dedupingInterval: 2 * 1e3, loadingTimeout: ay ? 5e3 : 3e3, compare: Tv, isPaused: () => false, cache: af, mutate: _v, fallback: {} }, pv);
  var Ov = (s, i) => {
    const c = Tl(s, i);
    if (i) {
      const { use: o, fallback: g } = s, { use: b, fallback: m } = i;
      o && b && (c.use = o.concat(b)), g && m && (c.fallback = Tl(g, m));
    }
    return c;
  };
  var iy = Je.createContext({});
  var Rv = (s) => {
    const { value: i } = s, c = Je.useContext(iy), o = Ga(i), g = Je.useMemo(() => o ? i(c) : i, [o, c, i]), b = Je.useMemo(() => o ? g : Ov(c, g), [o, c, g]), m = g && g.provider, E = Je.useRef(Be);
    m && !E.current && (E.current = Ry(m(b.cache || af), g));
    const y = E.current;
    return y && (b.cache = y[0], b.mutate = y[1]), mv(() => {
      if (y)
        return y[2] && y[2](), y[3];
    }, []), Je.createElement(iy.Provider, Tl(s, { value: b }));
  };
  var zv = "$inf$";
  var zy = gc && window.__SWR_DEVTOOLS_USE__;
  var wv = zy ? window.__SWR_DEVTOOLS_USE__ : [];
  var Uv = () => {
    zy && (window.__SWR_DEVTOOLS_REACT__ = Ui);
  };
  var Cv = (s) => (i, c, o) => s(i, c && ((...g) => {
    const [b] = Oy(i), [, , , m] = Xa.get(af);
    if (b.startsWith(zv))
      return c(...g);
    const E = m[b];
    return _n(E) ? c(...g) : (delete m[b], E);
  }), o);
  wv.concat(Cv);
  Uv();
  Ui.use;
  Promise.resolve(Be);
  var Dv = vc.defineProperty(Rv, "defaultValue", { value: Av });
  Promise.resolve();
  var Ln = /* @__PURE__ */ Object.create(null);
  Ln.open = "0";
  Ln.close = "1";
  Ln.ping = "2";
  Ln.pong = "3";
  Ln.message = "4";
  Ln.upgrade = "5";
  Ln.noop = "6";
  var pc = /* @__PURE__ */ Object.create(null);
  Object.keys(Ln).forEach((s) => {
    pc[Ln[s]] = s;
  });
  var kr = { type: "error", data: "parser error" };
  var wy = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
  var Uy = typeof ArrayBuffer == "function";
  var Cy = (s) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(s) : s && s.buffer instanceof ArrayBuffer;
  var lf = ({ type: s, data: i }, c, o) => wy && i instanceof Blob ? c ? o(i) : sy(i, o) : Uy && (i instanceof ArrayBuffer || Cy(i)) ? c ? o(i) : sy(new Blob([i]), o) : o(Ln[s] + (i || ""));
  var sy = (s, i) => {
    const c = new FileReader();
    return c.onload = function() {
      const o = c.result.split(",")[1];
      i("b" + (o || ""));
    }, c.readAsDataURL(s);
  };
  function cy(s) {
    return s instanceof Uint8Array ? s : s instanceof ArrayBuffer ? new Uint8Array(s) : new Uint8Array(s.buffer, s.byteOffset, s.byteLength);
  }
  var Yr;
  function xv(s, i) {
    if (wy && s.data instanceof Blob)
      return s.data.arrayBuffer().then(cy).then(i);
    if (Uy && (s.data instanceof ArrayBuffer || Cy(s.data)))
      return i(cy(s.data));
    lf(s, false, (c) => {
      Yr || (Yr = new TextEncoder()), i(Yr.encode(c));
    });
  }
  var oy = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var wi = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (let s = 0; s < oy.length; s++)
    wi[oy.charCodeAt(s)] = s;
  var Mv = (s) => {
    let i = s.length * 0.75, c = s.length, o, g = 0, b, m, E, y;
    s[s.length - 1] === "=" && (i--, s[s.length - 2] === "=" && i--);
    const h = new ArrayBuffer(i), T = new Uint8Array(h);
    for (o = 0; o < c; o += 4)
      b = wi[s.charCodeAt(o)], m = wi[s.charCodeAt(o + 1)], E = wi[s.charCodeAt(o + 2)], y = wi[s.charCodeAt(o + 3)], T[g++] = b << 2 | m >> 4, T[g++] = (m & 15) << 4 | E >> 2, T[g++] = (E & 3) << 6 | y & 63;
    return h;
  };
  var Nv = typeof ArrayBuffer == "function";
  var uf = (s, i) => {
    if (typeof s != "string")
      return { type: "message", data: Dy(s, i) };
    const c = s.charAt(0);
    return c === "b" ? { type: "message", data: Bv(s.substring(1), i) } : pc[c] ? s.length > 1 ? { type: pc[c], data: s.substring(1) } : { type: pc[c] } : kr;
  };
  var Bv = (s, i) => {
    if (Nv) {
      const c = Mv(s);
      return Dy(c, i);
    } else
      return { base64: true, data: s };
  };
  var Dy = (s, i) => {
    switch (i) {
      case "blob":
        return s instanceof Blob ? s : new Blob([s]);
      case "arraybuffer":
      default:
        return s instanceof ArrayBuffer ? s : s.buffer;
    }
  };
  var xy = "";
  var jv = (s, i) => {
    const c = s.length, o = new Array(c);
    let g = 0;
    s.forEach((b, m) => {
      lf(b, false, (E) => {
        o[m] = E, ++g === c && i(o.join(xy));
      });
    });
  };
  var qv = (s, i) => {
    const c = s.split(xy), o = [];
    for (let g = 0; g < c.length; g++) {
      const b = uf(c[g], i);
      if (o.push(b), b.type === "error")
        break;
    }
    return o;
  };
  function Hv() {
    return new TransformStream({ transform(s, i) {
      xv(s, (c) => {
        const o = c.length;
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
        s.data && typeof s.data != "string" && (g[0] |= 128), i.enqueue(g), i.enqueue(c);
      });
    } });
  }
  var Xr;
  function rc(s) {
    return s.reduce((i, c) => i + c.length, 0);
  }
  function fc(s, i) {
    if (s[0].length === i)
      return s.shift();
    const c = new Uint8Array(i);
    let o = 0;
    for (let g = 0; g < i; g++)
      c[g] = s[0][o++], o === s[0].length && (s.shift(), o = 0);
    return s.length && o < s[0].length && (s[0] = s[0].slice(o)), c;
  }
  function Lv(s, i) {
    Xr || (Xr = new TextDecoder());
    const c = [];
    let o = 0, g = -1, b = false;
    return new TransformStream({ transform(m, E) {
      for (c.push(m); ; ) {
        if (o === 0) {
          if (rc(c) < 1)
            break;
          const y = fc(c, 1);
          b = (y[0] & 128) === 128, g = y[0] & 127, g < 126 ? o = 3 : g === 126 ? o = 1 : o = 2;
        } else if (o === 1) {
          if (rc(c) < 2)
            break;
          const y = fc(c, 2);
          g = new DataView(y.buffer, y.byteOffset, y.length).getUint16(0), o = 3;
        } else if (o === 2) {
          if (rc(c) < 8)
            break;
          const y = fc(c, 8), h = new DataView(y.buffer, y.byteOffset, y.length), T = h.getUint32(0);
          if (T > Math.pow(2, 21) - 1) {
            E.enqueue(kr);
            break;
          }
          g = T * Math.pow(2, 32) + h.getUint32(4), o = 3;
        } else {
          if (rc(c) < g)
            break;
          const y = fc(c, g);
          E.enqueue(uf(b ? y : Xr.decode(y), i)), o = 0;
        }
        if (g === 0 || g > s) {
          E.enqueue(kr);
          break;
        }
      }
    } });
  }
  var My = 4;
  function le(s) {
    if (s)
      return Yv(s);
  }
  function Yv(s) {
    for (var i in le.prototype)
      s[i] = le.prototype[i];
    return s;
  }
  le.prototype.on = le.prototype.addEventListener = function(s, i) {
    return this._callbacks = this._callbacks || {}, (this._callbacks["$" + s] = this._callbacks["$" + s] || []).push(i), this;
  };
  le.prototype.once = function(s, i) {
    function c() {
      this.off(s, c), i.apply(this, arguments);
    }
    return c.fn = i, this.on(s, c), this;
  };
  le.prototype.off = le.prototype.removeListener = le.prototype.removeAllListeners = le.prototype.removeEventListener = function(s, i) {
    if (this._callbacks = this._callbacks || {}, arguments.length == 0)
      return this._callbacks = {}, this;
    var c = this._callbacks["$" + s];
    if (!c)
      return this;
    if (arguments.length == 1)
      return delete this._callbacks["$" + s], this;
    for (var o, g = 0; g < c.length; g++)
      if (o = c[g], o === i || o.fn === i) {
        c.splice(g, 1);
        break;
      }
    return c.length === 0 && delete this._callbacks["$" + s], this;
  };
  le.prototype.emit = function(s) {
    this._callbacks = this._callbacks || {};
    for (var i = new Array(arguments.length - 1), c = this._callbacks["$" + s], o = 1; o < arguments.length; o++)
      i[o - 1] = arguments[o];
    if (c) {
      c = c.slice(0);
      for (var o = 0, g = c.length; o < g; ++o)
        c[o].apply(this, i);
    }
    return this;
  };
  le.prototype.emitReserved = le.prototype.emit;
  le.prototype.listeners = function(s) {
    return this._callbacks = this._callbacks || {}, this._callbacks["$" + s] || [];
  };
  le.prototype.hasListeners = function(s) {
    return !!this.listeners(s).length;
  };
  var fn = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
  function Ny(s, ...i) {
    return i.reduce((c, o) => (s.hasOwnProperty(o) && (c[o] = s[o]), c), {});
  }
  var Xv = fn.setTimeout;
  var Gv = fn.clearTimeout;
  function bc(s, i) {
    i.useNativeTimers ? (s.setTimeoutFn = Xv.bind(fn), s.clearTimeoutFn = Gv.bind(fn)) : (s.setTimeoutFn = fn.setTimeout.bind(fn), s.clearTimeoutFn = fn.clearTimeout.bind(fn));
  }
  var Qv = 1.33;
  function Vv(s) {
    return typeof s == "string" ? Zv(s) : Math.ceil((s.byteLength || s.size) * Qv);
  }
  function Zv(s) {
    let i = 0, c = 0;
    for (let o = 0, g = s.length; o < g; o++)
      i = s.charCodeAt(o), i < 128 ? c += 1 : i < 2048 ? c += 2 : i < 55296 || i >= 57344 ? c += 3 : (o++, c += 4);
    return c;
  }
  function Kv(s) {
    let i = "";
    for (let c in s)
      s.hasOwnProperty(c) && (i.length && (i += "&"), i += encodeURIComponent(c) + "=" + encodeURIComponent(s[c]));
    return i;
  }
  function Jv(s) {
    let i = {}, c = s.split("&");
    for (let o = 0, g = c.length; o < g; o++) {
      let b = c[o].split("=");
      i[decodeURIComponent(b[0])] = decodeURIComponent(b[1]);
    }
    return i;
  }
  var kv = class extends Error {
    constructor(i, c, o) {
      super(i), this.description = c, this.context = o, this.type = "TransportError";
    }
  };
  var sf = class extends le {
    constructor(i) {
      super(), this.writable = false, bc(this, i), this.opts = i, this.query = i.query, this.socket = i.socket;
    }
    onError(i, c, o) {
      return super.emitReserved("error", new kv(i, c, o)), this;
    }
    open() {
      return this.readyState = "opening", this.doOpen(), this;
    }
    close() {
      return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this;
    }
    send(i) {
      this.readyState === "open" && this.write(i);
    }
    onOpen() {
      this.readyState = "open", this.writable = true, super.emitReserved("open");
    }
    onData(i) {
      const c = uf(i, this.socket.binaryType);
      this.onPacket(c);
    }
    onPacket(i) {
      super.emitReserved("packet", i);
    }
    onClose(i) {
      this.readyState = "closed", super.emitReserved("close", i);
    }
    pause(i) {
    }
    createUri(i, c = {}) {
      return i + "://" + this._hostname() + this._port() + this.opts.path + this._query(c);
    }
    _hostname() {
      const i = this.opts.hostname;
      return i.indexOf(":") === -1 ? i : "[" + i + "]";
    }
    _port() {
      return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
    }
    _query(i) {
      const c = Kv(i);
      return c.length ? "?" + c : "";
    }
  };
  var By = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split("");
  var Fr = 64;
  var Fv = {};
  var ry = 0;
  var hc = 0;
  var fy;
  function hy(s) {
    let i = "";
    do
      i = By[s % Fr] + i, s = Math.floor(s / Fr);
    while (s > 0);
    return i;
  }
  function jy() {
    const s = hy(+new Date());
    return s !== fy ? (ry = 0, fy = s) : s + "." + hy(ry++);
  }
  for (; hc < Fr; hc++)
    Fv[By[hc]] = hc;
  var qy = false;
  try {
    qy = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
  } catch (s) {
  }
  var Wv = qy;
  function Hy(s) {
    const i = s.xdomain;
    try {
      if (typeof XMLHttpRequest < "u" && (!i || Wv))
        return new XMLHttpRequest();
    } catch (c) {
    }
    if (!i)
      try {
        return new fn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
      } catch (c) {
      }
  }
  function $v() {
  }
  var Pv = function() {
    return new Hy({ xdomain: false }).responseType != null;
  }();
  var Iv = class extends sf {
    constructor(i) {
      if (super(i), this.polling = false, typeof location < "u") {
        const o = location.protocol === "https:";
        let g = location.port;
        g || (g = o ? "443" : "80"), this.xd = typeof location < "u" && i.hostname !== location.hostname || g !== i.port;
      }
      const c = i && i.forceBase64;
      this.supportsBinary = Pv && !c, this.opts.withCredentials && (this.cookieJar = void 0);
    }
    get name() {
      return "polling";
    }
    doOpen() {
      this.poll();
    }
    pause(i) {
      this.readyState = "pausing";
      const c = () => {
        this.readyState = "paused", i();
      };
      if (this.polling || !this.writable) {
        let o = 0;
        this.polling && (o++, this.once("pollComplete", function() {
          --o || c();
        })), this.writable || (o++, this.once("drain", function() {
          --o || c();
        }));
      } else
        c();
    }
    poll() {
      this.polling = true, this.doPoll(), this.emitReserved("poll");
    }
    onData(i) {
      const c = (o) => {
        if (this.readyState === "opening" && o.type === "open" && this.onOpen(), o.type === "close")
          return this.onClose({ description: "transport closed by the server" }), false;
        this.onPacket(o);
      };
      qv(i, this.socket.binaryType).forEach(c), this.readyState !== "closed" && (this.polling = false, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll());
    }
    doClose() {
      const i = () => {
        this.write([{ type: "close" }]);
      };
      this.readyState === "open" ? i() : this.once("open", i);
    }
    write(i) {
      this.writable = false, jv(i, (c) => {
        this.doWrite(c, () => {
          this.writable = true, this.emitReserved("drain");
        });
      });
    }
    uri() {
      const i = this.opts.secure ? "https" : "http", c = this.query || {};
      return this.opts.timestampRequests !== false && (c[this.opts.timestampParam] = jy()), !this.supportsBinary && !c.sid && (c.b64 = 1), this.createUri(i, c);
    }
    request(i = {}) {
      return Object.assign(i, { xd: this.xd, cookieJar: this.cookieJar }, this.opts), new Hn(this.uri(), i);
    }
    doWrite(i, c) {
      const o = this.request({ method: "POST", data: i });
      o.on("success", c), o.on("error", (g, b) => {
        this.onError("xhr post error", g, b);
      });
    }
    doPoll() {
      const i = this.request();
      i.on("data", this.onData.bind(this)), i.on("error", (c, o) => {
        this.onError("xhr poll error", c, o);
      }), this.pollXhr = i;
    }
  };
  var Hn = class extends le {
    constructor(i, c) {
      super(), bc(this, c), this.opts = c, this.method = c.method || "GET", this.uri = i, this.data = c.data !== void 0 ? c.data : null, this.create();
    }
    create() {
      var i;
      const c = Ny(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
      c.xdomain = !!this.opts.xd;
      const o = this.xhr = new Hy(c);
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
        (i = this.opts.cookieJar) === null || i === void 0 || i.addCookies(o), "withCredentials" in o && (o.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (o.timeout = this.opts.requestTimeout), o.onreadystatechange = () => {
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
      typeof document < "u" && (this.index = Hn.requestsCount++, Hn.requests[this.index] = this);
    }
    onError(i) {
      this.emitReserved("error", i, this.xhr), this.cleanup(true);
    }
    cleanup(i) {
      if (!(typeof this.xhr > "u" || this.xhr === null)) {
        if (this.xhr.onreadystatechange = $v, i)
          try {
            this.xhr.abort();
          } catch (c) {
          }
        typeof document < "u" && delete Hn.requests[this.index], this.xhr = null;
      }
    }
    onLoad() {
      const i = this.xhr.responseText;
      i !== null && (this.emitReserved("data", i), this.emitReserved("success"), this.cleanup());
    }
    abort() {
      this.cleanup();
    }
  };
  Hn.requestsCount = 0;
  Hn.requests = {};
  if (typeof document < "u") {
    if (typeof attachEvent == "function")
      attachEvent("onunload", dy);
    else if (typeof addEventListener == "function") {
      const s = "onpagehide" in fn ? "pagehide" : "unload";
      addEventListener(s, dy, false);
    }
  }
  function dy() {
    for (let s in Hn.requests)
      Hn.requests.hasOwnProperty(s) && Hn.requests[s].abort();
  }
  var cf = typeof Promise == "function" && typeof Promise.resolve == "function" ? (s) => Promise.resolve().then(s) : (s, i) => i(s, 0);
  var dc = fn.WebSocket || fn.MozWebSocket;
  var py = true;
  var tg = "arraybuffer";
  var yy = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
  var eg = class extends sf {
    constructor(i) {
      super(i), this.supportsBinary = !i.forceBase64;
    }
    get name() {
      return "websocket";
    }
    doOpen() {
      if (!this.check())
        return;
      const i = this.uri(), c = this.opts.protocols, o = yy ? {} : Ny(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
      this.opts.extraHeaders && (o.headers = this.opts.extraHeaders);
      try {
        this.ws = py && !yy ? c ? new dc(i, c) : new dc(i) : new dc(i, c, o);
      } catch (g) {
        return this.emitReserved("error", g);
      }
      this.ws.binaryType = this.socket.binaryType, this.addEventListeners();
    }
    addEventListeners() {
      this.ws.onopen = () => {
        this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
      }, this.ws.onclose = (i) => this.onClose({ description: "websocket connection closed", context: i }), this.ws.onmessage = (i) => this.onData(i.data), this.ws.onerror = (i) => this.onError("websocket error", i);
    }
    write(i) {
      this.writable = false;
      for (let c = 0; c < i.length; c++) {
        const o = i[c], g = c === i.length - 1;
        lf(o, this.supportsBinary, (b) => {
          try {
            py && this.ws.send(b);
          } catch (m) {
          }
          g && cf(() => {
            this.writable = true, this.emitReserved("drain");
          }, this.setTimeoutFn);
        });
      }
    }
    doClose() {
      typeof this.ws < "u" && (this.ws.close(), this.ws = null);
    }
    uri() {
      const i = this.opts.secure ? "wss" : "ws", c = this.query || {};
      return this.opts.timestampRequests && (c[this.opts.timestampParam] = jy()), this.supportsBinary || (c.b64 = 1), this.createUri(i, c);
    }
    check() {
      return !!dc;
    }
  };
  var ng = class extends sf {
    get name() {
      return "webtransport";
    }
    doOpen() {
      typeof WebTransport == "function" && (this.transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]), this.transport.closed.then(() => {
        this.onClose();
      }).catch((i) => {
        this.onError("webtransport error", i);
      }), this.transport.ready.then(() => {
        this.transport.createBidirectionalStream().then((i) => {
          const c = Lv(Number.MAX_SAFE_INTEGER, this.socket.binaryType), o = i.readable.pipeThrough(c).getReader(), g = Hv();
          g.readable.pipeTo(i.writable), this.writer = g.writable.getWriter();
          const b = () => {
            o.read().then(({ done: E, value: y }) => {
              E || (this.onPacket(y), b());
            }).catch((E) => {
            });
          };
          b();
          const m = { type: "open" };
          this.query.sid && (m.data = `{"sid":"${this.query.sid}"}`), this.writer.write(m).then(() => this.onOpen());
        });
      }));
    }
    write(i) {
      this.writable = false;
      for (let c = 0; c < i.length; c++) {
        const o = i[c], g = c === i.length - 1;
        this.writer.write(o).then(() => {
          g && cf(() => {
            this.writable = true, this.emitReserved("drain");
          }, this.setTimeoutFn);
        });
      }
    }
    doClose() {
      var i;
      (i = this.transport) === null || i === void 0 || i.close();
    }
  };
  var ag = { websocket: eg, webtransport: ng, polling: Iv };
  var lg = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
  var ug = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
  function Wr(s) {
    if (s.length > 2e3)
      throw "URI too long";
    const i = s, c = s.indexOf("["), o = s.indexOf("]");
    c != -1 && o != -1 && (s = s.substring(0, c) + s.substring(c, o).replace(/:/g, ";") + s.substring(o, s.length));
    let g = lg.exec(s || ""), b = {}, m = 14;
    for (; m--; )
      b[ug[m]] = g[m] || "";
    return c != -1 && o != -1 && (b.source = i, b.host = b.host.substring(1, b.host.length - 1).replace(/;/g, ":"), b.authority = b.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), b.ipv6uri = true), b.pathNames = ig(b, b.path), b.queryKey = sg(b, b.query), b;
  }
  function ig(s, i) {
    const c = /\/{2,9}/g, o = i.replace(c, "/").split("/");
    return (i.slice(0, 1) == "/" || i.length === 0) && o.splice(0, 1), i.slice(-1) == "/" && o.splice(o.length - 1, 1), o;
  }
  function sg(s, i) {
    const c = {};
    return i.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(o, g, b) {
      g && (c[g] = b);
    }), c;
  }
  var Ly = class bu extends le {
    constructor(i, c = {}) {
      super(), this.binaryType = tg, this.writeBuffer = [], i && typeof i == "object" && (c = i, i = null), i ? (i = Wr(i), c.hostname = i.host, c.secure = i.protocol === "https" || i.protocol === "wss", c.port = i.port, i.query && (c.query = i.query)) : c.host && (c.hostname = Wr(c.host).host), bc(this, c), this.secure = c.secure != null ? c.secure : typeof location < "u" && location.protocol === "https:", c.hostname && !c.port && (c.port = this.secure ? "443" : "80"), this.hostname = c.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = c.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = c.transports || ["polling", "websocket", "webtransport"], this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({ path: "/engine.io", agent: false, withCredentials: false, upgrade: true, timestampParam: "t", rememberUpgrade: false, addTrailingSlash: true, rejectUnauthorized: true, perMessageDeflate: { threshold: 1024 }, transportOptions: {}, closeOnBeforeunload: false }, c), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = Jv(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
        this.transport && (this.transport.removeAllListeners(), this.transport.close());
      }, addEventListener("beforeunload", this.beforeunloadEventListener, false)), this.hostname !== "localhost" && (this.offlineEventListener = () => {
        this.onClose("transport close", { description: "network connection lost" });
      }, addEventListener("offline", this.offlineEventListener, false))), this.open();
    }
    createTransport(i) {
      const c = Object.assign({}, this.opts.query);
      c.EIO = My, c.transport = i, this.id && (c.sid = this.id);
      const o = Object.assign({}, this.opts, { query: c, socket: this, hostname: this.hostname, secure: this.secure, port: this.port }, this.opts.transportOptions[i]);
      return new ag[i](o);
    }
    open() {
      let i;
      if (this.opts.rememberUpgrade && bu.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1)
        i = "websocket";
      else if (this.transports.length === 0) {
        this.setTimeoutFn(() => {
          this.emitReserved("error", "No transports available");
        }, 0);
        return;
      } else
        i = this.transports[0];
      this.readyState = "opening";
      try {
        i = this.createTransport(i);
      } catch (c) {
        this.transports.shift(), this.open();
        return;
      }
      i.open(), this.setTransport(i);
    }
    setTransport(i) {
      this.transport && this.transport.removeAllListeners(), this.transport = i, i.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (c) => this.onClose("transport close", c));
    }
    probe(i) {
      let c = this.createTransport(i), o = false;
      bu.priorWebsocketSuccess = false;
      const g = () => {
        o || (c.send([{ type: "ping", data: "probe" }]), c.once("packet", (w) => {
          if (!o)
            if (w.type === "pong" && w.data === "probe") {
              if (this.upgrading = true, this.emitReserved("upgrading", c), !c)
                return;
              bu.priorWebsocketSuccess = c.name === "websocket", this.transport.pause(() => {
                o || this.readyState !== "closed" && (T(), this.setTransport(c), c.send([{ type: "upgrade" }]), this.emitReserved("upgrade", c), c = null, this.upgrading = false, this.flush());
              });
            } else {
              const X = new Error("probe error");
              X.transport = c.name, this.emitReserved("upgradeError", X);
            }
        }));
      };
      function b() {
        o || (o = true, T(), c.close(), c = null);
      }
      const m = (w) => {
        const X = new Error("probe error: " + w);
        X.transport = c.name, b(), this.emitReserved("upgradeError", X);
      };
      function E() {
        m("transport closed");
      }
      function y() {
        m("socket closed");
      }
      function h(w) {
        c && w.name !== c.name && b();
      }
      const T = () => {
        c.removeListener("open", g), c.removeListener("error", m), c.removeListener("close", E), this.off("close", y), this.off("upgrading", h);
      };
      c.once("open", g), c.once("error", m), c.once("close", E), this.once("close", y), this.once("upgrading", h), this.upgrades.indexOf("webtransport") !== -1 && i !== "webtransport" ? this.setTimeoutFn(() => {
        o || c.open();
      }, 200) : c.open();
    }
    onOpen() {
      if (this.readyState = "open", bu.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(), this.readyState === "open" && this.opts.upgrade) {
        let i = 0;
        const c = this.upgrades.length;
        for (; i < c; i++)
          this.probe(this.upgrades[i]);
      }
    }
    onPacket(i) {
      if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
        switch (this.emitReserved("packet", i), this.emitReserved("heartbeat"), this.resetPingTimeout(), i.type) {
          case "open":
            this.onHandshake(JSON.parse(i.data));
            break;
          case "ping":
            this.sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong");
            break;
          case "error":
            const c = new Error("server error");
            c.code = i.data, this.onError(c);
            break;
          case "message":
            this.emitReserved("data", i.data), this.emitReserved("message", i.data);
            break;
        }
    }
    onHandshake(i) {
      this.emitReserved("handshake", i), this.id = i.sid, this.transport.query.sid = i.sid, this.upgrades = this.filterUpgrades(i.upgrades), this.pingInterval = i.pingInterval, this.pingTimeout = i.pingTimeout, this.maxPayload = i.maxPayload, this.onOpen(), this.readyState !== "closed" && this.resetPingTimeout();
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
        const i = this.getWritablePackets();
        this.transport.send(i), this.prevBufferLen = i.length, this.emitReserved("flush");
      }
    }
    getWritablePackets() {
      if (!(this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
        return this.writeBuffer;
      let i = 1;
      for (let c = 0; c < this.writeBuffer.length; c++) {
        const o = this.writeBuffer[c].data;
        if (o && (i += Vv(o)), c > 0 && i > this.maxPayload)
          return this.writeBuffer.slice(0, c);
        i += 2;
      }
      return this.writeBuffer;
    }
    write(i, c, o) {
      return this.sendPacket("message", i, c, o), this;
    }
    send(i, c, o) {
      return this.sendPacket("message", i, c, o), this;
    }
    sendPacket(i, c, o, g) {
      if (typeof c == "function" && (g = c, c = void 0), typeof o == "function" && (g = o, o = null), this.readyState === "closing" || this.readyState === "closed")
        return;
      o = o || {}, o.compress = o.compress !== false;
      const b = { type: i, data: c, options: o };
      this.emitReserved("packetCreate", b), this.writeBuffer.push(b), g && this.once("flush", g), this.flush();
    }
    close() {
      const i = () => {
        this.onClose("forced close"), this.transport.close();
      }, c = () => {
        this.off("upgrade", c), this.off("upgradeError", c), i();
      }, o = () => {
        this.once("upgrade", c), this.once("upgradeError", c);
      };
      return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
        this.upgrading ? o() : i();
      }) : this.upgrading ? o() : i()), this;
    }
    onError(i) {
      bu.priorWebsocketSuccess = false, this.emitReserved("error", i), this.onClose("transport error", i);
    }
    onClose(i, c) {
      (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") && (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), typeof removeEventListener == "function" && (removeEventListener("beforeunload", this.beforeunloadEventListener, false), removeEventListener("offline", this.offlineEventListener, false)), this.readyState = "closed", this.id = null, this.emitReserved("close", i, c), this.writeBuffer = [], this.prevBufferLen = 0);
    }
    filterUpgrades(i) {
      const c = [];
      let o = 0;
      const g = i.length;
      for (; o < g; o++)
        ~this.transports.indexOf(i[o]) && c.push(i[o]);
      return c;
    }
  };
  Ly.protocol = My;
  function cg(s, i = "", c) {
    let o = s;
    c = c || typeof location < "u" && location, s == null && (s = c.protocol + "//" + c.host), typeof s == "string" && (s.charAt(0) === "/" && (s.charAt(1) === "/" ? s = c.protocol + s : s = c.host + s), /^(https?|wss?):\/\//.test(s) || (typeof c < "u" ? s = c.protocol + "//" + s : s = "https://" + s), o = Wr(s)), o.port || (/^(http|ws)$/.test(o.protocol) ? o.port = "80" : /^(http|ws)s$/.test(o.protocol) && (o.port = "443")), o.path = o.path || "/";
    const g = o.host.indexOf(":") !== -1 ? "[" + o.host + "]" : o.host;
    return o.id = o.protocol + "://" + g + ":" + o.port + i, o.href = o.protocol + "://" + g + (c && c.port === o.port ? "" : ":" + o.port), o;
  }
  var og = typeof ArrayBuffer == "function";
  var rg = (s) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(s) : s.buffer instanceof ArrayBuffer;
  var Yy = Object.prototype.toString;
  var fg = typeof Blob == "function" || typeof Blob < "u" && Yy.call(Blob) === "[object BlobConstructor]";
  var hg = typeof File == "function" || typeof File < "u" && Yy.call(File) === "[object FileConstructor]";
  function of(s) {
    return og && (s instanceof ArrayBuffer || rg(s)) || fg && s instanceof Blob || hg && s instanceof File;
  }
  function yc(s, i) {
    if (!s || typeof s != "object")
      return false;
    if (Array.isArray(s)) {
      for (let c = 0, o = s.length; c < o; c++)
        if (yc(s[c]))
          return true;
      return false;
    }
    if (of(s))
      return true;
    if (s.toJSON && typeof s.toJSON == "function" && arguments.length === 1)
      return yc(s.toJSON(), true);
    for (const c in s)
      if (Object.prototype.hasOwnProperty.call(s, c) && yc(s[c]))
        return true;
    return false;
  }
  function dg(s) {
    const i = [], c = s.data, o = s;
    return o.data = $r(c, i), o.attachments = i.length, { packet: o, buffers: i };
  }
  function $r(s, i) {
    if (!s)
      return s;
    if (of(s)) {
      const c = { _placeholder: true, num: i.length };
      return i.push(s), c;
    } else if (Array.isArray(s)) {
      const c = new Array(s.length);
      for (let o = 0; o < s.length; o++)
        c[o] = $r(s[o], i);
      return c;
    } else if (typeof s == "object" && !(s instanceof Date)) {
      const c = {};
      for (const o in s)
        Object.prototype.hasOwnProperty.call(s, o) && (c[o] = $r(s[o], i));
      return c;
    }
    return s;
  }
  function pg(s, i) {
    return s.data = Pr(s.data, i), delete s.attachments, s;
  }
  function Pr(s, i) {
    if (!s)
      return s;
    if (s && s._placeholder === true) {
      if (typeof s.num == "number" && s.num >= 0 && s.num < i.length)
        return i[s.num];
      throw new Error("illegal attachments");
    } else if (Array.isArray(s))
      for (let c = 0; c < s.length; c++)
        s[c] = Pr(s[c], i);
    else if (typeof s == "object")
      for (const c in s)
        Object.prototype.hasOwnProperty.call(s, c) && (s[c] = Pr(s[c], i));
    return s;
  }
  var yg = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"];
  var mg = 5;
  var Tt;
  (function(s) {
    s[s.CONNECT = 0] = "CONNECT", s[s.DISCONNECT = 1] = "DISCONNECT", s[s.EVENT = 2] = "EVENT", s[s.ACK = 3] = "ACK", s[s.CONNECT_ERROR = 4] = "CONNECT_ERROR", s[s.BINARY_EVENT = 5] = "BINARY_EVENT", s[s.BINARY_ACK = 6] = "BINARY_ACK";
  })(Tt || (Tt = {}));
  var vg = class {
    constructor(i) {
      this.replacer = i;
    }
    encode(i) {
      return (i.type === Tt.EVENT || i.type === Tt.ACK) && yc(i) ? this.encodeAsBinary({ type: i.type === Tt.EVENT ? Tt.BINARY_EVENT : Tt.BINARY_ACK, nsp: i.nsp, data: i.data, id: i.id }) : [this.encodeAsString(i)];
    }
    encodeAsString(i) {
      let c = "" + i.type;
      return (i.type === Tt.BINARY_EVENT || i.type === Tt.BINARY_ACK) && (c += i.attachments + "-"), i.nsp && i.nsp !== "/" && (c += i.nsp + ","), i.id != null && (c += i.id), i.data != null && (c += JSON.stringify(i.data, this.replacer)), c;
    }
    encodeAsBinary(i) {
      const c = dg(i), o = this.encodeAsString(c.packet), g = c.buffers;
      return g.unshift(o), g;
    }
  };
  function my(s) {
    return Object.prototype.toString.call(s) === "[object Object]";
  }
  var rf = class extends le {
    constructor(i) {
      super(), this.reviver = i;
    }
    add(i) {
      let c;
      if (typeof i == "string") {
        if (this.reconstructor)
          throw new Error("got plaintext data when reconstructing a packet");
        c = this.decodeString(i);
        const o = c.type === Tt.BINARY_EVENT;
        o || c.type === Tt.BINARY_ACK ? (c.type = o ? Tt.EVENT : Tt.ACK, this.reconstructor = new gg(c), c.attachments === 0 && super.emitReserved("decoded", c)) : super.emitReserved("decoded", c);
      } else if (of(i) || i.base64)
        if (this.reconstructor)
          c = this.reconstructor.takeBinaryData(i), c && (this.reconstructor = null, super.emitReserved("decoded", c));
        else
          throw new Error("got binary data when not reconstructing a packet");
      else
        throw new Error("Unknown type: " + i);
    }
    decodeString(i) {
      let c = 0;
      const o = { type: Number(i.charAt(0)) };
      if (Tt[o.type] === void 0)
        throw new Error("unknown packet type " + o.type);
      if (o.type === Tt.BINARY_EVENT || o.type === Tt.BINARY_ACK) {
        const b = c + 1;
        for (; i.charAt(++c) !== "-" && c != i.length; )
          ;
        const m = i.substring(b, c);
        if (m != Number(m) || i.charAt(c) !== "-")
          throw new Error("Illegal attachments");
        o.attachments = Number(m);
      }
      if (i.charAt(c + 1) === "/") {
        const b = c + 1;
        for (; ++c && !(i.charAt(c) === "," || c === i.length); )
          ;
        o.nsp = i.substring(b, c);
      } else
        o.nsp = "/";
      const g = i.charAt(c + 1);
      if (g !== "" && Number(g) == g) {
        const b = c + 1;
        for (; ++c; ) {
          const m = i.charAt(c);
          if (m == null || Number(m) != m) {
            --c;
            break;
          }
          if (c === i.length)
            break;
        }
        o.id = Number(i.substring(b, c + 1));
      }
      if (i.charAt(++c)) {
        const b = this.tryParse(i.substr(c));
        if (rf.isPayloadValid(o.type, b))
          o.data = b;
        else
          throw new Error("invalid payload");
      }
      return o;
    }
    tryParse(i) {
      try {
        return JSON.parse(i, this.reviver);
      } catch (c) {
        return false;
      }
    }
    static isPayloadValid(i, c) {
      switch (i) {
        case Tt.CONNECT:
          return my(c);
        case Tt.DISCONNECT:
          return c === void 0;
        case Tt.CONNECT_ERROR:
          return typeof c == "string" || my(c);
        case Tt.EVENT:
        case Tt.BINARY_EVENT:
          return Array.isArray(c) && (typeof c[0] == "number" || typeof c[0] == "string" && yg.indexOf(c[0]) === -1);
        case Tt.ACK:
        case Tt.BINARY_ACK:
          return Array.isArray(c);
      }
    }
    destroy() {
      this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
    }
  };
  var gg = class {
    constructor(i) {
      this.packet = i, this.buffers = [], this.reconPack = i;
    }
    takeBinaryData(i) {
      if (this.buffers.push(i), this.buffers.length === this.reconPack.attachments) {
        const c = pg(this.reconPack, this.buffers);
        return this.finishedReconstruction(), c;
      }
      return null;
    }
    finishedReconstruction() {
      this.reconPack = null, this.buffers = [];
    }
  };
  var bg = Object.freeze(Object.defineProperty({ __proto__: null, Decoder: rf, Encoder: vg, get PacketType() {
    return Tt;
  }, protocol: mg }, Symbol.toStringTag, { value: "Module" }));
  function Tn(s, i, c) {
    return s.on(i, c), function() {
      s.off(i, c);
    };
  }
  var Sg = Object.freeze({ connect: 1, connect_error: 1, disconnect: 1, disconnecting: 1, newListener: 1, removeListener: 1 });
  var Xy = class extends le {
    constructor(i, c, o) {
      super(), this.connected = false, this.recovered = false, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = i, this.nsp = c, o && o.auth && (this.auth = o.auth), this._opts = Object.assign({}, o), this.io._autoConnect && this.open();
    }
    get disconnected() {
      return !this.connected;
    }
    subEvents() {
      if (this.subs)
        return;
      const i = this.io;
      this.subs = [Tn(i, "open", this.onopen.bind(this)), Tn(i, "packet", this.onpacket.bind(this)), Tn(i, "error", this.onerror.bind(this)), Tn(i, "close", this.onclose.bind(this))];
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
    send(...i) {
      return i.unshift("message"), this.emit.apply(this, i), this;
    }
    emit(i, ...c) {
      if (Sg.hasOwnProperty(i))
        throw new Error('"' + i.toString() + '" is a reserved event name');
      if (c.unshift(i), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
        return this._addToQueue(c), this;
      const o = { type: Tt.EVENT, data: c };
      if (o.options = {}, o.options.compress = this.flags.compress !== false, typeof c[c.length - 1] == "function") {
        const b = this.ids++, m = c.pop();
        this._registerAckCallback(b, m), o.id = b;
      }
      const g = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
      return this.flags.volatile && (!g || !this.connected) || (this.connected ? (this.notifyOutgoingListeners(o), this.packet(o)) : this.sendBuffer.push(o)), this.flags = {}, this;
    }
    _registerAckCallback(i, c) {
      var o;
      const g = (o = this.flags.timeout) !== null && o !== void 0 ? o : this._opts.ackTimeout;
      if (g === void 0) {
        this.acks[i] = c;
        return;
      }
      const b = this.io.setTimeoutFn(() => {
        delete this.acks[i];
        for (let m = 0; m < this.sendBuffer.length; m++)
          this.sendBuffer[m].id === i && this.sendBuffer.splice(m, 1);
        c.call(this, new Error("operation has timed out"));
      }, g);
      this.acks[i] = (...m) => {
        this.io.clearTimeoutFn(b), c.apply(this, [null, ...m]);
      };
    }
    emitWithAck(i, ...c) {
      const o = this.flags.timeout !== void 0 || this._opts.ackTimeout !== void 0;
      return new Promise((g, b) => {
        c.push((m, E) => o ? m ? b(m) : g(E) : g(m)), this.emit(i, ...c);
      });
    }
    _addToQueue(i) {
      let c;
      typeof i[i.length - 1] == "function" && (c = i.pop());
      const o = { id: this._queueSeq++, tryCount: 0, pending: false, args: i, flags: Object.assign({ fromQueue: true }, this.flags) };
      i.push((g, ...b) => o !== this._queue[0] ? void 0 : (g !== null ? o.tryCount > this._opts.retries && (this._queue.shift(), c && c(g)) : (this._queue.shift(), c && c(null, ...b)), o.pending = false, this._drainQueue())), this._queue.push(o), this._drainQueue();
    }
    _drainQueue(i = false) {
      if (!this.connected || this._queue.length === 0)
        return;
      const c = this._queue[0];
      c.pending && !i || (c.pending = true, c.tryCount++, this.flags = c.flags, this.emit.apply(this, c.args));
    }
    packet(i) {
      i.nsp = this.nsp, this.io._packet(i);
    }
    onopen() {
      typeof this.auth == "function" ? this.auth((i) => {
        this._sendConnectPacket(i);
      }) : this._sendConnectPacket(this.auth);
    }
    _sendConnectPacket(i) {
      this.packet({ type: Tt.CONNECT, data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, i) : i });
    }
    onerror(i) {
      this.connected || this.emitReserved("connect_error", i);
    }
    onclose(i, c) {
      this.connected = false, delete this.id, this.emitReserved("disconnect", i, c);
    }
    onpacket(i) {
      if (i.nsp === this.nsp)
        switch (i.type) {
          case Tt.CONNECT:
            i.data && i.data.sid ? this.onconnect(i.data.sid, i.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
            break;
          case Tt.EVENT:
          case Tt.BINARY_EVENT:
            this.onevent(i);
            break;
          case Tt.ACK:
          case Tt.BINARY_ACK:
            this.onack(i);
            break;
          case Tt.DISCONNECT:
            this.ondisconnect();
            break;
          case Tt.CONNECT_ERROR:
            this.destroy();
            const c = new Error(i.data.message);
            c.data = i.data.data, this.emitReserved("connect_error", c);
            break;
        }
    }
    onevent(i) {
      const c = i.data || [];
      i.id != null && c.push(this.ack(i.id)), this.connected ? this.emitEvent(c) : this.receiveBuffer.push(Object.freeze(c));
    }
    emitEvent(i) {
      if (this._anyListeners && this._anyListeners.length) {
        const c = this._anyListeners.slice();
        for (const o of c)
          o.apply(this, i);
      }
      super.emit.apply(this, i), this._pid && i.length && typeof i[i.length - 1] == "string" && (this._lastOffset = i[i.length - 1]);
    }
    ack(i) {
      const c = this;
      let o = false;
      return function(...g) {
        o || (o = true, c.packet({ type: Tt.ACK, id: i, data: g }));
      };
    }
    onack(i) {
      const c = this.acks[i.id];
      typeof c == "function" && (c.apply(this, i.data), delete this.acks[i.id]);
    }
    onconnect(i, c) {
      this.id = i, this.recovered = c && this._pid === c, this._pid = c, this.connected = true, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(true);
    }
    emitBuffered() {
      this.receiveBuffer.forEach((i) => this.emitEvent(i)), this.receiveBuffer = [], this.sendBuffer.forEach((i) => {
        this.notifyOutgoingListeners(i), this.packet(i);
      }), this.sendBuffer = [];
    }
    ondisconnect() {
      this.destroy(), this.onclose("io server disconnect");
    }
    destroy() {
      this.subs && (this.subs.forEach((i) => i()), this.subs = void 0), this.io._destroy(this);
    }
    disconnect() {
      return this.connected && this.packet({ type: Tt.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
    }
    close() {
      return this.disconnect();
    }
    compress(i) {
      return this.flags.compress = i, this;
    }
    get volatile() {
      return this.flags.volatile = true, this;
    }
    timeout(i) {
      return this.flags.timeout = i, this;
    }
    onAny(i) {
      return this._anyListeners = this._anyListeners || [], this._anyListeners.push(i), this;
    }
    prependAny(i) {
      return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(i), this;
    }
    offAny(i) {
      if (!this._anyListeners)
        return this;
      if (i) {
        const c = this._anyListeners;
        for (let o = 0; o < c.length; o++)
          if (i === c[o])
            return c.splice(o, 1), this;
      } else
        this._anyListeners = [];
      return this;
    }
    listenersAny() {
      return this._anyListeners || [];
    }
    onAnyOutgoing(i) {
      return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(i), this;
    }
    prependAnyOutgoing(i) {
      return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(i), this;
    }
    offAnyOutgoing(i) {
      if (!this._anyOutgoingListeners)
        return this;
      if (i) {
        const c = this._anyOutgoingListeners;
        for (let o = 0; o < c.length; o++)
          if (i === c[o])
            return c.splice(o, 1), this;
      } else
        this._anyOutgoingListeners = [];
      return this;
    }
    listenersAnyOutgoing() {
      return this._anyOutgoingListeners || [];
    }
    notifyOutgoingListeners(i) {
      if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
        const c = this._anyOutgoingListeners.slice();
        for (const o of c)
          o.apply(this, i.data);
      }
    }
  };
  function Su(s) {
    s = s || {}, this.ms = s.min || 100, this.max = s.max || 1e4, this.factor = s.factor || 2, this.jitter = s.jitter > 0 && s.jitter <= 1 ? s.jitter : 0, this.attempts = 0;
  }
  Su.prototype.duration = function() {
    var s = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
      var i = Math.random(), c = Math.floor(i * this.jitter * s);
      s = (Math.floor(i * 10) & 1) == 0 ? s - c : s + c;
    }
    return Math.min(s, this.max) | 0;
  };
  Su.prototype.reset = function() {
    this.attempts = 0;
  };
  Su.prototype.setMin = function(s) {
    this.ms = s;
  };
  Su.prototype.setMax = function(s) {
    this.max = s;
  };
  Su.prototype.setJitter = function(s) {
    this.jitter = s;
  };
  var Ir = class extends le {
    constructor(i, c) {
      var o;
      super(), this.nsps = {}, this.subs = [], i && typeof i == "object" && (c = i, i = void 0), c = c || {}, c.path = c.path || "/socket.io", this.opts = c, bc(this, c), this.reconnection(c.reconnection !== false), this.reconnectionAttempts(c.reconnectionAttempts || 1 / 0), this.reconnectionDelay(c.reconnectionDelay || 1e3), this.reconnectionDelayMax(c.reconnectionDelayMax || 5e3), this.randomizationFactor((o = c.randomizationFactor) !== null && o !== void 0 ? o : 0.5), this.backoff = new Su({ min: this.reconnectionDelay(), max: this.reconnectionDelayMax(), jitter: this.randomizationFactor() }), this.timeout(c.timeout == null ? 2e4 : c.timeout), this._readyState = "closed", this.uri = i;
      const g = c.parser || bg;
      this.encoder = new g.Encoder(), this.decoder = new g.Decoder(), this._autoConnect = c.autoConnect !== false, this._autoConnect && this.open();
    }
    reconnection(i) {
      return arguments.length ? (this._reconnection = !!i, this) : this._reconnection;
    }
    reconnectionAttempts(i) {
      return i === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = i, this);
    }
    reconnectionDelay(i) {
      var c;
      return i === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = i, (c = this.backoff) === null || c === void 0 || c.setMin(i), this);
    }
    randomizationFactor(i) {
      var c;
      return i === void 0 ? this._randomizationFactor : (this._randomizationFactor = i, (c = this.backoff) === null || c === void 0 || c.setJitter(i), this);
    }
    reconnectionDelayMax(i) {
      var c;
      return i === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = i, (c = this.backoff) === null || c === void 0 || c.setMax(i), this);
    }
    timeout(i) {
      return arguments.length ? (this._timeout = i, this) : this._timeout;
    }
    maybeReconnectOnOpen() {
      !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect();
    }
    open(i) {
      if (~this._readyState.indexOf("open"))
        return this;
      this.engine = new Ly(this.uri, this.opts);
      const c = this.engine, o = this;
      this._readyState = "opening", this.skipReconnect = false;
      const g = Tn(c, "open", function() {
        o.onopen(), i && i();
      }), b = (E) => {
        this.cleanup(), this._readyState = "closed", this.emitReserved("error", E), i ? i(E) : this.maybeReconnectOnOpen();
      }, m = Tn(c, "error", b);
      if (this._timeout !== false) {
        const E = this._timeout, y = this.setTimeoutFn(() => {
          g(), b(new Error("timeout")), c.close();
        }, E);
        this.opts.autoUnref && y.unref(), this.subs.push(() => {
          this.clearTimeoutFn(y);
        });
      }
      return this.subs.push(g), this.subs.push(m), this;
    }
    connect(i) {
      return this.open(i);
    }
    onopen() {
      this.cleanup(), this._readyState = "open", this.emitReserved("open");
      const i = this.engine;
      this.subs.push(Tn(i, "ping", this.onping.bind(this)), Tn(i, "data", this.ondata.bind(this)), Tn(i, "error", this.onerror.bind(this)), Tn(i, "close", this.onclose.bind(this)), Tn(this.decoder, "decoded", this.ondecoded.bind(this)));
    }
    onping() {
      this.emitReserved("ping");
    }
    ondata(i) {
      try {
        this.decoder.add(i);
      } catch (c) {
        this.onclose("parse error", c);
      }
    }
    ondecoded(i) {
      cf(() => {
        this.emitReserved("packet", i);
      }, this.setTimeoutFn);
    }
    onerror(i) {
      this.emitReserved("error", i);
    }
    socket(i, c) {
      let o = this.nsps[i];
      return o ? this._autoConnect && !o.active && o.connect() : (o = new Xy(this, i, c), this.nsps[i] = o), o;
    }
    _destroy(i) {
      const c = Object.keys(this.nsps);
      for (const o of c)
        if (this.nsps[o].active)
          return;
      this._close();
    }
    _packet(i) {
      const c = this.encoder.encode(i);
      for (let o = 0; o < c.length; o++)
        this.engine.write(c[o], i.options);
    }
    cleanup() {
      this.subs.forEach((i) => i()), this.subs.length = 0, this.decoder.destroy();
    }
    _close() {
      this.skipReconnect = true, this._reconnecting = false, this.onclose("forced close"), this.engine && this.engine.close();
    }
    disconnect() {
      return this._close();
    }
    onclose(i, c) {
      this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", i, c), this._reconnection && !this.skipReconnect && this.reconnect();
    }
    reconnect() {
      if (this._reconnecting || this.skipReconnect)
        return this;
      const i = this;
      if (this.backoff.attempts >= this._reconnectionAttempts)
        this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = false;
      else {
        const c = this.backoff.duration();
        this._reconnecting = true;
        const o = this.setTimeoutFn(() => {
          i.skipReconnect || (this.emitReserved("reconnect_attempt", i.backoff.attempts), !i.skipReconnect && i.open((g) => {
            g ? (i._reconnecting = false, i.reconnect(), this.emitReserved("reconnect_error", g)) : i.onreconnect();
          }));
        }, c);
        this.opts.autoUnref && o.unref(), this.subs.push(() => {
          this.clearTimeoutFn(o);
        });
      }
    }
    onreconnect() {
      const i = this.backoff.attempts;
      this._reconnecting = false, this.backoff.reset(), this.emitReserved("reconnect", i);
    }
  };
  var zi = {};
  function mc(s, i) {
    typeof s == "object" && (i = s, s = void 0), i = i || {};
    const c = cg(s, i.path || "/socket.io"), o = c.source, g = c.id, b = c.path, m = zi[g] && b in zi[g].nsps, E = i.forceNew || i["force new connection"] || i.multiplex === false || m;
    let y;
    return E ? y = new Ir(o, i) : (zi[g] || (zi[g] = new Ir(o, i)), y = zi[g]), c.query && !i.query && (i.query = c.queryKey), y.socket(c.path, i);
  }
  Object.assign(mc, { Manager: Ir, Socket: Xy, io: mc, connect: mc });
  var Eg = class {
    constructor(i, c, o, g) {
      El(this, "socket_port"), El(this, "host"), El(this, "port"), El(this, "protocol"), El(this, "url"), El(this, "site_name"), El(this, "socket");
      var b, m, E, y;
      if (this.socket_port = o != null ? o : "9000", this.host = (b = window.location) == null ? void 0 : b.hostname, this.port = (m = window.location) != null && m.port ? `:${this.socket_port}` : "", this.protocol = ((E = window.location) == null ? void 0 : E.protocol) === "https:" ? "https" : "http", i) {
        let h = new URL(i);
        h.port = "", o ? (h.port = o, this.url = h.toString()) : this.url = h.toString();
      } else
        this.url = `${this.protocol}://${this.host}${this.port}/`;
      c && (this.url = `${this.url}${c}`), this.site_name = c, this.socket = mc(`${this.url}`, { withCredentials: true, secure: this.protocol === "https", extraHeaders: g && g.useToken === true ? { Authorization: `${g.type} ${(y = g.token) == null ? void 0 : y.call(g)}` } : {} });
    }
  };
  var Tg = Je.createContext(null);
  var _g = ({ url: s = "", tokenParams: i, socketPort: c, swrConfig: o, siteName: g, enableSocket: b = true, children: m, customHeaders: E }) => {
    const y = Je.useMemo(() => {
      const h = new ev.FrappeApp(s, i, void 0, E);
      return { url: s, tokenParams: i, app: h, auth: h.auth(), db: h.db(), call: h.call(), file: h.file(), socket: b ? new Eg(s, g, c, i).socket : void 0, enableSocket: b, socketPort: c };
    }, [s, i, c, b, E]);
    return An.jsx(Tg.Provider, { value: y, children: An.jsx(Dv, { value: o, children: m }) });
  };
  var Ag = (s) => {
    var i;
    return An.jsx(_g, { enableSocket: false, customHeaders: { "x-frappe-csrf-token": (i = window.frappe) == null ? void 0 : i.csrf_token }, children: s.children });
  };
  Object.keys(Hp).map((s) => Hp[s]).filter((s) => s.component).map((s) => {
    const i = (c) => An.jsx(Ag, Or(rn({}, c), { children: An.jsx(s, {}) }));
    return customElements.get(s.component) || customElements.define(s.component, Y0(i, Ui, k0)), { element: i, simulator: "simulator" in s ? s.simulator : void 0, renderInReact: "renderInReact" in s ? s.renderInReact : void 0, tag: s.component };
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
//# sourceMappingURL=index.bundle.2MYZJLZW.js.map
