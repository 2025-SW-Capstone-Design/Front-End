import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ProtectedLayout from './layouts/ProtectedLayout';
import TokenProccesor from './utils/Authorization/TokenProccesor';

const MainPage = lazy(() => import('./pages/Main/MainPage'));
const LoginPage = lazy(() => import('./pages/Login/LoginPage'));
const IntroPage = lazy(() => import('./pages/Intro/IntroPage'));
const TeamPage = lazy(() => import('./pages/Team/TeamPage'));
const CalendarPage = lazy(() => import('./pages/Calendar/CalendarPage'));
const TaskPage = lazy(() => import('./pages/Task/TaskPage'));
const TaskTemplatePage = lazy(
  () => import('./pages/TaskTemplate/TaskTemplatePage'),
);
const KanbanPage = lazy(() => import('./pages/Kanban/KanbanPage'));
const MilestoneDetailPage = lazy(
  () => import('./pages/Milestone/MilestoneDetailPage'),
);
const PortfolioPage = lazy(() => import('./pages/Portfolio/PortfolioPage'));
const PortfolioModifyPage = lazy(
  () => import('./pages/Portfolio/PortfolioModifyPage'),
);
const ReadmePage = lazy(() => import('./pages/Readme/ReadmePage'));
const ReadmeModifyPage = lazy(() => import('./pages/Readme/ReadmeModifyPage'));
const MeetingPage = lazy(() => import('./pages/Meeting/MeetingPage'));
const MeetingViewPage = lazy(() => import('./pages/Meeting/MeetingViewPage'));

const withSuspense = (element: React.ReactNode) => (
  <Suspense fallback={<></>}>{element}</Suspense>
);

const router = createBrowserRouter([
  { path: '/login', element: withSuspense(<LoginPage />) },
  { path: '/intro', element: withSuspense(<IntroPage />) },
  { path: '/oauth2/redirect', element: <TokenProccesor /> },
  {
    path: '/team/:teamId/meeting/:roomName',
    element: <ProtectedLayout />,
    children: [{ index: true, element: withSuspense(<MeetingViewPage />) }],
  },
  {
    path: '/',
    element: <ProtectedLayout type="basic" />,
    children: [
      { index: true, element: withSuspense(<MainPage />) },
      {
        path: 'portfolio',
        children: [
          { index: true, element: withSuspense(<PortfolioPage />) },
          { path: 'create', element: withSuspense(<PortfolioModifyPage />) },
          {
            path: 'edit/:portfolioId',
            element: withSuspense(<PortfolioModifyPage />),
          },
        ],
      },
      {
        path: 'team/:teamId',
        children: [
          { index: true, element: withSuspense(<TeamPage />) },
          { path: 'calendar', element: withSuspense(<CalendarPage />) },
          { path: 'kanban', element: withSuspense(<KanbanPage />) },
          {
            path: 'project/:projectId/milestone/:milestoneId/task/create',
            element: withSuspense(<TaskPage />),
          },
          {
            path: 'project/:projectId/milestone/:milestoneId/task/:taskId/update',
            element: withSuspense(<TaskPage />),
          },
          {
            path: 'project/:projectId/milestone/:milestoneId',
            element: withSuspense(<MilestoneDetailPage />),
          },
          {
            path: 'project/:projectId/template/create',
            element: withSuspense(<TaskTemplatePage />),
          },
          {
            path: 'project/:projectId/template/:templateId',
            element: withSuspense(<TaskTemplatePage />),
          },
          { path: 'readme', element: withSuspense(<ReadmePage />) },
          {
            path: 'project/:projectId/readme/create',
            element: withSuspense(<ReadmeModifyPage />),
          },
          {
            path: 'project/:projectId/readme/edit/:readmeId',
            element: withSuspense(<ReadmeModifyPage />),
          },
          {
            path: 'meeting',
            element: withSuspense(<MeetingPage />),
          },
        ],
      },
    ],
  },
]);

export default router;
