import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { 
  Avatar, Box, Button, Collapse, Grid, Table, TableBody, 
  TableCell, TableRow, Typography, styled 
} from '@mui/material';
import { selectUser, selectUserError, selectUserStatus } from '../../../features/users/selectors';
import { BackdropLoader, ConfirmAction, ErrorSnackbar, TextInput } from '../../components/ui';
import { AppDispatch } from '../../../features/store';
import { deleteUser, logout, updatePassword } from '../../../features/users/asyncActions';
import { UserRoles } from '../../../features/users/types';
import { AuthorForm } from '../../components/adminPanel/forms/creationForms/';
import { clearError } from '../../../features/users/reducers';
import { StateStatus } from '../../../features/types';


interface IPasswordForm {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

const Container = styled(Box)`
  padding: 1em 0;
`;

const UserPhotoSection = styled(Grid)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const UserPhoto = styled(Avatar)`
  width: 15em;
  height: 15em;
  @media (max-width: 640px) {
    width: 10em;
    height: 10em;
  }
`;

const UserName = styled(Typography)`
  font-size: 3em;
  @media (max-width: 640px) {
    margin-top: 1em;
    font-size: 2em;
    text-align: center;
  }
`;

const UserPosition = styled(Typography)`
  margin-bottom: 1em;
  font-size: 2em;
  color: #4a4a4a;
  @media (max-width: 640px) {
    font-size: 1.7em;
    text-align: center;
  }
`;

const ChangePasswordFormContainer = styled(Collapse)`
  margin-top: 1em;
`;

const SubmitBtn = styled(Button)`
  margin-top: 1em;
`;

const ActionsSection = styled(Box)`
  margin-top: 1em;
  display: flex;
`;


const UserDataTab: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, setError, reset } = useForm<IPasswordForm>();

  const user = useSelector(selectUser);
  const userStatus = useSelector(selectUserStatus);
  const userError = useSelector(selectUserError);

  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [isPasswordChangeFormOpen, setIsPasswordChangeFormOpen] = useState<boolean>(false);

  const handleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const handlePasswordChangeFormOpen = () => {
    setIsPasswordChangeFormOpen(!isPasswordChangeFormOpen);
  };

  const submitPasswordForm = async (data: IPasswordForm) => {
    if(data.newPassword === data.confirmNewPassword) {
      await dispatch(updatePassword({
        id: user?._id!,
        newPassword: data.newPassword,
        currPassword: data.currentPassword
      }));
      reset();
      handlePasswordChangeFormOpen();
    } else {
      setError('confirmNewPassword', { message: 'Passwords do not match. Confirm a new password again' });
    }
  };

  const deleteProfile = async () => {
    await dispatch(logout());
    await dispatch(deleteUser(user?._id!));
    navigate('/');
  }

  const clearUserError = () => {
    dispatch(clearError());
  };

  if(!user) {
    navigate('/');
  }

  if(userStatus === StateStatus.Loading) {
    return <BackdropLoader open={true} />;
  }

  return (
    <Container>
      {isEditMode ? (
        <>
          <Button onClick={handleEditMode}>Go Back</Button>
          <AuthorForm userToUpdate={user!} onSetEditMode={handleEditMode} />
        </>
      ) : (
        <Grid container>
          <UserPhotoSection item xs={12} md={4}>
            <UserPhoto src={user?.userPhotoUrl} alt={user?.lastName} />
          </UserPhotoSection>
          <Grid item xs={12} md={8}>
            <UserName variant='h2_custom'>
              {`${user?.firstName} ${user?.lastName}`}
            </UserName>
            {user?.organization && (
              <UserPosition variant='h2_custom'>
                {`${user?.organization}, ${user?.position}`}
              </UserPosition>
            )}
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Location:</TableCell>
                  <TableCell>{user?.location}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Email:</TableCell>
                  <TableCell>{user?.email}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <ChangePasswordFormContainer in={isPasswordChangeFormOpen}>
              <Box data-testid='changePasswordForm' component='form' onSubmit={handleSubmit(submitPasswordForm)}>
                <TextInput 
                  name='currentPassword'
                  label='Current Password'
                  type='password'
                  register={register}
                  registerOptions={{ required: 'This field is required!' }}
                  error={errors.currentPassword}
                />
                <TextInput 
                  name='newPassword'
                  label='New Password'
                  type='password'
                  register={register}
                  registerOptions={{ required: 'This field is required!' }}
                  error={errors.newPassword}
                />
                <TextInput 
                  name='confirmNewPassword'
                  label='Confirm Password'
                  type='password'
                  register={register}
                  registerOptions={{ required: 'This field is required!' }}
                  error={errors.confirmNewPassword}
                />
                <SubmitBtn type='submit' variant='contained' color='success'>Submit</SubmitBtn>
              </Box>
            </ChangePasswordFormContainer>
            <ActionsSection>
              <Button onClick={handleEditMode}>Edit</Button>
              <Button onClick={handlePasswordChangeFormOpen}>Change Password</Button>
              {user?.role !== UserRoles.author && (
                <ConfirmAction 
                  message='Are you sure you want to delete your profile?' 
                  onAction={deleteProfile}
                >
                  Delete
                </ConfirmAction>
              )}
            </ActionsSection>
          </Grid>
        </Grid>
      )}
      <ErrorSnackbar isOpen={Boolean(userError)} message={userError} onClose={clearUserError} />
    </Container>
  );
};

export default UserDataTab;