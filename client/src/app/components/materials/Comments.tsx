import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { 
  Avatar, Box, Button, Divider, Grid, Icon, IconButton, List, 
  ListItem, Paper, Typography, styled 
} from '@mui/material';
import { Close, Edit } from '@mui/icons-material';
import { v4 as uuid } from 'uuid';
import { IComment, IMaterial } from '../../../features/materials/types';
import { IUser } from '../../../features/users/types';
import { AppDispatch } from '../../../features/store';
import { updateViewedMaterial } from '../../../features/materials/asyncActions';
import { TextInput } from '../ui/';


interface ICommentsProps {
  user: IUser;
  material: IMaterial;
}

const CommentListContainer = styled(Paper)`
  margin-top: 1em;
  padding: 0 1em;
`;

const Comment = styled(ListItem)`
  margin: .5em 0;
  display: flex;
  flex-direction: column;
`;

const CommentHeader = styled(Grid)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CommentAuthor = styled(Box)`
  display: flex;
  align-items: center;
  img {
    width: 3em;
    height: 3em;
    @media (max-width: 640px) {
      width: 2em;
      height: 2em;
    }
  }
  p {
    margin-left: 1em;
    font-weight: 600;
    @media (max-width: 640px) {
      font-size: .8em;
    }
  }
`;

const CommentContent = styled(Grid)`
  padding: .5em 0;
`;

const CommentForm = styled(Box)`
  width: 100%;
`;

const CommentBtn = styled(Button)`
  width: 100%;
  height: 4em;
  background: #121212;
  &:hover {
    background: #3b3b3b;
  }
`;

const CommentActionBtns = styled(Box)`
  display: flex;
  button {
    margin-left: .5em;
    svg {
      @media (max-width: 640px) {
        font-size: 1em;
      }
    }
  }
`;

const CommentText = styled(Typography)`
  @media (max-width: 640px) {
    font-size: .8em;
  }
`;

const EmptyCommentsListContainer = styled(Box)`
  padding: 2em 0;
  width: 100%;
  text-align: center;
`;


const Comments: React.FC<ICommentsProps> = ({ material, user }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { 
    register, 
    handleSubmit,
    formState: { errors }, 
    reset 
  } = useForm<IComment>();

  const [editedCommentId, setEditedCommentId] = useState<string | null>(null);

  const handleCommentMaterial = async (data: any) => {
    if(editedCommentId) {
      await dispatch(updateViewedMaterial({
        ...material!,
        comments: material!.comments!
          .map(comment => comment.id === editedCommentId ? 
            ({ ...comment, message: data.message }) : 
            comment)
      }));
      setEditedCommentId(null);
    } else {
      await dispatch(updateViewedMaterial({
        ...material!,
        comments: [ 
          ...material!.comments, 
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
    const comment = material!.comments.find(comment => comment.id === id);
    reset({
      message: comment?.message
    });
  };

  const handleCommentDelete = (id: string) => {
    dispatch(updateViewedMaterial({
      ...material!,
      comments: material!.comments.filter(comment => id !== comment.id)
    }));
  };

  return (
    <>
      <CommentForm component='form' onSubmit={handleSubmit(handleCommentMaterial)}>
        <Grid container spacing={3} alignItems='flex-end'>
          <Grid item xs={12} md={10}>
            <TextInput 
              name='message' 
              label='Comment'
              type='text' 
              register={register}
              error={errors.message}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <CommentBtn 
              type='submit' 
              variant='contained'
            >
              {editedCommentId ? 'Submit' : 'Comment'}
            </CommentBtn>
          </Grid>
        </Grid>
      </CommentForm>
      <CommentListContainer>
        {material?.comments && material?.comments.length > 0 ? (
          <List>
            {material?.comments.map((comment, i) => (
              <>
                <Comment key={uuid()}>
                  <Grid container>
                    <CommentHeader item xs={12}>
                      <CommentAuthor>
                        <Avatar src={comment.userImage} />
                        <Typography variant='body2'>
                          {comment.userName}
                        </Typography>
                      </CommentAuthor>
                      {((user && user.role === 'admin') || (user && user._id === comment.userId)) && (
                        <CommentActionBtns>
                          <IconButton onClick={() => handleCommentEdit(comment.id)}>
                            <Icon component={Edit} />
                          </IconButton>
                          <IconButton onClick={() => handleCommentDelete(comment.id)}>
                            <Icon component={Close} />
                          </IconButton>
                        </CommentActionBtns>
                      )}
                    </CommentHeader>
                    <CommentContent item xs={12}>
                      <CommentText variant='body2'>
                        {comment.message}
                      </CommentText>
                    </CommentContent>
                  </Grid>
                </Comment>
                {i !== material!.comments.length - 1 && <Divider />}
              </>
            ))}
          </List>
        ) : (
          <EmptyCommentsListContainer>
            <Typography>Leave your comment</Typography>
          </EmptyCommentsListContainer>
        )}
      </CommentListContainer>
    </>
  );
};

export default Comments;