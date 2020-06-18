'use strict';

window.constants = (function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var COLUMN_X = 150;
  var COLUMN_Y = 100;
  var NAME_Y = 270;
  var GAP = 50;
  var BAR_WIDTH = 40;
  var MAX_WIDTH = 150;
  var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56,159,117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var WIZARDS_NUMBER = 4;

  return {
    CLOUD_WIDTH: CLOUD_WIDTH,
    CLOUD_HEIGHT: CLOUD_HEIGHT,
    COLUMN_X: COLUMN_X,
    COLUMN_Y: COLUMN_Y,
    NAME_Y: NAME_Y,
    GAP: GAP,
    BAR_WIDTH: BAR_WIDTH,
    MAX_WIDTH: MAX_WIDTH,
    FIRST_NAMES: FIRST_NAMES,
    SECOND_NAMES: SECOND_NAMES,
    COAT_COLORS: COAT_COLORS,
    EYES_COLORS: EYES_COLORS,
    FIREBALL_COLORS: FIREBALL_COLORS,
    WIZARD_NUMBER: WIZARDS_NUMBER
  };
})();

