import React from 'react';
import * as S from './MeetingCard.styles';
import type { MeetingCardProps } from './MeetingCard.types';
import AvatarGroup from '../AvatarGroup/AvatarGroup';
import checkbox_blank from '../../assets/icon/checkbox-blank.svg';
import checkbox from '../../assets/icon/checkbox.svg';

function MeetingCard({
  title,
  meetingTime,
  keywords,
  isEditing,
  isSelected,
  onSelect,
}: MeetingCardProps) {
  return (
    <S.MeetingCardWrapper>
      <S.MeetingCardHeader>
        <S.MeetingTopBar>
          <S.MeetingTime>{meetingTime}</S.MeetingTime>
          {isEditing && (
            <S.MeetingCheckbox onClick={() => onSelect(!isSelected)}>
              <img src={isSelected ? checkbox : checkbox_blank} />
            </S.MeetingCheckbox>
          )}
        </S.MeetingTopBar>
        <S.MeetingTitle>{title}</S.MeetingTitle>
      </S.MeetingCardHeader>
      <S.MeetingCardContent>
        <S.MeetingCardContentText>
          Ai가 직접 요약한 주요 키워드
        </S.MeetingCardContentText>
        <S.KeywordContainer>
          {keywords.map((keyword, index) => (
            <S.Keyword key={index}>{keyword}</S.Keyword>
          ))}
        </S.KeywordContainer>
      </S.MeetingCardContent>
      <S.MeetingCardFooter>
        <S.MemberAvatars>
          <AvatarGroup
            members={[
              {
                name: '이정환 ',
                position: 'DESIGNER',
              },
              {
                name: '차영건 ',
                position: 'FRONTEND',
              },
              {
                name: '차차핑',
                position: 'DEVOPS',
              },
              {
                name: '차차차',
                position: 'BACKEND',
              },
              {
                name: '정연재',
                position: 'FULLSTACK',
              },
              {
                name: '정순재',
                position: 'BACKEND',
              },
            ]}
          />
        </S.MemberAvatars>
        <S.DueDate>
          <S.Date>2023.10.10</S.Date>
          <S.Time>오후 2:00</S.Time>
        </S.DueDate>
      </S.MeetingCardFooter>
    </S.MeetingCardWrapper>
  );
}

export default MeetingCard;
