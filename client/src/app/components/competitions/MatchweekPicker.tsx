import React, { useState } from 'react';
import { 
  Box, Button, Dialog, DialogContent, DialogTitle, 
  Grid, Icon, IconButton, Typography, styled 
} from '@mui/material';
import { CalendarMonth, Close } from '@mui/icons-material';
import dayjs from 'dayjs';
import { v4 as uuid } from 'uuid';
import { IMatchweek } from '../../../features/schedules/types';


interface IMatchweekPickerProps {
  season: string;
  matchweeks: IMatchweek[];
  setMatchweek: (mw: IMatchweek) => void;
}

const MatchweekBtn = styled(Button)`
  display: flex;
  flex-direction: column;
`;

const MatchweekName = styled(Typography)`
  font-size: 1em;
  @media(max-width: 480px) {
    font-size: .7em;
  }
`;

const MatchweekDate = styled(Typography)`
  font-size: .7em;
  @media(max-width: 480px) {
    font-size: .6em;
  }
`;


const MatchweekPicker: React.FC<IMatchweekPickerProps> = ({ season, matchweeks, setMatchweek }) => {
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
        <DialogTitle display='flex' justifyContent='space-between' alignItems='center'>
          <Typography>{`Season: ${season}`}</Typography>
          <IconButton onClick={handlePickerOpen}>
            <Icon component={Close} />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={1}>
            {matchweeks.map(mw => (
              <Grid key={uuid()} item xs={4} md={3}>
                <MatchweekBtn onClick={() => handleSetMatchweek(mw)}>
                  <MatchweekName>{mw.matchweekName}</MatchweekName>
                  <MatchweekDate>{dayjs(mw.basicDate).format('DD/MM/YYYY')}</MatchweekDate>
                </MatchweekBtn>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default MatchweekPicker;