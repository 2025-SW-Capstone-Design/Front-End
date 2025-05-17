import type { LocalVideoTrack, RemoteVideoTrack } from 'livekit-client';
import * as S from './VideoComponent.styles';
import { useEffect, useRef } from 'react';

interface VideoComponentProps {
  track: LocalVideoTrack | RemoteVideoTrack;
  participantIdentity: string;
  local?: boolean;
  selected?: boolean;
  type?: string;
}

function VideoComponent({
  track,
  participantIdentity,
  type,
  local = false,
  selected = false,
}: VideoComponentProps) {
  const videoEl = useRef<HTMLVideoElement | null>(null);
  console.log(participantIdentity);

  useEffect(() => {
    const el = videoEl.current;
    if (!el) return;

    // 먼저 모든 attach 해제
    track.detach(el);

    // 그 다음 재연결
    track.attach(el);

    return () => {
      track.detach(el);
    };
  }, [track]);

  return (
    <>
      {type !== 'Full' ? (
        <S.VideoWrapper selected={selected}>
          <S.VideoContent ref={videoEl} autoPlay muted={local} />
        </S.VideoWrapper>
      ) : (
        <S.VideoWrapper selected={selected}>
          <S.VideoFullContent ref={videoEl} autoPlay muted={local} />
        </S.VideoWrapper>
      )}
    </>
  );
}

export default VideoComponent;
