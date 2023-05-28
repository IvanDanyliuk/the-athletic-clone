import React, { useState } from 'react';
import { Box, Button, Dialog, Grid, Icon, IconButton, Typography, styled } from '@mui/material';
import { CalendarMonth } from '@mui/icons-material';
import { v4 as uuid } from 'uuid';
import { IMatchweek } from '../../../features/schedules/types';
import dayjs from 'dayjs';


interface IMatchweekPickerProps {
  matchweeks: IMatchweek[];
  setMatchweek: (mw: IMatchweek) => void;
}

const DialogContainer = styled(Grid)`
  padding: 1em;
`;

const MatchweekBtn = styled(Button)`
  display: flex;
  flex-direction: column;
`;

const MatchweekName = styled(Typography)`
  font-size: 1em;
`;

const MatchweekDate = styled(Typography)`
  font-size: .7em;
`;


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
        <DialogContainer container spacing={3}>
          {matchweeks.map(mw => (
            <Grid key={uuid()} item xs={3}>
              <MatchweekBtn onClick={() => handleSetMatchweek(mw)}>
                <MatchweekName>{mw.matchweekName}</MatchweekName>
                <MatchweekDate>{dayjs(mw.basicDate).format('DD/MM/YYYY')}</MatchweekDate>
              </MatchweekBtn>
            </Grid>
          ))}
        </DialogContainer>
      </Dialog>
    </Box>
  );
};

export default MatchweekPicker;