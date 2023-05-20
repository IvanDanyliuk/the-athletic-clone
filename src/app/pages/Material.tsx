import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppDispatch } from '../../features/store';
import { selectMaterial } from '../../features/materials/selectors';
import BackdropLoader from '../components/ui/BackdropLoader';
import { getMaterial } from '../../features/materials/asyncActions';
import { clearMaterial } from '../../features/materials/reducers';
import CommonMaterial from '../components/materials/CommonMaterial';
import Post from '../components/materials/Post';


const Material: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const material = useSelector(selectMaterial);

  useEffect(() => {
    dispatch(getMaterial(id!));
    return () => { dispatch(clearMaterial()) };
  }, []);

  if(!material) {
    return <BackdropLoader open={true} />;
  }

  return (
    <>
      {material.type !== 'post' ? (
        <CommonMaterial material={material} />
      ) : (
        <Post post={material} />
      )}
    </>
  );
};

export default Material;