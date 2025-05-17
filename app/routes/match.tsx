import type {Route} from "./+types/match"
import {useTranslation} from "react-i18next"

//components
import MatchDate from "../components/MatchDate"
import MatchCard from "../components/MatchCard"

// tools
import {getMatchByName} from "../utils/api"
import {GetTimeList,GetTimeListFromMatch} from "../utils/GetTime"
import type { Matchinfo } from "../utils/modleType"
import "../css/match.css"


export async function clientLoader({params}:Route.ClientLoaderArgs) {
   const player = params.player.toLowerCase();
   const response = await getMatchByName(player);
   return response.data.data;
}

export function HydrateFallback(){
   return <div>Loading...</div>;
} 

export default function Prouduct({loaderData}:Route.ComponentProps){
   const {t} = useTranslation();
   const responseData = loaderData;
   const timeList = GetTimeList(responseData) as string[];
   const timeListFromMatch = GetTimeListFromMatch(responseData);
   console.log(timeListFromMatch);
   
   return(
      <>
         <div className="static">-{t("total")}{responseData.length}{t(("totalResult"))}-</div>
         <div className="match-container">
            {timeList.map((time,index)=>(
               <>
                  <MatchDate time={time}/>
                  {
                     timeListFromMatch[index].map((match:Matchinfo,index:number)=>(
                        <>
                           <MatchCard match={match} key={index}/>
                        </>
                     ))
                  }
               </>
            ))}
         </div>
      </>
   );
}