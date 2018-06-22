
(function(){
//
var nav = document.getElementsByClassName('swipe-nav')[0];
var scrollWrap = document.getElementsByClassName('scroll-wrap')[0],
    scrollItem = document.getElementsByClassName('scroll-item');

// console.log(scrollWrap,scrollItem);
var setSizePos = function(){
  var thiswidth = style(scrollWrap)['width'].split('px')[0];
  nav.style.width = thiswidth + 'px';
  nav.style.position = 'fixed';
  for(let i = 0; scrollItem.length > i; ++i){
    scrollItem[i].style.width = thiswidth + 'px';
  };
  scrollWrap.style.width = thiswidth * scrollItem.length + 'px';
};
setSizePos();
//
})();
