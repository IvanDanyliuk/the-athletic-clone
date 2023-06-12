import { Avatar, Box, Grid, Table, TableBody, TableCell, TableRow, Typography, styled } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUser } from '../../features/users/selectors';


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
  const navigate = useNavigate();

  const user = useSelector(selectUser);

  if(!user) {
    navigate('/');
  }

  return (
    <Container>
      <Grid container>
        <UserPhotoSection item xs={12} md={4}>
          <UserPhoto src={user?.userPhotoUrl} alt={user?.lastName} />
        </UserPhotoSection>
        <Grid item xs={12} md={8}>
          <UserName variant='h2_custom'>{`${user?.firstName} ${user?.lastName}`}</UserName>
          <UserPosition variant='h2_custom'>{`${user?.organization}, ${user?.position}`}</UserPosition>
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

          </ActionsSection>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;