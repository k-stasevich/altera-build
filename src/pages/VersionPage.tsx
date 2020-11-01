import React from 'react';
import packageJson from '../../package.json';

interface IVersionPage {}

export const VersionPage: React.FC<IVersionPage> = (props) => {
  return <div>{packageJson.version}</div>;
};
