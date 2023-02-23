import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Container, Grid, List, ListItem, styled, Typography, useMediaQuery } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { v4 as uuid } from 'uuid';
import { setUrl } from '../../utils/helpers';
import { competitions } from '../../../data';



const Wrapper = styled(Box)`
  width: 100%;
  background: #181818;
  color: #7b7b7b;
`;

const Content = styled(Container)`
  padding: 2em;
`;

const LinkGroup = styled(Grid)`
  position: relative;
`;

const LinkGroupTitle = styled(Typography)`
  font-size: 1.2em;
  font-weight: 500;
`;

const LinkList = styled(List)`
  width: 100%;
  max-height: 25vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media(max-width: 640px) {
    max-height: fit-content;
  }
`;

const BottomLinkList = styled(List)`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const LinkListItem = styled(ListItem)`
  padding: .5em 0;
  width: fit-content;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: #7b7b7b;
  z-index: 0;
  &:hover {
    color: #ffffff;
  }
  svg  {
    font-size: 2em;
  }
`;

const Logo = styled(Typography)`
  margin: 1em 0;
  font-family: 'Arvo';
  font-size: 2em;
  font-weight: 700;
`;

const Copyright = styled(Typography)`
  
`;


const Footer: React.FC = () => {
  const links = competitions;

  const isMobile = useMediaQuery('(max-width: 640px)'); 

  return (
    <Wrapper component='footer'>
      <Content maxWidth={'xl'}>
        <Grid container spacing={3}>
          <LinkGroup item sm={12} md={6}>
            <LinkGroupTitle>Competitions</LinkGroupTitle>
            <LinkList>
              {links.map(link=> (
                <LinkListItem key={uuid()}>
                  <Link to={setUrl(link.fullName)}>{link.fullName}</Link>
                </LinkListItem>
              ))}
            </LinkList>
          </LinkGroup>
          <LinkGroup item sm={12} md={2}>
            <LinkGroupTitle variant='inherit'>Subscribe</LinkGroupTitle>
            <LinkList>
              <LinkListItem>
                <Link to={'/subscription'}>Start Subscription</Link>
              </LinkListItem>
              <LinkListItem>
                <Link to={'/store'}>Buy a Gift</Link>
              </LinkListItem>
              <LinkListItem>
                <Link to={'/for-students'}>Student Discount</Link>
              </LinkListItem>
              <LinkListItem>
                <Link to={'/newsletter/pulse'}>Newsletter: The Pulse</Link>
              </LinkListItem>
              <LinkListItem>
                <Link to={'/newsletter/bounce'}>Newsletter: The Bounce</Link>
              </LinkListItem>
            </LinkList>
          </LinkGroup>
          <LinkGroup item sm={12} md={2}>
          <LinkGroupTitle variant='inherit'>HQ</LinkGroupTitle>
            <LinkList>
              <LinkListItem>
                <Link to={'/about'}>About Us</Link>
              </LinkListItem>
              <LinkListItem>
                <Link to={'/careers'}>Careers</Link>
              </LinkListItem>
              <LinkListItem>
                <Link to={'/code-of-conduct'}>Code of Conduct</Link>
              </LinkListItem>
              <LinkListItem>
                <Link to={'/guidlines'}>Editorial Guidlines</Link>
              </LinkListItem>
              <LinkListItem>
                <Link to={'/for-business'}>Business Enquiries</Link>
              </LinkListItem>
              <LinkListItem>
                <Link to={'/for-press'}>Press Enquiries</Link>
              </LinkListItem>
            </LinkList>
          </LinkGroup>
          <LinkGroup item sm={12} md={2}>
            <LinkGroupTitle variant='inherit'>Support</LinkGroupTitle>
            <LinkList>
              <LinkListItem>
                <Link to={'/faq'}>FAQ</Link>
              </LinkListItem>
              <LinkListItem>
                <Link to={'/profile'}>Forgot Password?</Link>
              </LinkListItem>
              <LinkListItem>
                <Link to={'/redeem-gift'}>Redeem Gift</Link>
              </LinkListItem>
              <LinkListItem>
                <Link to={'/contact'}>Contact Us</Link>
              </LinkListItem>
            </LinkList>
          </LinkGroup>
        </Grid>
        <Logo>The Athletic</Logo>
        <Grid container spacing={isMobile ? 2 : 6}>
          <LinkGroup item sm={12} md={4}>
            <Copyright>2023. The Athletic Media Company. All rights reserved</Copyright>
          </LinkGroup>
          <LinkGroup item xs={12} sm={6} md={3}>
            <BottomLinkList>
              <LinkListItem>
                <Link to='policy-center'>Policy Center</Link>
              </LinkListItem>
              <LinkListItem>
                <Link to='support'>Support</Link>
              </LinkListItem>
              <LinkListItem>
                <Link to='rss'>RSS</Link>
              </LinkListItem>
              <LinkListItem>
                <Link to='sitemap'>Sitemap</Link>
              </LinkListItem>
            </BottomLinkList>
          </LinkGroup>
          <LinkGroup item xs={12} sm={6} md={2}>
            <BottomLinkList>
              <LinkListItem>
                <Link to='/' target='_blank'>
                  <FontAwesomeIcon icon={faSquareFacebook} />
                </Link>
              </LinkListItem>
              <LinkListItem>
                <Link to='/' target='_blank'>
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </LinkListItem>
              <LinkListItem>
                <Link to='/' target='_blank'>
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </LinkListItem>
            </BottomLinkList>
            </LinkGroup>
        </Grid>
      </Content>
    </Wrapper>
  );
};

export default Footer;