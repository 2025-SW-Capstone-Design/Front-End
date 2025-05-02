import React, { useState } from 'react';
import * as S from './Card.styles';
import type { MilestoneCardProps } from './Card.types';
import Label from '../Label/Label';
import AvatarGroup from '../AvatarGroup/AvatarGroup';
import TextIconButton from '../TextIconButton/TextIconButton';
import { ReactComponent as arrow_right_small } from '../../assets/icon/arrow_right_small.svg';

function MilestoneCard({ cardType }: MilestoneCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <S.MilestoneCardContainer onClick={() => setIsOpen(!isOpen)}>
      <S.MilestoneCardHeader>
        <S.MilestoneCardStatus>진행전</S.MilestoneCardStatus>
        <S.MilestoneCardTitle>로그인 페이지 UI 개선</S.MilestoneCardTitle>
      </S.MilestoneCardHeader>
      {isOpen && (
        <>
          <S.MilestoneCardContent>
            <S.MilestoneCardContentText>참여 직군</S.MilestoneCardContentText>
            <S.MilestoneCardLabels>
              <Label position="FRONTEND" />
              <Label position="BACKEND" />
              <Label position="BACKEND" />
              <Label position="BACKEND" />
              <Label position="DESIGNER" />
            </S.MilestoneCardLabels>
          </S.MilestoneCardContent>
          <S.MilestoneCardFooter>
            <S.MemberAvatars>
              <AvatarGroup
                members={[
                  {
                    name: '이정환 ',
                    position: 'DESIGNER',
                  },
                  {
                    name: '이정환 ',
                    position: 'DESIGNER',
                  },
                  {
                    name: '이정환 ',
                    position: 'DESIGNER',
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
          </S.MilestoneCardFooter>
        </>
      )}
    </S.MilestoneCardContainer>
  );
}

export default MilestoneCard;
