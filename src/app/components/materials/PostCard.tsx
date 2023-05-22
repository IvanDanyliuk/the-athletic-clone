import React from 'react';
import { IMaterial } from '../../../features/materials/types';


interface IPostCardProps {
  post: IMaterial;
}

const PostCard: React.FC<IPostCardProps> = ({ post }) => {
  return (
    <div>PostCard</div>
  );
};

export default PostCard;