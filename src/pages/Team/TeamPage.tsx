import React, { useEffect, useState } from 'react';
import * as S from './TeamPage.styles';
import { useCurrentTeam } from '../../hooks/useCurrentTeam';
import { getTeamMembers } from '../../apis/teamMember/teamMember';
import AvatarGroup from '../../components/AvatarGroup/AvatarGroup';
import type { AvatarMember } from '../../components/AvatarGroup/AvatarGroup.types';
import IconButton from '../../components/IconButton/IconButton';

import LabelIcon from '../../assets/icon/LabelIcon.svg';
import PlusIcon from '../../assets/icon/white_plus.svg';
import KanbanIcon from '../../assets/icon/KanbanIcon.svg';
import MeetingIcon from '../../assets/icon/MeetingIcon.svg';
import MeetingLogIcon from '../../assets/icon/MeetingLogIcon.svg';

import ManageTeamModal from '../../components/ManageTeamModal/ManageTeamModal';
import type { teamMemberInfo } from '../../apis/teamMember/teamMember.types';
import Menu from '../../components/Menu/Menu';
import TaskLabelModal from '../../components/TaskLabelModal/TaskLabelModal';
import GanttChart from '../../components/MilestoneGantt/GanttChart';
import { useApiQuery } from '../../apis/config/builder/ApiBuilder';
import {
  getDeadlineMilstone,
  getMilesotnes,
} from '../../apis/milestone/milestone';
import UpcomingTask from '../../components/UpcomingTask/UpcomingTask';

const TeamPage = () => {
  const currentTeam = useCurrentTeam();
  const [isOpenTeamModal, setIsOpenTeamModal] = useState<boolean>(false);
  const [isOpenTaskModal, setIsOpenTaskModal] = useState<boolean>(false);
  const [avatarMembers, setAvatarMembers] = useState<AvatarMember[]>([]);
  const [teamMemberInfoList, setTeamMemberInfoList] = useState<
    teamMemberInfo[]
  >([]);

  const { data: milestones } = useApiQuery(
    getMilesotnes(Number(currentTeam?.id)),
    ['milestones', currentTeam?.id],
  );

  const { data: deadlineMilestone } = useApiQuery(
    getDeadlineMilstone(Number(currentTeam?.id)),
    ['deadlineMilestones', currentTeam?.id],
  );

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

  useEffect(() => {
    fetchTeamMembers();
  }, [currentTeam?.id]);

  const handleTeamModal = () => {
    setIsOpenTeamModal(!isOpenTeamModal);
  };

  const handleTaskModal = () => {
    setIsOpenTaskModal(!isOpenTaskModal);
  };

  console.log(deadlineMilestone);

  return (
    <>
      {isOpenTeamModal && (
        <ManageTeamModal
          onClose={() => setIsOpenTeamModal(false)}
          teamMembers={teamMemberInfoList}
          refetchMembers={fetchTeamMembers}
        />
      )}
      {isOpenTaskModal && (
        <TaskLabelModal teamInfo={currentTeam} onClose={handleTaskModal} />
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
              <IconButton
                buttonType="secondary"
                width="154px"
                onClick={handleTaskModal}
              >
                <img src={LabelIcon} alt="Label" />
                라벨 관리
              </IconButton>
              <IconButton
                buttonType="tertiary"
                onClick={handleTeamModal}
                width="154px"
              >
                <img src={PlusIcon} alt="TeamMember" />
                팀원 관리
              </IconButton>
            </S.TeamPageHeaderButtonWrapper>
          </S.TeamPageHeaderWrapper>
        </S.TeamPageHeader>
        <S.TeamPageMenuWrapper>
          <Menu
            title="칸반보드"
            icon={KanbanIcon}
            subTitle="Task 상태를 관리하고 진행 상황을 확인해봐요!"
            route={`/team/${currentTeam?.id}/kanban`}
            buttonText="확인하기"
          />
          <Menu
            title="캘린더"
            icon={MeetingIcon}
            subTitle="일정을 캘린더로 확인해봐요!"
            route={`/team/${currentTeam?.id}/calendar`}
            buttonText="확인하기"
          />
          <Menu
            title="리드미"
            icon={MeetingLogIcon}
            subTitle="리드미를 쉽게 작성해봐요"
            route={`/team/${currentTeam?.id}/readme`}
            buttonText="확인하기"
          />
          <Menu
            title="미팅"
            icon={MeetingIcon}
            subTitle="실시간으로 소통하고 회의를 진행하봐요."
            route={`/team/${currentTeam?.id}/meeting`}
            buttonText="확인하기"
          />
          <Menu
            title="회의록"
            icon={MeetingLogIcon}
            subTitle="회의 내용을 AI로 요약된 정보를 확인해봐요!"
            route={`/team/${currentTeam?.id}/meeting-log`}
            buttonText="확인하기"
          />
        </S.TeamPageMenuWrapper>
        <S.TeamPageContentWrapper>
          <S.TeamPageGantt>
            <GanttChart milestones={milestones || []} />
          </S.TeamPageGantt>
          <S.TeamPageTaskList>
            <S.TeamPageTaskListTitle>
              마감이 다가오는 Task
            </S.TeamPageTaskListTitle>
            <S.TeamPageTaskListContent>
              {deadlineMilestone?.length ? (
                deadlineMilestone.map(({ milestone, issues }) =>
                  issues.map((issue) => (
                    <UpcomingTask
                      key={issue.issueId}
                      issue={issue}
                      dueDate={milestone?.dueDate}
                    />
                  )),
                )
              ) : (
                <p>마감이 임박한 Task가 없습니다.</p>
              )}
            </S.TeamPageTaskListContent>
          </S.TeamPageTaskList>
        </S.TeamPageContentWrapper>
      </S.TeamPageContainer>
    </>
  );
};

export default TeamPage;
