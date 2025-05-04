import React, { useState } from 'react';
import * as S from './Sidebar.styles';

import SidebarLogo from '../../assets/logo_black_column.svg';
import plus from '../../assets/icon/white_plus.svg';

import { useApiQuery } from '../../apis/config/builder/ApiBuilder';
import { getTeamList } from '../../apis/team/team';
import Button from '../Button/Button';
import IconButton from '../IconButton/IconButton';

const Sidebar = () => {
  const { data } = useApiQuery(getTeamList(), 'teams');
  const [selectedTeamId, setSelectedTeamId] = useState<number | null>(null);

  const handleTeamClick = (teamId: number) => {
    setSelectedTeamId(teamId);
  };

  return (
    <S.SidebarContainer>
      <S.SidebarLogo src={SidebarLogo} alt="Sidebar-Logo" />
      <S.SidebarHorizonBar />
      <S.SidebarTeamListTitle>팀목록</S.SidebarTeamListTitle>
      <S.SidebarTeamList>
        {data?.map((team) => (
          <S.SidebarTeam
            key={team.teamId}
            isSelected={team.teamId === selectedTeamId}
            onClick={() => handleTeamClick(team.teamId)}
          >
            {team.name}
          </S.SidebarTeam>
        ))}
      </S.SidebarTeamList>
      <S.SidebarButtonSection>
        <IconButton buttonType="primary">
          <img src={plus} alt="plus" />팀 생성하기
        </IconButton>
        <Button buttonType="secondary">포트폴리오</Button>
      </S.SidebarButtonSection>
    </S.SidebarContainer>
  );
};

export default Sidebar;
