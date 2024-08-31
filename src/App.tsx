import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Template } from './components/Template';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world</div>,
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
