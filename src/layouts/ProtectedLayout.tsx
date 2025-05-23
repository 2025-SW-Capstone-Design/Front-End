import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/Auth/AuthContext';
import styled from '@emotion/styled';
import Sidebar from '../components/Sidebar/Sidebar';
import type { ProtectedLayoutProps } from './ProtectedLayout.types';

const LayoutWrapper = styled.div`
  display: flex;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const ProtectedLayout = ({ type }: ProtectedLayoutProps) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <></>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/intro" replace />;
  }

  return type == 'basic' ? (
    <LayoutWrapper>
      <Sidebar />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </LayoutWrapper>
  ) : (
    <LayoutWrapper>
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </LayoutWrapper>
  );
};

export default ProtectedLayout;
