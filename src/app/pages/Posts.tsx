import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';
import { 
  Avatar, Box, Button, Card, CardActions, CardContent, 
  CardHeader, Grid, Icon, Typography, styled 
} from '@mui/material';
import { ChatBubbleOutlined, ThumbUpOutlined } from '@mui/icons-material';
import { AppDispatch } from '../../features/store';
import { getMaterial, getRecentMaterials, updateViewedMaterial } from '../../features/materials/asyncActions';
import { selectMaterial, selectMaterials } from '../../features/materials/selectors';
import { selectUser } from '../../features/users/selectors';
import { clearMaterial } from '../../features/materials/reducers';
import Headlines from '../components/homepage/Headlines';
import BackdropLoader from '../components/ui/BackdropLoader';
import Comments from '../components/materials/Comments';
import PostsSearch from '../components/materials/PostsSearch';


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

const CommentsSection = styled(Box)`
  margin-top: 1em;
  width: 100%;
`;


const Post: React.FC = () => {
  // const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  // const post = useSelector(selectMaterial);
  const headlines = useSelector(selectMaterials);
  // const user = useSelector(selectUser);

  // const isLiked = post?.likes.includes(user?._id!);

  // const handleLikeMaterial = () => {
  //   const isLiked = post!.likes.includes(user!._id!);
  //   let materialToUpdate;
  //   if(isLiked) {
  //     materialToUpdate = {
  //       ...post!,
  //       likes: post!.likes.filter(id => id !== user!._id!)
  //     };
  //   } else {
  //     materialToUpdate = {
  //       ...post!,
  //       likes: [ ...post!.likes!, user?._id! ]
  //     }
  //   }
  //   dispatch(updateViewedMaterial(materialToUpdate));
  // };

  useEffect(() => {
    dispatch(getRecentMaterials({ 
      materialsNumber: 10, 
      materialTypes: ['note'] 
    }));
  }, []);

  if(!headlines) {
    return <BackdropLoader open={true} />;
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={3}>
        <PostsSearch />
      </Grid>
      <Grid item xs={12} md={6}>
        {/* {post && (
          <>
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
            <CommentsSection>
              {user && <Comments material={post} user={user} />}
            </CommentsSection>
          </>
        )} */}
        <Outlet />
      </Grid>
      <Grid item xs={12} md={3}>
        <Headlines data={headlines} />
      </Grid>
    </Grid>
  );
};

export default Post;