import React from 'react';
import { Control, Controller, FieldError, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { Box, InputLabel, styled, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


interface IControlledDatePickerProps {
  name: string,
  label: string,
  control: Control<any>,
  register: UseFormRegister<any>,
  registerOptions?: RegisterOptions,
  error?: FieldError,
  [x: string]: any,
}

const Wrapper = styled(Box)`

`;

const Label = styled(InputLabel)`
  margin-bottom: 5px;
  font-size: .9em;
  color: #000000;
`;

const ErrorMessage = styled(Box)`
  padding: 5px 0;
  display: flex;
  align-items: center;
  font-size: .7em;
  color: #cd2424;

  svg {
    margin-right: 5px;
  }
`;

const ControlledDatePicker: React.FC<IControlledDatePickerProps> = ({ name, label, control, register, registerOptions, error, ...props }) => {
  return (
    <Wrapper>
      <Label htmlFor={name}>
        {label}
      </Label>
      <Controller
        name='publicationDate'
        defaultValue=''
        control={control}
        render={({ field: { ref, ...rest } }) => (
          <DatePicker 
            inputRef={ref}
            format='DD/MM/YYYY'
            label='Publication Date'
            { ...rest }
          />
        )}
      />
      <ErrorMessage>
        {error && (
          <>
            <FontAwesomeIcon icon={faCircleExclamation} />
            <Typography variant='inherit'>{error?.message}</Typography>
          </>
        )}
      </ErrorMessage>
    </Wrapper>
  );
};

export default ControlledDatePicker;