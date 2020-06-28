'use strict';
(function () {

  window.backend = {
    save: function (data, onLoad, onError) {
      var URL = 'https://javascript.pages.academy/code-and-magick';
      var statusCode = {
        OK: 200
      };

      var xhr = new XMLHttpRequest();

      xhr.addEventListener('load', function () {
        if (xhr.status === statusCode.OK) {
          onLoad(xhr.response);
        } else {
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        }
        xhr.addEventListener('error', function () {
          onError('Произошла ошибка соединения');
        });
        xhr.addEventListener('timeout', function () {
          onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
        });
        xhr.timeout = 3000; // 10s

      });

      xhr.open('POST', URL);
      xhr.send(data);
    },
    load: function (onLoad, onError) {
      var URL = 'https://javascript.pages.academy/code-and-magick/data';
      var statusCode = {
        OK: 200
      };

      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        if (xhr.status === statusCode.OK) {
          onLoad(xhr.response);
        } else {
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        }
      });
      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });
      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      });
      xhr.timeout = 3000; // 10s
      xhr.open('GET', URL);
      xhr.send();
    }
  };
})();
