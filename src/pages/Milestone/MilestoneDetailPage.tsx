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
import TaskCard from '../../components/TaskCard/TaskCard';
import Button from '../../components/Button/Button';

const MilestoneDetailPage = () => {
  const navigate = useNavigate();
  const { teamId, projectId, milestoneId } = useParams();
  const { data: milestone } = useApiQuery(
    getMilestoneDetail(Number(teamId), Number(milestoneId)),
    ['milestone', teamId, milestoneId],
  );

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
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);
  const [markdown, setMarkdown] = useState<string>('');
  const [isOpenTaskSettingModal, setIsTaskSettingModal] =
    useState<boolean>(false);

  const handleProjectSelect = useCallback((id: number) => {
    setSelectedMilestoneId(id === -1 ? null : id);
  }, []);

  const renderIssueListByStatus = (status: 'OPEN' | 'CLOSED') => {
    const filteredIssues =
      milestone?.issues.filter((issue) => issue.status === status) || [];

    return (
      <S.MilestoneTaskList>
        <S.MilestoneTaskListHeaderText>
          {status} <span>{filteredIssues.length}</span>
        </S.MilestoneTaskListHeaderText>
        {filteredIssues.map((issue) => (
          <TaskCard
            key={issue.issueId}
            task={issue}
            projectId={Number(projectId)}
            setMarkdown={setMarkdown}
          />
        ))}
      </S.MilestoneTaskList>
    );
  };

  useEffect(() => {
    if (markdown) {
      const id = milestone?.issues.find(
        (issue) => issue.content === markdown,
      )?.issueId;
      setSelectedTaskId(id as number);
    }
  }, [markdown]);

  return (
    <>
      {isOpenTaskSettingModal && (
        <TaskSettingModal
          teamId={Number(teamId)}
          onClose={() => setIsTaskSettingModal(!isOpenTaskSettingModal)}
          modalType="task"
        />
      )}
      <S.MilestoneContainer>
        <S.MilestoneHeader>
          <S.MilestoneHeaderBack>
            <img src={BackIcon} alt="back" />
            돌아가기
          </S.MilestoneHeaderBack>
          <S.MilestoneHeaderTeamName>
            {
              projects?.find(
                (project) => project.projectId === Number(projectId),
              )?.title
            }
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
              onClick={() => setIsTaskSettingModal(!isOpenTaskSettingModal)}
            >
              <img src={plusIcon} alt="plus" />
              Task 생성
            </IconButton>
          </S.MilestoneHeaderButtonWrapper>
        </S.MilestoneHeader>
        <S.MilestoneContent>
          <S.MilestoneContentHeaderText>
            Task 칸반보드 <span>{milestone?.title as string}</span>
          </S.MilestoneContentHeaderText>
          <S.MilestoneTaskSection>
            {renderIssueListByStatus('OPEN')}
            {renderIssueListByStatus('CLOSED')}
            <S.MilestoneTaskPreviewer data-color-mode="lightgray">
              <MDEditor.Markdown
                style={{
                  height: '94%',
                  padding: '24px',
                  lineHeight: '1.6',
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
        </S.MilestoneContent>
      </S.MilestoneContainer>
    </>
  );
};

export default MilestoneDetailPage;
