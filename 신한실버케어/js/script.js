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

  // console.log(dimd,bg,video,clickBtn);

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
    }
  }
}

var readyPos = function(){
};

window.addEventListener('DOMContentLoaded', function(){
  computedStyleX();
});
window.addEventListener('resize', function(){
});

// })();
