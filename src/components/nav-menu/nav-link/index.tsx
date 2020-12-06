import React, { ReactNode } from 'react';

import './style.scss';

interface INavLinkProps {
  onClick: () => any;
  children: ReactNode;
}

export const NavLink: React.FC<INavLinkProps> = (props) => {
  const { onClick, children } = props;

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid, no-script-url
    <span className="nav-link-component" onClick={onClick}>
      {children}
    </span>
  );
};
