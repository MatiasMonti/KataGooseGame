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
  var DefaultRule = $module$KataGooseGame.rules.DefaultRule;
  var MultiplesOfSixRule = $module$KataGooseGame.rules.MultiplesOfSixRule;
  var NumberSixRule = $module$KataGooseGame.rules.NumberSixRule;
  var NoRule = $module$KataGooseGame.rules.NoRule;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var GooseGame = $module$KataGooseGame.GooseGame;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var test = $module$kotlin_test.kotlin.test.test;
  var suite = $module$kotlin_test.kotlin.test.suite;
  function GooseGameShould() {
    this.myGooseGame_0 = new GooseGame(listOf([new DefaultRule(), new MultiplesOfSixRule(), new NumberSixRule(), new NoRule()]));
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
    });
  });
  Kotlin.defineModule('KataGooseGame-test', _);
  return _;
}));

//# sourceMappingURL=KataGooseGame-test.js.map
