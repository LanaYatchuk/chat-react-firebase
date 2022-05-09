import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BrowserRouter } from 'react-router-dom'
import { Context } from '.';
import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar/Navbar'
import AppRouter from './components/routers/AppRouter';
import './styles/App.css'

function App() {
  const {auth} = useContext(Context)
  const [user, loading, error] = useAuthState(auth)

  if (loading){
    return <Loader/>
  }

  return (
  <BrowserRouter>
     <Navbar />
     <AppRouter />
  </BrowserRouter>
      

  );
}

export default App;
