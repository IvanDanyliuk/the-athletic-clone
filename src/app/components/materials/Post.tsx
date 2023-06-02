import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box, styled } from '@mui/material';
import { AppDispatch } from '../../../features/store';
import { selectMaterial } from '../../../features/materials/selectors';
import { selectUser } from '../../../features/users/selectors';
import { getMaterial } from '../../../features/materials/asyncActions';
import { clearMaterial } from '../../../features/materials/reducers';
import { BackdropLoader } from '../ui/';
import { Comments, PostCard } from './';


const CommentsSection = styled(Box)`
  margin-top: 1em;
  width: 100%;
`;


const Post: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const post = useSelector(selectMaterial);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(getMaterial(id!));
    return () => { dispatch(clearMaterial()) };
  }, []);

  if(!post) {
    return <BackdropLoader open={true} />;
  }

  return (
    <>
      <PostCard post={post} user={user!} />
      <CommentsSection>
        {user && <Comments material={post} user={user} />}
      </CommentsSection>
    </>
  );
};

export default Post;