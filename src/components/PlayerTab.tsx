import { Link,Outlet } from 'react-router-dom' 

interface Props{
    playerList: string[]
}
const PlayerTab = ({playerList}:Props) => {
  return (
    <>
      <hgroup className='App-Body'>
         {playerList.map((player)=>(<Link key={player} to={`/match/${player}`}>{player}</Link>))}
      </hgroup>
      <Outlet />
    </>
  )
}

export default PlayerTab