import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// import pic02 from '../images/pic02.jpg';
// import pic03 from '../images/pic03.jpg';
import ServicesArticle from './ServicesArticle';
import ContactUs from './ContactUs';

class Main extends React.Component {
  render() {
    const { onCloseArticle, article, articleTimeout, openArticle } = this.props;

    return (
      <div
        ref={this.props.setWrapperRef}
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
  setWrapperRef: PropTypes.func.isRequired,
};

export default Main;
