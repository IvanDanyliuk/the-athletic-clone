import React from 'react';
import { Control, Controller, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { Box, InputLabel, styled } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';


interface IControlledDatePickerProps {
  name: string,
  label: string,
  control: Control<any>,
  register: UseFormRegister<any>,
  registerOptions?: RegisterOptions,
  [x: string]: any,
}


const Label = styled(InputLabel)`
  margin-bottom: 5px;
  font-size: .9em;
  color: #000000;
`;


const ControlledDatePicker: React.FC<IControlledDatePickerProps> = ({ 
  name, 
  label, 
  control, 
  register, 
  registerOptions,
  ...props 
}) => {
  return (
    <Box>
      <Label htmlFor={name}>
        {label}
      </Label>
      <Controller
        name={name}
        defaultValue={props.defaultValue ? dayjs(props.defaultValue) : ''}
        control={control}
        render={({ field: { ref, ...rest } }) => (
          <DatePicker 
            inputRef={ref}
            format='DD/MM/YYYY'
            sx={{ width: '100%' }}
            { ...rest }
          />
        )}
      />
    </Box>
  );
};

export default ControlledDatePicker;