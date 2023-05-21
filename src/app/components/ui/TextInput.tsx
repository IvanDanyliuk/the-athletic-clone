import React from 'react';
import { FieldError, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { Box, InputLabel, styled, TextField, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';


interface ITextInputProps {
  name: string,
  label?: string,
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

const Input = styled(TextField)`
  width: 100%;
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

const TextInput: React.FC<ITextInputProps> = ({ 
  name, 
  label, 
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
      <Input 
        id={name} 
        inputProps={{
          'data-testid': 'textField',
        }}
        {...props} 
        {...register(name, registerOptions)}
      />
    </Box>
  );
};

export default TextInput;