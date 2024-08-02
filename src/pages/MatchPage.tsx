import { useParams,Navigate,useLoaderData } from 'react-router-dom'
import {GetTimeList,GetTimeListFromMatch} from '../utils/GetTime'

import MatchCard from '../components/MatchCard'
import MatchDate from '../components/MatchDate'

import { Datainfo, Matchinfo } from '../utils/modleType'

import {playerList} from '../utils/ToolBox'


const PlayData = () => {
   const { data } = useLoaderData() as Datainfo;
   const { playerMatch } = data;
   const params = useParams(); 
   

   if(params.player === undefined || !playerList.includes(params.player)){
      return <Navigate to="/match/player404" />
   }

   const timeList = GetTimeList(playerMatch) as string[];
   const timeListFromMatch = GetTimeListFromMatch(playerMatch);   
   
   return (
      <>
         <div className='w-full flex flex-col justify-center items-center last:mb-3'>
            {timeList.map((time,index)=>(
            <>
               <MatchDate time={time} />
               {
                  timeListFromMatch[index].map((match:Matchinfo)=>(
                     <>
                        <MatchCard match={match} />
                     </>
                  ))
               }
            </>
            ))}
         </div>
      </> 
   )
}

export default PlayData