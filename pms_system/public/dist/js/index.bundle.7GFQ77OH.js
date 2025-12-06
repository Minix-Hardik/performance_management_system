(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // ../pms_system/pms_system/public/pms-ui/index.bundle.js
  var require_index_bundle = __commonJS({
    "../pms_system/pms_system/public/pms-ui/index.bundle.js"() {
      var E0 = Object.defineProperty;
      var A0 = Object.defineProperties;
      var R0 = Object.getOwnPropertyDescriptors;
      var or = Object.getOwnPropertySymbols;
      var Bm = Object.prototype.hasOwnProperty;
      var qm = Object.prototype.propertyIsEnumerable;
      var vi = (u, s) => (s = Symbol[u]) ? s : Symbol.for("Symbol." + u);
      var O0 = (u) => {
        throw TypeError(u);
      };
      var Dm = (u, s, r) => s in u ? E0(u, s, { enumerable: true, configurable: true, writable: true, value: r }) : u[s] = r;
      var Ve = (u, s) => {
        for (var r in s || (s = {}))
          Bm.call(s, r) && Dm(u, r, s[r]);
        if (or)
          for (var r of or(s))
            qm.call(s, r) && Dm(u, r, s[r]);
        return u;
      };
      var Yt = (u, s) => A0(u, R0(s));
      var Co = (u, s) => {
        var r = {};
        for (var f in u)
          Bm.call(u, f) && s.indexOf(f) < 0 && (r[f] = u[f]);
        if (u != null && or)
          for (var f of or(u))
            s.indexOf(f) < 0 && qm.call(u, f) && (r[f] = u[f]);
        return r;
      };
      var da = (u, s, r) => new Promise((f, y) => {
        var v = (p) => {
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
        }, x = (p) => p.done ? f(p.value) : Promise.resolve(p.value).then(v, m);
        x((r = r.apply(u, s)).next());
      });
      var _l = function(u, s) {
        this[0] = u, this[1] = s;
      };
      var zo = (u, s, r) => {
        var f = (m, x, p, h) => {
          try {
            var j = r[m](x), E = (x = j.value) instanceof _l, Y = j.done;
            Promise.resolve(E ? x[0] : x).then((w) => E ? f(m === "return" ? m : "next", x[1] ? { done: w.done, value: w.value } : w, p, h) : p({ value: w, done: Y })).catch((w) => f("throw", w, p, h));
          } catch (w) {
            h(w);
          }
        }, y = (m) => v[m] = (x) => new Promise((p, h) => f(m, x, p, h)), v = {};
        return r = r.apply(u, s), v[vi("asyncIterator")] = () => v, y("next"), y("throw"), y("return"), v;
      };
      var Mo = (u) => {
        var s = u[vi("asyncIterator")], r = false, f, y = {};
        return s == null ? (s = u[vi("iterator")](), f = (v) => y[v] = (m) => s[v](m)) : (s = s.call(u), f = (v) => y[v] = (m) => {
          if (r) {
            if (r = false, v === "throw")
              throw m;
            return m;
          }
          return r = true, { done: false, value: new _l(new Promise((x) => {
            var p = s[v](m);
            p instanceof Object || O0("Object expected"), x(p);
          }), 1) };
        }), y[vi("iterator")] = () => y, f("next"), "throw" in s ? f("throw") : y.throw = (v) => {
          throw v;
        }, "return" in s && f("return"), y;
      };
      var Hm = (u, s, r) => (s = u[vi("asyncIterator")]) ? s.call(u) : (u = u[vi("iterator")](), s = {}, r = (f, y) => (y = u[f]) && (s[f] = (v) => new Promise((m, x, p) => (v = y.call(u, v), p = v.done, Promise.resolve(v.value).then((h) => m({ value: h, done: p }), x)))), r("next"), r("return"), s);
      (function() {
        const s = document.createElement("link").relList;
        if (s && s.supports && s.supports("modulepreload"))
          return;
        for (const y of document.querySelectorAll('link[rel="modulepreload"]'))
          f(y);
        new MutationObserver((y) => {
          for (const v of y)
            if (v.type === "childList")
              for (const m of v.addedNodes)
                m.tagName === "LINK" && m.rel === "modulepreload" && f(m);
        }).observe(document, { childList: true, subtree: true });
        function r(y) {
          const v = {};
          return y.integrity && (v.integrity = y.integrity), y.referrerPolicy && (v.referrerPolicy = y.referrerPolicy), y.crossOrigin === "use-credentials" ? v.credentials = "include" : y.crossOrigin === "anonymous" ? v.credentials = "omit" : v.credentials = "same-origin", v;
        }
        function f(y) {
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
      var Uo = { exports: {} };
      var ws = {};
      var Lm;
      function C0() {
        if (Lm)
          return ws;
        Lm = 1;
        var u = Symbol.for("react.transitional.element"), s = Symbol.for("react.fragment");
        function r(f, y, v) {
          var m = null;
          if (v !== void 0 && (m = "" + v), y.key !== void 0 && (m = "" + y.key), "key" in y) {
            v = {};
            for (var x in y)
              x !== "key" && (v[x] = y[x]);
          } else
            v = y;
          return y = v.ref, { $$typeof: u, type: f, key: m, ref: y !== void 0 ? y : null, props: v };
        }
        return ws.Fragment = s, ws.jsx = r, ws.jsxs = r, ws;
      }
      var Ym;
      function z0() {
        return Ym || (Ym = 1, Uo.exports = C0()), Uo.exports;
      }
      var d = z0();
      var Do = { exports: {} };
      var ye = {};
      var Xm;
      function M0() {
        if (Xm)
          return ye;
        Xm = 1;
        var u = Symbol.for("react.transitional.element"), s = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), v = Symbol.for("react.consumer"), m = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), E = Symbol.for("react.activity"), Y = Symbol.iterator;
        function w(_) {
          return _ === null || typeof _ != "object" ? null : (_ = Y && _[Y] || _["@@iterator"], typeof _ == "function" ? _ : null);
        }
        var C = { isMounted: function() {
          return false;
        }, enqueueForceUpdate: function() {
        }, enqueueReplaceState: function() {
        }, enqueueSetState: function() {
        } }, Z = Object.assign, ie = {};
        function he(_, B, k) {
          this.props = _, this.context = B, this.refs = ie, this.updater = k || C;
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
        function se(_, B, k) {
          this.props = _, this.context = B, this.refs = ie, this.updater = k || C;
        }
        var ve = se.prototype = new _e();
        ve.constructor = se, Z(ve, he.prototype), ve.isPureReactComponent = true;
        var Ne = Array.isArray;
        function De() {
        }
        var ce = { H: null, A: null, T: null, S: null }, lt = Object.prototype.hasOwnProperty;
        function wt(_, B, k) {
          var K = k.ref;
          return { $$typeof: u, type: _, key: B, ref: K !== void 0 ? K : null, props: k };
        }
        function Pt(_, B) {
          return wt(_.type, B, _.props);
        }
        function pt(_) {
          return typeof _ == "object" && _ !== null && _.$$typeof === u;
        }
        function Ue(_) {
          var B = { "=": "=0", ":": "=2" };
          return "$" + _.replace(/[=:]/g, function(k) {
            return B[k];
          });
        }
        var Ge = /\/+/g;
        function ze(_, B) {
          return typeof _ == "object" && _ !== null && _.key != null ? Ue("" + _.key) : B.toString(36);
        }
        function xt(_) {
          switch (_.status) {
            case "fulfilled":
              return _.value;
            case "rejected":
              throw _.reason;
            default:
              switch (typeof _.status == "string" ? _.then(De, De) : (_.status = "pending", _.then(function(B) {
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
        function X(_, B, k, K, re) {
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
                  case j:
                    return me = _._init, X(me(_._payload), B, k, K, re);
                }
            }
          if (me)
            return re = re(_), me = K === "" ? "." + ze(_, 0) : K, Ne(re) ? (k = "", me != null && (k = me.replace(Ge, "$&/") + "/"), X(re, B, k, "", function(St) {
              return St;
            })) : re != null && (pt(re) && (re = Pt(re, k + (re.key == null || _ && _.key === re.key ? "" : ("" + re.key).replace(Ge, "$&/") + "/") + me)), B.push(re)), 1;
          me = 0;
          var ct = K === "" ? "." : K + ":";
          if (Ne(_))
            for (var Ze = 0; Ze < _.length; Ze++)
              K = _[Ze], xe = ct + ze(K, Ze), me += X(K, B, k, xe, re);
          else if (Ze = w(_), typeof Ze == "function")
            for (_ = Ze.call(_), Ze = 0; !(K = _.next()).done; )
              K = K.value, xe = ct + ze(K, Ze++), me += X(K, B, k, xe, re);
          else if (xe === "object") {
            if (typeof _.then == "function")
              return X(xt(_), B, k, K, re);
            throw B = String(_), Error("Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead.");
          }
          return me;
        }
        function I(_, B, k) {
          if (_ == null)
            return _;
          var K = [], re = 0;
          return X(_, K, "", "", function(xe) {
            return B.call(k, xe, re++);
          }), K;
        }
        function J(_) {
          if (_._status === -1) {
            var B = _._result;
            B = B(), B.then(function(k) {
              (_._status === 0 || _._status === -1) && (_._status = 1, _._result = k);
            }, function(k) {
              (_._status === 0 || _._status === -1) && (_._status = 2, _._result = k);
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
        }, de = { map: I, forEach: function(_, B, k) {
          I(_, function() {
            B.apply(this, arguments);
          }, k);
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
        return ye.Activity = E, ye.Children = de, ye.Component = he, ye.Fragment = r, ye.Profiler = y, ye.PureComponent = se, ye.StrictMode = f, ye.Suspense = p, ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ce, ye.__COMPILER_RUNTIME = { __proto__: null, c: function(_) {
          return ce.H.useMemoCache(_);
        } }, ye.cache = function(_) {
          return function() {
            return _.apply(null, arguments);
          };
        }, ye.cacheSignal = function() {
          return null;
        }, ye.cloneElement = function(_, B, k) {
          if (_ == null)
            throw Error("The argument must be a React element, but you passed " + _ + ".");
          var K = Z({}, _.props), re = _.key;
          if (B != null)
            for (xe in B.key !== void 0 && (re = "" + B.key), B)
              !lt.call(B, xe) || xe === "key" || xe === "__self" || xe === "__source" || xe === "ref" && B.ref === void 0 || (K[xe] = B[xe]);
          var xe = arguments.length - 2;
          if (xe === 1)
            K.children = k;
          else if (1 < xe) {
            for (var me = Array(xe), ct = 0; ct < xe; ct++)
              me[ct] = arguments[ct + 2];
            K.children = me;
          }
          return wt(_.type, re, K);
        }, ye.createContext = function(_) {
          return _ = { $$typeof: m, _currentValue: _, _currentValue2: _, _threadCount: 0, Provider: null, Consumer: null }, _.Provider = _, _.Consumer = { $$typeof: v, _context: _ }, _;
        }, ye.createElement = function(_, B, k) {
          var K, re = {}, xe = null;
          if (B != null)
            for (K in B.key !== void 0 && (xe = "" + B.key), B)
              lt.call(B, K) && K !== "key" && K !== "__self" && K !== "__source" && (re[K] = B[K]);
          var me = arguments.length - 2;
          if (me === 1)
            re.children = k;
          else if (1 < me) {
            for (var ct = Array(me), Ze = 0; Ze < me; Ze++)
              ct[Ze] = arguments[Ze + 2];
            re.children = ct;
          }
          if (_ && _.defaultProps)
            for (K in me = _.defaultProps, me)
              re[K] === void 0 && (re[K] = me[K]);
          return wt(_, xe, re);
        }, ye.createRef = function() {
          return { current: null };
        }, ye.forwardRef = function(_) {
          return { $$typeof: x, render: _ };
        }, ye.isValidElement = pt, ye.lazy = function(_) {
          return { $$typeof: j, _payload: { _status: -1, _result: _ }, _init: J };
        }, ye.memo = function(_, B) {
          return { $$typeof: h, type: _, compare: B === void 0 ? null : B };
        }, ye.startTransition = function(_) {
          var B = ce.T, k = {};
          ce.T = k;
          try {
            var K = _(), re = ce.S;
            re !== null && re(k, K), typeof K == "object" && K !== null && typeof K.then == "function" && K.then(De, ee);
          } catch (xe) {
            ee(xe);
          } finally {
            B !== null && k.types !== null && (B.types = k.types), ce.T = B;
          }
        }, ye.unstable_useCacheRefresh = function() {
          return ce.H.useCacheRefresh();
        }, ye.use = function(_) {
          return ce.H.use(_);
        }, ye.useActionState = function(_, B, k) {
          return ce.H.useActionState(_, B, k);
        }, ye.useCallback = function(_, B) {
          return ce.H.useCallback(_, B);
        }, ye.useContext = function(_) {
          return ce.H.useContext(_);
        }, ye.useDebugValue = function() {
        }, ye.useDeferredValue = function(_, B) {
          return ce.H.useDeferredValue(_, B);
        }, ye.useEffect = function(_, B) {
          return ce.H.useEffect(_, B);
        }, ye.useEffectEvent = function(_) {
          return ce.H.useEffectEvent(_);
        }, ye.useId = function() {
          return ce.H.useId();
        }, ye.useImperativeHandle = function(_, B, k) {
          return ce.H.useImperativeHandle(_, B, k);
        }, ye.useInsertionEffect = function(_, B) {
          return ce.H.useInsertionEffect(_, B);
        }, ye.useLayoutEffect = function(_, B) {
          return ce.H.useLayoutEffect(_, B);
        }, ye.useMemo = function(_, B) {
          return ce.H.useMemo(_, B);
        }, ye.useOptimistic = function(_, B) {
          return ce.H.useOptimistic(_, B);
        }, ye.useReducer = function(_, B, k) {
          return ce.H.useReducer(_, B, k);
        }, ye.useRef = function(_) {
          return ce.H.useRef(_);
        }, ye.useState = function(_) {
          return ce.H.useState(_);
        }, ye.useSyncExternalStore = function(_, B, k) {
          return ce.H.useSyncExternalStore(_, B, k);
        }, ye.useTransition = function() {
          return ce.H.useTransition();
        }, ye.version = "19.2.0", ye;
      }
      var Qm;
      function sc() {
        return Qm || (Qm = 1, Do.exports = M0()), Do.exports;
      }
      var Pe = sc();
      var zs = Np(Pe);
      var U0 = (u) => u.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
      var D0 = (u) => u.replace(/^([A-Z])|[\s-_]+(\w)/g, (s, r, f) => f ? f.toUpperCase() : r.toLowerCase());
      var Gm = (u) => {
        const s = D0(u);
        return s.charAt(0).toUpperCase() + s.slice(1);
      };
      var jp = (...u) => u.filter((s, r, f) => !!s && s.trim() !== "" && f.indexOf(s) === r).join(" ").trim();
      var B0 = (u) => {
        for (const s in u)
          if (s.startsWith("aria-") || s === "role" || s === "title")
            return true;
      };
      var q0 = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
      var H0 = Pe.forwardRef((h, p) => {
        var j = h, { color: u = "currentColor", size: s = 24, strokeWidth: r = 2, absoluteStrokeWidth: f, className: y = "", children: v, iconNode: m } = j, x = Co(j, ["color", "size", "strokeWidth", "absoluteStrokeWidth", "className", "children", "iconNode"]);
        return Pe.createElement("svg", Ve(Ve(Yt(Ve({ ref: p }, q0), { width: s, height: s, stroke: u, strokeWidth: f ? Number(r) * 24 / Number(s) : r, className: jp("lucide", y) }), !v && !B0(x) && { "aria-hidden": "true" }), x), [...m.map(([E, Y]) => Pe.createElement(E, Y)), ...Array.isArray(v) ? v : [v]]);
      });
      var _i = (u, s) => {
        const r = Pe.forwardRef((m, v) => {
          var x = m, { className: f } = x, y = Co(x, ["className"]);
          return Pe.createElement(H0, Ve({ ref: v, iconNode: s, className: jp(`lucide-${U0(Gm(u))}`, `lucide-${u}`, f) }, y));
        });
        return r.displayName = Gm(u), r;
      };
      var L0 = [["path", { d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526", key: "1yiouv" }], ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]];
      var Y0 = _i("award", L0);
      var X0 = [["path", { d: "M8 2v4", key: "1cmpym" }], ["path", { d: "M16 2v4", key: "4m81vk" }], ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }], ["path", { d: "M3 10h18", key: "8toen8" }]];
      var Q0 = _i("calendar", X0);
      var G0 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
      var k0 = _i("chevron-down", G0);
      var V0 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
      var Z0 = _i("chevron-up", V0);
      var K0 = [["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }], ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]];
      var Ms = _i("lock", K0);
      var J0 = [["path", { d: "M16 7h6v6", key: "box55l" }], ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]];
      var F0 = _i("trending-up", J0);
      var ma = ({ rating: u, onChange: s, disabled: r }) => d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2", children: [d.jsx("input", { type: "number", min: 0, max: 10, step: 0.5, value: u != null ? u : "", onChange: (f) => {
        let y = parseFloat(f.target.value);
        if (isNaN(y)) {
          s(0);
          return;
        }
        y < 0 && (y = 0), y > 10 && (y = 10), s(y);
      }, disabled: r, className: `ef-w-16 ef-px-2 ef-py-1 ef-border ef-rounded ef-text-center ef-font-semibold ef-text-sm ${r ? "ef-bg-gray-100 ef-text-gray-500 ef-cursor-not-allowed" : "ef-bg-white"}`, placeholder: "0-10" }), d.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/ 10" })] });
      var W0 = ({ kra: u, goal: s, appraisalMode: r, updateGoalRating: f, employeeCanEdit: y, managerCanEdit: v, showManagerData: m, secondManagerCanEdit: x }) => {
        const p = () => d.jsxs("div", { className: "ef-absolute ef-top-2 ef-right-2 ef-flex ef-items-center ef-gap-1 ef-bg-gray-200 ef-text-gray-600 ef-text-xs ef-px-2 ef-py-1 ef-rounded-lg ef-shadow-sm", children: [d.jsx(Ms, { size: 12 }), "Locked"] }), h = Pe.useMemo(() => {
          const j = s.tasks;
          if (!j || j.length === 0)
            return null;
          const E = j.map((C) => typeof C.completed_percentage == "number" ? Math.max(0, Math.min(100, C.completed_percentage)) : 0), Y = E.reduce((C, Z) => C + Z, 0) / E.length, w = Math.round(Y / 10 * 10) / 10;
          return { avgPercent: Y, rating: w };
        }, [s]);
        if (Pe.useEffect(() => {
          if (r === "self") {
            const j = s.tasks;
            if (j && j.length > 0 && h) {
              const E = s.selfRating, Y = h.rating;
              E !== Y && f(u.id, s.id, "selfRating", Y);
            }
          }
        }, [h, r, s]), r === "self") {
          const j = s.tasks;
          return d.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-shadow-sm", children: [d.jsx("div", { className: "ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b", children: d.jsx("h3", { className: "ef-text-sm ef-font-semibold ef-text-gray-900", children: s.description }) }), d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [d.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Self Appraisal" }), !y && d.jsx(p, {})] }), (!j || j.length === 0) && d.jsxs(d.Fragment, { children: [d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), d.jsx(ma, { rating: s.selfRating, onChange: (E) => y && f(u.id, s.id, "selfRating", E), disabled: !y }), d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), d.jsx("textarea", { value: s.selfComments, onChange: (E) => y && f(u.id, s.id, "selfComments", E.target.value), disabled: !y, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${y ? "ef-bg-white ef-border-blue-200 focus:ef-ring-1 focus:ef-ring-blue-400" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Share your thoughts..." })] }), j && j.length > 0 && h && d.jsxs(d.Fragment, { children: [d.jsxs("div", { className: "ef-mb-3", children: [d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-2", children: "Tasks" }), d.jsx("div", { className: "ef-space-y-2", children: j.map((E) => {
            console.log(j);
            const Y = typeof E.completed_percentage == "number" ? Math.max(0, Math.min(100, E.completed_percentage)) : E.completed_percentage ? 100 : 0;
            return d.jsxs("div", { className: "ef-bg-white ef-border ef-border-gray-100 ef-p-2 ef-rounded ef-text-xs", children: [d.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-1", children: [d.jsx("div", { className: "ef-font-medium ef-text-sm", children: E.subject }), d.jsxs("div", { className: "ef-text-xs ef-text-gray-600", children: [Math.round(Y), "%"] })] }), d.jsx("div", { className: "ef-w-full ef-bg-gray-100 ef-rounded ef-overflow-hidden ef-h-2", children: d.jsx("div", { style: { width: `${Y}%` }, className: "ef-h-full ef-bg-gradient-to-r ef-from-blue-400 ef-to-blue-600" }) })] }, E.id || E.subject);
          }) })] }), d.jsxs("div", { children: [d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Computed Self Rating" }), d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-blue-100 ef-border ef-border-blue-200 ef-px-2 ef-py-1 ef-rounded", children: [d.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-blue-700", children: h.rating }), d.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" }), d.jsxs("span", { className: "ef-text-xs ef-text-gray-500 ef-ml-2", children: ["(based on ", Math.round(h.avgPercent), "% average completion)"] })] }), d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), d.jsx("textarea", { value: s.selfComments, onChange: (E) => y && f(u.id, s.id, "selfComments", E.target.value), disabled: !y, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${y ? "ef-bg-white ef-border-blue-200 focus:ef-ring-1 focus:ef-ring-blue-400" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Share your thoughts..." })] })] })] })] });
        }
        return r === "manager" ? d.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-shadow-sm", children: [d.jsx("div", { className: "ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b", children: d.jsx("h3", { className: "ef-text-sm ef-font-semibold ef-text-gray-900", children: s.description }) }), d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Employee Self Rating" }), d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4 ef-mb-2", children: [d.jsxs("div", { children: [d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-blue-100 ef-border ef-border-blue-200 ef-px-2 ef-py-1 ef-rounded", children: [d.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-blue-700", children: s.selfRating }), d.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), d.jsxs("div", { className: "ef-flex-1", children: [d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), d.jsx("div", { className: "ef-bg-white ef-border ef-border-blue-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: s.selfComments || d.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), m && d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-purple-50", children: [d.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Manager Review" }), !v && d.jsx(p, {})] }), d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), d.jsx(ma, { rating: s.managerRating, onChange: (j) => v && f(u.id, s.id, "managerRating", j), disabled: !v }), d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), d.jsx("textarea", { value: s.managerComments, onChange: (j) => v && f(u.id, s.id, "managerComments", j.target.value), disabled: !v, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${v ? "ef-bg-white ef-border-purple-200 focus:ef-ring-1 focus:ef-ring-purple-400" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Add your review..." })] })] }) : r === "second_manager" ? d.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-shadow-sm", children: [d.jsx("div", { className: "ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b", children: d.jsx("h3", { className: "ef-text-sm ef-font-semibold ef-text-gray-900", children: s.description }) }), d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Employee Self Rating" }), d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4", children: [d.jsxs("div", { children: [d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-blue-100 ef-border ef-border-blue-200 ef-px-2 ef-py-1 ef-rounded", children: [d.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-blue-700", children: s.selfRating }), d.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), d.jsxs("div", { className: "ef-flex-1", children: [d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), d.jsx("div", { className: "ef-bg-white ef-border ef-border-blue-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: s.selfComments || d.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), m && d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-purple-50", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Manager Review" }), d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4", children: [d.jsxs("div", { children: [d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-purple-100 ef-border ef-border-purple-200 ef-px-2 ef-py-1 ef-rounded", children: [d.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-purple-700", children: s.managerRating }), d.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), d.jsxs("div", { className: "ef-flex-1", children: [d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), d.jsx("div", { className: "ef-bg-white ef-border ef-border-purple-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: s.managerComments || d.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-green-50", children: [d.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Second Manager Review" }), !x && d.jsx(p, {})] }), d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), d.jsx(ma, { rating: s.secondManagerRating, onChange: (j) => x && f(u.id, s.id, "secondManagerRating", j), disabled: !x }), d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), d.jsx("textarea", { value: s.secondManagerComment, onChange: (j) => x && f(u.id, s.id, "secondManagerComment", j.target.value), disabled: !x, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${x ? "ef-bg-white ef-border-green-200 focus:ef-ring-1 focus:ef-ring-green-400" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Add your review..." })] })] }) : null;
      };
      var $0 = ({ kra: u, appraisalMode: s, updateKRARating: r, employeeCanEdit: f, managerCanEdit: y, showManagerData: v, secondManagerCanEdit: m }) => {
        const x = () => d.jsxs("div", { className: "ef-absolute ef-top-2 ef-right-2 ef-flex ef-items-center ef-gap-1 ef-bg-gray-200 ef-text-gray-600 ef-text-xs ef-px-2 ef-py-1 ef-rounded-lg ef-shadow-sm", children: [d.jsx(Ms, { size: 12 }), "Locked"] });
        return s === "self" ? d.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-overflow-hidden ef-shadow-sm", children: [d.jsx("div", { className: "ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b ef-border-gray-200", children: d.jsx("h3", { className: "ef-text-sm ef-font-semibold ef-text-gray-900", children: u.title }) }), d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [d.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Self Appraisal" }), !f && d.jsx(x, {})] }), d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), d.jsx(ma, { rating: u.selfRating, onChange: (p) => f && r(u.id, "selfRating", p), disabled: !f }), d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), d.jsx("textarea", { value: u.selfComments, onChange: (p) => f && r(u.id, "selfComments", p.target.value), disabled: !f, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${f ? "ef-bg-white ef-border-blue-200 focus:ef-ring-1 focus:ef-ring-blue-400" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Add your comments..." })] })] }) : s === "manager" ? d.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-overflow-hidden ef-shadow-sm", children: [d.jsx("div", { className: "ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b ef-border-gray-200", children: d.jsx("h3", { className: "ef-text-sm ef-font-semibold ef-text-gray-900", children: u.title }) }), d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Employee Self Rating" }), d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4 ef-mb-2", children: [d.jsxs("div", { children: [d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-blue-100 ef-border ef-border-blue-200 ef-px-2 ef-py-1 ef-rounded", children: [d.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-blue-700", children: u.selfRating }), d.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), d.jsxs("div", { className: "ef-flex-1", children: [d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), d.jsx("div", { className: "ef-bg-white ef-border ef-border-blue-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: u.selfComments || d.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), v && d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-purple-50", children: [d.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Manager Review" }), !y && d.jsx(x, {})] }), d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), d.jsx(ma, { rating: u.managerRating, onChange: (p) => y && r(u.id, "managerRating", p), disabled: !y }), d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), d.jsx("textarea", { value: u.managerComments, onChange: (p) => y && r(u.id, "managerComments", p.target.value), disabled: !y, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${y ? "ef-bg-white ef-border-purple-200 focus:ef-ring-1 focus:ef-ring-purple-400" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Add your review..." })] })] }) : s === "second_manager" ? d.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-overflow-hidden ef-shadow-sm", children: [d.jsx("div", { className: "ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b ef-border-gray-200", children: d.jsx("h3", { className: "ef-text-sm ef-font-semibold ef-text-gray-900", children: u.title }) }), d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Employee Self Rating" }), d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4", children: [d.jsxs("div", { children: [d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-blue-100 ef-border ef-border-blue-200 ef-px-2 ef-py-1 ef-rounded", children: [d.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-blue-700", children: u.selfRating }), d.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), d.jsxs("div", { className: "ef-flex-1", children: [d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), d.jsx("div", { className: "ef-bg-white ef-border ef-border-blue-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: u.selfComments || d.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), v && d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-purple-50", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Manager Review" }), d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4", children: [d.jsxs("div", { children: [d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-purple-100 ef-border ef-border-purple-200 ef-px-2 ef-py-1 ef-rounded", children: [d.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-purple-700", children: u.managerRating }), d.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), d.jsxs("div", { className: "ef-flex-1", children: [d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), d.jsx("div", { className: "ef-bg-white ef-border ef-border-purple-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: u.managerComments || d.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-green-50", children: [d.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Second Manager Review" }), !m && d.jsx(x, {})] }), d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), d.jsx(ma, { rating: u.secondManagerRating, onChange: (p) => m && r(u.id, "secondManagerRating", p), disabled: !m }), d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), d.jsx("textarea", { value: u.secondManagerComment, onChange: (p) => m && r(u.id, "secondManagerComment", p.target.value), disabled: !m, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${m ? "ef-bg-white ef-border-green-200 focus:ef-ring-1 focus:ef-ring-green-400" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Add your review..." })] })] }) : null;
      };
      var P0 = ({ kra: u, expanded: s, onToggle: r, appraisalMode: f, updateGoalRating: y, updateKRARating: v, employeeCanEdit: m, managerCanEdit: x, showManagerData: p, secondManagerCanEdit: h }) => d.jsxs("div", { className: "ef-border ef-rounded-lg", children: [d.jsxs("div", { onClick: r, className: "ef-flex ef-justify-between ef-items-center ef-p-4 ef-bg-gray-50 ef-cursor-pointer ef-hover:bg-gray-100", children: [d.jsxs("div", { className: "ef-flex-1", children: [d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-3", children: [d.jsx("h3", { className: "ef-text-lg ef-font-semibold ef-text-gray-900", children: u.title }), d.jsxs("span", { className: "ef-px-3 ef-py-1 ef-bg-blue-100 ef-text-blue-700 ef-text-sm ef-rounded-full", children: [u.weightage, "% weightage"] })] }), d.jsx("p", { className: "ef-text-gray-600 ef-text-sm ef-mt-1", children: u.description })] }), s ? d.jsx(Z0, {}) : d.jsx(k0, {})] }), s && d.jsx("div", { className: "ef-p-4", children: u.goals.length > 0 ? u.goals.map((j) => d.jsxs("div", { className: "ef-mb-6 ef-last:mb-0 ef-pb-6 ef-last:pb-0 ef-border-b ef-last:border-b-0", children: [d.jsxs("div", { className: "ef-mb-3", children: [d.jsxs("p", { className: "ef-font-medium ef-text-gray-900", children: [j.description, d.jsxs("span", { className: "ef-inline-flex ef-items-center ef-px-3 ef-py-1 ef-bg-gradient-to-r ef-from-purple-500 ef-to-pink-500 ef-text-white ef-text-xs ef-font-semibold ef-rounded-full ef-shadow-sm ef-mx-3", children: [j.weightage, "% weightage"] })] }), d.jsx("div", { className: "ef-w-full ef-bg-gray-200 ef-rounded-full ef-h-3 ef-overflow-hidden ef-mt-2", children: d.jsx("div", { className: "ef-h-full ef-bg-gradient-to-r ef-from-green-400 ef-to-green-600 ef-transition-all ef-duration-500", style: { width: `${Math.min(j.progress, 100)}%` } }) }), d.jsxs("p", { className: "ef-text-sm ef-text-gray-600 ef-mt-1", children: ["Progress: ", Math.min(j.progress, 100), "%"] })] }), d.jsx(W0, { kra: u, goal: j, appraisalMode: f, updateGoalRating: y, secondManagerCanEdit: h, employeeCanEdit: m, managerCanEdit: x, showManagerData: p })] }, j.id)) : d.jsx($0, { kra: u, appraisalMode: f, updateKRARating: v, employeeCanEdit: m, secondManagerCanEdit: h, managerCanEdit: x, showManagerData: p }) })] });
      var I0 = ({ kraList: u, expandedKRA: s, toggleKRA: r, appraisalMode: f, updateGoalRating: y, updateKRARating: v, employeeCanEdit: m, managerCanEdit: x, showManagerData: p, secondManagerCanEdit: h }) => d.jsx("div", { className: "ef-space-y-4", children: u.map((j) => d.jsx(P0, { kra: j, expanded: s[j.id], onToggle: () => r(j.id), appraisalMode: f, updateGoalRating: y, updateKRARating: v, employeeCanEdit: m, managerCanEdit: x, showManagerData: p, secondManagerCanEdit: h }, j.id)) });
      var ey = ({ comp: u, appraisalMode: s, updateCompetency: r, employeeCanEdit: f, managerCanEdit: y, showManagerData: v, secondManagerCanEdit: m }) => {
        const x = () => d.jsxs("div", { className: "ef-absolute ef-top-2 ef-right-2 ef-flex ef-items-center ef-gap-1 ef-bg-gray-200 ef-text-gray-600 ef-text-xs ef-px-2 ef-py-1 ef-rounded-lg ef-shadow-sm", children: [d.jsx(Ms, { size: 12 }), "Locked"] });
        return d.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-overflow-hidden ef-shadow-sm", children: [d.jsxs("div", { className: "ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b ef-border-gray-200 ef-flex ef-items-center ef-justify-between", children: [d.jsx("h3", { className: "ef-text-sm ef-font-semibold ef-text-gray-900", children: u.name }), d.jsxs("span", { className: "ef-px-2 ef-py-1 ef-bg-purple-600 ef-text-white ef-text-xs ef-rounded-full ef-font-medium", children: [u.weightage, "%"] })] }), d.jsxs("div", { className: "ef-divide-y ef-divide-gray-100", children: [s === "self" && d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [d.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Self Appraisal" }), !f && d.jsx(x, {})] }), d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), d.jsx(ma, { rating: u.selfRating, onChange: (p) => f && r(u.id, "selfRating", p), disabled: !f }), d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), d.jsx("textarea", { value: u.selfComments, onChange: (p) => f && r(u.id, "selfComments", p.target.value), disabled: !f, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${f ? "ef-bg-white ef-border-blue-200 focus:ef-ring-1 focus:ef-ring-blue-400 focus:ef-outline-none" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Share your thoughts..." })] }), s === "manager" && d.jsxs(d.Fragment, { children: [d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Employee Self Rating" }), d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4 ef-mb-2", children: [d.jsxs("div", { children: [d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-blue-100 ef-border ef-border-blue-200 ef-px-2 ef-py-1 ef-rounded", children: [d.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-blue-700", children: u.selfRating }), d.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), d.jsxs("div", { className: "ef-flex-1", children: [d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), d.jsx("div", { className: "ef-bg-white ef-border ef-border-blue-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: u.selfComments || d.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), v && d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-purple-50", children: [d.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Manager Review" }), !y && d.jsx(x, {})] }), d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), d.jsx(ma, { rating: u.managerRating, onChange: (p) => y && r(u.id, "managerRating", p), disabled: !y }), d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), d.jsx("textarea", { value: u.managerComments, onChange: (p) => y && r(u.id, "managerComments", p.target.value), disabled: !y, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${y ? "ef-bg-white ef-border-purple-200 focus:ef-ring-1 focus:ef-ring-purple-400 focus:ef-outline-none" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Add your review..." })] })] }), s === "second_manager" && d.jsxs(d.Fragment, { children: [d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Employee Self Rating" }), d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4", children: [d.jsxs("div", { children: [d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-blue-100 ef-border ef-border-blue-200 ef-px-2 ef-py-1 ef-rounded", children: [d.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-blue-700", children: u.selfRating }), d.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), d.jsxs("div", { className: "ef-flex-1", children: [d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), d.jsx("div", { className: "ef-bg-white ef-border ef-border-blue-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: u.selfComments || d.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), v && d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-purple-50", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Manager Review" }), d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4", children: [d.jsxs("div", { children: [d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-purple-100 ef-border ef-border-purple-200 ef-px-2 ef-py-1 ef-rounded", children: [d.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-purple-700", children: u.managerRating }), d.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), d.jsxs("div", { className: "ef-flex-1", children: [d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), d.jsx("div", { className: "ef-bg-white ef-border ef-border-purple-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: u.managerComments || d.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-green-50", children: [d.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Second Manager Review" }), !m && d.jsx(x, {})] }), d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), d.jsx(ma, { rating: u.secondManagerRating, onChange: (p) => m && r(u.id, "secondManagerRating", p), disabled: !m }), d.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), d.jsx("textarea", { value: u.secondManagerComment, onChange: (p) => m && r(u.id, "secondManagerComment", p.target.value), disabled: !m, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${m ? "ef-bg-white ef-border-green-200 focus:ef-ring-1 focus:ef-ring-green-400 focus:ef-outline-none" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Add your review..." })] })] })] })] });
      };
      var ty = ({ competencies: u, appraisalMode: s, selfAppraisalSubmitted: r, updateCompetency: f, employeeCanEdit: y, managerCanEdit: v, showManagerData: m, secondManagerCanEdit: x }) => d.jsx("div", { className: "ef-space-y-6", children: u.map((p) => d.jsx(ey, { comp: p, appraisalMode: s, selfAppraisalSubmitted: r, updateCompetency: f, employeeCanEdit: y, managerCanEdit: v, showManagerData: m, secondManagerCanEdit: x }, p.id)) });
      var ny = ({ question: u, appraisalMode: s, updateQuestion: r, index: f, employeeCanEdit: y, managerCanEdit: v, showManagerData: m, secondManagerCanEdit: x }) => {
        const p = () => d.jsx("div", { className: "ef-flex ef-items-center ef-gap-1 ef-text-gray-400 ef-text-xs", children: d.jsx(Ms, { size: 10 }) });
        return d.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-overflow-hidden ef-shadow-sm", children: [d.jsxs("div", { className: "ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b ef-border-gray-200 ef-flex ef-items-center gap-2", children: [d.jsx("span", { className: "ef-flex-shrink-0 ef-w-6 ef-h-6 ef-bg-gray-800 ef-rounded ef-text-white ef-text-xs ef-font-semibold ef-flex ef-items-center ef-justify-center", children: f + 1 }), d.jsx("p", { className: "ef-mx-2 ef-text-sm ef-font-medium ef-text-gray-900", children: u.question })] }), d.jsxs("div", { className: "ef-divide-y ef-divide-gray-100", children: [s === "self" && d.jsxs("div", { className: "ef-px-3 ef-py-2", children: [d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-1", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Your Answer" }), !y && d.jsx(p, {})] }), d.jsx("textarea", { value: u.selfAnswer, onChange: (h) => y && r(u.id, "selfAnswer", h.target.value), disabled: !y, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${y ? "ef-bg-white ef-border-blue-200 ef-focus:ring-1 ef-focus:ring-blue-400 ef-focus:outline-none" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 3, placeholder: "Enter your answer..." })] }), s === "manager" && d.jsxs(d.Fragment, { children: [d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-1", children: "Employee's Answer" }), d.jsx("div", { className: "ef-bg-white ef-p-2 ef-rounded ef-text-xs ef-min-h-[60px] ef-border ef-border-blue-100", children: u.selfAnswer || d.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No answer provided" }) })] }), m && d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-purple-50", children: [d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-1", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Manager's Comments" }), !v && d.jsx(p, {})] }), d.jsx("textarea", { value: u.managerComments, onChange: (h) => v && r(u.id, "managerComments", h.target.value), disabled: !v, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${v ? "ef-bg-white ef-border-purple-200 ef-focus:ring-1 focus:ring-purple-400 ef-focus:outline-none" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 3, placeholder: "Enter your feedback..." })] })] }), s === "second_manager" && d.jsxs(d.Fragment, { children: [d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-1", children: "Employee's Answer" }), d.jsx("div", { className: "ef-bg-white ef-p-2 ef-rounded ef-text-xs ef-min-h-[60px] ef-border ef-border-blue-100", children: u.selfAnswer || d.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No answer provided" }) })] }), m && d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-purple-50", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-1", children: "Manager's Comments" }), d.jsx("div", { className: "ef-bg-white ef-p-2 ef-rounded ef-text-xs ef-min-h-[60px] ef-border ef-border-purple-100", children: u.managerComments || d.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments provided" }) })] }), d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-green-50", children: [d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-1", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Second Manager's Comments" }), !x && d.jsx(p, {})] }), d.jsx("textarea", { value: u.secondManagerComment, onChange: (h) => x && r(u.id, "secondManagerComment", h.target.value), disabled: !x, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${x ? "ef-bg-white ef-border-green-200 ef-focus:ring-1 ef-focus:ring-green-400 ef-focus:outline-none" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 3, placeholder: "Enter your feedback..." })] })] })] })] });
      };
      var ay = ({ questions: u, appraisalMode: s, selfAppraisalSubmitted: r, updateQuestion: f, employeeCanEdit: y, managerCanEdit: v, showManagerData: m, secondManagerCanEdit: x }) => d.jsx("div", { className: "ef-space-y-6", children: u.map((p, h) => d.jsx(ny, { question: p, index: h, appraisalMode: s, selfAppraisalSubmitted: r, updateQuestion: f, employeeCanEdit: y, managerCanEdit: v, showManagerData: m, secondManagerCanEdit: x }, p.id)) });
      function ly(u, s, r, f = false) {
        const y = u.kra.reduce((w, C) => w + Number(C.weightage || 0), 0) || 1, v = u.competencies.reduce((w, C) => w + Number(C.weightage || 0), 0) || 1, m = (w, C, Z) => f ? (w + C + Z) / 3 : (w + C) / 2, x = u.kra.map((w) => {
          var ie;
          const C = (w.weightage || 0) / y;
          let Z = 0;
          if (((ie = w.goals) == null ? void 0 : ie.length) > 0) {
            const he = w.goals.reduce((_e, se) => _e + Number(se.weightage || 0), 0) || 1;
            Z = w.goals.reduce((_e, se) => {
              const ve = Number(se.selfRating || 0), Ne = (se.weightage || 0) / he;
              return _e + Ne * ve;
            }, 0);
          } else
            Z = Number(w.selfRating || 0);
          return C * Z;
        }).reduce((w, C) => w + C, 0), p = u.competencies.reduce((w, C) => {
          const Z = (C.weightage || 0) / v;
          return w + Z * Number(C.selfRating || 0);
        }, 0), h = x * (s / 100) + p * (r / 100), j = u.kra.map((w) => {
          var ie;
          const C = (w.weightage || 0) / y;
          let Z = 0;
          if (((ie = w.goals) == null ? void 0 : ie.length) > 0) {
            const he = w.goals.reduce((_e, se) => _e + Number(se.weightage || 0), 0) || 1;
            Z = w.goals.reduce((_e, se) => {
              const ve = m(Number(se.selfRating || 0), Number(se.managerRating || 0), Number(se.secondManagerRating || 0)), Ne = (se.weightage || 0) / he;
              return _e + Ne * ve;
            }, 0);
          } else
            Z = m(Number(w.selfRating || 0), Number(w.managerRating || 0), Number(w.secondManagerRating || 0));
          return C * Z;
        }).reduce((w, C) => w + C, 0), E = u.competencies.reduce((w, C) => {
          const Z = (C.weightage || 0) / v, ie = m(Number(C.selfRating || 0), Number(C.managerRating || 0), Number(C.secondManagerRating || 0));
          return w + Z * ie;
        }, 0), Y = j * (s / 100) + E * (r / 100);
        return { kraBlockScore: Number(j.toFixed(2)), competencyScore: Number(E.toFixed(2)), finalScore: Number(Y.toFixed(2)), employeeSelfScore: Number(h.toFixed(2)) };
      }
      var iy = ({ question: u, appraisalMode: s, updateQuestion: r, index: f, employeeCanEdit: y, managerCanEdit: v, secondManagerCanEdit: m }) => {
        const x = () => d.jsx("div", { className: "ef-flex ef-items-center ef-gap-1 ef-text-gray-400 ef-text-xs", children: d.jsx(Ms, { size: 10 }) });
        return d.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-overflow-hidden ef-shadow-sm", children: [d.jsxs("div", { className: "ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b ef-border-gray-200 ef-flex ef-items-center gap-2", children: [d.jsx("span", { className: "ef-flex-shrink-0 ef-w-6 ef-h-6 ef-bg-gray-800 ef-rounded ef-text-white ef-text-xs ef-font-semibold ef-flex ef-items-center ef-justify-center", children: f + 1 }), d.jsx("p", { className: "ef-mx-2 ef-text-sm ef-font-medium ef-text-gray-900", children: u.question })] }), d.jsxs("div", { className: "ef-divide-y ef-divide-gray-100", children: [s === "self" && d.jsxs("div", { className: "ef-px-3 ef-py-2", children: [d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-1", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Your Answer" }), !y && d.jsx(x, {})] }), d.jsx("textarea", { value: u.selfAnswer, onChange: (p) => y && r(u.id, "selfAnswer", p.target.value), disabled: !y, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${y ? "ef-bg-white ef-border-blue-200 ef-focus:ring-1 ef-focus:ring-blue-400 ef-focus:outline-none" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 3, placeholder: "Enter your answer..." })] }), s === "manager" && d.jsxs(d.Fragment, { children: [d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-1", children: "Employee's Answer" }), d.jsx("div", { className: "ef-bg-white ef-p-2 ef-rounded ef-text-xs ef-min-h-[60px] ef-border ef-border-blue-100", children: u.selfAnswer || d.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No answer provided" }) })] }), d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-purple-50", children: [d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-1", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Manager's Comments" }), !v && d.jsx(x, {})] }), d.jsx("textarea", { value: u.managerComments, onChange: (p) => v && r(u.id, "managerComments", p.target.value), disabled: !v, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${v ? "ef-bg-white ef-border-purple-200 ef-focus:ring-1 focus:ring-purple-400 ef-focus:outline-none" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 3, placeholder: "Enter your feedback..." })] })] }), s === "second_manager" && d.jsxs(d.Fragment, { children: [d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-1", children: "Employee's Answer" }), d.jsx("div", { className: "ef-bg-white ef-p-2 ef-rounded ef-text-xs ef-min-h-[60px] ef-border ef-border-blue-100", children: u.selfAnswer || d.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No answer provided" }) })] }), d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-purple-50", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-1", children: "Manager's Comments" }), d.jsx("div", { className: "ef-bg-white ef-p-2 ef-rounded ef-text-xs ef-min-h-[60px] ef-border ef-border-purple-100", children: u.managerComments || d.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments provided" }) })] }), d.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-green-50", children: [d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-1", children: [d.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Second Manager's Comments" }), !m && d.jsx(x, {})] }), d.jsx("textarea", { value: u.secondManagerComment, onChange: (p) => m && r(u.id, "secondManagerComment", p.target.value), disabled: !m, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${m ? "ef-bg-white ef-border-green-200 ef-focus:ring-1 ef-focus:ring-green-400 ef-focus:outline-none" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 3, placeholder: "Enter your feedback..." })] })] })] })] });
      };
      var sy = ({ questions: u, appraisalMode: s, selfAppraisalSubmitted: r, updateQuestion: f, employeeCanEdit: y, managerCanEdit: v, secondManagerCanEdit: m }) => d.jsx("div", { className: "ef-space-y-6", children: u.map((x, p) => d.jsx(iy, { question: x, index: p, appraisalMode: s, selfAppraisalSubmitted: r, updateQuestion: f, employeeCanEdit: y, managerCanEdit: v, secondManagerCanEdit: m }, x.id)) });
      var Tp = () => {
        const [u, s] = Pe.useState("kra"), [r, f] = Pe.useState("self"), [y, v] = Pe.useState({}), [m, x] = Pe.useState({ employee: { name: "John Doe", designation: "Senior Developer", department: "Engineering", period: "Jan 2025 - Dec 2025" }, selfAppraisalSubmitted: true, kra: [{ id: 1, title: "Project Delivery", description: "Deliver assigned projects on time", weightage: 30, goals: [{ id: 1, description: "Complete 3 major projects", progress: 2, selfRating: 8, selfComments: "Completed 3 projects successfully", managerRating: 9, managerComments: "Excellent delivery", secondManagerRating: 3.4, secondManagerComment: "Excellent Work" }, { id: 2, description: "Maintain 95% on-time delivery", progress: 2, selfRating: 7, selfComments: "Achieved 90%", managerRating: 7, managerComments: "Slight delay", secondManagerRating: 3.4, secondManagerComment: "Excellent Work" }] }], competencies: [{ id: 1, name: "Technical Skills", description: "Proficiency in technologies", weightage: 25, selfRating: 8, selfComments: "Strong in React/Node", managerRating: 8, managerComments: "Very competent", secondManagerRating: 3.4, secondManagerComment: "Excellent Work" }], questions: [{ id: 1, question: "What are your key achievements?", selfAnswer: "Led migration project", managerComments: "Excellent ownership", secondManagerComment: "Excellent Work" }], AppraisalQuestions: [] });
        function p(J) {
          var B, k;
          J.workflow_state == "Self Appraisal" ? f("self") : J.workflow_state == "Manager Appraisal" ? f("manager") : f("second_manager");
          const ee = J.kra || [], de = J.kra_vs_goal || [], _ = J.goal_vs_task || [];
          return { employee: { name: J.employee_name, designation: J.designation, department: J.department, period: `${J.from_date} - ${J.to_date}` }, selfAppraisalSubmitted: J.self_appraisal_submitted || true, kra: ee.map((K, re) => {
            const xe = de.filter((me) => me.kra === K.kra).map((me, ct) => {
              const Ze = _.filter((St) => St.goal === me.goal).map((St, pa) => ({ id: pa + 1, task_name: St.task, completed_percentage: St.completed_percentage, selfComments: St.employee_description, managerScore: St.manager_score, managerComments: St.manager_description, secondManagerScore: St.second_manager_score, secondManagerComment: St.second_manager_description }));
              return { id: ct + 1, description: me.goal_name, progress: me.progress, weightage: me.weightage, selfRating: me.employee_rating_number, selfComments: me.employee_description, managerRating: me.manager_rating_number, managerComments: me.management_description, secondManagerRating: me.second_manager_rating, secondManagerComment: me.second_manager_description, tasks: Ze };
            });
            return { id: re + 1, title: K.kra, description: K.description || "", weightage: K.weightage, selfRating: K.employee_rating_number, selfComments: K.employee_description, managerRating: K.manager_rating_number, managerComments: K.management_description, secondManagerRating: K.second_manager_rating, secondManagerComment: K.second_manager_description, goals: xe };
          }) || [], competencies: ((B = J.competency) == null ? void 0 : B.map((K, re) => ({ id: re + 1, name: K.competency, description: K.description || "", weightage: K.weightage, selfRating: K.employee_rating_number, selfComments: K.employee_description, managerRating: K.manager_rating, managerComments: K.manager_description, secondManagerRating: K.second_manager_rating, secondManagerComment: K.second_manager_description }))) || [], questions: ((k = J.answer) == null ? void 0 : k.map((K, re) => ({ id: re + 1, question: K.question, selfAnswer: K.employee_ans_in_discriptive, managerComments: K.manager_comment, secondManagerComment: K.second_manager_description }))) || [], AppraisalQuestions: J.appraisal_feedback_question.map((K, re) => ({ id: re + 1, question: K.question, selfAnswer: K.employee_ans, managerComments: K.manager_ans, secondManagerComment: K.second_manager_ans })) || [] };
        }
        const h = () => {
          if (!X())
            return;
          const J = window.cur_frm;
          if (!(J != null && J.doc))
            return;
          const ee = J.doc, de = ly(m, ee.kra_percentage, ee.competency_percentage, !!ee.reports_to_second_user);
          ee.final_score = de.finalScore, ee.employee_score = de.employeeSelfScore, ee.kra.forEach((_, B) => {
            const k = m.kra.find((K) => K.id === B + 1);
            k && (Ue && (_.employee_rating_number = k.selfRating, _.employee_description = k.selfComments), Ge && (_.manager_rating_number = k.managerRating, _.management_description = k.managerComments), ze && (_.second_manager_rating = k.secondManagerRating, _.second_manager_description = k.secondManagerComment), _.weightage = k.weightage);
          }), ee.kra_vs_goal.forEach((_) => {
            const B = m.kra.find((K) => K.title === _.kra);
            if (!B)
              return;
            const k = B.goals.find((K) => K.description === _.goal_name);
            k && (Ue && (_.employee_rating_number = k.selfRating, _.employee_description = k.selfComments), Ge && (_.manager_rating_number = k.managerRating, _.management_description = k.managerComments), ze && (_.second_manager_rating = k.secondManagerRating, _.second_manager_description = k.secondManagerComment), _.progress = k.progress, _.weightage = k.weightage);
          }), ee.competency.forEach((_, B) => {
            const k = m.competencies.find((K) => K.id === B + 1);
            k && (Ue && (_.employee_rating_number = k.selfRating, _.employee_description = k.selfComments), Ge && (_.manager_rating = k.managerRating, _.manager_description = k.managerComments), ze && (_.second_manager_rating = k.secondManagerRating, _.second_manager_description = k.secondManagerComment), _.weightage = k.weightage);
          }), ee.answer.forEach((_, B) => {
            const k = m.questions.find((K) => K.id === B + 1);
            k && (Ue && (_.employee_ans_in_discriptive = k.selfAnswer), Ge && (_.manager_comment = k.managerComments), ze && (_.second_manager_description = k.secondManagerComment));
          }), ee.__unsaved = 1, J.dirty(), J.save().catch((_) => console.error(_));
        }, j = (J) => {
          v((ee) => Yt(Ve({}, ee), { [J]: !ee[J] }));
        }, E = (J, ee, de, _) => {
          x((B) => Yt(Ve({}, B), { kra: B.kra.map((k) => k.id === J ? Yt(Ve({}, k), { goals: k.goals.map((K) => K.id === ee ? Yt(Ve({}, K), { [de]: _ }) : K) }) : k) }));
        }, Y = (J, ee, de) => {
          x((_) => Yt(Ve({}, _), { kra: _.kra.map((B) => B.id === J ? Yt(Ve({}, B), { [ee]: de }) : B) }));
        }, w = (J, ee, de) => {
          x((_) => Yt(Ve({}, _), { competencies: _.competencies.map((B) => B.id === J ? Yt(Ve({}, B), { [ee]: de }) : B) }));
        }, C = (J, ee, de) => {
          x((_) => Yt(Ve({}, _), { questions: _.questions.map((B) => B.id === J ? Yt(Ve({}, B), { [ee]: de }) : B) }));
        }, Z = window.cur_frm;
        if (!(Z != null && Z.doc))
          return "Loading...";
        Pe.useEffect(() => {
          x(p(Z.doc));
        }, [Z == null ? void 0 : Z.doc]);
        const ie = frappe.session.user, he = Z.doc.employee_user_id, _e = Z.doc.reports_to_user_id, se = Z.doc.reports_to_second_user, ve = Z.doc.workflow_state, Ne = ie === he, De = ie === _e, ce = ie === se, pt = (frappe.user_roles || []).includes("HR Manager") || ie === "Administrator", Ue = Ne && ve === "Self Appraisal" && !pt, Ge = De && ve === "Manager Appraisal", ze = ce && ve === "Second Manager Review", xt = De || ce || pt, X = () => {
          var de;
          const J = (de = window == null ? void 0 : window.cur_frm) == null ? void 0 : de.doc, ee = [];
          return Ue && (J.kra_rating_mandatory && m.kra.forEach((_) => {
            !_.goals.length && !_.selfRating && ee.push(`Self Rating missing in KRA: ${_.title}`), _.goals.forEach((B) => {
              B.selfRating || ee.push(`Self Rating missing in Goal: ${B.description}`);
            });
          }), J.kra_comment_mandatory && m.kra.forEach((_) => {
            !_.goals.length && !_.selfComments && ee.push(`Self Comment missing in KRA: ${_.title}`), _.goals.forEach((B) => {
              B.selfComments || ee.push(`Self Comment missing in Goal: ${B.description}`);
            });
          }), J.competency_rating_mandatory && m.competencies.forEach((_) => {
            _.selfRating || ee.push(`Self Rating missing in Competency: ${_.name}`);
          }), J.competency_comment_mandatory && m.competencies.forEach((_) => {
            _.selfComments || ee.push(`Self Comment missing in Competency: ${_.name}`);
          }), J.question_answer_mandatory && m.questions.forEach((_) => {
            _.selfAnswer || ee.push(`Answer missing for Question: ${_.question}`);
          })), Ge && (J.manager_kra_rating_mandatory && m.kra.forEach((_) => {
            !_.goals.length && !_.managerRating && ee.push(`Manager Rating missing in KRA: ${_.title}`), _.goals.forEach((B) => {
              B.managerRating || ee.push(`Manager Rating missing in Goal: ${B.description}`);
            });
          }), J.manager_kra_comment_mandatory && m.kra.forEach((_) => {
            !_.goals.length && !_.managerComments && ee.push(`Manager Comment missing in KRA: ${_.title}`), _.goals.forEach((B) => {
              B.managerComments || ee.push(`Manager Comment missing in Goal: ${B.description}`);
            });
          }), J.manager_competency_rating_mandatory && m.competencies.forEach((_) => {
            _.managerRating || ee.push(`Manager Rating missing in Competency: ${_.name}`);
          }), J.manager_competency_comment_mandatory && m.competencies.forEach((_) => {
            _.managerComments || ee.push(`Manager Comment missing in Competency: ${_.name}`);
          }), J.manager_question_report_mandatory && m.questions.forEach((_) => {
            _.managerComments || ee.push(`Manager Comment missing for Question: ${_.question}`);
          })), ee.length > 0 ? (frappe.msgprint({ title: "Mandatory Fields Missing", indicator: "red", message: `<ul>${ee.map((_) => `<li>${_}</li>`).join("")}</ul>` }), false) : true;
        }, I = Ue || Ge || ze;
        return d.jsx("div", { className: "ef-min-h-screen ef-bg-gray-50 ef-p-6", children: d.jsx("div", { className: "ef-max-w-7xl ef-mx-auto", children: d.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-shadow-sm", children: [d.jsx("div", { className: "ef-border-b", children: d.jsxs("div", { className: "ef-flex", children: [d.jsx("button", { onClick: () => s("kra"), className: `ef-px-6 ef-py-4 ef-font-semibold ${u === "kra" ? "ef-border-b-2 ef-border-blue-600 ef-text-blue-600" : "ef-text-gray-600"}`, children: "KRA vs Goals" }), d.jsx("button", { onClick: () => s("competency"), className: `ef-px-6 ef-py-4 ef-font-semibold ${u === "competency" ? "ef-border-b-2 ef-border-blue-600 ef-text-blue-600" : "ef-text-gray-600"}`, children: "Competencies" }), d.jsx("button", { onClick: () => s("questions"), className: `ef-px-6 ef-py-4 ef-font-semibold ${u === "questions" ? "ef-border-b-2 ef-border-blue-600 ef-text-blue-600" : "ef-text-gray-600"}`, children: "Questions" }), d.jsx("button", { onClick: () => s("appraisal_questions"), className: `ef-px-6 ef-py-4 ef-font-semibold ${u === "appraisal_questions" ? "ef-border-b-2 ef-border-blue-600 ef-text-blue-600" : "ef-text-gray-600"}`, children: "Appraisal Questions" })] }) }), d.jsxs("div", { className: "ef-p-6", children: [u === "kra" && d.jsx(I0, { kraList: m.kra, expandedKRA: y, toggleKRA: j, appraisalMode: r, updateGoalRating: E, updateKRARating: Y, secondManagerCanEdit: ze, employeeCanEdit: Ue, managerCanEdit: Ge, showManagerData: xt }), u === "competency" && d.jsx(ty, { competencies: m.competencies, appraisalMode: r, selfAppraisalSubmitted: m.selfAppraisalSubmitted, updateCompetency: w, secondManagerCanEdit: ze, employeeCanEdit: Ue, managerCanEdit: Ge, showManagerData: xt }), u === "questions" && d.jsx(ay, { questions: m.questions, appraisalMode: r, selfAppraisalSubmitted: m.selfAppraisalSubmitted, updateQuestion: C, secondManagerCanEdit: ze, employeeCanEdit: Ue, managerCanEdit: Ge, showManagerData: xt }), u === "appraisal_questions" && d.jsx(sy, { questions: m.AppraisalQuestions, appraisalMode: r, selfAppraisalSubmitted: m.selfAppraisalSubmitted, updateQuestion: C, secondManagerCanEdit: ze, employeeCanEdit: Ue, managerCanEdit: Ge })] }), I && d.jsx("div", { className: "ef-flex ef-justify-end ef-px-6 ef-pb-6", children: d.jsx("button", { onClick: h, className: "ef-bg-blue-600 ef-text-white ef-px-6 ef-py-2 ef-rounded-lg ef-font-semibold hover:ef-bg-blue-700 ef-transition", children: "Save Appraisal" }) })] }) }) });
      };
      Tp.component = "appraisal-rating";
      var wp = () => {
        var y;
        const u = (y = window == null ? void 0 : window.cur_frm) == null ? void 0 : y.doc, s = { code: u.employee, name: u.employee_name, dept: u.department, designation: u.designation, doj: u.date_of_joining, selfRating: u.employee_score, expectation: `${u.as_employee_what_he_deserve}%`, manager1: u.reports_to_name, manager1Rating: u.manager_rating, manager1Comment: u.manager_final_comment, manager1Promotion: "Yes", manager1Increment: "15%", manager2: u.reports_to_second_name, manager2Rating: u.second_manager_rating, manager2Comment: u.second_manager_comment, manager2Increment: "12%", manager2Promotion: "Yes" }, r = (v) => v >= 4.5 ? "bg-green-500" : v >= 3.5 ? "bg-blue-500" : "bg-orange-500", f = (v) => v >= 4.5 ? "bg-green-50 border-green-200" : v >= 3.5 ? "bg-blue-50 border-blue-200" : "bg-orange-50 border-orange-200";
        return d.jsx("div", { className: "ef-min-h-screen ef-bg-gradient-to-br ef-from-blue-50 ef-via-white ef-to-purple-50 ef-p-6 ef-transition-all ef-duration-300 ef-ease-in-out", children: d.jsx("div", { className: "ef-max-w-5xl ef-mx-auto ef-transform ef-transition-all ef-duration-500 ef-ease-in-out", children: d.jsxs("div", { className: "ef-bg-white ef-rounded-2xl ef-shadow-lg ef-overflow-hidden ef-transition-all ef-duration-500 ef-ease-in-out ef-hover:shadow-2xl ef-transform ef-hover:scale-[1.01]", children: [d.jsx("div", { className: "ef-bg-gradient-to-r ef-from-blue-600 ef-to-purple-600 ef-p-8 ef-text-white ef-transition-all ef-duration-500 ef-ease-in-out", children: d.jsxs("div", { className: "ef-flex ef-items-start ef-justify-between", children: [d.jsxs("div", { className: "ef-transition-all ef-duration-300 ef-ease-in-out", children: [d.jsxs("div", { className: "ef-text-sm ef-opacity-90 ef-mb-1 ef-transition-opacity ef-duration-300 ef-ease-in-out", children: ["Employee Code: ", s.code] }), d.jsx("h2", { className: "ef-text-3xl ef-font-bold ef-mb-2 ef-transition-all ef-duration-300 ef-ease-in-out ef-hover:scale-105 ef-origin-left", children: s.name }), d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4 ef-text-sm", children: [d.jsx("span", { className: "ef-px-3 ef-py-1 ef-bg-white ef-bg-opacity-20 ef-rounded-full ef-transition-all ef-duration-300 ef-ease-in-out ef-hover:bg-opacity-30 ef-hover:scale-105", children: s.designation }), d.jsx("span", { className: "ef-px-3 ef-py-1 ef-bg-white ef-bg-opacity-20 ef-rounded-full ef-transition-all ef-duration-300 ef-ease-in-out ef-hover:bg-opacity-30 ef-hover:scale-105", children: s.dept })] })] }), d.jsxs("div", { className: "ef-text-right ef-transition-all ef-duration-300 ef-ease-in-out", children: [d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-text-sm ef-opacity-90 ef-mb-1 ef-transition-opacity ef-duration-300 ef-ease-in-out", children: [d.jsx(Q0, { className: "ef-w-4 ef-h-4 ef-transition-transform ef-duration-300 ef-ease-in-out ef-hover:rotate-12" }), "Date of Joining"] }), d.jsx("div", { className: "ef-text-xl ef-font-semibold ef-transition-all ef-duration-300 ef-ease-in-out ef-hover:scale-110", children: s.doj })] })] }) }), d.jsx("div", { className: "ef-p-8 ef-border-b ef-border-gray-200 ef-bg-gray-50 ef-transition-all ef-duration-300 ef-ease-in-out ef-hover:bg-gray-100", children: d.jsxs("div", { className: "ef-flex ef-items-start ef-justify-between ef-gap-6", children: [d.jsxs("div", { className: "ef-flex-1 ef-transition-all ef-duration-300 ef-ease-in-out", children: [d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-3 ef-transition-all ef-duration-300 ef-ease-in-out", children: [d.jsx(Y0, { className: "ef-w-5 ef-h-5 ef-text-purple-600 ef-transition-all ef-duration-300 ef-ease-in-out ef-hover:scale-125 ef-hover:rotate-12" }), d.jsx("h3", { className: "ef-text-lg ef-font-semibold ef-text-gray-900", children: "Self Appraisal" })] }), d.jsxs("div", { className: "ef-mb-4", children: [d.jsx("div", { className: "ef-text-sm ef-text-gray-600 ef-mb-2", children: "Employee Expectation:" }), d.jsx("div", { className: "ef-text-base ef-text-gray-900 ef-font-medium ef-hover:text-purple-700", children: s.expectation })] })] }), d.jsxs("div", { className: "ef-text-center", children: [d.jsx("div", { className: "ef-text-sm ef-text-gray-600 ef-mb-2", children: "Self Rating" }), d.jsx("div", { className: `ef-w-20 ef-h-20 ef-rounded-full ef-flex ef-items-center ef-justify-center ${r(s.selfRating)} ef-text-white ef-transition-all ef-duration-300 ef-ease-in-out ef-hover:scale-110 ef-hover:shadow-lg ef-transform ef-hover:rotate-6`, children: d.jsx("span", { className: "ef-text-3xl ef-font-bold ef-text-black", children: s.selfRating }) })] })] }) }), d.jsxs("div", { className: "ef-p-8 ef-space-y-6 ef-transition-all ef-duration-300 ef-ease-in-out", children: [d.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-4", children: [d.jsx(F0, { className: "ef-w-5 ef-h-5 ef-text-blue-600 ef-hover:scale-125 ef-hover:-translate-y-[2px] ef-transition-all" }), d.jsx("h3", { className: "ef-text-xl ef-font-semibold ef-text-gray-900", children: "Manager Evaluations" })] }), d.jsxs("div", { className: `ef-border-2 ef-rounded-xl ef-p-6 ${f(s.manager1Rating)} ef-transition-all ef-duration-500 ef-ease-in-out ef-hover:shadow-lg ef-transform ef-hover:scale-[1.02] ef-hover:-translate-y-1`, children: [d.jsxs("div", { className: "ef-flex ef-items-start ef-justify-between ef-mb-4", children: [d.jsxs("div", { children: [d.jsx("div", { className: "ef-text-xs ef-text-gray-500 ef-uppercase ef-font-semibold ef-mb-1", children: "Reporting Manager - 1" }), d.jsx("div", { className: "ef-text-xl ef-font-bold ef-text-gray-900 ef-hover:text-blue-700", children: s.manager1 })] }), d.jsxs("div", { className: "ef-text-center", children: [d.jsx("div", { className: "ef-text-xs ef-text-gray-600 ef-mb-1", children: "Rating" }), d.jsx("div", { className: `ef-w-16 ef-h-16 ef-rounded-full ef-flex ef-items-center ef-justify-center ${r(s.manager1Rating)} ef-text-white ef-transition-all ef-hover:scale-110 ef-hover:shadow-lg ef-transform ef-hover:rotate-6`, children: d.jsx("span", { className: "ef-text-2xl ef-font-bold", children: s.manager1Rating }) })] })] }), d.jsxs("div", { className: "ef-space-y-4", children: [d.jsxs("div", { children: [d.jsx("div", { className: "ef-text-sm ef-font-semibold ef-text-gray-700 ef-mb-2", children: "Overall Comment:" }), d.jsx("div", { className: "ef-text-gray-900 ef-leading-relaxed", children: s.manager1Comment })] }), d.jsxs("div", { className: "ef-grid ef-grid-cols-2 ef-gap-4 ef-pt-4 ef-border-t ef-border-gray-200", children: [d.jsxs("div", { children: [d.jsx("div", { className: "ef-text-sm ef-text-gray-600 ef-mb-1", children: "Promotion Recommended" }), d.jsx("div", { className: "ef-inline-flex ef-items-center ef-px-4 ef-py-2 ef-rounded-lg ef-font-semibold ef-transition-all ef-hover:scale-105 ef-bg-green-100 ef-text-green-800 ef-border-2 ef-border-green-300 ef-hover:bg-green-200", children: s.manager1Promotion })] }), d.jsxs("div", { children: [d.jsx("div", { className: "ef-text-sm ef-text-gray-600 ef-mb-1", children: "Special Increment" }), d.jsx("div", { className: "ef-text-2xl ef-font-bold ef-text-gray-900 ef-hover:scale-110 ef-hover:text-green-600", children: s.manager1Increment })] })] })] })] }), d.jsxs("div", { className: `ef-border-2 ef-rounded-xl ef-p-6 ${f(s.manager2Rating)} ef-transition-all ef-duration-500 ef-ease-in-out ef-hover:shadow-lg ef-transform ef-hover:scale-[1.02] ef-hover:-translate-y-1`, children: [d.jsxs("div", { className: "ef-flex ef-items-start ef-justify-between ef-mb-4", children: [d.jsxs("div", { children: [d.jsx("div", { className: "ef-text-xs ef-text-gray-500 ef-uppercase ef-font-semibold ef-mb-1", children: "Reporting Manager - 2" }), d.jsx("div", { className: "ef-text-xl ef-font-bold ef-text-gray-900 ef-hover:text-blue-700", children: s.manager2 })] }), d.jsxs("div", { className: "ef-text-center", children: [d.jsx("div", { className: "ef-text-xs ef-text-gray-600 ef-mb-1", children: "Rating" }), d.jsx("div", { className: `ef-w-16 ef-h-16 ef-rounded-full ef-flex ef-items-center ef-justify-center ${r(s.manager2Rating)} ef-text-white ef-transition-all ef-hover:scale-110 ef-hover:shadow-lg ef-transform ef-hover:rotate-6`, children: d.jsx("span", { className: "ef-text-2xl ef-font-bold", children: s.manager2Rating }) })] })] }), d.jsxs("div", { className: "ef-space-y-4", children: [d.jsxs("div", { children: [d.jsx("div", { className: "ef-text-sm ef-font-semibold ef-text-gray-700 ef-mb-2", children: "Overall Comment:" }), d.jsx("div", { className: "ef-text-gray-900 ef-leading-relaxed", children: s.manager2Comment })] }), d.jsxs("div", { className: "ef-grid ef-grid-cols-2 ef-gap-4 ef-pt-4 ef-border-t ef-border-gray-200", children: [d.jsxs("div", { children: [d.jsx("div", { className: "ef-text-sm ef-text-gray-600 ef-mb-1", children: "Promotion Recommended" }), d.jsx("div", { className: "ef-inline-flex ef-items-center ef-px-4 ef-py-2 ef-rounded-lg ef-font-semibold ef-hover:scale-105 ef-bg-green-100 ef-text-green-800 ef-border-2 ef-border-green-300 ef-hover:bg-green-200", children: s.manager2Promotion })] }), d.jsxs("div", { children: [d.jsx("div", { className: "ef-text-sm ef-text-gray-600 ef-mb-1", children: "Special Increment" }), d.jsx("div", { className: "ef-text-2xl ef-font-bold ef-text-gray-900 ef-hover:scale-110 ef-hover:text-green-600", children: s.manager2Increment })] })] })] })] })] })] }) }) });
      };
      wp.component = "appraisal-report";
      var km = Object.freeze(Object.defineProperty({ __proto__: null, AppraisalRating: Tp, EmployeeAppraisalReport: wp }, Symbol.toStringTag, { value: "Module" }));
      var uy = Object.defineProperty;
      var ry = (u, s, r) => s in u ? uy(u, s, { enumerable: true, configurable: true, writable: true, value: r }) : u[s] = r;
      var cr = (u, s, r) => ry(u, typeof s != "symbol" ? s + "" : s, r);
      var fy = { stringify: (u) => u ? "true" : "false", parse: (u) => /^[ty1-9]/i.test(u) };
      var oy = { stringify: (u) => u.name, parse: (u, s, r) => {
        const f = (() => {
          if (typeof window < "u" && u in window)
            return window[u];
          if (typeof global < "u" && u in global)
            return global[u];
        })();
        return typeof f == "function" ? f.bind(r) : void 0;
      } };
      var cy = { stringify: (u) => JSON.stringify(u), parse: (u) => JSON.parse(u) };
      function dy(u) {
        return u.replace(/([a-z0-9])([A-Z])/g, (s, r, f) => `${r}-${f.toLowerCase()}`);
      }
      function Ep(u) {
        return u.replace(/[-:]([a-z])/g, (s, r) => `${r.toUpperCase()}`);
      }
      var hy = { stringify: (u) => u.name, parse: (u, s, r) => {
        const f = (() => {
          const y = Ep(s);
          if (typeof r < "u" && y in r.container)
            return r.container[y];
        })();
        return typeof f == "function" ? f.bind(r) : void 0;
      } };
      var my = { stringify: (u) => `${u}`, parse: (u) => parseFloat(u) };
      var py = { stringify: (u) => u, parse: (u) => u };
      var Bo = { string: py, number: my, boolean: fy, function: oy, method: hy, json: cy };
      var Es = Symbol.for("r2wc.render");
      var dr = Symbol.for("r2wc.connected");
      var Nl = Symbol.for("r2wc.context");
      var $t = Symbol.for("r2wc.props");
      function gy(u, s, r) {
        var f, y, v;
        s.props || (s.props = u.propTypes ? Object.keys(u.propTypes) : []), s.events || (s.events = []);
        const m = Array.isArray(s.props) ? s.props.slice() : Object.keys(s.props), x = Array.isArray(s.events) ? s.events.slice() : Object.keys(s.events), p = {}, h = {}, j = {}, E = {};
        for (const w of m) {
          p[w] = Array.isArray(s.props) ? "string" : s.props[w];
          const C = dy(w);
          j[w] = C, E[C] = w;
        }
        for (const w of x)
          h[w] = Array.isArray(s.events) ? {} : s.events[w];
        class Y extends HTMLElement {
          constructor() {
            super(), cr(this, v, true), cr(this, y), cr(this, f, {}), cr(this, "container"), s.shadow ? this.container = this.attachShadow({ mode: s.shadow }) : this.container = this, this[$t].container = this.container;
            for (const C of m) {
              const Z = j[C], ie = this.getAttribute(Z), he = p[C], _e = he ? Bo[he] : null;
              if (he === "method") {
                const se = Ep(Z);
                Object.defineProperty(this[$t].container, se, { enumerable: true, configurable: true, get() {
                  return this[$t][se];
                }, set(ve) {
                  this[$t][se] = ve, this[Es]();
                } }), this[$t][C] = _e.parse(ie, Z, this);
              }
              _e != null && _e.parse && ie && (this[$t][C] = _e.parse(ie, Z, this));
            }
            for (const C of x)
              this[$t][C] = (Z) => {
                const ie = C.replace(/^on/, "").toLowerCase();
                this.dispatchEvent(new CustomEvent(ie, Ve({ detail: Z }, h[C])));
              };
          }
          static get observedAttributes() {
            return Object.keys(E);
          }
          connectedCallback() {
            this[dr] = true, this[Es]();
          }
          disconnectedCallback() {
            this[dr] = false, this[Nl] && r.unmount(this[Nl]), delete this[Nl];
          }
          attributeChangedCallback(C, Z, ie) {
            const he = E[C], _e = p[he], se = _e ? Bo[_e] : null;
            he in p && se != null && se.parse && ie && (this[$t][he] = se.parse(ie, C, this), this[Es]());
          }
          [(v = dr, y = Nl, f = $t, Es)]() {
            this[dr] && (this[Nl] ? r.update(this[Nl], this[$t]) : this[Nl] = r.mount(this.container, u, this[$t]));
          }
        }
        for (const w of m) {
          const C = j[w], Z = p[w];
          Object.defineProperty(Y.prototype, w, { enumerable: true, configurable: true, get() {
            return this[$t][w];
          }, set(ie) {
            this[$t][w] = ie;
            const he = Z ? Bo[Z] : null;
            if (he != null && he.stringify) {
              const _e = he.stringify(ie, C, this);
              this.getAttribute(C) !== _e && this.setAttribute(C, _e);
            } else
              this[Es]();
          } });
        }
        return Y;
      }
      function yy(u, s, r, f = {}) {
        function y(x, p, h) {
          const j = s.createElement(p, h);
          if ("createRoot" in r) {
            const E = r.createRoot(x);
            return E.render(j), { container: x, root: E, ReactComponent: p };
          }
          if ("render" in r)
            return r.render(j, x), { container: x, ReactComponent: p };
          throw new Error("Invalid ReactDOM instance provided.");
        }
        function v({ container: x, root: p, ReactComponent: h }, j) {
          const E = s.createElement(h, j);
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
        return gy(u, f, { mount: y, unmount: m, update: v });
      }
      var qo = { exports: {} };
      var As = {};
      var Ho = { exports: {} };
      var Lo = {};
      var Vm;
      function by() {
        return Vm || (Vm = 1, function(u) {
          function s(X, I) {
            var J = X.length;
            X.push(I);
            e:
              for (; 0 < J; ) {
                var ee = J - 1 >>> 1, de = X[ee];
                if (0 < y(de, I))
                  X[ee] = I, X[J] = de, J = ee;
                else
                  break e;
              }
          }
          function r(X) {
            return X.length === 0 ? null : X[0];
          }
          function f(X) {
            if (X.length === 0)
              return null;
            var I = X[0], J = X.pop();
            if (J !== I) {
              X[0] = J;
              e:
                for (var ee = 0, de = X.length, _ = de >>> 1; ee < _; ) {
                  var B = 2 * (ee + 1) - 1, k = X[B], K = B + 1, re = X[K];
                  if (0 > y(k, J))
                    K < de && 0 > y(re, k) ? (X[ee] = re, X[K] = J, ee = K) : (X[ee] = k, X[B] = J, ee = B);
                  else if (K < de && 0 > y(re, J))
                    X[ee] = re, X[K] = J, ee = K;
                  else
                    break e;
                }
            }
            return I;
          }
          function y(X, I) {
            var J = X.sortIndex - I.sortIndex;
            return J !== 0 ? J : X.id - I.id;
          }
          if (u.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
            var v = performance;
            u.unstable_now = function() {
              return v.now();
            };
          } else {
            var m = Date, x = m.now();
            u.unstable_now = function() {
              return m.now() - x;
            };
          }
          var p = [], h = [], j = 1, E = null, Y = 3, w = false, C = false, Z = false, ie = false, he = typeof setTimeout == "function" ? setTimeout : null, _e = typeof clearTimeout == "function" ? clearTimeout : null, se = typeof setImmediate != "undefined" ? setImmediate : null;
          function ve(X) {
            for (var I = r(h); I !== null; ) {
              if (I.callback === null)
                f(h);
              else if (I.startTime <= X)
                f(h), I.sortIndex = I.expirationTime, s(p, I);
              else
                break;
              I = r(h);
            }
          }
          function Ne(X) {
            if (Z = false, ve(X), !C)
              if (r(p) !== null)
                C = true, De || (De = true, Ue());
              else {
                var I = r(h);
                I !== null && xt(Ne, I.startTime - X);
              }
          }
          var De = false, ce = -1, lt = 5, wt = -1;
          function Pt() {
            return ie ? true : !(u.unstable_now() - wt < lt);
          }
          function pt() {
            if (ie = false, De) {
              var X = u.unstable_now();
              wt = X;
              var I = true;
              try {
                e: {
                  C = false, Z && (Z = false, _e(ce), ce = -1), w = true;
                  var J = Y;
                  try {
                    t: {
                      for (ve(X), E = r(p); E !== null && !(E.expirationTime > X && Pt()); ) {
                        var ee = E.callback;
                        if (typeof ee == "function") {
                          E.callback = null, Y = E.priorityLevel;
                          var de = ee(E.expirationTime <= X);
                          if (X = u.unstable_now(), typeof de == "function") {
                            E.callback = de, ve(X), I = true;
                            break t;
                          }
                          E === r(p) && f(p), ve(X);
                        } else
                          f(p);
                        E = r(p);
                      }
                      if (E !== null)
                        I = true;
                      else {
                        var _ = r(h);
                        _ !== null && xt(Ne, _.startTime - X), I = false;
                      }
                    }
                    break e;
                  } finally {
                    E = null, Y = J, w = false;
                  }
                  I = void 0;
                }
              } finally {
                I ? Ue() : De = false;
              }
            }
          }
          var Ue;
          if (typeof se == "function")
            Ue = function() {
              se(pt);
            };
          else if (typeof MessageChannel != "undefined") {
            var Ge = new MessageChannel(), ze = Ge.port2;
            Ge.port1.onmessage = pt, Ue = function() {
              ze.postMessage(null);
            };
          } else
            Ue = function() {
              he(pt, 0);
            };
          function xt(X, I) {
            ce = he(function() {
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
            return de = J + de, X = { id: j++, callback: I, priorityLevel: X, startTime: J, expirationTime: de, sortIndex: -1 }, J > ee ? (X.sortIndex = J, s(h, X), r(p) === null && X === r(h) && (Z ? (_e(ce), ce = -1) : Z = true, xt(Ne, J - ee))) : (X.sortIndex = de, s(p, X), C || w || (C = true, De || (De = true, Ue()))), X;
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
        }(Lo)), Lo;
      }
      var Zm;
      function vy() {
        return Zm || (Zm = 1, Ho.exports = by()), Ho.exports;
      }
      var Yo = { exports: {} };
      var At = {};
      var Km;
      function xy() {
        if (Km)
          return At;
        Km = 1;
        var u = sc();
        function s(p) {
          var h = "https://react.dev/errors/" + p;
          if (1 < arguments.length) {
            h += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var j = 2; j < arguments.length; j++)
              h += "&args[]=" + encodeURIComponent(arguments[j]);
          }
          return "Minified React error #" + p + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        function r() {
        }
        var f = { d: { f: r, r: function() {
          throw Error(s(522));
        }, D: r, C: r, L: r, m: r, X: r, S: r, M: r }, p: 0, findDOMNode: null }, y = Symbol.for("react.portal");
        function v(p, h, j) {
          var E = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
          return { $$typeof: y, key: E == null ? null : "" + E, children: p, containerInfo: h, implementation: j };
        }
        var m = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function x(p, h) {
          if (p === "font")
            return "";
          if (typeof h == "string")
            return h === "use-credentials" ? h : "";
        }
        return At.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f, At.createPortal = function(p, h) {
          var j = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
          if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11)
            throw Error(s(299));
          return v(p, h, null, j);
        }, At.flushSync = function(p) {
          var h = m.T, j = f.p;
          try {
            if (m.T = null, f.p = 2, p)
              return p();
          } finally {
            m.T = h, f.p = j, f.d.f();
          }
        }, At.preconnect = function(p, h) {
          typeof p == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, f.d.C(p, h));
        }, At.prefetchDNS = function(p) {
          typeof p == "string" && f.d.D(p);
        }, At.preinit = function(p, h) {
          if (typeof p == "string" && h && typeof h.as == "string") {
            var j = h.as, E = x(j, h.crossOrigin), Y = typeof h.integrity == "string" ? h.integrity : void 0, w = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
            j === "style" ? f.d.S(p, typeof h.precedence == "string" ? h.precedence : void 0, { crossOrigin: E, integrity: Y, fetchPriority: w }) : j === "script" && f.d.X(p, { crossOrigin: E, integrity: Y, fetchPriority: w, nonce: typeof h.nonce == "string" ? h.nonce : void 0 });
          }
        }, At.preinitModule = function(p, h) {
          if (typeof p == "string")
            if (typeof h == "object" && h !== null) {
              if (h.as == null || h.as === "script") {
                var j = x(h.as, h.crossOrigin);
                f.d.M(p, { crossOrigin: j, integrity: typeof h.integrity == "string" ? h.integrity : void 0, nonce: typeof h.nonce == "string" ? h.nonce : void 0 });
              }
            } else
              h == null && f.d.M(p);
        }, At.preload = function(p, h) {
          if (typeof p == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
            var j = h.as, E = x(j, h.crossOrigin);
            f.d.L(p, j, { crossOrigin: E, integrity: typeof h.integrity == "string" ? h.integrity : void 0, nonce: typeof h.nonce == "string" ? h.nonce : void 0, type: typeof h.type == "string" ? h.type : void 0, fetchPriority: typeof h.fetchPriority == "string" ? h.fetchPriority : void 0, referrerPolicy: typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0, imageSrcSet: typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0, imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0, media: typeof h.media == "string" ? h.media : void 0 });
          }
        }, At.preloadModule = function(p, h) {
          if (typeof p == "string")
            if (h) {
              var j = x(h.as, h.crossOrigin);
              f.d.m(p, { as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0, crossOrigin: j, integrity: typeof h.integrity == "string" ? h.integrity : void 0 });
            } else
              f.d.m(p);
        }, At.requestFormReset = function(p) {
          f.d.r(p);
        }, At.unstable_batchedUpdates = function(p, h) {
          return p(h);
        }, At.useFormState = function(p, h, j) {
          return m.H.useFormState(p, h, j);
        }, At.useFormStatus = function() {
          return m.H.useHostTransitionStatus();
        }, At.version = "19.2.0", At;
      }
      var Jm;
      function Sy() {
        if (Jm)
          return Yo.exports;
        Jm = 1;
        function u() {
          if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
            } catch (s) {
              console.error(s);
            }
        }
        return u(), Yo.exports = xy(), Yo.exports;
      }
      var Fm;
      function _y() {
        if (Fm)
          return As;
        Fm = 1;
        var u = vy(), s = sc(), r = Sy();
        function f(e) {
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
          if (v(e) !== e)
            throw Error(f(188));
        }
        function h(e) {
          var t = e.alternate;
          if (!t) {
            if (t = v(e), t === null)
              throw Error(f(188));
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
              throw Error(f(188));
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
                  throw Error(f(189));
              }
            }
            if (n.alternate !== a)
              throw Error(f(190));
          }
          if (n.tag !== 3)
            throw Error(f(188));
          return n.stateNode.current === n ? e : t;
        }
        function j(e) {
          var t = e.tag;
          if (t === 5 || t === 26 || t === 27 || t === 6)
            return e;
          for (e = e.child; e !== null; ) {
            if (t = j(e), t !== null)
              return t;
            e = e.sibling;
          }
          return null;
        }
        var E = Object.assign, Y = Symbol.for("react.element"), w = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), Z = Symbol.for("react.fragment"), ie = Symbol.for("react.strict_mode"), he = Symbol.for("react.profiler"), _e = Symbol.for("react.consumer"), se = Symbol.for("react.context"), ve = Symbol.for("react.forward_ref"), Ne = Symbol.for("react.suspense"), De = Symbol.for("react.suspense_list"), ce = Symbol.for("react.memo"), lt = Symbol.for("react.lazy"), wt = Symbol.for("react.activity"), Pt = Symbol.for("react.memo_cache_sentinel"), pt = Symbol.iterator;
        function Ue(e) {
          return e === null || typeof e != "object" ? null : (e = pt && e[pt] || e["@@iterator"], typeof e == "function" ? e : null);
        }
        var Ge = Symbol.for("react.client.reference");
        function ze(e) {
          if (e == null)
            return null;
          if (typeof e == "function")
            return e.$$typeof === Ge ? null : e.displayName || e.name || null;
          if (typeof e == "string")
            return e;
          switch (e) {
            case Z:
              return "Fragment";
            case he:
              return "Profiler";
            case ie:
              return "StrictMode";
            case Ne:
              return "Suspense";
            case De:
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
              case ce:
                return t = e.displayName || null, t !== null ? t : ze(e.type) || "Memo";
              case lt:
                t = e._payload, e = e._init;
                try {
                  return ze(e(t));
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
        function k(e, t) {
          de++, ee[de] = e.current, e.current = t;
        }
        var K = _(null), re = _(null), xe = _(null), me = _(null);
        function ct(e, t) {
          switch (k(xe, t), k(re, e), k(K, null), t.nodeType) {
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
          B(K), k(K, e);
        }
        function Ze() {
          B(K), B(re), B(xe);
        }
        function St(e) {
          e.memoizedState !== null && k(me, e);
          var t = K.current, n = im(t, e.type);
          t !== n && (k(re, e), k(K, n));
        }
        function pa(e) {
          re.current === e && (B(K), B(re)), me.current === e && (B(me), _s._currentValue = J);
        }
        var wl, Us;
        function En(e) {
          if (wl === void 0)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              wl = t && t[1] || "", Us = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
            }
          return `
` + wl + e + Us;
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
            var i = a.DetermineComponentFrameRoot(), o = i[0], b = i[1];
            if (o && b) {
              var T = o.split(`
`), D = b.split(`
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
                        var Q = `
` + T[a].replace(" at new ", " at ");
                        return e.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", e.displayName)), Q;
                      }
                    while (1 <= a && 0 <= l);
                  break;
                }
            }
          } finally {
            ji = false, Error.prepareStackTrace = n;
          }
          return (n = e ? e.displayName || e.name : "") ? En(n) : "";
        }
        function Tr(e, t) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              return En(e.type);
            case 16:
              return En("Lazy");
            case 13:
              return e.child !== t && t !== null ? En("Suspense Fallback") : En("Suspense");
            case 19:
              return En("SuspenseList");
            case 0:
            case 15:
              return Ti(e.type, false);
            case 11:
              return Ti(e.type.render, false);
            case 1:
              return Ti(e.type, true);
            case 31:
              return En("Activity");
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
        var wi = Object.prototype.hasOwnProperty, Ei = u.unstable_scheduleCallback, Ai = u.unstable_cancelCallback, wr = u.unstable_shouldYield, Bs = u.unstable_requestPaint, Rt = u.unstable_now, H = u.unstable_getCurrentPriorityLevel, pe = u.unstable_ImmediatePriority, Ri = u.unstable_UserBlockingPriority, Ja = u.unstable_NormalPriority, Er = u.unstable_LowPriority, El = u.unstable_IdlePriority, qs = u.log, Hs = u.unstable_setDisableYieldValue, Fa = null, Ot = null;
        function Qt(e) {
          if (typeof qs == "function" && Hs(e), Ot && typeof Ot.setStrictMode == "function")
            try {
              Ot.setStrictMode(Fa, e);
            } catch (t) {
            }
        }
        var Et = Math.clz32 ? Math.clz32 : Ar, Oi = Math.log, Ls = Math.LN2;
        function Ar(e) {
          return e >>>= 0, e === 0 ? 32 : 31 - (Oi(e) / Ls | 0) | 0;
        }
        var Wa = 256, Al = 262144, $a = 4194304;
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
          var l = 0, i = e.suspendedLanes, o = e.pingedLanes;
          e = e.warmLanes;
          var b = a & 134217727;
          return b !== 0 ? (a = b & ~i, a !== 0 ? l = An(a) : (o &= b, o !== 0 ? l = An(o) : n || (n = b & ~e, n !== 0 && (l = An(n))))) : (b = a & ~i, b !== 0 ? l = An(b) : o !== 0 ? l = An(o) : n || (n = a & ~e, n !== 0 && (l = An(n)))), l === 0 ? 0 : t !== 0 && t !== l && (t & i) === 0 && (i = l & -l, n = t & -t, i >= n || i === 32 && (n & 4194048) !== 0) ? t : l;
        }
        function Pa(e, t) {
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
          var e = $a;
          return $a <<= 1, ($a & 62914560) === 0 && ($a = 4194304), e;
        }
        function Ia(e) {
          for (var t = [], n = 0; 31 > n; n++)
            t.push(e);
          return t;
        }
        function Qn(e, t) {
          e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
        }
        function Or(e, t, n, a, l, i) {
          var o = e.pendingLanes;
          e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
          var b = e.entanglements, T = e.expirationTimes, D = e.hiddenUpdates;
          for (n = o & ~n; 0 < n; ) {
            var Q = 31 - Et(n), V = 1 << Q;
            b[Q] = 0, T[Q] = -1;
            var q = D[Q];
            if (q !== null)
              for (D[Q] = null, Q = 0; Q < q.length; Q++) {
                var L = q[Q];
                L !== null && (L.lane &= -536870913);
              }
            n &= ~V;
          }
          a !== 0 && Xs(e, a, 0), i !== 0 && l === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(o & ~t));
        }
        function Xs(e, t, n) {
          e.pendingLanes |= t, e.suspendedLanes &= ~t;
          var a = 31 - Et(t);
          e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | n & 261930;
        }
        function Qs(e, t) {
          var n = e.entangledLanes |= t;
          for (e = e.entanglements; n; ) {
            var a = 31 - Et(n), l = 1 << a;
            l & t | e[a] & t && (e[a] |= t), n &= ~l;
          }
        }
        function Gs(e, t) {
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
        function Ci(e) {
          return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
        }
        function ks() {
          var e = I.p;
          return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Am(e.type));
        }
        function Vs(e, t) {
          var n = I.p;
          try {
            return I.p = e, t();
          } finally {
            I.p = n;
          }
        }
        var gn = Math.random().toString(36).slice(2), dt = "__reactFiber$" + gn, gt = "__reactProps$" + gn, Rn = "__reactContainer$" + gn, zi = "__reactEvents$" + gn, Cr = "__reactListeners$" + gn, Zs = "__reactHandles$" + gn, ga = "__reactResources$" + gn, On = "__reactMarker$" + gn;
        function Mi(e) {
          delete e[dt], delete e[gt], delete e[zi], delete e[Cr], delete e[Zs];
        }
        function ya(e) {
          var t = e[dt];
          if (t)
            return t;
          for (var n = e.parentNode; n; ) {
            if (t = n[Rn] || n[dt]) {
              if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = dm(e); e !== null; ) {
                  if (n = e[dt])
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
          if (e = e[dt] || e[Rn]) {
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
          throw Error(f(33));
        }
        function ba(e) {
          var t = e[ga];
          return t || (t = e[ga] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
        }
        function $e(e) {
          e[On] = true;
        }
        var Mt = /* @__PURE__ */ new Set(), Ol = {};
        function zn(e, t) {
          Gt(e, t), Gt(e + "Capture", t);
        }
        function Gt(e, t) {
          for (Ol[e] = t, e = 0; e < t.length; e++)
            Mt.add(t[e]);
        }
        var Ks = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Js = {}, Fs = {};
        function zr(e) {
          return wi.call(Fs, e) ? true : wi.call(Js, e) ? false : Ks.test(e) ? Fs[e] = true : (Js[e] = true, false);
        }
        function Gn(e, t, n) {
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
        function nl(e) {
          if (e = e || (typeof document != "undefined" ? document : void 0), typeof e == "undefined")
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        var kn = /[\n"\\]/g;
        function Ct(e) {
          return e.replace(kn, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " ";
          });
        }
        function Bi(e, t, n, a, l, i, o, b) {
          e.name = "", o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.type = o : e.removeAttribute("type"), t != null ? o === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Ut(t)) : e.value !== "" + Ut(t) && (e.value = "" + Ut(t)) : o !== "submit" && o !== "reset" || e.removeAttribute("value"), t != null ? qi(e, o, Ut(t)) : n != null ? qi(e, o, Ut(n)) : a != null && e.removeAttribute("value"), l == null && i != null && (e.defaultChecked = !!i), l != null && (e.checked = l && typeof l != "function" && typeof l != "symbol"), b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? e.name = "" + Ut(b) : e.removeAttribute("name");
        }
        function $s(e, t, n, a, l, i, o, b) {
          if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || n != null) {
            if (!(i !== "submit" && i !== "reset" || t != null)) {
              Ui(e);
              return;
            }
            n = n != null ? "" + Ut(n) : "", t = t != null ? "" + Ut(t) : n, b || t === e.value || (e.value = t), e.defaultValue = t;
          }
          a = a != null ? a : l, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = b ? e.checked : !!a, e.defaultChecked = !!a, o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (e.name = o), Ui(e);
        }
        function qi(e, t, n) {
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
        function Ps(e, t, n) {
          if (t != null && (t = "" + Ut(t), t !== e.value && (e.value = t), n == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return;
          }
          e.defaultValue = n != null ? "" + Ut(n) : "";
        }
        function Hi(e, t, n, a) {
          if (t == null) {
            if (a != null) {
              if (n != null)
                throw Error(f(92));
              if (xt(a)) {
                if (1 < a.length)
                  throw Error(f(93));
                a = a[0];
              }
              n = a;
            }
            n == null && (n = ""), t = n;
          }
          n = Ut(t), e.defaultValue = n, a = e.textContent, a === n && a !== "" && a !== null && (e.value = a), Ui(e);
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
        var Cl = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
        function Is(e, t, n) {
          var a = t.indexOf("--") === 0;
          n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Cl.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
        }
        function Li(e, t, n) {
          if (t != null && typeof t != "object")
            throw Error(f(62));
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
                  if (Bi(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
                    for (n = e; n.parentNode; )
                      n = n.parentNode;
                    for (n = n.querySelectorAll('input[name="' + Ct("" + t) + '"][type="radio"]'), t = 0; t < n.length; t++) {
                      var a = n[t];
                      if (a !== e && a.form === e.form) {
                        var l = a[gt] || null;
                        if (!l)
                          throw Error(f(90));
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
                  t = n.value, t != null && va(e, !!n.multiple, t, false);
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
            if (Bl = false, (xa !== null || Zn !== null) && (Qu(), xa && (t = xa, e = Zn, Zn = xa = null, Dl(t), e)))
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
            throw Error(f(231, t, typeof n));
          return n;
        }
        var tn = !(typeof window == "undefined" || typeof window.document == "undefined" || typeof window.document.createElement == "undefined"), Xi = false;
        if (tn)
          try {
            var Un = {};
            Object.defineProperty(Un, "passive", { get: function() {
              Xi = true;
            } }), window.addEventListener("test", Un, Un), window.removeEventListener("test", Un, Un);
          } catch (e) {
            Xi = false;
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
        function tu() {
          return false;
        }
        function yt(e) {
          function t(n, a, l, i, o) {
            this._reactName = n, this._targetInst = l, this.type = a, this.nativeEvent = i, this.target = o, this.currentTarget = null;
            for (var b in e)
              e.hasOwnProperty(b) && (n = e[b], this[b] = n ? n(i) : i[b]);
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
        var Jn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
          return e.timeStamp || Date.now();
        }, defaultPrevented: 0, isTrusted: 0 }, ll = yt(Jn), ke = E({}, Jn, { view: 0, detail: 0 }), c = yt(ke), g, S, N, A = E({}, ke, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: an, button: 0, buttons: 0, relatedTarget: function(e) {
          return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
        }, movementX: function(e) {
          return "movementX" in e ? e.movementX : (e !== N && (N && e.type === "mousemove" ? (g = e.screenX - N.screenX, S = e.screenY - N.screenY) : S = g = 0, N = e), g);
        }, movementY: function(e) {
          return "movementY" in e ? e.movementY : S;
        } }), M = yt(A), z = E({}, A, { dataTransfer: 0 }), F = yt(z), ae = E({}, ke, { relatedTarget: 0 }), W = yt(ae), $ = E({}, Jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), oe = yt($), He = E({}, Jn, { clipboardData: function(e) {
          return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        } }), ge = yt(He), P = E({}, Jn, { data: 0 }), te = yt(P), Ke = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, bt = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, tt = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
        function nn(e) {
          var t = this.nativeEvent;
          return t.getModifierState ? t.getModifierState(e) : (e = tt[e]) ? !!t[e] : false;
        }
        function an() {
          return nn;
        }
        var Qi = E({}, ke, { key: function(e) {
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
        } }), nu = yt(Qi), Dn = E({}, A, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Yl = yt(Dn), Xl = E({}, ke, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: an }), au = yt(Xl), lu = E({}, Jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ql = yt(lu), il = E({}, A, { deltaX: function(e) {
          return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        }, deltaY: function(e) {
          return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        }, deltaZ: 0, deltaMode: 0 }), Fn = yt(il), iu = E({}, Jn, { newState: 0, oldState: 0 }), ln = yt(iu), su = [9, 13, 27, 32], sn = tn && "CompositionEvent" in window, _a = null;
        tn && "documentMode" in document && (_a = document.documentMode);
        var Dr = tn && "TextEvent" in window && !_a, yn = tn && (!sn || _a && 8 < _a && 11 >= _a), Wn = " ", Gl = false;
        function sl(e, t) {
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
              return t.which !== 32 ? null : (Gl = true, Wn);
            case "textInput":
              return e = t.data, e === Wn && Gl ? null : e;
            default:
              return null;
          }
        }
        function Pp(e, t) {
          if (kl)
            return e === "compositionend" || !sn && sl(e, t) ? (e = ql(), Kn = Sa = ht = null, kl = false, e) : null;
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
          xa ? Zn ? Zn.push(a) : Zn = [a] : xa = a, t = Fu(t, "onChange"), 0 < t.length && (n = new ll("onChange", "change", null, n, a), e.push({ event: n, listeners: t }));
        }
        var ki = null, Vi = null;
        function eg(e) {
          Ph(e, 0);
        }
        function uu(e) {
          var t = el(e);
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
        var kt = typeof Object.is == "function" ? Object.is : ig;
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
            if (!wi.call(t, l) || !kt(e[l], t[l]))
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
        function Hr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
        }
        var sg = tn && "documentMode" in document && 11 >= document.documentMode, Vl = null, Lr = null, Ki = null, Yr = false;
        function wc(e, t, n) {
          var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
          Yr || Vl == null || Vl !== nl(a) || (a = Vl, "selectionStart" in a && Hr(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset }), Ki && Zi(Ki, a) || (Ki = a, a = Fu(Lr, "onSelect"), 0 < a.length && (t = new ll("onSelect", "select", null, t, n), e.push({ event: t, listeners: a }), t.target = Vl)));
        }
        function ul(e, t) {
          var n = {};
          return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
        }
        var Zl = { animationend: ul("Animation", "AnimationEnd"), animationiteration: ul("Animation", "AnimationIteration"), animationstart: ul("Animation", "AnimationStart"), transitionrun: ul("Transition", "TransitionRun"), transitionstart: ul("Transition", "TransitionStart"), transitioncancel: ul("Transition", "TransitionCancel"), transitionend: ul("Transition", "TransitionEnd") }, Xr = {}, Ec = {};
        tn && (Ec = document.createElement("div").style, "AnimationEvent" in window || (delete Zl.animationend.animation, delete Zl.animationiteration.animation, delete Zl.animationstart.animation), "TransitionEvent" in window || delete Zl.transitionend.transition);
        function rl(e) {
          if (Xr[e])
            return Xr[e];
          if (!Zl[e])
            return e;
          var t = Zl[e], n;
          for (n in t)
            if (t.hasOwnProperty(n) && n in Ec)
              return Xr[e] = t[n];
          return e;
        }
        var Ac = rl("animationend"), Rc = rl("animationiteration"), Oc = rl("animationstart"), ug = rl("transitionrun"), rg = rl("transitionstart"), fg = rl("transitioncancel"), Cc = rl("transitionend"), zc = /* @__PURE__ */ new Map(), Qr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
        Qr.push("scrollEnd");
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
        function fu() {
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
            i !== 0 && Mc(n, l, i);
          }
        }
        function ou(e, t, n, a) {
          un[Kl++] = e, un[Kl++] = t, un[Kl++] = n, un[Kl++] = a, Gr |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
        }
        function kr(e, t, n, a) {
          return ou(e, t, n, a), cu(e);
        }
        function fl(e, t) {
          return ou(e, null, null, t), cu(e);
        }
        function Mc(e, t, n) {
          e.lanes |= n;
          var a = e.alternate;
          a !== null && (a.lanes |= n);
          for (var l = false, i = e.return; i !== null; )
            i.childLanes |= n, a = i.alternate, a !== null && (a.childLanes |= n), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (l = true)), e = i, i = i.return;
          return e.tag === 3 ? (i = e.stateNode, l && t !== null && (l = 31 - Et(n), e = i.hiddenUpdates, a = e[l], a === null ? e[l] = [t] : a.push(t), t.lane = n | 536870912), i) : null;
        }
        function cu(e) {
          if (50 < ps)
            throw ps = 0, eo = null, Error(f(185));
          for (var t = e.return; t !== null; )
            e = t, t = e.return;
          return e.tag === 3 ? e.stateNode : null;
        }
        var Jl = {};
        function og(e, t, n, a) {
          this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
        }
        function Vt(e, t, n, a) {
          return new og(e, t, n, a);
        }
        function Vr(e) {
          return e = e.prototype, !(!e || !e.isReactComponent);
        }
        function $n(e, t) {
          var n = e.alternate;
          return n === null ? (n = Vt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
        }
        function Uc(e, t) {
          e.flags &= 65011714;
          var n = e.alternate;
          return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), e;
        }
        function du(e, t, n, a, l, i) {
          var o = 0;
          if (a = e, typeof e == "function")
            Vr(e) && (o = 1);
          else if (typeof e == "string")
            o = p0(e, n, K.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
          else
            e:
              switch (e) {
                case wt:
                  return e = Vt(31, n, t, l), e.elementType = wt, e.lanes = i, e;
                case Z:
                  return ol(n.children, l, i, t);
                case ie:
                  o = 8, l |= 24;
                  break;
                case he:
                  return e = Vt(12, n, t, l | 2), e.elementType = he, e.lanes = i, e;
                case Ne:
                  return e = Vt(13, n, t, l), e.elementType = Ne, e.lanes = i, e;
                case De:
                  return e = Vt(19, n, t, l), e.elementType = De, e.lanes = i, e;
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
                      case ce:
                        o = 14;
                        break e;
                      case lt:
                        o = 16, a = null;
                        break e;
                    }
                  o = 29, n = Error(f(130, e === null ? "null" : typeof e, "")), a = null;
              }
          return t = Vt(o, n, t, l), t.elementType = e, t.type = a, t.lanes = i, t;
        }
        function ol(e, t, n, a) {
          return e = Vt(7, e, a, t), e.lanes = n, e;
        }
        function Zr(e, t, n) {
          return e = Vt(6, e, null, t), e.lanes = n, e;
        }
        function Dc(e) {
          var t = Vt(18, null, null, 0);
          return t.stateNode = e, t;
        }
        function Kr(e, t, n) {
          return t = Vt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
        }
        var Bc = /* @__PURE__ */ new WeakMap();
        function rn(e, t) {
          if (typeof e == "object" && e !== null) {
            var n = Bc.get(e);
            return n !== void 0 ? n : (t = { value: e, source: t, stack: Ds(t) }, Bc.set(e, t), t);
          }
          return { value: e, source: t, stack: Ds(t) };
        }
        var Fl = [], Wl = 0, hu = null, Ji = 0, fn = [], on = 0, Na = null, Bn = 1, qn = "";
        function Pn(e, t) {
          Fl[Wl++] = Ji, Fl[Wl++] = hu, hu = e, Ji = t;
        }
        function qc(e, t, n) {
          fn[on++] = Bn, fn[on++] = qn, fn[on++] = Na, Na = e;
          var a = Bn;
          e = qn;
          var l = 32 - Et(a) - 1;
          a &= ~(1 << l), n += 1;
          var i = 32 - Et(t) + l;
          if (30 < i) {
            var o = l - l % 5;
            i = (a & (1 << o) - 1).toString(32), a >>= o, l -= o, Bn = 1 << 32 - Et(t) + l | n << l | a, qn = i + e;
          } else
            Bn = 1 << i | n << l | a, qn = e;
        }
        function Jr(e) {
          e.return !== null && (Pn(e, 1), qc(e, 1, 0));
        }
        function Fr(e) {
          for (; e === hu; )
            hu = Fl[--Wl], Fl[Wl] = null, Ji = Fl[--Wl], Fl[Wl] = null;
          for (; e === Na; )
            Na = fn[--on], fn[on] = null, qn = fn[--on], fn[on] = null, Bn = fn[--on], fn[on] = null;
        }
        function Hc(e, t) {
          fn[on++] = Bn, fn[on++] = qn, fn[on++] = Na, Bn = t.id, qn = t.overflow, Na = e;
        }
        var _t = null, Je = null, Ae = false, ja = null, cn = false, Wr = Error(f(519));
        function Ta(e) {
          var t = Error(f(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
          throw Fi(rn(t, e)), Wr;
        }
        function Lc(e) {
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
          n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === true || nm(t.textContent, n) ? (a.popover != null && (Te("beforetoggle", t), Te("toggle", t)), a.onScroll != null && Te("scroll", t), a.onScrollEnd != null && Te("scrollend", t), a.onClick != null && (t.onclick = en), t = true) : t = false, t || Ta(e, true);
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
          if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || go(e.type, e.memoizedProps)), n = !n), n && Je && Ta(e), Yc(e), t === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
              throw Error(f(317));
            Je = cm(e);
          } else if (t === 31) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
              throw Error(f(317));
            Je = cm(e);
          } else
            t === 27 ? (t = Je, La(e.type) ? (e = So, So = null, Je = e) : Je = t) : Je = _t ? hn(e.stateNode.nextSibling) : null;
          return true;
        }
        function cl() {
          Je = _t = null, Ae = false;
        }
        function $r() {
          var e = ja;
          return e !== null && (Ht === null ? Ht = e : Ht.push.apply(Ht, e), ja = null), e;
        }
        function Fi(e) {
          ja === null ? ja = [e] : ja.push(e);
        }
        var Pr = _(null), dl = null, In = null;
        function wa(e, t, n) {
          k(Pr, t._currentValue), t._currentValue = n;
        }
        function ea(e) {
          e._currentValue = Pr.current, B(Pr);
        }
        function Ir(e, t, n) {
          for (; e !== null; ) {
            var a = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === n)
              break;
            e = e.return;
          }
        }
        function ef(e, t, n, a) {
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
                  for (var T = 0; T < t.length; T++)
                    if (b.context === t[T]) {
                      i.lanes |= n, b = i.alternate, b !== null && (b.lanes |= n), Ir(i.return, n, e), a || (o = null);
                      break e;
                    }
                  i = b.next;
                }
            } else if (l.tag === 18) {
              if (o = l.return, o === null)
                throw Error(f(341));
              o.lanes |= n, i = o.alternate, i !== null && (i.lanes |= n), Ir(o, n, e), o = null;
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
                throw Error(f(387));
              if (o = o.memoizedProps, o !== null) {
                var b = l.type;
                kt(l.pendingProps.value, o.value) || (e !== null ? e.push(b) : e = [b]);
              }
            } else if (l === me.current) {
              if (o = l.alternate, o === null)
                throw Error(f(387));
              o.memoizedState.memoizedState !== l.memoizedState.memoizedState && (e !== null ? e.push(_s) : e = [_s]);
            }
            l = l.return;
          }
          e !== null && ef(t, e, n, a), t.flags |= 262144;
        }
        function mu(e) {
          for (e = e.firstContext; e !== null; ) {
            if (!kt(e.context._currentValue, e.memoizedValue))
              return true;
            e = e.next;
          }
          return false;
        }
        function hl(e) {
          dl = e, In = null, e = e.dependencies, e !== null && (e.firstContext = null);
        }
        function Nt(e) {
          return Xc(dl, e);
        }
        function pu(e, t) {
          return dl === null && hl(e), Xc(e, t);
        }
        function Xc(e, t) {
          var n = t._currentValue;
          if (t = { context: t, memoizedValue: n, next: null }, In === null) {
            if (e === null)
              throw Error(f(308));
            In = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
          } else
            In = In.next = t;
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
        }, dg = u.unstable_scheduleCallback, hg = u.unstable_NormalPriority, st = { $$typeof: se, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
        function tf() {
          return { controller: new cg(), data: /* @__PURE__ */ new Map(), refCount: 0 };
        }
        function Wi(e) {
          e.refCount--, e.refCount === 0 && dg(hg, function() {
            e.controller.abort();
          });
        }
        var $i = null, nf = 0, Il = 0, ei = null;
        function mg(e, t) {
          if ($i === null) {
            var n = $i = [];
            nf = 0, Il = so(), ei = { status: "pending", value: void 0, then: function(a) {
              n.push(a);
            } };
          }
          return nf++, t.then(Qc, Qc), t;
        }
        function Qc() {
          if (--nf === 0 && $i !== null) {
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
        var Gc = X.S;
        X.S = function(e, t) {
          wh = Rt(), typeof t == "object" && t !== null && typeof t.then == "function" && mg(e, t), Gc !== null && Gc(e, t);
        };
        var ml = _(null);
        function af() {
          var e = ml.current;
          return e !== null ? e : Qe.pooledCache;
        }
        function gu(e, t) {
          t === null ? k(ml, ml.current) : k(ml, t.pool);
        }
        function kc() {
          var e = af();
          return e === null ? null : { parent: st._currentValue, pool: e };
        }
        var ti = Error(f(460)), lf = Error(f(474)), yu = Error(f(542)), bu = { then: function() {
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
                if (e = Qe, e !== null && 100 < e.shellSuspendCounter)
                  throw Error(f(482));
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
        function Kc() {
          if (gl === null)
            throw Error(f(459));
          var e = gl;
          return gl = null, e;
        }
        function Jc(e) {
          if (e === ti || e === yu)
            throw Error(f(483));
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
          throw t.$$typeof === Y ? Error(f(525)) : (e = Object.prototype.toString.call(t), Error(f(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
        }
        function Fc(e) {
          function t(O, R) {
            if (e) {
              var U = O.deletions;
              U === null ? (O.deletions = [R], O.flags |= 16) : U.push(R);
            }
          }
          function n(O, R) {
            if (!e)
              return null;
            for (; R !== null; )
              t(O, R), R = R.sibling;
            return null;
          }
          function a(O) {
            for (var R = /* @__PURE__ */ new Map(); O !== null; )
              O.key !== null ? R.set(O.key, O) : R.set(O.index, O), O = O.sibling;
            return R;
          }
          function l(O, R) {
            return O = $n(O, R), O.index = 0, O.sibling = null, O;
          }
          function i(O, R, U) {
            return O.index = U, e ? (U = O.alternate, U !== null ? (U = U.index, U < R ? (O.flags |= 67108866, R) : U) : (O.flags |= 67108866, R)) : (O.flags |= 1048576, R);
          }
          function o(O) {
            return e && O.alternate === null && (O.flags |= 67108866), O;
          }
          function b(O, R, U, G) {
            return R === null || R.tag !== 6 ? (R = Zr(U, O.mode, G), R.return = O, R) : (R = l(R, U), R.return = O, R);
          }
          function T(O, R, U, G) {
            var ue = U.type;
            return ue === Z ? Q(O, R, U.props.children, G, U.key) : R !== null && (R.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === lt && pl(ue) === R.type) ? (R = l(R, U.props), Ii(R, U), R.return = O, R) : (R = du(U.type, U.key, U.props, null, O.mode, G), Ii(R, U), R.return = O, R);
          }
          function D(O, R, U, G) {
            return R === null || R.tag !== 4 || R.stateNode.containerInfo !== U.containerInfo || R.stateNode.implementation !== U.implementation ? (R = Kr(U, O.mode, G), R.return = O, R) : (R = l(R, U.children || []), R.return = O, R);
          }
          function Q(O, R, U, G, ue) {
            return R === null || R.tag !== 7 ? (R = ol(U, O.mode, G, ue), R.return = O, R) : (R = l(R, U), R.return = O, R);
          }
          function V(O, R, U) {
            if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
              return R = Zr("" + R, O.mode, U), R.return = O, R;
            if (typeof R == "object" && R !== null) {
              switch (R.$$typeof) {
                case w:
                  return U = du(R.type, R.key, R.props, null, O.mode, U), Ii(U, R), U.return = O, U;
                case C:
                  return R = Kr(R, O.mode, U), R.return = O, R;
                case lt:
                  return R = pl(R), V(O, R, U);
              }
              if (xt(R) || Ue(R))
                return R = ol(R, O.mode, U, null), R.return = O, R;
              if (typeof R.then == "function")
                return V(O, vu(R), U);
              if (R.$$typeof === se)
                return V(O, pu(O, R), U);
              xu(O, R);
            }
            return null;
          }
          function q(O, R, U, G) {
            var ue = R !== null ? R.key : null;
            if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
              return ue !== null ? null : b(O, R, "" + U, G);
            if (typeof U == "object" && U !== null) {
              switch (U.$$typeof) {
                case w:
                  return U.key === ue ? T(O, R, U, G) : null;
                case C:
                  return U.key === ue ? D(O, R, U, G) : null;
                case lt:
                  return U = pl(U), q(O, R, U, G);
              }
              if (xt(U) || Ue(U))
                return ue !== null ? null : Q(O, R, U, G, null);
              if (typeof U.then == "function")
                return q(O, R, vu(U), G);
              if (U.$$typeof === se)
                return q(O, R, pu(O, U), G);
              xu(O, U);
            }
            return null;
          }
          function L(O, R, U, G, ue) {
            if (typeof G == "string" && G !== "" || typeof G == "number" || typeof G == "bigint")
              return O = O.get(U) || null, b(R, O, "" + G, ue);
            if (typeof G == "object" && G !== null) {
              switch (G.$$typeof) {
                case w:
                  return O = O.get(G.key === null ? U : G.key) || null, T(R, O, G, ue);
                case C:
                  return O = O.get(G.key === null ? U : G.key) || null, D(R, O, G, ue);
                case lt:
                  return G = pl(G), L(O, R, U, G, ue);
              }
              if (xt(G) || Ue(G))
                return O = O.get(U) || null, Q(R, O, G, ue, null);
              if (typeof G.then == "function")
                return L(O, R, U, vu(G), ue);
              if (G.$$typeof === se)
                return L(O, R, U, pu(R, G), ue);
              xu(R, G);
            }
            return null;
          }
          function ne(O, R, U, G) {
            for (var ue = null, Oe = null, le = R, Se = R = 0, Ee = null; le !== null && Se < U.length; Se++) {
              le.index > Se ? (Ee = le, le = null) : Ee = le.sibling;
              var Ce = q(O, le, U[Se], G);
              if (Ce === null) {
                le === null && (le = Ee);
                break;
              }
              e && le && Ce.alternate === null && t(O, le), R = i(Ce, R, Se), Oe === null ? ue = Ce : Oe.sibling = Ce, Oe = Ce, le = Ee;
            }
            if (Se === U.length)
              return n(O, le), Ae && Pn(O, Se), ue;
            if (le === null) {
              for (; Se < U.length; Se++)
                le = V(O, U[Se], G), le !== null && (R = i(le, R, Se), Oe === null ? ue = le : Oe.sibling = le, Oe = le);
              return Ae && Pn(O, Se), ue;
            }
            for (le = a(le); Se < U.length; Se++)
              Ee = L(le, O, Se, U[Se], G), Ee !== null && (e && Ee.alternate !== null && le.delete(Ee.key === null ? Se : Ee.key), R = i(Ee, R, Se), Oe === null ? ue = Ee : Oe.sibling = Ee, Oe = Ee);
            return e && le.forEach(function(ka) {
              return t(O, ka);
            }), Ae && Pn(O, Se), ue;
          }
          function fe(O, R, U, G) {
            if (U == null)
              throw Error(f(151));
            for (var ue = null, Oe = null, le = R, Se = R = 0, Ee = null, Ce = U.next(); le !== null && !Ce.done; Se++, Ce = U.next()) {
              le.index > Se ? (Ee = le, le = null) : Ee = le.sibling;
              var ka = q(O, le, Ce.value, G);
              if (ka === null) {
                le === null && (le = Ee);
                break;
              }
              e && le && ka.alternate === null && t(O, le), R = i(ka, R, Se), Oe === null ? ue = ka : Oe.sibling = ka, Oe = ka, le = Ee;
            }
            if (Ce.done)
              return n(O, le), Ae && Pn(O, Se), ue;
            if (le === null) {
              for (; !Ce.done; Se++, Ce = U.next())
                Ce = V(O, Ce.value, G), Ce !== null && (R = i(Ce, R, Se), Oe === null ? ue = Ce : Oe.sibling = Ce, Oe = Ce);
              return Ae && Pn(O, Se), ue;
            }
            for (le = a(le); !Ce.done; Se++, Ce = U.next())
              Ce = L(le, O, Se, Ce.value, G), Ce !== null && (e && Ce.alternate !== null && le.delete(Ce.key === null ? Se : Ce.key), R = i(Ce, R, Se), Oe === null ? ue = Ce : Oe.sibling = Ce, Oe = Ce);
            return e && le.forEach(function(w0) {
              return t(O, w0);
            }), Ae && Pn(O, Se), ue;
          }
          function Xe(O, R, U, G) {
            if (typeof U == "object" && U !== null && U.type === Z && U.key === null && (U = U.props.children), typeof U == "object" && U !== null) {
              switch (U.$$typeof) {
                case w:
                  e: {
                    for (var ue = U.key; R !== null; ) {
                      if (R.key === ue) {
                        if (ue = U.type, ue === Z) {
                          if (R.tag === 7) {
                            n(O, R.sibling), G = l(R, U.props.children), G.return = O, O = G;
                            break e;
                          }
                        } else if (R.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === lt && pl(ue) === R.type) {
                          n(O, R.sibling), G = l(R, U.props), Ii(G, U), G.return = O, O = G;
                          break e;
                        }
                        n(O, R);
                        break;
                      } else
                        t(O, R);
                      R = R.sibling;
                    }
                    U.type === Z ? (G = ol(U.props.children, O.mode, G, U.key), G.return = O, O = G) : (G = du(U.type, U.key, U.props, null, O.mode, G), Ii(G, U), G.return = O, O = G);
                  }
                  return o(O);
                case C:
                  e: {
                    for (ue = U.key; R !== null; ) {
                      if (R.key === ue)
                        if (R.tag === 4 && R.stateNode.containerInfo === U.containerInfo && R.stateNode.implementation === U.implementation) {
                          n(O, R.sibling), G = l(R, U.children || []), G.return = O, O = G;
                          break e;
                        } else {
                          n(O, R);
                          break;
                        }
                      else
                        t(O, R);
                      R = R.sibling;
                    }
                    G = Kr(U, O.mode, G), G.return = O, O = G;
                  }
                  return o(O);
                case lt:
                  return U = pl(U), Xe(O, R, U, G);
              }
              if (xt(U))
                return ne(O, R, U, G);
              if (Ue(U)) {
                if (ue = Ue(U), typeof ue != "function")
                  throw Error(f(150));
                return U = ue.call(U), fe(O, R, U, G);
              }
              if (typeof U.then == "function")
                return Xe(O, R, vu(U), G);
              if (U.$$typeof === se)
                return Xe(O, R, pu(O, U), G);
              xu(O, U);
            }
            return typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint" ? (U = "" + U, R !== null && R.tag === 6 ? (n(O, R.sibling), G = l(R, U), G.return = O, O = G) : (n(O, R), G = Zr(U, O.mode, G), G.return = O, O = G), o(O)) : n(O, R);
          }
          return function(O, R, U, G) {
            try {
              Pi = 0;
              var ue = Xe(O, R, U, G);
              return ni = null, ue;
            } catch (le) {
              if (le === ti || le === yu)
                throw le;
              var Oe = Vt(29, le, null, O.mode);
              return Oe.lanes = G, Oe.return = O, Oe;
            } finally {
            }
          };
        }
        var yl = Fc(true), Wc = Fc(false), Ea = false;
        function sf(e) {
          e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
        }
        function uf(e, t) {
          e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, callbacks: null });
        }
        function Aa(e) {
          return { lane: e, tag: 0, payload: null, callback: null, next: null };
        }
        function Ra(e, t, n) {
          var a = e.updateQueue;
          if (a === null)
            return null;
          if (a = a.shared, (Me & 2) !== 0) {
            var l = a.pending;
            return l === null ? t.next = t : (t.next = l.next, l.next = t), a.pending = t, t = cu(e), Mc(e, null, n), t;
          }
          return ou(e, a, t, n), cu(e);
        }
        function es(e, t, n) {
          if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
            var a = t.lanes;
            a &= e.pendingLanes, n |= a, t.lanes = n, Qs(e, n);
          }
        }
        function rf(e, t) {
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
        var ff = false;
        function ts() {
          if (ff) {
            var e = ei;
            if (e !== null)
              throw e;
          }
        }
        function ns(e, t, n, a) {
          ff = false;
          var l = e.updateQueue;
          Ea = false;
          var i = l.firstBaseUpdate, o = l.lastBaseUpdate, b = l.shared.pending;
          if (b !== null) {
            l.shared.pending = null;
            var T = b, D = T.next;
            T.next = null, o === null ? i = D : o.next = D, o = T;
            var Q = e.alternate;
            Q !== null && (Q = Q.updateQueue, b = Q.lastBaseUpdate, b !== o && (b === null ? Q.firstBaseUpdate = D : b.next = D, Q.lastBaseUpdate = T));
          }
          if (i !== null) {
            var V = l.baseState;
            o = 0, Q = D = T = null, b = i;
            do {
              var q = b.lane & -536870913, L = q !== b.lane;
              if (L ? (we & q) === q : (a & q) === q) {
                q !== 0 && q === Il && (ff = true), Q !== null && (Q = Q.next = { lane: 0, tag: b.tag, payload: b.payload, callback: null, next: null });
                e: {
                  var ne = e, fe = b;
                  q = t;
                  var Xe = n;
                  switch (fe.tag) {
                    case 1:
                      if (ne = fe.payload, typeof ne == "function") {
                        V = ne.call(Xe, V, q);
                        break e;
                      }
                      V = ne;
                      break e;
                    case 3:
                      ne.flags = ne.flags & -65537 | 128;
                    case 0:
                      if (ne = fe.payload, q = typeof ne == "function" ? ne.call(Xe, V, q) : ne, q == null)
                        break e;
                      V = E({}, V, q);
                      break e;
                    case 2:
                      Ea = true;
                  }
                }
                q = b.callback, q !== null && (e.flags |= 64, L && (e.flags |= 8192), L = l.callbacks, L === null ? l.callbacks = [q] : L.push(q));
              } else
                L = { lane: q, tag: b.tag, payload: b.payload, callback: b.callback, next: null }, Q === null ? (D = Q = L, T = V) : Q = Q.next = L, o |= q;
              if (b = b.next, b === null) {
                if (b = l.shared.pending, b === null)
                  break;
                L = b, b = L.next, L.next = null, l.lastBaseUpdate = L, l.shared.pending = null;
              }
            } while (true);
            Q === null && (T = V), l.baseState = T, l.firstBaseUpdate = D, l.lastBaseUpdate = Q, i === null && (l.shared.lanes = 0), Ua |= o, e.lanes = o, e.memoizedState = V;
          }
        }
        function $c(e, t) {
          if (typeof e != "function")
            throw Error(f(191, e));
          e.call(t);
        }
        function Pc(e, t) {
          var n = e.callbacks;
          if (n !== null)
            for (e.callbacks = null, e = 0; e < n.length; e++)
              $c(n[e], t);
        }
        var ai = _(null), Su = _(0);
        function Ic(e, t) {
          e = fa, k(Su, e), k(ai, t), fa = e | t.baseLanes;
        }
        function of() {
          k(Su, fa), k(ai, ai.current);
        }
        function cf() {
          fa = Su.current, B(ai), B(Su);
        }
        var Zt = _(null), dn = null;
        function Oa(e) {
          var t = e.alternate;
          k(nt, nt.current & 1), k(Zt, e), dn === null && (t === null || ai.current !== null || t.memoizedState !== null) && (dn = e);
        }
        function df(e) {
          k(nt, nt.current), k(Zt, e), dn === null && (dn = e);
        }
        function ed(e) {
          e.tag === 22 ? (k(nt, nt.current), k(Zt, e), dn === null && (dn = e)) : Ca();
        }
        function Ca() {
          k(nt, nt.current), k(Zt, Zt.current);
        }
        function Kt(e) {
          B(Zt), dn === e && (dn = null), B(nt);
        }
        var nt = _(0);
        function _u(e) {
          for (var t = e; t !== null; ) {
            if (t.tag === 13) {
              var n = t.memoizedState;
              if (n !== null && (n = n.dehydrated, n === null || vo(n) || xo(n)))
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
        var ta = 0, be = null, Le = null, ut = null, Nu = false, li = false, bl = false, ju = 0, as = 0, ii = null, gg = 0;
        function Ie() {
          throw Error(f(321));
        }
        function hf(e, t) {
          if (t === null)
            return false;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!kt(e[n], t[n]))
              return false;
          return true;
        }
        function mf(e, t, n, a, l, i) {
          return ta = i, be = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, X.H = e === null || e.memoizedState === null ? qd : Rf, bl = false, i = n(a, l), bl = false, li && (i = nd(t, n, a, l)), td(e), i;
        }
        function td(e) {
          X.H = ss;
          var t = Le !== null && Le.next !== null;
          if (ta = 0, ut = Le = be = null, Nu = false, as = 0, ii = null, t)
            throw Error(f(300));
          e === null || rt || (e = e.dependencies, e !== null && mu(e) && (rt = true));
        }
        function nd(e, t, n, a) {
          be = e;
          var l = 0;
          do {
            if (li && (ii = null), as = 0, li = false, 25 <= l)
              throw Error(f(301));
            if (l += 1, ut = Le = null, e.updateQueue != null) {
              var i = e.updateQueue;
              i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
            }
            X.H = Hd, i = t(n, a);
          } while (li);
          return i;
        }
        function yg() {
          var e = X.H, t = e.useState()[0];
          return t = typeof t.then == "function" ? ls(t) : t, e = e.useState()[0], (Le !== null ? Le.memoizedState : null) !== e && (be.flags |= 1024), t;
        }
        function pf() {
          var e = ju !== 0;
          return ju = 0, e;
        }
        function gf(e, t, n) {
          t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
        }
        function yf(e) {
          if (Nu) {
            for (e = e.memoizedState; e !== null; ) {
              var t = e.queue;
              t !== null && (t.pending = null), e = e.next;
            }
            Nu = false;
          }
          ta = 0, ut = Le = be = null, li = false, as = ju = 0, ii = null;
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
              throw be.alternate === null ? Error(f(467)) : Error(f(310));
            Le = e, e = { memoizedState: Le.memoizedState, baseState: Le.baseState, baseQueue: Le.baseQueue, queue: Le.queue, next: null }, ut === null ? be.memoizedState = ut = e : ut = ut.next = e;
          }
          return ut;
        }
        function Tu() {
          return { lastEffect: null, events: null, stores: null, memoCache: null };
        }
        function ls(e) {
          var t = as;
          return as += 1, ii === null && (ii = []), e = Zc(ii, e, t), t = be, (ut === null ? t.memoizedState : ut.next) === null && (t = t.alternate, X.H = t === null || t.memoizedState === null ? qd : Rf), e;
        }
        function wu(e) {
          if (e !== null && typeof e == "object") {
            if (typeof e.then == "function")
              return ls(e);
            if (e.$$typeof === se)
              return Nt(e);
          }
          throw Error(f(438, String(e)));
        }
        function bf(e) {
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
        function Eu(e) {
          var t = at();
          return vf(t, Le, e);
        }
        function vf(e, t, n) {
          var a = e.queue;
          if (a === null)
            throw Error(f(311));
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
            var b = o = null, T = null, D = t, Q = false;
            do {
              var V = D.lane & -536870913;
              if (V !== D.lane ? (we & V) === V : (ta & V) === V) {
                var q = D.revertLane;
                if (q === 0)
                  T !== null && (T = T.next = { lane: 0, revertLane: 0, gesture: null, action: D.action, hasEagerState: D.hasEagerState, eagerState: D.eagerState, next: null }), V === Il && (Q = true);
                else if ((ta & q) === q) {
                  D = D.next, q === Il && (Q = true);
                  continue;
                } else
                  V = { lane: 0, revertLane: D.revertLane, gesture: null, action: D.action, hasEagerState: D.hasEagerState, eagerState: D.eagerState, next: null }, T === null ? (b = T = V, o = i) : T = T.next = V, be.lanes |= q, Ua |= q;
                V = D.action, bl && n(i, V), i = D.hasEagerState ? D.eagerState : n(i, V);
              } else
                q = { lane: V, revertLane: D.revertLane, gesture: D.gesture, action: D.action, hasEagerState: D.hasEagerState, eagerState: D.eagerState, next: null }, T === null ? (b = T = q, o = i) : T = T.next = q, be.lanes |= V, Ua |= V;
              D = D.next;
            } while (D !== null && D !== t);
            if (T === null ? o = i : T.next = b, !kt(i, e.memoizedState) && (rt = true, Q && (n = ei, n !== null)))
              throw n;
            e.memoizedState = i, e.baseState = o, e.baseQueue = T, a.lastRenderedState = i;
          }
          return l === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
        }
        function xf(e) {
          var t = at(), n = t.queue;
          if (n === null)
            throw Error(f(311));
          n.lastRenderedReducer = e;
          var a = n.dispatch, l = n.pending, i = t.memoizedState;
          if (l !== null) {
            n.pending = null;
            var o = l = l.next;
            do
              i = e(i, o.action), o = o.next;
            while (o !== l);
            kt(i, t.memoizedState) || (rt = true), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
          }
          return [i, a];
        }
        function ad(e, t, n) {
          var a = be, l = at(), i = Ae;
          if (i) {
            if (n === void 0)
              throw Error(f(407));
            n = n();
          } else
            n = t();
          var o = !kt((Le || l).memoizedState, n);
          if (o && (l.memoizedState = n, rt = true), l = l.queue, Nf(sd.bind(null, a, l, e), [e]), l.getSnapshot !== t || o || ut !== null && ut.memoizedState.tag & 1) {
            if (a.flags |= 2048, si(9, { destroy: void 0 }, id.bind(null, a, l, n, t), null), Qe === null)
              throw Error(f(349));
            i || (ta & 127) !== 0 || ld(a, t, n);
          }
          return n;
        }
        function ld(e, t, n) {
          e.flags |= 16384, e = { getSnapshot: t, value: n }, t = be.updateQueue, t === null ? (t = Tu(), be.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
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
            return !kt(e, n);
          } catch (a) {
            return true;
          }
        }
        function rd(e) {
          var t = fl(e, 2);
          t !== null && Lt(t, e, 2);
        }
        function Sf(e) {
          var t = zt();
          if (typeof e == "function") {
            var n = e;
            if (e = n(), bl) {
              Qt(true);
              try {
                n();
              } finally {
                Qt(false);
              }
            }
          }
          return t.memoizedState = t.baseState = e, t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: na, lastRenderedState: e }, t;
        }
        function fd(e, t, n, a) {
          return e.baseState = n, vf(e, Le, typeof a == "function" ? a : na);
        }
        function bg(e, t, n, a, l) {
          if (Ou(e))
            throw Error(f(485));
          if (e = t.action, e !== null) {
            var i = { payload: l, action: e, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(o) {
              i.listeners.push(o);
            } };
            X.T !== null ? n(true) : i.isTransition = false, a(i), n = t.pending, n === null ? (i.next = t.pending = i, od(t, i)) : (i.next = n.next, t.pending = n.next = i);
          }
        }
        function od(e, t) {
          var n = t.action, a = t.payload, l = e.state;
          if (t.isTransition) {
            var i = X.T, o = {};
            X.T = o;
            try {
              var b = n(l, a), T = X.S;
              T !== null && T(o, b), cd(e, t, b);
            } catch (D) {
              _f(e, t, D);
            } finally {
              i !== null && o.types !== null && (i.types = o.types), X.T = i;
            }
          } else
            try {
              i = n(l, a), cd(e, t, i);
            } catch (D) {
              _f(e, t, D);
            }
        }
        function cd(e, t, n) {
          n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(a) {
            dd(e, t, a);
          }, function(a) {
            return _f(e, t, a);
          }) : dd(e, t, n);
        }
        function dd(e, t, n) {
          t.status = "fulfilled", t.value = n, hd(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, od(e, n)));
        }
        function _f(e, t, n) {
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
            var n = Qe.formState;
            if (n !== null) {
              e: {
                var a = be;
                if (Ae) {
                  if (Je) {
                    t: {
                      for (var l = Je, i = cn; l.nodeType !== 8; ) {
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
                  Ta(a);
                }
                a = false;
              }
              a && (t = n[0]);
            }
          }
          return n = zt(), n.memoizedState = n.baseState = t, a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: md, lastRenderedState: t }, n.queue = a, n = Ud.bind(null, be, a), a.dispatch = n, a = Sf(false), i = Af.bind(null, be, false, a.queue), a = zt(), l = { state: t, dispatch: null, action: e, pending: null }, a.queue = l, n = bg.bind(null, be, l, i, n), l.dispatch = n, a.memoizedState = e, [t, n, false];
        }
        function gd(e) {
          var t = at();
          return yd(t, Le, e);
        }
        function yd(e, t, n) {
          if (t = vf(e, t, md)[0], e = Eu(na)[0], typeof t == "object" && t !== null && typeof t.then == "function")
            try {
              var a = ls(t);
            } catch (o) {
              throw o === ti ? yu : o;
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
        function bd(e) {
          var t = at(), n = Le;
          if (n !== null)
            return yd(t, n, e);
          at(), t = t.memoizedState, n = at();
          var a = n.queue.dispatch;
          return n.memoizedState = e, [t, a, false];
        }
        function si(e, t, n, a) {
          return e = { tag: e, create: n, deps: a, inst: t, next: null }, t = be.updateQueue, t === null && (t = Tu(), be.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e;
        }
        function vd() {
          return at().memoizedState;
        }
        function Au(e, t, n, a) {
          var l = zt();
          be.flags |= e, l.memoizedState = si(1 | t, { destroy: void 0 }, n, a === void 0 ? null : a);
        }
        function Ru(e, t, n, a) {
          var l = at();
          a = a === void 0 ? null : a;
          var i = l.memoizedState.inst;
          Le !== null && a !== null && hf(a, Le.memoizedState.deps) ? l.memoizedState = si(t, i, n, a) : (be.flags |= e, l.memoizedState = si(1 | t, i, n, a));
        }
        function xd(e, t) {
          Au(8390656, 8, e, t);
        }
        function Nf(e, t) {
          Ru(2048, 8, e, t);
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
        function Sd(e) {
          var t = at().memoizedState;
          return xg({ ref: t, nextImpl: e }), function() {
            if ((Me & 2) !== 0)
              throw Error(f(440));
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
        function jf() {
        }
        function wd(e, t) {
          var n = at();
          t = t === void 0 ? null : t;
          var a = n.memoizedState;
          return t !== null && hf(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e);
        }
        function Ed(e, t) {
          var n = at();
          t = t === void 0 ? null : t;
          var a = n.memoizedState;
          if (t !== null && hf(t, a[1]))
            return a[0];
          if (a = e(), bl) {
            Qt(true);
            try {
              e();
            } finally {
              Qt(false);
            }
          }
          return n.memoizedState = [a, t], a;
        }
        function Tf(e, t, n) {
          return n === void 0 || (ta & 1073741824) !== 0 && (we & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = Ah(), be.lanes |= e, Ua |= e, n);
        }
        function Ad(e, t, n, a) {
          return kt(n, t) ? n : ai.current !== null ? (e = Tf(e, n, a), kt(e, t) || (rt = true), e) : (ta & 42) === 0 || (ta & 1073741824) !== 0 && (we & 261930) === 0 ? (rt = true, e.memoizedState = n) : (e = Ah(), be.lanes |= e, Ua |= e, t);
        }
        function Rd(e, t, n, a, l) {
          var i = I.p;
          I.p = i !== 0 && 8 > i ? i : 8;
          var o = X.T, b = {};
          X.T = b, Af(e, false, t, n);
          try {
            var T = l(), D = X.S;
            if (D !== null && D(b, T), T !== null && typeof T == "object" && typeof T.then == "function") {
              var Q = pg(T, a);
              is(e, t, Q, Wt(e));
            } else
              is(e, t, a, Wt(e));
          } catch (V) {
            is(e, t, { then: function() {
            }, status: "rejected", reason: V }, Wt());
          } finally {
            I.p = i, o !== null && b.types !== null && (o.types = b.types), X.T = o;
          }
        }
        function Sg() {
        }
        function wf(e, t, n, a) {
          if (e.tag !== 5)
            throw Error(f(476));
          var l = Od(e).queue;
          Rd(e, l, t, J, n === null ? Sg : function() {
            return Cd(e), n(a);
          });
        }
        function Od(e) {
          var t = e.memoizedState;
          if (t !== null)
            return t;
          t = { memoizedState: J, baseState: J, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: na, lastRenderedState: J }, next: null };
          var n = {};
          return t.next = { memoizedState: n, baseState: n, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: na, lastRenderedState: n }, next: null }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
        }
        function Cd(e) {
          var t = Od(e);
          t.next === null && (t = e.alternate.memoizedState), is(e, t.next.queue, {}, Wt());
        }
        function Ef() {
          return Nt(_s);
        }
        function zd() {
          return at().memoizedState;
        }
        function Md() {
          return at().memoizedState;
        }
        function _g(e) {
          for (var t = e.return; t !== null; ) {
            switch (t.tag) {
              case 24:
              case 3:
                var n = Wt();
                e = Aa(n);
                var a = Ra(t, e, n);
                a !== null && (Lt(a, t, n), es(a, t, n)), t = { cache: tf() }, e.payload = t;
                return;
            }
            t = t.return;
          }
        }
        function Ng(e, t, n) {
          var a = Wt();
          n = { lane: a, revertLane: 0, gesture: null, action: n, hasEagerState: false, eagerState: null, next: null }, Ou(e) ? Dd(t, n) : (n = kr(e, t, n, a), n !== null && (Lt(n, e, a), Bd(n, t, a)));
        }
        function Ud(e, t, n) {
          var a = Wt();
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
                var o = t.lastRenderedState, b = i(o, n);
                if (l.hasEagerState = true, l.eagerState = b, kt(b, o))
                  return ou(e, t, l, 0), Qe === null && fu(), false;
              } catch (T) {
              } finally {
              }
            if (n = kr(e, t, l, a), n !== null)
              return Lt(n, e, a), Bd(n, t, a), true;
          }
          return false;
        }
        function Af(e, t, n, a) {
          if (a = { lane: 2, revertLane: so(), gesture: null, action: a, hasEagerState: false, eagerState: null, next: null }, Ou(e)) {
            if (t)
              throw Error(f(479));
          } else
            t = kr(e, n, a, 2), t !== null && Lt(t, e, 2);
        }
        function Ou(e) {
          var t = e.alternate;
          return e === be || t !== null && t === be;
        }
        function Dd(e, t) {
          li = Nu = true;
          var n = e.pending;
          n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
        }
        function Bd(e, t, n) {
          if ((n & 4194048) !== 0) {
            var a = t.lanes;
            a &= e.pendingLanes, n |= a, t.lanes = n, Qs(e, n);
          }
        }
        var ss = { readContext: Nt, use: wu, useCallback: Ie, useContext: Ie, useEffect: Ie, useImperativeHandle: Ie, useLayoutEffect: Ie, useInsertionEffect: Ie, useMemo: Ie, useReducer: Ie, useRef: Ie, useState: Ie, useDebugValue: Ie, useDeferredValue: Ie, useTransition: Ie, useSyncExternalStore: Ie, useId: Ie, useHostTransitionStatus: Ie, useFormState: Ie, useActionState: Ie, useOptimistic: Ie, useMemoCache: Ie, useCacheRefresh: Ie };
        ss.useEffectEvent = Ie;
        var qd = { readContext: Nt, use: wu, useCallback: function(e, t) {
          return zt().memoizedState = [e, t === void 0 ? null : t], e;
        }, useContext: Nt, useEffect: xd, useImperativeHandle: function(e, t, n) {
          n = n != null ? n.concat([e]) : null, Au(4194308, 4, jd.bind(null, t, e), n);
        }, useLayoutEffect: function(e, t) {
          return Au(4194308, 4, e, t);
        }, useInsertionEffect: function(e, t) {
          Au(4, 2, e, t);
        }, useMemo: function(e, t) {
          var n = zt();
          t = t === void 0 ? null : t;
          var a = e();
          if (bl) {
            Qt(true);
            try {
              e();
            } finally {
              Qt(false);
            }
          }
          return n.memoizedState = [a, t], a;
        }, useReducer: function(e, t, n) {
          var a = zt();
          if (n !== void 0) {
            var l = n(t);
            if (bl) {
              Qt(true);
              try {
                n(t);
              } finally {
                Qt(false);
              }
            }
          } else
            l = t;
          return a.memoizedState = a.baseState = l, e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: l }, a.queue = e, e = e.dispatch = Ng.bind(null, be, e), [a.memoizedState, e];
        }, useRef: function(e) {
          var t = zt();
          return e = { current: e }, t.memoizedState = e;
        }, useState: function(e) {
          e = Sf(e);
          var t = e.queue, n = Ud.bind(null, be, t);
          return t.dispatch = n, [e.memoizedState, n];
        }, useDebugValue: jf, useDeferredValue: function(e, t) {
          var n = zt();
          return Tf(n, e, t);
        }, useTransition: function() {
          var e = Sf(false);
          return e = Rd.bind(null, be, e.queue, true, false), zt().memoizedState = e, [false, e];
        }, useSyncExternalStore: function(e, t, n) {
          var a = be, l = zt();
          if (Ae) {
            if (n === void 0)
              throw Error(f(407));
            n = n();
          } else {
            if (n = t(), Qe === null)
              throw Error(f(349));
            (we & 127) !== 0 || ld(a, t, n);
          }
          l.memoizedState = n;
          var i = { value: n, getSnapshot: t };
          return l.queue = i, xd(sd.bind(null, a, i, e), [e]), a.flags |= 2048, si(9, { destroy: void 0 }, id.bind(null, a, i, n, t), null), n;
        }, useId: function() {
          var e = zt(), t = Qe.identifierPrefix;
          if (Ae) {
            var n = qn, a = Bn;
            n = (a & ~(1 << 32 - Et(a) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = ju++, 0 < n && (t += "H" + n.toString(32)), t += "_";
          } else
            n = gg++, t = "_" + t + "r_" + n.toString(32) + "_";
          return e.memoizedState = t;
        }, useHostTransitionStatus: Ef, useFormState: pd, useActionState: pd, useOptimistic: function(e) {
          var t = zt();
          t.memoizedState = t.baseState = e;
          var n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
          return t.queue = n, t = Af.bind(null, be, true, n), n.dispatch = t, [e, t];
        }, useMemoCache: bf, useCacheRefresh: function() {
          return zt().memoizedState = _g.bind(null, be);
        }, useEffectEvent: function(e) {
          var t = zt(), n = { impl: e };
          return t.memoizedState = n, function() {
            if ((Me & 2) !== 0)
              throw Error(f(440));
            return n.impl.apply(void 0, arguments);
          };
        } }, Rf = { readContext: Nt, use: wu, useCallback: wd, useContext: Nt, useEffect: Nf, useImperativeHandle: Td, useInsertionEffect: _d, useLayoutEffect: Nd, useMemo: Ed, useReducer: Eu, useRef: vd, useState: function() {
          return Eu(na);
        }, useDebugValue: jf, useDeferredValue: function(e, t) {
          var n = at();
          return Ad(n, Le.memoizedState, e, t);
        }, useTransition: function() {
          var e = Eu(na)[0], t = at().memoizedState;
          return [typeof e == "boolean" ? e : ls(e), t];
        }, useSyncExternalStore: ad, useId: zd, useHostTransitionStatus: Ef, useFormState: gd, useActionState: gd, useOptimistic: function(e, t) {
          var n = at();
          return fd(n, Le, e, t);
        }, useMemoCache: bf, useCacheRefresh: Md };
        Rf.useEffectEvent = Sd;
        var Hd = { readContext: Nt, use: wu, useCallback: wd, useContext: Nt, useEffect: Nf, useImperativeHandle: Td, useInsertionEffect: _d, useLayoutEffect: Nd, useMemo: Ed, useReducer: xf, useRef: vd, useState: function() {
          return xf(na);
        }, useDebugValue: jf, useDeferredValue: function(e, t) {
          var n = at();
          return Le === null ? Tf(n, e, t) : Ad(n, Le.memoizedState, e, t);
        }, useTransition: function() {
          var e = xf(na)[0], t = at().memoizedState;
          return [typeof e == "boolean" ? e : ls(e), t];
        }, useSyncExternalStore: ad, useId: zd, useHostTransitionStatus: Ef, useFormState: bd, useActionState: bd, useOptimistic: function(e, t) {
          var n = at();
          return Le !== null ? fd(n, Le, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
        }, useMemoCache: bf, useCacheRefresh: Md };
        Hd.useEffectEvent = Sd;
        function Of(e, t, n, a) {
          t = e.memoizedState, n = n(a, t), n = n == null ? t : E({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
        }
        var Cf = { enqueueSetState: function(e, t, n) {
          e = e._reactInternals;
          var a = Wt(), l = Aa(a);
          l.payload = t, n != null && (l.callback = n), t = Ra(e, l, a), t !== null && (Lt(t, e, a), es(t, e, a));
        }, enqueueReplaceState: function(e, t, n) {
          e = e._reactInternals;
          var a = Wt(), l = Aa(a);
          l.tag = 1, l.payload = t, n != null && (l.callback = n), t = Ra(e, l, a), t !== null && (Lt(t, e, a), es(t, e, a));
        }, enqueueForceUpdate: function(e, t) {
          e = e._reactInternals;
          var n = Wt(), a = Aa(n);
          a.tag = 2, t != null && (a.callback = t), t = Ra(e, a, n), t !== null && (Lt(t, e, n), es(t, e, n));
        } };
        function Ld(e, t, n, a, l, i, o) {
          return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, i, o) : t.prototype && t.prototype.isPureReactComponent ? !Zi(n, a) || !Zi(l, i) : true;
        }
        function Yd(e, t, n, a) {
          e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && Cf.enqueueReplaceState(t, t.state, null);
        }
        function vl(e, t) {
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
        function Xd(e) {
          ru(e);
        }
        function Qd(e) {
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
        function zf(e, t, n) {
          return n = Aa(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
            Cu(e, t);
          }, n;
        }
        function Vd(e) {
          return e = Aa(e), e.tag = 3, e;
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
          var o = n.stateNode;
          o !== null && typeof o.componentDidCatch == "function" && (e.callback = function() {
            kd(t, n, a), typeof l != "function" && (Da === null ? Da = /* @__PURE__ */ new Set([this]) : Da.add(this));
            var b = a.stack;
            this.componentDidCatch(a.value, { componentStack: b !== null ? b : "" });
          });
        }
        function jg(e, t, n, a, l) {
          if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
            if (t = n.alternate, t !== null && Pl(t, n, l, true), n = Zt.current, n !== null) {
              switch (n.tag) {
                case 31:
                case 13:
                  return dn === null ? Gu() : n.alternate === null && et === 0 && (et = 3), n.flags &= -257, n.flags |= 65536, n.lanes = l, a === bu ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), ao(e, a, l)), false;
                case 22:
                  return n.flags |= 65536, a === bu ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([a]) }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), ao(e, a, l)), false;
              }
              throw Error(f(435, n.tag));
            }
            return ao(e, a, l), Gu(), false;
          }
          if (Ae)
            return t = Zt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = l, a !== Wr && (e = Error(f(422), { cause: a }), Fi(rn(e, n)))) : (a !== Wr && (t = Error(f(423), { cause: a }), Fi(rn(t, n))), e = e.current.alternate, e.flags |= 65536, l &= -l, e.lanes |= l, a = rn(a, n), l = zf(e.stateNode, a, l), rf(e, l), et !== 4 && (et = 2)), false;
          var i = Error(f(520), { cause: a });
          if (i = rn(i, n), ms === null ? ms = [i] : ms.push(i), et !== 4 && (et = 2), t === null)
            return true;
          a = rn(a, n), n = t;
          do {
            switch (n.tag) {
              case 3:
                return n.flags |= 65536, e = l & -l, n.lanes |= e, e = zf(n.stateNode, a, e), rf(n, e), false;
              case 1:
                if (t = n.type, i = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Da === null || !Da.has(i))))
                  return n.flags |= 65536, l &= -l, n.lanes |= l, l = Vd(l), Zd(l, e, n, a), rf(n, l), false;
            }
            n = n.return;
          } while (n !== null);
          return false;
        }
        var Mf = Error(f(461)), rt = false;
        function jt(e, t, n, a) {
          t.child = e === null ? Wc(t, null, n, a) : yl(t, e.child, n, a);
        }
        function Kd(e, t, n, a, l) {
          n = n.render;
          var i = t.ref;
          if ("ref" in a) {
            var o = {};
            for (var b in a)
              b !== "ref" && (o[b] = a[b]);
          } else
            o = a;
          return hl(t), a = mf(e, t, n, o, i, l), b = pf(), e !== null && !rt ? (gf(e, t, l), aa(e, t, l)) : (Ae && b && Jr(t), t.flags |= 1, jt(e, t, a, l), t.child);
        }
        function Jd(e, t, n, a, l) {
          if (e === null) {
            var i = n.type;
            return typeof i == "function" && !Vr(i) && i.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = i, Fd(e, t, i, a, l)) : (e = du(n.type, null, a, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
          }
          if (i = e.child, !Xf(e, l)) {
            var o = i.memoizedProps;
            if (n = n.compare, n = n !== null ? n : Zi, n(o, a) && e.ref === t.ref)
              return aa(e, t, l);
          }
          return t.flags |= 1, e = $n(i, a), e.ref = t.ref, e.return = t, t.child = e;
        }
        function Fd(e, t, n, a, l) {
          if (e !== null) {
            var i = e.memoizedProps;
            if (Zi(i, a) && e.ref === t.ref)
              if (rt = false, t.pendingProps = a = i, Xf(e, l))
                (e.flags & 131072) !== 0 && (rt = true);
              else
                return t.lanes = e.lanes, aa(e, t, l);
          }
          return Uf(e, t, n, a, l);
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
              t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && gu(t, i !== null ? i.cachePool : null), i !== null ? Ic(t, i) : of(), ed(t);
            else
              return a = t.lanes = 536870912, $d(e, t, i !== null ? i.baseLanes | n : n, n, a);
          } else
            i !== null ? (gu(t, i.cachePool), Ic(t, i), Ca(), t.memoizedState = null) : (e !== null && gu(t, null), of(), Ca());
          return jt(e, t, l, n), t.child;
        }
        function us(e, t) {
          return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), t.sibling;
        }
        function $d(e, t, n, a, l) {
          var i = af();
          return i = i === null ? null : { parent: st._currentValue, pool: i }, t.memoizedState = { baseLanes: n, cachePool: i }, e !== null && gu(t, null), of(), ed(t), e !== null && Pl(e, t, a, true), t.childLanes = l, null;
        }
        function zu(e, t) {
          return t = Uu({ mode: t.mode, children: t.children }, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
        }
        function Pd(e, t, n) {
          return yl(t, e.child, null, n), e = zu(t, t.pendingProps), e.flags |= 2, Kt(t), t.memoizedState = null, e;
        }
        function Tg(e, t, n) {
          var a = t.pendingProps, l = (t.flags & 128) !== 0;
          if (t.flags &= -129, e === null) {
            if (Ae) {
              if (a.mode === "hidden")
                return e = zu(t, a), t.lanes = 536870912, us(null, e);
              if (df(t), (e = Je) ? (e = om(e, cn), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = { dehydrated: e, treeContext: Na !== null ? { id: Bn, overflow: qn } : null, retryLane: 536870912, hydrationErrors: null }, n = Dc(e), n.return = t, t.child = n, _t = t, Je = null)) : e = null, e === null)
                throw Ta(t);
              return t.lanes = 536870912, null;
            }
            return zu(t, a);
          }
          var i = e.memoizedState;
          if (i !== null) {
            var o = i.dehydrated;
            if (df(t), l)
              if (t.flags & 256)
                t.flags &= -257, t = Pd(e, t, n);
              else if (t.memoizedState !== null)
                t.child = e.child, t.flags |= 128, t = null;
              else
                throw Error(f(558));
            else if (rt || Pl(e, t, n, false), l = (n & e.childLanes) !== 0, rt || l) {
              if (a = Qe, a !== null && (o = Gs(a, n), o !== 0 && o !== i.retryLane))
                throw i.retryLane = o, fl(e, o), Lt(a, e, o), Mf;
              Gu(), t = Pd(e, t, n);
            } else
              e = i.treeContext, Je = hn(o.nextSibling), _t = t, Ae = true, ja = null, cn = false, e !== null && Hc(t, e), t = zu(t, a), t.flags |= 4096;
            return t;
          }
          return e = $n(e.child, { mode: a.mode, children: a.children }), e.ref = t.ref, t.child = e, e.return = t, e;
        }
        function Mu(e, t) {
          var n = t.ref;
          if (n === null)
            e !== null && e.ref !== null && (t.flags |= 4194816);
          else {
            if (typeof n != "function" && typeof n != "object")
              throw Error(f(284));
            (e === null || e.ref !== n) && (t.flags |= 4194816);
          }
        }
        function Uf(e, t, n, a, l) {
          return hl(t), n = mf(e, t, n, a, void 0, l), a = pf(), e !== null && !rt ? (gf(e, t, l), aa(e, t, l)) : (Ae && a && Jr(t), t.flags |= 1, jt(e, t, n, l), t.child);
        }
        function Id(e, t, n, a, l, i) {
          return hl(t), t.updateQueue = null, n = nd(t, a, n, l), td(e), a = pf(), e !== null && !rt ? (gf(e, t, i), aa(e, t, i)) : (Ae && a && Jr(t), t.flags |= 1, jt(e, t, n, i), t.child);
        }
        function eh(e, t, n, a, l) {
          if (hl(t), t.stateNode === null) {
            var i = Jl, o = n.contextType;
            typeof o == "object" && o !== null && (i = Nt(o)), i = new n(a, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Cf, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = a, i.state = t.memoizedState, i.refs = {}, sf(t), o = n.contextType, i.context = typeof o == "object" && o !== null ? Nt(o) : Jl, i.state = t.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (Of(t, n, o, a), i.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (o = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), o !== i.state && Cf.enqueueReplaceState(i, i.state, null), ns(t, a, i, l), ts(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = true;
          } else if (e === null) {
            i = t.stateNode;
            var b = t.memoizedProps, T = vl(n, b);
            i.props = T;
            var D = i.context, Q = n.contextType;
            o = Jl, typeof Q == "object" && Q !== null && (o = Nt(Q));
            var V = n.getDerivedStateFromProps;
            Q = typeof V == "function" || typeof i.getSnapshotBeforeUpdate == "function", b = t.pendingProps !== b, Q || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (b || D !== o) && Yd(t, i, a, o), Ea = false;
            var q = t.memoizedState;
            i.state = q, ns(t, a, i, l), ts(), D = t.memoizedState, b || q !== D || Ea ? (typeof V == "function" && (Of(t, n, V, a), D = t.memoizedState), (T = Ea || Ld(t, n, T, a, q, D, o)) ? (Q || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = D), i.props = a, i.state = D, i.context = o, a = T) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = false);
          } else {
            i = t.stateNode, uf(e, t), o = t.memoizedProps, Q = vl(n, o), i.props = Q, V = t.pendingProps, q = i.context, D = n.contextType, T = Jl, typeof D == "object" && D !== null && (T = Nt(D)), b = n.getDerivedStateFromProps, (D = typeof b == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (o !== V || q !== T) && Yd(t, i, a, T), Ea = false, q = t.memoizedState, i.state = q, ns(t, a, i, l), ts();
            var L = t.memoizedState;
            o !== V || q !== L || Ea || e !== null && e.dependencies !== null && mu(e.dependencies) ? (typeof b == "function" && (Of(t, n, b, a), L = t.memoizedState), (Q = Ea || Ld(t, n, Q, a, q, L, T) || e !== null && e.dependencies !== null && mu(e.dependencies)) ? (D || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, L, T), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(a, L, T)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || o === e.memoizedProps && q === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && q === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = L), i.props = a, i.state = L, i.context = T, a = Q) : (typeof i.componentDidUpdate != "function" || o === e.memoizedProps && q === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && q === e.memoizedState || (t.flags |= 1024), a = false);
          }
          return i = a, Mu(e, t), a = (t.flags & 128) !== 0, i || a ? (i = t.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && a ? (t.child = yl(t, e.child, null, l), t.child = yl(t, null, n, l)) : jt(e, t, n, l), t.memoizedState = i.state, e = t.child) : e = aa(e, t, l), e;
        }
        function th(e, t, n, a) {
          return cl(), t.flags |= 256, jt(e, t, n, a), t.child;
        }
        var Df = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
        function Bf(e) {
          return { baseLanes: e, cachePool: kc() };
        }
        function qf(e, t, n) {
          return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Ft), e;
        }
        function nh(e, t, n) {
          var a = t.pendingProps, l = false, i = (t.flags & 128) !== 0, o;
          if ((o = i) || (o = e !== null && e.memoizedState === null ? false : (nt.current & 2) !== 0), o && (l = true, t.flags &= -129), o = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
            if (Ae) {
              if (l ? Oa(t) : Ca(), (e = Je) ? (e = om(e, cn), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = { dehydrated: e, treeContext: Na !== null ? { id: Bn, overflow: qn } : null, retryLane: 536870912, hydrationErrors: null }, n = Dc(e), n.return = t, t.child = n, _t = t, Je = null)) : e = null, e === null)
                throw Ta(t);
              return xo(e) ? t.lanes = 32 : t.lanes = 536870912, null;
            }
            var b = a.children;
            return a = a.fallback, l ? (Ca(), l = t.mode, b = Uu({ mode: "hidden", children: b }, l), a = ol(a, l, n, null), b.return = t, a.return = t, b.sibling = a, t.child = b, a = t.child, a.memoizedState = Bf(n), a.childLanes = qf(e, o, n), t.memoizedState = Df, us(null, a)) : (Oa(t), Hf(t, b));
          }
          var T = e.memoizedState;
          if (T !== null && (b = T.dehydrated, b !== null)) {
            if (i)
              t.flags & 256 ? (Oa(t), t.flags &= -257, t = Lf(e, t, n)) : t.memoizedState !== null ? (Ca(), t.child = e.child, t.flags |= 128, t = null) : (Ca(), b = a.fallback, l = t.mode, a = Uu({ mode: "visible", children: a.children }, l), b = ol(b, l, n, null), b.flags |= 2, a.return = t, b.return = t, a.sibling = b, t.child = a, yl(t, e.child, null, n), a = t.child, a.memoizedState = Bf(n), a.childLanes = qf(e, o, n), t.memoizedState = Df, t = us(null, a));
            else if (Oa(t), xo(b)) {
              if (o = b.nextSibling && b.nextSibling.dataset, o)
                var D = o.dgst;
              o = D, a = Error(f(419)), a.stack = "", a.digest = o, Fi({ value: a, source: null, stack: null }), t = Lf(e, t, n);
            } else if (rt || Pl(e, t, n, false), o = (n & e.childLanes) !== 0, rt || o) {
              if (o = Qe, o !== null && (a = Gs(o, n), a !== 0 && a !== T.retryLane))
                throw T.retryLane = a, fl(e, a), Lt(o, e, a), Mf;
              vo(b) || Gu(), t = Lf(e, t, n);
            } else
              vo(b) ? (t.flags |= 192, t.child = e.child, t = null) : (e = T.treeContext, Je = hn(b.nextSibling), _t = t, Ae = true, ja = null, cn = false, e !== null && Hc(t, e), t = Hf(t, a.children), t.flags |= 4096);
            return t;
          }
          return l ? (Ca(), b = a.fallback, l = t.mode, T = e.child, D = T.sibling, a = $n(T, { mode: "hidden", children: a.children }), a.subtreeFlags = T.subtreeFlags & 65011712, D !== null ? b = $n(D, b) : (b = ol(b, l, n, null), b.flags |= 2), b.return = t, a.return = t, a.sibling = b, t.child = a, us(null, a), a = t.child, b = e.child.memoizedState, b === null ? b = Bf(n) : (l = b.cachePool, l !== null ? (T = st._currentValue, l = l.parent !== T ? { parent: T, pool: T } : l) : l = kc(), b = { baseLanes: b.baseLanes | n, cachePool: l }), a.memoizedState = b, a.childLanes = qf(e, o, n), t.memoizedState = Df, us(e.child, a)) : (Oa(t), n = e.child, e = n.sibling, n = $n(n, { mode: "visible", children: a.children }), n.return = t, n.sibling = null, e !== null && (o = t.deletions, o === null ? (t.deletions = [e], t.flags |= 16) : o.push(e)), t.child = n, t.memoizedState = null, n);
        }
        function Hf(e, t) {
          return t = Uu({ mode: "visible", children: t }, e.mode), t.return = e, e.child = t;
        }
        function Uu(e, t) {
          return e = Vt(22, e, null, t), e.lanes = 0, e;
        }
        function Lf(e, t, n) {
          return yl(t, e.child, null, n), e = Hf(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
        }
        function ah(e, t, n) {
          e.lanes |= t;
          var a = e.alternate;
          a !== null && (a.lanes |= t), Ir(e.return, t, n);
        }
        function Yf(e, t, n, a, l, i) {
          var o = e.memoizedState;
          o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: a, tail: n, tailMode: l, treeForkCount: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = a, o.tail = n, o.tailMode = l, o.treeForkCount = i);
        }
        function lh(e, t, n) {
          var a = t.pendingProps, l = a.revealOrder, i = a.tail;
          a = a.children;
          var o = nt.current, b = (o & 2) !== 0;
          if (b ? (o = o & 1 | 2, t.flags |= 128) : o &= 1, k(nt, o), jt(e, t, a, n), a = Ae ? Ji : 0, !b && e !== null && (e.flags & 128) !== 0)
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
              n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Yf(t, false, l, n, i, a);
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
              Yf(t, true, n, null, i, a);
              break;
            case "together":
              Yf(t, false, null, null, void 0, a);
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
            throw Error(f(153));
          if (t.child !== null) {
            for (e = t.child, n = $n(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
              e = e.sibling, n = n.sibling = $n(e, e.pendingProps), n.return = t;
            n.sibling = null;
          }
          return t.child;
        }
        function Xf(e, t) {
          return (e.lanes & t) !== 0 ? true : (e = e.dependencies, !!(e !== null && mu(e)));
        }
        function wg(e, t, n) {
          switch (t.tag) {
            case 3:
              ct(t, t.stateNode.containerInfo), wa(t, st, e.memoizedState.cache), cl();
              break;
            case 27:
            case 5:
              St(t);
              break;
            case 4:
              ct(t, t.stateNode.containerInfo);
              break;
            case 10:
              wa(t, t.type, t.memoizedProps.value);
              break;
            case 31:
              if (t.memoizedState !== null)
                return t.flags |= 128, df(t), null;
              break;
            case 13:
              var a = t.memoizedState;
              if (a !== null)
                return a.dehydrated !== null ? (Oa(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? nh(e, t, n) : (Oa(t), e = aa(e, t, n), e !== null ? e.sibling : null);
              Oa(t);
              break;
            case 19:
              var l = (e.flags & 128) !== 0;
              if (a = (n & t.childLanes) !== 0, a || (Pl(e, t, n, false), a = (n & t.childLanes) !== 0), l) {
                if (a)
                  return lh(e, t, n);
                t.flags |= 128;
              }
              if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), k(nt, nt.current), a)
                break;
              return null;
            case 22:
              return t.lanes = 0, Wd(e, t, n, t.pendingProps);
            case 24:
              wa(t, st, e.memoizedState.cache);
          }
          return aa(e, t, n);
        }
        function ih(e, t, n) {
          if (e !== null)
            if (e.memoizedProps !== t.pendingProps)
              rt = true;
            else {
              if (!Xf(e, n) && (t.flags & 128) === 0)
                return rt = false, wg(e, t, n);
              rt = (e.flags & 131072) !== 0;
            }
          else
            rt = false, Ae && (t.flags & 1048576) !== 0 && qc(t, Ji, t.index);
          switch (t.lanes = 0, t.tag) {
            case 16:
              e: {
                var a = t.pendingProps;
                if (e = pl(t.elementType), t.type = e, typeof e == "function")
                  Vr(e) ? (a = vl(e, a), t.tag = 1, t = eh(null, t, e, a, n)) : (t.tag = 0, t = Uf(null, t, e, a, n));
                else {
                  if (e != null) {
                    var l = e.$$typeof;
                    if (l === ve) {
                      t.tag = 11, t = Kd(null, t, e, a, n);
                      break e;
                    } else if (l === ce) {
                      t.tag = 14, t = Jd(null, t, e, a, n);
                      break e;
                    }
                  }
                  throw t = ze(e) || e, Error(f(306, t, ""));
                }
              }
              return t;
            case 0:
              return Uf(e, t, t.type, t.pendingProps, n);
            case 1:
              return a = t.type, l = vl(a, t.pendingProps), eh(e, t, a, l, n);
            case 3:
              e: {
                if (ct(t, t.stateNode.containerInfo), e === null)
                  throw Error(f(387));
                a = t.pendingProps;
                var i = t.memoizedState;
                l = i.element, uf(e, t), ns(t, a, null, n);
                var o = t.memoizedState;
                if (a = o.cache, wa(t, st, a), a !== i.cache && ef(t, [st], n, true), ts(), a = o.element, i.isDehydrated)
                  if (i = { element: a, isDehydrated: false, cache: o.cache }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                    t = th(e, t, a, n);
                    break e;
                  } else if (a !== l) {
                    l = rn(Error(f(424)), t), Fi(l), t = th(e, t, a, n);
                    break e;
                  } else {
                    switch (e = t.stateNode.containerInfo, e.nodeType) {
                      case 9:
                        e = e.body;
                        break;
                      default:
                        e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                    }
                    for (Je = hn(e.firstChild), _t = t, Ae = true, ja = null, cn = true, n = Wc(t, null, a, n), t.child = n; n; )
                      n.flags = n.flags & -3 | 4096, n = n.sibling;
                  }
                else {
                  if (cl(), a === l) {
                    t = aa(e, t, n);
                    break e;
                  }
                  jt(e, t, a, n);
                }
                t = t.child;
              }
              return t;
            case 26:
              return Mu(e, t), e === null ? (n = gm(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : Ae || (n = t.type, e = t.pendingProps, a = Wu(xe.current).createElement(n), a[dt] = t, a[gt] = e, Tt(a, n, e), $e(a), t.stateNode = a) : t.memoizedState = gm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
            case 27:
              return St(t), e === null && Ae && (a = t.stateNode = hm(t.type, t.pendingProps, xe.current), _t = t, cn = true, l = Je, La(t.type) ? (So = l, Je = hn(a.firstChild)) : Je = l), jt(e, t, t.pendingProps.children, n), Mu(e, t), e === null && (t.flags |= 4194304), t.child;
            case 5:
              return e === null && Ae && ((l = a = Je) && (a = n0(a, t.type, t.pendingProps, cn), a !== null ? (t.stateNode = a, _t = t, Je = hn(a.firstChild), cn = false, l = true) : l = false), l || Ta(t)), St(t), l = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, a = i.children, go(l, i) ? a = null : o !== null && go(l, o) && (t.flags |= 32), t.memoizedState !== null && (l = mf(e, t, yg, null, null, n), _s._currentValue = l), Mu(e, t), jt(e, t, a, n), t.child;
            case 6:
              return e === null && Ae && ((e = n = Je) && (n = a0(n, t.pendingProps, cn), n !== null ? (t.stateNode = n, _t = t, Je = null, e = true) : e = false), e || Ta(t)), null;
            case 13:
              return nh(e, t, n);
            case 4:
              return ct(t, t.stateNode.containerInfo), a = t.pendingProps, e === null ? t.child = yl(t, null, a, n) : jt(e, t, a, n), t.child;
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
              return l = t.type._context, a = t.pendingProps.children, hl(t), l = Nt(l), a = a(l), t.flags |= 1, jt(e, t, a, n), t.child;
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
              return hl(t), a = Nt(st), e === null ? (l = af(), l === null && (l = Qe, i = tf(), l.pooledCache = i, i.refCount++, i !== null && (l.pooledCacheLanes |= n), l = i), t.memoizedState = { parent: a, cache: l }, sf(t), wa(t, st, l)) : ((e.lanes & n) !== 0 && (uf(e, t), ns(t, null, null, n), ts()), l = e.memoizedState, i = t.memoizedState, l.parent !== a ? (l = { parent: a, cache: a }, t.memoizedState = l, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = l), wa(t, st, a)) : (a = i.cache, wa(t, st, a), a !== l.cache && ef(t, [st], n, true))), jt(e, t, t.pendingProps.children, n), t.child;
            case 29:
              throw t.pendingProps;
          }
          throw Error(f(156, t.tag));
        }
        function la(e) {
          e.flags |= 4;
        }
        function Qf(e, t, n, a, l) {
          if ((t = (e.mode & 32) !== 0) && (t = false), t) {
            if (e.flags |= 16777216, (l & 335544128) === l)
              if (e.stateNode.complete)
                e.flags |= 8192;
              else if (zh())
                e.flags |= 8192;
              else
                throw gl = bu, lf;
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
              throw gl = bu, lf;
        }
        function Du(e, t) {
          t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Ys() : 536870912, e.lanes |= t, oi |= t);
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
        function Eg(e, t, n) {
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
              return Fe(t), null;
            case 1:
              return Fe(t), null;
            case 3:
              return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), ea(st), Ze(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && ($l(t) ? la(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, $r())), Fe(t), null;
            case 26:
              var l = t.type, i = t.memoizedState;
              return e === null ? (la(t), i !== null ? (Fe(t), sh(t, i)) : (Fe(t), Qf(t, l, null, a, n))) : i ? i !== e.memoizedState ? (la(t), Fe(t), sh(t, i)) : (Fe(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && la(t), Fe(t), Qf(t, l, e, a, n)), null;
            case 27:
              if (pa(t), n = xe.current, l = t.type, e !== null && t.stateNode != null)
                e.memoizedProps !== a && la(t);
              else {
                if (!a) {
                  if (t.stateNode === null)
                    throw Error(f(166));
                  return Fe(t), null;
                }
                e = K.current, $l(t) ? Lc(t) : (e = hm(l, a, n), t.stateNode = e, la(t));
              }
              return Fe(t), null;
            case 5:
              if (pa(t), l = t.type, e !== null && t.stateNode != null)
                e.memoizedProps !== a && la(t);
              else {
                if (!a) {
                  if (t.stateNode === null)
                    throw Error(f(166));
                  return Fe(t), null;
                }
                if (i = K.current, $l(t))
                  Lc(t);
                else {
                  var o = Wu(xe.current);
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
                  a && la(t);
                }
              }
              return Fe(t), Qf(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
            case 6:
              if (e && t.stateNode != null)
                e.memoizedProps !== a && la(t);
              else {
                if (typeof a != "string" && t.stateNode === null)
                  throw Error(f(166));
                if (e = xe.current, $l(t)) {
                  if (e = t.stateNode, n = t.memoizedProps, a = null, l = _t, l !== null)
                    switch (l.tag) {
                      case 27:
                      case 5:
                        a = l.memoizedProps;
                    }
                  e[dt] = t, e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === true || nm(e.nodeValue, n)), e || Ta(t, true);
                } else
                  e = Wu(e).createTextNode(a), e[dt] = t, t.stateNode = e;
              }
              return Fe(t), null;
            case 31:
              if (n = t.memoizedState, e === null || e.memoizedState !== null) {
                if (a = $l(t), n !== null) {
                  if (e === null) {
                    if (!a)
                      throw Error(f(318));
                    if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e)
                      throw Error(f(557));
                    e[dt] = t;
                  } else
                    cl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                  Fe(t), e = false;
                } else
                  n = $r(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = true;
                if (!e)
                  return t.flags & 256 ? (Kt(t), t) : (Kt(t), null);
                if ((t.flags & 128) !== 0)
                  throw Error(f(558));
              }
              return Fe(t), null;
            case 13:
              if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (l = $l(t), a !== null && a.dehydrated !== null) {
                  if (e === null) {
                    if (!l)
                      throw Error(f(318));
                    if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l)
                      throw Error(f(317));
                    l[dt] = t;
                  } else
                    cl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                  Fe(t), l = false;
                } else
                  l = $r(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), l = true;
                if (!l)
                  return t.flags & 256 ? (Kt(t), t) : (Kt(t), null);
              }
              return Kt(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = a !== null, e = e !== null && e.memoizedState !== null, n && (a = t.child, l = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (l = a.alternate.memoizedState.cachePool.pool), i = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool), i !== l && (a.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), Du(t, t.updateQueue), Fe(t), null);
            case 4:
              return Ze(), e === null && oo(t.stateNode.containerInfo), Fe(t), null;
            case 10:
              return ea(t.type), Fe(t), null;
            case 19:
              if (B(nt), a = t.memoizedState, a === null)
                return Fe(t), null;
              if (l = (t.flags & 128) !== 0, i = a.rendering, i === null)
                if (l)
                  rs(a, false);
                else {
                  if (et !== 0 || e !== null && (e.flags & 128) !== 0)
                    for (e = t.child; e !== null; ) {
                      if (i = _u(e), i !== null) {
                        for (t.flags |= 128, rs(a, false), e = i.updateQueue, t.updateQueue = e, Du(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                          Uc(n, e), n = n.sibling;
                        return k(nt, nt.current & 1 | 2), Ae && Pn(t, a.treeForkCount), t.child;
                      }
                      e = e.sibling;
                    }
                  a.tail !== null && Rt() > Yu && (t.flags |= 128, l = true, rs(a, false), t.lanes = 4194304);
                }
              else {
                if (!l)
                  if (e = _u(i), e !== null) {
                    if (t.flags |= 128, l = true, e = e.updateQueue, t.updateQueue = e, Du(t, e), rs(a, true), a.tail === null && a.tailMode === "hidden" && !i.alternate && !Ae)
                      return Fe(t), null;
                  } else
                    2 * Rt() - a.renderingStartTime > Yu && n !== 536870912 && (t.flags |= 128, l = true, rs(a, false), t.lanes = 4194304);
                a.isBackwards ? (i.sibling = t.child, t.child = i) : (e = a.last, e !== null ? e.sibling = i : t.child = i, a.last = i);
              }
              return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = Rt(), e.sibling = null, n = nt.current, k(nt, l ? n & 1 | 2 : n & 1), Ae && Pn(t, a.treeForkCount), e) : (Fe(t), null);
            case 22:
            case 23:
              return Kt(t), cf(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Fe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Fe(t), n = t.updateQueue, n !== null && Du(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), e !== null && B(ml), null;
            case 24:
              return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), ea(st), Fe(t), null;
            case 25:
              return null;
            case 30:
              return null;
          }
          throw Error(f(156, t.tag));
        }
        function Ag(e, t) {
          switch (Fr(t), t.tag) {
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
                  throw Error(f(340));
                cl();
              }
              return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 13:
              if (Kt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                  throw Error(f(340));
                cl();
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
              return Kt(t), cf(), e !== null && B(ml), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 24:
              return ea(st), null;
            case 25:
              return null;
            default:
              return null;
          }
        }
        function uh(e, t) {
          switch (Fr(t), t.tag) {
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
              Kt(t), cf(), e !== null && B(ml);
              break;
            case 24:
              ea(st);
          }
        }
        function fs(e, t) {
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
            qe(t, t.return, b);
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
                  var o = a.inst, b = o.destroy;
                  if (b !== void 0) {
                    o.destroy = void 0, l = t;
                    var T = n, D = b;
                    try {
                      D();
                    } catch (Q) {
                      qe(l, T, Q);
                    }
                  }
                }
                a = a.next;
              } while (a !== i);
            }
          } catch (Q) {
            qe(t, t.return, Q);
          }
        }
        function rh(e) {
          var t = e.updateQueue;
          if (t !== null) {
            var n = e.stateNode;
            try {
              Pc(t, n);
            } catch (a) {
              qe(e, e.return, a);
            }
          }
        }
        function fh(e, t, n) {
          n.props = vl(e.type, e.memoizedProps), n.state = e.memoizedState;
          try {
            n.componentWillUnmount();
          } catch (a) {
            qe(e, t, a);
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
        function oh(e) {
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
        function Gf(e, t, n) {
          try {
            var a = e.stateNode;
            Wg(a, e.type, n, t), a[gt] = t;
          } catch (l) {
            qe(e, e.return, l);
          }
        }
        function ch(e) {
          return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && La(e.type) || e.tag === 4;
        }
        function kf(e) {
          e:
            for (; ; ) {
              for (; e.sibling === null; ) {
                if (e.return === null || ch(e.return))
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
        function Vf(e, t, n) {
          var a = e.tag;
          if (a === 5 || a === 6)
            e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = en));
          else if (a !== 4 && (a === 27 && La(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
            for (Vf(e, t, n), e = e.sibling; e !== null; )
              Vf(e, t, n), e = e.sibling;
        }
        function Bu(e, t, n) {
          var a = e.tag;
          if (a === 5 || a === 6)
            e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (a !== 4 && (a === 27 && La(e.type) && (n = e.stateNode), e = e.child, e !== null))
            for (Bu(e, t, n), e = e.sibling; e !== null; )
              Bu(e, t, n), e = e.sibling;
        }
        function dh(e) {
          var t = e.stateNode, n = e.memoizedProps;
          try {
            for (var a = e.type, l = t.attributes; l.length; )
              t.removeAttributeNode(l[0]);
            Tt(t, a, n), t[dt] = e, t[gt] = n;
          } catch (i) {
            qe(e, e.return, i);
          }
        }
        var ia = false, ft = false, Zf = false, hh = typeof WeakSet == "function" ? WeakSet : Set, vt = null;
        function Rg(e, t) {
          if (e = e.containerInfo, mo = ar, e = Tc(e), Hr(e)) {
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
                  var o = 0, b = -1, T = -1, D = 0, Q = 0, V = e, q = null;
                  t:
                    for (; ; ) {
                      for (var L; V !== n || l !== 0 && V.nodeType !== 3 || (b = o + l), V !== i || a !== 0 && V.nodeType !== 3 || (T = o + a), V.nodeType === 3 && (o += V.nodeValue.length), (L = V.firstChild) !== null; )
                        q = V, V = L;
                      for (; ; ) {
                        if (V === e)
                          break t;
                        if (q === n && ++D === l && (b = o), q === i && ++Q === a && (T = o), (L = V.nextSibling) !== null)
                          break;
                        V = q, q = V.parentNode;
                      }
                      V = L;
                    }
                  n = b === -1 || T === -1 ? null : { start: b, end: T };
                } else
                  n = null;
              }
            n = n || { start: 0, end: 0 };
          } else
            n = null;
          for (po = { focusedElem: e, selectionRange: n }, ar = false, vt = t; vt !== null; )
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
                      } catch (fe) {
                        qe(n, n.return, fe);
                      }
                    }
                    break;
                  case 3:
                    if ((e & 1024) !== 0) {
                      if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9)
                        bo(e);
                      else if (n === 1)
                        switch (e.nodeName) {
                          case "HEAD":
                          case "HTML":
                          case "BODY":
                            bo(e);
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
                      throw Error(f(163));
                }
                if (e = t.sibling, e !== null) {
                  e.return = t.return, vt = e;
                  break;
                }
                vt = t.return;
              }
        }
        function mh(e, t, n) {
          var a = n.flags;
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              ua(e, n), a & 4 && fs(5, n);
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
              a & 64 && rh(n), a & 512 && os(n, n.return);
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
                  Pc(e, t);
                } catch (o) {
                  qe(n, n.return, o);
                }
              }
              break;
            case 27:
              t === null && a & 4 && dh(n);
            case 26:
            case 5:
              ua(e, n), t === null && a & 4 && oh(n), a & 512 && os(n, n.return);
              break;
            case 12:
              ua(e, n);
              break;
            case 31:
              ua(e, n), a & 4 && yh(e, n);
              break;
            case 13:
              ua(e, n), a & 4 && bh(e, n), a & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Hg.bind(null, n), l0(e, n))));
              break;
            case 22:
              if (a = n.memoizedState !== null || ia, !a) {
                t = t !== null && t.memoizedState !== null || ft, l = ia;
                var i = ft;
                ia = a, (ft = t) && !i ? ra(e, n, (n.subtreeFlags & 8772) !== 0) : ua(e, n), ia = l, ft = i;
              }
              break;
            case 30:
              break;
            default:
              ua(e, n);
          }
        }
        function ph(e) {
          var t = e.alternate;
          t !== null && (e.alternate = null, ph(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Mi(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
        }
        var We = null, Dt = false;
        function sa(e, t, n) {
          for (n = n.child; n !== null; )
            gh(e, t, n), n = n.sibling;
        }
        function gh(e, t, n) {
          if (Ot && typeof Ot.onCommitFiberUnmount == "function")
            try {
              Ot.onCommitFiberUnmount(Fa, n);
            } catch (i) {
            }
          switch (n.tag) {
            case 26:
              ft || Hn(n, t), sa(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
              break;
            case 27:
              ft || Hn(n, t);
              var a = We, l = Dt;
              La(n.type) && (We = n.stateNode, Dt = false), sa(e, t, n), vs(n.stateNode), We = a, Dt = l;
              break;
            case 5:
              ft || Hn(n, t);
            case 6:
              if (a = We, l = Dt, We = null, sa(e, t, n), We = a, Dt = l, We !== null)
                if (Dt)
                  try {
                    (We.nodeType === 9 ? We.body : We.nodeName === "HTML" ? We.ownerDocument.body : We).removeChild(n.stateNode);
                  } catch (i) {
                    qe(n, t, i);
                  }
                else
                  try {
                    We.removeChild(n.stateNode);
                  } catch (i) {
                    qe(n, t, i);
                  }
              break;
            case 18:
              We !== null && (Dt ? (e = We, rm(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), bi(e)) : rm(We, n.stateNode));
              break;
            case 4:
              a = We, l = Dt, We = n.stateNode.containerInfo, Dt = true, sa(e, t, n), We = a, Dt = l;
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              za(2, n, t), ft || za(4, n, t), sa(e, t, n);
              break;
            case 1:
              ft || (Hn(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function" && fh(n, t, a)), sa(e, t, n);
              break;
            case 21:
              sa(e, t, n);
              break;
            case 22:
              ft = (a = ft) || n.memoizedState !== null, sa(e, t, n), ft = a;
              break;
            default:
              sa(e, t, n);
          }
        }
        function yh(e, t) {
          if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
            e = e.dehydrated;
            try {
              bi(e);
            } catch (n) {
              qe(t, t.return, n);
            }
          }
        }
        function bh(e, t) {
          if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
            try {
              bi(e);
            } catch (n) {
              qe(t, t.return, n);
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
              throw Error(f(435, e.tag));
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
        function Bt(e, t) {
          var n = t.deletions;
          if (n !== null)
            for (var a = 0; a < n.length; a++) {
              var l = n[a], i = e, o = t, b = o;
              e:
                for (; b !== null; ) {
                  switch (b.tag) {
                    case 27:
                      if (La(b.type)) {
                        We = b.stateNode, Dt = false;
                        break e;
                      }
                      break;
                    case 5:
                      We = b.stateNode, Dt = false;
                      break e;
                    case 3:
                    case 4:
                      We = b.stateNode.containerInfo, Dt = true;
                      break e;
                  }
                  b = b.return;
                }
              if (We === null)
                throw Error(f(160));
              gh(i, o, l), We = null, Dt = false, i = l.alternate, i !== null && (i.return = null), l.return = null;
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
              Bt(t, e), qt(e), a & 4 && (za(3, e, e.return), fs(3, e), za(5, e, e.return));
              break;
            case 1:
              Bt(t, e), qt(e), a & 512 && (ft || n === null || Hn(n, n.return)), a & 64 && ia && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
              break;
            case 26:
              var l = vn;
              if (Bt(t, e), qt(e), a & 512 && (ft || n === null || Hn(n, n.return)), a & 4) {
                var i = n !== null ? n.memoizedState : null;
                if (a = e.memoizedState, n === null)
                  if (a === null)
                    if (e.stateNode === null) {
                      e: {
                        a = e.type, n = e.memoizedProps, l = l.ownerDocument || l;
                        t:
                          switch (a) {
                            case "title":
                              i = l.getElementsByTagName("title")[0], (!i || i[On] || i[dt] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = l.createElement(a), l.head.insertBefore(i, l.querySelector("head > title"))), Tt(i, a, n), i[dt] = e, $e(i), a = i;
                              break e;
                            case "link":
                              var o = vm("link", "href", l).get(a + (n.href || ""));
                              if (o) {
                                for (var b = 0; b < o.length; b++)
                                  if (i = o[b], i.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && i.getAttribute("rel") === (n.rel == null ? null : n.rel) && i.getAttribute("title") === (n.title == null ? null : n.title) && i.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                                    o.splice(b, 1);
                                    break t;
                                  }
                              }
                              i = l.createElement(a), Tt(i, a, n), l.head.appendChild(i);
                              break;
                            case "meta":
                              if (o = vm("meta", "content", l).get(a + (n.content || ""))) {
                                for (b = 0; b < o.length; b++)
                                  if (i = o[b], i.getAttribute("content") === (n.content == null ? null : "" + n.content) && i.getAttribute("name") === (n.name == null ? null : n.name) && i.getAttribute("property") === (n.property == null ? null : n.property) && i.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && i.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                                    o.splice(b, 1);
                                    break t;
                                  }
                              }
                              i = l.createElement(a), Tt(i, a, n), l.head.appendChild(i);
                              break;
                            default:
                              throw Error(f(468, a));
                          }
                        i[dt] = e, $e(i), a = i;
                      }
                      e.stateNode = a;
                    } else
                      xm(l, e.type, e.stateNode);
                  else
                    e.stateNode = bm(l, a, e.memoizedProps);
                else
                  i !== a ? (i === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : i.count--, a === null ? xm(l, e.type, e.stateNode) : bm(l, a, e.memoizedProps)) : a === null && e.stateNode !== null && Gf(e, e.memoizedProps, n.memoizedProps);
              }
              break;
            case 27:
              Bt(t, e), qt(e), a & 512 && (ft || n === null || Hn(n, n.return)), n !== null && a & 4 && Gf(e, e.memoizedProps, n.memoizedProps);
              break;
            case 5:
              if (Bt(t, e), qt(e), a & 512 && (ft || n === null || Hn(n, n.return)), e.flags & 32) {
                l = e.stateNode;
                try {
                  Vn(l, "");
                } catch (ne) {
                  qe(e, e.return, ne);
                }
              }
              a & 4 && e.stateNode != null && (l = e.memoizedProps, Gf(e, l, n !== null ? n.memoizedProps : l)), a & 1024 && (Zf = true);
              break;
            case 6:
              if (Bt(t, e), qt(e), a & 4) {
                if (e.stateNode === null)
                  throw Error(f(162));
                a = e.memoizedProps, n = e.stateNode;
                try {
                  n.nodeValue = a;
                } catch (ne) {
                  qe(e, e.return, ne);
                }
              }
              break;
            case 3:
              if (Iu = null, l = vn, vn = $u(t.containerInfo), Bt(t, e), vn = l, qt(e), a & 4 && n !== null && n.memoizedState.isDehydrated)
                try {
                  bi(t.containerInfo);
                } catch (ne) {
                  qe(e, e.return, ne);
                }
              Zf && (Zf = false, xh(e));
              break;
            case 4:
              a = vn, vn = $u(e.stateNode.containerInfo), Bt(t, e), qt(e), vn = a;
              break;
            case 12:
              Bt(t, e), qt(e);
              break;
            case 31:
              Bt(t, e), qt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, qu(e, a)));
              break;
            case 13:
              Bt(t, e), qt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Lu = Rt()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, qu(e, a)));
              break;
            case 22:
              l = e.memoizedState !== null;
              var T = n !== null && n.memoizedState !== null, D = ia, Q = ft;
              if (ia = D || l, ft = Q || T, Bt(t, e), ft = Q, ia = D, qt(e), a & 8192)
                e:
                  for (t = e.stateNode, t._visibility = l ? t._visibility & -2 : t._visibility | 1, l && (n === null || T || ia || ft || xl(e)), n = null, t = e; ; ) {
                    if (t.tag === 5 || t.tag === 26) {
                      if (n === null) {
                        T = n = t;
                        try {
                          if (i = T.stateNode, l)
                            o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none";
                          else {
                            b = T.stateNode;
                            var V = T.memoizedProps.style, q = V != null && V.hasOwnProperty("display") ? V.display : null;
                            b.style.display = q == null || typeof q == "boolean" ? "" : ("" + q).trim();
                          }
                        } catch (ne) {
                          qe(T, T.return, ne);
                        }
                      }
                    } else if (t.tag === 6) {
                      if (n === null) {
                        T = t;
                        try {
                          T.stateNode.nodeValue = l ? "" : T.memoizedProps;
                        } catch (ne) {
                          qe(T, T.return, ne);
                        }
                      }
                    } else if (t.tag === 18) {
                      if (n === null) {
                        T = t;
                        try {
                          var L = T.stateNode;
                          l ? fm(L, true) : fm(T.stateNode, false);
                        } catch (ne) {
                          qe(T, T.return, ne);
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
              Bt(t, e), qt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, qu(e, a)));
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
                if (ch(a)) {
                  n = a;
                  break;
                }
                a = a.return;
              }
              if (n == null)
                throw Error(f(160));
              switch (n.tag) {
                case 27:
                  var l = n.stateNode, i = kf(e);
                  Bu(e, i, l);
                  break;
                case 5:
                  var o = n.stateNode;
                  n.flags & 32 && (Vn(o, ""), n.flags &= -33);
                  var b = kf(e);
                  Bu(e, b, o);
                  break;
                case 3:
                case 4:
                  var T = n.stateNode.containerInfo, D = kf(e);
                  Vf(e, D, T);
                  break;
                default:
                  throw Error(f(161));
              }
            } catch (Q) {
              qe(e, e.return, Q);
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
        function ua(e, t) {
          if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null; )
              mh(e, t.alternate, t), t = t.sibling;
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
                typeof n.componentWillUnmount == "function" && fh(t, t.return, n), xl(t);
                break;
              case 27:
                vs(t.stateNode);
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
                ra(l, i, n), fs(4, i);
                break;
              case 1:
                if (ra(l, i, n), a = i, l = a.stateNode, typeof l.componentDidMount == "function")
                  try {
                    l.componentDidMount();
                  } catch (D) {
                    qe(a, a.return, D);
                  }
                if (a = i, l = a.updateQueue, l !== null) {
                  var b = a.stateNode;
                  try {
                    var T = l.shared.hiddenCallbacks;
                    if (T !== null)
                      for (l.shared.hiddenCallbacks = null, l = 0; l < T.length; l++)
                        $c(T[l], b);
                  } catch (D) {
                    qe(a, a.return, D);
                  }
                }
                n && o & 64 && rh(i), os(i, i.return);
                break;
              case 27:
                dh(i);
              case 26:
              case 5:
                ra(l, i, n), n && a === null && o & 4 && oh(i), os(i, i.return);
                break;
              case 12:
                ra(l, i, n);
                break;
              case 31:
                ra(l, i, n), n && o & 4 && yh(l, i);
                break;
              case 13:
                ra(l, i, n), n && o & 4 && bh(l, i);
                break;
              case 22:
                i.memoizedState === null && ra(l, i, n), os(i, i.return);
                break;
              case 30:
                break;
              default:
                ra(l, i, n);
            }
            t = t.sibling;
          }
        }
        function Kf(e, t) {
          var n = null;
          e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Wi(n));
        }
        function Jf(e, t) {
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
              xn(e, t, n, a), l & 2048 && fs(9, t);
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
                  var i = t.memoizedProps, o = i.id, b = i.onPostCommit;
                  typeof b == "function" && b(o, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
                } catch (T) {
                  qe(t, t.return, T);
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
              i = t.stateNode, o = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? xn(e, t, n, a) : cs(e, t) : i._visibility & 2 ? xn(e, t, n, a) : (i._visibility |= 2, ui(e, t, n, a, (t.subtreeFlags & 10256) !== 0 || false)), l & 2048 && Kf(o, t);
              break;
            case 24:
              xn(e, t, n, a), l & 2048 && Jf(t.alternate, t);
              break;
            default:
              xn(e, t, n, a);
          }
        }
        function ui(e, t, n, a, l) {
          for (l = l && ((t.subtreeFlags & 10256) !== 0 || false), t = t.child; t !== null; ) {
            var i = e, o = t, b = n, T = a, D = o.flags;
            switch (o.tag) {
              case 0:
              case 11:
              case 15:
                ui(i, o, b, T, l), fs(8, o);
                break;
              case 23:
                break;
              case 22:
                var Q = o.stateNode;
                o.memoizedState !== null ? Q._visibility & 2 ? ui(i, o, b, T, l) : cs(i, o) : (Q._visibility |= 2, ui(i, o, b, T, l)), l && D & 2048 && Kf(o.alternate, o);
                break;
              case 24:
                ui(i, o, b, T, l), l && D & 2048 && Jf(o.alternate, o);
                break;
              default:
                ui(i, o, b, T, l);
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
                  cs(n, a), l & 2048 && Kf(a.alternate, a);
                  break;
                case 24:
                  cs(n, a), l & 2048 && Jf(a.alternate, a);
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
                vt = a, Th(a, e);
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
              hs(e), e.flags & 2048 && za(9, e, e.return);
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
                vt = a, Th(a, e);
              }
            Nh(e);
          }
          for (e = e.child; e !== null; ) {
            switch (t = e, t.tag) {
              case 0:
              case 11:
              case 15:
                za(8, t, t.return), Hu(t);
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
                Wi(n.memoizedState.cache);
            }
            if (a = n.child, a !== null)
              a.return = n, vt = a;
            else
              e:
                for (n = e; vt !== null; ) {
                  a = vt;
                  var l = a.sibling, i = a.return;
                  if (ph(a), a === n) {
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
          var t = Nt(st), n = t.data.get(e);
          return n === void 0 && (n = e(), t.data.set(e, n)), n;
        }, cacheSignal: function() {
          return Nt(st).controller.signal;
        } }, zg = typeof WeakMap == "function" ? WeakMap : Map, Me = 0, Qe = null, je = null, we = 0, Be = 0, Jt = null, Ma = false, fi = false, Ff = false, fa = 0, et = 0, Ua = 0, Sl = 0, Wf = 0, Ft = 0, oi = 0, ms = null, Ht = null, $f = false, Lu = 0, wh = 0, Yu = 1 / 0, Xu = null, Da = null, mt = 0, Ba = null, ci = null, oa = 0, Pf = 0, If = null, Eh = null, ps = 0, eo = null;
        function Wt() {
          return (Me & 2) !== 0 && we !== 0 ? we & -we : X.T !== null ? so() : ks();
        }
        function Ah() {
          if (Ft === 0)
            if ((we & 536870912) === 0 || Ae) {
              var e = Al;
              Al <<= 1, (Al & 3932160) === 0 && (Al = 262144), Ft = e;
            } else
              Ft = 536870912;
          return e = Zt.current, e !== null && (e.flags |= 32), Ft;
        }
        function Lt(e, t, n) {
          (e === Qe && (Be === 2 || Be === 9) || e.cancelPendingCommit !== null) && (di(e, 0), qa(e, we, Ft, false)), Qn(e, n), ((Me & 2) === 0 || e !== Qe) && (e === Qe && ((Me & 2) === 0 && (Sl |= n), et === 4 && qa(e, we, Ft, false)), Ln(e));
        }
        function Rh(e, t, n) {
          if ((Me & 6) !== 0)
            throw Error(f(327));
          var a = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Pa(e, t), l = a ? Dg(e, t) : no(e, t, true), i = a;
          do {
            if (l === 0) {
              fi && !a && qa(e, t, 0, false);
              break;
            } else {
              if (n = e.current.alternate, i && !Mg(n)) {
                l = no(e, t, false), i = false;
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
                    var T = b.current.memoizedState.isDehydrated;
                    if (T && (di(b, o).flags |= 256), o = no(b, o, false), o !== 2) {
                      if (Ff && !T) {
                        b.errorRecoveryDisabledLanes |= i, Sl |= i, l = 4;
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
                    throw Error(f(345));
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
                    throw Error(f(329));
                }
                if ((t & 62914560) === t && (l = Lu + 300 - Rt(), 10 < l)) {
                  if (qa(a, t, Ft, !Ma), Rl(a, 0, true) !== 0)
                    break e;
                  oa = t, a.timeoutHandle = sm(Oh.bind(null, a, n, Ht, Xu, $f, t, Ft, Sl, oi, Ma, i, "Throttled", -0, 0), l);
                  break e;
                }
                Oh(a, n, Ht, Xu, $f, t, Ft, Sl, oi, Ma, i, null, -0, 0);
              }
            }
            break;
          } while (true);
          Ln(e);
        }
        function Oh(e, t, n, a, l, i, o, b, T, D, Q, V, q, L) {
          if (e.timeoutHandle = -1, V = t.subtreeFlags, V & 8192 || (V & 16785408) === 16785408) {
            V = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: true, waitingForViewTransition: false, unsuspend: en }, _h(t, i, V);
            var ne = (i & 62914560) === i ? Lu - Rt() : (i & 4194048) === i ? wh - Rt() : 0;
            if (ne = y0(V, ne), ne !== null) {
              oa = i, e.cancelPendingCommit = ne(Hh.bind(null, e, t, i, n, a, l, o, b, T, Q, V, null, q, L)), qa(e, i, o, !D);
              return;
            }
          }
          Hh(e, t, i, n, a, l, o, b, T);
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
        function qa(e, t, n, a) {
          t &= ~Wf, t &= ~Sl, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
          for (var l = t; 0 < l; ) {
            var i = 31 - Et(l), o = 1 << i;
            a[i] = -1, l &= ~o;
          }
          n !== 0 && Xs(e, n, t);
        }
        function Qu() {
          return (Me & 6) === 0 ? (gs(0), false) : true;
        }
        function to() {
          if (je !== null) {
            if (Be === 0)
              var e = je.return;
            else
              e = je, In = dl = null, yf(e), ni = null, Pi = 0, e = je;
            for (; e !== null; )
              uh(e.alternate, e), e = e.return;
            je = null;
          }
        }
        function di(e, t) {
          var n = e.timeoutHandle;
          n !== -1 && (e.timeoutHandle = -1, Ig(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), oa = 0, to(), Qe = e, je = n = $n(e.current, null), we = t, Be = 0, Jt = null, Ma = false, fi = Pa(e, t), Ff = false, oi = Ft = Wf = Sl = Ua = et = 0, Ht = ms = null, $f = false, (t & 8) !== 0 && (t |= t & 32);
          var a = e.entangledLanes;
          if (a !== 0)
            for (e = e.entanglements, a &= t; 0 < a; ) {
              var l = 31 - Et(a), i = 1 << l;
              t |= e[l], a &= ~i;
            }
          return fa = t, fu(), n;
        }
        function Ch(e, t) {
          be = null, X.H = ss, t === ti || t === yu ? (t = Kc(), Be = 3) : t === lf ? (t = Kc(), Be = 4) : Be = t === Mf ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Jt = t, je === null && (et = 1, Cu(e, rn(t, e.current)));
        }
        function zh() {
          var e = Zt.current;
          return e === null ? true : (we & 4194048) === we ? dn === null : (we & 62914560) === we || (we & 536870912) !== 0 ? e === dn : false;
        }
        function Mh() {
          var e = X.H;
          return X.H = ss, e === null ? ss : e;
        }
        function Uh() {
          var e = X.A;
          return X.A = Cg, e;
        }
        function Gu() {
          et = 4, Ma || (we & 4194048) !== we && Zt.current !== null || (fi = true), (Ua & 134217727) === 0 && (Sl & 134217727) === 0 || Qe === null || qa(Qe, we, Ft, false);
        }
        function no(e, t, n) {
          var a = Me;
          Me |= 2;
          var l = Mh(), i = Uh();
          (Qe !== e || we !== t) && (Xu = null, di(e, t)), t = false;
          var o = et;
          e:
            do
              try {
                if (Be !== 0 && je !== null) {
                  var b = je, T = Jt;
                  switch (Be) {
                    case 8:
                      to(), o = 6;
                      break e;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                      Zt.current === null && (t = true);
                      var D = Be;
                      if (Be = 0, Jt = null, hi(e, b, T, D), n && fi) {
                        o = 0;
                        break e;
                      }
                      break;
                    default:
                      D = Be, Be = 0, Jt = null, hi(e, b, T, D);
                  }
                }
                Ug(), o = et;
                break;
              } catch (Q) {
                Ch(e, Q);
              }
            while (true);
          return t && e.shellSuspendCounter++, In = dl = null, Me = a, X.H = l, X.A = i, je === null && (Qe = null, we = 0, fu()), o;
        }
        function Ug() {
          for (; je !== null; )
            Dh(je);
        }
        function Dg(e, t) {
          var n = Me;
          Me |= 2;
          var a = Mh(), l = Uh();
          Qe !== e || we !== t ? (Xu = null, Yu = Rt() + 500, di(e, t)) : fi = Pa(e, t);
          e:
            do
              try {
                if (Be !== 0 && je !== null) {
                  t = je;
                  var i = Jt;
                  t:
                    switch (Be) {
                      case 1:
                        Be = 0, Jt = null, hi(e, t, i, 1);
                        break;
                      case 2:
                      case 9:
                        if (Vc(i)) {
                          Be = 0, Jt = null, Bh(t);
                          break;
                        }
                        t = function() {
                          Be !== 2 && Be !== 9 || Qe !== e || (Be = 7), Ln(e);
                        }, i.then(t, t);
                        break e;
                      case 3:
                        Be = 7;
                        break e;
                      case 4:
                        Be = 5;
                        break e;
                      case 7:
                        Vc(i) ? (Be = 0, Jt = null, Bh(t)) : (Be = 0, Jt = null, hi(e, t, i, 7));
                        break;
                      case 5:
                        var o = null;
                        switch (je.tag) {
                          case 26:
                            o = je.memoizedState;
                          case 5:
                          case 27:
                            var b = je;
                            if (o ? Sm(o) : b.stateNode.complete) {
                              Be = 0, Jt = null;
                              var T = b.sibling;
                              if (T !== null)
                                je = T;
                              else {
                                var D = b.return;
                                D !== null ? (je = D, ku(D)) : je = null;
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
                        to(), et = 6;
                        break e;
                      default:
                        throw Error(f(462));
                    }
                }
                Bg();
                break;
              } catch (Q) {
                Ch(e, Q);
              }
            while (true);
          return In = dl = null, X.H = a, X.A = l, Me = n, je !== null ? 0 : (Qe = null, we = 0, fu(), et);
        }
        function Bg() {
          for (; je !== null && !wr(); )
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
              t = Id(n, t, t.pendingProps, t.type, void 0, we);
              break;
            case 11:
              t = Id(n, t, t.pendingProps, t.type.render, t.ref, we);
              break;
            case 5:
              yf(t);
            default:
              uh(n, t), t = je = Uc(t, fa), t = ih(n, t, fa);
          }
          e.memoizedProps = e.pendingProps, t === null ? ku(e) : je = t;
        }
        function hi(e, t, n, a) {
          In = dl = null, yf(t), ni = null, Pi = 0;
          var l = t.return;
          try {
            if (jg(e, l, t, n, we)) {
              et = 1, Cu(e, rn(n, e.current)), je = null;
              return;
            }
          } catch (i) {
            if (l !== null)
              throw je = l, i;
            et = 1, Cu(e, rn(n, e.current)), je = null;
            return;
          }
          t.flags & 32768 ? (Ae || a === 1 ? e = true : fi || (we & 536870912) !== 0 ? e = false : (Ma = e = true, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Zt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), qh(t, e)) : ku(t);
        }
        function ku(e) {
          var t = e;
          do {
            if ((t.flags & 32768) !== 0) {
              qh(t, Ma);
              return;
            }
            e = t.return;
            var n = Eg(t.alternate, t, fa);
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
          et === 0 && (et = 5);
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
          et = 6, je = null;
        }
        function Hh(e, t, n, a, l, i, o, b, T) {
          e.cancelPendingCommit = null;
          do
            Vu();
          while (mt !== 0);
          if ((Me & 6) !== 0)
            throw Error(f(327));
          if (t !== null) {
            if (t === e.current)
              throw Error(f(177));
            if (i = t.lanes | t.childLanes, i |= Gr, Or(e, n, i, o, b, T), e === Qe && (je = Qe = null, we = 0), ci = t, Ba = e, oa = n, Pf = i, If = l, Eh = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Yg(Ja, function() {
              return Gh(), null;
            })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
              a = X.T, X.T = null, l = I.p, I.p = 2, o = Me, Me |= 4;
              try {
                Rg(e, t, n);
              } finally {
                Me = o, I.p = l, X.T = a;
              }
            }
            mt = 1, Lh(), Yh(), Xh();
          }
        }
        function Lh() {
          if (mt === 1) {
            mt = 0;
            var e = Ba, t = ci, n = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || n) {
              n = X.T, X.T = null;
              var a = I.p;
              I.p = 2;
              var l = Me;
              Me |= 4;
              try {
                vh(t, e);
                var i = po, o = Tc(e.containerInfo), b = i.focusedElem, T = i.selectionRange;
                if (o !== b && b && b.ownerDocument && jc(b.ownerDocument.documentElement, b)) {
                  if (T !== null && Hr(b)) {
                    var D = T.start, Q = T.end;
                    if (Q === void 0 && (Q = D), "selectionStart" in b)
                      b.selectionStart = D, b.selectionEnd = Math.min(Q, b.value.length);
                    else {
                      var V = b.ownerDocument || document, q = V && V.defaultView || window;
                      if (q.getSelection) {
                        var L = q.getSelection(), ne = b.textContent.length, fe = Math.min(T.start, ne), Xe = T.end === void 0 ? fe : Math.min(T.end, ne);
                        !L.extend && fe > Xe && (o = Xe, Xe = fe, fe = o);
                        var O = Nc(b, fe), R = Nc(b, Xe);
                        if (O && R && (L.rangeCount !== 1 || L.anchorNode !== O.node || L.anchorOffset !== O.offset || L.focusNode !== R.node || L.focusOffset !== R.offset)) {
                          var U = V.createRange();
                          U.setStart(O.node, O.offset), L.removeAllRanges(), fe > Xe ? (L.addRange(U), L.extend(R.node, R.offset)) : (U.setEnd(R.node, R.offset), L.addRange(U));
                        }
                      }
                    }
                  }
                  for (V = [], L = b; L = L.parentNode; )
                    L.nodeType === 1 && V.push({ element: L, left: L.scrollLeft, top: L.scrollTop });
                  for (typeof b.focus == "function" && b.focus(), b = 0; b < V.length; b++) {
                    var G = V[b];
                    G.element.scrollLeft = G.left, G.element.scrollTop = G.top;
                  }
                }
                ar = !!mo, po = mo = null;
              } finally {
                Me = l, I.p = a, X.T = n;
              }
            }
            e.current = t, mt = 2;
          }
        }
        function Yh() {
          if (mt === 2) {
            mt = 0;
            var e = Ba, t = ci, n = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || n) {
              n = X.T, X.T = null;
              var a = I.p;
              I.p = 2;
              var l = Me;
              Me |= 4;
              try {
                mh(e, t.alternate, t);
              } finally {
                Me = l, I.p = a, X.T = n;
              }
            }
            mt = 3;
          }
        }
        function Xh() {
          if (mt === 4 || mt === 3) {
            mt = 0, Bs();
            var e = Ba, t = ci, n = oa, a = Eh;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? mt = 5 : (mt = 0, ci = Ba = null, Qh(e, e.pendingLanes));
            var l = e.pendingLanes;
            if (l === 0 && (Da = null), Ci(n), t = t.stateNode, Ot && typeof Ot.onCommitFiberRoot == "function")
              try {
                Ot.onCommitFiberRoot(Fa, t, void 0, (t.current.flags & 128) === 128);
              } catch (T) {
              }
            if (a !== null) {
              t = X.T, l = I.p, I.p = 2, X.T = null;
              try {
                for (var i = e.onRecoverableError, o = 0; o < a.length; o++) {
                  var b = a[o];
                  i(b.value, { componentStack: b.stack });
                }
              } finally {
                X.T = t, I.p = l;
              }
            }
            (oa & 3) !== 0 && Vu(), Ln(e), l = e.pendingLanes, (n & 261930) !== 0 && (l & 42) !== 0 ? e === eo ? ps++ : (ps = 0, eo = e) : ps = 0, gs(0);
          }
        }
        function Qh(e, t) {
          (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Wi(t)));
        }
        function Vu() {
          return Lh(), Yh(), Xh(), Gh();
        }
        function Gh() {
          if (mt !== 5)
            return false;
          var e = Ba, t = Pf;
          Pf = 0;
          var n = Ci(oa), a = X.T, l = I.p;
          try {
            I.p = 32 > n ? 32 : n, X.T = null, n = If, If = null;
            var i = Ba, o = oa;
            if (mt = 0, ci = Ba = null, oa = 0, (Me & 6) !== 0)
              throw Error(f(331));
            var b = Me;
            if (Me |= 4, jh(i.current), Sh(i, i.current, o, n), Me = b, gs(0, false), Ot && typeof Ot.onPostCommitFiberRoot == "function")
              try {
                Ot.onPostCommitFiberRoot(Fa, i);
              } catch (T) {
              }
            return true;
          } finally {
            I.p = l, X.T = a, Qh(e, t);
          }
        }
        function kh(e, t, n) {
          t = rn(n, t), t = zf(e.stateNode, t, 2), e = Ra(e, t, 2), e !== null && (Qn(e, 2), Ln(e));
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
                  e = rn(n, e), n = Vd(2), a = Ra(t, n, 2), a !== null && (Zd(n, a, t, e), Qn(a, 2), Ln(a));
                  break;
                }
              }
              t = t.return;
            }
        }
        function ao(e, t, n) {
          var a = e.pingCache;
          if (a === null) {
            a = e.pingCache = new zg();
            var l = /* @__PURE__ */ new Set();
            a.set(t, l);
          } else
            l = a.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), a.set(t, l));
          l.has(n) || (Ff = true, l.add(n), e = qg.bind(null, e, t, n), t.then(e, e));
        }
        function qg(e, t, n) {
          var a = e.pingCache;
          a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Qe === e && (we & n) === n && (et === 4 || et === 3 && (we & 62914560) === we && 300 > Rt() - Lu ? (Me & 2) === 0 && di(e, 0) : Wf |= n, oi === we && (oi = 0)), Ln(e);
        }
        function Vh(e, t) {
          t === 0 && (t = Ys()), e = fl(e, t), e !== null && (Qn(e, t), Ln(e));
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
              throw Error(f(314));
          }
          a !== null && a.delete(t), Vh(e, n);
        }
        function Yg(e, t) {
          return Ei(e, t);
        }
        var Zu = null, mi = null, lo = false, Ku = false, io = false, Ha = 0;
        function Ln(e) {
          e !== mi && e.next === null && (mi === null ? Zu = mi = e : mi = mi.next = e), Ku = true, lo || (lo = true, Qg());
        }
        function gs(e, t) {
          if (!io && Ku) {
            io = true;
            do
              for (var n = false, a = Zu; a !== null; ) {
                if (e !== 0) {
                  var l = a.pendingLanes;
                  if (l === 0)
                    var i = 0;
                  else {
                    var o = a.suspendedLanes, b = a.pingedLanes;
                    i = (1 << 31 - Et(42 | e) + 1) - 1, i &= l & ~(o & ~b), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
                  }
                  i !== 0 && (n = true, Fh(a, i));
                } else
                  i = we, i = Rl(a, a === Qe ? i : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (i & 3) === 0 || Pa(a, i) || (n = true, Fh(a, i));
                a = a.next;
              }
            while (n);
            io = false;
          }
        }
        function Xg() {
          Zh();
        }
        function Zh() {
          Ku = lo = false;
          var e = 0;
          Ha !== 0 && Pg() && (e = Ha);
          for (var t = Rt(), n = null, a = Zu; a !== null; ) {
            var l = a.next, i = Kh(a, t);
            i === 0 ? (a.next = null, n === null ? Zu = l : n.next = l, l === null && (mi = n)) : (n = a, (e !== 0 || (i & 3) !== 0) && (Ku = true)), a = l;
          }
          mt !== 0 && mt !== 5 || gs(e), Ha !== 0 && (Ha = 0);
        }
        function Kh(e, t) {
          for (var n = e.suspendedLanes, a = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
            var o = 31 - Et(i), b = 1 << o, T = l[o];
            T === -1 ? ((b & n) === 0 || (b & a) !== 0) && (l[o] = Rr(b, t)) : T <= t && (e.expiredLanes |= b), i &= ~b;
          }
          if (t = Qe, n = we, n = Rl(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a = e.callbackNode, n === 0 || e === t && (Be === 2 || Be === 9) || e.cancelPendingCommit !== null)
            return a !== null && a !== null && Ai(a), e.callbackNode = null, e.callbackPriority = 0;
          if ((n & 3) === 0 || Pa(e, n)) {
            if (t = n & -n, t === e.callbackPriority)
              return t;
            switch (a !== null && Ai(a), Ci(n)) {
              case 2:
              case 8:
                n = Ri;
                break;
              case 32:
                n = Ja;
                break;
              case 268435456:
                n = El;
                break;
              default:
                n = Ja;
            }
            return a = Jh.bind(null, e), n = Ei(n, a), e.callbackPriority = t, e.callbackNode = n, t;
          }
          return a !== null && a !== null && Ai(a), e.callbackPriority = 2, e.callbackNode = null, 2;
        }
        function Jh(e, t) {
          if (mt !== 0 && mt !== 5)
            return e.callbackNode = null, e.callbackPriority = 0, null;
          var n = e.callbackNode;
          if (Vu() && e.callbackNode !== n)
            return null;
          var a = we;
          return a = Rl(e, e === Qe ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a === 0 ? null : (Rh(e, a, t), Kh(e, Rt()), e.callbackNode != null && e.callbackNode === n ? Jh.bind(null, e) : null);
        }
        function Fh(e, t) {
          if (Vu())
            return null;
          Rh(e, t, true);
        }
        function Qg() {
          e0(function() {
            (Me & 6) !== 0 ? Ei(pe, Xg) : Zh();
          });
        }
        function so() {
          if (Ha === 0) {
            var e = Il;
            e === 0 && (e = Wa, Wa <<= 1, (Wa & 261888) === 0 && (Wa = 256)), Ha = e;
          }
          return Ha;
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
            var i = Wh((l[gt] || null).action), o = a.submitter;
            o && (t = (t = o[gt] || null) ? Wh(t.formAction) : o.getAttribute("formAction"), t !== null && (i = t, o = null));
            var b = new ll("action", "action", null, a, l);
            e.push({ event: b, listeners: [{ instance: null, listener: function() {
              if (a.defaultPrevented) {
                if (Ha !== 0) {
                  var T = o ? $h(l, o) : new FormData(l);
                  wf(n, { pending: true, data: T, method: l.method, action: i }, null, T);
                }
              } else
                typeof i == "function" && (b.preventDefault(), T = o ? $h(l, o) : new FormData(l), wf(n, { pending: true, data: T, method: l.method, action: i }, i, T));
            }, currentTarget: l }] });
          }
        }
        for (var uo = 0; uo < Qr.length; uo++) {
          var ro = Qr[uo], kg = ro.toLowerCase(), Vg = ro[0].toUpperCase() + ro.slice(1);
          bn(kg, "on" + Vg);
        }
        bn(Ac, "onAnimationEnd"), bn(Rc, "onAnimationIteration"), bn(Oc, "onAnimationStart"), bn("dblclick", "onDoubleClick"), bn("focusin", "onFocus"), bn("focusout", "onBlur"), bn(ug, "onTransitionRun"), bn(rg, "onTransitionStart"), bn(fg, "onTransitionCancel"), bn(Cc, "onTransitionEnd"), Gt("onMouseEnter", ["mouseout", "mouseover"]), Gt("onMouseLeave", ["mouseout", "mouseover"]), Gt("onPointerEnter", ["pointerout", "pointerover"]), Gt("onPointerLeave", ["pointerout", "pointerover"]), zn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), zn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), zn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), zn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), zn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), zn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var ys = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Zg = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ys));
        function Ph(e, t) {
          t = (t & 4) !== 0;
          for (var n = 0; n < e.length; n++) {
            var a = e[n], l = a.event;
            a = a.listeners;
            e: {
              var i = void 0;
              if (t)
                for (var o = a.length - 1; 0 <= o; o--) {
                  var b = a[o], T = b.instance, D = b.currentTarget;
                  if (b = b.listener, T !== i && l.isPropagationStopped())
                    break e;
                  i = b, l.currentTarget = D;
                  try {
                    i(l);
                  } catch (Q) {
                    ru(Q);
                  }
                  l.currentTarget = null, i = T;
                }
              else
                for (o = 0; o < a.length; o++) {
                  if (b = a[o], T = b.instance, D = b.currentTarget, b = b.listener, T !== i && l.isPropagationStopped())
                    break e;
                  i = b, l.currentTarget = D;
                  try {
                    i(l);
                  } catch (Q) {
                    ru(Q);
                  }
                  l.currentTarget = null, i = T;
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
        function fo(e, t, n) {
          var a = 0;
          t && (a |= 4), Ih(n, e, a, t);
        }
        var Ju = "_reactListening" + Math.random().toString(36).slice(2);
        function oo(e) {
          if (!e[Ju]) {
            e[Ju] = true, Mt.forEach(function(n) {
              n !== "selectionchange" && (Zg.has(n) || fo(n, false, e), fo(n, true, e));
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Ju] || (t[Ju] = true, fo("selectionchange", false, t));
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
              l = wo;
          }
          n = l.bind(null, t, n, e), l = void 0, !Xi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = true), a ? l !== void 0 ? e.addEventListener(t, n, { capture: true, passive: l }) : e.addEventListener(t, n, true) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, false);
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
                      var T = o.tag;
                      if ((T === 3 || T === 4) && o.stateNode.containerInfo === l)
                        return;
                      o = o.return;
                    }
                  for (; b !== null; ) {
                    if (o = ya(b), o === null)
                      return;
                    if (T = o.tag, T === 5 || T === 6 || T === 26 || T === 27) {
                      a = i = o;
                      continue e;
                    }
                    b = b.parentNode;
                  }
                }
                a = a.return;
              }
          Yi(function() {
            var D = i, Q = Ul(n), V = [];
            e: {
              var q = zc.get(e);
              if (q !== void 0) {
                var L = ll, ne = e;
                switch (e) {
                  case "keypress":
                    if (Hl(n) === 0)
                      break e;
                  case "keydown":
                  case "keyup":
                    L = nu;
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
                    L = au;
                    break;
                  case Ac:
                  case Rc:
                  case Oc:
                    L = oe;
                    break;
                  case Cc:
                    L = Ql;
                    break;
                  case "scroll":
                  case "scrollend":
                    L = c;
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
                var fe = (t & 4) !== 0, Xe = !fe && (e === "scroll" || e === "scrollend"), O = fe ? q !== null ? q + "Capture" : null : q;
                fe = [];
                for (var R = D, U; R !== null; ) {
                  var G = R;
                  if (U = G.stateNode, G = G.tag, G !== 5 && G !== 26 && G !== 27 || U === null || O === null || (G = Mn(R, O), G != null && fe.push(bs(R, G, U))), Xe)
                    break;
                  R = R.return;
                }
                0 < fe.length && (q = new L(q, ne, null, n, Q), V.push({ event: q, listeners: fe }));
              }
            }
            if ((t & 7) === 0) {
              e: {
                if (q = e === "mouseover" || e === "pointerover", L = e === "mouseout" || e === "pointerout", q && n !== al && (ne = n.relatedTarget || n.fromElement) && (ya(ne) || ne[Rn]))
                  break e;
                if ((L || q) && (q = Q.window === Q ? Q : (q = Q.ownerDocument) ? q.defaultView || q.parentWindow : window, L ? (ne = n.relatedTarget || n.toElement, L = D, ne = ne ? ya(ne) : null, ne !== null && (Xe = v(ne), fe = ne.tag, ne !== Xe || fe !== 5 && fe !== 27 && fe !== 6) && (ne = null)) : (L = null, ne = D), L !== ne)) {
                  if (fe = M, G = "onMouseLeave", O = "onMouseEnter", R = "mouse", (e === "pointerout" || e === "pointerover") && (fe = Yl, G = "onPointerLeave", O = "onPointerEnter", R = "pointer"), Xe = L == null ? q : el(L), U = ne == null ? q : el(ne), q = new fe(G, R + "leave", L, n, Q), q.target = Xe, q.relatedTarget = U, G = null, ya(Q) === D && (fe = new fe(O, R + "enter", ne, n, Q), fe.target = U, fe.relatedTarget = Xe, G = fe), Xe = G, L && ne)
                    t: {
                      for (fe = Kg, O = L, R = ne, U = 0, G = O; G; G = fe(G))
                        U++;
                      G = 0;
                      for (var ue = R; ue; ue = fe(ue))
                        G++;
                      for (; 0 < U - G; )
                        O = fe(O), U--;
                      for (; 0 < G - U; )
                        R = fe(R), G--;
                      for (; U--; ) {
                        if (O === R || R !== null && O === R.alternate) {
                          fe = O;
                          break t;
                        }
                        O = fe(O), R = fe(R);
                      }
                      fe = null;
                    }
                  else
                    fe = null;
                  L !== null && em(V, q, L, fe, false), ne !== null && Xe !== null && em(V, Xe, ne, fe, true);
                }
              }
              e: {
                if (q = D ? el(D) : window, L = q.nodeName && q.nodeName.toLowerCase(), L === "select" || L === "input" && q.type === "file")
                  var Oe = yc;
                else if (pc(q))
                  if (bc)
                    Oe = lg;
                  else {
                    Oe = ng;
                    var le = tg;
                  }
                else
                  L = q.nodeName, !L || L.toLowerCase() !== "input" || q.type !== "checkbox" && q.type !== "radio" ? D && zl(D.elementType) && (Oe = yc) : Oe = ag;
                if (Oe && (Oe = Oe(e, D))) {
                  gc(V, Oe, n, Q);
                  break e;
                }
                le && le(e, q, D), e === "focusout" && D && q.type === "number" && D.memoizedProps.value != null && qi(q, "number", q.value);
              }
              switch (le = D ? el(D) : window, e) {
                case "focusin":
                  (pc(le) || le.contentEditable === "true") && (Vl = le, Lr = D, Ki = null);
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
                  Yr = false, wc(V, n, Q);
                  break;
                case "selectionchange":
                  if (sg)
                    break;
                case "keydown":
                case "keyup":
                  wc(V, n, Q);
              }
              var Se;
              if (sn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var Ee = "onCompositionStart";
                      break e;
                    case "compositionend":
                      Ee = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      Ee = "onCompositionUpdate";
                      break e;
                  }
                  Ee = void 0;
                }
              else
                kl ? sl(e, n) && (Ee = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Ee = "onCompositionStart");
              Ee && (yn && n.locale !== "ko" && (kl || Ee !== "onCompositionStart" ? Ee === "onCompositionEnd" && kl && (Se = ql()) : (ht = Q, Sa = "value" in ht ? ht.value : ht.textContent, kl = true)), le = Fu(D, Ee), 0 < le.length && (Ee = new te(Ee, e, null, n, Q), V.push({ event: Ee, listeners: le }), Se ? Ee.data = Se : (Se = Gi(n), Se !== null && (Ee.data = Se)))), (Se = Dr ? $p(e, n) : Pp(e, n)) && (Ee = Fu(D, "onBeforeInput"), 0 < Ee.length && (le = new te("onBeforeInput", "beforeinput", null, n, Q), V.push({ event: le, listeners: Ee }), le.data = Se)), Gg(V, e, D, n, Q);
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
          for (var i = t._reactName, o = []; n !== null && n !== a; ) {
            var b = n, T = b.alternate, D = b.stateNode;
            if (b = b.tag, T !== null && T === a)
              break;
            b !== 5 && b !== 26 && b !== 27 || D === null || (T = D, l ? (D = Mn(n, i), D != null && o.unshift(bs(n, D, T))) : l || (D = Mn(n, i), D != null && o.push(bs(n, D, T)))), n = n.return;
          }
          o.length !== 0 && e.push({ event: t, listeners: o });
        }
        var Jg = /\r\n?/g, Fg = /\u0000|\uFFFD/g;
        function tm(e) {
          return (typeof e == "string" ? e : "" + e).replace(Jg, `
`).replace(Fg, "");
        }
        function nm(e, t) {
          return t = tm(t), tm(e) === t;
        }
        function Ye(e, t, n, a, l, i) {
          switch (n) {
            case "children":
              typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Vn(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Vn(e, "" + a);
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
              Li(e, a, i);
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
              a != null && Te("scroll", e);
              break;
            case "onScrollEnd":
              a != null && Te("scrollend", e);
              break;
            case "dangerouslySetInnerHTML":
              if (a != null) {
                if (typeof a != "object" || !("__html" in a))
                  throw Error(f(61));
                if (n = a.__html, n != null) {
                  if (l.children != null)
                    throw Error(f(60));
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
              Te("beforetoggle", e), Te("toggle", e), Gn(e, "popover", a);
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
              Gn(e, "is", a);
              break;
            case "innerText":
            case "textContent":
              break;
            default:
              (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = eu.get(n) || n, Gn(e, n, a));
          }
        }
        function ho(e, t, n, a, l, i) {
          switch (n) {
            case "style":
              Li(e, a, i);
              break;
            case "dangerouslySetInnerHTML":
              if (a != null) {
                if (typeof a != "object" || !("__html" in a))
                  throw Error(f(61));
                if (n = a.__html, n != null) {
                  if (l.children != null)
                    throw Error(f(60));
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
                  if (n[0] === "o" && n[1] === "n" && (l = n.endsWith("Capture"), t = n.slice(2, l ? n.length - 7 : void 0), i = e[gt] || null, i = i != null ? i[n] : null, typeof i == "function" && e.removeEventListener(t, i, l), typeof a == "function")) {
                    typeof i != "function" && i !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, a, l);
                    break e;
                  }
                  n in e ? e[n] = a : a === true ? e.setAttribute(n, "") : Gn(e, n, a);
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
                        throw Error(f(137, t));
                      default:
                        Ye(e, t, i, o, n, null);
                    }
                }
              l && Ye(e, t, "srcSet", n.srcSet, n, null), a && Ye(e, t, "src", n.src, n, null);
              return;
            case "input":
              Te("invalid", e);
              var b = i = o = l = null, T = null, D = null;
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
                        T = Q;
                        break;
                      case "defaultChecked":
                        D = Q;
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
                          throw Error(f(137, t));
                        break;
                      default:
                        Ye(e, t, a, Q, n, null);
                    }
                }
              $s(e, i, b, T, D, o, l, false);
              return;
            case "select":
              Te("invalid", e), a = o = i = null;
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
                      Ye(e, t, l, b, n, null);
                  }
              t = i, n = o, e.multiple = !!a, t != null ? va(e, !!a, t, false) : n != null && va(e, !!a, n, true);
              return;
            case "textarea":
              Te("invalid", e), i = l = a = null;
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
                        throw Error(f(91));
                      break;
                    default:
                      Ye(e, t, o, b, n, null);
                  }
              Hi(e, a, l, i);
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
                      throw Error(f(137, t));
                    default:
                      Ye(e, t, D, a, n, null);
                  }
              return;
            default:
              if (zl(t)) {
                for (Q in n)
                  n.hasOwnProperty(Q) && (a = n[Q], a !== void 0 && ho(e, t, Q, a, n, void 0));
                return;
              }
          }
          for (b in n)
            n.hasOwnProperty(b) && (a = n[b], a != null && Ye(e, t, b, a, n, null));
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
              var l = null, i = null, o = null, b = null, T = null, D = null, Q = null;
              for (L in n) {
                var V = n[L];
                if (n.hasOwnProperty(L) && V != null)
                  switch (L) {
                    case "checked":
                      break;
                    case "value":
                      break;
                    case "defaultValue":
                      T = V;
                    default:
                      a.hasOwnProperty(L) || Ye(e, t, L, null, a, V);
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
                        throw Error(f(137, t));
                      break;
                    default:
                      L !== V && Ye(e, t, q, L, a, V);
                  }
              }
              Bi(e, o, b, T, D, Q, i, l);
              return;
            case "select":
              L = o = b = q = null;
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
                      q = i;
                      break;
                    case "defaultValue":
                      b = i;
                      break;
                    case "multiple":
                      o = i;
                    default:
                      i !== T && Ye(e, t, l, i, a, T);
                  }
              t = b, n = o, a = L, q != null ? va(e, !!n, q, false) : !!a != !!n && (t != null ? va(e, !!n, t, true) : va(e, !!n, n ? [] : "", false));
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
                      Ye(e, t, b, null, a, l);
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
                        throw Error(f(91));
                      break;
                    default:
                      l !== i && Ye(e, t, o, l, a, i);
                  }
              Ps(e, q, L);
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
              for (T in a)
                if (q = a[T], L = n[T], a.hasOwnProperty(T) && q !== L && (q != null || L != null))
                  switch (T) {
                    case "selected":
                      e.selected = q && typeof q != "function" && typeof q != "symbol";
                      break;
                    default:
                      Ye(e, t, T, q, a, L);
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
                q = n[fe], n.hasOwnProperty(fe) && q != null && !a.hasOwnProperty(fe) && Ye(e, t, fe, null, a, q);
              for (D in a)
                if (q = a[D], L = n[D], a.hasOwnProperty(D) && q !== L && (q != null || L != null))
                  switch (D) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                      if (q != null)
                        throw Error(f(137, t));
                      break;
                    default:
                      Ye(e, t, D, q, a, L);
                  }
              return;
            default:
              if (zl(t)) {
                for (var Xe in n)
                  q = n[Xe], n.hasOwnProperty(Xe) && q !== void 0 && !a.hasOwnProperty(Xe) && ho(e, t, Xe, void 0, a, q);
                for (Q in a)
                  q = a[Q], L = n[Q], !a.hasOwnProperty(Q) || q === L || q === void 0 && L === void 0 || ho(e, t, Q, q, a, L);
                return;
              }
          }
          for (var O in n)
            q = n[O], n.hasOwnProperty(O) && q != null && !a.hasOwnProperty(O) && Ye(e, t, O, null, a, q);
          for (V in a)
            q = a[V], L = n[V], !a.hasOwnProperty(V) || q === L || q == null && L == null || Ye(e, t, V, q, a, L);
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
              var l = n[a], i = l.transferSize, o = l.initiatorType, b = l.duration;
              if (i && b && am(o)) {
                for (o = 0, b = l.responseEnd, a += 1; a < n.length; a++) {
                  var T = n[a], D = T.startTime;
                  if (D > b)
                    break;
                  var Q = T.transferSize, V = T.initiatorType;
                  Q && am(V) && (T = T.responseEnd, o += Q * (T < b ? 1 : (b - D) / (T - D)));
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
        var mo = null, po = null;
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
        function go(e, t) {
          return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
        }
        var yo = null;
        function Pg() {
          var e = window.event;
          return e && e.type === "popstate" ? e === yo ? false : (yo = e, true) : (yo = null, false);
        }
        var sm = typeof setTimeout == "function" ? setTimeout : void 0, Ig = typeof clearTimeout == "function" ? clearTimeout : void 0, um = typeof Promise == "function" ? Promise : void 0, e0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof um != "undefined" ? function(e) {
          return um.resolve(null).then(e).catch(t0);
        } : sm;
        function t0(e) {
          setTimeout(function() {
            throw e;
          });
        }
        function La(e) {
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
                  var o = i.nextSibling, b = i.nodeName;
                  i[On] || b === "SCRIPT" || b === "STYLE" || b === "LINK" && i.rel.toLowerCase() === "stylesheet" || n.removeChild(i), i = o;
                }
              } else
                n === "body" && vs(e.ownerDocument.body);
            n = l;
          } while (n);
          bi(t);
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
        function bo(e) {
          var t = e.firstChild;
          for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var n = t;
            switch (t = t.nextSibling, n.nodeName) {
              case "HTML":
              case "HEAD":
              case "BODY":
                bo(n), Mi(n);
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
        function om(e, t) {
          for (; e.nodeType !== 8; )
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = hn(e.nextSibling), e === null))
              return null;
          return e;
        }
        function vo(e) {
          return e.data === "$?" || e.data === "$~";
        }
        function xo(e) {
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
        var So = null;
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
                throw Error(f(452));
              return e;
            case "head":
              if (e = t.head, !e)
                throw Error(f(453));
              return e;
            case "body":
              if (e = t.body, !e)
                throw Error(f(454));
              return e;
            default:
              throw Error(f(451));
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
        var ca = I.d;
        I.d = { f: i0, r: s0, D: u0, C: r0, L: f0, m: o0, X: d0, S: c0, M: h0 };
        function i0() {
          var e = ca.f(), t = Qu();
          return e || t;
        }
        function s0(e) {
          var t = Cn(e);
          t !== null && t.tag === 5 && t.type === "form" ? Cd(t) : ca.r(e);
        }
        var pi = typeof document == "undefined" ? null : document;
        function pm(e, t, n) {
          var a = pi;
          if (a && typeof t == "string" && t) {
            var l = Ct(t);
            l = 'link[rel="' + e + '"][href="' + l + '"]', typeof n == "string" && (l += '[crossorigin="' + n + '"]'), mm.has(l) || (mm.add(l), e = { rel: e, crossOrigin: n, href: t }, a.querySelector(l) === null && (t = a.createElement("link"), Tt(t, "link", e), $e(t), a.head.appendChild(t)));
          }
        }
        function u0(e) {
          ca.D(e), pm("dns-prefetch", e, null);
        }
        function r0(e, t) {
          ca.C(e, t), pm("preconnect", e, t);
        }
        function f0(e, t, n) {
          ca.L(e, t, n);
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
            mn.has(i) || (e = E({ rel: "preload", href: t === "image" && n && n.imageSrcSet ? void 0 : e, as: t }, n), mn.set(i, e), a.querySelector(l) !== null || t === "style" && a.querySelector(xs(i)) || t === "script" && a.querySelector(Ss(i)) || (t = a.createElement("link"), Tt(t, "link", e), $e(t), a.head.appendChild(t)));
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
              a = n.createElement("link"), Tt(a, "link", e), $e(a), n.head.appendChild(a);
            }
          }
        }
        function c0(e, t, n) {
          ca.S(e, t, n);
          var a = pi;
          if (a && e) {
            var l = ba(a).hoistableStyles, i = gi(e);
            t = t || "default";
            var o = l.get(i);
            if (!o) {
              var b = { loading: 0, preload: null };
              if (o = a.querySelector(xs(i)))
                b.loading = 5;
              else {
                e = E({ rel: "stylesheet", href: e, "data-precedence": t }, n), (n = mn.get(i)) && _o(e, n);
                var T = o = a.createElement("link");
                $e(T), Tt(T, "link", e), T._p = new Promise(function(D, Q) {
                  T.onload = D, T.onerror = Q;
                }), T.addEventListener("load", function() {
                  b.loading |= 1;
                }), T.addEventListener("error", function() {
                  b.loading |= 2;
                }), b.loading |= 4, Pu(o, t, a);
              }
              o = { type: "stylesheet", instance: o, count: 1, state: b }, l.set(i, o);
            }
          }
        }
        function d0(e, t) {
          ca.X(e, t);
          var n = pi;
          if (n && e) {
            var a = ba(n).hoistableScripts, l = yi(e), i = a.get(l);
            i || (i = n.querySelector(Ss(l)), i || (e = E({ src: e, async: true }, t), (t = mn.get(l)) && No(e, t), i = n.createElement("script"), $e(i), Tt(i, "link", e), n.head.appendChild(i)), i = { type: "script", instance: i, count: 1, state: null }, a.set(l, i));
          }
        }
        function h0(e, t) {
          ca.M(e, t);
          var n = pi;
          if (n && e) {
            var a = ba(n).hoistableScripts, l = yi(e), i = a.get(l);
            i || (i = n.querySelector(Ss(l)), i || (e = E({ src: e, async: true, type: "module" }, t), (t = mn.get(l)) && No(e, t), i = n.createElement("script"), $e(i), Tt(i, "link", e), n.head.appendChild(i)), i = { type: "script", instance: i, count: 1, state: null }, a.set(l, i));
          }
        }
        function gm(e, t, n, a) {
          var l = (l = xe.current) ? $u(l) : null;
          if (!l)
            throw Error(f(446));
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
                if (o || (l = l.ownerDocument || l, o = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, i.set(e, o), (i = l.querySelector(xs(e))) && !i._p && (o.instance = i, o.state.loading = 5), mn.has(e) || (n = { rel: "preload", as: "style", href: n.href, crossOrigin: n.crossOrigin, integrity: n.integrity, media: n.media, hrefLang: n.hrefLang, referrerPolicy: n.referrerPolicy }, mn.set(e, n), i || m0(l, e, n, o.state))), t && a === null)
                  throw Error(f(528, ""));
                return o;
              }
              if (t && a !== null)
                throw Error(f(529, ""));
              return null;
            case "script":
              return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = yi(n), n = ba(l).hoistableScripts, a = n.get(t), a || (a = { type: "script", instance: null, count: 0, state: null }, n.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
            default:
              throw Error(f(444, e));
          }
        }
        function gi(e) {
          return 'href="' + Ct(e) + '"';
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
          }), Tt(t, "link", n), $e(t), e.head.appendChild(t));
        }
        function yi(e) {
          return '[src="' + Ct(e) + '"]';
        }
        function Ss(e) {
          return "script[async]" + e;
        }
        function bm(e, t, n) {
          if (t.count++, t.instance === null)
            switch (t.type) {
              case "style":
                var a = e.querySelector('style[data-href~="' + Ct(n.href) + '"]');
                if (a)
                  return t.instance = a, $e(a), a;
                var l = E({}, n, { "data-href": n.href, "data-precedence": n.precedence, href: null, precedence: null });
                return a = (e.ownerDocument || e).createElement("style"), $e(a), Tt(a, "style", l), Pu(a, n.precedence, e), t.instance = a;
              case "stylesheet":
                l = gi(n.href);
                var i = e.querySelector(xs(l));
                if (i)
                  return t.state.loading |= 4, t.instance = i, $e(i), i;
                a = ym(n), (l = mn.get(l)) && _o(a, l), i = (e.ownerDocument || e).createElement("link"), $e(i);
                var o = i;
                return o._p = new Promise(function(b, T) {
                  o.onload = b, o.onerror = T;
                }), Tt(i, "link", a), t.state.loading |= 4, Pu(i, n.precedence, e), t.instance = i;
              case "script":
                return i = yi(n.src), (l = e.querySelector(Ss(i))) ? (t.instance = l, $e(l), l) : (a = n, (l = mn.get(i)) && (a = E({}, n), No(a, l)), e = e.ownerDocument || e, l = e.createElement("script"), $e(l), Tt(l, "link", a), e.head.appendChild(l), t.instance = l);
              case "void":
                return null;
              default:
                throw Error(f(443, t.type));
            }
          else
            t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Pu(a, n.precedence, e));
          return t.instance;
        }
        function Pu(e, t, n) {
          for (var a = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), l = a.length ? a[a.length - 1] : null, i = l, o = 0; o < a.length; o++) {
            var b = a[o];
            if (b.dataset.precedence === t)
              i = b;
            else if (i !== l)
              break;
          }
          i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
        }
        function _o(e, t) {
          e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
        }
        function No(e, t) {
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
            if (!(i[On] || i[dt] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
              var o = i.getAttribute(t) || "";
              o = e + o;
              var b = a.get(o);
              b ? b.push(i) : a.set(o, [i]);
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
                t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = er.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = i, $e(i);
                return;
              }
              i = t.ownerDocument || t, a = ym(a), (l = mn.get(l)) && _o(a, l), i = i.createElement("link"), $e(i);
              var o = i;
              o._p = new Promise(function(b, T) {
                o.onload = b, o.onerror = T;
              }), Tt(i, "link", a), n.instance = i;
            }
            e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = er.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
          }
        }
        var jo = 0;
        function y0(e, t) {
          return e.stylesheets && e.count === 0 && nr(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
            var a = setTimeout(function() {
              if (e.stylesheets && nr(e, e.stylesheets), e.unsuspend) {
                var i = e.unsuspend;
                e.unsuspend = null, i();
              }
            }, 6e4 + t);
            0 < e.imgBytes && jo === 0 && (jo = 62500 * $g());
            var l = setTimeout(function() {
              if (e.waitingForImages = false, e.count === 0 && (e.stylesheets && nr(e, e.stylesheets), e.unsuspend)) {
                var i = e.unsuspend;
                e.unsuspend = null, i();
              }
            }, (e.imgBytes > jo ? 50 : 800) + t);
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
                var o = l[i];
                (o.nodeName === "LINK" || o.getAttribute("media") !== "not all") && (n.set(o.dataset.precedence, o), a = o);
              }
              a && n.set(null, a);
            }
            l = t.instance, o = l.getAttribute("data-precedence"), i = n.get(o) || a, i === a && n.set(null, l), n.set(o, l), this.count++, a = er.bind(this), l.addEventListener("load", a), l.addEventListener("error", a), i ? i.parentNode.insertBefore(l, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(l, e.firstChild)), t.state.loading |= 4;
          }
        }
        var _s = { $$typeof: se, Provider: null, Consumer: null, _currentValue: J, _currentValue2: J, _threadCount: 0 };
        function v0(e, t, n, a, l, i, o, b, T) {
          this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ia(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ia(0), this.hiddenUpdates = Ia(null), this.identifierPrefix = a, this.onUncaughtError = l, this.onCaughtError = i, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = T, this.incompleteTransitions = /* @__PURE__ */ new Map();
        }
        function _m(e, t, n, a, l, i, o, b, T, D, Q, V) {
          return e = new v0(e, t, n, o, T, D, Q, V, b), t = 1, i === true && (t |= 24), i = Vt(3, null, null, t), e.current = i, i.stateNode = e, t = tf(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = { element: a, isDehydrated: n, cache: t }, sf(i), e;
        }
        function Nm(e) {
          return e ? (e = Jl, e) : Jl;
        }
        function jm(e, t, n, a, l, i) {
          l = Nm(l), a.context === null ? a.context = l : a.pendingContext = l, a = Aa(t), a.payload = { element: n }, i = i === void 0 ? null : i, i !== null && (a.callback = i), n = Ra(e, a, t), n !== null && (Lt(n, e, t), es(n, e, t));
        }
        function Tm(e, t) {
          if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t;
          }
        }
        function To(e, t) {
          Tm(e, t), (e = e.alternate) && Tm(e, t);
        }
        function wm(e) {
          if (e.tag === 13 || e.tag === 31) {
            var t = fl(e, 67108864);
            t !== null && Lt(t, e, 67108864), To(e, 67108864);
          }
        }
        function Em(e) {
          if (e.tag === 13 || e.tag === 31) {
            var t = Wt();
            t = it(t);
            var n = fl(e, t);
            n !== null && Lt(n, e, t), To(e, t);
          }
        }
        var ar = true;
        function x0(e, t, n, a) {
          var l = X.T;
          X.T = null;
          var i = I.p;
          try {
            I.p = 2, wo(e, t, n, a);
          } finally {
            I.p = i, X.T = l;
          }
        }
        function S0(e, t, n, a) {
          var l = X.T;
          X.T = null;
          var i = I.p;
          try {
            I.p = 8, wo(e, t, n, a);
          } finally {
            I.p = i, X.T = l;
          }
        }
        function wo(e, t, n, a) {
          if (ar) {
            var l = Eo(a);
            if (l === null)
              co(e, t, a, lr, n), Rm(e, a);
            else if (N0(l, e, t, n, a))
              a.stopPropagation();
            else if (Rm(e, a), t & 4 && -1 < _0.indexOf(e)) {
              for (; l !== null; ) {
                var i = Cn(l);
                if (i !== null)
                  switch (i.tag) {
                    case 3:
                      if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                        var o = An(i.pendingLanes);
                        if (o !== 0) {
                          var b = i;
                          for (b.pendingLanes |= 2, b.entangledLanes |= 2; o; ) {
                            var T = 1 << 31 - Et(o);
                            b.entanglements[1] |= T, o &= ~T;
                          }
                          Ln(i), (Me & 6) === 0 && (Yu = Rt() + 500, gs(0));
                        }
                      }
                      break;
                    case 31:
                    case 13:
                      b = fl(i, 2), b !== null && Lt(b, i, 2), Qu(), To(i, 2);
                  }
                if (i = Eo(a), i === null && co(e, t, a, lr, n), i === l)
                  break;
                l = i;
              }
              l !== null && a.stopPropagation();
            } else
              co(e, t, a, null, n);
          }
        }
        function Eo(e) {
          return e = Ul(e), Ao(e);
        }
        var lr = null;
        function Ao(e) {
          if (lr = null, e = ya(e), e !== null) {
            var t = v(e);
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
                case pe:
                  return 2;
                case Ri:
                  return 8;
                case Ja:
                case Er:
                  return 32;
                case El:
                  return 268435456;
                default:
                  return 32;
              }
            default:
              return 32;
          }
        }
        var Ro = false, Ya = null, Xa = null, Qa = null, Ns = /* @__PURE__ */ new Map(), js = /* @__PURE__ */ new Map(), Ga = [], _0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
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
              Qa = null;
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
          return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: a, nativeEvent: i, targetContainers: [l] }, t !== null && (t = Cn(t), t !== null && wm(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
        }
        function N0(e, t, n, a, l) {
          switch (t) {
            case "focusin":
              return Ya = Ts(Ya, e, t, n, a, l), true;
            case "dragenter":
              return Xa = Ts(Xa, e, t, n, a, l), true;
            case "mouseover":
              return Qa = Ts(Qa, e, t, n, a, l), true;
            case "pointerover":
              var i = l.pointerId;
              return Ns.set(i, Ts(Ns.get(i) || null, e, t, n, a, l)), true;
            case "gotpointercapture":
              return i = l.pointerId, js.set(i, Ts(js.get(i) || null, e, t, n, a, l)), true;
          }
          return false;
        }
        function Om(e) {
          var t = ya(e.target);
          if (t !== null) {
            var n = v(t);
            if (n !== null) {
              if (t = n.tag, t === 13) {
                if (t = m(n), t !== null) {
                  e.blockedOn = t, Vs(e.priority, function() {
                    Em(n);
                  });
                  return;
                }
              } else if (t === 31) {
                if (t = x(n), t !== null) {
                  e.blockedOn = t, Vs(e.priority, function() {
                    Em(n);
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
            var n = Eo(e.nativeEvent);
            if (n === null) {
              n = e.nativeEvent;
              var a = new n.constructor(n.type, n);
              al = a, n.target.dispatchEvent(a), al = null;
            } else
              return t = Cn(n), t !== null && wm(t), e.blockedOn = n, false;
            t.shift();
          }
          return true;
        }
        function Cm(e, t, n) {
          ir(e) && n.delete(t);
        }
        function j0() {
          Ro = false, Ya !== null && ir(Ya) && (Ya = null), Xa !== null && ir(Xa) && (Xa = null), Qa !== null && ir(Qa) && (Qa = null), Ns.forEach(Cm), js.forEach(Cm);
        }
        function sr(e, t) {
          e.blockedOn === t && (e.blockedOn = null, Ro || (Ro = true, u.unstable_scheduleCallback(u.unstable_NormalPriority, j0)));
        }
        var ur = null;
        function zm(e) {
          ur !== e && (ur = e, u.unstable_scheduleCallback(u.unstable_NormalPriority, function() {
            ur === e && (ur = null);
            for (var t = 0; t < e.length; t += 3) {
              var n = e[t], a = e[t + 1], l = e[t + 2];
              if (typeof a != "function") {
                if (Ao(a || n) === null)
                  continue;
                break;
              }
              var i = Cn(n);
              i !== null && (e.splice(t, 3), t -= 3, wf(i, { pending: true, data: l, method: n.method, action: a }, a, l));
            }
          }));
        }
        function bi(e) {
          function t(T) {
            return sr(T, e);
          }
          Ya !== null && sr(Ya, e), Xa !== null && sr(Xa, e), Qa !== null && sr(Qa, e), Ns.forEach(t), js.forEach(t);
          for (var n = 0; n < Ga.length; n++) {
            var a = Ga[n];
            a.blockedOn === e && (a.blockedOn = null);
          }
          for (; 0 < Ga.length && (n = Ga[0], n.blockedOn === null); )
            Om(n), n.blockedOn === null && Ga.shift();
          if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
            for (a = 0; a < n.length; a += 3) {
              var l = n[a], i = n[a + 1], o = l[gt] || null;
              if (typeof i == "function")
                o || zm(n);
              else if (o) {
                var b = null;
                if (i && i.hasAttribute("formAction")) {
                  if (l = i, o = i[gt] || null)
                    b = o.formAction;
                  else if (Ao(l) !== null)
                    continue;
                } else
                  b = o.action;
                typeof b == "function" ? n[a + 1] = b : (n.splice(a, 3), a -= 3), zm(n);
              }
            }
        }
        function Mm() {
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
        function Oo(e) {
          this._internalRoot = e;
        }
        rr.prototype.render = Oo.prototype.render = function(e) {
          var t = this._internalRoot;
          if (t === null)
            throw Error(f(409));
          var n = t.current, a = Wt();
          jm(n, a, e, t, null, null);
        }, rr.prototype.unmount = Oo.prototype.unmount = function() {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            jm(e.current, 2, null, e, null, null), Qu(), t[Rn] = null;
          }
        };
        function rr(e) {
          this._internalRoot = e;
        }
        rr.prototype.unstable_scheduleHydration = function(e) {
          if (e) {
            var t = ks();
            e = { blockedOn: null, target: e, priority: t };
            for (var n = 0; n < Ga.length && t !== 0 && t < Ga[n].priority; n++)
              ;
            Ga.splice(n, 0, e), n === 0 && Om(e);
          }
        };
        var Um = s.version;
        if (Um !== "19.2.0")
          throw Error(f(527, Um, "19.2.0"));
        I.findDOMNode = function(e) {
          var t = e._reactInternals;
          if (t === void 0)
            throw typeof e.render == "function" ? Error(f(188)) : (e = Object.keys(e).join(","), Error(f(268, e)));
          return e = h(t), e = e !== null ? j(e) : null, e = e === null ? null : e.stateNode, e;
        };
        var T0 = { bundleType: 0, version: "19.2.0", rendererPackageName: "react-dom", currentDispatcherRef: X, reconcilerVersion: "19.2.0" };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
          var fr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!fr.isDisabled && fr.supportsFiber)
            try {
              Fa = fr.inject(T0), Ot = fr;
            } catch (e) {
            }
        }
        return As.createRoot = function(e, t) {
          if (!y(e))
            throw Error(f(299));
          var n = false, a = "", l = Xd, i = Qd, o = Gd;
          return t != null && (t.unstable_strictMode === true && (n = true), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (l = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = _m(e, 1, false, null, null, n, a, null, l, i, o, Mm), e[Rn] = t.current, oo(e), new Oo(t);
        }, As.hydrateRoot = function(e, t, n) {
          if (!y(e))
            throw Error(f(299));
          var a = false, l = "", i = Xd, o = Qd, b = Gd, T = null;
          return n != null && (n.unstable_strictMode === true && (a = true), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onUncaughtError !== void 0 && (i = n.onUncaughtError), n.onCaughtError !== void 0 && (o = n.onCaughtError), n.onRecoverableError !== void 0 && (b = n.onRecoverableError), n.formState !== void 0 && (T = n.formState)), t = _m(e, 1, true, t, n != null ? n : null, a, l, T, i, o, b, Mm), t.context = Nm(null), n = t.current, a = Wt(), a = it(a), l = Aa(a), l.callback = null, Ra(n, l, a), n = a, t.current.lanes = n, Qn(t, n), Ln(t), e[Rn] = t.current, oo(e), new rr(t);
        }, As.version = "19.2.0", As;
      }
      var Wm;
      function Ny() {
        if (Wm)
          return qo.exports;
        Wm = 1;
        function u() {
          if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
            } catch (s) {
              console.error(s);
            }
        }
        return u(), qo.exports = _y(), qo.exports;
      }
      var jy = Ny();
      var Ty = Np(jy);
      var wy = Object.defineProperty;
      var Ey = (u, s, r) => s in u ? wy(u, s, { enumerable: true, configurable: true, writable: true, value: r }) : u[s] = r;
      var jl = (u, s, r) => Ey(u, typeof s != "symbol" ? s + "" : s, r);
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
            for (var v, m = 1, x = arguments.length; m < x; m++) {
              v = arguments[m];
              for (var p in v)
                Object.prototype.hasOwnProperty.call(v, p) && (y[p] = v[p]);
            }
            return y;
          }, u.apply(this, arguments);
        }, s = Sn && Sn.__awaiter || function(y, v, m, x) {
          function p(h) {
            return h instanceof m ? h : new m(function(j) {
              j(h);
            });
          }
          return new (m || (m = Promise))(function(h, j) {
            function E(C) {
              try {
                w(x.next(C));
              } catch (Z) {
                j(Z);
              }
            }
            function Y(C) {
              try {
                w(x.throw(C));
              } catch (Z) {
                j(Z);
              }
            }
            function w(C) {
              C.done ? h(C.value) : p(C.value).then(E, Y);
            }
            w((x = x.apply(y, v || [])).next());
          });
        }, r = Sn && Sn.__generator || function(y, v) {
          var m = { label: 0, sent: function() {
            if (h[0] & 1)
              throw h[1];
            return h[1];
          }, trys: [], ops: [] }, x, p, h, j;
          return j = { next: E(0), throw: E(1), return: E(2) }, typeof Symbol == "function" && (j[Symbol.iterator] = function() {
            return this;
          }), j;
          function E(w) {
            return function(C) {
              return Y([w, C]);
            };
          }
          function Y(w) {
            if (x)
              throw new TypeError("Generator is already executing.");
            for (; j && (j = 0, w[0] && (m = 0)), m; )
              try {
                if (x = 1, p && (h = w[0] & 2 ? p.return : w[0] ? p.throw || ((h = p.return) && h.call(p), 0) : p.next) && !(h = h.call(p, w[1])).done)
                  return h;
                switch (p = 0, h && (w = [w[0] & 2, h.value]), w[0]) {
                  case 0:
                  case 1:
                    h = w;
                    break;
                  case 4:
                    return m.label++, { value: w[1], done: false };
                  case 5:
                    m.label++, p = w[1], w = [0];
                    continue;
                  case 7:
                    w = m.ops.pop(), m.trys.pop();
                    continue;
                  default:
                    if (h = m.trys, !(h = h.length > 0 && h[h.length - 1]) && (w[0] === 6 || w[0] === 2)) {
                      m = 0;
                      continue;
                    }
                    if (w[0] === 3 && (!h || w[1] > h[0] && w[1] < h[3])) {
                      m.label = w[1];
                      break;
                    }
                    if (w[0] === 6 && m.label < h[1]) {
                      m.label = h[1], h = w;
                      break;
                    }
                    if (h && m.label < h[2]) {
                      m.label = h[2], m.ops.push(w);
                      break;
                    }
                    h[2] && m.ops.pop(), m.trys.pop();
                    continue;
                }
                w = v.call(y, m);
              } catch (C) {
                w = [6, C], p = 0;
              } finally {
                x = h = 0;
              }
            if (w[0] & 5)
              throw w[1];
            return { value: w[0] ? w[1] : void 0, done: true };
          }
        };
        Object.defineProperty(Sn, "__esModule", { value: true }), Sn.FrappeCall = void 0;
        var f = function() {
          function y(v, m, x, p, h) {
            this.appURL = v, this.axios = m, this.useToken = x != null ? x : false, this.token = p, this.tokenType = h;
          }
          return y.prototype.get = function(v, m) {
            return s(this, void 0, void 0, function() {
              var x;
              return r(this, function(p) {
                return x = new URLSearchParams(), m && Object.entries(m).forEach(function(h) {
                  var j = h[0], E = h[1];
                  if (E != null) {
                    var Y = typeof E == "object" ? JSON.stringify(E) : E;
                    x.set(j, Y);
                  }
                }), [2, this.axios.get("/api/method/".concat(v), { params: x }).then(function(h) {
                  return h.data;
                }).catch(function(h) {
                  var j, E;
                  throw u(u({}, h.response.data), { httpStatus: h.response.status, httpStatusText: h.response.statusText, message: (j = h.response.data.message) !== null && j !== void 0 ? j : "There was an error.", exception: (E = h.response.data.exception) !== null && E !== void 0 ? E : "" });
                })];
              });
            });
          }, y.prototype.post = function(v, m) {
            return s(this, void 0, void 0, function() {
              return r(this, function(x) {
                return [2, this.axios.post("/api/method/".concat(v), u({}, m)).then(function(p) {
                  return p.data;
                }).catch(function(p) {
                  var h, j;
                  throw u(u({}, p.response.data), { httpStatus: p.response.status, httpStatusText: p.response.statusText, message: (h = p.response.data.message) !== null && h !== void 0 ? h : "There was an error.", exception: (j = p.response.data.exception) !== null && j !== void 0 ? j : "" });
                })];
              });
            });
          }, y.prototype.put = function(v, m) {
            return s(this, void 0, void 0, function() {
              return r(this, function(x) {
                return [2, this.axios.put("/api/method/".concat(v), u({}, m)).then(function(p) {
                  return p.data;
                }).catch(function(p) {
                  var h, j;
                  throw u(u({}, p.response.data), { httpStatus: p.response.status, httpStatusText: p.response.statusText, message: (h = p.response.data.message) !== null && h !== void 0 ? h : "There was an error.", exception: (j = p.response.data.exception) !== null && j !== void 0 ? j : "" });
                })];
              });
            });
          }, y.prototype.delete = function(v, m) {
            return s(this, void 0, void 0, function() {
              return r(this, function(x) {
                return [2, this.axios.delete("/api/method/".concat(v), { params: m }).then(function(p) {
                  return p.data;
                }).catch(function(p) {
                  var h, j;
                  throw u(u({}, p.response.data), { httpStatus: p.response.status, httpStatusText: p.response.statusText, message: (h = p.response.data.message) !== null && h !== void 0 ? h : "There was an error.", exception: (j = p.response.data.exception) !== null && j !== void 0 ? j : "" });
                })];
              });
            });
          }, y;
        }();
        return Sn.FrappeCall = f, Sn;
      }
      var _n = {};
      var Pm;
      function Rp() {
        if (Pm)
          return _n;
        Pm = 1;
        var u = _n && _n.__assign || function() {
          return u = Object.assign || function(y) {
            for (var v, m = 1, x = arguments.length; m < x; m++) {
              v = arguments[m];
              for (var p in v)
                Object.prototype.hasOwnProperty.call(v, p) && (y[p] = v[p]);
            }
            return y;
          }, u.apply(this, arguments);
        }, s = _n && _n.__awaiter || function(y, v, m, x) {
          function p(h) {
            return h instanceof m ? h : new m(function(j) {
              j(h);
            });
          }
          return new (m || (m = Promise))(function(h, j) {
            function E(C) {
              try {
                w(x.next(C));
              } catch (Z) {
                j(Z);
              }
            }
            function Y(C) {
              try {
                w(x.throw(C));
              } catch (Z) {
                j(Z);
              }
            }
            function w(C) {
              C.done ? h(C.value) : p(C.value).then(E, Y);
            }
            w((x = x.apply(y, v || [])).next());
          });
        }, r = _n && _n.__generator || function(y, v) {
          var m = { label: 0, sent: function() {
            if (h[0] & 1)
              throw h[1];
            return h[1];
          }, trys: [], ops: [] }, x, p, h, j;
          return j = { next: E(0), throw: E(1), return: E(2) }, typeof Symbol == "function" && (j[Symbol.iterator] = function() {
            return this;
          }), j;
          function E(w) {
            return function(C) {
              return Y([w, C]);
            };
          }
          function Y(w) {
            if (x)
              throw new TypeError("Generator is already executing.");
            for (; j && (j = 0, w[0] && (m = 0)), m; )
              try {
                if (x = 1, p && (h = w[0] & 2 ? p.return : w[0] ? p.throw || ((h = p.return) && h.call(p), 0) : p.next) && !(h = h.call(p, w[1])).done)
                  return h;
                switch (p = 0, h && (w = [w[0] & 2, h.value]), w[0]) {
                  case 0:
                  case 1:
                    h = w;
                    break;
                  case 4:
                    return m.label++, { value: w[1], done: false };
                  case 5:
                    m.label++, p = w[1], w = [0];
                    continue;
                  case 7:
                    w = m.ops.pop(), m.trys.pop();
                    continue;
                  default:
                    if (h = m.trys, !(h = h.length > 0 && h[h.length - 1]) && (w[0] === 6 || w[0] === 2)) {
                      m = 0;
                      continue;
                    }
                    if (w[0] === 3 && (!h || w[1] > h[0] && w[1] < h[3])) {
                      m.label = w[1];
                      break;
                    }
                    if (w[0] === 6 && m.label < h[1]) {
                      m.label = h[1], h = w;
                      break;
                    }
                    if (h && m.label < h[2]) {
                      m.label = h[2], m.ops.push(w);
                      break;
                    }
                    h[2] && m.ops.pop(), m.trys.pop();
                    continue;
                }
                w = v.call(y, m);
              } catch (C) {
                w = [6, C], p = 0;
              } finally {
                x = h = 0;
              }
            if (w[0] & 5)
              throw w[1];
            return { value: w[0] ? w[1] : void 0, done: true };
          }
        };
        Object.defineProperty(_n, "__esModule", { value: true }), _n.FrappeDB = void 0;
        var f = function() {
          function y(v, m, x, p, h) {
            this.appURL = v, this.axios = m, this.useToken = x != null ? x : false, this.token = p, this.tokenType = h;
          }
          return y.prototype.getDoc = function(v, m) {
            return m === void 0 && (m = ""), s(this, void 0, void 0, function() {
              return r(this, function(x) {
                return [2, this.axios.get("/api/resource/".concat(v, "/").concat(encodeURIComponent(m))).then(function(p) {
                  return p.data.data;
                }).catch(function(p) {
                  var h, j;
                  throw u(u({}, p.response.data), { httpStatus: p.response.status, httpStatusText: p.response.statusText, message: "There was an error while fetching the document.", exception: (j = (h = p.response.data.exception) !== null && h !== void 0 ? h : p.response.data.exc_type) !== null && j !== void 0 ? j : "" });
                })];
              });
            });
          }, y.prototype.getDocList = function(v, m) {
            var x;
            return s(this, void 0, void 0, function() {
              var p, h, j, E, Y, w, C, Z, ie, he, _e;
              return r(this, function(se) {
                return p = {}, m && (h = m.fields, j = m.filters, E = m.orFilters, Y = m.orderBy, w = m.limit, C = m.limit_start, Z = m.groupBy, ie = m.asDict, he = ie === void 0 ? true : ie, _e = Y ? "".concat(String(Y == null ? void 0 : Y.field), " ").concat((x = Y == null ? void 0 : Y.order) !== null && x !== void 0 ? x : "asc") : "", p = { fields: h ? JSON.stringify(h) : void 0, filters: j ? JSON.stringify(j) : void 0, or_filters: E ? JSON.stringify(E) : void 0, order_by: _e, group_by: Z, limit: w, limit_start: C, as_dict: he }), [2, this.axios.get("/api/resource/".concat(v), { params: p }).then(function(ve) {
                  return ve.data.data;
                }).catch(function(ve) {
                  var Ne, De;
                  throw u(u({}, ve.response.data), { httpStatus: ve.response.status, httpStatusText: ve.response.statusText, message: "There was an error while fetching the documents.", exception: (De = (Ne = ve.response.data.exception) !== null && Ne !== void 0 ? Ne : ve.response.data.exc_type) !== null && De !== void 0 ? De : "" });
                })];
              });
            });
          }, y.prototype.createDoc = function(v, m) {
            return s(this, void 0, void 0, function() {
              return r(this, function(x) {
                return [2, this.axios.post("/api/resource/".concat(v), u({}, m)).then(function(p) {
                  return p.data.data;
                }).catch(function(p) {
                  var h, j, E;
                  throw u(u({}, p.response.data), { httpStatus: p.response.status, httpStatusText: p.response.statusText, message: (h = p.response.data.message) !== null && h !== void 0 ? h : "There was an error while creating the document.", exception: (E = (j = p.response.data.exception) !== null && j !== void 0 ? j : p.response.data.exc_type) !== null && E !== void 0 ? E : "" });
                })];
              });
            });
          }, y.prototype.updateDoc = function(v, m, x) {
            return s(this, void 0, void 0, function() {
              return r(this, function(p) {
                return [2, this.axios.put("/api/resource/".concat(v, "/").concat(m && encodeURIComponent(m)), u({}, x)).then(function(h) {
                  return h.data.data;
                }).catch(function(h) {
                  var j, E, Y;
                  throw u(u({}, h.response.data), { httpStatus: h.response.status, httpStatusText: h.response.statusText, message: (j = h.response.data.message) !== null && j !== void 0 ? j : "There was an error while updating the document.", exception: (Y = (E = h.response.data.exception) !== null && E !== void 0 ? E : h.response.data.exc_type) !== null && Y !== void 0 ? Y : "" });
                })];
              });
            });
          }, y.prototype.deleteDoc = function(v, m) {
            return s(this, void 0, void 0, function() {
              return r(this, function(x) {
                return [2, this.axios.delete("/api/resource/".concat(v, "/").concat(m && encodeURIComponent(m))).then(function(p) {
                  return p.data;
                }).catch(function(p) {
                  var h, j;
                  throw u(u({}, p.response.data), { httpStatus: p.response.status, httpStatusText: p.response.statusText, message: "There was an error while deleting the document.", exception: (j = (h = p.response.data.exception) !== null && h !== void 0 ? h : p.response.data.exc_type) !== null && j !== void 0 ? j : "" });
                })];
              });
            });
          }, y.prototype.getCount = function(v, m, x, p) {
            return x === void 0 && (x = false), p === void 0 && (p = false), s(this, void 0, void 0, function() {
              var h;
              return r(this, function(j) {
                return h = { doctype: v, filters: [] }, x && (h.cache = x), p && (h.debug = p), m && (h.filters = m ? JSON.stringify(m) : void 0), [2, this.axios.get("/api/method/frappe.client.get_count", { params: h }).then(function(E) {
                  return E.data.message;
                }).catch(function(E) {
                  var Y, w;
                  throw u(u({}, E.response.data), { httpStatus: E.response.status, httpStatusText: E.response.statusText, message: "There was an error while getting the count.", exception: (w = (Y = E.response.data.exception) !== null && Y !== void 0 ? Y : E.response.data.exc_type) !== null && w !== void 0 ? w : "" });
                })];
              });
            });
          }, y.prototype.getLastDoc = function(v, m) {
            return s(this, void 0, void 0, function() {
              var x, p;
              return r(this, function(h) {
                switch (h.label) {
                  case 0:
                    return x = { orderBy: { field: "creation", order: "desc" } }, m && (x = u(u({}, x), m)), [4, this.getDocList(v, u(u({}, x), { limit: 1, fields: ["name"] }))];
                  case 1:
                    return p = h.sent(), p.length > 0 ? [2, this.getDoc(v, p[0].name)] : [2, {}];
                }
              });
            });
          }, y.prototype.renameDoc = function(v, m, x, p) {
            return p === void 0 && (p = false), s(this, void 0, void 0, function() {
              return r(this, function(h) {
                return [2, this.axios.post("/api/method/frappe.client.rename_doc", { doctype: v, old_name: m, new_name: x, merge: p }).then(function(j) {
                  return j.data;
                }).catch(function(j) {
                  var E, Y, w;
                  throw u(u({}, j.response.data), { httpStatus: j.response.status, httpStatusText: j.response.statusText, message: (E = j.response.data.message) !== null && E !== void 0 ? E : "There was an error while renaming the document.", exception: (w = (Y = j.response.data.exception) !== null && Y !== void 0 ? Y : j.response.data.exc_type) !== null && w !== void 0 ? w : "" });
                })];
              });
            });
          }, y.prototype.getValue = function(v, m, x, p, h, j) {
            return p === void 0 && (p = true), h === void 0 && (h = false), j === void 0 && (j = null), s(this, void 0, void 0, function() {
              var E;
              return r(this, function(Y) {
                return E = { doctype: v, fieldname: "[]", filters: [], as_dict: p, debug: h, parent: null }, m && (E.fieldname = typeof m == "object" ? JSON.stringify(m) : m), x && (E.filters = x ? JSON.stringify(x) : void 0), j && (E.parent = j), [2, this.axios.get("/api/method/frappe.client.get_value", { params: E }).then(function(w) {
                  return w.data;
                }).catch(function(w) {
                  var C, Z;
                  throw u(u({}, w.response.data), { httpStatus: w.response.status, httpStatusText: w.response.statusText, message: "There was an error while getting the value.", exception: (Z = (C = w.response.data.exception) !== null && C !== void 0 ? C : w.response.data.exc_type) !== null && Z !== void 0 ? Z : "" });
                })];
              });
            });
          }, y.prototype.setValue = function(v, m, x, p) {
            return s(this, void 0, void 0, function() {
              return r(this, function(h) {
                return x !== null && typeof x == "object" && !Array.isArray(x) && (p = void 0), [2, this.axios.post("/api/method/frappe.client.set_value", { doctype: v, name: m, fieldname: x, value: p }).then(function(j) {
                  return j.data;
                }).catch(function(j) {
                  var E, Y;
                  throw u(u({}, j.response.data), { httpStatus: j.response.status, httpStatusText: j.response.statusText, message: "There was an error while setting the value.", exception: (Y = (E = j.response.data.exception) !== null && E !== void 0 ? E : j.response.data.exc_type) !== null && Y !== void 0 ? Y : "" });
                })];
              });
            });
          }, y.prototype.getSingleValue = function(v, m) {
            return s(this, void 0, void 0, function() {
              var x;
              return r(this, function(p) {
                return x = { doctype: v, field: m }, [2, this.axios.get("/api/method/frappe.client.get_single_value", { params: x }).then(function(h) {
                  return h.data;
                }).catch(function(h) {
                  var j, E;
                  throw u(u({}, h.response.data), { httpStatus: h.response.status, httpStatusText: h.response.statusText, message: "There was an error while getting the value of single doctype.", exception: (E = (j = h.response.data.exception) !== null && j !== void 0 ? j : h.response.data.exc_type) !== null && E !== void 0 ? E : "" });
                })];
              });
            });
          }, y.prototype.submit = function(v) {
            return s(this, void 0, void 0, function() {
              return r(this, function(m) {
                return [2, this.axios.post("/api/method/frappe.client.submit", { doc: v }).then(function(x) {
                  return x.data.message;
                }).catch(function(x) {
                  var p, h;
                  throw u(u({}, x.response.data), { httpStatus: x.response.status, httpStatusText: x.response.statusText, message: "There was an error while submitting the document.", exception: (h = (p = x.response.data.exception) !== null && p !== void 0 ? p : x.response.data.exc_type) !== null && h !== void 0 ? h : "" });
                })];
              });
            });
          }, y.prototype.cancel = function(v, m) {
            return s(this, void 0, void 0, function() {
              return r(this, function(x) {
                return [2, this.axios.post("/api/method/frappe.client.cancel", { doctype: v, name: m }).then(function(p) {
                  return p.data;
                }).catch(function(p) {
                  var h, j;
                  throw u(u({}, p.response.data), { httpStatus: p.response.status, httpStatusText: p.response.statusText, message: "There was an error while cancelling the document.", exception: (j = (h = p.response.data.exception) !== null && h !== void 0 ? h : p.response.data.exc_type) !== null && j !== void 0 ? j : "" });
                })];
              });
            });
          }, y;
        }();
        return _n.FrappeDB = f, _n;
      }
      var Nn = {};
      var ha = {};
      var Xo;
      var Im;
      function Ry() {
        if (Im)
          return Xo;
        Im = 1;
        function u(c, g) {
          return function() {
            return c.apply(g, arguments);
          };
        }
        const { toString: s } = Object.prototype, { getPrototypeOf: r } = Object, { iterator: f, toStringTag: y } = Symbol, v = ((c) => (g) => {
          const S = s.call(g);
          return c[S] || (c[S] = S.slice(8, -1).toLowerCase());
        })(/* @__PURE__ */ Object.create(null)), m = (c) => (c = c.toLowerCase(), (g) => v(g) === c), x = (c) => (g) => typeof g === c, { isArray: p } = Array, h = x("undefined");
        function j(c) {
          return c !== null && !h(c) && c.constructor !== null && !h(c.constructor) && C(c.constructor.isBuffer) && c.constructor.isBuffer(c);
        }
        const E = m("ArrayBuffer");
        function Y(c) {
          let g;
          return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? g = ArrayBuffer.isView(c) : g = c && c.buffer && E(c.buffer), g;
        }
        const w = x("string"), C = x("function"), Z = x("number"), ie = (c) => c !== null && typeof c == "object", he = (c) => c === true || c === false, _e = (c) => {
          if (v(c) !== "object")
            return false;
          const g = r(c);
          return (g === null || g === Object.prototype || Object.getPrototypeOf(g) === null) && !(y in c) && !(f in c);
        }, se = (c) => {
          if (!ie(c) || j(c))
            return false;
          try {
            return Object.keys(c).length === 0 && Object.getPrototypeOf(c) === Object.prototype;
          } catch (g) {
            return false;
          }
        }, ve = m("Date"), Ne = m("File"), De = m("Blob"), ce = m("FileList"), lt = (c) => ie(c) && C(c.pipe), wt = (c) => {
          let g;
          return c && (typeof FormData == "function" && c instanceof FormData || C(c.append) && ((g = v(c)) === "formdata" || g === "object" && C(c.toString) && c.toString() === "[object FormData]"));
        }, Pt = m("URLSearchParams"), [pt, Ue, Ge, ze] = ["ReadableStream", "Request", "Response", "Headers"].map(m), xt = (c) => c.trim ? c.trim() : c.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        function X(c, g, { allOwnKeys: S = false } = {}) {
          if (c === null || typeof c > "u")
            return;
          let N, A;
          if (typeof c != "object" && (c = [c]), p(c))
            for (N = 0, A = c.length; N < A; N++)
              g.call(null, c[N], N, c);
          else {
            if (j(c))
              return;
            const M = S ? Object.getOwnPropertyNames(c) : Object.keys(c), z = M.length;
            let F;
            for (N = 0; N < z; N++)
              F = M[N], g.call(null, c[F], F, c);
          }
        }
        function I(c, g) {
          if (j(c))
            return null;
          g = g.toLowerCase();
          const S = Object.keys(c);
          let N = S.length, A;
          for (; N-- > 0; )
            if (A = S[N], g === A.toLowerCase())
              return A;
          return null;
        }
        const J = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Ay, ee = (c) => !h(c) && c !== J;
        function de() {
          const { caseless: c, skipUndefined: g } = ee(this) && this || {}, S = {}, N = (A, M) => {
            const z = c && I(S, M) || M;
            _e(S[z]) && _e(A) ? S[z] = de(S[z], A) : _e(A) ? S[z] = de({}, A) : p(A) ? S[z] = A.slice() : (!g || !h(A)) && (S[z] = A);
          };
          for (let A = 0, M = arguments.length; A < M; A++)
            arguments[A] && X(arguments[A], N);
          return S;
        }
        const _ = (c, g, S, { allOwnKeys: N } = {}) => (X(g, (A, M) => {
          S && C(A) ? c[M] = u(A, S) : c[M] = A;
        }, { allOwnKeys: N }), c), B = (c) => (c.charCodeAt(0) === 65279 && (c = c.slice(1)), c), k = (c, g, S, N) => {
          c.prototype = Object.create(g.prototype, N), c.prototype.constructor = c, Object.defineProperty(c, "super", { value: g.prototype }), S && Object.assign(c.prototype, S);
        }, K = (c, g, S, N) => {
          let A, M, z;
          const F = {};
          if (g = g || {}, c == null)
            return g;
          do {
            for (A = Object.getOwnPropertyNames(c), M = A.length; M-- > 0; )
              z = A[M], (!N || N(z, c, g)) && !F[z] && (g[z] = c[z], F[z] = true);
            c = S !== false && r(c);
          } while (c && (!S || S(c, g)) && c !== Object.prototype);
          return g;
        }, re = (c, g, S) => {
          c = String(c), (S === void 0 || S > c.length) && (S = c.length), S -= g.length;
          const N = c.indexOf(g, S);
          return N !== -1 && N === S;
        }, xe = (c) => {
          if (!c)
            return null;
          if (p(c))
            return c;
          let g = c.length;
          if (!Z(g))
            return null;
          const S = new Array(g);
          for (; g-- > 0; )
            S[g] = c[g];
          return S;
        }, me = ((c) => (g) => c && g instanceof c)(typeof Uint8Array < "u" && r(Uint8Array)), ct = (c, g) => {
          const S = (c && c[f]).call(c);
          let N;
          for (; (N = S.next()) && !N.done; ) {
            const A = N.value;
            g.call(c, A[0], A[1]);
          }
        }, Ze = (c, g) => {
          let S;
          const N = [];
          for (; (S = c.exec(g)) !== null; )
            N.push(S);
          return N;
        }, St = m("HTMLFormElement"), pa = (c) => c.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(g, S, N) {
          return S.toUpperCase() + N;
        }), wl = (({ hasOwnProperty: c }) => (g, S) => c.call(g, S))(Object.prototype), Us = m("RegExp"), En = (c, g) => {
          const S = Object.getOwnPropertyDescriptors(c), N = {};
          X(S, (A, M) => {
            let z;
            (z = g(A, M, c)) !== false && (N[M] = z || A);
          }), Object.defineProperties(c, N);
        }, ji = (c) => {
          En(c, (g, S) => {
            if (C(c) && ["arguments", "caller", "callee"].indexOf(S) !== -1)
              return false;
            const N = c[S];
            if (C(N)) {
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
          const S = {}, N = (A) => {
            A.forEach((M) => {
              S[M] = true;
            });
          };
          return p(c) ? N(c) : N(String(c).split(g)), S;
        }, Tr = () => {
        }, Ds = (c, g) => c != null && Number.isFinite(c = +c) ? c : g;
        function wi(c) {
          return !!(c && C(c.append) && c[y] === "FormData" && c[f]);
        }
        const Ei = (c) => {
          const g = new Array(10), S = (N, A) => {
            if (ie(N)) {
              if (g.indexOf(N) >= 0)
                return;
              if (j(N))
                return N;
              if (!("toJSON" in N)) {
                g[A] = N;
                const M = p(N) ? [] : {};
                return X(N, (z, F) => {
                  const ae = S(z, A + 1);
                  !h(ae) && (M[F] = ae);
                }), g[A] = void 0, M;
              }
            }
            return N;
          };
          return S(c, 0);
        }, Ai = m("AsyncFunction"), wr = (c) => c && (ie(c) || C(c)) && C(c.then) && C(c.catch), Bs = ((c, g) => c ? setImmediate : g ? ((S, N) => (J.addEventListener("message", ({ source: A, data: M }) => {
          A === J && M === S && N.length && N.shift()();
        }, false), (A) => {
          N.push(A), J.postMessage(S, "*");
        }))(`axios@${Math.random()}`, []) : (S) => setTimeout(S))(typeof setImmediate == "function", C(J.postMessage)), Rt = typeof queueMicrotask < "u" ? queueMicrotask.bind(J) : typeof process < "u" && process.nextTick || Bs;
        var H = { isArray: p, isArrayBuffer: E, isBuffer: j, isFormData: wt, isArrayBufferView: Y, isString: w, isNumber: Z, isBoolean: he, isObject: ie, isPlainObject: _e, isEmptyObject: se, isReadableStream: pt, isRequest: Ue, isResponse: Ge, isHeaders: ze, isUndefined: h, isDate: ve, isFile: Ne, isBlob: De, isRegExp: Us, isFunction: C, isStream: lt, isURLSearchParams: Pt, isTypedArray: me, isFileList: ce, forEach: X, merge: de, extend: _, trim: xt, stripBOM: B, inherits: k, toFlatObject: K, kindOf: v, kindOfTest: m, endsWith: re, toArray: xe, forEachEntry: ct, matchAll: Ze, isHTMLForm: St, hasOwnProperty: wl, hasOwnProp: wl, reduceDescriptors: En, freezeMethods: ji, toObjectSet: Ti, toCamelCase: pa, noop: Tr, toFiniteNumber: Ds, findKey: I, global: J, isContextDefined: ee, isSpecCompliantForm: wi, toJSONObject: Ei, isAsyncFn: Ai, isThenable: wr, setImmediate: Bs, asap: Rt, isIterable: (c) => c != null && C(c[f]) };
        function pe(c, g, S, N, A) {
          Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = c, this.name = "AxiosError", g && (this.code = g), S && (this.config = S), N && (this.request = N), A && (this.response = A, this.status = A.status ? A.status : null);
        }
        H.inherits(pe, Error, { toJSON: function() {
          return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: H.toJSONObject(this.config), code: this.code, status: this.status };
        } });
        const Ri = pe.prototype, Ja = {};
        ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((c) => {
          Ja[c] = { value: c };
        }), Object.defineProperties(pe, Ja), Object.defineProperty(Ri, "isAxiosError", { value: true }), pe.from = (c, g, S, N, A, M) => {
          const z = Object.create(Ri);
          H.toFlatObject(c, z, function(W) {
            return W !== Error.prototype;
          }, (W) => W !== "isAxiosError");
          const F = c && c.message ? c.message : "Error", ae = g == null && c ? c.code : g;
          return pe.call(z, F, ae, S, N, A), c && z.cause == null && Object.defineProperty(z, "cause", { value: c, configurable: true }), z.name = c && c.name || "Error", M && Object.assign(z, M), z;
        };
        var Er = null;
        function El(c) {
          return H.isPlainObject(c) || H.isArray(c);
        }
        function qs(c) {
          return H.endsWith(c, "[]") ? c.slice(0, -2) : c;
        }
        function Hs(c, g, S) {
          return c ? c.concat(g).map(function(N, A) {
            return N = qs(N), !S && A ? "[" + N + "]" : N;
          }).join(S ? "." : "") : g;
        }
        function Fa(c) {
          return H.isArray(c) && !c.some(El);
        }
        const Ot = H.toFlatObject(H, {}, null, function(c) {
          return /^is[A-Z]/.test(c);
        });
        function Qt(c, g, S) {
          if (!H.isObject(c))
            throw new TypeError("target must be an object");
          g = g || new FormData(), S = H.toFlatObject(S, { metaTokens: true, dots: false, indexes: false }, false, function(ge, P) {
            return !H.isUndefined(P[ge]);
          });
          const N = S.metaTokens, A = S.visitor || W, M = S.dots, z = S.indexes, F = (S.Blob || typeof Blob < "u" && Blob) && H.isSpecCompliantForm(g);
          if (!H.isFunction(A))
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
                P = N ? P : P.slice(0, -2), ge = JSON.stringify(ge);
              else if (H.isArray(ge) && Fa(ge) || (H.isFileList(ge) || H.endsWith(P, "[]")) && (Ke = H.toArray(ge)))
                return P = qs(P), Ke.forEach(function(bt, tt) {
                  !(H.isUndefined(bt) || bt === null) && g.append(z === true ? Hs([P], tt, M) : z === null ? P : P + "[]", ae(bt));
                }), false;
            }
            return El(ge) ? true : (g.append(Hs(te, P, M), ae(ge)), false);
          }
          const $ = [], oe = Object.assign(Ot, { defaultVisitor: W, convertValue: ae, isVisitable: El });
          function He(ge, P) {
            if (!H.isUndefined(ge)) {
              if ($.indexOf(ge) !== -1)
                throw Error("Circular reference detected in " + P.join("."));
              $.push(ge), H.forEach(ge, function(te, Ke) {
                (!(H.isUndefined(te) || te === null) && A.call(g, te, H.isString(Ke) ? Ke.trim() : Ke, P, oe)) === true && He(te, P ? P.concat(Ke) : [Ke]);
              }), $.pop();
            }
          }
          if (!H.isObject(c))
            throw new TypeError("data must be an object");
          return He(c), g;
        }
        function Et(c) {
          const g = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
          return encodeURIComponent(c).replace(/[!'()~]|%20|%00/g, function(S) {
            return g[S];
          });
        }
        function Oi(c, g) {
          this._pairs = [], c && Qt(c, this, g);
        }
        const Ls = Oi.prototype;
        Ls.append = function(c, g) {
          this._pairs.push([c, g]);
        }, Ls.toString = function(c) {
          const g = c ? function(S) {
            return c.call(this, S, Et);
          } : Et;
          return this._pairs.map(function(S) {
            return g(S[0]) + "=" + g(S[1]);
          }, "").join("&");
        };
        function Ar(c) {
          return encodeURIComponent(c).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
        }
        function Wa(c, g, S) {
          if (!g)
            return c;
          const N = S && S.encode || Ar;
          H.isFunction(S) && (S = { serialize: S });
          const A = S && S.serialize;
          let M;
          if (A ? M = A(g, S) : M = H.isURLSearchParams(g) ? g.toString() : new Oi(g, S).toString(N), M) {
            const z = c.indexOf("#");
            z !== -1 && (c = c.slice(0, z)), c += (c.indexOf("?") === -1 ? "?" : "&") + M;
          }
          return c;
        }
        class Al {
          constructor() {
            this.handlers = [];
          }
          use(g, S, N) {
            return this.handlers.push({ fulfilled: g, rejected: S, synchronous: N ? N.synchronous : false, runWhen: N ? N.runWhen : null }), this.handlers.length - 1;
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
        var $a = Al, An = { silentJSONParsing: true, forcedJSONParsing: true, clarifyTimeoutError: false }, Rl = typeof URLSearchParams < "u" ? URLSearchParams : Oi, Pa = typeof FormData < "u" ? FormData : null, Rr = typeof Blob < "u" ? Blob : null, Ys = { isBrowser: true, classes: { URLSearchParams: Rl, FormData: Pa, Blob: Rr }, protocols: ["http", "https", "file", "blob", "url", "data"] };
        const Ia = typeof window < "u" && typeof document < "u", Qn = typeof navigator == "object" && navigator || void 0, Or = Ia && (!Qn || ["ReactNative", "NativeScript", "NS"].indexOf(Qn.product) < 0), Xs = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Qs = Ia && window.location.href || "http://localhost";
        var Gs = Object.freeze({ __proto__: null, hasBrowserEnv: Ia, hasStandardBrowserWebWorkerEnv: Xs, hasStandardBrowserEnv: Or, navigator: Qn, origin: Qs }), it = Ve(Ve({}, Gs), Ys);
        function Ci(c, g) {
          return Qt(c, new it.classes.URLSearchParams(), Ve({ visitor: function(S, N, A, M) {
            return it.isNode && H.isBuffer(S) ? (this.append(N, S.toString("base64")), false) : M.defaultVisitor.apply(this, arguments);
          } }, g));
        }
        function ks(c) {
          return H.matchAll(/\w+|\[(\w*)]/g, c).map((g) => g[0] === "[]" ? "" : g[1] || g[0]);
        }
        function Vs(c) {
          const g = {}, S = Object.keys(c);
          let N;
          const A = S.length;
          let M;
          for (N = 0; N < A; N++)
            M = S[N], g[M] = c[M];
          return g;
        }
        function gn(c) {
          function g(S, N, A, M) {
            let z = S[M++];
            if (z === "__proto__")
              return true;
            const F = Number.isFinite(+z), ae = M >= S.length;
            return z = !z && H.isArray(A) ? A.length : z, ae ? (H.hasOwnProp(A, z) ? A[z] = [A[z], N] : A[z] = N, !F) : ((!A[z] || !H.isObject(A[z])) && (A[z] = []), g(S, N, A[z], M) && H.isArray(A[z]) && (A[z] = Vs(A[z])), !F);
          }
          if (H.isFormData(c) && H.isFunction(c.entries)) {
            const S = {};
            return H.forEachEntry(c, (N, A) => {
              g(ks(N), A, S, 0);
            }), S;
          }
          return null;
        }
        function dt(c, g, S) {
          if (H.isString(c))
            try {
              return (g || JSON.parse)(c), H.trim(c);
            } catch (N) {
              if (N.name !== "SyntaxError")
                throw N;
            }
          return (S || JSON.stringify)(c);
        }
        const gt = { transitional: An, adapter: ["xhr", "http", "fetch"], transformRequest: [function(c, g) {
          const S = g.getContentType() || "", N = S.indexOf("application/json") > -1, A = H.isObject(c);
          if (A && H.isHTMLForm(c) && (c = new FormData(c)), H.isFormData(c))
            return N ? JSON.stringify(gn(c)) : c;
          if (H.isArrayBuffer(c) || H.isBuffer(c) || H.isStream(c) || H.isFile(c) || H.isBlob(c) || H.isReadableStream(c))
            return c;
          if (H.isArrayBufferView(c))
            return c.buffer;
          if (H.isURLSearchParams(c))
            return g.setContentType("application/x-www-form-urlencoded;charset=utf-8", false), c.toString();
          let M;
          if (A) {
            if (S.indexOf("application/x-www-form-urlencoded") > -1)
              return Ci(c, this.formSerializer).toString();
            if ((M = H.isFileList(c)) || S.indexOf("multipart/form-data") > -1) {
              const z = this.env && this.env.FormData;
              return Qt(M ? { "files[]": c } : c, z && new z(), this.formSerializer);
            }
          }
          return A || N ? (g.setContentType("application/json", false), dt(c)) : c;
        }], transformResponse: [function(c) {
          const g = this.transitional || gt.transitional, S = g && g.forcedJSONParsing, N = this.responseType === "json";
          if (H.isResponse(c) || H.isReadableStream(c))
            return c;
          if (c && H.isString(c) && (S && !this.responseType || N)) {
            const A = !(g && g.silentJSONParsing) && N;
            try {
              return JSON.parse(c, this.parseReviver);
            } catch (M) {
              if (A)
                throw M.name === "SyntaxError" ? pe.from(M, pe.ERR_BAD_RESPONSE, this, null, this.response) : M;
            }
          }
          return c;
        }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, env: { FormData: it.classes.FormData, Blob: it.classes.Blob }, validateStatus: function(c) {
          return c >= 200 && c < 300;
        }, headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } } };
        H.forEach(["delete", "get", "head", "post", "put", "patch"], (c) => {
          gt.headers[c] = {};
        });
        var Rn = gt;
        const zi = H.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);
        var Cr = (c) => {
          const g = {};
          let S, N, A;
          return c && c.split(`
`).forEach(function(M) {
            A = M.indexOf(":"), S = M.substring(0, A).trim().toLowerCase(), N = M.substring(A + 1).trim(), !(!S || g[S] && zi[S]) && (S === "set-cookie" ? g[S] ? g[S].push(N) : g[S] = [N] : g[S] = g[S] ? g[S] + ", " + N : N);
          }), g;
        };
        const Zs = Symbol("internals");
        function ga(c) {
          return c && String(c).trim().toLowerCase();
        }
        function On(c) {
          return c === false || c == null ? c : H.isArray(c) ? c.map(On) : String(c);
        }
        function Mi(c) {
          const g = /* @__PURE__ */ Object.create(null), S = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
          let N;
          for (; N = S.exec(c); )
            g[N[1]] = N[2];
          return g;
        }
        const ya = (c) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(c.trim());
        function Cn(c, g, S, N, A) {
          if (H.isFunction(N))
            return N.call(this, g, S);
          if (A && (g = S), !!H.isString(g)) {
            if (H.isString(N))
              return g.indexOf(N) !== -1;
            if (H.isRegExp(N))
              return N.test(g);
          }
        }
        function el(c) {
          return c.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (g, S, N) => S.toUpperCase() + N);
        }
        function ba(c, g) {
          const S = H.toCamelCase(" " + g);
          ["get", "set", "has"].forEach((N) => {
            Object.defineProperty(c, N + S, { value: function(A, M, z) {
              return this[N].call(this, g, A, M, z);
            }, configurable: true });
          });
        }
        class $e {
          constructor(g) {
            g && this.set(g);
          }
          set(g, S, N) {
            const A = this;
            function M(F, ae, W) {
              const $ = ga(ae);
              if (!$)
                throw new Error("header name must be a non-empty string");
              const oe = H.findKey(A, $);
              (!oe || A[oe] === void 0 || W === true || W === void 0 && A[oe] !== false) && (A[oe || ae] = On(F));
            }
            const z = (F, ae) => H.forEach(F, (W, $) => M(W, $, ae));
            if (H.isPlainObject(g) || g instanceof this.constructor)
              z(g, S);
            else if (H.isString(g) && (g = g.trim()) && !ya(g))
              z(Cr(g), S);
            else if (H.isObject(g) && H.isIterable(g)) {
              let F = {}, ae, W;
              for (const $ of g) {
                if (!H.isArray($))
                  throw TypeError("Object iterator must return a key-value pair");
                F[W = $[0]] = (ae = F[W]) ? H.isArray(ae) ? [...ae, $[1]] : [ae, $[1]] : $[1];
              }
              z(F, S);
            } else
              g != null && M(S, g, N);
            return this;
          }
          get(g, S) {
            if (g = ga(g), g) {
              const N = H.findKey(this, g);
              if (N) {
                const A = this[N];
                if (!S)
                  return A;
                if (S === true)
                  return Mi(A);
                if (H.isFunction(S))
                  return S.call(this, A, N);
                if (H.isRegExp(S))
                  return S.exec(A);
                throw new TypeError("parser must be boolean|regexp|function");
              }
            }
          }
          has(g, S) {
            if (g = ga(g), g) {
              const N = H.findKey(this, g);
              return !!(N && this[N] !== void 0 && (!S || Cn(this, this[N], N, S)));
            }
            return false;
          }
          delete(g, S) {
            const N = this;
            let A = false;
            function M(z) {
              if (z = ga(z), z) {
                const F = H.findKey(N, z);
                F && (!S || Cn(N, N[F], F, S)) && (delete N[F], A = true);
              }
            }
            return H.isArray(g) ? g.forEach(M) : M(g), A;
          }
          clear(g) {
            const S = Object.keys(this);
            let N = S.length, A = false;
            for (; N--; ) {
              const M = S[N];
              (!g || Cn(this, this[M], M, g, true)) && (delete this[M], A = true);
            }
            return A;
          }
          normalize(g) {
            const S = this, N = {};
            return H.forEach(this, (A, M) => {
              const z = H.findKey(N, M);
              if (z) {
                S[z] = On(A), delete S[M];
                return;
              }
              const F = g ? el(M) : String(M).trim();
              F !== M && delete S[M], S[F] = On(A), N[F] = true;
            }), this;
          }
          concat(...g) {
            return this.constructor.concat(this, ...g);
          }
          toJSON(g) {
            const S = /* @__PURE__ */ Object.create(null);
            return H.forEach(this, (N, A) => {
              N != null && N !== false && (S[A] = g && H.isArray(N) ? N.join(", ") : N);
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
            const N = new this(g);
            return S.forEach((A) => N.set(A)), N;
          }
          static accessor(g) {
            const S = (this[Zs] = this[Zs] = { accessors: {} }).accessors, N = this.prototype;
            function A(M) {
              const z = ga(M);
              S[z] || (ba(N, M), S[z] = true);
            }
            return H.isArray(g) ? g.forEach(A) : A(g), this;
          }
        }
        $e.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), H.reduceDescriptors($e.prototype, ({ value: c }, g) => {
          let S = g[0].toUpperCase() + g.slice(1);
          return { get: () => c, set(N) {
            this[S] = N;
          } };
        }), H.freezeMethods($e);
        var Mt = $e;
        function Ol(c, g) {
          const S = this || Rn, N = g || S, A = Mt.from(N.headers);
          let M = N.data;
          return H.forEach(c, function(z) {
            M = z.call(S, M, A.normalize(), g ? g.status : void 0);
          }), A.normalize(), M;
        }
        function zn(c) {
          return !!(c && c.__CANCEL__);
        }
        function Gt(c, g, S) {
          pe.call(this, c != null ? c : "canceled", pe.ERR_CANCELED, g, S), this.name = "CanceledError";
        }
        H.inherits(Gt, pe, { __CANCEL__: true });
        function Ks(c, g, S) {
          const N = S.config.validateStatus;
          !S.status || !N || N(S.status) ? c(S) : g(new pe("Request failed with status code " + S.status, [pe.ERR_BAD_REQUEST, pe.ERR_BAD_RESPONSE][Math.floor(S.status / 100) - 4], S.config, S.request, S));
        }
        function Js(c) {
          const g = /^([-+\w]{1,25})(:?\/\/|:)/.exec(c);
          return g && g[1] || "";
        }
        function Fs(c, g) {
          c = c || 10;
          const S = new Array(c), N = new Array(c);
          let A = 0, M = 0, z;
          return g = g !== void 0 ? g : 1e3, function(F) {
            const ae = Date.now(), W = N[M];
            z || (z = ae), S[A] = F, N[A] = ae;
            let $ = M, oe = 0;
            for (; $ !== A; )
              oe += S[$++], $ = $ % c;
            if (A = (A + 1) % c, A === M && (M = (M + 1) % c), ae - z < g)
              return;
            const He = W && ae - W;
            return He ? Math.round(oe * 1e3 / He) : void 0;
          };
        }
        function zr(c, g) {
          let S = 0, N = 1e3 / g, A, M;
          const z = (F, ae = Date.now()) => {
            S = ae, A = null, M && (clearTimeout(M), M = null), c(...F);
          };
          return [(...F) => {
            const ae = Date.now(), W = ae - S;
            W >= N ? z(F, ae) : (A = F, M || (M = setTimeout(() => {
              M = null, z(A);
            }, N - W)));
          }, () => A && z(A)];
        }
        const Gn = (c, g, S = 3) => {
          let N = 0;
          const A = Fs(50, 250);
          return zr((M) => {
            const z = M.loaded, F = M.lengthComputable ? M.total : void 0, ae = z - N, W = A(ae), $ = z <= F;
            N = z;
            const oe = { loaded: z, total: F, progress: F ? z / F : void 0, bytes: ae, rate: W || void 0, estimated: W && F && $ ? (F - z) / W : void 0, event: M, lengthComputable: F != null, [g ? "download" : "upload"]: true };
            c(oe);
          }, S);
        }, tl = (c, g) => {
          const S = c != null;
          return [(N) => g[0]({ lengthComputable: S, total: c, loaded: N }), g[1]];
        }, It = (c) => (...g) => H.asap(() => c(...g));
        var Ut = it.hasStandardBrowserEnv ? ((c, g) => (S) => (S = new URL(S, it.origin), c.protocol === S.protocol && c.host === S.host && (g || c.port === S.port)))(new URL(it.origin), it.navigator && /(msie|trident)/i.test(it.navigator.userAgent)) : () => true, Ws = it.hasStandardBrowserEnv ? { write(c, g, S, N, A, M) {
          const z = [c + "=" + encodeURIComponent(g)];
          H.isNumber(S) && z.push("expires=" + new Date(S).toGMTString()), H.isString(N) && z.push("path=" + N), H.isString(A) && z.push("domain=" + A), M === true && z.push("secure"), document.cookie = z.join("; ");
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
          let N = !Mr(g);
          return c && (N || S == false) ? Ui(c, g) : g;
        }
        const nl = (c) => c instanceof Mt ? Ve({}, c) : c;
        function kn(c, g) {
          g = g || {};
          const S = {};
          function N(W, $, oe, He) {
            return H.isPlainObject(W) && H.isPlainObject($) ? H.merge.call({ caseless: He }, W, $) : H.isPlainObject($) ? H.merge({}, $) : H.isArray($) ? $.slice() : $;
          }
          function A(W, $, oe, He) {
            if (H.isUndefined($)) {
              if (!H.isUndefined(W))
                return N(void 0, W, oe, He);
            } else
              return N(W, $, oe, He);
          }
          function M(W, $) {
            if (!H.isUndefined($))
              return N(void 0, $);
          }
          function z(W, $) {
            if (H.isUndefined($)) {
              if (!H.isUndefined(W))
                return N(void 0, W);
            } else
              return N(void 0, $);
          }
          function F(W, $, oe) {
            if (oe in g)
              return N(W, $);
            if (oe in c)
              return N(void 0, W);
          }
          const ae = { url: M, method: M, data: M, baseURL: z, transformRequest: z, transformResponse: z, paramsSerializer: z, timeout: z, timeoutMessage: z, withCredentials: z, withXSRFToken: z, adapter: z, responseType: z, xsrfCookieName: z, xsrfHeaderName: z, onUploadProgress: z, onDownloadProgress: z, decompress: z, maxContentLength: z, maxBodyLength: z, beforeRedirect: z, transport: z, httpAgent: z, httpsAgent: z, cancelToken: z, socketPath: z, responseEncoding: z, validateStatus: F, headers: (W, $, oe) => A(nl(W), nl($), oe, true) };
          return H.forEach(Object.keys(Ve(Ve({}, c), g)), function(W) {
            const $ = ae[W] || A, oe = $(c[W], g[W], W);
            H.isUndefined(oe) && $ !== F || (S[W] = oe);
          }), S;
        }
        var Ct = (c) => {
          const g = kn({}, c);
          let { data: S, withXSRFToken: N, xsrfHeaderName: A, xsrfCookieName: M, headers: z, auth: F } = g;
          if (g.headers = z = Mt.from(z), g.url = Wa(Di(g.baseURL, g.url, g.allowAbsoluteUrls), c.params, c.paramsSerializer), F && z.set("Authorization", "Basic " + btoa((F.username || "") + ":" + (F.password ? unescape(encodeURIComponent(F.password)) : ""))), H.isFormData(S)) {
            if (it.hasStandardBrowserEnv || it.hasStandardBrowserWebWorkerEnv)
              z.setContentType(void 0);
            else if (H.isFunction(S.getHeaders)) {
              const ae = S.getHeaders(), W = ["content-type", "content-length"];
              Object.entries(ae).forEach(([$, oe]) => {
                W.includes($.toLowerCase()) && z.set($, oe);
              });
            }
          }
          if (it.hasStandardBrowserEnv && (N && H.isFunction(N) && (N = N(g)), N || N !== false && Ut(g.url))) {
            const ae = A && M && Ws.read(M);
            ae && z.set(A, ae);
          }
          return g;
        }, Bi = typeof XMLHttpRequest < "u" && function(c) {
          return new Promise(function(g, S) {
            const N = Ct(c);
            let A = N.data;
            const M = Mt.from(N.headers).normalize();
            let { responseType: z, onUploadProgress: F, onDownloadProgress: ae } = N, W, $, oe, He, ge;
            function P() {
              He && He(), ge && ge(), N.cancelToken && N.cancelToken.unsubscribe(W), N.signal && N.signal.removeEventListener("abort", W);
            }
            let te = new XMLHttpRequest();
            te.open(N.method.toUpperCase(), N.url, true), te.timeout = N.timeout;
            function Ke() {
              if (!te)
                return;
              const tt = Mt.from("getAllResponseHeaders" in te && te.getAllResponseHeaders()), nn = { data: !z || z === "text" || z === "json" ? te.responseText : te.response, status: te.status, statusText: te.statusText, headers: tt, config: c, request: te };
              Ks(function(an) {
                g(an), P();
              }, function(an) {
                S(an), P();
              }, nn), te = null;
            }
            "onloadend" in te ? te.onloadend = Ke : te.onreadystatechange = function() {
              !te || te.readyState !== 4 || te.status === 0 && !(te.responseURL && te.responseURL.indexOf("file:") === 0) || setTimeout(Ke);
            }, te.onabort = function() {
              te && (S(new pe("Request aborted", pe.ECONNABORTED, c, te)), te = null);
            }, te.onerror = function(tt) {
              const nn = tt && tt.message ? tt.message : "Network Error", an = new pe(nn, pe.ERR_NETWORK, c, te);
              an.event = tt || null, S(an), te = null;
            }, te.ontimeout = function() {
              let tt = N.timeout ? "timeout of " + N.timeout + "ms exceeded" : "timeout exceeded";
              const nn = N.transitional || An;
              N.timeoutErrorMessage && (tt = N.timeoutErrorMessage), S(new pe(tt, nn.clarifyTimeoutError ? pe.ETIMEDOUT : pe.ECONNABORTED, c, te)), te = null;
            }, A === void 0 && M.setContentType(null), "setRequestHeader" in te && H.forEach(M.toJSON(), function(tt, nn) {
              te.setRequestHeader(nn, tt);
            }), H.isUndefined(N.withCredentials) || (te.withCredentials = !!N.withCredentials), z && z !== "json" && (te.responseType = N.responseType), ae && ([oe, ge] = Gn(ae, true), te.addEventListener("progress", oe)), F && te.upload && ([$, He] = Gn(F), te.upload.addEventListener("progress", $), te.upload.addEventListener("loadend", He)), (N.cancelToken || N.signal) && (W = (tt) => {
              te && (S(!tt || tt.type ? new Gt(null, c, te) : tt), te.abort(), te = null);
            }, N.cancelToken && N.cancelToken.subscribe(W), N.signal && (N.signal.aborted ? W() : N.signal.addEventListener("abort", W)));
            const bt = Js(N.url);
            if (bt && it.protocols.indexOf(bt) === -1) {
              S(new pe("Unsupported protocol " + bt + ":", pe.ERR_BAD_REQUEST, c));
              return;
            }
            te.send(A || null);
          });
        }, $s = (c, g) => {
          const { length: S } = c = c ? c.filter(Boolean) : [];
          if (g || S) {
            let N = new AbortController(), A;
            const M = function(W) {
              if (!A) {
                A = true, F();
                const $ = W instanceof Error ? W : this.reason;
                N.abort($ instanceof pe ? $ : new Gt($ instanceof Error ? $.message : $));
              }
            };
            let z = g && setTimeout(() => {
              z = null, M(new pe(`timeout ${g} of ms exceeded`, pe.ETIMEDOUT));
            }, g);
            const F = () => {
              c && (z && clearTimeout(z), z = null, c.forEach((W) => {
                W.unsubscribe ? W.unsubscribe(M) : W.removeEventListener("abort", M);
              }), c = null);
            };
            c.forEach((W) => W.addEventListener("abort", M));
            const { signal: ae } = N;
            return ae.unsubscribe = () => H.asap(F), ae;
          }
        };
        const qi = function* (c, g) {
          let S = c.byteLength;
          if (S < g) {
            yield c;
            return;
          }
          let N = 0, A;
          for (; N < S; )
            A = N + g, yield c.slice(N, A), N = A;
        }, va = function(c, g) {
          return zo(this, null, function* () {
            try {
              for (var S = Hm(Ps(c)), N, A, M; N = !(A = yield new _l(S.next())).done; N = false) {
                const z = A.value;
                yield* Mo(qi(z, g));
              }
            } catch (A2) {
              M = [A2];
            } finally {
              try {
                N && (A = S.return) && (yield new _l(A.call(S)));
              } finally {
                if (M)
                  throw M[0];
              }
            }
          });
        }, Ps = function(c) {
          return zo(this, null, function* () {
            if (c[Symbol.asyncIterator]) {
              yield* Mo(c);
              return;
            }
            const g = c.getReader();
            try {
              for (; ; ) {
                const { done: S, value: N } = yield new _l(g.read());
                if (S)
                  break;
                yield N;
              }
            } finally {
              yield new _l(g.cancel());
            }
          });
        }, Hi = (c, g, S, N) => {
          const A = va(c, g);
          let M = 0, z, F = (W) => {
            z || (z = true, N && N(W));
          };
          return new ReadableStream({ pull(W) {
            return da(this, null, function* () {
              try {
                const { done: $, value: oe } = yield A.next();
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
            return F(W), A.return();
          } }, { highWaterMark: 2 });
        }, Vn = 64 * 1024, { isFunction: Cl } = H, Is = (({ Request: c, Response: g }) => ({ Request: c, Response: g }))(H.global), { ReadableStream: Li, TextEncoder: zl } = H.global, eu = (c, ...g) => {
          try {
            return !!c(...g);
          } catch (S) {
            return false;
          }
        }, Ur = (c) => {
          c = H.merge.call({ skipUndefined: true }, Is, c);
          const { fetch: g, Request: S, Response: N } = c, A = g ? Cl(g) : typeof fetch == "function", M = Cl(S), z = Cl(N);
          if (!A)
            return false;
          const F = A && Cl(Li), ae = A && (typeof zl == "function" ? ((P) => (te) => P.encode(te))(new zl()) : (P) => da(null, null, function* () {
            return new Uint8Array(yield new S(P).arrayBuffer());
          })), W = M && F && eu(() => {
            let P = false;
            const te = new S(it.origin, { body: new Li(), method: "POST", get duplex() {
              return P = true, "half";
            } }).headers.has("Content-Type");
            return P && !te;
          }), $ = z && F && eu(() => H.isReadableStream(new N("").body)), oe = { stream: $ && ((P) => P.body) };
          A && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((P) => {
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
            let { url: te, method: Ke, data: bt, signal: tt, cancelToken: nn, timeout: an, onDownloadProgress: Qi, onUploadProgress: nu, responseType: Dn, headers: Yl, withCredentials: Xl = "same-origin", fetchOptions: au } = Ct(P), lu = g || fetch;
            Dn = Dn ? (Dn + "").toLowerCase() : "text";
            let Ql = $s([tt, nn && nn.toAbortSignal()], an), il = null;
            const Fn = Ql && Ql.unsubscribe && (() => {
              Ql.unsubscribe();
            });
            let iu;
            try {
              if (nu && W && Ke !== "get" && Ke !== "head" && (iu = yield ge(Yl, bt)) !== 0) {
                let yn = new S(te, { method: "POST", body: bt, duplex: "half" }), Wn;
                if (H.isFormData(bt) && (Wn = yn.headers.get("content-type")) && Yl.setContentType(Wn), yn.body) {
                  const [Gl, sl] = tl(iu, Gn(It(nu)));
                  bt = Hi(yn.body, Vn, Gl, sl);
                }
              }
              H.isString(Xl) || (Xl = Xl ? "include" : "omit");
              const ln = M && "credentials" in S.prototype, su = Yt(Ve({}, au), { signal: Ql, method: Ke.toUpperCase(), headers: Yl.normalize().toJSON(), body: bt, duplex: "half", credentials: ln ? Xl : void 0 });
              il = M && new S(te, su);
              let sn = yield M ? lu(il, au) : lu(te, su);
              const _a = $ && (Dn === "stream" || Dn === "response");
              if ($ && (Qi || _a && Fn)) {
                const yn = {};
                ["status", "statusText", "headers"].forEach((Gi) => {
                  yn[Gi] = sn[Gi];
                });
                const Wn = H.toFiniteNumber(sn.headers.get("content-length")), [Gl, sl] = Qi && tl(Wn, Gn(It(Qi), true)) || [];
                sn = new N(Hi(sn.body, Vn, Gl, () => {
                  sl && sl(), Fn && Fn();
                }), yn);
              }
              Dn = Dn || "text";
              let Dr = yield oe[H.findKey(oe, Dn) || "text"](sn, P);
              return !_a && Fn && Fn(), yield new Promise((yn, Wn) => {
                Ks(yn, Wn, { data: Dr, headers: Mt.from(sn.headers), status: sn.status, statusText: sn.statusText, config: P, request: il });
              });
            } catch (ln) {
              throw Fn && Fn(), ln && ln.name === "TypeError" && /Load failed|fetch/i.test(ln.message) ? Object.assign(new pe("Network Error", pe.ERR_NETWORK, P, il), { cause: ln.cause || ln }) : pe.from(ln, ln && ln.code, P, il);
            }
          });
        }, Ml = /* @__PURE__ */ new Map(), en = (c) => {
          let g = c ? c.env : {};
          const { fetch: S, Request: N, Response: A } = g, M = [N, A, S];
          let z = M.length, F = z, ae, W, $ = Ml;
          for (; F--; )
            ae = M[F], W = $.get(ae), W === void 0 && $.set(ae, W = F ? /* @__PURE__ */ new Map() : Ur(g)), $ = W;
          return W;
        };
        en();
        const al = { http: Er, xhr: Bi, fetch: { get: en } };
        H.forEach(al, (c, g) => {
          if (c) {
            try {
              Object.defineProperty(c, "name", { value: g });
            } catch (S) {
            }
            Object.defineProperty(c, "adapterName", { value: g });
          }
        });
        const Ul = (c) => `- ${c}`, xa = (c) => H.isFunction(c) || c === null || c === false;
        var Zn = { getAdapter: (c, g) => {
          c = H.isArray(c) ? c : [c];
          const { length: S } = c;
          let N, A;
          const M = {};
          for (let z = 0; z < S; z++) {
            N = c[z];
            let F;
            if (A = N, !xa(N) && (A = al[(F = String(N)).toLowerCase()], A === void 0))
              throw new pe(`Unknown adapter '${F}'`);
            if (A && (H.isFunction(A) || (A = A.get(g))))
              break;
            M[F || "#" + z] = A;
          }
          if (!A) {
            const z = Object.entries(M).map(([ae, W]) => `adapter ${ae} ` + (W === false ? "is not supported by the environment" : "is not available in the build"));
            let F = S ? z.length > 1 ? `since :
` + z.map(Ul).join(`
`) : " " + Ul(z[0]) : "as no adapter specified";
            throw new pe("There is no suitable adapter to dispatch the request " + F, "ERR_NOT_SUPPORT");
          }
          return A;
        }, adapters: al };
        function Dl(c) {
          if (c.cancelToken && c.cancelToken.throwIfRequested(), c.signal && c.signal.aborted)
            throw new Gt(null, c);
        }
        function Bl(c) {
          return Dl(c), c.headers = Mt.from(c.headers), c.data = Ol.call(c, c.transformRequest), ["post", "put", "patch"].indexOf(c.method) !== -1 && c.headers.setContentType("application/x-www-form-urlencoded", false), Zn.getAdapter(c.adapter || Rn.adapter, c)(c).then(function(g) {
            return Dl(c), g.data = Ol.call(c, c.transformResponse, g), g.headers = Mt.from(g.headers), g;
          }, function(g) {
            return zn(g) || (Dl(c), g && g.response && (g.response.data = Ol.call(c, c.transformResponse, g.response), g.response.headers = Mt.from(g.response.headers))), Promise.reject(g);
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
          function N(A, M) {
            return "[Axios v" + Yi + "] Transitional option '" + A + "'" + M + (S ? ". " + S : "");
          }
          return (A, M, z) => {
            if (c === false)
              throw new pe(N(M, " has been removed" + (g ? " in " + g : "")), pe.ERR_DEPRECATED);
            return g && !tn[M] && (tn[M] = true, console.warn(N(M, " has been deprecated since v" + g + " and will be removed in the near future"))), c ? c(A, M, z) : true;
          };
        }, Mn.spelling = function(c) {
          return (g, S) => (console.warn(`${S} is likely a misspelling of ${c}`), true);
        };
        function Xi(c, g, S) {
          if (typeof c != "object")
            throw new pe("options must be an object", pe.ERR_BAD_OPTION_VALUE);
          const N = Object.keys(c);
          let A = N.length;
          for (; A-- > 0; ) {
            const M = N[A], z = g[M];
            if (z) {
              const F = c[M], ae = F === void 0 || z(F, M, c);
              if (ae !== true)
                throw new pe("option " + M + " must be " + ae, pe.ERR_BAD_OPTION_VALUE);
              continue;
            }
            if (S !== true)
              throw new pe("Unknown option " + M, pe.ERR_BAD_OPTION);
          }
        }
        var Un = { assertOptions: Xi, validators: Mn };
        const ht = Un.validators;
        class Sa {
          constructor(g) {
            this.defaults = g || {}, this.interceptors = { request: new $a(), response: new $a() };
          }
          request(g, S) {
            return da(this, null, function* () {
              try {
                return yield this._request(g, S);
              } catch (N) {
                if (N instanceof Error) {
                  let A = {};
                  Error.captureStackTrace ? Error.captureStackTrace(A) : A = new Error();
                  const M = A.stack ? A.stack.replace(/^.+\n/, "") : "";
                  try {
                    N.stack ? M && !String(N.stack).endsWith(M.replace(/^.+\n.+\n/, "")) && (N.stack += `
` + M) : N.stack = M;
                  } catch (z) {
                  }
                }
                throw N;
              }
            });
          }
          _request(g, S) {
            typeof g == "string" ? (S = S || {}, S.url = g) : S = g || {}, S = kn(this.defaults, S);
            const { transitional: N, paramsSerializer: A, headers: M } = S;
            N !== void 0 && Un.assertOptions(N, { silentJSONParsing: ht.transitional(ht.boolean), forcedJSONParsing: ht.transitional(ht.boolean), clarifyTimeoutError: ht.transitional(ht.boolean) }, false), A != null && (H.isFunction(A) ? S.paramsSerializer = { serialize: A } : Un.assertOptions(A, { encode: ht.function, serialize: ht.function }, true)), S.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? S.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : S.allowAbsoluteUrls = true), Un.assertOptions(S, { baseUrl: ht.spelling("baseURL"), withXsrfToken: ht.spelling("withXSRFToken") }, true), S.method = (S.method || this.defaults.method || "get").toLowerCase();
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
          getUri(g) {
            g = kn(this.defaults, g);
            const S = Di(g.baseURL, g.url, g.allowAbsoluteUrls);
            return Wa(S, g.params, g.paramsSerializer);
          }
        }
        H.forEach(["delete", "get", "head", "options"], function(c) {
          Sa.prototype[c] = function(g, S) {
            return this.request(kn(S || {}, { method: c, url: g, data: (S || {}).data }));
          };
        }), H.forEach(["post", "put", "patch"], function(c) {
          function g(S) {
            return function(N, A, M) {
              return this.request(kn(M || {}, { method: c, headers: S ? { "Content-Type": "multipart/form-data" } : {}, url: N, data: A }));
            };
          }
          Sa.prototype[c] = g(), Sa.prototype[c + "Form"] = g(true);
        });
        var Kn = Sa;
        class ql {
          constructor(g) {
            if (typeof g != "function")
              throw new TypeError("executor must be a function.");
            let S;
            this.promise = new Promise(function(A) {
              S = A;
            });
            const N = this;
            this.promise.then((A) => {
              if (!N._listeners)
                return;
              let M = N._listeners.length;
              for (; M-- > 0; )
                N._listeners[M](A);
              N._listeners = null;
            }), this.promise.then = (A) => {
              let M;
              const z = new Promise((F) => {
                N.subscribe(F), M = F;
              }).then(A);
              return z.cancel = function() {
                N.unsubscribe(M);
              }, z;
            }, g(function(A, M, z) {
              N.reason || (N.reason = new Gt(A, M, z), S(N.reason));
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
            const g = new AbortController(), S = (N) => {
              g.abort(N);
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
        const yt = { Continue: 100, SwitchingProtocols: 101, Processing: 102, EarlyHints: 103, Ok: 200, Created: 201, Accepted: 202, NonAuthoritativeInformation: 203, NoContent: 204, ResetContent: 205, PartialContent: 206, MultiStatus: 207, AlreadyReported: 208, ImUsed: 226, MultipleChoices: 300, MovedPermanently: 301, Found: 302, SeeOther: 303, NotModified: 304, UseProxy: 305, Unused: 306, TemporaryRedirect: 307, PermanentRedirect: 308, BadRequest: 400, Unauthorized: 401, PaymentRequired: 402, Forbidden: 403, NotFound: 404, MethodNotAllowed: 405, NotAcceptable: 406, ProxyAuthenticationRequired: 407, RequestTimeout: 408, Conflict: 409, Gone: 410, LengthRequired: 411, PreconditionFailed: 412, PayloadTooLarge: 413, UriTooLong: 414, UnsupportedMediaType: 415, RangeNotSatisfiable: 416, ExpectationFailed: 417, ImATeapot: 418, MisdirectedRequest: 421, UnprocessableEntity: 422, Locked: 423, FailedDependency: 424, TooEarly: 425, UpgradeRequired: 426, PreconditionRequired: 428, TooManyRequests: 429, RequestHeaderFieldsTooLarge: 431, UnavailableForLegalReasons: 451, InternalServerError: 500, NotImplemented: 501, BadGateway: 502, ServiceUnavailable: 503, GatewayTimeout: 504, HttpVersionNotSupported: 505, VariantAlsoNegotiates: 506, InsufficientStorage: 507, LoopDetected: 508, NotExtended: 510, NetworkAuthenticationRequired: 511 };
        Object.entries(yt).forEach(([c, g]) => {
          yt[g] = c;
        });
        var Jn = yt;
        function ll(c) {
          const g = new Kn(c), S = u(Kn.prototype.request, g);
          return H.extend(S, Kn.prototype, g, { allOwnKeys: true }), H.extend(S, g, null, { allOwnKeys: true }), S.create = function(N) {
            return ll(kn(c, N));
          }, S;
        }
        const ke = ll(Rn);
        return ke.Axios = Kn, ke.CanceledError = Gt, ke.CancelToken = Hl, ke.isCancel = zn, ke.VERSION = Yi, ke.toFormData = Qt, ke.AxiosError = pe, ke.Cancel = ke.CanceledError, ke.all = function(c) {
          return Promise.all(c);
        }, ke.spread = Ll, ke.isAxiosError = tu, ke.mergeConfig = kn, ke.AxiosHeaders = Mt, ke.formToJSON = (c) => gn(H.isHTMLForm(c) ? new FormData(c) : c), ke.getAdapter = Zn.getAdapter, ke.HttpStatusCode = Jn, ke.default = ke, Xo = ke, Xo;
      }
      var ep;
      function Op() {
        if (ep)
          return ha;
        ep = 1;
        var u = ha && ha.__assign || function() {
          return u = Object.assign || function(y) {
            for (var v, m = 1, x = arguments.length; m < x; m++) {
              v = arguments[m];
              for (var p in v)
                Object.prototype.hasOwnProperty.call(v, p) && (y[p] = v[p]);
            }
            return y;
          }, u.apply(this, arguments);
        };
        Object.defineProperty(ha, "__esModule", { value: true }), ha.getRequestHeaders = ha.getAxiosClient = void 0;
        var s = Ry();
        function r(y, v, m, x, p) {
          var h = s.default.create({ baseURL: y, headers: f(v, x, m, y, p), withCredentials: true });
          return h.interceptors.request.use(function(j) {
            return typeof window < "u" && window.csrf_token && window.csrf_token !== "{{ csrf_token }}" && (j.headers["X-Frappe-CSRF-Token"] = window.csrf_token), v && x && m && (j.headers.Authorization = "".concat(x, " ").concat(m())), j;
          }), h;
        }
        ha.getAxiosClient = r;
        function f(y, v, m, x, p) {
          y === void 0 && (y = false);
          var h = { Accept: "application/json", "Content-Type": "application/json; charset=utf-8" };
          return y && v && m && (h.Authorization = "".concat(v, " ").concat(m())), typeof window < "u" && typeof document < "u" && (window.location && (x && x !== window.location.origin || (h["X-Frappe-Site-Name"] = window.location.hostname)), window.csrf_token && window.csrf_token !== "{{ csrf_token }}" && (h["X-Frappe-CSRF-Token"] = window.csrf_token)), u(u({}, h), p != null ? p : {});
        }
        return ha.getRequestHeaders = f, ha;
      }
      var tp;
      function Cp() {
        if (tp)
          return Nn;
        tp = 1;
        var u = Nn && Nn.__assign || function() {
          return u = Object.assign || function(v) {
            for (var m, x = 1, p = arguments.length; x < p; x++) {
              m = arguments[x];
              for (var h in m)
                Object.prototype.hasOwnProperty.call(m, h) && (v[h] = m[h]);
            }
            return v;
          }, u.apply(this, arguments);
        }, s = Nn && Nn.__awaiter || function(v, m, x, p) {
          function h(j) {
            return j instanceof x ? j : new x(function(E) {
              E(j);
            });
          }
          return new (x || (x = Promise))(function(j, E) {
            function Y(Z) {
              try {
                C(p.next(Z));
              } catch (ie) {
                E(ie);
              }
            }
            function w(Z) {
              try {
                C(p.throw(Z));
              } catch (ie) {
                E(ie);
              }
            }
            function C(Z) {
              Z.done ? j(Z.value) : h(Z.value).then(Y, w);
            }
            C((p = p.apply(v, m || [])).next());
          });
        }, r = Nn && Nn.__generator || function(v, m) {
          var x = { label: 0, sent: function() {
            if (j[0] & 1)
              throw j[1];
            return j[1];
          }, trys: [], ops: [] }, p, h, j, E;
          return E = { next: Y(0), throw: Y(1), return: Y(2) }, typeof Symbol == "function" && (E[Symbol.iterator] = function() {
            return this;
          }), E;
          function Y(C) {
            return function(Z) {
              return w([C, Z]);
            };
          }
          function w(C) {
            if (p)
              throw new TypeError("Generator is already executing.");
            for (; E && (E = 0, C[0] && (x = 0)), x; )
              try {
                if (p = 1, h && (j = C[0] & 2 ? h.return : C[0] ? h.throw || ((j = h.return) && j.call(h), 0) : h.next) && !(j = j.call(h, C[1])).done)
                  return j;
                switch (h = 0, j && (C = [C[0] & 2, j.value]), C[0]) {
                  case 0:
                  case 1:
                    j = C;
                    break;
                  case 4:
                    return x.label++, { value: C[1], done: false };
                  case 5:
                    x.label++, h = C[1], C = [0];
                    continue;
                  case 7:
                    C = x.ops.pop(), x.trys.pop();
                    continue;
                  default:
                    if (j = x.trys, !(j = j.length > 0 && j[j.length - 1]) && (C[0] === 6 || C[0] === 2)) {
                      x = 0;
                      continue;
                    }
                    if (C[0] === 3 && (!j || C[1] > j[0] && C[1] < j[3])) {
                      x.label = C[1];
                      break;
                    }
                    if (C[0] === 6 && x.label < j[1]) {
                      x.label = j[1], j = C;
                      break;
                    }
                    if (j && x.label < j[2]) {
                      x.label = j[2], x.ops.push(C);
                      break;
                    }
                    j[2] && x.ops.pop(), x.trys.pop();
                    continue;
                }
                C = m.call(v, x);
              } catch (Z) {
                C = [6, Z], h = 0;
              } finally {
                p = j = 0;
              }
            if (C[0] & 5)
              throw C[1];
            return { value: C[0] ? C[1] : void 0, done: true };
          }
        };
        Object.defineProperty(Nn, "__esModule", { value: true }), Nn.FrappeFileUpload = void 0;
        var f = Op(), y = function() {
          function v(m, x, p, h, j, E) {
            this.appURL = m, this.axios = x, this.useToken = p != null ? p : false, this.token = h, this.tokenType = j, this.customHeaders = E;
          }
          return v.prototype.uploadFile = function(m, x, p, h) {
            return h === void 0 && (h = "upload_file"), s(this, void 0, void 0, function() {
              var j, E, Y, w, C, Z, ie, he;
              return r(this, function(_e) {
                return j = new FormData(), m && j.append("file", m, m.name), E = x.isPrivate, Y = x.folder, w = x.file_url, C = x.doctype, Z = x.docname, ie = x.fieldname, he = x.otherData, E && j.append("is_private", "1"), Y && j.append("folder", Y), w && j.append("file_url", w), C && Z && (j.append("doctype", C), j.append("docname", Z), ie && j.append("fieldname", ie)), he && Object.keys(he).forEach(function(se) {
                  var ve = he[se];
                  j.append(se, ve);
                }), [2, this.axios.post("/api/method/".concat(h), j, { onUploadProgress: function(se) {
                  p && p(se.loaded, se.total, se);
                }, headers: u(u({}, (0, f.getRequestHeaders)(this.useToken, this.tokenType, this.token, this.appURL, this.customHeaders)), { "Content-Type": "multipart/form-data" }) }).catch(function(se) {
                  var ve, Ne;
                  throw u(u({}, se.response.data), { httpStatus: se.response.status, httpStatusText: se.response.statusText, message: (ve = se.response.data.message) !== null && ve !== void 0 ? ve : "There was an error while uploading the file.", exception: (Ne = se.response.data.exception) !== null && Ne !== void 0 ? Ne : "" });
                })];
              });
            });
          }, v;
        }();
        return Nn.FrappeFileUpload = y, Nn;
      }
      var np;
      function Oy() {
        if (np)
          return Rs;
        np = 1, Object.defineProperty(Rs, "__esModule", { value: true }), Rs.FrappeApp = void 0;
        var u = zp(), s = Ap(), r = Rp(), f = Cp(), y = Op(), v = function() {
          function m(x, p, h, j) {
            var E, Y;
            this.url = x, this.name = h != null ? h : "FrappeApp", this.useToken = (E = p == null ? void 0 : p.useToken) !== null && E !== void 0 ? E : false, this.token = p == null ? void 0 : p.token, this.tokenType = (Y = p == null ? void 0 : p.type) !== null && Y !== void 0 ? Y : "Bearer", this.customHeaders = j, this.axios = (0, y.getAxiosClient)(this.url, this.useToken, this.token, this.tokenType, this.customHeaders);
          }
          return m.prototype.auth = function() {
            return new u.FrappeAuth(this.url, this.axios, this.useToken, this.token, this.tokenType);
          }, m.prototype.db = function() {
            return new r.FrappeDB(this.url, this.axios, this.useToken, this.token, this.tokenType);
          }, m.prototype.file = function() {
            return new f.FrappeFileUpload(this.url, this.axios, this.useToken, this.token, this.tokenType, this.customHeaders);
          }, m.prototype.call = function() {
            return new s.FrappeCall(this.url, this.axios, this.useToken, this.token, this.tokenType);
          }, m;
        }();
        return Rs.FrappeApp = v, Rs;
      }
      var jn = {};
      var ap;
      function Cy() {
        if (ap)
          return jn;
        ap = 1;
        var u = jn && jn.__assign || function() {
          return u = Object.assign || function(y) {
            for (var v, m = 1, x = arguments.length; m < x; m++) {
              v = arguments[m];
              for (var p in v)
                Object.prototype.hasOwnProperty.call(v, p) && (y[p] = v[p]);
            }
            return y;
          }, u.apply(this, arguments);
        }, s = jn && jn.__awaiter || function(y, v, m, x) {
          function p(h) {
            return h instanceof m ? h : new m(function(j) {
              j(h);
            });
          }
          return new (m || (m = Promise))(function(h, j) {
            function E(C) {
              try {
                w(x.next(C));
              } catch (Z) {
                j(Z);
              }
            }
            function Y(C) {
              try {
                w(x.throw(C));
              } catch (Z) {
                j(Z);
              }
            }
            function w(C) {
              C.done ? h(C.value) : p(C.value).then(E, Y);
            }
            w((x = x.apply(y, v || [])).next());
          });
        }, r = jn && jn.__generator || function(y, v) {
          var m = { label: 0, sent: function() {
            if (h[0] & 1)
              throw h[1];
            return h[1];
          }, trys: [], ops: [] }, x, p, h, j;
          return j = { next: E(0), throw: E(1), return: E(2) }, typeof Symbol == "function" && (j[Symbol.iterator] = function() {
            return this;
          }), j;
          function E(w) {
            return function(C) {
              return Y([w, C]);
            };
          }
          function Y(w) {
            if (x)
              throw new TypeError("Generator is already executing.");
            for (; j && (j = 0, w[0] && (m = 0)), m; )
              try {
                if (x = 1, p && (h = w[0] & 2 ? p.return : w[0] ? p.throw || ((h = p.return) && h.call(p), 0) : p.next) && !(h = h.call(p, w[1])).done)
                  return h;
                switch (p = 0, h && (w = [w[0] & 2, h.value]), w[0]) {
                  case 0:
                  case 1:
                    h = w;
                    break;
                  case 4:
                    return m.label++, { value: w[1], done: false };
                  case 5:
                    m.label++, p = w[1], w = [0];
                    continue;
                  case 7:
                    w = m.ops.pop(), m.trys.pop();
                    continue;
                  default:
                    if (h = m.trys, !(h = h.length > 0 && h[h.length - 1]) && (w[0] === 6 || w[0] === 2)) {
                      m = 0;
                      continue;
                    }
                    if (w[0] === 3 && (!h || w[1] > h[0] && w[1] < h[3])) {
                      m.label = w[1];
                      break;
                    }
                    if (w[0] === 6 && m.label < h[1]) {
                      m.label = h[1], h = w;
                      break;
                    }
                    if (h && m.label < h[2]) {
                      m.label = h[2], m.ops.push(w);
                      break;
                    }
                    h[2] && m.ops.pop(), m.trys.pop();
                    continue;
                }
                w = v.call(y, m);
              } catch (C) {
                w = [6, C], p = 0;
              } finally {
                x = h = 0;
              }
            if (w[0] & 5)
              throw w[1];
            return { value: w[0] ? w[1] : void 0, done: true };
          }
        };
        Object.defineProperty(jn, "__esModule", { value: true }), jn.FrappeAuth = void 0;
        var f = function() {
          function y(v, m, x, p, h) {
            this.appURL = v, this.axios = m, this.useToken = x != null ? x : false, this.token = p, this.tokenType = h;
          }
          return y.prototype.loginWithUsernamePassword = function(v) {
            return s(this, void 0, void 0, function() {
              return r(this, function(m) {
                return [2, this.axios.post("/api/method/login", { usr: v.username, pwd: v.password, otp: v.otp, tmp_id: v.tmp_id, device: v.device }).then(function(x) {
                  return x.data;
                }).catch(function(x) {
                  var p, h;
                  throw u(u({}, x.response.data), { httpStatus: x.response.status, httpStatusText: x.response.statusText, message: (p = x.response.data.message) !== null && p !== void 0 ? p : "There was an error while logging in", exception: (h = x.response.data.exception) !== null && h !== void 0 ? h : "" });
                })];
              });
            });
          }, y.prototype.getLoggedInUser = function() {
            return s(this, void 0, void 0, function() {
              return r(this, function(v) {
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
              return r(this, function(v) {
                return [2, this.axios.post("/api/method/logout", {}).then(function() {
                }).catch(function(m) {
                  var x, p;
                  throw u(u({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: (x = m.response.data.message) !== null && x !== void 0 ? x : "There was an error while logging out", exception: (p = m.response.data.exception) !== null && p !== void 0 ? p : "" });
                })];
              });
            });
          }, y.prototype.forgetPassword = function(v) {
            return s(this, void 0, void 0, function() {
              return r(this, function(m) {
                return [2, this.axios.post("/", { cmd: "frappe.core.doctype.user.user.reset_password", user: v }).then(function() {
                }).catch(function(x) {
                  var p, h;
                  throw u(u({}, x.response.data), { httpStatus: x.response.status, httpStatusText: x.response.statusText, message: (p = x.response.data.message) !== null && p !== void 0 ? p : "There was an error sending password reset email.", exception: (h = x.response.data.exception) !== null && h !== void 0 ? h : "" });
                })];
              });
            });
          }, y;
        }();
        return jn.FrappeAuth = f, jn;
      }
      var lp;
      function zp() {
        return lp || (lp = 1, function(u) {
          var s = xi && xi.__createBinding || (Object.create ? function(f, y, v, m) {
            m === void 0 && (m = v);
            var x = Object.getOwnPropertyDescriptor(y, v);
            (!x || ("get" in x ? !y.__esModule : x.writable || x.configurable)) && (x = { enumerable: true, get: function() {
              return y[v];
            } }), Object.defineProperty(f, m, x);
          } : function(f, y, v, m) {
            m === void 0 && (m = v), f[m] = y[v];
          }), r = xi && xi.__exportStar || function(f, y) {
            for (var v in f)
              v !== "default" && !Object.prototype.hasOwnProperty.call(y, v) && s(y, f, v);
          };
          Object.defineProperty(u, "__esModule", { value: true }), r(Oy(), u), r(Cy(), u), r(Rp(), u), r(Cp(), u), r(Ap(), u);
        }(xi)), xi;
      }
      var zy = zp();
      var ip = { exports: {} };
      var Qo = {};
      var sp;
      function My() {
        if (sp)
          return Qo;
        sp = 1;
        var u = zs;
        function s(E, Y) {
          return E === Y && (E !== 0 || 1 / E === 1 / Y) || E !== E && Y !== Y;
        }
        var r = typeof Object.is == "function" ? Object.is : s, f = u.useState, y = u.useEffect, v = u.useLayoutEffect, m = u.useDebugValue;
        function x(E, Y) {
          var w = Y(), C = f({ inst: { value: w, getSnapshot: Y } }), Z = C[0].inst, ie = C[1];
          return v(function() {
            Z.value = w, Z.getSnapshot = Y, p(Z) && ie({ inst: Z });
          }, [E, w, Y]), y(function() {
            return p(Z) && ie({ inst: Z }), E(function() {
              p(Z) && ie({ inst: Z });
            });
          }, [E]), m(w), w;
        }
        function p(E) {
          var Y = E.getSnapshot;
          E = E.value;
          try {
            var w = Y();
            return !r(E, w);
          } catch (C) {
            return true;
          }
        }
        function h(E, Y) {
          return Y();
        }
        var j = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? h : x;
        return Qo.useSyncExternalStore = u.useSyncExternalStore !== void 0 ? u.useSyncExternalStore : j, Qo;
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
      function Jo(u, s) {
        var r, f;
        if (u === s)
          return true;
        if (u && s && (r = u.constructor) === s.constructor) {
          if (r === Date)
            return u.getTime() === s.getTime();
          if (r === RegExp)
            return u.toString() === s.toString();
          if (r === Array) {
            if ((f = u.length) === s.length)
              for (; f-- && Jo(u[f], s[f]); )
                ;
            return f === -1;
          }
          if (!r || typeof u == "object") {
            f = 0;
            for (r in u)
              if (rp.call(u, r) && ++f && !rp.call(s, r) || !(r in s) || !Jo(u[r], s[r]))
                return false;
            return Object.keys(s).length === f;
          }
        }
        return u !== u && s !== s;
      }
      var Va = /* @__PURE__ */ new WeakMap();
      var Ka = () => {
      };
      var Xt = Ka();
      var _r = Object;
      var wn = (u) => u === Xt;
      var Za = (u) => typeof u == "function";
      var Tl = (u, s) => Ve(Ve({}, u), s);
      var Hy = (u) => Za(u.then);
      var Go = {};
      var hr = {};
      var Mp = "undefined";
      var Nr = typeof window != Mp;
      var Fo = typeof document != Mp;
      var Ly = Nr && "Deno" in window;
      var Yy = (u, s) => {
        const r = Va.get(u);
        return [() => !wn(s) && u.get(s) || Go, (f) => {
          if (!wn(s)) {
            const y = u.get(s);
            s in hr || (hr[s] = y), r[5](s, Tl(y, f), y || Go);
          }
        }, r[6], () => !wn(s) && s in hr ? hr[s] : !wn(s) && u.get(s) || Go];
      };
      var Wo = true;
      var Xy = () => Wo;
      var [$o, Po] = Nr && window.addEventListener ? [window.addEventListener.bind(window), window.removeEventListener.bind(window)] : [Ka, Ka];
      var Qy = () => {
        const u = Fo && document.visibilityState;
        return wn(u) || u !== "hidden";
      };
      var Gy = (u) => (Fo && document.addEventListener("visibilitychange", u), $o("focus", u), () => {
        Fo && document.removeEventListener("visibilitychange", u), Po("focus", u);
      });
      var ky = (u) => {
        const s = () => {
          Wo = true, u();
        }, r = () => {
          Wo = false;
        };
        return $o("online", s), $o("offline", r), () => {
          Po("online", s), Po("offline", r);
        };
      };
      var Vy = { isOnline: Xy, isVisible: Qy };
      var Zy = { initFocus: Gy, initReconnect: ky };
      zs.useId;
      var uc = !Nr || Ly;
      var Ky = uc ? Pe.useEffect : Pe.useLayoutEffect;
      var ko = typeof navigator < "u" && navigator.connection;
      var fp = !uc && ko && (["slow-2g", "2g"].includes(ko.effectiveType) || ko.saveData);
      var mr = /* @__PURE__ */ new WeakMap();
      var Jy = (u) => _r.prototype.toString.call(u);
      var Vo = (u, s) => u === `[object ${s}]`;
      var Fy = 0;
      var Io = (u) => {
        const s = typeof u, r = Jy(u), f = Vo(r, "Date"), y = Vo(r, "RegExp"), v = Vo(r, "Object");
        let m, x;
        if (_r(u) === u && !f && !y) {
          if (m = mr.get(u), m)
            return m;
          if (m = ++Fy + "~", mr.set(u, m), Array.isArray(u)) {
            for (m = "@", x = 0; x < u.length; x++)
              m += Io(u[x]) + ",";
            mr.set(u, m);
          }
          if (v) {
            m = "#";
            const p = _r.keys(u).sort();
            for (; !wn(x = p.pop()); )
              wn(u[x]) || (m += x + ":" + Io(u[x]) + ",");
            mr.set(u, m);
          }
        } else
          m = f ? u.toJSON() : s == "symbol" ? u.toString() : s == "string" ? JSON.stringify(u) : "" + u;
        return m;
      };
      var Up = (u) => {
        if (Za(u))
          try {
            u = u();
          } catch (r) {
            u = "";
          }
        const s = u;
        return u = typeof u == "string" ? u : (Array.isArray(u) ? u.length : u) ? Io(u) : "", [u, s];
      };
      var Wy = 0;
      var op = () => ++Wy;
      function $y(...u) {
        return da(this, null, function* () {
          const [s, r, f, y] = u, v = Tl({ populateCache: true, throwOnError: true }, typeof y == "boolean" ? { revalidate: y } : y || {});
          let m = v.populateCache;
          const x = v.rollbackOnError;
          let p = v.optimisticData;
          const h = (Y) => typeof x == "function" ? x(Y) : x !== false, j = v.throwOnError;
          if (Za(r)) {
            const Y = r, w = [], C = s.keys();
            for (const Z of C)
              !/^\$(inf|sub)\$/.test(Z) && Y(s.get(Z)._k) && w.push(Z);
            return Promise.all(w.map(E));
          }
          return E(r);
          function E(Y) {
            return da(this, null, function* () {
              const [w] = Up(Y);
              if (!w)
                return;
              const [C, Z] = Yy(s, w), [ie, he, _e, se] = Va.get(s), ve = () => {
                const ze = ie[w];
                return (Za(v.revalidate) ? v.revalidate(C().data, Y) : v.revalidate !== false) && (delete _e[w], delete se[w], ze && ze[0]) ? ze[0](qy).then(() => C().data) : C().data;
              };
              if (u.length < 3)
                return ve();
              let Ne = f, De, ce = false;
              const lt = op();
              he[w] = [lt, 0];
              const wt = !wn(p), Pt = C(), pt = Pt.data, Ue = Pt._c, Ge = wn(Ue) ? pt : Ue;
              if (wt && (p = Za(p) ? p(Ge, pt) : p, Z({ data: p, _c: Ge })), Za(Ne))
                try {
                  Ne = Ne(Ge);
                } catch (ze) {
                  De = ze, ce = true;
                }
              if (Ne && Hy(Ne))
                if (Ne = yield Ne.catch((ze) => {
                  De = ze, ce = true;
                }), lt !== he[w][0]) {
                  if (ce)
                    throw De;
                  return Ne;
                } else
                  ce && wt && h(De) && (m = true, Z({ data: Ge, _c: Xt }));
              if (m && !ce)
                if (Za(m)) {
                  const ze = m(Ne, Ge);
                  Z({ data: ze, error: Xt, _c: Xt });
                } else
                  Z({ data: Ne, error: Xt, _c: Xt });
              if (he[w][1] = op(), Promise.resolve(ve()).then(() => {
                Z({ _c: Xt });
              }), ce) {
                if (j)
                  throw De;
                return;
              }
              return Ne;
            });
          }
        });
      }
      var cp = (u, s) => {
        for (const r in u)
          u[r][0] && u[r][0](s);
      };
      var Dp = (u, s) => {
        if (!Va.has(u)) {
          const r = Tl(Zy, s), f = /* @__PURE__ */ Object.create(null), y = $y.bind(Xt, u);
          let v = Ka;
          const m = /* @__PURE__ */ Object.create(null), x = (j, E) => {
            const Y = m[j] || [];
            return m[j] = Y, Y.push(E), () => Y.splice(Y.indexOf(E), 1);
          }, p = (j, E, Y) => {
            u.set(j, E);
            const w = m[j];
            if (w)
              for (const C of w)
                C(E, Y);
          }, h = () => {
            if (!Va.has(u) && (Va.set(u, [f, /* @__PURE__ */ Object.create(null), /* @__PURE__ */ Object.create(null), /* @__PURE__ */ Object.create(null), y, p, x]), !uc)) {
              const j = r.initFocus(setTimeout.bind(Xt, cp.bind(Xt, f, Dy))), E = r.initReconnect(setTimeout.bind(Xt, cp.bind(Xt, f, By)));
              v = () => {
                j && j(), E && E(), Va.delete(u);
              };
            }
          };
          return h(), [u, y, h, v];
        }
        return [u, Va.get(u)[4]];
      };
      var Py = (u, s, r, f, y) => {
        const v = r.errorRetryCount, m = y.retryCount, x = ~~((Math.random() + 0.5) * (1 << (m < 8 ? m : 8))) * r.errorRetryInterval;
        !wn(v) && m > v || setTimeout(f, x, y);
      };
      var Iy = Jo;
      var [rc, eb] = Dp(/* @__PURE__ */ new Map());
      var tb = Tl({ onLoadingSlow: Ka, onSuccess: Ka, onError: Ka, onErrorRetry: Py, onDiscarded: Ka, revalidateOnFocus: true, revalidateOnReconnect: true, revalidateIfStale: true, shouldRetryOnError: true, errorRetryInterval: fp ? 1e4 : 5e3, focusThrottleInterval: 5 * 1e3, dedupingInterval: 2 * 1e3, loadingTimeout: fp ? 5e3 : 3e3, compare: Iy, isPaused: () => false, cache: rc, mutate: eb, fallback: {} }, Vy);
      var nb = (u, s) => {
        const r = Tl(u, s);
        if (s) {
          const { use: f, fallback: y } = u, { use: v, fallback: m } = s;
          f && v && (r.use = f.concat(v)), y && m && (r.fallback = Tl(y, m));
        }
        return r;
      };
      var dp = Pe.createContext({});
      var ab = (u) => {
        const { value: s } = u, r = Pe.useContext(dp), f = Za(s), y = Pe.useMemo(() => f ? s(r) : s, [f, r, s]), v = Pe.useMemo(() => f ? y : nb(r, y), [f, r, y]), m = y && y.provider, x = Pe.useRef(Xt);
        m && !x.current && (x.current = Dp(m(v.cache || rc), y));
        const p = x.current;
        return p && (v.cache = p[0], v.mutate = p[1]), Ky(() => {
          if (p)
            return p[2] && p[2](), p[3];
        }, []), Pe.createElement(dp.Provider, Tl(u, { value: v }));
      };
      var lb = "$inf$";
      var Bp = Nr && window.__SWR_DEVTOOLS_USE__;
      var ib = Bp ? window.__SWR_DEVTOOLS_USE__ : [];
      var sb = () => {
        Bp && (window.__SWR_DEVTOOLS_REACT__ = zs);
      };
      var ub = (u) => (s, r, f) => u(s, r && ((...y) => {
        const [v] = Up(s), [, , , m] = Va.get(rc);
        if (v.startsWith(lb))
          return r(...y);
        const x = m[v];
        return wn(x) ? r(...y) : (delete m[v], x);
      }), f);
      ib.concat(ub);
      sb();
      zs.use;
      Promise.resolve(Xt);
      var rb = _r.defineProperty(ab, "defaultValue", { value: tb });
      Promise.resolve();
      var Xn = /* @__PURE__ */ Object.create(null);
      Xn.open = "0";
      Xn.close = "1";
      Xn.ping = "2";
      Xn.pong = "3";
      Xn.message = "4";
      Xn.upgrade = "5";
      Xn.noop = "6";
      var vr = /* @__PURE__ */ Object.create(null);
      Object.keys(Xn).forEach((u) => {
        vr[Xn[u]] = u;
      });
      var ec = { type: "error", data: "parser error" };
      var qp = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
      var Hp = typeof ArrayBuffer == "function";
      var Lp = (u) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(u) : u && u.buffer instanceof ArrayBuffer;
      var fc = ({ type: u, data: s }, r, f) => qp && s instanceof Blob ? r ? f(s) : hp(s, f) : Hp && (s instanceof ArrayBuffer || Lp(s)) ? r ? f(s) : hp(new Blob([s]), f) : f(Xn[u] + (s || ""));
      var hp = (u, s) => {
        const r = new FileReader();
        return r.onload = function() {
          const f = r.result.split(",")[1];
          s("b" + (f || ""));
        }, r.readAsDataURL(u);
      };
      function mp(u) {
        return u instanceof Uint8Array ? u : u instanceof ArrayBuffer ? new Uint8Array(u) : new Uint8Array(u.buffer, u.byteOffset, u.byteLength);
      }
      var Zo;
      function fb(u, s) {
        if (qp && u.data instanceof Blob)
          return u.data.arrayBuffer().then(mp).then(s);
        if (Hp && (u.data instanceof ArrayBuffer || Lp(u.data)))
          return s(mp(u.data));
        fc(u, false, (r) => {
          Zo || (Zo = new TextEncoder()), s(Zo.encode(r));
        });
      }
      var pp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      var Cs = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
      for (let u = 0; u < pp.length; u++)
        Cs[pp.charCodeAt(u)] = u;
      var ob = (u) => {
        let s = u.length * 0.75, r = u.length, f, y = 0, v, m, x, p;
        u[u.length - 1] === "=" && (s--, u[u.length - 2] === "=" && s--);
        const h = new ArrayBuffer(s), j = new Uint8Array(h);
        for (f = 0; f < r; f += 4)
          v = Cs[u.charCodeAt(f)], m = Cs[u.charCodeAt(f + 1)], x = Cs[u.charCodeAt(f + 2)], p = Cs[u.charCodeAt(f + 3)], j[y++] = v << 2 | m >> 4, j[y++] = (m & 15) << 4 | x >> 2, j[y++] = (x & 3) << 6 | p & 63;
        return h;
      };
      var cb = typeof ArrayBuffer == "function";
      var oc = (u, s) => {
        if (typeof u != "string")
          return { type: "message", data: Yp(u, s) };
        const r = u.charAt(0);
        return r === "b" ? { type: "message", data: db(u.substring(1), s) } : vr[r] ? u.length > 1 ? { type: vr[r], data: u.substring(1) } : { type: vr[r] } : ec;
      };
      var db = (u, s) => {
        if (cb) {
          const r = ob(u);
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
      var hb = (u, s) => {
        const r = u.length, f = new Array(r);
        let y = 0;
        u.forEach((v, m) => {
          fc(v, false, (x) => {
            f[m] = x, ++y === r && s(f.join(Xp));
          });
        });
      };
      var mb = (u, s) => {
        const r = u.split(Xp), f = [];
        for (let y = 0; y < r.length; y++) {
          const v = oc(r[y], s);
          if (f.push(v), v.type === "error")
            break;
        }
        return f;
      };
      function pb() {
        return new TransformStream({ transform(u, s) {
          fb(u, (r) => {
            const f = r.length;
            let y;
            if (f < 126)
              y = new Uint8Array(1), new DataView(y.buffer).setUint8(0, f);
            else if (f < 65536) {
              y = new Uint8Array(3);
              const v = new DataView(y.buffer);
              v.setUint8(0, 126), v.setUint16(1, f);
            } else {
              y = new Uint8Array(9);
              const v = new DataView(y.buffer);
              v.setUint8(0, 127), v.setBigUint64(1, BigInt(f));
            }
            u.data && typeof u.data != "string" && (y[0] |= 128), s.enqueue(y), s.enqueue(r);
          });
        } });
      }
      var Ko;
      function pr(u) {
        return u.reduce((s, r) => s + r.length, 0);
      }
      function gr(u, s) {
        if (u[0].length === s)
          return u.shift();
        const r = new Uint8Array(s);
        let f = 0;
        for (let y = 0; y < s; y++)
          r[y] = u[0][f++], f === u[0].length && (u.shift(), f = 0);
        return u.length && f < u[0].length && (u[0] = u[0].slice(f)), r;
      }
      function gb(u, s) {
        Ko || (Ko = new TextDecoder());
        const r = [];
        let f = 0, y = -1, v = false;
        return new TransformStream({ transform(m, x) {
          for (r.push(m); ; ) {
            if (f === 0) {
              if (pr(r) < 1)
                break;
              const p = gr(r, 1);
              v = (p[0] & 128) === 128, y = p[0] & 127, y < 126 ? f = 3 : y === 126 ? f = 1 : f = 2;
            } else if (f === 1) {
              if (pr(r) < 2)
                break;
              const p = gr(r, 2);
              y = new DataView(p.buffer, p.byteOffset, p.length).getUint16(0), f = 3;
            } else if (f === 2) {
              if (pr(r) < 8)
                break;
              const p = gr(r, 8), h = new DataView(p.buffer, p.byteOffset, p.length), j = h.getUint32(0);
              if (j > Math.pow(2, 21) - 1) {
                x.enqueue(ec);
                break;
              }
              y = j * Math.pow(2, 32) + h.getUint32(4), f = 3;
            } else {
              if (pr(r) < y)
                break;
              const p = gr(r, y);
              x.enqueue(oc(v ? p : Ko.decode(p), s)), f = 0;
            }
            if (y === 0 || y > u) {
              x.enqueue(ec);
              break;
            }
          }
        } });
      }
      var Qp = 4;
      function ot(u) {
        if (u)
          return yb(u);
      }
      function yb(u) {
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
        for (var f, y = 0; y < r.length; y++)
          if (f = r[y], f === s || f.fn === s) {
            r.splice(y, 1);
            break;
          }
        return r.length === 0 && delete this._callbacks["$" + u], this;
      };
      ot.prototype.emit = function(u) {
        this._callbacks = this._callbacks || {};
        for (var s = new Array(arguments.length - 1), r = this._callbacks["$" + u], f = 1; f < arguments.length; f++)
          s[f - 1] = arguments[f];
        if (r) {
          r = r.slice(0);
          for (var f = 0, y = r.length; f < y; ++f)
            r[f].apply(this, s);
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
      function Gp(u, ...s) {
        return s.reduce((r, f) => (u.hasOwnProperty(f) && (r[f] = u[f]), r), {});
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
        for (let f = 0, y = u.length; f < y; f++)
          s = u.charCodeAt(f), s < 128 ? r += 1 : s < 2048 ? r += 2 : s < 55296 || s >= 57344 ? r += 3 : (f++, r += 4);
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
        for (let f = 0, y = r.length; f < y; f++) {
          let v = r[f].split("=");
          s[decodeURIComponent(v[0])] = decodeURIComponent(v[1]);
        }
        return s;
      }
      var Tb = class extends Error {
        constructor(s, r, f) {
          super(s), this.description = r, this.context = f, this.type = "TransportError";
        }
      };
      var cc = class extends ot {
        constructor(s) {
          super(), this.writable = false, jr(this, s), this.opts = s, this.query = s.query, this.socket = s.socket;
        }
        onError(s, r, f) {
          return super.emitReserved("error", new Tb(s, r, f)), this;
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
          const r = oc(s, this.socket.binaryType);
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
      var wb = {};
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
        wb[kp[yr]] = yr;
      var Zp = false;
      try {
        Zp = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
      } catch (u) {
      }
      var Eb = Zp;
      function Kp(u) {
        const s = u.xdomain;
        try {
          if (typeof XMLHttpRequest < "u" && (!s || Eb))
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
            const f = location.protocol === "https:";
            let y = location.port;
            y || (y = f ? "443" : "80"), this.xd = typeof location < "u" && s.hostname !== location.hostname || y !== s.port;
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
            let f = 0;
            this.polling && (f++, this.once("pollComplete", function() {
              --f || r();
            })), this.writable || (f++, this.once("drain", function() {
              --f || r();
            }));
          } else
            r();
        }
        poll() {
          this.polling = true, this.doPoll(), this.emitReserved("poll");
        }
        onData(s) {
          const r = (f) => {
            if (this.readyState === "opening" && f.type === "open" && this.onOpen(), f.type === "close")
              return this.onClose({ description: "transport closed by the server" }), false;
            this.onPacket(f);
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
          const f = this.request({ method: "POST", data: s });
          f.on("success", r), f.on("error", (y, v) => {
            this.onError("xhr post error", y, v);
          });
        }
        doPoll() {
          const s = this.request();
          s.on("data", this.onData.bind(this)), s.on("error", (r, f) => {
            this.onError("xhr poll error", r, f);
          }), this.pollXhr = s;
        }
      };
      var Yn = class extends ot {
        constructor(s, r) {
          super(), jr(this, r), this.opts = r, this.method = r.method || "GET", this.uri = s, this.data = r.data !== void 0 ? r.data : null, this.create();
        }
        create() {
          var s;
          const r = Gp(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
          r.xdomain = !!this.opts.xd;
          const f = this.xhr = new Kp(r);
          try {
            f.open(this.method, this.uri, true);
            try {
              if (this.opts.extraHeaders) {
                f.setDisableHeaderCheck && f.setDisableHeaderCheck(true);
                for (let y in this.opts.extraHeaders)
                  this.opts.extraHeaders.hasOwnProperty(y) && f.setRequestHeader(y, this.opts.extraHeaders[y]);
              }
            } catch (y) {
            }
            if (this.method === "POST")
              try {
                f.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
              } catch (y) {
              }
            try {
              f.setRequestHeader("Accept", "*/*");
            } catch (y) {
            }
            (s = this.opts.cookieJar) === null || s === void 0 || s.addCookies(f), "withCredentials" in f && (f.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (f.timeout = this.opts.requestTimeout), f.onreadystatechange = () => {
              var y;
              f.readyState === 3 && ((y = this.opts.cookieJar) === null || y === void 0 || y.parseCookies(f)), f.readyState === 4 && (f.status === 200 || f.status === 1223 ? this.onLoad() : this.setTimeoutFn(() => {
                this.onError(typeof f.status == "number" ? f.status : 0);
              }, 0));
            }, f.send(this.data);
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
          const s = this.uri(), r = this.opts.protocols, f = Sp ? {} : Gp(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
          this.opts.extraHeaders && (f.headers = this.opts.extraHeaders);
          try {
            this.ws = xp && !Sp ? r ? new br(s, r) : new br(s) : new br(s, r, f);
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
            const f = s[r], y = r === s.length - 1;
            fc(f, this.supportsBinary, (v) => {
              try {
                xp && this.ws.send(v);
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
              const r = gb(Number.MAX_SAFE_INTEGER, this.socket.binaryType), f = s.readable.pipeThrough(r).getReader(), y = pb();
              y.readable.pipeTo(s.writable), this.writer = y.writable.getWriter();
              const v = () => {
                f.read().then(({ done: x, value: p }) => {
                  x || (this.onPacket(p), v());
                }).catch((x) => {
                });
              };
              v();
              const m = { type: "open" };
              this.query.sid && (m.data = `{"sid":"${this.query.sid}"}`), this.writer.write(m).then(() => this.onOpen());
            });
          }));
        }
        write(s) {
          this.writable = false;
          for (let r = 0; r < s.length; r++) {
            const f = s[r], y = r === s.length - 1;
            this.writer.write(f).then(() => {
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
        const s = u, r = u.indexOf("["), f = u.indexOf("]");
        r != -1 && f != -1 && (u = u.substring(0, r) + u.substring(r, f).replace(/:/g, ";") + u.substring(f, u.length));
        let y = Db.exec(u || ""), v = {}, m = 14;
        for (; m--; )
          v[Bb[m]] = y[m] || "";
        return r != -1 && f != -1 && (v.source = s, v.host = v.host.substring(1, v.host.length - 1).replace(/;/g, ":"), v.authority = v.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), v.ipv6uri = true), v.pathNames = qb(v, v.path), v.queryKey = Hb(v, v.query), v;
      }
      function qb(u, s) {
        const r = /\/{2,9}/g, f = s.replace(r, "/").split("/");
        return (s.slice(0, 1) == "/" || s.length === 0) && f.splice(0, 1), s.slice(-1) == "/" && f.splice(f.length - 1, 1), f;
      }
      function Hb(u, s) {
        const r = {};
        return s.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(f, y, v) {
          y && (r[y] = v);
        }), r;
      }
      var Jp = class Si extends ot {
        constructor(s, r = {}) {
          super(), this.binaryType = Cb, this.writeBuffer = [], s && typeof s == "object" && (r = s, s = null), s ? (s = nc(s), r.hostname = s.host, r.secure = s.protocol === "https" || s.protocol === "wss", r.port = s.port, s.query && (r.query = s.query)) : r.host && (r.hostname = nc(r.host).host), jr(this, r), this.secure = r.secure != null ? r.secure : typeof location < "u" && location.protocol === "https:", r.hostname && !r.port && (r.port = this.secure ? "443" : "80"), this.hostname = r.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = r.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = r.transports || ["polling", "websocket", "webtransport"], this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({ path: "/engine.io", agent: false, withCredentials: false, upgrade: true, timestampParam: "t", rememberUpgrade: false, addTrailingSlash: true, rejectUnauthorized: true, perMessageDeflate: { threshold: 1024 }, transportOptions: {}, closeOnBeforeunload: false }, r), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = jb(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
            this.transport && (this.transport.removeAllListeners(), this.transport.close());
          }, addEventListener("beforeunload", this.beforeunloadEventListener, false)), this.hostname !== "localhost" && (this.offlineEventListener = () => {
            this.onClose("transport close", { description: "network connection lost" });
          }, addEventListener("offline", this.offlineEventListener, false))), this.open();
        }
        createTransport(s) {
          const r = Object.assign({}, this.opts.query);
          r.EIO = Qp, r.transport = s, this.id && (r.sid = this.id);
          const f = Object.assign({}, this.opts, { query: r, socket: this, hostname: this.hostname, secure: this.secure, port: this.port }, this.opts.transportOptions[s]);
          return new Ub[s](f);
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
          let r = this.createTransport(s), f = false;
          Si.priorWebsocketSuccess = false;
          const y = () => {
            f || (r.send([{ type: "ping", data: "probe" }]), r.once("packet", (E) => {
              if (!f)
                if (E.type === "pong" && E.data === "probe") {
                  if (this.upgrading = true, this.emitReserved("upgrading", r), !r)
                    return;
                  Si.priorWebsocketSuccess = r.name === "websocket", this.transport.pause(() => {
                    f || this.readyState !== "closed" && (j(), this.setTransport(r), r.send([{ type: "upgrade" }]), this.emitReserved("upgrade", r), r = null, this.upgrading = false, this.flush());
                  });
                } else {
                  const Y = new Error("probe error");
                  Y.transport = r.name, this.emitReserved("upgradeError", Y);
                }
            }));
          };
          function v() {
            f || (f = true, j(), r.close(), r = null);
          }
          const m = (E) => {
            const Y = new Error("probe error: " + E);
            Y.transport = r.name, v(), this.emitReserved("upgradeError", Y);
          };
          function x() {
            m("transport closed");
          }
          function p() {
            m("socket closed");
          }
          function h(E) {
            r && E.name !== r.name && v();
          }
          const j = () => {
            r.removeListener("open", y), r.removeListener("error", m), r.removeListener("close", x), this.off("close", p), this.off("upgrading", h);
          };
          r.once("open", y), r.once("error", m), r.once("close", x), this.once("close", p), this.once("upgrading", h), this.upgrades.indexOf("webtransport") !== -1 && s !== "webtransport" ? this.setTimeoutFn(() => {
            f || r.open();
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
            const f = this.writeBuffer[r].data;
            if (f && (s += Sb(f)), r > 0 && s > this.maxPayload)
              return this.writeBuffer.slice(0, r);
            s += 2;
          }
          return this.writeBuffer;
        }
        write(s, r, f) {
          return this.sendPacket("message", s, r, f), this;
        }
        send(s, r, f) {
          return this.sendPacket("message", s, r, f), this;
        }
        sendPacket(s, r, f, y) {
          if (typeof r == "function" && (y = r, r = void 0), typeof f == "function" && (y = f, f = null), this.readyState === "closing" || this.readyState === "closed")
            return;
          f = f || {}, f.compress = f.compress !== false;
          const v = { type: s, data: r, options: f };
          this.emitReserved("packetCreate", v), this.writeBuffer.push(v), y && this.once("flush", y), this.flush();
        }
        close() {
          const s = () => {
            this.onClose("forced close"), this.transport.close();
          }, r = () => {
            this.off("upgrade", r), this.off("upgradeError", r), s();
          }, f = () => {
            this.once("upgrade", r), this.once("upgradeError", r);
          };
          return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
            this.upgrading ? f() : s();
          }) : this.upgrading ? f() : s()), this;
        }
        onError(s) {
          Si.priorWebsocketSuccess = false, this.emitReserved("error", s), this.onClose("transport error", s);
        }
        onClose(s, r) {
          (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") && (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), typeof removeEventListener == "function" && (removeEventListener("beforeunload", this.beforeunloadEventListener, false), removeEventListener("offline", this.offlineEventListener, false)), this.readyState = "closed", this.id = null, this.emitReserved("close", s, r), this.writeBuffer = [], this.prevBufferLen = 0);
        }
        filterUpgrades(s) {
          const r = [];
          let f = 0;
          const y = s.length;
          for (; f < y; f++)
            ~this.transports.indexOf(s[f]) && r.push(s[f]);
          return r;
        }
      };
      Jp.protocol = Qp;
      function Lb(u, s = "", r) {
        let f = u;
        r = r || typeof location < "u" && location, u == null && (u = r.protocol + "//" + r.host), typeof u == "string" && (u.charAt(0) === "/" && (u.charAt(1) === "/" ? u = r.protocol + u : u = r.host + u), /^(https?|wss?):\/\//.test(u) || (typeof r < "u" ? u = r.protocol + "//" + u : u = "https://" + u), f = nc(u)), f.port || (/^(http|ws)$/.test(f.protocol) ? f.port = "80" : /^(http|ws)s$/.test(f.protocol) && (f.port = "443")), f.path = f.path || "/";
        const y = f.host.indexOf(":") !== -1 ? "[" + f.host + "]" : f.host;
        return f.id = f.protocol + "://" + y + ":" + f.port + s, f.href = f.protocol + "://" + y + (r && r.port === f.port ? "" : ":" + f.port), f;
      }
      var Yb = typeof ArrayBuffer == "function";
      var Xb = (u) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(u) : u.buffer instanceof ArrayBuffer;
      var Fp = Object.prototype.toString;
      var Qb = typeof Blob == "function" || typeof Blob < "u" && Fp.call(Blob) === "[object BlobConstructor]";
      var Gb = typeof File == "function" || typeof File < "u" && Fp.call(File) === "[object FileConstructor]";
      function hc(u) {
        return Yb && (u instanceof ArrayBuffer || Xb(u)) || Qb && u instanceof Blob || Gb && u instanceof File;
      }
      function xr(u, s) {
        if (!u || typeof u != "object")
          return false;
        if (Array.isArray(u)) {
          for (let r = 0, f = u.length; r < f; r++)
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
        const s = [], r = u.data, f = u;
        return f.data = ac(r, s), f.attachments = s.length, { packet: f, buffers: s };
      }
      function ac(u, s) {
        if (!u)
          return u;
        if (hc(u)) {
          const r = { _placeholder: true, num: s.length };
          return s.push(u), r;
        } else if (Array.isArray(u)) {
          const r = new Array(u.length);
          for (let f = 0; f < u.length; f++)
            r[f] = ac(u[f], s);
          return r;
        } else if (typeof u == "object" && !(u instanceof Date)) {
          const r = {};
          for (const f in u)
            Object.prototype.hasOwnProperty.call(u, f) && (r[f] = ac(u[f], s));
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
          const r = kb(s), f = this.encodeAsString(r.packet), y = r.buffers;
          return y.unshift(f), y;
        }
      };
      function _p(u) {
        return Object.prototype.toString.call(u) === "[object Object]";
      }
      var mc = class extends ot {
        constructor(s) {
          super(), this.reviver = s;
        }
        add(s) {
          let r;
          if (typeof s == "string") {
            if (this.reconstructor)
              throw new Error("got plaintext data when reconstructing a packet");
            r = this.decodeString(s);
            const f = r.type === Re.BINARY_EVENT;
            f || r.type === Re.BINARY_ACK ? (r.type = f ? Re.EVENT : Re.ACK, this.reconstructor = new Fb(r), r.attachments === 0 && super.emitReserved("decoded", r)) : super.emitReserved("decoded", r);
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
          const f = { type: Number(s.charAt(0)) };
          if (Re[f.type] === void 0)
            throw new Error("unknown packet type " + f.type);
          if (f.type === Re.BINARY_EVENT || f.type === Re.BINARY_ACK) {
            const v = r + 1;
            for (; s.charAt(++r) !== "-" && r != s.length; )
              ;
            const m = s.substring(v, r);
            if (m != Number(m) || s.charAt(r) !== "-")
              throw new Error("Illegal attachments");
            f.attachments = Number(m);
          }
          if (s.charAt(r + 1) === "/") {
            const v = r + 1;
            for (; ++r && !(s.charAt(r) === "," || r === s.length); )
              ;
            f.nsp = s.substring(v, r);
          } else
            f.nsp = "/";
          const y = s.charAt(r + 1);
          if (y !== "" && Number(y) == y) {
            const v = r + 1;
            for (; ++r; ) {
              const m = s.charAt(r);
              if (m == null || Number(m) != m) {
                --r;
                break;
              }
              if (r === s.length)
                break;
            }
            f.id = Number(s.substring(v, r + 1));
          }
          if (s.charAt(++r)) {
            const v = this.tryParse(s.substr(r));
            if (mc.isPayloadValid(f.type, v))
              f.data = v;
            else
              throw new Error("invalid payload");
          }
          return f;
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
      var Wp = class extends ot {
        constructor(s, r, f) {
          super(), this.connected = false, this.recovered = false, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = s, this.nsp = r, f && f.auth && (this.auth = f.auth), this._opts = Object.assign({}, f), this.io._autoConnect && this.open();
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
          const f = { type: Re.EVENT, data: r };
          if (f.options = {}, f.options.compress = this.flags.compress !== false, typeof r[r.length - 1] == "function") {
            const v = this.ids++, m = r.pop();
            this._registerAckCallback(v, m), f.id = v;
          }
          const y = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
          return this.flags.volatile && (!y || !this.connected) || (this.connected ? (this.notifyOutgoingListeners(f), this.packet(f)) : this.sendBuffer.push(f)), this.flags = {}, this;
        }
        _registerAckCallback(s, r) {
          var f;
          const y = (f = this.flags.timeout) !== null && f !== void 0 ? f : this._opts.ackTimeout;
          if (y === void 0) {
            this.acks[s] = r;
            return;
          }
          const v = this.io.setTimeoutFn(() => {
            delete this.acks[s];
            for (let m = 0; m < this.sendBuffer.length; m++)
              this.sendBuffer[m].id === s && this.sendBuffer.splice(m, 1);
            r.call(this, new Error("operation has timed out"));
          }, y);
          this.acks[s] = (...m) => {
            this.io.clearTimeoutFn(v), r.apply(this, [null, ...m]);
          };
        }
        emitWithAck(s, ...r) {
          const f = this.flags.timeout !== void 0 || this._opts.ackTimeout !== void 0;
          return new Promise((y, v) => {
            r.push((m, x) => f ? m ? v(m) : y(x) : y(m)), this.emit(s, ...r);
          });
        }
        _addToQueue(s) {
          let r;
          typeof s[s.length - 1] == "function" && (r = s.pop());
          const f = { id: this._queueSeq++, tryCount: 0, pending: false, args: s, flags: Object.assign({ fromQueue: true }, this.flags) };
          s.push((y, ...v) => f !== this._queue[0] ? void 0 : (y !== null ? f.tryCount > this._opts.retries && (this._queue.shift(), r && r(y)) : (this._queue.shift(), r && r(null, ...v)), f.pending = false, this._drainQueue())), this._queue.push(f), this._drainQueue();
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
            for (const f of r)
              f.apply(this, s);
          }
          super.emit.apply(this, s), this._pid && s.length && typeof s[s.length - 1] == "string" && (this._lastOffset = s[s.length - 1]);
        }
        ack(s) {
          const r = this;
          let f = false;
          return function(...y) {
            f || (f = true, r.packet({ type: Re.ACK, id: s, data: y }));
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
            for (let f = 0; f < r.length; f++)
              if (s === r[f])
                return r.splice(f, 1), this;
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
            for (let f = 0; f < r.length; f++)
              if (s === r[f])
                return r.splice(f, 1), this;
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
            for (const f of r)
              f.apply(this, s.data);
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
      var ic = class extends ot {
        constructor(s, r) {
          var f;
          super(), this.nsps = {}, this.subs = [], s && typeof s == "object" && (r = s, s = void 0), r = r || {}, r.path = r.path || "/socket.io", this.opts = r, jr(this, r), this.reconnection(r.reconnection !== false), this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0), this.reconnectionDelay(r.reconnectionDelay || 1e3), this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3), this.randomizationFactor((f = r.randomizationFactor) !== null && f !== void 0 ? f : 0.5), this.backoff = new Ni({ min: this.reconnectionDelay(), max: this.reconnectionDelayMax(), jitter: this.randomizationFactor() }), this.timeout(r.timeout == null ? 2e4 : r.timeout), this._readyState = "closed", this.uri = s;
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
          const r = this.engine, f = this;
          this._readyState = "opening", this.skipReconnect = false;
          const y = Tn(r, "open", function() {
            f.onopen(), s && s();
          }), v = (x) => {
            this.cleanup(), this._readyState = "closed", this.emitReserved("error", x), s ? s(x) : this.maybeReconnectOnOpen();
          }, m = Tn(r, "error", v);
          if (this._timeout !== false) {
            const x = this._timeout, p = this.setTimeoutFn(() => {
              y(), v(new Error("timeout")), r.close();
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
          let f = this.nsps[s];
          return f ? this._autoConnect && !f.active && f.connect() : (f = new Wp(this, s, r), this.nsps[s] = f), f;
        }
        _destroy(s) {
          const r = Object.keys(this.nsps);
          for (const f of r)
            if (this.nsps[f].active)
              return;
          this._close();
        }
        _packet(s) {
          const r = this.encoder.encode(s);
          for (let f = 0; f < r.length; f++)
            this.engine.write(r[f], s.options);
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
            const f = this.setTimeoutFn(() => {
              s.skipReconnect || (this.emitReserved("reconnect_attempt", s.backoff.attempts), !s.skipReconnect && s.open((y) => {
                y ? (s._reconnecting = false, s.reconnect(), this.emitReserved("reconnect_error", y)) : s.onreconnect();
              }));
            }, r);
            this.opts.autoUnref && f.unref(), this.subs.push(() => {
              this.clearTimeoutFn(f);
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
        const r = Lb(u, s.path || "/socket.io"), f = r.source, y = r.id, v = r.path, m = Os[y] && v in Os[y].nsps, x = s.forceNew || s["force new connection"] || s.multiplex === false || m;
        let p;
        return x ? p = new ic(f, s) : (Os[y] || (Os[y] = new ic(f, s)), p = Os[y]), r.query && !s.query && (s.query = r.queryKey), p.socket(r.path, s);
      }
      Object.assign(Sr, { Manager: ic, Socket: Wp, io: Sr, connect: Sr });
      var Pb = class {
        constructor(s, r, f, y) {
          jl(this, "socket_port"), jl(this, "host"), jl(this, "port"), jl(this, "protocol"), jl(this, "url"), jl(this, "site_name"), jl(this, "socket");
          var v, m, x, p;
          if (this.socket_port = f != null ? f : "9000", this.host = (v = window.location) == null ? void 0 : v.hostname, this.port = (m = window.location) != null && m.port ? `:${this.socket_port}` : "", this.protocol = ((x = window.location) == null ? void 0 : x.protocol) === "https:" ? "https" : "http", s) {
            let h = new URL(s);
            h.port = "", f ? (h.port = f, this.url = h.toString()) : this.url = h.toString();
          } else
            this.url = `${this.protocol}://${this.host}${this.port}/`;
          r && (this.url = `${this.url}${r}`), this.site_name = r, this.socket = Sr(`${this.url}`, { withCredentials: true, secure: this.protocol === "https", extraHeaders: y && y.useToken === true ? { Authorization: `${y.type} ${(p = y.token) == null ? void 0 : p.call(y)}` } : {} });
        }
      };
      var Ib = Pe.createContext(null);
      var ev = ({ url: u = "", tokenParams: s, socketPort: r, swrConfig: f, siteName: y, enableSocket: v = true, children: m, customHeaders: x }) => {
        const p = Pe.useMemo(() => {
          const h = new zy.FrappeApp(u, s, void 0, x);
          return { url: u, tokenParams: s, app: h, auth: h.auth(), db: h.db(), call: h.call(), file: h.file(), socket: v ? new Pb(u, y, r, s).socket : void 0, enableSocket: v, socketPort: r };
        }, [u, s, r, v, x]);
        return d.jsx(Ib.Provider, { value: p, children: d.jsx(rb, { value: f, children: m }) });
      };
      var tv = (u) => {
        var s;
        return d.jsx(ev, { enableSocket: false, customHeaders: { "x-frappe-csrf-token": (s = window.frappe) == null ? void 0 : s.csrf_token }, children: u.children });
      };
      Object.keys(km).map((u) => km[u]).filter((u) => u.component).map((u) => {
        const s = (r) => d.jsx(tv, Yt(Ve({}, r), { children: d.jsx(u, {}) }));
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
* @license lucide-react v0.542.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
//# sourceMappingURL=index.bundle.7GFQ77OH.js.map
