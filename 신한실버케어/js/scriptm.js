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


var mobileLayoutFunction = function(){
  var gnb = document.getElementsByClassName('gnb')[0],
      gnbCloseBtn = gnb.getElementsByClassName('m-togglebtn')[0],
      gnbItem = document.querySelector('.gnb > ul > li');


  return{
    gnbSet : function(){
      gnbCloseBtn.style.height = style(gnbItem)['height'];
      gnbCloseBtn.style.width = style(gnbItem)['height'];
      gnbCloseBtn.style.left = '-' + style(gnbItem)['height'];
    }
  };
};

var mobileLayout = new mobileLayoutFunction();

window.addEventListener('DOMContentLoaded', function(){
  computedStyleX();
  mobileLayout.gnbSet();
});
window.addEventListener('resize', function(){
  mobileLayout.gnbSet();
});
