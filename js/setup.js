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
})();

