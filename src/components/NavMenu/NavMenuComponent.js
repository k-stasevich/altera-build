import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import NavLink from './NavLinkComponent';

const NavMenuComponent = props => {
  const { items } = props;

  return (
    <nav>
      <ul>
        {items.map(i => {
          return (
            <li
              key={i.title}
              className={classnames(i.className, { link: i.onClick })}
            >
              <NavLink onClick={i.onClick}>{i.title}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

NavMenuComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      onClick: PropTypes.func,
    })
  ),
};

NavMenuComponent.defaultProps = {};

export default NavMenuComponent;
