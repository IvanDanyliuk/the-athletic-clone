import React, { useContext } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Button, Grid, List, ListItem, Typography } from '@mui/material';
import { v4 as uuid } from 'uuid';
import ScheduleContext, { ScheduleContextType } from '../../../../context/scheduleContext';
import MatchForm from './MatchForm';
import MatchweelDetails from '../../schedules/MatchweelDetails';


const ScheduleMatchweekList: React.FC = () => {
  const { schedule, deleteMatchweek } = useContext(ScheduleContext) as ScheduleContextType;

  return (
    <List>
      {schedule.fixture.map(mw => (
        <ListItem key={uuid()}>
          <Accordion sx={{ width: '100%' }}>
            <AccordionSummary>
              <Typography>{mw.matchweekName}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container justifyContent='flex-end'>
                <Grid item xs={3}>
                  <Button 
                    variant='outlined' 
                    color='error'
                    onClick={() => deleteMatchweek(mw.id)}
                  >
                    Delete Matchweek
                  </Button>
                </Grid>
                <Grid item xs={2}>
                  <MatchForm mwId={mw.id} />
                </Grid>
              </Grid>
              <MatchweelDetails matchweek={mw} />
            </AccordionDetails>
          </Accordion>
        </ListItem>
      ))}
    </List>
  );
};

export default ScheduleMatchweekList;