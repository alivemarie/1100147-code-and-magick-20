(function () {
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var renderWizard = function (unit) {

    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = unit.name;
    wizardElement.querySelector('.wizard-coat').style.fill = unit.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = unit.colorEyes;
    return wizardElement;
  };
  window.render = function (data) {
    var fragment = document.createDocumentFragment();
    var takeNumber = data.length > window.constants.WIZARD_NUMBER ? window.constants.WIZARD_NUMBER : data.length;
    similarListElement.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      fragment.appendChild(renderWizard(data[i]));
    }
    similarListElement.appendChild(fragment);
    document.querySelector('.setup-similar').classList.remove('hidden');
  };
})();
