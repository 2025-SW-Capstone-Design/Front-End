import styled from '@emotion/styled';
import type { SidebarTeamProps } from './Sidebar.types';

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: fit-content;
  height: 100vh;
  padding: 32px 56px;

  background-color: ${(props) => props.theme.colors.gray[10]};
`;

const SidebarLogo = styled.img`
  width: 82px;
  height: 70px;
  margin: 24px auto;
`;

const SidebarHorizonBar = styled.div`
  width: 228px;

  margin: 24px auto;
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.gray[40]};
`;

const SidebarTeamListTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.gray[90]};
`;

const SidebarTeamList = styled.div`
  display: flex;
  flex-direction: column;

  height: 364px;
  align-items: center;
  margin: 12px auto 0 auto;
  gap: 20px;
`;

const SidebarTeam = styled.div<SidebarTeamProps>`
  display: flex;
  width: 228px;
  padding: 12px 24px;
  align-items: center;

  border-radius: 8px;
  background-color: ${(props) =>
    props.isSelected
      ? props.theme.colors.gray[20]
      : props.theme.colors.gray[10]};
  cursor: pointer;

  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.gray[90]};
`;

const SidebarButtonSection = styled.div`
  display: flex;
  flex-direction: column;

  margin: auto auto 56px auto;
  gap: 12px;
`;

export {
  SidebarContainer,
  SidebarLogo,
  SidebarHorizonBar,
  SidebarTeamListTitle,
  SidebarTeamList,
  SidebarTeam,
  SidebarButtonSection,
};
