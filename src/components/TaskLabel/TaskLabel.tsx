import React from 'react';
import * as S from './TaskLabel.styles';
import type { TaskLabelProps } from './TaskLabel.types';
import { useTaskLabelStore } from '../../state/taskLabelState';

const TaskLabel = ({
  labelInfo,
  isClickable,
  type,
  onClick,
  selectedType,
}: TaskLabelProps) => {
  const toggleLabel = useTaskLabelStore((state) => state.toggleLabel);
  const isSelectedGlobal = useTaskLabelStore((state) =>
    state.isLabelSelected(labelInfo.labelId),
  );

  const handleLabelClick = () => {
    if (!isClickable) return;
    toggleLabel(labelInfo);
  };

  const isSelected =
    type === 'taskModal' ? selectedType === labelInfo.name : isSelectedGlobal;

  return (
    <S.TaskLabelContainer
      color={labelInfo.color}
      isSelected={isSelected}
      isClickable={isClickable}
      onClick={type === 'taskModal' ? onClick : handleLabelClick}
    >
      {labelInfo.name}
    </S.TaskLabelContainer>
  );
};

export default TaskLabel;
