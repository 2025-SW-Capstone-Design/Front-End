import type { LocalVideoTrack, RemoteVideoTrack } from 'livekit-client';
import * as S from './VideoComponent.styles';
import { useEffect, useRef, useState } from 'react';
import type { ChatRoomMemberResponse } from '../../../apis/meeting/meeting.types';

import CamOn from '../../../assets/meeting/CamOn.svg';
import CamOff from '../../../assets/meeting/CamOff.svg';
import MicOn from '../../../assets/meeting/MicOn.svg';
import MicOff from '../../../assets/meeting/MicOff.svg';
import ShareOn from '../../../assets/meeting/ShareOn.svg';
import ShareOff from '../../../assets/meeting/ShareOff.svg';

interface VideoComponentProps {
  track: LocalVideoTrack | RemoteVideoTrack;
  participantIdentity: string;
  local?: boolean;
  selected?: boolean;
  type?: string;
  chatRoomMembers: ChatRoomMemberResponse[];
  mediaState?: {
    isMicOn: boolean;
    isCameraOn: boolean;
    isScreenSharing: boolean;
  };
  toggleMedia?: (mediaType: 'mic' | 'camera' | 'screen') => void;
  leaveRoom?: () => void;
}

function VideoComponent({
  track,
  participantIdentity,
  type,
  local = false,
  selected = false,
  chatRoomMembers,
  mediaState,
  toggleMedia,
  leaveRoom,
}: VideoComponentProps) {
  const videoEl = useRef<HTMLVideoElement | null>(null);
  const [name, setName] = useState<string>('');

  useEffect(() => {
    const el = videoEl.current;
    if (!el) return;
    track.detach(el);
    track.attach(el);

    return () => {
      track.detach(el);
    };
  }, [track]);

  useEffect(() => {
    if (!participantIdentity || !chatRoomMembers) return;

    if (local) {
      setName(participantIdentity);
    } else {
      const id = Number(participantIdentity[0]);
      const userName = chatRoomMembers[id - 1]?.nickname ?? '';
      setName(userName);
    }
  }, [chatRoomMembers, local, participantIdentity]);

  const renderToggleButton = (
    condition: boolean | undefined,
    onIcon: string,
    offIcon: string,
    mediaType: 'mic' | 'camera' | 'screen',
    leftOffset: number,
  ) => (
    <S.VideoToggleButton
      left={name ? name.length + leftOffset : leftOffset + 3}
      onClick={() => toggleMedia?.(mediaType)}
    >
      <img src={condition ? onIcon : offIcon} alt={mediaType} />
    </S.VideoToggleButton>
  );

  return (
    <S.VideoWrapper selected={selected}>
      {type !== 'Full' ? (
        <>
          <S.VideoContent ref={videoEl} autoPlay muted={local} />
          <S.VideoSmallNameTag>{name}</S.VideoSmallNameTag>
        </>
      ) : (
        <>
          <S.VideoFullContent ref={videoEl} autoPlay muted={local} />
          <S.VideoFullNameTag>{name || 'YOU'}</S.VideoFullNameTag>
          {renderToggleButton(
            mediaState?.isCameraOn,
            CamOn,
            CamOff,
            'camera',
            10,
          )}
          {renderToggleButton(mediaState?.isMicOn, MicOn, MicOff, 'mic', 15)}
          <S.VideoLeaveButton
            left={name ? name.length + 20 : 23}
            onClick={leaveRoom}
          >
            Leave Meeting
          </S.VideoLeaveButton>
          {renderToggleButton(
            !mediaState?.isScreenSharing,
            ShareOn,
            ShareOff,
            'screen',
            33,
          )}
        </>
      )}
    </S.VideoWrapper>
  );
}

export default VideoComponent;
