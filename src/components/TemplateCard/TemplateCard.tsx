import React from 'react';
import * as S from './TemplateCard.styles';
import type { TemplateCardProps } from './TemplateCard.types';
import IconButton from '../IconButton/IconButton';
import Label from '../Label/Label';
import checkbox_blank from '../../assets/icon/checkbox-blank.svg';
import checkbox from '../../assets/icon/checkbox.svg';

function TemplateCard({
  title,
  position,
  isEditing,
  isSelected,
  onSelect,
}: TemplateCardProps) {
  const handleCheckboxClick = () => {
    onSelect(!isSelected);
  };

  return (
    <S.TemplateCardWrapper>
      <S.TemplateCardHeader>
        <S.TemplateCardTitle>{title}</S.TemplateCardTitle>
        {isEditing && (
          <S.TemplateCardCheckbox onClick={handleCheckboxClick}>
            <img src={isSelected ? checkbox : checkbox_blank} />
          </S.TemplateCardCheckbox>
        )}
      </S.TemplateCardHeader>
      <S.TemplateCardContent>
        <S.TemplateCardContentText>참여 직군</S.TemplateCardContentText>
        <S.TemplateCardLabels>
          {position.map((pos, index) => (
            <Label key={index} position={pos} />
          ))}
        </S.TemplateCardLabels>
      </S.TemplateCardContent>
      <S.ButtonContainer>
        <IconButton buttonType="primary" width="120px;">
          템플릿 쓰기
        </IconButton>
      </S.ButtonContainer>
    </S.TemplateCardWrapper>
  );
}

export default TemplateCard;
