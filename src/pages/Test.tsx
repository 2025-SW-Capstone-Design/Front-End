import React, { useState } from 'react';
import Button from '../components/Button/Button';
import IconButton from '../components/IconButton/IconButton';
import plus from '../assets/icon/plus.svg';
import Input from '../components/Input/Input';
import TextButton from '../components/TextButton/TextButton';
import TextIconButton from '../components/TextIconButton/TextIconButton';
import { ReactComponent as arrow_right_small } from '../assets/icon/arrow_right_small.svg';
import UpcomingTask from '../components/UpcomingTask/UpcomingTask';
import Label from '../components/Label/Label';
import CreateTeamModal from '../components/CreateTeamModal/CreateTeamModal';
import DropdownLabel from '../components/Label/DropdownLabel/DropdownLabel';
import ManageTeamModal from '../components/ManageTeamModal/ManageTeamModal';
import ManageTeamMember from '../components/ManageTeamMember/ManageTeamMember';
import EventContainer from '../components/EventContainer/EventContainer';
import Modal from '../components/Modal/Modal';
import aiPen from '../assets/icon/aipen.svg';
import TaskTemplateSettingModal from '../components/TaskTemplateSettingModal/TaskTemplateSettingModal';
import Dropdown from '../components/Dropdown/Dropdown';
import Alert from '../components/Alert/Alert';
import TemplateCard from '../components/TemplateCard/TemplateCard';
import type { PositionType } from '../components/Label/Label.types';
import ImportTemplateModal from '../components/ImportTemplateModal/ImportTemplateModal';
import TaskButton from '../components/TaskButton/TaskButton';
import IconInput from '../components/IconInput/IconInput';
import Card from '../components/Card/Card';
import AvatarGroup from '../components/AvatarGroup/AvatarGroup';
import NameTag from '../components/NameTag/NameTag';
import MilestoneCard from '../components/MilestoneCard/MilestoneCard';
import MilestoneListModal from '../components/MilestoneListModal/MilestoneListModal';
import PortfolioCard from '../components/PortfolioCard/PortfolioCard';
import ChatMessage from '../components/ChatMessage/ChatMessage';
import SubButton from '../components/SubButton/SubButton';
import MeetingList from '../components/MeetingList/MeetingList';
import MeetingCard from '../components/MeetingCard/MeetingCard';
import MeetingKeywordList from '../components/MeetingKeywordList/MeetingKeywordList';
import MeetingContent from '../components/MeetingContent/MeetingContent';
import StartMeetingModal from '../components/StartMeetingModal/StartMeetingModal';

