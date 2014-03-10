(function() {
  var dom = {
      posts: $('.posts'),
      loadMore: $('#load-more'),
    }
    , makeFakePosts = (function() {
      var posts = 0;

      return function() {
        _.times(5, function() {
          posts++;
          dom.posts.append('<div class="well post">post' + posts + '</div>')
        });
      };
    })();

  dom.loadMore.click(function() {
    dom.loadMore.button('loading');

    setTimeout(function() {
      dom.loadMore.button('reset');
      makeFakePosts();
    }, 500);
  });

  makeFakePosts();

  new EternalScroll({
    loadMoreButton: dom.loadMore,
  });
})();