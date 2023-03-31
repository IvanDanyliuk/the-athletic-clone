import React, { useContext } from 'react';
import { 
  Accordion, AccordionDetails, AccordionSummary, 
  Button, Grid, List, ListItem, styled, Typography 
} from '@mui/material';
import { v4 as uuid } from 'uuid';
import ScheduleContext, { ScheduleContextType } from '../../../../context/scheduleContext';
import MatchForm from './MatchForm';
import MatchweelDetails from '../../schedules/MatchweelDetails';


const MatchweekListItem = styled(ListItem)`
  padding: 0;
`;

const ScheduleMatchweekList: React.FC = () => {
  const { schedule, deleteMatchweek } = useContext(ScheduleContext) as ScheduleContextType;

  return (
    <List>
      {schedule.fixture.map(mw => (
        <MatchweekListItem key={uuid()}>
          <Accordion sx={{ width: '100%' }}>
            <AccordionSummary>
              <Typography>{mw.matchweekName}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={3} justifyContent='flex-end'>
                <Grid item xs={7} md={3}>
                  <Button 
                    variant='outlined' 
                    color='error'
                    onClick={() => deleteMatchweek(mw.id)}
                    // onClick={() => console.log('Delete Matachweek', mw.id)}
                  >
                    Delete Matchweek
                  </Button>
                </Grid>
                <Grid item xs={5} md={2}>
                  <MatchForm mwId={mw.id} />
                </Grid>
              </Grid>
              <MatchweelDetails matchweek={mw} />
            </AccordionDetails>
          </Accordion>
        </MatchweekListItem>
      ))}
    </List>
  );
};

export default ScheduleMatchweekList;