import { IContentSection, IContentSectionsInitialState } from "../../../../features/content/types";
import { materialsStateSuccessMock } from "./materials";

export const contentStateSuccessMock: IContentSectionsInitialState = {
  status: 'succeeded',
  content: [
    {
      _id: 'sdsdfsdfsdfsdfsdasdasd',
      name: 'Test Section 1',
      maxLength: 3,
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
          likes: [],
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
          likes: [],
          labels: [
            'Premier League',
            'Arsenal'
          ],
          comments: [],
          createdAt: '2023-04-05T14:34:56.462Z',
          updatedAt: '2023-04-05T14:35:57.574Z',
        },
      ],
      createdAt: '2023-04-05T14:34:56.462Z'
    },
    {
      _id: 'dfgdgfhfgfdghgfdh',
      name: 'Test Section 2',
      maxLength: 3,
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
          likes: [],
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
          likes: [],
          labels: [
            'Premier League',
            'Arsenal'
          ],
          comments: [],
          createdAt: '2023-04-05T14:34:56.462Z',
          updatedAt: '2023-04-05T14:35:57.574Z',
        },
      ],
      createdAt: '2023-04-05T14:34:56.462Z'
    }
  ],
  isContentEditingModeActive: false,
  materialsToContent: [],
  error: null
};

export const contentSection: IContentSection = {
  _id: 'sdsdfsdfsdfsdfsdasdasd',
  name: 'Test Section 1',
  maxLength: 3,
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
      likes: [],
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
      likes: [],
      labels: [
        'Premier League',
        'Arsenal'
      ],
      comments: [],
      createdAt: '2023-04-05T14:34:56.462Z',
      updatedAt: '2023-04-05T14:35:57.574Z',
    },
  ],
  createdAt: '2023-04-05T14:34:56.462Z'
};

export const leagueMaterialsPropsMock = [
  {
    league: 'Premier League',
    logo: 'https://www.storage.com/1.png',
    materials: materialsStateSuccessMock.data.main.materials
  },
  {
    league: 'Premier League',
    logo: 'https://www.storage.com/1.png',
    materials: materialsStateSuccessMock.data.main.materials
  },
  {
    league: 'Premier League',
    logo: 'https://www.storage.com/1.png',
    materials: materialsStateSuccessMock.data.main.materials
  },
  {
    league: 'Premier League',
    logo: 'https://www.storage.com/1.png',
    materials: materialsStateSuccessMock.data.main.materials
  },
  {
    league: 'Premier League',
    logo: 'https://www.storage.com/1.png',
    materials: materialsStateSuccessMock.data.main.materials
  },
  {
    league: 'Premier League',
    logo: 'https://www.storage.com/1.png',
    materials: materialsStateSuccessMock.data.main.materials
  },
  {
    league: 'Premier League',
    logo: 'https://www.storage.com/1.png',
    materials: materialsStateSuccessMock.data.main.materials
  }
];