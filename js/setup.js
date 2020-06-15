'use strict';

var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56,159,117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARDS_NUMBER = 4;

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
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

// Генерируем случайные цвета для плаща, глаз и фаербола
var getRandomCoatColor = function () {
  wizardCoat.style.fill = COAT_COLORS[getRandomDigit(COAT_COLORS.length)];
  inputCoatColor.value = wizardCoat.style.fill;
};

var getRandomEyesColor = function () {
  wizardEyes.style.fill = EYES_COLORS[getRandomDigit(EYES_COLORS.length)];
  inputEyesColor.value = wizardEyes.style.fill;
};

var getRandomFireballColor = function () {
  var fireballRandomColor = FIREBALL_COLORS[getRandomDigit(FIREBALL_COLORS.length)];
  wizardFireball.style.background = fireballRandomColor;
  inputFireballColor.value = fireballRandomColor;
};

// Объединяем в одну функцию три ивент-лисенера
var setupWizardAppearance = function () {
  wizardCoat.addEventListener('click', getRandomCoatColor);
  wizardEyes.addEventListener('click', getRandomEyesColor);
  wizardFireball.addEventListener('click', getRandomFireballColor);
};

var removeWizardSetupListeners = function () {
  wizardCoat.removeEventListener('click', getRandomCoatColor);
  wizardEyes.removeEventListener('click', getRandomEyesColor);
  wizardFireball.removeEventListener('click', getRandomFireballColor);
};

setupOpen.addEventListener('click', function () {
  openPopup();
  setupWizardAppearance();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
    setupWizardAppearance();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
  removeWizardSetupListeners();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
    removeWizardSetupListeners();
  }
});

