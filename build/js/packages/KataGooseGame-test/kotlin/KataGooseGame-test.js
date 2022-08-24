(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-test', 'KataGooseGame'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-test'), require('KataGooseGame'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'KataGooseGame-test'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'KataGooseGame-test'.");
    }
    if (typeof this['kotlin-test'] === 'undefined') {
      throw new Error("Error loading module 'KataGooseGame-test'. Its dependency 'kotlin-test' was not found. Please, check whether 'kotlin-test' is loaded prior to 'KataGooseGame-test'.");
    }
    if (typeof KataGooseGame === 'undefined') {
      throw new Error("Error loading module 'KataGooseGame-test'. Its dependency 'KataGooseGame' was not found. Please, check whether 'KataGooseGame' is loaded prior to 'KataGooseGame-test'.");
    }
    root['KataGooseGame-test'] = factory(typeof this['KataGooseGame-test'] === 'undefined' ? {} : this['KataGooseGame-test'], kotlin, this['kotlin-test'], KataGooseGame);
  }
}(this, function (_, Kotlin, $module$kotlin_test, $module$KataGooseGame) {
  'use strict';
  var assertEquals = $module$kotlin_test.kotlin.test.assertEquals_3m0tl5$;
  var anonymous = $module$KataGooseGame;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var test = $module$kotlin_test.kotlin.test.test;
  var suite = $module$kotlin_test.kotlin.test.suite;
  function GooseGameShould() {
    this.myGooseGame_0 = anonymous.GooseGameFactory.create();
    this.myGooseGame2_0 = anonymous.GooseGame2Factory.create();
  }
  GooseGameShould.prototype.printSpace1Should = function () {
    var result = this.myGooseGame_0.showSpaceRule_za3lpa$(1);
    assertEquals(result, 'Stay in space 1');
  };
  GooseGameShould.prototype.printSpace2Should = function () {
    var result = this.myGooseGame_0.showSpaceRule_za3lpa$(2);
    assertEquals(result, 'Stay in space 2');
  };
  GooseGameShould.prototype.printMultipleOfSixShould = function () {
    var result = this.myGooseGame_0.showSpaceRule_za3lpa$(12);
    assertEquals(result, 'Move two spaces forward.');
  };
  GooseGameShould.prototype.printAnotherMultipleOfSixShould = function () {
    var result = this.myGooseGame_0.showSpaceRule_za3lpa$(18);
    assertEquals(result, 'Move two spaces forward.');
  };
  GooseGameShould.prototype.printNumberSixShould = function () {
    var result = this.myGooseGame_0.showSpaceRule_za3lpa$(6);
    assertEquals(result, 'The Bridge: Go to space 12');
  };
  GooseGameShould.prototype.wrongSpaceBoardShould = function () {
    var result = this.myGooseGame_0.showSpaceRule_za3lpa$(78);
    assertEquals(result, 'There is no Rule for that Board Space');
  };
  GooseGameShould.prototype.gooseGame2TheHotelShould = function () {
    var result = this.myGooseGame2_0.showSpaceRule_za3lpa$(19);
    assertEquals(result, 'Stay for (miss) one turn');
  };
  GooseGameShould.prototype.gooseGame2TheWellShould = function () {
    var result = this.myGooseGame2_0.showSpaceRule_za3lpa$(31);
    assertEquals(result, 'Wait until someone comes to pull you out then take your place');
  };
  GooseGameShould.prototype.gooseGame2TheMazeShould = function () {
    var result = this.myGooseGame2_0.showSpaceRule_za3lpa$(42);
    assertEquals(result, 'Go back to space 39');
  };
  GooseGameShould.prototype.gooseGame2ThePrison50Should = function () {
    var result = this.myGooseGame2_0.showSpaceRule_za3lpa$(50);
    assertEquals(result, 'Wait until someone comes to release you then take your place');
  };
  GooseGameShould.prototype.gooseGame2ThePrison55Should = function () {
    var result = this.myGooseGame2_0.showSpaceRule_za3lpa$(55);
    assertEquals(result, 'Wait until someone comes to release you then take your place');
  };
  GooseGameShould.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GooseGameShould',
    interfaces: []
  };
  _.GooseGameShould = GooseGameShould;
  suite('', false, function () {
    suite('GooseGameShould', false, function () {
      test('printSpace1Should', false, function () {
        return (new GooseGameShould()).printSpace1Should();
      });
      test('printSpace2Should', false, function () {
        return (new GooseGameShould()).printSpace2Should();
      });
      test('printMultipleOfSixShould', false, function () {
        return (new GooseGameShould()).printMultipleOfSixShould();
      });
      test('printAnotherMultipleOfSixShould', false, function () {
        return (new GooseGameShould()).printAnotherMultipleOfSixShould();
      });
      test('printNumberSixShould', false, function () {
        return (new GooseGameShould()).printNumberSixShould();
      });
      test('wrongSpaceBoardShould', false, function () {
        return (new GooseGameShould()).wrongSpaceBoardShould();
      });
      test('gooseGame2TheHotelShould', false, function () {
        return (new GooseGameShould()).gooseGame2TheHotelShould();
      });
      test('gooseGame2TheWellShould', false, function () {
        return (new GooseGameShould()).gooseGame2TheWellShould();
      });
      test('gooseGame2TheMazeShould', false, function () {
        return (new GooseGameShould()).gooseGame2TheMazeShould();
      });
      test('gooseGame2ThePrison50Should', false, function () {
        return (new GooseGameShould()).gooseGame2ThePrison50Should();
      });
      test('gooseGame2ThePrison55Should', false, function () {
        return (new GooseGameShould()).gooseGame2ThePrison55Should();
      });
    });
  });
  Kotlin.defineModule('KataGooseGame-test', _);
  return _;
}));

//# sourceMappingURL=KataGooseGame-test.js.map
