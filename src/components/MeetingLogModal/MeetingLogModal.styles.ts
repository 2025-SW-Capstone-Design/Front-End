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

  width: 50vw;

  background-color: white;
  outline: 1px solid ${({ theme }) => theme.colors.gray[30]};
  outline-offset: -1px;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const ModalTitle = styled.div`
  color: black;
  font-size: 40px;
  font-weight: 700;
`;

const ModalSubTitle = styled.div`
  color: #aeaeb2;
  font-size: 20px;
`;

const ModalContent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ModalPreviewer = styled.div`
  width: 100%;
  height: 600px;
  padding: 24px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.gray[10]};
  border: 1px solid ${({ theme }) => theme.colors.gray[30]};
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.05);
`;

const MeetingLogTitleInput = styled.input`
  font-size: 32px;
  font-weight: 800;
  color: ${(props) => props.theme.colors.gray[70]};

  border: none;
  padding: 12px 0px;
`;

const ModalButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;

  padding: 12px 0;

  gap: 12px;
  margin-left: auto;

  align-items: center;
`;

export {
  ModalBackground,
  ModalContent,
  ModalHeader,
  ModalSubTitle,
  ModalTitle,
  ModalWrapper,
  ModalPreviewer,
  MeetingLogTitleInput,
  ModalButtonWrapper,
};
