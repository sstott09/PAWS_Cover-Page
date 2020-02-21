var app = {
    controller: null,
  
    init: function() {
      this.initParallaxScene();
    },
  
    initParallaxScene: function() {
  
      this.controller = new ScrollMagic.Controller();
      var tween = new TimelineMax ().add([
        TweenMax.fromTo("#art-0", 0.5, {y:0, ease: Linear.easeNone}, {y: -20, ease: Linear.easeNone}),
        TweenMax.fromTo("#art-1", 0.5, {y:0, ease: Linear.easeNone}, {y: -20, ease: Linear.easeNone}),
        TweenMax.fromTo("#art-2", 0.5, {y:0, ease: Linear.easeNone}, {y: -56, ease: Linear.easeNone}),
        TweenMax.fromTo("#art-3", 0.5, {y:0, ease: Linear.easeNone}, {y: -140, ease: Linear.easeNone}),
        TweenMax.fromTo("#art-4", 0.5, {y:0, ease: Linear.easeNone}, {y: -308, ease: Linear.easeNone}),
        TweenMax.fromTo("#art-5", 0.5, {y:0, ease: Linear.easeNone}, {y: -448, ease: Linear.easeNone}),
        TweenMax.fromTo("#art-6", 0.5, {y:0, ease: Linear.easeNone}, {y: -728, ease: Linear.easeNone}),
        TweenMax.fromTo("#art-7", 0.5, {y:0, ease: Linear.easeNone}, {y: -1008, ease: Linear.easeNone}),
        TweenMax.fromTo("#art-8", 0.5, {y:0, ease: Linear.easeNone}, {y: -1372, ease: Linear.easeNone}),
        TweenMax.fromTo("#art-9", 0.5, {y:0, ease: Linear.easeNone}, {y: -1933, ease: Linear.easeNone}),
        TweenMax.fromTo("#art-10", 0.5, {y:0, ease: Linear.easeNone}, {y: -1933, ease: Linear.easeNone}),
        TweenMax.fromTo("#art-logo", 0.1, {opacity:1.0, ease: Linear.easeNone}, {opacity: 0, ease: Linear.easeNone}),
      ]);
  
      // build scene
      var scene = new ScrollMagic.Scene({triggerElement: "#art", duration: 2000, offset: 450})
      .setTween(tween)
      .setPin("#art")
      .triggerHook(0.5)
      .offset(10)
      .addTo(this.controller);
    },
  }
  
  $(document).ready(function() {
    app.init();
  })
  