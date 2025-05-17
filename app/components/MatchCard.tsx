import type { Matchinfo } from "../utils/modleType"
import {RenderName,GetMapImg} from '../utils/ToolBox'
import {GetTime} from '../utils/GetTime'
import {Clock} from 'lucide-react'
import "../css/matchCard.css"

//language
import {useTranslation} from 'react-i18next'

interface Props{
   match: Matchinfo;
}

export default function MatchCard({match}:Props){
   const {t} = useTranslation();

   return(
      <>
         <div className="matchCardContainer" onClick={() =>window.open(match.roomUrl,'_blank')}>
            {/* 1st Row */}
            <div className="matchCard-firstRow">
               <p>{RenderName(match.nickName)}</p>
            </div>
            {/*AVG ELO */}
            <div className="matchCard-firstRow avgelo">
               {match.effectiveRanking !== "0" ? <p><span style={{marginRight:"4px"}}>{t("avgRanks")}</span><span style={{marginRight:"1.5px"}}>{match.effectiveRanking}</span><span style={{fontSize:"var(--small-size)"}}>ELO</span></p> 
               : <p>{t("training")}</p>}
            </div>
            {/* Time */}
            <div className="matchCard-firstRow matchCard-time">
               <Clock className="clock"/><p>{GetTime(match.timestamp,"YYYY-MM-DD HH:mm:ss")}</p>
            </div>
            {/* 2nd Row */}
            <div className="matchCard-secondRow">
               <img className='matchCard-map' src={GetMapImg(match.matchMap)} alt="" />
               <span className={match.matchResult === "win" ? "matchResult-win" : "matchResult-loss"}>
                  {t(`${match.matchResult}`)}
               </span>
               <span className='matchCard-score'>{match.matchScore.replace("/",":")}</span>
            </div>
            {/* Rating */}
            <div className="matchCard-secondRow matchCard-rating">
               <p className={parseFloat(match.rating) >= 1 ? "above1":"below1"}>
                  {match.rating}
               </p>
               <p className='matchCard-kd-des'>K/D Ratio</p>
            </div>
            {/* K-D */}
            <div className="matchCard-secondRow matchCard-kd">
               <p className='total-kd'>{match.totalKills}-{match.totalDeaths}</p>
               <p className='total-kd-des'>K-D</p>
               {/* ADR */}
               {
                  match.totalKills==="unstats" ? <p className='matchCard-stats'>{t("NotStatistics")}</p> :  
                  <p className='adr'>{match.adr}</p>
               }
               <p className='adr-des'>ADR</p>
            </div>
            {/* 3rd Row */}
            <div className="matchCard-thirdRow">
               <p><span>{t("TripleKills")}:</span>{match.tripleKill}</p>
               <p><span>{t("QuadroKills")}:</span>{match.quadroKill}</p>
               <p><span>{t("PentaKills")}:</span>{match.pentaKill}</p>
               <p><span>{t("Assists")}:</span>{match.totalAssistsl}</p>
            </div>
         </div>
         
         
      </>
   )
}