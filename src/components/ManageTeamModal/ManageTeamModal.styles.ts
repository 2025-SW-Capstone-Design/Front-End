import styled from '@emotion/styled';

const ModalBackground = styled.div`
  position: fixed;
  z-index: 900;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalWrapper = styled.div`
  position: fixed;
  z-index: 1001;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 484px;
  height: auto;
  background-color: #fff;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ModalHeader = styled.div`
  width: 100%;
  height: 66px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
`;

const ModalTitle = styled.div`
  height: 35px;
  ${({ theme }) => theme.text.titleM_bold};
  color: black;
`;
const ModalSubTitle = styled.div`
  height: 17px;
  ${({ theme }) => theme.text.bodyS_medium};
  color: ${({ theme }) => theme.colors.gray[50]};
`;

const ModalContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 16px;

  ${({ theme }) => theme.text.bodyS_bold};
  color: black;
`;

const InputContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  gap: 8px;
`;

const InputLabel = styled.div`
  width: 100%;
  height: 17px;
  display: flex;
`;

const EmailTagContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
  overflow-x: auto;

  scrollbar-width: none; //Firefox에서 스크롤바 숨기기
  -ms-overflow-style: none; // IE에서 스크롤바 숨기기
  &::-webkit-scrollbar {
    display: none; // Chrome, Safari에서 스크롤바 숨기기
  }
`;

const ModifyPositionContainer = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
`;

const ModifyPositionLabel = styled.div`
  width: 100%;
  height: 17px;
  display: flex;
`;

const ModifyPositionContent = styled.div`
  width: 100%;
  padding-top: 2px;
  height: 147px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
  overflow-y: auto;
  scrollbar-width: none; //Firefox에서 스크롤바 숨기기
  -ms-overflow-style: none; // IE에서 스크롤바 숨기기
  &::-webkit-scrollbar {
    display: none; // Chrome, Safari에서 스크롤바 숨기기
  }
`;

const ModalFooter = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
`;

export {
  ModalBackground,
  ModalFooter,
  ModalHeader,
  ModalSubTitle,
  ModalTitle,
  ModalWrapper,
  ModalContent,
  InputContainer,
  InputLabel,
  EmailTagContainer,
  ModifyPositionContainer,
  ModifyPositionLabel,
  ModifyPositionContent,
};
