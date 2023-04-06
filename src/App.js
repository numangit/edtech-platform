import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/router/router';
import useAuthCheck from './hooks/useAuthCheck';
import Loader from './component/common/loader/Loader';

function App() {

  //check auth
  const { userLoggedIn, isLoading } = useAuthCheck();

  return (
    <>
      {
        isLoading && !userLoggedIn
          ? <Loader />
          : < RouterProvider router={router} />
      }
    </>
  )
}

export default App;
