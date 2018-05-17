import Constant from 'lib/Constant';

import drawCircle from './base/drawCircle';
import Draw from './base/Draw';

class DrawDotSpiral extends Draw {
  constructor(ctx, lgRadius, interval = 5, dotRadius = 2) {
    super(interval, drawCircle, ctx);

    this.dotRadius = dotRadius;
    this.lgRadius = lgRadius;
  }

  makeDrawInfoList(
    count,
    paraStartCord = null,
    paraOuterRadius = null,
    paraAngle = null,
  ) {
    const angle = paraAngle || Constant.GoldenAngle;
    const startCord = paraStartCord || { x: this.lgRadius, y: this.lgRadius };
    const outerRadius = paraOuterRadius || this.lgRadius * 0.9;

    const radianIncrease = angle * Math.PI / 180;

    return [...Array(count).keys()]
      .map(num => num + 1)
      .map((iLoop) => {
        const ratio = iLoop / count;
        const spiralRadian = iLoop * radianIncrease;
        const spiralRadius = ratio * outerRadius;
        return {
          radius: this.dotRadius,
          cord: {
            x: startCord.x + Math.cos(spiralRadian) * spiralRadius,
            y: startCord.y + Math.sin(spiralRadian) * spiralRadius,
          },
        };
      });
  }
}

export default DrawDotSpiral;
