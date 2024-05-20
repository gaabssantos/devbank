import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './screens/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
