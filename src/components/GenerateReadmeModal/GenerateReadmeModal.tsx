import React, { useState } from 'react';
import * as S from './GenerateReadmeModal.styles';
import type { GenerateReadmeModalProps } from './GenerateReadmeModal.types';
import ModalPortal from '../Modal/ModalPortal';
import { generateReadme } from '../../apis/lambda/lambda';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import Button from '../Button/Button';

const GenerateReadmeModal = ({
  onClose,
  setDescription,
}: GenerateReadmeModalProps) => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [teckStack, setTeckStack] = useState('');
  const [implementedFeatures, setImplementedFeatures] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleReadmePortfolio = () => {
    if (!name || !teckStack || !implementedFeatures || !content) {
      alert('모든 항목을 입력해주세요.');
      return;
    }

    setIsLoading(true);
    generateReadme()
      .setData({
        project_name: name,
        project_description: content,
        tech_stack: teckStack,
        implemented_features: implementedFeatures,
      })
      .execute()
      .then((res) => {
        setDescription(res.data.body);
        console.log('Readme generated:', res);
        onClose();
      })
      .catch((err) => {
        console.error('Failed to generate Readme:', err);
        alert('Readme 생성에 실패했습니다.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <ModalPortal>
      <S.ModalBackground onClick={isLoading ? undefined : onClose}>
        <S.ModalWrapper onClick={(e) => e.stopPropagation()}>
          <S.ModalHeader>
            <S.ModalTitle>README 생성하기</S.ModalTitle>
            <S.ModalSubTitle>
              아래 항목을 입력하고, README를 자동 생성해보세요!
            </S.ModalSubTitle>
          </S.ModalHeader>
          <S.ModalContainer>
            <S.ModalContainerTitle>프로젝트 이름</S.ModalContainerTitle>
            <Input
              width="100%"
              placeholder="프로젝트 이름을 입력하세요."
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isLoading}
            />
            <S.ModalContainerTitle>프로젝트 설명</S.ModalContainerTitle>
            <TextArea
              width="100%"
              height="150px"
              placeholder="프로젝트 설명을 입력하세요."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              disabled={isLoading}
            />
            <S.ModalContainerTitle>기술 스택</S.ModalContainerTitle>
            <TextArea
              width="100%"
              height="150px"
              placeholder="기술 스택을 입력하세요."
              value={teckStack}
              onChange={(e) => setTeckStack(e.target.value)}
              disabled={isLoading}
            />
            <S.ModalContainerTitle>기능 구현 목록</S.ModalContainerTitle>
            <TextArea
              width="100%"
              height="150px"
              placeholder="기능 구현 목록을 입력하세요."
              value={implementedFeatures}
              onChange={(e) => setImplementedFeatures(e.target.value)}
              disabled={isLoading}
            />
          </S.ModalContainer>
          <S.ButtonWrapper>
            <Button
              buttonType="secondary"
              onClick={onClose}
              width="120px"
              disabled={isLoading}
            >
              취소
            </Button>
            <Button
              buttonType="tertiary"
              onClick={handleReadmePortfolio}
              width="120px"
              disabled={isLoading}
            >
              {isLoading ? '생성 중...' : '생성하기'}
            </Button>
          </S.ButtonWrapper>
        </S.ModalWrapper>
      </S.ModalBackground>
    </ModalPortal>
  );
};

export default GenerateReadmeModal;
