// (function(){
// start
// var style = function(el) {return window.getComputedStyle(el, null);}
// var $ul = document.querySelector('.slider_ul'),
//     $item = document.getElementsByClassName('slider_item'),
//     $dotDiv = document.querySelector('.dot_div'),
//     $btn = document.getElementsByClassName('btn');
//
// window.addEventListener('load', function(){
//     this.$dot = document.getElementsByClassName('dot_item');
// });
//
// var SET = {
//   phase : 0,
//   win_value: function() {
//     this.winW = window.innerWidth;
//     this.winH = window.innerHeight;
//   },
//   dot: function() {
//     var _this = this;
//     var $dot = document.getElementsByClassName('dot_item');
//     for (let i = 0; i < $item.length; ++i) {
//       let createDotEl = document.createElement('span');
//       createDotEl.classList.add('dot_item');
//       $dotDiv.appendChild(createDotEl);
//       $dot[0].classList.add('selected');
//       $dot[i].prototype = {thisIndex  : i};
//       $dot[i].addEventListener('click', function(){
//         for(let i = 0; i < $item.length; ++i){
//           $dot[i].classList.remove('selected');
//         };
//         this.classList.add('selected');
//         _this.phase = $dot[i].prototype.thisIndex;
//         _this.animate();
//       });
//     };
//   },
//   pos: function() {
//     for (key of $btn) {
//       key.style.top = (this.winH / 2 - style(key)['width'].split('px')[0] / 2) + 'px';
//       key.style.height = style(key)['width'];
//     };
//     $ul.style.width = ($item.length * this.winW) + 'px';
//     for (let i = 0; i < $item.length; ++i) {
//       $item[i].style.width = this.winW + 'px';
//     };
//   },
//   btnAction: function() {
//     var _this = this;
//     for (key of $btn) {
//       key.addEventListener('click', function(evt) {
//         if(!!(this.classList.contains('prev'))){
//             --_this.phase;
//           if(_this.phase <= -1){
//             _this.phase = $item.length-1;
//           };
//         } else if (!!(this.classList.contains('next'))) {
//             ++_this.phase;
//           if(_this.phase >= $item.length){
//             _this.phase = 0;
//           };
//         };
//         for(let i = 0; i < $item.length; ++i){
//           $dot[i].classList.remove('selected');
//         }
//         $dot[_this.phase].classList.add('selected');
//         _this.animate();
//       });
//     };
//   },
//   animate: function() {
//     $ul.style.marginLeft = '-' + this.phase * this.winW + 'px';
//   },
//   exe: function() {
//     this.win_value();
//     this.dot();
//     this.pos();
//     this.btnAction();
//   }
// } // SET
// SET.exe();
//
// window.addEventListener('resize', function() {
//   SET.win_value();
//   SET.pos();
//   SET.animate();
// });
// window.dispatchEvent(new Event('load'));
// // end
// })();

