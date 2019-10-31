'use strict';

(function () {

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  window.util = {
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    }
  };
  //  получение случайного числа из массива
  window.util.getRandomElement = function (elements) {
    var max = elements.length;
    return elements[Math.round(Math.random() * (max - 1))];
  };
})();
