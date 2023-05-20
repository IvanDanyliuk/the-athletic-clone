import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { 
  Avatar, Box, Button, Card, CardActions, CardContent, 
  CardHeader, Grid, Icon, Typography, styled 
} from '@mui/material';
import { ChatBubbleOutlined, ThumbUpOutlined } from '@mui/icons-material';
import { IMaterial } from '../../../features/materials/types';

import { AppDispatch } from '../../../features/store';
import { getRecentMaterials } from '../../../features/materials/asyncActions';
import { selectMaterials } from '../../../features/materials/selectors';
import Headlines from '../homepage/Headlines';


interface IPostProps {
  post: IMaterial;
}

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


const Post: React.FC<IPostProps> = ({ post }) => {
  const { author, content, comments, likes } = post;

  const dispatch = useDispatch<AppDispatch>();

  const headlines = useSelector(selectMaterials);

  useEffect(() => {
    dispatch(getRecentMaterials({ 
      materialsNumber: 10, 
      materialTypes: ['note'] 
    }));
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={3}>
        Search & Filters
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader 
            avatar={<Avatar src={author.photoUrl} alt={author.name} />} 
            title={post.author.name}  
          />
          <CardContent>
            <Box 
              component='div' 
              dangerouslySetInnerHTML={{ __html: content }} 
            />
          </CardContent>
          <CardActions>
            <Grid container>
              <Grid item xs={6}>
                <ActionBtn>
                  <Icon component={ThumbUpOutlined} />
                  <Typography>
                    {likes.length}
                  </Typography>
                </ActionBtn>
              </Grid>
              <Grid item xs={6}>
                <ActionBtn>
                  <Icon component={ChatBubbleOutlined} />
                  <Typography>
                    {comments.length}
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