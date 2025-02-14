import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  Accordion, AccordionDetails, AccordionSummary, Box, Button, 
  Divider, Drawer, List, ListItem, styled, Typography 
} from '@mui/material';
import { faAngleDown, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuid } from 'uuid';
import { ICompetition } from '../../../features/competitions/types';


interface IBtnMenuMobileProps {
  links: ICompetition[];
}

const NavbarButton = styled(Button)`
  margin: 0;
  padding: 0;
  min-width: 20px;
  svg {
    font-size: 1.5em;
    color: #ffffff;
  }
`;

const CompetitionLinks = styled(List)`
  padding: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  list-style: none;
`;

const CompetitionListItem = styled(ListItem)`
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CommonLinks = styled(List)`
  list-style: none;
  font-size: .9em;
`;

const CommonListItem = styled(ListItem)`
  width: 100%;
`;

const DetailsLink = styled(NavLink)`
  text-decoration: none;
  color: #ffffff;
`;

const MenuAccordion = styled(Accordion)`
  width: 100%;
  font-size: .9em;
  color: #c4c4bc;
  box-shadow: none;
`;

const MenuAccordionSummary = styled(AccordionSummary)`
  width: 100%;
  color: #c4c4bc;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const MenuAccordionDetails = styled(AccordionDetails)`
  background: #000000;
`;

const CommonLink = styled(NavLink)`
  text-decoration: none;
  color: #c4c4bc;
`;

const BottomLine = styled(Divider)`
  width: 100%;
  background: #000000;
`;

const ListDivider = styled(Divider)`
  width: 100%;
  background  : #c4c4bc;
`;


const BtnMenuMobile: React.FC<IBtnMenuMobileProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box>
      <NavbarButton onClick={handleMenuOpen}>
        <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
      </NavbarButton>
      <Drawer
        anchor='top'
        open={isOpen}
        PaperProps={{
          style: {
            position: 'relative',
            minHeight: '93vh',
            background: '#222121'
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
        onClose={handleMenuOpen}
      >
        <CommonLinks>
          <CommonListItem>
            <CommonLink to='/login'>Log In</CommonLink>
          </CommonListItem>
          <CommonListItem>
            <CommonLink to='/subscribe'>Subscribe Now</CommonLink>
          </CommonListItem>
        </CommonLinks>
        <BottomLine />
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
        <BottomLine />
        <CompetitionLinks>
          {
            links.map((link, i) => (
              <CompetitionListItem key={uuid()}>
                <MenuAccordion 
                  sx={{ background: '#222121' }}
                  disableGutters={true}
                  square={false}
                >
                  <MenuAccordionSummary>
                    <Typography variant='inherit'>{link.fullName}</Typography>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </MenuAccordionSummary>
                  <MenuAccordionDetails>
                    <List>
                      <ListItem>
                        <DetailsLink to={`competitions/${link._id}`} onClick={handleMenuOpen}>
                          Home
                        </DetailsLink>
                      </ListItem>
                      <ListItem>
                        <DetailsLink to={`competitions/${link._id}/scores-and-schedules`} onClick={handleMenuOpen}>
                          Scores & Schedule
                        </DetailsLink>
                      </ListItem>
                      <ListItem>
                        <DetailsLink to={`competitions/${link._id}/standings`} onClick={handleMenuOpen}>
                          Standings
                        </DetailsLink>
                      </ListItem>
                      <ListItem>
                        <DetailsLink to={`competitions/${link._id}/news`} onClick={handleMenuOpen}>
                          News
                        </DetailsLink>
                      </ListItem>
                    </List>
                    {link.clubs.length > 0 && <ListDivider />}
                    <List>
                      {link.clubs.map(club => (
                        <ListItem key={uuid()}>
                          <DetailsLink to={`clubs/${club._id}`} onClick={handleMenuOpen}>
                            {club.commonName}
                          </DetailsLink>
                        </ListItem>
                      ))}
                    </List>
                  </MenuAccordionDetails>
                </MenuAccordion>
                {
                  i < (links.length - 1) && <BottomLine />
                }
              </CompetitionListItem>
            ))
          }
        </CompetitionLinks>
      </Drawer>
    </Box>
  );
};

export default BtnMenuMobile;