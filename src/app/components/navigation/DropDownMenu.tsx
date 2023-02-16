import React from 'react';
import sc from 'styled-components';
import { Box, Container, Divider, styled, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { CompetitionModel } from '../../models/components';
import { setUrl } from '../../utils/helpers';


interface IDropDownMenuProps {
  links: CompetitionModel[],
  currentLink: string,
  onClose: () => void,
}

const DropDownMenuWrapper = styled(Box)`
  position: absolute;
  top: 7vh;
  left: 0;
  width: 100%;
  background: #ffffff;
`;

const DropDownTopLinks = sc.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

const DropDownTopListItem = sc.li`
  margin: 0 30px 20px 0;
`;

const DropDownTopLink = styled(NavLink)`
  font-size: 1.2em;
  font-weight: 700;
  text-decoration: none;
  color: #333333;
`;

const DropDownBottomLinks = sc.ul`
  height: 24vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  list-style: none;
`;
const DropDownBottomListItem = sc.li`
  margin-bottom: 20px;
  width: 20%;
`;
const DropDownBottomLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333333;
`;
const ClubLogo = sc.img`
  height: 2em;
  margin-right: 10px;
`;

const DropDownMenu: React.FC<IDropDownMenuProps> = ({ links, currentLink, onClose }) => {
  return (
    <DropDownMenuWrapper onMouseLeave={onClose}>
        <Container>
          <DropDownTopLinks>
            <DropDownTopListItem>
              <DropDownTopLink to={setUrl(currentLink)}>
                <Typography variant='inherit'>Home</Typography>
              </DropDownTopLink>
            </DropDownTopListItem>
            <DropDownTopListItem>
              <DropDownTopLink to={`${setUrl(currentLink)}/schedule/`}>
                Scores & Schedule
              </DropDownTopLink>
            </DropDownTopListItem>
            <DropDownTopListItem>
              <DropDownTopLink to={`${setUrl(currentLink)}/standings/`}>
                Standings
              </DropDownTopLink>
            </DropDownTopListItem>
            <DropDownTopListItem>
              <DropDownTopLink to={`${setUrl(currentLink)}/news/`}>
                News
              </DropDownTopLink>
            </DropDownTopListItem>
          </DropDownTopLinks>
          <Divider />
          <DropDownBottomLinks>
            {links.find(link => link.fullName === currentLink)?.clubs.map(club => (
              <DropDownBottomListItem key={uuid()}>
                <DropDownBottomLink 
                  to={`${setUrl(currentLink)}/${setUrl(club.commonName)}`}
                >
                  <ClubLogo src={club.clubLogoUrl} alt={club.commonName} />
                  <Typography variant='inherit'>
                    {club.commonName}
                  </Typography>
                </DropDownBottomLink>
              </DropDownBottomListItem>
            ))}
          </DropDownBottomLinks>
        </Container>
      </DropDownMenuWrapper>
  );
};

export default DropDownMenu;