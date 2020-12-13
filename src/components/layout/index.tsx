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

const pageVariants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};
const pageTransition = {
  duration: 0.3,
};

const Layout: React.FC<ILayoutProps> = (props) => {
  const { children, middle = false } = props;

  return (
    <motion.div
      style={{ height: '100%' }}
      exit="out"
      animate="in"
      initial="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Helmet>
        <html lang="ru" />
        <title>АлтераСтрой</title>
      </Helmet>

      <div id="wrapper" className={classnames('page', { middle })}>
        {children}
      </div>

      <div id="bg" />
    </motion.div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
