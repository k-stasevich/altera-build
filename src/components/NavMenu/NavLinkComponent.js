import React from 'react';
import PropTypes from 'prop-types';

const NavLink = (props) => {
  const { onClick, children } = props;

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid, no-script-url
    <span className="nav-link-component" onClick={onClick}>
      {children}
    </span>
  );
};

NavLink.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

NavLink.defaultProps = {};

export default NavLink;
