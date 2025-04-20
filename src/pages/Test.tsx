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
  return (
    <div>
      <div>
        <DropdownLabel position="FULLSTACK" />
        <DropdownLabel position="FULLSTACK" />
      </div>
      <div style={{ width: '436px' }}>
        <ManageTeamMember />
      </div>

      <Button buttonType="tertiary">가나다라</Button>
      <IconButton buttonType="secondary">
        <img src={plus} alt="" />팀 생성하기
      </IconButton>
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
      <ManageTeamModal />
    </div>
  );
}

export default Test;
