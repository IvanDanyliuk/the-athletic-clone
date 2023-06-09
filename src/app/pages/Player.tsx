import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Player: React.FC = () => {
  const { id } = useParams();

  useEffect(() => {

  }, []);

  return (
    <div>{id}</div>
  );
};

export default Player;