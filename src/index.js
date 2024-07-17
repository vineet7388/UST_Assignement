import React from 'react';
import './index.css';
import MonitorManchines from './components/MonitorManchines';
import './App.css';
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import Error from './components/Error';
import Header from './components/Header';

// function App() {
//   return (
//     <div className="App">
//        <MonitorManchines/>
//     </div>
//   );
// }

const AppLayout = () => {
  return (
      <div className='app'>
          <Header/>
          <Outlet/>
      </div>
  )
}

const appRouter = createBrowserRouter([
  {
      path: '/',
      element: <AppLayout />,
      children: [
          {
              path: '/',
              element: < MonitorManchines/>
          }
      ],
      errorElement: <Error />
  }
])


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)
