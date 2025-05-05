import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalPortal from '../Modal/ModalPortal';
import * as S from './CreateTeamModal.styles';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import Button from '../Button/Button';
import IconButton from '../IconButton/IconButton';
import EmailTag from '../EmailTag/EmailTag';
import { useEmailList } from '../../hooks/useEmailList';
import { useApiMutation } from '../../apis/config/builder/ApiBuilder';
import {
  createTeam,
  generateInvitationCode,
  sendTeamInvitationEmail,
} from '../../apis/team/team';
import type { CreateTeamModalProps } from './CreateTeamModal.types';
import type { teamCreateRequest } from '../../apis/team/team.types';
import { queryClient } from '../../QueryClient';

function CreateTeamModal({ onClose }: CreateTeamModalProps) {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [description, setDescription] = useState('');

  const {
    emails,
    emailInput,
    errorMessage,
    emailStatus,
    setEmailInput,
    handleAddEmail,
    handleRemoveEmail,
  } = useEmailList();

  const createTeamMutation = useApiMutation<teamCreateRequest, number>(
    createTeam(),
    {
      onSuccess: async (teamId) => {
        try {
          await generateInvitationCode(teamId).execute();

          if (emails.length > 0) {
            await sendTeamInvitationEmail(teamId).setData({ emails }).execute();
          }
          await queryClient.invalidateQueries({ queryKey: ['teams'] });
          onClose();
          navigate(`/team/${teamId}`);
        } catch (err) {
          console.error('팀 생성 중 에러 발생:', err);
        }
      },
    },
  );

  const handleCreateTeam = () => {
    createTeamMutation.mutate({
      name,
      organizationName,
      description,
    });
  };

  return (
    <ModalPortal>
      <S.ModalBackground>
        <S.ModalWrapper>
          <S.ModalHeader>
            <S.ModalTitle>팀 생성하기</S.ModalTitle>
            <S.ModalSubTitle>
              함께 일할 새로운 협업 팀을 생성하고 멤버를 초대하세요.
            </S.ModalSubTitle>
          </S.ModalHeader>
          <S.ModalContent>
            <S.InputContainer>
              <S.InputLabel>팀 이름</S.InputLabel>
              <Input
                width="100%"
                placeholder="팀 이름을 알려주세요."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </S.InputContainer>
            <S.InputContainer>
              <S.InputLabel>Github Organization</S.InputLabel>
              <Input
                width="100%"
                placeholder="Organization name을 입력하세요"
                value={organizationName}
                onChange={(e) => setOrganizationName(e.target.value)}
              />
            </S.InputContainer>
            <S.InputContainer>
              <S.InputLabel>프로젝트 설명</S.InputLabel>
              <TextArea
                width="100%"
                height="69px"
                placeholder="팀에 대한 간략한 설명을 입력하세요."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </S.InputContainer>
            <S.InputContainer>
              <S.InputLabel>팀원 초대 (이메일)</S.InputLabel>
              <Input
                width="100%"
                value={emailInput}
                status={emailStatus}
                message={errorMessage}
                onChange={(e) => setEmailInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleAddEmail();
                }}
              />
              <S.EmailTagContainer>
                {emails.map((email) => (
                  <EmailTag
                    key={email}
                    email={email}
                    onRemove={() => handleRemoveEmail(email)}
                  />
                ))}
              </S.EmailTagContainer>
            </S.InputContainer>
          </S.ModalContent>
          <S.ModalFooter>
            <Button buttonType="soft" width="120px" onClick={onClose}>
              취소
            </Button>
            <IconButton
              buttonType="primary"
              width="120px"
              onClick={handleCreateTeam}
            >
              팀 생성하기
            </IconButton>
          </S.ModalFooter>
        </S.ModalWrapper>
      </S.ModalBackground>
    </ModalPortal>
  );
}

export default CreateTeamModal;
