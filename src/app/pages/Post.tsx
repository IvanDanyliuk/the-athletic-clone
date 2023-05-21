import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { 
  Avatar, Box, Button, Card, CardActions, CardContent, 
  CardHeader, Grid, Icon, Typography, styled 
} from '@mui/material';
import { ChatBubbleOutlined, ThumbUpOutlined } from '@mui/icons-material';
import { AppDispatch } from '../../features/store';
import { getMaterial, getRecentMaterials } from '../../features/materials/asyncActions';
import { selectMaterial, selectMaterials } from '../../features/materials/selectors';
import Headlines from '../components/homepage/Headlines';
import { useParams } from 'react-router-dom';
import { clearMaterial } from '../../features/materials/reducers';
import BackdropLoader from '../components/ui/BackdropLoader';


const ActionBtn = styled(Button)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
  
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

  const post = useSelector(selectMaterial);
  const headlines = useSelector(selectMaterials);

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
                <ActionBtn>
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