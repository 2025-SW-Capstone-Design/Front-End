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

  display: flex;
  flex-direction: column;

  width: 600px;
  height: 680px;
  padding: 40px 30px;

  background-color: white;
  outline: 1px solid ${({ theme }) => theme.colors.gray[30]};
  outline-offset: -1px;
  border-radius: 12px;

  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ModalHeader = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const ModalSmallText = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 6px;
`;

const ModalSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

const ModalButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  margin-top: 24px;

  justify-content: flex-end;
  align-items: center;

  gap: 12px;
`;

export {
  ModalBackground,
  ModalWrapper,
  ModalHeader,
  ModalSectionWrapper,
  ModalSmallText,
  ModalButtonWrapper,
};
