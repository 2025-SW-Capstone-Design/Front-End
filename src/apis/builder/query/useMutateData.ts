import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiBuilder } from '../apiBuilder';

export const useMutateData = <T>(
  key: string,
  method: 'post' | 'put' | 'delete',
  url: string,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: unknown) => apiBuilder<T>(method, url, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [key] });
    },
  });
};
