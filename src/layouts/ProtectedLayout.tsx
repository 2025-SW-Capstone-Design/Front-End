import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/Auth/AuthContext';
import styled from '@emotion/styled';
import Sidebar from '../components/Sidebar/Sidebar';

const LayoutWrapper = styled.div`
  display: flex;
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding: 32px;
`;

const ProtectedLayout = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/intro" replace />;
  }

  return (
    <LayoutWrapper>
      <Sidebar />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </LayoutWrapper>
  );
};

export default ProtectedLayout;
