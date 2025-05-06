import React, { useEffect, useState } from 'react';
import * as S from './TeamPage.styles';
import { useCurrentTeam } from '../../hooks/useCurrentTeam';
import { getTeamMembers } from '../../apis/teamMember/teamMember';
import AvatarGroup from '../../components/AvatarGroup/AvatarGroup';
import type { AvatarMember } from '../../components/AvatarGroup/AvatarGroup.types';
import IconButton from '../../components/IconButton/IconButton';
import LabelIcon from '../../assets/icon/LabelIcon.svg';
import PlusIcon from '../../assets/icon/white_plus.svg';
import ManageTeamModal from '../../components/ManageTeamModal/ManageTeamModal';
import type { teamMemberInfo } from '../../apis/teamMember/teamMember.types';

const TeamPage = () => {
  const currentTeam = useCurrentTeam();
  const [isOpenTeamModal, setIsOpenTeamModal] = useState<boolean>(false);
  const [avatarMembers, setAvatarMembers] = useState<AvatarMember[]>([]);
  const [teamMemberInfoList, setTeamMemberInfoList] = useState<
    teamMemberInfo[]
  >([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      if (currentTeam?.id) {
        const response = await getTeamMembers(currentTeam.id).execute();
        const memberInfoList: teamMemberInfo[] = response.data;

        const mappedAvatars: AvatarMember[] = memberInfoList.map((member) => ({
          name: member.nickname,
          position: member.position,
        }));

        setTeamMemberInfoList(memberInfoList);
        setAvatarMembers(mappedAvatars);
      }
    };
    fetchTeamMembers();
  }, [currentTeam?.id]);

  const handleTeamModal = () => {
    setIsOpenTeamModal(!isOpenTeamModal);
  };

  return (
    <>
      {isOpenTeamModal && (
        <ManageTeamModal
          onClose={() => setIsOpenTeamModal(false)}
          teamMembers={teamMemberInfoList}
        />
      )}
      <S.TeamPageContainer>
        <S.TeamPageHeader>
          <S.TeamPageHeaderTeamName>
            {currentTeam?.name}
          </S.TeamPageHeaderTeamName>
          <S.TeamPageHeaderWrapper>
            <S.TeamPageHeaderButtonText>
              팀의 일정과 작업을 관리하세요
            </S.TeamPageHeaderButtonText>
            <S.TeamPageHeaderButtonWrapper>
              <AvatarGroup members={avatarMembers} />
              <IconButton buttonType="secondary">
                <img src={LabelIcon} alt="Label" />
                라벨 관리
              </IconButton>
              <IconButton buttonType="tertiary" onClick={handleTeamModal}>
                <img src={PlusIcon} alt="TeamMember" />
                팀원 관리
              </IconButton>
            </S.TeamPageHeaderButtonWrapper>
          </S.TeamPageHeaderWrapper>
        </S.TeamPageHeader>
      </S.TeamPageContainer>
    </>
  );
};

export default TeamPage;
