'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP_SHADOW = 10;
var GAP = 20;
var GAP_FIRST = 40;
var SPACEBETWEEN = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT_MAX = 150;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP_SHADOW, CLOUD_Y + GAP_SHADOW, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP * 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
  ctx.fillStyle = 'hsl(232, ' + Math.random() * 100 + '%, 87%)';
  ctx.fillRect(CLOUD_X + GAP * 2 + (SPACEBETWEEN + BAR_WIDTH)* i, (CLOUD_HEIGHT - GAP * 2 - (BAR_HEIGHT_MAX * times[i]) / maxTime),
  BAR_WIDTH, (BAR_HEIGHT_MAX * times[i]) / maxTime);
  ctx.fillStyle = '#000';
  ctx.fillText(players[i], CLOUD_X + GAP * 2 + (SPACEBETWEEN + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP);
  }
};
