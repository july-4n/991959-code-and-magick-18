'use strict';

(function () {
  var similarCharacters = document.querySelector('.setup-similar');
  similarCharacters.classList.remove('hidden');

  var setupUserName = document.querySelector('.setup-user-name');
  setupUserName.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.ESC_KEYCODE) {
      evt.stopPropagation();
    }
  });

  //  изменение цвета мантии по нажатию
  var wizardCoat = document.querySelector('.wizard-coat');
  var coatColorInput = document.querySelector('[name="coat-color"]');

  var changeCoatColor = function () {
    var wizardColorCoat = window.util.getRandomElement(window.COAT_COLORS);
    wizardCoat.style = 'fill:' + wizardColorCoat;
    coatColorInput.value = wizardColorCoat;
  };

  wizardCoat.addEventListener('click', function () {
    changeCoatColor();
  });

  //  изменение цвета глаз по нажатию
  var wizardEyes = document.querySelector('.wizard-eyes');
  var eyesColorInput = document.querySelector('[name="eyes-color"]');

  var changeEyesColor = function () {
    var wizardEyesColor = window.util.getRandomElement(window.EYES_COLORS);
    wizardEyes.style = 'fill:' + wizardEyesColor;
    eyesColorInput.value = wizardEyesColor;
  };
  wizardEyes.addEventListener('click', function () {
    changeEyesColor();
  });

  //  изменение цвета фаерболов по нажатию
  var fireball = document.querySelector('.setup-fireball');
  var fireballColorInput = document.querySelector('[name="fireball-color"]');

  var changeFireballColor = function () {
    var fireballColor = window.util.getRandomElement(window.FIREBALL_COLORS);
    fireball.style.backgroundColor = fireballColor;
    fireballColorInput.value = fireballColor;
  };

  fireball.addEventListener('click', function () {
    changeFireballColor();
  });
})();
