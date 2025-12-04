(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // ../pms_system/pms_system/public/pms-ui/index.bundle.js
  var require_index_bundle = __commonJS({
    "../pms_system/pms_system/public/pms-ui/index.bundle.js"() {
      var N0 = Object.defineProperty;
      var j0 = Object.defineProperties;
      var O0 = Object.getOwnPropertyDescriptors;
      var rr = Object.getOwnPropertySymbols;
      var qm = Object.prototype.hasOwnProperty;
      var Hm = Object.prototype.propertyIsEnumerable;
      var vi = (u, s) => (s = Symbol[u]) ? s : Symbol.for("Symbol." + u);
      var R0 = (u) => {
        throw TypeError(u);
      };
      var Bm = (u, s, r) => s in u ? N0(u, s, { enumerable: true, configurable: true, writable: true, value: r }) : u[s] = r;
      var Ve = (u, s) => {
        for (var r in s || (s = {}))
          qm.call(s, r) && Bm(u, r, s[r]);
        if (rr)
          for (var r of rr(s))
            Hm.call(s, r) && Bm(u, r, s[r]);
        return u;
      };
      var Yt = (u, s) => j0(u, O0(s));
      var Oo = (u, s) => {
        var r = {};
        for (var c in u)
          qm.call(u, c) && s.indexOf(c) < 0 && (r[c] = u[c]);
        if (u != null && rr)
          for (var c of rr(u))
            s.indexOf(c) < 0 && Hm.call(u, c) && (r[c] = u[c]);
        return r;
      };
      var da = (u, s, r) => new Promise((c, g) => {
        var v = (m) => {
          try {
            x(r.next(m));
          } catch (d) {
            g(d);
          }
        }, h = (m) => {
          try {
            x(r.throw(m));
          } catch (d) {
            g(d);
          }
        }, x = (m) => m.done ? c(m.value) : Promise.resolve(m.value).then(v, h);
        x((r = r.apply(u, s)).next());
      });
      var _l = function(u, s) {
        this[0] = u, this[1] = s;
      };
      var Ro = (u, s, r) => {
        var c = (h, x, m, d) => {
          try {
            var E = r[h](x), N = (x = E.value) instanceof _l, Y = E.done;
            Promise.resolve(N ? x[0] : x).then((w) => N ? c(h === "return" ? h : "next", x[1] ? { done: w.done, value: w.value } : w, m, d) : m({ value: w, done: Y })).catch((w) => c("throw", w, m, d));
          } catch (w) {
            d(w);
          }
        }, g = (h) => v[h] = (x) => new Promise((m, d) => c(h, x, m, d)), v = {};
        return r = r.apply(u, s), v[vi("asyncIterator")] = () => v, g("next"), g("throw"), g("return"), v;
      };
      var Co = (u) => {
        var s = u[vi("asyncIterator")], r = false, c, g = {};
        return s == null ? (s = u[vi("iterator")](), c = (v) => g[v] = (h) => s[v](h)) : (s = s.call(u), c = (v) => g[v] = (h) => {
          if (r) {
            if (r = false, v === "throw")
              throw h;
            return h;
          }
          return r = true, { done: false, value: new _l(new Promise((x) => {
            var m = s[v](h);
            m instanceof Object || R0("Object expected"), x(m);
          }), 1) };
        }), g[vi("iterator")] = () => g, c("next"), "throw" in s ? c("throw") : g.throw = (v) => {
          throw v;
        }, "return" in s && c("return"), g;
      };
      var Lm = (u, s, r) => (s = u[vi("asyncIterator")]) ? s.call(u) : (u = u[vi("iterator")](), s = {}, r = (c, g) => (g = u[c]) && (s[c] = (v) => new Promise((h, x, m) => (v = g.call(u, v), m = v.done, Promise.resolve(v.value).then((d) => h({ value: d, done: m }), x)))), r("next"), r("return"), s);
      (function() {
        const s = document.createElement("link").relList;
        if (s && s.supports && s.supports("modulepreload"))
          return;
        for (const g of document.querySelectorAll('link[rel="modulepreload"]'))
          c(g);
        new MutationObserver((g) => {
          for (const v of g)
            if (v.type === "childList")
              for (const h of v.addedNodes)
                h.tagName === "LINK" && h.rel === "modulepreload" && c(h);
        }).observe(document, { childList: true, subtree: true });
        function r(g) {
          const v = {};
          return g.integrity && (v.integrity = g.integrity), g.referrerPolicy && (v.referrerPolicy = g.referrerPolicy), g.crossOrigin === "use-credentials" ? v.credentials = "include" : g.crossOrigin === "anonymous" ? v.credentials = "omit" : v.credentials = "same-origin", v;
        }
        function c(g) {
          if (g.ep)
            return;
          g.ep = true;
          const v = r(g);
          fetch(g.href, v);
        }
      })();
      function Ep(u) {
        return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
      }
      var zo = { exports: {} };
      var As = {};
      var Ym;
      function C0() {
        if (Ym)
          return As;
        Ym = 1;
        var u = Symbol.for("react.transitional.element"), s = Symbol.for("react.fragment");
        function r(c, g, v) {
          var h = null;
          if (v !== void 0 && (h = "" + v), g.key !== void 0 && (h = "" + g.key), "key" in g) {
            v = {};
            for (var x in g)
              x !== "key" && (v[x] = g[x]);
          } else
            v = g;
          return g = v.ref, { $$typeof: u, type: c, key: h, ref: g !== void 0 ? g : null, props: v };
        }
        return As.Fragment = s, As.jsx = r, As.jsxs = r, As;
      }
      var Xm;
      function z0() {
        return Xm || (Xm = 1, zo.exports = C0()), zo.exports;
      }
      var b = z0();
      var M0 = (u) => b.jsxs("label", { children: [u.label && b.jsx("div", { children: u.label }), b.jsx("input", { className: "ef-border ef-border-gray-400 ef-rounded ef-px-2 ef-py-1", onChange: (s) => u.onChange(s.target.value), type: "text", value: u.value })] });
      var U0 = (u, s) => {
        var c;
        const r = window.cur_frm;
        return r ? (c = r.set_value) == null ? void 0 : c.call(r, u, s) : null;
      };
      var D0 = () => {
        const u = window.cur_frm;
        return u ? u.doc : null;
      };
      var Mo = { exports: {} };
      var ye = {};
      var Gm;
      function B0() {
        if (Gm)
          return ye;
        Gm = 1;
        var u = Symbol.for("react.transitional.element"), s = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), v = Symbol.for("react.consumer"), h = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), d = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), N = Symbol.for("react.activity"), Y = Symbol.iterator;
        function w(_) {
          return _ === null || typeof _ != "object" ? null : (_ = Y && _[Y] || _["@@iterator"], typeof _ == "function" ? _ : null);
        }
        var C = { isMounted: function() {
          return false;
        }, enqueueForceUpdate: function() {
        }, enqueueReplaceState: function() {
        }, enqueueSetState: function() {
        } }, Z = Object.assign, ie = {};
        function he(_, B, V) {
          this.props = _, this.context = B, this.refs = ie, this.updater = V || C;
        }
        he.prototype.isReactComponent = {}, he.prototype.setState = function(_, B) {
          if (typeof _ != "object" && typeof _ != "function" && _ != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
          this.updater.enqueueSetState(this, _, B, "setState");
        }, he.prototype.forceUpdate = function(_) {
          this.updater.enqueueForceUpdate(this, _, "forceUpdate");
        };
        function _e() {
        }
        _e.prototype = he.prototype;
        function se(_, B, V) {
          this.props = _, this.context = B, this.refs = ie, this.updater = V || C;
        }
        var ve = se.prototype = new _e();
        ve.constructor = se, Z(ve, he.prototype), ve.isPureReactComponent = true;
        var Te = Array.isArray;
        function Ue() {
        }
        var fe = { H: null, A: null, T: null, S: null }, lt = Object.prototype.hasOwnProperty;
        function wt(_, B, V) {
          var K = V.ref;
          return { $$typeof: u, type: _, key: B, ref: K !== void 0 ? K : null, props: V };
        }
        function Pt(_, B) {
          return wt(_.type, B, _.props);
        }
        function pt(_) {
          return typeof _ == "object" && _ !== null && _.$$typeof === u;
        }
        function De(_) {
          var B = { "=": "=0", ":": "=2" };
          return "$" + _.replace(/[=:]/g, function(V) {
            return B[V];
          });
        }
        var ke = /\/+/g;
        function Me(_, B) {
          return typeof _ == "object" && _ !== null && _.key != null ? De("" + _.key) : B.toString(36);
        }
        function xt(_) {
          switch (_.status) {
            case "fulfilled":
              return _.value;
            case "rejected":
              throw _.reason;
            default:
              switch (typeof _.status == "string" ? _.then(Ue, Ue) : (_.status = "pending", _.then(function(B) {
                _.status === "pending" && (_.status = "fulfilled", _.value = B);
              }, function(B) {
                _.status === "pending" && (_.status = "rejected", _.reason = B);
              })), _.status) {
                case "fulfilled":
                  return _.value;
                case "rejected":
                  throw _.reason;
              }
          }
          throw _;
        }
        function X(_, B, V, K, ce) {
          var xe = typeof _;
          (xe === "undefined" || xe === "boolean") && (_ = null);
          var me = false;
          if (_ === null)
            me = true;
          else
            switch (xe) {
              case "bigint":
              case "string":
              case "number":
                me = true;
                break;
              case "object":
                switch (_.$$typeof) {
                  case u:
                  case s:
                    me = true;
                    break;
                  case E:
                    return me = _._init, X(me(_._payload), B, V, K, ce);
                }
            }
          if (me)
            return ce = ce(_), me = K === "" ? "." + Me(_, 0) : K, Te(ce) ? (V = "", me != null && (V = me.replace(ke, "$&/") + "/"), X(ce, B, V, "", function(St) {
              return St;
            })) : ce != null && (pt(ce) && (ce = Pt(ce, V + (ce.key == null || _ && _.key === ce.key ? "" : ("" + ce.key).replace(ke, "$&/") + "/") + me)), B.push(ce)), 1;
          me = 0;
          var ft = K === "" ? "." : K + ":";
          if (Te(_))
            for (var Ze = 0; Ze < _.length; Ze++)
              K = _[Ze], xe = ft + Me(K, Ze), me += X(K, B, V, xe, ce);
          else if (Ze = w(_), typeof Ze == "function")
            for (_ = Ze.call(_), Ze = 0; !(K = _.next()).done; )
              K = K.value, xe = ft + Me(K, Ze++), me += X(K, B, V, xe, ce);
          else if (xe === "object") {
            if (typeof _.then == "function")
              return X(xt(_), B, V, K, ce);
            throw B = String(_), Error("Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead.");
          }
          return me;
        }
        function I(_, B, V) {
          if (_ == null)
            return _;
          var K = [], ce = 0;
          return X(_, K, "", "", function(xe) {
            return B.call(V, xe, ce++);
          }), K;
        }
        function J(_) {
          if (_._status === -1) {
            var B = _._result;
            B = B(), B.then(function(V) {
              (_._status === 0 || _._status === -1) && (_._status = 1, _._result = V);
            }, function(V) {
              (_._status === 0 || _._status === -1) && (_._status = 2, _._result = V);
            }), _._status === -1 && (_._status = 0, _._result = B);
          }
          if (_._status === 1)
            return _._result.default;
          throw _._result;
        }
        var ee = typeof reportError == "function" ? reportError : function(_) {
          if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var B = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof _ == "object" && _ !== null && typeof _.message == "string" ? String(_.message) : String(_), error: _ });
            if (!window.dispatchEvent(B))
              return;
          } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", _);
            return;
          }
          console.error(_);
        }, de = { map: I, forEach: function(_, B, V) {
          I(_, function() {
            B.apply(this, arguments);
          }, V);
        }, count: function(_) {
          var B = 0;
          return I(_, function() {
            B++;
          }), B;
        }, toArray: function(_) {
          return I(_, function(B) {
            return B;
          }) || [];
        }, only: function(_) {
          if (!pt(_))
            throw Error("React.Children.only expected to receive a single React element child.");
          return _;
        } };
        return ye.Activity = N, ye.Children = de, ye.Component = he, ye.Fragment = r, ye.Profiler = g, ye.PureComponent = se, ye.StrictMode = c, ye.Suspense = m, ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = fe, ye.__COMPILER_RUNTIME = { __proto__: null, c: function(_) {
          return fe.H.useMemoCache(_);
        } }, ye.cache = function(_) {
          return function() {
            return _.apply(null, arguments);
          };
        }, ye.cacheSignal = function() {
          return null;
        }, ye.cloneElement = function(_, B, V) {
          if (_ == null)
            throw Error("The argument must be a React element, but you passed " + _ + ".");
          var K = Z({}, _.props), ce = _.key;
          if (B != null)
            for (xe in B.key !== void 0 && (ce = "" + B.key), B)
              !lt.call(B, xe) || xe === "key" || xe === "__self" || xe === "__source" || xe === "ref" && B.ref === void 0 || (K[xe] = B[xe]);
          var xe = arguments.length - 2;
          if (xe === 1)
            K.children = V;
          else if (1 < xe) {
            for (var me = Array(xe), ft = 0; ft < xe; ft++)
              me[ft] = arguments[ft + 2];
            K.children = me;
          }
          return wt(_.type, ce, K);
        }, ye.createContext = function(_) {
          return _ = { $$typeof: h, _currentValue: _, _currentValue2: _, _threadCount: 0, Provider: null, Consumer: null }, _.Provider = _, _.Consumer = { $$typeof: v, _context: _ }, _;
        }, ye.createElement = function(_, B, V) {
          var K, ce = {}, xe = null;
          if (B != null)
            for (K in B.key !== void 0 && (xe = "" + B.key), B)
              lt.call(B, K) && K !== "key" && K !== "__self" && K !== "__source" && (ce[K] = B[K]);
          var me = arguments.length - 2;
          if (me === 1)
            ce.children = V;
          else if (1 < me) {
            for (var ft = Array(me), Ze = 0; Ze < me; Ze++)
              ft[Ze] = arguments[Ze + 2];
            ce.children = ft;
          }
          if (_ && _.defaultProps)
            for (K in me = _.defaultProps, me)
              ce[K] === void 0 && (ce[K] = me[K]);
          return wt(_, xe, ce);
        }, ye.createRef = function() {
          return { current: null };
        }, ye.forwardRef = function(_) {
          return { $$typeof: x, render: _ };
        }, ye.isValidElement = pt, ye.lazy = function(_) {
          return { $$typeof: E, _payload: { _status: -1, _result: _ }, _init: J };
        }, ye.memo = function(_, B) {
          return { $$typeof: d, type: _, compare: B === void 0 ? null : B };
        }, ye.startTransition = function(_) {
          var B = fe.T, V = {};
          fe.T = V;
          try {
            var K = _(), ce = fe.S;
            ce !== null && ce(V, K), typeof K == "object" && K !== null && typeof K.then == "function" && K.then(Ue, ee);
          } catch (xe) {
            ee(xe);
          } finally {
            B !== null && V.types !== null && (B.types = V.types), fe.T = B;
          }
        }, ye.unstable_useCacheRefresh = function() {
          return fe.H.useCacheRefresh();
        }, ye.use = function(_) {
          return fe.H.use(_);
        }, ye.useActionState = function(_, B, V) {
          return fe.H.useActionState(_, B, V);
        }, ye.useCallback = function(_, B) {
          return fe.H.useCallback(_, B);
        }, ye.useContext = function(_) {
          return fe.H.useContext(_);
        }, ye.useDebugValue = function() {
        }, ye.useDeferredValue = function(_, B) {
          return fe.H.useDeferredValue(_, B);
        }, ye.useEffect = function(_, B) {
          return fe.H.useEffect(_, B);
        }, ye.useEffectEvent = function(_) {
          return fe.H.useEffectEvent(_);
        }, ye.useId = function() {
          return fe.H.useId();
        }, ye.useImperativeHandle = function(_, B, V) {
          return fe.H.useImperativeHandle(_, B, V);
        }, ye.useInsertionEffect = function(_, B) {
          return fe.H.useInsertionEffect(_, B);
        }, ye.useLayoutEffect = function(_, B) {
          return fe.H.useLayoutEffect(_, B);
        }, ye.useMemo = function(_, B) {
          return fe.H.useMemo(_, B);
        }, ye.useOptimistic = function(_, B) {
          return fe.H.useOptimistic(_, B);
        }, ye.useReducer = function(_, B, V) {
          return fe.H.useReducer(_, B, V);
        }, ye.useRef = function(_) {
          return fe.H.useRef(_);
        }, ye.useState = function(_) {
          return fe.H.useState(_);
        }, ye.useSyncExternalStore = function(_, B, V) {
          return fe.H.useSyncExternalStore(_, B, V);
        }, ye.useTransition = function() {
          return fe.H.useTransition();
        }, ye.version = "19.2.0", ye;
      }
      var Qm;
      function lf() {
        return Qm || (Qm = 1, Mo.exports = B0()), Mo.exports;
      }
      var We = lf();
      var Cs = Ep(We);
      var sf = () => {
        var r;
        const [u, s] = We.useState((r = D0()) == null ? void 0 : r.client_name);
        return We.useEffect(() => {
          U0("client_name", u);
        }, [u]), b.jsx(b.Fragment, { children: b.jsx(M0, { value: u, onChange: s, label: "Client Name" }) });
      };
      sf.component = "pms-demo-component";
      sf.simulator = { doctype: "Appraisal Cycle", docname: "2025-26" };
      var q0 = (u) => u.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
      var H0 = (u) => u.replace(/^([A-Z])|[\s-_]+(\w)/g, (s, r, c) => c ? c.toUpperCase() : r.toLowerCase());
      var Vm = (u) => {
        const s = H0(u);
        return s.charAt(0).toUpperCase() + s.slice(1);
      };
      var Ap = (...u) => u.filter((s, r, c) => !!s && s.trim() !== "" && c.indexOf(s) === r).join(" ").trim();
      var L0 = (u) => {
        for (const s in u)
          if (s.startsWith("aria-") || s === "role" || s === "title")
            return true;
      };
      var Y0 = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
      var X0 = We.forwardRef((d, m) => {
        var E = d, { color: u = "currentColor", size: s = 24, strokeWidth: r = 2, absoluteStrokeWidth: c, className: g = "", children: v, iconNode: h } = E, x = Oo(E, ["color", "size", "strokeWidth", "absoluteStrokeWidth", "className", "children", "iconNode"]);
        return We.createElement("svg", Ve(Ve(Yt(Ve({ ref: m }, Y0), { width: s, height: s, stroke: u, strokeWidth: c ? Number(r) * 24 / Number(s) : r, className: Ap("lucide", g) }), !v && !L0(x) && { "aria-hidden": "true" }), x), [...h.map(([N, Y]) => We.createElement(N, Y)), ...Array.isArray(v) ? v : [v]]);
      });
      var uf = (u, s) => {
        const r = We.forwardRef((h, v) => {
          var x = h, { className: c } = x, g = Oo(x, ["className"]);
          return We.createElement(X0, Ve({ ref: v, iconNode: s, className: Ap(`lucide-${q0(Vm(u))}`, `lucide-${u}`, c) }, g));
        });
        return r.displayName = Vm(u), r;
      };
      var G0 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
      var Q0 = uf("chevron-down", G0);
      var V0 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
      var k0 = uf("chevron-up", V0);
      var Z0 = [["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }], ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]];
      var Sr = uf("lock", Z0);
      var ma = ({ rating: u, onChange: s, disabled: r }) => b.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2", children: [b.jsx("input", { type: "number", min: 0, max: 10, step: 0.5, value: u != null ? u : "", onChange: (c) => {
        let g = parseFloat(c.target.value);
        if (isNaN(g)) {
          s(0);
          return;
        }
        g < 0 && (g = 0), g > 10 && (g = 10), s(g);
      }, disabled: r, className: `ef-w-16 ef-px-2 ef-py-1 ef-border ef-rounded ef-text-center ef-font-semibold ef-text-sm ${r ? "ef-bg-gray-100 ef-text-gray-500 ef-cursor-not-allowed" : "ef-bg-white"}`, placeholder: "0-10" }), b.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/ 10" })] });
      var K0 = ({ kra: u, goal: s, appraisalMode: r, updateGoalRating: c, employeeCanEdit: g, managerCanEdit: v, showManagerData: h, secondManagerCanEdit: x }) => {
        const m = () => b.jsxs("div", { className: "ef-absolute ef-top-2 ef-right-2 ef-flex ef-items-center ef-gap-1 ef-bg-gray-200 ef-text-gray-600 ef-text-xs ef-px-2 ef-py-1 ef-rounded-lg ef-shadow-sm", children: [b.jsx(Sr, { size: 12 }), "Locked"] }), d = We.useMemo(() => {
          const E = s.tasks;
          if (!E || E.length === 0)
            return null;
          const N = E.map((C) => typeof C.completed_percentage == "number" ? Math.max(0, Math.min(100, C.completed_percentage)) : 0), Y = N.reduce((C, Z) => C + Z, 0) / N.length, w = Math.round(Y / 10 * 10) / 10;
          return { avgPercent: Y, rating: w };
        }, [s]);
        if (We.useEffect(() => {
          if (r === "self") {
            const E = s.tasks;
            if (E && E.length > 0 && d) {
              const N = s.selfRating, Y = d.rating;
              N !== Y && c(u.id, s.id, "selfRating", Y);
            }
          }
        }, [d, r, s]), r === "self") {
          const E = s.tasks;
          return b.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-shadow-sm", children: [b.jsx("div", { className: "ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b", children: b.jsx("h3", { className: "ef-text-sm ef-font-semibold ef-text-gray-900", children: s.description }) }), b.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [b.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [b.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Self Appraisal" }), !g && b.jsx(m, {})] }), (!E || E.length === 0) && b.jsxs(b.Fragment, { children: [b.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), b.jsx(ma, { rating: s.selfRating, onChange: (N) => g && c(u.id, s.id, "selfRating", N), disabled: !g }), b.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), b.jsx("textarea", { value: s.selfComments, onChange: (N) => g && c(u.id, s.id, "selfComments", N.target.value), disabled: !g, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${g ? "ef-bg-white ef-border-blue-200 focus:ef-ring-1 focus:ef-ring-blue-400" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Share your thoughts..." })] }), E && E.length > 0 && d && b.jsxs(b.Fragment, { children: [b.jsxs("div", { className: "ef-mb-3", children: [b.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-2", children: "Tasks" }), b.jsx("div", { className: "ef-space-y-2", children: E.map((N) => {
            console.log(E);
            const Y = typeof N.completed_percentage == "number" ? Math.max(0, Math.min(100, N.completed_percentage)) : N.completed_percentage ? 100 : 0;
            return b.jsxs("div", { className: "ef-bg-white ef-border ef-border-gray-100 ef-p-2 ef-rounded ef-text-xs", children: [b.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-1", children: [b.jsx("div", { className: "ef-font-medium ef-text-sm", children: N.subject }), b.jsxs("div", { className: "ef-text-xs ef-text-gray-600", children: [Math.round(Y), "%"] })] }), b.jsx("div", { className: "ef-w-full ef-bg-gray-100 ef-rounded ef-overflow-hidden ef-h-2", children: b.jsx("div", { style: { width: `${Y}%` }, className: "ef-h-full ef-bg-gradient-to-r ef-from-blue-400 ef-to-blue-600" }) })] }, N.id || N.subject);
          }) })] }), b.jsxs("div", { children: [b.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Computed Self Rating" }), b.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-blue-100 ef-border ef-border-blue-200 ef-px-2 ef-py-1 ef-rounded", children: [b.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-blue-700", children: d.rating }), b.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" }), b.jsxs("span", { className: "ef-text-xs ef-text-gray-500 ef-ml-2", children: ["(based on ", Math.round(d.avgPercent), "% average completion)"] })] }), b.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), b.jsx("textarea", { value: s.selfComments, onChange: (N) => g && c(u.id, s.id, "selfComments", N.target.value), disabled: !g, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${g ? "ef-bg-white ef-border-blue-200 focus:ef-ring-1 focus:ef-ring-blue-400" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Share your thoughts..." })] })] })] })] });
        }
        return r === "manager" ? b.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-shadow-sm", children: [b.jsx("div", { className: "ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b", children: b.jsx("h3", { className: "ef-text-sm ef-font-semibold ef-text-gray-900", children: s.description }) }), b.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [b.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Employee Self Rating" }), b.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4 ef-mb-2", children: [b.jsxs("div", { children: [b.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), b.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-blue-100 ef-border ef-border-blue-200 ef-px-2 ef-py-1 ef-rounded", children: [b.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-blue-700", children: s.selfRating }), b.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), b.jsxs("div", { className: "ef-flex-1", children: [b.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), b.jsx("div", { className: "ef-bg-white ef-border ef-border-blue-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: s.selfComments || b.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), h && b.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-purple-50", children: [b.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [b.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Manager Review" }), !v && b.jsx(m, {})] }), b.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), b.jsx(ma, { rating: s.managerRating, onChange: (E) => v && c(u.id, s.id, "managerRating", E), disabled: !v }), b.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), b.jsx("textarea", { value: s.managerComments, onChange: (E) => v && c(u.id, s.id, "managerComments", E.target.value), disabled: !v, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${v ? "ef-bg-white ef-border-purple-200 focus:ef-ring-1 focus:ef-ring-purple-400" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Add your review..." })] })] }) : r === "second_manager" ? b.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-shadow-sm", children: [b.jsx("div", { className: "ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b", children: b.jsx("h3", { className: "ef-text-sm ef-font-semibold ef-text-gray-900", children: s.description }) }), b.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [b.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Employee Self Rating" }), b.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4", children: [b.jsxs("div", { children: [b.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), b.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-blue-100 ef-border ef-border-blue-200 ef-px-2 ef-py-1 ef-rounded", children: [b.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-blue-700", children: s.selfRating }), b.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), b.jsxs("div", { className: "ef-flex-1", children: [b.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), b.jsx("div", { className: "ef-bg-white ef-border ef-border-blue-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: s.selfComments || b.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), h && b.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-purple-50", children: [b.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Manager Review" }), b.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4", children: [b.jsxs("div", { children: [b.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), b.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-purple-100 ef-border ef-border-purple-200 ef-px-2 ef-py-1 ef-rounded", children: [b.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-purple-700", children: s.managerRating }), b.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), b.jsxs("div", { className: "ef-flex-1", children: [b.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), b.jsx("div", { className: "ef-bg-white ef-border ef-border-purple-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: s.managerComments || b.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), b.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-green-50", children: [b.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [b.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Second Manager Review" }), !x && b.jsx(m, {})] }), b.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), b.jsx(ma, { rating: s.secondManagerRating, onChange: (E) => x && c(u.id, s.id, "secondManagerRating", E), disabled: !x }), b.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), b.jsx("textarea", { value: s.secondManagerComment, onChange: (E) => x && c(u.id, s.id, "secondManagerComment", E.target.value), disabled: !x, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${x ? "ef-bg-white ef-border-green-200 focus:ef-ring-1 focus:ef-ring-green-400" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Add your review..." })] })] }) : null;
      };
      var J0 = ({ kra: u, appraisalMode: s, updateKRARating: r, employeeCanEdit: c, managerCanEdit: g, showManagerData: v, secondManagerCanEdit: h }) => {
        const x = () => b.jsxs("div", { className: "ef-absolute ef-top-2 ef-right-2 ef-flex ef-items-center ef-gap-1 ef-bg-gray-200 ef-text-gray-600 ef-text-xs ef-px-2 ef-py-1 ef-rounded-lg ef-shadow-sm", children: [b.jsx(Sr, { size: 12 }), "Locked"] });
        return s === "self" ? b.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-overflow-hidden ef-shadow-sm", children: [b.jsx("div", { className: "ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b ef-border-gray-200", children: b.jsx("h3", { className: "ef-text-sm ef-font-semibold ef-text-gray-900", children: u.title }) }), b.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [b.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [b.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Self Appraisal" }), !c && b.jsx(x, {})] }), b.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), b.jsx(ma, { rating: u.selfRating, onChange: (m) => c && r(u.id, "selfRating", m), disabled: !c }), b.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), b.jsx("textarea", { value: u.selfComments, onChange: (m) => c && r(u.id, "selfComments", m.target.value), disabled: !c, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${c ? "ef-bg-white ef-border-blue-200 focus:ef-ring-1 focus:ef-ring-blue-400" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Add your comments..." })] })] }) : s === "manager" ? b.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-overflow-hidden ef-shadow-sm", children: [b.jsx("div", { className: "ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b ef-border-gray-200", children: b.jsx("h3", { className: "ef-text-sm ef-font-semibold ef-text-gray-900", children: u.title }) }), b.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [b.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Employee Self Rating" }), b.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4 ef-mb-2", children: [b.jsxs("div", { children: [b.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), b.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-blue-100 ef-border ef-border-blue-200 ef-px-2 ef-py-1 ef-rounded", children: [b.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-blue-700", children: u.selfRating }), b.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), b.jsxs("div", { className: "ef-flex-1", children: [b.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), b.jsx("div", { className: "ef-bg-white ef-border ef-border-blue-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: u.selfComments || b.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), v && b.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-purple-50", children: [b.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [b.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Manager Review" }), !g && b.jsx(x, {})] }), b.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), b.jsx(ma, { rating: u.managerRating, onChange: (m) => g && r(u.id, "managerRating", m), disabled: !g }), b.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), b.jsx("textarea", { value: u.managerComments, onChange: (m) => g && r(u.id, "managerComments", m.target.value), disabled: !g, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${g ? "ef-bg-white ef-border-purple-200 focus:ef-ring-1 focus:ef-ring-purple-400" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Add your review..." })] })] }) : s === "second_manager" ? b.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-overflow-hidden ef-shadow-sm", children: [b.jsx("div", { className: "ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b ef-border-gray-200", children: b.jsx("h3", { className: "ef-text-sm ef-font-semibold ef-text-gray-900", children: u.title }) }), b.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [b.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Employee Self Rating" }), b.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4", children: [b.jsxs("div", { children: [b.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), b.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-blue-100 ef-border ef-border-blue-200 ef-px-2 ef-py-1 ef-rounded", children: [b.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-blue-700", children: u.selfRating }), b.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), b.jsxs("div", { className: "ef-flex-1", children: [b.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), b.jsx("div", { className: "ef-bg-white ef-border ef-border-blue-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: u.selfComments || b.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), v && b.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-purple-50", children: [b.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Manager Review" }), b.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4", children: [b.jsxs("div", { children: [b.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), b.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-purple-100 ef-border ef-border-purple-200 ef-px-2 ef-py-1 ef-rounded", children: [b.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-purple-700", children: u.managerRating }), b.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), b.jsxs("div", { className: "ef-flex-1", children: [b.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), b.jsx("div", { className: "ef-bg-white ef-border ef-border-purple-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: u.managerComments || b.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), b.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-green-50", children: [b.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [b.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Second Manager Review" }), !h && b.jsx(x, {})] }), b.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), b.jsx(ma, { rating: u.secondManagerRating, onChange: (m) => h && r(u.id, "secondManagerRating", m), disabled: !h }), b.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), b.jsx("textarea", { value: u.secondManagerComment, onChange: (m) => h && r(u.id, "secondManagerComment", m.target.value), disabled: !h, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${h ? "ef-bg-white ef-border-green-200 focus:ef-ring-1 focus:ef-ring-green-400" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Add your review..." })] })] }) : null;
      };
      var F0 = ({ kra: u, expanded: s, onToggle: r, appraisalMode: c, updateGoalRating: g, updateKRARating: v, employeeCanEdit: h, managerCanEdit: x, showManagerData: m, secondManagerCanEdit: d }) => b.jsxs("div", { className: "ef-border ef-rounded-lg", children: [b.jsxs("div", { onClick: r, className: "ef-flex ef-justify-between ef-items-center ef-p-4 ef-bg-gray-50 ef-cursor-pointer ef-hover:bg-gray-100", children: [b.jsxs("div", { className: "ef-flex-1", children: [b.jsxs("div", { className: "ef-flex ef-items-center ef-gap-3", children: [b.jsx("h3", { className: "ef-text-lg ef-font-semibold ef-text-gray-900", children: u.title }), b.jsxs("span", { className: "ef-px-3 ef-py-1 ef-bg-blue-100 ef-text-blue-700 ef-text-sm ef-rounded-full", children: [u.weightage, "% weightage"] })] }), b.jsx("p", { className: "ef-text-gray-600 ef-text-sm ef-mt-1", children: u.description })] }), s ? b.jsx(k0, {}) : b.jsx(Q0, {})] }), s && b.jsx("div", { className: "ef-p-4", children: u.goals.length > 0 ? u.goals.map((E) => b.jsxs("div", { className: "ef-mb-6 ef-last:mb-0 ef-pb-6 ef-last:pb-0 ef-border-b ef-last:border-b-0", children: [b.jsxs("div", { className: "ef-mb-3", children: [b.jsxs("p", { className: "ef-font-medium ef-text-gray-900", children: [E.description, b.jsxs("span", { className: "ef-inline-flex ef-items-center ef-px-3 ef-py-1 ef-bg-gradient-to-r ef-from-purple-500 ef-to-pink-500 ef-text-white ef-text-xs ef-font-semibold ef-rounded-full ef-shadow-sm ef-mx-3", children: [E.weightage, "% weightage"] })] }), b.jsx("div", { className: "ef-w-full ef-bg-gray-200 ef-rounded-full ef-h-3 ef-overflow-hidden ef-mt-2", children: b.jsx("div", { className: "ef-h-full ef-bg-gradient-to-r ef-from-green-400 ef-to-green-600 ef-transition-all ef-duration-500", style: { width: `${Math.min(E.progress, 100)}%` } }) }), b.jsxs("p", { className: "ef-text-sm ef-text-gray-600 ef-mt-1", children: ["Progress: ", Math.min(E.progress, 100), "%"] })] }), b.jsx(K0, { kra: u, goal: E, appraisalMode: c, updateGoalRating: g, secondManagerCanEdit: d, employeeCanEdit: h, managerCanEdit: x, showManagerData: m })] }, E.id)) : b.jsx(J0, { kra: u, appraisalMode: c, updateKRARating: v, employeeCanEdit: h, secondManagerCanEdit: d, managerCanEdit: x, showManagerData: m }) })] });
      var W0 = ({ kraList: u, expandedKRA: s, toggleKRA: r, appraisalMode: c, updateGoalRating: g, updateKRARating: v, employeeCanEdit: h, managerCanEdit: x, showManagerData: m, secondManagerCanEdit: d }) => b.jsx("div", { className: "ef-space-y-4", children: u.map((E) => b.jsx(F0, { kra: E, expanded: s[E.id], onToggle: () => r(E.id), appraisalMode: c, updateGoalRating: g, updateKRARating: v, employeeCanEdit: h, managerCanEdit: x, showManagerData: m, secondManagerCanEdit: d }, E.id)) });
      var $0 = ({ comp: u, appraisalMode: s, updateCompetency: r, employeeCanEdit: c, managerCanEdit: g, showManagerData: v, secondManagerCanEdit: h }) => {
        const x = () => b.jsxs("div", { className: "ef-absolute ef-top-2 ef-right-2 ef-flex ef-items-center ef-gap-1 ef-bg-gray-200 ef-text-gray-600 ef-text-xs ef-px-2 ef-py-1 ef-rounded-lg ef-shadow-sm", children: [b.jsx(Sr, { size: 12 }), "Locked"] });
        return b.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-overflow-hidden ef-shadow-sm", children: [b.jsxs("div", { className: "ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b ef-border-gray-200 ef-flex ef-items-center ef-justify-between", children: [b.jsx("h3", { className: "ef-text-sm ef-font-semibold ef-text-gray-900", children: u.name }), b.jsxs("span", { className: "ef-px-2 ef-py-1 ef-bg-purple-600 ef-text-white ef-text-xs ef-rounded-full ef-font-medium", children: [u.weightage, "%"] })] }), b.jsxs("div", { className: "ef-divide-y ef-divide-gray-100", children: [s === "self" && b.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [b.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [b.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Self Appraisal" }), !c && b.jsx(x, {})] }), b.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), b.jsx(ma, { rating: u.selfRating, onChange: (m) => c && r(u.id, "selfRating", m), disabled: !c }), b.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), b.jsx("textarea", { value: u.selfComments, onChange: (m) => c && r(u.id, "selfComments", m.target.value), disabled: !c, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${c ? "ef-bg-white ef-border-blue-200 focus:ef-ring-1 focus:ef-ring-blue-400 focus:ef-outline-none" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Share your thoughts..." })] }), s === "manager" && b.jsxs(b.Fragment, { children: [b.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [b.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Employee Self Rating" }), b.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4 ef-mb-2", children: [b.jsxs("div", { children: [b.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), b.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-blue-100 ef-border ef-border-blue-200 ef-px-2 ef-py-1 ef-rounded", children: [b.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-blue-700", children: u.selfRating }), b.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), b.jsxs("div", { className: "ef-flex-1", children: [b.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), b.jsx("div", { className: "ef-bg-white ef-border ef-border-blue-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: u.selfComments || b.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), v && b.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-purple-50", children: [b.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [b.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Manager Review" }), !g && b.jsx(x, {})] }), b.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), b.jsx(ma, { rating: u.managerRating, onChange: (m) => g && r(u.id, "managerRating", m), disabled: !g }), b.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), b.jsx("textarea", { value: u.managerComments, onChange: (m) => g && r(u.id, "managerComments", m.target.value), disabled: !g, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${g ? "ef-bg-white ef-border-purple-200 focus:ef-ring-1 focus:ef-ring-purple-400 focus:ef-outline-none" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Add your review..." })] })] }), s === "second_manager" && b.jsxs(b.Fragment, { children: [b.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [b.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Employee Self Rating" }), b.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4", children: [b.jsxs("div", { children: [b.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), b.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-blue-100 ef-border ef-border-blue-200 ef-px-2 ef-py-1 ef-rounded", children: [b.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-blue-700", children: u.selfRating }), b.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), b.jsxs("div", { className: "ef-flex-1", children: [b.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), b.jsx("div", { className: "ef-bg-white ef-border ef-border-blue-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: u.selfComments || b.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), v && b.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-purple-50", children: [b.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Manager Review" }), b.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4", children: [b.jsxs("div", { children: [b.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), b.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-purple-100 ef-border ef-border-purple-200 ef-px-2 ef-py-1 ef-rounded", children: [b.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-purple-700", children: u.managerRating }), b.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), b.jsxs("div", { className: "ef-flex-1", children: [b.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), b.jsx("div", { className: "ef-bg-white ef-border ef-border-purple-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: u.managerComments || b.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), b.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-green-50", children: [b.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [b.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Second Manager Review" }), !h && b.jsx(x, {})] }), b.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), b.jsx(ma, { rating: u.secondManagerRating, onChange: (m) => h && r(u.id, "secondManagerRating", m), disabled: !h }), b.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), b.jsx("textarea", { value: u.secondManagerComment, onChange: (m) => h && r(u.id, "secondManagerComment", m.target.value), disabled: !h, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${h ? "ef-bg-white ef-border-green-200 focus:ef-ring-1 focus:ef-ring-green-400 focus:ef-outline-none" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Add your review..." })] })] })] })] });
      };
      var P0 = ({ competencies: u, appraisalMode: s, selfAppraisalSubmitted: r, updateCompetency: c, employeeCanEdit: g, managerCanEdit: v, showManagerData: h, secondManagerCanEdit: x }) => b.jsx("div", { className: "ef-space-y-6", children: u.map((m) => b.jsx($0, { comp: m, appraisalMode: s, selfAppraisalSubmitted: r, updateCompetency: c, employeeCanEdit: g, managerCanEdit: v, showManagerData: h, secondManagerCanEdit: x }, m.id)) });
      var I0 = ({ question: u, appraisalMode: s, updateQuestion: r, index: c, employeeCanEdit: g, managerCanEdit: v, showManagerData: h, secondManagerCanEdit: x }) => {
        const m = () => b.jsx("div", { className: "ef-flex ef-items-center ef-gap-1 ef-text-gray-400 ef-text-xs", children: b.jsx(Sr, { size: 10 }) });
        return b.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-overflow-hidden ef-shadow-sm", children: [b.jsxs("div", { className: "ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b ef-border-gray-200 ef-flex ef-items-center gap-2", children: [b.jsx("span", { className: "ef-flex-shrink-0 ef-w-6 ef-h-6 ef-bg-gray-800 ef-rounded ef-text-white ef-text-xs ef-font-semibold ef-flex ef-items-center ef-justify-center", children: c + 1 }), b.jsx("p", { className: "ef-text-sm ef-font-medium ef-text-gray-900", children: u.question })] }), b.jsxs("div", { className: "ef-divide-y ef-divide-gray-100", children: [s === "self" && b.jsxs("div", { className: "ef-px-3 ef-py-2", children: [b.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-1", children: [b.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Your Answer" }), !g && b.jsx(m, {})] }), b.jsx("textarea", { value: u.selfAnswer, onChange: (d) => g && r(u.id, "selfAnswer", d.target.value), disabled: !g, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${g ? "ef-bg-white ef-border-blue-200 ef-focus:ring-1 ef-focus:ring-blue-400 ef-focus:outline-none" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 3, placeholder: "Enter your answer..." })] }), s === "manager" && b.jsxs(b.Fragment, { children: [b.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [b.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-1", children: "Employee's Answer" }), b.jsx("div", { className: "ef-bg-white ef-p-2 ef-rounded ef-text-xs ef-min-h-[60px] ef-border ef-border-blue-100", children: u.selfAnswer || b.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No answer provided" }) })] }), h && b.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-purple-50", children: [b.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-1", children: [b.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Manager's Comments" }), !v && b.jsx(m, {})] }), b.jsx("textarea", { value: u.managerComments, onChange: (d) => v && r(u.id, "managerComments", d.target.value), disabled: !v, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${v ? "ef-bg-white ef-border-purple-200 ef-focus:ring-1 focus:ring-purple-400 ef-focus:outline-none" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 3, placeholder: "Enter your feedback..." })] })] }), s === "second_manager" && b.jsxs(b.Fragment, { children: [b.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [b.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-1", children: "Employee's Answer" }), b.jsx("div", { className: "ef-bg-white ef-p-2 ef-rounded ef-text-xs ef-min-h-[60px] ef-border ef-border-blue-100", children: u.selfAnswer || b.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No answer provided" }) })] }), h && b.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-purple-50", children: [b.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-1", children: "Manager's Comments" }), b.jsx("div", { className: "ef-bg-white ef-p-2 ef-rounded ef-text-xs ef-min-h-[60px] ef-border ef-border-purple-100", children: u.managerComments || b.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments provided" }) })] }), b.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-green-50", children: [b.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-1", children: [b.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Second Manager's Comments" }), !x && b.jsx(m, {})] }), b.jsx("textarea", { value: u.secondManagerComment, onChange: (d) => x && r(u.id, "secondManagerComment", d.target.value), disabled: !x, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${x ? "ef-bg-white ef-border-green-200 ef-focus:ring-1 ef-focus:ring-green-400 ef-focus:outline-none" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 3, placeholder: "Enter your feedback..." })] })] })] })] });
      };
      var ey = ({ questions: u, appraisalMode: s, selfAppraisalSubmitted: r, updateQuestion: c, employeeCanEdit: g, managerCanEdit: v, showManagerData: h, secondManagerCanEdit: x }) => b.jsx("div", { className: "ef-space-y-6", children: u.map((m, d) => b.jsx(I0, { question: m, index: d, appraisalMode: s, selfAppraisalSubmitted: r, updateQuestion: c, employeeCanEdit: g, managerCanEdit: v, showManagerData: h, secondManagerCanEdit: x }, m.id)) });
      function ty(u, s, r, c = false) {
        const g = u.kra.reduce((w, C) => w + Number(C.weightage || 0), 0) || 1, v = u.competencies.reduce((w, C) => w + Number(C.weightage || 0), 0) || 1, h = (w, C, Z) => c ? (w + C + Z) / 3 : (w + C) / 2, x = u.kra.map((w) => {
          var ie;
          const C = (w.weightage || 0) / g;
          let Z = 0;
          if (((ie = w.goals) == null ? void 0 : ie.length) > 0) {
            const he = w.goals.reduce((_e, se) => _e + Number(se.weightage || 0), 0) || 1;
            Z = w.goals.reduce((_e, se) => {
              const ve = Number(se.selfRating || 0), Te = (se.weightage || 0) / he;
              return _e + Te * ve;
            }, 0);
          } else
            Z = Number(w.selfRating || 0);
          return C * Z;
        }).reduce((w, C) => w + C, 0), m = u.competencies.reduce((w, C) => {
          const Z = (C.weightage || 0) / v;
          return w + Z * Number(C.selfRating || 0);
        }, 0), d = x * (s / 100) + m * (r / 100), E = u.kra.map((w) => {
          var ie;
          const C = (w.weightage || 0) / g;
          let Z = 0;
          if (((ie = w.goals) == null ? void 0 : ie.length) > 0) {
            const he = w.goals.reduce((_e, se) => _e + Number(se.weightage || 0), 0) || 1;
            Z = w.goals.reduce((_e, se) => {
              const ve = h(Number(se.selfRating || 0), Number(se.managerRating || 0), Number(se.secondManagerRating || 0)), Te = (se.weightage || 0) / he;
              return _e + Te * ve;
            }, 0);
          } else
            Z = h(Number(w.selfRating || 0), Number(w.managerRating || 0), Number(w.secondManagerRating || 0));
          return C * Z;
        }).reduce((w, C) => w + C, 0), N = u.competencies.reduce((w, C) => {
          const Z = (C.weightage || 0) / v, ie = h(Number(C.selfRating || 0), Number(C.managerRating || 0), Number(C.secondManagerRating || 0));
          return w + Z * ie;
        }, 0), Y = E * (s / 100) + N * (r / 100);
        return { kraBlockScore: Number(E.toFixed(2)), competencyScore: Number(N.toFixed(2)), finalScore: Number(Y.toFixed(2)), employeeSelfScore: Number(d.toFixed(2)) };
      }
      var wp = () => {
        const [u, s] = We.useState("kra"), [r, c] = We.useState("self"), [g, v] = We.useState({}), [h, x] = We.useState({ employee: { name: "John Doe", designation: "Senior Developer", department: "Engineering", period: "Jan 2025 - Dec 2025" }, selfAppraisalSubmitted: true, kra: [{ id: 1, title: "Project Delivery", description: "Deliver assigned projects on time", weightage: 30, goals: [{ id: 1, description: "Complete 3 major projects", progress: 2, selfRating: 8, selfComments: "Completed 3 projects successfully", managerRating: 9, managerComments: "Excellent delivery", secondManagerRating: 3.4, secondManagerComment: "Excellent Work" }, { id: 2, description: "Maintain 95% on-time delivery", progress: 2, selfRating: 7, selfComments: "Achieved 90%", managerRating: 7, managerComments: "Slight delay", secondManagerRating: 3.4, secondManagerComment: "Excellent Work" }] }], competencies: [{ id: 1, name: "Technical Skills", description: "Proficiency in technologies", weightage: 25, selfRating: 8, selfComments: "Strong in React/Node", managerRating: 8, managerComments: "Very competent", secondManagerRating: 3.4, secondManagerComment: "Excellent Work" }], questions: [{ id: 1, question: "What are your key achievements?", selfAnswer: "Led migration project", managerComments: "Excellent ownership", secondManagerComment: "Excellent Work" }] });
        function m(J) {
          var B, V;
          J.workflow_state == "Self Appraisal" ? c("self") : J.workflow_state == "Manager Appraisal" ? c("manager") : c("second_manager");
          const ee = J.kra || [], de = J.kra_vs_goal || [], _ = J.goal_vs_task || [];
          return { employee: { name: J.employee_name, designation: J.designation, department: J.department, period: `${J.from_date} - ${J.to_date}` }, selfAppraisalSubmitted: J.self_appraisal_submitted || true, kra: ee.map((K, ce) => {
            const xe = de.filter((me) => me.kra === K.kra).map((me, ft) => {
              const Ze = _.filter((St) => St.goal === me.goal).map((St, pa) => ({ id: pa + 1, task_name: St.task, completed_percentage: St.completed_percentage, selfComments: St.employee_description, managerScore: St.manager_score, managerComments: St.manager_description, secondManagerScore: St.second_manager_score, secondManagerComment: St.second_manager_description }));
              return { id: ft + 1, description: me.goal_name, progress: me.progress, weightage: me.weightage, selfRating: me.employee_rating_number, selfComments: me.employee_description, managerRating: me.manager_rating_number, managerComments: me.management_description, secondManagerRating: me.second_manager_rating, secondManagerComment: me.second_manager_description, tasks: Ze };
            });
            return { id: ce + 1, title: K.kra, description: K.description || "", weightage: K.weightage, selfRating: K.employee_rating_number, selfComments: K.employee_description, managerRating: K.manager_rating_number, managerComments: K.management_description, secondManagerRating: K.second_manager_rating, secondManagerComment: K.second_manager_description, goals: xe };
          }) || [], competencies: ((B = J.competency) == null ? void 0 : B.map((K, ce) => ({ id: ce + 1, name: K.competency, description: K.description || "", weightage: K.weightage, selfRating: K.employee_rating_number, selfComments: K.employee_description, managerRating: K.manager_rating, managerComments: K.manager_description, secondManagerRating: K.second_manager_rating, secondManagerComment: K.second_manager_description }))) || [], questions: ((V = J.answer) == null ? void 0 : V.map((K, ce) => ({ id: ce + 1, question: K.question, selfAnswer: K.employee_ans_in_discriptive, managerComments: K.manager_comment, secondManagerComment: K.second_manager_description }))) || [] };
        }
        const d = () => {
          if (!X())
            return;
          const J = window.cur_frm;
          if (!(J != null && J.doc))
            return;
          const ee = J.doc, de = ty(h, ee.kra_percentage, ee.competency_percentage, !!ee.reports_to_second_user);
          ee.final_score = de.finalScore, ee.employee_score = de.employeeSelfScore, ee.kra.forEach((_, B) => {
            const V = h.kra.find((K) => K.id === B + 1);
            V && (De && (_.employee_rating_number = V.selfRating, _.employee_description = V.selfComments), ke && (_.manager_rating_number = V.managerRating, _.management_description = V.managerComments), Me && (_.second_manager_rating = V.secondManagerRating, _.second_manager_description = V.secondManagerComment), _.weightage = V.weightage);
          }), ee.kra_vs_goal.forEach((_) => {
            const B = h.kra.find((K) => K.title === _.kra);
            if (!B)
              return;
            const V = B.goals.find((K) => K.description === _.goal_name);
            V && (De && (_.employee_rating_number = V.selfRating, _.employee_description = V.selfComments), ke && (_.manager_rating_number = V.managerRating, _.management_description = V.managerComments), Me && (_.second_manager_rating = V.secondManagerRating, _.second_manager_description = V.secondManagerComment), _.progress = V.progress, _.weightage = V.weightage);
          }), ee.competency.forEach((_, B) => {
            const V = h.competencies.find((K) => K.id === B + 1);
            V && (De && (_.employee_rating_number = V.selfRating, _.employee_description = V.selfComments), ke && (_.manager_rating = V.managerRating, _.manager_description = V.managerComments), Me && (_.second_manager_rating = V.secondManagerRating, _.second_manager_description = V.secondManagerComment), _.weightage = V.weightage);
          }), ee.answer.forEach((_, B) => {
            const V = h.questions.find((K) => K.id === B + 1);
            V && (De && (_.employee_ans_in_discriptive = V.selfAnswer), ke && (_.manager_comment = V.managerComments), Me && (_.second_manager_description = V.secondManagerComment));
          }), ee.__unsaved = 1, J.dirty(), J.save().catch((_) => console.error(_));
        }, E = (J) => {
          v((ee) => Yt(Ve({}, ee), { [J]: !ee[J] }));
        }, N = (J, ee, de, _) => {
          x((B) => Yt(Ve({}, B), { kra: B.kra.map((V) => V.id === J ? Yt(Ve({}, V), { goals: V.goals.map((K) => K.id === ee ? Yt(Ve({}, K), { [de]: _ }) : K) }) : V) }));
        }, Y = (J, ee, de) => {
          x((_) => Yt(Ve({}, _), { kra: _.kra.map((B) => B.id === J ? Yt(Ve({}, B), { [ee]: de }) : B) }));
        }, w = (J, ee, de) => {
          x((_) => Yt(Ve({}, _), { competencies: _.competencies.map((B) => B.id === J ? Yt(Ve({}, B), { [ee]: de }) : B) }));
        }, C = (J, ee, de) => {
          x((_) => Yt(Ve({}, _), { questions: _.questions.map((B) => B.id === J ? Yt(Ve({}, B), { [ee]: de }) : B) }));
        }, Z = window.cur_frm;
        if (!(Z != null && Z.doc))
          return "Loading...";
        We.useEffect(() => {
          x(m(Z.doc));
        }, [Z == null ? void 0 : Z.doc]);
        const ie = frappe.session.user, he = Z.doc.employee_user_id, _e = Z.doc.reports_to_user_id, se = Z.doc.reports_to_second_user, ve = Z.doc.workflow_state, Te = ie === he, Ue = ie === _e, fe = ie === se, pt = (frappe.user_roles || []).includes("HR Manager") || ie === "Administrator", De = Te && ve === "Self Appraisal" && !pt, ke = Ue && ve === "Manager Appraisal", Me = fe && ve === "Second Manager Review", xt = Ue || fe || pt, X = () => {
          var de;
          const J = (de = window == null ? void 0 : window.cur_frm) == null ? void 0 : de.doc, ee = [];
          return De && (J.kra_rating_mandatory && h.kra.forEach((_) => {
            !_.goals.length && !_.selfRating && ee.push(`Self Rating missing in KRA: ${_.title}`), _.goals.forEach((B) => {
              B.selfRating || ee.push(`Self Rating missing in Goal: ${B.description}`);
            });
          }), J.kra_comment_mandatory && h.kra.forEach((_) => {
            !_.goals.length && !_.selfComments && ee.push(`Self Comment missing in KRA: ${_.title}`), _.goals.forEach((B) => {
              B.selfComments || ee.push(`Self Comment missing in Goal: ${B.description}`);
            });
          }), J.competency_rating_mandatory && h.competencies.forEach((_) => {
            _.selfRating || ee.push(`Self Rating missing in Competency: ${_.name}`);
          }), J.competency_comment_mandatory && h.competencies.forEach((_) => {
            _.selfComments || ee.push(`Self Comment missing in Competency: ${_.name}`);
          }), J.question_answer_mandatory && h.questions.forEach((_) => {
            _.selfAnswer || ee.push(`Answer missing for Question: ${_.question}`);
          })), ke && (J.manager_kra_rating_mandatory && h.kra.forEach((_) => {
            !_.goals.length && !_.managerRating && ee.push(`Manager Rating missing in KRA: ${_.title}`), _.goals.forEach((B) => {
              B.managerRating || ee.push(`Manager Rating missing in Goal: ${B.description}`);
            });
          }), J.manager_kra_comment_mandatory && h.kra.forEach((_) => {
            !_.goals.length && !_.managerComments && ee.push(`Manager Comment missing in KRA: ${_.title}`), _.goals.forEach((B) => {
              B.managerComments || ee.push(`Manager Comment missing in Goal: ${B.description}`);
            });
          }), J.manager_competency_rating_mandatory && h.competencies.forEach((_) => {
            _.managerRating || ee.push(`Manager Rating missing in Competency: ${_.name}`);
          }), J.manager_competency_comment_mandatory && h.competencies.forEach((_) => {
            _.managerComments || ee.push(`Manager Comment missing in Competency: ${_.name}`);
          }), J.manager_question_report_mandatory && h.questions.forEach((_) => {
            _.managerComments || ee.push(`Manager Comment missing for Question: ${_.question}`);
          })), ee.length > 0 ? (frappe.msgprint({ title: "Mandatory Fields Missing", indicator: "red", message: `<ul>${ee.map((_) => `<li>${_}</li>`).join("")}</ul>` }), false) : true;
        }, I = De || ke || Me;
        return b.jsx("div", { className: "ef-min-h-screen ef-bg-gray-50 ef-p-6", children: b.jsx("div", { className: "ef-max-w-7xl ef-mx-auto", children: b.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-shadow-sm", children: [b.jsx("div", { className: "ef-border-b", children: b.jsxs("div", { className: "ef-flex", children: [b.jsx("button", { onClick: () => s("kra"), className: `ef-px-6 ef-py-4 ef-font-semibold ${u === "kra" ? "ef-border-b-2 ef-border-blue-600 ef-text-blue-600" : "ef-text-gray-600"}`, children: "KRA vs Goals" }), b.jsx("button", { onClick: () => s("competency"), className: `ef-px-6 ef-py-4 ef-font-semibold ${u === "competency" ? "ef-border-b-2 ef-border-blue-600 ef-text-blue-600" : "ef-text-gray-600"}`, children: "Competencies" }), b.jsx("button", { onClick: () => s("questions"), className: `ef-px-6 ef-py-4 ef-font-semibold ${u === "questions" ? "ef-border-b-2 ef-border-blue-600 ef-text-blue-600" : "ef-text-gray-600"}`, children: "Questions" })] }) }), b.jsxs("div", { className: "ef-p-6", children: [u === "kra" && b.jsx(W0, { kraList: h.kra, expandedKRA: g, toggleKRA: E, appraisalMode: r, updateGoalRating: N, updateKRARating: Y, secondManagerCanEdit: Me, employeeCanEdit: De, managerCanEdit: ke, showManagerData: xt }), u === "competency" && b.jsx(P0, { competencies: h.competencies, appraisalMode: r, selfAppraisalSubmitted: h.selfAppraisalSubmitted, updateCompetency: w, secondManagerCanEdit: Me, employeeCanEdit: De, managerCanEdit: ke, showManagerData: xt }), u === "questions" && b.jsx(ey, { questions: h.questions, appraisalMode: r, selfAppraisalSubmitted: h.selfAppraisalSubmitted, updateQuestion: C, secondManagerCanEdit: Me, employeeCanEdit: De, managerCanEdit: ke, showManagerData: xt })] }), I && b.jsx("div", { className: "ef-flex ef-justify-end ef-px-6 ef-pb-6", children: b.jsx("button", { onClick: d, className: "ef-bg-blue-600 ef-text-white ef-px-6 ef-py-2 ef-rounded-lg ef-font-semibold hover:ef-bg-blue-700 ef-transition", children: "Save Appraisal" }) })] }) }) });
      };
      wp.component = "appraisal-rating";
      var km = Object.freeze(Object.defineProperty({ __proto__: null, AppraisalRating: wp, DemoComponent: sf }, Symbol.toStringTag, { value: "Module" }));
      var ny = Object.defineProperty;
      var ay = (u, s, r) => s in u ? ny(u, s, { enumerable: true, configurable: true, writable: true, value: r }) : u[s] = r;
      var cr = (u, s, r) => ay(u, typeof s != "symbol" ? s + "" : s, r);
      var ly = { stringify: (u) => u ? "true" : "false", parse: (u) => /^[ty1-9]/i.test(u) };
      var iy = { stringify: (u) => u.name, parse: (u, s, r) => {
        const c = (() => {
          if (typeof window < "u" && u in window)
            return window[u];
          if (typeof global < "u" && u in global)
            return global[u];
        })();
        return typeof c == "function" ? c.bind(r) : void 0;
      } };
      var sy = { stringify: (u) => JSON.stringify(u), parse: (u) => JSON.parse(u) };
      function uy(u) {
        return u.replace(/([a-z0-9])([A-Z])/g, (s, r, c) => `${r}-${c.toLowerCase()}`);
      }
      function Np(u) {
        return u.replace(/[-:]([a-z])/g, (s, r) => `${r.toUpperCase()}`);
      }
      var ry = { stringify: (u) => u.name, parse: (u, s, r) => {
        const c = (() => {
          const g = Np(s);
          if (typeof r < "u" && g in r.container)
            return r.container[g];
        })();
        return typeof c == "function" ? c.bind(r) : void 0;
      } };
      var cy = { stringify: (u) => `${u}`, parse: (u) => parseFloat(u) };
      var oy = { stringify: (u) => u, parse: (u) => u };
      var Uo = { string: oy, number: cy, boolean: ly, function: iy, method: ry, json: sy };
      var ws = Symbol.for("r2wc.render");
      var or = Symbol.for("r2wc.connected");
      var Tl = Symbol.for("r2wc.context");
      var $t = Symbol.for("r2wc.props");
      function fy(u, s, r) {
        var c, g, v;
        s.props || (s.props = u.propTypes ? Object.keys(u.propTypes) : []), s.events || (s.events = []);
        const h = Array.isArray(s.props) ? s.props.slice() : Object.keys(s.props), x = Array.isArray(s.events) ? s.events.slice() : Object.keys(s.events), m = {}, d = {}, E = {}, N = {};
        for (const w of h) {
          m[w] = Array.isArray(s.props) ? "string" : s.props[w];
          const C = uy(w);
          E[w] = C, N[C] = w;
        }
        for (const w of x)
          d[w] = Array.isArray(s.events) ? {} : s.events[w];
        class Y extends HTMLElement {
          constructor() {
            super(), cr(this, v, true), cr(this, g), cr(this, c, {}), cr(this, "container"), s.shadow ? this.container = this.attachShadow({ mode: s.shadow }) : this.container = this, this[$t].container = this.container;
            for (const C of h) {
              const Z = E[C], ie = this.getAttribute(Z), he = m[C], _e = he ? Uo[he] : null;
              if (he === "method") {
                const se = Np(Z);
                Object.defineProperty(this[$t].container, se, { enumerable: true, configurable: true, get() {
                  return this[$t][se];
                }, set(ve) {
                  this[$t][se] = ve, this[ws]();
                } }), this[$t][C] = _e.parse(ie, Z, this);
              }
              _e != null && _e.parse && ie && (this[$t][C] = _e.parse(ie, Z, this));
            }
            for (const C of x)
              this[$t][C] = (Z) => {
                const ie = C.replace(/^on/, "").toLowerCase();
                this.dispatchEvent(new CustomEvent(ie, Ve({ detail: Z }, d[C])));
              };
          }
          static get observedAttributes() {
            return Object.keys(N);
          }
          connectedCallback() {
            this[or] = true, this[ws]();
          }
          disconnectedCallback() {
            this[or] = false, this[Tl] && r.unmount(this[Tl]), delete this[Tl];
          }
          attributeChangedCallback(C, Z, ie) {
            const he = N[C], _e = m[he], se = _e ? Uo[_e] : null;
            he in m && se != null && se.parse && ie && (this[$t][he] = se.parse(ie, C, this), this[ws]());
          }
          [(v = or, g = Tl, c = $t, ws)]() {
            this[or] && (this[Tl] ? r.update(this[Tl], this[$t]) : this[Tl] = r.mount(this.container, u, this[$t]));
          }
        }
        for (const w of h) {
          const C = E[w], Z = m[w];
          Object.defineProperty(Y.prototype, w, { enumerable: true, configurable: true, get() {
            return this[$t][w];
          }, set(ie) {
            this[$t][w] = ie;
            const he = Z ? Uo[Z] : null;
            if (he != null && he.stringify) {
              const _e = he.stringify(ie, C, this);
              this.getAttribute(C) !== _e && this.setAttribute(C, _e);
            } else
              this[ws]();
          } });
        }
        return Y;
      }
      function dy(u, s, r, c = {}) {
        function g(x, m, d) {
          const E = s.createElement(m, d);
          if ("createRoot" in r) {
            const N = r.createRoot(x);
            return N.render(E), { container: x, root: N, ReactComponent: m };
          }
          if ("render" in r)
            return r.render(E, x), { container: x, ReactComponent: m };
          throw new Error("Invalid ReactDOM instance provided.");
        }
        function v({ container: x, root: m, ReactComponent: d }, E) {
          const N = s.createElement(d, E);
          if (m) {
            m.render(N);
            return;
          }
          if ("render" in r) {
            r.render(N, x);
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
        return fy(u, c, { mount: g, unmount: h, update: v });
      }
      var Do = { exports: {} };
      var Ns = {};
      var Bo = { exports: {} };
      var qo = {};
      var Zm;
      function hy() {
        return Zm || (Zm = 1, function(u) {
          function s(X, I) {
            var J = X.length;
            X.push(I);
            e:
              for (; 0 < J; ) {
                var ee = J - 1 >>> 1, de = X[ee];
                if (0 < g(de, I))
                  X[ee] = I, X[J] = de, J = ee;
                else
                  break e;
              }
          }
          function r(X) {
            return X.length === 0 ? null : X[0];
          }
          function c(X) {
            if (X.length === 0)
              return null;
            var I = X[0], J = X.pop();
            if (J !== I) {
              X[0] = J;
              e:
                for (var ee = 0, de = X.length, _ = de >>> 1; ee < _; ) {
                  var B = 2 * (ee + 1) - 1, V = X[B], K = B + 1, ce = X[K];
                  if (0 > g(V, J))
                    K < de && 0 > g(ce, V) ? (X[ee] = ce, X[K] = J, ee = K) : (X[ee] = V, X[B] = J, ee = B);
                  else if (K < de && 0 > g(ce, J))
                    X[ee] = ce, X[K] = J, ee = K;
                  else
                    break e;
                }
            }
            return I;
          }
          function g(X, I) {
            var J = X.sortIndex - I.sortIndex;
            return J !== 0 ? J : X.id - I.id;
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
          var m = [], d = [], E = 1, N = null, Y = 3, w = false, C = false, Z = false, ie = false, he = typeof setTimeout == "function" ? setTimeout : null, _e = typeof clearTimeout == "function" ? clearTimeout : null, se = typeof setImmediate != "undefined" ? setImmediate : null;
          function ve(X) {
            for (var I = r(d); I !== null; ) {
              if (I.callback === null)
                c(d);
              else if (I.startTime <= X)
                c(d), I.sortIndex = I.expirationTime, s(m, I);
              else
                break;
              I = r(d);
            }
          }
          function Te(X) {
            if (Z = false, ve(X), !C)
              if (r(m) !== null)
                C = true, Ue || (Ue = true, De());
              else {
                var I = r(d);
                I !== null && xt(Te, I.startTime - X);
              }
          }
          var Ue = false, fe = -1, lt = 5, wt = -1;
          function Pt() {
            return ie ? true : !(u.unstable_now() - wt < lt);
          }
          function pt() {
            if (ie = false, Ue) {
              var X = u.unstable_now();
              wt = X;
              var I = true;
              try {
                e: {
                  C = false, Z && (Z = false, _e(fe), fe = -1), w = true;
                  var J = Y;
                  try {
                    t: {
                      for (ve(X), N = r(m); N !== null && !(N.expirationTime > X && Pt()); ) {
                        var ee = N.callback;
                        if (typeof ee == "function") {
                          N.callback = null, Y = N.priorityLevel;
                          var de = ee(N.expirationTime <= X);
                          if (X = u.unstable_now(), typeof de == "function") {
                            N.callback = de, ve(X), I = true;
                            break t;
                          }
                          N === r(m) && c(m), ve(X);
                        } else
                          c(m);
                        N = r(m);
                      }
                      if (N !== null)
                        I = true;
                      else {
                        var _ = r(d);
                        _ !== null && xt(Te, _.startTime - X), I = false;
                      }
                    }
                    break e;
                  } finally {
                    N = null, Y = J, w = false;
                  }
                  I = void 0;
                }
              } finally {
                I ? De() : Ue = false;
              }
            }
          }
          var De;
          if (typeof se == "function")
            De = function() {
              se(pt);
            };
          else if (typeof MessageChannel != "undefined") {
            var ke = new MessageChannel(), Me = ke.port2;
            ke.port1.onmessage = pt, De = function() {
              Me.postMessage(null);
            };
          } else
            De = function() {
              he(pt, 0);
            };
          function xt(X, I) {
            fe = he(function() {
              X(u.unstable_now());
            }, I);
          }
          u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(X) {
            X.callback = null;
          }, u.unstable_forceFrameRate = function(X) {
            0 > X || 125 < X ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : lt = 0 < X ? Math.floor(1e3 / X) : 5;
          }, u.unstable_getCurrentPriorityLevel = function() {
            return Y;
          }, u.unstable_next = function(X) {
            switch (Y) {
              case 1:
              case 2:
              case 3:
                var I = 3;
                break;
              default:
                I = Y;
            }
            var J = Y;
            Y = I;
            try {
              return X();
            } finally {
              Y = J;
            }
          }, u.unstable_requestPaint = function() {
            ie = true;
          }, u.unstable_runWithPriority = function(X, I) {
            switch (X) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                X = 3;
            }
            var J = Y;
            Y = X;
            try {
              return I();
            } finally {
              Y = J;
            }
          }, u.unstable_scheduleCallback = function(X, I, J) {
            var ee = u.unstable_now();
            switch (typeof J == "object" && J !== null ? (J = J.delay, J = typeof J == "number" && 0 < J ? ee + J : ee) : J = ee, X) {
              case 1:
                var de = -1;
                break;
              case 2:
                de = 250;
                break;
              case 5:
                de = 1073741823;
                break;
              case 4:
                de = 1e4;
                break;
              default:
                de = 5e3;
            }
            return de = J + de, X = { id: E++, callback: I, priorityLevel: X, startTime: J, expirationTime: de, sortIndex: -1 }, J > ee ? (X.sortIndex = J, s(d, X), r(m) === null && X === r(d) && (Z ? (_e(fe), fe = -1) : Z = true, xt(Te, J - ee))) : (X.sortIndex = de, s(m, X), C || w || (C = true, Ue || (Ue = true, De()))), X;
          }, u.unstable_shouldYield = Pt, u.unstable_wrapCallback = function(X) {
            var I = Y;
            return function() {
              var J = Y;
              Y = I;
              try {
                return X.apply(this, arguments);
              } finally {
                Y = J;
              }
            };
          };
        }(qo)), qo;
      }
      var Km;
      function my() {
        return Km || (Km = 1, Bo.exports = hy()), Bo.exports;
      }
      var Ho = { exports: {} };
      var jt = {};
      var Jm;
      function py() {
        if (Jm)
          return jt;
        Jm = 1;
        var u = lf();
        function s(m) {
          var d = "https://react.dev/errors/" + m;
          if (1 < arguments.length) {
            d += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var E = 2; E < arguments.length; E++)
              d += "&args[]=" + encodeURIComponent(arguments[E]);
          }
          return "Minified React error #" + m + "; visit " + d + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        function r() {
        }
        var c = { d: { f: r, r: function() {
          throw Error(s(522));
        }, D: r, C: r, L: r, m: r, X: r, S: r, M: r }, p: 0, findDOMNode: null }, g = Symbol.for("react.portal");
        function v(m, d, E) {
          var N = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
          return { $$typeof: g, key: N == null ? null : "" + N, children: m, containerInfo: d, implementation: E };
        }
        var h = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function x(m, d) {
          if (m === "font")
            return "";
          if (typeof d == "string")
            return d === "use-credentials" ? d : "";
        }
        return jt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, jt.createPortal = function(m, d) {
          var E = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
          if (!d || d.nodeType !== 1 && d.nodeType !== 9 && d.nodeType !== 11)
            throw Error(s(299));
          return v(m, d, null, E);
        }, jt.flushSync = function(m) {
          var d = h.T, E = c.p;
          try {
            if (h.T = null, c.p = 2, m)
              return m();
          } finally {
            h.T = d, c.p = E, c.d.f();
          }
        }, jt.preconnect = function(m, d) {
          typeof m == "string" && (d ? (d = d.crossOrigin, d = typeof d == "string" ? d === "use-credentials" ? d : "" : void 0) : d = null, c.d.C(m, d));
        }, jt.prefetchDNS = function(m) {
          typeof m == "string" && c.d.D(m);
        }, jt.preinit = function(m, d) {
          if (typeof m == "string" && d && typeof d.as == "string") {
            var E = d.as, N = x(E, d.crossOrigin), Y = typeof d.integrity == "string" ? d.integrity : void 0, w = typeof d.fetchPriority == "string" ? d.fetchPriority : void 0;
            E === "style" ? c.d.S(m, typeof d.precedence == "string" ? d.precedence : void 0, { crossOrigin: N, integrity: Y, fetchPriority: w }) : E === "script" && c.d.X(m, { crossOrigin: N, integrity: Y, fetchPriority: w, nonce: typeof d.nonce == "string" ? d.nonce : void 0 });
          }
        }, jt.preinitModule = function(m, d) {
          if (typeof m == "string")
            if (typeof d == "object" && d !== null) {
              if (d.as == null || d.as === "script") {
                var E = x(d.as, d.crossOrigin);
                c.d.M(m, { crossOrigin: E, integrity: typeof d.integrity == "string" ? d.integrity : void 0, nonce: typeof d.nonce == "string" ? d.nonce : void 0 });
              }
            } else
              d == null && c.d.M(m);
        }, jt.preload = function(m, d) {
          if (typeof m == "string" && typeof d == "object" && d !== null && typeof d.as == "string") {
            var E = d.as, N = x(E, d.crossOrigin);
            c.d.L(m, E, { crossOrigin: N, integrity: typeof d.integrity == "string" ? d.integrity : void 0, nonce: typeof d.nonce == "string" ? d.nonce : void 0, type: typeof d.type == "string" ? d.type : void 0, fetchPriority: typeof d.fetchPriority == "string" ? d.fetchPriority : void 0, referrerPolicy: typeof d.referrerPolicy == "string" ? d.referrerPolicy : void 0, imageSrcSet: typeof d.imageSrcSet == "string" ? d.imageSrcSet : void 0, imageSizes: typeof d.imageSizes == "string" ? d.imageSizes : void 0, media: typeof d.media == "string" ? d.media : void 0 });
          }
        }, jt.preloadModule = function(m, d) {
          if (typeof m == "string")
            if (d) {
              var E = x(d.as, d.crossOrigin);
              c.d.m(m, { as: typeof d.as == "string" && d.as !== "script" ? d.as : void 0, crossOrigin: E, integrity: typeof d.integrity == "string" ? d.integrity : void 0 });
            } else
              c.d.m(m);
        }, jt.requestFormReset = function(m) {
          c.d.r(m);
        }, jt.unstable_batchedUpdates = function(m, d) {
          return m(d);
        }, jt.useFormState = function(m, d, E) {
          return h.H.useFormState(m, d, E);
        }, jt.useFormStatus = function() {
          return h.H.useHostTransitionStatus();
        }, jt.version = "19.2.0", jt;
      }
      var Fm;
      function gy() {
        if (Fm)
          return Ho.exports;
        Fm = 1;
        function u() {
          if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
            } catch (s) {
              console.error(s);
            }
        }
        return u(), Ho.exports = py(), Ho.exports;
      }
      var Wm;
      function yy() {
        if (Wm)
          return Ns;
        Wm = 1;
        var u = my(), s = lf(), r = gy();
        function c(e) {
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
              for (var o = false, y = l.child; y; ) {
                if (y === n) {
                  o = true, n = l, a = i;
                  break;
                }
                if (y === a) {
                  o = true, a = l, n = i;
                  break;
                }
                y = y.sibling;
              }
              if (!o) {
                for (y = i.child; y; ) {
                  if (y === n) {
                    o = true, n = i, a = l;
                    break;
                  }
                  if (y === a) {
                    o = true, a = i, n = l;
                    break;
                  }
                  y = y.sibling;
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
        var N = Object.assign, Y = Symbol.for("react.element"), w = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), Z = Symbol.for("react.fragment"), ie = Symbol.for("react.strict_mode"), he = Symbol.for("react.profiler"), _e = Symbol.for("react.consumer"), se = Symbol.for("react.context"), ve = Symbol.for("react.forward_ref"), Te = Symbol.for("react.suspense"), Ue = Symbol.for("react.suspense_list"), fe = Symbol.for("react.memo"), lt = Symbol.for("react.lazy"), wt = Symbol.for("react.activity"), Pt = Symbol.for("react.memo_cache_sentinel"), pt = Symbol.iterator;
        function De(e) {
          return e === null || typeof e != "object" ? null : (e = pt && e[pt] || e["@@iterator"], typeof e == "function" ? e : null);
        }
        var ke = Symbol.for("react.client.reference");
        function Me(e) {
          if (e == null)
            return null;
          if (typeof e == "function")
            return e.$$typeof === ke ? null : e.displayName || e.name || null;
          if (typeof e == "string")
            return e;
          switch (e) {
            case Z:
              return "Fragment";
            case he:
              return "Profiler";
            case ie:
              return "StrictMode";
            case Te:
              return "Suspense";
            case Ue:
              return "SuspenseList";
            case wt:
              return "Activity";
          }
          if (typeof e == "object")
            switch (e.$$typeof) {
              case C:
                return "Portal";
              case se:
                return e.displayName || "Context";
              case _e:
                return (e._context.displayName || "Context") + ".Consumer";
              case ve:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
              case fe:
                return t = e.displayName || null, t !== null ? t : Me(e.type) || "Memo";
              case lt:
                t = e._payload, e = e._init;
                try {
                  return Me(e(t));
                } catch (n) {
                }
            }
          return null;
        }
        var xt = Array.isArray, X = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = { pending: false, data: null, method: null, action: null }, ee = [], de = -1;
        function _(e) {
          return { current: e };
        }
        function B(e) {
          0 > de || (e.current = ee[de], ee[de] = null, de--);
        }
        function V(e, t) {
          de++, ee[de] = e.current, e.current = t;
        }
        var K = _(null), ce = _(null), xe = _(null), me = _(null);
        function ft(e, t) {
          switch (V(xe, t), V(ce, e), V(K, null), t.nodeType) {
            case 9:
            case 11:
              e = (e = t.documentElement) && (e = e.namespaceURI) ? im(e) : 0;
              break;
            default:
              if (e = t.tagName, t = t.namespaceURI)
                t = im(t), e = sm(t, e);
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
          B(K), V(K, e);
        }
        function Ze() {
          B(K), B(ce), B(xe);
        }
        function St(e) {
          e.memoizedState !== null && V(me, e);
          var t = K.current, n = sm(t, e.type);
          t !== n && (V(ce, e), V(K, n));
        }
        function pa(e) {
          ce.current === e && (B(K), B(ce)), me.current === e && (B(me), Ss._currentValue = J);
        }
        var wl, zs;
        function Nn(e) {
          if (wl === void 0)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              wl = t && t[1] || "", zs = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
            }
          return `
` + wl + e + zs;
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
            var i = a.DetermineComponentFrameRoot(), o = i[0], y = i[1];
            if (o && y) {
              var A = o.split(`
`), D = y.split(`
`);
              for (l = a = 0; a < A.length && !A[a].includes("DetermineComponentFrameRoot"); )
                a++;
              for (; l < D.length && !D[l].includes("DetermineComponentFrameRoot"); )
                l++;
              if (a === A.length || l === D.length)
                for (a = A.length - 1, l = D.length - 1; 1 <= a && 0 <= l && A[a] !== D[l]; )
                  l--;
              for (; 1 <= a && 0 <= l; a--, l--)
                if (A[a] !== D[l]) {
                  if (a !== 1 || l !== 1)
                    do
                      if (a--, l--, 0 > l || A[a] !== D[l]) {
                        var G = `
` + A[a].replace(" at new ", " at ");
                        return e.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", e.displayName)), G;
                      }
                    while (1 <= a && 0 <= l);
                  break;
                }
            }
          } finally {
            Ti = false, Error.prepareStackTrace = n;
          }
          return (n = e ? e.displayName || e.name : "") ? Nn(n) : "";
        }
        function Er(e, t) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              return Nn(e.type);
            case 16:
              return Nn("Lazy");
            case 13:
              return e.child !== t && t !== null ? Nn("Suspense Fallback") : Nn("Suspense");
            case 19:
              return Nn("SuspenseList");
            case 0:
            case 15:
              return Ei(e.type, false);
            case 11:
              return Ei(e.type.render, false);
            case 1:
              return Ei(e.type, true);
            case 31:
              return Nn("Activity");
            default:
              return "";
          }
        }
        function Ms(e) {
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
        var Ai = Object.prototype.hasOwnProperty, wi = u.unstable_scheduleCallback, Ni = u.unstable_cancelCallback, Ar = u.unstable_shouldYield, Us = u.unstable_requestPaint, Ot = u.unstable_now, H = u.unstable_getCurrentPriorityLevel, pe = u.unstable_ImmediatePriority, ji = u.unstable_UserBlockingPriority, Ja = u.unstable_NormalPriority, wr = u.unstable_LowPriority, Nl = u.unstable_IdlePriority, Ds = u.log, Bs = u.unstable_setDisableYieldValue, Fa = null, Rt = null;
        function Gt(e) {
          if (typeof Ds == "function" && Bs(e), Rt && typeof Rt.setStrictMode == "function")
            try {
              Rt.setStrictMode(Fa, e);
            } catch (t) {
            }
        }
        var Nt = Math.clz32 ? Math.clz32 : Nr, Oi = Math.log, qs = Math.LN2;
        function Nr(e) {
          return e >>>= 0, e === 0 ? 32 : 31 - (Oi(e) / qs | 0) | 0;
        }
        var Wa = 256, jl = 262144, $a = 4194304;
        function jn(e) {
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
        function Ol(e, t, n) {
          var a = e.pendingLanes;
          if (a === 0)
            return 0;
          var l = 0, i = e.suspendedLanes, o = e.pingedLanes;
          e = e.warmLanes;
          var y = a & 134217727;
          return y !== 0 ? (a = y & ~i, a !== 0 ? l = jn(a) : (o &= y, o !== 0 ? l = jn(o) : n || (n = y & ~e, n !== 0 && (l = jn(n))))) : (y = a & ~i, y !== 0 ? l = jn(y) : o !== 0 ? l = jn(o) : n || (n = a & ~e, n !== 0 && (l = jn(n)))), l === 0 ? 0 : t !== 0 && t !== l && (t & i) === 0 && (i = l & -l, n = t & -t, i >= n || i === 32 && (n & 4194048) !== 0) ? t : l;
        }
        function Pa(e, t) {
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
        function Hs() {
          var e = $a;
          return $a <<= 1, ($a & 62914560) === 0 && ($a = 4194304), e;
        }
        function Ia(e) {
          for (var t = [], n = 0; 31 > n; n++)
            t.push(e);
          return t;
        }
        function Gn(e, t) {
          e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
        }
        function Or(e, t, n, a, l, i) {
          var o = e.pendingLanes;
          e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
          var y = e.entanglements, A = e.expirationTimes, D = e.hiddenUpdates;
          for (n = o & ~n; 0 < n; ) {
            var G = 31 - Nt(n), k = 1 << G;
            y[G] = 0, A[G] = -1;
            var q = D[G];
            if (q !== null)
              for (D[G] = null, G = 0; G < q.length; G++) {
                var L = q[G];
                L !== null && (L.lane &= -536870913);
              }
            n &= ~k;
          }
          a !== 0 && Ls(e, a, 0), i !== 0 && l === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(o & ~t));
        }
        function Ls(e, t, n) {
          e.pendingLanes |= t, e.suspendedLanes &= ~t;
          var a = 31 - Nt(t);
          e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | n & 261930;
        }
        function Ys(e, t) {
          var n = e.entangledLanes |= t;
          for (e = e.entanglements; n; ) {
            var a = 31 - Nt(n), l = 1 << a;
            l & t | e[a] & t && (e[a] |= t), n &= ~l;
          }
        }
        function Xs(e, t) {
          var n = t & -t;
          return n = (n & 42) !== 0 ? 1 : it(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
        }
        function it(e) {
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
        function Ri(e) {
          return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
        }
        function Gs() {
          var e = I.p;
          return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Om(e.type));
        }
        function Qs(e, t) {
          var n = I.p;
          try {
            return I.p = e, t();
          } finally {
            I.p = n;
          }
        }
        var gn = Math.random().toString(36).slice(2), dt = "__reactFiber$" + gn, gt = "__reactProps$" + gn, On = "__reactContainer$" + gn, Ci = "__reactEvents$" + gn, Rr = "__reactListeners$" + gn, Vs = "__reactHandles$" + gn, ga = "__reactResources$" + gn, Rn = "__reactMarker$" + gn;
        function zi(e) {
          delete e[dt], delete e[gt], delete e[Ci], delete e[Rr], delete e[Vs];
        }
        function ya(e) {
          var t = e[dt];
          if (t)
            return t;
          for (var n = e.parentNode; n; ) {
            if (t = n[On] || n[dt]) {
              if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = hm(e); e !== null; ) {
                  if (n = e[dt])
                    return n;
                  e = hm(e);
                }
              return t;
            }
            e = n, n = e.parentNode;
          }
          return null;
        }
        function Cn(e) {
          if (e = e[dt] || e[On]) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
              return e;
          }
          return null;
        }
        function el(e) {
          var t = e.tag;
          if (t === 5 || t === 26 || t === 27 || t === 6)
            return e.stateNode;
          throw Error(c(33));
        }
        function ba(e) {
          var t = e[ga];
          return t || (t = e[ga] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
        }
        function Pe(e) {
          e[Rn] = true;
        }
        var Mt = /* @__PURE__ */ new Set(), Rl = {};
        function zn(e, t) {
          Qt(e, t), Qt(e + "Capture", t);
        }
        function Qt(e, t) {
          for (Rl[e] = t, e = 0; e < t.length; e++)
            Mt.add(t[e]);
        }
        var ks = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Zs = {}, Ks = {};
        function Cr(e) {
          return Ai.call(Ks, e) ? true : Ai.call(Zs, e) ? false : ks.test(e) ? Ks[e] = true : (Zs[e] = true, false);
        }
        function Qn(e, t, n) {
          if (Cr(t))
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
        function tl(e, t, n) {
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
        function Ut(e) {
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
        function Js(e) {
          var t = e.type;
          return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
        }
        function zr(e, t, n) {
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
            var t = Js(e) ? "checked" : "value";
            e._valueTracker = zr(e, t, "" + e[t]);
          }
        }
        function Ui(e) {
          if (!e)
            return false;
          var t = e._valueTracker;
          if (!t)
            return true;
          var n = t.getValue(), a = "";
          return e && (a = Js(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== n ? (t.setValue(e), true) : false;
        }
        function nl(e) {
          if (e = e || (typeof document != "undefined" ? document : void 0), typeof e == "undefined")
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        var Vn = /[\n"\\]/g;
        function Ct(e) {
          return e.replace(Vn, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " ";
          });
        }
        function Di(e, t, n, a, l, i, o, y) {
          e.name = "", o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.type = o : e.removeAttribute("type"), t != null ? o === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Ut(t)) : e.value !== "" + Ut(t) && (e.value = "" + Ut(t)) : o !== "submit" && o !== "reset" || e.removeAttribute("value"), t != null ? Bi(e, o, Ut(t)) : n != null ? Bi(e, o, Ut(n)) : a != null && e.removeAttribute("value"), l == null && i != null && (e.defaultChecked = !!i), l != null && (e.checked = l && typeof l != "function" && typeof l != "symbol"), y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? e.name = "" + Ut(y) : e.removeAttribute("name");
        }
        function Fs(e, t, n, a, l, i, o, y) {
          if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || n != null) {
            if (!(i !== "submit" && i !== "reset" || t != null)) {
              Mi(e);
              return;
            }
            n = n != null ? "" + Ut(n) : "", t = t != null ? "" + Ut(t) : n, y || t === e.value || (e.value = t), e.defaultValue = t;
          }
          a = a != null ? a : l, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = y ? e.checked : !!a, e.defaultChecked = !!a, o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (e.name = o), Mi(e);
        }
        function Bi(e, t, n) {
          t === "number" && nl(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
        }
        function va(e, t, n, a) {
          if (e = e.options, t) {
            t = {};
            for (var l = 0; l < n.length; l++)
              t["$" + n[l]] = true;
            for (n = 0; n < e.length; n++)
              l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && a && (e[n].defaultSelected = true);
          } else {
            for (n = "" + Ut(n), t = null, l = 0; l < e.length; l++) {
              if (e[l].value === n) {
                e[l].selected = true, a && (e[l].defaultSelected = true);
                return;
              }
              t !== null || e[l].disabled || (t = e[l]);
            }
            t !== null && (t.selected = true);
          }
        }
        function Ws(e, t, n) {
          if (t != null && (t = "" + Ut(t), t !== e.value && (e.value = t), n == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return;
          }
          e.defaultValue = n != null ? "" + Ut(n) : "";
        }
        function qi(e, t, n, a) {
          if (t == null) {
            if (a != null) {
              if (n != null)
                throw Error(c(92));
              if (xt(a)) {
                if (1 < a.length)
                  throw Error(c(93));
                a = a[0];
              }
              n = a;
            }
            n == null && (n = ""), t = n;
          }
          n = Ut(t), e.defaultValue = n, a = e.textContent, a === n && a !== "" && a !== null && (e.value = a), Mi(e);
        }
        function kn(e, t) {
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
        function $s(e, t, n) {
          var a = t.indexOf("--") === 0;
          n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Cl.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
        }
        function Hi(e, t, n) {
          if (t != null && typeof t != "object")
            throw Error(c(62));
          if (e = e.style, n != null) {
            for (var a in n)
              !n.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
            for (var l in t)
              a = t[l], t.hasOwnProperty(l) && n[l] !== a && $s(e, l, a);
          } else
            for (var i in t)
              t.hasOwnProperty(i) && $s(e, i, t[i]);
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
        var Ps = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), Mr = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function Ml(e) {
          return Mr.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
        }
        function en() {
        }
        var al = null;
        function Ul(e) {
          return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
        }
        var xa = null, Zn = null;
        function Dl(e) {
          var t = Cn(e);
          if (t && (e = t.stateNode)) {
            var n = e[gt] || null;
            e:
              switch (e = t.stateNode, t.type) {
                case "input":
                  if (Di(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
                    for (n = e; n.parentNode; )
                      n = n.parentNode;
                    for (n = n.querySelectorAll('input[name="' + Ct("" + t) + '"][type="radio"]'), t = 0; t < n.length; t++) {
                      var a = n[t];
                      if (a !== e && a.form === e.form) {
                        var l = a[gt] || null;
                        if (!l)
                          throw Error(c(90));
                        Di(a, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name);
                      }
                    }
                    for (t = 0; t < n.length; t++)
                      a = n[t], a.form === e.form && Ui(a);
                  }
                  break e;
                case "textarea":
                  Ws(e, n.value, n.defaultValue);
                  break e;
                case "select":
                  t = n.value, t != null && va(e, !!n.multiple, t, false);
              }
          }
        }
        var Bl = false;
        function Li(e, t, n) {
          if (Bl)
            return e(t, n);
          Bl = true;
          try {
            var a = e(t);
            return a;
          } finally {
            if (Bl = false, (xa !== null || Zn !== null) && (Yu(), xa && (t = xa, e = Zn, Zn = xa = null, Dl(t), e)))
              for (t = 0; t < e.length; t++)
                Dl(e[t]);
          }
        }
        function Mn(e, t) {
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
            throw Error(c(231, t, typeof n));
          return n;
        }
        var tn = !(typeof window == "undefined" || typeof window.document == "undefined" || typeof window.document.createElement == "undefined"), Yi = false;
        if (tn)
          try {
            var Un = {};
            Object.defineProperty(Un, "passive", { get: function() {
              Yi = true;
            } }), window.addEventListener("test", Un, Un), window.removeEventListener("test", Un, Un);
          } catch (e) {
            Yi = false;
          }
        var ht = null, Sa = null, Kn = null;
        function ql() {
          if (Kn)
            return Kn;
          var e, t = Sa, n = t.length, a, l = "value" in ht ? ht.value : ht.textContent, i = l.length;
          for (e = 0; e < n && t[e] === l[e]; e++)
            ;
          var o = n - e;
          for (a = 1; a <= o && t[n - a] === l[i - a]; a++)
            ;
          return Kn = l.slice(e, 1 < a ? 1 - a : void 0);
        }
        function Hl(e) {
          var t = e.keyCode;
          return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
        }
        function Ll() {
          return true;
        }
        function Is() {
          return false;
        }
        function yt(e) {
          function t(n, a, l, i, o) {
            this._reactName = n, this._targetInst = l, this.type = a, this.nativeEvent = i, this.target = o, this.currentTarget = null;
            for (var y in e)
              e.hasOwnProperty(y) && (n = e[y], this[y] = n ? n(i) : i[y]);
            return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === false) ? Ll : Is, this.isPropagationStopped = Is, this;
          }
          return N(t.prototype, { preventDefault: function() {
            this.defaultPrevented = true;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = Ll);
          }, stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = Ll);
          }, persist: function() {
          }, isPersistent: Ll }), t;
        }
        var Jn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
          return e.timeStamp || Date.now();
        }, defaultPrevented: 0, isTrusted: 0 }, ll = yt(Jn), Qe = N({}, Jn, { view: 0, detail: 0 }), f = yt(Qe), p, S, T, j = N({}, Qe, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: an, button: 0, buttons: 0, relatedTarget: function(e) {
          return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
        }, movementX: function(e) {
          return "movementX" in e ? e.movementX : (e !== T && (T && e.type === "mousemove" ? (p = e.screenX - T.screenX, S = e.screenY - T.screenY) : S = p = 0, T = e), p);
        }, movementY: function(e) {
          return "movementY" in e ? e.movementY : S;
        } }), M = yt(j), z = N({}, j, { dataTransfer: 0 }), F = yt(z), ae = N({}, Qe, { relatedTarget: 0 }), W = yt(ae), $ = N({}, Jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), oe = yt($), He = N({}, Jn, { clipboardData: function(e) {
          return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        } }), ge = yt(He), P = N({}, Jn, { data: 0 }), te = yt(P), Ke = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, bt = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, tt = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
        function nn(e) {
          var t = this.nativeEvent;
          return t.getModifierState ? t.getModifierState(e) : (e = tt[e]) ? !!t[e] : false;
        }
        function an() {
          return nn;
        }
        var Xi = N({}, Qe, { key: function(e) {
          if (e.key) {
            var t = Ke[e.key] || e.key;
            if (t !== "Unidentified")
              return t;
          }
          return e.type === "keypress" ? (e = Hl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? bt[e.keyCode] || "Unidentified" : "";
        }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: an, charCode: function(e) {
          return e.type === "keypress" ? Hl(e) : 0;
        }, keyCode: function(e) {
          return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        }, which: function(e) {
          return e.type === "keypress" ? Hl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        } }), eu = yt(Xi), Dn = N({}, j, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Yl = yt(Dn), Xl = N({}, Qe, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: an }), tu = yt(Xl), nu = N({}, Jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Gl = yt(nu), il = N({}, j, { deltaX: function(e) {
          return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        }, deltaY: function(e) {
          return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        }, deltaZ: 0, deltaMode: 0 }), Fn = yt(il), au = N({}, Jn, { newState: 0, oldState: 0 }), ln = yt(au), lu = [9, 13, 27, 32], sn = tn && "CompositionEvent" in window, _a = null;
        tn && "documentMode" in document && (_a = document.documentMode);
        var Ur = tn && "TextEvent" in window && !_a, yn = tn && (!sn || _a && 8 < _a && 11 >= _a), Wn = " ", Ql = false;
        function sl(e, t) {
          switch (e) {
            case "keyup":
              return lu.indexOf(t.keyCode) !== -1;
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
        var Vl = false;
        function $p(e, t) {
          switch (e) {
            case "compositionend":
              return Gi(t);
            case "keypress":
              return t.which !== 32 ? null : (Ql = true, Wn);
            case "textInput":
              return e = t.data, e === Wn && Ql ? null : e;
            default:
              return null;
          }
        }
        function Pp(e, t) {
          if (Vl)
            return e === "compositionend" || !sn && sl(e, t) ? (e = ql(), Kn = Sa = ht = null, Vl = false, e) : null;
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
        function gf(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return t === "input" ? !!Ip[e.type] : t === "textarea";
        }
        function yf(e, t, n, a) {
          xa ? Zn ? Zn.push(a) : Zn = [a] : xa = a, t = Ku(t, "onChange"), 0 < t.length && (n = new ll("onChange", "change", null, n, a), e.push({ event: n, listeners: t }));
        }
        var Qi = null, Vi = null;
        function eg(e) {
          Ih(e, 0);
        }
        function iu(e) {
          var t = el(e);
          if (Ui(t))
            return e;
        }
        function bf(e, t) {
          if (e === "change")
            return t;
        }
        var vf = false;
        if (tn) {
          var Dr;
          if (tn) {
            var Br = "oninput" in document;
            if (!Br) {
              var xf = document.createElement("div");
              xf.setAttribute("oninput", "return;"), Br = typeof xf.oninput == "function";
            }
            Dr = Br;
          } else
            Dr = false;
          vf = Dr && (!document.documentMode || 9 < document.documentMode);
        }
        function Sf() {
          Qi && (Qi.detachEvent("onpropertychange", _f), Vi = Qi = null);
        }
        function _f(e) {
          if (e.propertyName === "value" && iu(Vi)) {
            var t = [];
            yf(t, Vi, e, Ul(e)), Li(eg, t);
          }
        }
        function tg(e, t, n) {
          e === "focusin" ? (Sf(), Qi = t, Vi = n, Qi.attachEvent("onpropertychange", _f)) : e === "focusout" && Sf();
        }
        function ng(e) {
          if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return iu(Vi);
        }
        function ag(e, t) {
          if (e === "click")
            return iu(t);
        }
        function lg(e, t) {
          if (e === "input" || e === "change")
            return iu(t);
        }
        function ig(e, t) {
          return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
        }
        var Vt = typeof Object.is == "function" ? Object.is : ig;
        function ki(e, t) {
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
        function wf(e) {
          e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
          for (var t = nl(e.document); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = typeof t.contentWindow.location.href == "string";
            } catch (a) {
              n = false;
            }
            if (n)
              e = t.contentWindow;
            else
              break;
            t = nl(e.document);
          }
          return t;
        }
        function qr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
        }
        var sg = tn && "documentMode" in document && 11 >= document.documentMode, kl = null, Hr = null, Zi = null, Lr = false;
        function Nf(e, t, n) {
          var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
          Lr || kl == null || kl !== nl(a) || (a = kl, "selectionStart" in a && qr(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset }), Zi && ki(Zi, a) || (Zi = a, a = Ku(Hr, "onSelect"), 0 < a.length && (t = new ll("onSelect", "select", null, t, n), e.push({ event: t, listeners: a }), t.target = kl)));
        }
        function ul(e, t) {
          var n = {};
          return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
        }
        var Zl = { animationend: ul("Animation", "AnimationEnd"), animationiteration: ul("Animation", "AnimationIteration"), animationstart: ul("Animation", "AnimationStart"), transitionrun: ul("Transition", "TransitionRun"), transitionstart: ul("Transition", "TransitionStart"), transitioncancel: ul("Transition", "TransitionCancel"), transitionend: ul("Transition", "TransitionEnd") }, Yr = {}, jf = {};
        tn && (jf = document.createElement("div").style, "AnimationEvent" in window || (delete Zl.animationend.animation, delete Zl.animationiteration.animation, delete Zl.animationstart.animation), "TransitionEvent" in window || delete Zl.transitionend.transition);
        function rl(e) {
          if (Yr[e])
            return Yr[e];
          if (!Zl[e])
            return e;
          var t = Zl[e], n;
          for (n in t)
            if (t.hasOwnProperty(n) && n in jf)
              return Yr[e] = t[n];
          return e;
        }
        var Of = rl("animationend"), Rf = rl("animationiteration"), Cf = rl("animationstart"), ug = rl("transitionrun"), rg = rl("transitionstart"), cg = rl("transitioncancel"), zf = rl("transitionend"), Mf = /* @__PURE__ */ new Map(), Xr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
        Xr.push("scrollEnd");
        function bn(e, t) {
          Mf.set(e, t), zn(t, [e]);
        }
        var su = typeof reportError == "function" ? reportError : function(e) {
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
        function uu() {
          for (var e = Kl, t = Gr = Kl = 0; t < e; ) {
            var n = un[t];
            un[t++] = null;
            var a = un[t];
            un[t++] = null;
            var l = un[t];
            un[t++] = null;
            var i = un[t];
            if (un[t++] = null, a !== null && l !== null) {
              var o = a.pending;
              o === null ? l.next = l : (l.next = o.next, o.next = l), a.pending = l;
            }
            i !== 0 && Uf(n, l, i);
          }
        }
        function ru(e, t, n, a) {
          un[Kl++] = e, un[Kl++] = t, un[Kl++] = n, un[Kl++] = a, Gr |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
        }
        function Qr(e, t, n, a) {
          return ru(e, t, n, a), cu(e);
        }
        function cl(e, t) {
          return ru(e, null, null, t), cu(e);
        }
        function Uf(e, t, n) {
          e.lanes |= n;
          var a = e.alternate;
          a !== null && (a.lanes |= n);
          for (var l = false, i = e.return; i !== null; )
            i.childLanes |= n, a = i.alternate, a !== null && (a.childLanes |= n), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (l = true)), e = i, i = i.return;
          return e.tag === 3 ? (i = e.stateNode, l && t !== null && (l = 31 - Nt(n), e = i.hiddenUpdates, a = e[l], a === null ? e[l] = [t] : a.push(t), t.lane = n | 536870912), i) : null;
        }
        function cu(e) {
          if (50 < ms)
            throw ms = 0, Pc = null, Error(c(185));
          for (var t = e.return; t !== null; )
            e = t, t = e.return;
          return e.tag === 3 ? e.stateNode : null;
        }
        var Jl = {};
        function og(e, t, n, a) {
          this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
        }
        function kt(e, t, n, a) {
          return new og(e, t, n, a);
        }
        function Vr(e) {
          return e = e.prototype, !(!e || !e.isReactComponent);
        }
        function $n(e, t) {
          var n = e.alternate;
          return n === null ? (n = kt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
        }
        function Df(e, t) {
          e.flags &= 65011714;
          var n = e.alternate;
          return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), e;
        }
        function ou(e, t, n, a, l, i) {
          var o = 0;
          if (a = e, typeof e == "function")
            Vr(e) && (o = 1);
          else if (typeof e == "string")
            o = p0(e, n, K.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
          else
            e:
              switch (e) {
                case wt:
                  return e = kt(31, n, t, l), e.elementType = wt, e.lanes = i, e;
                case Z:
                  return ol(n.children, l, i, t);
                case ie:
                  o = 8, l |= 24;
                  break;
                case he:
                  return e = kt(12, n, t, l | 2), e.elementType = he, e.lanes = i, e;
                case Te:
                  return e = kt(13, n, t, l), e.elementType = Te, e.lanes = i, e;
                case Ue:
                  return e = kt(19, n, t, l), e.elementType = Ue, e.lanes = i, e;
                default:
                  if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                      case se:
                        o = 10;
                        break e;
                      case _e:
                        o = 9;
                        break e;
                      case ve:
                        o = 11;
                        break e;
                      case fe:
                        o = 14;
                        break e;
                      case lt:
                        o = 16, a = null;
                        break e;
                    }
                  o = 29, n = Error(c(130, e === null ? "null" : typeof e, "")), a = null;
              }
          return t = kt(o, n, t, l), t.elementType = e, t.type = a, t.lanes = i, t;
        }
        function ol(e, t, n, a) {
          return e = kt(7, e, a, t), e.lanes = n, e;
        }
        function kr(e, t, n) {
          return e = kt(6, e, null, t), e.lanes = n, e;
        }
        function Bf(e) {
          var t = kt(18, null, null, 0);
          return t.stateNode = e, t;
        }
        function Zr(e, t, n) {
          return t = kt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
        }
        var qf = /* @__PURE__ */ new WeakMap();
        function rn(e, t) {
          if (typeof e == "object" && e !== null) {
            var n = qf.get(e);
            return n !== void 0 ? n : (t = { value: e, source: t, stack: Ms(t) }, qf.set(e, t), t);
          }
          return { value: e, source: t, stack: Ms(t) };
        }
        var Fl = [], Wl = 0, fu = null, Ki = 0, cn = [], on = 0, Ta = null, Bn = 1, qn = "";
        function Pn(e, t) {
          Fl[Wl++] = Ki, Fl[Wl++] = fu, fu = e, Ki = t;
        }
        function Hf(e, t, n) {
          cn[on++] = Bn, cn[on++] = qn, cn[on++] = Ta, Ta = e;
          var a = Bn;
          e = qn;
          var l = 32 - Nt(a) - 1;
          a &= ~(1 << l), n += 1;
          var i = 32 - Nt(t) + l;
          if (30 < i) {
            var o = l - l % 5;
            i = (a & (1 << o) - 1).toString(32), a >>= o, l -= o, Bn = 1 << 32 - Nt(t) + l | n << l | a, qn = i + e;
          } else
            Bn = 1 << i | n << l | a, qn = e;
        }
        function Kr(e) {
          e.return !== null && (Pn(e, 1), Hf(e, 1, 0));
        }
        function Jr(e) {
          for (; e === fu; )
            fu = Fl[--Wl], Fl[Wl] = null, Ki = Fl[--Wl], Fl[Wl] = null;
          for (; e === Ta; )
            Ta = cn[--on], cn[on] = null, qn = cn[--on], cn[on] = null, Bn = cn[--on], cn[on] = null;
        }
        function Lf(e, t) {
          cn[on++] = Bn, cn[on++] = qn, cn[on++] = Ta, Bn = t.id, qn = t.overflow, Ta = e;
        }
        var _t = null, Je = null, je = false, Ea = null, fn = false, Fr = Error(c(519));
        function Aa(e) {
          var t = Error(c(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
          throw Ji(rn(t, e)), Fr;
        }
        function Yf(e) {
          var t = e.stateNode, n = e.type, a = e.memoizedProps;
          switch (t[dt] = e, t[gt] = a, n) {
            case "dialog":
              Ae("cancel", t), Ae("close", t);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ae("load", t);
              break;
            case "video":
            case "audio":
              for (n = 0; n < gs.length; n++)
                Ae(gs[n], t);
              break;
            case "source":
              Ae("error", t);
              break;
            case "img":
            case "image":
            case "link":
              Ae("error", t), Ae("load", t);
              break;
            case "details":
              Ae("toggle", t);
              break;
            case "input":
              Ae("invalid", t), Fs(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, true);
              break;
            case "select":
              Ae("invalid", t);
              break;
            case "textarea":
              Ae("invalid", t), qi(t, a.value, a.defaultValue, a.children);
          }
          n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === true || am(t.textContent, n) ? (a.popover != null && (Ae("beforetoggle", t), Ae("toggle", t)), a.onScroll != null && Ae("scroll", t), a.onScrollEnd != null && Ae("scrollend", t), a.onClick != null && (t.onclick = en), t = true) : t = false, t || Aa(e, true);
        }
        function Xf(e) {
          for (_t = e.return; _t; )
            switch (_t.tag) {
              case 5:
              case 31:
              case 13:
                fn = false;
                return;
              case 27:
              case 3:
                fn = true;
                return;
              default:
                _t = _t.return;
            }
        }
        function $l(e) {
          if (e !== _t)
            return false;
          if (!je)
            return Xf(e), je = true, false;
          var t = e.tag, n;
          if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || mo(e.type, e.memoizedProps)), n = !n), n && Je && Aa(e), Xf(e), t === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
              throw Error(c(317));
            Je = dm(e);
          } else if (t === 31) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
              throw Error(c(317));
            Je = dm(e);
          } else
            t === 27 ? (t = Je, La(e.type) ? (e = vo, vo = null, Je = e) : Je = t) : Je = _t ? hn(e.stateNode.nextSibling) : null;
          return true;
        }
        function fl() {
          Je = _t = null, je = false;
        }
        function Wr() {
          var e = Ea;
          return e !== null && (Ht === null ? Ht = e : Ht.push.apply(Ht, e), Ea = null), e;
        }
        function Ji(e) {
          Ea === null ? Ea = [e] : Ea.push(e);
        }
        var $r = _(null), dl = null, In = null;
        function wa(e, t, n) {
          V($r, t._currentValue), t._currentValue = n;
        }
        function ea(e) {
          e._currentValue = $r.current, B($r);
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
                  var y = i;
                  i = l;
                  for (var A = 0; A < t.length; A++)
                    if (y.context === t[A]) {
                      i.lanes |= n, y = i.alternate, y !== null && (y.lanes |= n), Pr(i.return, n, e), a || (o = null);
                      break e;
                    }
                  i = y.next;
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
              var o = l.alternate;
              if (o === null)
                throw Error(c(387));
              if (o = o.memoizedProps, o !== null) {
                var y = l.type;
                Vt(l.pendingProps.value, o.value) || (e !== null ? e.push(y) : e = [y]);
              }
            } else if (l === me.current) {
              if (o = l.alternate, o === null)
                throw Error(c(387));
              o.memoizedState.memoizedState !== l.memoizedState.memoizedState && (e !== null ? e.push(Ss) : e = [Ss]);
            }
            l = l.return;
          }
          e !== null && Ir(t, e, n, a), t.flags |= 262144;
        }
        function du(e) {
          for (e = e.firstContext; e !== null; ) {
            if (!Vt(e.context._currentValue, e.memoizedValue))
              return true;
            e = e.next;
          }
          return false;
        }
        function hl(e) {
          dl = e, In = null, e = e.dependencies, e !== null && (e.firstContext = null);
        }
        function Tt(e) {
          return Gf(dl, e);
        }
        function hu(e, t) {
          return dl === null && hl(e), Gf(e, t);
        }
        function Gf(e, t) {
          var n = t._currentValue;
          if (t = { context: t, memoizedValue: n, next: null }, In === null) {
            if (e === null)
              throw Error(c(308));
            In = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
          } else
            In = In.next = t;
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
        }, dg = u.unstable_scheduleCallback, hg = u.unstable_NormalPriority, st = { $$typeof: se, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
        function ec() {
          return { controller: new fg(), data: /* @__PURE__ */ new Map(), refCount: 0 };
        }
        function Fi(e) {
          e.refCount--, e.refCount === 0 && dg(hg, function() {
            e.controller.abort();
          });
        }
        var Wi = null, tc = 0, Il = 0, ei = null;
        function mg(e, t) {
          if (Wi === null) {
            var n = Wi = [];
            tc = 0, Il = lo(), ei = { status: "pending", value: void 0, then: function(a) {
              n.push(a);
            } };
          }
          return tc++, t.then(Qf, Qf), t;
        }
        function Qf() {
          if (--tc === 0 && Wi !== null) {
            ei !== null && (ei.status = "fulfilled");
            var e = Wi;
            Wi = null, Il = 0, ei = null;
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
        var Vf = X.S;
        X.S = function(e, t) {
          Nh = Ot(), typeof t == "object" && t !== null && typeof t.then == "function" && mg(e, t), Vf !== null && Vf(e, t);
        };
        var ml = _(null);
        function nc() {
          var e = ml.current;
          return e !== null ? e : Ge.pooledCache;
        }
        function mu(e, t) {
          t === null ? V(ml, ml.current) : V(ml, t.pool);
        }
        function kf() {
          var e = nc();
          return e === null ? null : { parent: st._currentValue, pool: e };
        }
        var ti = Error(c(460)), ac = Error(c(474)), pu = Error(c(542)), gu = { then: function() {
        } };
        function Zf(e) {
          return e = e.status, e === "fulfilled" || e === "rejected";
        }
        function Kf(e, t, n) {
          switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(en, en), t = n), t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, Ff(e), e;
            default:
              if (typeof t.status == "string")
                t.then(en, en);
              else {
                if (e = Ge, e !== null && 100 < e.shellSuspendCounter)
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
                  throw e = t.reason, Ff(e), e;
              }
              throw gl = t, ti;
          }
        }
        function pl(e) {
          try {
            var t = e._init;
            return t(e._payload);
          } catch (n) {
            throw n !== null && typeof n == "object" && typeof n.then == "function" ? (gl = n, ti) : n;
          }
        }
        var gl = null;
        function Jf() {
          if (gl === null)
            throw Error(c(459));
          var e = gl;
          return gl = null, e;
        }
        function Ff(e) {
          if (e === ti || e === pu)
            throw Error(c(483));
        }
        var ni = null, $i = 0;
        function yu(e) {
          var t = $i;
          return $i += 1, ni === null && (ni = []), Kf(ni, e, t);
        }
        function Pi(e, t) {
          t = t.props.ref, e.ref = t !== void 0 ? t : null;
        }
        function bu(e, t) {
          throw t.$$typeof === Y ? Error(c(525)) : (e = Object.prototype.toString.call(t), Error(c(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
        }
        function Wf(e) {
          function t(R, O) {
            if (e) {
              var U = R.deletions;
              U === null ? (R.deletions = [O], R.flags |= 16) : U.push(O);
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
            return R = $n(R, O), R.index = 0, R.sibling = null, R;
          }
          function i(R, O, U) {
            return R.index = U, e ? (U = R.alternate, U !== null ? (U = U.index, U < O ? (R.flags |= 67108866, O) : U) : (R.flags |= 67108866, O)) : (R.flags |= 1048576, O);
          }
          function o(R) {
            return e && R.alternate === null && (R.flags |= 67108866), R;
          }
          function y(R, O, U, Q) {
            return O === null || O.tag !== 6 ? (O = kr(U, R.mode, Q), O.return = R, O) : (O = l(O, U), O.return = R, O);
          }
          function A(R, O, U, Q) {
            var ue = U.type;
            return ue === Z ? G(R, O, U.props.children, Q, U.key) : O !== null && (O.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === lt && pl(ue) === O.type) ? (O = l(O, U.props), Pi(O, U), O.return = R, O) : (O = ou(U.type, U.key, U.props, null, R.mode, Q), Pi(O, U), O.return = R, O);
          }
          function D(R, O, U, Q) {
            return O === null || O.tag !== 4 || O.stateNode.containerInfo !== U.containerInfo || O.stateNode.implementation !== U.implementation ? (O = Zr(U, R.mode, Q), O.return = R, O) : (O = l(O, U.children || []), O.return = R, O);
          }
          function G(R, O, U, Q, ue) {
            return O === null || O.tag !== 7 ? (O = ol(U, R.mode, Q, ue), O.return = R, O) : (O = l(O, U), O.return = R, O);
          }
          function k(R, O, U) {
            if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
              return O = kr("" + O, R.mode, U), O.return = R, O;
            if (typeof O == "object" && O !== null) {
              switch (O.$$typeof) {
                case w:
                  return U = ou(O.type, O.key, O.props, null, R.mode, U), Pi(U, O), U.return = R, U;
                case C:
                  return O = Zr(O, R.mode, U), O.return = R, O;
                case lt:
                  return O = pl(O), k(R, O, U);
              }
              if (xt(O) || De(O))
                return O = ol(O, R.mode, U, null), O.return = R, O;
              if (typeof O.then == "function")
                return k(R, yu(O), U);
              if (O.$$typeof === se)
                return k(R, hu(R, O), U);
              bu(R, O);
            }
            return null;
          }
          function q(R, O, U, Q) {
            var ue = O !== null ? O.key : null;
            if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
              return ue !== null ? null : y(R, O, "" + U, Q);
            if (typeof U == "object" && U !== null) {
              switch (U.$$typeof) {
                case w:
                  return U.key === ue ? A(R, O, U, Q) : null;
                case C:
                  return U.key === ue ? D(R, O, U, Q) : null;
                case lt:
                  return U = pl(U), q(R, O, U, Q);
              }
              if (xt(U) || De(U))
                return ue !== null ? null : G(R, O, U, Q, null);
              if (typeof U.then == "function")
                return q(R, O, yu(U), Q);
              if (U.$$typeof === se)
                return q(R, O, hu(R, U), Q);
              bu(R, U);
            }
            return null;
          }
          function L(R, O, U, Q, ue) {
            if (typeof Q == "string" && Q !== "" || typeof Q == "number" || typeof Q == "bigint")
              return R = R.get(U) || null, y(O, R, "" + Q, ue);
            if (typeof Q == "object" && Q !== null) {
              switch (Q.$$typeof) {
                case w:
                  return R = R.get(Q.key === null ? U : Q.key) || null, A(O, R, Q, ue);
                case C:
                  return R = R.get(Q.key === null ? U : Q.key) || null, D(O, R, Q, ue);
                case lt:
                  return Q = pl(Q), L(R, O, U, Q, ue);
              }
              if (xt(Q) || De(Q))
                return R = R.get(U) || null, G(O, R, Q, ue, null);
              if (typeof Q.then == "function")
                return L(R, O, U, yu(Q), ue);
              if (Q.$$typeof === se)
                return L(R, O, U, hu(O, Q), ue);
              bu(O, Q);
            }
            return null;
          }
          function ne(R, O, U, Q) {
            for (var ue = null, Re = null, le = O, Se = O = 0, Ne = null; le !== null && Se < U.length; Se++) {
              le.index > Se ? (Ne = le, le = null) : Ne = le.sibling;
              var Ce = q(R, le, U[Se], Q);
              if (Ce === null) {
                le === null && (le = Ne);
                break;
              }
              e && le && Ce.alternate === null && t(R, le), O = i(Ce, O, Se), Re === null ? ue = Ce : Re.sibling = Ce, Re = Ce, le = Ne;
            }
            if (Se === U.length)
              return n(R, le), je && Pn(R, Se), ue;
            if (le === null) {
              for (; Se < U.length; Se++)
                le = k(R, U[Se], Q), le !== null && (O = i(le, O, Se), Re === null ? ue = le : Re.sibling = le, Re = le);
              return je && Pn(R, Se), ue;
            }
            for (le = a(le); Se < U.length; Se++)
              Ne = L(le, R, Se, U[Se], Q), Ne !== null && (e && Ne.alternate !== null && le.delete(Ne.key === null ? Se : Ne.key), O = i(Ne, O, Se), Re === null ? ue = Ne : Re.sibling = Ne, Re = Ne);
            return e && le.forEach(function(Va) {
              return t(R, Va);
            }), je && Pn(R, Se), ue;
          }
          function re(R, O, U, Q) {
            if (U == null)
              throw Error(c(151));
            for (var ue = null, Re = null, le = O, Se = O = 0, Ne = null, Ce = U.next(); le !== null && !Ce.done; Se++, Ce = U.next()) {
              le.index > Se ? (Ne = le, le = null) : Ne = le.sibling;
              var Va = q(R, le, Ce.value, Q);
              if (Va === null) {
                le === null && (le = Ne);
                break;
              }
              e && le && Va.alternate === null && t(R, le), O = i(Va, O, Se), Re === null ? ue = Va : Re.sibling = Va, Re = Va, le = Ne;
            }
            if (Ce.done)
              return n(R, le), je && Pn(R, Se), ue;
            if (le === null) {
              for (; !Ce.done; Se++, Ce = U.next())
                Ce = k(R, Ce.value, Q), Ce !== null && (O = i(Ce, O, Se), Re === null ? ue = Ce : Re.sibling = Ce, Re = Ce);
              return je && Pn(R, Se), ue;
            }
            for (le = a(le); !Ce.done; Se++, Ce = U.next())
              Ce = L(le, R, Se, Ce.value, Q), Ce !== null && (e && Ce.alternate !== null && le.delete(Ce.key === null ? Se : Ce.key), O = i(Ce, O, Se), Re === null ? ue = Ce : Re.sibling = Ce, Re = Ce);
            return e && le.forEach(function(w0) {
              return t(R, w0);
            }), je && Pn(R, Se), ue;
          }
          function Xe(R, O, U, Q) {
            if (typeof U == "object" && U !== null && U.type === Z && U.key === null && (U = U.props.children), typeof U == "object" && U !== null) {
              switch (U.$$typeof) {
                case w:
                  e: {
                    for (var ue = U.key; O !== null; ) {
                      if (O.key === ue) {
                        if (ue = U.type, ue === Z) {
                          if (O.tag === 7) {
                            n(R, O.sibling), Q = l(O, U.props.children), Q.return = R, R = Q;
                            break e;
                          }
                        } else if (O.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === lt && pl(ue) === O.type) {
                          n(R, O.sibling), Q = l(O, U.props), Pi(Q, U), Q.return = R, R = Q;
                          break e;
                        }
                        n(R, O);
                        break;
                      } else
                        t(R, O);
                      O = O.sibling;
                    }
                    U.type === Z ? (Q = ol(U.props.children, R.mode, Q, U.key), Q.return = R, R = Q) : (Q = ou(U.type, U.key, U.props, null, R.mode, Q), Pi(Q, U), Q.return = R, R = Q);
                  }
                  return o(R);
                case C:
                  e: {
                    for (ue = U.key; O !== null; ) {
                      if (O.key === ue)
                        if (O.tag === 4 && O.stateNode.containerInfo === U.containerInfo && O.stateNode.implementation === U.implementation) {
                          n(R, O.sibling), Q = l(O, U.children || []), Q.return = R, R = Q;
                          break e;
                        } else {
                          n(R, O);
                          break;
                        }
                      else
                        t(R, O);
                      O = O.sibling;
                    }
                    Q = Zr(U, R.mode, Q), Q.return = R, R = Q;
                  }
                  return o(R);
                case lt:
                  return U = pl(U), Xe(R, O, U, Q);
              }
              if (xt(U))
                return ne(R, O, U, Q);
              if (De(U)) {
                if (ue = De(U), typeof ue != "function")
                  throw Error(c(150));
                return U = ue.call(U), re(R, O, U, Q);
              }
              if (typeof U.then == "function")
                return Xe(R, O, yu(U), Q);
              if (U.$$typeof === se)
                return Xe(R, O, hu(R, U), Q);
              bu(R, U);
            }
            return typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint" ? (U = "" + U, O !== null && O.tag === 6 ? (n(R, O.sibling), Q = l(O, U), Q.return = R, R = Q) : (n(R, O), Q = kr(U, R.mode, Q), Q.return = R, R = Q), o(R)) : n(R, O);
          }
          return function(R, O, U, Q) {
            try {
              $i = 0;
              var ue = Xe(R, O, U, Q);
              return ni = null, ue;
            } catch (le) {
              if (le === ti || le === pu)
                throw le;
              var Re = kt(29, le, null, R.mode);
              return Re.lanes = Q, Re.return = R, Re;
            } finally {
            }
          };
        }
        var yl = Wf(true), $f = Wf(false), Na = false;
        function lc(e) {
          e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
        }
        function ic(e, t) {
          e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, callbacks: null });
        }
        function ja(e) {
          return { lane: e, tag: 0, payload: null, callback: null, next: null };
        }
        function Oa(e, t, n) {
          var a = e.updateQueue;
          if (a === null)
            return null;
          if (a = a.shared, (ze & 2) !== 0) {
            var l = a.pending;
            return l === null ? t.next = t : (t.next = l.next, l.next = t), a.pending = t, t = cu(e), Uf(e, null, n), t;
          }
          return ru(e, a, t, n), cu(e);
        }
        function Ii(e, t, n) {
          if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
            var a = t.lanes;
            a &= e.pendingLanes, n |= a, t.lanes = n, Ys(e, n);
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
        function es() {
          if (uc) {
            var e = ei;
            if (e !== null)
              throw e;
          }
        }
        function ts(e, t, n, a) {
          uc = false;
          var l = e.updateQueue;
          Na = false;
          var i = l.firstBaseUpdate, o = l.lastBaseUpdate, y = l.shared.pending;
          if (y !== null) {
            l.shared.pending = null;
            var A = y, D = A.next;
            A.next = null, o === null ? i = D : o.next = D, o = A;
            var G = e.alternate;
            G !== null && (G = G.updateQueue, y = G.lastBaseUpdate, y !== o && (y === null ? G.firstBaseUpdate = D : y.next = D, G.lastBaseUpdate = A));
          }
          if (i !== null) {
            var k = l.baseState;
            o = 0, G = D = A = null, y = i;
            do {
              var q = y.lane & -536870913, L = q !== y.lane;
              if (L ? (we & q) === q : (a & q) === q) {
                q !== 0 && q === Il && (uc = true), G !== null && (G = G.next = { lane: 0, tag: y.tag, payload: y.payload, callback: null, next: null });
                e: {
                  var ne = e, re = y;
                  q = t;
                  var Xe = n;
                  switch (re.tag) {
                    case 1:
                      if (ne = re.payload, typeof ne == "function") {
                        k = ne.call(Xe, k, q);
                        break e;
                      }
                      k = ne;
                      break e;
                    case 3:
                      ne.flags = ne.flags & -65537 | 128;
                    case 0:
                      if (ne = re.payload, q = typeof ne == "function" ? ne.call(Xe, k, q) : ne, q == null)
                        break e;
                      k = N({}, k, q);
                      break e;
                    case 2:
                      Na = true;
                  }
                }
                q = y.callback, q !== null && (e.flags |= 64, L && (e.flags |= 8192), L = l.callbacks, L === null ? l.callbacks = [q] : L.push(q));
              } else
                L = { lane: q, tag: y.tag, payload: y.payload, callback: y.callback, next: null }, G === null ? (D = G = L, A = k) : G = G.next = L, o |= q;
              if (y = y.next, y === null) {
                if (y = l.shared.pending, y === null)
                  break;
                L = y, y = L.next, L.next = null, l.lastBaseUpdate = L, l.shared.pending = null;
              }
            } while (true);
            G === null && (A = k), l.baseState = A, l.firstBaseUpdate = D, l.lastBaseUpdate = G, i === null && (l.shared.lanes = 0), Ua |= o, e.lanes = o, e.memoizedState = k;
          }
        }
        function Pf(e, t) {
          if (typeof e != "function")
            throw Error(c(191, e));
          e.call(t);
        }
        function If(e, t) {
          var n = e.callbacks;
          if (n !== null)
            for (e.callbacks = null, e = 0; e < n.length; e++)
              Pf(n[e], t);
        }
        var ai = _(null), vu = _(0);
        function ed(e, t) {
          e = ca, V(vu, e), V(ai, t), ca = e | t.baseLanes;
        }
        function rc() {
          V(vu, ca), V(ai, ai.current);
        }
        function cc() {
          ca = vu.current, B(ai), B(vu);
        }
        var Zt = _(null), dn = null;
        function Ra(e) {
          var t = e.alternate;
          V(nt, nt.current & 1), V(Zt, e), dn === null && (t === null || ai.current !== null || t.memoizedState !== null) && (dn = e);
        }
        function oc(e) {
          V(nt, nt.current), V(Zt, e), dn === null && (dn = e);
        }
        function td(e) {
          e.tag === 22 ? (V(nt, nt.current), V(Zt, e), dn === null && (dn = e)) : Ca();
        }
        function Ca() {
          V(nt, nt.current), V(Zt, Zt.current);
        }
        function Kt(e) {
          B(Zt), dn === e && (dn = null), B(nt);
        }
        var nt = _(0);
        function xu(e) {
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
        var ta = 0, be = null, Le = null, ut = null, Su = false, li = false, bl = false, _u = 0, ns = 0, ii = null, gg = 0;
        function Ie() {
          throw Error(c(321));
        }
        function fc(e, t) {
          if (t === null)
            return false;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!Vt(e[n], t[n]))
              return false;
          return true;
        }
        function dc(e, t, n, a, l, i) {
          return ta = i, be = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, X.H = e === null || e.memoizedState === null ? Hd : Nc, bl = false, i = n(a, l), bl = false, li && (i = ad(t, n, a, l)), nd(e), i;
        }
        function nd(e) {
          X.H = is;
          var t = Le !== null && Le.next !== null;
          if (ta = 0, ut = Le = be = null, Su = false, ns = 0, ii = null, t)
            throw Error(c(300));
          e === null || rt || (e = e.dependencies, e !== null && du(e) && (rt = true));
        }
        function ad(e, t, n, a) {
          be = e;
          var l = 0;
          do {
            if (li && (ii = null), ns = 0, li = false, 25 <= l)
              throw Error(c(301));
            if (l += 1, ut = Le = null, e.updateQueue != null) {
              var i = e.updateQueue;
              i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
            }
            X.H = Ld, i = t(n, a);
          } while (li);
          return i;
        }
        function yg() {
          var e = X.H, t = e.useState()[0];
          return t = typeof t.then == "function" ? as(t) : t, e = e.useState()[0], (Le !== null ? Le.memoizedState : null) !== e && (be.flags |= 1024), t;
        }
        function hc() {
          var e = _u !== 0;
          return _u = 0, e;
        }
        function mc(e, t, n) {
          t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
        }
        function pc(e) {
          if (Su) {
            for (e = e.memoizedState; e !== null; ) {
              var t = e.queue;
              t !== null && (t.pending = null), e = e.next;
            }
            Su = false;
          }
          ta = 0, ut = Le = be = null, li = false, ns = _u = 0, ii = null;
        }
        function zt() {
          var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
          return ut === null ? be.memoizedState = ut = e : ut = ut.next = e, ut;
        }
        function at() {
          if (Le === null) {
            var e = be.alternate;
            e = e !== null ? e.memoizedState : null;
          } else
            e = Le.next;
          var t = ut === null ? be.memoizedState : ut.next;
          if (t !== null)
            ut = t, Le = e;
          else {
            if (e === null)
              throw be.alternate === null ? Error(c(467)) : Error(c(310));
            Le = e, e = { memoizedState: Le.memoizedState, baseState: Le.baseState, baseQueue: Le.baseQueue, queue: Le.queue, next: null }, ut === null ? be.memoizedState = ut = e : ut = ut.next = e;
          }
          return ut;
        }
        function Tu() {
          return { lastEffect: null, events: null, stores: null, memoCache: null };
        }
        function as(e) {
          var t = ns;
          return ns += 1, ii === null && (ii = []), e = Kf(ii, e, t), t = be, (ut === null ? t.memoizedState : ut.next) === null && (t = t.alternate, X.H = t === null || t.memoizedState === null ? Hd : Nc), e;
        }
        function Eu(e) {
          if (e !== null && typeof e == "object") {
            if (typeof e.then == "function")
              return as(e);
            if (e.$$typeof === se)
              return Tt(e);
          }
          throw Error(c(438, String(e)));
        }
        function gc(e) {
          var t = null, n = be.updateQueue;
          if (n !== null && (t = n.memoCache), t == null) {
            var a = be.alternate;
            a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = { data: a.data.map(function(l) {
              return l.slice();
            }), index: 0 })));
          }
          if (t == null && (t = { data: [], index: 0 }), n === null && (n = Tu(), be.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
            for (n = t.data[t.index] = Array(e), a = 0; a < e; a++)
              n[a] = Pt;
          return t.index++, n;
        }
        function na(e, t) {
          return typeof t == "function" ? t(e) : t;
        }
        function Au(e) {
          var t = at();
          return yc(t, Le, e);
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
            var y = o = null, A = null, D = t, G = false;
            do {
              var k = D.lane & -536870913;
              if (k !== D.lane ? (we & k) === k : (ta & k) === k) {
                var q = D.revertLane;
                if (q === 0)
                  A !== null && (A = A.next = { lane: 0, revertLane: 0, gesture: null, action: D.action, hasEagerState: D.hasEagerState, eagerState: D.eagerState, next: null }), k === Il && (G = true);
                else if ((ta & q) === q) {
                  D = D.next, q === Il && (G = true);
                  continue;
                } else
                  k = { lane: 0, revertLane: D.revertLane, gesture: null, action: D.action, hasEagerState: D.hasEagerState, eagerState: D.eagerState, next: null }, A === null ? (y = A = k, o = i) : A = A.next = k, be.lanes |= q, Ua |= q;
                k = D.action, bl && n(i, k), i = D.hasEagerState ? D.eagerState : n(i, k);
              } else
                q = { lane: k, revertLane: D.revertLane, gesture: D.gesture, action: D.action, hasEagerState: D.hasEagerState, eagerState: D.eagerState, next: null }, A === null ? (y = A = q, o = i) : A = A.next = q, be.lanes |= k, Ua |= k;
              D = D.next;
            } while (D !== null && D !== t);
            if (A === null ? o = i : A.next = y, !Vt(i, e.memoizedState) && (rt = true, G && (n = ei, n !== null)))
              throw n;
            e.memoizedState = i, e.baseState = o, e.baseQueue = A, a.lastRenderedState = i;
          }
          return l === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
        }
        function bc(e) {
          var t = at(), n = t.queue;
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
            Vt(i, t.memoizedState) || (rt = true), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
          }
          return [i, a];
        }
        function ld(e, t, n) {
          var a = be, l = at(), i = je;
          if (i) {
            if (n === void 0)
              throw Error(c(407));
            n = n();
          } else
            n = t();
          var o = !Vt((Le || l).memoizedState, n);
          if (o && (l.memoizedState = n, rt = true), l = l.queue, Sc(ud.bind(null, a, l, e), [e]), l.getSnapshot !== t || o || ut !== null && ut.memoizedState.tag & 1) {
            if (a.flags |= 2048, si(9, { destroy: void 0 }, sd.bind(null, a, l, n, t), null), Ge === null)
              throw Error(c(349));
            i || (ta & 127) !== 0 || id(a, t, n);
          }
          return n;
        }
        function id(e, t, n) {
          e.flags |= 16384, e = { getSnapshot: t, value: n }, t = be.updateQueue, t === null ? (t = Tu(), be.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
        }
        function sd(e, t, n, a) {
          t.value = n, t.getSnapshot = a, rd(t) && cd(e);
        }
        function ud(e, t, n) {
          return n(function() {
            rd(t) && cd(e);
          });
        }
        function rd(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !Vt(e, n);
          } catch (a) {
            return true;
          }
        }
        function cd(e) {
          var t = cl(e, 2);
          t !== null && Lt(t, e, 2);
        }
        function vc(e) {
          var t = zt();
          if (typeof e == "function") {
            var n = e;
            if (e = n(), bl) {
              Gt(true);
              try {
                n();
              } finally {
                Gt(false);
              }
            }
          }
          return t.memoizedState = t.baseState = e, t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: na, lastRenderedState: e }, t;
        }
        function od(e, t, n, a) {
          return e.baseState = n, yc(e, Le, typeof a == "function" ? a : na);
        }
        function bg(e, t, n, a, l) {
          if (ju(e))
            throw Error(c(485));
          if (e = t.action, e !== null) {
            var i = { payload: l, action: e, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(o) {
              i.listeners.push(o);
            } };
            X.T !== null ? n(true) : i.isTransition = false, a(i), n = t.pending, n === null ? (i.next = t.pending = i, fd(t, i)) : (i.next = n.next, t.pending = n.next = i);
          }
        }
        function fd(e, t) {
          var n = t.action, a = t.payload, l = e.state;
          if (t.isTransition) {
            var i = X.T, o = {};
            X.T = o;
            try {
              var y = n(l, a), A = X.S;
              A !== null && A(o, y), dd(e, t, y);
            } catch (D) {
              xc(e, t, D);
            } finally {
              i !== null && o.types !== null && (i.types = o.types), X.T = i;
            }
          } else
            try {
              i = n(l, a), dd(e, t, i);
            } catch (D) {
              xc(e, t, D);
            }
        }
        function dd(e, t, n) {
          n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(a) {
            hd(e, t, a);
          }, function(a) {
            return xc(e, t, a);
          }) : hd(e, t, n);
        }
        function hd(e, t, n) {
          t.status = "fulfilled", t.value = n, md(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, fd(e, n)));
        }
        function xc(e, t, n) {
          var a = e.pending;
          if (e.pending = null, a !== null) {
            a = a.next;
            do
              t.status = "rejected", t.reason = n, md(t), t = t.next;
            while (t !== a);
          }
          e.action = null;
        }
        function md(e) {
          e = e.listeners;
          for (var t = 0; t < e.length; t++)
            (0, e[t])();
        }
        function pd(e, t) {
          return t;
        }
        function gd(e, t) {
          if (je) {
            var n = Ge.formState;
            if (n !== null) {
              e: {
                var a = be;
                if (je) {
                  if (Je) {
                    t: {
                      for (var l = Je, i = fn; l.nodeType !== 8; ) {
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
                      Je = hn(l.nextSibling), a = l.data === "F!";
                      break e;
                    }
                  }
                  Aa(a);
                }
                a = false;
              }
              a && (t = n[0]);
            }
          }
          return n = zt(), n.memoizedState = n.baseState = t, a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: pd, lastRenderedState: t }, n.queue = a, n = Dd.bind(null, be, a), a.dispatch = n, a = vc(false), i = wc.bind(null, be, false, a.queue), a = zt(), l = { state: t, dispatch: null, action: e, pending: null }, a.queue = l, n = bg.bind(null, be, l, i, n), l.dispatch = n, a.memoizedState = e, [t, n, false];
        }
        function yd(e) {
          var t = at();
          return bd(t, Le, e);
        }
        function bd(e, t, n) {
          if (t = yc(e, t, pd)[0], e = Au(na)[0], typeof t == "object" && t !== null && typeof t.then == "function")
            try {
              var a = as(t);
            } catch (o) {
              throw o === ti ? pu : o;
            }
          else
            a = t;
          t = at();
          var l = t.queue, i = l.dispatch;
          return n !== t.memoizedState && (be.flags |= 2048, si(9, { destroy: void 0 }, vg.bind(null, l, n), null)), [a, i, e];
        }
        function vg(e, t) {
          e.action = t;
        }
        function vd(e) {
          var t = at(), n = Le;
          if (n !== null)
            return bd(t, n, e);
          at(), t = t.memoizedState, n = at();
          var a = n.queue.dispatch;
          return n.memoizedState = e, [t, a, false];
        }
        function si(e, t, n, a) {
          return e = { tag: e, create: n, deps: a, inst: t, next: null }, t = be.updateQueue, t === null && (t = Tu(), be.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e;
        }
        function xd() {
          return at().memoizedState;
        }
        function wu(e, t, n, a) {
          var l = zt();
          be.flags |= e, l.memoizedState = si(1 | t, { destroy: void 0 }, n, a === void 0 ? null : a);
        }
        function Nu(e, t, n, a) {
          var l = at();
          a = a === void 0 ? null : a;
          var i = l.memoizedState.inst;
          Le !== null && a !== null && fc(a, Le.memoizedState.deps) ? l.memoizedState = si(t, i, n, a) : (be.flags |= e, l.memoizedState = si(1 | t, i, n, a));
        }
        function Sd(e, t) {
          wu(8390656, 8, e, t);
        }
        function Sc(e, t) {
          Nu(2048, 8, e, t);
        }
        function xg(e) {
          be.flags |= 4;
          var t = be.updateQueue;
          if (t === null)
            t = Tu(), be.updateQueue = t, t.events = [e];
          else {
            var n = t.events;
            n === null ? t.events = [e] : n.push(e);
          }
        }
        function _d(e) {
          var t = at().memoizedState;
          return xg({ ref: t, nextImpl: e }), function() {
            if ((ze & 2) !== 0)
              throw Error(c(440));
            return t.impl.apply(void 0, arguments);
          };
        }
        function Td(e, t) {
          return Nu(4, 2, e, t);
        }
        function Ed(e, t) {
          return Nu(4, 4, e, t);
        }
        function Ad(e, t) {
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
          n = n != null ? n.concat([e]) : null, Nu(4, 4, Ad.bind(null, t, e), n);
        }
        function _c() {
        }
        function Nd(e, t) {
          var n = at();
          t = t === void 0 ? null : t;
          var a = n.memoizedState;
          return t !== null && fc(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e);
        }
        function jd(e, t) {
          var n = at();
          t = t === void 0 ? null : t;
          var a = n.memoizedState;
          if (t !== null && fc(t, a[1]))
            return a[0];
          if (a = e(), bl) {
            Gt(true);
            try {
              e();
            } finally {
              Gt(false);
            }
          }
          return n.memoizedState = [a, t], a;
        }
        function Tc(e, t, n) {
          return n === void 0 || (ta & 1073741824) !== 0 && (we & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = Oh(), be.lanes |= e, Ua |= e, n);
        }
        function Od(e, t, n, a) {
          return Vt(n, t) ? n : ai.current !== null ? (e = Tc(e, n, a), Vt(e, t) || (rt = true), e) : (ta & 42) === 0 || (ta & 1073741824) !== 0 && (we & 261930) === 0 ? (rt = true, e.memoizedState = n) : (e = Oh(), be.lanes |= e, Ua |= e, t);
        }
        function Rd(e, t, n, a, l) {
          var i = I.p;
          I.p = i !== 0 && 8 > i ? i : 8;
          var o = X.T, y = {};
          X.T = y, wc(e, false, t, n);
          try {
            var A = l(), D = X.S;
            if (D !== null && D(y, A), A !== null && typeof A == "object" && typeof A.then == "function") {
              var G = pg(A, a);
              ls(e, t, G, Wt(e));
            } else
              ls(e, t, a, Wt(e));
          } catch (k) {
            ls(e, t, { then: function() {
            }, status: "rejected", reason: k }, Wt());
          } finally {
            I.p = i, o !== null && y.types !== null && (o.types = y.types), X.T = o;
          }
        }
        function Sg() {
        }
        function Ec(e, t, n, a) {
          if (e.tag !== 5)
            throw Error(c(476));
          var l = Cd(e).queue;
          Rd(e, l, t, J, n === null ? Sg : function() {
            return zd(e), n(a);
          });
        }
        function Cd(e) {
          var t = e.memoizedState;
          if (t !== null)
            return t;
          t = { memoizedState: J, baseState: J, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: na, lastRenderedState: J }, next: null };
          var n = {};
          return t.next = { memoizedState: n, baseState: n, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: na, lastRenderedState: n }, next: null }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
        }
        function zd(e) {
          var t = Cd(e);
          t.next === null && (t = e.alternate.memoizedState), ls(e, t.next.queue, {}, Wt());
        }
        function Ac() {
          return Tt(Ss);
        }
        function Md() {
          return at().memoizedState;
        }
        function Ud() {
          return at().memoizedState;
        }
        function _g(e) {
          for (var t = e.return; t !== null; ) {
            switch (t.tag) {
              case 24:
              case 3:
                var n = Wt();
                e = ja(n);
                var a = Oa(t, e, n);
                a !== null && (Lt(a, t, n), Ii(a, t, n)), t = { cache: ec() }, e.payload = t;
                return;
            }
            t = t.return;
          }
        }
        function Tg(e, t, n) {
          var a = Wt();
          n = { lane: a, revertLane: 0, gesture: null, action: n, hasEagerState: false, eagerState: null, next: null }, ju(e) ? Bd(t, n) : (n = Qr(e, t, n, a), n !== null && (Lt(n, e, a), qd(n, t, a)));
        }
        function Dd(e, t, n) {
          var a = Wt();
          ls(e, t, n, a);
        }
        function ls(e, t, n, a) {
          var l = { lane: a, revertLane: 0, gesture: null, action: n, hasEagerState: false, eagerState: null, next: null };
          if (ju(e))
            Bd(t, l);
          else {
            var i = e.alternate;
            if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
              try {
                var o = t.lastRenderedState, y = i(o, n);
                if (l.hasEagerState = true, l.eagerState = y, Vt(y, o))
                  return ru(e, t, l, 0), Ge === null && uu(), false;
              } catch (A) {
              } finally {
              }
            if (n = Qr(e, t, l, a), n !== null)
              return Lt(n, e, a), qd(n, t, a), true;
          }
          return false;
        }
        function wc(e, t, n, a) {
          if (a = { lane: 2, revertLane: lo(), gesture: null, action: a, hasEagerState: false, eagerState: null, next: null }, ju(e)) {
            if (t)
              throw Error(c(479));
          } else
            t = Qr(e, n, a, 2), t !== null && Lt(t, e, 2);
        }
        function ju(e) {
          var t = e.alternate;
          return e === be || t !== null && t === be;
        }
        function Bd(e, t) {
          li = Su = true;
          var n = e.pending;
          n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
        }
        function qd(e, t, n) {
          if ((n & 4194048) !== 0) {
            var a = t.lanes;
            a &= e.pendingLanes, n |= a, t.lanes = n, Ys(e, n);
          }
        }
        var is = { readContext: Tt, use: Eu, useCallback: Ie, useContext: Ie, useEffect: Ie, useImperativeHandle: Ie, useLayoutEffect: Ie, useInsertionEffect: Ie, useMemo: Ie, useReducer: Ie, useRef: Ie, useState: Ie, useDebugValue: Ie, useDeferredValue: Ie, useTransition: Ie, useSyncExternalStore: Ie, useId: Ie, useHostTransitionStatus: Ie, useFormState: Ie, useActionState: Ie, useOptimistic: Ie, useMemoCache: Ie, useCacheRefresh: Ie };
        is.useEffectEvent = Ie;
        var Hd = { readContext: Tt, use: Eu, useCallback: function(e, t) {
          return zt().memoizedState = [e, t === void 0 ? null : t], e;
        }, useContext: Tt, useEffect: Sd, useImperativeHandle: function(e, t, n) {
          n = n != null ? n.concat([e]) : null, wu(4194308, 4, Ad.bind(null, t, e), n);
        }, useLayoutEffect: function(e, t) {
          return wu(4194308, 4, e, t);
        }, useInsertionEffect: function(e, t) {
          wu(4, 2, e, t);
        }, useMemo: function(e, t) {
          var n = zt();
          t = t === void 0 ? null : t;
          var a = e();
          if (bl) {
            Gt(true);
            try {
              e();
            } finally {
              Gt(false);
            }
          }
          return n.memoizedState = [a, t], a;
        }, useReducer: function(e, t, n) {
          var a = zt();
          if (n !== void 0) {
            var l = n(t);
            if (bl) {
              Gt(true);
              try {
                n(t);
              } finally {
                Gt(false);
              }
            }
          } else
            l = t;
          return a.memoizedState = a.baseState = l, e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: l }, a.queue = e, e = e.dispatch = Tg.bind(null, be, e), [a.memoizedState, e];
        }, useRef: function(e) {
          var t = zt();
          return e = { current: e }, t.memoizedState = e;
        }, useState: function(e) {
          e = vc(e);
          var t = e.queue, n = Dd.bind(null, be, t);
          return t.dispatch = n, [e.memoizedState, n];
        }, useDebugValue: _c, useDeferredValue: function(e, t) {
          var n = zt();
          return Tc(n, e, t);
        }, useTransition: function() {
          var e = vc(false);
          return e = Rd.bind(null, be, e.queue, true, false), zt().memoizedState = e, [false, e];
        }, useSyncExternalStore: function(e, t, n) {
          var a = be, l = zt();
          if (je) {
            if (n === void 0)
              throw Error(c(407));
            n = n();
          } else {
            if (n = t(), Ge === null)
              throw Error(c(349));
            (we & 127) !== 0 || id(a, t, n);
          }
          l.memoizedState = n;
          var i = { value: n, getSnapshot: t };
          return l.queue = i, Sd(ud.bind(null, a, i, e), [e]), a.flags |= 2048, si(9, { destroy: void 0 }, sd.bind(null, a, i, n, t), null), n;
        }, useId: function() {
          var e = zt(), t = Ge.identifierPrefix;
          if (je) {
            var n = qn, a = Bn;
            n = (a & ~(1 << 32 - Nt(a) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = _u++, 0 < n && (t += "H" + n.toString(32)), t += "_";
          } else
            n = gg++, t = "_" + t + "r_" + n.toString(32) + "_";
          return e.memoizedState = t;
        }, useHostTransitionStatus: Ac, useFormState: gd, useActionState: gd, useOptimistic: function(e) {
          var t = zt();
          t.memoizedState = t.baseState = e;
          var n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
          return t.queue = n, t = wc.bind(null, be, true, n), n.dispatch = t, [e, t];
        }, useMemoCache: gc, useCacheRefresh: function() {
          return zt().memoizedState = _g.bind(null, be);
        }, useEffectEvent: function(e) {
          var t = zt(), n = { impl: e };
          return t.memoizedState = n, function() {
            if ((ze & 2) !== 0)
              throw Error(c(440));
            return n.impl.apply(void 0, arguments);
          };
        } }, Nc = { readContext: Tt, use: Eu, useCallback: Nd, useContext: Tt, useEffect: Sc, useImperativeHandle: wd, useInsertionEffect: Td, useLayoutEffect: Ed, useMemo: jd, useReducer: Au, useRef: xd, useState: function() {
          return Au(na);
        }, useDebugValue: _c, useDeferredValue: function(e, t) {
          var n = at();
          return Od(n, Le.memoizedState, e, t);
        }, useTransition: function() {
          var e = Au(na)[0], t = at().memoizedState;
          return [typeof e == "boolean" ? e : as(e), t];
        }, useSyncExternalStore: ld, useId: Md, useHostTransitionStatus: Ac, useFormState: yd, useActionState: yd, useOptimistic: function(e, t) {
          var n = at();
          return od(n, Le, e, t);
        }, useMemoCache: gc, useCacheRefresh: Ud };
        Nc.useEffectEvent = _d;
        var Ld = { readContext: Tt, use: Eu, useCallback: Nd, useContext: Tt, useEffect: Sc, useImperativeHandle: wd, useInsertionEffect: Td, useLayoutEffect: Ed, useMemo: jd, useReducer: bc, useRef: xd, useState: function() {
          return bc(na);
        }, useDebugValue: _c, useDeferredValue: function(e, t) {
          var n = at();
          return Le === null ? Tc(n, e, t) : Od(n, Le.memoizedState, e, t);
        }, useTransition: function() {
          var e = bc(na)[0], t = at().memoizedState;
          return [typeof e == "boolean" ? e : as(e), t];
        }, useSyncExternalStore: ld, useId: Md, useHostTransitionStatus: Ac, useFormState: vd, useActionState: vd, useOptimistic: function(e, t) {
          var n = at();
          return Le !== null ? od(n, Le, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
        }, useMemoCache: gc, useCacheRefresh: Ud };
        Ld.useEffectEvent = _d;
        function jc(e, t, n, a) {
          t = e.memoizedState, n = n(a, t), n = n == null ? t : N({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
        }
        var Oc = { enqueueSetState: function(e, t, n) {
          e = e._reactInternals;
          var a = Wt(), l = ja(a);
          l.payload = t, n != null && (l.callback = n), t = Oa(e, l, a), t !== null && (Lt(t, e, a), Ii(t, e, a));
        }, enqueueReplaceState: function(e, t, n) {
          e = e._reactInternals;
          var a = Wt(), l = ja(a);
          l.tag = 1, l.payload = t, n != null && (l.callback = n), t = Oa(e, l, a), t !== null && (Lt(t, e, a), Ii(t, e, a));
        }, enqueueForceUpdate: function(e, t) {
          e = e._reactInternals;
          var n = Wt(), a = ja(n);
          a.tag = 2, t != null && (a.callback = t), t = Oa(e, a, n), t !== null && (Lt(t, e, n), Ii(t, e, n));
        } };
        function Yd(e, t, n, a, l, i, o) {
          return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, i, o) : t.prototype && t.prototype.isPureReactComponent ? !ki(n, a) || !ki(l, i) : true;
        }
        function Xd(e, t, n, a) {
          e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && Oc.enqueueReplaceState(t, t.state, null);
        }
        function vl(e, t) {
          var n = t;
          if ("ref" in t) {
            n = {};
            for (var a in t)
              a !== "ref" && (n[a] = t[a]);
          }
          if (e = e.defaultProps) {
            n === t && (n = N({}, n));
            for (var l in e)
              n[l] === void 0 && (n[l] = e[l]);
          }
          return n;
        }
        function Gd(e) {
          su(e);
        }
        function Qd(e) {
          console.error(e);
        }
        function Vd(e) {
          su(e);
        }
        function Ou(e, t) {
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
        function Rc(e, t, n) {
          return n = ja(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
            Ou(e, t);
          }, n;
        }
        function Zd(e) {
          return e = ja(e), e.tag = 3, e;
        }
        function Kd(e, t, n, a) {
          var l = n.type.getDerivedStateFromError;
          if (typeof l == "function") {
            var i = a.value;
            e.payload = function() {
              return l(i);
            }, e.callback = function() {
              kd(t, n, a);
            };
          }
          var o = n.stateNode;
          o !== null && typeof o.componentDidCatch == "function" && (e.callback = function() {
            kd(t, n, a), typeof l != "function" && (Da === null ? Da = /* @__PURE__ */ new Set([this]) : Da.add(this));
            var y = a.stack;
            this.componentDidCatch(a.value, { componentStack: y !== null ? y : "" });
          });
        }
        function Eg(e, t, n, a, l) {
          if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
            if (t = n.alternate, t !== null && Pl(t, n, l, true), n = Zt.current, n !== null) {
              switch (n.tag) {
                case 31:
                case 13:
                  return dn === null ? Xu() : n.alternate === null && et === 0 && (et = 3), n.flags &= -257, n.flags |= 65536, n.lanes = l, a === gu ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), to(e, a, l)), false;
                case 22:
                  return n.flags |= 65536, a === gu ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([a]) }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), to(e, a, l)), false;
              }
              throw Error(c(435, n.tag));
            }
            return to(e, a, l), Xu(), false;
          }
          if (je)
            return t = Zt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = l, a !== Fr && (e = Error(c(422), { cause: a }), Ji(rn(e, n)))) : (a !== Fr && (t = Error(c(423), { cause: a }), Ji(rn(t, n))), e = e.current.alternate, e.flags |= 65536, l &= -l, e.lanes |= l, a = rn(a, n), l = Rc(e.stateNode, a, l), sc(e, l), et !== 4 && (et = 2)), false;
          var i = Error(c(520), { cause: a });
          if (i = rn(i, n), hs === null ? hs = [i] : hs.push(i), et !== 4 && (et = 2), t === null)
            return true;
          a = rn(a, n), n = t;
          do {
            switch (n.tag) {
              case 3:
                return n.flags |= 65536, e = l & -l, n.lanes |= e, e = Rc(n.stateNode, a, e), sc(n, e), false;
              case 1:
                if (t = n.type, i = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Da === null || !Da.has(i))))
                  return n.flags |= 65536, l &= -l, n.lanes |= l, l = Zd(l), Kd(l, e, n, a), sc(n, l), false;
            }
            n = n.return;
          } while (n !== null);
          return false;
        }
        var Cc = Error(c(461)), rt = false;
        function Et(e, t, n, a) {
          t.child = e === null ? $f(t, null, n, a) : yl(t, e.child, n, a);
        }
        function Jd(e, t, n, a, l) {
          n = n.render;
          var i = t.ref;
          if ("ref" in a) {
            var o = {};
            for (var y in a)
              y !== "ref" && (o[y] = a[y]);
          } else
            o = a;
          return hl(t), a = dc(e, t, n, o, i, l), y = hc(), e !== null && !rt ? (mc(e, t, l), aa(e, t, l)) : (je && y && Kr(t), t.flags |= 1, Et(e, t, a, l), t.child);
        }
        function Fd(e, t, n, a, l) {
          if (e === null) {
            var i = n.type;
            return typeof i == "function" && !Vr(i) && i.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = i, Wd(e, t, i, a, l)) : (e = ou(n.type, null, a, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
          }
          if (i = e.child, !Lc(e, l)) {
            var o = i.memoizedProps;
            if (n = n.compare, n = n !== null ? n : ki, n(o, a) && e.ref === t.ref)
              return aa(e, t, l);
          }
          return t.flags |= 1, e = $n(i, a), e.ref = t.ref, e.return = t, t.child = e;
        }
        function Wd(e, t, n, a, l) {
          if (e !== null) {
            var i = e.memoizedProps;
            if (ki(i, a) && e.ref === t.ref)
              if (rt = false, t.pendingProps = a = i, Lc(e, l))
                (e.flags & 131072) !== 0 && (rt = true);
              else
                return t.lanes = e.lanes, aa(e, t, l);
          }
          return zc(e, t, n, a, l);
        }
        function $d(e, t, n, a) {
          var l = a.children, i = e !== null ? e.memoizedState : null;
          if (e === null && t.stateNode === null && (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), a.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
              if (i = i !== null ? i.baseLanes | n : n, e !== null) {
                for (a = t.child = e.child, l = 0; a !== null; )
                  l = l | a.lanes | a.childLanes, a = a.sibling;
                a = l & ~i;
              } else
                a = 0, t.child = null;
              return Pd(e, t, i, n, a);
            }
            if ((n & 536870912) !== 0)
              t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && mu(t, i !== null ? i.cachePool : null), i !== null ? ed(t, i) : rc(), td(t);
            else
              return a = t.lanes = 536870912, Pd(e, t, i !== null ? i.baseLanes | n : n, n, a);
          } else
            i !== null ? (mu(t, i.cachePool), ed(t, i), Ca(), t.memoizedState = null) : (e !== null && mu(t, null), rc(), Ca());
          return Et(e, t, l, n), t.child;
        }
        function ss(e, t) {
          return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), t.sibling;
        }
        function Pd(e, t, n, a, l) {
          var i = nc();
          return i = i === null ? null : { parent: st._currentValue, pool: i }, t.memoizedState = { baseLanes: n, cachePool: i }, e !== null && mu(t, null), rc(), td(t), e !== null && Pl(e, t, a, true), t.childLanes = l, null;
        }
        function Ru(e, t) {
          return t = zu({ mode: t.mode, children: t.children }, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
        }
        function Id(e, t, n) {
          return yl(t, e.child, null, n), e = Ru(t, t.pendingProps), e.flags |= 2, Kt(t), t.memoizedState = null, e;
        }
        function Ag(e, t, n) {
          var a = t.pendingProps, l = (t.flags & 128) !== 0;
          if (t.flags &= -129, e === null) {
            if (je) {
              if (a.mode === "hidden")
                return e = Ru(t, a), t.lanes = 536870912, ss(null, e);
              if (oc(t), (e = Je) ? (e = fm(e, fn), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = { dehydrated: e, treeContext: Ta !== null ? { id: Bn, overflow: qn } : null, retryLane: 536870912, hydrationErrors: null }, n = Bf(e), n.return = t, t.child = n, _t = t, Je = null)) : e = null, e === null)
                throw Aa(t);
              return t.lanes = 536870912, null;
            }
            return Ru(t, a);
          }
          var i = e.memoizedState;
          if (i !== null) {
            var o = i.dehydrated;
            if (oc(t), l)
              if (t.flags & 256)
                t.flags &= -257, t = Id(e, t, n);
              else if (t.memoizedState !== null)
                t.child = e.child, t.flags |= 128, t = null;
              else
                throw Error(c(558));
            else if (rt || Pl(e, t, n, false), l = (n & e.childLanes) !== 0, rt || l) {
              if (a = Ge, a !== null && (o = Xs(a, n), o !== 0 && o !== i.retryLane))
                throw i.retryLane = o, cl(e, o), Lt(a, e, o), Cc;
              Xu(), t = Id(e, t, n);
            } else
              e = i.treeContext, Je = hn(o.nextSibling), _t = t, je = true, Ea = null, fn = false, e !== null && Lf(t, e), t = Ru(t, a), t.flags |= 4096;
            return t;
          }
          return e = $n(e.child, { mode: a.mode, children: a.children }), e.ref = t.ref, t.child = e, e.return = t, e;
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
        function zc(e, t, n, a, l) {
          return hl(t), n = dc(e, t, n, a, void 0, l), a = hc(), e !== null && !rt ? (mc(e, t, l), aa(e, t, l)) : (je && a && Kr(t), t.flags |= 1, Et(e, t, n, l), t.child);
        }
        function eh(e, t, n, a, l, i) {
          return hl(t), t.updateQueue = null, n = ad(t, a, n, l), nd(e), a = hc(), e !== null && !rt ? (mc(e, t, i), aa(e, t, i)) : (je && a && Kr(t), t.flags |= 1, Et(e, t, n, i), t.child);
        }
        function th(e, t, n, a, l) {
          if (hl(t), t.stateNode === null) {
            var i = Jl, o = n.contextType;
            typeof o == "object" && o !== null && (i = Tt(o)), i = new n(a, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Oc, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = a, i.state = t.memoizedState, i.refs = {}, lc(t), o = n.contextType, i.context = typeof o == "object" && o !== null ? Tt(o) : Jl, i.state = t.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (jc(t, n, o, a), i.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (o = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), o !== i.state && Oc.enqueueReplaceState(i, i.state, null), ts(t, a, i, l), es(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = true;
          } else if (e === null) {
            i = t.stateNode;
            var y = t.memoizedProps, A = vl(n, y);
            i.props = A;
            var D = i.context, G = n.contextType;
            o = Jl, typeof G == "object" && G !== null && (o = Tt(G));
            var k = n.getDerivedStateFromProps;
            G = typeof k == "function" || typeof i.getSnapshotBeforeUpdate == "function", y = t.pendingProps !== y, G || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (y || D !== o) && Xd(t, i, a, o), Na = false;
            var q = t.memoizedState;
            i.state = q, ts(t, a, i, l), es(), D = t.memoizedState, y || q !== D || Na ? (typeof k == "function" && (jc(t, n, k, a), D = t.memoizedState), (A = Na || Yd(t, n, A, a, q, D, o)) ? (G || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = D), i.props = a, i.state = D, i.context = o, a = A) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = false);
          } else {
            i = t.stateNode, ic(e, t), o = t.memoizedProps, G = vl(n, o), i.props = G, k = t.pendingProps, q = i.context, D = n.contextType, A = Jl, typeof D == "object" && D !== null && (A = Tt(D)), y = n.getDerivedStateFromProps, (D = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (o !== k || q !== A) && Xd(t, i, a, A), Na = false, q = t.memoizedState, i.state = q, ts(t, a, i, l), es();
            var L = t.memoizedState;
            o !== k || q !== L || Na || e !== null && e.dependencies !== null && du(e.dependencies) ? (typeof y == "function" && (jc(t, n, y, a), L = t.memoizedState), (G = Na || Yd(t, n, G, a, q, L, A) || e !== null && e.dependencies !== null && du(e.dependencies)) ? (D || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, L, A), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(a, L, A)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || o === e.memoizedProps && q === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && q === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = L), i.props = a, i.state = L, i.context = A, a = G) : (typeof i.componentDidUpdate != "function" || o === e.memoizedProps && q === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && q === e.memoizedState || (t.flags |= 1024), a = false);
          }
          return i = a, Cu(e, t), a = (t.flags & 128) !== 0, i || a ? (i = t.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && a ? (t.child = yl(t, e.child, null, l), t.child = yl(t, null, n, l)) : Et(e, t, n, l), t.memoizedState = i.state, e = t.child) : e = aa(e, t, l), e;
        }
        function nh(e, t, n, a) {
          return fl(), t.flags |= 256, Et(e, t, n, a), t.child;
        }
        var Mc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
        function Uc(e) {
          return { baseLanes: e, cachePool: kf() };
        }
        function Dc(e, t, n) {
          return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Ft), e;
        }
        function ah(e, t, n) {
          var a = t.pendingProps, l = false, i = (t.flags & 128) !== 0, o;
          if ((o = i) || (o = e !== null && e.memoizedState === null ? false : (nt.current & 2) !== 0), o && (l = true, t.flags &= -129), o = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
            if (je) {
              if (l ? Ra(t) : Ca(), (e = Je) ? (e = fm(e, fn), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = { dehydrated: e, treeContext: Ta !== null ? { id: Bn, overflow: qn } : null, retryLane: 536870912, hydrationErrors: null }, n = Bf(e), n.return = t, t.child = n, _t = t, Je = null)) : e = null, e === null)
                throw Aa(t);
              return bo(e) ? t.lanes = 32 : t.lanes = 536870912, null;
            }
            var y = a.children;
            return a = a.fallback, l ? (Ca(), l = t.mode, y = zu({ mode: "hidden", children: y }, l), a = ol(a, l, n, null), y.return = t, a.return = t, y.sibling = a, t.child = y, a = t.child, a.memoizedState = Uc(n), a.childLanes = Dc(e, o, n), t.memoizedState = Mc, ss(null, a)) : (Ra(t), Bc(t, y));
          }
          var A = e.memoizedState;
          if (A !== null && (y = A.dehydrated, y !== null)) {
            if (i)
              t.flags & 256 ? (Ra(t), t.flags &= -257, t = qc(e, t, n)) : t.memoizedState !== null ? (Ca(), t.child = e.child, t.flags |= 128, t = null) : (Ca(), y = a.fallback, l = t.mode, a = zu({ mode: "visible", children: a.children }, l), y = ol(y, l, n, null), y.flags |= 2, a.return = t, y.return = t, a.sibling = y, t.child = a, yl(t, e.child, null, n), a = t.child, a.memoizedState = Uc(n), a.childLanes = Dc(e, o, n), t.memoizedState = Mc, t = ss(null, a));
            else if (Ra(t), bo(y)) {
              if (o = y.nextSibling && y.nextSibling.dataset, o)
                var D = o.dgst;
              o = D, a = Error(c(419)), a.stack = "", a.digest = o, Ji({ value: a, source: null, stack: null }), t = qc(e, t, n);
            } else if (rt || Pl(e, t, n, false), o = (n & e.childLanes) !== 0, rt || o) {
              if (o = Ge, o !== null && (a = Xs(o, n), a !== 0 && a !== A.retryLane))
                throw A.retryLane = a, cl(e, a), Lt(o, e, a), Cc;
              yo(y) || Xu(), t = qc(e, t, n);
            } else
              yo(y) ? (t.flags |= 192, t.child = e.child, t = null) : (e = A.treeContext, Je = hn(y.nextSibling), _t = t, je = true, Ea = null, fn = false, e !== null && Lf(t, e), t = Bc(t, a.children), t.flags |= 4096);
            return t;
          }
          return l ? (Ca(), y = a.fallback, l = t.mode, A = e.child, D = A.sibling, a = $n(A, { mode: "hidden", children: a.children }), a.subtreeFlags = A.subtreeFlags & 65011712, D !== null ? y = $n(D, y) : (y = ol(y, l, n, null), y.flags |= 2), y.return = t, a.return = t, a.sibling = y, t.child = a, ss(null, a), a = t.child, y = e.child.memoizedState, y === null ? y = Uc(n) : (l = y.cachePool, l !== null ? (A = st._currentValue, l = l.parent !== A ? { parent: A, pool: A } : l) : l = kf(), y = { baseLanes: y.baseLanes | n, cachePool: l }), a.memoizedState = y, a.childLanes = Dc(e, o, n), t.memoizedState = Mc, ss(e.child, a)) : (Ra(t), n = e.child, e = n.sibling, n = $n(n, { mode: "visible", children: a.children }), n.return = t, n.sibling = null, e !== null && (o = t.deletions, o === null ? (t.deletions = [e], t.flags |= 16) : o.push(e)), t.child = n, t.memoizedState = null, n);
        }
        function Bc(e, t) {
          return t = zu({ mode: "visible", children: t }, e.mode), t.return = e, e.child = t;
        }
        function zu(e, t) {
          return e = kt(22, e, null, t), e.lanes = 0, e;
        }
        function qc(e, t, n) {
          return yl(t, e.child, null, n), e = Bc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
        }
        function lh(e, t, n) {
          e.lanes |= t;
          var a = e.alternate;
          a !== null && (a.lanes |= t), Pr(e.return, t, n);
        }
        function Hc(e, t, n, a, l, i) {
          var o = e.memoizedState;
          o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: a, tail: n, tailMode: l, treeForkCount: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = a, o.tail = n, o.tailMode = l, o.treeForkCount = i);
        }
        function ih(e, t, n) {
          var a = t.pendingProps, l = a.revealOrder, i = a.tail;
          a = a.children;
          var o = nt.current, y = (o & 2) !== 0;
          if (y ? (o = o & 1 | 2, t.flags |= 128) : o &= 1, V(nt, o), Et(e, t, a, n), a = je ? Ki : 0, !y && e !== null && (e.flags & 128) !== 0)
            e:
              for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                  e.memoizedState !== null && lh(e, n, t);
                else if (e.tag === 19)
                  lh(e, n, t);
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
                e = n.alternate, e !== null && xu(e) === null && (l = n), n = n.sibling;
              n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Hc(t, false, l, n, i, a);
              break;
            case "backwards":
            case "unstable_legacy-backwards":
              for (n = null, l = t.child, t.child = null; l !== null; ) {
                if (e = l.alternate, e !== null && xu(e) === null) {
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
        function aa(e, t, n) {
          if (e !== null && (t.dependencies = e.dependencies), Ua |= t.lanes, (n & t.childLanes) === 0)
            if (e !== null) {
              if (Pl(e, t, n, false), (n & t.childLanes) === 0)
                return null;
            } else
              return null;
          if (e !== null && t.child !== e.child)
            throw Error(c(153));
          if (t.child !== null) {
            for (e = t.child, n = $n(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
              e = e.sibling, n = n.sibling = $n(e, e.pendingProps), n.return = t;
            n.sibling = null;
          }
          return t.child;
        }
        function Lc(e, t) {
          return (e.lanes & t) !== 0 ? true : (e = e.dependencies, !!(e !== null && du(e)));
        }
        function wg(e, t, n) {
          switch (t.tag) {
            case 3:
              ft(t, t.stateNode.containerInfo), wa(t, st, e.memoizedState.cache), fl();
              break;
            case 27:
            case 5:
              St(t);
              break;
            case 4:
              ft(t, t.stateNode.containerInfo);
              break;
            case 10:
              wa(t, t.type, t.memoizedProps.value);
              break;
            case 31:
              if (t.memoizedState !== null)
                return t.flags |= 128, oc(t), null;
              break;
            case 13:
              var a = t.memoizedState;
              if (a !== null)
                return a.dehydrated !== null ? (Ra(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? ah(e, t, n) : (Ra(t), e = aa(e, t, n), e !== null ? e.sibling : null);
              Ra(t);
              break;
            case 19:
              var l = (e.flags & 128) !== 0;
              if (a = (n & t.childLanes) !== 0, a || (Pl(e, t, n, false), a = (n & t.childLanes) !== 0), l) {
                if (a)
                  return ih(e, t, n);
                t.flags |= 128;
              }
              if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), V(nt, nt.current), a)
                break;
              return null;
            case 22:
              return t.lanes = 0, $d(e, t, n, t.pendingProps);
            case 24:
              wa(t, st, e.memoizedState.cache);
          }
          return aa(e, t, n);
        }
        function sh(e, t, n) {
          if (e !== null)
            if (e.memoizedProps !== t.pendingProps)
              rt = true;
            else {
              if (!Lc(e, n) && (t.flags & 128) === 0)
                return rt = false, wg(e, t, n);
              rt = (e.flags & 131072) !== 0;
            }
          else
            rt = false, je && (t.flags & 1048576) !== 0 && Hf(t, Ki, t.index);
          switch (t.lanes = 0, t.tag) {
            case 16:
              e: {
                var a = t.pendingProps;
                if (e = pl(t.elementType), t.type = e, typeof e == "function")
                  Vr(e) ? (a = vl(e, a), t.tag = 1, t = th(null, t, e, a, n)) : (t.tag = 0, t = zc(null, t, e, a, n));
                else {
                  if (e != null) {
                    var l = e.$$typeof;
                    if (l === ve) {
                      t.tag = 11, t = Jd(null, t, e, a, n);
                      break e;
                    } else if (l === fe) {
                      t.tag = 14, t = Fd(null, t, e, a, n);
                      break e;
                    }
                  }
                  throw t = Me(e) || e, Error(c(306, t, ""));
                }
              }
              return t;
            case 0:
              return zc(e, t, t.type, t.pendingProps, n);
            case 1:
              return a = t.type, l = vl(a, t.pendingProps), th(e, t, a, l, n);
            case 3:
              e: {
                if (ft(t, t.stateNode.containerInfo), e === null)
                  throw Error(c(387));
                a = t.pendingProps;
                var i = t.memoizedState;
                l = i.element, ic(e, t), ts(t, a, null, n);
                var o = t.memoizedState;
                if (a = o.cache, wa(t, st, a), a !== i.cache && Ir(t, [st], n, true), es(), a = o.element, i.isDehydrated)
                  if (i = { element: a, isDehydrated: false, cache: o.cache }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                    t = nh(e, t, a, n);
                    break e;
                  } else if (a !== l) {
                    l = rn(Error(c(424)), t), Ji(l), t = nh(e, t, a, n);
                    break e;
                  } else {
                    switch (e = t.stateNode.containerInfo, e.nodeType) {
                      case 9:
                        e = e.body;
                        break;
                      default:
                        e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                    }
                    for (Je = hn(e.firstChild), _t = t, je = true, Ea = null, fn = true, n = $f(t, null, a, n), t.child = n; n; )
                      n.flags = n.flags & -3 | 4096, n = n.sibling;
                  }
                else {
                  if (fl(), a === l) {
                    t = aa(e, t, n);
                    break e;
                  }
                  Et(e, t, a, n);
                }
                t = t.child;
              }
              return t;
            case 26:
              return Cu(e, t), e === null ? (n = ym(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : je || (n = t.type, e = t.pendingProps, a = Ju(xe.current).createElement(n), a[dt] = t, a[gt] = e, At(a, n, e), Pe(a), t.stateNode = a) : t.memoizedState = ym(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
            case 27:
              return St(t), e === null && je && (a = t.stateNode = mm(t.type, t.pendingProps, xe.current), _t = t, fn = true, l = Je, La(t.type) ? (vo = l, Je = hn(a.firstChild)) : Je = l), Et(e, t, t.pendingProps.children, n), Cu(e, t), e === null && (t.flags |= 4194304), t.child;
            case 5:
              return e === null && je && ((l = a = Je) && (a = n0(a, t.type, t.pendingProps, fn), a !== null ? (t.stateNode = a, _t = t, Je = hn(a.firstChild), fn = false, l = true) : l = false), l || Aa(t)), St(t), l = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, a = i.children, mo(l, i) ? a = null : o !== null && mo(l, o) && (t.flags |= 32), t.memoizedState !== null && (l = dc(e, t, yg, null, null, n), Ss._currentValue = l), Cu(e, t), Et(e, t, a, n), t.child;
            case 6:
              return e === null && je && ((e = n = Je) && (n = a0(n, t.pendingProps, fn), n !== null ? (t.stateNode = n, _t = t, Je = null, e = true) : e = false), e || Aa(t)), null;
            case 13:
              return ah(e, t, n);
            case 4:
              return ft(t, t.stateNode.containerInfo), a = t.pendingProps, e === null ? t.child = yl(t, null, a, n) : Et(e, t, a, n), t.child;
            case 11:
              return Jd(e, t, t.type, t.pendingProps, n);
            case 7:
              return Et(e, t, t.pendingProps, n), t.child;
            case 8:
              return Et(e, t, t.pendingProps.children, n), t.child;
            case 12:
              return Et(e, t, t.pendingProps.children, n), t.child;
            case 10:
              return a = t.pendingProps, wa(t, t.type, a.value), Et(e, t, a.children, n), t.child;
            case 9:
              return l = t.type._context, a = t.pendingProps.children, hl(t), l = Tt(l), a = a(l), t.flags |= 1, Et(e, t, a, n), t.child;
            case 14:
              return Fd(e, t, t.type, t.pendingProps, n);
            case 15:
              return Wd(e, t, t.type, t.pendingProps, n);
            case 19:
              return ih(e, t, n);
            case 31:
              return Ag(e, t, n);
            case 22:
              return $d(e, t, n, t.pendingProps);
            case 24:
              return hl(t), a = Tt(st), e === null ? (l = nc(), l === null && (l = Ge, i = ec(), l.pooledCache = i, i.refCount++, i !== null && (l.pooledCacheLanes |= n), l = i), t.memoizedState = { parent: a, cache: l }, lc(t), wa(t, st, l)) : ((e.lanes & n) !== 0 && (ic(e, t), ts(t, null, null, n), es()), l = e.memoizedState, i = t.memoizedState, l.parent !== a ? (l = { parent: a, cache: a }, t.memoizedState = l, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = l), wa(t, st, a)) : (a = i.cache, wa(t, st, a), a !== l.cache && Ir(t, [st], n, true))), Et(e, t, t.pendingProps.children, n), t.child;
            case 29:
              throw t.pendingProps;
          }
          throw Error(c(156, t.tag));
        }
        function la(e) {
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
                throw gl = gu, ac;
          } else
            e.flags &= -16777217;
        }
        function uh(e, t) {
          if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
            e.flags &= -16777217;
          else if (e.flags |= 16777216, !_m(t))
            if (Mh())
              e.flags |= 8192;
            else
              throw gl = gu, ac;
        }
        function Mu(e, t) {
          t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Hs() : 536870912, e.lanes |= t, oi |= t);
        }
        function us(e, t) {
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
        function Fe(e) {
          var t = e.alternate !== null && e.alternate.child === e.child, n = 0, a = 0;
          if (t)
            for (var l = e.child; l !== null; )
              n |= l.lanes | l.childLanes, a |= l.subtreeFlags & 65011712, a |= l.flags & 65011712, l.return = e, l = l.sibling;
          else
            for (l = e.child; l !== null; )
              n |= l.lanes | l.childLanes, a |= l.subtreeFlags, a |= l.flags, l.return = e, l = l.sibling;
          return e.subtreeFlags |= a, e.childLanes = n, t;
        }
        function Ng(e, t, n) {
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
              return Fe(t), null;
            case 1:
              return Fe(t), null;
            case 3:
              return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), ea(st), Ze(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && ($l(t) ? la(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Wr())), Fe(t), null;
            case 26:
              var l = t.type, i = t.memoizedState;
              return e === null ? (la(t), i !== null ? (Fe(t), uh(t, i)) : (Fe(t), Yc(t, l, null, a, n))) : i ? i !== e.memoizedState ? (la(t), Fe(t), uh(t, i)) : (Fe(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && la(t), Fe(t), Yc(t, l, e, a, n)), null;
            case 27:
              if (pa(t), n = xe.current, l = t.type, e !== null && t.stateNode != null)
                e.memoizedProps !== a && la(t);
              else {
                if (!a) {
                  if (t.stateNode === null)
                    throw Error(c(166));
                  return Fe(t), null;
                }
                e = K.current, $l(t) ? Yf(t) : (e = mm(l, a, n), t.stateNode = e, la(t));
              }
              return Fe(t), null;
            case 5:
              if (pa(t), l = t.type, e !== null && t.stateNode != null)
                e.memoizedProps !== a && la(t);
              else {
                if (!a) {
                  if (t.stateNode === null)
                    throw Error(c(166));
                  return Fe(t), null;
                }
                if (i = K.current, $l(t))
                  Yf(t);
                else {
                  var o = Ju(xe.current);
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
                  i[dt] = t, i[gt] = a;
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
                  a && la(t);
                }
              }
              return Fe(t), Yc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
            case 6:
              if (e && t.stateNode != null)
                e.memoizedProps !== a && la(t);
              else {
                if (typeof a != "string" && t.stateNode === null)
                  throw Error(c(166));
                if (e = xe.current, $l(t)) {
                  if (e = t.stateNode, n = t.memoizedProps, a = null, l = _t, l !== null)
                    switch (l.tag) {
                      case 27:
                      case 5:
                        a = l.memoizedProps;
                    }
                  e[dt] = t, e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === true || am(e.nodeValue, n)), e || Aa(t, true);
                } else
                  e = Ju(e).createTextNode(a), e[dt] = t, t.stateNode = e;
              }
              return Fe(t), null;
            case 31:
              if (n = t.memoizedState, e === null || e.memoizedState !== null) {
                if (a = $l(t), n !== null) {
                  if (e === null) {
                    if (!a)
                      throw Error(c(318));
                    if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e)
                      throw Error(c(557));
                    e[dt] = t;
                  } else
                    fl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                  Fe(t), e = false;
                } else
                  n = Wr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = true;
                if (!e)
                  return t.flags & 256 ? (Kt(t), t) : (Kt(t), null);
                if ((t.flags & 128) !== 0)
                  throw Error(c(558));
              }
              return Fe(t), null;
            case 13:
              if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (l = $l(t), a !== null && a.dehydrated !== null) {
                  if (e === null) {
                    if (!l)
                      throw Error(c(318));
                    if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l)
                      throw Error(c(317));
                    l[dt] = t;
                  } else
                    fl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                  Fe(t), l = false;
                } else
                  l = Wr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), l = true;
                if (!l)
                  return t.flags & 256 ? (Kt(t), t) : (Kt(t), null);
              }
              return Kt(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = a !== null, e = e !== null && e.memoizedState !== null, n && (a = t.child, l = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (l = a.alternate.memoizedState.cachePool.pool), i = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool), i !== l && (a.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), Mu(t, t.updateQueue), Fe(t), null);
            case 4:
              return Ze(), e === null && ro(t.stateNode.containerInfo), Fe(t), null;
            case 10:
              return ea(t.type), Fe(t), null;
            case 19:
              if (B(nt), a = t.memoizedState, a === null)
                return Fe(t), null;
              if (l = (t.flags & 128) !== 0, i = a.rendering, i === null)
                if (l)
                  us(a, false);
                else {
                  if (et !== 0 || e !== null && (e.flags & 128) !== 0)
                    for (e = t.child; e !== null; ) {
                      if (i = xu(e), i !== null) {
                        for (t.flags |= 128, us(a, false), e = i.updateQueue, t.updateQueue = e, Mu(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                          Df(n, e), n = n.sibling;
                        return V(nt, nt.current & 1 | 2), je && Pn(t, a.treeForkCount), t.child;
                      }
                      e = e.sibling;
                    }
                  a.tail !== null && Ot() > Hu && (t.flags |= 128, l = true, us(a, false), t.lanes = 4194304);
                }
              else {
                if (!l)
                  if (e = xu(i), e !== null) {
                    if (t.flags |= 128, l = true, e = e.updateQueue, t.updateQueue = e, Mu(t, e), us(a, true), a.tail === null && a.tailMode === "hidden" && !i.alternate && !je)
                      return Fe(t), null;
                  } else
                    2 * Ot() - a.renderingStartTime > Hu && n !== 536870912 && (t.flags |= 128, l = true, us(a, false), t.lanes = 4194304);
                a.isBackwards ? (i.sibling = t.child, t.child = i) : (e = a.last, e !== null ? e.sibling = i : t.child = i, a.last = i);
              }
              return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = Ot(), e.sibling = null, n = nt.current, V(nt, l ? n & 1 | 2 : n & 1), je && Pn(t, a.treeForkCount), e) : (Fe(t), null);
            case 22:
            case 23:
              return Kt(t), cc(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Fe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Fe(t), n = t.updateQueue, n !== null && Mu(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), e !== null && B(ml), null;
            case 24:
              return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), ea(st), Fe(t), null;
            case 25:
              return null;
            case 30:
              return null;
          }
          throw Error(c(156, t.tag));
        }
        function jg(e, t) {
          switch (Jr(t), t.tag) {
            case 1:
              return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
              return ea(st), Ze(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
            case 26:
            case 27:
            case 5:
              return pa(t), null;
            case 31:
              if (t.memoizedState !== null) {
                if (Kt(t), t.alternate === null)
                  throw Error(c(340));
                fl();
              }
              return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 13:
              if (Kt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                  throw Error(c(340));
                fl();
              }
              return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
              return B(nt), null;
            case 4:
              return Ze(), null;
            case 10:
              return ea(t.type), null;
            case 22:
            case 23:
              return Kt(t), cc(), e !== null && B(ml), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 24:
              return ea(st), null;
            case 25:
              return null;
            default:
              return null;
          }
        }
        function rh(e, t) {
          switch (Jr(t), t.tag) {
            case 3:
              ea(st), Ze();
              break;
            case 26:
            case 27:
            case 5:
              pa(t);
              break;
            case 4:
              Ze();
              break;
            case 31:
              t.memoizedState !== null && Kt(t);
              break;
            case 13:
              Kt(t);
              break;
            case 19:
              B(nt);
              break;
            case 10:
              ea(t.type);
              break;
            case 22:
            case 23:
              Kt(t), cc(), e !== null && B(ml);
              break;
            case 24:
              ea(st);
          }
        }
        function rs(e, t) {
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
          } catch (y) {
            qe(t, t.return, y);
          }
        }
        function za(e, t, n) {
          try {
            var a = t.updateQueue, l = a !== null ? a.lastEffect : null;
            if (l !== null) {
              var i = l.next;
              a = i;
              do {
                if ((a.tag & e) === e) {
                  var o = a.inst, y = o.destroy;
                  if (y !== void 0) {
                    o.destroy = void 0, l = t;
                    var A = n, D = y;
                    try {
                      D();
                    } catch (G) {
                      qe(l, A, G);
                    }
                  }
                }
                a = a.next;
              } while (a !== i);
            }
          } catch (G) {
            qe(t, t.return, G);
          }
        }
        function ch(e) {
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
        function oh(e, t, n) {
          n.props = vl(e.type, e.memoizedProps), n.state = e.memoizedState;
          try {
            n.componentWillUnmount();
          } catch (a) {
            qe(e, t, a);
          }
        }
        function cs(e, t) {
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
        function Hn(e, t) {
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
            qe(e, e.return, l);
          }
        }
        function Xc(e, t, n) {
          try {
            var a = e.stateNode;
            Wg(a, e.type, n, t), a[gt] = t;
          } catch (l) {
            qe(e, e.return, l);
          }
        }
        function dh(e) {
          return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && La(e.type) || e.tag === 4;
        }
        function Gc(e) {
          e:
            for (; ; ) {
              for (; e.sibling === null; ) {
                if (e.return === null || dh(e.return))
                  return null;
                e = e.return;
              }
              for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if (e.tag === 27 && La(e.type) || e.flags & 2 || e.child === null || e.tag === 4)
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
            e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = en));
          else if (a !== 4 && (a === 27 && La(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
            for (Qc(e, t, n), e = e.sibling; e !== null; )
              Qc(e, t, n), e = e.sibling;
        }
        function Uu(e, t, n) {
          var a = e.tag;
          if (a === 5 || a === 6)
            e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (a !== 4 && (a === 27 && La(e.type) && (n = e.stateNode), e = e.child, e !== null))
            for (Uu(e, t, n), e = e.sibling; e !== null; )
              Uu(e, t, n), e = e.sibling;
        }
        function hh(e) {
          var t = e.stateNode, n = e.memoizedProps;
          try {
            for (var a = e.type, l = t.attributes; l.length; )
              t.removeAttributeNode(l[0]);
            At(t, a, n), t[dt] = e, t[gt] = n;
          } catch (i) {
            qe(e, e.return, i);
          }
        }
        var ia = false, ct = false, Vc = false, mh = typeof WeakSet == "function" ? WeakSet : Set, vt = null;
        function Og(e, t) {
          if (e = e.containerInfo, fo = tr, e = wf(e), qr(e)) {
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
                  } catch (re) {
                    n = null;
                    break e;
                  }
                  var o = 0, y = -1, A = -1, D = 0, G = 0, k = e, q = null;
                  t:
                    for (; ; ) {
                      for (var L; k !== n || l !== 0 && k.nodeType !== 3 || (y = o + l), k !== i || a !== 0 && k.nodeType !== 3 || (A = o + a), k.nodeType === 3 && (o += k.nodeValue.length), (L = k.firstChild) !== null; )
                        q = k, k = L;
                      for (; ; ) {
                        if (k === e)
                          break t;
                        if (q === n && ++D === l && (y = o), q === i && ++G === a && (A = o), (L = k.nextSibling) !== null)
                          break;
                        k = q, q = k.parentNode;
                      }
                      k = L;
                    }
                  n = y === -1 || A === -1 ? null : { start: y, end: A };
                } else
                  n = null;
              }
            n = n || { start: 0, end: 0 };
          } else
            n = null;
          for (ho = { focusedElem: e, selectionRange: n }, tr = false, vt = t; vt !== null; )
            if (t = vt, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
              e.return = t, vt = e;
            else
              for (; vt !== null; ) {
                switch (t = vt, i = t.alternate, e = t.flags, t.tag) {
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
                        var ne = vl(n.type, l);
                        e = a.getSnapshotBeforeUpdate(ne, i), a.__reactInternalSnapshotBeforeUpdate = e;
                      } catch (re) {
                        qe(n, n.return, re);
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
                  e.return = t.return, vt = e;
                  break;
                }
                vt = t.return;
              }
        }
        function ph(e, t, n) {
          var a = n.flags;
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              ua(e, n), a & 4 && rs(5, n);
              break;
            case 1:
              if (ua(e, n), a & 4)
                if (e = n.stateNode, t === null)
                  try {
                    e.componentDidMount();
                  } catch (o) {
                    qe(n, n.return, o);
                  }
                else {
                  var l = vl(n.type, t.memoizedProps);
                  t = t.memoizedState;
                  try {
                    e.componentDidUpdate(l, t, e.__reactInternalSnapshotBeforeUpdate);
                  } catch (o) {
                    qe(n, n.return, o);
                  }
                }
              a & 64 && ch(n), a & 512 && cs(n, n.return);
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
                } catch (o) {
                  qe(n, n.return, o);
                }
              }
              break;
            case 27:
              t === null && a & 4 && hh(n);
            case 26:
            case 5:
              ua(e, n), t === null && a & 4 && fh(n), a & 512 && cs(n, n.return);
              break;
            case 12:
              ua(e, n);
              break;
            case 31:
              ua(e, n), a & 4 && bh(e, n);
              break;
            case 13:
              ua(e, n), a & 4 && vh(e, n), a & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Hg.bind(null, n), l0(e, n))));
              break;
            case 22:
              if (a = n.memoizedState !== null || ia, !a) {
                t = t !== null && t.memoizedState !== null || ct, l = ia;
                var i = ct;
                ia = a, (ct = t) && !i ? ra(e, n, (n.subtreeFlags & 8772) !== 0) : ua(e, n), ia = l, ct = i;
              }
              break;
            case 30:
              break;
            default:
              ua(e, n);
          }
        }
        function gh(e) {
          var t = e.alternate;
          t !== null && (e.alternate = null, gh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && zi(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
        }
        var $e = null, Dt = false;
        function sa(e, t, n) {
          for (n = n.child; n !== null; )
            yh(e, t, n), n = n.sibling;
        }
        function yh(e, t, n) {
          if (Rt && typeof Rt.onCommitFiberUnmount == "function")
            try {
              Rt.onCommitFiberUnmount(Fa, n);
            } catch (i) {
            }
          switch (n.tag) {
            case 26:
              ct || Hn(n, t), sa(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
              break;
            case 27:
              ct || Hn(n, t);
              var a = $e, l = Dt;
              La(n.type) && ($e = n.stateNode, Dt = false), sa(e, t, n), bs(n.stateNode), $e = a, Dt = l;
              break;
            case 5:
              ct || Hn(n, t);
            case 6:
              if (a = $e, l = Dt, $e = null, sa(e, t, n), $e = a, Dt = l, $e !== null)
                if (Dt)
                  try {
                    ($e.nodeType === 9 ? $e.body : $e.nodeName === "HTML" ? $e.ownerDocument.body : $e).removeChild(n.stateNode);
                  } catch (i) {
                    qe(n, t, i);
                  }
                else
                  try {
                    $e.removeChild(n.stateNode);
                  } catch (i) {
                    qe(n, t, i);
                  }
              break;
            case 18:
              $e !== null && (Dt ? (e = $e, cm(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), bi(e)) : cm($e, n.stateNode));
              break;
            case 4:
              a = $e, l = Dt, $e = n.stateNode.containerInfo, Dt = true, sa(e, t, n), $e = a, Dt = l;
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              za(2, n, t), ct || za(4, n, t), sa(e, t, n);
              break;
            case 1:
              ct || (Hn(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function" && oh(n, t, a)), sa(e, t, n);
              break;
            case 21:
              sa(e, t, n);
              break;
            case 22:
              ct = (a = ct) || n.memoizedState !== null, sa(e, t, n), ct = a;
              break;
            default:
              sa(e, t, n);
          }
        }
        function bh(e, t) {
          if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
            e = e.dehydrated;
            try {
              bi(e);
            } catch (n) {
              qe(t, t.return, n);
            }
          }
        }
        function vh(e, t) {
          if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
            try {
              bi(e);
            } catch (n) {
              qe(t, t.return, n);
            }
        }
        function Rg(e) {
          switch (e.tag) {
            case 31:
            case 13:
            case 19:
              var t = e.stateNode;
              return t === null && (t = e.stateNode = new mh()), t;
            case 22:
              return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new mh()), t;
            default:
              throw Error(c(435, e.tag));
          }
        }
        function Du(e, t) {
          var n = Rg(e);
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
              var l = n[a], i = e, o = t, y = o;
              e:
                for (; y !== null; ) {
                  switch (y.tag) {
                    case 27:
                      if (La(y.type)) {
                        $e = y.stateNode, Dt = false;
                        break e;
                      }
                      break;
                    case 5:
                      $e = y.stateNode, Dt = false;
                      break e;
                    case 3:
                    case 4:
                      $e = y.stateNode.containerInfo, Dt = true;
                      break e;
                  }
                  y = y.return;
                }
              if ($e === null)
                throw Error(c(160));
              yh(i, o, l), $e = null, Dt = false, i = l.alternate, i !== null && (i.return = null), l.return = null;
            }
          if (t.subtreeFlags & 13886)
            for (t = t.child; t !== null; )
              xh(t, e), t = t.sibling;
        }
        var vn = null;
        function xh(e, t) {
          var n = e.alternate, a = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              Bt(t, e), qt(e), a & 4 && (za(3, e, e.return), rs(3, e), za(5, e, e.return));
              break;
            case 1:
              Bt(t, e), qt(e), a & 512 && (ct || n === null || Hn(n, n.return)), a & 64 && ia && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
              break;
            case 26:
              var l = vn;
              if (Bt(t, e), qt(e), a & 512 && (ct || n === null || Hn(n, n.return)), a & 4) {
                var i = n !== null ? n.memoizedState : null;
                if (a = e.memoizedState, n === null)
                  if (a === null)
                    if (e.stateNode === null) {
                      e: {
                        a = e.type, n = e.memoizedProps, l = l.ownerDocument || l;
                        t:
                          switch (a) {
                            case "title":
                              i = l.getElementsByTagName("title")[0], (!i || i[Rn] || i[dt] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = l.createElement(a), l.head.insertBefore(i, l.querySelector("head > title"))), At(i, a, n), i[dt] = e, Pe(i), a = i;
                              break e;
                            case "link":
                              var o = xm("link", "href", l).get(a + (n.href || ""));
                              if (o) {
                                for (var y = 0; y < o.length; y++)
                                  if (i = o[y], i.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && i.getAttribute("rel") === (n.rel == null ? null : n.rel) && i.getAttribute("title") === (n.title == null ? null : n.title) && i.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                                    o.splice(y, 1);
                                    break t;
                                  }
                              }
                              i = l.createElement(a), At(i, a, n), l.head.appendChild(i);
                              break;
                            case "meta":
                              if (o = xm("meta", "content", l).get(a + (n.content || ""))) {
                                for (y = 0; y < o.length; y++)
                                  if (i = o[y], i.getAttribute("content") === (n.content == null ? null : "" + n.content) && i.getAttribute("name") === (n.name == null ? null : n.name) && i.getAttribute("property") === (n.property == null ? null : n.property) && i.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && i.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                                    o.splice(y, 1);
                                    break t;
                                  }
                              }
                              i = l.createElement(a), At(i, a, n), l.head.appendChild(i);
                              break;
                            default:
                              throw Error(c(468, a));
                          }
                        i[dt] = e, Pe(i), a = i;
                      }
                      e.stateNode = a;
                    } else
                      Sm(l, e.type, e.stateNode);
                  else
                    e.stateNode = vm(l, a, e.memoizedProps);
                else
                  i !== a ? (i === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : i.count--, a === null ? Sm(l, e.type, e.stateNode) : vm(l, a, e.memoizedProps)) : a === null && e.stateNode !== null && Xc(e, e.memoizedProps, n.memoizedProps);
              }
              break;
            case 27:
              Bt(t, e), qt(e), a & 512 && (ct || n === null || Hn(n, n.return)), n !== null && a & 4 && Xc(e, e.memoizedProps, n.memoizedProps);
              break;
            case 5:
              if (Bt(t, e), qt(e), a & 512 && (ct || n === null || Hn(n, n.return)), e.flags & 32) {
                l = e.stateNode;
                try {
                  kn(l, "");
                } catch (ne) {
                  qe(e, e.return, ne);
                }
              }
              a & 4 && e.stateNode != null && (l = e.memoizedProps, Xc(e, l, n !== null ? n.memoizedProps : l)), a & 1024 && (Vc = true);
              break;
            case 6:
              if (Bt(t, e), qt(e), a & 4) {
                if (e.stateNode === null)
                  throw Error(c(162));
                a = e.memoizedProps, n = e.stateNode;
                try {
                  n.nodeValue = a;
                } catch (ne) {
                  qe(e, e.return, ne);
                }
              }
              break;
            case 3:
              if ($u = null, l = vn, vn = Fu(t.containerInfo), Bt(t, e), vn = l, qt(e), a & 4 && n !== null && n.memoizedState.isDehydrated)
                try {
                  bi(t.containerInfo);
                } catch (ne) {
                  qe(e, e.return, ne);
                }
              Vc && (Vc = false, Sh(e));
              break;
            case 4:
              a = vn, vn = Fu(e.stateNode.containerInfo), Bt(t, e), qt(e), vn = a;
              break;
            case 12:
              Bt(t, e), qt(e);
              break;
            case 31:
              Bt(t, e), qt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Du(e, a)));
              break;
            case 13:
              Bt(t, e), qt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (qu = Ot()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Du(e, a)));
              break;
            case 22:
              l = e.memoizedState !== null;
              var A = n !== null && n.memoizedState !== null, D = ia, G = ct;
              if (ia = D || l, ct = G || A, Bt(t, e), ct = G, ia = D, qt(e), a & 8192)
                e:
                  for (t = e.stateNode, t._visibility = l ? t._visibility & -2 : t._visibility | 1, l && (n === null || A || ia || ct || xl(e)), n = null, t = e; ; ) {
                    if (t.tag === 5 || t.tag === 26) {
                      if (n === null) {
                        A = n = t;
                        try {
                          if (i = A.stateNode, l)
                            o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none";
                          else {
                            y = A.stateNode;
                            var k = A.memoizedProps.style, q = k != null && k.hasOwnProperty("display") ? k.display : null;
                            y.style.display = q == null || typeof q == "boolean" ? "" : ("" + q).trim();
                          }
                        } catch (ne) {
                          qe(A, A.return, ne);
                        }
                      }
                    } else if (t.tag === 6) {
                      if (n === null) {
                        A = t;
                        try {
                          A.stateNode.nodeValue = l ? "" : A.memoizedProps;
                        } catch (ne) {
                          qe(A, A.return, ne);
                        }
                      }
                    } else if (t.tag === 18) {
                      if (n === null) {
                        A = t;
                        try {
                          var L = A.stateNode;
                          l ? om(L, true) : om(A.stateNode, false);
                        } catch (ne) {
                          qe(A, A.return, ne);
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
              a & 4 && (a = e.updateQueue, a !== null && (n = a.retryQueue, n !== null && (a.retryQueue = null, Du(e, n))));
              break;
            case 19:
              Bt(t, e), qt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Du(e, a)));
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
                if (dh(a)) {
                  n = a;
                  break;
                }
                a = a.return;
              }
              if (n == null)
                throw Error(c(160));
              switch (n.tag) {
                case 27:
                  var l = n.stateNode, i = Gc(e);
                  Uu(e, i, l);
                  break;
                case 5:
                  var o = n.stateNode;
                  n.flags & 32 && (kn(o, ""), n.flags &= -33);
                  var y = Gc(e);
                  Uu(e, y, o);
                  break;
                case 3:
                case 4:
                  var A = n.stateNode.containerInfo, D = Gc(e);
                  Qc(e, D, A);
                  break;
                default:
                  throw Error(c(161));
              }
            } catch (G) {
              qe(e, e.return, G);
            }
            e.flags &= -3;
          }
          t & 4096 && (e.flags &= -4097);
        }
        function Sh(e) {
          if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null; ) {
              var t = e;
              Sh(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
            }
        }
        function ua(e, t) {
          if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null; )
              ph(e, t.alternate, t), t = t.sibling;
        }
        function xl(e) {
          for (e = e.child; e !== null; ) {
            var t = e;
            switch (t.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                za(4, t, t.return), xl(t);
                break;
              case 1:
                Hn(t, t.return);
                var n = t.stateNode;
                typeof n.componentWillUnmount == "function" && oh(t, t.return, n), xl(t);
                break;
              case 27:
                bs(t.stateNode);
              case 26:
              case 5:
                Hn(t, t.return), xl(t);
                break;
              case 22:
                t.memoizedState === null && xl(t);
                break;
              case 30:
                xl(t);
                break;
              default:
                xl(t);
            }
            e = e.sibling;
          }
        }
        function ra(e, t, n) {
          for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
            var a = t.alternate, l = e, i = t, o = i.flags;
            switch (i.tag) {
              case 0:
              case 11:
              case 15:
                ra(l, i, n), rs(4, i);
                break;
              case 1:
                if (ra(l, i, n), a = i, l = a.stateNode, typeof l.componentDidMount == "function")
                  try {
                    l.componentDidMount();
                  } catch (D) {
                    qe(a, a.return, D);
                  }
                if (a = i, l = a.updateQueue, l !== null) {
                  var y = a.stateNode;
                  try {
                    var A = l.shared.hiddenCallbacks;
                    if (A !== null)
                      for (l.shared.hiddenCallbacks = null, l = 0; l < A.length; l++)
                        Pf(A[l], y);
                  } catch (D) {
                    qe(a, a.return, D);
                  }
                }
                n && o & 64 && ch(i), cs(i, i.return);
                break;
              case 27:
                hh(i);
              case 26:
              case 5:
                ra(l, i, n), n && a === null && o & 4 && fh(i), cs(i, i.return);
                break;
              case 12:
                ra(l, i, n);
                break;
              case 31:
                ra(l, i, n), n && o & 4 && bh(l, i);
                break;
              case 13:
                ra(l, i, n), n && o & 4 && vh(l, i);
                break;
              case 22:
                i.memoizedState === null && ra(l, i, n), cs(i, i.return);
                break;
              case 30:
                break;
              default:
                ra(l, i, n);
            }
            t = t.sibling;
          }
        }
        function kc(e, t) {
          var n = null;
          e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Fi(n));
        }
        function Zc(e, t) {
          e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Fi(e));
        }
        function xn(e, t, n, a) {
          if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
              _h(e, t, n, a), t = t.sibling;
        }
        function _h(e, t, n, a) {
          var l = t.flags;
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              xn(e, t, n, a), l & 2048 && rs(9, t);
              break;
            case 1:
              xn(e, t, n, a);
              break;
            case 3:
              xn(e, t, n, a), l & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Fi(e)));
              break;
            case 12:
              if (l & 2048) {
                xn(e, t, n, a), e = t.stateNode;
                try {
                  var i = t.memoizedProps, o = i.id, y = i.onPostCommit;
                  typeof y == "function" && y(o, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
                } catch (A) {
                  qe(t, t.return, A);
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
              i = t.stateNode, o = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? xn(e, t, n, a) : os(e, t) : i._visibility & 2 ? xn(e, t, n, a) : (i._visibility |= 2, ui(e, t, n, a, (t.subtreeFlags & 10256) !== 0 || false)), l & 2048 && kc(o, t);
              break;
            case 24:
              xn(e, t, n, a), l & 2048 && Zc(t.alternate, t);
              break;
            default:
              xn(e, t, n, a);
          }
        }
        function ui(e, t, n, a, l) {
          for (l = l && ((t.subtreeFlags & 10256) !== 0 || false), t = t.child; t !== null; ) {
            var i = e, o = t, y = n, A = a, D = o.flags;
            switch (o.tag) {
              case 0:
              case 11:
              case 15:
                ui(i, o, y, A, l), rs(8, o);
                break;
              case 23:
                break;
              case 22:
                var G = o.stateNode;
                o.memoizedState !== null ? G._visibility & 2 ? ui(i, o, y, A, l) : os(i, o) : (G._visibility |= 2, ui(i, o, y, A, l)), l && D & 2048 && kc(o.alternate, o);
                break;
              case 24:
                ui(i, o, y, A, l), l && D & 2048 && Zc(o.alternate, o);
                break;
              default:
                ui(i, o, y, A, l);
            }
            t = t.sibling;
          }
        }
        function os(e, t) {
          if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) {
              var n = e, a = t, l = a.flags;
              switch (a.tag) {
                case 22:
                  os(n, a), l & 2048 && kc(a.alternate, a);
                  break;
                case 24:
                  os(n, a), l & 2048 && Zc(a.alternate, a);
                  break;
                default:
                  os(n, a);
              }
              t = t.sibling;
            }
        }
        var fs = 8192;
        function ri(e, t, n) {
          if (e.subtreeFlags & fs)
            for (e = e.child; e !== null; )
              Th(e, t, n), e = e.sibling;
        }
        function Th(e, t, n) {
          switch (e.tag) {
            case 26:
              ri(e, t, n), e.flags & fs && e.memoizedState !== null && g0(n, vn, e.memoizedState, e.memoizedProps);
              break;
            case 5:
              ri(e, t, n);
              break;
            case 3:
            case 4:
              var a = vn;
              vn = Fu(e.stateNode.containerInfo), ri(e, t, n), vn = a;
              break;
            case 22:
              e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = fs, fs = 16777216, ri(e, t, n), fs = a) : ri(e, t, n));
              break;
            default:
              ri(e, t, n);
          }
        }
        function Eh(e) {
          var t = e.alternate;
          if (t !== null && (e = t.child, e !== null)) {
            t.child = null;
            do
              t = e.sibling, e.sibling = null, e = t;
            while (e !== null);
          }
        }
        function ds(e) {
          var t = e.deletions;
          if ((e.flags & 16) !== 0) {
            if (t !== null)
              for (var n = 0; n < t.length; n++) {
                var a = t[n];
                vt = a, wh(a, e);
              }
            Eh(e);
          }
          if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
              Ah(e), e = e.sibling;
        }
        function Ah(e) {
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              ds(e), e.flags & 2048 && za(9, e, e.return);
              break;
            case 3:
              ds(e);
              break;
            case 12:
              ds(e);
              break;
            case 22:
              var t = e.stateNode;
              e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Bu(e)) : ds(e);
              break;
            default:
              ds(e);
          }
        }
        function Bu(e) {
          var t = e.deletions;
          if ((e.flags & 16) !== 0) {
            if (t !== null)
              for (var n = 0; n < t.length; n++) {
                var a = t[n];
                vt = a, wh(a, e);
              }
            Eh(e);
          }
          for (e = e.child; e !== null; ) {
            switch (t = e, t.tag) {
              case 0:
              case 11:
              case 15:
                za(8, t, t.return), Bu(t);
                break;
              case 22:
                n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Bu(t));
                break;
              default:
                Bu(t);
            }
            e = e.sibling;
          }
        }
        function wh(e, t) {
          for (; vt !== null; ) {
            var n = vt;
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                za(8, n, t);
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
              a.return = n, vt = a;
            else
              e:
                for (n = e; vt !== null; ) {
                  a = vt;
                  var l = a.sibling, i = a.return;
                  if (gh(a), a === n) {
                    vt = null;
                    break e;
                  }
                  if (l !== null) {
                    l.return = i, vt = l;
                    break e;
                  }
                  vt = i;
                }
          }
        }
        var Cg = { getCacheForType: function(e) {
          var t = Tt(st), n = t.data.get(e);
          return n === void 0 && (n = e(), t.data.set(e, n)), n;
        }, cacheSignal: function() {
          return Tt(st).controller.signal;
        } }, zg = typeof WeakMap == "function" ? WeakMap : Map, ze = 0, Ge = null, Ee = null, we = 0, Be = 0, Jt = null, Ma = false, ci = false, Kc = false, ca = 0, et = 0, Ua = 0, Sl = 0, Jc = 0, Ft = 0, oi = 0, hs = null, Ht = null, Fc = false, qu = 0, Nh = 0, Hu = 1 / 0, Lu = null, Da = null, mt = 0, Ba = null, fi = null, oa = 0, Wc = 0, $c = null, jh = null, ms = 0, Pc = null;
        function Wt() {
          return (ze & 2) !== 0 && we !== 0 ? we & -we : X.T !== null ? lo() : Gs();
        }
        function Oh() {
          if (Ft === 0)
            if ((we & 536870912) === 0 || je) {
              var e = jl;
              jl <<= 1, (jl & 3932160) === 0 && (jl = 262144), Ft = e;
            } else
              Ft = 536870912;
          return e = Zt.current, e !== null && (e.flags |= 32), Ft;
        }
        function Lt(e, t, n) {
          (e === Ge && (Be === 2 || Be === 9) || e.cancelPendingCommit !== null) && (di(e, 0), qa(e, we, Ft, false)), Gn(e, n), ((ze & 2) === 0 || e !== Ge) && (e === Ge && ((ze & 2) === 0 && (Sl |= n), et === 4 && qa(e, we, Ft, false)), Ln(e));
        }
        function Rh(e, t, n) {
          if ((ze & 6) !== 0)
            throw Error(c(327));
          var a = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Pa(e, t), l = a ? Dg(e, t) : eo(e, t, true), i = a;
          do {
            if (l === 0) {
              ci && !a && qa(e, t, 0, false);
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
                    var y = e;
                    l = hs;
                    var A = y.current.memoizedState.isDehydrated;
                    if (A && (di(y, o).flags |= 256), o = eo(y, o, false), o !== 2) {
                      if (Kc && !A) {
                        y.errorRecoveryDisabledLanes |= i, Sl |= i, l = 4;
                        break e;
                      }
                      i = Ht, Ht = l, i !== null && (Ht === null ? Ht = i : Ht.push.apply(Ht, i));
                    }
                    l = o;
                  }
                  if (i = false, l !== 2)
                    continue;
                }
              }
              if (l === 1) {
                di(e, 0), qa(e, t, 0, true);
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
                    qa(a, t, Ft, !Ma);
                    break e;
                  case 2:
                    Ht = null;
                    break;
                  case 3:
                  case 5:
                    break;
                  default:
                    throw Error(c(329));
                }
                if ((t & 62914560) === t && (l = qu + 300 - Ot(), 10 < l)) {
                  if (qa(a, t, Ft, !Ma), Ol(a, 0, true) !== 0)
                    break e;
                  oa = t, a.timeoutHandle = um(Ch.bind(null, a, n, Ht, Lu, Fc, t, Ft, Sl, oi, Ma, i, "Throttled", -0, 0), l);
                  break e;
                }
                Ch(a, n, Ht, Lu, Fc, t, Ft, Sl, oi, Ma, i, null, -0, 0);
              }
            }
            break;
          } while (true);
          Ln(e);
        }
        function Ch(e, t, n, a, l, i, o, y, A, D, G, k, q, L) {
          if (e.timeoutHandle = -1, k = t.subtreeFlags, k & 8192 || (k & 16785408) === 16785408) {
            k = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: true, waitingForViewTransition: false, unsuspend: en }, Th(t, i, k);
            var ne = (i & 62914560) === i ? qu - Ot() : (i & 4194048) === i ? Nh - Ot() : 0;
            if (ne = y0(k, ne), ne !== null) {
              oa = i, e.cancelPendingCommit = ne(Lh.bind(null, e, t, i, n, a, l, o, y, A, G, k, null, q, L)), qa(e, i, o, !D);
              return;
            }
          }
          Lh(e, t, i, n, a, l, o, y, A);
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
        function qa(e, t, n, a) {
          t &= ~Jc, t &= ~Sl, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
          for (var l = t; 0 < l; ) {
            var i = 31 - Nt(l), o = 1 << i;
            a[i] = -1, l &= ~o;
          }
          n !== 0 && Ls(e, n, t);
        }
        function Yu() {
          return (ze & 6) === 0 ? (ps(0), false) : true;
        }
        function Ic() {
          if (Ee !== null) {
            if (Be === 0)
              var e = Ee.return;
            else
              e = Ee, In = dl = null, pc(e), ni = null, $i = 0, e = Ee;
            for (; e !== null; )
              rh(e.alternate, e), e = e.return;
            Ee = null;
          }
        }
        function di(e, t) {
          var n = e.timeoutHandle;
          n !== -1 && (e.timeoutHandle = -1, Ig(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), oa = 0, Ic(), Ge = e, Ee = n = $n(e.current, null), we = t, Be = 0, Jt = null, Ma = false, ci = Pa(e, t), Kc = false, oi = Ft = Jc = Sl = Ua = et = 0, Ht = hs = null, Fc = false, (t & 8) !== 0 && (t |= t & 32);
          var a = e.entangledLanes;
          if (a !== 0)
            for (e = e.entanglements, a &= t; 0 < a; ) {
              var l = 31 - Nt(a), i = 1 << l;
              t |= e[l], a &= ~i;
            }
          return ca = t, uu(), n;
        }
        function zh(e, t) {
          be = null, X.H = is, t === ti || t === pu ? (t = Jf(), Be = 3) : t === ac ? (t = Jf(), Be = 4) : Be = t === Cc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Jt = t, Ee === null && (et = 1, Ou(e, rn(t, e.current)));
        }
        function Mh() {
          var e = Zt.current;
          return e === null ? true : (we & 4194048) === we ? dn === null : (we & 62914560) === we || (we & 536870912) !== 0 ? e === dn : false;
        }
        function Uh() {
          var e = X.H;
          return X.H = is, e === null ? is : e;
        }
        function Dh() {
          var e = X.A;
          return X.A = Cg, e;
        }
        function Xu() {
          et = 4, Ma || (we & 4194048) !== we && Zt.current !== null || (ci = true), (Ua & 134217727) === 0 && (Sl & 134217727) === 0 || Ge === null || qa(Ge, we, Ft, false);
        }
        function eo(e, t, n) {
          var a = ze;
          ze |= 2;
          var l = Uh(), i = Dh();
          (Ge !== e || we !== t) && (Lu = null, di(e, t)), t = false;
          var o = et;
          e:
            do
              try {
                if (Be !== 0 && Ee !== null) {
                  var y = Ee, A = Jt;
                  switch (Be) {
                    case 8:
                      Ic(), o = 6;
                      break e;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                      Zt.current === null && (t = true);
                      var D = Be;
                      if (Be = 0, Jt = null, hi(e, y, A, D), n && ci) {
                        o = 0;
                        break e;
                      }
                      break;
                    default:
                      D = Be, Be = 0, Jt = null, hi(e, y, A, D);
                  }
                }
                Ug(), o = et;
                break;
              } catch (G) {
                zh(e, G);
              }
            while (true);
          return t && e.shellSuspendCounter++, In = dl = null, ze = a, X.H = l, X.A = i, Ee === null && (Ge = null, we = 0, uu()), o;
        }
        function Ug() {
          for (; Ee !== null; )
            Bh(Ee);
        }
        function Dg(e, t) {
          var n = ze;
          ze |= 2;
          var a = Uh(), l = Dh();
          Ge !== e || we !== t ? (Lu = null, Hu = Ot() + 500, di(e, t)) : ci = Pa(e, t);
          e:
            do
              try {
                if (Be !== 0 && Ee !== null) {
                  t = Ee;
                  var i = Jt;
                  t:
                    switch (Be) {
                      case 1:
                        Be = 0, Jt = null, hi(e, t, i, 1);
                        break;
                      case 2:
                      case 9:
                        if (Zf(i)) {
                          Be = 0, Jt = null, qh(t);
                          break;
                        }
                        t = function() {
                          Be !== 2 && Be !== 9 || Ge !== e || (Be = 7), Ln(e);
                        }, i.then(t, t);
                        break e;
                      case 3:
                        Be = 7;
                        break e;
                      case 4:
                        Be = 5;
                        break e;
                      case 7:
                        Zf(i) ? (Be = 0, Jt = null, qh(t)) : (Be = 0, Jt = null, hi(e, t, i, 7));
                        break;
                      case 5:
                        var o = null;
                        switch (Ee.tag) {
                          case 26:
                            o = Ee.memoizedState;
                          case 5:
                          case 27:
                            var y = Ee;
                            if (o ? _m(o) : y.stateNode.complete) {
                              Be = 0, Jt = null;
                              var A = y.sibling;
                              if (A !== null)
                                Ee = A;
                              else {
                                var D = y.return;
                                D !== null ? (Ee = D, Gu(D)) : Ee = null;
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
                        Ic(), et = 6;
                        break e;
                      default:
                        throw Error(c(462));
                    }
                }
                Bg();
                break;
              } catch (G) {
                zh(e, G);
              }
            while (true);
          return In = dl = null, X.H = a, X.A = l, ze = n, Ee !== null ? 0 : (Ge = null, we = 0, uu(), et);
        }
        function Bg() {
          for (; Ee !== null && !Ar(); )
            Bh(Ee);
        }
        function Bh(e) {
          var t = sh(e.alternate, e, ca);
          e.memoizedProps = e.pendingProps, t === null ? Gu(e) : Ee = t;
        }
        function qh(e) {
          var t = e, n = t.alternate;
          switch (t.tag) {
            case 15:
            case 0:
              t = eh(n, t, t.pendingProps, t.type, void 0, we);
              break;
            case 11:
              t = eh(n, t, t.pendingProps, t.type.render, t.ref, we);
              break;
            case 5:
              pc(t);
            default:
              rh(n, t), t = Ee = Df(t, ca), t = sh(n, t, ca);
          }
          e.memoizedProps = e.pendingProps, t === null ? Gu(e) : Ee = t;
        }
        function hi(e, t, n, a) {
          In = dl = null, pc(t), ni = null, $i = 0;
          var l = t.return;
          try {
            if (Eg(e, l, t, n, we)) {
              et = 1, Ou(e, rn(n, e.current)), Ee = null;
              return;
            }
          } catch (i) {
            if (l !== null)
              throw Ee = l, i;
            et = 1, Ou(e, rn(n, e.current)), Ee = null;
            return;
          }
          t.flags & 32768 ? (je || a === 1 ? e = true : ci || (we & 536870912) !== 0 ? e = false : (Ma = e = true, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Zt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Hh(t, e)) : Gu(t);
        }
        function Gu(e) {
          var t = e;
          do {
            if ((t.flags & 32768) !== 0) {
              Hh(t, Ma);
              return;
            }
            e = t.return;
            var n = Ng(t.alternate, t, ca);
            if (n !== null) {
              Ee = n;
              return;
            }
            if (t = t.sibling, t !== null) {
              Ee = t;
              return;
            }
            Ee = t = e;
          } while (t !== null);
          et === 0 && (et = 5);
        }
        function Hh(e, t) {
          do {
            var n = jg(e.alternate, e);
            if (n !== null) {
              n.flags &= 32767, Ee = n;
              return;
            }
            if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
              Ee = e;
              return;
            }
            Ee = e = n;
          } while (e !== null);
          et = 6, Ee = null;
        }
        function Lh(e, t, n, a, l, i, o, y, A) {
          e.cancelPendingCommit = null;
          do
            Qu();
          while (mt !== 0);
          if ((ze & 6) !== 0)
            throw Error(c(327));
          if (t !== null) {
            if (t === e.current)
              throw Error(c(177));
            if (i = t.lanes | t.childLanes, i |= Gr, Or(e, n, i, o, y, A), e === Ge && (Ee = Ge = null, we = 0), fi = t, Ba = e, oa = n, Wc = i, $c = l, jh = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Yg(Ja, function() {
              return Vh(), null;
            })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
              a = X.T, X.T = null, l = I.p, I.p = 2, o = ze, ze |= 4;
              try {
                Og(e, t, n);
              } finally {
                ze = o, I.p = l, X.T = a;
              }
            }
            mt = 1, Yh(), Xh(), Gh();
          }
        }
        function Yh() {
          if (mt === 1) {
            mt = 0;
            var e = Ba, t = fi, n = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || n) {
              n = X.T, X.T = null;
              var a = I.p;
              I.p = 2;
              var l = ze;
              ze |= 4;
              try {
                xh(t, e);
                var i = ho, o = wf(e.containerInfo), y = i.focusedElem, A = i.selectionRange;
                if (o !== y && y && y.ownerDocument && Af(y.ownerDocument.documentElement, y)) {
                  if (A !== null && qr(y)) {
                    var D = A.start, G = A.end;
                    if (G === void 0 && (G = D), "selectionStart" in y)
                      y.selectionStart = D, y.selectionEnd = Math.min(G, y.value.length);
                    else {
                      var k = y.ownerDocument || document, q = k && k.defaultView || window;
                      if (q.getSelection) {
                        var L = q.getSelection(), ne = y.textContent.length, re = Math.min(A.start, ne), Xe = A.end === void 0 ? re : Math.min(A.end, ne);
                        !L.extend && re > Xe && (o = Xe, Xe = re, re = o);
                        var R = Ef(y, re), O = Ef(y, Xe);
                        if (R && O && (L.rangeCount !== 1 || L.anchorNode !== R.node || L.anchorOffset !== R.offset || L.focusNode !== O.node || L.focusOffset !== O.offset)) {
                          var U = k.createRange();
                          U.setStart(R.node, R.offset), L.removeAllRanges(), re > Xe ? (L.addRange(U), L.extend(O.node, O.offset)) : (U.setEnd(O.node, O.offset), L.addRange(U));
                        }
                      }
                    }
                  }
                  for (k = [], L = y; L = L.parentNode; )
                    L.nodeType === 1 && k.push({ element: L, left: L.scrollLeft, top: L.scrollTop });
                  for (typeof y.focus == "function" && y.focus(), y = 0; y < k.length; y++) {
                    var Q = k[y];
                    Q.element.scrollLeft = Q.left, Q.element.scrollTop = Q.top;
                  }
                }
                tr = !!fo, ho = fo = null;
              } finally {
                ze = l, I.p = a, X.T = n;
              }
            }
            e.current = t, mt = 2;
          }
        }
        function Xh() {
          if (mt === 2) {
            mt = 0;
            var e = Ba, t = fi, n = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || n) {
              n = X.T, X.T = null;
              var a = I.p;
              I.p = 2;
              var l = ze;
              ze |= 4;
              try {
                ph(e, t.alternate, t);
              } finally {
                ze = l, I.p = a, X.T = n;
              }
            }
            mt = 3;
          }
        }
        function Gh() {
          if (mt === 4 || mt === 3) {
            mt = 0, Us();
            var e = Ba, t = fi, n = oa, a = jh;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? mt = 5 : (mt = 0, fi = Ba = null, Qh(e, e.pendingLanes));
            var l = e.pendingLanes;
            if (l === 0 && (Da = null), Ri(n), t = t.stateNode, Rt && typeof Rt.onCommitFiberRoot == "function")
              try {
                Rt.onCommitFiberRoot(Fa, t, void 0, (t.current.flags & 128) === 128);
              } catch (A) {
              }
            if (a !== null) {
              t = X.T, l = I.p, I.p = 2, X.T = null;
              try {
                for (var i = e.onRecoverableError, o = 0; o < a.length; o++) {
                  var y = a[o];
                  i(y.value, { componentStack: y.stack });
                }
              } finally {
                X.T = t, I.p = l;
              }
            }
            (oa & 3) !== 0 && Qu(), Ln(e), l = e.pendingLanes, (n & 261930) !== 0 && (l & 42) !== 0 ? e === Pc ? ms++ : (ms = 0, Pc = e) : ms = 0, ps(0);
          }
        }
        function Qh(e, t) {
          (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Fi(t)));
        }
        function Qu() {
          return Yh(), Xh(), Gh(), Vh();
        }
        function Vh() {
          if (mt !== 5)
            return false;
          var e = Ba, t = Wc;
          Wc = 0;
          var n = Ri(oa), a = X.T, l = I.p;
          try {
            I.p = 32 > n ? 32 : n, X.T = null, n = $c, $c = null;
            var i = Ba, o = oa;
            if (mt = 0, fi = Ba = null, oa = 0, (ze & 6) !== 0)
              throw Error(c(331));
            var y = ze;
            if (ze |= 4, Ah(i.current), _h(i, i.current, o, n), ze = y, ps(0, false), Rt && typeof Rt.onPostCommitFiberRoot == "function")
              try {
                Rt.onPostCommitFiberRoot(Fa, i);
              } catch (A) {
              }
            return true;
          } finally {
            I.p = l, X.T = a, Qh(e, t);
          }
        }
        function kh(e, t, n) {
          t = rn(n, t), t = Rc(e.stateNode, t, 2), e = Oa(e, t, 2), e !== null && (Gn(e, 2), Ln(e));
        }
        function qe(e, t, n) {
          if (e.tag === 3)
            kh(e, e, n);
          else
            for (; t !== null; ) {
              if (t.tag === 3) {
                kh(t, e, n);
                break;
              } else if (t.tag === 1) {
                var a = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Da === null || !Da.has(a))) {
                  e = rn(n, e), n = Zd(2), a = Oa(t, n, 2), a !== null && (Kd(n, a, t, e), Gn(a, 2), Ln(a));
                  break;
                }
              }
              t = t.return;
            }
        }
        function to(e, t, n) {
          var a = e.pingCache;
          if (a === null) {
            a = e.pingCache = new zg();
            var l = /* @__PURE__ */ new Set();
            a.set(t, l);
          } else
            l = a.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), a.set(t, l));
          l.has(n) || (Kc = true, l.add(n), e = qg.bind(null, e, t, n), t.then(e, e));
        }
        function qg(e, t, n) {
          var a = e.pingCache;
          a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Ge === e && (we & n) === n && (et === 4 || et === 3 && (we & 62914560) === we && 300 > Ot() - qu ? (ze & 2) === 0 && di(e, 0) : Jc |= n, oi === we && (oi = 0)), Ln(e);
        }
        function Zh(e, t) {
          t === 0 && (t = Hs()), e = cl(e, t), e !== null && (Gn(e, t), Ln(e));
        }
        function Hg(e) {
          var t = e.memoizedState, n = 0;
          t !== null && (n = t.retryLane), Zh(e, n);
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
              throw Error(c(314));
          }
          a !== null && a.delete(t), Zh(e, n);
        }
        function Yg(e, t) {
          return wi(e, t);
        }
        var Vu = null, mi = null, no = false, ku = false, ao = false, Ha = 0;
        function Ln(e) {
          e !== mi && e.next === null && (mi === null ? Vu = mi = e : mi = mi.next = e), ku = true, no || (no = true, Gg());
        }
        function ps(e, t) {
          if (!ao && ku) {
            ao = true;
            do
              for (var n = false, a = Vu; a !== null; ) {
                if (e !== 0) {
                  var l = a.pendingLanes;
                  if (l === 0)
                    var i = 0;
                  else {
                    var o = a.suspendedLanes, y = a.pingedLanes;
                    i = (1 << 31 - Nt(42 | e) + 1) - 1, i &= l & ~(o & ~y), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
                  }
                  i !== 0 && (n = true, Wh(a, i));
                } else
                  i = we, i = Ol(a, a === Ge ? i : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (i & 3) === 0 || Pa(a, i) || (n = true, Wh(a, i));
                a = a.next;
              }
            while (n);
            ao = false;
          }
        }
        function Xg() {
          Kh();
        }
        function Kh() {
          ku = no = false;
          var e = 0;
          Ha !== 0 && Pg() && (e = Ha);
          for (var t = Ot(), n = null, a = Vu; a !== null; ) {
            var l = a.next, i = Jh(a, t);
            i === 0 ? (a.next = null, n === null ? Vu = l : n.next = l, l === null && (mi = n)) : (n = a, (e !== 0 || (i & 3) !== 0) && (ku = true)), a = l;
          }
          mt !== 0 && mt !== 5 || ps(e), Ha !== 0 && (Ha = 0);
        }
        function Jh(e, t) {
          for (var n = e.suspendedLanes, a = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
            var o = 31 - Nt(i), y = 1 << o, A = l[o];
            A === -1 ? ((y & n) === 0 || (y & a) !== 0) && (l[o] = jr(y, t)) : A <= t && (e.expiredLanes |= y), i &= ~y;
          }
          if (t = Ge, n = we, n = Ol(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a = e.callbackNode, n === 0 || e === t && (Be === 2 || Be === 9) || e.cancelPendingCommit !== null)
            return a !== null && a !== null && Ni(a), e.callbackNode = null, e.callbackPriority = 0;
          if ((n & 3) === 0 || Pa(e, n)) {
            if (t = n & -n, t === e.callbackPriority)
              return t;
            switch (a !== null && Ni(a), Ri(n)) {
              case 2:
              case 8:
                n = ji;
                break;
              case 32:
                n = Ja;
                break;
              case 268435456:
                n = Nl;
                break;
              default:
                n = Ja;
            }
            return a = Fh.bind(null, e), n = wi(n, a), e.callbackPriority = t, e.callbackNode = n, t;
          }
          return a !== null && a !== null && Ni(a), e.callbackPriority = 2, e.callbackNode = null, 2;
        }
        function Fh(e, t) {
          if (mt !== 0 && mt !== 5)
            return e.callbackNode = null, e.callbackPriority = 0, null;
          var n = e.callbackNode;
          if (Qu() && e.callbackNode !== n)
            return null;
          var a = we;
          return a = Ol(e, e === Ge ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a === 0 ? null : (Rh(e, a, t), Jh(e, Ot()), e.callbackNode != null && e.callbackNode === n ? Fh.bind(null, e) : null);
        }
        function Wh(e, t) {
          if (Qu())
            return null;
          Rh(e, t, true);
        }
        function Gg() {
          e0(function() {
            (ze & 6) !== 0 ? wi(pe, Xg) : Kh();
          });
        }
        function lo() {
          if (Ha === 0) {
            var e = Il;
            e === 0 && (e = Wa, Wa <<= 1, (Wa & 261888) === 0 && (Wa = 256)), Ha = e;
          }
          return Ha;
        }
        function $h(e) {
          return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Ml("" + e);
        }
        function Ph(e, t) {
          var n = t.ownerDocument.createElement("input");
          return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
        }
        function Qg(e, t, n, a, l) {
          if (t === "submit" && n && n.stateNode === l) {
            var i = $h((l[gt] || null).action), o = a.submitter;
            o && (t = (t = o[gt] || null) ? $h(t.formAction) : o.getAttribute("formAction"), t !== null && (i = t, o = null));
            var y = new ll("action", "action", null, a, l);
            e.push({ event: y, listeners: [{ instance: null, listener: function() {
              if (a.defaultPrevented) {
                if (Ha !== 0) {
                  var A = o ? Ph(l, o) : new FormData(l);
                  Ec(n, { pending: true, data: A, method: l.method, action: i }, null, A);
                }
              } else
                typeof i == "function" && (y.preventDefault(), A = o ? Ph(l, o) : new FormData(l), Ec(n, { pending: true, data: A, method: l.method, action: i }, i, A));
            }, currentTarget: l }] });
          }
        }
        for (var io = 0; io < Xr.length; io++) {
          var so = Xr[io], Vg = so.toLowerCase(), kg = so[0].toUpperCase() + so.slice(1);
          bn(Vg, "on" + kg);
        }
        bn(Of, "onAnimationEnd"), bn(Rf, "onAnimationIteration"), bn(Cf, "onAnimationStart"), bn("dblclick", "onDoubleClick"), bn("focusin", "onFocus"), bn("focusout", "onBlur"), bn(ug, "onTransitionRun"), bn(rg, "onTransitionStart"), bn(cg, "onTransitionCancel"), bn(zf, "onTransitionEnd"), Qt("onMouseEnter", ["mouseout", "mouseover"]), Qt("onMouseLeave", ["mouseout", "mouseover"]), Qt("onPointerEnter", ["pointerout", "pointerover"]), Qt("onPointerLeave", ["pointerout", "pointerover"]), zn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), zn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), zn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), zn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), zn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), zn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var gs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Zg = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gs));
        function Ih(e, t) {
          t = (t & 4) !== 0;
          for (var n = 0; n < e.length; n++) {
            var a = e[n], l = a.event;
            a = a.listeners;
            e: {
              var i = void 0;
              if (t)
                for (var o = a.length - 1; 0 <= o; o--) {
                  var y = a[o], A = y.instance, D = y.currentTarget;
                  if (y = y.listener, A !== i && l.isPropagationStopped())
                    break e;
                  i = y, l.currentTarget = D;
                  try {
                    i(l);
                  } catch (G) {
                    su(G);
                  }
                  l.currentTarget = null, i = A;
                }
              else
                for (o = 0; o < a.length; o++) {
                  if (y = a[o], A = y.instance, D = y.currentTarget, y = y.listener, A !== i && l.isPropagationStopped())
                    break e;
                  i = y, l.currentTarget = D;
                  try {
                    i(l);
                  } catch (G) {
                    su(G);
                  }
                  l.currentTarget = null, i = A;
                }
            }
          }
        }
        function Ae(e, t) {
          var n = t[Ci];
          n === void 0 && (n = t[Ci] = /* @__PURE__ */ new Set());
          var a = e + "__bubble";
          n.has(a) || (em(t, e, 2, false), n.add(a));
        }
        function uo(e, t, n) {
          var a = 0;
          t && (a |= 4), em(n, e, a, t);
        }
        var Zu = "_reactListening" + Math.random().toString(36).slice(2);
        function ro(e) {
          if (!e[Zu]) {
            e[Zu] = true, Mt.forEach(function(n) {
              n !== "selectionchange" && (Zg.has(n) || uo(n, false, e), uo(n, true, e));
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Zu] || (t[Zu] = true, uo("selectionchange", false, t));
          }
        }
        function em(e, t, n, a) {
          switch (Om(t)) {
            case 2:
              var l = x0;
              break;
            case 8:
              l = S0;
              break;
            default:
              l = Eo;
          }
          n = l.bind(null, t, n, e), l = void 0, !Yi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = true), a ? l !== void 0 ? e.addEventListener(t, n, { capture: true, passive: l }) : e.addEventListener(t, n, true) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, false);
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
                  var y = a.stateNode.containerInfo;
                  if (y === l)
                    break;
                  if (o === 4)
                    for (o = a.return; o !== null; ) {
                      var A = o.tag;
                      if ((A === 3 || A === 4) && o.stateNode.containerInfo === l)
                        return;
                      o = o.return;
                    }
                  for (; y !== null; ) {
                    if (o = ya(y), o === null)
                      return;
                    if (A = o.tag, A === 5 || A === 6 || A === 26 || A === 27) {
                      a = i = o;
                      continue e;
                    }
                    y = y.parentNode;
                  }
                }
                a = a.return;
              }
          Li(function() {
            var D = i, G = Ul(n), k = [];
            e: {
              var q = Mf.get(e);
              if (q !== void 0) {
                var L = ll, ne = e;
                switch (e) {
                  case "keypress":
                    if (Hl(n) === 0)
                      break e;
                  case "keydown":
                  case "keyup":
                    L = eu;
                    break;
                  case "focusin":
                    ne = "focus", L = W;
                    break;
                  case "focusout":
                    ne = "blur", L = W;
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
                    L = F;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    L = tu;
                    break;
                  case Of:
                  case Rf:
                  case Cf:
                    L = oe;
                    break;
                  case zf:
                    L = Gl;
                    break;
                  case "scroll":
                  case "scrollend":
                    L = f;
                    break;
                  case "wheel":
                    L = Fn;
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
                    L = Yl;
                    break;
                  case "toggle":
                  case "beforetoggle":
                    L = ln;
                }
                var re = (t & 4) !== 0, Xe = !re && (e === "scroll" || e === "scrollend"), R = re ? q !== null ? q + "Capture" : null : q;
                re = [];
                for (var O = D, U; O !== null; ) {
                  var Q = O;
                  if (U = Q.stateNode, Q = Q.tag, Q !== 5 && Q !== 26 && Q !== 27 || U === null || R === null || (Q = Mn(O, R), Q != null && re.push(ys(O, Q, U))), Xe)
                    break;
                  O = O.return;
                }
                0 < re.length && (q = new L(q, ne, null, n, G), k.push({ event: q, listeners: re }));
              }
            }
            if ((t & 7) === 0) {
              e: {
                if (q = e === "mouseover" || e === "pointerover", L = e === "mouseout" || e === "pointerout", q && n !== al && (ne = n.relatedTarget || n.fromElement) && (ya(ne) || ne[On]))
                  break e;
                if ((L || q) && (q = G.window === G ? G : (q = G.ownerDocument) ? q.defaultView || q.parentWindow : window, L ? (ne = n.relatedTarget || n.toElement, L = D, ne = ne ? ya(ne) : null, ne !== null && (Xe = v(ne), re = ne.tag, ne !== Xe || re !== 5 && re !== 27 && re !== 6) && (ne = null)) : (L = null, ne = D), L !== ne)) {
                  if (re = M, Q = "onMouseLeave", R = "onMouseEnter", O = "mouse", (e === "pointerout" || e === "pointerover") && (re = Yl, Q = "onPointerLeave", R = "onPointerEnter", O = "pointer"), Xe = L == null ? q : el(L), U = ne == null ? q : el(ne), q = new re(Q, O + "leave", L, n, G), q.target = Xe, q.relatedTarget = U, Q = null, ya(G) === D && (re = new re(R, O + "enter", ne, n, G), re.target = U, re.relatedTarget = Xe, Q = re), Xe = Q, L && ne)
                    t: {
                      for (re = Kg, R = L, O = ne, U = 0, Q = R; Q; Q = re(Q))
                        U++;
                      Q = 0;
                      for (var ue = O; ue; ue = re(ue))
                        Q++;
                      for (; 0 < U - Q; )
                        R = re(R), U--;
                      for (; 0 < Q - U; )
                        O = re(O), Q--;
                      for (; U--; ) {
                        if (R === O || O !== null && R === O.alternate) {
                          re = R;
                          break t;
                        }
                        R = re(R), O = re(O);
                      }
                      re = null;
                    }
                  else
                    re = null;
                  L !== null && tm(k, q, L, re, false), ne !== null && Xe !== null && tm(k, Xe, ne, re, true);
                }
              }
              e: {
                if (q = D ? el(D) : window, L = q.nodeName && q.nodeName.toLowerCase(), L === "select" || L === "input" && q.type === "file")
                  var Re = bf;
                else if (gf(q))
                  if (vf)
                    Re = lg;
                  else {
                    Re = ng;
                    var le = tg;
                  }
                else
                  L = q.nodeName, !L || L.toLowerCase() !== "input" || q.type !== "checkbox" && q.type !== "radio" ? D && zl(D.elementType) && (Re = bf) : Re = ag;
                if (Re && (Re = Re(e, D))) {
                  yf(k, Re, n, G);
                  break e;
                }
                le && le(e, q, D), e === "focusout" && D && q.type === "number" && D.memoizedProps.value != null && Bi(q, "number", q.value);
              }
              switch (le = D ? el(D) : window, e) {
                case "focusin":
                  (gf(le) || le.contentEditable === "true") && (kl = le, Hr = D, Zi = null);
                  break;
                case "focusout":
                  Zi = Hr = kl = null;
                  break;
                case "mousedown":
                  Lr = true;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  Lr = false, Nf(k, n, G);
                  break;
                case "selectionchange":
                  if (sg)
                    break;
                case "keydown":
                case "keyup":
                  Nf(k, n, G);
              }
              var Se;
              if (sn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var Ne = "onCompositionStart";
                      break e;
                    case "compositionend":
                      Ne = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      Ne = "onCompositionUpdate";
                      break e;
                  }
                  Ne = void 0;
                }
              else
                Vl ? sl(e, n) && (Ne = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Ne = "onCompositionStart");
              Ne && (yn && n.locale !== "ko" && (Vl || Ne !== "onCompositionStart" ? Ne === "onCompositionEnd" && Vl && (Se = ql()) : (ht = G, Sa = "value" in ht ? ht.value : ht.textContent, Vl = true)), le = Ku(D, Ne), 0 < le.length && (Ne = new te(Ne, e, null, n, G), k.push({ event: Ne, listeners: le }), Se ? Ne.data = Se : (Se = Gi(n), Se !== null && (Ne.data = Se)))), (Se = Ur ? $p(e, n) : Pp(e, n)) && (Ne = Ku(D, "onBeforeInput"), 0 < Ne.length && (le = new te("onBeforeInput", "beforeinput", null, n, G), k.push({ event: le, listeners: Ne }), le.data = Se)), Qg(k, e, D, n, G);
            }
            Ih(k, t);
          });
        }
        function ys(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Ku(e, t) {
          for (var n = t + "Capture", a = []; e !== null; ) {
            var l = e, i = l.stateNode;
            if (l = l.tag, l !== 5 && l !== 26 && l !== 27 || i === null || (l = Mn(e, n), l != null && a.unshift(ys(e, l, i)), l = Mn(e, t), l != null && a.push(ys(e, l, i))), e.tag === 3)
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
        function tm(e, t, n, a, l) {
          for (var i = t._reactName, o = []; n !== null && n !== a; ) {
            var y = n, A = y.alternate, D = y.stateNode;
            if (y = y.tag, A !== null && A === a)
              break;
            y !== 5 && y !== 26 && y !== 27 || D === null || (A = D, l ? (D = Mn(n, i), D != null && o.unshift(ys(n, D, A))) : l || (D = Mn(n, i), D != null && o.push(ys(n, D, A)))), n = n.return;
          }
          o.length !== 0 && e.push({ event: t, listeners: o });
        }
        var Jg = /\r\n?/g, Fg = /\u0000|\uFFFD/g;
        function nm(e) {
          return (typeof e == "string" ? e : "" + e).replace(Jg, `
`).replace(Fg, "");
        }
        function am(e, t) {
          return t = nm(t), nm(e) === t;
        }
        function Ye(e, t, n, a, l, i) {
          switch (n) {
            case "children":
              typeof a == "string" ? t === "body" || t === "textarea" && a === "" || kn(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && kn(e, "" + a);
              break;
            case "className":
              tl(e, "class", a);
              break;
            case "tabIndex":
              tl(e, "tabindex", a);
              break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
              tl(e, n, a);
              break;
            case "style":
              Hi(e, a, i);
              break;
            case "data":
              if (t !== "object") {
                tl(e, "data", a);
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
                typeof i == "function" && (n === "formAction" ? (t !== "input" && Ye(e, t, "name", l.name, l, null), Ye(e, t, "formEncType", l.formEncType, l, null), Ye(e, t, "formMethod", l.formMethod, l, null), Ye(e, t, "formTarget", l.formTarget, l, null)) : (Ye(e, t, "encType", l.encType, l, null), Ye(e, t, "method", l.method, l, null), Ye(e, t, "target", l.target, l, null)));
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
              a != null && Ae("scroll", e);
              break;
            case "onScrollEnd":
              a != null && Ae("scrollend", e);
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
              Ae("beforetoggle", e), Ae("toggle", e), Qn(e, "popover", a);
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
              Qn(e, "is", a);
              break;
            case "innerText":
            case "textContent":
              break;
            default:
              (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Ps.get(n) || n, Qn(e, n, a));
          }
        }
        function oo(e, t, n, a, l, i) {
          switch (n) {
            case "style":
              Hi(e, a, i);
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
              typeof a == "string" ? kn(e, a) : (typeof a == "number" || typeof a == "bigint") && kn(e, "" + a);
              break;
            case "onScroll":
              a != null && Ae("scroll", e);
              break;
            case "onScrollEnd":
              a != null && Ae("scrollend", e);
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
              if (!Rl.hasOwnProperty(n))
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
              Ae("error", e), Ae("load", e);
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
                        Ye(e, t, i, o, n, null);
                    }
                }
              l && Ye(e, t, "srcSet", n.srcSet, n, null), a && Ye(e, t, "src", n.src, n, null);
              return;
            case "input":
              Ae("invalid", e);
              var y = i = o = l = null, A = null, D = null;
              for (a in n)
                if (n.hasOwnProperty(a)) {
                  var G = n[a];
                  if (G != null)
                    switch (a) {
                      case "name":
                        l = G;
                        break;
                      case "type":
                        o = G;
                        break;
                      case "checked":
                        A = G;
                        break;
                      case "defaultChecked":
                        D = G;
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
                          throw Error(c(137, t));
                        break;
                      default:
                        Ye(e, t, a, G, n, null);
                    }
                }
              Fs(e, i, y, A, D, o, l, false);
              return;
            case "select":
              Ae("invalid", e), a = o = i = null;
              for (l in n)
                if (n.hasOwnProperty(l) && (y = n[l], y != null))
                  switch (l) {
                    case "value":
                      i = y;
                      break;
                    case "defaultValue":
                      o = y;
                      break;
                    case "multiple":
                      a = y;
                    default:
                      Ye(e, t, l, y, n, null);
                  }
              t = i, n = o, e.multiple = !!a, t != null ? va(e, !!a, t, false) : n != null && va(e, !!a, n, true);
              return;
            case "textarea":
              Ae("invalid", e), i = l = a = null;
              for (o in n)
                if (n.hasOwnProperty(o) && (y = n[o], y != null))
                  switch (o) {
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
                        throw Error(c(91));
                      break;
                    default:
                      Ye(e, t, o, y, n, null);
                  }
              qi(e, a, l, i);
              return;
            case "option":
              for (A in n)
                if (n.hasOwnProperty(A) && (a = n[A], a != null))
                  switch (A) {
                    case "selected":
                      e.selected = a && typeof a != "function" && typeof a != "symbol";
                      break;
                    default:
                      Ye(e, t, A, a, n, null);
                  }
              return;
            case "dialog":
              Ae("beforetoggle", e), Ae("toggle", e), Ae("cancel", e), Ae("close", e);
              break;
            case "iframe":
            case "object":
              Ae("load", e);
              break;
            case "video":
            case "audio":
              for (a = 0; a < gs.length; a++)
                Ae(gs[a], e);
              break;
            case "image":
              Ae("error", e), Ae("load", e);
              break;
            case "details":
              Ae("toggle", e);
              break;
            case "embed":
            case "source":
            case "link":
              Ae("error", e), Ae("load", e);
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
                      throw Error(c(137, t));
                    default:
                      Ye(e, t, D, a, n, null);
                  }
              return;
            default:
              if (zl(t)) {
                for (G in n)
                  n.hasOwnProperty(G) && (a = n[G], a !== void 0 && oo(e, t, G, a, n, void 0));
                return;
              }
          }
          for (y in n)
            n.hasOwnProperty(y) && (a = n[y], a != null && Ye(e, t, y, a, n, null));
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
              var l = null, i = null, o = null, y = null, A = null, D = null, G = null;
              for (L in n) {
                var k = n[L];
                if (n.hasOwnProperty(L) && k != null)
                  switch (L) {
                    case "checked":
                      break;
                    case "value":
                      break;
                    case "defaultValue":
                      A = k;
                    default:
                      a.hasOwnProperty(L) || Ye(e, t, L, null, a, k);
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
                      D = L;
                      break;
                    case "defaultChecked":
                      G = L;
                      break;
                    case "value":
                      o = L;
                      break;
                    case "defaultValue":
                      y = L;
                      break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                      if (L != null)
                        throw Error(c(137, t));
                      break;
                    default:
                      L !== k && Ye(e, t, q, L, a, k);
                  }
              }
              Di(e, o, y, A, D, G, i, l);
              return;
            case "select":
              L = o = y = q = null;
              for (i in n)
                if (A = n[i], n.hasOwnProperty(i) && A != null)
                  switch (i) {
                    case "value":
                      break;
                    case "multiple":
                      L = A;
                    default:
                      a.hasOwnProperty(i) || Ye(e, t, i, null, a, A);
                  }
              for (l in a)
                if (i = a[l], A = n[l], a.hasOwnProperty(l) && (i != null || A != null))
                  switch (l) {
                    case "value":
                      q = i;
                      break;
                    case "defaultValue":
                      y = i;
                      break;
                    case "multiple":
                      o = i;
                    default:
                      i !== A && Ye(e, t, l, i, a, A);
                  }
              t = y, n = o, a = L, q != null ? va(e, !!n, q, false) : !!a != !!n && (t != null ? va(e, !!n, t, true) : va(e, !!n, n ? [] : "", false));
              return;
            case "textarea":
              L = q = null;
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
                      l !== i && Ye(e, t, o, l, a, i);
                  }
              Ws(e, q, L);
              return;
            case "option":
              for (var ne in n)
                if (q = n[ne], n.hasOwnProperty(ne) && q != null && !a.hasOwnProperty(ne))
                  switch (ne) {
                    case "selected":
                      e.selected = false;
                      break;
                    default:
                      Ye(e, t, ne, null, a, q);
                  }
              for (A in a)
                if (q = a[A], L = n[A], a.hasOwnProperty(A) && q !== L && (q != null || L != null))
                  switch (A) {
                    case "selected":
                      e.selected = q && typeof q != "function" && typeof q != "symbol";
                      break;
                    default:
                      Ye(e, t, A, q, a, L);
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
              for (var re in n)
                q = n[re], n.hasOwnProperty(re) && q != null && !a.hasOwnProperty(re) && Ye(e, t, re, null, a, q);
              for (D in a)
                if (q = a[D], L = n[D], a.hasOwnProperty(D) && q !== L && (q != null || L != null))
                  switch (D) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                      if (q != null)
                        throw Error(c(137, t));
                      break;
                    default:
                      Ye(e, t, D, q, a, L);
                  }
              return;
            default:
              if (zl(t)) {
                for (var Xe in n)
                  q = n[Xe], n.hasOwnProperty(Xe) && q !== void 0 && !a.hasOwnProperty(Xe) && oo(e, t, Xe, void 0, a, q);
                for (G in a)
                  q = a[G], L = n[G], !a.hasOwnProperty(G) || q === L || q === void 0 && L === void 0 || oo(e, t, G, q, a, L);
                return;
              }
          }
          for (var R in n)
            q = n[R], n.hasOwnProperty(R) && q != null && !a.hasOwnProperty(R) && Ye(e, t, R, null, a, q);
          for (k in a)
            q = a[k], L = n[k], !a.hasOwnProperty(k) || q === L || q == null && L == null || Ye(e, t, k, q, a, L);
        }
        function lm(e) {
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
              var l = n[a], i = l.transferSize, o = l.initiatorType, y = l.duration;
              if (i && y && lm(o)) {
                for (o = 0, y = l.responseEnd, a += 1; a < n.length; a++) {
                  var A = n[a], D = A.startTime;
                  if (D > y)
                    break;
                  var G = A.transferSize, k = A.initiatorType;
                  G && lm(k) && (A = A.responseEnd, o += G * (A < y ? 1 : (y - D) / (A - D)));
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
        function Ju(e) {
          return e.nodeType === 9 ? e : e.ownerDocument;
        }
        function im(e) {
          switch (e) {
            case "http://www.w3.org/2000/svg":
              return 1;
            case "http://www.w3.org/1998/Math/MathML":
              return 2;
            default:
              return 0;
          }
        }
        function sm(e, t) {
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
        function Pg() {
          var e = window.event;
          return e && e.type === "popstate" ? e === po ? false : (po = e, true) : (po = null, false);
        }
        var um = typeof setTimeout == "function" ? setTimeout : void 0, Ig = typeof clearTimeout == "function" ? clearTimeout : void 0, rm = typeof Promise == "function" ? Promise : void 0, e0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof rm != "undefined" ? function(e) {
          return rm.resolve(null).then(e).catch(t0);
        } : um;
        function t0(e) {
          setTimeout(function() {
            throw e;
          });
        }
        function La(e) {
          return e === "head";
        }
        function cm(e, t) {
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
                bs(e.ownerDocument.documentElement);
              else if (n === "head") {
                n = e.ownerDocument.head, bs(n);
                for (var i = n.firstChild; i; ) {
                  var o = i.nextSibling, y = i.nodeName;
                  i[Rn] || y === "SCRIPT" || y === "STYLE" || y === "LINK" && i.rel.toLowerCase() === "stylesheet" || n.removeChild(i), i = o;
                }
              } else
                n === "body" && bs(e.ownerDocument.body);
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
        function go(e) {
          var t = e.firstChild;
          for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var n = t;
            switch (t = t.nextSibling, n.nodeName) {
              case "HTML":
              case "HEAD":
              case "BODY":
                go(n), zi(n);
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
              if (!e[Rn])
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
        function yo(e) {
          return e.data === "$?" || e.data === "$~";
        }
        function bo(e) {
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
        var vo = null;
        function dm(e) {
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
        function hm(e) {
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
        function mm(e, t, n) {
          switch (t = Ju(n), e) {
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
        function bs(e) {
          for (var t = e.attributes; t.length; )
            e.removeAttributeNode(t[0]);
          zi(e);
        }
        var mn = /* @__PURE__ */ new Map(), pm = /* @__PURE__ */ new Set();
        function Fu(e) {
          return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
        }
        var fa = I.d;
        I.d = { f: i0, r: s0, D: u0, C: r0, L: c0, m: o0, X: d0, S: f0, M: h0 };
        function i0() {
          var e = fa.f(), t = Yu();
          return e || t;
        }
        function s0(e) {
          var t = Cn(e);
          t !== null && t.tag === 5 && t.type === "form" ? zd(t) : fa.r(e);
        }
        var pi = typeof document == "undefined" ? null : document;
        function gm(e, t, n) {
          var a = pi;
          if (a && typeof t == "string" && t) {
            var l = Ct(t);
            l = 'link[rel="' + e + '"][href="' + l + '"]', typeof n == "string" && (l += '[crossorigin="' + n + '"]'), pm.has(l) || (pm.add(l), e = { rel: e, crossOrigin: n, href: t }, a.querySelector(l) === null && (t = a.createElement("link"), At(t, "link", e), Pe(t), a.head.appendChild(t)));
          }
        }
        function u0(e) {
          fa.D(e), gm("dns-prefetch", e, null);
        }
        function r0(e, t) {
          fa.C(e, t), gm("preconnect", e, t);
        }
        function c0(e, t, n) {
          fa.L(e, t, n);
          var a = pi;
          if (a && e && t) {
            var l = 'link[rel="preload"][as="' + Ct(t) + '"]';
            t === "image" && n && n.imageSrcSet ? (l += '[imagesrcset="' + Ct(n.imageSrcSet) + '"]', typeof n.imageSizes == "string" && (l += '[imagesizes="' + Ct(n.imageSizes) + '"]')) : l += '[href="' + Ct(e) + '"]';
            var i = l;
            switch (t) {
              case "style":
                i = gi(e);
                break;
              case "script":
                i = yi(e);
            }
            mn.has(i) || (e = N({ rel: "preload", href: t === "image" && n && n.imageSrcSet ? void 0 : e, as: t }, n), mn.set(i, e), a.querySelector(l) !== null || t === "style" && a.querySelector(vs(i)) || t === "script" && a.querySelector(xs(i)) || (t = a.createElement("link"), At(t, "link", e), Pe(t), a.head.appendChild(t)));
          }
        }
        function o0(e, t) {
          fa.m(e, t);
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
            if (!mn.has(i) && (e = N({ rel: "modulepreload", href: e }, t), mn.set(i, e), n.querySelector(l) === null)) {
              switch (a) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                  if (n.querySelector(xs(i)))
                    return;
              }
              a = n.createElement("link"), At(a, "link", e), Pe(a), n.head.appendChild(a);
            }
          }
        }
        function f0(e, t, n) {
          fa.S(e, t, n);
          var a = pi;
          if (a && e) {
            var l = ba(a).hoistableStyles, i = gi(e);
            t = t || "default";
            var o = l.get(i);
            if (!o) {
              var y = { loading: 0, preload: null };
              if (o = a.querySelector(vs(i)))
                y.loading = 5;
              else {
                e = N({ rel: "stylesheet", href: e, "data-precedence": t }, n), (n = mn.get(i)) && xo(e, n);
                var A = o = a.createElement("link");
                Pe(A), At(A, "link", e), A._p = new Promise(function(D, G) {
                  A.onload = D, A.onerror = G;
                }), A.addEventListener("load", function() {
                  y.loading |= 1;
                }), A.addEventListener("error", function() {
                  y.loading |= 2;
                }), y.loading |= 4, Wu(o, t, a);
              }
              o = { type: "stylesheet", instance: o, count: 1, state: y }, l.set(i, o);
            }
          }
        }
        function d0(e, t) {
          fa.X(e, t);
          var n = pi;
          if (n && e) {
            var a = ba(n).hoistableScripts, l = yi(e), i = a.get(l);
            i || (i = n.querySelector(xs(l)), i || (e = N({ src: e, async: true }, t), (t = mn.get(l)) && So(e, t), i = n.createElement("script"), Pe(i), At(i, "link", e), n.head.appendChild(i)), i = { type: "script", instance: i, count: 1, state: null }, a.set(l, i));
          }
        }
        function h0(e, t) {
          fa.M(e, t);
          var n = pi;
          if (n && e) {
            var a = ba(n).hoistableScripts, l = yi(e), i = a.get(l);
            i || (i = n.querySelector(xs(l)), i || (e = N({ src: e, async: true, type: "module" }, t), (t = mn.get(l)) && So(e, t), i = n.createElement("script"), Pe(i), At(i, "link", e), n.head.appendChild(i)), i = { type: "script", instance: i, count: 1, state: null }, a.set(l, i));
          }
        }
        function ym(e, t, n, a) {
          var l = (l = xe.current) ? Fu(l) : null;
          if (!l)
            throw Error(c(446));
          switch (e) {
            case "meta":
            case "title":
              return null;
            case "style":
              return typeof n.precedence == "string" && typeof n.href == "string" ? (t = gi(n.href), n = ba(l).hoistableStyles, a = n.get(t), a || (a = { type: "style", instance: null, count: 0, state: null }, n.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
            case "link":
              if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
                e = gi(n.href);
                var i = ba(l).hoistableStyles, o = i.get(e);
                if (o || (l = l.ownerDocument || l, o = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, i.set(e, o), (i = l.querySelector(vs(e))) && !i._p && (o.instance = i, o.state.loading = 5), mn.has(e) || (n = { rel: "preload", as: "style", href: n.href, crossOrigin: n.crossOrigin, integrity: n.integrity, media: n.media, hrefLang: n.hrefLang, referrerPolicy: n.referrerPolicy }, mn.set(e, n), i || m0(l, e, n, o.state))), t && a === null)
                  throw Error(c(528, ""));
                return o;
              }
              if (t && a !== null)
                throw Error(c(529, ""));
              return null;
            case "script":
              return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = yi(n), n = ba(l).hoistableScripts, a = n.get(t), a || (a = { type: "script", instance: null, count: 0, state: null }, n.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
            default:
              throw Error(c(444, e));
          }
        }
        function gi(e) {
          return 'href="' + Ct(e) + '"';
        }
        function vs(e) {
          return 'link[rel="stylesheet"][' + e + "]";
        }
        function bm(e) {
          return N({}, e, { "data-precedence": e.precedence, precedence: null });
        }
        function m0(e, t, n, a) {
          e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
            return a.loading |= 1;
          }), t.addEventListener("error", function() {
            return a.loading |= 2;
          }), At(t, "link", n), Pe(t), e.head.appendChild(t));
        }
        function yi(e) {
          return '[src="' + Ct(e) + '"]';
        }
        function xs(e) {
          return "script[async]" + e;
        }
        function vm(e, t, n) {
          if (t.count++, t.instance === null)
            switch (t.type) {
              case "style":
                var a = e.querySelector('style[data-href~="' + Ct(n.href) + '"]');
                if (a)
                  return t.instance = a, Pe(a), a;
                var l = N({}, n, { "data-href": n.href, "data-precedence": n.precedence, href: null, precedence: null });
                return a = (e.ownerDocument || e).createElement("style"), Pe(a), At(a, "style", l), Wu(a, n.precedence, e), t.instance = a;
              case "stylesheet":
                l = gi(n.href);
                var i = e.querySelector(vs(l));
                if (i)
                  return t.state.loading |= 4, t.instance = i, Pe(i), i;
                a = bm(n), (l = mn.get(l)) && xo(a, l), i = (e.ownerDocument || e).createElement("link"), Pe(i);
                var o = i;
                return o._p = new Promise(function(y, A) {
                  o.onload = y, o.onerror = A;
                }), At(i, "link", a), t.state.loading |= 4, Wu(i, n.precedence, e), t.instance = i;
              case "script":
                return i = yi(n.src), (l = e.querySelector(xs(i))) ? (t.instance = l, Pe(l), l) : (a = n, (l = mn.get(i)) && (a = N({}, n), So(a, l)), e = e.ownerDocument || e, l = e.createElement("script"), Pe(l), At(l, "link", a), e.head.appendChild(l), t.instance = l);
              case "void":
                return null;
              default:
                throw Error(c(443, t.type));
            }
          else
            t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Wu(a, n.precedence, e));
          return t.instance;
        }
        function Wu(e, t, n) {
          for (var a = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), l = a.length ? a[a.length - 1] : null, i = l, o = 0; o < a.length; o++) {
            var y = a[o];
            if (y.dataset.precedence === t)
              i = y;
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
        var $u = null;
        function xm(e, t, n) {
          if ($u === null) {
            var a = /* @__PURE__ */ new Map(), l = $u = /* @__PURE__ */ new Map();
            l.set(n, a);
          } else
            l = $u, a = l.get(n), a || (a = /* @__PURE__ */ new Map(), l.set(n, a));
          if (a.has(e))
            return a;
          for (a.set(e, null), n = n.getElementsByTagName(e), l = 0; l < n.length; l++) {
            var i = n[l];
            if (!(i[Rn] || i[dt] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
              var o = i.getAttribute(t) || "";
              o = e + o;
              var y = a.get(o);
              y ? y.push(i) : a.set(o, [i]);
            }
          }
          return a;
        }
        function Sm(e, t, n) {
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
        function _m(e) {
          return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
        }
        function g0(e, t, n, a) {
          if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== false) && (n.state.loading & 4) === 0) {
            if (n.instance === null) {
              var l = gi(a.href), i = t.querySelector(vs(l));
              if (i) {
                t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Pu.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = i, Pe(i);
                return;
              }
              i = t.ownerDocument || t, a = bm(a), (l = mn.get(l)) && xo(a, l), i = i.createElement("link"), Pe(i);
              var o = i;
              o._p = new Promise(function(y, A) {
                o.onload = y, o.onerror = A;
              }), At(i, "link", a), n.instance = i;
            }
            e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Pu.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
          }
        }
        var _o = 0;
        function y0(e, t) {
          return e.stylesheets && e.count === 0 && er(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
            var a = setTimeout(function() {
              if (e.stylesheets && er(e, e.stylesheets), e.unsuspend) {
                var i = e.unsuspend;
                e.unsuspend = null, i();
              }
            }, 6e4 + t);
            0 < e.imgBytes && _o === 0 && (_o = 62500 * $g());
            var l = setTimeout(function() {
              if (e.waitingForImages = false, e.count === 0 && (e.stylesheets && er(e, e.stylesheets), e.unsuspend)) {
                var i = e.unsuspend;
                e.unsuspend = null, i();
              }
            }, (e.imgBytes > _o ? 50 : 800) + t);
            return e.unsuspend = n, function() {
              e.unsuspend = null, clearTimeout(a), clearTimeout(l);
            };
          } : null;
        }
        function Pu() {
          if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets)
              er(this, this.stylesheets);
            else if (this.unsuspend) {
              var e = this.unsuspend;
              this.unsuspend = null, e();
            }
          }
        }
        var Iu = null;
        function er(e, t) {
          e.stylesheets = null, e.unsuspend !== null && (e.count++, Iu = /* @__PURE__ */ new Map(), t.forEach(b0, e), Iu = null, Pu.call(e));
        }
        function b0(e, t) {
          if (!(t.state.loading & 4)) {
            var n = Iu.get(e);
            if (n)
              var a = n.get(null);
            else {
              n = /* @__PURE__ */ new Map(), Iu.set(e, n);
              for (var l = e.querySelectorAll("link[data-precedence],style[data-precedence]"), i = 0; i < l.length; i++) {
                var o = l[i];
                (o.nodeName === "LINK" || o.getAttribute("media") !== "not all") && (n.set(o.dataset.precedence, o), a = o);
              }
              a && n.set(null, a);
            }
            l = t.instance, o = l.getAttribute("data-precedence"), i = n.get(o) || a, i === a && n.set(null, l), n.set(o, l), this.count++, a = Pu.bind(this), l.addEventListener("load", a), l.addEventListener("error", a), i ? i.parentNode.insertBefore(l, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(l, e.firstChild)), t.state.loading |= 4;
          }
        }
        var Ss = { $$typeof: se, Provider: null, Consumer: null, _currentValue: J, _currentValue2: J, _threadCount: 0 };
        function v0(e, t, n, a, l, i, o, y, A) {
          this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ia(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ia(0), this.hiddenUpdates = Ia(null), this.identifierPrefix = a, this.onUncaughtError = l, this.onCaughtError = i, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = A, this.incompleteTransitions = /* @__PURE__ */ new Map();
        }
        function Tm(e, t, n, a, l, i, o, y, A, D, G, k) {
          return e = new v0(e, t, n, o, A, D, G, k, y), t = 1, i === true && (t |= 24), i = kt(3, null, null, t), e.current = i, i.stateNode = e, t = ec(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = { element: a, isDehydrated: n, cache: t }, lc(i), e;
        }
        function Em(e) {
          return e ? (e = Jl, e) : Jl;
        }
        function Am(e, t, n, a, l, i) {
          l = Em(l), a.context === null ? a.context = l : a.pendingContext = l, a = ja(t), a.payload = { element: n }, i = i === void 0 ? null : i, i !== null && (a.callback = i), n = Oa(e, a, t), n !== null && (Lt(n, e, t), Ii(n, e, t));
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
        function Nm(e) {
          if (e.tag === 13 || e.tag === 31) {
            var t = cl(e, 67108864);
            t !== null && Lt(t, e, 67108864), To(e, 67108864);
          }
        }
        function jm(e) {
          if (e.tag === 13 || e.tag === 31) {
            var t = Wt();
            t = it(t);
            var n = cl(e, t);
            n !== null && Lt(n, e, t), To(e, t);
          }
        }
        var tr = true;
        function x0(e, t, n, a) {
          var l = X.T;
          X.T = null;
          var i = I.p;
          try {
            I.p = 2, Eo(e, t, n, a);
          } finally {
            I.p = i, X.T = l;
          }
        }
        function S0(e, t, n, a) {
          var l = X.T;
          X.T = null;
          var i = I.p;
          try {
            I.p = 8, Eo(e, t, n, a);
          } finally {
            I.p = i, X.T = l;
          }
        }
        function Eo(e, t, n, a) {
          if (tr) {
            var l = Ao(a);
            if (l === null)
              co(e, t, a, nr, n), Rm(e, a);
            else if (T0(l, e, t, n, a))
              a.stopPropagation();
            else if (Rm(e, a), t & 4 && -1 < _0.indexOf(e)) {
              for (; l !== null; ) {
                var i = Cn(l);
                if (i !== null)
                  switch (i.tag) {
                    case 3:
                      if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                        var o = jn(i.pendingLanes);
                        if (o !== 0) {
                          var y = i;
                          for (y.pendingLanes |= 2, y.entangledLanes |= 2; o; ) {
                            var A = 1 << 31 - Nt(o);
                            y.entanglements[1] |= A, o &= ~A;
                          }
                          Ln(i), (ze & 6) === 0 && (Hu = Ot() + 500, ps(0));
                        }
                      }
                      break;
                    case 31:
                    case 13:
                      y = cl(i, 2), y !== null && Lt(y, i, 2), Yu(), To(i, 2);
                  }
                if (i = Ao(a), i === null && co(e, t, a, nr, n), i === l)
                  break;
                l = i;
              }
              l !== null && a.stopPropagation();
            } else
              co(e, t, a, null, n);
          }
        }
        function Ao(e) {
          return e = Ul(e), wo(e);
        }
        var nr = null;
        function wo(e) {
          if (nr = null, e = ya(e), e !== null) {
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
          return nr = e, null;
        }
        function Om(e) {
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
                case ji:
                  return 8;
                case Ja:
                case wr:
                  return 32;
                case Nl:
                  return 268435456;
                default:
                  return 32;
              }
            default:
              return 32;
          }
        }
        var No = false, Ya = null, Xa = null, Ga = null, _s = /* @__PURE__ */ new Map(), Ts = /* @__PURE__ */ new Map(), Qa = [], _0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
        function Rm(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Ya = null;
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
              _s.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Ts.delete(t.pointerId);
          }
        }
        function Es(e, t, n, a, l, i) {
          return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: a, nativeEvent: i, targetContainers: [l] }, t !== null && (t = Cn(t), t !== null && Nm(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
        }
        function T0(e, t, n, a, l) {
          switch (t) {
            case "focusin":
              return Ya = Es(Ya, e, t, n, a, l), true;
            case "dragenter":
              return Xa = Es(Xa, e, t, n, a, l), true;
            case "mouseover":
              return Ga = Es(Ga, e, t, n, a, l), true;
            case "pointerover":
              var i = l.pointerId;
              return _s.set(i, Es(_s.get(i) || null, e, t, n, a, l)), true;
            case "gotpointercapture":
              return i = l.pointerId, Ts.set(i, Es(Ts.get(i) || null, e, t, n, a, l)), true;
          }
          return false;
        }
        function Cm(e) {
          var t = ya(e.target);
          if (t !== null) {
            var n = v(t);
            if (n !== null) {
              if (t = n.tag, t === 13) {
                if (t = h(n), t !== null) {
                  e.blockedOn = t, Qs(e.priority, function() {
                    jm(n);
                  });
                  return;
                }
              } else if (t === 31) {
                if (t = x(n), t !== null) {
                  e.blockedOn = t, Qs(e.priority, function() {
                    jm(n);
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
            var n = Ao(e.nativeEvent);
            if (n === null) {
              n = e.nativeEvent;
              var a = new n.constructor(n.type, n);
              al = a, n.target.dispatchEvent(a), al = null;
            } else
              return t = Cn(n), t !== null && Nm(t), e.blockedOn = n, false;
            t.shift();
          }
          return true;
        }
        function zm(e, t, n) {
          ar(e) && n.delete(t);
        }
        function E0() {
          No = false, Ya !== null && ar(Ya) && (Ya = null), Xa !== null && ar(Xa) && (Xa = null), Ga !== null && ar(Ga) && (Ga = null), _s.forEach(zm), Ts.forEach(zm);
        }
        function lr(e, t) {
          e.blockedOn === t && (e.blockedOn = null, No || (No = true, u.unstable_scheduleCallback(u.unstable_NormalPriority, E0)));
        }
        var ir = null;
        function Mm(e) {
          ir !== e && (ir = e, u.unstable_scheduleCallback(u.unstable_NormalPriority, function() {
            ir === e && (ir = null);
            for (var t = 0; t < e.length; t += 3) {
              var n = e[t], a = e[t + 1], l = e[t + 2];
              if (typeof a != "function") {
                if (wo(a || n) === null)
                  continue;
                break;
              }
              var i = Cn(n);
              i !== null && (e.splice(t, 3), t -= 3, Ec(i, { pending: true, data: l, method: n.method, action: a }, a, l));
            }
          }));
        }
        function bi(e) {
          function t(A) {
            return lr(A, e);
          }
          Ya !== null && lr(Ya, e), Xa !== null && lr(Xa, e), Ga !== null && lr(Ga, e), _s.forEach(t), Ts.forEach(t);
          for (var n = 0; n < Qa.length; n++) {
            var a = Qa[n];
            a.blockedOn === e && (a.blockedOn = null);
          }
          for (; 0 < Qa.length && (n = Qa[0], n.blockedOn === null); )
            Cm(n), n.blockedOn === null && Qa.shift();
          if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
            for (a = 0; a < n.length; a += 3) {
              var l = n[a], i = n[a + 1], o = l[gt] || null;
              if (typeof i == "function")
                o || Mm(n);
              else if (o) {
                var y = null;
                if (i && i.hasAttribute("formAction")) {
                  if (l = i, o = i[gt] || null)
                    y = o.formAction;
                  else if (wo(l) !== null)
                    continue;
                } else
                  y = o.action;
                typeof y == "function" ? n[a + 1] = y : (n.splice(a, 3), a -= 3), Mm(n);
              }
            }
        }
        function Um() {
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
        sr.prototype.render = jo.prototype.render = function(e) {
          var t = this._internalRoot;
          if (t === null)
            throw Error(c(409));
          var n = t.current, a = Wt();
          Am(n, a, e, t, null, null);
        }, sr.prototype.unmount = jo.prototype.unmount = function() {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            Am(e.current, 2, null, e, null, null), Yu(), t[On] = null;
          }
        };
        function sr(e) {
          this._internalRoot = e;
        }
        sr.prototype.unstable_scheduleHydration = function(e) {
          if (e) {
            var t = Gs();
            e = { blockedOn: null, target: e, priority: t };
            for (var n = 0; n < Qa.length && t !== 0 && t < Qa[n].priority; n++)
              ;
            Qa.splice(n, 0, e), n === 0 && Cm(e);
          }
        };
        var Dm = s.version;
        if (Dm !== "19.2.0")
          throw Error(c(527, Dm, "19.2.0"));
        I.findDOMNode = function(e) {
          var t = e._reactInternals;
          if (t === void 0)
            throw typeof e.render == "function" ? Error(c(188)) : (e = Object.keys(e).join(","), Error(c(268, e)));
          return e = d(t), e = e !== null ? E(e) : null, e = e === null ? null : e.stateNode, e;
        };
        var A0 = { bundleType: 0, version: "19.2.0", rendererPackageName: "react-dom", currentDispatcherRef: X, reconcilerVersion: "19.2.0" };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
          var ur = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ur.isDisabled && ur.supportsFiber)
            try {
              Fa = ur.inject(A0), Rt = ur;
            } catch (e) {
            }
        }
        return Ns.createRoot = function(e, t) {
          if (!g(e))
            throw Error(c(299));
          var n = false, a = "", l = Gd, i = Qd, o = Vd;
          return t != null && (t.unstable_strictMode === true && (n = true), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (l = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Tm(e, 1, false, null, null, n, a, null, l, i, o, Um), e[On] = t.current, ro(e), new jo(t);
        }, Ns.hydrateRoot = function(e, t, n) {
          if (!g(e))
            throw Error(c(299));
          var a = false, l = "", i = Gd, o = Qd, y = Vd, A = null;
          return n != null && (n.unstable_strictMode === true && (a = true), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onUncaughtError !== void 0 && (i = n.onUncaughtError), n.onCaughtError !== void 0 && (o = n.onCaughtError), n.onRecoverableError !== void 0 && (y = n.onRecoverableError), n.formState !== void 0 && (A = n.formState)), t = Tm(e, 1, true, t, n != null ? n : null, a, l, A, i, o, y, Um), t.context = Em(null), n = t.current, a = Wt(), a = it(a), l = ja(a), l.callback = null, Oa(n, l, a), n = a, t.current.lanes = n, Gn(t, n), Ln(t), e[On] = t.current, ro(e), new sr(t);
        }, Ns.version = "19.2.0", Ns;
      }
      var $m;
      function by() {
        if ($m)
          return Do.exports;
        $m = 1;
        function u() {
          if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
            } catch (s) {
              console.error(s);
            }
        }
        return u(), Do.exports = yy(), Do.exports;
      }
      var vy = by();
      var xy = Ep(vy);
      var Sy = Object.defineProperty;
      var _y = (u, s, r) => s in u ? Sy(u, s, { enumerable: true, configurable: true, writable: true, value: r }) : u[s] = r;
      var El = (u, s, r) => _y(u, typeof s != "symbol" ? s + "" : s, r);
      var Ty = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
      var xi = {};
      var js = {};
      var Sn = {};
      var Pm;
      function jp() {
        if (Pm)
          return Sn;
        Pm = 1;
        var u = Sn && Sn.__assign || function() {
          return u = Object.assign || function(g) {
            for (var v, h = 1, x = arguments.length; h < x; h++) {
              v = arguments[h];
              for (var m in v)
                Object.prototype.hasOwnProperty.call(v, m) && (g[m] = v[m]);
            }
            return g;
          }, u.apply(this, arguments);
        }, s = Sn && Sn.__awaiter || function(g, v, h, x) {
          function m(d) {
            return d instanceof h ? d : new h(function(E) {
              E(d);
            });
          }
          return new (h || (h = Promise))(function(d, E) {
            function N(C) {
              try {
                w(x.next(C));
              } catch (Z) {
                E(Z);
              }
            }
            function Y(C) {
              try {
                w(x.throw(C));
              } catch (Z) {
                E(Z);
              }
            }
            function w(C) {
              C.done ? d(C.value) : m(C.value).then(N, Y);
            }
            w((x = x.apply(g, v || [])).next());
          });
        }, r = Sn && Sn.__generator || function(g, v) {
          var h = { label: 0, sent: function() {
            if (d[0] & 1)
              throw d[1];
            return d[1];
          }, trys: [], ops: [] }, x, m, d, E;
          return E = { next: N(0), throw: N(1), return: N(2) }, typeof Symbol == "function" && (E[Symbol.iterator] = function() {
            return this;
          }), E;
          function N(w) {
            return function(C) {
              return Y([w, C]);
            };
          }
          function Y(w) {
            if (x)
              throw new TypeError("Generator is already executing.");
            for (; E && (E = 0, w[0] && (h = 0)), h; )
              try {
                if (x = 1, m && (d = w[0] & 2 ? m.return : w[0] ? m.throw || ((d = m.return) && d.call(m), 0) : m.next) && !(d = d.call(m, w[1])).done)
                  return d;
                switch (m = 0, d && (w = [w[0] & 2, d.value]), w[0]) {
                  case 0:
                  case 1:
                    d = w;
                    break;
                  case 4:
                    return h.label++, { value: w[1], done: false };
                  case 5:
                    h.label++, m = w[1], w = [0];
                    continue;
                  case 7:
                    w = h.ops.pop(), h.trys.pop();
                    continue;
                  default:
                    if (d = h.trys, !(d = d.length > 0 && d[d.length - 1]) && (w[0] === 6 || w[0] === 2)) {
                      h = 0;
                      continue;
                    }
                    if (w[0] === 3 && (!d || w[1] > d[0] && w[1] < d[3])) {
                      h.label = w[1];
                      break;
                    }
                    if (w[0] === 6 && h.label < d[1]) {
                      h.label = d[1], d = w;
                      break;
                    }
                    if (d && h.label < d[2]) {
                      h.label = d[2], h.ops.push(w);
                      break;
                    }
                    d[2] && h.ops.pop(), h.trys.pop();
                    continue;
                }
                w = v.call(g, h);
              } catch (C) {
                w = [6, C], m = 0;
              } finally {
                x = d = 0;
              }
            if (w[0] & 5)
              throw w[1];
            return { value: w[0] ? w[1] : void 0, done: true };
          }
        };
        Object.defineProperty(Sn, "__esModule", { value: true }), Sn.FrappeCall = void 0;
        var c = function() {
          function g(v, h, x, m, d) {
            this.appURL = v, this.axios = h, this.useToken = x != null ? x : false, this.token = m, this.tokenType = d;
          }
          return g.prototype.get = function(v, h) {
            return s(this, void 0, void 0, function() {
              var x;
              return r(this, function(m) {
                return x = new URLSearchParams(), h && Object.entries(h).forEach(function(d) {
                  var E = d[0], N = d[1];
                  if (N != null) {
                    var Y = typeof N == "object" ? JSON.stringify(N) : N;
                    x.set(E, Y);
                  }
                }), [2, this.axios.get("/api/method/".concat(v), { params: x }).then(function(d) {
                  return d.data;
                }).catch(function(d) {
                  var E, N;
                  throw u(u({}, d.response.data), { httpStatus: d.response.status, httpStatusText: d.response.statusText, message: (E = d.response.data.message) !== null && E !== void 0 ? E : "There was an error.", exception: (N = d.response.data.exception) !== null && N !== void 0 ? N : "" });
                })];
              });
            });
          }, g.prototype.post = function(v, h) {
            return s(this, void 0, void 0, function() {
              return r(this, function(x) {
                return [2, this.axios.post("/api/method/".concat(v), u({}, h)).then(function(m) {
                  return m.data;
                }).catch(function(m) {
                  var d, E;
                  throw u(u({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: (d = m.response.data.message) !== null && d !== void 0 ? d : "There was an error.", exception: (E = m.response.data.exception) !== null && E !== void 0 ? E : "" });
                })];
              });
            });
          }, g.prototype.put = function(v, h) {
            return s(this, void 0, void 0, function() {
              return r(this, function(x) {
                return [2, this.axios.put("/api/method/".concat(v), u({}, h)).then(function(m) {
                  return m.data;
                }).catch(function(m) {
                  var d, E;
                  throw u(u({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: (d = m.response.data.message) !== null && d !== void 0 ? d : "There was an error.", exception: (E = m.response.data.exception) !== null && E !== void 0 ? E : "" });
                })];
              });
            });
          }, g.prototype.delete = function(v, h) {
            return s(this, void 0, void 0, function() {
              return r(this, function(x) {
                return [2, this.axios.delete("/api/method/".concat(v), { params: h }).then(function(m) {
                  return m.data;
                }).catch(function(m) {
                  var d, E;
                  throw u(u({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: (d = m.response.data.message) !== null && d !== void 0 ? d : "There was an error.", exception: (E = m.response.data.exception) !== null && E !== void 0 ? E : "" });
                })];
              });
            });
          }, g;
        }();
        return Sn.FrappeCall = c, Sn;
      }
      var _n = {};
      var Im;
      function Op() {
        if (Im)
          return _n;
        Im = 1;
        var u = _n && _n.__assign || function() {
          return u = Object.assign || function(g) {
            for (var v, h = 1, x = arguments.length; h < x; h++) {
              v = arguments[h];
              for (var m in v)
                Object.prototype.hasOwnProperty.call(v, m) && (g[m] = v[m]);
            }
            return g;
          }, u.apply(this, arguments);
        }, s = _n && _n.__awaiter || function(g, v, h, x) {
          function m(d) {
            return d instanceof h ? d : new h(function(E) {
              E(d);
            });
          }
          return new (h || (h = Promise))(function(d, E) {
            function N(C) {
              try {
                w(x.next(C));
              } catch (Z) {
                E(Z);
              }
            }
            function Y(C) {
              try {
                w(x.throw(C));
              } catch (Z) {
                E(Z);
              }
            }
            function w(C) {
              C.done ? d(C.value) : m(C.value).then(N, Y);
            }
            w((x = x.apply(g, v || [])).next());
          });
        }, r = _n && _n.__generator || function(g, v) {
          var h = { label: 0, sent: function() {
            if (d[0] & 1)
              throw d[1];
            return d[1];
          }, trys: [], ops: [] }, x, m, d, E;
          return E = { next: N(0), throw: N(1), return: N(2) }, typeof Symbol == "function" && (E[Symbol.iterator] = function() {
            return this;
          }), E;
          function N(w) {
            return function(C) {
              return Y([w, C]);
            };
          }
          function Y(w) {
            if (x)
              throw new TypeError("Generator is already executing.");
            for (; E && (E = 0, w[0] && (h = 0)), h; )
              try {
                if (x = 1, m && (d = w[0] & 2 ? m.return : w[0] ? m.throw || ((d = m.return) && d.call(m), 0) : m.next) && !(d = d.call(m, w[1])).done)
                  return d;
                switch (m = 0, d && (w = [w[0] & 2, d.value]), w[0]) {
                  case 0:
                  case 1:
                    d = w;
                    break;
                  case 4:
                    return h.label++, { value: w[1], done: false };
                  case 5:
                    h.label++, m = w[1], w = [0];
                    continue;
                  case 7:
                    w = h.ops.pop(), h.trys.pop();
                    continue;
                  default:
                    if (d = h.trys, !(d = d.length > 0 && d[d.length - 1]) && (w[0] === 6 || w[0] === 2)) {
                      h = 0;
                      continue;
                    }
                    if (w[0] === 3 && (!d || w[1] > d[0] && w[1] < d[3])) {
                      h.label = w[1];
                      break;
                    }
                    if (w[0] === 6 && h.label < d[1]) {
                      h.label = d[1], d = w;
                      break;
                    }
                    if (d && h.label < d[2]) {
                      h.label = d[2], h.ops.push(w);
                      break;
                    }
                    d[2] && h.ops.pop(), h.trys.pop();
                    continue;
                }
                w = v.call(g, h);
              } catch (C) {
                w = [6, C], m = 0;
              } finally {
                x = d = 0;
              }
            if (w[0] & 5)
              throw w[1];
            return { value: w[0] ? w[1] : void 0, done: true };
          }
        };
        Object.defineProperty(_n, "__esModule", { value: true }), _n.FrappeDB = void 0;
        var c = function() {
          function g(v, h, x, m, d) {
            this.appURL = v, this.axios = h, this.useToken = x != null ? x : false, this.token = m, this.tokenType = d;
          }
          return g.prototype.getDoc = function(v, h) {
            return h === void 0 && (h = ""), s(this, void 0, void 0, function() {
              return r(this, function(x) {
                return [2, this.axios.get("/api/resource/".concat(v, "/").concat(encodeURIComponent(h))).then(function(m) {
                  return m.data.data;
                }).catch(function(m) {
                  var d, E;
                  throw u(u({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: "There was an error while fetching the document.", exception: (E = (d = m.response.data.exception) !== null && d !== void 0 ? d : m.response.data.exc_type) !== null && E !== void 0 ? E : "" });
                })];
              });
            });
          }, g.prototype.getDocList = function(v, h) {
            var x;
            return s(this, void 0, void 0, function() {
              var m, d, E, N, Y, w, C, Z, ie, he, _e;
              return r(this, function(se) {
                return m = {}, h && (d = h.fields, E = h.filters, N = h.orFilters, Y = h.orderBy, w = h.limit, C = h.limit_start, Z = h.groupBy, ie = h.asDict, he = ie === void 0 ? true : ie, _e = Y ? "".concat(String(Y == null ? void 0 : Y.field), " ").concat((x = Y == null ? void 0 : Y.order) !== null && x !== void 0 ? x : "asc") : "", m = { fields: d ? JSON.stringify(d) : void 0, filters: E ? JSON.stringify(E) : void 0, or_filters: N ? JSON.stringify(N) : void 0, order_by: _e, group_by: Z, limit: w, limit_start: C, as_dict: he }), [2, this.axios.get("/api/resource/".concat(v), { params: m }).then(function(ve) {
                  return ve.data.data;
                }).catch(function(ve) {
                  var Te, Ue;
                  throw u(u({}, ve.response.data), { httpStatus: ve.response.status, httpStatusText: ve.response.statusText, message: "There was an error while fetching the documents.", exception: (Ue = (Te = ve.response.data.exception) !== null && Te !== void 0 ? Te : ve.response.data.exc_type) !== null && Ue !== void 0 ? Ue : "" });
                })];
              });
            });
          }, g.prototype.createDoc = function(v, h) {
            return s(this, void 0, void 0, function() {
              return r(this, function(x) {
                return [2, this.axios.post("/api/resource/".concat(v), u({}, h)).then(function(m) {
                  return m.data.data;
                }).catch(function(m) {
                  var d, E, N;
                  throw u(u({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: (d = m.response.data.message) !== null && d !== void 0 ? d : "There was an error while creating the document.", exception: (N = (E = m.response.data.exception) !== null && E !== void 0 ? E : m.response.data.exc_type) !== null && N !== void 0 ? N : "" });
                })];
              });
            });
          }, g.prototype.updateDoc = function(v, h, x) {
            return s(this, void 0, void 0, function() {
              return r(this, function(m) {
                return [2, this.axios.put("/api/resource/".concat(v, "/").concat(h && encodeURIComponent(h)), u({}, x)).then(function(d) {
                  return d.data.data;
                }).catch(function(d) {
                  var E, N, Y;
                  throw u(u({}, d.response.data), { httpStatus: d.response.status, httpStatusText: d.response.statusText, message: (E = d.response.data.message) !== null && E !== void 0 ? E : "There was an error while updating the document.", exception: (Y = (N = d.response.data.exception) !== null && N !== void 0 ? N : d.response.data.exc_type) !== null && Y !== void 0 ? Y : "" });
                })];
              });
            });
          }, g.prototype.deleteDoc = function(v, h) {
            return s(this, void 0, void 0, function() {
              return r(this, function(x) {
                return [2, this.axios.delete("/api/resource/".concat(v, "/").concat(h && encodeURIComponent(h))).then(function(m) {
                  return m.data;
                }).catch(function(m) {
                  var d, E;
                  throw u(u({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: "There was an error while deleting the document.", exception: (E = (d = m.response.data.exception) !== null && d !== void 0 ? d : m.response.data.exc_type) !== null && E !== void 0 ? E : "" });
                })];
              });
            });
          }, g.prototype.getCount = function(v, h, x, m) {
            return x === void 0 && (x = false), m === void 0 && (m = false), s(this, void 0, void 0, function() {
              var d;
              return r(this, function(E) {
                return d = { doctype: v, filters: [] }, x && (d.cache = x), m && (d.debug = m), h && (d.filters = h ? JSON.stringify(h) : void 0), [2, this.axios.get("/api/method/frappe.client.get_count", { params: d }).then(function(N) {
                  return N.data.message;
                }).catch(function(N) {
                  var Y, w;
                  throw u(u({}, N.response.data), { httpStatus: N.response.status, httpStatusText: N.response.statusText, message: "There was an error while getting the count.", exception: (w = (Y = N.response.data.exception) !== null && Y !== void 0 ? Y : N.response.data.exc_type) !== null && w !== void 0 ? w : "" });
                })];
              });
            });
          }, g.prototype.getLastDoc = function(v, h) {
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
          }, g.prototype.renameDoc = function(v, h, x, m) {
            return m === void 0 && (m = false), s(this, void 0, void 0, function() {
              return r(this, function(d) {
                return [2, this.axios.post("/api/method/frappe.client.rename_doc", { doctype: v, old_name: h, new_name: x, merge: m }).then(function(E) {
                  return E.data;
                }).catch(function(E) {
                  var N, Y, w;
                  throw u(u({}, E.response.data), { httpStatus: E.response.status, httpStatusText: E.response.statusText, message: (N = E.response.data.message) !== null && N !== void 0 ? N : "There was an error while renaming the document.", exception: (w = (Y = E.response.data.exception) !== null && Y !== void 0 ? Y : E.response.data.exc_type) !== null && w !== void 0 ? w : "" });
                })];
              });
            });
          }, g.prototype.getValue = function(v, h, x, m, d, E) {
            return m === void 0 && (m = true), d === void 0 && (d = false), E === void 0 && (E = null), s(this, void 0, void 0, function() {
              var N;
              return r(this, function(Y) {
                return N = { doctype: v, fieldname: "[]", filters: [], as_dict: m, debug: d, parent: null }, h && (N.fieldname = typeof h == "object" ? JSON.stringify(h) : h), x && (N.filters = x ? JSON.stringify(x) : void 0), E && (N.parent = E), [2, this.axios.get("/api/method/frappe.client.get_value", { params: N }).then(function(w) {
                  return w.data;
                }).catch(function(w) {
                  var C, Z;
                  throw u(u({}, w.response.data), { httpStatus: w.response.status, httpStatusText: w.response.statusText, message: "There was an error while getting the value.", exception: (Z = (C = w.response.data.exception) !== null && C !== void 0 ? C : w.response.data.exc_type) !== null && Z !== void 0 ? Z : "" });
                })];
              });
            });
          }, g.prototype.setValue = function(v, h, x, m) {
            return s(this, void 0, void 0, function() {
              return r(this, function(d) {
                return x !== null && typeof x == "object" && !Array.isArray(x) && (m = void 0), [2, this.axios.post("/api/method/frappe.client.set_value", { doctype: v, name: h, fieldname: x, value: m }).then(function(E) {
                  return E.data;
                }).catch(function(E) {
                  var N, Y;
                  throw u(u({}, E.response.data), { httpStatus: E.response.status, httpStatusText: E.response.statusText, message: "There was an error while setting the value.", exception: (Y = (N = E.response.data.exception) !== null && N !== void 0 ? N : E.response.data.exc_type) !== null && Y !== void 0 ? Y : "" });
                })];
              });
            });
          }, g.prototype.getSingleValue = function(v, h) {
            return s(this, void 0, void 0, function() {
              var x;
              return r(this, function(m) {
                return x = { doctype: v, field: h }, [2, this.axios.get("/api/method/frappe.client.get_single_value", { params: x }).then(function(d) {
                  return d.data;
                }).catch(function(d) {
                  var E, N;
                  throw u(u({}, d.response.data), { httpStatus: d.response.status, httpStatusText: d.response.statusText, message: "There was an error while getting the value of single doctype.", exception: (N = (E = d.response.data.exception) !== null && E !== void 0 ? E : d.response.data.exc_type) !== null && N !== void 0 ? N : "" });
                })];
              });
            });
          }, g.prototype.submit = function(v) {
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
          }, g.prototype.cancel = function(v, h) {
            return s(this, void 0, void 0, function() {
              return r(this, function(x) {
                return [2, this.axios.post("/api/method/frappe.client.cancel", { doctype: v, name: h }).then(function(m) {
                  return m.data;
                }).catch(function(m) {
                  var d, E;
                  throw u(u({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: "There was an error while cancelling the document.", exception: (E = (d = m.response.data.exception) !== null && d !== void 0 ? d : m.response.data.exc_type) !== null && E !== void 0 ? E : "" });
                })];
              });
            });
          }, g;
        }();
        return _n.FrappeDB = c, _n;
      }
      var Tn = {};
      var ha = {};
      var Lo;
      var ep;
      function Ey() {
        if (ep)
          return Lo;
        ep = 1;
        function u(f, p) {
          return function() {
            return f.apply(p, arguments);
          };
        }
        const { toString: s } = Object.prototype, { getPrototypeOf: r } = Object, { iterator: c, toStringTag: g } = Symbol, v = ((f) => (p) => {
          const S = s.call(p);
          return f[S] || (f[S] = S.slice(8, -1).toLowerCase());
        })(/* @__PURE__ */ Object.create(null)), h = (f) => (f = f.toLowerCase(), (p) => v(p) === f), x = (f) => (p) => typeof p === f, { isArray: m } = Array, d = x("undefined");
        function E(f) {
          return f !== null && !d(f) && f.constructor !== null && !d(f.constructor) && C(f.constructor.isBuffer) && f.constructor.isBuffer(f);
        }
        const N = h("ArrayBuffer");
        function Y(f) {
          let p;
          return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? p = ArrayBuffer.isView(f) : p = f && f.buffer && N(f.buffer), p;
        }
        const w = x("string"), C = x("function"), Z = x("number"), ie = (f) => f !== null && typeof f == "object", he = (f) => f === true || f === false, _e = (f) => {
          if (v(f) !== "object")
            return false;
          const p = r(f);
          return (p === null || p === Object.prototype || Object.getPrototypeOf(p) === null) && !(g in f) && !(c in f);
        }, se = (f) => {
          if (!ie(f) || E(f))
            return false;
          try {
            return Object.keys(f).length === 0 && Object.getPrototypeOf(f) === Object.prototype;
          } catch (p) {
            return false;
          }
        }, ve = h("Date"), Te = h("File"), Ue = h("Blob"), fe = h("FileList"), lt = (f) => ie(f) && C(f.pipe), wt = (f) => {
          let p;
          return f && (typeof FormData == "function" && f instanceof FormData || C(f.append) && ((p = v(f)) === "formdata" || p === "object" && C(f.toString) && f.toString() === "[object FormData]"));
        }, Pt = h("URLSearchParams"), [pt, De, ke, Me] = ["ReadableStream", "Request", "Response", "Headers"].map(h), xt = (f) => f.trim ? f.trim() : f.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        function X(f, p, { allOwnKeys: S = false } = {}) {
          if (f === null || typeof f > "u")
            return;
          let T, j;
          if (typeof f != "object" && (f = [f]), m(f))
            for (T = 0, j = f.length; T < j; T++)
              p.call(null, f[T], T, f);
          else {
            if (E(f))
              return;
            const M = S ? Object.getOwnPropertyNames(f) : Object.keys(f), z = M.length;
            let F;
            for (T = 0; T < z; T++)
              F = M[T], p.call(null, f[F], F, f);
          }
        }
        function I(f, p) {
          if (E(f))
            return null;
          p = p.toLowerCase();
          const S = Object.keys(f);
          let T = S.length, j;
          for (; T-- > 0; )
            if (j = S[T], p === j.toLowerCase())
              return j;
          return null;
        }
        const J = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Ty, ee = (f) => !d(f) && f !== J;
        function de() {
          const { caseless: f, skipUndefined: p } = ee(this) && this || {}, S = {}, T = (j, M) => {
            const z = f && I(S, M) || M;
            _e(S[z]) && _e(j) ? S[z] = de(S[z], j) : _e(j) ? S[z] = de({}, j) : m(j) ? S[z] = j.slice() : (!p || !d(j)) && (S[z] = j);
          };
          for (let j = 0, M = arguments.length; j < M; j++)
            arguments[j] && X(arguments[j], T);
          return S;
        }
        const _ = (f, p, S, { allOwnKeys: T } = {}) => (X(p, (j, M) => {
          S && C(j) ? f[M] = u(j, S) : f[M] = j;
        }, { allOwnKeys: T }), f), B = (f) => (f.charCodeAt(0) === 65279 && (f = f.slice(1)), f), V = (f, p, S, T) => {
          f.prototype = Object.create(p.prototype, T), f.prototype.constructor = f, Object.defineProperty(f, "super", { value: p.prototype }), S && Object.assign(f.prototype, S);
        }, K = (f, p, S, T) => {
          let j, M, z;
          const F = {};
          if (p = p || {}, f == null)
            return p;
          do {
            for (j = Object.getOwnPropertyNames(f), M = j.length; M-- > 0; )
              z = j[M], (!T || T(z, f, p)) && !F[z] && (p[z] = f[z], F[z] = true);
            f = S !== false && r(f);
          } while (f && (!S || S(f, p)) && f !== Object.prototype);
          return p;
        }, ce = (f, p, S) => {
          f = String(f), (S === void 0 || S > f.length) && (S = f.length), S -= p.length;
          const T = f.indexOf(p, S);
          return T !== -1 && T === S;
        }, xe = (f) => {
          if (!f)
            return null;
          if (m(f))
            return f;
          let p = f.length;
          if (!Z(p))
            return null;
          const S = new Array(p);
          for (; p-- > 0; )
            S[p] = f[p];
          return S;
        }, me = ((f) => (p) => f && p instanceof f)(typeof Uint8Array < "u" && r(Uint8Array)), ft = (f, p) => {
          const S = (f && f[c]).call(f);
          let T;
          for (; (T = S.next()) && !T.done; ) {
            const j = T.value;
            p.call(f, j[0], j[1]);
          }
        }, Ze = (f, p) => {
          let S;
          const T = [];
          for (; (S = f.exec(p)) !== null; )
            T.push(S);
          return T;
        }, St = h("HTMLFormElement"), pa = (f) => f.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(p, S, T) {
          return S.toUpperCase() + T;
        }), wl = (({ hasOwnProperty: f }) => (p, S) => f.call(p, S))(Object.prototype), zs = h("RegExp"), Nn = (f, p) => {
          const S = Object.getOwnPropertyDescriptors(f), T = {};
          X(S, (j, M) => {
            let z;
            (z = p(j, M, f)) !== false && (T[M] = z || j);
          }), Object.defineProperties(f, T);
        }, Ti = (f) => {
          Nn(f, (p, S) => {
            if (C(f) && ["arguments", "caller", "callee"].indexOf(S) !== -1)
              return false;
            const T = f[S];
            if (C(T)) {
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
          const S = {}, T = (j) => {
            j.forEach((M) => {
              S[M] = true;
            });
          };
          return m(f) ? T(f) : T(String(f).split(p)), S;
        }, Er = () => {
        }, Ms = (f, p) => f != null && Number.isFinite(f = +f) ? f : p;
        function Ai(f) {
          return !!(f && C(f.append) && f[g] === "FormData" && f[c]);
        }
        const wi = (f) => {
          const p = new Array(10), S = (T, j) => {
            if (ie(T)) {
              if (p.indexOf(T) >= 0)
                return;
              if (E(T))
                return T;
              if (!("toJSON" in T)) {
                p[j] = T;
                const M = m(T) ? [] : {};
                return X(T, (z, F) => {
                  const ae = S(z, j + 1);
                  !d(ae) && (M[F] = ae);
                }), p[j] = void 0, M;
              }
            }
            return T;
          };
          return S(f, 0);
        }, Ni = h("AsyncFunction"), Ar = (f) => f && (ie(f) || C(f)) && C(f.then) && C(f.catch), Us = ((f, p) => f ? setImmediate : p ? ((S, T) => (J.addEventListener("message", ({ source: j, data: M }) => {
          j === J && M === S && T.length && T.shift()();
        }, false), (j) => {
          T.push(j), J.postMessage(S, "*");
        }))(`axios@${Math.random()}`, []) : (S) => setTimeout(S))(typeof setImmediate == "function", C(J.postMessage)), Ot = typeof queueMicrotask < "u" ? queueMicrotask.bind(J) : typeof process < "u" && process.nextTick || Us;
        var H = { isArray: m, isArrayBuffer: N, isBuffer: E, isFormData: wt, isArrayBufferView: Y, isString: w, isNumber: Z, isBoolean: he, isObject: ie, isPlainObject: _e, isEmptyObject: se, isReadableStream: pt, isRequest: De, isResponse: ke, isHeaders: Me, isUndefined: d, isDate: ve, isFile: Te, isBlob: Ue, isRegExp: zs, isFunction: C, isStream: lt, isURLSearchParams: Pt, isTypedArray: me, isFileList: fe, forEach: X, merge: de, extend: _, trim: xt, stripBOM: B, inherits: V, toFlatObject: K, kindOf: v, kindOfTest: h, endsWith: ce, toArray: xe, forEachEntry: ft, matchAll: Ze, isHTMLForm: St, hasOwnProperty: wl, hasOwnProp: wl, reduceDescriptors: Nn, freezeMethods: Ti, toObjectSet: Ei, toCamelCase: pa, noop: Er, toFiniteNumber: Ms, findKey: I, global: J, isContextDefined: ee, isSpecCompliantForm: Ai, toJSONObject: wi, isAsyncFn: Ni, isThenable: Ar, setImmediate: Us, asap: Ot, isIterable: (f) => f != null && C(f[c]) };
        function pe(f, p, S, T, j) {
          Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = f, this.name = "AxiosError", p && (this.code = p), S && (this.config = S), T && (this.request = T), j && (this.response = j, this.status = j.status ? j.status : null);
        }
        H.inherits(pe, Error, { toJSON: function() {
          return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: H.toJSONObject(this.config), code: this.code, status: this.status };
        } });
        const ji = pe.prototype, Ja = {};
        ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((f) => {
          Ja[f] = { value: f };
        }), Object.defineProperties(pe, Ja), Object.defineProperty(ji, "isAxiosError", { value: true }), pe.from = (f, p, S, T, j, M) => {
          const z = Object.create(ji);
          H.toFlatObject(f, z, function(W) {
            return W !== Error.prototype;
          }, (W) => W !== "isAxiosError");
          const F = f && f.message ? f.message : "Error", ae = p == null && f ? f.code : p;
          return pe.call(z, F, ae, S, T, j), f && z.cause == null && Object.defineProperty(z, "cause", { value: f, configurable: true }), z.name = f && f.name || "Error", M && Object.assign(z, M), z;
        };
        var wr = null;
        function Nl(f) {
          return H.isPlainObject(f) || H.isArray(f);
        }
        function Ds(f) {
          return H.endsWith(f, "[]") ? f.slice(0, -2) : f;
        }
        function Bs(f, p, S) {
          return f ? f.concat(p).map(function(T, j) {
            return T = Ds(T), !S && j ? "[" + T + "]" : T;
          }).join(S ? "." : "") : p;
        }
        function Fa(f) {
          return H.isArray(f) && !f.some(Nl);
        }
        const Rt = H.toFlatObject(H, {}, null, function(f) {
          return /^is[A-Z]/.test(f);
        });
        function Gt(f, p, S) {
          if (!H.isObject(f))
            throw new TypeError("target must be an object");
          p = p || new FormData(), S = H.toFlatObject(S, { metaTokens: true, dots: false, indexes: false }, false, function(ge, P) {
            return !H.isUndefined(P[ge]);
          });
          const T = S.metaTokens, j = S.visitor || W, M = S.dots, z = S.indexes, F = (S.Blob || typeof Blob < "u" && Blob) && H.isSpecCompliantForm(p);
          if (!H.isFunction(j))
            throw new TypeError("visitor must be a function");
          function ae(ge) {
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
          function W(ge, P, te) {
            let Ke = ge;
            if (ge && !te && typeof ge == "object") {
              if (H.endsWith(P, "{}"))
                P = T ? P : P.slice(0, -2), ge = JSON.stringify(ge);
              else if (H.isArray(ge) && Fa(ge) || (H.isFileList(ge) || H.endsWith(P, "[]")) && (Ke = H.toArray(ge)))
                return P = Ds(P), Ke.forEach(function(bt, tt) {
                  !(H.isUndefined(bt) || bt === null) && p.append(z === true ? Bs([P], tt, M) : z === null ? P : P + "[]", ae(bt));
                }), false;
            }
            return Nl(ge) ? true : (p.append(Bs(te, P, M), ae(ge)), false);
          }
          const $ = [], oe = Object.assign(Rt, { defaultVisitor: W, convertValue: ae, isVisitable: Nl });
          function He(ge, P) {
            if (!H.isUndefined(ge)) {
              if ($.indexOf(ge) !== -1)
                throw Error("Circular reference detected in " + P.join("."));
              $.push(ge), H.forEach(ge, function(te, Ke) {
                (!(H.isUndefined(te) || te === null) && j.call(p, te, H.isString(Ke) ? Ke.trim() : Ke, P, oe)) === true && He(te, P ? P.concat(Ke) : [Ke]);
              }), $.pop();
            }
          }
          if (!H.isObject(f))
            throw new TypeError("data must be an object");
          return He(f), p;
        }
        function Nt(f) {
          const p = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
          return encodeURIComponent(f).replace(/[!'()~]|%20|%00/g, function(S) {
            return p[S];
          });
        }
        function Oi(f, p) {
          this._pairs = [], f && Gt(f, this, p);
        }
        const qs = Oi.prototype;
        qs.append = function(f, p) {
          this._pairs.push([f, p]);
        }, qs.toString = function(f) {
          const p = f ? function(S) {
            return f.call(this, S, Nt);
          } : Nt;
          return this._pairs.map(function(S) {
            return p(S[0]) + "=" + p(S[1]);
          }, "").join("&");
        };
        function Nr(f) {
          return encodeURIComponent(f).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
        }
        function Wa(f, p, S) {
          if (!p)
            return f;
          const T = S && S.encode || Nr;
          H.isFunction(S) && (S = { serialize: S });
          const j = S && S.serialize;
          let M;
          if (j ? M = j(p, S) : M = H.isURLSearchParams(p) ? p.toString() : new Oi(p, S).toString(T), M) {
            const z = f.indexOf("#");
            z !== -1 && (f = f.slice(0, z)), f += (f.indexOf("?") === -1 ? "?" : "&") + M;
          }
          return f;
        }
        class jl {
          constructor() {
            this.handlers = [];
          }
          use(p, S, T) {
            return this.handlers.push({ fulfilled: p, rejected: S, synchronous: T ? T.synchronous : false, runWhen: T ? T.runWhen : null }), this.handlers.length - 1;
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
        var $a = jl, jn = { silentJSONParsing: true, forcedJSONParsing: true, clarifyTimeoutError: false }, Ol = typeof URLSearchParams < "u" ? URLSearchParams : Oi, Pa = typeof FormData < "u" ? FormData : null, jr = typeof Blob < "u" ? Blob : null, Hs = { isBrowser: true, classes: { URLSearchParams: Ol, FormData: Pa, Blob: jr }, protocols: ["http", "https", "file", "blob", "url", "data"] };
        const Ia = typeof window < "u" && typeof document < "u", Gn = typeof navigator == "object" && navigator || void 0, Or = Ia && (!Gn || ["ReactNative", "NativeScript", "NS"].indexOf(Gn.product) < 0), Ls = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Ys = Ia && window.location.href || "http://localhost";
        var Xs = Object.freeze({ __proto__: null, hasBrowserEnv: Ia, hasStandardBrowserWebWorkerEnv: Ls, hasStandardBrowserEnv: Or, navigator: Gn, origin: Ys }), it = Ve(Ve({}, Xs), Hs);
        function Ri(f, p) {
          return Gt(f, new it.classes.URLSearchParams(), Ve({ visitor: function(S, T, j, M) {
            return it.isNode && H.isBuffer(S) ? (this.append(T, S.toString("base64")), false) : M.defaultVisitor.apply(this, arguments);
          } }, p));
        }
        function Gs(f) {
          return H.matchAll(/\w+|\[(\w*)]/g, f).map((p) => p[0] === "[]" ? "" : p[1] || p[0]);
        }
        function Qs(f) {
          const p = {}, S = Object.keys(f);
          let T;
          const j = S.length;
          let M;
          for (T = 0; T < j; T++)
            M = S[T], p[M] = f[M];
          return p;
        }
        function gn(f) {
          function p(S, T, j, M) {
            let z = S[M++];
            if (z === "__proto__")
              return true;
            const F = Number.isFinite(+z), ae = M >= S.length;
            return z = !z && H.isArray(j) ? j.length : z, ae ? (H.hasOwnProp(j, z) ? j[z] = [j[z], T] : j[z] = T, !F) : ((!j[z] || !H.isObject(j[z])) && (j[z] = []), p(S, T, j[z], M) && H.isArray(j[z]) && (j[z] = Qs(j[z])), !F);
          }
          if (H.isFormData(f) && H.isFunction(f.entries)) {
            const S = {};
            return H.forEachEntry(f, (T, j) => {
              p(Gs(T), j, S, 0);
            }), S;
          }
          return null;
        }
        function dt(f, p, S) {
          if (H.isString(f))
            try {
              return (p || JSON.parse)(f), H.trim(f);
            } catch (T) {
              if (T.name !== "SyntaxError")
                throw T;
            }
          return (S || JSON.stringify)(f);
        }
        const gt = { transitional: jn, adapter: ["xhr", "http", "fetch"], transformRequest: [function(f, p) {
          const S = p.getContentType() || "", T = S.indexOf("application/json") > -1, j = H.isObject(f);
          if (j && H.isHTMLForm(f) && (f = new FormData(f)), H.isFormData(f))
            return T ? JSON.stringify(gn(f)) : f;
          if (H.isArrayBuffer(f) || H.isBuffer(f) || H.isStream(f) || H.isFile(f) || H.isBlob(f) || H.isReadableStream(f))
            return f;
          if (H.isArrayBufferView(f))
            return f.buffer;
          if (H.isURLSearchParams(f))
            return p.setContentType("application/x-www-form-urlencoded;charset=utf-8", false), f.toString();
          let M;
          if (j) {
            if (S.indexOf("application/x-www-form-urlencoded") > -1)
              return Ri(f, this.formSerializer).toString();
            if ((M = H.isFileList(f)) || S.indexOf("multipart/form-data") > -1) {
              const z = this.env && this.env.FormData;
              return Gt(M ? { "files[]": f } : f, z && new z(), this.formSerializer);
            }
          }
          return j || T ? (p.setContentType("application/json", false), dt(f)) : f;
        }], transformResponse: [function(f) {
          const p = this.transitional || gt.transitional, S = p && p.forcedJSONParsing, T = this.responseType === "json";
          if (H.isResponse(f) || H.isReadableStream(f))
            return f;
          if (f && H.isString(f) && (S && !this.responseType || T)) {
            const j = !(p && p.silentJSONParsing) && T;
            try {
              return JSON.parse(f, this.parseReviver);
            } catch (M) {
              if (j)
                throw M.name === "SyntaxError" ? pe.from(M, pe.ERR_BAD_RESPONSE, this, null, this.response) : M;
            }
          }
          return f;
        }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, env: { FormData: it.classes.FormData, Blob: it.classes.Blob }, validateStatus: function(f) {
          return f >= 200 && f < 300;
        }, headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } } };
        H.forEach(["delete", "get", "head", "post", "put", "patch"], (f) => {
          gt.headers[f] = {};
        });
        var On = gt;
        const Ci = H.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);
        var Rr = (f) => {
          const p = {};
          let S, T, j;
          return f && f.split(`
`).forEach(function(M) {
            j = M.indexOf(":"), S = M.substring(0, j).trim().toLowerCase(), T = M.substring(j + 1).trim(), !(!S || p[S] && Ci[S]) && (S === "set-cookie" ? p[S] ? p[S].push(T) : p[S] = [T] : p[S] = p[S] ? p[S] + ", " + T : T);
          }), p;
        };
        const Vs = Symbol("internals");
        function ga(f) {
          return f && String(f).trim().toLowerCase();
        }
        function Rn(f) {
          return f === false || f == null ? f : H.isArray(f) ? f.map(Rn) : String(f);
        }
        function zi(f) {
          const p = /* @__PURE__ */ Object.create(null), S = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
          let T;
          for (; T = S.exec(f); )
            p[T[1]] = T[2];
          return p;
        }
        const ya = (f) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(f.trim());
        function Cn(f, p, S, T, j) {
          if (H.isFunction(T))
            return T.call(this, p, S);
          if (j && (p = S), !!H.isString(p)) {
            if (H.isString(T))
              return p.indexOf(T) !== -1;
            if (H.isRegExp(T))
              return T.test(p);
          }
        }
        function el(f) {
          return f.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (p, S, T) => S.toUpperCase() + T);
        }
        function ba(f, p) {
          const S = H.toCamelCase(" " + p);
          ["get", "set", "has"].forEach((T) => {
            Object.defineProperty(f, T + S, { value: function(j, M, z) {
              return this[T].call(this, p, j, M, z);
            }, configurable: true });
          });
        }
        class Pe {
          constructor(p) {
            p && this.set(p);
          }
          set(p, S, T) {
            const j = this;
            function M(F, ae, W) {
              const $ = ga(ae);
              if (!$)
                throw new Error("header name must be a non-empty string");
              const oe = H.findKey(j, $);
              (!oe || j[oe] === void 0 || W === true || W === void 0 && j[oe] !== false) && (j[oe || ae] = Rn(F));
            }
            const z = (F, ae) => H.forEach(F, (W, $) => M(W, $, ae));
            if (H.isPlainObject(p) || p instanceof this.constructor)
              z(p, S);
            else if (H.isString(p) && (p = p.trim()) && !ya(p))
              z(Rr(p), S);
            else if (H.isObject(p) && H.isIterable(p)) {
              let F = {}, ae, W;
              for (const $ of p) {
                if (!H.isArray($))
                  throw TypeError("Object iterator must return a key-value pair");
                F[W = $[0]] = (ae = F[W]) ? H.isArray(ae) ? [...ae, $[1]] : [ae, $[1]] : $[1];
              }
              z(F, S);
            } else
              p != null && M(S, p, T);
            return this;
          }
          get(p, S) {
            if (p = ga(p), p) {
              const T = H.findKey(this, p);
              if (T) {
                const j = this[T];
                if (!S)
                  return j;
                if (S === true)
                  return zi(j);
                if (H.isFunction(S))
                  return S.call(this, j, T);
                if (H.isRegExp(S))
                  return S.exec(j);
                throw new TypeError("parser must be boolean|regexp|function");
              }
            }
          }
          has(p, S) {
            if (p = ga(p), p) {
              const T = H.findKey(this, p);
              return !!(T && this[T] !== void 0 && (!S || Cn(this, this[T], T, S)));
            }
            return false;
          }
          delete(p, S) {
            const T = this;
            let j = false;
            function M(z) {
              if (z = ga(z), z) {
                const F = H.findKey(T, z);
                F && (!S || Cn(T, T[F], F, S)) && (delete T[F], j = true);
              }
            }
            return H.isArray(p) ? p.forEach(M) : M(p), j;
          }
          clear(p) {
            const S = Object.keys(this);
            let T = S.length, j = false;
            for (; T--; ) {
              const M = S[T];
              (!p || Cn(this, this[M], M, p, true)) && (delete this[M], j = true);
            }
            return j;
          }
          normalize(p) {
            const S = this, T = {};
            return H.forEach(this, (j, M) => {
              const z = H.findKey(T, M);
              if (z) {
                S[z] = Rn(j), delete S[M];
                return;
              }
              const F = p ? el(M) : String(M).trim();
              F !== M && delete S[M], S[F] = Rn(j), T[F] = true;
            }), this;
          }
          concat(...p) {
            return this.constructor.concat(this, ...p);
          }
          toJSON(p) {
            const S = /* @__PURE__ */ Object.create(null);
            return H.forEach(this, (T, j) => {
              T != null && T !== false && (S[j] = p && H.isArray(T) ? T.join(", ") : T);
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
            const T = new this(p);
            return S.forEach((j) => T.set(j)), T;
          }
          static accessor(p) {
            const S = (this[Vs] = this[Vs] = { accessors: {} }).accessors, T = this.prototype;
            function j(M) {
              const z = ga(M);
              S[z] || (ba(T, M), S[z] = true);
            }
            return H.isArray(p) ? p.forEach(j) : j(p), this;
          }
        }
        Pe.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), H.reduceDescriptors(Pe.prototype, ({ value: f }, p) => {
          let S = p[0].toUpperCase() + p.slice(1);
          return { get: () => f, set(T) {
            this[S] = T;
          } };
        }), H.freezeMethods(Pe);
        var Mt = Pe;
        function Rl(f, p) {
          const S = this || On, T = p || S, j = Mt.from(T.headers);
          let M = T.data;
          return H.forEach(f, function(z) {
            M = z.call(S, M, j.normalize(), p ? p.status : void 0);
          }), j.normalize(), M;
        }
        function zn(f) {
          return !!(f && f.__CANCEL__);
        }
        function Qt(f, p, S) {
          pe.call(this, f != null ? f : "canceled", pe.ERR_CANCELED, p, S), this.name = "CanceledError";
        }
        H.inherits(Qt, pe, { __CANCEL__: true });
        function ks(f, p, S) {
          const T = S.config.validateStatus;
          !S.status || !T || T(S.status) ? f(S) : p(new pe("Request failed with status code " + S.status, [pe.ERR_BAD_REQUEST, pe.ERR_BAD_RESPONSE][Math.floor(S.status / 100) - 4], S.config, S.request, S));
        }
        function Zs(f) {
          const p = /^([-+\w]{1,25})(:?\/\/|:)/.exec(f);
          return p && p[1] || "";
        }
        function Ks(f, p) {
          f = f || 10;
          const S = new Array(f), T = new Array(f);
          let j = 0, M = 0, z;
          return p = p !== void 0 ? p : 1e3, function(F) {
            const ae = Date.now(), W = T[M];
            z || (z = ae), S[j] = F, T[j] = ae;
            let $ = M, oe = 0;
            for (; $ !== j; )
              oe += S[$++], $ = $ % f;
            if (j = (j + 1) % f, j === M && (M = (M + 1) % f), ae - z < p)
              return;
            const He = W && ae - W;
            return He ? Math.round(oe * 1e3 / He) : void 0;
          };
        }
        function Cr(f, p) {
          let S = 0, T = 1e3 / p, j, M;
          const z = (F, ae = Date.now()) => {
            S = ae, j = null, M && (clearTimeout(M), M = null), f(...F);
          };
          return [(...F) => {
            const ae = Date.now(), W = ae - S;
            W >= T ? z(F, ae) : (j = F, M || (M = setTimeout(() => {
              M = null, z(j);
            }, T - W)));
          }, () => j && z(j)];
        }
        const Qn = (f, p, S = 3) => {
          let T = 0;
          const j = Ks(50, 250);
          return Cr((M) => {
            const z = M.loaded, F = M.lengthComputable ? M.total : void 0, ae = z - T, W = j(ae), $ = z <= F;
            T = z;
            const oe = { loaded: z, total: F, progress: F ? z / F : void 0, bytes: ae, rate: W || void 0, estimated: W && F && $ ? (F - z) / W : void 0, event: M, lengthComputable: F != null, [p ? "download" : "upload"]: true };
            f(oe);
          }, S);
        }, tl = (f, p) => {
          const S = f != null;
          return [(T) => p[0]({ lengthComputable: S, total: f, loaded: T }), p[1]];
        }, It = (f) => (...p) => H.asap(() => f(...p));
        var Ut = it.hasStandardBrowserEnv ? ((f, p) => (S) => (S = new URL(S, it.origin), f.protocol === S.protocol && f.host === S.host && (p || f.port === S.port)))(new URL(it.origin), it.navigator && /(msie|trident)/i.test(it.navigator.userAgent)) : () => true, Js = it.hasStandardBrowserEnv ? { write(f, p, S, T, j, M) {
          const z = [f + "=" + encodeURIComponent(p)];
          H.isNumber(S) && z.push("expires=" + new Date(S).toGMTString()), H.isString(T) && z.push("path=" + T), H.isString(j) && z.push("domain=" + j), M === true && z.push("secure"), document.cookie = z.join("; ");
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
        function zr(f) {
          return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(f);
        }
        function Mi(f, p) {
          return p ? f.replace(/\/?\/$/, "") + "/" + p.replace(/^\/+/, "") : f;
        }
        function Ui(f, p, S) {
          let T = !zr(p);
          return f && (T || S == false) ? Mi(f, p) : p;
        }
        const nl = (f) => f instanceof Mt ? Ve({}, f) : f;
        function Vn(f, p) {
          p = p || {};
          const S = {};
          function T(W, $, oe, He) {
            return H.isPlainObject(W) && H.isPlainObject($) ? H.merge.call({ caseless: He }, W, $) : H.isPlainObject($) ? H.merge({}, $) : H.isArray($) ? $.slice() : $;
          }
          function j(W, $, oe, He) {
            if (H.isUndefined($)) {
              if (!H.isUndefined(W))
                return T(void 0, W, oe, He);
            } else
              return T(W, $, oe, He);
          }
          function M(W, $) {
            if (!H.isUndefined($))
              return T(void 0, $);
          }
          function z(W, $) {
            if (H.isUndefined($)) {
              if (!H.isUndefined(W))
                return T(void 0, W);
            } else
              return T(void 0, $);
          }
          function F(W, $, oe) {
            if (oe in p)
              return T(W, $);
            if (oe in f)
              return T(void 0, W);
          }
          const ae = { url: M, method: M, data: M, baseURL: z, transformRequest: z, transformResponse: z, paramsSerializer: z, timeout: z, timeoutMessage: z, withCredentials: z, withXSRFToken: z, adapter: z, responseType: z, xsrfCookieName: z, xsrfHeaderName: z, onUploadProgress: z, onDownloadProgress: z, decompress: z, maxContentLength: z, maxBodyLength: z, beforeRedirect: z, transport: z, httpAgent: z, httpsAgent: z, cancelToken: z, socketPath: z, responseEncoding: z, validateStatus: F, headers: (W, $, oe) => j(nl(W), nl($), oe, true) };
          return H.forEach(Object.keys(Ve(Ve({}, f), p)), function(W) {
            const $ = ae[W] || j, oe = $(f[W], p[W], W);
            H.isUndefined(oe) && $ !== F || (S[W] = oe);
          }), S;
        }
        var Ct = (f) => {
          const p = Vn({}, f);
          let { data: S, withXSRFToken: T, xsrfHeaderName: j, xsrfCookieName: M, headers: z, auth: F } = p;
          if (p.headers = z = Mt.from(z), p.url = Wa(Ui(p.baseURL, p.url, p.allowAbsoluteUrls), f.params, f.paramsSerializer), F && z.set("Authorization", "Basic " + btoa((F.username || "") + ":" + (F.password ? unescape(encodeURIComponent(F.password)) : ""))), H.isFormData(S)) {
            if (it.hasStandardBrowserEnv || it.hasStandardBrowserWebWorkerEnv)
              z.setContentType(void 0);
            else if (H.isFunction(S.getHeaders)) {
              const ae = S.getHeaders(), W = ["content-type", "content-length"];
              Object.entries(ae).forEach(([$, oe]) => {
                W.includes($.toLowerCase()) && z.set($, oe);
              });
            }
          }
          if (it.hasStandardBrowserEnv && (T && H.isFunction(T) && (T = T(p)), T || T !== false && Ut(p.url))) {
            const ae = j && M && Js.read(M);
            ae && z.set(j, ae);
          }
          return p;
        }, Di = typeof XMLHttpRequest < "u" && function(f) {
          return new Promise(function(p, S) {
            const T = Ct(f);
            let j = T.data;
            const M = Mt.from(T.headers).normalize();
            let { responseType: z, onUploadProgress: F, onDownloadProgress: ae } = T, W, $, oe, He, ge;
            function P() {
              He && He(), ge && ge(), T.cancelToken && T.cancelToken.unsubscribe(W), T.signal && T.signal.removeEventListener("abort", W);
            }
            let te = new XMLHttpRequest();
            te.open(T.method.toUpperCase(), T.url, true), te.timeout = T.timeout;
            function Ke() {
              if (!te)
                return;
              const tt = Mt.from("getAllResponseHeaders" in te && te.getAllResponseHeaders()), nn = { data: !z || z === "text" || z === "json" ? te.responseText : te.response, status: te.status, statusText: te.statusText, headers: tt, config: f, request: te };
              ks(function(an) {
                p(an), P();
              }, function(an) {
                S(an), P();
              }, nn), te = null;
            }
            "onloadend" in te ? te.onloadend = Ke : te.onreadystatechange = function() {
              !te || te.readyState !== 4 || te.status === 0 && !(te.responseURL && te.responseURL.indexOf("file:") === 0) || setTimeout(Ke);
            }, te.onabort = function() {
              te && (S(new pe("Request aborted", pe.ECONNABORTED, f, te)), te = null);
            }, te.onerror = function(tt) {
              const nn = tt && tt.message ? tt.message : "Network Error", an = new pe(nn, pe.ERR_NETWORK, f, te);
              an.event = tt || null, S(an), te = null;
            }, te.ontimeout = function() {
              let tt = T.timeout ? "timeout of " + T.timeout + "ms exceeded" : "timeout exceeded";
              const nn = T.transitional || jn;
              T.timeoutErrorMessage && (tt = T.timeoutErrorMessage), S(new pe(tt, nn.clarifyTimeoutError ? pe.ETIMEDOUT : pe.ECONNABORTED, f, te)), te = null;
            }, j === void 0 && M.setContentType(null), "setRequestHeader" in te && H.forEach(M.toJSON(), function(tt, nn) {
              te.setRequestHeader(nn, tt);
            }), H.isUndefined(T.withCredentials) || (te.withCredentials = !!T.withCredentials), z && z !== "json" && (te.responseType = T.responseType), ae && ([oe, ge] = Qn(ae, true), te.addEventListener("progress", oe)), F && te.upload && ([$, He] = Qn(F), te.upload.addEventListener("progress", $), te.upload.addEventListener("loadend", He)), (T.cancelToken || T.signal) && (W = (tt) => {
              te && (S(!tt || tt.type ? new Qt(null, f, te) : tt), te.abort(), te = null);
            }, T.cancelToken && T.cancelToken.subscribe(W), T.signal && (T.signal.aborted ? W() : T.signal.addEventListener("abort", W)));
            const bt = Zs(T.url);
            if (bt && it.protocols.indexOf(bt) === -1) {
              S(new pe("Unsupported protocol " + bt + ":", pe.ERR_BAD_REQUEST, f));
              return;
            }
            te.send(j || null);
          });
        }, Fs = (f, p) => {
          const { length: S } = f = f ? f.filter(Boolean) : [];
          if (p || S) {
            let T = new AbortController(), j;
            const M = function(W) {
              if (!j) {
                j = true, F();
                const $ = W instanceof Error ? W : this.reason;
                T.abort($ instanceof pe ? $ : new Qt($ instanceof Error ? $.message : $));
              }
            };
            let z = p && setTimeout(() => {
              z = null, M(new pe(`timeout ${p} of ms exceeded`, pe.ETIMEDOUT));
            }, p);
            const F = () => {
              f && (z && clearTimeout(z), z = null, f.forEach((W) => {
                W.unsubscribe ? W.unsubscribe(M) : W.removeEventListener("abort", M);
              }), f = null);
            };
            f.forEach((W) => W.addEventListener("abort", M));
            const { signal: ae } = T;
            return ae.unsubscribe = () => H.asap(F), ae;
          }
        };
        const Bi = function* (f, p) {
          let S = f.byteLength;
          if (S < p) {
            yield f;
            return;
          }
          let T = 0, j;
          for (; T < S; )
            j = T + p, yield f.slice(T, j), T = j;
        }, va = function(f, p) {
          return Ro(this, null, function* () {
            try {
              for (var S = Lm(Ws(f)), T, j, M; T = !(j = yield new _l(S.next())).done; T = false) {
                const z = j.value;
                yield* Co(Bi(z, p));
              }
            } catch (j2) {
              M = [j2];
            } finally {
              try {
                T && (j = S.return) && (yield new _l(j.call(S)));
              } finally {
                if (M)
                  throw M[0];
              }
            }
          });
        }, Ws = function(f) {
          return Ro(this, null, function* () {
            if (f[Symbol.asyncIterator]) {
              yield* Co(f);
              return;
            }
            const p = f.getReader();
            try {
              for (; ; ) {
                const { done: S, value: T } = yield new _l(p.read());
                if (S)
                  break;
                yield T;
              }
            } finally {
              yield new _l(p.cancel());
            }
          });
        }, qi = (f, p, S, T) => {
          const j = va(f, p);
          let M = 0, z, F = (W) => {
            z || (z = true, T && T(W));
          };
          return new ReadableStream({ pull(W) {
            return da(this, null, function* () {
              try {
                const { done: $, value: oe } = yield j.next();
                if ($) {
                  F(), W.close();
                  return;
                }
                let He = oe.byteLength;
                if (S) {
                  let ge = M += He;
                  S(ge);
                }
                W.enqueue(new Uint8Array(oe));
              } catch ($) {
                throw F($), $;
              }
            });
          }, cancel(W) {
            return F(W), j.return();
          } }, { highWaterMark: 2 });
        }, kn = 64 * 1024, { isFunction: Cl } = H, $s = (({ Request: f, Response: p }) => ({ Request: f, Response: p }))(H.global), { ReadableStream: Hi, TextEncoder: zl } = H.global, Ps = (f, ...p) => {
          try {
            return !!f(...p);
          } catch (S) {
            return false;
          }
        }, Mr = (f) => {
          f = H.merge.call({ skipUndefined: true }, $s, f);
          const { fetch: p, Request: S, Response: T } = f, j = p ? Cl(p) : typeof fetch == "function", M = Cl(S), z = Cl(T);
          if (!j)
            return false;
          const F = j && Cl(Hi), ae = j && (typeof zl == "function" ? ((P) => (te) => P.encode(te))(new zl()) : (P) => da(null, null, function* () {
            return new Uint8Array(yield new S(P).arrayBuffer());
          })), W = M && F && Ps(() => {
            let P = false;
            const te = new S(it.origin, { body: new Hi(), method: "POST", get duplex() {
              return P = true, "half";
            } }).headers.has("Content-Type");
            return P && !te;
          }), $ = z && F && Ps(() => H.isReadableStream(new T("").body)), oe = { stream: $ && ((P) => P.body) };
          j && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((P) => {
            !oe[P] && (oe[P] = (te, Ke) => {
              let bt = te && te[P];
              if (bt)
                return bt.call(te);
              throw new pe(`Response type '${P}' is not supported`, pe.ERR_NOT_SUPPORT, Ke);
            });
          });
          const He = (P) => da(null, null, function* () {
            if (P == null)
              return 0;
            if (H.isBlob(P))
              return P.size;
            if (H.isSpecCompliantForm(P))
              return (yield new S(it.origin, { method: "POST", body: P }).arrayBuffer()).byteLength;
            if (H.isArrayBufferView(P) || H.isArrayBuffer(P))
              return P.byteLength;
            if (H.isURLSearchParams(P) && (P = P + ""), H.isString(P))
              return (yield ae(P)).byteLength;
          }), ge = (P, te) => da(null, null, function* () {
            const Ke = H.toFiniteNumber(P.getContentLength());
            return Ke != null ? Ke : He(te);
          });
          return (P) => da(null, null, function* () {
            let { url: te, method: Ke, data: bt, signal: tt, cancelToken: nn, timeout: an, onDownloadProgress: Xi, onUploadProgress: eu, responseType: Dn, headers: Yl, withCredentials: Xl = "same-origin", fetchOptions: tu } = Ct(P), nu = p || fetch;
            Dn = Dn ? (Dn + "").toLowerCase() : "text";
            let Gl = Fs([tt, nn && nn.toAbortSignal()], an), il = null;
            const Fn = Gl && Gl.unsubscribe && (() => {
              Gl.unsubscribe();
            });
            let au;
            try {
              if (eu && W && Ke !== "get" && Ke !== "head" && (au = yield ge(Yl, bt)) !== 0) {
                let yn = new S(te, { method: "POST", body: bt, duplex: "half" }), Wn;
                if (H.isFormData(bt) && (Wn = yn.headers.get("content-type")) && Yl.setContentType(Wn), yn.body) {
                  const [Ql, sl] = tl(au, Qn(It(eu)));
                  bt = qi(yn.body, kn, Ql, sl);
                }
              }
              H.isString(Xl) || (Xl = Xl ? "include" : "omit");
              const ln = M && "credentials" in S.prototype, lu = Yt(Ve({}, tu), { signal: Gl, method: Ke.toUpperCase(), headers: Yl.normalize().toJSON(), body: bt, duplex: "half", credentials: ln ? Xl : void 0 });
              il = M && new S(te, lu);
              let sn = yield M ? nu(il, tu) : nu(te, lu);
              const _a = $ && (Dn === "stream" || Dn === "response");
              if ($ && (Xi || _a && Fn)) {
                const yn = {};
                ["status", "statusText", "headers"].forEach((Gi) => {
                  yn[Gi] = sn[Gi];
                });
                const Wn = H.toFiniteNumber(sn.headers.get("content-length")), [Ql, sl] = Xi && tl(Wn, Qn(It(Xi), true)) || [];
                sn = new T(qi(sn.body, kn, Ql, () => {
                  sl && sl(), Fn && Fn();
                }), yn);
              }
              Dn = Dn || "text";
              let Ur = yield oe[H.findKey(oe, Dn) || "text"](sn, P);
              return !_a && Fn && Fn(), yield new Promise((yn, Wn) => {
                ks(yn, Wn, { data: Ur, headers: Mt.from(sn.headers), status: sn.status, statusText: sn.statusText, config: P, request: il });
              });
            } catch (ln) {
              throw Fn && Fn(), ln && ln.name === "TypeError" && /Load failed|fetch/i.test(ln.message) ? Object.assign(new pe("Network Error", pe.ERR_NETWORK, P, il), { cause: ln.cause || ln }) : pe.from(ln, ln && ln.code, P, il);
            }
          });
        }, Ml = /* @__PURE__ */ new Map(), en = (f) => {
          let p = f ? f.env : {};
          const { fetch: S, Request: T, Response: j } = p, M = [T, j, S];
          let z = M.length, F = z, ae, W, $ = Ml;
          for (; F--; )
            ae = M[F], W = $.get(ae), W === void 0 && $.set(ae, W = F ? /* @__PURE__ */ new Map() : Mr(p)), $ = W;
          return W;
        };
        en();
        const al = { http: wr, xhr: Di, fetch: { get: en } };
        H.forEach(al, (f, p) => {
          if (f) {
            try {
              Object.defineProperty(f, "name", { value: p });
            } catch (S) {
            }
            Object.defineProperty(f, "adapterName", { value: p });
          }
        });
        const Ul = (f) => `- ${f}`, xa = (f) => H.isFunction(f) || f === null || f === false;
        var Zn = { getAdapter: (f, p) => {
          f = H.isArray(f) ? f : [f];
          const { length: S } = f;
          let T, j;
          const M = {};
          for (let z = 0; z < S; z++) {
            T = f[z];
            let F;
            if (j = T, !xa(T) && (j = al[(F = String(T)).toLowerCase()], j === void 0))
              throw new pe(`Unknown adapter '${F}'`);
            if (j && (H.isFunction(j) || (j = j.get(p))))
              break;
            M[F || "#" + z] = j;
          }
          if (!j) {
            const z = Object.entries(M).map(([ae, W]) => `adapter ${ae} ` + (W === false ? "is not supported by the environment" : "is not available in the build"));
            let F = S ? z.length > 1 ? `since :
` + z.map(Ul).join(`
`) : " " + Ul(z[0]) : "as no adapter specified";
            throw new pe("There is no suitable adapter to dispatch the request " + F, "ERR_NOT_SUPPORT");
          }
          return j;
        }, adapters: al };
        function Dl(f) {
          if (f.cancelToken && f.cancelToken.throwIfRequested(), f.signal && f.signal.aborted)
            throw new Qt(null, f);
        }
        function Bl(f) {
          return Dl(f), f.headers = Mt.from(f.headers), f.data = Rl.call(f, f.transformRequest), ["post", "put", "patch"].indexOf(f.method) !== -1 && f.headers.setContentType("application/x-www-form-urlencoded", false), Zn.getAdapter(f.adapter || On.adapter, f)(f).then(function(p) {
            return Dl(f), p.data = Rl.call(f, f.transformResponse, p), p.headers = Mt.from(p.headers), p;
          }, function(p) {
            return zn(p) || (Dl(f), p && p.response && (p.response.data = Rl.call(f, f.transformResponse, p.response), p.response.headers = Mt.from(p.response.headers))), Promise.reject(p);
          });
        }
        const Li = "1.12.2", Mn = {};
        ["object", "boolean", "number", "function", "string", "symbol"].forEach((f, p) => {
          Mn[f] = function(S) {
            return typeof S === f || "a" + (p < 1 ? "n " : " ") + f;
          };
        });
        const tn = {};
        Mn.transitional = function(f, p, S) {
          function T(j, M) {
            return "[Axios v" + Li + "] Transitional option '" + j + "'" + M + (S ? ". " + S : "");
          }
          return (j, M, z) => {
            if (f === false)
              throw new pe(T(M, " has been removed" + (p ? " in " + p : "")), pe.ERR_DEPRECATED);
            return p && !tn[M] && (tn[M] = true, console.warn(T(M, " has been deprecated since v" + p + " and will be removed in the near future"))), f ? f(j, M, z) : true;
          };
        }, Mn.spelling = function(f) {
          return (p, S) => (console.warn(`${S} is likely a misspelling of ${f}`), true);
        };
        function Yi(f, p, S) {
          if (typeof f != "object")
            throw new pe("options must be an object", pe.ERR_BAD_OPTION_VALUE);
          const T = Object.keys(f);
          let j = T.length;
          for (; j-- > 0; ) {
            const M = T[j], z = p[M];
            if (z) {
              const F = f[M], ae = F === void 0 || z(F, M, f);
              if (ae !== true)
                throw new pe("option " + M + " must be " + ae, pe.ERR_BAD_OPTION_VALUE);
              continue;
            }
            if (S !== true)
              throw new pe("Unknown option " + M, pe.ERR_BAD_OPTION);
          }
        }
        var Un = { assertOptions: Yi, validators: Mn };
        const ht = Un.validators;
        class Sa {
          constructor(p) {
            this.defaults = p || {}, this.interceptors = { request: new $a(), response: new $a() };
          }
          request(p, S) {
            return da(this, null, function* () {
              try {
                return yield this._request(p, S);
              } catch (T) {
                if (T instanceof Error) {
                  let j = {};
                  Error.captureStackTrace ? Error.captureStackTrace(j) : j = new Error();
                  const M = j.stack ? j.stack.replace(/^.+\n/, "") : "";
                  try {
                    T.stack ? M && !String(T.stack).endsWith(M.replace(/^.+\n.+\n/, "")) && (T.stack += `
` + M) : T.stack = M;
                  } catch (z) {
                  }
                }
                throw T;
              }
            });
          }
          _request(p, S) {
            typeof p == "string" ? (S = S || {}, S.url = p) : S = p || {}, S = Vn(this.defaults, S);
            const { transitional: T, paramsSerializer: j, headers: M } = S;
            T !== void 0 && Un.assertOptions(T, { silentJSONParsing: ht.transitional(ht.boolean), forcedJSONParsing: ht.transitional(ht.boolean), clarifyTimeoutError: ht.transitional(ht.boolean) }, false), j != null && (H.isFunction(j) ? S.paramsSerializer = { serialize: j } : Un.assertOptions(j, { encode: ht.function, serialize: ht.function }, true)), S.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? S.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : S.allowAbsoluteUrls = true), Un.assertOptions(S, { baseUrl: ht.spelling("baseURL"), withXsrfToken: ht.spelling("withXSRFToken") }, true), S.method = (S.method || this.defaults.method || "get").toLowerCase();
            let z = M && H.merge(M.common, M[S.method]);
            M && H.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (P) => {
              delete M[P];
            }), S.headers = Mt.concat(z, M);
            const F = [];
            let ae = true;
            this.interceptors.request.forEach(function(P) {
              typeof P.runWhen == "function" && P.runWhen(S) === false || (ae = ae && P.synchronous, F.unshift(P.fulfilled, P.rejected));
            });
            const W = [];
            this.interceptors.response.forEach(function(P) {
              W.push(P.fulfilled, P.rejected);
            });
            let $, oe = 0, He;
            if (!ae) {
              const P = [Bl.bind(this), void 0];
              for (P.unshift(...F), P.push(...W), He = P.length, $ = Promise.resolve(S); oe < He; )
                $ = $.then(P[oe++], P[oe++]);
              return $;
            }
            He = F.length;
            let ge = S;
            for (; oe < He; ) {
              const P = F[oe++], te = F[oe++];
              try {
                ge = P(ge);
              } catch (Ke) {
                te.call(this, Ke);
                break;
              }
            }
            try {
              $ = Bl.call(this, ge);
            } catch (P) {
              return Promise.reject(P);
            }
            for (oe = 0, He = W.length; oe < He; )
              $ = $.then(W[oe++], W[oe++]);
            return $;
          }
          getUri(p) {
            p = Vn(this.defaults, p);
            const S = Ui(p.baseURL, p.url, p.allowAbsoluteUrls);
            return Wa(S, p.params, p.paramsSerializer);
          }
        }
        H.forEach(["delete", "get", "head", "options"], function(f) {
          Sa.prototype[f] = function(p, S) {
            return this.request(Vn(S || {}, { method: f, url: p, data: (S || {}).data }));
          };
        }), H.forEach(["post", "put", "patch"], function(f) {
          function p(S) {
            return function(T, j, M) {
              return this.request(Vn(M || {}, { method: f, headers: S ? { "Content-Type": "multipart/form-data" } : {}, url: T, data: j }));
            };
          }
          Sa.prototype[f] = p(), Sa.prototype[f + "Form"] = p(true);
        });
        var Kn = Sa;
        class ql {
          constructor(p) {
            if (typeof p != "function")
              throw new TypeError("executor must be a function.");
            let S;
            this.promise = new Promise(function(j) {
              S = j;
            });
            const T = this;
            this.promise.then((j) => {
              if (!T._listeners)
                return;
              let M = T._listeners.length;
              for (; M-- > 0; )
                T._listeners[M](j);
              T._listeners = null;
            }), this.promise.then = (j) => {
              let M;
              const z = new Promise((F) => {
                T.subscribe(F), M = F;
              }).then(j);
              return z.cancel = function() {
                T.unsubscribe(M);
              }, z;
            }, p(function(j, M, z) {
              T.reason || (T.reason = new Qt(j, M, z), S(T.reason));
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
            const p = new AbortController(), S = (T) => {
              p.abort(T);
            };
            return this.subscribe(S), p.signal.unsubscribe = () => this.unsubscribe(S), p.signal;
          }
          static source() {
            let p;
            return { token: new ql(function(S) {
              p = S;
            }), cancel: p };
          }
        }
        var Hl = ql;
        function Ll(f) {
          return function(p) {
            return f.apply(null, p);
          };
        }
        function Is(f) {
          return H.isObject(f) && f.isAxiosError === true;
        }
        const yt = { Continue: 100, SwitchingProtocols: 101, Processing: 102, EarlyHints: 103, Ok: 200, Created: 201, Accepted: 202, NonAuthoritativeInformation: 203, NoContent: 204, ResetContent: 205, PartialContent: 206, MultiStatus: 207, AlreadyReported: 208, ImUsed: 226, MultipleChoices: 300, MovedPermanently: 301, Found: 302, SeeOther: 303, NotModified: 304, UseProxy: 305, Unused: 306, TemporaryRedirect: 307, PermanentRedirect: 308, BadRequest: 400, Unauthorized: 401, PaymentRequired: 402, Forbidden: 403, NotFound: 404, MethodNotAllowed: 405, NotAcceptable: 406, ProxyAuthenticationRequired: 407, RequestTimeout: 408, Conflict: 409, Gone: 410, LengthRequired: 411, PreconditionFailed: 412, PayloadTooLarge: 413, UriTooLong: 414, UnsupportedMediaType: 415, RangeNotSatisfiable: 416, ExpectationFailed: 417, ImATeapot: 418, MisdirectedRequest: 421, UnprocessableEntity: 422, Locked: 423, FailedDependency: 424, TooEarly: 425, UpgradeRequired: 426, PreconditionRequired: 428, TooManyRequests: 429, RequestHeaderFieldsTooLarge: 431, UnavailableForLegalReasons: 451, InternalServerError: 500, NotImplemented: 501, BadGateway: 502, ServiceUnavailable: 503, GatewayTimeout: 504, HttpVersionNotSupported: 505, VariantAlsoNegotiates: 506, InsufficientStorage: 507, LoopDetected: 508, NotExtended: 510, NetworkAuthenticationRequired: 511 };
        Object.entries(yt).forEach(([f, p]) => {
          yt[p] = f;
        });
        var Jn = yt;
        function ll(f) {
          const p = new Kn(f), S = u(Kn.prototype.request, p);
          return H.extend(S, Kn.prototype, p, { allOwnKeys: true }), H.extend(S, p, null, { allOwnKeys: true }), S.create = function(T) {
            return ll(Vn(f, T));
          }, S;
        }
        const Qe = ll(On);
        return Qe.Axios = Kn, Qe.CanceledError = Qt, Qe.CancelToken = Hl, Qe.isCancel = zn, Qe.VERSION = Li, Qe.toFormData = Gt, Qe.AxiosError = pe, Qe.Cancel = Qe.CanceledError, Qe.all = function(f) {
          return Promise.all(f);
        }, Qe.spread = Ll, Qe.isAxiosError = Is, Qe.mergeConfig = Vn, Qe.AxiosHeaders = Mt, Qe.formToJSON = (f) => gn(H.isHTMLForm(f) ? new FormData(f) : f), Qe.getAdapter = Zn.getAdapter, Qe.HttpStatusCode = Jn, Qe.default = Qe, Lo = Qe, Lo;
      }
      var tp;
      function Rp() {
        if (tp)
          return ha;
        tp = 1;
        var u = ha && ha.__assign || function() {
          return u = Object.assign || function(g) {
            for (var v, h = 1, x = arguments.length; h < x; h++) {
              v = arguments[h];
              for (var m in v)
                Object.prototype.hasOwnProperty.call(v, m) && (g[m] = v[m]);
            }
            return g;
          }, u.apply(this, arguments);
        };
        Object.defineProperty(ha, "__esModule", { value: true }), ha.getRequestHeaders = ha.getAxiosClient = void 0;
        var s = Ey();
        function r(g, v, h, x, m) {
          var d = s.default.create({ baseURL: g, headers: c(v, x, h, g, m), withCredentials: true });
          return d.interceptors.request.use(function(E) {
            return typeof window < "u" && window.csrf_token && window.csrf_token !== "{{ csrf_token }}" && (E.headers["X-Frappe-CSRF-Token"] = window.csrf_token), v && x && h && (E.headers.Authorization = "".concat(x, " ").concat(h())), E;
          }), d;
        }
        ha.getAxiosClient = r;
        function c(g, v, h, x, m) {
          g === void 0 && (g = false);
          var d = { Accept: "application/json", "Content-Type": "application/json; charset=utf-8" };
          return g && v && h && (d.Authorization = "".concat(v, " ").concat(h())), typeof window < "u" && typeof document < "u" && (window.location && (x && x !== window.location.origin || (d["X-Frappe-Site-Name"] = window.location.hostname)), window.csrf_token && window.csrf_token !== "{{ csrf_token }}" && (d["X-Frappe-CSRF-Token"] = window.csrf_token)), u(u({}, d), m != null ? m : {});
        }
        return ha.getRequestHeaders = c, ha;
      }
      var np;
      function Cp() {
        if (np)
          return Tn;
        np = 1;
        var u = Tn && Tn.__assign || function() {
          return u = Object.assign || function(v) {
            for (var h, x = 1, m = arguments.length; x < m; x++) {
              h = arguments[x];
              for (var d in h)
                Object.prototype.hasOwnProperty.call(h, d) && (v[d] = h[d]);
            }
            return v;
          }, u.apply(this, arguments);
        }, s = Tn && Tn.__awaiter || function(v, h, x, m) {
          function d(E) {
            return E instanceof x ? E : new x(function(N) {
              N(E);
            });
          }
          return new (x || (x = Promise))(function(E, N) {
            function Y(Z) {
              try {
                C(m.next(Z));
              } catch (ie) {
                N(ie);
              }
            }
            function w(Z) {
              try {
                C(m.throw(Z));
              } catch (ie) {
                N(ie);
              }
            }
            function C(Z) {
              Z.done ? E(Z.value) : d(Z.value).then(Y, w);
            }
            C((m = m.apply(v, h || [])).next());
          });
        }, r = Tn && Tn.__generator || function(v, h) {
          var x = { label: 0, sent: function() {
            if (E[0] & 1)
              throw E[1];
            return E[1];
          }, trys: [], ops: [] }, m, d, E, N;
          return N = { next: Y(0), throw: Y(1), return: Y(2) }, typeof Symbol == "function" && (N[Symbol.iterator] = function() {
            return this;
          }), N;
          function Y(C) {
            return function(Z) {
              return w([C, Z]);
            };
          }
          function w(C) {
            if (m)
              throw new TypeError("Generator is already executing.");
            for (; N && (N = 0, C[0] && (x = 0)), x; )
              try {
                if (m = 1, d && (E = C[0] & 2 ? d.return : C[0] ? d.throw || ((E = d.return) && E.call(d), 0) : d.next) && !(E = E.call(d, C[1])).done)
                  return E;
                switch (d = 0, E && (C = [C[0] & 2, E.value]), C[0]) {
                  case 0:
                  case 1:
                    E = C;
                    break;
                  case 4:
                    return x.label++, { value: C[1], done: false };
                  case 5:
                    x.label++, d = C[1], C = [0];
                    continue;
                  case 7:
                    C = x.ops.pop(), x.trys.pop();
                    continue;
                  default:
                    if (E = x.trys, !(E = E.length > 0 && E[E.length - 1]) && (C[0] === 6 || C[0] === 2)) {
                      x = 0;
                      continue;
                    }
                    if (C[0] === 3 && (!E || C[1] > E[0] && C[1] < E[3])) {
                      x.label = C[1];
                      break;
                    }
                    if (C[0] === 6 && x.label < E[1]) {
                      x.label = E[1], E = C;
                      break;
                    }
                    if (E && x.label < E[2]) {
                      x.label = E[2], x.ops.push(C);
                      break;
                    }
                    E[2] && x.ops.pop(), x.trys.pop();
                    continue;
                }
                C = h.call(v, x);
              } catch (Z) {
                C = [6, Z], d = 0;
              } finally {
                m = E = 0;
              }
            if (C[0] & 5)
              throw C[1];
            return { value: C[0] ? C[1] : void 0, done: true };
          }
        };
        Object.defineProperty(Tn, "__esModule", { value: true }), Tn.FrappeFileUpload = void 0;
        var c = Rp(), g = function() {
          function v(h, x, m, d, E, N) {
            this.appURL = h, this.axios = x, this.useToken = m != null ? m : false, this.token = d, this.tokenType = E, this.customHeaders = N;
          }
          return v.prototype.uploadFile = function(h, x, m, d) {
            return d === void 0 && (d = "upload_file"), s(this, void 0, void 0, function() {
              var E, N, Y, w, C, Z, ie, he;
              return r(this, function(_e) {
                return E = new FormData(), h && E.append("file", h, h.name), N = x.isPrivate, Y = x.folder, w = x.file_url, C = x.doctype, Z = x.docname, ie = x.fieldname, he = x.otherData, N && E.append("is_private", "1"), Y && E.append("folder", Y), w && E.append("file_url", w), C && Z && (E.append("doctype", C), E.append("docname", Z), ie && E.append("fieldname", ie)), he && Object.keys(he).forEach(function(se) {
                  var ve = he[se];
                  E.append(se, ve);
                }), [2, this.axios.post("/api/method/".concat(d), E, { onUploadProgress: function(se) {
                  m && m(se.loaded, se.total, se);
                }, headers: u(u({}, (0, c.getRequestHeaders)(this.useToken, this.tokenType, this.token, this.appURL, this.customHeaders)), { "Content-Type": "multipart/form-data" }) }).catch(function(se) {
                  var ve, Te;
                  throw u(u({}, se.response.data), { httpStatus: se.response.status, httpStatusText: se.response.statusText, message: (ve = se.response.data.message) !== null && ve !== void 0 ? ve : "There was an error while uploading the file.", exception: (Te = se.response.data.exception) !== null && Te !== void 0 ? Te : "" });
                })];
              });
            });
          }, v;
        }();
        return Tn.FrappeFileUpload = g, Tn;
      }
      var ap;
      function Ay() {
        if (ap)
          return js;
        ap = 1, Object.defineProperty(js, "__esModule", { value: true }), js.FrappeApp = void 0;
        var u = zp(), s = jp(), r = Op(), c = Cp(), g = Rp(), v = function() {
          function h(x, m, d, E) {
            var N, Y;
            this.url = x, this.name = d != null ? d : "FrappeApp", this.useToken = (N = m == null ? void 0 : m.useToken) !== null && N !== void 0 ? N : false, this.token = m == null ? void 0 : m.token, this.tokenType = (Y = m == null ? void 0 : m.type) !== null && Y !== void 0 ? Y : "Bearer", this.customHeaders = E, this.axios = (0, g.getAxiosClient)(this.url, this.useToken, this.token, this.tokenType, this.customHeaders);
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
        return js.FrappeApp = v, js;
      }
      var En = {};
      var lp;
      function wy() {
        if (lp)
          return En;
        lp = 1;
        var u = En && En.__assign || function() {
          return u = Object.assign || function(g) {
            for (var v, h = 1, x = arguments.length; h < x; h++) {
              v = arguments[h];
              for (var m in v)
                Object.prototype.hasOwnProperty.call(v, m) && (g[m] = v[m]);
            }
            return g;
          }, u.apply(this, arguments);
        }, s = En && En.__awaiter || function(g, v, h, x) {
          function m(d) {
            return d instanceof h ? d : new h(function(E) {
              E(d);
            });
          }
          return new (h || (h = Promise))(function(d, E) {
            function N(C) {
              try {
                w(x.next(C));
              } catch (Z) {
                E(Z);
              }
            }
            function Y(C) {
              try {
                w(x.throw(C));
              } catch (Z) {
                E(Z);
              }
            }
            function w(C) {
              C.done ? d(C.value) : m(C.value).then(N, Y);
            }
            w((x = x.apply(g, v || [])).next());
          });
        }, r = En && En.__generator || function(g, v) {
          var h = { label: 0, sent: function() {
            if (d[0] & 1)
              throw d[1];
            return d[1];
          }, trys: [], ops: [] }, x, m, d, E;
          return E = { next: N(0), throw: N(1), return: N(2) }, typeof Symbol == "function" && (E[Symbol.iterator] = function() {
            return this;
          }), E;
          function N(w) {
            return function(C) {
              return Y([w, C]);
            };
          }
          function Y(w) {
            if (x)
              throw new TypeError("Generator is already executing.");
            for (; E && (E = 0, w[0] && (h = 0)), h; )
              try {
                if (x = 1, m && (d = w[0] & 2 ? m.return : w[0] ? m.throw || ((d = m.return) && d.call(m), 0) : m.next) && !(d = d.call(m, w[1])).done)
                  return d;
                switch (m = 0, d && (w = [w[0] & 2, d.value]), w[0]) {
                  case 0:
                  case 1:
                    d = w;
                    break;
                  case 4:
                    return h.label++, { value: w[1], done: false };
                  case 5:
                    h.label++, m = w[1], w = [0];
                    continue;
                  case 7:
                    w = h.ops.pop(), h.trys.pop();
                    continue;
                  default:
                    if (d = h.trys, !(d = d.length > 0 && d[d.length - 1]) && (w[0] === 6 || w[0] === 2)) {
                      h = 0;
                      continue;
                    }
                    if (w[0] === 3 && (!d || w[1] > d[0] && w[1] < d[3])) {
                      h.label = w[1];
                      break;
                    }
                    if (w[0] === 6 && h.label < d[1]) {
                      h.label = d[1], d = w;
                      break;
                    }
                    if (d && h.label < d[2]) {
                      h.label = d[2], h.ops.push(w);
                      break;
                    }
                    d[2] && h.ops.pop(), h.trys.pop();
                    continue;
                }
                w = v.call(g, h);
              } catch (C) {
                w = [6, C], m = 0;
              } finally {
                x = d = 0;
              }
            if (w[0] & 5)
              throw w[1];
            return { value: w[0] ? w[1] : void 0, done: true };
          }
        };
        Object.defineProperty(En, "__esModule", { value: true }), En.FrappeAuth = void 0;
        var c = function() {
          function g(v, h, x, m, d) {
            this.appURL = v, this.axios = h, this.useToken = x != null ? x : false, this.token = m, this.tokenType = d;
          }
          return g.prototype.loginWithUsernamePassword = function(v) {
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
          }, g.prototype.getLoggedInUser = function() {
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
          }, g.prototype.logout = function() {
            return s(this, void 0, void 0, function() {
              return r(this, function(v) {
                return [2, this.axios.post("/api/method/logout", {}).then(function() {
                }).catch(function(h) {
                  var x, m;
                  throw u(u({}, h.response.data), { httpStatus: h.response.status, httpStatusText: h.response.statusText, message: (x = h.response.data.message) !== null && x !== void 0 ? x : "There was an error while logging out", exception: (m = h.response.data.exception) !== null && m !== void 0 ? m : "" });
                })];
              });
            });
          }, g.prototype.forgetPassword = function(v) {
            return s(this, void 0, void 0, function() {
              return r(this, function(h) {
                return [2, this.axios.post("/", { cmd: "frappe.core.doctype.user.user.reset_password", user: v }).then(function() {
                }).catch(function(x) {
                  var m, d;
                  throw u(u({}, x.response.data), { httpStatus: x.response.status, httpStatusText: x.response.statusText, message: (m = x.response.data.message) !== null && m !== void 0 ? m : "There was an error sending password reset email.", exception: (d = x.response.data.exception) !== null && d !== void 0 ? d : "" });
                })];
              });
            });
          }, g;
        }();
        return En.FrappeAuth = c, En;
      }
      var ip;
      function zp() {
        return ip || (ip = 1, function(u) {
          var s = xi && xi.__createBinding || (Object.create ? function(c, g, v, h) {
            h === void 0 && (h = v);
            var x = Object.getOwnPropertyDescriptor(g, v);
            (!x || ("get" in x ? !g.__esModule : x.writable || x.configurable)) && (x = { enumerable: true, get: function() {
              return g[v];
            } }), Object.defineProperty(c, h, x);
          } : function(c, g, v, h) {
            h === void 0 && (h = v), c[h] = g[v];
          }), r = xi && xi.__exportStar || function(c, g) {
            for (var v in c)
              v !== "default" && !Object.prototype.hasOwnProperty.call(g, v) && s(g, c, v);
          };
          Object.defineProperty(u, "__esModule", { value: true }), r(Ay(), u), r(wy(), u), r(Op(), u), r(Cp(), u), r(jp(), u);
        }(xi)), xi;
      }
      var Ny = zp();
      var sp = { exports: {} };
      var Yo = {};
      var up;
      function jy() {
        if (up)
          return Yo;
        up = 1;
        var u = Cs;
        function s(N, Y) {
          return N === Y && (N !== 0 || 1 / N === 1 / Y) || N !== N && Y !== Y;
        }
        var r = typeof Object.is == "function" ? Object.is : s, c = u.useState, g = u.useEffect, v = u.useLayoutEffect, h = u.useDebugValue;
        function x(N, Y) {
          var w = Y(), C = c({ inst: { value: w, getSnapshot: Y } }), Z = C[0].inst, ie = C[1];
          return v(function() {
            Z.value = w, Z.getSnapshot = Y, m(Z) && ie({ inst: Z });
          }, [N, w, Y]), g(function() {
            return m(Z) && ie({ inst: Z }), N(function() {
              m(Z) && ie({ inst: Z });
            });
          }, [N]), h(w), w;
        }
        function m(N) {
          var Y = N.getSnapshot;
          N = N.value;
          try {
            var w = Y();
            return !r(N, w);
          } catch (C) {
            return true;
          }
        }
        function d(N, Y) {
          return Y();
        }
        var E = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? d : x;
        return Yo.useSyncExternalStore = u.useSyncExternalStore !== void 0 ? u.useSyncExternalStore : E, Yo;
      }
      var rp;
      function Oy() {
        return rp || (rp = 1, sp.exports = jy()), sp.exports;
      }
      Oy();
      var Ry = 0;
      var Cy = 1;
      var zy = 2;
      var cp = Object.prototype.hasOwnProperty;
      function Zo(u, s) {
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
              for (; c-- && Zo(u[c], s[c]); )
                ;
            return c === -1;
          }
          if (!r || typeof u == "object") {
            c = 0;
            for (r in u)
              if (cp.call(u, r) && ++c && !cp.call(s, r) || !(r in s) || !Zo(u[r], s[r]))
                return false;
            return Object.keys(s).length === c;
          }
        }
        return u !== u && s !== s;
      }
      var ka = /* @__PURE__ */ new WeakMap();
      var Ka = () => {
      };
      var Xt = Ka();
      var xr = Object;
      var wn = (u) => u === Xt;
      var Za = (u) => typeof u == "function";
      var Al = (u, s) => Ve(Ve({}, u), s);
      var My = (u) => Za(u.then);
      var Xo = {};
      var fr = {};
      var Mp = "undefined";
      var _r = typeof window != Mp;
      var Ko = typeof document != Mp;
      var Uy = _r && "Deno" in window;
      var Dy = (u, s) => {
        const r = ka.get(u);
        return [() => !wn(s) && u.get(s) || Xo, (c) => {
          if (!wn(s)) {
            const g = u.get(s);
            s in fr || (fr[s] = g), r[5](s, Al(g, c), g || Xo);
          }
        }, r[6], () => !wn(s) && s in fr ? fr[s] : !wn(s) && u.get(s) || Xo];
      };
      var Jo = true;
      var By = () => Jo;
      var [Fo, Wo] = _r && window.addEventListener ? [window.addEventListener.bind(window), window.removeEventListener.bind(window)] : [Ka, Ka];
      var qy = () => {
        const u = Ko && document.visibilityState;
        return wn(u) || u !== "hidden";
      };
      var Hy = (u) => (Ko && document.addEventListener("visibilitychange", u), Fo("focus", u), () => {
        Ko && document.removeEventListener("visibilitychange", u), Wo("focus", u);
      });
      var Ly = (u) => {
        const s = () => {
          Jo = true, u();
        }, r = () => {
          Jo = false;
        };
        return Fo("online", s), Fo("offline", r), () => {
          Wo("online", s), Wo("offline", r);
        };
      };
      var Yy = { isOnline: By, isVisible: qy };
      var Xy = { initFocus: Hy, initReconnect: Ly };
      Cs.useId;
      var rf = !_r || Uy;
      var Gy = rf ? We.useEffect : We.useLayoutEffect;
      var Go = typeof navigator < "u" && navigator.connection;
      var op = !rf && Go && (["slow-2g", "2g"].includes(Go.effectiveType) || Go.saveData);
      var dr = /* @__PURE__ */ new WeakMap();
      var Qy = (u) => xr.prototype.toString.call(u);
      var Qo = (u, s) => u === `[object ${s}]`;
      var Vy = 0;
      var $o = (u) => {
        const s = typeof u, r = Qy(u), c = Qo(r, "Date"), g = Qo(r, "RegExp"), v = Qo(r, "Object");
        let h, x;
        if (xr(u) === u && !c && !g) {
          if (h = dr.get(u), h)
            return h;
          if (h = ++Vy + "~", dr.set(u, h), Array.isArray(u)) {
            for (h = "@", x = 0; x < u.length; x++)
              h += $o(u[x]) + ",";
            dr.set(u, h);
          }
          if (v) {
            h = "#";
            const m = xr.keys(u).sort();
            for (; !wn(x = m.pop()); )
              wn(u[x]) || (h += x + ":" + $o(u[x]) + ",");
            dr.set(u, h);
          }
        } else
          h = c ? u.toJSON() : s == "symbol" ? u.toString() : s == "string" ? JSON.stringify(u) : "" + u;
        return h;
      };
      var Up = (u) => {
        if (Za(u))
          try {
            u = u();
          } catch (r) {
            u = "";
          }
        const s = u;
        return u = typeof u == "string" ? u : (Array.isArray(u) ? u.length : u) ? $o(u) : "", [u, s];
      };
      var ky = 0;
      var fp = () => ++ky;
      function Zy(...u) {
        return da(this, null, function* () {
          const [s, r, c, g] = u, v = Al({ populateCache: true, throwOnError: true }, typeof g == "boolean" ? { revalidate: g } : g || {});
          let h = v.populateCache;
          const x = v.rollbackOnError;
          let m = v.optimisticData;
          const d = (Y) => typeof x == "function" ? x(Y) : x !== false, E = v.throwOnError;
          if (Za(r)) {
            const Y = r, w = [], C = s.keys();
            for (const Z of C)
              !/^\$(inf|sub)\$/.test(Z) && Y(s.get(Z)._k) && w.push(Z);
            return Promise.all(w.map(N));
          }
          return N(r);
          function N(Y) {
            return da(this, null, function* () {
              const [w] = Up(Y);
              if (!w)
                return;
              const [C, Z] = Dy(s, w), [ie, he, _e, se] = ka.get(s), ve = () => {
                const Me = ie[w];
                return (Za(v.revalidate) ? v.revalidate(C().data, Y) : v.revalidate !== false) && (delete _e[w], delete se[w], Me && Me[0]) ? Me[0](zy).then(() => C().data) : C().data;
              };
              if (u.length < 3)
                return ve();
              let Te = c, Ue, fe = false;
              const lt = fp();
              he[w] = [lt, 0];
              const wt = !wn(m), Pt = C(), pt = Pt.data, De = Pt._c, ke = wn(De) ? pt : De;
              if (wt && (m = Za(m) ? m(ke, pt) : m, Z({ data: m, _c: ke })), Za(Te))
                try {
                  Te = Te(ke);
                } catch (Me) {
                  Ue = Me, fe = true;
                }
              if (Te && My(Te))
                if (Te = yield Te.catch((Me) => {
                  Ue = Me, fe = true;
                }), lt !== he[w][0]) {
                  if (fe)
                    throw Ue;
                  return Te;
                } else
                  fe && wt && d(Ue) && (h = true, Z({ data: ke, _c: Xt }));
              if (h && !fe)
                if (Za(h)) {
                  const Me = h(Te, ke);
                  Z({ data: Me, error: Xt, _c: Xt });
                } else
                  Z({ data: Te, error: Xt, _c: Xt });
              if (he[w][1] = fp(), Promise.resolve(ve()).then(() => {
                Z({ _c: Xt });
              }), fe) {
                if (E)
                  throw Ue;
                return;
              }
              return Te;
            });
          }
        });
      }
      var dp = (u, s) => {
        for (const r in u)
          u[r][0] && u[r][0](s);
      };
      var Dp = (u, s) => {
        if (!ka.has(u)) {
          const r = Al(Xy, s), c = /* @__PURE__ */ Object.create(null), g = Zy.bind(Xt, u);
          let v = Ka;
          const h = /* @__PURE__ */ Object.create(null), x = (E, N) => {
            const Y = h[E] || [];
            return h[E] = Y, Y.push(N), () => Y.splice(Y.indexOf(N), 1);
          }, m = (E, N, Y) => {
            u.set(E, N);
            const w = h[E];
            if (w)
              for (const C of w)
                C(N, Y);
          }, d = () => {
            if (!ka.has(u) && (ka.set(u, [c, /* @__PURE__ */ Object.create(null), /* @__PURE__ */ Object.create(null), /* @__PURE__ */ Object.create(null), g, m, x]), !rf)) {
              const E = r.initFocus(setTimeout.bind(Xt, dp.bind(Xt, c, Ry))), N = r.initReconnect(setTimeout.bind(Xt, dp.bind(Xt, c, Cy)));
              v = () => {
                E && E(), N && N(), ka.delete(u);
              };
            }
          };
          return d(), [u, g, d, v];
        }
        return [u, ka.get(u)[4]];
      };
      var Ky = (u, s, r, c, g) => {
        const v = r.errorRetryCount, h = g.retryCount, x = ~~((Math.random() + 0.5) * (1 << (h < 8 ? h : 8))) * r.errorRetryInterval;
        !wn(v) && h > v || setTimeout(c, x, g);
      };
      var Jy = Zo;
      var [cf, Fy] = Dp(/* @__PURE__ */ new Map());
      var Wy = Al({ onLoadingSlow: Ka, onSuccess: Ka, onError: Ka, onErrorRetry: Ky, onDiscarded: Ka, revalidateOnFocus: true, revalidateOnReconnect: true, revalidateIfStale: true, shouldRetryOnError: true, errorRetryInterval: op ? 1e4 : 5e3, focusThrottleInterval: 5 * 1e3, dedupingInterval: 2 * 1e3, loadingTimeout: op ? 5e3 : 3e3, compare: Jy, isPaused: () => false, cache: cf, mutate: Fy, fallback: {} }, Yy);
      var $y = (u, s) => {
        const r = Al(u, s);
        if (s) {
          const { use: c, fallback: g } = u, { use: v, fallback: h } = s;
          c && v && (r.use = c.concat(v)), g && h && (r.fallback = Al(g, h));
        }
        return r;
      };
      var hp = We.createContext({});
      var Py = (u) => {
        const { value: s } = u, r = We.useContext(hp), c = Za(s), g = We.useMemo(() => c ? s(r) : s, [c, r, s]), v = We.useMemo(() => c ? g : $y(r, g), [c, r, g]), h = g && g.provider, x = We.useRef(Xt);
        h && !x.current && (x.current = Dp(h(v.cache || cf), g));
        const m = x.current;
        return m && (v.cache = m[0], v.mutate = m[1]), Gy(() => {
          if (m)
            return m[2] && m[2](), m[3];
        }, []), We.createElement(hp.Provider, Al(u, { value: v }));
      };
      var Iy = "$inf$";
      var Bp = _r && window.__SWR_DEVTOOLS_USE__;
      var eb = Bp ? window.__SWR_DEVTOOLS_USE__ : [];
      var tb = () => {
        Bp && (window.__SWR_DEVTOOLS_REACT__ = Cs);
      };
      var nb = (u) => (s, r, c) => u(s, r && ((...g) => {
        const [v] = Up(s), [, , , h] = ka.get(cf);
        if (v.startsWith(Iy))
          return r(...g);
        const x = h[v];
        return wn(x) ? r(...g) : (delete h[v], x);
      }), c);
      eb.concat(nb);
      tb();
      Cs.use;
      Promise.resolve(Xt);
      var ab = xr.defineProperty(Py, "defaultValue", { value: Wy });
      Promise.resolve();
      var Xn = /* @__PURE__ */ Object.create(null);
      Xn.open = "0";
      Xn.close = "1";
      Xn.ping = "2";
      Xn.pong = "3";
      Xn.message = "4";
      Xn.upgrade = "5";
      Xn.noop = "6";
      var yr = /* @__PURE__ */ Object.create(null);
      Object.keys(Xn).forEach((u) => {
        yr[Xn[u]] = u;
      });
      var Po = { type: "error", data: "parser error" };
      var qp = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
      var Hp = typeof ArrayBuffer == "function";
      var Lp = (u) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(u) : u && u.buffer instanceof ArrayBuffer;
      var of = ({ type: u, data: s }, r, c) => qp && s instanceof Blob ? r ? c(s) : mp(s, c) : Hp && (s instanceof ArrayBuffer || Lp(s)) ? r ? c(s) : mp(new Blob([s]), c) : c(Xn[u] + (s || ""));
      var mp = (u, s) => {
        const r = new FileReader();
        return r.onload = function() {
          const c = r.result.split(",")[1];
          s("b" + (c || ""));
        }, r.readAsDataURL(u);
      };
      function pp(u) {
        return u instanceof Uint8Array ? u : u instanceof ArrayBuffer ? new Uint8Array(u) : new Uint8Array(u.buffer, u.byteOffset, u.byteLength);
      }
      var Vo;
      function lb(u, s) {
        if (qp && u.data instanceof Blob)
          return u.data.arrayBuffer().then(pp).then(s);
        if (Hp && (u.data instanceof ArrayBuffer || Lp(u.data)))
          return s(pp(u.data));
        of(u, false, (r) => {
          Vo || (Vo = new TextEncoder()), s(Vo.encode(r));
        });
      }
      var gp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      var Rs = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
      for (let u = 0; u < gp.length; u++)
        Rs[gp.charCodeAt(u)] = u;
      var ib = (u) => {
        let s = u.length * 0.75, r = u.length, c, g = 0, v, h, x, m;
        u[u.length - 1] === "=" && (s--, u[u.length - 2] === "=" && s--);
        const d = new ArrayBuffer(s), E = new Uint8Array(d);
        for (c = 0; c < r; c += 4)
          v = Rs[u.charCodeAt(c)], h = Rs[u.charCodeAt(c + 1)], x = Rs[u.charCodeAt(c + 2)], m = Rs[u.charCodeAt(c + 3)], E[g++] = v << 2 | h >> 4, E[g++] = (h & 15) << 4 | x >> 2, E[g++] = (x & 3) << 6 | m & 63;
        return d;
      };
      var sb = typeof ArrayBuffer == "function";
      var ff = (u, s) => {
        if (typeof u != "string")
          return { type: "message", data: Yp(u, s) };
        const r = u.charAt(0);
        return r === "b" ? { type: "message", data: ub(u.substring(1), s) } : yr[r] ? u.length > 1 ? { type: yr[r], data: u.substring(1) } : { type: yr[r] } : Po;
      };
      var ub = (u, s) => {
        if (sb) {
          const r = ib(u);
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
      var Xp = "";
      var rb = (u, s) => {
        const r = u.length, c = new Array(r);
        let g = 0;
        u.forEach((v, h) => {
          of(v, false, (x) => {
            c[h] = x, ++g === r && s(c.join(Xp));
          });
        });
      };
      var cb = (u, s) => {
        const r = u.split(Xp), c = [];
        for (let g = 0; g < r.length; g++) {
          const v = ff(r[g], s);
          if (c.push(v), v.type === "error")
            break;
        }
        return c;
      };
      function ob() {
        return new TransformStream({ transform(u, s) {
          lb(u, (r) => {
            const c = r.length;
            let g;
            if (c < 126)
              g = new Uint8Array(1), new DataView(g.buffer).setUint8(0, c);
            else if (c < 65536) {
              g = new Uint8Array(3);
              const v = new DataView(g.buffer);
              v.setUint8(0, 126), v.setUint16(1, c);
            } else {
              g = new Uint8Array(9);
              const v = new DataView(g.buffer);
              v.setUint8(0, 127), v.setBigUint64(1, BigInt(c));
            }
            u.data && typeof u.data != "string" && (g[0] |= 128), s.enqueue(g), s.enqueue(r);
          });
        } });
      }
      var ko;
      function hr(u) {
        return u.reduce((s, r) => s + r.length, 0);
      }
      function mr(u, s) {
        if (u[0].length === s)
          return u.shift();
        const r = new Uint8Array(s);
        let c = 0;
        for (let g = 0; g < s; g++)
          r[g] = u[0][c++], c === u[0].length && (u.shift(), c = 0);
        return u.length && c < u[0].length && (u[0] = u[0].slice(c)), r;
      }
      function fb(u, s) {
        ko || (ko = new TextDecoder());
        const r = [];
        let c = 0, g = -1, v = false;
        return new TransformStream({ transform(h, x) {
          for (r.push(h); ; ) {
            if (c === 0) {
              if (hr(r) < 1)
                break;
              const m = mr(r, 1);
              v = (m[0] & 128) === 128, g = m[0] & 127, g < 126 ? c = 3 : g === 126 ? c = 1 : c = 2;
            } else if (c === 1) {
              if (hr(r) < 2)
                break;
              const m = mr(r, 2);
              g = new DataView(m.buffer, m.byteOffset, m.length).getUint16(0), c = 3;
            } else if (c === 2) {
              if (hr(r) < 8)
                break;
              const m = mr(r, 8), d = new DataView(m.buffer, m.byteOffset, m.length), E = d.getUint32(0);
              if (E > Math.pow(2, 21) - 1) {
                x.enqueue(Po);
                break;
              }
              g = E * Math.pow(2, 32) + d.getUint32(4), c = 3;
            } else {
              if (hr(r) < g)
                break;
              const m = mr(r, g);
              x.enqueue(ff(v ? m : ko.decode(m), s)), c = 0;
            }
            if (g === 0 || g > u) {
              x.enqueue(Po);
              break;
            }
          }
        } });
      }
      var Gp = 4;
      function ot(u) {
        if (u)
          return db(u);
      }
      function db(u) {
        for (var s in ot.prototype)
          u[s] = ot.prototype[s];
        return u;
      }
      ot.prototype.on = ot.prototype.addEventListener = function(u, s) {
        return this._callbacks = this._callbacks || {}, (this._callbacks["$" + u] = this._callbacks["$" + u] || []).push(s), this;
      };
      ot.prototype.once = function(u, s) {
        function r() {
          this.off(u, r), s.apply(this, arguments);
        }
        return r.fn = s, this.on(u, r), this;
      };
      ot.prototype.off = ot.prototype.removeListener = ot.prototype.removeAllListeners = ot.prototype.removeEventListener = function(u, s) {
        if (this._callbacks = this._callbacks || {}, arguments.length == 0)
          return this._callbacks = {}, this;
        var r = this._callbacks["$" + u];
        if (!r)
          return this;
        if (arguments.length == 1)
          return delete this._callbacks["$" + u], this;
        for (var c, g = 0; g < r.length; g++)
          if (c = r[g], c === s || c.fn === s) {
            r.splice(g, 1);
            break;
          }
        return r.length === 0 && delete this._callbacks["$" + u], this;
      };
      ot.prototype.emit = function(u) {
        this._callbacks = this._callbacks || {};
        for (var s = new Array(arguments.length - 1), r = this._callbacks["$" + u], c = 1; c < arguments.length; c++)
          s[c - 1] = arguments[c];
        if (r) {
          r = r.slice(0);
          for (var c = 0, g = r.length; c < g; ++c)
            r[c].apply(this, s);
        }
        return this;
      };
      ot.prototype.emitReserved = ot.prototype.emit;
      ot.prototype.listeners = function(u) {
        return this._callbacks = this._callbacks || {}, this._callbacks["$" + u] || [];
      };
      ot.prototype.hasListeners = function(u) {
        return !!this.listeners(u).length;
      };
      var pn = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
      function Qp(u, ...s) {
        return s.reduce((r, c) => (u.hasOwnProperty(c) && (r[c] = u[c]), r), {});
      }
      var hb = pn.setTimeout;
      var mb = pn.clearTimeout;
      function Tr(u, s) {
        s.useNativeTimers ? (u.setTimeoutFn = hb.bind(pn), u.clearTimeoutFn = mb.bind(pn)) : (u.setTimeoutFn = pn.setTimeout.bind(pn), u.clearTimeoutFn = pn.clearTimeout.bind(pn));
      }
      var pb = 1.33;
      function gb(u) {
        return typeof u == "string" ? yb(u) : Math.ceil((u.byteLength || u.size) * pb);
      }
      function yb(u) {
        let s = 0, r = 0;
        for (let c = 0, g = u.length; c < g; c++)
          s = u.charCodeAt(c), s < 128 ? r += 1 : s < 2048 ? r += 2 : s < 55296 || s >= 57344 ? r += 3 : (c++, r += 4);
        return r;
      }
      function bb(u) {
        let s = "";
        for (let r in u)
          u.hasOwnProperty(r) && (s.length && (s += "&"), s += encodeURIComponent(r) + "=" + encodeURIComponent(u[r]));
        return s;
      }
      function vb(u) {
        let s = {}, r = u.split("&");
        for (let c = 0, g = r.length; c < g; c++) {
          let v = r[c].split("=");
          s[decodeURIComponent(v[0])] = decodeURIComponent(v[1]);
        }
        return s;
      }
      var xb = class extends Error {
        constructor(s, r, c) {
          super(s), this.description = r, this.context = c, this.type = "TransportError";
        }
      };
      var df = class extends ot {
        constructor(s) {
          super(), this.writable = false, Tr(this, s), this.opts = s, this.query = s.query, this.socket = s.socket;
        }
        onError(s, r, c) {
          return super.emitReserved("error", new xb(s, r, c)), this;
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
          const r = ff(s, this.socket.binaryType);
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
          const r = bb(s);
          return r.length ? "?" + r : "";
        }
      };
      var Vp = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split("");
      var Io = 64;
      var Sb = {};
      var yp = 0;
      var pr = 0;
      var bp;
      function vp(u) {
        let s = "";
        do
          s = Vp[u % Io] + s, u = Math.floor(u / Io);
        while (u > 0);
        return s;
      }
      function kp() {
        const u = vp(+new Date());
        return u !== bp ? (yp = 0, bp = u) : u + "." + vp(yp++);
      }
      for (; pr < Io; pr++)
        Sb[Vp[pr]] = pr;
      var Zp = false;
      try {
        Zp = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
      } catch (u) {
      }
      var _b = Zp;
      function Kp(u) {
        const s = u.xdomain;
        try {
          if (typeof XMLHttpRequest < "u" && (!s || _b))
            return new XMLHttpRequest();
        } catch (r) {
        }
        if (!s)
          try {
            return new pn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
          } catch (r) {
          }
      }
      function Tb() {
      }
      var Eb = function() {
        return new Kp({ xdomain: false }).responseType != null;
      }();
      var Ab = class extends df {
        constructor(s) {
          if (super(s), this.polling = false, typeof location < "u") {
            const c = location.protocol === "https:";
            let g = location.port;
            g || (g = c ? "443" : "80"), this.xd = typeof location < "u" && s.hostname !== location.hostname || g !== s.port;
          }
          const r = s && s.forceBase64;
          this.supportsBinary = Eb && !r, this.opts.withCredentials && (this.cookieJar = void 0);
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
          cb(s, this.socket.binaryType).forEach(r), this.readyState !== "closed" && (this.polling = false, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll());
        }
        doClose() {
          const s = () => {
            this.write([{ type: "close" }]);
          };
          this.readyState === "open" ? s() : this.once("open", s);
        }
        write(s) {
          this.writable = false, rb(s, (r) => {
            this.doWrite(r, () => {
              this.writable = true, this.emitReserved("drain");
            });
          });
        }
        uri() {
          const s = this.opts.secure ? "https" : "http", r = this.query || {};
          return this.opts.timestampRequests !== false && (r[this.opts.timestampParam] = kp()), !this.supportsBinary && !r.sid && (r.b64 = 1), this.createUri(s, r);
        }
        request(s = {}) {
          return Object.assign(s, { xd: this.xd, cookieJar: this.cookieJar }, this.opts), new Yn(this.uri(), s);
        }
        doWrite(s, r) {
          const c = this.request({ method: "POST", data: s });
          c.on("success", r), c.on("error", (g, v) => {
            this.onError("xhr post error", g, v);
          });
        }
        doPoll() {
          const s = this.request();
          s.on("data", this.onData.bind(this)), s.on("error", (r, c) => {
            this.onError("xhr poll error", r, c);
          }), this.pollXhr = s;
        }
      };
      var Yn = class extends ot {
        constructor(s, r) {
          super(), Tr(this, r), this.opts = r, this.method = r.method || "GET", this.uri = s, this.data = r.data !== void 0 ? r.data : null, this.create();
        }
        create() {
          var s;
          const r = Qp(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
          r.xdomain = !!this.opts.xd;
          const c = this.xhr = new Kp(r);
          try {
            c.open(this.method, this.uri, true);
            try {
              if (this.opts.extraHeaders) {
                c.setDisableHeaderCheck && c.setDisableHeaderCheck(true);
                for (let g in this.opts.extraHeaders)
                  this.opts.extraHeaders.hasOwnProperty(g) && c.setRequestHeader(g, this.opts.extraHeaders[g]);
              }
            } catch (g) {
            }
            if (this.method === "POST")
              try {
                c.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
              } catch (g) {
              }
            try {
              c.setRequestHeader("Accept", "*/*");
            } catch (g) {
            }
            (s = this.opts.cookieJar) === null || s === void 0 || s.addCookies(c), "withCredentials" in c && (c.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (c.timeout = this.opts.requestTimeout), c.onreadystatechange = () => {
              var g;
              c.readyState === 3 && ((g = this.opts.cookieJar) === null || g === void 0 || g.parseCookies(c)), c.readyState === 4 && (c.status === 200 || c.status === 1223 ? this.onLoad() : this.setTimeoutFn(() => {
                this.onError(typeof c.status == "number" ? c.status : 0);
              }, 0));
            }, c.send(this.data);
          } catch (g) {
            this.setTimeoutFn(() => {
              this.onError(g);
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
            if (this.xhr.onreadystatechange = Tb, s)
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
          attachEvent("onunload", xp);
        else if (typeof addEventListener == "function") {
          const u = "onpagehide" in pn ? "pagehide" : "unload";
          addEventListener(u, xp, false);
        }
      }
      function xp() {
        for (let u in Yn.requests)
          Yn.requests.hasOwnProperty(u) && Yn.requests[u].abort();
      }
      var hf = typeof Promise == "function" && typeof Promise.resolve == "function" ? (u) => Promise.resolve().then(u) : (u, s) => s(u, 0);
      var gr = pn.WebSocket || pn.MozWebSocket;
      var Sp = true;
      var wb = "arraybuffer";
      var _p = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
      var Nb = class extends df {
        constructor(s) {
          super(s), this.supportsBinary = !s.forceBase64;
        }
        get name() {
          return "websocket";
        }
        doOpen() {
          if (!this.check())
            return;
          const s = this.uri(), r = this.opts.protocols, c = _p ? {} : Qp(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
          this.opts.extraHeaders && (c.headers = this.opts.extraHeaders);
          try {
            this.ws = Sp && !_p ? r ? new gr(s, r) : new gr(s) : new gr(s, r, c);
          } catch (g) {
            return this.emitReserved("error", g);
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
            const c = s[r], g = r === s.length - 1;
            of(c, this.supportsBinary, (v) => {
              try {
                Sp && this.ws.send(v);
              } catch (h) {
              }
              g && hf(() => {
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
          return this.opts.timestampRequests && (r[this.opts.timestampParam] = kp()), this.supportsBinary || (r.b64 = 1), this.createUri(s, r);
        }
        check() {
          return !!gr;
        }
      };
      var jb = class extends df {
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
              const r = fb(Number.MAX_SAFE_INTEGER, this.socket.binaryType), c = s.readable.pipeThrough(r).getReader(), g = ob();
              g.readable.pipeTo(s.writable), this.writer = g.writable.getWriter();
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
            const c = s[r], g = r === s.length - 1;
            this.writer.write(c).then(() => {
              g && hf(() => {
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
      var Ob = { websocket: Nb, webtransport: jb, polling: Ab };
      var Rb = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
      var Cb = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
      function ef(u) {
        if (u.length > 2e3)
          throw "URI too long";
        const s = u, r = u.indexOf("["), c = u.indexOf("]");
        r != -1 && c != -1 && (u = u.substring(0, r) + u.substring(r, c).replace(/:/g, ";") + u.substring(c, u.length));
        let g = Rb.exec(u || ""), v = {}, h = 14;
        for (; h--; )
          v[Cb[h]] = g[h] || "";
        return r != -1 && c != -1 && (v.source = s, v.host = v.host.substring(1, v.host.length - 1).replace(/;/g, ":"), v.authority = v.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), v.ipv6uri = true), v.pathNames = zb(v, v.path), v.queryKey = Mb(v, v.query), v;
      }
      function zb(u, s) {
        const r = /\/{2,9}/g, c = s.replace(r, "/").split("/");
        return (s.slice(0, 1) == "/" || s.length === 0) && c.splice(0, 1), s.slice(-1) == "/" && c.splice(c.length - 1, 1), c;
      }
      function Mb(u, s) {
        const r = {};
        return s.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(c, g, v) {
          g && (r[g] = v);
        }), r;
      }
      var Jp = class Si extends ot {
        constructor(s, r = {}) {
          super(), this.binaryType = wb, this.writeBuffer = [], s && typeof s == "object" && (r = s, s = null), s ? (s = ef(s), r.hostname = s.host, r.secure = s.protocol === "https" || s.protocol === "wss", r.port = s.port, s.query && (r.query = s.query)) : r.host && (r.hostname = ef(r.host).host), Tr(this, r), this.secure = r.secure != null ? r.secure : typeof location < "u" && location.protocol === "https:", r.hostname && !r.port && (r.port = this.secure ? "443" : "80"), this.hostname = r.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = r.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = r.transports || ["polling", "websocket", "webtransport"], this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({ path: "/engine.io", agent: false, withCredentials: false, upgrade: true, timestampParam: "t", rememberUpgrade: false, addTrailingSlash: true, rejectUnauthorized: true, perMessageDeflate: { threshold: 1024 }, transportOptions: {}, closeOnBeforeunload: false }, r), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = vb(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
            this.transport && (this.transport.removeAllListeners(), this.transport.close());
          }, addEventListener("beforeunload", this.beforeunloadEventListener, false)), this.hostname !== "localhost" && (this.offlineEventListener = () => {
            this.onClose("transport close", { description: "network connection lost" });
          }, addEventListener("offline", this.offlineEventListener, false))), this.open();
        }
        createTransport(s) {
          const r = Object.assign({}, this.opts.query);
          r.EIO = Gp, r.transport = s, this.id && (r.sid = this.id);
          const c = Object.assign({}, this.opts, { query: r, socket: this, hostname: this.hostname, secure: this.secure, port: this.port }, this.opts.transportOptions[s]);
          return new Ob[s](c);
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
          let r = this.createTransport(s), c = false;
          Si.priorWebsocketSuccess = false;
          const g = () => {
            c || (r.send([{ type: "ping", data: "probe" }]), r.once("packet", (N) => {
              if (!c)
                if (N.type === "pong" && N.data === "probe") {
                  if (this.upgrading = true, this.emitReserved("upgrading", r), !r)
                    return;
                  Si.priorWebsocketSuccess = r.name === "websocket", this.transport.pause(() => {
                    c || this.readyState !== "closed" && (E(), this.setTransport(r), r.send([{ type: "upgrade" }]), this.emitReserved("upgrade", r), r = null, this.upgrading = false, this.flush());
                  });
                } else {
                  const Y = new Error("probe error");
                  Y.transport = r.name, this.emitReserved("upgradeError", Y);
                }
            }));
          };
          function v() {
            c || (c = true, E(), r.close(), r = null);
          }
          const h = (N) => {
            const Y = new Error("probe error: " + N);
            Y.transport = r.name, v(), this.emitReserved("upgradeError", Y);
          };
          function x() {
            h("transport closed");
          }
          function m() {
            h("socket closed");
          }
          function d(N) {
            r && N.name !== r.name && v();
          }
          const E = () => {
            r.removeListener("open", g), r.removeListener("error", h), r.removeListener("close", x), this.off("close", m), this.off("upgrading", d);
          };
          r.once("open", g), r.once("error", h), r.once("close", x), this.once("close", m), this.once("upgrading", d), this.upgrades.indexOf("webtransport") !== -1 && s !== "webtransport" ? this.setTimeoutFn(() => {
            c || r.open();
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
            const c = this.writeBuffer[r].data;
            if (c && (s += gb(c)), r > 0 && s > this.maxPayload)
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
        sendPacket(s, r, c, g) {
          if (typeof r == "function" && (g = r, r = void 0), typeof c == "function" && (g = c, c = null), this.readyState === "closing" || this.readyState === "closed")
            return;
          c = c || {}, c.compress = c.compress !== false;
          const v = { type: s, data: r, options: c };
          this.emitReserved("packetCreate", v), this.writeBuffer.push(v), g && this.once("flush", g), this.flush();
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
          Si.priorWebsocketSuccess = false, this.emitReserved("error", s), this.onClose("transport error", s);
        }
        onClose(s, r) {
          (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") && (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), typeof removeEventListener == "function" && (removeEventListener("beforeunload", this.beforeunloadEventListener, false), removeEventListener("offline", this.offlineEventListener, false)), this.readyState = "closed", this.id = null, this.emitReserved("close", s, r), this.writeBuffer = [], this.prevBufferLen = 0);
        }
        filterUpgrades(s) {
          const r = [];
          let c = 0;
          const g = s.length;
          for (; c < g; c++)
            ~this.transports.indexOf(s[c]) && r.push(s[c]);
          return r;
        }
      };
      Jp.protocol = Gp;
      function Ub(u, s = "", r) {
        let c = u;
        r = r || typeof location < "u" && location, u == null && (u = r.protocol + "//" + r.host), typeof u == "string" && (u.charAt(0) === "/" && (u.charAt(1) === "/" ? u = r.protocol + u : u = r.host + u), /^(https?|wss?):\/\//.test(u) || (typeof r < "u" ? u = r.protocol + "//" + u : u = "https://" + u), c = ef(u)), c.port || (/^(http|ws)$/.test(c.protocol) ? c.port = "80" : /^(http|ws)s$/.test(c.protocol) && (c.port = "443")), c.path = c.path || "/";
        const g = c.host.indexOf(":") !== -1 ? "[" + c.host + "]" : c.host;
        return c.id = c.protocol + "://" + g + ":" + c.port + s, c.href = c.protocol + "://" + g + (r && r.port === c.port ? "" : ":" + c.port), c;
      }
      var Db = typeof ArrayBuffer == "function";
      var Bb = (u) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(u) : u.buffer instanceof ArrayBuffer;
      var Fp = Object.prototype.toString;
      var qb = typeof Blob == "function" || typeof Blob < "u" && Fp.call(Blob) === "[object BlobConstructor]";
      var Hb = typeof File == "function" || typeof File < "u" && Fp.call(File) === "[object FileConstructor]";
      function mf(u) {
        return Db && (u instanceof ArrayBuffer || Bb(u)) || qb && u instanceof Blob || Hb && u instanceof File;
      }
      function br(u, s) {
        if (!u || typeof u != "object")
          return false;
        if (Array.isArray(u)) {
          for (let r = 0, c = u.length; r < c; r++)
            if (br(u[r]))
              return true;
          return false;
        }
        if (mf(u))
          return true;
        if (u.toJSON && typeof u.toJSON == "function" && arguments.length === 1)
          return br(u.toJSON(), true);
        for (const r in u)
          if (Object.prototype.hasOwnProperty.call(u, r) && br(u[r]))
            return true;
        return false;
      }
      function Lb(u) {
        const s = [], r = u.data, c = u;
        return c.data = tf(r, s), c.attachments = s.length, { packet: c, buffers: s };
      }
      function tf(u, s) {
        if (!u)
          return u;
        if (mf(u)) {
          const r = { _placeholder: true, num: s.length };
          return s.push(u), r;
        } else if (Array.isArray(u)) {
          const r = new Array(u.length);
          for (let c = 0; c < u.length; c++)
            r[c] = tf(u[c], s);
          return r;
        } else if (typeof u == "object" && !(u instanceof Date)) {
          const r = {};
          for (const c in u)
            Object.prototype.hasOwnProperty.call(u, c) && (r[c] = tf(u[c], s));
          return r;
        }
        return u;
      }
      function Yb(u, s) {
        return u.data = nf(u.data, s), delete u.attachments, u;
      }
      function nf(u, s) {
        if (!u)
          return u;
        if (u && u._placeholder === true) {
          if (typeof u.num == "number" && u.num >= 0 && u.num < s.length)
            return s[u.num];
          throw new Error("illegal attachments");
        } else if (Array.isArray(u))
          for (let r = 0; r < u.length; r++)
            u[r] = nf(u[r], s);
        else if (typeof u == "object")
          for (const r in u)
            Object.prototype.hasOwnProperty.call(u, r) && (u[r] = nf(u[r], s));
        return u;
      }
      var Xb = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"];
      var Gb = 5;
      var Oe;
      (function(u) {
        u[u.CONNECT = 0] = "CONNECT", u[u.DISCONNECT = 1] = "DISCONNECT", u[u.EVENT = 2] = "EVENT", u[u.ACK = 3] = "ACK", u[u.CONNECT_ERROR = 4] = "CONNECT_ERROR", u[u.BINARY_EVENT = 5] = "BINARY_EVENT", u[u.BINARY_ACK = 6] = "BINARY_ACK";
      })(Oe || (Oe = {}));
      var Qb = class {
        constructor(s) {
          this.replacer = s;
        }
        encode(s) {
          return (s.type === Oe.EVENT || s.type === Oe.ACK) && br(s) ? this.encodeAsBinary({ type: s.type === Oe.EVENT ? Oe.BINARY_EVENT : Oe.BINARY_ACK, nsp: s.nsp, data: s.data, id: s.id }) : [this.encodeAsString(s)];
        }
        encodeAsString(s) {
          let r = "" + s.type;
          return (s.type === Oe.BINARY_EVENT || s.type === Oe.BINARY_ACK) && (r += s.attachments + "-"), s.nsp && s.nsp !== "/" && (r += s.nsp + ","), s.id != null && (r += s.id), s.data != null && (r += JSON.stringify(s.data, this.replacer)), r;
        }
        encodeAsBinary(s) {
          const r = Lb(s), c = this.encodeAsString(r.packet), g = r.buffers;
          return g.unshift(c), g;
        }
      };
      function Tp(u) {
        return Object.prototype.toString.call(u) === "[object Object]";
      }
      var pf = class extends ot {
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
            c || r.type === Oe.BINARY_ACK ? (r.type = c ? Oe.EVENT : Oe.ACK, this.reconstructor = new Vb(r), r.attachments === 0 && super.emitReserved("decoded", r)) : super.emitReserved("decoded", r);
          } else if (mf(s) || s.base64)
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
          const g = s.charAt(r + 1);
          if (g !== "" && Number(g) == g) {
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
            if (pf.isPayloadValid(c.type, v))
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
              return Tp(r);
            case Oe.DISCONNECT:
              return r === void 0;
            case Oe.CONNECT_ERROR:
              return typeof r == "string" || Tp(r);
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
      var Vb = class {
        constructor(s) {
          this.packet = s, this.buffers = [], this.reconPack = s;
        }
        takeBinaryData(s) {
          if (this.buffers.push(s), this.buffers.length === this.reconPack.attachments) {
            const r = Yb(this.reconPack, this.buffers);
            return this.finishedReconstruction(), r;
          }
          return null;
        }
        finishedReconstruction() {
          this.reconPack = null, this.buffers = [];
        }
      };
      var kb = Object.freeze(Object.defineProperty({ __proto__: null, Decoder: pf, Encoder: Qb, get PacketType() {
        return Oe;
      }, protocol: Gb }, Symbol.toStringTag, { value: "Module" }));
      function An(u, s, r) {
        return u.on(s, r), function() {
          u.off(s, r);
        };
      }
      var Zb = Object.freeze({ connect: 1, connect_error: 1, disconnect: 1, disconnecting: 1, newListener: 1, removeListener: 1 });
      var Wp = class extends ot {
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
          this.subs = [An(s, "open", this.onopen.bind(this)), An(s, "packet", this.onpacket.bind(this)), An(s, "error", this.onerror.bind(this)), An(s, "close", this.onclose.bind(this))];
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
          if (Zb.hasOwnProperty(s))
            throw new Error('"' + s.toString() + '" is a reserved event name');
          if (r.unshift(s), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
            return this._addToQueue(r), this;
          const c = { type: Oe.EVENT, data: r };
          if (c.options = {}, c.options.compress = this.flags.compress !== false, typeof r[r.length - 1] == "function") {
            const v = this.ids++, h = r.pop();
            this._registerAckCallback(v, h), c.id = v;
          }
          const g = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
          return this.flags.volatile && (!g || !this.connected) || (this.connected ? (this.notifyOutgoingListeners(c), this.packet(c)) : this.sendBuffer.push(c)), this.flags = {}, this;
        }
        _registerAckCallback(s, r) {
          var c;
          const g = (c = this.flags.timeout) !== null && c !== void 0 ? c : this._opts.ackTimeout;
          if (g === void 0) {
            this.acks[s] = r;
            return;
          }
          const v = this.io.setTimeoutFn(() => {
            delete this.acks[s];
            for (let h = 0; h < this.sendBuffer.length; h++)
              this.sendBuffer[h].id === s && this.sendBuffer.splice(h, 1);
            r.call(this, new Error("operation has timed out"));
          }, g);
          this.acks[s] = (...h) => {
            this.io.clearTimeoutFn(v), r.apply(this, [null, ...h]);
          };
        }
        emitWithAck(s, ...r) {
          const c = this.flags.timeout !== void 0 || this._opts.ackTimeout !== void 0;
          return new Promise((g, v) => {
            r.push((h, x) => c ? h ? v(h) : g(x) : g(h)), this.emit(s, ...r);
          });
        }
        _addToQueue(s) {
          let r;
          typeof s[s.length - 1] == "function" && (r = s.pop());
          const c = { id: this._queueSeq++, tryCount: 0, pending: false, args: s, flags: Object.assign({ fromQueue: true }, this.flags) };
          s.push((g, ...v) => c !== this._queue[0] ? void 0 : (g !== null ? c.tryCount > this._opts.retries && (this._queue.shift(), r && r(g)) : (this._queue.shift(), r && r(null, ...v)), c.pending = false, this._drainQueue())), this._queue.push(c), this._drainQueue();
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
          return function(...g) {
            c || (c = true, r.packet({ type: Oe.ACK, id: s, data: g }));
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
      function _i(u) {
        u = u || {}, this.ms = u.min || 100, this.max = u.max || 1e4, this.factor = u.factor || 2, this.jitter = u.jitter > 0 && u.jitter <= 1 ? u.jitter : 0, this.attempts = 0;
      }
      _i.prototype.duration = function() {
        var u = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
          var s = Math.random(), r = Math.floor(s * this.jitter * u);
          u = (Math.floor(s * 10) & 1) == 0 ? u - r : u + r;
        }
        return Math.min(u, this.max) | 0;
      };
      _i.prototype.reset = function() {
        this.attempts = 0;
      };
      _i.prototype.setMin = function(u) {
        this.ms = u;
      };
      _i.prototype.setMax = function(u) {
        this.max = u;
      };
      _i.prototype.setJitter = function(u) {
        this.jitter = u;
      };
      var af = class extends ot {
        constructor(s, r) {
          var c;
          super(), this.nsps = {}, this.subs = [], s && typeof s == "object" && (r = s, s = void 0), r = r || {}, r.path = r.path || "/socket.io", this.opts = r, Tr(this, r), this.reconnection(r.reconnection !== false), this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0), this.reconnectionDelay(r.reconnectionDelay || 1e3), this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3), this.randomizationFactor((c = r.randomizationFactor) !== null && c !== void 0 ? c : 0.5), this.backoff = new _i({ min: this.reconnectionDelay(), max: this.reconnectionDelayMax(), jitter: this.randomizationFactor() }), this.timeout(r.timeout == null ? 2e4 : r.timeout), this._readyState = "closed", this.uri = s;
          const g = r.parser || kb;
          this.encoder = new g.Encoder(), this.decoder = new g.Decoder(), this._autoConnect = r.autoConnect !== false, this._autoConnect && this.open();
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
          const r = this.engine, c = this;
          this._readyState = "opening", this.skipReconnect = false;
          const g = An(r, "open", function() {
            c.onopen(), s && s();
          }), v = (x) => {
            this.cleanup(), this._readyState = "closed", this.emitReserved("error", x), s ? s(x) : this.maybeReconnectOnOpen();
          }, h = An(r, "error", v);
          if (this._timeout !== false) {
            const x = this._timeout, m = this.setTimeoutFn(() => {
              g(), v(new Error("timeout")), r.close();
            }, x);
            this.opts.autoUnref && m.unref(), this.subs.push(() => {
              this.clearTimeoutFn(m);
            });
          }
          return this.subs.push(g), this.subs.push(h), this;
        }
        connect(s) {
          return this.open(s);
        }
        onopen() {
          this.cleanup(), this._readyState = "open", this.emitReserved("open");
          const s = this.engine;
          this.subs.push(An(s, "ping", this.onping.bind(this)), An(s, "data", this.ondata.bind(this)), An(s, "error", this.onerror.bind(this)), An(s, "close", this.onclose.bind(this)), An(this.decoder, "decoded", this.ondecoded.bind(this)));
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
          hf(() => {
            this.emitReserved("packet", s);
          }, this.setTimeoutFn);
        }
        onerror(s) {
          this.emitReserved("error", s);
        }
        socket(s, r) {
          let c = this.nsps[s];
          return c ? this._autoConnect && !c.active && c.connect() : (c = new Wp(this, s, r), this.nsps[s] = c), c;
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
              s.skipReconnect || (this.emitReserved("reconnect_attempt", s.backoff.attempts), !s.skipReconnect && s.open((g) => {
                g ? (s._reconnecting = false, s.reconnect(), this.emitReserved("reconnect_error", g)) : s.onreconnect();
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
      var Os = {};
      function vr(u, s) {
        typeof u == "object" && (s = u, u = void 0), s = s || {};
        const r = Ub(u, s.path || "/socket.io"), c = r.source, g = r.id, v = r.path, h = Os[g] && v in Os[g].nsps, x = s.forceNew || s["force new connection"] || s.multiplex === false || h;
        let m;
        return x ? m = new af(c, s) : (Os[g] || (Os[g] = new af(c, s)), m = Os[g]), r.query && !s.query && (s.query = r.queryKey), m.socket(r.path, s);
      }
      Object.assign(vr, { Manager: af, Socket: Wp, io: vr, connect: vr });
      var Kb = class {
        constructor(s, r, c, g) {
          El(this, "socket_port"), El(this, "host"), El(this, "port"), El(this, "protocol"), El(this, "url"), El(this, "site_name"), El(this, "socket");
          var v, h, x, m;
          if (this.socket_port = c != null ? c : "9000", this.host = (v = window.location) == null ? void 0 : v.hostname, this.port = (h = window.location) != null && h.port ? `:${this.socket_port}` : "", this.protocol = ((x = window.location) == null ? void 0 : x.protocol) === "https:" ? "https" : "http", s) {
            let d = new URL(s);
            d.port = "", c ? (d.port = c, this.url = d.toString()) : this.url = d.toString();
          } else
            this.url = `${this.protocol}://${this.host}${this.port}/`;
          r && (this.url = `${this.url}${r}`), this.site_name = r, this.socket = vr(`${this.url}`, { withCredentials: true, secure: this.protocol === "https", extraHeaders: g && g.useToken === true ? { Authorization: `${g.type} ${(m = g.token) == null ? void 0 : m.call(g)}` } : {} });
        }
      };
      var Jb = We.createContext(null);
      var Fb = ({ url: u = "", tokenParams: s, socketPort: r, swrConfig: c, siteName: g, enableSocket: v = true, children: h, customHeaders: x }) => {
        const m = We.useMemo(() => {
          const d = new Ny.FrappeApp(u, s, void 0, x);
          return { url: u, tokenParams: s, app: d, auth: d.auth(), db: d.db(), call: d.call(), file: d.file(), socket: v ? new Kb(u, g, r, s).socket : void 0, enableSocket: v, socketPort: r };
        }, [u, s, r, v, x]);
        return b.jsx(Jb.Provider, { value: m, children: b.jsx(ab, { value: c, children: h }) });
      };
      var Wb = (u) => {
        var s;
        return b.jsx(Fb, { enableSocket: false, customHeaders: { "x-frappe-csrf-token": (s = window.frappe) == null ? void 0 : s.csrf_token }, children: u.children });
      };
      Object.keys(km).map((u) => km[u]).filter((u) => u.component).map((u) => {
        const s = (r) => b.jsx(Wb, Yt(Ve({}, r), { children: b.jsx(u, {}) }));
        return customElements.get(u.component) || customElements.define(u.component, dy(s, Cs, xy)), { element: s, simulator: "simulator" in u ? u.simulator : void 0, renderInReact: "renderInReact" in u ? u.renderInReact : void 0, tag: u.component };
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
//# sourceMappingURL=index.bundle.WB5TWHLP.js.map
