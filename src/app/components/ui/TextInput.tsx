import React from 'react';
import { FieldError, RegisterOptions, UseFormRegister } from 'react-hook-form';

import { Box, InputLabel, styled, TextField, Typography } from '@mui/material';


interface ITextInputProps {
  name: string,
  label: string,
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

const Input = styled(TextField)`
  width: 100%;
`;

const ErrorMessage = styled(Typography)`

`;

const TextInput: React.FC<ITextInputProps> = ({ name, label, register, registerOptions, error, ...props }) => {
  return (
    <Wrapper>
      <Label htmlFor={name}>
        {label}
      </Label>
      <Input 
        id={name} 
        {...props} 
        {...register(name, registerOptions)}
      />
      <ErrorMessage>{error?.message}</ErrorMessage>
    </Wrapper>
  );
};

export default TextInput;