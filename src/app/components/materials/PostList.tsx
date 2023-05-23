import React from 'react';
import { useSelector } from 'react-redux';
import { List, ListItem, styled } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { selectSearchedMaterials } from '../../../features/materials/selectors';
import PostCard from './PostCard';
import { Link } from 'react-router-dom';


const PostLink = styled(Link)`
  width: 100%;
  text-decoration: none;
  color: #000000;
`;

const PostList: React.FC = () => {
  const posts = useSelector(selectSearchedMaterials);

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