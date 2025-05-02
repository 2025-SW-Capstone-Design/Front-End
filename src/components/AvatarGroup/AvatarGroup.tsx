import React, { useState } from 'react';
import * as S from './AvatarGroup.styles';
import type { AvatarGroupProps } from './AvatarGroup.types';
import avatar from '../../assets/icon/avatar.svg';
import NameTag from '../NameTag/NameTag';

function AvatarGroup({ members, maxVisible = 4 }: AvatarGroupProps) {
  const visibleMembers = members.slice(0, maxVisible).reverse();
  const remainingMembers = members.slice(maxVisible);

  const [hoveredMember, setHoveredMember] = useState<
    null | (typeof members)[number]
  >(null);
  const [showRemaining, setShowRemaining] = useState(false);

  const remaining = members.length - maxVisible;

  return (
    <S.AvatarGroupContainer>
      {/* 쌓이는 순서를 오른쪽에서 -> 왼쪽이기 때문에 마지막을 위해 +N 먼저 */}
      {remaining > 0 && (
        <S.AvatarWrapper
          index={0}
          onMouseEnter={() => setShowRemaining(true)}
          onMouseLeave={() => setShowRemaining(false)}
        >
          <S.MoreAvatar>+{remaining}</S.MoreAvatar>
          {showRemaining && (
            <S.Tooltip>
              {remainingMembers.map((member) => (
                <NameTag
                  key={member.name}
                  name={member.name}
                  position={member.position}
                />
              ))}
            </S.Tooltip>
          )}
        </S.AvatarWrapper>
      )}

      {/* 나머지 오른쪽에서부터 왼쪽으로 겹치기 */}
      {visibleMembers.map((member, idx) => {
        const adjustedIndex = remaining > 0 ? idx + 1 : idx;
        return (
          <S.AvatarWrapper
            key={member.name}
            index={adjustedIndex}
            onMouseEnter={() => setHoveredMember(member)}
            onMouseLeave={() => setHoveredMember(null)}
          >
            <S.AvatarImage src={avatar} alt={member.name} />
            {hoveredMember?.name === member.name && (
              <S.Tooltip>
                <NameTag name={member.name} position={member.position} />
              </S.Tooltip>
            )}
          </S.AvatarWrapper>
        );
      })}
    </S.AvatarGroupContainer>
  );
}

export default AvatarGroup;
