import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';
import { AppDispatch } from '../../features/store';
import { getRecentMaterials } from '../../features/materials/asyncActions';
import { selectMaterials } from '../../features/materials/selectors';
import Headlines from '../components/homepage/Headlines';
import BackdropLoader from '../components/ui/BackdropLoader';
import PostsSearch from '../components/materials/PostsSearch';


const Post: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const headlines = useSelector(selectMaterials);

  useEffect(() => {
    dispatch(getRecentMaterials({ 
      materialsNumber: 10, 
      materialTypes: ['note'] 
    }));
  }, []);

  if(!headlines) {
    return <BackdropLoader open={true} />;
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={3}>
        <PostsSearch />
      </Grid>
      <Grid item xs={12} md={6}>
        <Outlet />
      </Grid>
      <Grid item xs={12} md={3}>
        <Headlines data={headlines} />
      </Grid>
    </Grid>
  );
};

export default Post;