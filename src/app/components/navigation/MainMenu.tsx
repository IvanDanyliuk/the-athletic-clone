import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Container, Divider, Grid, List, ListItem, styled, Typography } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { CompetitionModel } from '../../models/components';
import { setUrl } from '../../utils/helpers';



interface IMainMenuProps {
  links: CompetitionModel[],
  isMobile: boolean,
  onClose: () => void
}



const MenuWrapper = styled(Box)`
  position: absolute;
  top: 7vh;
  left: 0;
  width: 100%;
  background: #ffffff;
`;

const MenuContainer = styled(Container)`
  background: #ffffff;  
`;

const NavSection = styled(Grid)`
  margin: 0;
`;

const CompetitionLinks = styled(List)`
  position: relative;
  height: 24vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  list-style: none;

  @media (max-width: 640px) {
    height: auto;
  }
`;

const CompetitionListItem = styled(ListItem)`
  margin-bottom: 20px;
  width: fit-content;

  @media (max-width: 640px) {
    width: 100%;
  }
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


const MainMenu: React.FC<IMainMenuProps> = ({ links, isMobile, onClose }) => {
  
  return (
    <MenuWrapper onMouseLeave={onClose}>
      <MenuContainer maxWidth='xl'>
        <NavSection container spacing={2}>
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
        </NavSection>
      </MenuContainer>
    </MenuWrapper>
  );
};

export default MainMenu;