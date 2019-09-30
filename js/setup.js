'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_NUMBER = 4;

//  получение случайного числа из массива
var getRandomElement = function (arr) {
  var max = arr.length;
  var randomElement = Math.round(Math.random() * (max - 1));
  return arr[randomElement];
};
//  генерируем случайное имя и свойства волшебника
var wizards = [];

for (var i = 0; i < WIZARDS_NUMBER; i++) {
  var wizard = {
    name: getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SURNAMES),
    coatColor: getRandomElement(COAT_COLORS),
    eyesColor: getRandomElement(EYES_COLORS)
  };
  wizards[i] = wizard;
}
// показываем окно настроек пользователя
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
//  показываем блок с похожими персонажами
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

document.querySelector('.setup-similar').classList.remove('hidden');

var renderWizard = function (magician) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  //  данные для шаблона
  wizardElement.querySelector('.setup-similar-label').textContent = magician.name;
  wizardElement.querySelector('.wizard-coat').style.fill = magician.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = magician.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
//  выводим 4 окна с волшебниками
for (var j = 0; j < wizards.length; j++) {
  fragment.appendChild(renderWizard(wizards[j]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
