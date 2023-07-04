import React from 'react';
import { 
  Box, Checkbox, InputLabel, ListItemText, MenuItem, 
  OutlinedInput, Select, SelectChangeEvent, styled 
} from '@mui/material';
import { v4 as uuid } from 'uuid';
import { capitalizeString } from '../../utils/helpers';


interface IMultiSelectProps {
  name: string,
  label: string,
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
  @media (max-width: 640px) {
    font-size: .8em;
  }
`;

const SelectBody = styled(Select)`
  width: 100%;
`;


const MultiSelect: React.FC<IMultiSelectProps> = ({ 
  name, 
  label,
  data, 
  checkedLabels, 
  disabled, 
  setLabels 
}) => {
  const dataStringValues = data.map(item => item.value);
  const renderSelectedValues = (selected: any) => selected
    .filter((item: any) => dataStringValues.includes(item)).join(', ');

  return (
    <Box>
      <Label htmlFor={name}>
        {label}
      </Label>
      <SelectBody 
        name={name} 
        multiple 
        value={checkedLabels} 
        disabled={disabled}
        onChange={setLabels}
        renderValue={renderSelectedValues}
        data-testid='multiSelect'
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

export default MultiSelect;