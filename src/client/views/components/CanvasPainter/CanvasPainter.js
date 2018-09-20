import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import drawFactory, { ShapeType } from 'core/DrawFactory';
import SettingsForm from './SettingsForm';

const styles = {
  rootDiv: {
    padding: 5,
  },
  canvasDiv: {
    textAlign: 'center',
  },
  canvas: {
    marginTop: 20,
    border: 'solid 1px lightgrey',
  },
};

class CanvasPainter extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      radius: props.settings.radius,
    };
  }

  componentDidMount() {
    this.ctx = this.canvas.getContext('2d');
  }

  componentWillUnmount() {
    this.ctx = null;
  }

  setCanvasRef = (element) => {
    this.canvas = element;
  }

  drawShape = (paramObj) => {
    this.innerDraw(paramObj, 'draw');
  }

  drawSyncShape = (paramObj) => {
    this.innerDraw(paramObj, 'drawSync');
  }

  innerDraw = (paramObj, drawFunc) => {
    const { shapeType } = this.props;
    const { radius, count, interval, angle, deviation } = paramObj;

    // clear
    this.ctx.clearRect(0, 0, parseInt(radius, 10) * 2, parseInt(radius, 10) * 2);

    // re-draw
    const canvasDrawer = drawFactory.createDraw(shapeType, this.ctx, parseInt(radius, 10), parseInt(interval, 10));
    canvasDrawer[drawFunc](parseInt(count, 10), null, null, parseFloat(angle), parseFloat(deviation));
  }

  handleChangeRadius = (radius) => {
    this.setState({ radius });
  }

  render() {
    const { settings } = this.props;
    const { radius } = this.state;

    const heightWidth = parseInt(radius, 10) * 2;
    return (
      <div style={styles.rootDiv}>
        <SettingsForm
          defaultSettings={{ ...settings, radius }}
          drawSyncShape={this.drawSyncShape}
          drawShape={this.drawShape}
          handleChangeRadius={this.handleChangeRadius}
        />
        <div style={styles.canvasDiv}>
          <canvas ref={this.setCanvasRef} width={heightWidth} height={heightWidth} style={styles.canvas} />
        </div>
      </div>
    );
  }
}

CanvasPainter.propTypes = {
  shapeType: PropTypes.oneOf([
    ShapeType.DotCircle,
    ShapeType.DotSpiral,
    ShapeType.Sunflower,
  ]).isRequired,
  settings: PropTypes.object.isRequired,
};

export default CanvasPainter;
