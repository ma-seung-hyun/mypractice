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
      htxt = document.getElementsByClassName('htxt')[0],
      dimd = document.getElementsByClassName('all-dimd')[0];

  var introBorderBox = document.getElementsByClassName('intro-borderbox')[0],
      introWhiteBox = document.getElementsByClassName('intro-borderbox-white')[0],
      introModel = document.getElementsByClassName('intro-model')[0];

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
    },
    introPos : function(){
      introBorderBox.style.height = style(introBorderBox)['width'];

      var cacul1 =
      (style(introBorderBox)['height'].split('px')[0]/2) - (style(introWhiteBox)['height'].split('px')[0]/2) + 'px';
      var cacul2 =
      (style(gnb)['height'].split('px')[0]/2) - (style(htxt)['height'].split('px')[0]/2) + 'px';

      introWhiteBox.style.top = cacul1;
      introWhiteBox.style.left = cacul1;
      introModel.style.bottom = cacul1;
      introModel.style.right = cacul1;

      htxt.style.top = cacul2;


    }
  };//return
};

var mobileIndex = new mobileIndexFunction();

window.addEventListener('DOMContentLoaded', function(){
  computedStyleX();
  mobileIndex.gnbSet();
  mobileIndex.gnbClick();
  mobileIndex.introPos();
});
window.addEventListener('resize', function(){
  mobileIndex.gnbSet();
  mobileIndex.introPos();
});
