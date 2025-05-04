import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Sidebar.styles';

import SidebarLogo from '../../assets/logo_black_column.svg';
import plus from '../../assets/icon/white_plus.svg';

import { useApiQuery } from '../../apis/config/builder/ApiBuilder';
import { getTeamList } from '../../apis/team/team';
import Button from '../Button/Button';
import IconButton from '../IconButton/IconButton';

const Sidebar = () => {
  const naviate = useNavigate();
  const { data } = useApiQuery(getTeamList(), 'teams');
  const [selectedTeamId, setSelectedTeamId] = useState<number | null>(null);

  const navigateTo = (route: string) => {
    naviate(route);
  };

  const handleTeamClick = (teamId: number) => {
    setSelectedTeamId(teamId);
    navigateTo(`/team/${teamId}`);
  };

  console.log(selectedTeamId);

  return (
    <S.SidebarContainer>
      <S.SidebarLogo src={SidebarLogo} alt="Sidebar-Logo" />
      <S.SidebarHorizonBar />
      <S.SidebarTeamListTitle>팀목록</S.SidebarTeamListTitle>
      <S.SidebarTeamList>
        {data?.map((team) => (
          <S.SidebarTeam
            key={team.id}
            isSelected={team.id === selectedTeamId}
            onClick={() => handleTeamClick(team.id)}
          >
            {team.name}
          </S.SidebarTeam>
        ))}
      </S.SidebarTeamList>
      <S.SidebarButtonSection>
        <IconButton buttonType="primary">
          <img src={plus} alt="plus" />팀 생성하기
        </IconButton>
        <Button buttonType="secondary" onClick={() => navigateTo('/portfolio')}>
          포트폴리오
        </Button>
      </S.SidebarButtonSection>
    </S.SidebarContainer>
  );
};

export default Sidebar;
