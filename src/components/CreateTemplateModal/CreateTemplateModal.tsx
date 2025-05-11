import React from 'react';
import * as S from './CreateTemplateModal.styles';
import type { CreateTemplateModalProps } from './CreateTemplateModal.types';
import ModalPortal from '../Modal/ModalPortal';
import TextArea from '../TextArea/TextArea';
import TaskLabel from '../TaskLabel/TaskLabel';
import type { label } from '../../apis/label/label.types';
import Button from '../Button/Button';

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

const CreateTemplateModal = ({
  onClose,
  description,
  type,
  setDescription,
  setType,
  handleCreateTemplate,
}: CreateTemplateModalProps) => {
  return (
    <ModalPortal>
      <S.ModalBackground onClick={onClose}>
        <S.ModalWrapper onClick={(e) => e.stopPropagation()}>
          <S.ModalHeader>
            <S.ModalTitle>템플릿 저장하기</S.ModalTitle>
            <S.ModalSubTitle>
              템플릿 설명과 템플릿 유형을 입력해주세요.
            </S.ModalSubTitle>
          </S.ModalHeader>
          <S.ModalContent>
            <S.ModalContenText>템플릿 유형</S.ModalContenText>
            <S.ModalTemplateTypeList>
              {TemplateLabelList.map((label) => (
                <TaskLabel
                  key={label.labelId}
                  labelInfo={label}
                  isClickable
                  type="taskModal"
                  selectedType={type}
                  onClick={() => setType(label.name)}
                />
              ))}
            </S.ModalTemplateTypeList>
          </S.ModalContent>
          <S.ModalContent>
            <S.ModalContenText>템플릿 설명</S.ModalContenText>
            <TextArea
              width="100%"
              height="150px"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </S.ModalContent>
          <S.ModalTemplateButtonWrapper>
            <Button
              buttonType="secondary"
              width="fit-content"
              onClick={onClose}
            >
              취소
            </Button>
            <Button
              buttonType="primary"
              width="fit-content"
              onClick={handleCreateTemplate}
            >
              템플릿 저장하기
            </Button>
          </S.ModalTemplateButtonWrapper>
        </S.ModalWrapper>
      </S.ModalBackground>
    </ModalPortal>
  );
};

export default CreateTemplateModal;
