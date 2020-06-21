'use strict';
(function () {
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
  for (var item = 0; item < window.constants.WIZARD_NUMBER; item++) {
    wizardsData.push(buildWizardUnit());
  }

  similarListElement.appendChild(renderBlock(wizardsData));

  document.querySelector('.setup-similar').classList.remove('hidden');
})();
