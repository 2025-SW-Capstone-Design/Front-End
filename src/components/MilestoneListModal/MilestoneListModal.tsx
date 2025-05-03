import React, { useState } from 'react';
import * as S from './MilestoneListModal.styles';
import ModalPortal from '../Modal/ModalPortal';
import IconButton from '../IconButton/IconButton';
import Input from '../Input/Input';
import pen from '../../assets/icon/pen.svg';
import trash from '../../assets/icon/trash.svg';
import MilestoneCard from '../MilestoneCard/MilestoneCard';
import type { PositionType } from '../Label/Label.types';

import Modal from '../Modal/Modal';

function MilestoneListModal() {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [milestoneCardData, setMilestoneCardData] = useState([
    {
      id: 1,
      title: '프로젝트 템플릿 1',
      position: ['FRONTEND', 'BACKEND', 'DESIGNER', 'MARKETER'],
      status: '진행중',
    },
    {
      id: 2,
      title: '프로젝트 템플릿 2',
      position: ['FULLSTACK', 'MOBILE', 'ANDROID', 'IOS'],
      status: '진행전',
    },
    {
      id: 3,
      title: '프로젝트 템플릿 3',
      position: ['DEVOPS', 'DBA', 'PLANNER', 'PM'],
      status: '진행중',
    },
    {
      id: 4,
      title: '프로젝트 템플릿 4',
      position: ['QA', 'ETC', 'DESIGNER', 'FRONTEND'],
      status: '진행전',
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

  const filteredTemplates = milestoneCardData.filter((template) =>
    template.title.toLowerCase().includes(search.toLowerCase()),
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
    setMilestoneCardData((prev) =>
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
            <S.ModalTitle>마일스톤 목록</S.ModalTitle>
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
            기존 마일스톤을 열람하고 수정할 수 있습니다
          </S.ModalDescription>
          <Input
            width="100%"
            placeholder="템플릿 이름을 입력하세요."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <S.MilestoneCardContainer>
            {filteredTemplates.map((template, index) => (
              <MilestoneCard
                key={index}
                title={template.title}
                position={convertToPositionType(template.position)}
                status={template.status}
                isEditing={isEditing}
                isSelected={selectedTemplates.includes(template.id)}
                onSelect={(isSelected) =>
                  handleTemplateSelect(template.id, isSelected)
                }
              />
            ))}
          </S.MilestoneCardContainer>
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

export default MilestoneListModal;
