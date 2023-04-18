import React from 'react';
import { Box, Button, Typography, styled } from '@mui/material';
import SubPageHeader from '../ui/SubPageHeader';

const sections = [
  {
    name: 'Spotlight',
    maxLength: 6,
    materials: [
      {
        author: {
          name: 'John Doe',
          photoUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/surprised-cat-eric-hacke.jpg',
          organization: 'The Athletic',
          position: 'Website Administrator'
        },
        _id: '642d8710d4be15abd18e94ad',
        type: 'article',
        title: 'aaaaaaaaaaaaaaaaaa',
        content: '<p>sdfsdfsdfsdfsdfsdfsadf</p>',
        image: '',
        status: 'published',
        publicationDate: '2023-04-05T21:00:00.000Z',
        views: 0,
        likes: 0,
        labels: [
          'Premier League',
          'Arsenal'
        ],
        comments: [],
        createdAt: '2023-04-05T14:34:56.462Z',
        updatedAt: '2023-04-05T14:35:57.574Z',
      },
      {
        author: {
          name: 'John Doe',
          photoUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/surprised-cat-eric-hacke.jpg',
          organization: 'The Athletic',
          position: 'Website Administrator'
        },
        _id: '642d8711d4be15abd18e94ad',
        type: 'article',
        title: 'aaaaaaaaaaaaaaaaaa',
        content: '<p>sdfsdfsdfsdfsdfsdfsadf</p>',
        image: '',
        status: 'published',
        publicationDate: '2023-04-05T21:00:00.000Z',
        views: 0,
        likes: 0,
        labels: [
          'Premier League',
          'Arsenal'
        ],
        comments: [],
        createdAt: '2023-04-05T14:34:56.462Z',
        updatedAt: '2023-04-05T14:35:57.574Z',
      },
    ]
  },
  {
    name: 'Custom Section',
    maxLength: 6,
    materials: [
      {
        author: {
          name: 'John Doe',
          photoUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/surprised-cat-eric-hacke.jpg',
          organization: 'The Athletic',
          position: 'Website Administrator'
        },
        _id: '642d8710d4be15abd18e94ad',
        type: 'article',
        title: 'aaaaaaaaaaaaaaaaaa',
        content: '<p>sdfsdfsdfsdfsdfsdfsadf</p>',
        image: '',
        status: 'published',
        publicationDate: '2023-04-05T21:00:00.000Z',
        views: 0,
        likes: 0,
        labels: [
          'Premier League',
          'Arsenal'
        ],
        comments: [],
        createdAt: '2023-04-05T14:34:56.462Z',
        updatedAt: '2023-04-05T14:35:57.574Z',
      },
      {
        author: {
          name: 'John Doe',
          photoUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/surprised-cat-eric-hacke.jpg',
          organization: 'The Athletic',
          position: 'Website Administrator'
        },
        _id: '642d8711d4be15abd18e94ad',
        type: 'article',
        title: 'aaaaaaaaaaaaaaaaaa',
        content: '<p>sdfsdfsdfsdfsdfsdfsadf</p>',
        image: '',
        status: 'published',
        publicationDate: '2023-04-05T21:00:00.000Z',
        views: 0,
        likes: 0,
        labels: [
          'Premier League',
          'Arsenal'
        ],
        comments: [],
        createdAt: '2023-04-05T14:34:56.462Z',
        updatedAt: '2023-04-05T14:35:57.574Z',
      },
    ]
  }
]


const Content: React.FC = () => {

  return (
    <div>
      <SubPageHeader 
        title='Content'
        link='new-content-section'
      />
      
    </div>
  );
};

export default Content;