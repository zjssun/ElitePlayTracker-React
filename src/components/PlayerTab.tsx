import { NavLink,Outlet } from 'react-router-dom' 
import { GetPlayerImg } from '../utils/ToolBox'

interface Props{
    playerList: string[]
}
const PlayerTab = ({playerList}:Props) => {
  return (
    <>
    <div className='w-9/12 min-h-screen rounded flex justify-start items-center flex-col select-none transitionAll'>
      <hgroup className='flex flex-row flex-wrap justify-center items-center mb-4'>
          {playerList.map(
            (player)=>(
              <NavLink className={({isActive})=>{return isActive? 'baseNavLink text-select-color border-select-color' : 'baseNavLink'}} 
                key={player} 
                to={`/match/${player}`}>
                {GetPlayerImg(player) ? <img className='mr-2 w-12 h-12 rounded-full bg-navlink-img-bg transitionAll' src={GetPlayerImg(player)}/> : ""}
                {player}
              </NavLink>
            ))
          }
        </hgroup>
        <Outlet/>
    </div>
    </>
  )
}

export default PlayerTab