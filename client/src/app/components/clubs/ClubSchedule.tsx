import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography, styled } from '@mui/material';
import dayjs from 'dayjs';
import { v4 as uuid } from 'uuid';
import { AppDispatch } from '../../../features/store';
import { selectClub } from '../../../features/clubs/selectors';
import { selectAllSchedules } from '../../../features/schedules/selectors';
import { getCurrentSeasonValue } from '../../utils/helpers';
import { getSchedulesByClub } from '../../../features/schedules/asyncActions';
import { ClubLabel } from '../ui';


const TableContainer = styled(Paper)`
  max-width: 100%;
  overflow: auto;
`;

const CellContainer = styled(Box)`
  display: flex;
`;

const ScoreLabel = styled(Typography)`
  margin-left: 1em;
  &[data-final='W'] {
    color: #257c17;
  }
  &[data-final='L'] {
    color: #791d11;
  }
  &[data-final='D'] {
    color: #2e2e2e;
  }
  @media (max-width: 640px) {
    font-size: .9em;
  }
`;

const Cell = styled(TableCell)`
  @media (max-width: 640px) {
    font-size: .8em;
    p {
      font-size: 1em;
    }
  }
`;

const FinalResult = styled(Typography)`
  @media (max-width: 640px) {
    font-size: .9em;
  }
`;


const ClubSchedule: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const club = useSelector(selectClub);
  const season = getCurrentSeasonValue();
  const schedules = useSelector(selectAllSchedules);

  const [scores, setScores] = useState<any[]>([]);

  useEffect(() => {
    if(schedules.length > 0) {
      const matches = schedules
        .map(schedule => schedule.fixture.map(mw => mw.games.map(match => ({ ...match, competition: schedule.competition.fullName }))))
        .flat(2)
        .filter(match => match.home.club._id === club?._id || match.away.club._id === club?._id)
        .sort((a, b) => new Date(a.date).getDate() - new Date(b.date).getDate());
      setScores(matches)
    }
  }, [schedules, club]);
  
  useEffect(() => {
    if(club) {
      dispatch(getSchedulesByClub({ season, clubId: club?._id! }));
    }
  }, [club, season, dispatch]);

  return (
    <TableContainer>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Opponent</TableCell>
            <TableCell>Result</TableCell>
            <TableCell>Competition</TableCell>   
            <TableCell>Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {scores.map(score => (
            <TableRow key={uuid()} data-testid='scheduleTableRow'>
              <Cell>{dayjs(score.date).format('DD/MM/YYYY')}</Cell>
              <Cell>
                {score.home.club._id !== club?._id ? (
                  <CellContainer>
                    <FinalResult>{'(A)'}</FinalResult>
                    <ClubLabel 
                      clubId={score.home.club._id} 
                      logo={score.home.club.clubLogoUrl} 
                      name={score.home.club.commonName} 
                      altText={score.home.shortName} 
                    />
                  </CellContainer>
                ) : (
                  <CellContainer>
                    <FinalResult>{'(H)'}</FinalResult>
                    <ClubLabel 
                      clubId={score.away.club._id} 
                      logo={score.away.club.clubLogoUrl} 
                      name={score.away.club.commonName} 
                      altText={score.away.shortName} 
                    />
                  </CellContainer>
                  
                )}
              </Cell>
              <TableCell>
                <CellContainer>
                  <FinalResult>{score.score}</FinalResult>
                  {score.home.club._id === club?._id ? (
                    <ScoreLabel data-final={score.home.final}>
                      {score.home.final}
                    </ScoreLabel>
                  ) : (
                    <ScoreLabel data-final={score.away.final}>
                      {score.away.final}
                    </ScoreLabel>
                  )}
                </CellContainer>
              </TableCell>
              <Cell>{score.competition}</Cell>   
              <Cell>{score.location}</Cell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ClubSchedule;