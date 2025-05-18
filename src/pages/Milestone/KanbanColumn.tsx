import React, { useEffect, useRef } from 'react';
import { useDrop } from 'react-dnd';
import * as S from './MilestoneDetailPage.styles';
import TaskCard from '../../components/TaskCard/TaskCard';
import type { IssueResponse } from '../../apis/task/task.types';
import { updateTaskStatus } from '../../apis/task/task';
import { useCurrentTeam } from '../../hooks/useCurrentTeam';
import type { projectInfo } from '../../apis/project/project.types';
import type { MilestoneDetailResponse } from '../../apis/milestone/milestone.types';
import { queryClient } from '../../QueryClient';

const KanbanColumn = ({
  status,
  milestone,
  teamId,
  projectId,
  projects,
  setMarkdown,
  refetchMilestoneDetail,
  setLocalMilestone,
}: {
  status: 'OPEN' | 'CLOSED';
  milestone: MilestoneDetailResponse;
  teamId: string;
  projectId: string;
  projects: projectInfo[];
  setMarkdown: React.Dispatch<React.SetStateAction<string>>;
  setLocalMilestone: React.Dispatch<
    React.SetStateAction<MilestoneDetailResponse | null>
  >;
  refetchMilestoneDetail: () => void;
}) => {
  const currentTeam = useCurrentTeam();
  const dropTargetRef = useRef<HTMLDivElement>(null);

  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: 'TASK',
      drop: async (draggedTask: IssueResponse) => {
        if (draggedTask.status === status) return;

        const project = projects.find((p) => p.projectId === Number(projectId));
        if (!project) return;

        setLocalMilestone((prev) => {
          if (!prev) return prev;

          const updatedIssues = prev.issues.map((issue) =>
            issue.issueId === draggedTask.issueId
              ? { ...issue, status } // status만 바꾸기
              : issue,
          );

          return { ...prev, issues: updatedIssues };
        });

        try {
          await updateTaskStatus(Number(teamId), Number(draggedTask.issueId))
            .setData({
              organizationName: currentTeam?.organizationName || '',
              repositoryName: project.title,
              status,
              labels: draggedTask.labels.map((label) => label.name),
            })
            .execute();

          queryClient.invalidateQueries({
            queryKey: ['milestone', teamId, milestone?.milestoneId],
          });
        } catch (error) {
          console.error('업데이트 실패:', error);
          setLocalMilestone((prev) => {
            if (!prev) return prev;
            const rolledBack = prev.issues.map((issue) =>
              issue.issueId === draggedTask.issueId
                ? { ...issue, status: draggedTask.status }
                : issue,
            );
            return { ...prev, issues: rolledBack };
          });
        }
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [status, teamId, projectId, projects, currentTeam, milestone?.milestoneId],
  );

  useEffect(() => {
    if (dropTargetRef.current) {
      drop(dropTargetRef.current);
    }
  }, [drop]);

  const filteredIssues =
    milestone?.issues?.filter((issue) => issue.status === status) || [];

  return (
    <S.MilestoneTaskList
      ref={dropTargetRef}
      style={{
        backgroundColor: isOver ? 'rgba(0, 0, 0, 0.05)' : 'transparent',
        transition: 'background-color 0.3s ease',
      }}
    >
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

export default KanbanColumn;
