import React from 'react';
import withAll from 'hoc/withAll';

import { ShapeType } from 'core/DrawFactory';

import CanvasPainter from 'views/components/CanvasPainter';

const DotCircle = () => {
  const settings = {
    radius: 180,
    count: 100,
    interval: 5,
  };
  return (
    <CanvasPainter
      settings={settings}
      shapeType={ShapeType.DotCircle}
    />
  );
};

export default withAll(DotCircle);
