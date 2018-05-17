import Constant from 'lib/Constant';

import drawCircle from './base/drawCircle';
import Draw from './base/Draw';

class DrawSunflower extends Draw {
  constructor(ctx, lgRadius, interval = 5) {
    super(interval, drawCircle, ctx);

    this.lgRadius = lgRadius;
  }

  makeDrawInfoList(
    count,
    paraStartCord = null,
    paraOuterRadius = null,
    paraAngle = null,
    paraDeviation = null,
  ) {
    const angle = paraAngle || Constant.GoldenAngle;
    const startCord = paraStartCord || { x: this.lgRadius, y: this.lgRadius };
    const outerRadius = paraOuterRadius || this.lgRadius * 0.9;

    const deviation = paraDeviation || 0.6;
    const meanArea = Math.PI * (outerRadius ** 2) / count;

    const minArea = meanArea * (1 - deviation);
    const maxArea = meanArea * (1 + deviation);
    const radianIncrease = angle * Math.PI / 180;
    let cumArea = 0;
    const fudge = 0.87;

    return [...Array(count).keys()]
      .map(num => num + 1)
      .map((iLoop) => {
        const ratio = iLoop / count;
        const dotArea = minArea + ratio * (maxArea - minArea);
        const dotRadius = Math.sqrt(dotArea / Math.PI);

        cumArea += dotArea;
        const spiralRadian = iLoop * radianIncrease;
        const spiralRadius = Math.sqrt(cumArea / Math.PI);

        return {
          radius: dotRadius * fudge,
          cord: {
            x: startCord.x + Math.cos(spiralRadian) * spiralRadius,
            y: startCord.y + Math.sin(spiralRadian) * spiralRadius,
          },
        };
      });
  }
}

export default DrawSunflower;
