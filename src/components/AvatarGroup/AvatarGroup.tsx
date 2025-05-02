import React from 'react';
import * as S from './AvatarGroup.styles';
import type { AvatarGroupProps } from './AvatarGroup.types';
import avatar from '../../assets/icon/avatar.svg';
function AvatarGroup({ members, maxVisible = 4 }: AvatarGroupProps) {
  const visibleMembers = members.slice(0, maxVisible).reverse();

  const remaining = members.length - maxVisible;

  return (
    <S.AvatarGroupContainer>
      {/* 쌓이는 순서를 오른쪽에서 -> 왼쪽이기 때문에 마지막을 위해 +N 먼저 */}
      {remaining > 0 && (
        <S.AvatarWrapper index={0}>
          <S.MoreAvatar>+{remaining}</S.MoreAvatar>
        </S.AvatarWrapper>
      )}

      {/* 나머지 오른쪽에서부터 왼쪽으로 겹치기 */}
      {visibleMembers.map((member, idx) => {
        const adjustedIndex = remaining > 0 ? idx + 1 : idx;
        return (
          <S.AvatarWrapper key={member.name} index={adjustedIndex}>
            <S.AvatarImage src={avatar} alt={member.name} />
          </S.AvatarWrapper>
        );
      })}
    </S.AvatarGroupContainer>
  );
}

export default AvatarGroup;
