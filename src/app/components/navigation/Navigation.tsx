import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Container, Divider, Drawer, List, ListItem, styled, Typography } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { ICompetition } from '../../../features/competitions/types';


interface INavigationProps {
  links: ICompetition[]
}


const NavLinkList = styled(List)`
  display: flex;
  list-style: none;
  z-index: 1000;
`;

const NavLinkListItem = styled(ListItem)`
  width: max-content;
  display: flex;
  align-items: center;
`;

const Link = styled(NavLink)`
  font-size: 1.1em;
  text-decoration: none;
  color: #ffffff;
`;

const TopLinkList = styled(List)`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

const BottomLinkList = styled(List)`
  position: relative;
  width: 100%;
  height: 24vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  list-style: none;
`;

const TopLinkListItem = styled(ListItem)`
  width: fit-content;
`;

const BottomLinkListItem = styled(ListItem)`
  width: fit-content;
`;

const TopLink = styled(NavLink)`
  font-size: 1.2em;
  font-weight: 700;
  text-decoration: none;
  color: #333333;
`;

const BottomLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333333;

  img {
    height: 2em;
    margin-right: 10px;
  }
`;


const Navigation: React.FC<INavigationProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<ICompetition | null>(null);

  const handleMenuOpen = (value: string) => {
    setIsOpen(true);
    const linkToRender = links.find(link => link.fullName === value);
    if(linkToRender) setActiveLink(linkToRender);
  };

  const handleMenuClose = () => {
    setIsOpen(false);
    setActiveLink(null);
  };

  return (
    <Box component='nav'>
      <NavLinkList>
        {links.slice(0, 6).map(link => (
          <NavLinkListItem key={uuid()}>
            <Link 
              to={`competitions/${link._id}/home`} 
              onMouseEnter={() => handleMenuOpen(link.fullName)}
            >
              {link.fullName}
            </Link>
          </NavLinkListItem>
        ))}
        
      </NavLinkList>
      <Drawer
        anchor='top'
        open={isOpen}
        PaperProps={{
          style: {
            position: 'relative',
          }
        }}
        ModalProps={{
          style: {
            position: 'absolute',
            top: '7vh'
          }
        }}
        hideBackdrop={true}
        transitionDuration={0}
        onClose={handleMenuClose}
      >
        <Box onMouseLeave={handleMenuClose}>
          {activeLink && (
            <Container maxWidth='xl'>
              <TopLinkList>
                <TopLinkListItem>
                  <TopLink to={`competitions/${activeLink._id}`}>
                    Home
                  </TopLink>
                </TopLinkListItem>
                <TopLinkListItem>
                  <TopLink to={`competitions/${activeLink._id}/scores-and-schedules`}>
                    Scores & Schedule
                  </TopLink>
                </TopLinkListItem>
                <TopLinkListItem>
                  <TopLink to={`competitions/${activeLink._id}/standings`}>
                    Standings
                  </TopLink>
                </TopLinkListItem>
                <TopLinkListItem>
                  <TopLink to={`competitions/${activeLink._id}/news`}>
                    News
                  </TopLink>
                </TopLinkListItem>
              </TopLinkList>
              <Divider />
              <BottomLinkList>
                {activeLink.clubs.map(club => (
                  <BottomLinkListItem key={uuid()}>
                    <BottomLink to={`clubs/${club._id}`}>
                      <img src={club.clubLogoUrl} alt={club.commonName} />
                      <Typography variant='inherit'>
                        {club.commonName}
                      </Typography>
                    </BottomLink>
                  </BottomLinkListItem>
                ))}
              </BottomLinkList>
            </Container>
          )}
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navigation;