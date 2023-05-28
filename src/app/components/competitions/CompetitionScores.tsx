import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Tab, Tabs, styled } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { AppDispatch } from '../../../features/store';
import { getCurrentSeasonValue } from '../../utils/helpers';
import { getSchedule } from '../../../features/schedules/asyncActions';
import { selectCompetition } from '../../../features/competitions/selectors';
import { selectSchedule, selectSchedulesStatus } from '../../../features/schedules/selectors';
import BackdropLoader from '../ui/BackdropLoader';
import DataNotFoundMessage from '../ui/DataNotFoundMessage';
import { IMatchweek } from '../../../features/schedules/types';
import MatchweekPicker from './MatchweekPicker';
import MatchweekTable from './MatchweekTable';


const SetMatchweekSection = styled(Box)`
  margin-bottom: 1em;
  display: flex;
  align-items: center;
`;


const CompetitionScores: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const currentSeason = getCurrentSeasonValue();
  const league = useSelector(selectCompetition);
  const scheduleStatus = useSelector(selectSchedulesStatus);
  const activeSchedule = useSelector(selectSchedule);
  
  const [currentMatchweek, setCurrentMatchweek] = useState<IMatchweek | null>(null);
  const [tabs, setTabs] = useState<IMatchweek[]>([]);

  const handleCurrentMatchweekChange = (event: React.SyntheticEvent, currentMatchweek: IMatchweek) => {
    setCurrentMatchweek(currentMatchweek);
  };

  useEffect(() => {
    if(activeSchedule && currentMatchweek) {
      const mwIds = activeSchedule?.fixture.map(mw => mw._id);
      const middlePos = mwIds!.indexOf(currentMatchweek!._id);
      const left = activeSchedule.fixture.slice(0, middlePos);
      const right = activeSchedule.fixture.slice(middlePos! + 1);

      if(left.length >= 2 && right.length >= 2) {
        const leftSide = left.reverse().slice(0, 2).reverse();
        const rightSide = right.slice(0, 2);
        setTabs([...leftSide, activeSchedule.fixture[middlePos], ...rightSide])
      } else {
        if(left.length < right.length) {
          const leftSide = left.reverse().slice(0, 2).reverse();
          const rightSide = right.slice(0, 5 - leftSide.length - 1);
          setTabs([...leftSide, activeSchedule.fixture[middlePos], ...rightSide])
        } else {
          const rightSide = right.slice(0, 2);
          const leftSide = left.reverse().slice(0, 5 - rightSide.length - 1).reverse();
          setTabs([...leftSide, activeSchedule.fixture[middlePos], ...rightSide])
        }
      }
    }
  }, [activeSchedule, currentMatchweek]);

  useEffect(() => {
    if(activeSchedule) {
      const currentDate = new Date().getTime();
      const mw = activeSchedule.fixture.reduce((prev, curr) => {
        const a = Math.abs(new Date(curr.basicDate).getTime() - currentDate);
        const b = Math.abs(new Date(prev.basicDate).getTime() - currentDate);
        return a - b < 0 ? curr : prev;
      });
      setCurrentMatchweek(mw);
    }
  }, [activeSchedule]);

  useEffect(() => {
    dispatch(getSchedule({ season: currentSeason, leagueId: league?._id! }));
  }, []);

  if(!league && !activeSchedule) {
    return scheduleStatus === 'loading' ? 
      <BackdropLoader open={true} /> : 
      <DataNotFoundMessage message='Cannot find schedule' />;
  }

  return (
    <Box>
      <SetMatchweekSection>
        <Tabs value={currentMatchweek} onChange={handleCurrentMatchweekChange}>
          {tabs.map(tab => (
            <Tab key={uuid()} value={tab} label={tab.matchweekName} />
          ))}
        </Tabs>
        {currentMatchweek && activeSchedule && (
          <MatchweekPicker 
            matchweeks={activeSchedule!.fixture!} 
            setMatchweek={setCurrentMatchweek} 
          />
        )}
      </SetMatchweekSection>
      {currentMatchweek && (
        <MatchweekTable matchweek={currentMatchweek} />
      )}
    </Box>
  );
};

export default CompetitionScores;