import React from 'react';
import { Box, Button, Collapse, Grid, styled } from '@mui/material';
import { useForm } from 'react-hook-form';
import { IClub } from '../../../../../features/clubs/types';
import TextInput from '../../../ui/TextInput';


interface IMatchweek {
  matchweekName: string,
  games: {
    home: IClub,
    away: IClub,
    date: string,
    location: string,
    score: string
  }[]
}

interface IMatchweekFormProps {
  open: boolean,
  matchweeks: IMatchweek[],
  onSetMatchweek: (data: any) => void
}

interface ITitle {
  matchweekName: string
}

const Form = styled(Box)`
  margin-top: 20px;
`;

const FormRow = styled(Grid)`
  margin-bottom: 10px;
`;


const MatchweekForm: React.FC<IMatchweekFormProps> = ({ open, matchweeks, onSetMatchweek }) => {
  const { register, handleSubmit, formState: { errors }, reset, setError } = useForm<ITitle>();

  const addMatchweek = (data: any) => {
    const isMWExists = matchweeks.find(mw => mw.matchweekName === data.matchweekName);
    if(!isMWExists) {
      onSetMatchweek({
        matchweekName: data.matchweekName,
        games: []
      });
      reset();
    } else {
      setError('matchweekName', { type: 'custom', message: 'Matchweek with such name already exists' });
    }
  };

  return (
    <Collapse in={open}>
      <Form component='form' onSubmit={handleSubmit(addMatchweek)}>
        <FormRow container spacing={3}>
          <Grid item xs={12} md={5}>
            <TextInput 
              name='matchweekName' 
              label='Matchweek Title'
              type='text' 
              register={register}
              registerOptions={{ required: 'Matchweek name is required!' }} 
              error={errors.matchweekName}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <Button 
              type='submit'
              variant='contained'
              color='success'
            >
              Add
            </Button>
          </Grid>
        </FormRow>
      </Form>
    </Collapse>
  );
};

export default MatchweekForm;