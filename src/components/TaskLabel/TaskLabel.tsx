import React from 'react';
import * as S from './TaskLabel.styles';
import type { TaskLabelProps } from './TaskLabel.types';
import { useTaskLabelStore } from '../../state/taskLabelState';

const TaskLabel = ({
  labelInfo,
  isClickable = false,
  type = 'default',
  onClick,
  selectedType,
}: TaskLabelProps) => {
  const { toggleLabel, selectedLabels } = useTaskLabelStore();

  const isSelectedGlobal = selectedLabels.some(
    (label) => label.labelId === labelInfo.labelId,
  );

  const handleLabelClick = () => {
    if (!isClickable) return;

    if (type === 'taskModal' && onClick) {
      onClick();
      return;
    }

    toggleLabel(labelInfo);
  };

  const isSelected =
    type === 'taskModal' ? selectedType === labelInfo.name : isSelectedGlobal;

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
