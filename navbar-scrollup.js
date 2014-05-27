(function() {
  var ready;

  ready = function() {
    var $navbar, delta, didScroll, hasScrolled, lastScrollTop, navbarHeight, scrollCheck,
      _this = this;

    didScroll = false;
    lastScrollTop = 0;
    delta = 5;
    $navbar = $('.navbar');
    navbarHeight = $navbar.outerHeight();
    hasScrolled = function() {
      var st;

      st = $(_this).scrollTop();
      if (Math.abs(lastScrollTop - st) <= delta) {
        return false;
      }
      if (st > lastScrollTop && st > navbarHeight) {
        $navbar.removeClass('nav-down').addClass('nav-up');
      } else {
        if (st + $(window).height() < $(document).height()) {
          $navbar.removeClass('nav-up').addClass('nav-down');
        }
      }
      return lastScrollTop = st;
    };
    scrollCheck = function() {
      if (didScroll) {
        hasScrolled();
        return didScroll = false;
      }
    };
    $(window).scroll(function() {
      return didScroll = true;
    });
    return setInterval(scrollCheck, 255);
  };

  $(document).on('ready', ready);

}).call(this);
