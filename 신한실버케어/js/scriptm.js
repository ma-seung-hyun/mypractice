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


var mobileIndexFunction = function(){
  var gnb = document.getElementsByClassName('gnb')[0],
      gnbCloseBtn = gnb.getElementsByClassName('m-togglebtn')[0],
      gnbItem = document.querySelector('.gnb > ul > li'),
      dimd = document.getElementsByClassName('all-dimd')[0];
  return{
    gnbSet : function(){
      gnbCloseBtn.style.height = style(gnbItem)['height'];
      gnbCloseBtn.style.width = style(gnbItem)['height'];
      gnbCloseBtn.style.left =
      '-' + parseInt(style(gnbItem)['height'].split('px')[0]) + 'px';
    },
    gnbClick : function(){
      gnbCloseBtn.addEventListener('click',function(){
        if(gnb.classList.contains('on')){
          gnb.classList.remove('on');
          dimd.classList.remove('on');
        }else{
          gnb.classList.add('on');
          dimd.classList.add('on');
        }
      });
      dimd.addEventListener('click', function(){
        console.log('dimdclick');
        gnb.classList.remove('on');
        dimd.classList.remove('on');
      });
    } //return
  };
};

var mobileIndex = new mobileIndexFunction();

window.addEventListener('DOMContentLoaded', function(){
  computedStyleX();
  mobileIndex.gnbSet();
  mobileIndex.gnbClick();
});
window.addEventListener('resize', function(){
  mobileIndex.gnbSet();
});
