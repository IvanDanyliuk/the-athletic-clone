import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Avatar, Box, Button, Grid, List, ListItem, Typography, styled } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import dayjs from 'dayjs';
import { v4 as uuid } from 'uuid';
import { IComment, IMaterial } from '../../../features/materials/types';
import { selectUser } from '../../../features/users/selectors';
import { AppDispatch } from '../../../features/store';
import { commentMaterial, likeMaterial } from '../../../features/materials/asyncActions';
import TextInput from '../ui/TextInput';


interface ICommonMaterialProps {
  material: IMaterial
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

const CommentList = styled(List)`

`;

const Comment = styled(ListItem)`

`;

const CommentForm = styled(Box)`
  width: 100%;
`;

const CommentFormColumn = styled(Grid)`
  display: flex;
  align-items: flex-end;
`;

const CommentBtn = styled(Button)`
  width: 100%;
  height: 4em;
`;

const LikeButton = styled(Button)`
  margin-right: 1em;
  width: 5em;
  display: flex;
  font-size: 1.2em;
  color: #000000;

  &[data-liked='true'] {
    background: #b4b4b4;
    color: #3d3d3d;
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
    dispatch(likeMaterial(materialToUpdate));
  };

  const handleCommentMaterial = async (data: any) => {
    await dispatch(commentMaterial({
      ...material,
      comments: [ 
        ...material.comments, 
        {
          ...data,
          id: uuid(),
          user: `${user?.firstName} ${user?.lastName}`
        }
      ]
    }));
    reset();
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
      <Title variant='h2'>
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
        {comments && (
          <CommentsSection>
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
                    Comment
                  </CommentBtn>
                </Grid>
              </Grid>
            </CommentForm>
            <CommentList>
              {comments.map(comment => (
                <Comment key={uuid()}>
                  <Grid container>
                    <Grid item xs={1}>
                      <Avatar src={comment.user} />
                    </Grid>
                    <Grid item xs={11}>
                      <Typography variant='caption'>
                        {comment.user}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography>
                        {comment.message}
                      </Typography>
                    </Grid>
                  </Grid>
                </Comment>
              ))}
            </CommentList>
          </CommentsSection>
        )}
      </FeedbackSection>
    </Container>
  );
};

export default CommonMaterial;