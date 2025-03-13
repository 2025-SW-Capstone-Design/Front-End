import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';

import router from './Router';
import { queryClient } from './QueryClient';
import theme from './styles/theme';
import { Global, ThemeProvider } from '@emotion/react';
import globalStyles from './styles/globalStyle';
import './App.css';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/common/ErrorFallback';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<div>Loading...</div>}>
              <Global styles={globalStyles} />
              <RouterProvider router={router} />
            </Suspense>
          </ErrorBoundary>
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default App;
