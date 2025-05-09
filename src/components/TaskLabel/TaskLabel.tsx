import React from 'react';
import * as S from './TaskLabel.styles';
import type { TaskLabelProps } from './TaskLabel.types';
import { useTaskLabelStore } from '../../state/taskLabelState';

const TaskLabel = ({
  labelInfo,
  isClickable,
  type,
  onClick,
}: TaskLabelProps) => {
  const toggleLabel = useTaskLabelStore((state) => state.toggleLabel);
  const isSelected = useTaskLabelStore((state) =>
    state.isLabelSelected(labelInfo.labelId),
  );

  const handleLabelClick = () => {
    if (!isClickable) return;
    toggleLabel(labelInfo);
  };

  return (
    <S.TaskLabelContainer
      color={labelInfo.color}
      isSelected={type !== 'taskModal' && isSelected}
      isClickable={isClickable}
      onClick={type !== 'taskModal' ? handleLabelClick : onClick}
    >
      {labelInfo.name}
    </S.TaskLabelContainer>
  );
};

export default TaskLabel;
