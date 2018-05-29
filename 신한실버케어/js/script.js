(function(){

var computedStyleX = function () {
  if (!window.getComputedStyle) {
    window.getComputedStyle = function(element) {
      return element.currentStyle;
    };
  }
};

var style = function(el,pr){
  return window.getComputedStyle(el, null);
}

var gnb = document.getElementsByClassName('gnb')[0],
    gnbwrap = gnb.getElementsByClassName('gnbwrap')[0];

var readyPos = function(){
  gnbwrap.style.marginTop = (style(gnb)['height'].split('px')[0]/2) - (style(gnbwrap)['height'].split('px')[0]/2) + 'px'
};

window.addEventListener('DOMContentLoaded', function(){
  computedStyleX();
  readyPos();
});
window.addEventListener('resize', function(){
  readyPos();
});

})();
