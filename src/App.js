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
          ? <div className="flex items-center justify-center h-screen">
            <p className='text-center text-3xl font-bold'>
              Checking User Authentication..
            </p>
          </div>
          : < RouterProvider router={router} />
      }
    </>
  )
}

export default App;
