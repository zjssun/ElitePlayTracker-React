import { useLoaderData } from 'react-router-dom'
import {GetTimeList,GetTimeListFromMatch} from '../utils/GetTime'

//language
import {useTranslation} from 'react-i18next'

import MatchCard from '../components/MatchCard'
import MatchDate from '../components/MatchDate'

import { Datainfo, Matchinfo } from '../utils/modleType'


const PlayData = () => {
   const {t} = useTranslation()

   const { data } = useLoaderData() as Datainfo;
   const { playerMatch } = data;

   const timeList = GetTimeList(playerMatch) as string[];
   const timeListFromMatch = GetTimeListFromMatch(playerMatch);   
   
   return (
      <>
         <div className='text-center text-lg font-sans my-1 font-bold max-[700px]:text-sm max-[550px]:my-2'>-{t("total")}{playerMatch.length}{t(("totalResult"))}-</div>      
         <div className='w-full flex flex-col justify-center items-center last:mb-3'>
            {timeList.map((time,index)=>(
            <>
               <MatchDate time={time} />
               {
                  timeListFromMatch[index].map((match:Matchinfo)=>(
                     <>
                        <MatchCard match={match}/>
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