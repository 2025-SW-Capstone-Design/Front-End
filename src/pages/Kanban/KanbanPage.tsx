import React, { useState } from 'react';
import * as S from './KanbanPage.styles';
import { useCurrentTeam } from '../../hooks/useCurrentTeam';

import BackIcon from '../../assets/icon/backIcon.svg';
import plusIcon from '../../assets/icon/white_plus.svg';

import { useNavigate } from 'react-router-dom';
import IconButton from '../../components/IconButton/IconButton';
import Dropdown from '../../components/Dropdown/Dropdown';
import { getProjects } from '../../apis/project/project';
import { useApiQuery } from '../../apis/config/builder/ApiBuilder';
import Button from '../../components/Button/Button';
import MilestoneModal from '../../components/MilestoneModal/MilestoneModal';
import MilestoneListModal from '../../components/MilestoneListModal/MilestoneListModal';
import type { MilestoneResponse } from '~/apis/milestone/milestone.types';
import {
  getMilesotnes,
  getMilestoneByProject,
} from '../../apis/milestone/milestone';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Kanban from '../../components/Kanban/Kanban';

const KanbanPage = () => {
  const currentTeam = useCurrentTeam();
  const navigate = useNavigate();

  const { data: rawProjects } = useApiQuery(
    getProjects(currentTeam?.id as number),
    'projects',
  );

  const projects = rawProjects
    ? [{ projectId: -1, title: '전체보기', creator: '' }, ...rawProjects]
    : [];

  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null,
  );
  const [selectedMilestone, setSelectedMilestone] =
    useState<MilestoneResponse | null>(null);

  const [isOpenMilestoneModal, setIsOpenMilestoneModal] =
    useState<boolean>(false);

  const [isOpenMilestoneListModal, setIsOpenMilestoneListModal] =
    useState<boolean>(false);

  const { data: milestones } = useApiQuery(
    selectedProjectId === null
      ? getMilesotnes(currentTeam?.id as number)
      : getMilestoneByProject(currentTeam?.id as number, selectedProjectId),
    ['milestones', currentTeam?.id, selectedProjectId],
  );

  const handleProjectSelect = (projectId: number) => {
    if (projectId === -1) {
      setSelectedProjectId(null);
    } else {
      setSelectedProjectId(projectId);
    }
  };

  return (
    <>
      {isOpenMilestoneModal && (
        <MilestoneModal
          onClose={() => setIsOpenMilestoneModal(!isOpenMilestoneModal)}
          projects={rawProjects}
          teamId={currentTeam?.id as number}
          projectId={selectedProjectId}
          milestone={selectedMilestone ? selectedMilestone : undefined}
        />
      )}
      {isOpenMilestoneListModal && (
        <MilestoneListModal
          onClose={() => setIsOpenMilestoneListModal(!isOpenMilestoneListModal)}
          isOpenEditModal={() => setIsOpenMilestoneModal(!isOpenMilestoneModal)}
          isSelected={selectedMilestone as MilestoneResponse}
          setIsSelected={setSelectedMilestone}
          teamId={currentTeam?.id as number}
          selectedProjectId={selectedProjectId}
        />
      )}
      <S.KanbanContainer>
        <S.KanbanHeader>
          <S.KanbanHeaderBack
            onClick={() => navigate(`/team/${currentTeam?.id}`)}
          >
            <img src={BackIcon} alt="back" />
            돌아가기
          </S.KanbanHeaderBack>
          <S.KanbanHeaderTeamName>{currentTeam?.name}</S.KanbanHeaderTeamName>
          <S.KanbanHeaderButtonWrapper>
            <Dropdown
              options={projects || []}
              onSelect={handleProjectSelect}
              dropdownType="primary"
              width="340px"
            />
            <Button
              buttonType="secondary"
              width="174px"
              onClick={() => setIsOpenMilestoneListModal(true)}
            >
              Milestone 조회
            </Button>
            <IconButton
              buttonType="tertiary"
              width="174px"
              onClick={() => {
                setSelectedMilestone(null);
                setIsOpenMilestoneModal(true);
              }}
            >
              <img src={plusIcon} alt="plus" />
              Milestone 생성
            </IconButton>
          </S.KanbanHeaderButtonWrapper>
          <Kanban
            teamId={currentTeam?.id as number}
            selectedProjectId={selectedProjectId}
          />
        </S.KanbanHeader>
      </S.KanbanContainer>
    </>
  );
};

export default KanbanPage;
