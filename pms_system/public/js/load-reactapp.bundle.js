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
