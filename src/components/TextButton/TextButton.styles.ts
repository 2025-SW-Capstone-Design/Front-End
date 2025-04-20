import styled from '@emotion/styled';

const PrimaryTextButton = styled.button`
  cursor: pointer;
  ${({ theme }) => theme.text.bodyM_bold};
  color: ${({ theme }) => theme.colors.primary[40]};
  width: fit-content;
  height: 20px;
  display: flex;
  text-align: center;
  flex-shrink: 0;
  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.primary[30]};
  }
`;

const SecondaryTextButton = styled.button`
  cursor: pointer;
  ${({ theme }) => theme.text.bodyL_bold};
  color: ${({ theme }) => theme.colors.gray[70]};
  width: auto;
  height: 22px;
  display: flex;
  text-align: center;

  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.gray[80]};
  }
`;

export { PrimaryTextButton, SecondaryTextButton };
