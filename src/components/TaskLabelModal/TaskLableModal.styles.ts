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
  height: 606px;
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

const ModalTaskIssueWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`;

const ModalEditWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 16px;
  gap: 12px;
  margin-top: 16px;

  border-radius: 8px;
  background: ${(props) => props.theme.colors.gray[10]};
`;

const ModalEditText = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
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

const ColorPreview = styled.div<{ color: string }>`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background: ${({ color }) => color};
  cursor: pointer;
  border: 1px solid #ccc;
  margin-bottom: 8px;
`;

const Popover = styled.div`
  position: absolute;
  z-index: 2;
`;

const Cover = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

export {
  ModalBackground,
  ModalWrapper,
  ModalHeader,
  ModalSmallText,
  ModalTaskIssueWrapper,
  ModalSectionWrapper,
  ModalEditWrapper,
  ModalEditText,
  ModalButtonWrapper,
  ColorPreview,
  Popover,
  Cover,
};
