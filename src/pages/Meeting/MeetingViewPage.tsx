import type {
  LocalVideoTrack,
  RemoteParticipant,
  RemoteTrack,
  RemoteTrackPublication,
} from 'livekit-client';
import { RoomEvent, Room } from 'livekit-client';
import './MeetingViewPage.css';
import { useCallback, useEffect, useState } from 'react';
import VideoComponent from './components/VideoComponent';
import AudioComponent from './components/AudioComponent';
import { useParams } from 'react-router-dom';
import { issuedToken } from '../../apis/meeting/meeting';

// 타입 정의 부분
type TrackInfo = {
  trackPublication: RemoteTrackPublication;
  participantIdentity: string;
};

const MeetingViewPage = () => {
  const { teamId, roomName } = useParams();
  const [room, setRoom] = useState<Room | undefined>(undefined);
  const [localTrack, setLocalTrack] = useState<LocalVideoTrack | undefined>(
    undefined,
  );
  const [remoteTracks, setRemoteTracks] = useState<TrackInfo[]>([]);
  const [participantName] = useState(
    `Participant${Math.floor(Math.random() * 100)}`,
  );
  const [mediaState, setMediaState] = useState({
    isMicOn: true,
    isCameraOn: true,
    isScreenSharing: false,
  });

  // 원격 트랙 구독 이벤트 핸들러
  const handleTrackSubscribed = useCallback(
    (
      _track: RemoteTrack,
      publication: RemoteTrackPublication,
      participant: RemoteParticipant,
    ) => {
      setRemoteTracks((prev) => [
        ...prev,
        {
          trackPublication: publication,
          participantIdentity: participant.identity,
        },
      ]);
    },
    [],
  );

  // 원격 트랙 구독 취소 이벤트 핸들러
  const handleTrackUnsubscribed = useCallback(
    (_track: RemoteTrack, publication: RemoteTrackPublication) => {
      setRemoteTracks((prev) =>
        prev.filter(
          (track) => track.trackPublication.trackSid !== publication.trackSid,
        ),
      );
    },
    [],
  );

  // 토큰 발급 및 룸 연결
  const connectToRoom = useCallback(
    async (token: string) => {
      const newRoom = new Room();
      setRoom(newRoom);

      // 이벤트 핸들러 등록
      newRoom.on(RoomEvent.TrackSubscribed, handleTrackSubscribed);
      newRoom.on(RoomEvent.TrackUnsubscribed, handleTrackUnsubscribed);

      try {
        await newRoom.connect(
          process.env.REACT_APP_LIVEKIT_URL as string,
          token,
        );
        await newRoom.localParticipant.enableCameraAndMicrophone();

        const videoTrack = newRoom.localParticipant.videoTrackPublications
          .values()
          .next().value?.videoTrack;
        setLocalTrack(videoTrack);
      } catch (error) {
        console.log(
          'There was an error connecting to the room:',
          (error as Error).message,
        );
        await leaveRoom();
      }
    },
    [handleTrackSubscribed, handleTrackUnsubscribed],
  );

  // 토큰 발급 로직
  const fetchTokenAndJoin = useCallback(async () => {
    if (!teamId || !roomName) return;

    try {
      const response = await issuedToken(Number(teamId))
        .setData({ roomName: roomName as string })
        .execute();

      await connectToRoom(response.data.token);
    } catch (err) {
      console.error('Error fetching token:', err);
    }
  }, [teamId, roomName, connectToRoom]);

  // 초기 연결 설정
  useEffect(() => {
    fetchTokenAndJoin();

    // 컴포넌트 언마운트 시 방 나가기
    return () => {
      leaveRoom();
    };
  }, [fetchTokenAndJoin]);

  // 방 나가기 기능
  const leaveRoom = async () => {
    if (room) {
      await room.disconnect();
      setRoom(undefined);
      setLocalTrack(undefined);
      setRemoteTracks([]);
      setMediaState({
        isMicOn: true,
        isCameraOn: true,
        isScreenSharing: false,
      });
    }
  };

  // 미디어 제어 함수들
  const toggleMedia = async (mediaType: 'mic' | 'camera' | 'screen') => {
    if (!room) return;

    try {
      let updatedState: Partial<typeof mediaState>;

      switch (mediaType) {
        case 'mic':
          updatedState = { isMicOn: !mediaState.isMicOn };
          await room.localParticipant.setMicrophoneEnabled(
            updatedState.isMicOn as boolean,
          );
          break;

        case 'camera':
          updatedState = { isCameraOn: !mediaState.isCameraOn };
          await room.localParticipant.setCameraEnabled(
            updatedState.isCameraOn as boolean,
          );
          break;

        case 'screen':
          updatedState = { isScreenSharing: !mediaState.isScreenSharing };
          await room.localParticipant.setScreenShareEnabled(
            updatedState.isScreenSharing as boolean,
          );
          break;
      }

      if (updatedState) {
        setMediaState((prev) => ({ ...prev, ...updatedState }));
      }
    } catch (err) {
      console.error(`Error toggling ${mediaType}:`, err);
    }
  };

  // 로컬 비디오 트랙 렌더링
  const renderLocalTracks = () => {
    if (!room?.localParticipant?.videoTrackPublications) return null;

    return Array.from(
      room.localParticipant.videoTrackPublications.values(),
    ).map((pub) => {
      const track = pub.videoTrack;
      if (!track) return null;

      const isScreenShare = pub.trackName?.includes('screen');
      return (
        <VideoComponent
          key={pub.trackSid}
          track={track}
          participantIdentity={
            isScreenShare ? 'You (Screen Share)' : participantName
          }
          local={true}
        />
      );
    });
  };

  // 원격 트랙 렌더링
  const renderRemoteTracks = () => {
    return remoteTracks.map((remoteTrack) =>
      remoteTrack.trackPublication.kind === 'video' ? (
        <VideoComponent
          key={remoteTrack.trackPublication.trackSid}
          track={remoteTrack.trackPublication.videoTrack!}
          participantIdentity={remoteTrack.participantIdentity}
        />
      ) : (
        <AudioComponent
          key={remoteTrack.trackPublication.trackSid}
          track={remoteTrack.trackPublication.audioTrack!}
        />
      ),
    );
  };

  // UI 렌더링
  return (
    <div id="room">
      <header id="room-header">
        <h2 id="room-title">{roomName}</h2>
        <button
          className="btn btn-danger"
          id="leave-room-button"
          onClick={leaveRoom}
        >
          Leave Room
        </button>
      </header>

      <div id="controls" style={{ marginBottom: '1rem' }}>
        <button
          className="btn btn-secondary"
          onClick={() => toggleMedia('mic')}
        >
          {mediaState.isMicOn ? 'Mute Mic' : 'Unmute Mic'}
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => toggleMedia('camera')}
        >
          {mediaState.isCameraOn ? 'Turn Off Camera' : 'Turn On Camera'}
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => toggleMedia('screen')}
        >
          {mediaState.isScreenSharing ? 'Stop Sharing' : 'Share Screen'}
        </button>
      </div>

      <div id="layout-container">
        {renderRemoteTracks()}
        {renderLocalTracks()}
      </div>
    </div>
  );
};

export default MeetingViewPage;
