import React from 'react';
import { useSelector } from 'react-redux';
import { selectCompetition } from '../../../features/competitions/selectors';
import BackdropLoader from '../ui/BackdropLoader';


const CompetitionTeams: React.FC = () => {
  const league = useSelector(selectCompetition);

  if(!league) {
    return <BackdropLoader open={true} />;
  }

  return (
    <div>CompetitionTeams</div>
  );
};

export default CompetitionTeams;