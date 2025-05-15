import React, { useState } from 'react';
import * as S from './GeneratePortfolioModal.styles';
import type { GeneratePortfolioModalProps } from './GeneratePortfolioModal.types';
import ModalPortal from '../Modal/ModalPortal';
import { generatePortfolio } from '../../apis/lambda/lambda';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import Button from '../Button/Button';

const GeneratePortfolioModal = ({
  onClose,
  setDescription,
}: GeneratePortfolioModalProps) => {
  const [name, setName] = useState('');
  const [teckStack, setTeckStack] = useState('');
  const [implementedFeatures, setImplementedFeatures] = useState('');
  const [isLoading, setIsLoading] = useState(false); // ✅ 추가

  const handleGeneratePortfolio = () => {
    if (!name || !teckStack || !implementedFeatures) {
      alert('모든 항목을 입력해주세요.');
      return;
    }

    setIsLoading(true);
    generatePortfolio()
      .setData({
        name,
        tech_stack: teckStack,
        implemented_features: implementedFeatures,
      })
      .execute()
      .then((res) => {
        setDescription(res.data.body);
        console.log('Portfolio generated:', res);
        onClose();
      })
      .catch((err) => {
        console.error('Failed to generate portfolio:', err);
        alert('포트폴리오 생성에 실패했습니다.');
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
            <S.ModalTitle>포트폴리오 생성하기</S.ModalTitle>
            <S.ModalSubTitle>
              아래 항목을 입력하고, 포트폴리오를 자동 생성해보세요!
            </S.ModalSubTitle>
          </S.ModalHeader>
          <S.ModalContainer>
            <S.ModalContainerTitle>이름</S.ModalContainerTitle>
            <Input
              width="100%"
              placeholder="이름을 입력하세요."
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              onClick={handleGeneratePortfolio}
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

export default GeneratePortfolioModal;
