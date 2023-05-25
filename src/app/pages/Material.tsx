import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box, Button, Icon, Typography, styled } from '@mui/material';
import { ChatBubbleOutlined, Visibility } from '@mui/icons-material';
import dayjs from 'dayjs';
import { AppDispatch } from '../../features/store';
import { getMaterial, updateViewedMaterial } from '../../features/materials/asyncActions';
import { clearMaterial } from '../../features/materials/reducers';
import { selectUser } from '../../features/users/selectors';
import { selectMaterial } from '../../features/materials/selectors';
import BackdropLoader from '../components/ui/BackdropLoader';
import Comments from '../components/materials/Comments';


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

const CommentsSection = styled(Box)`
  margin-top: 1em;
  width: 100%;
`;

const ActivityInfo = styled(Box)`
  display: flex;
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
const Material: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const material = useSelector(selectMaterial);
  const user = useSelector(selectUser);

  const isLiked = material?.likes.includes(user?._id!);

  const handleLikeMaterial = () => {
    const isLiked = material?.likes.includes(user?._id!);
    let materialToUpdate;
    if(isLiked) {
      materialToUpdate = {
        ...material!,
        likes: material!.likes.filter(id => id !== user?._id!)
      };
    } else {
      materialToUpdate = {
        ...material!,
        likes: [ ...material!.likes!, user?._id! ]
      }
    }
    dispatch(updateViewedMaterial(materialToUpdate));
  };

  useEffect(() => {
    dispatch(getMaterial(id!));
    return () => { dispatch(clearMaterial()) };
  }, []);

  if(!material) {
    return <BackdropLoader open={true} />;
  }

  return (
    <Container>
      <Image src={material?.image} alt={material?._id} />
      <AuthorInfo>
        <AuthorName variant='caption'>
          {material?.author.name}
        </AuthorName>
        <PublicationDate variant='caption'>
          {dayjs(material?.publicationDate).format('DD/MM/YYYY')}
        </PublicationDate>
      </AuthorInfo>
      <Title variant='h2_custom'>
        {material?.title}
      </Title>
      <Box 
        component='div' 
        dangerouslySetInnerHTML={{ __html: material?.content }} 
      />
      <FeedbackSection sx={{ width: '100%' }}>
        <ActivityInfo>
          {user && (
            <LikeButton data-liked={isLiked} onClick={handleLikeMaterial}>
              <Icon component={ChatBubbleOutlined} />
              <Typography variant='caption'>
                {material?.likes.length}
              </Typography>
            </LikeButton>
          )}
          <ViewsInfo>
            <Icon component={Visibility} />
            <Typography variant='caption'>
              {material?.views}
            </Typography>
          </ViewsInfo>
        </ActivityInfo>
        <CommentsSection>
          {user && <Comments material={material} user={user} />}
          
        </CommentsSection>
      </FeedbackSection>
    </Container>
  );
};

export default Material;