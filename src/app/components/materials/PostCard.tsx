import React from 'react';
import { useDispatch } from 'react-redux';
import { 
  Avatar, Box, Button, Card, CardActions, CardContent, 
  CardHeader, Grid, Icon, Typography, styled 
} from '@mui/material';
import { ChatBubbleOutlined, ThumbUpOutlined } from '@mui/icons-material';
import { IMaterial } from '../../../features/materials/types';
import { IUser } from '../../../features/users/types';
import { AppDispatch } from '../../../features/store';
import { updateViewedMaterial } from '../../../features/materials/asyncActions';



interface IPostCardProps {
  post: IMaterial;
  user?: IUser;
}

const ActionBtn = styled(Button)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;

  &[data-liked='true'] {
    background: #b4b4b4;
    color: #333333;
  }
  
  svg {
    margin-right: .5em;
    font-size: 1.2em;
  }

  p {
    font-size: 1em;
  }
`;


const PostCard: React.FC<IPostCardProps> = ({ post, user }) => {
  const dispatch = useDispatch<AppDispatch>();

  const isLiked = post.likes.includes(user?._id!);

  const handleLikeMaterial = () => {
    const isLiked = post!.likes.includes(user!._id!);
    let materialToUpdate;
    if(isLiked) {
      materialToUpdate = {
        ...post!,
        likes: post!.likes.filter(id => id !== user!._id!)
      };
    } else {
      materialToUpdate = {
        ...post!,
        likes: [ ...post!.likes!, user?._id! ]
      }
    }
    dispatch(updateViewedMaterial(materialToUpdate));
  };

  return (
    <Card>
      <CardHeader 
        avatar={<Avatar src={post.author.photoUrl} alt={post.author.name} />} 
        title={post?.author.name}  
      />
      <CardContent>
        <Box 
          component='div' 
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
      </CardContent>
      <CardActions>
        <Grid container>
          <Grid item xs={6}>
            <ActionBtn data-liked={isLiked} disabled={!Boolean(user)} onClick={handleLikeMaterial}>
              <Icon component={ThumbUpOutlined} />
              <Typography>
                {post.likes.length}
              </Typography>
            </ActionBtn>
          </Grid>
          <Grid item xs={6}>
            <ActionBtn>
              <Icon component={ChatBubbleOutlined} />
              <Typography>
                {post.comments.length}
              </Typography>
            </ActionBtn>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default PostCard;