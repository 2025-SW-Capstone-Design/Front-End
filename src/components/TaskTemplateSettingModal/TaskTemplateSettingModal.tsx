import React from 'react';
import ModalPortal from '../Modal/ModalPortal';
import * as S from './TaskTemplateSettingModal.styles';
import Button from '../Button/Button';
import IconButton from '../IconButton/IconButton';
import Label from '../Label/Label';
import { Positions } from '../Label/Label.types';
import Dropdown from '../Dropdown/Dropdown';

// NOTE: 드롭다운 옵션값 바꿔쓰세요..
function TaskTemplateSettingModal() {
  return (
    <ModalPortal>
      <S.ModalBackground>
        <S.ModalWrapper>
          <S.ModalHeader>
            <S.ModalTitle>Task 템플릿 설정</S.ModalTitle>
            <S.ModalSubTitle>Task를 관리할 수 있어요</S.ModalSubTitle>
          </S.ModalHeader>
          <S.LabelContainer>
            <S.LabelTitle>라벨을 선택해주세요.</S.LabelTitle>
            <S.Labels>
              {Object.values(Positions).map((position) => (
                <Label
                  key={position.key}
                  position={position.key}
                  isClickable={true}
                />
              ))}
            </S.Labels>
          </S.LabelContainer>
          <S.MilestoneContainer>
            <S.MilestoneTitle>마일스톤 선택</S.MilestoneTitle>
            <Dropdown
              options={[
                '마일스톤 1',
                '마일스톤 2',
                '마일스톤 3',
                '마일스톤 4',
                '마일스톤 4',
                '마일스톤 4',
                '마일스톤 4',
              ]}
              placeholder="마일스톤을 선택하세요"
              onSelect={(value) => console.log('선택된 값:', value)}
              dropdownType="default"
              width="100%"
            />
          </S.MilestoneContainer>
          <S.ButtonContainer>
            <Button buttonType="secondary" width="120px">
              취소
            </Button>
            <IconButton buttonType="primary" width="120px">
              팀 생성하기
            </IconButton>
          </S.ButtonContainer>
        </S.ModalWrapper>
      </S.ModalBackground>
    </ModalPortal>
  );
}

export default TaskTemplateSettingModal;
