import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AppDispatch } from '../../../../../features/store';
import { selectAllUsers } from '../../../../../features/users/selectors';
import { updateUser } from '../../../../../features/users/asyncActions';
import { IUser, UserRoles } from '../../../../../features/users/types';
import { Box, Button, Grid, styled } from '@mui/material';
import BackLink from '../../ui/BackLink';
import TextInput from '../../../ui/TextInput';
import BackdropLoader from '../../../ui/BackdropLoader';
import SelectField from '../../../ui/SelectField';
import { getCountries } from '../../../../services/countries';
import UpdatePasswordModal from './UpdatePasswordModal';


const Form = styled(Box)`
  margin-top: 20px;
`;

const FormRow = styled(Grid)`
  margin-bottom: 10px;
`;


const roles = [
  { label: 'Administrator', value: UserRoles.admin },
  { label: 'Author', value: UserRoles.author },
  { label: 'Reader', value: UserRoles.reader }
];


const UpdateUserForm: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const users = useSelector(selectAllUsers);
  const userToUpdate = users.find(user => user._id === id);
  const countries = getCountries().map(country => ({ label: country, value: country }));
  
  const { register, handleSubmit, control, formState: { errors }, reset } = useForm<IUser>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [newPassword, setNewPassword] = useState<string>('');

  const handleFormSubmit = async (data: IUser) => {
    setIsLoading(true);
    await dispatch(updateUser(data));
    setIsLoading(false);
    navigate('/admin/users');
  };

  const handleNewPassword = (value: string) => {
    setNewPassword(value);
  };

  useEffect(() => {
    if(userToUpdate) {
      reset({
        _id: userToUpdate._id,
        firstName: userToUpdate.firstName,
        lastName: userToUpdate.lastName,
        email: userToUpdate.email,
        location: userToUpdate.location,
        organization: userToUpdate.organization,
        position: userToUpdate.position,
        role: userToUpdate.role,
        userPhotoUrl: userToUpdate.userPhotoUrl
      });
    }
  }, []);

  return (
    <Box>
      <BackLink link='/admin/users' title='Go back' />
      <Form component='form' onSubmit={handleSubmit(handleFormSubmit)}>
        <FormRow container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextInput 
              name='firstName' 
              label='First Name'
              type='text' 
              register={register}
              registerOptions={{ required: 'First Name is required!' }}
              error={errors.firstName}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput 
              name='lastName' 
              label='Last Name'
              type='text' 
              register={register}
              registerOptions={{ required: 'Last Name is required!' }}
              error={errors.lastName}
            />
          </Grid>
        </FormRow>
        <FormRow container spacing={3}>
          <Grid item xs={12} md={5}>
            <SelectField 
              name='role' 
              label='Role'
              control={control}
              register={register}
              options={roles}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <SelectField 
              name='location'
              label='Country'
              control={control}
              register={register}
              options={countries}
              error={errors.location}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            
          </Grid>
        </FormRow>
        <FormRow container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextInput 
              name='organization' 
              label='Club/Media'
              type='text' 
              register={register}
              registerOptions={{ required: 'Organization is required!' }}
              error={errors.organization}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput 
              name='position' 
              label='Position'
              type='text' 
              register={register}
              registerOptions={{ required: 'Position is required!' }}
              error={errors.position}
            />
          </Grid>
        </FormRow>
        <FormRow container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextInput 
              name='email' 
              label='Email'
              type='email' 
              register={register}
              registerOptions={{ required: 'Email is required!' }}
              error={errors.email}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput 
              name='userPhotoUrl' 
              label='Image'
              type='file'
              register={register}
            />
          </Grid>
        </FormRow>
        <Button 
          type='submit'
          variant='contained'
        >
          Submit
        </Button>
      </Form>
      <UpdatePasswordModal onUpdate={handleNewPassword} />
      <BackdropLoader open={isLoading} />
    </Box>
  );
};

export default UpdateUserForm;