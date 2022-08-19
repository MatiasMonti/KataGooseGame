(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'KataGooseGame'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'KataGooseGame'.");
    }
    root.KataGooseGame = factory(typeof KataGooseGame === 'undefined' ? {} : KataGooseGame, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var wrapFunction = Kotlin.wrapFunction;
  var Comparator = Kotlin.kotlin.Comparator;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var compareBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function GooseGame(rules) {
    GooseGame$Companion_getInstance();
    this.rules_0 = rules;
  }
  function GooseGame$Companion() {
    GooseGame$Companion_instance = this;
    this.boardSize = 63;
  }
  GooseGame$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GooseGame$Companion_instance = null;
  function GooseGame$Companion_getInstance() {
    if (GooseGame$Companion_instance === null) {
      new GooseGame$Companion();
    }
    return GooseGame$Companion_instance;
  }
  function GooseGame$showSpaceRule$lambda(it) {
    return it.order;
  }
  GooseGame.prototype.showSpaceRule_za3lpa$ = function (boardSpaceNumber) {
    var $receiver = this.rules_0;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.theInputFits_za3lpa$(boardSpaceNumber))
        destination.add_11rb$(element);
    }
    var $receiver_0 = sortedWith(destination, new Comparator(compareBy$lambda(GooseGame$showSpaceRule$lambda)));
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination_0.add_11rb$(item.getRule_za3lpa$(boardSpaceNumber));
    }
    return first(destination_0);
  };
  GooseGame.prototype.runThroughBoard = function () {
    for (var x = 1; x <= 63; x++) {
      println(this.showSpaceRule_za3lpa$(x));
    }
  };
  GooseGame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GooseGame',
    interfaces: []
  };
  function main() {
    var myGooseGame = new GooseGame(listOf([new DefaultRule(), new MultiplesOfSixRule(), new NumberSixRule(), new NoRule()]));
    myGooseGame.runThroughBoard();
  }
  function Rule() {
  }
  Rule.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Rule',
    interfaces: []
  };
  function DefaultRule() {
    this.order_lgv9sk$_0 = 3;
  }
  Object.defineProperty(DefaultRule.prototype, 'order', {
    configurable: true,
    get: function () {
      return this.order_lgv9sk$_0;
    }
  });
  DefaultRule.prototype.theInputFits_za3lpa$ = function (spaceBoard) {
    return 0 < spaceBoard && spaceBoard <= GooseGame$Companion_getInstance().boardSize;
  };
  DefaultRule.prototype.getRule_za3lpa$ = function (spaceBoard) {
    return 'Stay in space ' + spaceBoard;
  };
  DefaultRule.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultRule',
    interfaces: [Rule]
  };
  function MultipleOfSixRule() {
  }
  MultipleOfSixRule.prototype.theImputFits_za3lpa$ = function (spaceBoard) {
    return (spaceBoard % 6 | 0) === 0;
  };
  MultipleOfSixRule.prototype.getRule_za3lpa$ = function (spaceBoard) {
    return 'Move two spaces forward.';
  };
  MultipleOfSixRule.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MultipleOfSixRule',
    interfaces: [Rule]
  };
  function MultiplesOfSixRule() {
    this.order_rwz341$_0 = 2;
  }
  Object.defineProperty(MultiplesOfSixRule.prototype, 'order', {
    configurable: true,
    get: function () {
      return this.order_rwz341$_0;
    }
  });
  MultiplesOfSixRule.prototype.theInputFits_za3lpa$ = function (spaceBoard) {
    return (spaceBoard % 6 | 0) === 0 && spaceBoard <= 63;
  };
  MultiplesOfSixRule.prototype.getRule_za3lpa$ = function (spaceBoard) {
    return 'Move two spaces forward.';
  };
  MultiplesOfSixRule.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MultiplesOfSixRule',
    interfaces: [Rule]
  };
  function NoRule() {
    this.order_vxqwe2$_0 = 100;
  }
  Object.defineProperty(NoRule.prototype, 'order', {
    configurable: true,
    get: function () {
      return this.order_vxqwe2$_0;
    }
  });
  NoRule.prototype.theInputFits_za3lpa$ = function (spaceBoard) {
    return true;
  };
  NoRule.prototype.getRule_za3lpa$ = function (spaceBoard) {
    return 'There is no Rule for that Board Space';
  };
  NoRule.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NoRule',
    interfaces: [Rule]
  };
  function NumberSixRule() {
    this.order_y3oge4$_0 = 1;
  }
  Object.defineProperty(NumberSixRule.prototype, 'order', {
    configurable: true,
    get: function () {
      return this.order_y3oge4$_0;
    }
  });
  NumberSixRule.prototype.theInputFits_za3lpa$ = function (spaceBoard) {
    return spaceBoard === 6 && spaceBoard <= 63;
  };
  NumberSixRule.prototype.getRule_za3lpa$ = function (spaceBoard) {
    return 'The Bridge: Go to space 12';
  };
  NumberSixRule.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NumberSixRule',
    interfaces: [Rule]
  };
  Object.defineProperty(GooseGame, 'Companion', {
    get: GooseGame$Companion_getInstance
  });
  _.GooseGame = GooseGame;
  _.main = main;
  _.Rule = Rule;
  var package$rules = _.rules || (_.rules = {});
  package$rules.DefaultRule = DefaultRule;
  var package$Rules = _.Rules || (_.Rules = {});
  package$Rules.MultipleOfSixRule = MultipleOfSixRule;
  package$rules.MultiplesOfSixRule = MultiplesOfSixRule;
  package$rules.NoRule = NoRule;
  package$rules.NumberSixRule = NumberSixRule;
  main();
  Kotlin.defineModule('KataGooseGame', _);
  return _;
}));

//# sourceMappingURL=KataGooseGame.js.map
