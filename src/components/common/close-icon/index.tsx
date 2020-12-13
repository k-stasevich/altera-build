import React, { ReactChild } from 'react';
import { Icon, IIconProps } from '../icon';

import styles from './close-icon.module.scss';

interface ICloseIconProps extends Omit<IIconProps, 'name'> {
  onClick: () => any;
}

export const CloseIconComponent: React.FC<ICloseIconProps> = ({
  onClick,
  width = 25,
  height = 25,
  fill = 'white',
}) => (
  <Icon
    name="cross"
    className={styles.icon}
    onClick={onClick}
    width={width}
    height={height}
    fill={fill}
    border-color={fill}
  />
);

interface ICloseIconWrapperComponent {
  children: ReactChild;
}

export const CloseIconWrapper: React.FC<ICloseIconWrapperComponent> = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);

export const CloseIcon = {
  Icon: CloseIconComponent,
  Wrapper: CloseIconWrapper,
};
