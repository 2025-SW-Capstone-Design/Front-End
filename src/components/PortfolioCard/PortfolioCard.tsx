import React from 'react';
import * as S from './PortfolioCard.styles';
import type { PortfolioCardProps } from './PortfolioCard.types';
import checkbox_blank from '../../assets/icon/checkbox-blank.svg';
import checkbox from '../../assets/icon/checkbox.svg';
import Label from '../Label/Label';

function PortfolioCard({
  title,
  status,
  position,
  isEditing,
  isSelected,
  onSelect,
}: PortfolioCardProps) {
  return (
    <S.PortfolioCardWrapper>
      <S.PortfolioCardHeader>
        <S.PortfolioCardStatusBar>
          <S.PortfolioCardStatus>{status}</S.PortfolioCardStatus>
          {isEditing && (
            <S.PortfolioCardCheckbox onClick={() => onSelect(!isSelected)}>
              <img src={isSelected ? checkbox : checkbox_blank} alt="" />
            </S.PortfolioCardCheckbox>
          )}
        </S.PortfolioCardStatusBar>
        <S.PortfolioCardTitle>{title}</S.PortfolioCardTitle>
      </S.PortfolioCardHeader>
      <S.PortfolioCardContent>
        <S.PortfolioCardContentTitle>
          내가 참여한 직무
        </S.PortfolioCardContentTitle>
        <S.MilestoneCardLabels>
          {position.map((pos, index) => (
            <Label key={index} position={pos} />
          ))}
        </S.MilestoneCardLabels>
      </S.PortfolioCardContent>
      <S.PortfolioCardFooter>
        <S.DueDate>2023.10.01</S.DueDate>
      </S.PortfolioCardFooter>
    </S.PortfolioCardWrapper>
  );
}

export default PortfolioCard;
