'use strict';

var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56,159,117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_NUMBER = 4;

document.querySelector('.setup').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var getRandomDigit = function (maxValue) {
  return Math.floor(Math.random() * maxValue);
};

var buildWizardUnit = function () {
  var firstName = FIRST_NAMES[getRandomDigit(FIRST_NAMES.length)];
  var secondName = SECOND_NAMES[getRandomDigit(SECOND_NAMES.length)];
  var customWizard = {
    name: (Math.round(Math.random())) ? firstName + ' ' + secondName : secondName + ' ' + firstName,
    coatColor: COAT_COLORS[getRandomDigit(COAT_COLORS.length)],
    eyesColor: EYES_COLORS[getRandomDigit(EYES_COLORS.length)]
  };
  return customWizard;
};

var renderWizard = function (unit) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = unit.name;
  wizardElement.querySelector('.wizard-coat').style.fill = unit.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = unit.eyesColor;
  return wizardElement;
};

var renderBlock = function (dataArray) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < dataArray.length; i++) {
    fragment.appendChild(renderWizard(dataArray[i]));
  }
  return fragment;
};

// Заполняем массив объектами
var wizardsData = [];
for (var item = 0; item < WIZARDS_NUMBER; item++) {
  wizardsData.push(buildWizardUnit());
}

similarListElement.appendChild(renderBlock(wizardsData));

document.querySelector('.setup-similar').classList.remove('hidden');
