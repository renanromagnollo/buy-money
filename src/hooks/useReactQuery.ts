import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ApiResponseType } from '../types/type-api-response';
import { Env } from '../config/environment';

async function fetchData(): Promise<ApiResponseType> {
  const { data } = await axios.get<ApiResponseType>(
    Env.BASE_URL + '/json/last/USD-BRL,EUR-BRL'
  );
  return data;
}
export function useReactQuery() {
  const query = useQuery<ApiResponseType>({
    queryKey: ['USD-BRL,EUR-BRL'],
    queryFn: fetchData,
    staleTime: 1000 * 60,
  });
  return query;
}
