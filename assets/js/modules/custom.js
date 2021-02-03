(function () {
  particlesJS.load(
    "particles-js",
    "/wp-content/themes/twentyonebrochureportfolio/assets/js/modules/particles.json",
    function () {
      console.log("callback - particles.js config loaded");
    }
  );
  AOS.init({ once: true });
})();
