import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ReqType } from '../types/type-req';

const URL = 'http://localhost:3210/';

async function fetchData() {
  const { data } = await axios.get(URL + 'USDBRL');
  return data as ReqType;
}
export function useReactQuery() {
  const query = useQuery({
    queryKey: ['USDBRL'],
    queryFn: fetchData,
  });
  return query;
}
