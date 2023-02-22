import React, { useState } from 'react';
import { Box, Button, Container, Divider, Drawer, Grid, List, ListItem, styled, Typography } from '@mui/material';
import { CompetitionModel } from '../../models/components';
import { v4 as uuid } from 'uuid';
import { NavLink } from 'react-router-dom';
import { setUrl } from '../../utils/helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


interface IMainMenuProps {
  links: CompetitionModel[],
}

const Wrapper = styled(Box)`
  
`;

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

const CommonListItem = styled(ListItem)`

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
    <Wrapper>
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
        <NavSection onMouseLeave={handleMenuClose}>
          <Container maxWidth='xl'>
            <Grid container spacing={2}>
              <Grid item sm={12} md={8}>
                <CompetitionLinks>
                  {links.map(link => (
                    <CompetitionListItem key={uuid()}>
                      <CompetitionLink to={setUrl(link.fullName)}>
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
                  <CommonListItem>
                    <CommonLink to='/login'>Log In</CommonLink>
                  </CommonListItem>
                  <CommonListItem>
                    <CommonLink to='/subscribe'>Subscribe Now</CommonLink>
                  </CommonListItem>
                </CommonLinks>
                <Divider />
                <CommonLinks>
                  <CommonListItem>
                    <CommonLink to='/search'>Search</CommonLink>
                  </CommonListItem>
                  <CommonListItem>
                    <CommonLink to='/news'>Top News</CommonLink>
                  </CommonListItem>
                  <CommonListItem>
                    <CommonLink to='/podcasts'>Podcasts</CommonLink>
                  </CommonListItem>
                  <CommonListItem>
                    <CommonLink to='/real-time'>Real Time</CommonLink>
                  </CommonListItem>
                </CommonLinks>
              </Grid>
            </Grid>
          </Container>
        </NavSection>
      </Drawer>
    </Wrapper>
  );
};

export default BtnMenu;