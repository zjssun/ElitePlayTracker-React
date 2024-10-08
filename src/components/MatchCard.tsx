//utils
import { Matchinfo } from '../utils/modleType'
import {RenderName,GetMapImg} from '../utils/ToolBox'
import {GetTime} from '../utils/GetTime'

//language
import {useTranslation} from 'react-i18next'

//gasp
import {gsap} from 'gsap'
import {useGSAP} from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { useRef } from 'react'

interface Props{
   match: Matchinfo;
}

const MatchCard = ({match}:Props) => {
   const {t} = useTranslation();
   gsap.registerPlugin(useGSAP, ScrollTrigger);
   const NormalCard = useRef(null);

   useGSAP(()=>{
      gsap.fromTo(NormalCard.current, 
         {y: 100, opacity: 0}, 
         {y: 0, opacity: 1, duration: 0.45, ease: "power3.inOut", scrollTrigger: { 
            trigger: NormalCard.current, start: "top 120%", end: "bottom 110%", scrub: 1,
         }},
      );
   },{scope: NormalCard})

   return (
      <>
         <div className="NormalCard" ref={NormalCard} onClick={() =>window.open(match.roomUrl,'_blank')}>
            {/* 1st Row */}
            <div className="NormalCard-firstRow max-[550px]:col-span-2 max-[550px]:row-span-1">
               <p className='text-lg'>{RenderName(match.nickName)}</p>
            </div>
            {/*AVG ELO */}
            <div className="NormalCard-firstRow text-lg max-[550px]:text-sm max-[550px]:col-span-4 max-[550px]:row-span-1">
               {match.effectiveRanking !== "0" ? <p><span className='mr-1'>{t("avgRanks")}</span><span className='mr-[1.5px]'>{match.effectiveRanking}</span><span className='text-xs'>ELO</span></p> 
               : <p>{t("training")}</p>}
            </div>
            {/* Time */}
            <div className="NormalCard-firstRow max-[550px]:col-span-6 max-[550px]:row-span-1 max-[550px]:text-sm">
               <p><i className="fa-regular fa-clock font-semibold mr-1"></i>{GetTime(match.timestamp,"YYYY-MM-DD HH:mm:ss")}</p>
            </div>
            {/* 2nd Row */}
            <div className="NormalCard-secondRow max-[550px]:col-span-6 max-[550px]:row-span-3">
               <img className='w-100% h-full AbsouleCenter blur-[1px] shadow-[2.5px_2.5px_0px_0_rgba(var(--card-border-color))] brightness-[0.65] rounded-sm' src={GetMapImg(match.matchMap)} alt="" />
               <span className={match.matchResult === "win" ? "AbsouleCenter top-[35%] text-[#32d35a] font-bold text-2xl" : "AbsouleCenter top-[35%] text-[#fff9] font-bold text-2xl"}>
                  {t(`${match.matchResult}`)}
               </span>
               <span className='AbsouleCenter top-[65%] max-[550px]:top-[70%] text-white font-bold text-2xl border-t-4 p-1 border-orange-500'>{match.matchScore.replace("/",":")}</span>
            </div>
            {/* Rating */}
            <div className="NormalCard-secondRow max-[550px]:col-span-3 max-[550px]:row-span-2">
               <p className={parseFloat(match.rating) >= 1 ? "AbsouleCenter top-[45%] text-5xl max-[550px]:text-3xl font-bold text-[#0000ff]":"AbsouleCenter top-[45%] text-5xl max-[550px]:text-3xl font-bold text-[#9d1f41]"}>
                        {match.rating}
               </p>
               <p className='AbsouleCenter top-[70%] text-xs max-[550px]:text-[0.7rem] font-bold'>K/D Ratio</p>
            </div>
            {/* K-D */}
            <div className="NormalCard-secondRow max-[550px]:col-span-3 max-[550px]:row-span-2">
               <p className='AbsouleCenter top-[25%] text-3xl max-[550px]:text-xl font-bold'>{match.totalKills}-{match.totalDeaths}</p>
               <p className='AbsouleCenter top-[40%] text-xs max-[550px]:text-[0.7rem] font-bold'>K-D</p>
               {/* ADR */}
               {
                  match.totalKills==="unstats" ? <p className='adr text-[#4a4a4a] text-xl max-[550px]:text-[0.9rem]'>{t("NotStatistics")}</p> :  
                  <p className='adr'>{match.adr}</p>
               }
               <p className='AbsouleCenter top-[78%] max-[550px]:top-[82%] text-xs max-[550px]:text-[0.7rem] font-bold'>ADR</p>
            </div>
            {/* 3rd Row */}
            <div className="NormalCard-thirdRow max-[550px]:col-span-6 max-[550px]:row-span-2 max-[550px]:text-sm">
               <p><span>{t("TripleKills")}:</span>{match.tripleKill}</p>
               <p><span>{t("QuadroKills")}:</span>{match.quadroKill}</p>
               <p><span>{t("PentaKills")}:</span>{match.pentaKill}</p>
               <p><span>{t("Assists")}:</span>{match.totalAssistsL}</p>
            </div>
         </div>
      </>
   )
}

export default MatchCard;