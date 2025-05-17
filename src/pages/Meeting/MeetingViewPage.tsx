import type {
  LocalVideoTrack,
  RemoteParticipant,
  RemoteTrack,
  RemoteTrackPublication,
} from 'livekit-client';
import { Room, RoomEvent } from 'livekit-client';
import './MeetingViewPage.css';
import { useEffect, useState } from 'react';
import VideoComponent from './components/VideoComponent';
import AudioComponent from './components/AudioComponent';

type TrackInfo = {
  trackPublication: RemoteTrackPublication;
  participantIdentity: string;
};

function MeetingViewPage() {
  const [room, setRoom] = useState<Room | undefined>(undefined);
  const [localTrack, setLocalTrack] = useState<LocalVideoTrack | undefined>(
    undefined,
  );
  const [remoteTracks, setRemoteTracks] = useState<TrackInfo[]>([]);
  const [participantName, setParticipantName] = useState(
    'Participant' + Math.floor(Math.random() * 100),
  );
  const [roomName, setRoomName] = useState('Test Room');

  const [isMicOn, setIsMicOn] = useState(true);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);

  useEffect(() => {
    const issuedToken = sessionStorage.getItem('issuedToken');
    if (issuedToken) {
      joinRoom(issuedToken);
    }
  }, []);

  async function joinRoom(token: string) {
    const room = new Room();
    setRoom(room);

    room.on(
      RoomEvent.TrackSubscribed,
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
    );

    room.on(
      RoomEvent.TrackUnsubscribed,
      (_track: RemoteTrack, publication: RemoteTrackPublication) => {
        setRemoteTracks((prev) =>
          prev.filter(
            (track) => track.trackPublication.trackSid !== publication.trackSid,
          ),
        );
      },
    );

    try {
      console.log(token);
      await room.connect(process.env.REACT_APP_LIVEKIT_URL as string, token);
      await room.localParticipant.enableCameraAndMicrophone();

      const videoTrack = room.localParticipant.videoTrackPublications
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
  }

  async function leaveRoom() {
    await room?.disconnect();
    setRoom(undefined);
    setLocalTrack(undefined);
    setRemoteTracks([]);
    setIsMicOn(true);
    setIsCameraOn(true);
    setIsScreenSharing(false);
  }

  async function toggleMic() {
    if (!room) return;
    const enabled = !isMicOn;
    await room.localParticipant.setMicrophoneEnabled(enabled);
    setIsMicOn(enabled);
  }

  async function toggleCamera() {
    if (!room) return;
    const enabled = !isCameraOn;
    await room.localParticipant.setCameraEnabled(enabled);
    setIsCameraOn(enabled);
  }

  async function toggleScreenShare() {
    if (!room) return;
    const enabled = !isScreenSharing;
    try {
      await room.localParticipant.setScreenShareEnabled(enabled);
      setIsScreenSharing(enabled);
    } catch (err) {
      console.error('Screen sharing error:', err);
    }
  }

  return (
    <>
      <div id="room">
        <div id="room-header">
          <h2 id="room-title">{roomName}</h2>
          <button
            className="btn btn-danger"
            id="leave-room-button"
            onClick={leaveRoom}
          >
            Leave Room
          </button>
        </div>

        {/* ✅ Control Buttons */}
        <div id="controls" style={{ marginBottom: '1rem' }}>
          <button className="btn btn-secondary" onClick={toggleMic}>
            {isMicOn ? 'Mute Mic' : 'Unmute Mic'}
          </button>
          <button className="btn btn-secondary" onClick={toggleCamera}>
            {isCameraOn ? 'Turn Off Camera' : 'Turn On Camera'}
          </button>
          <button className="btn btn-secondary" onClick={toggleScreenShare}>
            {isScreenSharing ? 'Stop Sharing' : 'Share Screen'}
          </button>
        </div>

        <div id="layout-container">
          {remoteTracks.map((remoteTrack) =>
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
          )}

          {room?.localParticipant?.videoTrackPublications &&
            Array.from(
              room.localParticipant.videoTrackPublications.values(),
            ).map((pub) => {
              const track = pub.videoTrack;
              if (!track) return null;

              // 화면 공유인지 확인 (track name이 "screen" 또는 "screen_share"인 경우가 많음)
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
            })}
        </div>
      </div>
    </>
  );
}

export default MeetingViewPage;
