import { useReactQuery } from './hooks/useReactQuery';

function App() {
  const { data } = useReactQuery('USDBRL');
  console.log(data);
  return (
    <div>
      <h1>{data && JSON.stringify(data)}</h1>
    </div>
  );
}

export default App;
