import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/router/router';
import useAuthCheck from './hooks/useAuthCheck';

function App() {

  //check auth
  const { userLoggedIn, isLoading } = useAuthCheck();

  return (
    <>
      {
        isLoading && !userLoggedIn
          ? <div><p className='text-center text-lg font-semibold mt-8'>Checking User Authentication..</p></div>
          : < RouterProvider router={router} />
      }
    </>
  )
}

export default App;
