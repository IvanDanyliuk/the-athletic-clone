import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { 
  Avatar, Box, Grid, Table, TableBody, TableCell, 
  TableRow, Typography, styled 
} from '@mui/material';
import dayjs from 'dayjs';
import { AppDispatch } from '../../features/store';
import { getPlayer } from '../../features/players/asyncActions';
import { selectPlayer } from '../../features/players/selectors';
import { ClubLabel, DataNotFoundMessage } from '../components/ui';
import { getPlayerPositionFullName } from '../utils/helpers';


const Container = styled(Box)`
  padding: 1em 0;
`;

const PlayerPhoto = styled(Avatar)`
  width: 100%;
  height: auto;
`;

const PlayerName = styled(Typography)`
  font-size: 3em;
  @media (max-width: 640px) {
    font-size: 2.5em;
  }
`;

const PlayerNumber = styled(Typography)`
  margin-bottom: 1em;
  font-size: 2.5em;
  color: #4a4a4a;
  @media (max-width: 640px) {
    font-size: 2em;
  }
`;

const Cell = styled(TableCell)`
  @media (max-width: 640px) {
    font-size: .8em;
    p {
      font-size: 1em;
    }
  }
`;

const Player: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const player = useSelector(selectPlayer);

  useEffect(() => {
    if(id) {
      dispatch(getPlayer(id));
    }
  }, [id, dispatch]);

  if(!player) {
    return (
      <Container>
        <DataNotFoundMessage message='Player not found' />
      </Container>
    );
  }

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <PlayerPhoto variant='square' src={player?.photoUrl} alt={player?.lastName} />
        </Grid>
        <Grid item xs={12} md={8}>
          <PlayerName variant='h2_custom'>
            {`${player?.firstName} ${player?.lastName}`}
          </PlayerName>
          <PlayerNumber variant='h2_custom'>
            {`#${player?.number}`}
          </PlayerNumber>
          <Table>
            <TableBody>
              <TableRow>
                <Cell>Position:</Cell>
                <Cell>{getPlayerPositionFullName(player?.position!)}</Cell>
              </TableRow>
              <TableRow>
                <Cell>Club:</Cell>
                <Cell>
                  <ClubLabel 
                    clubId={player?.club._id!} 
                    logo={player?.club.clubLogoUrl!} 
                    name={player?.club.commonName!} 
                    altText={player?.club.shortName!} 
                  />
                </Cell>
              </TableRow>
              <TableRow>
                <Cell>Born:</Cell>
                <Cell>{dayjs(player?.birthDate).format('DD/MM/YYYY')}</Cell>
              </TableRow>
              <TableRow>
                <Cell>Country:</Cell>
                <Cell>{player?.country}</Cell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Player;