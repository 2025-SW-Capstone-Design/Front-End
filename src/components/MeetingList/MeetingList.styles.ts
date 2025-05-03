import styled from '@emotion/styled';
import type { MeetingListStylesProps } from './MeetingList.types';

const MeetingListWrapper = styled.div<MeetingListStylesProps>`
  width: ${({ width }) => width || '633px'};
  height: 109px;
  padding: 28px 24px;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: white;

  &:hover,&:active {
    background: ${({ theme }) => theme.colors.gray[10]};
    outline: 1px solid ${({ theme }) => theme.colors.gray[20]};
    outline-offset: -1px;
`;

const MeetingListInfo = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MeetingTime = styled.div`
  width: fit-content;
  height: 25px;
  padding: 4px 8px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: black;
  outline: 1px solid black;
  outline-offset: -1px;
  color: ${({ theme }) => theme.colors.primary[30]};
  ${({ theme }) => theme.text.bodyS_bold};
`;

const MeetingTitle = styled.div`
  width: auto;
  height: 20px;
  color: black;
  ${({ theme }) => theme.text.bodyM_bold};
`;

const ButtonContainer = styled.div`
  width: 202px;
  height: 36px;
  display: flex;
  gap: 12px;
`;

export {
  MeetingListWrapper,
  MeetingListInfo,
  MeetingTime,
  MeetingTitle,
  ButtonContainer,
};
