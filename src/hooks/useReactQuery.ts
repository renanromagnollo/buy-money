import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ReqType } from '../types/type-req';

const URL = 'http://localhost:3210/';

async function fetchData(): Promise<ReqType> {
  const { data } = await axios.get<ReqType>(URL + 'USDBRL');
  return data;
}
export function useReactQuery() {
  const query = useQuery<ReqType>({
    queryKey: ['USDBRL'],
    queryFn: fetchData,
  });
  return query;
}
