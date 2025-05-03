import styled from '@emotion/styled';
import type { MeetingContentStylesProps } from './MeetingContent.types';

const MeetingContentWrapper = styled.div<MeetingContentStylesProps>`
  width: ${({ width }) => width || '714px'};
  min-height: 78px;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 12px;
  outline: 1px solid ${({ theme }) => theme.colors.gray[20]};
  outline-offset: -1px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const MeetingContentHeader = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MeetingContentTitle = styled.div`
  height: 30px;
  color: black;
  ${({ theme }) => theme.text.titleS_bold};
`;

const ArrowIcon = styled.div`
  width: 24px;
  height: 24px;
  svg {
    fill: black;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  max-height: 320px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 32px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) =>
      theme.colors.gray[60]}; /* 스크롤바 색상 */
    border-radius: 16px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.gray[10]};
    border-radius: 16px;
  }

  &::-webkit-scrollbar-track:hover {
    background-color: ${({ theme }) => theme.colors.gray[20]};
  }
`;

const ContentBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;

  &:hover {
    background: ${({ theme }) => theme.colors.gray[10]};
    outline: 1px solid ${({ theme }) => theme.colors.gray[20]};
    outline-offset: -1px;
  }
`;

const ContentTime = styled.div`
  width: fit-content;
  height: 17px;
  color: ${({ theme }) => theme.colors.gray[80]};
  ${({ theme }) => theme.text.labelL_medium};
`;
const ContentInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  height: auto;
  gap: 8px;
`;
const Speaker = styled.div`
  width: 70px;
  height: 22px;
  color: ${({ theme }) => theme.colors.gray[90]};
  ${({ theme }) => theme.text.bodyL_bold};
  display: flex;
  align-items: flex-start;
`;
const Content = styled.div`
  width: 100%;
  height: auto;
  color: ${({ theme }) => theme.colors.gray[90]};
  ${({ theme }) => theme.text.bodyM_medium};
`;

export {
  MeetingContentWrapper,
  MeetingContentHeader,
  MeetingContentTitle,
  ArrowIcon,
  ContentContainer,
  ContentBox,
  ContentTime,
  ContentInfo,
  Speaker,
  Content,
};
