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

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Suspense fallback={<div>Loading...</div>}>
            <Global styles={globalStyles} />
            <RouterProvider router={router} />
          </Suspense>
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default App;