// var data = [
//   {title:'image 1',url:'../img/img_1.jpg'},
//   {title:'image 2',url:'../img/img_2.jpg'},
//   {title:'image 3',url:'../img/img_3.jpg'},
//   {title:'image 4',url:'../img/img_4.jpg'},
//   {title:'image 5',url:'../img/img_5.jpg'}
// ];
//
// var slider = function(){
//
//   var $el,
//       $image,$arrow,$dot,
//       winW,
//       leng,
//       phase = 0;
//
//   var valueRecon = function(arg){
//     $el = document.querySelectorAll(arg.element);
//     if($el.length){$el = $el[0]};
//     $image = document.getElementsByClassName('slider_ul')[0];
//     $arrow = document.getElementsByClassName('buttons')[0];
//     $dot = document.getElementsByClassName('dot_div')[0];
//   };
//
//   var style = function(el) {return window.getComputedStyle(el, null);}
//
//   var image = (function(){
//
//     var dom = {
//       str : '',
//       make : function(arg){
//         var makestr =
//         "<ul class='slider_ul'>" +
//             (function(){
//               var roopstr = '';
//               for(let i = 0; i < arg.data.length; ++i){
//                 roopstr +=
//                 "<li class='slider_item txtdel' style='background : url("+arg.data[i].url+") no-repeat center; background-size: cover'>"+
//                   arg.data[i].title+
//                 "</li>";
//               };
//               return roopstr;
//             })(arg);
//         +"</ul>";
//         dom.str = makestr;
//       },
//       plus : function(arg){
//         $el.innerHTML += dom.str;
//         valueRecon(arg);
//       },
//       change : function(){
//       },
//       init : function(arg){
//         dom.make(arg);
//         dom.plus(arg);
//       }
//     }; // image-dom object
//
//     var set = {
//       size : function(arg){
//         valueRecon(arg);
//         leng = arg.data.length;
//         winW = window.innerWidth;
//         $image.style.width = (winW * leng) + 'px';
//         for(let i = 0, children = $image.children; i < children.length; ++i){
//           children[i].style.width = winW + 'px';
//         };
//       },
//       position : function(){
//       },
//       init : function(arg){
//         set.size(arg);
//       }
//     }; // image-setting object
//
//     var move = {
//       ing : function(i){
//         $image.style.marginLeft = '-' + winW * i + 'px';
//       },
//       to : function(index){
//         phase = index;
//         move.ing(index);
//       },
//       next : function(){
//         if(phase < leng - 1){
//           ++phase;
//         }else{
//           phase = 0;
//         }
//         move.ing(phase);
//       },
//       prev : function(){
//         if(phase > 0){
//           --phase;
//         }else{
//           phase = leng -1;
//         }
//         move.ing(phase);
//       },
//       after : function(){
//         //도전!!!!!!!!!!!!!!!
//       },
//       init : function(){
//         // return move;
//       }
//     };// image-move object
//
//     return {
//       init : function(arg){
//         dom.init(arg);
//         set.init(arg);
//         move.init(arg);
//       },
//       set : set,
//       dom : dom,
//       move : move
//     } //  image return object
//   })(); // image (function)()
//
//   var arrow = (function(){
//     var dom = {
//       str : '',
//       make : function(){
//         var makestr =
//         "<div class='buttons'>"+
//           "<span class='btn prev txtdel'>perv</span>"+
//           "<span class='btn next txtdel'>next</span>"+
//         "</div>";
//         dom.str = makestr;
//       },
//       plus : function(arg){
//         $el.innerHTML = dom.str + $el.innerHTML;
//         valueRecon(arg);
//       },
//       init : function(arg){
//         dom.make();
//         dom.plus(arg);
//       }
//     }; // arrow-dom object
//
//     var action = {
//       prevClick  : function(){
//         image.move.prev();
//       },
//       nextClick : function(){
//         image.move.next();
//       },
//       init : function(){
//       }
//     }; // arrow-action object
//
//     var set = {
//       size : function(){
//         for(let i = 0; i < $arrow.children.length; ++i){
//           $arrow.children[i].style.height = style($arrow.children[i])['width'];
//         };
//       },
//       position : function(){
//         for(let i = 0; i < $arrow.children.length; ++i){
//           $arrow.children[i].style.top = (window.innerHeight/2 - style($arrow.children[i])['width'].split('px')[0]/2 + 'px') ;
//         };
//       },
//       init : function(){
//         set.position();
//         set.size();
//       }
//     }; // arrow-set object
//
//     return {
//       init : function(arg){
//         dom.init(arg);
//         set.init();
//         action.init();
//       },
//       set : set,
//       dom : dom,
//       action : action
//     } // arrow return object
//   })(); // arrow (function)()
//
//   var dot = (function(){
//
//     var dom = {
//       str : '',
//       make : function(arg){
//         var makestr =
//         "<div class='dot_wrap'>" +
//           "<div class='dot_div'>"+
//             (function(){
//               var roopstr = '';
//               for(let i = 0; i < arg.data.length; ++i){
//                 roopstr +=
//                 "<span class='dot_item'></span>";
//               };
//               return roopstr;
//             })()
//           +"</div>"
//         +"</div>";
//         dom.str = makestr;
//       },
//       plus : function(arg){
//         $el.innerHTML = $el.innerHTML + dom.str;
//         valueRecon(arg);
//       },
//       init : function(arg){
//         dom.make(arg);
//         dom.plus(arg);
//       }
//     }; // dot-dom object
//
//     var action = {
//       sensor : function(arg){
//         for(let i = 0; i < $dot.children.length; ++i){
//           if(phase == i){
//             $dot.children[i].classList.add('selected');
//           }else{
//             $dot.children[i].classList.remove('selected');
//           }
//         }
//       },
//       click : function(){
//
//       },
//       thisindex : function(_this){
//         for(let i = 0; $dot.children.length; ++i){
//           if(_this == $dot.children[i]){
//             return i;
//             break;
//           }
//         }
//         console.log('1')
//       },
//       init :  function(arg){
//         // action.sensor(arg);
//       }
//     };// dot-action object
//     return {
//       init : function(arg){
//         dom.init(arg);
//         action.init(arg);
//       },
//       dom : dom,
//       action : action
//     }; // arrow return object
//   })(); // dot (function)()
//
//   var makeIt = function(arg){
//     for(let i = 0; i < $dot.children.length; ++i){
//       $dot.children[i].addEventListener('click', function(){
//         phase = dot.action.thisindex(this);
//         dot.action.sensor();
//         image.move.to(phase);
//       });
//     };
//     for(let i = 0; i < $arrow.children.length; ++i){
//       $arrow.children[i].addEventListener('click', function(evt){
//         if(evt.target.classList.contains('prev')){
//           arrow.action.prevClick();
//         }else if(evt.target.classList.contains('next')){
//           arrow.action.nextClick();
//         }
//         dot.action.sensor();
//       });
//     };
//
//     window.addEventListener('resize', function(){
//       image.set.size(arg);
//       arrow.set.init();
//       image.move.to(phase);
//     });
//     dot.action.sensor();
//   };// makeit function;
//
//   return {
//     allInit : function(arg){
//       valueRecon(arg);
//       image.init(arg);
//       dot.init(arg);
//       arrow.init(arg);
//       makeIt(arg);
//     }
//   } // return object
// };// slider construtor
//
// var a = new slider();
//
// a.allInit({
//   element : '.containor',
//   data : data
// });


