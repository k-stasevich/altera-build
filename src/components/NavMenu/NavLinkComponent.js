import React from 'react';
import PropTypes from 'prop-types';

const NavLink = (props) => {
  const { onClick, children } = props;

  return (
    <a className="nav-link-component" href="javascript:;" onClick={onClick}>
      {children}
    </a>
  );
};

NavLink.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.element,
};

NavLink.defaultProps = {};

export default NavLink;
