Eternal Scroll
==============

### <a href="http://lihanli.github.io/eternal-scroll" target="_blank">Demo</a>

A very simple infinite scroll library. You pass in your load more items button, when the button is x pixels away from being visible, it'll be clicked. 

#### Usage

Download the dist/eternal-scroll.js file and add it to your page.

```javascript
var eternalScroll = new EternalScroll({
  // the button you click on to load more items (required)
  loadMoreButton: $el,
  
  // optional, default: 200
  // trigger the click when the button is this many pixels away from being visible
  threshold: 200,
  
  // optional, default: 250
  // fire the scroll and resize event listener at most once every x milliseconds
  // increase this number to decrease CPU usage
  // decrease it to make scroll events more responsive
  // set to false to turn off throttling
  throttle: 250,
  
  // optional, default: true
  // set to false so that when initialized the scroller will not be on
  on: true
});

// turn off the events and hide the load more button
eternalScroll.setOn(false); 

// turn the event listeners back on and show the load more button
eternalScroll.setOn(true); 

// change the button that the scroller will click on
eternalScroll.dom.loadMoreButton = $newEl;
```

When your button is clicked on, it needs to either hide itself, set the 'disabled' attribute on itself, or the click handler should be modified to be a noop. If the button is hidden or disabled, the scroller won't click on it, otherwise if the user keeps scrolling while the button is visible it will keep getting clicked. I didn't add this functionality to the library because you should be already handling this for the buttons on your site to make sure the user doesn't click again when ajax is loading.


#### Requirements
jQuery, underscore

#### Acknowledgements
Button in view code inspired by [unveil](https://github.com/luis-almeida/unveil)
