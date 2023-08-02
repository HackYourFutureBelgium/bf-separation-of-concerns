'use strict';

const actual = (color, rect) => {
  const canvasEl = document.createElement('canvas');
  const ctx = canvasEl.getContext('2d');

  ctx.fillStyle = color;
  ctx.fillRect(rect[0], rect[1], rect[2], rect[3]);

  return canvasEl;
};
