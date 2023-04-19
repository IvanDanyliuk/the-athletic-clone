import React, { useEffect } from 'react';
import { Box, Button, Typography, styled } from '@mui/material';
import SubPageHeader from '../ui/SubPageHeader';
import { useDispatch, useSelector } from 'react-redux';
import { selectContent } from '../../../../features/content/selectors';
import { AppDispatch } from '../../../../features/store';
import { getContentSections } from '../../../../features/content/asyncActions';


const Content: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const contentSections = useSelector(selectContent);

  useEffect(() => {
    dispatch(getContentSections());
  }, []);

  return (
    <div>
      <SubPageHeader 
        title='Content'
        link='content/new-content-section'
      />
      
    </div>
  );
};

export default Content;