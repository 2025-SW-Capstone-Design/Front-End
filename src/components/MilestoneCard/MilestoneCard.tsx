import React from 'react';
import * as S from './MilestoneCard.styles';
import type { MilestoneCardProps } from './MilestoneCard.types';
import Label from '../Label/Label';
import AvatarGroup from '../AvatarGroup/AvatarGroup';
import checkbox_blank from '../../assets/icon/checkbox-blank.svg';
import checkbox from '../../assets/icon/checkbox.svg';

function MilestoneCard({
  title,
  status,
  position,
  isEditing,
  isSelected,
  onSelect,
}: MilestoneCardProps) {
  const handleCheckboxClick = () => {
    onSelect(!isSelected);
  };
  return (
    <S.MilestoneCardWrapper>
      <S.MilestoneCardHeader>
        <S.MilestoneCardStatusBar>
          <S.MilestoneCardStatus>{status}</S.MilestoneCardStatus>
          {isEditing && (
            <S.MilestoneCardCheckbox onClick={handleCheckboxClick}>
              <img src={isSelected ? checkbox : checkbox_blank} />
            </S.MilestoneCardCheckbox>
          )}
        </S.MilestoneCardStatusBar>
        <S.MilestoneCardTitle>{title}</S.MilestoneCardTitle>
      </S.MilestoneCardHeader>
      <S.MilestoneCardContent>
        <S.MilestoneCardContentText>참여 직군</S.MilestoneCardContentText>
        <S.MilestoneCardLabels>
          {position.map((pos, index) => (
            <Label key={index} position={pos} />
          ))}
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
          <S.Date>2024.10.21</S.Date>
          <S.Time>12:0AM</S.Time>
        </S.DueDate>
      </S.MilestoneCardFooter>
    </S.MilestoneCardWrapper>
  );
}

export default MilestoneCard;
