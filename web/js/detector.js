"use strict";
(() => {
  function d(n) {
    let e = { delay: 1e3, retry: 10 };
    function _(E) {
      n.postMessage(
        { key: "__VUE_DEVTOOLS_VUE_DETECTED_EVENT__", data: E },
        "*"
      );
    }
    function t() {
      if (
        (window.__VUE_DEVTOOLS_VUE2_APP_DETECTED__ &&
          _({
            devtoolsEnabled: !1,
            vueDetected: !1,
            nuxtDetected: !1,
            vue2Detected: !0,
            vitePluginDetected: !1,
            vitePluginClientUrl: "",
          }),
        !!window.__NUXT__)
      ) {
        _({
          devtoolsEnabled:
            window.__VUE_DEVTOOLS_GLOBAL_HOOK__ &&
            window.__VUE_DEVTOOLS_GLOBAL_HOOK__.enabled,
          vueDetected: !0,
          nuxtDetected: !0,
          vitePluginDetected: !!window.__VUE_DEVTOOLS_VITE_PLUGIN_DETECTED__,
          vitePluginClientUrl: window.__VUE_DEVTOOLS_VITE_PLUGIN_CLIENT_URL__,
        });
        return;
      }
      if (!!window.__VITEPRESS__) {
        _({
          devtoolsEnabled:
            window.__VUE_DEVTOOLS_GLOBAL_HOOK__ &&
            window.__VUE_DEVTOOLS_GLOBAL_HOOK__.enabled,
          vueDetected: !0,
          vitePressDetected: !0,
          vitePluginDetected: !!window.__VUE_DEVTOOLS_VITE_PLUGIN_DETECTED__,
          vitePluginClientUrl: window.__VUE_DEVTOOLS_VITE_PLUGIN_CLIENT_URL__,
        });
        return;
      }
      if (!!window.__VUE__) {
        _({
          devtoolsEnabled:
            window.__VUE_DEVTOOLS_GLOBAL_HOOK__ &&
            window.__VUE_DEVTOOLS_GLOBAL_HOOK__.enabled,
          vueDetected: !0,
          vitePluginDetected: !!window.__VUE_DEVTOOLS_VITE_PLUGIN_DETECTED__,
          vitePluginClientUrl: window.__VUE_DEVTOOLS_VITE_PLUGIN_CLIENT_URL__,
        });
        return;
      }
      e.retry > 0 &&
        (e.retry--,
        setTimeout(() => {
          t();
        }, e.delay),
        (e.delay *= 5));
    }
    setTimeout(() => {
      t();
    }, 100);
  }
  document instanceof HTMLDocument && d(window);
})();
