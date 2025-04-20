import React from 'react';
import * as S from './ManageTeamMember.styles';
import profile from '../../assets/icon/profile_small.svg';
import DropdownLabel from '../Label/DropdownLabel/DropdownLabel';
import { ReactComponent as X } from '../../assets/icon/X_small.svg';

function ManageTeamMember() {
  return (
    <S.TeamMemberWrapper>
      <S.MemberInfo>
        <S.IconWrapper>
          <img src={profile} alt="" />
        </S.IconWrapper>
        <S.Name>차영건</S.Name>
        <S.OwnerTag>Owner</S.OwnerTag>
      </S.MemberInfo>
      <S.MemberManageWrapper>
        <DropdownLabel position="FULLSTACK" />
        <S.RemoveButton>
          <X />
        </S.RemoveButton>
      </S.MemberManageWrapper>
    </S.TeamMemberWrapper>
  );
}

export default ManageTeamMember;
