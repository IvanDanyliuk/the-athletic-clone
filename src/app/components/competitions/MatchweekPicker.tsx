import React, { useState } from 'react';
import { Box, Button, Dialog, Grid, Icon, IconButton, Typography } from '@mui/material';
import { CalendarMonth } from '@mui/icons-material';
import { v4 as uuid } from 'uuid';
import { IMatchweek } from '../../../features/schedules/types';


interface IMatchweekPickerProps {
  matchweeks: IMatchweek[];
  setMatchweek: (mw: IMatchweek) => void;
}

const MatchweekPicker: React.FC<IMatchweekPickerProps> = ({ matchweeks, setMatchweek }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handlePickerOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSetMatchweek = (mw: IMatchweek) => {
    setMatchweek(mw);
    setIsOpen(false);
  };

  return (
    <Box>
      <IconButton onClick={handlePickerOpen}>
        <Icon component={CalendarMonth} />
      </IconButton>
      <Dialog onClose={handlePickerOpen} open={isOpen}>
        <Grid container spacing={3}>
          {matchweeks.map(mw => (
            <Grid key={uuid()} item xs={3}>
              <Button onClick={() => handleSetMatchweek(mw)}>
                <Typography>{mw.matchweekName}</Typography>
                <Typography>{mw.basicDate}</Typography>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Dialog>
    </Box>
  );
};

export default MatchweekPicker;