import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Box, Button, Grid, styled } from '@mui/material';
import { AppDispatch } from '../../../../../features/store';
import { createUser, updateUser } from '../../../../../features/users/asyncActions';
import { BackdropLoader, SelectField, TextInput } from '../../../ui/';
import { getCountries } from '../../../../services/countries';
import { IUser, UserRoles } from '../../../../../features/users/types';
import { convertFileToString } from '../../../../utils/helpers';
import userPlaceholder from '../../../../../assets/img/user_placeholder.png';


interface IUserFormProps {
  userToUpdate?: IUser;
  onSetEditMode?: () => void;
}

const Form = styled(Box)`
  margin-top: 20px;
`;

const roles = [
  { label: 'Admin', value: UserRoles.admin },
  { label: 'Author', value: UserRoles.author },
  { label: 'Reader', value: UserRoles.reader }
];


const UserForm: React.FC<IUserFormProps> = ({ userToUpdate, onSetEditMode }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { register, control, handleSubmit, formState: { errors }, getValues, setValue, watch, reset } = useForm<IUser>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isReader, setIsReader] = useState<boolean>(false);

  const countries = getCountries().map(country => ({ label: country, value: country }));

  const submitRegisterForm = async (data: any) => {
    setIsLoading(true);
    if(userToUpdate) {
      const userPhotoUrl = data.userPhotoUrl.length > 0 ? 
      await convertFileToString(data.userPhotoUrl[0]) : 
      userToUpdate.userPhotoUrl;

      await dispatch(updateUser({
        ...data, 
        _id: userToUpdate._id, 
        userPhotoUrl, 
        password: userToUpdate.password
      }));
    } else {
      const userPhotoUrl = data.userPhotoUrl && data.userPhotoUrl[0] ? await convertFileToString(data.userPhotoUrl[0]) : userPlaceholder;

      await dispatch(createUser({
        ...data, 
        userPhotoUrl
      }));
    }
    setIsLoading(false);
    if(onSetEditMode) {
      onSetEditMode();
    } else {
      navigate('/admin/users');
    }
    reset();
  };

  useEffect(() => {
    if(userToUpdate) {
      reset({
        firstName: userToUpdate.firstName,
        lastName: userToUpdate.lastName,
        email: userToUpdate.email,
        role: userToUpdate.role,
        location: userToUpdate.location,
        organization: userToUpdate.organization,
        position: userToUpdate.position
      });
    }
  }, []);

  useEffect(() => {
    if(getValues().role === UserRoles.reader) {
      if(!userToUpdate) setValue('organization', '');
      setIsReader(true);
    } else {
      setIsReader(false);
    }
  }, [watch('role')]);

  return (
    <Box>
      <Form data-testid='userForm' component='form' onSubmit={handleSubmit(submitRegisterForm)}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextInput 
              name='firstName'
              label='First Name'
              type='text'
              register={register}
              registerOptions={{ required: 'This field is required!' }}
              error={errors.firstName}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput 
              name='lastName'
              label='Last Name'
              type='text'
              register={register}
              registerOptions={{ required: 'This field is required!' }}
              error={errors.lastName}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput 
              name='email'
              label='Email'
              type='email'
              register={register}
              registerOptions={{ required: 'This field is required!' }}
              error={errors.email}
            />
          </Grid>
          {!userToUpdate && (
            <Grid item xs={12} md={6}>
              <TextInput 
                name='password'
                label='Password'
                type='password'
                register={register}
                // registerOptions={{ required: 'This field is required!' }}
                error={errors.password}
              />
            </Grid>
          )}
          <Grid item xs={12} md={6}>
            <SelectField 
              name='location'
              label='Country'
              control={control}
              register={register}
              options={countries}
              error={errors.location}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <SelectField 
              name='role'
              label='Role'
              control={control}
              register={register}
              options={roles}
              error={errors.role}
            />
          </Grid>
          {!isReader && (
            <>
              <Grid item xs={12} md={6}>
              <TextInput 
                name='organization'
                label='Club/Media'
                type='text'
                register={register}
                error={errors.organization}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput 
                name='position'
                label='Position'
                type='text'
                register={register}
                error={errors.position}
              />
            </Grid>
            </>
          )}
          <Grid item xs={12} md={6}>
            <TextInput 
              name='userPhotoUrl' 
              label='Image'
              type='file'
              register={register}
            />
          </Grid>
          <Grid item xs={12} >
            <Button 
              type='submit' 
              color='primary' 
              variant='contained'
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Form>
      <BackdropLoader open={isLoading} />
    </Box>
  );
};

export default UserForm;