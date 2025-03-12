import { useQuery } from '@tanstack/react-query';
import { apiBuilder } from '../apiBuilder';

export const useFetchData = <T>(key: string, url: string) => {
  return useQuery<T>({
    queryKey: [key],
    queryFn: () => apiBuilder<T>('get', url),
  });
};
