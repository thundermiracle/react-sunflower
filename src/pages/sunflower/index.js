import React from 'react';
import withAll from 'hoc/withAll';

import { ShapeType } from 'core/DrawFactory';

import CanvasPainter from 'views/components/CanvasPainter';
import Constant from 'lib/Constant';

const Sunflower = () => {
  const settings = {
    radius: 180,
    count: 1000,
    interval: 3,
    angle: Constant.GoldenAngle,
    deviation: 0.6,
  };
  return (
    <CanvasPainter
      settings={settings}
      shapeType={ShapeType.Sunflower}
    />
  );
};

export default withAll(Sunflower);
