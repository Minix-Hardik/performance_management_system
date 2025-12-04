(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // ../pms_system/pms_system/public/pms-ui/index.bundle.js
  var require_index_bundle = __commonJS({
    "../pms_system/pms_system/public/pms-ui/index.bundle.js"() {
      var j0 = Object.defineProperty;
      var O0 = Object.defineProperties;
      var R0 = Object.getOwnPropertyDescriptors;
      var cr = Object.getOwnPropertySymbols;
      var Hm = Object.prototype.hasOwnProperty;
      var Lm = Object.prototype.propertyIsEnumerable;
      var xi = (u, s) => (s = Symbol[u]) ? s : Symbol.for("Symbol." + u);
      var z0 = (u) => {
        throw TypeError(u);
      };
      var qm = (u, s, r) => s in u ? j0(u, s, { enumerable: true, configurable: true, writable: true, value: r }) : u[s] = r;
      var Be = (u, s) => {
        for (var r in s || (s = {}))
          Hm.call(s, r) && qm(u, r, s[r]);
        if (cr)
          for (var r of cr(s))
            Lm.call(s, r) && qm(u, r, s[r]);
        return u;
      };
      var St = (u, s) => O0(u, R0(s));
      var Oo = (u, s) => {
        var r = {};
        for (var c in u)
          Hm.call(u, c) && s.indexOf(c) < 0 && (r[c] = u[c]);
        if (u != null && cr)
          for (var c of cr(u))
            s.indexOf(c) < 0 && Lm.call(u, c) && (r[c] = u[c]);
        return r;
      };
      var ma = (u, s, r) => new Promise((c, y) => {
        var v = (m) => {
          try {
            x(r.next(m));
          } catch (d) {
            y(d);
          }
        }, h = (m) => {
          try {
            x(r.throw(m));
          } catch (d) {
            y(d);
          }
        }, x = (m) => m.done ? c(m.value) : Promise.resolve(m.value).then(v, h);
        x((r = r.apply(u, s)).next());
      });
      var Al = function(u, s) {
        this[0] = u, this[1] = s;
      };
      var Ro = (u, s, r) => {
        var c = (h, x, m, d) => {
          try {
            var T = r[h](x), w = (x = T.value) instanceof Al, G = T.done;
            Promise.resolve(w ? x[0] : x).then((E) => w ? c(h === "return" ? h : "next", x[1] ? { done: E.done, value: E.value } : E, m, d) : m({ value: E, done: G })).catch((E) => c("throw", E, m, d));
          } catch (E) {
            d(E);
          }
        }, y = (h) => v[h] = (x) => new Promise((m, d) => c(h, x, m, d)), v = {};
        return r = r.apply(u, s), v[xi("asyncIterator")] = () => v, y("next"), y("throw"), y("return"), v;
      };
      var zo = (u) => {
        var s = u[xi("asyncIterator")], r = false, c, y = {};
        return s == null ? (s = u[xi("iterator")](), c = (v) => y[v] = (h) => s[v](h)) : (s = s.call(u), c = (v) => y[v] = (h) => {
          if (r) {
            if (r = false, v === "throw")
              throw h;
            return h;
          }
          return r = true, { done: false, value: new Al(new Promise((x) => {
            var m = s[v](h);
            m instanceof Object || z0("Object expected"), x(m);
          }), 1) };
        }), y[xi("iterator")] = () => y, c("next"), "throw" in s ? c("throw") : y.throw = (v) => {
          throw v;
        }, "return" in s && c("return"), y;
      };
      var Ym = (u, s, r) => (s = u[xi("asyncIterator")]) ? s.call(u) : (u = u[xi("iterator")](), s = {}, r = (c, y) => (y = u[c]) && (s[c] = (v) => new Promise((h, x, m) => (v = y.call(u, v), m = v.done, Promise.resolve(v.value).then((d) => h({ value: d, done: m }), x)))), r("next"), r("return"), s);
      (function() {
        const s = document.createElement("link").relList;
        if (s && s.supports && s.supports("modulepreload"))
          return;
        for (const y of document.querySelectorAll('link[rel="modulepreload"]'))
          c(y);
        new MutationObserver((y) => {
          for (const v of y)
            if (v.type === "childList")
              for (const h of v.addedNodes)
                h.tagName === "LINK" && h.rel === "modulepreload" && c(h);
        }).observe(document, { childList: true, subtree: true });
        function r(y) {
          const v = {};
          return y.integrity && (v.integrity = y.integrity), y.referrerPolicy && (v.referrerPolicy = y.referrerPolicy), y.crossOrigin === "use-credentials" ? v.credentials = "include" : y.crossOrigin === "anonymous" ? v.credentials = "omit" : v.credentials = "same-origin", v;
        }
        function c(y) {
          if (y.ep)
            return;
          y.ep = true;
          const v = r(y);
          fetch(y.href, v);
        }
      })();
      function Np(u) {
        return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
      }
      var Co = { exports: {} };
      var Es = {};
      var Gm;
      function C0() {
        if (Gm)
          return Es;
        Gm = 1;
        var u = Symbol.for("react.transitional.element"), s = Symbol.for("react.fragment");
        function r(c, y, v) {
          var h = null;
          if (v !== void 0 && (h = "" + v), y.key !== void 0 && (h = "" + y.key), "key" in y) {
            v = {};
            for (var x in y)
              x !== "key" && (v[x] = y[x]);
          } else
            v = y;
          return y = v.ref, { $$typeof: u, type: c, key: h, ref: y !== void 0 ? y : null, props: v };
        }
        return Es.Fragment = s, Es.jsx = r, Es.jsxs = r, Es;
      }
      var Xm;
      function U0() {
        return Xm || (Xm = 1, Co.exports = C0()), Co.exports;
      }
      var g = U0();
      var M0 = (u) => g.jsxs("label", { children: [u.label && g.jsx("div", { children: u.label }), g.jsx("input", { className: "ef-border ef-border-gray-400 ef-rounded ef-px-2 ef-py-1", onChange: (s) => u.onChange(s.target.value), type: "text", value: u.value })] });
      var D0 = (u, s) => {
        var c;
        const r = window.cur_frm;
        return r ? (c = r.set_value) == null ? void 0 : c.call(r, u, s) : null;
      };
      var B0 = () => {
        const u = window.cur_frm;
        return u ? u.doc : null;
      };
      var Uo = { exports: {} };
      var ye = {};
      var Qm;
      function q0() {
        if (Qm)
          return ye;
        Qm = 1;
        var u = Symbol.for("react.transitional.element"), s = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), v = Symbol.for("react.consumer"), h = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), d = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), w = Symbol.for("react.activity"), G = Symbol.iterator;
        function E(A) {
          return A === null || typeof A != "object" ? null : (A = G && A[G] || A["@@iterator"], typeof A == "function" ? A : null);
        }
        var M = { isMounted: function() {
          return false;
        }, enqueueForceUpdate: function() {
        }, enqueueReplaceState: function() {
        }, enqueueSetState: function() {
        } }, K = Object.assign, re = {};
        function ce(A, X, z) {
          this.props = A, this.context = X, this.refs = re, this.updater = z || M;
        }
        ce.prototype.isReactComponent = {}, ce.prototype.setState = function(A, X) {
          if (typeof A != "object" && typeof A != "function" && A != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
          this.updater.enqueueSetState(this, A, X, "setState");
        }, ce.prototype.forceUpdate = function(A) {
          this.updater.enqueueForceUpdate(this, A, "forceUpdate");
        };
        function be() {
        }
        be.prototype = ce.prototype;
        function ue(A, X, z) {
          this.props = A, this.context = X, this.refs = re, this.updater = z || M;
        }
        var _e = ue.prototype = new be();
        _e.constructor = ue, K(_e, ce.prototype), _e.isPureReactComponent = true;
        var Te = Array.isArray;
        function De() {
        }
        var me = { H: null, A: null, T: null, S: null }, Ie = Object.prototype.hasOwnProperty;
        function pt(A, X, z) {
          var Z = z.ref;
          return { $$typeof: u, type: A, key: X, ref: Z !== void 0 ? Z : null, props: z };
        }
        function It(A, X) {
          return pt(A.type, X, A.props);
        }
        function Et(A) {
          return typeof A == "object" && A !== null && A.$$typeof === u;
        }
        function it(A) {
          var X = { "=": "=0", ":": "=2" };
          return "$" + A.replace(/[=:]/g, function(z) {
            return X[z];
          });
        }
        var gt = /\/+/g;
        function ze(A, X) {
          return typeof A == "object" && A !== null && A.key != null ? it("" + A.key) : X.toString(36);
        }
        function Je(A) {
          switch (A.status) {
            case "fulfilled":
              return A.value;
            case "rejected":
              throw A.reason;
            default:
              switch (typeof A.status == "string" ? A.then(De, De) : (A.status = "pending", A.then(function(X) {
                A.status === "pending" && (A.status = "fulfilled", A.value = X);
              }, function(X) {
                A.status === "pending" && (A.status = "rejected", A.reason = X);
              })), A.status) {
                case "fulfilled":
                  return A.value;
                case "rejected":
                  throw A.reason;
              }
          }
          throw A;
        }
        function Y(A, X, z, Z, J) {
          var $ = typeof A;
          ($ === "undefined" || $ === "boolean") && (A = null);
          var he = false;
          if (A === null)
            he = true;
          else
            switch ($) {
              case "bigint":
              case "string":
              case "number":
                he = true;
                break;
              case "object":
                switch (A.$$typeof) {
                  case u:
                  case s:
                    he = true;
                    break;
                  case T:
                    return he = A._init, Y(he(A._payload), X, z, Z, J);
                }
            }
          if (he)
            return J = J(A), he = Z === "" ? "." + ze(A, 0) : Z, Te(J) ? (z = "", he != null && (z = he.replace(gt, "$&/") + "/"), Y(J, X, z, "", function(bn) {
              return bn;
            })) : J != null && (Et(J) && (J = It(J, z + (J.key == null || A && A.key === J.key ? "" : ("" + J.key).replace(gt, "$&/") + "/") + he)), X.push(J)), 1;
          he = 0;
          var Fe = Z === "" ? "." : Z + ":";
          if (Te(A))
            for (var Se = 0; Se < A.length; Se++)
              Z = A[Se], $ = Fe + ze(Z, Se), he += Y(Z, X, z, $, J);
          else if (Se = E(A), typeof Se == "function")
            for (A = Se.call(A), Se = 0; !(Z = A.next()).done; )
              Z = Z.value, $ = Fe + ze(Z, Se++), he += Y(Z, X, z, $, J);
          else if ($ === "object") {
            if (typeof A.then == "function")
              return Y(Je(A), X, z, Z, J);
            throw X = String(A), Error("Objects are not valid as a React child (found: " + (X === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : X) + "). If you meant to render a collection of children, use an array instead.");
          }
          return he;
        }
        function P(A, X, z) {
          if (A == null)
            return A;
          var Z = [], J = 0;
          return Y(A, Z, "", "", function($) {
            return X.call(z, $, J++);
          }), Z;
        }
        function se(A) {
          if (A._status === -1) {
            var X = A._result;
            X = X(), X.then(function(z) {
              (A._status === 0 || A._status === -1) && (A._status = 1, A._result = z);
            }, function(z) {
              (A._status === 0 || A._status === -1) && (A._status = 2, A._result = z);
            }), A._status === -1 && (A._status = 0, A._result = X);
          }
          if (A._status === 1)
            return A._result.default;
          throw A._result;
        }
        var Re = typeof reportError == "function" ? reportError : function(A) {
          if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var X = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof A == "object" && A !== null && typeof A.message == "string" ? String(A.message) : String(A), error: A });
            if (!window.dispatchEvent(X))
              return;
          } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", A);
            return;
          }
          console.error(A);
        }, I = { map: P, forEach: function(A, X, z) {
          P(A, function() {
            X.apply(this, arguments);
          }, z);
        }, count: function(A) {
          var X = 0;
          return P(A, function() {
            X++;
          }), X;
        }, toArray: function(A) {
          return P(A, function(X) {
            return X;
          }) || [];
        }, only: function(A) {
          if (!Et(A))
            throw Error("React.Children.only expected to receive a single React element child.");
          return A;
        } };
        return ye.Activity = w, ye.Children = I, ye.Component = ce, ye.Fragment = r, ye.Profiler = y, ye.PureComponent = ue, ye.StrictMode = c, ye.Suspense = m, ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = me, ye.__COMPILER_RUNTIME = { __proto__: null, c: function(A) {
          return me.H.useMemoCache(A);
        } }, ye.cache = function(A) {
          return function() {
            return A.apply(null, arguments);
          };
        }, ye.cacheSignal = function() {
          return null;
        }, ye.cloneElement = function(A, X, z) {
          if (A == null)
            throw Error("The argument must be a React element, but you passed " + A + ".");
          var Z = K({}, A.props), J = A.key;
          if (X != null)
            for ($ in X.key !== void 0 && (J = "" + X.key), X)
              !Ie.call(X, $) || $ === "key" || $ === "__self" || $ === "__source" || $ === "ref" && X.ref === void 0 || (Z[$] = X[$]);
          var $ = arguments.length - 2;
          if ($ === 1)
            Z.children = z;
          else if (1 < $) {
            for (var he = Array($), Fe = 0; Fe < $; Fe++)
              he[Fe] = arguments[Fe + 2];
            Z.children = he;
          }
          return pt(A.type, J, Z);
        }, ye.createContext = function(A) {
          return A = { $$typeof: h, _currentValue: A, _currentValue2: A, _threadCount: 0, Provider: null, Consumer: null }, A.Provider = A, A.Consumer = { $$typeof: v, _context: A }, A;
        }, ye.createElement = function(A, X, z) {
          var Z, J = {}, $ = null;
          if (X != null)
            for (Z in X.key !== void 0 && ($ = "" + X.key), X)
              Ie.call(X, Z) && Z !== "key" && Z !== "__self" && Z !== "__source" && (J[Z] = X[Z]);
          var he = arguments.length - 2;
          if (he === 1)
            J.children = z;
          else if (1 < he) {
            for (var Fe = Array(he), Se = 0; Se < he; Se++)
              Fe[Se] = arguments[Se + 2];
            J.children = Fe;
          }
          if (A && A.defaultProps)
            for (Z in he = A.defaultProps, he)
              J[Z] === void 0 && (J[Z] = he[Z]);
          return pt(A, $, J);
        }, ye.createRef = function() {
          return { current: null };
        }, ye.forwardRef = function(A) {
          return { $$typeof: x, render: A };
        }, ye.isValidElement = Et, ye.lazy = function(A) {
          return { $$typeof: T, _payload: { _status: -1, _result: A }, _init: se };
        }, ye.memo = function(A, X) {
          return { $$typeof: d, type: A, compare: X === void 0 ? null : X };
        }, ye.startTransition = function(A) {
          var X = me.T, z = {};
          me.T = z;
          try {
            var Z = A(), J = me.S;
            J !== null && J(z, Z), typeof Z == "object" && Z !== null && typeof Z.then == "function" && Z.then(De, Re);
          } catch ($) {
            Re($);
          } finally {
            X !== null && z.types !== null && (X.types = z.types), me.T = X;
          }
        }, ye.unstable_useCacheRefresh = function() {
          return me.H.useCacheRefresh();
        }, ye.use = function(A) {
          return me.H.use(A);
        }, ye.useActionState = function(A, X, z) {
          return me.H.useActionState(A, X, z);
        }, ye.useCallback = function(A, X) {
          return me.H.useCallback(A, X);
        }, ye.useContext = function(A) {
          return me.H.useContext(A);
        }, ye.useDebugValue = function() {
        }, ye.useDeferredValue = function(A, X) {
          return me.H.useDeferredValue(A, X);
        }, ye.useEffect = function(A, X) {
          return me.H.useEffect(A, X);
        }, ye.useEffectEvent = function(A) {
          return me.H.useEffectEvent(A);
        }, ye.useId = function() {
          return me.H.useId();
        }, ye.useImperativeHandle = function(A, X, z) {
          return me.H.useImperativeHandle(A, X, z);
        }, ye.useInsertionEffect = function(A, X) {
          return me.H.useInsertionEffect(A, X);
        }, ye.useLayoutEffect = function(A, X) {
          return me.H.useLayoutEffect(A, X);
        }, ye.useMemo = function(A, X) {
          return me.H.useMemo(A, X);
        }, ye.useOptimistic = function(A, X) {
          return me.H.useOptimistic(A, X);
        }, ye.useReducer = function(A, X, z) {
          return me.H.useReducer(A, X, z);
        }, ye.useRef = function(A) {
          return me.H.useRef(A);
        }, ye.useState = function(A) {
          return me.H.useState(A);
        }, ye.useSyncExternalStore = function(A, X, z) {
          return me.H.useSyncExternalStore(A, X, z);
        }, ye.useTransition = function() {
          return me.H.useTransition();
        }, ye.version = "19.2.0", ye;
      }
      var Vm;
      function sf() {
        return Vm || (Vm = 1, Uo.exports = q0()), Uo.exports;
      }
      var Pe = sf();
      var Cs = Np(Pe);
      var uf = () => {
        var r;
        const [u, s] = Pe.useState((r = B0()) == null ? void 0 : r.client_name);
        return Pe.useEffect(() => {
          D0("client_name", u);
        }, [u]), g.jsx(g.Fragment, { children: g.jsx(M0, { value: u, onChange: s, label: "Client Name" }) });
      };
      uf.component = "pms-demo-component";
      uf.simulator = { doctype: "Appraisal Cycle", docname: "2025-26" };
      var H0 = (u) => u.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
      var L0 = (u) => u.replace(/^([A-Z])|[\s-_]+(\w)/g, (s, r, c) => c ? c.toUpperCase() : r.toLowerCase());
      var km = (u) => {
        const s = L0(u);
        return s.charAt(0).toUpperCase() + s.slice(1);
      };
      var Ep = (...u) => u.filter((s, r, c) => !!s && s.trim() !== "" && c.indexOf(s) === r).join(" ").trim();
      var Y0 = (u) => {
        for (const s in u)
          if (s.startsWith("aria-") || s === "role" || s === "title")
            return true;
      };
      var G0 = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
      var X0 = Pe.forwardRef((d, m) => {
        var T = d, { color: u = "currentColor", size: s = 24, strokeWidth: r = 2, absoluteStrokeWidth: c, className: y = "", children: v, iconNode: h } = T, x = Oo(T, ["color", "size", "strokeWidth", "absoluteStrokeWidth", "className", "children", "iconNode"]);
        return Pe.createElement("svg", Be(Be(St(Be({ ref: m }, G0), { width: s, height: s, stroke: u, strokeWidth: c ? Number(r) * 24 / Number(s) : r, className: Ep("lucide", y) }), !v && !Y0(x) && { "aria-hidden": "true" }), x), [...h.map(([w, G]) => Pe.createElement(w, G)), ...Array.isArray(v) ? v : [v]]);
      });
      var rf = (u, s) => {
        const r = Pe.forwardRef((h, v) => {
          var x = h, { className: c } = x, y = Oo(x, ["className"]);
          return Pe.createElement(X0, Be({ ref: v, iconNode: s, className: Ep(`lucide-${H0(km(u))}`, `lucide-${u}`, c) }, y));
        });
        return r.displayName = km(u), r;
      };
      var Q0 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
      var V0 = rf("chevron-down", Q0);
      var k0 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
      var Z0 = rf("chevron-up", k0);
      var K0 = [["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }], ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]];
      var Us = rf("lock", K0);
      var ga = ({ rating: u, onChange: s, disabled: r }) => g.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2", children: [g.jsx("input", { type: "number", min: 0, max: 10, step: 0.5, value: u != null ? u : "", onChange: (c) => {
        let y = parseFloat(c.target.value);
        if (isNaN(y)) {
          s(0);
          return;
        }
        y < 0 && (y = 0), y > 10 && (y = 10), s(y);
      }, disabled: r, className: `ef-w-16 ef-px-2 ef-py-1 ef-border ef-rounded ef-text-center ef-font-semibold ef-text-sm ${r ? "ef-bg-gray-100 ef-text-gray-500 ef-cursor-not-allowed" : "ef-bg-white"}`, placeholder: "0-10" }), g.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/ 10" })] });
      var Mo = ({ tasks: u, kraId: s, goalId: r, appraisalMode: c, updateTaskData: y, employeeCanEdit: v, managerCanEdit: h, showManagerData: x, secondManagerCanEdit: m }) => {
        if (!u || u.length === 0)
          return null;
        const d = () => g.jsxs("div", { className: "ef-flex ef-items-center ef-gap-1 ef-text-gray-500 ef-text-xs", children: [g.jsx(Us, { size: 10 }), g.jsx("span", { children: "Locked" })] });
        return g.jsxs("div", { className: "ef-mt-4 ef-space-y-3", children: [g.jsxs("h4", { className: "ef-text-sm ef-font-semibold ef-text-gray-700 ef-mb-2", children: ["Tasks (", u.length, ")"] }), u.map((T) => g.jsxs("div", { className: "ef-bg-gray-50 ef-rounded-lg ef-border ef-border-gray-200 ef-p-3", children: [g.jsx("div", { className: "ef-flex ef-items-start ef-justify-between ef-mb-2", children: g.jsx("p", { className: "ef-text-sm ef-font-medium ef-text-gray-800 ef-flex-1", children: T.task }) }), c === "self" && g.jsxs("div", { className: "ef-bg-blue-50 ef-rounded ef-p-2 ef-border ef-border-blue-100", children: [g.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [g.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Completion" }), !v && g.jsx(d, {})] }), g.jsxs("div", { className: "ef-flex ef-items-center ef-gap-3", children: [g.jsx("input", { type: "number", min: "0", max: "100", value: T.completed_percentage, onChange: (w) => v && y(s, r, T.id, "completed_percentage", Number(w.target.value)), disabled: !v, className: `ef-w-20 ef-px-2 ef-py-1 ef-rounded ef-text-sm ef-border ${v ? "ef-bg-white ef-border-blue-300" : "ef-bg-gray-100 ef-text-gray-500 ef-cursor-not-allowed"}` }), g.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "%" }), g.jsx("div", { className: "ef-flex-1 ef-bg-gray-200 ef-rounded-full ef-h-2", children: g.jsx("div", { className: "ef-h-full ef-bg-blue-500 ef-rounded-full ef-transition-all", style: { width: `${Math.min(T.completed_percentage, 100)}%` } }) })] }), g.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Description" }), g.jsx("textarea", { value: T.employee_description || "", onChange: (w) => v && y(s, r, T.id, "employee_description", w.target.value), disabled: !v, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${v ? "ef-bg-white ef-border-blue-200" : "ef-bg-gray-100 ef-text-gray-500 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Add description..." })] }), c === "manager" && g.jsxs(g.Fragment, { children: [g.jsxs("div", { className: "ef-bg-blue-50 ef-rounded ef-p-2 ef-border ef-border-blue-100 ef-mb-2", children: [g.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Employee Completion" }), g.jsxs("div", { className: "ef-flex ef-items-center ef-gap-3 ef-mb-2", children: [g.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-blue-100 ef-px-2 ef-py-1 ef-rounded", children: [g.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-blue-700", children: T.completed_percentage }), g.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "%" })] }), g.jsx("div", { className: "ef-flex-1 ef-bg-gray-200 ef-rounded-full ef-h-2", children: g.jsx("div", { className: "ef-h-full ef-bg-blue-500 ef-rounded-full", style: { width: `${Math.min(T.completed_percentage, 100)}%` } }) })] }), T.employee_description && g.jsx("div", { className: "ef-bg-white ef-border ef-border-blue-100 ef-p-2 ef-rounded ef-text-xs", children: T.employee_description })] }), x && g.jsxs("div", { className: "ef-bg-purple-50 ef-rounded ef-p-2 ef-border ef-border-purple-100", children: [g.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [g.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Manager Score" }), !h && g.jsx(d, {})] }), g.jsx("input", { type: "number", min: "0", max: "10", step: "0.1", value: T.manager_score || "", onChange: (w) => h && y(s, r, T.id, "manager_score", Number(w.target.value)), disabled: !h, className: `ef-w-20 ef-px-2 ef-py-1 ef-rounded ef-text-sm ef-border ef-mb-2 ${h ? "ef-bg-white ef-border-purple-300" : "ef-bg-gray-100 ef-text-gray-500 ef-cursor-not-allowed"}`, placeholder: "0-10" }), g.jsx("textarea", { value: T.manager_description || "", onChange: (w) => h && y(s, r, T.id, "manager_description", w.target.value), disabled: !h, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${h ? "ef-bg-white ef-border-purple-200" : "ef-bg-gray-100 ef-text-gray-500 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Add your review..." })] })] }), c === "second_manager" && g.jsxs(g.Fragment, { children: [g.jsxs("div", { className: "ef-bg-blue-50 ef-rounded ef-p-2 ef-border ef-border-blue-100 ef-mb-2", children: [g.jsxs("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: ["Employee Completion: ", T.completed_percentage, "%"] }), T.employee_description && g.jsx("div", { className: "ef-bg-white ef-border ef-border-blue-100 ef-p-2 ef-rounded ef-text-xs", children: T.employee_description })] }), x && g.jsxs("div", { className: "ef-bg-purple-50 ef-rounded ef-p-2 ef-border ef-border-purple-100 ef-mb-2", children: [g.jsxs("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: ["Manager Score: ", T.manager_score || "N/A"] }), T.manager_description && g.jsx("div", { className: "ef-bg-white ef-border ef-border-purple-100 ef-p-2 ef-rounded ef-text-xs", children: T.manager_description })] }), g.jsxs("div", { className: "ef-bg-green-50 ef-rounded ef-p-2 ef-border ef-border-green-100", children: [g.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [g.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Second Manager Score" }), !m && g.jsx(d, {})] }), g.jsx("input", { type: "number", min: "0", max: "10", step: "0.1", value: T.second_manager_score || "", onChange: (w) => m && y(s, r, T.id, "second_manager_score", Number(w.target.value)), disabled: !m, className: `ef-w-20 ef-px-2 ef-py-1 ef-rounded ef-text-sm ef-border ef-mb-2 ${m ? "ef-bg-white ef-border-green-300" : "ef-bg-gray-100 ef-text-gray-500 ef-cursor-not-allowed"}`, placeholder: "0-10" }), g.jsx("textarea", { value: T.second_manager_description || "", onChange: (w) => m && y(s, r, T.id, "second_manager_description", w.target.value), disabled: !m, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${m ? "ef-bg-white ef-border-green-200" : "ef-bg-gray-100 ef-text-gray-500 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Add your review..." })] })] })] }, T.id))] });
      };
      var J0 = ({ kra: u, goal: s, appraisalMode: r, updateGoalRating: c, updateTaskData: y, employeeCanEdit: v, managerCanEdit: h, showManagerData: x, secondManagerCanEdit: m }) => {
        var w;
        const d = s.tasks && s.tasks.length > 0, T = () => g.jsxs("div", { className: "ef-absolute ef-top-2 ef-right-2 ef-flex ef-items-center ef-gap-1 ef-bg-gray-200 ef-text-gray-600 ef-text-xs ef-px-2 ef-py-1 ef-rounded-lg ef-shadow-sm", children: [g.jsx(Us, { size: 12 }), "Locked"] });
        return r === "self" ? g.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-shadow-sm", children: [g.jsx("div", { className: "ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b", children: g.jsx("h3", { className: "ef-text-sm ef-font-semibold ef-text-gray-900", children: s.description }) }), g.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [g.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [g.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Self Appraisal" }), !v && g.jsx(T, {})] }), g.jsxs("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: ["Rating ", d && g.jsx("span", { className: "ef-text-blue-600", children: "(Calculated from tasks)" })] }), d ? g.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-blue-100 ef-border ef-border-blue-200 ef-px-3 ef-py-2 ef-rounded ef-mb-2", children: [g.jsx("span", { className: "ef-text-xl ef-font-bold ef-text-blue-700", children: ((w = s.selfRating) == null ? void 0 : w.toFixed(1)) || "0.0" }), g.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] }) : g.jsx(ga, { rating: s.selfRating, onChange: (G) => v && c(u.id, s.id, "selfRating", G), disabled: !v }), g.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), g.jsx("textarea", { value: s.selfComments, onChange: (G) => v && c(u.id, s.id, "selfComments", G.target.value), disabled: !v, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${v ? "ef-bg-white ef-border-blue-200 focus:ef-ring-1 focus:ef-ring-blue-400" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Share your thoughts..." })] }), d && g.jsx("div", { className: "ef-px-3 ef-pb-3", children: g.jsx(Mo, { tasks: s.tasks, kraId: u.id, goalId: s.id, appraisalMode: r, updateTaskData: y, employeeCanEdit: v, managerCanEdit: h, showManagerData: x, secondManagerCanEdit: m }) })] }) : r === "manager" ? g.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-shadow-sm", children: [g.jsx("div", { className: "ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b", children: g.jsx("h3", { className: "ef-text-sm ef-font-semibold ef-text-gray-900", children: s.description }) }), g.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [g.jsxs("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: ["Employee Self Rating ", d && g.jsx("span", { className: "ef-text-blue-600", children: "(From tasks)" })] }), g.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4 ef-mb-2", children: [g.jsxs("div", { children: [g.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), g.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-blue-100 ef-border ef-border-blue-200 ef-px-2 ef-py-1 ef-rounded", children: [g.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-blue-700", children: s.selfRating }), g.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), g.jsxs("div", { className: "ef-flex-1", children: [g.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), g.jsx("div", { className: "ef-bg-white ef-border ef-border-blue-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: s.selfComments || g.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), d && g.jsx("div", { className: "ef-px-3 ef-pb-2 ef-bg-blue-50", children: g.jsx(Mo, { tasks: s.tasks, kraId: u.id, goalId: s.id, appraisalMode: r, updateTaskData: y, employeeCanEdit: v, managerCanEdit: h, showManagerData: x, secondManagerCanEdit: m }) }), x && g.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-purple-50", children: [g.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [g.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Manager Review (Goal Level)" }), !h && g.jsx(T, {})] }), g.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), g.jsx(ga, { rating: s.managerRating, onChange: (G) => h && c(u.id, s.id, "managerRating", G), disabled: !h }), g.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), g.jsx("textarea", { value: s.managerComments, onChange: (G) => h && c(u.id, s.id, "managerComments", G.target.value), disabled: !h, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${h ? "ef-bg-white ef-border-purple-200 focus:ef-ring-1 focus:ef-ring-purple-400" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Add your review..." })] })] }) : r === "second_manager" ? g.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-shadow-sm", children: [g.jsx("div", { className: "ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b", children: g.jsx("h3", { className: "ef-text-sm ef-font-semibold ef-text-gray-900", children: s.description }) }), g.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [g.jsxs("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: ["Employee Self Rating ", d && g.jsx("span", { className: "ef-text-blue-600", children: "(From tasks)" })] }), g.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4", children: [g.jsxs("div", { children: [g.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), g.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-blue-100 ef-border ef-border-blue-200 ef-px-2 ef-py-1 ef-rounded", children: [g.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-blue-700", children: s.selfRating }), g.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), g.jsxs("div", { className: "ef-flex-1", children: [g.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), g.jsx("div", { className: "ef-bg-white ef-border ef-border-blue-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: s.selfComments || g.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), d && g.jsx("div", { className: "ef-px-3 ef-pb-2 ef-bg-blue-50", children: g.jsx(Mo, { tasks: s.tasks, kraId: u.id, goalId: s.id, appraisalMode: r, updateTaskData: y, employeeCanEdit: v, managerCanEdit: h, showManagerData: x, secondManagerCanEdit: m }) }), x && g.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-purple-50", children: [g.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Manager Review (Goal Level)" }), g.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4", children: [g.jsxs("div", { children: [g.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), g.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-purple-100 ef-border ef-border-purple-200 ef-px-2 ef-py-1 ef-rounded", children: [g.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-purple-700", children: s.managerRating }), g.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), g.jsxs("div", { className: "ef-flex-1", children: [g.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), g.jsx("div", { className: "ef-bg-white ef-border ef-border-purple-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: s.managerComments || g.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), g.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-green-50", children: [g.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [g.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Second Manager Review (Goal Level)" }), !m && g.jsx(T, {})] }), g.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), g.jsx(ga, { rating: s.secondManagerRating, onChange: (G) => m && c(u.id, s.id, "secondManagerRating", G), disabled: !m }), g.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), g.jsx("textarea", { value: s.secondManagerComment, onChange: (G) => m && c(u.id, s.id, "secondManagerComment", G.target.value), disabled: !m, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${m ? "ef-bg-white ef-border-green-200 focus:ef-ring-1 focus:ef-ring-green-400" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Add your review..." })] })] }) : null;
      };
      var F0 = ({ kra: u, appraisalMode: s, updateKRARating: r, employeeCanEdit: c, managerCanEdit: y, showManagerData: v, secondManagerCanEdit: h }) => {
        const x = () => g.jsxs("div", { className: "ef-absolute ef-top-2 ef-right-2 ef-flex ef-items-center ef-gap-1 ef-bg-gray-200 ef-text-gray-600 ef-text-xs ef-px-2 ef-py-1 ef-rounded-lg ef-shadow-sm", children: [g.jsx(Us, { size: 12 }), "Locked"] });
        return s === "self" ? g.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-overflow-hidden ef-shadow-sm", children: [g.jsx("div", { className: "ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b ef-border-gray-200", children: g.jsx("h3", { className: "ef-text-sm ef-font-semibold ef-text-gray-900", children: u.title }) }), g.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [g.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [g.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Self Appraisal" }), !c && g.jsx(x, {})] }), g.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), g.jsx(ga, { rating: u.selfRating, onChange: (m) => c && r(u.id, "selfRating", m), disabled: !c }), g.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), g.jsx("textarea", { value: u.selfComments, onChange: (m) => c && r(u.id, "selfComments", m.target.value), disabled: !c, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${c ? "ef-bg-white ef-border-blue-200 focus:ef-ring-1 focus:ef-ring-blue-400" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Add your comments..." })] })] }) : s === "manager" ? g.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-overflow-hidden ef-shadow-sm", children: [g.jsx("div", { className: "ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b ef-border-gray-200", children: g.jsx("h3", { className: "ef-text-sm ef-font-semibold ef-text-gray-900", children: u.title }) }), g.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [g.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Employee Self Rating" }), g.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4 ef-mb-2", children: [g.jsxs("div", { children: [g.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), g.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-blue-100 ef-border ef-border-blue-200 ef-px-2 ef-py-1 ef-rounded", children: [g.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-blue-700", children: u.selfRating }), g.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), g.jsxs("div", { className: "ef-flex-1", children: [g.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), g.jsx("div", { className: "ef-bg-white ef-border ef-border-blue-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: u.selfComments || g.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), v && g.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-purple-50", children: [g.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [g.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Manager Review" }), !y && g.jsx(x, {})] }), g.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), g.jsx(ga, { rating: u.managerRating, onChange: (m) => y && r(u.id, "managerRating", m), disabled: !y }), g.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), g.jsx("textarea", { value: u.managerComments, onChange: (m) => y && r(u.id, "managerComments", m.target.value), disabled: !y, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${y ? "ef-bg-white ef-border-purple-200 focus:ef-ring-1 focus:ef-ring-purple-400" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Add your review..." })] })] }) : s === "second_manager" ? g.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-overflow-hidden ef-shadow-sm", children: [g.jsx("div", { className: "ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b ef-border-gray-200", children: g.jsx("h3", { className: "ef-text-sm ef-font-semibold ef-text-gray-900", children: u.title }) }), g.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [g.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Employee Self Rating" }), g.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4", children: [g.jsxs("div", { children: [g.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), g.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-blue-100 ef-border ef-border-blue-200 ef-px-2 ef-py-1 ef-rounded", children: [g.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-blue-700", children: u.selfRating }), g.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), g.jsxs("div", { className: "ef-flex-1", children: [g.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), g.jsx("div", { className: "ef-bg-white ef-border ef-border-blue-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: u.selfComments || g.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), v && g.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-purple-50", children: [g.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Manager Review" }), g.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4", children: [g.jsxs("div", { children: [g.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), g.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-purple-100 ef-border ef-border-purple-200 ef-px-2 ef-py-1 ef-rounded", children: [g.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-purple-700", children: u.managerRating }), g.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), g.jsxs("div", { className: "ef-flex-1", children: [g.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), g.jsx("div", { className: "ef-bg-white ef-border ef-border-purple-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: u.managerComments || g.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), g.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-green-50", children: [g.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [g.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Second Manager Review" }), !h && g.jsx(x, {})] }), g.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), g.jsx(ga, { rating: u.secondManagerRating, onChange: (m) => h && r(u.id, "secondManagerRating", m), disabled: !h }), g.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), g.jsx("textarea", { value: u.secondManagerComment, onChange: (m) => h && r(u.id, "secondManagerComment", m.target.value), disabled: !h, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${h ? "ef-bg-white ef-border-green-200 focus:ef-ring-1 focus:ef-ring-green-400" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Add your review..." })] })] }) : null;
      };
      var W0 = ({ kra: u, expanded: s, onToggle: r, appraisalMode: c, updateGoalRating: y, updateKRARating: v, updateTaskData: h, employeeCanEdit: x, managerCanEdit: m, showManagerData: d, secondManagerCanEdit: T }) => g.jsxs("div", { className: "ef-border ef-rounded-lg", children: [g.jsxs("div", { onClick: r, className: "ef-flex ef-justify-between ef-items-center ef-p-4 ef-bg-gray-50 ef-cursor-pointer ef-hover:bg-gray-100", children: [g.jsxs("div", { className: "ef-flex-1", children: [g.jsxs("div", { className: "ef-flex ef-items-center ef-gap-3", children: [g.jsx("h3", { className: "ef-text-lg ef-font-semibold ef-text-gray-900", children: u.title }), g.jsxs("span", { className: "ef-px-3 ef-py-1 ef-bg-blue-100 ef-text-blue-700 ef-text-sm ef-rounded-full", children: [u.weightage, "% weightage"] })] }), g.jsx("p", { className: "ef-text-gray-600 ef-text-sm ef-mt-1", children: u.description })] }), s ? g.jsx(Z0, {}) : g.jsx(V0, {})] }), s && g.jsx("div", { className: "ef-p-4", children: u.goals.length > 0 ? u.goals.map((w) => g.jsxs("div", { className: "ef-mb-6 ef-last:mb-0 ef-pb-6 ef-last:pb-0 ef-border-b ef-last:border-b-0", children: [g.jsxs("div", { className: "ef-mb-3", children: [g.jsxs("p", { className: "ef-font-medium ef-text-gray-900", children: [w.description, g.jsxs("span", { className: "ef-inline-flex ef-items-center ef-px-3 ef-py-1 ef-bg-gradient-to-r ef-from-purple-500 ef-to-pink-500 ef-text-white ef-text-xs ef-font-semibold ef-rounded-full ef-shadow-sm ef-mx-3", children: [w.weightage, "% weightage"] })] }), g.jsx("div", { className: "ef-w-full ef-bg-gray-200 ef-rounded-full ef-h-3 ef-overflow-hidden ef-mt-2", children: g.jsx("div", { className: "ef-h-full ef-bg-gradient-to-r ef-from-green-400 ef-to-green-600 ef-transition-all ef-duration-500", style: { width: `${Math.min(w.progress, 100)}%` } }) }), g.jsxs("p", { className: "ef-text-sm ef-text-gray-600 ef-mt-1", children: ["Progress: ", Math.min(w.progress, 100), "%"] })] }), g.jsx(J0, { kra: u, goal: w, appraisalMode: c, updateGoalRating: y, updateTaskData: h, secondManagerCanEdit: T, employeeCanEdit: x, managerCanEdit: m, showManagerData: d })] }, w.id)) : g.jsx(F0, { kra: u, appraisalMode: c, updateKRARating: v, employeeCanEdit: x, secondManagerCanEdit: T, managerCanEdit: m, showManagerData: d }) })] });
      var $0 = ({ kraList: u, expandedKRA: s, toggleKRA: r, appraisalMode: c, updateGoalRating: y, updateKRARating: v, updateTaskData: h, employeeCanEdit: x, managerCanEdit: m, showManagerData: d, secondManagerCanEdit: T }) => g.jsx("div", { className: "ef-space-y-4", children: u.map((w) => g.jsx(W0, { kra: w, expanded: s[w.id], onToggle: () => r(w.id), appraisalMode: c, updateGoalRating: y, updateKRARating: v, updateTaskData: h, employeeCanEdit: x, managerCanEdit: m, showManagerData: d, secondManagerCanEdit: T }, w.id)) });
      var P0 = ({ comp: u, appraisalMode: s, updateCompetency: r, employeeCanEdit: c, managerCanEdit: y, showManagerData: v, secondManagerCanEdit: h }) => {
        const x = () => g.jsxs("div", { className: "ef-absolute ef-top-2 ef-right-2 ef-flex ef-items-center ef-gap-1 ef-bg-gray-200 ef-text-gray-600 ef-text-xs ef-px-2 ef-py-1 ef-rounded-lg ef-shadow-sm", children: [g.jsx(Us, { size: 12 }), "Locked"] });
        return g.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-overflow-hidden ef-shadow-sm", children: [g.jsxs("div", { className: "ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b ef-border-gray-200 ef-flex ef-items-center ef-justify-between", children: [g.jsx("h3", { className: "ef-text-sm ef-font-semibold ef-text-gray-900", children: u.name }), g.jsxs("span", { className: "ef-px-2 ef-py-1 ef-bg-purple-600 ef-text-white ef-text-xs ef-rounded-full ef-font-medium", children: [u.weightage, "%"] })] }), g.jsxs("div", { className: "ef-divide-y ef-divide-gray-100", children: [s === "self" && g.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [g.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [g.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Self Appraisal" }), !c && g.jsx(x, {})] }), g.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), g.jsx(ga, { rating: u.selfRating, onChange: (m) => c && r(u.id, "selfRating", m), disabled: !c }), g.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), g.jsx("textarea", { value: u.selfComments, onChange: (m) => c && r(u.id, "selfComments", m.target.value), disabled: !c, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${c ? "ef-bg-white ef-border-blue-200 focus:ef-ring-1 focus:ef-ring-blue-400 focus:ef-outline-none" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Share your thoughts..." })] }), s === "manager" && g.jsxs(g.Fragment, { children: [g.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [g.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Employee Self Rating" }), g.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4 ef-mb-2", children: [g.jsxs("div", { children: [g.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), g.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-blue-100 ef-border ef-border-blue-200 ef-px-2 ef-py-1 ef-rounded", children: [g.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-blue-700", children: u.selfRating }), g.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), g.jsxs("div", { className: "ef-flex-1", children: [g.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), g.jsx("div", { className: "ef-bg-white ef-border ef-border-blue-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: u.selfComments || g.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), v && g.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-purple-50", children: [g.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [g.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Manager Review" }), !y && g.jsx(x, {})] }), g.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), g.jsx(ga, { rating: u.managerRating, onChange: (m) => y && r(u.id, "managerRating", m), disabled: !y }), g.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), g.jsx("textarea", { value: u.managerComments, onChange: (m) => y && r(u.id, "managerComments", m.target.value), disabled: !y, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${y ? "ef-bg-white ef-border-purple-200 focus:ef-ring-1 focus:ef-ring-purple-400 focus:ef-outline-none" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Add your review..." })] })] }), s === "second_manager" && g.jsxs(g.Fragment, { children: [g.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [g.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Employee Self Rating" }), g.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4", children: [g.jsxs("div", { children: [g.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), g.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-blue-100 ef-border ef-border-blue-200 ef-px-2 ef-py-1 ef-rounded", children: [g.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-blue-700", children: u.selfRating }), g.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), g.jsxs("div", { className: "ef-flex-1", children: [g.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), g.jsx("div", { className: "ef-bg-white ef-border ef-border-blue-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: u.selfComments || g.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), v && g.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-purple-50", children: [g.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Manager Review" }), g.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4", children: [g.jsxs("div", { children: [g.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), g.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-purple-100 ef-border ef-border-purple-200 ef-px-2 ef-py-1 ef-rounded", children: [g.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-purple-700", children: u.managerRating }), g.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), g.jsxs("div", { className: "ef-flex-1", children: [g.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), g.jsx("div", { className: "ef-bg-white ef-border ef-border-purple-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: u.managerComments || g.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), g.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-green-50", children: [g.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [g.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Second Manager Review" }), !h && g.jsx(x, {})] }), g.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), g.jsx(ga, { rating: u.secondManagerRating, onChange: (m) => h && r(u.id, "secondManagerRating", m), disabled: !h }), g.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), g.jsx("textarea", { value: u.secondManagerComment, onChange: (m) => h && r(u.id, "secondManagerComment", m.target.value), disabled: !h, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${h ? "ef-bg-white ef-border-green-200 focus:ef-ring-1 focus:ef-ring-green-400 focus:ef-outline-none" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Add your review..." })] })] })] })] });
      };
      var I0 = ({ competencies: u, appraisalMode: s, selfAppraisalSubmitted: r, updateCompetency: c, employeeCanEdit: y, managerCanEdit: v, showManagerData: h, secondManagerCanEdit: x }) => g.jsx("div", { className: "ef-space-y-6", children: u.map((m) => g.jsx(P0, { comp: m, appraisalMode: s, selfAppraisalSubmitted: r, updateCompetency: c, employeeCanEdit: y, managerCanEdit: v, showManagerData: h, secondManagerCanEdit: x }, m.id)) });
      var ey = ({ question: u, appraisalMode: s, updateQuestion: r, index: c, employeeCanEdit: y, managerCanEdit: v, showManagerData: h, secondManagerCanEdit: x }) => {
        const m = () => g.jsx("div", { className: "ef-flex ef-items-center ef-gap-1 ef-text-gray-400 ef-text-xs", children: g.jsx(Us, { size: 10 }) });
        return g.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-overflow-hidden ef-shadow-sm", children: [g.jsxs("div", { className: "ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b ef-border-gray-200 ef-flex ef-items-center gap-2", children: [g.jsx("span", { className: "ef-flex-shrink-0 ef-w-6 ef-h-6 ef-bg-gray-800 ef-rounded ef-text-white ef-text-xs ef-font-semibold ef-flex ef-items-center ef-justify-center", children: c + 1 }), g.jsx("p", { className: "ef-text-sm ef-font-medium ef-text-gray-900", children: u.question })] }), g.jsxs("div", { className: "ef-divide-y ef-divide-gray-100", children: [s === "self" && g.jsxs("div", { className: "ef-px-3 ef-py-2", children: [g.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-1", children: [g.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Your Answer" }), !y && g.jsx(m, {})] }), g.jsx("textarea", { value: u.selfAnswer, onChange: (d) => y && r(u.id, "selfAnswer", d.target.value), disabled: !y, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${y ? "ef-bg-white ef-border-blue-200 ef-focus:ring-1 ef-focus:ring-blue-400 ef-focus:outline-none" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 3, placeholder: "Enter your answer..." })] }), s === "manager" && g.jsxs(g.Fragment, { children: [g.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [g.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-1", children: "Employee's Answer" }), g.jsx("div", { className: "ef-bg-white ef-p-2 ef-rounded ef-text-xs ef-min-h-[60px] ef-border ef-border-blue-100", children: u.selfAnswer || g.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No answer provided" }) })] }), h && g.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-purple-50", children: [g.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-1", children: [g.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Manager's Comments" }), !v && g.jsx(m, {})] }), g.jsx("textarea", { value: u.managerComments, onChange: (d) => v && r(u.id, "managerComments", d.target.value), disabled: !v, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${v ? "ef-bg-white ef-border-purple-200 ef-focus:ring-1 focus:ring-purple-400 ef-focus:outline-none" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 3, placeholder: "Enter your feedback..." })] })] }), s === "second_manager" && g.jsxs(g.Fragment, { children: [g.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [g.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-1", children: "Employee's Answer" }), g.jsx("div", { className: "ef-bg-white ef-p-2 ef-rounded ef-text-xs ef-min-h-[60px] ef-border ef-border-blue-100", children: u.selfAnswer || g.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No answer provided" }) })] }), h && g.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-purple-50", children: [g.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-1", children: "Manager's Comments" }), g.jsx("div", { className: "ef-bg-white ef-p-2 ef-rounded ef-text-xs ef-min-h-[60px] ef-border ef-border-purple-100", children: u.managerComments || g.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments provided" }) })] }), g.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-green-50", children: [g.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-1", children: [g.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Second Manager's Comments" }), !x && g.jsx(m, {})] }), g.jsx("textarea", { value: u.secondManagerComment, onChange: (d) => x && r(u.id, "secondManagerComment", d.target.value), disabled: !x, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${x ? "ef-bg-white ef-border-green-200 ef-focus:ring-1 ef-focus:ring-green-400 ef-focus:outline-none" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 3, placeholder: "Enter your feedback..." })] })] })] })] });
      };
      var ty = ({ questions: u, appraisalMode: s, selfAppraisalSubmitted: r, updateQuestion: c, employeeCanEdit: y, managerCanEdit: v, showManagerData: h, secondManagerCanEdit: x }) => g.jsx("div", { className: "ef-space-y-6", children: u.map((m, d) => g.jsx(ey, { question: m, index: d, appraisalMode: s, selfAppraisalSubmitted: r, updateQuestion: c, employeeCanEdit: y, managerCanEdit: v, showManagerData: h, secondManagerCanEdit: x }, m.id)) });
      function ny(u, s, r, c = false) {
        const y = u.kra.reduce((E, M) => E + Number(M.weightage || 0), 0) || 1, v = u.competencies.reduce((E, M) => E + Number(M.weightage || 0), 0) || 1, h = (E, M, K) => c ? (E + M + K) / 3 : (E + M) / 2, x = u.kra.map((E) => {
          var re;
          const M = (E.weightage || 0) / y;
          let K = 0;
          if (((re = E.goals) == null ? void 0 : re.length) > 0) {
            const ce = E.goals.reduce((be, ue) => be + Number(ue.weightage || 0), 0) || 1;
            K = E.goals.reduce((be, ue) => {
              const _e = Number(ue.selfRating || 0), Te = (ue.weightage || 0) / ce;
              return be + Te * _e;
            }, 0);
          } else
            K = Number(E.selfRating || 0);
          return M * K;
        }).reduce((E, M) => E + M, 0), m = u.competencies.reduce((E, M) => {
          const K = (M.weightage || 0) / v;
          return E + K * Number(M.selfRating || 0);
        }, 0), d = x * (s / 100) + m * (r / 100), T = u.kra.map((E) => {
          var re;
          const M = (E.weightage || 0) / y;
          let K = 0;
          if (((re = E.goals) == null ? void 0 : re.length) > 0) {
            const ce = E.goals.reduce((be, ue) => be + Number(ue.weightage || 0), 0) || 1;
            K = E.goals.reduce((be, ue) => {
              const _e = h(Number(ue.selfRating || 0), Number(ue.managerRating || 0), Number(ue.secondManagerRating || 0)), Te = (ue.weightage || 0) / ce;
              return be + Te * _e;
            }, 0);
          } else
            K = h(Number(E.selfRating || 0), Number(E.managerRating || 0), Number(E.secondManagerRating || 0));
          return M * K;
        }).reduce((E, M) => E + M, 0), w = u.competencies.reduce((E, M) => {
          const K = (M.weightage || 0) / v, re = h(Number(M.selfRating || 0), Number(M.managerRating || 0), Number(M.secondManagerRating || 0));
          return E + K * re;
        }, 0), G = T * (s / 100) + w * (r / 100);
        return console.log({ kraBlockScore: Number(T.toFixed(2)), competencyScore: Number(w.toFixed(2)), finalScore: Number(G.toFixed(2)), employeeSelfScore: Number(d.toFixed(2)) }), { kraBlockScore: Number(T.toFixed(2)), competencyScore: Number(w.toFixed(2)), finalScore: Number(G.toFixed(2)), employeeSelfScore: Number(d.toFixed(2)) };
      }
      var wp = () => {
        const [u, s] = Pe.useState("kra"), [r, c] = Pe.useState("self"), [y, v] = Pe.useState({}), [h, x] = Pe.useState({ employee: { name: "John Doe", designation: "Senior Developer", department: "Engineering", period: "Jan 2025 - Dec 2025" }, selfAppraisalSubmitted: true, kra: [{ id: 1, title: "Project Delivery", description: "Deliver assigned projects on time", weightage: 30, goals: [{ id: 1, description: "Complete 3 major projects", progress: 2, weightage: 50, tasks: [{ id: 1, task: "Project A Implementation", completed_percentage: 80, employee_description: "Almost done", manager_score: 8, manager_description: "Good progress" }, { id: 2, task: "Project B Testing", completed_percentage: 90, employee_description: "Testing completed" }], selfRating: 8.5, selfComments: "Completed 3 projects successfully", managerRating: 9, managerComments: "Excellent delivery", secondManagerRating: 3.4, secondManagerComment: "Excellent Work" }, { id: 2, description: "Maintain 95% on-time delivery", progress: 2, weightage: 50, selfRating: 7, selfComments: "Achieved 90%", managerRating: 7, managerComments: "Slight delay", secondManagerRating: 3.4, secondManagerComment: "Excellent Work" }] }], competencies: [{ id: 1, name: "Technical Skills", description: "Proficiency in technologies", weightage: 25, selfRating: 8, selfComments: "Strong in React/Node", managerRating: 8, managerComments: "Very competent", secondManagerRating: 3.4, secondManagerComment: "Excellent Work" }], questions: [{ id: 1, question: "What are your key achievements?", selfAnswer: "Led migration project", managerComments: "Excellent ownership", secondManagerComment: "Excellent Work" }] });
        function m(I) {
          if (!I || I.length === 0)
            return 0;
          const X = I.reduce((z, Z) => z + (Z.completed_percentage || 0), 0) / I.length;
          return Number((X / 10).toFixed(1));
        }
        function d(I) {
          var Z, J;
          I.workflow_state == "Self Appraisal" ? c("self") : I.workflow_state == "Manager Appraisal" ? c("manager") : c("second_manager");
          const A = I.kra || [], X = I.kra_vs_goal || [], z = I.goal_vs_task || [];
          return { employee: { name: I.employee_name, designation: I.designation, department: I.department, period: `${I.from_date} - ${I.to_date}` }, selfAppraisalSubmitted: I.self_appraisal_submitted || true, kra: A.map(($, he) => {
            const Fe = X.filter((Se) => Se.kra === $.kra).map((Se, bn) => {
              const Ut = z.filter((Mt) => Mt.goal === Se.goal_name).map((Mt, en) => ({ id: en + 1, task: Mt.task, completed_percentage: Mt.completed_percentage || 0, employee_description: Mt.employee_description, manager_score: Mt.manager_score, manager_description: Mt.manager_description, second_manager_score: Mt.second_manager_score, second_manager_description: Mt.second_manager_description })), ya = Ut.length > 0 ? m(Ut) : Se.employee_rating_number;
              return { id: bn + 1, description: Se.goal_name, progress: Se.progress || "", weightage: Se.weightage, tasks: Ut, selfRating: ya, selfComments: Se.employee_description, managerRating: Se.manager_rating_number, managerComments: Se.management_description, secondManagerRating: Se.second_manager_rating, secondManagerComment: Se.second_manager_description };
            });
            return { id: he + 1, title: $.kra, description: $.description || "", weightage: $.weightage, selfRating: $.employee_rating_number, selfComments: $.employee_description, managerRating: $.manager_rating_number, managerComments: $.management_description, secondManagerRating: $.second_manager_rating, secondManagerComment: $.second_manager_description, goals: Fe };
          }) || [], competencies: ((Z = I.competency) == null ? void 0 : Z.map(($, he) => ({ id: he + 1, name: $.competency, description: $.description || "", weightage: $.weightage, selfRating: $.employee_rating_number, selfComments: $.employee_description, managerRating: $.manager_rating, managerComments: $.manager_description, secondManagerRating: $.second_manager_rating, secondManagerComment: $.second_manager_description }))) || [], questions: ((J = I.answer) == null ? void 0 : J.map(($, he) => ({ id: he + 1, question: $.question, selfAnswer: $.employee_ans_in_discriptive, managerComments: $.manager_comment, secondManagerComment: $.second_manager_description }))) || [] };
        }
        const T = () => {
          if (!se())
            return;
          const I = window.cur_frm;
          if (!(I != null && I.doc))
            return;
          const A = I.doc, X = ny(h, A.kra_percentage, A.competency_percentage, !!A.reports_to_second_user);
          A.final_score = X.finalScore, A.employee_score = X.employeeSelfScore, A.kra.forEach((z, Z) => {
            const J = h.kra.find(($) => $.id === Z + 1);
            J && (ze && (z.employee_rating_number = J.selfRating, z.employee_description = J.selfComments), Je && (z.manager_rating_number = J.managerRating, z.management_description = J.managerComments), Y && (z.second_manager_rating = J.secondManagerRating, z.second_manager_description = J.secondManagerComment), z.weightage = J.weightage);
          }), A.kra_vs_goal.forEach((z) => {
            const Z = h.kra.find(($) => $.title === z.kra);
            if (!Z)
              return;
            const J = Z.goals.find(($) => $.description === z.goal_name);
            J && (ze && (z.employee_rating_number = J.selfRating, z.employee_description = J.selfComments), Je && (z.manager_rating_number = J.managerRating, z.management_description = J.managerComments), Y && (z.second_manager_rating = J.secondManagerRating, z.second_manager_description = J.secondManagerComment), z.progress = J.progress, z.weightage = J.weightage);
          }), A.goal_vs_task.forEach((z) => {
            var $;
            let Z;
            for (const he of h.kra)
              if (Z = he.goals.find((Fe) => Fe.description === z.goal), Z)
                break;
            if (!Z)
              return;
            const J = ($ = Z.tasks) == null ? void 0 : $.find((he) => he.task === z.task);
            J && (ze && (z.completed_percentage = J.completed_percentage, z.employee_description = J.employee_description), Je && (z.manager_score = J.manager_score, z.manager_description = J.manager_description), Y && (z.second_manager_score = J.second_manager_score, z.second_manager_description = J.second_manager_description));
          }), A.competency.forEach((z, Z) => {
            const J = h.competencies.find(($) => $.id === Z + 1);
            J && (ze && (z.employee_rating_number = J.selfRating, z.employee_description = J.selfComments), Je && (z.manager_rating = J.managerRating, z.manager_description = J.managerComments), Y && (z.second_manager_rating = J.secondManagerRating, z.second_manager_description = J.secondManagerComment), z.weightage = J.weightage);
          }), A.answer.forEach((z, Z) => {
            const J = h.questions.find(($) => $.id === Z + 1);
            J && (ze && (z.employee_ans_in_discriptive = J.selfAnswer), Je && (z.manager_comment = J.managerComments), Y && (z.second_manager_description = J.secondManagerComment));
          }), A.__unsaved = 1, I.dirty(), I.save().catch((z) => console.error(z));
        }, w = (I) => {
          v((A) => St(Be({}, A), { [I]: !A[I] }));
        }, G = (I, A, X, z) => {
          x((Z) => St(Be({}, Z), { kra: Z.kra.map((J) => J.id === I ? St(Be({}, J), { goals: J.goals.map(($) => $.id === A ? St(Be({}, $), { [X]: z }) : $) }) : J) }));
        }, E = (I, A, X, z, Z) => {
          x((J) => St(Be({}, J), { kra: J.kra.map(($) => $.id === I ? St(Be({}, $), { goals: $.goals.map((he) => {
            var Fe;
            if (he.id === A) {
              const Se = ((Fe = he.tasks) == null ? void 0 : Fe.map((Ut) => Ut.id === X ? St(Be({}, Ut), { [z]: Z }) : Ut)) || [], bn = z === "completed_percentage" && Se.length > 0 ? m(Se) : he.selfRating;
              return St(Be({}, he), { tasks: Se, selfRating: bn });
            }
            return he;
          }) }) : $) }));
        }, M = (I, A, X) => {
          x((z) => St(Be({}, z), { kra: z.kra.map((Z) => Z.id === I ? St(Be({}, Z), { [A]: X }) : Z) }));
        }, K = (I, A, X) => {
          x((z) => St(Be({}, z), { competencies: z.competencies.map((Z) => Z.id === I ? St(Be({}, Z), { [A]: X }) : Z) }));
        }, re = (I, A, X) => {
          x((z) => St(Be({}, z), { questions: z.questions.map((Z) => Z.id === I ? St(Be({}, Z), { [A]: X }) : Z) }));
        }, ce = window.cur_frm;
        if (!(ce != null && ce.doc))
          return "Loading...";
        Pe.useEffect(() => {
          x(d(ce.doc));
        }, [ce == null ? void 0 : ce.doc]);
        const be = frappe.session.user, ue = ce.doc.employee_user_id, _e = ce.doc.reports_to_user_id, Te = ce.doc.reports_to_second_user, De = ce.doc.workflow_state, me = be === ue, Ie = be === _e, pt = be === Te, gt = (frappe.user_roles || []).includes("HR Manager") || be === "Administrator", ze = me && De === "Self Appraisal" && !gt, Je = Ie && De === "Manager Appraisal", Y = pt && De === "Second Manager Review", P = Ie || pt || gt, se = () => {
          var X;
          const I = (X = window == null ? void 0 : window.cur_frm) == null ? void 0 : X.doc, A = [];
          return ze && (I.kra_rating_mandatory && h.kra.forEach((z) => {
            !z.goals.length && !z.selfRating && A.push(`Self Rating missing in KRA: ${z.title}`), z.goals.forEach((Z) => {
              Z.selfRating || A.push(`Self Rating missing in Goal: ${Z.description}`);
            });
          }), I.kra_comment_mandatory && h.kra.forEach((z) => {
            !z.goals.length && !z.selfComments && A.push(`Self Comment missing in KRA: ${z.title}`), z.goals.forEach((Z) => {
              Z.selfComments || A.push(`Self Comment missing in Goal: ${Z.description}`);
            });
          }), I.competency_rating_mandatory && h.competencies.forEach((z) => {
            z.selfRating || A.push(`Self Rating missing in Competency: ${z.name}`);
          }), I.competency_comment_mandatory && h.competencies.forEach((z) => {
            z.selfComments || A.push(`Self Comment missing in Competency: ${z.name}`);
          }), I.question_answer_mandatory && h.questions.forEach((z) => {
            z.selfAnswer || A.push(`Answer missing for Question: ${z.question}`);
          })), Je && (I.manager_kra_rating_mandatory && h.kra.forEach((z) => {
            !z.goals.length && !z.managerRating && A.push(`Manager Rating missing in KRA: ${z.title}`), z.goals.forEach((Z) => {
              Z.managerRating || A.push(`Manager Rating missing in Goal: ${Z.description}`);
            });
          }), I.manager_kra_comment_mandatory && h.kra.forEach((z) => {
            !z.goals.length && !z.managerComments && A.push(`Manager Comment missing in KRA: ${z.title}`), z.goals.forEach((Z) => {
              Z.managerComments || A.push(`Manager Comment missing in Goal: ${Z.description}`);
            });
          }), I.manager_competency_rating_mandatory && h.competencies.forEach((z) => {
            z.managerRating || A.push(`Manager Rating missing in Competency: ${z.name}`);
          }), I.manager_competency_comment_mandatory && h.competencies.forEach((z) => {
            z.managerComments || A.push(`Manager Comment missing in Competency: ${z.name}`);
          }), I.manager_question_report_mandatory && h.questions.forEach((z) => {
            z.managerComments || A.push(`Manager Comment missing for Question: ${z.question}`);
          })), A.length > 0 ? (frappe.msgprint({ title: "Mandatory Fields Missing", indicator: "red", message: `<ul>${A.map((z) => `<li>${z}</li>`).join("")}</ul>` }), false) : true;
        }, Re = ze || Je || Y;
        return g.jsx("div", { className: "ef-min-h-screen ef-bg-gray-50 ef-p-6", children: g.jsx("div", { className: "ef-max-w-7xl ef-mx-auto", children: g.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-shadow-sm", children: [g.jsx("div", { className: "ef-border-b", children: g.jsxs("div", { className: "ef-flex", children: [g.jsx("button", { onClick: () => s("kra"), className: `ef-px-6 ef-py-4 ef-font-semibold ${u === "kra" ? "ef-border-b-2 ef-border-blue-600 ef-text-blue-600" : "ef-text-gray-600"}`, children: "KRA vs Goals" }), g.jsx("button", { onClick: () => s("competency"), className: `ef-px-6 ef-py-4 ef-font-semibold ${u === "competency" ? "ef-border-b-2 ef-border-blue-600 ef-text-blue-600" : "ef-text-gray-600"}`, children: "Competencies" }), g.jsx("button", { onClick: () => s("questions"), className: `ef-px-6 ef-py-4 ef-font-semibold ${u === "questions" ? "ef-border-b-2 ef-border-blue-600 ef-text-blue-600" : "ef-text-gray-600"}`, children: "Questions" })] }) }), g.jsxs("div", { className: "ef-p-6", children: [u === "kra" && g.jsx($0, { kraList: h.kra, expandedKRA: y, toggleKRA: w, appraisalMode: r, updateGoalRating: G, updateKRARating: M, updateTaskData: E, secondManagerCanEdit: Y, employeeCanEdit: ze, managerCanEdit: Je, showManagerData: P }), u === "competency" && g.jsx(I0, { competencies: h.competencies, appraisalMode: r, selfAppraisalSubmitted: h.selfAppraisalSubmitted, updateCompetency: K, secondManagerCanEdit: Y, employeeCanEdit: ze, managerCanEdit: Je, showManagerData: P }), u === "questions" && g.jsx(ty, { questions: h.questions, appraisalMode: r, selfAppraisalSubmitted: h.selfAppraisalSubmitted, updateQuestion: re, secondManagerCanEdit: Y, employeeCanEdit: ze, managerCanEdit: Je, showManagerData: P })] }), Re && g.jsx("div", { className: "ef-flex ef-justify-end ef-px-6 ef-pb-6", children: g.jsx("button", { onClick: T, className: "ef-bg-blue-600 ef-text-white ef-px-6 ef-py-2 ef-rounded-lg ef-font-semibold hover:ef-bg-blue-700 ef-transition", children: "Save Appraisal" }) })] }) }) });
      };
      wp.component = "appraisal-rating";
      var Zm = Object.freeze(Object.defineProperty({ __proto__: null, AppraisalRating: wp, DemoComponent: uf }, Symbol.toStringTag, { value: "Module" }));
      var ay = Object.defineProperty;
      var ly = (u, s, r) => s in u ? ay(u, s, { enumerable: true, configurable: true, writable: true, value: r }) : u[s] = r;
      var or = (u, s, r) => ly(u, typeof s != "symbol" ? s + "" : s, r);
      var iy = { stringify: (u) => u ? "true" : "false", parse: (u) => /^[ty1-9]/i.test(u) };
      var sy = { stringify: (u) => u.name, parse: (u, s, r) => {
        const c = (() => {
          if (typeof window < "u" && u in window)
            return window[u];
          if (typeof global < "u" && u in global)
            return global[u];
        })();
        return typeof c == "function" ? c.bind(r) : void 0;
      } };
      var uy = { stringify: (u) => JSON.stringify(u), parse: (u) => JSON.parse(u) };
      function ry(u) {
        return u.replace(/([a-z0-9])([A-Z])/g, (s, r, c) => `${r}-${c.toLowerCase()}`);
      }
      function jp(u) {
        return u.replace(/[-:]([a-z])/g, (s, r) => `${r.toUpperCase()}`);
      }
      var cy = { stringify: (u) => u.name, parse: (u, s, r) => {
        const c = (() => {
          const y = jp(s);
          if (typeof r < "u" && y in r.container)
            return r.container[y];
        })();
        return typeof c == "function" ? c.bind(r) : void 0;
      } };
      var oy = { stringify: (u) => `${u}`, parse: (u) => parseFloat(u) };
      var fy = { stringify: (u) => u, parse: (u) => u };
      var Do = { string: fy, number: oy, boolean: iy, function: sy, method: cy, json: uy };
      var ws = Symbol.for("r2wc.render");
      var fr = Symbol.for("r2wc.connected");
      var Nl = Symbol.for("r2wc.context");
      var Pt = Symbol.for("r2wc.props");
      function dy(u, s, r) {
        var c, y, v;
        s.props || (s.props = u.propTypes ? Object.keys(u.propTypes) : []), s.events || (s.events = []);
        const h = Array.isArray(s.props) ? s.props.slice() : Object.keys(s.props), x = Array.isArray(s.events) ? s.events.slice() : Object.keys(s.events), m = {}, d = {}, T = {}, w = {};
        for (const E of h) {
          m[E] = Array.isArray(s.props) ? "string" : s.props[E];
          const M = ry(E);
          T[E] = M, w[M] = E;
        }
        for (const E of x)
          d[E] = Array.isArray(s.events) ? {} : s.events[E];
        class G extends HTMLElement {
          constructor() {
            super(), or(this, v, true), or(this, y), or(this, c, {}), or(this, "container"), s.shadow ? this.container = this.attachShadow({ mode: s.shadow }) : this.container = this, this[Pt].container = this.container;
            for (const M of h) {
              const K = T[M], re = this.getAttribute(K), ce = m[M], be = ce ? Do[ce] : null;
              if (ce === "method") {
                const ue = jp(K);
                Object.defineProperty(this[Pt].container, ue, { enumerable: true, configurable: true, get() {
                  return this[Pt][ue];
                }, set(_e) {
                  this[Pt][ue] = _e, this[ws]();
                } }), this[Pt][M] = be.parse(re, K, this);
              }
              be != null && be.parse && re && (this[Pt][M] = be.parse(re, K, this));
            }
            for (const M of x)
              this[Pt][M] = (K) => {
                const re = M.replace(/^on/, "").toLowerCase();
                this.dispatchEvent(new CustomEvent(re, Be({ detail: K }, d[M])));
              };
          }
          static get observedAttributes() {
            return Object.keys(w);
          }
          connectedCallback() {
            this[fr] = true, this[ws]();
          }
          disconnectedCallback() {
            this[fr] = false, this[Nl] && r.unmount(this[Nl]), delete this[Nl];
          }
          attributeChangedCallback(M, K, re) {
            const ce = w[M], be = m[ce], ue = be ? Do[be] : null;
            ce in m && ue != null && ue.parse && re && (this[Pt][ce] = ue.parse(re, M, this), this[ws]());
          }
          [(v = fr, y = Nl, c = Pt, ws)]() {
            this[fr] && (this[Nl] ? r.update(this[Nl], this[Pt]) : this[Nl] = r.mount(this.container, u, this[Pt]));
          }
        }
        for (const E of h) {
          const M = T[E], K = m[E];
          Object.defineProperty(G.prototype, E, { enumerable: true, configurable: true, get() {
            return this[Pt][E];
          }, set(re) {
            this[Pt][E] = re;
            const ce = K ? Do[K] : null;
            if (ce != null && ce.stringify) {
              const be = ce.stringify(re, M, this);
              this.getAttribute(M) !== be && this.setAttribute(M, be);
            } else
              this[ws]();
          } });
        }
        return G;
      }
      function hy(u, s, r, c = {}) {
        function y(x, m, d) {
          const T = s.createElement(m, d);
          if ("createRoot" in r) {
            const w = r.createRoot(x);
            return w.render(T), { container: x, root: w, ReactComponent: m };
          }
          if ("render" in r)
            return r.render(T, x), { container: x, ReactComponent: m };
          throw new Error("Invalid ReactDOM instance provided.");
        }
        function v({ container: x, root: m, ReactComponent: d }, T) {
          const w = s.createElement(d, T);
          if (m) {
            m.render(w);
            return;
          }
          if ("render" in r) {
            r.render(w, x);
            return;
          }
        }
        function h({ container: x, root: m }) {
          if (m) {
            m.unmount();
            return;
          }
          if ("unmountComponentAtNode" in r) {
            r.unmountComponentAtNode(x);
            return;
          }
        }
        return dy(u, c, { mount: y, unmount: h, update: v });
      }
      var Bo = { exports: {} };
      var js = {};
      var qo = { exports: {} };
      var Ho = {};
      var Km;
      function my() {
        return Km || (Km = 1, function(u) {
          function s(Y, P) {
            var se = Y.length;
            Y.push(P);
            e:
              for (; 0 < se; ) {
                var Re = se - 1 >>> 1, I = Y[Re];
                if (0 < y(I, P))
                  Y[Re] = P, Y[se] = I, se = Re;
                else
                  break e;
              }
          }
          function r(Y) {
            return Y.length === 0 ? null : Y[0];
          }
          function c(Y) {
            if (Y.length === 0)
              return null;
            var P = Y[0], se = Y.pop();
            if (se !== P) {
              Y[0] = se;
              e:
                for (var Re = 0, I = Y.length, A = I >>> 1; Re < A; ) {
                  var X = 2 * (Re + 1) - 1, z = Y[X], Z = X + 1, J = Y[Z];
                  if (0 > y(z, se))
                    Z < I && 0 > y(J, z) ? (Y[Re] = J, Y[Z] = se, Re = Z) : (Y[Re] = z, Y[X] = se, Re = X);
                  else if (Z < I && 0 > y(J, se))
                    Y[Re] = J, Y[Z] = se, Re = Z;
                  else
                    break e;
                }
            }
            return P;
          }
          function y(Y, P) {
            var se = Y.sortIndex - P.sortIndex;
            return se !== 0 ? se : Y.id - P.id;
          }
          if (u.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
            var v = performance;
            u.unstable_now = function() {
              return v.now();
            };
          } else {
            var h = Date, x = h.now();
            u.unstable_now = function() {
              return h.now() - x;
            };
          }
          var m = [], d = [], T = 1, w = null, G = 3, E = false, M = false, K = false, re = false, ce = typeof setTimeout == "function" ? setTimeout : null, be = typeof clearTimeout == "function" ? clearTimeout : null, ue = typeof setImmediate != "undefined" ? setImmediate : null;
          function _e(Y) {
            for (var P = r(d); P !== null; ) {
              if (P.callback === null)
                c(d);
              else if (P.startTime <= Y)
                c(d), P.sortIndex = P.expirationTime, s(m, P);
              else
                break;
              P = r(d);
            }
          }
          function Te(Y) {
            if (K = false, _e(Y), !M)
              if (r(m) !== null)
                M = true, De || (De = true, it());
              else {
                var P = r(d);
                P !== null && Je(Te, P.startTime - Y);
              }
          }
          var De = false, me = -1, Ie = 5, pt = -1;
          function It() {
            return re ? true : !(u.unstable_now() - pt < Ie);
          }
          function Et() {
            if (re = false, De) {
              var Y = u.unstable_now();
              pt = Y;
              var P = true;
              try {
                e: {
                  M = false, K && (K = false, be(me), me = -1), E = true;
                  var se = G;
                  try {
                    t: {
                      for (_e(Y), w = r(m); w !== null && !(w.expirationTime > Y && It()); ) {
                        var Re = w.callback;
                        if (typeof Re == "function") {
                          w.callback = null, G = w.priorityLevel;
                          var I = Re(w.expirationTime <= Y);
                          if (Y = u.unstable_now(), typeof I == "function") {
                            w.callback = I, _e(Y), P = true;
                            break t;
                          }
                          w === r(m) && c(m), _e(Y);
                        } else
                          c(m);
                        w = r(m);
                      }
                      if (w !== null)
                        P = true;
                      else {
                        var A = r(d);
                        A !== null && Je(Te, A.startTime - Y), P = false;
                      }
                    }
                    break e;
                  } finally {
                    w = null, G = se, E = false;
                  }
                  P = void 0;
                }
              } finally {
                P ? it() : De = false;
              }
            }
          }
          var it;
          if (typeof ue == "function")
            it = function() {
              ue(Et);
            };
          else if (typeof MessageChannel != "undefined") {
            var gt = new MessageChannel(), ze = gt.port2;
            gt.port1.onmessage = Et, it = function() {
              ze.postMessage(null);
            };
          } else
            it = function() {
              ce(Et, 0);
            };
          function Je(Y, P) {
            me = ce(function() {
              Y(u.unstable_now());
            }, P);
          }
          u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(Y) {
            Y.callback = null;
          }, u.unstable_forceFrameRate = function(Y) {
            0 > Y || 125 < Y ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ie = 0 < Y ? Math.floor(1e3 / Y) : 5;
          }, u.unstable_getCurrentPriorityLevel = function() {
            return G;
          }, u.unstable_next = function(Y) {
            switch (G) {
              case 1:
              case 2:
              case 3:
                var P = 3;
                break;
              default:
                P = G;
            }
            var se = G;
            G = P;
            try {
              return Y();
            } finally {
              G = se;
            }
          }, u.unstable_requestPaint = function() {
            re = true;
          }, u.unstable_runWithPriority = function(Y, P) {
            switch (Y) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                Y = 3;
            }
            var se = G;
            G = Y;
            try {
              return P();
            } finally {
              G = se;
            }
          }, u.unstable_scheduleCallback = function(Y, P, se) {
            var Re = u.unstable_now();
            switch (typeof se == "object" && se !== null ? (se = se.delay, se = typeof se == "number" && 0 < se ? Re + se : Re) : se = Re, Y) {
              case 1:
                var I = -1;
                break;
              case 2:
                I = 250;
                break;
              case 5:
                I = 1073741823;
                break;
              case 4:
                I = 1e4;
                break;
              default:
                I = 5e3;
            }
            return I = se + I, Y = { id: T++, callback: P, priorityLevel: Y, startTime: se, expirationTime: I, sortIndex: -1 }, se > Re ? (Y.sortIndex = se, s(d, Y), r(m) === null && Y === r(d) && (K ? (be(me), me = -1) : K = true, Je(Te, se - Re))) : (Y.sortIndex = I, s(m, Y), M || E || (M = true, De || (De = true, it()))), Y;
          }, u.unstable_shouldYield = It, u.unstable_wrapCallback = function(Y) {
            var P = G;
            return function() {
              var se = G;
              G = P;
              try {
                return Y.apply(this, arguments);
              } finally {
                G = se;
              }
            };
          };
        }(Ho)), Ho;
      }
      var Jm;
      function py() {
        return Jm || (Jm = 1, qo.exports = my()), qo.exports;
      }
      var Lo = { exports: {} };
      var jt = {};
      var Fm;
      function gy() {
        if (Fm)
          return jt;
        Fm = 1;
        var u = sf();
        function s(m) {
          var d = "https://react.dev/errors/" + m;
          if (1 < arguments.length) {
            d += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var T = 2; T < arguments.length; T++)
              d += "&args[]=" + encodeURIComponent(arguments[T]);
          }
          return "Minified React error #" + m + "; visit " + d + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        function r() {
        }
        var c = { d: { f: r, r: function() {
          throw Error(s(522));
        }, D: r, C: r, L: r, m: r, X: r, S: r, M: r }, p: 0, findDOMNode: null }, y = Symbol.for("react.portal");
        function v(m, d, T) {
          var w = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
          return { $$typeof: y, key: w == null ? null : "" + w, children: m, containerInfo: d, implementation: T };
        }
        var h = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function x(m, d) {
          if (m === "font")
            return "";
          if (typeof d == "string")
            return d === "use-credentials" ? d : "";
        }
        return jt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, jt.createPortal = function(m, d) {
          var T = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
          if (!d || d.nodeType !== 1 && d.nodeType !== 9 && d.nodeType !== 11)
            throw Error(s(299));
          return v(m, d, null, T);
        }, jt.flushSync = function(m) {
          var d = h.T, T = c.p;
          try {
            if (h.T = null, c.p = 2, m)
              return m();
          } finally {
            h.T = d, c.p = T, c.d.f();
          }
        }, jt.preconnect = function(m, d) {
          typeof m == "string" && (d ? (d = d.crossOrigin, d = typeof d == "string" ? d === "use-credentials" ? d : "" : void 0) : d = null, c.d.C(m, d));
        }, jt.prefetchDNS = function(m) {
          typeof m == "string" && c.d.D(m);
        }, jt.preinit = function(m, d) {
          if (typeof m == "string" && d && typeof d.as == "string") {
            var T = d.as, w = x(T, d.crossOrigin), G = typeof d.integrity == "string" ? d.integrity : void 0, E = typeof d.fetchPriority == "string" ? d.fetchPriority : void 0;
            T === "style" ? c.d.S(m, typeof d.precedence == "string" ? d.precedence : void 0, { crossOrigin: w, integrity: G, fetchPriority: E }) : T === "script" && c.d.X(m, { crossOrigin: w, integrity: G, fetchPriority: E, nonce: typeof d.nonce == "string" ? d.nonce : void 0 });
          }
        }, jt.preinitModule = function(m, d) {
          if (typeof m == "string")
            if (typeof d == "object" && d !== null) {
              if (d.as == null || d.as === "script") {
                var T = x(d.as, d.crossOrigin);
                c.d.M(m, { crossOrigin: T, integrity: typeof d.integrity == "string" ? d.integrity : void 0, nonce: typeof d.nonce == "string" ? d.nonce : void 0 });
              }
            } else
              d == null && c.d.M(m);
        }, jt.preload = function(m, d) {
          if (typeof m == "string" && typeof d == "object" && d !== null && typeof d.as == "string") {
            var T = d.as, w = x(T, d.crossOrigin);
            c.d.L(m, T, { crossOrigin: w, integrity: typeof d.integrity == "string" ? d.integrity : void 0, nonce: typeof d.nonce == "string" ? d.nonce : void 0, type: typeof d.type == "string" ? d.type : void 0, fetchPriority: typeof d.fetchPriority == "string" ? d.fetchPriority : void 0, referrerPolicy: typeof d.referrerPolicy == "string" ? d.referrerPolicy : void 0, imageSrcSet: typeof d.imageSrcSet == "string" ? d.imageSrcSet : void 0, imageSizes: typeof d.imageSizes == "string" ? d.imageSizes : void 0, media: typeof d.media == "string" ? d.media : void 0 });
          }
        }, jt.preloadModule = function(m, d) {
          if (typeof m == "string")
            if (d) {
              var T = x(d.as, d.crossOrigin);
              c.d.m(m, { as: typeof d.as == "string" && d.as !== "script" ? d.as : void 0, crossOrigin: T, integrity: typeof d.integrity == "string" ? d.integrity : void 0 });
            } else
              c.d.m(m);
        }, jt.requestFormReset = function(m) {
          c.d.r(m);
        }, jt.unstable_batchedUpdates = function(m, d) {
          return m(d);
        }, jt.useFormState = function(m, d, T) {
          return h.H.useFormState(m, d, T);
        }, jt.useFormStatus = function() {
          return h.H.useHostTransitionStatus();
        }, jt.version = "19.2.0", jt;
      }
      var Wm;
      function yy() {
        if (Wm)
          return Lo.exports;
        Wm = 1;
        function u() {
          if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
            } catch (s) {
              console.error(s);
            }
        }
        return u(), Lo.exports = gy(), Lo.exports;
      }
      var $m;
      function by() {
        if ($m)
          return js;
        $m = 1;
        var u = py(), s = sf(), r = yy();
        function c(e) {
          var t = "https://react.dev/errors/" + e;
          if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
              t += "&args[]=" + encodeURIComponent(arguments[n]);
          }
          return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        function y(e) {
          return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
        }
        function v(e) {
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
        function h(e) {
          if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
              return t.dehydrated;
          }
          return null;
        }
        function x(e) {
          if (e.tag === 31) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
              return t.dehydrated;
          }
          return null;
        }
        function m(e) {
          if (v(e) !== e)
            throw Error(c(188));
        }
        function d(e) {
          var t = e.alternate;
          if (!t) {
            if (t = v(e), t === null)
              throw Error(c(188));
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
              throw Error(c(188));
            }
            if (n.return !== a.return)
              n = l, a = i;
            else {
              for (var o = false, b = l.child; b; ) {
                if (b === n) {
                  o = true, n = l, a = i;
                  break;
                }
                if (b === a) {
                  o = true, a = l, n = i;
                  break;
                }
                b = b.sibling;
              }
              if (!o) {
                for (b = i.child; b; ) {
                  if (b === n) {
                    o = true, n = i, a = l;
                    break;
                  }
                  if (b === a) {
                    o = true, a = i, n = l;
                    break;
                  }
                  b = b.sibling;
                }
                if (!o)
                  throw Error(c(189));
              }
            }
            if (n.alternate !== a)
              throw Error(c(190));
          }
          if (n.tag !== 3)
            throw Error(c(188));
          return n.stateNode.current === n ? e : t;
        }
        function T(e) {
          var t = e.tag;
          if (t === 5 || t === 26 || t === 27 || t === 6)
            return e;
          for (e = e.child; e !== null; ) {
            if (t = T(e), t !== null)
              return t;
            e = e.sibling;
          }
          return null;
        }
        var w = Object.assign, G = Symbol.for("react.element"), E = Symbol.for("react.transitional.element"), M = Symbol.for("react.portal"), K = Symbol.for("react.fragment"), re = Symbol.for("react.strict_mode"), ce = Symbol.for("react.profiler"), be = Symbol.for("react.consumer"), ue = Symbol.for("react.context"), _e = Symbol.for("react.forward_ref"), Te = Symbol.for("react.suspense"), De = Symbol.for("react.suspense_list"), me = Symbol.for("react.memo"), Ie = Symbol.for("react.lazy"), pt = Symbol.for("react.activity"), It = Symbol.for("react.memo_cache_sentinel"), Et = Symbol.iterator;
        function it(e) {
          return e === null || typeof e != "object" ? null : (e = Et && e[Et] || e["@@iterator"], typeof e == "function" ? e : null);
        }
        var gt = Symbol.for("react.client.reference");
        function ze(e) {
          if (e == null)
            return null;
          if (typeof e == "function")
            return e.$$typeof === gt ? null : e.displayName || e.name || null;
          if (typeof e == "string")
            return e;
          switch (e) {
            case K:
              return "Fragment";
            case ce:
              return "Profiler";
            case re:
              return "StrictMode";
            case Te:
              return "Suspense";
            case De:
              return "SuspenseList";
            case pt:
              return "Activity";
          }
          if (typeof e == "object")
            switch (e.$$typeof) {
              case M:
                return "Portal";
              case ue:
                return e.displayName || "Context";
              case be:
                return (e._context.displayName || "Context") + ".Consumer";
              case _e:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
              case me:
                return t = e.displayName || null, t !== null ? t : ze(e.type) || "Memo";
              case Ie:
                t = e._payload, e = e._init;
                try {
                  return ze(e(t));
                } catch (n) {
                }
            }
          return null;
        }
        var Je = Array.isArray, Y = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, se = { pending: false, data: null, method: null, action: null }, Re = [], I = -1;
        function A(e) {
          return { current: e };
        }
        function X(e) {
          0 > I || (e.current = Re[I], Re[I] = null, I--);
        }
        function z(e, t) {
          I++, Re[I] = e.current, e.current = t;
        }
        var Z = A(null), J = A(null), $ = A(null), he = A(null);
        function Fe(e, t) {
          switch (z($, t), z(J, e), z(Z, null), t.nodeType) {
            case 9:
            case 11:
              e = (e = t.documentElement) && (e = e.namespaceURI) ? sm(e) : 0;
              break;
            default:
              if (e = t.tagName, t = t.namespaceURI)
                t = sm(t), e = um(t, e);
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
          X(Z), z(Z, e);
        }
        function Se() {
          X(Z), X(J), X($);
        }
        function bn(e) {
          e.memoizedState !== null && z(he, e);
          var t = Z.current, n = um(t, e.type);
          t !== n && (z(J, e), z(Z, n));
        }
        function Ut(e) {
          J.current === e && (X(Z), X(J)), he.current === e && (X(he), _s._currentValue = se);
        }
        var ya, Mt;
        function en(e) {
          if (ya === void 0)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              ya = t && t[1] || "", Mt = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
            }
          return `
` + ya + e + Mt;
        }
        var Ai = false;
        function Ni(e, t) {
          if (!e || Ai)
            return "";
          Ai = true;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            var a = { DetermineComponentFrameRoot: function() {
              try {
                if (t) {
                  var k = function() {
                    throw Error();
                  };
                  if (Object.defineProperty(k.prototype, "props", { set: function() {
                    throw Error();
                  } }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                      Reflect.construct(k, []);
                    } catch (L) {
                      var q = L;
                    }
                    Reflect.construct(e, [], k);
                  } else {
                    try {
                      k.call();
                    } catch (L) {
                      q = L;
                    }
                    e.call(k.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (L) {
                    q = L;
                  }
                  (k = e()) && typeof k.catch == "function" && k.catch(function() {
                  });
                }
              } catch (L) {
                if (L && q && typeof L.stack == "string")
                  return [L.stack, q.stack];
              }
              return [null, null];
            } };
            a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var l = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
            l && l.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
            var i = a.DetermineComponentFrameRoot(), o = i[0], b = i[1];
            if (o && b) {
              var N = o.split(`
`), B = b.split(`
`);
              for (l = a = 0; a < N.length && !N[a].includes("DetermineComponentFrameRoot"); )
                a++;
              for (; l < B.length && !B[l].includes("DetermineComponentFrameRoot"); )
                l++;
              if (a === N.length || l === B.length)
                for (a = N.length - 1, l = B.length - 1; 1 <= a && 0 <= l && N[a] !== B[l]; )
                  l--;
              for (; 1 <= a && 0 <= l; a--, l--)
                if (N[a] !== B[l]) {
                  if (a !== 1 || l !== 1)
                    do
                      if (a--, l--, 0 > l || N[a] !== B[l]) {
                        var Q = `
` + N[a].replace(" at new ", " at ");
                        return e.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", e.displayName)), Q;
                      }
                    while (1 <= a && 0 <= l);
                  break;
                }
            }
          } finally {
            Ai = false, Error.prepareStackTrace = n;
          }
          return (n = e ? e.displayName || e.name : "") ? en(n) : "";
        }
        function Ar(e, t) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              return en(e.type);
            case 16:
              return en("Lazy");
            case 13:
              return e.child !== t && t !== null ? en("Suspense Fallback") : en("Suspense");
            case 19:
              return en("SuspenseList");
            case 0:
            case 15:
              return Ni(e.type, false);
            case 11:
              return Ni(e.type.render, false);
            case 1:
              return Ni(e.type, true);
            case 31:
              return en("Activity");
            default:
              return "";
          }
        }
        function Ms(e) {
          try {
            var t = "", n = null;
            do
              t += Ar(e, n), n = e, e = e.return;
            while (e);
            return t;
          } catch (a) {
            return `
Error generating stack: ` + a.message + `
` + a.stack;
          }
        }
        var Ei = Object.prototype.hasOwnProperty, wi = u.unstable_scheduleCallback, ji = u.unstable_cancelCallback, Nr = u.unstable_shouldYield, Ds = u.unstable_requestPaint, Ot = u.unstable_now, H = u.unstable_getCurrentPriorityLevel, pe = u.unstable_ImmediatePriority, Oi = u.unstable_UserBlockingPriority, Wa = u.unstable_NormalPriority, Er = u.unstable_LowPriority, jl = u.unstable_IdlePriority, Bs = u.log, qs = u.unstable_setDisableYieldValue, $a = null, Rt = null;
        function Qt(e) {
          if (typeof Bs == "function" && qs(e), Rt && typeof Rt.setStrictMode == "function")
            try {
              Rt.setStrictMode($a, e);
            } catch (t) {
            }
        }
        var wt = Math.clz32 ? Math.clz32 : wr, Ri = Math.log, Hs = Math.LN2;
        function wr(e) {
          return e >>>= 0, e === 0 ? 32 : 31 - (Ri(e) / Hs | 0) | 0;
        }
        var Pa = 256, Ol = 262144, Ia = 4194304;
        function Rn(e) {
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
          var l = 0, i = e.suspendedLanes, o = e.pingedLanes;
          e = e.warmLanes;
          var b = a & 134217727;
          return b !== 0 ? (a = b & ~i, a !== 0 ? l = Rn(a) : (o &= b, o !== 0 ? l = Rn(o) : n || (n = b & ~e, n !== 0 && (l = Rn(n))))) : (b = a & ~i, b !== 0 ? l = Rn(b) : o !== 0 ? l = Rn(o) : n || (n = a & ~e, n !== 0 && (l = Rn(n)))), l === 0 ? 0 : t !== 0 && t !== l && (t & i) === 0 && (i = l & -l, n = t & -t, i >= n || i === 32 && (n & 4194048) !== 0) ? t : l;
        }
        function el(e, t) {
          return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
        }
        function jr(e, t) {
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
        function Ls() {
          var e = Ia;
          return Ia <<= 1, (Ia & 62914560) === 0 && (Ia = 4194304), e;
        }
        function tl(e) {
          for (var t = [], n = 0; 31 > n; n++)
            t.push(e);
          return t;
        }
        function Vn(e, t) {
          e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
        }
        function Or(e, t, n, a, l, i) {
          var o = e.pendingLanes;
          e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
          var b = e.entanglements, N = e.expirationTimes, B = e.hiddenUpdates;
          for (n = o & ~n; 0 < n; ) {
            var Q = 31 - wt(n), k = 1 << Q;
            b[Q] = 0, N[Q] = -1;
            var q = B[Q];
            if (q !== null)
              for (B[Q] = null, Q = 0; Q < q.length; Q++) {
                var L = q[Q];
                L !== null && (L.lane &= -536870913);
              }
            n &= ~k;
          }
          a !== 0 && Ys(e, a, 0), i !== 0 && l === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(o & ~t));
        }
        function Ys(e, t, n) {
          e.pendingLanes |= t, e.suspendedLanes &= ~t;
          var a = 31 - wt(t);
          e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | n & 261930;
        }
        function Gs(e, t) {
          var n = e.entangledLanes |= t;
          for (e = e.entanglements; n; ) {
            var a = 31 - wt(n), l = 1 << a;
            l & t | e[a] & t && (e[a] |= t), n &= ~l;
          }
        }
        function Xs(e, t) {
          var n = t & -t;
          return n = (n & 42) !== 0 ? 1 : st(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
        }
        function st(e) {
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
        function Qs() {
          var e = P.p;
          return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Rm(e.type));
        }
        function Vs(e, t) {
          var n = P.p;
          try {
            return P.p = e, t();
          } finally {
            P.p = n;
          }
        }
        var vn = Math.random().toString(36).slice(2), dt = "__reactFiber$" + vn, yt = "__reactProps$" + vn, zn = "__reactContainer$" + vn, Ci = "__reactEvents$" + vn, Rr = "__reactListeners$" + vn, ks = "__reactHandles$" + vn, ba = "__reactResources$" + vn, Cn = "__reactMarker$" + vn;
        function Ui(e) {
          delete e[dt], delete e[yt], delete e[Ci], delete e[Rr], delete e[ks];
        }
        function va(e) {
          var t = e[dt];
          if (t)
            return t;
          for (var n = e.parentNode; n; ) {
            if (t = n[zn] || n[dt]) {
              if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = mm(e); e !== null; ) {
                  if (n = e[dt])
                    return n;
                  e = mm(e);
                }
              return t;
            }
            e = n, n = e.parentNode;
          }
          return null;
        }
        function Un(e) {
          if (e = e[dt] || e[zn]) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
              return e;
          }
          return null;
        }
        function nl(e) {
          var t = e.tag;
          if (t === 5 || t === 26 || t === 27 || t === 6)
            return e.stateNode;
          throw Error(c(33));
        }
        function xa(e) {
          var t = e[ba];
          return t || (t = e[ba] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
        }
        function $e(e) {
          e[Cn] = true;
        }
        var Dt = /* @__PURE__ */ new Set(), zl = {};
        function Mn(e, t) {
          Vt(e, t), Vt(e + "Capture", t);
        }
        function Vt(e, t) {
          for (zl[e] = t, e = 0; e < t.length; e++)
            Dt.add(t[e]);
        }
        var Zs = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Ks = {}, Js = {};
        function zr(e) {
          return Ei.call(Js, e) ? true : Ei.call(Ks, e) ? false : Zs.test(e) ? Js[e] = true : (Ks[e] = true, false);
        }
        function kn(e, t, n) {
          if (zr(t))
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
        function al(e, t, n) {
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
        function tn(e, t, n, a) {
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
        function Bt(e) {
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
        function Fs(e) {
          var t = e.type;
          return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
        }
        function Cr(e, t, n) {
          var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
          if (!e.hasOwnProperty(t) && typeof a != "undefined" && typeof a.get == "function" && typeof a.set == "function") {
            var l = a.get, i = a.set;
            return Object.defineProperty(e, t, { configurable: true, get: function() {
              return l.call(this);
            }, set: function(o) {
              n = "" + o, i.call(this, o);
            } }), Object.defineProperty(e, t, { enumerable: a.enumerable }), { getValue: function() {
              return n;
            }, setValue: function(o) {
              n = "" + o;
            }, stopTracking: function() {
              e._valueTracker = null, delete e[t];
            } };
          }
        }
        function Mi(e) {
          if (!e._valueTracker) {
            var t = Fs(e) ? "checked" : "value";
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
          return e && (a = Fs(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== n ? (t.setValue(e), true) : false;
        }
        function ll(e) {
          if (e = e || (typeof document != "undefined" ? document : void 0), typeof e == "undefined")
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        var Zn = /[\n"\\]/g;
        function zt(e) {
          return e.replace(Zn, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " ";
          });
        }
        function Bi(e, t, n, a, l, i, o, b) {
          e.name = "", o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.type = o : e.removeAttribute("type"), t != null ? o === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Bt(t)) : e.value !== "" + Bt(t) && (e.value = "" + Bt(t)) : o !== "submit" && o !== "reset" || e.removeAttribute("value"), t != null ? qi(e, o, Bt(t)) : n != null ? qi(e, o, Bt(n)) : a != null && e.removeAttribute("value"), l == null && i != null && (e.defaultChecked = !!i), l != null && (e.checked = l && typeof l != "function" && typeof l != "symbol"), b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? e.name = "" + Bt(b) : e.removeAttribute("name");
        }
        function Ws(e, t, n, a, l, i, o, b) {
          if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || n != null) {
            if (!(i !== "submit" && i !== "reset" || t != null)) {
              Mi(e);
              return;
            }
            n = n != null ? "" + Bt(n) : "", t = t != null ? "" + Bt(t) : n, b || t === e.value || (e.value = t), e.defaultValue = t;
          }
          a = a != null ? a : l, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = b ? e.checked : !!a, e.defaultChecked = !!a, o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (e.name = o), Mi(e);
        }
        function qi(e, t, n) {
          t === "number" && ll(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
        }
        function Sa(e, t, n, a) {
          if (e = e.options, t) {
            t = {};
            for (var l = 0; l < n.length; l++)
              t["$" + n[l]] = true;
            for (n = 0; n < e.length; n++)
              l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && a && (e[n].defaultSelected = true);
          } else {
            for (n = "" + Bt(n), t = null, l = 0; l < e.length; l++) {
              if (e[l].value === n) {
                e[l].selected = true, a && (e[l].defaultSelected = true);
                return;
              }
              t !== null || e[l].disabled || (t = e[l]);
            }
            t !== null && (t.selected = true);
          }
        }
        function $s(e, t, n) {
          if (t != null && (t = "" + Bt(t), t !== e.value && (e.value = t), n == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return;
          }
          e.defaultValue = n != null ? "" + Bt(n) : "";
        }
        function Hi(e, t, n, a) {
          if (t == null) {
            if (a != null) {
              if (n != null)
                throw Error(c(92));
              if (Je(a)) {
                if (1 < a.length)
                  throw Error(c(93));
                a = a[0];
              }
              n = a;
            }
            n == null && (n = ""), t = n;
          }
          n = Bt(t), e.defaultValue = n, a = e.textContent, a === n && a !== "" && a !== null && (e.value = a), Mi(e);
        }
        function Kn(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
              n.nodeValue = t;
              return;
            }
          }
          e.textContent = t;
        }
        var Cl = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
        function Ps(e, t, n) {
          var a = t.indexOf("--") === 0;
          n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Cl.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
        }
        function Li(e, t, n) {
          if (t != null && typeof t != "object")
            throw Error(c(62));
          if (e = e.style, n != null) {
            for (var a in n)
              !n.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
            for (var l in t)
              a = t[l], t.hasOwnProperty(l) && n[l] !== a && Ps(e, l, a);
          } else
            for (var i in t)
              t.hasOwnProperty(i) && Ps(e, i, t[i]);
        }
        function Ul(e) {
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
        var Is = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), Ur = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function Ml(e) {
          return Ur.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
        }
        function nn() {
        }
        var il = null;
        function Dl(e) {
          return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
        }
        var _a = null, Jn = null;
        function Bl(e) {
          var t = Un(e);
          if (t && (e = t.stateNode)) {
            var n = e[yt] || null;
            e:
              switch (e = t.stateNode, t.type) {
                case "input":
                  if (Bi(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
                    for (n = e; n.parentNode; )
                      n = n.parentNode;
                    for (n = n.querySelectorAll('input[name="' + zt("" + t) + '"][type="radio"]'), t = 0; t < n.length; t++) {
                      var a = n[t];
                      if (a !== e && a.form === e.form) {
                        var l = a[yt] || null;
                        if (!l)
                          throw Error(c(90));
                        Bi(a, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name);
                      }
                    }
                    for (t = 0; t < n.length; t++)
                      a = n[t], a.form === e.form && Di(a);
                  }
                  break e;
                case "textarea":
                  $s(e, n.value, n.defaultValue);
                  break e;
                case "select":
                  t = n.value, t != null && Sa(e, !!n.multiple, t, false);
              }
          }
        }
        var ql = false;
        function Yi(e, t, n) {
          if (ql)
            return e(t, n);
          ql = true;
          try {
            var a = e(t);
            return a;
          } finally {
            if (ql = false, (_a !== null || Jn !== null) && (Gu(), _a && (t = _a, e = Jn, Jn = _a = null, Bl(t), e)))
              for (t = 0; t < e.length; t++)
                Bl(e[t]);
          }
        }
        function Dn(e, t) {
          var n = e.stateNode;
          if (n === null)
            return null;
          var a = n[yt] || null;
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
            throw Error(c(231, t, typeof n));
          return n;
        }
        var an = !(typeof window == "undefined" || typeof window.document == "undefined" || typeof window.document.createElement == "undefined"), Gi = false;
        if (an)
          try {
            var Bn = {};
            Object.defineProperty(Bn, "passive", { get: function() {
              Gi = true;
            } }), window.addEventListener("test", Bn, Bn), window.removeEventListener("test", Bn, Bn);
          } catch (e) {
            Gi = false;
          }
        var ht = null, Ta = null, Fn = null;
        function Hl() {
          if (Fn)
            return Fn;
          var e, t = Ta, n = t.length, a, l = "value" in ht ? ht.value : ht.textContent, i = l.length;
          for (e = 0; e < n && t[e] === l[e]; e++)
            ;
          var o = n - e;
          for (a = 1; a <= o && t[n - a] === l[i - a]; a++)
            ;
          return Fn = l.slice(e, 1 < a ? 1 - a : void 0);
        }
        function Ll(e) {
          var t = e.keyCode;
          return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
        }
        function Yl() {
          return true;
        }
        function eu() {
          return false;
        }
        function bt(e) {
          function t(n, a, l, i, o) {
            this._reactName = n, this._targetInst = l, this.type = a, this.nativeEvent = i, this.target = o, this.currentTarget = null;
            for (var b in e)
              e.hasOwnProperty(b) && (n = e[b], this[b] = n ? n(i) : i[b]);
            return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === false) ? Yl : eu, this.isPropagationStopped = eu, this;
          }
          return w(t.prototype, { preventDefault: function() {
            this.defaultPrevented = true;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = Yl);
          }, stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = Yl);
          }, persist: function() {
          }, isPersistent: Yl }), t;
        }
        var Wn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
          return e.timeStamp || Date.now();
        }, defaultPrevented: 0, isTrusted: 0 }, sl = bt(Wn), Ve = w({}, Wn, { view: 0, detail: 0 }), f = bt(Ve), p, S, _, j = w({}, Ve, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: sn, button: 0, buttons: 0, relatedTarget: function(e) {
          return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
        }, movementX: function(e) {
          return "movementX" in e ? e.movementX : (e !== _ && (_ && e.type === "mousemove" ? (p = e.screenX - _.screenX, S = e.screenY - _.screenY) : S = p = 0, _ = e), p);
        }, movementY: function(e) {
          return "movementY" in e ? e.movementY : S;
        } }), U = bt(j), C = w({}, j, { dataTransfer: 0 }), F = bt(C), le = w({}, Ve, { relatedTarget: 0 }), W = bt(le), ee = w({}, Wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), de = bt(ee), Le = w({}, Wn, { clipboardData: function(e) {
          return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        } }), ge = bt(Le), te = w({}, Wn, { data: 0 }), ne = bt(te), ke = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, vt = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, nt = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
        function ln(e) {
          var t = this.nativeEvent;
          return t.getModifierState ? t.getModifierState(e) : (e = nt[e]) ? !!t[e] : false;
        }
        function sn() {
          return ln;
        }
        var Xi = w({}, Ve, { key: function(e) {
          if (e.key) {
            var t = ke[e.key] || e.key;
            if (t !== "Unidentified")
              return t;
          }
          return e.type === "keypress" ? (e = Ll(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? vt[e.keyCode] || "Unidentified" : "";
        }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: sn, charCode: function(e) {
          return e.type === "keypress" ? Ll(e) : 0;
        }, keyCode: function(e) {
          return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        }, which: function(e) {
          return e.type === "keypress" ? Ll(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        } }), tu = bt(Xi), qn = w({}, j, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Gl = bt(qn), Xl = w({}, Ve, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: sn }), nu = bt(Xl), au = w({}, Wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ql = bt(au), ul = w({}, j, { deltaX: function(e) {
          return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        }, deltaY: function(e) {
          return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        }, deltaZ: 0, deltaMode: 0 }), $n = bt(ul), lu = w({}, Wn, { newState: 0, oldState: 0 }), un = bt(lu), iu = [9, 13, 27, 32], rn = an && "CompositionEvent" in window, Aa = null;
        an && "documentMode" in document && (Aa = document.documentMode);
        var Mr = an && "TextEvent" in window && !Aa, xn = an && (!rn || Aa && 8 < Aa && 11 >= Aa), Pn = " ", Vl = false;
        function rl(e, t) {
          switch (e) {
            case "keyup":
              return iu.indexOf(t.keyCode) !== -1;
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
        var kl = false;
        function Pp(e, t) {
          switch (e) {
            case "compositionend":
              return Qi(t);
            case "keypress":
              return t.which !== 32 ? null : (Vl = true, Pn);
            case "textInput":
              return e = t.data, e === Pn && Vl ? null : e;
            default:
              return null;
          }
        }
        function Ip(e, t) {
          if (kl)
            return e === "compositionend" || !rn && rl(e, t) ? (e = Hl(), Fn = Ta = ht = null, kl = false, e) : null;
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
              return xn && t.locale !== "ko" ? null : t.data;
            default:
              return null;
          }
        }
        var eg = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
        function yf(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return t === "input" ? !!eg[e.type] : t === "textarea";
        }
        function bf(e, t, n, a) {
          _a ? Jn ? Jn.push(a) : Jn = [a] : _a = a, t = Ju(t, "onChange"), 0 < t.length && (n = new sl("onChange", "change", null, n, a), e.push({ event: n, listeners: t }));
        }
        var Vi = null, ki = null;
        function tg(e) {
          em(e, 0);
        }
        function su(e) {
          var t = nl(e);
          if (Di(t))
            return e;
        }
        function vf(e, t) {
          if (e === "change")
            return t;
        }
        var xf = false;
        if (an) {
          var Dr;
          if (an) {
            var Br = "oninput" in document;
            if (!Br) {
              var Sf = document.createElement("div");
              Sf.setAttribute("oninput", "return;"), Br = typeof Sf.oninput == "function";
            }
            Dr = Br;
          } else
            Dr = false;
          xf = Dr && (!document.documentMode || 9 < document.documentMode);
        }
        function _f() {
          Vi && (Vi.detachEvent("onpropertychange", Tf), ki = Vi = null);
        }
        function Tf(e) {
          if (e.propertyName === "value" && su(ki)) {
            var t = [];
            bf(t, ki, e, Dl(e)), Yi(tg, t);
          }
        }
        function ng(e, t, n) {
          e === "focusin" ? (_f(), Vi = t, ki = n, Vi.attachEvent("onpropertychange", Tf)) : e === "focusout" && _f();
        }
        function ag(e) {
          if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return su(ki);
        }
        function lg(e, t) {
          if (e === "click")
            return su(t);
        }
        function ig(e, t) {
          if (e === "input" || e === "change")
            return su(t);
        }
        function sg(e, t) {
          return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
        }
        var kt = typeof Object.is == "function" ? Object.is : sg;
        function Zi(e, t) {
          if (kt(e, t))
            return true;
          if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return false;
          var n = Object.keys(e), a = Object.keys(t);
          if (n.length !== a.length)
            return false;
          for (a = 0; a < n.length; a++) {
            var l = n[a];
            if (!Ei.call(t, l) || !kt(e[l], t[l]))
              return false;
          }
          return true;
        }
        function Af(e) {
          for (; e && e.firstChild; )
            e = e.firstChild;
          return e;
        }
        function Nf(e, t) {
          var n = Af(e);
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
            n = Af(n);
          }
        }
        function Ef(e, t) {
          return e && t ? e === t ? true : e && e.nodeType === 3 ? false : t && t.nodeType === 3 ? Ef(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false : false;
        }
        function wf(e) {
          e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
          for (var t = ll(e.document); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = typeof t.contentWindow.location.href == "string";
            } catch (a) {
              n = false;
            }
            if (n)
              e = t.contentWindow;
            else
              break;
            t = ll(e.document);
          }
          return t;
        }
        function qr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
        }
        var ug = an && "documentMode" in document && 11 >= document.documentMode, Zl = null, Hr = null, Ki = null, Lr = false;
        function jf(e, t, n) {
          var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
          Lr || Zl == null || Zl !== ll(a) || (a = Zl, "selectionStart" in a && qr(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset }), Ki && Zi(Ki, a) || (Ki = a, a = Ju(Hr, "onSelect"), 0 < a.length && (t = new sl("onSelect", "select", null, t, n), e.push({ event: t, listeners: a }), t.target = Zl)));
        }
        function cl(e, t) {
          var n = {};
          return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
        }
        var Kl = { animationend: cl("Animation", "AnimationEnd"), animationiteration: cl("Animation", "AnimationIteration"), animationstart: cl("Animation", "AnimationStart"), transitionrun: cl("Transition", "TransitionRun"), transitionstart: cl("Transition", "TransitionStart"), transitioncancel: cl("Transition", "TransitionCancel"), transitionend: cl("Transition", "TransitionEnd") }, Yr = {}, Of = {};
        an && (Of = document.createElement("div").style, "AnimationEvent" in window || (delete Kl.animationend.animation, delete Kl.animationiteration.animation, delete Kl.animationstart.animation), "TransitionEvent" in window || delete Kl.transitionend.transition);
        function ol(e) {
          if (Yr[e])
            return Yr[e];
          if (!Kl[e])
            return e;
          var t = Kl[e], n;
          for (n in t)
            if (t.hasOwnProperty(n) && n in Of)
              return Yr[e] = t[n];
          return e;
        }
        var Rf = ol("animationend"), zf = ol("animationiteration"), Cf = ol("animationstart"), rg = ol("transitionrun"), cg = ol("transitionstart"), og = ol("transitioncancel"), Uf = ol("transitionend"), Mf = /* @__PURE__ */ new Map(), Gr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
        Gr.push("scrollEnd");
        function Sn(e, t) {
          Mf.set(e, t), Mn(t, [e]);
        }
        var uu = typeof reportError == "function" ? reportError : function(e) {
          if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e), error: e });
            if (!window.dispatchEvent(t))
              return;
          } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", e);
            return;
          }
          console.error(e);
        }, cn = [], Jl = 0, Xr = 0;
        function ru() {
          for (var e = Jl, t = Xr = Jl = 0; t < e; ) {
            var n = cn[t];
            cn[t++] = null;
            var a = cn[t];
            cn[t++] = null;
            var l = cn[t];
            cn[t++] = null;
            var i = cn[t];
            if (cn[t++] = null, a !== null && l !== null) {
              var o = a.pending;
              o === null ? l.next = l : (l.next = o.next, o.next = l), a.pending = l;
            }
            i !== 0 && Df(n, l, i);
          }
        }
        function cu(e, t, n, a) {
          cn[Jl++] = e, cn[Jl++] = t, cn[Jl++] = n, cn[Jl++] = a, Xr |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
        }
        function Qr(e, t, n, a) {
          return cu(e, t, n, a), ou(e);
        }
        function fl(e, t) {
          return cu(e, null, null, t), ou(e);
        }
        function Df(e, t, n) {
          e.lanes |= n;
          var a = e.alternate;
          a !== null && (a.lanes |= n);
          for (var l = false, i = e.return; i !== null; )
            i.childLanes |= n, a = i.alternate, a !== null && (a.childLanes |= n), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (l = true)), e = i, i = i.return;
          return e.tag === 3 ? (i = e.stateNode, l && t !== null && (l = 31 - wt(n), e = i.hiddenUpdates, a = e[l], a === null ? e[l] = [t] : a.push(t), t.lane = n | 536870912), i) : null;
        }
        function ou(e) {
          if (50 < ps)
            throw ps = 0, Pc = null, Error(c(185));
          for (var t = e.return; t !== null; )
            e = t, t = e.return;
          return e.tag === 3 ? e.stateNode : null;
        }
        var Fl = {};
        function fg(e, t, n, a) {
          this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
        }
        function Zt(e, t, n, a) {
          return new fg(e, t, n, a);
        }
        function Vr(e) {
          return e = e.prototype, !(!e || !e.isReactComponent);
        }
        function In(e, t) {
          var n = e.alternate;
          return n === null ? (n = Zt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
        }
        function Bf(e, t) {
          e.flags &= 65011714;
          var n = e.alternate;
          return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), e;
        }
        function fu(e, t, n, a, l, i) {
          var o = 0;
          if (a = e, typeof e == "function")
            Vr(e) && (o = 1);
          else if (typeof e == "string")
            o = g0(e, n, Z.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
          else
            e:
              switch (e) {
                case pt:
                  return e = Zt(31, n, t, l), e.elementType = pt, e.lanes = i, e;
                case K:
                  return dl(n.children, l, i, t);
                case re:
                  o = 8, l |= 24;
                  break;
                case ce:
                  return e = Zt(12, n, t, l | 2), e.elementType = ce, e.lanes = i, e;
                case Te:
                  return e = Zt(13, n, t, l), e.elementType = Te, e.lanes = i, e;
                case De:
                  return e = Zt(19, n, t, l), e.elementType = De, e.lanes = i, e;
                default:
                  if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                      case ue:
                        o = 10;
                        break e;
                      case be:
                        o = 9;
                        break e;
                      case _e:
                        o = 11;
                        break e;
                      case me:
                        o = 14;
                        break e;
                      case Ie:
                        o = 16, a = null;
                        break e;
                    }
                  o = 29, n = Error(c(130, e === null ? "null" : typeof e, "")), a = null;
              }
          return t = Zt(o, n, t, l), t.elementType = e, t.type = a, t.lanes = i, t;
        }
        function dl(e, t, n, a) {
          return e = Zt(7, e, a, t), e.lanes = n, e;
        }
        function kr(e, t, n) {
          return e = Zt(6, e, null, t), e.lanes = n, e;
        }
        function qf(e) {
          var t = Zt(18, null, null, 0);
          return t.stateNode = e, t;
        }
        function Zr(e, t, n) {
          return t = Zt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
        }
        var Hf = /* @__PURE__ */ new WeakMap();
        function on(e, t) {
          if (typeof e == "object" && e !== null) {
            var n = Hf.get(e);
            return n !== void 0 ? n : (t = { value: e, source: t, stack: Ms(t) }, Hf.set(e, t), t);
          }
          return { value: e, source: t, stack: Ms(t) };
        }
        var Wl = [], $l = 0, du = null, Ji = 0, fn = [], dn = 0, Na = null, Hn = 1, Ln = "";
        function ea(e, t) {
          Wl[$l++] = Ji, Wl[$l++] = du, du = e, Ji = t;
        }
        function Lf(e, t, n) {
          fn[dn++] = Hn, fn[dn++] = Ln, fn[dn++] = Na, Na = e;
          var a = Hn;
          e = Ln;
          var l = 32 - wt(a) - 1;
          a &= ~(1 << l), n += 1;
          var i = 32 - wt(t) + l;
          if (30 < i) {
            var o = l - l % 5;
            i = (a & (1 << o) - 1).toString(32), a >>= o, l -= o, Hn = 1 << 32 - wt(t) + l | n << l | a, Ln = i + e;
          } else
            Hn = 1 << i | n << l | a, Ln = e;
        }
        function Kr(e) {
          e.return !== null && (ea(e, 1), Lf(e, 1, 0));
        }
        function Jr(e) {
          for (; e === du; )
            du = Wl[--$l], Wl[$l] = null, Ji = Wl[--$l], Wl[$l] = null;
          for (; e === Na; )
            Na = fn[--dn], fn[dn] = null, Ln = fn[--dn], fn[dn] = null, Hn = fn[--dn], fn[dn] = null;
        }
        function Yf(e, t) {
          fn[dn++] = Hn, fn[dn++] = Ln, fn[dn++] = Na, Hn = t.id, Ln = t.overflow, Na = e;
        }
        var _t = null, Ze = null, je = false, Ea = null, hn = false, Fr = Error(c(519));
        function wa(e) {
          var t = Error(c(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
          throw Fi(on(t, e)), Fr;
        }
        function Gf(e) {
          var t = e.stateNode, n = e.type, a = e.memoizedProps;
          switch (t[dt] = e, t[yt] = a, n) {
            case "dialog":
              Ne("cancel", t), Ne("close", t);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ne("load", t);
              break;
            case "video":
            case "audio":
              for (n = 0; n < ys.length; n++)
                Ne(ys[n], t);
              break;
            case "source":
              Ne("error", t);
              break;
            case "img":
            case "image":
            case "link":
              Ne("error", t), Ne("load", t);
              break;
            case "details":
              Ne("toggle", t);
              break;
            case "input":
              Ne("invalid", t), Ws(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, true);
              break;
            case "select":
              Ne("invalid", t);
              break;
            case "textarea":
              Ne("invalid", t), Hi(t, a.value, a.defaultValue, a.children);
          }
          n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === true || lm(t.textContent, n) ? (a.popover != null && (Ne("beforetoggle", t), Ne("toggle", t)), a.onScroll != null && Ne("scroll", t), a.onScrollEnd != null && Ne("scrollend", t), a.onClick != null && (t.onclick = nn), t = true) : t = false, t || wa(e, true);
        }
        function Xf(e) {
          for (_t = e.return; _t; )
            switch (_t.tag) {
              case 5:
              case 31:
              case 13:
                hn = false;
                return;
              case 27:
              case 3:
                hn = true;
                return;
              default:
                _t = _t.return;
            }
        }
        function Pl(e) {
          if (e !== _t)
            return false;
          if (!je)
            return Xf(e), je = true, false;
          var t = e.tag, n;
          if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || mo(e.type, e.memoizedProps)), n = !n), n && Ze && wa(e), Xf(e), t === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
              throw Error(c(317));
            Ze = hm(e);
          } else if (t === 31) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
              throw Error(c(317));
            Ze = hm(e);
          } else
            t === 27 ? (t = Ze, Ga(e.type) ? (e = vo, vo = null, Ze = e) : Ze = t) : Ze = _t ? pn(e.stateNode.nextSibling) : null;
          return true;
        }
        function hl() {
          Ze = _t = null, je = false;
        }
        function Wr() {
          var e = Ea;
          return e !== null && (Yt === null ? Yt = e : Yt.push.apply(Yt, e), Ea = null), e;
        }
        function Fi(e) {
          Ea === null ? Ea = [e] : Ea.push(e);
        }
        var $r = A(null), ml = null, ta = null;
        function ja(e, t, n) {
          z($r, t._currentValue), t._currentValue = n;
        }
        function na(e) {
          e._currentValue = $r.current, X($r);
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
              var o = l.child;
              i = i.firstContext;
              e:
                for (; i !== null; ) {
                  var b = i;
                  i = l;
                  for (var N = 0; N < t.length; N++)
                    if (b.context === t[N]) {
                      i.lanes |= n, b = i.alternate, b !== null && (b.lanes |= n), Pr(i.return, n, e), a || (o = null);
                      break e;
                    }
                  i = b.next;
                }
            } else if (l.tag === 18) {
              if (o = l.return, o === null)
                throw Error(c(341));
              o.lanes |= n, i = o.alternate, i !== null && (i.lanes |= n), Pr(o, n, e), o = null;
            } else
              o = l.child;
            if (o !== null)
              o.return = l;
            else
              for (o = l; o !== null; ) {
                if (o === e) {
                  o = null;
                  break;
                }
                if (l = o.sibling, l !== null) {
                  l.return = o.return, o = l;
                  break;
                }
                o = o.return;
              }
            l = o;
          }
        }
        function Il(e, t, n, a) {
          e = null;
          for (var l = t, i = false; l !== null; ) {
            if (!i) {
              if ((l.flags & 524288) !== 0)
                i = true;
              else if ((l.flags & 262144) !== 0)
                break;
            }
            if (l.tag === 10) {
              var o = l.alternate;
              if (o === null)
                throw Error(c(387));
              if (o = o.memoizedProps, o !== null) {
                var b = l.type;
                kt(l.pendingProps.value, o.value) || (e !== null ? e.push(b) : e = [b]);
              }
            } else if (l === he.current) {
              if (o = l.alternate, o === null)
                throw Error(c(387));
              o.memoizedState.memoizedState !== l.memoizedState.memoizedState && (e !== null ? e.push(_s) : e = [_s]);
            }
            l = l.return;
          }
          e !== null && Ir(t, e, n, a), t.flags |= 262144;
        }
        function hu(e) {
          for (e = e.firstContext; e !== null; ) {
            if (!kt(e.context._currentValue, e.memoizedValue))
              return true;
            e = e.next;
          }
          return false;
        }
        function pl(e) {
          ml = e, ta = null, e = e.dependencies, e !== null && (e.firstContext = null);
        }
        function Tt(e) {
          return Qf(ml, e);
        }
        function mu(e, t) {
          return ml === null && pl(e), Qf(e, t);
        }
        function Qf(e, t) {
          var n = t._currentValue;
          if (t = { context: t, memoizedValue: n, next: null }, ta === null) {
            if (e === null)
              throw Error(c(308));
            ta = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
          } else
            ta = ta.next = t;
          return n;
        }
        var dg = typeof AbortController != "undefined" ? AbortController : function() {
          var e = [], t = this.signal = { aborted: false, addEventListener: function(n, a) {
            e.push(a);
          } };
          this.abort = function() {
            t.aborted = true, e.forEach(function(n) {
              return n();
            });
          };
        }, hg = u.unstable_scheduleCallback, mg = u.unstable_NormalPriority, ut = { $$typeof: ue, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
        function ec() {
          return { controller: new dg(), data: /* @__PURE__ */ new Map(), refCount: 0 };
        }
        function Wi(e) {
          e.refCount--, e.refCount === 0 && hg(mg, function() {
            e.controller.abort();
          });
        }
        var $i = null, tc = 0, ei = 0, ti = null;
        function pg(e, t) {
          if ($i === null) {
            var n = $i = [];
            tc = 0, ei = lo(), ti = { status: "pending", value: void 0, then: function(a) {
              n.push(a);
            } };
          }
          return tc++, t.then(Vf, Vf), t;
        }
        function Vf() {
          if (--tc === 0 && $i !== null) {
            ti !== null && (ti.status = "fulfilled");
            var e = $i;
            $i = null, ei = 0, ti = null;
            for (var t = 0; t < e.length; t++)
              (0, e[t])();
          }
        }
        function gg(e, t) {
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
        var kf = Y.S;
        Y.S = function(e, t) {
          jh = Ot(), typeof t == "object" && t !== null && typeof t.then == "function" && pg(e, t), kf !== null && kf(e, t);
        };
        var gl = A(null);
        function nc() {
          var e = gl.current;
          return e !== null ? e : Qe.pooledCache;
        }
        function pu(e, t) {
          t === null ? z(gl, gl.current) : z(gl, t.pool);
        }
        function Zf() {
          var e = nc();
          return e === null ? null : { parent: ut._currentValue, pool: e };
        }
        var ni = Error(c(460)), ac = Error(c(474)), gu = Error(c(542)), yu = { then: function() {
        } };
        function Kf(e) {
          return e = e.status, e === "fulfilled" || e === "rejected";
        }
        function Jf(e, t, n) {
          switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(nn, nn), t = n), t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, Wf(e), e;
            default:
              if (typeof t.status == "string")
                t.then(nn, nn);
              else {
                if (e = Qe, e !== null && 100 < e.shellSuspendCounter)
                  throw Error(c(482));
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
                  throw e = t.reason, Wf(e), e;
              }
              throw bl = t, ni;
          }
        }
        function yl(e) {
          try {
            var t = e._init;
            return t(e._payload);
          } catch (n) {
            throw n !== null && typeof n == "object" && typeof n.then == "function" ? (bl = n, ni) : n;
          }
        }
        var bl = null;
        function Ff() {
          if (bl === null)
            throw Error(c(459));
          var e = bl;
          return bl = null, e;
        }
        function Wf(e) {
          if (e === ni || e === gu)
            throw Error(c(483));
        }
        var ai = null, Pi = 0;
        function bu(e) {
          var t = Pi;
          return Pi += 1, ai === null && (ai = []), Jf(ai, e, t);
        }
        function Ii(e, t) {
          t = t.props.ref, e.ref = t !== void 0 ? t : null;
        }
        function vu(e, t) {
          throw t.$$typeof === G ? Error(c(525)) : (e = Object.prototype.toString.call(t), Error(c(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
        }
        function $f(e) {
          function t(R, O) {
            if (e) {
              var D = R.deletions;
              D === null ? (R.deletions = [O], R.flags |= 16) : D.push(O);
            }
          }
          function n(R, O) {
            if (!e)
              return null;
            for (; O !== null; )
              t(R, O), O = O.sibling;
            return null;
          }
          function a(R) {
            for (var O = /* @__PURE__ */ new Map(); R !== null; )
              R.key !== null ? O.set(R.key, R) : O.set(R.index, R), R = R.sibling;
            return O;
          }
          function l(R, O) {
            return R = In(R, O), R.index = 0, R.sibling = null, R;
          }
          function i(R, O, D) {
            return R.index = D, e ? (D = R.alternate, D !== null ? (D = D.index, D < O ? (R.flags |= 67108866, O) : D) : (R.flags |= 67108866, O)) : (R.flags |= 1048576, O);
          }
          function o(R) {
            return e && R.alternate === null && (R.flags |= 67108866), R;
          }
          function b(R, O, D, V) {
            return O === null || O.tag !== 6 ? (O = kr(D, R.mode, V), O.return = R, O) : (O = l(O, D), O.return = R, O);
          }
          function N(R, O, D, V) {
            var oe = D.type;
            return oe === K ? Q(R, O, D.props.children, V, D.key) : O !== null && (O.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === Ie && yl(oe) === O.type) ? (O = l(O, D.props), Ii(O, D), O.return = R, O) : (O = fu(D.type, D.key, D.props, null, R.mode, V), Ii(O, D), O.return = R, O);
          }
          function B(R, O, D, V) {
            return O === null || O.tag !== 4 || O.stateNode.containerInfo !== D.containerInfo || O.stateNode.implementation !== D.implementation ? (O = Zr(D, R.mode, V), O.return = R, O) : (O = l(O, D.children || []), O.return = R, O);
          }
          function Q(R, O, D, V, oe) {
            return O === null || O.tag !== 7 ? (O = dl(D, R.mode, V, oe), O.return = R, O) : (O = l(O, D), O.return = R, O);
          }
          function k(R, O, D) {
            if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
              return O = kr("" + O, R.mode, D), O.return = R, O;
            if (typeof O == "object" && O !== null) {
              switch (O.$$typeof) {
                case E:
                  return D = fu(O.type, O.key, O.props, null, R.mode, D), Ii(D, O), D.return = R, D;
                case M:
                  return O = Zr(O, R.mode, D), O.return = R, O;
                case Ie:
                  return O = yl(O), k(R, O, D);
              }
              if (Je(O) || it(O))
                return O = dl(O, R.mode, D, null), O.return = R, O;
              if (typeof O.then == "function")
                return k(R, bu(O), D);
              if (O.$$typeof === ue)
                return k(R, mu(R, O), D);
              vu(R, O);
            }
            return null;
          }
          function q(R, O, D, V) {
            var oe = O !== null ? O.key : null;
            if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
              return oe !== null ? null : b(R, O, "" + D, V);
            if (typeof D == "object" && D !== null) {
              switch (D.$$typeof) {
                case E:
                  return D.key === oe ? N(R, O, D, V) : null;
                case M:
                  return D.key === oe ? B(R, O, D, V) : null;
                case Ie:
                  return D = yl(D), q(R, O, D, V);
              }
              if (Je(D) || it(D))
                return oe !== null ? null : Q(R, O, D, V, null);
              if (typeof D.then == "function")
                return q(R, O, bu(D), V);
              if (D.$$typeof === ue)
                return q(R, O, mu(R, D), V);
              vu(R, D);
            }
            return null;
          }
          function L(R, O, D, V, oe) {
            if (typeof V == "string" && V !== "" || typeof V == "number" || typeof V == "bigint")
              return R = R.get(D) || null, b(O, R, "" + V, oe);
            if (typeof V == "object" && V !== null) {
              switch (V.$$typeof) {
                case E:
                  return R = R.get(V.key === null ? D : V.key) || null, N(O, R, V, oe);
                case M:
                  return R = R.get(V.key === null ? D : V.key) || null, B(O, R, V, oe);
                case Ie:
                  return V = yl(V), L(R, O, D, V, oe);
              }
              if (Je(V) || it(V))
                return R = R.get(D) || null, Q(O, R, V, oe, null);
              if (typeof V.then == "function")
                return L(R, O, D, bu(V), oe);
              if (V.$$typeof === ue)
                return L(R, O, D, mu(O, V), oe);
              vu(O, V);
            }
            return null;
          }
          function ae(R, O, D, V) {
            for (var oe = null, Ce = null, ie = O, xe = O = 0, we = null; ie !== null && xe < D.length; xe++) {
              ie.index > xe ? (we = ie, ie = null) : we = ie.sibling;
              var Ue = q(R, ie, D[xe], V);
              if (Ue === null) {
                ie === null && (ie = we);
                break;
              }
              e && ie && Ue.alternate === null && t(R, ie), O = i(Ue, O, xe), Ce === null ? oe = Ue : Ce.sibling = Ue, Ce = Ue, ie = we;
            }
            if (xe === D.length)
              return n(R, ie), je && ea(R, xe), oe;
            if (ie === null) {
              for (; xe < D.length; xe++)
                ie = k(R, D[xe], V), ie !== null && (O = i(ie, O, xe), Ce === null ? oe = ie : Ce.sibling = ie, Ce = ie);
              return je && ea(R, xe), oe;
            }
            for (ie = a(ie); xe < D.length; xe++)
              we = L(ie, R, xe, D[xe], V), we !== null && (e && we.alternate !== null && ie.delete(we.key === null ? xe : we.key), O = i(we, O, xe), Ce === null ? oe = we : Ce.sibling = we, Ce = we);
            return e && ie.forEach(function(Za) {
              return t(R, Za);
            }), je && ea(R, xe), oe;
          }
          function fe(R, O, D, V) {
            if (D == null)
              throw Error(c(151));
            for (var oe = null, Ce = null, ie = O, xe = O = 0, we = null, Ue = D.next(); ie !== null && !Ue.done; xe++, Ue = D.next()) {
              ie.index > xe ? (we = ie, ie = null) : we = ie.sibling;
              var Za = q(R, ie, Ue.value, V);
              if (Za === null) {
                ie === null && (ie = we);
                break;
              }
              e && ie && Za.alternate === null && t(R, ie), O = i(Za, O, xe), Ce === null ? oe = Za : Ce.sibling = Za, Ce = Za, ie = we;
            }
            if (Ue.done)
              return n(R, ie), je && ea(R, xe), oe;
            if (ie === null) {
              for (; !Ue.done; xe++, Ue = D.next())
                Ue = k(R, Ue.value, V), Ue !== null && (O = i(Ue, O, xe), Ce === null ? oe = Ue : Ce.sibling = Ue, Ce = Ue);
              return je && ea(R, xe), oe;
            }
            for (ie = a(ie); !Ue.done; xe++, Ue = D.next())
              Ue = L(ie, R, xe, Ue.value, V), Ue !== null && (e && Ue.alternate !== null && ie.delete(Ue.key === null ? xe : Ue.key), O = i(Ue, O, xe), Ce === null ? oe = Ue : Ce.sibling = Ue, Ce = Ue);
            return e && ie.forEach(function(w0) {
              return t(R, w0);
            }), je && ea(R, xe), oe;
          }
          function Xe(R, O, D, V) {
            if (typeof D == "object" && D !== null && D.type === K && D.key === null && (D = D.props.children), typeof D == "object" && D !== null) {
              switch (D.$$typeof) {
                case E:
                  e: {
                    for (var oe = D.key; O !== null; ) {
                      if (O.key === oe) {
                        if (oe = D.type, oe === K) {
                          if (O.tag === 7) {
                            n(R, O.sibling), V = l(O, D.props.children), V.return = R, R = V;
                            break e;
                          }
                        } else if (O.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === Ie && yl(oe) === O.type) {
                          n(R, O.sibling), V = l(O, D.props), Ii(V, D), V.return = R, R = V;
                          break e;
                        }
                        n(R, O);
                        break;
                      } else
                        t(R, O);
                      O = O.sibling;
                    }
                    D.type === K ? (V = dl(D.props.children, R.mode, V, D.key), V.return = R, R = V) : (V = fu(D.type, D.key, D.props, null, R.mode, V), Ii(V, D), V.return = R, R = V);
                  }
                  return o(R);
                case M:
                  e: {
                    for (oe = D.key; O !== null; ) {
                      if (O.key === oe)
                        if (O.tag === 4 && O.stateNode.containerInfo === D.containerInfo && O.stateNode.implementation === D.implementation) {
                          n(R, O.sibling), V = l(O, D.children || []), V.return = R, R = V;
                          break e;
                        } else {
                          n(R, O);
                          break;
                        }
                      else
                        t(R, O);
                      O = O.sibling;
                    }
                    V = Zr(D, R.mode, V), V.return = R, R = V;
                  }
                  return o(R);
                case Ie:
                  return D = yl(D), Xe(R, O, D, V);
              }
              if (Je(D))
                return ae(R, O, D, V);
              if (it(D)) {
                if (oe = it(D), typeof oe != "function")
                  throw Error(c(150));
                return D = oe.call(D), fe(R, O, D, V);
              }
              if (typeof D.then == "function")
                return Xe(R, O, bu(D), V);
              if (D.$$typeof === ue)
                return Xe(R, O, mu(R, D), V);
              vu(R, D);
            }
            return typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint" ? (D = "" + D, O !== null && O.tag === 6 ? (n(R, O.sibling), V = l(O, D), V.return = R, R = V) : (n(R, O), V = kr(D, R.mode, V), V.return = R, R = V), o(R)) : n(R, O);
          }
          return function(R, O, D, V) {
            try {
              Pi = 0;
              var oe = Xe(R, O, D, V);
              return ai = null, oe;
            } catch (ie) {
              if (ie === ni || ie === gu)
                throw ie;
              var Ce = Zt(29, ie, null, R.mode);
              return Ce.lanes = V, Ce.return = R, Ce;
            } finally {
            }
          };
        }
        var vl = $f(true), Pf = $f(false), Oa = false;
        function lc(e) {
          e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
        }
        function ic(e, t) {
          e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, callbacks: null });
        }
        function Ra(e) {
          return { lane: e, tag: 0, payload: null, callback: null, next: null };
        }
        function za(e, t, n) {
          var a = e.updateQueue;
          if (a === null)
            return null;
          if (a = a.shared, (Me & 2) !== 0) {
            var l = a.pending;
            return l === null ? t.next = t : (t.next = l.next, l.next = t), a.pending = t, t = ou(e), Df(e, null, n), t;
          }
          return cu(e, a, t, n), ou(e);
        }
        function es(e, t, n) {
          if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
            var a = t.lanes;
            a &= e.pendingLanes, n |= a, t.lanes = n, Gs(e, n);
          }
        }
        function sc(e, t) {
          var n = e.updateQueue, a = e.alternate;
          if (a !== null && (a = a.updateQueue, n === a)) {
            var l = null, i = null;
            if (n = n.firstBaseUpdate, n !== null) {
              do {
                var o = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
                i === null ? l = i = o : i = i.next = o, n = n.next;
              } while (n !== null);
              i === null ? l = i = t : i = i.next = t;
            } else
              l = i = t;
            n = { baseState: a.baseState, firstBaseUpdate: l, lastBaseUpdate: i, shared: a.shared, callbacks: a.callbacks }, e.updateQueue = n;
            return;
          }
          e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
        }
        var uc = false;
        function ts() {
          if (uc) {
            var e = ti;
            if (e !== null)
              throw e;
          }
        }
        function ns(e, t, n, a) {
          uc = false;
          var l = e.updateQueue;
          Oa = false;
          var i = l.firstBaseUpdate, o = l.lastBaseUpdate, b = l.shared.pending;
          if (b !== null) {
            l.shared.pending = null;
            var N = b, B = N.next;
            N.next = null, o === null ? i = B : o.next = B, o = N;
            var Q = e.alternate;
            Q !== null && (Q = Q.updateQueue, b = Q.lastBaseUpdate, b !== o && (b === null ? Q.firstBaseUpdate = B : b.next = B, Q.lastBaseUpdate = N));
          }
          if (i !== null) {
            var k = l.baseState;
            o = 0, Q = B = N = null, b = i;
            do {
              var q = b.lane & -536870913, L = q !== b.lane;
              if (L ? (Ee & q) === q : (a & q) === q) {
                q !== 0 && q === ei && (uc = true), Q !== null && (Q = Q.next = { lane: 0, tag: b.tag, payload: b.payload, callback: null, next: null });
                e: {
                  var ae = e, fe = b;
                  q = t;
                  var Xe = n;
                  switch (fe.tag) {
                    case 1:
                      if (ae = fe.payload, typeof ae == "function") {
                        k = ae.call(Xe, k, q);
                        break e;
                      }
                      k = ae;
                      break e;
                    case 3:
                      ae.flags = ae.flags & -65537 | 128;
                    case 0:
                      if (ae = fe.payload, q = typeof ae == "function" ? ae.call(Xe, k, q) : ae, q == null)
                        break e;
                      k = w({}, k, q);
                      break e;
                    case 2:
                      Oa = true;
                  }
                }
                q = b.callback, q !== null && (e.flags |= 64, L && (e.flags |= 8192), L = l.callbacks, L === null ? l.callbacks = [q] : L.push(q));
              } else
                L = { lane: q, tag: b.tag, payload: b.payload, callback: b.callback, next: null }, Q === null ? (B = Q = L, N = k) : Q = Q.next = L, o |= q;
              if (b = b.next, b === null) {
                if (b = l.shared.pending, b === null)
                  break;
                L = b, b = L.next, L.next = null, l.lastBaseUpdate = L, l.shared.pending = null;
              }
            } while (true);
            Q === null && (N = k), l.baseState = N, l.firstBaseUpdate = B, l.lastBaseUpdate = Q, i === null && (l.shared.lanes = 0), Ba |= o, e.lanes = o, e.memoizedState = k;
          }
        }
        function If(e, t) {
          if (typeof e != "function")
            throw Error(c(191, e));
          e.call(t);
        }
        function ed(e, t) {
          var n = e.callbacks;
          if (n !== null)
            for (e.callbacks = null, e = 0; e < n.length; e++)
              If(n[e], t);
        }
        var li = A(null), xu = A(0);
        function td(e, t) {
          e = fa, z(xu, e), z(li, t), fa = e | t.baseLanes;
        }
        function rc() {
          z(xu, fa), z(li, li.current);
        }
        function cc() {
          fa = xu.current, X(li), X(xu);
        }
        var Kt = A(null), mn = null;
        function Ca(e) {
          var t = e.alternate;
          z(at, at.current & 1), z(Kt, e), mn === null && (t === null || li.current !== null || t.memoizedState !== null) && (mn = e);
        }
        function oc(e) {
          z(at, at.current), z(Kt, e), mn === null && (mn = e);
        }
        function nd(e) {
          e.tag === 22 ? (z(at, at.current), z(Kt, e), mn === null && (mn = e)) : Ua();
        }
        function Ua() {
          z(at, at.current), z(Kt, Kt.current);
        }
        function Jt(e) {
          X(Kt), mn === e && (mn = null), X(at);
        }
        var at = A(0);
        function Su(e) {
          for (var t = e; t !== null; ) {
            if (t.tag === 13) {
              var n = t.memoizedState;
              if (n !== null && (n = n.dehydrated, n === null || yo(n) || bo(n)))
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
        var aa = 0, ve = null, Ye = null, rt = null, _u = false, ii = false, xl = false, Tu = 0, as = 0, si = null, yg = 0;
        function et() {
          throw Error(c(321));
        }
        function fc(e, t) {
          if (t === null)
            return false;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!kt(e[n], t[n]))
              return false;
          return true;
        }
        function dc(e, t, n, a, l, i) {
          return aa = i, ve = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Y.H = e === null || e.memoizedState === null ? Ld : wc, xl = false, i = n(a, l), xl = false, ii && (i = ld(t, n, a, l)), ad(e), i;
        }
        function ad(e) {
          Y.H = ss;
          var t = Ye !== null && Ye.next !== null;
          if (aa = 0, rt = Ye = ve = null, _u = false, as = 0, si = null, t)
            throw Error(c(300));
          e === null || ct || (e = e.dependencies, e !== null && hu(e) && (ct = true));
        }
        function ld(e, t, n, a) {
          ve = e;
          var l = 0;
          do {
            if (ii && (si = null), as = 0, ii = false, 25 <= l)
              throw Error(c(301));
            if (l += 1, rt = Ye = null, e.updateQueue != null) {
              var i = e.updateQueue;
              i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
            }
            Y.H = Yd, i = t(n, a);
          } while (ii);
          return i;
        }
        function bg() {
          var e = Y.H, t = e.useState()[0];
          return t = typeof t.then == "function" ? ls(t) : t, e = e.useState()[0], (Ye !== null ? Ye.memoizedState : null) !== e && (ve.flags |= 1024), t;
        }
        function hc() {
          var e = Tu !== 0;
          return Tu = 0, e;
        }
        function mc(e, t, n) {
          t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
        }
        function pc(e) {
          if (_u) {
            for (e = e.memoizedState; e !== null; ) {
              var t = e.queue;
              t !== null && (t.pending = null), e = e.next;
            }
            _u = false;
          }
          aa = 0, rt = Ye = ve = null, ii = false, as = Tu = 0, si = null;
        }
        function Ct() {
          var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
          return rt === null ? ve.memoizedState = rt = e : rt = rt.next = e, rt;
        }
        function lt() {
          if (Ye === null) {
            var e = ve.alternate;
            e = e !== null ? e.memoizedState : null;
          } else
            e = Ye.next;
          var t = rt === null ? ve.memoizedState : rt.next;
          if (t !== null)
            rt = t, Ye = e;
          else {
            if (e === null)
              throw ve.alternate === null ? Error(c(467)) : Error(c(310));
            Ye = e, e = { memoizedState: Ye.memoizedState, baseState: Ye.baseState, baseQueue: Ye.baseQueue, queue: Ye.queue, next: null }, rt === null ? ve.memoizedState = rt = e : rt = rt.next = e;
          }
          return rt;
        }
        function Au() {
          return { lastEffect: null, events: null, stores: null, memoCache: null };
        }
        function ls(e) {
          var t = as;
          return as += 1, si === null && (si = []), e = Jf(si, e, t), t = ve, (rt === null ? t.memoizedState : rt.next) === null && (t = t.alternate, Y.H = t === null || t.memoizedState === null ? Ld : wc), e;
        }
        function Nu(e) {
          if (e !== null && typeof e == "object") {
            if (typeof e.then == "function")
              return ls(e);
            if (e.$$typeof === ue)
              return Tt(e);
          }
          throw Error(c(438, String(e)));
        }
        function gc(e) {
          var t = null, n = ve.updateQueue;
          if (n !== null && (t = n.memoCache), t == null) {
            var a = ve.alternate;
            a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = { data: a.data.map(function(l) {
              return l.slice();
            }), index: 0 })));
          }
          if (t == null && (t = { data: [], index: 0 }), n === null && (n = Au(), ve.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
            for (n = t.data[t.index] = Array(e), a = 0; a < e; a++)
              n[a] = It;
          return t.index++, n;
        }
        function la(e, t) {
          return typeof t == "function" ? t(e) : t;
        }
        function Eu(e) {
          var t = lt();
          return yc(t, Ye, e);
        }
        function yc(e, t, n) {
          var a = e.queue;
          if (a === null)
            throw Error(c(311));
          a.lastRenderedReducer = n;
          var l = e.baseQueue, i = a.pending;
          if (i !== null) {
            if (l !== null) {
              var o = l.next;
              l.next = i.next, i.next = o;
            }
            t.baseQueue = l = i, a.pending = null;
          }
          if (i = e.baseState, l === null)
            e.memoizedState = i;
          else {
            t = l.next;
            var b = o = null, N = null, B = t, Q = false;
            do {
              var k = B.lane & -536870913;
              if (k !== B.lane ? (Ee & k) === k : (aa & k) === k) {
                var q = B.revertLane;
                if (q === 0)
                  N !== null && (N = N.next = { lane: 0, revertLane: 0, gesture: null, action: B.action, hasEagerState: B.hasEagerState, eagerState: B.eagerState, next: null }), k === ei && (Q = true);
                else if ((aa & q) === q) {
                  B = B.next, q === ei && (Q = true);
                  continue;
                } else
                  k = { lane: 0, revertLane: B.revertLane, gesture: null, action: B.action, hasEagerState: B.hasEagerState, eagerState: B.eagerState, next: null }, N === null ? (b = N = k, o = i) : N = N.next = k, ve.lanes |= q, Ba |= q;
                k = B.action, xl && n(i, k), i = B.hasEagerState ? B.eagerState : n(i, k);
              } else
                q = { lane: k, revertLane: B.revertLane, gesture: B.gesture, action: B.action, hasEagerState: B.hasEagerState, eagerState: B.eagerState, next: null }, N === null ? (b = N = q, o = i) : N = N.next = q, ve.lanes |= k, Ba |= k;
              B = B.next;
            } while (B !== null && B !== t);
            if (N === null ? o = i : N.next = b, !kt(i, e.memoizedState) && (ct = true, Q && (n = ti, n !== null)))
              throw n;
            e.memoizedState = i, e.baseState = o, e.baseQueue = N, a.lastRenderedState = i;
          }
          return l === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
        }
        function bc(e) {
          var t = lt(), n = t.queue;
          if (n === null)
            throw Error(c(311));
          n.lastRenderedReducer = e;
          var a = n.dispatch, l = n.pending, i = t.memoizedState;
          if (l !== null) {
            n.pending = null;
            var o = l = l.next;
            do
              i = e(i, o.action), o = o.next;
            while (o !== l);
            kt(i, t.memoizedState) || (ct = true), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
          }
          return [i, a];
        }
        function id(e, t, n) {
          var a = ve, l = lt(), i = je;
          if (i) {
            if (n === void 0)
              throw Error(c(407));
            n = n();
          } else
            n = t();
          var o = !kt((Ye || l).memoizedState, n);
          if (o && (l.memoizedState = n, ct = true), l = l.queue, Sc(rd.bind(null, a, l, e), [e]), l.getSnapshot !== t || o || rt !== null && rt.memoizedState.tag & 1) {
            if (a.flags |= 2048, ui(9, { destroy: void 0 }, ud.bind(null, a, l, n, t), null), Qe === null)
              throw Error(c(349));
            i || (aa & 127) !== 0 || sd(a, t, n);
          }
          return n;
        }
        function sd(e, t, n) {
          e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ve.updateQueue, t === null ? (t = Au(), ve.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
        }
        function ud(e, t, n, a) {
          t.value = n, t.getSnapshot = a, cd(t) && od(e);
        }
        function rd(e, t, n) {
          return n(function() {
            cd(t) && od(e);
          });
        }
        function cd(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !kt(e, n);
          } catch (a) {
            return true;
          }
        }
        function od(e) {
          var t = fl(e, 2);
          t !== null && Gt(t, e, 2);
        }
        function vc(e) {
          var t = Ct();
          if (typeof e == "function") {
            var n = e;
            if (e = n(), xl) {
              Qt(true);
              try {
                n();
              } finally {
                Qt(false);
              }
            }
          }
          return t.memoizedState = t.baseState = e, t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: la, lastRenderedState: e }, t;
        }
        function fd(e, t, n, a) {
          return e.baseState = n, yc(e, Ye, typeof a == "function" ? a : la);
        }
        function vg(e, t, n, a, l) {
          if (Ou(e))
            throw Error(c(485));
          if (e = t.action, e !== null) {
            var i = { payload: l, action: e, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(o) {
              i.listeners.push(o);
            } };
            Y.T !== null ? n(true) : i.isTransition = false, a(i), n = t.pending, n === null ? (i.next = t.pending = i, dd(t, i)) : (i.next = n.next, t.pending = n.next = i);
          }
        }
        function dd(e, t) {
          var n = t.action, a = t.payload, l = e.state;
          if (t.isTransition) {
            var i = Y.T, o = {};
            Y.T = o;
            try {
              var b = n(l, a), N = Y.S;
              N !== null && N(o, b), hd(e, t, b);
            } catch (B) {
              xc(e, t, B);
            } finally {
              i !== null && o.types !== null && (i.types = o.types), Y.T = i;
            }
          } else
            try {
              i = n(l, a), hd(e, t, i);
            } catch (B) {
              xc(e, t, B);
            }
        }
        function hd(e, t, n) {
          n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(a) {
            md(e, t, a);
          }, function(a) {
            return xc(e, t, a);
          }) : md(e, t, n);
        }
        function md(e, t, n) {
          t.status = "fulfilled", t.value = n, pd(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, dd(e, n)));
        }
        function xc(e, t, n) {
          var a = e.pending;
          if (e.pending = null, a !== null) {
            a = a.next;
            do
              t.status = "rejected", t.reason = n, pd(t), t = t.next;
            while (t !== a);
          }
          e.action = null;
        }
        function pd(e) {
          e = e.listeners;
          for (var t = 0; t < e.length; t++)
            (0, e[t])();
        }
        function gd(e, t) {
          return t;
        }
        function yd(e, t) {
          if (je) {
            var n = Qe.formState;
            if (n !== null) {
              e: {
                var a = ve;
                if (je) {
                  if (Ze) {
                    t: {
                      for (var l = Ze, i = hn; l.nodeType !== 8; ) {
                        if (!i) {
                          l = null;
                          break t;
                        }
                        if (l = pn(l.nextSibling), l === null) {
                          l = null;
                          break t;
                        }
                      }
                      i = l.data, l = i === "F!" || i === "F" ? l : null;
                    }
                    if (l) {
                      Ze = pn(l.nextSibling), a = l.data === "F!";
                      break e;
                    }
                  }
                  wa(a);
                }
                a = false;
              }
              a && (t = n[0]);
            }
          }
          return n = Ct(), n.memoizedState = n.baseState = t, a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: gd, lastRenderedState: t }, n.queue = a, n = Bd.bind(null, ve, a), a.dispatch = n, a = vc(false), i = Ec.bind(null, ve, false, a.queue), a = Ct(), l = { state: t, dispatch: null, action: e, pending: null }, a.queue = l, n = vg.bind(null, ve, l, i, n), l.dispatch = n, a.memoizedState = e, [t, n, false];
        }
        function bd(e) {
          var t = lt();
          return vd(t, Ye, e);
        }
        function vd(e, t, n) {
          if (t = yc(e, t, gd)[0], e = Eu(la)[0], typeof t == "object" && t !== null && typeof t.then == "function")
            try {
              var a = ls(t);
            } catch (o) {
              throw o === ni ? gu : o;
            }
          else
            a = t;
          t = lt();
          var l = t.queue, i = l.dispatch;
          return n !== t.memoizedState && (ve.flags |= 2048, ui(9, { destroy: void 0 }, xg.bind(null, l, n), null)), [a, i, e];
        }
        function xg(e, t) {
          e.action = t;
        }
        function xd(e) {
          var t = lt(), n = Ye;
          if (n !== null)
            return vd(t, n, e);
          lt(), t = t.memoizedState, n = lt();
          var a = n.queue.dispatch;
          return n.memoizedState = e, [t, a, false];
        }
        function ui(e, t, n, a) {
          return e = { tag: e, create: n, deps: a, inst: t, next: null }, t = ve.updateQueue, t === null && (t = Au(), ve.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e;
        }
        function Sd() {
          return lt().memoizedState;
        }
        function wu(e, t, n, a) {
          var l = Ct();
          ve.flags |= e, l.memoizedState = ui(1 | t, { destroy: void 0 }, n, a === void 0 ? null : a);
        }
        function ju(e, t, n, a) {
          var l = lt();
          a = a === void 0 ? null : a;
          var i = l.memoizedState.inst;
          Ye !== null && a !== null && fc(a, Ye.memoizedState.deps) ? l.memoizedState = ui(t, i, n, a) : (ve.flags |= e, l.memoizedState = ui(1 | t, i, n, a));
        }
        function _d(e, t) {
          wu(8390656, 8, e, t);
        }
        function Sc(e, t) {
          ju(2048, 8, e, t);
        }
        function Sg(e) {
          ve.flags |= 4;
          var t = ve.updateQueue;
          if (t === null)
            t = Au(), ve.updateQueue = t, t.events = [e];
          else {
            var n = t.events;
            n === null ? t.events = [e] : n.push(e);
          }
        }
        function Td(e) {
          var t = lt().memoizedState;
          return Sg({ ref: t, nextImpl: e }), function() {
            if ((Me & 2) !== 0)
              throw Error(c(440));
            return t.impl.apply(void 0, arguments);
          };
        }
        function Ad(e, t) {
          return ju(4, 2, e, t);
        }
        function Nd(e, t) {
          return ju(4, 4, e, t);
        }
        function Ed(e, t) {
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
        function wd(e, t, n) {
          n = n != null ? n.concat([e]) : null, ju(4, 4, Ed.bind(null, t, e), n);
        }
        function _c() {
        }
        function jd(e, t) {
          var n = lt();
          t = t === void 0 ? null : t;
          var a = n.memoizedState;
          return t !== null && fc(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e);
        }
        function Od(e, t) {
          var n = lt();
          t = t === void 0 ? null : t;
          var a = n.memoizedState;
          if (t !== null && fc(t, a[1]))
            return a[0];
          if (a = e(), xl) {
            Qt(true);
            try {
              e();
            } finally {
              Qt(false);
            }
          }
          return n.memoizedState = [a, t], a;
        }
        function Tc(e, t, n) {
          return n === void 0 || (aa & 1073741824) !== 0 && (Ee & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = Rh(), ve.lanes |= e, Ba |= e, n);
        }
        function Rd(e, t, n, a) {
          return kt(n, t) ? n : li.current !== null ? (e = Tc(e, n, a), kt(e, t) || (ct = true), e) : (aa & 42) === 0 || (aa & 1073741824) !== 0 && (Ee & 261930) === 0 ? (ct = true, e.memoizedState = n) : (e = Rh(), ve.lanes |= e, Ba |= e, t);
        }
        function zd(e, t, n, a, l) {
          var i = P.p;
          P.p = i !== 0 && 8 > i ? i : 8;
          var o = Y.T, b = {};
          Y.T = b, Ec(e, false, t, n);
          try {
            var N = l(), B = Y.S;
            if (B !== null && B(b, N), N !== null && typeof N == "object" && typeof N.then == "function") {
              var Q = gg(N, a);
              is(e, t, Q, $t(e));
            } else
              is(e, t, a, $t(e));
          } catch (k) {
            is(e, t, { then: function() {
            }, status: "rejected", reason: k }, $t());
          } finally {
            P.p = i, o !== null && b.types !== null && (o.types = b.types), Y.T = o;
          }
        }
        function _g() {
        }
        function Ac(e, t, n, a) {
          if (e.tag !== 5)
            throw Error(c(476));
          var l = Cd(e).queue;
          zd(e, l, t, se, n === null ? _g : function() {
            return Ud(e), n(a);
          });
        }
        function Cd(e) {
          var t = e.memoizedState;
          if (t !== null)
            return t;
          t = { memoizedState: se, baseState: se, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: la, lastRenderedState: se }, next: null };
          var n = {};
          return t.next = { memoizedState: n, baseState: n, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: la, lastRenderedState: n }, next: null }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
        }
        function Ud(e) {
          var t = Cd(e);
          t.next === null && (t = e.alternate.memoizedState), is(e, t.next.queue, {}, $t());
        }
        function Nc() {
          return Tt(_s);
        }
        function Md() {
          return lt().memoizedState;
        }
        function Dd() {
          return lt().memoizedState;
        }
        function Tg(e) {
          for (var t = e.return; t !== null; ) {
            switch (t.tag) {
              case 24:
              case 3:
                var n = $t();
                e = Ra(n);
                var a = za(t, e, n);
                a !== null && (Gt(a, t, n), es(a, t, n)), t = { cache: ec() }, e.payload = t;
                return;
            }
            t = t.return;
          }
        }
        function Ag(e, t, n) {
          var a = $t();
          n = { lane: a, revertLane: 0, gesture: null, action: n, hasEagerState: false, eagerState: null, next: null }, Ou(e) ? qd(t, n) : (n = Qr(e, t, n, a), n !== null && (Gt(n, e, a), Hd(n, t, a)));
        }
        function Bd(e, t, n) {
          var a = $t();
          is(e, t, n, a);
        }
        function is(e, t, n, a) {
          var l = { lane: a, revertLane: 0, gesture: null, action: n, hasEagerState: false, eagerState: null, next: null };
          if (Ou(e))
            qd(t, l);
          else {
            var i = e.alternate;
            if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
              try {
                var o = t.lastRenderedState, b = i(o, n);
                if (l.hasEagerState = true, l.eagerState = b, kt(b, o))
                  return cu(e, t, l, 0), Qe === null && ru(), false;
              } catch (N) {
              } finally {
              }
            if (n = Qr(e, t, l, a), n !== null)
              return Gt(n, e, a), Hd(n, t, a), true;
          }
          return false;
        }
        function Ec(e, t, n, a) {
          if (a = { lane: 2, revertLane: lo(), gesture: null, action: a, hasEagerState: false, eagerState: null, next: null }, Ou(e)) {
            if (t)
              throw Error(c(479));
          } else
            t = Qr(e, n, a, 2), t !== null && Gt(t, e, 2);
        }
        function Ou(e) {
          var t = e.alternate;
          return e === ve || t !== null && t === ve;
        }
        function qd(e, t) {
          ii = _u = true;
          var n = e.pending;
          n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
        }
        function Hd(e, t, n) {
          if ((n & 4194048) !== 0) {
            var a = t.lanes;
            a &= e.pendingLanes, n |= a, t.lanes = n, Gs(e, n);
          }
        }
        var ss = { readContext: Tt, use: Nu, useCallback: et, useContext: et, useEffect: et, useImperativeHandle: et, useLayoutEffect: et, useInsertionEffect: et, useMemo: et, useReducer: et, useRef: et, useState: et, useDebugValue: et, useDeferredValue: et, useTransition: et, useSyncExternalStore: et, useId: et, useHostTransitionStatus: et, useFormState: et, useActionState: et, useOptimistic: et, useMemoCache: et, useCacheRefresh: et };
        ss.useEffectEvent = et;
        var Ld = { readContext: Tt, use: Nu, useCallback: function(e, t) {
          return Ct().memoizedState = [e, t === void 0 ? null : t], e;
        }, useContext: Tt, useEffect: _d, useImperativeHandle: function(e, t, n) {
          n = n != null ? n.concat([e]) : null, wu(4194308, 4, Ed.bind(null, t, e), n);
        }, useLayoutEffect: function(e, t) {
          return wu(4194308, 4, e, t);
        }, useInsertionEffect: function(e, t) {
          wu(4, 2, e, t);
        }, useMemo: function(e, t) {
          var n = Ct();
          t = t === void 0 ? null : t;
          var a = e();
          if (xl) {
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
            if (xl) {
              Qt(true);
              try {
                n(t);
              } finally {
                Qt(false);
              }
            }
          } else
            l = t;
          return a.memoizedState = a.baseState = l, e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: l }, a.queue = e, e = e.dispatch = Ag.bind(null, ve, e), [a.memoizedState, e];
        }, useRef: function(e) {
          var t = Ct();
          return e = { current: e }, t.memoizedState = e;
        }, useState: function(e) {
          e = vc(e);
          var t = e.queue, n = Bd.bind(null, ve, t);
          return t.dispatch = n, [e.memoizedState, n];
        }, useDebugValue: _c, useDeferredValue: function(e, t) {
          var n = Ct();
          return Tc(n, e, t);
        }, useTransition: function() {
          var e = vc(false);
          return e = zd.bind(null, ve, e.queue, true, false), Ct().memoizedState = e, [false, e];
        }, useSyncExternalStore: function(e, t, n) {
          var a = ve, l = Ct();
          if (je) {
            if (n === void 0)
              throw Error(c(407));
            n = n();
          } else {
            if (n = t(), Qe === null)
              throw Error(c(349));
            (Ee & 127) !== 0 || sd(a, t, n);
          }
          l.memoizedState = n;
          var i = { value: n, getSnapshot: t };
          return l.queue = i, _d(rd.bind(null, a, i, e), [e]), a.flags |= 2048, ui(9, { destroy: void 0 }, ud.bind(null, a, i, n, t), null), n;
        }, useId: function() {
          var e = Ct(), t = Qe.identifierPrefix;
          if (je) {
            var n = Ln, a = Hn;
            n = (a & ~(1 << 32 - wt(a) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Tu++, 0 < n && (t += "H" + n.toString(32)), t += "_";
          } else
            n = yg++, t = "_" + t + "r_" + n.toString(32) + "_";
          return e.memoizedState = t;
        }, useHostTransitionStatus: Nc, useFormState: yd, useActionState: yd, useOptimistic: function(e) {
          var t = Ct();
          t.memoizedState = t.baseState = e;
          var n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
          return t.queue = n, t = Ec.bind(null, ve, true, n), n.dispatch = t, [e, t];
        }, useMemoCache: gc, useCacheRefresh: function() {
          return Ct().memoizedState = Tg.bind(null, ve);
        }, useEffectEvent: function(e) {
          var t = Ct(), n = { impl: e };
          return t.memoizedState = n, function() {
            if ((Me & 2) !== 0)
              throw Error(c(440));
            return n.impl.apply(void 0, arguments);
          };
        } }, wc = { readContext: Tt, use: Nu, useCallback: jd, useContext: Tt, useEffect: Sc, useImperativeHandle: wd, useInsertionEffect: Ad, useLayoutEffect: Nd, useMemo: Od, useReducer: Eu, useRef: Sd, useState: function() {
          return Eu(la);
        }, useDebugValue: _c, useDeferredValue: function(e, t) {
          var n = lt();
          return Rd(n, Ye.memoizedState, e, t);
        }, useTransition: function() {
          var e = Eu(la)[0], t = lt().memoizedState;
          return [typeof e == "boolean" ? e : ls(e), t];
        }, useSyncExternalStore: id, useId: Md, useHostTransitionStatus: Nc, useFormState: bd, useActionState: bd, useOptimistic: function(e, t) {
          var n = lt();
          return fd(n, Ye, e, t);
        }, useMemoCache: gc, useCacheRefresh: Dd };
        wc.useEffectEvent = Td;
        var Yd = { readContext: Tt, use: Nu, useCallback: jd, useContext: Tt, useEffect: Sc, useImperativeHandle: wd, useInsertionEffect: Ad, useLayoutEffect: Nd, useMemo: Od, useReducer: bc, useRef: Sd, useState: function() {
          return bc(la);
        }, useDebugValue: _c, useDeferredValue: function(e, t) {
          var n = lt();
          return Ye === null ? Tc(n, e, t) : Rd(n, Ye.memoizedState, e, t);
        }, useTransition: function() {
          var e = bc(la)[0], t = lt().memoizedState;
          return [typeof e == "boolean" ? e : ls(e), t];
        }, useSyncExternalStore: id, useId: Md, useHostTransitionStatus: Nc, useFormState: xd, useActionState: xd, useOptimistic: function(e, t) {
          var n = lt();
          return Ye !== null ? fd(n, Ye, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
        }, useMemoCache: gc, useCacheRefresh: Dd };
        Yd.useEffectEvent = Td;
        function jc(e, t, n, a) {
          t = e.memoizedState, n = n(a, t), n = n == null ? t : w({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
        }
        var Oc = { enqueueSetState: function(e, t, n) {
          e = e._reactInternals;
          var a = $t(), l = Ra(a);
          l.payload = t, n != null && (l.callback = n), t = za(e, l, a), t !== null && (Gt(t, e, a), es(t, e, a));
        }, enqueueReplaceState: function(e, t, n) {
          e = e._reactInternals;
          var a = $t(), l = Ra(a);
          l.tag = 1, l.payload = t, n != null && (l.callback = n), t = za(e, l, a), t !== null && (Gt(t, e, a), es(t, e, a));
        }, enqueueForceUpdate: function(e, t) {
          e = e._reactInternals;
          var n = $t(), a = Ra(n);
          a.tag = 2, t != null && (a.callback = t), t = za(e, a, n), t !== null && (Gt(t, e, n), es(t, e, n));
        } };
        function Gd(e, t, n, a, l, i, o) {
          return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, i, o) : t.prototype && t.prototype.isPureReactComponent ? !Zi(n, a) || !Zi(l, i) : true;
        }
        function Xd(e, t, n, a) {
          e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && Oc.enqueueReplaceState(t, t.state, null);
        }
        function Sl(e, t) {
          var n = t;
          if ("ref" in t) {
            n = {};
            for (var a in t)
              a !== "ref" && (n[a] = t[a]);
          }
          if (e = e.defaultProps) {
            n === t && (n = w({}, n));
            for (var l in e)
              n[l] === void 0 && (n[l] = e[l]);
          }
          return n;
        }
        function Qd(e) {
          uu(e);
        }
        function Vd(e) {
          console.error(e);
        }
        function kd(e) {
          uu(e);
        }
        function Ru(e, t) {
          try {
            var n = e.onUncaughtError;
            n(t.value, { componentStack: t.stack });
          } catch (a) {
            setTimeout(function() {
              throw a;
            });
          }
        }
        function Zd(e, t, n) {
          try {
            var a = e.onCaughtError;
            a(n.value, { componentStack: n.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
          } catch (l) {
            setTimeout(function() {
              throw l;
            });
          }
        }
        function Rc(e, t, n) {
          return n = Ra(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
            Ru(e, t);
          }, n;
        }
        function Kd(e) {
          return e = Ra(e), e.tag = 3, e;
        }
        function Jd(e, t, n, a) {
          var l = n.type.getDerivedStateFromError;
          if (typeof l == "function") {
            var i = a.value;
            e.payload = function() {
              return l(i);
            }, e.callback = function() {
              Zd(t, n, a);
            };
          }
          var o = n.stateNode;
          o !== null && typeof o.componentDidCatch == "function" && (e.callback = function() {
            Zd(t, n, a), typeof l != "function" && (qa === null ? qa = /* @__PURE__ */ new Set([this]) : qa.add(this));
            var b = a.stack;
            this.componentDidCatch(a.value, { componentStack: b !== null ? b : "" });
          });
        }
        function Ng(e, t, n, a, l) {
          if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
            if (t = n.alternate, t !== null && Il(t, n, l, true), n = Kt.current, n !== null) {
              switch (n.tag) {
                case 31:
                case 13:
                  return mn === null ? Xu() : n.alternate === null && tt === 0 && (tt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = l, a === yu ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), to(e, a, l)), false;
                case 22:
                  return n.flags |= 65536, a === yu ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([a]) }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), to(e, a, l)), false;
              }
              throw Error(c(435, n.tag));
            }
            return to(e, a, l), Xu(), false;
          }
          if (je)
            return t = Kt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = l, a !== Fr && (e = Error(c(422), { cause: a }), Fi(on(e, n)))) : (a !== Fr && (t = Error(c(423), { cause: a }), Fi(on(t, n))), e = e.current.alternate, e.flags |= 65536, l &= -l, e.lanes |= l, a = on(a, n), l = Rc(e.stateNode, a, l), sc(e, l), tt !== 4 && (tt = 2)), false;
          var i = Error(c(520), { cause: a });
          if (i = on(i, n), ms === null ? ms = [i] : ms.push(i), tt !== 4 && (tt = 2), t === null)
            return true;
          a = on(a, n), n = t;
          do {
            switch (n.tag) {
              case 3:
                return n.flags |= 65536, e = l & -l, n.lanes |= e, e = Rc(n.stateNode, a, e), sc(n, e), false;
              case 1:
                if (t = n.type, i = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (qa === null || !qa.has(i))))
                  return n.flags |= 65536, l &= -l, n.lanes |= l, l = Kd(l), Jd(l, e, n, a), sc(n, l), false;
            }
            n = n.return;
          } while (n !== null);
          return false;
        }
        var zc = Error(c(461)), ct = false;
        function At(e, t, n, a) {
          t.child = e === null ? Pf(t, null, n, a) : vl(t, e.child, n, a);
        }
        function Fd(e, t, n, a, l) {
          n = n.render;
          var i = t.ref;
          if ("ref" in a) {
            var o = {};
            for (var b in a)
              b !== "ref" && (o[b] = a[b]);
          } else
            o = a;
          return pl(t), a = dc(e, t, n, o, i, l), b = hc(), e !== null && !ct ? (mc(e, t, l), ia(e, t, l)) : (je && b && Kr(t), t.flags |= 1, At(e, t, a, l), t.child);
        }
        function Wd(e, t, n, a, l) {
          if (e === null) {
            var i = n.type;
            return typeof i == "function" && !Vr(i) && i.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = i, $d(e, t, i, a, l)) : (e = fu(n.type, null, a, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
          }
          if (i = e.child, !Lc(e, l)) {
            var o = i.memoizedProps;
            if (n = n.compare, n = n !== null ? n : Zi, n(o, a) && e.ref === t.ref)
              return ia(e, t, l);
          }
          return t.flags |= 1, e = In(i, a), e.ref = t.ref, e.return = t, t.child = e;
        }
        function $d(e, t, n, a, l) {
          if (e !== null) {
            var i = e.memoizedProps;
            if (Zi(i, a) && e.ref === t.ref)
              if (ct = false, t.pendingProps = a = i, Lc(e, l))
                (e.flags & 131072) !== 0 && (ct = true);
              else
                return t.lanes = e.lanes, ia(e, t, l);
          }
          return Cc(e, t, n, a, l);
        }
        function Pd(e, t, n, a) {
          var l = a.children, i = e !== null ? e.memoizedState : null;
          if (e === null && t.stateNode === null && (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), a.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
              if (i = i !== null ? i.baseLanes | n : n, e !== null) {
                for (a = t.child = e.child, l = 0; a !== null; )
                  l = l | a.lanes | a.childLanes, a = a.sibling;
                a = l & ~i;
              } else
                a = 0, t.child = null;
              return Id(e, t, i, n, a);
            }
            if ((n & 536870912) !== 0)
              t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && pu(t, i !== null ? i.cachePool : null), i !== null ? td(t, i) : rc(), nd(t);
            else
              return a = t.lanes = 536870912, Id(e, t, i !== null ? i.baseLanes | n : n, n, a);
          } else
            i !== null ? (pu(t, i.cachePool), td(t, i), Ua(), t.memoizedState = null) : (e !== null && pu(t, null), rc(), Ua());
          return At(e, t, l, n), t.child;
        }
        function us(e, t) {
          return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), t.sibling;
        }
        function Id(e, t, n, a, l) {
          var i = nc();
          return i = i === null ? null : { parent: ut._currentValue, pool: i }, t.memoizedState = { baseLanes: n, cachePool: i }, e !== null && pu(t, null), rc(), nd(t), e !== null && Il(e, t, a, true), t.childLanes = l, null;
        }
        function zu(e, t) {
          return t = Uu({ mode: t.mode, children: t.children }, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
        }
        function eh(e, t, n) {
          return vl(t, e.child, null, n), e = zu(t, t.pendingProps), e.flags |= 2, Jt(t), t.memoizedState = null, e;
        }
        function Eg(e, t, n) {
          var a = t.pendingProps, l = (t.flags & 128) !== 0;
          if (t.flags &= -129, e === null) {
            if (je) {
              if (a.mode === "hidden")
                return e = zu(t, a), t.lanes = 536870912, us(null, e);
              if (oc(t), (e = Ze) ? (e = dm(e, hn), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = { dehydrated: e, treeContext: Na !== null ? { id: Hn, overflow: Ln } : null, retryLane: 536870912, hydrationErrors: null }, n = qf(e), n.return = t, t.child = n, _t = t, Ze = null)) : e = null, e === null)
                throw wa(t);
              return t.lanes = 536870912, null;
            }
            return zu(t, a);
          }
          var i = e.memoizedState;
          if (i !== null) {
            var o = i.dehydrated;
            if (oc(t), l)
              if (t.flags & 256)
                t.flags &= -257, t = eh(e, t, n);
              else if (t.memoizedState !== null)
                t.child = e.child, t.flags |= 128, t = null;
              else
                throw Error(c(558));
            else if (ct || Il(e, t, n, false), l = (n & e.childLanes) !== 0, ct || l) {
              if (a = Qe, a !== null && (o = Xs(a, n), o !== 0 && o !== i.retryLane))
                throw i.retryLane = o, fl(e, o), Gt(a, e, o), zc;
              Xu(), t = eh(e, t, n);
            } else
              e = i.treeContext, Ze = pn(o.nextSibling), _t = t, je = true, Ea = null, hn = false, e !== null && Yf(t, e), t = zu(t, a), t.flags |= 4096;
            return t;
          }
          return e = In(e.child, { mode: a.mode, children: a.children }), e.ref = t.ref, t.child = e, e.return = t, e;
        }
        function Cu(e, t) {
          var n = t.ref;
          if (n === null)
            e !== null && e.ref !== null && (t.flags |= 4194816);
          else {
            if (typeof n != "function" && typeof n != "object")
              throw Error(c(284));
            (e === null || e.ref !== n) && (t.flags |= 4194816);
          }
        }
        function Cc(e, t, n, a, l) {
          return pl(t), n = dc(e, t, n, a, void 0, l), a = hc(), e !== null && !ct ? (mc(e, t, l), ia(e, t, l)) : (je && a && Kr(t), t.flags |= 1, At(e, t, n, l), t.child);
        }
        function th(e, t, n, a, l, i) {
          return pl(t), t.updateQueue = null, n = ld(t, a, n, l), ad(e), a = hc(), e !== null && !ct ? (mc(e, t, i), ia(e, t, i)) : (je && a && Kr(t), t.flags |= 1, At(e, t, n, i), t.child);
        }
        function nh(e, t, n, a, l) {
          if (pl(t), t.stateNode === null) {
            var i = Fl, o = n.contextType;
            typeof o == "object" && o !== null && (i = Tt(o)), i = new n(a, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Oc, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = a, i.state = t.memoizedState, i.refs = {}, lc(t), o = n.contextType, i.context = typeof o == "object" && o !== null ? Tt(o) : Fl, i.state = t.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (jc(t, n, o, a), i.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (o = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), o !== i.state && Oc.enqueueReplaceState(i, i.state, null), ns(t, a, i, l), ts(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = true;
          } else if (e === null) {
            i = t.stateNode;
            var b = t.memoizedProps, N = Sl(n, b);
            i.props = N;
            var B = i.context, Q = n.contextType;
            o = Fl, typeof Q == "object" && Q !== null && (o = Tt(Q));
            var k = n.getDerivedStateFromProps;
            Q = typeof k == "function" || typeof i.getSnapshotBeforeUpdate == "function", b = t.pendingProps !== b, Q || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (b || B !== o) && Xd(t, i, a, o), Oa = false;
            var q = t.memoizedState;
            i.state = q, ns(t, a, i, l), ts(), B = t.memoizedState, b || q !== B || Oa ? (typeof k == "function" && (jc(t, n, k, a), B = t.memoizedState), (N = Oa || Gd(t, n, N, a, q, B, o)) ? (Q || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = B), i.props = a, i.state = B, i.context = o, a = N) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = false);
          } else {
            i = t.stateNode, ic(e, t), o = t.memoizedProps, Q = Sl(n, o), i.props = Q, k = t.pendingProps, q = i.context, B = n.contextType, N = Fl, typeof B == "object" && B !== null && (N = Tt(B)), b = n.getDerivedStateFromProps, (B = typeof b == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (o !== k || q !== N) && Xd(t, i, a, N), Oa = false, q = t.memoizedState, i.state = q, ns(t, a, i, l), ts();
            var L = t.memoizedState;
            o !== k || q !== L || Oa || e !== null && e.dependencies !== null && hu(e.dependencies) ? (typeof b == "function" && (jc(t, n, b, a), L = t.memoizedState), (Q = Oa || Gd(t, n, Q, a, q, L, N) || e !== null && e.dependencies !== null && hu(e.dependencies)) ? (B || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, L, N), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(a, L, N)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || o === e.memoizedProps && q === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && q === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = L), i.props = a, i.state = L, i.context = N, a = Q) : (typeof i.componentDidUpdate != "function" || o === e.memoizedProps && q === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && q === e.memoizedState || (t.flags |= 1024), a = false);
          }
          return i = a, Cu(e, t), a = (t.flags & 128) !== 0, i || a ? (i = t.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && a ? (t.child = vl(t, e.child, null, l), t.child = vl(t, null, n, l)) : At(e, t, n, l), t.memoizedState = i.state, e = t.child) : e = ia(e, t, l), e;
        }
        function ah(e, t, n, a) {
          return hl(), t.flags |= 256, At(e, t, n, a), t.child;
        }
        var Uc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
        function Mc(e) {
          return { baseLanes: e, cachePool: Zf() };
        }
        function Dc(e, t, n) {
          return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Wt), e;
        }
        function lh(e, t, n) {
          var a = t.pendingProps, l = false, i = (t.flags & 128) !== 0, o;
          if ((o = i) || (o = e !== null && e.memoizedState === null ? false : (at.current & 2) !== 0), o && (l = true, t.flags &= -129), o = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
            if (je) {
              if (l ? Ca(t) : Ua(), (e = Ze) ? (e = dm(e, hn), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = { dehydrated: e, treeContext: Na !== null ? { id: Hn, overflow: Ln } : null, retryLane: 536870912, hydrationErrors: null }, n = qf(e), n.return = t, t.child = n, _t = t, Ze = null)) : e = null, e === null)
                throw wa(t);
              return bo(e) ? t.lanes = 32 : t.lanes = 536870912, null;
            }
            var b = a.children;
            return a = a.fallback, l ? (Ua(), l = t.mode, b = Uu({ mode: "hidden", children: b }, l), a = dl(a, l, n, null), b.return = t, a.return = t, b.sibling = a, t.child = b, a = t.child, a.memoizedState = Mc(n), a.childLanes = Dc(e, o, n), t.memoizedState = Uc, us(null, a)) : (Ca(t), Bc(t, b));
          }
          var N = e.memoizedState;
          if (N !== null && (b = N.dehydrated, b !== null)) {
            if (i)
              t.flags & 256 ? (Ca(t), t.flags &= -257, t = qc(e, t, n)) : t.memoizedState !== null ? (Ua(), t.child = e.child, t.flags |= 128, t = null) : (Ua(), b = a.fallback, l = t.mode, a = Uu({ mode: "visible", children: a.children }, l), b = dl(b, l, n, null), b.flags |= 2, a.return = t, b.return = t, a.sibling = b, t.child = a, vl(t, e.child, null, n), a = t.child, a.memoizedState = Mc(n), a.childLanes = Dc(e, o, n), t.memoizedState = Uc, t = us(null, a));
            else if (Ca(t), bo(b)) {
              if (o = b.nextSibling && b.nextSibling.dataset, o)
                var B = o.dgst;
              o = B, a = Error(c(419)), a.stack = "", a.digest = o, Fi({ value: a, source: null, stack: null }), t = qc(e, t, n);
            } else if (ct || Il(e, t, n, false), o = (n & e.childLanes) !== 0, ct || o) {
              if (o = Qe, o !== null && (a = Xs(o, n), a !== 0 && a !== N.retryLane))
                throw N.retryLane = a, fl(e, a), Gt(o, e, a), zc;
              yo(b) || Xu(), t = qc(e, t, n);
            } else
              yo(b) ? (t.flags |= 192, t.child = e.child, t = null) : (e = N.treeContext, Ze = pn(b.nextSibling), _t = t, je = true, Ea = null, hn = false, e !== null && Yf(t, e), t = Bc(t, a.children), t.flags |= 4096);
            return t;
          }
          return l ? (Ua(), b = a.fallback, l = t.mode, N = e.child, B = N.sibling, a = In(N, { mode: "hidden", children: a.children }), a.subtreeFlags = N.subtreeFlags & 65011712, B !== null ? b = In(B, b) : (b = dl(b, l, n, null), b.flags |= 2), b.return = t, a.return = t, a.sibling = b, t.child = a, us(null, a), a = t.child, b = e.child.memoizedState, b === null ? b = Mc(n) : (l = b.cachePool, l !== null ? (N = ut._currentValue, l = l.parent !== N ? { parent: N, pool: N } : l) : l = Zf(), b = { baseLanes: b.baseLanes | n, cachePool: l }), a.memoizedState = b, a.childLanes = Dc(e, o, n), t.memoizedState = Uc, us(e.child, a)) : (Ca(t), n = e.child, e = n.sibling, n = In(n, { mode: "visible", children: a.children }), n.return = t, n.sibling = null, e !== null && (o = t.deletions, o === null ? (t.deletions = [e], t.flags |= 16) : o.push(e)), t.child = n, t.memoizedState = null, n);
        }
        function Bc(e, t) {
          return t = Uu({ mode: "visible", children: t }, e.mode), t.return = e, e.child = t;
        }
        function Uu(e, t) {
          return e = Zt(22, e, null, t), e.lanes = 0, e;
        }
        function qc(e, t, n) {
          return vl(t, e.child, null, n), e = Bc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
        }
        function ih(e, t, n) {
          e.lanes |= t;
          var a = e.alternate;
          a !== null && (a.lanes |= t), Pr(e.return, t, n);
        }
        function Hc(e, t, n, a, l, i) {
          var o = e.memoizedState;
          o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: a, tail: n, tailMode: l, treeForkCount: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = a, o.tail = n, o.tailMode = l, o.treeForkCount = i);
        }
        function sh(e, t, n) {
          var a = t.pendingProps, l = a.revealOrder, i = a.tail;
          a = a.children;
          var o = at.current, b = (o & 2) !== 0;
          if (b ? (o = o & 1 | 2, t.flags |= 128) : o &= 1, z(at, o), At(e, t, a, n), a = je ? Ji : 0, !b && e !== null && (e.flags & 128) !== 0)
            e:
              for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                  e.memoizedState !== null && ih(e, n, t);
                else if (e.tag === 19)
                  ih(e, n, t);
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
                e = n.alternate, e !== null && Su(e) === null && (l = n), n = n.sibling;
              n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Hc(t, false, l, n, i, a);
              break;
            case "backwards":
            case "unstable_legacy-backwards":
              for (n = null, l = t.child, t.child = null; l !== null; ) {
                if (e = l.alternate, e !== null && Su(e) === null) {
                  t.child = l;
                  break;
                }
                e = l.sibling, l.sibling = n, n = l, l = e;
              }
              Hc(t, true, n, null, i, a);
              break;
            case "together":
              Hc(t, false, null, null, void 0, a);
              break;
            default:
              t.memoizedState = null;
          }
          return t.child;
        }
        function ia(e, t, n) {
          if (e !== null && (t.dependencies = e.dependencies), Ba |= t.lanes, (n & t.childLanes) === 0)
            if (e !== null) {
              if (Il(e, t, n, false), (n & t.childLanes) === 0)
                return null;
            } else
              return null;
          if (e !== null && t.child !== e.child)
            throw Error(c(153));
          if (t.child !== null) {
            for (e = t.child, n = In(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
              e = e.sibling, n = n.sibling = In(e, e.pendingProps), n.return = t;
            n.sibling = null;
          }
          return t.child;
        }
        function Lc(e, t) {
          return (e.lanes & t) !== 0 ? true : (e = e.dependencies, !!(e !== null && hu(e)));
        }
        function wg(e, t, n) {
          switch (t.tag) {
            case 3:
              Fe(t, t.stateNode.containerInfo), ja(t, ut, e.memoizedState.cache), hl();
              break;
            case 27:
            case 5:
              bn(t);
              break;
            case 4:
              Fe(t, t.stateNode.containerInfo);
              break;
            case 10:
              ja(t, t.type, t.memoizedProps.value);
              break;
            case 31:
              if (t.memoizedState !== null)
                return t.flags |= 128, oc(t), null;
              break;
            case 13:
              var a = t.memoizedState;
              if (a !== null)
                return a.dehydrated !== null ? (Ca(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? lh(e, t, n) : (Ca(t), e = ia(e, t, n), e !== null ? e.sibling : null);
              Ca(t);
              break;
            case 19:
              var l = (e.flags & 128) !== 0;
              if (a = (n & t.childLanes) !== 0, a || (Il(e, t, n, false), a = (n & t.childLanes) !== 0), l) {
                if (a)
                  return sh(e, t, n);
                t.flags |= 128;
              }
              if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), z(at, at.current), a)
                break;
              return null;
            case 22:
              return t.lanes = 0, Pd(e, t, n, t.pendingProps);
            case 24:
              ja(t, ut, e.memoizedState.cache);
          }
          return ia(e, t, n);
        }
        function uh(e, t, n) {
          if (e !== null)
            if (e.memoizedProps !== t.pendingProps)
              ct = true;
            else {
              if (!Lc(e, n) && (t.flags & 128) === 0)
                return ct = false, wg(e, t, n);
              ct = (e.flags & 131072) !== 0;
            }
          else
            ct = false, je && (t.flags & 1048576) !== 0 && Lf(t, Ji, t.index);
          switch (t.lanes = 0, t.tag) {
            case 16:
              e: {
                var a = t.pendingProps;
                if (e = yl(t.elementType), t.type = e, typeof e == "function")
                  Vr(e) ? (a = Sl(e, a), t.tag = 1, t = nh(null, t, e, a, n)) : (t.tag = 0, t = Cc(null, t, e, a, n));
                else {
                  if (e != null) {
                    var l = e.$$typeof;
                    if (l === _e) {
                      t.tag = 11, t = Fd(null, t, e, a, n);
                      break e;
                    } else if (l === me) {
                      t.tag = 14, t = Wd(null, t, e, a, n);
                      break e;
                    }
                  }
                  throw t = ze(e) || e, Error(c(306, t, ""));
                }
              }
              return t;
            case 0:
              return Cc(e, t, t.type, t.pendingProps, n);
            case 1:
              return a = t.type, l = Sl(a, t.pendingProps), nh(e, t, a, l, n);
            case 3:
              e: {
                if (Fe(t, t.stateNode.containerInfo), e === null)
                  throw Error(c(387));
                a = t.pendingProps;
                var i = t.memoizedState;
                l = i.element, ic(e, t), ns(t, a, null, n);
                var o = t.memoizedState;
                if (a = o.cache, ja(t, ut, a), a !== i.cache && Ir(t, [ut], n, true), ts(), a = o.element, i.isDehydrated)
                  if (i = { element: a, isDehydrated: false, cache: o.cache }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                    t = ah(e, t, a, n);
                    break e;
                  } else if (a !== l) {
                    l = on(Error(c(424)), t), Fi(l), t = ah(e, t, a, n);
                    break e;
                  } else {
                    switch (e = t.stateNode.containerInfo, e.nodeType) {
                      case 9:
                        e = e.body;
                        break;
                      default:
                        e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                    }
                    for (Ze = pn(e.firstChild), _t = t, je = true, Ea = null, hn = true, n = Pf(t, null, a, n), t.child = n; n; )
                      n.flags = n.flags & -3 | 4096, n = n.sibling;
                  }
                else {
                  if (hl(), a === l) {
                    t = ia(e, t, n);
                    break e;
                  }
                  At(e, t, a, n);
                }
                t = t.child;
              }
              return t;
            case 26:
              return Cu(e, t), e === null ? (n = bm(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : je || (n = t.type, e = t.pendingProps, a = Fu($.current).createElement(n), a[dt] = t, a[yt] = e, Nt(a, n, e), $e(a), t.stateNode = a) : t.memoizedState = bm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
            case 27:
              return bn(t), e === null && je && (a = t.stateNode = pm(t.type, t.pendingProps, $.current), _t = t, hn = true, l = Ze, Ga(t.type) ? (vo = l, Ze = pn(a.firstChild)) : Ze = l), At(e, t, t.pendingProps.children, n), Cu(e, t), e === null && (t.flags |= 4194304), t.child;
            case 5:
              return e === null && je && ((l = a = Ze) && (a = a0(a, t.type, t.pendingProps, hn), a !== null ? (t.stateNode = a, _t = t, Ze = pn(a.firstChild), hn = false, l = true) : l = false), l || wa(t)), bn(t), l = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, a = i.children, mo(l, i) ? a = null : o !== null && mo(l, o) && (t.flags |= 32), t.memoizedState !== null && (l = dc(e, t, bg, null, null, n), _s._currentValue = l), Cu(e, t), At(e, t, a, n), t.child;
            case 6:
              return e === null && je && ((e = n = Ze) && (n = l0(n, t.pendingProps, hn), n !== null ? (t.stateNode = n, _t = t, Ze = null, e = true) : e = false), e || wa(t)), null;
            case 13:
              return lh(e, t, n);
            case 4:
              return Fe(t, t.stateNode.containerInfo), a = t.pendingProps, e === null ? t.child = vl(t, null, a, n) : At(e, t, a, n), t.child;
            case 11:
              return Fd(e, t, t.type, t.pendingProps, n);
            case 7:
              return At(e, t, t.pendingProps, n), t.child;
            case 8:
              return At(e, t, t.pendingProps.children, n), t.child;
            case 12:
              return At(e, t, t.pendingProps.children, n), t.child;
            case 10:
              return a = t.pendingProps, ja(t, t.type, a.value), At(e, t, a.children, n), t.child;
            case 9:
              return l = t.type._context, a = t.pendingProps.children, pl(t), l = Tt(l), a = a(l), t.flags |= 1, At(e, t, a, n), t.child;
            case 14:
              return Wd(e, t, t.type, t.pendingProps, n);
            case 15:
              return $d(e, t, t.type, t.pendingProps, n);
            case 19:
              return sh(e, t, n);
            case 31:
              return Eg(e, t, n);
            case 22:
              return Pd(e, t, n, t.pendingProps);
            case 24:
              return pl(t), a = Tt(ut), e === null ? (l = nc(), l === null && (l = Qe, i = ec(), l.pooledCache = i, i.refCount++, i !== null && (l.pooledCacheLanes |= n), l = i), t.memoizedState = { parent: a, cache: l }, lc(t), ja(t, ut, l)) : ((e.lanes & n) !== 0 && (ic(e, t), ns(t, null, null, n), ts()), l = e.memoizedState, i = t.memoizedState, l.parent !== a ? (l = { parent: a, cache: a }, t.memoizedState = l, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = l), ja(t, ut, a)) : (a = i.cache, ja(t, ut, a), a !== l.cache && Ir(t, [ut], n, true))), At(e, t, t.pendingProps.children, n), t.child;
            case 29:
              throw t.pendingProps;
          }
          throw Error(c(156, t.tag));
        }
        function sa(e) {
          e.flags |= 4;
        }
        function Yc(e, t, n, a, l) {
          if ((t = (e.mode & 32) !== 0) && (t = false), t) {
            if (e.flags |= 16777216, (l & 335544128) === l)
              if (e.stateNode.complete)
                e.flags |= 8192;
              else if (Mh())
                e.flags |= 8192;
              else
                throw bl = yu, ac;
          } else
            e.flags &= -16777217;
        }
        function rh(e, t) {
          if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
            e.flags &= -16777217;
          else if (e.flags |= 16777216, !Tm(t))
            if (Mh())
              e.flags |= 8192;
            else
              throw bl = yu, ac;
        }
        function Mu(e, t) {
          t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Ls() : 536870912, e.lanes |= t, fi |= t);
        }
        function rs(e, t) {
          if (!je)
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
        function jg(e, t, n) {
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
              return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), na(ut), Se(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Pl(t) ? sa(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Wr())), Ke(t), null;
            case 26:
              var l = t.type, i = t.memoizedState;
              return e === null ? (sa(t), i !== null ? (Ke(t), rh(t, i)) : (Ke(t), Yc(t, l, null, a, n))) : i ? i !== e.memoizedState ? (sa(t), Ke(t), rh(t, i)) : (Ke(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && sa(t), Ke(t), Yc(t, l, e, a, n)), null;
            case 27:
              if (Ut(t), n = $.current, l = t.type, e !== null && t.stateNode != null)
                e.memoizedProps !== a && sa(t);
              else {
                if (!a) {
                  if (t.stateNode === null)
                    throw Error(c(166));
                  return Ke(t), null;
                }
                e = Z.current, Pl(t) ? Gf(t) : (e = pm(l, a, n), t.stateNode = e, sa(t));
              }
              return Ke(t), null;
            case 5:
              if (Ut(t), l = t.type, e !== null && t.stateNode != null)
                e.memoizedProps !== a && sa(t);
              else {
                if (!a) {
                  if (t.stateNode === null)
                    throw Error(c(166));
                  return Ke(t), null;
                }
                if (i = Z.current, Pl(t))
                  Gf(t);
                else {
                  var o = Fu($.current);
                  switch (i) {
                    case 1:
                      i = o.createElementNS("http://www.w3.org/2000/svg", l);
                      break;
                    case 2:
                      i = o.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                      break;
                    default:
                      switch (l) {
                        case "svg":
                          i = o.createElementNS("http://www.w3.org/2000/svg", l);
                          break;
                        case "math":
                          i = o.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                          break;
                        case "script":
                          i = o.createElement("div"), i.innerHTML = "<script><\/script>", i = i.removeChild(i.firstChild);
                          break;
                        case "select":
                          i = typeof a.is == "string" ? o.createElement("select", { is: a.is }) : o.createElement("select"), a.multiple ? i.multiple = true : a.size && (i.size = a.size);
                          break;
                        default:
                          i = typeof a.is == "string" ? o.createElement(l, { is: a.is }) : o.createElement(l);
                      }
                  }
                  i[dt] = t, i[yt] = a;
                  e:
                    for (o = t.child; o !== null; ) {
                      if (o.tag === 5 || o.tag === 6)
                        i.appendChild(o.stateNode);
                      else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                        o.child.return = o, o = o.child;
                        continue;
                      }
                      if (o === t)
                        break e;
                      for (; o.sibling === null; ) {
                        if (o.return === null || o.return === t)
                          break e;
                        o = o.return;
                      }
                      o.sibling.return = o.return, o = o.sibling;
                    }
                  t.stateNode = i;
                  e:
                    switch (Nt(i, l, a), l) {
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
                  a && sa(t);
                }
              }
              return Ke(t), Yc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
            case 6:
              if (e && t.stateNode != null)
                e.memoizedProps !== a && sa(t);
              else {
                if (typeof a != "string" && t.stateNode === null)
                  throw Error(c(166));
                if (e = $.current, Pl(t)) {
                  if (e = t.stateNode, n = t.memoizedProps, a = null, l = _t, l !== null)
                    switch (l.tag) {
                      case 27:
                      case 5:
                        a = l.memoizedProps;
                    }
                  e[dt] = t, e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === true || lm(e.nodeValue, n)), e || wa(t, true);
                } else
                  e = Fu(e).createTextNode(a), e[dt] = t, t.stateNode = e;
              }
              return Ke(t), null;
            case 31:
              if (n = t.memoizedState, e === null || e.memoizedState !== null) {
                if (a = Pl(t), n !== null) {
                  if (e === null) {
                    if (!a)
                      throw Error(c(318));
                    if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e)
                      throw Error(c(557));
                    e[dt] = t;
                  } else
                    hl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                  Ke(t), e = false;
                } else
                  n = Wr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = true;
                if (!e)
                  return t.flags & 256 ? (Jt(t), t) : (Jt(t), null);
                if ((t.flags & 128) !== 0)
                  throw Error(c(558));
              }
              return Ke(t), null;
            case 13:
              if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (l = Pl(t), a !== null && a.dehydrated !== null) {
                  if (e === null) {
                    if (!l)
                      throw Error(c(318));
                    if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l)
                      throw Error(c(317));
                    l[dt] = t;
                  } else
                    hl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                  Ke(t), l = false;
                } else
                  l = Wr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), l = true;
                if (!l)
                  return t.flags & 256 ? (Jt(t), t) : (Jt(t), null);
              }
              return Jt(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = a !== null, e = e !== null && e.memoizedState !== null, n && (a = t.child, l = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (l = a.alternate.memoizedState.cachePool.pool), i = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool), i !== l && (a.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), Mu(t, t.updateQueue), Ke(t), null);
            case 4:
              return Se(), e === null && ro(t.stateNode.containerInfo), Ke(t), null;
            case 10:
              return na(t.type), Ke(t), null;
            case 19:
              if (X(at), a = t.memoizedState, a === null)
                return Ke(t), null;
              if (l = (t.flags & 128) !== 0, i = a.rendering, i === null)
                if (l)
                  rs(a, false);
                else {
                  if (tt !== 0 || e !== null && (e.flags & 128) !== 0)
                    for (e = t.child; e !== null; ) {
                      if (i = Su(e), i !== null) {
                        for (t.flags |= 128, rs(a, false), e = i.updateQueue, t.updateQueue = e, Mu(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                          Bf(n, e), n = n.sibling;
                        return z(at, at.current & 1 | 2), je && ea(t, a.treeForkCount), t.child;
                      }
                      e = e.sibling;
                    }
                  a.tail !== null && Ot() > Lu && (t.flags |= 128, l = true, rs(a, false), t.lanes = 4194304);
                }
              else {
                if (!l)
                  if (e = Su(i), e !== null) {
                    if (t.flags |= 128, l = true, e = e.updateQueue, t.updateQueue = e, Mu(t, e), rs(a, true), a.tail === null && a.tailMode === "hidden" && !i.alternate && !je)
                      return Ke(t), null;
                  } else
                    2 * Ot() - a.renderingStartTime > Lu && n !== 536870912 && (t.flags |= 128, l = true, rs(a, false), t.lanes = 4194304);
                a.isBackwards ? (i.sibling = t.child, t.child = i) : (e = a.last, e !== null ? e.sibling = i : t.child = i, a.last = i);
              }
              return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = Ot(), e.sibling = null, n = at.current, z(at, l ? n & 1 | 2 : n & 1), je && ea(t, a.treeForkCount), e) : (Ke(t), null);
            case 22:
            case 23:
              return Jt(t), cc(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ke(t), n = t.updateQueue, n !== null && Mu(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), e !== null && X(gl), null;
            case 24:
              return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), na(ut), Ke(t), null;
            case 25:
              return null;
            case 30:
              return null;
          }
          throw Error(c(156, t.tag));
        }
        function Og(e, t) {
          switch (Jr(t), t.tag) {
            case 1:
              return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
              return na(ut), Se(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
            case 26:
            case 27:
            case 5:
              return Ut(t), null;
            case 31:
              if (t.memoizedState !== null) {
                if (Jt(t), t.alternate === null)
                  throw Error(c(340));
                hl();
              }
              return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 13:
              if (Jt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                  throw Error(c(340));
                hl();
              }
              return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
              return X(at), null;
            case 4:
              return Se(), null;
            case 10:
              return na(t.type), null;
            case 22:
            case 23:
              return Jt(t), cc(), e !== null && X(gl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 24:
              return na(ut), null;
            case 25:
              return null;
            default:
              return null;
          }
        }
        function ch(e, t) {
          switch (Jr(t), t.tag) {
            case 3:
              na(ut), Se();
              break;
            case 26:
            case 27:
            case 5:
              Ut(t);
              break;
            case 4:
              Se();
              break;
            case 31:
              t.memoizedState !== null && Jt(t);
              break;
            case 13:
              Jt(t);
              break;
            case 19:
              X(at);
              break;
            case 10:
              na(t.type);
              break;
            case 22:
            case 23:
              Jt(t), cc(), e !== null && X(gl);
              break;
            case 24:
              na(ut);
          }
        }
        function cs(e, t) {
          try {
            var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
            if (a !== null) {
              var l = a.next;
              n = l;
              do {
                if ((n.tag & e) === e) {
                  a = void 0;
                  var i = n.create, o = n.inst;
                  a = i(), o.destroy = a;
                }
                n = n.next;
              } while (n !== l);
            }
          } catch (b) {
            He(t, t.return, b);
          }
        }
        function Ma(e, t, n) {
          try {
            var a = t.updateQueue, l = a !== null ? a.lastEffect : null;
            if (l !== null) {
              var i = l.next;
              a = i;
              do {
                if ((a.tag & e) === e) {
                  var o = a.inst, b = o.destroy;
                  if (b !== void 0) {
                    o.destroy = void 0, l = t;
                    var N = n, B = b;
                    try {
                      B();
                    } catch (Q) {
                      He(l, N, Q);
                    }
                  }
                }
                a = a.next;
              } while (a !== i);
            }
          } catch (Q) {
            He(t, t.return, Q);
          }
        }
        function oh(e) {
          var t = e.updateQueue;
          if (t !== null) {
            var n = e.stateNode;
            try {
              ed(t, n);
            } catch (a) {
              He(e, e.return, a);
            }
          }
        }
        function fh(e, t, n) {
          n.props = Sl(e.type, e.memoizedProps), n.state = e.memoizedState;
          try {
            n.componentWillUnmount();
          } catch (a) {
            He(e, t, a);
          }
        }
        function os(e, t) {
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
            He(e, t, l);
          }
        }
        function Yn(e, t) {
          var n = e.ref, a = e.refCleanup;
          if (n !== null)
            if (typeof a == "function")
              try {
                a();
              } catch (l) {
                He(e, t, l);
              } finally {
                e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
              }
            else if (typeof n == "function")
              try {
                n(null);
              } catch (l) {
                He(e, t, l);
              }
            else
              n.current = null;
        }
        function dh(e) {
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
            He(e, e.return, l);
          }
        }
        function Gc(e, t, n) {
          try {
            var a = e.stateNode;
            $g(a, e.type, n, t), a[yt] = t;
          } catch (l) {
            He(e, e.return, l);
          }
        }
        function hh(e) {
          return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ga(e.type) || e.tag === 4;
        }
        function Xc(e) {
          e:
            for (; ; ) {
              for (; e.sibling === null; ) {
                if (e.return === null || hh(e.return))
                  return null;
                e = e.return;
              }
              for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if (e.tag === 27 && Ga(e.type) || e.flags & 2 || e.child === null || e.tag === 4)
                  continue e;
                e.child.return = e, e = e.child;
              }
              if (!(e.flags & 2))
                return e.stateNode;
            }
        }
        function Qc(e, t, n) {
          var a = e.tag;
          if (a === 5 || a === 6)
            e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = nn));
          else if (a !== 4 && (a === 27 && Ga(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
            for (Qc(e, t, n), e = e.sibling; e !== null; )
              Qc(e, t, n), e = e.sibling;
        }
        function Du(e, t, n) {
          var a = e.tag;
          if (a === 5 || a === 6)
            e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (a !== 4 && (a === 27 && Ga(e.type) && (n = e.stateNode), e = e.child, e !== null))
            for (Du(e, t, n), e = e.sibling; e !== null; )
              Du(e, t, n), e = e.sibling;
        }
        function mh(e) {
          var t = e.stateNode, n = e.memoizedProps;
          try {
            for (var a = e.type, l = t.attributes; l.length; )
              t.removeAttributeNode(l[0]);
            Nt(t, a, n), t[dt] = e, t[yt] = n;
          } catch (i) {
            He(e, e.return, i);
          }
        }
        var ua = false, ot = false, Vc = false, ph = typeof WeakSet == "function" ? WeakSet : Set, xt = null;
        function Rg(e, t) {
          if (e = e.containerInfo, fo = nr, e = wf(e), qr(e)) {
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
                  } catch (fe) {
                    n = null;
                    break e;
                  }
                  var o = 0, b = -1, N = -1, B = 0, Q = 0, k = e, q = null;
                  t:
                    for (; ; ) {
                      for (var L; k !== n || l !== 0 && k.nodeType !== 3 || (b = o + l), k !== i || a !== 0 && k.nodeType !== 3 || (N = o + a), k.nodeType === 3 && (o += k.nodeValue.length), (L = k.firstChild) !== null; )
                        q = k, k = L;
                      for (; ; ) {
                        if (k === e)
                          break t;
                        if (q === n && ++B === l && (b = o), q === i && ++Q === a && (N = o), (L = k.nextSibling) !== null)
                          break;
                        k = q, q = k.parentNode;
                      }
                      k = L;
                    }
                  n = b === -1 || N === -1 ? null : { start: b, end: N };
                } else
                  n = null;
              }
            n = n || { start: 0, end: 0 };
          } else
            n = null;
          for (ho = { focusedElem: e, selectionRange: n }, nr = false, xt = t; xt !== null; )
            if (t = xt, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
              e.return = t, xt = e;
            else
              for (; xt !== null; ) {
                switch (t = xt, i = t.alternate, e = t.flags, t.tag) {
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
                        var ae = Sl(n.type, l);
                        e = a.getSnapshotBeforeUpdate(ae, i), a.__reactInternalSnapshotBeforeUpdate = e;
                      } catch (fe) {
                        He(n, n.return, fe);
                      }
                    }
                    break;
                  case 3:
                    if ((e & 1024) !== 0) {
                      if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9)
                        go(e);
                      else if (n === 1)
                        switch (e.nodeName) {
                          case "HEAD":
                          case "HTML":
                          case "BODY":
                            go(e);
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
                      throw Error(c(163));
                }
                if (e = t.sibling, e !== null) {
                  e.return = t.return, xt = e;
                  break;
                }
                xt = t.return;
              }
        }
        function gh(e, t, n) {
          var a = n.flags;
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              ca(e, n), a & 4 && cs(5, n);
              break;
            case 1:
              if (ca(e, n), a & 4)
                if (e = n.stateNode, t === null)
                  try {
                    e.componentDidMount();
                  } catch (o) {
                    He(n, n.return, o);
                  }
                else {
                  var l = Sl(n.type, t.memoizedProps);
                  t = t.memoizedState;
                  try {
                    e.componentDidUpdate(l, t, e.__reactInternalSnapshotBeforeUpdate);
                  } catch (o) {
                    He(n, n.return, o);
                  }
                }
              a & 64 && oh(n), a & 512 && os(n, n.return);
              break;
            case 3:
              if (ca(e, n), a & 64 && (e = n.updateQueue, e !== null)) {
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
                  ed(e, t);
                } catch (o) {
                  He(n, n.return, o);
                }
              }
              break;
            case 27:
              t === null && a & 4 && mh(n);
            case 26:
            case 5:
              ca(e, n), t === null && a & 4 && dh(n), a & 512 && os(n, n.return);
              break;
            case 12:
              ca(e, n);
              break;
            case 31:
              ca(e, n), a & 4 && vh(e, n);
              break;
            case 13:
              ca(e, n), a & 4 && xh(e, n), a & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Lg.bind(null, n), i0(e, n))));
              break;
            case 22:
              if (a = n.memoizedState !== null || ua, !a) {
                t = t !== null && t.memoizedState !== null || ot, l = ua;
                var i = ot;
                ua = a, (ot = t) && !i ? oa(e, n, (n.subtreeFlags & 8772) !== 0) : ca(e, n), ua = l, ot = i;
              }
              break;
            case 30:
              break;
            default:
              ca(e, n);
          }
        }
        function yh(e) {
          var t = e.alternate;
          t !== null && (e.alternate = null, yh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Ui(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
        }
        var We = null, qt = false;
        function ra(e, t, n) {
          for (n = n.child; n !== null; )
            bh(e, t, n), n = n.sibling;
        }
        function bh(e, t, n) {
          if (Rt && typeof Rt.onCommitFiberUnmount == "function")
            try {
              Rt.onCommitFiberUnmount($a, n);
            } catch (i) {
            }
          switch (n.tag) {
            case 26:
              ot || Yn(n, t), ra(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
              break;
            case 27:
              ot || Yn(n, t);
              var a = We, l = qt;
              Ga(n.type) && (We = n.stateNode, qt = false), ra(e, t, n), vs(n.stateNode), We = a, qt = l;
              break;
            case 5:
              ot || Yn(n, t);
            case 6:
              if (a = We, l = qt, We = null, ra(e, t, n), We = a, qt = l, We !== null)
                if (qt)
                  try {
                    (We.nodeType === 9 ? We.body : We.nodeName === "HTML" ? We.ownerDocument.body : We).removeChild(n.stateNode);
                  } catch (i) {
                    He(n, t, i);
                  }
                else
                  try {
                    We.removeChild(n.stateNode);
                  } catch (i) {
                    He(n, t, i);
                  }
              break;
            case 18:
              We !== null && (qt ? (e = We, om(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), vi(e)) : om(We, n.stateNode));
              break;
            case 4:
              a = We, l = qt, We = n.stateNode.containerInfo, qt = true, ra(e, t, n), We = a, qt = l;
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              Ma(2, n, t), ot || Ma(4, n, t), ra(e, t, n);
              break;
            case 1:
              ot || (Yn(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function" && fh(n, t, a)), ra(e, t, n);
              break;
            case 21:
              ra(e, t, n);
              break;
            case 22:
              ot = (a = ot) || n.memoizedState !== null, ra(e, t, n), ot = a;
              break;
            default:
              ra(e, t, n);
          }
        }
        function vh(e, t) {
          if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
            e = e.dehydrated;
            try {
              vi(e);
            } catch (n) {
              He(t, t.return, n);
            }
          }
        }
        function xh(e, t) {
          if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
            try {
              vi(e);
            } catch (n) {
              He(t, t.return, n);
            }
        }
        function zg(e) {
          switch (e.tag) {
            case 31:
            case 13:
            case 19:
              var t = e.stateNode;
              return t === null && (t = e.stateNode = new ph()), t;
            case 22:
              return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new ph()), t;
            default:
              throw Error(c(435, e.tag));
          }
        }
        function Bu(e, t) {
          var n = zg(e);
          t.forEach(function(a) {
            if (!n.has(a)) {
              n.add(a);
              var l = Yg.bind(null, e, a);
              a.then(l, l);
            }
          });
        }
        function Ht(e, t) {
          var n = t.deletions;
          if (n !== null)
            for (var a = 0; a < n.length; a++) {
              var l = n[a], i = e, o = t, b = o;
              e:
                for (; b !== null; ) {
                  switch (b.tag) {
                    case 27:
                      if (Ga(b.type)) {
                        We = b.stateNode, qt = false;
                        break e;
                      }
                      break;
                    case 5:
                      We = b.stateNode, qt = false;
                      break e;
                    case 3:
                    case 4:
                      We = b.stateNode.containerInfo, qt = true;
                      break e;
                  }
                  b = b.return;
                }
              if (We === null)
                throw Error(c(160));
              bh(i, o, l), We = null, qt = false, i = l.alternate, i !== null && (i.return = null), l.return = null;
            }
          if (t.subtreeFlags & 13886)
            for (t = t.child; t !== null; )
              Sh(t, e), t = t.sibling;
        }
        var _n = null;
        function Sh(e, t) {
          var n = e.alternate, a = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              Ht(t, e), Lt(e), a & 4 && (Ma(3, e, e.return), cs(3, e), Ma(5, e, e.return));
              break;
            case 1:
              Ht(t, e), Lt(e), a & 512 && (ot || n === null || Yn(n, n.return)), a & 64 && ua && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
              break;
            case 26:
              var l = _n;
              if (Ht(t, e), Lt(e), a & 512 && (ot || n === null || Yn(n, n.return)), a & 4) {
                var i = n !== null ? n.memoizedState : null;
                if (a = e.memoizedState, n === null)
                  if (a === null)
                    if (e.stateNode === null) {
                      e: {
                        a = e.type, n = e.memoizedProps, l = l.ownerDocument || l;
                        t:
                          switch (a) {
                            case "title":
                              i = l.getElementsByTagName("title")[0], (!i || i[Cn] || i[dt] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = l.createElement(a), l.head.insertBefore(i, l.querySelector("head > title"))), Nt(i, a, n), i[dt] = e, $e(i), a = i;
                              break e;
                            case "link":
                              var o = Sm("link", "href", l).get(a + (n.href || ""));
                              if (o) {
                                for (var b = 0; b < o.length; b++)
                                  if (i = o[b], i.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && i.getAttribute("rel") === (n.rel == null ? null : n.rel) && i.getAttribute("title") === (n.title == null ? null : n.title) && i.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                                    o.splice(b, 1);
                                    break t;
                                  }
                              }
                              i = l.createElement(a), Nt(i, a, n), l.head.appendChild(i);
                              break;
                            case "meta":
                              if (o = Sm("meta", "content", l).get(a + (n.content || ""))) {
                                for (b = 0; b < o.length; b++)
                                  if (i = o[b], i.getAttribute("content") === (n.content == null ? null : "" + n.content) && i.getAttribute("name") === (n.name == null ? null : n.name) && i.getAttribute("property") === (n.property == null ? null : n.property) && i.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && i.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                                    o.splice(b, 1);
                                    break t;
                                  }
                              }
                              i = l.createElement(a), Nt(i, a, n), l.head.appendChild(i);
                              break;
                            default:
                              throw Error(c(468, a));
                          }
                        i[dt] = e, $e(i), a = i;
                      }
                      e.stateNode = a;
                    } else
                      _m(l, e.type, e.stateNode);
                  else
                    e.stateNode = xm(l, a, e.memoizedProps);
                else
                  i !== a ? (i === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : i.count--, a === null ? _m(l, e.type, e.stateNode) : xm(l, a, e.memoizedProps)) : a === null && e.stateNode !== null && Gc(e, e.memoizedProps, n.memoizedProps);
              }
              break;
            case 27:
              Ht(t, e), Lt(e), a & 512 && (ot || n === null || Yn(n, n.return)), n !== null && a & 4 && Gc(e, e.memoizedProps, n.memoizedProps);
              break;
            case 5:
              if (Ht(t, e), Lt(e), a & 512 && (ot || n === null || Yn(n, n.return)), e.flags & 32) {
                l = e.stateNode;
                try {
                  Kn(l, "");
                } catch (ae) {
                  He(e, e.return, ae);
                }
              }
              a & 4 && e.stateNode != null && (l = e.memoizedProps, Gc(e, l, n !== null ? n.memoizedProps : l)), a & 1024 && (Vc = true);
              break;
            case 6:
              if (Ht(t, e), Lt(e), a & 4) {
                if (e.stateNode === null)
                  throw Error(c(162));
                a = e.memoizedProps, n = e.stateNode;
                try {
                  n.nodeValue = a;
                } catch (ae) {
                  He(e, e.return, ae);
                }
              }
              break;
            case 3:
              if (Pu = null, l = _n, _n = Wu(t.containerInfo), Ht(t, e), _n = l, Lt(e), a & 4 && n !== null && n.memoizedState.isDehydrated)
                try {
                  vi(t.containerInfo);
                } catch (ae) {
                  He(e, e.return, ae);
                }
              Vc && (Vc = false, _h(e));
              break;
            case 4:
              a = _n, _n = Wu(e.stateNode.containerInfo), Ht(t, e), Lt(e), _n = a;
              break;
            case 12:
              Ht(t, e), Lt(e);
              break;
            case 31:
              Ht(t, e), Lt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Bu(e, a)));
              break;
            case 13:
              Ht(t, e), Lt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Hu = Ot()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Bu(e, a)));
              break;
            case 22:
              l = e.memoizedState !== null;
              var N = n !== null && n.memoizedState !== null, B = ua, Q = ot;
              if (ua = B || l, ot = Q || N, Ht(t, e), ot = Q, ua = B, Lt(e), a & 8192)
                e:
                  for (t = e.stateNode, t._visibility = l ? t._visibility & -2 : t._visibility | 1, l && (n === null || N || ua || ot || _l(e)), n = null, t = e; ; ) {
                    if (t.tag === 5 || t.tag === 26) {
                      if (n === null) {
                        N = n = t;
                        try {
                          if (i = N.stateNode, l)
                            o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none";
                          else {
                            b = N.stateNode;
                            var k = N.memoizedProps.style, q = k != null && k.hasOwnProperty("display") ? k.display : null;
                            b.style.display = q == null || typeof q == "boolean" ? "" : ("" + q).trim();
                          }
                        } catch (ae) {
                          He(N, N.return, ae);
                        }
                      }
                    } else if (t.tag === 6) {
                      if (n === null) {
                        N = t;
                        try {
                          N.stateNode.nodeValue = l ? "" : N.memoizedProps;
                        } catch (ae) {
                          He(N, N.return, ae);
                        }
                      }
                    } else if (t.tag === 18) {
                      if (n === null) {
                        N = t;
                        try {
                          var L = N.stateNode;
                          l ? fm(L, true) : fm(N.stateNode, false);
                        } catch (ae) {
                          He(N, N.return, ae);
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
              a & 4 && (a = e.updateQueue, a !== null && (n = a.retryQueue, n !== null && (a.retryQueue = null, Bu(e, n))));
              break;
            case 19:
              Ht(t, e), Lt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Bu(e, a)));
              break;
            case 30:
              break;
            case 21:
              break;
            default:
              Ht(t, e), Lt(e);
          }
        }
        function Lt(e) {
          var t = e.flags;
          if (t & 2) {
            try {
              for (var n, a = e.return; a !== null; ) {
                if (hh(a)) {
                  n = a;
                  break;
                }
                a = a.return;
              }
              if (n == null)
                throw Error(c(160));
              switch (n.tag) {
                case 27:
                  var l = n.stateNode, i = Xc(e);
                  Du(e, i, l);
                  break;
                case 5:
                  var o = n.stateNode;
                  n.flags & 32 && (Kn(o, ""), n.flags &= -33);
                  var b = Xc(e);
                  Du(e, b, o);
                  break;
                case 3:
                case 4:
                  var N = n.stateNode.containerInfo, B = Xc(e);
                  Qc(e, B, N);
                  break;
                default:
                  throw Error(c(161));
              }
            } catch (Q) {
              He(e, e.return, Q);
            }
            e.flags &= -3;
          }
          t & 4096 && (e.flags &= -4097);
        }
        function _h(e) {
          if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null; ) {
              var t = e;
              _h(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
            }
        }
        function ca(e, t) {
          if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null; )
              gh(e, t.alternate, t), t = t.sibling;
        }
        function _l(e) {
          for (e = e.child; e !== null; ) {
            var t = e;
            switch (t.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Ma(4, t, t.return), _l(t);
                break;
              case 1:
                Yn(t, t.return);
                var n = t.stateNode;
                typeof n.componentWillUnmount == "function" && fh(t, t.return, n), _l(t);
                break;
              case 27:
                vs(t.stateNode);
              case 26:
              case 5:
                Yn(t, t.return), _l(t);
                break;
              case 22:
                t.memoizedState === null && _l(t);
                break;
              case 30:
                _l(t);
                break;
              default:
                _l(t);
            }
            e = e.sibling;
          }
        }
        function oa(e, t, n) {
          for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
            var a = t.alternate, l = e, i = t, o = i.flags;
            switch (i.tag) {
              case 0:
              case 11:
              case 15:
                oa(l, i, n), cs(4, i);
                break;
              case 1:
                if (oa(l, i, n), a = i, l = a.stateNode, typeof l.componentDidMount == "function")
                  try {
                    l.componentDidMount();
                  } catch (B) {
                    He(a, a.return, B);
                  }
                if (a = i, l = a.updateQueue, l !== null) {
                  var b = a.stateNode;
                  try {
                    var N = l.shared.hiddenCallbacks;
                    if (N !== null)
                      for (l.shared.hiddenCallbacks = null, l = 0; l < N.length; l++)
                        If(N[l], b);
                  } catch (B) {
                    He(a, a.return, B);
                  }
                }
                n && o & 64 && oh(i), os(i, i.return);
                break;
              case 27:
                mh(i);
              case 26:
              case 5:
                oa(l, i, n), n && a === null && o & 4 && dh(i), os(i, i.return);
                break;
              case 12:
                oa(l, i, n);
                break;
              case 31:
                oa(l, i, n), n && o & 4 && vh(l, i);
                break;
              case 13:
                oa(l, i, n), n && o & 4 && xh(l, i);
                break;
              case 22:
                i.memoizedState === null && oa(l, i, n), os(i, i.return);
                break;
              case 30:
                break;
              default:
                oa(l, i, n);
            }
            t = t.sibling;
          }
        }
        function kc(e, t) {
          var n = null;
          e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Wi(n));
        }
        function Zc(e, t) {
          e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Wi(e));
        }
        function Tn(e, t, n, a) {
          if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
              Th(e, t, n, a), t = t.sibling;
        }
        function Th(e, t, n, a) {
          var l = t.flags;
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Tn(e, t, n, a), l & 2048 && cs(9, t);
              break;
            case 1:
              Tn(e, t, n, a);
              break;
            case 3:
              Tn(e, t, n, a), l & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Wi(e)));
              break;
            case 12:
              if (l & 2048) {
                Tn(e, t, n, a), e = t.stateNode;
                try {
                  var i = t.memoizedProps, o = i.id, b = i.onPostCommit;
                  typeof b == "function" && b(o, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
                } catch (N) {
                  He(t, t.return, N);
                }
              } else
                Tn(e, t, n, a);
              break;
            case 31:
              Tn(e, t, n, a);
              break;
            case 13:
              Tn(e, t, n, a);
              break;
            case 23:
              break;
            case 22:
              i = t.stateNode, o = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? Tn(e, t, n, a) : fs(e, t) : i._visibility & 2 ? Tn(e, t, n, a) : (i._visibility |= 2, ri(e, t, n, a, (t.subtreeFlags & 10256) !== 0 || false)), l & 2048 && kc(o, t);
              break;
            case 24:
              Tn(e, t, n, a), l & 2048 && Zc(t.alternate, t);
              break;
            default:
              Tn(e, t, n, a);
          }
        }
        function ri(e, t, n, a, l) {
          for (l = l && ((t.subtreeFlags & 10256) !== 0 || false), t = t.child; t !== null; ) {
            var i = e, o = t, b = n, N = a, B = o.flags;
            switch (o.tag) {
              case 0:
              case 11:
              case 15:
                ri(i, o, b, N, l), cs(8, o);
                break;
              case 23:
                break;
              case 22:
                var Q = o.stateNode;
                o.memoizedState !== null ? Q._visibility & 2 ? ri(i, o, b, N, l) : fs(i, o) : (Q._visibility |= 2, ri(i, o, b, N, l)), l && B & 2048 && kc(o.alternate, o);
                break;
              case 24:
                ri(i, o, b, N, l), l && B & 2048 && Zc(o.alternate, o);
                break;
              default:
                ri(i, o, b, N, l);
            }
            t = t.sibling;
          }
        }
        function fs(e, t) {
          if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) {
              var n = e, a = t, l = a.flags;
              switch (a.tag) {
                case 22:
                  fs(n, a), l & 2048 && kc(a.alternate, a);
                  break;
                case 24:
                  fs(n, a), l & 2048 && Zc(a.alternate, a);
                  break;
                default:
                  fs(n, a);
              }
              t = t.sibling;
            }
        }
        var ds = 8192;
        function ci(e, t, n) {
          if (e.subtreeFlags & ds)
            for (e = e.child; e !== null; )
              Ah(e, t, n), e = e.sibling;
        }
        function Ah(e, t, n) {
          switch (e.tag) {
            case 26:
              ci(e, t, n), e.flags & ds && e.memoizedState !== null && y0(n, _n, e.memoizedState, e.memoizedProps);
              break;
            case 5:
              ci(e, t, n);
              break;
            case 3:
            case 4:
              var a = _n;
              _n = Wu(e.stateNode.containerInfo), ci(e, t, n), _n = a;
              break;
            case 22:
              e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = ds, ds = 16777216, ci(e, t, n), ds = a) : ci(e, t, n));
              break;
            default:
              ci(e, t, n);
          }
        }
        function Nh(e) {
          var t = e.alternate;
          if (t !== null && (e = t.child, e !== null)) {
            t.child = null;
            do
              t = e.sibling, e.sibling = null, e = t;
            while (e !== null);
          }
        }
        function hs(e) {
          var t = e.deletions;
          if ((e.flags & 16) !== 0) {
            if (t !== null)
              for (var n = 0; n < t.length; n++) {
                var a = t[n];
                xt = a, wh(a, e);
              }
            Nh(e);
          }
          if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
              Eh(e), e = e.sibling;
        }
        function Eh(e) {
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              hs(e), e.flags & 2048 && Ma(9, e, e.return);
              break;
            case 3:
              hs(e);
              break;
            case 12:
              hs(e);
              break;
            case 22:
              var t = e.stateNode;
              e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, qu(e)) : hs(e);
              break;
            default:
              hs(e);
          }
        }
        function qu(e) {
          var t = e.deletions;
          if ((e.flags & 16) !== 0) {
            if (t !== null)
              for (var n = 0; n < t.length; n++) {
                var a = t[n];
                xt = a, wh(a, e);
              }
            Nh(e);
          }
          for (e = e.child; e !== null; ) {
            switch (t = e, t.tag) {
              case 0:
              case 11:
              case 15:
                Ma(8, t, t.return), qu(t);
                break;
              case 22:
                n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, qu(t));
                break;
              default:
                qu(t);
            }
            e = e.sibling;
          }
        }
        function wh(e, t) {
          for (; xt !== null; ) {
            var n = xt;
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                Ma(8, n, t);
                break;
              case 23:
              case 22:
                if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
                  var a = n.memoizedState.cachePool.pool;
                  a != null && a.refCount++;
                }
                break;
              case 24:
                Wi(n.memoizedState.cache);
            }
            if (a = n.child, a !== null)
              a.return = n, xt = a;
            else
              e:
                for (n = e; xt !== null; ) {
                  a = xt;
                  var l = a.sibling, i = a.return;
                  if (yh(a), a === n) {
                    xt = null;
                    break e;
                  }
                  if (l !== null) {
                    l.return = i, xt = l;
                    break e;
                  }
                  xt = i;
                }
          }
        }
        var Cg = { getCacheForType: function(e) {
          var t = Tt(ut), n = t.data.get(e);
          return n === void 0 && (n = e(), t.data.set(e, n)), n;
        }, cacheSignal: function() {
          return Tt(ut).controller.signal;
        } }, Ug = typeof WeakMap == "function" ? WeakMap : Map, Me = 0, Qe = null, Ae = null, Ee = 0, qe = 0, Ft = null, Da = false, oi = false, Kc = false, fa = 0, tt = 0, Ba = 0, Tl = 0, Jc = 0, Wt = 0, fi = 0, ms = null, Yt = null, Fc = false, Hu = 0, jh = 0, Lu = 1 / 0, Yu = null, qa = null, mt = 0, Ha = null, di = null, da = 0, Wc = 0, $c = null, Oh = null, ps = 0, Pc = null;
        function $t() {
          return (Me & 2) !== 0 && Ee !== 0 ? Ee & -Ee : Y.T !== null ? lo() : Qs();
        }
        function Rh() {
          if (Wt === 0)
            if ((Ee & 536870912) === 0 || je) {
              var e = Ol;
              Ol <<= 1, (Ol & 3932160) === 0 && (Ol = 262144), Wt = e;
            } else
              Wt = 536870912;
          return e = Kt.current, e !== null && (e.flags |= 32), Wt;
        }
        function Gt(e, t, n) {
          (e === Qe && (qe === 2 || qe === 9) || e.cancelPendingCommit !== null) && (hi(e, 0), La(e, Ee, Wt, false)), Vn(e, n), ((Me & 2) === 0 || e !== Qe) && (e === Qe && ((Me & 2) === 0 && (Tl |= n), tt === 4 && La(e, Ee, Wt, false)), Gn(e));
        }
        function zh(e, t, n) {
          if ((Me & 6) !== 0)
            throw Error(c(327));
          var a = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || el(e, t), l = a ? Bg(e, t) : eo(e, t, true), i = a;
          do {
            if (l === 0) {
              oi && !a && La(e, t, 0, false);
              break;
            } else {
              if (n = e.current.alternate, i && !Mg(n)) {
                l = eo(e, t, false), i = false;
                continue;
              }
              if (l === 2) {
                if (i = t, e.errorRecoveryDisabledLanes & i)
                  var o = 0;
                else
                  o = e.pendingLanes & -536870913, o = o !== 0 ? o : o & 536870912 ? 536870912 : 0;
                if (o !== 0) {
                  t = o;
                  e: {
                    var b = e;
                    l = ms;
                    var N = b.current.memoizedState.isDehydrated;
                    if (N && (hi(b, o).flags |= 256), o = eo(b, o, false), o !== 2) {
                      if (Kc && !N) {
                        b.errorRecoveryDisabledLanes |= i, Tl |= i, l = 4;
                        break e;
                      }
                      i = Yt, Yt = l, i !== null && (Yt === null ? Yt = i : Yt.push.apply(Yt, i));
                    }
                    l = o;
                  }
                  if (i = false, l !== 2)
                    continue;
                }
              }
              if (l === 1) {
                hi(e, 0), La(e, t, 0, true);
                break;
              }
              e: {
                switch (a = e, i = l, i) {
                  case 0:
                  case 1:
                    throw Error(c(345));
                  case 4:
                    if ((t & 4194048) !== t)
                      break;
                  case 6:
                    La(a, t, Wt, !Da);
                    break e;
                  case 2:
                    Yt = null;
                    break;
                  case 3:
                  case 5:
                    break;
                  default:
                    throw Error(c(329));
                }
                if ((t & 62914560) === t && (l = Hu + 300 - Ot(), 10 < l)) {
                  if (La(a, t, Wt, !Da), Rl(a, 0, true) !== 0)
                    break e;
                  da = t, a.timeoutHandle = rm(Ch.bind(null, a, n, Yt, Yu, Fc, t, Wt, Tl, fi, Da, i, "Throttled", -0, 0), l);
                  break e;
                }
                Ch(a, n, Yt, Yu, Fc, t, Wt, Tl, fi, Da, i, null, -0, 0);
              }
            }
            break;
          } while (true);
          Gn(e);
        }
        function Ch(e, t, n, a, l, i, o, b, N, B, Q, k, q, L) {
          if (e.timeoutHandle = -1, k = t.subtreeFlags, k & 8192 || (k & 16785408) === 16785408) {
            k = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: true, waitingForViewTransition: false, unsuspend: nn }, Ah(t, i, k);
            var ae = (i & 62914560) === i ? Hu - Ot() : (i & 4194048) === i ? jh - Ot() : 0;
            if (ae = b0(k, ae), ae !== null) {
              da = i, e.cancelPendingCommit = ae(Yh.bind(null, e, t, i, n, a, l, o, b, N, Q, k, null, q, L)), La(e, i, o, !B);
              return;
            }
          }
          Yh(e, t, i, n, a, l, o, b, N);
        }
        function Mg(e) {
          for (var t = e; ; ) {
            var n = t.tag;
            if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
              for (var a = 0; a < n.length; a++) {
                var l = n[a], i = l.getSnapshot;
                l = l.value;
                try {
                  if (!kt(i(), l))
                    return false;
                } catch (o) {
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
        function La(e, t, n, a) {
          t &= ~Jc, t &= ~Tl, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
          for (var l = t; 0 < l; ) {
            var i = 31 - wt(l), o = 1 << i;
            a[i] = -1, l &= ~o;
          }
          n !== 0 && Ys(e, n, t);
        }
        function Gu() {
          return (Me & 6) === 0 ? (gs(0), false) : true;
        }
        function Ic() {
          if (Ae !== null) {
            if (qe === 0)
              var e = Ae.return;
            else
              e = Ae, ta = ml = null, pc(e), ai = null, Pi = 0, e = Ae;
            for (; e !== null; )
              ch(e.alternate, e), e = e.return;
            Ae = null;
          }
        }
        function hi(e, t) {
          var n = e.timeoutHandle;
          n !== -1 && (e.timeoutHandle = -1, e0(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), da = 0, Ic(), Qe = e, Ae = n = In(e.current, null), Ee = t, qe = 0, Ft = null, Da = false, oi = el(e, t), Kc = false, fi = Wt = Jc = Tl = Ba = tt = 0, Yt = ms = null, Fc = false, (t & 8) !== 0 && (t |= t & 32);
          var a = e.entangledLanes;
          if (a !== 0)
            for (e = e.entanglements, a &= t; 0 < a; ) {
              var l = 31 - wt(a), i = 1 << l;
              t |= e[l], a &= ~i;
            }
          return fa = t, ru(), n;
        }
        function Uh(e, t) {
          ve = null, Y.H = ss, t === ni || t === gu ? (t = Ff(), qe = 3) : t === ac ? (t = Ff(), qe = 4) : qe = t === zc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Ft = t, Ae === null && (tt = 1, Ru(e, on(t, e.current)));
        }
        function Mh() {
          var e = Kt.current;
          return e === null ? true : (Ee & 4194048) === Ee ? mn === null : (Ee & 62914560) === Ee || (Ee & 536870912) !== 0 ? e === mn : false;
        }
        function Dh() {
          var e = Y.H;
          return Y.H = ss, e === null ? ss : e;
        }
        function Bh() {
          var e = Y.A;
          return Y.A = Cg, e;
        }
        function Xu() {
          tt = 4, Da || (Ee & 4194048) !== Ee && Kt.current !== null || (oi = true), (Ba & 134217727) === 0 && (Tl & 134217727) === 0 || Qe === null || La(Qe, Ee, Wt, false);
        }
        function eo(e, t, n) {
          var a = Me;
          Me |= 2;
          var l = Dh(), i = Bh();
          (Qe !== e || Ee !== t) && (Yu = null, hi(e, t)), t = false;
          var o = tt;
          e:
            do
              try {
                if (qe !== 0 && Ae !== null) {
                  var b = Ae, N = Ft;
                  switch (qe) {
                    case 8:
                      Ic(), o = 6;
                      break e;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                      Kt.current === null && (t = true);
                      var B = qe;
                      if (qe = 0, Ft = null, mi(e, b, N, B), n && oi) {
                        o = 0;
                        break e;
                      }
                      break;
                    default:
                      B = qe, qe = 0, Ft = null, mi(e, b, N, B);
                  }
                }
                Dg(), o = tt;
                break;
              } catch (Q) {
                Uh(e, Q);
              }
            while (true);
          return t && e.shellSuspendCounter++, ta = ml = null, Me = a, Y.H = l, Y.A = i, Ae === null && (Qe = null, Ee = 0, ru()), o;
        }
        function Dg() {
          for (; Ae !== null; )
            qh(Ae);
        }
        function Bg(e, t) {
          var n = Me;
          Me |= 2;
          var a = Dh(), l = Bh();
          Qe !== e || Ee !== t ? (Yu = null, Lu = Ot() + 500, hi(e, t)) : oi = el(e, t);
          e:
            do
              try {
                if (qe !== 0 && Ae !== null) {
                  t = Ae;
                  var i = Ft;
                  t:
                    switch (qe) {
                      case 1:
                        qe = 0, Ft = null, mi(e, t, i, 1);
                        break;
                      case 2:
                      case 9:
                        if (Kf(i)) {
                          qe = 0, Ft = null, Hh(t);
                          break;
                        }
                        t = function() {
                          qe !== 2 && qe !== 9 || Qe !== e || (qe = 7), Gn(e);
                        }, i.then(t, t);
                        break e;
                      case 3:
                        qe = 7;
                        break e;
                      case 4:
                        qe = 5;
                        break e;
                      case 7:
                        Kf(i) ? (qe = 0, Ft = null, Hh(t)) : (qe = 0, Ft = null, mi(e, t, i, 7));
                        break;
                      case 5:
                        var o = null;
                        switch (Ae.tag) {
                          case 26:
                            o = Ae.memoizedState;
                          case 5:
                          case 27:
                            var b = Ae;
                            if (o ? Tm(o) : b.stateNode.complete) {
                              qe = 0, Ft = null;
                              var N = b.sibling;
                              if (N !== null)
                                Ae = N;
                              else {
                                var B = b.return;
                                B !== null ? (Ae = B, Qu(B)) : Ae = null;
                              }
                              break t;
                            }
                        }
                        qe = 0, Ft = null, mi(e, t, i, 5);
                        break;
                      case 6:
                        qe = 0, Ft = null, mi(e, t, i, 6);
                        break;
                      case 8:
                        Ic(), tt = 6;
                        break e;
                      default:
                        throw Error(c(462));
                    }
                }
                qg();
                break;
              } catch (Q) {
                Uh(e, Q);
              }
            while (true);
          return ta = ml = null, Y.H = a, Y.A = l, Me = n, Ae !== null ? 0 : (Qe = null, Ee = 0, ru(), tt);
        }
        function qg() {
          for (; Ae !== null && !Nr(); )
            qh(Ae);
        }
        function qh(e) {
          var t = uh(e.alternate, e, fa);
          e.memoizedProps = e.pendingProps, t === null ? Qu(e) : Ae = t;
        }
        function Hh(e) {
          var t = e, n = t.alternate;
          switch (t.tag) {
            case 15:
            case 0:
              t = th(n, t, t.pendingProps, t.type, void 0, Ee);
              break;
            case 11:
              t = th(n, t, t.pendingProps, t.type.render, t.ref, Ee);
              break;
            case 5:
              pc(t);
            default:
              ch(n, t), t = Ae = Bf(t, fa), t = uh(n, t, fa);
          }
          e.memoizedProps = e.pendingProps, t === null ? Qu(e) : Ae = t;
        }
        function mi(e, t, n, a) {
          ta = ml = null, pc(t), ai = null, Pi = 0;
          var l = t.return;
          try {
            if (Ng(e, l, t, n, Ee)) {
              tt = 1, Ru(e, on(n, e.current)), Ae = null;
              return;
            }
          } catch (i) {
            if (l !== null)
              throw Ae = l, i;
            tt = 1, Ru(e, on(n, e.current)), Ae = null;
            return;
          }
          t.flags & 32768 ? (je || a === 1 ? e = true : oi || (Ee & 536870912) !== 0 ? e = false : (Da = e = true, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Kt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Lh(t, e)) : Qu(t);
        }
        function Qu(e) {
          var t = e;
          do {
            if ((t.flags & 32768) !== 0) {
              Lh(t, Da);
              return;
            }
            e = t.return;
            var n = jg(t.alternate, t, fa);
            if (n !== null) {
              Ae = n;
              return;
            }
            if (t = t.sibling, t !== null) {
              Ae = t;
              return;
            }
            Ae = t = e;
          } while (t !== null);
          tt === 0 && (tt = 5);
        }
        function Lh(e, t) {
          do {
            var n = Og(e.alternate, e);
            if (n !== null) {
              n.flags &= 32767, Ae = n;
              return;
            }
            if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
              Ae = e;
              return;
            }
            Ae = e = n;
          } while (e !== null);
          tt = 6, Ae = null;
        }
        function Yh(e, t, n, a, l, i, o, b, N) {
          e.cancelPendingCommit = null;
          do
            Vu();
          while (mt !== 0);
          if ((Me & 6) !== 0)
            throw Error(c(327));
          if (t !== null) {
            if (t === e.current)
              throw Error(c(177));
            if (i = t.lanes | t.childLanes, i |= Xr, Or(e, n, i, o, b, N), e === Qe && (Ae = Qe = null, Ee = 0), di = t, Ha = e, da = n, Wc = i, $c = l, Oh = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Gg(Wa, function() {
              return kh(), null;
            })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
              a = Y.T, Y.T = null, l = P.p, P.p = 2, o = Me, Me |= 4;
              try {
                Rg(e, t, n);
              } finally {
                Me = o, P.p = l, Y.T = a;
              }
            }
            mt = 1, Gh(), Xh(), Qh();
          }
        }
        function Gh() {
          if (mt === 1) {
            mt = 0;
            var e = Ha, t = di, n = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || n) {
              n = Y.T, Y.T = null;
              var a = P.p;
              P.p = 2;
              var l = Me;
              Me |= 4;
              try {
                Sh(t, e);
                var i = ho, o = wf(e.containerInfo), b = i.focusedElem, N = i.selectionRange;
                if (o !== b && b && b.ownerDocument && Ef(b.ownerDocument.documentElement, b)) {
                  if (N !== null && qr(b)) {
                    var B = N.start, Q = N.end;
                    if (Q === void 0 && (Q = B), "selectionStart" in b)
                      b.selectionStart = B, b.selectionEnd = Math.min(Q, b.value.length);
                    else {
                      var k = b.ownerDocument || document, q = k && k.defaultView || window;
                      if (q.getSelection) {
                        var L = q.getSelection(), ae = b.textContent.length, fe = Math.min(N.start, ae), Xe = N.end === void 0 ? fe : Math.min(N.end, ae);
                        !L.extend && fe > Xe && (o = Xe, Xe = fe, fe = o);
                        var R = Nf(b, fe), O = Nf(b, Xe);
                        if (R && O && (L.rangeCount !== 1 || L.anchorNode !== R.node || L.anchorOffset !== R.offset || L.focusNode !== O.node || L.focusOffset !== O.offset)) {
                          var D = k.createRange();
                          D.setStart(R.node, R.offset), L.removeAllRanges(), fe > Xe ? (L.addRange(D), L.extend(O.node, O.offset)) : (D.setEnd(O.node, O.offset), L.addRange(D));
                        }
                      }
                    }
                  }
                  for (k = [], L = b; L = L.parentNode; )
                    L.nodeType === 1 && k.push({ element: L, left: L.scrollLeft, top: L.scrollTop });
                  for (typeof b.focus == "function" && b.focus(), b = 0; b < k.length; b++) {
                    var V = k[b];
                    V.element.scrollLeft = V.left, V.element.scrollTop = V.top;
                  }
                }
                nr = !!fo, ho = fo = null;
              } finally {
                Me = l, P.p = a, Y.T = n;
              }
            }
            e.current = t, mt = 2;
          }
        }
        function Xh() {
          if (mt === 2) {
            mt = 0;
            var e = Ha, t = di, n = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || n) {
              n = Y.T, Y.T = null;
              var a = P.p;
              P.p = 2;
              var l = Me;
              Me |= 4;
              try {
                gh(e, t.alternate, t);
              } finally {
                Me = l, P.p = a, Y.T = n;
              }
            }
            mt = 3;
          }
        }
        function Qh() {
          if (mt === 4 || mt === 3) {
            mt = 0, Ds();
            var e = Ha, t = di, n = da, a = Oh;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? mt = 5 : (mt = 0, di = Ha = null, Vh(e, e.pendingLanes));
            var l = e.pendingLanes;
            if (l === 0 && (qa = null), zi(n), t = t.stateNode, Rt && typeof Rt.onCommitFiberRoot == "function")
              try {
                Rt.onCommitFiberRoot($a, t, void 0, (t.current.flags & 128) === 128);
              } catch (N) {
              }
            if (a !== null) {
              t = Y.T, l = P.p, P.p = 2, Y.T = null;
              try {
                for (var i = e.onRecoverableError, o = 0; o < a.length; o++) {
                  var b = a[o];
                  i(b.value, { componentStack: b.stack });
                }
              } finally {
                Y.T = t, P.p = l;
              }
            }
            (da & 3) !== 0 && Vu(), Gn(e), l = e.pendingLanes, (n & 261930) !== 0 && (l & 42) !== 0 ? e === Pc ? ps++ : (ps = 0, Pc = e) : ps = 0, gs(0);
          }
        }
        function Vh(e, t) {
          (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Wi(t)));
        }
        function Vu() {
          return Gh(), Xh(), Qh(), kh();
        }
        function kh() {
          if (mt !== 5)
            return false;
          var e = Ha, t = Wc;
          Wc = 0;
          var n = zi(da), a = Y.T, l = P.p;
          try {
            P.p = 32 > n ? 32 : n, Y.T = null, n = $c, $c = null;
            var i = Ha, o = da;
            if (mt = 0, di = Ha = null, da = 0, (Me & 6) !== 0)
              throw Error(c(331));
            var b = Me;
            if (Me |= 4, Eh(i.current), Th(i, i.current, o, n), Me = b, gs(0, false), Rt && typeof Rt.onPostCommitFiberRoot == "function")
              try {
                Rt.onPostCommitFiberRoot($a, i);
              } catch (N) {
              }
            return true;
          } finally {
            P.p = l, Y.T = a, Vh(e, t);
          }
        }
        function Zh(e, t, n) {
          t = on(n, t), t = Rc(e.stateNode, t, 2), e = za(e, t, 2), e !== null && (Vn(e, 2), Gn(e));
        }
        function He(e, t, n) {
          if (e.tag === 3)
            Zh(e, e, n);
          else
            for (; t !== null; ) {
              if (t.tag === 3) {
                Zh(t, e, n);
                break;
              } else if (t.tag === 1) {
                var a = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (qa === null || !qa.has(a))) {
                  e = on(n, e), n = Kd(2), a = za(t, n, 2), a !== null && (Jd(n, a, t, e), Vn(a, 2), Gn(a));
                  break;
                }
              }
              t = t.return;
            }
        }
        function to(e, t, n) {
          var a = e.pingCache;
          if (a === null) {
            a = e.pingCache = new Ug();
            var l = /* @__PURE__ */ new Set();
            a.set(t, l);
          } else
            l = a.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), a.set(t, l));
          l.has(n) || (Kc = true, l.add(n), e = Hg.bind(null, e, t, n), t.then(e, e));
        }
        function Hg(e, t, n) {
          var a = e.pingCache;
          a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Qe === e && (Ee & n) === n && (tt === 4 || tt === 3 && (Ee & 62914560) === Ee && 300 > Ot() - Hu ? (Me & 2) === 0 && hi(e, 0) : Jc |= n, fi === Ee && (fi = 0)), Gn(e);
        }
        function Kh(e, t) {
          t === 0 && (t = Ls()), e = fl(e, t), e !== null && (Vn(e, t), Gn(e));
        }
        function Lg(e) {
          var t = e.memoizedState, n = 0;
          t !== null && (n = t.retryLane), Kh(e, n);
        }
        function Yg(e, t) {
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
              throw Error(c(314));
          }
          a !== null && a.delete(t), Kh(e, n);
        }
        function Gg(e, t) {
          return wi(e, t);
        }
        var ku = null, pi = null, no = false, Zu = false, ao = false, Ya = 0;
        function Gn(e) {
          e !== pi && e.next === null && (pi === null ? ku = pi = e : pi = pi.next = e), Zu = true, no || (no = true, Qg());
        }
        function gs(e, t) {
          if (!ao && Zu) {
            ao = true;
            do
              for (var n = false, a = ku; a !== null; ) {
                if (e !== 0) {
                  var l = a.pendingLanes;
                  if (l === 0)
                    var i = 0;
                  else {
                    var o = a.suspendedLanes, b = a.pingedLanes;
                    i = (1 << 31 - wt(42 | e) + 1) - 1, i &= l & ~(o & ~b), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
                  }
                  i !== 0 && (n = true, $h(a, i));
                } else
                  i = Ee, i = Rl(a, a === Qe ? i : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (i & 3) === 0 || el(a, i) || (n = true, $h(a, i));
                a = a.next;
              }
            while (n);
            ao = false;
          }
        }
        function Xg() {
          Jh();
        }
        function Jh() {
          Zu = no = false;
          var e = 0;
          Ya !== 0 && Ig() && (e = Ya);
          for (var t = Ot(), n = null, a = ku; a !== null; ) {
            var l = a.next, i = Fh(a, t);
            i === 0 ? (a.next = null, n === null ? ku = l : n.next = l, l === null && (pi = n)) : (n = a, (e !== 0 || (i & 3) !== 0) && (Zu = true)), a = l;
          }
          mt !== 0 && mt !== 5 || gs(e), Ya !== 0 && (Ya = 0);
        }
        function Fh(e, t) {
          for (var n = e.suspendedLanes, a = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
            var o = 31 - wt(i), b = 1 << o, N = l[o];
            N === -1 ? ((b & n) === 0 || (b & a) !== 0) && (l[o] = jr(b, t)) : N <= t && (e.expiredLanes |= b), i &= ~b;
          }
          if (t = Qe, n = Ee, n = Rl(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a = e.callbackNode, n === 0 || e === t && (qe === 2 || qe === 9) || e.cancelPendingCommit !== null)
            return a !== null && a !== null && ji(a), e.callbackNode = null, e.callbackPriority = 0;
          if ((n & 3) === 0 || el(e, n)) {
            if (t = n & -n, t === e.callbackPriority)
              return t;
            switch (a !== null && ji(a), zi(n)) {
              case 2:
              case 8:
                n = Oi;
                break;
              case 32:
                n = Wa;
                break;
              case 268435456:
                n = jl;
                break;
              default:
                n = Wa;
            }
            return a = Wh.bind(null, e), n = wi(n, a), e.callbackPriority = t, e.callbackNode = n, t;
          }
          return a !== null && a !== null && ji(a), e.callbackPriority = 2, e.callbackNode = null, 2;
        }
        function Wh(e, t) {
          if (mt !== 0 && mt !== 5)
            return e.callbackNode = null, e.callbackPriority = 0, null;
          var n = e.callbackNode;
          if (Vu() && e.callbackNode !== n)
            return null;
          var a = Ee;
          return a = Rl(e, e === Qe ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a === 0 ? null : (zh(e, a, t), Fh(e, Ot()), e.callbackNode != null && e.callbackNode === n ? Wh.bind(null, e) : null);
        }
        function $h(e, t) {
          if (Vu())
            return null;
          zh(e, t, true);
        }
        function Qg() {
          t0(function() {
            (Me & 6) !== 0 ? wi(pe, Xg) : Jh();
          });
        }
        function lo() {
          if (Ya === 0) {
            var e = ei;
            e === 0 && (e = Pa, Pa <<= 1, (Pa & 261888) === 0 && (Pa = 256)), Ya = e;
          }
          return Ya;
        }
        function Ph(e) {
          return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Ml("" + e);
        }
        function Ih(e, t) {
          var n = t.ownerDocument.createElement("input");
          return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
        }
        function Vg(e, t, n, a, l) {
          if (t === "submit" && n && n.stateNode === l) {
            var i = Ph((l[yt] || null).action), o = a.submitter;
            o && (t = (t = o[yt] || null) ? Ph(t.formAction) : o.getAttribute("formAction"), t !== null && (i = t, o = null));
            var b = new sl("action", "action", null, a, l);
            e.push({ event: b, listeners: [{ instance: null, listener: function() {
              if (a.defaultPrevented) {
                if (Ya !== 0) {
                  var N = o ? Ih(l, o) : new FormData(l);
                  Ac(n, { pending: true, data: N, method: l.method, action: i }, null, N);
                }
              } else
                typeof i == "function" && (b.preventDefault(), N = o ? Ih(l, o) : new FormData(l), Ac(n, { pending: true, data: N, method: l.method, action: i }, i, N));
            }, currentTarget: l }] });
          }
        }
        for (var io = 0; io < Gr.length; io++) {
          var so = Gr[io], kg = so.toLowerCase(), Zg = so[0].toUpperCase() + so.slice(1);
          Sn(kg, "on" + Zg);
        }
        Sn(Rf, "onAnimationEnd"), Sn(zf, "onAnimationIteration"), Sn(Cf, "onAnimationStart"), Sn("dblclick", "onDoubleClick"), Sn("focusin", "onFocus"), Sn("focusout", "onBlur"), Sn(rg, "onTransitionRun"), Sn(cg, "onTransitionStart"), Sn(og, "onTransitionCancel"), Sn(Uf, "onTransitionEnd"), Vt("onMouseEnter", ["mouseout", "mouseover"]), Vt("onMouseLeave", ["mouseout", "mouseover"]), Vt("onPointerEnter", ["pointerout", "pointerover"]), Vt("onPointerLeave", ["pointerout", "pointerover"]), Mn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Mn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Mn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Mn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Mn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Mn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var ys = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Kg = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ys));
        function em(e, t) {
          t = (t & 4) !== 0;
          for (var n = 0; n < e.length; n++) {
            var a = e[n], l = a.event;
            a = a.listeners;
            e: {
              var i = void 0;
              if (t)
                for (var o = a.length - 1; 0 <= o; o--) {
                  var b = a[o], N = b.instance, B = b.currentTarget;
                  if (b = b.listener, N !== i && l.isPropagationStopped())
                    break e;
                  i = b, l.currentTarget = B;
                  try {
                    i(l);
                  } catch (Q) {
                    uu(Q);
                  }
                  l.currentTarget = null, i = N;
                }
              else
                for (o = 0; o < a.length; o++) {
                  if (b = a[o], N = b.instance, B = b.currentTarget, b = b.listener, N !== i && l.isPropagationStopped())
                    break e;
                  i = b, l.currentTarget = B;
                  try {
                    i(l);
                  } catch (Q) {
                    uu(Q);
                  }
                  l.currentTarget = null, i = N;
                }
            }
          }
        }
        function Ne(e, t) {
          var n = t[Ci];
          n === void 0 && (n = t[Ci] = /* @__PURE__ */ new Set());
          var a = e + "__bubble";
          n.has(a) || (tm(t, e, 2, false), n.add(a));
        }
        function uo(e, t, n) {
          var a = 0;
          t && (a |= 4), tm(n, e, a, t);
        }
        var Ku = "_reactListening" + Math.random().toString(36).slice(2);
        function ro(e) {
          if (!e[Ku]) {
            e[Ku] = true, Dt.forEach(function(n) {
              n !== "selectionchange" && (Kg.has(n) || uo(n, false, e), uo(n, true, e));
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Ku] || (t[Ku] = true, uo("selectionchange", false, t));
          }
        }
        function tm(e, t, n, a) {
          switch (Rm(t)) {
            case 2:
              var l = S0;
              break;
            case 8:
              l = _0;
              break;
            default:
              l = Ao;
          }
          n = l.bind(null, t, n, e), l = void 0, !Gi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = true), a ? l !== void 0 ? e.addEventListener(t, n, { capture: true, passive: l }) : e.addEventListener(t, n, true) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, false);
        }
        function co(e, t, n, a, l) {
          var i = a;
          if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
            e:
              for (; ; ) {
                if (a === null)
                  return;
                var o = a.tag;
                if (o === 3 || o === 4) {
                  var b = a.stateNode.containerInfo;
                  if (b === l)
                    break;
                  if (o === 4)
                    for (o = a.return; o !== null; ) {
                      var N = o.tag;
                      if ((N === 3 || N === 4) && o.stateNode.containerInfo === l)
                        return;
                      o = o.return;
                    }
                  for (; b !== null; ) {
                    if (o = va(b), o === null)
                      return;
                    if (N = o.tag, N === 5 || N === 6 || N === 26 || N === 27) {
                      a = i = o;
                      continue e;
                    }
                    b = b.parentNode;
                  }
                }
                a = a.return;
              }
          Yi(function() {
            var B = i, Q = Dl(n), k = [];
            e: {
              var q = Mf.get(e);
              if (q !== void 0) {
                var L = sl, ae = e;
                switch (e) {
                  case "keypress":
                    if (Ll(n) === 0)
                      break e;
                  case "keydown":
                  case "keyup":
                    L = tu;
                    break;
                  case "focusin":
                    ae = "focus", L = W;
                    break;
                  case "focusout":
                    ae = "blur", L = W;
                    break;
                  case "beforeblur":
                  case "afterblur":
                    L = W;
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
                    L = U;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    L = F;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    L = nu;
                    break;
                  case Rf:
                  case zf:
                  case Cf:
                    L = de;
                    break;
                  case Uf:
                    L = Ql;
                    break;
                  case "scroll":
                  case "scrollend":
                    L = f;
                    break;
                  case "wheel":
                    L = $n;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    L = ge;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    L = Gl;
                    break;
                  case "toggle":
                  case "beforetoggle":
                    L = un;
                }
                var fe = (t & 4) !== 0, Xe = !fe && (e === "scroll" || e === "scrollend"), R = fe ? q !== null ? q + "Capture" : null : q;
                fe = [];
                for (var O = B, D; O !== null; ) {
                  var V = O;
                  if (D = V.stateNode, V = V.tag, V !== 5 && V !== 26 && V !== 27 || D === null || R === null || (V = Dn(O, R), V != null && fe.push(bs(O, V, D))), Xe)
                    break;
                  O = O.return;
                }
                0 < fe.length && (q = new L(q, ae, null, n, Q), k.push({ event: q, listeners: fe }));
              }
            }
            if ((t & 7) === 0) {
              e: {
                if (q = e === "mouseover" || e === "pointerover", L = e === "mouseout" || e === "pointerout", q && n !== il && (ae = n.relatedTarget || n.fromElement) && (va(ae) || ae[zn]))
                  break e;
                if ((L || q) && (q = Q.window === Q ? Q : (q = Q.ownerDocument) ? q.defaultView || q.parentWindow : window, L ? (ae = n.relatedTarget || n.toElement, L = B, ae = ae ? va(ae) : null, ae !== null && (Xe = v(ae), fe = ae.tag, ae !== Xe || fe !== 5 && fe !== 27 && fe !== 6) && (ae = null)) : (L = null, ae = B), L !== ae)) {
                  if (fe = U, V = "onMouseLeave", R = "onMouseEnter", O = "mouse", (e === "pointerout" || e === "pointerover") && (fe = Gl, V = "onPointerLeave", R = "onPointerEnter", O = "pointer"), Xe = L == null ? q : nl(L), D = ae == null ? q : nl(ae), q = new fe(V, O + "leave", L, n, Q), q.target = Xe, q.relatedTarget = D, V = null, va(Q) === B && (fe = new fe(R, O + "enter", ae, n, Q), fe.target = D, fe.relatedTarget = Xe, V = fe), Xe = V, L && ae)
                    t: {
                      for (fe = Jg, R = L, O = ae, D = 0, V = R; V; V = fe(V))
                        D++;
                      V = 0;
                      for (var oe = O; oe; oe = fe(oe))
                        V++;
                      for (; 0 < D - V; )
                        R = fe(R), D--;
                      for (; 0 < V - D; )
                        O = fe(O), V--;
                      for (; D--; ) {
                        if (R === O || O !== null && R === O.alternate) {
                          fe = R;
                          break t;
                        }
                        R = fe(R), O = fe(O);
                      }
                      fe = null;
                    }
                  else
                    fe = null;
                  L !== null && nm(k, q, L, fe, false), ae !== null && Xe !== null && nm(k, Xe, ae, fe, true);
                }
              }
              e: {
                if (q = B ? nl(B) : window, L = q.nodeName && q.nodeName.toLowerCase(), L === "select" || L === "input" && q.type === "file")
                  var Ce = vf;
                else if (yf(q))
                  if (xf)
                    Ce = ig;
                  else {
                    Ce = ag;
                    var ie = ng;
                  }
                else
                  L = q.nodeName, !L || L.toLowerCase() !== "input" || q.type !== "checkbox" && q.type !== "radio" ? B && Ul(B.elementType) && (Ce = vf) : Ce = lg;
                if (Ce && (Ce = Ce(e, B))) {
                  bf(k, Ce, n, Q);
                  break e;
                }
                ie && ie(e, q, B), e === "focusout" && B && q.type === "number" && B.memoizedProps.value != null && qi(q, "number", q.value);
              }
              switch (ie = B ? nl(B) : window, e) {
                case "focusin":
                  (yf(ie) || ie.contentEditable === "true") && (Zl = ie, Hr = B, Ki = null);
                  break;
                case "focusout":
                  Ki = Hr = Zl = null;
                  break;
                case "mousedown":
                  Lr = true;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  Lr = false, jf(k, n, Q);
                  break;
                case "selectionchange":
                  if (ug)
                    break;
                case "keydown":
                case "keyup":
                  jf(k, n, Q);
              }
              var xe;
              if (rn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var we = "onCompositionStart";
                      break e;
                    case "compositionend":
                      we = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      we = "onCompositionUpdate";
                      break e;
                  }
                  we = void 0;
                }
              else
                kl ? rl(e, n) && (we = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (we = "onCompositionStart");
              we && (xn && n.locale !== "ko" && (kl || we !== "onCompositionStart" ? we === "onCompositionEnd" && kl && (xe = Hl()) : (ht = Q, Ta = "value" in ht ? ht.value : ht.textContent, kl = true)), ie = Ju(B, we), 0 < ie.length && (we = new ne(we, e, null, n, Q), k.push({ event: we, listeners: ie }), xe ? we.data = xe : (xe = Qi(n), xe !== null && (we.data = xe)))), (xe = Mr ? Pp(e, n) : Ip(e, n)) && (we = Ju(B, "onBeforeInput"), 0 < we.length && (ie = new ne("onBeforeInput", "beforeinput", null, n, Q), k.push({ event: ie, listeners: we }), ie.data = xe)), Vg(k, e, B, n, Q);
            }
            em(k, t);
          });
        }
        function bs(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Ju(e, t) {
          for (var n = t + "Capture", a = []; e !== null; ) {
            var l = e, i = l.stateNode;
            if (l = l.tag, l !== 5 && l !== 26 && l !== 27 || i === null || (l = Dn(e, n), l != null && a.unshift(bs(e, l, i)), l = Dn(e, t), l != null && a.push(bs(e, l, i))), e.tag === 3)
              return a;
            e = e.return;
          }
          return [];
        }
        function Jg(e) {
          if (e === null)
            return null;
          do
            e = e.return;
          while (e && e.tag !== 5 && e.tag !== 27);
          return e || null;
        }
        function nm(e, t, n, a, l) {
          for (var i = t._reactName, o = []; n !== null && n !== a; ) {
            var b = n, N = b.alternate, B = b.stateNode;
            if (b = b.tag, N !== null && N === a)
              break;
            b !== 5 && b !== 26 && b !== 27 || B === null || (N = B, l ? (B = Dn(n, i), B != null && o.unshift(bs(n, B, N))) : l || (B = Dn(n, i), B != null && o.push(bs(n, B, N)))), n = n.return;
          }
          o.length !== 0 && e.push({ event: t, listeners: o });
        }
        var Fg = /\r\n?/g, Wg = /\u0000|\uFFFD/g;
        function am(e) {
          return (typeof e == "string" ? e : "" + e).replace(Fg, `
`).replace(Wg, "");
        }
        function lm(e, t) {
          return t = am(t), am(e) === t;
        }
        function Ge(e, t, n, a, l, i) {
          switch (n) {
            case "children":
              typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Kn(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Kn(e, "" + a);
              break;
            case "className":
              al(e, "class", a);
              break;
            case "tabIndex":
              al(e, "tabindex", a);
              break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
              al(e, n, a);
              break;
            case "style":
              Li(e, a, i);
              break;
            case "data":
              if (t !== "object") {
                al(e, "data", a);
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
              a = Ml("" + a), e.setAttribute(n, a);
              break;
            case "action":
            case "formAction":
              if (typeof a == "function") {
                e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break;
              } else
                typeof i == "function" && (n === "formAction" ? (t !== "input" && Ge(e, t, "name", l.name, l, null), Ge(e, t, "formEncType", l.formEncType, l, null), Ge(e, t, "formMethod", l.formMethod, l, null), Ge(e, t, "formTarget", l.formTarget, l, null)) : (Ge(e, t, "encType", l.encType, l, null), Ge(e, t, "method", l.method, l, null), Ge(e, t, "target", l.target, l, null)));
              if (a == null || typeof a == "symbol" || typeof a == "boolean") {
                e.removeAttribute(n);
                break;
              }
              a = Ml("" + a), e.setAttribute(n, a);
              break;
            case "onClick":
              a != null && (e.onclick = nn);
              break;
            case "onScroll":
              a != null && Ne("scroll", e);
              break;
            case "onScrollEnd":
              a != null && Ne("scrollend", e);
              break;
            case "dangerouslySetInnerHTML":
              if (a != null) {
                if (typeof a != "object" || !("__html" in a))
                  throw Error(c(61));
                if (n = a.__html, n != null) {
                  if (l.children != null)
                    throw Error(c(60));
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
              n = Ml("" + a), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
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
              Ne("beforetoggle", e), Ne("toggle", e), kn(e, "popover", a);
              break;
            case "xlinkActuate":
              tn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
              break;
            case "xlinkArcrole":
              tn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
              break;
            case "xlinkRole":
              tn(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
              break;
            case "xlinkShow":
              tn(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
              break;
            case "xlinkTitle":
              tn(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
              break;
            case "xlinkType":
              tn(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
              break;
            case "xmlBase":
              tn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
              break;
            case "xmlLang":
              tn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
              break;
            case "xmlSpace":
              tn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
              break;
            case "is":
              kn(e, "is", a);
              break;
            case "innerText":
            case "textContent":
              break;
            default:
              (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Is.get(n) || n, kn(e, n, a));
          }
        }
        function oo(e, t, n, a, l, i) {
          switch (n) {
            case "style":
              Li(e, a, i);
              break;
            case "dangerouslySetInnerHTML":
              if (a != null) {
                if (typeof a != "object" || !("__html" in a))
                  throw Error(c(61));
                if (n = a.__html, n != null) {
                  if (l.children != null)
                    throw Error(c(60));
                  e.innerHTML = n;
                }
              }
              break;
            case "children":
              typeof a == "string" ? Kn(e, a) : (typeof a == "number" || typeof a == "bigint") && Kn(e, "" + a);
              break;
            case "onScroll":
              a != null && Ne("scroll", e);
              break;
            case "onScrollEnd":
              a != null && Ne("scrollend", e);
              break;
            case "onClick":
              a != null && (e.onclick = nn);
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
              if (!zl.hasOwnProperty(n))
                e: {
                  if (n[0] === "o" && n[1] === "n" && (l = n.endsWith("Capture"), t = n.slice(2, l ? n.length - 7 : void 0), i = e[yt] || null, i = i != null ? i[n] : null, typeof i == "function" && e.removeEventListener(t, i, l), typeof a == "function")) {
                    typeof i != "function" && i !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, a, l);
                    break e;
                  }
                  n in e ? e[n] = a : a === true ? e.setAttribute(n, "") : kn(e, n, a);
                }
          }
        }
        function Nt(e, t, n) {
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
              Ne("error", e), Ne("load", e);
              var a = false, l = false, i;
              for (i in n)
                if (n.hasOwnProperty(i)) {
                  var o = n[i];
                  if (o != null)
                    switch (i) {
                      case "src":
                        a = true;
                        break;
                      case "srcSet":
                        l = true;
                        break;
                      case "children":
                      case "dangerouslySetInnerHTML":
                        throw Error(c(137, t));
                      default:
                        Ge(e, t, i, o, n, null);
                    }
                }
              l && Ge(e, t, "srcSet", n.srcSet, n, null), a && Ge(e, t, "src", n.src, n, null);
              return;
            case "input":
              Ne("invalid", e);
              var b = i = o = l = null, N = null, B = null;
              for (a in n)
                if (n.hasOwnProperty(a)) {
                  var Q = n[a];
                  if (Q != null)
                    switch (a) {
                      case "name":
                        l = Q;
                        break;
                      case "type":
                        o = Q;
                        break;
                      case "checked":
                        N = Q;
                        break;
                      case "defaultChecked":
                        B = Q;
                        break;
                      case "value":
                        i = Q;
                        break;
                      case "defaultValue":
                        b = Q;
                        break;
                      case "children":
                      case "dangerouslySetInnerHTML":
                        if (Q != null)
                          throw Error(c(137, t));
                        break;
                      default:
                        Ge(e, t, a, Q, n, null);
                    }
                }
              Ws(e, i, b, N, B, o, l, false);
              return;
            case "select":
              Ne("invalid", e), a = o = i = null;
              for (l in n)
                if (n.hasOwnProperty(l) && (b = n[l], b != null))
                  switch (l) {
                    case "value":
                      i = b;
                      break;
                    case "defaultValue":
                      o = b;
                      break;
                    case "multiple":
                      a = b;
                    default:
                      Ge(e, t, l, b, n, null);
                  }
              t = i, n = o, e.multiple = !!a, t != null ? Sa(e, !!a, t, false) : n != null && Sa(e, !!a, n, true);
              return;
            case "textarea":
              Ne("invalid", e), i = l = a = null;
              for (o in n)
                if (n.hasOwnProperty(o) && (b = n[o], b != null))
                  switch (o) {
                    case "value":
                      a = b;
                      break;
                    case "defaultValue":
                      l = b;
                      break;
                    case "children":
                      i = b;
                      break;
                    case "dangerouslySetInnerHTML":
                      if (b != null)
                        throw Error(c(91));
                      break;
                    default:
                      Ge(e, t, o, b, n, null);
                  }
              Hi(e, a, l, i);
              return;
            case "option":
              for (N in n)
                if (n.hasOwnProperty(N) && (a = n[N], a != null))
                  switch (N) {
                    case "selected":
                      e.selected = a && typeof a != "function" && typeof a != "symbol";
                      break;
                    default:
                      Ge(e, t, N, a, n, null);
                  }
              return;
            case "dialog":
              Ne("beforetoggle", e), Ne("toggle", e), Ne("cancel", e), Ne("close", e);
              break;
            case "iframe":
            case "object":
              Ne("load", e);
              break;
            case "video":
            case "audio":
              for (a = 0; a < ys.length; a++)
                Ne(ys[a], e);
              break;
            case "image":
              Ne("error", e), Ne("load", e);
              break;
            case "details":
              Ne("toggle", e);
              break;
            case "embed":
            case "source":
            case "link":
              Ne("error", e), Ne("load", e);
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
              for (B in n)
                if (n.hasOwnProperty(B) && (a = n[B], a != null))
                  switch (B) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                      throw Error(c(137, t));
                    default:
                      Ge(e, t, B, a, n, null);
                  }
              return;
            default:
              if (Ul(t)) {
                for (Q in n)
                  n.hasOwnProperty(Q) && (a = n[Q], a !== void 0 && oo(e, t, Q, a, n, void 0));
                return;
              }
          }
          for (b in n)
            n.hasOwnProperty(b) && (a = n[b], a != null && Ge(e, t, b, a, n, null));
        }
        function $g(e, t, n, a) {
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
              var l = null, i = null, o = null, b = null, N = null, B = null, Q = null;
              for (L in n) {
                var k = n[L];
                if (n.hasOwnProperty(L) && k != null)
                  switch (L) {
                    case "checked":
                      break;
                    case "value":
                      break;
                    case "defaultValue":
                      N = k;
                    default:
                      a.hasOwnProperty(L) || Ge(e, t, L, null, a, k);
                  }
              }
              for (var q in a) {
                var L = a[q];
                if (k = n[q], a.hasOwnProperty(q) && (L != null || k != null))
                  switch (q) {
                    case "type":
                      i = L;
                      break;
                    case "name":
                      l = L;
                      break;
                    case "checked":
                      B = L;
                      break;
                    case "defaultChecked":
                      Q = L;
                      break;
                    case "value":
                      o = L;
                      break;
                    case "defaultValue":
                      b = L;
                      break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                      if (L != null)
                        throw Error(c(137, t));
                      break;
                    default:
                      L !== k && Ge(e, t, q, L, a, k);
                  }
              }
              Bi(e, o, b, N, B, Q, i, l);
              return;
            case "select":
              L = o = b = q = null;
              for (i in n)
                if (N = n[i], n.hasOwnProperty(i) && N != null)
                  switch (i) {
                    case "value":
                      break;
                    case "multiple":
                      L = N;
                    default:
                      a.hasOwnProperty(i) || Ge(e, t, i, null, a, N);
                  }
              for (l in a)
                if (i = a[l], N = n[l], a.hasOwnProperty(l) && (i != null || N != null))
                  switch (l) {
                    case "value":
                      q = i;
                      break;
                    case "defaultValue":
                      b = i;
                      break;
                    case "multiple":
                      o = i;
                    default:
                      i !== N && Ge(e, t, l, i, a, N);
                  }
              t = b, n = o, a = L, q != null ? Sa(e, !!n, q, false) : !!a != !!n && (t != null ? Sa(e, !!n, t, true) : Sa(e, !!n, n ? [] : "", false));
              return;
            case "textarea":
              L = q = null;
              for (b in n)
                if (l = n[b], n.hasOwnProperty(b) && l != null && !a.hasOwnProperty(b))
                  switch (b) {
                    case "value":
                      break;
                    case "children":
                      break;
                    default:
                      Ge(e, t, b, null, a, l);
                  }
              for (o in a)
                if (l = a[o], i = n[o], a.hasOwnProperty(o) && (l != null || i != null))
                  switch (o) {
                    case "value":
                      q = l;
                      break;
                    case "defaultValue":
                      L = l;
                      break;
                    case "children":
                      break;
                    case "dangerouslySetInnerHTML":
                      if (l != null)
                        throw Error(c(91));
                      break;
                    default:
                      l !== i && Ge(e, t, o, l, a, i);
                  }
              $s(e, q, L);
              return;
            case "option":
              for (var ae in n)
                if (q = n[ae], n.hasOwnProperty(ae) && q != null && !a.hasOwnProperty(ae))
                  switch (ae) {
                    case "selected":
                      e.selected = false;
                      break;
                    default:
                      Ge(e, t, ae, null, a, q);
                  }
              for (N in a)
                if (q = a[N], L = n[N], a.hasOwnProperty(N) && q !== L && (q != null || L != null))
                  switch (N) {
                    case "selected":
                      e.selected = q && typeof q != "function" && typeof q != "symbol";
                      break;
                    default:
                      Ge(e, t, N, q, a, L);
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
              for (var fe in n)
                q = n[fe], n.hasOwnProperty(fe) && q != null && !a.hasOwnProperty(fe) && Ge(e, t, fe, null, a, q);
              for (B in a)
                if (q = a[B], L = n[B], a.hasOwnProperty(B) && q !== L && (q != null || L != null))
                  switch (B) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                      if (q != null)
                        throw Error(c(137, t));
                      break;
                    default:
                      Ge(e, t, B, q, a, L);
                  }
              return;
            default:
              if (Ul(t)) {
                for (var Xe in n)
                  q = n[Xe], n.hasOwnProperty(Xe) && q !== void 0 && !a.hasOwnProperty(Xe) && oo(e, t, Xe, void 0, a, q);
                for (Q in a)
                  q = a[Q], L = n[Q], !a.hasOwnProperty(Q) || q === L || q === void 0 && L === void 0 || oo(e, t, Q, q, a, L);
                return;
              }
          }
          for (var R in n)
            q = n[R], n.hasOwnProperty(R) && q != null && !a.hasOwnProperty(R) && Ge(e, t, R, null, a, q);
          for (k in a)
            q = a[k], L = n[k], !a.hasOwnProperty(k) || q === L || q == null && L == null || Ge(e, t, k, q, a, L);
        }
        function im(e) {
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
        function Pg() {
          if (typeof performance.getEntriesByType == "function") {
            for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
              var l = n[a], i = l.transferSize, o = l.initiatorType, b = l.duration;
              if (i && b && im(o)) {
                for (o = 0, b = l.responseEnd, a += 1; a < n.length; a++) {
                  var N = n[a], B = N.startTime;
                  if (B > b)
                    break;
                  var Q = N.transferSize, k = N.initiatorType;
                  Q && im(k) && (N = N.responseEnd, o += Q * (N < b ? 1 : (b - B) / (N - B)));
                }
                if (--a, t += 8 * (i + o) / (l.duration / 1e3), e++, 10 < e)
                  break;
              }
            }
            if (0 < e)
              return t / e / 1e6;
          }
          return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
        }
        var fo = null, ho = null;
        function Fu(e) {
          return e.nodeType === 9 ? e : e.ownerDocument;
        }
        function sm(e) {
          switch (e) {
            case "http://www.w3.org/2000/svg":
              return 1;
            case "http://www.w3.org/1998/Math/MathML":
              return 2;
            default:
              return 0;
          }
        }
        function um(e, t) {
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
        function mo(e, t) {
          return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
        }
        var po = null;
        function Ig() {
          var e = window.event;
          return e && e.type === "popstate" ? e === po ? false : (po = e, true) : (po = null, false);
        }
        var rm = typeof setTimeout == "function" ? setTimeout : void 0, e0 = typeof clearTimeout == "function" ? clearTimeout : void 0, cm = typeof Promise == "function" ? Promise : void 0, t0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof cm != "undefined" ? function(e) {
          return cm.resolve(null).then(e).catch(n0);
        } : rm;
        function n0(e) {
          setTimeout(function() {
            throw e;
          });
        }
        function Ga(e) {
          return e === "head";
        }
        function om(e, t) {
          var n = t, a = 0;
          do {
            var l = n.nextSibling;
            if (e.removeChild(n), l && l.nodeType === 8)
              if (n = l.data, n === "/$" || n === "/&") {
                if (a === 0) {
                  e.removeChild(l), vi(t);
                  return;
                }
                a--;
              } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
                a++;
              else if (n === "html")
                vs(e.ownerDocument.documentElement);
              else if (n === "head") {
                n = e.ownerDocument.head, vs(n);
                for (var i = n.firstChild; i; ) {
                  var o = i.nextSibling, b = i.nodeName;
                  i[Cn] || b === "SCRIPT" || b === "STYLE" || b === "LINK" && i.rel.toLowerCase() === "stylesheet" || n.removeChild(i), i = o;
                }
              } else
                n === "body" && vs(e.ownerDocument.body);
            n = l;
          } while (n);
          vi(t);
        }
        function fm(e, t) {
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
        function go(e) {
          var t = e.firstChild;
          for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var n = t;
            switch (t = t.nextSibling, n.nodeName) {
              case "HTML":
              case "HEAD":
              case "BODY":
                go(n), Ui(n);
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
        function a0(e, t, n, a) {
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
            if (e = pn(e.nextSibling), e === null)
              break;
          }
          return null;
        }
        function l0(e, t, n) {
          if (t === "")
            return null;
          for (; e.nodeType !== 3; )
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = pn(e.nextSibling), e === null))
              return null;
          return e;
        }
        function dm(e, t) {
          for (; e.nodeType !== 8; )
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = pn(e.nextSibling), e === null))
              return null;
          return e;
        }
        function yo(e) {
          return e.data === "$?" || e.data === "$~";
        }
        function bo(e) {
          return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
        }
        function i0(e, t) {
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
        function pn(e) {
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
        var vo = null;
        function hm(e) {
          e = e.nextSibling;
          for (var t = 0; e; ) {
            if (e.nodeType === 8) {
              var n = e.data;
              if (n === "/$" || n === "/&") {
                if (t === 0)
                  return pn(e.nextSibling);
                t--;
              } else
                n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
            }
            e = e.nextSibling;
          }
          return null;
        }
        function mm(e) {
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
        function pm(e, t, n) {
          switch (t = Fu(n), e) {
            case "html":
              if (e = t.documentElement, !e)
                throw Error(c(452));
              return e;
            case "head":
              if (e = t.head, !e)
                throw Error(c(453));
              return e;
            case "body":
              if (e = t.body, !e)
                throw Error(c(454));
              return e;
            default:
              throw Error(c(451));
          }
        }
        function vs(e) {
          for (var t = e.attributes; t.length; )
            e.removeAttributeNode(t[0]);
          Ui(e);
        }
        var gn = /* @__PURE__ */ new Map(), gm = /* @__PURE__ */ new Set();
        function Wu(e) {
          return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
        }
        var ha = P.d;
        P.d = { f: s0, r: u0, D: r0, C: c0, L: o0, m: f0, X: h0, S: d0, M: m0 };
        function s0() {
          var e = ha.f(), t = Gu();
          return e || t;
        }
        function u0(e) {
          var t = Un(e);
          t !== null && t.tag === 5 && t.type === "form" ? Ud(t) : ha.r(e);
        }
        var gi = typeof document == "undefined" ? null : document;
        function ym(e, t, n) {
          var a = gi;
          if (a && typeof t == "string" && t) {
            var l = zt(t);
            l = 'link[rel="' + e + '"][href="' + l + '"]', typeof n == "string" && (l += '[crossorigin="' + n + '"]'), gm.has(l) || (gm.add(l), e = { rel: e, crossOrigin: n, href: t }, a.querySelector(l) === null && (t = a.createElement("link"), Nt(t, "link", e), $e(t), a.head.appendChild(t)));
          }
        }
        function r0(e) {
          ha.D(e), ym("dns-prefetch", e, null);
        }
        function c0(e, t) {
          ha.C(e, t), ym("preconnect", e, t);
        }
        function o0(e, t, n) {
          ha.L(e, t, n);
          var a = gi;
          if (a && e && t) {
            var l = 'link[rel="preload"][as="' + zt(t) + '"]';
            t === "image" && n && n.imageSrcSet ? (l += '[imagesrcset="' + zt(n.imageSrcSet) + '"]', typeof n.imageSizes == "string" && (l += '[imagesizes="' + zt(n.imageSizes) + '"]')) : l += '[href="' + zt(e) + '"]';
            var i = l;
            switch (t) {
              case "style":
                i = yi(e);
                break;
              case "script":
                i = bi(e);
            }
            gn.has(i) || (e = w({ rel: "preload", href: t === "image" && n && n.imageSrcSet ? void 0 : e, as: t }, n), gn.set(i, e), a.querySelector(l) !== null || t === "style" && a.querySelector(xs(i)) || t === "script" && a.querySelector(Ss(i)) || (t = a.createElement("link"), Nt(t, "link", e), $e(t), a.head.appendChild(t)));
          }
        }
        function f0(e, t) {
          ha.m(e, t);
          var n = gi;
          if (n && e) {
            var a = t && typeof t.as == "string" ? t.as : "script", l = 'link[rel="modulepreload"][as="' + zt(a) + '"][href="' + zt(e) + '"]', i = l;
            switch (a) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                i = bi(e);
            }
            if (!gn.has(i) && (e = w({ rel: "modulepreload", href: e }, t), gn.set(i, e), n.querySelector(l) === null)) {
              switch (a) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                  if (n.querySelector(Ss(i)))
                    return;
              }
              a = n.createElement("link"), Nt(a, "link", e), $e(a), n.head.appendChild(a);
            }
          }
        }
        function d0(e, t, n) {
          ha.S(e, t, n);
          var a = gi;
          if (a && e) {
            var l = xa(a).hoistableStyles, i = yi(e);
            t = t || "default";
            var o = l.get(i);
            if (!o) {
              var b = { loading: 0, preload: null };
              if (o = a.querySelector(xs(i)))
                b.loading = 5;
              else {
                e = w({ rel: "stylesheet", href: e, "data-precedence": t }, n), (n = gn.get(i)) && xo(e, n);
                var N = o = a.createElement("link");
                $e(N), Nt(N, "link", e), N._p = new Promise(function(B, Q) {
                  N.onload = B, N.onerror = Q;
                }), N.addEventListener("load", function() {
                  b.loading |= 1;
                }), N.addEventListener("error", function() {
                  b.loading |= 2;
                }), b.loading |= 4, $u(o, t, a);
              }
              o = { type: "stylesheet", instance: o, count: 1, state: b }, l.set(i, o);
            }
          }
        }
        function h0(e, t) {
          ha.X(e, t);
          var n = gi;
          if (n && e) {
            var a = xa(n).hoistableScripts, l = bi(e), i = a.get(l);
            i || (i = n.querySelector(Ss(l)), i || (e = w({ src: e, async: true }, t), (t = gn.get(l)) && So(e, t), i = n.createElement("script"), $e(i), Nt(i, "link", e), n.head.appendChild(i)), i = { type: "script", instance: i, count: 1, state: null }, a.set(l, i));
          }
        }
        function m0(e, t) {
          ha.M(e, t);
          var n = gi;
          if (n && e) {
            var a = xa(n).hoistableScripts, l = bi(e), i = a.get(l);
            i || (i = n.querySelector(Ss(l)), i || (e = w({ src: e, async: true, type: "module" }, t), (t = gn.get(l)) && So(e, t), i = n.createElement("script"), $e(i), Nt(i, "link", e), n.head.appendChild(i)), i = { type: "script", instance: i, count: 1, state: null }, a.set(l, i));
          }
        }
        function bm(e, t, n, a) {
          var l = (l = $.current) ? Wu(l) : null;
          if (!l)
            throw Error(c(446));
          switch (e) {
            case "meta":
            case "title":
              return null;
            case "style":
              return typeof n.precedence == "string" && typeof n.href == "string" ? (t = yi(n.href), n = xa(l).hoistableStyles, a = n.get(t), a || (a = { type: "style", instance: null, count: 0, state: null }, n.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
            case "link":
              if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
                e = yi(n.href);
                var i = xa(l).hoistableStyles, o = i.get(e);
                if (o || (l = l.ownerDocument || l, o = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, i.set(e, o), (i = l.querySelector(xs(e))) && !i._p && (o.instance = i, o.state.loading = 5), gn.has(e) || (n = { rel: "preload", as: "style", href: n.href, crossOrigin: n.crossOrigin, integrity: n.integrity, media: n.media, hrefLang: n.hrefLang, referrerPolicy: n.referrerPolicy }, gn.set(e, n), i || p0(l, e, n, o.state))), t && a === null)
                  throw Error(c(528, ""));
                return o;
              }
              if (t && a !== null)
                throw Error(c(529, ""));
              return null;
            case "script":
              return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = bi(n), n = xa(l).hoistableScripts, a = n.get(t), a || (a = { type: "script", instance: null, count: 0, state: null }, n.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
            default:
              throw Error(c(444, e));
          }
        }
        function yi(e) {
          return 'href="' + zt(e) + '"';
        }
        function xs(e) {
          return 'link[rel="stylesheet"][' + e + "]";
        }
        function vm(e) {
          return w({}, e, { "data-precedence": e.precedence, precedence: null });
        }
        function p0(e, t, n, a) {
          e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
            return a.loading |= 1;
          }), t.addEventListener("error", function() {
            return a.loading |= 2;
          }), Nt(t, "link", n), $e(t), e.head.appendChild(t));
        }
        function bi(e) {
          return '[src="' + zt(e) + '"]';
        }
        function Ss(e) {
          return "script[async]" + e;
        }
        function xm(e, t, n) {
          if (t.count++, t.instance === null)
            switch (t.type) {
              case "style":
                var a = e.querySelector('style[data-href~="' + zt(n.href) + '"]');
                if (a)
                  return t.instance = a, $e(a), a;
                var l = w({}, n, { "data-href": n.href, "data-precedence": n.precedence, href: null, precedence: null });
                return a = (e.ownerDocument || e).createElement("style"), $e(a), Nt(a, "style", l), $u(a, n.precedence, e), t.instance = a;
              case "stylesheet":
                l = yi(n.href);
                var i = e.querySelector(xs(l));
                if (i)
                  return t.state.loading |= 4, t.instance = i, $e(i), i;
                a = vm(n), (l = gn.get(l)) && xo(a, l), i = (e.ownerDocument || e).createElement("link"), $e(i);
                var o = i;
                return o._p = new Promise(function(b, N) {
                  o.onload = b, o.onerror = N;
                }), Nt(i, "link", a), t.state.loading |= 4, $u(i, n.precedence, e), t.instance = i;
              case "script":
                return i = bi(n.src), (l = e.querySelector(Ss(i))) ? (t.instance = l, $e(l), l) : (a = n, (l = gn.get(i)) && (a = w({}, n), So(a, l)), e = e.ownerDocument || e, l = e.createElement("script"), $e(l), Nt(l, "link", a), e.head.appendChild(l), t.instance = l);
              case "void":
                return null;
              default:
                throw Error(c(443, t.type));
            }
          else
            t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, $u(a, n.precedence, e));
          return t.instance;
        }
        function $u(e, t, n) {
          for (var a = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), l = a.length ? a[a.length - 1] : null, i = l, o = 0; o < a.length; o++) {
            var b = a[o];
            if (b.dataset.precedence === t)
              i = b;
            else if (i !== l)
              break;
          }
          i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
        }
        function xo(e, t) {
          e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
        }
        function So(e, t) {
          e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
        }
        var Pu = null;
        function Sm(e, t, n) {
          if (Pu === null) {
            var a = /* @__PURE__ */ new Map(), l = Pu = /* @__PURE__ */ new Map();
            l.set(n, a);
          } else
            l = Pu, a = l.get(n), a || (a = /* @__PURE__ */ new Map(), l.set(n, a));
          if (a.has(e))
            return a;
          for (a.set(e, null), n = n.getElementsByTagName(e), l = 0; l < n.length; l++) {
            var i = n[l];
            if (!(i[Cn] || i[dt] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
              var o = i.getAttribute(t) || "";
              o = e + o;
              var b = a.get(o);
              b ? b.push(i) : a.set(o, [i]);
            }
          }
          return a;
        }
        function _m(e, t, n) {
          e = e.ownerDocument || e, e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null);
        }
        function g0(e, t, n) {
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
        function Tm(e) {
          return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
        }
        function y0(e, t, n, a) {
          if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== false) && (n.state.loading & 4) === 0) {
            if (n.instance === null) {
              var l = yi(a.href), i = t.querySelector(xs(l));
              if (i) {
                t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Iu.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = i, $e(i);
                return;
              }
              i = t.ownerDocument || t, a = vm(a), (l = gn.get(l)) && xo(a, l), i = i.createElement("link"), $e(i);
              var o = i;
              o._p = new Promise(function(b, N) {
                o.onload = b, o.onerror = N;
              }), Nt(i, "link", a), n.instance = i;
            }
            e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Iu.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
          }
        }
        var _o = 0;
        function b0(e, t) {
          return e.stylesheets && e.count === 0 && tr(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
            var a = setTimeout(function() {
              if (e.stylesheets && tr(e, e.stylesheets), e.unsuspend) {
                var i = e.unsuspend;
                e.unsuspend = null, i();
              }
            }, 6e4 + t);
            0 < e.imgBytes && _o === 0 && (_o = 62500 * Pg());
            var l = setTimeout(function() {
              if (e.waitingForImages = false, e.count === 0 && (e.stylesheets && tr(e, e.stylesheets), e.unsuspend)) {
                var i = e.unsuspend;
                e.unsuspend = null, i();
              }
            }, (e.imgBytes > _o ? 50 : 800) + t);
            return e.unsuspend = n, function() {
              e.unsuspend = null, clearTimeout(a), clearTimeout(l);
            };
          } : null;
        }
        function Iu() {
          if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets)
              tr(this, this.stylesheets);
            else if (this.unsuspend) {
              var e = this.unsuspend;
              this.unsuspend = null, e();
            }
          }
        }
        var er = null;
        function tr(e, t) {
          e.stylesheets = null, e.unsuspend !== null && (e.count++, er = /* @__PURE__ */ new Map(), t.forEach(v0, e), er = null, Iu.call(e));
        }
        function v0(e, t) {
          if (!(t.state.loading & 4)) {
            var n = er.get(e);
            if (n)
              var a = n.get(null);
            else {
              n = /* @__PURE__ */ new Map(), er.set(e, n);
              for (var l = e.querySelectorAll("link[data-precedence],style[data-precedence]"), i = 0; i < l.length; i++) {
                var o = l[i];
                (o.nodeName === "LINK" || o.getAttribute("media") !== "not all") && (n.set(o.dataset.precedence, o), a = o);
              }
              a && n.set(null, a);
            }
            l = t.instance, o = l.getAttribute("data-precedence"), i = n.get(o) || a, i === a && n.set(null, l), n.set(o, l), this.count++, a = Iu.bind(this), l.addEventListener("load", a), l.addEventListener("error", a), i ? i.parentNode.insertBefore(l, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(l, e.firstChild)), t.state.loading |= 4;
          }
        }
        var _s = { $$typeof: ue, Provider: null, Consumer: null, _currentValue: se, _currentValue2: se, _threadCount: 0 };
        function x0(e, t, n, a, l, i, o, b, N) {
          this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = tl(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = tl(0), this.hiddenUpdates = tl(null), this.identifierPrefix = a, this.onUncaughtError = l, this.onCaughtError = i, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = N, this.incompleteTransitions = /* @__PURE__ */ new Map();
        }
        function Am(e, t, n, a, l, i, o, b, N, B, Q, k) {
          return e = new x0(e, t, n, o, N, B, Q, k, b), t = 1, i === true && (t |= 24), i = Zt(3, null, null, t), e.current = i, i.stateNode = e, t = ec(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = { element: a, isDehydrated: n, cache: t }, lc(i), e;
        }
        function Nm(e) {
          return e ? (e = Fl, e) : Fl;
        }
        function Em(e, t, n, a, l, i) {
          l = Nm(l), a.context === null ? a.context = l : a.pendingContext = l, a = Ra(t), a.payload = { element: n }, i = i === void 0 ? null : i, i !== null && (a.callback = i), n = za(e, a, t), n !== null && (Gt(n, e, t), es(n, e, t));
        }
        function wm(e, t) {
          if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t;
          }
        }
        function To(e, t) {
          wm(e, t), (e = e.alternate) && wm(e, t);
        }
        function jm(e) {
          if (e.tag === 13 || e.tag === 31) {
            var t = fl(e, 67108864);
            t !== null && Gt(t, e, 67108864), To(e, 67108864);
          }
        }
        function Om(e) {
          if (e.tag === 13 || e.tag === 31) {
            var t = $t();
            t = st(t);
            var n = fl(e, t);
            n !== null && Gt(n, e, t), To(e, t);
          }
        }
        var nr = true;
        function S0(e, t, n, a) {
          var l = Y.T;
          Y.T = null;
          var i = P.p;
          try {
            P.p = 2, Ao(e, t, n, a);
          } finally {
            P.p = i, Y.T = l;
          }
        }
        function _0(e, t, n, a) {
          var l = Y.T;
          Y.T = null;
          var i = P.p;
          try {
            P.p = 8, Ao(e, t, n, a);
          } finally {
            P.p = i, Y.T = l;
          }
        }
        function Ao(e, t, n, a) {
          if (nr) {
            var l = No(a);
            if (l === null)
              co(e, t, a, ar, n), zm(e, a);
            else if (A0(l, e, t, n, a))
              a.stopPropagation();
            else if (zm(e, a), t & 4 && -1 < T0.indexOf(e)) {
              for (; l !== null; ) {
                var i = Un(l);
                if (i !== null)
                  switch (i.tag) {
                    case 3:
                      if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                        var o = Rn(i.pendingLanes);
                        if (o !== 0) {
                          var b = i;
                          for (b.pendingLanes |= 2, b.entangledLanes |= 2; o; ) {
                            var N = 1 << 31 - wt(o);
                            b.entanglements[1] |= N, o &= ~N;
                          }
                          Gn(i), (Me & 6) === 0 && (Lu = Ot() + 500, gs(0));
                        }
                      }
                      break;
                    case 31:
                    case 13:
                      b = fl(i, 2), b !== null && Gt(b, i, 2), Gu(), To(i, 2);
                  }
                if (i = No(a), i === null && co(e, t, a, ar, n), i === l)
                  break;
                l = i;
              }
              l !== null && a.stopPropagation();
            } else
              co(e, t, a, null, n);
          }
        }
        function No(e) {
          return e = Dl(e), Eo(e);
        }
        var ar = null;
        function Eo(e) {
          if (ar = null, e = va(e), e !== null) {
            var t = v(e);
            if (t === null)
              e = null;
            else {
              var n = t.tag;
              if (n === 13) {
                if (e = h(t), e !== null)
                  return e;
                e = null;
              } else if (n === 31) {
                if (e = x(t), e !== null)
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
          return ar = e, null;
        }
        function Rm(e) {
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
                case Oi:
                  return 8;
                case Wa:
                case Er:
                  return 32;
                case jl:
                  return 268435456;
                default:
                  return 32;
              }
            default:
              return 32;
          }
        }
        var wo = false, Xa = null, Qa = null, Va = null, Ts = /* @__PURE__ */ new Map(), As = /* @__PURE__ */ new Map(), ka = [], T0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
        function zm(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Xa = null;
              break;
            case "dragenter":
            case "dragleave":
              Qa = null;
              break;
            case "mouseover":
            case "mouseout":
              Va = null;
              break;
            case "pointerover":
            case "pointerout":
              Ts.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              As.delete(t.pointerId);
          }
        }
        function Ns(e, t, n, a, l, i) {
          return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: a, nativeEvent: i, targetContainers: [l] }, t !== null && (t = Un(t), t !== null && jm(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
        }
        function A0(e, t, n, a, l) {
          switch (t) {
            case "focusin":
              return Xa = Ns(Xa, e, t, n, a, l), true;
            case "dragenter":
              return Qa = Ns(Qa, e, t, n, a, l), true;
            case "mouseover":
              return Va = Ns(Va, e, t, n, a, l), true;
            case "pointerover":
              var i = l.pointerId;
              return Ts.set(i, Ns(Ts.get(i) || null, e, t, n, a, l)), true;
            case "gotpointercapture":
              return i = l.pointerId, As.set(i, Ns(As.get(i) || null, e, t, n, a, l)), true;
          }
          return false;
        }
        function Cm(e) {
          var t = va(e.target);
          if (t !== null) {
            var n = v(t);
            if (n !== null) {
              if (t = n.tag, t === 13) {
                if (t = h(n), t !== null) {
                  e.blockedOn = t, Vs(e.priority, function() {
                    Om(n);
                  });
                  return;
                }
              } else if (t === 31) {
                if (t = x(n), t !== null) {
                  e.blockedOn = t, Vs(e.priority, function() {
                    Om(n);
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
        function lr(e) {
          if (e.blockedOn !== null)
            return false;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = No(e.nativeEvent);
            if (n === null) {
              n = e.nativeEvent;
              var a = new n.constructor(n.type, n);
              il = a, n.target.dispatchEvent(a), il = null;
            } else
              return t = Un(n), t !== null && jm(t), e.blockedOn = n, false;
            t.shift();
          }
          return true;
        }
        function Um(e, t, n) {
          lr(e) && n.delete(t);
        }
        function N0() {
          wo = false, Xa !== null && lr(Xa) && (Xa = null), Qa !== null && lr(Qa) && (Qa = null), Va !== null && lr(Va) && (Va = null), Ts.forEach(Um), As.forEach(Um);
        }
        function ir(e, t) {
          e.blockedOn === t && (e.blockedOn = null, wo || (wo = true, u.unstable_scheduleCallback(u.unstable_NormalPriority, N0)));
        }
        var sr = null;
        function Mm(e) {
          sr !== e && (sr = e, u.unstable_scheduleCallback(u.unstable_NormalPriority, function() {
            sr === e && (sr = null);
            for (var t = 0; t < e.length; t += 3) {
              var n = e[t], a = e[t + 1], l = e[t + 2];
              if (typeof a != "function") {
                if (Eo(a || n) === null)
                  continue;
                break;
              }
              var i = Un(n);
              i !== null && (e.splice(t, 3), t -= 3, Ac(i, { pending: true, data: l, method: n.method, action: a }, a, l));
            }
          }));
        }
        function vi(e) {
          function t(N) {
            return ir(N, e);
          }
          Xa !== null && ir(Xa, e), Qa !== null && ir(Qa, e), Va !== null && ir(Va, e), Ts.forEach(t), As.forEach(t);
          for (var n = 0; n < ka.length; n++) {
            var a = ka[n];
            a.blockedOn === e && (a.blockedOn = null);
          }
          for (; 0 < ka.length && (n = ka[0], n.blockedOn === null); )
            Cm(n), n.blockedOn === null && ka.shift();
          if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
            for (a = 0; a < n.length; a += 3) {
              var l = n[a], i = n[a + 1], o = l[yt] || null;
              if (typeof i == "function")
                o || Mm(n);
              else if (o) {
                var b = null;
                if (i && i.hasAttribute("formAction")) {
                  if (l = i, o = i[yt] || null)
                    b = o.formAction;
                  else if (Eo(l) !== null)
                    continue;
                } else
                  b = o.action;
                typeof b == "function" ? n[a + 1] = b : (n.splice(a, 3), a -= 3), Mm(n);
              }
            }
        }
        function Dm() {
          function e(i) {
            i.canIntercept && i.info === "react-transition" && i.intercept({ handler: function() {
              return new Promise(function(o) {
                return l = o;
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
        function jo(e) {
          this._internalRoot = e;
        }
        ur.prototype.render = jo.prototype.render = function(e) {
          var t = this._internalRoot;
          if (t === null)
            throw Error(c(409));
          var n = t.current, a = $t();
          Em(n, a, e, t, null, null);
        }, ur.prototype.unmount = jo.prototype.unmount = function() {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            Em(e.current, 2, null, e, null, null), Gu(), t[zn] = null;
          }
        };
        function ur(e) {
          this._internalRoot = e;
        }
        ur.prototype.unstable_scheduleHydration = function(e) {
          if (e) {
            var t = Qs();
            e = { blockedOn: null, target: e, priority: t };
            for (var n = 0; n < ka.length && t !== 0 && t < ka[n].priority; n++)
              ;
            ka.splice(n, 0, e), n === 0 && Cm(e);
          }
        };
        var Bm = s.version;
        if (Bm !== "19.2.0")
          throw Error(c(527, Bm, "19.2.0"));
        P.findDOMNode = function(e) {
          var t = e._reactInternals;
          if (t === void 0)
            throw typeof e.render == "function" ? Error(c(188)) : (e = Object.keys(e).join(","), Error(c(268, e)));
          return e = d(t), e = e !== null ? T(e) : null, e = e === null ? null : e.stateNode, e;
        };
        var E0 = { bundleType: 0, version: "19.2.0", rendererPackageName: "react-dom", currentDispatcherRef: Y, reconcilerVersion: "19.2.0" };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
          var rr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!rr.isDisabled && rr.supportsFiber)
            try {
              $a = rr.inject(E0), Rt = rr;
            } catch (e) {
            }
        }
        return js.createRoot = function(e, t) {
          if (!y(e))
            throw Error(c(299));
          var n = false, a = "", l = Qd, i = Vd, o = kd;
          return t != null && (t.unstable_strictMode === true && (n = true), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (l = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Am(e, 1, false, null, null, n, a, null, l, i, o, Dm), e[zn] = t.current, ro(e), new jo(t);
        }, js.hydrateRoot = function(e, t, n) {
          if (!y(e))
            throw Error(c(299));
          var a = false, l = "", i = Qd, o = Vd, b = kd, N = null;
          return n != null && (n.unstable_strictMode === true && (a = true), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onUncaughtError !== void 0 && (i = n.onUncaughtError), n.onCaughtError !== void 0 && (o = n.onCaughtError), n.onRecoverableError !== void 0 && (b = n.onRecoverableError), n.formState !== void 0 && (N = n.formState)), t = Am(e, 1, true, t, n != null ? n : null, a, l, N, i, o, b, Dm), t.context = Nm(null), n = t.current, a = $t(), a = st(a), l = Ra(a), l.callback = null, za(n, l, a), n = a, t.current.lanes = n, Vn(t, n), Gn(t), e[zn] = t.current, ro(e), new ur(t);
        }, js.version = "19.2.0", js;
      }
      var Pm;
      function vy() {
        if (Pm)
          return Bo.exports;
        Pm = 1;
        function u() {
          if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
            } catch (s) {
              console.error(s);
            }
        }
        return u(), Bo.exports = by(), Bo.exports;
      }
      var xy = vy();
      var Sy = Np(xy);
      var _y = Object.defineProperty;
      var Ty = (u, s, r) => s in u ? _y(u, s, { enumerable: true, configurable: true, writable: true, value: r }) : u[s] = r;
      var El = (u, s, r) => Ty(u, typeof s != "symbol" ? s + "" : s, r);
      var Ay = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
      var Si = {};
      var Os = {};
      var An = {};
      var Im;
      function Op() {
        if (Im)
          return An;
        Im = 1;
        var u = An && An.__assign || function() {
          return u = Object.assign || function(y) {
            for (var v, h = 1, x = arguments.length; h < x; h++) {
              v = arguments[h];
              for (var m in v)
                Object.prototype.hasOwnProperty.call(v, m) && (y[m] = v[m]);
            }
            return y;
          }, u.apply(this, arguments);
        }, s = An && An.__awaiter || function(y, v, h, x) {
          function m(d) {
            return d instanceof h ? d : new h(function(T) {
              T(d);
            });
          }
          return new (h || (h = Promise))(function(d, T) {
            function w(M) {
              try {
                E(x.next(M));
              } catch (K) {
                T(K);
              }
            }
            function G(M) {
              try {
                E(x.throw(M));
              } catch (K) {
                T(K);
              }
            }
            function E(M) {
              M.done ? d(M.value) : m(M.value).then(w, G);
            }
            E((x = x.apply(y, v || [])).next());
          });
        }, r = An && An.__generator || function(y, v) {
          var h = { label: 0, sent: function() {
            if (d[0] & 1)
              throw d[1];
            return d[1];
          }, trys: [], ops: [] }, x, m, d, T;
          return T = { next: w(0), throw: w(1), return: w(2) }, typeof Symbol == "function" && (T[Symbol.iterator] = function() {
            return this;
          }), T;
          function w(E) {
            return function(M) {
              return G([E, M]);
            };
          }
          function G(E) {
            if (x)
              throw new TypeError("Generator is already executing.");
            for (; T && (T = 0, E[0] && (h = 0)), h; )
              try {
                if (x = 1, m && (d = E[0] & 2 ? m.return : E[0] ? m.throw || ((d = m.return) && d.call(m), 0) : m.next) && !(d = d.call(m, E[1])).done)
                  return d;
                switch (m = 0, d && (E = [E[0] & 2, d.value]), E[0]) {
                  case 0:
                  case 1:
                    d = E;
                    break;
                  case 4:
                    return h.label++, { value: E[1], done: false };
                  case 5:
                    h.label++, m = E[1], E = [0];
                    continue;
                  case 7:
                    E = h.ops.pop(), h.trys.pop();
                    continue;
                  default:
                    if (d = h.trys, !(d = d.length > 0 && d[d.length - 1]) && (E[0] === 6 || E[0] === 2)) {
                      h = 0;
                      continue;
                    }
                    if (E[0] === 3 && (!d || E[1] > d[0] && E[1] < d[3])) {
                      h.label = E[1];
                      break;
                    }
                    if (E[0] === 6 && h.label < d[1]) {
                      h.label = d[1], d = E;
                      break;
                    }
                    if (d && h.label < d[2]) {
                      h.label = d[2], h.ops.push(E);
                      break;
                    }
                    d[2] && h.ops.pop(), h.trys.pop();
                    continue;
                }
                E = v.call(y, h);
              } catch (M) {
                E = [6, M], m = 0;
              } finally {
                x = d = 0;
              }
            if (E[0] & 5)
              throw E[1];
            return { value: E[0] ? E[1] : void 0, done: true };
          }
        };
        Object.defineProperty(An, "__esModule", { value: true }), An.FrappeCall = void 0;
        var c = function() {
          function y(v, h, x, m, d) {
            this.appURL = v, this.axios = h, this.useToken = x != null ? x : false, this.token = m, this.tokenType = d;
          }
          return y.prototype.get = function(v, h) {
            return s(this, void 0, void 0, function() {
              var x;
              return r(this, function(m) {
                return x = new URLSearchParams(), h && Object.entries(h).forEach(function(d) {
                  var T = d[0], w = d[1];
                  if (w != null) {
                    var G = typeof w == "object" ? JSON.stringify(w) : w;
                    x.set(T, G);
                  }
                }), [2, this.axios.get("/api/method/".concat(v), { params: x }).then(function(d) {
                  return d.data;
                }).catch(function(d) {
                  var T, w;
                  throw u(u({}, d.response.data), { httpStatus: d.response.status, httpStatusText: d.response.statusText, message: (T = d.response.data.message) !== null && T !== void 0 ? T : "There was an error.", exception: (w = d.response.data.exception) !== null && w !== void 0 ? w : "" });
                })];
              });
            });
          }, y.prototype.post = function(v, h) {
            return s(this, void 0, void 0, function() {
              return r(this, function(x) {
                return [2, this.axios.post("/api/method/".concat(v), u({}, h)).then(function(m) {
                  return m.data;
                }).catch(function(m) {
                  var d, T;
                  throw u(u({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: (d = m.response.data.message) !== null && d !== void 0 ? d : "There was an error.", exception: (T = m.response.data.exception) !== null && T !== void 0 ? T : "" });
                })];
              });
            });
          }, y.prototype.put = function(v, h) {
            return s(this, void 0, void 0, function() {
              return r(this, function(x) {
                return [2, this.axios.put("/api/method/".concat(v), u({}, h)).then(function(m) {
                  return m.data;
                }).catch(function(m) {
                  var d, T;
                  throw u(u({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: (d = m.response.data.message) !== null && d !== void 0 ? d : "There was an error.", exception: (T = m.response.data.exception) !== null && T !== void 0 ? T : "" });
                })];
              });
            });
          }, y.prototype.delete = function(v, h) {
            return s(this, void 0, void 0, function() {
              return r(this, function(x) {
                return [2, this.axios.delete("/api/method/".concat(v), { params: h }).then(function(m) {
                  return m.data;
                }).catch(function(m) {
                  var d, T;
                  throw u(u({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: (d = m.response.data.message) !== null && d !== void 0 ? d : "There was an error.", exception: (T = m.response.data.exception) !== null && T !== void 0 ? T : "" });
                })];
              });
            });
          }, y;
        }();
        return An.FrappeCall = c, An;
      }
      var Nn = {};
      var ep;
      function Rp() {
        if (ep)
          return Nn;
        ep = 1;
        var u = Nn && Nn.__assign || function() {
          return u = Object.assign || function(y) {
            for (var v, h = 1, x = arguments.length; h < x; h++) {
              v = arguments[h];
              for (var m in v)
                Object.prototype.hasOwnProperty.call(v, m) && (y[m] = v[m]);
            }
            return y;
          }, u.apply(this, arguments);
        }, s = Nn && Nn.__awaiter || function(y, v, h, x) {
          function m(d) {
            return d instanceof h ? d : new h(function(T) {
              T(d);
            });
          }
          return new (h || (h = Promise))(function(d, T) {
            function w(M) {
              try {
                E(x.next(M));
              } catch (K) {
                T(K);
              }
            }
            function G(M) {
              try {
                E(x.throw(M));
              } catch (K) {
                T(K);
              }
            }
            function E(M) {
              M.done ? d(M.value) : m(M.value).then(w, G);
            }
            E((x = x.apply(y, v || [])).next());
          });
        }, r = Nn && Nn.__generator || function(y, v) {
          var h = { label: 0, sent: function() {
            if (d[0] & 1)
              throw d[1];
            return d[1];
          }, trys: [], ops: [] }, x, m, d, T;
          return T = { next: w(0), throw: w(1), return: w(2) }, typeof Symbol == "function" && (T[Symbol.iterator] = function() {
            return this;
          }), T;
          function w(E) {
            return function(M) {
              return G([E, M]);
            };
          }
          function G(E) {
            if (x)
              throw new TypeError("Generator is already executing.");
            for (; T && (T = 0, E[0] && (h = 0)), h; )
              try {
                if (x = 1, m && (d = E[0] & 2 ? m.return : E[0] ? m.throw || ((d = m.return) && d.call(m), 0) : m.next) && !(d = d.call(m, E[1])).done)
                  return d;
                switch (m = 0, d && (E = [E[0] & 2, d.value]), E[0]) {
                  case 0:
                  case 1:
                    d = E;
                    break;
                  case 4:
                    return h.label++, { value: E[1], done: false };
                  case 5:
                    h.label++, m = E[1], E = [0];
                    continue;
                  case 7:
                    E = h.ops.pop(), h.trys.pop();
                    continue;
                  default:
                    if (d = h.trys, !(d = d.length > 0 && d[d.length - 1]) && (E[0] === 6 || E[0] === 2)) {
                      h = 0;
                      continue;
                    }
                    if (E[0] === 3 && (!d || E[1] > d[0] && E[1] < d[3])) {
                      h.label = E[1];
                      break;
                    }
                    if (E[0] === 6 && h.label < d[1]) {
                      h.label = d[1], d = E;
                      break;
                    }
                    if (d && h.label < d[2]) {
                      h.label = d[2], h.ops.push(E);
                      break;
                    }
                    d[2] && h.ops.pop(), h.trys.pop();
                    continue;
                }
                E = v.call(y, h);
              } catch (M) {
                E = [6, M], m = 0;
              } finally {
                x = d = 0;
              }
            if (E[0] & 5)
              throw E[1];
            return { value: E[0] ? E[1] : void 0, done: true };
          }
        };
        Object.defineProperty(Nn, "__esModule", { value: true }), Nn.FrappeDB = void 0;
        var c = function() {
          function y(v, h, x, m, d) {
            this.appURL = v, this.axios = h, this.useToken = x != null ? x : false, this.token = m, this.tokenType = d;
          }
          return y.prototype.getDoc = function(v, h) {
            return h === void 0 && (h = ""), s(this, void 0, void 0, function() {
              return r(this, function(x) {
                return [2, this.axios.get("/api/resource/".concat(v, "/").concat(encodeURIComponent(h))).then(function(m) {
                  return m.data.data;
                }).catch(function(m) {
                  var d, T;
                  throw u(u({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: "There was an error while fetching the document.", exception: (T = (d = m.response.data.exception) !== null && d !== void 0 ? d : m.response.data.exc_type) !== null && T !== void 0 ? T : "" });
                })];
              });
            });
          }, y.prototype.getDocList = function(v, h) {
            var x;
            return s(this, void 0, void 0, function() {
              var m, d, T, w, G, E, M, K, re, ce, be;
              return r(this, function(ue) {
                return m = {}, h && (d = h.fields, T = h.filters, w = h.orFilters, G = h.orderBy, E = h.limit, M = h.limit_start, K = h.groupBy, re = h.asDict, ce = re === void 0 ? true : re, be = G ? "".concat(String(G == null ? void 0 : G.field), " ").concat((x = G == null ? void 0 : G.order) !== null && x !== void 0 ? x : "asc") : "", m = { fields: d ? JSON.stringify(d) : void 0, filters: T ? JSON.stringify(T) : void 0, or_filters: w ? JSON.stringify(w) : void 0, order_by: be, group_by: K, limit: E, limit_start: M, as_dict: ce }), [2, this.axios.get("/api/resource/".concat(v), { params: m }).then(function(_e) {
                  return _e.data.data;
                }).catch(function(_e) {
                  var Te, De;
                  throw u(u({}, _e.response.data), { httpStatus: _e.response.status, httpStatusText: _e.response.statusText, message: "There was an error while fetching the documents.", exception: (De = (Te = _e.response.data.exception) !== null && Te !== void 0 ? Te : _e.response.data.exc_type) !== null && De !== void 0 ? De : "" });
                })];
              });
            });
          }, y.prototype.createDoc = function(v, h) {
            return s(this, void 0, void 0, function() {
              return r(this, function(x) {
                return [2, this.axios.post("/api/resource/".concat(v), u({}, h)).then(function(m) {
                  return m.data.data;
                }).catch(function(m) {
                  var d, T, w;
                  throw u(u({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: (d = m.response.data.message) !== null && d !== void 0 ? d : "There was an error while creating the document.", exception: (w = (T = m.response.data.exception) !== null && T !== void 0 ? T : m.response.data.exc_type) !== null && w !== void 0 ? w : "" });
                })];
              });
            });
          }, y.prototype.updateDoc = function(v, h, x) {
            return s(this, void 0, void 0, function() {
              return r(this, function(m) {
                return [2, this.axios.put("/api/resource/".concat(v, "/").concat(h && encodeURIComponent(h)), u({}, x)).then(function(d) {
                  return d.data.data;
                }).catch(function(d) {
                  var T, w, G;
                  throw u(u({}, d.response.data), { httpStatus: d.response.status, httpStatusText: d.response.statusText, message: (T = d.response.data.message) !== null && T !== void 0 ? T : "There was an error while updating the document.", exception: (G = (w = d.response.data.exception) !== null && w !== void 0 ? w : d.response.data.exc_type) !== null && G !== void 0 ? G : "" });
                })];
              });
            });
          }, y.prototype.deleteDoc = function(v, h) {
            return s(this, void 0, void 0, function() {
              return r(this, function(x) {
                return [2, this.axios.delete("/api/resource/".concat(v, "/").concat(h && encodeURIComponent(h))).then(function(m) {
                  return m.data;
                }).catch(function(m) {
                  var d, T;
                  throw u(u({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: "There was an error while deleting the document.", exception: (T = (d = m.response.data.exception) !== null && d !== void 0 ? d : m.response.data.exc_type) !== null && T !== void 0 ? T : "" });
                })];
              });
            });
          }, y.prototype.getCount = function(v, h, x, m) {
            return x === void 0 && (x = false), m === void 0 && (m = false), s(this, void 0, void 0, function() {
              var d;
              return r(this, function(T) {
                return d = { doctype: v, filters: [] }, x && (d.cache = x), m && (d.debug = m), h && (d.filters = h ? JSON.stringify(h) : void 0), [2, this.axios.get("/api/method/frappe.client.get_count", { params: d }).then(function(w) {
                  return w.data.message;
                }).catch(function(w) {
                  var G, E;
                  throw u(u({}, w.response.data), { httpStatus: w.response.status, httpStatusText: w.response.statusText, message: "There was an error while getting the count.", exception: (E = (G = w.response.data.exception) !== null && G !== void 0 ? G : w.response.data.exc_type) !== null && E !== void 0 ? E : "" });
                })];
              });
            });
          }, y.prototype.getLastDoc = function(v, h) {
            return s(this, void 0, void 0, function() {
              var x, m;
              return r(this, function(d) {
                switch (d.label) {
                  case 0:
                    return x = { orderBy: { field: "creation", order: "desc" } }, h && (x = u(u({}, x), h)), [4, this.getDocList(v, u(u({}, x), { limit: 1, fields: ["name"] }))];
                  case 1:
                    return m = d.sent(), m.length > 0 ? [2, this.getDoc(v, m[0].name)] : [2, {}];
                }
              });
            });
          }, y.prototype.renameDoc = function(v, h, x, m) {
            return m === void 0 && (m = false), s(this, void 0, void 0, function() {
              return r(this, function(d) {
                return [2, this.axios.post("/api/method/frappe.client.rename_doc", { doctype: v, old_name: h, new_name: x, merge: m }).then(function(T) {
                  return T.data;
                }).catch(function(T) {
                  var w, G, E;
                  throw u(u({}, T.response.data), { httpStatus: T.response.status, httpStatusText: T.response.statusText, message: (w = T.response.data.message) !== null && w !== void 0 ? w : "There was an error while renaming the document.", exception: (E = (G = T.response.data.exception) !== null && G !== void 0 ? G : T.response.data.exc_type) !== null && E !== void 0 ? E : "" });
                })];
              });
            });
          }, y.prototype.getValue = function(v, h, x, m, d, T) {
            return m === void 0 && (m = true), d === void 0 && (d = false), T === void 0 && (T = null), s(this, void 0, void 0, function() {
              var w;
              return r(this, function(G) {
                return w = { doctype: v, fieldname: "[]", filters: [], as_dict: m, debug: d, parent: null }, h && (w.fieldname = typeof h == "object" ? JSON.stringify(h) : h), x && (w.filters = x ? JSON.stringify(x) : void 0), T && (w.parent = T), [2, this.axios.get("/api/method/frappe.client.get_value", { params: w }).then(function(E) {
                  return E.data;
                }).catch(function(E) {
                  var M, K;
                  throw u(u({}, E.response.data), { httpStatus: E.response.status, httpStatusText: E.response.statusText, message: "There was an error while getting the value.", exception: (K = (M = E.response.data.exception) !== null && M !== void 0 ? M : E.response.data.exc_type) !== null && K !== void 0 ? K : "" });
                })];
              });
            });
          }, y.prototype.setValue = function(v, h, x, m) {
            return s(this, void 0, void 0, function() {
              return r(this, function(d) {
                return x !== null && typeof x == "object" && !Array.isArray(x) && (m = void 0), [2, this.axios.post("/api/method/frappe.client.set_value", { doctype: v, name: h, fieldname: x, value: m }).then(function(T) {
                  return T.data;
                }).catch(function(T) {
                  var w, G;
                  throw u(u({}, T.response.data), { httpStatus: T.response.status, httpStatusText: T.response.statusText, message: "There was an error while setting the value.", exception: (G = (w = T.response.data.exception) !== null && w !== void 0 ? w : T.response.data.exc_type) !== null && G !== void 0 ? G : "" });
                })];
              });
            });
          }, y.prototype.getSingleValue = function(v, h) {
            return s(this, void 0, void 0, function() {
              var x;
              return r(this, function(m) {
                return x = { doctype: v, field: h }, [2, this.axios.get("/api/method/frappe.client.get_single_value", { params: x }).then(function(d) {
                  return d.data;
                }).catch(function(d) {
                  var T, w;
                  throw u(u({}, d.response.data), { httpStatus: d.response.status, httpStatusText: d.response.statusText, message: "There was an error while getting the value of single doctype.", exception: (w = (T = d.response.data.exception) !== null && T !== void 0 ? T : d.response.data.exc_type) !== null && w !== void 0 ? w : "" });
                })];
              });
            });
          }, y.prototype.submit = function(v) {
            return s(this, void 0, void 0, function() {
              return r(this, function(h) {
                return [2, this.axios.post("/api/method/frappe.client.submit", { doc: v }).then(function(x) {
                  return x.data.message;
                }).catch(function(x) {
                  var m, d;
                  throw u(u({}, x.response.data), { httpStatus: x.response.status, httpStatusText: x.response.statusText, message: "There was an error while submitting the document.", exception: (d = (m = x.response.data.exception) !== null && m !== void 0 ? m : x.response.data.exc_type) !== null && d !== void 0 ? d : "" });
                })];
              });
            });
          }, y.prototype.cancel = function(v, h) {
            return s(this, void 0, void 0, function() {
              return r(this, function(x) {
                return [2, this.axios.post("/api/method/frappe.client.cancel", { doctype: v, name: h }).then(function(m) {
                  return m.data;
                }).catch(function(m) {
                  var d, T;
                  throw u(u({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: "There was an error while cancelling the document.", exception: (T = (d = m.response.data.exception) !== null && d !== void 0 ? d : m.response.data.exc_type) !== null && T !== void 0 ? T : "" });
                })];
              });
            });
          }, y;
        }();
        return Nn.FrappeDB = c, Nn;
      }
      var En = {};
      var pa = {};
      var Yo;
      var tp;
      function Ny() {
        if (tp)
          return Yo;
        tp = 1;
        function u(f, p) {
          return function() {
            return f.apply(p, arguments);
          };
        }
        const { toString: s } = Object.prototype, { getPrototypeOf: r } = Object, { iterator: c, toStringTag: y } = Symbol, v = ((f) => (p) => {
          const S = s.call(p);
          return f[S] || (f[S] = S.slice(8, -1).toLowerCase());
        })(/* @__PURE__ */ Object.create(null)), h = (f) => (f = f.toLowerCase(), (p) => v(p) === f), x = (f) => (p) => typeof p === f, { isArray: m } = Array, d = x("undefined");
        function T(f) {
          return f !== null && !d(f) && f.constructor !== null && !d(f.constructor) && M(f.constructor.isBuffer) && f.constructor.isBuffer(f);
        }
        const w = h("ArrayBuffer");
        function G(f) {
          let p;
          return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? p = ArrayBuffer.isView(f) : p = f && f.buffer && w(f.buffer), p;
        }
        const E = x("string"), M = x("function"), K = x("number"), re = (f) => f !== null && typeof f == "object", ce = (f) => f === true || f === false, be = (f) => {
          if (v(f) !== "object")
            return false;
          const p = r(f);
          return (p === null || p === Object.prototype || Object.getPrototypeOf(p) === null) && !(y in f) && !(c in f);
        }, ue = (f) => {
          if (!re(f) || T(f))
            return false;
          try {
            return Object.keys(f).length === 0 && Object.getPrototypeOf(f) === Object.prototype;
          } catch (p) {
            return false;
          }
        }, _e = h("Date"), Te = h("File"), De = h("Blob"), me = h("FileList"), Ie = (f) => re(f) && M(f.pipe), pt = (f) => {
          let p;
          return f && (typeof FormData == "function" && f instanceof FormData || M(f.append) && ((p = v(f)) === "formdata" || p === "object" && M(f.toString) && f.toString() === "[object FormData]"));
        }, It = h("URLSearchParams"), [Et, it, gt, ze] = ["ReadableStream", "Request", "Response", "Headers"].map(h), Je = (f) => f.trim ? f.trim() : f.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        function Y(f, p, { allOwnKeys: S = false } = {}) {
          if (f === null || typeof f > "u")
            return;
          let _, j;
          if (typeof f != "object" && (f = [f]), m(f))
            for (_ = 0, j = f.length; _ < j; _++)
              p.call(null, f[_], _, f);
          else {
            if (T(f))
              return;
            const U = S ? Object.getOwnPropertyNames(f) : Object.keys(f), C = U.length;
            let F;
            for (_ = 0; _ < C; _++)
              F = U[_], p.call(null, f[F], F, f);
          }
        }
        function P(f, p) {
          if (T(f))
            return null;
          p = p.toLowerCase();
          const S = Object.keys(f);
          let _ = S.length, j;
          for (; _-- > 0; )
            if (j = S[_], p === j.toLowerCase())
              return j;
          return null;
        }
        const se = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Ay, Re = (f) => !d(f) && f !== se;
        function I() {
          const { caseless: f, skipUndefined: p } = Re(this) && this || {}, S = {}, _ = (j, U) => {
            const C = f && P(S, U) || U;
            be(S[C]) && be(j) ? S[C] = I(S[C], j) : be(j) ? S[C] = I({}, j) : m(j) ? S[C] = j.slice() : (!p || !d(j)) && (S[C] = j);
          };
          for (let j = 0, U = arguments.length; j < U; j++)
            arguments[j] && Y(arguments[j], _);
          return S;
        }
        const A = (f, p, S, { allOwnKeys: _ } = {}) => (Y(p, (j, U) => {
          S && M(j) ? f[U] = u(j, S) : f[U] = j;
        }, { allOwnKeys: _ }), f), X = (f) => (f.charCodeAt(0) === 65279 && (f = f.slice(1)), f), z = (f, p, S, _) => {
          f.prototype = Object.create(p.prototype, _), f.prototype.constructor = f, Object.defineProperty(f, "super", { value: p.prototype }), S && Object.assign(f.prototype, S);
        }, Z = (f, p, S, _) => {
          let j, U, C;
          const F = {};
          if (p = p || {}, f == null)
            return p;
          do {
            for (j = Object.getOwnPropertyNames(f), U = j.length; U-- > 0; )
              C = j[U], (!_ || _(C, f, p)) && !F[C] && (p[C] = f[C], F[C] = true);
            f = S !== false && r(f);
          } while (f && (!S || S(f, p)) && f !== Object.prototype);
          return p;
        }, J = (f, p, S) => {
          f = String(f), (S === void 0 || S > f.length) && (S = f.length), S -= p.length;
          const _ = f.indexOf(p, S);
          return _ !== -1 && _ === S;
        }, $ = (f) => {
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
        }, he = ((f) => (p) => f && p instanceof f)(typeof Uint8Array < "u" && r(Uint8Array)), Fe = (f, p) => {
          const S = (f && f[c]).call(f);
          let _;
          for (; (_ = S.next()) && !_.done; ) {
            const j = _.value;
            p.call(f, j[0], j[1]);
          }
        }, Se = (f, p) => {
          let S;
          const _ = [];
          for (; (S = f.exec(p)) !== null; )
            _.push(S);
          return _;
        }, bn = h("HTMLFormElement"), Ut = (f) => f.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(p, S, _) {
          return S.toUpperCase() + _;
        }), ya = (({ hasOwnProperty: f }) => (p, S) => f.call(p, S))(Object.prototype), Mt = h("RegExp"), en = (f, p) => {
          const S = Object.getOwnPropertyDescriptors(f), _ = {};
          Y(S, (j, U) => {
            let C;
            (C = p(j, U, f)) !== false && (_[U] = C || j);
          }), Object.defineProperties(f, _);
        }, Ai = (f) => {
          en(f, (p, S) => {
            if (M(f) && ["arguments", "caller", "callee"].indexOf(S) !== -1)
              return false;
            const _ = f[S];
            if (M(_)) {
              if (p.enumerable = false, "writable" in p) {
                p.writable = false;
                return;
              }
              p.set || (p.set = () => {
                throw Error("Can not rewrite read-only method '" + S + "'");
              });
            }
          });
        }, Ni = (f, p) => {
          const S = {}, _ = (j) => {
            j.forEach((U) => {
              S[U] = true;
            });
          };
          return m(f) ? _(f) : _(String(f).split(p)), S;
        }, Ar = () => {
        }, Ms = (f, p) => f != null && Number.isFinite(f = +f) ? f : p;
        function Ei(f) {
          return !!(f && M(f.append) && f[y] === "FormData" && f[c]);
        }
        const wi = (f) => {
          const p = new Array(10), S = (_, j) => {
            if (re(_)) {
              if (p.indexOf(_) >= 0)
                return;
              if (T(_))
                return _;
              if (!("toJSON" in _)) {
                p[j] = _;
                const U = m(_) ? [] : {};
                return Y(_, (C, F) => {
                  const le = S(C, j + 1);
                  !d(le) && (U[F] = le);
                }), p[j] = void 0, U;
              }
            }
            return _;
          };
          return S(f, 0);
        }, ji = h("AsyncFunction"), Nr = (f) => f && (re(f) || M(f)) && M(f.then) && M(f.catch), Ds = ((f, p) => f ? setImmediate : p ? ((S, _) => (se.addEventListener("message", ({ source: j, data: U }) => {
          j === se && U === S && _.length && _.shift()();
        }, false), (j) => {
          _.push(j), se.postMessage(S, "*");
        }))(`axios@${Math.random()}`, []) : (S) => setTimeout(S))(typeof setImmediate == "function", M(se.postMessage)), Ot = typeof queueMicrotask < "u" ? queueMicrotask.bind(se) : typeof process < "u" && process.nextTick || Ds;
        var H = { isArray: m, isArrayBuffer: w, isBuffer: T, isFormData: pt, isArrayBufferView: G, isString: E, isNumber: K, isBoolean: ce, isObject: re, isPlainObject: be, isEmptyObject: ue, isReadableStream: Et, isRequest: it, isResponse: gt, isHeaders: ze, isUndefined: d, isDate: _e, isFile: Te, isBlob: De, isRegExp: Mt, isFunction: M, isStream: Ie, isURLSearchParams: It, isTypedArray: he, isFileList: me, forEach: Y, merge: I, extend: A, trim: Je, stripBOM: X, inherits: z, toFlatObject: Z, kindOf: v, kindOfTest: h, endsWith: J, toArray: $, forEachEntry: Fe, matchAll: Se, isHTMLForm: bn, hasOwnProperty: ya, hasOwnProp: ya, reduceDescriptors: en, freezeMethods: Ai, toObjectSet: Ni, toCamelCase: Ut, noop: Ar, toFiniteNumber: Ms, findKey: P, global: se, isContextDefined: Re, isSpecCompliantForm: Ei, toJSONObject: wi, isAsyncFn: ji, isThenable: Nr, setImmediate: Ds, asap: Ot, isIterable: (f) => f != null && M(f[c]) };
        function pe(f, p, S, _, j) {
          Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = f, this.name = "AxiosError", p && (this.code = p), S && (this.config = S), _ && (this.request = _), j && (this.response = j, this.status = j.status ? j.status : null);
        }
        H.inherits(pe, Error, { toJSON: function() {
          return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: H.toJSONObject(this.config), code: this.code, status: this.status };
        } });
        const Oi = pe.prototype, Wa = {};
        ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((f) => {
          Wa[f] = { value: f };
        }), Object.defineProperties(pe, Wa), Object.defineProperty(Oi, "isAxiosError", { value: true }), pe.from = (f, p, S, _, j, U) => {
          const C = Object.create(Oi);
          H.toFlatObject(f, C, function(W) {
            return W !== Error.prototype;
          }, (W) => W !== "isAxiosError");
          const F = f && f.message ? f.message : "Error", le = p == null && f ? f.code : p;
          return pe.call(C, F, le, S, _, j), f && C.cause == null && Object.defineProperty(C, "cause", { value: f, configurable: true }), C.name = f && f.name || "Error", U && Object.assign(C, U), C;
        };
        var Er = null;
        function jl(f) {
          return H.isPlainObject(f) || H.isArray(f);
        }
        function Bs(f) {
          return H.endsWith(f, "[]") ? f.slice(0, -2) : f;
        }
        function qs(f, p, S) {
          return f ? f.concat(p).map(function(_, j) {
            return _ = Bs(_), !S && j ? "[" + _ + "]" : _;
          }).join(S ? "." : "") : p;
        }
        function $a(f) {
          return H.isArray(f) && !f.some(jl);
        }
        const Rt = H.toFlatObject(H, {}, null, function(f) {
          return /^is[A-Z]/.test(f);
        });
        function Qt(f, p, S) {
          if (!H.isObject(f))
            throw new TypeError("target must be an object");
          p = p || new FormData(), S = H.toFlatObject(S, { metaTokens: true, dots: false, indexes: false }, false, function(ge, te) {
            return !H.isUndefined(te[ge]);
          });
          const _ = S.metaTokens, j = S.visitor || W, U = S.dots, C = S.indexes, F = (S.Blob || typeof Blob < "u" && Blob) && H.isSpecCompliantForm(p);
          if (!H.isFunction(j))
            throw new TypeError("visitor must be a function");
          function le(ge) {
            if (ge === null)
              return "";
            if (H.isDate(ge))
              return ge.toISOString();
            if (H.isBoolean(ge))
              return ge.toString();
            if (!F && H.isBlob(ge))
              throw new pe("Blob is not supported. Use a Buffer instead.");
            return H.isArrayBuffer(ge) || H.isTypedArray(ge) ? F && typeof Blob == "function" ? new Blob([ge]) : Buffer.from(ge) : ge;
          }
          function W(ge, te, ne) {
            let ke = ge;
            if (ge && !ne && typeof ge == "object") {
              if (H.endsWith(te, "{}"))
                te = _ ? te : te.slice(0, -2), ge = JSON.stringify(ge);
              else if (H.isArray(ge) && $a(ge) || (H.isFileList(ge) || H.endsWith(te, "[]")) && (ke = H.toArray(ge)))
                return te = Bs(te), ke.forEach(function(vt, nt) {
                  !(H.isUndefined(vt) || vt === null) && p.append(C === true ? qs([te], nt, U) : C === null ? te : te + "[]", le(vt));
                }), false;
            }
            return jl(ge) ? true : (p.append(qs(ne, te, U), le(ge)), false);
          }
          const ee = [], de = Object.assign(Rt, { defaultVisitor: W, convertValue: le, isVisitable: jl });
          function Le(ge, te) {
            if (!H.isUndefined(ge)) {
              if (ee.indexOf(ge) !== -1)
                throw Error("Circular reference detected in " + te.join("."));
              ee.push(ge), H.forEach(ge, function(ne, ke) {
                (!(H.isUndefined(ne) || ne === null) && j.call(p, ne, H.isString(ke) ? ke.trim() : ke, te, de)) === true && Le(ne, te ? te.concat(ke) : [ke]);
              }), ee.pop();
            }
          }
          if (!H.isObject(f))
            throw new TypeError("data must be an object");
          return Le(f), p;
        }
        function wt(f) {
          const p = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
          return encodeURIComponent(f).replace(/[!'()~]|%20|%00/g, function(S) {
            return p[S];
          });
        }
        function Ri(f, p) {
          this._pairs = [], f && Qt(f, this, p);
        }
        const Hs = Ri.prototype;
        Hs.append = function(f, p) {
          this._pairs.push([f, p]);
        }, Hs.toString = function(f) {
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
        function Pa(f, p, S) {
          if (!p)
            return f;
          const _ = S && S.encode || wr;
          H.isFunction(S) && (S = { serialize: S });
          const j = S && S.serialize;
          let U;
          if (j ? U = j(p, S) : U = H.isURLSearchParams(p) ? p.toString() : new Ri(p, S).toString(_), U) {
            const C = f.indexOf("#");
            C !== -1 && (f = f.slice(0, C)), f += (f.indexOf("?") === -1 ? "?" : "&") + U;
          }
          return f;
        }
        class Ol {
          constructor() {
            this.handlers = [];
          }
          use(p, S, _) {
            return this.handlers.push({ fulfilled: p, rejected: S, synchronous: _ ? _.synchronous : false, runWhen: _ ? _.runWhen : null }), this.handlers.length - 1;
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
        var Ia = Ol, Rn = { silentJSONParsing: true, forcedJSONParsing: true, clarifyTimeoutError: false }, Rl = typeof URLSearchParams < "u" ? URLSearchParams : Ri, el = typeof FormData < "u" ? FormData : null, jr = typeof Blob < "u" ? Blob : null, Ls = { isBrowser: true, classes: { URLSearchParams: Rl, FormData: el, Blob: jr }, protocols: ["http", "https", "file", "blob", "url", "data"] };
        const tl = typeof window < "u" && typeof document < "u", Vn = typeof navigator == "object" && navigator || void 0, Or = tl && (!Vn || ["ReactNative", "NativeScript", "NS"].indexOf(Vn.product) < 0), Ys = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Gs = tl && window.location.href || "http://localhost";
        var Xs = Object.freeze({ __proto__: null, hasBrowserEnv: tl, hasStandardBrowserWebWorkerEnv: Ys, hasStandardBrowserEnv: Or, navigator: Vn, origin: Gs }), st = Be(Be({}, Xs), Ls);
        function zi(f, p) {
          return Qt(f, new st.classes.URLSearchParams(), Be({ visitor: function(S, _, j, U) {
            return st.isNode && H.isBuffer(S) ? (this.append(_, S.toString("base64")), false) : U.defaultVisitor.apply(this, arguments);
          } }, p));
        }
        function Qs(f) {
          return H.matchAll(/\w+|\[(\w*)]/g, f).map((p) => p[0] === "[]" ? "" : p[1] || p[0]);
        }
        function Vs(f) {
          const p = {}, S = Object.keys(f);
          let _;
          const j = S.length;
          let U;
          for (_ = 0; _ < j; _++)
            U = S[_], p[U] = f[U];
          return p;
        }
        function vn(f) {
          function p(S, _, j, U) {
            let C = S[U++];
            if (C === "__proto__")
              return true;
            const F = Number.isFinite(+C), le = U >= S.length;
            return C = !C && H.isArray(j) ? j.length : C, le ? (H.hasOwnProp(j, C) ? j[C] = [j[C], _] : j[C] = _, !F) : ((!j[C] || !H.isObject(j[C])) && (j[C] = []), p(S, _, j[C], U) && H.isArray(j[C]) && (j[C] = Vs(j[C])), !F);
          }
          if (H.isFormData(f) && H.isFunction(f.entries)) {
            const S = {};
            return H.forEachEntry(f, (_, j) => {
              p(Qs(_), j, S, 0);
            }), S;
          }
          return null;
        }
        function dt(f, p, S) {
          if (H.isString(f))
            try {
              return (p || JSON.parse)(f), H.trim(f);
            } catch (_) {
              if (_.name !== "SyntaxError")
                throw _;
            }
          return (S || JSON.stringify)(f);
        }
        const yt = { transitional: Rn, adapter: ["xhr", "http", "fetch"], transformRequest: [function(f, p) {
          const S = p.getContentType() || "", _ = S.indexOf("application/json") > -1, j = H.isObject(f);
          if (j && H.isHTMLForm(f) && (f = new FormData(f)), H.isFormData(f))
            return _ ? JSON.stringify(vn(f)) : f;
          if (H.isArrayBuffer(f) || H.isBuffer(f) || H.isStream(f) || H.isFile(f) || H.isBlob(f) || H.isReadableStream(f))
            return f;
          if (H.isArrayBufferView(f))
            return f.buffer;
          if (H.isURLSearchParams(f))
            return p.setContentType("application/x-www-form-urlencoded;charset=utf-8", false), f.toString();
          let U;
          if (j) {
            if (S.indexOf("application/x-www-form-urlencoded") > -1)
              return zi(f, this.formSerializer).toString();
            if ((U = H.isFileList(f)) || S.indexOf("multipart/form-data") > -1) {
              const C = this.env && this.env.FormData;
              return Qt(U ? { "files[]": f } : f, C && new C(), this.formSerializer);
            }
          }
          return j || _ ? (p.setContentType("application/json", false), dt(f)) : f;
        }], transformResponse: [function(f) {
          const p = this.transitional || yt.transitional, S = p && p.forcedJSONParsing, _ = this.responseType === "json";
          if (H.isResponse(f) || H.isReadableStream(f))
            return f;
          if (f && H.isString(f) && (S && !this.responseType || _)) {
            const j = !(p && p.silentJSONParsing) && _;
            try {
              return JSON.parse(f, this.parseReviver);
            } catch (U) {
              if (j)
                throw U.name === "SyntaxError" ? pe.from(U, pe.ERR_BAD_RESPONSE, this, null, this.response) : U;
            }
          }
          return f;
        }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, env: { FormData: st.classes.FormData, Blob: st.classes.Blob }, validateStatus: function(f) {
          return f >= 200 && f < 300;
        }, headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } } };
        H.forEach(["delete", "get", "head", "post", "put", "patch"], (f) => {
          yt.headers[f] = {};
        });
        var zn = yt;
        const Ci = H.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);
        var Rr = (f) => {
          const p = {};
          let S, _, j;
          return f && f.split(`
`).forEach(function(U) {
            j = U.indexOf(":"), S = U.substring(0, j).trim().toLowerCase(), _ = U.substring(j + 1).trim(), !(!S || p[S] && Ci[S]) && (S === "set-cookie" ? p[S] ? p[S].push(_) : p[S] = [_] : p[S] = p[S] ? p[S] + ", " + _ : _);
          }), p;
        };
        const ks = Symbol("internals");
        function ba(f) {
          return f && String(f).trim().toLowerCase();
        }
        function Cn(f) {
          return f === false || f == null ? f : H.isArray(f) ? f.map(Cn) : String(f);
        }
        function Ui(f) {
          const p = /* @__PURE__ */ Object.create(null), S = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
          let _;
          for (; _ = S.exec(f); )
            p[_[1]] = _[2];
          return p;
        }
        const va = (f) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(f.trim());
        function Un(f, p, S, _, j) {
          if (H.isFunction(_))
            return _.call(this, p, S);
          if (j && (p = S), !!H.isString(p)) {
            if (H.isString(_))
              return p.indexOf(_) !== -1;
            if (H.isRegExp(_))
              return _.test(p);
          }
        }
        function nl(f) {
          return f.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (p, S, _) => S.toUpperCase() + _);
        }
        function xa(f, p) {
          const S = H.toCamelCase(" " + p);
          ["get", "set", "has"].forEach((_) => {
            Object.defineProperty(f, _ + S, { value: function(j, U, C) {
              return this[_].call(this, p, j, U, C);
            }, configurable: true });
          });
        }
        class $e {
          constructor(p) {
            p && this.set(p);
          }
          set(p, S, _) {
            const j = this;
            function U(F, le, W) {
              const ee = ba(le);
              if (!ee)
                throw new Error("header name must be a non-empty string");
              const de = H.findKey(j, ee);
              (!de || j[de] === void 0 || W === true || W === void 0 && j[de] !== false) && (j[de || le] = Cn(F));
            }
            const C = (F, le) => H.forEach(F, (W, ee) => U(W, ee, le));
            if (H.isPlainObject(p) || p instanceof this.constructor)
              C(p, S);
            else if (H.isString(p) && (p = p.trim()) && !va(p))
              C(Rr(p), S);
            else if (H.isObject(p) && H.isIterable(p)) {
              let F = {}, le, W;
              for (const ee of p) {
                if (!H.isArray(ee))
                  throw TypeError("Object iterator must return a key-value pair");
                F[W = ee[0]] = (le = F[W]) ? H.isArray(le) ? [...le, ee[1]] : [le, ee[1]] : ee[1];
              }
              C(F, S);
            } else
              p != null && U(S, p, _);
            return this;
          }
          get(p, S) {
            if (p = ba(p), p) {
              const _ = H.findKey(this, p);
              if (_) {
                const j = this[_];
                if (!S)
                  return j;
                if (S === true)
                  return Ui(j);
                if (H.isFunction(S))
                  return S.call(this, j, _);
                if (H.isRegExp(S))
                  return S.exec(j);
                throw new TypeError("parser must be boolean|regexp|function");
              }
            }
          }
          has(p, S) {
            if (p = ba(p), p) {
              const _ = H.findKey(this, p);
              return !!(_ && this[_] !== void 0 && (!S || Un(this, this[_], _, S)));
            }
            return false;
          }
          delete(p, S) {
            const _ = this;
            let j = false;
            function U(C) {
              if (C = ba(C), C) {
                const F = H.findKey(_, C);
                F && (!S || Un(_, _[F], F, S)) && (delete _[F], j = true);
              }
            }
            return H.isArray(p) ? p.forEach(U) : U(p), j;
          }
          clear(p) {
            const S = Object.keys(this);
            let _ = S.length, j = false;
            for (; _--; ) {
              const U = S[_];
              (!p || Un(this, this[U], U, p, true)) && (delete this[U], j = true);
            }
            return j;
          }
          normalize(p) {
            const S = this, _ = {};
            return H.forEach(this, (j, U) => {
              const C = H.findKey(_, U);
              if (C) {
                S[C] = Cn(j), delete S[U];
                return;
              }
              const F = p ? nl(U) : String(U).trim();
              F !== U && delete S[U], S[F] = Cn(j), _[F] = true;
            }), this;
          }
          concat(...p) {
            return this.constructor.concat(this, ...p);
          }
          toJSON(p) {
            const S = /* @__PURE__ */ Object.create(null);
            return H.forEach(this, (_, j) => {
              _ != null && _ !== false && (S[j] = p && H.isArray(_) ? _.join(", ") : _);
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
            const _ = new this(p);
            return S.forEach((j) => _.set(j)), _;
          }
          static accessor(p) {
            const S = (this[ks] = this[ks] = { accessors: {} }).accessors, _ = this.prototype;
            function j(U) {
              const C = ba(U);
              S[C] || (xa(_, U), S[C] = true);
            }
            return H.isArray(p) ? p.forEach(j) : j(p), this;
          }
        }
        $e.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), H.reduceDescriptors($e.prototype, ({ value: f }, p) => {
          let S = p[0].toUpperCase() + p.slice(1);
          return { get: () => f, set(_) {
            this[S] = _;
          } };
        }), H.freezeMethods($e);
        var Dt = $e;
        function zl(f, p) {
          const S = this || zn, _ = p || S, j = Dt.from(_.headers);
          let U = _.data;
          return H.forEach(f, function(C) {
            U = C.call(S, U, j.normalize(), p ? p.status : void 0);
          }), j.normalize(), U;
        }
        function Mn(f) {
          return !!(f && f.__CANCEL__);
        }
        function Vt(f, p, S) {
          pe.call(this, f != null ? f : "canceled", pe.ERR_CANCELED, p, S), this.name = "CanceledError";
        }
        H.inherits(Vt, pe, { __CANCEL__: true });
        function Zs(f, p, S) {
          const _ = S.config.validateStatus;
          !S.status || !_ || _(S.status) ? f(S) : p(new pe("Request failed with status code " + S.status, [pe.ERR_BAD_REQUEST, pe.ERR_BAD_RESPONSE][Math.floor(S.status / 100) - 4], S.config, S.request, S));
        }
        function Ks(f) {
          const p = /^([-+\w]{1,25})(:?\/\/|:)/.exec(f);
          return p && p[1] || "";
        }
        function Js(f, p) {
          f = f || 10;
          const S = new Array(f), _ = new Array(f);
          let j = 0, U = 0, C;
          return p = p !== void 0 ? p : 1e3, function(F) {
            const le = Date.now(), W = _[U];
            C || (C = le), S[j] = F, _[j] = le;
            let ee = U, de = 0;
            for (; ee !== j; )
              de += S[ee++], ee = ee % f;
            if (j = (j + 1) % f, j === U && (U = (U + 1) % f), le - C < p)
              return;
            const Le = W && le - W;
            return Le ? Math.round(de * 1e3 / Le) : void 0;
          };
        }
        function zr(f, p) {
          let S = 0, _ = 1e3 / p, j, U;
          const C = (F, le = Date.now()) => {
            S = le, j = null, U && (clearTimeout(U), U = null), f(...F);
          };
          return [(...F) => {
            const le = Date.now(), W = le - S;
            W >= _ ? C(F, le) : (j = F, U || (U = setTimeout(() => {
              U = null, C(j);
            }, _ - W)));
          }, () => j && C(j)];
        }
        const kn = (f, p, S = 3) => {
          let _ = 0;
          const j = Js(50, 250);
          return zr((U) => {
            const C = U.loaded, F = U.lengthComputable ? U.total : void 0, le = C - _, W = j(le), ee = C <= F;
            _ = C;
            const de = { loaded: C, total: F, progress: F ? C / F : void 0, bytes: le, rate: W || void 0, estimated: W && F && ee ? (F - C) / W : void 0, event: U, lengthComputable: F != null, [p ? "download" : "upload"]: true };
            f(de);
          }, S);
        }, al = (f, p) => {
          const S = f != null;
          return [(_) => p[0]({ lengthComputable: S, total: f, loaded: _ }), p[1]];
        }, tn = (f) => (...p) => H.asap(() => f(...p));
        var Bt = st.hasStandardBrowserEnv ? ((f, p) => (S) => (S = new URL(S, st.origin), f.protocol === S.protocol && f.host === S.host && (p || f.port === S.port)))(new URL(st.origin), st.navigator && /(msie|trident)/i.test(st.navigator.userAgent)) : () => true, Fs = st.hasStandardBrowserEnv ? { write(f, p, S, _, j, U) {
          const C = [f + "=" + encodeURIComponent(p)];
          H.isNumber(S) && C.push("expires=" + new Date(S).toGMTString()), H.isString(_) && C.push("path=" + _), H.isString(j) && C.push("domain=" + j), U === true && C.push("secure"), document.cookie = C.join("; ");
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
        function Mi(f, p) {
          return p ? f.replace(/\/?\/$/, "") + "/" + p.replace(/^\/+/, "") : f;
        }
        function Di(f, p, S) {
          let _ = !Cr(p);
          return f && (_ || S == false) ? Mi(f, p) : p;
        }
        const ll = (f) => f instanceof Dt ? Be({}, f) : f;
        function Zn(f, p) {
          p = p || {};
          const S = {};
          function _(W, ee, de, Le) {
            return H.isPlainObject(W) && H.isPlainObject(ee) ? H.merge.call({ caseless: Le }, W, ee) : H.isPlainObject(ee) ? H.merge({}, ee) : H.isArray(ee) ? ee.slice() : ee;
          }
          function j(W, ee, de, Le) {
            if (H.isUndefined(ee)) {
              if (!H.isUndefined(W))
                return _(void 0, W, de, Le);
            } else
              return _(W, ee, de, Le);
          }
          function U(W, ee) {
            if (!H.isUndefined(ee))
              return _(void 0, ee);
          }
          function C(W, ee) {
            if (H.isUndefined(ee)) {
              if (!H.isUndefined(W))
                return _(void 0, W);
            } else
              return _(void 0, ee);
          }
          function F(W, ee, de) {
            if (de in p)
              return _(W, ee);
            if (de in f)
              return _(void 0, W);
          }
          const le = { url: U, method: U, data: U, baseURL: C, transformRequest: C, transformResponse: C, paramsSerializer: C, timeout: C, timeoutMessage: C, withCredentials: C, withXSRFToken: C, adapter: C, responseType: C, xsrfCookieName: C, xsrfHeaderName: C, onUploadProgress: C, onDownloadProgress: C, decompress: C, maxContentLength: C, maxBodyLength: C, beforeRedirect: C, transport: C, httpAgent: C, httpsAgent: C, cancelToken: C, socketPath: C, responseEncoding: C, validateStatus: F, headers: (W, ee, de) => j(ll(W), ll(ee), de, true) };
          return H.forEach(Object.keys(Be(Be({}, f), p)), function(W) {
            const ee = le[W] || j, de = ee(f[W], p[W], W);
            H.isUndefined(de) && ee !== F || (S[W] = de);
          }), S;
        }
        var zt = (f) => {
          const p = Zn({}, f);
          let { data: S, withXSRFToken: _, xsrfHeaderName: j, xsrfCookieName: U, headers: C, auth: F } = p;
          if (p.headers = C = Dt.from(C), p.url = Pa(Di(p.baseURL, p.url, p.allowAbsoluteUrls), f.params, f.paramsSerializer), F && C.set("Authorization", "Basic " + btoa((F.username || "") + ":" + (F.password ? unescape(encodeURIComponent(F.password)) : ""))), H.isFormData(S)) {
            if (st.hasStandardBrowserEnv || st.hasStandardBrowserWebWorkerEnv)
              C.setContentType(void 0);
            else if (H.isFunction(S.getHeaders)) {
              const le = S.getHeaders(), W = ["content-type", "content-length"];
              Object.entries(le).forEach(([ee, de]) => {
                W.includes(ee.toLowerCase()) && C.set(ee, de);
              });
            }
          }
          if (st.hasStandardBrowserEnv && (_ && H.isFunction(_) && (_ = _(p)), _ || _ !== false && Bt(p.url))) {
            const le = j && U && Fs.read(U);
            le && C.set(j, le);
          }
          return p;
        }, Bi = typeof XMLHttpRequest < "u" && function(f) {
          return new Promise(function(p, S) {
            const _ = zt(f);
            let j = _.data;
            const U = Dt.from(_.headers).normalize();
            let { responseType: C, onUploadProgress: F, onDownloadProgress: le } = _, W, ee, de, Le, ge;
            function te() {
              Le && Le(), ge && ge(), _.cancelToken && _.cancelToken.unsubscribe(W), _.signal && _.signal.removeEventListener("abort", W);
            }
            let ne = new XMLHttpRequest();
            ne.open(_.method.toUpperCase(), _.url, true), ne.timeout = _.timeout;
            function ke() {
              if (!ne)
                return;
              const nt = Dt.from("getAllResponseHeaders" in ne && ne.getAllResponseHeaders()), ln = { data: !C || C === "text" || C === "json" ? ne.responseText : ne.response, status: ne.status, statusText: ne.statusText, headers: nt, config: f, request: ne };
              Zs(function(sn) {
                p(sn), te();
              }, function(sn) {
                S(sn), te();
              }, ln), ne = null;
            }
            "onloadend" in ne ? ne.onloadend = ke : ne.onreadystatechange = function() {
              !ne || ne.readyState !== 4 || ne.status === 0 && !(ne.responseURL && ne.responseURL.indexOf("file:") === 0) || setTimeout(ke);
            }, ne.onabort = function() {
              ne && (S(new pe("Request aborted", pe.ECONNABORTED, f, ne)), ne = null);
            }, ne.onerror = function(nt) {
              const ln = nt && nt.message ? nt.message : "Network Error", sn = new pe(ln, pe.ERR_NETWORK, f, ne);
              sn.event = nt || null, S(sn), ne = null;
            }, ne.ontimeout = function() {
              let nt = _.timeout ? "timeout of " + _.timeout + "ms exceeded" : "timeout exceeded";
              const ln = _.transitional || Rn;
              _.timeoutErrorMessage && (nt = _.timeoutErrorMessage), S(new pe(nt, ln.clarifyTimeoutError ? pe.ETIMEDOUT : pe.ECONNABORTED, f, ne)), ne = null;
            }, j === void 0 && U.setContentType(null), "setRequestHeader" in ne && H.forEach(U.toJSON(), function(nt, ln) {
              ne.setRequestHeader(ln, nt);
            }), H.isUndefined(_.withCredentials) || (ne.withCredentials = !!_.withCredentials), C && C !== "json" && (ne.responseType = _.responseType), le && ([de, ge] = kn(le, true), ne.addEventListener("progress", de)), F && ne.upload && ([ee, Le] = kn(F), ne.upload.addEventListener("progress", ee), ne.upload.addEventListener("loadend", Le)), (_.cancelToken || _.signal) && (W = (nt) => {
              ne && (S(!nt || nt.type ? new Vt(null, f, ne) : nt), ne.abort(), ne = null);
            }, _.cancelToken && _.cancelToken.subscribe(W), _.signal && (_.signal.aborted ? W() : _.signal.addEventListener("abort", W)));
            const vt = Ks(_.url);
            if (vt && st.protocols.indexOf(vt) === -1) {
              S(new pe("Unsupported protocol " + vt + ":", pe.ERR_BAD_REQUEST, f));
              return;
            }
            ne.send(j || null);
          });
        }, Ws = (f, p) => {
          const { length: S } = f = f ? f.filter(Boolean) : [];
          if (p || S) {
            let _ = new AbortController(), j;
            const U = function(W) {
              if (!j) {
                j = true, F();
                const ee = W instanceof Error ? W : this.reason;
                _.abort(ee instanceof pe ? ee : new Vt(ee instanceof Error ? ee.message : ee));
              }
            };
            let C = p && setTimeout(() => {
              C = null, U(new pe(`timeout ${p} of ms exceeded`, pe.ETIMEDOUT));
            }, p);
            const F = () => {
              f && (C && clearTimeout(C), C = null, f.forEach((W) => {
                W.unsubscribe ? W.unsubscribe(U) : W.removeEventListener("abort", U);
              }), f = null);
            };
            f.forEach((W) => W.addEventListener("abort", U));
            const { signal: le } = _;
            return le.unsubscribe = () => H.asap(F), le;
          }
        };
        const qi = function* (f, p) {
          let S = f.byteLength;
          if (S < p) {
            yield f;
            return;
          }
          let _ = 0, j;
          for (; _ < S; )
            j = _ + p, yield f.slice(_, j), _ = j;
        }, Sa = function(f, p) {
          return Ro(this, null, function* () {
            try {
              for (var S = Ym($s(f)), _, j, U; _ = !(j = yield new Al(S.next())).done; _ = false) {
                const C = j.value;
                yield* zo(qi(C, p));
              }
            } catch (j2) {
              U = [j2];
            } finally {
              try {
                _ && (j = S.return) && (yield new Al(j.call(S)));
              } finally {
                if (U)
                  throw U[0];
              }
            }
          });
        }, $s = function(f) {
          return Ro(this, null, function* () {
            if (f[Symbol.asyncIterator]) {
              yield* zo(f);
              return;
            }
            const p = f.getReader();
            try {
              for (; ; ) {
                const { done: S, value: _ } = yield new Al(p.read());
                if (S)
                  break;
                yield _;
              }
            } finally {
              yield new Al(p.cancel());
            }
          });
        }, Hi = (f, p, S, _) => {
          const j = Sa(f, p);
          let U = 0, C, F = (W) => {
            C || (C = true, _ && _(W));
          };
          return new ReadableStream({ pull(W) {
            return ma(this, null, function* () {
              try {
                const { done: ee, value: de } = yield j.next();
                if (ee) {
                  F(), W.close();
                  return;
                }
                let Le = de.byteLength;
                if (S) {
                  let ge = U += Le;
                  S(ge);
                }
                W.enqueue(new Uint8Array(de));
              } catch (ee) {
                throw F(ee), ee;
              }
            });
          }, cancel(W) {
            return F(W), j.return();
          } }, { highWaterMark: 2 });
        }, Kn = 64 * 1024, { isFunction: Cl } = H, Ps = (({ Request: f, Response: p }) => ({ Request: f, Response: p }))(H.global), { ReadableStream: Li, TextEncoder: Ul } = H.global, Is = (f, ...p) => {
          try {
            return !!f(...p);
          } catch (S) {
            return false;
          }
        }, Ur = (f) => {
          f = H.merge.call({ skipUndefined: true }, Ps, f);
          const { fetch: p, Request: S, Response: _ } = f, j = p ? Cl(p) : typeof fetch == "function", U = Cl(S), C = Cl(_);
          if (!j)
            return false;
          const F = j && Cl(Li), le = j && (typeof Ul == "function" ? ((te) => (ne) => te.encode(ne))(new Ul()) : (te) => ma(null, null, function* () {
            return new Uint8Array(yield new S(te).arrayBuffer());
          })), W = U && F && Is(() => {
            let te = false;
            const ne = new S(st.origin, { body: new Li(), method: "POST", get duplex() {
              return te = true, "half";
            } }).headers.has("Content-Type");
            return te && !ne;
          }), ee = C && F && Is(() => H.isReadableStream(new _("").body)), de = { stream: ee && ((te) => te.body) };
          j && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((te) => {
            !de[te] && (de[te] = (ne, ke) => {
              let vt = ne && ne[te];
              if (vt)
                return vt.call(ne);
              throw new pe(`Response type '${te}' is not supported`, pe.ERR_NOT_SUPPORT, ke);
            });
          });
          const Le = (te) => ma(null, null, function* () {
            if (te == null)
              return 0;
            if (H.isBlob(te))
              return te.size;
            if (H.isSpecCompliantForm(te))
              return (yield new S(st.origin, { method: "POST", body: te }).arrayBuffer()).byteLength;
            if (H.isArrayBufferView(te) || H.isArrayBuffer(te))
              return te.byteLength;
            if (H.isURLSearchParams(te) && (te = te + ""), H.isString(te))
              return (yield le(te)).byteLength;
          }), ge = (te, ne) => ma(null, null, function* () {
            const ke = H.toFiniteNumber(te.getContentLength());
            return ke != null ? ke : Le(ne);
          });
          return (te) => ma(null, null, function* () {
            let { url: ne, method: ke, data: vt, signal: nt, cancelToken: ln, timeout: sn, onDownloadProgress: Xi, onUploadProgress: tu, responseType: qn, headers: Gl, withCredentials: Xl = "same-origin", fetchOptions: nu } = zt(te), au = p || fetch;
            qn = qn ? (qn + "").toLowerCase() : "text";
            let Ql = Ws([nt, ln && ln.toAbortSignal()], sn), ul = null;
            const $n = Ql && Ql.unsubscribe && (() => {
              Ql.unsubscribe();
            });
            let lu;
            try {
              if (tu && W && ke !== "get" && ke !== "head" && (lu = yield ge(Gl, vt)) !== 0) {
                let xn = new S(ne, { method: "POST", body: vt, duplex: "half" }), Pn;
                if (H.isFormData(vt) && (Pn = xn.headers.get("content-type")) && Gl.setContentType(Pn), xn.body) {
                  const [Vl, rl] = al(lu, kn(tn(tu)));
                  vt = Hi(xn.body, Kn, Vl, rl);
                }
              }
              H.isString(Xl) || (Xl = Xl ? "include" : "omit");
              const un = U && "credentials" in S.prototype, iu = St(Be({}, nu), { signal: Ql, method: ke.toUpperCase(), headers: Gl.normalize().toJSON(), body: vt, duplex: "half", credentials: un ? Xl : void 0 });
              ul = U && new S(ne, iu);
              let rn = yield U ? au(ul, nu) : au(ne, iu);
              const Aa = ee && (qn === "stream" || qn === "response");
              if (ee && (Xi || Aa && $n)) {
                const xn = {};
                ["status", "statusText", "headers"].forEach((Qi) => {
                  xn[Qi] = rn[Qi];
                });
                const Pn = H.toFiniteNumber(rn.headers.get("content-length")), [Vl, rl] = Xi && al(Pn, kn(tn(Xi), true)) || [];
                rn = new _(Hi(rn.body, Kn, Vl, () => {
                  rl && rl(), $n && $n();
                }), xn);
              }
              qn = qn || "text";
              let Mr = yield de[H.findKey(de, qn) || "text"](rn, te);
              return !Aa && $n && $n(), yield new Promise((xn, Pn) => {
                Zs(xn, Pn, { data: Mr, headers: Dt.from(rn.headers), status: rn.status, statusText: rn.statusText, config: te, request: ul });
              });
            } catch (un) {
              throw $n && $n(), un && un.name === "TypeError" && /Load failed|fetch/i.test(un.message) ? Object.assign(new pe("Network Error", pe.ERR_NETWORK, te, ul), { cause: un.cause || un }) : pe.from(un, un && un.code, te, ul);
            }
          });
        }, Ml = /* @__PURE__ */ new Map(), nn = (f) => {
          let p = f ? f.env : {};
          const { fetch: S, Request: _, Response: j } = p, U = [_, j, S];
          let C = U.length, F = C, le, W, ee = Ml;
          for (; F--; )
            le = U[F], W = ee.get(le), W === void 0 && ee.set(le, W = F ? /* @__PURE__ */ new Map() : Ur(p)), ee = W;
          return W;
        };
        nn();
        const il = { http: Er, xhr: Bi, fetch: { get: nn } };
        H.forEach(il, (f, p) => {
          if (f) {
            try {
              Object.defineProperty(f, "name", { value: p });
            } catch (S) {
            }
            Object.defineProperty(f, "adapterName", { value: p });
          }
        });
        const Dl = (f) => `- ${f}`, _a = (f) => H.isFunction(f) || f === null || f === false;
        var Jn = { getAdapter: (f, p) => {
          f = H.isArray(f) ? f : [f];
          const { length: S } = f;
          let _, j;
          const U = {};
          for (let C = 0; C < S; C++) {
            _ = f[C];
            let F;
            if (j = _, !_a(_) && (j = il[(F = String(_)).toLowerCase()], j === void 0))
              throw new pe(`Unknown adapter '${F}'`);
            if (j && (H.isFunction(j) || (j = j.get(p))))
              break;
            U[F || "#" + C] = j;
          }
          if (!j) {
            const C = Object.entries(U).map(([le, W]) => `adapter ${le} ` + (W === false ? "is not supported by the environment" : "is not available in the build"));
            let F = S ? C.length > 1 ? `since :
` + C.map(Dl).join(`
`) : " " + Dl(C[0]) : "as no adapter specified";
            throw new pe("There is no suitable adapter to dispatch the request " + F, "ERR_NOT_SUPPORT");
          }
          return j;
        }, adapters: il };
        function Bl(f) {
          if (f.cancelToken && f.cancelToken.throwIfRequested(), f.signal && f.signal.aborted)
            throw new Vt(null, f);
        }
        function ql(f) {
          return Bl(f), f.headers = Dt.from(f.headers), f.data = zl.call(f, f.transformRequest), ["post", "put", "patch"].indexOf(f.method) !== -1 && f.headers.setContentType("application/x-www-form-urlencoded", false), Jn.getAdapter(f.adapter || zn.adapter, f)(f).then(function(p) {
            return Bl(f), p.data = zl.call(f, f.transformResponse, p), p.headers = Dt.from(p.headers), p;
          }, function(p) {
            return Mn(p) || (Bl(f), p && p.response && (p.response.data = zl.call(f, f.transformResponse, p.response), p.response.headers = Dt.from(p.response.headers))), Promise.reject(p);
          });
        }
        const Yi = "1.12.2", Dn = {};
        ["object", "boolean", "number", "function", "string", "symbol"].forEach((f, p) => {
          Dn[f] = function(S) {
            return typeof S === f || "a" + (p < 1 ? "n " : " ") + f;
          };
        });
        const an = {};
        Dn.transitional = function(f, p, S) {
          function _(j, U) {
            return "[Axios v" + Yi + "] Transitional option '" + j + "'" + U + (S ? ". " + S : "");
          }
          return (j, U, C) => {
            if (f === false)
              throw new pe(_(U, " has been removed" + (p ? " in " + p : "")), pe.ERR_DEPRECATED);
            return p && !an[U] && (an[U] = true, console.warn(_(U, " has been deprecated since v" + p + " and will be removed in the near future"))), f ? f(j, U, C) : true;
          };
        }, Dn.spelling = function(f) {
          return (p, S) => (console.warn(`${S} is likely a misspelling of ${f}`), true);
        };
        function Gi(f, p, S) {
          if (typeof f != "object")
            throw new pe("options must be an object", pe.ERR_BAD_OPTION_VALUE);
          const _ = Object.keys(f);
          let j = _.length;
          for (; j-- > 0; ) {
            const U = _[j], C = p[U];
            if (C) {
              const F = f[U], le = F === void 0 || C(F, U, f);
              if (le !== true)
                throw new pe("option " + U + " must be " + le, pe.ERR_BAD_OPTION_VALUE);
              continue;
            }
            if (S !== true)
              throw new pe("Unknown option " + U, pe.ERR_BAD_OPTION);
          }
        }
        var Bn = { assertOptions: Gi, validators: Dn };
        const ht = Bn.validators;
        class Ta {
          constructor(p) {
            this.defaults = p || {}, this.interceptors = { request: new Ia(), response: new Ia() };
          }
          request(p, S) {
            return ma(this, null, function* () {
              try {
                return yield this._request(p, S);
              } catch (_) {
                if (_ instanceof Error) {
                  let j = {};
                  Error.captureStackTrace ? Error.captureStackTrace(j) : j = new Error();
                  const U = j.stack ? j.stack.replace(/^.+\n/, "") : "";
                  try {
                    _.stack ? U && !String(_.stack).endsWith(U.replace(/^.+\n.+\n/, "")) && (_.stack += `
` + U) : _.stack = U;
                  } catch (C) {
                  }
                }
                throw _;
              }
            });
          }
          _request(p, S) {
            typeof p == "string" ? (S = S || {}, S.url = p) : S = p || {}, S = Zn(this.defaults, S);
            const { transitional: _, paramsSerializer: j, headers: U } = S;
            _ !== void 0 && Bn.assertOptions(_, { silentJSONParsing: ht.transitional(ht.boolean), forcedJSONParsing: ht.transitional(ht.boolean), clarifyTimeoutError: ht.transitional(ht.boolean) }, false), j != null && (H.isFunction(j) ? S.paramsSerializer = { serialize: j } : Bn.assertOptions(j, { encode: ht.function, serialize: ht.function }, true)), S.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? S.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : S.allowAbsoluteUrls = true), Bn.assertOptions(S, { baseUrl: ht.spelling("baseURL"), withXsrfToken: ht.spelling("withXSRFToken") }, true), S.method = (S.method || this.defaults.method || "get").toLowerCase();
            let C = U && H.merge(U.common, U[S.method]);
            U && H.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (te) => {
              delete U[te];
            }), S.headers = Dt.concat(C, U);
            const F = [];
            let le = true;
            this.interceptors.request.forEach(function(te) {
              typeof te.runWhen == "function" && te.runWhen(S) === false || (le = le && te.synchronous, F.unshift(te.fulfilled, te.rejected));
            });
            const W = [];
            this.interceptors.response.forEach(function(te) {
              W.push(te.fulfilled, te.rejected);
            });
            let ee, de = 0, Le;
            if (!le) {
              const te = [ql.bind(this), void 0];
              for (te.unshift(...F), te.push(...W), Le = te.length, ee = Promise.resolve(S); de < Le; )
                ee = ee.then(te[de++], te[de++]);
              return ee;
            }
            Le = F.length;
            let ge = S;
            for (; de < Le; ) {
              const te = F[de++], ne = F[de++];
              try {
                ge = te(ge);
              } catch (ke) {
                ne.call(this, ke);
                break;
              }
            }
            try {
              ee = ql.call(this, ge);
            } catch (te) {
              return Promise.reject(te);
            }
            for (de = 0, Le = W.length; de < Le; )
              ee = ee.then(W[de++], W[de++]);
            return ee;
          }
          getUri(p) {
            p = Zn(this.defaults, p);
            const S = Di(p.baseURL, p.url, p.allowAbsoluteUrls);
            return Pa(S, p.params, p.paramsSerializer);
          }
        }
        H.forEach(["delete", "get", "head", "options"], function(f) {
          Ta.prototype[f] = function(p, S) {
            return this.request(Zn(S || {}, { method: f, url: p, data: (S || {}).data }));
          };
        }), H.forEach(["post", "put", "patch"], function(f) {
          function p(S) {
            return function(_, j, U) {
              return this.request(Zn(U || {}, { method: f, headers: S ? { "Content-Type": "multipart/form-data" } : {}, url: _, data: j }));
            };
          }
          Ta.prototype[f] = p(), Ta.prototype[f + "Form"] = p(true);
        });
        var Fn = Ta;
        class Hl {
          constructor(p) {
            if (typeof p != "function")
              throw new TypeError("executor must be a function.");
            let S;
            this.promise = new Promise(function(j) {
              S = j;
            });
            const _ = this;
            this.promise.then((j) => {
              if (!_._listeners)
                return;
              let U = _._listeners.length;
              for (; U-- > 0; )
                _._listeners[U](j);
              _._listeners = null;
            }), this.promise.then = (j) => {
              let U;
              const C = new Promise((F) => {
                _.subscribe(F), U = F;
              }).then(j);
              return C.cancel = function() {
                _.unsubscribe(U);
              }, C;
            }, p(function(j, U, C) {
              _.reason || (_.reason = new Vt(j, U, C), S(_.reason));
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
            const p = new AbortController(), S = (_) => {
              p.abort(_);
            };
            return this.subscribe(S), p.signal.unsubscribe = () => this.unsubscribe(S), p.signal;
          }
          static source() {
            let p;
            return { token: new Hl(function(S) {
              p = S;
            }), cancel: p };
          }
        }
        var Ll = Hl;
        function Yl(f) {
          return function(p) {
            return f.apply(null, p);
          };
        }
        function eu(f) {
          return H.isObject(f) && f.isAxiosError === true;
        }
        const bt = { Continue: 100, SwitchingProtocols: 101, Processing: 102, EarlyHints: 103, Ok: 200, Created: 201, Accepted: 202, NonAuthoritativeInformation: 203, NoContent: 204, ResetContent: 205, PartialContent: 206, MultiStatus: 207, AlreadyReported: 208, ImUsed: 226, MultipleChoices: 300, MovedPermanently: 301, Found: 302, SeeOther: 303, NotModified: 304, UseProxy: 305, Unused: 306, TemporaryRedirect: 307, PermanentRedirect: 308, BadRequest: 400, Unauthorized: 401, PaymentRequired: 402, Forbidden: 403, NotFound: 404, MethodNotAllowed: 405, NotAcceptable: 406, ProxyAuthenticationRequired: 407, RequestTimeout: 408, Conflict: 409, Gone: 410, LengthRequired: 411, PreconditionFailed: 412, PayloadTooLarge: 413, UriTooLong: 414, UnsupportedMediaType: 415, RangeNotSatisfiable: 416, ExpectationFailed: 417, ImATeapot: 418, MisdirectedRequest: 421, UnprocessableEntity: 422, Locked: 423, FailedDependency: 424, TooEarly: 425, UpgradeRequired: 426, PreconditionRequired: 428, TooManyRequests: 429, RequestHeaderFieldsTooLarge: 431, UnavailableForLegalReasons: 451, InternalServerError: 500, NotImplemented: 501, BadGateway: 502, ServiceUnavailable: 503, GatewayTimeout: 504, HttpVersionNotSupported: 505, VariantAlsoNegotiates: 506, InsufficientStorage: 507, LoopDetected: 508, NotExtended: 510, NetworkAuthenticationRequired: 511 };
        Object.entries(bt).forEach(([f, p]) => {
          bt[p] = f;
        });
        var Wn = bt;
        function sl(f) {
          const p = new Fn(f), S = u(Fn.prototype.request, p);
          return H.extend(S, Fn.prototype, p, { allOwnKeys: true }), H.extend(S, p, null, { allOwnKeys: true }), S.create = function(_) {
            return sl(Zn(f, _));
          }, S;
        }
        const Ve = sl(zn);
        return Ve.Axios = Fn, Ve.CanceledError = Vt, Ve.CancelToken = Ll, Ve.isCancel = Mn, Ve.VERSION = Yi, Ve.toFormData = Qt, Ve.AxiosError = pe, Ve.Cancel = Ve.CanceledError, Ve.all = function(f) {
          return Promise.all(f);
        }, Ve.spread = Yl, Ve.isAxiosError = eu, Ve.mergeConfig = Zn, Ve.AxiosHeaders = Dt, Ve.formToJSON = (f) => vn(H.isHTMLForm(f) ? new FormData(f) : f), Ve.getAdapter = Jn.getAdapter, Ve.HttpStatusCode = Wn, Ve.default = Ve, Yo = Ve, Yo;
      }
      var np;
      function zp() {
        if (np)
          return pa;
        np = 1;
        var u = pa && pa.__assign || function() {
          return u = Object.assign || function(y) {
            for (var v, h = 1, x = arguments.length; h < x; h++) {
              v = arguments[h];
              for (var m in v)
                Object.prototype.hasOwnProperty.call(v, m) && (y[m] = v[m]);
            }
            return y;
          }, u.apply(this, arguments);
        };
        Object.defineProperty(pa, "__esModule", { value: true }), pa.getRequestHeaders = pa.getAxiosClient = void 0;
        var s = Ny();
        function r(y, v, h, x, m) {
          var d = s.default.create({ baseURL: y, headers: c(v, x, h, y, m), withCredentials: true });
          return d.interceptors.request.use(function(T) {
            return typeof window < "u" && window.csrf_token && window.csrf_token !== "{{ csrf_token }}" && (T.headers["X-Frappe-CSRF-Token"] = window.csrf_token), v && x && h && (T.headers.Authorization = "".concat(x, " ").concat(h())), T;
          }), d;
        }
        pa.getAxiosClient = r;
        function c(y, v, h, x, m) {
          y === void 0 && (y = false);
          var d = { Accept: "application/json", "Content-Type": "application/json; charset=utf-8" };
          return y && v && h && (d.Authorization = "".concat(v, " ").concat(h())), typeof window < "u" && typeof document < "u" && (window.location && (x && x !== window.location.origin || (d["X-Frappe-Site-Name"] = window.location.hostname)), window.csrf_token && window.csrf_token !== "{{ csrf_token }}" && (d["X-Frappe-CSRF-Token"] = window.csrf_token)), u(u({}, d), m != null ? m : {});
        }
        return pa.getRequestHeaders = c, pa;
      }
      var ap;
      function Cp() {
        if (ap)
          return En;
        ap = 1;
        var u = En && En.__assign || function() {
          return u = Object.assign || function(v) {
            for (var h, x = 1, m = arguments.length; x < m; x++) {
              h = arguments[x];
              for (var d in h)
                Object.prototype.hasOwnProperty.call(h, d) && (v[d] = h[d]);
            }
            return v;
          }, u.apply(this, arguments);
        }, s = En && En.__awaiter || function(v, h, x, m) {
          function d(T) {
            return T instanceof x ? T : new x(function(w) {
              w(T);
            });
          }
          return new (x || (x = Promise))(function(T, w) {
            function G(K) {
              try {
                M(m.next(K));
              } catch (re) {
                w(re);
              }
            }
            function E(K) {
              try {
                M(m.throw(K));
              } catch (re) {
                w(re);
              }
            }
            function M(K) {
              K.done ? T(K.value) : d(K.value).then(G, E);
            }
            M((m = m.apply(v, h || [])).next());
          });
        }, r = En && En.__generator || function(v, h) {
          var x = { label: 0, sent: function() {
            if (T[0] & 1)
              throw T[1];
            return T[1];
          }, trys: [], ops: [] }, m, d, T, w;
          return w = { next: G(0), throw: G(1), return: G(2) }, typeof Symbol == "function" && (w[Symbol.iterator] = function() {
            return this;
          }), w;
          function G(M) {
            return function(K) {
              return E([M, K]);
            };
          }
          function E(M) {
            if (m)
              throw new TypeError("Generator is already executing.");
            for (; w && (w = 0, M[0] && (x = 0)), x; )
              try {
                if (m = 1, d && (T = M[0] & 2 ? d.return : M[0] ? d.throw || ((T = d.return) && T.call(d), 0) : d.next) && !(T = T.call(d, M[1])).done)
                  return T;
                switch (d = 0, T && (M = [M[0] & 2, T.value]), M[0]) {
                  case 0:
                  case 1:
                    T = M;
                    break;
                  case 4:
                    return x.label++, { value: M[1], done: false };
                  case 5:
                    x.label++, d = M[1], M = [0];
                    continue;
                  case 7:
                    M = x.ops.pop(), x.trys.pop();
                    continue;
                  default:
                    if (T = x.trys, !(T = T.length > 0 && T[T.length - 1]) && (M[0] === 6 || M[0] === 2)) {
                      x = 0;
                      continue;
                    }
                    if (M[0] === 3 && (!T || M[1] > T[0] && M[1] < T[3])) {
                      x.label = M[1];
                      break;
                    }
                    if (M[0] === 6 && x.label < T[1]) {
                      x.label = T[1], T = M;
                      break;
                    }
                    if (T && x.label < T[2]) {
                      x.label = T[2], x.ops.push(M);
                      break;
                    }
                    T[2] && x.ops.pop(), x.trys.pop();
                    continue;
                }
                M = h.call(v, x);
              } catch (K) {
                M = [6, K], d = 0;
              } finally {
                m = T = 0;
              }
            if (M[0] & 5)
              throw M[1];
            return { value: M[0] ? M[1] : void 0, done: true };
          }
        };
        Object.defineProperty(En, "__esModule", { value: true }), En.FrappeFileUpload = void 0;
        var c = zp(), y = function() {
          function v(h, x, m, d, T, w) {
            this.appURL = h, this.axios = x, this.useToken = m != null ? m : false, this.token = d, this.tokenType = T, this.customHeaders = w;
          }
          return v.prototype.uploadFile = function(h, x, m, d) {
            return d === void 0 && (d = "upload_file"), s(this, void 0, void 0, function() {
              var T, w, G, E, M, K, re, ce;
              return r(this, function(be) {
                return T = new FormData(), h && T.append("file", h, h.name), w = x.isPrivate, G = x.folder, E = x.file_url, M = x.doctype, K = x.docname, re = x.fieldname, ce = x.otherData, w && T.append("is_private", "1"), G && T.append("folder", G), E && T.append("file_url", E), M && K && (T.append("doctype", M), T.append("docname", K), re && T.append("fieldname", re)), ce && Object.keys(ce).forEach(function(ue) {
                  var _e = ce[ue];
                  T.append(ue, _e);
                }), [2, this.axios.post("/api/method/".concat(d), T, { onUploadProgress: function(ue) {
                  m && m(ue.loaded, ue.total, ue);
                }, headers: u(u({}, (0, c.getRequestHeaders)(this.useToken, this.tokenType, this.token, this.appURL, this.customHeaders)), { "Content-Type": "multipart/form-data" }) }).catch(function(ue) {
                  var _e, Te;
                  throw u(u({}, ue.response.data), { httpStatus: ue.response.status, httpStatusText: ue.response.statusText, message: (_e = ue.response.data.message) !== null && _e !== void 0 ? _e : "There was an error while uploading the file.", exception: (Te = ue.response.data.exception) !== null && Te !== void 0 ? Te : "" });
                })];
              });
            });
          }, v;
        }();
        return En.FrappeFileUpload = y, En;
      }
      var lp;
      function Ey() {
        if (lp)
          return Os;
        lp = 1, Object.defineProperty(Os, "__esModule", { value: true }), Os.FrappeApp = void 0;
        var u = Up(), s = Op(), r = Rp(), c = Cp(), y = zp(), v = function() {
          function h(x, m, d, T) {
            var w, G;
            this.url = x, this.name = d != null ? d : "FrappeApp", this.useToken = (w = m == null ? void 0 : m.useToken) !== null && w !== void 0 ? w : false, this.token = m == null ? void 0 : m.token, this.tokenType = (G = m == null ? void 0 : m.type) !== null && G !== void 0 ? G : "Bearer", this.customHeaders = T, this.axios = (0, y.getAxiosClient)(this.url, this.useToken, this.token, this.tokenType, this.customHeaders);
          }
          return h.prototype.auth = function() {
            return new u.FrappeAuth(this.url, this.axios, this.useToken, this.token, this.tokenType);
          }, h.prototype.db = function() {
            return new r.FrappeDB(this.url, this.axios, this.useToken, this.token, this.tokenType);
          }, h.prototype.file = function() {
            return new c.FrappeFileUpload(this.url, this.axios, this.useToken, this.token, this.tokenType, this.customHeaders);
          }, h.prototype.call = function() {
            return new s.FrappeCall(this.url, this.axios, this.useToken, this.token, this.tokenType);
          }, h;
        }();
        return Os.FrappeApp = v, Os;
      }
      var wn = {};
      var ip;
      function wy() {
        if (ip)
          return wn;
        ip = 1;
        var u = wn && wn.__assign || function() {
          return u = Object.assign || function(y) {
            for (var v, h = 1, x = arguments.length; h < x; h++) {
              v = arguments[h];
              for (var m in v)
                Object.prototype.hasOwnProperty.call(v, m) && (y[m] = v[m]);
            }
            return y;
          }, u.apply(this, arguments);
        }, s = wn && wn.__awaiter || function(y, v, h, x) {
          function m(d) {
            return d instanceof h ? d : new h(function(T) {
              T(d);
            });
          }
          return new (h || (h = Promise))(function(d, T) {
            function w(M) {
              try {
                E(x.next(M));
              } catch (K) {
                T(K);
              }
            }
            function G(M) {
              try {
                E(x.throw(M));
              } catch (K) {
                T(K);
              }
            }
            function E(M) {
              M.done ? d(M.value) : m(M.value).then(w, G);
            }
            E((x = x.apply(y, v || [])).next());
          });
        }, r = wn && wn.__generator || function(y, v) {
          var h = { label: 0, sent: function() {
            if (d[0] & 1)
              throw d[1];
            return d[1];
          }, trys: [], ops: [] }, x, m, d, T;
          return T = { next: w(0), throw: w(1), return: w(2) }, typeof Symbol == "function" && (T[Symbol.iterator] = function() {
            return this;
          }), T;
          function w(E) {
            return function(M) {
              return G([E, M]);
            };
          }
          function G(E) {
            if (x)
              throw new TypeError("Generator is already executing.");
            for (; T && (T = 0, E[0] && (h = 0)), h; )
              try {
                if (x = 1, m && (d = E[0] & 2 ? m.return : E[0] ? m.throw || ((d = m.return) && d.call(m), 0) : m.next) && !(d = d.call(m, E[1])).done)
                  return d;
                switch (m = 0, d && (E = [E[0] & 2, d.value]), E[0]) {
                  case 0:
                  case 1:
                    d = E;
                    break;
                  case 4:
                    return h.label++, { value: E[1], done: false };
                  case 5:
                    h.label++, m = E[1], E = [0];
                    continue;
                  case 7:
                    E = h.ops.pop(), h.trys.pop();
                    continue;
                  default:
                    if (d = h.trys, !(d = d.length > 0 && d[d.length - 1]) && (E[0] === 6 || E[0] === 2)) {
                      h = 0;
                      continue;
                    }
                    if (E[0] === 3 && (!d || E[1] > d[0] && E[1] < d[3])) {
                      h.label = E[1];
                      break;
                    }
                    if (E[0] === 6 && h.label < d[1]) {
                      h.label = d[1], d = E;
                      break;
                    }
                    if (d && h.label < d[2]) {
                      h.label = d[2], h.ops.push(E);
                      break;
                    }
                    d[2] && h.ops.pop(), h.trys.pop();
                    continue;
                }
                E = v.call(y, h);
              } catch (M) {
                E = [6, M], m = 0;
              } finally {
                x = d = 0;
              }
            if (E[0] & 5)
              throw E[1];
            return { value: E[0] ? E[1] : void 0, done: true };
          }
        };
        Object.defineProperty(wn, "__esModule", { value: true }), wn.FrappeAuth = void 0;
        var c = function() {
          function y(v, h, x, m, d) {
            this.appURL = v, this.axios = h, this.useToken = x != null ? x : false, this.token = m, this.tokenType = d;
          }
          return y.prototype.loginWithUsernamePassword = function(v) {
            return s(this, void 0, void 0, function() {
              return r(this, function(h) {
                return [2, this.axios.post("/api/method/login", { usr: v.username, pwd: v.password, otp: v.otp, tmp_id: v.tmp_id, device: v.device }).then(function(x) {
                  return x.data;
                }).catch(function(x) {
                  var m, d;
                  throw u(u({}, x.response.data), { httpStatus: x.response.status, httpStatusText: x.response.statusText, message: (m = x.response.data.message) !== null && m !== void 0 ? m : "There was an error while logging in", exception: (d = x.response.data.exception) !== null && d !== void 0 ? d : "" });
                })];
              });
            });
          }, y.prototype.getLoggedInUser = function() {
            return s(this, void 0, void 0, function() {
              return r(this, function(v) {
                return [2, this.axios.get("/api/method/frappe.auth.get_logged_user").then(function(h) {
                  return h.data.message;
                }).catch(function(h) {
                  var x;
                  throw u(u({}, h.response.data), { httpStatus: h.response.status, httpStatusText: h.response.statusText, message: "There was an error while fetching the logged in user", exception: (x = h.response.data.exception) !== null && x !== void 0 ? x : "" });
                })];
              });
            });
          }, y.prototype.logout = function() {
            return s(this, void 0, void 0, function() {
              return r(this, function(v) {
                return [2, this.axios.post("/api/method/logout", {}).then(function() {
                }).catch(function(h) {
                  var x, m;
                  throw u(u({}, h.response.data), { httpStatus: h.response.status, httpStatusText: h.response.statusText, message: (x = h.response.data.message) !== null && x !== void 0 ? x : "There was an error while logging out", exception: (m = h.response.data.exception) !== null && m !== void 0 ? m : "" });
                })];
              });
            });
          }, y.prototype.forgetPassword = function(v) {
            return s(this, void 0, void 0, function() {
              return r(this, function(h) {
                return [2, this.axios.post("/", { cmd: "frappe.core.doctype.user.user.reset_password", user: v }).then(function() {
                }).catch(function(x) {
                  var m, d;
                  throw u(u({}, x.response.data), { httpStatus: x.response.status, httpStatusText: x.response.statusText, message: (m = x.response.data.message) !== null && m !== void 0 ? m : "There was an error sending password reset email.", exception: (d = x.response.data.exception) !== null && d !== void 0 ? d : "" });
                })];
              });
            });
          }, y;
        }();
        return wn.FrappeAuth = c, wn;
      }
      var sp;
      function Up() {
        return sp || (sp = 1, function(u) {
          var s = Si && Si.__createBinding || (Object.create ? function(c, y, v, h) {
            h === void 0 && (h = v);
            var x = Object.getOwnPropertyDescriptor(y, v);
            (!x || ("get" in x ? !y.__esModule : x.writable || x.configurable)) && (x = { enumerable: true, get: function() {
              return y[v];
            } }), Object.defineProperty(c, h, x);
          } : function(c, y, v, h) {
            h === void 0 && (h = v), c[h] = y[v];
          }), r = Si && Si.__exportStar || function(c, y) {
            for (var v in c)
              v !== "default" && !Object.prototype.hasOwnProperty.call(y, v) && s(y, c, v);
          };
          Object.defineProperty(u, "__esModule", { value: true }), r(Ey(), u), r(wy(), u), r(Rp(), u), r(Cp(), u), r(Op(), u);
        }(Si)), Si;
      }
      var jy = Up();
      var up = { exports: {} };
      var Go = {};
      var rp;
      function Oy() {
        if (rp)
          return Go;
        rp = 1;
        var u = Cs;
        function s(w, G) {
          return w === G && (w !== 0 || 1 / w === 1 / G) || w !== w && G !== G;
        }
        var r = typeof Object.is == "function" ? Object.is : s, c = u.useState, y = u.useEffect, v = u.useLayoutEffect, h = u.useDebugValue;
        function x(w, G) {
          var E = G(), M = c({ inst: { value: E, getSnapshot: G } }), K = M[0].inst, re = M[1];
          return v(function() {
            K.value = E, K.getSnapshot = G, m(K) && re({ inst: K });
          }, [w, E, G]), y(function() {
            return m(K) && re({ inst: K }), w(function() {
              m(K) && re({ inst: K });
            });
          }, [w]), h(E), E;
        }
        function m(w) {
          var G = w.getSnapshot;
          w = w.value;
          try {
            var E = G();
            return !r(w, E);
          } catch (M) {
            return true;
          }
        }
        function d(w, G) {
          return G();
        }
        var T = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? d : x;
        return Go.useSyncExternalStore = u.useSyncExternalStore !== void 0 ? u.useSyncExternalStore : T, Go;
      }
      var cp;
      function Ry() {
        return cp || (cp = 1, up.exports = Oy()), up.exports;
      }
      Ry();
      var zy = 0;
      var Cy = 1;
      var Uy = 2;
      var op = Object.prototype.hasOwnProperty;
      function Ko(u, s) {
        var r, c;
        if (u === s)
          return true;
        if (u && s && (r = u.constructor) === s.constructor) {
          if (r === Date)
            return u.getTime() === s.getTime();
          if (r === RegExp)
            return u.toString() === s.toString();
          if (r === Array) {
            if ((c = u.length) === s.length)
              for (; c-- && Ko(u[c], s[c]); )
                ;
            return c === -1;
          }
          if (!r || typeof u == "object") {
            c = 0;
            for (r in u)
              if (op.call(u, r) && ++c && !op.call(s, r) || !(r in s) || !Ko(u[r], s[r]))
                return false;
            return Object.keys(s).length === c;
          }
        }
        return u !== u && s !== s;
      }
      var Ka = /* @__PURE__ */ new WeakMap();
      var Fa = () => {
      };
      var Xt = Fa();
      var Sr = Object;
      var On = (u) => u === Xt;
      var Ja = (u) => typeof u == "function";
      var wl = (u, s) => Be(Be({}, u), s);
      var My = (u) => Ja(u.then);
      var Xo = {};
      var dr = {};
      var Mp = "undefined";
      var _r = typeof window != Mp;
      var Jo = typeof document != Mp;
      var Dy = _r && "Deno" in window;
      var By = (u, s) => {
        const r = Ka.get(u);
        return [() => !On(s) && u.get(s) || Xo, (c) => {
          if (!On(s)) {
            const y = u.get(s);
            s in dr || (dr[s] = y), r[5](s, wl(y, c), y || Xo);
          }
        }, r[6], () => !On(s) && s in dr ? dr[s] : !On(s) && u.get(s) || Xo];
      };
      var Fo = true;
      var qy = () => Fo;
      var [Wo, $o] = _r && window.addEventListener ? [window.addEventListener.bind(window), window.removeEventListener.bind(window)] : [Fa, Fa];
      var Hy = () => {
        const u = Jo && document.visibilityState;
        return On(u) || u !== "hidden";
      };
      var Ly = (u) => (Jo && document.addEventListener("visibilitychange", u), Wo("focus", u), () => {
        Jo && document.removeEventListener("visibilitychange", u), $o("focus", u);
      });
      var Yy = (u) => {
        const s = () => {
          Fo = true, u();
        }, r = () => {
          Fo = false;
        };
        return Wo("online", s), Wo("offline", r), () => {
          $o("online", s), $o("offline", r);
        };
      };
      var Gy = { isOnline: qy, isVisible: Hy };
      var Xy = { initFocus: Ly, initReconnect: Yy };
      Cs.useId;
      var cf = !_r || Dy;
      var Qy = cf ? Pe.useEffect : Pe.useLayoutEffect;
      var Qo = typeof navigator < "u" && navigator.connection;
      var fp = !cf && Qo && (["slow-2g", "2g"].includes(Qo.effectiveType) || Qo.saveData);
      var hr = /* @__PURE__ */ new WeakMap();
      var Vy = (u) => Sr.prototype.toString.call(u);
      var Vo = (u, s) => u === `[object ${s}]`;
      var ky = 0;
      var Po = (u) => {
        const s = typeof u, r = Vy(u), c = Vo(r, "Date"), y = Vo(r, "RegExp"), v = Vo(r, "Object");
        let h, x;
        if (Sr(u) === u && !c && !y) {
          if (h = hr.get(u), h)
            return h;
          if (h = ++ky + "~", hr.set(u, h), Array.isArray(u)) {
            for (h = "@", x = 0; x < u.length; x++)
              h += Po(u[x]) + ",";
            hr.set(u, h);
          }
          if (v) {
            h = "#";
            const m = Sr.keys(u).sort();
            for (; !On(x = m.pop()); )
              On(u[x]) || (h += x + ":" + Po(u[x]) + ",");
            hr.set(u, h);
          }
        } else
          h = c ? u.toJSON() : s == "symbol" ? u.toString() : s == "string" ? JSON.stringify(u) : "" + u;
        return h;
      };
      var Dp = (u) => {
        if (Ja(u))
          try {
            u = u();
          } catch (r) {
            u = "";
          }
        const s = u;
        return u = typeof u == "string" ? u : (Array.isArray(u) ? u.length : u) ? Po(u) : "", [u, s];
      };
      var Zy = 0;
      var dp = () => ++Zy;
      function Ky(...u) {
        return ma(this, null, function* () {
          const [s, r, c, y] = u, v = wl({ populateCache: true, throwOnError: true }, typeof y == "boolean" ? { revalidate: y } : y || {});
          let h = v.populateCache;
          const x = v.rollbackOnError;
          let m = v.optimisticData;
          const d = (G) => typeof x == "function" ? x(G) : x !== false, T = v.throwOnError;
          if (Ja(r)) {
            const G = r, E = [], M = s.keys();
            for (const K of M)
              !/^\$(inf|sub)\$/.test(K) && G(s.get(K)._k) && E.push(K);
            return Promise.all(E.map(w));
          }
          return w(r);
          function w(G) {
            return ma(this, null, function* () {
              const [E] = Dp(G);
              if (!E)
                return;
              const [M, K] = By(s, E), [re, ce, be, ue] = Ka.get(s), _e = () => {
                const ze = re[E];
                return (Ja(v.revalidate) ? v.revalidate(M().data, G) : v.revalidate !== false) && (delete be[E], delete ue[E], ze && ze[0]) ? ze[0](Uy).then(() => M().data) : M().data;
              };
              if (u.length < 3)
                return _e();
              let Te = c, De, me = false;
              const Ie = dp();
              ce[E] = [Ie, 0];
              const pt = !On(m), It = M(), Et = It.data, it = It._c, gt = On(it) ? Et : it;
              if (pt && (m = Ja(m) ? m(gt, Et) : m, K({ data: m, _c: gt })), Ja(Te))
                try {
                  Te = Te(gt);
                } catch (ze) {
                  De = ze, me = true;
                }
              if (Te && My(Te))
                if (Te = yield Te.catch((ze) => {
                  De = ze, me = true;
                }), Ie !== ce[E][0]) {
                  if (me)
                    throw De;
                  return Te;
                } else
                  me && pt && d(De) && (h = true, K({ data: gt, _c: Xt }));
              if (h && !me)
                if (Ja(h)) {
                  const ze = h(Te, gt);
                  K({ data: ze, error: Xt, _c: Xt });
                } else
                  K({ data: Te, error: Xt, _c: Xt });
              if (ce[E][1] = dp(), Promise.resolve(_e()).then(() => {
                K({ _c: Xt });
              }), me) {
                if (T)
                  throw De;
                return;
              }
              return Te;
            });
          }
        });
      }
      var hp = (u, s) => {
        for (const r in u)
          u[r][0] && u[r][0](s);
      };
      var Bp = (u, s) => {
        if (!Ka.has(u)) {
          const r = wl(Xy, s), c = /* @__PURE__ */ Object.create(null), y = Ky.bind(Xt, u);
          let v = Fa;
          const h = /* @__PURE__ */ Object.create(null), x = (T, w) => {
            const G = h[T] || [];
            return h[T] = G, G.push(w), () => G.splice(G.indexOf(w), 1);
          }, m = (T, w, G) => {
            u.set(T, w);
            const E = h[T];
            if (E)
              for (const M of E)
                M(w, G);
          }, d = () => {
            if (!Ka.has(u) && (Ka.set(u, [c, /* @__PURE__ */ Object.create(null), /* @__PURE__ */ Object.create(null), /* @__PURE__ */ Object.create(null), y, m, x]), !cf)) {
              const T = r.initFocus(setTimeout.bind(Xt, hp.bind(Xt, c, zy))), w = r.initReconnect(setTimeout.bind(Xt, hp.bind(Xt, c, Cy)));
              v = () => {
                T && T(), w && w(), Ka.delete(u);
              };
            }
          };
          return d(), [u, y, d, v];
        }
        return [u, Ka.get(u)[4]];
      };
      var Jy = (u, s, r, c, y) => {
        const v = r.errorRetryCount, h = y.retryCount, x = ~~((Math.random() + 0.5) * (1 << (h < 8 ? h : 8))) * r.errorRetryInterval;
        !On(v) && h > v || setTimeout(c, x, y);
      };
      var Fy = Ko;
      var [of, Wy] = Bp(/* @__PURE__ */ new Map());
      var $y = wl({ onLoadingSlow: Fa, onSuccess: Fa, onError: Fa, onErrorRetry: Jy, onDiscarded: Fa, revalidateOnFocus: true, revalidateOnReconnect: true, revalidateIfStale: true, shouldRetryOnError: true, errorRetryInterval: fp ? 1e4 : 5e3, focusThrottleInterval: 5 * 1e3, dedupingInterval: 2 * 1e3, loadingTimeout: fp ? 5e3 : 3e3, compare: Fy, isPaused: () => false, cache: of, mutate: Wy, fallback: {} }, Gy);
      var Py = (u, s) => {
        const r = wl(u, s);
        if (s) {
          const { use: c, fallback: y } = u, { use: v, fallback: h } = s;
          c && v && (r.use = c.concat(v)), y && h && (r.fallback = wl(y, h));
        }
        return r;
      };
      var mp = Pe.createContext({});
      var Iy = (u) => {
        const { value: s } = u, r = Pe.useContext(mp), c = Ja(s), y = Pe.useMemo(() => c ? s(r) : s, [c, r, s]), v = Pe.useMemo(() => c ? y : Py(r, y), [c, r, y]), h = y && y.provider, x = Pe.useRef(Xt);
        h && !x.current && (x.current = Bp(h(v.cache || of), y));
        const m = x.current;
        return m && (v.cache = m[0], v.mutate = m[1]), Qy(() => {
          if (m)
            return m[2] && m[2](), m[3];
        }, []), Pe.createElement(mp.Provider, wl(u, { value: v }));
      };
      var eb = "$inf$";
      var qp = _r && window.__SWR_DEVTOOLS_USE__;
      var tb = qp ? window.__SWR_DEVTOOLS_USE__ : [];
      var nb = () => {
        qp && (window.__SWR_DEVTOOLS_REACT__ = Cs);
      };
      var ab = (u) => (s, r, c) => u(s, r && ((...y) => {
        const [v] = Dp(s), [, , , h] = Ka.get(of);
        if (v.startsWith(eb))
          return r(...y);
        const x = h[v];
        return On(x) ? r(...y) : (delete h[v], x);
      }), c);
      tb.concat(ab);
      nb();
      Cs.use;
      Promise.resolve(Xt);
      var lb = Sr.defineProperty(Iy, "defaultValue", { value: $y });
      Promise.resolve();
      var Qn = /* @__PURE__ */ Object.create(null);
      Qn.open = "0";
      Qn.close = "1";
      Qn.ping = "2";
      Qn.pong = "3";
      Qn.message = "4";
      Qn.upgrade = "5";
      Qn.noop = "6";
      var br = /* @__PURE__ */ Object.create(null);
      Object.keys(Qn).forEach((u) => {
        br[Qn[u]] = u;
      });
      var Io = { type: "error", data: "parser error" };
      var Hp = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
      var Lp = typeof ArrayBuffer == "function";
      var Yp = (u) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(u) : u && u.buffer instanceof ArrayBuffer;
      var ff = ({ type: u, data: s }, r, c) => Hp && s instanceof Blob ? r ? c(s) : pp(s, c) : Lp && (s instanceof ArrayBuffer || Yp(s)) ? r ? c(s) : pp(new Blob([s]), c) : c(Qn[u] + (s || ""));
      var pp = (u, s) => {
        const r = new FileReader();
        return r.onload = function() {
          const c = r.result.split(",")[1];
          s("b" + (c || ""));
        }, r.readAsDataURL(u);
      };
      function gp(u) {
        return u instanceof Uint8Array ? u : u instanceof ArrayBuffer ? new Uint8Array(u) : new Uint8Array(u.buffer, u.byteOffset, u.byteLength);
      }
      var ko;
      function ib(u, s) {
        if (Hp && u.data instanceof Blob)
          return u.data.arrayBuffer().then(gp).then(s);
        if (Lp && (u.data instanceof ArrayBuffer || Yp(u.data)))
          return s(gp(u.data));
        ff(u, false, (r) => {
          ko || (ko = new TextEncoder()), s(ko.encode(r));
        });
      }
      var yp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      var zs = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
      for (let u = 0; u < yp.length; u++)
        zs[yp.charCodeAt(u)] = u;
      var sb = (u) => {
        let s = u.length * 0.75, r = u.length, c, y = 0, v, h, x, m;
        u[u.length - 1] === "=" && (s--, u[u.length - 2] === "=" && s--);
        const d = new ArrayBuffer(s), T = new Uint8Array(d);
        for (c = 0; c < r; c += 4)
          v = zs[u.charCodeAt(c)], h = zs[u.charCodeAt(c + 1)], x = zs[u.charCodeAt(c + 2)], m = zs[u.charCodeAt(c + 3)], T[y++] = v << 2 | h >> 4, T[y++] = (h & 15) << 4 | x >> 2, T[y++] = (x & 3) << 6 | m & 63;
        return d;
      };
      var ub = typeof ArrayBuffer == "function";
      var df = (u, s) => {
        if (typeof u != "string")
          return { type: "message", data: Gp(u, s) };
        const r = u.charAt(0);
        return r === "b" ? { type: "message", data: rb(u.substring(1), s) } : br[r] ? u.length > 1 ? { type: br[r], data: u.substring(1) } : { type: br[r] } : Io;
      };
      var rb = (u, s) => {
        if (ub) {
          const r = sb(u);
          return Gp(r, s);
        } else
          return { base64: true, data: u };
      };
      var Gp = (u, s) => {
        switch (s) {
          case "blob":
            return u instanceof Blob ? u : new Blob([u]);
          case "arraybuffer":
          default:
            return u instanceof ArrayBuffer ? u : u.buffer;
        }
      };
      var Xp = "";
      var cb = (u, s) => {
        const r = u.length, c = new Array(r);
        let y = 0;
        u.forEach((v, h) => {
          ff(v, false, (x) => {
            c[h] = x, ++y === r && s(c.join(Xp));
          });
        });
      };
      var ob = (u, s) => {
        const r = u.split(Xp), c = [];
        for (let y = 0; y < r.length; y++) {
          const v = df(r[y], s);
          if (c.push(v), v.type === "error")
            break;
        }
        return c;
      };
      function fb() {
        return new TransformStream({ transform(u, s) {
          ib(u, (r) => {
            const c = r.length;
            let y;
            if (c < 126)
              y = new Uint8Array(1), new DataView(y.buffer).setUint8(0, c);
            else if (c < 65536) {
              y = new Uint8Array(3);
              const v = new DataView(y.buffer);
              v.setUint8(0, 126), v.setUint16(1, c);
            } else {
              y = new Uint8Array(9);
              const v = new DataView(y.buffer);
              v.setUint8(0, 127), v.setBigUint64(1, BigInt(c));
            }
            u.data && typeof u.data != "string" && (y[0] |= 128), s.enqueue(y), s.enqueue(r);
          });
        } });
      }
      var Zo;
      function mr(u) {
        return u.reduce((s, r) => s + r.length, 0);
      }
      function pr(u, s) {
        if (u[0].length === s)
          return u.shift();
        const r = new Uint8Array(s);
        let c = 0;
        for (let y = 0; y < s; y++)
          r[y] = u[0][c++], c === u[0].length && (u.shift(), c = 0);
        return u.length && c < u[0].length && (u[0] = u[0].slice(c)), r;
      }
      function db(u, s) {
        Zo || (Zo = new TextDecoder());
        const r = [];
        let c = 0, y = -1, v = false;
        return new TransformStream({ transform(h, x) {
          for (r.push(h); ; ) {
            if (c === 0) {
              if (mr(r) < 1)
                break;
              const m = pr(r, 1);
              v = (m[0] & 128) === 128, y = m[0] & 127, y < 126 ? c = 3 : y === 126 ? c = 1 : c = 2;
            } else if (c === 1) {
              if (mr(r) < 2)
                break;
              const m = pr(r, 2);
              y = new DataView(m.buffer, m.byteOffset, m.length).getUint16(0), c = 3;
            } else if (c === 2) {
              if (mr(r) < 8)
                break;
              const m = pr(r, 8), d = new DataView(m.buffer, m.byteOffset, m.length), T = d.getUint32(0);
              if (T > Math.pow(2, 21) - 1) {
                x.enqueue(Io);
                break;
              }
              y = T * Math.pow(2, 32) + d.getUint32(4), c = 3;
            } else {
              if (mr(r) < y)
                break;
              const m = pr(r, y);
              x.enqueue(df(v ? m : Zo.decode(m), s)), c = 0;
            }
            if (y === 0 || y > u) {
              x.enqueue(Io);
              break;
            }
          }
        } });
      }
      var Qp = 4;
      function ft(u) {
        if (u)
          return hb(u);
      }
      function hb(u) {
        for (var s in ft.prototype)
          u[s] = ft.prototype[s];
        return u;
      }
      ft.prototype.on = ft.prototype.addEventListener = function(u, s) {
        return this._callbacks = this._callbacks || {}, (this._callbacks["$" + u] = this._callbacks["$" + u] || []).push(s), this;
      };
      ft.prototype.once = function(u, s) {
        function r() {
          this.off(u, r), s.apply(this, arguments);
        }
        return r.fn = s, this.on(u, r), this;
      };
      ft.prototype.off = ft.prototype.removeListener = ft.prototype.removeAllListeners = ft.prototype.removeEventListener = function(u, s) {
        if (this._callbacks = this._callbacks || {}, arguments.length == 0)
          return this._callbacks = {}, this;
        var r = this._callbacks["$" + u];
        if (!r)
          return this;
        if (arguments.length == 1)
          return delete this._callbacks["$" + u], this;
        for (var c, y = 0; y < r.length; y++)
          if (c = r[y], c === s || c.fn === s) {
            r.splice(y, 1);
            break;
          }
        return r.length === 0 && delete this._callbacks["$" + u], this;
      };
      ft.prototype.emit = function(u) {
        this._callbacks = this._callbacks || {};
        for (var s = new Array(arguments.length - 1), r = this._callbacks["$" + u], c = 1; c < arguments.length; c++)
          s[c - 1] = arguments[c];
        if (r) {
          r = r.slice(0);
          for (var c = 0, y = r.length; c < y; ++c)
            r[c].apply(this, s);
        }
        return this;
      };
      ft.prototype.emitReserved = ft.prototype.emit;
      ft.prototype.listeners = function(u) {
        return this._callbacks = this._callbacks || {}, this._callbacks["$" + u] || [];
      };
      ft.prototype.hasListeners = function(u) {
        return !!this.listeners(u).length;
      };
      var yn = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
      function Vp(u, ...s) {
        return s.reduce((r, c) => (u.hasOwnProperty(c) && (r[c] = u[c]), r), {});
      }
      var mb = yn.setTimeout;
      var pb = yn.clearTimeout;
      function Tr(u, s) {
        s.useNativeTimers ? (u.setTimeoutFn = mb.bind(yn), u.clearTimeoutFn = pb.bind(yn)) : (u.setTimeoutFn = yn.setTimeout.bind(yn), u.clearTimeoutFn = yn.clearTimeout.bind(yn));
      }
      var gb = 1.33;
      function yb(u) {
        return typeof u == "string" ? bb(u) : Math.ceil((u.byteLength || u.size) * gb);
      }
      function bb(u) {
        let s = 0, r = 0;
        for (let c = 0, y = u.length; c < y; c++)
          s = u.charCodeAt(c), s < 128 ? r += 1 : s < 2048 ? r += 2 : s < 55296 || s >= 57344 ? r += 3 : (c++, r += 4);
        return r;
      }
      function vb(u) {
        let s = "";
        for (let r in u)
          u.hasOwnProperty(r) && (s.length && (s += "&"), s += encodeURIComponent(r) + "=" + encodeURIComponent(u[r]));
        return s;
      }
      function xb(u) {
        let s = {}, r = u.split("&");
        for (let c = 0, y = r.length; c < y; c++) {
          let v = r[c].split("=");
          s[decodeURIComponent(v[0])] = decodeURIComponent(v[1]);
        }
        return s;
      }
      var Sb = class extends Error {
        constructor(s, r, c) {
          super(s), this.description = r, this.context = c, this.type = "TransportError";
        }
      };
      var hf = class extends ft {
        constructor(s) {
          super(), this.writable = false, Tr(this, s), this.opts = s, this.query = s.query, this.socket = s.socket;
        }
        onError(s, r, c) {
          return super.emitReserved("error", new Sb(s, r, c)), this;
        }
        open() {
          return this.readyState = "opening", this.doOpen(), this;
        }
        close() {
          return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this;
        }
        send(s) {
          this.readyState === "open" && this.write(s);
        }
        onOpen() {
          this.readyState = "open", this.writable = true, super.emitReserved("open");
        }
        onData(s) {
          const r = df(s, this.socket.binaryType);
          this.onPacket(r);
        }
        onPacket(s) {
          super.emitReserved("packet", s);
        }
        onClose(s) {
          this.readyState = "closed", super.emitReserved("close", s);
        }
        pause(s) {
        }
        createUri(s, r = {}) {
          return s + "://" + this._hostname() + this._port() + this.opts.path + this._query(r);
        }
        _hostname() {
          const s = this.opts.hostname;
          return s.indexOf(":") === -1 ? s : "[" + s + "]";
        }
        _port() {
          return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
        }
        _query(s) {
          const r = vb(s);
          return r.length ? "?" + r : "";
        }
      };
      var kp = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split("");
      var ef = 64;
      var _b = {};
      var bp = 0;
      var gr = 0;
      var vp;
      function xp(u) {
        let s = "";
        do
          s = kp[u % ef] + s, u = Math.floor(u / ef);
        while (u > 0);
        return s;
      }
      function Zp() {
        const u = xp(+new Date());
        return u !== vp ? (bp = 0, vp = u) : u + "." + xp(bp++);
      }
      for (; gr < ef; gr++)
        _b[kp[gr]] = gr;
      var Kp = false;
      try {
        Kp = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
      } catch (u) {
      }
      var Tb = Kp;
      function Jp(u) {
        const s = u.xdomain;
        try {
          if (typeof XMLHttpRequest < "u" && (!s || Tb))
            return new XMLHttpRequest();
        } catch (r) {
        }
        if (!s)
          try {
            return new yn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
          } catch (r) {
          }
      }
      function Ab() {
      }
      var Nb = function() {
        return new Jp({ xdomain: false }).responseType != null;
      }();
      var Eb = class extends hf {
        constructor(s) {
          if (super(s), this.polling = false, typeof location < "u") {
            const c = location.protocol === "https:";
            let y = location.port;
            y || (y = c ? "443" : "80"), this.xd = typeof location < "u" && s.hostname !== location.hostname || y !== s.port;
          }
          const r = s && s.forceBase64;
          this.supportsBinary = Nb && !r, this.opts.withCredentials && (this.cookieJar = void 0);
        }
        get name() {
          return "polling";
        }
        doOpen() {
          this.poll();
        }
        pause(s) {
          this.readyState = "pausing";
          const r = () => {
            this.readyState = "paused", s();
          };
          if (this.polling || !this.writable) {
            let c = 0;
            this.polling && (c++, this.once("pollComplete", function() {
              --c || r();
            })), this.writable || (c++, this.once("drain", function() {
              --c || r();
            }));
          } else
            r();
        }
        poll() {
          this.polling = true, this.doPoll(), this.emitReserved("poll");
        }
        onData(s) {
          const r = (c) => {
            if (this.readyState === "opening" && c.type === "open" && this.onOpen(), c.type === "close")
              return this.onClose({ description: "transport closed by the server" }), false;
            this.onPacket(c);
          };
          ob(s, this.socket.binaryType).forEach(r), this.readyState !== "closed" && (this.polling = false, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll());
        }
        doClose() {
          const s = () => {
            this.write([{ type: "close" }]);
          };
          this.readyState === "open" ? s() : this.once("open", s);
        }
        write(s) {
          this.writable = false, cb(s, (r) => {
            this.doWrite(r, () => {
              this.writable = true, this.emitReserved("drain");
            });
          });
        }
        uri() {
          const s = this.opts.secure ? "https" : "http", r = this.query || {};
          return this.opts.timestampRequests !== false && (r[this.opts.timestampParam] = Zp()), !this.supportsBinary && !r.sid && (r.b64 = 1), this.createUri(s, r);
        }
        request(s = {}) {
          return Object.assign(s, { xd: this.xd, cookieJar: this.cookieJar }, this.opts), new Xn(this.uri(), s);
        }
        doWrite(s, r) {
          const c = this.request({ method: "POST", data: s });
          c.on("success", r), c.on("error", (y, v) => {
            this.onError("xhr post error", y, v);
          });
        }
        doPoll() {
          const s = this.request();
          s.on("data", this.onData.bind(this)), s.on("error", (r, c) => {
            this.onError("xhr poll error", r, c);
          }), this.pollXhr = s;
        }
      };
      var Xn = class extends ft {
        constructor(s, r) {
          super(), Tr(this, r), this.opts = r, this.method = r.method || "GET", this.uri = s, this.data = r.data !== void 0 ? r.data : null, this.create();
        }
        create() {
          var s;
          const r = Vp(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
          r.xdomain = !!this.opts.xd;
          const c = this.xhr = new Jp(r);
          try {
            c.open(this.method, this.uri, true);
            try {
              if (this.opts.extraHeaders) {
                c.setDisableHeaderCheck && c.setDisableHeaderCheck(true);
                for (let y in this.opts.extraHeaders)
                  this.opts.extraHeaders.hasOwnProperty(y) && c.setRequestHeader(y, this.opts.extraHeaders[y]);
              }
            } catch (y) {
            }
            if (this.method === "POST")
              try {
                c.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
              } catch (y) {
              }
            try {
              c.setRequestHeader("Accept", "*/*");
            } catch (y) {
            }
            (s = this.opts.cookieJar) === null || s === void 0 || s.addCookies(c), "withCredentials" in c && (c.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (c.timeout = this.opts.requestTimeout), c.onreadystatechange = () => {
              var y;
              c.readyState === 3 && ((y = this.opts.cookieJar) === null || y === void 0 || y.parseCookies(c)), c.readyState === 4 && (c.status === 200 || c.status === 1223 ? this.onLoad() : this.setTimeoutFn(() => {
                this.onError(typeof c.status == "number" ? c.status : 0);
              }, 0));
            }, c.send(this.data);
          } catch (y) {
            this.setTimeoutFn(() => {
              this.onError(y);
            }, 0);
            return;
          }
          typeof document < "u" && (this.index = Xn.requestsCount++, Xn.requests[this.index] = this);
        }
        onError(s) {
          this.emitReserved("error", s, this.xhr), this.cleanup(true);
        }
        cleanup(s) {
          if (!(typeof this.xhr > "u" || this.xhr === null)) {
            if (this.xhr.onreadystatechange = Ab, s)
              try {
                this.xhr.abort();
              } catch (r) {
              }
            typeof document < "u" && delete Xn.requests[this.index], this.xhr = null;
          }
        }
        onLoad() {
          const s = this.xhr.responseText;
          s !== null && (this.emitReserved("data", s), this.emitReserved("success"), this.cleanup());
        }
        abort() {
          this.cleanup();
        }
      };
      Xn.requestsCount = 0;
      Xn.requests = {};
      if (typeof document < "u") {
        if (typeof attachEvent == "function")
          attachEvent("onunload", Sp);
        else if (typeof addEventListener == "function") {
          const u = "onpagehide" in yn ? "pagehide" : "unload";
          addEventListener(u, Sp, false);
        }
      }
      function Sp() {
        for (let u in Xn.requests)
          Xn.requests.hasOwnProperty(u) && Xn.requests[u].abort();
      }
      var mf = typeof Promise == "function" && typeof Promise.resolve == "function" ? (u) => Promise.resolve().then(u) : (u, s) => s(u, 0);
      var yr = yn.WebSocket || yn.MozWebSocket;
      var _p = true;
      var wb = "arraybuffer";
      var Tp = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
      var jb = class extends hf {
        constructor(s) {
          super(s), this.supportsBinary = !s.forceBase64;
        }
        get name() {
          return "websocket";
        }
        doOpen() {
          if (!this.check())
            return;
          const s = this.uri(), r = this.opts.protocols, c = Tp ? {} : Vp(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
          this.opts.extraHeaders && (c.headers = this.opts.extraHeaders);
          try {
            this.ws = _p && !Tp ? r ? new yr(s, r) : new yr(s) : new yr(s, r, c);
          } catch (y) {
            return this.emitReserved("error", y);
          }
          this.ws.binaryType = this.socket.binaryType, this.addEventListeners();
        }
        addEventListeners() {
          this.ws.onopen = () => {
            this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
          }, this.ws.onclose = (s) => this.onClose({ description: "websocket connection closed", context: s }), this.ws.onmessage = (s) => this.onData(s.data), this.ws.onerror = (s) => this.onError("websocket error", s);
        }
        write(s) {
          this.writable = false;
          for (let r = 0; r < s.length; r++) {
            const c = s[r], y = r === s.length - 1;
            ff(c, this.supportsBinary, (v) => {
              try {
                _p && this.ws.send(v);
              } catch (h) {
              }
              y && mf(() => {
                this.writable = true, this.emitReserved("drain");
              }, this.setTimeoutFn);
            });
          }
        }
        doClose() {
          typeof this.ws < "u" && (this.ws.close(), this.ws = null);
        }
        uri() {
          const s = this.opts.secure ? "wss" : "ws", r = this.query || {};
          return this.opts.timestampRequests && (r[this.opts.timestampParam] = Zp()), this.supportsBinary || (r.b64 = 1), this.createUri(s, r);
        }
        check() {
          return !!yr;
        }
      };
      var Ob = class extends hf {
        get name() {
          return "webtransport";
        }
        doOpen() {
          typeof WebTransport == "function" && (this.transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]), this.transport.closed.then(() => {
            this.onClose();
          }).catch((s) => {
            this.onError("webtransport error", s);
          }), this.transport.ready.then(() => {
            this.transport.createBidirectionalStream().then((s) => {
              const r = db(Number.MAX_SAFE_INTEGER, this.socket.binaryType), c = s.readable.pipeThrough(r).getReader(), y = fb();
              y.readable.pipeTo(s.writable), this.writer = y.writable.getWriter();
              const v = () => {
                c.read().then(({ done: x, value: m }) => {
                  x || (this.onPacket(m), v());
                }).catch((x) => {
                });
              };
              v();
              const h = { type: "open" };
              this.query.sid && (h.data = `{"sid":"${this.query.sid}"}`), this.writer.write(h).then(() => this.onOpen());
            });
          }));
        }
        write(s) {
          this.writable = false;
          for (let r = 0; r < s.length; r++) {
            const c = s[r], y = r === s.length - 1;
            this.writer.write(c).then(() => {
              y && mf(() => {
                this.writable = true, this.emitReserved("drain");
              }, this.setTimeoutFn);
            });
          }
        }
        doClose() {
          var s;
          (s = this.transport) === null || s === void 0 || s.close();
        }
      };
      var Rb = { websocket: jb, webtransport: Ob, polling: Eb };
      var zb = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
      var Cb = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
      function tf(u) {
        if (u.length > 2e3)
          throw "URI too long";
        const s = u, r = u.indexOf("["), c = u.indexOf("]");
        r != -1 && c != -1 && (u = u.substring(0, r) + u.substring(r, c).replace(/:/g, ";") + u.substring(c, u.length));
        let y = zb.exec(u || ""), v = {}, h = 14;
        for (; h--; )
          v[Cb[h]] = y[h] || "";
        return r != -1 && c != -1 && (v.source = s, v.host = v.host.substring(1, v.host.length - 1).replace(/;/g, ":"), v.authority = v.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), v.ipv6uri = true), v.pathNames = Ub(v, v.path), v.queryKey = Mb(v, v.query), v;
      }
      function Ub(u, s) {
        const r = /\/{2,9}/g, c = s.replace(r, "/").split("/");
        return (s.slice(0, 1) == "/" || s.length === 0) && c.splice(0, 1), s.slice(-1) == "/" && c.splice(c.length - 1, 1), c;
      }
      function Mb(u, s) {
        const r = {};
        return s.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(c, y, v) {
          y && (r[y] = v);
        }), r;
      }
      var Fp = class _i extends ft {
        constructor(s, r = {}) {
          super(), this.binaryType = wb, this.writeBuffer = [], s && typeof s == "object" && (r = s, s = null), s ? (s = tf(s), r.hostname = s.host, r.secure = s.protocol === "https" || s.protocol === "wss", r.port = s.port, s.query && (r.query = s.query)) : r.host && (r.hostname = tf(r.host).host), Tr(this, r), this.secure = r.secure != null ? r.secure : typeof location < "u" && location.protocol === "https:", r.hostname && !r.port && (r.port = this.secure ? "443" : "80"), this.hostname = r.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = r.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = r.transports || ["polling", "websocket", "webtransport"], this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({ path: "/engine.io", agent: false, withCredentials: false, upgrade: true, timestampParam: "t", rememberUpgrade: false, addTrailingSlash: true, rejectUnauthorized: true, perMessageDeflate: { threshold: 1024 }, transportOptions: {}, closeOnBeforeunload: false }, r), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = xb(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
            this.transport && (this.transport.removeAllListeners(), this.transport.close());
          }, addEventListener("beforeunload", this.beforeunloadEventListener, false)), this.hostname !== "localhost" && (this.offlineEventListener = () => {
            this.onClose("transport close", { description: "network connection lost" });
          }, addEventListener("offline", this.offlineEventListener, false))), this.open();
        }
        createTransport(s) {
          const r = Object.assign({}, this.opts.query);
          r.EIO = Qp, r.transport = s, this.id && (r.sid = this.id);
          const c = Object.assign({}, this.opts, { query: r, socket: this, hostname: this.hostname, secure: this.secure, port: this.port }, this.opts.transportOptions[s]);
          return new Rb[s](c);
        }
        open() {
          let s;
          if (this.opts.rememberUpgrade && _i.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1)
            s = "websocket";
          else if (this.transports.length === 0) {
            this.setTimeoutFn(() => {
              this.emitReserved("error", "No transports available");
            }, 0);
            return;
          } else
            s = this.transports[0];
          this.readyState = "opening";
          try {
            s = this.createTransport(s);
          } catch (r) {
            this.transports.shift(), this.open();
            return;
          }
          s.open(), this.setTransport(s);
        }
        setTransport(s) {
          this.transport && this.transport.removeAllListeners(), this.transport = s, s.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (r) => this.onClose("transport close", r));
        }
        probe(s) {
          let r = this.createTransport(s), c = false;
          _i.priorWebsocketSuccess = false;
          const y = () => {
            c || (r.send([{ type: "ping", data: "probe" }]), r.once("packet", (w) => {
              if (!c)
                if (w.type === "pong" && w.data === "probe") {
                  if (this.upgrading = true, this.emitReserved("upgrading", r), !r)
                    return;
                  _i.priorWebsocketSuccess = r.name === "websocket", this.transport.pause(() => {
                    c || this.readyState !== "closed" && (T(), this.setTransport(r), r.send([{ type: "upgrade" }]), this.emitReserved("upgrade", r), r = null, this.upgrading = false, this.flush());
                  });
                } else {
                  const G = new Error("probe error");
                  G.transport = r.name, this.emitReserved("upgradeError", G);
                }
            }));
          };
          function v() {
            c || (c = true, T(), r.close(), r = null);
          }
          const h = (w) => {
            const G = new Error("probe error: " + w);
            G.transport = r.name, v(), this.emitReserved("upgradeError", G);
          };
          function x() {
            h("transport closed");
          }
          function m() {
            h("socket closed");
          }
          function d(w) {
            r && w.name !== r.name && v();
          }
          const T = () => {
            r.removeListener("open", y), r.removeListener("error", h), r.removeListener("close", x), this.off("close", m), this.off("upgrading", d);
          };
          r.once("open", y), r.once("error", h), r.once("close", x), this.once("close", m), this.once("upgrading", d), this.upgrades.indexOf("webtransport") !== -1 && s !== "webtransport" ? this.setTimeoutFn(() => {
            c || r.open();
          }, 200) : r.open();
        }
        onOpen() {
          if (this.readyState = "open", _i.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(), this.readyState === "open" && this.opts.upgrade) {
            let s = 0;
            const r = this.upgrades.length;
            for (; s < r; s++)
              this.probe(this.upgrades[s]);
          }
        }
        onPacket(s) {
          if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
            switch (this.emitReserved("packet", s), this.emitReserved("heartbeat"), this.resetPingTimeout(), s.type) {
              case "open":
                this.onHandshake(JSON.parse(s.data));
                break;
              case "ping":
                this.sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong");
                break;
              case "error":
                const r = new Error("server error");
                r.code = s.data, this.onError(r);
                break;
              case "message":
                this.emitReserved("data", s.data), this.emitReserved("message", s.data);
                break;
            }
        }
        onHandshake(s) {
          this.emitReserved("handshake", s), this.id = s.sid, this.transport.query.sid = s.sid, this.upgrades = this.filterUpgrades(s.upgrades), this.pingInterval = s.pingInterval, this.pingTimeout = s.pingTimeout, this.maxPayload = s.maxPayload, this.onOpen(), this.readyState !== "closed" && this.resetPingTimeout();
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
            const s = this.getWritablePackets();
            this.transport.send(s), this.prevBufferLen = s.length, this.emitReserved("flush");
          }
        }
        getWritablePackets() {
          if (!(this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
            return this.writeBuffer;
          let s = 1;
          for (let r = 0; r < this.writeBuffer.length; r++) {
            const c = this.writeBuffer[r].data;
            if (c && (s += yb(c)), r > 0 && s > this.maxPayload)
              return this.writeBuffer.slice(0, r);
            s += 2;
          }
          return this.writeBuffer;
        }
        write(s, r, c) {
          return this.sendPacket("message", s, r, c), this;
        }
        send(s, r, c) {
          return this.sendPacket("message", s, r, c), this;
        }
        sendPacket(s, r, c, y) {
          if (typeof r == "function" && (y = r, r = void 0), typeof c == "function" && (y = c, c = null), this.readyState === "closing" || this.readyState === "closed")
            return;
          c = c || {}, c.compress = c.compress !== false;
          const v = { type: s, data: r, options: c };
          this.emitReserved("packetCreate", v), this.writeBuffer.push(v), y && this.once("flush", y), this.flush();
        }
        close() {
          const s = () => {
            this.onClose("forced close"), this.transport.close();
          }, r = () => {
            this.off("upgrade", r), this.off("upgradeError", r), s();
          }, c = () => {
            this.once("upgrade", r), this.once("upgradeError", r);
          };
          return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
            this.upgrading ? c() : s();
          }) : this.upgrading ? c() : s()), this;
        }
        onError(s) {
          _i.priorWebsocketSuccess = false, this.emitReserved("error", s), this.onClose("transport error", s);
        }
        onClose(s, r) {
          (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") && (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), typeof removeEventListener == "function" && (removeEventListener("beforeunload", this.beforeunloadEventListener, false), removeEventListener("offline", this.offlineEventListener, false)), this.readyState = "closed", this.id = null, this.emitReserved("close", s, r), this.writeBuffer = [], this.prevBufferLen = 0);
        }
        filterUpgrades(s) {
          const r = [];
          let c = 0;
          const y = s.length;
          for (; c < y; c++)
            ~this.transports.indexOf(s[c]) && r.push(s[c]);
          return r;
        }
      };
      Fp.protocol = Qp;
      function Db(u, s = "", r) {
        let c = u;
        r = r || typeof location < "u" && location, u == null && (u = r.protocol + "//" + r.host), typeof u == "string" && (u.charAt(0) === "/" && (u.charAt(1) === "/" ? u = r.protocol + u : u = r.host + u), /^(https?|wss?):\/\//.test(u) || (typeof r < "u" ? u = r.protocol + "//" + u : u = "https://" + u), c = tf(u)), c.port || (/^(http|ws)$/.test(c.protocol) ? c.port = "80" : /^(http|ws)s$/.test(c.protocol) && (c.port = "443")), c.path = c.path || "/";
        const y = c.host.indexOf(":") !== -1 ? "[" + c.host + "]" : c.host;
        return c.id = c.protocol + "://" + y + ":" + c.port + s, c.href = c.protocol + "://" + y + (r && r.port === c.port ? "" : ":" + c.port), c;
      }
      var Bb = typeof ArrayBuffer == "function";
      var qb = (u) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(u) : u.buffer instanceof ArrayBuffer;
      var Wp = Object.prototype.toString;
      var Hb = typeof Blob == "function" || typeof Blob < "u" && Wp.call(Blob) === "[object BlobConstructor]";
      var Lb = typeof File == "function" || typeof File < "u" && Wp.call(File) === "[object FileConstructor]";
      function pf(u) {
        return Bb && (u instanceof ArrayBuffer || qb(u)) || Hb && u instanceof Blob || Lb && u instanceof File;
      }
      function vr(u, s) {
        if (!u || typeof u != "object")
          return false;
        if (Array.isArray(u)) {
          for (let r = 0, c = u.length; r < c; r++)
            if (vr(u[r]))
              return true;
          return false;
        }
        if (pf(u))
          return true;
        if (u.toJSON && typeof u.toJSON == "function" && arguments.length === 1)
          return vr(u.toJSON(), true);
        for (const r in u)
          if (Object.prototype.hasOwnProperty.call(u, r) && vr(u[r]))
            return true;
        return false;
      }
      function Yb(u) {
        const s = [], r = u.data, c = u;
        return c.data = nf(r, s), c.attachments = s.length, { packet: c, buffers: s };
      }
      function nf(u, s) {
        if (!u)
          return u;
        if (pf(u)) {
          const r = { _placeholder: true, num: s.length };
          return s.push(u), r;
        } else if (Array.isArray(u)) {
          const r = new Array(u.length);
          for (let c = 0; c < u.length; c++)
            r[c] = nf(u[c], s);
          return r;
        } else if (typeof u == "object" && !(u instanceof Date)) {
          const r = {};
          for (const c in u)
            Object.prototype.hasOwnProperty.call(u, c) && (r[c] = nf(u[c], s));
          return r;
        }
        return u;
      }
      function Gb(u, s) {
        return u.data = af(u.data, s), delete u.attachments, u;
      }
      function af(u, s) {
        if (!u)
          return u;
        if (u && u._placeholder === true) {
          if (typeof u.num == "number" && u.num >= 0 && u.num < s.length)
            return s[u.num];
          throw new Error("illegal attachments");
        } else if (Array.isArray(u))
          for (let r = 0; r < u.length; r++)
            u[r] = af(u[r], s);
        else if (typeof u == "object")
          for (const r in u)
            Object.prototype.hasOwnProperty.call(u, r) && (u[r] = af(u[r], s));
        return u;
      }
      var Xb = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"];
      var Qb = 5;
      var Oe;
      (function(u) {
        u[u.CONNECT = 0] = "CONNECT", u[u.DISCONNECT = 1] = "DISCONNECT", u[u.EVENT = 2] = "EVENT", u[u.ACK = 3] = "ACK", u[u.CONNECT_ERROR = 4] = "CONNECT_ERROR", u[u.BINARY_EVENT = 5] = "BINARY_EVENT", u[u.BINARY_ACK = 6] = "BINARY_ACK";
      })(Oe || (Oe = {}));
      var Vb = class {
        constructor(s) {
          this.replacer = s;
        }
        encode(s) {
          return (s.type === Oe.EVENT || s.type === Oe.ACK) && vr(s) ? this.encodeAsBinary({ type: s.type === Oe.EVENT ? Oe.BINARY_EVENT : Oe.BINARY_ACK, nsp: s.nsp, data: s.data, id: s.id }) : [this.encodeAsString(s)];
        }
        encodeAsString(s) {
          let r = "" + s.type;
          return (s.type === Oe.BINARY_EVENT || s.type === Oe.BINARY_ACK) && (r += s.attachments + "-"), s.nsp && s.nsp !== "/" && (r += s.nsp + ","), s.id != null && (r += s.id), s.data != null && (r += JSON.stringify(s.data, this.replacer)), r;
        }
        encodeAsBinary(s) {
          const r = Yb(s), c = this.encodeAsString(r.packet), y = r.buffers;
          return y.unshift(c), y;
        }
      };
      function Ap(u) {
        return Object.prototype.toString.call(u) === "[object Object]";
      }
      var gf = class extends ft {
        constructor(s) {
          super(), this.reviver = s;
        }
        add(s) {
          let r;
          if (typeof s == "string") {
            if (this.reconstructor)
              throw new Error("got plaintext data when reconstructing a packet");
            r = this.decodeString(s);
            const c = r.type === Oe.BINARY_EVENT;
            c || r.type === Oe.BINARY_ACK ? (r.type = c ? Oe.EVENT : Oe.ACK, this.reconstructor = new kb(r), r.attachments === 0 && super.emitReserved("decoded", r)) : super.emitReserved("decoded", r);
          } else if (pf(s) || s.base64)
            if (this.reconstructor)
              r = this.reconstructor.takeBinaryData(s), r && (this.reconstructor = null, super.emitReserved("decoded", r));
            else
              throw new Error("got binary data when not reconstructing a packet");
          else
            throw new Error("Unknown type: " + s);
        }
        decodeString(s) {
          let r = 0;
          const c = { type: Number(s.charAt(0)) };
          if (Oe[c.type] === void 0)
            throw new Error("unknown packet type " + c.type);
          if (c.type === Oe.BINARY_EVENT || c.type === Oe.BINARY_ACK) {
            const v = r + 1;
            for (; s.charAt(++r) !== "-" && r != s.length; )
              ;
            const h = s.substring(v, r);
            if (h != Number(h) || s.charAt(r) !== "-")
              throw new Error("Illegal attachments");
            c.attachments = Number(h);
          }
          if (s.charAt(r + 1) === "/") {
            const v = r + 1;
            for (; ++r && !(s.charAt(r) === "," || r === s.length); )
              ;
            c.nsp = s.substring(v, r);
          } else
            c.nsp = "/";
          const y = s.charAt(r + 1);
          if (y !== "" && Number(y) == y) {
            const v = r + 1;
            for (; ++r; ) {
              const h = s.charAt(r);
              if (h == null || Number(h) != h) {
                --r;
                break;
              }
              if (r === s.length)
                break;
            }
            c.id = Number(s.substring(v, r + 1));
          }
          if (s.charAt(++r)) {
            const v = this.tryParse(s.substr(r));
            if (gf.isPayloadValid(c.type, v))
              c.data = v;
            else
              throw new Error("invalid payload");
          }
          return c;
        }
        tryParse(s) {
          try {
            return JSON.parse(s, this.reviver);
          } catch (r) {
            return false;
          }
        }
        static isPayloadValid(s, r) {
          switch (s) {
            case Oe.CONNECT:
              return Ap(r);
            case Oe.DISCONNECT:
              return r === void 0;
            case Oe.CONNECT_ERROR:
              return typeof r == "string" || Ap(r);
            case Oe.EVENT:
            case Oe.BINARY_EVENT:
              return Array.isArray(r) && (typeof r[0] == "number" || typeof r[0] == "string" && Xb.indexOf(r[0]) === -1);
            case Oe.ACK:
            case Oe.BINARY_ACK:
              return Array.isArray(r);
          }
        }
        destroy() {
          this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
        }
      };
      var kb = class {
        constructor(s) {
          this.packet = s, this.buffers = [], this.reconPack = s;
        }
        takeBinaryData(s) {
          if (this.buffers.push(s), this.buffers.length === this.reconPack.attachments) {
            const r = Gb(this.reconPack, this.buffers);
            return this.finishedReconstruction(), r;
          }
          return null;
        }
        finishedReconstruction() {
          this.reconPack = null, this.buffers = [];
        }
      };
      var Zb = Object.freeze(Object.defineProperty({ __proto__: null, Decoder: gf, Encoder: Vb, get PacketType() {
        return Oe;
      }, protocol: Qb }, Symbol.toStringTag, { value: "Module" }));
      function jn(u, s, r) {
        return u.on(s, r), function() {
          u.off(s, r);
        };
      }
      var Kb = Object.freeze({ connect: 1, connect_error: 1, disconnect: 1, disconnecting: 1, newListener: 1, removeListener: 1 });
      var $p = class extends ft {
        constructor(s, r, c) {
          super(), this.connected = false, this.recovered = false, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = s, this.nsp = r, c && c.auth && (this.auth = c.auth), this._opts = Object.assign({}, c), this.io._autoConnect && this.open();
        }
        get disconnected() {
          return !this.connected;
        }
        subEvents() {
          if (this.subs)
            return;
          const s = this.io;
          this.subs = [jn(s, "open", this.onopen.bind(this)), jn(s, "packet", this.onpacket.bind(this)), jn(s, "error", this.onerror.bind(this)), jn(s, "close", this.onclose.bind(this))];
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
        send(...s) {
          return s.unshift("message"), this.emit.apply(this, s), this;
        }
        emit(s, ...r) {
          if (Kb.hasOwnProperty(s))
            throw new Error('"' + s.toString() + '" is a reserved event name');
          if (r.unshift(s), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
            return this._addToQueue(r), this;
          const c = { type: Oe.EVENT, data: r };
          if (c.options = {}, c.options.compress = this.flags.compress !== false, typeof r[r.length - 1] == "function") {
            const v = this.ids++, h = r.pop();
            this._registerAckCallback(v, h), c.id = v;
          }
          const y = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
          return this.flags.volatile && (!y || !this.connected) || (this.connected ? (this.notifyOutgoingListeners(c), this.packet(c)) : this.sendBuffer.push(c)), this.flags = {}, this;
        }
        _registerAckCallback(s, r) {
          var c;
          const y = (c = this.flags.timeout) !== null && c !== void 0 ? c : this._opts.ackTimeout;
          if (y === void 0) {
            this.acks[s] = r;
            return;
          }
          const v = this.io.setTimeoutFn(() => {
            delete this.acks[s];
            for (let h = 0; h < this.sendBuffer.length; h++)
              this.sendBuffer[h].id === s && this.sendBuffer.splice(h, 1);
            r.call(this, new Error("operation has timed out"));
          }, y);
          this.acks[s] = (...h) => {
            this.io.clearTimeoutFn(v), r.apply(this, [null, ...h]);
          };
        }
        emitWithAck(s, ...r) {
          const c = this.flags.timeout !== void 0 || this._opts.ackTimeout !== void 0;
          return new Promise((y, v) => {
            r.push((h, x) => c ? h ? v(h) : y(x) : y(h)), this.emit(s, ...r);
          });
        }
        _addToQueue(s) {
          let r;
          typeof s[s.length - 1] == "function" && (r = s.pop());
          const c = { id: this._queueSeq++, tryCount: 0, pending: false, args: s, flags: Object.assign({ fromQueue: true }, this.flags) };
          s.push((y, ...v) => c !== this._queue[0] ? void 0 : (y !== null ? c.tryCount > this._opts.retries && (this._queue.shift(), r && r(y)) : (this._queue.shift(), r && r(null, ...v)), c.pending = false, this._drainQueue())), this._queue.push(c), this._drainQueue();
        }
        _drainQueue(s = false) {
          if (!this.connected || this._queue.length === 0)
            return;
          const r = this._queue[0];
          r.pending && !s || (r.pending = true, r.tryCount++, this.flags = r.flags, this.emit.apply(this, r.args));
        }
        packet(s) {
          s.nsp = this.nsp, this.io._packet(s);
        }
        onopen() {
          typeof this.auth == "function" ? this.auth((s) => {
            this._sendConnectPacket(s);
          }) : this._sendConnectPacket(this.auth);
        }
        _sendConnectPacket(s) {
          this.packet({ type: Oe.CONNECT, data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, s) : s });
        }
        onerror(s) {
          this.connected || this.emitReserved("connect_error", s);
        }
        onclose(s, r) {
          this.connected = false, delete this.id, this.emitReserved("disconnect", s, r);
        }
        onpacket(s) {
          if (s.nsp === this.nsp)
            switch (s.type) {
              case Oe.CONNECT:
                s.data && s.data.sid ? this.onconnect(s.data.sid, s.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                break;
              case Oe.EVENT:
              case Oe.BINARY_EVENT:
                this.onevent(s);
                break;
              case Oe.ACK:
              case Oe.BINARY_ACK:
                this.onack(s);
                break;
              case Oe.DISCONNECT:
                this.ondisconnect();
                break;
              case Oe.CONNECT_ERROR:
                this.destroy();
                const r = new Error(s.data.message);
                r.data = s.data.data, this.emitReserved("connect_error", r);
                break;
            }
        }
        onevent(s) {
          const r = s.data || [];
          s.id != null && r.push(this.ack(s.id)), this.connected ? this.emitEvent(r) : this.receiveBuffer.push(Object.freeze(r));
        }
        emitEvent(s) {
          if (this._anyListeners && this._anyListeners.length) {
            const r = this._anyListeners.slice();
            for (const c of r)
              c.apply(this, s);
          }
          super.emit.apply(this, s), this._pid && s.length && typeof s[s.length - 1] == "string" && (this._lastOffset = s[s.length - 1]);
        }
        ack(s) {
          const r = this;
          let c = false;
          return function(...y) {
            c || (c = true, r.packet({ type: Oe.ACK, id: s, data: y }));
          };
        }
        onack(s) {
          const r = this.acks[s.id];
          typeof r == "function" && (r.apply(this, s.data), delete this.acks[s.id]);
        }
        onconnect(s, r) {
          this.id = s, this.recovered = r && this._pid === r, this._pid = r, this.connected = true, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(true);
        }
        emitBuffered() {
          this.receiveBuffer.forEach((s) => this.emitEvent(s)), this.receiveBuffer = [], this.sendBuffer.forEach((s) => {
            this.notifyOutgoingListeners(s), this.packet(s);
          }), this.sendBuffer = [];
        }
        ondisconnect() {
          this.destroy(), this.onclose("io server disconnect");
        }
        destroy() {
          this.subs && (this.subs.forEach((s) => s()), this.subs = void 0), this.io._destroy(this);
        }
        disconnect() {
          return this.connected && this.packet({ type: Oe.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
        }
        close() {
          return this.disconnect();
        }
        compress(s) {
          return this.flags.compress = s, this;
        }
        get volatile() {
          return this.flags.volatile = true, this;
        }
        timeout(s) {
          return this.flags.timeout = s, this;
        }
        onAny(s) {
          return this._anyListeners = this._anyListeners || [], this._anyListeners.push(s), this;
        }
        prependAny(s) {
          return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(s), this;
        }
        offAny(s) {
          if (!this._anyListeners)
            return this;
          if (s) {
            const r = this._anyListeners;
            for (let c = 0; c < r.length; c++)
              if (s === r[c])
                return r.splice(c, 1), this;
          } else
            this._anyListeners = [];
          return this;
        }
        listenersAny() {
          return this._anyListeners || [];
        }
        onAnyOutgoing(s) {
          return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(s), this;
        }
        prependAnyOutgoing(s) {
          return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(s), this;
        }
        offAnyOutgoing(s) {
          if (!this._anyOutgoingListeners)
            return this;
          if (s) {
            const r = this._anyOutgoingListeners;
            for (let c = 0; c < r.length; c++)
              if (s === r[c])
                return r.splice(c, 1), this;
          } else
            this._anyOutgoingListeners = [];
          return this;
        }
        listenersAnyOutgoing() {
          return this._anyOutgoingListeners || [];
        }
        notifyOutgoingListeners(s) {
          if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const r = this._anyOutgoingListeners.slice();
            for (const c of r)
              c.apply(this, s.data);
          }
        }
      };
      function Ti(u) {
        u = u || {}, this.ms = u.min || 100, this.max = u.max || 1e4, this.factor = u.factor || 2, this.jitter = u.jitter > 0 && u.jitter <= 1 ? u.jitter : 0, this.attempts = 0;
      }
      Ti.prototype.duration = function() {
        var u = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
          var s = Math.random(), r = Math.floor(s * this.jitter * u);
          u = (Math.floor(s * 10) & 1) == 0 ? u - r : u + r;
        }
        return Math.min(u, this.max) | 0;
      };
      Ti.prototype.reset = function() {
        this.attempts = 0;
      };
      Ti.prototype.setMin = function(u) {
        this.ms = u;
      };
      Ti.prototype.setMax = function(u) {
        this.max = u;
      };
      Ti.prototype.setJitter = function(u) {
        this.jitter = u;
      };
      var lf = class extends ft {
        constructor(s, r) {
          var c;
          super(), this.nsps = {}, this.subs = [], s && typeof s == "object" && (r = s, s = void 0), r = r || {}, r.path = r.path || "/socket.io", this.opts = r, Tr(this, r), this.reconnection(r.reconnection !== false), this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0), this.reconnectionDelay(r.reconnectionDelay || 1e3), this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3), this.randomizationFactor((c = r.randomizationFactor) !== null && c !== void 0 ? c : 0.5), this.backoff = new Ti({ min: this.reconnectionDelay(), max: this.reconnectionDelayMax(), jitter: this.randomizationFactor() }), this.timeout(r.timeout == null ? 2e4 : r.timeout), this._readyState = "closed", this.uri = s;
          const y = r.parser || Zb;
          this.encoder = new y.Encoder(), this.decoder = new y.Decoder(), this._autoConnect = r.autoConnect !== false, this._autoConnect && this.open();
        }
        reconnection(s) {
          return arguments.length ? (this._reconnection = !!s, this) : this._reconnection;
        }
        reconnectionAttempts(s) {
          return s === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = s, this);
        }
        reconnectionDelay(s) {
          var r;
          return s === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = s, (r = this.backoff) === null || r === void 0 || r.setMin(s), this);
        }
        randomizationFactor(s) {
          var r;
          return s === void 0 ? this._randomizationFactor : (this._randomizationFactor = s, (r = this.backoff) === null || r === void 0 || r.setJitter(s), this);
        }
        reconnectionDelayMax(s) {
          var r;
          return s === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = s, (r = this.backoff) === null || r === void 0 || r.setMax(s), this);
        }
        timeout(s) {
          return arguments.length ? (this._timeout = s, this) : this._timeout;
        }
        maybeReconnectOnOpen() {
          !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect();
        }
        open(s) {
          if (~this._readyState.indexOf("open"))
            return this;
          this.engine = new Fp(this.uri, this.opts);
          const r = this.engine, c = this;
          this._readyState = "opening", this.skipReconnect = false;
          const y = jn(r, "open", function() {
            c.onopen(), s && s();
          }), v = (x) => {
            this.cleanup(), this._readyState = "closed", this.emitReserved("error", x), s ? s(x) : this.maybeReconnectOnOpen();
          }, h = jn(r, "error", v);
          if (this._timeout !== false) {
            const x = this._timeout, m = this.setTimeoutFn(() => {
              y(), v(new Error("timeout")), r.close();
            }, x);
            this.opts.autoUnref && m.unref(), this.subs.push(() => {
              this.clearTimeoutFn(m);
            });
          }
          return this.subs.push(y), this.subs.push(h), this;
        }
        connect(s) {
          return this.open(s);
        }
        onopen() {
          this.cleanup(), this._readyState = "open", this.emitReserved("open");
          const s = this.engine;
          this.subs.push(jn(s, "ping", this.onping.bind(this)), jn(s, "data", this.ondata.bind(this)), jn(s, "error", this.onerror.bind(this)), jn(s, "close", this.onclose.bind(this)), jn(this.decoder, "decoded", this.ondecoded.bind(this)));
        }
        onping() {
          this.emitReserved("ping");
        }
        ondata(s) {
          try {
            this.decoder.add(s);
          } catch (r) {
            this.onclose("parse error", r);
          }
        }
        ondecoded(s) {
          mf(() => {
            this.emitReserved("packet", s);
          }, this.setTimeoutFn);
        }
        onerror(s) {
          this.emitReserved("error", s);
        }
        socket(s, r) {
          let c = this.nsps[s];
          return c ? this._autoConnect && !c.active && c.connect() : (c = new $p(this, s, r), this.nsps[s] = c), c;
        }
        _destroy(s) {
          const r = Object.keys(this.nsps);
          for (const c of r)
            if (this.nsps[c].active)
              return;
          this._close();
        }
        _packet(s) {
          const r = this.encoder.encode(s);
          for (let c = 0; c < r.length; c++)
            this.engine.write(r[c], s.options);
        }
        cleanup() {
          this.subs.forEach((s) => s()), this.subs.length = 0, this.decoder.destroy();
        }
        _close() {
          this.skipReconnect = true, this._reconnecting = false, this.onclose("forced close"), this.engine && this.engine.close();
        }
        disconnect() {
          return this._close();
        }
        onclose(s, r) {
          this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", s, r), this._reconnection && !this.skipReconnect && this.reconnect();
        }
        reconnect() {
          if (this._reconnecting || this.skipReconnect)
            return this;
          const s = this;
          if (this.backoff.attempts >= this._reconnectionAttempts)
            this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = false;
          else {
            const r = this.backoff.duration();
            this._reconnecting = true;
            const c = this.setTimeoutFn(() => {
              s.skipReconnect || (this.emitReserved("reconnect_attempt", s.backoff.attempts), !s.skipReconnect && s.open((y) => {
                y ? (s._reconnecting = false, s.reconnect(), this.emitReserved("reconnect_error", y)) : s.onreconnect();
              }));
            }, r);
            this.opts.autoUnref && c.unref(), this.subs.push(() => {
              this.clearTimeoutFn(c);
            });
          }
        }
        onreconnect() {
          const s = this.backoff.attempts;
          this._reconnecting = false, this.backoff.reset(), this.emitReserved("reconnect", s);
        }
      };
      var Rs = {};
      function xr(u, s) {
        typeof u == "object" && (s = u, u = void 0), s = s || {};
        const r = Db(u, s.path || "/socket.io"), c = r.source, y = r.id, v = r.path, h = Rs[y] && v in Rs[y].nsps, x = s.forceNew || s["force new connection"] || s.multiplex === false || h;
        let m;
        return x ? m = new lf(c, s) : (Rs[y] || (Rs[y] = new lf(c, s)), m = Rs[y]), r.query && !s.query && (s.query = r.queryKey), m.socket(r.path, s);
      }
      Object.assign(xr, { Manager: lf, Socket: $p, io: xr, connect: xr });
      var Jb = class {
        constructor(s, r, c, y) {
          El(this, "socket_port"), El(this, "host"), El(this, "port"), El(this, "protocol"), El(this, "url"), El(this, "site_name"), El(this, "socket");
          var v, h, x, m;
          if (this.socket_port = c != null ? c : "9000", this.host = (v = window.location) == null ? void 0 : v.hostname, this.port = (h = window.location) != null && h.port ? `:${this.socket_port}` : "", this.protocol = ((x = window.location) == null ? void 0 : x.protocol) === "https:" ? "https" : "http", s) {
            let d = new URL(s);
            d.port = "", c ? (d.port = c, this.url = d.toString()) : this.url = d.toString();
          } else
            this.url = `${this.protocol}://${this.host}${this.port}/`;
          r && (this.url = `${this.url}${r}`), this.site_name = r, this.socket = xr(`${this.url}`, { withCredentials: true, secure: this.protocol === "https", extraHeaders: y && y.useToken === true ? { Authorization: `${y.type} ${(m = y.token) == null ? void 0 : m.call(y)}` } : {} });
        }
      };
      var Fb = Pe.createContext(null);
      var Wb = ({ url: u = "", tokenParams: s, socketPort: r, swrConfig: c, siteName: y, enableSocket: v = true, children: h, customHeaders: x }) => {
        const m = Pe.useMemo(() => {
          const d = new jy.FrappeApp(u, s, void 0, x);
          return { url: u, tokenParams: s, app: d, auth: d.auth(), db: d.db(), call: d.call(), file: d.file(), socket: v ? new Jb(u, y, r, s).socket : void 0, enableSocket: v, socketPort: r };
        }, [u, s, r, v, x]);
        return g.jsx(Fb.Provider, { value: m, children: g.jsx(lb, { value: c, children: h }) });
      };
      var $b = (u) => {
        var s;
        return g.jsx(Wb, { enableSocket: false, customHeaders: { "x-frappe-csrf-token": (s = window.frappe) == null ? void 0 : s.csrf_token }, children: u.children });
      };
      Object.keys(Zm).map((u) => Zm[u]).filter((u) => u.component).map((u) => {
        const s = (r) => g.jsx($b, St(Be({}, r), { children: g.jsx(u, {}) }));
        return customElements.get(u.component) || customElements.define(u.component, hy(s, Cs, Sy)), { element: s, simulator: "simulator" in u ? u.simulator : void 0, renderInReact: "renderInReact" in u ? u.renderInReact : void 0, tag: u.component };
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
//# sourceMappingURL=index.bundle.GQ4O5POK.js.map