var data1 = [
  {title:'image 1',url:'../img/img_1.jpg'},
  {title:'image 2',url:'../img/img_2.jpg'},
  {title:'image 3',url:'../img/img_3.jpg'},
  {title:'image 4',url:'../img/img_4.jpg'},
  {title:'image 5',url:'../img/img_5.jpg'}
];
var data2 = [
  {title:'image 6',url:'../img/img_6.jpg'},
  {title:'image 7',url:'../img/img_7.jpg'},
  {title:'image 8',url:'../img/img_8.jpg'},
  {title:'image 9',url:'../img/img_9.jpg'}
];
var data3 = [
  {title:'image 10',url:'../img/img_10.jpg'},
  {title:'image 11',url:'../img/img_11.jpg'},
  {title:'image 12',url:'../img/img_12.jpg'},
  {title:'image 13',url:'../img/img_13.jpg'}
];

var util = (function(){
  var style = function(el) {return window.getComputedStyle(el, null)};
  return {
    style : style
  }
})();

var image = (function(){
  var sliderUl;
  var imageDOM = function(arg){
    var str =
    "<ul class='slider_ul "+ arg.style +"'>" +
        (function(){
          var roopstr = '';
          for(let i = 0; i < arg.data.length; ++i){
            roopstr +=
            "<li class='slider_item txtdel' style='background : url("+arg.data[i].url+") no-repeat center; background-size: cover'>"+
              arg.data[i].title+
            "</li>";
          };
          return roopstr;
        })(arg);
    +"</ul>";
    arg.target.innerHTML = arg.target.innerHTML + str;
  };

  var imageSet = function(arg){
    for(let i = 0; i < arg.target.children.length; ++i){
      if(arg.target.children[i].classList.contains('slider_ul')){
        var sliderUl = arg.target.children[i];
        break;
      }
    };
    sliderUl.style.width = (window.innerWidth * arg.data.length) + 'px';
    for(let i = 0, children = sliderUl.children; i < children.length; ++i){
      children[i].style.width = window.innerWidth + 'px';
    };
  };

  var move = function(_this){
    if(!_this){
      var _this = this;
    }
    if(_this.phase < 0){
      _this.phase = _this.leng-1;
    }else if(_this.phase > _this.leng-1){
      _this.phase = 0
    };

    if(_this.style == 'horizontal'){
      _this.sld[0].style.left = '-' + window.innerWidth * _this.phase + 'px';
    }else if(_this.style == 'vertical'){
      _this.sld[0].style.top = '-' + window.innerHeight * _this.phase + 'px';
    }else if(_this.style == 'opacity'){
      for(let i = 0; i < _this.leng; ++i){
        _this.sld[0].children[i].classList.remove('selected');
      };
      _this.sld[0].children[_this.phase].classList.add('selected');
    };
  };

  var prev = function(){
    if(this.phase > 0){
      --this.phase;
    }else{
      this.phase = this.leng -1;
    }
    this.move();
  };
  var next = function(){
    if(this.phase < this.leng - 1){
      ++this.phase;
    }else{
      this.phase = 0;
    }
    this.move();
  };

  return {
    imageDOM : imageDOM,
    imageSet : imageSet,
    move : move,
    // moveTo : moveTo,
    prev : prev,
    next : next
  }
})(); // image

