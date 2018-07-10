var MainData = {
  classtype : {
    beginner : {
      state : {
        'hp' : 10,
        'mp' : 10,
        'ad' : 2,
        'ap' : 2,
        'sp' : 1
      }//MainData.classtype.beginner.state // end object
    },//MainData.classtype.beginner
    soldier : {
      state : {
        'hp' : 20,
        'mp' : 10,
        'ad' : 5,
        'ap' : 2,
        'sp' : 1.8
      }//MainData.classtype.soldier.state // end object
    },//MainData.classtype.soldier
    mage : {
      state : {
        'hp' : 12,
        'mp' : 25,
        'ad' : 2,
        'ap' : 15,
        'sp' : 0.5
      }//MainData.classtype.mage.state // end object
    }//MainData.classtype.mage // end object
  }// MainData.classtype // end object
};// MainData

var MakeCharacter = (function(){
  var Character = function(){
    console.log('캐릭터 생성!');
    this.classtype = 'beginner';
    this.level = 1;
    this.state = MainData.classtype.beginner.state;
  };
  Character.prototype.setClass = (function(){
    var setClass = function(classtype){
      console.log('직업 : ' + classtype);
      setClass.prototype.classtypeStateAdd(this,classtype);
    };
    setClass.prototype.classtypeStateAdd = (function(){
      var classtypeStateAdd = function(character,classtype){
        console.log(classtype + '의 스탯 설정중..');
        var statedata = function(classtype){
          var steatdata;
          if(classtype == 'soldier'){
            statedata = MainData.classtype.soldier;
          }else if(classtype == 'mage'){
            statedata = MainData.classtype.mage;
          }else{
            statedata = MainData.classtype.beginner;
          };
          return statedata;
        };
        var loop = function(character,classtype){
          var classtypeData = statedata(classtype);
          for(let p in character.state){
            character.state[p] = classtypeData.state[p];
          };
        };
        character.classtype = classtype;
        loop(character,classtype);
        console.log(classtype + '직업 스탯 설정완료');
      };
      return classtypeStateAdd;
    })();
    return setClass;
  })();

  Character.prototype.setTribe = function(){
    console.log('종족 설정!');
  };
  return Character;
})();

// var characterSet = (function(){
//   var characterSet = function(characterType){
//     console.log('you make ' + characterType);
//     if(characterType == 'soldier'){
//       return characterSet.prototype.setting('soldier');
//     };
//   };
//   characterSet.prototype.soldier = {
//     maxState : {
//       'hp' : 10,
//       'mp' : 5,
//       'ad' : 3
//     }
//   };
//   characterSet.prototype.setting = function(characterType){
//
//   };
//
//
//
//
// var Soldier = (function(){
//   var soldier = function(){
//     var thisObj = {};
//     // this.test = console.log(characterSet.prototype.soldier);
//     characterSet('soldier');
//   };
//   // soldier.prototype.characterSet = characterSet('soldier');
//   // characterSet('soldier');
//   return soldier;
// })();

var a = new MakeCharacter();
a.setClass('soldier');


// var b = new Character();
// b.setClass('mage');
// a.setTribe();
