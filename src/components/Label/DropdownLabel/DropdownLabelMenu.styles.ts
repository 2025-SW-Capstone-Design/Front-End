import styled from '@emotion/styled';

const DropdownLabelWrapper = styled.div`
  position: relative;
  display: flex;
`;

const DropdownLabelMenu = styled.ul`
  position: absolute;
  top: 130%;
  left: 0;
  padding: 10px;
  height: 216px;
  overflow-y: auto;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  z-index: 100;

  scrollbar-width: none; //Firefox에서 스크롤바 숨기기
  -ms-overflow-style: none; // IE에서 스크롤바 숨기기
  &::-webkit-scrollbar {
    display: none; // Chrome, Safari에서 스크롤바 숨기기
  }
`;

const DropdownLabelMenuItem = styled.li`
  margin-bottom: 8px;
  cursor: pointer;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export { DropdownLabelWrapper, DropdownLabelMenu, DropdownLabelMenuItem };
