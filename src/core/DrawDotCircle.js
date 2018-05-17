import drawCircle from './base/drawCircle';
import Draw from './base/Draw';

class DrawDotCircle extends Draw {
  constructor(ctx, lgRadius, interval = 5) {
    super(interval, drawCircle, ctx);

    this.lgRadius = lgRadius;
  }

  makeDrawInfoList(
    count,
    paraStartCord = null,
    paralgRadius = null,
  ) {
    const startCord = paraStartCord || { x: this.lgRadius, y: this.lgRadius };
    const lgRadius = paralgRadius || this.lgRadius * 0.9;

    const lgCircle = 2 * Math.PI * lgRadius;
    const dotRadius = (lgCircle / count) / 2;

    return [...Array(count).keys()]
      .map(num => num + 1)
      .map((iLoop) => {
        const radian = iLoop * 2 * Math.PI / count;
        return {
          radius: dotRadius,
          cord: {
            x: startCord.x + Math.cos(radian) * lgRadius,
            y: startCord.y + Math.sin(radian) * lgRadius,
          },
        };
      });
  }
}

export default DrawDotCircle;
