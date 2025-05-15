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

  width: 642px;
  height: auto;
  background-color: white;
  outline: 1px solid ${({ theme }) => theme.colors.gray[30]};
  outline-offset: -1px;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
`;

const ModalHeader = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  flex-direction: column;
`;

const ModalTitle = styled.div`
  height: 35px;
  color: black;
  ${({ theme }) => theme.text.titleM_bold};
`;

const ModalSubTitle = styled.div`
  height: 17px;
  color: #aeaeb2;
  ${({ theme }) => theme.text.bodyS_medium};
`;

const ModalButtonContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const ModalDescription = styled.div`
  width: 100%;
  height: 17px;
  color: black;
  ${({ theme }) => theme.text.labelL_light};
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: 12px;
`;

const ModalContainerTitle = styled.div`
  height: 17px;
  color: black;
  ${({ theme }) => theme.text.bodyS_bold};
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  margin-top: auto;
`;

export {
  ModalBackground,
  ModalButtonContainer,
  ModalDescription,
  ModalHeader,
  ModalTitle,
  ModalWrapper,
  ModalSubTitle,
  ModalContainer,
  ModalContainerTitle,
  ButtonWrapper,
};
