import React from 'react';

import { ReactComponent as crossSvg } from '../../../assets/icons/cross.svg';

const icons = {
  cross: crossSvg,
};

export interface IIconProps {
  name: keyof typeof icons;
  onClick: () => any;
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
}

export const Icon: React.FC<IIconProps> = (props) => {
  const { name, onClick, ...other } = props;
  const IconComponent = icons[name];

  return (
    <span onClick={onClick}>
      <IconComponent {...other} />
    </span>
  );
};
