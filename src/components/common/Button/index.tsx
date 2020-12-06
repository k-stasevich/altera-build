import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import classnames from 'classnames';
import { BTN_TYPES } from '../../../constants/constants';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  theme?: BTN_TYPES;
  children: ReactNode;
}

export const Button: React.FC<IButtonProps> = (props) => {
  const { children, theme = BTN_TYPES.DEFAULT, type = 'button', ...other } = props;

  return (
    <button type={type} {...other} className={classnames(theme)}>
      {children}
    </button>
  );
};
