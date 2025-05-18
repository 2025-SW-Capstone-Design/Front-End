import React, { useCallback, useEffect, useState } from 'react';
import * as S from './MilestoneDetailPage.styles';
import MDEditor from '@uiw/react-md-editor';
import BackIcon from '../../assets/icon/backIcon.svg';
import plusIcon from '../../assets/icon/white_plus.svg';
import { useNavigate, useParams } from 'react-router-dom';
import { useApiQuery } from '../../apis/config/builder/ApiBuilder';
import {
  getMilestoneByProject,
  getMilestoneDetail,
} from '../../apis/milestone/milestone';
import Dropdown from '../../components/Dropdown/Dropdown';
import IconButton from '../../components/IconButton/IconButton';
import TaskSettingModal from '../../components/TaskSettingModal/TaskSettingModal';
import { getProjects } from '../../apis/project/project';
import Button from '../../components/Button/Button';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import type { MilestoneDetailResponse } from '../../apis/milestone/milestone.types';
import KanbanColumn from './KanbanColumn';

const MilestoneDetailPage = () => {
  const navigate = useNavigate();
  const { teamId, projectId, milestoneId } = useParams();

  const {
    data: milestone,
    isLoading: milestoneLoading,
    refetch: refetchMilestoneDetail,
  } = useApiQuery(getMilestoneDetail(Number(teamId), Number(milestoneId)), [
    'milestone',
    teamId,
    milestoneId,
  ]);

  const { data: milestonesByProject } = useApiQuery(
    getMilestoneByProject(Number(teamId), Number(projectId)),
    ['milestonesByProject', teamId, projectId],
  );

  const { data: projects } = useApiQuery(getProjects(Number(teamId)), [
    'projects',
    teamId,
  ]);

  const [selectedMilestoneId, setSelectedMilestoneId] = useState<number | null>(
    Number(milestoneId),
  );

  const [localMilestone, setLocalMilestone] =
    useState<MilestoneDetailResponse | null>(null);

  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);
  const [markdown, setMarkdown] = useState<string>('');
  const [isOpenTaskSettingModal, setIsTaskSettingModal] =
    useState<boolean>(false);

  const handleProjectSelect = useCallback((id: number) => {
    setSelectedMilestoneId(id === -1 ? null : id);
  }, []);

  useEffect(() => {
    if (milestone) {
      setLocalMilestone(milestone);
    }
  }, [milestone]);

  useEffect(() => {
    if (markdown && milestone?.issues) {
      const issue = milestone.issues.find(
        (issue) => issue.content === markdown,
      );
      if (issue) {
        setSelectedTaskId(issue.issueId);
      }
    }
  }, [markdown, milestone]);

  const currentProjectTitle =
    projects?.find((project) => project.projectId === Number(projectId))
      ?.title || '';

  return (
    <>
      {isOpenTaskSettingModal && (
        <TaskSettingModal
          teamId={Number(teamId)}
          onClose={() => setIsTaskSettingModal(false)}
          modalType="task"
        />
      )}

      <S.MilestoneContainer>
        <S.MilestoneHeader>
          <S.MilestoneHeaderBack onClick={() => navigate(-1)}>
            <img src={BackIcon} alt="back" />
            돌아가기
          </S.MilestoneHeaderBack>
          <S.MilestoneHeaderTeamName>
            {currentProjectTitle}
          </S.MilestoneHeaderTeamName>
          <S.MilestoneHeaderButtonWrapper>
            <Dropdown
              options={milestonesByProject || []}
              onSelect={handleProjectSelect}
              dropdownType="primary"
              width="340px"
            />
            <IconButton
              buttonType="tertiary"
              width="174px"
              onClick={() => setIsTaskSettingModal(true)}
            >
              <img src={plusIcon} alt="plus" />
              Task 생성
            </IconButton>
          </S.MilestoneHeaderButtonWrapper>
        </S.MilestoneHeader>
        <S.MilestoneContent>
          <S.MilestoneContentHeaderText>
            Task 칸반보드 <span>{milestone?.title}</span>
          </S.MilestoneContentHeaderText>

          {milestoneLoading ? (
            <div>로딩 중...</div>
          ) : (
            <S.MilestoneTaskSection>
              <DndProvider backend={HTML5Backend}>
                <KanbanColumn
                  status="OPEN"
                  milestone={localMilestone as MilestoneDetailResponse}
                  teamId={teamId!}
                  projectId={projectId!}
                  projects={projects || []}
                  setMarkdown={setMarkdown}
                  refetchMilestoneDetail={refetchMilestoneDetail}
                  setLocalMilestone={setLocalMilestone}
                />
                <KanbanColumn
                  status="CLOSED"
                  milestone={localMilestone as MilestoneDetailResponse}
                  teamId={teamId!}
                  projectId={projectId!}
                  projects={projects || []}
                  setMarkdown={setMarkdown}
                  refetchMilestoneDetail={refetchMilestoneDetail}
                  setLocalMilestone={setLocalMilestone}
                />
              </DndProvider>
              <S.MilestoneTaskPreviewer data-color-mode="lightgray">
                <MDEditor.Markdown
                  style={{
                    height: '100%',
                    padding: '24px',
                    lineHeight: '1.6',
                    overflowY: 'auto',
                  }}
                  source={markdown}
                />
                {markdown && (
                  <S.MilestoneTaskPreviewerButtonWrapper>
                    <Button
                      buttonType="tertiary"
                      width="fit-content"
                      onClick={() =>
                        navigate(
                          `/team/${teamId}/project/${projectId}/milestone/${milestoneId}/task/${selectedTaskId}/update`,
                        )
                      }
                    >
                      수정하기
                    </Button>
                  </S.MilestoneTaskPreviewerButtonWrapper>
                )}
              </S.MilestoneTaskPreviewer>
            </S.MilestoneTaskSection>
          )}
        </S.MilestoneContent>
      </S.MilestoneContainer>
    </>
  );
};

export default MilestoneDetailPage;
