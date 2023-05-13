import { useContext } from 'react';
import { AuthContext, AuthProvider } from './contexts/AuthContext';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Splash from './routes/Splash';
import Login from './routes/Login';
import Register from './routes/Register';
import Dashboard from './routes/Dashboard';

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

function Routes() {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, login, logout } = authContext;

  const router = createBrowserRouter([
    {
      path: "/",
      element: isAuthenticated ? <Dashboard /> : <Splash />,
    },
    {
      path: "/login",
      element: isAuthenticated ? <Dashboard /> : <Login />
    },
    {

    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}
