import styled from '@emotion/styled';

const VideoWrapper = styled.div<{ selected?: boolean }>`
  position: relative;
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

const VideoSmallNameTag = styled.div`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  bottom: 3%;
  right: 3%;

  padding: 4px 20px;
  border-radius: 36px;
  background: ${(props) => props.theme.colors.gray[60]};

  color: #fff;
  font-size: 20px;
  font-weight: 400;
`;

const VideoFullNameTag = styled.div`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  bottom: 4%;
  left: 5%;

  padding: 8px 20px;
  border-radius: 36px;
  background: ${(props) => props.theme.colors.gray[60]};

  color: #fff;
  font-size: 30px;
  font-weight: 400;
`;

const VideoToggleButton = styled.div<{ left: number }>`
  position: absolute;
  width: fit-content;

  left: ${(props) => props.left}%;
  bottom: 3.55%;

  cursor: pointer;
`;

const VideoLeaveButton = styled.div<{ left: number }>`
  position: absolute;

  left: ${(props) => props.left}%;
  bottom: 3.55%;

  padding: 18px 24px;

  color: #fff;

  font-size: 18px;
  font-weight: 700;

  cursor: pointer;

  border-radius: 28px;
  background: var(--Red, #f1414f);
`;

export {
  VideoWrapper,
  VideoContent,
  VideoFullContent,
  VideoSmallNameTag,
  VideoFullNameTag,
  VideoToggleButton,
  VideoLeaveButton,
};
