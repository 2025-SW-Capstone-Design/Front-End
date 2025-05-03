import React from 'react';
import * as S from './TaskButton.styles';
import type { TaskButtonProps } from './TaskButton.types';

function TaskButton({
  children,
  isSelected = false,
  onClick,
  ...props
}: TaskButtonProps) {
  return (
    <S.TaskButtonWrapper isSelected={isSelected} onClick={onClick} {...props}>
      {children}
    </S.TaskButtonWrapper>
  );
}

export default TaskButton;
