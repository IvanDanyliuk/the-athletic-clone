import React from 'react';
import { Box, Button, Divider, InputLabel, styled, TextField, Typography } from '@mui/material';
import googleLogo from '../../assets/img/google.png';
import appleLogo from '../../assets/img/apple.png';
import facebookLogo from '../../assets/img/facebook.png';
import nytLogo from '../../assets/img/nyt.png';
import { Link } from 'react-router-dom';


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
  font-family: 'Merriweather', serif;
  font-size: 2.5em;
  text-align: center;

  @media (max-width: 640px) {
    font-size: 1.8em;
  }
`;

const AuthBtnGroup = styled(Box)`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const AuthBtn = styled(Button)`
  position: relative;
  margin: 10px 0;
  padding: 1em;
  font-size: 1em;
  text-align: center;
  text-transform: none;
  background: #ffffff;
  color: #000000;
  border: 1px solid #000000;

  img {
    margin-right: 1em;
    height: 2em;
    position: absolute;
    left: 1em;
  }

  @media (max-width: 640px) {
    padding: 1.2em;
    font-size: .8em;
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

const LoginForm = styled('form')`

`;

const Label = styled(InputLabel)`
  font-size: .9em;
  color: #000000;
`;

const Input = styled(TextField)`
  margin-bottom: 20px;
  width: 100%;
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

  const submitLoginForm = () => {

  };

  return (
    <Wrapper>
      <Title>Log in to your account</Title>
      <Container>
        <AuthBtnGroup>
          <AuthBtn>
            <img src={googleLogo} alt='google' />
            <Typography variant='inherit'>Continue with Google</Typography>
          </AuthBtn>
          <AuthBtn>
            <img src={appleLogo} alt='apple' />
            <Typography variant='inherit'>Continue with Apple</Typography>
          </AuthBtn>
          <AuthBtn>
            <img src={facebookLogo} alt='facebook' />
            <Typography variant='inherit'>Continue with Facebook</Typography>
          </AuthBtn>
          <AuthBtn>
            <img src={nytLogo} alt='nyt' />
            <Typography variant='inherit'>Continue with The New York Times</Typography>
          </AuthBtn>
        </AuthBtnGroup>
        <PageDivider>
          <Divider />
          <Typography>or</Typography>
          <Divider />
        </PageDivider>
        <LoginForm onSubmit={submitLoginForm}>
          <Label htmlFor='email'>Email</Label>
          <Input id='email' />
          <Label htmlFor='password'>Password</Label>
          <Input id='password' />
          <SubmitButton type='submit'>Log in</SubmitButton>
        </LoginForm>
        <BottomLink to='/'>Forgot your password?</BottomLink>
        <BottomLink to='/register'>Don't have an account? Sign Up</BottomLink>
      </Container>
    </Wrapper>
  );
};

export default Login;