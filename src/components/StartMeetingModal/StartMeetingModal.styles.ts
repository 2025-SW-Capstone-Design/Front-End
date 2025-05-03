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

  width: 473px;
  height: 653px;
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
  height: 63px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ModalTitle = styled.div`
  width: 100%;
  height: 35px;
  color: black;
  ${({ theme }) => theme.text.titleM_bold};
`;

const ModalSubtitle = styled.div`
  width: 100%;
  height: 20px;
  color: black;
  ${({ theme }) => theme.text.bodyM_light};
`;

const MeetingInfo = styled.div`
  width: 100%;
  height: 69px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MeetingName = styled.div`
  width: 100%;
  height: 17px;
  color: black;
  ${({ theme }) => theme.text.bodyS_bold};
`;

const MeetingTimeWrapper = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MeetingTimeTitle = styled.div`
  width: 100%;
  height: 17px;
  color: black;
  ${({ theme }) => theme.text.bodyS_bold};
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  margin-top: auto;
  justify-content: flex-end;
`;

export {
  ModalBackground,
  ModalWrapper,
  ModalHeader,
  ModalTitle,
  ModalSubtitle,
  MeetingInfo,
  MeetingName,
  MeetingTimeWrapper,
  MeetingTimeTitle,
  ButtonContainer,
};
