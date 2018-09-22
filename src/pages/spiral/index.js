import React from 'react';

import { ShapeType } from 'core/DrawFactory';

import CanvasPainter from 'views/components/CanvasPainter';
import Constant from 'lib/Constant';

const DotSpiral = () => {
  const settings = {
    radius: 180,
    count: 1000,
    interval: 3,
    angle: Constant.GoldenAngle,
  };
  return (
    <CanvasPainter
      settings={settings}
      shapeType={ShapeType.DotSpiral}
    />
  );
};

export default DotSpiral;
