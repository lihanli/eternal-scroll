(function() {
  var times = 0;
  $('#load-more').click(function() {
    times++;
    $('.output').text(times);
  });
})();