import React from 'react';
import * as S from './TaskLabel.styles';
import type { TaskLabelProps } from './TaskLabel.types';
import { useTaskLabelStore } from '../../state/taskLabelState';

const TaskLabel = ({ labelInfo, isClickable }: TaskLabelProps) => {
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
      isSelected={isSelected}
      isClickable={isClickable}
      onClick={handleLabelClick}
    >
      {labelInfo.name}
    </S.TaskLabelContainer>
  );
};

export default TaskLabel;
