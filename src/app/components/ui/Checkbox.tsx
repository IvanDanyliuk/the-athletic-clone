import React from 'react';
import { Controller, Control, FieldError, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { Box, Checkbox, InputLabel, styled, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';


interface ICheckboxInputProps {
  name: string,
  label: string, 
  control: Control<any>,
  register: UseFormRegister<any>,
  registerOptions?: RegisterOptions,
  error?: FieldError,
  [x: string]: any,
}

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


const CheckboxInput: React.FC<ICheckboxInputProps> = ({ 
  name, 
  label, 
  control, 
  register, 
  registerOptions, 
  error, 
  ...props 
}) => {
  return (
    <Box>
      {error ? (
        <ErrorMessage>
          <FontAwesomeIcon icon={faCircleExclamation} />
          <Typography variant='inherit'>
            {error?.message}
          </Typography>
        </ErrorMessage>
      ) : (
        <Label htmlFor={name}>
          {label}
        </Label>
      )}
      <Controller 
        name={name}
        control={control}
        defaultValue={false}
        render={({
          field: { value, name, ref },
        }) => (
          <Checkbox 
            checked={value}
            inputRef={ref}
            {...register(name, registerOptions)}
          />
        )}
      />
      
    </Box>
  );
};

export default CheckboxInput;