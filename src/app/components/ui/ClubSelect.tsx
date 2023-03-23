import React from 'react';
import { Box, Checkbox, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, SelectChangeEvent, styled } from '@mui/material';
import { v4 as uuid } from 'uuid';


interface IClubSelectProps {
  clubs: {
    label: string,
    value: string
  }[],
  checkedClubs: string[],
  disabled: boolean,
  setClubs: (event: SelectChangeEvent<any>) => void

}

const Label = styled(InputLabel)`
  margin-bottom: 5px;
  font-size: .9em;
  color: #000000;
`;

const SelectBody = styled(Select)`
  width: 100%;
`;


const ClubSelect: React.FC<IClubSelectProps> = ({ clubs, checkedClubs, disabled, setClubs }) => {
  return (
    <Box>
      <Label htmlFor='clubs'>
        Clubs
      </Label>
      <SelectBody 
        name='clubs' 
        multiple 
        value={checkedClubs} 
        disabled={disabled}
        onChange={setClubs}
        renderValue={(selected: any) => selected.join(', ')}
        input={<OutlinedInput label="Tag" />}
      >
        {clubs.map((club) => (
          <MenuItem key={uuid()} value={club.value}>
            <Checkbox checked={checkedClubs.includes(club.value)} />
            <ListItemText primary={club.label} />
          </MenuItem>
        ))}
      </SelectBody>
    </Box>
  );
};

export default ClubSelect;