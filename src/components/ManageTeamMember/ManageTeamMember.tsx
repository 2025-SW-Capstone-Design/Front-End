import React from 'react';
import * as S from './ManageTeamMember.styles';
import profile from '../../assets/icon/profile_small.svg';
import DropdownLabel from '../Label/DropdownLabel/DropdownLabel';
import { ReactComponent as X } from '../../assets/icon/X_small.svg';
import type { teamMemberProps } from './ManageTeamMember.types';
import type { PositionType } from '../Label/Label.types';
import Label from '../Label/Label';
import { updateTeamMemberPostion } from '../../apis/teamMember/teamMember';
import { useParams } from 'react-router-dom';

function ManageTeamMember({ info, isLeader, refetchMembers }: teamMemberProps) {
  const { teamId } = useParams();

  const handleChangePosition = async (newPosition: PositionType) => {
    await updateTeamMemberPostion(Number(teamId))
      .setData({
        memberId: info.memberId,
        position: newPosition,
      })
      .execute();
    refetchMembers();
  };

  return (
    <S.TeamMemberWrapper>
      <S.MemberInfo>
        <S.IconWrapper>
          <img src={profile} alt="" />
        </S.IconWrapper>
        <S.Name>{info.nickname}</S.Name>
        {info.role === 'ROLE_LEADER' && <S.OwnerTag>Owner</S.OwnerTag>}
      </S.MemberInfo>
      <S.MemberManageWrapper>
        {isLeader && info.role !== 'ROLE_LEADER' ? (
          <DropdownLabel
            position={info.position as PositionType}
            onChange={handleChangePosition}
          />
        ) : (
          <Label position={info.position as PositionType} />
        )}

        <S.RemoveButton>
          <X />
        </S.RemoveButton>
      </S.MemberManageWrapper>
    </S.TeamMemberWrapper>
  );
}

export default ManageTeamMember;
