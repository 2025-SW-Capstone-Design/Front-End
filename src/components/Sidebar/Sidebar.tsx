import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './Sidebar.styles';

import SidebarLogo from '../../assets/logo_black_column.svg';
import plus from '../../assets/icon/white_plus.svg';

import { useApiQuery } from '../../apis/config/builder/ApiBuilder';
import { getTeamList } from '../../apis/team/team';
import Button from '../Button/Button';
import IconButton from '../IconButton/IconButton';
import CreateTeamModal from '../CreateTeamModal/CreateTeamModal';
import JoinTeamModal from '../JoinTeamModal/JoinTeamModal';

const Sidebar = () => {
  const naviate = useNavigate();
  const { teamId } = useParams();

  const { data } = useApiQuery(getTeamList(), 'teams');
  const [selectedTeamId, setSelectedTeamId] = useState<number | null>(null);
  const [isTeamModalOpen, setIsTeamModalOpen] = useState<boolean>(false);
  const [isTeamJoinModalOpen, setIsTeamJoinModalOpen] =
    useState<boolean>(false);

  useEffect(() => {
    if (teamId) {
      const numericTeamId = Number(teamId);
      if (!isNaN(numericTeamId)) {
        setSelectedTeamId(numericTeamId);
      }
    } else {
      setSelectedTeamId(null);
    }
  }, [teamId]);

  const navigateTo = (route: string) => {
    naviate(route);
  };

  const handleTeamClick = (teamId: number) => {
    setSelectedTeamId(teamId);
    navigateTo(`/team/${teamId}`);
  };

  const handleTeamModal = () => {
    setIsTeamModalOpen(!isTeamModalOpen);
  };

  const handleTeamJoinModal = () => {
    setIsTeamJoinModalOpen(!isTeamJoinModalOpen);
  };

  return (
    <>
      {isTeamModalOpen && <CreateTeamModal onClose={handleTeamModal} />}
      {isTeamJoinModalOpen && <JoinTeamModal onClose={handleTeamJoinModal} />}
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
          <IconButton buttonType="primary" onClick={handleTeamModal}>
            <img src={plus} alt="plus" />팀 생성하기
          </IconButton>
          <Button buttonType="tertiary" onClick={handleTeamJoinModal}>
            팀 참가하기
          </Button>
          <Button
            buttonType="secondary"
            onClick={() => navigateTo('/portfolio')}
          >
            포트폴리오
          </Button>
        </S.SidebarButtonSection>
      </S.SidebarContainer>
    </>
  );
};

export default Sidebar;
