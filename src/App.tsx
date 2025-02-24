import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';

import router from './Router';
import { queryClient } from './QueryClient';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Suspense fallback={<div>Loading...</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default App;
