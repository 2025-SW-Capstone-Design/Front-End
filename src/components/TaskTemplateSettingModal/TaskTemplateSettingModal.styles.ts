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

  width: 550px;
  height: 440px;
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
  height: 66px;
  display: flex;
  flex-direction: column;
  gap: 14px;
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

const ModalContent = styled.div`
  width: 100%;
  height: 302px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LabelContainer = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const LabelTitle = styled.div`
  height: 17px;
  color: black;
  ${({ theme }) => theme.text.bodyS_bold};
`;

const Labels = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 2px;
  gap: 12px;
  border: none;

  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
`;

const MilestoneContainer = styled.div`
  width: 100%;
  height: 73px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const MilestoneTitle = styled.div`
  height: 17px;
  color: black;
  ${({ theme }) => theme.text.bodyS_bold};
`;

const ButtonContainer = styled.div`
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
  ModalWrapper,
  ModalHeader,
  ModalTitle,
  ModalSubTitle,
  LabelContainer,
  LabelTitle,
  Labels,
  MilestoneContainer,
  MilestoneTitle,
  ModalContent,
  ButtonContainer,
};
