(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // ../pms_system/pms_system/public/pms-ui/index.bundle.js
  var require_index_bundle = __commonJS({
    "../pms_system/pms_system/public/pms-ui/index.bundle.js"() {
      var N0 = Object.defineProperty;
      var O0 = Object.defineProperties;
      var j0 = Object.getOwnPropertyDescriptors;
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
      var Lt = (u, s) => O0(u, j0(s));
      var jc = (u, s) => {
        var r = {};
        for (var o in u)
          qm.call(u, o) && s.indexOf(o) < 0 && (r[o] = u[o]);
        if (u != null && rr)
          for (var o of rr(u))
            s.indexOf(o) < 0 && Hm.call(u, o) && (r[o] = u[o]);
        return r;
      };
      var fa = (u, s, r) => new Promise((o, g) => {
        var b = (m) => {
          try {
            v(r.next(m));
          } catch (d) {
            g(d);
          }
        }, h = (m) => {
          try {
            v(r.throw(m));
          } catch (d) {
            g(d);
          }
        }, v = (m) => m.done ? o(m.value) : Promise.resolve(m.value).then(b, h);
        v((r = r.apply(u, s)).next());
      });
      var Sl = function(u, s) {
        this[0] = u, this[1] = s;
      };
      var Rc = (u, s, r) => {
        var o = (h, v, m, d) => {
          try {
            var E = r[h](v), j = (v = E.value) instanceof Sl, Q = E.done;
            Promise.resolve(j ? v[0] : v).then((w) => j ? o(h === "return" ? h : "next", v[1] ? { done: w.done, value: w.value } : w, m, d) : m({ value: w, done: Q })).catch((w) => o("throw", w, m, d));
          } catch (w) {
            d(w);
          }
        }, g = (h) => b[h] = (v) => new Promise((m, d) => o(h, v, m, d)), b = {};
        return r = r.apply(u, s), b[vi("asyncIterator")] = () => b, g("next"), g("throw"), g("return"), b;
      };
      var Cc = (u) => {
        var s = u[vi("asyncIterator")], r = false, o, g = {};
        return s == null ? (s = u[vi("iterator")](), o = (b) => g[b] = (h) => s[b](h)) : (s = s.call(u), o = (b) => g[b] = (h) => {
          if (r) {
            if (r = false, b === "throw")
              throw h;
            return h;
          }
          return r = true, { done: false, value: new Sl(new Promise((v) => {
            var m = s[b](h);
            m instanceof Object || R0("Object expected"), v(m);
          }), 1) };
        }), g[vi("iterator")] = () => g, o("next"), "throw" in s ? o("throw") : g.throw = (b) => {
          throw b;
        }, "return" in s && o("return"), g;
      };
      var Lm = (u, s, r) => (s = u[vi("asyncIterator")]) ? s.call(u) : (u = u[vi("iterator")](), s = {}, r = (o, g) => (g = u[o]) && (s[o] = (b) => new Promise((h, v, m) => (b = g.call(u, b), m = b.done, Promise.resolve(b.value).then((d) => h({ value: d, done: m }), v)))), r("next"), r("return"), s);
      (function() {
        const s = document.createElement("link").relList;
        if (s && s.supports && s.supports("modulepreload"))
          return;
        for (const g of document.querySelectorAll('link[rel="modulepreload"]'))
          o(g);
        new MutationObserver((g) => {
          for (const b of g)
            if (b.type === "childList")
              for (const h of b.addedNodes)
                h.tagName === "LINK" && h.rel === "modulepreload" && o(h);
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
      function Ep(u) {
        return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
      }
      var zc = { exports: {} };
      var As = {};
      var Ym;
      function C0() {
        if (Ym)
          return As;
        Ym = 1;
        var u = Symbol.for("react.transitional.element"), s = Symbol.for("react.fragment");
        function r(o, g, b) {
          var h = null;
          if (b !== void 0 && (h = "" + b), g.key !== void 0 && (h = "" + g.key), "key" in g) {
            b = {};
            for (var v in g)
              v !== "key" && (b[v] = g[v]);
          } else
            b = g;
          return g = b.ref, { $$typeof: u, type: o, key: h, ref: g !== void 0 ? g : null, props: b };
        }
        return As.Fragment = s, As.jsx = r, As.jsxs = r, As;
      }
      var Xm;
      function z0() {
        return Xm || (Xm = 1, zc.exports = C0()), zc.exports;
      }
      var S = z0();
      var U0 = (u) => S.jsxs("label", { children: [u.label && S.jsx("div", { children: u.label }), S.jsx("input", { className: "ef-border ef-border-gray-400 ef-rounded ef-px-2 ef-py-1", onChange: (s) => u.onChange(s.target.value), type: "text", value: u.value })] });
      var M0 = (u, s) => {
        var o;
        const r = window.cur_frm;
        return r ? (o = r.set_value) == null ? void 0 : o.call(r, u, s) : null;
      };
      var D0 = () => {
        const u = window.cur_frm;
        return u ? u.doc : null;
      };
      var Uc = { exports: {} };
      var ye = {};
      var Gm;
      function B0() {
        if (Gm)
          return ye;
        Gm = 1;
        var u = Symbol.for("react.transitional.element"), s = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), h = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), d = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), j = Symbol.for("react.activity"), Q = Symbol.iterator;
        function w(_) {
          return _ === null || typeof _ != "object" ? null : (_ = Q && _[Q] || _["@@iterator"], typeof _ == "function" ? _ : null);
        }
        var U = { isMounted: function() {
          return false;
        }, enqueueForceUpdate: function() {
        }, enqueueReplaceState: function() {
        }, enqueueSetState: function() {
        } }, Z = Object.assign, ie = {};
        function me(_, B, Y) {
          this.props = _, this.context = B, this.refs = ie, this.updater = Y || U;
        }
        me.prototype.isReactComponent = {}, me.prototype.setState = function(_, B) {
          if (typeof _ != "object" && typeof _ != "function" && _ != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
          this.updater.enqueueSetState(this, _, B, "setState");
        }, me.prototype.forceUpdate = function(_) {
          this.updater.enqueueForceUpdate(this, _, "forceUpdate");
        };
        function Se() {
        }
        Se.prototype = me.prototype;
        function se(_, B, Y) {
          this.props = _, this.context = B, this.refs = ie, this.updater = Y || U;
        }
        var be = se.prototype = new Se();
        be.constructor = se, Z(be, me.prototype), be.isPureReactComponent = true;
        var _e = Array.isArray;
        function Me() {
        }
        var fe = { H: null, A: null, T: null, S: null }, lt = Object.prototype.hasOwnProperty;
        function At(_, B, Y) {
          var W = Y.ref;
          return { $$typeof: u, type: _, key: B, ref: W !== void 0 ? W : null, props: Y };
        }
        function $t(_, B) {
          return At(_.type, B, _.props);
        }
        function mt(_) {
          return typeof _ == "object" && _ !== null && _.$$typeof === u;
        }
        function De(_) {
          var B = { "=": "=0", ":": "=2" };
          return "$" + _.replace(/[=:]/g, function(Y) {
            return B[Y];
          });
        }
        var ke = /\/+/g;
        function Ue(_, B) {
          return typeof _ == "object" && _ !== null && _.key != null ? De("" + _.key) : B.toString(36);
        }
        function vt(_) {
          switch (_.status) {
            case "fulfilled":
              return _.value;
            case "rejected":
              throw _.reason;
            default:
              switch (typeof _.status == "string" ? _.then(Me, Me) : (_.status = "pending", _.then(function(B) {
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
        function X(_, B, Y, W, he) {
          var re = typeof _;
          (re === "undefined" || re === "boolean") && (_ = null);
          var je = false;
          if (_ === null)
            je = true;
          else
            switch (re) {
              case "bigint":
              case "string":
              case "number":
                je = true;
                break;
              case "object":
                switch (_.$$typeof) {
                  case u:
                  case s:
                    je = true;
                    break;
                  case E:
                    return je = _._init, X(je(_._payload), B, Y, W, he);
                }
            }
          if (je)
            return he = he(_), je = W === "" ? "." + Ue(_, 0) : W, _e(he) ? (Y = "", je != null && (Y = je.replace(ke, "$&/") + "/"), X(he, B, Y, "", function(Za) {
              return Za;
            })) : he != null && (mt(he) && (he = $t(he, Y + (he.key == null || _ && _.key === he.key ? "" : ("" + he.key).replace(ke, "$&/") + "/") + je)), B.push(he)), 1;
          je = 0;
          var xt = W === "" ? "." : W + ":";
          if (_e(_))
            for (var We = 0; We < _.length; We++)
              W = _[We], re = xt + Ue(W, We), je += X(W, B, Y, re, he);
          else if (We = w(_), typeof We == "function")
            for (_ = We.call(_), We = 0; !(W = _.next()).done; )
              W = W.value, re = xt + Ue(W, We++), je += X(W, B, Y, re, he);
          else if (re === "object") {
            if (typeof _.then == "function")
              return X(vt(_), B, Y, W, he);
            throw B = String(_), Error("Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead.");
          }
          return je;
        }
        function I(_, B, Y) {
          if (_ == null)
            return _;
          var W = [], he = 0;
          return X(_, W, "", "", function(re) {
            return B.call(Y, re, he++);
          }), W;
        }
        function K(_) {
          if (_._status === -1) {
            var B = _._result;
            B = B(), B.then(function(Y) {
              (_._status === 0 || _._status === -1) && (_._status = 1, _._result = Y);
            }, function(Y) {
              (_._status === 0 || _._status === -1) && (_._status = 2, _._result = Y);
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
        }, de = { map: I, forEach: function(_, B, Y) {
          I(_, function() {
            B.apply(this, arguments);
          }, Y);
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
          if (!mt(_))
            throw Error("React.Children.only expected to receive a single React element child.");
          return _;
        } };
        return ye.Activity = j, ye.Children = de, ye.Component = me, ye.Fragment = r, ye.Profiler = g, ye.PureComponent = se, ye.StrictMode = o, ye.Suspense = m, ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = fe, ye.__COMPILER_RUNTIME = { __proto__: null, c: function(_) {
          return fe.H.useMemoCache(_);
        } }, ye.cache = function(_) {
          return function() {
            return _.apply(null, arguments);
          };
        }, ye.cacheSignal = function() {
          return null;
        }, ye.cloneElement = function(_, B, Y) {
          if (_ == null)
            throw Error("The argument must be a React element, but you passed " + _ + ".");
          var W = Z({}, _.props), he = _.key;
          if (B != null)
            for (re in B.key !== void 0 && (he = "" + B.key), B)
              !lt.call(B, re) || re === "key" || re === "__self" || re === "__source" || re === "ref" && B.ref === void 0 || (W[re] = B[re]);
          var re = arguments.length - 2;
          if (re === 1)
            W.children = Y;
          else if (1 < re) {
            for (var je = Array(re), xt = 0; xt < re; xt++)
              je[xt] = arguments[xt + 2];
            W.children = je;
          }
          return At(_.type, he, W);
        }, ye.createContext = function(_) {
          return _ = { $$typeof: h, _currentValue: _, _currentValue2: _, _threadCount: 0, Provider: null, Consumer: null }, _.Provider = _, _.Consumer = { $$typeof: b, _context: _ }, _;
        }, ye.createElement = function(_, B, Y) {
          var W, he = {}, re = null;
          if (B != null)
            for (W in B.key !== void 0 && (re = "" + B.key), B)
              lt.call(B, W) && W !== "key" && W !== "__self" && W !== "__source" && (he[W] = B[W]);
          var je = arguments.length - 2;
          if (je === 1)
            he.children = Y;
          else if (1 < je) {
            for (var xt = Array(je), We = 0; We < je; We++)
              xt[We] = arguments[We + 2];
            he.children = xt;
          }
          if (_ && _.defaultProps)
            for (W in je = _.defaultProps, je)
              he[W] === void 0 && (he[W] = je[W]);
          return At(_, re, he);
        }, ye.createRef = function() {
          return { current: null };
        }, ye.forwardRef = function(_) {
          return { $$typeof: v, render: _ };
        }, ye.isValidElement = mt, ye.lazy = function(_) {
          return { $$typeof: E, _payload: { _status: -1, _result: _ }, _init: K };
        }, ye.memo = function(_, B) {
          return { $$typeof: d, type: _, compare: B === void 0 ? null : B };
        }, ye.startTransition = function(_) {
          var B = fe.T, Y = {};
          fe.T = Y;
          try {
            var W = _(), he = fe.S;
            he !== null && he(Y, W), typeof W == "object" && W !== null && typeof W.then == "function" && W.then(Me, ee);
          } catch (re) {
            ee(re);
          } finally {
            B !== null && Y.types !== null && (B.types = Y.types), fe.T = B;
          }
        }, ye.unstable_useCacheRefresh = function() {
          return fe.H.useCacheRefresh();
        }, ye.use = function(_) {
          return fe.H.use(_);
        }, ye.useActionState = function(_, B, Y) {
          return fe.H.useActionState(_, B, Y);
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
        }, ye.useImperativeHandle = function(_, B, Y) {
          return fe.H.useImperativeHandle(_, B, Y);
        }, ye.useInsertionEffect = function(_, B) {
          return fe.H.useInsertionEffect(_, B);
        }, ye.useLayoutEffect = function(_, B) {
          return fe.H.useLayoutEffect(_, B);
        }, ye.useMemo = function(_, B) {
          return fe.H.useMemo(_, B);
        }, ye.useOptimistic = function(_, B) {
          return fe.H.useOptimistic(_, B);
        }, ye.useReducer = function(_, B, Y) {
          return fe.H.useReducer(_, B, Y);
        }, ye.useRef = function(_) {
          return fe.H.useRef(_);
        }, ye.useState = function(_) {
          return fe.H.useState(_);
        }, ye.useSyncExternalStore = function(_, B, Y) {
          return fe.H.useSyncExternalStore(_, B, Y);
        }, ye.useTransition = function() {
          return fe.H.useTransition();
        }, ye.version = "19.2.0", ye;
      }
      var Qm;
      function lf() {
        return Qm || (Qm = 1, Uc.exports = B0()), Uc.exports;
      }
      var Pe = lf();
      var Cs = Ep(Pe);
      var sf = () => {
        var r;
        const [u, s] = Pe.useState((r = D0()) == null ? void 0 : r.client_name);
        return Pe.useEffect(() => {
          M0("client_name", u);
        }, [u]), S.jsx(S.Fragment, { children: S.jsx(U0, { value: u, onChange: s, label: "Client Name" }) });
      };
      sf.component = "pms-demo-component";
      sf.simulator = { doctype: "Appraisal Cycle", docname: "2025-26" };
      var q0 = (u) => u.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
      var H0 = (u) => u.replace(/^([A-Z])|[\s-_]+(\w)/g, (s, r, o) => o ? o.toUpperCase() : r.toLowerCase());
      var Vm = (u) => {
        const s = H0(u);
        return s.charAt(0).toUpperCase() + s.slice(1);
      };
      var Ap = (...u) => u.filter((s, r, o) => !!s && s.trim() !== "" && o.indexOf(s) === r).join(" ").trim();
      var L0 = (u) => {
        for (const s in u)
          if (s.startsWith("aria-") || s === "role" || s === "title")
            return true;
      };
      var Y0 = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
      var X0 = Pe.forwardRef((d, m) => {
        var E = d, { color: u = "currentColor", size: s = 24, strokeWidth: r = 2, absoluteStrokeWidth: o, className: g = "", children: b, iconNode: h } = E, v = jc(E, ["color", "size", "strokeWidth", "absoluteStrokeWidth", "className", "children", "iconNode"]);
        return Pe.createElement("svg", Ve(Ve(Lt(Ve({ ref: m }, Y0), { width: s, height: s, stroke: u, strokeWidth: o ? Number(r) * 24 / Number(s) : r, className: Ap("lucide", g) }), !b && !L0(v) && { "aria-hidden": "true" }), v), [...h.map(([j, Q]) => Pe.createElement(j, Q)), ...Array.isArray(b) ? b : [b]]);
      });
      var uf = (u, s) => {
        const r = Pe.forwardRef((h, b) => {
          var v = h, { className: o } = v, g = jc(v, ["className"]);
          return Pe.createElement(X0, Ve({ ref: b, iconNode: s, className: Ap(`lucide-${q0(Vm(u))}`, `lucide-${u}`, o) }, g));
        });
        return r.displayName = Vm(u), r;
      };
      var G0 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
      var Q0 = uf("chevron-down", G0);
      var V0 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
      var k0 = uf("chevron-up", V0);
      var Z0 = [["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }], ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]];
      var Sr = uf("lock", Z0);
      var ha = ({ rating: u, onChange: s, disabled: r }) => S.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2", children: [S.jsx("input", { type: "number", min: 0, max: 10, step: 0.5, value: u != null ? u : "", onChange: (o) => {
        let g = parseFloat(o.target.value);
        if (isNaN(g)) {
          s(0);
          return;
        }
        g < 0 && (g = 0), g > 10 && (g = 10), s(g);
      }, disabled: r, className: `ef-w-16 ef-px-2 ef-py-1 ef-border ef-rounded ef-text-center ef-font-semibold ef-text-sm ${r ? "ef-bg-gray-100 ef-text-gray-500 ef-cursor-not-allowed" : "ef-bg-white"}`, placeholder: "0-10" }), S.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/ 10" })] });
      var K0 = ({ kra: u, goal: s, appraisalMode: r, updateGoalRating: o, employeeCanEdit: g, managerCanEdit: b, showManagerData: h, secondManagerCanEdit: v }) => {
        const m = () => S.jsxs("div", { className: "ef-absolute ef-top-2 ef-right-2 ef-flex ef-items-center ef-gap-1 ef-bg-gray-200 ef-text-gray-600 ef-text-xs ef-px-2 ef-py-1 ef-rounded-lg ef-shadow-sm", children: [S.jsx(Sr, { size: 12 }), "Locked"] });
        return r === "self" ? S.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-shadow-sm", children: [S.jsx("div", { className: "ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b", children: S.jsx("h3", { className: "ef-text-sm ef-font-semibold ef-text-gray-900", children: s.description }) }), S.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [S.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [S.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Self Appraisal" }), !g && S.jsx(m, {})] }), S.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), S.jsx(ha, { rating: s.selfRating, onChange: (d) => g && o(u.id, s.id, "selfRating", d), disabled: !g }), S.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), S.jsx("textarea", { value: s.selfComments, onChange: (d) => g && o(u.id, s.id, "selfComments", d.target.value), disabled: !g, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${g ? "ef-bg-white ef-border-blue-200 focus:ef-ring-1 focus:ef-ring-blue-400" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Share your thoughts..." })] })] }) : r === "manager" ? S.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-shadow-sm", children: [S.jsx("div", { className: "ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b", children: S.jsx("h3", { className: "ef-text-sm ef-font-semibold ef-text-gray-900", children: s.description }) }), S.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [S.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Employee Self Rating" }), S.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4 ef-mb-2", children: [S.jsxs("div", { children: [S.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), S.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-blue-100 ef-border ef-border-blue-200 ef-px-2 ef-py-1 ef-rounded", children: [S.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-blue-700", children: s.selfRating }), S.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), S.jsxs("div", { className: "ef-flex-1", children: [S.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), S.jsx("div", { className: "ef-bg-white ef-border ef-border-blue-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: s.selfComments || S.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), h && S.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-purple-50", children: [S.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [S.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Manager Review" }), !b && S.jsx(m, {})] }), S.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), S.jsx(ha, { rating: s.managerRating, onChange: (d) => b && o(u.id, s.id, "managerRating", d), disabled: !b }), S.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), S.jsx("textarea", { value: s.managerComments, onChange: (d) => b && o(u.id, s.id, "managerComments", d.target.value), disabled: !b, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${b ? "ef-bg-white ef-border-purple-200 focus:ef-ring-1 focus:ef-ring-purple-400" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Add your review..." })] })] }) : r === "second_manager" ? S.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-shadow-sm", children: [S.jsx("div", { className: "ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b", children: S.jsx("h3", { className: "ef-text-sm ef-font-semibold ef-text-gray-900", children: s.description }) }), S.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [S.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Employee Self Rating" }), S.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4", children: [S.jsxs("div", { children: [S.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), S.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-blue-100 ef-border ef-border-blue-200 ef-px-2 ef-py-1 ef-rounded", children: [S.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-blue-700", children: s.selfRating }), S.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), S.jsxs("div", { className: "ef-flex-1", children: [S.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), S.jsx("div", { className: "ef-bg-white ef-border ef-border-blue-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: s.selfComments || S.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), h && S.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-purple-50", children: [S.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Manager Review" }), S.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4", children: [S.jsxs("div", { children: [S.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), S.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-purple-100 ef-border ef-border-purple-200 ef-px-2 ef-py-1 ef-rounded", children: [S.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-purple-700", children: s.managerRating }), S.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), S.jsxs("div", { className: "ef-flex-1", children: [S.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), S.jsx("div", { className: "ef-bg-white ef-border ef-border-purple-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: s.managerComments || S.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), S.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-green-50", children: [S.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [S.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Second Manager Review" }), !v && S.jsx(m, {})] }), S.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), S.jsx(ha, { rating: s.secondManagerRating, onChange: (d) => v && o(u.id, s.id, "secondManagerRating", d), disabled: !v }), S.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), S.jsx("textarea", { value: s.secondManagerComment, onChange: (d) => v && o(u.id, s.id, "secondManagerComment", d.target.value), disabled: !v, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${v ? "ef-bg-white ef-border-green-200 focus:ef-ring-1 focus:ef-ring-green-400" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Add your review..." })] })] }) : null;
      };
      var J0 = ({ kra: u, appraisalMode: s, updateKRARating: r, employeeCanEdit: o, managerCanEdit: g, showManagerData: b, secondManagerCanEdit: h }) => {
        const v = () => S.jsxs("div", { className: "ef-absolute ef-top-2 ef-right-2 ef-flex ef-items-center ef-gap-1 ef-bg-gray-200 ef-text-gray-600 ef-text-xs ef-px-2 ef-py-1 ef-rounded-lg ef-shadow-sm", children: [S.jsx(Sr, { size: 12 }), "Locked"] });
        return s === "self" ? S.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-overflow-hidden ef-shadow-sm", children: [S.jsx("div", { className: "ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b ef-border-gray-200", children: S.jsx("h3", { className: "ef-text-sm ef-font-semibold ef-text-gray-900", children: u.title }) }), S.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [S.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [S.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Self Appraisal" }), !o && S.jsx(v, {})] }), S.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), S.jsx(ha, { rating: u.selfRating, onChange: (m) => o && r(u.id, "selfRating", m), disabled: !o }), S.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), S.jsx("textarea", { value: u.selfComments, onChange: (m) => o && r(u.id, "selfComments", m.target.value), disabled: !o, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${o ? "ef-bg-white ef-border-blue-200 focus:ef-ring-1 focus:ef-ring-blue-400" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Add your comments..." })] })] }) : s === "manager" ? S.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-overflow-hidden ef-shadow-sm", children: [S.jsx("div", { className: "ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b ef-border-gray-200", children: S.jsx("h3", { className: "ef-text-sm ef-font-semibold ef-text-gray-900", children: u.title }) }), S.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [S.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Employee Self Rating" }), S.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4 ef-mb-2", children: [S.jsxs("div", { children: [S.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), S.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-blue-100 ef-border ef-border-blue-200 ef-px-2 ef-py-1 ef-rounded", children: [S.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-blue-700", children: u.selfRating }), S.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), S.jsxs("div", { className: "ef-flex-1", children: [S.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), S.jsx("div", { className: "ef-bg-white ef-border ef-border-blue-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: u.selfComments || S.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), b && S.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-purple-50", children: [S.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [S.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Manager Review" }), !g && S.jsx(v, {})] }), S.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), S.jsx(ha, { rating: u.managerRating, onChange: (m) => g && r(u.id, "managerRating", m), disabled: !g }), S.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), S.jsx("textarea", { value: u.managerComments, onChange: (m) => g && r(u.id, "managerComments", m.target.value), disabled: !g, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${g ? "ef-bg-white ef-border-purple-200 focus:ef-ring-1 focus:ef-ring-purple-400" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Add your review..." })] })] }) : s === "second_manager" ? S.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-overflow-hidden ef-shadow-sm", children: [S.jsx("div", { className: "ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b ef-border-gray-200", children: S.jsx("h3", { className: "ef-text-sm ef-font-semibold ef-text-gray-900", children: u.title }) }), S.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [S.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Employee Self Rating" }), S.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4", children: [S.jsxs("div", { children: [S.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), S.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-blue-100 ef-border ef-border-blue-200 ef-px-2 ef-py-1 ef-rounded", children: [S.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-blue-700", children: u.selfRating }), S.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), S.jsxs("div", { className: "ef-flex-1", children: [S.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), S.jsx("div", { className: "ef-bg-white ef-border ef-border-blue-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: u.selfComments || S.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), b && S.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-purple-50", children: [S.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Manager Review" }), S.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4", children: [S.jsxs("div", { children: [S.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), S.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-purple-100 ef-border ef-border-purple-200 ef-px-2 ef-py-1 ef-rounded", children: [S.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-purple-700", children: u.managerRating }), S.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), S.jsxs("div", { className: "ef-flex-1", children: [S.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), S.jsx("div", { className: "ef-bg-white ef-border ef-border-purple-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: u.managerComments || S.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), S.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-green-50", children: [S.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [S.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Second Manager Review" }), !h && S.jsx(v, {})] }), S.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), S.jsx(ha, { rating: u.secondManagerRating, onChange: (m) => h && r(u.id, "secondManagerRating", m), disabled: !h }), S.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), S.jsx("textarea", { value: u.secondManagerComment, onChange: (m) => h && r(u.id, "secondManagerComment", m.target.value), disabled: !h, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${h ? "ef-bg-white ef-border-green-200 focus:ef-ring-1 focus:ef-ring-green-400" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Add your review..." })] })] }) : null;
      };
      var F0 = ({ kra: u, expanded: s, onToggle: r, appraisalMode: o, updateGoalRating: g, updateKRARating: b, employeeCanEdit: h, managerCanEdit: v, showManagerData: m, secondManagerCanEdit: d }) => S.jsxs("div", { className: "ef-border ef-rounded-lg", children: [S.jsxs("div", { onClick: r, className: "ef-flex ef-justify-between ef-items-center ef-p-4 ef-bg-gray-50 ef-cursor-pointer ef-hover:bg-gray-100", children: [S.jsxs("div", { className: "ef-flex-1", children: [S.jsxs("div", { className: "ef-flex ef-items-center ef-gap-3", children: [S.jsx("h3", { className: "ef-text-lg ef-font-semibold ef-text-gray-900", children: u.title }), S.jsxs("span", { className: "ef-px-3 ef-py-1 ef-bg-blue-100 ef-text-blue-700 ef-text-sm ef-rounded-full", children: [u.weightage, "% weightage"] })] }), S.jsx("p", { className: "ef-text-gray-600 ef-text-sm ef-mt-1", children: u.description })] }), s ? S.jsx(k0, {}) : S.jsx(Q0, {})] }), s && S.jsx("div", { className: "ef-p-4", children: u.goals.length > 0 ? u.goals.map((E) => S.jsxs("div", { className: "ef-mb-6 ef-last:mb-0 ef-pb-6 ef-last:pb-0 ef-border-b ef-last:border-b-0", children: [S.jsxs("div", { className: "ef-mb-3", children: [S.jsxs("p", { className: "ef-font-medium ef-text-gray-900", children: [E.description, S.jsxs("span", { className: "ef-inline-flex ef-items-center ef-px-3 ef-py-1 ef-bg-gradient-to-r ef-from-purple-500 ef-to-pink-500 ef-text-white ef-text-xs ef-font-semibold ef-rounded-full ef-shadow-sm ef-mx-3", children: [E.weightage, "% weightage"] })] }), S.jsx("div", { className: "ef-w-full ef-bg-gray-200 ef-rounded-full ef-h-3 ef-overflow-hidden ef-mt-2", children: S.jsx("div", { className: "ef-h-full ef-bg-gradient-to-r ef-from-green-400 ef-to-green-600 ef-transition-all ef-duration-500", style: { width: `${Math.min(E.progress, 100)}%` } }) }), S.jsxs("p", { className: "ef-text-sm ef-text-gray-600 ef-mt-1", children: ["Progress: ", Math.min(E.progress, 100), "%"] })] }), S.jsx(K0, { kra: u, goal: E, appraisalMode: o, updateGoalRating: g, secondManagerCanEdit: d, employeeCanEdit: h, managerCanEdit: v, showManagerData: m })] }, E.id)) : S.jsx(J0, { kra: u, appraisalMode: o, updateKRARating: b, employeeCanEdit: h, secondManagerCanEdit: d, managerCanEdit: v, showManagerData: m }) })] });
      var W0 = ({ kraList: u, expandedKRA: s, toggleKRA: r, appraisalMode: o, updateGoalRating: g, updateKRARating: b, employeeCanEdit: h, managerCanEdit: v, showManagerData: m, secondManagerCanEdit: d }) => S.jsx("div", { className: "ef-space-y-4", children: u.map((E) => S.jsx(F0, { kra: E, expanded: s[E.id], onToggle: () => r(E.id), appraisalMode: o, updateGoalRating: g, updateKRARating: b, employeeCanEdit: h, managerCanEdit: v, showManagerData: m, secondManagerCanEdit: d }, E.id)) });
      var $0 = ({ comp: u, appraisalMode: s, updateCompetency: r, employeeCanEdit: o, managerCanEdit: g, showManagerData: b, secondManagerCanEdit: h }) => {
        const v = () => S.jsxs("div", { className: "ef-absolute ef-top-2 ef-right-2 ef-flex ef-items-center ef-gap-1 ef-bg-gray-200 ef-text-gray-600 ef-text-xs ef-px-2 ef-py-1 ef-rounded-lg ef-shadow-sm", children: [S.jsx(Sr, { size: 12 }), "Locked"] });
        return S.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-overflow-hidden ef-shadow-sm", children: [S.jsxs("div", { className: "ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b ef-border-gray-200 ef-flex ef-items-center ef-justify-between", children: [S.jsx("h3", { className: "ef-text-sm ef-font-semibold ef-text-gray-900", children: u.name }), S.jsxs("span", { className: "ef-px-2 ef-py-1 ef-bg-purple-600 ef-text-white ef-text-xs ef-rounded-full ef-font-medium", children: [u.weightage, "%"] })] }), S.jsxs("div", { className: "ef-divide-y ef-divide-gray-100", children: [s === "self" && S.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [S.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [S.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Self Appraisal" }), !o && S.jsx(v, {})] }), S.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), S.jsx(ha, { rating: u.selfRating, onChange: (m) => o && r(u.id, "selfRating", m), disabled: !o }), S.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), S.jsx("textarea", { value: u.selfComments, onChange: (m) => o && r(u.id, "selfComments", m.target.value), disabled: !o, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${o ? "ef-bg-white ef-border-blue-200 focus:ef-ring-1 focus:ef-ring-blue-400 focus:ef-outline-none" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Share your thoughts..." })] }), s === "manager" && S.jsxs(S.Fragment, { children: [S.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [S.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Employee Self Rating" }), S.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4 ef-mb-2", children: [S.jsxs("div", { children: [S.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), S.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-blue-100 ef-border ef-border-blue-200 ef-px-2 ef-py-1 ef-rounded", children: [S.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-blue-700", children: u.selfRating }), S.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), S.jsxs("div", { className: "ef-flex-1", children: [S.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), S.jsx("div", { className: "ef-bg-white ef-border ef-border-blue-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: u.selfComments || S.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), b && S.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-purple-50", children: [S.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [S.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Manager Review" }), !g && S.jsx(v, {})] }), S.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), S.jsx(ha, { rating: u.managerRating, onChange: (m) => g && r(u.id, "managerRating", m), disabled: !g }), S.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), S.jsx("textarea", { value: u.managerComments, onChange: (m) => g && r(u.id, "managerComments", m.target.value), disabled: !g, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${g ? "ef-bg-white ef-border-purple-200 focus:ef-ring-1 focus:ef-ring-purple-400 focus:ef-outline-none" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Add your review..." })] })] }), s === "second_manager" && S.jsxs(S.Fragment, { children: [S.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [S.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Employee Self Rating" }), S.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4", children: [S.jsxs("div", { children: [S.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), S.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-blue-100 ef-border ef-border-blue-200 ef-px-2 ef-py-1 ef-rounded", children: [S.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-blue-700", children: u.selfRating }), S.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), S.jsxs("div", { className: "ef-flex-1", children: [S.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), S.jsx("div", { className: "ef-bg-white ef-border ef-border-blue-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: u.selfComments || S.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), b && S.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-purple-50", children: [S.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2", children: "Manager Review" }), S.jsxs("div", { className: "ef-flex ef-items-center ef-gap-4", children: [S.jsxs("div", { children: [S.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), S.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-bg-purple-100 ef-border ef-border-purple-200 ef-px-2 ef-py-1 ef-rounded", children: [S.jsx("span", { className: "ef-text-lg ef-font-bold ef-text-purple-700", children: u.managerRating }), S.jsx("span", { className: "ef-text-xs ef-text-gray-600", children: "/10" })] })] }), S.jsxs("div", { className: "ef-flex-1", children: [S.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Comments" }), S.jsx("div", { className: "ef-bg-white ef-border ef-border-purple-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]", children: u.managerComments || S.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments" }) })] })] })] }), S.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-green-50", children: [S.jsxs("div", { className: "ef-flex ef-items-center ef-justify-between ef-mb-2", children: [S.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Second Manager Review" }), !h && S.jsx(v, {})] }), S.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1", children: "Rating" }), S.jsx(ha, { rating: u.secondManagerRating, onChange: (m) => h && r(u.id, "secondManagerRating", m), disabled: !h }), S.jsx("label", { className: "ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1", children: "Comments" }), S.jsx("textarea", { value: u.secondManagerComment, onChange: (m) => h && r(u.id, "secondManagerComment", m.target.value), disabled: !h, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${h ? "ef-bg-white ef-border-green-200 focus:ef-ring-1 focus:ef-ring-green-400 focus:ef-outline-none" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 2, placeholder: "Add your review..." })] })] })] })] });
      };
      var P0 = ({ competencies: u, appraisalMode: s, selfAppraisalSubmitted: r, updateCompetency: o, employeeCanEdit: g, managerCanEdit: b, showManagerData: h, secondManagerCanEdit: v }) => S.jsx("div", { className: "ef-space-y-6", children: u.map((m) => S.jsx($0, { comp: m, appraisalMode: s, selfAppraisalSubmitted: r, updateCompetency: o, employeeCanEdit: g, managerCanEdit: b, showManagerData: h, secondManagerCanEdit: v }, m.id)) });
      var I0 = ({ question: u, appraisalMode: s, updateQuestion: r, index: o, employeeCanEdit: g, managerCanEdit: b, showManagerData: h, secondManagerCanEdit: v }) => {
        const m = () => S.jsx("div", { className: "ef-flex ef-items-center ef-gap-1 ef-text-gray-400 ef-text-xs", children: S.jsx(Sr, { size: 10 }) });
        return S.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-overflow-hidden ef-shadow-sm", children: [S.jsxs("div", { className: "ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b ef-border-gray-200 ef-flex ef-items-center gap-2", children: [S.jsx("span", { className: "ef-flex-shrink-0 ef-w-6 ef-h-6 ef-bg-gray-800 ef-rounded ef-text-white ef-text-xs ef-font-semibold ef-flex ef-items-center ef-justify-center", children: o + 1 }), S.jsx("p", { className: "ef-text-sm ef-font-medium ef-text-gray-900", children: u.question })] }), S.jsxs("div", { className: "ef-divide-y ef-divide-gray-100", children: [s === "self" && S.jsxs("div", { className: "ef-px-3 ef-py-2", children: [S.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-1", children: [S.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Your Answer" }), !g && S.jsx(m, {})] }), S.jsx("textarea", { value: u.selfAnswer, onChange: (d) => g && r(u.id, "selfAnswer", d.target.value), disabled: !g, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${g ? "ef-bg-white ef-border-blue-200 ef-focus:ring-1 ef-focus:ring-blue-400 ef-focus:outline-none" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 3, placeholder: "Enter your answer..." })] }), s === "manager" && S.jsxs(S.Fragment, { children: [S.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [S.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-1", children: "Employee's Answer" }), S.jsx("div", { className: "ef-bg-white ef-p-2 ef-rounded ef-text-xs ef-min-h-[60px] ef-border ef-border-blue-100", children: u.selfAnswer || S.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No answer provided" }) })] }), h && S.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-purple-50", children: [S.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-1", children: [S.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Manager's Comments" }), !b && S.jsx(m, {})] }), S.jsx("textarea", { value: u.managerComments, onChange: (d) => b && r(u.id, "managerComments", d.target.value), disabled: !b, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${b ? "ef-bg-white ef-border-purple-200 ef-focus:ring-1 focus:ring-purple-400 ef-focus:outline-none" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 3, placeholder: "Enter your feedback..." })] })] }), s === "second_manager" && S.jsxs(S.Fragment, { children: [S.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-blue-50", children: [S.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-1", children: "Employee's Answer" }), S.jsx("div", { className: "ef-bg-white ef-p-2 ef-rounded ef-text-xs ef-min-h-[60px] ef-border ef-border-blue-100", children: u.selfAnswer || S.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No answer provided" }) })] }), h && S.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-purple-50", children: [S.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-1", children: "Manager's Comments" }), S.jsx("div", { className: "ef-bg-white ef-p-2 ef-rounded ef-text-xs ef-min-h-[60px] ef-border ef-border-purple-100", children: u.managerComments || S.jsx("span", { className: "ef-text-gray-400 ef-italic", children: "No comments provided" }) })] }), S.jsxs("div", { className: "ef-px-3 ef-py-2 ef-bg-green-50", children: [S.jsxs("div", { className: "ef-flex ef-items-center ef-gap-2 ef-mb-1", children: [S.jsx("span", { className: "ef-text-xs ef-font-semibold ef-text-gray-600", children: "Second Manager's Comments" }), !v && S.jsx(m, {})] }), S.jsx("textarea", { value: u.secondManagerComment, onChange: (d) => v && r(u.id, "secondManagerComment", d.target.value), disabled: !v, className: `ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${v ? "ef-bg-white ef-border-green-200 ef-focus:ring-1 ef-focus:ring-green-400 ef-focus:outline-none" : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"}`, rows: 3, placeholder: "Enter your feedback..." })] })] })] })] });
      };
      var ey = ({ questions: u, appraisalMode: s, selfAppraisalSubmitted: r, updateQuestion: o, employeeCanEdit: g, managerCanEdit: b, showManagerData: h, secondManagerCanEdit: v }) => S.jsx("div", { className: "ef-space-y-6", children: u.map((m, d) => S.jsx(I0, { question: m, index: d, appraisalMode: s, selfAppraisalSubmitted: r, updateQuestion: o, employeeCanEdit: g, managerCanEdit: b, showManagerData: h, secondManagerCanEdit: v }, m.id)) });
      function ty(u, s, r, o = false) {
        const g = u.kra.reduce((w, U) => w + Number(U.weightage || 0), 0) || 1, b = u.competencies.reduce((w, U) => w + Number(U.weightage || 0), 0) || 1, h = (w, U, Z) => o ? (w + U + Z) / 3 : (w + U) / 2, v = u.kra.map((w) => {
          var ie;
          const U = (w.weightage || 0) / g;
          let Z = 0;
          if (((ie = w.goals) == null ? void 0 : ie.length) > 0) {
            const me = w.goals.reduce((Se, se) => Se + Number(se.weightage || 0), 0) || 1;
            Z = w.goals.reduce((Se, se) => {
              const be = Number(se.selfRating || 0), _e = (se.weightage || 0) / me;
              return Se + _e * be;
            }, 0);
          } else
            Z = Number(w.selfRating || 0);
          return U * Z;
        }).reduce((w, U) => w + U, 0), m = u.competencies.reduce((w, U) => {
          const Z = (U.weightage || 0) / b;
          return w + Z * Number(U.selfRating || 0);
        }, 0), d = v * (s / 100) + m * (r / 100), E = u.kra.map((w) => {
          var ie;
          const U = (w.weightage || 0) / g;
          let Z = 0;
          if (((ie = w.goals) == null ? void 0 : ie.length) > 0) {
            const me = w.goals.reduce((Se, se) => Se + Number(se.weightage || 0), 0) || 1;
            Z = w.goals.reduce((Se, se) => {
              const be = h(Number(se.selfRating || 0), Number(se.managerRating || 0), Number(se.secondManagerRating || 0)), _e = (se.weightage || 0) / me;
              return Se + _e * be;
            }, 0);
          } else
            Z = h(Number(w.selfRating || 0), Number(w.managerRating || 0), Number(w.secondManagerRating || 0));
          return U * Z;
        }).reduce((w, U) => w + U, 0), j = u.competencies.reduce((w, U) => {
          const Z = (U.weightage || 0) / b, ie = h(Number(U.selfRating || 0), Number(U.managerRating || 0), Number(U.secondManagerRating || 0));
          return w + Z * ie;
        }, 0), Q = E * (s / 100) + j * (r / 100);
        return console.log({ kraBlockScore: Number(E.toFixed(2)), competencyScore: Number(j.toFixed(2)), finalScore: Number(Q.toFixed(2)), employeeSelfScore: Number(d.toFixed(2)) }), { kraBlockScore: Number(E.toFixed(2)), competencyScore: Number(j.toFixed(2)), finalScore: Number(Q.toFixed(2)), employeeSelfScore: Number(d.toFixed(2)) };
      }
      var wp = () => {
        const [u, s] = Pe.useState("kra"), [r, o] = Pe.useState("self"), [g, b] = Pe.useState({}), [h, v] = Pe.useState({ employee: { name: "John Doe", designation: "Senior Developer", department: "Engineering", period: "Jan 2025 - Dec 2025" }, selfAppraisalSubmitted: true, kra: [{ id: 1, title: "Project Delivery", description: "Deliver assigned projects on time", weightage: 30, goals: [{ id: 1, description: "Complete 3 major projects", progress: 2, selfRating: 8, selfComments: "Completed 3 projects successfully", managerRating: 9, managerComments: "Excellent delivery", secondManagerRating: 3.4, secondManagerComment: "Excellent Work" }, { id: 2, description: "Maintain 95% on-time delivery", progress: 2, selfRating: 7, selfComments: "Achieved 90%", managerRating: 7, managerComments: "Slight delay", secondManagerRating: 3.4, secondManagerComment: "Excellent Work" }] }], competencies: [{ id: 1, name: "Technical Skills", description: "Proficiency in technologies", weightage: 25, selfRating: 8, selfComments: "Strong in React/Node", managerRating: 8, managerComments: "Very competent", secondManagerRating: 3.4, secondManagerComment: "Excellent Work" }], questions: [{ id: 1, question: "What are your key achievements?", selfAnswer: "Led migration project", managerComments: "Excellent ownership", secondManagerComment: "Excellent Work" }] });
        function m(K) {
          var _, B;
          K.workflow_state == "Self Appraisal" ? o("self") : K.workflow_state == "Manager Appraisal" ? o("manager") : o("second_manager");
          const ee = K.kra || [], de = K.kra_vs_goal || [];
          return { employee: { name: K.employee_name, designation: K.designation, department: K.department, period: `${K.from_date} - ${K.to_date}` }, selfAppraisalSubmitted: K.self_appraisal_submitted || true, kra: ee.map((Y, W) => {
            const he = de.filter((re) => re.kra === Y.kra).map((re, je) => ({ id: je + 1, description: re.goal_name, progress: re.progress || "", weightage: re.weightage, selfRating: re.employee_rating_number, selfComments: re.employee_description, managerRating: re.manager_rating_number, managerComments: re.management_description, secondManagerRating: re.second_manager_rating, secondManagerComment: re.second_manager_description }));
            return { id: W + 1, title: Y.kra, description: Y.description || "", weightage: Y.weightage, selfRating: Y.employee_rating_number, selfComments: Y.employee_description, managerRating: Y.manager_rating_number, managerComments: Y.management_description, secondManagerRating: Y.second_manager_rating, secondManagerComment: Y.second_manager_description, goals: he };
          }) || [], competencies: ((_ = K.competency) == null ? void 0 : _.map((Y, W) => ({ id: W + 1, name: Y.competency, description: Y.description || "", weightage: Y.weightage, selfRating: Y.employee_rating_number, selfComments: Y.employee_description, managerRating: Y.manager_rating, managerComments: Y.manager_description, secondManagerRating: Y.second_manager_rating, secondManagerComment: Y.second_manager_description }))) || [], questions: ((B = K.answer) == null ? void 0 : B.map((Y, W) => ({ id: W + 1, question: Y.question, selfAnswer: Y.employee_ans_in_discriptive, managerComments: Y.manager_comment, secondManagerComment: Y.second_manager_description }))) || [] };
        }
        const d = () => {
          if (!X())
            return;
          const K = window.cur_frm;
          if (!(K != null && K.doc))
            return;
          const ee = K.doc, de = ty(h, ee.kra_percentage, ee.competency_percentage, !!ee.reports_to_second_user);
          ee.final_score = de.finalScore, ee.employee_score = de.employeeSelfScore, ee.kra.forEach((_, B) => {
            const Y = h.kra.find((W) => W.id === B + 1);
            Y && (De && (_.employee_rating_number = Y.selfRating, _.employee_description = Y.selfComments), ke && (_.manager_rating_number = Y.managerRating, _.management_description = Y.managerComments), Ue && (_.second_manager_rating = Y.secondManagerRating, _.second_manager_description = Y.secondManagerComment), _.weightage = Y.weightage);
          }), ee.kra_vs_goal.forEach((_) => {
            const B = h.kra.find((W) => W.title === _.kra);
            if (!B)
              return;
            const Y = B.goals.find((W) => W.description === _.goal_name);
            Y && (De && (_.employee_rating_number = Y.selfRating, _.employee_description = Y.selfComments), ke && (_.manager_rating_number = Y.managerRating, _.management_description = Y.managerComments), Ue && (_.second_manager_rating = Y.secondManagerRating, _.second_manager_description = Y.secondManagerComment), _.progress = Y.progress, _.weightage = Y.weightage);
          }), ee.competency.forEach((_, B) => {
            const Y = h.competencies.find((W) => W.id === B + 1);
            Y && (De && (_.employee_rating_number = Y.selfRating, _.employee_description = Y.selfComments), ke && (_.manager_rating = Y.managerRating, _.manager_description = Y.managerComments), Ue && (_.second_manager_rating = Y.secondManagerRating, _.second_manager_description = Y.secondManagerComment), _.weightage = Y.weightage);
          }), ee.answer.forEach((_, B) => {
            const Y = h.questions.find((W) => W.id === B + 1);
            Y && (De && (_.employee_ans_in_discriptive = Y.selfAnswer), ke && (_.manager_comment = Y.managerComments), Ue && (_.second_manager_description = Y.secondManagerComment));
          }), ee.__unsaved = 1, K.dirty(), K.save().catch((_) => console.error(_));
        }, E = (K) => {
          b((ee) => Lt(Ve({}, ee), { [K]: !ee[K] }));
        }, j = (K, ee, de, _) => {
          v((B) => Lt(Ve({}, B), { kra: B.kra.map((Y) => Y.id === K ? Lt(Ve({}, Y), { goals: Y.goals.map((W) => W.id === ee ? Lt(Ve({}, W), { [de]: _ }) : W) }) : Y) }));
        }, Q = (K, ee, de) => {
          v((_) => Lt(Ve({}, _), { kra: _.kra.map((B) => B.id === K ? Lt(Ve({}, B), { [ee]: de }) : B) }));
        }, w = (K, ee, de) => {
          v((_) => Lt(Ve({}, _), { competencies: _.competencies.map((B) => B.id === K ? Lt(Ve({}, B), { [ee]: de }) : B) }));
        }, U = (K, ee, de) => {
          v((_) => Lt(Ve({}, _), { questions: _.questions.map((B) => B.id === K ? Lt(Ve({}, B), { [ee]: de }) : B) }));
        }, Z = window.cur_frm;
        if (!(Z != null && Z.doc))
          return "Loading...";
        Pe.useEffect(() => {
          v(m(Z.doc));
        }, [Z == null ? void 0 : Z.doc]);
        const ie = frappe.session.user, me = Z.doc.employee_user_id, Se = Z.doc.reports_to_user_id, se = Z.doc.reports_to_second_user, be = Z.doc.workflow_state, _e = ie === me, Me = ie === Se, fe = ie === se, mt = (frappe.user_roles || []).includes("HR Manager") || ie === "Administrator", De = _e && be === "Self Appraisal" && !mt, ke = Me && be === "Manager Appraisal", Ue = fe && be === "Second Manager Review", vt = Me || fe || mt;
        console.log("@@@@####@@@@####", fe, be === "Second Manager Review");
        const X = () => {
          var de;
          const K = (de = window == null ? void 0 : window.cur_frm) == null ? void 0 : de.doc, ee = [];
          return De && (K.kra_rating_mandatory && h.kra.forEach((_) => {
            !_.goals.length && !_.selfRating && ee.push(`Self Rating missing in KRA: ${_.title}`), _.goals.forEach((B) => {
              B.selfRating || ee.push(`Self Rating missing in Goal: ${B.description}`);
            });
          }), K.kra_comment_mandatory && h.kra.forEach((_) => {
            !_.goals.length && !_.selfComments && ee.push(`Self Comment missing in KRA: ${_.title}`), _.goals.forEach((B) => {
              B.selfComments || ee.push(`Self Comment missing in Goal: ${B.description}`);
            });
          }), K.competency_rating_mandatory && h.competencies.forEach((_) => {
            _.selfRating || ee.push(`Self Rating missing in Competency: ${_.name}`);
          }), K.competency_comment_mandatory && h.competencies.forEach((_) => {
            _.selfComments || ee.push(`Self Comment missing in Competency: ${_.name}`);
          }), K.question_answer_mandatory && h.questions.forEach((_) => {
            _.selfAnswer || ee.push(`Answer missing for Question: ${_.question}`);
          })), ke && (K.manager_kra_rating_mandatory && h.kra.forEach((_) => {
            !_.goals.length && !_.managerRating && ee.push(`Manager Rating missing in KRA: ${_.title}`), _.goals.forEach((B) => {
              B.managerRating || ee.push(`Manager Rating missing in Goal: ${B.description}`);
            });
          }), K.manager_kra_comment_mandatory && h.kra.forEach((_) => {
            !_.goals.length && !_.managerComments && ee.push(`Manager Comment missing in KRA: ${_.title}`), _.goals.forEach((B) => {
              B.managerComments || ee.push(`Manager Comment missing in Goal: ${B.description}`);
            });
          }), K.manager_competency_rating_mandatory && h.competencies.forEach((_) => {
            _.managerRating || ee.push(`Manager Rating missing in Competency: ${_.name}`);
          }), K.manager_competency_comment_mandatory && h.competencies.forEach((_) => {
            _.managerComments || ee.push(`Manager Comment missing in Competency: ${_.name}`);
          }), K.manager_question_report_mandatory && h.questions.forEach((_) => {
            _.managerComments || ee.push(`Manager Comment missing for Question: ${_.question}`);
          })), ee.length > 0 ? (frappe.msgprint({ title: "Mandatory Fields Missing", indicator: "red", message: `<ul>${ee.map((_) => `<li>${_}</li>`).join("")}</ul>` }), false) : true;
        }, I = De || ke || Ue;
        return S.jsx("div", { className: "ef-min-h-screen ef-bg-gray-50 ef-p-6", children: S.jsx("div", { className: "ef-max-w-7xl ef-mx-auto", children: S.jsxs("div", { className: "ef-bg-white ef-rounded-lg ef-shadow-sm", children: [S.jsx("div", { className: "ef-border-b", children: S.jsxs("div", { className: "ef-flex", children: [S.jsx("button", { onClick: () => s("kra"), className: `ef-px-6 ef-py-4 ef-font-semibold ${u === "kra" ? "ef-border-b-2 ef-border-blue-600 ef-text-blue-600" : "ef-text-gray-600"}`, children: "KRA vs Goals" }), S.jsx("button", { onClick: () => s("competency"), className: `ef-px-6 ef-py-4 ef-font-semibold ${u === "competency" ? "ef-border-b-2 ef-border-blue-600 ef-text-blue-600" : "ef-text-gray-600"}`, children: "Competencies" }), S.jsx("button", { onClick: () => s("questions"), className: `ef-px-6 ef-py-4 ef-font-semibold ${u === "questions" ? "ef-border-b-2 ef-border-blue-600 ef-text-blue-600" : "ef-text-gray-600"}`, children: "Questions" })] }) }), S.jsxs("div", { className: "ef-p-6", children: [u === "kra" && S.jsx(W0, { kraList: h.kra, expandedKRA: g, toggleKRA: E, appraisalMode: r, updateGoalRating: j, updateKRARating: Q, secondManagerCanEdit: Ue, employeeCanEdit: De, managerCanEdit: ke, showManagerData: vt }), u === "competency" && S.jsx(P0, { competencies: h.competencies, appraisalMode: r, selfAppraisalSubmitted: h.selfAppraisalSubmitted, updateCompetency: w, secondManagerCanEdit: Ue, employeeCanEdit: De, managerCanEdit: ke, showManagerData: vt }), u === "questions" && S.jsx(ey, { questions: h.questions, appraisalMode: r, selfAppraisalSubmitted: h.selfAppraisalSubmitted, updateQuestion: U, secondManagerCanEdit: Ue, employeeCanEdit: De, managerCanEdit: ke, showManagerData: vt })] }), I && S.jsx("div", { className: "ef-flex ef-justify-end ef-px-6 ef-pb-6", children: S.jsx("button", { onClick: d, className: "ef-bg-blue-600 ef-text-white ef-px-6 ef-py-2 ef-rounded-lg ef-font-semibold hover:ef-bg-blue-700 ef-transition", children: "Save Appraisal" }) })] }) }) });
      };
      wp.component = "appraisal-rating";
      var km = Object.freeze(Object.defineProperty({ __proto__: null, AppraisalRating: wp, DemoComponent: sf }, Symbol.toStringTag, { value: "Module" }));
      var ny = Object.defineProperty;
      var ay = (u, s, r) => s in u ? ny(u, s, { enumerable: true, configurable: true, writable: true, value: r }) : u[s] = r;
      var or = (u, s, r) => ay(u, typeof s != "symbol" ? s + "" : s, r);
      var ly = { stringify: (u) => u ? "true" : "false", parse: (u) => /^[ty1-9]/i.test(u) };
      var iy = { stringify: (u) => u.name, parse: (u, s, r) => {
        const o = (() => {
          if (typeof window < "u" && u in window)
            return window[u];
          if (typeof global < "u" && u in global)
            return global[u];
        })();
        return typeof o == "function" ? o.bind(r) : void 0;
      } };
      var sy = { stringify: (u) => JSON.stringify(u), parse: (u) => JSON.parse(u) };
      function uy(u) {
        return u.replace(/([a-z0-9])([A-Z])/g, (s, r, o) => `${r}-${o.toLowerCase()}`);
      }
      function Np(u) {
        return u.replace(/[-:]([a-z])/g, (s, r) => `${r.toUpperCase()}`);
      }
      var ry = { stringify: (u) => u.name, parse: (u, s, r) => {
        const o = (() => {
          const g = Np(s);
          if (typeof r < "u" && g in r.container)
            return r.container[g];
        })();
        return typeof o == "function" ? o.bind(r) : void 0;
      } };
      var oy = { stringify: (u) => `${u}`, parse: (u) => parseFloat(u) };
      var cy = { stringify: (u) => u, parse: (u) => u };
      var Mc = { string: cy, number: oy, boolean: ly, function: iy, method: ry, json: sy };
      var ws = Symbol.for("r2wc.render");
      var cr = Symbol.for("r2wc.connected");
      var _l = Symbol.for("r2wc.context");
      var Wt = Symbol.for("r2wc.props");
      function fy(u, s, r) {
        var o, g, b;
        s.props || (s.props = u.propTypes ? Object.keys(u.propTypes) : []), s.events || (s.events = []);
        const h = Array.isArray(s.props) ? s.props.slice() : Object.keys(s.props), v = Array.isArray(s.events) ? s.events.slice() : Object.keys(s.events), m = {}, d = {}, E = {}, j = {};
        for (const w of h) {
          m[w] = Array.isArray(s.props) ? "string" : s.props[w];
          const U = uy(w);
          E[w] = U, j[U] = w;
        }
        for (const w of v)
          d[w] = Array.isArray(s.events) ? {} : s.events[w];
        class Q extends HTMLElement {
          constructor() {
            super(), or(this, b, true), or(this, g), or(this, o, {}), or(this, "container"), s.shadow ? this.container = this.attachShadow({ mode: s.shadow }) : this.container = this, this[Wt].container = this.container;
            for (const U of h) {
              const Z = E[U], ie = this.getAttribute(Z), me = m[U], Se = me ? Mc[me] : null;
              if (me === "method") {
                const se = Np(Z);
                Object.defineProperty(this[Wt].container, se, { enumerable: true, configurable: true, get() {
                  return this[Wt][se];
                }, set(be) {
                  this[Wt][se] = be, this[ws]();
                } }), this[Wt][U] = Se.parse(ie, Z, this);
              }
              Se != null && Se.parse && ie && (this[Wt][U] = Se.parse(ie, Z, this));
            }
            for (const U of v)
              this[Wt][U] = (Z) => {
                const ie = U.replace(/^on/, "").toLowerCase();
                this.dispatchEvent(new CustomEvent(ie, Ve({ detail: Z }, d[U])));
              };
          }
          static get observedAttributes() {
            return Object.keys(j);
          }
          connectedCallback() {
            this[cr] = true, this[ws]();
          }
          disconnectedCallback() {
            this[cr] = false, this[_l] && r.unmount(this[_l]), delete this[_l];
          }
          attributeChangedCallback(U, Z, ie) {
            const me = j[U], Se = m[me], se = Se ? Mc[Se] : null;
            me in m && se != null && se.parse && ie && (this[Wt][me] = se.parse(ie, U, this), this[ws]());
          }
          [(b = cr, g = _l, o = Wt, ws)]() {
            this[cr] && (this[_l] ? r.update(this[_l], this[Wt]) : this[_l] = r.mount(this.container, u, this[Wt]));
          }
        }
        for (const w of h) {
          const U = E[w], Z = m[w];
          Object.defineProperty(Q.prototype, w, { enumerable: true, configurable: true, get() {
            return this[Wt][w];
          }, set(ie) {
            this[Wt][w] = ie;
            const me = Z ? Mc[Z] : null;
            if (me != null && me.stringify) {
              const Se = me.stringify(ie, U, this);
              this.getAttribute(U) !== Se && this.setAttribute(U, Se);
            } else
              this[ws]();
          } });
        }
        return Q;
      }
      function dy(u, s, r, o = {}) {
        function g(v, m, d) {
          const E = s.createElement(m, d);
          if ("createRoot" in r) {
            const j = r.createRoot(v);
            return j.render(E), { container: v, root: j, ReactComponent: m };
          }
          if ("render" in r)
            return r.render(E, v), { container: v, ReactComponent: m };
          throw new Error("Invalid ReactDOM instance provided.");
        }
        function b({ container: v, root: m, ReactComponent: d }, E) {
          const j = s.createElement(d, E);
          if (m) {
            m.render(j);
            return;
          }
          if ("render" in r) {
            r.render(j, v);
            return;
          }
        }
        function h({ container: v, root: m }) {
          if (m) {
            m.unmount();
            return;
          }
          if ("unmountComponentAtNode" in r) {
            r.unmountComponentAtNode(v);
            return;
          }
        }
        return fy(u, o, { mount: g, unmount: h, update: b });
      }
      var Dc = { exports: {} };
      var Ns = {};
      var Bc = { exports: {} };
      var qc = {};
      var Zm;
      function hy() {
        return Zm || (Zm = 1, function(u) {
          function s(X, I) {
            var K = X.length;
            X.push(I);
            e:
              for (; 0 < K; ) {
                var ee = K - 1 >>> 1, de = X[ee];
                if (0 < g(de, I))
                  X[ee] = I, X[K] = de, K = ee;
                else
                  break e;
              }
          }
          function r(X) {
            return X.length === 0 ? null : X[0];
          }
          function o(X) {
            if (X.length === 0)
              return null;
            var I = X[0], K = X.pop();
            if (K !== I) {
              X[0] = K;
              e:
                for (var ee = 0, de = X.length, _ = de >>> 1; ee < _; ) {
                  var B = 2 * (ee + 1) - 1, Y = X[B], W = B + 1, he = X[W];
                  if (0 > g(Y, K))
                    W < de && 0 > g(he, Y) ? (X[ee] = he, X[W] = K, ee = W) : (X[ee] = Y, X[B] = K, ee = B);
                  else if (W < de && 0 > g(he, K))
                    X[ee] = he, X[W] = K, ee = W;
                  else
                    break e;
                }
            }
            return I;
          }
          function g(X, I) {
            var K = X.sortIndex - I.sortIndex;
            return K !== 0 ? K : X.id - I.id;
          }
          if (u.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
            var b = performance;
            u.unstable_now = function() {
              return b.now();
            };
          } else {
            var h = Date, v = h.now();
            u.unstable_now = function() {
              return h.now() - v;
            };
          }
          var m = [], d = [], E = 1, j = null, Q = 3, w = false, U = false, Z = false, ie = false, me = typeof setTimeout == "function" ? setTimeout : null, Se = typeof clearTimeout == "function" ? clearTimeout : null, se = typeof setImmediate != "undefined" ? setImmediate : null;
          function be(X) {
            for (var I = r(d); I !== null; ) {
              if (I.callback === null)
                o(d);
              else if (I.startTime <= X)
                o(d), I.sortIndex = I.expirationTime, s(m, I);
              else
                break;
              I = r(d);
            }
          }
          function _e(X) {
            if (Z = false, be(X), !U)
              if (r(m) !== null)
                U = true, Me || (Me = true, De());
              else {
                var I = r(d);
                I !== null && vt(_e, I.startTime - X);
              }
          }
          var Me = false, fe = -1, lt = 5, At = -1;
          function $t() {
            return ie ? true : !(u.unstable_now() - At < lt);
          }
          function mt() {
            if (ie = false, Me) {
              var X = u.unstable_now();
              At = X;
              var I = true;
              try {
                e: {
                  U = false, Z && (Z = false, Se(fe), fe = -1), w = true;
                  var K = Q;
                  try {
                    t: {
                      for (be(X), j = r(m); j !== null && !(j.expirationTime > X && $t()); ) {
                        var ee = j.callback;
                        if (typeof ee == "function") {
                          j.callback = null, Q = j.priorityLevel;
                          var de = ee(j.expirationTime <= X);
                          if (X = u.unstable_now(), typeof de == "function") {
                            j.callback = de, be(X), I = true;
                            break t;
                          }
                          j === r(m) && o(m), be(X);
                        } else
                          o(m);
                        j = r(m);
                      }
                      if (j !== null)
                        I = true;
                      else {
                        var _ = r(d);
                        _ !== null && vt(_e, _.startTime - X), I = false;
                      }
                    }
                    break e;
                  } finally {
                    j = null, Q = K, w = false;
                  }
                  I = void 0;
                }
              } finally {
                I ? De() : Me = false;
              }
            }
          }
          var De;
          if (typeof se == "function")
            De = function() {
              se(mt);
            };
          else if (typeof MessageChannel != "undefined") {
            var ke = new MessageChannel(), Ue = ke.port2;
            ke.port1.onmessage = mt, De = function() {
              Ue.postMessage(null);
            };
          } else
            De = function() {
              me(mt, 0);
            };
          function vt(X, I) {
            fe = me(function() {
              X(u.unstable_now());
            }, I);
          }
          u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(X) {
            X.callback = null;
          }, u.unstable_forceFrameRate = function(X) {
            0 > X || 125 < X ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : lt = 0 < X ? Math.floor(1e3 / X) : 5;
          }, u.unstable_getCurrentPriorityLevel = function() {
            return Q;
          }, u.unstable_next = function(X) {
            switch (Q) {
              case 1:
              case 2:
              case 3:
                var I = 3;
                break;
              default:
                I = Q;
            }
            var K = Q;
            Q = I;
            try {
              return X();
            } finally {
              Q = K;
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
            var K = Q;
            Q = X;
            try {
              return I();
            } finally {
              Q = K;
            }
          }, u.unstable_scheduleCallback = function(X, I, K) {
            var ee = u.unstable_now();
            switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? ee + K : ee) : K = ee, X) {
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
            return de = K + de, X = { id: E++, callback: I, priorityLevel: X, startTime: K, expirationTime: de, sortIndex: -1 }, K > ee ? (X.sortIndex = K, s(d, X), r(m) === null && X === r(d) && (Z ? (Se(fe), fe = -1) : Z = true, vt(_e, K - ee))) : (X.sortIndex = de, s(m, X), U || w || (U = true, Me || (Me = true, De()))), X;
          }, u.unstable_shouldYield = $t, u.unstable_wrapCallback = function(X) {
            var I = Q;
            return function() {
              var K = Q;
              Q = I;
              try {
                return X.apply(this, arguments);
              } finally {
                Q = K;
              }
            };
          };
        }(qc)), qc;
      }
      var Km;
      function my() {
        return Km || (Km = 1, Bc.exports = hy()), Bc.exports;
      }
      var Hc = { exports: {} };
      var Nt = {};
      var Jm;
      function py() {
        if (Jm)
          return Nt;
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
        var o = { d: { f: r, r: function() {
          throw Error(s(522));
        }, D: r, C: r, L: r, m: r, X: r, S: r, M: r }, p: 0, findDOMNode: null }, g = Symbol.for("react.portal");
        function b(m, d, E) {
          var j = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
          return { $$typeof: g, key: j == null ? null : "" + j, children: m, containerInfo: d, implementation: E };
        }
        var h = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function v(m, d) {
          if (m === "font")
            return "";
          if (typeof d == "string")
            return d === "use-credentials" ? d : "";
        }
        return Nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, Nt.createPortal = function(m, d) {
          var E = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
          if (!d || d.nodeType !== 1 && d.nodeType !== 9 && d.nodeType !== 11)
            throw Error(s(299));
          return b(m, d, null, E);
        }, Nt.flushSync = function(m) {
          var d = h.T, E = o.p;
          try {
            if (h.T = null, o.p = 2, m)
              return m();
          } finally {
            h.T = d, o.p = E, o.d.f();
          }
        }, Nt.preconnect = function(m, d) {
          typeof m == "string" && (d ? (d = d.crossOrigin, d = typeof d == "string" ? d === "use-credentials" ? d : "" : void 0) : d = null, o.d.C(m, d));
        }, Nt.prefetchDNS = function(m) {
          typeof m == "string" && o.d.D(m);
        }, Nt.preinit = function(m, d) {
          if (typeof m == "string" && d && typeof d.as == "string") {
            var E = d.as, j = v(E, d.crossOrigin), Q = typeof d.integrity == "string" ? d.integrity : void 0, w = typeof d.fetchPriority == "string" ? d.fetchPriority : void 0;
            E === "style" ? o.d.S(m, typeof d.precedence == "string" ? d.precedence : void 0, { crossOrigin: j, integrity: Q, fetchPriority: w }) : E === "script" && o.d.X(m, { crossOrigin: j, integrity: Q, fetchPriority: w, nonce: typeof d.nonce == "string" ? d.nonce : void 0 });
          }
        }, Nt.preinitModule = function(m, d) {
          if (typeof m == "string")
            if (typeof d == "object" && d !== null) {
              if (d.as == null || d.as === "script") {
                var E = v(d.as, d.crossOrigin);
                o.d.M(m, { crossOrigin: E, integrity: typeof d.integrity == "string" ? d.integrity : void 0, nonce: typeof d.nonce == "string" ? d.nonce : void 0 });
              }
            } else
              d == null && o.d.M(m);
        }, Nt.preload = function(m, d) {
          if (typeof m == "string" && typeof d == "object" && d !== null && typeof d.as == "string") {
            var E = d.as, j = v(E, d.crossOrigin);
            o.d.L(m, E, { crossOrigin: j, integrity: typeof d.integrity == "string" ? d.integrity : void 0, nonce: typeof d.nonce == "string" ? d.nonce : void 0, type: typeof d.type == "string" ? d.type : void 0, fetchPriority: typeof d.fetchPriority == "string" ? d.fetchPriority : void 0, referrerPolicy: typeof d.referrerPolicy == "string" ? d.referrerPolicy : void 0, imageSrcSet: typeof d.imageSrcSet == "string" ? d.imageSrcSet : void 0, imageSizes: typeof d.imageSizes == "string" ? d.imageSizes : void 0, media: typeof d.media == "string" ? d.media : void 0 });
          }
        }, Nt.preloadModule = function(m, d) {
          if (typeof m == "string")
            if (d) {
              var E = v(d.as, d.crossOrigin);
              o.d.m(m, { as: typeof d.as == "string" && d.as !== "script" ? d.as : void 0, crossOrigin: E, integrity: typeof d.integrity == "string" ? d.integrity : void 0 });
            } else
              o.d.m(m);
        }, Nt.requestFormReset = function(m) {
          o.d.r(m);
        }, Nt.unstable_batchedUpdates = function(m, d) {
          return m(d);
        }, Nt.useFormState = function(m, d, E) {
          return h.H.useFormState(m, d, E);
        }, Nt.useFormStatus = function() {
          return h.H.useHostTransitionStatus();
        }, Nt.version = "19.2.0", Nt;
      }
      var Fm;
      function gy() {
        if (Fm)
          return Hc.exports;
        Fm = 1;
        function u() {
          if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
            } catch (s) {
              console.error(s);
            }
        }
        return u(), Hc.exports = py(), Hc.exports;
      }
      var Wm;
      function yy() {
        if (Wm)
          return Ns;
        Wm = 1;
        var u = my(), s = lf(), r = gy();
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
        function h(e) {
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
        function d(e) {
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
        var j = Object.assign, Q = Symbol.for("react.element"), w = Symbol.for("react.transitional.element"), U = Symbol.for("react.portal"), Z = Symbol.for("react.fragment"), ie = Symbol.for("react.strict_mode"), me = Symbol.for("react.profiler"), Se = Symbol.for("react.consumer"), se = Symbol.for("react.context"), be = Symbol.for("react.forward_ref"), _e = Symbol.for("react.suspense"), Me = Symbol.for("react.suspense_list"), fe = Symbol.for("react.memo"), lt = Symbol.for("react.lazy"), At = Symbol.for("react.activity"), $t = Symbol.for("react.memo_cache_sentinel"), mt = Symbol.iterator;
        function De(e) {
          return e === null || typeof e != "object" ? null : (e = mt && e[mt] || e["@@iterator"], typeof e == "function" ? e : null);
        }
        var ke = Symbol.for("react.client.reference");
        function Ue(e) {
          if (e == null)
            return null;
          if (typeof e == "function")
            return e.$$typeof === ke ? null : e.displayName || e.name || null;
          if (typeof e == "string")
            return e;
          switch (e) {
            case Z:
              return "Fragment";
            case me:
              return "Profiler";
            case ie:
              return "StrictMode";
            case _e:
              return "Suspense";
            case Me:
              return "SuspenseList";
            case At:
              return "Activity";
          }
          if (typeof e == "object")
            switch (e.$$typeof) {
              case U:
                return "Portal";
              case se:
                return e.displayName || "Context";
              case Se:
                return (e._context.displayName || "Context") + ".Consumer";
              case be:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
              case fe:
                return t = e.displayName || null, t !== null ? t : Ue(e.type) || "Memo";
              case lt:
                t = e._payload, e = e._init;
                try {
                  return Ue(e(t));
                } catch (n) {
                }
            }
          return null;
        }
        var vt = Array.isArray, X = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = { pending: false, data: null, method: null, action: null }, ee = [], de = -1;
        function _(e) {
          return { current: e };
        }
        function B(e) {
          0 > de || (e.current = ee[de], ee[de] = null, de--);
        }
        function Y(e, t) {
          de++, ee[de] = e.current, e.current = t;
        }
        var W = _(null), he = _(null), re = _(null), je = _(null);
        function xt(e, t) {
          switch (Y(re, t), Y(he, e), Y(W, null), t.nodeType) {
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
          B(W), Y(W, e);
        }
        function We() {
          B(W), B(he), B(re);
        }
        function Za(e) {
          e.memoizedState !== null && Y(je, e);
          var t = W.current, n = sm(t, e.type);
          t !== n && (Y(he, e), Y(W, n));
        }
        function Al(e) {
          he.current === e && (B(W), B(he)), je.current === e && (B(je), Ss._currentValue = K);
        }
        var wl, zs;
        function wn(e) {
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
            var i = a.DetermineComponentFrameRoot(), c = i[0], y = i[1];
            if (c && y) {
              var A = c.split(`
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
          return (n = e ? e.displayName || e.name : "") ? wn(n) : "";
        }
        function Er(e, t) {
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
              return Ei(e.type, false);
            case 11:
              return Ei(e.type.render, false);
            case 1:
              return Ei(e.type, true);
            case 31:
              return wn("Activity");
            default:
              return "";
          }
        }
        function Us(e) {
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
        var Ai = Object.prototype.hasOwnProperty, wi = u.unstable_scheduleCallback, Ni = u.unstable_cancelCallback, Ar = u.unstable_shouldYield, Ms = u.unstable_requestPaint, Ot = u.unstable_now, H = u.unstable_getCurrentPriorityLevel, pe = u.unstable_ImmediatePriority, Oi = u.unstable_UserBlockingPriority, Ka = u.unstable_NormalPriority, wr = u.unstable_LowPriority, Nl = u.unstable_IdlePriority, Ds = u.log, Bs = u.unstable_setDisableYieldValue, Ja = null, jt = null;
        function Xt(e) {
          if (typeof Ds == "function" && Bs(e), jt && typeof jt.setStrictMode == "function")
            try {
              jt.setStrictMode(Ja, e);
            } catch (t) {
            }
        }
        var wt = Math.clz32 ? Math.clz32 : Nr, ji = Math.log, qs = Math.LN2;
        function Nr(e) {
          return e >>>= 0, e === 0 ? 32 : 31 - (ji(e) / qs | 0) | 0;
        }
        var Fa = 256, Ol = 262144, Wa = 4194304;
        function Nn(e) {
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
        function jl(e, t, n) {
          var a = e.pendingLanes;
          if (a === 0)
            return 0;
          var l = 0, i = e.suspendedLanes, c = e.pingedLanes;
          e = e.warmLanes;
          var y = a & 134217727;
          return y !== 0 ? (a = y & ~i, a !== 0 ? l = Nn(a) : (c &= y, c !== 0 ? l = Nn(c) : n || (n = y & ~e, n !== 0 && (l = Nn(n))))) : (y = a & ~i, y !== 0 ? l = Nn(y) : c !== 0 ? l = Nn(c) : n || (n = a & ~e, n !== 0 && (l = Nn(n)))), l === 0 ? 0 : t !== 0 && t !== l && (t & i) === 0 && (i = l & -l, n = t & -t, i >= n || i === 32 && (n & 4194048) !== 0) ? t : l;
        }
        function $a(e, t) {
          return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
        }
        function Or(e, t) {
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
          var e = Wa;
          return Wa <<= 1, (Wa & 62914560) === 0 && (Wa = 4194304), e;
        }
        function Pa(e) {
          for (var t = [], n = 0; 31 > n; n++)
            t.push(e);
          return t;
        }
        function Xn(e, t) {
          e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
        }
        function jr(e, t, n, a, l, i) {
          var c = e.pendingLanes;
          e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
          var y = e.entanglements, A = e.expirationTimes, D = e.hiddenUpdates;
          for (n = c & ~n; 0 < n; ) {
            var G = 31 - wt(n), k = 1 << G;
            y[G] = 0, A[G] = -1;
            var q = D[G];
            if (q !== null)
              for (D[G] = null, G = 0; G < q.length; G++) {
                var L = q[G];
                L !== null && (L.lane &= -536870913);
              }
            n &= ~k;
          }
          a !== 0 && Ls(e, a, 0), i !== 0 && l === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(c & ~t));
        }
        function Ls(e, t, n) {
          e.pendingLanes |= t, e.suspendedLanes &= ~t;
          var a = 31 - wt(t);
          e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | n & 261930;
        }
        function Ys(e, t) {
          var n = e.entangledLanes |= t;
          for (e = e.entanglements; n; ) {
            var a = 31 - wt(n), l = 1 << a;
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
          return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : jm(e.type));
        }
        function Qs(e, t) {
          var n = I.p;
          try {
            return I.p = e, t();
          } finally {
            I.p = n;
          }
        }
        var pn = Math.random().toString(36).slice(2), ft = "__reactFiber$" + pn, pt = "__reactProps$" + pn, On = "__reactContainer$" + pn, Ci = "__reactEvents$" + pn, Rr = "__reactListeners$" + pn, Vs = "__reactHandles$" + pn, ma = "__reactResources$" + pn, jn = "__reactMarker$" + pn;
        function zi(e) {
          delete e[ft], delete e[pt], delete e[Ci], delete e[Rr], delete e[Vs];
        }
        function pa(e) {
          var t = e[ft];
          if (t)
            return t;
          for (var n = e.parentNode; n; ) {
            if (t = n[On] || n[ft]) {
              if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = hm(e); e !== null; ) {
                  if (n = e[ft])
                    return n;
                  e = hm(e);
                }
              return t;
            }
            e = n, n = e.parentNode;
          }
          return null;
        }
        function Rn(e) {
          if (e = e[ft] || e[On]) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
              return e;
          }
          return null;
        }
        function Ia(e) {
          var t = e.tag;
          if (t === 5 || t === 26 || t === 27 || t === 6)
            return e.stateNode;
          throw Error(o(33));
        }
        function ga(e) {
          var t = e[ma];
          return t || (t = e[ma] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
        }
        function $e(e) {
          e[jn] = true;
        }
        var zt = /* @__PURE__ */ new Set(), Rl = {};
        function Cn(e, t) {
          Gt(e, t), Gt(e + "Capture", t);
        }
        function Gt(e, t) {
          for (Rl[e] = t, e = 0; e < t.length; e++)
            zt.add(t[e]);
        }
        var ks = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Zs = {}, Ks = {};
        function Cr(e) {
          return Ai.call(Ks, e) ? true : Ai.call(Zs, e) ? false : ks.test(e) ? Ks[e] = true : (Zs[e] = true, false);
        }
        function Gn(e, t, n) {
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
        function el(e, t, n) {
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
            var t = Js(e) ? "checked" : "value";
            e._valueTracker = zr(e, t, "" + e[t]);
          }
        }
        function Mi(e) {
          if (!e)
            return false;
          var t = e._valueTracker;
          if (!t)
            return true;
          var n = t.getValue(), a = "";
          return e && (a = Js(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== n ? (t.setValue(e), true) : false;
        }
        function tl(e) {
          if (e = e || (typeof document != "undefined" ? document : void 0), typeof e == "undefined")
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        var Qn = /[\n"\\]/g;
        function Rt(e) {
          return e.replace(Qn, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " ";
          });
        }
        function Di(e, t, n, a, l, i, c, y) {
          e.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? e.type = c : e.removeAttribute("type"), t != null ? c === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Ut(t)) : e.value !== "" + Ut(t) && (e.value = "" + Ut(t)) : c !== "submit" && c !== "reset" || e.removeAttribute("value"), t != null ? Bi(e, c, Ut(t)) : n != null ? Bi(e, c, Ut(n)) : a != null && e.removeAttribute("value"), l == null && i != null && (e.defaultChecked = !!i), l != null && (e.checked = l && typeof l != "function" && typeof l != "symbol"), y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? e.name = "" + Ut(y) : e.removeAttribute("name");
        }
        function Fs(e, t, n, a, l, i, c, y) {
          if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || n != null) {
            if (!(i !== "submit" && i !== "reset" || t != null)) {
              Ui(e);
              return;
            }
            n = n != null ? "" + Ut(n) : "", t = t != null ? "" + Ut(t) : n, y || t === e.value || (e.value = t), e.defaultValue = t;
          }
          a = a != null ? a : l, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = y ? e.checked : !!a, e.defaultChecked = !!a, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.name = c), Ui(e);
        }
        function Bi(e, t, n) {
          t === "number" && tl(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
        }
        function ya(e, t, n, a) {
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
                throw Error(o(92));
              if (vt(a)) {
                if (1 < a.length)
                  throw Error(o(93));
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
        function $s(e, t, n) {
          var a = t.indexOf("--") === 0;
          n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Cl.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
        }
        function Hi(e, t, n) {
          if (t != null && typeof t != "object")
            throw Error(o(62));
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
        var Ps = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), Ur = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function Ul(e) {
          return Ur.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
        }
        function It() {
        }
        var nl = null;
        function Ml(e) {
          return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
        }
        var ba = null, kn = null;
        function Dl(e) {
          var t = Rn(e);
          if (t && (e = t.stateNode)) {
            var n = e[pt] || null;
            e:
              switch (e = t.stateNode, t.type) {
                case "input":
                  if (Di(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
                    for (n = e; n.parentNode; )
                      n = n.parentNode;
                    for (n = n.querySelectorAll('input[name="' + Rt("" + t) + '"][type="radio"]'), t = 0; t < n.length; t++) {
                      var a = n[t];
                      if (a !== e && a.form === e.form) {
                        var l = a[pt] || null;
                        if (!l)
                          throw Error(o(90));
                        Di(a, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name);
                      }
                    }
                    for (t = 0; t < n.length; t++)
                      a = n[t], a.form === e.form && Mi(a);
                  }
                  break e;
                case "textarea":
                  Ws(e, n.value, n.defaultValue);
                  break e;
                case "select":
                  t = n.value, t != null && ya(e, !!n.multiple, t, false);
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
            if (Bl = false, (ba !== null || kn !== null) && (Yu(), ba && (t = ba, e = kn, kn = ba = null, Dl(t), e)))
              for (t = 0; t < e.length; t++)
                Dl(e[t]);
          }
        }
        function zn(e, t) {
          var n = e.stateNode;
          if (n === null)
            return null;
          var a = n[pt] || null;
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
        var dt = null, va = null, Zn = null;
        function ql() {
          if (Zn)
            return Zn;
          var e, t = va, n = t.length, a, l = "value" in dt ? dt.value : dt.textContent, i = l.length;
          for (e = 0; e < n && t[e] === l[e]; e++)
            ;
          var c = n - e;
          for (a = 1; a <= c && t[n - a] === l[i - a]; a++)
            ;
          return Zn = l.slice(e, 1 < a ? 1 - a : void 0);
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
        function gt(e) {
          function t(n, a, l, i, c) {
            this._reactName = n, this._targetInst = l, this.type = a, this.nativeEvent = i, this.target = c, this.currentTarget = null;
            for (var y in e)
              e.hasOwnProperty(y) && (n = e[y], this[y] = n ? n(i) : i[y]);
            return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === false) ? Ll : Is, this.isPropagationStopped = Is, this;
          }
          return j(t.prototype, { preventDefault: function() {
            this.defaultPrevented = true;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = Ll);
          }, stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = Ll);
          }, persist: function() {
          }, isPersistent: Ll }), t;
        }
        var Kn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
          return e.timeStamp || Date.now();
        }, defaultPrevented: 0, isTrusted: 0 }, al = gt(Kn), Qe = j({}, Kn, { view: 0, detail: 0 }), f = gt(Qe), p, x, T, N = j({}, Qe, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: nn, button: 0, buttons: 0, relatedTarget: function(e) {
          return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
        }, movementX: function(e) {
          return "movementX" in e ? e.movementX : (e !== T && (T && e.type === "mousemove" ? (p = e.screenX - T.screenX, x = e.screenY - T.screenY) : x = p = 0, T = e), p);
        }, movementY: function(e) {
          return "movementY" in e ? e.movementY : x;
        } }), z = gt(N), C = j({}, N, { dataTransfer: 0 }), J = gt(C), ae = j({}, Qe, { relatedTarget: 0 }), F = gt(ae), $ = j({}, Kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ce = gt($), He = j({}, Kn, { clipboardData: function(e) {
          return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        } }), ge = gt(He), P = j({}, Kn, { data: 0 }), te = gt(P), Ze = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, yt = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, tt = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
        function tn(e) {
          var t = this.nativeEvent;
          return t.getModifierState ? t.getModifierState(e) : (e = tt[e]) ? !!t[e] : false;
        }
        function nn() {
          return tn;
        }
        var Xi = j({}, Qe, { key: function(e) {
          if (e.key) {
            var t = Ze[e.key] || e.key;
            if (t !== "Unidentified")
              return t;
          }
          return e.type === "keypress" ? (e = Hl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? yt[e.keyCode] || "Unidentified" : "";
        }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: nn, charCode: function(e) {
          return e.type === "keypress" ? Hl(e) : 0;
        }, keyCode: function(e) {
          return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        }, which: function(e) {
          return e.type === "keypress" ? Hl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        } }), eu = gt(Xi), Mn = j({}, N, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Yl = gt(Mn), Xl = j({}, Qe, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: nn }), tu = gt(Xl), nu = j({}, Kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Gl = gt(nu), ll = j({}, N, { deltaX: function(e) {
          return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        }, deltaY: function(e) {
          return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        }, deltaZ: 0, deltaMode: 0 }), Jn = gt(ll), au = j({}, Kn, { newState: 0, oldState: 0 }), an = gt(au), lu = [9, 13, 27, 32], ln = en && "CompositionEvent" in window, xa = null;
        en && "documentMode" in document && (xa = document.documentMode);
        var Mr = en && "TextEvent" in window && !xa, gn = en && (!ln || xa && 8 < xa && 11 >= xa), Fn = " ", Ql = false;
        function il(e, t) {
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
              return t.which !== 32 ? null : (Ql = true, Fn);
            case "textInput":
              return e = t.data, e === Fn && Ql ? null : e;
            default:
              return null;
          }
        }
        function Pp(e, t) {
          if (Vl)
            return e === "compositionend" || !ln && il(e, t) ? (e = ql(), Zn = va = dt = null, Vl = false, e) : null;
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
        var Ip = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
        function gf(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return t === "input" ? !!Ip[e.type] : t === "textarea";
        }
        function yf(e, t, n, a) {
          ba ? kn ? kn.push(a) : kn = [a] : ba = a, t = Ku(t, "onChange"), 0 < t.length && (n = new al("onChange", "change", null, n, a), e.push({ event: n, listeners: t }));
        }
        var Qi = null, Vi = null;
        function eg(e) {
          Ih(e, 0);
        }
        function iu(e) {
          var t = Ia(e);
          if (Mi(t))
            return e;
        }
        function bf(e, t) {
          if (e === "change")
            return t;
        }
        var vf = false;
        if (en) {
          var Dr;
          if (en) {
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
            yf(t, Vi, e, Ml(e)), Li(eg, t);
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
        var Qt = typeof Object.is == "function" ? Object.is : ig;
        function ki(e, t) {
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
          for (var t = tl(e.document); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = typeof t.contentWindow.location.href == "string";
            } catch (a) {
              n = false;
            }
            if (n)
              e = t.contentWindow;
            else
              break;
            t = tl(e.document);
          }
          return t;
        }
        function qr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
        }
        var sg = en && "documentMode" in document && 11 >= document.documentMode, kl = null, Hr = null, Zi = null, Lr = false;
        function Nf(e, t, n) {
          var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
          Lr || kl == null || kl !== tl(a) || (a = kl, "selectionStart" in a && qr(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset }), Zi && ki(Zi, a) || (Zi = a, a = Ku(Hr, "onSelect"), 0 < a.length && (t = new al("onSelect", "select", null, t, n), e.push({ event: t, listeners: a }), t.target = kl)));
        }
        function sl(e, t) {
          var n = {};
          return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
        }
        var Zl = { animationend: sl("Animation", "AnimationEnd"), animationiteration: sl("Animation", "AnimationIteration"), animationstart: sl("Animation", "AnimationStart"), transitionrun: sl("Transition", "TransitionRun"), transitionstart: sl("Transition", "TransitionStart"), transitioncancel: sl("Transition", "TransitionCancel"), transitionend: sl("Transition", "TransitionEnd") }, Yr = {}, Of = {};
        en && (Of = document.createElement("div").style, "AnimationEvent" in window || (delete Zl.animationend.animation, delete Zl.animationiteration.animation, delete Zl.animationstart.animation), "TransitionEvent" in window || delete Zl.transitionend.transition);
        function ul(e) {
          if (Yr[e])
            return Yr[e];
          if (!Zl[e])
            return e;
          var t = Zl[e], n;
          for (n in t)
            if (t.hasOwnProperty(n) && n in Of)
              return Yr[e] = t[n];
          return e;
        }
        var jf = ul("animationend"), Rf = ul("animationiteration"), Cf = ul("animationstart"), ug = ul("transitionrun"), rg = ul("transitionstart"), og = ul("transitioncancel"), zf = ul("transitionend"), Uf = /* @__PURE__ */ new Map(), Xr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
        Xr.push("scrollEnd");
        function yn(e, t) {
          Uf.set(e, t), Cn(t, [e]);
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
        }, sn = [], Kl = 0, Gr = 0;
        function uu() {
          for (var e = Kl, t = Gr = Kl = 0; t < e; ) {
            var n = sn[t];
            sn[t++] = null;
            var a = sn[t];
            sn[t++] = null;
            var l = sn[t];
            sn[t++] = null;
            var i = sn[t];
            if (sn[t++] = null, a !== null && l !== null) {
              var c = a.pending;
              c === null ? l.next = l : (l.next = c.next, c.next = l), a.pending = l;
            }
            i !== 0 && Mf(n, l, i);
          }
        }
        function ru(e, t, n, a) {
          sn[Kl++] = e, sn[Kl++] = t, sn[Kl++] = n, sn[Kl++] = a, Gr |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
        }
        function Qr(e, t, n, a) {
          return ru(e, t, n, a), ou(e);
        }
        function rl(e, t) {
          return ru(e, null, null, t), ou(e);
        }
        function Mf(e, t, n) {
          e.lanes |= n;
          var a = e.alternate;
          a !== null && (a.lanes |= n);
          for (var l = false, i = e.return; i !== null; )
            i.childLanes |= n, a = i.alternate, a !== null && (a.childLanes |= n), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (l = true)), e = i, i = i.return;
          return e.tag === 3 ? (i = e.stateNode, l && t !== null && (l = 31 - wt(n), e = i.hiddenUpdates, a = e[l], a === null ? e[l] = [t] : a.push(t), t.lane = n | 536870912), i) : null;
        }
        function ou(e) {
          if (50 < ms)
            throw ms = 0, Io = null, Error(o(185));
          for (var t = e.return; t !== null; )
            e = t, t = e.return;
          return e.tag === 3 ? e.stateNode : null;
        }
        var Jl = {};
        function cg(e, t, n, a) {
          this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
        }
        function Vt(e, t, n, a) {
          return new cg(e, t, n, a);
        }
        function Vr(e) {
          return e = e.prototype, !(!e || !e.isReactComponent);
        }
        function Wn(e, t) {
          var n = e.alternate;
          return n === null ? (n = Vt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
        }
        function Df(e, t) {
          e.flags &= 65011714;
          var n = e.alternate;
          return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), e;
        }
        function cu(e, t, n, a, l, i) {
          var c = 0;
          if (a = e, typeof e == "function")
            Vr(e) && (c = 1);
          else if (typeof e == "string")
            c = p0(e, n, W.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
          else
            e:
              switch (e) {
                case At:
                  return e = Vt(31, n, t, l), e.elementType = At, e.lanes = i, e;
                case Z:
                  return ol(n.children, l, i, t);
                case ie:
                  c = 8, l |= 24;
                  break;
                case me:
                  return e = Vt(12, n, t, l | 2), e.elementType = me, e.lanes = i, e;
                case _e:
                  return e = Vt(13, n, t, l), e.elementType = _e, e.lanes = i, e;
                case Me:
                  return e = Vt(19, n, t, l), e.elementType = Me, e.lanes = i, e;
                default:
                  if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                      case se:
                        c = 10;
                        break e;
                      case Se:
                        c = 9;
                        break e;
                      case be:
                        c = 11;
                        break e;
                      case fe:
                        c = 14;
                        break e;
                      case lt:
                        c = 16, a = null;
                        break e;
                    }
                  c = 29, n = Error(o(130, e === null ? "null" : typeof e, "")), a = null;
              }
          return t = Vt(c, n, t, l), t.elementType = e, t.type = a, t.lanes = i, t;
        }
        function ol(e, t, n, a) {
          return e = Vt(7, e, a, t), e.lanes = n, e;
        }
        function kr(e, t, n) {
          return e = Vt(6, e, null, t), e.lanes = n, e;
        }
        function Bf(e) {
          var t = Vt(18, null, null, 0);
          return t.stateNode = e, t;
        }
        function Zr(e, t, n) {
          return t = Vt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
        }
        var qf = /* @__PURE__ */ new WeakMap();
        function un(e, t) {
          if (typeof e == "object" && e !== null) {
            var n = qf.get(e);
            return n !== void 0 ? n : (t = { value: e, source: t, stack: Us(t) }, qf.set(e, t), t);
          }
          return { value: e, source: t, stack: Us(t) };
        }
        var Fl = [], Wl = 0, fu = null, Ki = 0, rn = [], on = 0, Sa = null, Dn = 1, Bn = "";
        function $n(e, t) {
          Fl[Wl++] = Ki, Fl[Wl++] = fu, fu = e, Ki = t;
        }
        function Hf(e, t, n) {
          rn[on++] = Dn, rn[on++] = Bn, rn[on++] = Sa, Sa = e;
          var a = Dn;
          e = Bn;
          var l = 32 - wt(a) - 1;
          a &= ~(1 << l), n += 1;
          var i = 32 - wt(t) + l;
          if (30 < i) {
            var c = l - l % 5;
            i = (a & (1 << c) - 1).toString(32), a >>= c, l -= c, Dn = 1 << 32 - wt(t) + l | n << l | a, Bn = i + e;
          } else
            Dn = 1 << i | n << l | a, Bn = e;
        }
        function Kr(e) {
          e.return !== null && ($n(e, 1), Hf(e, 1, 0));
        }
        function Jr(e) {
          for (; e === fu; )
            fu = Fl[--Wl], Fl[Wl] = null, Ki = Fl[--Wl], Fl[Wl] = null;
          for (; e === Sa; )
            Sa = rn[--on], rn[on] = null, Bn = rn[--on], rn[on] = null, Dn = rn[--on], rn[on] = null;
        }
        function Lf(e, t) {
          rn[on++] = Dn, rn[on++] = Bn, rn[on++] = Sa, Dn = t.id, Bn = t.overflow, Sa = e;
        }
        var St = null, Ke = null, Ne = false, _a = null, cn = false, Fr = Error(o(519));
        function Ta(e) {
          var t = Error(o(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
          throw Ji(un(t, e)), Fr;
        }
        function Yf(e) {
          var t = e.stateNode, n = e.type, a = e.memoizedProps;
          switch (t[ft] = e, t[pt] = a, n) {
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
              for (n = 0; n < gs.length; n++)
                Ee(gs[n], t);
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
              Ee("invalid", t), Fs(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, true);
              break;
            case "select":
              Ee("invalid", t);
              break;
            case "textarea":
              Ee("invalid", t), qi(t, a.value, a.defaultValue, a.children);
          }
          n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === true || am(t.textContent, n) ? (a.popover != null && (Ee("beforetoggle", t), Ee("toggle", t)), a.onScroll != null && Ee("scroll", t), a.onScrollEnd != null && Ee("scrollend", t), a.onClick != null && (t.onclick = It), t = true) : t = false, t || Ta(e, true);
        }
        function Xf(e) {
          for (St = e.return; St; )
            switch (St.tag) {
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
                St = St.return;
            }
        }
        function $l(e) {
          if (e !== St)
            return false;
          if (!Ne)
            return Xf(e), Ne = true, false;
          var t = e.tag, n;
          if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || mc(e.type, e.memoizedProps)), n = !n), n && Ke && Ta(e), Xf(e), t === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
              throw Error(o(317));
            Ke = dm(e);
          } else if (t === 31) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
              throw Error(o(317));
            Ke = dm(e);
          } else
            t === 27 ? (t = Ke, qa(e.type) ? (e = vc, vc = null, Ke = e) : Ke = t) : Ke = St ? dn(e.stateNode.nextSibling) : null;
          return true;
        }
        function cl() {
          Ke = St = null, Ne = false;
        }
        function Wr() {
          var e = _a;
          return e !== null && (qt === null ? qt = e : qt.push.apply(qt, e), _a = null), e;
        }
        function Ji(e) {
          _a === null ? _a = [e] : _a.push(e);
        }
        var $r = _(null), fl = null, Pn = null;
        function Ea(e, t, n) {
          Y($r, t._currentValue), t._currentValue = n;
        }
        function In(e) {
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
              var c = l.child;
              i = i.firstContext;
              e:
                for (; i !== null; ) {
                  var y = i;
                  i = l;
                  for (var A = 0; A < t.length; A++)
                    if (y.context === t[A]) {
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
              var c = l.alternate;
              if (c === null)
                throw Error(o(387));
              if (c = c.memoizedProps, c !== null) {
                var y = l.type;
                Qt(l.pendingProps.value, c.value) || (e !== null ? e.push(y) : e = [y]);
              }
            } else if (l === je.current) {
              if (c = l.alternate, c === null)
                throw Error(o(387));
              c.memoizedState.memoizedState !== l.memoizedState.memoizedState && (e !== null ? e.push(Ss) : e = [Ss]);
            }
            l = l.return;
          }
          e !== null && Ir(t, e, n, a), t.flags |= 262144;
        }
        function du(e) {
          for (e = e.firstContext; e !== null; ) {
            if (!Qt(e.context._currentValue, e.memoizedValue))
              return true;
            e = e.next;
          }
          return false;
        }
        function dl(e) {
          fl = e, Pn = null, e = e.dependencies, e !== null && (e.firstContext = null);
        }
        function _t(e) {
          return Gf(fl, e);
        }
        function hu(e, t) {
          return fl === null && dl(e), Gf(e, t);
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
        }, dg = u.unstable_scheduleCallback, hg = u.unstable_NormalPriority, st = { $$typeof: se, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
        function eo() {
          return { controller: new fg(), data: /* @__PURE__ */ new Map(), refCount: 0 };
        }
        function Fi(e) {
          e.refCount--, e.refCount === 0 && dg(hg, function() {
            e.controller.abort();
          });
        }
        var Wi = null, to = 0, Il = 0, ei = null;
        function mg(e, t) {
          if (Wi === null) {
            var n = Wi = [];
            to = 0, Il = ic(), ei = { status: "pending", value: void 0, then: function(a) {
              n.push(a);
            } };
          }
          return to++, t.then(Qf, Qf), t;
        }
        function Qf() {
          if (--to === 0 && Wi !== null) {
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
        var hl = _(null);
        function no() {
          var e = hl.current;
          return e !== null ? e : Ge.pooledCache;
        }
        function mu(e, t) {
          t === null ? Y(hl, hl.current) : Y(hl, t.pool);
        }
        function kf() {
          var e = no();
          return e === null ? null : { parent: st._currentValue, pool: e };
        }
        var ti = Error(o(460)), ao = Error(o(474)), pu = Error(o(542)), gu = { then: function() {
        } };
        function Zf(e) {
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
              throw pl = t, ti;
          }
        }
        function ml(e) {
          try {
            var t = e._init;
            return t(e._payload);
          } catch (n) {
            throw n !== null && typeof n == "object" && typeof n.then == "function" ? (pl = n, ti) : n;
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
          if (e === ti || e === pu)
            throw Error(o(483));
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
          throw t.$$typeof === Q ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
        }
        function Wf(e) {
          function t(R, O) {
            if (e) {
              var M = R.deletions;
              M === null ? (R.deletions = [O], R.flags |= 16) : M.push(O);
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
            return R = Wn(R, O), R.index = 0, R.sibling = null, R;
          }
          function i(R, O, M) {
            return R.index = M, e ? (M = R.alternate, M !== null ? (M = M.index, M < O ? (R.flags |= 67108866, O) : M) : (R.flags |= 67108866, O)) : (R.flags |= 1048576, O);
          }
          function c(R) {
            return e && R.alternate === null && (R.flags |= 67108866), R;
          }
          function y(R, O, M, V) {
            return O === null || O.tag !== 6 ? (O = kr(M, R.mode, V), O.return = R, O) : (O = l(O, M), O.return = R, O);
          }
          function A(R, O, M, V) {
            var ue = M.type;
            return ue === Z ? G(R, O, M.props.children, V, M.key) : O !== null && (O.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === lt && ml(ue) === O.type) ? (O = l(O, M.props), Pi(O, M), O.return = R, O) : (O = cu(M.type, M.key, M.props, null, R.mode, V), Pi(O, M), O.return = R, O);
          }
          function D(R, O, M, V) {
            return O === null || O.tag !== 4 || O.stateNode.containerInfo !== M.containerInfo || O.stateNode.implementation !== M.implementation ? (O = Zr(M, R.mode, V), O.return = R, O) : (O = l(O, M.children || []), O.return = R, O);
          }
          function G(R, O, M, V, ue) {
            return O === null || O.tag !== 7 ? (O = ol(M, R.mode, V, ue), O.return = R, O) : (O = l(O, M), O.return = R, O);
          }
          function k(R, O, M) {
            if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
              return O = kr("" + O, R.mode, M), O.return = R, O;
            if (typeof O == "object" && O !== null) {
              switch (O.$$typeof) {
                case w:
                  return M = cu(O.type, O.key, O.props, null, R.mode, M), Pi(M, O), M.return = R, M;
                case U:
                  return O = Zr(O, R.mode, M), O.return = R, O;
                case lt:
                  return O = ml(O), k(R, O, M);
              }
              if (vt(O) || De(O))
                return O = ol(O, R.mode, M, null), O.return = R, O;
              if (typeof O.then == "function")
                return k(R, yu(O), M);
              if (O.$$typeof === se)
                return k(R, hu(R, O), M);
              bu(R, O);
            }
            return null;
          }
          function q(R, O, M, V) {
            var ue = O !== null ? O.key : null;
            if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint")
              return ue !== null ? null : y(R, O, "" + M, V);
            if (typeof M == "object" && M !== null) {
              switch (M.$$typeof) {
                case w:
                  return M.key === ue ? A(R, O, M, V) : null;
                case U:
                  return M.key === ue ? D(R, O, M, V) : null;
                case lt:
                  return M = ml(M), q(R, O, M, V);
              }
              if (vt(M) || De(M))
                return ue !== null ? null : G(R, O, M, V, null);
              if (typeof M.then == "function")
                return q(R, O, yu(M), V);
              if (M.$$typeof === se)
                return q(R, O, hu(R, M), V);
              bu(R, M);
            }
            return null;
          }
          function L(R, O, M, V, ue) {
            if (typeof V == "string" && V !== "" || typeof V == "number" || typeof V == "bigint")
              return R = R.get(M) || null, y(O, R, "" + V, ue);
            if (typeof V == "object" && V !== null) {
              switch (V.$$typeof) {
                case w:
                  return R = R.get(V.key === null ? M : V.key) || null, A(O, R, V, ue);
                case U:
                  return R = R.get(V.key === null ? M : V.key) || null, D(O, R, V, ue);
                case lt:
                  return V = ml(V), L(R, O, M, V, ue);
              }
              if (vt(V) || De(V))
                return R = R.get(M) || null, G(O, R, V, ue, null);
              if (typeof V.then == "function")
                return L(R, O, M, yu(V), ue);
              if (V.$$typeof === se)
                return L(R, O, M, hu(O, V), ue);
              bu(O, V);
            }
            return null;
          }
          function ne(R, O, M, V) {
            for (var ue = null, Re = null, le = O, xe = O = 0, we = null; le !== null && xe < M.length; xe++) {
              le.index > xe ? (we = le, le = null) : we = le.sibling;
              var Ce = q(R, le, M[xe], V);
              if (Ce === null) {
                le === null && (le = we);
                break;
              }
              e && le && Ce.alternate === null && t(R, le), O = i(Ce, O, xe), Re === null ? ue = Ce : Re.sibling = Ce, Re = Ce, le = we;
            }
            if (xe === M.length)
              return n(R, le), Ne && $n(R, xe), ue;
            if (le === null) {
              for (; xe < M.length; xe++)
                le = k(R, M[xe], V), le !== null && (O = i(le, O, xe), Re === null ? ue = le : Re.sibling = le, Re = le);
              return Ne && $n(R, xe), ue;
            }
            for (le = a(le); xe < M.length; xe++)
              we = L(le, R, xe, M[xe], V), we !== null && (e && we.alternate !== null && le.delete(we.key === null ? xe : we.key), O = i(we, O, xe), Re === null ? ue = we : Re.sibling = we, Re = we);
            return e && le.forEach(function(Ga) {
              return t(R, Ga);
            }), Ne && $n(R, xe), ue;
          }
          function oe(R, O, M, V) {
            if (M == null)
              throw Error(o(151));
            for (var ue = null, Re = null, le = O, xe = O = 0, we = null, Ce = M.next(); le !== null && !Ce.done; xe++, Ce = M.next()) {
              le.index > xe ? (we = le, le = null) : we = le.sibling;
              var Ga = q(R, le, Ce.value, V);
              if (Ga === null) {
                le === null && (le = we);
                break;
              }
              e && le && Ga.alternate === null && t(R, le), O = i(Ga, O, xe), Re === null ? ue = Ga : Re.sibling = Ga, Re = Ga, le = we;
            }
            if (Ce.done)
              return n(R, le), Ne && $n(R, xe), ue;
            if (le === null) {
              for (; !Ce.done; xe++, Ce = M.next())
                Ce = k(R, Ce.value, V), Ce !== null && (O = i(Ce, O, xe), Re === null ? ue = Ce : Re.sibling = Ce, Re = Ce);
              return Ne && $n(R, xe), ue;
            }
            for (le = a(le); !Ce.done; xe++, Ce = M.next())
              Ce = L(le, R, xe, Ce.value, V), Ce !== null && (e && Ce.alternate !== null && le.delete(Ce.key === null ? xe : Ce.key), O = i(Ce, O, xe), Re === null ? ue = Ce : Re.sibling = Ce, Re = Ce);
            return e && le.forEach(function(w0) {
              return t(R, w0);
            }), Ne && $n(R, xe), ue;
          }
          function Xe(R, O, M, V) {
            if (typeof M == "object" && M !== null && M.type === Z && M.key === null && (M = M.props.children), typeof M == "object" && M !== null) {
              switch (M.$$typeof) {
                case w:
                  e: {
                    for (var ue = M.key; O !== null; ) {
                      if (O.key === ue) {
                        if (ue = M.type, ue === Z) {
                          if (O.tag === 7) {
                            n(R, O.sibling), V = l(O, M.props.children), V.return = R, R = V;
                            break e;
                          }
                        } else if (O.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === lt && ml(ue) === O.type) {
                          n(R, O.sibling), V = l(O, M.props), Pi(V, M), V.return = R, R = V;
                          break e;
                        }
                        n(R, O);
                        break;
                      } else
                        t(R, O);
                      O = O.sibling;
                    }
                    M.type === Z ? (V = ol(M.props.children, R.mode, V, M.key), V.return = R, R = V) : (V = cu(M.type, M.key, M.props, null, R.mode, V), Pi(V, M), V.return = R, R = V);
                  }
                  return c(R);
                case U:
                  e: {
                    for (ue = M.key; O !== null; ) {
                      if (O.key === ue)
                        if (O.tag === 4 && O.stateNode.containerInfo === M.containerInfo && O.stateNode.implementation === M.implementation) {
                          n(R, O.sibling), V = l(O, M.children || []), V.return = R, R = V;
                          break e;
                        } else {
                          n(R, O);
                          break;
                        }
                      else
                        t(R, O);
                      O = O.sibling;
                    }
                    V = Zr(M, R.mode, V), V.return = R, R = V;
                  }
                  return c(R);
                case lt:
                  return M = ml(M), Xe(R, O, M, V);
              }
              if (vt(M))
                return ne(R, O, M, V);
              if (De(M)) {
                if (ue = De(M), typeof ue != "function")
                  throw Error(o(150));
                return M = ue.call(M), oe(R, O, M, V);
              }
              if (typeof M.then == "function")
                return Xe(R, O, yu(M), V);
              if (M.$$typeof === se)
                return Xe(R, O, hu(R, M), V);
              bu(R, M);
            }
            return typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint" ? (M = "" + M, O !== null && O.tag === 6 ? (n(R, O.sibling), V = l(O, M), V.return = R, R = V) : (n(R, O), V = kr(M, R.mode, V), V.return = R, R = V), c(R)) : n(R, O);
          }
          return function(R, O, M, V) {
            try {
              $i = 0;
              var ue = Xe(R, O, M, V);
              return ni = null, ue;
            } catch (le) {
              if (le === ti || le === pu)
                throw le;
              var Re = Vt(29, le, null, R.mode);
              return Re.lanes = V, Re.return = R, Re;
            } finally {
            }
          };
        }
        var gl = Wf(true), $f = Wf(false), Aa = false;
        function lo(e) {
          e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
        }
        function io(e, t) {
          e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, callbacks: null });
        }
        function wa(e) {
          return { lane: e, tag: 0, payload: null, callback: null, next: null };
        }
        function Na(e, t, n) {
          var a = e.updateQueue;
          if (a === null)
            return null;
          if (a = a.shared, (ze & 2) !== 0) {
            var l = a.pending;
            return l === null ? t.next = t : (t.next = l.next, l.next = t), a.pending = t, t = ou(e), Mf(e, null, n), t;
          }
          return ru(e, a, t, n), ou(e);
        }
        function Ii(e, t, n) {
          if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
            var a = t.lanes;
            a &= e.pendingLanes, n |= a, t.lanes = n, Ys(e, n);
          }
        }
        function so(e, t) {
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
        function es() {
          if (uo) {
            var e = ei;
            if (e !== null)
              throw e;
          }
        }
        function ts(e, t, n, a) {
          uo = false;
          var l = e.updateQueue;
          Aa = false;
          var i = l.firstBaseUpdate, c = l.lastBaseUpdate, y = l.shared.pending;
          if (y !== null) {
            l.shared.pending = null;
            var A = y, D = A.next;
            A.next = null, c === null ? i = D : c.next = D, c = A;
            var G = e.alternate;
            G !== null && (G = G.updateQueue, y = G.lastBaseUpdate, y !== c && (y === null ? G.firstBaseUpdate = D : y.next = D, G.lastBaseUpdate = A));
          }
          if (i !== null) {
            var k = l.baseState;
            c = 0, G = D = A = null, y = i;
            do {
              var q = y.lane & -536870913, L = q !== y.lane;
              if (L ? (Ae & q) === q : (a & q) === q) {
                q !== 0 && q === Il && (uo = true), G !== null && (G = G.next = { lane: 0, tag: y.tag, payload: y.payload, callback: null, next: null });
                e: {
                  var ne = e, oe = y;
                  q = t;
                  var Xe = n;
                  switch (oe.tag) {
                    case 1:
                      if (ne = oe.payload, typeof ne == "function") {
                        k = ne.call(Xe, k, q);
                        break e;
                      }
                      k = ne;
                      break e;
                    case 3:
                      ne.flags = ne.flags & -65537 | 128;
                    case 0:
                      if (ne = oe.payload, q = typeof ne == "function" ? ne.call(Xe, k, q) : ne, q == null)
                        break e;
                      k = j({}, k, q);
                      break e;
                    case 2:
                      Aa = true;
                  }
                }
                q = y.callback, q !== null && (e.flags |= 64, L && (e.flags |= 8192), L = l.callbacks, L === null ? l.callbacks = [q] : L.push(q));
              } else
                L = { lane: q, tag: y.tag, payload: y.payload, callback: y.callback, next: null }, G === null ? (D = G = L, A = k) : G = G.next = L, c |= q;
              if (y = y.next, y === null) {
                if (y = l.shared.pending, y === null)
                  break;
                L = y, y = L.next, L.next = null, l.lastBaseUpdate = L, l.shared.pending = null;
              }
            } while (true);
            G === null && (A = k), l.baseState = A, l.firstBaseUpdate = D, l.lastBaseUpdate = G, i === null && (l.shared.lanes = 0), za |= c, e.lanes = c, e.memoizedState = k;
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
        var ai = _(null), vu = _(0);
        function ed(e, t) {
          e = ra, Y(vu, e), Y(ai, t), ra = e | t.baseLanes;
        }
        function ro() {
          Y(vu, ra), Y(ai, ai.current);
        }
        function oo() {
          ra = vu.current, B(ai), B(vu);
        }
        var kt = _(null), fn = null;
        function Oa(e) {
          var t = e.alternate;
          Y(nt, nt.current & 1), Y(kt, e), fn === null && (t === null || ai.current !== null || t.memoizedState !== null) && (fn = e);
        }
        function co(e) {
          Y(nt, nt.current), Y(kt, e), fn === null && (fn = e);
        }
        function td(e) {
          e.tag === 22 ? (Y(nt, nt.current), Y(kt, e), fn === null && (fn = e)) : ja();
        }
        function ja() {
          Y(nt, nt.current), Y(kt, kt.current);
        }
        function Zt(e) {
          B(kt), fn === e && (fn = null), B(nt);
        }
        var nt = _(0);
        function xu(e) {
          for (var t = e; t !== null; ) {
            if (t.tag === 13) {
              var n = t.memoizedState;
              if (n !== null && (n = n.dehydrated, n === null || yc(n) || bc(n)))
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
        var ea = 0, ve = null, Le = null, ut = null, Su = false, li = false, yl = false, _u = 0, ns = 0, ii = null, gg = 0;
        function Ie() {
          throw Error(o(321));
        }
        function fo(e, t) {
          if (t === null)
            return false;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!Qt(e[n], t[n]))
              return false;
          return true;
        }
        function ho(e, t, n, a, l, i) {
          return ea = i, ve = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, X.H = e === null || e.memoizedState === null ? Hd : Oo, yl = false, i = n(a, l), yl = false, li && (i = ad(t, n, a, l)), nd(e), i;
        }
        function nd(e) {
          X.H = is;
          var t = Le !== null && Le.next !== null;
          if (ea = 0, ut = Le = ve = null, Su = false, ns = 0, ii = null, t)
            throw Error(o(300));
          e === null || rt || (e = e.dependencies, e !== null && du(e) && (rt = true));
        }
        function ad(e, t, n, a) {
          ve = e;
          var l = 0;
          do {
            if (li && (ii = null), ns = 0, li = false, 25 <= l)
              throw Error(o(301));
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
          return t = typeof t.then == "function" ? as(t) : t, e = e.useState()[0], (Le !== null ? Le.memoizedState : null) !== e && (ve.flags |= 1024), t;
        }
        function mo() {
          var e = _u !== 0;
          return _u = 0, e;
        }
        function po(e, t, n) {
          t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
        }
        function go(e) {
          if (Su) {
            for (e = e.memoizedState; e !== null; ) {
              var t = e.queue;
              t !== null && (t.pending = null), e = e.next;
            }
            Su = false;
          }
          ea = 0, ut = Le = ve = null, li = false, ns = _u = 0, ii = null;
        }
        function Ct() {
          var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
          return ut === null ? ve.memoizedState = ut = e : ut = ut.next = e, ut;
        }
        function at() {
          if (Le === null) {
            var e = ve.alternate;
            e = e !== null ? e.memoizedState : null;
          } else
            e = Le.next;
          var t = ut === null ? ve.memoizedState : ut.next;
          if (t !== null)
            ut = t, Le = e;
          else {
            if (e === null)
              throw ve.alternate === null ? Error(o(467)) : Error(o(310));
            Le = e, e = { memoizedState: Le.memoizedState, baseState: Le.baseState, baseQueue: Le.baseQueue, queue: Le.queue, next: null }, ut === null ? ve.memoizedState = ut = e : ut = ut.next = e;
          }
          return ut;
        }
        function Tu() {
          return { lastEffect: null, events: null, stores: null, memoCache: null };
        }
        function as(e) {
          var t = ns;
          return ns += 1, ii === null && (ii = []), e = Kf(ii, e, t), t = ve, (ut === null ? t.memoizedState : ut.next) === null && (t = t.alternate, X.H = t === null || t.memoizedState === null ? Hd : Oo), e;
        }
        function Eu(e) {
          if (e !== null && typeof e == "object") {
            if (typeof e.then == "function")
              return as(e);
            if (e.$$typeof === se)
              return _t(e);
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
          if (t == null && (t = { data: [], index: 0 }), n === null && (n = Tu(), ve.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
            for (n = t.data[t.index] = Array(e), a = 0; a < e; a++)
              n[a] = $t;
          return t.index++, n;
        }
        function ta(e, t) {
          return typeof t == "function" ? t(e) : t;
        }
        function Au(e) {
          var t = at();
          return bo(t, Le, e);
        }
        function bo(e, t, n) {
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
            var y = c = null, A = null, D = t, G = false;
            do {
              var k = D.lane & -536870913;
              if (k !== D.lane ? (Ae & k) === k : (ea & k) === k) {
                var q = D.revertLane;
                if (q === 0)
                  A !== null && (A = A.next = { lane: 0, revertLane: 0, gesture: null, action: D.action, hasEagerState: D.hasEagerState, eagerState: D.eagerState, next: null }), k === Il && (G = true);
                else if ((ea & q) === q) {
                  D = D.next, q === Il && (G = true);
                  continue;
                } else
                  k = { lane: 0, revertLane: D.revertLane, gesture: null, action: D.action, hasEagerState: D.hasEagerState, eagerState: D.eagerState, next: null }, A === null ? (y = A = k, c = i) : A = A.next = k, ve.lanes |= q, za |= q;
                k = D.action, yl && n(i, k), i = D.hasEagerState ? D.eagerState : n(i, k);
              } else
                q = { lane: k, revertLane: D.revertLane, gesture: D.gesture, action: D.action, hasEagerState: D.hasEagerState, eagerState: D.eagerState, next: null }, A === null ? (y = A = q, c = i) : A = A.next = q, ve.lanes |= k, za |= k;
              D = D.next;
            } while (D !== null && D !== t);
            if (A === null ? c = i : A.next = y, !Qt(i, e.memoizedState) && (rt = true, G && (n = ei, n !== null)))
              throw n;
            e.memoizedState = i, e.baseState = c, e.baseQueue = A, a.lastRenderedState = i;
          }
          return l === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
        }
        function vo(e) {
          var t = at(), n = t.queue;
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
            Qt(i, t.memoizedState) || (rt = true), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
          }
          return [i, a];
        }
        function ld(e, t, n) {
          var a = ve, l = at(), i = Ne;
          if (i) {
            if (n === void 0)
              throw Error(o(407));
            n = n();
          } else
            n = t();
          var c = !Qt((Le || l).memoizedState, n);
          if (c && (l.memoizedState = n, rt = true), l = l.queue, _o(ud.bind(null, a, l, e), [e]), l.getSnapshot !== t || c || ut !== null && ut.memoizedState.tag & 1) {
            if (a.flags |= 2048, si(9, { destroy: void 0 }, sd.bind(null, a, l, n, t), null), Ge === null)
              throw Error(o(349));
            i || (ea & 127) !== 0 || id(a, t, n);
          }
          return n;
        }
        function id(e, t, n) {
          e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ve.updateQueue, t === null ? (t = Tu(), ve.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
        }
        function sd(e, t, n, a) {
          t.value = n, t.getSnapshot = a, rd(t) && od(e);
        }
        function ud(e, t, n) {
          return n(function() {
            rd(t) && od(e);
          });
        }
        function rd(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !Qt(e, n);
          } catch (a) {
            return true;
          }
        }
        function od(e) {
          var t = rl(e, 2);
          t !== null && Ht(t, e, 2);
        }
        function xo(e) {
          var t = Ct();
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
        function cd(e, t, n, a) {
          return e.baseState = n, bo(e, Le, typeof a == "function" ? a : ta);
        }
        function bg(e, t, n, a, l) {
          if (Ou(e))
            throw Error(o(485));
          if (e = t.action, e !== null) {
            var i = { payload: l, action: e, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(c) {
              i.listeners.push(c);
            } };
            X.T !== null ? n(true) : i.isTransition = false, a(i), n = t.pending, n === null ? (i.next = t.pending = i, fd(t, i)) : (i.next = n.next, t.pending = n.next = i);
          }
        }
        function fd(e, t) {
          var n = t.action, a = t.payload, l = e.state;
          if (t.isTransition) {
            var i = X.T, c = {};
            X.T = c;
            try {
              var y = n(l, a), A = X.S;
              A !== null && A(c, y), dd(e, t, y);
            } catch (D) {
              So(e, t, D);
            } finally {
              i !== null && c.types !== null && (i.types = c.types), X.T = i;
            }
          } else
            try {
              i = n(l, a), dd(e, t, i);
            } catch (D) {
              So(e, t, D);
            }
        }
        function dd(e, t, n) {
          n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(a) {
            hd(e, t, a);
          }, function(a) {
            return So(e, t, a);
          }) : hd(e, t, n);
        }
        function hd(e, t, n) {
          t.status = "fulfilled", t.value = n, md(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, fd(e, n)));
        }
        function So(e, t, n) {
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
          if (Ne) {
            var n = Ge.formState;
            if (n !== null) {
              e: {
                var a = ve;
                if (Ne) {
                  if (Ke) {
                    t: {
                      for (var l = Ke, i = cn; l.nodeType !== 8; ) {
                        if (!i) {
                          l = null;
                          break t;
                        }
                        if (l = dn(l.nextSibling), l === null) {
                          l = null;
                          break t;
                        }
                      }
                      i = l.data, l = i === "F!" || i === "F" ? l : null;
                    }
                    if (l) {
                      Ke = dn(l.nextSibling), a = l.data === "F!";
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
          return n = Ct(), n.memoizedState = n.baseState = t, a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: pd, lastRenderedState: t }, n.queue = a, n = Dd.bind(null, ve, a), a.dispatch = n, a = xo(false), i = No.bind(null, ve, false, a.queue), a = Ct(), l = { state: t, dispatch: null, action: e, pending: null }, a.queue = l, n = bg.bind(null, ve, l, i, n), l.dispatch = n, a.memoizedState = e, [t, n, false];
        }
        function yd(e) {
          var t = at();
          return bd(t, Le, e);
        }
        function bd(e, t, n) {
          if (t = bo(e, t, pd)[0], e = Au(ta)[0], typeof t == "object" && t !== null && typeof t.then == "function")
            try {
              var a = as(t);
            } catch (c) {
              throw c === ti ? pu : c;
            }
          else
            a = t;
          t = at();
          var l = t.queue, i = l.dispatch;
          return n !== t.memoizedState && (ve.flags |= 2048, si(9, { destroy: void 0 }, vg.bind(null, l, n), null)), [a, i, e];
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
          return e = { tag: e, create: n, deps: a, inst: t, next: null }, t = ve.updateQueue, t === null && (t = Tu(), ve.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e;
        }
        function xd() {
          return at().memoizedState;
        }
        function wu(e, t, n, a) {
          var l = Ct();
          ve.flags |= e, l.memoizedState = si(1 | t, { destroy: void 0 }, n, a === void 0 ? null : a);
        }
        function Nu(e, t, n, a) {
          var l = at();
          a = a === void 0 ? null : a;
          var i = l.memoizedState.inst;
          Le !== null && a !== null && fo(a, Le.memoizedState.deps) ? l.memoizedState = si(t, i, n, a) : (ve.flags |= e, l.memoizedState = si(1 | t, i, n, a));
        }
        function Sd(e, t) {
          wu(8390656, 8, e, t);
        }
        function _o(e, t) {
          Nu(2048, 8, e, t);
        }
        function xg(e) {
          ve.flags |= 4;
          var t = ve.updateQueue;
          if (t === null)
            t = Tu(), ve.updateQueue = t, t.events = [e];
          else {
            var n = t.events;
            n === null ? t.events = [e] : n.push(e);
          }
        }
        function _d(e) {
          var t = at().memoizedState;
          return xg({ ref: t, nextImpl: e }), function() {
            if ((ze & 2) !== 0)
              throw Error(o(440));
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
        function To() {
        }
        function Nd(e, t) {
          var n = at();
          t = t === void 0 ? null : t;
          var a = n.memoizedState;
          return t !== null && fo(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e);
        }
        function Od(e, t) {
          var n = at();
          t = t === void 0 ? null : t;
          var a = n.memoizedState;
          if (t !== null && fo(t, a[1]))
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
        function Eo(e, t, n) {
          return n === void 0 || (ea & 1073741824) !== 0 && (Ae & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = jh(), ve.lanes |= e, za |= e, n);
        }
        function jd(e, t, n, a) {
          return Qt(n, t) ? n : ai.current !== null ? (e = Eo(e, n, a), Qt(e, t) || (rt = true), e) : (ea & 42) === 0 || (ea & 1073741824) !== 0 && (Ae & 261930) === 0 ? (rt = true, e.memoizedState = n) : (e = jh(), ve.lanes |= e, za |= e, t);
        }
        function Rd(e, t, n, a, l) {
          var i = I.p;
          I.p = i !== 0 && 8 > i ? i : 8;
          var c = X.T, y = {};
          X.T = y, No(e, false, t, n);
          try {
            var A = l(), D = X.S;
            if (D !== null && D(y, A), A !== null && typeof A == "object" && typeof A.then == "function") {
              var G = pg(A, a);
              ls(e, t, G, Ft(e));
            } else
              ls(e, t, a, Ft(e));
          } catch (k) {
            ls(e, t, { then: function() {
            }, status: "rejected", reason: k }, Ft());
          } finally {
            I.p = i, c !== null && y.types !== null && (c.types = y.types), X.T = c;
          }
        }
        function Sg() {
        }
        function Ao(e, t, n, a) {
          if (e.tag !== 5)
            throw Error(o(476));
          var l = Cd(e).queue;
          Rd(e, l, t, K, n === null ? Sg : function() {
            return zd(e), n(a);
          });
        }
        function Cd(e) {
          var t = e.memoizedState;
          if (t !== null)
            return t;
          t = { memoizedState: K, baseState: K, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ta, lastRenderedState: K }, next: null };
          var n = {};
          return t.next = { memoizedState: n, baseState: n, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ta, lastRenderedState: n }, next: null }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
        }
        function zd(e) {
          var t = Cd(e);
          t.next === null && (t = e.alternate.memoizedState), ls(e, t.next.queue, {}, Ft());
        }
        function wo() {
          return _t(Ss);
        }
        function Ud() {
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
                var n = Ft();
                e = wa(n);
                var a = Na(t, e, n);
                a !== null && (Ht(a, t, n), Ii(a, t, n)), t = { cache: eo() }, e.payload = t;
                return;
            }
            t = t.return;
          }
        }
        function Tg(e, t, n) {
          var a = Ft();
          n = { lane: a, revertLane: 0, gesture: null, action: n, hasEagerState: false, eagerState: null, next: null }, Ou(e) ? Bd(t, n) : (n = Qr(e, t, n, a), n !== null && (Ht(n, e, a), qd(n, t, a)));
        }
        function Dd(e, t, n) {
          var a = Ft();
          ls(e, t, n, a);
        }
        function ls(e, t, n, a) {
          var l = { lane: a, revertLane: 0, gesture: null, action: n, hasEagerState: false, eagerState: null, next: null };
          if (Ou(e))
            Bd(t, l);
          else {
            var i = e.alternate;
            if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
              try {
                var c = t.lastRenderedState, y = i(c, n);
                if (l.hasEagerState = true, l.eagerState = y, Qt(y, c))
                  return ru(e, t, l, 0), Ge === null && uu(), false;
              } catch (A) {
              } finally {
              }
            if (n = Qr(e, t, l, a), n !== null)
              return Ht(n, e, a), qd(n, t, a), true;
          }
          return false;
        }
        function No(e, t, n, a) {
          if (a = { lane: 2, revertLane: ic(), gesture: null, action: a, hasEagerState: false, eagerState: null, next: null }, Ou(e)) {
            if (t)
              throw Error(o(479));
          } else
            t = Qr(e, n, a, 2), t !== null && Ht(t, e, 2);
        }
        function Ou(e) {
          var t = e.alternate;
          return e === ve || t !== null && t === ve;
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
        var is = { readContext: _t, use: Eu, useCallback: Ie, useContext: Ie, useEffect: Ie, useImperativeHandle: Ie, useLayoutEffect: Ie, useInsertionEffect: Ie, useMemo: Ie, useReducer: Ie, useRef: Ie, useState: Ie, useDebugValue: Ie, useDeferredValue: Ie, useTransition: Ie, useSyncExternalStore: Ie, useId: Ie, useHostTransitionStatus: Ie, useFormState: Ie, useActionState: Ie, useOptimistic: Ie, useMemoCache: Ie, useCacheRefresh: Ie };
        is.useEffectEvent = Ie;
        var Hd = { readContext: _t, use: Eu, useCallback: function(e, t) {
          return Ct().memoizedState = [e, t === void 0 ? null : t], e;
        }, useContext: _t, useEffect: Sd, useImperativeHandle: function(e, t, n) {
          n = n != null ? n.concat([e]) : null, wu(4194308, 4, Ad.bind(null, t, e), n);
        }, useLayoutEffect: function(e, t) {
          return wu(4194308, 4, e, t);
        }, useInsertionEffect: function(e, t) {
          wu(4, 2, e, t);
        }, useMemo: function(e, t) {
          var n = Ct();
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
          var a = Ct();
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
          return a.memoizedState = a.baseState = l, e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: l }, a.queue = e, e = e.dispatch = Tg.bind(null, ve, e), [a.memoizedState, e];
        }, useRef: function(e) {
          var t = Ct();
          return e = { current: e }, t.memoizedState = e;
        }, useState: function(e) {
          e = xo(e);
          var t = e.queue, n = Dd.bind(null, ve, t);
          return t.dispatch = n, [e.memoizedState, n];
        }, useDebugValue: To, useDeferredValue: function(e, t) {
          var n = Ct();
          return Eo(n, e, t);
        }, useTransition: function() {
          var e = xo(false);
          return e = Rd.bind(null, ve, e.queue, true, false), Ct().memoizedState = e, [false, e];
        }, useSyncExternalStore: function(e, t, n) {
          var a = ve, l = Ct();
          if (Ne) {
            if (n === void 0)
              throw Error(o(407));
            n = n();
          } else {
            if (n = t(), Ge === null)
              throw Error(o(349));
            (Ae & 127) !== 0 || id(a, t, n);
          }
          l.memoizedState = n;
          var i = { value: n, getSnapshot: t };
          return l.queue = i, Sd(ud.bind(null, a, i, e), [e]), a.flags |= 2048, si(9, { destroy: void 0 }, sd.bind(null, a, i, n, t), null), n;
        }, useId: function() {
          var e = Ct(), t = Ge.identifierPrefix;
          if (Ne) {
            var n = Bn, a = Dn;
            n = (a & ~(1 << 32 - wt(a) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = _u++, 0 < n && (t += "H" + n.toString(32)), t += "_";
          } else
            n = gg++, t = "_" + t + "r_" + n.toString(32) + "_";
          return e.memoizedState = t;
        }, useHostTransitionStatus: wo, useFormState: gd, useActionState: gd, useOptimistic: function(e) {
          var t = Ct();
          t.memoizedState = t.baseState = e;
          var n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
          return t.queue = n, t = No.bind(null, ve, true, n), n.dispatch = t, [e, t];
        }, useMemoCache: yo, useCacheRefresh: function() {
          return Ct().memoizedState = _g.bind(null, ve);
        }, useEffectEvent: function(e) {
          var t = Ct(), n = { impl: e };
          return t.memoizedState = n, function() {
            if ((ze & 2) !== 0)
              throw Error(o(440));
            return n.impl.apply(void 0, arguments);
          };
        } }, Oo = { readContext: _t, use: Eu, useCallback: Nd, useContext: _t, useEffect: _o, useImperativeHandle: wd, useInsertionEffect: Td, useLayoutEffect: Ed, useMemo: Od, useReducer: Au, useRef: xd, useState: function() {
          return Au(ta);
        }, useDebugValue: To, useDeferredValue: function(e, t) {
          var n = at();
          return jd(n, Le.memoizedState, e, t);
        }, useTransition: function() {
          var e = Au(ta)[0], t = at().memoizedState;
          return [typeof e == "boolean" ? e : as(e), t];
        }, useSyncExternalStore: ld, useId: Ud, useHostTransitionStatus: wo, useFormState: yd, useActionState: yd, useOptimistic: function(e, t) {
          var n = at();
          return cd(n, Le, e, t);
        }, useMemoCache: yo, useCacheRefresh: Md };
        Oo.useEffectEvent = _d;
        var Ld = { readContext: _t, use: Eu, useCallback: Nd, useContext: _t, useEffect: _o, useImperativeHandle: wd, useInsertionEffect: Td, useLayoutEffect: Ed, useMemo: Od, useReducer: vo, useRef: xd, useState: function() {
          return vo(ta);
        }, useDebugValue: To, useDeferredValue: function(e, t) {
          var n = at();
          return Le === null ? Eo(n, e, t) : jd(n, Le.memoizedState, e, t);
        }, useTransition: function() {
          var e = vo(ta)[0], t = at().memoizedState;
          return [typeof e == "boolean" ? e : as(e), t];
        }, useSyncExternalStore: ld, useId: Ud, useHostTransitionStatus: wo, useFormState: vd, useActionState: vd, useOptimistic: function(e, t) {
          var n = at();
          return Le !== null ? cd(n, Le, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
        }, useMemoCache: yo, useCacheRefresh: Md };
        Ld.useEffectEvent = _d;
        function jo(e, t, n, a) {
          t = e.memoizedState, n = n(a, t), n = n == null ? t : j({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
        }
        var Ro = { enqueueSetState: function(e, t, n) {
          e = e._reactInternals;
          var a = Ft(), l = wa(a);
          l.payload = t, n != null && (l.callback = n), t = Na(e, l, a), t !== null && (Ht(t, e, a), Ii(t, e, a));
        }, enqueueReplaceState: function(e, t, n) {
          e = e._reactInternals;
          var a = Ft(), l = wa(a);
          l.tag = 1, l.payload = t, n != null && (l.callback = n), t = Na(e, l, a), t !== null && (Ht(t, e, a), Ii(t, e, a));
        }, enqueueForceUpdate: function(e, t) {
          e = e._reactInternals;
          var n = Ft(), a = wa(n);
          a.tag = 2, t != null && (a.callback = t), t = Na(e, a, n), t !== null && (Ht(t, e, n), Ii(t, e, n));
        } };
        function Yd(e, t, n, a, l, i, c) {
          return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, i, c) : t.prototype && t.prototype.isPureReactComponent ? !ki(n, a) || !ki(l, i) : true;
        }
        function Xd(e, t, n, a) {
          e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && Ro.enqueueReplaceState(t, t.state, null);
        }
        function bl(e, t) {
          var n = t;
          if ("ref" in t) {
            n = {};
            for (var a in t)
              a !== "ref" && (n[a] = t[a]);
          }
          if (e = e.defaultProps) {
            n === t && (n = j({}, n));
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
        function ju(e, t) {
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
        function Co(e, t, n) {
          return n = wa(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
            ju(e, t);
          }, n;
        }
        function Zd(e) {
          return e = wa(e), e.tag = 3, e;
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
          var c = n.stateNode;
          c !== null && typeof c.componentDidCatch == "function" && (e.callback = function() {
            kd(t, n, a), typeof l != "function" && (Ua === null ? Ua = /* @__PURE__ */ new Set([this]) : Ua.add(this));
            var y = a.stack;
            this.componentDidCatch(a.value, { componentStack: y !== null ? y : "" });
          });
        }
        function Eg(e, t, n, a, l) {
          if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
            if (t = n.alternate, t !== null && Pl(t, n, l, true), n = kt.current, n !== null) {
              switch (n.tag) {
                case 31:
                case 13:
                  return fn === null ? Xu() : n.alternate === null && et === 0 && (et = 3), n.flags &= -257, n.flags |= 65536, n.lanes = l, a === gu ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), nc(e, a, l)), false;
                case 22:
                  return n.flags |= 65536, a === gu ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([a]) }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), nc(e, a, l)), false;
              }
              throw Error(o(435, n.tag));
            }
            return nc(e, a, l), Xu(), false;
          }
          if (Ne)
            return t = kt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = l, a !== Fr && (e = Error(o(422), { cause: a }), Ji(un(e, n)))) : (a !== Fr && (t = Error(o(423), { cause: a }), Ji(un(t, n))), e = e.current.alternate, e.flags |= 65536, l &= -l, e.lanes |= l, a = un(a, n), l = Co(e.stateNode, a, l), so(e, l), et !== 4 && (et = 2)), false;
          var i = Error(o(520), { cause: a });
          if (i = un(i, n), hs === null ? hs = [i] : hs.push(i), et !== 4 && (et = 2), t === null)
            return true;
          a = un(a, n), n = t;
          do {
            switch (n.tag) {
              case 3:
                return n.flags |= 65536, e = l & -l, n.lanes |= e, e = Co(n.stateNode, a, e), so(n, e), false;
              case 1:
                if (t = n.type, i = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Ua === null || !Ua.has(i))))
                  return n.flags |= 65536, l &= -l, n.lanes |= l, l = Zd(l), Kd(l, e, n, a), so(n, l), false;
            }
            n = n.return;
          } while (n !== null);
          return false;
        }
        var zo = Error(o(461)), rt = false;
        function Tt(e, t, n, a) {
          t.child = e === null ? $f(t, null, n, a) : gl(t, e.child, n, a);
        }
        function Jd(e, t, n, a, l) {
          n = n.render;
          var i = t.ref;
          if ("ref" in a) {
            var c = {};
            for (var y in a)
              y !== "ref" && (c[y] = a[y]);
          } else
            c = a;
          return dl(t), a = ho(e, t, n, c, i, l), y = mo(), e !== null && !rt ? (po(e, t, l), na(e, t, l)) : (Ne && y && Kr(t), t.flags |= 1, Tt(e, t, a, l), t.child);
        }
        function Fd(e, t, n, a, l) {
          if (e === null) {
            var i = n.type;
            return typeof i == "function" && !Vr(i) && i.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = i, Wd(e, t, i, a, l)) : (e = cu(n.type, null, a, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
          }
          if (i = e.child, !Yo(e, l)) {
            var c = i.memoizedProps;
            if (n = n.compare, n = n !== null ? n : ki, n(c, a) && e.ref === t.ref)
              return na(e, t, l);
          }
          return t.flags |= 1, e = Wn(i, a), e.ref = t.ref, e.return = t, t.child = e;
        }
        function Wd(e, t, n, a, l) {
          if (e !== null) {
            var i = e.memoizedProps;
            if (ki(i, a) && e.ref === t.ref)
              if (rt = false, t.pendingProps = a = i, Yo(e, l))
                (e.flags & 131072) !== 0 && (rt = true);
              else
                return t.lanes = e.lanes, na(e, t, l);
          }
          return Uo(e, t, n, a, l);
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
              t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && mu(t, i !== null ? i.cachePool : null), i !== null ? ed(t, i) : ro(), td(t);
            else
              return a = t.lanes = 536870912, Pd(e, t, i !== null ? i.baseLanes | n : n, n, a);
          } else
            i !== null ? (mu(t, i.cachePool), ed(t, i), ja(), t.memoizedState = null) : (e !== null && mu(t, null), ro(), ja());
          return Tt(e, t, l, n), t.child;
        }
        function ss(e, t) {
          return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), t.sibling;
        }
        function Pd(e, t, n, a, l) {
          var i = no();
          return i = i === null ? null : { parent: st._currentValue, pool: i }, t.memoizedState = { baseLanes: n, cachePool: i }, e !== null && mu(t, null), ro(), td(t), e !== null && Pl(e, t, a, true), t.childLanes = l, null;
        }
        function Ru(e, t) {
          return t = zu({ mode: t.mode, children: t.children }, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
        }
        function Id(e, t, n) {
          return gl(t, e.child, null, n), e = Ru(t, t.pendingProps), e.flags |= 2, Zt(t), t.memoizedState = null, e;
        }
        function Ag(e, t, n) {
          var a = t.pendingProps, l = (t.flags & 128) !== 0;
          if (t.flags &= -129, e === null) {
            if (Ne) {
              if (a.mode === "hidden")
                return e = Ru(t, a), t.lanes = 536870912, ss(null, e);
              if (co(t), (e = Ke) ? (e = fm(e, cn), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = { dehydrated: e, treeContext: Sa !== null ? { id: Dn, overflow: Bn } : null, retryLane: 536870912, hydrationErrors: null }, n = Bf(e), n.return = t, t.child = n, St = t, Ke = null)) : e = null, e === null)
                throw Ta(t);
              return t.lanes = 536870912, null;
            }
            return Ru(t, a);
          }
          var i = e.memoizedState;
          if (i !== null) {
            var c = i.dehydrated;
            if (co(t), l)
              if (t.flags & 256)
                t.flags &= -257, t = Id(e, t, n);
              else if (t.memoizedState !== null)
                t.child = e.child, t.flags |= 128, t = null;
              else
                throw Error(o(558));
            else if (rt || Pl(e, t, n, false), l = (n & e.childLanes) !== 0, rt || l) {
              if (a = Ge, a !== null && (c = Xs(a, n), c !== 0 && c !== i.retryLane))
                throw i.retryLane = c, rl(e, c), Ht(a, e, c), zo;
              Xu(), t = Id(e, t, n);
            } else
              e = i.treeContext, Ke = dn(c.nextSibling), St = t, Ne = true, _a = null, cn = false, e !== null && Lf(t, e), t = Ru(t, a), t.flags |= 4096;
            return t;
          }
          return e = Wn(e.child, { mode: a.mode, children: a.children }), e.ref = t.ref, t.child = e, e.return = t, e;
        }
        function Cu(e, t) {
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
          return dl(t), n = ho(e, t, n, a, void 0, l), a = mo(), e !== null && !rt ? (po(e, t, l), na(e, t, l)) : (Ne && a && Kr(t), t.flags |= 1, Tt(e, t, n, l), t.child);
        }
        function eh(e, t, n, a, l, i) {
          return dl(t), t.updateQueue = null, n = ad(t, a, n, l), nd(e), a = mo(), e !== null && !rt ? (po(e, t, i), na(e, t, i)) : (Ne && a && Kr(t), t.flags |= 1, Tt(e, t, n, i), t.child);
        }
        function th(e, t, n, a, l) {
          if (dl(t), t.stateNode === null) {
            var i = Jl, c = n.contextType;
            typeof c == "object" && c !== null && (i = _t(c)), i = new n(a, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Ro, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = a, i.state = t.memoizedState, i.refs = {}, lo(t), c = n.contextType, i.context = typeof c == "object" && c !== null ? _t(c) : Jl, i.state = t.memoizedState, c = n.getDerivedStateFromProps, typeof c == "function" && (jo(t, n, c, a), i.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (c = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), c !== i.state && Ro.enqueueReplaceState(i, i.state, null), ts(t, a, i, l), es(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = true;
          } else if (e === null) {
            i = t.stateNode;
            var y = t.memoizedProps, A = bl(n, y);
            i.props = A;
            var D = i.context, G = n.contextType;
            c = Jl, typeof G == "object" && G !== null && (c = _t(G));
            var k = n.getDerivedStateFromProps;
            G = typeof k == "function" || typeof i.getSnapshotBeforeUpdate == "function", y = t.pendingProps !== y, G || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (y || D !== c) && Xd(t, i, a, c), Aa = false;
            var q = t.memoizedState;
            i.state = q, ts(t, a, i, l), es(), D = t.memoizedState, y || q !== D || Aa ? (typeof k == "function" && (jo(t, n, k, a), D = t.memoizedState), (A = Aa || Yd(t, n, A, a, q, D, c)) ? (G || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = D), i.props = a, i.state = D, i.context = c, a = A) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = false);
          } else {
            i = t.stateNode, io(e, t), c = t.memoizedProps, G = bl(n, c), i.props = G, k = t.pendingProps, q = i.context, D = n.contextType, A = Jl, typeof D == "object" && D !== null && (A = _t(D)), y = n.getDerivedStateFromProps, (D = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (c !== k || q !== A) && Xd(t, i, a, A), Aa = false, q = t.memoizedState, i.state = q, ts(t, a, i, l), es();
            var L = t.memoizedState;
            c !== k || q !== L || Aa || e !== null && e.dependencies !== null && du(e.dependencies) ? (typeof y == "function" && (jo(t, n, y, a), L = t.memoizedState), (G = Aa || Yd(t, n, G, a, q, L, A) || e !== null && e.dependencies !== null && du(e.dependencies)) ? (D || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, L, A), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(a, L, A)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || c === e.memoizedProps && q === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && q === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = L), i.props = a, i.state = L, i.context = A, a = G) : (typeof i.componentDidUpdate != "function" || c === e.memoizedProps && q === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && q === e.memoizedState || (t.flags |= 1024), a = false);
          }
          return i = a, Cu(e, t), a = (t.flags & 128) !== 0, i || a ? (i = t.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && a ? (t.child = gl(t, e.child, null, l), t.child = gl(t, null, n, l)) : Tt(e, t, n, l), t.memoizedState = i.state, e = t.child) : e = na(e, t, l), e;
        }
        function nh(e, t, n, a) {
          return cl(), t.flags |= 256, Tt(e, t, n, a), t.child;
        }
        var Mo = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
        function Do(e) {
          return { baseLanes: e, cachePool: kf() };
        }
        function Bo(e, t, n) {
          return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Jt), e;
        }
        function ah(e, t, n) {
          var a = t.pendingProps, l = false, i = (t.flags & 128) !== 0, c;
          if ((c = i) || (c = e !== null && e.memoizedState === null ? false : (nt.current & 2) !== 0), c && (l = true, t.flags &= -129), c = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
            if (Ne) {
              if (l ? Oa(t) : ja(), (e = Ke) ? (e = fm(e, cn), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = { dehydrated: e, treeContext: Sa !== null ? { id: Dn, overflow: Bn } : null, retryLane: 536870912, hydrationErrors: null }, n = Bf(e), n.return = t, t.child = n, St = t, Ke = null)) : e = null, e === null)
                throw Ta(t);
              return bc(e) ? t.lanes = 32 : t.lanes = 536870912, null;
            }
            var y = a.children;
            return a = a.fallback, l ? (ja(), l = t.mode, y = zu({ mode: "hidden", children: y }, l), a = ol(a, l, n, null), y.return = t, a.return = t, y.sibling = a, t.child = y, a = t.child, a.memoizedState = Do(n), a.childLanes = Bo(e, c, n), t.memoizedState = Mo, ss(null, a)) : (Oa(t), qo(t, y));
          }
          var A = e.memoizedState;
          if (A !== null && (y = A.dehydrated, y !== null)) {
            if (i)
              t.flags & 256 ? (Oa(t), t.flags &= -257, t = Ho(e, t, n)) : t.memoizedState !== null ? (ja(), t.child = e.child, t.flags |= 128, t = null) : (ja(), y = a.fallback, l = t.mode, a = zu({ mode: "visible", children: a.children }, l), y = ol(y, l, n, null), y.flags |= 2, a.return = t, y.return = t, a.sibling = y, t.child = a, gl(t, e.child, null, n), a = t.child, a.memoizedState = Do(n), a.childLanes = Bo(e, c, n), t.memoizedState = Mo, t = ss(null, a));
            else if (Oa(t), bc(y)) {
              if (c = y.nextSibling && y.nextSibling.dataset, c)
                var D = c.dgst;
              c = D, a = Error(o(419)), a.stack = "", a.digest = c, Ji({ value: a, source: null, stack: null }), t = Ho(e, t, n);
            } else if (rt || Pl(e, t, n, false), c = (n & e.childLanes) !== 0, rt || c) {
              if (c = Ge, c !== null && (a = Xs(c, n), a !== 0 && a !== A.retryLane))
                throw A.retryLane = a, rl(e, a), Ht(c, e, a), zo;
              yc(y) || Xu(), t = Ho(e, t, n);
            } else
              yc(y) ? (t.flags |= 192, t.child = e.child, t = null) : (e = A.treeContext, Ke = dn(y.nextSibling), St = t, Ne = true, _a = null, cn = false, e !== null && Lf(t, e), t = qo(t, a.children), t.flags |= 4096);
            return t;
          }
          return l ? (ja(), y = a.fallback, l = t.mode, A = e.child, D = A.sibling, a = Wn(A, { mode: "hidden", children: a.children }), a.subtreeFlags = A.subtreeFlags & 65011712, D !== null ? y = Wn(D, y) : (y = ol(y, l, n, null), y.flags |= 2), y.return = t, a.return = t, a.sibling = y, t.child = a, ss(null, a), a = t.child, y = e.child.memoizedState, y === null ? y = Do(n) : (l = y.cachePool, l !== null ? (A = st._currentValue, l = l.parent !== A ? { parent: A, pool: A } : l) : l = kf(), y = { baseLanes: y.baseLanes | n, cachePool: l }), a.memoizedState = y, a.childLanes = Bo(e, c, n), t.memoizedState = Mo, ss(e.child, a)) : (Oa(t), n = e.child, e = n.sibling, n = Wn(n, { mode: "visible", children: a.children }), n.return = t, n.sibling = null, e !== null && (c = t.deletions, c === null ? (t.deletions = [e], t.flags |= 16) : c.push(e)), t.child = n, t.memoizedState = null, n);
        }
        function qo(e, t) {
          return t = zu({ mode: "visible", children: t }, e.mode), t.return = e, e.child = t;
        }
        function zu(e, t) {
          return e = Vt(22, e, null, t), e.lanes = 0, e;
        }
        function Ho(e, t, n) {
          return gl(t, e.child, null, n), e = qo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
        }
        function lh(e, t, n) {
          e.lanes |= t;
          var a = e.alternate;
          a !== null && (a.lanes |= t), Pr(e.return, t, n);
        }
        function Lo(e, t, n, a, l, i) {
          var c = e.memoizedState;
          c === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: a, tail: n, tailMode: l, treeForkCount: i } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = a, c.tail = n, c.tailMode = l, c.treeForkCount = i);
        }
        function ih(e, t, n) {
          var a = t.pendingProps, l = a.revealOrder, i = a.tail;
          a = a.children;
          var c = nt.current, y = (c & 2) !== 0;
          if (y ? (c = c & 1 | 2, t.flags |= 128) : c &= 1, Y(nt, c), Tt(e, t, a, n), a = Ne ? Ki : 0, !y && e !== null && (e.flags & 128) !== 0)
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
              n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Lo(t, false, l, n, i, a);
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
          if (e !== null && (t.dependencies = e.dependencies), za |= t.lanes, (n & t.childLanes) === 0)
            if (e !== null) {
              if (Pl(e, t, n, false), (n & t.childLanes) === 0)
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
          return (e.lanes & t) !== 0 ? true : (e = e.dependencies, !!(e !== null && du(e)));
        }
        function wg(e, t, n) {
          switch (t.tag) {
            case 3:
              xt(t, t.stateNode.containerInfo), Ea(t, st, e.memoizedState.cache), cl();
              break;
            case 27:
            case 5:
              Za(t);
              break;
            case 4:
              xt(t, t.stateNode.containerInfo);
              break;
            case 10:
              Ea(t, t.type, t.memoizedProps.value);
              break;
            case 31:
              if (t.memoizedState !== null)
                return t.flags |= 128, co(t), null;
              break;
            case 13:
              var a = t.memoizedState;
              if (a !== null)
                return a.dehydrated !== null ? (Oa(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? ah(e, t, n) : (Oa(t), e = na(e, t, n), e !== null ? e.sibling : null);
              Oa(t);
              break;
            case 19:
              var l = (e.flags & 128) !== 0;
              if (a = (n & t.childLanes) !== 0, a || (Pl(e, t, n, false), a = (n & t.childLanes) !== 0), l) {
                if (a)
                  return ih(e, t, n);
                t.flags |= 128;
              }
              if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Y(nt, nt.current), a)
                break;
              return null;
            case 22:
              return t.lanes = 0, $d(e, t, n, t.pendingProps);
            case 24:
              Ea(t, st, e.memoizedState.cache);
          }
          return na(e, t, n);
        }
        function sh(e, t, n) {
          if (e !== null)
            if (e.memoizedProps !== t.pendingProps)
              rt = true;
            else {
              if (!Yo(e, n) && (t.flags & 128) === 0)
                return rt = false, wg(e, t, n);
              rt = (e.flags & 131072) !== 0;
            }
          else
            rt = false, Ne && (t.flags & 1048576) !== 0 && Hf(t, Ki, t.index);
          switch (t.lanes = 0, t.tag) {
            case 16:
              e: {
                var a = t.pendingProps;
                if (e = ml(t.elementType), t.type = e, typeof e == "function")
                  Vr(e) ? (a = bl(e, a), t.tag = 1, t = th(null, t, e, a, n)) : (t.tag = 0, t = Uo(null, t, e, a, n));
                else {
                  if (e != null) {
                    var l = e.$$typeof;
                    if (l === be) {
                      t.tag = 11, t = Jd(null, t, e, a, n);
                      break e;
                    } else if (l === fe) {
                      t.tag = 14, t = Fd(null, t, e, a, n);
                      break e;
                    }
                  }
                  throw t = Ue(e) || e, Error(o(306, t, ""));
                }
              }
              return t;
            case 0:
              return Uo(e, t, t.type, t.pendingProps, n);
            case 1:
              return a = t.type, l = bl(a, t.pendingProps), th(e, t, a, l, n);
            case 3:
              e: {
                if (xt(t, t.stateNode.containerInfo), e === null)
                  throw Error(o(387));
                a = t.pendingProps;
                var i = t.memoizedState;
                l = i.element, io(e, t), ts(t, a, null, n);
                var c = t.memoizedState;
                if (a = c.cache, Ea(t, st, a), a !== i.cache && Ir(t, [st], n, true), es(), a = c.element, i.isDehydrated)
                  if (i = { element: a, isDehydrated: false, cache: c.cache }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                    t = nh(e, t, a, n);
                    break e;
                  } else if (a !== l) {
                    l = un(Error(o(424)), t), Ji(l), t = nh(e, t, a, n);
                    break e;
                  } else {
                    switch (e = t.stateNode.containerInfo, e.nodeType) {
                      case 9:
                        e = e.body;
                        break;
                      default:
                        e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                    }
                    for (Ke = dn(e.firstChild), St = t, Ne = true, _a = null, cn = true, n = $f(t, null, a, n), t.child = n; n; )
                      n.flags = n.flags & -3 | 4096, n = n.sibling;
                  }
                else {
                  if (cl(), a === l) {
                    t = na(e, t, n);
                    break e;
                  }
                  Tt(e, t, a, n);
                }
                t = t.child;
              }
              return t;
            case 26:
              return Cu(e, t), e === null ? (n = ym(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : Ne || (n = t.type, e = t.pendingProps, a = Ju(re.current).createElement(n), a[ft] = t, a[pt] = e, Et(a, n, e), $e(a), t.stateNode = a) : t.memoizedState = ym(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
            case 27:
              return Za(t), e === null && Ne && (a = t.stateNode = mm(t.type, t.pendingProps, re.current), St = t, cn = true, l = Ke, qa(t.type) ? (vc = l, Ke = dn(a.firstChild)) : Ke = l), Tt(e, t, t.pendingProps.children, n), Cu(e, t), e === null && (t.flags |= 4194304), t.child;
            case 5:
              return e === null && Ne && ((l = a = Ke) && (a = n0(a, t.type, t.pendingProps, cn), a !== null ? (t.stateNode = a, St = t, Ke = dn(a.firstChild), cn = false, l = true) : l = false), l || Ta(t)), Za(t), l = t.type, i = t.pendingProps, c = e !== null ? e.memoizedProps : null, a = i.children, mc(l, i) ? a = null : c !== null && mc(l, c) && (t.flags |= 32), t.memoizedState !== null && (l = ho(e, t, yg, null, null, n), Ss._currentValue = l), Cu(e, t), Tt(e, t, a, n), t.child;
            case 6:
              return e === null && Ne && ((e = n = Ke) && (n = a0(n, t.pendingProps, cn), n !== null ? (t.stateNode = n, St = t, Ke = null, e = true) : e = false), e || Ta(t)), null;
            case 13:
              return ah(e, t, n);
            case 4:
              return xt(t, t.stateNode.containerInfo), a = t.pendingProps, e === null ? t.child = gl(t, null, a, n) : Tt(e, t, a, n), t.child;
            case 11:
              return Jd(e, t, t.type, t.pendingProps, n);
            case 7:
              return Tt(e, t, t.pendingProps, n), t.child;
            case 8:
              return Tt(e, t, t.pendingProps.children, n), t.child;
            case 12:
              return Tt(e, t, t.pendingProps.children, n), t.child;
            case 10:
              return a = t.pendingProps, Ea(t, t.type, a.value), Tt(e, t, a.children, n), t.child;
            case 9:
              return l = t.type._context, a = t.pendingProps.children, dl(t), l = _t(l), a = a(l), t.flags |= 1, Tt(e, t, a, n), t.child;
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
              return dl(t), a = _t(st), e === null ? (l = no(), l === null && (l = Ge, i = eo(), l.pooledCache = i, i.refCount++, i !== null && (l.pooledCacheLanes |= n), l = i), t.memoizedState = { parent: a, cache: l }, lo(t), Ea(t, st, l)) : ((e.lanes & n) !== 0 && (io(e, t), ts(t, null, null, n), es()), l = e.memoizedState, i = t.memoizedState, l.parent !== a ? (l = { parent: a, cache: a }, t.memoizedState = l, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = l), Ea(t, st, a)) : (a = i.cache, Ea(t, st, a), a !== l.cache && Ir(t, [st], n, true))), Tt(e, t, t.pendingProps.children, n), t.child;
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
              else if (Uh())
                e.flags |= 8192;
              else
                throw pl = gu, ao;
          } else
            e.flags &= -16777217;
        }
        function uh(e, t) {
          if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
            e.flags &= -16777217;
          else if (e.flags |= 16777216, !_m(t))
            if (Uh())
              e.flags |= 8192;
            else
              throw pl = gu, ao;
        }
        function Uu(e, t) {
          t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Hs() : 536870912, e.lanes |= t, ci |= t);
        }
        function us(e, t) {
          if (!Ne)
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
              return Je(t), null;
            case 1:
              return Je(t), null;
            case 3:
              return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), In(st), We(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && ($l(t) ? aa(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Wr())), Je(t), null;
            case 26:
              var l = t.type, i = t.memoizedState;
              return e === null ? (aa(t), i !== null ? (Je(t), uh(t, i)) : (Je(t), Xo(t, l, null, a, n))) : i ? i !== e.memoizedState ? (aa(t), Je(t), uh(t, i)) : (Je(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && aa(t), Je(t), Xo(t, l, e, a, n)), null;
            case 27:
              if (Al(t), n = re.current, l = t.type, e !== null && t.stateNode != null)
                e.memoizedProps !== a && aa(t);
              else {
                if (!a) {
                  if (t.stateNode === null)
                    throw Error(o(166));
                  return Je(t), null;
                }
                e = W.current, $l(t) ? Yf(t) : (e = mm(l, a, n), t.stateNode = e, aa(t));
              }
              return Je(t), null;
            case 5:
              if (Al(t), l = t.type, e !== null && t.stateNode != null)
                e.memoizedProps !== a && aa(t);
              else {
                if (!a) {
                  if (t.stateNode === null)
                    throw Error(o(166));
                  return Je(t), null;
                }
                if (i = W.current, $l(t))
                  Yf(t);
                else {
                  var c = Ju(re.current);
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
                  i[ft] = t, i[pt] = a;
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
                    switch (Et(i, l, a), l) {
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
                if (e = re.current, $l(t)) {
                  if (e = t.stateNode, n = t.memoizedProps, a = null, l = St, l !== null)
                    switch (l.tag) {
                      case 27:
                      case 5:
                        a = l.memoizedProps;
                    }
                  e[ft] = t, e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === true || am(e.nodeValue, n)), e || Ta(t, true);
                } else
                  e = Ju(e).createTextNode(a), e[ft] = t, t.stateNode = e;
              }
              return Je(t), null;
            case 31:
              if (n = t.memoizedState, e === null || e.memoizedState !== null) {
                if (a = $l(t), n !== null) {
                  if (e === null) {
                    if (!a)
                      throw Error(o(318));
                    if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e)
                      throw Error(o(557));
                    e[ft] = t;
                  } else
                    cl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                  Je(t), e = false;
                } else
                  n = Wr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = true;
                if (!e)
                  return t.flags & 256 ? (Zt(t), t) : (Zt(t), null);
                if ((t.flags & 128) !== 0)
                  throw Error(o(558));
              }
              return Je(t), null;
            case 13:
              if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (l = $l(t), a !== null && a.dehydrated !== null) {
                  if (e === null) {
                    if (!l)
                      throw Error(o(318));
                    if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l)
                      throw Error(o(317));
                    l[ft] = t;
                  } else
                    cl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                  Je(t), l = false;
                } else
                  l = Wr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), l = true;
                if (!l)
                  return t.flags & 256 ? (Zt(t), t) : (Zt(t), null);
              }
              return Zt(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = a !== null, e = e !== null && e.memoizedState !== null, n && (a = t.child, l = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (l = a.alternate.memoizedState.cachePool.pool), i = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool), i !== l && (a.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), Uu(t, t.updateQueue), Je(t), null);
            case 4:
              return We(), e === null && oc(t.stateNode.containerInfo), Je(t), null;
            case 10:
              return In(t.type), Je(t), null;
            case 19:
              if (B(nt), a = t.memoizedState, a === null)
                return Je(t), null;
              if (l = (t.flags & 128) !== 0, i = a.rendering, i === null)
                if (l)
                  us(a, false);
                else {
                  if (et !== 0 || e !== null && (e.flags & 128) !== 0)
                    for (e = t.child; e !== null; ) {
                      if (i = xu(e), i !== null) {
                        for (t.flags |= 128, us(a, false), e = i.updateQueue, t.updateQueue = e, Uu(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                          Df(n, e), n = n.sibling;
                        return Y(nt, nt.current & 1 | 2), Ne && $n(t, a.treeForkCount), t.child;
                      }
                      e = e.sibling;
                    }
                  a.tail !== null && Ot() > Hu && (t.flags |= 128, l = true, us(a, false), t.lanes = 4194304);
                }
              else {
                if (!l)
                  if (e = xu(i), e !== null) {
                    if (t.flags |= 128, l = true, e = e.updateQueue, t.updateQueue = e, Uu(t, e), us(a, true), a.tail === null && a.tailMode === "hidden" && !i.alternate && !Ne)
                      return Je(t), null;
                  } else
                    2 * Ot() - a.renderingStartTime > Hu && n !== 536870912 && (t.flags |= 128, l = true, us(a, false), t.lanes = 4194304);
                a.isBackwards ? (i.sibling = t.child, t.child = i) : (e = a.last, e !== null ? e.sibling = i : t.child = i, a.last = i);
              }
              return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = Ot(), e.sibling = null, n = nt.current, Y(nt, l ? n & 1 | 2 : n & 1), Ne && $n(t, a.treeForkCount), e) : (Je(t), null);
            case 22:
            case 23:
              return Zt(t), oo(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Je(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Je(t), n = t.updateQueue, n !== null && Uu(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), e !== null && B(hl), null;
            case 24:
              return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), In(st), Je(t), null;
            case 25:
              return null;
            case 30:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function Og(e, t) {
          switch (Jr(t), t.tag) {
            case 1:
              return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
              return In(st), We(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
            case 26:
            case 27:
            case 5:
              return Al(t), null;
            case 31:
              if (t.memoizedState !== null) {
                if (Zt(t), t.alternate === null)
                  throw Error(o(340));
                cl();
              }
              return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 13:
              if (Zt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                  throw Error(o(340));
                cl();
              }
              return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
              return B(nt), null;
            case 4:
              return We(), null;
            case 10:
              return In(t.type), null;
            case 22:
            case 23:
              return Zt(t), oo(), e !== null && B(hl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 24:
              return In(st), null;
            case 25:
              return null;
            default:
              return null;
          }
        }
        function rh(e, t) {
          switch (Jr(t), t.tag) {
            case 3:
              In(st), We();
              break;
            case 26:
            case 27:
            case 5:
              Al(t);
              break;
            case 4:
              We();
              break;
            case 31:
              t.memoizedState !== null && Zt(t);
              break;
            case 13:
              Zt(t);
              break;
            case 19:
              B(nt);
              break;
            case 10:
              In(t.type);
              break;
            case 22:
            case 23:
              Zt(t), oo(), e !== null && B(hl);
              break;
            case 24:
              In(st);
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
        function Ra(e, t, n) {
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
        function oh(e) {
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
        function ch(e, t, n) {
          n.props = bl(e.type, e.memoizedProps), n.state = e.memoizedState;
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
        function Go(e, t, n) {
          try {
            var a = e.stateNode;
            Wg(a, e.type, n, t), a[pt] = t;
          } catch (l) {
            qe(e, e.return, l);
          }
        }
        function dh(e) {
          return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && qa(e.type) || e.tag === 4;
        }
        function Qo(e) {
          e:
            for (; ; ) {
              for (; e.sibling === null; ) {
                if (e.return === null || dh(e.return))
                  return null;
                e = e.return;
              }
              for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if (e.tag === 27 && qa(e.type) || e.flags & 2 || e.child === null || e.tag === 4)
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
          else if (a !== 4 && (a === 27 && qa(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
            for (Vo(e, t, n), e = e.sibling; e !== null; )
              Vo(e, t, n), e = e.sibling;
        }
        function Mu(e, t, n) {
          var a = e.tag;
          if (a === 5 || a === 6)
            e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (a !== 4 && (a === 27 && qa(e.type) && (n = e.stateNode), e = e.child, e !== null))
            for (Mu(e, t, n), e = e.sibling; e !== null; )
              Mu(e, t, n), e = e.sibling;
        }
        function hh(e) {
          var t = e.stateNode, n = e.memoizedProps;
          try {
            for (var a = e.type, l = t.attributes; l.length; )
              t.removeAttributeNode(l[0]);
            Et(t, a, n), t[ft] = e, t[pt] = n;
          } catch (i) {
            qe(e, e.return, i);
          }
        }
        var la = false, ot = false, ko = false, mh = typeof WeakSet == "function" ? WeakSet : Set, bt = null;
        function jg(e, t) {
          if (e = e.containerInfo, dc = tr, e = wf(e), qr(e)) {
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
                  var c = 0, y = -1, A = -1, D = 0, G = 0, k = e, q = null;
                  t:
                    for (; ; ) {
                      for (var L; k !== n || l !== 0 && k.nodeType !== 3 || (y = c + l), k !== i || a !== 0 && k.nodeType !== 3 || (A = c + a), k.nodeType === 3 && (c += k.nodeValue.length), (L = k.firstChild) !== null; )
                        q = k, k = L;
                      for (; ; ) {
                        if (k === e)
                          break t;
                        if (q === n && ++D === l && (y = c), q === i && ++G === a && (A = c), (L = k.nextSibling) !== null)
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
          for (hc = { focusedElem: e, selectionRange: n }, tr = false, bt = t; bt !== null; )
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
                        var ne = bl(n.type, l);
                        e = a.getSnapshotBeforeUpdate(ne, i), a.__reactInternalSnapshotBeforeUpdate = e;
                      } catch (oe) {
                        qe(n, n.return, oe);
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
        function ph(e, t, n) {
          var a = n.flags;
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              sa(e, n), a & 4 && rs(5, n);
              break;
            case 1:
              if (sa(e, n), a & 4)
                if (e = n.stateNode, t === null)
                  try {
                    e.componentDidMount();
                  } catch (c) {
                    qe(n, n.return, c);
                  }
                else {
                  var l = bl(n.type, t.memoizedProps);
                  t = t.memoizedState;
                  try {
                    e.componentDidUpdate(l, t, e.__reactInternalSnapshotBeforeUpdate);
                  } catch (c) {
                    qe(n, n.return, c);
                  }
                }
              a & 64 && oh(n), a & 512 && os(n, n.return);
              break;
            case 3:
              if (sa(e, n), a & 64 && (e = n.updateQueue, e !== null)) {
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
              t === null && a & 4 && hh(n);
            case 26:
            case 5:
              sa(e, n), t === null && a & 4 && fh(n), a & 512 && os(n, n.return);
              break;
            case 12:
              sa(e, n);
              break;
            case 31:
              sa(e, n), a & 4 && bh(e, n);
              break;
            case 13:
              sa(e, n), a & 4 && vh(e, n), a & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Hg.bind(null, n), l0(e, n))));
              break;
            case 22:
              if (a = n.memoizedState !== null || la, !a) {
                t = t !== null && t.memoizedState !== null || ot, l = la;
                var i = ot;
                la = a, (ot = t) && !i ? ua(e, n, (n.subtreeFlags & 8772) !== 0) : sa(e, n), la = l, ot = i;
              }
              break;
            case 30:
              break;
            default:
              sa(e, n);
          }
        }
        function gh(e) {
          var t = e.alternate;
          t !== null && (e.alternate = null, gh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && zi(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
        }
        var Fe = null, Mt = false;
        function ia(e, t, n) {
          for (n = n.child; n !== null; )
            yh(e, t, n), n = n.sibling;
        }
        function yh(e, t, n) {
          if (jt && typeof jt.onCommitFiberUnmount == "function")
            try {
              jt.onCommitFiberUnmount(Ja, n);
            } catch (i) {
            }
          switch (n.tag) {
            case 26:
              ot || qn(n, t), ia(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
              break;
            case 27:
              ot || qn(n, t);
              var a = Fe, l = Mt;
              qa(n.type) && (Fe = n.stateNode, Mt = false), ia(e, t, n), bs(n.stateNode), Fe = a, Mt = l;
              break;
            case 5:
              ot || qn(n, t);
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
              Fe !== null && (Mt ? (e = Fe, om(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), bi(e)) : om(Fe, n.stateNode));
              break;
            case 4:
              a = Fe, l = Mt, Fe = n.stateNode.containerInfo, Mt = true, ia(e, t, n), Fe = a, Mt = l;
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              Ra(2, n, t), ot || Ra(4, n, t), ia(e, t, n);
              break;
            case 1:
              ot || (qn(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function" && ch(n, t, a)), ia(e, t, n);
              break;
            case 21:
              ia(e, t, n);
              break;
            case 22:
              ot = (a = ot) || n.memoizedState !== null, ia(e, t, n), ot = a;
              break;
            default:
              ia(e, t, n);
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
              throw Error(o(435, e.tag));
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
        function Dt(e, t) {
          var n = t.deletions;
          if (n !== null)
            for (var a = 0; a < n.length; a++) {
              var l = n[a], i = e, c = t, y = c;
              e:
                for (; y !== null; ) {
                  switch (y.tag) {
                    case 27:
                      if (qa(y.type)) {
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
              yh(i, c, l), Fe = null, Mt = false, i = l.alternate, i !== null && (i.return = null), l.return = null;
            }
          if (t.subtreeFlags & 13886)
            for (t = t.child; t !== null; )
              xh(t, e), t = t.sibling;
        }
        var bn = null;
        function xh(e, t) {
          var n = e.alternate, a = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              Dt(t, e), Bt(e), a & 4 && (Ra(3, e, e.return), rs(3, e), Ra(5, e, e.return));
              break;
            case 1:
              Dt(t, e), Bt(e), a & 512 && (ot || n === null || qn(n, n.return)), a & 64 && la && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
              break;
            case 26:
              var l = bn;
              if (Dt(t, e), Bt(e), a & 512 && (ot || n === null || qn(n, n.return)), a & 4) {
                var i = n !== null ? n.memoizedState : null;
                if (a = e.memoizedState, n === null)
                  if (a === null)
                    if (e.stateNode === null) {
                      e: {
                        a = e.type, n = e.memoizedProps, l = l.ownerDocument || l;
                        t:
                          switch (a) {
                            case "title":
                              i = l.getElementsByTagName("title")[0], (!i || i[jn] || i[ft] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = l.createElement(a), l.head.insertBefore(i, l.querySelector("head > title"))), Et(i, a, n), i[ft] = e, $e(i), a = i;
                              break e;
                            case "link":
                              var c = xm("link", "href", l).get(a + (n.href || ""));
                              if (c) {
                                for (var y = 0; y < c.length; y++)
                                  if (i = c[y], i.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && i.getAttribute("rel") === (n.rel == null ? null : n.rel) && i.getAttribute("title") === (n.title == null ? null : n.title) && i.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                                    c.splice(y, 1);
                                    break t;
                                  }
                              }
                              i = l.createElement(a), Et(i, a, n), l.head.appendChild(i);
                              break;
                            case "meta":
                              if (c = xm("meta", "content", l).get(a + (n.content || ""))) {
                                for (y = 0; y < c.length; y++)
                                  if (i = c[y], i.getAttribute("content") === (n.content == null ? null : "" + n.content) && i.getAttribute("name") === (n.name == null ? null : n.name) && i.getAttribute("property") === (n.property == null ? null : n.property) && i.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && i.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                                    c.splice(y, 1);
                                    break t;
                                  }
                              }
                              i = l.createElement(a), Et(i, a, n), l.head.appendChild(i);
                              break;
                            default:
                              throw Error(o(468, a));
                          }
                        i[ft] = e, $e(i), a = i;
                      }
                      e.stateNode = a;
                    } else
                      Sm(l, e.type, e.stateNode);
                  else
                    e.stateNode = vm(l, a, e.memoizedProps);
                else
                  i !== a ? (i === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : i.count--, a === null ? Sm(l, e.type, e.stateNode) : vm(l, a, e.memoizedProps)) : a === null && e.stateNode !== null && Go(e, e.memoizedProps, n.memoizedProps);
              }
              break;
            case 27:
              Dt(t, e), Bt(e), a & 512 && (ot || n === null || qn(n, n.return)), n !== null && a & 4 && Go(e, e.memoizedProps, n.memoizedProps);
              break;
            case 5:
              if (Dt(t, e), Bt(e), a & 512 && (ot || n === null || qn(n, n.return)), e.flags & 32) {
                l = e.stateNode;
                try {
                  Vn(l, "");
                } catch (ne) {
                  qe(e, e.return, ne);
                }
              }
              a & 4 && e.stateNode != null && (l = e.memoizedProps, Go(e, l, n !== null ? n.memoizedProps : l)), a & 1024 && (ko = true);
              break;
            case 6:
              if (Dt(t, e), Bt(e), a & 4) {
                if (e.stateNode === null)
                  throw Error(o(162));
                a = e.memoizedProps, n = e.stateNode;
                try {
                  n.nodeValue = a;
                } catch (ne) {
                  qe(e, e.return, ne);
                }
              }
              break;
            case 3:
              if ($u = null, l = bn, bn = Fu(t.containerInfo), Dt(t, e), bn = l, Bt(e), a & 4 && n !== null && n.memoizedState.isDehydrated)
                try {
                  bi(t.containerInfo);
                } catch (ne) {
                  qe(e, e.return, ne);
                }
              ko && (ko = false, Sh(e));
              break;
            case 4:
              a = bn, bn = Fu(e.stateNode.containerInfo), Dt(t, e), Bt(e), bn = a;
              break;
            case 12:
              Dt(t, e), Bt(e);
              break;
            case 31:
              Dt(t, e), Bt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Du(e, a)));
              break;
            case 13:
              Dt(t, e), Bt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (qu = Ot()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Du(e, a)));
              break;
            case 22:
              l = e.memoizedState !== null;
              var A = n !== null && n.memoizedState !== null, D = la, G = ot;
              if (la = D || l, ot = G || A, Dt(t, e), ot = G, la = D, Bt(e), a & 8192)
                e:
                  for (t = e.stateNode, t._visibility = l ? t._visibility & -2 : t._visibility | 1, l && (n === null || A || la || ot || vl(e)), n = null, t = e; ; ) {
                    if (t.tag === 5 || t.tag === 26) {
                      if (n === null) {
                        A = n = t;
                        try {
                          if (i = A.stateNode, l)
                            c = i.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
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
                          l ? cm(L, true) : cm(A.stateNode, false);
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
              Dt(t, e), Bt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Du(e, a)));
              break;
            case 30:
              break;
            case 21:
              break;
            default:
              Dt(t, e), Bt(e);
          }
        }
        function Bt(e) {
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
                throw Error(o(160));
              switch (n.tag) {
                case 27:
                  var l = n.stateNode, i = Qo(e);
                  Mu(e, i, l);
                  break;
                case 5:
                  var c = n.stateNode;
                  n.flags & 32 && (Vn(c, ""), n.flags &= -33);
                  var y = Qo(e);
                  Mu(e, y, c);
                  break;
                case 3:
                case 4:
                  var A = n.stateNode.containerInfo, D = Qo(e);
                  Vo(e, D, A);
                  break;
                default:
                  throw Error(o(161));
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
        function sa(e, t) {
          if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null; )
              ph(e, t.alternate, t), t = t.sibling;
        }
        function vl(e) {
          for (e = e.child; e !== null; ) {
            var t = e;
            switch (t.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Ra(4, t, t.return), vl(t);
                break;
              case 1:
                qn(t, t.return);
                var n = t.stateNode;
                typeof n.componentWillUnmount == "function" && ch(t, t.return, n), vl(t);
                break;
              case 27:
                bs(t.stateNode);
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
        function ua(e, t, n) {
          for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
            var a = t.alternate, l = e, i = t, c = i.flags;
            switch (i.tag) {
              case 0:
              case 11:
              case 15:
                ua(l, i, n), rs(4, i);
                break;
              case 1:
                if (ua(l, i, n), a = i, l = a.stateNode, typeof l.componentDidMount == "function")
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
                n && c & 64 && oh(i), os(i, i.return);
                break;
              case 27:
                hh(i);
              case 26:
              case 5:
                ua(l, i, n), n && a === null && c & 4 && fh(i), os(i, i.return);
                break;
              case 12:
                ua(l, i, n);
                break;
              case 31:
                ua(l, i, n), n && c & 4 && bh(l, i);
                break;
              case 13:
                ua(l, i, n), n && c & 4 && vh(l, i);
                break;
              case 22:
                i.memoizedState === null && ua(l, i, n), os(i, i.return);
                break;
              case 30:
                break;
              default:
                ua(l, i, n);
            }
            t = t.sibling;
          }
        }
        function Zo(e, t) {
          var n = null;
          e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Fi(n));
        }
        function Ko(e, t) {
          e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Fi(e));
        }
        function vn(e, t, n, a) {
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
              vn(e, t, n, a), l & 2048 && rs(9, t);
              break;
            case 1:
              vn(e, t, n, a);
              break;
            case 3:
              vn(e, t, n, a), l & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Fi(e)));
              break;
            case 12:
              if (l & 2048) {
                vn(e, t, n, a), e = t.stateNode;
                try {
                  var i = t.memoizedProps, c = i.id, y = i.onPostCommit;
                  typeof y == "function" && y(c, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
                } catch (A) {
                  qe(t, t.return, A);
                }
              } else
                vn(e, t, n, a);
              break;
            case 31:
              vn(e, t, n, a);
              break;
            case 13:
              vn(e, t, n, a);
              break;
            case 23:
              break;
            case 22:
              i = t.stateNode, c = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? vn(e, t, n, a) : cs(e, t) : i._visibility & 2 ? vn(e, t, n, a) : (i._visibility |= 2, ui(e, t, n, a, (t.subtreeFlags & 10256) !== 0 || false)), l & 2048 && Zo(c, t);
              break;
            case 24:
              vn(e, t, n, a), l & 2048 && Ko(t.alternate, t);
              break;
            default:
              vn(e, t, n, a);
          }
        }
        function ui(e, t, n, a, l) {
          for (l = l && ((t.subtreeFlags & 10256) !== 0 || false), t = t.child; t !== null; ) {
            var i = e, c = t, y = n, A = a, D = c.flags;
            switch (c.tag) {
              case 0:
              case 11:
              case 15:
                ui(i, c, y, A, l), rs(8, c);
                break;
              case 23:
                break;
              case 22:
                var G = c.stateNode;
                c.memoizedState !== null ? G._visibility & 2 ? ui(i, c, y, A, l) : cs(i, c) : (G._visibility |= 2, ui(i, c, y, A, l)), l && D & 2048 && Zo(c.alternate, c);
                break;
              case 24:
                ui(i, c, y, A, l), l && D & 2048 && Ko(c.alternate, c);
                break;
              default:
                ui(i, c, y, A, l);
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
                  cs(n, a), l & 2048 && Zo(a.alternate, a);
                  break;
                case 24:
                  cs(n, a), l & 2048 && Ko(a.alternate, a);
                  break;
                default:
                  cs(n, a);
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
              ri(e, t, n), e.flags & fs && e.memoizedState !== null && g0(n, bn, e.memoizedState, e.memoizedProps);
              break;
            case 5:
              ri(e, t, n);
              break;
            case 3:
            case 4:
              var a = bn;
              bn = Fu(e.stateNode.containerInfo), ri(e, t, n), bn = a;
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
                bt = a, wh(a, e);
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
              ds(e), e.flags & 2048 && Ra(9, e, e.return);
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
                bt = a, wh(a, e);
              }
            Eh(e);
          }
          for (e = e.child; e !== null; ) {
            switch (t = e, t.tag) {
              case 0:
              case 11:
              case 15:
                Ra(8, t, t.return), Bu(t);
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
          for (; bt !== null; ) {
            var n = bt;
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                Ra(8, n, t);
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
                  if (gh(a), a === n) {
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
        var Cg = { getCacheForType: function(e) {
          var t = _t(st), n = t.data.get(e);
          return n === void 0 && (n = e(), t.data.set(e, n)), n;
        }, cacheSignal: function() {
          return _t(st).controller.signal;
        } }, zg = typeof WeakMap == "function" ? WeakMap : Map, ze = 0, Ge = null, Te = null, Ae = 0, Be = 0, Kt = null, Ca = false, oi = false, Jo = false, ra = 0, et = 0, za = 0, xl = 0, Fo = 0, Jt = 0, ci = 0, hs = null, qt = null, Wo = false, qu = 0, Nh = 0, Hu = 1 / 0, Lu = null, Ua = null, ht = 0, Ma = null, fi = null, oa = 0, $o = 0, Po = null, Oh = null, ms = 0, Io = null;
        function Ft() {
          return (ze & 2) !== 0 && Ae !== 0 ? Ae & -Ae : X.T !== null ? ic() : Gs();
        }
        function jh() {
          if (Jt === 0)
            if ((Ae & 536870912) === 0 || Ne) {
              var e = Ol;
              Ol <<= 1, (Ol & 3932160) === 0 && (Ol = 262144), Jt = e;
            } else
              Jt = 536870912;
          return e = kt.current, e !== null && (e.flags |= 32), Jt;
        }
        function Ht(e, t, n) {
          (e === Ge && (Be === 2 || Be === 9) || e.cancelPendingCommit !== null) && (di(e, 0), Da(e, Ae, Jt, false)), Xn(e, n), ((ze & 2) === 0 || e !== Ge) && (e === Ge && ((ze & 2) === 0 && (xl |= n), et === 4 && Da(e, Ae, Jt, false)), Hn(e));
        }
        function Rh(e, t, n) {
          if ((ze & 6) !== 0)
            throw Error(o(327));
          var a = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || $a(e, t), l = a ? Dg(e, t) : tc(e, t, true), i = a;
          do {
            if (l === 0) {
              oi && !a && Da(e, t, 0, false);
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
                    l = hs;
                    var A = y.current.memoizedState.isDehydrated;
                    if (A && (di(y, c).flags |= 256), c = tc(y, c, false), c !== 2) {
                      if (Jo && !A) {
                        y.errorRecoveryDisabledLanes |= i, xl |= i, l = 4;
                        break e;
                      }
                      i = qt, qt = l, i !== null && (qt === null ? qt = i : qt.push.apply(qt, i));
                    }
                    l = c;
                  }
                  if (i = false, l !== 2)
                    continue;
                }
              }
              if (l === 1) {
                di(e, 0), Da(e, t, 0, true);
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
                    Da(a, t, Jt, !Ca);
                    break e;
                  case 2:
                    qt = null;
                    break;
                  case 3:
                  case 5:
                    break;
                  default:
                    throw Error(o(329));
                }
                if ((t & 62914560) === t && (l = qu + 300 - Ot(), 10 < l)) {
                  if (Da(a, t, Jt, !Ca), jl(a, 0, true) !== 0)
                    break e;
                  oa = t, a.timeoutHandle = um(Ch.bind(null, a, n, qt, Lu, Wo, t, Jt, xl, ci, Ca, i, "Throttled", -0, 0), l);
                  break e;
                }
                Ch(a, n, qt, Lu, Wo, t, Jt, xl, ci, Ca, i, null, -0, 0);
              }
            }
            break;
          } while (true);
          Hn(e);
        }
        function Ch(e, t, n, a, l, i, c, y, A, D, G, k, q, L) {
          if (e.timeoutHandle = -1, k = t.subtreeFlags, k & 8192 || (k & 16785408) === 16785408) {
            k = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: true, waitingForViewTransition: false, unsuspend: It }, Th(t, i, k);
            var ne = (i & 62914560) === i ? qu - Ot() : (i & 4194048) === i ? Nh - Ot() : 0;
            if (ne = y0(k, ne), ne !== null) {
              oa = i, e.cancelPendingCommit = ne(Lh.bind(null, e, t, i, n, a, l, c, y, A, G, k, null, q, L)), Da(e, i, c, !D);
              return;
            }
          }
          Lh(e, t, i, n, a, l, c, y, A);
        }
        function Ug(e) {
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
          t &= ~Fo, t &= ~xl, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
          for (var l = t; 0 < l; ) {
            var i = 31 - wt(l), c = 1 << i;
            a[i] = -1, l &= ~c;
          }
          n !== 0 && Ls(e, n, t);
        }
        function Yu() {
          return (ze & 6) === 0 ? (ps(0), false) : true;
        }
        function ec() {
          if (Te !== null) {
            if (Be === 0)
              var e = Te.return;
            else
              e = Te, Pn = fl = null, go(e), ni = null, $i = 0, e = Te;
            for (; e !== null; )
              rh(e.alternate, e), e = e.return;
            Te = null;
          }
        }
        function di(e, t) {
          var n = e.timeoutHandle;
          n !== -1 && (e.timeoutHandle = -1, Ig(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), oa = 0, ec(), Ge = e, Te = n = Wn(e.current, null), Ae = t, Be = 0, Kt = null, Ca = false, oi = $a(e, t), Jo = false, ci = Jt = Fo = xl = za = et = 0, qt = hs = null, Wo = false, (t & 8) !== 0 && (t |= t & 32);
          var a = e.entangledLanes;
          if (a !== 0)
            for (e = e.entanglements, a &= t; 0 < a; ) {
              var l = 31 - wt(a), i = 1 << l;
              t |= e[l], a &= ~i;
            }
          return ra = t, uu(), n;
        }
        function zh(e, t) {
          ve = null, X.H = is, t === ti || t === pu ? (t = Jf(), Be = 3) : t === ao ? (t = Jf(), Be = 4) : Be = t === zo ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Kt = t, Te === null && (et = 1, ju(e, un(t, e.current)));
        }
        function Uh() {
          var e = kt.current;
          return e === null ? true : (Ae & 4194048) === Ae ? fn === null : (Ae & 62914560) === Ae || (Ae & 536870912) !== 0 ? e === fn : false;
        }
        function Mh() {
          var e = X.H;
          return X.H = is, e === null ? is : e;
        }
        function Dh() {
          var e = X.A;
          return X.A = Cg, e;
        }
        function Xu() {
          et = 4, Ca || (Ae & 4194048) !== Ae && kt.current !== null || (oi = true), (za & 134217727) === 0 && (xl & 134217727) === 0 || Ge === null || Da(Ge, Ae, Jt, false);
        }
        function tc(e, t, n) {
          var a = ze;
          ze |= 2;
          var l = Mh(), i = Dh();
          (Ge !== e || Ae !== t) && (Lu = null, di(e, t)), t = false;
          var c = et;
          e:
            do
              try {
                if (Be !== 0 && Te !== null) {
                  var y = Te, A = Kt;
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
                      if (Be = 0, Kt = null, hi(e, y, A, D), n && oi) {
                        c = 0;
                        break e;
                      }
                      break;
                    default:
                      D = Be, Be = 0, Kt = null, hi(e, y, A, D);
                  }
                }
                Mg(), c = et;
                break;
              } catch (G) {
                zh(e, G);
              }
            while (true);
          return t && e.shellSuspendCounter++, Pn = fl = null, ze = a, X.H = l, X.A = i, Te === null && (Ge = null, Ae = 0, uu()), c;
        }
        function Mg() {
          for (; Te !== null; )
            Bh(Te);
        }
        function Dg(e, t) {
          var n = ze;
          ze |= 2;
          var a = Mh(), l = Dh();
          Ge !== e || Ae !== t ? (Lu = null, Hu = Ot() + 500, di(e, t)) : oi = $a(e, t);
          e:
            do
              try {
                if (Be !== 0 && Te !== null) {
                  t = Te;
                  var i = Kt;
                  t:
                    switch (Be) {
                      case 1:
                        Be = 0, Kt = null, hi(e, t, i, 1);
                        break;
                      case 2:
                      case 9:
                        if (Zf(i)) {
                          Be = 0, Kt = null, qh(t);
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
                        Zf(i) ? (Be = 0, Kt = null, qh(t)) : (Be = 0, Kt = null, hi(e, t, i, 7));
                        break;
                      case 5:
                        var c = null;
                        switch (Te.tag) {
                          case 26:
                            c = Te.memoizedState;
                          case 5:
                          case 27:
                            var y = Te;
                            if (c ? _m(c) : y.stateNode.complete) {
                              Be = 0, Kt = null;
                              var A = y.sibling;
                              if (A !== null)
                                Te = A;
                              else {
                                var D = y.return;
                                D !== null ? (Te = D, Gu(D)) : Te = null;
                              }
                              break t;
                            }
                        }
                        Be = 0, Kt = null, hi(e, t, i, 5);
                        break;
                      case 6:
                        Be = 0, Kt = null, hi(e, t, i, 6);
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
                zh(e, G);
              }
            while (true);
          return Pn = fl = null, X.H = a, X.A = l, ze = n, Te !== null ? 0 : (Ge = null, Ae = 0, uu(), et);
        }
        function Bg() {
          for (; Te !== null && !Ar(); )
            Bh(Te);
        }
        function Bh(e) {
          var t = sh(e.alternate, e, ra);
          e.memoizedProps = e.pendingProps, t === null ? Gu(e) : Te = t;
        }
        function qh(e) {
          var t = e, n = t.alternate;
          switch (t.tag) {
            case 15:
            case 0:
              t = eh(n, t, t.pendingProps, t.type, void 0, Ae);
              break;
            case 11:
              t = eh(n, t, t.pendingProps, t.type.render, t.ref, Ae);
              break;
            case 5:
              go(t);
            default:
              rh(n, t), t = Te = Df(t, ra), t = sh(n, t, ra);
          }
          e.memoizedProps = e.pendingProps, t === null ? Gu(e) : Te = t;
        }
        function hi(e, t, n, a) {
          Pn = fl = null, go(t), ni = null, $i = 0;
          var l = t.return;
          try {
            if (Eg(e, l, t, n, Ae)) {
              et = 1, ju(e, un(n, e.current)), Te = null;
              return;
            }
          } catch (i) {
            if (l !== null)
              throw Te = l, i;
            et = 1, ju(e, un(n, e.current)), Te = null;
            return;
          }
          t.flags & 32768 ? (Ne || a === 1 ? e = true : oi || (Ae & 536870912) !== 0 ? e = false : (Ca = e = true, (a === 2 || a === 9 || a === 3 || a === 6) && (a = kt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Hh(t, e)) : Gu(t);
        }
        function Gu(e) {
          var t = e;
          do {
            if ((t.flags & 32768) !== 0) {
              Hh(t, Ca);
              return;
            }
            e = t.return;
            var n = Ng(t.alternate, t, ra);
            if (n !== null) {
              Te = n;
              return;
            }
            if (t = t.sibling, t !== null) {
              Te = t;
              return;
            }
            Te = t = e;
          } while (t !== null);
          et === 0 && (et = 5);
        }
        function Hh(e, t) {
          do {
            var n = Og(e.alternate, e);
            if (n !== null) {
              n.flags &= 32767, Te = n;
              return;
            }
            if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
              Te = e;
              return;
            }
            Te = e = n;
          } while (e !== null);
          et = 6, Te = null;
        }
        function Lh(e, t, n, a, l, i, c, y, A) {
          e.cancelPendingCommit = null;
          do
            Qu();
          while (ht !== 0);
          if ((ze & 6) !== 0)
            throw Error(o(327));
          if (t !== null) {
            if (t === e.current)
              throw Error(o(177));
            if (i = t.lanes | t.childLanes, i |= Gr, jr(e, n, i, c, y, A), e === Ge && (Te = Ge = null, Ae = 0), fi = t, Ma = e, oa = n, $o = i, Po = l, Oh = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Yg(Ka, function() {
              return Vh(), null;
            })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
              a = X.T, X.T = null, l = I.p, I.p = 2, c = ze, ze |= 4;
              try {
                jg(e, t, n);
              } finally {
                ze = c, I.p = l, X.T = a;
              }
            }
            ht = 1, Yh(), Xh(), Gh();
          }
        }
        function Yh() {
          if (ht === 1) {
            ht = 0;
            var e = Ma, t = fi, n = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || n) {
              n = X.T, X.T = null;
              var a = I.p;
              I.p = 2;
              var l = ze;
              ze |= 4;
              try {
                xh(t, e);
                var i = hc, c = wf(e.containerInfo), y = i.focusedElem, A = i.selectionRange;
                if (c !== y && y && y.ownerDocument && Af(y.ownerDocument.documentElement, y)) {
                  if (A !== null && qr(y)) {
                    var D = A.start, G = A.end;
                    if (G === void 0 && (G = D), "selectionStart" in y)
                      y.selectionStart = D, y.selectionEnd = Math.min(G, y.value.length);
                    else {
                      var k = y.ownerDocument || document, q = k && k.defaultView || window;
                      if (q.getSelection) {
                        var L = q.getSelection(), ne = y.textContent.length, oe = Math.min(A.start, ne), Xe = A.end === void 0 ? oe : Math.min(A.end, ne);
                        !L.extend && oe > Xe && (c = Xe, Xe = oe, oe = c);
                        var R = Ef(y, oe), O = Ef(y, Xe);
                        if (R && O && (L.rangeCount !== 1 || L.anchorNode !== R.node || L.anchorOffset !== R.offset || L.focusNode !== O.node || L.focusOffset !== O.offset)) {
                          var M = k.createRange();
                          M.setStart(R.node, R.offset), L.removeAllRanges(), oe > Xe ? (L.addRange(M), L.extend(O.node, O.offset)) : (M.setEnd(O.node, O.offset), L.addRange(M));
                        }
                      }
                    }
                  }
                  for (k = [], L = y; L = L.parentNode; )
                    L.nodeType === 1 && k.push({ element: L, left: L.scrollLeft, top: L.scrollTop });
                  for (typeof y.focus == "function" && y.focus(), y = 0; y < k.length; y++) {
                    var V = k[y];
                    V.element.scrollLeft = V.left, V.element.scrollTop = V.top;
                  }
                }
                tr = !!dc, hc = dc = null;
              } finally {
                ze = l, I.p = a, X.T = n;
              }
            }
            e.current = t, ht = 2;
          }
        }
        function Xh() {
          if (ht === 2) {
            ht = 0;
            var e = Ma, t = fi, n = (t.flags & 8772) !== 0;
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
            ht = 3;
          }
        }
        function Gh() {
          if (ht === 4 || ht === 3) {
            ht = 0, Ms();
            var e = Ma, t = fi, n = oa, a = Oh;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? ht = 5 : (ht = 0, fi = Ma = null, Qh(e, e.pendingLanes));
            var l = e.pendingLanes;
            if (l === 0 && (Ua = null), Ri(n), t = t.stateNode, jt && typeof jt.onCommitFiberRoot == "function")
              try {
                jt.onCommitFiberRoot(Ja, t, void 0, (t.current.flags & 128) === 128);
              } catch (A) {
              }
            if (a !== null) {
              t = X.T, l = I.p, I.p = 2, X.T = null;
              try {
                for (var i = e.onRecoverableError, c = 0; c < a.length; c++) {
                  var y = a[c];
                  i(y.value, { componentStack: y.stack });
                }
              } finally {
                X.T = t, I.p = l;
              }
            }
            (oa & 3) !== 0 && Qu(), Hn(e), l = e.pendingLanes, (n & 261930) !== 0 && (l & 42) !== 0 ? e === Io ? ms++ : (ms = 0, Io = e) : ms = 0, ps(0);
          }
        }
        function Qh(e, t) {
          (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Fi(t)));
        }
        function Qu() {
          return Yh(), Xh(), Gh(), Vh();
        }
        function Vh() {
          if (ht !== 5)
            return false;
          var e = Ma, t = $o;
          $o = 0;
          var n = Ri(oa), a = X.T, l = I.p;
          try {
            I.p = 32 > n ? 32 : n, X.T = null, n = Po, Po = null;
            var i = Ma, c = oa;
            if (ht = 0, fi = Ma = null, oa = 0, (ze & 6) !== 0)
              throw Error(o(331));
            var y = ze;
            if (ze |= 4, Ah(i.current), _h(i, i.current, c, n), ze = y, ps(0, false), jt && typeof jt.onPostCommitFiberRoot == "function")
              try {
                jt.onPostCommitFiberRoot(Ja, i);
              } catch (A) {
              }
            return true;
          } finally {
            I.p = l, X.T = a, Qh(e, t);
          }
        }
        function kh(e, t, n) {
          t = un(n, t), t = Co(e.stateNode, t, 2), e = Na(e, t, 2), e !== null && (Xn(e, 2), Hn(e));
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
                if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Ua === null || !Ua.has(a))) {
                  e = un(n, e), n = Zd(2), a = Na(t, n, 2), a !== null && (Kd(n, a, t, e), Xn(a, 2), Hn(a));
                  break;
                }
              }
              t = t.return;
            }
        }
        function nc(e, t, n) {
          var a = e.pingCache;
          if (a === null) {
            a = e.pingCache = new zg();
            var l = /* @__PURE__ */ new Set();
            a.set(t, l);
          } else
            l = a.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), a.set(t, l));
          l.has(n) || (Jo = true, l.add(n), e = qg.bind(null, e, t, n), t.then(e, e));
        }
        function qg(e, t, n) {
          var a = e.pingCache;
          a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Ge === e && (Ae & n) === n && (et === 4 || et === 3 && (Ae & 62914560) === Ae && 300 > Ot() - qu ? (ze & 2) === 0 && di(e, 0) : Fo |= n, ci === Ae && (ci = 0)), Hn(e);
        }
        function Zh(e, t) {
          t === 0 && (t = Hs()), e = rl(e, t), e !== null && (Xn(e, t), Hn(e));
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
              throw Error(o(314));
          }
          a !== null && a.delete(t), Zh(e, n);
        }
        function Yg(e, t) {
          return wi(e, t);
        }
        var Vu = null, mi = null, ac = false, ku = false, lc = false, Ba = 0;
        function Hn(e) {
          e !== mi && e.next === null && (mi === null ? Vu = mi = e : mi = mi.next = e), ku = true, ac || (ac = true, Gg());
        }
        function ps(e, t) {
          if (!lc && ku) {
            lc = true;
            do
              for (var n = false, a = Vu; a !== null; ) {
                if (e !== 0) {
                  var l = a.pendingLanes;
                  if (l === 0)
                    var i = 0;
                  else {
                    var c = a.suspendedLanes, y = a.pingedLanes;
                    i = (1 << 31 - wt(42 | e) + 1) - 1, i &= l & ~(c & ~y), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
                  }
                  i !== 0 && (n = true, Wh(a, i));
                } else
                  i = Ae, i = jl(a, a === Ge ? i : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (i & 3) === 0 || $a(a, i) || (n = true, Wh(a, i));
                a = a.next;
              }
            while (n);
            lc = false;
          }
        }
        function Xg() {
          Kh();
        }
        function Kh() {
          ku = ac = false;
          var e = 0;
          Ba !== 0 && Pg() && (e = Ba);
          for (var t = Ot(), n = null, a = Vu; a !== null; ) {
            var l = a.next, i = Jh(a, t);
            i === 0 ? (a.next = null, n === null ? Vu = l : n.next = l, l === null && (mi = n)) : (n = a, (e !== 0 || (i & 3) !== 0) && (ku = true)), a = l;
          }
          ht !== 0 && ht !== 5 || ps(e), Ba !== 0 && (Ba = 0);
        }
        function Jh(e, t) {
          for (var n = e.suspendedLanes, a = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
            var c = 31 - wt(i), y = 1 << c, A = l[c];
            A === -1 ? ((y & n) === 0 || (y & a) !== 0) && (l[c] = Or(y, t)) : A <= t && (e.expiredLanes |= y), i &= ~y;
          }
          if (t = Ge, n = Ae, n = jl(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a = e.callbackNode, n === 0 || e === t && (Be === 2 || Be === 9) || e.cancelPendingCommit !== null)
            return a !== null && a !== null && Ni(a), e.callbackNode = null, e.callbackPriority = 0;
          if ((n & 3) === 0 || $a(e, n)) {
            if (t = n & -n, t === e.callbackPriority)
              return t;
            switch (a !== null && Ni(a), Ri(n)) {
              case 2:
              case 8:
                n = Oi;
                break;
              case 32:
                n = Ka;
                break;
              case 268435456:
                n = Nl;
                break;
              default:
                n = Ka;
            }
            return a = Fh.bind(null, e), n = wi(n, a), e.callbackPriority = t, e.callbackNode = n, t;
          }
          return a !== null && a !== null && Ni(a), e.callbackPriority = 2, e.callbackNode = null, 2;
        }
        function Fh(e, t) {
          if (ht !== 0 && ht !== 5)
            return e.callbackNode = null, e.callbackPriority = 0, null;
          var n = e.callbackNode;
          if (Qu() && e.callbackNode !== n)
            return null;
          var a = Ae;
          return a = jl(e, e === Ge ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a === 0 ? null : (Rh(e, a, t), Jh(e, Ot()), e.callbackNode != null && e.callbackNode === n ? Fh.bind(null, e) : null);
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
        function ic() {
          if (Ba === 0) {
            var e = Il;
            e === 0 && (e = Fa, Fa <<= 1, (Fa & 261888) === 0 && (Fa = 256)), Ba = e;
          }
          return Ba;
        }
        function $h(e) {
          return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Ul("" + e);
        }
        function Ph(e, t) {
          var n = t.ownerDocument.createElement("input");
          return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
        }
        function Qg(e, t, n, a, l) {
          if (t === "submit" && n && n.stateNode === l) {
            var i = $h((l[pt] || null).action), c = a.submitter;
            c && (t = (t = c[pt] || null) ? $h(t.formAction) : c.getAttribute("formAction"), t !== null && (i = t, c = null));
            var y = new al("action", "action", null, a, l);
            e.push({ event: y, listeners: [{ instance: null, listener: function() {
              if (a.defaultPrevented) {
                if (Ba !== 0) {
                  var A = c ? Ph(l, c) : new FormData(l);
                  Ao(n, { pending: true, data: A, method: l.method, action: i }, null, A);
                }
              } else
                typeof i == "function" && (y.preventDefault(), A = c ? Ph(l, c) : new FormData(l), Ao(n, { pending: true, data: A, method: l.method, action: i }, i, A));
            }, currentTarget: l }] });
          }
        }
        for (var sc = 0; sc < Xr.length; sc++) {
          var uc = Xr[sc], Vg = uc.toLowerCase(), kg = uc[0].toUpperCase() + uc.slice(1);
          yn(Vg, "on" + kg);
        }
        yn(jf, "onAnimationEnd"), yn(Rf, "onAnimationIteration"), yn(Cf, "onAnimationStart"), yn("dblclick", "onDoubleClick"), yn("focusin", "onFocus"), yn("focusout", "onBlur"), yn(ug, "onTransitionRun"), yn(rg, "onTransitionStart"), yn(og, "onTransitionCancel"), yn(zf, "onTransitionEnd"), Gt("onMouseEnter", ["mouseout", "mouseover"]), Gt("onMouseLeave", ["mouseout", "mouseover"]), Gt("onPointerEnter", ["pointerout", "pointerover"]), Gt("onPointerLeave", ["pointerout", "pointerover"]), Cn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Cn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Cn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Cn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Cn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Cn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var gs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Zg = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gs));
        function Ih(e, t) {
          t = (t & 4) !== 0;
          for (var n = 0; n < e.length; n++) {
            var a = e[n], l = a.event;
            a = a.listeners;
            e: {
              var i = void 0;
              if (t)
                for (var c = a.length - 1; 0 <= c; c--) {
                  var y = a[c], A = y.instance, D = y.currentTarget;
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
                for (c = 0; c < a.length; c++) {
                  if (y = a[c], A = y.instance, D = y.currentTarget, y = y.listener, A !== i && l.isPropagationStopped())
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
        function Ee(e, t) {
          var n = t[Ci];
          n === void 0 && (n = t[Ci] = /* @__PURE__ */ new Set());
          var a = e + "__bubble";
          n.has(a) || (em(t, e, 2, false), n.add(a));
        }
        function rc(e, t, n) {
          var a = 0;
          t && (a |= 4), em(n, e, a, t);
        }
        var Zu = "_reactListening" + Math.random().toString(36).slice(2);
        function oc(e) {
          if (!e[Zu]) {
            e[Zu] = true, zt.forEach(function(n) {
              n !== "selectionchange" && (Zg.has(n) || rc(n, false, e), rc(n, true, e));
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Zu] || (t[Zu] = true, rc("selectionchange", false, t));
          }
        }
        function em(e, t, n, a) {
          switch (jm(t)) {
            case 2:
              var l = x0;
              break;
            case 8:
              l = S0;
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
                      var A = c.tag;
                      if ((A === 3 || A === 4) && c.stateNode.containerInfo === l)
                        return;
                      c = c.return;
                    }
                  for (; y !== null; ) {
                    if (c = pa(y), c === null)
                      return;
                    if (A = c.tag, A === 5 || A === 6 || A === 26 || A === 27) {
                      a = i = c;
                      continue e;
                    }
                    y = y.parentNode;
                  }
                }
                a = a.return;
              }
          Li(function() {
            var D = i, G = Ml(n), k = [];
            e: {
              var q = Uf.get(e);
              if (q !== void 0) {
                var L = al, ne = e;
                switch (e) {
                  case "keypress":
                    if (Hl(n) === 0)
                      break e;
                  case "keydown":
                  case "keyup":
                    L = eu;
                    break;
                  case "focusin":
                    ne = "focus", L = F;
                    break;
                  case "focusout":
                    ne = "blur", L = F;
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
                    L = z;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    L = J;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    L = tu;
                    break;
                  case jf:
                  case Rf:
                  case Cf:
                    L = ce;
                    break;
                  case zf:
                    L = Gl;
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
                    L = an;
                }
                var oe = (t & 4) !== 0, Xe = !oe && (e === "scroll" || e === "scrollend"), R = oe ? q !== null ? q + "Capture" : null : q;
                oe = [];
                for (var O = D, M; O !== null; ) {
                  var V = O;
                  if (M = V.stateNode, V = V.tag, V !== 5 && V !== 26 && V !== 27 || M === null || R === null || (V = zn(O, R), V != null && oe.push(ys(O, V, M))), Xe)
                    break;
                  O = O.return;
                }
                0 < oe.length && (q = new L(q, ne, null, n, G), k.push({ event: q, listeners: oe }));
              }
            }
            if ((t & 7) === 0) {
              e: {
                if (q = e === "mouseover" || e === "pointerover", L = e === "mouseout" || e === "pointerout", q && n !== nl && (ne = n.relatedTarget || n.fromElement) && (pa(ne) || ne[On]))
                  break e;
                if ((L || q) && (q = G.window === G ? G : (q = G.ownerDocument) ? q.defaultView || q.parentWindow : window, L ? (ne = n.relatedTarget || n.toElement, L = D, ne = ne ? pa(ne) : null, ne !== null && (Xe = b(ne), oe = ne.tag, ne !== Xe || oe !== 5 && oe !== 27 && oe !== 6) && (ne = null)) : (L = null, ne = D), L !== ne)) {
                  if (oe = z, V = "onMouseLeave", R = "onMouseEnter", O = "mouse", (e === "pointerout" || e === "pointerover") && (oe = Yl, V = "onPointerLeave", R = "onPointerEnter", O = "pointer"), Xe = L == null ? q : Ia(L), M = ne == null ? q : Ia(ne), q = new oe(V, O + "leave", L, n, G), q.target = Xe, q.relatedTarget = M, V = null, pa(G) === D && (oe = new oe(R, O + "enter", ne, n, G), oe.target = M, oe.relatedTarget = Xe, V = oe), Xe = V, L && ne)
                    t: {
                      for (oe = Kg, R = L, O = ne, M = 0, V = R; V; V = oe(V))
                        M++;
                      V = 0;
                      for (var ue = O; ue; ue = oe(ue))
                        V++;
                      for (; 0 < M - V; )
                        R = oe(R), M--;
                      for (; 0 < V - M; )
                        O = oe(O), V--;
                      for (; M--; ) {
                        if (R === O || O !== null && R === O.alternate) {
                          oe = R;
                          break t;
                        }
                        R = oe(R), O = oe(O);
                      }
                      oe = null;
                    }
                  else
                    oe = null;
                  L !== null && tm(k, q, L, oe, false), ne !== null && Xe !== null && tm(k, Xe, ne, oe, true);
                }
              }
              e: {
                if (q = D ? Ia(D) : window, L = q.nodeName && q.nodeName.toLowerCase(), L === "select" || L === "input" && q.type === "file")
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
              switch (le = D ? Ia(D) : window, e) {
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
              var xe;
              if (ln)
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
                Vl ? il(e, n) && (we = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (we = "onCompositionStart");
              we && (gn && n.locale !== "ko" && (Vl || we !== "onCompositionStart" ? we === "onCompositionEnd" && Vl && (xe = ql()) : (dt = G, va = "value" in dt ? dt.value : dt.textContent, Vl = true)), le = Ku(D, we), 0 < le.length && (we = new te(we, e, null, n, G), k.push({ event: we, listeners: le }), xe ? we.data = xe : (xe = Gi(n), xe !== null && (we.data = xe)))), (xe = Mr ? $p(e, n) : Pp(e, n)) && (we = Ku(D, "onBeforeInput"), 0 < we.length && (le = new te("onBeforeInput", "beforeinput", null, n, G), k.push({ event: le, listeners: we }), le.data = xe)), Qg(k, e, D, n, G);
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
            if (l = l.tag, l !== 5 && l !== 26 && l !== 27 || i === null || (l = zn(e, n), l != null && a.unshift(ys(e, l, i)), l = zn(e, t), l != null && a.push(ys(e, l, i))), e.tag === 3)
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
          for (var i = t._reactName, c = []; n !== null && n !== a; ) {
            var y = n, A = y.alternate, D = y.stateNode;
            if (y = y.tag, A !== null && A === a)
              break;
            y !== 5 && y !== 26 && y !== 27 || D === null || (A = D, l ? (D = zn(n, i), D != null && c.unshift(ys(n, D, A))) : l || (D = zn(n, i), D != null && c.push(ys(n, D, A)))), n = n.return;
          }
          c.length !== 0 && e.push({ event: t, listeners: c });
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
              typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Vn(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Vn(e, "" + a);
              break;
            case "className":
              el(e, "class", a);
              break;
            case "tabIndex":
              el(e, "tabindex", a);
              break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
              el(e, n, a);
              break;
            case "style":
              Hi(e, a, i);
              break;
            case "data":
              if (t !== "object") {
                el(e, "data", a);
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
              a = Ul("" + a), e.setAttribute(n, a);
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
              a = Ul("" + a), e.setAttribute(n, a);
              break;
            case "onClick":
              a != null && (e.onclick = It);
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
              n = Ul("" + a), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
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
              (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Ps.get(n) || n, Gn(e, n, a));
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
              a != null && Ee("scroll", e);
              break;
            case "onScrollEnd":
              a != null && Ee("scrollend", e);
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
              if (!Rl.hasOwnProperty(n))
                e: {
                  if (n[0] === "o" && n[1] === "n" && (l = n.endsWith("Capture"), t = n.slice(2, l ? n.length - 7 : void 0), i = e[pt] || null, i = i != null ? i[n] : null, typeof i == "function" && e.removeEventListener(t, i, l), typeof a == "function")) {
                    typeof i != "function" && i !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, a, l);
                    break e;
                  }
                  n in e ? e[n] = a : a === true ? e.setAttribute(n, "") : Gn(e, n, a);
                }
          }
        }
        function Et(e, t, n) {
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
                        Ye(e, t, i, c, n, null);
                    }
                }
              l && Ye(e, t, "srcSet", n.srcSet, n, null), a && Ye(e, t, "src", n.src, n, null);
              return;
            case "input":
              Ee("invalid", e);
              var y = i = c = l = null, A = null, D = null;
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
                          throw Error(o(137, t));
                        break;
                      default:
                        Ye(e, t, a, G, n, null);
                    }
                }
              Fs(e, i, y, A, D, c, l, false);
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
                      Ye(e, t, l, y, n, null);
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
                      Ye(e, t, c, y, n, null);
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
              Ee("beforetoggle", e), Ee("toggle", e), Ee("cancel", e), Ee("close", e);
              break;
            case "iframe":
            case "object":
              Ee("load", e);
              break;
            case "video":
            case "audio":
              for (a = 0; a < gs.length; a++)
                Ee(gs[a], e);
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
                      Ye(e, t, D, a, n, null);
                  }
              return;
            default:
              if (zl(t)) {
                for (G in n)
                  n.hasOwnProperty(G) && (a = n[G], a !== void 0 && fc(e, t, G, a, n, void 0));
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
              var l = null, i = null, c = null, y = null, A = null, D = null, G = null;
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
                      L !== k && Ye(e, t, q, L, a, k);
                  }
              }
              Di(e, c, y, A, D, G, i, l);
              return;
            case "select":
              L = c = y = q = null;
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
                      c = i;
                    default:
                      i !== A && Ye(e, t, l, i, a, A);
                  }
              t = y, n = c, a = L, q != null ? ya(e, !!n, q, false) : !!a != !!n && (t != null ? ya(e, !!n, t, true) : ya(e, !!n, n ? [] : "", false));
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
              for (c in a)
                if (l = a[c], i = n[c], a.hasOwnProperty(c) && (l != null || i != null))
                  switch (c) {
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
                      l !== i && Ye(e, t, c, l, a, i);
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
              for (var oe in n)
                q = n[oe], n.hasOwnProperty(oe) && q != null && !a.hasOwnProperty(oe) && Ye(e, t, oe, null, a, q);
              for (D in a)
                if (q = a[D], L = n[D], a.hasOwnProperty(D) && q !== L && (q != null || L != null))
                  switch (D) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                      if (q != null)
                        throw Error(o(137, t));
                      break;
                    default:
                      Ye(e, t, D, q, a, L);
                  }
              return;
            default:
              if (zl(t)) {
                for (var Xe in n)
                  q = n[Xe], n.hasOwnProperty(Xe) && q !== void 0 && !a.hasOwnProperty(Xe) && fc(e, t, Xe, void 0, a, q);
                for (G in a)
                  q = a[G], L = n[G], !a.hasOwnProperty(G) || q === L || q === void 0 && L === void 0 || fc(e, t, G, q, a, L);
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
              var l = n[a], i = l.transferSize, c = l.initiatorType, y = l.duration;
              if (i && y && lm(c)) {
                for (c = 0, y = l.responseEnd, a += 1; a < n.length; a++) {
                  var A = n[a], D = A.startTime;
                  if (D > y)
                    break;
                  var G = A.transferSize, k = A.initiatorType;
                  G && lm(k) && (A = A.responseEnd, c += G * (A < y ? 1 : (y - D) / (A - D)));
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
        var dc = null, hc = null;
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
        function mc(e, t) {
          return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
        }
        var pc = null;
        function Pg() {
          var e = window.event;
          return e && e.type === "popstate" ? e === pc ? false : (pc = e, true) : (pc = null, false);
        }
        var um = typeof setTimeout == "function" ? setTimeout : void 0, Ig = typeof clearTimeout == "function" ? clearTimeout : void 0, rm = typeof Promise == "function" ? Promise : void 0, e0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof rm != "undefined" ? function(e) {
          return rm.resolve(null).then(e).catch(t0);
        } : um;
        function t0(e) {
          setTimeout(function() {
            throw e;
          });
        }
        function qa(e) {
          return e === "head";
        }
        function om(e, t) {
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
                  var c = i.nextSibling, y = i.nodeName;
                  i[jn] || y === "SCRIPT" || y === "STYLE" || y === "LINK" && i.rel.toLowerCase() === "stylesheet" || n.removeChild(i), i = c;
                }
              } else
                n === "body" && bs(e.ownerDocument.body);
            n = l;
          } while (n);
          bi(t);
        }
        function cm(e, t) {
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
                gc(n), zi(n);
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
              if (!e[jn])
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
            if (e = dn(e.nextSibling), e === null)
              break;
          }
          return null;
        }
        function a0(e, t, n) {
          if (t === "")
            return null;
          for (; e.nodeType !== 3; )
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = dn(e.nextSibling), e === null))
              return null;
          return e;
        }
        function fm(e, t) {
          for (; e.nodeType !== 8; )
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = dn(e.nextSibling), e === null))
              return null;
          return e;
        }
        function yc(e) {
          return e.data === "$?" || e.data === "$~";
        }
        function bc(e) {
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
        function dn(e) {
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
        function dm(e) {
          e = e.nextSibling;
          for (var t = 0; e; ) {
            if (e.nodeType === 8) {
              var n = e.data;
              if (n === "/$" || n === "/&") {
                if (t === 0)
                  return dn(e.nextSibling);
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
        function bs(e) {
          for (var t = e.attributes; t.length; )
            e.removeAttributeNode(t[0]);
          zi(e);
        }
        var hn = /* @__PURE__ */ new Map(), pm = /* @__PURE__ */ new Set();
        function Fu(e) {
          return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
        }
        var ca = I.d;
        I.d = { f: i0, r: s0, D: u0, C: r0, L: o0, m: c0, X: d0, S: f0, M: h0 };
        function i0() {
          var e = ca.f(), t = Yu();
          return e || t;
        }
        function s0(e) {
          var t = Rn(e);
          t !== null && t.tag === 5 && t.type === "form" ? zd(t) : ca.r(e);
        }
        var pi = typeof document == "undefined" ? null : document;
        function gm(e, t, n) {
          var a = pi;
          if (a && typeof t == "string" && t) {
            var l = Rt(t);
            l = 'link[rel="' + e + '"][href="' + l + '"]', typeof n == "string" && (l += '[crossorigin="' + n + '"]'), pm.has(l) || (pm.add(l), e = { rel: e, crossOrigin: n, href: t }, a.querySelector(l) === null && (t = a.createElement("link"), Et(t, "link", e), $e(t), a.head.appendChild(t)));
          }
        }
        function u0(e) {
          ca.D(e), gm("dns-prefetch", e, null);
        }
        function r0(e, t) {
          ca.C(e, t), gm("preconnect", e, t);
        }
        function o0(e, t, n) {
          ca.L(e, t, n);
          var a = pi;
          if (a && e && t) {
            var l = 'link[rel="preload"][as="' + Rt(t) + '"]';
            t === "image" && n && n.imageSrcSet ? (l += '[imagesrcset="' + Rt(n.imageSrcSet) + '"]', typeof n.imageSizes == "string" && (l += '[imagesizes="' + Rt(n.imageSizes) + '"]')) : l += '[href="' + Rt(e) + '"]';
            var i = l;
            switch (t) {
              case "style":
                i = gi(e);
                break;
              case "script":
                i = yi(e);
            }
            hn.has(i) || (e = j({ rel: "preload", href: t === "image" && n && n.imageSrcSet ? void 0 : e, as: t }, n), hn.set(i, e), a.querySelector(l) !== null || t === "style" && a.querySelector(vs(i)) || t === "script" && a.querySelector(xs(i)) || (t = a.createElement("link"), Et(t, "link", e), $e(t), a.head.appendChild(t)));
          }
        }
        function c0(e, t) {
          ca.m(e, t);
          var n = pi;
          if (n && e) {
            var a = t && typeof t.as == "string" ? t.as : "script", l = 'link[rel="modulepreload"][as="' + Rt(a) + '"][href="' + Rt(e) + '"]', i = l;
            switch (a) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                i = yi(e);
            }
            if (!hn.has(i) && (e = j({ rel: "modulepreload", href: e }, t), hn.set(i, e), n.querySelector(l) === null)) {
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
              a = n.createElement("link"), Et(a, "link", e), $e(a), n.head.appendChild(a);
            }
          }
        }
        function f0(e, t, n) {
          ca.S(e, t, n);
          var a = pi;
          if (a && e) {
            var l = ga(a).hoistableStyles, i = gi(e);
            t = t || "default";
            var c = l.get(i);
            if (!c) {
              var y = { loading: 0, preload: null };
              if (c = a.querySelector(vs(i)))
                y.loading = 5;
              else {
                e = j({ rel: "stylesheet", href: e, "data-precedence": t }, n), (n = hn.get(i)) && xc(e, n);
                var A = c = a.createElement("link");
                $e(A), Et(A, "link", e), A._p = new Promise(function(D, G) {
                  A.onload = D, A.onerror = G;
                }), A.addEventListener("load", function() {
                  y.loading |= 1;
                }), A.addEventListener("error", function() {
                  y.loading |= 2;
                }), y.loading |= 4, Wu(c, t, a);
              }
              c = { type: "stylesheet", instance: c, count: 1, state: y }, l.set(i, c);
            }
          }
        }
        function d0(e, t) {
          ca.X(e, t);
          var n = pi;
          if (n && e) {
            var a = ga(n).hoistableScripts, l = yi(e), i = a.get(l);
            i || (i = n.querySelector(xs(l)), i || (e = j({ src: e, async: true }, t), (t = hn.get(l)) && Sc(e, t), i = n.createElement("script"), $e(i), Et(i, "link", e), n.head.appendChild(i)), i = { type: "script", instance: i, count: 1, state: null }, a.set(l, i));
          }
        }
        function h0(e, t) {
          ca.M(e, t);
          var n = pi;
          if (n && e) {
            var a = ga(n).hoistableScripts, l = yi(e), i = a.get(l);
            i || (i = n.querySelector(xs(l)), i || (e = j({ src: e, async: true, type: "module" }, t), (t = hn.get(l)) && Sc(e, t), i = n.createElement("script"), $e(i), Et(i, "link", e), n.head.appendChild(i)), i = { type: "script", instance: i, count: 1, state: null }, a.set(l, i));
          }
        }
        function ym(e, t, n, a) {
          var l = (l = re.current) ? Fu(l) : null;
          if (!l)
            throw Error(o(446));
          switch (e) {
            case "meta":
            case "title":
              return null;
            case "style":
              return typeof n.precedence == "string" && typeof n.href == "string" ? (t = gi(n.href), n = ga(l).hoistableStyles, a = n.get(t), a || (a = { type: "style", instance: null, count: 0, state: null }, n.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
            case "link":
              if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
                e = gi(n.href);
                var i = ga(l).hoistableStyles, c = i.get(e);
                if (c || (l = l.ownerDocument || l, c = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, i.set(e, c), (i = l.querySelector(vs(e))) && !i._p && (c.instance = i, c.state.loading = 5), hn.has(e) || (n = { rel: "preload", as: "style", href: n.href, crossOrigin: n.crossOrigin, integrity: n.integrity, media: n.media, hrefLang: n.hrefLang, referrerPolicy: n.referrerPolicy }, hn.set(e, n), i || m0(l, e, n, c.state))), t && a === null)
                  throw Error(o(528, ""));
                return c;
              }
              if (t && a !== null)
                throw Error(o(529, ""));
              return null;
            case "script":
              return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = yi(n), n = ga(l).hoistableScripts, a = n.get(t), a || (a = { type: "script", instance: null, count: 0, state: null }, n.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
            default:
              throw Error(o(444, e));
          }
        }
        function gi(e) {
          return 'href="' + Rt(e) + '"';
        }
        function vs(e) {
          return 'link[rel="stylesheet"][' + e + "]";
        }
        function bm(e) {
          return j({}, e, { "data-precedence": e.precedence, precedence: null });
        }
        function m0(e, t, n, a) {
          e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
            return a.loading |= 1;
          }), t.addEventListener("error", function() {
            return a.loading |= 2;
          }), Et(t, "link", n), $e(t), e.head.appendChild(t));
        }
        function yi(e) {
          return '[src="' + Rt(e) + '"]';
        }
        function xs(e) {
          return "script[async]" + e;
        }
        function vm(e, t, n) {
          if (t.count++, t.instance === null)
            switch (t.type) {
              case "style":
                var a = e.querySelector('style[data-href~="' + Rt(n.href) + '"]');
                if (a)
                  return t.instance = a, $e(a), a;
                var l = j({}, n, { "data-href": n.href, "data-precedence": n.precedence, href: null, precedence: null });
                return a = (e.ownerDocument || e).createElement("style"), $e(a), Et(a, "style", l), Wu(a, n.precedence, e), t.instance = a;
              case "stylesheet":
                l = gi(n.href);
                var i = e.querySelector(vs(l));
                if (i)
                  return t.state.loading |= 4, t.instance = i, $e(i), i;
                a = bm(n), (l = hn.get(l)) && xc(a, l), i = (e.ownerDocument || e).createElement("link"), $e(i);
                var c = i;
                return c._p = new Promise(function(y, A) {
                  c.onload = y, c.onerror = A;
                }), Et(i, "link", a), t.state.loading |= 4, Wu(i, n.precedence, e), t.instance = i;
              case "script":
                return i = yi(n.src), (l = e.querySelector(xs(i))) ? (t.instance = l, $e(l), l) : (a = n, (l = hn.get(i)) && (a = j({}, n), Sc(a, l)), e = e.ownerDocument || e, l = e.createElement("script"), $e(l), Et(l, "link", a), e.head.appendChild(l), t.instance = l);
              case "void":
                return null;
              default:
                throw Error(o(443, t.type));
            }
          else
            t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Wu(a, n.precedence, e));
          return t.instance;
        }
        function Wu(e, t, n) {
          for (var a = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), l = a.length ? a[a.length - 1] : null, i = l, c = 0; c < a.length; c++) {
            var y = a[c];
            if (y.dataset.precedence === t)
              i = y;
            else if (i !== l)
              break;
          }
          i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
        }
        function xc(e, t) {
          e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
        }
        function Sc(e, t) {
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
            if (!(i[jn] || i[ft] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
              var c = i.getAttribute(t) || "";
              c = e + c;
              var y = a.get(c);
              y ? y.push(i) : a.set(c, [i]);
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
                t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Pu.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = i, $e(i);
                return;
              }
              i = t.ownerDocument || t, a = bm(a), (l = hn.get(l)) && xc(a, l), i = i.createElement("link"), $e(i);
              var c = i;
              c._p = new Promise(function(y, A) {
                c.onload = y, c.onerror = A;
              }), Et(i, "link", a), n.instance = i;
            }
            e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Pu.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
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
                var c = l[i];
                (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (n.set(c.dataset.precedence, c), a = c);
              }
              a && n.set(null, a);
            }
            l = t.instance, c = l.getAttribute("data-precedence"), i = n.get(c) || a, i === a && n.set(null, l), n.set(c, l), this.count++, a = Pu.bind(this), l.addEventListener("load", a), l.addEventListener("error", a), i ? i.parentNode.insertBefore(l, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(l, e.firstChild)), t.state.loading |= 4;
          }
        }
        var Ss = { $$typeof: se, Provider: null, Consumer: null, _currentValue: K, _currentValue2: K, _threadCount: 0 };
        function v0(e, t, n, a, l, i, c, y, A) {
          this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Pa(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Pa(0), this.hiddenUpdates = Pa(null), this.identifierPrefix = a, this.onUncaughtError = l, this.onCaughtError = i, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = A, this.incompleteTransitions = /* @__PURE__ */ new Map();
        }
        function Tm(e, t, n, a, l, i, c, y, A, D, G, k) {
          return e = new v0(e, t, n, c, A, D, G, k, y), t = 1, i === true && (t |= 24), i = Vt(3, null, null, t), e.current = i, i.stateNode = e, t = eo(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = { element: a, isDehydrated: n, cache: t }, lo(i), e;
        }
        function Em(e) {
          return e ? (e = Jl, e) : Jl;
        }
        function Am(e, t, n, a, l, i) {
          l = Em(l), a.context === null ? a.context = l : a.pendingContext = l, a = wa(t), a.payload = { element: n }, i = i === void 0 ? null : i, i !== null && (a.callback = i), n = Na(e, a, t), n !== null && (Ht(n, e, t), Ii(n, e, t));
        }
        function wm(e, t) {
          if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t;
          }
        }
        function Tc(e, t) {
          wm(e, t), (e = e.alternate) && wm(e, t);
        }
        function Nm(e) {
          if (e.tag === 13 || e.tag === 31) {
            var t = rl(e, 67108864);
            t !== null && Ht(t, e, 67108864), Tc(e, 67108864);
          }
        }
        function Om(e) {
          if (e.tag === 13 || e.tag === 31) {
            var t = Ft();
            t = it(t);
            var n = rl(e, t);
            n !== null && Ht(n, e, t), Tc(e, t);
          }
        }
        var tr = true;
        function x0(e, t, n, a) {
          var l = X.T;
          X.T = null;
          var i = I.p;
          try {
            I.p = 2, Ec(e, t, n, a);
          } finally {
            I.p = i, X.T = l;
          }
        }
        function S0(e, t, n, a) {
          var l = X.T;
          X.T = null;
          var i = I.p;
          try {
            I.p = 8, Ec(e, t, n, a);
          } finally {
            I.p = i, X.T = l;
          }
        }
        function Ec(e, t, n, a) {
          if (tr) {
            var l = Ac(a);
            if (l === null)
              cc(e, t, a, nr, n), Rm(e, a);
            else if (T0(l, e, t, n, a))
              a.stopPropagation();
            else if (Rm(e, a), t & 4 && -1 < _0.indexOf(e)) {
              for (; l !== null; ) {
                var i = Rn(l);
                if (i !== null)
                  switch (i.tag) {
                    case 3:
                      if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                        var c = Nn(i.pendingLanes);
                        if (c !== 0) {
                          var y = i;
                          for (y.pendingLanes |= 2, y.entangledLanes |= 2; c; ) {
                            var A = 1 << 31 - wt(c);
                            y.entanglements[1] |= A, c &= ~A;
                          }
                          Hn(i), (ze & 6) === 0 && (Hu = Ot() + 500, ps(0));
                        }
                      }
                      break;
                    case 31:
                    case 13:
                      y = rl(i, 2), y !== null && Ht(y, i, 2), Yu(), Tc(i, 2);
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
          return e = Ml(e), wc(e);
        }
        var nr = null;
        function wc(e) {
          if (nr = null, e = pa(e), e !== null) {
            var t = b(e);
            if (t === null)
              e = null;
            else {
              var n = t.tag;
              if (n === 13) {
                if (e = h(t), e !== null)
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
        function jm(e) {
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
                case Ka:
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
        var Nc = false, Ha = null, La = null, Ya = null, _s = /* @__PURE__ */ new Map(), Ts = /* @__PURE__ */ new Map(), Xa = [], _0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
        function Rm(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Ha = null;
              break;
            case "dragenter":
            case "dragleave":
              La = null;
              break;
            case "mouseover":
            case "mouseout":
              Ya = null;
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
          return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: a, nativeEvent: i, targetContainers: [l] }, t !== null && (t = Rn(t), t !== null && Nm(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
        }
        function T0(e, t, n, a, l) {
          switch (t) {
            case "focusin":
              return Ha = Es(Ha, e, t, n, a, l), true;
            case "dragenter":
              return La = Es(La, e, t, n, a, l), true;
            case "mouseover":
              return Ya = Es(Ya, e, t, n, a, l), true;
            case "pointerover":
              var i = l.pointerId;
              return _s.set(i, Es(_s.get(i) || null, e, t, n, a, l)), true;
            case "gotpointercapture":
              return i = l.pointerId, Ts.set(i, Es(Ts.get(i) || null, e, t, n, a, l)), true;
          }
          return false;
        }
        function Cm(e) {
          var t = pa(e.target);
          if (t !== null) {
            var n = b(t);
            if (n !== null) {
              if (t = n.tag, t === 13) {
                if (t = h(n), t !== null) {
                  e.blockedOn = t, Qs(e.priority, function() {
                    Om(n);
                  });
                  return;
                }
              } else if (t === 31) {
                if (t = v(n), t !== null) {
                  e.blockedOn = t, Qs(e.priority, function() {
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
        function ar(e) {
          if (e.blockedOn !== null)
            return false;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Ac(e.nativeEvent);
            if (n === null) {
              n = e.nativeEvent;
              var a = new n.constructor(n.type, n);
              nl = a, n.target.dispatchEvent(a), nl = null;
            } else
              return t = Rn(n), t !== null && Nm(t), e.blockedOn = n, false;
            t.shift();
          }
          return true;
        }
        function zm(e, t, n) {
          ar(e) && n.delete(t);
        }
        function E0() {
          Nc = false, Ha !== null && ar(Ha) && (Ha = null), La !== null && ar(La) && (La = null), Ya !== null && ar(Ya) && (Ya = null), _s.forEach(zm), Ts.forEach(zm);
        }
        function lr(e, t) {
          e.blockedOn === t && (e.blockedOn = null, Nc || (Nc = true, u.unstable_scheduleCallback(u.unstable_NormalPriority, E0)));
        }
        var ir = null;
        function Um(e) {
          ir !== e && (ir = e, u.unstable_scheduleCallback(u.unstable_NormalPriority, function() {
            ir === e && (ir = null);
            for (var t = 0; t < e.length; t += 3) {
              var n = e[t], a = e[t + 1], l = e[t + 2];
              if (typeof a != "function") {
                if (wc(a || n) === null)
                  continue;
                break;
              }
              var i = Rn(n);
              i !== null && (e.splice(t, 3), t -= 3, Ao(i, { pending: true, data: l, method: n.method, action: a }, a, l));
            }
          }));
        }
        function bi(e) {
          function t(A) {
            return lr(A, e);
          }
          Ha !== null && lr(Ha, e), La !== null && lr(La, e), Ya !== null && lr(Ya, e), _s.forEach(t), Ts.forEach(t);
          for (var n = 0; n < Xa.length; n++) {
            var a = Xa[n];
            a.blockedOn === e && (a.blockedOn = null);
          }
          for (; 0 < Xa.length && (n = Xa[0], n.blockedOn === null); )
            Cm(n), n.blockedOn === null && Xa.shift();
          if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
            for (a = 0; a < n.length; a += 3) {
              var l = n[a], i = n[a + 1], c = l[pt] || null;
              if (typeof i == "function")
                c || Um(n);
              else if (c) {
                var y = null;
                if (i && i.hasAttribute("formAction")) {
                  if (l = i, c = i[pt] || null)
                    y = c.formAction;
                  else if (wc(l) !== null)
                    continue;
                } else
                  y = c.action;
                typeof y == "function" ? n[a + 1] = y : (n.splice(a, 3), a -= 3), Um(n);
              }
            }
        }
        function Mm() {
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
        function Oc(e) {
          this._internalRoot = e;
        }
        sr.prototype.render = Oc.prototype.render = function(e) {
          var t = this._internalRoot;
          if (t === null)
            throw Error(o(409));
          var n = t.current, a = Ft();
          Am(n, a, e, t, null, null);
        }, sr.prototype.unmount = Oc.prototype.unmount = function() {
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
            for (var n = 0; n < Xa.length && t !== 0 && t < Xa[n].priority; n++)
              ;
            Xa.splice(n, 0, e), n === 0 && Cm(e);
          }
        };
        var Dm = s.version;
        if (Dm !== "19.2.0")
          throw Error(o(527, Dm, "19.2.0"));
        I.findDOMNode = function(e) {
          var t = e._reactInternals;
          if (t === void 0)
            throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
          return e = d(t), e = e !== null ? E(e) : null, e = e === null ? null : e.stateNode, e;
        };
        var A0 = { bundleType: 0, version: "19.2.0", rendererPackageName: "react-dom", currentDispatcherRef: X, reconcilerVersion: "19.2.0" };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
          var ur = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ur.isDisabled && ur.supportsFiber)
            try {
              Ja = ur.inject(A0), jt = ur;
            } catch (e) {
            }
        }
        return Ns.createRoot = function(e, t) {
          if (!g(e))
            throw Error(o(299));
          var n = false, a = "", l = Gd, i = Qd, c = Vd;
          return t != null && (t.unstable_strictMode === true && (n = true), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (l = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = Tm(e, 1, false, null, null, n, a, null, l, i, c, Mm), e[On] = t.current, oc(e), new Oc(t);
        }, Ns.hydrateRoot = function(e, t, n) {
          if (!g(e))
            throw Error(o(299));
          var a = false, l = "", i = Gd, c = Qd, y = Vd, A = null;
          return n != null && (n.unstable_strictMode === true && (a = true), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onUncaughtError !== void 0 && (i = n.onUncaughtError), n.onCaughtError !== void 0 && (c = n.onCaughtError), n.onRecoverableError !== void 0 && (y = n.onRecoverableError), n.formState !== void 0 && (A = n.formState)), t = Tm(e, 1, true, t, n != null ? n : null, a, l, A, i, c, y, Mm), t.context = Em(null), n = t.current, a = Ft(), a = it(a), l = wa(a), l.callback = null, Na(n, l, a), n = a, t.current.lanes = n, Xn(t, n), Hn(t), e[On] = t.current, oc(e), new sr(t);
        }, Ns.version = "19.2.0", Ns;
      }
      var $m;
      function by() {
        if ($m)
          return Dc.exports;
        $m = 1;
        function u() {
          if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
            } catch (s) {
              console.error(s);
            }
        }
        return u(), Dc.exports = yy(), Dc.exports;
      }
      var vy = by();
      var xy = Ep(vy);
      var Sy = Object.defineProperty;
      var _y = (u, s, r) => s in u ? Sy(u, s, { enumerable: true, configurable: true, writable: true, value: r }) : u[s] = r;
      var Tl = (u, s, r) => _y(u, typeof s != "symbol" ? s + "" : s, r);
      var Ty = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
      var xi = {};
      var Os = {};
      var xn = {};
      var Pm;
      function Op() {
        if (Pm)
          return xn;
        Pm = 1;
        var u = xn && xn.__assign || function() {
          return u = Object.assign || function(g) {
            for (var b, h = 1, v = arguments.length; h < v; h++) {
              b = arguments[h];
              for (var m in b)
                Object.prototype.hasOwnProperty.call(b, m) && (g[m] = b[m]);
            }
            return g;
          }, u.apply(this, arguments);
        }, s = xn && xn.__awaiter || function(g, b, h, v) {
          function m(d) {
            return d instanceof h ? d : new h(function(E) {
              E(d);
            });
          }
          return new (h || (h = Promise))(function(d, E) {
            function j(U) {
              try {
                w(v.next(U));
              } catch (Z) {
                E(Z);
              }
            }
            function Q(U) {
              try {
                w(v.throw(U));
              } catch (Z) {
                E(Z);
              }
            }
            function w(U) {
              U.done ? d(U.value) : m(U.value).then(j, Q);
            }
            w((v = v.apply(g, b || [])).next());
          });
        }, r = xn && xn.__generator || function(g, b) {
          var h = { label: 0, sent: function() {
            if (d[0] & 1)
              throw d[1];
            return d[1];
          }, trys: [], ops: [] }, v, m, d, E;
          return E = { next: j(0), throw: j(1), return: j(2) }, typeof Symbol == "function" && (E[Symbol.iterator] = function() {
            return this;
          }), E;
          function j(w) {
            return function(U) {
              return Q([w, U]);
            };
          }
          function Q(w) {
            if (v)
              throw new TypeError("Generator is already executing.");
            for (; E && (E = 0, w[0] && (h = 0)), h; )
              try {
                if (v = 1, m && (d = w[0] & 2 ? m.return : w[0] ? m.throw || ((d = m.return) && d.call(m), 0) : m.next) && !(d = d.call(m, w[1])).done)
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
                w = b.call(g, h);
              } catch (U) {
                w = [6, U], m = 0;
              } finally {
                v = d = 0;
              }
            if (w[0] & 5)
              throw w[1];
            return { value: w[0] ? w[1] : void 0, done: true };
          }
        };
        Object.defineProperty(xn, "__esModule", { value: true }), xn.FrappeCall = void 0;
        var o = function() {
          function g(b, h, v, m, d) {
            this.appURL = b, this.axios = h, this.useToken = v != null ? v : false, this.token = m, this.tokenType = d;
          }
          return g.prototype.get = function(b, h) {
            return s(this, void 0, void 0, function() {
              var v;
              return r(this, function(m) {
                return v = new URLSearchParams(), h && Object.entries(h).forEach(function(d) {
                  var E = d[0], j = d[1];
                  if (j != null) {
                    var Q = typeof j == "object" ? JSON.stringify(j) : j;
                    v.set(E, Q);
                  }
                }), [2, this.axios.get("/api/method/".concat(b), { params: v }).then(function(d) {
                  return d.data;
                }).catch(function(d) {
                  var E, j;
                  throw u(u({}, d.response.data), { httpStatus: d.response.status, httpStatusText: d.response.statusText, message: (E = d.response.data.message) !== null && E !== void 0 ? E : "There was an error.", exception: (j = d.response.data.exception) !== null && j !== void 0 ? j : "" });
                })];
              });
            });
          }, g.prototype.post = function(b, h) {
            return s(this, void 0, void 0, function() {
              return r(this, function(v) {
                return [2, this.axios.post("/api/method/".concat(b), u({}, h)).then(function(m) {
                  return m.data;
                }).catch(function(m) {
                  var d, E;
                  throw u(u({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: (d = m.response.data.message) !== null && d !== void 0 ? d : "There was an error.", exception: (E = m.response.data.exception) !== null && E !== void 0 ? E : "" });
                })];
              });
            });
          }, g.prototype.put = function(b, h) {
            return s(this, void 0, void 0, function() {
              return r(this, function(v) {
                return [2, this.axios.put("/api/method/".concat(b), u({}, h)).then(function(m) {
                  return m.data;
                }).catch(function(m) {
                  var d, E;
                  throw u(u({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: (d = m.response.data.message) !== null && d !== void 0 ? d : "There was an error.", exception: (E = m.response.data.exception) !== null && E !== void 0 ? E : "" });
                })];
              });
            });
          }, g.prototype.delete = function(b, h) {
            return s(this, void 0, void 0, function() {
              return r(this, function(v) {
                return [2, this.axios.delete("/api/method/".concat(b), { params: h }).then(function(m) {
                  return m.data;
                }).catch(function(m) {
                  var d, E;
                  throw u(u({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: (d = m.response.data.message) !== null && d !== void 0 ? d : "There was an error.", exception: (E = m.response.data.exception) !== null && E !== void 0 ? E : "" });
                })];
              });
            });
          }, g;
        }();
        return xn.FrappeCall = o, xn;
      }
      var Sn = {};
      var Im;
      function jp() {
        if (Im)
          return Sn;
        Im = 1;
        var u = Sn && Sn.__assign || function() {
          return u = Object.assign || function(g) {
            for (var b, h = 1, v = arguments.length; h < v; h++) {
              b = arguments[h];
              for (var m in b)
                Object.prototype.hasOwnProperty.call(b, m) && (g[m] = b[m]);
            }
            return g;
          }, u.apply(this, arguments);
        }, s = Sn && Sn.__awaiter || function(g, b, h, v) {
          function m(d) {
            return d instanceof h ? d : new h(function(E) {
              E(d);
            });
          }
          return new (h || (h = Promise))(function(d, E) {
            function j(U) {
              try {
                w(v.next(U));
              } catch (Z) {
                E(Z);
              }
            }
            function Q(U) {
              try {
                w(v.throw(U));
              } catch (Z) {
                E(Z);
              }
            }
            function w(U) {
              U.done ? d(U.value) : m(U.value).then(j, Q);
            }
            w((v = v.apply(g, b || [])).next());
          });
        }, r = Sn && Sn.__generator || function(g, b) {
          var h = { label: 0, sent: function() {
            if (d[0] & 1)
              throw d[1];
            return d[1];
          }, trys: [], ops: [] }, v, m, d, E;
          return E = { next: j(0), throw: j(1), return: j(2) }, typeof Symbol == "function" && (E[Symbol.iterator] = function() {
            return this;
          }), E;
          function j(w) {
            return function(U) {
              return Q([w, U]);
            };
          }
          function Q(w) {
            if (v)
              throw new TypeError("Generator is already executing.");
            for (; E && (E = 0, w[0] && (h = 0)), h; )
              try {
                if (v = 1, m && (d = w[0] & 2 ? m.return : w[0] ? m.throw || ((d = m.return) && d.call(m), 0) : m.next) && !(d = d.call(m, w[1])).done)
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
                w = b.call(g, h);
              } catch (U) {
                w = [6, U], m = 0;
              } finally {
                v = d = 0;
              }
            if (w[0] & 5)
              throw w[1];
            return { value: w[0] ? w[1] : void 0, done: true };
          }
        };
        Object.defineProperty(Sn, "__esModule", { value: true }), Sn.FrappeDB = void 0;
        var o = function() {
          function g(b, h, v, m, d) {
            this.appURL = b, this.axios = h, this.useToken = v != null ? v : false, this.token = m, this.tokenType = d;
          }
          return g.prototype.getDoc = function(b, h) {
            return h === void 0 && (h = ""), s(this, void 0, void 0, function() {
              return r(this, function(v) {
                return [2, this.axios.get("/api/resource/".concat(b, "/").concat(encodeURIComponent(h))).then(function(m) {
                  return m.data.data;
                }).catch(function(m) {
                  var d, E;
                  throw u(u({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: "There was an error while fetching the document.", exception: (E = (d = m.response.data.exception) !== null && d !== void 0 ? d : m.response.data.exc_type) !== null && E !== void 0 ? E : "" });
                })];
              });
            });
          }, g.prototype.getDocList = function(b, h) {
            var v;
            return s(this, void 0, void 0, function() {
              var m, d, E, j, Q, w, U, Z, ie, me, Se;
              return r(this, function(se) {
                return m = {}, h && (d = h.fields, E = h.filters, j = h.orFilters, Q = h.orderBy, w = h.limit, U = h.limit_start, Z = h.groupBy, ie = h.asDict, me = ie === void 0 ? true : ie, Se = Q ? "".concat(String(Q == null ? void 0 : Q.field), " ").concat((v = Q == null ? void 0 : Q.order) !== null && v !== void 0 ? v : "asc") : "", m = { fields: d ? JSON.stringify(d) : void 0, filters: E ? JSON.stringify(E) : void 0, or_filters: j ? JSON.stringify(j) : void 0, order_by: Se, group_by: Z, limit: w, limit_start: U, as_dict: me }), [2, this.axios.get("/api/resource/".concat(b), { params: m }).then(function(be) {
                  return be.data.data;
                }).catch(function(be) {
                  var _e, Me;
                  throw u(u({}, be.response.data), { httpStatus: be.response.status, httpStatusText: be.response.statusText, message: "There was an error while fetching the documents.", exception: (Me = (_e = be.response.data.exception) !== null && _e !== void 0 ? _e : be.response.data.exc_type) !== null && Me !== void 0 ? Me : "" });
                })];
              });
            });
          }, g.prototype.createDoc = function(b, h) {
            return s(this, void 0, void 0, function() {
              return r(this, function(v) {
                return [2, this.axios.post("/api/resource/".concat(b), u({}, h)).then(function(m) {
                  return m.data.data;
                }).catch(function(m) {
                  var d, E, j;
                  throw u(u({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: (d = m.response.data.message) !== null && d !== void 0 ? d : "There was an error while creating the document.", exception: (j = (E = m.response.data.exception) !== null && E !== void 0 ? E : m.response.data.exc_type) !== null && j !== void 0 ? j : "" });
                })];
              });
            });
          }, g.prototype.updateDoc = function(b, h, v) {
            return s(this, void 0, void 0, function() {
              return r(this, function(m) {
                return [2, this.axios.put("/api/resource/".concat(b, "/").concat(h && encodeURIComponent(h)), u({}, v)).then(function(d) {
                  return d.data.data;
                }).catch(function(d) {
                  var E, j, Q;
                  throw u(u({}, d.response.data), { httpStatus: d.response.status, httpStatusText: d.response.statusText, message: (E = d.response.data.message) !== null && E !== void 0 ? E : "There was an error while updating the document.", exception: (Q = (j = d.response.data.exception) !== null && j !== void 0 ? j : d.response.data.exc_type) !== null && Q !== void 0 ? Q : "" });
                })];
              });
            });
          }, g.prototype.deleteDoc = function(b, h) {
            return s(this, void 0, void 0, function() {
              return r(this, function(v) {
                return [2, this.axios.delete("/api/resource/".concat(b, "/").concat(h && encodeURIComponent(h))).then(function(m) {
                  return m.data;
                }).catch(function(m) {
                  var d, E;
                  throw u(u({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: "There was an error while deleting the document.", exception: (E = (d = m.response.data.exception) !== null && d !== void 0 ? d : m.response.data.exc_type) !== null && E !== void 0 ? E : "" });
                })];
              });
            });
          }, g.prototype.getCount = function(b, h, v, m) {
            return v === void 0 && (v = false), m === void 0 && (m = false), s(this, void 0, void 0, function() {
              var d;
              return r(this, function(E) {
                return d = { doctype: b, filters: [] }, v && (d.cache = v), m && (d.debug = m), h && (d.filters = h ? JSON.stringify(h) : void 0), [2, this.axios.get("/api/method/frappe.client.get_count", { params: d }).then(function(j) {
                  return j.data.message;
                }).catch(function(j) {
                  var Q, w;
                  throw u(u({}, j.response.data), { httpStatus: j.response.status, httpStatusText: j.response.statusText, message: "There was an error while getting the count.", exception: (w = (Q = j.response.data.exception) !== null && Q !== void 0 ? Q : j.response.data.exc_type) !== null && w !== void 0 ? w : "" });
                })];
              });
            });
          }, g.prototype.getLastDoc = function(b, h) {
            return s(this, void 0, void 0, function() {
              var v, m;
              return r(this, function(d) {
                switch (d.label) {
                  case 0:
                    return v = { orderBy: { field: "creation", order: "desc" } }, h && (v = u(u({}, v), h)), [4, this.getDocList(b, u(u({}, v), { limit: 1, fields: ["name"] }))];
                  case 1:
                    return m = d.sent(), m.length > 0 ? [2, this.getDoc(b, m[0].name)] : [2, {}];
                }
              });
            });
          }, g.prototype.renameDoc = function(b, h, v, m) {
            return m === void 0 && (m = false), s(this, void 0, void 0, function() {
              return r(this, function(d) {
                return [2, this.axios.post("/api/method/frappe.client.rename_doc", { doctype: b, old_name: h, new_name: v, merge: m }).then(function(E) {
                  return E.data;
                }).catch(function(E) {
                  var j, Q, w;
                  throw u(u({}, E.response.data), { httpStatus: E.response.status, httpStatusText: E.response.statusText, message: (j = E.response.data.message) !== null && j !== void 0 ? j : "There was an error while renaming the document.", exception: (w = (Q = E.response.data.exception) !== null && Q !== void 0 ? Q : E.response.data.exc_type) !== null && w !== void 0 ? w : "" });
                })];
              });
            });
          }, g.prototype.getValue = function(b, h, v, m, d, E) {
            return m === void 0 && (m = true), d === void 0 && (d = false), E === void 0 && (E = null), s(this, void 0, void 0, function() {
              var j;
              return r(this, function(Q) {
                return j = { doctype: b, fieldname: "[]", filters: [], as_dict: m, debug: d, parent: null }, h && (j.fieldname = typeof h == "object" ? JSON.stringify(h) : h), v && (j.filters = v ? JSON.stringify(v) : void 0), E && (j.parent = E), [2, this.axios.get("/api/method/frappe.client.get_value", { params: j }).then(function(w) {
                  return w.data;
                }).catch(function(w) {
                  var U, Z;
                  throw u(u({}, w.response.data), { httpStatus: w.response.status, httpStatusText: w.response.statusText, message: "There was an error while getting the value.", exception: (Z = (U = w.response.data.exception) !== null && U !== void 0 ? U : w.response.data.exc_type) !== null && Z !== void 0 ? Z : "" });
                })];
              });
            });
          }, g.prototype.setValue = function(b, h, v, m) {
            return s(this, void 0, void 0, function() {
              return r(this, function(d) {
                return v !== null && typeof v == "object" && !Array.isArray(v) && (m = void 0), [2, this.axios.post("/api/method/frappe.client.set_value", { doctype: b, name: h, fieldname: v, value: m }).then(function(E) {
                  return E.data;
                }).catch(function(E) {
                  var j, Q;
                  throw u(u({}, E.response.data), { httpStatus: E.response.status, httpStatusText: E.response.statusText, message: "There was an error while setting the value.", exception: (Q = (j = E.response.data.exception) !== null && j !== void 0 ? j : E.response.data.exc_type) !== null && Q !== void 0 ? Q : "" });
                })];
              });
            });
          }, g.prototype.getSingleValue = function(b, h) {
            return s(this, void 0, void 0, function() {
              var v;
              return r(this, function(m) {
                return v = { doctype: b, field: h }, [2, this.axios.get("/api/method/frappe.client.get_single_value", { params: v }).then(function(d) {
                  return d.data;
                }).catch(function(d) {
                  var E, j;
                  throw u(u({}, d.response.data), { httpStatus: d.response.status, httpStatusText: d.response.statusText, message: "There was an error while getting the value of single doctype.", exception: (j = (E = d.response.data.exception) !== null && E !== void 0 ? E : d.response.data.exc_type) !== null && j !== void 0 ? j : "" });
                })];
              });
            });
          }, g.prototype.submit = function(b) {
            return s(this, void 0, void 0, function() {
              return r(this, function(h) {
                return [2, this.axios.post("/api/method/frappe.client.submit", { doc: b }).then(function(v) {
                  return v.data.message;
                }).catch(function(v) {
                  var m, d;
                  throw u(u({}, v.response.data), { httpStatus: v.response.status, httpStatusText: v.response.statusText, message: "There was an error while submitting the document.", exception: (d = (m = v.response.data.exception) !== null && m !== void 0 ? m : v.response.data.exc_type) !== null && d !== void 0 ? d : "" });
                })];
              });
            });
          }, g.prototype.cancel = function(b, h) {
            return s(this, void 0, void 0, function() {
              return r(this, function(v) {
                return [2, this.axios.post("/api/method/frappe.client.cancel", { doctype: b, name: h }).then(function(m) {
                  return m.data;
                }).catch(function(m) {
                  var d, E;
                  throw u(u({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: "There was an error while cancelling the document.", exception: (E = (d = m.response.data.exception) !== null && d !== void 0 ? d : m.response.data.exc_type) !== null && E !== void 0 ? E : "" });
                })];
              });
            });
          }, g;
        }();
        return Sn.FrappeDB = o, Sn;
      }
      var _n = {};
      var da = {};
      var Lc;
      var ep;
      function Ey() {
        if (ep)
          return Lc;
        ep = 1;
        function u(f, p) {
          return function() {
            return f.apply(p, arguments);
          };
        }
        const { toString: s } = Object.prototype, { getPrototypeOf: r } = Object, { iterator: o, toStringTag: g } = Symbol, b = ((f) => (p) => {
          const x = s.call(p);
          return f[x] || (f[x] = x.slice(8, -1).toLowerCase());
        })(/* @__PURE__ */ Object.create(null)), h = (f) => (f = f.toLowerCase(), (p) => b(p) === f), v = (f) => (p) => typeof p === f, { isArray: m } = Array, d = v("undefined");
        function E(f) {
          return f !== null && !d(f) && f.constructor !== null && !d(f.constructor) && U(f.constructor.isBuffer) && f.constructor.isBuffer(f);
        }
        const j = h("ArrayBuffer");
        function Q(f) {
          let p;
          return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? p = ArrayBuffer.isView(f) : p = f && f.buffer && j(f.buffer), p;
        }
        const w = v("string"), U = v("function"), Z = v("number"), ie = (f) => f !== null && typeof f == "object", me = (f) => f === true || f === false, Se = (f) => {
          if (b(f) !== "object")
            return false;
          const p = r(f);
          return (p === null || p === Object.prototype || Object.getPrototypeOf(p) === null) && !(g in f) && !(o in f);
        }, se = (f) => {
          if (!ie(f) || E(f))
            return false;
          try {
            return Object.keys(f).length === 0 && Object.getPrototypeOf(f) === Object.prototype;
          } catch (p) {
            return false;
          }
        }, be = h("Date"), _e = h("File"), Me = h("Blob"), fe = h("FileList"), lt = (f) => ie(f) && U(f.pipe), At = (f) => {
          let p;
          return f && (typeof FormData == "function" && f instanceof FormData || U(f.append) && ((p = b(f)) === "formdata" || p === "object" && U(f.toString) && f.toString() === "[object FormData]"));
        }, $t = h("URLSearchParams"), [mt, De, ke, Ue] = ["ReadableStream", "Request", "Response", "Headers"].map(h), vt = (f) => f.trim ? f.trim() : f.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        function X(f, p, { allOwnKeys: x = false } = {}) {
          if (f === null || typeof f > "u")
            return;
          let T, N;
          if (typeof f != "object" && (f = [f]), m(f))
            for (T = 0, N = f.length; T < N; T++)
              p.call(null, f[T], T, f);
          else {
            if (E(f))
              return;
            const z = x ? Object.getOwnPropertyNames(f) : Object.keys(f), C = z.length;
            let J;
            for (T = 0; T < C; T++)
              J = z[T], p.call(null, f[J], J, f);
          }
        }
        function I(f, p) {
          if (E(f))
            return null;
          p = p.toLowerCase();
          const x = Object.keys(f);
          let T = x.length, N;
          for (; T-- > 0; )
            if (N = x[T], p === N.toLowerCase())
              return N;
          return null;
        }
        const K = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Ty, ee = (f) => !d(f) && f !== K;
        function de() {
          const { caseless: f, skipUndefined: p } = ee(this) && this || {}, x = {}, T = (N, z) => {
            const C = f && I(x, z) || z;
            Se(x[C]) && Se(N) ? x[C] = de(x[C], N) : Se(N) ? x[C] = de({}, N) : m(N) ? x[C] = N.slice() : (!p || !d(N)) && (x[C] = N);
          };
          for (let N = 0, z = arguments.length; N < z; N++)
            arguments[N] && X(arguments[N], T);
          return x;
        }
        const _ = (f, p, x, { allOwnKeys: T } = {}) => (X(p, (N, z) => {
          x && U(N) ? f[z] = u(N, x) : f[z] = N;
        }, { allOwnKeys: T }), f), B = (f) => (f.charCodeAt(0) === 65279 && (f = f.slice(1)), f), Y = (f, p, x, T) => {
          f.prototype = Object.create(p.prototype, T), f.prototype.constructor = f, Object.defineProperty(f, "super", { value: p.prototype }), x && Object.assign(f.prototype, x);
        }, W = (f, p, x, T) => {
          let N, z, C;
          const J = {};
          if (p = p || {}, f == null)
            return p;
          do {
            for (N = Object.getOwnPropertyNames(f), z = N.length; z-- > 0; )
              C = N[z], (!T || T(C, f, p)) && !J[C] && (p[C] = f[C], J[C] = true);
            f = x !== false && r(f);
          } while (f && (!x || x(f, p)) && f !== Object.prototype);
          return p;
        }, he = (f, p, x) => {
          f = String(f), (x === void 0 || x > f.length) && (x = f.length), x -= p.length;
          const T = f.indexOf(p, x);
          return T !== -1 && T === x;
        }, re = (f) => {
          if (!f)
            return null;
          if (m(f))
            return f;
          let p = f.length;
          if (!Z(p))
            return null;
          const x = new Array(p);
          for (; p-- > 0; )
            x[p] = f[p];
          return x;
        }, je = ((f) => (p) => f && p instanceof f)(typeof Uint8Array < "u" && r(Uint8Array)), xt = (f, p) => {
          const x = (f && f[o]).call(f);
          let T;
          for (; (T = x.next()) && !T.done; ) {
            const N = T.value;
            p.call(f, N[0], N[1]);
          }
        }, We = (f, p) => {
          let x;
          const T = [];
          for (; (x = f.exec(p)) !== null; )
            T.push(x);
          return T;
        }, Za = h("HTMLFormElement"), Al = (f) => f.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(p, x, T) {
          return x.toUpperCase() + T;
        }), wl = (({ hasOwnProperty: f }) => (p, x) => f.call(p, x))(Object.prototype), zs = h("RegExp"), wn = (f, p) => {
          const x = Object.getOwnPropertyDescriptors(f), T = {};
          X(x, (N, z) => {
            let C;
            (C = p(N, z, f)) !== false && (T[z] = C || N);
          }), Object.defineProperties(f, T);
        }, Ti = (f) => {
          wn(f, (p, x) => {
            if (U(f) && ["arguments", "caller", "callee"].indexOf(x) !== -1)
              return false;
            const T = f[x];
            if (U(T)) {
              if (p.enumerable = false, "writable" in p) {
                p.writable = false;
                return;
              }
              p.set || (p.set = () => {
                throw Error("Can not rewrite read-only method '" + x + "'");
              });
            }
          });
        }, Ei = (f, p) => {
          const x = {}, T = (N) => {
            N.forEach((z) => {
              x[z] = true;
            });
          };
          return m(f) ? T(f) : T(String(f).split(p)), x;
        }, Er = () => {
        }, Us = (f, p) => f != null && Number.isFinite(f = +f) ? f : p;
        function Ai(f) {
          return !!(f && U(f.append) && f[g] === "FormData" && f[o]);
        }
        const wi = (f) => {
          const p = new Array(10), x = (T, N) => {
            if (ie(T)) {
              if (p.indexOf(T) >= 0)
                return;
              if (E(T))
                return T;
              if (!("toJSON" in T)) {
                p[N] = T;
                const z = m(T) ? [] : {};
                return X(T, (C, J) => {
                  const ae = x(C, N + 1);
                  !d(ae) && (z[J] = ae);
                }), p[N] = void 0, z;
              }
            }
            return T;
          };
          return x(f, 0);
        }, Ni = h("AsyncFunction"), Ar = (f) => f && (ie(f) || U(f)) && U(f.then) && U(f.catch), Ms = ((f, p) => f ? setImmediate : p ? ((x, T) => (K.addEventListener("message", ({ source: N, data: z }) => {
          N === K && z === x && T.length && T.shift()();
        }, false), (N) => {
          T.push(N), K.postMessage(x, "*");
        }))(`axios@${Math.random()}`, []) : (x) => setTimeout(x))(typeof setImmediate == "function", U(K.postMessage)), Ot = typeof queueMicrotask < "u" ? queueMicrotask.bind(K) : typeof process < "u" && process.nextTick || Ms;
        var H = { isArray: m, isArrayBuffer: j, isBuffer: E, isFormData: At, isArrayBufferView: Q, isString: w, isNumber: Z, isBoolean: me, isObject: ie, isPlainObject: Se, isEmptyObject: se, isReadableStream: mt, isRequest: De, isResponse: ke, isHeaders: Ue, isUndefined: d, isDate: be, isFile: _e, isBlob: Me, isRegExp: zs, isFunction: U, isStream: lt, isURLSearchParams: $t, isTypedArray: je, isFileList: fe, forEach: X, merge: de, extend: _, trim: vt, stripBOM: B, inherits: Y, toFlatObject: W, kindOf: b, kindOfTest: h, endsWith: he, toArray: re, forEachEntry: xt, matchAll: We, isHTMLForm: Za, hasOwnProperty: wl, hasOwnProp: wl, reduceDescriptors: wn, freezeMethods: Ti, toObjectSet: Ei, toCamelCase: Al, noop: Er, toFiniteNumber: Us, findKey: I, global: K, isContextDefined: ee, isSpecCompliantForm: Ai, toJSONObject: wi, isAsyncFn: Ni, isThenable: Ar, setImmediate: Ms, asap: Ot, isIterable: (f) => f != null && U(f[o]) };
        function pe(f, p, x, T, N) {
          Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = f, this.name = "AxiosError", p && (this.code = p), x && (this.config = x), T && (this.request = T), N && (this.response = N, this.status = N.status ? N.status : null);
        }
        H.inherits(pe, Error, { toJSON: function() {
          return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: H.toJSONObject(this.config), code: this.code, status: this.status };
        } });
        const Oi = pe.prototype, Ka = {};
        ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((f) => {
          Ka[f] = { value: f };
        }), Object.defineProperties(pe, Ka), Object.defineProperty(Oi, "isAxiosError", { value: true }), pe.from = (f, p, x, T, N, z) => {
          const C = Object.create(Oi);
          H.toFlatObject(f, C, function(F) {
            return F !== Error.prototype;
          }, (F) => F !== "isAxiosError");
          const J = f && f.message ? f.message : "Error", ae = p == null && f ? f.code : p;
          return pe.call(C, J, ae, x, T, N), f && C.cause == null && Object.defineProperty(C, "cause", { value: f, configurable: true }), C.name = f && f.name || "Error", z && Object.assign(C, z), C;
        };
        var wr = null;
        function Nl(f) {
          return H.isPlainObject(f) || H.isArray(f);
        }
        function Ds(f) {
          return H.endsWith(f, "[]") ? f.slice(0, -2) : f;
        }
        function Bs(f, p, x) {
          return f ? f.concat(p).map(function(T, N) {
            return T = Ds(T), !x && N ? "[" + T + "]" : T;
          }).join(x ? "." : "") : p;
        }
        function Ja(f) {
          return H.isArray(f) && !f.some(Nl);
        }
        const jt = H.toFlatObject(H, {}, null, function(f) {
          return /^is[A-Z]/.test(f);
        });
        function Xt(f, p, x) {
          if (!H.isObject(f))
            throw new TypeError("target must be an object");
          p = p || new FormData(), x = H.toFlatObject(x, { metaTokens: true, dots: false, indexes: false }, false, function(ge, P) {
            return !H.isUndefined(P[ge]);
          });
          const T = x.metaTokens, N = x.visitor || F, z = x.dots, C = x.indexes, J = (x.Blob || typeof Blob < "u" && Blob) && H.isSpecCompliantForm(p);
          if (!H.isFunction(N))
            throw new TypeError("visitor must be a function");
          function ae(ge) {
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
          function F(ge, P, te) {
            let Ze = ge;
            if (ge && !te && typeof ge == "object") {
              if (H.endsWith(P, "{}"))
                P = T ? P : P.slice(0, -2), ge = JSON.stringify(ge);
              else if (H.isArray(ge) && Ja(ge) || (H.isFileList(ge) || H.endsWith(P, "[]")) && (Ze = H.toArray(ge)))
                return P = Ds(P), Ze.forEach(function(yt, tt) {
                  !(H.isUndefined(yt) || yt === null) && p.append(C === true ? Bs([P], tt, z) : C === null ? P : P + "[]", ae(yt));
                }), false;
            }
            return Nl(ge) ? true : (p.append(Bs(te, P, z), ae(ge)), false);
          }
          const $ = [], ce = Object.assign(jt, { defaultVisitor: F, convertValue: ae, isVisitable: Nl });
          function He(ge, P) {
            if (!H.isUndefined(ge)) {
              if ($.indexOf(ge) !== -1)
                throw Error("Circular reference detected in " + P.join("."));
              $.push(ge), H.forEach(ge, function(te, Ze) {
                (!(H.isUndefined(te) || te === null) && N.call(p, te, H.isString(Ze) ? Ze.trim() : Ze, P, ce)) === true && He(te, P ? P.concat(Ze) : [Ze]);
              }), $.pop();
            }
          }
          if (!H.isObject(f))
            throw new TypeError("data must be an object");
          return He(f), p;
        }
        function wt(f) {
          const p = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
          return encodeURIComponent(f).replace(/[!'()~]|%20|%00/g, function(x) {
            return p[x];
          });
        }
        function ji(f, p) {
          this._pairs = [], f && Xt(f, this, p);
        }
        const qs = ji.prototype;
        qs.append = function(f, p) {
          this._pairs.push([f, p]);
        }, qs.toString = function(f) {
          const p = f ? function(x) {
            return f.call(this, x, wt);
          } : wt;
          return this._pairs.map(function(x) {
            return p(x[0]) + "=" + p(x[1]);
          }, "").join("&");
        };
        function Nr(f) {
          return encodeURIComponent(f).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
        }
        function Fa(f, p, x) {
          if (!p)
            return f;
          const T = x && x.encode || Nr;
          H.isFunction(x) && (x = { serialize: x });
          const N = x && x.serialize;
          let z;
          if (N ? z = N(p, x) : z = H.isURLSearchParams(p) ? p.toString() : new ji(p, x).toString(T), z) {
            const C = f.indexOf("#");
            C !== -1 && (f = f.slice(0, C)), f += (f.indexOf("?") === -1 ? "?" : "&") + z;
          }
          return f;
        }
        class Ol {
          constructor() {
            this.handlers = [];
          }
          use(p, x, T) {
            return this.handlers.push({ fulfilled: p, rejected: x, synchronous: T ? T.synchronous : false, runWhen: T ? T.runWhen : null }), this.handlers.length - 1;
          }
          eject(p) {
            this.handlers[p] && (this.handlers[p] = null);
          }
          clear() {
            this.handlers && (this.handlers = []);
          }
          forEach(p) {
            H.forEach(this.handlers, function(x) {
              x !== null && p(x);
            });
          }
        }
        var Wa = Ol, Nn = { silentJSONParsing: true, forcedJSONParsing: true, clarifyTimeoutError: false }, jl = typeof URLSearchParams < "u" ? URLSearchParams : ji, $a = typeof FormData < "u" ? FormData : null, Or = typeof Blob < "u" ? Blob : null, Hs = { isBrowser: true, classes: { URLSearchParams: jl, FormData: $a, Blob: Or }, protocols: ["http", "https", "file", "blob", "url", "data"] };
        const Pa = typeof window < "u" && typeof document < "u", Xn = typeof navigator == "object" && navigator || void 0, jr = Pa && (!Xn || ["ReactNative", "NativeScript", "NS"].indexOf(Xn.product) < 0), Ls = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Ys = Pa && window.location.href || "http://localhost";
        var Xs = Object.freeze({ __proto__: null, hasBrowserEnv: Pa, hasStandardBrowserWebWorkerEnv: Ls, hasStandardBrowserEnv: jr, navigator: Xn, origin: Ys }), it = Ve(Ve({}, Xs), Hs);
        function Ri(f, p) {
          return Xt(f, new it.classes.URLSearchParams(), Ve({ visitor: function(x, T, N, z) {
            return it.isNode && H.isBuffer(x) ? (this.append(T, x.toString("base64")), false) : z.defaultVisitor.apply(this, arguments);
          } }, p));
        }
        function Gs(f) {
          return H.matchAll(/\w+|\[(\w*)]/g, f).map((p) => p[0] === "[]" ? "" : p[1] || p[0]);
        }
        function Qs(f) {
          const p = {}, x = Object.keys(f);
          let T;
          const N = x.length;
          let z;
          for (T = 0; T < N; T++)
            z = x[T], p[z] = f[z];
          return p;
        }
        function pn(f) {
          function p(x, T, N, z) {
            let C = x[z++];
            if (C === "__proto__")
              return true;
            const J = Number.isFinite(+C), ae = z >= x.length;
            return C = !C && H.isArray(N) ? N.length : C, ae ? (H.hasOwnProp(N, C) ? N[C] = [N[C], T] : N[C] = T, !J) : ((!N[C] || !H.isObject(N[C])) && (N[C] = []), p(x, T, N[C], z) && H.isArray(N[C]) && (N[C] = Qs(N[C])), !J);
          }
          if (H.isFormData(f) && H.isFunction(f.entries)) {
            const x = {};
            return H.forEachEntry(f, (T, N) => {
              p(Gs(T), N, x, 0);
            }), x;
          }
          return null;
        }
        function ft(f, p, x) {
          if (H.isString(f))
            try {
              return (p || JSON.parse)(f), H.trim(f);
            } catch (T) {
              if (T.name !== "SyntaxError")
                throw T;
            }
          return (x || JSON.stringify)(f);
        }
        const pt = { transitional: Nn, adapter: ["xhr", "http", "fetch"], transformRequest: [function(f, p) {
          const x = p.getContentType() || "", T = x.indexOf("application/json") > -1, N = H.isObject(f);
          if (N && H.isHTMLForm(f) && (f = new FormData(f)), H.isFormData(f))
            return T ? JSON.stringify(pn(f)) : f;
          if (H.isArrayBuffer(f) || H.isBuffer(f) || H.isStream(f) || H.isFile(f) || H.isBlob(f) || H.isReadableStream(f))
            return f;
          if (H.isArrayBufferView(f))
            return f.buffer;
          if (H.isURLSearchParams(f))
            return p.setContentType("application/x-www-form-urlencoded;charset=utf-8", false), f.toString();
          let z;
          if (N) {
            if (x.indexOf("application/x-www-form-urlencoded") > -1)
              return Ri(f, this.formSerializer).toString();
            if ((z = H.isFileList(f)) || x.indexOf("multipart/form-data") > -1) {
              const C = this.env && this.env.FormData;
              return Xt(z ? { "files[]": f } : f, C && new C(), this.formSerializer);
            }
          }
          return N || T ? (p.setContentType("application/json", false), ft(f)) : f;
        }], transformResponse: [function(f) {
          const p = this.transitional || pt.transitional, x = p && p.forcedJSONParsing, T = this.responseType === "json";
          if (H.isResponse(f) || H.isReadableStream(f))
            return f;
          if (f && H.isString(f) && (x && !this.responseType || T)) {
            const N = !(p && p.silentJSONParsing) && T;
            try {
              return JSON.parse(f, this.parseReviver);
            } catch (z) {
              if (N)
                throw z.name === "SyntaxError" ? pe.from(z, pe.ERR_BAD_RESPONSE, this, null, this.response) : z;
            }
          }
          return f;
        }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, env: { FormData: it.classes.FormData, Blob: it.classes.Blob }, validateStatus: function(f) {
          return f >= 200 && f < 300;
        }, headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } } };
        H.forEach(["delete", "get", "head", "post", "put", "patch"], (f) => {
          pt.headers[f] = {};
        });
        var On = pt;
        const Ci = H.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);
        var Rr = (f) => {
          const p = {};
          let x, T, N;
          return f && f.split(`
`).forEach(function(z) {
            N = z.indexOf(":"), x = z.substring(0, N).trim().toLowerCase(), T = z.substring(N + 1).trim(), !(!x || p[x] && Ci[x]) && (x === "set-cookie" ? p[x] ? p[x].push(T) : p[x] = [T] : p[x] = p[x] ? p[x] + ", " + T : T);
          }), p;
        };
        const Vs = Symbol("internals");
        function ma(f) {
          return f && String(f).trim().toLowerCase();
        }
        function jn(f) {
          return f === false || f == null ? f : H.isArray(f) ? f.map(jn) : String(f);
        }
        function zi(f) {
          const p = /* @__PURE__ */ Object.create(null), x = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
          let T;
          for (; T = x.exec(f); )
            p[T[1]] = T[2];
          return p;
        }
        const pa = (f) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(f.trim());
        function Rn(f, p, x, T, N) {
          if (H.isFunction(T))
            return T.call(this, p, x);
          if (N && (p = x), !!H.isString(p)) {
            if (H.isString(T))
              return p.indexOf(T) !== -1;
            if (H.isRegExp(T))
              return T.test(p);
          }
        }
        function Ia(f) {
          return f.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (p, x, T) => x.toUpperCase() + T);
        }
        function ga(f, p) {
          const x = H.toCamelCase(" " + p);
          ["get", "set", "has"].forEach((T) => {
            Object.defineProperty(f, T + x, { value: function(N, z, C) {
              return this[T].call(this, p, N, z, C);
            }, configurable: true });
          });
        }
        class $e {
          constructor(p) {
            p && this.set(p);
          }
          set(p, x, T) {
            const N = this;
            function z(J, ae, F) {
              const $ = ma(ae);
              if (!$)
                throw new Error("header name must be a non-empty string");
              const ce = H.findKey(N, $);
              (!ce || N[ce] === void 0 || F === true || F === void 0 && N[ce] !== false) && (N[ce || ae] = jn(J));
            }
            const C = (J, ae) => H.forEach(J, (F, $) => z(F, $, ae));
            if (H.isPlainObject(p) || p instanceof this.constructor)
              C(p, x);
            else if (H.isString(p) && (p = p.trim()) && !pa(p))
              C(Rr(p), x);
            else if (H.isObject(p) && H.isIterable(p)) {
              let J = {}, ae, F;
              for (const $ of p) {
                if (!H.isArray($))
                  throw TypeError("Object iterator must return a key-value pair");
                J[F = $[0]] = (ae = J[F]) ? H.isArray(ae) ? [...ae, $[1]] : [ae, $[1]] : $[1];
              }
              C(J, x);
            } else
              p != null && z(x, p, T);
            return this;
          }
          get(p, x) {
            if (p = ma(p), p) {
              const T = H.findKey(this, p);
              if (T) {
                const N = this[T];
                if (!x)
                  return N;
                if (x === true)
                  return zi(N);
                if (H.isFunction(x))
                  return x.call(this, N, T);
                if (H.isRegExp(x))
                  return x.exec(N);
                throw new TypeError("parser must be boolean|regexp|function");
              }
            }
          }
          has(p, x) {
            if (p = ma(p), p) {
              const T = H.findKey(this, p);
              return !!(T && this[T] !== void 0 && (!x || Rn(this, this[T], T, x)));
            }
            return false;
          }
          delete(p, x) {
            const T = this;
            let N = false;
            function z(C) {
              if (C = ma(C), C) {
                const J = H.findKey(T, C);
                J && (!x || Rn(T, T[J], J, x)) && (delete T[J], N = true);
              }
            }
            return H.isArray(p) ? p.forEach(z) : z(p), N;
          }
          clear(p) {
            const x = Object.keys(this);
            let T = x.length, N = false;
            for (; T--; ) {
              const z = x[T];
              (!p || Rn(this, this[z], z, p, true)) && (delete this[z], N = true);
            }
            return N;
          }
          normalize(p) {
            const x = this, T = {};
            return H.forEach(this, (N, z) => {
              const C = H.findKey(T, z);
              if (C) {
                x[C] = jn(N), delete x[z];
                return;
              }
              const J = p ? Ia(z) : String(z).trim();
              J !== z && delete x[z], x[J] = jn(N), T[J] = true;
            }), this;
          }
          concat(...p) {
            return this.constructor.concat(this, ...p);
          }
          toJSON(p) {
            const x = /* @__PURE__ */ Object.create(null);
            return H.forEach(this, (T, N) => {
              T != null && T !== false && (x[N] = p && H.isArray(T) ? T.join(", ") : T);
            }), x;
          }
          [Symbol.iterator]() {
            return Object.entries(this.toJSON())[Symbol.iterator]();
          }
          toString() {
            return Object.entries(this.toJSON()).map(([p, x]) => p + ": " + x).join(`
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
          static concat(p, ...x) {
            const T = new this(p);
            return x.forEach((N) => T.set(N)), T;
          }
          static accessor(p) {
            const x = (this[Vs] = this[Vs] = { accessors: {} }).accessors, T = this.prototype;
            function N(z) {
              const C = ma(z);
              x[C] || (ga(T, z), x[C] = true);
            }
            return H.isArray(p) ? p.forEach(N) : N(p), this;
          }
        }
        $e.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), H.reduceDescriptors($e.prototype, ({ value: f }, p) => {
          let x = p[0].toUpperCase() + p.slice(1);
          return { get: () => f, set(T) {
            this[x] = T;
          } };
        }), H.freezeMethods($e);
        var zt = $e;
        function Rl(f, p) {
          const x = this || On, T = p || x, N = zt.from(T.headers);
          let z = T.data;
          return H.forEach(f, function(C) {
            z = C.call(x, z, N.normalize(), p ? p.status : void 0);
          }), N.normalize(), z;
        }
        function Cn(f) {
          return !!(f && f.__CANCEL__);
        }
        function Gt(f, p, x) {
          pe.call(this, f != null ? f : "canceled", pe.ERR_CANCELED, p, x), this.name = "CanceledError";
        }
        H.inherits(Gt, pe, { __CANCEL__: true });
        function ks(f, p, x) {
          const T = x.config.validateStatus;
          !x.status || !T || T(x.status) ? f(x) : p(new pe("Request failed with status code " + x.status, [pe.ERR_BAD_REQUEST, pe.ERR_BAD_RESPONSE][Math.floor(x.status / 100) - 4], x.config, x.request, x));
        }
        function Zs(f) {
          const p = /^([-+\w]{1,25})(:?\/\/|:)/.exec(f);
          return p && p[1] || "";
        }
        function Ks(f, p) {
          f = f || 10;
          const x = new Array(f), T = new Array(f);
          let N = 0, z = 0, C;
          return p = p !== void 0 ? p : 1e3, function(J) {
            const ae = Date.now(), F = T[z];
            C || (C = ae), x[N] = J, T[N] = ae;
            let $ = z, ce = 0;
            for (; $ !== N; )
              ce += x[$++], $ = $ % f;
            if (N = (N + 1) % f, N === z && (z = (z + 1) % f), ae - C < p)
              return;
            const He = F && ae - F;
            return He ? Math.round(ce * 1e3 / He) : void 0;
          };
        }
        function Cr(f, p) {
          let x = 0, T = 1e3 / p, N, z;
          const C = (J, ae = Date.now()) => {
            x = ae, N = null, z && (clearTimeout(z), z = null), f(...J);
          };
          return [(...J) => {
            const ae = Date.now(), F = ae - x;
            F >= T ? C(J, ae) : (N = J, z || (z = setTimeout(() => {
              z = null, C(N);
            }, T - F)));
          }, () => N && C(N)];
        }
        const Gn = (f, p, x = 3) => {
          let T = 0;
          const N = Ks(50, 250);
          return Cr((z) => {
            const C = z.loaded, J = z.lengthComputable ? z.total : void 0, ae = C - T, F = N(ae), $ = C <= J;
            T = C;
            const ce = { loaded: C, total: J, progress: J ? C / J : void 0, bytes: ae, rate: F || void 0, estimated: F && J && $ ? (J - C) / F : void 0, event: z, lengthComputable: J != null, [p ? "download" : "upload"]: true };
            f(ce);
          }, x);
        }, el = (f, p) => {
          const x = f != null;
          return [(T) => p[0]({ lengthComputable: x, total: f, loaded: T }), p[1]];
        }, Pt = (f) => (...p) => H.asap(() => f(...p));
        var Ut = it.hasStandardBrowserEnv ? ((f, p) => (x) => (x = new URL(x, it.origin), f.protocol === x.protocol && f.host === x.host && (p || f.port === x.port)))(new URL(it.origin), it.navigator && /(msie|trident)/i.test(it.navigator.userAgent)) : () => true, Js = it.hasStandardBrowserEnv ? { write(f, p, x, T, N, z) {
          const C = [f + "=" + encodeURIComponent(p)];
          H.isNumber(x) && C.push("expires=" + new Date(x).toGMTString()), H.isString(T) && C.push("path=" + T), H.isString(N) && C.push("domain=" + N), z === true && C.push("secure"), document.cookie = C.join("; ");
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
        function Ui(f, p) {
          return p ? f.replace(/\/?\/$/, "") + "/" + p.replace(/^\/+/, "") : f;
        }
        function Mi(f, p, x) {
          let T = !zr(p);
          return f && (T || x == false) ? Ui(f, p) : p;
        }
        const tl = (f) => f instanceof zt ? Ve({}, f) : f;
        function Qn(f, p) {
          p = p || {};
          const x = {};
          function T(F, $, ce, He) {
            return H.isPlainObject(F) && H.isPlainObject($) ? H.merge.call({ caseless: He }, F, $) : H.isPlainObject($) ? H.merge({}, $) : H.isArray($) ? $.slice() : $;
          }
          function N(F, $, ce, He) {
            if (H.isUndefined($)) {
              if (!H.isUndefined(F))
                return T(void 0, F, ce, He);
            } else
              return T(F, $, ce, He);
          }
          function z(F, $) {
            if (!H.isUndefined($))
              return T(void 0, $);
          }
          function C(F, $) {
            if (H.isUndefined($)) {
              if (!H.isUndefined(F))
                return T(void 0, F);
            } else
              return T(void 0, $);
          }
          function J(F, $, ce) {
            if (ce in p)
              return T(F, $);
            if (ce in f)
              return T(void 0, F);
          }
          const ae = { url: z, method: z, data: z, baseURL: C, transformRequest: C, transformResponse: C, paramsSerializer: C, timeout: C, timeoutMessage: C, withCredentials: C, withXSRFToken: C, adapter: C, responseType: C, xsrfCookieName: C, xsrfHeaderName: C, onUploadProgress: C, onDownloadProgress: C, decompress: C, maxContentLength: C, maxBodyLength: C, beforeRedirect: C, transport: C, httpAgent: C, httpsAgent: C, cancelToken: C, socketPath: C, responseEncoding: C, validateStatus: J, headers: (F, $, ce) => N(tl(F), tl($), ce, true) };
          return H.forEach(Object.keys(Ve(Ve({}, f), p)), function(F) {
            const $ = ae[F] || N, ce = $(f[F], p[F], F);
            H.isUndefined(ce) && $ !== J || (x[F] = ce);
          }), x;
        }
        var Rt = (f) => {
          const p = Qn({}, f);
          let { data: x, withXSRFToken: T, xsrfHeaderName: N, xsrfCookieName: z, headers: C, auth: J } = p;
          if (p.headers = C = zt.from(C), p.url = Fa(Mi(p.baseURL, p.url, p.allowAbsoluteUrls), f.params, f.paramsSerializer), J && C.set("Authorization", "Basic " + btoa((J.username || "") + ":" + (J.password ? unescape(encodeURIComponent(J.password)) : ""))), H.isFormData(x)) {
            if (it.hasStandardBrowserEnv || it.hasStandardBrowserWebWorkerEnv)
              C.setContentType(void 0);
            else if (H.isFunction(x.getHeaders)) {
              const ae = x.getHeaders(), F = ["content-type", "content-length"];
              Object.entries(ae).forEach(([$, ce]) => {
                F.includes($.toLowerCase()) && C.set($, ce);
              });
            }
          }
          if (it.hasStandardBrowserEnv && (T && H.isFunction(T) && (T = T(p)), T || T !== false && Ut(p.url))) {
            const ae = N && z && Js.read(z);
            ae && C.set(N, ae);
          }
          return p;
        }, Di = typeof XMLHttpRequest < "u" && function(f) {
          return new Promise(function(p, x) {
            const T = Rt(f);
            let N = T.data;
            const z = zt.from(T.headers).normalize();
            let { responseType: C, onUploadProgress: J, onDownloadProgress: ae } = T, F, $, ce, He, ge;
            function P() {
              He && He(), ge && ge(), T.cancelToken && T.cancelToken.unsubscribe(F), T.signal && T.signal.removeEventListener("abort", F);
            }
            let te = new XMLHttpRequest();
            te.open(T.method.toUpperCase(), T.url, true), te.timeout = T.timeout;
            function Ze() {
              if (!te)
                return;
              const tt = zt.from("getAllResponseHeaders" in te && te.getAllResponseHeaders()), tn = { data: !C || C === "text" || C === "json" ? te.responseText : te.response, status: te.status, statusText: te.statusText, headers: tt, config: f, request: te };
              ks(function(nn) {
                p(nn), P();
              }, function(nn) {
                x(nn), P();
              }, tn), te = null;
            }
            "onloadend" in te ? te.onloadend = Ze : te.onreadystatechange = function() {
              !te || te.readyState !== 4 || te.status === 0 && !(te.responseURL && te.responseURL.indexOf("file:") === 0) || setTimeout(Ze);
            }, te.onabort = function() {
              te && (x(new pe("Request aborted", pe.ECONNABORTED, f, te)), te = null);
            }, te.onerror = function(tt) {
              const tn = tt && tt.message ? tt.message : "Network Error", nn = new pe(tn, pe.ERR_NETWORK, f, te);
              nn.event = tt || null, x(nn), te = null;
            }, te.ontimeout = function() {
              let tt = T.timeout ? "timeout of " + T.timeout + "ms exceeded" : "timeout exceeded";
              const tn = T.transitional || Nn;
              T.timeoutErrorMessage && (tt = T.timeoutErrorMessage), x(new pe(tt, tn.clarifyTimeoutError ? pe.ETIMEDOUT : pe.ECONNABORTED, f, te)), te = null;
            }, N === void 0 && z.setContentType(null), "setRequestHeader" in te && H.forEach(z.toJSON(), function(tt, tn) {
              te.setRequestHeader(tn, tt);
            }), H.isUndefined(T.withCredentials) || (te.withCredentials = !!T.withCredentials), C && C !== "json" && (te.responseType = T.responseType), ae && ([ce, ge] = Gn(ae, true), te.addEventListener("progress", ce)), J && te.upload && ([$, He] = Gn(J), te.upload.addEventListener("progress", $), te.upload.addEventListener("loadend", He)), (T.cancelToken || T.signal) && (F = (tt) => {
              te && (x(!tt || tt.type ? new Gt(null, f, te) : tt), te.abort(), te = null);
            }, T.cancelToken && T.cancelToken.subscribe(F), T.signal && (T.signal.aborted ? F() : T.signal.addEventListener("abort", F)));
            const yt = Zs(T.url);
            if (yt && it.protocols.indexOf(yt) === -1) {
              x(new pe("Unsupported protocol " + yt + ":", pe.ERR_BAD_REQUEST, f));
              return;
            }
            te.send(N || null);
          });
        }, Fs = (f, p) => {
          const { length: x } = f = f ? f.filter(Boolean) : [];
          if (p || x) {
            let T = new AbortController(), N;
            const z = function(F) {
              if (!N) {
                N = true, J();
                const $ = F instanceof Error ? F : this.reason;
                T.abort($ instanceof pe ? $ : new Gt($ instanceof Error ? $.message : $));
              }
            };
            let C = p && setTimeout(() => {
              C = null, z(new pe(`timeout ${p} of ms exceeded`, pe.ETIMEDOUT));
            }, p);
            const J = () => {
              f && (C && clearTimeout(C), C = null, f.forEach((F) => {
                F.unsubscribe ? F.unsubscribe(z) : F.removeEventListener("abort", z);
              }), f = null);
            };
            f.forEach((F) => F.addEventListener("abort", z));
            const { signal: ae } = T;
            return ae.unsubscribe = () => H.asap(J), ae;
          }
        };
        const Bi = function* (f, p) {
          let x = f.byteLength;
          if (x < p) {
            yield f;
            return;
          }
          let T = 0, N;
          for (; T < x; )
            N = T + p, yield f.slice(T, N), T = N;
        }, ya = function(f, p) {
          return Rc(this, null, function* () {
            try {
              for (var x = Lm(Ws(f)), T, N, z; T = !(N = yield new Sl(x.next())).done; T = false) {
                const C = N.value;
                yield* Cc(Bi(C, p));
              }
            } catch (N2) {
              z = [N2];
            } finally {
              try {
                T && (N = x.return) && (yield new Sl(N.call(x)));
              } finally {
                if (z)
                  throw z[0];
              }
            }
          });
        }, Ws = function(f) {
          return Rc(this, null, function* () {
            if (f[Symbol.asyncIterator]) {
              yield* Cc(f);
              return;
            }
            const p = f.getReader();
            try {
              for (; ; ) {
                const { done: x, value: T } = yield new Sl(p.read());
                if (x)
                  break;
                yield T;
              }
            } finally {
              yield new Sl(p.cancel());
            }
          });
        }, qi = (f, p, x, T) => {
          const N = ya(f, p);
          let z = 0, C, J = (F) => {
            C || (C = true, T && T(F));
          };
          return new ReadableStream({ pull(F) {
            return fa(this, null, function* () {
              try {
                const { done: $, value: ce } = yield N.next();
                if ($) {
                  J(), F.close();
                  return;
                }
                let He = ce.byteLength;
                if (x) {
                  let ge = z += He;
                  x(ge);
                }
                F.enqueue(new Uint8Array(ce));
              } catch ($) {
                throw J($), $;
              }
            });
          }, cancel(F) {
            return J(F), N.return();
          } }, { highWaterMark: 2 });
        }, Vn = 64 * 1024, { isFunction: Cl } = H, $s = (({ Request: f, Response: p }) => ({ Request: f, Response: p }))(H.global), { ReadableStream: Hi, TextEncoder: zl } = H.global, Ps = (f, ...p) => {
          try {
            return !!f(...p);
          } catch (x) {
            return false;
          }
        }, Ur = (f) => {
          f = H.merge.call({ skipUndefined: true }, $s, f);
          const { fetch: p, Request: x, Response: T } = f, N = p ? Cl(p) : typeof fetch == "function", z = Cl(x), C = Cl(T);
          if (!N)
            return false;
          const J = N && Cl(Hi), ae = N && (typeof zl == "function" ? ((P) => (te) => P.encode(te))(new zl()) : (P) => fa(null, null, function* () {
            return new Uint8Array(yield new x(P).arrayBuffer());
          })), F = z && J && Ps(() => {
            let P = false;
            const te = new x(it.origin, { body: new Hi(), method: "POST", get duplex() {
              return P = true, "half";
            } }).headers.has("Content-Type");
            return P && !te;
          }), $ = C && J && Ps(() => H.isReadableStream(new T("").body)), ce = { stream: $ && ((P) => P.body) };
          N && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((P) => {
            !ce[P] && (ce[P] = (te, Ze) => {
              let yt = te && te[P];
              if (yt)
                return yt.call(te);
              throw new pe(`Response type '${P}' is not supported`, pe.ERR_NOT_SUPPORT, Ze);
            });
          });
          const He = (P) => fa(null, null, function* () {
            if (P == null)
              return 0;
            if (H.isBlob(P))
              return P.size;
            if (H.isSpecCompliantForm(P))
              return (yield new x(it.origin, { method: "POST", body: P }).arrayBuffer()).byteLength;
            if (H.isArrayBufferView(P) || H.isArrayBuffer(P))
              return P.byteLength;
            if (H.isURLSearchParams(P) && (P = P + ""), H.isString(P))
              return (yield ae(P)).byteLength;
          }), ge = (P, te) => fa(null, null, function* () {
            const Ze = H.toFiniteNumber(P.getContentLength());
            return Ze != null ? Ze : He(te);
          });
          return (P) => fa(null, null, function* () {
            let { url: te, method: Ze, data: yt, signal: tt, cancelToken: tn, timeout: nn, onDownloadProgress: Xi, onUploadProgress: eu, responseType: Mn, headers: Yl, withCredentials: Xl = "same-origin", fetchOptions: tu } = Rt(P), nu = p || fetch;
            Mn = Mn ? (Mn + "").toLowerCase() : "text";
            let Gl = Fs([tt, tn && tn.toAbortSignal()], nn), ll = null;
            const Jn = Gl && Gl.unsubscribe && (() => {
              Gl.unsubscribe();
            });
            let au;
            try {
              if (eu && F && Ze !== "get" && Ze !== "head" && (au = yield ge(Yl, yt)) !== 0) {
                let gn = new x(te, { method: "POST", body: yt, duplex: "half" }), Fn;
                if (H.isFormData(yt) && (Fn = gn.headers.get("content-type")) && Yl.setContentType(Fn), gn.body) {
                  const [Ql, il] = el(au, Gn(Pt(eu)));
                  yt = qi(gn.body, Vn, Ql, il);
                }
              }
              H.isString(Xl) || (Xl = Xl ? "include" : "omit");
              const an = z && "credentials" in x.prototype, lu = Lt(Ve({}, tu), { signal: Gl, method: Ze.toUpperCase(), headers: Yl.normalize().toJSON(), body: yt, duplex: "half", credentials: an ? Xl : void 0 });
              ll = z && new x(te, lu);
              let ln = yield z ? nu(ll, tu) : nu(te, lu);
              const xa = $ && (Mn === "stream" || Mn === "response");
              if ($ && (Xi || xa && Jn)) {
                const gn = {};
                ["status", "statusText", "headers"].forEach((Gi) => {
                  gn[Gi] = ln[Gi];
                });
                const Fn = H.toFiniteNumber(ln.headers.get("content-length")), [Ql, il] = Xi && el(Fn, Gn(Pt(Xi), true)) || [];
                ln = new T(qi(ln.body, Vn, Ql, () => {
                  il && il(), Jn && Jn();
                }), gn);
              }
              Mn = Mn || "text";
              let Mr = yield ce[H.findKey(ce, Mn) || "text"](ln, P);
              return !xa && Jn && Jn(), yield new Promise((gn, Fn) => {
                ks(gn, Fn, { data: Mr, headers: zt.from(ln.headers), status: ln.status, statusText: ln.statusText, config: P, request: ll });
              });
            } catch (an) {
              throw Jn && Jn(), an && an.name === "TypeError" && /Load failed|fetch/i.test(an.message) ? Object.assign(new pe("Network Error", pe.ERR_NETWORK, P, ll), { cause: an.cause || an }) : pe.from(an, an && an.code, P, ll);
            }
          });
        }, Ul = /* @__PURE__ */ new Map(), It = (f) => {
          let p = f ? f.env : {};
          const { fetch: x, Request: T, Response: N } = p, z = [T, N, x];
          let C = z.length, J = C, ae, F, $ = Ul;
          for (; J--; )
            ae = z[J], F = $.get(ae), F === void 0 && $.set(ae, F = J ? /* @__PURE__ */ new Map() : Ur(p)), $ = F;
          return F;
        };
        It();
        const nl = { http: wr, xhr: Di, fetch: { get: It } };
        H.forEach(nl, (f, p) => {
          if (f) {
            try {
              Object.defineProperty(f, "name", { value: p });
            } catch (x) {
            }
            Object.defineProperty(f, "adapterName", { value: p });
          }
        });
        const Ml = (f) => `- ${f}`, ba = (f) => H.isFunction(f) || f === null || f === false;
        var kn = { getAdapter: (f, p) => {
          f = H.isArray(f) ? f : [f];
          const { length: x } = f;
          let T, N;
          const z = {};
          for (let C = 0; C < x; C++) {
            T = f[C];
            let J;
            if (N = T, !ba(T) && (N = nl[(J = String(T)).toLowerCase()], N === void 0))
              throw new pe(`Unknown adapter '${J}'`);
            if (N && (H.isFunction(N) || (N = N.get(p))))
              break;
            z[J || "#" + C] = N;
          }
          if (!N) {
            const C = Object.entries(z).map(([ae, F]) => `adapter ${ae} ` + (F === false ? "is not supported by the environment" : "is not available in the build"));
            let J = x ? C.length > 1 ? `since :
` + C.map(Ml).join(`
`) : " " + Ml(C[0]) : "as no adapter specified";
            throw new pe("There is no suitable adapter to dispatch the request " + J, "ERR_NOT_SUPPORT");
          }
          return N;
        }, adapters: nl };
        function Dl(f) {
          if (f.cancelToken && f.cancelToken.throwIfRequested(), f.signal && f.signal.aborted)
            throw new Gt(null, f);
        }
        function Bl(f) {
          return Dl(f), f.headers = zt.from(f.headers), f.data = Rl.call(f, f.transformRequest), ["post", "put", "patch"].indexOf(f.method) !== -1 && f.headers.setContentType("application/x-www-form-urlencoded", false), kn.getAdapter(f.adapter || On.adapter, f)(f).then(function(p) {
            return Dl(f), p.data = Rl.call(f, f.transformResponse, p), p.headers = zt.from(p.headers), p;
          }, function(p) {
            return Cn(p) || (Dl(f), p && p.response && (p.response.data = Rl.call(f, f.transformResponse, p.response), p.response.headers = zt.from(p.response.headers))), Promise.reject(p);
          });
        }
        const Li = "1.12.2", zn = {};
        ["object", "boolean", "number", "function", "string", "symbol"].forEach((f, p) => {
          zn[f] = function(x) {
            return typeof x === f || "a" + (p < 1 ? "n " : " ") + f;
          };
        });
        const en = {};
        zn.transitional = function(f, p, x) {
          function T(N, z) {
            return "[Axios v" + Li + "] Transitional option '" + N + "'" + z + (x ? ". " + x : "");
          }
          return (N, z, C) => {
            if (f === false)
              throw new pe(T(z, " has been removed" + (p ? " in " + p : "")), pe.ERR_DEPRECATED);
            return p && !en[z] && (en[z] = true, console.warn(T(z, " has been deprecated since v" + p + " and will be removed in the near future"))), f ? f(N, z, C) : true;
          };
        }, zn.spelling = function(f) {
          return (p, x) => (console.warn(`${x} is likely a misspelling of ${f}`), true);
        };
        function Yi(f, p, x) {
          if (typeof f != "object")
            throw new pe("options must be an object", pe.ERR_BAD_OPTION_VALUE);
          const T = Object.keys(f);
          let N = T.length;
          for (; N-- > 0; ) {
            const z = T[N], C = p[z];
            if (C) {
              const J = f[z], ae = J === void 0 || C(J, z, f);
              if (ae !== true)
                throw new pe("option " + z + " must be " + ae, pe.ERR_BAD_OPTION_VALUE);
              continue;
            }
            if (x !== true)
              throw new pe("Unknown option " + z, pe.ERR_BAD_OPTION);
          }
        }
        var Un = { assertOptions: Yi, validators: zn };
        const dt = Un.validators;
        class va {
          constructor(p) {
            this.defaults = p || {}, this.interceptors = { request: new Wa(), response: new Wa() };
          }
          request(p, x) {
            return fa(this, null, function* () {
              try {
                return yield this._request(p, x);
              } catch (T) {
                if (T instanceof Error) {
                  let N = {};
                  Error.captureStackTrace ? Error.captureStackTrace(N) : N = new Error();
                  const z = N.stack ? N.stack.replace(/^.+\n/, "") : "";
                  try {
                    T.stack ? z && !String(T.stack).endsWith(z.replace(/^.+\n.+\n/, "")) && (T.stack += `
` + z) : T.stack = z;
                  } catch (C) {
                  }
                }
                throw T;
              }
            });
          }
          _request(p, x) {
            typeof p == "string" ? (x = x || {}, x.url = p) : x = p || {}, x = Qn(this.defaults, x);
            const { transitional: T, paramsSerializer: N, headers: z } = x;
            T !== void 0 && Un.assertOptions(T, { silentJSONParsing: dt.transitional(dt.boolean), forcedJSONParsing: dt.transitional(dt.boolean), clarifyTimeoutError: dt.transitional(dt.boolean) }, false), N != null && (H.isFunction(N) ? x.paramsSerializer = { serialize: N } : Un.assertOptions(N, { encode: dt.function, serialize: dt.function }, true)), x.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? x.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : x.allowAbsoluteUrls = true), Un.assertOptions(x, { baseUrl: dt.spelling("baseURL"), withXsrfToken: dt.spelling("withXSRFToken") }, true), x.method = (x.method || this.defaults.method || "get").toLowerCase();
            let C = z && H.merge(z.common, z[x.method]);
            z && H.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (P) => {
              delete z[P];
            }), x.headers = zt.concat(C, z);
            const J = [];
            let ae = true;
            this.interceptors.request.forEach(function(P) {
              typeof P.runWhen == "function" && P.runWhen(x) === false || (ae = ae && P.synchronous, J.unshift(P.fulfilled, P.rejected));
            });
            const F = [];
            this.interceptors.response.forEach(function(P) {
              F.push(P.fulfilled, P.rejected);
            });
            let $, ce = 0, He;
            if (!ae) {
              const P = [Bl.bind(this), void 0];
              for (P.unshift(...J), P.push(...F), He = P.length, $ = Promise.resolve(x); ce < He; )
                $ = $.then(P[ce++], P[ce++]);
              return $;
            }
            He = J.length;
            let ge = x;
            for (; ce < He; ) {
              const P = J[ce++], te = J[ce++];
              try {
                ge = P(ge);
              } catch (Ze) {
                te.call(this, Ze);
                break;
              }
            }
            try {
              $ = Bl.call(this, ge);
            } catch (P) {
              return Promise.reject(P);
            }
            for (ce = 0, He = F.length; ce < He; )
              $ = $.then(F[ce++], F[ce++]);
            return $;
          }
          getUri(p) {
            p = Qn(this.defaults, p);
            const x = Mi(p.baseURL, p.url, p.allowAbsoluteUrls);
            return Fa(x, p.params, p.paramsSerializer);
          }
        }
        H.forEach(["delete", "get", "head", "options"], function(f) {
          va.prototype[f] = function(p, x) {
            return this.request(Qn(x || {}, { method: f, url: p, data: (x || {}).data }));
          };
        }), H.forEach(["post", "put", "patch"], function(f) {
          function p(x) {
            return function(T, N, z) {
              return this.request(Qn(z || {}, { method: f, headers: x ? { "Content-Type": "multipart/form-data" } : {}, url: T, data: N }));
            };
          }
          va.prototype[f] = p(), va.prototype[f + "Form"] = p(true);
        });
        var Zn = va;
        class ql {
          constructor(p) {
            if (typeof p != "function")
              throw new TypeError("executor must be a function.");
            let x;
            this.promise = new Promise(function(N) {
              x = N;
            });
            const T = this;
            this.promise.then((N) => {
              if (!T._listeners)
                return;
              let z = T._listeners.length;
              for (; z-- > 0; )
                T._listeners[z](N);
              T._listeners = null;
            }), this.promise.then = (N) => {
              let z;
              const C = new Promise((J) => {
                T.subscribe(J), z = J;
              }).then(N);
              return C.cancel = function() {
                T.unsubscribe(z);
              }, C;
            }, p(function(N, z, C) {
              T.reason || (T.reason = new Gt(N, z, C), x(T.reason));
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
            const x = this._listeners.indexOf(p);
            x !== -1 && this._listeners.splice(x, 1);
          }
          toAbortSignal() {
            const p = new AbortController(), x = (T) => {
              p.abort(T);
            };
            return this.subscribe(x), p.signal.unsubscribe = () => this.unsubscribe(x), p.signal;
          }
          static source() {
            let p;
            return { token: new ql(function(x) {
              p = x;
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
        const gt = { Continue: 100, SwitchingProtocols: 101, Processing: 102, EarlyHints: 103, Ok: 200, Created: 201, Accepted: 202, NonAuthoritativeInformation: 203, NoContent: 204, ResetContent: 205, PartialContent: 206, MultiStatus: 207, AlreadyReported: 208, ImUsed: 226, MultipleChoices: 300, MovedPermanently: 301, Found: 302, SeeOther: 303, NotModified: 304, UseProxy: 305, Unused: 306, TemporaryRedirect: 307, PermanentRedirect: 308, BadRequest: 400, Unauthorized: 401, PaymentRequired: 402, Forbidden: 403, NotFound: 404, MethodNotAllowed: 405, NotAcceptable: 406, ProxyAuthenticationRequired: 407, RequestTimeout: 408, Conflict: 409, Gone: 410, LengthRequired: 411, PreconditionFailed: 412, PayloadTooLarge: 413, UriTooLong: 414, UnsupportedMediaType: 415, RangeNotSatisfiable: 416, ExpectationFailed: 417, ImATeapot: 418, MisdirectedRequest: 421, UnprocessableEntity: 422, Locked: 423, FailedDependency: 424, TooEarly: 425, UpgradeRequired: 426, PreconditionRequired: 428, TooManyRequests: 429, RequestHeaderFieldsTooLarge: 431, UnavailableForLegalReasons: 451, InternalServerError: 500, NotImplemented: 501, BadGateway: 502, ServiceUnavailable: 503, GatewayTimeout: 504, HttpVersionNotSupported: 505, VariantAlsoNegotiates: 506, InsufficientStorage: 507, LoopDetected: 508, NotExtended: 510, NetworkAuthenticationRequired: 511 };
        Object.entries(gt).forEach(([f, p]) => {
          gt[p] = f;
        });
        var Kn = gt;
        function al(f) {
          const p = new Zn(f), x = u(Zn.prototype.request, p);
          return H.extend(x, Zn.prototype, p, { allOwnKeys: true }), H.extend(x, p, null, { allOwnKeys: true }), x.create = function(T) {
            return al(Qn(f, T));
          }, x;
        }
        const Qe = al(On);
        return Qe.Axios = Zn, Qe.CanceledError = Gt, Qe.CancelToken = Hl, Qe.isCancel = Cn, Qe.VERSION = Li, Qe.toFormData = Xt, Qe.AxiosError = pe, Qe.Cancel = Qe.CanceledError, Qe.all = function(f) {
          return Promise.all(f);
        }, Qe.spread = Ll, Qe.isAxiosError = Is, Qe.mergeConfig = Qn, Qe.AxiosHeaders = zt, Qe.formToJSON = (f) => pn(H.isHTMLForm(f) ? new FormData(f) : f), Qe.getAdapter = kn.getAdapter, Qe.HttpStatusCode = Kn, Qe.default = Qe, Lc = Qe, Lc;
      }
      var tp;
      function Rp() {
        if (tp)
          return da;
        tp = 1;
        var u = da && da.__assign || function() {
          return u = Object.assign || function(g) {
            for (var b, h = 1, v = arguments.length; h < v; h++) {
              b = arguments[h];
              for (var m in b)
                Object.prototype.hasOwnProperty.call(b, m) && (g[m] = b[m]);
            }
            return g;
          }, u.apply(this, arguments);
        };
        Object.defineProperty(da, "__esModule", { value: true }), da.getRequestHeaders = da.getAxiosClient = void 0;
        var s = Ey();
        function r(g, b, h, v, m) {
          var d = s.default.create({ baseURL: g, headers: o(b, v, h, g, m), withCredentials: true });
          return d.interceptors.request.use(function(E) {
            return typeof window < "u" && window.csrf_token && window.csrf_token !== "{{ csrf_token }}" && (E.headers["X-Frappe-CSRF-Token"] = window.csrf_token), b && v && h && (E.headers.Authorization = "".concat(v, " ").concat(h())), E;
          }), d;
        }
        da.getAxiosClient = r;
        function o(g, b, h, v, m) {
          g === void 0 && (g = false);
          var d = { Accept: "application/json", "Content-Type": "application/json; charset=utf-8" };
          return g && b && h && (d.Authorization = "".concat(b, " ").concat(h())), typeof window < "u" && typeof document < "u" && (window.location && (v && v !== window.location.origin || (d["X-Frappe-Site-Name"] = window.location.hostname)), window.csrf_token && window.csrf_token !== "{{ csrf_token }}" && (d["X-Frappe-CSRF-Token"] = window.csrf_token)), u(u({}, d), m != null ? m : {});
        }
        return da.getRequestHeaders = o, da;
      }
      var np;
      function Cp() {
        if (np)
          return _n;
        np = 1;
        var u = _n && _n.__assign || function() {
          return u = Object.assign || function(b) {
            for (var h, v = 1, m = arguments.length; v < m; v++) {
              h = arguments[v];
              for (var d in h)
                Object.prototype.hasOwnProperty.call(h, d) && (b[d] = h[d]);
            }
            return b;
          }, u.apply(this, arguments);
        }, s = _n && _n.__awaiter || function(b, h, v, m) {
          function d(E) {
            return E instanceof v ? E : new v(function(j) {
              j(E);
            });
          }
          return new (v || (v = Promise))(function(E, j) {
            function Q(Z) {
              try {
                U(m.next(Z));
              } catch (ie) {
                j(ie);
              }
            }
            function w(Z) {
              try {
                U(m.throw(Z));
              } catch (ie) {
                j(ie);
              }
            }
            function U(Z) {
              Z.done ? E(Z.value) : d(Z.value).then(Q, w);
            }
            U((m = m.apply(b, h || [])).next());
          });
        }, r = _n && _n.__generator || function(b, h) {
          var v = { label: 0, sent: function() {
            if (E[0] & 1)
              throw E[1];
            return E[1];
          }, trys: [], ops: [] }, m, d, E, j;
          return j = { next: Q(0), throw: Q(1), return: Q(2) }, typeof Symbol == "function" && (j[Symbol.iterator] = function() {
            return this;
          }), j;
          function Q(U) {
            return function(Z) {
              return w([U, Z]);
            };
          }
          function w(U) {
            if (m)
              throw new TypeError("Generator is already executing.");
            for (; j && (j = 0, U[0] && (v = 0)), v; )
              try {
                if (m = 1, d && (E = U[0] & 2 ? d.return : U[0] ? d.throw || ((E = d.return) && E.call(d), 0) : d.next) && !(E = E.call(d, U[1])).done)
                  return E;
                switch (d = 0, E && (U = [U[0] & 2, E.value]), U[0]) {
                  case 0:
                  case 1:
                    E = U;
                    break;
                  case 4:
                    return v.label++, { value: U[1], done: false };
                  case 5:
                    v.label++, d = U[1], U = [0];
                    continue;
                  case 7:
                    U = v.ops.pop(), v.trys.pop();
                    continue;
                  default:
                    if (E = v.trys, !(E = E.length > 0 && E[E.length - 1]) && (U[0] === 6 || U[0] === 2)) {
                      v = 0;
                      continue;
                    }
                    if (U[0] === 3 && (!E || U[1] > E[0] && U[1] < E[3])) {
                      v.label = U[1];
                      break;
                    }
                    if (U[0] === 6 && v.label < E[1]) {
                      v.label = E[1], E = U;
                      break;
                    }
                    if (E && v.label < E[2]) {
                      v.label = E[2], v.ops.push(U);
                      break;
                    }
                    E[2] && v.ops.pop(), v.trys.pop();
                    continue;
                }
                U = h.call(b, v);
              } catch (Z) {
                U = [6, Z], d = 0;
              } finally {
                m = E = 0;
              }
            if (U[0] & 5)
              throw U[1];
            return { value: U[0] ? U[1] : void 0, done: true };
          }
        };
        Object.defineProperty(_n, "__esModule", { value: true }), _n.FrappeFileUpload = void 0;
        var o = Rp(), g = function() {
          function b(h, v, m, d, E, j) {
            this.appURL = h, this.axios = v, this.useToken = m != null ? m : false, this.token = d, this.tokenType = E, this.customHeaders = j;
          }
          return b.prototype.uploadFile = function(h, v, m, d) {
            return d === void 0 && (d = "upload_file"), s(this, void 0, void 0, function() {
              var E, j, Q, w, U, Z, ie, me;
              return r(this, function(Se) {
                return E = new FormData(), h && E.append("file", h, h.name), j = v.isPrivate, Q = v.folder, w = v.file_url, U = v.doctype, Z = v.docname, ie = v.fieldname, me = v.otherData, j && E.append("is_private", "1"), Q && E.append("folder", Q), w && E.append("file_url", w), U && Z && (E.append("doctype", U), E.append("docname", Z), ie && E.append("fieldname", ie)), me && Object.keys(me).forEach(function(se) {
                  var be = me[se];
                  E.append(se, be);
                }), [2, this.axios.post("/api/method/".concat(d), E, { onUploadProgress: function(se) {
                  m && m(se.loaded, se.total, se);
                }, headers: u(u({}, (0, o.getRequestHeaders)(this.useToken, this.tokenType, this.token, this.appURL, this.customHeaders)), { "Content-Type": "multipart/form-data" }) }).catch(function(se) {
                  var be, _e;
                  throw u(u({}, se.response.data), { httpStatus: se.response.status, httpStatusText: se.response.statusText, message: (be = se.response.data.message) !== null && be !== void 0 ? be : "There was an error while uploading the file.", exception: (_e = se.response.data.exception) !== null && _e !== void 0 ? _e : "" });
                })];
              });
            });
          }, b;
        }();
        return _n.FrappeFileUpload = g, _n;
      }
      var ap;
      function Ay() {
        if (ap)
          return Os;
        ap = 1, Object.defineProperty(Os, "__esModule", { value: true }), Os.FrappeApp = void 0;
        var u = zp(), s = Op(), r = jp(), o = Cp(), g = Rp(), b = function() {
          function h(v, m, d, E) {
            var j, Q;
            this.url = v, this.name = d != null ? d : "FrappeApp", this.useToken = (j = m == null ? void 0 : m.useToken) !== null && j !== void 0 ? j : false, this.token = m == null ? void 0 : m.token, this.tokenType = (Q = m == null ? void 0 : m.type) !== null && Q !== void 0 ? Q : "Bearer", this.customHeaders = E, this.axios = (0, g.getAxiosClient)(this.url, this.useToken, this.token, this.tokenType, this.customHeaders);
          }
          return h.prototype.auth = function() {
            return new u.FrappeAuth(this.url, this.axios, this.useToken, this.token, this.tokenType);
          }, h.prototype.db = function() {
            return new r.FrappeDB(this.url, this.axios, this.useToken, this.token, this.tokenType);
          }, h.prototype.file = function() {
            return new o.FrappeFileUpload(this.url, this.axios, this.useToken, this.token, this.tokenType, this.customHeaders);
          }, h.prototype.call = function() {
            return new s.FrappeCall(this.url, this.axios, this.useToken, this.token, this.tokenType);
          }, h;
        }();
        return Os.FrappeApp = b, Os;
      }
      var Tn = {};
      var lp;
      function wy() {
        if (lp)
          return Tn;
        lp = 1;
        var u = Tn && Tn.__assign || function() {
          return u = Object.assign || function(g) {
            for (var b, h = 1, v = arguments.length; h < v; h++) {
              b = arguments[h];
              for (var m in b)
                Object.prototype.hasOwnProperty.call(b, m) && (g[m] = b[m]);
            }
            return g;
          }, u.apply(this, arguments);
        }, s = Tn && Tn.__awaiter || function(g, b, h, v) {
          function m(d) {
            return d instanceof h ? d : new h(function(E) {
              E(d);
            });
          }
          return new (h || (h = Promise))(function(d, E) {
            function j(U) {
              try {
                w(v.next(U));
              } catch (Z) {
                E(Z);
              }
            }
            function Q(U) {
              try {
                w(v.throw(U));
              } catch (Z) {
                E(Z);
              }
            }
            function w(U) {
              U.done ? d(U.value) : m(U.value).then(j, Q);
            }
            w((v = v.apply(g, b || [])).next());
          });
        }, r = Tn && Tn.__generator || function(g, b) {
          var h = { label: 0, sent: function() {
            if (d[0] & 1)
              throw d[1];
            return d[1];
          }, trys: [], ops: [] }, v, m, d, E;
          return E = { next: j(0), throw: j(1), return: j(2) }, typeof Symbol == "function" && (E[Symbol.iterator] = function() {
            return this;
          }), E;
          function j(w) {
            return function(U) {
              return Q([w, U]);
            };
          }
          function Q(w) {
            if (v)
              throw new TypeError("Generator is already executing.");
            for (; E && (E = 0, w[0] && (h = 0)), h; )
              try {
                if (v = 1, m && (d = w[0] & 2 ? m.return : w[0] ? m.throw || ((d = m.return) && d.call(m), 0) : m.next) && !(d = d.call(m, w[1])).done)
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
                w = b.call(g, h);
              } catch (U) {
                w = [6, U], m = 0;
              } finally {
                v = d = 0;
              }
            if (w[0] & 5)
              throw w[1];
            return { value: w[0] ? w[1] : void 0, done: true };
          }
        };
        Object.defineProperty(Tn, "__esModule", { value: true }), Tn.FrappeAuth = void 0;
        var o = function() {
          function g(b, h, v, m, d) {
            this.appURL = b, this.axios = h, this.useToken = v != null ? v : false, this.token = m, this.tokenType = d;
          }
          return g.prototype.loginWithUsernamePassword = function(b) {
            return s(this, void 0, void 0, function() {
              return r(this, function(h) {
                return [2, this.axios.post("/api/method/login", { usr: b.username, pwd: b.password, otp: b.otp, tmp_id: b.tmp_id, device: b.device }).then(function(v) {
                  return v.data;
                }).catch(function(v) {
                  var m, d;
                  throw u(u({}, v.response.data), { httpStatus: v.response.status, httpStatusText: v.response.statusText, message: (m = v.response.data.message) !== null && m !== void 0 ? m : "There was an error while logging in", exception: (d = v.response.data.exception) !== null && d !== void 0 ? d : "" });
                })];
              });
            });
          }, g.prototype.getLoggedInUser = function() {
            return s(this, void 0, void 0, function() {
              return r(this, function(b) {
                return [2, this.axios.get("/api/method/frappe.auth.get_logged_user").then(function(h) {
                  return h.data.message;
                }).catch(function(h) {
                  var v;
                  throw u(u({}, h.response.data), { httpStatus: h.response.status, httpStatusText: h.response.statusText, message: "There was an error while fetching the logged in user", exception: (v = h.response.data.exception) !== null && v !== void 0 ? v : "" });
                })];
              });
            });
          }, g.prototype.logout = function() {
            return s(this, void 0, void 0, function() {
              return r(this, function(b) {
                return [2, this.axios.post("/api/method/logout", {}).then(function() {
                }).catch(function(h) {
                  var v, m;
                  throw u(u({}, h.response.data), { httpStatus: h.response.status, httpStatusText: h.response.statusText, message: (v = h.response.data.message) !== null && v !== void 0 ? v : "There was an error while logging out", exception: (m = h.response.data.exception) !== null && m !== void 0 ? m : "" });
                })];
              });
            });
          }, g.prototype.forgetPassword = function(b) {
            return s(this, void 0, void 0, function() {
              return r(this, function(h) {
                return [2, this.axios.post("/", { cmd: "frappe.core.doctype.user.user.reset_password", user: b }).then(function() {
                }).catch(function(v) {
                  var m, d;
                  throw u(u({}, v.response.data), { httpStatus: v.response.status, httpStatusText: v.response.statusText, message: (m = v.response.data.message) !== null && m !== void 0 ? m : "There was an error sending password reset email.", exception: (d = v.response.data.exception) !== null && d !== void 0 ? d : "" });
                })];
              });
            });
          }, g;
        }();
        return Tn.FrappeAuth = o, Tn;
      }
      var ip;
      function zp() {
        return ip || (ip = 1, function(u) {
          var s = xi && xi.__createBinding || (Object.create ? function(o, g, b, h) {
            h === void 0 && (h = b);
            var v = Object.getOwnPropertyDescriptor(g, b);
            (!v || ("get" in v ? !g.__esModule : v.writable || v.configurable)) && (v = { enumerable: true, get: function() {
              return g[b];
            } }), Object.defineProperty(o, h, v);
          } : function(o, g, b, h) {
            h === void 0 && (h = b), o[h] = g[b];
          }), r = xi && xi.__exportStar || function(o, g) {
            for (var b in o)
              b !== "default" && !Object.prototype.hasOwnProperty.call(g, b) && s(g, o, b);
          };
          Object.defineProperty(u, "__esModule", { value: true }), r(Ay(), u), r(wy(), u), r(jp(), u), r(Cp(), u), r(Op(), u);
        }(xi)), xi;
      }
      var Ny = zp();
      var sp = { exports: {} };
      var Yc = {};
      var up;
      function Oy() {
        if (up)
          return Yc;
        up = 1;
        var u = Cs;
        function s(j, Q) {
          return j === Q && (j !== 0 || 1 / j === 1 / Q) || j !== j && Q !== Q;
        }
        var r = typeof Object.is == "function" ? Object.is : s, o = u.useState, g = u.useEffect, b = u.useLayoutEffect, h = u.useDebugValue;
        function v(j, Q) {
          var w = Q(), U = o({ inst: { value: w, getSnapshot: Q } }), Z = U[0].inst, ie = U[1];
          return b(function() {
            Z.value = w, Z.getSnapshot = Q, m(Z) && ie({ inst: Z });
          }, [j, w, Q]), g(function() {
            return m(Z) && ie({ inst: Z }), j(function() {
              m(Z) && ie({ inst: Z });
            });
          }, [j]), h(w), w;
        }
        function m(j) {
          var Q = j.getSnapshot;
          j = j.value;
          try {
            var w = Q();
            return !r(j, w);
          } catch (U) {
            return true;
          }
        }
        function d(j, Q) {
          return Q();
        }
        var E = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? d : v;
        return Yc.useSyncExternalStore = u.useSyncExternalStore !== void 0 ? u.useSyncExternalStore : E, Yc;
      }
      var rp;
      function jy() {
        return rp || (rp = 1, sp.exports = Oy()), sp.exports;
      }
      jy();
      var Ry = 0;
      var Cy = 1;
      var zy = 2;
      var op = Object.prototype.hasOwnProperty;
      function Zc(u, s) {
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
              for (; o-- && Zc(u[o], s[o]); )
                ;
            return o === -1;
          }
          if (!r || typeof u == "object") {
            o = 0;
            for (r in u)
              if (op.call(u, r) && ++o && !op.call(s, r) || !(r in s) || !Zc(u[r], s[r]))
                return false;
            return Object.keys(s).length === o;
          }
        }
        return u !== u && s !== s;
      }
      var Qa = /* @__PURE__ */ new WeakMap();
      var ka = () => {
      };
      var Yt = ka();
      var xr = Object;
      var An = (u) => u === Yt;
      var Va = (u) => typeof u == "function";
      var El = (u, s) => Ve(Ve({}, u), s);
      var Uy = (u) => Va(u.then);
      var Xc = {};
      var fr = {};
      var Up = "undefined";
      var _r = typeof window != Up;
      var Kc = typeof document != Up;
      var My = _r && "Deno" in window;
      var Dy = (u, s) => {
        const r = Qa.get(u);
        return [() => !An(s) && u.get(s) || Xc, (o) => {
          if (!An(s)) {
            const g = u.get(s);
            s in fr || (fr[s] = g), r[5](s, El(g, o), g || Xc);
          }
        }, r[6], () => !An(s) && s in fr ? fr[s] : !An(s) && u.get(s) || Xc];
      };
      var Jc = true;
      var By = () => Jc;
      var [Fc, Wc] = _r && window.addEventListener ? [window.addEventListener.bind(window), window.removeEventListener.bind(window)] : [ka, ka];
      var qy = () => {
        const u = Kc && document.visibilityState;
        return An(u) || u !== "hidden";
      };
      var Hy = (u) => (Kc && document.addEventListener("visibilitychange", u), Fc("focus", u), () => {
        Kc && document.removeEventListener("visibilitychange", u), Wc("focus", u);
      });
      var Ly = (u) => {
        const s = () => {
          Jc = true, u();
        }, r = () => {
          Jc = false;
        };
        return Fc("online", s), Fc("offline", r), () => {
          Wc("online", s), Wc("offline", r);
        };
      };
      var Yy = { isOnline: By, isVisible: qy };
      var Xy = { initFocus: Hy, initReconnect: Ly };
      Cs.useId;
      var rf = !_r || My;
      var Gy = rf ? Pe.useEffect : Pe.useLayoutEffect;
      var Gc = typeof navigator < "u" && navigator.connection;
      var cp = !rf && Gc && (["slow-2g", "2g"].includes(Gc.effectiveType) || Gc.saveData);
      var dr = /* @__PURE__ */ new WeakMap();
      var Qy = (u) => xr.prototype.toString.call(u);
      var Qc = (u, s) => u === `[object ${s}]`;
      var Vy = 0;
      var $c = (u) => {
        const s = typeof u, r = Qy(u), o = Qc(r, "Date"), g = Qc(r, "RegExp"), b = Qc(r, "Object");
        let h, v;
        if (xr(u) === u && !o && !g) {
          if (h = dr.get(u), h)
            return h;
          if (h = ++Vy + "~", dr.set(u, h), Array.isArray(u)) {
            for (h = "@", v = 0; v < u.length; v++)
              h += $c(u[v]) + ",";
            dr.set(u, h);
          }
          if (b) {
            h = "#";
            const m = xr.keys(u).sort();
            for (; !An(v = m.pop()); )
              An(u[v]) || (h += v + ":" + $c(u[v]) + ",");
            dr.set(u, h);
          }
        } else
          h = o ? u.toJSON() : s == "symbol" ? u.toString() : s == "string" ? JSON.stringify(u) : "" + u;
        return h;
      };
      var Mp = (u) => {
        if (Va(u))
          try {
            u = u();
          } catch (r) {
            u = "";
          }
        const s = u;
        return u = typeof u == "string" ? u : (Array.isArray(u) ? u.length : u) ? $c(u) : "", [u, s];
      };
      var ky = 0;
      var fp = () => ++ky;
      function Zy(...u) {
        return fa(this, null, function* () {
          const [s, r, o, g] = u, b = El({ populateCache: true, throwOnError: true }, typeof g == "boolean" ? { revalidate: g } : g || {});
          let h = b.populateCache;
          const v = b.rollbackOnError;
          let m = b.optimisticData;
          const d = (Q) => typeof v == "function" ? v(Q) : v !== false, E = b.throwOnError;
          if (Va(r)) {
            const Q = r, w = [], U = s.keys();
            for (const Z of U)
              !/^\$(inf|sub)\$/.test(Z) && Q(s.get(Z)._k) && w.push(Z);
            return Promise.all(w.map(j));
          }
          return j(r);
          function j(Q) {
            return fa(this, null, function* () {
              const [w] = Mp(Q);
              if (!w)
                return;
              const [U, Z] = Dy(s, w), [ie, me, Se, se] = Qa.get(s), be = () => {
                const Ue = ie[w];
                return (Va(b.revalidate) ? b.revalidate(U().data, Q) : b.revalidate !== false) && (delete Se[w], delete se[w], Ue && Ue[0]) ? Ue[0](zy).then(() => U().data) : U().data;
              };
              if (u.length < 3)
                return be();
              let _e = o, Me, fe = false;
              const lt = fp();
              me[w] = [lt, 0];
              const At = !An(m), $t = U(), mt = $t.data, De = $t._c, ke = An(De) ? mt : De;
              if (At && (m = Va(m) ? m(ke, mt) : m, Z({ data: m, _c: ke })), Va(_e))
                try {
                  _e = _e(ke);
                } catch (Ue) {
                  Me = Ue, fe = true;
                }
              if (_e && Uy(_e))
                if (_e = yield _e.catch((Ue) => {
                  Me = Ue, fe = true;
                }), lt !== me[w][0]) {
                  if (fe)
                    throw Me;
                  return _e;
                } else
                  fe && At && d(Me) && (h = true, Z({ data: ke, _c: Yt }));
              if (h && !fe)
                if (Va(h)) {
                  const Ue = h(_e, ke);
                  Z({ data: Ue, error: Yt, _c: Yt });
                } else
                  Z({ data: _e, error: Yt, _c: Yt });
              if (me[w][1] = fp(), Promise.resolve(be()).then(() => {
                Z({ _c: Yt });
              }), fe) {
                if (E)
                  throw Me;
                return;
              }
              return _e;
            });
          }
        });
      }
      var dp = (u, s) => {
        for (const r in u)
          u[r][0] && u[r][0](s);
      };
      var Dp = (u, s) => {
        if (!Qa.has(u)) {
          const r = El(Xy, s), o = /* @__PURE__ */ Object.create(null), g = Zy.bind(Yt, u);
          let b = ka;
          const h = /* @__PURE__ */ Object.create(null), v = (E, j) => {
            const Q = h[E] || [];
            return h[E] = Q, Q.push(j), () => Q.splice(Q.indexOf(j), 1);
          }, m = (E, j, Q) => {
            u.set(E, j);
            const w = h[E];
            if (w)
              for (const U of w)
                U(j, Q);
          }, d = () => {
            if (!Qa.has(u) && (Qa.set(u, [o, /* @__PURE__ */ Object.create(null), /* @__PURE__ */ Object.create(null), /* @__PURE__ */ Object.create(null), g, m, v]), !rf)) {
              const E = r.initFocus(setTimeout.bind(Yt, dp.bind(Yt, o, Ry))), j = r.initReconnect(setTimeout.bind(Yt, dp.bind(Yt, o, Cy)));
              b = () => {
                E && E(), j && j(), Qa.delete(u);
              };
            }
          };
          return d(), [u, g, d, b];
        }
        return [u, Qa.get(u)[4]];
      };
      var Ky = (u, s, r, o, g) => {
        const b = r.errorRetryCount, h = g.retryCount, v = ~~((Math.random() + 0.5) * (1 << (h < 8 ? h : 8))) * r.errorRetryInterval;
        !An(b) && h > b || setTimeout(o, v, g);
      };
      var Jy = Zc;
      var [of, Fy] = Dp(/* @__PURE__ */ new Map());
      var Wy = El({ onLoadingSlow: ka, onSuccess: ka, onError: ka, onErrorRetry: Ky, onDiscarded: ka, revalidateOnFocus: true, revalidateOnReconnect: true, revalidateIfStale: true, shouldRetryOnError: true, errorRetryInterval: cp ? 1e4 : 5e3, focusThrottleInterval: 5 * 1e3, dedupingInterval: 2 * 1e3, loadingTimeout: cp ? 5e3 : 3e3, compare: Jy, isPaused: () => false, cache: of, mutate: Fy, fallback: {} }, Yy);
      var $y = (u, s) => {
        const r = El(u, s);
        if (s) {
          const { use: o, fallback: g } = u, { use: b, fallback: h } = s;
          o && b && (r.use = o.concat(b)), g && h && (r.fallback = El(g, h));
        }
        return r;
      };
      var hp = Pe.createContext({});
      var Py = (u) => {
        const { value: s } = u, r = Pe.useContext(hp), o = Va(s), g = Pe.useMemo(() => o ? s(r) : s, [o, r, s]), b = Pe.useMemo(() => o ? g : $y(r, g), [o, r, g]), h = g && g.provider, v = Pe.useRef(Yt);
        h && !v.current && (v.current = Dp(h(b.cache || of), g));
        const m = v.current;
        return m && (b.cache = m[0], b.mutate = m[1]), Gy(() => {
          if (m)
            return m[2] && m[2](), m[3];
        }, []), Pe.createElement(hp.Provider, El(u, { value: b }));
      };
      var Iy = "$inf$";
      var Bp = _r && window.__SWR_DEVTOOLS_USE__;
      var eb = Bp ? window.__SWR_DEVTOOLS_USE__ : [];
      var tb = () => {
        Bp && (window.__SWR_DEVTOOLS_REACT__ = Cs);
      };
      var nb = (u) => (s, r, o) => u(s, r && ((...g) => {
        const [b] = Mp(s), [, , , h] = Qa.get(of);
        if (b.startsWith(Iy))
          return r(...g);
        const v = h[b];
        return An(v) ? r(...g) : (delete h[b], v);
      }), o);
      eb.concat(nb);
      tb();
      Cs.use;
      Promise.resolve(Yt);
      var ab = xr.defineProperty(Py, "defaultValue", { value: Wy });
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
      Object.keys(Yn).forEach((u) => {
        yr[Yn[u]] = u;
      });
      var Pc = { type: "error", data: "parser error" };
      var qp = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
      var Hp = typeof ArrayBuffer == "function";
      var Lp = (u) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(u) : u && u.buffer instanceof ArrayBuffer;
      var cf = ({ type: u, data: s }, r, o) => qp && s instanceof Blob ? r ? o(s) : mp(s, o) : Hp && (s instanceof ArrayBuffer || Lp(s)) ? r ? o(s) : mp(new Blob([s]), o) : o(Yn[u] + (s || ""));
      var mp = (u, s) => {
        const r = new FileReader();
        return r.onload = function() {
          const o = r.result.split(",")[1];
          s("b" + (o || ""));
        }, r.readAsDataURL(u);
      };
      function pp(u) {
        return u instanceof Uint8Array ? u : u instanceof ArrayBuffer ? new Uint8Array(u) : new Uint8Array(u.buffer, u.byteOffset, u.byteLength);
      }
      var Vc;
      function lb(u, s) {
        if (qp && u.data instanceof Blob)
          return u.data.arrayBuffer().then(pp).then(s);
        if (Hp && (u.data instanceof ArrayBuffer || Lp(u.data)))
          return s(pp(u.data));
        cf(u, false, (r) => {
          Vc || (Vc = new TextEncoder()), s(Vc.encode(r));
        });
      }
      var gp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      var Rs = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
      for (let u = 0; u < gp.length; u++)
        Rs[gp.charCodeAt(u)] = u;
      var ib = (u) => {
        let s = u.length * 0.75, r = u.length, o, g = 0, b, h, v, m;
        u[u.length - 1] === "=" && (s--, u[u.length - 2] === "=" && s--);
        const d = new ArrayBuffer(s), E = new Uint8Array(d);
        for (o = 0; o < r; o += 4)
          b = Rs[u.charCodeAt(o)], h = Rs[u.charCodeAt(o + 1)], v = Rs[u.charCodeAt(o + 2)], m = Rs[u.charCodeAt(o + 3)], E[g++] = b << 2 | h >> 4, E[g++] = (h & 15) << 4 | v >> 2, E[g++] = (v & 3) << 6 | m & 63;
        return d;
      };
      var sb = typeof ArrayBuffer == "function";
      var ff = (u, s) => {
        if (typeof u != "string")
          return { type: "message", data: Yp(u, s) };
        const r = u.charAt(0);
        return r === "b" ? { type: "message", data: ub(u.substring(1), s) } : yr[r] ? u.length > 1 ? { type: yr[r], data: u.substring(1) } : { type: yr[r] } : Pc;
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
        const r = u.length, o = new Array(r);
        let g = 0;
        u.forEach((b, h) => {
          cf(b, false, (v) => {
            o[h] = v, ++g === r && s(o.join(Xp));
          });
        });
      };
      var ob = (u, s) => {
        const r = u.split(Xp), o = [];
        for (let g = 0; g < r.length; g++) {
          const b = ff(r[g], s);
          if (o.push(b), b.type === "error")
            break;
        }
        return o;
      };
      function cb() {
        return new TransformStream({ transform(u, s) {
          lb(u, (r) => {
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
            u.data && typeof u.data != "string" && (g[0] |= 128), s.enqueue(g), s.enqueue(r);
          });
        } });
      }
      var kc;
      function hr(u) {
        return u.reduce((s, r) => s + r.length, 0);
      }
      function mr(u, s) {
        if (u[0].length === s)
          return u.shift();
        const r = new Uint8Array(s);
        let o = 0;
        for (let g = 0; g < s; g++)
          r[g] = u[0][o++], o === u[0].length && (u.shift(), o = 0);
        return u.length && o < u[0].length && (u[0] = u[0].slice(o)), r;
      }
      function fb(u, s) {
        kc || (kc = new TextDecoder());
        const r = [];
        let o = 0, g = -1, b = false;
        return new TransformStream({ transform(h, v) {
          for (r.push(h); ; ) {
            if (o === 0) {
              if (hr(r) < 1)
                break;
              const m = mr(r, 1);
              b = (m[0] & 128) === 128, g = m[0] & 127, g < 126 ? o = 3 : g === 126 ? o = 1 : o = 2;
            } else if (o === 1) {
              if (hr(r) < 2)
                break;
              const m = mr(r, 2);
              g = new DataView(m.buffer, m.byteOffset, m.length).getUint16(0), o = 3;
            } else if (o === 2) {
              if (hr(r) < 8)
                break;
              const m = mr(r, 8), d = new DataView(m.buffer, m.byteOffset, m.length), E = d.getUint32(0);
              if (E > Math.pow(2, 21) - 1) {
                v.enqueue(Pc);
                break;
              }
              g = E * Math.pow(2, 32) + d.getUint32(4), o = 3;
            } else {
              if (hr(r) < g)
                break;
              const m = mr(r, g);
              v.enqueue(ff(b ? m : kc.decode(m), s)), o = 0;
            }
            if (g === 0 || g > u) {
              v.enqueue(Pc);
              break;
            }
          }
        } });
      }
      var Gp = 4;
      function ct(u) {
        if (u)
          return db(u);
      }
      function db(u) {
        for (var s in ct.prototype)
          u[s] = ct.prototype[s];
        return u;
      }
      ct.prototype.on = ct.prototype.addEventListener = function(u, s) {
        return this._callbacks = this._callbacks || {}, (this._callbacks["$" + u] = this._callbacks["$" + u] || []).push(s), this;
      };
      ct.prototype.once = function(u, s) {
        function r() {
          this.off(u, r), s.apply(this, arguments);
        }
        return r.fn = s, this.on(u, r), this;
      };
      ct.prototype.off = ct.prototype.removeListener = ct.prototype.removeAllListeners = ct.prototype.removeEventListener = function(u, s) {
        if (this._callbacks = this._callbacks || {}, arguments.length == 0)
          return this._callbacks = {}, this;
        var r = this._callbacks["$" + u];
        if (!r)
          return this;
        if (arguments.length == 1)
          return delete this._callbacks["$" + u], this;
        for (var o, g = 0; g < r.length; g++)
          if (o = r[g], o === s || o.fn === s) {
            r.splice(g, 1);
            break;
          }
        return r.length === 0 && delete this._callbacks["$" + u], this;
      };
      ct.prototype.emit = function(u) {
        this._callbacks = this._callbacks || {};
        for (var s = new Array(arguments.length - 1), r = this._callbacks["$" + u], o = 1; o < arguments.length; o++)
          s[o - 1] = arguments[o];
        if (r) {
          r = r.slice(0);
          for (var o = 0, g = r.length; o < g; ++o)
            r[o].apply(this, s);
        }
        return this;
      };
      ct.prototype.emitReserved = ct.prototype.emit;
      ct.prototype.listeners = function(u) {
        return this._callbacks = this._callbacks || {}, this._callbacks["$" + u] || [];
      };
      ct.prototype.hasListeners = function(u) {
        return !!this.listeners(u).length;
      };
      var mn = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
      function Qp(u, ...s) {
        return s.reduce((r, o) => (u.hasOwnProperty(o) && (r[o] = u[o]), r), {});
      }
      var hb = mn.setTimeout;
      var mb = mn.clearTimeout;
      function Tr(u, s) {
        s.useNativeTimers ? (u.setTimeoutFn = hb.bind(mn), u.clearTimeoutFn = mb.bind(mn)) : (u.setTimeoutFn = mn.setTimeout.bind(mn), u.clearTimeoutFn = mn.clearTimeout.bind(mn));
      }
      var pb = 1.33;
      function gb(u) {
        return typeof u == "string" ? yb(u) : Math.ceil((u.byteLength || u.size) * pb);
      }
      function yb(u) {
        let s = 0, r = 0;
        for (let o = 0, g = u.length; o < g; o++)
          s = u.charCodeAt(o), s < 128 ? r += 1 : s < 2048 ? r += 2 : s < 55296 || s >= 57344 ? r += 3 : (o++, r += 4);
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
        for (let o = 0, g = r.length; o < g; o++) {
          let b = r[o].split("=");
          s[decodeURIComponent(b[0])] = decodeURIComponent(b[1]);
        }
        return s;
      }
      var xb = class extends Error {
        constructor(s, r, o) {
          super(s), this.description = r, this.context = o, this.type = "TransportError";
        }
      };
      var df = class extends ct {
        constructor(s) {
          super(), this.writable = false, Tr(this, s), this.opts = s, this.query = s.query, this.socket = s.socket;
        }
        onError(s, r, o) {
          return super.emitReserved("error", new xb(s, r, o)), this;
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
      var Ic = 64;
      var Sb = {};
      var yp = 0;
      var pr = 0;
      var bp;
      function vp(u) {
        let s = "";
        do
          s = Vp[u % Ic] + s, u = Math.floor(u / Ic);
        while (u > 0);
        return s;
      }
      function kp() {
        const u = vp(+new Date());
        return u !== bp ? (yp = 0, bp = u) : u + "." + vp(yp++);
      }
      for (; pr < Ic; pr++)
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
            return new mn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
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
            const o = location.protocol === "https:";
            let g = location.port;
            g || (g = o ? "443" : "80"), this.xd = typeof location < "u" && s.hostname !== location.hostname || g !== s.port;
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
          ob(s, this.socket.binaryType).forEach(r), this.readyState !== "closed" && (this.polling = false, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll());
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
          return Object.assign(s, { xd: this.xd, cookieJar: this.cookieJar }, this.opts), new Ln(this.uri(), s);
        }
        doWrite(s, r) {
          const o = this.request({ method: "POST", data: s });
          o.on("success", r), o.on("error", (g, b) => {
            this.onError("xhr post error", g, b);
          });
        }
        doPoll() {
          const s = this.request();
          s.on("data", this.onData.bind(this)), s.on("error", (r, o) => {
            this.onError("xhr poll error", r, o);
          }), this.pollXhr = s;
        }
      };
      var Ln = class extends ct {
        constructor(s, r) {
          super(), Tr(this, r), this.opts = r, this.method = r.method || "GET", this.uri = s, this.data = r.data !== void 0 ? r.data : null, this.create();
        }
        create() {
          var s;
          const r = Qp(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
          r.xdomain = !!this.opts.xd;
          const o = this.xhr = new Kp(r);
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
            (s = this.opts.cookieJar) === null || s === void 0 || s.addCookies(o), "withCredentials" in o && (o.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (o.timeout = this.opts.requestTimeout), o.onreadystatechange = () => {
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
            typeof document < "u" && delete Ln.requests[this.index], this.xhr = null;
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
      Ln.requestsCount = 0;
      Ln.requests = {};
      if (typeof document < "u") {
        if (typeof attachEvent == "function")
          attachEvent("onunload", xp);
        else if (typeof addEventListener == "function") {
          const u = "onpagehide" in mn ? "pagehide" : "unload";
          addEventListener(u, xp, false);
        }
      }
      function xp() {
        for (let u in Ln.requests)
          Ln.requests.hasOwnProperty(u) && Ln.requests[u].abort();
      }
      var hf = typeof Promise == "function" && typeof Promise.resolve == "function" ? (u) => Promise.resolve().then(u) : (u, s) => s(u, 0);
      var gr = mn.WebSocket || mn.MozWebSocket;
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
          const s = this.uri(), r = this.opts.protocols, o = _p ? {} : Qp(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
          this.opts.extraHeaders && (o.headers = this.opts.extraHeaders);
          try {
            this.ws = Sp && !_p ? r ? new gr(s, r) : new gr(s) : new gr(s, r, o);
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
            const o = s[r], g = r === s.length - 1;
            cf(o, this.supportsBinary, (b) => {
              try {
                Sp && this.ws.send(b);
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
      var Ob = class extends df {
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
              const r = fb(Number.MAX_SAFE_INTEGER, this.socket.binaryType), o = s.readable.pipeThrough(r).getReader(), g = cb();
              g.readable.pipeTo(s.writable), this.writer = g.writable.getWriter();
              const b = () => {
                o.read().then(({ done: v, value: m }) => {
                  v || (this.onPacket(m), b());
                }).catch((v) => {
                });
              };
              b();
              const h = { type: "open" };
              this.query.sid && (h.data = `{"sid":"${this.query.sid}"}`), this.writer.write(h).then(() => this.onOpen());
            });
          }));
        }
        write(s) {
          this.writable = false;
          for (let r = 0; r < s.length; r++) {
            const o = s[r], g = r === s.length - 1;
            this.writer.write(o).then(() => {
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
      var jb = { websocket: Nb, webtransport: Ob, polling: Ab };
      var Rb = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
      var Cb = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
      function ef(u) {
        if (u.length > 2e3)
          throw "URI too long";
        const s = u, r = u.indexOf("["), o = u.indexOf("]");
        r != -1 && o != -1 && (u = u.substring(0, r) + u.substring(r, o).replace(/:/g, ";") + u.substring(o, u.length));
        let g = Rb.exec(u || ""), b = {}, h = 14;
        for (; h--; )
          b[Cb[h]] = g[h] || "";
        return r != -1 && o != -1 && (b.source = s, b.host = b.host.substring(1, b.host.length - 1).replace(/;/g, ":"), b.authority = b.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), b.ipv6uri = true), b.pathNames = zb(b, b.path), b.queryKey = Ub(b, b.query), b;
      }
      function zb(u, s) {
        const r = /\/{2,9}/g, o = s.replace(r, "/").split("/");
        return (s.slice(0, 1) == "/" || s.length === 0) && o.splice(0, 1), s.slice(-1) == "/" && o.splice(o.length - 1, 1), o;
      }
      function Ub(u, s) {
        const r = {};
        return s.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(o, g, b) {
          g && (r[g] = b);
        }), r;
      }
      var Jp = class Si extends ct {
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
          const o = Object.assign({}, this.opts, { query: r, socket: this, hostname: this.hostname, secure: this.secure, port: this.port }, this.opts.transportOptions[s]);
          return new jb[s](o);
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
          const g = () => {
            o || (r.send([{ type: "ping", data: "probe" }]), r.once("packet", (j) => {
              if (!o)
                if (j.type === "pong" && j.data === "probe") {
                  if (this.upgrading = true, this.emitReserved("upgrading", r), !r)
                    return;
                  Si.priorWebsocketSuccess = r.name === "websocket", this.transport.pause(() => {
                    o || this.readyState !== "closed" && (E(), this.setTransport(r), r.send([{ type: "upgrade" }]), this.emitReserved("upgrade", r), r = null, this.upgrading = false, this.flush());
                  });
                } else {
                  const Q = new Error("probe error");
                  Q.transport = r.name, this.emitReserved("upgradeError", Q);
                }
            }));
          };
          function b() {
            o || (o = true, E(), r.close(), r = null);
          }
          const h = (j) => {
            const Q = new Error("probe error: " + j);
            Q.transport = r.name, b(), this.emitReserved("upgradeError", Q);
          };
          function v() {
            h("transport closed");
          }
          function m() {
            h("socket closed");
          }
          function d(j) {
            r && j.name !== r.name && b();
          }
          const E = () => {
            r.removeListener("open", g), r.removeListener("error", h), r.removeListener("close", v), this.off("close", m), this.off("upgrading", d);
          };
          r.once("open", g), r.once("error", h), r.once("close", v), this.once("close", m), this.once("upgrading", d), this.upgrades.indexOf("webtransport") !== -1 && s !== "webtransport" ? this.setTimeoutFn(() => {
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
            if (o && (s += gb(o)), r > 0 && s > this.maxPayload)
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
        sendPacket(s, r, o, g) {
          if (typeof r == "function" && (g = r, r = void 0), typeof o == "function" && (g = o, o = null), this.readyState === "closing" || this.readyState === "closed")
            return;
          o = o || {}, o.compress = o.compress !== false;
          const b = { type: s, data: r, options: o };
          this.emitReserved("packetCreate", b), this.writeBuffer.push(b), g && this.once("flush", g), this.flush();
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
          const g = s.length;
          for (; o < g; o++)
            ~this.transports.indexOf(s[o]) && r.push(s[o]);
          return r;
        }
      };
      Jp.protocol = Gp;
      function Mb(u, s = "", r) {
        let o = u;
        r = r || typeof location < "u" && location, u == null && (u = r.protocol + "//" + r.host), typeof u == "string" && (u.charAt(0) === "/" && (u.charAt(1) === "/" ? u = r.protocol + u : u = r.host + u), /^(https?|wss?):\/\//.test(u) || (typeof r < "u" ? u = r.protocol + "//" + u : u = "https://" + u), o = ef(u)), o.port || (/^(http|ws)$/.test(o.protocol) ? o.port = "80" : /^(http|ws)s$/.test(o.protocol) && (o.port = "443")), o.path = o.path || "/";
        const g = o.host.indexOf(":") !== -1 ? "[" + o.host + "]" : o.host;
        return o.id = o.protocol + "://" + g + ":" + o.port + s, o.href = o.protocol + "://" + g + (r && r.port === o.port ? "" : ":" + o.port), o;
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
          for (let r = 0, o = u.length; r < o; r++)
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
        const s = [], r = u.data, o = u;
        return o.data = tf(r, s), o.attachments = s.length, { packet: o, buffers: s };
      }
      function tf(u, s) {
        if (!u)
          return u;
        if (mf(u)) {
          const r = { _placeholder: true, num: s.length };
          return s.push(u), r;
        } else if (Array.isArray(u)) {
          const r = new Array(u.length);
          for (let o = 0; o < u.length; o++)
            r[o] = tf(u[o], s);
          return r;
        } else if (typeof u == "object" && !(u instanceof Date)) {
          const r = {};
          for (const o in u)
            Object.prototype.hasOwnProperty.call(u, o) && (r[o] = tf(u[o], s));
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
          const r = Lb(s), o = this.encodeAsString(r.packet), g = r.buffers;
          return g.unshift(o), g;
        }
      };
      function Tp(u) {
        return Object.prototype.toString.call(u) === "[object Object]";
      }
      var pf = class extends ct {
        constructor(s) {
          super(), this.reviver = s;
        }
        add(s) {
          let r;
          if (typeof s == "string") {
            if (this.reconstructor)
              throw new Error("got plaintext data when reconstructing a packet");
            r = this.decodeString(s);
            const o = r.type === Oe.BINARY_EVENT;
            o || r.type === Oe.BINARY_ACK ? (r.type = o ? Oe.EVENT : Oe.ACK, this.reconstructor = new Vb(r), r.attachments === 0 && super.emitReserved("decoded", r)) : super.emitReserved("decoded", r);
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
          const o = { type: Number(s.charAt(0)) };
          if (Oe[o.type] === void 0)
            throw new Error("unknown packet type " + o.type);
          if (o.type === Oe.BINARY_EVENT || o.type === Oe.BINARY_ACK) {
            const b = r + 1;
            for (; s.charAt(++r) !== "-" && r != s.length; )
              ;
            const h = s.substring(b, r);
            if (h != Number(h) || s.charAt(r) !== "-")
              throw new Error("Illegal attachments");
            o.attachments = Number(h);
          }
          if (s.charAt(r + 1) === "/") {
            const b = r + 1;
            for (; ++r && !(s.charAt(r) === "," || r === s.length); )
              ;
            o.nsp = s.substring(b, r);
          } else
            o.nsp = "/";
          const g = s.charAt(r + 1);
          if (g !== "" && Number(g) == g) {
            const b = r + 1;
            for (; ++r; ) {
              const h = s.charAt(r);
              if (h == null || Number(h) != h) {
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
            if (pf.isPayloadValid(o.type, b))
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
      function En(u, s, r) {
        return u.on(s, r), function() {
          u.off(s, r);
        };
      }
      var Zb = Object.freeze({ connect: 1, connect_error: 1, disconnect: 1, disconnecting: 1, newListener: 1, removeListener: 1 });
      var Wp = class extends ct {
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
          this.subs = [En(s, "open", this.onopen.bind(this)), En(s, "packet", this.onpacket.bind(this)), En(s, "error", this.onerror.bind(this)), En(s, "close", this.onclose.bind(this))];
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
          const o = { type: Oe.EVENT, data: r };
          if (o.options = {}, o.options.compress = this.flags.compress !== false, typeof r[r.length - 1] == "function") {
            const b = this.ids++, h = r.pop();
            this._registerAckCallback(b, h), o.id = b;
          }
          const g = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
          return this.flags.volatile && (!g || !this.connected) || (this.connected ? (this.notifyOutgoingListeners(o), this.packet(o)) : this.sendBuffer.push(o)), this.flags = {}, this;
        }
        _registerAckCallback(s, r) {
          var o;
          const g = (o = this.flags.timeout) !== null && o !== void 0 ? o : this._opts.ackTimeout;
          if (g === void 0) {
            this.acks[s] = r;
            return;
          }
          const b = this.io.setTimeoutFn(() => {
            delete this.acks[s];
            for (let h = 0; h < this.sendBuffer.length; h++)
              this.sendBuffer[h].id === s && this.sendBuffer.splice(h, 1);
            r.call(this, new Error("operation has timed out"));
          }, g);
          this.acks[s] = (...h) => {
            this.io.clearTimeoutFn(b), r.apply(this, [null, ...h]);
          };
        }
        emitWithAck(s, ...r) {
          const o = this.flags.timeout !== void 0 || this._opts.ackTimeout !== void 0;
          return new Promise((g, b) => {
            r.push((h, v) => o ? h ? b(h) : g(v) : g(h)), this.emit(s, ...r);
          });
        }
        _addToQueue(s) {
          let r;
          typeof s[s.length - 1] == "function" && (r = s.pop());
          const o = { id: this._queueSeq++, tryCount: 0, pending: false, args: s, flags: Object.assign({ fromQueue: true }, this.flags) };
          s.push((g, ...b) => o !== this._queue[0] ? void 0 : (g !== null ? o.tryCount > this._opts.retries && (this._queue.shift(), r && r(g)) : (this._queue.shift(), r && r(null, ...b)), o.pending = false, this._drainQueue())), this._queue.push(o), this._drainQueue();
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
            for (const o of r)
              o.apply(this, s);
          }
          super.emit.apply(this, s), this._pid && s.length && typeof s[s.length - 1] == "string" && (this._lastOffset = s[s.length - 1]);
        }
        ack(s) {
          const r = this;
          let o = false;
          return function(...g) {
            o || (o = true, r.packet({ type: Oe.ACK, id: s, data: g }));
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
      var af = class extends ct {
        constructor(s, r) {
          var o;
          super(), this.nsps = {}, this.subs = [], s && typeof s == "object" && (r = s, s = void 0), r = r || {}, r.path = r.path || "/socket.io", this.opts = r, Tr(this, r), this.reconnection(r.reconnection !== false), this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0), this.reconnectionDelay(r.reconnectionDelay || 1e3), this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3), this.randomizationFactor((o = r.randomizationFactor) !== null && o !== void 0 ? o : 0.5), this.backoff = new _i({ min: this.reconnectionDelay(), max: this.reconnectionDelayMax(), jitter: this.randomizationFactor() }), this.timeout(r.timeout == null ? 2e4 : r.timeout), this._readyState = "closed", this.uri = s;
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
          const r = this.engine, o = this;
          this._readyState = "opening", this.skipReconnect = false;
          const g = En(r, "open", function() {
            o.onopen(), s && s();
          }), b = (v) => {
            this.cleanup(), this._readyState = "closed", this.emitReserved("error", v), s ? s(v) : this.maybeReconnectOnOpen();
          }, h = En(r, "error", b);
          if (this._timeout !== false) {
            const v = this._timeout, m = this.setTimeoutFn(() => {
              g(), b(new Error("timeout")), r.close();
            }, v);
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
          this.subs.push(En(s, "ping", this.onping.bind(this)), En(s, "data", this.ondata.bind(this)), En(s, "error", this.onerror.bind(this)), En(s, "close", this.onclose.bind(this)), En(this.decoder, "decoded", this.ondecoded.bind(this)));
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
              s.skipReconnect || (this.emitReserved("reconnect_attempt", s.backoff.attempts), !s.skipReconnect && s.open((g) => {
                g ? (s._reconnecting = false, s.reconnect(), this.emitReserved("reconnect_error", g)) : s.onreconnect();
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
      var js = {};
      function vr(u, s) {
        typeof u == "object" && (s = u, u = void 0), s = s || {};
        const r = Mb(u, s.path || "/socket.io"), o = r.source, g = r.id, b = r.path, h = js[g] && b in js[g].nsps, v = s.forceNew || s["force new connection"] || s.multiplex === false || h;
        let m;
        return v ? m = new af(o, s) : (js[g] || (js[g] = new af(o, s)), m = js[g]), r.query && !s.query && (s.query = r.queryKey), m.socket(r.path, s);
      }
      Object.assign(vr, { Manager: af, Socket: Wp, io: vr, connect: vr });
      var Kb = class {
        constructor(s, r, o, g) {
          Tl(this, "socket_port"), Tl(this, "host"), Tl(this, "port"), Tl(this, "protocol"), Tl(this, "url"), Tl(this, "site_name"), Tl(this, "socket");
          var b, h, v, m;
          if (this.socket_port = o != null ? o : "9000", this.host = (b = window.location) == null ? void 0 : b.hostname, this.port = (h = window.location) != null && h.port ? `:${this.socket_port}` : "", this.protocol = ((v = window.location) == null ? void 0 : v.protocol) === "https:" ? "https" : "http", s) {
            let d = new URL(s);
            d.port = "", o ? (d.port = o, this.url = d.toString()) : this.url = d.toString();
          } else
            this.url = `${this.protocol}://${this.host}${this.port}/`;
          r && (this.url = `${this.url}${r}`), this.site_name = r, this.socket = vr(`${this.url}`, { withCredentials: true, secure: this.protocol === "https", extraHeaders: g && g.useToken === true ? { Authorization: `${g.type} ${(m = g.token) == null ? void 0 : m.call(g)}` } : {} });
        }
      };
      var Jb = Pe.createContext(null);
      var Fb = ({ url: u = "", tokenParams: s, socketPort: r, swrConfig: o, siteName: g, enableSocket: b = true, children: h, customHeaders: v }) => {
        const m = Pe.useMemo(() => {
          const d = new Ny.FrappeApp(u, s, void 0, v);
          return { url: u, tokenParams: s, app: d, auth: d.auth(), db: d.db(), call: d.call(), file: d.file(), socket: b ? new Kb(u, g, r, s).socket : void 0, enableSocket: b, socketPort: r };
        }, [u, s, r, b, v]);
        return S.jsx(Jb.Provider, { value: m, children: S.jsx(ab, { value: o, children: h }) });
      };
      var Wb = (u) => {
        var s;
        return S.jsx(Fb, { enableSocket: false, customHeaders: { "x-frappe-csrf-token": (s = window.frappe) == null ? void 0 : s.csrf_token }, children: u.children });
      };
      Object.keys(km).map((u) => km[u]).filter((u) => u.component).map((u) => {
        const s = (r) => S.jsx(Wb, Lt(Ve({}, r), { children: S.jsx(u, {}) }));
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
//# sourceMappingURL=index.bundle.RBCWXSB4.js.map
