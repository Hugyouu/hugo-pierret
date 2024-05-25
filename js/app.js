/* sweetScroll load */
document.addEventListener("DOMContentLoaded", function () {
  new SweetScroll({/* some options */});

  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS('particles-js', 'particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
  });

}, false);
