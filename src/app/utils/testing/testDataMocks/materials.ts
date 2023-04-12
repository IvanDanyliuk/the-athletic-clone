import { IMaterialsState } from "../../../../features/materials/types";
import { MaterialModel } from "../../../models/components";
import { MaterialType } from "../../../models/components";


export const materialsStateSuccessMock: IMaterialsState = {
  status: 'succeeded',
  data: {
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
      }
    ],
    materialsCount: 1
  },
  filters: {
    author: 'John Doe',
    dateFrom: '',
    dateTo: '',
    type: ''
  },
  error: null
};

export const newArticle: MaterialModel = {
  author: { 
    name: 'Test Author',
    photoUrl: 'http://www.storage.com/authors/1.png',
    organization: 'Test Organization',
    position: 'Test Position',
  }, 
  type: MaterialType.article,
  title: 'Test Title',
  content: 'Test Content',
  image: 'http://www.storage.com/materials/1.png',
  status: 'published',
  views: 10,
  likes: 10,
  publicationDate: new Date(),
  comments: [
    {
      user: 'Test User', 
      message: 'Test Message'
    }
  ],
  labels: ['Test Label'],
};

export const articleToUpdate = {
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
};

export const newNote: MaterialModel = {
  author: { 
    name: 'Test Author',
    photoUrl: 'http://www.storage.com/authors/1.png',
    organization: 'Test Organization',
    position: 'Test Position',
  }, 
  type: MaterialType.note,
  title: 'Test Title',
  content: 'Test Content',
  image: 'http://www.storage.com/materials/1.png',
  status: 'published',
  views: 10,
  likes: 10,
  publicationDate: new Date(),
  comments: [
    {
      user: 'Test User', 
      message: 'Test Message'
    }
  ],
  labels: ['Test Label'],
};

export const noteToUpdate = {
  author: {
    name: 'John Doe',
    photoUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/surprised-cat-eric-hacke.jpg',
    organization: 'The Athletic',
    position: 'Website Administrator'
  },
  _id: '642d8710d4be15abd18e94ad',
  type: 'note',
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
};

export const newPost: MaterialModel = {
  author: { 
    name: 'Test Author',
    photoUrl: 'http://www.storage.com/authors/1.png',
    organization: 'Test Organization',
    position: 'Test Position',
  }, 
  type: MaterialType.post,
  title: 'Test Title',
  content: 'Test Content',
  image: 'http://www.storage.com/materials/1.png',
  status: 'published',
  views: 10,
  likes: 10,
  publicationDate: new Date(),
  comments: [
    {
      user: 'Test User', 
      message: 'Test Message'
    }
  ],
  labels: ['Test Label'],
};

export const postToUpdate = {
  author: {
    name: 'John Doe',
    photoUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/surprised-cat-eric-hacke.jpg',
    organization: 'The Athletic',
    position: 'Website Administrator'
  },
  _id: '642d8710d4be15abd18e94ad',
  type: 'post',
  title: '',
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
};