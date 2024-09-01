import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Template } from './components/Template';
// import { LoaderSpin } from './components/Loaders/LoaderSpin';
// import { ConverterTool } from './components/ConverterTool';
import { Result } from './components/Result';

const router = createBrowserRouter([
  {
    path: '/',
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
