import React from 'react';
import { IMaterial } from '../../../features/materials/types';


interface ICommonMaterialProps {
  material: IMaterial
}

const CommonMaterial: React.FC<ICommonMaterialProps> = ({ material }) => {
  return (
    <div>CommonMaterial</div>
  );
};

export default CommonMaterial;