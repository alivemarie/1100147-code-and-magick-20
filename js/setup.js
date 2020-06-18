'use strict';

var WIZARDS_NUMBER = 4;

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var buildWizardUnit = function () {
  var firstName = window.constants.FIRST_NAMES[window.helpers.randomNumber(window.constants.FIRST_NAMES.length)];
  var secondName = window.constants.SECOND_NAMES[window.helpers.randomNumber(window.constants.SECOND_NAMES.length)];
  var customWizard = {
    name: (Math.round(Math.random())) ? firstName + ' ' + secondName : secondName + ' ' + firstName,
    coatColor: window.constants.COAT_COLORS[window.helpers.randomNumber(window.constants.COAT_COLORS.length)],
    eyesColor: window.constants.EYES_COLORS[window.helpers.randomNumber(window.constants.EYES_COLORS.length)]
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

// module4-task1

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var setUserName = setup.querySelector('.setup-user-name');
var wizardCoat = setup.querySelector('.wizard-coat');
var wizardEyes = setup.querySelector('.wizard-eyes');
var wizardFireball = setup.querySelector('.setup-fireball-wrap');
var inputFireballColor = setup.querySelector('input[name=\'fireball-color\']');
var inputCoatColor = setup.querySelector('input[name=\'coat-color\']');
var inputEyesColor = setup.querySelector('input[name=\'coat-color\']');

var onPopupEscPress = function (evt) {
  if ((evt.key === 'Escape') && (document.activeElement !== setUserName)) {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
  wizardCoat.addEventListener('click', getRandomCoatColor);
  wizardEyes.addEventListener('click', getRandomEyesColor);
  wizardFireball.addEventListener('click', getRandomFireballColor);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  wizardCoat.removeEventListener('click', getRandomCoatColor);
  wizardEyes.removeEventListener('click', getRandomEyesColor);
  wizardFireball.removeEventListener('click', getRandomFireballColor);
};

// Генерируем случайные цвета для плаща, глаз и фаербола
var getRandomCoatColor = window.helpers.colorize(wizardCoat, window.constants.COAT_COLORS, inputCoatColor);
var getRandomEyesColor = window.helpers.colorize(wizardEyes, window.constants.EYES_COLORS, inputEyesColor);
var getRandomFireballColor = window.helpers.colorize(wizardFireball, window.constants.FIREBALL_COLORS, inputFireballColor);

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  window.helpers.isEnterEvent(evt, openPopup);
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  window.helpers.isEnterEvent(evt, closePopup);
});

