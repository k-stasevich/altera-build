import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import classnames from 'classnames';
import { motion } from 'framer-motion';

import './style.scss';

interface ILayoutProps {
  middle?: boolean;
  children: ReactNode;
}

const Layout: React.FC<ILayoutProps> = (props) => {
  const { children, middle = false } = props;

  const content = (
    <div id="wrapper" className={classnames('page', { middle })}>
      {children}
    </div>
  );

  return (
    <motion.div style={{ height: '100%' }}>
      <Helmet>
        <html lang="ru" />
        <title>АлтераСтрой</title>
      </Helmet>
      {content}

      <div id="bg" />
    </motion.div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
