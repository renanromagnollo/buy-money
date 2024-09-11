import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ReqType } from '../types/type-req';
import { Env } from '../config/environment';

async function fetchData(): Promise<ReqType> {
  const { data } = await axios.get<ReqType>(Env.BASE_URL + '/json/last/USD-BRL,EUR-BRL');
  console.log(data);
  return data;
}
export function useReactQuery() {
  const query = useQuery<ReqType>({
    queryKey: ['USD-BRL,EUR-BRL'],
    queryFn: fetchData,
    staleTime: 1000 * 60,
  });
  return query;
}
