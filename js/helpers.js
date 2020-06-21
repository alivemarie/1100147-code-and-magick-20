'use strict';

window.helpers = (function () {
  return {
    maxElement: function (arr) {
      var maxElement = arr[0];
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxElement) {
          maxElement = arr[i];
        }
      }
      return maxElement;
    },
    randomNumber: function (maxValue) {
      return Math.floor(Math.random() * maxValue);
    },
    isEnterEvent: function (evt, action) {
      if (evt.key === 'Enter') {
        action();
      }
    },
    colorize: function (element, colors, elemInput) {
      element.addEventListener('click', function () {
        var color = colors[window.helpers.randomNumber(colors.length)];
        if (element.tagName.toLowerCase() === 'div') {
          element.style.backgroundColor = color;
        } else {
          element.style.fill = color;
        }
        elemInput.value = color;
      });
    }
  };
})();


