(function() {
  var times = 0
    , $el = $('#load-more').click(function() {
      var $this = $(this);

      $this.hide();
      setTimeout(function() {
        $this.show();
      }, 250);

      $('.spacers').append('<div class="spacer"></div>');

      times++;
      $('#output').text(times);
    });

  window.scroller = new EternalScroll({
    loadMoreButton: $el,
  });
})();