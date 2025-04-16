import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/Main/MainPage';
import LoginPage from './pages/Login/LoginPage';
import TestPage from './pages/Test';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/test',
    element: <TestPage />,
  },
]);

export default router;
