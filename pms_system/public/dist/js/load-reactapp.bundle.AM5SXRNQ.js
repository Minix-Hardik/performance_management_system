(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // ../pms_system/pms_system/public/js/load-reactapp.bundle.js
  var require_load_reactapp_bundle = __commonJS({
    "../pms_system/pms_system/public/js/load-reactapp.bundle.js"() {
      (function waitForFrappe() {
        if (window.frappe && frappe.boot) {
          const script = document.createElement("script");
          script.src = "/assets/pms_system/pms-ui/index.bundle.js";
          script.type = "text/javascript";
          document.head.appendChild(script);
        } else {
          setTimeout(waitForFrappe, 50);
        }
      })();
    }
  });
  require_load_reactapp_bundle();
})();
//# sourceMappingURL=load-reactapp.bundle.AM5SXRNQ.js.map
