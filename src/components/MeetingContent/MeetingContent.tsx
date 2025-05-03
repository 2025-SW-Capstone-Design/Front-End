import React, { useState } from 'react';
import type { MeetingContentProps } from './MeetingContent.types';
import * as S from './MeetingContent.styles';
import { ReactComponent as Up } from '../../assets/icon/up.svg';
import { ReactComponent as Down } from '../../assets/icon/drop.svg';

function MeetingContent({ contents, width }: MeetingContentProps) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <S.MeetingContentWrapper width={width}>
      <S.MeetingContentHeader onClick={() => setIsOpen(!isOpen)}>
        <S.MeetingContentTitle>
          전체 회의 내용 Text로 확인하기
        </S.MeetingContentTitle>
        <S.ArrowIcon>{isOpen ? <Up /> : <Down />}</S.ArrowIcon>
      </S.MeetingContentHeader>
      {isOpen && (
        <S.ContentContainer>
          {contents.map((content, index) => (
            <S.ContentBox key={index}>
              <S.ContentTime>{content.time}</S.ContentTime>
              <S.ContentInfo>
                <S.Speaker>{content.speaker}</S.Speaker>
                <S.Content>{content.content}</S.Content>
              </S.ContentInfo>
            </S.ContentBox>
          ))}
        </S.ContentContainer>
      )}
    </S.MeetingContentWrapper>
  );
}

export default MeetingContent;
