import React from 'react';
import classnames from 'classnames';
import { BTN_TYPES } from '../../../constants/constants';

interface IButtonProps {
  onClick: () => any;
  disabled?: boolean;
  theme: BTN_TYPES;
}

export const Button: React.FC<IButtonProps> = (props) => {
  const { children, theme = BTN_TYPES.DEFAULT, ...other } = props;

  return (
    <button type="button" {...other} className={classnames(theme)}>
      {children}
    </button>
  );
};
