import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Box, Button, Divider, Snackbar, styled, Typography } from '@mui/material';
import { AppDispatch } from '../../features/store';
import AuthButtons from '../components/authentication/AuthButtons';
import TextInput from '../components/ui/TextInput';
import { login } from '../../features/users/asyncActions';
import { ILoginCredentials } from '../../features/users/types';
import { selectUserError } from '../../features/users/selectors';
import ErrorSnackbar from '../components/ui/ErrorSnackbar';
import { clearError } from '../../features/users/reducers';


const Wrapper = styled(Box)`
  padding: 2em 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled(Box)`
  width: 24em;

  @media (max-width: 640px) {
    width: 100%;
  }
`;

const Title = styled(Typography)`
  margin-bottom: 1em;
  font-family: 'Arvo', serif;
  font-size: 2.5em;
  text-align: center;

  @media (max-width: 640px) {
    font-size: 1.8em;
  }
`;

const PageDivider = styled(Box)`
  position: relative;
  margin: 10px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  hr {
    width: 43%;
  }
`;

const SubmitButton = styled(Button)`
  margin: 10px 0;
  padding: 1em;
  width: 100%;
  font-size: 1em;
  text-align: center;
  text-transform: none;
  background: #000000;
  color: #ffffff;

  &:hover {
    background: #c9c9c9;
    color: #000000;
  }
`;

const BottomLink = styled(Link)`
  margin: 2em 0;
  width: 100%;
  display: block;
  font-size: 1.1em;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  color: #000000;
`;


const Login: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ILoginCredentials>();
  const [isError, setIsError] = useState<boolean>(false);

  const error = useSelector(selectUserError);

  const submitLoginForm = (data: ILoginCredentials) => {
    dispatch(login(data));
    reset();
  };

  const handleErrorSnackbarClose = () => {
    dispatch(clearError());
    setIsError(false);
  }

  useEffect(() => {
    if(error) {
      setIsError(true);
    }
  }, [error]);

  return (
    <Wrapper>
      <Title>Log in to your account</Title>
      <Container>
        <AuthButtons />
        <PageDivider>
          <Divider />
          <Typography>or</Typography>
          <Divider />
        </PageDivider>
        <form onSubmit={handleSubmit(submitLoginForm)}>
          <TextInput 
            name='email'
            label='Email'
            type='email'
            register={register}
            registerOptions={{ required: 'Email is required!' }}
            error={errors.email}
          />
          <TextInput 
            name='password'
            label='Password'
            type='password'
            register={register}
            registerOptions={{ required: 'Password is required!' }}
            error={errors.password}
          />
          <SubmitButton type='submit'>Log in</SubmitButton>
        </form>
        <BottomLink to='/'>Forgot your password?</BottomLink>
        <BottomLink to='/register'>Don't have an account? Sign Up</BottomLink>
      </Container>
      <ErrorSnackbar 
        isOpen={isError}
        message={error}
        onClose={handleErrorSnackbarClose}
      />
    </Wrapper>
  );
};

export default Login;