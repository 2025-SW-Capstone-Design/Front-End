import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './KanbanPage.styles';

import BackIcon from '../../assets/icon/backIcon.svg';
import plusIcon from '../../assets/icon/white_plus.svg';

import IconButton from '../../components/IconButton/IconButton';
import Dropdown from '../../components/Dropdown/Dropdown';
import Button from '../../components/Button/Button';
import MilestoneModal from '../../components/MilestoneModal/MilestoneModal';
import MilestoneListModal from '../../components/MilestoneListModal/MilestoneListModal';
import Kanban from '../../components/Kanban/Kanban';

import { useCurrentTeam } from '../../hooks/useCurrentTeam';
import { getProjects } from '../../apis/project/project';
import {
  getMilesotnes,
  getMilestoneByProject,
} from '../../apis/milestone/milestone';
import { useApiQuery } from '../../apis/config/builder/ApiBuilder';
import { queryClient } from '../../QueryClient';

import type { MilestoneResponse } from '../../apis/milestone/milestone.types';

const KanbanPage = () => {
  const navigate = useNavigate();
  const currentTeam = useCurrentTeam();

  const teamId = currentTeam?.id ?? -1;

  const { data: rawProjects } = useApiQuery(getProjects(teamId), 'projects');

  const projects = useMemo(() => {
    if (!rawProjects) return [];
    return [{ projectId: -1, title: '전체보기', creator: '' }, ...rawProjects];
  }, [rawProjects]);

  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null,
  );
  const [selectedMilestone, setSelectedMilestone] =
    useState<MilestoneResponse | null>(null);
  const [isOpenMilestoneModal, setIsOpenMilestoneModal] = useState(false);
  const [isOpenMilestoneListModal, setIsOpenMilestoneListModal] =
    useState(false);

  const { data: milestones } = useApiQuery(
    selectedProjectId === null
      ? getMilesotnes(teamId)
      : getMilestoneByProject(teamId, selectedProjectId),
    ['milestones', teamId, selectedProjectId],
  );

  const prefetchAllProjectMilestones = useCallback(async () => {
    if (!teamId || !rawProjects) return;

    await Promise.all(
      rawProjects.map(async (project) => {
        if (project.projectId === -1) return;
        try {
          const response = await getMilestoneByProject(
            teamId,
            project.projectId,
          ).execute();
          queryClient.setQueryData(
            ['milestones', teamId, project.projectId],
            response.data,
          );
        } catch (error) {
          console.error(
            `Failed to prefetch milestones for project ${project.projectId}:`,
            error,
          );
        }
      }),
    );
  }, [teamId, rawProjects]);

  useEffect(() => {
    prefetchAllProjectMilestones();
  }, [prefetchAllProjectMilestones]);

  const handleProjectSelect = useCallback((projectId: number) => {
    setSelectedProjectId(projectId === -1 ? null : projectId);
  }, []);

  const renderMilestoneModals = () => (
    <>
      {isOpenMilestoneModal && (
        <MilestoneModal
          onClose={() => setIsOpenMilestoneModal(false)}
          projects={rawProjects}
          teamId={teamId}
          projectId={selectedProjectId}
          milestone={selectedMilestone ?? undefined}
        />
      )}
      {isOpenMilestoneListModal && (
        <MilestoneListModal
          onClose={() => setIsOpenMilestoneListModal(false)}
          isOpenEditModal={() => setIsOpenMilestoneModal(true)}
          isSelected={selectedMilestone as MilestoneResponse}
          setIsSelected={setSelectedMilestone}
          teamId={teamId}
          selectedProjectId={selectedProjectId}
        />
      )}
    </>
  );

  return (
    <>
      {renderMilestoneModals()}
      <S.KanbanContainer>
        <S.KanbanHeader>
          <S.KanbanHeaderBack onClick={() => navigate(`/team/${teamId}`)}>
            <img src={BackIcon} alt="back" />
            돌아가기
          </S.KanbanHeaderBack>

          <S.KanbanHeaderTeamName>{currentTeam?.name}</S.KanbanHeaderTeamName>

          <S.KanbanHeaderButtonWrapper>
            <Dropdown
              options={projects}
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

          <Kanban teamId={teamId} selectedProjectId={selectedProjectId} />
        </S.KanbanHeader>
      </S.KanbanContainer>
    </>
  );
};

export default KanbanPage;
