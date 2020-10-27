import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import ContactUs from './ContactUs';
import ServicesArticle from './ServicesArticle';

class Main extends React.Component {
  render() {
    const { onCloseArticle, article, articleTimeout, openArticle } = this.props;

    return (
      <div
        ref={this.props.wrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <ServicesArticle
          articleClasses={classnames({
            active: article === 'services',
            timeout: articleTimeout,
          })}
          onClose={onCloseArticle}
          openArticle={openArticle}
        />

        <ContactUs
          articleClasses={classnames({
            active: article === 'contact',
            timeout: articleTimeout,
          })}
          onClose={onCloseArticle}
        />
      </div>
    );
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func.isRequired,
  openArticle: PropTypes.func.isRequired,
  timeout: PropTypes.bool,
  wrapperRef: PropTypes.object.isRequired,
};

export default Main;
