import React, { useContext } from 'react';
import { List, ListItem, Typography } from '@mui/material';
import { v4 as uuid } from 'uuid';
import ScheduleContext, { ScheduleContextType } from '../../../../context/scheduleContext';


const ScheduleMatchweekList: React.FC = () => {
  const { schedule } = useContext(ScheduleContext) as ScheduleContextType;

  return (
    <List>
      {schedule.fixture.map(mw => (
        <ListItem key={uuid()}>
          <Typography>{mw.matchweekName}</Typography>
          {/* <MatchForm clubs={clubs} mwName={mw.matchweekName} setMatch={handleAddMatch} /> */}
        </ListItem>
      ))}
    </List>
  );
};

export default ScheduleMatchweekList;