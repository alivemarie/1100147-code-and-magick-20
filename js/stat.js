'use strict';

window.renderStatistics = function (ctx, players, times) {
  window.helpers.renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  window.helpers.renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = 'PT Mono 16px';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var maxTime = window.helpers.maxElement(times);
  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    var barHeight = (window.constants.MAX_WIDTH * times[i]) / maxTime;

    ctx.fillText(players[i], window.constants.COLUMN_X + (window.constants.GAP + window.constants.BAR_WIDTH) * i, window.constants.NAME_Y);
    ctx.fillText(Math.round(times[i]), window.constants.COLUMN_X + (window.constants.GAP + window.constants.BAR_WIDTH) * i, window.constants.COLUMN_Y + (window.constants.MAX_WIDTH - barHeight - 10));

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'red';
    } else {
      ctx.fillStyle = 'hsl(240, ' + Math.random() * 100 + '%, 50%)';
    }
    ctx.fillRect(window.constants.COLUMN_X + (window.constants.GAP + window.constants.BAR_WIDTH) * i, window.constants.COLUMN_Y + (window.constants.MAX_WIDTH - barHeight), window.constants.BAR_WIDTH, barHeight);
  }
};
