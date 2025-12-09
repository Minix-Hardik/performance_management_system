(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // ../pms_system/pms_system/public/pms-ui/index.bundle.js
  var require_index_bundle = __commonJS({
    "../pms_system/pms_system/public/pms-ui/index.bundle.js"() {
      var w0 = Object.defineProperty;
      var A0 = Object.defineProperties;
      var R0 = Object.getOwnPropertyDescriptors;
      var fr = Object.getOwnPropertySymbols;
      var Bm = Object.prototype.hasOwnProperty;
      var qm = Object.prototype.propertyIsEnumerable;
      var vi = (u, s) => (s = Symbol[u]) ? s : Symbol.for("Symbol." + u);
      var O0 = (u) => {
        throw TypeError(u);
      };
      var Dm = (u, s, r) => s in u ? w0(u, s, { enumerable: true, configurable: true, writable: true, value: r }) : u[s] = r;
      var Ge = (u, s) => {
        for (var r in s || (s = {}))
          Bm.call(s, r) && Dm(u, r, s[r]);
        if (fr)
          for (var r of fr(s))
            qm.call(s, r) && Dm(u, r, s[r]);
        return u;
      };
      var At = (u, s) => A0(u, R0(s));
      var Cf = (u, s) => {
        var r = {};
        for (var o in u)
          Bm.call(u, o) && s.indexOf(o) < 0 && (r[o] = u[o]);
        if (u != null && fr)
          for (var o of fr(u))
            s.indexOf(o) < 0 && qm.call(u, o) && (r[o] = u[o]);
        return r;
      };
      var ha = (u, s, r) => new Promise((o, y) => {
        var b = (p) => {
          try {
            x(r.next(p));
          } catch (h) {
            y(h);
          }
        }, m = (p) => {
          try {
            x(r.throw(p));
          } catch (h) {
            y(h);
          }
        }, x = (p) => p.done ? o(p.value) : Promise.resolve(p.value).then(b, m);
        x((r = r.apply(u, s)).next());
      });
      var Nl = function(u, s) {
        this[0] = u, this[1] = s;
      };
      var zf = (u, s, r) => {
        var o = (m, x, p, h) => {
          try {
            var N = r[m](x), E = (x = N.value) instanceof Nl, Y = N.done;
            Promise.resolve(E ? x[0] : x).then((O) => E ? o(m === "return" ? m : "next", x[1] ? { done: O.done, value: O.value } : O, p, h) : p({ value: O, done: Y })).catch((O) => o("throw", O, p, h));
          } catch (O) {
            h(O);
          }
        }, y = (m) => b[m] = (x) => new Promise((p, h) => o(m, x, p, h)), b = {};
        return r = r.apply(u, s), b[vi("asyncIterator")] = () => b, y("next"), y("throw"), y("return"), b;
      };
      var Mf = (u) => {
        var s = u[vi("asyncIterator")], r = false, o, y = {};
        return s == null ? (s = u[vi("iterator")](), o = (b) => y[b] = (m) => s[b](m)) : (s = s.call(u), o = (b) => y[b] = (m) => {
          if (r) {
            if (r = false, b === "throw")
              throw m;
            return m;
          }
          return r = true, { done: false, value: new Nl(new Promise((x) => {
            var p = s[b](m);
            p instanceof Object || O0("Object expected"), x(p);
          }), 1) };
        }), y[vi("iterator")] = () => y, o("next"), "throw" in s ? o("throw") : y.throw = (b) => {
          throw b;
        }, "return" in s && o("return"), y;
      };
      var Hm = (u, s, r) => (s = u[vi("asyncIterator")]) ? s.call(u) : (u = u[vi("iterator")](), s = {}, r = (o, y) => (y = u[o]) && (s[o] = (b) => new Promise((m, x, p) => (b = y.call(u, b), p = b.done, Promise.resolve(b.value).then((h) => m({ value: h, done: p }), x)))), r("next"), r("return"), s);
      (function() {
        const s = document.createElement("link").relList;
        if (s && s.supports && s.supports("modulepreload"))
          return;
        for (const y of document.querySelectorAll('link[rel="modulepreload"]'))
          o(y);
        new MutationObserver((y) => {
          for (const b of y)
            if (b.type === "childList")
              for (const m of b.addedNodes)
                m.tagName === "LINK" && m.rel === "modulepreload" && o(m);
        }).observe(document, { childList: true, subtree: true });
        function r(y) {
          const b = {};
          return y.integrity && (b.integrity = y.integrity), y.referrerPolicy && (b.referrerPolicy = y.referrerPolicy), y.crossOrigin === "use-credentials" ? b.credentials = "include" : y.crossOrigin === "anonymous" ? b.credentials = "omit" : b.credentials = "same-origin", b;
        }
        function o(y) {
          if (y.ep)
            return;
          y.ep = true;
          const b = r(y);
          fetch(y.href, b);
        }
      })();
      function Np(u) {
        return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
      }
      var Uf = { exports: {} };
      var Es = {};
      var Lm;
      function C0() {
        if (Lm)
          return Es;
        Lm = 1;
        var u = Symbol.for("react.transitional.element"), s = Symbol.for("react.fragment");
        function r(o, y, b) {
          var m = null;
          if (b !== void 0 && (m = "" + b), y.key !== void 0 && (m = "" + y.key), "key" in y) {
            b = {};
            for (var x in y)
              x !== "key" && (b[x] = y[x]);
          } else
            b = y;
          return y = b.ref, { $$typeof: u, type: o, key: m, ref: y !== void 0 ? y : null, props: b };
        }
        return Es.Fragment = s, Es.jsx = r, Es.jsxs = r, Es;
      }
      var Ym;
      function z0() {
        return Ym || (Ym = 1, Uf.exports = C0()), Uf.exports;
      }
      var d = z0();
      var Df = { exports: {} };
      var xe = {};
      var Qm;
      function M0() {
        if (Qm)
          return xe;
        Qm = 1;
        var u = Symbol.for("react.transitional.element"), s = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), m = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), E = Symbol.for("react.activity"), Y = Symbol.iterator;
        function O(T) {
          return T === null || typeof T != "object" ? null : (T = Y && T[Y] || T["@@iterator"], typeof T == "function" ? T : null);
        }
        var B = { isMounted: function() {
          return false;
        }, enqueueForceUpdate: function() {
        }, enqueueReplaceState: function() {
        }, enqueueSetState: function() {
        } }, W = Object.assign, fe = {};
        function $(T, A, G) {
          this.props = T, this.context = A, this.refs = fe, this.updater = G || B;
        }
        $.prototype.isReactComponent = {}, $.prototype.setState = function(T, A) {
          if (typeof T != "object" && typeof T != "function" && T != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
          this.updater.enqueueSetState(this, T, A, "setState");
        }, $.prototype.forceUpdate = function(T) {
          this.updater.enqueueForceUpdate(this, T, "forceUpdate");
        };
        function ue() {
        }
        ue.prototype = $.prototype;
        function ae(T, A, G) {
          this.props = T, this.context = A, this.refs = fe, this.updater = G || B;
        }
        var he = ae.prototype = new ue();
        he.constructor = ae, W(he, $.prototype), he.isPureReactComponent = true;
        var ge = Array.isArray;
        function Se() {
        }
        var ie = { H: null, A: null, T: null, S: null }, ze = Object.prototype.hasOwnProperty;
        function ke(T, A, G) {
          var Z = G.ref;
          return { $$typeof: u, type: T, key: A, ref: Z !== void 0 ? Z : null, props: G };
        }
        function Ut(T, A) {
          return ke(T.type, A, T.props);
        }
        function yt(T) {
          return typeof T == "object" && T !== null && T.$$typeof === u;
        }
        function nt(T) {
          var A = { "=": "=0", ":": "=2" };
          return "$" + T.replace(/[=:]/g, function(G) {
            return A[G];
          });
        }
        var Ve = /\/+/g;
        function Ce(T, A) {
          return typeof T == "object" && T !== null && T.key != null ? nt("" + T.key) : A.toString(36);
        }
        function Pe(T) {
          switch (T.status) {
            case "fulfilled":
              return T.value;
            case "rejected":
              throw T.reason;
            default:
              switch (typeof T.status == "string" ? T.then(Se, Se) : (T.status = "pending", T.then(function(A) {
                T.status === "pending" && (T.status = "fulfilled", T.value = A);
              }, function(A) {
                T.status === "pending" && (T.status = "rejected", T.reason = A);
              })), T.status) {
                case "fulfilled":
                  return T.value;
                case "rejected":
                  throw T.reason;
              }
          }
          throw T;
        }
        function Q(T, A, G, Z, J) {
          var ye = typeof T;
          (ye === "undefined" || ye === "boolean") && (T = null);
          var Oe = false;
          if (T === null)
            Oe = true;
          else
            switch (ye) {
              case "bigint":
              case "string":
              case "number":
                Oe = true;
                break;
              case "object":
                switch (T.$$typeof) {
                  case u:
                  case s:
                    Oe = true;
                    break;
                  case N:
                    return Oe = T._init, Q(Oe(T._payload), A, G, Z, J);
                }
            }
          if (Oe)
            return J = J(T), Oe = Z === "" ? "." + Ce(T, 0) : Z, ge(J) ? (G = "", Oe != null && (G = Oe.replace(Ve, "$&/") + "/"), Q(J, A, G, "", function(Xn) {
              return Xn;
            })) : J != null && (yt(J) && (J = Ut(J, G + (J.key == null || T && T.key === J.key ? "" : ("" + J.key).replace(Ve, "$&/") + "/") + Oe)), A.push(J)), 1;
          Oe = 0;
          var Be = Z === "" ? "." : Z + ":";
          if (ge(T))
            for (var Je = 0; Je < T.length; Je++)
              Z = T[Je], ye = Be + Ce(Z, Je), Oe += Q(Z, A, G, ye, J);
          else if (Je = O(T), typeof Je == "function")
            for (T = Je.call(T), Je = 0; !(Z = T.next()).done; )
              Z = Z.value, ye = Be + Ce(Z, Je++), Oe += Q(Z, A, G, ye, J);
          else if (ye === "object") {
            if (typeof T.then == "function")
              return Q(Pe(T), A, G, Z, J);
            throw A = String(T), Error("Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead.");
          }
          return Oe;
        }
        function ee(T, A, G) {
          if (T == null)
            return T;
          var Z = [], J = 0;
          return Q(T, Z, "", "", function(ye) {
            return A.call(G, ye, J++);
          }), Z;
        }
        function ce(T) {
          if (T._status === -1) {
            var A = T._result;
            A = A(), A.then(function(G) {
              (T._status === 0 || T._status === -1) && (T._status = 1, T._result = G);
            }, function(G) {
              (T._status === 0 || T._status === -1) && (T._status = 2, T._result = G);
            }), T._status === -1 && (T._status = 0, T._result = A);
          }
          if (T._status === 1)
            return T._result.default;
          throw T._result;
        }
        var te = typeof reportError == "function" ? reportError : function(T) {
          if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var A = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof T == "object" && T !== null && typeof T.message == "string" ? String(T.message) : String(T), error: T });
            if (!window.dispatchEvent(A))
              return;
          } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", T);
            return;
          }
          console.error(T);
        }, ne = { map: ee, forEach: function(T, A, G) {
          ee(T, function() {
            A.apply(this, arguments);
          }, G);
        }, count: function(T) {
          var A = 0;
          return ee(T, function() {
            A++;
          }), A;
        }, toArray: function(T) {
          return ee(T, function(A) {
            return A;
          }) || [];
        }, only: function(T) {
          if (!yt(T))
            throw Error("React.Children.only expected to receive a single React element child.");
          return T;
        } };
        return xe.Activity = E, xe.Children = ne, xe.Component = $, xe.Fragment = r, xe.Profiler = y, xe.PureComponent = ae, xe.StrictMode = o, xe.Suspense = p, xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ie, xe.__COMPILER_RUNTIME = { __proto__: null, c: function(T) {
          return ie.H.useMemoCache(T);
        } }, xe.cache = function(T) {
          return function() {
            return T.apply(null, arguments);
          };
        }, xe.cacheSignal = function() {
          return null;
        }, xe.cloneElement = function(T, A, G) {
          if (T == null)
            throw Error("The argument must be a React element, but you passed " + T + ".");
          var Z = W({}, T.props), J = T.key;
          if (A != null)
            for (ye in A.key !== void 0 && (J = "" + A.key), A)
              !ze.call(A, ye) || ye === "key" || ye === "__self" || ye === "__source" || ye === "ref" && A.ref === void 0 || (Z[ye] = A[ye]);
          var ye = arguments.length - 2;
          if (ye === 1)
            Z.children = G;
          else if (1 < ye) {
            for (var Oe = Array(ye), Be = 0; Be < ye; Be++)
              Oe[Be] = arguments[Be + 2];
            Z.children = Oe;
          }
          return ke(T.type, J, Z);
        }, xe.createContext = function(T) {
          return T = { $$typeof: m, _currentValue: T, _currentValue2: T, _threadCount: 0, Provider: null, Consumer: null }, T.Provider = T, T.Consumer = { $$typeof: b, _context: T }, T;
        }, xe.createElement = function(T, A, G) {
          var Z, J = {}, ye = null;
          if (A != null)
            for (Z in A.key !== void 0 && (ye = "" + A.key), A)
              ze.call(A, Z) && Z !== "key" && Z !== "__self" && Z !== "__source" && (J[Z] = A[Z]);
          var Oe = arguments.length - 2;
          if (Oe === 1)
            J.children = G;
          else if (1 < Oe) {
            for (var Be = Array(Oe), Je = 0; Je < Oe; Je++)
              Be[Je] = arguments[Je + 2];
            J.children = Be;
          }
          if (T && T.defaultProps)
            for (Z in Oe = T.defaultProps, Oe)
              J[Z] === void 0 && (J[Z] = Oe[Z]);
          return ke(T, ye, J);
        }, xe.createRef = function() {
          return { current: null };
        }, xe.forwardRef = function(T) {
          return { $$typeof: x, render: T };
        }, xe.isValidElement = yt, xe.lazy = function(T) {
          return { $$typeof: N, _payload: { _status: -1, _result: T }, _init: ce };
        }, xe.memo = function(T, A) {
          return { $$typeof: h, type: T, compare: A === void 0 ? null : A };
        }, xe.startTransition = function(T) {
          var A = ie.T, G = {};
          ie.T = G;
          try {
            var Z = T(), J = ie.S;
            J !== null && J(G, Z), typeof Z == "object" && Z !== null && typeof Z.then == "function" && Z.then(Se, te);
          } catch (ye) {
            te(ye);
          } finally {
            A !== null && G.types !== null && (A.types = G.types), ie.T = A;
          }
        }, xe.unstable_useCacheRefresh = function() {
          return ie.H.useCacheRefresh();
        }, xe.use = function(T) {
          return ie.H.use(T);
        }, xe.useActionState = function(T, A, G) {
          return ie.H.useActionState(T, A, G);
        }, xe.useCallback = function(T, A) {
          return ie.H.useCallback(T, A);
        }, xe.useContext = function(T) {
          return ie.H.useContext(T);
        }, xe.useDebugValue = function() {
        }, xe.useDeferredValue = function(T, A) {
          return ie.H.useDeferredValue(T, A);
        }, xe.useEffect = function(T, A) {
          return ie.H.useEffect(T, A);
        }, xe.useEffectEvent = function(T) {
          return ie.H.useEffectEvent(T);
        }, xe.useId = function() {
          return ie.H.useId();
        }, xe.useImperativeHandle = function(T, A, G) {
          return ie.H.useImperativeHandle(T, A, G);
        }, xe.useInsertionEffect = function(T, A) {
          return ie.H.useInsertionEffect(T, A);
        }, xe.useLayoutEffect = function(T, A) {
          return ie.H.useLayoutEffect(T, A);
        }, xe.useMemo = function(T, A) {
          return ie.H.useMemo(T, A);
        }, xe.useOptimistic = function(T, A) {
          return ie.H.useOptimistic(T, A);
        }, xe.useReducer = function(T, A, G) {
          return ie.H.useReducer(T, A, G);
        }, xe.useRef = function(T) {
          return ie.H.useRef(T);
        }, xe.useState = function(T) {
          return ie.H.useState(T);
        }, xe.useSyncExternalStore = function(T, A, G) {
          return ie.H.useSyncExternalStore(T, A, G);
        }, xe.useTransition = function() {
          return ie.H.useTransition();
        }, xe.version = "19.2.0", xe;
      }
      var Xm;
      function sc() {
        return Xm || (Xm = 1, Df.exports = M0()), Df.exports;
      }
      var tt = sc();
      var zs = Np(tt);
      var U0 = (u) => u.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
      var D0 = (u) => u.replace(/^([A-Z])|[\s-_]+(\w)/g, (s, r, o) => o ? o.toUpperCase() : r.toLowerCase());
      var Gm = (u) => {
        const s = D0(u);
        return s.charAt(0).toUpperCase() + s.slice(1);
      };
      var jp = (...u) => u.filter((s, r, o) => !!s && s.trim() !== "" && o.indexOf(s) === r).join(" ").trim();
      var B0 = (u) => {
        for (const s in u)
          if (s.startsWith("aria-") || s === "role" || s === "title")
            return true;
      };
      var q0 = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
      var H0 = tt.forwardRef((h, p) => {
        var N = h, { color: u = "currentColor", size: s = 24, strokeWidth: r = 2, absoluteStrokeWidth: o, className: y = "", children: b, iconNode: m } = N, x = Cf(N, ["color", "size", "strokeWidth", "absoluteStrokeWidth", "className", "children", "iconNode"]);
        return tt.createElement("svg", Ge(Ge(At(Ge({ ref: p }, q0), { width: s, height: s, stroke: u, strokeWidth: o ? Number(r) * 24 / Number(s) : r, className: jp("lucide", y) }), !b && !B0(x) && { "aria-hidden": "true" }), x), [...m.map(([E, Y]) => tt.createElement(E, Y)), ...Array.isArray(b) ? b : [b]]);
      });
      var _i = (u, s) => {
        const r = tt.forwardRef((m, b) => {
          var x = m, { className: o } = x, y = Cf(x, ["className"]);
          return tt.createElement(H0, Ge({ ref: b, iconNode: s, className: jp(`lucide-${U0(Gm(u))}`, `lucide-${u}`, o) }, y));
        });
        return r.displayName = Gm(u), r;
      };
      var L0 = [["path", { d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526", key: "1yiouv" }], ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]];
      var Y0 = _i("award", L0);
      var Q0 = [["path", { d: "M8 2v4", key: "1cmpym" }], ["path", { d: "M16 2v4", key: "4m81vk" }], ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }], ["path", { d: "M3 10h18", key: "8toen8" }]];
      var X0 = _i("calendar", Q0);
      var G0 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
      var k0 = _i("chevron-down", G0);
      var V0 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
      var Z0 = _i("chevron-up", V0);
      var K0 = [["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }], ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]];
      var Ms = _i("lock", K0);
      var J0 = [["path", { d: "M16 7h6v6", key: "box55l" }], ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]];
      var F0 = _i("trending-up", J0);
      var pa = ({ rating: u, onChange: s, disabled: r }) => d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2", children: [d.jsx("input", { type: "number", min: 0, max: 10, step: 0.5, value: u != null ? u : "", onChange: (o) => {
        let y = parseFloat(o.target.value);
        if (isNaN(y)) {
          s(0);
          return;
        }
        y < 0 && (y = 0), y > 10 && (y = 10), s(y);
      }, disabled: r, className: `ef-w-16 ef-px-2 ef-py-1 ef-border ef-rounded ef-text-center ef-font-semibold ef-text-sm ${r ? "ef-bg-gray-100 ef-text-gray-500 ef-cursor-not-allowed" : "ef-bg-white"}`, placeholder: "0-10" }), d.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/ 10" })] });
      var W0 = ({ kra: u, goal: s, appraisalMode: r, updateGoalRating: o, employeeCanEdit: y, managerCanEdit: b, showManagerData: m, secondManagerCanEdit: x }) => {
        const p = () => d.jsxs("div", { className: "ef-absolute ef-top-2 ef-right-2 ef-flex ef-items-center ef-gap-1 ef-bg-gray-200 ef-text-gray-600 ef-text-xs ef-px-2 ef-py-1 ef-rounded-lg ef-shadow-sm", children: [d.jsx(Ms, { size: 12 }), "Locked"] }), h = tt.useMemo(() => {
          const N = s.tasks;
          if (!N || N.length === 0)
            return null;
          const E = N.map((B) => typeof B.completed_percentage == "number" ? Math.max(0, Math.min(100, B.completed_percentage)) : 0), Y = E.reduce((B, W) => B + W, 0) / E.length, O = Math.round(Y / 10 * 10) / 10;
          return { avgPercent: Y, rating: O };
        }, [s]);
        if (tt.useEffect(() => {
          if (r === "self") {
            const N = s.tasks;
            if (N && N.length > 0 && h) {
              const E = s.selfRating, Y = h.rating;
              E !== Y && o(u.id, s.id, "selfRating", Y);
            }
          }
        }, [h, r, s]), r === "self") {
          const N = s.tasks;
          return d.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-shadow-sm", children: [d.jsx("div", { className: "ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b", children: d.jsx("h3", { className: "ef-text-sm ef-font-semibold ef-text-gray-900", children: s.description }) }), d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [d.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Self Appraisal" }), !y && d.jsx(p, {})] }), (!N || N.length === 0) && d.jsxs(d.Fragment, { children: [d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), d.jsx(pa, { rating: s.selfRating, onChange: (E) => y && o(u.id, s.id, "selfRating", E), disabled: !y }), d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), d.jsx("textarea", { value: s.selfComments, onChange: (E) => y && o(u.id, s.id, "selfComments", E.target.value), disabled: !y, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${y ? "ef-bg-white ef-border-blue-200 focus:ef-ring-1 focus:ef-ring-blue-400" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Share your thoughts..." })] }), N && N.length > 0 && h && d.jsxs(d.Fragment, { children: [d.jsxs("div", { className: "ef-mb-3", children: [d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-2", children: "Tasks" }), d.jsx("div", { className: "ef-space-y-2", children: N.map((E) => {
            console.log(N);
            const Y = typeof E.completed_percentage == "number" ? Math.max(0, Math.min(100, E.completed_percentage)) : E.completed_percentage ? 100 : 0;
            return d.jsxs("div", { className: "ef-bg-white ef-border ef-border-gray-100 ef-p-2 ef-rounded ef-text-xs", children: [d.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-1", children: [d.jsx("div", { className: "ef-font-medium ef-text-sm", children: E.subject }), d.jsxs("div", { className: "ef-text-xs ef-text-gray-600", children: [Math.round(Y), "%"] })] }), d.jsx("div", { className: "ef-w-full ef-bg-gray-100 ef-rounded ef-overflow-hidden ef-h-2", children: d.jsx("div", { style: { width: `${Y}%` }, className: "ef-h-full ef-bg-gradient-to-r ef-from-blue-400 ef-to-blue-600" }) })] }, E.id || E.subject);
          }) })] }), d.jsxs("div", { children: [d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Computed Self Rating" }), d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-blue-100 ef-border ef-border-blue-200 ef-px-2 ef-py-1 ef-rounded", children: [d.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-blue-700", children: h.rating }), d.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" }), d.jsxs("span", { className: "ef-text-xs ef-text-gray-500 ef-ml-2", children: ["(based on ", Math.round(h.avgPercent), "% average completion)"] })] }), d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), d.jsx("textarea", { value: s.selfComments, onChange: (E) => y && o(u.id, s.id, "selfComments", E.target.value), disabled: !y, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${y ? "ef-bg-white ef-border-blue-200 focus:ef-ring-1 focus:ef-ring-blue-400" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Share your thoughts..." })] })] })] })] });
        }
        return r === "manager" ? d.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-shadow-sm", children: [d.jsx("div", { className: "ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b", children: d.jsx("h3", { className: "ef-text-sm ef-font-semibold ef-text-gray-900", children: s.description }) }), d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Employee Self Rating" }), d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4 ef-mb-2", children: [d.jsxs("div", { children: [d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-blue-100 ef-border ef-border-blue-200 ef-px-2 ef-py-1 ef-rounded", children: [d.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-blue-700", children: s.selfRating }), d.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), d.jsxs("div", { className: "ef-flex-1", children: [d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), d.jsx("div", { className: "ef-bg-white ef-border ef-border-blue-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: s.selfComments || d.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), m && d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-purple-50", children: [d.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Manager Review" }), !b && d.jsx(p, {})] }), d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), d.jsx(pa, { rating: s.managerRating, onChange: (N) => b && o(u.id, s.id, "managerRating", N), disabled: !b }), d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), d.jsx("textarea", { value: s.managerComments, onChange: (N) => b && o(u.id, s.id, "managerComments", N.target.value), disabled: !b, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${b ? "ef-bg-white ef-border-purple-200 focus:ef-ring-1 focus:ef-ring-purple-400" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Add your review..." })] })] }) : r === "second_manager" ? d.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-shadow-sm", children: [d.jsx("div", { className: "ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b", children: d.jsx("h3", { className: "ef-text-sm ef-font-semibold ef-text-gray-900", children: s.description }) }), d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Employee Self Rating" }), d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4", children: [d.jsxs("div", { children: [d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-blue-100 ef-border ef-border-blue-200 ef-px-2 ef-py-1 ef-rounded", children: [d.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-blue-700", children: s.selfRating }), d.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), d.jsxs("div", { className: "ef-flex-1", children: [d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), d.jsx("div", { className: "ef-bg-white ef-border ef-border-blue-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: s.selfComments || d.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), m && d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-purple-50", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Manager Review" }), d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4", children: [d.jsxs("div", { children: [d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-purple-100 ef-border ef-border-purple-200 ef-px-2 ef-py-1 ef-rounded", children: [d.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-purple-700", children: s.managerRating }), d.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), d.jsxs("div", { className: "ef-flex-1", children: [d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), d.jsx("div", { className: "ef-bg-white ef-border ef-border-purple-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: s.managerComments || d.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), m && d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-green-50", children: [d.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Second Manager Review" }), !x && d.jsx(p, {})] }), d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), d.jsx(pa, { rating: s.secondManagerRating, onChange: (N) => x && o(u.id, s.id, "secondManagerRating", N), disabled: !x }), d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), d.jsx("textarea", { value: s.secondManagerComment, onChange: (N) => x && o(u.id, s.id, "secondManagerComment", N.target.value), disabled: !x, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${x ? "ef-bg-white ef-border-green-200 focus:ef-ring-1 focus:ef-ring-green-400" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Add your review..." })] })] }) : null;
      };
      var $0 = ({ kra: u, appraisalMode: s, updateKRARating: r, employeeCanEdit: o, managerCanEdit: y, showManagerData: b, secondManagerCanEdit: m }) => {
        const x = () => d.jsxs("div", { className: "ef-absolute ef-top-2 ef-right-2 ef-flex ef-items-center ef-gap-1 ef-bg-gray-200 ef-text-gray-600 ef-text-xs ef-px-2 ef-py-1 ef-rounded-lg ef-shadow-sm", children: [d.jsx(Ms, { size: 12 }), "Locked"] });
        return s === "self" ? d.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-overflow-hidden ef-shadow-sm", children: [d.jsx("div", { className: "ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b ef-border-gray-200", children: d.jsx("h3", { className: "ef-text-sm ef-font-semibold ef-text-gray-900", children: u.title }) }), d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [d.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Self Appraisal" }), !o && d.jsx(x, {})] }), d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), d.jsx(pa, { rating: u.selfRating, onChange: (p) => o && r(u.id, "selfRating", p), disabled: !o }), d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), d.jsx("textarea", { value: u.selfComments, onChange: (p) => o && r(u.id, "selfComments", p.target.value), disabled: !o, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${o ? "ef-bg-white ef-border-blue-200 focus:ef-ring-1 focus:ef-ring-blue-400" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Add your comments..." })] })] }) : s === "manager" ? d.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-overflow-hidden ef-shadow-sm", children: [d.jsx("div", { className: "ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b ef-border-gray-200", children: d.jsx("h3", { className: "ef-text-sm ef-font-semibold ef-text-gray-900", children: u.title }) }), d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Employee Self Rating" }), d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4 ef-mb-2", children: [d.jsxs("div", { children: [d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-blue-100 ef-border ef-border-blue-200 ef-px-2 ef-py-1 ef-rounded", children: [d.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-blue-700", children: u.selfRating }), d.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), d.jsxs("div", { className: "ef-flex-1", children: [d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), d.jsx("div", { className: "ef-bg-white ef-border ef-border-blue-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: u.selfComments || d.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), b && d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-purple-50", children: [d.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Manager Review" }), !y && d.jsx(x, {})] }), d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), d.jsx(pa, { rating: u.managerRating, onChange: (p) => y && r(u.id, "managerRating", p), disabled: !y }), d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), d.jsx("textarea", { value: u.managerComments, onChange: (p) => y && r(u.id, "managerComments", p.target.value), disabled: !y, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${y ? "ef-bg-white ef-border-purple-200 focus:ef-ring-1 focus:ef-ring-purple-400" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Add your review..." })] })] }) : s === "second_manager" ? d.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-overflow-hidden ef-shadow-sm", children: [d.jsx("div", { className: "ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b ef-border-gray-200", children: d.jsx("h3", { className: "ef-text-sm ef-font-semibold ef-text-gray-900", children: u.title }) }), d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Employee Self Rating" }), d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4", children: [d.jsxs("div", { children: [d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-blue-100 ef-border ef-border-blue-200 ef-px-2 ef-py-1 ef-rounded", children: [d.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-blue-700", children: u.selfRating }), d.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), d.jsxs("div", { className: "ef-flex-1", children: [d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), d.jsx("div", { className: "ef-bg-white ef-border ef-border-blue-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: u.selfComments || d.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), b && d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-purple-50", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Manager Review" }), d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4", children: [d.jsxs("div", { children: [d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-purple-100 ef-border ef-border-purple-200 ef-px-2 ef-py-1 ef-rounded", children: [d.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-purple-700", children: u.managerRating }), d.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), d.jsxs("div", { className: "ef-flex-1", children: [d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), d.jsx("div", { className: "ef-bg-white ef-border ef-border-purple-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: u.managerComments || d.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), b && d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-green-50", children: [d.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Second Manager Review" }), !m && d.jsx(x, {})] }), d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), d.jsx(pa, { rating: u.secondManagerRating, onChange: (p) => m && r(u.id, "secondManagerRating", p), disabled: !m }), d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), d.jsx("textarea", { value: u.secondManagerComment, onChange: (p) => m && r(u.id, "secondManagerComment", p.target.value), disabled: !m, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${m ? "ef-bg-white ef-border-green-200 focus:ef-ring-1 focus:ef-ring-green-400" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Add your review..." })] })] }) : null;
      };
      var P0 = ({ kra: u, expanded: s, onToggle: r, appraisalMode: o, updateGoalRating: y, updateKRARating: b, employeeCanEdit: m, managerCanEdit: x, showManagerData: p, secondManagerCanEdit: h }) => d.jsxs("div", { className: "ef-border ef-rounded-lg", children: [d.jsxs("div", { onClick: r, className: "ef-flex ef-justify-between ef-items-center ef-p-4 ef-bg-gray-50 ef-cursor-pointer ef-hover:bg-gray-100", children: [d.jsxs("div", { className: "ef-flex-1", children: [d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-3", children: [d.jsx("h3", { className: "ef-text-lg ef-font-semibold ef-text-gray-900", children: u.title }), d.jsxs("span", { className: "ef-px-3 ef-py-1 ef-bg-blue-100 ef-text-blue-700 ef-text-sm ef-rounded-full", children: [u.weightage, "% weightage"] })] }), d.jsx("p", { className: "ef-text-gray-600 ef-text-sm ef-mt-1", children: u.description })] }), s ? d.jsx(Z0, {}) : d.jsx(k0, {})] }), s && d.jsx("div", { className: "ef-p-4", children: u.goals.length > 0 ? u.goals.map((N) => d.jsxs("div", { className: "ef-mb-6 ef-last:mb-0 ef-pb-6 ef-last:pb-0 ef-border-b ef-last:border-b-0", children: [d.jsxs("div", { className: "ef-mb-3", children: [d.jsxs("p", { className: "ef-font-medium ef-text-gray-900", children: [N.description, d.jsxs("span", { className: "ef-inline-flex ef-items-center ef-px-3 ef-py-1 ef-bg-gradient-to-r ef-from-purple-500 ef-to-pink-500 ef-text-white ef-text-xs ef-font-semibold ef-rounded-full ef-shadow-sm ef-mx-3", children: [N.weightage, "% weightage"] })] }), d.jsx("div", { className: "ef-w-full ef-bg-gray-200 ef-rounded-full ef-h-3 ef-overflow-hidden ef-mt-2", children: d.jsx("div", { className: "ef-h-full ef-bg-gradient-to-r ef-from-green-400 ef-to-green-600 ef-transition-all ef-duration-500", style: { width: `${Math.min(N.progress, 100)}%` } }) }), d.jsxs("p", { className: "ef-text-sm ef-text-gray-600 ef-mt-1", children: ["Progress: ", Math.min(N.progress, 100), "%"] })] }), d.jsx(W0, { kra: u, goal: N, appraisalMode: o, updateGoalRating: y, secondManagerCanEdit: h, employeeCanEdit: m, managerCanEdit: x, showManagerData: p })] }, N.id)) : d.jsx($0, { kra: u, appraisalMode: o, updateKRARating: b, employeeCanEdit: m, secondManagerCanEdit: h, managerCanEdit: x, showManagerData: p }) })] });
      var I0 = ({ kraList: u, expandedKRA: s, toggleKRA: r, appraisalMode: o, updateGoalRating: y, updateKRARating: b, employeeCanEdit: m, managerCanEdit: x, showManagerData: p, secondManagerCanEdit: h }) => d.jsx("div", { className: "ef-space-y-4", children: u.map((N) => d.jsx(P0, { kra: N, expanded: s[N.id], onToggle: () => r(N.id), appraisalMode: o, updateGoalRating: y, updateKRARating: b, employeeCanEdit: m, managerCanEdit: x, showManagerData: p, secondManagerCanEdit: h }, N.id)) });
      var ey = ({ comp: u, appraisalMode: s, updateCompetency: r, employeeCanEdit: o, managerCanEdit: y, showManagerData: b, secondManagerCanEdit: m }) => {
        const x = () => d.jsxs("div", { className: "ef-absolute ef-top-2 ef-right-2 ef-flex ef-items-center ef-gap-1 ef-bg-gray-200 ef-text-gray-600 ef-text-xs ef-px-2 ef-py-1 ef-rounded-lg ef-shadow-sm", children: [d.jsx(Ms, { size: 12 }), "Locked"] });
        return d.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-overflow-hidden ef-shadow-sm", children: [d.jsxs("div", { className: "ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b ef-border-gray-200 ef-flex ef-items-center ef-justify-between", children: [d.jsx("h3", { className: "ef-text-sm ef-font-semibold ef-text-gray-900", children: u.name }), d.jsxs("span", { className: "ef-px-2 ef-py-1 ef-bg-purple-600 ef-text-white ef-text-xs ef-rounded-full ef-font-medium", children: [u.weightage, "%"] })] }), d.jsxs("div", { className: "ef-divide-y ef-divide-gray-100", children: [s === "self" && d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [d.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Self Appraisal" }), !o && d.jsx(x, {})] }), d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), d.jsx(pa, { rating: u.selfRating, onChange: (p) => o && r(u.id, "selfRating", p), disabled: !o }), d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), d.jsx("textarea", { value: u.selfComments, onChange: (p) => o && r(u.id, "selfComments", p.target.value), disabled: !o, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${o ? "ef-bg-white ef-border-blue-200 focus:ef-ring-1 focus:ef-ring-blue-400 focus:ef-outline-none" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Share your thoughts..." })] }), s === "manager" && d.jsxs(d.Fragment, { children: [d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Employee Self Rating" }), d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4 ef-mb-2", children: [d.jsxs("div", { children: [d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-blue-100 ef-border ef-border-blue-200 ef-px-2 ef-py-1 ef-rounded", children: [d.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-blue-700", children: u.selfRating }), d.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), d.jsxs("div", { className: "ef-flex-1", children: [d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), d.jsx("div", { className: "ef-bg-white ef-border ef-border-blue-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: u.selfComments || d.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), b && d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-purple-50", children: [d.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Manager Review" }), !y && d.jsx(x, {})] }), d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), d.jsx(pa, { rating: u.managerRating, onChange: (p) => y && r(u.id, "managerRating", p), disabled: !y }), d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), d.jsx("textarea", { value: u.managerComments, onChange: (p) => y && r(u.id, "managerComments", p.target.value), disabled: !y, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${y ? "ef-bg-white ef-border-purple-200 focus:ef-ring-1 focus:ef-ring-purple-400 focus:ef-outline-none" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Add your review..." })] })] }), s === "second_manager" && d.jsxs(d.Fragment, { children: [d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Employee Self Rating" }), d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4", children: [d.jsxs("div", { children: [d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-blue-100 ef-border ef-border-blue-200 ef-px-2 ef-py-1 ef-rounded", children: [d.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-blue-700", children: u.selfRating }), d.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), d.jsxs("div", { className: "ef-flex-1", children: [d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), d.jsx("div", { className: "ef-bg-white ef-border ef-border-blue-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: u.selfComments || d.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), b && d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-purple-50", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Manager Review" }), d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4", children: [d.jsxs("div", { children: [d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-purple-100 ef-border ef-border-purple-200 ef-px-2 ef-py-1 ef-rounded", children: [d.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-purple-700", children: u.managerRating }), d.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), d.jsxs("div", { className: "ef-flex-1", children: [d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), d.jsx("div", { className: "ef-bg-white ef-border ef-border-purple-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: u.managerComments || d.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), b && d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-green-50", children: [d.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Second Manager Review" }), !m && d.jsx(x, {})] }), d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), d.jsx(pa, { rating: u.secondManagerRating, onChange: (p) => m && r(u.id, "secondManagerRating", p), disabled: !m }), d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), d.jsx("textarea", { value: u.secondManagerComment, onChange: (p) => m && r(u.id, "secondManagerComment", p.target.value), disabled: !m, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${m ? "ef-bg-white ef-border-green-200 focus:ef-ring-1 focus:ef-ring-green-400 focus:ef-outline-none" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Add your review..." })] })] })] })] });
      };
      var ty = ({ competencies: u, appraisalMode: s, selfAppraisalSubmitted: r, updateCompetency: o, employeeCanEdit: y, managerCanEdit: b, showManagerData: m, secondManagerCanEdit: x }) => d.jsx("div", { className: "ef-space-y-6", children: u.map((p) => d.jsx(ey, { comp: p, appraisalMode: s, selfAppraisalSubmitted: r, updateCompetency: o, employeeCanEdit: y, managerCanEdit: b, showManagerData: m, secondManagerCanEdit: x }, p.id)) });
      var ny = ({ question: u, appraisalMode: s, updateQuestion: r, index: o, employeeCanEdit: y, managerCanEdit: b, showManagerData: m, secondManagerCanEdit: x }) => {
        const p = () => d.jsx("div", { className: "ef-flex ef-items-center ef-gap-1 ef-text-gray-400 ef-text-xs", children: d.jsx(Ms, { size: 10 }) });
        return d.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-overflow-hidden ef-shadow-sm", children: [d.jsxs("div", { className: "ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b ef-border-gray-200 ef-flex ef-items-center gap-2", children: [d.jsx("span", { className: "ef-flex-shrink-0 ef-w-6 ef-h-6 ef-bg-gray-800 ef-rounded ef-text-white ef-text-xs ef-font-semibold ef-flex ef-items-center ef-justify-center", children: o + 1 }), d.jsx("p", { className: "ef-mx-2 ef-text-sm ef-font-medium ef-text-gray-900", children: u.question })] }), d.jsxs("div", { className: "ef-divide-y ef-divide-gray-100", children: [s === "self" && d.jsxs("div", { className: "ef-px-3 ef-py-2", children: [d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-1", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Your Answer" }), !y && d.jsx(p, {})] }), d.jsx("textarea", { value: u.selfAnswer, onChange: (h) => y && r(u.id, "selfAnswer", h.target.value), disabled: !y, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${y ? "ef-bg-white ef-border-blue-200 ef-focus:ring-1 ef-focus:ring-blue-400 ef-focus:outline-none" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 3, placeholder: "Enter your answer..." })] }), s === "manager" && d.jsxs(d.Fragment, { children: [d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-1", children: "Employee's Answer" }), d.jsx("div", { className: "ef-bg-white ef-p-2 ef-rounded ef-text-xs ef-min-h-[60px] ef-border ef-border-blue-100", children: u.selfAnswer || d.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No answer provided" }) })] }), m && d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-purple-50", children: [d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-1", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Manager's Comments" }), !b && d.jsx(p, {})] }), d.jsx("textarea", { value: u.managerComments, onChange: (h) => b && r(u.id, "managerComments", h.target.value), disabled: !b, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${b ? "ef-bg-white ef-border-purple-200 ef-focus:ring-1 focus:ring-purple-400 ef-focus:outline-none" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 3, placeholder: "Enter your feedback..." })] })] }), s === "second_manager" && d.jsxs(d.Fragment, { children: [d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-1", children: "Employee's Answer" }), d.jsx("div", { className: "ef-bg-white ef-p-2 ef-rounded ef-text-xs ef-min-h-[60px] ef-border ef-border-blue-100", children: u.selfAnswer || d.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No answer provided" }) })] }), m && d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-purple-50", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-1", children: "Manager's Comments" }), d.jsx("div", { className: "ef-bg-white ef-p-2 ef-rounded ef-text-xs ef-min-h-[60px] ef-border ef-border-purple-100", children: u.managerComments || d.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments provided" }) })] }), m && d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-green-50", children: [d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-1", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Second Manager's Comments" }), !x && d.jsx(p, {})] }), d.jsx("textarea", { value: u.secondManagerComment, onChange: (h) => x && r(u.id, "secondManagerComment", h.target.value), disabled: !x, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${x ? "ef-bg-white ef-border-green-200 ef-focus:ring-1 ef-focus:ring-green-400 ef-focus:outline-none" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 3, placeholder: "Enter your feedback..." })] })] })] })] });
      };
      var ay = ({ questions: u, appraisalMode: s, selfAppraisalSubmitted: r, updateQuestion: o, employeeCanEdit: y, managerCanEdit: b, showManagerData: m, secondManagerCanEdit: x }) => d.jsx("div", { className: "ef-space-y-6", children: u.map((p, h) => d.jsx(ny, { question: p, index: h, appraisalMode: s, selfAppraisalSubmitted: r, updateQuestion: o, employeeCanEdit: y, managerCanEdit: b, showManagerData: m, secondManagerCanEdit: x }, p.id)) });
      function ly(u, s, r, o = false) {
        const y = u.kra.reduce(($, ue) => $ + Number(ue.weightage || 0), 0) || 1, b = u.competencies.reduce(($, ue) => $ + Number(ue.weightage || 0), 0) || 1, m = ($, ue, ae) => o ? ($ + ue + ae) / 3 : ($ + ue) / 2, x = u.kra.map(($) => {
          var he;
          const ue = ($.weightage || 0) / y;
          let ae = 0;
          if (((he = $.goals) == null ? void 0 : he.length) > 0) {
            const ge = $.goals.reduce((Se, ie) => Se + Number(ie.weightage || 0), 0) || 1;
            ae = $.goals.reduce((Se, ie) => {
              const ze = Number(ie.selfRating || 0), ke = (ie.weightage || 0) / ge;
              return Se + ke * ze;
            }, 0);
          } else
            ae = Number($.selfRating || 0);
          return ue * ae;
        }).reduce(($, ue) => $ + ue, 0), p = u.competencies.reduce(($, ue) => {
          const ae = (ue.weightage || 0) / b;
          return $ + ae * Number(ue.selfRating || 0);
        }, 0), h = x * (s / 100) + p * (r / 100), N = u.kra.map(($) => {
          var he;
          const ue = ($.weightage || 0) / y;
          let ae = 0;
          if (((he = $.goals) == null ? void 0 : he.length) > 0) {
            const ge = $.goals.reduce((Se, ie) => Se + Number(ie.weightage || 0), 0) || 1;
            ae = $.goals.reduce((Se, ie) => {
              const ze = Number(ie.managerRating || 0), ke = (ie.weightage || 0) / ge;
              return Se + ke * ze;
            }, 0);
          } else
            ae = Number($.managerRating || 0);
          return ue * ae;
        }).reduce(($, ue) => $ + ue, 0), E = u.competencies.reduce(($, ue) => {
          const ae = (ue.weightage || 0) / b;
          return $ + ae * Number(ue.managerRating || 0);
        }, 0), Y = N * (s / 100) + E * (r / 100);
        let O = 0;
        if (o) {
          const $ = u.kra.map((ae) => {
            var Se;
            const he = (ae.weightage || 0) / y;
            let ge = 0;
            if (((Se = ae.goals) == null ? void 0 : Se.length) > 0) {
              const ie = ae.goals.reduce((ze, ke) => ze + Number(ke.weightage || 0), 0) || 1;
              ge = ae.goals.reduce((ze, ke) => {
                const Ut = Number(ke.secondManagerRating || 0), yt = (ke.weightage || 0) / ie;
                return ze + yt * Ut;
              }, 0);
            } else
              ge = Number(ae.secondManagerRating || 0);
            return he * ge;
          }).reduce((ae, he) => ae + he, 0), ue = u.competencies.reduce((ae, he) => {
            const ge = (he.weightage || 0) / b;
            return ae + ge * Number(he.secondManagerRating || 0);
          }, 0);
          O = $ * (s / 100) + ue * (r / 100);
        }
        const B = u.kra.map(($) => {
          var he;
          const ue = ($.weightage || 0) / y;
          let ae = 0;
          if (((he = $.goals) == null ? void 0 : he.length) > 0) {
            const ge = $.goals.reduce((Se, ie) => Se + Number(ie.weightage || 0), 0) || 1;
            ae = $.goals.reduce((Se, ie) => {
              const ze = m(Number(ie.selfRating || 0), Number(ie.managerRating || 0), Number(ie.secondManagerRating || 0)), ke = (ie.weightage || 0) / ge;
              return Se + ke * ze;
            }, 0);
          } else
            ae = m(Number($.selfRating || 0), Number($.managerRating || 0), Number($.secondManagerRating || 0));
          return ue * ae;
        }).reduce(($, ue) => $ + ue, 0), W = u.competencies.reduce(($, ue) => {
          const ae = (ue.weightage || 0) / b, he = m(Number(ue.selfRating || 0), Number(ue.managerRating || 0), Number(ue.secondManagerRating || 0));
          return $ + ae * he;
        }, 0), fe = B * (s / 100) + W * (r / 100);
        return console.log({ manager1Score: Number(Y.toFixed(2)), manager2Score: o ? Number(O.toFixed(2)) : null }), { kraBlockScore: Number(B.toFixed(2)), competencyScore: Number(W.toFixed(2)), finalScore: Number(fe.toFixed(2)), employeeSelfScore: Number(h.toFixed(2)), manager1Score: Number(Y.toFixed(2)), manager2Score: o ? Number(O.toFixed(2)) : null };
      }
      var iy = ({ question: u, appraisalMode: s, updateQuestion: r, index: o, employeeCanEdit: y }) => {
        const b = () => d.jsx("div", { className: "ef-flex ef-items-center ef-gap-1 ef-text-gray-400 ef-text-xs", children: d.jsx(Ms, { size: 10 }) });
        return d.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-overflow-hidden ef-shadow-sm", children: [d.jsxs("div", { className: "ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b ef-border-gray-200 ef-flex ef-items-center gap-2", children: [d.jsx("span", { className: "ef-flex-shrink-0 ef-w-6 ef-h-6 ef-bg-gray-800 ef-rounded ef-text-white ef-text-xs ef-font-semibold ef-flex ef-items-center ef-justify-center", children: o + 1 }), d.jsx("p", { className: "ef-mx-2 ef-text-sm ef-font-medium ef-text-gray-900", children: u.question })] }), d.jsx("div", { className: "ef-divide-y ef-divide-gray-100", children: s === "self" && d.jsxs("div", { className: "ef-px-3 ef-py-2", children: [d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-1", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Your Answer" }), !y && d.jsx(b, {})] }), d.jsx("textarea", { value: u.selfAnswer, onChange: (m) => y && r(u.id, "selfAnswer", m.target.value), disabled: !y, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${y ? "ef-bg-white ef-border-blue-200 ef-focus:ring-1 ef-focus:ring-blue-400 ef-focus:outline-none" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 3, placeholder: "Enter your answer..." })] }) }), (s === "manager" || s === "second_manager") && d.jsx(d.Fragment, { children: d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-1", children: "Employee's Answer" }), d.jsx("div", { className: "ef-bg-white ef-p-2 ef-rounded ef-text-xs ef-min-h-[60px] ef-border ef-border-blue-100", children: u.selfAnswer || d.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No answer provided" }) })] }) })] });
      };
      var sy = ({ questions: u, appraisalMode: s, selfAppraisalSubmitted: r, updateQuestion: o, employeeCanEdit: y, managerCanEdit: b, secondManagerCanEdit: m }) => d.jsx("div", { className: "ef-space-y-6", children: u.map((x, p) => d.jsx(iy, { question: x, index: p, appraisalMode: s, selfAppraisalSubmitted: r, updateQuestion: o, employeeCanEdit: y, managerCanEdit: b, secondManagerCanEdit: m }, x.id)) });
      var Tp = () => {
        const [u, s] = tt.useState("kra"), [r, o] = tt.useState("self"), [y, b] = tt.useState({}), [m, x] = tt.useState({ employee: { name: "John Doe", designation: "Senior Developer", department: "Engineering", period: "Jan 2025 - Dec 2025" }, selfAppraisalSubmitted: true, kra: [{ id: 1, title: "Project Delivery", description: "Deliver assigned projects on time", weightage: 30, goals: [{ id: 1, description: "Complete 3 major projects", progress: 2, selfRating: 8, selfComments: "Completed 3 projects successfully", managerRating: 9, managerComments: "Excellent delivery", secondManagerRating: 3.4, secondManagerComment: "Excellent Work" }, { id: 2, description: "Maintain 95% on-time delivery", progress: 2, selfRating: 7, selfComments: "Achieved 90%", managerRating: 7, managerComments: "Slight delay", secondManagerRating: 3.4, secondManagerComment: "Excellent Work" }] }], competencies: [{ id: 1, name: "Technical Skills", description: "Proficiency in technologies", weightage: 25, selfRating: 8, selfComments: "Strong in React/Node", managerRating: 8, managerComments: "Very competent", secondManagerRating: 3.4, secondManagerComment: "Excellent Work" }], questions: [{ id: 1, question: "What are your key achievements?", selfAnswer: "Led migration project", managerComments: "Excellent ownership", secondManagerComment: "Excellent Work" }], AppraisalQuestions: [] });
        function p(te) {
          var G, Z;
          te.workflow_state == "Self Appraisal" ? o("self") : te.workflow_state == "Manager Appraisal" ? o("manager") : o("second_manager");
          const ne = te.kra || [], T = te.kra_vs_goal || [], A = te.goal_vs_task || [];
          return { employee: { name: te.employee_name, designation: te.designation, department: te.department, period: `${te.from_date} - ${te.to_date}` }, selfAppraisalSubmitted: te.self_appraisal_submitted || true, kra: ne.map((J, ye) => {
            const Oe = T.filter((Be) => Be.kra === J.kra).map((Be, Je) => {
              const Xn = A.filter((Et) => Et.goal === Be.goal).map((Et, ga) => ({ id: ga + 1, task_name: Et.task, completed_percentage: Et.completed_percentage, selfComments: Et.employee_description, managerScore: Et.manager_score, managerComments: Et.manager_description, secondManagerScore: Et.second_manager_score, secondManagerComment: Et.second_manager_description }));
              return { id: Je + 1, description: Be.goal_name, progress: Be.progress, weightage: Be.weightage, selfRating: Be.employee_rating_number, selfComments: Be.employee_description, managerRating: Be.manager_rating_number, managerComments: Be.management_description, secondManagerRating: Be.second_manager_rating, secondManagerComment: Be.second_manager_description, tasks: Xn };
            });
            return { id: ye + 1, title: J.kra, description: J.description || "", weightage: J.weightage, selfRating: J.employee_rating_number, selfComments: J.employee_description, managerRating: J.manager_rating_number, managerComments: J.management_description, secondManagerRating: J.second_manager_rating, secondManagerComment: J.second_manager_description, goals: Oe };
          }) || [], competencies: ((G = te.competency) == null ? void 0 : G.map((J, ye) => ({ id: ye + 1, name: J.competency, description: J.description || "", weightage: J.weightage, selfRating: J.employee_rating_number, selfComments: J.employee_description, managerRating: J.manager_rating, managerComments: J.manager_description, secondManagerRating: J.second_manager_rating, secondManagerComment: J.second_manager_description }))) || [], questions: ((Z = te.answer) == null ? void 0 : Z.map((J, ye) => ({ id: ye + 1, question: J.question, selfAnswer: J.employee_ans_in_discriptive, managerComments: J.manager_comment, secondManagerComment: J.second_manager_description }))) || [], AppraisalQuestions: te.appraisal_feedback_question.map((J, ye) => ({ id: ye + 1, question: J.question, selfAnswer: J.employee_ans, managerComments: J.manager_ans, secondManagerComment: J.second_manager_ans })) || [] };
        }
        const h = () => {
          if (!ee())
            return;
          const te = window.cur_frm;
          if (!(te != null && te.doc))
            return;
          const ne = te.doc, T = ly(m, ne.kra_percentage, ne.competency_percentage, !!ne.reports_to_second_user);
          ne.final_score = T.finalScore, ne.employee_score = T.employeeSelfScore, ne.manager_rating = T.manager1Score, ne.second_manager_rating = T.manager2Score, ne.kra.forEach((A, G) => {
            const Z = m.kra.find((J) => J.id === G + 1);
            Z && (Ve && (A.employee_rating_number = Z.selfRating, A.employee_description = Z.selfComments), Ce && (A.manager_rating_number = Z.managerRating, A.management_description = Z.managerComments), Pe && (A.second_manager_rating = Z.secondManagerRating, A.second_manager_description = Z.secondManagerComment), A.weightage = Z.weightage);
          }), ne.kra_vs_goal.forEach((A) => {
            const G = m.kra.find((J) => J.title === A.kra);
            if (!G)
              return;
            const Z = G.goals.find((J) => J.description === A.goal_name);
            Z && (Ve && (A.employee_rating_number = Z.selfRating, A.employee_description = Z.selfComments), Ce && (A.manager_rating_number = Z.managerRating, A.management_description = Z.managerComments), Pe && (A.second_manager_rating = Z.secondManagerRating, A.second_manager_description = Z.secondManagerComment), A.progress = Z.progress, A.weightage = Z.weightage);
          }), ne.competency.forEach((A, G) => {
            const Z = m.competencies.find((J) => J.id === G + 1);
            Z && (Ve && (A.employee_rating_number = Z.selfRating, A.employee_description = Z.selfComments), Ce && (A.manager_rating = Z.managerRating, A.manager_description = Z.managerComments), Pe && (A.second_manager_rating = Z.secondManagerRating, A.second_manager_description = Z.secondManagerComment), A.weightage = Z.weightage);
          }), ne.answer.forEach((A, G) => {
            const Z = m.questions.find((J) => J.id === G + 1);
            Z && (Ve && (A.employee_ans_in_discriptive = Z.selfAnswer), Ce && (A.manager_comment = Z.managerComments), Pe && (A.second_manager_description = Z.secondManagerComment));
          }), ne.appraisal_feedback_question.forEach((A, G) => {
            const Z = m.AppraisalQuestions.find((J) => J.id === G + 1);
            Z && (Ve && (A.employee_ans = Z.selfAnswer), Ce && (A.manager_ans = Z.managerComments), Pe && (A.second_manager_ans = Z.secondManagerComment));
          }), ne.__unsaved = 1, te.dirty(), te.save().catch((A) => console.error(A));
        }, N = (te) => {
          b((ne) => At(Ge({}, ne), { [te]: !ne[te] }));
        }, E = (te, ne, T, A) => {
          x((G) => At(Ge({}, G), { kra: G.kra.map((Z) => Z.id === te ? At(Ge({}, Z), { goals: Z.goals.map((J) => J.id === ne ? At(Ge({}, J), { [T]: A }) : J) }) : Z) }));
        }, Y = (te, ne, T) => {
          x((A) => At(Ge({}, A), { kra: A.kra.map((G) => G.id === te ? At(Ge({}, G), { [ne]: T }) : G) }));
        }, O = (te, ne, T) => {
          x((A) => At(Ge({}, A), { competencies: A.competencies.map((G) => G.id === te ? At(Ge({}, G), { [ne]: T }) : G) }));
        }, B = (te, ne, T) => {
          x((A) => At(Ge({}, A), { questions: A.questions.map((G) => G.id === te ? At(Ge({}, G), { [ne]: T }) : G) }));
        }, W = (te, ne, T) => {
          x((A) => At(Ge({}, A), { AppraisalQuestions: A.AppraisalQuestions.map((G) => G.id === te ? At(Ge({}, G), { [ne]: T }) : G) }));
        }, fe = window.cur_frm;
        if (!(fe != null && fe.doc))
          return "Loading...";
        tt.useEffect(() => {
          x(p(fe.doc));
        }, [fe == null ? void 0 : fe.doc]);
        const $ = frappe.session.user, ue = fe.doc.employee_user_id, ae = fe.doc.reports_to_user_id, he = fe.doc.reports_to_second_user, ge = fe.doc.workflow_state, Se = $ === ue, ie = $ === ae, ze = $ === he, nt = (frappe.user_roles || []).includes("HR Manager") || $ === "Administrator", Ve = Se && ge === "Self Appraisal" && !nt, Ce = ie && ge === "Manager Appraisal", Pe = ze && ge === "Second Manager Review", Q = ie || ze || nt, ee = () => {
          var T;
          const te = (T = window == null ? void 0 : window.cur_frm) == null ? void 0 : T.doc, ne = [];
          return Ve && (te.kra_rating_mandatory && m.kra.forEach((A) => {
            !A.goals.length && !A.selfRating && ne.push(`Self Rating missing in KRA: ${A.title}`), A.goals.forEach((G) => {
              G.selfRating || ne.push(`Self Rating missing in Goal: ${G.description}`);
            });
          }), te.kra_comment_mandatory && m.kra.forEach((A) => {
            !A.goals.length && !A.selfComments && ne.push(`Self Comment missing in KRA: ${A.title}`), A.goals.forEach((G) => {
              G.selfComments || ne.push(`Self Comment missing in Goal: ${G.description}`);
            });
          }), te.competency_rating_mandatory && m.competencies.forEach((A) => {
            A.selfRating || ne.push(`Self Rating missing in Competency: ${A.name}`);
          }), te.competency_comment_mandatory && m.competencies.forEach((A) => {
            A.selfComments || ne.push(`Self Comment missing in Competency: ${A.name}`);
          }), te.question_answer_mandatory && m.questions.forEach((A) => {
            A.selfAnswer || ne.push(`Answer missing for Question: ${A.question}`);
          })), Ce && (te.manager_kra_rating_mandatory && m.kra.forEach((A) => {
            !A.goals.length && !A.managerRating && ne.push(`Manager Rating missing in KRA: ${A.title}`), A.goals.forEach((G) => {
              G.managerRating || ne.push(`Manager Rating missing in Goal: ${G.description}`);
            });
          }), te.manager_kra_comment_mandatory && m.kra.forEach((A) => {
            !A.goals.length && !A.managerComments && ne.push(`Manager Comment missing in KRA: ${A.title}`), A.goals.forEach((G) => {
              G.managerComments || ne.push(`Manager Comment missing in Goal: ${G.description}`);
            });
          }), te.manager_competency_rating_mandatory && m.competencies.forEach((A) => {
            A.managerRating || ne.push(`Manager Rating missing in Competency: ${A.name}`);
          }), te.manager_competency_comment_mandatory && m.competencies.forEach((A) => {
            A.managerComments || ne.push(`Manager Comment missing in Competency: ${A.name}`);
          }), te.manager_question_report_mandatory && m.questions.forEach((A) => {
            A.managerComments || ne.push(`Manager Comment missing for Question: ${A.question}`);
          })), ne.length > 0 ? (frappe.msgprint({ title: "Mandatory Fields Missing", indicator: "red", message: `<ul>${ne.map((A) => `<li>${A}</li>`).join("")}</ul>` }), false) : true;
        }, ce = Ve || Ce || Pe;
        return d.jsx("div", { className: "ef-min-h-screen ef-bg-gray-50 ef-p-6", children: d.jsx("div", { className: "ef-max-w-7xl ef-mx-auto", children: d.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-shadow-sm", children: [d.jsx("div", { className: "ef-border-b", children: d.jsxs("div", { className: "ef-flex", children: [d.jsx("button", { onClick: () => s("kra"), className: `ef-px-6 ef-py-4 ef-font-semibold ${u === "kra" ? "ef-border-b-2 ef-border-blue-600 ef-text-blue-600" : "ef-text-gray-600"}`, children: "KRA vs Goals" }), d.jsx("button", { onClick: () => s("competency"), className: `ef-px-6 ef-py-4 ef-font-semibold ${u === "competency" ? "ef-border-b-2 ef-border-blue-600 ef-text-blue-600" : "ef-text-gray-600"}`, children: "Competencies" }), d.jsx("button", { onClick: () => s("questions"), className: `ef-px-6 ef-py-4 ef-font-semibold ${u === "questions" ? "ef-border-b-2 ef-border-blue-600 ef-text-blue-600" : "ef-text-gray-600"}`, children: "Questions" }), d.jsx("button", { onClick: () => s("appraisal_questions"), className: `ef-px-6 ef-py-4 ef-font-semibold ${u === "appraisal_questions" ? "ef-border-b-2 ef-border-blue-600 ef-text-blue-600" : "ef-text-gray-600"}`, children: "Appraisal Questions" })] }) }), d.jsxs("div", { className: "ef-p-6", children: [u === "kra" && d.jsx(I0, { kraList: m.kra, expandedKRA: y, toggleKRA: N, appraisalMode: r, updateGoalRating: E, updateKRARating: Y, secondManagerCanEdit: Pe, employeeCanEdit: Ve, managerCanEdit: Ce, showManagerData: Q }), u === "competency" && d.jsx(ty, { competencies: m.competencies, appraisalMode: r, selfAppraisalSubmitted: m.selfAppraisalSubmitted, updateCompetency: O, secondManagerCanEdit: Pe, employeeCanEdit: Ve, managerCanEdit: Ce, showManagerData: Q }), u === "questions" && d.jsx(ay, { questions: m.questions, appraisalMode: r, selfAppraisalSubmitted: m.selfAppraisalSubmitted, updateQuestion: B, secondManagerCanEdit: Pe, employeeCanEdit: Ve, managerCanEdit: Ce, showManagerData: Q }), u === "appraisal_questions" && d.jsx(sy, { questions: m.AppraisalQuestions, appraisalMode: r, selfAppraisalSubmitted: m.selfAppraisalSubmitted, updateQuestion: W, secondManagerCanEdit: Pe, employeeCanEdit: Ve, managerCanEdit: Ce })] }), ce && d.jsx("div", { className: "ef-flex ef-justify-end ef-px-6 ef-pb-6", children: d.jsx("button", { onClick: h, className: "ef-bg-blue-600 ef-text-white ef-px-6 ef-py-2 ef-rounded-lg ef-font-semibold hover:ef-bg-blue-700 ef-transition", children: "Save Appraisal" }) })] }) }) });
      };
      Tp.component = "appraisal-rating";
      var Ep = () => {
        var p;
        const u = (p = window == null ? void 0 : window.cur_frm) == null ? void 0 : p.doc, s = u.reports_to_second_user, r = u.workflow_state, o = s, y = r === "Second Manager Review", b = { code: u.employee, name: u.employee_name, dept: u.department, designation: u.designation, doj: u.date_of_joining, selfRating: u.employee_score, expectation: `${u.as_employee_what_he_deserve}%`, manager1: u.reports_to_name, manager1Rating: u.manager_rating, manager1Comment: u.manager_final_comment, manager1Increment: u.as_manager_increment_percentage, manager1PromotionDesignation: u.manager_updated_designation, manager1PromotionDepartment: u.manager_updated_department, manager1Promotion: u.is_first_manager_promotion == 1 ? "Yes" : "No", manager2: u.reports_to_second_name, manager2Rating: u.second_manager_rating, manager2Comment: u.second_manager_comment, manager2Increment: u.as_second_manager_increment_percentage_copy, manager2PromotionDesignation: u.second_manager_updated_designation, manager2PromotionDepartment: u.second_manager_updated_department, manager2Promotion: u.is_second_manager_promotion == 1 ? "Yes" : "No" }, m = (h) => h >= 4.5 ? "bg-green-500" : h >= 3.5 ? "bg-blue-500" : "bg-orange-500", x = (h) => h >= 4.5 ? "bg-green-50 border-green-200" : h >= 3.5 ? "bg-blue-50 border-blue-200" : "bg-orange-50 border-orange-200";
        return d.jsx("div", { className: "ef-min-h-screen ef-bg-gradient-to-br ef-from-blue-50 ef-via-white ef-to-purple-50 ef-p-6 ef-transition-all ef-duration-300 ef-ease-in-out", children: d.jsx("div", { className: "ef-max-w-5xl ef-mx-auto ef-transform ef-transition-all ef-duration-500 ef-ease-in-out", children: d.jsxs("div", { className: "ef-bg-white ef-rounded-2xl ef-shadow-lg ef-overflow-hidden ef-transition-all ef-duration-500 ef-ease-in-out ef-hover:shadow-2xl ef-transform ef-hover:scale-[1.01]", children: [d.jsx("div", { className: "ef-bg-gradient-to-r ef-from-blue-600 ef-to-purple-600 ef-p-8 ef-text-white ef-transition-all ef-duration-500 ef-ease-in-out", children: d.jsxs("div", { className: "ef-flex ef-items-start ef-justify-between", children: [d.jsxs("div", { className: "ef-transition-all ef-duration-300 ef-ease-in-out", children: [d.jsxs("div", { className: "ef-text-sm ef-opacity-90 ef-mb-1 ef-transition-opacity ef-duration-300 ef-ease-in-out", children: ["Employee Code: ", b.code] }), d.jsx("h2", { className: "ef-text-3xl ef-font-bold ef-mb-2 ef-transition-all ef-duration-300 ef-ease-in-out ef-hover:scale-105 ef-origin-left", children: b.name }), d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4 ef-text-sm", children: [d.jsx("span", { className: "ef-px-3 ef-py-1 ef-bg-white ef-bg-opacity-20 ef-rounded-full ef-transition-all ef-duration-300 ef-ease-in-out ef-hover:bg-opacity-30 ef-hover:scale-105", children: b.designation }), d.jsx("span", { className: "ef-px-3 ef-py-1 ef-bg-white ef-bg-opacity-20 ef-rounded-full ef-transition-all ef-duration-300 ef-ease-in-out ef-hover:bg-opacity-30 ef-hover:scale-105", children: b.dept })] })] }), d.jsxs("div", { className: "ef-text-right ef-transition-all ef-duration-300 ef-ease-in-out", children: [d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-text-sm ef-opacity-90 ef-mb-1 ef-transition-opacity ef-duration-300 ef-ease-in-out", children: [d.jsx(X0, { className: "ef-w-4 ef-h-4 ef-transition-transform ef-duration-300 ef-ease-in-out ef-hover:rotate-12" }), "Date of Joining"] }), d.jsx("div", { className: "ef-text-xl ef-font-semibold ef-transition-all ef-duration-300 ef-ease-in-out ef-hover:scale-110", children: b.doj })] })] }) }), d.jsx("div", { className: "ef-p-8 ef-border-b ef-border-gray-200 ef-bg-gray-50 ef-transition-all ef-duration-300 ef-ease-in-out ef-hover:bg-gray-100", children: d.jsxs("div", { className: "ef-flex ef-items-start ef-justify-between ef-gap-6", children: [d.jsxs("div", { className: "ef-flex-1 ef-transition-all ef-duration-300 ef-ease-in-out", children: [d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-3 ef-transition-all ef-duration-300 ef-ease-in-out", children: [d.jsx(Y0, { className: "ef-w-5 ef-h-5 ef-text-purple-600 ef-transition-all ef-duration-300 ef-ease-in-out ef-hover:scale-125 ef-hover:rotate-12" }), d.jsx("h3", { className: "ef-text-lg ef-font-semibold ef-text-gray-900", children: "Self Appraisal" })] }), d.jsxs("div", { className: "ef-mb-4", children: [d.jsx("div", { className: "ef-text-sm ef-text-gray-600 ef-mb-2", children: "Employee Expectation:" }), d.jsx("div", { className: "ef-text-base ef-text-gray-900 ef-font-medium ef-hover:text-purple-700", children: b.expectation })] })] }), d.jsxs("div", { className: "ef-text-center", children: [d.jsx("div", { className: "ef-text-sm ef-text-gray-600 ef-mb-2", children: "Self Rating" }), d.jsx("div", { className: `ef-w-20 ef-h-20 ef-rounded-full ef-flex ef-items-center ef-justify-center ${m(b.selfRating)} ef-text-white ef-transition-all ef-duration-300 ef-ease-in-out ef-hover:scale-110 ef-hover:shadow-lg ef-transform ef-hover:rotate-6`, children: d.jsx("span", { className: "ef-text-3xl ef-font-bold ef-text-black", children: b.selfRating }) })] })] }) }), d.jsxs("div", { className: "ef-p-8 ef-space-y-4 ef-transition-all ef-duration-300 ef-ease-in-out", children: [d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-4", children: [d.jsx(F0, { className: "ef-w-5 ef-h-5 ef-text-blue-600 ef-hover:scale-125 ef-hover:-translate-y-[2px] ef-transition-all" }), d.jsx("h3", { className: "ef-text-xl ef-font-semibold ef-text-gray-900", children: "Manager Evaluations" })] }), d.jsxs("div", { className: `ef-border-2 ef-rounded-xl ef-p-6 ${x(b.manager1Rating)} ef-transition-all ef-duration-500 ef-ease-in-out ef-hover:shadow-lg ef-transform ef-hover:scale-[1.02] ef-hover:-translate-y-1`, children: [d.jsxs("div", { className: "ef-flex ef-items-start ef-justify-between ef-mb-4", children: [d.jsxs("div", { children: [d.jsx("div", { className: "ef-text-xs ef-text-gray-500 ef-uppercase ef-font-semibold ef-mb-1", children: "Reporting Manager - 1" }), d.jsx("div", { className: "ef-text-xl ef-font-bold ef-text-gray-900 ef-hover:text-blue-700 ef-text-black", children: b.manager1 })] }), d.jsxs("div", { className: "ef-text-center", children: [d.jsx("div", { className: "ef-text-xs ef-text-gray-600 ef-mb-1", children: "Rating" }), d.jsx("div", { className: `ef-w-16 ef-h-16 ef-rounded-full ef-flex ef-items-center ef-justify-center ${m(b.manager1Rating)} ef-text-white ef-transition-all ef-hover:scale-110 ef-hover:shadow-lg ef-transform ef-hover:rotate-6`, children: d.jsx("span", { className: "ef-text-2xl ef-font-bold ef-text-black", children: b.manager1Rating }) })] })] }), d.jsxs("div", { className: "ef-space-y-3", children: [d.jsxs("div", { children: [d.jsx("div", { className: "ef-text-sm ef-font-semibold ef-text-gray-700 ef-mb-2", children: "Overall Comment:" }), d.jsx("div", { className: "ef-text-gray-900 ef-leading-relaxed ef-text-black", children: b.manager1Comment })] }), d.jsxs("div", { className: "ef-grid ef-grid-cols-3 ef-gap-3 ef-pt-4 ef-border-t ef-border-gray-200", children: [d.jsxs("div", { children: [d.jsx("div", { className: "ef-text-sm ef-text-gray-600 ef-mb-1", children: "Promotion" }), d.jsx("div", { className: `ef-inline-flex ef-items-center ef-px-3 ef-py-1.5 ef-rounded-lg ef-font-semibold ef-transition-all ef-hover:scale-105 ${b.manager1Promotion === "Yes" ? "ef-bg-green-100 ef-text-green-800 ef-border-2 ef-border-green-300 ef-hover:bg-green-200" : "ef-bg-gray-100 ef-text-gray-700 ef-border-2 ef-border-gray-300 ef-hover:bg-gray-200"}`, children: b.manager1Promotion })] }), d.jsxs("div", { children: [d.jsx("div", { className: "ef-text-sm ef-text-gray-600 ef-mb-1", children: "Designation" }), d.jsx("div", { className: "ef-text-base ef-font-semibold ef-text-gray-900", children: b.manager1PromotionDesignation || "-" })] }), d.jsxs("div", { children: [d.jsx("div", { className: "ef-text-sm ef-text-gray-600 ef-mb-1", children: "Department" }), d.jsx("div", { className: "ef-text-base ef-font-semibold ef-text-gray-900", children: b.manager1PromotionDepartment || "-" })] })] }), d.jsxs("div", { className: "ef-pt-3 ef-border-t ef-border-gray-200", children: [d.jsx("div", { className: "ef-text-sm ef-text-gray-600 ef-mb-1", children: "Special Increment" }), d.jsx("div", { className: "ef-text-2xl ef-font-bold ef-text-gray-900 ef-hover:scale-110 ef-hover:text-green-600", children: b.manager1Increment })] })] })] }), o && (y || r == "Approved") && d.jsxs("div", { className: `ef-border-2 ef-rounded-xl ef-p-6 ${x(b.manager2Rating)} ef-transition-all ef-duration-500 ef-ease-in-out ef-hover:shadow-lg ef-transform ef-hover:scale-[1.02] ef-hover:-translate-y-1`, children: [d.jsxs("div", { className: "ef-flex ef-items-start ef-justify-between ef-mb-4", children: [d.jsxs("div", { children: [d.jsx("div", { className: "ef-text-xs ef-text-gray-500 ef-uppercase ef-font-semibold ef-mb-1", children: "Reporting Manager - 2" }), d.jsx("div", { className: "ef-text-xl ef-font-bold ef-text-gray-900 ef-hover:text-blue-700 ", children: b.manager2 })] }), d.jsxs("div", { className: "ef-text-center", children: [d.jsx("div", { className: "ef-text-xs ef-text-gray-600 ef-mb-1", children: "Rating" }), d.jsx("div", { className: `ef-w-16 ef-h-16 ef-rounded-full ef-flex ef-items-center ef-justify-center ${m(b.manager2Rating)} ef-text-white ef-transition-all ef-hover:scale-110 ef-hover:shadow-lg ef-transform ef-hover:rotate-6`, children: d.jsx("span", { className: "ef-text-2xl ef-font-bold ef-text-black", children: b.manager2Rating }) })] })] }), d.jsxs("div", { className: "ef-space-y-3", children: [d.jsxs("div", { children: [d.jsx("div", { className: "ef-text-sm ef-font-semibold ef-text-gray-700 ef-mb-2", children: "Overall Comment:" }), d.jsx("div", { className: "ef-text-gray-900 ef-leading-relaxed ef-text-black", children: b.manager2Comment })] }), d.jsxs("div", { className: "ef-grid ef-grid-cols-3 ef-gap-3 ef-pt-4 ef-border-t ef-border-gray-200", children: [d.jsxs("div", { children: [d.jsx("div", { className: "ef-text-sm ef-text-gray-600 ef-mb-1", children: "Promotion" }), d.jsx("div", { className: `ef-inline-flex ef-items-center ef-px-3 ef-py-1.5 ef-rounded-lg ef-font-semibold ef-hover:scale-105 ${b.manager2Promotion === "Yes" ? "ef-bg-green-100 ef-text-green-800 ef-border-2 ef-border-green-300 ef-hover:bg-green-200" : "ef-bg-gray-100 ef-text-gray-700 ef-border-2 ef-border-gray-300 ef-hover:bg-gray-200"}`, children: b.manager2Promotion })] }), d.jsxs("div", { children: [d.jsx("div", { className: "ef-text-sm ef-text-gray-600 ef-mb-1", children: "Designation" }), d.jsx("div", { className: "ef-text-base ef-font-semibold ef-text-gray-900", children: b.manager2PromotionDesignation || "-" })] }), d.jsxs("div", { children: [d.jsx("div", { className: "ef-text-sm ef-text-gray-600 ef-mb-1", children: "Department" }), d.jsx("div", { className: "ef-text-base ef-font-semibold ef-text-gray-900", children: b.manager2PromotionDepartment || "-" })] })] }), d.jsxs("div", { className: "ef-pt-3 ef-border-t ef-border-gray-200", children: [d.jsx("div", { className: "ef-text-sm ef-text-gray-600 ef-mb-1", children: "Special Increment" }), d.jsx("div", { className: "ef-text-2xl ef-font-bold ef-text-gray-900 ef-hover:scale-110 ef-hover:text-green-600", children: b.manager2Increment })] })] })] })] })] }) }) });
      };
      Ep.component = "appraisal-report";
      var km = Object.freeze(Object.defineProperty({ __proto__: null, AppraisalRating: Tp, EmployeeAppraisalReport: Ep }, Symbol.toStringTag, { value: "Module" }));
      var uy = Object.defineProperty;
      var ry = (u, s, r) => s in u ? uy(u, s, { enumerable: true, configurable: true, writable: true, value: r }) : u[s] = r;
      var cr = (u, s, r) => ry(u, typeof s != "symbol" ? s + "" : s, r);
      var oy = { stringify: (u) => u ? "true" : "false", parse: (u) => /^[ty1-9]/i.test(u) };
      var fy = { stringify: (u) => u.name, parse: (u, s, r) => {
        const o = (() => {
          if (typeof window < "u" && u in window)
            return window[u];
          if (typeof global < "u" && u in global)
            return global[u];
        })();
        return typeof o == "function" ? o.bind(r) : void 0;
      } };
      var cy = { stringify: (u) => JSON.stringify(u), parse: (u) => JSON.parse(u) };
      function dy(u) {
        return u.replace(/([a-z0-9])([A-Z])/g, (s, r, o) => `${r}-${o.toLowerCase()}`);
      }
      function wp(u) {
        return u.replace(/[-:]([a-z])/g, (s, r) => `${r.toUpperCase()}`);
      }
      var hy = { stringify: (u) => u.name, parse: (u, s, r) => {
        const o = (() => {
          const y = wp(s);
          if (typeof r < "u" && y in r.container)
            return r.container[y];
        })();
        return typeof o == "function" ? o.bind(r) : void 0;
      } };
      var my = { stringify: (u) => `${u}`, parse: (u) => parseFloat(u) };
      var py = { stringify: (u) => u, parse: (u) => u };
      var Bf = { string: py, number: my, boolean: oy, function: fy, method: hy, json: cy };
      var ws = Symbol.for("r2wc.render");
      var dr = Symbol.for("r2wc.connected");
      var jl = Symbol.for("r2wc.context");
      var Pt = Symbol.for("r2wc.props");
      function gy(u, s, r) {
        var o, y, b;
        s.props || (s.props = u.propTypes ? Object.keys(u.propTypes) : []), s.events || (s.events = []);
        const m = Array.isArray(s.props) ? s.props.slice() : Object.keys(s.props), x = Array.isArray(s.events) ? s.events.slice() : Object.keys(s.events), p = {}, h = {}, N = {}, E = {};
        for (const O of m) {
          p[O] = Array.isArray(s.props) ? "string" : s.props[O];
          const B = dy(O);
          N[O] = B, E[B] = O;
        }
        for (const O of x)
          h[O] = Array.isArray(s.events) ? {} : s.events[O];
        class Y extends HTMLElement {
          constructor() {
            super(), cr(this, b, true), cr(this, y), cr(this, o, {}), cr(this, "container"), s.shadow ? this.container = this.attachShadow({ mode: s.shadow }) : this.container = this, this[Pt].container = this.container;
            for (const B of m) {
              const W = N[B], fe = this.getAttribute(W), $ = p[B], ue = $ ? Bf[$] : null;
              if ($ === "method") {
                const ae = wp(W);
                Object.defineProperty(this[Pt].container, ae, { enumerable: true, configurable: true, get() {
                  return this[Pt][ae];
                }, set(he) {
                  this[Pt][ae] = he, this[ws]();
                } }), this[Pt][B] = ue.parse(fe, W, this);
              }
              ue != null && ue.parse && fe && (this[Pt][B] = ue.parse(fe, W, this));
            }
            for (const B of x)
              this[Pt][B] = (W) => {
                const fe = B.replace(/^on/, "").toLowerCase();
                this.dispatchEvent(new CustomEvent(fe, Ge({ detail: W }, h[B])));
              };
          }
          static get observedAttributes() {
            return Object.keys(E);
          }
          connectedCallback() {
            this[dr] = true, this[ws]();
          }
          disconnectedCallback() {
            this[dr] = false, this[jl] && r.unmount(this[jl]), delete this[jl];
          }
          attributeChangedCallback(B, W, fe) {
            const $ = E[B], ue = p[$], ae = ue ? Bf[ue] : null;
            $ in p && ae != null && ae.parse && fe && (this[Pt][$] = ae.parse(fe, B, this), this[ws]());
          }
          [(b = dr, y = jl, o = Pt, ws)]() {
            this[dr] && (this[jl] ? r.update(this[jl], this[Pt]) : this[jl] = r.mount(this.container, u, this[Pt]));
          }
        }
        for (const O of m) {
          const B = N[O], W = p[O];
          Object.defineProperty(Y.prototype, O, { enumerable: true, configurable: true, get() {
            return this[Pt][O];
          }, set(fe) {
            this[Pt][O] = fe;
            const $ = W ? Bf[W] : null;
            if ($ != null && $.stringify) {
              const ue = $.stringify(fe, B, this);
              this.getAttribute(B) !== ue && this.setAttribute(B, ue);
            } else
              this[ws]();
          } });
        }
        return Y;
      }
      function yy(u, s, r, o = {}) {
        function y(x, p, h) {
          const N = s.createElement(p, h);
          if ("createRoot" in r) {
            const E = r.createRoot(x);
            return E.render(N), { container: x, root: E, ReactComponent: p };
          }
          if ("render" in r)
            return r.render(N, x), { container: x, ReactComponent: p };
          throw new Error("Invalid ReactDOM instance provided.");
        }
        function b({ container: x, root: p, ReactComponent: h }, N) {
          const E = s.createElement(h, N);
          if (p) {
            p.render(E);
            return;
          }
          if ("render" in r) {
            r.render(E, x);
            return;
          }
        }
        function m({ container: x, root: p }) {
          if (p) {
            p.unmount();
            return;
          }
          if ("unmountComponentAtNode" in r) {
            r.unmountComponentAtNode(x);
            return;
          }
        }
        return gy(u, o, { mount: y, unmount: m, update: b });
      }
      var qf = { exports: {} };
      var As = {};
      var Hf = { exports: {} };
      var Lf = {};
      var Vm;
      function by() {
        return Vm || (Vm = 1, function(u) {
          function s(Q, ee) {
            var ce = Q.length;
            Q.push(ee);
            e:
              for (; 0 < ce; ) {
                var te = ce - 1 >>> 1, ne = Q[te];
                if (0 < y(ne, ee))
                  Q[te] = ee, Q[ce] = ne, ce = te;
                else
                  break e;
              }
          }
          function r(Q) {
            return Q.length === 0 ? null : Q[0];
          }
          function o(Q) {
            if (Q.length === 0)
              return null;
            var ee = Q[0], ce = Q.pop();
            if (ce !== ee) {
              Q[0] = ce;
              e:
                for (var te = 0, ne = Q.length, T = ne >>> 1; te < T; ) {
                  var A = 2 * (te + 1) - 1, G = Q[A], Z = A + 1, J = Q[Z];
                  if (0 > y(G, ce))
                    Z < ne && 0 > y(J, G) ? (Q[te] = J, Q[Z] = ce, te = Z) : (Q[te] = G, Q[A] = ce, te = A);
                  else if (Z < ne && 0 > y(J, ce))
                    Q[te] = J, Q[Z] = ce, te = Z;
                  else
                    break e;
                }
            }
            return ee;
          }
          function y(Q, ee) {
            var ce = Q.sortIndex - ee.sortIndex;
            return ce !== 0 ? ce : Q.id - ee.id;
          }
          if (u.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
            var b = performance;
            u.unstable_now = function() {
              return b.now();
            };
          } else {
            var m = Date, x = m.now();
            u.unstable_now = function() {
              return m.now() - x;
            };
          }
          var p = [], h = [], N = 1, E = null, Y = 3, O = false, B = false, W = false, fe = false, $ = typeof setTimeout == "function" ? setTimeout : null, ue = typeof clearTimeout == "function" ? clearTimeout : null, ae = typeof setImmediate != "undefined" ? setImmediate : null;
          function he(Q) {
            for (var ee = r(h); ee !== null; ) {
              if (ee.callback === null)
                o(h);
              else if (ee.startTime <= Q)
                o(h), ee.sortIndex = ee.expirationTime, s(p, ee);
              else
                break;
              ee = r(h);
            }
          }
          function ge(Q) {
            if (W = false, he(Q), !B)
              if (r(p) !== null)
                B = true, Se || (Se = true, nt());
              else {
                var ee = r(h);
                ee !== null && Pe(ge, ee.startTime - Q);
              }
          }
          var Se = false, ie = -1, ze = 5, ke = -1;
          function Ut() {
            return fe ? true : !(u.unstable_now() - ke < ze);
          }
          function yt() {
            if (fe = false, Se) {
              var Q = u.unstable_now();
              ke = Q;
              var ee = true;
              try {
                e: {
                  B = false, W && (W = false, ue(ie), ie = -1), O = true;
                  var ce = Y;
                  try {
                    t: {
                      for (he(Q), E = r(p); E !== null && !(E.expirationTime > Q && Ut()); ) {
                        var te = E.callback;
                        if (typeof te == "function") {
                          E.callback = null, Y = E.priorityLevel;
                          var ne = te(E.expirationTime <= Q);
                          if (Q = u.unstable_now(), typeof ne == "function") {
                            E.callback = ne, he(Q), ee = true;
                            break t;
                          }
                          E === r(p) && o(p), he(Q);
                        } else
                          o(p);
                        E = r(p);
                      }
                      if (E !== null)
                        ee = true;
                      else {
                        var T = r(h);
                        T !== null && Pe(ge, T.startTime - Q), ee = false;
                      }
                    }
                    break e;
                  } finally {
                    E = null, Y = ce, O = false;
                  }
                  ee = void 0;
                }
              } finally {
                ee ? nt() : Se = false;
              }
            }
          }
          var nt;
          if (typeof ae == "function")
            nt = function() {
              ae(yt);
            };
          else if (typeof MessageChannel != "undefined") {
            var Ve = new MessageChannel(), Ce = Ve.port2;
            Ve.port1.onmessage = yt, nt = function() {
              Ce.postMessage(null);
            };
          } else
            nt = function() {
              $(yt, 0);
            };
          function Pe(Q, ee) {
            ie = $(function() {
              Q(u.unstable_now());
            }, ee);
          }
          u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(Q) {
            Q.callback = null;
          }, u.unstable_forceFrameRate = function(Q) {
            0 > Q || 125 < Q ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ze = 0 < Q ? Math.floor(1e3 / Q) : 5;
          }, u.unstable_getCurrentPriorityLevel = function() {
            return Y;
          }, u.unstable_next = function(Q) {
            switch (Y) {
              case 1:
              case 2:
              case 3:
                var ee = 3;
                break;
              default:
                ee = Y;
            }
            var ce = Y;
            Y = ee;
            try {
              return Q();
            } finally {
              Y = ce;
            }
          }, u.unstable_requestPaint = function() {
            fe = true;
          }, u.unstable_runWithPriority = function(Q, ee) {
            switch (Q) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                Q = 3;
            }
            var ce = Y;
            Y = Q;
            try {
              return ee();
            } finally {
              Y = ce;
            }
          }, u.unstable_scheduleCallback = function(Q, ee, ce) {
            var te = u.unstable_now();
            switch (typeof ce == "object" && ce !== null ? (ce = ce.delay, ce = typeof ce == "number" && 0 < ce ? te + ce : te) : ce = te, Q) {
              case 1:
                var ne = -1;
                break;
              case 2:
                ne = 250;
                break;
              case 5:
                ne = 1073741823;
                break;
              case 4:
                ne = 1e4;
                break;
              default:
                ne = 5e3;
            }
            return ne = ce + ne, Q = { id: N++, callback: ee, priorityLevel: Q, startTime: ce, expirationTime: ne, sortIndex: -1 }, ce > te ? (Q.sortIndex = ce, s(h, Q), r(p) === null && Q === r(h) && (W ? (ue(ie), ie = -1) : W = true, Pe(ge, ce - te))) : (Q.sortIndex = ne, s(p, Q), B || O || (B = true, Se || (Se = true, nt()))), Q;
          }, u.unstable_shouldYield = Ut, u.unstable_wrapCallback = function(Q) {
            var ee = Y;
            return function() {
              var ce = Y;
              Y = ee;
              try {
                return Q.apply(this, arguments);
              } finally {
                Y = ce;
              }
            };
          };
        }(Lf)), Lf;
      }
      var Zm;
      function vy() {
        return Zm || (Zm = 1, Hf.exports = by()), Hf.exports;
      }
      var Yf = { exports: {} };
      var Rt = {};
      var Km;
      function xy() {
        if (Km)
          return Rt;
        Km = 1;
        var u = sc();
        function s(p) {
          var h = "https://react.dev/errors/" + p;
          if (1 < arguments.length) {
            h += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var N = 2; N < arguments.length; N++)
              h += "&args[]=" + encodeURIComponent(arguments[N]);
          }
          return "Minified React error #" + p + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        function r() {
        }
        var o = { d: { f: r, r: function() {
          throw Error(s(522));
        }, D: r, C: r, L: r, m: r, X: r, S: r, M: r }, p: 0, findDOMNode: null }, y = Symbol.for("react.portal");
        function b(p, h, N) {
          var E = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
          return { $$typeof: y, key: E == null ? null : "" + E, children: p, containerInfo: h, implementation: N };
        }
        var m = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function x(p, h) {
          if (p === "font")
            return "";
          if (typeof h == "string")
            return h === "use-credentials" ? h : "";
        }
        return Rt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, Rt.createPortal = function(p, h) {
          var N = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
          if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11)
            throw Error(s(299));
          return b(p, h, null, N);
        }, Rt.flushSync = function(p) {
          var h = m.T, N = o.p;
          try {
            if (m.T = null, o.p = 2, p)
              return p();
          } finally {
            m.T = h, o.p = N, o.d.f();
          }
        }, Rt.preconnect = function(p, h) {
          typeof p == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, o.d.C(p, h));
        }, Rt.prefetchDNS = function(p) {
          typeof p == "string" && o.d.D(p);
        }, Rt.preinit = function(p, h) {
          if (typeof p == "string" && h && typeof h.as == "string") {
            var N = h.as, E = x(N, h.crossOrigin), Y = typeof h.integrity == "string" ? h.integrity : void 0, O = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
            N === "style" ? o.d.S(p, typeof h.precedence == "string" ? h.precedence : void 0, { crossOrigin: E, integrity: Y, fetchPriority: O }) : N === "script" && o.d.X(p, { crossOrigin: E, integrity: Y, fetchPriority: O, nonce: typeof h.nonce == "string" ? h.nonce : void 0 });
          }
        }, Rt.preinitModule = function(p, h) {
          if (typeof p == "string")
            if (typeof h == "object" && h !== null) {
              if (h.as == null || h.as === "script") {
                var N = x(h.as, h.crossOrigin);
                o.d.M(p, { crossOrigin: N, integrity: typeof h.integrity == "string" ? h.integrity : void 0, nonce: typeof h.nonce == "string" ? h.nonce : void 0 });
              }
            } else
              h == null && o.d.M(p);
        }, Rt.preload = function(p, h) {
          if (typeof p == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
            var N = h.as, E = x(N, h.crossOrigin);
            o.d.L(p, N, { crossOrigin: E, integrity: typeof h.integrity == "string" ? h.integrity : void 0, nonce: typeof h.nonce == "string" ? h.nonce : void 0, type: typeof h.type == "string" ? h.type : void 0, fetchPriority: typeof h.fetchPriority == "string" ? h.fetchPriority : void 0, referrerPolicy: typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0, imageSrcSet: typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0, imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0, media: typeof h.media == "string" ? h.media : void 0 });
          }
        }, Rt.preloadModule = function(p, h) {
          if (typeof p == "string")
            if (h) {
              var N = x(h.as, h.crossOrigin);
              o.d.m(p, { as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0, crossOrigin: N, integrity: typeof h.integrity == "string" ? h.integrity : void 0 });
            } else
              o.d.m(p);
        }, Rt.requestFormReset = function(p) {
          o.d.r(p);
        }, Rt.unstable_batchedUpdates = function(p, h) {
          return p(h);
        }, Rt.useFormState = function(p, h, N) {
          return m.H.useFormState(p, h, N);
        }, Rt.useFormStatus = function() {
          return m.H.useHostTransitionStatus();
        }, Rt.version = "19.2.0", Rt;
      }
      var Jm;
      function Sy() {
        if (Jm)
          return Yf.exports;
        Jm = 1;
        function u() {
          if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
            } catch (s) {
              console.error(s);
            }
        }
        return u(), Yf.exports = xy(), Yf.exports;
      }
      var Fm;
      function _y() {
        if (Fm)
          return As;
        Fm = 1;
        var u = vy(), s = sc(), r = Sy();
        function o(e) {
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
        function m(e) {
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
        function p(e) {
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
                  return p(l), e;
                if (i === a)
                  return p(l), t;
                i = i.sibling;
              }
              throw Error(o(188));
            }
            if (n.return !== a.return)
              n = l, a = i;
            else {
              for (var f = false, v = l.child; v; ) {
                if (v === n) {
                  f = true, n = l, a = i;
                  break;
                }
                if (v === a) {
                  f = true, a = l, n = i;
                  break;
                }
                v = v.sibling;
              }
              if (!f) {
                for (v = i.child; v; ) {
                  if (v === n) {
                    f = true, n = i, a = l;
                    break;
                  }
                  if (v === a) {
                    f = true, a = i, n = l;
                    break;
                  }
                  v = v.sibling;
                }
                if (!f)
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
        function N(e) {
          var t = e.tag;
          if (t === 5 || t === 26 || t === 27 || t === 6)
            return e;
          for (e = e.child; e !== null; ) {
            if (t = N(e), t !== null)
              return t;
            e = e.sibling;
          }
          return null;
        }
        var E = Object.assign, Y = Symbol.for("react.element"), O = Symbol.for("react.transitional.element"), B = Symbol.for("react.portal"), W = Symbol.for("react.fragment"), fe = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), ue = Symbol.for("react.consumer"), ae = Symbol.for("react.context"), he = Symbol.for("react.forward_ref"), ge = Symbol.for("react.suspense"), Se = Symbol.for("react.suspense_list"), ie = Symbol.for("react.memo"), ze = Symbol.for("react.lazy"), ke = Symbol.for("react.activity"), Ut = Symbol.for("react.memo_cache_sentinel"), yt = Symbol.iterator;
        function nt(e) {
          return e === null || typeof e != "object" ? null : (e = yt && e[yt] || e["@@iterator"], typeof e == "function" ? e : null);
        }
        var Ve = Symbol.for("react.client.reference");
        function Ce(e) {
          if (e == null)
            return null;
          if (typeof e == "function")
            return e.$$typeof === Ve ? null : e.displayName || e.name || null;
          if (typeof e == "string")
            return e;
          switch (e) {
            case W:
              return "Fragment";
            case $:
              return "Profiler";
            case fe:
              return "StrictMode";
            case ge:
              return "Suspense";
            case Se:
              return "SuspenseList";
            case ke:
              return "Activity";
          }
          if (typeof e == "object")
            switch (e.$$typeof) {
              case B:
                return "Portal";
              case ae:
                return e.displayName || "Context";
              case ue:
                return (e._context.displayName || "Context") + ".Consumer";
              case he:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
              case ie:
                return t = e.displayName || null, t !== null ? t : Ce(e.type) || "Memo";
              case ze:
                t = e._payload, e = e._init;
                try {
                  return Ce(e(t));
                } catch (n) {
                }
            }
          return null;
        }
        var Pe = Array.isArray, Q = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ee = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ce = { pending: false, data: null, method: null, action: null }, te = [], ne = -1;
        function T(e) {
          return { current: e };
        }
        function A(e) {
          0 > ne || (e.current = te[ne], te[ne] = null, ne--);
        }
        function G(e, t) {
          ne++, te[ne] = e.current, e.current = t;
        }
        var Z = T(null), J = T(null), ye = T(null), Oe = T(null);
        function Be(e, t) {
          switch (G(ye, t), G(J, e), G(Z, null), t.nodeType) {
            case 9:
            case 11:
              e = (e = t.documentElement) && (e = e.namespaceURI) ? lm(e) : 0;
              break;
            default:
              if (e = t.tagName, t = t.namespaceURI)
                t = lm(t), e = im(t, e);
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
          A(Z), G(Z, e);
        }
        function Je() {
          A(Z), A(J), A(ye);
        }
        function Xn(e) {
          e.memoizedState !== null && G(Oe, e);
          var t = Z.current, n = im(t, e.type);
          t !== n && (G(J, e), G(Z, n));
        }
        function Et(e) {
          J.current === e && (A(Z), A(J)), Oe.current === e && (A(Oe), _s._currentValue = ce);
        }
        var ga, Us;
        function wn(e) {
          if (ga === void 0)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              ga = t && t[1] || "", Us = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
            }
          return `
` + ga + e + Us;
        }
        var ji = false;
        function Ti(e, t) {
          if (!e || ji)
            return "";
          ji = true;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            var a = { DetermineComponentFrameRoot: function() {
              try {
                if (t) {
                  var V = function() {
                    throw Error();
                  };
                  if (Object.defineProperty(V.prototype, "props", { set: function() {
                    throw Error();
                  } }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                      Reflect.construct(V, []);
                    } catch (L) {
                      var q = L;
                    }
                    Reflect.construct(e, [], V);
                  } else {
                    try {
                      V.call();
                    } catch (L) {
                      q = L;
                    }
                    e.call(V.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (L) {
                    q = L;
                  }
                  (V = e()) && typeof V.catch == "function" && V.catch(function() {
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
            var i = a.DetermineComponentFrameRoot(), f = i[0], v = i[1];
            if (f && v) {
              var j = f.split(`
`), D = v.split(`
`);
              for (l = a = 0; a < j.length && !j[a].includes("DetermineComponentFrameRoot"); )
                a++;
              for (; l < D.length && !D[l].includes("DetermineComponentFrameRoot"); )
                l++;
              if (a === j.length || l === D.length)
                for (a = j.length - 1, l = D.length - 1; 1 <= a && 0 <= l && j[a] !== D[l]; )
                  l--;
              for (; 1 <= a && 0 <= l; a--, l--)
                if (j[a] !== D[l]) {
                  if (a !== 1 || l !== 1)
                    do
                      if (a--, l--, 0 > l || j[a] !== D[l]) {
                        var X = `
` + j[a].replace(" at new ", " at ");
                        return e.displayName && X.includes("<anonymous>") && (X = X.replace("<anonymous>", e.displayName)), X;
                      }
                    while (1 <= a && 0 <= l);
                  break;
                }
            }
          } finally {
            ji = false, Error.prepareStackTrace = n;
          }
          return (n = e ? e.displayName || e.name : "") ? wn(n) : "";
        }
        function Tr(e, t) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              return wn(e.type);
            case 16:
              return wn("Lazy");
            case 13:
              return e.child !== t && t !== null ? wn("Suspense Fallback") : wn("Suspense");
            case 19:
              return wn("SuspenseList");
            case 0:
            case 15:
              return Ti(e.type, false);
            case 11:
              return Ti(e.type.render, false);
            case 1:
              return Ti(e.type, true);
            case 31:
              return wn("Activity");
            default:
              return "";
          }
        }
        function Ds(e) {
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
        var Ei = Object.prototype.hasOwnProperty, wi = u.unstable_scheduleCallback, Ai = u.unstable_cancelCallback, Er = u.unstable_shouldYield, Bs = u.unstable_requestPaint, Ot = u.unstable_now, H = u.unstable_getCurrentPriorityLevel, be = u.unstable_ImmediatePriority, Ri = u.unstable_UserBlockingPriority, Fa = u.unstable_NormalPriority, wr = u.unstable_LowPriority, wl = u.unstable_IdlePriority, qs = u.log, Hs = u.unstable_setDisableYieldValue, Wa = null, Ct = null;
        function Gt(e) {
          if (typeof qs == "function" && Hs(e), Ct && typeof Ct.setStrictMode == "function")
            try {
              Ct.setStrictMode(Wa, e);
            } catch (t) {
            }
        }
        var wt = Math.clz32 ? Math.clz32 : Ar, Oi = Math.log, Ls = Math.LN2;
        function Ar(e) {
          return e >>>= 0, e === 0 ? 32 : 31 - (Oi(e) / Ls | 0) | 0;
        }
        var $a = 256, Al = 262144, Pa = 4194304;
        function An(e) {
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
          var l = 0, i = e.suspendedLanes, f = e.pingedLanes;
          e = e.warmLanes;
          var v = a & 134217727;
          return v !== 0 ? (a = v & ~i, a !== 0 ? l = An(a) : (f &= v, f !== 0 ? l = An(f) : n || (n = v & ~e, n !== 0 && (l = An(n))))) : (v = a & ~i, v !== 0 ? l = An(v) : f !== 0 ? l = An(f) : n || (n = a & ~e, n !== 0 && (l = An(n)))), l === 0 ? 0 : t !== 0 && t !== l && (t & i) === 0 && (i = l & -l, n = t & -t, i >= n || i === 32 && (n & 4194048) !== 0) ? t : l;
        }
        function Ia(e, t) {
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
        function Ys() {
          var e = Pa;
          return Pa <<= 1, (Pa & 62914560) === 0 && (Pa = 4194304), e;
        }
        function el(e) {
          for (var t = [], n = 0; 31 > n; n++)
            t.push(e);
          return t;
        }
        function Gn(e, t) {
          e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
        }
        function Or(e, t, n, a, l, i) {
          var f = e.pendingLanes;
          e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
          var v = e.entanglements, j = e.expirationTimes, D = e.hiddenUpdates;
          for (n = f & ~n; 0 < n; ) {
            var X = 31 - wt(n), V = 1 << X;
            v[X] = 0, j[X] = -1;
            var q = D[X];
            if (q !== null)
              for (D[X] = null, X = 0; X < q.length; X++) {
                var L = q[X];
                L !== null && (L.lane &= -536870913);
              }
            n &= ~V;
          }
          a !== 0 && Qs(e, a, 0), i !== 0 && l === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(f & ~t));
        }
        function Qs(e, t, n) {
          e.pendingLanes |= t, e.suspendedLanes &= ~t;
          var a = 31 - wt(t);
          e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | n & 261930;
        }
        function Xs(e, t) {
          var n = e.entangledLanes |= t;
          for (e = e.entanglements; n; ) {
            var a = 31 - wt(n), l = 1 << a;
            l & t | e[a] & t && (e[a] |= t), n &= ~l;
          }
        }
        function Gs(e, t) {
          var n = t & -t;
          return n = (n & 42) !== 0 ? 1 : rt(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
        }
        function rt(e) {
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
        function Ci(e) {
          return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
        }
        function ks() {
          var e = ee.p;
          return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Am(e.type));
        }
        function Vs(e, t) {
          var n = ee.p;
          try {
            return ee.p = e, t();
          } finally {
            ee.p = n;
          }
        }
        var gn = Math.random().toString(36).slice(2), mt = "__reactFiber$" + gn, bt = "__reactProps$" + gn, Rn = "__reactContainer$" + gn, zi = "__reactEvents$" + gn, Cr = "__reactListeners$" + gn, Zs = "__reactHandles$" + gn, ya = "__reactResources$" + gn, On = "__reactMarker$" + gn;
        function Mi(e) {
          delete e[mt], delete e[bt], delete e[zi], delete e[Cr], delete e[Zs];
        }
        function ba(e) {
          var t = e[mt];
          if (t)
            return t;
          for (var n = e.parentNode; n; ) {
            if (t = n[Rn] || n[mt]) {
              if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = dm(e); e !== null; ) {
                  if (n = e[mt])
                    return n;
                  e = dm(e);
                }
              return t;
            }
            e = n, n = e.parentNode;
          }
          return null;
        }
        function Cn(e) {
          if (e = e[mt] || e[Rn]) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
              return e;
          }
          return null;
        }
        function tl(e) {
          var t = e.tag;
          if (t === 5 || t === 26 || t === 27 || t === 6)
            return e.stateNode;
          throw Error(o(33));
        }
        function va(e) {
          var t = e[ya];
          return t || (t = e[ya] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
        }
        function et(e) {
          e[On] = true;
        }
        var Dt = /* @__PURE__ */ new Set(), Ol = {};
        function zn(e, t) {
          kt(e, t), kt(e + "Capture", t);
        }
        function kt(e, t) {
          for (Ol[e] = t, e = 0; e < t.length; e++)
            Dt.add(t[e]);
        }
        var Ks = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Js = {}, Fs = {};
        function zr(e) {
          return Ei.call(Fs, e) ? true : Ei.call(Js, e) ? false : Ks.test(e) ? Fs[e] = true : (Js[e] = true, false);
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
        function nl(e, t, n) {
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
        function It(e, t, n, a) {
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
        function Ws(e) {
          var t = e.type;
          return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
        }
        function Mr(e, t, n) {
          var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
          if (!e.hasOwnProperty(t) && typeof a != "undefined" && typeof a.get == "function" && typeof a.set == "function") {
            var l = a.get, i = a.set;
            return Object.defineProperty(e, t, { configurable: true, get: function() {
              return l.call(this);
            }, set: function(f) {
              n = "" + f, i.call(this, f);
            } }), Object.defineProperty(e, t, { enumerable: a.enumerable }), { getValue: function() {
              return n;
            }, setValue: function(f) {
              n = "" + f;
            }, stopTracking: function() {
              e._valueTracker = null, delete e[t];
            } };
          }
        }
        function Ui(e) {
          if (!e._valueTracker) {
            var t = Ws(e) ? "checked" : "value";
            e._valueTracker = Mr(e, t, "" + e[t]);
          }
        }
        function Di(e) {
          if (!e)
            return false;
          var t = e._valueTracker;
          if (!t)
            return true;
          var n = t.getValue(), a = "";
          return e && (a = Ws(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== n ? (t.setValue(e), true) : false;
        }
        function al(e) {
          if (e = e || (typeof document != "undefined" ? document : void 0), typeof e == "undefined")
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        var Vn = /[\n"\\]/g;
        function zt(e) {
          return e.replace(Vn, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " ";
          });
        }
        function Bi(e, t, n, a, l, i, f, v) {
          e.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.type = f : e.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Bt(t)) : e.value !== "" + Bt(t) && (e.value = "" + Bt(t)) : f !== "submit" && f !== "reset" || e.removeAttribute("value"), t != null ? qi(e, f, Bt(t)) : n != null ? qi(e, f, Bt(n)) : a != null && e.removeAttribute("value"), l == null && i != null && (e.defaultChecked = !!i), l != null && (e.checked = l && typeof l != "function" && typeof l != "symbol"), v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? e.name = "" + Bt(v) : e.removeAttribute("name");
        }
        function $s(e, t, n, a, l, i, f, v) {
          if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || n != null) {
            if (!(i !== "submit" && i !== "reset" || t != null)) {
              Ui(e);
              return;
            }
            n = n != null ? "" + Bt(n) : "", t = t != null ? "" + Bt(t) : n, v || t === e.value || (e.value = t), e.defaultValue = t;
          }
          a = a != null ? a : l, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = v ? e.checked : !!a, e.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.name = f), Ui(e);
        }
        function qi(e, t, n) {
          t === "number" && al(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
        }
        function xa(e, t, n, a) {
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
        function Ps(e, t, n) {
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
                throw Error(o(92));
              if (Pe(a)) {
                if (1 < a.length)
                  throw Error(o(93));
                a = a[0];
              }
              n = a;
            }
            n == null && (n = ""), t = n;
          }
          n = Bt(t), e.defaultValue = n, a = e.textContent, a === n && a !== "" && a !== null && (e.value = a), Ui(e);
        }
        function Zn(e, t) {
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
        function Is(e, t, n) {
          var a = t.indexOf("--") === 0;
          n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Cl.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
        }
        function Li(e, t, n) {
          if (t != null && typeof t != "object")
            throw Error(o(62));
          if (e = e.style, n != null) {
            for (var a in n)
              !n.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
            for (var l in t)
              a = t[l], t.hasOwnProperty(l) && n[l] !== a && Is(e, l, a);
          } else
            for (var i in t)
              t.hasOwnProperty(i) && Is(e, i, t[i]);
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
        var eu = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), Ur = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function Ml(e) {
          return Ur.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
        }
        function en() {
        }
        var ll = null;
        function Ul(e) {
          return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
        }
        var Sa = null, Kn = null;
        function Dl(e) {
          var t = Cn(e);
          if (t && (e = t.stateNode)) {
            var n = e[bt] || null;
            e:
              switch (e = t.stateNode, t.type) {
                case "input":
                  if (Bi(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
                    for (n = e; n.parentNode; )
                      n = n.parentNode;
                    for (n = n.querySelectorAll('input[name="' + zt("" + t) + '"][type="radio"]'), t = 0; t < n.length; t++) {
                      var a = n[t];
                      if (a !== e && a.form === e.form) {
                        var l = a[bt] || null;
                        if (!l)
                          throw Error(o(90));
                        Bi(a, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name);
                      }
                    }
                    for (t = 0; t < n.length; t++)
                      a = n[t], a.form === e.form && Di(a);
                  }
                  break e;
                case "textarea":
                  Ps(e, n.value, n.defaultValue);
                  break e;
                case "select":
                  t = n.value, t != null && xa(e, !!n.multiple, t, false);
              }
          }
        }
        var Bl = false;
        function Yi(e, t, n) {
          if (Bl)
            return e(t, n);
          Bl = true;
          try {
            var a = e(t);
            return a;
          } finally {
            if (Bl = false, (Sa !== null || Kn !== null) && (Xu(), Sa && (t = Sa, e = Kn, Kn = Sa = null, Dl(t), e)))
              for (t = 0; t < e.length; t++)
                Dl(e[t]);
          }
        }
        function Mn(e, t) {
          var n = e.stateNode;
          if (n === null)
            return null;
          var a = n[bt] || null;
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
        var tn = !(typeof window == "undefined" || typeof window.document == "undefined" || typeof window.document.createElement == "undefined"), Qi = false;
        if (tn)
          try {
            var Un = {};
            Object.defineProperty(Un, "passive", { get: function() {
              Qi = true;
            } }), window.addEventListener("test", Un, Un), window.removeEventListener("test", Un, Un);
          } catch (e) {
            Qi = false;
          }
        var pt = null, _a = null, Jn = null;
        function ql() {
          if (Jn)
            return Jn;
          var e, t = _a, n = t.length, a, l = "value" in pt ? pt.value : pt.textContent, i = l.length;
          for (e = 0; e < n && t[e] === l[e]; e++)
            ;
          var f = n - e;
          for (a = 1; a <= f && t[n - a] === l[i - a]; a++)
            ;
          return Jn = l.slice(e, 1 < a ? 1 - a : void 0);
        }
        function Hl(e) {
          var t = e.keyCode;
          return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
        }
        function Ll() {
          return true;
        }
        function tu() {
          return false;
        }
        function vt(e) {
          function t(n, a, l, i, f) {
            this._reactName = n, this._targetInst = l, this.type = a, this.nativeEvent = i, this.target = f, this.currentTarget = null;
            for (var v in e)
              e.hasOwnProperty(v) && (n = e[v], this[v] = n ? n(i) : i[v]);
            return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === false) ? Ll : tu, this.isPropagationStopped = tu, this;
          }
          return E(t.prototype, { preventDefault: function() {
            this.defaultPrevented = true;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = Ll);
          }, stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = Ll);
          }, persist: function() {
          }, isPersistent: Ll }), t;
        }
        var Fn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
          return e.timeStamp || Date.now();
        }, defaultPrevented: 0, isTrusted: 0 }, il = vt(Fn), Ke = E({}, Fn, { view: 0, detail: 0 }), c = vt(Ke), g, S, _, w = E({}, Ke, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: an, button: 0, buttons: 0, relatedTarget: function(e) {
          return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
        }, movementX: function(e) {
          return "movementX" in e ? e.movementX : (e !== _ && (_ && e.type === "mousemove" ? (g = e.screenX - _.screenX, S = e.screenY - _.screenY) : S = g = 0, _ = e), g);
        }, movementY: function(e) {
          return "movementY" in e ? e.movementY : S;
        } }), M = vt(w), z = E({}, w, { dataTransfer: 0 }), K = vt(z), re = E({}, Ke, { relatedTarget: 0 }), F = vt(re), P = E({}, Fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), pe = vt(P), Le = E({}, Fn, { clipboardData: function(e) {
          return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        } }), ve = vt(Le), I = E({}, Fn, { data: 0 }), le = vt(I), Fe = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, xt = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, it = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
        function nn(e) {
          var t = this.nativeEvent;
          return t.getModifierState ? t.getModifierState(e) : (e = it[e]) ? !!t[e] : false;
        }
        function an() {
          return nn;
        }
        var Xi = E({}, Ke, { key: function(e) {
          if (e.key) {
            var t = Fe[e.key] || e.key;
            if (t !== "Unidentified")
              return t;
          }
          return e.type === "keypress" ? (e = Hl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? xt[e.keyCode] || "Unidentified" : "";
        }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: an, charCode: function(e) {
          return e.type === "keypress" ? Hl(e) : 0;
        }, keyCode: function(e) {
          return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        }, which: function(e) {
          return e.type === "keypress" ? Hl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        } }), nu = vt(Xi), Dn = E({}, w, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Yl = vt(Dn), Ql = E({}, Ke, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: an }), au = vt(Ql), lu = E({}, Fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xl = vt(lu), sl = E({}, w, { deltaX: function(e) {
          return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        }, deltaY: function(e) {
          return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        }, deltaZ: 0, deltaMode: 0 }), Wn = vt(sl), iu = E({}, Fn, { newState: 0, oldState: 0 }), ln = vt(iu), su = [9, 13, 27, 32], sn = tn && "CompositionEvent" in window, Na = null;
        tn && "documentMode" in document && (Na = document.documentMode);
        var Dr = tn && "TextEvent" in window && !Na, yn = tn && (!sn || Na && 8 < Na && 11 >= Na), $n = " ", Gl = false;
        function ul(e, t) {
          switch (e) {
            case "keyup":
              return su.indexOf(t.keyCode) !== -1;
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
        var kl = false;
        function $p(e, t) {
          switch (e) {
            case "compositionend":
              return Gi(t);
            case "keypress":
              return t.which !== 32 ? null : (Gl = true, $n);
            case "textInput":
              return e = t.data, e === $n && Gl ? null : e;
            default:
              return null;
          }
        }
        function Pp(e, t) {
          if (kl)
            return e === "compositionend" || !sn && ul(e, t) ? (e = ql(), Jn = _a = pt = null, kl = false, e) : null;
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
        var Ip = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
        function pc(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return t === "input" ? !!Ip[e.type] : t === "textarea";
        }
        function gc(e, t, n, a) {
          Sa ? Kn ? Kn.push(a) : Kn = [a] : Sa = a, t = Fu(t, "onChange"), 0 < t.length && (n = new il("onChange", "change", null, n, a), e.push({ event: n, listeners: t }));
        }
        var ki = null, Vi = null;
        function eg(e) {
          Ph(e, 0);
        }
        function uu(e) {
          var t = tl(e);
          if (Di(t))
            return e;
        }
        function yc(e, t) {
          if (e === "change")
            return t;
        }
        var bc = false;
        if (tn) {
          var Br;
          if (tn) {
            var qr = "oninput" in document;
            if (!qr) {
              var vc = document.createElement("div");
              vc.setAttribute("oninput", "return;"), qr = typeof vc.oninput == "function";
            }
            Br = qr;
          } else
            Br = false;
          bc = Br && (!document.documentMode || 9 < document.documentMode);
        }
        function xc() {
          ki && (ki.detachEvent("onpropertychange", Sc), Vi = ki = null);
        }
        function Sc(e) {
          if (e.propertyName === "value" && uu(Vi)) {
            var t = [];
            gc(t, Vi, e, Ul(e)), Yi(eg, t);
          }
        }
        function tg(e, t, n) {
          e === "focusin" ? (xc(), ki = t, Vi = n, ki.attachEvent("onpropertychange", Sc)) : e === "focusout" && xc();
        }
        function ng(e) {
          if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return uu(Vi);
        }
        function ag(e, t) {
          if (e === "click")
            return uu(t);
        }
        function lg(e, t) {
          if (e === "input" || e === "change")
            return uu(t);
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
            if (!Ei.call(t, l) || !Vt(e[l], t[l]))
              return false;
          }
          return true;
        }
        function _c(e) {
          for (; e && e.firstChild; )
            e = e.firstChild;
          return e;
        }
        function Nc(e, t) {
          var n = _c(e);
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
            n = _c(n);
          }
        }
        function jc(e, t) {
          return e && t ? e === t ? true : e && e.nodeType === 3 ? false : t && t.nodeType === 3 ? jc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false : false;
        }
        function Tc(e) {
          e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
          for (var t = al(e.document); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = typeof t.contentWindow.location.href == "string";
            } catch (a) {
              n = false;
            }
            if (n)
              e = t.contentWindow;
            else
              break;
            t = al(e.document);
          }
          return t;
        }
        function Hr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
        }
        var sg = tn && "documentMode" in document && 11 >= document.documentMode, Vl = null, Lr = null, Ki = null, Yr = false;
        function Ec(e, t, n) {
          var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
          Yr || Vl == null || Vl !== al(a) || (a = Vl, "selectionStart" in a && Hr(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset }), Ki && Zi(Ki, a) || (Ki = a, a = Fu(Lr, "onSelect"), 0 < a.length && (t = new il("onSelect", "select", null, t, n), e.push({ event: t, listeners: a }), t.target = Vl)));
        }
        function rl(e, t) {
          var n = {};
          return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
        }
        var Zl = { animationend: rl("Animation", "AnimationEnd"), animationiteration: rl("Animation", "AnimationIteration"), animationstart: rl("Animation", "AnimationStart"), transitionrun: rl("Transition", "TransitionRun"), transitionstart: rl("Transition", "TransitionStart"), transitioncancel: rl("Transition", "TransitionCancel"), transitionend: rl("Transition", "TransitionEnd") }, Qr = {}, wc = {};
        tn && (wc = document.createElement("div").style, "AnimationEvent" in window || (delete Zl.animationend.animation, delete Zl.animationiteration.animation, delete Zl.animationstart.animation), "TransitionEvent" in window || delete Zl.transitionend.transition);
        function ol(e) {
          if (Qr[e])
            return Qr[e];
          if (!Zl[e])
            return e;
          var t = Zl[e], n;
          for (n in t)
            if (t.hasOwnProperty(n) && n in wc)
              return Qr[e] = t[n];
          return e;
        }
        var Ac = ol("animationend"), Rc = ol("animationiteration"), Oc = ol("animationstart"), ug = ol("transitionrun"), rg = ol("transitionstart"), og = ol("transitioncancel"), Cc = ol("transitionend"), zc = /* @__PURE__ */ new Map(), Xr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
        Xr.push("scrollEnd");
        function bn(e, t) {
          zc.set(e, t), zn(t, [e]);
        }
        var ru = typeof reportError == "function" ? reportError : function(e) {
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
        function ou() {
          for (var e = Kl, t = Gr = Kl = 0; t < e; ) {
            var n = un[t];
            un[t++] = null;
            var a = un[t];
            un[t++] = null;
            var l = un[t];
            un[t++] = null;
            var i = un[t];
            if (un[t++] = null, a !== null && l !== null) {
              var f = a.pending;
              f === null ? l.next = l : (l.next = f.next, f.next = l), a.pending = l;
            }
            i !== 0 && Mc(n, l, i);
          }
        }
        function fu(e, t, n, a) {
          un[Kl++] = e, un[Kl++] = t, un[Kl++] = n, un[Kl++] = a, Gr |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
        }
        function kr(e, t, n, a) {
          return fu(e, t, n, a), cu(e);
        }
        function fl(e, t) {
          return fu(e, null, null, t), cu(e);
        }
        function Mc(e, t, n) {
          e.lanes |= n;
          var a = e.alternate;
          a !== null && (a.lanes |= n);
          for (var l = false, i = e.return; i !== null; )
            i.childLanes |= n, a = i.alternate, a !== null && (a.childLanes |= n), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (l = true)), e = i, i = i.return;
          return e.tag === 3 ? (i = e.stateNode, l && t !== null && (l = 31 - wt(n), e = i.hiddenUpdates, a = e[l], a === null ? e[l] = [t] : a.push(t), t.lane = n | 536870912), i) : null;
        }
        function cu(e) {
          if (50 < ps)
            throw ps = 0, ef = null, Error(o(185));
          for (var t = e.return; t !== null; )
            e = t, t = e.return;
          return e.tag === 3 ? e.stateNode : null;
        }
        var Jl = {};
        function fg(e, t, n, a) {
          this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
        }
        function Zt(e, t, n, a) {
          return new fg(e, t, n, a);
        }
        function Vr(e) {
          return e = e.prototype, !(!e || !e.isReactComponent);
        }
        function Pn(e, t) {
          var n = e.alternate;
          return n === null ? (n = Zt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
        }
        function Uc(e, t) {
          e.flags &= 65011714;
          var n = e.alternate;
          return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), e;
        }
        function du(e, t, n, a, l, i) {
          var f = 0;
          if (a = e, typeof e == "function")
            Vr(e) && (f = 1);
          else if (typeof e == "string")
            f = p0(e, n, Z.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
          else
            e:
              switch (e) {
                case ke:
                  return e = Zt(31, n, t, l), e.elementType = ke, e.lanes = i, e;
                case W:
                  return cl(n.children, l, i, t);
                case fe:
                  f = 8, l |= 24;
                  break;
                case $:
                  return e = Zt(12, n, t, l | 2), e.elementType = $, e.lanes = i, e;
                case ge:
                  return e = Zt(13, n, t, l), e.elementType = ge, e.lanes = i, e;
                case Se:
                  return e = Zt(19, n, t, l), e.elementType = Se, e.lanes = i, e;
                default:
                  if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                      case ae:
                        f = 10;
                        break e;
                      case ue:
                        f = 9;
                        break e;
                      case he:
                        f = 11;
                        break e;
                      case ie:
                        f = 14;
                        break e;
                      case ze:
                        f = 16, a = null;
                        break e;
                    }
                  f = 29, n = Error(o(130, e === null ? "null" : typeof e, "")), a = null;
              }
          return t = Zt(f, n, t, l), t.elementType = e, t.type = a, t.lanes = i, t;
        }
        function cl(e, t, n, a) {
          return e = Zt(7, e, a, t), e.lanes = n, e;
        }
        function Zr(e, t, n) {
          return e = Zt(6, e, null, t), e.lanes = n, e;
        }
        function Dc(e) {
          var t = Zt(18, null, null, 0);
          return t.stateNode = e, t;
        }
        function Kr(e, t, n) {
          return t = Zt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
        }
        var Bc = /* @__PURE__ */ new WeakMap();
        function rn(e, t) {
          if (typeof e == "object" && e !== null) {
            var n = Bc.get(e);
            return n !== void 0 ? n : (t = { value: e, source: t, stack: Ds(t) }, Bc.set(e, t), t);
          }
          return { value: e, source: t, stack: Ds(t) };
        }
        var Fl = [], Wl = 0, hu = null, Ji = 0, on = [], fn = 0, ja = null, Bn = 1, qn = "";
        function In(e, t) {
          Fl[Wl++] = Ji, Fl[Wl++] = hu, hu = e, Ji = t;
        }
        function qc(e, t, n) {
          on[fn++] = Bn, on[fn++] = qn, on[fn++] = ja, ja = e;
          var a = Bn;
          e = qn;
          var l = 32 - wt(a) - 1;
          a &= ~(1 << l), n += 1;
          var i = 32 - wt(t) + l;
          if (30 < i) {
            var f = l - l % 5;
            i = (a & (1 << f) - 1).toString(32), a >>= f, l -= f, Bn = 1 << 32 - wt(t) + l | n << l | a, qn = i + e;
          } else
            Bn = 1 << i | n << l | a, qn = e;
        }
        function Jr(e) {
          e.return !== null && (In(e, 1), qc(e, 1, 0));
        }
        function Fr(e) {
          for (; e === hu; )
            hu = Fl[--Wl], Fl[Wl] = null, Ji = Fl[--Wl], Fl[Wl] = null;
          for (; e === ja; )
            ja = on[--fn], on[fn] = null, qn = on[--fn], on[fn] = null, Bn = on[--fn], on[fn] = null;
        }
        function Hc(e, t) {
          on[fn++] = Bn, on[fn++] = qn, on[fn++] = ja, Bn = t.id, qn = t.overflow, ja = e;
        }
        var _t = null, We = null, Ae = false, Ta = null, cn = false, Wr = Error(o(519));
        function Ea(e) {
          var t = Error(o(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
          throw Fi(rn(t, e)), Wr;
        }
        function Lc(e) {
          var t = e.stateNode, n = e.type, a = e.memoizedProps;
          switch (t[mt] = e, t[bt] = a, n) {
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
              for (n = 0; n < ys.length; n++)
                Te(ys[n], t);
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
              Te("invalid", t), $s(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, true);
              break;
            case "select":
              Te("invalid", t);
              break;
            case "textarea":
              Te("invalid", t), Hi(t, a.value, a.defaultValue, a.children);
          }
          n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === true || nm(t.textContent, n) ? (a.popover != null && (Te("beforetoggle", t), Te("toggle", t)), a.onScroll != null && Te("scroll", t), a.onScrollEnd != null && Te("scrollend", t), a.onClick != null && (t.onclick = en), t = true) : t = false, t || Ea(e, true);
        }
        function Yc(e) {
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
        function $l(e) {
          if (e !== _t)
            return false;
          if (!Ae)
            return Yc(e), Ae = true, false;
          var t = e.tag, n;
          if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || gf(e.type, e.memoizedProps)), n = !n), n && We && Ea(e), Yc(e), t === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
              throw Error(o(317));
            We = cm(e);
          } else if (t === 31) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
              throw Error(o(317));
            We = cm(e);
          } else
            t === 27 ? (t = We, Ya(e.type) ? (e = Sf, Sf = null, We = e) : We = t) : We = _t ? hn(e.stateNode.nextSibling) : null;
          return true;
        }
        function dl() {
          We = _t = null, Ae = false;
        }
        function $r() {
          var e = Ta;
          return e !== null && (Yt === null ? Yt = e : Yt.push.apply(Yt, e), Ta = null), e;
        }
        function Fi(e) {
          Ta === null ? Ta = [e] : Ta.push(e);
        }
        var Pr = T(null), hl = null, ea = null;
        function wa(e, t, n) {
          G(Pr, t._currentValue), t._currentValue = n;
        }
        function ta(e) {
          e._currentValue = Pr.current, A(Pr);
        }
        function Ir(e, t, n) {
          for (; e !== null; ) {
            var a = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === n)
              break;
            e = e.return;
          }
        }
        function eo(e, t, n, a) {
          var l = e.child;
          for (l !== null && (l.return = e); l !== null; ) {
            var i = l.dependencies;
            if (i !== null) {
              var f = l.child;
              i = i.firstContext;
              e:
                for (; i !== null; ) {
                  var v = i;
                  i = l;
                  for (var j = 0; j < t.length; j++)
                    if (v.context === t[j]) {
                      i.lanes |= n, v = i.alternate, v !== null && (v.lanes |= n), Ir(i.return, n, e), a || (f = null);
                      break e;
                    }
                  i = v.next;
                }
            } else if (l.tag === 18) {
              if (f = l.return, f === null)
                throw Error(o(341));
              f.lanes |= n, i = f.alternate, i !== null && (i.lanes |= n), Ir(f, n, e), f = null;
            } else
              f = l.child;
            if (f !== null)
              f.return = l;
            else
              for (f = l; f !== null; ) {
                if (f === e) {
                  f = null;
                  break;
                }
                if (l = f.sibling, l !== null) {
                  l.return = f.return, f = l;
                  break;
                }
                f = f.return;
              }
            l = f;
          }
        }
        function Pl(e, t, n, a) {
          e = null;
          for (var l = t, i = false; l !== null; ) {
            if (!i) {
              if ((l.flags & 524288) !== 0)
                i = true;
              else if ((l.flags & 262144) !== 0)
                break;
            }
            if (l.tag === 10) {
              var f = l.alternate;
              if (f === null)
                throw Error(o(387));
              if (f = f.memoizedProps, f !== null) {
                var v = l.type;
                Vt(l.pendingProps.value, f.value) || (e !== null ? e.push(v) : e = [v]);
              }
            } else if (l === Oe.current) {
              if (f = l.alternate, f === null)
                throw Error(o(387));
              f.memoizedState.memoizedState !== l.memoizedState.memoizedState && (e !== null ? e.push(_s) : e = [_s]);
            }
            l = l.return;
          }
          e !== null && eo(t, e, n, a), t.flags |= 262144;
        }
        function mu(e) {
          for (e = e.firstContext; e !== null; ) {
            if (!Vt(e.context._currentValue, e.memoizedValue))
              return true;
            e = e.next;
          }
          return false;
        }
        function ml(e) {
          hl = e, ea = null, e = e.dependencies, e !== null && (e.firstContext = null);
        }
        function Nt(e) {
          return Qc(hl, e);
        }
        function pu(e, t) {
          return hl === null && ml(e), Qc(e, t);
        }
        function Qc(e, t) {
          var n = t._currentValue;
          if (t = { context: t, memoizedValue: n, next: null }, ea === null) {
            if (e === null)
              throw Error(o(308));
            ea = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
          } else
            ea = ea.next = t;
          return n;
        }
        var cg = typeof AbortController != "undefined" ? AbortController : function() {
          var e = [], t = this.signal = { aborted: false, addEventListener: function(n, a) {
            e.push(a);
          } };
          this.abort = function() {
            t.aborted = true, e.forEach(function(n) {
              return n();
            });
          };
        }, dg = u.unstable_scheduleCallback, hg = u.unstable_NormalPriority, ot = { $$typeof: ae, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
        function to() {
          return { controller: new cg(), data: /* @__PURE__ */ new Map(), refCount: 0 };
        }
        function Wi(e) {
          e.refCount--, e.refCount === 0 && dg(hg, function() {
            e.controller.abort();
          });
        }
        var $i = null, no = 0, Il = 0, ei = null;
        function mg(e, t) {
          if ($i === null) {
            var n = $i = [];
            no = 0, Il = uf(), ei = { status: "pending", value: void 0, then: function(a) {
              n.push(a);
            } };
          }
          return no++, t.then(Xc, Xc), t;
        }
        function Xc() {
          if (--no === 0 && $i !== null) {
            ei !== null && (ei.status = "fulfilled");
            var e = $i;
            $i = null, Il = 0, ei = null;
            for (var t = 0; t < e.length; t++)
              (0, e[t])();
          }
        }
        function pg(e, t) {
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
        var Gc = Q.S;
        Q.S = function(e, t) {
          Eh = Ot(), typeof t == "object" && t !== null && typeof t.then == "function" && mg(e, t), Gc !== null && Gc(e, t);
        };
        var pl = T(null);
        function ao() {
          var e = pl.current;
          return e !== null ? e : Ze.pooledCache;
        }
        function gu(e, t) {
          t === null ? G(pl, pl.current) : G(pl, t.pool);
        }
        function kc() {
          var e = ao();
          return e === null ? null : { parent: ot._currentValue, pool: e };
        }
        var ti = Error(o(460)), lo = Error(o(474)), yu = Error(o(542)), bu = { then: function() {
        } };
        function Vc(e) {
          return e = e.status, e === "fulfilled" || e === "rejected";
        }
        function Zc(e, t, n) {
          switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(en, en), t = n), t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, Jc(e), e;
            default:
              if (typeof t.status == "string")
                t.then(en, en);
              else {
                if (e = Ze, e !== null && 100 < e.shellSuspendCounter)
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
                  throw e = t.reason, Jc(e), e;
              }
              throw yl = t, ti;
          }
        }
        function gl(e) {
          try {
            var t = e._init;
            return t(e._payload);
          } catch (n) {
            throw n !== null && typeof n == "object" && typeof n.then == "function" ? (yl = n, ti) : n;
          }
        }
        var yl = null;
        function Kc() {
          if (yl === null)
            throw Error(o(459));
          var e = yl;
          return yl = null, e;
        }
        function Jc(e) {
          if (e === ti || e === yu)
            throw Error(o(483));
        }
        var ni = null, Pi = 0;
        function vu(e) {
          var t = Pi;
          return Pi += 1, ni === null && (ni = []), Zc(ni, e, t);
        }
        function Ii(e, t) {
          t = t.props.ref, e.ref = t !== void 0 ? t : null;
        }
        function xu(e, t) {
          throw t.$$typeof === Y ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
        }
        function Fc(e) {
          function t(C, R) {
            if (e) {
              var U = C.deletions;
              U === null ? (C.deletions = [R], C.flags |= 16) : U.push(R);
            }
          }
          function n(C, R) {
            if (!e)
              return null;
            for (; R !== null; )
              t(C, R), R = R.sibling;
            return null;
          }
          function a(C) {
            for (var R = /* @__PURE__ */ new Map(); C !== null; )
              C.key !== null ? R.set(C.key, C) : R.set(C.index, C), C = C.sibling;
            return R;
          }
          function l(C, R) {
            return C = Pn(C, R), C.index = 0, C.sibling = null, C;
          }
          function i(C, R, U) {
            return C.index = U, e ? (U = C.alternate, U !== null ? (U = U.index, U < R ? (C.flags |= 67108866, R) : U) : (C.flags |= 67108866, R)) : (C.flags |= 1048576, R);
          }
          function f(C) {
            return e && C.alternate === null && (C.flags |= 67108866), C;
          }
          function v(C, R, U, k) {
            return R === null || R.tag !== 6 ? (R = Zr(U, C.mode, k), R.return = C, R) : (R = l(R, U), R.return = C, R);
          }
          function j(C, R, U, k) {
            var de = U.type;
            return de === W ? X(C, R, U.props.children, k, U.key) : R !== null && (R.elementType === de || typeof de == "object" && de !== null && de.$$typeof === ze && gl(de) === R.type) ? (R = l(R, U.props), Ii(R, U), R.return = C, R) : (R = du(U.type, U.key, U.props, null, C.mode, k), Ii(R, U), R.return = C, R);
          }
          function D(C, R, U, k) {
            return R === null || R.tag !== 4 || R.stateNode.containerInfo !== U.containerInfo || R.stateNode.implementation !== U.implementation ? (R = Kr(U, C.mode, k), R.return = C, R) : (R = l(R, U.children || []), R.return = C, R);
          }
          function X(C, R, U, k, de) {
            return R === null || R.tag !== 7 ? (R = cl(U, C.mode, k, de), R.return = C, R) : (R = l(R, U), R.return = C, R);
          }
          function V(C, R, U) {
            if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
              return R = Zr("" + R, C.mode, U), R.return = C, R;
            if (typeof R == "object" && R !== null) {
              switch (R.$$typeof) {
                case O:
                  return U = du(R.type, R.key, R.props, null, C.mode, U), Ii(U, R), U.return = C, U;
                case B:
                  return R = Kr(R, C.mode, U), R.return = C, R;
                case ze:
                  return R = gl(R), V(C, R, U);
              }
              if (Pe(R) || nt(R))
                return R = cl(R, C.mode, U, null), R.return = C, R;
              if (typeof R.then == "function")
                return V(C, vu(R), U);
              if (R.$$typeof === ae)
                return V(C, pu(C, R), U);
              xu(C, R);
            }
            return null;
          }
          function q(C, R, U, k) {
            var de = R !== null ? R.key : null;
            if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
              return de !== null ? null : v(C, R, "" + U, k);
            if (typeof U == "object" && U !== null) {
              switch (U.$$typeof) {
                case O:
                  return U.key === de ? j(C, R, U, k) : null;
                case B:
                  return U.key === de ? D(C, R, U, k) : null;
                case ze:
                  return U = gl(U), q(C, R, U, k);
              }
              if (Pe(U) || nt(U))
                return de !== null ? null : X(C, R, U, k, null);
              if (typeof U.then == "function")
                return q(C, R, vu(U), k);
              if (U.$$typeof === ae)
                return q(C, R, pu(C, U), k);
              xu(C, U);
            }
            return null;
          }
          function L(C, R, U, k, de) {
            if (typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint")
              return C = C.get(U) || null, v(R, C, "" + k, de);
            if (typeof k == "object" && k !== null) {
              switch (k.$$typeof) {
                case O:
                  return C = C.get(k.key === null ? U : k.key) || null, j(R, C, k, de);
                case B:
                  return C = C.get(k.key === null ? U : k.key) || null, D(R, C, k, de);
                case ze:
                  return k = gl(k), L(C, R, U, k, de);
              }
              if (Pe(k) || nt(k))
                return C = C.get(U) || null, X(R, C, k, de, null);
              if (typeof k.then == "function")
                return L(C, R, U, vu(k), de);
              if (k.$$typeof === ae)
                return L(C, R, U, pu(R, k), de);
              xu(R, k);
            }
            return null;
          }
          function se(C, R, U, k) {
            for (var de = null, Me = null, oe = R, Ne = R = 0, we = null; oe !== null && Ne < U.length; Ne++) {
              oe.index > Ne ? (we = oe, oe = null) : we = oe.sibling;
              var Ue = q(C, oe, U[Ne], k);
              if (Ue === null) {
                oe === null && (oe = we);
                break;
              }
              e && oe && Ue.alternate === null && t(C, oe), R = i(Ue, R, Ne), Me === null ? de = Ue : Me.sibling = Ue, Me = Ue, oe = we;
            }
            if (Ne === U.length)
              return n(C, oe), Ae && In(C, Ne), de;
            if (oe === null) {
              for (; Ne < U.length; Ne++)
                oe = V(C, U[Ne], k), oe !== null && (R = i(oe, R, Ne), Me === null ? de = oe : Me.sibling = oe, Me = oe);
              return Ae && In(C, Ne), de;
            }
            for (oe = a(oe); Ne < U.length; Ne++)
              we = L(oe, C, Ne, U[Ne], k), we !== null && (e && we.alternate !== null && oe.delete(we.key === null ? Ne : we.key), R = i(we, R, Ne), Me === null ? de = we : Me.sibling = we, Me = we);
            return e && oe.forEach(function(Va) {
              return t(C, Va);
            }), Ae && In(C, Ne), de;
          }
          function me(C, R, U, k) {
            if (U == null)
              throw Error(o(151));
            for (var de = null, Me = null, oe = R, Ne = R = 0, we = null, Ue = U.next(); oe !== null && !Ue.done; Ne++, Ue = U.next()) {
              oe.index > Ne ? (we = oe, oe = null) : we = oe.sibling;
              var Va = q(C, oe, Ue.value, k);
              if (Va === null) {
                oe === null && (oe = we);
                break;
              }
              e && oe && Va.alternate === null && t(C, oe), R = i(Va, R, Ne), Me === null ? de = Va : Me.sibling = Va, Me = Va, oe = we;
            }
            if (Ue.done)
              return n(C, oe), Ae && In(C, Ne), de;
            if (oe === null) {
              for (; !Ue.done; Ne++, Ue = U.next())
                Ue = V(C, Ue.value, k), Ue !== null && (R = i(Ue, R, Ne), Me === null ? de = Ue : Me.sibling = Ue, Me = Ue);
              return Ae && In(C, Ne), de;
            }
            for (oe = a(oe); !Ue.done; Ne++, Ue = U.next())
              Ue = L(oe, C, Ne, Ue.value, k), Ue !== null && (e && Ue.alternate !== null && oe.delete(Ue.key === null ? Ne : Ue.key), R = i(Ue, R, Ne), Me === null ? de = Ue : Me.sibling = Ue, Me = Ue);
            return e && oe.forEach(function(E0) {
              return t(C, E0);
            }), Ae && In(C, Ne), de;
          }
          function Xe(C, R, U, k) {
            if (typeof U == "object" && U !== null && U.type === W && U.key === null && (U = U.props.children), typeof U == "object" && U !== null) {
              switch (U.$$typeof) {
                case O:
                  e: {
                    for (var de = U.key; R !== null; ) {
                      if (R.key === de) {
                        if (de = U.type, de === W) {
                          if (R.tag === 7) {
                            n(C, R.sibling), k = l(R, U.props.children), k.return = C, C = k;
                            break e;
                          }
                        } else if (R.elementType === de || typeof de == "object" && de !== null && de.$$typeof === ze && gl(de) === R.type) {
                          n(C, R.sibling), k = l(R, U.props), Ii(k, U), k.return = C, C = k;
                          break e;
                        }
                        n(C, R);
                        break;
                      } else
                        t(C, R);
                      R = R.sibling;
                    }
                    U.type === W ? (k = cl(U.props.children, C.mode, k, U.key), k.return = C, C = k) : (k = du(U.type, U.key, U.props, null, C.mode, k), Ii(k, U), k.return = C, C = k);
                  }
                  return f(C);
                case B:
                  e: {
                    for (de = U.key; R !== null; ) {
                      if (R.key === de)
                        if (R.tag === 4 && R.stateNode.containerInfo === U.containerInfo && R.stateNode.implementation === U.implementation) {
                          n(C, R.sibling), k = l(R, U.children || []), k.return = C, C = k;
                          break e;
                        } else {
                          n(C, R);
                          break;
                        }
                      else
                        t(C, R);
                      R = R.sibling;
                    }
                    k = Kr(U, C.mode, k), k.return = C, C = k;
                  }
                  return f(C);
                case ze:
                  return U = gl(U), Xe(C, R, U, k);
              }
              if (Pe(U))
                return se(C, R, U, k);
              if (nt(U)) {
                if (de = nt(U), typeof de != "function")
                  throw Error(o(150));
                return U = de.call(U), me(C, R, U, k);
              }
              if (typeof U.then == "function")
                return Xe(C, R, vu(U), k);
              if (U.$$typeof === ae)
                return Xe(C, R, pu(C, U), k);
              xu(C, U);
            }
            return typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint" ? (U = "" + U, R !== null && R.tag === 6 ? (n(C, R.sibling), k = l(R, U), k.return = C, C = k) : (n(C, R), k = Zr(U, C.mode, k), k.return = C, C = k), f(C)) : n(C, R);
          }
          return function(C, R, U, k) {
            try {
              Pi = 0;
              var de = Xe(C, R, U, k);
              return ni = null, de;
            } catch (oe) {
              if (oe === ti || oe === yu)
                throw oe;
              var Me = Zt(29, oe, null, C.mode);
              return Me.lanes = k, Me.return = C, Me;
            } finally {
            }
          };
        }
        var bl = Fc(true), Wc = Fc(false), Aa = false;
        function io(e) {
          e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
        }
        function so(e, t) {
          e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, callbacks: null });
        }
        function Ra(e) {
          return { lane: e, tag: 0, payload: null, callback: null, next: null };
        }
        function Oa(e, t, n) {
          var a = e.updateQueue;
          if (a === null)
            return null;
          if (a = a.shared, (De & 2) !== 0) {
            var l = a.pending;
            return l === null ? t.next = t : (t.next = l.next, l.next = t), a.pending = t, t = cu(e), Mc(e, null, n), t;
          }
          return fu(e, a, t, n), cu(e);
        }
        function es(e, t, n) {
          if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
            var a = t.lanes;
            a &= e.pendingLanes, n |= a, t.lanes = n, Xs(e, n);
          }
        }
        function uo(e, t) {
          var n = e.updateQueue, a = e.alternate;
          if (a !== null && (a = a.updateQueue, n === a)) {
            var l = null, i = null;
            if (n = n.firstBaseUpdate, n !== null) {
              do {
                var f = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
                i === null ? l = i = f : i = i.next = f, n = n.next;
              } while (n !== null);
              i === null ? l = i = t : i = i.next = t;
            } else
              l = i = t;
            n = { baseState: a.baseState, firstBaseUpdate: l, lastBaseUpdate: i, shared: a.shared, callbacks: a.callbacks }, e.updateQueue = n;
            return;
          }
          e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
        }
        var ro = false;
        function ts() {
          if (ro) {
            var e = ei;
            if (e !== null)
              throw e;
          }
        }
        function ns(e, t, n, a) {
          ro = false;
          var l = e.updateQueue;
          Aa = false;
          var i = l.firstBaseUpdate, f = l.lastBaseUpdate, v = l.shared.pending;
          if (v !== null) {
            l.shared.pending = null;
            var j = v, D = j.next;
            j.next = null, f === null ? i = D : f.next = D, f = j;
            var X = e.alternate;
            X !== null && (X = X.updateQueue, v = X.lastBaseUpdate, v !== f && (v === null ? X.firstBaseUpdate = D : v.next = D, X.lastBaseUpdate = j));
          }
          if (i !== null) {
            var V = l.baseState;
            f = 0, X = D = j = null, v = i;
            do {
              var q = v.lane & -536870913, L = q !== v.lane;
              if (L ? (Ee & q) === q : (a & q) === q) {
                q !== 0 && q === Il && (ro = true), X !== null && (X = X.next = { lane: 0, tag: v.tag, payload: v.payload, callback: null, next: null });
                e: {
                  var se = e, me = v;
                  q = t;
                  var Xe = n;
                  switch (me.tag) {
                    case 1:
                      if (se = me.payload, typeof se == "function") {
                        V = se.call(Xe, V, q);
                        break e;
                      }
                      V = se;
                      break e;
                    case 3:
                      se.flags = se.flags & -65537 | 128;
                    case 0:
                      if (se = me.payload, q = typeof se == "function" ? se.call(Xe, V, q) : se, q == null)
                        break e;
                      V = E({}, V, q);
                      break e;
                    case 2:
                      Aa = true;
                  }
                }
                q = v.callback, q !== null && (e.flags |= 64, L && (e.flags |= 8192), L = l.callbacks, L === null ? l.callbacks = [q] : L.push(q));
              } else
                L = { lane: q, tag: v.tag, payload: v.payload, callback: v.callback, next: null }, X === null ? (D = X = L, j = V) : X = X.next = L, f |= q;
              if (v = v.next, v === null) {
                if (v = l.shared.pending, v === null)
                  break;
                L = v, v = L.next, L.next = null, l.lastBaseUpdate = L, l.shared.pending = null;
              }
            } while (true);
            X === null && (j = V), l.baseState = j, l.firstBaseUpdate = D, l.lastBaseUpdate = X, i === null && (l.shared.lanes = 0), Da |= f, e.lanes = f, e.memoizedState = V;
          }
        }
        function $c(e, t) {
          if (typeof e != "function")
            throw Error(o(191, e));
          e.call(t);
        }
        function Pc(e, t) {
          var n = e.callbacks;
          if (n !== null)
            for (e.callbacks = null, e = 0; e < n.length; e++)
              $c(n[e], t);
        }
        var ai = T(null), Su = T(0);
        function Ic(e, t) {
          e = fa, G(Su, e), G(ai, t), fa = e | t.baseLanes;
        }
        function oo() {
          G(Su, fa), G(ai, ai.current);
        }
        function fo() {
          fa = Su.current, A(ai), A(Su);
        }
        var Kt = T(null), dn = null;
        function Ca(e) {
          var t = e.alternate;
          G(st, st.current & 1), G(Kt, e), dn === null && (t === null || ai.current !== null || t.memoizedState !== null) && (dn = e);
        }
        function co(e) {
          G(st, st.current), G(Kt, e), dn === null && (dn = e);
        }
        function ed(e) {
          e.tag === 22 ? (G(st, st.current), G(Kt, e), dn === null && (dn = e)) : za();
        }
        function za() {
          G(st, st.current), G(Kt, Kt.current);
        }
        function Jt(e) {
          A(Kt), dn === e && (dn = null), A(st);
        }
        var st = T(0);
        function _u(e) {
          for (var t = e; t !== null; ) {
            if (t.tag === 13) {
              var n = t.memoizedState;
              if (n !== null && (n = n.dehydrated, n === null || vf(n) || xf(n)))
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
        var na = 0, _e = null, Ye = null, ft = null, Nu = false, li = false, vl = false, ju = 0, as = 0, ii = null, gg = 0;
        function at() {
          throw Error(o(321));
        }
        function ho(e, t) {
          if (t === null)
            return false;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!Vt(e[n], t[n]))
              return false;
          return true;
        }
        function mo(e, t, n, a, l, i) {
          return na = i, _e = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Q.H = e === null || e.memoizedState === null ? qd : Ro, vl = false, i = n(a, l), vl = false, li && (i = nd(t, n, a, l)), td(e), i;
        }
        function td(e) {
          Q.H = ss;
          var t = Ye !== null && Ye.next !== null;
          if (na = 0, ft = Ye = _e = null, Nu = false, as = 0, ii = null, t)
            throw Error(o(300));
          e === null || ct || (e = e.dependencies, e !== null && mu(e) && (ct = true));
        }
        function nd(e, t, n, a) {
          _e = e;
          var l = 0;
          do {
            if (li && (ii = null), as = 0, li = false, 25 <= l)
              throw Error(o(301));
            if (l += 1, ft = Ye = null, e.updateQueue != null) {
              var i = e.updateQueue;
              i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
            }
            Q.H = Hd, i = t(n, a);
          } while (li);
          return i;
        }
        function yg() {
          var e = Q.H, t = e.useState()[0];
          return t = typeof t.then == "function" ? ls(t) : t, e = e.useState()[0], (Ye !== null ? Ye.memoizedState : null) !== e && (_e.flags |= 1024), t;
        }
        function po() {
          var e = ju !== 0;
          return ju = 0, e;
        }
        function go(e, t, n) {
          t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
        }
        function yo(e) {
          if (Nu) {
            for (e = e.memoizedState; e !== null; ) {
              var t = e.queue;
              t !== null && (t.pending = null), e = e.next;
            }
            Nu = false;
          }
          na = 0, ft = Ye = _e = null, li = false, as = ju = 0, ii = null;
        }
        function Mt() {
          var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
          return ft === null ? _e.memoizedState = ft = e : ft = ft.next = e, ft;
        }
        function ut() {
          if (Ye === null) {
            var e = _e.alternate;
            e = e !== null ? e.memoizedState : null;
          } else
            e = Ye.next;
          var t = ft === null ? _e.memoizedState : ft.next;
          if (t !== null)
            ft = t, Ye = e;
          else {
            if (e === null)
              throw _e.alternate === null ? Error(o(467)) : Error(o(310));
            Ye = e, e = { memoizedState: Ye.memoizedState, baseState: Ye.baseState, baseQueue: Ye.baseQueue, queue: Ye.queue, next: null }, ft === null ? _e.memoizedState = ft = e : ft = ft.next = e;
          }
          return ft;
        }
        function Tu() {
          return { lastEffect: null, events: null, stores: null, memoCache: null };
        }
        function ls(e) {
          var t = as;
          return as += 1, ii === null && (ii = []), e = Zc(ii, e, t), t = _e, (ft === null ? t.memoizedState : ft.next) === null && (t = t.alternate, Q.H = t === null || t.memoizedState === null ? qd : Ro), e;
        }
        function Eu(e) {
          if (e !== null && typeof e == "object") {
            if (typeof e.then == "function")
              return ls(e);
            if (e.$$typeof === ae)
              return Nt(e);
          }
          throw Error(o(438, String(e)));
        }
        function bo(e) {
          var t = null, n = _e.updateQueue;
          if (n !== null && (t = n.memoCache), t == null) {
            var a = _e.alternate;
            a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = { data: a.data.map(function(l) {
              return l.slice();
            }), index: 0 })));
          }
          if (t == null && (t = { data: [], index: 0 }), n === null && (n = Tu(), _e.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
            for (n = t.data[t.index] = Array(e), a = 0; a < e; a++)
              n[a] = Ut;
          return t.index++, n;
        }
        function aa(e, t) {
          return typeof t == "function" ? t(e) : t;
        }
        function wu(e) {
          var t = ut();
          return vo(t, Ye, e);
        }
        function vo(e, t, n) {
          var a = e.queue;
          if (a === null)
            throw Error(o(311));
          a.lastRenderedReducer = n;
          var l = e.baseQueue, i = a.pending;
          if (i !== null) {
            if (l !== null) {
              var f = l.next;
              l.next = i.next, i.next = f;
            }
            t.baseQueue = l = i, a.pending = null;
          }
          if (i = e.baseState, l === null)
            e.memoizedState = i;
          else {
            t = l.next;
            var v = f = null, j = null, D = t, X = false;
            do {
              var V = D.lane & -536870913;
              if (V !== D.lane ? (Ee & V) === V : (na & V) === V) {
                var q = D.revertLane;
                if (q === 0)
                  j !== null && (j = j.next = { lane: 0, revertLane: 0, gesture: null, action: D.action, hasEagerState: D.hasEagerState, eagerState: D.eagerState, next: null }), V === Il && (X = true);
                else if ((na & q) === q) {
                  D = D.next, q === Il && (X = true);
                  continue;
                } else
                  V = { lane: 0, revertLane: D.revertLane, gesture: null, action: D.action, hasEagerState: D.hasEagerState, eagerState: D.eagerState, next: null }, j === null ? (v = j = V, f = i) : j = j.next = V, _e.lanes |= q, Da |= q;
                V = D.action, vl && n(i, V), i = D.hasEagerState ? D.eagerState : n(i, V);
              } else
                q = { lane: V, revertLane: D.revertLane, gesture: D.gesture, action: D.action, hasEagerState: D.hasEagerState, eagerState: D.eagerState, next: null }, j === null ? (v = j = q, f = i) : j = j.next = q, _e.lanes |= V, Da |= V;
              D = D.next;
            } while (D !== null && D !== t);
            if (j === null ? f = i : j.next = v, !Vt(i, e.memoizedState) && (ct = true, X && (n = ei, n !== null)))
              throw n;
            e.memoizedState = i, e.baseState = f, e.baseQueue = j, a.lastRenderedState = i;
          }
          return l === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
        }
        function xo(e) {
          var t = ut(), n = t.queue;
          if (n === null)
            throw Error(o(311));
          n.lastRenderedReducer = e;
          var a = n.dispatch, l = n.pending, i = t.memoizedState;
          if (l !== null) {
            n.pending = null;
            var f = l = l.next;
            do
              i = e(i, f.action), f = f.next;
            while (f !== l);
            Vt(i, t.memoizedState) || (ct = true), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
          }
          return [i, a];
        }
        function ad(e, t, n) {
          var a = _e, l = ut(), i = Ae;
          if (i) {
            if (n === void 0)
              throw Error(o(407));
            n = n();
          } else
            n = t();
          var f = !Vt((Ye || l).memoizedState, n);
          if (f && (l.memoizedState = n, ct = true), l = l.queue, No(sd.bind(null, a, l, e), [e]), l.getSnapshot !== t || f || ft !== null && ft.memoizedState.tag & 1) {
            if (a.flags |= 2048, si(9, { destroy: void 0 }, id.bind(null, a, l, n, t), null), Ze === null)
              throw Error(o(349));
            i || (na & 127) !== 0 || ld(a, t, n);
          }
          return n;
        }
        function ld(e, t, n) {
          e.flags |= 16384, e = { getSnapshot: t, value: n }, t = _e.updateQueue, t === null ? (t = Tu(), _e.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
        }
        function id(e, t, n, a) {
          t.value = n, t.getSnapshot = a, ud(t) && rd(e);
        }
        function sd(e, t, n) {
          return n(function() {
            ud(t) && rd(e);
          });
        }
        function ud(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !Vt(e, n);
          } catch (a) {
            return true;
          }
        }
        function rd(e) {
          var t = fl(e, 2);
          t !== null && Qt(t, e, 2);
        }
        function So(e) {
          var t = Mt();
          if (typeof e == "function") {
            var n = e;
            if (e = n(), vl) {
              Gt(true);
              try {
                n();
              } finally {
                Gt(false);
              }
            }
          }
          return t.memoizedState = t.baseState = e, t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: aa, lastRenderedState: e }, t;
        }
        function od(e, t, n, a) {
          return e.baseState = n, vo(e, Ye, typeof a == "function" ? a : aa);
        }
        function bg(e, t, n, a, l) {
          if (Ou(e))
            throw Error(o(485));
          if (e = t.action, e !== null) {
            var i = { payload: l, action: e, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(f) {
              i.listeners.push(f);
            } };
            Q.T !== null ? n(true) : i.isTransition = false, a(i), n = t.pending, n === null ? (i.next = t.pending = i, fd(t, i)) : (i.next = n.next, t.pending = n.next = i);
          }
        }
        function fd(e, t) {
          var n = t.action, a = t.payload, l = e.state;
          if (t.isTransition) {
            var i = Q.T, f = {};
            Q.T = f;
            try {
              var v = n(l, a), j = Q.S;
              j !== null && j(f, v), cd(e, t, v);
            } catch (D) {
              _o(e, t, D);
            } finally {
              i !== null && f.types !== null && (i.types = f.types), Q.T = i;
            }
          } else
            try {
              i = n(l, a), cd(e, t, i);
            } catch (D) {
              _o(e, t, D);
            }
        }
        function cd(e, t, n) {
          n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(a) {
            dd(e, t, a);
          }, function(a) {
            return _o(e, t, a);
          }) : dd(e, t, n);
        }
        function dd(e, t, n) {
          t.status = "fulfilled", t.value = n, hd(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, fd(e, n)));
        }
        function _o(e, t, n) {
          var a = e.pending;
          if (e.pending = null, a !== null) {
            a = a.next;
            do
              t.status = "rejected", t.reason = n, hd(t), t = t.next;
            while (t !== a);
          }
          e.action = null;
        }
        function hd(e) {
          e = e.listeners;
          for (var t = 0; t < e.length; t++)
            (0, e[t])();
        }
        function md(e, t) {
          return t;
        }
        function pd(e, t) {
          if (Ae) {
            var n = Ze.formState;
            if (n !== null) {
              e: {
                var a = _e;
                if (Ae) {
                  if (We) {
                    t: {
                      for (var l = We, i = cn; l.nodeType !== 8; ) {
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
                      We = hn(l.nextSibling), a = l.data === "F!";
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
          return n = Mt(), n.memoizedState = n.baseState = t, a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: md, lastRenderedState: t }, n.queue = a, n = Ud.bind(null, _e, a), a.dispatch = n, a = So(false), i = Ao.bind(null, _e, false, a.queue), a = Mt(), l = { state: t, dispatch: null, action: e, pending: null }, a.queue = l, n = bg.bind(null, _e, l, i, n), l.dispatch = n, a.memoizedState = e, [t, n, false];
        }
        function gd(e) {
          var t = ut();
          return yd(t, Ye, e);
        }
        function yd(e, t, n) {
          if (t = vo(e, t, md)[0], e = wu(aa)[0], typeof t == "object" && t !== null && typeof t.then == "function")
            try {
              var a = ls(t);
            } catch (f) {
              throw f === ti ? yu : f;
            }
          else
            a = t;
          t = ut();
          var l = t.queue, i = l.dispatch;
          return n !== t.memoizedState && (_e.flags |= 2048, si(9, { destroy: void 0 }, vg.bind(null, l, n), null)), [a, i, e];
        }
        function vg(e, t) {
          e.action = t;
        }
        function bd(e) {
          var t = ut(), n = Ye;
          if (n !== null)
            return yd(t, n, e);
          ut(), t = t.memoizedState, n = ut();
          var a = n.queue.dispatch;
          return n.memoizedState = e, [t, a, false];
        }
        function si(e, t, n, a) {
          return e = { tag: e, create: n, deps: a, inst: t, next: null }, t = _e.updateQueue, t === null && (t = Tu(), _e.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e;
        }
        function vd() {
          return ut().memoizedState;
        }
        function Au(e, t, n, a) {
          var l = Mt();
          _e.flags |= e, l.memoizedState = si(1 | t, { destroy: void 0 }, n, a === void 0 ? null : a);
        }
        function Ru(e, t, n, a) {
          var l = ut();
          a = a === void 0 ? null : a;
          var i = l.memoizedState.inst;
          Ye !== null && a !== null && ho(a, Ye.memoizedState.deps) ? l.memoizedState = si(t, i, n, a) : (_e.flags |= e, l.memoizedState = si(1 | t, i, n, a));
        }
        function xd(e, t) {
          Au(8390656, 8, e, t);
        }
        function No(e, t) {
          Ru(2048, 8, e, t);
        }
        function xg(e) {
          _e.flags |= 4;
          var t = _e.updateQueue;
          if (t === null)
            t = Tu(), _e.updateQueue = t, t.events = [e];
          else {
            var n = t.events;
            n === null ? t.events = [e] : n.push(e);
          }
        }
        function Sd(e) {
          var t = ut().memoizedState;
          return xg({ ref: t, nextImpl: e }), function() {
            if ((De & 2) !== 0)
              throw Error(o(440));
            return t.impl.apply(void 0, arguments);
          };
        }
        function _d(e, t) {
          return Ru(4, 2, e, t);
        }
        function Nd(e, t) {
          return Ru(4, 4, e, t);
        }
        function jd(e, t) {
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
        function Td(e, t, n) {
          n = n != null ? n.concat([e]) : null, Ru(4, 4, jd.bind(null, t, e), n);
        }
        function jo() {
        }
        function Ed(e, t) {
          var n = ut();
          t = t === void 0 ? null : t;
          var a = n.memoizedState;
          return t !== null && ho(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e);
        }
        function wd(e, t) {
          var n = ut();
          t = t === void 0 ? null : t;
          var a = n.memoizedState;
          if (t !== null && ho(t, a[1]))
            return a[0];
          if (a = e(), vl) {
            Gt(true);
            try {
              e();
            } finally {
              Gt(false);
            }
          }
          return n.memoizedState = [a, t], a;
        }
        function To(e, t, n) {
          return n === void 0 || (na & 1073741824) !== 0 && (Ee & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = Ah(), _e.lanes |= e, Da |= e, n);
        }
        function Ad(e, t, n, a) {
          return Vt(n, t) ? n : ai.current !== null ? (e = To(e, n, a), Vt(e, t) || (ct = true), e) : (na & 42) === 0 || (na & 1073741824) !== 0 && (Ee & 261930) === 0 ? (ct = true, e.memoizedState = n) : (e = Ah(), _e.lanes |= e, Da |= e, t);
        }
        function Rd(e, t, n, a, l) {
          var i = ee.p;
          ee.p = i !== 0 && 8 > i ? i : 8;
          var f = Q.T, v = {};
          Q.T = v, Ao(e, false, t, n);
          try {
            var j = l(), D = Q.S;
            if (D !== null && D(v, j), j !== null && typeof j == "object" && typeof j.then == "function") {
              var X = pg(j, a);
              is(e, t, X, $t(e));
            } else
              is(e, t, a, $t(e));
          } catch (V) {
            is(e, t, { then: function() {
            }, status: "rejected", reason: V }, $t());
          } finally {
            ee.p = i, f !== null && v.types !== null && (f.types = v.types), Q.T = f;
          }
        }
        function Sg() {
        }
        function Eo(e, t, n, a) {
          if (e.tag !== 5)
            throw Error(o(476));
          var l = Od(e).queue;
          Rd(e, l, t, ce, n === null ? Sg : function() {
            return Cd(e), n(a);
          });
        }
        function Od(e) {
          var t = e.memoizedState;
          if (t !== null)
            return t;
          t = { memoizedState: ce, baseState: ce, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: aa, lastRenderedState: ce }, next: null };
          var n = {};
          return t.next = { memoizedState: n, baseState: n, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: aa, lastRenderedState: n }, next: null }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
        }
        function Cd(e) {
          var t = Od(e);
          t.next === null && (t = e.alternate.memoizedState), is(e, t.next.queue, {}, $t());
        }
        function wo() {
          return Nt(_s);
        }
        function zd() {
          return ut().memoizedState;
        }
        function Md() {
          return ut().memoizedState;
        }
        function _g(e) {
          for (var t = e.return; t !== null; ) {
            switch (t.tag) {
              case 24:
              case 3:
                var n = $t();
                e = Ra(n);
                var a = Oa(t, e, n);
                a !== null && (Qt(a, t, n), es(a, t, n)), t = { cache: to() }, e.payload = t;
                return;
            }
            t = t.return;
          }
        }
        function Ng(e, t, n) {
          var a = $t();
          n = { lane: a, revertLane: 0, gesture: null, action: n, hasEagerState: false, eagerState: null, next: null }, Ou(e) ? Dd(t, n) : (n = kr(e, t, n, a), n !== null && (Qt(n, e, a), Bd(n, t, a)));
        }
        function Ud(e, t, n) {
          var a = $t();
          is(e, t, n, a);
        }
        function is(e, t, n, a) {
          var l = { lane: a, revertLane: 0, gesture: null, action: n, hasEagerState: false, eagerState: null, next: null };
          if (Ou(e))
            Dd(t, l);
          else {
            var i = e.alternate;
            if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
              try {
                var f = t.lastRenderedState, v = i(f, n);
                if (l.hasEagerState = true, l.eagerState = v, Vt(v, f))
                  return fu(e, t, l, 0), Ze === null && ou(), false;
              } catch (j) {
              } finally {
              }
            if (n = kr(e, t, l, a), n !== null)
              return Qt(n, e, a), Bd(n, t, a), true;
          }
          return false;
        }
        function Ao(e, t, n, a) {
          if (a = { lane: 2, revertLane: uf(), gesture: null, action: a, hasEagerState: false, eagerState: null, next: null }, Ou(e)) {
            if (t)
              throw Error(o(479));
          } else
            t = kr(e, n, a, 2), t !== null && Qt(t, e, 2);
        }
        function Ou(e) {
          var t = e.alternate;
          return e === _e || t !== null && t === _e;
        }
        function Dd(e, t) {
          li = Nu = true;
          var n = e.pending;
          n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
        }
        function Bd(e, t, n) {
          if ((n & 4194048) !== 0) {
            var a = t.lanes;
            a &= e.pendingLanes, n |= a, t.lanes = n, Xs(e, n);
          }
        }
        var ss = { readContext: Nt, use: Eu, useCallback: at, useContext: at, useEffect: at, useImperativeHandle: at, useLayoutEffect: at, useInsertionEffect: at, useMemo: at, useReducer: at, useRef: at, useState: at, useDebugValue: at, useDeferredValue: at, useTransition: at, useSyncExternalStore: at, useId: at, useHostTransitionStatus: at, useFormState: at, useActionState: at, useOptimistic: at, useMemoCache: at, useCacheRefresh: at };
        ss.useEffectEvent = at;
        var qd = { readContext: Nt, use: Eu, useCallback: function(e, t) {
          return Mt().memoizedState = [e, t === void 0 ? null : t], e;
        }, useContext: Nt, useEffect: xd, useImperativeHandle: function(e, t, n) {
          n = n != null ? n.concat([e]) : null, Au(4194308, 4, jd.bind(null, t, e), n);
        }, useLayoutEffect: function(e, t) {
          return Au(4194308, 4, e, t);
        }, useInsertionEffect: function(e, t) {
          Au(4, 2, e, t);
        }, useMemo: function(e, t) {
          var n = Mt();
          t = t === void 0 ? null : t;
          var a = e();
          if (vl) {
            Gt(true);
            try {
              e();
            } finally {
              Gt(false);
            }
          }
          return n.memoizedState = [a, t], a;
        }, useReducer: function(e, t, n) {
          var a = Mt();
          if (n !== void 0) {
            var l = n(t);
            if (vl) {
              Gt(true);
              try {
                n(t);
              } finally {
                Gt(false);
              }
            }
          } else
            l = t;
          return a.memoizedState = a.baseState = l, e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: l }, a.queue = e, e = e.dispatch = Ng.bind(null, _e, e), [a.memoizedState, e];
        }, useRef: function(e) {
          var t = Mt();
          return e = { current: e }, t.memoizedState = e;
        }, useState: function(e) {
          e = So(e);
          var t = e.queue, n = Ud.bind(null, _e, t);
          return t.dispatch = n, [e.memoizedState, n];
        }, useDebugValue: jo, useDeferredValue: function(e, t) {
          var n = Mt();
          return To(n, e, t);
        }, useTransition: function() {
          var e = So(false);
          return e = Rd.bind(null, _e, e.queue, true, false), Mt().memoizedState = e, [false, e];
        }, useSyncExternalStore: function(e, t, n) {
          var a = _e, l = Mt();
          if (Ae) {
            if (n === void 0)
              throw Error(o(407));
            n = n();
          } else {
            if (n = t(), Ze === null)
              throw Error(o(349));
            (Ee & 127) !== 0 || ld(a, t, n);
          }
          l.memoizedState = n;
          var i = { value: n, getSnapshot: t };
          return l.queue = i, xd(sd.bind(null, a, i, e), [e]), a.flags |= 2048, si(9, { destroy: void 0 }, id.bind(null, a, i, n, t), null), n;
        }, useId: function() {
          var e = Mt(), t = Ze.identifierPrefix;
          if (Ae) {
            var n = qn, a = Bn;
            n = (a & ~(1 << 32 - wt(a) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = ju++, 0 < n && (t += "H" + n.toString(32)), t += "_";
          } else
            n = gg++, t = "_" + t + "r_" + n.toString(32) + "_";
          return e.memoizedState = t;
        }, useHostTransitionStatus: wo, useFormState: pd, useActionState: pd, useOptimistic: function(e) {
          var t = Mt();
          t.memoizedState = t.baseState = e;
          var n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
          return t.queue = n, t = Ao.bind(null, _e, true, n), n.dispatch = t, [e, t];
        }, useMemoCache: bo, useCacheRefresh: function() {
          return Mt().memoizedState = _g.bind(null, _e);
        }, useEffectEvent: function(e) {
          var t = Mt(), n = { impl: e };
          return t.memoizedState = n, function() {
            if ((De & 2) !== 0)
              throw Error(o(440));
            return n.impl.apply(void 0, arguments);
          };
        } }, Ro = { readContext: Nt, use: Eu, useCallback: Ed, useContext: Nt, useEffect: No, useImperativeHandle: Td, useInsertionEffect: _d, useLayoutEffect: Nd, useMemo: wd, useReducer: wu, useRef: vd, useState: function() {
          return wu(aa);
        }, useDebugValue: jo, useDeferredValue: function(e, t) {
          var n = ut();
          return Ad(n, Ye.memoizedState, e, t);
        }, useTransition: function() {
          var e = wu(aa)[0], t = ut().memoizedState;
          return [typeof e == "boolean" ? e : ls(e), t];
        }, useSyncExternalStore: ad, useId: zd, useHostTransitionStatus: wo, useFormState: gd, useActionState: gd, useOptimistic: function(e, t) {
          var n = ut();
          return od(n, Ye, e, t);
        }, useMemoCache: bo, useCacheRefresh: Md };
        Ro.useEffectEvent = Sd;
        var Hd = { readContext: Nt, use: Eu, useCallback: Ed, useContext: Nt, useEffect: No, useImperativeHandle: Td, useInsertionEffect: _d, useLayoutEffect: Nd, useMemo: wd, useReducer: xo, useRef: vd, useState: function() {
          return xo(aa);
        }, useDebugValue: jo, useDeferredValue: function(e, t) {
          var n = ut();
          return Ye === null ? To(n, e, t) : Ad(n, Ye.memoizedState, e, t);
        }, useTransition: function() {
          var e = xo(aa)[0], t = ut().memoizedState;
          return [typeof e == "boolean" ? e : ls(e), t];
        }, useSyncExternalStore: ad, useId: zd, useHostTransitionStatus: wo, useFormState: bd, useActionState: bd, useOptimistic: function(e, t) {
          var n = ut();
          return Ye !== null ? od(n, Ye, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
        }, useMemoCache: bo, useCacheRefresh: Md };
        Hd.useEffectEvent = Sd;
        function Oo(e, t, n, a) {
          t = e.memoizedState, n = n(a, t), n = n == null ? t : E({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
        }
        var Co = { enqueueSetState: function(e, t, n) {
          e = e._reactInternals;
          var a = $t(), l = Ra(a);
          l.payload = t, n != null && (l.callback = n), t = Oa(e, l, a), t !== null && (Qt(t, e, a), es(t, e, a));
        }, enqueueReplaceState: function(e, t, n) {
          e = e._reactInternals;
          var a = $t(), l = Ra(a);
          l.tag = 1, l.payload = t, n != null && (l.callback = n), t = Oa(e, l, a), t !== null && (Qt(t, e, a), es(t, e, a));
        }, enqueueForceUpdate: function(e, t) {
          e = e._reactInternals;
          var n = $t(), a = Ra(n);
          a.tag = 2, t != null && (a.callback = t), t = Oa(e, a, n), t !== null && (Qt(t, e, n), es(t, e, n));
        } };
        function Ld(e, t, n, a, l, i, f) {
          return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, i, f) : t.prototype && t.prototype.isPureReactComponent ? !Zi(n, a) || !Zi(l, i) : true;
        }
        function Yd(e, t, n, a) {
          e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && Co.enqueueReplaceState(t, t.state, null);
        }
        function xl(e, t) {
          var n = t;
          if ("ref" in t) {
            n = {};
            for (var a in t)
              a !== "ref" && (n[a] = t[a]);
          }
          if (e = e.defaultProps) {
            n === t && (n = E({}, n));
            for (var l in e)
              n[l] === void 0 && (n[l] = e[l]);
          }
          return n;
        }
        function Qd(e) {
          ru(e);
        }
        function Xd(e) {
          console.error(e);
        }
        function Gd(e) {
          ru(e);
        }
        function Cu(e, t) {
          try {
            var n = e.onUncaughtError;
            n(t.value, { componentStack: t.stack });
          } catch (a) {
            setTimeout(function() {
              throw a;
            });
          }
        }
        function kd(e, t, n) {
          try {
            var a = e.onCaughtError;
            a(n.value, { componentStack: n.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
          } catch (l) {
            setTimeout(function() {
              throw l;
            });
          }
        }
        function zo(e, t, n) {
          return n = Ra(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
            Cu(e, t);
          }, n;
        }
        function Vd(e) {
          return e = Ra(e), e.tag = 3, e;
        }
        function Zd(e, t, n, a) {
          var l = n.type.getDerivedStateFromError;
          if (typeof l == "function") {
            var i = a.value;
            e.payload = function() {
              return l(i);
            }, e.callback = function() {
              kd(t, n, a);
            };
          }
          var f = n.stateNode;
          f !== null && typeof f.componentDidCatch == "function" && (e.callback = function() {
            kd(t, n, a), typeof l != "function" && (Ba === null ? Ba = /* @__PURE__ */ new Set([this]) : Ba.add(this));
            var v = a.stack;
            this.componentDidCatch(a.value, { componentStack: v !== null ? v : "" });
          });
        }
        function jg(e, t, n, a, l) {
          if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
            if (t = n.alternate, t !== null && Pl(t, n, l, true), n = Kt.current, n !== null) {
              switch (n.tag) {
                case 31:
                case 13:
                  return dn === null ? Gu() : n.alternate === null && lt === 0 && (lt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = l, a === bu ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), af(e, a, l)), false;
                case 22:
                  return n.flags |= 65536, a === bu ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([a]) }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), af(e, a, l)), false;
              }
              throw Error(o(435, n.tag));
            }
            return af(e, a, l), Gu(), false;
          }
          if (Ae)
            return t = Kt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = l, a !== Wr && (e = Error(o(422), { cause: a }), Fi(rn(e, n)))) : (a !== Wr && (t = Error(o(423), { cause: a }), Fi(rn(t, n))), e = e.current.alternate, e.flags |= 65536, l &= -l, e.lanes |= l, a = rn(a, n), l = zo(e.stateNode, a, l), uo(e, l), lt !== 4 && (lt = 2)), false;
          var i = Error(o(520), { cause: a });
          if (i = rn(i, n), ms === null ? ms = [i] : ms.push(i), lt !== 4 && (lt = 2), t === null)
            return true;
          a = rn(a, n), n = t;
          do {
            switch (n.tag) {
              case 3:
                return n.flags |= 65536, e = l & -l, n.lanes |= e, e = zo(n.stateNode, a, e), uo(n, e), false;
              case 1:
                if (t = n.type, i = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Ba === null || !Ba.has(i))))
                  return n.flags |= 65536, l &= -l, n.lanes |= l, l = Vd(l), Zd(l, e, n, a), uo(n, l), false;
            }
            n = n.return;
          } while (n !== null);
          return false;
        }
        var Mo = Error(o(461)), ct = false;
        function jt(e, t, n, a) {
          t.child = e === null ? Wc(t, null, n, a) : bl(t, e.child, n, a);
        }
        function Kd(e, t, n, a, l) {
          n = n.render;
          var i = t.ref;
          if ("ref" in a) {
            var f = {};
            for (var v in a)
              v !== "ref" && (f[v] = a[v]);
          } else
            f = a;
          return ml(t), a = mo(e, t, n, f, i, l), v = po(), e !== null && !ct ? (go(e, t, l), la(e, t, l)) : (Ae && v && Jr(t), t.flags |= 1, jt(e, t, a, l), t.child);
        }
        function Jd(e, t, n, a, l) {
          if (e === null) {
            var i = n.type;
            return typeof i == "function" && !Vr(i) && i.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = i, Fd(e, t, i, a, l)) : (e = du(n.type, null, a, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
          }
          if (i = e.child, !Qo(e, l)) {
            var f = i.memoizedProps;
            if (n = n.compare, n = n !== null ? n : Zi, n(f, a) && e.ref === t.ref)
              return la(e, t, l);
          }
          return t.flags |= 1, e = Pn(i, a), e.ref = t.ref, e.return = t, t.child = e;
        }
        function Fd(e, t, n, a, l) {
          if (e !== null) {
            var i = e.memoizedProps;
            if (Zi(i, a) && e.ref === t.ref)
              if (ct = false, t.pendingProps = a = i, Qo(e, l))
                (e.flags & 131072) !== 0 && (ct = true);
              else
                return t.lanes = e.lanes, la(e, t, l);
          }
          return Uo(e, t, n, a, l);
        }
        function Wd(e, t, n, a) {
          var l = a.children, i = e !== null ? e.memoizedState : null;
          if (e === null && t.stateNode === null && (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), a.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
              if (i = i !== null ? i.baseLanes | n : n, e !== null) {
                for (a = t.child = e.child, l = 0; a !== null; )
                  l = l | a.lanes | a.childLanes, a = a.sibling;
                a = l & ~i;
              } else
                a = 0, t.child = null;
              return $d(e, t, i, n, a);
            }
            if ((n & 536870912) !== 0)
              t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && gu(t, i !== null ? i.cachePool : null), i !== null ? Ic(t, i) : oo(), ed(t);
            else
              return a = t.lanes = 536870912, $d(e, t, i !== null ? i.baseLanes | n : n, n, a);
          } else
            i !== null ? (gu(t, i.cachePool), Ic(t, i), za(), t.memoizedState = null) : (e !== null && gu(t, null), oo(), za());
          return jt(e, t, l, n), t.child;
        }
        function us(e, t) {
          return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), t.sibling;
        }
        function $d(e, t, n, a, l) {
          var i = ao();
          return i = i === null ? null : { parent: ot._currentValue, pool: i }, t.memoizedState = { baseLanes: n, cachePool: i }, e !== null && gu(t, null), oo(), ed(t), e !== null && Pl(e, t, a, true), t.childLanes = l, null;
        }
        function zu(e, t) {
          return t = Uu({ mode: t.mode, children: t.children }, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
        }
        function Pd(e, t, n) {
          return bl(t, e.child, null, n), e = zu(t, t.pendingProps), e.flags |= 2, Jt(t), t.memoizedState = null, e;
        }
        function Tg(e, t, n) {
          var a = t.pendingProps, l = (t.flags & 128) !== 0;
          if (t.flags &= -129, e === null) {
            if (Ae) {
              if (a.mode === "hidden")
                return e = zu(t, a), t.lanes = 536870912, us(null, e);
              if (co(t), (e = We) ? (e = fm(e, cn), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = { dehydrated: e, treeContext: ja !== null ? { id: Bn, overflow: qn } : null, retryLane: 536870912, hydrationErrors: null }, n = Dc(e), n.return = t, t.child = n, _t = t, We = null)) : e = null, e === null)
                throw Ea(t);
              return t.lanes = 536870912, null;
            }
            return zu(t, a);
          }
          var i = e.memoizedState;
          if (i !== null) {
            var f = i.dehydrated;
            if (co(t), l)
              if (t.flags & 256)
                t.flags &= -257, t = Pd(e, t, n);
              else if (t.memoizedState !== null)
                t.child = e.child, t.flags |= 128, t = null;
              else
                throw Error(o(558));
            else if (ct || Pl(e, t, n, false), l = (n & e.childLanes) !== 0, ct || l) {
              if (a = Ze, a !== null && (f = Gs(a, n), f !== 0 && f !== i.retryLane))
                throw i.retryLane = f, fl(e, f), Qt(a, e, f), Mo;
              Gu(), t = Pd(e, t, n);
            } else
              e = i.treeContext, We = hn(f.nextSibling), _t = t, Ae = true, Ta = null, cn = false, e !== null && Hc(t, e), t = zu(t, a), t.flags |= 4096;
            return t;
          }
          return e = Pn(e.child, { mode: a.mode, children: a.children }), e.ref = t.ref, t.child = e, e.return = t, e;
        }
        function Mu(e, t) {
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
          return ml(t), n = mo(e, t, n, a, void 0, l), a = po(), e !== null && !ct ? (go(e, t, l), la(e, t, l)) : (Ae && a && Jr(t), t.flags |= 1, jt(e, t, n, l), t.child);
        }
        function Id(e, t, n, a, l, i) {
          return ml(t), t.updateQueue = null, n = nd(t, a, n, l), td(e), a = po(), e !== null && !ct ? (go(e, t, i), la(e, t, i)) : (Ae && a && Jr(t), t.flags |= 1, jt(e, t, n, i), t.child);
        }
        function eh(e, t, n, a, l) {
          if (ml(t), t.stateNode === null) {
            var i = Jl, f = n.contextType;
            typeof f == "object" && f !== null && (i = Nt(f)), i = new n(a, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Co, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = a, i.state = t.memoizedState, i.refs = {}, io(t), f = n.contextType, i.context = typeof f == "object" && f !== null ? Nt(f) : Jl, i.state = t.memoizedState, f = n.getDerivedStateFromProps, typeof f == "function" && (Oo(t, n, f, a), i.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (f = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), f !== i.state && Co.enqueueReplaceState(i, i.state, null), ns(t, a, i, l), ts(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = true;
          } else if (e === null) {
            i = t.stateNode;
            var v = t.memoizedProps, j = xl(n, v);
            i.props = j;
            var D = i.context, X = n.contextType;
            f = Jl, typeof X == "object" && X !== null && (f = Nt(X));
            var V = n.getDerivedStateFromProps;
            X = typeof V == "function" || typeof i.getSnapshotBeforeUpdate == "function", v = t.pendingProps !== v, X || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (v || D !== f) && Yd(t, i, a, f), Aa = false;
            var q = t.memoizedState;
            i.state = q, ns(t, a, i, l), ts(), D = t.memoizedState, v || q !== D || Aa ? (typeof V == "function" && (Oo(t, n, V, a), D = t.memoizedState), (j = Aa || Ld(t, n, j, a, q, D, f)) ? (X || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = D), i.props = a, i.state = D, i.context = f, a = j) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = false);
          } else {
            i = t.stateNode, so(e, t), f = t.memoizedProps, X = xl(n, f), i.props = X, V = t.pendingProps, q = i.context, D = n.contextType, j = Jl, typeof D == "object" && D !== null && (j = Nt(D)), v = n.getDerivedStateFromProps, (D = typeof v == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (f !== V || q !== j) && Yd(t, i, a, j), Aa = false, q = t.memoizedState, i.state = q, ns(t, a, i, l), ts();
            var L = t.memoizedState;
            f !== V || q !== L || Aa || e !== null && e.dependencies !== null && mu(e.dependencies) ? (typeof v == "function" && (Oo(t, n, v, a), L = t.memoizedState), (X = Aa || Ld(t, n, X, a, q, L, j) || e !== null && e.dependencies !== null && mu(e.dependencies)) ? (D || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, L, j), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(a, L, j)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || f === e.memoizedProps && q === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && q === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = L), i.props = a, i.state = L, i.context = j, a = X) : (typeof i.componentDidUpdate != "function" || f === e.memoizedProps && q === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && q === e.memoizedState || (t.flags |= 1024), a = false);
          }
          return i = a, Mu(e, t), a = (t.flags & 128) !== 0, i || a ? (i = t.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && a ? (t.child = bl(t, e.child, null, l), t.child = bl(t, null, n, l)) : jt(e, t, n, l), t.memoizedState = i.state, e = t.child) : e = la(e, t, l), e;
        }
        function th(e, t, n, a) {
          return dl(), t.flags |= 256, jt(e, t, n, a), t.child;
        }
        var Do = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
        function Bo(e) {
          return { baseLanes: e, cachePool: kc() };
        }
        function qo(e, t, n) {
          return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Wt), e;
        }
        function nh(e, t, n) {
          var a = t.pendingProps, l = false, i = (t.flags & 128) !== 0, f;
          if ((f = i) || (f = e !== null && e.memoizedState === null ? false : (st.current & 2) !== 0), f && (l = true, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
            if (Ae) {
              if (l ? Ca(t) : za(), (e = We) ? (e = fm(e, cn), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = { dehydrated: e, treeContext: ja !== null ? { id: Bn, overflow: qn } : null, retryLane: 536870912, hydrationErrors: null }, n = Dc(e), n.return = t, t.child = n, _t = t, We = null)) : e = null, e === null)
                throw Ea(t);
              return xf(e) ? t.lanes = 32 : t.lanes = 536870912, null;
            }
            var v = a.children;
            return a = a.fallback, l ? (za(), l = t.mode, v = Uu({ mode: "hidden", children: v }, l), a = cl(a, l, n, null), v.return = t, a.return = t, v.sibling = a, t.child = v, a = t.child, a.memoizedState = Bo(n), a.childLanes = qo(e, f, n), t.memoizedState = Do, us(null, a)) : (Ca(t), Ho(t, v));
          }
          var j = e.memoizedState;
          if (j !== null && (v = j.dehydrated, v !== null)) {
            if (i)
              t.flags & 256 ? (Ca(t), t.flags &= -257, t = Lo(e, t, n)) : t.memoizedState !== null ? (za(), t.child = e.child, t.flags |= 128, t = null) : (za(), v = a.fallback, l = t.mode, a = Uu({ mode: "visible", children: a.children }, l), v = cl(v, l, n, null), v.flags |= 2, a.return = t, v.return = t, a.sibling = v, t.child = a, bl(t, e.child, null, n), a = t.child, a.memoizedState = Bo(n), a.childLanes = qo(e, f, n), t.memoizedState = Do, t = us(null, a));
            else if (Ca(t), xf(v)) {
              if (f = v.nextSibling && v.nextSibling.dataset, f)
                var D = f.dgst;
              f = D, a = Error(o(419)), a.stack = "", a.digest = f, Fi({ value: a, source: null, stack: null }), t = Lo(e, t, n);
            } else if (ct || Pl(e, t, n, false), f = (n & e.childLanes) !== 0, ct || f) {
              if (f = Ze, f !== null && (a = Gs(f, n), a !== 0 && a !== j.retryLane))
                throw j.retryLane = a, fl(e, a), Qt(f, e, a), Mo;
              vf(v) || Gu(), t = Lo(e, t, n);
            } else
              vf(v) ? (t.flags |= 192, t.child = e.child, t = null) : (e = j.treeContext, We = hn(v.nextSibling), _t = t, Ae = true, Ta = null, cn = false, e !== null && Hc(t, e), t = Ho(t, a.children), t.flags |= 4096);
            return t;
          }
          return l ? (za(), v = a.fallback, l = t.mode, j = e.child, D = j.sibling, a = Pn(j, { mode: "hidden", children: a.children }), a.subtreeFlags = j.subtreeFlags & 65011712, D !== null ? v = Pn(D, v) : (v = cl(v, l, n, null), v.flags |= 2), v.return = t, a.return = t, a.sibling = v, t.child = a, us(null, a), a = t.child, v = e.child.memoizedState, v === null ? v = Bo(n) : (l = v.cachePool, l !== null ? (j = ot._currentValue, l = l.parent !== j ? { parent: j, pool: j } : l) : l = kc(), v = { baseLanes: v.baseLanes | n, cachePool: l }), a.memoizedState = v, a.childLanes = qo(e, f, n), t.memoizedState = Do, us(e.child, a)) : (Ca(t), n = e.child, e = n.sibling, n = Pn(n, { mode: "visible", children: a.children }), n.return = t, n.sibling = null, e !== null && (f = t.deletions, f === null ? (t.deletions = [e], t.flags |= 16) : f.push(e)), t.child = n, t.memoizedState = null, n);
        }
        function Ho(e, t) {
          return t = Uu({ mode: "visible", children: t }, e.mode), t.return = e, e.child = t;
        }
        function Uu(e, t) {
          return e = Zt(22, e, null, t), e.lanes = 0, e;
        }
        function Lo(e, t, n) {
          return bl(t, e.child, null, n), e = Ho(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
        }
        function ah(e, t, n) {
          e.lanes |= t;
          var a = e.alternate;
          a !== null && (a.lanes |= t), Ir(e.return, t, n);
        }
        function Yo(e, t, n, a, l, i) {
          var f = e.memoizedState;
          f === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: a, tail: n, tailMode: l, treeForkCount: i } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = a, f.tail = n, f.tailMode = l, f.treeForkCount = i);
        }
        function lh(e, t, n) {
          var a = t.pendingProps, l = a.revealOrder, i = a.tail;
          a = a.children;
          var f = st.current, v = (f & 2) !== 0;
          if (v ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, G(st, f), jt(e, t, a, n), a = Ae ? Ji : 0, !v && e !== null && (e.flags & 128) !== 0)
            e:
              for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                  e.memoizedState !== null && ah(e, n, t);
                else if (e.tag === 19)
                  ah(e, n, t);
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
                e = n.alternate, e !== null && _u(e) === null && (l = n), n = n.sibling;
              n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Yo(t, false, l, n, i, a);
              break;
            case "backwards":
            case "unstable_legacy-backwards":
              for (n = null, l = t.child, t.child = null; l !== null; ) {
                if (e = l.alternate, e !== null && _u(e) === null) {
                  t.child = l;
                  break;
                }
                e = l.sibling, l.sibling = n, n = l, l = e;
              }
              Yo(t, true, n, null, i, a);
              break;
            case "together":
              Yo(t, false, null, null, void 0, a);
              break;
            default:
              t.memoizedState = null;
          }
          return t.child;
        }
        function la(e, t, n) {
          if (e !== null && (t.dependencies = e.dependencies), Da |= t.lanes, (n & t.childLanes) === 0)
            if (e !== null) {
              if (Pl(e, t, n, false), (n & t.childLanes) === 0)
                return null;
            } else
              return null;
          if (e !== null && t.child !== e.child)
            throw Error(o(153));
          if (t.child !== null) {
            for (e = t.child, n = Pn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
              e = e.sibling, n = n.sibling = Pn(e, e.pendingProps), n.return = t;
            n.sibling = null;
          }
          return t.child;
        }
        function Qo(e, t) {
          return (e.lanes & t) !== 0 ? true : (e = e.dependencies, !!(e !== null && mu(e)));
        }
        function Eg(e, t, n) {
          switch (t.tag) {
            case 3:
              Be(t, t.stateNode.containerInfo), wa(t, ot, e.memoizedState.cache), dl();
              break;
            case 27:
            case 5:
              Xn(t);
              break;
            case 4:
              Be(t, t.stateNode.containerInfo);
              break;
            case 10:
              wa(t, t.type, t.memoizedProps.value);
              break;
            case 31:
              if (t.memoizedState !== null)
                return t.flags |= 128, co(t), null;
              break;
            case 13:
              var a = t.memoizedState;
              if (a !== null)
                return a.dehydrated !== null ? (Ca(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? nh(e, t, n) : (Ca(t), e = la(e, t, n), e !== null ? e.sibling : null);
              Ca(t);
              break;
            case 19:
              var l = (e.flags & 128) !== 0;
              if (a = (n & t.childLanes) !== 0, a || (Pl(e, t, n, false), a = (n & t.childLanes) !== 0), l) {
                if (a)
                  return lh(e, t, n);
                t.flags |= 128;
              }
              if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), G(st, st.current), a)
                break;
              return null;
            case 22:
              return t.lanes = 0, Wd(e, t, n, t.pendingProps);
            case 24:
              wa(t, ot, e.memoizedState.cache);
          }
          return la(e, t, n);
        }
        function ih(e, t, n) {
          if (e !== null)
            if (e.memoizedProps !== t.pendingProps)
              ct = true;
            else {
              if (!Qo(e, n) && (t.flags & 128) === 0)
                return ct = false, Eg(e, t, n);
              ct = (e.flags & 131072) !== 0;
            }
          else
            ct = false, Ae && (t.flags & 1048576) !== 0 && qc(t, Ji, t.index);
          switch (t.lanes = 0, t.tag) {
            case 16:
              e: {
                var a = t.pendingProps;
                if (e = gl(t.elementType), t.type = e, typeof e == "function")
                  Vr(e) ? (a = xl(e, a), t.tag = 1, t = eh(null, t, e, a, n)) : (t.tag = 0, t = Uo(null, t, e, a, n));
                else {
                  if (e != null) {
                    var l = e.$$typeof;
                    if (l === he) {
                      t.tag = 11, t = Kd(null, t, e, a, n);
                      break e;
                    } else if (l === ie) {
                      t.tag = 14, t = Jd(null, t, e, a, n);
                      break e;
                    }
                  }
                  throw t = Ce(e) || e, Error(o(306, t, ""));
                }
              }
              return t;
            case 0:
              return Uo(e, t, t.type, t.pendingProps, n);
            case 1:
              return a = t.type, l = xl(a, t.pendingProps), eh(e, t, a, l, n);
            case 3:
              e: {
                if (Be(t, t.stateNode.containerInfo), e === null)
                  throw Error(o(387));
                a = t.pendingProps;
                var i = t.memoizedState;
                l = i.element, so(e, t), ns(t, a, null, n);
                var f = t.memoizedState;
                if (a = f.cache, wa(t, ot, a), a !== i.cache && eo(t, [ot], n, true), ts(), a = f.element, i.isDehydrated)
                  if (i = { element: a, isDehydrated: false, cache: f.cache }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                    t = th(e, t, a, n);
                    break e;
                  } else if (a !== l) {
                    l = rn(Error(o(424)), t), Fi(l), t = th(e, t, a, n);
                    break e;
                  } else {
                    switch (e = t.stateNode.containerInfo, e.nodeType) {
                      case 9:
                        e = e.body;
                        break;
                      default:
                        e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                    }
                    for (We = hn(e.firstChild), _t = t, Ae = true, Ta = null, cn = true, n = Wc(t, null, a, n), t.child = n; n; )
                      n.flags = n.flags & -3 | 4096, n = n.sibling;
                  }
                else {
                  if (dl(), a === l) {
                    t = la(e, t, n);
                    break e;
                  }
                  jt(e, t, a, n);
                }
                t = t.child;
              }
              return t;
            case 26:
              return Mu(e, t), e === null ? (n = gm(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : Ae || (n = t.type, e = t.pendingProps, a = Wu(ye.current).createElement(n), a[mt] = t, a[bt] = e, Tt(a, n, e), et(a), t.stateNode = a) : t.memoizedState = gm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
            case 27:
              return Xn(t), e === null && Ae && (a = t.stateNode = hm(t.type, t.pendingProps, ye.current), _t = t, cn = true, l = We, Ya(t.type) ? (Sf = l, We = hn(a.firstChild)) : We = l), jt(e, t, t.pendingProps.children, n), Mu(e, t), e === null && (t.flags |= 4194304), t.child;
            case 5:
              return e === null && Ae && ((l = a = We) && (a = n0(a, t.type, t.pendingProps, cn), a !== null ? (t.stateNode = a, _t = t, We = hn(a.firstChild), cn = false, l = true) : l = false), l || Ea(t)), Xn(t), l = t.type, i = t.pendingProps, f = e !== null ? e.memoizedProps : null, a = i.children, gf(l, i) ? a = null : f !== null && gf(l, f) && (t.flags |= 32), t.memoizedState !== null && (l = mo(e, t, yg, null, null, n), _s._currentValue = l), Mu(e, t), jt(e, t, a, n), t.child;
            case 6:
              return e === null && Ae && ((e = n = We) && (n = a0(n, t.pendingProps, cn), n !== null ? (t.stateNode = n, _t = t, We = null, e = true) : e = false), e || Ea(t)), null;
            case 13:
              return nh(e, t, n);
            case 4:
              return Be(t, t.stateNode.containerInfo), a = t.pendingProps, e === null ? t.child = bl(t, null, a, n) : jt(e, t, a, n), t.child;
            case 11:
              return Kd(e, t, t.type, t.pendingProps, n);
            case 7:
              return jt(e, t, t.pendingProps, n), t.child;
            case 8:
              return jt(e, t, t.pendingProps.children, n), t.child;
            case 12:
              return jt(e, t, t.pendingProps.children, n), t.child;
            case 10:
              return a = t.pendingProps, wa(t, t.type, a.value), jt(e, t, a.children, n), t.child;
            case 9:
              return l = t.type._context, a = t.pendingProps.children, ml(t), l = Nt(l), a = a(l), t.flags |= 1, jt(e, t, a, n), t.child;
            case 14:
              return Jd(e, t, t.type, t.pendingProps, n);
            case 15:
              return Fd(e, t, t.type, t.pendingProps, n);
            case 19:
              return lh(e, t, n);
            case 31:
              return Tg(e, t, n);
            case 22:
              return Wd(e, t, n, t.pendingProps);
            case 24:
              return ml(t), a = Nt(ot), e === null ? (l = ao(), l === null && (l = Ze, i = to(), l.pooledCache = i, i.refCount++, i !== null && (l.pooledCacheLanes |= n), l = i), t.memoizedState = { parent: a, cache: l }, io(t), wa(t, ot, l)) : ((e.lanes & n) !== 0 && (so(e, t), ns(t, null, null, n), ts()), l = e.memoizedState, i = t.memoizedState, l.parent !== a ? (l = { parent: a, cache: a }, t.memoizedState = l, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = l), wa(t, ot, a)) : (a = i.cache, wa(t, ot, a), a !== l.cache && eo(t, [ot], n, true))), jt(e, t, t.pendingProps.children, n), t.child;
            case 29:
              throw t.pendingProps;
          }
          throw Error(o(156, t.tag));
        }
        function ia(e) {
          e.flags |= 4;
        }
        function Xo(e, t, n, a, l) {
          if ((t = (e.mode & 32) !== 0) && (t = false), t) {
            if (e.flags |= 16777216, (l & 335544128) === l)
              if (e.stateNode.complete)
                e.flags |= 8192;
              else if (zh())
                e.flags |= 8192;
              else
                throw yl = bu, lo;
          } else
            e.flags &= -16777217;
        }
        function sh(e, t) {
          if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
            e.flags &= -16777217;
          else if (e.flags |= 16777216, !Sm(t))
            if (zh())
              e.flags |= 8192;
            else
              throw yl = bu, lo;
        }
        function Du(e, t) {
          t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Ys() : 536870912, e.lanes |= t, fi |= t);
        }
        function rs(e, t) {
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
        function $e(e) {
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
          switch (Fr(t), t.tag) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return $e(t), null;
            case 1:
              return $e(t), null;
            case 3:
              return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), ta(ot), Je(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && ($l(t) ? ia(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, $r())), $e(t), null;
            case 26:
              var l = t.type, i = t.memoizedState;
              return e === null ? (ia(t), i !== null ? ($e(t), sh(t, i)) : ($e(t), Xo(t, l, null, a, n))) : i ? i !== e.memoizedState ? (ia(t), $e(t), sh(t, i)) : ($e(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && ia(t), $e(t), Xo(t, l, e, a, n)), null;
            case 27:
              if (Et(t), n = ye.current, l = t.type, e !== null && t.stateNode != null)
                e.memoizedProps !== a && ia(t);
              else {
                if (!a) {
                  if (t.stateNode === null)
                    throw Error(o(166));
                  return $e(t), null;
                }
                e = Z.current, $l(t) ? Lc(t) : (e = hm(l, a, n), t.stateNode = e, ia(t));
              }
              return $e(t), null;
            case 5:
              if (Et(t), l = t.type, e !== null && t.stateNode != null)
                e.memoizedProps !== a && ia(t);
              else {
                if (!a) {
                  if (t.stateNode === null)
                    throw Error(o(166));
                  return $e(t), null;
                }
                if (i = Z.current, $l(t))
                  Lc(t);
                else {
                  var f = Wu(ye.current);
                  switch (i) {
                    case 1:
                      i = f.createElementNS("http://www.w3.org/2000/svg", l);
                      break;
                    case 2:
                      i = f.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                      break;
                    default:
                      switch (l) {
                        case "svg":
                          i = f.createElementNS("http://www.w3.org/2000/svg", l);
                          break;
                        case "math":
                          i = f.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                          break;
                        case "script":
                          i = f.createElement("div"), i.innerHTML = "<script><\/script>", i = i.removeChild(i.firstChild);
                          break;
                        case "select":
                          i = typeof a.is == "string" ? f.createElement("select", { is: a.is }) : f.createElement("select"), a.multiple ? i.multiple = true : a.size && (i.size = a.size);
                          break;
                        default:
                          i = typeof a.is == "string" ? f.createElement(l, { is: a.is }) : f.createElement(l);
                      }
                  }
                  i[mt] = t, i[bt] = a;
                  e:
                    for (f = t.child; f !== null; ) {
                      if (f.tag === 5 || f.tag === 6)
                        i.appendChild(f.stateNode);
                      else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                        f.child.return = f, f = f.child;
                        continue;
                      }
                      if (f === t)
                        break e;
                      for (; f.sibling === null; ) {
                        if (f.return === null || f.return === t)
                          break e;
                        f = f.return;
                      }
                      f.sibling.return = f.return, f = f.sibling;
                    }
                  t.stateNode = i;
                  e:
                    switch (Tt(i, l, a), l) {
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
                  a && ia(t);
                }
              }
              return $e(t), Xo(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
            case 6:
              if (e && t.stateNode != null)
                e.memoizedProps !== a && ia(t);
              else {
                if (typeof a != "string" && t.stateNode === null)
                  throw Error(o(166));
                if (e = ye.current, $l(t)) {
                  if (e = t.stateNode, n = t.memoizedProps, a = null, l = _t, l !== null)
                    switch (l.tag) {
                      case 27:
                      case 5:
                        a = l.memoizedProps;
                    }
                  e[mt] = t, e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === true || nm(e.nodeValue, n)), e || Ea(t, true);
                } else
                  e = Wu(e).createTextNode(a), e[mt] = t, t.stateNode = e;
              }
              return $e(t), null;
            case 31:
              if (n = t.memoizedState, e === null || e.memoizedState !== null) {
                if (a = $l(t), n !== null) {
                  if (e === null) {
                    if (!a)
                      throw Error(o(318));
                    if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e)
                      throw Error(o(557));
                    e[mt] = t;
                  } else
                    dl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                  $e(t), e = false;
                } else
                  n = $r(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = true;
                if (!e)
                  return t.flags & 256 ? (Jt(t), t) : (Jt(t), null);
                if ((t.flags & 128) !== 0)
                  throw Error(o(558));
              }
              return $e(t), null;
            case 13:
              if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (l = $l(t), a !== null && a.dehydrated !== null) {
                  if (e === null) {
                    if (!l)
                      throw Error(o(318));
                    if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l)
                      throw Error(o(317));
                    l[mt] = t;
                  } else
                    dl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                  $e(t), l = false;
                } else
                  l = $r(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), l = true;
                if (!l)
                  return t.flags & 256 ? (Jt(t), t) : (Jt(t), null);
              }
              return Jt(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = a !== null, e = e !== null && e.memoizedState !== null, n && (a = t.child, l = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (l = a.alternate.memoizedState.cachePool.pool), i = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool), i !== l && (a.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), Du(t, t.updateQueue), $e(t), null);
            case 4:
              return Je(), e === null && cf(t.stateNode.containerInfo), $e(t), null;
            case 10:
              return ta(t.type), $e(t), null;
            case 19:
              if (A(st), a = t.memoizedState, a === null)
                return $e(t), null;
              if (l = (t.flags & 128) !== 0, i = a.rendering, i === null)
                if (l)
                  rs(a, false);
                else {
                  if (lt !== 0 || e !== null && (e.flags & 128) !== 0)
                    for (e = t.child; e !== null; ) {
                      if (i = _u(e), i !== null) {
                        for (t.flags |= 128, rs(a, false), e = i.updateQueue, t.updateQueue = e, Du(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                          Uc(n, e), n = n.sibling;
                        return G(st, st.current & 1 | 2), Ae && In(t, a.treeForkCount), t.child;
                      }
                      e = e.sibling;
                    }
                  a.tail !== null && Ot() > Yu && (t.flags |= 128, l = true, rs(a, false), t.lanes = 4194304);
                }
              else {
                if (!l)
                  if (e = _u(i), e !== null) {
                    if (t.flags |= 128, l = true, e = e.updateQueue, t.updateQueue = e, Du(t, e), rs(a, true), a.tail === null && a.tailMode === "hidden" && !i.alternate && !Ae)
                      return $e(t), null;
                  } else
                    2 * Ot() - a.renderingStartTime > Yu && n !== 536870912 && (t.flags |= 128, l = true, rs(a, false), t.lanes = 4194304);
                a.isBackwards ? (i.sibling = t.child, t.child = i) : (e = a.last, e !== null ? e.sibling = i : t.child = i, a.last = i);
              }
              return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = Ot(), e.sibling = null, n = st.current, G(st, l ? n & 1 | 2 : n & 1), Ae && In(t, a.treeForkCount), e) : ($e(t), null);
            case 22:
            case 23:
              return Jt(t), fo(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : $e(t), n = t.updateQueue, n !== null && Du(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), e !== null && A(pl), null;
            case 24:
              return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), ta(ot), $e(t), null;
            case 25:
              return null;
            case 30:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function Ag(e, t) {
          switch (Fr(t), t.tag) {
            case 1:
              return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
              return ta(ot), Je(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
            case 26:
            case 27:
            case 5:
              return Et(t), null;
            case 31:
              if (t.memoizedState !== null) {
                if (Jt(t), t.alternate === null)
                  throw Error(o(340));
                dl();
              }
              return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 13:
              if (Jt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                  throw Error(o(340));
                dl();
              }
              return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
              return A(st), null;
            case 4:
              return Je(), null;
            case 10:
              return ta(t.type), null;
            case 22:
            case 23:
              return Jt(t), fo(), e !== null && A(pl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 24:
              return ta(ot), null;
            case 25:
              return null;
            default:
              return null;
          }
        }
        function uh(e, t) {
          switch (Fr(t), t.tag) {
            case 3:
              ta(ot), Je();
              break;
            case 26:
            case 27:
            case 5:
              Et(t);
              break;
            case 4:
              Je();
              break;
            case 31:
              t.memoizedState !== null && Jt(t);
              break;
            case 13:
              Jt(t);
              break;
            case 19:
              A(st);
              break;
            case 10:
              ta(t.type);
              break;
            case 22:
            case 23:
              Jt(t), fo(), e !== null && A(pl);
              break;
            case 24:
              ta(ot);
          }
        }
        function os(e, t) {
          try {
            var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
            if (a !== null) {
              var l = a.next;
              n = l;
              do {
                if ((n.tag & e) === e) {
                  a = void 0;
                  var i = n.create, f = n.inst;
                  a = i(), f.destroy = a;
                }
                n = n.next;
              } while (n !== l);
            }
          } catch (v) {
            He(t, t.return, v);
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
                  var f = a.inst, v = f.destroy;
                  if (v !== void 0) {
                    f.destroy = void 0, l = t;
                    var j = n, D = v;
                    try {
                      D();
                    } catch (X) {
                      He(l, j, X);
                    }
                  }
                }
                a = a.next;
              } while (a !== i);
            }
          } catch (X) {
            He(t, t.return, X);
          }
        }
        function rh(e) {
          var t = e.updateQueue;
          if (t !== null) {
            var n = e.stateNode;
            try {
              Pc(t, n);
            } catch (a) {
              He(e, e.return, a);
            }
          }
        }
        function oh(e, t, n) {
          n.props = xl(e.type, e.memoizedProps), n.state = e.memoizedState;
          try {
            n.componentWillUnmount();
          } catch (a) {
            He(e, t, a);
          }
        }
        function fs(e, t) {
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
        function Hn(e, t) {
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
        function fh(e) {
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
        function Go(e, t, n) {
          try {
            var a = e.stateNode;
            Wg(a, e.type, n, t), a[bt] = t;
          } catch (l) {
            He(e, e.return, l);
          }
        }
        function ch(e) {
          return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ya(e.type) || e.tag === 4;
        }
        function ko(e) {
          e:
            for (; ; ) {
              for (; e.sibling === null; ) {
                if (e.return === null || ch(e.return))
                  return null;
                e = e.return;
              }
              for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if (e.tag === 27 && Ya(e.type) || e.flags & 2 || e.child === null || e.tag === 4)
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
            e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = en));
          else if (a !== 4 && (a === 27 && Ya(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
            for (Vo(e, t, n), e = e.sibling; e !== null; )
              Vo(e, t, n), e = e.sibling;
        }
        function Bu(e, t, n) {
          var a = e.tag;
          if (a === 5 || a === 6)
            e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (a !== 4 && (a === 27 && Ya(e.type) && (n = e.stateNode), e = e.child, e !== null))
            for (Bu(e, t, n), e = e.sibling; e !== null; )
              Bu(e, t, n), e = e.sibling;
        }
        function dh(e) {
          var t = e.stateNode, n = e.memoizedProps;
          try {
            for (var a = e.type, l = t.attributes; l.length; )
              t.removeAttributeNode(l[0]);
            Tt(t, a, n), t[mt] = e, t[bt] = n;
          } catch (i) {
            He(e, e.return, i);
          }
        }
        var sa = false, dt = false, Zo = false, hh = typeof WeakSet == "function" ? WeakSet : Set, St = null;
        function Rg(e, t) {
          if (e = e.containerInfo, mf = ar, e = Tc(e), Hr(e)) {
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
                  } catch (me) {
                    n = null;
                    break e;
                  }
                  var f = 0, v = -1, j = -1, D = 0, X = 0, V = e, q = null;
                  t:
                    for (; ; ) {
                      for (var L; V !== n || l !== 0 && V.nodeType !== 3 || (v = f + l), V !== i || a !== 0 && V.nodeType !== 3 || (j = f + a), V.nodeType === 3 && (f += V.nodeValue.length), (L = V.firstChild) !== null; )
                        q = V, V = L;
                      for (; ; ) {
                        if (V === e)
                          break t;
                        if (q === n && ++D === l && (v = f), q === i && ++X === a && (j = f), (L = V.nextSibling) !== null)
                          break;
                        V = q, q = V.parentNode;
                      }
                      V = L;
                    }
                  n = v === -1 || j === -1 ? null : { start: v, end: j };
                } else
                  n = null;
              }
            n = n || { start: 0, end: 0 };
          } else
            n = null;
          for (pf = { focusedElem: e, selectionRange: n }, ar = false, St = t; St !== null; )
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
                        var se = xl(n.type, l);
                        e = a.getSnapshotBeforeUpdate(se, i), a.__reactInternalSnapshotBeforeUpdate = e;
                      } catch (me) {
                        He(n, n.return, me);
                      }
                    }
                    break;
                  case 3:
                    if ((e & 1024) !== 0) {
                      if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9)
                        bf(e);
                      else if (n === 1)
                        switch (e.nodeName) {
                          case "HEAD":
                          case "HTML":
                          case "BODY":
                            bf(e);
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
        function mh(e, t, n) {
          var a = n.flags;
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              ra(e, n), a & 4 && os(5, n);
              break;
            case 1:
              if (ra(e, n), a & 4)
                if (e = n.stateNode, t === null)
                  try {
                    e.componentDidMount();
                  } catch (f) {
                    He(n, n.return, f);
                  }
                else {
                  var l = xl(n.type, t.memoizedProps);
                  t = t.memoizedState;
                  try {
                    e.componentDidUpdate(l, t, e.__reactInternalSnapshotBeforeUpdate);
                  } catch (f) {
                    He(n, n.return, f);
                  }
                }
              a & 64 && rh(n), a & 512 && fs(n, n.return);
              break;
            case 3:
              if (ra(e, n), a & 64 && (e = n.updateQueue, e !== null)) {
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
                  Pc(e, t);
                } catch (f) {
                  He(n, n.return, f);
                }
              }
              break;
            case 27:
              t === null && a & 4 && dh(n);
            case 26:
            case 5:
              ra(e, n), t === null && a & 4 && fh(n), a & 512 && fs(n, n.return);
              break;
            case 12:
              ra(e, n);
              break;
            case 31:
              ra(e, n), a & 4 && yh(e, n);
              break;
            case 13:
              ra(e, n), a & 4 && bh(e, n), a & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Hg.bind(null, n), l0(e, n))));
              break;
            case 22:
              if (a = n.memoizedState !== null || sa, !a) {
                t = t !== null && t.memoizedState !== null || dt, l = sa;
                var i = dt;
                sa = a, (dt = t) && !i ? oa(e, n, (n.subtreeFlags & 8772) !== 0) : ra(e, n), sa = l, dt = i;
              }
              break;
            case 30:
              break;
            default:
              ra(e, n);
          }
        }
        function ph(e) {
          var t = e.alternate;
          t !== null && (e.alternate = null, ph(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Mi(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
        }
        var Ie = null, qt = false;
        function ua(e, t, n) {
          for (n = n.child; n !== null; )
            gh(e, t, n), n = n.sibling;
        }
        function gh(e, t, n) {
          if (Ct && typeof Ct.onCommitFiberUnmount == "function")
            try {
              Ct.onCommitFiberUnmount(Wa, n);
            } catch (i) {
            }
          switch (n.tag) {
            case 26:
              dt || Hn(n, t), ua(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
              break;
            case 27:
              dt || Hn(n, t);
              var a = Ie, l = qt;
              Ya(n.type) && (Ie = n.stateNode, qt = false), ua(e, t, n), vs(n.stateNode), Ie = a, qt = l;
              break;
            case 5:
              dt || Hn(n, t);
            case 6:
              if (a = Ie, l = qt, Ie = null, ua(e, t, n), Ie = a, qt = l, Ie !== null)
                if (qt)
                  try {
                    (Ie.nodeType === 9 ? Ie.body : Ie.nodeName === "HTML" ? Ie.ownerDocument.body : Ie).removeChild(n.stateNode);
                  } catch (i) {
                    He(n, t, i);
                  }
                else
                  try {
                    Ie.removeChild(n.stateNode);
                  } catch (i) {
                    He(n, t, i);
                  }
              break;
            case 18:
              Ie !== null && (qt ? (e = Ie, rm(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), bi(e)) : rm(Ie, n.stateNode));
              break;
            case 4:
              a = Ie, l = qt, Ie = n.stateNode.containerInfo, qt = true, ua(e, t, n), Ie = a, qt = l;
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              Ma(2, n, t), dt || Ma(4, n, t), ua(e, t, n);
              break;
            case 1:
              dt || (Hn(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function" && oh(n, t, a)), ua(e, t, n);
              break;
            case 21:
              ua(e, t, n);
              break;
            case 22:
              dt = (a = dt) || n.memoizedState !== null, ua(e, t, n), dt = a;
              break;
            default:
              ua(e, t, n);
          }
        }
        function yh(e, t) {
          if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
            e = e.dehydrated;
            try {
              bi(e);
            } catch (n) {
              He(t, t.return, n);
            }
          }
        }
        function bh(e, t) {
          if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
            try {
              bi(e);
            } catch (n) {
              He(t, t.return, n);
            }
        }
        function Og(e) {
          switch (e.tag) {
            case 31:
            case 13:
            case 19:
              var t = e.stateNode;
              return t === null && (t = e.stateNode = new hh()), t;
            case 22:
              return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new hh()), t;
            default:
              throw Error(o(435, e.tag));
          }
        }
        function qu(e, t) {
          var n = Og(e);
          t.forEach(function(a) {
            if (!n.has(a)) {
              n.add(a);
              var l = Lg.bind(null, e, a);
              a.then(l, l);
            }
          });
        }
        function Ht(e, t) {
          var n = t.deletions;
          if (n !== null)
            for (var a = 0; a < n.length; a++) {
              var l = n[a], i = e, f = t, v = f;
              e:
                for (; v !== null; ) {
                  switch (v.tag) {
                    case 27:
                      if (Ya(v.type)) {
                        Ie = v.stateNode, qt = false;
                        break e;
                      }
                      break;
                    case 5:
                      Ie = v.stateNode, qt = false;
                      break e;
                    case 3:
                    case 4:
                      Ie = v.stateNode.containerInfo, qt = true;
                      break e;
                  }
                  v = v.return;
                }
              if (Ie === null)
                throw Error(o(160));
              gh(i, f, l), Ie = null, qt = false, i = l.alternate, i !== null && (i.return = null), l.return = null;
            }
          if (t.subtreeFlags & 13886)
            for (t = t.child; t !== null; )
              vh(t, e), t = t.sibling;
        }
        var vn = null;
        function vh(e, t) {
          var n = e.alternate, a = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              Ht(t, e), Lt(e), a & 4 && (Ma(3, e, e.return), os(3, e), Ma(5, e, e.return));
              break;
            case 1:
              Ht(t, e), Lt(e), a & 512 && (dt || n === null || Hn(n, n.return)), a & 64 && sa && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
              break;
            case 26:
              var l = vn;
              if (Ht(t, e), Lt(e), a & 512 && (dt || n === null || Hn(n, n.return)), a & 4) {
                var i = n !== null ? n.memoizedState : null;
                if (a = e.memoizedState, n === null)
                  if (a === null)
                    if (e.stateNode === null) {
                      e: {
                        a = e.type, n = e.memoizedProps, l = l.ownerDocument || l;
                        t:
                          switch (a) {
                            case "title":
                              i = l.getElementsByTagName("title")[0], (!i || i[On] || i[mt] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = l.createElement(a), l.head.insertBefore(i, l.querySelector("head > title"))), Tt(i, a, n), i[mt] = e, et(i), a = i;
                              break e;
                            case "link":
                              var f = vm("link", "href", l).get(a + (n.href || ""));
                              if (f) {
                                for (var v = 0; v < f.length; v++)
                                  if (i = f[v], i.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && i.getAttribute("rel") === (n.rel == null ? null : n.rel) && i.getAttribute("title") === (n.title == null ? null : n.title) && i.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                                    f.splice(v, 1);
                                    break t;
                                  }
                              }
                              i = l.createElement(a), Tt(i, a, n), l.head.appendChild(i);
                              break;
                            case "meta":
                              if (f = vm("meta", "content", l).get(a + (n.content || ""))) {
                                for (v = 0; v < f.length; v++)
                                  if (i = f[v], i.getAttribute("content") === (n.content == null ? null : "" + n.content) && i.getAttribute("name") === (n.name == null ? null : n.name) && i.getAttribute("property") === (n.property == null ? null : n.property) && i.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && i.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                                    f.splice(v, 1);
                                    break t;
                                  }
                              }
                              i = l.createElement(a), Tt(i, a, n), l.head.appendChild(i);
                              break;
                            default:
                              throw Error(o(468, a));
                          }
                        i[mt] = e, et(i), a = i;
                      }
                      e.stateNode = a;
                    } else
                      xm(l, e.type, e.stateNode);
                  else
                    e.stateNode = bm(l, a, e.memoizedProps);
                else
                  i !== a ? (i === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : i.count--, a === null ? xm(l, e.type, e.stateNode) : bm(l, a, e.memoizedProps)) : a === null && e.stateNode !== null && Go(e, e.memoizedProps, n.memoizedProps);
              }
              break;
            case 27:
              Ht(t, e), Lt(e), a & 512 && (dt || n === null || Hn(n, n.return)), n !== null && a & 4 && Go(e, e.memoizedProps, n.memoizedProps);
              break;
            case 5:
              if (Ht(t, e), Lt(e), a & 512 && (dt || n === null || Hn(n, n.return)), e.flags & 32) {
                l = e.stateNode;
                try {
                  Zn(l, "");
                } catch (se) {
                  He(e, e.return, se);
                }
              }
              a & 4 && e.stateNode != null && (l = e.memoizedProps, Go(e, l, n !== null ? n.memoizedProps : l)), a & 1024 && (Zo = true);
              break;
            case 6:
              if (Ht(t, e), Lt(e), a & 4) {
                if (e.stateNode === null)
                  throw Error(o(162));
                a = e.memoizedProps, n = e.stateNode;
                try {
                  n.nodeValue = a;
                } catch (se) {
                  He(e, e.return, se);
                }
              }
              break;
            case 3:
              if (Iu = null, l = vn, vn = $u(t.containerInfo), Ht(t, e), vn = l, Lt(e), a & 4 && n !== null && n.memoizedState.isDehydrated)
                try {
                  bi(t.containerInfo);
                } catch (se) {
                  He(e, e.return, se);
                }
              Zo && (Zo = false, xh(e));
              break;
            case 4:
              a = vn, vn = $u(e.stateNode.containerInfo), Ht(t, e), Lt(e), vn = a;
              break;
            case 12:
              Ht(t, e), Lt(e);
              break;
            case 31:
              Ht(t, e), Lt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, qu(e, a)));
              break;
            case 13:
              Ht(t, e), Lt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Lu = Ot()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, qu(e, a)));
              break;
            case 22:
              l = e.memoizedState !== null;
              var j = n !== null && n.memoizedState !== null, D = sa, X = dt;
              if (sa = D || l, dt = X || j, Ht(t, e), dt = X, sa = D, Lt(e), a & 8192)
                e:
                  for (t = e.stateNode, t._visibility = l ? t._visibility & -2 : t._visibility | 1, l && (n === null || j || sa || dt || Sl(e)), n = null, t = e; ; ) {
                    if (t.tag === 5 || t.tag === 26) {
                      if (n === null) {
                        j = n = t;
                        try {
                          if (i = j.stateNode, l)
                            f = i.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                          else {
                            v = j.stateNode;
                            var V = j.memoizedProps.style, q = V != null && V.hasOwnProperty("display") ? V.display : null;
                            v.style.display = q == null || typeof q == "boolean" ? "" : ("" + q).trim();
                          }
                        } catch (se) {
                          He(j, j.return, se);
                        }
                      }
                    } else if (t.tag === 6) {
                      if (n === null) {
                        j = t;
                        try {
                          j.stateNode.nodeValue = l ? "" : j.memoizedProps;
                        } catch (se) {
                          He(j, j.return, se);
                        }
                      }
                    } else if (t.tag === 18) {
                      if (n === null) {
                        j = t;
                        try {
                          var L = j.stateNode;
                          l ? om(L, true) : om(j.stateNode, false);
                        } catch (se) {
                          He(j, j.return, se);
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
              a & 4 && (a = e.updateQueue, a !== null && (n = a.retryQueue, n !== null && (a.retryQueue = null, qu(e, n))));
              break;
            case 19:
              Ht(t, e), Lt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, qu(e, a)));
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
                if (ch(a)) {
                  n = a;
                  break;
                }
                a = a.return;
              }
              if (n == null)
                throw Error(o(160));
              switch (n.tag) {
                case 27:
                  var l = n.stateNode, i = ko(e);
                  Bu(e, i, l);
                  break;
                case 5:
                  var f = n.stateNode;
                  n.flags & 32 && (Zn(f, ""), n.flags &= -33);
                  var v = ko(e);
                  Bu(e, v, f);
                  break;
                case 3:
                case 4:
                  var j = n.stateNode.containerInfo, D = ko(e);
                  Vo(e, D, j);
                  break;
                default:
                  throw Error(o(161));
              }
            } catch (X) {
              He(e, e.return, X);
            }
            e.flags &= -3;
          }
          t & 4096 && (e.flags &= -4097);
        }
        function xh(e) {
          if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null; ) {
              var t = e;
              xh(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
            }
        }
        function ra(e, t) {
          if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null; )
              mh(e, t.alternate, t), t = t.sibling;
        }
        function Sl(e) {
          for (e = e.child; e !== null; ) {
            var t = e;
            switch (t.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Ma(4, t, t.return), Sl(t);
                break;
              case 1:
                Hn(t, t.return);
                var n = t.stateNode;
                typeof n.componentWillUnmount == "function" && oh(t, t.return, n), Sl(t);
                break;
              case 27:
                vs(t.stateNode);
              case 26:
              case 5:
                Hn(t, t.return), Sl(t);
                break;
              case 22:
                t.memoizedState === null && Sl(t);
                break;
              case 30:
                Sl(t);
                break;
              default:
                Sl(t);
            }
            e = e.sibling;
          }
        }
        function oa(e, t, n) {
          for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
            var a = t.alternate, l = e, i = t, f = i.flags;
            switch (i.tag) {
              case 0:
              case 11:
              case 15:
                oa(l, i, n), os(4, i);
                break;
              case 1:
                if (oa(l, i, n), a = i, l = a.stateNode, typeof l.componentDidMount == "function")
                  try {
                    l.componentDidMount();
                  } catch (D) {
                    He(a, a.return, D);
                  }
                if (a = i, l = a.updateQueue, l !== null) {
                  var v = a.stateNode;
                  try {
                    var j = l.shared.hiddenCallbacks;
                    if (j !== null)
                      for (l.shared.hiddenCallbacks = null, l = 0; l < j.length; l++)
                        $c(j[l], v);
                  } catch (D) {
                    He(a, a.return, D);
                  }
                }
                n && f & 64 && rh(i), fs(i, i.return);
                break;
              case 27:
                dh(i);
              case 26:
              case 5:
                oa(l, i, n), n && a === null && f & 4 && fh(i), fs(i, i.return);
                break;
              case 12:
                oa(l, i, n);
                break;
              case 31:
                oa(l, i, n), n && f & 4 && yh(l, i);
                break;
              case 13:
                oa(l, i, n), n && f & 4 && bh(l, i);
                break;
              case 22:
                i.memoizedState === null && oa(l, i, n), fs(i, i.return);
                break;
              case 30:
                break;
              default:
                oa(l, i, n);
            }
            t = t.sibling;
          }
        }
        function Ko(e, t) {
          var n = null;
          e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Wi(n));
        }
        function Jo(e, t) {
          e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Wi(e));
        }
        function xn(e, t, n, a) {
          if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
              Sh(e, t, n, a), t = t.sibling;
        }
        function Sh(e, t, n, a) {
          var l = t.flags;
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              xn(e, t, n, a), l & 2048 && os(9, t);
              break;
            case 1:
              xn(e, t, n, a);
              break;
            case 3:
              xn(e, t, n, a), l & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Wi(e)));
              break;
            case 12:
              if (l & 2048) {
                xn(e, t, n, a), e = t.stateNode;
                try {
                  var i = t.memoizedProps, f = i.id, v = i.onPostCommit;
                  typeof v == "function" && v(f, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
                } catch (j) {
                  He(t, t.return, j);
                }
              } else
                xn(e, t, n, a);
              break;
            case 31:
              xn(e, t, n, a);
              break;
            case 13:
              xn(e, t, n, a);
              break;
            case 23:
              break;
            case 22:
              i = t.stateNode, f = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? xn(e, t, n, a) : cs(e, t) : i._visibility & 2 ? xn(e, t, n, a) : (i._visibility |= 2, ui(e, t, n, a, (t.subtreeFlags & 10256) !== 0 || false)), l & 2048 && Ko(f, t);
              break;
            case 24:
              xn(e, t, n, a), l & 2048 && Jo(t.alternate, t);
              break;
            default:
              xn(e, t, n, a);
          }
        }
        function ui(e, t, n, a, l) {
          for (l = l && ((t.subtreeFlags & 10256) !== 0 || false), t = t.child; t !== null; ) {
            var i = e, f = t, v = n, j = a, D = f.flags;
            switch (f.tag) {
              case 0:
              case 11:
              case 15:
                ui(i, f, v, j, l), os(8, f);
                break;
              case 23:
                break;
              case 22:
                var X = f.stateNode;
                f.memoizedState !== null ? X._visibility & 2 ? ui(i, f, v, j, l) : cs(i, f) : (X._visibility |= 2, ui(i, f, v, j, l)), l && D & 2048 && Ko(f.alternate, f);
                break;
              case 24:
                ui(i, f, v, j, l), l && D & 2048 && Jo(f.alternate, f);
                break;
              default:
                ui(i, f, v, j, l);
            }
            t = t.sibling;
          }
        }
        function cs(e, t) {
          if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) {
              var n = e, a = t, l = a.flags;
              switch (a.tag) {
                case 22:
                  cs(n, a), l & 2048 && Ko(a.alternate, a);
                  break;
                case 24:
                  cs(n, a), l & 2048 && Jo(a.alternate, a);
                  break;
                default:
                  cs(n, a);
              }
              t = t.sibling;
            }
        }
        var ds = 8192;
        function ri(e, t, n) {
          if (e.subtreeFlags & ds)
            for (e = e.child; e !== null; )
              _h(e, t, n), e = e.sibling;
        }
        function _h(e, t, n) {
          switch (e.tag) {
            case 26:
              ri(e, t, n), e.flags & ds && e.memoizedState !== null && g0(n, vn, e.memoizedState, e.memoizedProps);
              break;
            case 5:
              ri(e, t, n);
              break;
            case 3:
            case 4:
              var a = vn;
              vn = $u(e.stateNode.containerInfo), ri(e, t, n), vn = a;
              break;
            case 22:
              e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = ds, ds = 16777216, ri(e, t, n), ds = a) : ri(e, t, n));
              break;
            default:
              ri(e, t, n);
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
                St = a, Th(a, e);
              }
            Nh(e);
          }
          if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
              jh(e), e = e.sibling;
        }
        function jh(e) {
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
              e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Hu(e)) : hs(e);
              break;
            default:
              hs(e);
          }
        }
        function Hu(e) {
          var t = e.deletions;
          if ((e.flags & 16) !== 0) {
            if (t !== null)
              for (var n = 0; n < t.length; n++) {
                var a = t[n];
                St = a, Th(a, e);
              }
            Nh(e);
          }
          for (e = e.child; e !== null; ) {
            switch (t = e, t.tag) {
              case 0:
              case 11:
              case 15:
                Ma(8, t, t.return), Hu(t);
                break;
              case 22:
                n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Hu(t));
                break;
              default:
                Hu(t);
            }
            e = e.sibling;
          }
        }
        function Th(e, t) {
          for (; St !== null; ) {
            var n = St;
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
              a.return = n, St = a;
            else
              e:
                for (n = e; St !== null; ) {
                  a = St;
                  var l = a.sibling, i = a.return;
                  if (ph(a), a === n) {
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
        var Cg = { getCacheForType: function(e) {
          var t = Nt(ot), n = t.data.get(e);
          return n === void 0 && (n = e(), t.data.set(e, n)), n;
        }, cacheSignal: function() {
          return Nt(ot).controller.signal;
        } }, zg = typeof WeakMap == "function" ? WeakMap : Map, De = 0, Ze = null, je = null, Ee = 0, qe = 0, Ft = null, Ua = false, oi = false, Fo = false, fa = 0, lt = 0, Da = 0, _l = 0, Wo = 0, Wt = 0, fi = 0, ms = null, Yt = null, $o = false, Lu = 0, Eh = 0, Yu = 1 / 0, Qu = null, Ba = null, gt = 0, qa = null, ci = null, ca = 0, Po = 0, Io = null, wh = null, ps = 0, ef = null;
        function $t() {
          return (De & 2) !== 0 && Ee !== 0 ? Ee & -Ee : Q.T !== null ? uf() : ks();
        }
        function Ah() {
          if (Wt === 0)
            if ((Ee & 536870912) === 0 || Ae) {
              var e = Al;
              Al <<= 1, (Al & 3932160) === 0 && (Al = 262144), Wt = e;
            } else
              Wt = 536870912;
          return e = Kt.current, e !== null && (e.flags |= 32), Wt;
        }
        function Qt(e, t, n) {
          (e === Ze && (qe === 2 || qe === 9) || e.cancelPendingCommit !== null) && (di(e, 0), Ha(e, Ee, Wt, false)), Gn(e, n), ((De & 2) === 0 || e !== Ze) && (e === Ze && ((De & 2) === 0 && (_l |= n), lt === 4 && Ha(e, Ee, Wt, false)), Ln(e));
        }
        function Rh(e, t, n) {
          if ((De & 6) !== 0)
            throw Error(o(327));
          var a = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Ia(e, t), l = a ? Dg(e, t) : nf(e, t, true), i = a;
          do {
            if (l === 0) {
              oi && !a && Ha(e, t, 0, false);
              break;
            } else {
              if (n = e.current.alternate, i && !Mg(n)) {
                l = nf(e, t, false), i = false;
                continue;
              }
              if (l === 2) {
                if (i = t, e.errorRecoveryDisabledLanes & i)
                  var f = 0;
                else
                  f = e.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
                if (f !== 0) {
                  t = f;
                  e: {
                    var v = e;
                    l = ms;
                    var j = v.current.memoizedState.isDehydrated;
                    if (j && (di(v, f).flags |= 256), f = nf(v, f, false), f !== 2) {
                      if (Fo && !j) {
                        v.errorRecoveryDisabledLanes |= i, _l |= i, l = 4;
                        break e;
                      }
                      i = Yt, Yt = l, i !== null && (Yt === null ? Yt = i : Yt.push.apply(Yt, i));
                    }
                    l = f;
                  }
                  if (i = false, l !== 2)
                    continue;
                }
              }
              if (l === 1) {
                di(e, 0), Ha(e, t, 0, true);
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
                    Ha(a, t, Wt, !Ua);
                    break e;
                  case 2:
                    Yt = null;
                    break;
                  case 3:
                  case 5:
                    break;
                  default:
                    throw Error(o(329));
                }
                if ((t & 62914560) === t && (l = Lu + 300 - Ot(), 10 < l)) {
                  if (Ha(a, t, Wt, !Ua), Rl(a, 0, true) !== 0)
                    break e;
                  ca = t, a.timeoutHandle = sm(Oh.bind(null, a, n, Yt, Qu, $o, t, Wt, _l, fi, Ua, i, "Throttled", -0, 0), l);
                  break e;
                }
                Oh(a, n, Yt, Qu, $o, t, Wt, _l, fi, Ua, i, null, -0, 0);
              }
            }
            break;
          } while (true);
          Ln(e);
        }
        function Oh(e, t, n, a, l, i, f, v, j, D, X, V, q, L) {
          if (e.timeoutHandle = -1, V = t.subtreeFlags, V & 8192 || (V & 16785408) === 16785408) {
            V = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: true, waitingForViewTransition: false, unsuspend: en }, _h(t, i, V);
            var se = (i & 62914560) === i ? Lu - Ot() : (i & 4194048) === i ? Eh - Ot() : 0;
            if (se = y0(V, se), se !== null) {
              ca = i, e.cancelPendingCommit = se(Hh.bind(null, e, t, i, n, a, l, f, v, j, X, V, null, q, L)), Ha(e, i, f, !D);
              return;
            }
          }
          Hh(e, t, i, n, a, l, f, v, j);
        }
        function Mg(e) {
          for (var t = e; ; ) {
            var n = t.tag;
            if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
              for (var a = 0; a < n.length; a++) {
                var l = n[a], i = l.getSnapshot;
                l = l.value;
                try {
                  if (!Vt(i(), l))
                    return false;
                } catch (f) {
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
        function Ha(e, t, n, a) {
          t &= ~Wo, t &= ~_l, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
          for (var l = t; 0 < l; ) {
            var i = 31 - wt(l), f = 1 << i;
            a[i] = -1, l &= ~f;
          }
          n !== 0 && Qs(e, n, t);
        }
        function Xu() {
          return (De & 6) === 0 ? (gs(0), false) : true;
        }
        function tf() {
          if (je !== null) {
            if (qe === 0)
              var e = je.return;
            else
              e = je, ea = hl = null, yo(e), ni = null, Pi = 0, e = je;
            for (; e !== null; )
              uh(e.alternate, e), e = e.return;
            je = null;
          }
        }
        function di(e, t) {
          var n = e.timeoutHandle;
          n !== -1 && (e.timeoutHandle = -1, Ig(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), ca = 0, tf(), Ze = e, je = n = Pn(e.current, null), Ee = t, qe = 0, Ft = null, Ua = false, oi = Ia(e, t), Fo = false, fi = Wt = Wo = _l = Da = lt = 0, Yt = ms = null, $o = false, (t & 8) !== 0 && (t |= t & 32);
          var a = e.entangledLanes;
          if (a !== 0)
            for (e = e.entanglements, a &= t; 0 < a; ) {
              var l = 31 - wt(a), i = 1 << l;
              t |= e[l], a &= ~i;
            }
          return fa = t, ou(), n;
        }
        function Ch(e, t) {
          _e = null, Q.H = ss, t === ti || t === yu ? (t = Kc(), qe = 3) : t === lo ? (t = Kc(), qe = 4) : qe = t === Mo ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Ft = t, je === null && (lt = 1, Cu(e, rn(t, e.current)));
        }
        function zh() {
          var e = Kt.current;
          return e === null ? true : (Ee & 4194048) === Ee ? dn === null : (Ee & 62914560) === Ee || (Ee & 536870912) !== 0 ? e === dn : false;
        }
        function Mh() {
          var e = Q.H;
          return Q.H = ss, e === null ? ss : e;
        }
        function Uh() {
          var e = Q.A;
          return Q.A = Cg, e;
        }
        function Gu() {
          lt = 4, Ua || (Ee & 4194048) !== Ee && Kt.current !== null || (oi = true), (Da & 134217727) === 0 && (_l & 134217727) === 0 || Ze === null || Ha(Ze, Ee, Wt, false);
        }
        function nf(e, t, n) {
          var a = De;
          De |= 2;
          var l = Mh(), i = Uh();
          (Ze !== e || Ee !== t) && (Qu = null, di(e, t)), t = false;
          var f = lt;
          e:
            do
              try {
                if (qe !== 0 && je !== null) {
                  var v = je, j = Ft;
                  switch (qe) {
                    case 8:
                      tf(), f = 6;
                      break e;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                      Kt.current === null && (t = true);
                      var D = qe;
                      if (qe = 0, Ft = null, hi(e, v, j, D), n && oi) {
                        f = 0;
                        break e;
                      }
                      break;
                    default:
                      D = qe, qe = 0, Ft = null, hi(e, v, j, D);
                  }
                }
                Ug(), f = lt;
                break;
              } catch (X) {
                Ch(e, X);
              }
            while (true);
          return t && e.shellSuspendCounter++, ea = hl = null, De = a, Q.H = l, Q.A = i, je === null && (Ze = null, Ee = 0, ou()), f;
        }
        function Ug() {
          for (; je !== null; )
            Dh(je);
        }
        function Dg(e, t) {
          var n = De;
          De |= 2;
          var a = Mh(), l = Uh();
          Ze !== e || Ee !== t ? (Qu = null, Yu = Ot() + 500, di(e, t)) : oi = Ia(e, t);
          e:
            do
              try {
                if (qe !== 0 && je !== null) {
                  t = je;
                  var i = Ft;
                  t:
                    switch (qe) {
                      case 1:
                        qe = 0, Ft = null, hi(e, t, i, 1);
                        break;
                      case 2:
                      case 9:
                        if (Vc(i)) {
                          qe = 0, Ft = null, Bh(t);
                          break;
                        }
                        t = function() {
                          qe !== 2 && qe !== 9 || Ze !== e || (qe = 7), Ln(e);
                        }, i.then(t, t);
                        break e;
                      case 3:
                        qe = 7;
                        break e;
                      case 4:
                        qe = 5;
                        break e;
                      case 7:
                        Vc(i) ? (qe = 0, Ft = null, Bh(t)) : (qe = 0, Ft = null, hi(e, t, i, 7));
                        break;
                      case 5:
                        var f = null;
                        switch (je.tag) {
                          case 26:
                            f = je.memoizedState;
                          case 5:
                          case 27:
                            var v = je;
                            if (f ? Sm(f) : v.stateNode.complete) {
                              qe = 0, Ft = null;
                              var j = v.sibling;
                              if (j !== null)
                                je = j;
                              else {
                                var D = v.return;
                                D !== null ? (je = D, ku(D)) : je = null;
                              }
                              break t;
                            }
                        }
                        qe = 0, Ft = null, hi(e, t, i, 5);
                        break;
                      case 6:
                        qe = 0, Ft = null, hi(e, t, i, 6);
                        break;
                      case 8:
                        tf(), lt = 6;
                        break e;
                      default:
                        throw Error(o(462));
                    }
                }
                Bg();
                break;
              } catch (X) {
                Ch(e, X);
              }
            while (true);
          return ea = hl = null, Q.H = a, Q.A = l, De = n, je !== null ? 0 : (Ze = null, Ee = 0, ou(), lt);
        }
        function Bg() {
          for (; je !== null && !Er(); )
            Dh(je);
        }
        function Dh(e) {
          var t = ih(e.alternate, e, fa);
          e.memoizedProps = e.pendingProps, t === null ? ku(e) : je = t;
        }
        function Bh(e) {
          var t = e, n = t.alternate;
          switch (t.tag) {
            case 15:
            case 0:
              t = Id(n, t, t.pendingProps, t.type, void 0, Ee);
              break;
            case 11:
              t = Id(n, t, t.pendingProps, t.type.render, t.ref, Ee);
              break;
            case 5:
              yo(t);
            default:
              uh(n, t), t = je = Uc(t, fa), t = ih(n, t, fa);
          }
          e.memoizedProps = e.pendingProps, t === null ? ku(e) : je = t;
        }
        function hi(e, t, n, a) {
          ea = hl = null, yo(t), ni = null, Pi = 0;
          var l = t.return;
          try {
            if (jg(e, l, t, n, Ee)) {
              lt = 1, Cu(e, rn(n, e.current)), je = null;
              return;
            }
          } catch (i) {
            if (l !== null)
              throw je = l, i;
            lt = 1, Cu(e, rn(n, e.current)), je = null;
            return;
          }
          t.flags & 32768 ? (Ae || a === 1 ? e = true : oi || (Ee & 536870912) !== 0 ? e = false : (Ua = e = true, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Kt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), qh(t, e)) : ku(t);
        }
        function ku(e) {
          var t = e;
          do {
            if ((t.flags & 32768) !== 0) {
              qh(t, Ua);
              return;
            }
            e = t.return;
            var n = wg(t.alternate, t, fa);
            if (n !== null) {
              je = n;
              return;
            }
            if (t = t.sibling, t !== null) {
              je = t;
              return;
            }
            je = t = e;
          } while (t !== null);
          lt === 0 && (lt = 5);
        }
        function qh(e, t) {
          do {
            var n = Ag(e.alternate, e);
            if (n !== null) {
              n.flags &= 32767, je = n;
              return;
            }
            if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
              je = e;
              return;
            }
            je = e = n;
          } while (e !== null);
          lt = 6, je = null;
        }
        function Hh(e, t, n, a, l, i, f, v, j) {
          e.cancelPendingCommit = null;
          do
            Vu();
          while (gt !== 0);
          if ((De & 6) !== 0)
            throw Error(o(327));
          if (t !== null) {
            if (t === e.current)
              throw Error(o(177));
            if (i = t.lanes | t.childLanes, i |= Gr, Or(e, n, i, f, v, j), e === Ze && (je = Ze = null, Ee = 0), ci = t, qa = e, ca = n, Po = i, Io = l, wh = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Yg(Fa, function() {
              return Gh(), null;
            })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
              a = Q.T, Q.T = null, l = ee.p, ee.p = 2, f = De, De |= 4;
              try {
                Rg(e, t, n);
              } finally {
                De = f, ee.p = l, Q.T = a;
              }
            }
            gt = 1, Lh(), Yh(), Qh();
          }
        }
        function Lh() {
          if (gt === 1) {
            gt = 0;
            var e = qa, t = ci, n = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || n) {
              n = Q.T, Q.T = null;
              var a = ee.p;
              ee.p = 2;
              var l = De;
              De |= 4;
              try {
                vh(t, e);
                var i = pf, f = Tc(e.containerInfo), v = i.focusedElem, j = i.selectionRange;
                if (f !== v && v && v.ownerDocument && jc(v.ownerDocument.documentElement, v)) {
                  if (j !== null && Hr(v)) {
                    var D = j.start, X = j.end;
                    if (X === void 0 && (X = D), "selectionStart" in v)
                      v.selectionStart = D, v.selectionEnd = Math.min(X, v.value.length);
                    else {
                      var V = v.ownerDocument || document, q = V && V.defaultView || window;
                      if (q.getSelection) {
                        var L = q.getSelection(), se = v.textContent.length, me = Math.min(j.start, se), Xe = j.end === void 0 ? me : Math.min(j.end, se);
                        !L.extend && me > Xe && (f = Xe, Xe = me, me = f);
                        var C = Nc(v, me), R = Nc(v, Xe);
                        if (C && R && (L.rangeCount !== 1 || L.anchorNode !== C.node || L.anchorOffset !== C.offset || L.focusNode !== R.node || L.focusOffset !== R.offset)) {
                          var U = V.createRange();
                          U.setStart(C.node, C.offset), L.removeAllRanges(), me > Xe ? (L.addRange(U), L.extend(R.node, R.offset)) : (U.setEnd(R.node, R.offset), L.addRange(U));
                        }
                      }
                    }
                  }
                  for (V = [], L = v; L = L.parentNode; )
                    L.nodeType === 1 && V.push({ element: L, left: L.scrollLeft, top: L.scrollTop });
                  for (typeof v.focus == "function" && v.focus(), v = 0; v < V.length; v++) {
                    var k = V[v];
                    k.element.scrollLeft = k.left, k.element.scrollTop = k.top;
                  }
                }
                ar = !!mf, pf = mf = null;
              } finally {
                De = l, ee.p = a, Q.T = n;
              }
            }
            e.current = t, gt = 2;
          }
        }
        function Yh() {
          if (gt === 2) {
            gt = 0;
            var e = qa, t = ci, n = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || n) {
              n = Q.T, Q.T = null;
              var a = ee.p;
              ee.p = 2;
              var l = De;
              De |= 4;
              try {
                mh(e, t.alternate, t);
              } finally {
                De = l, ee.p = a, Q.T = n;
              }
            }
            gt = 3;
          }
        }
        function Qh() {
          if (gt === 4 || gt === 3) {
            gt = 0, Bs();
            var e = qa, t = ci, n = ca, a = wh;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? gt = 5 : (gt = 0, ci = qa = null, Xh(e, e.pendingLanes));
            var l = e.pendingLanes;
            if (l === 0 && (Ba = null), Ci(n), t = t.stateNode, Ct && typeof Ct.onCommitFiberRoot == "function")
              try {
                Ct.onCommitFiberRoot(Wa, t, void 0, (t.current.flags & 128) === 128);
              } catch (j) {
              }
            if (a !== null) {
              t = Q.T, l = ee.p, ee.p = 2, Q.T = null;
              try {
                for (var i = e.onRecoverableError, f = 0; f < a.length; f++) {
                  var v = a[f];
                  i(v.value, { componentStack: v.stack });
                }
              } finally {
                Q.T = t, ee.p = l;
              }
            }
            (ca & 3) !== 0 && Vu(), Ln(e), l = e.pendingLanes, (n & 261930) !== 0 && (l & 42) !== 0 ? e === ef ? ps++ : (ps = 0, ef = e) : ps = 0, gs(0);
          }
        }
        function Xh(e, t) {
          (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Wi(t)));
        }
        function Vu() {
          return Lh(), Yh(), Qh(), Gh();
        }
        function Gh() {
          if (gt !== 5)
            return false;
          var e = qa, t = Po;
          Po = 0;
          var n = Ci(ca), a = Q.T, l = ee.p;
          try {
            ee.p = 32 > n ? 32 : n, Q.T = null, n = Io, Io = null;
            var i = qa, f = ca;
            if (gt = 0, ci = qa = null, ca = 0, (De & 6) !== 0)
              throw Error(o(331));
            var v = De;
            if (De |= 4, jh(i.current), Sh(i, i.current, f, n), De = v, gs(0, false), Ct && typeof Ct.onPostCommitFiberRoot == "function")
              try {
                Ct.onPostCommitFiberRoot(Wa, i);
              } catch (j) {
              }
            return true;
          } finally {
            ee.p = l, Q.T = a, Xh(e, t);
          }
        }
        function kh(e, t, n) {
          t = rn(n, t), t = zo(e.stateNode, t, 2), e = Oa(e, t, 2), e !== null && (Gn(e, 2), Ln(e));
        }
        function He(e, t, n) {
          if (e.tag === 3)
            kh(e, e, n);
          else
            for (; t !== null; ) {
              if (t.tag === 3) {
                kh(t, e, n);
                break;
              } else if (t.tag === 1) {
                var a = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Ba === null || !Ba.has(a))) {
                  e = rn(n, e), n = Vd(2), a = Oa(t, n, 2), a !== null && (Zd(n, a, t, e), Gn(a, 2), Ln(a));
                  break;
                }
              }
              t = t.return;
            }
        }
        function af(e, t, n) {
          var a = e.pingCache;
          if (a === null) {
            a = e.pingCache = new zg();
            var l = /* @__PURE__ */ new Set();
            a.set(t, l);
          } else
            l = a.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), a.set(t, l));
          l.has(n) || (Fo = true, l.add(n), e = qg.bind(null, e, t, n), t.then(e, e));
        }
        function qg(e, t, n) {
          var a = e.pingCache;
          a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Ze === e && (Ee & n) === n && (lt === 4 || lt === 3 && (Ee & 62914560) === Ee && 300 > Ot() - Lu ? (De & 2) === 0 && di(e, 0) : Wo |= n, fi === Ee && (fi = 0)), Ln(e);
        }
        function Vh(e, t) {
          t === 0 && (t = Ys()), e = fl(e, t), e !== null && (Gn(e, t), Ln(e));
        }
        function Hg(e) {
          var t = e.memoizedState, n = 0;
          t !== null && (n = t.retryLane), Vh(e, n);
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
          a !== null && a.delete(t), Vh(e, n);
        }
        function Yg(e, t) {
          return wi(e, t);
        }
        var Zu = null, mi = null, lf = false, Ku = false, sf = false, La = 0;
        function Ln(e) {
          e !== mi && e.next === null && (mi === null ? Zu = mi = e : mi = mi.next = e), Ku = true, lf || (lf = true, Xg());
        }
        function gs(e, t) {
          if (!sf && Ku) {
            sf = true;
            do
              for (var n = false, a = Zu; a !== null; ) {
                if (e !== 0) {
                  var l = a.pendingLanes;
                  if (l === 0)
                    var i = 0;
                  else {
                    var f = a.suspendedLanes, v = a.pingedLanes;
                    i = (1 << 31 - wt(42 | e) + 1) - 1, i &= l & ~(f & ~v), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
                  }
                  i !== 0 && (n = true, Fh(a, i));
                } else
                  i = Ee, i = Rl(a, a === Ze ? i : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (i & 3) === 0 || Ia(a, i) || (n = true, Fh(a, i));
                a = a.next;
              }
            while (n);
            sf = false;
          }
        }
        function Qg() {
          Zh();
        }
        function Zh() {
          Ku = lf = false;
          var e = 0;
          La !== 0 && Pg() && (e = La);
          for (var t = Ot(), n = null, a = Zu; a !== null; ) {
            var l = a.next, i = Kh(a, t);
            i === 0 ? (a.next = null, n === null ? Zu = l : n.next = l, l === null && (mi = n)) : (n = a, (e !== 0 || (i & 3) !== 0) && (Ku = true)), a = l;
          }
          gt !== 0 && gt !== 5 || gs(e), La !== 0 && (La = 0);
        }
        function Kh(e, t) {
          for (var n = e.suspendedLanes, a = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
            var f = 31 - wt(i), v = 1 << f, j = l[f];
            j === -1 ? ((v & n) === 0 || (v & a) !== 0) && (l[f] = Rr(v, t)) : j <= t && (e.expiredLanes |= v), i &= ~v;
          }
          if (t = Ze, n = Ee, n = Rl(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a = e.callbackNode, n === 0 || e === t && (qe === 2 || qe === 9) || e.cancelPendingCommit !== null)
            return a !== null && a !== null && Ai(a), e.callbackNode = null, e.callbackPriority = 0;
          if ((n & 3) === 0 || Ia(e, n)) {
            if (t = n & -n, t === e.callbackPriority)
              return t;
            switch (a !== null && Ai(a), Ci(n)) {
              case 2:
              case 8:
                n = Ri;
                break;
              case 32:
                n = Fa;
                break;
              case 268435456:
                n = wl;
                break;
              default:
                n = Fa;
            }
            return a = Jh.bind(null, e), n = wi(n, a), e.callbackPriority = t, e.callbackNode = n, t;
          }
          return a !== null && a !== null && Ai(a), e.callbackPriority = 2, e.callbackNode = null, 2;
        }
        function Jh(e, t) {
          if (gt !== 0 && gt !== 5)
            return e.callbackNode = null, e.callbackPriority = 0, null;
          var n = e.callbackNode;
          if (Vu() && e.callbackNode !== n)
            return null;
          var a = Ee;
          return a = Rl(e, e === Ze ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a === 0 ? null : (Rh(e, a, t), Kh(e, Ot()), e.callbackNode != null && e.callbackNode === n ? Jh.bind(null, e) : null);
        }
        function Fh(e, t) {
          if (Vu())
            return null;
          Rh(e, t, true);
        }
        function Xg() {
          e0(function() {
            (De & 6) !== 0 ? wi(be, Qg) : Zh();
          });
        }
        function uf() {
          if (La === 0) {
            var e = Il;
            e === 0 && (e = $a, $a <<= 1, ($a & 261888) === 0 && ($a = 256)), La = e;
          }
          return La;
        }
        function Wh(e) {
          return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Ml("" + e);
        }
        function $h(e, t) {
          var n = t.ownerDocument.createElement("input");
          return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
        }
        function Gg(e, t, n, a, l) {
          if (t === "submit" && n && n.stateNode === l) {
            var i = Wh((l[bt] || null).action), f = a.submitter;
            f && (t = (t = f[bt] || null) ? Wh(t.formAction) : f.getAttribute("formAction"), t !== null && (i = t, f = null));
            var v = new il("action", "action", null, a, l);
            e.push({ event: v, listeners: [{ instance: null, listener: function() {
              if (a.defaultPrevented) {
                if (La !== 0) {
                  var j = f ? $h(l, f) : new FormData(l);
                  Eo(n, { pending: true, data: j, method: l.method, action: i }, null, j);
                }
              } else
                typeof i == "function" && (v.preventDefault(), j = f ? $h(l, f) : new FormData(l), Eo(n, { pending: true, data: j, method: l.method, action: i }, i, j));
            }, currentTarget: l }] });
          }
        }
        for (var rf = 0; rf < Xr.length; rf++) {
          var of = Xr[rf], kg = of.toLowerCase(), Vg = of[0].toUpperCase() + of.slice(1);
          bn(kg, "on" + Vg);
        }
        bn(Ac, "onAnimationEnd"), bn(Rc, "onAnimationIteration"), bn(Oc, "onAnimationStart"), bn("dblclick", "onDoubleClick"), bn("focusin", "onFocus"), bn("focusout", "onBlur"), bn(ug, "onTransitionRun"), bn(rg, "onTransitionStart"), bn(og, "onTransitionCancel"), bn(Cc, "onTransitionEnd"), kt("onMouseEnter", ["mouseout", "mouseover"]), kt("onMouseLeave", ["mouseout", "mouseover"]), kt("onPointerEnter", ["pointerout", "pointerover"]), kt("onPointerLeave", ["pointerout", "pointerover"]), zn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), zn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), zn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), zn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), zn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), zn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var ys = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Zg = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ys));
        function Ph(e, t) {
          t = (t & 4) !== 0;
          for (var n = 0; n < e.length; n++) {
            var a = e[n], l = a.event;
            a = a.listeners;
            e: {
              var i = void 0;
              if (t)
                for (var f = a.length - 1; 0 <= f; f--) {
                  var v = a[f], j = v.instance, D = v.currentTarget;
                  if (v = v.listener, j !== i && l.isPropagationStopped())
                    break e;
                  i = v, l.currentTarget = D;
                  try {
                    i(l);
                  } catch (X) {
                    ru(X);
                  }
                  l.currentTarget = null, i = j;
                }
              else
                for (f = 0; f < a.length; f++) {
                  if (v = a[f], j = v.instance, D = v.currentTarget, v = v.listener, j !== i && l.isPropagationStopped())
                    break e;
                  i = v, l.currentTarget = D;
                  try {
                    i(l);
                  } catch (X) {
                    ru(X);
                  }
                  l.currentTarget = null, i = j;
                }
            }
          }
        }
        function Te(e, t) {
          var n = t[zi];
          n === void 0 && (n = t[zi] = /* @__PURE__ */ new Set());
          var a = e + "__bubble";
          n.has(a) || (Ih(t, e, 2, false), n.add(a));
        }
        function ff(e, t, n) {
          var a = 0;
          t && (a |= 4), Ih(n, e, a, t);
        }
        var Ju = "_reactListening" + Math.random().toString(36).slice(2);
        function cf(e) {
          if (!e[Ju]) {
            e[Ju] = true, Dt.forEach(function(n) {
              n !== "selectionchange" && (Zg.has(n) || ff(n, false, e), ff(n, true, e));
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Ju] || (t[Ju] = true, ff("selectionchange", false, t));
          }
        }
        function Ih(e, t, n, a) {
          switch (Am(t)) {
            case 2:
              var l = x0;
              break;
            case 8:
              l = S0;
              break;
            default:
              l = Ef;
          }
          n = l.bind(null, t, n, e), l = void 0, !Qi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = true), a ? l !== void 0 ? e.addEventListener(t, n, { capture: true, passive: l }) : e.addEventListener(t, n, true) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, false);
        }
        function df(e, t, n, a, l) {
          var i = a;
          if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
            e:
              for (; ; ) {
                if (a === null)
                  return;
                var f = a.tag;
                if (f === 3 || f === 4) {
                  var v = a.stateNode.containerInfo;
                  if (v === l)
                    break;
                  if (f === 4)
                    for (f = a.return; f !== null; ) {
                      var j = f.tag;
                      if ((j === 3 || j === 4) && f.stateNode.containerInfo === l)
                        return;
                      f = f.return;
                    }
                  for (; v !== null; ) {
                    if (f = ba(v), f === null)
                      return;
                    if (j = f.tag, j === 5 || j === 6 || j === 26 || j === 27) {
                      a = i = f;
                      continue e;
                    }
                    v = v.parentNode;
                  }
                }
                a = a.return;
              }
          Yi(function() {
            var D = i, X = Ul(n), V = [];
            e: {
              var q = zc.get(e);
              if (q !== void 0) {
                var L = il, se = e;
                switch (e) {
                  case "keypress":
                    if (Hl(n) === 0)
                      break e;
                  case "keydown":
                  case "keyup":
                    L = nu;
                    break;
                  case "focusin":
                    se = "focus", L = F;
                    break;
                  case "focusout":
                    se = "blur", L = F;
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
                    L = M;
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
                    L = au;
                    break;
                  case Ac:
                  case Rc:
                  case Oc:
                    L = pe;
                    break;
                  case Cc:
                    L = Xl;
                    break;
                  case "scroll":
                  case "scrollend":
                    L = c;
                    break;
                  case "wheel":
                    L = Wn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    L = ve;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    L = Yl;
                    break;
                  case "toggle":
                  case "beforetoggle":
                    L = ln;
                }
                var me = (t & 4) !== 0, Xe = !me && (e === "scroll" || e === "scrollend"), C = me ? q !== null ? q + "Capture" : null : q;
                me = [];
                for (var R = D, U; R !== null; ) {
                  var k = R;
                  if (U = k.stateNode, k = k.tag, k !== 5 && k !== 26 && k !== 27 || U === null || C === null || (k = Mn(R, C), k != null && me.push(bs(R, k, U))), Xe)
                    break;
                  R = R.return;
                }
                0 < me.length && (q = new L(q, se, null, n, X), V.push({ event: q, listeners: me }));
              }
            }
            if ((t & 7) === 0) {
              e: {
                if (q = e === "mouseover" || e === "pointerover", L = e === "mouseout" || e === "pointerout", q && n !== ll && (se = n.relatedTarget || n.fromElement) && (ba(se) || se[Rn]))
                  break e;
                if ((L || q) && (q = X.window === X ? X : (q = X.ownerDocument) ? q.defaultView || q.parentWindow : window, L ? (se = n.relatedTarget || n.toElement, L = D, se = se ? ba(se) : null, se !== null && (Xe = b(se), me = se.tag, se !== Xe || me !== 5 && me !== 27 && me !== 6) && (se = null)) : (L = null, se = D), L !== se)) {
                  if (me = M, k = "onMouseLeave", C = "onMouseEnter", R = "mouse", (e === "pointerout" || e === "pointerover") && (me = Yl, k = "onPointerLeave", C = "onPointerEnter", R = "pointer"), Xe = L == null ? q : tl(L), U = se == null ? q : tl(se), q = new me(k, R + "leave", L, n, X), q.target = Xe, q.relatedTarget = U, k = null, ba(X) === D && (me = new me(C, R + "enter", se, n, X), me.target = U, me.relatedTarget = Xe, k = me), Xe = k, L && se)
                    t: {
                      for (me = Kg, C = L, R = se, U = 0, k = C; k; k = me(k))
                        U++;
                      k = 0;
                      for (var de = R; de; de = me(de))
                        k++;
                      for (; 0 < U - k; )
                        C = me(C), U--;
                      for (; 0 < k - U; )
                        R = me(R), k--;
                      for (; U--; ) {
                        if (C === R || R !== null && C === R.alternate) {
                          me = C;
                          break t;
                        }
                        C = me(C), R = me(R);
                      }
                      me = null;
                    }
                  else
                    me = null;
                  L !== null && em(V, q, L, me, false), se !== null && Xe !== null && em(V, Xe, se, me, true);
                }
              }
              e: {
                if (q = D ? tl(D) : window, L = q.nodeName && q.nodeName.toLowerCase(), L === "select" || L === "input" && q.type === "file")
                  var Me = yc;
                else if (pc(q))
                  if (bc)
                    Me = lg;
                  else {
                    Me = ng;
                    var oe = tg;
                  }
                else
                  L = q.nodeName, !L || L.toLowerCase() !== "input" || q.type !== "checkbox" && q.type !== "radio" ? D && zl(D.elementType) && (Me = yc) : Me = ag;
                if (Me && (Me = Me(e, D))) {
                  gc(V, Me, n, X);
                  break e;
                }
                oe && oe(e, q, D), e === "focusout" && D && q.type === "number" && D.memoizedProps.value != null && qi(q, "number", q.value);
              }
              switch (oe = D ? tl(D) : window, e) {
                case "focusin":
                  (pc(oe) || oe.contentEditable === "true") && (Vl = oe, Lr = D, Ki = null);
                  break;
                case "focusout":
                  Ki = Lr = Vl = null;
                  break;
                case "mousedown":
                  Yr = true;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  Yr = false, Ec(V, n, X);
                  break;
                case "selectionchange":
                  if (sg)
                    break;
                case "keydown":
                case "keyup":
                  Ec(V, n, X);
              }
              var Ne;
              if (sn)
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
                kl ? ul(e, n) && (we = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (we = "onCompositionStart");
              we && (yn && n.locale !== "ko" && (kl || we !== "onCompositionStart" ? we === "onCompositionEnd" && kl && (Ne = ql()) : (pt = X, _a = "value" in pt ? pt.value : pt.textContent, kl = true)), oe = Fu(D, we), 0 < oe.length && (we = new le(we, e, null, n, X), V.push({ event: we, listeners: oe }), Ne ? we.data = Ne : (Ne = Gi(n), Ne !== null && (we.data = Ne)))), (Ne = Dr ? $p(e, n) : Pp(e, n)) && (we = Fu(D, "onBeforeInput"), 0 < we.length && (oe = new le("onBeforeInput", "beforeinput", null, n, X), V.push({ event: oe, listeners: we }), oe.data = Ne)), Gg(V, e, D, n, X);
            }
            Ph(V, t);
          });
        }
        function bs(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Fu(e, t) {
          for (var n = t + "Capture", a = []; e !== null; ) {
            var l = e, i = l.stateNode;
            if (l = l.tag, l !== 5 && l !== 26 && l !== 27 || i === null || (l = Mn(e, n), l != null && a.unshift(bs(e, l, i)), l = Mn(e, t), l != null && a.push(bs(e, l, i))), e.tag === 3)
              return a;
            e = e.return;
          }
          return [];
        }
        function Kg(e) {
          if (e === null)
            return null;
          do
            e = e.return;
          while (e && e.tag !== 5 && e.tag !== 27);
          return e || null;
        }
        function em(e, t, n, a, l) {
          for (var i = t._reactName, f = []; n !== null && n !== a; ) {
            var v = n, j = v.alternate, D = v.stateNode;
            if (v = v.tag, j !== null && j === a)
              break;
            v !== 5 && v !== 26 && v !== 27 || D === null || (j = D, l ? (D = Mn(n, i), D != null && f.unshift(bs(n, D, j))) : l || (D = Mn(n, i), D != null && f.push(bs(n, D, j)))), n = n.return;
          }
          f.length !== 0 && e.push({ event: t, listeners: f });
        }
        var Jg = /\r\n?/g, Fg = /\u0000|\uFFFD/g;
        function tm(e) {
          return (typeof e == "string" ? e : "" + e).replace(Jg, `
`).replace(Fg, "");
        }
        function nm(e, t) {
          return t = tm(t), tm(e) === t;
        }
        function Qe(e, t, n, a, l, i) {
          switch (n) {
            case "children":
              typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Zn(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Zn(e, "" + a);
              break;
            case "className":
              nl(e, "class", a);
              break;
            case "tabIndex":
              nl(e, "tabindex", a);
              break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
              nl(e, n, a);
              break;
            case "style":
              Li(e, a, i);
              break;
            case "data":
              if (t !== "object") {
                nl(e, "data", a);
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
                typeof i == "function" && (n === "formAction" ? (t !== "input" && Qe(e, t, "name", l.name, l, null), Qe(e, t, "formEncType", l.formEncType, l, null), Qe(e, t, "formMethod", l.formMethod, l, null), Qe(e, t, "formTarget", l.formTarget, l, null)) : (Qe(e, t, "encType", l.encType, l, null), Qe(e, t, "method", l.method, l, null), Qe(e, t, "target", l.target, l, null)));
              if (a == null || typeof a == "symbol" || typeof a == "boolean") {
                e.removeAttribute(n);
                break;
              }
              a = Ml("" + a), e.setAttribute(n, a);
              break;
            case "onClick":
              a != null && (e.onclick = en);
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
              Te("beforetoggle", e), Te("toggle", e), kn(e, "popover", a);
              break;
            case "xlinkActuate":
              It(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
              break;
            case "xlinkArcrole":
              It(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
              break;
            case "xlinkRole":
              It(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
              break;
            case "xlinkShow":
              It(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
              break;
            case "xlinkTitle":
              It(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
              break;
            case "xlinkType":
              It(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
              break;
            case "xmlBase":
              It(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
              break;
            case "xmlLang":
              It(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
              break;
            case "xmlSpace":
              It(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
              break;
            case "is":
              kn(e, "is", a);
              break;
            case "innerText":
            case "textContent":
              break;
            default:
              (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = eu.get(n) || n, kn(e, n, a));
          }
        }
        function hf(e, t, n, a, l, i) {
          switch (n) {
            case "style":
              Li(e, a, i);
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
              typeof a == "string" ? Zn(e, a) : (typeof a == "number" || typeof a == "bigint") && Zn(e, "" + a);
              break;
            case "onScroll":
              a != null && Te("scroll", e);
              break;
            case "onScrollEnd":
              a != null && Te("scrollend", e);
              break;
            case "onClick":
              a != null && (e.onclick = en);
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
              if (!Ol.hasOwnProperty(n))
                e: {
                  if (n[0] === "o" && n[1] === "n" && (l = n.endsWith("Capture"), t = n.slice(2, l ? n.length - 7 : void 0), i = e[bt] || null, i = i != null ? i[n] : null, typeof i == "function" && e.removeEventListener(t, i, l), typeof a == "function")) {
                    typeof i != "function" && i !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, a, l);
                    break e;
                  }
                  n in e ? e[n] = a : a === true ? e.setAttribute(n, "") : kn(e, n, a);
                }
          }
        }
        function Tt(e, t, n) {
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
                  var f = n[i];
                  if (f != null)
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
                        Qe(e, t, i, f, n, null);
                    }
                }
              l && Qe(e, t, "srcSet", n.srcSet, n, null), a && Qe(e, t, "src", n.src, n, null);
              return;
            case "input":
              Te("invalid", e);
              var v = i = f = l = null, j = null, D = null;
              for (a in n)
                if (n.hasOwnProperty(a)) {
                  var X = n[a];
                  if (X != null)
                    switch (a) {
                      case "name":
                        l = X;
                        break;
                      case "type":
                        f = X;
                        break;
                      case "checked":
                        j = X;
                        break;
                      case "defaultChecked":
                        D = X;
                        break;
                      case "value":
                        i = X;
                        break;
                      case "defaultValue":
                        v = X;
                        break;
                      case "children":
                      case "dangerouslySetInnerHTML":
                        if (X != null)
                          throw Error(o(137, t));
                        break;
                      default:
                        Qe(e, t, a, X, n, null);
                    }
                }
              $s(e, i, v, j, D, f, l, false);
              return;
            case "select":
              Te("invalid", e), a = f = i = null;
              for (l in n)
                if (n.hasOwnProperty(l) && (v = n[l], v != null))
                  switch (l) {
                    case "value":
                      i = v;
                      break;
                    case "defaultValue":
                      f = v;
                      break;
                    case "multiple":
                      a = v;
                    default:
                      Qe(e, t, l, v, n, null);
                  }
              t = i, n = f, e.multiple = !!a, t != null ? xa(e, !!a, t, false) : n != null && xa(e, !!a, n, true);
              return;
            case "textarea":
              Te("invalid", e), i = l = a = null;
              for (f in n)
                if (n.hasOwnProperty(f) && (v = n[f], v != null))
                  switch (f) {
                    case "value":
                      a = v;
                      break;
                    case "defaultValue":
                      l = v;
                      break;
                    case "children":
                      i = v;
                      break;
                    case "dangerouslySetInnerHTML":
                      if (v != null)
                        throw Error(o(91));
                      break;
                    default:
                      Qe(e, t, f, v, n, null);
                  }
              Hi(e, a, l, i);
              return;
            case "option":
              for (j in n)
                if (n.hasOwnProperty(j) && (a = n[j], a != null))
                  switch (j) {
                    case "selected":
                      e.selected = a && typeof a != "function" && typeof a != "symbol";
                      break;
                    default:
                      Qe(e, t, j, a, n, null);
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
              for (a = 0; a < ys.length; a++)
                Te(ys[a], e);
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
                      Qe(e, t, D, a, n, null);
                  }
              return;
            default:
              if (zl(t)) {
                for (X in n)
                  n.hasOwnProperty(X) && (a = n[X], a !== void 0 && hf(e, t, X, a, n, void 0));
                return;
              }
          }
          for (v in n)
            n.hasOwnProperty(v) && (a = n[v], a != null && Qe(e, t, v, a, n, null));
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
              var l = null, i = null, f = null, v = null, j = null, D = null, X = null;
              for (L in n) {
                var V = n[L];
                if (n.hasOwnProperty(L) && V != null)
                  switch (L) {
                    case "checked":
                      break;
                    case "value":
                      break;
                    case "defaultValue":
                      j = V;
                    default:
                      a.hasOwnProperty(L) || Qe(e, t, L, null, a, V);
                  }
              }
              for (var q in a) {
                var L = a[q];
                if (V = n[q], a.hasOwnProperty(q) && (L != null || V != null))
                  switch (q) {
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
                      X = L;
                      break;
                    case "value":
                      f = L;
                      break;
                    case "defaultValue":
                      v = L;
                      break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                      if (L != null)
                        throw Error(o(137, t));
                      break;
                    default:
                      L !== V && Qe(e, t, q, L, a, V);
                  }
              }
              Bi(e, f, v, j, D, X, i, l);
              return;
            case "select":
              L = f = v = q = null;
              for (i in n)
                if (j = n[i], n.hasOwnProperty(i) && j != null)
                  switch (i) {
                    case "value":
                      break;
                    case "multiple":
                      L = j;
                    default:
                      a.hasOwnProperty(i) || Qe(e, t, i, null, a, j);
                  }
              for (l in a)
                if (i = a[l], j = n[l], a.hasOwnProperty(l) && (i != null || j != null))
                  switch (l) {
                    case "value":
                      q = i;
                      break;
                    case "defaultValue":
                      v = i;
                      break;
                    case "multiple":
                      f = i;
                    default:
                      i !== j && Qe(e, t, l, i, a, j);
                  }
              t = v, n = f, a = L, q != null ? xa(e, !!n, q, false) : !!a != !!n && (t != null ? xa(e, !!n, t, true) : xa(e, !!n, n ? [] : "", false));
              return;
            case "textarea":
              L = q = null;
              for (v in n)
                if (l = n[v], n.hasOwnProperty(v) && l != null && !a.hasOwnProperty(v))
                  switch (v) {
                    case "value":
                      break;
                    case "children":
                      break;
                    default:
                      Qe(e, t, v, null, a, l);
                  }
              for (f in a)
                if (l = a[f], i = n[f], a.hasOwnProperty(f) && (l != null || i != null))
                  switch (f) {
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
                        throw Error(o(91));
                      break;
                    default:
                      l !== i && Qe(e, t, f, l, a, i);
                  }
              Ps(e, q, L);
              return;
            case "option":
              for (var se in n)
                if (q = n[se], n.hasOwnProperty(se) && q != null && !a.hasOwnProperty(se))
                  switch (se) {
                    case "selected":
                      e.selected = false;
                      break;
                    default:
                      Qe(e, t, se, null, a, q);
                  }
              for (j in a)
                if (q = a[j], L = n[j], a.hasOwnProperty(j) && q !== L && (q != null || L != null))
                  switch (j) {
                    case "selected":
                      e.selected = q && typeof q != "function" && typeof q != "symbol";
                      break;
                    default:
                      Qe(e, t, j, q, a, L);
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
              for (var me in n)
                q = n[me], n.hasOwnProperty(me) && q != null && !a.hasOwnProperty(me) && Qe(e, t, me, null, a, q);
              for (D in a)
                if (q = a[D], L = n[D], a.hasOwnProperty(D) && q !== L && (q != null || L != null))
                  switch (D) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                      if (q != null)
                        throw Error(o(137, t));
                      break;
                    default:
                      Qe(e, t, D, q, a, L);
                  }
              return;
            default:
              if (zl(t)) {
                for (var Xe in n)
                  q = n[Xe], n.hasOwnProperty(Xe) && q !== void 0 && !a.hasOwnProperty(Xe) && hf(e, t, Xe, void 0, a, q);
                for (X in a)
                  q = a[X], L = n[X], !a.hasOwnProperty(X) || q === L || q === void 0 && L === void 0 || hf(e, t, X, q, a, L);
                return;
              }
          }
          for (var C in n)
            q = n[C], n.hasOwnProperty(C) && q != null && !a.hasOwnProperty(C) && Qe(e, t, C, null, a, q);
          for (V in a)
            q = a[V], L = n[V], !a.hasOwnProperty(V) || q === L || q == null && L == null || Qe(e, t, V, q, a, L);
        }
        function am(e) {
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
              var l = n[a], i = l.transferSize, f = l.initiatorType, v = l.duration;
              if (i && v && am(f)) {
                for (f = 0, v = l.responseEnd, a += 1; a < n.length; a++) {
                  var j = n[a], D = j.startTime;
                  if (D > v)
                    break;
                  var X = j.transferSize, V = j.initiatorType;
                  X && am(V) && (j = j.responseEnd, f += X * (j < v ? 1 : (v - D) / (j - D)));
                }
                if (--a, t += 8 * (i + f) / (l.duration / 1e3), e++, 10 < e)
                  break;
              }
            }
            if (0 < e)
              return t / e / 1e6;
          }
          return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
        }
        var mf = null, pf = null;
        function Wu(e) {
          return e.nodeType === 9 ? e : e.ownerDocument;
        }
        function lm(e) {
          switch (e) {
            case "http://www.w3.org/2000/svg":
              return 1;
            case "http://www.w3.org/1998/Math/MathML":
              return 2;
            default:
              return 0;
          }
        }
        function im(e, t) {
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
        function gf(e, t) {
          return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
        }
        var yf = null;
        function Pg() {
          var e = window.event;
          return e && e.type === "popstate" ? e === yf ? false : (yf = e, true) : (yf = null, false);
        }
        var sm = typeof setTimeout == "function" ? setTimeout : void 0, Ig = typeof clearTimeout == "function" ? clearTimeout : void 0, um = typeof Promise == "function" ? Promise : void 0, e0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof um != "undefined" ? function(e) {
          return um.resolve(null).then(e).catch(t0);
        } : sm;
        function t0(e) {
          setTimeout(function() {
            throw e;
          });
        }
        function Ya(e) {
          return e === "head";
        }
        function rm(e, t) {
          var n = t, a = 0;
          do {
            var l = n.nextSibling;
            if (e.removeChild(n), l && l.nodeType === 8)
              if (n = l.data, n === "/$" || n === "/&") {
                if (a === 0) {
                  e.removeChild(l), bi(t);
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
                  var f = i.nextSibling, v = i.nodeName;
                  i[On] || v === "SCRIPT" || v === "STYLE" || v === "LINK" && i.rel.toLowerCase() === "stylesheet" || n.removeChild(i), i = f;
                }
              } else
                n === "body" && vs(e.ownerDocument.body);
            n = l;
          } while (n);
          bi(t);
        }
        function om(e, t) {
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
        function bf(e) {
          var t = e.firstChild;
          for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var n = t;
            switch (t = t.nextSibling, n.nodeName) {
              case "HTML":
              case "HEAD":
              case "BODY":
                bf(n), Mi(n);
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
              if (!e[On])
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
        function fm(e, t) {
          for (; e.nodeType !== 8; )
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = hn(e.nextSibling), e === null))
              return null;
          return e;
        }
        function vf(e) {
          return e.data === "$?" || e.data === "$~";
        }
        function xf(e) {
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
        var Sf = null;
        function cm(e) {
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
        function dm(e) {
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
        function hm(e, t, n) {
          switch (t = Wu(n), e) {
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
        function vs(e) {
          for (var t = e.attributes; t.length; )
            e.removeAttributeNode(t[0]);
          Mi(e);
        }
        var mn = /* @__PURE__ */ new Map(), mm = /* @__PURE__ */ new Set();
        function $u(e) {
          return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
        }
        var da = ee.d;
        ee.d = { f: i0, r: s0, D: u0, C: r0, L: o0, m: f0, X: d0, S: c0, M: h0 };
        function i0() {
          var e = da.f(), t = Xu();
          return e || t;
        }
        function s0(e) {
          var t = Cn(e);
          t !== null && t.tag === 5 && t.type === "form" ? Cd(t) : da.r(e);
        }
        var pi = typeof document == "undefined" ? null : document;
        function pm(e, t, n) {
          var a = pi;
          if (a && typeof t == "string" && t) {
            var l = zt(t);
            l = 'link[rel="' + e + '"][href="' + l + '"]', typeof n == "string" && (l += '[crossorigin="' + n + '"]'), mm.has(l) || (mm.add(l), e = { rel: e, crossOrigin: n, href: t }, a.querySelector(l) === null && (t = a.createElement("link"), Tt(t, "link", e), et(t), a.head.appendChild(t)));
          }
        }
        function u0(e) {
          da.D(e), pm("dns-prefetch", e, null);
        }
        function r0(e, t) {
          da.C(e, t), pm("preconnect", e, t);
        }
        function o0(e, t, n) {
          da.L(e, t, n);
          var a = pi;
          if (a && e && t) {
            var l = 'link[rel="preload"][as="' + zt(t) + '"]';
            t === "image" && n && n.imageSrcSet ? (l += '[imagesrcset="' + zt(n.imageSrcSet) + '"]', typeof n.imageSizes == "string" && (l += '[imagesizes="' + zt(n.imageSizes) + '"]')) : l += '[href="' + zt(e) + '"]';
            var i = l;
            switch (t) {
              case "style":
                i = gi(e);
                break;
              case "script":
                i = yi(e);
            }
            mn.has(i) || (e = E({ rel: "preload", href: t === "image" && n && n.imageSrcSet ? void 0 : e, as: t }, n), mn.set(i, e), a.querySelector(l) !== null || t === "style" && a.querySelector(xs(i)) || t === "script" && a.querySelector(Ss(i)) || (t = a.createElement("link"), Tt(t, "link", e), et(t), a.head.appendChild(t)));
          }
        }
        function f0(e, t) {
          da.m(e, t);
          var n = pi;
          if (n && e) {
            var a = t && typeof t.as == "string" ? t.as : "script", l = 'link[rel="modulepreload"][as="' + zt(a) + '"][href="' + zt(e) + '"]', i = l;
            switch (a) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                i = yi(e);
            }
            if (!mn.has(i) && (e = E({ rel: "modulepreload", href: e }, t), mn.set(i, e), n.querySelector(l) === null)) {
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
              a = n.createElement("link"), Tt(a, "link", e), et(a), n.head.appendChild(a);
            }
          }
        }
        function c0(e, t, n) {
          da.S(e, t, n);
          var a = pi;
          if (a && e) {
            var l = va(a).hoistableStyles, i = gi(e);
            t = t || "default";
            var f = l.get(i);
            if (!f) {
              var v = { loading: 0, preload: null };
              if (f = a.querySelector(xs(i)))
                v.loading = 5;
              else {
                e = E({ rel: "stylesheet", href: e, "data-precedence": t }, n), (n = mn.get(i)) && _f(e, n);
                var j = f = a.createElement("link");
                et(j), Tt(j, "link", e), j._p = new Promise(function(D, X) {
                  j.onload = D, j.onerror = X;
                }), j.addEventListener("load", function() {
                  v.loading |= 1;
                }), j.addEventListener("error", function() {
                  v.loading |= 2;
                }), v.loading |= 4, Pu(f, t, a);
              }
              f = { type: "stylesheet", instance: f, count: 1, state: v }, l.set(i, f);
            }
          }
        }
        function d0(e, t) {
          da.X(e, t);
          var n = pi;
          if (n && e) {
            var a = va(n).hoistableScripts, l = yi(e), i = a.get(l);
            i || (i = n.querySelector(Ss(l)), i || (e = E({ src: e, async: true }, t), (t = mn.get(l)) && Nf(e, t), i = n.createElement("script"), et(i), Tt(i, "link", e), n.head.appendChild(i)), i = { type: "script", instance: i, count: 1, state: null }, a.set(l, i));
          }
        }
        function h0(e, t) {
          da.M(e, t);
          var n = pi;
          if (n && e) {
            var a = va(n).hoistableScripts, l = yi(e), i = a.get(l);
            i || (i = n.querySelector(Ss(l)), i || (e = E({ src: e, async: true, type: "module" }, t), (t = mn.get(l)) && Nf(e, t), i = n.createElement("script"), et(i), Tt(i, "link", e), n.head.appendChild(i)), i = { type: "script", instance: i, count: 1, state: null }, a.set(l, i));
          }
        }
        function gm(e, t, n, a) {
          var l = (l = ye.current) ? $u(l) : null;
          if (!l)
            throw Error(o(446));
          switch (e) {
            case "meta":
            case "title":
              return null;
            case "style":
              return typeof n.precedence == "string" && typeof n.href == "string" ? (t = gi(n.href), n = va(l).hoistableStyles, a = n.get(t), a || (a = { type: "style", instance: null, count: 0, state: null }, n.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
            case "link":
              if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
                e = gi(n.href);
                var i = va(l).hoistableStyles, f = i.get(e);
                if (f || (l = l.ownerDocument || l, f = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, i.set(e, f), (i = l.querySelector(xs(e))) && !i._p && (f.instance = i, f.state.loading = 5), mn.has(e) || (n = { rel: "preload", as: "style", href: n.href, crossOrigin: n.crossOrigin, integrity: n.integrity, media: n.media, hrefLang: n.hrefLang, referrerPolicy: n.referrerPolicy }, mn.set(e, n), i || m0(l, e, n, f.state))), t && a === null)
                  throw Error(o(528, ""));
                return f;
              }
              if (t && a !== null)
                throw Error(o(529, ""));
              return null;
            case "script":
              return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = yi(n), n = va(l).hoistableScripts, a = n.get(t), a || (a = { type: "script", instance: null, count: 0, state: null }, n.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
            default:
              throw Error(o(444, e));
          }
        }
        function gi(e) {
          return 'href="' + zt(e) + '"';
        }
        function xs(e) {
          return 'link[rel="stylesheet"][' + e + "]";
        }
        function ym(e) {
          return E({}, e, { "data-precedence": e.precedence, precedence: null });
        }
        function m0(e, t, n, a) {
          e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
            return a.loading |= 1;
          }), t.addEventListener("error", function() {
            return a.loading |= 2;
          }), Tt(t, "link", n), et(t), e.head.appendChild(t));
        }
        function yi(e) {
          return '[src="' + zt(e) + '"]';
        }
        function Ss(e) {
          return "script[async]" + e;
        }
        function bm(e, t, n) {
          if (t.count++, t.instance === null)
            switch (t.type) {
              case "style":
                var a = e.querySelector('style[data-href~="' + zt(n.href) + '"]');
                if (a)
                  return t.instance = a, et(a), a;
                var l = E({}, n, { "data-href": n.href, "data-precedence": n.precedence, href: null, precedence: null });
                return a = (e.ownerDocument || e).createElement("style"), et(a), Tt(a, "style", l), Pu(a, n.precedence, e), t.instance = a;
              case "stylesheet":
                l = gi(n.href);
                var i = e.querySelector(xs(l));
                if (i)
                  return t.state.loading |= 4, t.instance = i, et(i), i;
                a = ym(n), (l = mn.get(l)) && _f(a, l), i = (e.ownerDocument || e).createElement("link"), et(i);
                var f = i;
                return f._p = new Promise(function(v, j) {
                  f.onload = v, f.onerror = j;
                }), Tt(i, "link", a), t.state.loading |= 4, Pu(i, n.precedence, e), t.instance = i;
              case "script":
                return i = yi(n.src), (l = e.querySelector(Ss(i))) ? (t.instance = l, et(l), l) : (a = n, (l = mn.get(i)) && (a = E({}, n), Nf(a, l)), e = e.ownerDocument || e, l = e.createElement("script"), et(l), Tt(l, "link", a), e.head.appendChild(l), t.instance = l);
              case "void":
                return null;
              default:
                throw Error(o(443, t.type));
            }
          else
            t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Pu(a, n.precedence, e));
          return t.instance;
        }
        function Pu(e, t, n) {
          for (var a = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), l = a.length ? a[a.length - 1] : null, i = l, f = 0; f < a.length; f++) {
            var v = a[f];
            if (v.dataset.precedence === t)
              i = v;
            else if (i !== l)
              break;
          }
          i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
        }
        function _f(e, t) {
          e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
        }
        function Nf(e, t) {
          e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
        }
        var Iu = null;
        function vm(e, t, n) {
          if (Iu === null) {
            var a = /* @__PURE__ */ new Map(), l = Iu = /* @__PURE__ */ new Map();
            l.set(n, a);
          } else
            l = Iu, a = l.get(n), a || (a = /* @__PURE__ */ new Map(), l.set(n, a));
          if (a.has(e))
            return a;
          for (a.set(e, null), n = n.getElementsByTagName(e), l = 0; l < n.length; l++) {
            var i = n[l];
            if (!(i[On] || i[mt] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
              var f = i.getAttribute(t) || "";
              f = e + f;
              var v = a.get(f);
              v ? v.push(i) : a.set(f, [i]);
            }
          }
          return a;
        }
        function xm(e, t, n) {
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
        function Sm(e) {
          return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
        }
        function g0(e, t, n, a) {
          if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== false) && (n.state.loading & 4) === 0) {
            if (n.instance === null) {
              var l = gi(a.href), i = t.querySelector(xs(l));
              if (i) {
                t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = er.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = i, et(i);
                return;
              }
              i = t.ownerDocument || t, a = ym(a), (l = mn.get(l)) && _f(a, l), i = i.createElement("link"), et(i);
              var f = i;
              f._p = new Promise(function(v, j) {
                f.onload = v, f.onerror = j;
              }), Tt(i, "link", a), n.instance = i;
            }
            e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = er.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
          }
        }
        var jf = 0;
        function y0(e, t) {
          return e.stylesheets && e.count === 0 && nr(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
            var a = setTimeout(function() {
              if (e.stylesheets && nr(e, e.stylesheets), e.unsuspend) {
                var i = e.unsuspend;
                e.unsuspend = null, i();
              }
            }, 6e4 + t);
            0 < e.imgBytes && jf === 0 && (jf = 62500 * $g());
            var l = setTimeout(function() {
              if (e.waitingForImages = false, e.count === 0 && (e.stylesheets && nr(e, e.stylesheets), e.unsuspend)) {
                var i = e.unsuspend;
                e.unsuspend = null, i();
              }
            }, (e.imgBytes > jf ? 50 : 800) + t);
            return e.unsuspend = n, function() {
              e.unsuspend = null, clearTimeout(a), clearTimeout(l);
            };
          } : null;
        }
        function er() {
          if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets)
              nr(this, this.stylesheets);
            else if (this.unsuspend) {
              var e = this.unsuspend;
              this.unsuspend = null, e();
            }
          }
        }
        var tr = null;
        function nr(e, t) {
          e.stylesheets = null, e.unsuspend !== null && (e.count++, tr = /* @__PURE__ */ new Map(), t.forEach(b0, e), tr = null, er.call(e));
        }
        function b0(e, t) {
          if (!(t.state.loading & 4)) {
            var n = tr.get(e);
            if (n)
              var a = n.get(null);
            else {
              n = /* @__PURE__ */ new Map(), tr.set(e, n);
              for (var l = e.querySelectorAll("link[data-precedence],style[data-precedence]"), i = 0; i < l.length; i++) {
                var f = l[i];
                (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (n.set(f.dataset.precedence, f), a = f);
              }
              a && n.set(null, a);
            }
            l = t.instance, f = l.getAttribute("data-precedence"), i = n.get(f) || a, i === a && n.set(null, l), n.set(f, l), this.count++, a = er.bind(this), l.addEventListener("load", a), l.addEventListener("error", a), i ? i.parentNode.insertBefore(l, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(l, e.firstChild)), t.state.loading |= 4;
          }
        }
        var _s = { $$typeof: ae, Provider: null, Consumer: null, _currentValue: ce, _currentValue2: ce, _threadCount: 0 };
        function v0(e, t, n, a, l, i, f, v, j) {
          this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = el(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = el(0), this.hiddenUpdates = el(null), this.identifierPrefix = a, this.onUncaughtError = l, this.onCaughtError = i, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = j, this.incompleteTransitions = /* @__PURE__ */ new Map();
        }
        function _m(e, t, n, a, l, i, f, v, j, D, X, V) {
          return e = new v0(e, t, n, f, j, D, X, V, v), t = 1, i === true && (t |= 24), i = Zt(3, null, null, t), e.current = i, i.stateNode = e, t = to(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = { element: a, isDehydrated: n, cache: t }, io(i), e;
        }
        function Nm(e) {
          return e ? (e = Jl, e) : Jl;
        }
        function jm(e, t, n, a, l, i) {
          l = Nm(l), a.context === null ? a.context = l : a.pendingContext = l, a = Ra(t), a.payload = { element: n }, i = i === void 0 ? null : i, i !== null && (a.callback = i), n = Oa(e, a, t), n !== null && (Qt(n, e, t), es(n, e, t));
        }
        function Tm(e, t) {
          if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t;
          }
        }
        function Tf(e, t) {
          Tm(e, t), (e = e.alternate) && Tm(e, t);
        }
        function Em(e) {
          if (e.tag === 13 || e.tag === 31) {
            var t = fl(e, 67108864);
            t !== null && Qt(t, e, 67108864), Tf(e, 67108864);
          }
        }
        function wm(e) {
          if (e.tag === 13 || e.tag === 31) {
            var t = $t();
            t = rt(t);
            var n = fl(e, t);
            n !== null && Qt(n, e, t), Tf(e, t);
          }
        }
        var ar = true;
        function x0(e, t, n, a) {
          var l = Q.T;
          Q.T = null;
          var i = ee.p;
          try {
            ee.p = 2, Ef(e, t, n, a);
          } finally {
            ee.p = i, Q.T = l;
          }
        }
        function S0(e, t, n, a) {
          var l = Q.T;
          Q.T = null;
          var i = ee.p;
          try {
            ee.p = 8, Ef(e, t, n, a);
          } finally {
            ee.p = i, Q.T = l;
          }
        }
        function Ef(e, t, n, a) {
          if (ar) {
            var l = wf(a);
            if (l === null)
              df(e, t, a, lr, n), Rm(e, a);
            else if (N0(l, e, t, n, a))
              a.stopPropagation();
            else if (Rm(e, a), t & 4 && -1 < _0.indexOf(e)) {
              for (; l !== null; ) {
                var i = Cn(l);
                if (i !== null)
                  switch (i.tag) {
                    case 3:
                      if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                        var f = An(i.pendingLanes);
                        if (f !== 0) {
                          var v = i;
                          for (v.pendingLanes |= 2, v.entangledLanes |= 2; f; ) {
                            var j = 1 << 31 - wt(f);
                            v.entanglements[1] |= j, f &= ~j;
                          }
                          Ln(i), (De & 6) === 0 && (Yu = Ot() + 500, gs(0));
                        }
                      }
                      break;
                    case 31:
                    case 13:
                      v = fl(i, 2), v !== null && Qt(v, i, 2), Xu(), Tf(i, 2);
                  }
                if (i = wf(a), i === null && df(e, t, a, lr, n), i === l)
                  break;
                l = i;
              }
              l !== null && a.stopPropagation();
            } else
              df(e, t, a, null, n);
          }
        }
        function wf(e) {
          return e = Ul(e), Af(e);
        }
        var lr = null;
        function Af(e) {
          if (lr = null, e = ba(e), e !== null) {
            var t = b(e);
            if (t === null)
              e = null;
            else {
              var n = t.tag;
              if (n === 13) {
                if (e = m(t), e !== null)
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
          return lr = e, null;
        }
        function Am(e) {
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
                case be:
                  return 2;
                case Ri:
                  return 8;
                case Fa:
                case wr:
                  return 32;
                case wl:
                  return 268435456;
                default:
                  return 32;
              }
            default:
              return 32;
          }
        }
        var Rf = false, Qa = null, Xa = null, Ga = null, Ns = /* @__PURE__ */ new Map(), js = /* @__PURE__ */ new Map(), ka = [], _0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
        function Rm(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Qa = null;
              break;
            case "dragenter":
            case "dragleave":
              Xa = null;
              break;
            case "mouseover":
            case "mouseout":
              Ga = null;
              break;
            case "pointerover":
            case "pointerout":
              Ns.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              js.delete(t.pointerId);
          }
        }
        function Ts(e, t, n, a, l, i) {
          return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: a, nativeEvent: i, targetContainers: [l] }, t !== null && (t = Cn(t), t !== null && Em(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
        }
        function N0(e, t, n, a, l) {
          switch (t) {
            case "focusin":
              return Qa = Ts(Qa, e, t, n, a, l), true;
            case "dragenter":
              return Xa = Ts(Xa, e, t, n, a, l), true;
            case "mouseover":
              return Ga = Ts(Ga, e, t, n, a, l), true;
            case "pointerover":
              var i = l.pointerId;
              return Ns.set(i, Ts(Ns.get(i) || null, e, t, n, a, l)), true;
            case "gotpointercapture":
              return i = l.pointerId, js.set(i, Ts(js.get(i) || null, e, t, n, a, l)), true;
          }
          return false;
        }
        function Om(e) {
          var t = ba(e.target);
          if (t !== null) {
            var n = b(t);
            if (n !== null) {
              if (t = n.tag, t === 13) {
                if (t = m(n), t !== null) {
                  e.blockedOn = t, Vs(e.priority, function() {
                    wm(n);
                  });
                  return;
                }
              } else if (t === 31) {
                if (t = x(n), t !== null) {
                  e.blockedOn = t, Vs(e.priority, function() {
                    wm(n);
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
        function ir(e) {
          if (e.blockedOn !== null)
            return false;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = wf(e.nativeEvent);
            if (n === null) {
              n = e.nativeEvent;
              var a = new n.constructor(n.type, n);
              ll = a, n.target.dispatchEvent(a), ll = null;
            } else
              return t = Cn(n), t !== null && Em(t), e.blockedOn = n, false;
            t.shift();
          }
          return true;
        }
        function Cm(e, t, n) {
          ir(e) && n.delete(t);
        }
        function j0() {
          Rf = false, Qa !== null && ir(Qa) && (Qa = null), Xa !== null && ir(Xa) && (Xa = null), Ga !== null && ir(Ga) && (Ga = null), Ns.forEach(Cm), js.forEach(Cm);
        }
        function sr(e, t) {
          e.blockedOn === t && (e.blockedOn = null, Rf || (Rf = true, u.unstable_scheduleCallback(u.unstable_NormalPriority, j0)));
        }
        var ur = null;
        function zm(e) {
          ur !== e && (ur = e, u.unstable_scheduleCallback(u.unstable_NormalPriority, function() {
            ur === e && (ur = null);
            for (var t = 0; t < e.length; t += 3) {
              var n = e[t], a = e[t + 1], l = e[t + 2];
              if (typeof a != "function") {
                if (Af(a || n) === null)
                  continue;
                break;
              }
              var i = Cn(n);
              i !== null && (e.splice(t, 3), t -= 3, Eo(i, { pending: true, data: l, method: n.method, action: a }, a, l));
            }
          }));
        }
        function bi(e) {
          function t(j) {
            return sr(j, e);
          }
          Qa !== null && sr(Qa, e), Xa !== null && sr(Xa, e), Ga !== null && sr(Ga, e), Ns.forEach(t), js.forEach(t);
          for (var n = 0; n < ka.length; n++) {
            var a = ka[n];
            a.blockedOn === e && (a.blockedOn = null);
          }
          for (; 0 < ka.length && (n = ka[0], n.blockedOn === null); )
            Om(n), n.blockedOn === null && ka.shift();
          if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
            for (a = 0; a < n.length; a += 3) {
              var l = n[a], i = n[a + 1], f = l[bt] || null;
              if (typeof i == "function")
                f || zm(n);
              else if (f) {
                var v = null;
                if (i && i.hasAttribute("formAction")) {
                  if (l = i, f = i[bt] || null)
                    v = f.formAction;
                  else if (Af(l) !== null)
                    continue;
                } else
                  v = f.action;
                typeof v == "function" ? n[a + 1] = v : (n.splice(a, 3), a -= 3), zm(n);
              }
            }
        }
        function Mm() {
          function e(i) {
            i.canIntercept && i.info === "react-transition" && i.intercept({ handler: function() {
              return new Promise(function(f) {
                return l = f;
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
        function Of(e) {
          this._internalRoot = e;
        }
        rr.prototype.render = Of.prototype.render = function(e) {
          var t = this._internalRoot;
          if (t === null)
            throw Error(o(409));
          var n = t.current, a = $t();
          jm(n, a, e, t, null, null);
        }, rr.prototype.unmount = Of.prototype.unmount = function() {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            jm(e.current, 2, null, e, null, null), Xu(), t[Rn] = null;
          }
        };
        function rr(e) {
          this._internalRoot = e;
        }
        rr.prototype.unstable_scheduleHydration = function(e) {
          if (e) {
            var t = ks();
            e = { blockedOn: null, target: e, priority: t };
            for (var n = 0; n < ka.length && t !== 0 && t < ka[n].priority; n++)
              ;
            ka.splice(n, 0, e), n === 0 && Om(e);
          }
        };
        var Um = s.version;
        if (Um !== "19.2.0")
          throw Error(o(527, Um, "19.2.0"));
        ee.findDOMNode = function(e) {
          var t = e._reactInternals;
          if (t === void 0)
            throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
          return e = h(t), e = e !== null ? N(e) : null, e = e === null ? null : e.stateNode, e;
        };
        var T0 = { bundleType: 0, version: "19.2.0", rendererPackageName: "react-dom", currentDispatcherRef: Q, reconcilerVersion: "19.2.0" };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
          var or = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!or.isDisabled && or.supportsFiber)
            try {
              Wa = or.inject(T0), Ct = or;
            } catch (e) {
            }
        }
        return As.createRoot = function(e, t) {
          if (!y(e))
            throw Error(o(299));
          var n = false, a = "", l = Qd, i = Xd, f = Gd;
          return t != null && (t.unstable_strictMode === true && (n = true), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (l = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = _m(e, 1, false, null, null, n, a, null, l, i, f, Mm), e[Rn] = t.current, cf(e), new Of(t);
        }, As.hydrateRoot = function(e, t, n) {
          if (!y(e))
            throw Error(o(299));
          var a = false, l = "", i = Qd, f = Xd, v = Gd, j = null;
          return n != null && (n.unstable_strictMode === true && (a = true), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onUncaughtError !== void 0 && (i = n.onUncaughtError), n.onCaughtError !== void 0 && (f = n.onCaughtError), n.onRecoverableError !== void 0 && (v = n.onRecoverableError), n.formState !== void 0 && (j = n.formState)), t = _m(e, 1, true, t, n != null ? n : null, a, l, j, i, f, v, Mm), t.context = Nm(null), n = t.current, a = $t(), a = rt(a), l = Ra(a), l.callback = null, Oa(n, l, a), n = a, t.current.lanes = n, Gn(t, n), Ln(t), e[Rn] = t.current, cf(e), new rr(t);
        }, As.version = "19.2.0", As;
      }
      var Wm;
      function Ny() {
        if (Wm)
          return qf.exports;
        Wm = 1;
        function u() {
          if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
            } catch (s) {
              console.error(s);
            }
        }
        return u(), qf.exports = _y(), qf.exports;
      }
      var jy = Ny();
      var Ty = Np(jy);
      var Ey = Object.defineProperty;
      var wy = (u, s, r) => s in u ? Ey(u, s, { enumerable: true, configurable: true, writable: true, value: r }) : u[s] = r;
      var Tl = (u, s, r) => wy(u, typeof s != "symbol" ? s + "" : s, r);
      var Ay = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
      var xi = {};
      var Rs = {};
      var Sn = {};
      var $m;
      function Ap() {
        if ($m)
          return Sn;
        $m = 1;
        var u = Sn && Sn.__assign || function() {
          return u = Object.assign || function(y) {
            for (var b, m = 1, x = arguments.length; m < x; m++) {
              b = arguments[m];
              for (var p in b)
                Object.prototype.hasOwnProperty.call(b, p) && (y[p] = b[p]);
            }
            return y;
          }, u.apply(this, arguments);
        }, s = Sn && Sn.__awaiter || function(y, b, m, x) {
          function p(h) {
            return h instanceof m ? h : new m(function(N) {
              N(h);
            });
          }
          return new (m || (m = Promise))(function(h, N) {
            function E(B) {
              try {
                O(x.next(B));
              } catch (W) {
                N(W);
              }
            }
            function Y(B) {
              try {
                O(x.throw(B));
              } catch (W) {
                N(W);
              }
            }
            function O(B) {
              B.done ? h(B.value) : p(B.value).then(E, Y);
            }
            O((x = x.apply(y, b || [])).next());
          });
        }, r = Sn && Sn.__generator || function(y, b) {
          var m = { label: 0, sent: function() {
            if (h[0] & 1)
              throw h[1];
            return h[1];
          }, trys: [], ops: [] }, x, p, h, N;
          return N = { next: E(0), throw: E(1), return: E(2) }, typeof Symbol == "function" && (N[Symbol.iterator] = function() {
            return this;
          }), N;
          function E(O) {
            return function(B) {
              return Y([O, B]);
            };
          }
          function Y(O) {
            if (x)
              throw new TypeError("Generator is already executing.");
            for (; N && (N = 0, O[0] && (m = 0)), m; )
              try {
                if (x = 1, p && (h = O[0] & 2 ? p.return : O[0] ? p.throw || ((h = p.return) && h.call(p), 0) : p.next) && !(h = h.call(p, O[1])).done)
                  return h;
                switch (p = 0, h && (O = [O[0] & 2, h.value]), O[0]) {
                  case 0:
                  case 1:
                    h = O;
                    break;
                  case 4:
                    return m.label++, { value: O[1], done: false };
                  case 5:
                    m.label++, p = O[1], O = [0];
                    continue;
                  case 7:
                    O = m.ops.pop(), m.trys.pop();
                    continue;
                  default:
                    if (h = m.trys, !(h = h.length > 0 && h[h.length - 1]) && (O[0] === 6 || O[0] === 2)) {
                      m = 0;
                      continue;
                    }
                    if (O[0] === 3 && (!h || O[1] > h[0] && O[1] < h[3])) {
                      m.label = O[1];
                      break;
                    }
                    if (O[0] === 6 && m.label < h[1]) {
                      m.label = h[1], h = O;
                      break;
                    }
                    if (h && m.label < h[2]) {
                      m.label = h[2], m.ops.push(O);
                      break;
                    }
                    h[2] && m.ops.pop(), m.trys.pop();
                    continue;
                }
                O = b.call(y, m);
              } catch (B) {
                O = [6, B], p = 0;
              } finally {
                x = h = 0;
              }
            if (O[0] & 5)
              throw O[1];
            return { value: O[0] ? O[1] : void 0, done: true };
          }
        };
        Object.defineProperty(Sn, "__esModule", { value: true }), Sn.FrappeCall = void 0;
        var o = function() {
          function y(b, m, x, p, h) {
            this.appURL = b, this.axios = m, this.useToken = x != null ? x : false, this.token = p, this.tokenType = h;
          }
          return y.prototype.get = function(b, m) {
            return s(this, void 0, void 0, function() {
              var x;
              return r(this, function(p) {
                return x = new URLSearchParams(), m && Object.entries(m).forEach(function(h) {
                  var N = h[0], E = h[1];
                  if (E != null) {
                    var Y = typeof E == "object" ? JSON.stringify(E) : E;
                    x.set(N, Y);
                  }
                }), [2, this.axios.get("/api/method/".concat(b), { params: x }).then(function(h) {
                  return h.data;
                }).catch(function(h) {
                  var N, E;
                  throw u(u({}, h.response.data), { httpStatus: h.response.status, httpStatusText: h.response.statusText, message: (N = h.response.data.message) !== null && N !== void 0 ? N : "There was an error.", exception: (E = h.response.data.exception) !== null && E !== void 0 ? E : "" });
                })];
              });
            });
          }, y.prototype.post = function(b, m) {
            return s(this, void 0, void 0, function() {
              return r(this, function(x) {
                return [2, this.axios.post("/api/method/".concat(b), u({}, m)).then(function(p) {
                  return p.data;
                }).catch(function(p) {
                  var h, N;
                  throw u(u({}, p.response.data), { httpStatus: p.response.status, httpStatusText: p.response.statusText, message: (h = p.response.data.message) !== null && h !== void 0 ? h : "There was an error.", exception: (N = p.response.data.exception) !== null && N !== void 0 ? N : "" });
                })];
              });
            });
          }, y.prototype.put = function(b, m) {
            return s(this, void 0, void 0, function() {
              return r(this, function(x) {
                return [2, this.axios.put("/api/method/".concat(b), u({}, m)).then(function(p) {
                  return p.data;
                }).catch(function(p) {
                  var h, N;
                  throw u(u({}, p.response.data), { httpStatus: p.response.status, httpStatusText: p.response.statusText, message: (h = p.response.data.message) !== null && h !== void 0 ? h : "There was an error.", exception: (N = p.response.data.exception) !== null && N !== void 0 ? N : "" });
                })];
              });
            });
          }, y.prototype.delete = function(b, m) {
            return s(this, void 0, void 0, function() {
              return r(this, function(x) {
                return [2, this.axios.delete("/api/method/".concat(b), { params: m }).then(function(p) {
                  return p.data;
                }).catch(function(p) {
                  var h, N;
                  throw u(u({}, p.response.data), { httpStatus: p.response.status, httpStatusText: p.response.statusText, message: (h = p.response.data.message) !== null && h !== void 0 ? h : "There was an error.", exception: (N = p.response.data.exception) !== null && N !== void 0 ? N : "" });
                })];
              });
            });
          }, y;
        }();
        return Sn.FrappeCall = o, Sn;
      }
      var _n = {};
      var Pm;
      function Rp() {
        if (Pm)
          return _n;
        Pm = 1;
        var u = _n && _n.__assign || function() {
          return u = Object.assign || function(y) {
            for (var b, m = 1, x = arguments.length; m < x; m++) {
              b = arguments[m];
              for (var p in b)
                Object.prototype.hasOwnProperty.call(b, p) && (y[p] = b[p]);
            }
            return y;
          }, u.apply(this, arguments);
        }, s = _n && _n.__awaiter || function(y, b, m, x) {
          function p(h) {
            return h instanceof m ? h : new m(function(N) {
              N(h);
            });
          }
          return new (m || (m = Promise))(function(h, N) {
            function E(B) {
              try {
                O(x.next(B));
              } catch (W) {
                N(W);
              }
            }
            function Y(B) {
              try {
                O(x.throw(B));
              } catch (W) {
                N(W);
              }
            }
            function O(B) {
              B.done ? h(B.value) : p(B.value).then(E, Y);
            }
            O((x = x.apply(y, b || [])).next());
          });
        }, r = _n && _n.__generator || function(y, b) {
          var m = { label: 0, sent: function() {
            if (h[0] & 1)
              throw h[1];
            return h[1];
          }, trys: [], ops: [] }, x, p, h, N;
          return N = { next: E(0), throw: E(1), return: E(2) }, typeof Symbol == "function" && (N[Symbol.iterator] = function() {
            return this;
          }), N;
          function E(O) {
            return function(B) {
              return Y([O, B]);
            };
          }
          function Y(O) {
            if (x)
              throw new TypeError("Generator is already executing.");
            for (; N && (N = 0, O[0] && (m = 0)), m; )
              try {
                if (x = 1, p && (h = O[0] & 2 ? p.return : O[0] ? p.throw || ((h = p.return) && h.call(p), 0) : p.next) && !(h = h.call(p, O[1])).done)
                  return h;
                switch (p = 0, h && (O = [O[0] & 2, h.value]), O[0]) {
                  case 0:
                  case 1:
                    h = O;
                    break;
                  case 4:
                    return m.label++, { value: O[1], done: false };
                  case 5:
                    m.label++, p = O[1], O = [0];
                    continue;
                  case 7:
                    O = m.ops.pop(), m.trys.pop();
                    continue;
                  default:
                    if (h = m.trys, !(h = h.length > 0 && h[h.length - 1]) && (O[0] === 6 || O[0] === 2)) {
                      m = 0;
                      continue;
                    }
                    if (O[0] === 3 && (!h || O[1] > h[0] && O[1] < h[3])) {
                      m.label = O[1];
                      break;
                    }
                    if (O[0] === 6 && m.label < h[1]) {
                      m.label = h[1], h = O;
                      break;
                    }
                    if (h && m.label < h[2]) {
                      m.label = h[2], m.ops.push(O);
                      break;
                    }
                    h[2] && m.ops.pop(), m.trys.pop();
                    continue;
                }
                O = b.call(y, m);
              } catch (B) {
                O = [6, B], p = 0;
              } finally {
                x = h = 0;
              }
            if (O[0] & 5)
              throw O[1];
            return { value: O[0] ? O[1] : void 0, done: true };
          }
        };
        Object.defineProperty(_n, "__esModule", { value: true }), _n.FrappeDB = void 0;
        var o = function() {
          function y(b, m, x, p, h) {
            this.appURL = b, this.axios = m, this.useToken = x != null ? x : false, this.token = p, this.tokenType = h;
          }
          return y.prototype.getDoc = function(b, m) {
            return m === void 0 && (m = ""), s(this, void 0, void 0, function() {
              return r(this, function(x) {
                return [2, this.axios.get("/api/resource/".concat(b, "/").concat(encodeURIComponent(m))).then(function(p) {
                  return p.data.data;
                }).catch(function(p) {
                  var h, N;
                  throw u(u({}, p.response.data), { httpStatus: p.response.status, httpStatusText: p.response.statusText, message: "There was an error while fetching the document.", exception: (N = (h = p.response.data.exception) !== null && h !== void 0 ? h : p.response.data.exc_type) !== null && N !== void 0 ? N : "" });
                })];
              });
            });
          }, y.prototype.getDocList = function(b, m) {
            var x;
            return s(this, void 0, void 0, function() {
              var p, h, N, E, Y, O, B, W, fe, $, ue;
              return r(this, function(ae) {
                return p = {}, m && (h = m.fields, N = m.filters, E = m.orFilters, Y = m.orderBy, O = m.limit, B = m.limit_start, W = m.groupBy, fe = m.asDict, $ = fe === void 0 ? true : fe, ue = Y ? "".concat(String(Y == null ? void 0 : Y.field), " ").concat((x = Y == null ? void 0 : Y.order) !== null && x !== void 0 ? x : "asc") : "", p = { fields: h ? JSON.stringify(h) : void 0, filters: N ? JSON.stringify(N) : void 0, or_filters: E ? JSON.stringify(E) : void 0, order_by: ue, group_by: W, limit: O, limit_start: B, as_dict: $ }), [2, this.axios.get("/api/resource/".concat(b), { params: p }).then(function(he) {
                  return he.data.data;
                }).catch(function(he) {
                  var ge, Se;
                  throw u(u({}, he.response.data), { httpStatus: he.response.status, httpStatusText: he.response.statusText, message: "There was an error while fetching the documents.", exception: (Se = (ge = he.response.data.exception) !== null && ge !== void 0 ? ge : he.response.data.exc_type) !== null && Se !== void 0 ? Se : "" });
                })];
              });
            });
          }, y.prototype.createDoc = function(b, m) {
            return s(this, void 0, void 0, function() {
              return r(this, function(x) {
                return [2, this.axios.post("/api/resource/".concat(b), u({}, m)).then(function(p) {
                  return p.data.data;
                }).catch(function(p) {
                  var h, N, E;
                  throw u(u({}, p.response.data), { httpStatus: p.response.status, httpStatusText: p.response.statusText, message: (h = p.response.data.message) !== null && h !== void 0 ? h : "There was an error while creating the document.", exception: (E = (N = p.response.data.exception) !== null && N !== void 0 ? N : p.response.data.exc_type) !== null && E !== void 0 ? E : "" });
                })];
              });
            });
          }, y.prototype.updateDoc = function(b, m, x) {
            return s(this, void 0, void 0, function() {
              return r(this, function(p) {
                return [2, this.axios.put("/api/resource/".concat(b, "/").concat(m && encodeURIComponent(m)), u({}, x)).then(function(h) {
                  return h.data.data;
                }).catch(function(h) {
                  var N, E, Y;
                  throw u(u({}, h.response.data), { httpStatus: h.response.status, httpStatusText: h.response.statusText, message: (N = h.response.data.message) !== null && N !== void 0 ? N : "There was an error while updating the document.", exception: (Y = (E = h.response.data.exception) !== null && E !== void 0 ? E : h.response.data.exc_type) !== null && Y !== void 0 ? Y : "" });
                })];
              });
            });
          }, y.prototype.deleteDoc = function(b, m) {
            return s(this, void 0, void 0, function() {
              return r(this, function(x) {
                return [2, this.axios.delete("/api/resource/".concat(b, "/").concat(m && encodeURIComponent(m))).then(function(p) {
                  return p.data;
                }).catch(function(p) {
                  var h, N;
                  throw u(u({}, p.response.data), { httpStatus: p.response.status, httpStatusText: p.response.statusText, message: "There was an error while deleting the document.", exception: (N = (h = p.response.data.exception) !== null && h !== void 0 ? h : p.response.data.exc_type) !== null && N !== void 0 ? N : "" });
                })];
              });
            });
          }, y.prototype.getCount = function(b, m, x, p) {
            return x === void 0 && (x = false), p === void 0 && (p = false), s(this, void 0, void 0, function() {
              var h;
              return r(this, function(N) {
                return h = { doctype: b, filters: [] }, x && (h.cache = x), p && (h.debug = p), m && (h.filters = m ? JSON.stringify(m) : void 0), [2, this.axios.get("/api/method/frappe.client.get_count", { params: h }).then(function(E) {
                  return E.data.message;
                }).catch(function(E) {
                  var Y, O;
                  throw u(u({}, E.response.data), { httpStatus: E.response.status, httpStatusText: E.response.statusText, message: "There was an error while getting the count.", exception: (O = (Y = E.response.data.exception) !== null && Y !== void 0 ? Y : E.response.data.exc_type) !== null && O !== void 0 ? O : "" });
                })];
              });
            });
          }, y.prototype.getLastDoc = function(b, m) {
            return s(this, void 0, void 0, function() {
              var x, p;
              return r(this, function(h) {
                switch (h.label) {
                  case 0:
                    return x = { orderBy: { field: "creation", order: "desc" } }, m && (x = u(u({}, x), m)), [4, this.getDocList(b, u(u({}, x), { limit: 1, fields: ["name"] }))];
                  case 1:
                    return p = h.sent(), p.length > 0 ? [2, this.getDoc(b, p[0].name)] : [2, {}];
                }
              });
            });
          }, y.prototype.renameDoc = function(b, m, x, p) {
            return p === void 0 && (p = false), s(this, void 0, void 0, function() {
              return r(this, function(h) {
                return [2, this.axios.post("/api/method/frappe.client.rename_doc", { doctype: b, old_name: m, new_name: x, merge: p }).then(function(N) {
                  return N.data;
                }).catch(function(N) {
                  var E, Y, O;
                  throw u(u({}, N.response.data), { httpStatus: N.response.status, httpStatusText: N.response.statusText, message: (E = N.response.data.message) !== null && E !== void 0 ? E : "There was an error while renaming the document.", exception: (O = (Y = N.response.data.exception) !== null && Y !== void 0 ? Y : N.response.data.exc_type) !== null && O !== void 0 ? O : "" });
                })];
              });
            });
          }, y.prototype.getValue = function(b, m, x, p, h, N) {
            return p === void 0 && (p = true), h === void 0 && (h = false), N === void 0 && (N = null), s(this, void 0, void 0, function() {
              var E;
              return r(this, function(Y) {
                return E = { doctype: b, fieldname: "[]", filters: [], as_dict: p, debug: h, parent: null }, m && (E.fieldname = typeof m == "object" ? JSON.stringify(m) : m), x && (E.filters = x ? JSON.stringify(x) : void 0), N && (E.parent = N), [2, this.axios.get("/api/method/frappe.client.get_value", { params: E }).then(function(O) {
                  return O.data;
                }).catch(function(O) {
                  var B, W;
                  throw u(u({}, O.response.data), { httpStatus: O.response.status, httpStatusText: O.response.statusText, message: "There was an error while getting the value.", exception: (W = (B = O.response.data.exception) !== null && B !== void 0 ? B : O.response.data.exc_type) !== null && W !== void 0 ? W : "" });
                })];
              });
            });
          }, y.prototype.setValue = function(b, m, x, p) {
            return s(this, void 0, void 0, function() {
              return r(this, function(h) {
                return x !== null && typeof x == "object" && !Array.isArray(x) && (p = void 0), [2, this.axios.post("/api/method/frappe.client.set_value", { doctype: b, name: m, fieldname: x, value: p }).then(function(N) {
                  return N.data;
                }).catch(function(N) {
                  var E, Y;
                  throw u(u({}, N.response.data), { httpStatus: N.response.status, httpStatusText: N.response.statusText, message: "There was an error while setting the value.", exception: (Y = (E = N.response.data.exception) !== null && E !== void 0 ? E : N.response.data.exc_type) !== null && Y !== void 0 ? Y : "" });
                })];
              });
            });
          }, y.prototype.getSingleValue = function(b, m) {
            return s(this, void 0, void 0, function() {
              var x;
              return r(this, function(p) {
                return x = { doctype: b, field: m }, [2, this.axios.get("/api/method/frappe.client.get_single_value", { params: x }).then(function(h) {
                  return h.data;
                }).catch(function(h) {
                  var N, E;
                  throw u(u({}, h.response.data), { httpStatus: h.response.status, httpStatusText: h.response.statusText, message: "There was an error while getting the value of single doctype.", exception: (E = (N = h.response.data.exception) !== null && N !== void 0 ? N : h.response.data.exc_type) !== null && E !== void 0 ? E : "" });
                })];
              });
            });
          }, y.prototype.submit = function(b) {
            return s(this, void 0, void 0, function() {
              return r(this, function(m) {
                return [2, this.axios.post("/api/method/frappe.client.submit", { doc: b }).then(function(x) {
                  return x.data.message;
                }).catch(function(x) {
                  var p, h;
                  throw u(u({}, x.response.data), { httpStatus: x.response.status, httpStatusText: x.response.statusText, message: "There was an error while submitting the document.", exception: (h = (p = x.response.data.exception) !== null && p !== void 0 ? p : x.response.data.exc_type) !== null && h !== void 0 ? h : "" });
                })];
              });
            });
          }, y.prototype.cancel = function(b, m) {
            return s(this, void 0, void 0, function() {
              return r(this, function(x) {
                return [2, this.axios.post("/api/method/frappe.client.cancel", { doctype: b, name: m }).then(function(p) {
                  return p.data;
                }).catch(function(p) {
                  var h, N;
                  throw u(u({}, p.response.data), { httpStatus: p.response.status, httpStatusText: p.response.statusText, message: "There was an error while cancelling the document.", exception: (N = (h = p.response.data.exception) !== null && h !== void 0 ? h : p.response.data.exc_type) !== null && N !== void 0 ? N : "" });
                })];
              });
            });
          }, y;
        }();
        return _n.FrappeDB = o, _n;
      }
      var Nn = {};
      var ma = {};
      var Qf;
      var Im;
      function Ry() {
        if (Im)
          return Qf;
        Im = 1;
        function u(c, g) {
          return function() {
            return c.apply(g, arguments);
          };
        }
        const { toString: s } = Object.prototype, { getPrototypeOf: r } = Object, { iterator: o, toStringTag: y } = Symbol, b = ((c) => (g) => {
          const S = s.call(g);
          return c[S] || (c[S] = S.slice(8, -1).toLowerCase());
        })(/* @__PURE__ */ Object.create(null)), m = (c) => (c = c.toLowerCase(), (g) => b(g) === c), x = (c) => (g) => typeof g === c, { isArray: p } = Array, h = x("undefined");
        function N(c) {
          return c !== null && !h(c) && c.constructor !== null && !h(c.constructor) && B(c.constructor.isBuffer) && c.constructor.isBuffer(c);
        }
        const E = m("ArrayBuffer");
        function Y(c) {
          let g;
          return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? g = ArrayBuffer.isView(c) : g = c && c.buffer && E(c.buffer), g;
        }
        const O = x("string"), B = x("function"), W = x("number"), fe = (c) => c !== null && typeof c == "object", $ = (c) => c === true || c === false, ue = (c) => {
          if (b(c) !== "object")
            return false;
          const g = r(c);
          return (g === null || g === Object.prototype || Object.getPrototypeOf(g) === null) && !(y in c) && !(o in c);
        }, ae = (c) => {
          if (!fe(c) || N(c))
            return false;
          try {
            return Object.keys(c).length === 0 && Object.getPrototypeOf(c) === Object.prototype;
          } catch (g) {
            return false;
          }
        }, he = m("Date"), ge = m("File"), Se = m("Blob"), ie = m("FileList"), ze = (c) => fe(c) && B(c.pipe), ke = (c) => {
          let g;
          return c && (typeof FormData == "function" && c instanceof FormData || B(c.append) && ((g = b(c)) === "formdata" || g === "object" && B(c.toString) && c.toString() === "[object FormData]"));
        }, Ut = m("URLSearchParams"), [yt, nt, Ve, Ce] = ["ReadableStream", "Request", "Response", "Headers"].map(m), Pe = (c) => c.trim ? c.trim() : c.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        function Q(c, g, { allOwnKeys: S = false } = {}) {
          if (c === null || typeof c > "u")
            return;
          let _, w;
          if (typeof c != "object" && (c = [c]), p(c))
            for (_ = 0, w = c.length; _ < w; _++)
              g.call(null, c[_], _, c);
          else {
            if (N(c))
              return;
            const M = S ? Object.getOwnPropertyNames(c) : Object.keys(c), z = M.length;
            let K;
            for (_ = 0; _ < z; _++)
              K = M[_], g.call(null, c[K], K, c);
          }
        }
        function ee(c, g) {
          if (N(c))
            return null;
          g = g.toLowerCase();
          const S = Object.keys(c);
          let _ = S.length, w;
          for (; _-- > 0; )
            if (w = S[_], g === w.toLowerCase())
              return w;
          return null;
        }
        const ce = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Ay, te = (c) => !h(c) && c !== ce;
        function ne() {
          const { caseless: c, skipUndefined: g } = te(this) && this || {}, S = {}, _ = (w, M) => {
            const z = c && ee(S, M) || M;
            ue(S[z]) && ue(w) ? S[z] = ne(S[z], w) : ue(w) ? S[z] = ne({}, w) : p(w) ? S[z] = w.slice() : (!g || !h(w)) && (S[z] = w);
          };
          for (let w = 0, M = arguments.length; w < M; w++)
            arguments[w] && Q(arguments[w], _);
          return S;
        }
        const T = (c, g, S, { allOwnKeys: _ } = {}) => (Q(g, (w, M) => {
          S && B(w) ? c[M] = u(w, S) : c[M] = w;
        }, { allOwnKeys: _ }), c), A = (c) => (c.charCodeAt(0) === 65279 && (c = c.slice(1)), c), G = (c, g, S, _) => {
          c.prototype = Object.create(g.prototype, _), c.prototype.constructor = c, Object.defineProperty(c, "super", { value: g.prototype }), S && Object.assign(c.prototype, S);
        }, Z = (c, g, S, _) => {
          let w, M, z;
          const K = {};
          if (g = g || {}, c == null)
            return g;
          do {
            for (w = Object.getOwnPropertyNames(c), M = w.length; M-- > 0; )
              z = w[M], (!_ || _(z, c, g)) && !K[z] && (g[z] = c[z], K[z] = true);
            c = S !== false && r(c);
          } while (c && (!S || S(c, g)) && c !== Object.prototype);
          return g;
        }, J = (c, g, S) => {
          c = String(c), (S === void 0 || S > c.length) && (S = c.length), S -= g.length;
          const _ = c.indexOf(g, S);
          return _ !== -1 && _ === S;
        }, ye = (c) => {
          if (!c)
            return null;
          if (p(c))
            return c;
          let g = c.length;
          if (!W(g))
            return null;
          const S = new Array(g);
          for (; g-- > 0; )
            S[g] = c[g];
          return S;
        }, Oe = ((c) => (g) => c && g instanceof c)(typeof Uint8Array < "u" && r(Uint8Array)), Be = (c, g) => {
          const S = (c && c[o]).call(c);
          let _;
          for (; (_ = S.next()) && !_.done; ) {
            const w = _.value;
            g.call(c, w[0], w[1]);
          }
        }, Je = (c, g) => {
          let S;
          const _ = [];
          for (; (S = c.exec(g)) !== null; )
            _.push(S);
          return _;
        }, Xn = m("HTMLFormElement"), Et = (c) => c.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(g, S, _) {
          return S.toUpperCase() + _;
        }), ga = (({ hasOwnProperty: c }) => (g, S) => c.call(g, S))(Object.prototype), Us = m("RegExp"), wn = (c, g) => {
          const S = Object.getOwnPropertyDescriptors(c), _ = {};
          Q(S, (w, M) => {
            let z;
            (z = g(w, M, c)) !== false && (_[M] = z || w);
          }), Object.defineProperties(c, _);
        }, ji = (c) => {
          wn(c, (g, S) => {
            if (B(c) && ["arguments", "caller", "callee"].indexOf(S) !== -1)
              return false;
            const _ = c[S];
            if (B(_)) {
              if (g.enumerable = false, "writable" in g) {
                g.writable = false;
                return;
              }
              g.set || (g.set = () => {
                throw Error("Can not rewrite read-only method '" + S + "'");
              });
            }
          });
        }, Ti = (c, g) => {
          const S = {}, _ = (w) => {
            w.forEach((M) => {
              S[M] = true;
            });
          };
          return p(c) ? _(c) : _(String(c).split(g)), S;
        }, Tr = () => {
        }, Ds = (c, g) => c != null && Number.isFinite(c = +c) ? c : g;
        function Ei(c) {
          return !!(c && B(c.append) && c[y] === "FormData" && c[o]);
        }
        const wi = (c) => {
          const g = new Array(10), S = (_, w) => {
            if (fe(_)) {
              if (g.indexOf(_) >= 0)
                return;
              if (N(_))
                return _;
              if (!("toJSON" in _)) {
                g[w] = _;
                const M = p(_) ? [] : {};
                return Q(_, (z, K) => {
                  const re = S(z, w + 1);
                  !h(re) && (M[K] = re);
                }), g[w] = void 0, M;
              }
            }
            return _;
          };
          return S(c, 0);
        }, Ai = m("AsyncFunction"), Er = (c) => c && (fe(c) || B(c)) && B(c.then) && B(c.catch), Bs = ((c, g) => c ? setImmediate : g ? ((S, _) => (ce.addEventListener("message", ({ source: w, data: M }) => {
          w === ce && M === S && _.length && _.shift()();
        }, false), (w) => {
          _.push(w), ce.postMessage(S, "*");
        }))(`axios@${Math.random()}`, []) : (S) => setTimeout(S))(typeof setImmediate == "function", B(ce.postMessage)), Ot = typeof queueMicrotask < "u" ? queueMicrotask.bind(ce) : typeof process < "u" && process.nextTick || Bs;
        var H = { isArray: p, isArrayBuffer: E, isBuffer: N, isFormData: ke, isArrayBufferView: Y, isString: O, isNumber: W, isBoolean: $, isObject: fe, isPlainObject: ue, isEmptyObject: ae, isReadableStream: yt, isRequest: nt, isResponse: Ve, isHeaders: Ce, isUndefined: h, isDate: he, isFile: ge, isBlob: Se, isRegExp: Us, isFunction: B, isStream: ze, isURLSearchParams: Ut, isTypedArray: Oe, isFileList: ie, forEach: Q, merge: ne, extend: T, trim: Pe, stripBOM: A, inherits: G, toFlatObject: Z, kindOf: b, kindOfTest: m, endsWith: J, toArray: ye, forEachEntry: Be, matchAll: Je, isHTMLForm: Xn, hasOwnProperty: ga, hasOwnProp: ga, reduceDescriptors: wn, freezeMethods: ji, toObjectSet: Ti, toCamelCase: Et, noop: Tr, toFiniteNumber: Ds, findKey: ee, global: ce, isContextDefined: te, isSpecCompliantForm: Ei, toJSONObject: wi, isAsyncFn: Ai, isThenable: Er, setImmediate: Bs, asap: Ot, isIterable: (c) => c != null && B(c[o]) };
        function be(c, g, S, _, w) {
          Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = c, this.name = "AxiosError", g && (this.code = g), S && (this.config = S), _ && (this.request = _), w && (this.response = w, this.status = w.status ? w.status : null);
        }
        H.inherits(be, Error, { toJSON: function() {
          return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: H.toJSONObject(this.config), code: this.code, status: this.status };
        } });
        const Ri = be.prototype, Fa = {};
        ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((c) => {
          Fa[c] = { value: c };
        }), Object.defineProperties(be, Fa), Object.defineProperty(Ri, "isAxiosError", { value: true }), be.from = (c, g, S, _, w, M) => {
          const z = Object.create(Ri);
          H.toFlatObject(c, z, function(F) {
            return F !== Error.prototype;
          }, (F) => F !== "isAxiosError");
          const K = c && c.message ? c.message : "Error", re = g == null && c ? c.code : g;
          return be.call(z, K, re, S, _, w), c && z.cause == null && Object.defineProperty(z, "cause", { value: c, configurable: true }), z.name = c && c.name || "Error", M && Object.assign(z, M), z;
        };
        var wr = null;
        function wl(c) {
          return H.isPlainObject(c) || H.isArray(c);
        }
        function qs(c) {
          return H.endsWith(c, "[]") ? c.slice(0, -2) : c;
        }
        function Hs(c, g, S) {
          return c ? c.concat(g).map(function(_, w) {
            return _ = qs(_), !S && w ? "[" + _ + "]" : _;
          }).join(S ? "." : "") : g;
        }
        function Wa(c) {
          return H.isArray(c) && !c.some(wl);
        }
        const Ct = H.toFlatObject(H, {}, null, function(c) {
          return /^is[A-Z]/.test(c);
        });
        function Gt(c, g, S) {
          if (!H.isObject(c))
            throw new TypeError("target must be an object");
          g = g || new FormData(), S = H.toFlatObject(S, { metaTokens: true, dots: false, indexes: false }, false, function(ve, I) {
            return !H.isUndefined(I[ve]);
          });
          const _ = S.metaTokens, w = S.visitor || F, M = S.dots, z = S.indexes, K = (S.Blob || typeof Blob < "u" && Blob) && H.isSpecCompliantForm(g);
          if (!H.isFunction(w))
            throw new TypeError("visitor must be a function");
          function re(ve) {
            if (ve === null)
              return "";
            if (H.isDate(ve))
              return ve.toISOString();
            if (H.isBoolean(ve))
              return ve.toString();
            if (!K && H.isBlob(ve))
              throw new be("Blob is not supported. Use a Buffer instead.");
            return H.isArrayBuffer(ve) || H.isTypedArray(ve) ? K && typeof Blob == "function" ? new Blob([ve]) : Buffer.from(ve) : ve;
          }
          function F(ve, I, le) {
            let Fe = ve;
            if (ve && !le && typeof ve == "object") {
              if (H.endsWith(I, "{}"))
                I = _ ? I : I.slice(0, -2), ve = JSON.stringify(ve);
              else if (H.isArray(ve) && Wa(ve) || (H.isFileList(ve) || H.endsWith(I, "[]")) && (Fe = H.toArray(ve)))
                return I = qs(I), Fe.forEach(function(xt, it) {
                  !(H.isUndefined(xt) || xt === null) && g.append(z === true ? Hs([I], it, M) : z === null ? I : I + "[]", re(xt));
                }), false;
            }
            return wl(ve) ? true : (g.append(Hs(le, I, M), re(ve)), false);
          }
          const P = [], pe = Object.assign(Ct, { defaultVisitor: F, convertValue: re, isVisitable: wl });
          function Le(ve, I) {
            if (!H.isUndefined(ve)) {
              if (P.indexOf(ve) !== -1)
                throw Error("Circular reference detected in " + I.join("."));
              P.push(ve), H.forEach(ve, function(le, Fe) {
                (!(H.isUndefined(le) || le === null) && w.call(g, le, H.isString(Fe) ? Fe.trim() : Fe, I, pe)) === true && Le(le, I ? I.concat(Fe) : [Fe]);
              }), P.pop();
            }
          }
          if (!H.isObject(c))
            throw new TypeError("data must be an object");
          return Le(c), g;
        }
        function wt(c) {
          const g = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
          return encodeURIComponent(c).replace(/[!'()~]|%20|%00/g, function(S) {
            return g[S];
          });
        }
        function Oi(c, g) {
          this._pairs = [], c && Gt(c, this, g);
        }
        const Ls = Oi.prototype;
        Ls.append = function(c, g) {
          this._pairs.push([c, g]);
        }, Ls.toString = function(c) {
          const g = c ? function(S) {
            return c.call(this, S, wt);
          } : wt;
          return this._pairs.map(function(S) {
            return g(S[0]) + "=" + g(S[1]);
          }, "").join("&");
        };
        function Ar(c) {
          return encodeURIComponent(c).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
        }
        function $a(c, g, S) {
          if (!g)
            return c;
          const _ = S && S.encode || Ar;
          H.isFunction(S) && (S = { serialize: S });
          const w = S && S.serialize;
          let M;
          if (w ? M = w(g, S) : M = H.isURLSearchParams(g) ? g.toString() : new Oi(g, S).toString(_), M) {
            const z = c.indexOf("#");
            z !== -1 && (c = c.slice(0, z)), c += (c.indexOf("?") === -1 ? "?" : "&") + M;
          }
          return c;
        }
        class Al {
          constructor() {
            this.handlers = [];
          }
          use(g, S, _) {
            return this.handlers.push({ fulfilled: g, rejected: S, synchronous: _ ? _.synchronous : false, runWhen: _ ? _.runWhen : null }), this.handlers.length - 1;
          }
          eject(g) {
            this.handlers[g] && (this.handlers[g] = null);
          }
          clear() {
            this.handlers && (this.handlers = []);
          }
          forEach(g) {
            H.forEach(this.handlers, function(S) {
              S !== null && g(S);
            });
          }
        }
        var Pa = Al, An = { silentJSONParsing: true, forcedJSONParsing: true, clarifyTimeoutError: false }, Rl = typeof URLSearchParams < "u" ? URLSearchParams : Oi, Ia = typeof FormData < "u" ? FormData : null, Rr = typeof Blob < "u" ? Blob : null, Ys = { isBrowser: true, classes: { URLSearchParams: Rl, FormData: Ia, Blob: Rr }, protocols: ["http", "https", "file", "blob", "url", "data"] };
        const el = typeof window < "u" && typeof document < "u", Gn = typeof navigator == "object" && navigator || void 0, Or = el && (!Gn || ["ReactNative", "NativeScript", "NS"].indexOf(Gn.product) < 0), Qs = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Xs = el && window.location.href || "http://localhost";
        var Gs = Object.freeze({ __proto__: null, hasBrowserEnv: el, hasStandardBrowserWebWorkerEnv: Qs, hasStandardBrowserEnv: Or, navigator: Gn, origin: Xs }), rt = Ge(Ge({}, Gs), Ys);
        function Ci(c, g) {
          return Gt(c, new rt.classes.URLSearchParams(), Ge({ visitor: function(S, _, w, M) {
            return rt.isNode && H.isBuffer(S) ? (this.append(_, S.toString("base64")), false) : M.defaultVisitor.apply(this, arguments);
          } }, g));
        }
        function ks(c) {
          return H.matchAll(/\w+|\[(\w*)]/g, c).map((g) => g[0] === "[]" ? "" : g[1] || g[0]);
        }
        function Vs(c) {
          const g = {}, S = Object.keys(c);
          let _;
          const w = S.length;
          let M;
          for (_ = 0; _ < w; _++)
            M = S[_], g[M] = c[M];
          return g;
        }
        function gn(c) {
          function g(S, _, w, M) {
            let z = S[M++];
            if (z === "__proto__")
              return true;
            const K = Number.isFinite(+z), re = M >= S.length;
            return z = !z && H.isArray(w) ? w.length : z, re ? (H.hasOwnProp(w, z) ? w[z] = [w[z], _] : w[z] = _, !K) : ((!w[z] || !H.isObject(w[z])) && (w[z] = []), g(S, _, w[z], M) && H.isArray(w[z]) && (w[z] = Vs(w[z])), !K);
          }
          if (H.isFormData(c) && H.isFunction(c.entries)) {
            const S = {};
            return H.forEachEntry(c, (_, w) => {
              g(ks(_), w, S, 0);
            }), S;
          }
          return null;
        }
        function mt(c, g, S) {
          if (H.isString(c))
            try {
              return (g || JSON.parse)(c), H.trim(c);
            } catch (_) {
              if (_.name !== "SyntaxError")
                throw _;
            }
          return (S || JSON.stringify)(c);
        }
        const bt = { transitional: An, adapter: ["xhr", "http", "fetch"], transformRequest: [function(c, g) {
          const S = g.getContentType() || "", _ = S.indexOf("application/json") > -1, w = H.isObject(c);
          if (w && H.isHTMLForm(c) && (c = new FormData(c)), H.isFormData(c))
            return _ ? JSON.stringify(gn(c)) : c;
          if (H.isArrayBuffer(c) || H.isBuffer(c) || H.isStream(c) || H.isFile(c) || H.isBlob(c) || H.isReadableStream(c))
            return c;
          if (H.isArrayBufferView(c))
            return c.buffer;
          if (H.isURLSearchParams(c))
            return g.setContentType("application/x-www-form-urlencoded;charset=utf-8", false), c.toString();
          let M;
          if (w) {
            if (S.indexOf("application/x-www-form-urlencoded") > -1)
              return Ci(c, this.formSerializer).toString();
            if ((M = H.isFileList(c)) || S.indexOf("multipart/form-data") > -1) {
              const z = this.env && this.env.FormData;
              return Gt(M ? { "files[]": c } : c, z && new z(), this.formSerializer);
            }
          }
          return w || _ ? (g.setContentType("application/json", false), mt(c)) : c;
        }], transformResponse: [function(c) {
          const g = this.transitional || bt.transitional, S = g && g.forcedJSONParsing, _ = this.responseType === "json";
          if (H.isResponse(c) || H.isReadableStream(c))
            return c;
          if (c && H.isString(c) && (S && !this.responseType || _)) {
            const w = !(g && g.silentJSONParsing) && _;
            try {
              return JSON.parse(c, this.parseReviver);
            } catch (M) {
              if (w)
                throw M.name === "SyntaxError" ? be.from(M, be.ERR_BAD_RESPONSE, this, null, this.response) : M;
            }
          }
          return c;
        }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, env: { FormData: rt.classes.FormData, Blob: rt.classes.Blob }, validateStatus: function(c) {
          return c >= 200 && c < 300;
        }, headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } } };
        H.forEach(["delete", "get", "head", "post", "put", "patch"], (c) => {
          bt.headers[c] = {};
        });
        var Rn = bt;
        const zi = H.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);
        var Cr = (c) => {
          const g = {};
          let S, _, w;
          return c && c.split(`
`).forEach(function(M) {
            w = M.indexOf(":"), S = M.substring(0, w).trim().toLowerCase(), _ = M.substring(w + 1).trim(), !(!S || g[S] && zi[S]) && (S === "set-cookie" ? g[S] ? g[S].push(_) : g[S] = [_] : g[S] = g[S] ? g[S] + ", " + _ : _);
          }), g;
        };
        const Zs = Symbol("internals");
        function ya(c) {
          return c && String(c).trim().toLowerCase();
        }
        function On(c) {
          return c === false || c == null ? c : H.isArray(c) ? c.map(On) : String(c);
        }
        function Mi(c) {
          const g = /* @__PURE__ */ Object.create(null), S = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
          let _;
          for (; _ = S.exec(c); )
            g[_[1]] = _[2];
          return g;
        }
        const ba = (c) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(c.trim());
        function Cn(c, g, S, _, w) {
          if (H.isFunction(_))
            return _.call(this, g, S);
          if (w && (g = S), !!H.isString(g)) {
            if (H.isString(_))
              return g.indexOf(_) !== -1;
            if (H.isRegExp(_))
              return _.test(g);
          }
        }
        function tl(c) {
          return c.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (g, S, _) => S.toUpperCase() + _);
        }
        function va(c, g) {
          const S = H.toCamelCase(" " + g);
          ["get", "set", "has"].forEach((_) => {
            Object.defineProperty(c, _ + S, { value: function(w, M, z) {
              return this[_].call(this, g, w, M, z);
            }, configurable: true });
          });
        }
        class et {
          constructor(g) {
            g && this.set(g);
          }
          set(g, S, _) {
            const w = this;
            function M(K, re, F) {
              const P = ya(re);
              if (!P)
                throw new Error("header name must be a non-empty string");
              const pe = H.findKey(w, P);
              (!pe || w[pe] === void 0 || F === true || F === void 0 && w[pe] !== false) && (w[pe || re] = On(K));
            }
            const z = (K, re) => H.forEach(K, (F, P) => M(F, P, re));
            if (H.isPlainObject(g) || g instanceof this.constructor)
              z(g, S);
            else if (H.isString(g) && (g = g.trim()) && !ba(g))
              z(Cr(g), S);
            else if (H.isObject(g) && H.isIterable(g)) {
              let K = {}, re, F;
              for (const P of g) {
                if (!H.isArray(P))
                  throw TypeError("Object iterator must return a key-value pair");
                K[F = P[0]] = (re = K[F]) ? H.isArray(re) ? [...re, P[1]] : [re, P[1]] : P[1];
              }
              z(K, S);
            } else
              g != null && M(S, g, _);
            return this;
          }
          get(g, S) {
            if (g = ya(g), g) {
              const _ = H.findKey(this, g);
              if (_) {
                const w = this[_];
                if (!S)
                  return w;
                if (S === true)
                  return Mi(w);
                if (H.isFunction(S))
                  return S.call(this, w, _);
                if (H.isRegExp(S))
                  return S.exec(w);
                throw new TypeError("parser must be boolean|regexp|function");
              }
            }
          }
          has(g, S) {
            if (g = ya(g), g) {
              const _ = H.findKey(this, g);
              return !!(_ && this[_] !== void 0 && (!S || Cn(this, this[_], _, S)));
            }
            return false;
          }
          delete(g, S) {
            const _ = this;
            let w = false;
            function M(z) {
              if (z = ya(z), z) {
                const K = H.findKey(_, z);
                K && (!S || Cn(_, _[K], K, S)) && (delete _[K], w = true);
              }
            }
            return H.isArray(g) ? g.forEach(M) : M(g), w;
          }
          clear(g) {
            const S = Object.keys(this);
            let _ = S.length, w = false;
            for (; _--; ) {
              const M = S[_];
              (!g || Cn(this, this[M], M, g, true)) && (delete this[M], w = true);
            }
            return w;
          }
          normalize(g) {
            const S = this, _ = {};
            return H.forEach(this, (w, M) => {
              const z = H.findKey(_, M);
              if (z) {
                S[z] = On(w), delete S[M];
                return;
              }
              const K = g ? tl(M) : String(M).trim();
              K !== M && delete S[M], S[K] = On(w), _[K] = true;
            }), this;
          }
          concat(...g) {
            return this.constructor.concat(this, ...g);
          }
          toJSON(g) {
            const S = /* @__PURE__ */ Object.create(null);
            return H.forEach(this, (_, w) => {
              _ != null && _ !== false && (S[w] = g && H.isArray(_) ? _.join(", ") : _);
            }), S;
          }
          [Symbol.iterator]() {
            return Object.entries(this.toJSON())[Symbol.iterator]();
          }
          toString() {
            return Object.entries(this.toJSON()).map(([g, S]) => g + ": " + S).join(`
`);
          }
          getSetCookie() {
            return this.get("set-cookie") || [];
          }
          get [Symbol.toStringTag]() {
            return "AxiosHeaders";
          }
          static from(g) {
            return g instanceof this ? g : new this(g);
          }
          static concat(g, ...S) {
            const _ = new this(g);
            return S.forEach((w) => _.set(w)), _;
          }
          static accessor(g) {
            const S = (this[Zs] = this[Zs] = { accessors: {} }).accessors, _ = this.prototype;
            function w(M) {
              const z = ya(M);
              S[z] || (va(_, M), S[z] = true);
            }
            return H.isArray(g) ? g.forEach(w) : w(g), this;
          }
        }
        et.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), H.reduceDescriptors(et.prototype, ({ value: c }, g) => {
          let S = g[0].toUpperCase() + g.slice(1);
          return { get: () => c, set(_) {
            this[S] = _;
          } };
        }), H.freezeMethods(et);
        var Dt = et;
        function Ol(c, g) {
          const S = this || Rn, _ = g || S, w = Dt.from(_.headers);
          let M = _.data;
          return H.forEach(c, function(z) {
            M = z.call(S, M, w.normalize(), g ? g.status : void 0);
          }), w.normalize(), M;
        }
        function zn(c) {
          return !!(c && c.__CANCEL__);
        }
        function kt(c, g, S) {
          be.call(this, c != null ? c : "canceled", be.ERR_CANCELED, g, S), this.name = "CanceledError";
        }
        H.inherits(kt, be, { __CANCEL__: true });
        function Ks(c, g, S) {
          const _ = S.config.validateStatus;
          !S.status || !_ || _(S.status) ? c(S) : g(new be("Request failed with status code " + S.status, [be.ERR_BAD_REQUEST, be.ERR_BAD_RESPONSE][Math.floor(S.status / 100) - 4], S.config, S.request, S));
        }
        function Js(c) {
          const g = /^([-+\w]{1,25})(:?\/\/|:)/.exec(c);
          return g && g[1] || "";
        }
        function Fs(c, g) {
          c = c || 10;
          const S = new Array(c), _ = new Array(c);
          let w = 0, M = 0, z;
          return g = g !== void 0 ? g : 1e3, function(K) {
            const re = Date.now(), F = _[M];
            z || (z = re), S[w] = K, _[w] = re;
            let P = M, pe = 0;
            for (; P !== w; )
              pe += S[P++], P = P % c;
            if (w = (w + 1) % c, w === M && (M = (M + 1) % c), re - z < g)
              return;
            const Le = F && re - F;
            return Le ? Math.round(pe * 1e3 / Le) : void 0;
          };
        }
        function zr(c, g) {
          let S = 0, _ = 1e3 / g, w, M;
          const z = (K, re = Date.now()) => {
            S = re, w = null, M && (clearTimeout(M), M = null), c(...K);
          };
          return [(...K) => {
            const re = Date.now(), F = re - S;
            F >= _ ? z(K, re) : (w = K, M || (M = setTimeout(() => {
              M = null, z(w);
            }, _ - F)));
          }, () => w && z(w)];
        }
        const kn = (c, g, S = 3) => {
          let _ = 0;
          const w = Fs(50, 250);
          return zr((M) => {
            const z = M.loaded, K = M.lengthComputable ? M.total : void 0, re = z - _, F = w(re), P = z <= K;
            _ = z;
            const pe = { loaded: z, total: K, progress: K ? z / K : void 0, bytes: re, rate: F || void 0, estimated: F && K && P ? (K - z) / F : void 0, event: M, lengthComputable: K != null, [g ? "download" : "upload"]: true };
            c(pe);
          }, S);
        }, nl = (c, g) => {
          const S = c != null;
          return [(_) => g[0]({ lengthComputable: S, total: c, loaded: _ }), g[1]];
        }, It = (c) => (...g) => H.asap(() => c(...g));
        var Bt = rt.hasStandardBrowserEnv ? ((c, g) => (S) => (S = new URL(S, rt.origin), c.protocol === S.protocol && c.host === S.host && (g || c.port === S.port)))(new URL(rt.origin), rt.navigator && /(msie|trident)/i.test(rt.navigator.userAgent)) : () => true, Ws = rt.hasStandardBrowserEnv ? { write(c, g, S, _, w, M) {
          const z = [c + "=" + encodeURIComponent(g)];
          H.isNumber(S) && z.push("expires=" + new Date(S).toGMTString()), H.isString(_) && z.push("path=" + _), H.isString(w) && z.push("domain=" + w), M === true && z.push("secure"), document.cookie = z.join("; ");
        }, read(c) {
          const g = document.cookie.match(new RegExp("(^|;\\s*)(" + c + ")=([^;]*)"));
          return g ? decodeURIComponent(g[3]) : null;
        }, remove(c) {
          this.write(c, "", Date.now() - 864e5);
        } } : { write() {
        }, read() {
          return null;
        }, remove() {
        } };
        function Mr(c) {
          return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(c);
        }
        function Ui(c, g) {
          return g ? c.replace(/\/?\/$/, "") + "/" + g.replace(/^\/+/, "") : c;
        }
        function Di(c, g, S) {
          let _ = !Mr(g);
          return c && (_ || S == false) ? Ui(c, g) : g;
        }
        const al = (c) => c instanceof Dt ? Ge({}, c) : c;
        function Vn(c, g) {
          g = g || {};
          const S = {};
          function _(F, P, pe, Le) {
            return H.isPlainObject(F) && H.isPlainObject(P) ? H.merge.call({ caseless: Le }, F, P) : H.isPlainObject(P) ? H.merge({}, P) : H.isArray(P) ? P.slice() : P;
          }
          function w(F, P, pe, Le) {
            if (H.isUndefined(P)) {
              if (!H.isUndefined(F))
                return _(void 0, F, pe, Le);
            } else
              return _(F, P, pe, Le);
          }
          function M(F, P) {
            if (!H.isUndefined(P))
              return _(void 0, P);
          }
          function z(F, P) {
            if (H.isUndefined(P)) {
              if (!H.isUndefined(F))
                return _(void 0, F);
            } else
              return _(void 0, P);
          }
          function K(F, P, pe) {
            if (pe in g)
              return _(F, P);
            if (pe in c)
              return _(void 0, F);
          }
          const re = { url: M, method: M, data: M, baseURL: z, transformRequest: z, transformResponse: z, paramsSerializer: z, timeout: z, timeoutMessage: z, withCredentials: z, withXSRFToken: z, adapter: z, responseType: z, xsrfCookieName: z, xsrfHeaderName: z, onUploadProgress: z, onDownloadProgress: z, decompress: z, maxContentLength: z, maxBodyLength: z, beforeRedirect: z, transport: z, httpAgent: z, httpsAgent: z, cancelToken: z, socketPath: z, responseEncoding: z, validateStatus: K, headers: (F, P, pe) => w(al(F), al(P), pe, true) };
          return H.forEach(Object.keys(Ge(Ge({}, c), g)), function(F) {
            const P = re[F] || w, pe = P(c[F], g[F], F);
            H.isUndefined(pe) && P !== K || (S[F] = pe);
          }), S;
        }
        var zt = (c) => {
          const g = Vn({}, c);
          let { data: S, withXSRFToken: _, xsrfHeaderName: w, xsrfCookieName: M, headers: z, auth: K } = g;
          if (g.headers = z = Dt.from(z), g.url = $a(Di(g.baseURL, g.url, g.allowAbsoluteUrls), c.params, c.paramsSerializer), K && z.set("Authorization", "Basic " + btoa((K.username || "") + ":" + (K.password ? unescape(encodeURIComponent(K.password)) : ""))), H.isFormData(S)) {
            if (rt.hasStandardBrowserEnv || rt.hasStandardBrowserWebWorkerEnv)
              z.setContentType(void 0);
            else if (H.isFunction(S.getHeaders)) {
              const re = S.getHeaders(), F = ["content-type", "content-length"];
              Object.entries(re).forEach(([P, pe]) => {
                F.includes(P.toLowerCase()) && z.set(P, pe);
              });
            }
          }
          if (rt.hasStandardBrowserEnv && (_ && H.isFunction(_) && (_ = _(g)), _ || _ !== false && Bt(g.url))) {
            const re = w && M && Ws.read(M);
            re && z.set(w, re);
          }
          return g;
        }, Bi = typeof XMLHttpRequest < "u" && function(c) {
          return new Promise(function(g, S) {
            const _ = zt(c);
            let w = _.data;
            const M = Dt.from(_.headers).normalize();
            let { responseType: z, onUploadProgress: K, onDownloadProgress: re } = _, F, P, pe, Le, ve;
            function I() {
              Le && Le(), ve && ve(), _.cancelToken && _.cancelToken.unsubscribe(F), _.signal && _.signal.removeEventListener("abort", F);
            }
            let le = new XMLHttpRequest();
            le.open(_.method.toUpperCase(), _.url, true), le.timeout = _.timeout;
            function Fe() {
              if (!le)
                return;
              const it = Dt.from("getAllResponseHeaders" in le && le.getAllResponseHeaders()), nn = { data: !z || z === "text" || z === "json" ? le.responseText : le.response, status: le.status, statusText: le.statusText, headers: it, config: c, request: le };
              Ks(function(an) {
                g(an), I();
              }, function(an) {
                S(an), I();
              }, nn), le = null;
            }
            "onloadend" in le ? le.onloadend = Fe : le.onreadystatechange = function() {
              !le || le.readyState !== 4 || le.status === 0 && !(le.responseURL && le.responseURL.indexOf("file:") === 0) || setTimeout(Fe);
            }, le.onabort = function() {
              le && (S(new be("Request aborted", be.ECONNABORTED, c, le)), le = null);
            }, le.onerror = function(it) {
              const nn = it && it.message ? it.message : "Network Error", an = new be(nn, be.ERR_NETWORK, c, le);
              an.event = it || null, S(an), le = null;
            }, le.ontimeout = function() {
              let it = _.timeout ? "timeout of " + _.timeout + "ms exceeded" : "timeout exceeded";
              const nn = _.transitional || An;
              _.timeoutErrorMessage && (it = _.timeoutErrorMessage), S(new be(it, nn.clarifyTimeoutError ? be.ETIMEDOUT : be.ECONNABORTED, c, le)), le = null;
            }, w === void 0 && M.setContentType(null), "setRequestHeader" in le && H.forEach(M.toJSON(), function(it, nn) {
              le.setRequestHeader(nn, it);
            }), H.isUndefined(_.withCredentials) || (le.withCredentials = !!_.withCredentials), z && z !== "json" && (le.responseType = _.responseType), re && ([pe, ve] = kn(re, true), le.addEventListener("progress", pe)), K && le.upload && ([P, Le] = kn(K), le.upload.addEventListener("progress", P), le.upload.addEventListener("loadend", Le)), (_.cancelToken || _.signal) && (F = (it) => {
              le && (S(!it || it.type ? new kt(null, c, le) : it), le.abort(), le = null);
            }, _.cancelToken && _.cancelToken.subscribe(F), _.signal && (_.signal.aborted ? F() : _.signal.addEventListener("abort", F)));
            const xt = Js(_.url);
            if (xt && rt.protocols.indexOf(xt) === -1) {
              S(new be("Unsupported protocol " + xt + ":", be.ERR_BAD_REQUEST, c));
              return;
            }
            le.send(w || null);
          });
        }, $s = (c, g) => {
          const { length: S } = c = c ? c.filter(Boolean) : [];
          if (g || S) {
            let _ = new AbortController(), w;
            const M = function(F) {
              if (!w) {
                w = true, K();
                const P = F instanceof Error ? F : this.reason;
                _.abort(P instanceof be ? P : new kt(P instanceof Error ? P.message : P));
              }
            };
            let z = g && setTimeout(() => {
              z = null, M(new be(`timeout ${g} of ms exceeded`, be.ETIMEDOUT));
            }, g);
            const K = () => {
              c && (z && clearTimeout(z), z = null, c.forEach((F) => {
                F.unsubscribe ? F.unsubscribe(M) : F.removeEventListener("abort", M);
              }), c = null);
            };
            c.forEach((F) => F.addEventListener("abort", M));
            const { signal: re } = _;
            return re.unsubscribe = () => H.asap(K), re;
          }
        };
        const qi = function* (c, g) {
          let S = c.byteLength;
          if (S < g) {
            yield c;
            return;
          }
          let _ = 0, w;
          for (; _ < S; )
            w = _ + g, yield c.slice(_, w), _ = w;
        }, xa = function(c, g) {
          return zf(this, null, function* () {
            try {
              for (var S = Hm(Ps(c)), _, w, M; _ = !(w = yield new Nl(S.next())).done; _ = false) {
                const z = w.value;
                yield* Mf(qi(z, g));
              }
            } catch (w2) {
              M = [w2];
            } finally {
              try {
                _ && (w = S.return) && (yield new Nl(w.call(S)));
              } finally {
                if (M)
                  throw M[0];
              }
            }
          });
        }, Ps = function(c) {
          return zf(this, null, function* () {
            if (c[Symbol.asyncIterator]) {
              yield* Mf(c);
              return;
            }
            const g = c.getReader();
            try {
              for (; ; ) {
                const { done: S, value: _ } = yield new Nl(g.read());
                if (S)
                  break;
                yield _;
              }
            } finally {
              yield new Nl(g.cancel());
            }
          });
        }, Hi = (c, g, S, _) => {
          const w = xa(c, g);
          let M = 0, z, K = (F) => {
            z || (z = true, _ && _(F));
          };
          return new ReadableStream({ pull(F) {
            return ha(this, null, function* () {
              try {
                const { done: P, value: pe } = yield w.next();
                if (P) {
                  K(), F.close();
                  return;
                }
                let Le = pe.byteLength;
                if (S) {
                  let ve = M += Le;
                  S(ve);
                }
                F.enqueue(new Uint8Array(pe));
              } catch (P) {
                throw K(P), P;
              }
            });
          }, cancel(F) {
            return K(F), w.return();
          } }, { highWaterMark: 2 });
        }, Zn = 64 * 1024, { isFunction: Cl } = H, Is = (({ Request: c, Response: g }) => ({ Request: c, Response: g }))(H.global), { ReadableStream: Li, TextEncoder: zl } = H.global, eu = (c, ...g) => {
          try {
            return !!c(...g);
          } catch (S) {
            return false;
          }
        }, Ur = (c) => {
          c = H.merge.call({ skipUndefined: true }, Is, c);
          const { fetch: g, Request: S, Response: _ } = c, w = g ? Cl(g) : typeof fetch == "function", M = Cl(S), z = Cl(_);
          if (!w)
            return false;
          const K = w && Cl(Li), re = w && (typeof zl == "function" ? ((I) => (le) => I.encode(le))(new zl()) : (I) => ha(null, null, function* () {
            return new Uint8Array(yield new S(I).arrayBuffer());
          })), F = M && K && eu(() => {
            let I = false;
            const le = new S(rt.origin, { body: new Li(), method: "POST", get duplex() {
              return I = true, "half";
            } }).headers.has("Content-Type");
            return I && !le;
          }), P = z && K && eu(() => H.isReadableStream(new _("").body)), pe = { stream: P && ((I) => I.body) };
          w && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((I) => {
            !pe[I] && (pe[I] = (le, Fe) => {
              let xt = le && le[I];
              if (xt)
                return xt.call(le);
              throw new be(`Response type '${I}' is not supported`, be.ERR_NOT_SUPPORT, Fe);
            });
          });
          const Le = (I) => ha(null, null, function* () {
            if (I == null)
              return 0;
            if (H.isBlob(I))
              return I.size;
            if (H.isSpecCompliantForm(I))
              return (yield new S(rt.origin, { method: "POST", body: I }).arrayBuffer()).byteLength;
            if (H.isArrayBufferView(I) || H.isArrayBuffer(I))
              return I.byteLength;
            if (H.isURLSearchParams(I) && (I = I + ""), H.isString(I))
              return (yield re(I)).byteLength;
          }), ve = (I, le) => ha(null, null, function* () {
            const Fe = H.toFiniteNumber(I.getContentLength());
            return Fe != null ? Fe : Le(le);
          });
          return (I) => ha(null, null, function* () {
            let { url: le, method: Fe, data: xt, signal: it, cancelToken: nn, timeout: an, onDownloadProgress: Xi, onUploadProgress: nu, responseType: Dn, headers: Yl, withCredentials: Ql = "same-origin", fetchOptions: au } = zt(I), lu = g || fetch;
            Dn = Dn ? (Dn + "").toLowerCase() : "text";
            let Xl = $s([it, nn && nn.toAbortSignal()], an), sl = null;
            const Wn = Xl && Xl.unsubscribe && (() => {
              Xl.unsubscribe();
            });
            let iu;
            try {
              if (nu && F && Fe !== "get" && Fe !== "head" && (iu = yield ve(Yl, xt)) !== 0) {
                let yn = new S(le, { method: "POST", body: xt, duplex: "half" }), $n;
                if (H.isFormData(xt) && ($n = yn.headers.get("content-type")) && Yl.setContentType($n), yn.body) {
                  const [Gl, ul] = nl(iu, kn(It(nu)));
                  xt = Hi(yn.body, Zn, Gl, ul);
                }
              }
              H.isString(Ql) || (Ql = Ql ? "include" : "omit");
              const ln = M && "credentials" in S.prototype, su = At(Ge({}, au), { signal: Xl, method: Fe.toUpperCase(), headers: Yl.normalize().toJSON(), body: xt, duplex: "half", credentials: ln ? Ql : void 0 });
              sl = M && new S(le, su);
              let sn = yield M ? lu(sl, au) : lu(le, su);
              const Na = P && (Dn === "stream" || Dn === "response");
              if (P && (Xi || Na && Wn)) {
                const yn = {};
                ["status", "statusText", "headers"].forEach((Gi) => {
                  yn[Gi] = sn[Gi];
                });
                const $n = H.toFiniteNumber(sn.headers.get("content-length")), [Gl, ul] = Xi && nl($n, kn(It(Xi), true)) || [];
                sn = new _(Hi(sn.body, Zn, Gl, () => {
                  ul && ul(), Wn && Wn();
                }), yn);
              }
              Dn = Dn || "text";
              let Dr = yield pe[H.findKey(pe, Dn) || "text"](sn, I);
              return !Na && Wn && Wn(), yield new Promise((yn, $n) => {
                Ks(yn, $n, { data: Dr, headers: Dt.from(sn.headers), status: sn.status, statusText: sn.statusText, config: I, request: sl });
              });
            } catch (ln) {
              throw Wn && Wn(), ln && ln.name === "TypeError" && /Load failed|fetch/i.test(ln.message) ? Object.assign(new be("Network Error", be.ERR_NETWORK, I, sl), { cause: ln.cause || ln }) : be.from(ln, ln && ln.code, I, sl);
            }
          });
        }, Ml = /* @__PURE__ */ new Map(), en = (c) => {
          let g = c ? c.env : {};
          const { fetch: S, Request: _, Response: w } = g, M = [_, w, S];
          let z = M.length, K = z, re, F, P = Ml;
          for (; K--; )
            re = M[K], F = P.get(re), F === void 0 && P.set(re, F = K ? /* @__PURE__ */ new Map() : Ur(g)), P = F;
          return F;
        };
        en();
        const ll = { http: wr, xhr: Bi, fetch: { get: en } };
        H.forEach(ll, (c, g) => {
          if (c) {
            try {
              Object.defineProperty(c, "name", { value: g });
            } catch (S) {
            }
            Object.defineProperty(c, "adapterName", { value: g });
          }
        });
        const Ul = (c) => `- ${c}`, Sa = (c) => H.isFunction(c) || c === null || c === false;
        var Kn = { getAdapter: (c, g) => {
          c = H.isArray(c) ? c : [c];
          const { length: S } = c;
          let _, w;
          const M = {};
          for (let z = 0; z < S; z++) {
            _ = c[z];
            let K;
            if (w = _, !Sa(_) && (w = ll[(K = String(_)).toLowerCase()], w === void 0))
              throw new be(`Unknown adapter '${K}'`);
            if (w && (H.isFunction(w) || (w = w.get(g))))
              break;
            M[K || "#" + z] = w;
          }
          if (!w) {
            const z = Object.entries(M).map(([re, F]) => `adapter ${re} ` + (F === false ? "is not supported by the environment" : "is not available in the build"));
            let K = S ? z.length > 1 ? `since :
` + z.map(Ul).join(`
`) : " " + Ul(z[0]) : "as no adapter specified";
            throw new be("There is no suitable adapter to dispatch the request " + K, "ERR_NOT_SUPPORT");
          }
          return w;
        }, adapters: ll };
        function Dl(c) {
          if (c.cancelToken && c.cancelToken.throwIfRequested(), c.signal && c.signal.aborted)
            throw new kt(null, c);
        }
        function Bl(c) {
          return Dl(c), c.headers = Dt.from(c.headers), c.data = Ol.call(c, c.transformRequest), ["post", "put", "patch"].indexOf(c.method) !== -1 && c.headers.setContentType("application/x-www-form-urlencoded", false), Kn.getAdapter(c.adapter || Rn.adapter, c)(c).then(function(g) {
            return Dl(c), g.data = Ol.call(c, c.transformResponse, g), g.headers = Dt.from(g.headers), g;
          }, function(g) {
            return zn(g) || (Dl(c), g && g.response && (g.response.data = Ol.call(c, c.transformResponse, g.response), g.response.headers = Dt.from(g.response.headers))), Promise.reject(g);
          });
        }
        const Yi = "1.12.2", Mn = {};
        ["object", "boolean", "number", "function", "string", "symbol"].forEach((c, g) => {
          Mn[c] = function(S) {
            return typeof S === c || "a" + (g < 1 ? "n " : " ") + c;
          };
        });
        const tn = {};
        Mn.transitional = function(c, g, S) {
          function _(w, M) {
            return "[Axios v" + Yi + "] Transitional option '" + w + "'" + M + (S ? ". " + S : "");
          }
          return (w, M, z) => {
            if (c === false)
              throw new be(_(M, " has been removed" + (g ? " in " + g : "")), be.ERR_DEPRECATED);
            return g && !tn[M] && (tn[M] = true, console.warn(_(M, " has been deprecated since v" + g + " and will be removed in the near future"))), c ? c(w, M, z) : true;
          };
        }, Mn.spelling = function(c) {
          return (g, S) => (console.warn(`${S} is likely a misspelling of ${c}`), true);
        };
        function Qi(c, g, S) {
          if (typeof c != "object")
            throw new be("options must be an object", be.ERR_BAD_OPTION_VALUE);
          const _ = Object.keys(c);
          let w = _.length;
          for (; w-- > 0; ) {
            const M = _[w], z = g[M];
            if (z) {
              const K = c[M], re = K === void 0 || z(K, M, c);
              if (re !== true)
                throw new be("option " + M + " must be " + re, be.ERR_BAD_OPTION_VALUE);
              continue;
            }
            if (S !== true)
              throw new be("Unknown option " + M, be.ERR_BAD_OPTION);
          }
        }
        var Un = { assertOptions: Qi, validators: Mn };
        const pt = Un.validators;
        class _a {
          constructor(g) {
            this.defaults = g || {}, this.interceptors = { request: new Pa(), response: new Pa() };
          }
          request(g, S) {
            return ha(this, null, function* () {
              try {
                return yield this._request(g, S);
              } catch (_) {
                if (_ instanceof Error) {
                  let w = {};
                  Error.captureStackTrace ? Error.captureStackTrace(w) : w = new Error();
                  const M = w.stack ? w.stack.replace(/^.+\n/, "") : "";
                  try {
                    _.stack ? M && !String(_.stack).endsWith(M.replace(/^.+\n.+\n/, "")) && (_.stack += `
` + M) : _.stack = M;
                  } catch (z) {
                  }
                }
                throw _;
              }
            });
          }
          _request(g, S) {
            typeof g == "string" ? (S = S || {}, S.url = g) : S = g || {}, S = Vn(this.defaults, S);
            const { transitional: _, paramsSerializer: w, headers: M } = S;
            _ !== void 0 && Un.assertOptions(_, { silentJSONParsing: pt.transitional(pt.boolean), forcedJSONParsing: pt.transitional(pt.boolean), clarifyTimeoutError: pt.transitional(pt.boolean) }, false), w != null && (H.isFunction(w) ? S.paramsSerializer = { serialize: w } : Un.assertOptions(w, { encode: pt.function, serialize: pt.function }, true)), S.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? S.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : S.allowAbsoluteUrls = true), Un.assertOptions(S, { baseUrl: pt.spelling("baseURL"), withXsrfToken: pt.spelling("withXSRFToken") }, true), S.method = (S.method || this.defaults.method || "get").toLowerCase();
            let z = M && H.merge(M.common, M[S.method]);
            M && H.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (I) => {
              delete M[I];
            }), S.headers = Dt.concat(z, M);
            const K = [];
            let re = true;
            this.interceptors.request.forEach(function(I) {
              typeof I.runWhen == "function" && I.runWhen(S) === false || (re = re && I.synchronous, K.unshift(I.fulfilled, I.rejected));
            });
            const F = [];
            this.interceptors.response.forEach(function(I) {
              F.push(I.fulfilled, I.rejected);
            });
            let P, pe = 0, Le;
            if (!re) {
              const I = [Bl.bind(this), void 0];
              for (I.unshift(...K), I.push(...F), Le = I.length, P = Promise.resolve(S); pe < Le; )
                P = P.then(I[pe++], I[pe++]);
              return P;
            }
            Le = K.length;
            let ve = S;
            for (; pe < Le; ) {
              const I = K[pe++], le = K[pe++];
              try {
                ve = I(ve);
              } catch (Fe) {
                le.call(this, Fe);
                break;
              }
            }
            try {
              P = Bl.call(this, ve);
            } catch (I) {
              return Promise.reject(I);
            }
            for (pe = 0, Le = F.length; pe < Le; )
              P = P.then(F[pe++], F[pe++]);
            return P;
          }
          getUri(g) {
            g = Vn(this.defaults, g);
            const S = Di(g.baseURL, g.url, g.allowAbsoluteUrls);
            return $a(S, g.params, g.paramsSerializer);
          }
        }
        H.forEach(["delete", "get", "head", "options"], function(c) {
          _a.prototype[c] = function(g, S) {
            return this.request(Vn(S || {}, { method: c, url: g, data: (S || {}).data }));
          };
        }), H.forEach(["post", "put", "patch"], function(c) {
          function g(S) {
            return function(_, w, M) {
              return this.request(Vn(M || {}, { method: c, headers: S ? { "Content-Type": "multipart/form-data" } : {}, url: _, data: w }));
            };
          }
          _a.prototype[c] = g(), _a.prototype[c + "Form"] = g(true);
        });
        var Jn = _a;
        class ql {
          constructor(g) {
            if (typeof g != "function")
              throw new TypeError("executor must be a function.");
            let S;
            this.promise = new Promise(function(w) {
              S = w;
            });
            const _ = this;
            this.promise.then((w) => {
              if (!_._listeners)
                return;
              let M = _._listeners.length;
              for (; M-- > 0; )
                _._listeners[M](w);
              _._listeners = null;
            }), this.promise.then = (w) => {
              let M;
              const z = new Promise((K) => {
                _.subscribe(K), M = K;
              }).then(w);
              return z.cancel = function() {
                _.unsubscribe(M);
              }, z;
            }, g(function(w, M, z) {
              _.reason || (_.reason = new kt(w, M, z), S(_.reason));
            });
          }
          throwIfRequested() {
            if (this.reason)
              throw this.reason;
          }
          subscribe(g) {
            if (this.reason) {
              g(this.reason);
              return;
            }
            this._listeners ? this._listeners.push(g) : this._listeners = [g];
          }
          unsubscribe(g) {
            if (!this._listeners)
              return;
            const S = this._listeners.indexOf(g);
            S !== -1 && this._listeners.splice(S, 1);
          }
          toAbortSignal() {
            const g = new AbortController(), S = (_) => {
              g.abort(_);
            };
            return this.subscribe(S), g.signal.unsubscribe = () => this.unsubscribe(S), g.signal;
          }
          static source() {
            let g;
            return { token: new ql(function(S) {
              g = S;
            }), cancel: g };
          }
        }
        var Hl = ql;
        function Ll(c) {
          return function(g) {
            return c.apply(null, g);
          };
        }
        function tu(c) {
          return H.isObject(c) && c.isAxiosError === true;
        }
        const vt = { Continue: 100, SwitchingProtocols: 101, Processing: 102, EarlyHints: 103, Ok: 200, Created: 201, Accepted: 202, NonAuthoritativeInformation: 203, NoContent: 204, ResetContent: 205, PartialContent: 206, MultiStatus: 207, AlreadyReported: 208, ImUsed: 226, MultipleChoices: 300, MovedPermanently: 301, Found: 302, SeeOther: 303, NotModified: 304, UseProxy: 305, Unused: 306, TemporaryRedirect: 307, PermanentRedirect: 308, BadRequest: 400, Unauthorized: 401, PaymentRequired: 402, Forbidden: 403, NotFound: 404, MethodNotAllowed: 405, NotAcceptable: 406, ProxyAuthenticationRequired: 407, RequestTimeout: 408, Conflict: 409, Gone: 410, LengthRequired: 411, PreconditionFailed: 412, PayloadTooLarge: 413, UriTooLong: 414, UnsupportedMediaType: 415, RangeNotSatisfiable: 416, ExpectationFailed: 417, ImATeapot: 418, MisdirectedRequest: 421, UnprocessableEntity: 422, Locked: 423, FailedDependency: 424, TooEarly: 425, UpgradeRequired: 426, PreconditionRequired: 428, TooManyRequests: 429, RequestHeaderFieldsTooLarge: 431, UnavailableForLegalReasons: 451, InternalServerError: 500, NotImplemented: 501, BadGateway: 502, ServiceUnavailable: 503, GatewayTimeout: 504, HttpVersionNotSupported: 505, VariantAlsoNegotiates: 506, InsufficientStorage: 507, LoopDetected: 508, NotExtended: 510, NetworkAuthenticationRequired: 511 };
        Object.entries(vt).forEach(([c, g]) => {
          vt[g] = c;
        });
        var Fn = vt;
        function il(c) {
          const g = new Jn(c), S = u(Jn.prototype.request, g);
          return H.extend(S, Jn.prototype, g, { allOwnKeys: true }), H.extend(S, g, null, { allOwnKeys: true }), S.create = function(_) {
            return il(Vn(c, _));
          }, S;
        }
        const Ke = il(Rn);
        return Ke.Axios = Jn, Ke.CanceledError = kt, Ke.CancelToken = Hl, Ke.isCancel = zn, Ke.VERSION = Yi, Ke.toFormData = Gt, Ke.AxiosError = be, Ke.Cancel = Ke.CanceledError, Ke.all = function(c) {
          return Promise.all(c);
        }, Ke.spread = Ll, Ke.isAxiosError = tu, Ke.mergeConfig = Vn, Ke.AxiosHeaders = Dt, Ke.formToJSON = (c) => gn(H.isHTMLForm(c) ? new FormData(c) : c), Ke.getAdapter = Kn.getAdapter, Ke.HttpStatusCode = Fn, Ke.default = Ke, Qf = Ke, Qf;
      }
      var ep;
      function Op() {
        if (ep)
          return ma;
        ep = 1;
        var u = ma && ma.__assign || function() {
          return u = Object.assign || function(y) {
            for (var b, m = 1, x = arguments.length; m < x; m++) {
              b = arguments[m];
              for (var p in b)
                Object.prototype.hasOwnProperty.call(b, p) && (y[p] = b[p]);
            }
            return y;
          }, u.apply(this, arguments);
        };
        Object.defineProperty(ma, "__esModule", { value: true }), ma.getRequestHeaders = ma.getAxiosClient = void 0;
        var s = Ry();
        function r(y, b, m, x, p) {
          var h = s.default.create({ baseURL: y, headers: o(b, x, m, y, p), withCredentials: true });
          return h.interceptors.request.use(function(N) {
            return typeof window < "u" && window.csrf_token && window.csrf_token !== "{{ csrf_token }}" && (N.headers["X-Frappe-CSRF-Token"] = window.csrf_token), b && x && m && (N.headers.Authorization = "".concat(x, " ").concat(m())), N;
          }), h;
        }
        ma.getAxiosClient = r;
        function o(y, b, m, x, p) {
          y === void 0 && (y = false);
          var h = { Accept: "application/json", "Content-Type": "application/json; charset=utf-8" };
          return y && b && m && (h.Authorization = "".concat(b, " ").concat(m())), typeof window < "u" && typeof document < "u" && (window.location && (x && x !== window.location.origin || (h["X-Frappe-Site-Name"] = window.location.hostname)), window.csrf_token && window.csrf_token !== "{{ csrf_token }}" && (h["X-Frappe-CSRF-Token"] = window.csrf_token)), u(u({}, h), p != null ? p : {});
        }
        return ma.getRequestHeaders = o, ma;
      }
      var tp;
      function Cp() {
        if (tp)
          return Nn;
        tp = 1;
        var u = Nn && Nn.__assign || function() {
          return u = Object.assign || function(b) {
            for (var m, x = 1, p = arguments.length; x < p; x++) {
              m = arguments[x];
              for (var h in m)
                Object.prototype.hasOwnProperty.call(m, h) && (b[h] = m[h]);
            }
            return b;
          }, u.apply(this, arguments);
        }, s = Nn && Nn.__awaiter || function(b, m, x, p) {
          function h(N) {
            return N instanceof x ? N : new x(function(E) {
              E(N);
            });
          }
          return new (x || (x = Promise))(function(N, E) {
            function Y(W) {
              try {
                B(p.next(W));
              } catch (fe) {
                E(fe);
              }
            }
            function O(W) {
              try {
                B(p.throw(W));
              } catch (fe) {
                E(fe);
              }
            }
            function B(W) {
              W.done ? N(W.value) : h(W.value).then(Y, O);
            }
            B((p = p.apply(b, m || [])).next());
          });
        }, r = Nn && Nn.__generator || function(b, m) {
          var x = { label: 0, sent: function() {
            if (N[0] & 1)
              throw N[1];
            return N[1];
          }, trys: [], ops: [] }, p, h, N, E;
          return E = { next: Y(0), throw: Y(1), return: Y(2) }, typeof Symbol == "function" && (E[Symbol.iterator] = function() {
            return this;
          }), E;
          function Y(B) {
            return function(W) {
              return O([B, W]);
            };
          }
          function O(B) {
            if (p)
              throw new TypeError("Generator is already executing.");
            for (; E && (E = 0, B[0] && (x = 0)), x; )
              try {
                if (p = 1, h && (N = B[0] & 2 ? h.return : B[0] ? h.throw || ((N = h.return) && N.call(h), 0) : h.next) && !(N = N.call(h, B[1])).done)
                  return N;
                switch (h = 0, N && (B = [B[0] & 2, N.value]), B[0]) {
                  case 0:
                  case 1:
                    N = B;
                    break;
                  case 4:
                    return x.label++, { value: B[1], done: false };
                  case 5:
                    x.label++, h = B[1], B = [0];
                    continue;
                  case 7:
                    B = x.ops.pop(), x.trys.pop();
                    continue;
                  default:
                    if (N = x.trys, !(N = N.length > 0 && N[N.length - 1]) && (B[0] === 6 || B[0] === 2)) {
                      x = 0;
                      continue;
                    }
                    if (B[0] === 3 && (!N || B[1] > N[0] && B[1] < N[3])) {
                      x.label = B[1];
                      break;
                    }
                    if (B[0] === 6 && x.label < N[1]) {
                      x.label = N[1], N = B;
                      break;
                    }
                    if (N && x.label < N[2]) {
                      x.label = N[2], x.ops.push(B);
                      break;
                    }
                    N[2] && x.ops.pop(), x.trys.pop();
                    continue;
                }
                B = m.call(b, x);
              } catch (W) {
                B = [6, W], h = 0;
              } finally {
                p = N = 0;
              }
            if (B[0] & 5)
              throw B[1];
            return { value: B[0] ? B[1] : void 0, done: true };
          }
        };
        Object.defineProperty(Nn, "__esModule", { value: true }), Nn.FrappeFileUpload = void 0;
        var o = Op(), y = function() {
          function b(m, x, p, h, N, E) {
            this.appURL = m, this.axios = x, this.useToken = p != null ? p : false, this.token = h, this.tokenType = N, this.customHeaders = E;
          }
          return b.prototype.uploadFile = function(m, x, p, h) {
            return h === void 0 && (h = "upload_file"), s(this, void 0, void 0, function() {
              var N, E, Y, O, B, W, fe, $;
              return r(this, function(ue) {
                return N = new FormData(), m && N.append("file", m, m.name), E = x.isPrivate, Y = x.folder, O = x.file_url, B = x.doctype, W = x.docname, fe = x.fieldname, $ = x.otherData, E && N.append("is_private", "1"), Y && N.append("folder", Y), O && N.append("file_url", O), B && W && (N.append("doctype", B), N.append("docname", W), fe && N.append("fieldname", fe)), $ && Object.keys($).forEach(function(ae) {
                  var he = $[ae];
                  N.append(ae, he);
                }), [2, this.axios.post("/api/method/".concat(h), N, { onUploadProgress: function(ae) {
                  p && p(ae.loaded, ae.total, ae);
                }, headers: u(u({}, (0, o.getRequestHeaders)(this.useToken, this.tokenType, this.token, this.appURL, this.customHeaders)), { "Content-Type": "multipart/form-data" }) }).catch(function(ae) {
                  var he, ge;
                  throw u(u({}, ae.response.data), { httpStatus: ae.response.status, httpStatusText: ae.response.statusText, message: (he = ae.response.data.message) !== null && he !== void 0 ? he : "There was an error while uploading the file.", exception: (ge = ae.response.data.exception) !== null && ge !== void 0 ? ge : "" });
                })];
              });
            });
          }, b;
        }();
        return Nn.FrappeFileUpload = y, Nn;
      }
      var np;
      function Oy() {
        if (np)
          return Rs;
        np = 1, Object.defineProperty(Rs, "__esModule", { value: true }), Rs.FrappeApp = void 0;
        var u = zp(), s = Ap(), r = Rp(), o = Cp(), y = Op(), b = function() {
          function m(x, p, h, N) {
            var E, Y;
            this.url = x, this.name = h != null ? h : "FrappeApp", this.useToken = (E = p == null ? void 0 : p.useToken) !== null && E !== void 0 ? E : false, this.token = p == null ? void 0 : p.token, this.tokenType = (Y = p == null ? void 0 : p.type) !== null && Y !== void 0 ? Y : "Bearer", this.customHeaders = N, this.axios = (0, y.getAxiosClient)(this.url, this.useToken, this.token, this.tokenType, this.customHeaders);
          }
          return m.prototype.auth = function() {
            return new u.FrappeAuth(this.url, this.axios, this.useToken, this.token, this.tokenType);
          }, m.prototype.db = function() {
            return new r.FrappeDB(this.url, this.axios, this.useToken, this.token, this.tokenType);
          }, m.prototype.file = function() {
            return new o.FrappeFileUpload(this.url, this.axios, this.useToken, this.token, this.tokenType, this.customHeaders);
          }, m.prototype.call = function() {
            return new s.FrappeCall(this.url, this.axios, this.useToken, this.token, this.tokenType);
          }, m;
        }();
        return Rs.FrappeApp = b, Rs;
      }
      var jn = {};
      var ap;
      function Cy() {
        if (ap)
          return jn;
        ap = 1;
        var u = jn && jn.__assign || function() {
          return u = Object.assign || function(y) {
            for (var b, m = 1, x = arguments.length; m < x; m++) {
              b = arguments[m];
              for (var p in b)
                Object.prototype.hasOwnProperty.call(b, p) && (y[p] = b[p]);
            }
            return y;
          }, u.apply(this, arguments);
        }, s = jn && jn.__awaiter || function(y, b, m, x) {
          function p(h) {
            return h instanceof m ? h : new m(function(N) {
              N(h);
            });
          }
          return new (m || (m = Promise))(function(h, N) {
            function E(B) {
              try {
                O(x.next(B));
              } catch (W) {
                N(W);
              }
            }
            function Y(B) {
              try {
                O(x.throw(B));
              } catch (W) {
                N(W);
              }
            }
            function O(B) {
              B.done ? h(B.value) : p(B.value).then(E, Y);
            }
            O((x = x.apply(y, b || [])).next());
          });
        }, r = jn && jn.__generator || function(y, b) {
          var m = { label: 0, sent: function() {
            if (h[0] & 1)
              throw h[1];
            return h[1];
          }, trys: [], ops: [] }, x, p, h, N;
          return N = { next: E(0), throw: E(1), return: E(2) }, typeof Symbol == "function" && (N[Symbol.iterator] = function() {
            return this;
          }), N;
          function E(O) {
            return function(B) {
              return Y([O, B]);
            };
          }
          function Y(O) {
            if (x)
              throw new TypeError("Generator is already executing.");
            for (; N && (N = 0, O[0] && (m = 0)), m; )
              try {
                if (x = 1, p && (h = O[0] & 2 ? p.return : O[0] ? p.throw || ((h = p.return) && h.call(p), 0) : p.next) && !(h = h.call(p, O[1])).done)
                  return h;
                switch (p = 0, h && (O = [O[0] & 2, h.value]), O[0]) {
                  case 0:
                  case 1:
                    h = O;
                    break;
                  case 4:
                    return m.label++, { value: O[1], done: false };
                  case 5:
                    m.label++, p = O[1], O = [0];
                    continue;
                  case 7:
                    O = m.ops.pop(), m.trys.pop();
                    continue;
                  default:
                    if (h = m.trys, !(h = h.length > 0 && h[h.length - 1]) && (O[0] === 6 || O[0] === 2)) {
                      m = 0;
                      continue;
                    }
                    if (O[0] === 3 && (!h || O[1] > h[0] && O[1] < h[3])) {
                      m.label = O[1];
                      break;
                    }
                    if (O[0] === 6 && m.label < h[1]) {
                      m.label = h[1], h = O;
                      break;
                    }
                    if (h && m.label < h[2]) {
                      m.label = h[2], m.ops.push(O);
                      break;
                    }
                    h[2] && m.ops.pop(), m.trys.pop();
                    continue;
                }
                O = b.call(y, m);
              } catch (B) {
                O = [6, B], p = 0;
              } finally {
                x = h = 0;
              }
            if (O[0] & 5)
              throw O[1];
            return { value: O[0] ? O[1] : void 0, done: true };
          }
        };
        Object.defineProperty(jn, "__esModule", { value: true }), jn.FrappeAuth = void 0;
        var o = function() {
          function y(b, m, x, p, h) {
            this.appURL = b, this.axios = m, this.useToken = x != null ? x : false, this.token = p, this.tokenType = h;
          }
          return y.prototype.loginWithUsernamePassword = function(b) {
            return s(this, void 0, void 0, function() {
              return r(this, function(m) {
                return [2, this.axios.post("/api/method/login", { usr: b.username, pwd: b.password, otp: b.otp, tmp_id: b.tmp_id, device: b.device }).then(function(x) {
                  return x.data;
                }).catch(function(x) {
                  var p, h;
                  throw u(u({}, x.response.data), { httpStatus: x.response.status, httpStatusText: x.response.statusText, message: (p = x.response.data.message) !== null && p !== void 0 ? p : "There was an error while logging in", exception: (h = x.response.data.exception) !== null && h !== void 0 ? h : "" });
                })];
              });
            });
          }, y.prototype.getLoggedInUser = function() {
            return s(this, void 0, void 0, function() {
              return r(this, function(b) {
                return [2, this.axios.get("/api/method/frappe.auth.get_logged_user").then(function(m) {
                  return m.data.message;
                }).catch(function(m) {
                  var x;
                  throw u(u({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: "There was an error while fetching the logged in user", exception: (x = m.response.data.exception) !== null && x !== void 0 ? x : "" });
                })];
              });
            });
          }, y.prototype.logout = function() {
            return s(this, void 0, void 0, function() {
              return r(this, function(b) {
                return [2, this.axios.post("/api/method/logout", {}).then(function() {
                }).catch(function(m) {
                  var x, p;
                  throw u(u({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: (x = m.response.data.message) !== null && x !== void 0 ? x : "There was an error while logging out", exception: (p = m.response.data.exception) !== null && p !== void 0 ? p : "" });
                })];
              });
            });
          }, y.prototype.forgetPassword = function(b) {
            return s(this, void 0, void 0, function() {
              return r(this, function(m) {
                return [2, this.axios.post("/", { cmd: "frappe.core.doctype.user.user.reset_password", user: b }).then(function() {
                }).catch(function(x) {
                  var p, h;
                  throw u(u({}, x.response.data), { httpStatus: x.response.status, httpStatusText: x.response.statusText, message: (p = x.response.data.message) !== null && p !== void 0 ? p : "There was an error sending password reset email.", exception: (h = x.response.data.exception) !== null && h !== void 0 ? h : "" });
                })];
              });
            });
          }, y;
        }();
        return jn.FrappeAuth = o, jn;
      }
      var lp;
      function zp() {
        return lp || (lp = 1, function(u) {
          var s = xi && xi.__createBinding || (Object.create ? function(o, y, b, m) {
            m === void 0 && (m = b);
            var x = Object.getOwnPropertyDescriptor(y, b);
            (!x || ("get" in x ? !y.__esModule : x.writable || x.configurable)) && (x = { enumerable: true, get: function() {
              return y[b];
            } }), Object.defineProperty(o, m, x);
          } : function(o, y, b, m) {
            m === void 0 && (m = b), o[m] = y[b];
          }), r = xi && xi.__exportStar || function(o, y) {
            for (var b in o)
              b !== "default" && !Object.prototype.hasOwnProperty.call(y, b) && s(y, o, b);
          };
          Object.defineProperty(u, "__esModule", { value: true }), r(Oy(), u), r(Cy(), u), r(Rp(), u), r(Cp(), u), r(Ap(), u);
        }(xi)), xi;
      }
      var zy = zp();
      var ip = { exports: {} };
      var Xf = {};
      var sp;
      function My() {
        if (sp)
          return Xf;
        sp = 1;
        var u = zs;
        function s(E, Y) {
          return E === Y && (E !== 0 || 1 / E === 1 / Y) || E !== E && Y !== Y;
        }
        var r = typeof Object.is == "function" ? Object.is : s, o = u.useState, y = u.useEffect, b = u.useLayoutEffect, m = u.useDebugValue;
        function x(E, Y) {
          var O = Y(), B = o({ inst: { value: O, getSnapshot: Y } }), W = B[0].inst, fe = B[1];
          return b(function() {
            W.value = O, W.getSnapshot = Y, p(W) && fe({ inst: W });
          }, [E, O, Y]), y(function() {
            return p(W) && fe({ inst: W }), E(function() {
              p(W) && fe({ inst: W });
            });
          }, [E]), m(O), O;
        }
        function p(E) {
          var Y = E.getSnapshot;
          E = E.value;
          try {
            var O = Y();
            return !r(E, O);
          } catch (B) {
            return true;
          }
        }
        function h(E, Y) {
          return Y();
        }
        var N = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? h : x;
        return Xf.useSyncExternalStore = u.useSyncExternalStore !== void 0 ? u.useSyncExternalStore : N, Xf;
      }
      var up;
      function Uy() {
        return up || (up = 1, ip.exports = My()), ip.exports;
      }
      Uy();
      var Dy = 0;
      var By = 1;
      var qy = 2;
      var rp = Object.prototype.hasOwnProperty;
      function Jf(u, s) {
        var r, o;
        if (u === s)
          return true;
        if (u && s && (r = u.constructor) === s.constructor) {
          if (r === Date)
            return u.getTime() === s.getTime();
          if (r === RegExp)
            return u.toString() === s.toString();
          if (r === Array) {
            if ((o = u.length) === s.length)
              for (; o-- && Jf(u[o], s[o]); )
                ;
            return o === -1;
          }
          if (!r || typeof u == "object") {
            o = 0;
            for (r in u)
              if (rp.call(u, r) && ++o && !rp.call(s, r) || !(r in s) || !Jf(u[r], s[r]))
                return false;
            return Object.keys(s).length === o;
          }
        }
        return u !== u && s !== s;
      }
      var Za = /* @__PURE__ */ new WeakMap();
      var Ja = () => {
      };
      var Xt = Ja();
      var _r = Object;
      var En = (u) => u === Xt;
      var Ka = (u) => typeof u == "function";
      var El = (u, s) => Ge(Ge({}, u), s);
      var Hy = (u) => Ka(u.then);
      var Gf = {};
      var hr = {};
      var Mp = "undefined";
      var Nr = typeof window != Mp;
      var Ff = typeof document != Mp;
      var Ly = Nr && "Deno" in window;
      var Yy = (u, s) => {
        const r = Za.get(u);
        return [() => !En(s) && u.get(s) || Gf, (o) => {
          if (!En(s)) {
            const y = u.get(s);
            s in hr || (hr[s] = y), r[5](s, El(y, o), y || Gf);
          }
        }, r[6], () => !En(s) && s in hr ? hr[s] : !En(s) && u.get(s) || Gf];
      };
      var Wf = true;
      var Qy = () => Wf;
      var [$f, Pf] = Nr && window.addEventListener ? [window.addEventListener.bind(window), window.removeEventListener.bind(window)] : [Ja, Ja];
      var Xy = () => {
        const u = Ff && document.visibilityState;
        return En(u) || u !== "hidden";
      };
      var Gy = (u) => (Ff && document.addEventListener("visibilitychange", u), $f("focus", u), () => {
        Ff && document.removeEventListener("visibilitychange", u), Pf("focus", u);
      });
      var ky = (u) => {
        const s = () => {
          Wf = true, u();
        }, r = () => {
          Wf = false;
        };
        return $f("online", s), $f("offline", r), () => {
          Pf("online", s), Pf("offline", r);
        };
      };
      var Vy = { isOnline: Qy, isVisible: Xy };
      var Zy = { initFocus: Gy, initReconnect: ky };
      zs.useId;
      var uc = !Nr || Ly;
      var Ky = uc ? tt.useEffect : tt.useLayoutEffect;
      var kf = typeof navigator < "u" && navigator.connection;
      var op = !uc && kf && (["slow-2g", "2g"].includes(kf.effectiveType) || kf.saveData);
      var mr = /* @__PURE__ */ new WeakMap();
      var Jy = (u) => _r.prototype.toString.call(u);
      var Vf = (u, s) => u === `[object ${s}]`;
      var Fy = 0;
      var If = (u) => {
        const s = typeof u, r = Jy(u), o = Vf(r, "Date"), y = Vf(r, "RegExp"), b = Vf(r, "Object");
        let m, x;
        if (_r(u) === u && !o && !y) {
          if (m = mr.get(u), m)
            return m;
          if (m = ++Fy + "~", mr.set(u, m), Array.isArray(u)) {
            for (m = "@", x = 0; x < u.length; x++)
              m += If(u[x]) + ",";
            mr.set(u, m);
          }
          if (b) {
            m = "#";
            const p = _r.keys(u).sort();
            for (; !En(x = p.pop()); )
              En(u[x]) || (m += x + ":" + If(u[x]) + ",");
            mr.set(u, m);
          }
        } else
          m = o ? u.toJSON() : s == "symbol" ? u.toString() : s == "string" ? JSON.stringify(u) : "" + u;
        return m;
      };
      var Up = (u) => {
        if (Ka(u))
          try {
            u = u();
          } catch (r) {
            u = "";
          }
        const s = u;
        return u = typeof u == "string" ? u : (Array.isArray(u) ? u.length : u) ? If(u) : "", [u, s];
      };
      var Wy = 0;
      var fp = () => ++Wy;
      function $y(...u) {
        return ha(this, null, function* () {
          const [s, r, o, y] = u, b = El({ populateCache: true, throwOnError: true }, typeof y == "boolean" ? { revalidate: y } : y || {});
          let m = b.populateCache;
          const x = b.rollbackOnError;
          let p = b.optimisticData;
          const h = (Y) => typeof x == "function" ? x(Y) : x !== false, N = b.throwOnError;
          if (Ka(r)) {
            const Y = r, O = [], B = s.keys();
            for (const W of B)
              !/^\$(inf|sub)\$/.test(W) && Y(s.get(W)._k) && O.push(W);
            return Promise.all(O.map(E));
          }
          return E(r);
          function E(Y) {
            return ha(this, null, function* () {
              const [O] = Up(Y);
              if (!O)
                return;
              const [B, W] = Yy(s, O), [fe, $, ue, ae] = Za.get(s), he = () => {
                const Ce = fe[O];
                return (Ka(b.revalidate) ? b.revalidate(B().data, Y) : b.revalidate !== false) && (delete ue[O], delete ae[O], Ce && Ce[0]) ? Ce[0](qy).then(() => B().data) : B().data;
              };
              if (u.length < 3)
                return he();
              let ge = o, Se, ie = false;
              const ze = fp();
              $[O] = [ze, 0];
              const ke = !En(p), Ut = B(), yt = Ut.data, nt = Ut._c, Ve = En(nt) ? yt : nt;
              if (ke && (p = Ka(p) ? p(Ve, yt) : p, W({ data: p, _c: Ve })), Ka(ge))
                try {
                  ge = ge(Ve);
                } catch (Ce) {
                  Se = Ce, ie = true;
                }
              if (ge && Hy(ge))
                if (ge = yield ge.catch((Ce) => {
                  Se = Ce, ie = true;
                }), ze !== $[O][0]) {
                  if (ie)
                    throw Se;
                  return ge;
                } else
                  ie && ke && h(Se) && (m = true, W({ data: Ve, _c: Xt }));
              if (m && !ie)
                if (Ka(m)) {
                  const Ce = m(ge, Ve);
                  W({ data: Ce, error: Xt, _c: Xt });
                } else
                  W({ data: ge, error: Xt, _c: Xt });
              if ($[O][1] = fp(), Promise.resolve(he()).then(() => {
                W({ _c: Xt });
              }), ie) {
                if (N)
                  throw Se;
                return;
              }
              return ge;
            });
          }
        });
      }
      var cp = (u, s) => {
        for (const r in u)
          u[r][0] && u[r][0](s);
      };
      var Dp = (u, s) => {
        if (!Za.has(u)) {
          const r = El(Zy, s), o = /* @__PURE__ */ Object.create(null), y = $y.bind(Xt, u);
          let b = Ja;
          const m = /* @__PURE__ */ Object.create(null), x = (N, E) => {
            const Y = m[N] || [];
            return m[N] = Y, Y.push(E), () => Y.splice(Y.indexOf(E), 1);
          }, p = (N, E, Y) => {
            u.set(N, E);
            const O = m[N];
            if (O)
              for (const B of O)
                B(E, Y);
          }, h = () => {
            if (!Za.has(u) && (Za.set(u, [o, /* @__PURE__ */ Object.create(null), /* @__PURE__ */ Object.create(null), /* @__PURE__ */ Object.create(null), y, p, x]), !uc)) {
              const N = r.initFocus(setTimeout.bind(Xt, cp.bind(Xt, o, Dy))), E = r.initReconnect(setTimeout.bind(Xt, cp.bind(Xt, o, By)));
              b = () => {
                N && N(), E && E(), Za.delete(u);
              };
            }
          };
          return h(), [u, y, h, b];
        }
        return [u, Za.get(u)[4]];
      };
      var Py = (u, s, r, o, y) => {
        const b = r.errorRetryCount, m = y.retryCount, x = ~~((Math.random() + 0.5) * (1 << (m < 8 ? m : 8))) * r.errorRetryInterval;
        !En(b) && m > b || setTimeout(o, x, y);
      };
      var Iy = Jf;
      var [rc, eb] = Dp(/* @__PURE__ */ new Map());
      var tb = El({ onLoadingSlow: Ja, onSuccess: Ja, onError: Ja, onErrorRetry: Py, onDiscarded: Ja, revalidateOnFocus: true, revalidateOnReconnect: true, revalidateIfStale: true, shouldRetryOnError: true, errorRetryInterval: op ? 1e4 : 5e3, focusThrottleInterval: 5 * 1e3, dedupingInterval: 2 * 1e3, loadingTimeout: op ? 5e3 : 3e3, compare: Iy, isPaused: () => false, cache: rc, mutate: eb, fallback: {} }, Vy);
      var nb = (u, s) => {
        const r = El(u, s);
        if (s) {
          const { use: o, fallback: y } = u, { use: b, fallback: m } = s;
          o && b && (r.use = o.concat(b)), y && m && (r.fallback = El(y, m));
        }
        return r;
      };
      var dp = tt.createContext({});
      var ab = (u) => {
        const { value: s } = u, r = tt.useContext(dp), o = Ka(s), y = tt.useMemo(() => o ? s(r) : s, [o, r, s]), b = tt.useMemo(() => o ? y : nb(r, y), [o, r, y]), m = y && y.provider, x = tt.useRef(Xt);
        m && !x.current && (x.current = Dp(m(b.cache || rc), y));
        const p = x.current;
        return p && (b.cache = p[0], b.mutate = p[1]), Ky(() => {
          if (p)
            return p[2] && p[2](), p[3];
        }, []), tt.createElement(dp.Provider, El(u, { value: b }));
      };
      var lb = "$inf$";
      var Bp = Nr && window.__SWR_DEVTOOLS_USE__;
      var ib = Bp ? window.__SWR_DEVTOOLS_USE__ : [];
      var sb = () => {
        Bp && (window.__SWR_DEVTOOLS_REACT__ = zs);
      };
      var ub = (u) => (s, r, o) => u(s, r && ((...y) => {
        const [b] = Up(s), [, , , m] = Za.get(rc);
        if (b.startsWith(lb))
          return r(...y);
        const x = m[b];
        return En(x) ? r(...y) : (delete m[b], x);
      }), o);
      ib.concat(ub);
      sb();
      zs.use;
      Promise.resolve(Xt);
      var rb = _r.defineProperty(ab, "defaultValue", { value: tb });
      Promise.resolve();
      var Qn = /* @__PURE__ */ Object.create(null);
      Qn.open = "0";
      Qn.close = "1";
      Qn.ping = "2";
      Qn.pong = "3";
      Qn.message = "4";
      Qn.upgrade = "5";
      Qn.noop = "6";
      var vr = /* @__PURE__ */ Object.create(null);
      Object.keys(Qn).forEach((u) => {
        vr[Qn[u]] = u;
      });
      var ec = { type: "error", data: "parser error" };
      var qp = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
      var Hp = typeof ArrayBuffer == "function";
      var Lp = (u) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(u) : u && u.buffer instanceof ArrayBuffer;
      var oc = ({ type: u, data: s }, r, o) => qp && s instanceof Blob ? r ? o(s) : hp(s, o) : Hp && (s instanceof ArrayBuffer || Lp(s)) ? r ? o(s) : hp(new Blob([s]), o) : o(Qn[u] + (s || ""));
      var hp = (u, s) => {
        const r = new FileReader();
        return r.onload = function() {
          const o = r.result.split(",")[1];
          s("b" + (o || ""));
        }, r.readAsDataURL(u);
      };
      function mp(u) {
        return u instanceof Uint8Array ? u : u instanceof ArrayBuffer ? new Uint8Array(u) : new Uint8Array(u.buffer, u.byteOffset, u.byteLength);
      }
      var Zf;
      function ob(u, s) {
        if (qp && u.data instanceof Blob)
          return u.data.arrayBuffer().then(mp).then(s);
        if (Hp && (u.data instanceof ArrayBuffer || Lp(u.data)))
          return s(mp(u.data));
        oc(u, false, (r) => {
          Zf || (Zf = new TextEncoder()), s(Zf.encode(r));
        });
      }
      var pp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      var Cs = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
      for (let u = 0; u < pp.length; u++)
        Cs[pp.charCodeAt(u)] = u;
      var fb = (u) => {
        let s = u.length * 0.75, r = u.length, o, y = 0, b, m, x, p;
        u[u.length - 1] === "=" && (s--, u[u.length - 2] === "=" && s--);
        const h = new ArrayBuffer(s), N = new Uint8Array(h);
        for (o = 0; o < r; o += 4)
          b = Cs[u.charCodeAt(o)], m = Cs[u.charCodeAt(o + 1)], x = Cs[u.charCodeAt(o + 2)], p = Cs[u.charCodeAt(o + 3)], N[y++] = b << 2 | m >> 4, N[y++] = (m & 15) << 4 | x >> 2, N[y++] = (x & 3) << 6 | p & 63;
        return h;
      };
      var cb = typeof ArrayBuffer == "function";
      var fc = (u, s) => {
        if (typeof u != "string")
          return { type: "message", data: Yp(u, s) };
        const r = u.charAt(0);
        return r === "b" ? { type: "message", data: db(u.substring(1), s) } : vr[r] ? u.length > 1 ? { type: vr[r], data: u.substring(1) } : { type: vr[r] } : ec;
      };
      var db = (u, s) => {
        if (cb) {
          const r = fb(u);
          return Yp(r, s);
        } else
          return { base64: true, data: u };
      };
      var Yp = (u, s) => {
        switch (s) {
          case "blob":
            return u instanceof Blob ? u : new Blob([u]);
          case "arraybuffer":
          default:
            return u instanceof ArrayBuffer ? u : u.buffer;
        }
      };
      var Qp = "";
      var hb = (u, s) => {
        const r = u.length, o = new Array(r);
        let y = 0;
        u.forEach((b, m) => {
          oc(b, false, (x) => {
            o[m] = x, ++y === r && s(o.join(Qp));
          });
        });
      };
      var mb = (u, s) => {
        const r = u.split(Qp), o = [];
        for (let y = 0; y < r.length; y++) {
          const b = fc(r[y], s);
          if (o.push(b), b.type === "error")
            break;
        }
        return o;
      };
      function pb() {
        return new TransformStream({ transform(u, s) {
          ob(u, (r) => {
            const o = r.length;
            let y;
            if (o < 126)
              y = new Uint8Array(1), new DataView(y.buffer).setUint8(0, o);
            else if (o < 65536) {
              y = new Uint8Array(3);
              const b = new DataView(y.buffer);
              b.setUint8(0, 126), b.setUint16(1, o);
            } else {
              y = new Uint8Array(9);
              const b = new DataView(y.buffer);
              b.setUint8(0, 127), b.setBigUint64(1, BigInt(o));
            }
            u.data && typeof u.data != "string" && (y[0] |= 128), s.enqueue(y), s.enqueue(r);
          });
        } });
      }
      var Kf;
      function pr(u) {
        return u.reduce((s, r) => s + r.length, 0);
      }
      function gr(u, s) {
        if (u[0].length === s)
          return u.shift();
        const r = new Uint8Array(s);
        let o = 0;
        for (let y = 0; y < s; y++)
          r[y] = u[0][o++], o === u[0].length && (u.shift(), o = 0);
        return u.length && o < u[0].length && (u[0] = u[0].slice(o)), r;
      }
      function gb(u, s) {
        Kf || (Kf = new TextDecoder());
        const r = [];
        let o = 0, y = -1, b = false;
        return new TransformStream({ transform(m, x) {
          for (r.push(m); ; ) {
            if (o === 0) {
              if (pr(r) < 1)
                break;
              const p = gr(r, 1);
              b = (p[0] & 128) === 128, y = p[0] & 127, y < 126 ? o = 3 : y === 126 ? o = 1 : o = 2;
            } else if (o === 1) {
              if (pr(r) < 2)
                break;
              const p = gr(r, 2);
              y = new DataView(p.buffer, p.byteOffset, p.length).getUint16(0), o = 3;
            } else if (o === 2) {
              if (pr(r) < 8)
                break;
              const p = gr(r, 8), h = new DataView(p.buffer, p.byteOffset, p.length), N = h.getUint32(0);
              if (N > Math.pow(2, 21) - 1) {
                x.enqueue(ec);
                break;
              }
              y = N * Math.pow(2, 32) + h.getUint32(4), o = 3;
            } else {
              if (pr(r) < y)
                break;
              const p = gr(r, y);
              x.enqueue(fc(b ? p : Kf.decode(p), s)), o = 0;
            }
            if (y === 0 || y > u) {
              x.enqueue(ec);
              break;
            }
          }
        } });
      }
      var Xp = 4;
      function ht(u) {
        if (u)
          return yb(u);
      }
      function yb(u) {
        for (var s in ht.prototype)
          u[s] = ht.prototype[s];
        return u;
      }
      ht.prototype.on = ht.prototype.addEventListener = function(u, s) {
        return this._callbacks = this._callbacks || {}, (this._callbacks["$" + u] = this._callbacks["$" + u] || []).push(s), this;
      };
      ht.prototype.once = function(u, s) {
        function r() {
          this.off(u, r), s.apply(this, arguments);
        }
        return r.fn = s, this.on(u, r), this;
      };
      ht.prototype.off = ht.prototype.removeListener = ht.prototype.removeAllListeners = ht.prototype.removeEventListener = function(u, s) {
        if (this._callbacks = this._callbacks || {}, arguments.length == 0)
          return this._callbacks = {}, this;
        var r = this._callbacks["$" + u];
        if (!r)
          return this;
        if (arguments.length == 1)
          return delete this._callbacks["$" + u], this;
        for (var o, y = 0; y < r.length; y++)
          if (o = r[y], o === s || o.fn === s) {
            r.splice(y, 1);
            break;
          }
        return r.length === 0 && delete this._callbacks["$" + u], this;
      };
      ht.prototype.emit = function(u) {
        this._callbacks = this._callbacks || {};
        for (var s = new Array(arguments.length - 1), r = this._callbacks["$" + u], o = 1; o < arguments.length; o++)
          s[o - 1] = arguments[o];
        if (r) {
          r = r.slice(0);
          for (var o = 0, y = r.length; o < y; ++o)
            r[o].apply(this, s);
        }
        return this;
      };
      ht.prototype.emitReserved = ht.prototype.emit;
      ht.prototype.listeners = function(u) {
        return this._callbacks = this._callbacks || {}, this._callbacks["$" + u] || [];
      };
      ht.prototype.hasListeners = function(u) {
        return !!this.listeners(u).length;
      };
      var pn = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
      function Gp(u, ...s) {
        return s.reduce((r, o) => (u.hasOwnProperty(o) && (r[o] = u[o]), r), {});
      }
      var bb = pn.setTimeout;
      var vb = pn.clearTimeout;
      function jr(u, s) {
        s.useNativeTimers ? (u.setTimeoutFn = bb.bind(pn), u.clearTimeoutFn = vb.bind(pn)) : (u.setTimeoutFn = pn.setTimeout.bind(pn), u.clearTimeoutFn = pn.clearTimeout.bind(pn));
      }
      var xb = 1.33;
      function Sb(u) {
        return typeof u == "string" ? _b(u) : Math.ceil((u.byteLength || u.size) * xb);
      }
      function _b(u) {
        let s = 0, r = 0;
        for (let o = 0, y = u.length; o < y; o++)
          s = u.charCodeAt(o), s < 128 ? r += 1 : s < 2048 ? r += 2 : s < 55296 || s >= 57344 ? r += 3 : (o++, r += 4);
        return r;
      }
      function Nb(u) {
        let s = "";
        for (let r in u)
          u.hasOwnProperty(r) && (s.length && (s += "&"), s += encodeURIComponent(r) + "=" + encodeURIComponent(u[r]));
        return s;
      }
      function jb(u) {
        let s = {}, r = u.split("&");
        for (let o = 0, y = r.length; o < y; o++) {
          let b = r[o].split("=");
          s[decodeURIComponent(b[0])] = decodeURIComponent(b[1]);
        }
        return s;
      }
      var Tb = class extends Error {
        constructor(s, r, o) {
          super(s), this.description = r, this.context = o, this.type = "TransportError";
        }
      };
      var cc = class extends ht {
        constructor(s) {
          super(), this.writable = false, jr(this, s), this.opts = s, this.query = s.query, this.socket = s.socket;
        }
        onError(s, r, o) {
          return super.emitReserved("error", new Tb(s, r, o)), this;
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
          const r = fc(s, this.socket.binaryType);
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
          const r = Nb(s);
          return r.length ? "?" + r : "";
        }
      };
      var kp = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split("");
      var tc = 64;
      var Eb = {};
      var gp = 0;
      var yr = 0;
      var yp;
      function bp(u) {
        let s = "";
        do
          s = kp[u % tc] + s, u = Math.floor(u / tc);
        while (u > 0);
        return s;
      }
      function Vp() {
        const u = bp(+new Date());
        return u !== yp ? (gp = 0, yp = u) : u + "." + bp(gp++);
      }
      for (; yr < tc; yr++)
        Eb[kp[yr]] = yr;
      var Zp = false;
      try {
        Zp = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
      } catch (u) {
      }
      var wb = Zp;
      function Kp(u) {
        const s = u.xdomain;
        try {
          if (typeof XMLHttpRequest < "u" && (!s || wb))
            return new XMLHttpRequest();
        } catch (r) {
        }
        if (!s)
          try {
            return new pn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
          } catch (r) {
          }
      }
      function Ab() {
      }
      var Rb = function() {
        return new Kp({ xdomain: false }).responseType != null;
      }();
      var Ob = class extends cc {
        constructor(s) {
          if (super(s), this.polling = false, typeof location < "u") {
            const o = location.protocol === "https:";
            let y = location.port;
            y || (y = o ? "443" : "80"), this.xd = typeof location < "u" && s.hostname !== location.hostname || y !== s.port;
          }
          const r = s && s.forceBase64;
          this.supportsBinary = Rb && !r, this.opts.withCredentials && (this.cookieJar = void 0);
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
        onData(s) {
          const r = (o) => {
            if (this.readyState === "opening" && o.type === "open" && this.onOpen(), o.type === "close")
              return this.onClose({ description: "transport closed by the server" }), false;
            this.onPacket(o);
          };
          mb(s, this.socket.binaryType).forEach(r), this.readyState !== "closed" && (this.polling = false, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll());
        }
        doClose() {
          const s = () => {
            this.write([{ type: "close" }]);
          };
          this.readyState === "open" ? s() : this.once("open", s);
        }
        write(s) {
          this.writable = false, hb(s, (r) => {
            this.doWrite(r, () => {
              this.writable = true, this.emitReserved("drain");
            });
          });
        }
        uri() {
          const s = this.opts.secure ? "https" : "http", r = this.query || {};
          return this.opts.timestampRequests !== false && (r[this.opts.timestampParam] = Vp()), !this.supportsBinary && !r.sid && (r.b64 = 1), this.createUri(s, r);
        }
        request(s = {}) {
          return Object.assign(s, { xd: this.xd, cookieJar: this.cookieJar }, this.opts), new Yn(this.uri(), s);
        }
        doWrite(s, r) {
          const o = this.request({ method: "POST", data: s });
          o.on("success", r), o.on("error", (y, b) => {
            this.onError("xhr post error", y, b);
          });
        }
        doPoll() {
          const s = this.request();
          s.on("data", this.onData.bind(this)), s.on("error", (r, o) => {
            this.onError("xhr poll error", r, o);
          }), this.pollXhr = s;
        }
      };
      var Yn = class extends ht {
        constructor(s, r) {
          super(), jr(this, r), this.opts = r, this.method = r.method || "GET", this.uri = s, this.data = r.data !== void 0 ? r.data : null, this.create();
        }
        create() {
          var s;
          const r = Gp(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
          r.xdomain = !!this.opts.xd;
          const o = this.xhr = new Kp(r);
          try {
            o.open(this.method, this.uri, true);
            try {
              if (this.opts.extraHeaders) {
                o.setDisableHeaderCheck && o.setDisableHeaderCheck(true);
                for (let y in this.opts.extraHeaders)
                  this.opts.extraHeaders.hasOwnProperty(y) && o.setRequestHeader(y, this.opts.extraHeaders[y]);
              }
            } catch (y) {
            }
            if (this.method === "POST")
              try {
                o.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
              } catch (y) {
              }
            try {
              o.setRequestHeader("Accept", "*/*");
            } catch (y) {
            }
            (s = this.opts.cookieJar) === null || s === void 0 || s.addCookies(o), "withCredentials" in o && (o.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (o.timeout = this.opts.requestTimeout), o.onreadystatechange = () => {
              var y;
              o.readyState === 3 && ((y = this.opts.cookieJar) === null || y === void 0 || y.parseCookies(o)), o.readyState === 4 && (o.status === 200 || o.status === 1223 ? this.onLoad() : this.setTimeoutFn(() => {
                this.onError(typeof o.status == "number" ? o.status : 0);
              }, 0));
            }, o.send(this.data);
          } catch (y) {
            this.setTimeoutFn(() => {
              this.onError(y);
            }, 0);
            return;
          }
          typeof document < "u" && (this.index = Yn.requestsCount++, Yn.requests[this.index] = this);
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
            typeof document < "u" && delete Yn.requests[this.index], this.xhr = null;
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
      Yn.requestsCount = 0;
      Yn.requests = {};
      if (typeof document < "u") {
        if (typeof attachEvent == "function")
          attachEvent("onunload", vp);
        else if (typeof addEventListener == "function") {
          const u = "onpagehide" in pn ? "pagehide" : "unload";
          addEventListener(u, vp, false);
        }
      }
      function vp() {
        for (let u in Yn.requests)
          Yn.requests.hasOwnProperty(u) && Yn.requests[u].abort();
      }
      var dc = typeof Promise == "function" && typeof Promise.resolve == "function" ? (u) => Promise.resolve().then(u) : (u, s) => s(u, 0);
      var br = pn.WebSocket || pn.MozWebSocket;
      var xp = true;
      var Cb = "arraybuffer";
      var Sp = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
      var zb = class extends cc {
        constructor(s) {
          super(s), this.supportsBinary = !s.forceBase64;
        }
        get name() {
          return "websocket";
        }
        doOpen() {
          if (!this.check())
            return;
          const s = this.uri(), r = this.opts.protocols, o = Sp ? {} : Gp(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
          this.opts.extraHeaders && (o.headers = this.opts.extraHeaders);
          try {
            this.ws = xp && !Sp ? r ? new br(s, r) : new br(s) : new br(s, r, o);
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
            const o = s[r], y = r === s.length - 1;
            oc(o, this.supportsBinary, (b) => {
              try {
                xp && this.ws.send(b);
              } catch (m) {
              }
              y && dc(() => {
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
          return this.opts.timestampRequests && (r[this.opts.timestampParam] = Vp()), this.supportsBinary || (r.b64 = 1), this.createUri(s, r);
        }
        check() {
          return !!br;
        }
      };
      var Mb = class extends cc {
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
              const r = gb(Number.MAX_SAFE_INTEGER, this.socket.binaryType), o = s.readable.pipeThrough(r).getReader(), y = pb();
              y.readable.pipeTo(s.writable), this.writer = y.writable.getWriter();
              const b = () => {
                o.read().then(({ done: x, value: p }) => {
                  x || (this.onPacket(p), b());
                }).catch((x) => {
                });
              };
              b();
              const m = { type: "open" };
              this.query.sid && (m.data = `{"sid":"${this.query.sid}"}`), this.writer.write(m).then(() => this.onOpen());
            });
          }));
        }
        write(s) {
          this.writable = false;
          for (let r = 0; r < s.length; r++) {
            const o = s[r], y = r === s.length - 1;
            this.writer.write(o).then(() => {
              y && dc(() => {
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
      var Ub = { websocket: zb, webtransport: Mb, polling: Ob };
      var Db = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
      var Bb = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
      function nc(u) {
        if (u.length > 2e3)
          throw "URI too long";
        const s = u, r = u.indexOf("["), o = u.indexOf("]");
        r != -1 && o != -1 && (u = u.substring(0, r) + u.substring(r, o).replace(/:/g, ";") + u.substring(o, u.length));
        let y = Db.exec(u || ""), b = {}, m = 14;
        for (; m--; )
          b[Bb[m]] = y[m] || "";
        return r != -1 && o != -1 && (b.source = s, b.host = b.host.substring(1, b.host.length - 1).replace(/;/g, ":"), b.authority = b.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), b.ipv6uri = true), b.pathNames = qb(b, b.path), b.queryKey = Hb(b, b.query), b;
      }
      function qb(u, s) {
        const r = /\/{2,9}/g, o = s.replace(r, "/").split("/");
        return (s.slice(0, 1) == "/" || s.length === 0) && o.splice(0, 1), s.slice(-1) == "/" && o.splice(o.length - 1, 1), o;
      }
      function Hb(u, s) {
        const r = {};
        return s.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(o, y, b) {
          y && (r[y] = b);
        }), r;
      }
      var Jp = class Si extends ht {
        constructor(s, r = {}) {
          super(), this.binaryType = Cb, this.writeBuffer = [], s && typeof s == "object" && (r = s, s = null), s ? (s = nc(s), r.hostname = s.host, r.secure = s.protocol === "https" || s.protocol === "wss", r.port = s.port, s.query && (r.query = s.query)) : r.host && (r.hostname = nc(r.host).host), jr(this, r), this.secure = r.secure != null ? r.secure : typeof location < "u" && location.protocol === "https:", r.hostname && !r.port && (r.port = this.secure ? "443" : "80"), this.hostname = r.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = r.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = r.transports || ["polling", "websocket", "webtransport"], this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({ path: "/engine.io", agent: false, withCredentials: false, upgrade: true, timestampParam: "t", rememberUpgrade: false, addTrailingSlash: true, rejectUnauthorized: true, perMessageDeflate: { threshold: 1024 }, transportOptions: {}, closeOnBeforeunload: false }, r), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = jb(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
            this.transport && (this.transport.removeAllListeners(), this.transport.close());
          }, addEventListener("beforeunload", this.beforeunloadEventListener, false)), this.hostname !== "localhost" && (this.offlineEventListener = () => {
            this.onClose("transport close", { description: "network connection lost" });
          }, addEventListener("offline", this.offlineEventListener, false))), this.open();
        }
        createTransport(s) {
          const r = Object.assign({}, this.opts.query);
          r.EIO = Xp, r.transport = s, this.id && (r.sid = this.id);
          const o = Object.assign({}, this.opts, { query: r, socket: this, hostname: this.hostname, secure: this.secure, port: this.port }, this.opts.transportOptions[s]);
          return new Ub[s](o);
        }
        open() {
          let s;
          if (this.opts.rememberUpgrade && Si.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1)
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
          let r = this.createTransport(s), o = false;
          Si.priorWebsocketSuccess = false;
          const y = () => {
            o || (r.send([{ type: "ping", data: "probe" }]), r.once("packet", (E) => {
              if (!o)
                if (E.type === "pong" && E.data === "probe") {
                  if (this.upgrading = true, this.emitReserved("upgrading", r), !r)
                    return;
                  Si.priorWebsocketSuccess = r.name === "websocket", this.transport.pause(() => {
                    o || this.readyState !== "closed" && (N(), this.setTransport(r), r.send([{ type: "upgrade" }]), this.emitReserved("upgrade", r), r = null, this.upgrading = false, this.flush());
                  });
                } else {
                  const Y = new Error("probe error");
                  Y.transport = r.name, this.emitReserved("upgradeError", Y);
                }
            }));
          };
          function b() {
            o || (o = true, N(), r.close(), r = null);
          }
          const m = (E) => {
            const Y = new Error("probe error: " + E);
            Y.transport = r.name, b(), this.emitReserved("upgradeError", Y);
          };
          function x() {
            m("transport closed");
          }
          function p() {
            m("socket closed");
          }
          function h(E) {
            r && E.name !== r.name && b();
          }
          const N = () => {
            r.removeListener("open", y), r.removeListener("error", m), r.removeListener("close", x), this.off("close", p), this.off("upgrading", h);
          };
          r.once("open", y), r.once("error", m), r.once("close", x), this.once("close", p), this.once("upgrading", h), this.upgrades.indexOf("webtransport") !== -1 && s !== "webtransport" ? this.setTimeoutFn(() => {
            o || r.open();
          }, 200) : r.open();
        }
        onOpen() {
          if (this.readyState = "open", Si.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(), this.readyState === "open" && this.opts.upgrade) {
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
            const o = this.writeBuffer[r].data;
            if (o && (s += Sb(o)), r > 0 && s > this.maxPayload)
              return this.writeBuffer.slice(0, r);
            s += 2;
          }
          return this.writeBuffer;
        }
        write(s, r, o) {
          return this.sendPacket("message", s, r, o), this;
        }
        send(s, r, o) {
          return this.sendPacket("message", s, r, o), this;
        }
        sendPacket(s, r, o, y) {
          if (typeof r == "function" && (y = r, r = void 0), typeof o == "function" && (y = o, o = null), this.readyState === "closing" || this.readyState === "closed")
            return;
          o = o || {}, o.compress = o.compress !== false;
          const b = { type: s, data: r, options: o };
          this.emitReserved("packetCreate", b), this.writeBuffer.push(b), y && this.once("flush", y), this.flush();
        }
        close() {
          const s = () => {
            this.onClose("forced close"), this.transport.close();
          }, r = () => {
            this.off("upgrade", r), this.off("upgradeError", r), s();
          }, o = () => {
            this.once("upgrade", r), this.once("upgradeError", r);
          };
          return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
            this.upgrading ? o() : s();
          }) : this.upgrading ? o() : s()), this;
        }
        onError(s) {
          Si.priorWebsocketSuccess = false, this.emitReserved("error", s), this.onClose("transport error", s);
        }
        onClose(s, r) {
          (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") && (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), typeof removeEventListener == "function" && (removeEventListener("beforeunload", this.beforeunloadEventListener, false), removeEventListener("offline", this.offlineEventListener, false)), this.readyState = "closed", this.id = null, this.emitReserved("close", s, r), this.writeBuffer = [], this.prevBufferLen = 0);
        }
        filterUpgrades(s) {
          const r = [];
          let o = 0;
          const y = s.length;
          for (; o < y; o++)
            ~this.transports.indexOf(s[o]) && r.push(s[o]);
          return r;
        }
      };
      Jp.protocol = Xp;
      function Lb(u, s = "", r) {
        let o = u;
        r = r || typeof location < "u" && location, u == null && (u = r.protocol + "//" + r.host), typeof u == "string" && (u.charAt(0) === "/" && (u.charAt(1) === "/" ? u = r.protocol + u : u = r.host + u), /^(https?|wss?):\/\//.test(u) || (typeof r < "u" ? u = r.protocol + "//" + u : u = "https://" + u), o = nc(u)), o.port || (/^(http|ws)$/.test(o.protocol) ? o.port = "80" : /^(http|ws)s$/.test(o.protocol) && (o.port = "443")), o.path = o.path || "/";
        const y = o.host.indexOf(":") !== -1 ? "[" + o.host + "]" : o.host;
        return o.id = o.protocol + "://" + y + ":" + o.port + s, o.href = o.protocol + "://" + y + (r && r.port === o.port ? "" : ":" + o.port), o;
      }
      var Yb = typeof ArrayBuffer == "function";
      var Qb = (u) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(u) : u.buffer instanceof ArrayBuffer;
      var Fp = Object.prototype.toString;
      var Xb = typeof Blob == "function" || typeof Blob < "u" && Fp.call(Blob) === "[object BlobConstructor]";
      var Gb = typeof File == "function" || typeof File < "u" && Fp.call(File) === "[object FileConstructor]";
      function hc(u) {
        return Yb && (u instanceof ArrayBuffer || Qb(u)) || Xb && u instanceof Blob || Gb && u instanceof File;
      }
      function xr(u, s) {
        if (!u || typeof u != "object")
          return false;
        if (Array.isArray(u)) {
          for (let r = 0, o = u.length; r < o; r++)
            if (xr(u[r]))
              return true;
          return false;
        }
        if (hc(u))
          return true;
        if (u.toJSON && typeof u.toJSON == "function" && arguments.length === 1)
          return xr(u.toJSON(), true);
        for (const r in u)
          if (Object.prototype.hasOwnProperty.call(u, r) && xr(u[r]))
            return true;
        return false;
      }
      function kb(u) {
        const s = [], r = u.data, o = u;
        return o.data = ac(r, s), o.attachments = s.length, { packet: o, buffers: s };
      }
      function ac(u, s) {
        if (!u)
          return u;
        if (hc(u)) {
          const r = { _placeholder: true, num: s.length };
          return s.push(u), r;
        } else if (Array.isArray(u)) {
          const r = new Array(u.length);
          for (let o = 0; o < u.length; o++)
            r[o] = ac(u[o], s);
          return r;
        } else if (typeof u == "object" && !(u instanceof Date)) {
          const r = {};
          for (const o in u)
            Object.prototype.hasOwnProperty.call(u, o) && (r[o] = ac(u[o], s));
          return r;
        }
        return u;
      }
      function Vb(u, s) {
        return u.data = lc(u.data, s), delete u.attachments, u;
      }
      function lc(u, s) {
        if (!u)
          return u;
        if (u && u._placeholder === true) {
          if (typeof u.num == "number" && u.num >= 0 && u.num < s.length)
            return s[u.num];
          throw new Error("illegal attachments");
        } else if (Array.isArray(u))
          for (let r = 0; r < u.length; r++)
            u[r] = lc(u[r], s);
        else if (typeof u == "object")
          for (const r in u)
            Object.prototype.hasOwnProperty.call(u, r) && (u[r] = lc(u[r], s));
        return u;
      }
      var Zb = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"];
      var Kb = 5;
      var Re;
      (function(u) {
        u[u.CONNECT = 0] = "CONNECT", u[u.DISCONNECT = 1] = "DISCONNECT", u[u.EVENT = 2] = "EVENT", u[u.ACK = 3] = "ACK", u[u.CONNECT_ERROR = 4] = "CONNECT_ERROR", u[u.BINARY_EVENT = 5] = "BINARY_EVENT", u[u.BINARY_ACK = 6] = "BINARY_ACK";
      })(Re || (Re = {}));
      var Jb = class {
        constructor(s) {
          this.replacer = s;
        }
        encode(s) {
          return (s.type === Re.EVENT || s.type === Re.ACK) && xr(s) ? this.encodeAsBinary({ type: s.type === Re.EVENT ? Re.BINARY_EVENT : Re.BINARY_ACK, nsp: s.nsp, data: s.data, id: s.id }) : [this.encodeAsString(s)];
        }
        encodeAsString(s) {
          let r = "" + s.type;
          return (s.type === Re.BINARY_EVENT || s.type === Re.BINARY_ACK) && (r += s.attachments + "-"), s.nsp && s.nsp !== "/" && (r += s.nsp + ","), s.id != null && (r += s.id), s.data != null && (r += JSON.stringify(s.data, this.replacer)), r;
        }
        encodeAsBinary(s) {
          const r = kb(s), o = this.encodeAsString(r.packet), y = r.buffers;
          return y.unshift(o), y;
        }
      };
      function _p(u) {
        return Object.prototype.toString.call(u) === "[object Object]";
      }
      var mc = class extends ht {
        constructor(s) {
          super(), this.reviver = s;
        }
        add(s) {
          let r;
          if (typeof s == "string") {
            if (this.reconstructor)
              throw new Error("got plaintext data when reconstructing a packet");
            r = this.decodeString(s);
            const o = r.type === Re.BINARY_EVENT;
            o || r.type === Re.BINARY_ACK ? (r.type = o ? Re.EVENT : Re.ACK, this.reconstructor = new Fb(r), r.attachments === 0 && super.emitReserved("decoded", r)) : super.emitReserved("decoded", r);
          } else if (hc(s) || s.base64)
            if (this.reconstructor)
              r = this.reconstructor.takeBinaryData(s), r && (this.reconstructor = null, super.emitReserved("decoded", r));
            else
              throw new Error("got binary data when not reconstructing a packet");
          else
            throw new Error("Unknown type: " + s);
        }
        decodeString(s) {
          let r = 0;
          const o = { type: Number(s.charAt(0)) };
          if (Re[o.type] === void 0)
            throw new Error("unknown packet type " + o.type);
          if (o.type === Re.BINARY_EVENT || o.type === Re.BINARY_ACK) {
            const b = r + 1;
            for (; s.charAt(++r) !== "-" && r != s.length; )
              ;
            const m = s.substring(b, r);
            if (m != Number(m) || s.charAt(r) !== "-")
              throw new Error("Illegal attachments");
            o.attachments = Number(m);
          }
          if (s.charAt(r + 1) === "/") {
            const b = r + 1;
            for (; ++r && !(s.charAt(r) === "," || r === s.length); )
              ;
            o.nsp = s.substring(b, r);
          } else
            o.nsp = "/";
          const y = s.charAt(r + 1);
          if (y !== "" && Number(y) == y) {
            const b = r + 1;
            for (; ++r; ) {
              const m = s.charAt(r);
              if (m == null || Number(m) != m) {
                --r;
                break;
              }
              if (r === s.length)
                break;
            }
            o.id = Number(s.substring(b, r + 1));
          }
          if (s.charAt(++r)) {
            const b = this.tryParse(s.substr(r));
            if (mc.isPayloadValid(o.type, b))
              o.data = b;
            else
              throw new Error("invalid payload");
          }
          return o;
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
            case Re.CONNECT:
              return _p(r);
            case Re.DISCONNECT:
              return r === void 0;
            case Re.CONNECT_ERROR:
              return typeof r == "string" || _p(r);
            case Re.EVENT:
            case Re.BINARY_EVENT:
              return Array.isArray(r) && (typeof r[0] == "number" || typeof r[0] == "string" && Zb.indexOf(r[0]) === -1);
            case Re.ACK:
            case Re.BINARY_ACK:
              return Array.isArray(r);
          }
        }
        destroy() {
          this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
        }
      };
      var Fb = class {
        constructor(s) {
          this.packet = s, this.buffers = [], this.reconPack = s;
        }
        takeBinaryData(s) {
          if (this.buffers.push(s), this.buffers.length === this.reconPack.attachments) {
            const r = Vb(this.reconPack, this.buffers);
            return this.finishedReconstruction(), r;
          }
          return null;
        }
        finishedReconstruction() {
          this.reconPack = null, this.buffers = [];
        }
      };
      var Wb = Object.freeze(Object.defineProperty({ __proto__: null, Decoder: mc, Encoder: Jb, get PacketType() {
        return Re;
      }, protocol: Kb }, Symbol.toStringTag, { value: "Module" }));
      function Tn(u, s, r) {
        return u.on(s, r), function() {
          u.off(s, r);
        };
      }
      var $b = Object.freeze({ connect: 1, connect_error: 1, disconnect: 1, disconnecting: 1, newListener: 1, removeListener: 1 });
      var Wp = class extends ht {
        constructor(s, r, o) {
          super(), this.connected = false, this.recovered = false, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = s, this.nsp = r, o && o.auth && (this.auth = o.auth), this._opts = Object.assign({}, o), this.io._autoConnect && this.open();
        }
        get disconnected() {
          return !this.connected;
        }
        subEvents() {
          if (this.subs)
            return;
          const s = this.io;
          this.subs = [Tn(s, "open", this.onopen.bind(this)), Tn(s, "packet", this.onpacket.bind(this)), Tn(s, "error", this.onerror.bind(this)), Tn(s, "close", this.onclose.bind(this))];
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
          if ($b.hasOwnProperty(s))
            throw new Error('"' + s.toString() + '" is a reserved event name');
          if (r.unshift(s), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
            return this._addToQueue(r), this;
          const o = { type: Re.EVENT, data: r };
          if (o.options = {}, o.options.compress = this.flags.compress !== false, typeof r[r.length - 1] == "function") {
            const b = this.ids++, m = r.pop();
            this._registerAckCallback(b, m), o.id = b;
          }
          const y = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
          return this.flags.volatile && (!y || !this.connected) || (this.connected ? (this.notifyOutgoingListeners(o), this.packet(o)) : this.sendBuffer.push(o)), this.flags = {}, this;
        }
        _registerAckCallback(s, r) {
          var o;
          const y = (o = this.flags.timeout) !== null && o !== void 0 ? o : this._opts.ackTimeout;
          if (y === void 0) {
            this.acks[s] = r;
            return;
          }
          const b = this.io.setTimeoutFn(() => {
            delete this.acks[s];
            for (let m = 0; m < this.sendBuffer.length; m++)
              this.sendBuffer[m].id === s && this.sendBuffer.splice(m, 1);
            r.call(this, new Error("operation has timed out"));
          }, y);
          this.acks[s] = (...m) => {
            this.io.clearTimeoutFn(b), r.apply(this, [null, ...m]);
          };
        }
        emitWithAck(s, ...r) {
          const o = this.flags.timeout !== void 0 || this._opts.ackTimeout !== void 0;
          return new Promise((y, b) => {
            r.push((m, x) => o ? m ? b(m) : y(x) : y(m)), this.emit(s, ...r);
          });
        }
        _addToQueue(s) {
          let r;
          typeof s[s.length - 1] == "function" && (r = s.pop());
          const o = { id: this._queueSeq++, tryCount: 0, pending: false, args: s, flags: Object.assign({ fromQueue: true }, this.flags) };
          s.push((y, ...b) => o !== this._queue[0] ? void 0 : (y !== null ? o.tryCount > this._opts.retries && (this._queue.shift(), r && r(y)) : (this._queue.shift(), r && r(null, ...b)), o.pending = false, this._drainQueue())), this._queue.push(o), this._drainQueue();
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
          this.packet({ type: Re.CONNECT, data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, s) : s });
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
              case Re.CONNECT:
                s.data && s.data.sid ? this.onconnect(s.data.sid, s.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                break;
              case Re.EVENT:
              case Re.BINARY_EVENT:
                this.onevent(s);
                break;
              case Re.ACK:
              case Re.BINARY_ACK:
                this.onack(s);
                break;
              case Re.DISCONNECT:
                this.ondisconnect();
                break;
              case Re.CONNECT_ERROR:
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
            for (const o of r)
              o.apply(this, s);
          }
          super.emit.apply(this, s), this._pid && s.length && typeof s[s.length - 1] == "string" && (this._lastOffset = s[s.length - 1]);
        }
        ack(s) {
          const r = this;
          let o = false;
          return function(...y) {
            o || (o = true, r.packet({ type: Re.ACK, id: s, data: y }));
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
          return this.connected && this.packet({ type: Re.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
            for (let o = 0; o < r.length; o++)
              if (s === r[o])
                return r.splice(o, 1), this;
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
            for (let o = 0; o < r.length; o++)
              if (s === r[o])
                return r.splice(o, 1), this;
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
            for (const o of r)
              o.apply(this, s.data);
          }
        }
      };
      function Ni(u) {
        u = u || {}, this.ms = u.min || 100, this.max = u.max || 1e4, this.factor = u.factor || 2, this.jitter = u.jitter > 0 && u.jitter <= 1 ? u.jitter : 0, this.attempts = 0;
      }
      Ni.prototype.duration = function() {
        var u = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
          var s = Math.random(), r = Math.floor(s * this.jitter * u);
          u = (Math.floor(s * 10) & 1) == 0 ? u - r : u + r;
        }
        return Math.min(u, this.max) | 0;
      };
      Ni.prototype.reset = function() {
        this.attempts = 0;
      };
      Ni.prototype.setMin = function(u) {
        this.ms = u;
      };
      Ni.prototype.setMax = function(u) {
        this.max = u;
      };
      Ni.prototype.setJitter = function(u) {
        this.jitter = u;
      };
      var ic = class extends ht {
        constructor(s, r) {
          var o;
          super(), this.nsps = {}, this.subs = [], s && typeof s == "object" && (r = s, s = void 0), r = r || {}, r.path = r.path || "/socket.io", this.opts = r, jr(this, r), this.reconnection(r.reconnection !== false), this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0), this.reconnectionDelay(r.reconnectionDelay || 1e3), this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3), this.randomizationFactor((o = r.randomizationFactor) !== null && o !== void 0 ? o : 0.5), this.backoff = new Ni({ min: this.reconnectionDelay(), max: this.reconnectionDelayMax(), jitter: this.randomizationFactor() }), this.timeout(r.timeout == null ? 2e4 : r.timeout), this._readyState = "closed", this.uri = s;
          const y = r.parser || Wb;
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
          this.engine = new Jp(this.uri, this.opts);
          const r = this.engine, o = this;
          this._readyState = "opening", this.skipReconnect = false;
          const y = Tn(r, "open", function() {
            o.onopen(), s && s();
          }), b = (x) => {
            this.cleanup(), this._readyState = "closed", this.emitReserved("error", x), s ? s(x) : this.maybeReconnectOnOpen();
          }, m = Tn(r, "error", b);
          if (this._timeout !== false) {
            const x = this._timeout, p = this.setTimeoutFn(() => {
              y(), b(new Error("timeout")), r.close();
            }, x);
            this.opts.autoUnref && p.unref(), this.subs.push(() => {
              this.clearTimeoutFn(p);
            });
          }
          return this.subs.push(y), this.subs.push(m), this;
        }
        connect(s) {
          return this.open(s);
        }
        onopen() {
          this.cleanup(), this._readyState = "open", this.emitReserved("open");
          const s = this.engine;
          this.subs.push(Tn(s, "ping", this.onping.bind(this)), Tn(s, "data", this.ondata.bind(this)), Tn(s, "error", this.onerror.bind(this)), Tn(s, "close", this.onclose.bind(this)), Tn(this.decoder, "decoded", this.ondecoded.bind(this)));
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
          dc(() => {
            this.emitReserved("packet", s);
          }, this.setTimeoutFn);
        }
        onerror(s) {
          this.emitReserved("error", s);
        }
        socket(s, r) {
          let o = this.nsps[s];
          return o ? this._autoConnect && !o.active && o.connect() : (o = new Wp(this, s, r), this.nsps[s] = o), o;
        }
        _destroy(s) {
          const r = Object.keys(this.nsps);
          for (const o of r)
            if (this.nsps[o].active)
              return;
          this._close();
        }
        _packet(s) {
          const r = this.encoder.encode(s);
          for (let o = 0; o < r.length; o++)
            this.engine.write(r[o], s.options);
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
            const o = this.setTimeoutFn(() => {
              s.skipReconnect || (this.emitReserved("reconnect_attempt", s.backoff.attempts), !s.skipReconnect && s.open((y) => {
                y ? (s._reconnecting = false, s.reconnect(), this.emitReserved("reconnect_error", y)) : s.onreconnect();
              }));
            }, r);
            this.opts.autoUnref && o.unref(), this.subs.push(() => {
              this.clearTimeoutFn(o);
            });
          }
        }
        onreconnect() {
          const s = this.backoff.attempts;
          this._reconnecting = false, this.backoff.reset(), this.emitReserved("reconnect", s);
        }
      };
      var Os = {};
      function Sr(u, s) {
        typeof u == "object" && (s = u, u = void 0), s = s || {};
        const r = Lb(u, s.path || "/socket.io"), o = r.source, y = r.id, b = r.path, m = Os[y] && b in Os[y].nsps, x = s.forceNew || s["force new connection"] || s.multiplex === false || m;
        let p;
        return x ? p = new ic(o, s) : (Os[y] || (Os[y] = new ic(o, s)), p = Os[y]), r.query && !s.query && (s.query = r.queryKey), p.socket(r.path, s);
      }
      Object.assign(Sr, { Manager: ic, Socket: Wp, io: Sr, connect: Sr });
      var Pb = class {
        constructor(s, r, o, y) {
          Tl(this, "socket_port"), Tl(this, "host"), Tl(this, "port"), Tl(this, "protocol"), Tl(this, "url"), Tl(this, "site_name"), Tl(this, "socket");
          var b, m, x, p;
          if (this.socket_port = o != null ? o : "9000", this.host = (b = window.location) == null ? void 0 : b.hostname, this.port = (m = window.location) != null && m.port ? `:${this.socket_port}` : "", this.protocol = ((x = window.location) == null ? void 0 : x.protocol) === "https:" ? "https" : "http", s) {
            let h = new URL(s);
            h.port = "", o ? (h.port = o, this.url = h.toString()) : this.url = h.toString();
          } else
            this.url = `${this.protocol}://${this.host}${this.port}/`;
          r && (this.url = `${this.url}${r}`), this.site_name = r, this.socket = Sr(`${this.url}`, { withCredentials: true, secure: this.protocol === "https", extraHeaders: y && y.useToken === true ? { Authorization: `${y.type} ${(p = y.token) == null ? void 0 : p.call(y)}` } : {} });
        }
      };
      var Ib = tt.createContext(null);
      var ev = ({ url: u = "", tokenParams: s, socketPort: r, swrConfig: o, siteName: y, enableSocket: b = true, children: m, customHeaders: x }) => {
        const p = tt.useMemo(() => {
          const h = new zy.FrappeApp(u, s, void 0, x);
          return { url: u, tokenParams: s, app: h, auth: h.auth(), db: h.db(), call: h.call(), file: h.file(), socket: b ? new Pb(u, y, r, s).socket : void 0, enableSocket: b, socketPort: r };
        }, [u, s, r, b, x]);
        return d.jsx(Ib.Provider, { value: p, children: d.jsx(rb, { value: o, children: m }) });
      };
      var tv = (u) => {
        var s;
        return d.jsx(ev, { enableSocket: false, customHeaders: { "x-frappe-csrf-token": (s = window.frappe) == null ? void 0 : s.csrf_token }, children: u.children });
      };
      Object.keys(km).map((u) => km[u]).filter((u) => u.component).map((u) => {
        const s = (r) => d.jsx(tv, At(Ge({}, r), { children: d.jsx(u, {}) }));
        return customElements.get(u.component) || customElements.define(u.component, yy(s, zs, Ty)), { element: s, simulator: "simulator" in u ? u.simulator : void 0, renderInReact: "renderInReact" in u ? u.renderInReact : void 0, tag: u.component };
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
* @license lucide-react v0.556.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
//# sourceMappingURL=index.bundle.BC7STV6G.js.map
