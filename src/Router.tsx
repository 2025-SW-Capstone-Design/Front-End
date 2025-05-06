import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/Main/MainPage';
import LoginPage from './pages/Login/LoginPage';
import IntroPage from './pages/Intro/IntroPage';
import TokenProccesor from './utils/Authorization/TokenProccesor';
import ProtectedLayout from './layouts/ProtectedLayout';
import TeamPage from './pages/Team/TeamPage';

const router = createBrowserRouter([
  { path: '/login', element: <LoginPage /> },
  { path: '/intro', element: <IntroPage /> },
  { path: '/oauth2/redirect', element: <TokenProccesor /> },
  {
    path: '/',
    element: <ProtectedLayout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: 'team/:teamId', element: <TeamPage /> },
    ],
  },
]);

export default router;
