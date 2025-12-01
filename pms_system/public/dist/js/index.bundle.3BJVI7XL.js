(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // ../pms_system/pms_system/public/pms-ui/index.bundle.js
  var require_index_bundle = __commonJS({
    "../pms_system/pms_system/public/pms-ui/index.bundle.js"() {
      var w0 = Object.defineProperty;
      var R0 = Object.defineProperties;
      var N0 = Object.getOwnPropertyDescriptors;
      var rr = Object.getOwnPropertySymbols;
      var qp = Object.prototype.hasOwnProperty;
      var Hp = Object.prototype.propertyIsEnumerable;
      var vi = (s, u) => (u = Symbol[s]) ? u : Symbol.for("Symbol." + s);
      var z0 = (s) => {
        throw TypeError(s);
      };
      var Bp = (s, u, r) => u in s ? w0(s, u, { enumerable: true, configurable: true, writable: true, value: r }) : s[u] = r;
      var Qe = (s, u) => {
        for (var r in u || (u = {}))
          qp.call(u, r) && Bp(s, r, u[r]);
        if (rr)
          for (var r of rr(u))
            Hp.call(u, r) && Bp(s, r, u[r]);
        return s;
      };
      var Yt = (s, u) => R0(s, N0(u));
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
        }, d = (m) => {
          try {
            v(r.throw(m));
          } catch (h) {
            g(h);
          }
        }, v = (m) => m.done ? o(m.value) : Promise.resolve(m.value).then(b, d);
        v((r = r.apply(s, u)).next());
      });
      var Sl = function(s, u) {
        this[0] = s, this[1] = u;
      };
      var zc = (s, u, r) => {
        var o = (d, v, m, h) => {
          try {
            var _ = r[d](v), A = (v = _.value) instanceof Sl, L = _.done;
            Promise.resolve(A ? v[0] : v).then((w) => A ? o(d === "return" ? d : "next", v[1] ? { done: w.done, value: w.value } : w, m, h) : m({ value: w, done: L })).catch((w) => o("throw", w, m, h));
          } catch (w) {
            h(w);
          }
        }, g = (d) => b[d] = (v) => new Promise((m, h) => o(d, v, m, h)), b = {};
        return r = r.apply(s, u), b[vi("asyncIterator")] = () => b, g("next"), g("throw"), g("return"), b;
      };
      var jc = (s) => {
        var u = s[vi("asyncIterator")], r = false, o, g = {};
        return u == null ? (u = s[vi("iterator")](), o = (b) => g[b] = (d) => u[b](d)) : (u = u.call(s), o = (b) => g[b] = (d) => {
          if (r) {
            if (r = false, b === "throw")
              throw d;
            return d;
          }
          return r = true, { done: false, value: new Sl(new Promise((v) => {
            var m = u[b](d);
            m instanceof Object || z0("Object expected"), v(m);
          }), 1) };
        }), g[vi("iterator")] = () => g, o("next"), "throw" in u ? o("throw") : g.throw = (b) => {
          throw b;
        }, "return" in u && o("return"), g;
      };
      var Lp = (s, u, r) => (u = s[vi("asyncIterator")]) ? u.call(s) : (s = s[vi("iterator")](), u = {}, r = (o, g) => (g = s[o]) && (u[o] = (b) => new Promise((d, v, m) => (b = g.call(s, b), m = b.done, Promise.resolve(b.value).then((h) => d({ value: h, done: m }), v)))), r("next"), r("return"), u);
      (function() {
        const u = document.createElement("link").relList;
        if (u && u.supports && u.supports("modulepreload"))
          return;
        for (const g of document.querySelectorAll('link[rel="modulepreload"]'))
          o(g);
        new MutationObserver((g) => {
          for (const b of g)
            if (b.type === "childList")
              for (const d of b.addedNodes)
                d.tagName === "LINK" && d.rel === "modulepreload" && o(d);
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
      function j0() {
        if (Yp)
          return Au;
        Yp = 1;
        var s = Symbol.for("react.transitional.element"), u = Symbol.for("react.fragment");
        function r(o, g, b) {
          var d = null;
          if (b !== void 0 && (d = "" + b), g.key !== void 0 && (d = "" + g.key), "key" in g) {
            b = {};
            for (var v in g)
              v !== "key" && (b[v] = g[v]);
          } else
            b = g;
          return g = b.ref, { $$typeof: s, type: o, key: d, ref: g !== void 0 ? g : null, props: b };
        }
        return Au.Fragment = u, Au.jsx = r, Au.jsxs = r, Au;
      }
      var Xp;
      function C0() {
        return Xp || (Xp = 1, Cc.exports = j0()), Cc.exports;
      }
      var z = C0();
      var U0 = (s) => z.jsxs("label", { children: [s.label && z.jsx("div", { children: s.label }), z.jsx("input", { className: "ef-border ef-border-gray-400 ef-rounded ef-px-2 ef-py-1", onChange: (u) => s.onChange(u.target.value), type: "text", value: s.value })] });
      var D0 = (s, u) => {
        var o;
        const r = window.cur_frm;
        return r ? (o = r.set_value) == null ? void 0 : o.call(r, s, u) : null;
      };
      var M0 = () => {
        const s = window.cur_frm;
        return s ? s.doc : null;
      };
      var Uc = { exports: {} };
      var ye = {};
      var Gp;
      function B0() {
        if (Gp)
          return ye;
        Gp = 1;
        var s = Symbol.for("react.transitional.element"), u = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), d = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), A = Symbol.for("react.activity"), L = Symbol.iterator;
        function w(E) {
          return E === null || typeof E != "object" ? null : (E = L && E[L] || E["@@iterator"], typeof E == "function" ? E : null);
        }
        var B = { isMounted: function() {
          return false;
        }, enqueueForceUpdate: function() {
        }, enqueueReplaceState: function() {
        }, enqueueSetState: function() {
        } }, K = Object.assign, ie = {};
        function he(E, V, W) {
          this.props = E, this.context = V, this.refs = ie, this.updater = W || B;
        }
        he.prototype.isReactComponent = {}, he.prototype.setState = function(E, V) {
          if (typeof E != "object" && typeof E != "function" && E != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
          this.updater.enqueueSetState(this, E, V, "setState");
        }, he.prototype.forceUpdate = function(E) {
          this.updater.enqueueForceUpdate(this, E, "forceUpdate");
        };
        function Ee() {
        }
        Ee.prototype = he.prototype;
        function fe(E, V, W) {
          this.props = E, this.context = V, this.refs = ie, this.updater = W || B;
        }
        var xe = fe.prototype = new Ee();
        xe.constructor = fe, K(xe, he.prototype), xe.isPureReactComponent = true;
        var we = Array.isArray;
        function Ye() {
        }
        var de = { H: null, A: null, T: null, S: null }, it = Object.prototype.hasOwnProperty;
        function ht(E, V, W) {
          var ne = W.ref;
          return { $$typeof: s, type: E, key: V, ref: ne !== void 0 ? ne : null, props: W };
        }
        function St(E, V) {
          return ht(E.type, V, E.props);
        }
        function tt(E) {
          return typeof E == "object" && E !== null && E.$$typeof === s;
        }
        function Je(E) {
          var V = { "=": "=0", ":": "=2" };
          return "$" + E.replace(/[=:]/g, function(W) {
            return V[W];
          });
        }
        var xt = /\/+/g;
        function Fe(E, V) {
          return typeof E == "object" && E !== null && E.key != null ? Je("" + E.key) : V.toString(36);
        }
        function se(E) {
          switch (E.status) {
            case "fulfilled":
              return E.value;
            case "rejected":
              throw E.reason;
            default:
              switch (typeof E.status == "string" ? E.then(Ye, Ye) : (E.status = "pending", E.then(function(V) {
                E.status === "pending" && (E.status = "fulfilled", E.value = V);
              }, function(V) {
                E.status === "pending" && (E.status = "rejected", E.reason = V);
              })), E.status) {
                case "fulfilled":
                  return E.value;
                case "rejected":
                  throw E.reason;
              }
          }
          throw E;
        }
        function U(E, V, W, ne, me) {
          var Se = typeof E;
          (Se === "undefined" || Se === "boolean") && (E = null);
          var ze = false;
          if (E === null)
            ze = true;
          else
            switch (Se) {
              case "bigint":
              case "string":
              case "number":
                ze = true;
                break;
              case "object":
                switch (E.$$typeof) {
                  case s:
                  case u:
                    ze = true;
                    break;
                  case _:
                    return ze = E._init, U(ze(E._payload), V, W, ne, me);
                }
            }
          if (ze)
            return me = me(E), ze = ne === "" ? "." + Fe(E, 0) : ne, we(me) ? (W = "", ze != null && (W = ze.replace(xt, "$&/") + "/"), U(me, V, W, "", function(Za) {
              return Za;
            })) : me != null && (tt(me) && (me = St(me, W + (me.key == null || E && E.key === me.key ? "" : ("" + me.key).replace(xt, "$&/") + "/") + ze)), V.push(me)), 1;
          ze = 0;
          var _t = ne === "" ? "." : ne + ":";
          if (we(E))
            for (var We = 0; We < E.length; We++)
              ne = E[We], Se = _t + Fe(ne, We), ze += U(ne, V, W, Se, me);
          else if (We = w(E), typeof We == "function")
            for (E = We.call(E), We = 0; !(ne = E.next()).done; )
              ne = ne.value, Se = _t + Fe(ne, We++), ze += U(ne, V, W, Se, me);
          else if (Se === "object") {
            if (typeof E.then == "function")
              return U(se(E), V, W, ne, me);
            throw V = String(E), Error("Objects are not valid as a React child (found: " + (V === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : V) + "). If you meant to render a collection of children, use an array instead.");
          }
          return ze;
        }
        function k(E, V, W) {
          if (E == null)
            return E;
          var ne = [], me = 0;
          return U(E, ne, "", "", function(Se) {
            return V.call(W, Se, me++);
          }), ne;
        }
        function X(E) {
          if (E._status === -1) {
            var V = E._result;
            V = V(), V.then(function(W) {
              (E._status === 0 || E._status === -1) && (E._status = 1, E._result = W);
            }, function(W) {
              (E._status === 0 || E._status === -1) && (E._status = 2, E._result = W);
            }), E._status === -1 && (E._status = 0, E._result = V);
          }
          if (E._status === 1)
            return E._result.default;
          throw E._result;
        }
        var ee = typeof reportError == "function" ? reportError : function(E) {
          if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var V = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof E == "object" && E !== null && typeof E.message == "string" ? String(E.message) : String(E), error: E });
            if (!window.dispatchEvent(V))
              return;
          } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", E);
            return;
          }
          console.error(E);
        }, $ = { map: k, forEach: function(E, V, W) {
          k(E, function() {
            V.apply(this, arguments);
          }, W);
        }, count: function(E) {
          var V = 0;
          return k(E, function() {
            V++;
          }), V;
        }, toArray: function(E) {
          return k(E, function(V) {
            return V;
          }) || [];
        }, only: function(E) {
          if (!tt(E))
            throw Error("React.Children.only expected to receive a single React element child.");
          return E;
        } };
        return ye.Activity = A, ye.Children = $, ye.Component = he, ye.Fragment = r, ye.Profiler = g, ye.PureComponent = fe, ye.StrictMode = o, ye.Suspense = m, ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = de, ye.__COMPILER_RUNTIME = { __proto__: null, c: function(E) {
          return de.H.useMemoCache(E);
        } }, ye.cache = function(E) {
          return function() {
            return E.apply(null, arguments);
          };
        }, ye.cacheSignal = function() {
          return null;
        }, ye.cloneElement = function(E, V, W) {
          if (E == null)
            throw Error("The argument must be a React element, but you passed " + E + ".");
          var ne = K({}, E.props), me = E.key;
          if (V != null)
            for (Se in V.key !== void 0 && (me = "" + V.key), V)
              !it.call(V, Se) || Se === "key" || Se === "__self" || Se === "__source" || Se === "ref" && V.ref === void 0 || (ne[Se] = V[Se]);
          var Se = arguments.length - 2;
          if (Se === 1)
            ne.children = W;
          else if (1 < Se) {
            for (var ze = Array(Se), _t = 0; _t < Se; _t++)
              ze[_t] = arguments[_t + 2];
            ne.children = ze;
          }
          return ht(E.type, me, ne);
        }, ye.createContext = function(E) {
          return E = { $$typeof: d, _currentValue: E, _currentValue2: E, _threadCount: 0, Provider: null, Consumer: null }, E.Provider = E, E.Consumer = { $$typeof: b, _context: E }, E;
        }, ye.createElement = function(E, V, W) {
          var ne, me = {}, Se = null;
          if (V != null)
            for (ne in V.key !== void 0 && (Se = "" + V.key), V)
              it.call(V, ne) && ne !== "key" && ne !== "__self" && ne !== "__source" && (me[ne] = V[ne]);
          var ze = arguments.length - 2;
          if (ze === 1)
            me.children = W;
          else if (1 < ze) {
            for (var _t = Array(ze), We = 0; We < ze; We++)
              _t[We] = arguments[We + 2];
            me.children = _t;
          }
          if (E && E.defaultProps)
            for (ne in ze = E.defaultProps, ze)
              me[ne] === void 0 && (me[ne] = ze[ne]);
          return ht(E, Se, me);
        }, ye.createRef = function() {
          return { current: null };
        }, ye.forwardRef = function(E) {
          return { $$typeof: v, render: E };
        }, ye.isValidElement = tt, ye.lazy = function(E) {
          return { $$typeof: _, _payload: { _status: -1, _result: E }, _init: X };
        }, ye.memo = function(E, V) {
          return { $$typeof: h, type: E, compare: V === void 0 ? null : V };
        }, ye.startTransition = function(E) {
          var V = de.T, W = {};
          de.T = W;
          try {
            var ne = E(), me = de.S;
            me !== null && me(W, ne), typeof ne == "object" && ne !== null && typeof ne.then == "function" && ne.then(Ye, ee);
          } catch (Se) {
            ee(Se);
          } finally {
            V !== null && W.types !== null && (V.types = W.types), de.T = V;
          }
        }, ye.unstable_useCacheRefresh = function() {
          return de.H.useCacheRefresh();
        }, ye.use = function(E) {
          return de.H.use(E);
        }, ye.useActionState = function(E, V, W) {
          return de.H.useActionState(E, V, W);
        }, ye.useCallback = function(E, V) {
          return de.H.useCallback(E, V);
        }, ye.useContext = function(E) {
          return de.H.useContext(E);
        }, ye.useDebugValue = function() {
        }, ye.useDeferredValue = function(E, V) {
          return de.H.useDeferredValue(E, V);
        }, ye.useEffect = function(E, V) {
          return de.H.useEffect(E, V);
        }, ye.useEffectEvent = function(E) {
          return de.H.useEffectEvent(E);
        }, ye.useId = function() {
          return de.H.useId();
        }, ye.useImperativeHandle = function(E, V, W) {
          return de.H.useImperativeHandle(E, V, W);
        }, ye.useInsertionEffect = function(E, V) {
          return de.H.useInsertionEffect(E, V);
        }, ye.useLayoutEffect = function(E, V) {
          return de.H.useLayoutEffect(E, V);
        }, ye.useMemo = function(E, V) {
          return de.H.useMemo(E, V);
        }, ye.useOptimistic = function(E, V) {
          return de.H.useOptimistic(E, V);
        }, ye.useReducer = function(E, V, W) {
          return de.H.useReducer(E, V, W);
        }, ye.useRef = function(E) {
          return de.H.useRef(E);
        }, ye.useState = function(E) {
          return de.H.useState(E);
        }, ye.useSyncExternalStore = function(E, V, W) {
          return de.H.useSyncExternalStore(E, V, W);
        }, ye.useTransition = function() {
          return de.H.useTransition();
        }, ye.version = "19.2.0", ye;
      }
      var Qp;
      function lf() {
        return Qp || (Qp = 1, Uc.exports = B0()), Uc.exports;
      }
      var Pe = lf();
      var ju = Em(Pe);
      var uf = () => {
        var r;
        const [s, u] = Pe.useState((r = M0()) == null ? void 0 : r.client_name);
        return Pe.useEffect(() => {
          D0("client_name", s);
        }, [s]), z.jsx(z.Fragment, { children: z.jsx(U0, { value: s, onChange: u, label: "Client Name" }) });
      };
      uf.component = "pms-demo-component";
      uf.simulator = { doctype: "Appraisal Cycle", docname: "2025-26" };
      var q0 = (s) => s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
      var H0 = (s) => s.replace(/^([A-Z])|[\s-_]+(\w)/g, (u, r, o) => o ? o.toUpperCase() : r.toLowerCase());
      var Vp = (s) => {
        const u = H0(s);
        return u.charAt(0).toUpperCase() + u.slice(1);
      };
      var Am = (...s) => s.filter((u, r, o) => !!u && u.trim() !== "" && o.indexOf(u) === r).join(" ").trim();
      var L0 = (s) => {
        for (const u in s)
          if (u.startsWith("aria-") || u === "role" || u === "title")
            return true;
      };
      var Y0 = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
      var X0 = Pe.forwardRef((h, m) => {
        var _ = h, { color: s = "currentColor", size: u = 24, strokeWidth: r = 2, absoluteStrokeWidth: o, className: g = "", children: b, iconNode: d } = _, v = Nc(_, ["color", "size", "strokeWidth", "absoluteStrokeWidth", "className", "children", "iconNode"]);
        return Pe.createElement("svg", Qe(Qe(Yt(Qe({ ref: m }, Y0), { width: u, height: u, stroke: s, strokeWidth: o ? Number(r) * 24 / Number(u) : r, className: Am("lucide", g) }), !b && !L0(v) && { "aria-hidden": "true" }), v), [...d.map(([A, L]) => Pe.createElement(A, L)), ...Array.isArray(b) ? b : [b]]);
      });
      var sf = (s, u) => {
        const r = Pe.forwardRef((d, b) => {
          var v = d, { className: o } = v, g = Nc(v, ["className"]);
          return Pe.createElement(X0, Qe({ ref: b, iconNode: u, className: Am(`lucide-${q0(Vp(s))}`, `lucide-${s}`, o) }, g));
        });
        return r.displayName = Vp(s), r;
      };
      var G0 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
      var Q0 = sf("chevron-down", G0);
      var V0 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
      var Z0 = sf("chevron-up", V0);
      var K0 = [["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }], ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]];
      var xr = sf("lock", K0);
      var xi = ({ rating: s, onChange: u, disabled: r }) => z.jsx("div", { className: "ef-space-y-2", children: z.jsxs("div", { className: "ef-flex ef-items-center ef-gap-3", children: [z.jsx("input", { type: "number", min: 0, max: 10, step: 0.5, value: s != null ? s : "", onChange: (o) => {
        let g = parseFloat(o.target.value);
        if (isNaN(g)) {
          u(0);
          return;
        }
        g < 0 && (g = 0), g > 10 && (g = 10), u(g);
      }, disabled: r, className: "ef-w-20 ef-px-3 ef-py-2 ef-border ef-rounded-lg ef-text-center ef-font-semibold ef-text-lg", placeholder: "0-10" }), z.jsx("span", { className: "ef-text-gray-600", children: "/ 10" })] }) });
      var k0 = ({ kra: s, goal: u, appraisalMode: r, updateGoalRating: o, employeeCanEdit: g, managerCanEdit: b, showManagerData: d }) => {
        const v = () => z.jsxs("div", { className: "ef-absolute ef-top-2 ef-right-2 ef-flex ef-items-center ef-gap-1 ef-bg-gray-200 ef-text-gray-600 ef-text-xs ef-px-2 ef-py-1 ef-rounded-lg ef-shadow-sm", children: [z.jsx(xr, { size: 12 }), "Locked"] });
        return r === "self" ? z.jsxs("div", { className: "ef-relative ef-bg-white ef-p-4 ef-rounded-2xl ef-border ef-border-blue-200 ef-shadow-md ef-hover:shadow-lg ef-transition", children: [!g && z.jsx(v, {}), z.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-3", children: [z.jsx("div", { className: "ef-w-1 ef-h-6 ef-bg-blue-500 ef-rounded-full" }), z.jsx("h4", { className: "ef-font-bold ef-text-gray-800 ef-text-base", children: "Self Appraisal" })] }), z.jsxs("div", { className: "ef-mb-3", children: [z.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-ba ef-tracking-wide ef-mb-2", children: "Rating" }), z.jsx(xi, { rating: u.selfRating, onChange: (m) => g && o(s.id, u.id, "selfRating", m), disabled: !g })] }), z.jsxs("div", { children: [z.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-mb-2", children: "Comments" }), z.jsx("textarea", { value: u.selfComments, onChange: (m) => g && o(s.id, u.id, "selfComments", m.target.value), disabled: !g, className: `
                            ef-w-full ef-p-3 ef-rounded-xl ef-text-sm ef-resize-none
                            ${g ? "ef-bg-gray-50 ef-border ef-border-blue-300 ef-focus:ring-2 ef-focus:ring-blue-400" : "ef-bg-gray-100 ef-text-gray-500 ef-border ef-border-gray-300 ef-cursor-not-allowed"}
                        `, rows: 3, placeholder: "Share your thoughts..." })] })] }) : z.jsxs("div", { className: `ef-mt-4 ${d ? "ef-grid ef-grid-cols-2 ef-gap-4" : ""}`, children: [z.jsxs("div", { className: "ef-bg-white ef-p-4 ef-rounded-2xl ef-border ef-border-blue-200 ef-shadow-md", children: [z.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-3", children: [z.jsx("div", { className: "ef-w-1 ef-h-6 ef-bg-blue-500 ef-rounded-full" }), z.jsx("h4", { className: "ef-font-bold ef-text-gray-800 ef-text-sm", children: "Employee Self Rating" })] }), z.jsxs("div", { className: "ef-mb-3", children: [z.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-mb-2", children: "Rating" }), z.jsxs("div", { className: "ef-inline-flex ef-items-center ef-gap-2 ef-px-3 ef-py-1.5 ef-bg-blue-50 ef-rounded-lg ef-border ef-border-blue-200", children: [z.jsx("span", { className: "ef-text-2xl ef-font-black ef-text-blue-600", children: u.selfRating }), z.jsx("span", { className: "ef-text-sm ef-font-medium ef-text-gray-500", children: "/10" })] })] }), z.jsxs("div", { children: [z.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-mb-2", children: "Comments" }), z.jsx("div", { className: "ef-p-3 ef-bg-gray-50 ef-rounded-xl ef-text-sm ef-text-gray-700 ef-min-h-[60px]", children: u.selfComments || z.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] }), d && z.jsxs("div", { className: "ef-relative ef-bg-white ef-p-4 ef-rounded-2xl ef-border ef-border-purple-200 ef-shadow-md", children: [!b && z.jsx(v, {}), z.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-3", children: [z.jsx("div", { className: "ef-w-1 ef-h-6 ef-bg-purple-500 ef-rounded-full" }), z.jsx("h4", { className: "ef-font-bold ef-text-gray-800 ef-text-sm", children: "Manager Review" })] }), z.jsxs("div", { className: "ef-mb-3", children: [z.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-mb-2", children: "Rating" }), z.jsx(xi, { rating: u.managerRating, onChange: (m) => b && o(s.id, u.id, "managerRating", m), disabled: !b })] }), z.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-mb-2", children: "Comments" }), z.jsx("textarea", { value: u.managerComments, onChange: (m) => b && o(s.id, u.id, "managerComments", m.target.value), disabled: !b, className: `
                            ef-w-full ef-p-3 ef-rounded-xl ef-text-sm ef-resize-none
                            ${b ? "ef-bg-gray-50 ef-border ef-border-purple-300 ef-focus:ring-2 ef-focus:ring-purple-400" : "ef-bg-gray-100 ef-text-gray-500 ef-border ef-border-gray-300 ef-cursor-not-allowed"}
                        `, rows: 3, placeholder: "Add your review..." })] })] });
      };
      var J0 = ({ kra: s, appraisalMode: u, updateKRARating: r, employeeCanEdit: o, managerCanEdit: g, showManagerData: b }) => {
        const d = () => z.jsxs("div", { className: "ef-absolute ef-top-2 ef-right-2 ef-flex ef-items-center ef-gap-1 ef-bg-gray-200 ef-text-gray-600 ef-text-xs ef-px-2 ef-py-1 ef-rounded-lg ef-shadow-sm", children: [z.jsx(xr, { size: 12 }), "Locked"] });
        return u === "self" ? z.jsxs("div", { className: "ef-relative ef-bg-white ef-p-4 ef-rounded-2xl ef-border ef-border-blue-200 ef-shadow-md ef-hover:shadow-lg ef-transition", children: [!o && z.jsx(d, {}), z.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-3", children: [z.jsx("div", { className: "ef-w-1 ef-h-6 ef-bg-blue-500 ef-rounded-full" }), z.jsxs("h4", { className: "ef-font-bold ef-text-blue-900", children: ["Self Appraisal \u2013 ", s.title] })] }), z.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-mb-1", children: "Rating" }), z.jsx(xi, { rating: s.selfRating, onChange: (v) => o && r(s.id, "selfRating", v), disabled: !o }), z.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-mt-4 ef-mb-1", children: "Comments" }), z.jsx("textarea", { value: s.selfComments, onChange: (v) => o && r(s.id, "selfComments", v.target.value), disabled: !o, className: `
                        ef-w-full ef-p-3 ef-rounded-xl ef-text-sm ef-resize-none 
                        ${o ? "ef-bg-white ef-border ef-border-blue-300 ef-focus:ring-2 ef-focus:ring-blue-400" : "ef-bg-gray-100 ef-text-gray-500 ef-border ef-border-gray-300 ef-cursor-not-allowed"}
                    `, rows: 3, placeholder: "Add your comments..." })] }) : z.jsxs("div", { className: `ef-mt-4 ${b ? "ef-grid ef-grid-cols-2 ef-gap-4" : ""}`, children: [z.jsxs("div", { className: "ef-bg-blue-50 ef-p-4 ef-rounded-2xl ef-border ef-border-blue-200 ef-shadow-md", children: [z.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-3", children: [z.jsx("div", { className: "ef-w-1 ef-h-6 ef-bg-blue-500 ef-rounded-full" }), z.jsxs("h4", { className: "ef-font-bold ef-text-blue-900 ef-text-sm", children: ["Employee Self Rating \u2013 ", s.title] })] }), z.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-600 ef-mb-2", children: "Rating" }), z.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-blue-100 ef-border ef-border-blue-200 ef-px-3 ef-py-2 ef-rounded-lg", children: [z.jsx("span", { className: "ef-text-2xl ef-font-bold ef-text-blue-700", children: s.selfRating }), z.jsx("span", { className: "ef-text-gray-600", children: "/10" })] }), z.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-600 ef-mt-3 ef-mb-1", children: "Comments" }), z.jsx("div", { className: "ef-bg-white ef-border ef-border-blue-100 ef-p-3 ef-rounded-xl ef-text-sm ef-min-h-[70px]", children: s.selfComments || z.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] }), b && z.jsxs("div", { className: "ef-relative ef-bg-purple-50 ef-p-4 ef-rounded-2xl ef-border ef-border-purple-200 ef-shadow-md", children: [!g && z.jsx(d, {}), z.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-3", children: [z.jsx("div", { className: "ef-w-1 ef-h-6 ef-bg-purple-500 ef-rounded-full" }), z.jsxs("h4", { className: "ef-font-bold ef-text-purple-900 ef-text-sm", children: ["Manager Review \u2013 ", s.title] })] }), z.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-600 ef-mb-2", children: "Rating" }), z.jsx(xi, { rating: s.managerRating, onChange: (v) => g && r(s.id, "managerRating", v), disabled: !g }), z.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-600 ef-mt-3 ef-mb-1", children: "Comments" }), z.jsx("textarea", { value: s.managerComments, onChange: (v) => g && r(s.id, "managerComments", v.target.value), disabled: !g, className: `
                            ef-w-full ef-p-3 ef-rounded-xl ef-text-sm ef-resize-none
                            ${g ? "ef-bg-white ef-border ef-border-purple-300 ef-focus:ring-2 ef-focus:ring-purple-400" : "ef-bg-gray-100 ef-text-gray-500 ef-border ef-border-gray-300 ef-cursor-not-allowed"}
                        `, rows: 3, placeholder: "Add your review..." })] })] });
      };
      var F0 = ({ kra: s, expanded: u, onToggle: r, appraisalMode: o, updateGoalRating: g, updateKRARating: b, employeeCanEdit: d, managerCanEdit: v, showManagerData: m }) => z.jsxs("div", { className: "ef-border ef-rounded-lg", children: [z.jsxs("div", { onClick: r, className: "ef-flex ef-justify-between ef-items-center ef-p-4 ef-bg-gray-50 ef-cursor-pointer ef-hover:bg-gray-100", children: [z.jsxs("div", { className: "ef-flex-1", children: [z.jsxs("div", { className: "ef-flex ef-items-center ef-gap-3", children: [z.jsx("h3", { className: "ef-text-lg ef-font-semibold ef-text-gray-900", children: s.title }), z.jsxs("span", { className: "ef-px-3 ef-py-1 ef-bg-blue-100 ef-text-blue-700 ef-text-sm ef-rounded-full", children: [s.weightage, "% weightage"] })] }), z.jsx("p", { className: "ef-text-gray-600 ef-text-sm ef-mt-1", children: s.description })] }), u ? z.jsx(Z0, {}) : z.jsx(Q0, {})] }), u && z.jsx("div", { className: "ef-p-4", children: s.goals.length > 0 ? s.goals.map((h) => z.jsxs("div", { className: "ef-mb-6 ef-last:mb-0 ef-pb-6 ef-last:pb-0 ef-border-b ef-last:border-b-0", children: [z.jsxs("div", { className: "ef-mb-3", children: [z.jsxs("p", { className: "ef-font-medium ef-text-gray-900", children: [h.description, z.jsxs("span", { className: "ef-inline-flex ef-items-center ef-px-3 ef-py-1 ef-bg-gradient-to-r ef-from-purple-500 ef-to-pink-500 ef-text-white ef-text-xs ef-font-semibold ef-rounded-full ef-shadow-sm ef-mx-3", children: [h.weightage, "% weightage"] })] }), z.jsx("div", { className: "ef-w-full ef-bg-gray-200 ef-rounded-full ef-h-3 ef-overflow-hidden ef-mt-2", children: z.jsx("div", { className: "ef-h-full ef-bg-gradient-to-r ef-from-green-400 ef-to-green-600 ef-transition-all ef-duration-500", style: { width: `${Math.min(h.progress, 100)}%` } }) }), z.jsxs("p", { className: "ef-text-sm ef-text-gray-600 ef-mt-1", children: ["Progress: ", Math.min(h.progress, 100), "%"] })] }), z.jsx(k0, { kra: s, goal: h, appraisalMode: o, updateGoalRating: g, employeeCanEdit: d, managerCanEdit: v, showManagerData: m })] }, h.id)) : z.jsx(J0, { kra: s, appraisalMode: o, updateKRARating: b, employeeCanEdit: d, managerCanEdit: v, showManagerData: m }) })] });
      var W0 = ({ kraList: s, expandedKRA: u, toggleKRA: r, appraisalMode: o, updateGoalRating: g, updateKRARating: b, employeeCanEdit: d, managerCanEdit: v, showManagerData: m }) => z.jsx("div", { className: "ef-space-y-4", children: s.map((h) => z.jsx(F0, { kra: h, expanded: u[h.id], onToggle: () => r(h.id), appraisalMode: o, updateGoalRating: g, updateKRARating: b, employeeCanEdit: d, managerCanEdit: v, showManagerData: m }, h.id)) });
      var $0 = ({ comp: s, appraisalMode: u, updateCompetency: r, employeeCanEdit: o, managerCanEdit: g, showManagerData: b }) => {
        const d = () => z.jsxs("div", { className: "ef-absolute ef-top-2 ef-right-2 ef-flex ef-items-center ef-gap-1 ef-bg-gray-200 ef-text-gray-600 ef-text-xs ef-px-2 ef-py-1 ef-rounded-lg ef-shadow-sm", children: [z.jsx(xr, { size: 12 }), "Locked"] });
        return z.jsxs("div", { className: "ef-relative ef-bg-white ef-rounded-2xl ef-border ef-border-gray-200 ef-p-5 ef-shadow-md ef-hover:shadow-lg ef-transition", children: [z.jsxs("div", { className: "ef-flex ef-items-center ef-gap-3", children: [z.jsx("h3", { className: "ef-text-base ef-font-bold ef-text-gray-900", children: s.name }), z.jsxs("span", { className: "ef-px-3 ef-py-1 ef-bg-purple-600 ef-text-white ef-text-xs ef-rounded-full", children: [s.weightage, "% Weightage"] })] }), u === "self" && z.jsxs("div", { className: "ef-relative ef-bg-blue-50 ef-p-4 ef-rounded-xl ef-border ef-border-blue-200 ef-mt-4", children: [!o && z.jsx(d, {}), z.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-2", children: [z.jsx("div", { className: "ef-w-1 ef-h-5 ef-bg-blue-500 ef-rounded-full" }), z.jsx("h4", { className: "ef-font-semibold ef-text-gray-800 ef-text-sm", children: "Self Appraisal" })] }), z.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-mb-1", children: "Rating" }), z.jsx(xi, { rating: s.selfRating, onChange: (v) => o && r(s.id, "selfRating", v), disabled: !o }), z.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-mt-4 ef-mb-1", children: "Comments" }), z.jsx("textarea", { value: s.selfComments, onChange: (v) => o && r(s.id, "selfComments", v.target.value), disabled: !o, className: `
                            ef-w-full ef-p-3 ef-rounded-xl ef-text-sm ef-resize-none
                            ${o ? "ef-bg-white ef-border ef-border-blue-300 ef-focus:ring-2 ef-focus:ring-blue-400" : "ef-bg-gray-100 ef-text-gray-500 ef-border ef-border-gray-300 ef-cursor-not-allowed"}
                        `, rows: 3, placeholder: "Share your thoughts..." })] }), u === "manager" && z.jsxs("div", { className: `ef-mt-4 ${b ? "ef-grid ef-grid-cols-2 ef-gap-4" : ""}`, children: [z.jsxs("div", { className: "ef-bg-blue-50 ef-p-4 ef-rounded-xl ef-border ef-border-blue-200", children: [z.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-2", children: [z.jsx("div", { className: "ef-w-1 ef-h-5 ef-bg-blue-500 ef-rounded-full" }), z.jsx("h4", { className: "ef-font-semibold ef-text-gray-800 ef-text-sm", children: "Employee Self Rating" })] }), z.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-mb-1", children: "Rating" }), z.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-blue-100 ef-border ef-border-blue-200 ef-px-3 ef-py-2 ef-rounded-lg", children: [z.jsx("span", { className: "ef-text-2xl ef-font-bold ef-text-blue-700", children: s.selfRating }), z.jsx("span", { className: "ef-text-gray-600", children: "/10" })] }), z.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-mt-3 ef-mb-1", children: "Comments" }), z.jsx("div", { className: "ef-bg-white ef-border ef-border-blue-100 ef-p-3 ef-rounded-xl ef-text-sm ef-min-h-[70px]", children: s.selfComments || z.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] }), b && z.jsxs("div", { className: "ef-relative ef-bg-purple-50 ef-p-4 ef-rounded-xl ef-border ef-border-purple-200", children: [!g && z.jsx(d, {}), z.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-2", children: [z.jsx("div", { className: "ef-w-1 ef-h-5 ef-bg-purple-500 ef-rounded-full" }), z.jsx("h4", { className: "ef-font-semibold ef-text-gray-800 ef-text-sm", children: "Manager Review" })] }), z.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-mb-1", children: "Rating" }), z.jsx(xi, { rating: s.managerRating, onChange: (v) => g && r(s.id, "managerRating", v), disabled: !g }), z.jsx("label", { className: "ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-mt-3 ef-mb-1", children: "Comments" }), z.jsx("textarea", { value: s.managerComments, onChange: (v) => g && r(s.id, "managerComments", v.target.value), disabled: !g, className: `
                                    ef-w-full ef-p-3 ef-rounded-xl ef-text-sm ef-resize-none
                                    ${g ? "ef-bg-white ef-border ef-border-purple-300 ef-focus:ring-2 ef-focus:ring-purple-400" : "ef-bg-gray-100 ef-text-gray-500 ef-border ef-border-gray-300 ef-cursor-not-allowed"}
                                `, rows: 3, placeholder: "Add your review..." })] })] })] });
      };
      var P0 = ({ competencies: s, appraisalMode: u, selfAppraisalSubmitted: r, updateCompetency: o, employeeCanEdit: g, managerCanEdit: b, showManagerData: d }) => z.jsx("div", { className: "ef-space-y-6", children: s.map((v) => z.jsx($0, { comp: v, appraisalMode: u, selfAppraisalSubmitted: r, updateCompetency: o, employeeCanEdit: g, managerCanEdit: b, showManagerData: d }, v.id)) });
      var I0 = ({ question: s, appraisalMode: u, updateQuestion: r, index: o, employeeCanEdit: g, managerCanEdit: b, showManagerData: d }) => {
        const v = () => z.jsxs("div", { className: "ef-absolute ef-top-2 ef-right-2 ef-flex ef-items-center ef-gap-1 ef-bg-gray-200 ef-text-gray-600 ef-text-xs ef-py-1 ef-px-2 ef-rounded-lg ef-shadow-sm", children: [z.jsx(xr, { size: 12 }), "Locked"] });
        return z.jsxs("div", { className: "ef-relative ef-bg-white ef-rounded-2xl ef-border ef-border-gray-200 ef-p-5 ef-shadow-md ef-space-y-4 ef-transition-all ef-duration-300 hover:ef-shadow-lg", children: [z.jsxs("div", { className: "ef-flex ef-items-start ef-gap-3", children: [z.jsx("div", { className: "ef-flex-shrink-0 ef-w-8 ef-h-8 ef-bg-gray-800 ef-rounded-lg ef-flex ef-items-center ef-justify-center ef-text-white ef-font-bold", children: o + 1 }), z.jsx("h3", { className: "ef-text-base ef-font-semibold ef-text-gray-900", children: s.question })] }), u === "self" && z.jsxs("div", { className: "ef-relative ef-bg-blue-50 ef-p-4 ef-rounded-xl ef-border ef-border-blue-200", children: [!g && z.jsx(v, {}), z.jsx("h4", { className: "ef-font-semibold ef-text-gray-700 ef-text-sm ef-mb-2", children: "Your Answer" }), z.jsx("textarea", { value: s.selfAnswer, onChange: (m) => g && r(s.id, "selfAnswer", m.target.value), disabled: !g, className: `
                            ef-w-full ef-p-3 ef-rounded-xl ef-resize-none ef-text-sm ef-transition
                            ${g ? "ef-bg-white ef-border ef-border-blue-300 ef-focus:ring-2 ef-focus:ring-blue-400" : "ef-bg-gray-100 ef-text-gray-500 ef-border ef-border-gray-300 ef-cursor-not-allowed"}
                        `, rows: 4, placeholder: "Enter your answer..." })] }), u === "manager" && z.jsxs("div", { className: "ef-space-y-4", children: [z.jsxs("div", { className: "ef-bg-blue-50 ef-p-4 ef-rounded-xl ef-border ef-border-blue-200", children: [z.jsx("h4", { className: "ef-font-semibold ef-text-gray-700 ef-text-sm ef-mb-2", children: "Employee's Answer" }), z.jsx("div", { className: "ef-bg-white ef-p-3 ef-rounded-xl ef-text-sm ef-min-h-[70px] ef-border ef-border-blue-100", children: s.selfAnswer || z.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No answer provided" }) })] }), d && z.jsxs("div", { className: "ef-relative ef-bg-purple-50 ef-p-4 ef-rounded-xl ef-border ef-border-purple-200", children: [!b && z.jsx(v, {}), z.jsx("h4", { className: "ef-font-semibold ef-text-gray-700 ef-text-sm ef-mb-2", children: "Manager's Comments" }), z.jsx("textarea", { value: s.managerComments, onChange: (m) => b && r(s.id, "managerComments", m.target.value), disabled: !b, className: `
                                    ef-w-full ef-p-3 ef-rounded-xl ef-resize-none ef-text-sm ef-transition
                                    ${b ? "ef-bg-white ef-border ef-border-purple-300 ef-focus:ring-2 ef-focus:ring-purple-400" : "ef-bg-gray-100 ef-text-gray-500 ef-border ef-border-gray-300 ef-cursor-not-allowed"}
                                `, rows: 4, placeholder: "Enter your feedback..." })] })] })] });
      };
      var ey = ({ questions: s, appraisalMode: u, selfAppraisalSubmitted: r, updateQuestion: o, employeeCanEdit: g, managerCanEdit: b, showManagerData: d }) => z.jsx("div", { className: "ef-space-y-6", children: s.map((v, m) => z.jsx(I0, { question: v, index: m, appraisalMode: u, selfAppraisalSubmitted: r, updateQuestion: o, employeeCanEdit: g, managerCanEdit: b, showManagerData: d }, v.id)) });
      function ty(s, u, r) {
        const o = s.kra.reduce((A, L) => A + Number(L.weightage || 0), 0) || 1, g = s.competencies.reduce((A, L) => A + Number(L.weightage || 0), 0) || 1, b = s.kra.map((A) => {
          const L = (A.weightage || 0) / o;
          let w = 0;
          if (A.goals && A.goals.length > 0) {
            const B = A.goals.reduce((K, ie) => K + Number(ie.weightage || 0), 0) || 1;
            w = A.goals.reduce((K, ie) => {
              const he = Number(ie.selfRating || 0), Ee = (ie.weightage || 0) / B;
              return K + Ee * he;
            }, 0);
          } else
            w = Number(A.selfRating || 0);
          return L * w;
        }).reduce((A, L) => A + L, 0), d = s.competencies.reduce((A, L) => {
          const w = (L.weightage || 0) / g;
          return A + w * Number(L.selfRating || 0);
        }, 0), v = b * (u / 100) + d * (r / 100), m = s.kra.map((A) => {
          const L = (A.weightage || 0) / o;
          let w = 0;
          if (A.goals && A.goals.length > 0) {
            const B = A.goals.reduce((K, ie) => K + Number(ie.weightage || 0), 0) || 1;
            w = A.goals.reduce((K, ie) => {
              const he = Number(ie.selfRating || 0), Ee = Number(ie.managerRating || 0), fe = (he + Ee) / 2, xe = (ie.weightage || 0) / B;
              return K + xe * fe;
            }, 0);
          } else {
            const B = Number(A.selfRating || 0), K = Number(A.managerRating || 0);
            w = (B + K) / 2;
          }
          return L * w;
        }).reduce((A, L) => A + L, 0), h = s.competencies.reduce((A, L) => {
          const w = (L.weightage || 0) / g, B = Number(L.selfRating || 0), K = Number(L.managerRating || 0), ie = (B + K) / 2;
          return A + w * ie;
        }, 0), _ = m * (u / 100) + h * (r / 100);
        return { kraBlockScore: Number(m.toFixed(2)), competencyScore: Number(h.toFixed(2)), finalScore: Number(_.toFixed(2)), employeeSelfScore: Number(v.toFixed(2)) };
      }
      var Om = () => {
        const [s, u] = Pe.useState("kra"), [r, o] = Pe.useState("self"), [g, b] = Pe.useState({}), [d, v] = Pe.useState({ employee: { name: "John Doe", designation: "Senior Developer", department: "Engineering", period: "Jan 2025 - Dec 2025" }, selfAppraisalSubmitted: true, kra: [{ id: 1, title: "Project Delivery", description: "Deliver assigned projects on time", weightage: 30, goals: [{ id: 1, description: "Complete 3 major projects", progress: 2, selfRating: 8, selfComments: "Completed 3 projects successfully", managerRating: 9, managerComments: "Excellent delivery" }, { id: 2, description: "Maintain 95% on-time delivery", progress: 2, selfRating: 7, selfComments: "Achieved 90%", managerRating: 7, managerComments: "Slight delay" }] }], competencies: [{ id: 1, name: "Technical Skills", description: "Proficiency in technologies", weightage: 25, selfRating: 8, selfComments: "Strong in React/Node", managerRating: 8, managerComments: "Very competent" }], questions: [{ id: 1, question: "What are your key achievements?", selfAnswer: "Led migration project", managerComments: "Excellent ownership" }] });
        function m(se) {
          var X, ee;
          se.workflow_state == "Self Appraisal" ? o("self") : o("manager");
          const U = se.kra || [], k = se.kra_vs_goal || [];
          return { employee: { name: se.employee_name, designation: se.designation, department: se.department, period: `${se.from_date} - ${se.to_date}` }, selfAppraisalSubmitted: se.self_appraisal_submitted || true, kra: U.map(($, E) => {
            const V = k.filter((W) => W.kra === $.kra).map((W, ne) => ({ id: ne + 1, description: W.goal_name, progress: W.progress || "", weightage: W.weightage, selfRating: W.employee_rating_number, selfComments: W.employee_description, managerRating: W.manager_rating_number, managerComments: W.management_description }));
            return { id: E + 1, title: $.kra, description: $.description || "", weightage: $.weightage, selfRating: $.employee_rating_number, selfComments: $.employee_description, managerRating: $.manager_rating_number, managerComments: $.management_description, goals: V };
          }) || [], competencies: ((X = se.competency) == null ? void 0 : X.map(($, E) => ({ id: E + 1, name: $.competency, description: $.description || "", weightage: $.weightage, selfRating: $.employee_rating_number, selfComments: $.employee_description, managerRating: $.manager_rating, managerComments: $.manager_description }))) || [], questions: ((ee = se.answer) == null ? void 0 : ee.map(($, E) => ({ id: E + 1, question: $.question, selfAnswer: $.employee_ans_in_discriptive, managerComments: $.manager_comment }))) || [] };
        }
        const h = () => {
          if (!xt())
            return;
          const se = window.cur_frm;
          if (!se)
            return;
          const U = se.doc, k = ty(d, se.doc.kra_percentage, se.doc.competency_percentage, se.doc.workflow_state == "Manager Appraisal", se.doc.employee_score);
          console.log(k), U.final_score = k.finalScore, U.employee_score = k.employeeSelfScore, U.kra.forEach((X, ee) => {
            const $ = d.kra.find((E) => E.id === ee + 1);
            $ && (X.employee_rating_number = $.selfRating, X.employee_description = $.selfComments, X.manager_rating_number = $.managerRating, X.management_description = $.managerComments, X.weightage = $.weightage);
          }), U.kra_vs_goal.forEach((X) => {
            const ee = d.kra.find((E) => E.title === X.kra);
            if (!ee)
              return;
            const $ = ee.goals.find((E) => E.description === X.goal_name);
            $ && (X.employee_rating_number = $.selfRating, X.employee_description = $.selfComments, X.manager_rating_number = $.managerRating, X.management_description = $.managerComments, X.progress = $.progress, X.weightage = $.weightage);
          }), U.competency.forEach((X, ee) => {
            const $ = d.competencies.find((E) => E.id === ee + 1);
            $ && (X.employee_rating_number = $.selfRating, X.employee_description = $.selfComments, X.manager_rating = $.managerRating, X.manager_description = $.managerComments, X.weightage = $.weightage);
          }), U.answer.forEach((X, ee) => {
            const $ = d.questions.find((E) => E.id === ee + 1);
            $ && (X.employee_ans_in_discriptive = $.selfAnswer, X.manager_comment = $.managerComments);
          }), se.doc.__unsaved = 1, se.dirty(), se.save().catch((X) => console.error(X));
        }, _ = (se) => {
          b((U) => Yt(Qe({}, U), { [se]: !U[se] }));
        }, A = (se, U, k, X) => {
          v((ee) => Yt(Qe({}, ee), { kra: ee.kra.map(($) => $.id === se ? Yt(Qe({}, $), { goals: $.goals.map((E) => E.id === U ? Yt(Qe({}, E), { [k]: X }) : E) }) : $) }));
        }, L = (se, U, k) => {
          v((X) => Yt(Qe({}, X), { kra: X.kra.map((ee) => ee.id === se ? Yt(Qe({}, ee), { [U]: k }) : ee) }));
        }, w = (se, U, k) => {
          v((X) => Yt(Qe({}, X), { competencies: X.competencies.map((ee) => ee.id === se ? Yt(Qe({}, ee), { [U]: k }) : ee) }));
        }, B = (se, U, k) => {
          v((X) => Yt(Qe({}, X), { questions: X.questions.map((ee) => ee.id === se ? Yt(Qe({}, ee), { [U]: k }) : ee) }));
        }, K = window.cur_frm;
        if (!(K != null && K.doc))
          return "Loading...";
        Pe.useEffect(() => {
          v(m(K.doc));
        }, [K == null ? void 0 : K.doc]);
        const ie = frappe.session.user, he = K.doc.employee_user_id, Ee = K.doc.reports_to_user_id, fe = K.doc.workflow_state, xe = ie === he, we = ie === Ee, ht = (frappe.user_roles || []).includes("HR Manager") || ie === "Administrator", St = xe && fe === "Self Appraisal" && !ht, tt = we && fe === "Manager Appraisal" && !ht, Je = we || ht, xt = () => {
          var k;
          const se = (k = window == null ? void 0 : window.cur_frm) == null ? void 0 : k.doc, U = [];
          return St && (se.kra_rating_mandatory && d.kra.forEach((X) => {
            !X.goals.length && !X.selfRating && U.push(`Self Rating missing in KRA: ${X.title}`), X.goals.forEach((ee) => {
              ee.selfRating || U.push(`Self Rating missing in Goal: ${ee.description}`);
            });
          }), se.kra_comment_mandatory && d.kra.forEach((X) => {
            !X.goals.length && !X.selfComments && U.push(`Self Comment missing in KRA: ${X.title}`), X.goals.forEach((ee) => {
              ee.selfComments || U.push(`Self Comment missing in Goal: ${ee.description}`);
            });
          }), se.competency_rating_mandatory && d.competencies.forEach((X) => {
            X.selfRating || U.push(`Self Rating missing in Competency: ${X.name}`);
          }), se.competency_comment_mandatory && d.competencies.forEach((X) => {
            X.selfComments || U.push(`Self Comment missing in Competency: ${X.name}`);
          }), se.question_answer_mandatory && d.questions.forEach((X) => {
            X.selfAnswer || U.push(`Answer missing for Question: ${X.question}`);
          })), tt && (se.manager_kra_rating_mandatory && d.kra.forEach((X) => {
            !X.goals.length && !X.managerRating && U.push(`Manager Rating missing in KRA: ${X.title}`), X.goals.forEach((ee) => {
              ee.managerRating || U.push(`Manager Rating missing in Goal: ${ee.description}`);
            });
          }), se.manager_kra_comment_mandatory && d.kra.forEach((X) => {
            !X.goals.length && !X.managerComments && U.push(`Manager Comment missing in KRA: ${X.title}`), X.goals.forEach((ee) => {
              ee.managerComments || U.push(`Manager Comment missing in Goal: ${ee.description}`);
            });
          }), se.manager_competency_rating_mandatory && d.competencies.forEach((X) => {
            X.managerRating || U.push(`Manager Rating missing in Competency: ${X.name}`);
          }), se.manager_competency_comment_mandatory && d.competencies.forEach((X) => {
            X.managerComments || U.push(`Manager Comment missing in Competency: ${X.name}`);
          }), se.manager_question_report_mandatory && d.questions.forEach((X) => {
            X.managerComments || U.push(`Manager Comment missing for Question: ${X.question}`);
          })), U.length > 0 ? (frappe.msgprint({ title: "Mandatory Fields Missing", indicator: "red", message: `<ul>${U.map((X) => `<li>${X}</li>`).join("")}</ul>` }), false) : true;
        }, Fe = St || tt;
        return z.jsx("div", { className: "ef-min-h-screen ef-bg-gray-50 ef-p-6", children: z.jsx("div", { className: "ef-max-w-7xl ef-mx-auto", children: z.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-shadow-sm", children: [z.jsx("div", { className: "ef-border-b", children: z.jsxs("div", { className: "ef-flex", children: [z.jsx("button", { onClick: () => u("kra"), className: `ef-px-6 ef-py-4 ef-font-semibold ${s === "kra" ? "ef-border-b-2 ef-border-blue-600 ef-text-blue-600" : "ef-text-gray-600"}`, children: "KRA vs Goals" }), z.jsx("button", { onClick: () => u("competency"), className: `ef-px-6 ef-py-4 ef-font-semibold ${s === "competency" ? "ef-border-b-2 ef-border-blue-600 ef-text-blue-600" : "ef-text-gray-600"}`, children: "Competencies" }), z.jsx("button", { onClick: () => u("questions"), className: `ef-px-6 ef-py-4 ef-font-semibold ${s === "questions" ? "ef-border-b-2 ef-border-blue-600 ef-text-blue-600" : "ef-text-gray-600"}`, children: "Questions" })] }) }), z.jsxs("div", { className: "ef-p-6", children: [s === "kra" && z.jsx(W0, { kraList: d.kra, expandedKRA: g, toggleKRA: _, appraisalMode: r, updateGoalRating: A, updateKRARating: L, employeeCanEdit: St, managerCanEdit: tt, showManagerData: Je }), s === "competency" && z.jsx(P0, { competencies: d.competencies, appraisalMode: r, selfAppraisalSubmitted: d.selfAppraisalSubmitted, updateCompetency: w, employeeCanEdit: St, managerCanEdit: tt, showManagerData: Je }), s === "questions" && z.jsx(ey, { questions: d.questions, appraisalMode: r, selfAppraisalSubmitted: d.selfAppraisalSubmitted, updateQuestion: B, employeeCanEdit: St, managerCanEdit: tt, showManagerData: Je })] }), Fe && z.jsx("div", { className: "ef-flex ef-justify-end ef-px-6 ef-pb-6", children: z.jsx("button", { onClick: h, className: "ef-bg-blue-600 ef-text-white ef-px-6 ef-py-2 ef-rounded-lg ef-font-semibold hover:ef-bg-blue-700 ef-transition", children: "Save Appraisal" }) })] }) }) });
      };
      Om.component = "appraisal-rating";
      var Zp = Object.freeze(Object.defineProperty({ __proto__: null, AppraisalRating: Om, DemoComponent: uf }, Symbol.toStringTag, { value: "Module" }));
      var ny = Object.defineProperty;
      var ay = (s, u, r) => u in s ? ny(s, u, { enumerable: true, configurable: true, writable: true, value: r }) : s[u] = r;
      var or = (s, u, r) => ay(s, typeof u != "symbol" ? u + "" : u, r);
      var ly = { stringify: (s) => s ? "true" : "false", parse: (s) => /^[ty1-9]/i.test(s) };
      var iy = { stringify: (s) => s.name, parse: (s, u, r) => {
        const o = (() => {
          if (typeof window < "u" && s in window)
            return window[s];
          if (typeof global < "u" && s in global)
            return global[s];
        })();
        return typeof o == "function" ? o.bind(r) : void 0;
      } };
      var uy = { stringify: (s) => JSON.stringify(s), parse: (s) => JSON.parse(s) };
      function sy(s) {
        return s.replace(/([a-z0-9])([A-Z])/g, (u, r, o) => `${r}-${o.toLowerCase()}`);
      }
      function wm(s) {
        return s.replace(/[-:]([a-z])/g, (u, r) => `${r.toUpperCase()}`);
      }
      var ry = { stringify: (s) => s.name, parse: (s, u, r) => {
        const o = (() => {
          const g = wm(u);
          if (typeof r < "u" && g in r.container)
            return r.container[g];
        })();
        return typeof o == "function" ? o.bind(r) : void 0;
      } };
      var oy = { stringify: (s) => `${s}`, parse: (s) => parseFloat(s) };
      var cy = { stringify: (s) => s, parse: (s) => s };
      var Dc = { string: cy, number: oy, boolean: ly, function: iy, method: ry, json: uy };
      var Ou = Symbol.for("r2wc.render");
      var cr = Symbol.for("r2wc.connected");
      var xl = Symbol.for("r2wc.context");
      var $t = Symbol.for("r2wc.props");
      function fy(s, u, r) {
        var o, g, b;
        u.props || (u.props = s.propTypes ? Object.keys(s.propTypes) : []), u.events || (u.events = []);
        const d = Array.isArray(u.props) ? u.props.slice() : Object.keys(u.props), v = Array.isArray(u.events) ? u.events.slice() : Object.keys(u.events), m = {}, h = {}, _ = {}, A = {};
        for (const w of d) {
          m[w] = Array.isArray(u.props) ? "string" : u.props[w];
          const B = sy(w);
          _[w] = B, A[B] = w;
        }
        for (const w of v)
          h[w] = Array.isArray(u.events) ? {} : u.events[w];
        class L extends HTMLElement {
          constructor() {
            super(), or(this, b, true), or(this, g), or(this, o, {}), or(this, "container"), u.shadow ? this.container = this.attachShadow({ mode: u.shadow }) : this.container = this, this[$t].container = this.container;
            for (const B of d) {
              const K = _[B], ie = this.getAttribute(K), he = m[B], Ee = he ? Dc[he] : null;
              if (he === "method") {
                const fe = wm(K);
                Object.defineProperty(this[$t].container, fe, { enumerable: true, configurable: true, get() {
                  return this[$t][fe];
                }, set(xe) {
                  this[$t][fe] = xe, this[Ou]();
                } }), this[$t][B] = Ee.parse(ie, K, this);
              }
              Ee != null && Ee.parse && ie && (this[$t][B] = Ee.parse(ie, K, this));
            }
            for (const B of v)
              this[$t][B] = (K) => {
                const ie = B.replace(/^on/, "").toLowerCase();
                this.dispatchEvent(new CustomEvent(ie, Qe({ detail: K }, h[B])));
              };
          }
          static get observedAttributes() {
            return Object.keys(A);
          }
          connectedCallback() {
            this[cr] = true, this[Ou]();
          }
          disconnectedCallback() {
            this[cr] = false, this[xl] && r.unmount(this[xl]), delete this[xl];
          }
          attributeChangedCallback(B, K, ie) {
            const he = A[B], Ee = m[he], fe = Ee ? Dc[Ee] : null;
            he in m && fe != null && fe.parse && ie && (this[$t][he] = fe.parse(ie, B, this), this[Ou]());
          }
          [(b = cr, g = xl, o = $t, Ou)]() {
            this[cr] && (this[xl] ? r.update(this[xl], this[$t]) : this[xl] = r.mount(this.container, s, this[$t]));
          }
        }
        for (const w of d) {
          const B = _[w], K = m[w];
          Object.defineProperty(L.prototype, w, { enumerable: true, configurable: true, get() {
            return this[$t][w];
          }, set(ie) {
            this[$t][w] = ie;
            const he = K ? Dc[K] : null;
            if (he != null && he.stringify) {
              const Ee = he.stringify(ie, B, this);
              this.getAttribute(B) !== Ee && this.setAttribute(B, Ee);
            } else
              this[Ou]();
          } });
        }
        return L;
      }
      function hy(s, u, r, o = {}) {
        function g(v, m, h) {
          const _ = u.createElement(m, h);
          if ("createRoot" in r) {
            const A = r.createRoot(v);
            return A.render(_), { container: v, root: A, ReactComponent: m };
          }
          if ("render" in r)
            return r.render(_, v), { container: v, ReactComponent: m };
          throw new Error("Invalid ReactDOM instance provided.");
        }
        function b({ container: v, root: m, ReactComponent: h }, _) {
          const A = u.createElement(h, _);
          if (m) {
            m.render(A);
            return;
          }
          if ("render" in r) {
            r.render(A, v);
            return;
          }
        }
        function d({ container: v, root: m }) {
          if (m) {
            m.unmount();
            return;
          }
          if ("unmountComponentAtNode" in r) {
            r.unmountComponentAtNode(v);
            return;
          }
        }
        return fy(s, o, { mount: g, unmount: d, update: b });
      }
      var Mc = { exports: {} };
      var wu = {};
      var Bc = { exports: {} };
      var qc = {};
      var Kp;
      function dy() {
        return Kp || (Kp = 1, function(s) {
          function u(U, k) {
            var X = U.length;
            U.push(k);
            e:
              for (; 0 < X; ) {
                var ee = X - 1 >>> 1, $ = U[ee];
                if (0 < g($, k))
                  U[ee] = k, U[X] = $, X = ee;
                else
                  break e;
              }
          }
          function r(U) {
            return U.length === 0 ? null : U[0];
          }
          function o(U) {
            if (U.length === 0)
              return null;
            var k = U[0], X = U.pop();
            if (X !== k) {
              U[0] = X;
              e:
                for (var ee = 0, $ = U.length, E = $ >>> 1; ee < E; ) {
                  var V = 2 * (ee + 1) - 1, W = U[V], ne = V + 1, me = U[ne];
                  if (0 > g(W, X))
                    ne < $ && 0 > g(me, W) ? (U[ee] = me, U[ne] = X, ee = ne) : (U[ee] = W, U[V] = X, ee = V);
                  else if (ne < $ && 0 > g(me, X))
                    U[ee] = me, U[ne] = X, ee = ne;
                  else
                    break e;
                }
            }
            return k;
          }
          function g(U, k) {
            var X = U.sortIndex - k.sortIndex;
            return X !== 0 ? X : U.id - k.id;
          }
          if (s.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
            var b = performance;
            s.unstable_now = function() {
              return b.now();
            };
          } else {
            var d = Date, v = d.now();
            s.unstable_now = function() {
              return d.now() - v;
            };
          }
          var m = [], h = [], _ = 1, A = null, L = 3, w = false, B = false, K = false, ie = false, he = typeof setTimeout == "function" ? setTimeout : null, Ee = typeof clearTimeout == "function" ? clearTimeout : null, fe = typeof setImmediate != "undefined" ? setImmediate : null;
          function xe(U) {
            for (var k = r(h); k !== null; ) {
              if (k.callback === null)
                o(h);
              else if (k.startTime <= U)
                o(h), k.sortIndex = k.expirationTime, u(m, k);
              else
                break;
              k = r(h);
            }
          }
          function we(U) {
            if (K = false, xe(U), !B)
              if (r(m) !== null)
                B = true, Ye || (Ye = true, Je());
              else {
                var k = r(h);
                k !== null && se(we, k.startTime - U);
              }
          }
          var Ye = false, de = -1, it = 5, ht = -1;
          function St() {
            return ie ? true : !(s.unstable_now() - ht < it);
          }
          function tt() {
            if (ie = false, Ye) {
              var U = s.unstable_now();
              ht = U;
              var k = true;
              try {
                e: {
                  B = false, K && (K = false, Ee(de), de = -1), w = true;
                  var X = L;
                  try {
                    t: {
                      for (xe(U), A = r(m); A !== null && !(A.expirationTime > U && St()); ) {
                        var ee = A.callback;
                        if (typeof ee == "function") {
                          A.callback = null, L = A.priorityLevel;
                          var $ = ee(A.expirationTime <= U);
                          if (U = s.unstable_now(), typeof $ == "function") {
                            A.callback = $, xe(U), k = true;
                            break t;
                          }
                          A === r(m) && o(m), xe(U);
                        } else
                          o(m);
                        A = r(m);
                      }
                      if (A !== null)
                        k = true;
                      else {
                        var E = r(h);
                        E !== null && se(we, E.startTime - U), k = false;
                      }
                    }
                    break e;
                  } finally {
                    A = null, L = X, w = false;
                  }
                  k = void 0;
                }
              } finally {
                k ? Je() : Ye = false;
              }
            }
          }
          var Je;
          if (typeof fe == "function")
            Je = function() {
              fe(tt);
            };
          else if (typeof MessageChannel != "undefined") {
            var xt = new MessageChannel(), Fe = xt.port2;
            xt.port1.onmessage = tt, Je = function() {
              Fe.postMessage(null);
            };
          } else
            Je = function() {
              he(tt, 0);
            };
          function se(U, k) {
            de = he(function() {
              U(s.unstable_now());
            }, k);
          }
          s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function(U) {
            U.callback = null;
          }, s.unstable_forceFrameRate = function(U) {
            0 > U || 125 < U ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : it = 0 < U ? Math.floor(1e3 / U) : 5;
          }, s.unstable_getCurrentPriorityLevel = function() {
            return L;
          }, s.unstable_next = function(U) {
            switch (L) {
              case 1:
              case 2:
              case 3:
                var k = 3;
                break;
              default:
                k = L;
            }
            var X = L;
            L = k;
            try {
              return U();
            } finally {
              L = X;
            }
          }, s.unstable_requestPaint = function() {
            ie = true;
          }, s.unstable_runWithPriority = function(U, k) {
            switch (U) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                U = 3;
            }
            var X = L;
            L = U;
            try {
              return k();
            } finally {
              L = X;
            }
          }, s.unstable_scheduleCallback = function(U, k, X) {
            var ee = s.unstable_now();
            switch (typeof X == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? ee + X : ee) : X = ee, U) {
              case 1:
                var $ = -1;
                break;
              case 2:
                $ = 250;
                break;
              case 5:
                $ = 1073741823;
                break;
              case 4:
                $ = 1e4;
                break;
              default:
                $ = 5e3;
            }
            return $ = X + $, U = { id: _++, callback: k, priorityLevel: U, startTime: X, expirationTime: $, sortIndex: -1 }, X > ee ? (U.sortIndex = X, u(h, U), r(m) === null && U === r(h) && (K ? (Ee(de), de = -1) : K = true, se(we, X - ee))) : (U.sortIndex = $, u(m, U), B || w || (B = true, Ye || (Ye = true, Je()))), U;
          }, s.unstable_shouldYield = St, s.unstable_wrapCallback = function(U) {
            var k = L;
            return function() {
              var X = L;
              L = k;
              try {
                return U.apply(this, arguments);
              } finally {
                L = X;
              }
            };
          };
        }(qc)), qc;
      }
      var kp;
      function py() {
        return kp || (kp = 1, Bc.exports = dy()), Bc.exports;
      }
      var Hc = { exports: {} };
      var Rt = {};
      var Jp;
      function my() {
        if (Jp)
          return Rt;
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
          var A = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
          return { $$typeof: g, key: A == null ? null : "" + A, children: m, containerInfo: h, implementation: _ };
        }
        var d = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function v(m, h) {
          if (m === "font")
            return "";
          if (typeof h == "string")
            return h === "use-credentials" ? h : "";
        }
        return Rt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, Rt.createPortal = function(m, h) {
          var _ = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
          if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11)
            throw Error(u(299));
          return b(m, h, null, _);
        }, Rt.flushSync = function(m) {
          var h = d.T, _ = o.p;
          try {
            if (d.T = null, o.p = 2, m)
              return m();
          } finally {
            d.T = h, o.p = _, o.d.f();
          }
        }, Rt.preconnect = function(m, h) {
          typeof m == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, o.d.C(m, h));
        }, Rt.prefetchDNS = function(m) {
          typeof m == "string" && o.d.D(m);
        }, Rt.preinit = function(m, h) {
          if (typeof m == "string" && h && typeof h.as == "string") {
            var _ = h.as, A = v(_, h.crossOrigin), L = typeof h.integrity == "string" ? h.integrity : void 0, w = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
            _ === "style" ? o.d.S(m, typeof h.precedence == "string" ? h.precedence : void 0, { crossOrigin: A, integrity: L, fetchPriority: w }) : _ === "script" && o.d.X(m, { crossOrigin: A, integrity: L, fetchPriority: w, nonce: typeof h.nonce == "string" ? h.nonce : void 0 });
          }
        }, Rt.preinitModule = function(m, h) {
          if (typeof m == "string")
            if (typeof h == "object" && h !== null) {
              if (h.as == null || h.as === "script") {
                var _ = v(h.as, h.crossOrigin);
                o.d.M(m, { crossOrigin: _, integrity: typeof h.integrity == "string" ? h.integrity : void 0, nonce: typeof h.nonce == "string" ? h.nonce : void 0 });
              }
            } else
              h == null && o.d.M(m);
        }, Rt.preload = function(m, h) {
          if (typeof m == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
            var _ = h.as, A = v(_, h.crossOrigin);
            o.d.L(m, _, { crossOrigin: A, integrity: typeof h.integrity == "string" ? h.integrity : void 0, nonce: typeof h.nonce == "string" ? h.nonce : void 0, type: typeof h.type == "string" ? h.type : void 0, fetchPriority: typeof h.fetchPriority == "string" ? h.fetchPriority : void 0, referrerPolicy: typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0, imageSrcSet: typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0, imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0, media: typeof h.media == "string" ? h.media : void 0 });
          }
        }, Rt.preloadModule = function(m, h) {
          if (typeof m == "string")
            if (h) {
              var _ = v(h.as, h.crossOrigin);
              o.d.m(m, { as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0, crossOrigin: _, integrity: typeof h.integrity == "string" ? h.integrity : void 0 });
            } else
              o.d.m(m);
        }, Rt.requestFormReset = function(m) {
          o.d.r(m);
        }, Rt.unstable_batchedUpdates = function(m, h) {
          return m(h);
        }, Rt.useFormState = function(m, h, _) {
          return d.H.useFormState(m, h, _);
        }, Rt.useFormStatus = function() {
          return d.H.useHostTransitionStatus();
        }, Rt.version = "19.2.0", Rt;
      }
      var Fp;
      function gy() {
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
        return s(), Hc.exports = my(), Hc.exports;
      }
      var Wp;
      function yy() {
        if (Wp)
          return wu;
        Wp = 1;
        var s = py(), u = lf(), r = gy();
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
        function d(e) {
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
        var A = Object.assign, L = Symbol.for("react.element"), w = Symbol.for("react.transitional.element"), B = Symbol.for("react.portal"), K = Symbol.for("react.fragment"), ie = Symbol.for("react.strict_mode"), he = Symbol.for("react.profiler"), Ee = Symbol.for("react.consumer"), fe = Symbol.for("react.context"), xe = Symbol.for("react.forward_ref"), we = Symbol.for("react.suspense"), Ye = Symbol.for("react.suspense_list"), de = Symbol.for("react.memo"), it = Symbol.for("react.lazy"), ht = Symbol.for("react.activity"), St = Symbol.for("react.memo_cache_sentinel"), tt = Symbol.iterator;
        function Je(e) {
          return e === null || typeof e != "object" ? null : (e = tt && e[tt] || e["@@iterator"], typeof e == "function" ? e : null);
        }
        var xt = Symbol.for("react.client.reference");
        function Fe(e) {
          if (e == null)
            return null;
          if (typeof e == "function")
            return e.$$typeof === xt ? null : e.displayName || e.name || null;
          if (typeof e == "string")
            return e;
          switch (e) {
            case K:
              return "Fragment";
            case he:
              return "Profiler";
            case ie:
              return "StrictMode";
            case we:
              return "Suspense";
            case Ye:
              return "SuspenseList";
            case ht:
              return "Activity";
          }
          if (typeof e == "object")
            switch (e.$$typeof) {
              case B:
                return "Portal";
              case fe:
                return e.displayName || "Context";
              case Ee:
                return (e._context.displayName || "Context") + ".Consumer";
              case xe:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
              case de:
                return t = e.displayName || null, t !== null ? t : Fe(e.type) || "Memo";
              case it:
                t = e._payload, e = e._init;
                try {
                  return Fe(e(t));
                } catch (n) {
                }
            }
          return null;
        }
        var se = Array.isArray, U = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = { pending: false, data: null, method: null, action: null }, ee = [], $ = -1;
        function E(e) {
          return { current: e };
        }
        function V(e) {
          0 > $ || (e.current = ee[$], ee[$] = null, $--);
        }
        function W(e, t) {
          $++, ee[$] = e.current, e.current = t;
        }
        var ne = E(null), me = E(null), Se = E(null), ze = E(null);
        function _t(e, t) {
          switch (W(Se, t), W(me, e), W(ne, null), t.nodeType) {
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
          V(ne), W(ne, e);
        }
        function We() {
          V(ne), V(me), V(Se);
        }
        function Za(e) {
          e.memoizedState !== null && W(ze, e);
          var t = ne.current, n = up(t, e.type);
          t !== n && (W(me, e), W(ne, n));
        }
        function El(e) {
          me.current === e && (V(ne), V(me)), ze.current === e && (V(ze), xu._currentValue = X);
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
                    } catch (Y) {
                      var q = Y;
                    }
                    Reflect.construct(e, [], Z);
                  } else {
                    try {
                      Z.call();
                    } catch (Y) {
                      q = Y;
                    }
                    e.call(Z.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (Y) {
                    q = Y;
                  }
                  (Z = e()) && typeof Z.catch == "function" && Z.catch(function() {
                  });
                }
              } catch (Y) {
                if (Y && q && typeof Y.stack == "string")
                  return [Y.stack, q.stack];
              }
              return [null, null];
            } };
            a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var l = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
            l && l.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
            var i = a.DetermineComponentFrameRoot(), c = i[0], y = i[1];
            if (c && y) {
              var T = c.split(`
`), M = y.split(`
`);
              for (l = a = 0; a < T.length && !T[a].includes("DetermineComponentFrameRoot"); )
                a++;
              for (; l < M.length && !M[l].includes("DetermineComponentFrameRoot"); )
                l++;
              if (a === T.length || l === M.length)
                for (a = T.length - 1, l = M.length - 1; 1 <= a && 0 <= l && T[a] !== M[l]; )
                  l--;
              for (; 1 <= a && 0 <= l; a--, l--)
                if (T[a] !== M[l]) {
                  if (a !== 1 || l !== 1)
                    do
                      if (a--, l--, 0 > l || T[a] !== M[l]) {
                        var G = `
` + T[a].replace(" at new ", " at ");
                        return e.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", e.displayName)), G;
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
        var Ai = Object.prototype.hasOwnProperty, Oi = s.unstable_scheduleCallback, wi = s.unstable_cancelCallback, Ar = s.unstable_shouldYield, Du = s.unstable_requestPaint, Nt = s.unstable_now, H = s.unstable_getCurrentPriorityLevel, pe = s.unstable_ImmediatePriority, Ri = s.unstable_UserBlockingPriority, Ka = s.unstable_NormalPriority, Or = s.unstable_LowPriority, Ol = s.unstable_IdlePriority, Mu = s.log, Bu = s.unstable_setDisableYieldValue, ka = null, zt = null;
        function Gt(e) {
          if (typeof Mu == "function" && Bu(e), zt && typeof zt.setStrictMode == "function")
            try {
              zt.setStrictMode(ka, e);
            } catch (t) {
            }
        }
        var wt = Math.clz32 ? Math.clz32 : wr, Ni = Math.log, qu = Math.LN2;
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
          var y = e.entanglements, T = e.expirationTimes, M = e.hiddenUpdates;
          for (n = c & ~n; 0 < n; ) {
            var G = 31 - wt(n), Z = 1 << G;
            y[G] = 0, T[G] = -1;
            var q = M[G];
            if (q !== null)
              for (M[G] = null, G = 0; G < q.length; G++) {
                var Y = q[G];
                Y !== null && (Y.lane &= -536870913);
              }
            n &= ~Z;
          }
          a !== 0 && Lu(e, a, 0), i !== 0 && l === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(c & ~t));
        }
        function Lu(e, t, n) {
          e.pendingLanes |= t, e.suspendedLanes &= ~t;
          var a = 31 - wt(t);
          e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | n & 261930;
        }
        function Yu(e, t) {
          var n = e.entangledLanes |= t;
          for (e = e.entanglements; n; ) {
            var a = 31 - wt(n), l = 1 << a;
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
        function Gu() {
          var e = k.p;
          return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Np(e.type));
        }
        function Qu(e, t) {
          var n = k.p;
          try {
            return k.p = e, t();
          } finally {
            k.p = n;
          }
        }
        var mn = Math.random().toString(36).slice(2), dt = "__reactFiber$" + mn, gt = "__reactProps$" + mn, Rn = "__reactContainer$" + mn, ji = "__reactEvents$" + mn, zr = "__reactListeners$" + mn, Vu = "__reactHandles$" + mn, da = "__reactResources$" + mn, Nn = "__reactMarker$" + mn;
        function Ci(e) {
          delete e[dt], delete e[gt], delete e[ji], delete e[zr], delete e[Vu];
        }
        function pa(e) {
          var t = e[dt];
          if (t)
            return t;
          for (var n = e.parentNode; n; ) {
            if (t = n[Rn] || n[dt]) {
              if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = dp(e); e !== null; ) {
                  if (n = e[dt])
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
          if (e = e[dt] || e[Rn]) {
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
        function $e(e) {
          e[Nn] = true;
        }
        var Ut = /* @__PURE__ */ new Set(), Nl = {};
        function jn(e, t) {
          Qt(e, t), Qt(e + "Capture", t);
        }
        function Qt(e, t) {
          for (Nl[e] = t, e = 0; e < t.length; e++)
            Ut.add(t[e]);
        }
        var Zu = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Ku = {}, ku = {};
        function jr(e) {
          return Ai.call(ku, e) ? true : Ai.call(Ku, e) ? false : Zu.test(e) ? ku[e] = true : (Ku[e] = true, false);
        }
        function Gn(e, t, n) {
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
        var Qn = /[\n"\\]/g;
        function jt(e) {
          return e.replace(Qn, function(t) {
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
        function ga(e, t, n, a) {
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
        var ya = null, Zn = null;
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
                  t = n.value, t != null && ga(e, !!n.multiple, t, false);
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
            if (Ml = false, (ya !== null || Zn !== null) && (Ys(), ya && (t = ya, e = Zn, Zn = ya = null, Dl(t), e)))
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
        var pt = null, va = null, Kn = null;
        function Bl() {
          if (Kn)
            return Kn;
          var e, t = va, n = t.length, a, l = "value" in pt ? pt.value : pt.textContent, i = l.length;
          for (e = 0; e < n && t[e] === l[e]; e++)
            ;
          var c = n - e;
          for (a = 1; a <= c && t[n - a] === l[i - a]; a++)
            ;
          return Kn = l.slice(e, 1 < a ? 1 - a : void 0);
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
        function yt(e) {
          function t(n, a, l, i, c) {
            this._reactName = n, this._targetInst = l, this.type = a, this.nativeEvent = i, this.target = c, this.currentTarget = null;
            for (var y in e)
              e.hasOwnProperty(y) && (n = e[y], this[y] = n ? n(i) : i[y]);
            return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === false) ? Hl : Iu, this.isPropagationStopped = Iu, this;
          }
          return A(t.prototype, { preventDefault: function() {
            this.defaultPrevented = true;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = Hl);
          }, stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = Hl);
          }, persist: function() {
          }, isPersistent: Hl }), t;
        }
        var kn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
          return e.timeStamp || Date.now();
        }, defaultPrevented: 0, isTrusted: 0 }, nl = yt(kn), Ge = A({}, kn, { view: 0, detail: 0 }), f = yt(Ge), p, S, x, O = A({}, Ge, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: nn, button: 0, buttons: 0, relatedTarget: function(e) {
          return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
        }, movementX: function(e) {
          return "movementX" in e ? e.movementX : (e !== x && (x && e.type === "mousemove" ? (p = e.screenX - x.screenX, S = e.screenY - x.screenY) : S = p = 0, x = e), p);
        }, movementY: function(e) {
          return "movementY" in e ? e.movementY : S;
        } }), C = yt(O), j = A({}, O, { dataTransfer: 0 }), J = yt(j), le = A({}, Ge, { relatedTarget: 0 }), F = yt(le), P = A({}, kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ce = yt(P), Be = A({}, kn, { clipboardData: function(e) {
          return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        } }), ge = yt(Be), I = A({}, kn, { data: 0 }), te = yt(I), Ve = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, vt = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, nt = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
        function tn(e) {
          var t = this.nativeEvent;
          return t.getModifierState ? t.getModifierState(e) : (e = nt[e]) ? !!t[e] : false;
        }
        function nn() {
          return tn;
        }
        var Xi = A({}, Ge, { key: function(e) {
          if (e.key) {
            var t = Ve[e.key] || e.key;
            if (t !== "Unidentified")
              return t;
          }
          return e.type === "keypress" ? (e = ql(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? vt[e.keyCode] || "Unidentified" : "";
        }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: nn, charCode: function(e) {
          return e.type === "keypress" ? ql(e) : 0;
        }, keyCode: function(e) {
          return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        }, which: function(e) {
          return e.type === "keypress" ? ql(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        } }), es = yt(Xi), Dn = A({}, O, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ll = yt(Dn), Yl = A({}, Ge, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: nn }), ts = yt(Yl), ns = A({}, kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xl = yt(ns), al = A({}, O, { deltaX: function(e) {
          return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        }, deltaY: function(e) {
          return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        }, deltaZ: 0, deltaMode: 0 }), Jn = yt(al), as = A({}, kn, { newState: 0, oldState: 0 }), an = yt(as), ls = [9, 13, 27, 32], ln = en && "CompositionEvent" in window, ba = null;
        en && "documentMode" in document && (ba = document.documentMode);
        var Dr = en && "TextEvent" in window && !ba, gn = en && (!ln || ba && 8 < ba && 11 >= ba), Fn = " ", Gl = false;
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
        function $m(e, t) {
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
        function Pm(e, t) {
          if (Ql)
            return e === "compositionend" || !ln && ll(e, t) ? (e = Bl(), Kn = va = pt = null, Ql = false, e) : null;
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
              return gn && t.locale !== "ko" ? null : t.data;
            default:
              return null;
          }
        }
        var Im = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
        function gf(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return t === "input" ? !!Im[e.type] : t === "textarea";
        }
        function yf(e, t, n, a) {
          ya ? Zn ? Zn.push(a) : Zn = [a] : ya = a, t = ks(t, "onChange"), 0 < t.length && (n = new nl("onChange", "change", null, n, a), e.push({ event: n, listeners: t }));
        }
        var Qi = null, Vi = null;
        function eg(e) {
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
          Qi && (Qi.detachEvent("onpropertychange", _f), Vi = Qi = null);
        }
        function _f(e) {
          if (e.propertyName === "value" && is(Vi)) {
            var t = [];
            yf(t, Vi, e, Ul(e)), Li(eg, t);
          }
        }
        function tg(e, t, n) {
          e === "focusin" ? (xf(), Qi = t, Vi = n, Qi.attachEvent("onpropertychange", _f)) : e === "focusout" && xf();
        }
        function ng(e) {
          if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return is(Vi);
        }
        function ag(e, t) {
          if (e === "click")
            return is(t);
        }
        function lg(e, t) {
          if (e === "input" || e === "change")
            return is(t);
        }
        function ig(e, t) {
          return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
        }
        var Vt = typeof Object.is == "function" ? Object.is : ig;
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
        var ug = en && "documentMode" in document && 11 >= document.documentMode, Vl = null, Hr = null, Ki = null, Lr = false;
        function wf(e, t, n) {
          var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
          Lr || Vl == null || Vl !== el(a) || (a = Vl, "selectionStart" in a && qr(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset }), Ki && Zi(Ki, a) || (Ki = a, a = ks(Hr, "onSelect"), 0 < a.length && (t = new nl("onSelect", "select", null, t, n), e.push({ event: t, listeners: a }), t.target = Vl)));
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
        var Nf = ul("animationend"), zf = ul("animationiteration"), jf = ul("animationstart"), sg = ul("transitionrun"), rg = ul("transitionstart"), og = ul("transitioncancel"), Cf = ul("transitionend"), Uf = /* @__PURE__ */ new Map(), Xr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
        Xr.push("scrollEnd");
        function yn(e, t) {
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
        }, un = [], Kl = 0, Gr = 0;
        function ss() {
          for (var e = Kl, t = Gr = Kl = 0; t < e; ) {
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
          un[Kl++] = e, un[Kl++] = t, un[Kl++] = n, un[Kl++] = a, Gr |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
        }
        function Qr(e, t, n, a) {
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
          return e.tag === 3 ? (i = e.stateNode, l && t !== null && (l = 31 - wt(n), e = i.hiddenUpdates, a = e[l], a === null ? e[l] = [t] : a.push(t), t.lane = n | 536870912), i) : null;
        }
        function os(e) {
          if (50 < pu)
            throw pu = 0, Io = null, Error(o(185));
          for (var t = e.return; t !== null; )
            e = t, t = e.return;
          return e.tag === 3 ? e.stateNode : null;
        }
        var kl = {};
        function cg(e, t, n, a) {
          this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
        }
        function Zt(e, t, n, a) {
          return new cg(e, t, n, a);
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
            c = m0(e, n, ne.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
          else
            e:
              switch (e) {
                case ht:
                  return e = Zt(31, n, t, l), e.elementType = ht, e.lanes = i, e;
                case K:
                  return rl(n.children, l, i, t);
                case ie:
                  c = 8, l |= 24;
                  break;
                case he:
                  return e = Zt(12, n, t, l | 2), e.elementType = he, e.lanes = i, e;
                case we:
                  return e = Zt(13, n, t, l), e.elementType = we, e.lanes = i, e;
                case Ye:
                  return e = Zt(19, n, t, l), e.elementType = Ye, e.lanes = i, e;
                default:
                  if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                      case fe:
                        c = 10;
                        break e;
                      case Ee:
                        c = 9;
                        break e;
                      case xe:
                        c = 11;
                        break e;
                      case de:
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
        function Kr(e, t, n) {
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
        var Jl = [], Fl = 0, fs = null, ki = 0, rn = [], on = 0, Sa = null, Mn = 1, Bn = "";
        function $n(e, t) {
          Jl[Fl++] = ki, Jl[Fl++] = fs, fs = e, ki = t;
        }
        function Hf(e, t, n) {
          rn[on++] = Mn, rn[on++] = Bn, rn[on++] = Sa, Sa = e;
          var a = Mn;
          e = Bn;
          var l = 32 - wt(a) - 1;
          a &= ~(1 << l), n += 1;
          var i = 32 - wt(t) + l;
          if (30 < i) {
            var c = l - l % 5;
            i = (a & (1 << c) - 1).toString(32), a >>= c, l -= c, Mn = 1 << 32 - wt(t) + l | n << l | a, Bn = i + e;
          } else
            Mn = 1 << i | n << l | a, Bn = e;
        }
        function kr(e) {
          e.return !== null && ($n(e, 1), Hf(e, 1, 0));
        }
        function Jr(e) {
          for (; e === fs; )
            fs = Jl[--Fl], Jl[Fl] = null, ki = Jl[--Fl], Jl[Fl] = null;
          for (; e === Sa; )
            Sa = rn[--on], rn[on] = null, Bn = rn[--on], rn[on] = null, Mn = rn[--on], rn[on] = null;
        }
        function Lf(e, t) {
          rn[on++] = Mn, rn[on++] = Bn, rn[on++] = Sa, Mn = t.id, Bn = t.overflow, Sa = e;
        }
        var Tt = null, Ze = null, Re = false, xa = null, cn = false, Fr = Error(o(519));
        function _a(e) {
          var t = Error(o(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
          throw Ji(sn(t, e)), Fr;
        }
        function Yf(e) {
          var t = e.stateNode, n = e.type, a = e.memoizedProps;
          switch (t[dt] = e, t[gt] = a, n) {
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
              for (n = 0; n < gu.length; n++)
                Te(gu[n], t);
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
          for (Tt = e.return; Tt; )
            switch (Tt.tag) {
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
                Tt = Tt.return;
            }
        }
        function Wl(e) {
          if (e !== Tt)
            return false;
          if (!Re)
            return Xf(e), Re = true, false;
          var t = e.tag, n;
          if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || pc(e.type, e.memoizedProps)), n = !n), n && Ze && _a(e), Xf(e), t === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
              throw Error(o(317));
            Ze = hp(e);
          } else if (t === 31) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
              throw Error(o(317));
            Ze = hp(e);
          } else
            t === 27 ? (t = Ze, Ba(e.type) ? (e = bc, bc = null, Ze = e) : Ze = t) : Ze = Tt ? hn(e.stateNode.nextSibling) : null;
          return true;
        }
        function ol() {
          Ze = Tt = null, Re = false;
        }
        function Wr() {
          var e = xa;
          return e !== null && (Ht === null ? Ht = e : Ht.push.apply(Ht, e), xa = null), e;
        }
        function Ji(e) {
          xa === null ? xa = [e] : xa.push(e);
        }
        var $r = E(null), cl = null, Pn = null;
        function Ta(e, t, n) {
          W($r, t._currentValue), t._currentValue = n;
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
            } else if (l === ze.current) {
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
        function Et(e) {
          return Gf(cl, e);
        }
        function ds(e, t) {
          return cl === null && fl(e), Gf(e, t);
        }
        function Gf(e, t) {
          var n = t._currentValue;
          if (t = { context: t, memoizedValue: n, next: null }, Pn === null) {
            if (e === null)
              throw Error(o(308));
            Pn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
          } else
            Pn = Pn.next = t;
          return n;
        }
        var fg = typeof AbortController != "undefined" ? AbortController : function() {
          var e = [], t = this.signal = { aborted: false, addEventListener: function(n, a) {
            e.push(a);
          } };
          this.abort = function() {
            t.aborted = true, e.forEach(function(n) {
              return n();
            });
          };
        }, hg = s.unstable_scheduleCallback, dg = s.unstable_NormalPriority, st = { $$typeof: fe, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
        function eo() {
          return { controller: new fg(), data: /* @__PURE__ */ new Map(), refCount: 0 };
        }
        function Fi(e) {
          e.refCount--, e.refCount === 0 && hg(dg, function() {
            e.controller.abort();
          });
        }
        var Wi = null, to = 0, Pl = 0, Il = null;
        function pg(e, t) {
          if (Wi === null) {
            var n = Wi = [];
            to = 0, Pl = ic(), Il = { status: "pending", value: void 0, then: function(a) {
              n.push(a);
            } };
          }
          return to++, t.then(Qf, Qf), t;
        }
        function Qf() {
          if (--to === 0 && Wi !== null) {
            Il !== null && (Il.status = "fulfilled");
            var e = Wi;
            Wi = null, Pl = 0, Il = null;
            for (var t = 0; t < e.length; t++)
              (0, e[t])();
          }
        }
        function mg(e, t) {
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
        var Vf = U.S;
        U.S = function(e, t) {
          wd = Nt(), typeof t == "object" && t !== null && typeof t.then == "function" && pg(e, t), Vf !== null && Vf(e, t);
        };
        var hl = E(null);
        function no() {
          var e = hl.current;
          return e !== null ? e : Xe.pooledCache;
        }
        function ps(e, t) {
          t === null ? W(hl, hl.current) : W(hl, t.pool);
        }
        function Zf() {
          var e = no();
          return e === null ? null : { parent: st._currentValue, pool: e };
        }
        var ei = Error(o(460)), ao = Error(o(474)), ms = Error(o(542)), gs = { then: function() {
        } };
        function Kf(e) {
          return e = e.status, e === "fulfilled" || e === "rejected";
        }
        function kf(e, t, n) {
          switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(It, It), t = n), t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, Ff(e), e;
            default:
              if (typeof t.status == "string")
                t.then(It, It);
              else {
                if (e = Xe, e !== null && 100 < e.shellSuspendCounter)
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
        function ys(e) {
          var t = $i;
          return $i += 1, ti === null && (ti = []), kf(ti, e, t);
        }
        function Pi(e, t) {
          t = t.props.ref, e.ref = t !== void 0 ? t : null;
        }
        function vs(e, t) {
          throw t.$$typeof === L ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
        }
        function Wf(e) {
          function t(N, R) {
            if (e) {
              var D = N.deletions;
              D === null ? (N.deletions = [R], N.flags |= 16) : D.push(R);
            }
          }
          function n(N, R) {
            if (!e)
              return null;
            for (; R !== null; )
              t(N, R), R = R.sibling;
            return null;
          }
          function a(N) {
            for (var R = /* @__PURE__ */ new Map(); N !== null; )
              N.key !== null ? R.set(N.key, N) : R.set(N.index, N), N = N.sibling;
            return R;
          }
          function l(N, R) {
            return N = Wn(N, R), N.index = 0, N.sibling = null, N;
          }
          function i(N, R, D) {
            return N.index = D, e ? (D = N.alternate, D !== null ? (D = D.index, D < R ? (N.flags |= 67108866, R) : D) : (N.flags |= 67108866, R)) : (N.flags |= 1048576, R);
          }
          function c(N) {
            return e && N.alternate === null && (N.flags |= 67108866), N;
          }
          function y(N, R, D, Q) {
            return R === null || R.tag !== 6 ? (R = Zr(D, N.mode, Q), R.return = N, R) : (R = l(R, D), R.return = N, R);
          }
          function T(N, R, D, Q) {
            var re = D.type;
            return re === K ? G(N, R, D.props.children, Q, D.key) : R !== null && (R.elementType === re || typeof re == "object" && re !== null && re.$$typeof === it && dl(re) === R.type) ? (R = l(R, D.props), Pi(R, D), R.return = N, R) : (R = cs(D.type, D.key, D.props, null, N.mode, Q), Pi(R, D), R.return = N, R);
          }
          function M(N, R, D, Q) {
            return R === null || R.tag !== 4 || R.stateNode.containerInfo !== D.containerInfo || R.stateNode.implementation !== D.implementation ? (R = Kr(D, N.mode, Q), R.return = N, R) : (R = l(R, D.children || []), R.return = N, R);
          }
          function G(N, R, D, Q, re) {
            return R === null || R.tag !== 7 ? (R = rl(D, N.mode, Q, re), R.return = N, R) : (R = l(R, D), R.return = N, R);
          }
          function Z(N, R, D) {
            if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
              return R = Zr("" + R, N.mode, D), R.return = N, R;
            if (typeof R == "object" && R !== null) {
              switch (R.$$typeof) {
                case w:
                  return D = cs(R.type, R.key, R.props, null, N.mode, D), Pi(D, R), D.return = N, D;
                case B:
                  return R = Kr(R, N.mode, D), R.return = N, R;
                case it:
                  return R = dl(R), Z(N, R, D);
              }
              if (se(R) || Je(R))
                return R = rl(R, N.mode, D, null), R.return = N, R;
              if (typeof R.then == "function")
                return Z(N, ys(R), D);
              if (R.$$typeof === fe)
                return Z(N, ds(N, R), D);
              vs(N, R);
            }
            return null;
          }
          function q(N, R, D, Q) {
            var re = R !== null ? R.key : null;
            if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
              return re !== null ? null : y(N, R, "" + D, Q);
            if (typeof D == "object" && D !== null) {
              switch (D.$$typeof) {
                case w:
                  return D.key === re ? T(N, R, D, Q) : null;
                case B:
                  return D.key === re ? M(N, R, D, Q) : null;
                case it:
                  return D = dl(D), q(N, R, D, Q);
              }
              if (se(D) || Je(D))
                return re !== null ? null : G(N, R, D, Q, null);
              if (typeof D.then == "function")
                return q(N, R, ys(D), Q);
              if (D.$$typeof === fe)
                return q(N, R, ds(N, D), Q);
              vs(N, D);
            }
            return null;
          }
          function Y(N, R, D, Q, re) {
            if (typeof Q == "string" && Q !== "" || typeof Q == "number" || typeof Q == "bigint")
              return N = N.get(D) || null, y(R, N, "" + Q, re);
            if (typeof Q == "object" && Q !== null) {
              switch (Q.$$typeof) {
                case w:
                  return N = N.get(Q.key === null ? D : Q.key) || null, T(R, N, Q, re);
                case B:
                  return N = N.get(Q.key === null ? D : Q.key) || null, M(R, N, Q, re);
                case it:
                  return Q = dl(Q), Y(N, R, D, Q, re);
              }
              if (se(Q) || Je(Q))
                return N = N.get(D) || null, G(R, N, Q, re, null);
              if (typeof Q.then == "function")
                return Y(N, R, D, ys(Q), re);
              if (Q.$$typeof === fe)
                return Y(N, R, D, ds(R, Q), re);
              vs(R, Q);
            }
            return null;
          }
          function ae(N, R, D, Q) {
            for (var re = null, je = null, ue = R, be = R = 0, Oe = null; ue !== null && be < D.length; be++) {
              ue.index > be ? (Oe = ue, ue = null) : Oe = ue.sibling;
              var Ce = q(N, ue, D[be], Q);
              if (Ce === null) {
                ue === null && (ue = Oe);
                break;
              }
              e && ue && Ce.alternate === null && t(N, ue), R = i(Ce, R, be), je === null ? re = Ce : je.sibling = Ce, je = Ce, ue = Oe;
            }
            if (be === D.length)
              return n(N, ue), Re && $n(N, be), re;
            if (ue === null) {
              for (; be < D.length; be++)
                ue = Z(N, D[be], Q), ue !== null && (R = i(ue, R, be), je === null ? re = ue : je.sibling = ue, je = ue);
              return Re && $n(N, be), re;
            }
            for (ue = a(ue); be < D.length; be++)
              Oe = Y(ue, N, be, D[be], Q), Oe !== null && (e && Oe.alternate !== null && ue.delete(Oe.key === null ? be : Oe.key), R = i(Oe, R, be), je === null ? re = Oe : je.sibling = Oe, je = Oe);
            return e && ue.forEach(function(Xa) {
              return t(N, Xa);
            }), Re && $n(N, be), re;
          }
          function oe(N, R, D, Q) {
            if (D == null)
              throw Error(o(151));
            for (var re = null, je = null, ue = R, be = R = 0, Oe = null, Ce = D.next(); ue !== null && !Ce.done; be++, Ce = D.next()) {
              ue.index > be ? (Oe = ue, ue = null) : Oe = ue.sibling;
              var Xa = q(N, ue, Ce.value, Q);
              if (Xa === null) {
                ue === null && (ue = Oe);
                break;
              }
              e && ue && Xa.alternate === null && t(N, ue), R = i(Xa, R, be), je === null ? re = Xa : je.sibling = Xa, je = Xa, ue = Oe;
            }
            if (Ce.done)
              return n(N, ue), Re && $n(N, be), re;
            if (ue === null) {
              for (; !Ce.done; be++, Ce = D.next())
                Ce = Z(N, Ce.value, Q), Ce !== null && (R = i(Ce, R, be), je === null ? re = Ce : je.sibling = Ce, je = Ce);
              return Re && $n(N, be), re;
            }
            for (ue = a(ue); !Ce.done; be++, Ce = D.next())
              Ce = Y(ue, N, be, Ce.value, Q), Ce !== null && (e && Ce.alternate !== null && ue.delete(Ce.key === null ? be : Ce.key), R = i(Ce, R, be), je === null ? re = Ce : je.sibling = Ce, je = Ce);
            return e && ue.forEach(function(O0) {
              return t(N, O0);
            }), Re && $n(N, be), re;
          }
          function Le(N, R, D, Q) {
            if (typeof D == "object" && D !== null && D.type === K && D.key === null && (D = D.props.children), typeof D == "object" && D !== null) {
              switch (D.$$typeof) {
                case w:
                  e: {
                    for (var re = D.key; R !== null; ) {
                      if (R.key === re) {
                        if (re = D.type, re === K) {
                          if (R.tag === 7) {
                            n(N, R.sibling), Q = l(R, D.props.children), Q.return = N, N = Q;
                            break e;
                          }
                        } else if (R.elementType === re || typeof re == "object" && re !== null && re.$$typeof === it && dl(re) === R.type) {
                          n(N, R.sibling), Q = l(R, D.props), Pi(Q, D), Q.return = N, N = Q;
                          break e;
                        }
                        n(N, R);
                        break;
                      } else
                        t(N, R);
                      R = R.sibling;
                    }
                    D.type === K ? (Q = rl(D.props.children, N.mode, Q, D.key), Q.return = N, N = Q) : (Q = cs(D.type, D.key, D.props, null, N.mode, Q), Pi(Q, D), Q.return = N, N = Q);
                  }
                  return c(N);
                case B:
                  e: {
                    for (re = D.key; R !== null; ) {
                      if (R.key === re)
                        if (R.tag === 4 && R.stateNode.containerInfo === D.containerInfo && R.stateNode.implementation === D.implementation) {
                          n(N, R.sibling), Q = l(R, D.children || []), Q.return = N, N = Q;
                          break e;
                        } else {
                          n(N, R);
                          break;
                        }
                      else
                        t(N, R);
                      R = R.sibling;
                    }
                    Q = Kr(D, N.mode, Q), Q.return = N, N = Q;
                  }
                  return c(N);
                case it:
                  return D = dl(D), Le(N, R, D, Q);
              }
              if (se(D))
                return ae(N, R, D, Q);
              if (Je(D)) {
                if (re = Je(D), typeof re != "function")
                  throw Error(o(150));
                return D = re.call(D), oe(N, R, D, Q);
              }
              if (typeof D.then == "function")
                return Le(N, R, ys(D), Q);
              if (D.$$typeof === fe)
                return Le(N, R, ds(N, D), Q);
              vs(N, D);
            }
            return typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint" ? (D = "" + D, R !== null && R.tag === 6 ? (n(N, R.sibling), Q = l(R, D), Q.return = N, N = Q) : (n(N, R), Q = Zr(D, N.mode, Q), Q.return = N, N = Q), c(N)) : n(N, R);
          }
          return function(N, R, D, Q) {
            try {
              $i = 0;
              var re = Le(N, R, D, Q);
              return ti = null, re;
            } catch (ue) {
              if (ue === ei || ue === ms)
                throw ue;
              var je = Zt(29, ue, null, N.mode);
              return je.lanes = Q, je.return = N, je;
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
          if (a = a.shared, (Ue & 2) !== 0) {
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
            var T = y, M = T.next;
            T.next = null, c === null ? i = M : c.next = M, c = T;
            var G = e.alternate;
            G !== null && (G = G.updateQueue, y = G.lastBaseUpdate, y !== c && (y === null ? G.firstBaseUpdate = M : y.next = M, G.lastBaseUpdate = T));
          }
          if (i !== null) {
            var Z = l.baseState;
            c = 0, G = M = T = null, y = i;
            do {
              var q = y.lane & -536870913, Y = q !== y.lane;
              if (Y ? (Ae & q) === q : (a & q) === q) {
                q !== 0 && q === Pl && (so = true), G !== null && (G = G.next = { lane: 0, tag: y.tag, payload: y.payload, callback: null, next: null });
                e: {
                  var ae = e, oe = y;
                  q = t;
                  var Le = n;
                  switch (oe.tag) {
                    case 1:
                      if (ae = oe.payload, typeof ae == "function") {
                        Z = ae.call(Le, Z, q);
                        break e;
                      }
                      Z = ae;
                      break e;
                    case 3:
                      ae.flags = ae.flags & -65537 | 128;
                    case 0:
                      if (ae = oe.payload, q = typeof ae == "function" ? ae.call(Le, Z, q) : ae, q == null)
                        break e;
                      Z = A({}, Z, q);
                      break e;
                    case 2:
                      Ea = true;
                  }
                }
                q = y.callback, q !== null && (e.flags |= 64, Y && (e.flags |= 8192), Y = l.callbacks, Y === null ? l.callbacks = [q] : Y.push(q));
              } else
                Y = { lane: q, tag: y.tag, payload: y.payload, callback: y.callback, next: null }, G === null ? (M = G = Y, T = Z) : G = G.next = Y, c |= q;
              if (y = y.next, y === null) {
                if (y = l.shared.pending, y === null)
                  break;
                Y = y, y = Y.next, Y.next = null, l.lastBaseUpdate = Y, l.shared.pending = null;
              }
            } while (true);
            G === null && (T = Z), l.baseState = T, l.firstBaseUpdate = M, l.lastBaseUpdate = G, i === null && (l.shared.lanes = 0), ja |= c, e.lanes = c, e.memoizedState = Z;
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
        var ni = E(null), bs = E(0);
        function eh(e, t) {
          e = ra, W(bs, e), W(ni, t), ra = e | t.baseLanes;
        }
        function ro() {
          W(bs, ra), W(ni, ni.current);
        }
        function oo() {
          ra = bs.current, V(ni), V(bs);
        }
        var Kt = E(null), fn = null;
        function wa(e) {
          var t = e.alternate;
          W(at, at.current & 1), W(Kt, e), fn === null && (t === null || ni.current !== null || t.memoizedState !== null) && (fn = e);
        }
        function co(e) {
          W(at, at.current), W(Kt, e), fn === null && (fn = e);
        }
        function th(e) {
          e.tag === 22 ? (W(at, at.current), W(Kt, e), fn === null && (fn = e)) : Ra();
        }
        function Ra() {
          W(at, at.current), W(Kt, Kt.current);
        }
        function kt(e) {
          V(Kt), fn === e && (fn = null), V(at);
        }
        var at = E(0);
        function Ss(e) {
          for (var t = e; t !== null; ) {
            if (t.tag === 13) {
              var n = t.memoizedState;
              if (n !== null && (n = n.dehydrated, n === null || yc(n) || vc(n)))
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
        var ea = 0, ve = null, qe = null, rt = null, xs = false, ai = false, gl = false, _s = 0, nu = 0, li = null, gg = 0;
        function Ie() {
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
          return ea = i, ve = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, U.H = e === null || e.memoizedState === null ? Hh : Ro, gl = false, i = n(a, l), gl = false, ai && (i = ah(t, n, a, l)), nh(e), i;
        }
        function nh(e) {
          U.H = iu;
          var t = qe !== null && qe.next !== null;
          if (ea = 0, rt = qe = ve = null, xs = false, nu = 0, li = null, t)
            throw Error(o(300));
          e === null || ot || (e = e.dependencies, e !== null && hs(e) && (ot = true));
        }
        function ah(e, t, n, a) {
          ve = e;
          var l = 0;
          do {
            if (ai && (li = null), nu = 0, ai = false, 25 <= l)
              throw Error(o(301));
            if (l += 1, rt = qe = null, e.updateQueue != null) {
              var i = e.updateQueue;
              i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
            }
            U.H = Lh, i = t(n, a);
          } while (ai);
          return i;
        }
        function yg() {
          var e = U.H, t = e.useState()[0];
          return t = typeof t.then == "function" ? au(t) : t, e = e.useState()[0], (qe !== null ? qe.memoizedState : null) !== e && (ve.flags |= 1024), t;
        }
        function po() {
          var e = _s !== 0;
          return _s = 0, e;
        }
        function mo(e, t, n) {
          t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
        }
        function go(e) {
          if (xs) {
            for (e = e.memoizedState; e !== null; ) {
              var t = e.queue;
              t !== null && (t.pending = null), e = e.next;
            }
            xs = false;
          }
          ea = 0, rt = qe = ve = null, ai = false, nu = _s = 0, li = null;
        }
        function Ct() {
          var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
          return rt === null ? ve.memoizedState = rt = e : rt = rt.next = e, rt;
        }
        function lt() {
          if (qe === null) {
            var e = ve.alternate;
            e = e !== null ? e.memoizedState : null;
          } else
            e = qe.next;
          var t = rt === null ? ve.memoizedState : rt.next;
          if (t !== null)
            rt = t, qe = e;
          else {
            if (e === null)
              throw ve.alternate === null ? Error(o(467)) : Error(o(310));
            qe = e, e = { memoizedState: qe.memoizedState, baseState: qe.baseState, baseQueue: qe.baseQueue, queue: qe.queue, next: null }, rt === null ? ve.memoizedState = rt = e : rt = rt.next = e;
          }
          return rt;
        }
        function Ts() {
          return { lastEffect: null, events: null, stores: null, memoCache: null };
        }
        function au(e) {
          var t = nu;
          return nu += 1, li === null && (li = []), e = kf(li, e, t), t = ve, (rt === null ? t.memoizedState : rt.next) === null && (t = t.alternate, U.H = t === null || t.memoizedState === null ? Hh : Ro), e;
        }
        function Es(e) {
          if (e !== null && typeof e == "object") {
            if (typeof e.then == "function")
              return au(e);
            if (e.$$typeof === fe)
              return Et(e);
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
              n[a] = St;
          return t.index++, n;
        }
        function ta(e, t) {
          return typeof t == "function" ? t(e) : t;
        }
        function As(e) {
          var t = lt();
          return vo(t, qe, e);
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
            var y = c = null, T = null, M = t, G = false;
            do {
              var Z = M.lane & -536870913;
              if (Z !== M.lane ? (Ae & Z) === Z : (ea & Z) === Z) {
                var q = M.revertLane;
                if (q === 0)
                  T !== null && (T = T.next = { lane: 0, revertLane: 0, gesture: null, action: M.action, hasEagerState: M.hasEagerState, eagerState: M.eagerState, next: null }), Z === Pl && (G = true);
                else if ((ea & q) === q) {
                  M = M.next, q === Pl && (G = true);
                  continue;
                } else
                  Z = { lane: 0, revertLane: M.revertLane, gesture: null, action: M.action, hasEagerState: M.hasEagerState, eagerState: M.eagerState, next: null }, T === null ? (y = T = Z, c = i) : T = T.next = Z, ve.lanes |= q, ja |= q;
                Z = M.action, gl && n(i, Z), i = M.hasEagerState ? M.eagerState : n(i, Z);
              } else
                q = { lane: Z, revertLane: M.revertLane, gesture: M.gesture, action: M.action, hasEagerState: M.hasEagerState, eagerState: M.eagerState, next: null }, T === null ? (y = T = q, c = i) : T = T.next = q, ve.lanes |= Z, ja |= Z;
              M = M.next;
            } while (M !== null && M !== t);
            if (T === null ? c = i : T.next = y, !Vt(i, e.memoizedState) && (ot = true, G && (n = Il, n !== null)))
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
          var a = ve, l = lt(), i = Re;
          if (i) {
            if (n === void 0)
              throw Error(o(407));
            n = n();
          } else
            n = t();
          var c = !Vt((qe || l).memoizedState, n);
          if (c && (l.memoizedState = n, ot = true), l = l.queue, _o(sh.bind(null, a, l, e), [e]), l.getSnapshot !== t || c || rt !== null && rt.memoizedState.tag & 1) {
            if (a.flags |= 2048, ii(9, { destroy: void 0 }, uh.bind(null, a, l, n, t), null), Xe === null)
              throw Error(o(349));
            i || (ea & 127) !== 0 || ih(a, t, n);
          }
          return n;
        }
        function ih(e, t, n) {
          e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ve.updateQueue, t === null ? (t = Ts(), ve.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
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
            if (e = n(), gl) {
              Gt(true);
              try {
                n();
              } finally {
                Gt(false);
              }
            }
          }
          return t.memoizedState = t.baseState = e, t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ta, lastRenderedState: e }, t;
        }
        function ch(e, t, n, a) {
          return e.baseState = n, vo(e, qe, typeof a == "function" ? a : ta);
        }
        function vg(e, t, n, a, l) {
          if (Rs(e))
            throw Error(o(485));
          if (e = t.action, e !== null) {
            var i = { payload: l, action: e, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(c) {
              i.listeners.push(c);
            } };
            U.T !== null ? n(true) : i.isTransition = false, a(i), n = t.pending, n === null ? (i.next = t.pending = i, fh(t, i)) : (i.next = n.next, t.pending = n.next = i);
          }
        }
        function fh(e, t) {
          var n = t.action, a = t.payload, l = e.state;
          if (t.isTransition) {
            var i = U.T, c = {};
            U.T = c;
            try {
              var y = n(l, a), T = U.S;
              T !== null && T(c, y), hh(e, t, y);
            } catch (M) {
              xo(e, t, M);
            } finally {
              i !== null && c.types !== null && (i.types = c.types), U.T = i;
            }
          } else
            try {
              i = n(l, a), hh(e, t, i);
            } catch (M) {
              xo(e, t, M);
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
        function gh(e, t) {
          if (Re) {
            var n = Xe.formState;
            if (n !== null) {
              e: {
                var a = ve;
                if (Re) {
                  if (Ze) {
                    t: {
                      for (var l = Ze, i = cn; l.nodeType !== 8; ) {
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
                      Ze = hn(l.nextSibling), a = l.data === "F!";
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
          return n = Ct(), n.memoizedState = n.baseState = t, a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: mh, lastRenderedState: t }, n.queue = a, n = Mh.bind(null, ve, a), a.dispatch = n, a = So(false), i = wo.bind(null, ve, false, a.queue), a = Ct(), l = { state: t, dispatch: null, action: e, pending: null }, a.queue = l, n = vg.bind(null, ve, l, i, n), l.dispatch = n, a.memoizedState = e, [t, n, false];
        }
        function yh(e) {
          var t = lt();
          return vh(t, qe, e);
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
          return n !== t.memoizedState && (ve.flags |= 2048, ii(9, { destroy: void 0 }, bg.bind(null, l, n), null)), [a, i, e];
        }
        function bg(e, t) {
          e.action = t;
        }
        function bh(e) {
          var t = lt(), n = qe;
          if (n !== null)
            return vh(t, n, e);
          lt(), t = t.memoizedState, n = lt();
          var a = n.queue.dispatch;
          return n.memoizedState = e, [t, a, false];
        }
        function ii(e, t, n, a) {
          return e = { tag: e, create: n, deps: a, inst: t, next: null }, t = ve.updateQueue, t === null && (t = Ts(), ve.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e;
        }
        function Sh() {
          return lt().memoizedState;
        }
        function Os(e, t, n, a) {
          var l = Ct();
          ve.flags |= e, l.memoizedState = ii(1 | t, { destroy: void 0 }, n, a === void 0 ? null : a);
        }
        function ws(e, t, n, a) {
          var l = lt();
          a = a === void 0 ? null : a;
          var i = l.memoizedState.inst;
          qe !== null && a !== null && fo(a, qe.memoizedState.deps) ? l.memoizedState = ii(t, i, n, a) : (ve.flags |= e, l.memoizedState = ii(1 | t, i, n, a));
        }
        function xh(e, t) {
          Os(8390656, 8, e, t);
        }
        function _o(e, t) {
          ws(2048, 8, e, t);
        }
        function Sg(e) {
          ve.flags |= 4;
          var t = ve.updateQueue;
          if (t === null)
            t = Ts(), ve.updateQueue = t, t.events = [e];
          else {
            var n = t.events;
            n === null ? t.events = [e] : n.push(e);
          }
        }
        function _h(e) {
          var t = lt().memoizedState;
          return Sg({ ref: t, nextImpl: e }), function() {
            if ((Ue & 2) !== 0)
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
          if (a = e(), gl) {
            Gt(true);
            try {
              e();
            } finally {
              Gt(false);
            }
          }
          return n.memoizedState = [a, t], a;
        }
        function Eo(e, t, n) {
          return n === void 0 || (ea & 1073741824) !== 0 && (Ae & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = Nd(), ve.lanes |= e, ja |= e, n);
        }
        function Nh(e, t, n, a) {
          return Vt(n, t) ? n : ni.current !== null ? (e = Eo(e, n, a), Vt(e, t) || (ot = true), e) : (ea & 42) === 0 || (ea & 1073741824) !== 0 && (Ae & 261930) === 0 ? (ot = true, e.memoizedState = n) : (e = Nd(), ve.lanes |= e, ja |= e, t);
        }
        function zh(e, t, n, a, l) {
          var i = k.p;
          k.p = i !== 0 && 8 > i ? i : 8;
          var c = U.T, y = {};
          U.T = y, wo(e, false, t, n);
          try {
            var T = l(), M = U.S;
            if (M !== null && M(y, T), T !== null && typeof T == "object" && typeof T.then == "function") {
              var G = mg(T, a);
              lu(e, t, G, Wt(e));
            } else
              lu(e, t, a, Wt(e));
          } catch (Z) {
            lu(e, t, { then: function() {
            }, status: "rejected", reason: Z }, Wt());
          } finally {
            k.p = i, c !== null && y.types !== null && (c.types = y.types), U.T = c;
          }
        }
        function xg() {
        }
        function Ao(e, t, n, a) {
          if (e.tag !== 5)
            throw Error(o(476));
          var l = jh(e).queue;
          zh(e, l, t, X, n === null ? xg : function() {
            return Ch(e), n(a);
          });
        }
        function jh(e) {
          var t = e.memoizedState;
          if (t !== null)
            return t;
          t = { memoizedState: X, baseState: X, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ta, lastRenderedState: X }, next: null };
          var n = {};
          return t.next = { memoizedState: n, baseState: n, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ta, lastRenderedState: n }, next: null }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
        }
        function Ch(e) {
          var t = jh(e);
          t.next === null && (t = e.alternate.memoizedState), lu(e, t.next.queue, {}, Wt());
        }
        function Oo() {
          return Et(xu);
        }
        function Uh() {
          return lt().memoizedState;
        }
        function Dh() {
          return lt().memoizedState;
        }
        function _g(e) {
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
        function Tg(e, t, n) {
          var a = Wt();
          n = { lane: a, revertLane: 0, gesture: null, action: n, hasEagerState: false, eagerState: null, next: null }, Rs(e) ? Bh(t, n) : (n = Qr(e, t, n, a), n !== null && (Lt(n, e, a), qh(n, t, a)));
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
                  return rs(e, t, l, 0), Xe === null && ss(), false;
              } catch (T) {
              } finally {
              }
            if (n = Qr(e, t, l, a), n !== null)
              return Lt(n, e, a), qh(n, t, a), true;
          }
          return false;
        }
        function wo(e, t, n, a) {
          if (a = { lane: 2, revertLane: ic(), gesture: null, action: a, hasEagerState: false, eagerState: null, next: null }, Rs(e)) {
            if (t)
              throw Error(o(479));
          } else
            t = Qr(e, n, a, 2), t !== null && Lt(t, e, 2);
        }
        function Rs(e) {
          var t = e.alternate;
          return e === ve || t !== null && t === ve;
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
        var iu = { readContext: Et, use: Es, useCallback: Ie, useContext: Ie, useEffect: Ie, useImperativeHandle: Ie, useLayoutEffect: Ie, useInsertionEffect: Ie, useMemo: Ie, useReducer: Ie, useRef: Ie, useState: Ie, useDebugValue: Ie, useDeferredValue: Ie, useTransition: Ie, useSyncExternalStore: Ie, useId: Ie, useHostTransitionStatus: Ie, useFormState: Ie, useActionState: Ie, useOptimistic: Ie, useMemoCache: Ie, useCacheRefresh: Ie };
        iu.useEffectEvent = Ie;
        var Hh = { readContext: Et, use: Es, useCallback: function(e, t) {
          return Ct().memoizedState = [e, t === void 0 ? null : t], e;
        }, useContext: Et, useEffect: xh, useImperativeHandle: function(e, t, n) {
          n = n != null ? n.concat([e]) : null, Os(4194308, 4, Ah.bind(null, t, e), n);
        }, useLayoutEffect: function(e, t) {
          return Os(4194308, 4, e, t);
        }, useInsertionEffect: function(e, t) {
          Os(4, 2, e, t);
        }, useMemo: function(e, t) {
          var n = Ct();
          t = t === void 0 ? null : t;
          var a = e();
          if (gl) {
            Gt(true);
            try {
              e();
            } finally {
              Gt(false);
            }
          }
          return n.memoizedState = [a, t], a;
        }, useReducer: function(e, t, n) {
          var a = Ct();
          if (n !== void 0) {
            var l = n(t);
            if (gl) {
              Gt(true);
              try {
                n(t);
              } finally {
                Gt(false);
              }
            }
          } else
            l = t;
          return a.memoizedState = a.baseState = l, e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: l }, a.queue = e, e = e.dispatch = Tg.bind(null, ve, e), [a.memoizedState, e];
        }, useRef: function(e) {
          var t = Ct();
          return e = { current: e }, t.memoizedState = e;
        }, useState: function(e) {
          e = So(e);
          var t = e.queue, n = Mh.bind(null, ve, t);
          return t.dispatch = n, [e.memoizedState, n];
        }, useDebugValue: To, useDeferredValue: function(e, t) {
          var n = Ct();
          return Eo(n, e, t);
        }, useTransition: function() {
          var e = So(false);
          return e = zh.bind(null, ve, e.queue, true, false), Ct().memoizedState = e, [false, e];
        }, useSyncExternalStore: function(e, t, n) {
          var a = ve, l = Ct();
          if (Re) {
            if (n === void 0)
              throw Error(o(407));
            n = n();
          } else {
            if (n = t(), Xe === null)
              throw Error(o(349));
            (Ae & 127) !== 0 || ih(a, t, n);
          }
          l.memoizedState = n;
          var i = { value: n, getSnapshot: t };
          return l.queue = i, xh(sh.bind(null, a, i, e), [e]), a.flags |= 2048, ii(9, { destroy: void 0 }, uh.bind(null, a, i, n, t), null), n;
        }, useId: function() {
          var e = Ct(), t = Xe.identifierPrefix;
          if (Re) {
            var n = Bn, a = Mn;
            n = (a & ~(1 << 32 - wt(a) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = _s++, 0 < n && (t += "H" + n.toString(32)), t += "_";
          } else
            n = gg++, t = "_" + t + "r_" + n.toString(32) + "_";
          return e.memoizedState = t;
        }, useHostTransitionStatus: Oo, useFormState: gh, useActionState: gh, useOptimistic: function(e) {
          var t = Ct();
          t.memoizedState = t.baseState = e;
          var n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
          return t.queue = n, t = wo.bind(null, ve, true, n), n.dispatch = t, [e, t];
        }, useMemoCache: yo, useCacheRefresh: function() {
          return Ct().memoizedState = _g.bind(null, ve);
        }, useEffectEvent: function(e) {
          var t = Ct(), n = { impl: e };
          return t.memoizedState = n, function() {
            if ((Ue & 2) !== 0)
              throw Error(o(440));
            return n.impl.apply(void 0, arguments);
          };
        } }, Ro = { readContext: Et, use: Es, useCallback: wh, useContext: Et, useEffect: _o, useImperativeHandle: Oh, useInsertionEffect: Th, useLayoutEffect: Eh, useMemo: Rh, useReducer: As, useRef: Sh, useState: function() {
          return As(ta);
        }, useDebugValue: To, useDeferredValue: function(e, t) {
          var n = lt();
          return Nh(n, qe.memoizedState, e, t);
        }, useTransition: function() {
          var e = As(ta)[0], t = lt().memoizedState;
          return [typeof e == "boolean" ? e : au(e), t];
        }, useSyncExternalStore: lh, useId: Uh, useHostTransitionStatus: Oo, useFormState: yh, useActionState: yh, useOptimistic: function(e, t) {
          var n = lt();
          return ch(n, qe, e, t);
        }, useMemoCache: yo, useCacheRefresh: Dh };
        Ro.useEffectEvent = _h;
        var Lh = { readContext: Et, use: Es, useCallback: wh, useContext: Et, useEffect: _o, useImperativeHandle: Oh, useInsertionEffect: Th, useLayoutEffect: Eh, useMemo: Rh, useReducer: bo, useRef: Sh, useState: function() {
          return bo(ta);
        }, useDebugValue: To, useDeferredValue: function(e, t) {
          var n = lt();
          return qe === null ? Eo(n, e, t) : Nh(n, qe.memoizedState, e, t);
        }, useTransition: function() {
          var e = bo(ta)[0], t = lt().memoizedState;
          return [typeof e == "boolean" ? e : au(e), t];
        }, useSyncExternalStore: lh, useId: Uh, useHostTransitionStatus: Oo, useFormState: bh, useActionState: bh, useOptimistic: function(e, t) {
          var n = lt();
          return qe !== null ? ch(n, qe, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
        }, useMemoCache: yo, useCacheRefresh: Dh };
        Lh.useEffectEvent = _h;
        function No(e, t, n, a) {
          t = e.memoizedState, n = n(a, t), n = n == null ? t : A({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
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
        function yl(e, t) {
          var n = t;
          if ("ref" in t) {
            n = {};
            for (var a in t)
              a !== "ref" && (n[a] = t[a]);
          }
          if (e = e.defaultProps) {
            n === t && (n = A({}, n));
            for (var l in e)
              n[l] === void 0 && (n[l] = e[l]);
          }
          return n;
        }
        function Gh(e) {
          us(e);
        }
        function Qh(e) {
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
        function Kh(e) {
          return e = Aa(e), e.tag = 3, e;
        }
        function kh(e, t, n, a) {
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
        function Eg(e, t, n, a, l) {
          if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
            if (t = n.alternate, t !== null && $l(t, n, l, true), n = Kt.current, n !== null) {
              switch (n.tag) {
                case 31:
                case 13:
                  return fn === null ? Xs() : n.alternate === null && et === 0 && (et = 3), n.flags &= -257, n.flags |= 65536, n.lanes = l, a === gs ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), nc(e, a, l)), false;
                case 22:
                  return n.flags |= 65536, a === gs ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([a]) }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), nc(e, a, l)), false;
              }
              throw Error(o(435, n.tag));
            }
            return nc(e, a, l), Xs(), false;
          }
          if (Re)
            return t = Kt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = l, a !== Fr && (e = Error(o(422), { cause: a }), Ji(sn(e, n)))) : (a !== Fr && (t = Error(o(423), { cause: a }), Ji(sn(t, n))), e = e.current.alternate, e.flags |= 65536, l &= -l, e.lanes |= l, a = sn(a, n), l = jo(e.stateNode, a, l), uo(e, l), et !== 4 && (et = 2)), false;
          var i = Error(o(520), { cause: a });
          if (i = sn(i, n), du === null ? du = [i] : du.push(i), et !== 4 && (et = 2), t === null)
            return true;
          a = sn(a, n), n = t;
          do {
            switch (n.tag) {
              case 3:
                return n.flags |= 65536, e = l & -l, n.lanes |= e, e = jo(n.stateNode, a, e), uo(n, e), false;
              case 1:
                if (t = n.type, i = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Ca === null || !Ca.has(i))))
                  return n.flags |= 65536, l &= -l, n.lanes |= l, l = Kh(l), kh(l, e, n, a), uo(n, l), false;
            }
            n = n.return;
          } while (n !== null);
          return false;
        }
        var Co = Error(o(461)), ot = false;
        function At(e, t, n, a) {
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
          return fl(t), a = ho(e, t, n, c, i, l), y = po(), e !== null && !ot ? (mo(e, t, l), na(e, t, l)) : (Re && y && kr(t), t.flags |= 1, At(e, t, a, l), t.child);
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
          return At(e, t, l, n), t.child;
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
          return ml(t, e.child, null, n), e = zs(t, t.pendingProps), e.flags |= 2, kt(t), t.memoizedState = null, e;
        }
        function Ag(e, t, n) {
          var a = t.pendingProps, l = (t.flags & 128) !== 0;
          if (t.flags &= -129, e === null) {
            if (Re) {
              if (a.mode === "hidden")
                return e = zs(t, a), t.lanes = 536870912, uu(null, e);
              if (co(t), (e = Ze) ? (e = fp(e, cn), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = { dehydrated: e, treeContext: Sa !== null ? { id: Mn, overflow: Bn } : null, retryLane: 536870912, hydrationErrors: null }, n = Bf(e), n.return = t, t.child = n, Tt = t, Ze = null)) : e = null, e === null)
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
              if (a = Xe, a !== null && (c = Xu(a, n), c !== 0 && c !== i.retryLane))
                throw i.retryLane = c, sl(e, c), Lt(a, e, c), Co;
              Xs(), t = Ih(e, t, n);
            } else
              e = i.treeContext, Ze = hn(c.nextSibling), Tt = t, Re = true, xa = null, cn = false, e !== null && Lf(t, e), t = zs(t, a), t.flags |= 4096;
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
          return fl(t), n = ho(e, t, n, a, void 0, l), a = po(), e !== null && !ot ? (mo(e, t, l), na(e, t, l)) : (Re && a && kr(t), t.flags |= 1, At(e, t, n, l), t.child);
        }
        function ed(e, t, n, a, l, i) {
          return fl(t), t.updateQueue = null, n = ah(t, a, n, l), nh(e), a = po(), e !== null && !ot ? (mo(e, t, i), na(e, t, i)) : (Re && a && kr(t), t.flags |= 1, At(e, t, n, i), t.child);
        }
        function td(e, t, n, a, l) {
          if (fl(t), t.stateNode === null) {
            var i = kl, c = n.contextType;
            typeof c == "object" && c !== null && (i = Et(c)), i = new n(a, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = zo, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = a, i.state = t.memoizedState, i.refs = {}, lo(t), c = n.contextType, i.context = typeof c == "object" && c !== null ? Et(c) : kl, i.state = t.memoizedState, c = n.getDerivedStateFromProps, typeof c == "function" && (No(t, n, c, a), i.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (c = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), c !== i.state && zo.enqueueReplaceState(i, i.state, null), tu(t, a, i, l), eu(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = true;
          } else if (e === null) {
            i = t.stateNode;
            var y = t.memoizedProps, T = yl(n, y);
            i.props = T;
            var M = i.context, G = n.contextType;
            c = kl, typeof G == "object" && G !== null && (c = Et(G));
            var Z = n.getDerivedStateFromProps;
            G = typeof Z == "function" || typeof i.getSnapshotBeforeUpdate == "function", y = t.pendingProps !== y, G || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (y || M !== c) && Xh(t, i, a, c), Ea = false;
            var q = t.memoizedState;
            i.state = q, tu(t, a, i, l), eu(), M = t.memoizedState, y || q !== M || Ea ? (typeof Z == "function" && (No(t, n, Z, a), M = t.memoizedState), (T = Ea || Yh(t, n, T, a, q, M, c)) ? (G || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = M), i.props = a, i.state = M, i.context = c, a = T) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = false);
          } else {
            i = t.stateNode, io(e, t), c = t.memoizedProps, G = yl(n, c), i.props = G, Z = t.pendingProps, q = i.context, M = n.contextType, T = kl, typeof M == "object" && M !== null && (T = Et(M)), y = n.getDerivedStateFromProps, (M = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (c !== Z || q !== T) && Xh(t, i, a, T), Ea = false, q = t.memoizedState, i.state = q, tu(t, a, i, l), eu();
            var Y = t.memoizedState;
            c !== Z || q !== Y || Ea || e !== null && e.dependencies !== null && hs(e.dependencies) ? (typeof y == "function" && (No(t, n, y, a), Y = t.memoizedState), (G = Ea || Yh(t, n, G, a, q, Y, T) || e !== null && e.dependencies !== null && hs(e.dependencies)) ? (M || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, Y, T), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(a, Y, T)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || c === e.memoizedProps && q === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && q === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = Y), i.props = a, i.state = Y, i.context = T, a = G) : (typeof i.componentDidUpdate != "function" || c === e.memoizedProps && q === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && q === e.memoizedState || (t.flags |= 1024), a = false);
          }
          return i = a, js(e, t), a = (t.flags & 128) !== 0, i || a ? (i = t.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && a ? (t.child = ml(t, e.child, null, l), t.child = ml(t, null, n, l)) : At(e, t, n, l), t.memoizedState = i.state, e = t.child) : e = na(e, t, l), e;
        }
        function nd(e, t, n, a) {
          return ol(), t.flags |= 256, At(e, t, n, a), t.child;
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
              if (l ? wa(t) : Ra(), (e = Ze) ? (e = fp(e, cn), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = { dehydrated: e, treeContext: Sa !== null ? { id: Mn, overflow: Bn } : null, retryLane: 536870912, hydrationErrors: null }, n = Bf(e), n.return = t, t.child = n, Tt = t, Ze = null)) : e = null, e === null)
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
                var M = c.dgst;
              c = M, a = Error(o(419)), a.stack = "", a.digest = c, Ji({ value: a, source: null, stack: null }), t = Ho(e, t, n);
            } else if (ot || $l(e, t, n, false), c = (n & e.childLanes) !== 0, ot || c) {
              if (c = Xe, c !== null && (a = Xu(c, n), a !== 0 && a !== T.retryLane))
                throw T.retryLane = a, sl(e, a), Lt(c, e, a), Co;
              yc(y) || Xs(), t = Ho(e, t, n);
            } else
              yc(y) ? (t.flags |= 192, t.child = e.child, t = null) : (e = T.treeContext, Ze = hn(y.nextSibling), Tt = t, Re = true, xa = null, cn = false, e !== null && Lf(t, e), t = qo(t, a.children), t.flags |= 4096);
            return t;
          }
          return l ? (Ra(), y = a.fallback, l = t.mode, T = e.child, M = T.sibling, a = Wn(T, { mode: "hidden", children: a.children }), a.subtreeFlags = T.subtreeFlags & 65011712, M !== null ? y = Wn(M, y) : (y = rl(y, l, n, null), y.flags |= 2), y.return = t, a.return = t, a.sibling = y, t.child = a, uu(null, a), a = t.child, y = e.child.memoizedState, y === null ? y = Mo(n) : (l = y.cachePool, l !== null ? (T = st._currentValue, l = l.parent !== T ? { parent: T, pool: T } : l) : l = Zf(), y = { baseLanes: y.baseLanes | n, cachePool: l }), a.memoizedState = y, a.childLanes = Bo(e, c, n), t.memoizedState = Do, uu(e.child, a)) : (wa(t), n = e.child, e = n.sibling, n = Wn(n, { mode: "visible", children: a.children }), n.return = t, n.sibling = null, e !== null && (c = t.deletions, c === null ? (t.deletions = [e], t.flags |= 16) : c.push(e)), t.child = n, t.memoizedState = null, n);
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
          if (y ? (c = c & 1 | 2, t.flags |= 128) : c &= 1, W(at, c), At(e, t, a, n), a = Re ? ki : 0, !y && e !== null && (e.flags & 128) !== 0)
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
        function Og(e, t, n) {
          switch (t.tag) {
            case 3:
              _t(t, t.stateNode.containerInfo), Ta(t, st, e.memoizedState.cache), ol();
              break;
            case 27:
            case 5:
              Za(t);
              break;
            case 4:
              _t(t, t.stateNode.containerInfo);
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
              if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), W(at, at.current), a)
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
                return ot = false, Og(e, t, n);
              ot = (e.flags & 131072) !== 0;
            }
          else
            ot = false, Re && (t.flags & 1048576) !== 0 && Hf(t, ki, t.index);
          switch (t.lanes = 0, t.tag) {
            case 16:
              e: {
                var a = t.pendingProps;
                if (e = dl(t.elementType), t.type = e, typeof e == "function")
                  Vr(e) ? (a = yl(e, a), t.tag = 1, t = td(null, t, e, a, n)) : (t.tag = 0, t = Uo(null, t, e, a, n));
                else {
                  if (e != null) {
                    var l = e.$$typeof;
                    if (l === xe) {
                      t.tag = 11, t = Jh(null, t, e, a, n);
                      break e;
                    } else if (l === de) {
                      t.tag = 14, t = Fh(null, t, e, a, n);
                      break e;
                    }
                  }
                  throw t = Fe(e) || e, Error(o(306, t, ""));
                }
              }
              return t;
            case 0:
              return Uo(e, t, t.type, t.pendingProps, n);
            case 1:
              return a = t.type, l = yl(a, t.pendingProps), td(e, t, a, l, n);
            case 3:
              e: {
                if (_t(t, t.stateNode.containerInfo), e === null)
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
                    for (Ze = hn(e.firstChild), Tt = t, Re = true, xa = null, cn = true, n = $f(t, null, a, n), t.child = n; n; )
                      n.flags = n.flags & -3 | 4096, n = n.sibling;
                  }
                else {
                  if (ol(), a === l) {
                    t = na(e, t, n);
                    break e;
                  }
                  At(e, t, a, n);
                }
                t = t.child;
              }
              return t;
            case 26:
              return js(e, t), e === null ? (n = yp(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : Re || (n = t.type, e = t.pendingProps, a = Js(Se.current).createElement(n), a[dt] = t, a[gt] = e, Ot(a, n, e), $e(a), t.stateNode = a) : t.memoizedState = yp(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
            case 27:
              return Za(t), e === null && Re && (a = t.stateNode = pp(t.type, t.pendingProps, Se.current), Tt = t, cn = true, l = Ze, Ba(t.type) ? (bc = l, Ze = hn(a.firstChild)) : Ze = l), At(e, t, t.pendingProps.children, n), js(e, t), e === null && (t.flags |= 4194304), t.child;
            case 5:
              return e === null && Re && ((l = a = Ze) && (a = n0(a, t.type, t.pendingProps, cn), a !== null ? (t.stateNode = a, Tt = t, Ze = hn(a.firstChild), cn = false, l = true) : l = false), l || _a(t)), Za(t), l = t.type, i = t.pendingProps, c = e !== null ? e.memoizedProps : null, a = i.children, pc(l, i) ? a = null : c !== null && pc(l, c) && (t.flags |= 32), t.memoizedState !== null && (l = ho(e, t, yg, null, null, n), xu._currentValue = l), js(e, t), At(e, t, a, n), t.child;
            case 6:
              return e === null && Re && ((e = n = Ze) && (n = a0(n, t.pendingProps, cn), n !== null ? (t.stateNode = n, Tt = t, Ze = null, e = true) : e = false), e || _a(t)), null;
            case 13:
              return ad(e, t, n);
            case 4:
              return _t(t, t.stateNode.containerInfo), a = t.pendingProps, e === null ? t.child = ml(t, null, a, n) : At(e, t, a, n), t.child;
            case 11:
              return Jh(e, t, t.type, t.pendingProps, n);
            case 7:
              return At(e, t, t.pendingProps, n), t.child;
            case 8:
              return At(e, t, t.pendingProps.children, n), t.child;
            case 12:
              return At(e, t, t.pendingProps.children, n), t.child;
            case 10:
              return a = t.pendingProps, Ta(t, t.type, a.value), At(e, t, a.children, n), t.child;
            case 9:
              return l = t.type._context, a = t.pendingProps.children, fl(t), l = Et(l), a = a(l), t.flags |= 1, At(e, t, a, n), t.child;
            case 14:
              return Fh(e, t, t.type, t.pendingProps, n);
            case 15:
              return Wh(e, t, t.type, t.pendingProps, n);
            case 19:
              return id(e, t, n);
            case 31:
              return Ag(e, t, n);
            case 22:
              return $h(e, t, n, t.pendingProps);
            case 24:
              return fl(t), a = Et(st), e === null ? (l = no(), l === null && (l = Xe, i = eo(), l.pooledCache = i, i.refCount++, i !== null && (l.pooledCacheLanes |= n), l = i), t.memoizedState = { parent: a, cache: l }, lo(t), Ta(t, st, l)) : ((e.lanes & n) !== 0 && (io(e, t), tu(t, null, null, n), eu()), l = e.memoizedState, i = t.memoizedState, l.parent !== a ? (l = { parent: a, cache: a }, t.memoizedState = l, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = l), Ta(t, st, a)) : (a = i.cache, Ta(t, st, a), a !== l.cache && Ir(t, [st], n, true))), At(e, t, t.pendingProps.children, n), t.child;
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
                throw pl = gs, ao;
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
              throw pl = gs, ao;
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
        function Ke(e) {
          var t = e.alternate !== null && e.alternate.child === e.child, n = 0, a = 0;
          if (t)
            for (var l = e.child; l !== null; )
              n |= l.lanes | l.childLanes, a |= l.subtreeFlags & 65011712, a |= l.flags & 65011712, l.return = e, l = l.sibling;
          else
            for (l = e.child; l !== null; )
              n |= l.lanes | l.childLanes, a |= l.subtreeFlags, a |= l.flags, l.return = e, l = l.sibling;
          return e.subtreeFlags |= a, e.childLanes = n, t;
        }
        function wg(e, t, n) {
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
              return Ke(t), null;
            case 1:
              return Ke(t), null;
            case 3:
              return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), In(st), We(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Wl(t) ? aa(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Wr())), Ke(t), null;
            case 26:
              var l = t.type, i = t.memoizedState;
              return e === null ? (aa(t), i !== null ? (Ke(t), sd(t, i)) : (Ke(t), Xo(t, l, null, a, n))) : i ? i !== e.memoizedState ? (aa(t), Ke(t), sd(t, i)) : (Ke(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && aa(t), Ke(t), Xo(t, l, e, a, n)), null;
            case 27:
              if (El(t), n = Se.current, l = t.type, e !== null && t.stateNode != null)
                e.memoizedProps !== a && aa(t);
              else {
                if (!a) {
                  if (t.stateNode === null)
                    throw Error(o(166));
                  return Ke(t), null;
                }
                e = ne.current, Wl(t) ? Yf(t) : (e = pp(l, a, n), t.stateNode = e, aa(t));
              }
              return Ke(t), null;
            case 5:
              if (El(t), l = t.type, e !== null && t.stateNode != null)
                e.memoizedProps !== a && aa(t);
              else {
                if (!a) {
                  if (t.stateNode === null)
                    throw Error(o(166));
                  return Ke(t), null;
                }
                if (i = ne.current, Wl(t))
                  Yf(t);
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
                  i[dt] = t, i[gt] = a;
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
                    switch (Ot(i, l, a), l) {
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
              return Ke(t), Xo(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
            case 6:
              if (e && t.stateNode != null)
                e.memoizedProps !== a && aa(t);
              else {
                if (typeof a != "string" && t.stateNode === null)
                  throw Error(o(166));
                if (e = Se.current, Wl(t)) {
                  if (e = t.stateNode, n = t.memoizedProps, a = null, l = Tt, l !== null)
                    switch (l.tag) {
                      case 27:
                      case 5:
                        a = l.memoizedProps;
                    }
                  e[dt] = t, e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === true || ap(e.nodeValue, n)), e || _a(t, true);
                } else
                  e = Js(e).createTextNode(a), e[dt] = t, t.stateNode = e;
              }
              return Ke(t), null;
            case 31:
              if (n = t.memoizedState, e === null || e.memoizedState !== null) {
                if (a = Wl(t), n !== null) {
                  if (e === null) {
                    if (!a)
                      throw Error(o(318));
                    if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e)
                      throw Error(o(557));
                    e[dt] = t;
                  } else
                    ol(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                  Ke(t), e = false;
                } else
                  n = Wr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = true;
                if (!e)
                  return t.flags & 256 ? (kt(t), t) : (kt(t), null);
                if ((t.flags & 128) !== 0)
                  throw Error(o(558));
              }
              return Ke(t), null;
            case 13:
              if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (l = Wl(t), a !== null && a.dehydrated !== null) {
                  if (e === null) {
                    if (!l)
                      throw Error(o(318));
                    if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l)
                      throw Error(o(317));
                    l[dt] = t;
                  } else
                    ol(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                  Ke(t), l = false;
                } else
                  l = Wr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), l = true;
                if (!l)
                  return t.flags & 256 ? (kt(t), t) : (kt(t), null);
              }
              return kt(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = a !== null, e = e !== null && e.memoizedState !== null, n && (a = t.child, l = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (l = a.alternate.memoizedState.cachePool.pool), i = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool), i !== l && (a.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), Us(t, t.updateQueue), Ke(t), null);
            case 4:
              return We(), e === null && oc(t.stateNode.containerInfo), Ke(t), null;
            case 10:
              return In(t.type), Ke(t), null;
            case 19:
              if (V(at), a = t.memoizedState, a === null)
                return Ke(t), null;
              if (l = (t.flags & 128) !== 0, i = a.rendering, i === null)
                if (l)
                  su(a, false);
                else {
                  if (et !== 0 || e !== null && (e.flags & 128) !== 0)
                    for (e = t.child; e !== null; ) {
                      if (i = Ss(e), i !== null) {
                        for (t.flags |= 128, su(a, false), e = i.updateQueue, t.updateQueue = e, Us(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                          Mf(n, e), n = n.sibling;
                        return W(at, at.current & 1 | 2), Re && $n(t, a.treeForkCount), t.child;
                      }
                      e = e.sibling;
                    }
                  a.tail !== null && Nt() > Hs && (t.flags |= 128, l = true, su(a, false), t.lanes = 4194304);
                }
              else {
                if (!l)
                  if (e = Ss(i), e !== null) {
                    if (t.flags |= 128, l = true, e = e.updateQueue, t.updateQueue = e, Us(t, e), su(a, true), a.tail === null && a.tailMode === "hidden" && !i.alternate && !Re)
                      return Ke(t), null;
                  } else
                    2 * Nt() - a.renderingStartTime > Hs && n !== 536870912 && (t.flags |= 128, l = true, su(a, false), t.lanes = 4194304);
                a.isBackwards ? (i.sibling = t.child, t.child = i) : (e = a.last, e !== null ? e.sibling = i : t.child = i, a.last = i);
              }
              return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = Nt(), e.sibling = null, n = at.current, W(at, l ? n & 1 | 2 : n & 1), Re && $n(t, a.treeForkCount), e) : (Ke(t), null);
            case 22:
            case 23:
              return kt(t), oo(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ke(t), n = t.updateQueue, n !== null && Us(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), e !== null && V(hl), null;
            case 24:
              return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), In(st), Ke(t), null;
            case 25:
              return null;
            case 30:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function Rg(e, t) {
          switch (Jr(t), t.tag) {
            case 1:
              return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
              return In(st), We(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
            case 26:
            case 27:
            case 5:
              return El(t), null;
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
              return V(at), null;
            case 4:
              return We(), null;
            case 10:
              return In(t.type), null;
            case 22:
            case 23:
              return kt(t), oo(), e !== null && V(hl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
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
              In(st), We();
              break;
            case 26:
            case 27:
            case 5:
              El(t);
              break;
            case 4:
              We();
              break;
            case 31:
              t.memoizedState !== null && kt(t);
              break;
            case 13:
              kt(t);
              break;
            case 19:
              V(at);
              break;
            case 10:
              In(t.type);
              break;
            case 22:
            case 23:
              kt(t), oo(), e !== null && V(hl);
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
            Me(t, t.return, y);
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
                    var T = n, M = y;
                    try {
                      M();
                    } catch (G) {
                      Me(l, T, G);
                    }
                  }
                }
                a = a.next;
              } while (a !== i);
            }
          } catch (G) {
            Me(t, t.return, G);
          }
        }
        function od(e) {
          var t = e.updateQueue;
          if (t !== null) {
            var n = e.stateNode;
            try {
              If(t, n);
            } catch (a) {
              Me(e, e.return, a);
            }
          }
        }
        function cd(e, t, n) {
          n.props = yl(e.type, e.memoizedProps), n.state = e.memoizedState;
          try {
            n.componentWillUnmount();
          } catch (a) {
            Me(e, t, a);
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
            Me(e, t, l);
          }
        }
        function qn(e, t) {
          var n = e.ref, a = e.refCleanup;
          if (n !== null)
            if (typeof a == "function")
              try {
                a();
              } catch (l) {
                Me(e, t, l);
              } finally {
                e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
              }
            else if (typeof n == "function")
              try {
                n(null);
              } catch (l) {
                Me(e, t, l);
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
            Me(e, e.return, l);
          }
        }
        function Go(e, t, n) {
          try {
            var a = e.stateNode;
            Wg(a, e.type, n, t), a[gt] = t;
          } catch (l) {
            Me(e, e.return, l);
          }
        }
        function hd(e) {
          return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ba(e.type) || e.tag === 4;
        }
        function Qo(e) {
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
            Ot(t, a, n), t[dt] = e, t[gt] = n;
          } catch (i) {
            Me(e, e.return, i);
          }
        }
        var la = false, ct = false, Zo = false, pd = typeof WeakSet == "function" ? WeakSet : Set, bt = null;
        function Ng(e, t) {
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
                  } catch (oe) {
                    n = null;
                    break e;
                  }
                  var c = 0, y = -1, T = -1, M = 0, G = 0, Z = e, q = null;
                  t:
                    for (; ; ) {
                      for (var Y; Z !== n || l !== 0 && Z.nodeType !== 3 || (y = c + l), Z !== i || a !== 0 && Z.nodeType !== 3 || (T = c + a), Z.nodeType === 3 && (c += Z.nodeValue.length), (Y = Z.firstChild) !== null; )
                        q = Z, Z = Y;
                      for (; ; ) {
                        if (Z === e)
                          break t;
                        if (q === n && ++M === l && (y = c), q === i && ++G === a && (T = c), (Y = Z.nextSibling) !== null)
                          break;
                        Z = q, q = Z.parentNode;
                      }
                      Z = Y;
                    }
                  n = y === -1 || T === -1 ? null : { start: y, end: T };
                } else
                  n = null;
              }
            n = n || { start: 0, end: 0 };
          } else
            n = null;
          for (dc = { focusedElem: e, selectionRange: n }, tr = false, bt = t; bt !== null; )
            if (t = bt, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
              e.return = t, bt = e;
            else
              for (; bt !== null; ) {
                switch (t = bt, i = t.alternate, e = t.flags, t.tag) {
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
                        var ae = yl(n.type, l);
                        e = a.getSnapshotBeforeUpdate(ae, i), a.__reactInternalSnapshotBeforeUpdate = e;
                      } catch (oe) {
                        Me(n, n.return, oe);
                      }
                    }
                    break;
                  case 3:
                    if ((e & 1024) !== 0) {
                      if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9)
                        gc(e);
                      else if (n === 1)
                        switch (e.nodeName) {
                          case "HEAD":
                          case "HTML":
                          case "BODY":
                            gc(e);
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
                  e.return = t.return, bt = e;
                  break;
                }
                bt = t.return;
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
                    Me(n, n.return, c);
                  }
                else {
                  var l = yl(n.type, t.memoizedProps);
                  t = t.memoizedState;
                  try {
                    e.componentDidUpdate(l, t, e.__reactInternalSnapshotBeforeUpdate);
                  } catch (c) {
                    Me(n, n.return, c);
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
                  Me(n, n.return, c);
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
              ua(e, n), a & 4 && bd(e, n), a & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Hg.bind(null, n), l0(e, n))));
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
        function gd(e) {
          var t = e.alternate;
          t !== null && (e.alternate = null, gd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Ci(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
        }
        var ke = null, Mt = false;
        function ia(e, t, n) {
          for (n = n.child; n !== null; )
            yd(e, t, n), n = n.sibling;
        }
        function yd(e, t, n) {
          if (zt && typeof zt.onCommitFiberUnmount == "function")
            try {
              zt.onCommitFiberUnmount(ka, n);
            } catch (i) {
            }
          switch (n.tag) {
            case 26:
              ct || qn(n, t), ia(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
              break;
            case 27:
              ct || qn(n, t);
              var a = ke, l = Mt;
              Ba(n.type) && (ke = n.stateNode, Mt = false), ia(e, t, n), vu(n.stateNode), ke = a, Mt = l;
              break;
            case 5:
              ct || qn(n, t);
            case 6:
              if (a = ke, l = Mt, ke = null, ia(e, t, n), ke = a, Mt = l, ke !== null)
                if (Mt)
                  try {
                    (ke.nodeType === 9 ? ke.body : ke.nodeName === "HTML" ? ke.ownerDocument.body : ke).removeChild(n.stateNode);
                  } catch (i) {
                    Me(n, t, i);
                  }
                else
                  try {
                    ke.removeChild(n.stateNode);
                  } catch (i) {
                    Me(n, t, i);
                  }
              break;
            case 18:
              ke !== null && (Mt ? (e = ke, op(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), yi(e)) : op(ke, n.stateNode));
              break;
            case 4:
              a = ke, l = Mt, ke = n.stateNode.containerInfo, Mt = true, ia(e, t, n), ke = a, Mt = l;
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
              yi(e);
            } catch (n) {
              Me(t, t.return, n);
            }
          }
        }
        function bd(e, t) {
          if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
            try {
              yi(e);
            } catch (n) {
              Me(t, t.return, n);
            }
        }
        function zg(e) {
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
          var n = zg(e);
          t.forEach(function(a) {
            if (!n.has(a)) {
              n.add(a);
              var l = Lg.bind(null, e, a);
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
                        ke = y.stateNode, Mt = false;
                        break e;
                      }
                      break;
                    case 5:
                      ke = y.stateNode, Mt = false;
                      break e;
                    case 3:
                    case 4:
                      ke = y.stateNode.containerInfo, Mt = true;
                      break e;
                  }
                  y = y.return;
                }
              if (ke === null)
                throw Error(o(160));
              yd(i, c, l), ke = null, Mt = false, i = l.alternate, i !== null && (i.return = null), l.return = null;
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
                              i = l.getElementsByTagName("title")[0], (!i || i[Nn] || i[dt] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = l.createElement(a), l.head.insertBefore(i, l.querySelector("head > title"))), Ot(i, a, n), i[dt] = e, $e(i), a = i;
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
                              i = l.createElement(a), Ot(i, a, n), l.head.appendChild(i);
                              break;
                            case "meta":
                              if (c = Sp("meta", "content", l).get(a + (n.content || ""))) {
                                for (y = 0; y < c.length; y++)
                                  if (i = c[y], i.getAttribute("content") === (n.content == null ? null : "" + n.content) && i.getAttribute("name") === (n.name == null ? null : n.name) && i.getAttribute("property") === (n.property == null ? null : n.property) && i.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && i.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                                    c.splice(y, 1);
                                    break t;
                                  }
                              }
                              i = l.createElement(a), Ot(i, a, n), l.head.appendChild(i);
                              break;
                            default:
                              throw Error(o(468, a));
                          }
                        i[dt] = e, $e(i), a = i;
                      }
                      e.stateNode = a;
                    } else
                      xp(l, e.type, e.stateNode);
                  else
                    e.stateNode = bp(l, a, e.memoizedProps);
                else
                  i !== a ? (i === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : i.count--, a === null ? xp(l, e.type, e.stateNode) : bp(l, a, e.memoizedProps)) : a === null && e.stateNode !== null && Go(e, e.memoizedProps, n.memoizedProps);
              }
              break;
            case 27:
              Bt(t, e), qt(e), a & 512 && (ct || n === null || qn(n, n.return)), n !== null && a & 4 && Go(e, e.memoizedProps, n.memoizedProps);
              break;
            case 5:
              if (Bt(t, e), qt(e), a & 512 && (ct || n === null || qn(n, n.return)), e.flags & 32) {
                l = e.stateNode;
                try {
                  Vn(l, "");
                } catch (ae) {
                  Me(e, e.return, ae);
                }
              }
              a & 4 && e.stateNode != null && (l = e.memoizedProps, Go(e, l, n !== null ? n.memoizedProps : l)), a & 1024 && (Zo = true);
              break;
            case 6:
              if (Bt(t, e), qt(e), a & 4) {
                if (e.stateNode === null)
                  throw Error(o(162));
                a = e.memoizedProps, n = e.stateNode;
                try {
                  n.nodeValue = a;
                } catch (ae) {
                  Me(e, e.return, ae);
                }
              }
              break;
            case 3:
              if ($s = null, l = vn, vn = Fs(t.containerInfo), Bt(t, e), vn = l, qt(e), a & 4 && n !== null && n.memoizedState.isDehydrated)
                try {
                  yi(t.containerInfo);
                } catch (ae) {
                  Me(e, e.return, ae);
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
              var T = n !== null && n.memoizedState !== null, M = la, G = ct;
              if (la = M || l, ct = G || T, Bt(t, e), ct = G, la = M, qt(e), a & 8192)
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
                            var Z = T.memoizedProps.style, q = Z != null && Z.hasOwnProperty("display") ? Z.display : null;
                            y.style.display = q == null || typeof q == "boolean" ? "" : ("" + q).trim();
                          }
                        } catch (ae) {
                          Me(T, T.return, ae);
                        }
                      }
                    } else if (t.tag === 6) {
                      if (n === null) {
                        T = t;
                        try {
                          T.stateNode.nodeValue = l ? "" : T.memoizedProps;
                        } catch (ae) {
                          Me(T, T.return, ae);
                        }
                      }
                    } else if (t.tag === 18) {
                      if (n === null) {
                        T = t;
                        try {
                          var Y = T.stateNode;
                          l ? cp(Y, true) : cp(T.stateNode, false);
                        } catch (ae) {
                          Me(T, T.return, ae);
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
                  var l = n.stateNode, i = Qo(e);
                  Ds(e, i, l);
                  break;
                case 5:
                  var c = n.stateNode;
                  n.flags & 32 && (Vn(c, ""), n.flags &= -33);
                  var y = Qo(e);
                  Ds(e, y, c);
                  break;
                case 3:
                case 4:
                  var T = n.stateNode.containerInfo, M = Qo(e);
                  Vo(e, M, T);
                  break;
                default:
                  throw Error(o(161));
              }
            } catch (G) {
              Me(e, e.return, G);
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
                  } catch (M) {
                    Me(a, a.return, M);
                  }
                if (a = i, l = a.updateQueue, l !== null) {
                  var y = a.stateNode;
                  try {
                    var T = l.shared.hiddenCallbacks;
                    if (T !== null)
                      for (l.shared.hiddenCallbacks = null, l = 0; l < T.length; l++)
                        Pf(T[l], y);
                  } catch (M) {
                    Me(a, a.return, M);
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
        function Ko(e, t) {
          var n = null;
          e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Fi(n));
        }
        function ko(e, t) {
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
                  Me(t, t.return, T);
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
              i = t.stateNode, c = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? bn(e, t, n, a) : cu(e, t) : i._visibility & 2 ? bn(e, t, n, a) : (i._visibility |= 2, ui(e, t, n, a, (t.subtreeFlags & 10256) !== 0 || false)), l & 2048 && Ko(c, t);
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
            var i = e, c = t, y = n, T = a, M = c.flags;
            switch (c.tag) {
              case 0:
              case 11:
              case 15:
                ui(i, c, y, T, l), ru(8, c);
                break;
              case 23:
                break;
              case 22:
                var G = c.stateNode;
                c.memoizedState !== null ? G._visibility & 2 ? ui(i, c, y, T, l) : cu(i, c) : (G._visibility |= 2, ui(i, c, y, T, l)), l && M & 2048 && Ko(c.alternate, c);
                break;
              case 24:
                ui(i, c, y, T, l), l && M & 2048 && ko(c.alternate, c);
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
                  cu(n, a), l & 2048 && Ko(a.alternate, a);
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
              Td(e, t, n), e = e.sibling;
        }
        function Td(e, t, n) {
          switch (e.tag) {
            case 26:
              si(e, t, n), e.flags & fu && e.memoizedState !== null && g0(n, vn, e.memoizedState, e.memoizedProps);
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
                bt = a, Od(a, e);
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
                bt = a, Od(a, e);
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
          for (; bt !== null; ) {
            var n = bt;
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
              a.return = n, bt = a;
            else
              e:
                for (n = e; bt !== null; ) {
                  a = bt;
                  var l = a.sibling, i = a.return;
                  if (gd(a), a === n) {
                    bt = null;
                    break e;
                  }
                  if (l !== null) {
                    l.return = i, bt = l;
                    break e;
                  }
                  bt = i;
                }
          }
        }
        var jg = { getCacheForType: function(e) {
          var t = Et(st), n = t.data.get(e);
          return n === void 0 && (n = e(), t.data.set(e, n)), n;
        }, cacheSignal: function() {
          return Et(st).controller.signal;
        } }, Cg = typeof WeakMap == "function" ? WeakMap : Map, Ue = 0, Xe = null, _e = null, Ae = 0, De = 0, Jt = null, za = false, ri = false, Jo = false, ra = 0, et = 0, ja = 0, bl = 0, Fo = 0, Ft = 0, oi = 0, du = null, Ht = null, Wo = false, qs = 0, wd = 0, Hs = 1 / 0, Ls = null, Ca = null, mt = 0, Ua = null, ci = null, oa = 0, $o = 0, Po = null, Rd = null, pu = 0, Io = null;
        function Wt() {
          return (Ue & 2) !== 0 && Ae !== 0 ? Ae & -Ae : U.T !== null ? ic() : Gu();
        }
        function Nd() {
          if (Ft === 0)
            if ((Ae & 536870912) === 0 || Re) {
              var e = wl;
              wl <<= 1, (wl & 3932160) === 0 && (wl = 262144), Ft = e;
            } else
              Ft = 536870912;
          return e = Kt.current, e !== null && (e.flags |= 32), Ft;
        }
        function Lt(e, t, n) {
          (e === Xe && (De === 2 || De === 9) || e.cancelPendingCommit !== null) && (fi(e, 0), Da(e, Ae, Ft, false)), Xn(e, n), ((Ue & 2) === 0 || e !== Xe) && (e === Xe && ((Ue & 2) === 0 && (bl |= n), et === 4 && Da(e, Ae, Ft, false)), Hn(e));
        }
        function zd(e, t, n) {
          if ((Ue & 6) !== 0)
            throw Error(o(327));
          var a = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Wa(e, t), l = a ? Mg(e, t) : tc(e, t, true), i = a;
          do {
            if (l === 0) {
              ri && !a && Da(e, t, 0, false);
              break;
            } else {
              if (n = e.current.alternate, i && !Ug(n)) {
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
        function jd(e, t, n, a, l, i, c, y, T, M, G, Z, q, Y) {
          if (e.timeoutHandle = -1, Z = t.subtreeFlags, Z & 8192 || (Z & 16785408) === 16785408) {
            Z = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: true, waitingForViewTransition: false, unsuspend: It }, Td(t, i, Z);
            var ae = (i & 62914560) === i ? qs - Nt() : (i & 4194048) === i ? wd - Nt() : 0;
            if (ae = y0(Z, ae), ae !== null) {
              oa = i, e.cancelPendingCommit = ae(Ld.bind(null, e, t, i, n, a, l, c, y, T, G, Z, null, q, Y)), Da(e, i, c, !M);
              return;
            }
          }
          Ld(e, t, i, n, a, l, c, y, T);
        }
        function Ug(e) {
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
            var i = 31 - wt(l), c = 1 << i;
            a[i] = -1, l &= ~c;
          }
          n !== 0 && Lu(e, n, t);
        }
        function Ys() {
          return (Ue & 6) === 0 ? (mu(0), false) : true;
        }
        function ec() {
          if (_e !== null) {
            if (De === 0)
              var e = _e.return;
            else
              e = _e, Pn = cl = null, go(e), ti = null, $i = 0, e = _e;
            for (; e !== null; )
              rd(e.alternate, e), e = e.return;
            _e = null;
          }
        }
        function fi(e, t) {
          var n = e.timeoutHandle;
          n !== -1 && (e.timeoutHandle = -1, Ig(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), oa = 0, ec(), Xe = e, _e = n = Wn(e.current, null), Ae = t, De = 0, Jt = null, za = false, ri = Wa(e, t), Jo = false, oi = Ft = Fo = bl = ja = et = 0, Ht = du = null, Wo = false, (t & 8) !== 0 && (t |= t & 32);
          var a = e.entangledLanes;
          if (a !== 0)
            for (e = e.entanglements, a &= t; 0 < a; ) {
              var l = 31 - wt(a), i = 1 << l;
              t |= e[l], a &= ~i;
            }
          return ra = t, ss(), n;
        }
        function Cd(e, t) {
          ve = null, U.H = iu, t === ei || t === ms ? (t = Jf(), De = 3) : t === ao ? (t = Jf(), De = 4) : De = t === Co ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Jt = t, _e === null && (et = 1, Ns(e, sn(t, e.current)));
        }
        function Ud() {
          var e = Kt.current;
          return e === null ? true : (Ae & 4194048) === Ae ? fn === null : (Ae & 62914560) === Ae || (Ae & 536870912) !== 0 ? e === fn : false;
        }
        function Dd() {
          var e = U.H;
          return U.H = iu, e === null ? iu : e;
        }
        function Md() {
          var e = U.A;
          return U.A = jg, e;
        }
        function Xs() {
          et = 4, za || (Ae & 4194048) !== Ae && Kt.current !== null || (ri = true), (ja & 134217727) === 0 && (bl & 134217727) === 0 || Xe === null || Da(Xe, Ae, Ft, false);
        }
        function tc(e, t, n) {
          var a = Ue;
          Ue |= 2;
          var l = Dd(), i = Md();
          (Xe !== e || Ae !== t) && (Ls = null, fi(e, t)), t = false;
          var c = et;
          e:
            do
              try {
                if (De !== 0 && _e !== null) {
                  var y = _e, T = Jt;
                  switch (De) {
                    case 8:
                      ec(), c = 6;
                      break e;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                      Kt.current === null && (t = true);
                      var M = De;
                      if (De = 0, Jt = null, hi(e, y, T, M), n && ri) {
                        c = 0;
                        break e;
                      }
                      break;
                    default:
                      M = De, De = 0, Jt = null, hi(e, y, T, M);
                  }
                }
                Dg(), c = et;
                break;
              } catch (G) {
                Cd(e, G);
              }
            while (true);
          return t && e.shellSuspendCounter++, Pn = cl = null, Ue = a, U.H = l, U.A = i, _e === null && (Xe = null, Ae = 0, ss()), c;
        }
        function Dg() {
          for (; _e !== null; )
            Bd(_e);
        }
        function Mg(e, t) {
          var n = Ue;
          Ue |= 2;
          var a = Dd(), l = Md();
          Xe !== e || Ae !== t ? (Ls = null, Hs = Nt() + 500, fi(e, t)) : ri = Wa(e, t);
          e:
            do
              try {
                if (De !== 0 && _e !== null) {
                  t = _e;
                  var i = Jt;
                  t:
                    switch (De) {
                      case 1:
                        De = 0, Jt = null, hi(e, t, i, 1);
                        break;
                      case 2:
                      case 9:
                        if (Kf(i)) {
                          De = 0, Jt = null, qd(t);
                          break;
                        }
                        t = function() {
                          De !== 2 && De !== 9 || Xe !== e || (De = 7), Hn(e);
                        }, i.then(t, t);
                        break e;
                      case 3:
                        De = 7;
                        break e;
                      case 4:
                        De = 5;
                        break e;
                      case 7:
                        Kf(i) ? (De = 0, Jt = null, qd(t)) : (De = 0, Jt = null, hi(e, t, i, 7));
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
                              De = 0, Jt = null;
                              var T = y.sibling;
                              if (T !== null)
                                _e = T;
                              else {
                                var M = y.return;
                                M !== null ? (_e = M, Gs(M)) : _e = null;
                              }
                              break t;
                            }
                        }
                        De = 0, Jt = null, hi(e, t, i, 5);
                        break;
                      case 6:
                        De = 0, Jt = null, hi(e, t, i, 6);
                        break;
                      case 8:
                        ec(), et = 6;
                        break e;
                      default:
                        throw Error(o(462));
                    }
                }
                Bg();
                break;
              } catch (G) {
                Cd(e, G);
              }
            while (true);
          return Pn = cl = null, U.H = a, U.A = l, Ue = n, _e !== null ? 0 : (Xe = null, Ae = 0, ss(), et);
        }
        function Bg() {
          for (; _e !== null && !Ar(); )
            Bd(_e);
        }
        function Bd(e) {
          var t = ud(e.alternate, e, ra);
          e.memoizedProps = e.pendingProps, t === null ? Gs(e) : _e = t;
        }
        function qd(e) {
          var t = e, n = t.alternate;
          switch (t.tag) {
            case 15:
            case 0:
              t = ed(n, t, t.pendingProps, t.type, void 0, Ae);
              break;
            case 11:
              t = ed(n, t, t.pendingProps, t.type.render, t.ref, Ae);
              break;
            case 5:
              go(t);
            default:
              rd(n, t), t = _e = Mf(t, ra), t = ud(n, t, ra);
          }
          e.memoizedProps = e.pendingProps, t === null ? Gs(e) : _e = t;
        }
        function hi(e, t, n, a) {
          Pn = cl = null, go(t), ti = null, $i = 0;
          var l = t.return;
          try {
            if (Eg(e, l, t, n, Ae)) {
              et = 1, Ns(e, sn(n, e.current)), _e = null;
              return;
            }
          } catch (i) {
            if (l !== null)
              throw _e = l, i;
            et = 1, Ns(e, sn(n, e.current)), _e = null;
            return;
          }
          t.flags & 32768 ? (Re || a === 1 ? e = true : ri || (Ae & 536870912) !== 0 ? e = false : (za = e = true, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Kt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Hd(t, e)) : Gs(t);
        }
        function Gs(e) {
          var t = e;
          do {
            if ((t.flags & 32768) !== 0) {
              Hd(t, za);
              return;
            }
            e = t.return;
            var n = wg(t.alternate, t, ra);
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
          et === 0 && (et = 5);
        }
        function Hd(e, t) {
          do {
            var n = Rg(e.alternate, e);
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
          et = 6, _e = null;
        }
        function Ld(e, t, n, a, l, i, c, y, T) {
          e.cancelPendingCommit = null;
          do
            Qs();
          while (mt !== 0);
          if ((Ue & 6) !== 0)
            throw Error(o(327));
          if (t !== null) {
            if (t === e.current)
              throw Error(o(177));
            if (i = t.lanes | t.childLanes, i |= Gr, Nr(e, n, i, c, y, T), e === Xe && (_e = Xe = null, Ae = 0), ci = t, Ua = e, oa = n, $o = i, Po = l, Rd = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Yg(Ka, function() {
              return Vd(), null;
            })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
              a = U.T, U.T = null, l = k.p, k.p = 2, c = Ue, Ue |= 4;
              try {
                Ng(e, t, n);
              } finally {
                Ue = c, k.p = l, U.T = a;
              }
            }
            mt = 1, Yd(), Xd(), Gd();
          }
        }
        function Yd() {
          if (mt === 1) {
            mt = 0;
            var e = Ua, t = ci, n = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || n) {
              n = U.T, U.T = null;
              var a = k.p;
              k.p = 2;
              var l = Ue;
              Ue |= 4;
              try {
                Sd(t, e);
                var i = dc, c = Of(e.containerInfo), y = i.focusedElem, T = i.selectionRange;
                if (c !== y && y && y.ownerDocument && Af(y.ownerDocument.documentElement, y)) {
                  if (T !== null && qr(y)) {
                    var M = T.start, G = T.end;
                    if (G === void 0 && (G = M), "selectionStart" in y)
                      y.selectionStart = M, y.selectionEnd = Math.min(G, y.value.length);
                    else {
                      var Z = y.ownerDocument || document, q = Z && Z.defaultView || window;
                      if (q.getSelection) {
                        var Y = q.getSelection(), ae = y.textContent.length, oe = Math.min(T.start, ae), Le = T.end === void 0 ? oe : Math.min(T.end, ae);
                        !Y.extend && oe > Le && (c = Le, Le = oe, oe = c);
                        var N = Ef(y, oe), R = Ef(y, Le);
                        if (N && R && (Y.rangeCount !== 1 || Y.anchorNode !== N.node || Y.anchorOffset !== N.offset || Y.focusNode !== R.node || Y.focusOffset !== R.offset)) {
                          var D = Z.createRange();
                          D.setStart(N.node, N.offset), Y.removeAllRanges(), oe > Le ? (Y.addRange(D), Y.extend(R.node, R.offset)) : (D.setEnd(R.node, R.offset), Y.addRange(D));
                        }
                      }
                    }
                  }
                  for (Z = [], Y = y; Y = Y.parentNode; )
                    Y.nodeType === 1 && Z.push({ element: Y, left: Y.scrollLeft, top: Y.scrollTop });
                  for (typeof y.focus == "function" && y.focus(), y = 0; y < Z.length; y++) {
                    var Q = Z[y];
                    Q.element.scrollLeft = Q.left, Q.element.scrollTop = Q.top;
                  }
                }
                tr = !!hc, dc = hc = null;
              } finally {
                Ue = l, k.p = a, U.T = n;
              }
            }
            e.current = t, mt = 2;
          }
        }
        function Xd() {
          if (mt === 2) {
            mt = 0;
            var e = Ua, t = ci, n = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || n) {
              n = U.T, U.T = null;
              var a = k.p;
              k.p = 2;
              var l = Ue;
              Ue |= 4;
              try {
                md(e, t.alternate, t);
              } finally {
                Ue = l, k.p = a, U.T = n;
              }
            }
            mt = 3;
          }
        }
        function Gd() {
          if (mt === 4 || mt === 3) {
            mt = 0, Du();
            var e = Ua, t = ci, n = oa, a = Rd;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? mt = 5 : (mt = 0, ci = Ua = null, Qd(e, e.pendingLanes));
            var l = e.pendingLanes;
            if (l === 0 && (Ca = null), zi(n), t = t.stateNode, zt && typeof zt.onCommitFiberRoot == "function")
              try {
                zt.onCommitFiberRoot(ka, t, void 0, (t.current.flags & 128) === 128);
              } catch (T) {
              }
            if (a !== null) {
              t = U.T, l = k.p, k.p = 2, U.T = null;
              try {
                for (var i = e.onRecoverableError, c = 0; c < a.length; c++) {
                  var y = a[c];
                  i(y.value, { componentStack: y.stack });
                }
              } finally {
                U.T = t, k.p = l;
              }
            }
            (oa & 3) !== 0 && Qs(), Hn(e), l = e.pendingLanes, (n & 261930) !== 0 && (l & 42) !== 0 ? e === Io ? pu++ : (pu = 0, Io = e) : pu = 0, mu(0);
          }
        }
        function Qd(e, t) {
          (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Fi(t)));
        }
        function Qs() {
          return Yd(), Xd(), Gd(), Vd();
        }
        function Vd() {
          if (mt !== 5)
            return false;
          var e = Ua, t = $o;
          $o = 0;
          var n = zi(oa), a = U.T, l = k.p;
          try {
            k.p = 32 > n ? 32 : n, U.T = null, n = Po, Po = null;
            var i = Ua, c = oa;
            if (mt = 0, ci = Ua = null, oa = 0, (Ue & 6) !== 0)
              throw Error(o(331));
            var y = Ue;
            if (Ue |= 4, Ad(i.current), _d(i, i.current, c, n), Ue = y, mu(0, false), zt && typeof zt.onPostCommitFiberRoot == "function")
              try {
                zt.onPostCommitFiberRoot(ka, i);
              } catch (T) {
              }
            return true;
          } finally {
            k.p = l, U.T = a, Qd(e, t);
          }
        }
        function Zd(e, t, n) {
          t = sn(n, t), t = jo(e.stateNode, t, 2), e = Oa(e, t, 2), e !== null && (Xn(e, 2), Hn(e));
        }
        function Me(e, t, n) {
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
                  e = sn(n, e), n = Kh(2), a = Oa(t, n, 2), a !== null && (kh(n, a, t, e), Xn(a, 2), Hn(a));
                  break;
                }
              }
              t = t.return;
            }
        }
        function nc(e, t, n) {
          var a = e.pingCache;
          if (a === null) {
            a = e.pingCache = new Cg();
            var l = /* @__PURE__ */ new Set();
            a.set(t, l);
          } else
            l = a.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), a.set(t, l));
          l.has(n) || (Jo = true, l.add(n), e = qg.bind(null, e, t, n), t.then(e, e));
        }
        function qg(e, t, n) {
          var a = e.pingCache;
          a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Xe === e && (Ae & n) === n && (et === 4 || et === 3 && (Ae & 62914560) === Ae && 300 > Nt() - qs ? (Ue & 2) === 0 && fi(e, 0) : Fo |= n, oi === Ae && (oi = 0)), Hn(e);
        }
        function Kd(e, t) {
          t === 0 && (t = Hu()), e = sl(e, t), e !== null && (Xn(e, t), Hn(e));
        }
        function Hg(e) {
          var t = e.memoizedState, n = 0;
          t !== null && (n = t.retryLane), Kd(e, n);
        }
        function Lg(e, t) {
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
          a !== null && a.delete(t), Kd(e, n);
        }
        function Yg(e, t) {
          return Oi(e, t);
        }
        var Vs = null, di = null, ac = false, Zs = false, lc = false, Ma = 0;
        function Hn(e) {
          e !== di && e.next === null && (di === null ? Vs = di = e : di = di.next = e), Zs = true, ac || (ac = true, Gg());
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
                    i = (1 << 31 - wt(42 | e) + 1) - 1, i &= l & ~(c & ~y), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
                  }
                  i !== 0 && (n = true, Wd(a, i));
                } else
                  i = Ae, i = Rl(a, a === Xe ? i : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (i & 3) === 0 || Wa(a, i) || (n = true, Wd(a, i));
                a = a.next;
              }
            while (n);
            lc = false;
          }
        }
        function Xg() {
          kd();
        }
        function kd() {
          Zs = ac = false;
          var e = 0;
          Ma !== 0 && Pg() && (e = Ma);
          for (var t = Nt(), n = null, a = Vs; a !== null; ) {
            var l = a.next, i = Jd(a, t);
            i === 0 ? (a.next = null, n === null ? Vs = l : n.next = l, l === null && (di = n)) : (n = a, (e !== 0 || (i & 3) !== 0) && (Zs = true)), a = l;
          }
          mt !== 0 && mt !== 5 || mu(e), Ma !== 0 && (Ma = 0);
        }
        function Jd(e, t) {
          for (var n = e.suspendedLanes, a = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
            var c = 31 - wt(i), y = 1 << c, T = l[c];
            T === -1 ? ((y & n) === 0 || (y & a) !== 0) && (l[c] = Rr(y, t)) : T <= t && (e.expiredLanes |= y), i &= ~y;
          }
          if (t = Xe, n = Ae, n = Rl(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a = e.callbackNode, n === 0 || e === t && (De === 2 || De === 9) || e.cancelPendingCommit !== null)
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
                n = Ka;
                break;
              case 268435456:
                n = Ol;
                break;
              default:
                n = Ka;
            }
            return a = Fd.bind(null, e), n = Oi(n, a), e.callbackPriority = t, e.callbackNode = n, t;
          }
          return a !== null && a !== null && wi(a), e.callbackPriority = 2, e.callbackNode = null, 2;
        }
        function Fd(e, t) {
          if (mt !== 0 && mt !== 5)
            return e.callbackNode = null, e.callbackPriority = 0, null;
          var n = e.callbackNode;
          if (Qs() && e.callbackNode !== n)
            return null;
          var a = Ae;
          return a = Rl(e, e === Xe ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a === 0 ? null : (zd(e, a, t), Jd(e, Nt()), e.callbackNode != null && e.callbackNode === n ? Fd.bind(null, e) : null);
        }
        function Wd(e, t) {
          if (Qs())
            return null;
          zd(e, t, true);
        }
        function Gg() {
          e0(function() {
            (Ue & 6) !== 0 ? Oi(pe, Xg) : kd();
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
        function Qg(e, t, n, a, l) {
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
          var sc = Xr[uc], Vg = sc.toLowerCase(), Zg = sc[0].toUpperCase() + sc.slice(1);
          yn(Vg, "on" + Zg);
        }
        yn(Nf, "onAnimationEnd"), yn(zf, "onAnimationIteration"), yn(jf, "onAnimationStart"), yn("dblclick", "onDoubleClick"), yn("focusin", "onFocus"), yn("focusout", "onBlur"), yn(sg, "onTransitionRun"), yn(rg, "onTransitionStart"), yn(og, "onTransitionCancel"), yn(Cf, "onTransitionEnd"), Qt("onMouseEnter", ["mouseout", "mouseover"]), Qt("onMouseLeave", ["mouseout", "mouseover"]), Qt("onPointerEnter", ["pointerout", "pointerover"]), Qt("onPointerLeave", ["pointerout", "pointerover"]), jn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), jn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), jn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), jn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), jn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), jn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var gu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Kg = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gu));
        function Id(e, t) {
          t = (t & 4) !== 0;
          for (var n = 0; n < e.length; n++) {
            var a = e[n], l = a.event;
            a = a.listeners;
            e: {
              var i = void 0;
              if (t)
                for (var c = a.length - 1; 0 <= c; c--) {
                  var y = a[c], T = y.instance, M = y.currentTarget;
                  if (y = y.listener, T !== i && l.isPropagationStopped())
                    break e;
                  i = y, l.currentTarget = M;
                  try {
                    i(l);
                  } catch (G) {
                    us(G);
                  }
                  l.currentTarget = null, i = T;
                }
              else
                for (c = 0; c < a.length; c++) {
                  if (y = a[c], T = y.instance, M = y.currentTarget, y = y.listener, T !== i && l.isPropagationStopped())
                    break e;
                  i = y, l.currentTarget = M;
                  try {
                    i(l);
                  } catch (G) {
                    us(G);
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
        var Ks = "_reactListening" + Math.random().toString(36).slice(2);
        function oc(e) {
          if (!e[Ks]) {
            e[Ks] = true, Ut.forEach(function(n) {
              n !== "selectionchange" && (Kg.has(n) || rc(n, false, e), rc(n, true, e));
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Ks] || (t[Ks] = true, rc("selectionchange", false, t));
          }
        }
        function ep(e, t, n, a) {
          switch (Np(t)) {
            case 2:
              var l = S0;
              break;
            case 8:
              l = x0;
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
            var M = i, G = Ul(n), Z = [];
            e: {
              var q = Uf.get(e);
              if (q !== void 0) {
                var Y = nl, ae = e;
                switch (e) {
                  case "keypress":
                    if (ql(n) === 0)
                      break e;
                  case "keydown":
                  case "keyup":
                    Y = es;
                    break;
                  case "focusin":
                    ae = "focus", Y = F;
                    break;
                  case "focusout":
                    ae = "blur", Y = F;
                    break;
                  case "beforeblur":
                  case "afterblur":
                    Y = F;
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
                    Y = C;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    Y = J;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    Y = ts;
                    break;
                  case Nf:
                  case zf:
                  case jf:
                    Y = ce;
                    break;
                  case Cf:
                    Y = Xl;
                    break;
                  case "scroll":
                  case "scrollend":
                    Y = f;
                    break;
                  case "wheel":
                    Y = Jn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    Y = ge;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    Y = Ll;
                    break;
                  case "toggle":
                  case "beforetoggle":
                    Y = an;
                }
                var oe = (t & 4) !== 0, Le = !oe && (e === "scroll" || e === "scrollend"), N = oe ? q !== null ? q + "Capture" : null : q;
                oe = [];
                for (var R = M, D; R !== null; ) {
                  var Q = R;
                  if (D = Q.stateNode, Q = Q.tag, Q !== 5 && Q !== 26 && Q !== 27 || D === null || N === null || (Q = Cn(R, N), Q != null && oe.push(yu(R, Q, D))), Le)
                    break;
                  R = R.return;
                }
                0 < oe.length && (q = new Y(q, ae, null, n, G), Z.push({ event: q, listeners: oe }));
              }
            }
            if ((t & 7) === 0) {
              e: {
                if (q = e === "mouseover" || e === "pointerover", Y = e === "mouseout" || e === "pointerout", q && n !== tl && (ae = n.relatedTarget || n.fromElement) && (pa(ae) || ae[Rn]))
                  break e;
                if ((Y || q) && (q = G.window === G ? G : (q = G.ownerDocument) ? q.defaultView || q.parentWindow : window, Y ? (ae = n.relatedTarget || n.toElement, Y = M, ae = ae ? pa(ae) : null, ae !== null && (Le = b(ae), oe = ae.tag, ae !== Le || oe !== 5 && oe !== 27 && oe !== 6) && (ae = null)) : (Y = null, ae = M), Y !== ae)) {
                  if (oe = C, Q = "onMouseLeave", N = "onMouseEnter", R = "mouse", (e === "pointerout" || e === "pointerover") && (oe = Ll, Q = "onPointerLeave", N = "onPointerEnter", R = "pointer"), Le = Y == null ? q : Pa(Y), D = ae == null ? q : Pa(ae), q = new oe(Q, R + "leave", Y, n, G), q.target = Le, q.relatedTarget = D, Q = null, pa(G) === M && (oe = new oe(N, R + "enter", ae, n, G), oe.target = D, oe.relatedTarget = Le, Q = oe), Le = Q, Y && ae)
                    t: {
                      for (oe = kg, N = Y, R = ae, D = 0, Q = N; Q; Q = oe(Q))
                        D++;
                      Q = 0;
                      for (var re = R; re; re = oe(re))
                        Q++;
                      for (; 0 < D - Q; )
                        N = oe(N), D--;
                      for (; 0 < Q - D; )
                        R = oe(R), Q--;
                      for (; D--; ) {
                        if (N === R || R !== null && N === R.alternate) {
                          oe = N;
                          break t;
                        }
                        N = oe(N), R = oe(R);
                      }
                      oe = null;
                    }
                  else
                    oe = null;
                  Y !== null && tp(Z, q, Y, oe, false), ae !== null && Le !== null && tp(Z, Le, ae, oe, true);
                }
              }
              e: {
                if (q = M ? Pa(M) : window, Y = q.nodeName && q.nodeName.toLowerCase(), Y === "select" || Y === "input" && q.type === "file")
                  var je = vf;
                else if (gf(q))
                  if (bf)
                    je = lg;
                  else {
                    je = ng;
                    var ue = tg;
                  }
                else
                  Y = q.nodeName, !Y || Y.toLowerCase() !== "input" || q.type !== "checkbox" && q.type !== "radio" ? M && jl(M.elementType) && (je = vf) : je = ag;
                if (je && (je = je(e, M))) {
                  yf(Z, je, n, G);
                  break e;
                }
                ue && ue(e, q, M), e === "focusout" && M && q.type === "number" && M.memoizedProps.value != null && Bi(q, "number", q.value);
              }
              switch (ue = M ? Pa(M) : window, e) {
                case "focusin":
                  (gf(ue) || ue.contentEditable === "true") && (Vl = ue, Hr = M, Ki = null);
                  break;
                case "focusout":
                  Ki = Hr = Vl = null;
                  break;
                case "mousedown":
                  Lr = true;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  Lr = false, wf(Z, n, G);
                  break;
                case "selectionchange":
                  if (ug)
                    break;
                case "keydown":
                case "keyup":
                  wf(Z, n, G);
              }
              var be;
              if (ln)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var Oe = "onCompositionStart";
                      break e;
                    case "compositionend":
                      Oe = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      Oe = "onCompositionUpdate";
                      break e;
                  }
                  Oe = void 0;
                }
              else
                Ql ? ll(e, n) && (Oe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Oe = "onCompositionStart");
              Oe && (gn && n.locale !== "ko" && (Ql || Oe !== "onCompositionStart" ? Oe === "onCompositionEnd" && Ql && (be = Bl()) : (pt = G, va = "value" in pt ? pt.value : pt.textContent, Ql = true)), ue = ks(M, Oe), 0 < ue.length && (Oe = new te(Oe, e, null, n, G), Z.push({ event: Oe, listeners: ue }), be ? Oe.data = be : (be = Gi(n), be !== null && (Oe.data = be)))), (be = Dr ? $m(e, n) : Pm(e, n)) && (Oe = ks(M, "onBeforeInput"), 0 < Oe.length && (ue = new te("onBeforeInput", "beforeinput", null, n, G), Z.push({ event: ue, listeners: Oe }), ue.data = be)), Qg(Z, e, M, n, G);
            }
            Id(Z, t);
          });
        }
        function yu(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function ks(e, t) {
          for (var n = t + "Capture", a = []; e !== null; ) {
            var l = e, i = l.stateNode;
            if (l = l.tag, l !== 5 && l !== 26 && l !== 27 || i === null || (l = Cn(e, n), l != null && a.unshift(yu(e, l, i)), l = Cn(e, t), l != null && a.push(yu(e, l, i))), e.tag === 3)
              return a;
            e = e.return;
          }
          return [];
        }
        function kg(e) {
          if (e === null)
            return null;
          do
            e = e.return;
          while (e && e.tag !== 5 && e.tag !== 27);
          return e || null;
        }
        function tp(e, t, n, a, l) {
          for (var i = t._reactName, c = []; n !== null && n !== a; ) {
            var y = n, T = y.alternate, M = y.stateNode;
            if (y = y.tag, T !== null && T === a)
              break;
            y !== 5 && y !== 26 && y !== 27 || M === null || (T = M, l ? (M = Cn(n, i), M != null && c.unshift(yu(n, M, T))) : l || (M = Cn(n, i), M != null && c.push(yu(n, M, T)))), n = n.return;
          }
          c.length !== 0 && e.push({ event: t, listeners: c });
        }
        var Jg = /\r\n?/g, Fg = /\u0000|\uFFFD/g;
        function np(e) {
          return (typeof e == "string" ? e : "" + e).replace(Jg, `
`).replace(Fg, "");
        }
        function ap(e, t) {
          return t = np(t), np(e) === t;
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
              a = Cl("" + a), e.setAttribute(n, a);
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
              Te("beforetoggle", e), Te("toggle", e), Gn(e, "popover", a);
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
              Gn(e, "is", a);
              break;
            case "innerText":
            case "textContent":
              break;
            default:
              (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Pu.get(n) || n, Gn(e, n, a));
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
                  n in e ? e[n] = a : a === true ? e.setAttribute(n, "") : Gn(e, n, a);
                }
          }
        }
        function Ot(e, t, n) {
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
                        He(e, t, i, c, n, null);
                    }
                }
              l && He(e, t, "srcSet", n.srcSet, n, null), a && He(e, t, "src", n.src, n, null);
              return;
            case "input":
              Te("invalid", e);
              var y = i = c = l = null, T = null, M = null;
              for (a in n)
                if (n.hasOwnProperty(a)) {
                  var G = n[a];
                  if (G != null)
                    switch (a) {
                      case "name":
                        l = G;
                        break;
                      case "type":
                        c = G;
                        break;
                      case "checked":
                        T = G;
                        break;
                      case "defaultChecked":
                        M = G;
                        break;
                      case "value":
                        i = G;
                        break;
                      case "defaultValue":
                        y = G;
                        break;
                      case "children":
                      case "dangerouslySetInnerHTML":
                        if (G != null)
                          throw Error(o(137, t));
                        break;
                      default:
                        He(e, t, a, G, n, null);
                    }
                }
              Fu(e, i, y, T, M, c, l, false);
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
                      He(e, t, l, y, n, null);
                  }
              t = i, n = c, e.multiple = !!a, t != null ? ga(e, !!a, t, false) : n != null && ga(e, !!a, n, true);
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
              Te("beforetoggle", e), Te("toggle", e), Te("cancel", e), Te("close", e);
              break;
            case "iframe":
            case "object":
              Te("load", e);
              break;
            case "video":
            case "audio":
              for (a = 0; a < gu.length; a++)
                Te(gu[a], e);
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
              for (M in n)
                if (n.hasOwnProperty(M) && (a = n[M], a != null))
                  switch (M) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                      throw Error(o(137, t));
                    default:
                      He(e, t, M, a, n, null);
                  }
              return;
            default:
              if (jl(t)) {
                for (G in n)
                  n.hasOwnProperty(G) && (a = n[G], a !== void 0 && fc(e, t, G, a, n, void 0));
                return;
              }
          }
          for (y in n)
            n.hasOwnProperty(y) && (a = n[y], a != null && He(e, t, y, a, n, null));
        }
        function Wg(e, t, n, a) {
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
              var l = null, i = null, c = null, y = null, T = null, M = null, G = null;
              for (Y in n) {
                var Z = n[Y];
                if (n.hasOwnProperty(Y) && Z != null)
                  switch (Y) {
                    case "checked":
                      break;
                    case "value":
                      break;
                    case "defaultValue":
                      T = Z;
                    default:
                      a.hasOwnProperty(Y) || He(e, t, Y, null, a, Z);
                  }
              }
              for (var q in a) {
                var Y = a[q];
                if (Z = n[q], a.hasOwnProperty(q) && (Y != null || Z != null))
                  switch (q) {
                    case "type":
                      i = Y;
                      break;
                    case "name":
                      l = Y;
                      break;
                    case "checked":
                      M = Y;
                      break;
                    case "defaultChecked":
                      G = Y;
                      break;
                    case "value":
                      c = Y;
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
                      Y !== Z && He(e, t, q, Y, a, Z);
                  }
              }
              Mi(e, c, y, T, M, G, i, l);
              return;
            case "select":
              Y = c = y = q = null;
              for (i in n)
                if (T = n[i], n.hasOwnProperty(i) && T != null)
                  switch (i) {
                    case "value":
                      break;
                    case "multiple":
                      Y = T;
                    default:
                      a.hasOwnProperty(i) || He(e, t, i, null, a, T);
                  }
              for (l in a)
                if (i = a[l], T = n[l], a.hasOwnProperty(l) && (i != null || T != null))
                  switch (l) {
                    case "value":
                      q = i;
                      break;
                    case "defaultValue":
                      y = i;
                      break;
                    case "multiple":
                      c = i;
                    default:
                      i !== T && He(e, t, l, i, a, T);
                  }
              t = y, n = c, a = Y, q != null ? ga(e, !!n, q, false) : !!a != !!n && (t != null ? ga(e, !!n, t, true) : ga(e, !!n, n ? [] : "", false));
              return;
            case "textarea":
              Y = q = null;
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
                      q = l;
                      break;
                    case "defaultValue":
                      Y = l;
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
              Wu(e, q, Y);
              return;
            case "option":
              for (var ae in n)
                if (q = n[ae], n.hasOwnProperty(ae) && q != null && !a.hasOwnProperty(ae))
                  switch (ae) {
                    case "selected":
                      e.selected = false;
                      break;
                    default:
                      He(e, t, ae, null, a, q);
                  }
              for (T in a)
                if (q = a[T], Y = n[T], a.hasOwnProperty(T) && q !== Y && (q != null || Y != null))
                  switch (T) {
                    case "selected":
                      e.selected = q && typeof q != "function" && typeof q != "symbol";
                      break;
                    default:
                      He(e, t, T, q, a, Y);
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
                q = n[oe], n.hasOwnProperty(oe) && q != null && !a.hasOwnProperty(oe) && He(e, t, oe, null, a, q);
              for (M in a)
                if (q = a[M], Y = n[M], a.hasOwnProperty(M) && q !== Y && (q != null || Y != null))
                  switch (M) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                      if (q != null)
                        throw Error(o(137, t));
                      break;
                    default:
                      He(e, t, M, q, a, Y);
                  }
              return;
            default:
              if (jl(t)) {
                for (var Le in n)
                  q = n[Le], n.hasOwnProperty(Le) && q !== void 0 && !a.hasOwnProperty(Le) && fc(e, t, Le, void 0, a, q);
                for (G in a)
                  q = a[G], Y = n[G], !a.hasOwnProperty(G) || q === Y || q === void 0 && Y === void 0 || fc(e, t, G, q, a, Y);
                return;
              }
          }
          for (var N in n)
            q = n[N], n.hasOwnProperty(N) && q != null && !a.hasOwnProperty(N) && He(e, t, N, null, a, q);
          for (Z in a)
            q = a[Z], Y = n[Z], !a.hasOwnProperty(Z) || q === Y || q == null && Y == null || He(e, t, Z, q, a, Y);
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
        function $g() {
          if (typeof performance.getEntriesByType == "function") {
            for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
              var l = n[a], i = l.transferSize, c = l.initiatorType, y = l.duration;
              if (i && y && lp(c)) {
                for (c = 0, y = l.responseEnd, a += 1; a < n.length; a++) {
                  var T = n[a], M = T.startTime;
                  if (M > y)
                    break;
                  var G = T.transferSize, Z = T.initiatorType;
                  G && lp(Z) && (T = T.responseEnd, c += G * (T < y ? 1 : (y - M) / (T - M)));
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
        function Pg() {
          var e = window.event;
          return e && e.type === "popstate" ? e === mc ? false : (mc = e, true) : (mc = null, false);
        }
        var sp = typeof setTimeout == "function" ? setTimeout : void 0, Ig = typeof clearTimeout == "function" ? clearTimeout : void 0, rp = typeof Promise == "function" ? Promise : void 0, e0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof rp != "undefined" ? function(e) {
          return rp.resolve(null).then(e).catch(t0);
        } : sp;
        function t0(e) {
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
                  e.removeChild(l), yi(t);
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
          yi(t);
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
        function gc(e) {
          var t = e.firstChild;
          for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var n = t;
            switch (t = t.nextSibling, n.nodeName) {
              case "HTML":
              case "HEAD":
              case "BODY":
                gc(n), Ci(n);
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
        function n0(e, t, n, a) {
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
        function a0(e, t, n) {
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
        function yc(e) {
          return e.data === "$?" || e.data === "$~";
        }
        function vc(e) {
          return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
        }
        function l0(e, t) {
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
        var ca = k.d;
        k.d = { f: i0, r: u0, D: s0, C: r0, L: o0, m: c0, X: h0, S: f0, M: d0 };
        function i0() {
          var e = ca.f(), t = Ys();
          return e || t;
        }
        function u0(e) {
          var t = zn(e);
          t !== null && t.tag === 5 && t.type === "form" ? Ch(t) : ca.r(e);
        }
        var pi = typeof document == "undefined" ? null : document;
        function gp(e, t, n) {
          var a = pi;
          if (a && typeof t == "string" && t) {
            var l = jt(t);
            l = 'link[rel="' + e + '"][href="' + l + '"]', typeof n == "string" && (l += '[crossorigin="' + n + '"]'), mp.has(l) || (mp.add(l), e = { rel: e, crossOrigin: n, href: t }, a.querySelector(l) === null && (t = a.createElement("link"), Ot(t, "link", e), $e(t), a.head.appendChild(t)));
          }
        }
        function s0(e) {
          ca.D(e), gp("dns-prefetch", e, null);
        }
        function r0(e, t) {
          ca.C(e, t), gp("preconnect", e, t);
        }
        function o0(e, t, n) {
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
                i = gi(e);
            }
            dn.has(i) || (e = A({ rel: "preload", href: t === "image" && n && n.imageSrcSet ? void 0 : e, as: t }, n), dn.set(i, e), a.querySelector(l) !== null || t === "style" && a.querySelector(bu(i)) || t === "script" && a.querySelector(Su(i)) || (t = a.createElement("link"), Ot(t, "link", e), $e(t), a.head.appendChild(t)));
          }
        }
        function c0(e, t) {
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
                i = gi(e);
            }
            if (!dn.has(i) && (e = A({ rel: "modulepreload", href: e }, t), dn.set(i, e), n.querySelector(l) === null)) {
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
              a = n.createElement("link"), Ot(a, "link", e), $e(a), n.head.appendChild(a);
            }
          }
        }
        function f0(e, t, n) {
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
                e = A({ rel: "stylesheet", href: e, "data-precedence": t }, n), (n = dn.get(i)) && Sc(e, n);
                var T = c = a.createElement("link");
                $e(T), Ot(T, "link", e), T._p = new Promise(function(M, G) {
                  T.onload = M, T.onerror = G;
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
        function h0(e, t) {
          ca.X(e, t);
          var n = pi;
          if (n && e) {
            var a = ma(n).hoistableScripts, l = gi(e), i = a.get(l);
            i || (i = n.querySelector(Su(l)), i || (e = A({ src: e, async: true }, t), (t = dn.get(l)) && xc(e, t), i = n.createElement("script"), $e(i), Ot(i, "link", e), n.head.appendChild(i)), i = { type: "script", instance: i, count: 1, state: null }, a.set(l, i));
          }
        }
        function d0(e, t) {
          ca.M(e, t);
          var n = pi;
          if (n && e) {
            var a = ma(n).hoistableScripts, l = gi(e), i = a.get(l);
            i || (i = n.querySelector(Su(l)), i || (e = A({ src: e, async: true, type: "module" }, t), (t = dn.get(l)) && xc(e, t), i = n.createElement("script"), $e(i), Ot(i, "link", e), n.head.appendChild(i)), i = { type: "script", instance: i, count: 1, state: null }, a.set(l, i));
          }
        }
        function yp(e, t, n, a) {
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
                if (c || (l = l.ownerDocument || l, c = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, i.set(e, c), (i = l.querySelector(bu(e))) && !i._p && (c.instance = i, c.state.loading = 5), dn.has(e) || (n = { rel: "preload", as: "style", href: n.href, crossOrigin: n.crossOrigin, integrity: n.integrity, media: n.media, hrefLang: n.hrefLang, referrerPolicy: n.referrerPolicy }, dn.set(e, n), i || p0(l, e, n, c.state))), t && a === null)
                  throw Error(o(528, ""));
                return c;
              }
              if (t && a !== null)
                throw Error(o(529, ""));
              return null;
            case "script":
              return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = gi(n), n = ma(l).hoistableScripts, a = n.get(t), a || (a = { type: "script", instance: null, count: 0, state: null }, n.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
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
          return A({}, e, { "data-precedence": e.precedence, precedence: null });
        }
        function p0(e, t, n, a) {
          e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
            return a.loading |= 1;
          }), t.addEventListener("error", function() {
            return a.loading |= 2;
          }), Ot(t, "link", n), $e(t), e.head.appendChild(t));
        }
        function gi(e) {
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
                  return t.instance = a, $e(a), a;
                var l = A({}, n, { "data-href": n.href, "data-precedence": n.precedence, href: null, precedence: null });
                return a = (e.ownerDocument || e).createElement("style"), $e(a), Ot(a, "style", l), Ws(a, n.precedence, e), t.instance = a;
              case "stylesheet":
                l = mi(n.href);
                var i = e.querySelector(bu(l));
                if (i)
                  return t.state.loading |= 4, t.instance = i, $e(i), i;
                a = vp(n), (l = dn.get(l)) && Sc(a, l), i = (e.ownerDocument || e).createElement("link"), $e(i);
                var c = i;
                return c._p = new Promise(function(y, T) {
                  c.onload = y, c.onerror = T;
                }), Ot(i, "link", a), t.state.loading |= 4, Ws(i, n.precedence, e), t.instance = i;
              case "script":
                return i = gi(n.src), (l = e.querySelector(Su(i))) ? (t.instance = l, $e(l), l) : (a = n, (l = dn.get(i)) && (a = A({}, n), xc(a, l)), e = e.ownerDocument || e, l = e.createElement("script"), $e(l), Ot(l, "link", a), e.head.appendChild(l), t.instance = l);
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
            if (!(i[Nn] || i[dt] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
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
        function m0(e, t, n) {
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
        function g0(e, t, n, a) {
          if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== false) && (n.state.loading & 4) === 0) {
            if (n.instance === null) {
              var l = mi(a.href), i = t.querySelector(bu(l));
              if (i) {
                t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Ps.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = i, $e(i);
                return;
              }
              i = t.ownerDocument || t, a = vp(a), (l = dn.get(l)) && Sc(a, l), i = i.createElement("link"), $e(i);
              var c = i;
              c._p = new Promise(function(y, T) {
                c.onload = y, c.onerror = T;
              }), Ot(i, "link", a), n.instance = i;
            }
            e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Ps.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
          }
        }
        var _c = 0;
        function y0(e, t) {
          return e.stylesheets && e.count === 0 && er(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
            var a = setTimeout(function() {
              if (e.stylesheets && er(e, e.stylesheets), e.unsuspend) {
                var i = e.unsuspend;
                e.unsuspend = null, i();
              }
            }, 6e4 + t);
            0 < e.imgBytes && _c === 0 && (_c = 62500 * $g());
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
          e.stylesheets = null, e.unsuspend !== null && (e.count++, Is = /* @__PURE__ */ new Map(), t.forEach(v0, e), Is = null, Ps.call(e));
        }
        function v0(e, t) {
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
        var xu = { $$typeof: fe, Provider: null, Consumer: null, _currentValue: X, _currentValue2: X, _threadCount: 0 };
        function b0(e, t, n, a, l, i, c, y, T) {
          this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = $a(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = $a(0), this.hiddenUpdates = $a(null), this.identifierPrefix = a, this.onUncaughtError = l, this.onCaughtError = i, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = T, this.incompleteTransitions = /* @__PURE__ */ new Map();
        }
        function Tp(e, t, n, a, l, i, c, y, T, M, G, Z) {
          return e = new b0(e, t, n, c, T, M, G, Z, y), t = 1, i === true && (t |= 24), i = Zt(3, null, null, t), e.current = i, i.stateNode = e, t = eo(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = { element: a, isDehydrated: n, cache: t }, lo(i), e;
        }
        function Ep(e) {
          return e ? (e = kl, e) : kl;
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
        function S0(e, t, n, a) {
          var l = U.T;
          U.T = null;
          var i = k.p;
          try {
            k.p = 2, Ec(e, t, n, a);
          } finally {
            k.p = i, U.T = l;
          }
        }
        function x0(e, t, n, a) {
          var l = U.T;
          U.T = null;
          var i = k.p;
          try {
            k.p = 8, Ec(e, t, n, a);
          } finally {
            k.p = i, U.T = l;
          }
        }
        function Ec(e, t, n, a) {
          if (tr) {
            var l = Ac(a);
            if (l === null)
              cc(e, t, a, nr, n), zp(e, a);
            else if (T0(l, e, t, n, a))
              a.stopPropagation();
            else if (zp(e, a), t & 4 && -1 < _0.indexOf(e)) {
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
                            var T = 1 << 31 - wt(c);
                            y.entanglements[1] |= T, c &= ~T;
                          }
                          Hn(i), (Ue & 6) === 0 && (Hs = Nt() + 500, mu(0));
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
                if (e = d(t), e !== null)
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
                case pe:
                  return 2;
                case Ri:
                  return 8;
                case Ka:
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
        var wc = false, qa = null, Ha = null, La = null, _u = /* @__PURE__ */ new Map(), Tu = /* @__PURE__ */ new Map(), Ya = [], _0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
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
        function T0(e, t, n, a, l) {
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
                if (t = d(n), t !== null) {
                  e.blockedOn = t, Qu(e.priority, function() {
                    Rp(n);
                  });
                  return;
                }
              } else if (t === 31) {
                if (t = v(n), t !== null) {
                  e.blockedOn = t, Qu(e.priority, function() {
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
        function E0() {
          wc = false, qa !== null && ar(qa) && (qa = null), Ha !== null && ar(Ha) && (Ha = null), La !== null && ar(La) && (La = null), _u.forEach(Cp), Tu.forEach(Cp);
        }
        function lr(e, t) {
          e.blockedOn === t && (e.blockedOn = null, wc || (wc = true, s.unstable_scheduleCallback(s.unstable_NormalPriority, E0)));
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
        function yi(e) {
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
            var t = Gu();
            e = { blockedOn: null, target: e, priority: t };
            for (var n = 0; n < Ya.length && t !== 0 && t < Ya[n].priority; n++)
              ;
            Ya.splice(n, 0, e), n === 0 && jp(e);
          }
        };
        var Mp = u.version;
        if (Mp !== "19.2.0")
          throw Error(o(527, Mp, "19.2.0"));
        k.findDOMNode = function(e) {
          var t = e._reactInternals;
          if (t === void 0)
            throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
          return e = h(t), e = e !== null ? _(e) : null, e = e === null ? null : e.stateNode, e;
        };
        var A0 = { bundleType: 0, version: "19.2.0", rendererPackageName: "react-dom", currentDispatcherRef: U, reconcilerVersion: "19.2.0" };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
          var sr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!sr.isDisabled && sr.supportsFiber)
            try {
              ka = sr.inject(A0), zt = sr;
            } catch (e) {
            }
        }
        return wu.createRoot = function(e, t) {
          if (!g(e))
            throw Error(o(299));
          var n = false, a = "", l = Gh, i = Qh, c = Vh;
          return t != null && (t.unstable_strictMode === true && (n = true), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (l = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = Tp(e, 1, false, null, null, n, a, null, l, i, c, Dp), e[Rn] = t.current, oc(e), new Rc(t);
        }, wu.hydrateRoot = function(e, t, n) {
          if (!g(e))
            throw Error(o(299));
          var a = false, l = "", i = Gh, c = Qh, y = Vh, T = null;
          return n != null && (n.unstable_strictMode === true && (a = true), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onUncaughtError !== void 0 && (i = n.onUncaughtError), n.onCaughtError !== void 0 && (c = n.onCaughtError), n.onRecoverableError !== void 0 && (y = n.onRecoverableError), n.formState !== void 0 && (T = n.formState)), t = Tp(e, 1, true, t, n != null ? n : null, a, l, T, i, c, y, Dp), t.context = Ep(null), n = t.current, a = Wt(), a = ut(a), l = Aa(a), l.callback = null, Oa(n, l, a), n = a, t.current.lanes = n, Xn(t, n), Hn(t), e[Rn] = t.current, oc(e), new ur(t);
        }, wu.version = "19.2.0", wu;
      }
      var $p;
      function vy() {
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
        return s(), Mc.exports = yy(), Mc.exports;
      }
      var by = vy();
      var Sy = Em(by);
      var xy = Object.defineProperty;
      var _y = (s, u, r) => u in s ? xy(s, u, { enumerable: true, configurable: true, writable: true, value: r }) : s[u] = r;
      var _l = (s, u, r) => _y(s, typeof u != "symbol" ? u + "" : u, r);
      var Ty = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
            for (var b, d = 1, v = arguments.length; d < v; d++) {
              b = arguments[d];
              for (var m in b)
                Object.prototype.hasOwnProperty.call(b, m) && (g[m] = b[m]);
            }
            return g;
          }, s.apply(this, arguments);
        }, u = Sn && Sn.__awaiter || function(g, b, d, v) {
          function m(h) {
            return h instanceof d ? h : new d(function(_) {
              _(h);
            });
          }
          return new (d || (d = Promise))(function(h, _) {
            function A(B) {
              try {
                w(v.next(B));
              } catch (K) {
                _(K);
              }
            }
            function L(B) {
              try {
                w(v.throw(B));
              } catch (K) {
                _(K);
              }
            }
            function w(B) {
              B.done ? h(B.value) : m(B.value).then(A, L);
            }
            w((v = v.apply(g, b || [])).next());
          });
        }, r = Sn && Sn.__generator || function(g, b) {
          var d = { label: 0, sent: function() {
            if (h[0] & 1)
              throw h[1];
            return h[1];
          }, trys: [], ops: [] }, v, m, h, _;
          return _ = { next: A(0), throw: A(1), return: A(2) }, typeof Symbol == "function" && (_[Symbol.iterator] = function() {
            return this;
          }), _;
          function A(w) {
            return function(B) {
              return L([w, B]);
            };
          }
          function L(w) {
            if (v)
              throw new TypeError("Generator is already executing.");
            for (; _ && (_ = 0, w[0] && (d = 0)), d; )
              try {
                if (v = 1, m && (h = w[0] & 2 ? m.return : w[0] ? m.throw || ((h = m.return) && h.call(m), 0) : m.next) && !(h = h.call(m, w[1])).done)
                  return h;
                switch (m = 0, h && (w = [w[0] & 2, h.value]), w[0]) {
                  case 0:
                  case 1:
                    h = w;
                    break;
                  case 4:
                    return d.label++, { value: w[1], done: false };
                  case 5:
                    d.label++, m = w[1], w = [0];
                    continue;
                  case 7:
                    w = d.ops.pop(), d.trys.pop();
                    continue;
                  default:
                    if (h = d.trys, !(h = h.length > 0 && h[h.length - 1]) && (w[0] === 6 || w[0] === 2)) {
                      d = 0;
                      continue;
                    }
                    if (w[0] === 3 && (!h || w[1] > h[0] && w[1] < h[3])) {
                      d.label = w[1];
                      break;
                    }
                    if (w[0] === 6 && d.label < h[1]) {
                      d.label = h[1], h = w;
                      break;
                    }
                    if (h && d.label < h[2]) {
                      d.label = h[2], d.ops.push(w);
                      break;
                    }
                    h[2] && d.ops.pop(), d.trys.pop();
                    continue;
                }
                w = b.call(g, d);
              } catch (B) {
                w = [6, B], m = 0;
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
          function g(b, d, v, m, h) {
            this.appURL = b, this.axios = d, this.useToken = v != null ? v : false, this.token = m, this.tokenType = h;
          }
          return g.prototype.get = function(b, d) {
            return u(this, void 0, void 0, function() {
              var v;
              return r(this, function(m) {
                return v = new URLSearchParams(), d && Object.entries(d).forEach(function(h) {
                  var _ = h[0], A = h[1];
                  if (A != null) {
                    var L = typeof A == "object" ? JSON.stringify(A) : A;
                    v.set(_, L);
                  }
                }), [2, this.axios.get("/api/method/".concat(b), { params: v }).then(function(h) {
                  return h.data;
                }).catch(function(h) {
                  var _, A;
                  throw s(s({}, h.response.data), { httpStatus: h.response.status, httpStatusText: h.response.statusText, message: (_ = h.response.data.message) !== null && _ !== void 0 ? _ : "There was an error.", exception: (A = h.response.data.exception) !== null && A !== void 0 ? A : "" });
                })];
              });
            });
          }, g.prototype.post = function(b, d) {
            return u(this, void 0, void 0, function() {
              return r(this, function(v) {
                return [2, this.axios.post("/api/method/".concat(b), s({}, d)).then(function(m) {
                  return m.data;
                }).catch(function(m) {
                  var h, _;
                  throw s(s({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: (h = m.response.data.message) !== null && h !== void 0 ? h : "There was an error.", exception: (_ = m.response.data.exception) !== null && _ !== void 0 ? _ : "" });
                })];
              });
            });
          }, g.prototype.put = function(b, d) {
            return u(this, void 0, void 0, function() {
              return r(this, function(v) {
                return [2, this.axios.put("/api/method/".concat(b), s({}, d)).then(function(m) {
                  return m.data;
                }).catch(function(m) {
                  var h, _;
                  throw s(s({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: (h = m.response.data.message) !== null && h !== void 0 ? h : "There was an error.", exception: (_ = m.response.data.exception) !== null && _ !== void 0 ? _ : "" });
                })];
              });
            });
          }, g.prototype.delete = function(b, d) {
            return u(this, void 0, void 0, function() {
              return r(this, function(v) {
                return [2, this.axios.delete("/api/method/".concat(b), { params: d }).then(function(m) {
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
            for (var b, d = 1, v = arguments.length; d < v; d++) {
              b = arguments[d];
              for (var m in b)
                Object.prototype.hasOwnProperty.call(b, m) && (g[m] = b[m]);
            }
            return g;
          }, s.apply(this, arguments);
        }, u = xn && xn.__awaiter || function(g, b, d, v) {
          function m(h) {
            return h instanceof d ? h : new d(function(_) {
              _(h);
            });
          }
          return new (d || (d = Promise))(function(h, _) {
            function A(B) {
              try {
                w(v.next(B));
              } catch (K) {
                _(K);
              }
            }
            function L(B) {
              try {
                w(v.throw(B));
              } catch (K) {
                _(K);
              }
            }
            function w(B) {
              B.done ? h(B.value) : m(B.value).then(A, L);
            }
            w((v = v.apply(g, b || [])).next());
          });
        }, r = xn && xn.__generator || function(g, b) {
          var d = { label: 0, sent: function() {
            if (h[0] & 1)
              throw h[1];
            return h[1];
          }, trys: [], ops: [] }, v, m, h, _;
          return _ = { next: A(0), throw: A(1), return: A(2) }, typeof Symbol == "function" && (_[Symbol.iterator] = function() {
            return this;
          }), _;
          function A(w) {
            return function(B) {
              return L([w, B]);
            };
          }
          function L(w) {
            if (v)
              throw new TypeError("Generator is already executing.");
            for (; _ && (_ = 0, w[0] && (d = 0)), d; )
              try {
                if (v = 1, m && (h = w[0] & 2 ? m.return : w[0] ? m.throw || ((h = m.return) && h.call(m), 0) : m.next) && !(h = h.call(m, w[1])).done)
                  return h;
                switch (m = 0, h && (w = [w[0] & 2, h.value]), w[0]) {
                  case 0:
                  case 1:
                    h = w;
                    break;
                  case 4:
                    return d.label++, { value: w[1], done: false };
                  case 5:
                    d.label++, m = w[1], w = [0];
                    continue;
                  case 7:
                    w = d.ops.pop(), d.trys.pop();
                    continue;
                  default:
                    if (h = d.trys, !(h = h.length > 0 && h[h.length - 1]) && (w[0] === 6 || w[0] === 2)) {
                      d = 0;
                      continue;
                    }
                    if (w[0] === 3 && (!h || w[1] > h[0] && w[1] < h[3])) {
                      d.label = w[1];
                      break;
                    }
                    if (w[0] === 6 && d.label < h[1]) {
                      d.label = h[1], h = w;
                      break;
                    }
                    if (h && d.label < h[2]) {
                      d.label = h[2], d.ops.push(w);
                      break;
                    }
                    h[2] && d.ops.pop(), d.trys.pop();
                    continue;
                }
                w = b.call(g, d);
              } catch (B) {
                w = [6, B], m = 0;
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
          function g(b, d, v, m, h) {
            this.appURL = b, this.axios = d, this.useToken = v != null ? v : false, this.token = m, this.tokenType = h;
          }
          return g.prototype.getDoc = function(b, d) {
            return d === void 0 && (d = ""), u(this, void 0, void 0, function() {
              return r(this, function(v) {
                return [2, this.axios.get("/api/resource/".concat(b, "/").concat(encodeURIComponent(d))).then(function(m) {
                  return m.data.data;
                }).catch(function(m) {
                  var h, _;
                  throw s(s({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: "There was an error while fetching the document.", exception: (_ = (h = m.response.data.exception) !== null && h !== void 0 ? h : m.response.data.exc_type) !== null && _ !== void 0 ? _ : "" });
                })];
              });
            });
          }, g.prototype.getDocList = function(b, d) {
            var v;
            return u(this, void 0, void 0, function() {
              var m, h, _, A, L, w, B, K, ie, he, Ee;
              return r(this, function(fe) {
                return m = {}, d && (h = d.fields, _ = d.filters, A = d.orFilters, L = d.orderBy, w = d.limit, B = d.limit_start, K = d.groupBy, ie = d.asDict, he = ie === void 0 ? true : ie, Ee = L ? "".concat(String(L == null ? void 0 : L.field), " ").concat((v = L == null ? void 0 : L.order) !== null && v !== void 0 ? v : "asc") : "", m = { fields: h ? JSON.stringify(h) : void 0, filters: _ ? JSON.stringify(_) : void 0, or_filters: A ? JSON.stringify(A) : void 0, order_by: Ee, group_by: K, limit: w, limit_start: B, as_dict: he }), [2, this.axios.get("/api/resource/".concat(b), { params: m }).then(function(xe) {
                  return xe.data.data;
                }).catch(function(xe) {
                  var we, Ye;
                  throw s(s({}, xe.response.data), { httpStatus: xe.response.status, httpStatusText: xe.response.statusText, message: "There was an error while fetching the documents.", exception: (Ye = (we = xe.response.data.exception) !== null && we !== void 0 ? we : xe.response.data.exc_type) !== null && Ye !== void 0 ? Ye : "" });
                })];
              });
            });
          }, g.prototype.createDoc = function(b, d) {
            return u(this, void 0, void 0, function() {
              return r(this, function(v) {
                return [2, this.axios.post("/api/resource/".concat(b), s({}, d)).then(function(m) {
                  return m.data.data;
                }).catch(function(m) {
                  var h, _, A;
                  throw s(s({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: (h = m.response.data.message) !== null && h !== void 0 ? h : "There was an error while creating the document.", exception: (A = (_ = m.response.data.exception) !== null && _ !== void 0 ? _ : m.response.data.exc_type) !== null && A !== void 0 ? A : "" });
                })];
              });
            });
          }, g.prototype.updateDoc = function(b, d, v) {
            return u(this, void 0, void 0, function() {
              return r(this, function(m) {
                return [2, this.axios.put("/api/resource/".concat(b, "/").concat(d && encodeURIComponent(d)), s({}, v)).then(function(h) {
                  return h.data.data;
                }).catch(function(h) {
                  var _, A, L;
                  throw s(s({}, h.response.data), { httpStatus: h.response.status, httpStatusText: h.response.statusText, message: (_ = h.response.data.message) !== null && _ !== void 0 ? _ : "There was an error while updating the document.", exception: (L = (A = h.response.data.exception) !== null && A !== void 0 ? A : h.response.data.exc_type) !== null && L !== void 0 ? L : "" });
                })];
              });
            });
          }, g.prototype.deleteDoc = function(b, d) {
            return u(this, void 0, void 0, function() {
              return r(this, function(v) {
                return [2, this.axios.delete("/api/resource/".concat(b, "/").concat(d && encodeURIComponent(d))).then(function(m) {
                  return m.data;
                }).catch(function(m) {
                  var h, _;
                  throw s(s({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: "There was an error while deleting the document.", exception: (_ = (h = m.response.data.exception) !== null && h !== void 0 ? h : m.response.data.exc_type) !== null && _ !== void 0 ? _ : "" });
                })];
              });
            });
          }, g.prototype.getCount = function(b, d, v, m) {
            return v === void 0 && (v = false), m === void 0 && (m = false), u(this, void 0, void 0, function() {
              var h;
              return r(this, function(_) {
                return h = { doctype: b, filters: [] }, v && (h.cache = v), m && (h.debug = m), d && (h.filters = d ? JSON.stringify(d) : void 0), [2, this.axios.get("/api/method/frappe.client.get_count", { params: h }).then(function(A) {
                  return A.data.message;
                }).catch(function(A) {
                  var L, w;
                  throw s(s({}, A.response.data), { httpStatus: A.response.status, httpStatusText: A.response.statusText, message: "There was an error while getting the count.", exception: (w = (L = A.response.data.exception) !== null && L !== void 0 ? L : A.response.data.exc_type) !== null && w !== void 0 ? w : "" });
                })];
              });
            });
          }, g.prototype.getLastDoc = function(b, d) {
            return u(this, void 0, void 0, function() {
              var v, m;
              return r(this, function(h) {
                switch (h.label) {
                  case 0:
                    return v = { orderBy: { field: "creation", order: "desc" } }, d && (v = s(s({}, v), d)), [4, this.getDocList(b, s(s({}, v), { limit: 1, fields: ["name"] }))];
                  case 1:
                    return m = h.sent(), m.length > 0 ? [2, this.getDoc(b, m[0].name)] : [2, {}];
                }
              });
            });
          }, g.prototype.renameDoc = function(b, d, v, m) {
            return m === void 0 && (m = false), u(this, void 0, void 0, function() {
              return r(this, function(h) {
                return [2, this.axios.post("/api/method/frappe.client.rename_doc", { doctype: b, old_name: d, new_name: v, merge: m }).then(function(_) {
                  return _.data;
                }).catch(function(_) {
                  var A, L, w;
                  throw s(s({}, _.response.data), { httpStatus: _.response.status, httpStatusText: _.response.statusText, message: (A = _.response.data.message) !== null && A !== void 0 ? A : "There was an error while renaming the document.", exception: (w = (L = _.response.data.exception) !== null && L !== void 0 ? L : _.response.data.exc_type) !== null && w !== void 0 ? w : "" });
                })];
              });
            });
          }, g.prototype.getValue = function(b, d, v, m, h, _) {
            return m === void 0 && (m = true), h === void 0 && (h = false), _ === void 0 && (_ = null), u(this, void 0, void 0, function() {
              var A;
              return r(this, function(L) {
                return A = { doctype: b, fieldname: "[]", filters: [], as_dict: m, debug: h, parent: null }, d && (A.fieldname = typeof d == "object" ? JSON.stringify(d) : d), v && (A.filters = v ? JSON.stringify(v) : void 0), _ && (A.parent = _), [2, this.axios.get("/api/method/frappe.client.get_value", { params: A }).then(function(w) {
                  return w.data;
                }).catch(function(w) {
                  var B, K;
                  throw s(s({}, w.response.data), { httpStatus: w.response.status, httpStatusText: w.response.statusText, message: "There was an error while getting the value.", exception: (K = (B = w.response.data.exception) !== null && B !== void 0 ? B : w.response.data.exc_type) !== null && K !== void 0 ? K : "" });
                })];
              });
            });
          }, g.prototype.setValue = function(b, d, v, m) {
            return u(this, void 0, void 0, function() {
              return r(this, function(h) {
                return v !== null && typeof v == "object" && !Array.isArray(v) && (m = void 0), [2, this.axios.post("/api/method/frappe.client.set_value", { doctype: b, name: d, fieldname: v, value: m }).then(function(_) {
                  return _.data;
                }).catch(function(_) {
                  var A, L;
                  throw s(s({}, _.response.data), { httpStatus: _.response.status, httpStatusText: _.response.statusText, message: "There was an error while setting the value.", exception: (L = (A = _.response.data.exception) !== null && A !== void 0 ? A : _.response.data.exc_type) !== null && L !== void 0 ? L : "" });
                })];
              });
            });
          }, g.prototype.getSingleValue = function(b, d) {
            return u(this, void 0, void 0, function() {
              var v;
              return r(this, function(m) {
                return v = { doctype: b, field: d }, [2, this.axios.get("/api/method/frappe.client.get_single_value", { params: v }).then(function(h) {
                  return h.data;
                }).catch(function(h) {
                  var _, A;
                  throw s(s({}, h.response.data), { httpStatus: h.response.status, httpStatusText: h.response.statusText, message: "There was an error while getting the value of single doctype.", exception: (A = (_ = h.response.data.exception) !== null && _ !== void 0 ? _ : h.response.data.exc_type) !== null && A !== void 0 ? A : "" });
                })];
              });
            });
          }, g.prototype.submit = function(b) {
            return u(this, void 0, void 0, function() {
              return r(this, function(d) {
                return [2, this.axios.post("/api/method/frappe.client.submit", { doc: b }).then(function(v) {
                  return v.data.message;
                }).catch(function(v) {
                  var m, h;
                  throw s(s({}, v.response.data), { httpStatus: v.response.status, httpStatusText: v.response.statusText, message: "There was an error while submitting the document.", exception: (h = (m = v.response.data.exception) !== null && m !== void 0 ? m : v.response.data.exc_type) !== null && h !== void 0 ? h : "" });
                })];
              });
            });
          }, g.prototype.cancel = function(b, d) {
            return u(this, void 0, void 0, function() {
              return r(this, function(v) {
                return [2, this.axios.post("/api/method/frappe.client.cancel", { doctype: b, name: d }).then(function(m) {
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
      function Ey() {
        if (em)
          return Lc;
        em = 1;
        function s(f, p) {
          return function() {
            return f.apply(p, arguments);
          };
        }
        const { toString: u } = Object.prototype, { getPrototypeOf: r } = Object, { iterator: o, toStringTag: g } = Symbol, b = ((f) => (p) => {
          const S = u.call(p);
          return f[S] || (f[S] = S.slice(8, -1).toLowerCase());
        })(/* @__PURE__ */ Object.create(null)), d = (f) => (f = f.toLowerCase(), (p) => b(p) === f), v = (f) => (p) => typeof p === f, { isArray: m } = Array, h = v("undefined");
        function _(f) {
          return f !== null && !h(f) && f.constructor !== null && !h(f.constructor) && B(f.constructor.isBuffer) && f.constructor.isBuffer(f);
        }
        const A = d("ArrayBuffer");
        function L(f) {
          let p;
          return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? p = ArrayBuffer.isView(f) : p = f && f.buffer && A(f.buffer), p;
        }
        const w = v("string"), B = v("function"), K = v("number"), ie = (f) => f !== null && typeof f == "object", he = (f) => f === true || f === false, Ee = (f) => {
          if (b(f) !== "object")
            return false;
          const p = r(f);
          return (p === null || p === Object.prototype || Object.getPrototypeOf(p) === null) && !(g in f) && !(o in f);
        }, fe = (f) => {
          if (!ie(f) || _(f))
            return false;
          try {
            return Object.keys(f).length === 0 && Object.getPrototypeOf(f) === Object.prototype;
          } catch (p) {
            return false;
          }
        }, xe = d("Date"), we = d("File"), Ye = d("Blob"), de = d("FileList"), it = (f) => ie(f) && B(f.pipe), ht = (f) => {
          let p;
          return f && (typeof FormData == "function" && f instanceof FormData || B(f.append) && ((p = b(f)) === "formdata" || p === "object" && B(f.toString) && f.toString() === "[object FormData]"));
        }, St = d("URLSearchParams"), [tt, Je, xt, Fe] = ["ReadableStream", "Request", "Response", "Headers"].map(d), se = (f) => f.trim ? f.trim() : f.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        function U(f, p, { allOwnKeys: S = false } = {}) {
          if (f === null || typeof f > "u")
            return;
          let x, O;
          if (typeof f != "object" && (f = [f]), m(f))
            for (x = 0, O = f.length; x < O; x++)
              p.call(null, f[x], x, f);
          else {
            if (_(f))
              return;
            const C = S ? Object.getOwnPropertyNames(f) : Object.keys(f), j = C.length;
            let J;
            for (x = 0; x < j; x++)
              J = C[x], p.call(null, f[J], J, f);
          }
        }
        function k(f, p) {
          if (_(f))
            return null;
          p = p.toLowerCase();
          const S = Object.keys(f);
          let x = S.length, O;
          for (; x-- > 0; )
            if (O = S[x], p === O.toLowerCase())
              return O;
          return null;
        }
        const X = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Ty, ee = (f) => !h(f) && f !== X;
        function $() {
          const { caseless: f, skipUndefined: p } = ee(this) && this || {}, S = {}, x = (O, C) => {
            const j = f && k(S, C) || C;
            Ee(S[j]) && Ee(O) ? S[j] = $(S[j], O) : Ee(O) ? S[j] = $({}, O) : m(O) ? S[j] = O.slice() : (!p || !h(O)) && (S[j] = O);
          };
          for (let O = 0, C = arguments.length; O < C; O++)
            arguments[O] && U(arguments[O], x);
          return S;
        }
        const E = (f, p, S, { allOwnKeys: x } = {}) => (U(p, (O, C) => {
          S && B(O) ? f[C] = s(O, S) : f[C] = O;
        }, { allOwnKeys: x }), f), V = (f) => (f.charCodeAt(0) === 65279 && (f = f.slice(1)), f), W = (f, p, S, x) => {
          f.prototype = Object.create(p.prototype, x), f.prototype.constructor = f, Object.defineProperty(f, "super", { value: p.prototype }), S && Object.assign(f.prototype, S);
        }, ne = (f, p, S, x) => {
          let O, C, j;
          const J = {};
          if (p = p || {}, f == null)
            return p;
          do {
            for (O = Object.getOwnPropertyNames(f), C = O.length; C-- > 0; )
              j = O[C], (!x || x(j, f, p)) && !J[j] && (p[j] = f[j], J[j] = true);
            f = S !== false && r(f);
          } while (f && (!S || S(f, p)) && f !== Object.prototype);
          return p;
        }, me = (f, p, S) => {
          f = String(f), (S === void 0 || S > f.length) && (S = f.length), S -= p.length;
          const x = f.indexOf(p, S);
          return x !== -1 && x === S;
        }, Se = (f) => {
          if (!f)
            return null;
          if (m(f))
            return f;
          let p = f.length;
          if (!K(p))
            return null;
          const S = new Array(p);
          for (; p-- > 0; )
            S[p] = f[p];
          return S;
        }, ze = ((f) => (p) => f && p instanceof f)(typeof Uint8Array < "u" && r(Uint8Array)), _t = (f, p) => {
          const S = (f && f[o]).call(f);
          let x;
          for (; (x = S.next()) && !x.done; ) {
            const O = x.value;
            p.call(f, O[0], O[1]);
          }
        }, We = (f, p) => {
          let S;
          const x = [];
          for (; (S = f.exec(p)) !== null; )
            x.push(S);
          return x;
        }, Za = d("HTMLFormElement"), El = (f) => f.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(p, S, x) {
          return S.toUpperCase() + x;
        }), Al = (({ hasOwnProperty: f }) => (p, S) => f.call(p, S))(Object.prototype), Cu = d("RegExp"), On = (f, p) => {
          const S = Object.getOwnPropertyDescriptors(f), x = {};
          U(S, (O, C) => {
            let j;
            (j = p(O, C, f)) !== false && (x[C] = j || O);
          }), Object.defineProperties(f, x);
        }, Ti = (f) => {
          On(f, (p, S) => {
            if (B(f) && ["arguments", "caller", "callee"].indexOf(S) !== -1)
              return false;
            const x = f[S];
            if (B(x)) {
              if (p.enumerable = false, "writable" in p) {
                p.writable = false;
                return;
              }
              p.set || (p.set = () => {
                throw Error("Can not rewrite read-only method '" + S + "'");
              });
            }
          });
        }, Ei = (f, p) => {
          const S = {}, x = (O) => {
            O.forEach((C) => {
              S[C] = true;
            });
          };
          return m(f) ? x(f) : x(String(f).split(p)), S;
        }, Er = () => {
        }, Uu = (f, p) => f != null && Number.isFinite(f = +f) ? f : p;
        function Ai(f) {
          return !!(f && B(f.append) && f[g] === "FormData" && f[o]);
        }
        const Oi = (f) => {
          const p = new Array(10), S = (x, O) => {
            if (ie(x)) {
              if (p.indexOf(x) >= 0)
                return;
              if (_(x))
                return x;
              if (!("toJSON" in x)) {
                p[O] = x;
                const C = m(x) ? [] : {};
                return U(x, (j, J) => {
                  const le = S(j, O + 1);
                  !h(le) && (C[J] = le);
                }), p[O] = void 0, C;
              }
            }
            return x;
          };
          return S(f, 0);
        }, wi = d("AsyncFunction"), Ar = (f) => f && (ie(f) || B(f)) && B(f.then) && B(f.catch), Du = ((f, p) => f ? setImmediate : p ? ((S, x) => (X.addEventListener("message", ({ source: O, data: C }) => {
          O === X && C === S && x.length && x.shift()();
        }, false), (O) => {
          x.push(O), X.postMessage(S, "*");
        }))(`axios@${Math.random()}`, []) : (S) => setTimeout(S))(typeof setImmediate == "function", B(X.postMessage)), Nt = typeof queueMicrotask < "u" ? queueMicrotask.bind(X) : typeof process < "u" && process.nextTick || Du;
        var H = { isArray: m, isArrayBuffer: A, isBuffer: _, isFormData: ht, isArrayBufferView: L, isString: w, isNumber: K, isBoolean: he, isObject: ie, isPlainObject: Ee, isEmptyObject: fe, isReadableStream: tt, isRequest: Je, isResponse: xt, isHeaders: Fe, isUndefined: h, isDate: xe, isFile: we, isBlob: Ye, isRegExp: Cu, isFunction: B, isStream: it, isURLSearchParams: St, isTypedArray: ze, isFileList: de, forEach: U, merge: $, extend: E, trim: se, stripBOM: V, inherits: W, toFlatObject: ne, kindOf: b, kindOfTest: d, endsWith: me, toArray: Se, forEachEntry: _t, matchAll: We, isHTMLForm: Za, hasOwnProperty: Al, hasOwnProp: Al, reduceDescriptors: On, freezeMethods: Ti, toObjectSet: Ei, toCamelCase: El, noop: Er, toFiniteNumber: Uu, findKey: k, global: X, isContextDefined: ee, isSpecCompliantForm: Ai, toJSONObject: Oi, isAsyncFn: wi, isThenable: Ar, setImmediate: Du, asap: Nt, isIterable: (f) => f != null && B(f[o]) };
        function pe(f, p, S, x, O) {
          Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = f, this.name = "AxiosError", p && (this.code = p), S && (this.config = S), x && (this.request = x), O && (this.response = O, this.status = O.status ? O.status : null);
        }
        H.inherits(pe, Error, { toJSON: function() {
          return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: H.toJSONObject(this.config), code: this.code, status: this.status };
        } });
        const Ri = pe.prototype, Ka = {};
        ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((f) => {
          Ka[f] = { value: f };
        }), Object.defineProperties(pe, Ka), Object.defineProperty(Ri, "isAxiosError", { value: true }), pe.from = (f, p, S, x, O, C) => {
          const j = Object.create(Ri);
          H.toFlatObject(f, j, function(F) {
            return F !== Error.prototype;
          }, (F) => F !== "isAxiosError");
          const J = f && f.message ? f.message : "Error", le = p == null && f ? f.code : p;
          return pe.call(j, J, le, S, x, O), f && j.cause == null && Object.defineProperty(j, "cause", { value: f, configurable: true }), j.name = f && f.name || "Error", C && Object.assign(j, C), j;
        };
        var Or = null;
        function Ol(f) {
          return H.isPlainObject(f) || H.isArray(f);
        }
        function Mu(f) {
          return H.endsWith(f, "[]") ? f.slice(0, -2) : f;
        }
        function Bu(f, p, S) {
          return f ? f.concat(p).map(function(x, O) {
            return x = Mu(x), !S && O ? "[" + x + "]" : x;
          }).join(S ? "." : "") : p;
        }
        function ka(f) {
          return H.isArray(f) && !f.some(Ol);
        }
        const zt = H.toFlatObject(H, {}, null, function(f) {
          return /^is[A-Z]/.test(f);
        });
        function Gt(f, p, S) {
          if (!H.isObject(f))
            throw new TypeError("target must be an object");
          p = p || new FormData(), S = H.toFlatObject(S, { metaTokens: true, dots: false, indexes: false }, false, function(ge, I) {
            return !H.isUndefined(I[ge]);
          });
          const x = S.metaTokens, O = S.visitor || F, C = S.dots, j = S.indexes, J = (S.Blob || typeof Blob < "u" && Blob) && H.isSpecCompliantForm(p);
          if (!H.isFunction(O))
            throw new TypeError("visitor must be a function");
          function le(ge) {
            if (ge === null)
              return "";
            if (H.isDate(ge))
              return ge.toISOString();
            if (H.isBoolean(ge))
              return ge.toString();
            if (!J && H.isBlob(ge))
              throw new pe("Blob is not supported. Use a Buffer instead.");
            return H.isArrayBuffer(ge) || H.isTypedArray(ge) ? J && typeof Blob == "function" ? new Blob([ge]) : Buffer.from(ge) : ge;
          }
          function F(ge, I, te) {
            let Ve = ge;
            if (ge && !te && typeof ge == "object") {
              if (H.endsWith(I, "{}"))
                I = x ? I : I.slice(0, -2), ge = JSON.stringify(ge);
              else if (H.isArray(ge) && ka(ge) || (H.isFileList(ge) || H.endsWith(I, "[]")) && (Ve = H.toArray(ge)))
                return I = Mu(I), Ve.forEach(function(vt, nt) {
                  !(H.isUndefined(vt) || vt === null) && p.append(j === true ? Bu([I], nt, C) : j === null ? I : I + "[]", le(vt));
                }), false;
            }
            return Ol(ge) ? true : (p.append(Bu(te, I, C), le(ge)), false);
          }
          const P = [], ce = Object.assign(zt, { defaultVisitor: F, convertValue: le, isVisitable: Ol });
          function Be(ge, I) {
            if (!H.isUndefined(ge)) {
              if (P.indexOf(ge) !== -1)
                throw Error("Circular reference detected in " + I.join("."));
              P.push(ge), H.forEach(ge, function(te, Ve) {
                (!(H.isUndefined(te) || te === null) && O.call(p, te, H.isString(Ve) ? Ve.trim() : Ve, I, ce)) === true && Be(te, I ? I.concat(Ve) : [Ve]);
              }), P.pop();
            }
          }
          if (!H.isObject(f))
            throw new TypeError("data must be an object");
          return Be(f), p;
        }
        function wt(f) {
          const p = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
          return encodeURIComponent(f).replace(/[!'()~]|%20|%00/g, function(S) {
            return p[S];
          });
        }
        function Ni(f, p) {
          this._pairs = [], f && Gt(f, this, p);
        }
        const qu = Ni.prototype;
        qu.append = function(f, p) {
          this._pairs.push([f, p]);
        }, qu.toString = function(f) {
          const p = f ? function(S) {
            return f.call(this, S, wt);
          } : wt;
          return this._pairs.map(function(S) {
            return p(S[0]) + "=" + p(S[1]);
          }, "").join("&");
        };
        function wr(f) {
          return encodeURIComponent(f).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
        }
        function Ja(f, p, S) {
          if (!p)
            return f;
          const x = S && S.encode || wr;
          H.isFunction(S) && (S = { serialize: S });
          const O = S && S.serialize;
          let C;
          if (O ? C = O(p, S) : C = H.isURLSearchParams(p) ? p.toString() : new Ni(p, S).toString(x), C) {
            const j = f.indexOf("#");
            j !== -1 && (f = f.slice(0, j)), f += (f.indexOf("?") === -1 ? "?" : "&") + C;
          }
          return f;
        }
        class wl {
          constructor() {
            this.handlers = [];
          }
          use(p, S, x) {
            return this.handlers.push({ fulfilled: p, rejected: S, synchronous: x ? x.synchronous : false, runWhen: x ? x.runWhen : null }), this.handlers.length - 1;
          }
          eject(p) {
            this.handlers[p] && (this.handlers[p] = null);
          }
          clear() {
            this.handlers && (this.handlers = []);
          }
          forEach(p) {
            H.forEach(this.handlers, function(S) {
              S !== null && p(S);
            });
          }
        }
        var Fa = wl, wn = { silentJSONParsing: true, forcedJSONParsing: true, clarifyTimeoutError: false }, Rl = typeof URLSearchParams < "u" ? URLSearchParams : Ni, Wa = typeof FormData < "u" ? FormData : null, Rr = typeof Blob < "u" ? Blob : null, Hu = { isBrowser: true, classes: { URLSearchParams: Rl, FormData: Wa, Blob: Rr }, protocols: ["http", "https", "file", "blob", "url", "data"] };
        const $a = typeof window < "u" && typeof document < "u", Xn = typeof navigator == "object" && navigator || void 0, Nr = $a && (!Xn || ["ReactNative", "NativeScript", "NS"].indexOf(Xn.product) < 0), Lu = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Yu = $a && window.location.href || "http://localhost";
        var Xu = Object.freeze({ __proto__: null, hasBrowserEnv: $a, hasStandardBrowserWebWorkerEnv: Lu, hasStandardBrowserEnv: Nr, navigator: Xn, origin: Yu }), ut = Qe(Qe({}, Xu), Hu);
        function zi(f, p) {
          return Gt(f, new ut.classes.URLSearchParams(), Qe({ visitor: function(S, x, O, C) {
            return ut.isNode && H.isBuffer(S) ? (this.append(x, S.toString("base64")), false) : C.defaultVisitor.apply(this, arguments);
          } }, p));
        }
        function Gu(f) {
          return H.matchAll(/\w+|\[(\w*)]/g, f).map((p) => p[0] === "[]" ? "" : p[1] || p[0]);
        }
        function Qu(f) {
          const p = {}, S = Object.keys(f);
          let x;
          const O = S.length;
          let C;
          for (x = 0; x < O; x++)
            C = S[x], p[C] = f[C];
          return p;
        }
        function mn(f) {
          function p(S, x, O, C) {
            let j = S[C++];
            if (j === "__proto__")
              return true;
            const J = Number.isFinite(+j), le = C >= S.length;
            return j = !j && H.isArray(O) ? O.length : j, le ? (H.hasOwnProp(O, j) ? O[j] = [O[j], x] : O[j] = x, !J) : ((!O[j] || !H.isObject(O[j])) && (O[j] = []), p(S, x, O[j], C) && H.isArray(O[j]) && (O[j] = Qu(O[j])), !J);
          }
          if (H.isFormData(f) && H.isFunction(f.entries)) {
            const S = {};
            return H.forEachEntry(f, (x, O) => {
              p(Gu(x), O, S, 0);
            }), S;
          }
          return null;
        }
        function dt(f, p, S) {
          if (H.isString(f))
            try {
              return (p || JSON.parse)(f), H.trim(f);
            } catch (x) {
              if (x.name !== "SyntaxError")
                throw x;
            }
          return (S || JSON.stringify)(f);
        }
        const gt = { transitional: wn, adapter: ["xhr", "http", "fetch"], transformRequest: [function(f, p) {
          const S = p.getContentType() || "", x = S.indexOf("application/json") > -1, O = H.isObject(f);
          if (O && H.isHTMLForm(f) && (f = new FormData(f)), H.isFormData(f))
            return x ? JSON.stringify(mn(f)) : f;
          if (H.isArrayBuffer(f) || H.isBuffer(f) || H.isStream(f) || H.isFile(f) || H.isBlob(f) || H.isReadableStream(f))
            return f;
          if (H.isArrayBufferView(f))
            return f.buffer;
          if (H.isURLSearchParams(f))
            return p.setContentType("application/x-www-form-urlencoded;charset=utf-8", false), f.toString();
          let C;
          if (O) {
            if (S.indexOf("application/x-www-form-urlencoded") > -1)
              return zi(f, this.formSerializer).toString();
            if ((C = H.isFileList(f)) || S.indexOf("multipart/form-data") > -1) {
              const j = this.env && this.env.FormData;
              return Gt(C ? { "files[]": f } : f, j && new j(), this.formSerializer);
            }
          }
          return O || x ? (p.setContentType("application/json", false), dt(f)) : f;
        }], transformResponse: [function(f) {
          const p = this.transitional || gt.transitional, S = p && p.forcedJSONParsing, x = this.responseType === "json";
          if (H.isResponse(f) || H.isReadableStream(f))
            return f;
          if (f && H.isString(f) && (S && !this.responseType || x)) {
            const O = !(p && p.silentJSONParsing) && x;
            try {
              return JSON.parse(f, this.parseReviver);
            } catch (C) {
              if (O)
                throw C.name === "SyntaxError" ? pe.from(C, pe.ERR_BAD_RESPONSE, this, null, this.response) : C;
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
          const p = {};
          let S, x, O;
          return f && f.split(`
`).forEach(function(C) {
            O = C.indexOf(":"), S = C.substring(0, O).trim().toLowerCase(), x = C.substring(O + 1).trim(), !(!S || p[S] && ji[S]) && (S === "set-cookie" ? p[S] ? p[S].push(x) : p[S] = [x] : p[S] = p[S] ? p[S] + ", " + x : x);
          }), p;
        };
        const Vu = Symbol("internals");
        function da(f) {
          return f && String(f).trim().toLowerCase();
        }
        function Nn(f) {
          return f === false || f == null ? f : H.isArray(f) ? f.map(Nn) : String(f);
        }
        function Ci(f) {
          const p = /* @__PURE__ */ Object.create(null), S = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
          let x;
          for (; x = S.exec(f); )
            p[x[1]] = x[2];
          return p;
        }
        const pa = (f) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(f.trim());
        function zn(f, p, S, x, O) {
          if (H.isFunction(x))
            return x.call(this, p, S);
          if (O && (p = S), !!H.isString(p)) {
            if (H.isString(x))
              return p.indexOf(x) !== -1;
            if (H.isRegExp(x))
              return x.test(p);
          }
        }
        function Pa(f) {
          return f.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (p, S, x) => S.toUpperCase() + x);
        }
        function ma(f, p) {
          const S = H.toCamelCase(" " + p);
          ["get", "set", "has"].forEach((x) => {
            Object.defineProperty(f, x + S, { value: function(O, C, j) {
              return this[x].call(this, p, O, C, j);
            }, configurable: true });
          });
        }
        class $e {
          constructor(p) {
            p && this.set(p);
          }
          set(p, S, x) {
            const O = this;
            function C(J, le, F) {
              const P = da(le);
              if (!P)
                throw new Error("header name must be a non-empty string");
              const ce = H.findKey(O, P);
              (!ce || O[ce] === void 0 || F === true || F === void 0 && O[ce] !== false) && (O[ce || le] = Nn(J));
            }
            const j = (J, le) => H.forEach(J, (F, P) => C(F, P, le));
            if (H.isPlainObject(p) || p instanceof this.constructor)
              j(p, S);
            else if (H.isString(p) && (p = p.trim()) && !pa(p))
              j(zr(p), S);
            else if (H.isObject(p) && H.isIterable(p)) {
              let J = {}, le, F;
              for (const P of p) {
                if (!H.isArray(P))
                  throw TypeError("Object iterator must return a key-value pair");
                J[F = P[0]] = (le = J[F]) ? H.isArray(le) ? [...le, P[1]] : [le, P[1]] : P[1];
              }
              j(J, S);
            } else
              p != null && C(S, p, x);
            return this;
          }
          get(p, S) {
            if (p = da(p), p) {
              const x = H.findKey(this, p);
              if (x) {
                const O = this[x];
                if (!S)
                  return O;
                if (S === true)
                  return Ci(O);
                if (H.isFunction(S))
                  return S.call(this, O, x);
                if (H.isRegExp(S))
                  return S.exec(O);
                throw new TypeError("parser must be boolean|regexp|function");
              }
            }
          }
          has(p, S) {
            if (p = da(p), p) {
              const x = H.findKey(this, p);
              return !!(x && this[x] !== void 0 && (!S || zn(this, this[x], x, S)));
            }
            return false;
          }
          delete(p, S) {
            const x = this;
            let O = false;
            function C(j) {
              if (j = da(j), j) {
                const J = H.findKey(x, j);
                J && (!S || zn(x, x[J], J, S)) && (delete x[J], O = true);
              }
            }
            return H.isArray(p) ? p.forEach(C) : C(p), O;
          }
          clear(p) {
            const S = Object.keys(this);
            let x = S.length, O = false;
            for (; x--; ) {
              const C = S[x];
              (!p || zn(this, this[C], C, p, true)) && (delete this[C], O = true);
            }
            return O;
          }
          normalize(p) {
            const S = this, x = {};
            return H.forEach(this, (O, C) => {
              const j = H.findKey(x, C);
              if (j) {
                S[j] = Nn(O), delete S[C];
                return;
              }
              const J = p ? Pa(C) : String(C).trim();
              J !== C && delete S[C], S[J] = Nn(O), x[J] = true;
            }), this;
          }
          concat(...p) {
            return this.constructor.concat(this, ...p);
          }
          toJSON(p) {
            const S = /* @__PURE__ */ Object.create(null);
            return H.forEach(this, (x, O) => {
              x != null && x !== false && (S[O] = p && H.isArray(x) ? x.join(", ") : x);
            }), S;
          }
          [Symbol.iterator]() {
            return Object.entries(this.toJSON())[Symbol.iterator]();
          }
          toString() {
            return Object.entries(this.toJSON()).map(([p, S]) => p + ": " + S).join(`
`);
          }
          getSetCookie() {
            return this.get("set-cookie") || [];
          }
          get [Symbol.toStringTag]() {
            return "AxiosHeaders";
          }
          static from(p) {
            return p instanceof this ? p : new this(p);
          }
          static concat(p, ...S) {
            const x = new this(p);
            return S.forEach((O) => x.set(O)), x;
          }
          static accessor(p) {
            const S = (this[Vu] = this[Vu] = { accessors: {} }).accessors, x = this.prototype;
            function O(C) {
              const j = da(C);
              S[j] || (ma(x, C), S[j] = true);
            }
            return H.isArray(p) ? p.forEach(O) : O(p), this;
          }
        }
        $e.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), H.reduceDescriptors($e.prototype, ({ value: f }, p) => {
          let S = p[0].toUpperCase() + p.slice(1);
          return { get: () => f, set(x) {
            this[S] = x;
          } };
        }), H.freezeMethods($e);
        var Ut = $e;
        function Nl(f, p) {
          const S = this || Rn, x = p || S, O = Ut.from(x.headers);
          let C = x.data;
          return H.forEach(f, function(j) {
            C = j.call(S, C, O.normalize(), p ? p.status : void 0);
          }), O.normalize(), C;
        }
        function jn(f) {
          return !!(f && f.__CANCEL__);
        }
        function Qt(f, p, S) {
          pe.call(this, f != null ? f : "canceled", pe.ERR_CANCELED, p, S), this.name = "CanceledError";
        }
        H.inherits(Qt, pe, { __CANCEL__: true });
        function Zu(f, p, S) {
          const x = S.config.validateStatus;
          !S.status || !x || x(S.status) ? f(S) : p(new pe("Request failed with status code " + S.status, [pe.ERR_BAD_REQUEST, pe.ERR_BAD_RESPONSE][Math.floor(S.status / 100) - 4], S.config, S.request, S));
        }
        function Ku(f) {
          const p = /^([-+\w]{1,25})(:?\/\/|:)/.exec(f);
          return p && p[1] || "";
        }
        function ku(f, p) {
          f = f || 10;
          const S = new Array(f), x = new Array(f);
          let O = 0, C = 0, j;
          return p = p !== void 0 ? p : 1e3, function(J) {
            const le = Date.now(), F = x[C];
            j || (j = le), S[O] = J, x[O] = le;
            let P = C, ce = 0;
            for (; P !== O; )
              ce += S[P++], P = P % f;
            if (O = (O + 1) % f, O === C && (C = (C + 1) % f), le - j < p)
              return;
            const Be = F && le - F;
            return Be ? Math.round(ce * 1e3 / Be) : void 0;
          };
        }
        function jr(f, p) {
          let S = 0, x = 1e3 / p, O, C;
          const j = (J, le = Date.now()) => {
            S = le, O = null, C && (clearTimeout(C), C = null), f(...J);
          };
          return [(...J) => {
            const le = Date.now(), F = le - S;
            F >= x ? j(J, le) : (O = J, C || (C = setTimeout(() => {
              C = null, j(O);
            }, x - F)));
          }, () => O && j(O)];
        }
        const Gn = (f, p, S = 3) => {
          let x = 0;
          const O = ku(50, 250);
          return jr((C) => {
            const j = C.loaded, J = C.lengthComputable ? C.total : void 0, le = j - x, F = O(le), P = j <= J;
            x = j;
            const ce = { loaded: j, total: J, progress: J ? j / J : void 0, bytes: le, rate: F || void 0, estimated: F && J && P ? (J - j) / F : void 0, event: C, lengthComputable: J != null, [p ? "download" : "upload"]: true };
            f(ce);
          }, S);
        }, Ia = (f, p) => {
          const S = f != null;
          return [(x) => p[0]({ lengthComputable: S, total: f, loaded: x }), p[1]];
        }, Pt = (f) => (...p) => H.asap(() => f(...p));
        var Dt = ut.hasStandardBrowserEnv ? ((f, p) => (S) => (S = new URL(S, ut.origin), f.protocol === S.protocol && f.host === S.host && (p || f.port === S.port)))(new URL(ut.origin), ut.navigator && /(msie|trident)/i.test(ut.navigator.userAgent)) : () => true, Ju = ut.hasStandardBrowserEnv ? { write(f, p, S, x, O, C) {
          const j = [f + "=" + encodeURIComponent(p)];
          H.isNumber(S) && j.push("expires=" + new Date(S).toGMTString()), H.isString(x) && j.push("path=" + x), H.isString(O) && j.push("domain=" + O), C === true && j.push("secure"), document.cookie = j.join("; ");
        }, read(f) {
          const p = document.cookie.match(new RegExp("(^|;\\s*)(" + f + ")=([^;]*)"));
          return p ? decodeURIComponent(p[3]) : null;
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
        function Ui(f, p) {
          return p ? f.replace(/\/?\/$/, "") + "/" + p.replace(/^\/+/, "") : f;
        }
        function Di(f, p, S) {
          let x = !Cr(p);
          return f && (x || S == false) ? Ui(f, p) : p;
        }
        const el = (f) => f instanceof Ut ? Qe({}, f) : f;
        function Qn(f, p) {
          p = p || {};
          const S = {};
          function x(F, P, ce, Be) {
            return H.isPlainObject(F) && H.isPlainObject(P) ? H.merge.call({ caseless: Be }, F, P) : H.isPlainObject(P) ? H.merge({}, P) : H.isArray(P) ? P.slice() : P;
          }
          function O(F, P, ce, Be) {
            if (H.isUndefined(P)) {
              if (!H.isUndefined(F))
                return x(void 0, F, ce, Be);
            } else
              return x(F, P, ce, Be);
          }
          function C(F, P) {
            if (!H.isUndefined(P))
              return x(void 0, P);
          }
          function j(F, P) {
            if (H.isUndefined(P)) {
              if (!H.isUndefined(F))
                return x(void 0, F);
            } else
              return x(void 0, P);
          }
          function J(F, P, ce) {
            if (ce in p)
              return x(F, P);
            if (ce in f)
              return x(void 0, F);
          }
          const le = { url: C, method: C, data: C, baseURL: j, transformRequest: j, transformResponse: j, paramsSerializer: j, timeout: j, timeoutMessage: j, withCredentials: j, withXSRFToken: j, adapter: j, responseType: j, xsrfCookieName: j, xsrfHeaderName: j, onUploadProgress: j, onDownloadProgress: j, decompress: j, maxContentLength: j, maxBodyLength: j, beforeRedirect: j, transport: j, httpAgent: j, httpsAgent: j, cancelToken: j, socketPath: j, responseEncoding: j, validateStatus: J, headers: (F, P, ce) => O(el(F), el(P), ce, true) };
          return H.forEach(Object.keys(Qe(Qe({}, f), p)), function(F) {
            const P = le[F] || O, ce = P(f[F], p[F], F);
            H.isUndefined(ce) && P !== J || (S[F] = ce);
          }), S;
        }
        var jt = (f) => {
          const p = Qn({}, f);
          let { data: S, withXSRFToken: x, xsrfHeaderName: O, xsrfCookieName: C, headers: j, auth: J } = p;
          if (p.headers = j = Ut.from(j), p.url = Ja(Di(p.baseURL, p.url, p.allowAbsoluteUrls), f.params, f.paramsSerializer), J && j.set("Authorization", "Basic " + btoa((J.username || "") + ":" + (J.password ? unescape(encodeURIComponent(J.password)) : ""))), H.isFormData(S)) {
            if (ut.hasStandardBrowserEnv || ut.hasStandardBrowserWebWorkerEnv)
              j.setContentType(void 0);
            else if (H.isFunction(S.getHeaders)) {
              const le = S.getHeaders(), F = ["content-type", "content-length"];
              Object.entries(le).forEach(([P, ce]) => {
                F.includes(P.toLowerCase()) && j.set(P, ce);
              });
            }
          }
          if (ut.hasStandardBrowserEnv && (x && H.isFunction(x) && (x = x(p)), x || x !== false && Dt(p.url))) {
            const le = O && C && Ju.read(C);
            le && j.set(O, le);
          }
          return p;
        }, Mi = typeof XMLHttpRequest < "u" && function(f) {
          return new Promise(function(p, S) {
            const x = jt(f);
            let O = x.data;
            const C = Ut.from(x.headers).normalize();
            let { responseType: j, onUploadProgress: J, onDownloadProgress: le } = x, F, P, ce, Be, ge;
            function I() {
              Be && Be(), ge && ge(), x.cancelToken && x.cancelToken.unsubscribe(F), x.signal && x.signal.removeEventListener("abort", F);
            }
            let te = new XMLHttpRequest();
            te.open(x.method.toUpperCase(), x.url, true), te.timeout = x.timeout;
            function Ve() {
              if (!te)
                return;
              const nt = Ut.from("getAllResponseHeaders" in te && te.getAllResponseHeaders()), tn = { data: !j || j === "text" || j === "json" ? te.responseText : te.response, status: te.status, statusText: te.statusText, headers: nt, config: f, request: te };
              Zu(function(nn) {
                p(nn), I();
              }, function(nn) {
                S(nn), I();
              }, tn), te = null;
            }
            "onloadend" in te ? te.onloadend = Ve : te.onreadystatechange = function() {
              !te || te.readyState !== 4 || te.status === 0 && !(te.responseURL && te.responseURL.indexOf("file:") === 0) || setTimeout(Ve);
            }, te.onabort = function() {
              te && (S(new pe("Request aborted", pe.ECONNABORTED, f, te)), te = null);
            }, te.onerror = function(nt) {
              const tn = nt && nt.message ? nt.message : "Network Error", nn = new pe(tn, pe.ERR_NETWORK, f, te);
              nn.event = nt || null, S(nn), te = null;
            }, te.ontimeout = function() {
              let nt = x.timeout ? "timeout of " + x.timeout + "ms exceeded" : "timeout exceeded";
              const tn = x.transitional || wn;
              x.timeoutErrorMessage && (nt = x.timeoutErrorMessage), S(new pe(nt, tn.clarifyTimeoutError ? pe.ETIMEDOUT : pe.ECONNABORTED, f, te)), te = null;
            }, O === void 0 && C.setContentType(null), "setRequestHeader" in te && H.forEach(C.toJSON(), function(nt, tn) {
              te.setRequestHeader(tn, nt);
            }), H.isUndefined(x.withCredentials) || (te.withCredentials = !!x.withCredentials), j && j !== "json" && (te.responseType = x.responseType), le && ([ce, ge] = Gn(le, true), te.addEventListener("progress", ce)), J && te.upload && ([P, Be] = Gn(J), te.upload.addEventListener("progress", P), te.upload.addEventListener("loadend", Be)), (x.cancelToken || x.signal) && (F = (nt) => {
              te && (S(!nt || nt.type ? new Qt(null, f, te) : nt), te.abort(), te = null);
            }, x.cancelToken && x.cancelToken.subscribe(F), x.signal && (x.signal.aborted ? F() : x.signal.addEventListener("abort", F)));
            const vt = Ku(x.url);
            if (vt && ut.protocols.indexOf(vt) === -1) {
              S(new pe("Unsupported protocol " + vt + ":", pe.ERR_BAD_REQUEST, f));
              return;
            }
            te.send(O || null);
          });
        }, Fu = (f, p) => {
          const { length: S } = f = f ? f.filter(Boolean) : [];
          if (p || S) {
            let x = new AbortController(), O;
            const C = function(F) {
              if (!O) {
                O = true, J();
                const P = F instanceof Error ? F : this.reason;
                x.abort(P instanceof pe ? P : new Qt(P instanceof Error ? P.message : P));
              }
            };
            let j = p && setTimeout(() => {
              j = null, C(new pe(`timeout ${p} of ms exceeded`, pe.ETIMEDOUT));
            }, p);
            const J = () => {
              f && (j && clearTimeout(j), j = null, f.forEach((F) => {
                F.unsubscribe ? F.unsubscribe(C) : F.removeEventListener("abort", C);
              }), f = null);
            };
            f.forEach((F) => F.addEventListener("abort", C));
            const { signal: le } = x;
            return le.unsubscribe = () => H.asap(J), le;
          }
        };
        const Bi = function* (f, p) {
          let S = f.byteLength;
          if (S < p) {
            yield f;
            return;
          }
          let x = 0, O;
          for (; x < S; )
            O = x + p, yield f.slice(x, O), x = O;
        }, ga = function(f, p) {
          return zc(this, null, function* () {
            try {
              for (var S = Lp(Wu(f)), x, O, C; x = !(O = yield new Sl(S.next())).done; x = false) {
                const j = O.value;
                yield* jc(Bi(j, p));
              }
            } catch (O2) {
              C = [O2];
            } finally {
              try {
                x && (O = S.return) && (yield new Sl(O.call(S)));
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
            const p = f.getReader();
            try {
              for (; ; ) {
                const { done: S, value: x } = yield new Sl(p.read());
                if (S)
                  break;
                yield x;
              }
            } finally {
              yield new Sl(p.cancel());
            }
          });
        }, qi = (f, p, S, x) => {
          const O = ga(f, p);
          let C = 0, j, J = (F) => {
            j || (j = true, x && x(F));
          };
          return new ReadableStream({ pull(F) {
            return fa(this, null, function* () {
              try {
                const { done: P, value: ce } = yield O.next();
                if (P) {
                  J(), F.close();
                  return;
                }
                let Be = ce.byteLength;
                if (S) {
                  let ge = C += Be;
                  S(ge);
                }
                F.enqueue(new Uint8Array(ce));
              } catch (P) {
                throw J(P), P;
              }
            });
          }, cancel(F) {
            return J(F), O.return();
          } }, { highWaterMark: 2 });
        }, Vn = 64 * 1024, { isFunction: zl } = H, $u = (({ Request: f, Response: p }) => ({ Request: f, Response: p }))(H.global), { ReadableStream: Hi, TextEncoder: jl } = H.global, Pu = (f, ...p) => {
          try {
            return !!f(...p);
          } catch (S) {
            return false;
          }
        }, Ur = (f) => {
          f = H.merge.call({ skipUndefined: true }, $u, f);
          const { fetch: p, Request: S, Response: x } = f, O = p ? zl(p) : typeof fetch == "function", C = zl(S), j = zl(x);
          if (!O)
            return false;
          const J = O && zl(Hi), le = O && (typeof jl == "function" ? ((I) => (te) => I.encode(te))(new jl()) : (I) => fa(null, null, function* () {
            return new Uint8Array(yield new S(I).arrayBuffer());
          })), F = C && J && Pu(() => {
            let I = false;
            const te = new S(ut.origin, { body: new Hi(), method: "POST", get duplex() {
              return I = true, "half";
            } }).headers.has("Content-Type");
            return I && !te;
          }), P = j && J && Pu(() => H.isReadableStream(new x("").body)), ce = { stream: P && ((I) => I.body) };
          O && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((I) => {
            !ce[I] && (ce[I] = (te, Ve) => {
              let vt = te && te[I];
              if (vt)
                return vt.call(te);
              throw new pe(`Response type '${I}' is not supported`, pe.ERR_NOT_SUPPORT, Ve);
            });
          });
          const Be = (I) => fa(null, null, function* () {
            if (I == null)
              return 0;
            if (H.isBlob(I))
              return I.size;
            if (H.isSpecCompliantForm(I))
              return (yield new S(ut.origin, { method: "POST", body: I }).arrayBuffer()).byteLength;
            if (H.isArrayBufferView(I) || H.isArrayBuffer(I))
              return I.byteLength;
            if (H.isURLSearchParams(I) && (I = I + ""), H.isString(I))
              return (yield le(I)).byteLength;
          }), ge = (I, te) => fa(null, null, function* () {
            const Ve = H.toFiniteNumber(I.getContentLength());
            return Ve != null ? Ve : Be(te);
          });
          return (I) => fa(null, null, function* () {
            let { url: te, method: Ve, data: vt, signal: nt, cancelToken: tn, timeout: nn, onDownloadProgress: Xi, onUploadProgress: es, responseType: Dn, headers: Ll, withCredentials: Yl = "same-origin", fetchOptions: ts } = jt(I), ns = p || fetch;
            Dn = Dn ? (Dn + "").toLowerCase() : "text";
            let Xl = Fu([nt, tn && tn.toAbortSignal()], nn), al = null;
            const Jn = Xl && Xl.unsubscribe && (() => {
              Xl.unsubscribe();
            });
            let as;
            try {
              if (es && F && Ve !== "get" && Ve !== "head" && (as = yield ge(Ll, vt)) !== 0) {
                let gn = new S(te, { method: "POST", body: vt, duplex: "half" }), Fn;
                if (H.isFormData(vt) && (Fn = gn.headers.get("content-type")) && Ll.setContentType(Fn), gn.body) {
                  const [Gl, ll] = Ia(as, Gn(Pt(es)));
                  vt = qi(gn.body, Vn, Gl, ll);
                }
              }
              H.isString(Yl) || (Yl = Yl ? "include" : "omit");
              const an = C && "credentials" in S.prototype, ls = Yt(Qe({}, ts), { signal: Xl, method: Ve.toUpperCase(), headers: Ll.normalize().toJSON(), body: vt, duplex: "half", credentials: an ? Yl : void 0 });
              al = C && new S(te, ls);
              let ln = yield C ? ns(al, ts) : ns(te, ls);
              const ba = P && (Dn === "stream" || Dn === "response");
              if (P && (Xi || ba && Jn)) {
                const gn = {};
                ["status", "statusText", "headers"].forEach((Gi) => {
                  gn[Gi] = ln[Gi];
                });
                const Fn = H.toFiniteNumber(ln.headers.get("content-length")), [Gl, ll] = Xi && Ia(Fn, Gn(Pt(Xi), true)) || [];
                ln = new x(qi(ln.body, Vn, Gl, () => {
                  ll && ll(), Jn && Jn();
                }), gn);
              }
              Dn = Dn || "text";
              let Dr = yield ce[H.findKey(ce, Dn) || "text"](ln, I);
              return !ba && Jn && Jn(), yield new Promise((gn, Fn) => {
                Zu(gn, Fn, { data: Dr, headers: Ut.from(ln.headers), status: ln.status, statusText: ln.statusText, config: I, request: al });
              });
            } catch (an) {
              throw Jn && Jn(), an && an.name === "TypeError" && /Load failed|fetch/i.test(an.message) ? Object.assign(new pe("Network Error", pe.ERR_NETWORK, I, al), { cause: an.cause || an }) : pe.from(an, an && an.code, I, al);
            }
          });
        }, Cl = /* @__PURE__ */ new Map(), It = (f) => {
          let p = f ? f.env : {};
          const { fetch: S, Request: x, Response: O } = p, C = [x, O, S];
          let j = C.length, J = j, le, F, P = Cl;
          for (; J--; )
            le = C[J], F = P.get(le), F === void 0 && P.set(le, F = J ? /* @__PURE__ */ new Map() : Ur(p)), P = F;
          return F;
        };
        It();
        const tl = { http: Or, xhr: Mi, fetch: { get: It } };
        H.forEach(tl, (f, p) => {
          if (f) {
            try {
              Object.defineProperty(f, "name", { value: p });
            } catch (S) {
            }
            Object.defineProperty(f, "adapterName", { value: p });
          }
        });
        const Ul = (f) => `- ${f}`, ya = (f) => H.isFunction(f) || f === null || f === false;
        var Zn = { getAdapter: (f, p) => {
          f = H.isArray(f) ? f : [f];
          const { length: S } = f;
          let x, O;
          const C = {};
          for (let j = 0; j < S; j++) {
            x = f[j];
            let J;
            if (O = x, !ya(x) && (O = tl[(J = String(x)).toLowerCase()], O === void 0))
              throw new pe(`Unknown adapter '${J}'`);
            if (O && (H.isFunction(O) || (O = O.get(p))))
              break;
            C[J || "#" + j] = O;
          }
          if (!O) {
            const j = Object.entries(C).map(([le, F]) => `adapter ${le} ` + (F === false ? "is not supported by the environment" : "is not available in the build"));
            let J = S ? j.length > 1 ? `since :
` + j.map(Ul).join(`
`) : " " + Ul(j[0]) : "as no adapter specified";
            throw new pe("There is no suitable adapter to dispatch the request " + J, "ERR_NOT_SUPPORT");
          }
          return O;
        }, adapters: tl };
        function Dl(f) {
          if (f.cancelToken && f.cancelToken.throwIfRequested(), f.signal && f.signal.aborted)
            throw new Qt(null, f);
        }
        function Ml(f) {
          return Dl(f), f.headers = Ut.from(f.headers), f.data = Nl.call(f, f.transformRequest), ["post", "put", "patch"].indexOf(f.method) !== -1 && f.headers.setContentType("application/x-www-form-urlencoded", false), Zn.getAdapter(f.adapter || Rn.adapter, f)(f).then(function(p) {
            return Dl(f), p.data = Nl.call(f, f.transformResponse, p), p.headers = Ut.from(p.headers), p;
          }, function(p) {
            return jn(p) || (Dl(f), p && p.response && (p.response.data = Nl.call(f, f.transformResponse, p.response), p.response.headers = Ut.from(p.response.headers))), Promise.reject(p);
          });
        }
        const Li = "1.12.2", Cn = {};
        ["object", "boolean", "number", "function", "string", "symbol"].forEach((f, p) => {
          Cn[f] = function(S) {
            return typeof S === f || "a" + (p < 1 ? "n " : " ") + f;
          };
        });
        const en = {};
        Cn.transitional = function(f, p, S) {
          function x(O, C) {
            return "[Axios v" + Li + "] Transitional option '" + O + "'" + C + (S ? ". " + S : "");
          }
          return (O, C, j) => {
            if (f === false)
              throw new pe(x(C, " has been removed" + (p ? " in " + p : "")), pe.ERR_DEPRECATED);
            return p && !en[C] && (en[C] = true, console.warn(x(C, " has been deprecated since v" + p + " and will be removed in the near future"))), f ? f(O, C, j) : true;
          };
        }, Cn.spelling = function(f) {
          return (p, S) => (console.warn(`${S} is likely a misspelling of ${f}`), true);
        };
        function Yi(f, p, S) {
          if (typeof f != "object")
            throw new pe("options must be an object", pe.ERR_BAD_OPTION_VALUE);
          const x = Object.keys(f);
          let O = x.length;
          for (; O-- > 0; ) {
            const C = x[O], j = p[C];
            if (j) {
              const J = f[C], le = J === void 0 || j(J, C, f);
              if (le !== true)
                throw new pe("option " + C + " must be " + le, pe.ERR_BAD_OPTION_VALUE);
              continue;
            }
            if (S !== true)
              throw new pe("Unknown option " + C, pe.ERR_BAD_OPTION);
          }
        }
        var Un = { assertOptions: Yi, validators: Cn };
        const pt = Un.validators;
        class va {
          constructor(p) {
            this.defaults = p || {}, this.interceptors = { request: new Fa(), response: new Fa() };
          }
          request(p, S) {
            return fa(this, null, function* () {
              try {
                return yield this._request(p, S);
              } catch (x) {
                if (x instanceof Error) {
                  let O = {};
                  Error.captureStackTrace ? Error.captureStackTrace(O) : O = new Error();
                  const C = O.stack ? O.stack.replace(/^.+\n/, "") : "";
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
          _request(p, S) {
            typeof p == "string" ? (S = S || {}, S.url = p) : S = p || {}, S = Qn(this.defaults, S);
            const { transitional: x, paramsSerializer: O, headers: C } = S;
            x !== void 0 && Un.assertOptions(x, { silentJSONParsing: pt.transitional(pt.boolean), forcedJSONParsing: pt.transitional(pt.boolean), clarifyTimeoutError: pt.transitional(pt.boolean) }, false), O != null && (H.isFunction(O) ? S.paramsSerializer = { serialize: O } : Un.assertOptions(O, { encode: pt.function, serialize: pt.function }, true)), S.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? S.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : S.allowAbsoluteUrls = true), Un.assertOptions(S, { baseUrl: pt.spelling("baseURL"), withXsrfToken: pt.spelling("withXSRFToken") }, true), S.method = (S.method || this.defaults.method || "get").toLowerCase();
            let j = C && H.merge(C.common, C[S.method]);
            C && H.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (I) => {
              delete C[I];
            }), S.headers = Ut.concat(j, C);
            const J = [];
            let le = true;
            this.interceptors.request.forEach(function(I) {
              typeof I.runWhen == "function" && I.runWhen(S) === false || (le = le && I.synchronous, J.unshift(I.fulfilled, I.rejected));
            });
            const F = [];
            this.interceptors.response.forEach(function(I) {
              F.push(I.fulfilled, I.rejected);
            });
            let P, ce = 0, Be;
            if (!le) {
              const I = [Ml.bind(this), void 0];
              for (I.unshift(...J), I.push(...F), Be = I.length, P = Promise.resolve(S); ce < Be; )
                P = P.then(I[ce++], I[ce++]);
              return P;
            }
            Be = J.length;
            let ge = S;
            for (; ce < Be; ) {
              const I = J[ce++], te = J[ce++];
              try {
                ge = I(ge);
              } catch (Ve) {
                te.call(this, Ve);
                break;
              }
            }
            try {
              P = Ml.call(this, ge);
            } catch (I) {
              return Promise.reject(I);
            }
            for (ce = 0, Be = F.length; ce < Be; )
              P = P.then(F[ce++], F[ce++]);
            return P;
          }
          getUri(p) {
            p = Qn(this.defaults, p);
            const S = Di(p.baseURL, p.url, p.allowAbsoluteUrls);
            return Ja(S, p.params, p.paramsSerializer);
          }
        }
        H.forEach(["delete", "get", "head", "options"], function(f) {
          va.prototype[f] = function(p, S) {
            return this.request(Qn(S || {}, { method: f, url: p, data: (S || {}).data }));
          };
        }), H.forEach(["post", "put", "patch"], function(f) {
          function p(S) {
            return function(x, O, C) {
              return this.request(Qn(C || {}, { method: f, headers: S ? { "Content-Type": "multipart/form-data" } : {}, url: x, data: O }));
            };
          }
          va.prototype[f] = p(), va.prototype[f + "Form"] = p(true);
        });
        var Kn = va;
        class Bl {
          constructor(p) {
            if (typeof p != "function")
              throw new TypeError("executor must be a function.");
            let S;
            this.promise = new Promise(function(O) {
              S = O;
            });
            const x = this;
            this.promise.then((O) => {
              if (!x._listeners)
                return;
              let C = x._listeners.length;
              for (; C-- > 0; )
                x._listeners[C](O);
              x._listeners = null;
            }), this.promise.then = (O) => {
              let C;
              const j = new Promise((J) => {
                x.subscribe(J), C = J;
              }).then(O);
              return j.cancel = function() {
                x.unsubscribe(C);
              }, j;
            }, p(function(O, C, j) {
              x.reason || (x.reason = new Qt(O, C, j), S(x.reason));
            });
          }
          throwIfRequested() {
            if (this.reason)
              throw this.reason;
          }
          subscribe(p) {
            if (this.reason) {
              p(this.reason);
              return;
            }
            this._listeners ? this._listeners.push(p) : this._listeners = [p];
          }
          unsubscribe(p) {
            if (!this._listeners)
              return;
            const S = this._listeners.indexOf(p);
            S !== -1 && this._listeners.splice(S, 1);
          }
          toAbortSignal() {
            const p = new AbortController(), S = (x) => {
              p.abort(x);
            };
            return this.subscribe(S), p.signal.unsubscribe = () => this.unsubscribe(S), p.signal;
          }
          static source() {
            let p;
            return { token: new Bl(function(S) {
              p = S;
            }), cancel: p };
          }
        }
        var ql = Bl;
        function Hl(f) {
          return function(p) {
            return f.apply(null, p);
          };
        }
        function Iu(f) {
          return H.isObject(f) && f.isAxiosError === true;
        }
        const yt = { Continue: 100, SwitchingProtocols: 101, Processing: 102, EarlyHints: 103, Ok: 200, Created: 201, Accepted: 202, NonAuthoritativeInformation: 203, NoContent: 204, ResetContent: 205, PartialContent: 206, MultiStatus: 207, AlreadyReported: 208, ImUsed: 226, MultipleChoices: 300, MovedPermanently: 301, Found: 302, SeeOther: 303, NotModified: 304, UseProxy: 305, Unused: 306, TemporaryRedirect: 307, PermanentRedirect: 308, BadRequest: 400, Unauthorized: 401, PaymentRequired: 402, Forbidden: 403, NotFound: 404, MethodNotAllowed: 405, NotAcceptable: 406, ProxyAuthenticationRequired: 407, RequestTimeout: 408, Conflict: 409, Gone: 410, LengthRequired: 411, PreconditionFailed: 412, PayloadTooLarge: 413, UriTooLong: 414, UnsupportedMediaType: 415, RangeNotSatisfiable: 416, ExpectationFailed: 417, ImATeapot: 418, MisdirectedRequest: 421, UnprocessableEntity: 422, Locked: 423, FailedDependency: 424, TooEarly: 425, UpgradeRequired: 426, PreconditionRequired: 428, TooManyRequests: 429, RequestHeaderFieldsTooLarge: 431, UnavailableForLegalReasons: 451, InternalServerError: 500, NotImplemented: 501, BadGateway: 502, ServiceUnavailable: 503, GatewayTimeout: 504, HttpVersionNotSupported: 505, VariantAlsoNegotiates: 506, InsufficientStorage: 507, LoopDetected: 508, NotExtended: 510, NetworkAuthenticationRequired: 511 };
        Object.entries(yt).forEach(([f, p]) => {
          yt[p] = f;
        });
        var kn = yt;
        function nl(f) {
          const p = new Kn(f), S = s(Kn.prototype.request, p);
          return H.extend(S, Kn.prototype, p, { allOwnKeys: true }), H.extend(S, p, null, { allOwnKeys: true }), S.create = function(x) {
            return nl(Qn(f, x));
          }, S;
        }
        const Ge = nl(Rn);
        return Ge.Axios = Kn, Ge.CanceledError = Qt, Ge.CancelToken = ql, Ge.isCancel = jn, Ge.VERSION = Li, Ge.toFormData = Gt, Ge.AxiosError = pe, Ge.Cancel = Ge.CanceledError, Ge.all = function(f) {
          return Promise.all(f);
        }, Ge.spread = Hl, Ge.isAxiosError = Iu, Ge.mergeConfig = Qn, Ge.AxiosHeaders = Ut, Ge.formToJSON = (f) => mn(H.isHTMLForm(f) ? new FormData(f) : f), Ge.getAdapter = Zn.getAdapter, Ge.HttpStatusCode = kn, Ge.default = Ge, Lc = Ge, Lc;
      }
      var tm;
      function zm() {
        if (tm)
          return ha;
        tm = 1;
        var s = ha && ha.__assign || function() {
          return s = Object.assign || function(g) {
            for (var b, d = 1, v = arguments.length; d < v; d++) {
              b = arguments[d];
              for (var m in b)
                Object.prototype.hasOwnProperty.call(b, m) && (g[m] = b[m]);
            }
            return g;
          }, s.apply(this, arguments);
        };
        Object.defineProperty(ha, "__esModule", { value: true }), ha.getRequestHeaders = ha.getAxiosClient = void 0;
        var u = Ey();
        function r(g, b, d, v, m) {
          var h = u.default.create({ baseURL: g, headers: o(b, v, d, g, m), withCredentials: true });
          return h.interceptors.request.use(function(_) {
            return typeof window < "u" && window.csrf_token && window.csrf_token !== "{{ csrf_token }}" && (_.headers["X-Frappe-CSRF-Token"] = window.csrf_token), b && v && d && (_.headers.Authorization = "".concat(v, " ").concat(d())), _;
          }), h;
        }
        ha.getAxiosClient = r;
        function o(g, b, d, v, m) {
          g === void 0 && (g = false);
          var h = { Accept: "application/json", "Content-Type": "application/json; charset=utf-8" };
          return g && b && d && (h.Authorization = "".concat(b, " ").concat(d())), typeof window < "u" && typeof document < "u" && (window.location && (v && v !== window.location.origin || (h["X-Frappe-Site-Name"] = window.location.hostname)), window.csrf_token && window.csrf_token !== "{{ csrf_token }}" && (h["X-Frappe-CSRF-Token"] = window.csrf_token)), s(s({}, h), m != null ? m : {});
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
            for (var d, v = 1, m = arguments.length; v < m; v++) {
              d = arguments[v];
              for (var h in d)
                Object.prototype.hasOwnProperty.call(d, h) && (b[h] = d[h]);
            }
            return b;
          }, s.apply(this, arguments);
        }, u = _n && _n.__awaiter || function(b, d, v, m) {
          function h(_) {
            return _ instanceof v ? _ : new v(function(A) {
              A(_);
            });
          }
          return new (v || (v = Promise))(function(_, A) {
            function L(K) {
              try {
                B(m.next(K));
              } catch (ie) {
                A(ie);
              }
            }
            function w(K) {
              try {
                B(m.throw(K));
              } catch (ie) {
                A(ie);
              }
            }
            function B(K) {
              K.done ? _(K.value) : h(K.value).then(L, w);
            }
            B((m = m.apply(b, d || [])).next());
          });
        }, r = _n && _n.__generator || function(b, d) {
          var v = { label: 0, sent: function() {
            if (_[0] & 1)
              throw _[1];
            return _[1];
          }, trys: [], ops: [] }, m, h, _, A;
          return A = { next: L(0), throw: L(1), return: L(2) }, typeof Symbol == "function" && (A[Symbol.iterator] = function() {
            return this;
          }), A;
          function L(B) {
            return function(K) {
              return w([B, K]);
            };
          }
          function w(B) {
            if (m)
              throw new TypeError("Generator is already executing.");
            for (; A && (A = 0, B[0] && (v = 0)), v; )
              try {
                if (m = 1, h && (_ = B[0] & 2 ? h.return : B[0] ? h.throw || ((_ = h.return) && _.call(h), 0) : h.next) && !(_ = _.call(h, B[1])).done)
                  return _;
                switch (h = 0, _ && (B = [B[0] & 2, _.value]), B[0]) {
                  case 0:
                  case 1:
                    _ = B;
                    break;
                  case 4:
                    return v.label++, { value: B[1], done: false };
                  case 5:
                    v.label++, h = B[1], B = [0];
                    continue;
                  case 7:
                    B = v.ops.pop(), v.trys.pop();
                    continue;
                  default:
                    if (_ = v.trys, !(_ = _.length > 0 && _[_.length - 1]) && (B[0] === 6 || B[0] === 2)) {
                      v = 0;
                      continue;
                    }
                    if (B[0] === 3 && (!_ || B[1] > _[0] && B[1] < _[3])) {
                      v.label = B[1];
                      break;
                    }
                    if (B[0] === 6 && v.label < _[1]) {
                      v.label = _[1], _ = B;
                      break;
                    }
                    if (_ && v.label < _[2]) {
                      v.label = _[2], v.ops.push(B);
                      break;
                    }
                    _[2] && v.ops.pop(), v.trys.pop();
                    continue;
                }
                B = d.call(b, v);
              } catch (K) {
                B = [6, K], h = 0;
              } finally {
                m = _ = 0;
              }
            if (B[0] & 5)
              throw B[1];
            return { value: B[0] ? B[1] : void 0, done: true };
          }
        };
        Object.defineProperty(_n, "__esModule", { value: true }), _n.FrappeFileUpload = void 0;
        var o = zm(), g = function() {
          function b(d, v, m, h, _, A) {
            this.appURL = d, this.axios = v, this.useToken = m != null ? m : false, this.token = h, this.tokenType = _, this.customHeaders = A;
          }
          return b.prototype.uploadFile = function(d, v, m, h) {
            return h === void 0 && (h = "upload_file"), u(this, void 0, void 0, function() {
              var _, A, L, w, B, K, ie, he;
              return r(this, function(Ee) {
                return _ = new FormData(), d && _.append("file", d, d.name), A = v.isPrivate, L = v.folder, w = v.file_url, B = v.doctype, K = v.docname, ie = v.fieldname, he = v.otherData, A && _.append("is_private", "1"), L && _.append("folder", L), w && _.append("file_url", w), B && K && (_.append("doctype", B), _.append("docname", K), ie && _.append("fieldname", ie)), he && Object.keys(he).forEach(function(fe) {
                  var xe = he[fe];
                  _.append(fe, xe);
                }), [2, this.axios.post("/api/method/".concat(h), _, { onUploadProgress: function(fe) {
                  m && m(fe.loaded, fe.total, fe);
                }, headers: s(s({}, (0, o.getRequestHeaders)(this.useToken, this.tokenType, this.token, this.appURL, this.customHeaders)), { "Content-Type": "multipart/form-data" }) }).catch(function(fe) {
                  var xe, we;
                  throw s(s({}, fe.response.data), { httpStatus: fe.response.status, httpStatusText: fe.response.statusText, message: (xe = fe.response.data.message) !== null && xe !== void 0 ? xe : "There was an error while uploading the file.", exception: (we = fe.response.data.exception) !== null && we !== void 0 ? we : "" });
                })];
              });
            });
          }, b;
        }();
        return _n.FrappeFileUpload = g, _n;
      }
      var am;
      function Ay() {
        if (am)
          return Ru;
        am = 1, Object.defineProperty(Ru, "__esModule", { value: true }), Ru.FrappeApp = void 0;
        var s = Cm(), u = Rm(), r = Nm(), o = jm(), g = zm(), b = function() {
          function d(v, m, h, _) {
            var A, L;
            this.url = v, this.name = h != null ? h : "FrappeApp", this.useToken = (A = m == null ? void 0 : m.useToken) !== null && A !== void 0 ? A : false, this.token = m == null ? void 0 : m.token, this.tokenType = (L = m == null ? void 0 : m.type) !== null && L !== void 0 ? L : "Bearer", this.customHeaders = _, this.axios = (0, g.getAxiosClient)(this.url, this.useToken, this.token, this.tokenType, this.customHeaders);
          }
          return d.prototype.auth = function() {
            return new s.FrappeAuth(this.url, this.axios, this.useToken, this.token, this.tokenType);
          }, d.prototype.db = function() {
            return new r.FrappeDB(this.url, this.axios, this.useToken, this.token, this.tokenType);
          }, d.prototype.file = function() {
            return new o.FrappeFileUpload(this.url, this.axios, this.useToken, this.token, this.tokenType, this.customHeaders);
          }, d.prototype.call = function() {
            return new u.FrappeCall(this.url, this.axios, this.useToken, this.token, this.tokenType);
          }, d;
        }();
        return Ru.FrappeApp = b, Ru;
      }
      var Tn = {};
      var lm;
      function Oy() {
        if (lm)
          return Tn;
        lm = 1;
        var s = Tn && Tn.__assign || function() {
          return s = Object.assign || function(g) {
            for (var b, d = 1, v = arguments.length; d < v; d++) {
              b = arguments[d];
              for (var m in b)
                Object.prototype.hasOwnProperty.call(b, m) && (g[m] = b[m]);
            }
            return g;
          }, s.apply(this, arguments);
        }, u = Tn && Tn.__awaiter || function(g, b, d, v) {
          function m(h) {
            return h instanceof d ? h : new d(function(_) {
              _(h);
            });
          }
          return new (d || (d = Promise))(function(h, _) {
            function A(B) {
              try {
                w(v.next(B));
              } catch (K) {
                _(K);
              }
            }
            function L(B) {
              try {
                w(v.throw(B));
              } catch (K) {
                _(K);
              }
            }
            function w(B) {
              B.done ? h(B.value) : m(B.value).then(A, L);
            }
            w((v = v.apply(g, b || [])).next());
          });
        }, r = Tn && Tn.__generator || function(g, b) {
          var d = { label: 0, sent: function() {
            if (h[0] & 1)
              throw h[1];
            return h[1];
          }, trys: [], ops: [] }, v, m, h, _;
          return _ = { next: A(0), throw: A(1), return: A(2) }, typeof Symbol == "function" && (_[Symbol.iterator] = function() {
            return this;
          }), _;
          function A(w) {
            return function(B) {
              return L([w, B]);
            };
          }
          function L(w) {
            if (v)
              throw new TypeError("Generator is already executing.");
            for (; _ && (_ = 0, w[0] && (d = 0)), d; )
              try {
                if (v = 1, m && (h = w[0] & 2 ? m.return : w[0] ? m.throw || ((h = m.return) && h.call(m), 0) : m.next) && !(h = h.call(m, w[1])).done)
                  return h;
                switch (m = 0, h && (w = [w[0] & 2, h.value]), w[0]) {
                  case 0:
                  case 1:
                    h = w;
                    break;
                  case 4:
                    return d.label++, { value: w[1], done: false };
                  case 5:
                    d.label++, m = w[1], w = [0];
                    continue;
                  case 7:
                    w = d.ops.pop(), d.trys.pop();
                    continue;
                  default:
                    if (h = d.trys, !(h = h.length > 0 && h[h.length - 1]) && (w[0] === 6 || w[0] === 2)) {
                      d = 0;
                      continue;
                    }
                    if (w[0] === 3 && (!h || w[1] > h[0] && w[1] < h[3])) {
                      d.label = w[1];
                      break;
                    }
                    if (w[0] === 6 && d.label < h[1]) {
                      d.label = h[1], h = w;
                      break;
                    }
                    if (h && d.label < h[2]) {
                      d.label = h[2], d.ops.push(w);
                      break;
                    }
                    h[2] && d.ops.pop(), d.trys.pop();
                    continue;
                }
                w = b.call(g, d);
              } catch (B) {
                w = [6, B], m = 0;
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
          function g(b, d, v, m, h) {
            this.appURL = b, this.axios = d, this.useToken = v != null ? v : false, this.token = m, this.tokenType = h;
          }
          return g.prototype.loginWithUsernamePassword = function(b) {
            return u(this, void 0, void 0, function() {
              return r(this, function(d) {
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
                return [2, this.axios.get("/api/method/frappe.auth.get_logged_user").then(function(d) {
                  return d.data.message;
                }).catch(function(d) {
                  var v;
                  throw s(s({}, d.response.data), { httpStatus: d.response.status, httpStatusText: d.response.statusText, message: "There was an error while fetching the logged in user", exception: (v = d.response.data.exception) !== null && v !== void 0 ? v : "" });
                })];
              });
            });
          }, g.prototype.logout = function() {
            return u(this, void 0, void 0, function() {
              return r(this, function(b) {
                return [2, this.axios.post("/api/method/logout", {}).then(function() {
                }).catch(function(d) {
                  var v, m;
                  throw s(s({}, d.response.data), { httpStatus: d.response.status, httpStatusText: d.response.statusText, message: (v = d.response.data.message) !== null && v !== void 0 ? v : "There was an error while logging out", exception: (m = d.response.data.exception) !== null && m !== void 0 ? m : "" });
                })];
              });
            });
          }, g.prototype.forgetPassword = function(b) {
            return u(this, void 0, void 0, function() {
              return r(this, function(d) {
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
          var u = bi && bi.__createBinding || (Object.create ? function(o, g, b, d) {
            d === void 0 && (d = b);
            var v = Object.getOwnPropertyDescriptor(g, b);
            (!v || ("get" in v ? !g.__esModule : v.writable || v.configurable)) && (v = { enumerable: true, get: function() {
              return g[b];
            } }), Object.defineProperty(o, d, v);
          } : function(o, g, b, d) {
            d === void 0 && (d = b), o[d] = g[b];
          }), r = bi && bi.__exportStar || function(o, g) {
            for (var b in o)
              b !== "default" && !Object.prototype.hasOwnProperty.call(g, b) && u(g, o, b);
          };
          Object.defineProperty(s, "__esModule", { value: true }), r(Ay(), s), r(Oy(), s), r(Nm(), s), r(jm(), s), r(Rm(), s);
        }(bi)), bi;
      }
      var wy = Cm();
      var um = { exports: {} };
      var Yc = {};
      var sm;
      function Ry() {
        if (sm)
          return Yc;
        sm = 1;
        var s = ju;
        function u(A, L) {
          return A === L && (A !== 0 || 1 / A === 1 / L) || A !== A && L !== L;
        }
        var r = typeof Object.is == "function" ? Object.is : u, o = s.useState, g = s.useEffect, b = s.useLayoutEffect, d = s.useDebugValue;
        function v(A, L) {
          var w = L(), B = o({ inst: { value: w, getSnapshot: L } }), K = B[0].inst, ie = B[1];
          return b(function() {
            K.value = w, K.getSnapshot = L, m(K) && ie({ inst: K });
          }, [A, w, L]), g(function() {
            return m(K) && ie({ inst: K }), A(function() {
              m(K) && ie({ inst: K });
            });
          }, [A]), d(w), w;
        }
        function m(A) {
          var L = A.getSnapshot;
          A = A.value;
          try {
            var w = L();
            return !r(A, w);
          } catch (B) {
            return true;
          }
        }
        function h(A, L) {
          return L();
        }
        var _ = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? h : v;
        return Yc.useSyncExternalStore = s.useSyncExternalStore !== void 0 ? s.useSyncExternalStore : _, Yc;
      }
      var rm;
      function Ny() {
        return rm || (rm = 1, um.exports = Ry()), um.exports;
      }
      Ny();
      var zy = 0;
      var jy = 1;
      var Cy = 2;
      var om = Object.prototype.hasOwnProperty;
      function Kc(s, u) {
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
              for (; o-- && Kc(s[o], u[o]); )
                ;
            return o === -1;
          }
          if (!r || typeof s == "object") {
            o = 0;
            for (r in s)
              if (om.call(s, r) && ++o && !om.call(u, r) || !(r in u) || !Kc(s[r], u[r]))
                return false;
            return Object.keys(u).length === o;
          }
        }
        return s !== s && u !== u;
      }
      var Ga = /* @__PURE__ */ new WeakMap();
      var Va = () => {
      };
      var Xt = Va();
      var Sr = Object;
      var An = (s) => s === Xt;
      var Qa = (s) => typeof s == "function";
      var Tl = (s, u) => Qe(Qe({}, s), u);
      var Uy = (s) => Qa(s.then);
      var Xc = {};
      var fr = {};
      var Um = "undefined";
      var _r = typeof window != Um;
      var kc = typeof document != Um;
      var Dy = _r && "Deno" in window;
      var My = (s, u) => {
        const r = Ga.get(s);
        return [() => !An(u) && s.get(u) || Xc, (o) => {
          if (!An(u)) {
            const g = s.get(u);
            u in fr || (fr[u] = g), r[5](u, Tl(g, o), g || Xc);
          }
        }, r[6], () => !An(u) && u in fr ? fr[u] : !An(u) && s.get(u) || Xc];
      };
      var Jc = true;
      var By = () => Jc;
      var [Fc, Wc] = _r && window.addEventListener ? [window.addEventListener.bind(window), window.removeEventListener.bind(window)] : [Va, Va];
      var qy = () => {
        const s = kc && document.visibilityState;
        return An(s) || s !== "hidden";
      };
      var Hy = (s) => (kc && document.addEventListener("visibilitychange", s), Fc("focus", s), () => {
        kc && document.removeEventListener("visibilitychange", s), Wc("focus", s);
      });
      var Ly = (s) => {
        const u = () => {
          Jc = true, s();
        }, r = () => {
          Jc = false;
        };
        return Fc("online", u), Fc("offline", r), () => {
          Wc("online", u), Wc("offline", r);
        };
      };
      var Yy = { isOnline: By, isVisible: qy };
      var Xy = { initFocus: Hy, initReconnect: Ly };
      ju.useId;
      var rf = !_r || Dy;
      var Gy = rf ? Pe.useEffect : Pe.useLayoutEffect;
      var Gc = typeof navigator < "u" && navigator.connection;
      var cm = !rf && Gc && (["slow-2g", "2g"].includes(Gc.effectiveType) || Gc.saveData);
      var hr = /* @__PURE__ */ new WeakMap();
      var Qy = (s) => Sr.prototype.toString.call(s);
      var Qc = (s, u) => s === `[object ${u}]`;
      var Vy = 0;
      var $c = (s) => {
        const u = typeof s, r = Qy(s), o = Qc(r, "Date"), g = Qc(r, "RegExp"), b = Qc(r, "Object");
        let d, v;
        if (Sr(s) === s && !o && !g) {
          if (d = hr.get(s), d)
            return d;
          if (d = ++Vy + "~", hr.set(s, d), Array.isArray(s)) {
            for (d = "@", v = 0; v < s.length; v++)
              d += $c(s[v]) + ",";
            hr.set(s, d);
          }
          if (b) {
            d = "#";
            const m = Sr.keys(s).sort();
            for (; !An(v = m.pop()); )
              An(s[v]) || (d += v + ":" + $c(s[v]) + ",");
            hr.set(s, d);
          }
        } else
          d = o ? s.toJSON() : u == "symbol" ? s.toString() : u == "string" ? JSON.stringify(s) : "" + s;
        return d;
      };
      var Dm = (s) => {
        if (Qa(s))
          try {
            s = s();
          } catch (r) {
            s = "";
          }
        const u = s;
        return s = typeof s == "string" ? s : (Array.isArray(s) ? s.length : s) ? $c(s) : "", [s, u];
      };
      var Zy = 0;
      var fm = () => ++Zy;
      function Ky(...s) {
        return fa(this, null, function* () {
          const [u, r, o, g] = s, b = Tl({ populateCache: true, throwOnError: true }, typeof g == "boolean" ? { revalidate: g } : g || {});
          let d = b.populateCache;
          const v = b.rollbackOnError;
          let m = b.optimisticData;
          const h = (L) => typeof v == "function" ? v(L) : v !== false, _ = b.throwOnError;
          if (Qa(r)) {
            const L = r, w = [], B = u.keys();
            for (const K of B)
              !/^\$(inf|sub)\$/.test(K) && L(u.get(K)._k) && w.push(K);
            return Promise.all(w.map(A));
          }
          return A(r);
          function A(L) {
            return fa(this, null, function* () {
              const [w] = Dm(L);
              if (!w)
                return;
              const [B, K] = My(u, w), [ie, he, Ee, fe] = Ga.get(u), xe = () => {
                const Fe = ie[w];
                return (Qa(b.revalidate) ? b.revalidate(B().data, L) : b.revalidate !== false) && (delete Ee[w], delete fe[w], Fe && Fe[0]) ? Fe[0](Cy).then(() => B().data) : B().data;
              };
              if (s.length < 3)
                return xe();
              let we = o, Ye, de = false;
              const it = fm();
              he[w] = [it, 0];
              const ht = !An(m), St = B(), tt = St.data, Je = St._c, xt = An(Je) ? tt : Je;
              if (ht && (m = Qa(m) ? m(xt, tt) : m, K({ data: m, _c: xt })), Qa(we))
                try {
                  we = we(xt);
                } catch (Fe) {
                  Ye = Fe, de = true;
                }
              if (we && Uy(we))
                if (we = yield we.catch((Fe) => {
                  Ye = Fe, de = true;
                }), it !== he[w][0]) {
                  if (de)
                    throw Ye;
                  return we;
                } else
                  de && ht && h(Ye) && (d = true, K({ data: xt, _c: Xt }));
              if (d && !de)
                if (Qa(d)) {
                  const Fe = d(we, xt);
                  K({ data: Fe, error: Xt, _c: Xt });
                } else
                  K({ data: we, error: Xt, _c: Xt });
              if (he[w][1] = fm(), Promise.resolve(xe()).then(() => {
                K({ _c: Xt });
              }), de) {
                if (_)
                  throw Ye;
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
        if (!Ga.has(s)) {
          const r = Tl(Xy, u), o = /* @__PURE__ */ Object.create(null), g = Ky.bind(Xt, s);
          let b = Va;
          const d = /* @__PURE__ */ Object.create(null), v = (_, A) => {
            const L = d[_] || [];
            return d[_] = L, L.push(A), () => L.splice(L.indexOf(A), 1);
          }, m = (_, A, L) => {
            s.set(_, A);
            const w = d[_];
            if (w)
              for (const B of w)
                B(A, L);
          }, h = () => {
            if (!Ga.has(s) && (Ga.set(s, [o, /* @__PURE__ */ Object.create(null), /* @__PURE__ */ Object.create(null), /* @__PURE__ */ Object.create(null), g, m, v]), !rf)) {
              const _ = r.initFocus(setTimeout.bind(Xt, hm.bind(Xt, o, zy))), A = r.initReconnect(setTimeout.bind(Xt, hm.bind(Xt, o, jy)));
              b = () => {
                _ && _(), A && A(), Ga.delete(s);
              };
            }
          };
          return h(), [s, g, h, b];
        }
        return [s, Ga.get(s)[4]];
      };
      var ky = (s, u, r, o, g) => {
        const b = r.errorRetryCount, d = g.retryCount, v = ~~((Math.random() + 0.5) * (1 << (d < 8 ? d : 8))) * r.errorRetryInterval;
        !An(b) && d > b || setTimeout(o, v, g);
      };
      var Jy = Kc;
      var [of, Fy] = Mm(/* @__PURE__ */ new Map());
      var Wy = Tl({ onLoadingSlow: Va, onSuccess: Va, onError: Va, onErrorRetry: ky, onDiscarded: Va, revalidateOnFocus: true, revalidateOnReconnect: true, revalidateIfStale: true, shouldRetryOnError: true, errorRetryInterval: cm ? 1e4 : 5e3, focusThrottleInterval: 5 * 1e3, dedupingInterval: 2 * 1e3, loadingTimeout: cm ? 5e3 : 3e3, compare: Jy, isPaused: () => false, cache: of, mutate: Fy, fallback: {} }, Yy);
      var $y = (s, u) => {
        const r = Tl(s, u);
        if (u) {
          const { use: o, fallback: g } = s, { use: b, fallback: d } = u;
          o && b && (r.use = o.concat(b)), g && d && (r.fallback = Tl(g, d));
        }
        return r;
      };
      var dm = Pe.createContext({});
      var Py = (s) => {
        const { value: u } = s, r = Pe.useContext(dm), o = Qa(u), g = Pe.useMemo(() => o ? u(r) : u, [o, r, u]), b = Pe.useMemo(() => o ? g : $y(r, g), [o, r, g]), d = g && g.provider, v = Pe.useRef(Xt);
        d && !v.current && (v.current = Mm(d(b.cache || of), g));
        const m = v.current;
        return m && (b.cache = m[0], b.mutate = m[1]), Gy(() => {
          if (m)
            return m[2] && m[2](), m[3];
        }, []), Pe.createElement(dm.Provider, Tl(s, { value: b }));
      };
      var Iy = "$inf$";
      var Bm = _r && window.__SWR_DEVTOOLS_USE__;
      var ev = Bm ? window.__SWR_DEVTOOLS_USE__ : [];
      var tv = () => {
        Bm && (window.__SWR_DEVTOOLS_REACT__ = ju);
      };
      var nv = (s) => (u, r, o) => s(u, r && ((...g) => {
        const [b] = Dm(u), [, , , d] = Ga.get(of);
        if (b.startsWith(Iy))
          return r(...g);
        const v = d[b];
        return An(v) ? r(...g) : (delete d[b], v);
      }), o);
      ev.concat(nv);
      tv();
      ju.use;
      Promise.resolve(Xt);
      var av = Sr.defineProperty(Py, "defaultValue", { value: Wy });
      Promise.resolve();
      var Yn = /* @__PURE__ */ Object.create(null);
      Yn.open = "0";
      Yn.close = "1";
      Yn.ping = "2";
      Yn.pong = "3";
      Yn.message = "4";
      Yn.upgrade = "5";
      Yn.noop = "6";
      var yr = /* @__PURE__ */ Object.create(null);
      Object.keys(Yn).forEach((s) => {
        yr[Yn[s]] = s;
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
      function lv(s, u) {
        if (qm && s.data instanceof Blob)
          return s.data.arrayBuffer().then(mm).then(u);
        if (Hm && (s.data instanceof ArrayBuffer || Lm(s.data)))
          return u(mm(s.data));
        cf(s, false, (r) => {
          Vc || (Vc = new TextEncoder()), u(Vc.encode(r));
        });
      }
      var gm = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      var zu = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
      for (let s = 0; s < gm.length; s++)
        zu[gm.charCodeAt(s)] = s;
      var iv = (s) => {
        let u = s.length * 0.75, r = s.length, o, g = 0, b, d, v, m;
        s[s.length - 1] === "=" && (u--, s[s.length - 2] === "=" && u--);
        const h = new ArrayBuffer(u), _ = new Uint8Array(h);
        for (o = 0; o < r; o += 4)
          b = zu[s.charCodeAt(o)], d = zu[s.charCodeAt(o + 1)], v = zu[s.charCodeAt(o + 2)], m = zu[s.charCodeAt(o + 3)], _[g++] = b << 2 | d >> 4, _[g++] = (d & 15) << 4 | v >> 2, _[g++] = (v & 3) << 6 | m & 63;
        return h;
      };
      var uv = typeof ArrayBuffer == "function";
      var ff = (s, u) => {
        if (typeof s != "string")
          return { type: "message", data: Ym(s, u) };
        const r = s.charAt(0);
        return r === "b" ? { type: "message", data: sv(s.substring(1), u) } : yr[r] ? s.length > 1 ? { type: yr[r], data: s.substring(1) } : { type: yr[r] } : Pc;
      };
      var sv = (s, u) => {
        if (uv) {
          const r = iv(s);
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
      var rv = (s, u) => {
        const r = s.length, o = new Array(r);
        let g = 0;
        s.forEach((b, d) => {
          cf(b, false, (v) => {
            o[d] = v, ++g === r && u(o.join(Xm));
          });
        });
      };
      var ov = (s, u) => {
        const r = s.split(Xm), o = [];
        for (let g = 0; g < r.length; g++) {
          const b = ff(r[g], u);
          if (o.push(b), b.type === "error")
            break;
        }
        return o;
      };
      function cv() {
        return new TransformStream({ transform(s, u) {
          lv(s, (r) => {
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
      function fv(s, u) {
        Zc || (Zc = new TextDecoder());
        const r = [];
        let o = 0, g = -1, b = false;
        return new TransformStream({ transform(d, v) {
          for (r.push(d); ; ) {
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
      var Gm = 4;
      function ft(s) {
        if (s)
          return hv(s);
      }
      function hv(s) {
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
      function Qm(s, ...u) {
        return u.reduce((r, o) => (s.hasOwnProperty(o) && (r[o] = s[o]), r), {});
      }
      var dv = pn.setTimeout;
      var pv = pn.clearTimeout;
      function Tr(s, u) {
        u.useNativeTimers ? (s.setTimeoutFn = dv.bind(pn), s.clearTimeoutFn = pv.bind(pn)) : (s.setTimeoutFn = pn.setTimeout.bind(pn), s.clearTimeoutFn = pn.clearTimeout.bind(pn));
      }
      var mv = 1.33;
      function gv(s) {
        return typeof s == "string" ? yv(s) : Math.ceil((s.byteLength || s.size) * mv);
      }
      function yv(s) {
        let u = 0, r = 0;
        for (let o = 0, g = s.length; o < g; o++)
          u = s.charCodeAt(o), u < 128 ? r += 1 : u < 2048 ? r += 2 : u < 55296 || u >= 57344 ? r += 3 : (o++, r += 4);
        return r;
      }
      function vv(s) {
        let u = "";
        for (let r in s)
          s.hasOwnProperty(r) && (u.length && (u += "&"), u += encodeURIComponent(r) + "=" + encodeURIComponent(s[r]));
        return u;
      }
      function bv(s) {
        let u = {}, r = s.split("&");
        for (let o = 0, g = r.length; o < g; o++) {
          let b = r[o].split("=");
          u[decodeURIComponent(b[0])] = decodeURIComponent(b[1]);
        }
        return u;
      }
      var Sv = class extends Error {
        constructor(u, r, o) {
          super(u), this.description = r, this.context = o, this.type = "TransportError";
        }
      };
      var hf = class extends ft {
        constructor(u) {
          super(), this.writable = false, Tr(this, u), this.opts = u, this.query = u.query, this.socket = u.socket;
        }
        onError(u, r, o) {
          return super.emitReserved("error", new Sv(u, r, o)), this;
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
          const r = vv(u);
          return r.length ? "?" + r : "";
        }
      };
      var Vm = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split("");
      var Ic = 64;
      var xv = {};
      var ym = 0;
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
        return s !== vm ? (ym = 0, vm = s) : s + "." + bm(ym++);
      }
      for (; mr < Ic; mr++)
        xv[Vm[mr]] = mr;
      var Km = false;
      try {
        Km = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
      } catch (s) {
      }
      var _v = Km;
      function km(s) {
        const u = s.xdomain;
        try {
          if (typeof XMLHttpRequest < "u" && (!u || _v))
            return new XMLHttpRequest();
        } catch (r) {
        }
        if (!u)
          try {
            return new pn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
          } catch (r) {
          }
      }
      function Tv() {
      }
      var Ev = function() {
        return new km({ xdomain: false }).responseType != null;
      }();
      var Av = class extends hf {
        constructor(u) {
          if (super(u), this.polling = false, typeof location < "u") {
            const o = location.protocol === "https:";
            let g = location.port;
            g || (g = o ? "443" : "80"), this.xd = typeof location < "u" && u.hostname !== location.hostname || g !== u.port;
          }
          const r = u && u.forceBase64;
          this.supportsBinary = Ev && !r, this.opts.withCredentials && (this.cookieJar = void 0);
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
          ov(u, this.socket.binaryType).forEach(r), this.readyState !== "closed" && (this.polling = false, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll());
        }
        doClose() {
          const u = () => {
            this.write([{ type: "close" }]);
          };
          this.readyState === "open" ? u() : this.once("open", u);
        }
        write(u) {
          this.writable = false, rv(u, (r) => {
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
          const r = Qm(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
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
            if (this.xhr.onreadystatechange = Tv, u)
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
      var gr = pn.WebSocket || pn.MozWebSocket;
      var xm = true;
      var Ov = "arraybuffer";
      var _m = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
      var wv = class extends hf {
        constructor(u) {
          super(u), this.supportsBinary = !u.forceBase64;
        }
        get name() {
          return "websocket";
        }
        doOpen() {
          if (!this.check())
            return;
          const u = this.uri(), r = this.opts.protocols, o = _m ? {} : Qm(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
          this.opts.extraHeaders && (o.headers = this.opts.extraHeaders);
          try {
            this.ws = xm && !_m ? r ? new gr(u, r) : new gr(u) : new gr(u, r, o);
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
              } catch (d) {
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
          return !!gr;
        }
      };
      var Rv = class extends hf {
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
              const r = fv(Number.MAX_SAFE_INTEGER, this.socket.binaryType), o = u.readable.pipeThrough(r).getReader(), g = cv();
              g.readable.pipeTo(u.writable), this.writer = g.writable.getWriter();
              const b = () => {
                o.read().then(({ done: v, value: m }) => {
                  v || (this.onPacket(m), b());
                }).catch((v) => {
                });
              };
              b();
              const d = { type: "open" };
              this.query.sid && (d.data = `{"sid":"${this.query.sid}"}`), this.writer.write(d).then(() => this.onOpen());
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
      var Nv = { websocket: wv, webtransport: Rv, polling: Av };
      var zv = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
      var jv = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
      function ef(s) {
        if (s.length > 2e3)
          throw "URI too long";
        const u = s, r = s.indexOf("["), o = s.indexOf("]");
        r != -1 && o != -1 && (s = s.substring(0, r) + s.substring(r, o).replace(/:/g, ";") + s.substring(o, s.length));
        let g = zv.exec(s || ""), b = {}, d = 14;
        for (; d--; )
          b[jv[d]] = g[d] || "";
        return r != -1 && o != -1 && (b.source = u, b.host = b.host.substring(1, b.host.length - 1).replace(/;/g, ":"), b.authority = b.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), b.ipv6uri = true), b.pathNames = Cv(b, b.path), b.queryKey = Uv(b, b.query), b;
      }
      function Cv(s, u) {
        const r = /\/{2,9}/g, o = u.replace(r, "/").split("/");
        return (u.slice(0, 1) == "/" || u.length === 0) && o.splice(0, 1), u.slice(-1) == "/" && o.splice(o.length - 1, 1), o;
      }
      function Uv(s, u) {
        const r = {};
        return u.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(o, g, b) {
          g && (r[g] = b);
        }), r;
      }
      var Jm = class Si extends ft {
        constructor(u, r = {}) {
          super(), this.binaryType = Ov, this.writeBuffer = [], u && typeof u == "object" && (r = u, u = null), u ? (u = ef(u), r.hostname = u.host, r.secure = u.protocol === "https" || u.protocol === "wss", r.port = u.port, u.query && (r.query = u.query)) : r.host && (r.hostname = ef(r.host).host), Tr(this, r), this.secure = r.secure != null ? r.secure : typeof location < "u" && location.protocol === "https:", r.hostname && !r.port && (r.port = this.secure ? "443" : "80"), this.hostname = r.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = r.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = r.transports || ["polling", "websocket", "webtransport"], this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({ path: "/engine.io", agent: false, withCredentials: false, upgrade: true, timestampParam: "t", rememberUpgrade: false, addTrailingSlash: true, rejectUnauthorized: true, perMessageDeflate: { threshold: 1024 }, transportOptions: {}, closeOnBeforeunload: false }, r), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = bv(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
            this.transport && (this.transport.removeAllListeners(), this.transport.close());
          }, addEventListener("beforeunload", this.beforeunloadEventListener, false)), this.hostname !== "localhost" && (this.offlineEventListener = () => {
            this.onClose("transport close", { description: "network connection lost" });
          }, addEventListener("offline", this.offlineEventListener, false))), this.open();
        }
        createTransport(u) {
          const r = Object.assign({}, this.opts.query);
          r.EIO = Gm, r.transport = u, this.id && (r.sid = this.id);
          const o = Object.assign({}, this.opts, { query: r, socket: this, hostname: this.hostname, secure: this.secure, port: this.port }, this.opts.transportOptions[u]);
          return new Nv[u](o);
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
            o || (r.send([{ type: "ping", data: "probe" }]), r.once("packet", (A) => {
              if (!o)
                if (A.type === "pong" && A.data === "probe") {
                  if (this.upgrading = true, this.emitReserved("upgrading", r), !r)
                    return;
                  Si.priorWebsocketSuccess = r.name === "websocket", this.transport.pause(() => {
                    o || this.readyState !== "closed" && (_(), this.setTransport(r), r.send([{ type: "upgrade" }]), this.emitReserved("upgrade", r), r = null, this.upgrading = false, this.flush());
                  });
                } else {
                  const L = new Error("probe error");
                  L.transport = r.name, this.emitReserved("upgradeError", L);
                }
            }));
          };
          function b() {
            o || (o = true, _(), r.close(), r = null);
          }
          const d = (A) => {
            const L = new Error("probe error: " + A);
            L.transport = r.name, b(), this.emitReserved("upgradeError", L);
          };
          function v() {
            d("transport closed");
          }
          function m() {
            d("socket closed");
          }
          function h(A) {
            r && A.name !== r.name && b();
          }
          const _ = () => {
            r.removeListener("open", g), r.removeListener("error", d), r.removeListener("close", v), this.off("close", m), this.off("upgrading", h);
          };
          r.once("open", g), r.once("error", d), r.once("close", v), this.once("close", m), this.once("upgrading", h), this.upgrades.indexOf("webtransport") !== -1 && u !== "webtransport" ? this.setTimeoutFn(() => {
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
            if (o && (u += gv(o)), r > 0 && u > this.maxPayload)
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
      Jm.protocol = Gm;
      function Dv(s, u = "", r) {
        let o = s;
        r = r || typeof location < "u" && location, s == null && (s = r.protocol + "//" + r.host), typeof s == "string" && (s.charAt(0) === "/" && (s.charAt(1) === "/" ? s = r.protocol + s : s = r.host + s), /^(https?|wss?):\/\//.test(s) || (typeof r < "u" ? s = r.protocol + "//" + s : s = "https://" + s), o = ef(s)), o.port || (/^(http|ws)$/.test(o.protocol) ? o.port = "80" : /^(http|ws)s$/.test(o.protocol) && (o.port = "443")), o.path = o.path || "/";
        const g = o.host.indexOf(":") !== -1 ? "[" + o.host + "]" : o.host;
        return o.id = o.protocol + "://" + g + ":" + o.port + u, o.href = o.protocol + "://" + g + (r && r.port === o.port ? "" : ":" + o.port), o;
      }
      var Mv = typeof ArrayBuffer == "function";
      var Bv = (s) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(s) : s.buffer instanceof ArrayBuffer;
      var Fm = Object.prototype.toString;
      var qv = typeof Blob == "function" || typeof Blob < "u" && Fm.call(Blob) === "[object BlobConstructor]";
      var Hv = typeof File == "function" || typeof File < "u" && Fm.call(File) === "[object FileConstructor]";
      function pf(s) {
        return Mv && (s instanceof ArrayBuffer || Bv(s)) || qv && s instanceof Blob || Hv && s instanceof File;
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
      function Lv(s) {
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
      function Yv(s, u) {
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
      var Xv = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"];
      var Gv = 5;
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
          const r = Lv(u), o = this.encodeAsString(r.packet), g = r.buffers;
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
            o || r.type === Ne.BINARY_ACK ? (r.type = o ? Ne.EVENT : Ne.ACK, this.reconstructor = new Vv(r), r.attachments === 0 && super.emitReserved("decoded", r)) : super.emitReserved("decoded", r);
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
            const d = u.substring(b, r);
            if (d != Number(d) || u.charAt(r) !== "-")
              throw new Error("Illegal attachments");
            o.attachments = Number(d);
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
              const d = u.charAt(r);
              if (d == null || Number(d) != d) {
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
              return Array.isArray(r) && (typeof r[0] == "number" || typeof r[0] == "string" && Xv.indexOf(r[0]) === -1);
            case Ne.ACK:
            case Ne.BINARY_ACK:
              return Array.isArray(r);
          }
        }
        destroy() {
          this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
        }
      };
      var Vv = class {
        constructor(u) {
          this.packet = u, this.buffers = [], this.reconPack = u;
        }
        takeBinaryData(u) {
          if (this.buffers.push(u), this.buffers.length === this.reconPack.attachments) {
            const r = Yv(this.reconPack, this.buffers);
            return this.finishedReconstruction(), r;
          }
          return null;
        }
        finishedReconstruction() {
          this.reconPack = null, this.buffers = [];
        }
      };
      var Zv = Object.freeze(Object.defineProperty({ __proto__: null, Decoder: mf, Encoder: Qv, get PacketType() {
        return Ne;
      }, protocol: Gv }, Symbol.toStringTag, { value: "Module" }));
      function En(s, u, r) {
        return s.on(u, r), function() {
          s.off(u, r);
        };
      }
      var Kv = Object.freeze({ connect: 1, connect_error: 1, disconnect: 1, disconnecting: 1, newListener: 1, removeListener: 1 });
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
          if (Kv.hasOwnProperty(u))
            throw new Error('"' + u.toString() + '" is a reserved event name');
          if (r.unshift(u), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
            return this._addToQueue(r), this;
          const o = { type: Ne.EVENT, data: r };
          if (o.options = {}, o.options.compress = this.flags.compress !== false, typeof r[r.length - 1] == "function") {
            const b = this.ids++, d = r.pop();
            this._registerAckCallback(b, d), o.id = b;
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
            for (let d = 0; d < this.sendBuffer.length; d++)
              this.sendBuffer[d].id === u && this.sendBuffer.splice(d, 1);
            r.call(this, new Error("operation has timed out"));
          }, g);
          this.acks[u] = (...d) => {
            this.io.clearTimeoutFn(b), r.apply(this, [null, ...d]);
          };
        }
        emitWithAck(u, ...r) {
          const o = this.flags.timeout !== void 0 || this._opts.ackTimeout !== void 0;
          return new Promise((g, b) => {
            r.push((d, v) => o ? d ? b(d) : g(v) : g(d)), this.emit(u, ...r);
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
          const g = r.parser || Zv;
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
          }, d = En(r, "error", b);
          if (this._timeout !== false) {
            const v = this._timeout, m = this.setTimeoutFn(() => {
              g(), b(new Error("timeout")), r.close();
            }, v);
            this.opts.autoUnref && m.unref(), this.subs.push(() => {
              this.clearTimeoutFn(m);
            });
          }
          return this.subs.push(g), this.subs.push(d), this;
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
        const r = Dv(s, u.path || "/socket.io"), o = r.source, g = r.id, b = r.path, d = Nu[g] && b in Nu[g].nsps, v = u.forceNew || u["force new connection"] || u.multiplex === false || d;
        let m;
        return v ? m = new af(o, u) : (Nu[g] || (Nu[g] = new af(o, u)), m = Nu[g]), r.query && !u.query && (u.query = r.queryKey), m.socket(r.path, u);
      }
      Object.assign(br, { Manager: af, Socket: Wm, io: br, connect: br });
      var kv = class {
        constructor(u, r, o, g) {
          _l(this, "socket_port"), _l(this, "host"), _l(this, "port"), _l(this, "protocol"), _l(this, "url"), _l(this, "site_name"), _l(this, "socket");
          var b, d, v, m;
          if (this.socket_port = o != null ? o : "9000", this.host = (b = window.location) == null ? void 0 : b.hostname, this.port = (d = window.location) != null && d.port ? `:${this.socket_port}` : "", this.protocol = ((v = window.location) == null ? void 0 : v.protocol) === "https:" ? "https" : "http", u) {
            let h = new URL(u);
            h.port = "", o ? (h.port = o, this.url = h.toString()) : this.url = h.toString();
          } else
            this.url = `${this.protocol}://${this.host}${this.port}/`;
          r && (this.url = `${this.url}${r}`), this.site_name = r, this.socket = br(`${this.url}`, { withCredentials: true, secure: this.protocol === "https", extraHeaders: g && g.useToken === true ? { Authorization: `${g.type} ${(m = g.token) == null ? void 0 : m.call(g)}` } : {} });
        }
      };
      var Jv = Pe.createContext(null);
      var Fv = ({ url: s = "", tokenParams: u, socketPort: r, swrConfig: o, siteName: g, enableSocket: b = true, children: d, customHeaders: v }) => {
        const m = Pe.useMemo(() => {
          const h = new wy.FrappeApp(s, u, void 0, v);
          return { url: s, tokenParams: u, app: h, auth: h.auth(), db: h.db(), call: h.call(), file: h.file(), socket: b ? new kv(s, g, r, u).socket : void 0, enableSocket: b, socketPort: r };
        }, [s, u, r, b, v]);
        return z.jsx(Jv.Provider, { value: m, children: z.jsx(av, { value: o, children: d }) });
      };
      var Wv = (s) => {
        var u;
        return z.jsx(Fv, { enableSocket: false, customHeaders: { "x-frappe-csrf-token": (u = window.frappe) == null ? void 0 : u.csrf_token }, children: s.children });
      };
      Object.keys(Zp).map((s) => Zp[s]).filter((s) => s.component).map((s) => {
        const u = (r) => z.jsx(Wv, Yt(Qe({}, r), { children: z.jsx(s, {}) }));
        return customElements.get(s.component) || customElements.define(s.component, hy(u, ju, Sy)), { element: u, simulator: "simulator" in s ? s.simulator : void 0, renderInReact: "renderInReact" in s ? s.renderInReact : void 0, tag: s.component };
      }).filter(Boolean);
    }
  });
  require_index_bundle();
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
//# sourceMappingURL=index.bundle.3BJVI7XL.js.map