function Test() {
  const [value, setValue] = useState('');
  const [status, setStatus] = useState<'default' | 'error' | 'success'>(
    'default',
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    if (inputValue.length === 0) {
      setStatus('default');
    } else if (inputValue.length < 5) {
      setStatus('error');
    } else {
      setStatus('success');
    }
  };

  const templateData = {
    title: '프로젝트 템플릿',
    position: ['FRONTEND', 'BACKEND', 'DESIGNER', 'MARKETER'],
  };
  const positions: PositionType[] = templateData.position.filter(
    (pos): pos is PositionType =>
      [
        'NONE',
        'BACKEND',
        'FRONTEND',
        'FULLSTACK',
        'MOBILE',
        'ANDROID',
        'IOS',
        'DEVOPS',
        'DBA',
        'PLANNER',
        'PM',
        'MARKETER',
        'DESIGNER',
        'QA',
        'ETC',
      ].includes(pos),
  );

  const [isSelected, setIsSelected] = useState(false);
  const [text, setText] = useState('');

  return (
    <div style={{ backgroundColor: '#AEAEAE' }}>
      <div>
        <DropdownLabel position="FULLSTACK" />
        <DropdownLabel position="FULLSTACK" />
        <SubButton buttonType="primary" disabled>
          나의 Task만
        </SubButton>
        <SubButton buttonType="default" disabled>
          나의 Task만
        </SubButton>
        <MeetingKeywordList keyword="디자인" />
        <br />
        <MeetingContent
          contents={[
            {
              time: '00:00',
              speaker: '참여자 1',
              content: '하이, 회의 시작해보자.',
            },
            { time: '00:00', speaker: '참여자 2', content: '하기 싫어 폭폭폭' },
            { time: '00:00', speaker: '참여자 4', content: '악악악' },
            {
              time: '00:00',
              speaker: '참여자 1',
              content:
                '디자인 진행사항 한 번 보고 의견 나눠보자. 디자이너분들이 얼마나 해왔는지 봐야 하고...',
            },
          ]}
        />
      </div>
      <div style={{ width: '436px' }}>
        <ManageTeamMember />
        <br />
        {/* <MilestoneCard /> */}
        <Card cardType="task" />
        <NameTag name="차영건" position="Designer"></NameTag>
        <br />
        <MeetingCard
          title="회의 제목"
          isEditing={true}
          isSelected={isSelected}
          onSelect={(isSelected) => setIsSelected(isSelected)}
          meetingTime="1시간 10분"
          keywords={['UX/UI', '디자인', '개발', '마케팅']}
        />
        <br />
        {/* <PortfolioCard /> */}
        <ChatMessage
          name="차영건"
          time="19:24"
          isSender={true}
          message="안녕하세요 최홍만입니도"
        />
        <ChatMessage
          name="차차핑"
          time="19:25"
          isSender={false}
          message="나는 차차핑이라구해~"
        />
        <MeetingList title="갱갱갱" time="14:00PM" />
      </div>
      <div>
        {/* <TemplateCard
          title={templateData.title}
          position={positions}
          isEditing={true}
        /> */}
        <IconInput
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="task를 입력하세요"
        />
        <TaskButton
          isSelected={isSelected}
          onClick={() => setIsSelected((prev) => !prev)}
        >
          전체
        </TaskButton>
        <AvatarGroup
          members={[
            {
              name: '이정환 ',
              position: 'DESIGNER',
            },
            {
              name: '김유리 ',
              position: 'PM',
            },
            {
              name: '김유리 ',
              position: 'PM',
            },
            {
              name: '김유리 ',
              position: 'PM',
            },
            {
              name: '김유리 ',
              position: 'PM',
            },
            {
              name: '김유리 ',
              position: 'PM',
            },
            {
              name: '김유리 ',
              position: 'PM',
            },
            // ...추가
          ]}
        />

        <Dropdown
          options={['마일스톤 1', '마일스톤 2', '마일스톤 3', '마일스톤 4']}
          placeholder="전체"
          onSelect={(value) => console.log('선택된 값:', value)}
          // dropdownType="primary"
        ></Dropdown>
      </div>

      <Button buttonType="tertiary">가나다라</Button>
      <IconButton buttonType="secondary">
        <img src={plus} alt="" />팀 생성하기
      </IconButton>
      <EventContainer
        position="DESIGNER"
        taskName="task가 들어갑니다.ㄱㄴㄷㄹㅁㅂㅅ"
        time="08:00"
        containerType="small"
      />
      <br />
      <EventContainer
        position="FRONTEND"
        taskName="task가 들어갑니다.rseadwawdawdawdㅁㅈㅇㅁㅈㅇㅁㅈ"
        time="08:00"
        containerType="medium"
      />
      <br />
      <EventContainer
        position="BACKEND"
        taskName="task가 들어갑니다.rawdwareasdwadswaawdawdawdwadawdawdaw"
        time="08:00"
        containerType="large"
      />
      <Input
        placeholder="닉네임을 입력하세요"
        status={status}
        message={
          status === 'error'
            ? '유효하지 않은 이메일입니다.'
            : status === 'success'
              ? '입력이 완료되었습니다.'
              : ''
        }
        value={value}
        onChange={handleChange}
      />
      <TextButton buttonType="primary">내 Task 보기</TextButton>
      <TextIconButton buttonType="secondary" icon={arrow_right_small}>
        돌아가기
      </TextIconButton>

      <UpcomingTask />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginLeft: '20px',
          gap: '4px',
        }}
      >
        <Label position="NONE" />
        <Label position="BACKEND" />
        <Label position="DEVOPS" />
        <Label position="DBA" />
        <Label position="FRONTEND" />
        <Label position="MOBILE" />
        <Label position="ANDROID" />
        <Label position="IOS" />
        <Label position="PLANNER" />
        <Label position="PM" />
        <Label position="MARKETER" />
        <Label position="QA" />
        <Label position="ETC" />
        <Label position="FULLSTACK" />
        <Label position="DESIGNER" />
        <DropdownLabel position="FULLSTACK" />
      </div>
      {/* <CreateTeamModal /> */}
      {/* <ManageTeamModal /> */}
      {/* <Modal
        title="회의가 종료되었습니다."
        leftButtonText="종료"
        rightButtonText="AI 회의록 보기"
        // 아이콘은 안넣어도됨
        rightButtonIcon={aiPen}
      /> */}
      {/* <TaskTemplateSettingModal /> */}
      {/* <Alert /> */}
      {/* <ImportTemplateModal /> */}
      {/* <MilestoneListModal /> */}
      <StartMeetingModal />
    </div>
  );
}

export default Test;
