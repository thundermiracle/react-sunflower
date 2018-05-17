import React, { Fragment } from 'react';

import IconButton from 'material-ui/IconButton';

import Language from 'material-ui-icons/Language';
import GitHub from './GitHub';

const ToolbarLinkIcons = () => {
  return (
    <Fragment>
      <IconButton
        href="https://www.thundermiracle.com"
        color="inherit"
      >
        <Language />
      </IconButton>
      <IconButton
        href="https://github.com/thundermiracle/react-sunflower"
        color="inherit"
      >
        <GitHub />
      </IconButton>
    </Fragment>
  );
};

export default ToolbarLinkIcons;
