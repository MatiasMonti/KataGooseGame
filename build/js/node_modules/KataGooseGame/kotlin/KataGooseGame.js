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
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var wrapFunction = Kotlin.wrapFunction;
  var Comparator = Kotlin.kotlin.Comparator;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  EnumRulePriority.prototype = Object.create(Enum.prototype);
  EnumRulePriority.prototype.constructor = EnumRulePriority;
  function EnumRulePriority(name, ordinal, priority) {
    Enum.call(this);
    this.priority = priority;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function EnumRulePriority_initFields() {
    EnumRulePriority_initFields = function () {
    };
    EnumRulePriority$High_instance = new EnumRulePriority('High', 0, 1);
    EnumRulePriority$Medium_instance = new EnumRulePriority('Medium', 1, 2);
    EnumRulePriority$Low_instance = new EnumRulePriority('Low', 2, 3);
    EnumRulePriority$Lowest_instance = new EnumRulePriority('Lowest', 3, 4);
  }
  var EnumRulePriority$High_instance;
  function EnumRulePriority$High_getInstance() {
    EnumRulePriority_initFields();
    return EnumRulePriority$High_instance;
  }
  var EnumRulePriority$Medium_instance;
  function EnumRulePriority$Medium_getInstance() {
    EnumRulePriority_initFields();
    return EnumRulePriority$Medium_instance;
  }
  var EnumRulePriority$Low_instance;
  function EnumRulePriority$Low_getInstance() {
    EnumRulePriority_initFields();
    return EnumRulePriority$Low_instance;
  }
  var EnumRulePriority$Lowest_instance;
  function EnumRulePriority$Lowest_getInstance() {
    EnumRulePriority_initFields();
    return EnumRulePriority$Lowest_instance;
  }
  EnumRulePriority.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EnumRulePriority',
    interfaces: [Enum]
  };
  function EnumRulePriority$values() {
    return [EnumRulePriority$High_getInstance(), EnumRulePriority$Medium_getInstance(), EnumRulePriority$Low_getInstance(), EnumRulePriority$Lowest_getInstance()];
  }
  EnumRulePriority.values = EnumRulePriority$values;
  function EnumRulePriority$valueOf(name) {
    switch (name) {
      case 'High':
        return EnumRulePriority$High_getInstance();
      case 'Medium':
        return EnumRulePriority$Medium_getInstance();
      case 'Low':
        return EnumRulePriority$Low_getInstance();
      case 'Lowest':
        return EnumRulePriority$Lowest_getInstance();
      default:
        throwISE('No enum constant EnumRulePriority.' + name);
    }
  }
  EnumRulePriority.valueOf_61zpoe$ = EnumRulePriority$valueOf;
  function GameData(boardSize) {
    if (boardSize === void 0)
      boardSize = 63;
    this.boardSize = boardSize;
  }
  GameData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameData',
    interfaces: []
  };
  GameData.prototype.component1 = function () {
    return this.boardSize;
  };
  GameData.prototype.copy_za3lpa$ = function (boardSize) {
    return new GameData(boardSize === void 0 ? this.boardSize : boardSize);
  };
  GameData.prototype.toString = function () {
    return 'GameData(boardSize=' + Kotlin.toString(this.boardSize) + ')';
  };
  GameData.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.boardSize) | 0;
    return result;
  };
  GameData.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.boardSize, other.boardSize))));
  };
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
    this.rules_0 = rules;
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
  GooseGame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GooseGame',
    interfaces: []
  };
  function GooseGame2Factory() {
    GooseGame2Factory_instance = this;
  }
  GooseGame2Factory.prototype.create = function () {
    return new GooseGame(listOf([new DefaultRule(), new MultiplesOfSixRule(), new TheHotel(), new TheWell(), new TheMaze(), new ThePrison(), new NumberSixRule(), new NoRule()]));
  };
  GooseGame2Factory.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'GooseGame2Factory',
    interfaces: []
  };
  var GooseGame2Factory_instance = null;
  function GooseGame2Factory_getInstance() {
    if (GooseGame2Factory_instance === null) {
      new GooseGame2Factory();
    }
    return GooseGame2Factory_instance;
  }
  function GooseGameBoardPrinter() {
    GooseGameBoardPrinter_instance = this;
  }
  GooseGameBoardPrinter.prototype.play_7xyelx$ = function (game) {
    var tmp$;
    tmp$ = (new GameData()).boardSize;
    for (var x = 1; x <= tmp$; x++) {
      println(game.showSpaceRule_za3lpa$(x));
    }
  };
  GooseGameBoardPrinter.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'GooseGameBoardPrinter',
    interfaces: []
  };
  var GooseGameBoardPrinter_instance = null;
  function GooseGameBoardPrinter_getInstance() {
    if (GooseGameBoardPrinter_instance === null) {
      new GooseGameBoardPrinter();
    }
    return GooseGameBoardPrinter_instance;
  }
  function GooseGameFactory() {
    GooseGameFactory_instance = this;
  }
  GooseGameFactory.prototype.create = function () {
    return new GooseGame(listOf([new DefaultRule(), new MultiplesOfSixRule(), new NumberSixRule(), new NoRule()]));
  };
  GooseGameFactory.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'GooseGameFactory',
    interfaces: []
  };
  var GooseGameFactory_instance = null;
  function GooseGameFactory_getInstance() {
    if (GooseGameFactory_instance === null) {
      new GooseGameFactory();
    }
    return GooseGameFactory_instance;
  }
  function main() {
    var myGooseGame = GooseGame2Factory_getInstance().create();
    GooseGameBoardPrinter_getInstance().play_7xyelx$(myGooseGame);
  }
  function Rule() {
  }
  Rule.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Rule',
    interfaces: []
  };
  function DefaultRule() {
    this.order_lgv9sk$_0 = EnumRulePriority$Low_getInstance().priority;
  }
  Object.defineProperty(DefaultRule.prototype, 'order', {
    configurable: true,
    get: function () {
      return this.order_lgv9sk$_0;
    }
  });
  DefaultRule.prototype.theInputFits_za3lpa$ = function (spaceBoard) {
    return 0 < spaceBoard && spaceBoard <= (new GameData()).boardSize;
  };
  DefaultRule.prototype.getRule_za3lpa$ = function (spaceBoard) {
    return 'Stay in space ' + spaceBoard;
  };
  DefaultRule.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultRule',
    interfaces: [Rule]
  };
  function MultiplesOfSixRule() {
    this.order_rwz341$_0 = EnumRulePriority$Medium_getInstance().priority;
  }
  Object.defineProperty(MultiplesOfSixRule.prototype, 'order', {
    configurable: true,
    get: function () {
      return this.order_rwz341$_0;
    }
  });
  MultiplesOfSixRule.prototype.theInputFits_za3lpa$ = function (spaceBoard) {
    return (spaceBoard % 6 | 0) === 0 && spaceBoard <= (new GameData()).boardSize;
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
    this.order_vxqwe2$_0 = EnumRulePriority$Lowest_getInstance().priority;
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
    this.order_y3oge4$_0 = EnumRulePriority$High_getInstance().priority;
  }
  Object.defineProperty(NumberSixRule.prototype, 'order', {
    configurable: true,
    get: function () {
      return this.order_y3oge4$_0;
    }
  });
  NumberSixRule.prototype.theInputFits_za3lpa$ = function (spaceBoard) {
    return spaceBoard === 6 && spaceBoard <= (new GameData()).boardSize;
  };
  NumberSixRule.prototype.getRule_za3lpa$ = function (spaceBoard) {
    return 'The Bridge: Go to space 12';
  };
  NumberSixRule.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NumberSixRule',
    interfaces: [Rule]
  };
  function TheHotel() {
    this.order_6j3hsw$_0 = EnumRulePriority$High_getInstance().priority;
  }
  Object.defineProperty(TheHotel.prototype, 'order', {
    configurable: true,
    get: function () {
      return this.order_6j3hsw$_0;
    }
  });
  TheHotel.prototype.theInputFits_za3lpa$ = function (spaceBoard) {
    return spaceBoard === 19 && spaceBoard <= (new GameData()).boardSize;
  };
  TheHotel.prototype.getRule_za3lpa$ = function (spaceBoard) {
    return 'Stay for (miss) one turn';
  };
  TheHotel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TheHotel',
    interfaces: [Rule]
  };
  function TheMaze() {
    this.order_n2jerj$_0 = EnumRulePriority$High_getInstance().priority;
  }
  Object.defineProperty(TheMaze.prototype, 'order', {
    configurable: true,
    get: function () {
      return this.order_n2jerj$_0;
    }
  });
  TheMaze.prototype.theInputFits_za3lpa$ = function (spaceBoard) {
    return spaceBoard === 42 && spaceBoard <= (new GameData()).boardSize;
  };
  TheMaze.prototype.getRule_za3lpa$ = function (spaceBoard) {
    return 'Go back to space 39';
  };
  TheMaze.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TheMaze',
    interfaces: [Rule]
  };
  function ThePrison() {
    this.order_63gguj$_0 = EnumRulePriority$High_getInstance().priority;
  }
  Object.defineProperty(ThePrison.prototype, 'order', {
    configurable: true,
    get: function () {
      return this.order_63gguj$_0;
    }
  });
  ThePrison.prototype.theInputFits_za3lpa$ = function (spaceBoard) {
    return (spaceBoard === 50 || spaceBoard === 55) && spaceBoard <= (new GameData()).boardSize;
  };
  ThePrison.prototype.getRule_za3lpa$ = function (spaceBoard) {
    return 'Wait until someone comes to release you then take your place';
  };
  ThePrison.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ThePrison',
    interfaces: [Rule]
  };
  function TheWell() {
    this.order_2vd382$_0 = EnumRulePriority$High_getInstance().priority;
  }
  Object.defineProperty(TheWell.prototype, 'order', {
    configurable: true,
    get: function () {
      return this.order_2vd382$_0;
    }
  });
  TheWell.prototype.theInputFits_za3lpa$ = function (spaceBoard) {
    return spaceBoard === 31 && spaceBoard <= (new GameData()).boardSize;
  };
  TheWell.prototype.getRule_za3lpa$ = function (spaceBoard) {
    return 'Wait until someone comes to pull you out then take your place';
  };
  TheWell.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TheWell',
    interfaces: [Rule]
  };
  Object.defineProperty(EnumRulePriority, 'High', {
    get: EnumRulePriority$High_getInstance
  });
  Object.defineProperty(EnumRulePriority, 'Medium', {
    get: EnumRulePriority$Medium_getInstance
  });
  Object.defineProperty(EnumRulePriority, 'Low', {
    get: EnumRulePriority$Low_getInstance
  });
  Object.defineProperty(EnumRulePriority, 'Lowest', {
    get: EnumRulePriority$Lowest_getInstance
  });
  _.EnumRulePriority = EnumRulePriority;
  _.GameData = GameData;
  _.GooseGame = GooseGame;
  Object.defineProperty(_, 'GooseGame2Factory', {
    get: GooseGame2Factory_getInstance
  });
  Object.defineProperty(_, 'GooseGameBoardPrinter', {
    get: GooseGameBoardPrinter_getInstance
  });
  Object.defineProperty(_, 'GooseGameFactory', {
    get: GooseGameFactory_getInstance
  });
  _.main = main;
  _.Rule = Rule;
  var package$rules = _.rules || (_.rules = {});
  package$rules.DefaultRule = DefaultRule;
  package$rules.MultiplesOfSixRule = MultiplesOfSixRule;
  package$rules.NoRule = NoRule;
  package$rules.NumberSixRule = NumberSixRule;
  package$rules.TheHotel = TheHotel;
  package$rules.TheMaze = TheMaze;
  package$rules.ThePrison = ThePrison;
  package$rules.TheWell = TheWell;
  main();
  Kotlin.defineModule('KataGooseGame', _);
  return _;
}));

//# sourceMappingURL=KataGooseGame.js.map
