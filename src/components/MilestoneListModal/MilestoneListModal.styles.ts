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

  width: 678px;
  height: 700px;
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
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const ModalTitle = styled.div`
  height: 35px;
  color: black;
  ${({ theme }) => theme.text.titleM_bold};
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

const MilestoneCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  width: 100%;

  gap: 15px;

  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export {
  ModalBackground,
  ModalWrapper,
  ModalHeader,
  ModalTitle,
  ModalButtonContainer,
  ModalDescription,
  MilestoneCardContainer,
};
