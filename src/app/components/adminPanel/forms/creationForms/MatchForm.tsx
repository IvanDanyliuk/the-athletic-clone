import React, { useContext, useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { Box, Button, Dialog, Grid, styled, Tooltip } from '@mui/material';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuid } from 'uuid';
import { ControlledDatePicker, SelectField, TextInput } from '../../../ui/';
import ScheduleContext, { ScheduleContextType } from '../../../../context/scheduleContext';
import { selectAllCompetitions } from '../../../../../features/competitions/selectors';


interface IMatchFormProps {
  mwId: string,
}

interface IFormData {
  matchweekName: string,
  home: string,
  away: string,
  date: string,
  location: string,
  score: string
}

const Form = styled(Box)`
  padding: 20px;
`;

const CloseSection = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const CloseBtn = styled(Button)`
  margin-top: 10px;
  svg {
    color: #525252;
    font-size: 2em;
  }
`;

const SubmitBtn = styled(Button)`
  margin-top: 1em;
  width: 12em;
  height: 4em;
  @media (max-width: 640px) {
    width: 100%;
  }
`;


const MatchForm: React.FC<IMatchFormProps> = ({ mwId }) => {
  const { register, handleSubmit, control, formState: { errors }, getValues, watch, setValue } = useForm<IFormData>();
  const { schedule, addMatch } = useContext(ScheduleContext) as ScheduleContextType;

  const competitions = useSelector(selectAllCompetitions);
  const competition = typeof schedule.competition === 'string' ? 
    competitions.find(comp => comp._id === schedule.competition) : 
    schedule.competition;
  const clubs = competition?.clubs
  const clubSelectOptions = clubs!.map(club => ({ label: club.commonName, value: club._id }));

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleFormOpen = () => {
    setIsOpen(true);
  };

  const handleFormClose = () => {
    setIsOpen(false);
  };

  const handleMatchCreate = (data: any) => {
    const score = data.score.split(':');
    const homeClubPoints = data.score !== '-:-' ? 
      +score[0] > +score[1] ? 3 : +score[0] === +score[1] ? 1 : 0 : 0;
    const awayClubPoints = data.score !== '-:-' ? 
      +score[1] > +score[0] ? 3 : +score[1] === +score[0] ? 1 : 0 : 0;

    const homeGoals = score[0] !== '-' ? +score[0] : 0;
    const awayGoals = score[1] !== '-' ? +score[1] : 0;

    addMatch(mwId, {
      ...data,
      id: uuid(),
      home: {
        club: clubs!.find(club => club._id === data.home),
        points: homeClubPoints,
        goalsFor: homeGoals,
        goalsAgainst: awayGoals,
        final: homeGoals > awayGoals ? 'W' : homeGoals === awayGoals ? 'D' : 'L'
      },
      away: {
        club: clubs!.find(club => club._id === data.away),
        points: awayClubPoints,
        goalsFor: awayGoals,
        goalsAgainst: homeGoals,
        final: awayGoals > homeGoals ? 'W' : homeGoals === awayGoals ? 'D' : 'L'
      },
    });
  };

  useEffect(() => {
    const homeClub = clubs?.find(club => club._id === getValues().home)
    setValue('location', homeClub?.stadium!)
  }, [watch('home')]);

  return (
    <>
      <Tooltip title='Create a new match' placement='top' arrow>
        <Button 
          type='button' 
          variant='outlined'
          data-testid='openMatchFormBtn'
          disabled={clubs!.length < 1}
          onClick={handleFormOpen}
        >
          Add Match
        </Button>
      </Tooltip>
      <Dialog open={isOpen} onClose={handleFormClose}>
        <CloseSection>
          <CloseBtn onClick={handleFormClose}>
            <FontAwesomeIcon icon={faXmark} />
          </CloseBtn>
        </CloseSection>
        <Form component='form' onSubmit={handleSubmit(handleMatchCreate)}>
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
                defaultValue='-:-'
                register={register}
                error={errors.score}
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
              <SubmitBtn 
                type='submit' 
                variant='contained'
                data-testid='submitAddMatchBtn'
              >Add</SubmitBtn>
            </Grid>
          </Grid>
        </Form>
      </Dialog>
    </>
  );
};

export default MatchForm;