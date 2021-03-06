import React from 'react';

import { NextLink } from 'lib/NextRelative';

import DrawerMenu from 'components/DrawerMenu';

import PATH_MAP from 'client/PathMap';

const LayoutDrawerMenu = () => {
  return (
    <DrawerMenu
      pathMap={PATH_MAP}
      linkComponent={NextLink}
    />
  );
};

export default LayoutDrawerMenu;
