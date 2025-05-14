import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './TaskPage.styles';
import MDEditor from '@uiw/react-md-editor';

import BackIcon from '../../assets/icon/backIcon.svg';
import plusIcon from '../../assets/icon/white_plus.svg';

import Menu from '../../components/Markdown/Menu/Menu';
import MarkdownEditor from '../../components/Markdown/Editor/MarkdownEditor';
import IconButton from '../../components/IconButton/IconButton';
import Button from '../../components/Button/Button';
import ImportTemplateModal from '../../components/ImportTemplateModal/ImportTemplateModal';
import TaskLabel from '../../components/TaskLabel/TaskLabel';

import { useApiQuery } from '../../apis/config/builder/ApiBuilder';
import { useCurrentTeam } from '../../hooks/useCurrentTeam';
import { useTaskLabelStore } from '../../state/taskLabelState';

import { createTask, getTaskDetail, updateTask } from '../../apis/task/task';
import { getProjects } from '../../apis/project/project';
import { getLabels } from '../../apis/label/label';
import { getMemberDetail } from '../../apis/member/member';

import { queryClient } from '../../QueryClient';
import type { IssueDetailResponse } from '../../apis/task/task.types';

const TaskPage = () => {
  const { teamId, projectId, milestoneId, taskId } = useParams();
  const navigate = useNavigate();

  const currentTeam = useCurrentTeam();

  const { data: task } = useApiQuery(
    getTaskDetail(Number(teamId), Number(projectId), Number(taskId)),
    ['issue', teamId, projectId, taskId],
  );
  const { data: member } = useApiQuery(getMemberDetail(), ['members']);
  const { data: projects } = useApiQuery(getProjects(Number(teamId)), [
    'projects',
  ]);
  const { data: issueLabels } = useApiQuery(
    getLabels(Number(teamId), Number(projectId)),
    ['labels', teamId, projectId],
  );

  const [markDown, setMarkDown] = useState('');
  const [title, setTitle] = useState('');
  const [isOpenTemplateModal, setIsOpenTemplateModal] = useState(false);

  const labels = useTaskLabelStore((state) => state.selectedLabels);
  const setSelectedLabels = useTaskLabelStore(
    (state) => state.setSelectedLabels,
  );
  const resetSelectedLabels = useTaskLabelStore(
    (state) => state.resetSelectedLabels,
  );

  useEffect(() => {
    if (task && taskId) {
      const data = task as IssueDetailResponse;
      setTitle(data.issueDetail.title);
      setMarkDown(data.issueDetail.content);
      setSelectedLabels(data.issueDetail.labels);
    }
  }, [task, taskId, setSelectedLabels]);

  const getRepositoryName = () =>
    projects?.find((p) => p.projectId === Number(projectId))?.title || '';

  const handleMarkdownChange = (value?: string) => {
    setMarkDown(value || '');
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSave = () => {
    if (!teamId || !projectId || !milestoneId) return;
    if (task && labels.length === 0) {
      alert('라벨을 1개 이상 선택해주세요.');
      return;
    }

    const commonData = {
      organizationName: currentTeam?.organizationName ?? '',
      repositoryName: getRepositoryName(),
      title,
      content: markDown,
      labels: labels.map((l) => l.name),
      assignees: member?.nickname ?? '',
      milestoneId: Number(milestoneId),
    };

    if (task && taskId) {
      const data = task as IssueDetailResponse;
      updateTask(+teamId, +taskId)
        .setData({
          ...commonData,
          state: data.issueDetail.status === 'open' ? 'OPEN' : 'CLOSED',
          teamMemberId: data.teamMemberId,
        })
        .execute();
    } else {
      createTask(+teamId, +projectId).setData(commonData).execute();
    }

    resetSelectedLabels();
    invalidateQueriesAfterSave();
    navigate(`/team/${teamId}/calendar`);
  };

  const invalidateQueriesAfterSave = () => {
    queryClient.invalidateQueries({
      queryKey: ['issue', teamId, projectId, taskId],
    });
    queryClient.invalidateQueries({
      queryKey: ['milestonesByProject', teamId, projectId],
    });
    queryClient.invalidateQueries({ queryKey: ['projects', teamId] });
    queryClient.invalidateQueries({ queryKey: ['members'] });
  };

  return (
    <>
      {isOpenTemplateModal && (
        <ImportTemplateModal
          onClose={() => setIsOpenTemplateModal(false)}
          teamId={teamId as string}
          projectId={projectId as string}
          modalType="import"
          setTitle={setTitle}
          setMarkDown={setMarkDown}
        />
      )}

      <S.TaskContainer>
        <S.TaskCreateWrapper>
          <S.TaskCreateHeader>
            <S.TaskHeaderBack
              onClick={() => navigate(`/team/${teamId}/calendar`)}
            >
              <img src={BackIcon} alt="back" />
              돌아가기
            </S.TaskHeaderBack>
            <S.TaskHeaderText>
              {taskId ? 'Task 수정하기' : 'Task 작성하기'}
            </S.TaskHeaderText>
            <S.TaskHeaderLength>{markDown.length} 자</S.TaskHeaderLength>
          </S.TaskCreateHeader>

          <S.TaskCreateSection>
            <S.TaskCreateInput
              placeholder="제목을 입력하세요"
              value={title}
              onChange={handleTitleChange}
            />
            {taskId && (
              <S.TaskIssueListWrapper>
                {issueLabels?.map((label) => (
                  <TaskLabel
                    key={label.labelId}
                    labelInfo={label}
                    isClickable
                  />
                ))}
              </S.TaskIssueListWrapper>
            )}
            <Menu
              insertMarkdown={(syntax) => setMarkDown((prev) => prev + syntax)}
            />
            <S.TaskMarkdownLength>{markDown.length} 자</S.TaskMarkdownLength>

            <MarkdownEditor
              markdown={markDown}
              handleMarkdownChange={handleMarkdownChange}
            />
          </S.TaskCreateSection>

          <S.TaskButtonWrapper>
            {!taskId && (
              <Button
                buttonType="secondary"
                width="fit-content"
                onClick={() => setIsOpenTemplateModal(true)}
              >
                기존 템플릿 가져오기
              </Button>
            )}
            <IconButton
              buttonType="primary"
              width="fit-content"
              onClick={handleSave}
            >
              <img src={plusIcon} alt="plus" />
              {taskId ? 'Task 수정하기' : 'Task 생성하기'}
            </IconButton>
          </S.TaskButtonWrapper>
        </S.TaskCreateWrapper>

        <S.TaskPreviewWrapper>
          <S.TaskPreview data-color-mode="lightgray">
            <MDEditor.Markdown style={{ height: '92vh' }} source={markDown} />
          </S.TaskPreview>
        </S.TaskPreviewWrapper>
      </S.TaskContainer>
    </>
  );
};

export default TaskPage;
