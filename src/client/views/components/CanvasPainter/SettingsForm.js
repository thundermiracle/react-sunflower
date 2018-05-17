import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const styles = {
  buttonDiv: {
    display: 'flex',
    padding: '8px 0',
  },
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

class SettingsForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      radius: props.defaultSettings.radius,
      count: props.defaultSettings.count,
      interval: props.defaultSettings.interval,
      angle: props.defaultSettings.angle,
      deviation: props.defaultSettings.deviation,
    };
  }

  innerHandleChangeRadius = (e) => {
    this.innerHandleChange(e);

    const { handleChangeRadius } = this.props;
    if (handleChangeRadius) handleChangeRadius(e.target.value);
  }

  innerHandleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  innerDrawShape = () => {
    const { drawShape } = this.props;

    if (drawShape) drawShape(this.state);
  }

  innerDrawSyncShape = () => {
    const { drawSyncShape } = this.props;

    if (drawSyncShape) drawSyncShape(this.state);
  }

  renderTextField = (stateName) => {
    if (stateName == null || this.state[stateName] == null) return null;

    const changeFunc = stateName === 'radius' ? this.innerHandleChangeRadius : this.innerHandleChange;

    return (
      <Grid item xs={6} md={3}>
        <TextField
          name={stateName}
          type="number"
          value={this.state[stateName]}
          label={capitalizeFirstLetter(stateName)}
          margin="dense"
          fullWidth
          onChange={changeFunc}
        />
      </Grid>
    );
  }

  render() {
    const { classes } = this.props;

    const radiusPart = this.renderTextField('radius');
    const countPart = this.renderTextField('count');
    const intervalPart = this.renderTextField('interval');
    const anglePart = this.renderTextField('angle');
    const deviationPart = this.renderTextField('deviation');

    return (
      <Fragment>
        <Grid container spacing={8}>
          {radiusPart}
          {countPart}
          {intervalPart}
          {anglePart}
          {deviationPart}
          <Grid item xs={6} md={3} className={classes.buttonDiv}>
            <Button color="primary" onClick={this.innerDrawShape}>
              Draw
            </Button>
            <Button color="secondary" onClick={this.innerDrawSyncShape}>
              DrawSync
            </Button>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

SettingsForm.propTypes = {
  classes: PropTypes.object.isRequired,
  defaultSettings: PropTypes.object,
  drawShape: PropTypes.func,
  drawSyncShape: PropTypes.func,
  handleChangeRadius: PropTypes.func,
};

SettingsForm.defaultProps = {
  defaultSettings: {},
  drawShape: null,
  drawSyncShape: null,
  handleChangeRadius: null,
};

export default withStyles(styles)(SettingsForm);
