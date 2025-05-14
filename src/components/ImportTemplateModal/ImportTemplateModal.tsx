import React, { useMemo, useState } from 'react';
import * as S from './ImportTemplateModal.styles';
import ModalPortal from '../Modal/ModalPortal';
import IconButton from '../IconButton/IconButton';
import Input from '../Input/Input';
import TemplateCard from '../TemplateCard/TemplateCard';
import pen from '../../assets/icon/pen.svg';
import trash from '../../assets/icon/trash.svg';
import Modal from '../Modal/Modal';
import type { ImportTemplateModalProps } from './ImportTemplateModal.types';
import { queryClient } from '../../QueryClient';
import type { IssueTemplateResponse } from '../../apis/template/template.types';
import { deleteTemplate, getTemplates } from '../../apis/template/template';
import { useNavigate } from 'react-router-dom';
import { useApiQuery } from '../../apis/config/builder/ApiBuilder';

function ImportTemplateModal({
  onClose,
  teamId,
  projectId,
  modalType,
  setMarkDown,
  setTitle,
}: ImportTemplateModalProps) {
  const navigate = useNavigate();
  const templates = useApiQuery(
    getTemplates(Number(teamId), Number(projectId)),
    ['templates', teamId, projectId],
  );

  const [searchTemplate, setSearchTemplate] = useState<string>('');
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [selectedTemplate, setSelectedTemplate] =
    useState<IssueTemplateResponse | null>(null);

  const filteredTemplates = useMemo(() => {
    if (!templates.data) return [];
    return templates.data.filter((template) =>
      template.title.toLowerCase().includes(searchTemplate.toLowerCase()),
    );
  }, [templates.data, searchTemplate]);

  const handleTemplateSelect = (template: IssueTemplateResponse) => {
    setSelectedTemplate((prev) => (prev === template ? null : template));
  };

  const handleDeleteButtonClick = () => {
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    deleteTemplate(Number(teamId), selectedTemplate?.id as number)
      .execute()
      .then(() => {
        queryClient.invalidateQueries({
          queryKey: ['templates', teamId, projectId],
        });
        alert('템플릿이 삭제되었습니다.');
        navigate(`/team/${teamId}/calendar`);
      })
      .catch((error) => {
        console.error('Error deleting template:', error);
        alert('템플릿 삭제에 실패했습니다.');
      });
    setIsDeleteModalOpen(false);
  };

  const cancelDelete = () => {
    setIsDeleteModalOpen(false);
  };

  const confirmEdit = () => {
    setIsEditModalOpen(false);
    onClose();
    navigate(
      `/team/${teamId}/project/${projectId}/template/${selectedTemplate?.id}`,
    );
  };

  return (
    <ModalPortal>
      <S.ModalBackground onClick={onClose}>
        <S.ModalWrapper onClick={(e) => e.stopPropagation()}>
          <S.ModalHeader>
            <S.ModalTitle>템플릿 가져오기</S.ModalTitle>
            {modalType === 'createAndEdit' && (
              <S.ModalButtonContainer>
                <>
                  <IconButton
                    buttonType="secondary"
                    width="136px"
                    onClick={() => setIsEditModalOpen(true)}
                    disabled={!selectedTemplate}
                  >
                    <img src={pen} alt="" />
                    편집 하기
                  </IconButton>
                  <IconButton
                    buttonType="tertiary"
                    width="136px"
                    onClick={handleDeleteButtonClick}
                    disabled={!selectedTemplate}
                  >
                    <img src={trash} alt="" />
                    삭제하기
                  </IconButton>
                </>
              </S.ModalButtonContainer>
            )}
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
            {filteredTemplates.map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
                isSelected={selectedTemplate === template}
                onSelect={() => handleTemplateSelect(template)}
                modalType={modalType}
                onClose={onClose}
                setMarkDown={setMarkDown}
                setTitle={setTitle}
              />
            ))}
          </S.TemplateContainer>
        </S.ModalWrapper>
      </S.ModalBackground>
      {isDeleteModalOpen && (
        <Modal
          title="Task 템플릿을 삭제하시겠습니까?"
          leftButtonText="아니요"
          rightButtonText="삭제"
          onRightButtonClick={confirmDelete}
          onLeftButtonClick={cancelDelete}
        />
      )}
      {isEditModalOpen && (
        <Modal
          title="Task 템플릿을 수정하시겠습니까?"
          leftButtonText="아니요"
          rightButtonText="수정"
          onRightButtonClick={confirmEdit}
          onLeftButtonClick={() => setIsEditModalOpen(false)}
        />
      )}
    </ModalPortal>
  );
}

export default ImportTemplateModal;
