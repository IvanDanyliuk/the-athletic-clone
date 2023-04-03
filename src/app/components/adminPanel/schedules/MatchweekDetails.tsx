import React, { useContext } from 'react';
import { Button, Grid, List, ListItem, Typography } from '@mui/material';
import { v4 as uuid } from 'uuid';
import dayjs from 'dayjs';
import { IMatchweek } from '../../../../features/schedules/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import ScheduleContext, { ScheduleContextType } from '../../../context/scheduleContext';


interface IMatchweekDetailsProps {
  matchweek: IMatchweek,
}


const MatchweelDetails: React.FC<IMatchweekDetailsProps> = ({ matchweek }) => {
  const { id, games } = matchweek;

  const { deleteMatch } = useContext(ScheduleContext) as ScheduleContextType;

  const handleMatchDelete = (matchId: string) => {
    deleteMatch(id, matchId);
  }

  return (
    <List>
      {games.map(({ id, home, away, score, location, date }) => (
        <ListItem key={uuid()}>
          <Grid container spacing={3}>
            <Grid item xs={5}>
              <Typography>{`${home.commonName} ${score} ${away.commonName}`}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography>{location}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography>{dayjs(date).format('DD/MM/YYYY')}</Typography>
            </Grid>
            <Grid item xs={1}>
              <Button type='button' onClick={() => handleMatchDelete(id)}>
                <FontAwesomeIcon icon={faXmark} />
              </Button>
            </Grid>
          </Grid>
        </ListItem>
      ))}
    </List>
  );
};

export default MatchweelDetails;