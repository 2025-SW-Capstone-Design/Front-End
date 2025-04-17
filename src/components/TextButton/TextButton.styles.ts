import styled from '@emotion/styled';

const TextButton = styled.button`
  cursor: pointer;
  ${({ theme }) => theme.text.bodyM_bold};
  color: ${({ theme }) => theme.colors.primary[40]};
  width: auto;
  height: 20px;
  display: flex;
  text-align: center;

  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.primary[30]};
  }
`;

export { TextButton };
