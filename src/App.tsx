import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Template } from './components/layout/Template';
import { ConverterTool } from './components/layout/views/ConverterTool';
import { Result } from './components/layout/views/Result';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ConverterTool />,
  },
  {
    path: '/result',
    element: <Result />,
  },
]);

function App() {
  return (
    <Template>
      <RouterProvider router={router} />;
    </Template>
  );
}

export default App;
