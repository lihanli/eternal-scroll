(function($) {
  'use strict';

  window.EternalScroll = function(opt) {
    // options: threshold, loadMoreButton, throttle, on
    if (opt.threshold == null) opt.threshold = 200;
    if (opt.throttle == null) opt.throttle = 250;
    if (opt.on == null) opt.on = true;

    var self = this;
    self.dom = {
      window: $(window),
      loadMoreButton: opt.loadMoreButton,
    };

    (function() {
      var loadMore = function() {
        var inview = self.dom.loadMoreButton.filter(function() {
          var $this = $(this);
          if ($this.is(':hidden')) return;

          var windowTop = self.dom.window.scrollTop()
            , windowBottom = windowTop + self.dom.window.height()
            , elementTop = $this.offset().top
            , elementBottom = elementTop + $this.outerHeight();

          return (elementBottom >= windowTop - opt.threshold) && (elementTop <= windowBottom + opt.threshold);
        });

        if (inview.length > 0) inview.click();
      };

      self.loadMore = opt.throttle ? _.throttle(loadMore, opt.throttle) : loadMore;
    })();

    self.setOn(opt.on);
  };

  EternalScroll.prototype.setOn = function(onValue) {
    var self = this;

    if (onValue) {
      self.dom.loadMoreButton.show();
      self.dom.window.on('scroll.eternalScroll', self.loadMore);
      self.dom.window.on('resize.eternalScroll', self.loadMore);
    } else {
      self.dom.loadMoreButton.hide();
      self.dom.window.off('.eternalScroll');
    }
  };
})(jQuery);
