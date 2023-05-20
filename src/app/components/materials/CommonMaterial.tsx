import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Avatar, Box, Button, Divider, Grid, List, ListItem, Paper, Typography, styled } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare, faThumbsUp, faXmark } from '@fortawesome/free-solid-svg-icons';
import dayjs from 'dayjs';
import { v4 as uuid } from 'uuid';
import { IComment, IMaterial } from '../../../features/materials/types';
import { selectUser } from '../../../features/users/selectors';
import { AppDispatch } from '../../../features/store';
import { updateViewedMaterial } from '../../../features/materials/asyncActions';
import TextInput from '../ui/TextInput';


interface ICommonMaterialProps {
  material: IMaterial;
}

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled('img')`
  width: 100%;
  height: 35em;
  object-fit: cover;
  object-position: 50% 0;
`;

const AuthorInfo = styled(Box)`
  margin: 1em 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AuthorName = styled(Typography)`
  margin-right: 1em;
  font-size: 1em;
  font-weight: 800;
`;

const PublicationDate = styled(Typography)`
  font-size: 1em;
  font-weight: 800;
  color: #7e7e7e;
`;

const Title = styled(Typography)`
  margin: .5em 0 1em 0;
  width: 80%;
  font-size: 2.5em;
  text-align: center;
`;

const FeedbackSection = styled(Box)`
  margin: 3em 0;
`;

const ActivityInfo = styled(Box)`
  display: flex;
`;

const CommentsSection = styled(Box)`
  margin-top: 2em;
  width: 100%;
`;

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
  }

  p {
    margin-left: 1em;
    font-weight: 600;
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
  }
`;


const LikeButton = styled(Button)`
  margin-right: 1em;
  width: 5em;
  display: flex;
  font-size: 1.2em;
  color: #000000;

  &[data-liked='true'] {
    background: #b4b4b4;
    color: #333333;
  }

  svg {
    margin-right: .5em;
  }
`;

const ViewsInfo = styled(Box)`
  margin-right: 1em;
  width: 5em;
  display: flex;
  align-items: center;
  font-size: 1.2em;
  svg {
    margin-right: .5em;
  }
`;

const EmptyCommentsListContainer = styled(Box)`
  padding: 2em 0;
  width: 100%;
  text-align: center;
`;


const CommonMaterial: React.FC<ICommonMaterialProps> = ({ material }) => {
  const { 
    _id, author, comments, content, likes, 
    publicationDate, title, views, image 
  } = material;

  const dispatch = useDispatch<AppDispatch>();
  const { 
    register, 
    handleSubmit,
    formState: { errors }, 
    reset 
  } = useForm<IComment>();

  const [editedCommentId, setEditedCommentId] = useState<string | null>(null);
  const user = useSelector(selectUser);
  const isLiked = likes.includes(user?._id!);

  const handleLikeMaterial = () => {
    const isLiked = material.likes.includes(user?._id!);
    let materialToUpdate;
    if(isLiked) {
      materialToUpdate = {
        ...material,
        likes: material.likes.filter(id => id !== user?._id!)
      };
    } else {
      materialToUpdate = {
        ...material,
        likes: [ ...material.likes, user?._id! ]
      }
    }
    dispatch(updateViewedMaterial(materialToUpdate));
  };

  const handleCommentMaterial = async (data: any) => {
    if(editedCommentId) {
      await dispatch(updateViewedMaterial({
        ...material,
        comments: material.comments
          .map(comment => comment.id === editedCommentId ? 
            ({ ...comment, message: data.message }) : 
            comment)
      }));
      setEditedCommentId(null);
    } else {
      await dispatch(updateViewedMaterial({
        ...material,
        comments: [ 
          ...material.comments, 
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
    const comment = material.comments.find(comment => comment.id === id);
    reset({
      message: comment?.message
    });
  };

  const handleCommentDelete = (id: string) => {
    dispatch(updateViewedMaterial({
      ...material,
      comments: material.comments.filter(comment => id !== comment.id)
    }));
  };

  return (
    <Container>
      <Image src={image} alt={_id} />
      <AuthorInfo>
        <AuthorName variant='caption'>
          {author.name}
        </AuthorName>
        <PublicationDate variant='caption'>
          {dayjs(publicationDate).format('DD/MM/YYYY')}
        </PublicationDate>
      </AuthorInfo>
      <Title variant='h2_custom'>
        {title}
      </Title>
      <Box 
        component='div' 
        dangerouslySetInnerHTML={{ __html: content }} 
      />
      <FeedbackSection sx={{ width: '100%' }}>
        <ActivityInfo>
          {user && (
            <LikeButton data-liked={isLiked} onClick={handleLikeMaterial}>
              <FontAwesomeIcon icon={faThumbsUp} />
              <Typography variant='caption'>
                {likes.length}
              </Typography>
            </LikeButton>
          )}
          <ViewsInfo>
            <FontAwesomeIcon icon={faEye} />
            <Typography variant='caption'>
              {views}
            </Typography>
          </ViewsInfo>
        </ActivityInfo>
        <CommentsSection>
          {user && (
            <CommentForm component='form' onSubmit={handleSubmit(handleCommentMaterial)}>
              <Grid container spacing={3} alignItems='flex-end'>
                <Grid item xs={12} md={11}>
                  <TextInput 
                    name='message' 
                    label='Comment'
                    type='text' 
                    register={register}
                    error={errors.message}
                  />
                </Grid>
                <Grid item xs={12} md={1}>
                  <CommentBtn 
                    type='submit' 
                    variant='contained'
                  >
                    {editedCommentId ? 'Submit' : 'Comment'}
                  </CommentBtn>
                </Grid>
              </Grid>
            </CommentForm>
          )}
          <CommentListContainer>
            {comments && comments.length > 0 ? (
              <List>
                {comments.map((comment, i) => (
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
                              <Button onClick={() => handleCommentEdit(comment.id)}>
                                <FontAwesomeIcon icon={faPenToSquare} />
                              </Button>
                              <Button onClick={() => handleCommentDelete(comment.id)}>
                                <FontAwesomeIcon icon={faXmark} />
                              </Button>
                            </CommentActionBtns>
                          )}
                        </CommentHeader>
                        <CommentContent item xs={12}>
                          <Typography variant='body2'>
                            {comment.message}
                          </Typography>
                        </CommentContent>
                      </Grid>
                    </Comment>
                    {i !== comments.length - 1 && <Divider />}
                  </>
                ))}
              </List>
            ) : (
              <EmptyCommentsListContainer>
                <Typography>Leave your comment</Typography>
              </EmptyCommentsListContainer>
            )}
          </CommentListContainer>
        </CommentsSection>
      </FeedbackSection>
    </Container>
  );
};

export default CommonMaterial;