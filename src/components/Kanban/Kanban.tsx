import React, { useEffect, useState } from 'react';
import * as S from './Kanban.styles';
import KanbanList from '../KanbanList/KanbanList';
import { queryClient } from '../../QueryClient';
import type { MilestoneResponse } from '../../apis/milestone/milestone.types';
import type { KanbanProps } from './Kanban.types';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Kanban = ({ teamId, selectedProjectId }: KanbanProps) => {
  const cachedMilestones = queryClient.getQueryData<MilestoneResponse[]>([
    'milestones',
    teamId,
    selectedProjectId,
  ]);

  const [milestones, setMilestones] = useState<MilestoneResponse[]>([]);
  useEffect(() => {
    if (cachedMilestones) {
      setMilestones(cachedMilestones);
    }
  }, [cachedMilestones]);

  const notStarted = milestones.filter((m) => m.status === 'NOT_STARTED');
  const inProgress = milestones.filter((m) => m.status === 'IN_PROGRESS');
  const done = milestones.filter((m) => m.status === 'DONE');

  const handleDrop = (milestone: MilestoneResponse, newStatus: string) => {
    setMilestones((prev) =>
      prev.map((m) =>
        m.milestoneId === milestone.milestoneId
          ? { ...m, status: newStatus }
          : m,
      ),
    );
  };

  return (
    <S.KanbanContainer>
      <S.KanbanHeaderText>마일스톤 칸반보드</S.KanbanHeaderText>
      <DndProvider backend={HTML5Backend}>
        <S.KanbanListContainer>
          <KanbanList
            title="진행전"
            milestones={notStarted}
            onDropMilestone={(m) => handleDrop(m, 'NOT_STARTED')}
          />
          <KanbanList
            title="진행중"
            milestones={inProgress}
            onDropMilestone={(m) => handleDrop(m, 'IN_PROGRESS')}
          />
          <KanbanList
            title="완료"
            milestones={done}
            onDropMilestone={(m) => handleDrop(m, 'DONE')}
          />
        </S.KanbanListContainer>
      </DndProvider>
    </S.KanbanContainer>
  );
};

export default Kanban;
