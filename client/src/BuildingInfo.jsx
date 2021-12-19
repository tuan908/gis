import React from 'react';
import { useLocation } from 'react-router-dom';

const BuildingInfo = () => {
  const data = useLocation();
  console.log(data);

  return <div>1</div>;
};

export default BuildingInfo;
