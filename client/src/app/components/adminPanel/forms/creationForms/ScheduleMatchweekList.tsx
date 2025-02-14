import React, { useContext } from 'react';
import { 
  Accordion, AccordionDetails, AccordionSummary, 
  Button, Divider, Grid, Icon, List, ListItem, styled, Typography 
} from '@mui/material';
import { v4 as uuid } from 'uuid';
import ScheduleContext, { ScheduleContextType } from '../../../../context/scheduleContext';
import { MatchForm } from './';
import MatchweelDetails from '../../schedules/MatchweekDetails';
import { KeyboardArrowDown } from '@mui/icons-material';


const MatchweekListItem = styled(ListItem)`
  margin-bottom: .5em;
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
              <Icon component={KeyboardArrowDown} />
            </AccordionSummary>
            <Divider orientation='horizontal' flexItem />
            <AccordionDetails>
              <Grid container spacing={3} justifyContent='flex-end'>
                <Grid item xs={7} md={3}>
                  <Button 
                    variant='outlined' 
                    color='error'
                    data-testid='deleteMatchBtn'
                    onClick={() => deleteMatchweek(mw.id)}
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