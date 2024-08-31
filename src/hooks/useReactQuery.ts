import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

const URL = 'http://localhost:3210/';

async function fetchData(param: string) {
  const { data } = await axios.get(URL + param);
  return data;
}
export function useReactQuery(param: string) {
  const [reqParams, setReqParams] = useState<string>(param);
  const query = useQuery({
    queryKey: [reqParams],
    queryFn: () => {
      if (reqParams) {
        return fetchData(reqParams);
      }
      return Promise.reject('Parameters not found!');
    },
    enabled: !!reqParams,
  });
  return { setReqParams, ...query };
}
