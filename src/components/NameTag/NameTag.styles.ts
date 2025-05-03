import styled from '@emotion/styled';
import { css } from '@emotion/react';

const NameTagLayout = css`
  height: 23px;
  width: fit-content;
  flex-shrink: 0;
  padding: 4px 8px;
  border-radius: 4px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

const NameTagWrapper = styled.div`
  ${NameTagLayout};
  display: flex;
  width: fit-content;
  justify-content: flex-start;
  background: ${({ theme }) => theme.colors.gray[90]};
  color: white;
`;

const Name = styled.div`
  height: 15px;
  white-space: nowrap;
  ${({ theme }) => theme.text.labelM_bold};
`;
const Divider = styled.div`
  width: 8px;
  display: flex;
  align-self: center;
  transform: rotate(90deg);
  outline: 1px solid white;
  outline-offset: -0.5px;
`;

const Position = styled.div`
  height: 12px;
  ${({ theme }) => theme.text.labeS_bold};
`;

export { NameTagWrapper, Name, Divider, Position };
