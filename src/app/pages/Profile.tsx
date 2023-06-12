import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { 
  Avatar, Box, Button, Grid, Table, TableBody, 
  TableCell, TableRow, Typography, styled 
} from '@mui/material';
import { selectUser, selectUserStatus } from '../../features/users/selectors';
import { BackdropLoader, ConfirmAction } from '../components/ui';
import { AppDispatch } from '../../features/store';
import { deleteUser, logout } from '../../features/users/asyncActions';
import { UserRoles } from '../../features/users/types';
import { AuthorForm } from '../components/adminPanel/forms/creationForms/';


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
`;

const UserName = styled(Typography)`
  font-size: 3em;
`;

const UserPosition = styled(Typography)`
  margin-bottom: 1em;
  font-size: 2em;
  color: #4a4a4a;
`;

const ActionsSection = styled(Box)`
  display: flex;
`;


const Profile: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const user = useSelector(selectUser);
  const userStatus = useSelector(selectUserStatus);

  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const handleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const deleteProfile = async () => {
    await dispatch(logout());
    await dispatch(deleteUser({ id: user?._id!, page: 0, itemsPerPage: 0 }));
    navigate('/');
  }

  if(!user) {
    navigate('/');
  }

  if(userStatus === 'loading') {
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
            <ActionsSection>
              <Button onClick={handleEditMode}>Edit</Button>
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
    </Container>
  );
};

export default Profile;