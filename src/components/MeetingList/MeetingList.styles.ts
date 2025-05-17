import styled from '@emotion/styled';
import type { MeetingListStylesProps } from './MeetingList.types';

const MeetingListWrapper = styled.div<MeetingListStylesProps>`
  width: ${({ width }) => width || '633px'};
  padding: 32px 24px;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: white;

  border: 2px solid ${(props) => props.theme.colors.gray[40]};

  &:hover,
  &:active {
    background: ${({ theme }) => theme.colors.gray[10]};
    outline: 1px solid ${({ theme }) => theme.colors.gray[20]};
    outline-offset: -1px;
  }
`;

const MeetingListInfo = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MeetingTitle = styled.div`
  width: auto;
  color: black;
  font-size: 24px;
  font-weight: 700;
`;

const ButtonContainer = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  gap: 12px;
`;

export { MeetingListWrapper, MeetingListInfo, MeetingTitle, ButtonContainer };
