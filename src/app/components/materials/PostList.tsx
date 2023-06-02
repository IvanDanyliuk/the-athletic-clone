import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { List, ListItem, styled } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { selectSearchedMaterials } from '../../../features/materials/selectors';
import { AppDispatch } from '../../../features/store';
import { clearSearch } from '../../../features/materials/reducers';
import { PostCard } from './';


const PostLink = styled(Link)`
  width: 100%;
  text-decoration: none;
  color: #000000;
`;

const PostList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector(selectSearchedMaterials);

  useEffect(() => {
    //Switch the StrictMode off to trigger the code line below
    return () => { dispatch(clearSearch()) };
  }, [dispatch]);

  if(!posts) {
    return <div>Cannot find materials related to your request.</div>
  }

  return (
    <List>
      {posts.map(post => (
        <ListItem key={uuid()}>
          <PostLink to={`/posts/${post._id}`}>
            <PostCard post={post} />
          </PostLink>
        </ListItem>
      ))}
    </List>
  );
};

export default PostList;