import React, { useEffect, useState } from 'react';
import * as S from './TeamPage.styles';
import { useCurrentTeam } from '../../hooks/useCurrentTeam';
import { getTeamMembers } from '../../apis/teamMember/teamMember';
import AvatarGroup from '../../components/AvatarGroup/AvatarGroup';
import type { AvatarMember } from '../../components/AvatarGroup/AvatarGroup.types';
import IconButton from '../../components/IconButton/IconButton';
import LabelIcon from '../../assets/icon/LabelIcon.svg';
import PlusIcon from '../../assets/icon/white_plus.svg';

const TeamPage = () => {
  const currentTeam = useCurrentTeam();
  const [teamMembers, setTeamMembers] = useState<AvatarMember[]>([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      if (currentTeam?.id) {
        const response = await getTeamMembers(currentTeam.id).execute();
        const mappedMembers: AvatarMember[] = response.data.map((member) => ({
          name: member.nickname,
          position: member.position,
        }));
        setTeamMembers(mappedMembers);
      }
    };
    fetchTeamMembers();
  }, [currentTeam?.id]);

  console.log(teamMembers);

  return (
    <S.TeamPageContainer>
      <S.TeamPageHeader>
        <S.TeamPageHeaderTeamName>{currentTeam?.name}</S.TeamPageHeaderTeamName>
        <S.TeamPageHeaderWrapper>
          <S.TeamPageHeaderButtonText>
            팀의 일정과 작업을 관리하세요
          </S.TeamPageHeaderButtonText>
          <S.TeamPageHeaderButtonWrapper>
            <AvatarGroup members={teamMembers} />
            <IconButton buttonType="secondary">
              <img src={LabelIcon} alt="Label" />
              라벨 관리
            </IconButton>
            <IconButton buttonType="tertiary">
              <img src={PlusIcon} alt="TeamMember" />
              팀원 관리
            </IconButton>
          </S.TeamPageHeaderButtonWrapper>
        </S.TeamPageHeaderWrapper>
      </S.TeamPageHeader>
    </S.TeamPageContainer>
  );
};

export default TeamPage;
