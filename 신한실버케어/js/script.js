// (function(){

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

var indexDimdVideo = function(){
  var dimd = document.getElementsByClassName('all-dimd')[0],
      bg = dimd.getElementsByClassName('dimd-bg')[0],
      video = dimd.getElementsByClassName('iframewrap')[0];

  var clickBtn = document.querySelector('.video-btn button.btn');

  return {
    position : function(){
      video.style.top =
      (window.innerHeight/2) - (style(video)['height'].split('px')[0]/2) + 'px';
      video.style.left =
      (window.innerWidth/2) - (style(video)['width'].split('px')[0]/2) + 'px';
    },
    open : function(){
      clickBtn.addEventListener('click', function(){
        dimd.classList.add('dimdon');
      });
    },
    close : function(){
      dimd.addEventListener('click', function(){
        dimd.classList.remove('dimdon');
      });
    }//returnobj
  };
};

var mobileLayoutFunction = function(){
  var gnblogo = gnb.getElementsByClassName('logo')[0];
  var webVer = function(){
    gnblogo.style.height = 70 + 'px';
  };
  var media = function(fn){
    console.log(window.innerWidth);
    if(window.innerWidth <= 1001){
      fn();
    }else{
      webVer();
    }
  };
  return{
    gnbSet : function(){
      media(function(){
        console.log(style(gnblogo)['width'].split('px')[0]);
        gnblogo.style.height = style(gnblogo)['width'].split('px')[0] * 0.16 +'px';
        console.log(style(gnblogo)['width'].split('px')[0] * 0.16);
      });
    }
  };
};
var mobileLayout = new mobileLayoutFunction();


window.addEventListener('DOMContentLoaded', function(){
  computedStyleX();
  // mobileLayout.gnbSet();
});
window.addEventListener('resize', function(){
  // mobileLayout.gnbSet();
});



// })();