var arrow = (function(){
  var btns;
  var arrowDOM = function(arg){
    var str =
    "<div class='buttons'>"+
      "<span class='btn prev txtdel'>perv</span>"+
      "<span class='btn next txtdel'>next</span>"+
    "</div>";
    arg.target.innerHTML = arg.target.innerHTML + str;
  };

  var arrowSet = function(arg){
    for(let i = 0; i < arg.target.children.length; ++i){
      if(arg.target.children[i].classList.contains('buttons')){
        btns = arg.target.children[i];
      }
    };
    for(let i = 0; i < btns.children.length; ++i){
      btns.children[i].style.height = util.style(btns.children[i])['width'];
      if(arg.style == 'horizontal' || arg.style == 'opacity'){
        btns.children[i].style.top = (window.innerHeight/2 - util.style(btns.children[i])['width'].split('px')[0]/2 + 'px') ;
      }else if(arg.style == 'vertical'){
        btns.children[i].classList.add('vertical');
        btns.children[i].style.left = (window.innerWidth/2 - util.style(btns.children[i])['height'].split('px')[0]/2 + 'px') ;
      };
    };
  };

  var click = function(el,fn){
    el.addEventListener('click',function(){
      fn();
    })
  };

  return {
    arrowDOM : arrowDOM,
    arrowSet : arrowSet,
    click : click
  }
})();// arrow

