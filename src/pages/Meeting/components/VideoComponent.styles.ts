import styled from '@emotion/styled';

const VideoWrapper = styled.div<{ selected?: boolean }>`
  border: ${({ selected }) => (selected ? '3px solid #00aaff' : 'none')};
  display: flex;
  flex-direction: column;
  align-items: center;

  flex-shrink: 0;
  border-radius: 16px;
  background: var(--Gray-30, #e9eff4);
`;

const VideoContent = styled.video`
  width: 15vw;
  height: 19vh;
  border-radius: 16px;
  object-fit: fill;
`;

const VideoFullContent = styled.video`
  width: fit-content;
  height: 63vh;
  border-radius: 16px;
  object-fit: fill;
`;

export { VideoWrapper, VideoContent, VideoFullContent };
