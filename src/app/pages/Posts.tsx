import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';
import { AppDispatch } from '../../features/store';
import { getRecentMaterials } from '../../features/materials/asyncActions';
import { selectMaterials } from '../../features/materials/selectors';
import { Headlines } from '../components/homepage/';
import { DataNotFoundMessage } from '../components/ui/';
import { PostsSearch } from '../components/materials/';


const Posts: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const headlines = useSelector(selectMaterials);

  useEffect(() => {
    dispatch(getRecentMaterials({ 
      materialsNumber: 10, 
      materialTypes: ['note'] 
    }));
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={3}>
        <PostsSearch />
      </Grid>
      <Grid item xs={12} md={6}>
        <Outlet />
      </Grid>
      <Grid item xs={12} md={3}>
        {
          headlines.length === 0 ? (
            <DataNotFoundMessage message='Cannot find materials' />
          ) : (
            <Headlines data={headlines} />
          )
        }
      </Grid>
    </Grid>
  );
};

export default Posts;