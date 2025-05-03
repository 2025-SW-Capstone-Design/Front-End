import styled from '@emotion/styled';
import { css } from '@emotion/react';

const CardLayout = css`
  width: 100%;
  height: 111px;
  display: flex;
  flex-direction: row;
  border-radius: 12px;
  padding: 28px 24px;
`;

const CardContainer = styled.div`
  ${CardLayout};
  background: ${({ theme }) => theme.colors.gray[10]};
  justify-content: space-between;
  align-items: flex-start;
  display: inline-flex;
`;

const LeftInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
`;
const Deadline = styled.div`
  height: 27px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: flex-end;
  justify-content: flex-start;
`;

const DeadlineDay = styled.div`
  height: 27px;
  ${({ theme }) => theme.text.bodyXL_bold};
  color: black;
`;

const DeadlineTime = styled.div`
  display: flex;
  align-items: flex-end;
  height: 22px;
  line-height: 125%;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray[70]};
`;

const TaskName = styled.div`
  height: 20px;
  ${({ theme }) => theme.text.bodyM_medium};
  color: black;
`;

const IconContainer = styled.div<{ status: '긴급' | '적정' | '보통' }>`
  display: flex;
  width: 69px;
  height: 24px;
  padding: 0 12px;
  gap: 8px;
  align-items: center;

  color: ${({ theme, status }) =>
    status === '긴급'
      ? theme.colors.red[50]
      : status === '적정'
        ? theme.colors.orange[50]
        : theme.colors.green[50]};

  svg {
    width: 12px;
    height: 12px;
    fill: ${({ theme, status }) =>
      status === '긴급'
        ? theme.colors.red[50]
        : status === '적정'
          ? theme.colors.orange[50]
          : theme.colors.green[50]};
  }
`;

const IconText = styled.div`
  height: 17px;
  ${({ theme }) => theme.text.labelL_bold};
`;

export {
  CardContainer,
  LeftInfo,
  Deadline,
  DeadlineDay,
  DeadlineTime,
  TaskName,
  IconContainer,
  IconText,
};
