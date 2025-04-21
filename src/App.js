import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';
import ParentHomePage from './Components/ParentHomePage';
import ErrorPage from './Components/ErrorPage';

function App() {

  const route=createBrowserRouter([
    {
      path:'/',
      element:<ParentHomePage/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          index: true, // <- this makes HomePage show on initial route "/"
          element: <HomePage/>,
        },
        {
          path:'homePage',
          element:<HomePage/>
        },
        {
          path:'aboutPage',
          element:<AboutPage/>
        },
      ]
    },
    
  ])

  return (
    <RouterProvider router={route}/>

  );
}

export default App;
