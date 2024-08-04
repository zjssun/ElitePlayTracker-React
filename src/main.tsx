// import package
import React from 'react'
import './global.css'
import ReactDOM from 'react-dom/client'
import {createHashRouter,RouterProvider,redirect,LoaderFunctionArgs } from 'react-router-dom'

// untils
import { getMatchByName } from './utils/api.ts'
import {playerList} from './utils/ToolBox.ts'

// load pages
import App from './App.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'
import MatchPage from './pages/MatchPage.tsx'
import PlayerNotFound from './pages/PlayerNotFound.tsx'

//i18n
import './i18n.ts';




const router = createHashRouter([
  {
    path:'/',
    element:<App />,
    errorElement: <NotFoundPage />,
    loader:()=> redirect("/match/All"),
  },
  {
    path:'/match',
    element:<App />,
    children:[
      {
        path:'/match/:player',
        element:<MatchPage />,
        loader: async ({params}:LoaderFunctionArgs)=>{
          const player = params.player as string;
          if(playerList.includes(player)){
            return await getMatchByName(player.toLowerCase());
          }else{
            return redirect("/match/player404");
          }
        }
      },
      {
        path:'/match/player404',
        element:<PlayerNotFound />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
