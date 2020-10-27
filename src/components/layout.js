import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Helmet from 'react-helmet';

const Layout = (props) => {
  const { children } = props;
  const history = useHistory();

  let content;

  if (history.location.pathname === '/') {
    content = <div>{children}</div>;
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>{children}</div>
      </div>
    );
  }

  return (
    <>
      <Helmet
        title={'АлтераСтрой'}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      >
        <html lang="ru" />
      </Helmet>
      {content}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
