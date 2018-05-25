import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Link from 'next/link';

const styles = {
  logo: {
    width: '100%',
  },
  menuTitle: {
    height: '100%',
    padding: '10px 10px 0 10px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  titleVersion: {
    position: 'absolute',
    top: 60,
    right: 20,
    fontSize: 13,
    color: '#525252',
  },
};

const LayoutDrawerHeader = (props) => {
  const { classes, packageInfo } = props;
  return (
    <div className={classes.menuTitle}>
      <Link href="/">
        <div>
          <img
            src="/static/logo/RShor.png"
            alt={packageInfo.name || 'react-sunflower'}
            className={classes.logo}
          />
          <div className={classes.titleVersion}>v{packageInfo.version || '0.0.1'}</div>
        </div>
      </Link>
    </div>
  );
};

LayoutDrawerHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  packageInfo: PropTypes.object.isRequired,
};

export default withStyles(styles)(LayoutDrawerHeader);