var dot = (function(){
  var dots, dotItems, sliderUl;
  var dotDOM = function(arg){
    var str =
    "<div class='dot_wrap'>" +
      "<div class='dot_div'>"+
        (function(){
          var roopstr = '';
          for(let i = 0; i < arg.data.length; ++i){
            roopstr +=
            "<span class='dot_item'></span>";
          };
          return roopstr;
        })()
      +"</div>"
    +"</div>";
    arg.target.innerHTML = arg.target.innerHTML + str;
  };

  var dotSet = function(arg){
    for(let i = 0; i < arg.target.children.length; ++i){
      if(arg.target.children[i].classList.contains('dot_wrap')){
        dots = arg.target.children[i];
        break;
      }
    };
    dotItem = dots.children[0].children;
    if(arg.style == 'vertical'){
      dots.classList.add('vertical');
    }
  };

  var dotSelect = function(obj){
    var dotItem = dots.children[0].children;
    dotItem[phase].classList.add('selected');
    for(let i = 0; i < dotItem.length; ++i){
      dotItem[i].addEventListener('click', function(){
        for(let i = 0; i < dotItem.length; ++i){
          dotItem[i].classList.remove('selected');
        };
        dotItem[i].classList.add('selected');
        obj.phase = i;
      });
    };
  };

  var dotPhase = function(obj){
    var dotItem = obj.dot.children[0].children;
    for(let i = 0; i < dotItem.length; ++i){
      dotItem[i].classList.remove('selected');
    };
    dotItem[obj.phase].classList.add('selected');
  };

  var moveTo = function(index){
    var sliderUl;
    if(index != undefined){
      this.phase = index;
    };
    if(index < 0){
      this.phase = 0
    }else if(index > this.leng-1){
      this.phase = this.leng-1
    };
    for(let i = 0; i < this.leng; ++i){
      if(this.sld[i].classList.contains('slider_ul')){
        sliderUl = this.sld[i];
        break;
      }
    };
    if(this.style == 'horizontal'){
      sliderUl.style.left = '-' + window.innerWidth * this.phase + 'px';
    }else if(this.style == 'vertical'){
      sliderUl.style.top = '-' + window.innerHeight * this.phase + 'px';
    }else if(this.style == 'opacity'){
      for(let i = 0; i < this.leng; ++i){
        sliderUl.children[i].classList.remove('selected');
      };
      sliderUl.children[this.phase].classList.add('selected');
    };
  };
  return {
    dotDOM : dotDOM,
    dotSet : dotSet,
    moveTo : moveTo,
    dotSelect : dotSelect,
    dotPhase : dotPhase
  }
})();

var slider = function(arg){
  var returnObj = {};

  var target,
      targetIndex;
      phase = 0;

  var valueSetting = (function(){
    if(arg.target.indexOf('[') != -1){
      targetIndex = parseInt(arg.target.split('[')[1]);
      arg.target = arg.target.split('[')[0];
    }else{
      targetIndex = 0;
    };
    arg.target = document.querySelectorAll(arg.target)[targetIndex];
    returnObj.phase = phase;
    returnObj.style = arg.style;
    returnObj.target = arg.target;
    returnObj.sld = arg.target.children;
    returnObj.leng = arg.data.length;
  })();

  var imageSetting = (function(){
    image.imageDOM(arg);
    image.imageSet(arg);
    returnObj.move = image.move;
    returnObj.next = image.next;
    returnObj.prev = image.prev;
    window.addEventListener('resize', function(){
      image.imageSet(arg);
      image.move(returnObj);
    });
    returnObj.move();
  })();


  var arrowSetting = (function(){
    arrow.arrowDOM(arg);
    arrow.arrowSet(arg);
    window.addEventListener('resize', function(){
      arrow.arrowSet(arg);
    });
  })();

  var dotSetting = (function(){
    dot.dotDOM(arg);
    dot.dotSet(arg);
    dot.dotSelect(returnObj);
    returnObj.moveTo = dot.moveTo;
    returnObj.dotSelect = dot.dotSelect;
    returnObj.dotPhase = dot.dotPhase;
  })();

  for(let i = 0; i < returnObj.sld.length; ++i){
    if(returnObj.sld[i].classList.contains('buttons')){
      returnObj.prevBtn = returnObj.sld[i].children[0];
      returnObj.nextBtn = returnObj.sld[i].children[1];
    }else if(returnObj.sld[i].classList.contains('dot_wrap')){
      returnObj.dot = returnObj.sld[i];
    }
  };

  var controlSetting = (function(){
    returnObj.dot.addEventListener('click', function(){
      returnObj.moveTo(returnObj.phase);
    });
    returnObj.nextBtn.addEventListener('click', function(){
      returnObj.next();
      returnObj.dotPhase(returnObj);
    })
    returnObj.prevBtn.addEventListener('click', function(){
      returnObj.prev();
      returnObj.dotPhase(returnObj);
    })
  })();

  return returnObj;
};// slider()


var slider1 = new slider({
  style : 'horizontal',
  target : '.containor[0]',
  data : data1
});

var slider2 = new slider({
  style : 'vertical',
  target : '.containor[1]',
  data : data2
});

var slider3 = new slider({
  style : 'opacity',
  target : '.containor[2]',
  data : data3
});
