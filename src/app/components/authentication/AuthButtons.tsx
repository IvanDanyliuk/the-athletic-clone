import React from 'react';
import { Box, ButtonBase, styled, Typography } from '@mui/material';
import googleLogo from '../../../assets/img/google.png';
import appleLogo from '../../../assets/img/apple.png';
import facebookLogo from '../../../assets/img/facebook.png';
import nytLogo from '../../../assets/img/nyt.png';


const AuthBtnGroup = styled(Box)`
  position: relative;
  max-width: 24em;
  display: flex;
  flex-direction: column;
`;

const AuthBtn = styled(ButtonBase)`
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

const AuthButtons: React.FC = () => {
  return (
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
  );
};

export default AuthButtons;