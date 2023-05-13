import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import './styles/Splash.css';

export default function Splash() {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, login, logout } = authContext;

  return(
    <h1>Splash page {console.log(isAuthenticated)}</h1>
  );
}