import React from 'react';
import * as S from './TemplateCard.styles';
import type { TemplateCardProps } from './TemplateCard.types';
import IconButton from '../IconButton/IconButton';
import checkbox_blank from '../../assets/icon/checkbox-blank.svg';
import checkbox from '../../assets/icon/checkbox.svg';
import type { label } from '../../apis/label/label.types';
import TaskLabel from '../TaskLabel/TaskLabel';
import { getTemplateDetail } from '../../apis/template/template';
import { useParams } from 'react-router-dom';
import type { IssueTemplateResponse } from '../../apis/template/template.types';

const TemplateLabelList: label[] = [
  {
    labelId: 1,
    name: 'Feature',
    color: 'FF5733',
    description: 'New feature or enhancement',
  },
  {
    labelId: 2,
    name: 'Refactor',
    color: '33FF57',
    description: 'Code refactoring or improvement',
  },
  {
    labelId: 3,
    name: 'Fix',
    color: '3357FF',
    description: 'Bug fix or issue resolution',
  },
  {
    labelId: 4,
    name: 'Custom',
    color: 'FF33A1',
    description: 'Custom template type',
  },
];

function TemplateCard({
  template,
  isSelected,
  onSelect,
  modalType,
  onClose,
  setMarkDown,
  setTitle,
}: TemplateCardProps) {
  const { teamId } = useParams();

  const handleCardClick = () => {
    onSelect();
  };

  const labelInfo = TemplateLabelList.find(
    (label) => label.name === template.type,
  );

  const fetchTemplateDetail = async () => {
    return getTemplateDetail(Number(teamId), Number(template.id)).execute();
  };

  const selectTemplate = async () => {
    try {
      const response = await fetchTemplateDetail();
      const data: IssueTemplateResponse = response.data;
      setMarkDown?.(data.content);
      setTitle?.(data.title);
      onClose?.();
    } catch (error) {
      console.error('Failed to fetch template detail:', error);
    }
  };

  return (
    <S.TemplateCardWrapper onClick={handleCardClick}>
      <S.TemplateCardHeader>
        <S.TemplateCardTitle>{template.title}</S.TemplateCardTitle>
        {modalType === 'createAndEdit' && (
          <S.TemplateCardCheckbox>
            <img src={isSelected ? checkbox : checkbox_blank} alt="checkbox" />
          </S.TemplateCardCheckbox>
        )}
      </S.TemplateCardHeader>
      {labelInfo && <TaskLabel labelInfo={labelInfo} />}
      <S.TemplateDescription>{template.description}</S.TemplateDescription>
      {modalType !== 'createAndEdit' && (
        <S.ButtonContainer>
          <IconButton
            buttonType="primary"
            width="120px;"
            onClick={selectTemplate}
          >
            템플릿 쓰기
          </IconButton>
        </S.ButtonContainer>
      )}
    </S.TemplateCardWrapper>
  );
}

export default TemplateCard;
