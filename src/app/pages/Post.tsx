import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { 
  Avatar, Box, Button, Card, CardActions, CardContent, 
  CardHeader, Grid, Icon, Typography, styled 
} from '@mui/material';
import { ChatBubbleOutlined, ThumbUpOutlined } from '@mui/icons-material';
import { v4 as uuid } from 'uuid';
import { AppDispatch } from '../../features/store';
import { getMaterial, getRecentMaterials, updateViewedMaterial } from '../../features/materials/asyncActions';
import { selectMaterial, selectMaterials } from '../../features/materials/selectors';
import Headlines from '../components/homepage/Headlines';
import { useParams } from 'react-router-dom';
import { clearMaterial } from '../../features/materials/reducers';
import BackdropLoader from '../components/ui/BackdropLoader';
import { selectUser } from '../../features/users/selectors';
import { IComment } from '../../features/materials/types';


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


const Post: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { 
    register, 
    handleSubmit,
    formState: { errors }, 
    reset 
  } = useForm<IComment>();

  const post = useSelector(selectMaterial);
  const headlines = useSelector(selectMaterials);
   const user = useSelector(selectUser);

  const [editedCommentId, setEditedCommentId] = useState<string | null>(null);
  const isLiked = post?.likes.includes(user?._id!);

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

  const handleCommentMaterial = async (data: any) => {
    if(editedCommentId) {
      await dispatch(updateViewedMaterial({
        ...post!,
        comments: post!.comments!
          .map(comment => comment.id === editedCommentId ? 
            ({ ...comment, message: data.message }) : 
            comment)
      }));
      setEditedCommentId(null);
    } else {
      await dispatch(updateViewedMaterial({
        ...post!,
        comments: [ 
          ...post!.comments, 
          {
            ...data,
            id: uuid(),
            userId: user?._id,
            userImage: user?.userPhotoUrl,
            userName: `${user?.firstName} ${user?.lastName}`
          }
        ]
      }));
    }
    reset({ message: '' });
  };

  const handleCommentEdit = (id: string) => {
    setEditedCommentId(id);
    const comment = post!.comments.find(comment => comment.id === id);
    reset({
      message: comment?.message
    });
  };

  const handleCommentDelete = (id: string) => {
    dispatch(updateViewedMaterial({
      ...post!,
      comments: post!.comments.filter(comment => id !== comment.id)
    }));
  };

  useEffect(() => {
    dispatch(getRecentMaterials({ 
      materialsNumber: 10, 
      materialTypes: ['note'] 
    }));
    dispatch(getMaterial(id!));
    return () => { dispatch(clearMaterial()) };
  }, []);

  if(!post) {
    return <BackdropLoader open={true} />;
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={3}>
        Search & Filters
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader 
            avatar={<Avatar src={post?.author.photoUrl} alt={post?.author.name} />} 
            title={post?.author.name}  
          />
          <CardContent>
            <Box 
              component='div' 
              dangerouslySetInnerHTML={{ __html: post!.content }} 
            />
          </CardContent>
          <CardActions>
            <Grid container>
              <Grid item xs={6}>
                <ActionBtn data-liked={isLiked} disabled={!Boolean(user)} onClick={handleLikeMaterial}>
                  <Icon component={ThumbUpOutlined} />
                  <Typography>
                    {post?.likes.length}
                  </Typography>
                </ActionBtn>
              </Grid>
              <Grid item xs={6}>
                <ActionBtn>
                  <Icon component={ChatBubbleOutlined} />
                  <Typography>
                    {post?.comments.length}
                  </Typography>
                </ActionBtn>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} md={3}>
        <Headlines data={headlines} />
      </Grid>
    </Grid>
  );
};

export default Post;