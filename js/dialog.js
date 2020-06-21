'use strict';
(function () {
  var setup = document.querySelector('.setup');
  var dialogHandle = setup.querySelector('.upload');

  dialogHandle.addEventListener('mousedown', function (evt) {
    if (evt.buttons === 1) {
      evt.preventDefault();
      var startCoords = {
        x: evt.clientX,
        y: evt.clientY
      };

      var dragged = false;

      var onMouseMove = function (moveEvt) {
        moveEvt.preventDefault();
        dragged = true;
        var shift = {
          x: startCoords.x - moveEvt.clientX,
          y: startCoords.y - moveEvt.clientY
        };

        startCoords = {
          x: moveEvt.clientX,
          y: moveEvt.clientY
        };

        setup.style.top = (setup.offsetTop - shift.y) + 'px';
        setup.style.left = (setup.offsetLeft - shift.x) + 'px';
      };

      var onMouseUp = function (upEvt) {
        upEvt.preventDefault();
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);

        if (dragged) {
          var onClickPrevendDefault = function (clickEvt) {
            clickEvt.preventDefault();
            dialogHandle.removeEventListener('click', onClickPrevendDefault);
          };
          dialogHandle.addEventListener('click', onClickPrevendDefault);
        }
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    }
  });
})();
