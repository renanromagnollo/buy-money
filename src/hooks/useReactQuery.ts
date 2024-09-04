import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ReqType } from '../types/type-req';

const URL = 'https://economia.awesomeapi.com.br/json/last/';

async function fetchData(): Promise<ReqType> {
  const { data } = await axios.get<ReqType>(URL + 'USD-BRL');
  return data;
}
export function useReactQuery() {
  const query = useQuery<ReqType>({
    queryKey: ['USDBRL'],
    queryFn: fetchData,
    staleTime: 1000 * 60,
  });
  return query;
}
