(function () {
    // Prevent double loading
    if (window.__pms_react_loaded) {
        return;
    }
    window.__pms_react_loaded = true;

    const script = document.createElement('script');
    script.src = '/assets/pms_system/pms-ui/index.bundle.js';
    // NO type="module" since we're using IIFE format
    script.async = false;

    script.onload = function () {
        console.log('PMS React app loaded');
    };

    script.onerror = function (e) {
        console.error('Failed to load PMS React app:', e);
    };

    document.head.appendChild(script);

    // Load CSS if it exists
    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = '/assets/pms_system/pms-ui/index.css';
    document.head.appendChild(cssLink);
})();