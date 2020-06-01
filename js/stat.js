'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var COLUMN_X = 150;
var COLUMN_Y = 100;
var NAME_Y = 270;
var GAP = 50;
var BAR_WIDTH = 40;
var MAX_WIDTH = 150;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var getRandomBlueColor = function() {
  return 'hsl(240, ' + Math.random() * 100 + '%, 50%)';
}

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = 'PT Mono 16px';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    var barHeight = (MAX_WIDTH * times[i]) / maxTime;

    ctx.fillText(players[i], COLUMN_X + (GAP + BAR_WIDTH) * i, NAME_Y);
    ctx.fillText(Math.round(times[i]), COLUMN_X + (GAP + BAR_WIDTH) * i, COLUMN_Y + (MAX_WIDTH - barHeight - 10));

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'red';
    } else {
      ctx.fillStyle = getRandomBlueColor();
    }
    ctx.fillRect(COLUMN_X + (GAP + BAR_WIDTH) * i, COLUMN_Y + (MAX_WIDTH - barHeight), BAR_WIDTH, barHeight);
  }
}
