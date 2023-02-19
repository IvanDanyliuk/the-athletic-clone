import React, { useState } from 'react';
import { Box, Button, Container, Divider, List, ListItem, styled, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { CompetitionModel } from '../../models/components';
import { setUrl } from '../../utils/helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';


interface INavPanelProps {
  links: CompetitionModel[]
}

const NavPanelContainer = styled(Box)`
  
`;

const NavList = styled(List)`
  display: flex;
  list-style: none;
`;

const NavListItem = styled(ListItem)`
  width: fit-content;
  display: flex;
  align-items: center;
`;

const MenuLink = styled(NavLink)`
  font-size: 1.1em;
  text-decoration: none;
  color: #ffffff;
`;

const DropDownMenu = styled(Box)`
  display: flex;
  align-items: center;
  
`;

const Wrapper = styled(Box)`
  position: absolute;
  top: 7vh;
  left: 0;
  width: 100%;
  background: #ffffff;
`;

const TopLinks = styled(List)`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

const TopListItem = styled(ListItem)`
  width: fit-content;
`;

const TopLink = styled(NavLink)`
  font-size: 1.2em;
  font-weight: 700;
  text-decoration: none;
  color: #333333;
`;

const BottomLinks = styled(List)`
  height: 24vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  list-style: none;
`;

const BottomListItem = styled(ListItem)`
  margin-bottom: 20px;
  width: 20%;
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

const OtherLinksButton = styled(Button)`
  font-size: 1.2em;
  color: #ffffff;
`;


const NavPanel: React.FC<INavPanelProps> = ({ links }) => {
  const [activeLink, setActiveLink] = useState<CompetitionModel | null>(null);
  const [otherLinks, setOtherLinks] = useState<CompetitionModel[] | null>(null);

  const handleActiveLink = (e: any) => {
    setOtherLinks(null);
    setActiveLink(links.find(link => link.fullName === e.target.innerText)!)
  };

  const clearActiveLink = () => {
    setActiveLink(null);
  };

  const handleOtherLinks = () => {
    setActiveLink(null);
    if(links.length > 6) {
      setOtherLinks(links.slice(6));
    }
  };

  const clearOtherLinks = () => {
    setOtherLinks(null);
  };

  return (
    <NavPanelContainer>
      <NavList>
        {links.slice(0, 6).map(link => (
          <NavListItem key={uuid()}>
            <MenuLink 
              to={setUrl(link.fullName)}
              onMouseEnter={handleActiveLink}
            >{link.fullName}</MenuLink>
          </NavListItem>
        ))}
        <NavListItem key={uuid()}>
          <OtherLinksButton 
            onMouseEnter={handleOtherLinks}
          >
            <FontAwesomeIcon icon={faEllipsis} />
          </OtherLinksButton>
        </NavListItem>
      </NavList>
      {activeLink && (
        <DropDownMenu onMouseLeave={clearActiveLink}>
          <Wrapper>
            <Container>
              <TopLinks>
                <TopListItem>
                  <TopLink to={setUrl(activeLink?.fullName!)}>
                    <Typography variant='inherit'>Home</Typography>
                  </TopLink>
                </TopListItem>
                <TopListItem>
                  <TopLink to={`${setUrl(activeLink?.fullName!)}/schedule/`}>
                    Scores & Schedule
                  </TopLink>
                </TopListItem>
                <TopListItem>
                  <TopLink to={`${setUrl(activeLink?.fullName!)}/standings/`}>
                    Standings
                  </TopLink>
                </TopListItem>
                <TopListItem>
                  <TopLink to={`${setUrl(activeLink?.fullName!)}/news/`}>
                    News
                  </TopLink>
                </TopListItem>
              </TopLinks>
              <Divider />
              <BottomLinks>
                {activeLink!.clubs.map(club => (
                  <BottomListItem key={uuid()}>
                    <BottomLink 
                      to={`${setUrl(activeLink?.fullName!)}/${setUrl(club.commonName)}`}
                    >
                      <img src={club.clubLogoUrl} alt={club.commonName} />
                      <Typography variant='inherit'>
                        {club.commonName}
                      </Typography>
                    </BottomLink>
                  </BottomListItem>
                ))}
              </BottomLinks>
            </Container>
          </Wrapper>
        </DropDownMenu>
      )}
      {otherLinks && (
        <DropDownMenu onMouseLeave={clearOtherLinks}>
          <Wrapper>
          <Container>
            <BottomLinks>
              {otherLinks.map(link => (
                <BottomListItem key={uuid()}>
                  <BottomLink 
                    to={setUrl(link.fullName)}
                  >
                    <img src={link.logoUrl} alt={link.fullName} />
                    <Typography variant='inherit'>
                      {link.fullName}
                    </Typography>
                  </BottomLink>
                </BottomListItem>
              ))}
            </BottomLinks>
          </Container>
          </Wrapper>
        </DropDownMenu>
      )}
    </NavPanelContainer>
  );
};

export default NavPanel;