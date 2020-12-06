import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import ServicesArticle from './pages/services';

export const Main = (props) => {
  const { timeout, onCloseArticle, article, articleTimeout, openArticle, wrapperRef } = props;

  return (
    <div ref={wrapperRef} id="main" style={timeout ? { display: 'flex' } : { display: 'none' }}>
      <ServicesArticle
        articleClasses={classnames({
          active: article === 'services',
          timeout: articleTimeout,
        })}
        onClose={onCloseArticle}
        openArticle={openArticle}
      />
    </div>
  );
};

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func.isRequired,
  openArticle: PropTypes.func.isRequired,
  timeout: PropTypes.bool,
  wrapperRef: PropTypes.object.isRequired,
};
