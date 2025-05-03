import styled from '@emotion/styled';
import type { MeetingKeywordListStylesProps } from './MeetingKeywordList.types';
import exp from 'constants';

const MeetingKeywordListWrapper = styled.div<MeetingKeywordListStylesProps>`
  width: ${({ width }) => width || '714px'};
  height: 92px;
  padding: 24px 32px;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  outline: 1px solid ${({ theme }) => theme.colors.gray[20]};
  outline-offset: -1px;
`;

const MeetingKeywordListInfo = styled.div`
  width: auto;
  height: 30px;
  display: flex;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
`;

const RankingWrapper = styled.div`
  width: fit-content;
  display: flex;
  height: 27px;
  align-items: center;
  gap: 2px;
`;

const Ranking = styled.div`
  width: fit-content;
  color: ${({ theme }) => theme.colors.primary[40]};
  ${({ theme }) => theme.text.bodyXL_bold};
`;

const RankingText = styled.div`
  width: fit-content;
  color: ${({ theme }) => theme.colors.gray[80]};
  ${({ theme }) => theme.text.bodyXL_bold};
`;

const Keyword = styled.div<{ ranking?: number }>`
  width: fit-content;
  color: ${({ theme, ranking }) => (ranking ? 'black' : theme.colors.gray[80])};

  ${({ theme }) => theme.text.titleS_bold};
  display: flex;
  align-items: center;
`;

export {
  MeetingKeywordListWrapper,
  MeetingKeywordListInfo,
  RankingWrapper,
  Ranking,
  RankingText,
  Keyword,
};
