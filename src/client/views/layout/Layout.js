import React from 'react';
import PropTypes from 'prop-types';

import ResponsiveLayout from 'components/ResponsiveLayout';

import DrawerHeader from './DrawerHeader';
import DrawerMenu from './DrawerMenu';

const Layout = (props) => {
  const { title, children } = props;
  
  const drawerHeader = (
    <DrawerHeader
      packageInfo={{
        version: process.env.PKG_VERSION,
        name: process.env.PKG_NAME,
      }}
    />
  );

  return (
    <ResponsiveLayout
      drawerHeader={drawerHeader}
      drawerMenu={<DrawerMenu />}
      title={title}
    >
      {children}
    </ResponsiveLayout>
  );
};

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Layout.defaultProps = {
  title: '',
  children: null,
};

export default Layout;
