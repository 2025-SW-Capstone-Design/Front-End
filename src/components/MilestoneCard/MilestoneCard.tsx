import React from 'react';
import * as S from './MilestoneCard.styles';
import type { MilestoneCardProps } from './MilestoneCard.types';
import AvatarGroup from '../AvatarGroup/AvatarGroup';
import checkbox_blank from '../../assets/icon/checkbox-blank.svg';
import checkbox from '../../assets/icon/checkbox.svg';
import { formatKoreanDateTime } from '../../utils/formatter/timeFomatter';

function MilestoneCard({
  milestone,
  isSelected,
  selectedId,
  onSelect,
}: MilestoneCardProps) {
  const handleCheckboxClick = () => {
    onSelect();
  };

  const selectedStatus = (status: string) => {
    switch (status) {
      case 'NOT_STARTED':
        return '진행전';
      case 'IN_PROGRESS':
        return '진행중';
      case 'DONE':
        return '완료';
    }
  };

  return (
    <S.MilestoneCardWrapper>
      <S.MilestoneCardHeader>
        <S.MilestoneCardStatusBar>
          <S.MilestoneCardStatus>
            {selectedStatus(milestone.status)}
          </S.MilestoneCardStatus>
          {(selectedId === null || isSelected) && (
            <S.MilestoneCardCheckbox onClick={handleCheckboxClick}>
              <img src={isSelected ? checkbox : checkbox_blank} />
            </S.MilestoneCardCheckbox>
          )}
        </S.MilestoneCardStatusBar>
        <S.MilestoneCardTitle>{milestone.title}</S.MilestoneCardTitle>
      </S.MilestoneCardHeader>
      <S.MilestoneCardDescription>
        {milestone.description}
      </S.MilestoneCardDescription>
      <S.MilestoneCardFooter>
        <S.MemberAvatars>
          <AvatarGroup members={[{ name: milestone.creator }]} />
        </S.MemberAvatars>
        <S.DueDate>
          <S.Date>
            {'시작일: ' + formatKoreanDateTime(milestone.startDate)}
          </S.Date>
          <S.Date>
            {'마감일: ' + formatKoreanDateTime(milestone.dueDate)}
          </S.Date>
        </S.DueDate>
      </S.MilestoneCardFooter>
    </S.MilestoneCardWrapper>
  );
}

export default MilestoneCard;
