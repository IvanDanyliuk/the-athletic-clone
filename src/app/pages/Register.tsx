import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, Checkbox, Divider, FormControlLabel, Grid, Typography } from '@mui/material';
import AuthButtons from '../components/authentication/AuthButtons';
import { UserModel } from '../models/users';
import TextInput from '../components/ui/TextInput';
import { signup } from '../../features/users/asyncActions';
import { AppDispatch } from '../../features/store';
import SelectField from '../components/ui/SelectField';
import { getCountries } from '../services/countries';
import { selectUserStatus } from '../../features/users/selectors';
import BackdropLoader from '../components/ui/BackdropLoader';


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

const BackButton = styled(Button)`
  margin-bottom: 20px;
  padding: 0;
  font-size: 1em;
  text-transform: none;
  color: #000000;
  
  svg {
    margin-right: 10px;
  }
`;

const CheckboxLabel = styled(FormControlLabel)`
  font-size: .7em;
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

const BottomText = styled(Typography)`
  margin-top: 20px;
  font-size: .7em;
  text-align: center;
  color: #939393;

  a {
    text-decoration: none;
    color: #078adb;
  }
`;


const Register: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { register, control, handleSubmit, formState: { errors }, getValues, reset } = useForm<UserModel>();
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const status = useSelector(selectUserStatus);

  const countries = getCountries().map(country => ({ label: country, value: country }));

  const handlePageMode = () => {
    if(!isFormVisible && getValues().email) {
      setIsFormVisible(true);
    } else {
      setIsFormVisible(false);
    }
  };

  const submitRegisterForm = async (data: UserModel) => {
    await dispatch(signup(data));
    reset();
    navigate('/');
  };

  return (
    <Wrapper>
      <Title>Create your account</Title>
      <Container>
        {
          isFormVisible ? (
            <>
              <BackButton onClick={handlePageMode}>
                <FontAwesomeIcon icon={faAngleLeft} />
                Back
              </BackButton>
              <form onSubmit={handleSubmit(submitRegisterForm)}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextInput 
                      name='firstName'
                      label='First Name'
                      type='text'
                      register={register}
                      registerOptions={{ required: 'This field is required!' }}
                      error={errors.firstName}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextInput 
                      name='lastName'
                      label='Last Name'
                      type='text'
                      register={register}
                      registerOptions={{ required: 'This field is required!' }}
                      error={errors.lastName}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <SelectField 
                      name='location'
                      label='Country'
                      control={control}
                      register={register}
                      options={countries}
                      error={errors.location}
                    />
                  </Grid>
                  <Grid item xs={12} >
                    <TextInput 
                      name='email'
                      label='Email'
                      type='email'
                      register={register}
                      registerOptions={{ required: 'This field is required!' }}
                      error={errors.email}
                    />
                  </Grid>
                  <Grid item xs={12} >
                    <TextInput 
                      name='password'
                      label='Password'
                      type='password'
                      register={register}
                      registerOptions={{ required: 'This field is required!' }}
                      error={errors.password}
                    />
                  </Grid>
                  <Grid item xs={12} >
                    <CheckboxLabel 
                      control={<Checkbox />} 
                      label='I would like to receive news, updates and promotions from The Athletic. I can unsubscribe at any time.' 
                    />
                  </Grid>
                  <Grid item xs={12} >
                    <SubmitButton type='submit'>Create Account</SubmitButton>
                  </Grid>
                </Grid>
              </form>
            </>
          ) : (
            <>
              <AuthButtons />
              <PageDivider>
                <Divider />
                <Typography>or</Typography>
                <Divider />
              </PageDivider>
              <TextInput 
                name='email'
                label='Email'
                type='email'
                register={register}
                registerOptions={{ required: 'This field is required!' }}
                error={errors.email}
              />
              <SubmitButton onClick={handlePageMode}>Continue</SubmitButton>
            </>
          )
        }
        <BottomLink to='/login'>Already have an account? Log In</BottomLink>
        <Divider />
        <BottomText>
          By using 1-step checkout or creating an account above, you consent 
          to <Link to='/'>The Athletic's Terms of Service and Privacy Policy</Link>. 
          We use your email to provide you with news, updates, and promotions.
        </BottomText>
      </Container>
      <BackdropLoader open={status === 'loading'} />
    </Wrapper>
  );
};

export default Register;