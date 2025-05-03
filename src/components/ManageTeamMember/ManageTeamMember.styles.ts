import styled from '@emotion/styled';

const TeamMemberWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-shrink: 0;
`;

const MemberInfo = styled.div`
  width: auto;
  height: 27px;
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
  ${({ theme }) => theme.text.bodyXL_medium};
`;

const OwnerTag = styled.div`
  display: flex;
  align-items: center;
  height: 12px;
  color: ${({ theme }) => theme.colors.gray[60]};
  ${({ theme }) => theme.text.labeS_bold};
`;

const MemberManageWrapper = styled.div`
  width: auto;
  height: 27px;
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

const RemoveButton = styled.button`
  cursor: pointer;
  height: 24px;
  svg {
    width: 24px;
    height: 24px;
    fill: #8e8ea9;
  }
`;

export {
  IconWrapper,
  MemberInfo,
  Name,
  TeamMemberWrapper,
  OwnerTag,
  RemoveButton,
  MemberManageWrapper,
};
