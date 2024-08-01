//utils
import { Matchinfo } from '../utils/modleType'
import {RenderName} from '../utils/ToolBox'
import {GetTime} from '../utils/GetTime'

//language
import {useTranslation} from 'react-i18next'

interface Props{
   match: Matchinfo
}

const MatchCard = ({match}:Props) => {
   const {t} = useTranslation();

   console.log(GetTime("1704049387702","MMMM"));
   
   return (
      <>
         <div className="NormalCard" onClick={() =>window.open(match.roomUrl,'_blank')}>
            {/* 1st Row */}
            <div className="NormalCard-firstRow">
               <p className='text-lg'>{RenderName(match.nickName)}</p>
            </div>
            <div className="NormalCard-firstRow text-lg">
               {match.effectiveRanking !== "undefined" ? <p><span className='mr-1'>{t("avgRanks")}</span><span className='mr-[1.5px]'>{match.effectiveRanking}</span><span className='text-xs'>ELO</span></p> 
               : <p>{t("training")}</p>}
            </div>
            <div className="NormalCard-firstRow">
               <p><i className="fa-regular fa-clock font-semibold mr-1"></i>{GetTime(match.timestamp,"YYYY-MM-DD HH:mm:ss")}</p>
            </div>
            {/* 2nd Row */}
            <div className="NormalCard-secondRow">
            <img className='w-100% h-full AbsouleCenter blur-[1px] shadow-[2.5px_2.5px_0px_0_rgba(var(--card-border-color))] brightness-[0.65] rounded-sm' src={match.mapimage} alt="" />
               <span className={match.matchResult === "win" ? "AbsouleCenter top-[35%] text-[#32d35a] font-bold text-2xl" : "AbsouleCenter top-[35%] text-[#fff9] font-bold text-2xl"}>
                  {t(`${match.matchResult}`)}
               </span>
               <span className='AbsouleCenter top-[65%] text-white font-bold text-2xl border-t-4 p-1 border-orange-500'>{match.matchScore.replace("/",":")}</span>
            </div>
            <div className="NormalCard-secondRow">
               {match.rating === "undefined" ? <p className='AbsouleCenter top-[45%] text-4xl font-bold text-[#4a4a4a]'>{t("unknown")}</p> : 
                  <p className={parseFloat(match.rating) >= 1 ? "AbsouleCenter top-[45%] text-5xl font-bold text-[#0000ff]":"AbsouleCenter top-[45%] text-5xl font-bold text-[#9d1f41]"}>
                        {parseFloat(match.rating).toFixed(1)}
                  </p>
               }
               <p className='AbsouleCenter top-[70%] text-xs font-bold'>K/D Ratio</p>
            </div>
            <div className="NormalCard-secondRow ">
               {match.totalKills==="undef" ? <p className='AbsouleCenter top-[45%] text-4xl font-bold text-[#4a4a4a]'>{t("unknown")}</p> : 
                  <p className='AbsouleCenter top-[45%] text-5xl font-bold'>{match.totalKills}-{match.totalDeaths}
                  </p>
               }
               <p className='AbsouleCenter top-[70%] text-xs font-bold'>K-D</p>
            </div>
            {/* 3rd Row */}
            <div className="col-span-3 row-span-1 flex justify-between items-center gap-10 border-t-2 border-card-border-color">
               {match.tripleKill === "undef" ? <p><span className='mr-1'>{t("TripleKills")}: </span>{t("unknown")}</p> : <p><span className='mr-1'>{t("TripleKills")}:</span>{match.tripleKill}</p>}
               {match.tripleKill === "undef" ? <p><span className='mr-1'>{t("QuadroKills")}: </span>{t("unknown")}</p> : <p><span className='mr-1'>{t("QuadroKills")}:</span>{match.quadroKill}</p>}
               {match.tripleKill === "undef" ? <p><span className='mr-1'>{t("PentaKills")}: </span>{t("unknown")}</p> : <p><span className='mr-1'>{t("PentaKills")}:</span>{match.pentaKill}</p>}
               {match.tripleKill === "undef" ? <p><span className='mr-1'>{t("Assists")}: </span>{t("unknown")}</p> : <p><span className='mr-1'>{t("Assists")}:</span>{match.totalAssistsL}</p>}
            </div>
         </div>
      </>
   )
}

export default MatchCard;