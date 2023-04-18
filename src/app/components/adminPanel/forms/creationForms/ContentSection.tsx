import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AppDispatch } from '../../../../../features/store';
import { IContentSection } from '../../../../../features/content/types';
import { ContentSectionModel } from '../../../../models/components';
import { Box, Button, Grid, styled } from '@mui/material';
import BackLink from '../../ui/BackLink';
import TextInput from '../../../ui/TextInput';
import MaterialsTable from '../../tables/MaterialsTable/MaterialsTable';


interface IContentSectionProps {
  sectionToUpdate?: IContentSection
}

const Form = styled(Box)`
  margin-top: 20px;
`;

const SubmitBtn = styled(Button)`
  width: 100%;
  height: 4em;
`;


const ContentSection: React.FC<IContentSectionProps> = ({ sectionToUpdate }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { register, handleSubmit, control, formState: { errors }, reset } = useForm<ContentSectionModel>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const addMaterial = (id: string) => {
    
  }

  const handleFormSubmit = async (data: any) => {

  };

  return (
    <Box>
      <BackLink link='/admin/content' title='Go back' />
      <Form component='form' onSubmit={handleSubmit(handleFormSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextInput 
              name='name'
              label='Section Name'
              register={register}
              registerOptions={{ required: 'The Section Name is required' }}
              error={errors.name}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput 
              name='name'
              label='Section Name'
              type='number'
              register={register}
              registerOptions={{ required: 'The Section Name is required' }}
              error={errors.name}
            />
          </Grid>
          <Grid item xs={12}>
            <MaterialsTable />
          </Grid>
        </Grid>
      </Form>
    </Box>
  );
};

export default ContentSection;