import React from 'react';
import { Box, Checkbox, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, SelectChangeEvent, styled } from '@mui/material';
import { v4 as uuid } from 'uuid';


interface ILabelSelectProps {
  name: string,
  data: {
    label: string,
    value: string
  }[],
  checkedLabels: string[],
  disabled?: boolean,
  setLabels: (event: SelectChangeEvent<any>) => void

}

const Label = styled(InputLabel)`
  margin-bottom: 5px;
  font-size: .9em;
  color: #000000;
`;

const SelectBody = styled(Select)`
  width: 100%;
`;


const LabelSelect: React.FC<ILabelSelectProps> = ({ name, data, checkedLabels, disabled, setLabels }) => {
  return (
    <Box>
      <Label htmlFor='data'>
        {name}
      </Label>
      <SelectBody 
        name='data' 
        multiple 
        value={checkedLabels} 
        disabled={disabled}
        onChange={setLabels}
        renderValue={(selected: any) => selected.join(', ')}
        input={<OutlinedInput label="Tag" />}
      >
        {data.map((item) => (
          <MenuItem key={uuid()} value={item.value}>
            <Checkbox checked={checkedLabels.includes(item.value)} />
            <ListItemText primary={item.label} />
          </MenuItem>
        ))}
      </SelectBody>
    </Box>
  );
};

export default LabelSelect;