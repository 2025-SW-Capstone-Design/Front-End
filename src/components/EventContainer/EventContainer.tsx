import React from 'react';
import type { EventContainerProps } from './EventContainer.types';
import * as S from './EventContainer.styles';

function EventContainer({
  containerType,
  taskName,
  time,
  position,
  ...props
}: EventContainerProps) {
  switch (containerType) {
    case 'small':
      return (
        <S.SmallEventWrapper position={position} {...props}>
          <S.TaskNameWrapper>
            <S.Task containerType="small">{taskName}</S.Task>
          </S.TaskNameWrapper>
          <S.TimeWrapper>
            <S.Time>{time}</S.Time>
          </S.TimeWrapper>
        </S.SmallEventWrapper>
      );
    case 'medium':
      return (
        <S.MediumEventWrapper position={position} {...props}>
          <S.TaskNameWrapper>
            <S.Task containerType="medium">{taskName}</S.Task>
          </S.TaskNameWrapper>
          <S.TimeWrapper>
            <S.Time>{time}</S.Time>
          </S.TimeWrapper>
        </S.MediumEventWrapper>
      );
    case 'large':
      return (
        <S.LargerEventWrapper position={position} {...props}>
          <S.TaskNameWrapper>
            <S.Task containerType="large">{taskName}</S.Task>
          </S.TaskNameWrapper>
          <S.TimeWrapper>
            <S.Time>{time}</S.Time>
          </S.TimeWrapper>
        </S.LargerEventWrapper>
      );
    default:
      return null;
  }
}

export default EventContainer;
