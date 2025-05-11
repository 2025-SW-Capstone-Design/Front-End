import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ProtectedLayout from './layouts/ProtectedLayout';
import TokenProccesor from './utils/Authorization/TokenProccesor';

// Lazy-loaded pages
const MainPage = lazy(() => import('./pages/Main/MainPage'));
const LoginPage = lazy(() => import('./pages/Login/LoginPage'));
const IntroPage = lazy(() => import('./pages/Intro/IntroPage'));
const TeamPage = lazy(() => import('./pages/Team/TeamPage'));
const CalendarPage = lazy(() => import('./pages/Calendar/CalendarPage'));
const TaskCreatePage = lazy(() => import('./pages/Task/TaskCreatePage'));
const TaskTemplatePage = lazy(
  () => import('./pages/TaskTemplate/TaskTemplatePage'),
);
const KanbanPage = lazy(() => import('./pages/Kanban/KanbanPage'));

// Fallback component during loading
const withSuspense = (element: React.ReactNode) => (
  <Suspense fallback={<></>}>{element}</Suspense>
);

const router = createBrowserRouter([
  { path: '/login', element: withSuspense(<LoginPage />) },
  { path: '/intro', element: withSuspense(<IntroPage />) },
  { path: '/oauth2/redirect', element: <TokenProccesor /> },
  {
    path: '/',
    element: <ProtectedLayout />,
    children: [
      { index: true, element: withSuspense(<MainPage />) },
      {
        path: 'team/:teamId',
        children: [
          { index: true, element: withSuspense(<TeamPage />) },
          { path: 'calendar', element: withSuspense(<CalendarPage />) },
          { path: 'kanban', element: withSuspense(<KanbanPage />) },
          {
            path: 'project/:projectId/task/create',
            element: withSuspense(<TaskCreatePage />),
          },
          {
            path: 'project/:projectId/template/create',
            element: withSuspense(<TaskTemplatePage />),
          },
          {
            path: 'project/:projectId/template/:templateId',
            element: withSuspense(<TaskTemplatePage />),
          },
        ],
      },
    ],
  },
]);

export default router;
