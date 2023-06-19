import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Button, Container, Divider, Drawer, Grid, List, ListItem, styled, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuid } from 'uuid';
import { ICompetition } from '../../../features/competitions/types';


interface IMainMenuProps {
  links: ICompetition[],
}

const NavbarButton = styled(Button)`
  width: auto;
  svg {
    font-size: 1.5em;
    color: #ffffff;
  }
`;

const NavSection = styled(Grid)`
  margin: 0;
  width: 100%;
`;

const CompetitionLinks = styled(List)`
  position: relative;
  max-height: 30vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  list-style: none;
`;

const CompetitionListItem = styled(ListItem)`
  margin-bottom: 20px;
  width: fit-content;
`;

const CompetitionLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333333;

  img {
    height: 2em;
    margin-right: 10px;
  }
`;

const CommonLinks = styled(List)`
  list-style: none;
`;

const CommonLink = styled(NavLink)`
  text-decoration: none;
  color: #333333;
`;


const BtnMenu: React.FC<IMainMenuProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenuOpen = () => {
    setIsOpen(true);
  };

  const handleMenuClose = () => {
    setIsOpen(false);
  };

  return (
    <Box>
      <NavbarButton onClick={handleMenuOpen}>
        <FontAwesomeIcon icon={faBars} />
      </NavbarButton>
      <Drawer
        anchor='top'
        open={isOpen}
        PaperProps={{
          style: {
            position: 'absolute',
            top: '7vh'
          }
        }}
        hideBackdrop={true}
        transitionDuration={0}
        onClose={handleMenuClose}
      >
        <NavSection data-testid='navSection' onMouseLeave={handleMenuClose}>
          <Container maxWidth='xl'>
            <Grid container spacing={2}>
              <Grid item sm={12} md={8}>
                <CompetitionLinks>
                  {links.map(link => (
                    <CompetitionListItem key={uuid()}>
                      <CompetitionLink to={`/competitions/${link._id}`}>
                        <img src={link.logoUrl} alt={link.fullName} />
                        <Typography variant='inherit'>
                          {link.fullName}
                        </Typography>
                      </CompetitionLink>
                    </CompetitionListItem>
                  ))}
                </CompetitionLinks>
              </Grid>
              <Grid item sm={12} md={4}>
                <CommonLinks>
                  <ListItem>
                    <CommonLink to='/login'>Log In</CommonLink>
                  </ListItem>
                  <ListItem>
                    <CommonLink to='/subscribe'>Subscribe Now</CommonLink>
                  </ListItem>
                </CommonLinks>
                <Divider />
                <CommonLinks>
                  <ListItem>
                    <CommonLink to='/search'>Search</CommonLink>
                  </ListItem>
                  <ListItem>
                    <CommonLink to='/news'>Top News</CommonLink>
                  </ListItem>
                  <ListItem>
                    <CommonLink to='/podcasts'>Podcasts</CommonLink>
                  </ListItem>
                  <ListItem>
                    <CommonLink to='/real-time'>Real Time</CommonLink>
                  </ListItem>
                </CommonLinks>
              </Grid>
            </Grid>
          </Container>
        </NavSection>
      </Drawer>
    </Box>
  );
};

export default BtnMenu;