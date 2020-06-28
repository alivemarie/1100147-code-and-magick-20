'use strict';
(function () {
  var setupOpen = document.querySelector('.setup-open');
  var setup = document.querySelector('.setup');
  var setupCoords = {
    left: setup.style.left,
    top: setup.style.top
  };
  var setupClose = setup.querySelector('.setup-close');
  var setUserName = setup.querySelector('.setup-user-name');
  var wizardCoat = setup.querySelector('.wizard-coat');
  var wizardEyes = setup.querySelector('.wizard-eyes');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');
  var inputFireballColor = setup.querySelector('input[name=\'fireball-color\']');
  var inputCoatColor = setup.querySelector('input[name=\'coat-color\']');
  var inputEyesColor = setup.querySelector('input[name=\'eyes-color\']');

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
    setup.style.top = setupCoords.top;
    setup.style.left = setupCoords.left;
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

  // Похожие волшебники
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

  // Получение данных с сервера
  var onDownload = function (data) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < window.constants.WIZARD_NUMBER; i++) {
      fragment.appendChild(renderWizard(data[i]));
    }
    similarListElement.appendChild(fragment);
    document.querySelector('.setup-similar').classList.remove('hidden');
  };
  // Отправка данных на сервер
  var onSuccess = function () {
    setup.classList.add('hidden');
  };
  var onError = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  var form = setup.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), onSuccess, onError);
    evt.preventDefault();
  });

  window.backend.load(onDownload, onError);
})();
