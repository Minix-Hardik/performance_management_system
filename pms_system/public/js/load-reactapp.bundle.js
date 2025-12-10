(function () {
    if (document.querySelector('script[src*="pms-ui/index.bundle.js"]')) {
        return;
    }

    const script = document.createElement('script');
    script.src = '/assets/pms_system/pms-ui/index.bundle.js';
    script.async = true;
    script.onload = function () {
        console.log('React app loaded successfully');
    };
    script.onerror = function () {
        console.error('Failed to load React app');
    };
    document.head.appendChild(script);
})();