'use strict';

const actual = (innerColor, outerColor, r1) => {
  const canvasEl = document.createElement('canvas');
  const ctx = canvasEl.getContext('2d');

  const grd = ctx.createRadialGradient(50, 50, 0, 50, 50, r1);
  grd.addColorStop(0, innerColor);
  grd.addColorStop(1, outerColor);

  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, 100, 100);

  return canvasEl;
};
