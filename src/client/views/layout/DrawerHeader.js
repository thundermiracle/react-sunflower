import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

const styles = {
  menuTitle: {
    height: '100%',
    padding: '10px 10px 0 10px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  titleVersion: {
    fontWeight: 'normal',
    marginTop: 10,
    width: 'calc(100% - 10px)',
    fontSize: 13,
  },
};

const DrawerHeader = (props) => {
  const { classes, packageInfo } = props;
  return (
    <div className={classes.menuTitle}>
      {packageInfo.name || 'react-sunflower'}
      <div className={classes.titleVersion}>v{packageInfo.version || '0.0.1'}</div>
    </div>
  );
};

DrawerHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  packageInfo: PropTypes.object.isRequired,
};

export default withStyles(styles)(DrawerHeader);
