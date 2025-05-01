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

  width: 372px;
  height: 200px;
  background-color: #f9f9f9;
  outline: 1px solid ${({ theme }) => theme.colors.gray[30]};
  outline-offset: -1px;
  border-radius: 8px;
  padding: 56px 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ModalTitle = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.text.bodyM_bold};
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export { ModalBackground, ModalWrapper, ModalTitle, ButtonContainer };
