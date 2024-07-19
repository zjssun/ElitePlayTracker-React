import React from 'react'
import './global.css'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'
import PlayData from './pages/PlayData.tsx'
import {createBrowserRouter,RouterProvider,redirect } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    errorElement: <NotFoundPage />,
    loader:()=> redirect("/match/all"),
  },
  {
    path:'/match',
    element:<App />,
    children:[
      {
        path:'/match/:player',
        element:<PlayData />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
