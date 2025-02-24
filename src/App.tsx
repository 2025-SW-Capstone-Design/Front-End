import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

import router from './Router';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './QueryClient';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  );
};

export default App;
