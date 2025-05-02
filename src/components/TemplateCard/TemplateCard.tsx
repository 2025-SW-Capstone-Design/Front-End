import React from 'react';
import * as S from './TemplateCard.styles';
import type { TemplateCardProps } from './TemplateCard.types';
import IconButton from '../IconButton/IconButton';
import Label from '../Label/Label';

function TemplateCard({ title, position }: TemplateCardProps) {
  return (
    <S.TemplateCardWrapper>
      <S.TemplateCardTitle>{title}</S.TemplateCardTitle>
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
