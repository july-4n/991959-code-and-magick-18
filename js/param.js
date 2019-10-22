'use strict';

(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var WIZARDS_NUMBER = 4;
  var similarListElement = document.querySelector('.setup-similar-list');

  //  генерируем случайное имя и свойства волшебника
  var getWizard = function () {
    var wizard = {
      name: window.util.getRandomElement(WIZARD_NAMES) + ' ' + window.util.getRandomElement(WIZARD_SURNAMES),
      coatColor: window.util.getRandomElement(COAT_COLORS),
      eyesColor: window.util.getRandomElement(EYES_COLORS)
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
  //console.log(FIREBALL_COLORS);

  window.FIREBALL_COLORS = FIREBALL_COLORS;
  window.COAT_COLORS = COAT_COLORS;
  window.EYES_COLORS = EYES_COLORS;

})();
 //console.log(window.FIREBALL_COLORS);
