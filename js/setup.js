'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARDS_NUMBER = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

//  получение случайного числа из массива
var getRandomElement = function (elements) {
  var max = elements.length;
  var randomIndex = Math.round(Math.random() * (max - 1));
  return elements[randomIndex];
};

//  генерируем случайное имя и свойства волшебника
var getWizard = function () {
  var wizard = {
    name: getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SURNAMES),
    coatColor: getRandomElement(COAT_COLORS),
    eyesColor: getRandomElement(EYES_COLORS)
  };
  return wizard;
};

//  наполняем массив нужным количеством сгенерированных объектов
var getRandomWizards = function () {
  var wizards = [];

  for (var i = 0; i < WIZARDS_NUMBER; i++) {
    var wizard = getWizard();
    wizards.push(wizard);
  }
  return wizards;
};

var similarListElement = document.querySelector('.setup-similar-list');

//  показываем блок с похожими персонажами
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var renderWizard = function (magician) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  //  данные для шаблона
  wizardElement.querySelector('.setup-similar-label').textContent = magician.name;
  wizardElement.querySelector('.wizard-coat').style.fill = magician.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = magician.eyesColor;
  return wizardElement;
};

var render = function (wizards) {
  var fragment = document.createDocumentFragment();
  //  выводим 4 окна с волшебниками
  for (var j = 0; j < wizards.length; j++) {
    fragment.appendChild(renderWizard(wizards[j]));
  }
  return fragment;
};
similarListElement.appendChild(render(getRandomWizards()));

var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setup = document.querySelector('.setup');

//  функция для закрытия окна по нажатию ECS
var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};
//  показываем окно (убираем класс hidden с элемента)
  var openWindow = function (element) {
   element.classList.remove('hidden');
 };
openWindow(document.querySelector('.setup-similar'));

//  функция для открытия окна
var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

//  функция для закрытия окна
var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

// Обработчик открытия окна по клику
setupOpen.addEventListener('click', function () {
  openPopup();
});

// Обработчик открытия окна по нажатию на Enter
setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

// Обработчик закрытия окна по клику
setupClose.addEventListener('click', function () {
  closePopup();
});

// Обработчик закрытия окна по нажатию на Enter
setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var setupUserName = document.querySelector('.setup-user-name');
setupUserName.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    evt.stopPropagation();
  }
});

//  изменение цвета мантии по нажатию
var wizardCoat = document.querySelector('.wizard-coat');

var coatClickHandler = function () {
  var wizardColorCoat = getRandomElement(COAT_COLORS);
  wizardCoat.style = 'fill:' + wizardColorCoat;
  document.querySelector('[name="coat-color"]').value = wizardColorCoat;
};

wizardCoat.addEventListener('click', function () {
  coatClickHandler();
});

//  изменение цвета глаз по нажатию
var wizardEyes = document.querySelector('.wizard-eyes');

var eyesColorHandler = function () {
  var wizardEyesColor = getRandomElement(EYES_COLORS);
  wizardEyes.style = 'fill:' + wizardEyesColor;
  document.querySelector('[name="eyes-color"]').value = wizardEyesColor;
};
wizardEyes.addEventListener('click', function () {
  eyesColorHandler();
});

//  изменение цвета фаерболов по нажатию
var fireball = document.querySelector('.setup-fireball');

var fireballColorHandler = function () {
  var fireballColor = getRandomElement(FIREBALL_COLORS);
  fireball.style.backgroundColor = fireballColor;
  document.querySelector('[name="fireball-color"]').value = fireballColor;
};

fireball.addEventListener('click', function () {
  fireballColorHandler();
});
