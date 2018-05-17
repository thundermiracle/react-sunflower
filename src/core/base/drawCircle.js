const defaultDrawInfo = {
  drawMethod: 'fill',
  color: '#000',
  clear: false,
  radius: 10,
  cord: null,
};

const drawCircle = (ctx, drawInfoOpts) => {
  const drawInfo = { ...defaultDrawInfo, ...drawInfoOpts };
  const radius = drawInfo.radius;
  const realCenterCord = drawInfo.cord || { x: radius, y: radius };

  if (drawInfo.clear) ctx.clearRect(realCenterCord.x - radius, realCenterCord.y - radius, radius * 2, radius * 2);

  ctx.strokeStyle = drawInfo.color;
  ctx.fillStyle = drawInfo.color;
  ctx.beginPath();

  ctx.arc(realCenterCord.x, realCenterCord.y, radius, 0, 2 * Math.PI, false);
  ctx[drawInfo.drawMethod]();
};

export default drawCircle;
