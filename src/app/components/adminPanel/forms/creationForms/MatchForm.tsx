import React, { useState} from 'react';
import { Box, Button, Dialog, Grid, styled, Tooltip } from '@mui/material';
import { useForm } from 'react-hook-form';
import { IClub } from '../../../../../features/clubs/types';
import SelectField from '../../../ui/SelectField';
import ControlledDatePicker from '../../../ui/ControlledDatePicker';
import TextInput from '../../../ui/TextInput';


interface IMatchFormProps {
  clubs: IClub[],
  mwName: string,
  setMatch: any
}

interface IFormData {
  matchweekName: string,
  home: IClub,
  away: IClub,
  date: string,
  location: string,
  score: string
}

const SubmitBtn = styled(Button)`
  width: 100%;
  height: 4em;
  svg {
    font-size: 1.5em;
  }
`;


const MatchForm: React.FC<IMatchFormProps> = ({ clubs, mwName, setMatch }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { register, handleSubmit, control, formState: { errors } } = useForm<IFormData>();

  const clubSelectOptions = clubs.map(club => ({ label: club.commonName, value: club._id }));

  const handleFormOpen = () => {
    setIsOpen(true);
  };

  const handleFormClose = () => {
    setIsOpen(false);
  };

  const createMatch = (data: any) => {
    setMatch(mwName, {
      ...data,
      home: clubs.find(club => club._id === data.home),
      away: clubs.find(club => club._id === data.away),
    });
  };

  return (
    <>
      <Tooltip title='Create a new match' placement='top' arrow>
        <SubmitBtn 
          type='button' 
          variant='outlined'
          disabled={clubs.length < 1}
          onClick={handleFormOpen}
        >
          Add Match
        </SubmitBtn>
      </Tooltip>
      <Dialog open={isOpen} onClose={handleFormClose}>
        <Box component='form' onSubmit={handleSubmit(createMatch)}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <SelectField
                name='home'
                label='Home'
                control={control}
                register={register}
                registerOptions={{ required: 'Home team is required!' }}
                options={clubSelectOptions}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <SelectField
                name='away'
                label='Away'
                control={control}
                register={register}
                registerOptions={{ required: 'Away team is required!' }}
                options={clubSelectOptions}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <ControlledDatePicker 
                name='date'
                label='Date'
                control={control}
                register={register}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput 
                name='score' 
                label='Score'
                type='text' 
                defaultValue='0:0'
                register={register}
                error={errors.location}
              />
            </Grid>
            <Grid item xs={12}>
              <TextInput 
                name='location' 
                label='Stadium'
                type='text' 
                register={register}
                registerOptions={{ required: 'Location is required!' }}
                error={errors.location}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type='submit'>Add</Button>
            </Grid>
          </Grid>
        </Box>
      </Dialog>
    </>
  );
};

export default MatchForm;