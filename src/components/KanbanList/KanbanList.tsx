import React, { useCallback } from 'react';
import { useDrop } from 'react-dnd';
import * as S from './KanbanList.styles';
import type { KanbanListProps } from './KanbanList.types';
import Card from '../Card/Card';
import type { MilestoneResponse } from '../../apis/milestone/milestone.types';

const KanbanList = ({
  title,
  milestones,
  onDropMilestone,
}: KanbanListProps) => {
  const [, drop] = useDrop({
    accept: 'MILESTONE',
    drop: (draggedItem: MilestoneResponse) => {
      onDropMilestone(draggedItem);
    },
  });

  const setRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (node) {
        drop(node);
      }
    },
    [drop],
  );

  return (
    <S.KanbanListContainer ref={setRef}>
      <S.KanbanHeaderText>
        {title} <span>{milestones.length}</span>
      </S.KanbanHeaderText>
      <S.KanbanListItem>
        {milestones.map((milestone) => (
          <Card
            key={milestone.milestoneId}
            data={milestone}
            cardType="milestone"
          />
        ))}
      </S.KanbanListItem>
    </S.KanbanListContainer>
  );
};

export default KanbanList;
