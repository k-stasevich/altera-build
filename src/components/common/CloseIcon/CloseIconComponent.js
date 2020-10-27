import React from 'react';
import PropTypes from 'prop-types';

const CloseIcon = ({ onClick }) => <div className="close" onClick={onClick} />;

CloseIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
};

CloseIcon.defaultProps = {};

export default CloseIcon;
