import React from 'react';
import { Box, Container, styled, Typography } from '@mui/material';
import sc from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { v4 as uuid } from 'uuid';
import { competitions } from '../../../data';
import { setUrl } from '../../utils/helpers';



const Wrapper = sc.footer`
  width: 100%;
  background: #181818;
  color: #7b7b7b;
`;

const Content = styled(Container)`
  padding: 2em 0;
`;

const TopSection = styled(Box)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  div:nth-child(1) {
    width: 50%;
  }
  div ul {
    height: 20vh;
    flex-direction: column;
    li {
      margin: 0 4em 1em 0;
    }
  }
`;

const BottomSection = styled(Box)`
  display: flex;
  align-items: center;
`;

const LinkGroup = styled(Box)`
  
`;

const LinkGroupTitle = styled(Typography)`
  font-size: 1.2em;
  font-weight: 500;
`;

const Logo = styled(Typography)`
  font-family: 'Arvo';
  font-size: 2em;
  font-weight: 700;
`;

const Copyright = styled(Typography)`
  margin-right: 30px;
`;

const LinkList = sc.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

const LinkListItem = sc.li`
  margin-right: 30px;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: #7b7b7b;
  &:hover {
    color: #ffffff;
  }
  svg  {
    font-size: 2em;
  }
`;

const Footer: React.FC = () => {
  const links = competitions;

  return (
    <Wrapper>
      <Content maxWidth={'xl'}>
        <TopSection>
          <LinkGroup>
            <LinkGroupTitle variant='inherit'>Competitions</LinkGroupTitle>
            <LinkList>
              {links.map(link => (
                <LinkListItem key={uuid()}>
                  <Link to={setUrl(link.fullName)}>
                    {link.fullName}
                  </Link>
                </LinkListItem>
              ))}
            </LinkList>
          </LinkGroup>
          <LinkGroup>
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
          <LinkGroup>
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
          <LinkGroup>
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
        </TopSection>
        <Logo variant='inherit'>The Athletic</Logo>
        <BottomSection>
          <Copyright>2023. The Athletic Media Company. All rights reserved</Copyright>
          <LinkList>
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
          </LinkList>
          <LinkList>
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
          </LinkList>
        </BottomSection>
      </Content>
    </Wrapper>
  );
};

export default Footer;