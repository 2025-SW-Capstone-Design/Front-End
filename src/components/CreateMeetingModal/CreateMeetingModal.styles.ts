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

const ModalButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;

  gap: 8px;
  margin-left: auto;
`;

export {
  ModalBackground,
  ModalWrapper,
  ModalHeader,
  ModalTitle,
  ModalSubTitle,
  ModalContent,
  ModalButtonWrapper,
};
