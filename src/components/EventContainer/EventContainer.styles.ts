import styled from '@emotion/styled';
import { css } from '@emotion/react';
import type { PositionType } from '../Label/Label.types';
import { Positions } from '../Label/Label.types';

const EventContainerLayout = css`
  width: 150px;
  flex-shrink: 0;
  padding: 4px 12px;
  border-radius: 3px;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2px;
  display: flex;
`;

const SmallEventWrapper = styled.div<{ position: PositionType }>`
  ${EventContainerLayout};

  height: 25px;
  background: ${({ theme }) => theme.colors.gray[10]};
  ${({ theme }) => theme.text.labeS_bold};
  border-left: 4px solid
    ${({ theme, position }) => Positions[position].outline(theme)};

  align-items: center;
`;

const MediumEventWrapper = styled.div<{ position: PositionType }>`
  ${EventContainerLayout};

  height: 38px;
  background: ${({ theme }) => theme.colors.gray[10]};
  color: black;
  ${({ theme }) => theme.text.labeS_bold};
  border-left: 4px solid
    ${({ theme, position }) => Positions[position].outline(theme)};
`;

const LargerEventWrapper = styled.div<{ position: PositionType }>`
  ${EventContainerLayout};
  height: 78px;
  background: ${({ theme }) => theme.colors.gray[10]};
  color: black;
  display: flex;
  align-items: flex-start;
  ${({ theme }) => theme.text.labeS_bold};
  border-left: 4px solid
    ${({ theme, position }) => Positions[position].outline(theme)};
`;

const TaskNameWrapper = styled.div`
  height: 100%;
  width: 90px;
  display: flex;
  flex: 1;
  justify-content: flex-start;
`;

const TimeWrapper = styled.div`
  height: 100%;
  width: 34px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Task = styled.div<{ containerType: 'small' | 'medium' | 'large' }>`
  width: 100%;

  ${({ containerType }) =>
    containerType === 'small' &&
    `
    height: 17px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; 
  `}

  ${({ containerType }) =>
    containerType === 'medium' &&
    `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
  `}

  ${({ containerType }) =>
    containerType === 'large' &&
    `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
  `}
`;

const Time = styled.div`
  color: ${({ theme }) => theme.colors.gray[80]};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export {
  SmallEventWrapper,
  MediumEventWrapper,
  LargerEventWrapper,
  TaskNameWrapper,
  TimeWrapper,
  Task,
  Time,
};
