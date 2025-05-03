import React, { useState } from 'react';
import * as S from './ImportTemplateModal.styles';
import ModalPortal from '../Modal/ModalPortal';
import IconButton from '../IconButton/IconButton';
import Input from '../Input/Input';
import TemplateCard from '../TemplateCard/TemplateCard';
import pen from '../../assets/icon/pen.svg';
import trash from '../../assets/icon/trash.svg';
import type { PositionType } from '../Label/Label.types';
import Modal from '../Modal/Modal';

function ImportTemplateModal() {
  const [searchTemplate, setSearchTemplate] = useState<string>('');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [templateData, setTemplateData] = useState([
    {
      id: 1,
      title: '프로젝트 템플릿 1',
      position: ['FRONTEND', 'BACKEND', 'DESIGNER', 'MARKETER'],
    },
    {
      id: 2,
      title: '프로젝트 템플릿 2',
      position: ['FULLSTACK', 'MOBILE', 'ANDROID', 'IOS'],
    },
    {
      id: 3,
      title: '프로젝트 템플릿 3',
      position: ['DEVOPS', 'DBA', 'PLANNER', 'PM'],
    },
    {
      id: 4,
      title: '프로젝트 템플릿 4',
      position: ['QA', 'ETC', 'DESIGNER', 'FRONTEND'],
    },
  ]);
  const [selectedTemplates, setSelectedTemplates] = useState<number[]>([]);

  // string[] -> PositionType[] 변환
  const convertToPositionType = (positions: string[]): PositionType[] =>
    positions.filter((pos): pos is PositionType =>
      [
        'NONE',
        'BACKEND',
        'FRONTEND',
        'FULLSTACK',
        'MOBILE',
        'ANDROID',
        'IOS',
        'DEVOPS',
        'DBA',
        'PLANNER',
        'PM',
        'MARKETER',
        'DESIGNER',
        'QA',
        'ETC',
      ].includes(pos),
    );

  const filteredTemplates = templateData.filter((template) =>
    template.title.toLowerCase().includes(searchTemplate.toLowerCase()),
  );

  const handleTemplateSelect = (id: number, isSelected: boolean) => {
    setSelectedTemplates((prev) =>
      isSelected
        ? [...prev, id]
        : prev.filter((templateId) => templateId !== id),
    );
  };

  const handleDeleteButtonClick = () => {
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    setTemplateData((prev) =>
      prev.filter((template) => !selectedTemplates.includes(template.id)),
    );
    setSelectedTemplates([]);
    setIsDeleteModalOpen(false);
  };

  const cancelDelete = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <ModalPortal>
      <S.ModalBackground>
        <S.ModalWrapper>
          <S.ModalHeader>
            <S.ModalTitle>템플릿 가져오기</S.ModalTitle>
            <S.ModalButtonContainer>
              {isEditing ? (
                <>
                  <IconButton
                    buttonType="secondary"
                    width="136px"
                    onClick={() => setIsEditing(false)}
                  >
                    <img src={pen} alt="" />
                    편집 완료
                  </IconButton>
                  <IconButton
                    buttonType="tertiary"
                    width="136px"
                    onClick={handleDeleteButtonClick}
                  >
                    <img src={trash} alt="" />
                    삭제하기
                  </IconButton>
                </>
              ) : (
                <IconButton
                  buttonType="secondary"
                  width="154px"
                  onClick={() => setIsEditing(true)}
                >
                  <img src={pen} alt="" />
                  편집하기
                </IconButton>
              )}
            </S.ModalButtonContainer>
          </S.ModalHeader>
          <S.ModalDescription>
            기존 템플릿을 열람하고 수정할 수 있습니다.
          </S.ModalDescription>
          <S.TemplateName>템플릿 이름</S.TemplateName>
          <Input
            width="100%"
            placeholder="템플릿 이름을 입력하세요."
            value={searchTemplate}
            onChange={(e) => setSearchTemplate(e.target.value)}
          />
          <S.TemplateContainer>
            {filteredTemplates.map((template, index) => (
              <TemplateCard
                key={index}
                title={template.title}
                position={convertToPositionType(template.position)}
                isEditing={isEditing}
                isSelected={selectedTemplates.includes(template.id)}
                onSelect={(isSelected) =>
                  handleTemplateSelect(template.id, isSelected)
                }
              />
            ))}
          </S.TemplateContainer>
        </S.ModalWrapper>
      </S.ModalBackground>
      {isDeleteModalOpen && (
        <Modal
          title="Task 템플릿을 삭제하시겠습니까?"
          leftButtonText="삭제"
          rightButtonText="아니요"
          onLeftButtonClick={confirmDelete}
          onRightButtonClick={cancelDelete}
        />
      )}
    </ModalPortal>
  );
}

export default ImportTemplateModal;
