import React, { useState } from 'react';
import * as S from './Card.styles';
import type { CardProps } from './Card.types';
import Label from '../Label/Label';
import AvatarGroup from '../AvatarGroup/AvatarGroup';
import TextIconButton from '../TextIconButton/TextIconButton';
import { ReactComponent as arrow_right_small } from '../../assets/icon/arrow_right_small.svg';

function Card({ cardType }: CardProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <S.CardContainer onClick={() => setIsOpen(!isOpen)}>
      <S.CardHeader>
        <S.CardStatus>진행전</S.CardStatus>
        <S.CardTitle>로그인 페이지 UI 개선</S.CardTitle>
      </S.CardHeader>
      {isOpen && (
        <>
          <S.CardContent>
            <S.CardContentText>참여 직군</S.CardContentText>
            <S.CardLabels>
              <Label position="FRONTEND" />
              <Label position="BACKEND" />
              <Label position="BACKEND" />
              <Label position="BACKEND" />
              <Label position="DESIGNER" />
            </S.CardLabels>
          </S.CardContent>
          <S.CardFooter>
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
              <S.Date>2025.05.03</S.Date>
              <S.Time>2:00AM</S.Time>
            </S.DueDate>
            {cardType === 'milestone' && (
              <TextIconButton
                buttonType="primary"
                icon={arrow_right_small}
                iconPosition="right"
              >
                Task 보러가기
              </TextIconButton>
            )}
          </S.CardFooter>
        </>
      )}
    </S.CardContainer>
  );
}

export default Card;
