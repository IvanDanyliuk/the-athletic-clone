import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AppDispatch } from '../../../../../features/store';
import { IContentSection } from '../../../../../features/content/types';
import { ContentSectionModel } from '../../../../models/components';
import { Box, Button, Grid, styled } from '@mui/material';
import { BackLink } from '../../ui/';
import { MaterialsTable } from '../../tables/MaterialsTable/';
import { clearMaterialsToContent, handleEditingMode, setMaterialsToContentToUpdate } from '../../../../../features/content/reducers';
import { selectMaterialsToContent } from '../../../../../features/content/selectors';
import { createContentSection, updateContentSection } from '../../../../../features/content/asyncActions';
import { BackdropLoader, TextInput } from '../../../ui/';


interface IContentSectionProps {
  sectionToUpdate?: IContentSection;
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
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContentSectionModel>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const materials = useSelector(selectMaterialsToContent);

  const handleFormSubmit = async (data: any) => {
    setIsLoading(true);
    if(sectionToUpdate) {
      await dispatch(updateContentSection({
        ...sectionToUpdate,
        name: data.name,
        maxLength: data.maxLength,
        materials
      }))
    } else {
      await dispatch(createContentSection({
        name: data.name,
        maxLength: data.maxLength,
        materials
      }));
    }
    setIsLoading(false);
    reset();
    dispatch(clearMaterialsToContent());
    navigate('/admin/content')
  };

  useEffect(() => {
    dispatch(handleEditingMode(true));
    if(sectionToUpdate) {
      const { name, maxLength, materials } = sectionToUpdate;
      reset({ name, maxLength });
      const materialIds = materials.map(item => item._id);
      dispatch(setMaterialsToContentToUpdate(materialIds));
    }
    return () => { dispatch(handleEditingMode(false)) };
  }, []);

  return (
    <Box>
      <BackLink link='/admin/content' title='Go back' />
      <Form data-testid='contentForm' component='form' onSubmit={handleSubmit(handleFormSubmit)}>
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
              name='maxLength'
              label='Max Length'
              type='number'
              register={register}
              registerOptions={{ required: 'The Max Length is required' }}
              error={errors.maxLength}
            />
          </Grid>
          <Grid item xs={12}>
            <MaterialsTable />
          </Grid>
          <Grid item xs={12} md={2}>
            <SubmitBtn 
              type='submit' 
              variant='contained'
            >
              Submit
            </SubmitBtn>
          </Grid>
        </Grid>
      </Form>
      <BackdropLoader open={isLoading} />
    </Box>
  );
};

export default ContentSection;