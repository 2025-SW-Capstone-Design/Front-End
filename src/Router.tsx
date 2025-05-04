import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/Main/MainPage';
import LoginPage from './pages/Login/LoginPage';
import TestPage from './pages/Test';
import IntroPage from './pages/Intro/IntroPage';
import TokenProccesor from './utils/Authorization/TokenProccesor';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/intro',
    element: <IntroPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/oauth2/redirect',
    element: <TokenProccesor />,
  },
  {
    path: '/test',
    element: <TestPage />,
  },
]);

export default router;
