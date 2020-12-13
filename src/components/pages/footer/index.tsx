import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Footer: React.FC = (props) => (
  <footer id="footer">
    <div>© 2018 АлтераСтрой</div>
  </footer>
);

Footer.propTypes = {
  timeout: PropTypes.bool,
};

export default Footer;
