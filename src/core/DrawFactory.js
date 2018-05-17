import DrawDotCircle from './DrawDotCircle';
import DrawDotSpiral from './DrawDotSpiral';
import DrawSunflower from './DrawSunflower';

export const ShapeType = {
  DotCircle: 0,
  DotSpiral: 1,
  Sunflower: 2,
};

const ShapeDrawMap = {
  [ShapeType.DotCircle]: DrawDotCircle,
  [ShapeType.DotSpiral]: DrawDotSpiral,
  [ShapeType.Sunflower]: DrawSunflower,
};

function DrawFactory() {}

DrawFactory.prototype.DrawClass = DrawDotCircle;

DrawFactory.prototype.createDraw = function (type, ...args) {
  this.DrawClass = ShapeDrawMap[type] || DrawDotCircle;

  return new this.DrawClass(...args);
};

export default new DrawFactory();
