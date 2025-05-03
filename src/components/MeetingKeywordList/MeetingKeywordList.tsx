import React from 'react';
import * as S from './MeetingKeywordList.styles';
import type { MeetingKeywordListProps } from './MeetingKeywordList.types';
import Button from '../Button/Button';

function MeetingKeywordList({ ranking, keyword }: MeetingKeywordListProps) {
  return (
    <S.MeetingKeywordListWrapper>
      <S.MeetingKeywordListInfo>
        {ranking && (
          <S.RankingWrapper>
            <S.Ranking>{ranking}</S.Ranking>
            <S.RankingText>위</S.RankingText>
          </S.RankingWrapper>
        )}
        <S.Keyword ranking={ranking}>{keyword}</S.Keyword>
      </S.MeetingKeywordListInfo>
      <Button buttonType="secondary" width="128px">
        Task 만들기
      </Button>
    </S.MeetingKeywordListWrapper>
  );
}

export default MeetingKeywordList;
