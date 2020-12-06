import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Footer: React.FC = (props) => (
  <footer id="footer">
    <span>© 2018 АлтераСтрой</span>
  </footer>
);

Footer.propTypes = {
  timeout: PropTypes.bool,
};

export default Footer;
