import React from 'react';
import classnames from 'classnames';
import { NavLink } from './nav-link';

interface INavItem {
  title: string;
  className?: string;
  onClick?: () => any;
}

const stub = () => {};

interface INavMenuProps {
  items: INavItem[];
}

export const NavMenu: React.FC<INavMenuProps> = (props) => {
  const { items } = props;

  return (
    <nav>
      <ul>
        {items.map((i) => {
          return (
            <li key={i.title} className={classnames(i.className, { link: i.onClick })}>
              <NavLink onClick={i.onClick ? i.onClick : stub}>{i.title}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

NavMenu.defaultProps = {};
