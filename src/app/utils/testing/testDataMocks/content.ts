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
            userId: '63e8db447a8501b5b2a8428b',
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
            userId: '63e8db447a8501b5b2a8428b',
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
            userId: '63e8db447a8501b5b2a8428b',
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
            userId: '63e8db447a8501b5b2a8428b',
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
        userId: '63e8db447a8501b5b2a8428b',
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
        userId: '63e8db447a8501b5b2a8428b',
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

export const realContentStateMock: IContentSectionsInitialState = {
    status: 'succeeded',
    content: [
      {
        _id: '6442d800adca6bfd10d6cbda',
        name: 'One more section',
        maxLength: 6,
        materials: [
          {
            author: {
              name: 'Jack Dawson',
              photoUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/surprised-cat-eric-hacke.jpg',
              organization: 'The Athletic',
              position: 'Website Administrator',
              userId: '63e8db447a8501b5b2a8428b'
            },
            _id: '643d34582eb4f24a86c6c431',
            type: 'article',
            title: 'Arsenal yearn to be ruthless in Premier League title race as Manchester City loom at their back',
            content: '<p>Eight points shrunk to six at Anfield. Now six have withered to four at the London Stadium on Sunday after&nbsp;<a href="https://theathletic.com/football/team/arsenal/" rel="noopener noreferrer" target="_blank">Arsenal</a>&nbsp;let a 2-0 lead slip for the second successive game.</p><p>The numbers still favour them in the title race, even if&nbsp;<a href="https://theathletic.com/football/team/manchester-city/" rel="noopener noreferrer" target="_blank">Manchester City</a>&nbsp;win their yet-to-be-arranged game in hand against&nbsp;<a href="https://theathletic.com/football/team/brighton-and-hove-albion/" rel="noopener noreferrer" target="_blank">Brighton</a>&nbsp;to reduce the gap to a single point. But the lead has been halved within a week and, with it,&nbsp;<a href="https://theathletic.com/4351561/2023/03/30/arsenal-emotions-premier-league-title-race/" rel="noopener noreferrer" target="_blank">the psychology of the Premier League pursuit is transformed.</a></p><p>The creeping dread of the Manchester City machine — debugged of its early season chinks and switched on to its terrifyingly clinical autopilot mode — is now upon the leaders.</p><p>They have planted both feet on Arsenal’s doorstep and, unlike when they were stalking&nbsp;<a href="https://theathletic.com/football/team/liverpool/" rel="noopener noreferrer" target="_blank">Liverpool</a>&nbsp;in 2018-19, they have brought Mr Wolf up front with them this time.</p><p>There will be those who will say this is all evidence of Arsenal choking, but it is more that they are finally feeling the squeeze of City raising the bar. Arsenal don’t have any more lives to spare. Their leeway is gone, which frankly sounds ridiculous given they are still on course to accrue more than 90 points. Such is the extent to which Pep Guardiola’s team have recalibrated what is required to be&nbsp;<a href="https://theathletic.com/football/premier-league/" rel="noopener noreferrer" target="_blank">Premier League</a>&nbsp;champions.</p><p>The usual twist and turns have been replaced by two parallel lines. Any late missteps detonate title hopes.</p><p>It is why the sense of inevitability Arsenal have been staving off for so long is now beginning to set in.</p><p>Liverpool found out four years ago how unrelenting the pressure is when they were left to rue winning only 13 of their final 18 games. Arsenal have won nine next games.</p>',
            image: 'https://res.cloudinary.com/dsda5p1om/image/upload/v1681732682/fnst1ek77qnx1wuqrzjd.png',
            status: 'published',
            publicationDate: '2023-04-17T21:00:00.000Z',
            views: 0,
            likes: [],
            labels: [
              'Premier League',
              'Arsenal'
            ],
            createdAt: '2023-04-17T11:58:16.610Z',
            updatedAt: '2023-05-01T17:24:54.366Z',
            preview: 'Eight points shrunk to six at Anfield. Now six have withered to four at the London Stadium on Sunday after Arsenal let a 2-0 lead slip for the second successive game.',
            isMain: false,
            comments: []
          },
          {
            author: {
              name: 'Chris Watford',
              photoUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/surprised-cat-eric-hacke.jpg',
              organization: 'The Athletic',
              position: 'Website Administrator',
              userId: '63e8db447a8501b5b2a8428b'
            },
            _id: '643d3b722eb4f24a86c6c451',
            type: 'note',
            title: 'Manchester City are in their ruthless run-in frame of mind',
            content: '<p>It would have been easier to make this point at half-time of&nbsp;<a href="https://theathletic.com/football/team/manchester-city/" rel="noopener noreferrer" target="_blank">Manchester City</a>’s victory against&nbsp;<a href="https://theathletic.com/football/team/leicester-city/" rel="noopener noreferrer" target="_blank">Leicester City</a>&nbsp;on Saturday, fresh from blowing their opponents away to lead 3-0 with some more&nbsp;<a href="https://theathletic.com/football/player/erling-haaland-UqdITFAwdmIrBQfd/" rel="noopener noreferrer" target="_blank">Erling Haaland</a>-inspired football.</p><p>The second half of the game makes it a little tougher: by the end, Pep Guardiola would have been praying for the final whistle after the visitors pulled one goal back and saw&nbsp;<a href="https://theathletic.com/football/player/james-maddison-ede9eUJUZIVY4DfX/" rel="noopener noreferrer" target="_blank">James Maddison</a>’s one-v-one foiled by&nbsp;<a href="https://theathletic.com/football/player/ederson-NrTd48lP4XORzw4r/" rel="noopener noreferrer" target="_blank">Ederson</a>&nbsp;and&nbsp;<a href="https://theathletic.com/football/player/kelechi-iheanacho-ccVuzwzanhFNP3zO/" rel="noopener noreferrer" target="_blank">Kelechi Iheanacho</a>’s one-v-one foiled by a post.</p><p>But yes, City are back in their ruthless, run-in frame of mind.</p><p>“Everybody knows that if we lose games we lose competitions,” Guardiola had said on Friday, “that’s why our attention to details is higher.”</p>',
            image: 'https://res.cloudinary.com/dsda5p1om/image/upload/v1681734500/vrarmsmy8jgs8ripwqpz.jpg',
            status: 'published',
            publicationDate: '2023-04-17T21:00:00.000Z',
            views: 0,
            likes: [],
            labels: [
              'Premier League',
              'Man City'
            ],
            createdAt: '2023-04-17T12:28:34.859Z',
            updatedAt: '2023-05-11T15:28:14.269Z',
            preview: 'It would have been easier to make this point at half-time of Leicester City on Saturday, fresh from blowing their opponents away to lead 3-0 with some more Erling Haaland -inspired football.',
            comments: []
          },
          {
            author: {
              name: 'John Doe',
              photoUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/surprised-cat-eric-hacke.jpg',
              organization: 'The Athletic',
              position: 'Website Administrator',
              userId: '63e8db447a8501b5b2a8428b'
            },
            _id: '643d55fd2eb4f24a86c6c471',
            type: 'article',
            title: 'We worry too much about which teams referees support',
            content: '<p>It usually comes back to Anthony Taylor. One of the&nbsp;<a href="https://theathletic.com/football/premier-league/" rel="noopener noreferrer" target="_blank">Premier League</a>’s elite referees, Taylor comes from Wythenshawe, the sprawling suburb of Manchester where Johnny Marr first strummed a guitar and&nbsp;<a href="https://theathletic.com/football/player/marcus-rashford-xgQlXcNj79jwXiD4/" rel="noopener noreferrer" target="_blank">Marcus Rashford</a>&nbsp;learned to kick a ball. And, football being the sport it is, suspicion quickly set in.</p><p>In Wythenshawe, you are usually one of two things — a Red, namely a&nbsp;<a href="https://theathletic.com/football/team/manchester-united/" rel="noopener noreferrer" target="_blank">Manchester United</a>&nbsp;fan, or a Blue, a supporter of&nbsp;<a href="https://theathletic.com/football/team/manchester-city/" rel="noopener noreferrer" target="_blank">Manchester City</a>. Yet Taylor put himself down as a follower of Altrincham when he filled in his details with the Cheshire FA, rather than the Manchester one.</p><p>Believe him? Thousands didn’t. All sorts of rumours circulated online that he was, in fact, a United fan who had conjured up a link to Altrincham (15th in the fifth-tier National League) because it would have been incredibly complicated for him otherwise to referee at the highest end of the Premier League.</p><p>At Altrincham, meanwhile, they listened to all the fuss with a mix of sympathy and heard-it-all-before bemusement. Taylor has been a season ticket holder at Moss Lane for many years. He is often at the ground to help with club events — quietly, away from the public eye.</p>',
            image: 'https://res.cloudinary.com/dsda5p1om/image/upload/v1681741294/gmcn1pu2qmhebg2txdve.jpg',
            status: 'published',
            publicationDate: '2023-04-16T21:00:00.000Z',
            views: 0,
            likes: [],
            labels: [
              'Premier League'
            ],
            createdAt: '2023-04-17T14:21:49.707Z',
            updatedAt: '2023-04-17T14:21:49.707Z',
            preview: 'It usually comes back to Anthony Taylor. One of the Premier League’s elite referees, Taylor comes from Wythenshawe, the sprawling suburb of Manchester where Johnny Marr first strummed a guitar and Marcus Rashford learned to kick a ball.',
            comments: []
          },
          {
            author: {
              name: 'John Doe',
              photoUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/surprised-cat-eric-hacke.jpg',
              organization: 'The Athletic',
              position: 'Website Administrator',
              userId: '63e8db447a8501b5b2a8428b'
            },
            _id: '643d57072eb4f24a86c6c47f',
            type: 'note',
            title: 'Marco Asensio proves his Real Madrid worth once more, at a crucial time',
            content: '<p>With a low shot from inside the box,&nbsp;<a href="https://theathletic.com/football/player/marco-asensio-6yZmuwwLN8bjwtQ6/" rel="noopener noreferrer" target="_blank">Marco Asensio</a>&nbsp;made it 2-0 to&nbsp;<a href="https://theathletic.com/football/team/real-madrid/" rel="noopener noreferrer" target="_blank">Real Madrid</a>&nbsp;in the 76th minute, proving once again that his goals can be vital for Carlo Ancelotti’s side.</p><p>It didn’t seem to settle the manager down, however. Only a few minutes later, the Italian reproached his Spanish player with a gesture that seemed to demand more, after he missed out on a 50-50 challenge.</p><p>Looking at that moment, especially considering what had just come before, you might have been forgiven for thinking there is tension in their relationship. The truth is, as&nbsp;<em>The Athletic</em>&nbsp;has reported, Ancelotti has been one of Asensio’s biggest supporters at what is a&nbsp;<a href="https://theathletic.com/4400418/2023/04/11/marco-asensio-real-madrid-contract/" rel="noopener noreferrer" target="_blank">crucial time for his future at the club.</a></p><p>In recent weeks, with 27-year-old Asensio’s contract due to expire this summer, Ancelotti has made a special point of acknowledging his contribution.</p><p>“Asensio may have played less but he always delivers. He is a decisive player because he makes the difference in games with goals and assists,” he said after the match.</p><p>Saturday’s 2-0 victory at Cadiz, where Madrid went ahead through an unlikely&nbsp;<a href="https://theathletic.com/football/player/nacho-CrpeNMuE0s6cMrf0/" rel="noopener noreferrer" target="_blank">Nacho</a>&nbsp;strike from outside the area, marked the third consecutive&nbsp;<a href="https://theathletic.com/football/la-liga/" rel="noopener noreferrer" target="_blank">La Liga</a>&nbsp;match Asensio has played in full — his longest such run all season.</p><p>For the majority of this 2022-23 campaign, Asensio has been a bit-part player, behind&nbsp;<a href="https://theathletic.com/football/player/vinicius-junior-RYkvBJoMUnRgM6AO/" rel="noopener noreferrer" target="_blank">Vinicius Junior</a>,&nbsp;<a href="https://theathletic.com/football/player/karim-benzema-hwC1BNv4TpEYmSmb/" rel="noopener noreferrer" target="_blank">Karim Benzema</a>,&nbsp;<a href="https://theathletic.com/football/player/federico-valverde-7xkBDGz7u8vo68xZ/" rel="noopener noreferrer" target="_blank">Federico Valverde</a>&nbsp;and&nbsp;<a href="https://theathletic.com/football/player/rodrygo-JS0gfsSSMTJWAReh/" rel="noopener noreferrer" target="_blank">Rodrygo</a>&nbsp;in the pecking order for the spot he most favours. Asensio is the 16th-most used member of Madrid’s squad this season and has played just over half the number of minutes as Rodrygo (1,490 to 2,844).</p>',
            image: 'https://res.cloudinary.com/dsda5p1om/image/upload/v1681741561/rnkofdmghwcrgb10bscp.jpg',
            status: 'published',
            publicationDate: '2023-04-17T21:00:00.000Z',
            views: 0,
            likes: [],
            labels: [
              'La Liga',
              'Real Madrid'
            ],
            createdAt: '2023-04-17T14:26:15.851Z',
            updatedAt: '2023-04-17T14:26:15.851Z',
            preview: 'With a low shot from inside the box, Marco Asensio made it 2-0 to Real Madrid in the 76th minute, proving once again that his goals can be vital for Carlo Ancelotti’s side.',
            comments: []
          }
        ],
        createdAt: '2023-04-21T18:37:52.312Z',
      },
      {
        _id: '6440fa11147e1f596d9c4a45',
        name: 'Updated Another Section',
        maxLength: 6,
        materials: [
          {
            author: {
              name: 'Jack Dawson',
              photoUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/surprised-cat-eric-hacke.jpg',
              organization: 'The Athletic',
              position: 'Website Administrator',
              userId: '63e8db447a8501b5b2a8428b'
            },
            _id: '643d34582eb4f24a86c6c431',
            type: 'article',
            title: 'Arsenal yearn to be ruthless in Premier League title race as Manchester City loom at their back',
            content: '<p>Eight points shrunk to six at Anfield. Now six have withered to four at the London Stadium on Sunday after&nbsp;<a href="https://theathletic.com/football/team/arsenal/" rel="noopener noreferrer" target="_blank">Arsenal</a>&nbsp;let a 2-0 lead slip for the second successive game.</p><p>The numbers still favour them in the title race, even if&nbsp;<a href="https://theathletic.com/football/team/manchester-city/" rel="noopener noreferrer" target="_blank">Manchester City</a>&nbsp;win their yet-to-be-arranged game in hand against&nbsp;<a href="https://theathletic.com/football/team/brighton-and-hove-albion/" rel="noopener noreferrer" target="_blank">Brighton</a>&nbsp;to reduce the gap to a single point. But the lead has been halved within a week and, with it,&nbsp;<a href="https://theathletic.com/4351561/2023/03/30/arsenal-emotions-premier-league-title-race/" rel="noopener noreferrer" target="_blank">the psychology of the Premier League pursuit is transformed.</a></p><p>The creeping dread of the Manchester City machine — debugged of its early season chinks and switched on to its terrifyingly clinical autopilot mode — is now upon the leaders.</p><p>They have planted both feet on Arsenal’s doorstep and, unlike when they were stalking&nbsp;<a href="https://theathletic.com/football/team/liverpool/" rel="noopener noreferrer" target="_blank">Liverpool</a>&nbsp;in 2018-19, they have brought Mr Wolf up front with them this time.</p><p>There will be those who will say this is all evidence of Arsenal choking, but it is more that they are finally feeling the squeeze of City raising the bar. Arsenal don’t have any more lives to spare. Their leeway is gone, which frankly sounds ridiculous given they are still on course to accrue more than 90 points. Such is the extent to which Pep Guardiola’s team have recalibrated what is required to be&nbsp;<a href="https://theathletic.com/football/premier-league/" rel="noopener noreferrer" target="_blank">Premier League</a>&nbsp;champions.</p><p>The usual twist and turns have been replaced by two parallel lines. Any late missteps detonate title hopes.</p><p>It is why the sense of inevitability Arsenal have been staving off for so long is now beginning to set in.</p><p>Liverpool found out four years ago how unrelenting the pressure is when they were left to rue winning only 13 of their final 18 games. Arsenal have won nine next games.</p>',
            image: 'https://res.cloudinary.com/dsda5p1om/image/upload/v1681732682/fnst1ek77qnx1wuqrzjd.png',
            status: 'published',
            publicationDate: '2023-04-17T21:00:00.000Z',
            views: 0,
            likes: [],
            labels: [
              'Premier League',
              'Arsenal'
            ],
            createdAt: '2023-04-17T11:58:16.610Z',
            updatedAt: '2023-05-01T17:24:54.366Z',
            preview: 'Eight points shrunk to six at Anfield. Now six have withered to four at the London Stadium on Sunday after Arsenal let a 2-0 lead slip for the second successive game.',
            isMain: false,
            comments: []
          },
          {
            author: {
              name: 'John Doe',
              photoUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/surprised-cat-eric-hacke.jpg',
              organization: 'The Athletic',
              position: 'Website Administrator',
              userId: '63e8db447a8501b5b2a8428b'
            },
            _id: '643d35da2eb4f24a86c6c439',
            type: 'article',
            title: 'Chelsea look unmanageable – and they need to change that perception fast',
            content: '<p>The past few months cannot have been easy for Graham Potter, the guy who waved Brighton &amp; Hove Albion goodbye, imagining his career was heading skywards, only to be brought crashing down to earth at&nbsp;<a href="https://theathletic.com/football/team/chelsea/" rel="noopener noreferrer" target="_blank">Chelsea</a>.</p><p>Potter still lives in the Brighton area, among the fans who, feeling let down when he left them last September, mocked him when he and his Chelsea team suffered a chastening 4-1 defeat on his return at the Amex Stadium in October — a result that looked like a first real setback at the time, but can now be seen as the start of what would prove a swift unravelling.</p><p><a href="https://theathletic.com/football/team/brighton-and-hove-albion/" rel="noopener noreferrer" target="_blank">Brighton</a>&nbsp;are hardly missing him. As impressive as their progress was in their three years under Potter, they are scaling new heights under his successor Roberto De Zerbi, attracting plaudits, sitting seventh in the&nbsp;<a href="https://theathletic.com/football/premier-league/" rel="noopener noreferrer" target="_blank">Premier League</a>, pushing hard for European qualification and looking forward to an&nbsp;<a href="https://theathletic.com/football/fa-cup/" rel="noopener noreferrer" target="_blank">FA Cup</a>&nbsp;semi-final against&nbsp;<a href="https://theathletic.com/football/team/manchester-united/" rel="noopener noreferrer" target="_blank">Manchester United</a>&nbsp;next Sunday.</p><p>But Saturday afternoon at Stamford Bridge brought some level of recognition of Potter’s part in two different stories.</p><p>After Brighton condemned Chelsea to their third straight defeat under interim head coach Frank Lampard, De Zerbi made a point of thanking his predecessor for the “very great and very strong team” he inherited — and while Potter might not have had the answers at Chelsea, it is clearer than ever that their problems go an awful lot deeper than that.</p><p><br></p>',
            image: 'https://res.cloudinary.com/dsda5p1om/image/upload/v1681733067/bue0i6haigz8n1ga3ika.png',
            status: 'published',
            publicationDate: '2023-04-17T21:00:00.000Z',
            views: 0,
            likes: [],
            labels: [
              'Premier League',
              'Chelsea'
            ],
            createdAt: '2023-04-17T12:04:42.157Z',
            updatedAt: '2023-04-17T12:04:42.157Z',
            preview: 'The past few months cannot have been easy for Graham Potter, the guy who waved Brighton &amp; Hove Albion goodbye, imagining his career was heading skywards, only to be brought crashing down to earth at Chelsea.',
            comments: []
          },
          {
            author: {
              name: 'Chris Watford',
              photoUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/surprised-cat-eric-hacke.jpg',
              organization: 'The Athletic',
              position: 'Website Administrator',
              userId: '63e8db447a8501b5b2a8428b'
            },
            _id: '643d3b722eb4f24a86c6c451',
            type: 'note',
            title: 'Manchester City are in their ruthless run-in frame of mind',
            content: '<p>It would have been easier to make this point at half-time of&nbsp;<a href="https://theathletic.com/football/team/manchester-city/" rel="noopener noreferrer" target="_blank">Manchester City</a>’s victory against&nbsp;<a href="https://theathletic.com/football/team/leicester-city/" rel="noopener noreferrer" target="_blank">Leicester City</a>&nbsp;on Saturday, fresh from blowing their opponents away to lead 3-0 with some more&nbsp;<a href="https://theathletic.com/football/player/erling-haaland-UqdITFAwdmIrBQfd/" rel="noopener noreferrer" target="_blank">Erling Haaland</a>-inspired football.</p><p>The second half of the game makes it a little tougher: by the end, Pep Guardiola would have been praying for the final whistle after the visitors pulled one goal back and saw&nbsp;<a href="https://theathletic.com/football/player/james-maddison-ede9eUJUZIVY4DfX/" rel="noopener noreferrer" target="_blank">James Maddison</a>’s one-v-one foiled by&nbsp;<a href="https://theathletic.com/football/player/ederson-NrTd48lP4XORzw4r/" rel="noopener noreferrer" target="_blank">Ederson</a>&nbsp;and&nbsp;<a href="https://theathletic.com/football/player/kelechi-iheanacho-ccVuzwzanhFNP3zO/" rel="noopener noreferrer" target="_blank">Kelechi Iheanacho</a>’s one-v-one foiled by a post.</p><p>But yes, City are back in their ruthless, run-in frame of mind.</p><p>“Everybody knows that if we lose games we lose competitions,” Guardiola had said on Friday, “that’s why our attention to details is higher.”</p>',
            image: 'https://res.cloudinary.com/dsda5p1om/image/upload/v1681734500/vrarmsmy8jgs8ripwqpz.jpg',
            status: 'published',
            publicationDate: '2023-04-17T21:00:00.000Z',
            views: 0,
            likes: [],
            labels: [
              'Premier League',
              'Man City'
            ],
            createdAt: '2023-04-17T12:28:34.859Z',
            updatedAt: '2023-05-11T15:28:14.269Z',
            preview: 'It would have been easier to make this point at half-time of Leicester City on Saturday, fresh from blowing their opponents away to lead 3-0 with some more Erling Haaland -inspired football.',
            comments: []
          },
        ],
        createdAt: '2023-04-20T08:38:41.771Z',
      },
      {
        _id: '643ffec92375ab3188d6cb89',
        name: 'Spotlight',
        maxLength: 6,
        materials: [
          {
            author: {
              name: 'Jack Dawson',
              photoUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/surprised-cat-eric-hacke.jpg',
              organization: 'The Athletic',
              position: 'Website Administrator',
              userId: '63e8db447a8501b5b2a8428b'
            },
            _id: '643d34582eb4f24a86c6c431',
            type: 'article',
            title: 'Arsenal yearn to be ruthless in Premier League title race as Manchester City loom at their back',
            content: '<p>Eight points shrunk to six at Anfield. Now six have withered to four at the London Stadium on Sunday after&nbsp;<a href="https://theathletic.com/football/team/arsenal/" rel="noopener noreferrer" target="_blank">Arsenal</a>&nbsp;let a 2-0 lead slip for the second successive game.</p><p>The numbers still favour them in the title race, even if&nbsp;<a href="https://theathletic.com/football/team/manchester-city/" rel="noopener noreferrer" target="_blank">Manchester City</a>&nbsp;win their yet-to-be-arranged game in hand against&nbsp;<a href="https://theathletic.com/football/team/brighton-and-hove-albion/" rel="noopener noreferrer" target="_blank">Brighton</a>&nbsp;to reduce the gap to a single point. But the lead has been halved within a week and, with it,&nbsp;<a href="https://theathletic.com/4351561/2023/03/30/arsenal-emotions-premier-league-title-race/" rel="noopener noreferrer" target="_blank">the psychology of the Premier League pursuit is transformed.</a></p><p>The creeping dread of the Manchester City machine — debugged of its early season chinks and switched on to its terrifyingly clinical autopilot mode — is now upon the leaders.</p><p>They have planted both feet on Arsenal’s doorstep and, unlike when they were stalking&nbsp;<a href="https://theathletic.com/football/team/liverpool/" rel="noopener noreferrer" target="_blank">Liverpool</a>&nbsp;in 2018-19, they have brought Mr Wolf up front with them this time.</p><p>There will be those who will say this is all evidence of Arsenal choking, but it is more that they are finally feeling the squeeze of City raising the bar. Arsenal don’t have any more lives to spare. Their leeway is gone, which frankly sounds ridiculous given they are still on course to accrue more than 90 points. Such is the extent to which Pep Guardiola’s team have recalibrated what is required to be&nbsp;<a href="https://theathletic.com/football/premier-league/" rel="noopener noreferrer" target="_blank">Premier League</a>&nbsp;champions.</p><p>The usual twist and turns have been replaced by two parallel lines. Any late missteps detonate title hopes.</p><p>It is why the sense of inevitability Arsenal have been staving off for so long is now beginning to set in.</p><p>Liverpool found out four years ago how unrelenting the pressure is when they were left to rue winning only 13 of their final 18 games. Arsenal have won nine next games.</p>',
            image: 'https://res.cloudinary.com/dsda5p1om/image/upload/v1681732682/fnst1ek77qnx1wuqrzjd.png',
            status: 'published',
            publicationDate: '2023-04-17T21:00:00.000Z',
            views: 0,
            likes: [],
            labels: [
              'Premier League',
              'Arsenal'
            ],
            createdAt: '2023-04-17T11:58:16.610Z',
            updatedAt: '2023-05-01T17:24:54.366Z',
            preview: 'Eight points shrunk to six at Anfield. Now six have withered to four at the London Stadium on Sunday after Arsenal let a 2-0 lead slip for the second successive game.',
            isMain: false,
            comments: []
          },
          {
            author: {
              name: 'John Doe',
              photoUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/surprised-cat-eric-hacke.jpg',
              organization: 'The Athletic',
              position: 'Website Administrator',
              userId: '63e8db447a8501b5b2a8428b'
            },
            _id: '643d3a542eb4f24a86c6c449',
            type: 'note',
            title: 'Mbappe and Messi – the only fans to ever see them together can’t find happiness',
            content: '<p>Jean-Marc Pilorget knows the value of a Ligue 1 title.</p><p>The former Paris Saint-Germain defender was a guest of honour at the Parc des Princes on Saturday night, ahead of&nbsp;<a href="https://theathletic.com/football/team/paris-saint-germain/" rel="noopener noreferrer" target="_blank">PSG</a>’s top-of-the-table showdown with RC Lens. He is the club’s record appearance holder, having featured in 435 matches between 1975 and 1989. Now 65, he was presented to the crowd before the game and was then pictured alongside modern-day heroes&nbsp;<a href="https://theathletic.com/football/player/marquinhos-vs0anBCNtamN4gfa/" rel="noopener noreferrer" target="_blank">Marquinhos</a>&nbsp;and Marco Verratti; two players who are closing in on his record with 401 and 409 appearances respectively.</p><p>Before the main event got under way, Pilorget was invited to make the ceremonial kick-off. As he walked onto the pitch, he was greeted by&nbsp;<a href="https://theathletic.com/football/player/lionel-messi-HlEFpLdbHt68CnvJ/" rel="noopener noreferrer" target="_blank">Lionel Messi</a>&nbsp;and&nbsp;<a href="https://theathletic.com/football/player/kylian-mbappe-vqEQPtKAKLluodtc/" rel="noopener noreferrer" target="_blank">Kylian Mbappe</a>. He shook their hands in the centre circle, exchanging a few words. For supporters of a certain generation, that moment should resonate, not least in the context of what Messi and Mbappe helped accomplish as the night went on. They all but secured a record 11th league title thanks to their talent, defined by a third goal, in a 3-1 win, of the highest quality.</p><blockquote>He does more than just score goals though, as he set up Lionel Messi with a sumptuous back heel as&nbsp;<a href="https://twitter.com/hashtag/PSG?src=hash&amp;ref_src=twsrc%5Etfw" rel="noopener noreferrer" target="_blank">#PSG</a>&nbsp;moved into a 3-0 lead before half-time.</blockquote><blockquote>🎥&nbsp;<a href="https://twitter.com/btsportfootball?ref_src=twsrc%5Etfw" rel="noopener noreferrer" target="_blank">@btsportfootball</a><a href="https://t.co/iZJv4dftbJ" rel="noopener noreferrer" target="_blank">pic.twitter.com/iZJv4dftbJ</a></blockquote><blockquote>— The Athletic | Football (@TheAthleticFC)&nbsp;<a href="https://twitter.com/TheAthleticFC/status/1647337496487895042?ref_src=twsrc%5Etfw" rel="noopener noreferrer" target="_blank">April 15, 2023</a></blockquote><p>Pilorget was a bridge to the past, on a night that may only be given its complete reverence in the fullness of time. While Mbappe, Messi and PSG saunter to another championship success, Pilorget had to wait 11 years before finally securing the club’s first league title, in 1986.</p>',
            image: 'https://res.cloudinary.com/dsda5p1om/image/upload/v1681734214/rliukxyh03scbdwjcxum.jpg',
            status: 'published',
            publicationDate: '2023-04-17T21:00:00.000Z',
            views: 0,
            likes: [],
            labels: [
              'League 1',
              'PSG'
            ],
            createdAt: '2023-04-17T12:23:48.737Z',
            updatedAt: '2023-04-17T12:23:48.737Z',
            preview: 'Jean-Marc Pilorget knows the value of a Ligue 1 title. The former Paris Saint-Germain defender was a guest of honour at the Parc des Princes on Saturday night, ahead of PSG’s top-of-the-table showdown with RC Lens.',
            comments: []
          },
        ],
        createdAt: '2023-04-19T14:46:33.350Z',
      }
    ],
    materialsToContent: [],
    isContentEditingModeActive: false,
    error: null
};