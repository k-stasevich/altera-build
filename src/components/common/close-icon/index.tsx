import React from 'react';

import './style.scss';

interface ICloseIconProps {
  onClick: () => any;
}

export const CloseIcon: React.FC<ICloseIconProps> = ({ onClick }) => (
  <div className="close-icon" onClick={onClick} />
);
