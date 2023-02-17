import React, { useState } from 'react';
import sc from 'styled-components';
import { Box, Button, Container, Divider, styled, Typography } from '@mui/material';
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

const NavList = sc.ul`
  display: flex;
  list-style: none;
`;

const NavListItem = sc.li`
  margin-right: 20px;
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

const TopLinks = sc.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

const TopListItem = sc.li`
  margin: 0 30px 0 0;
`;

const TopLink = styled(NavLink)`
  font-size: 1.2em;
  font-weight: 700;
  text-decoration: none;
  color: #333333;
`;

const BottomLinks = sc.ul`
  height: 24vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  list-style: none;
`;

const BottomListItem = sc.li`
  margin-bottom: 20px;
  width: 20%;
`;

const BottomLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333333;
`;

const OtherLinksButton = styled(Button)`
  font-size: 1.2em;
  color: #ffffff;
`;

const Logo = sc.img`
  height: 2em;
  margin-right: 10px;
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
                      <Logo src={club.clubLogoUrl} alt={club.commonName} />
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
                    <Logo src={link.logoUrl} alt={link.fullName} />
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