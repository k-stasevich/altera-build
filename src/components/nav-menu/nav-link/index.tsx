import React, { ReactNode } from 'react';

import './style.scss';

interface INavLinkProps {
  onClick?: () => any;
  children: ReactNode;
}

export const NavLink: React.FC<INavLinkProps> = (props) => {
  const { onClick, children } = props;

  return (
    <span
      className="nav-link-component"
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'initial' }}
    >
      {children}
    </span>
  );
};
