import styled from '@emotion/styled';

const TextButton = styled.button`
  cursor: pointer;
  ${({ theme }) => theme.text.bodyM_bold};
  color: ${({ theme }) => theme.colors.primary[40]};
  line-height: 20px;
  width: auto;
  height: auto;

  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.primary[30]};
  }
`;

export { TextButton };
