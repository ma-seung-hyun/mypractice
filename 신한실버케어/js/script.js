
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

// main function
function scrollToY(scrollTargetY, speed, easing) {
    // scrollTargetY: the target scrollY property of the window
    // speed: time in pixels per second
    // easing: easing equation to use

    var scrollY = window.scrollY,
        scrollTargetY = scrollTargetY || 0,
        speed = speed || 2000,
        easing = easing || 'easeOutSine',
        currentTime = 0;

    // min time .1, max time .8 seconds
    var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

    // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
    var PI_D2 = Math.PI / 2,
        easingEquations = {
            easeOutSine: function (pos) {
                return Math.sin(pos * (Math.PI / 2));
            },
            easeInOutSine: function (pos) {
                return (-0.5 * (Math.cos(Math.PI * pos) - 1));
            },
            easeInOutQuint: function (pos) {
                if ((pos /= 0.5) < 1) {
                    return 0.5 * Math.pow(pos, 5);
                }
                return 0.5 * (Math.pow((pos - 2), 5) + 2);
            }
        };

    // add animation loop
    function tick() {
        currentTime += 1 / 60;

        var p = currentTime / time;
        var t = easingEquations[easing](p);

        if (p < 1) {
            requestAnimFrame(tick);

            window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
        } else {
            console.log('scroll done');
            window.scrollTo(0, scrollTargetY);
        }
    }

    // call it once to get started
    tick();
}


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


var gnbMethod = function(){
  return {
    scroll : function(){
      var gnbHello = document.getElementsByClassName('gnb-hello')[0],
          secHello = document.getElementsByClassName('intro-area')[0],
          gnbMap = document.getElementsByClassName('gnb-map')[0],
          secMap = document.getElementsByClassName('map-area')[0]
      ;
      gnbHello.addEventListener('click', function(evt){
        evt.preventDefault();
        scrollToY(secHello.offsetTop,1000,'easeInOutSine');
      });
      gnbMap.addEventListener('click',function(evt){
        evt.preventDefault();
        scrollToY(secMap.offsetTop,1000,'easeInOutSine');
      })
    }
  }//returnobj;
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
