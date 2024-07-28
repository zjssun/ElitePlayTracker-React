import { Matchinfo } from '../utils/modleType'
import {FormatMap} from '../utils/ToolBox'
import {useTranslation} from 'react-i18next'

interface Props{
   match: Matchinfo
}

const MatchCard = ({match}:Props) => {
   const {t} = useTranslation()
   
   // console.log(match);
   
   return (
      <>
         <div className="NormalCard text-text">
            <div className="col-span-1 content-center bg-gray-600">
               <p className='text-lg'>{match.nickName}</p>
            </div>
            <div className="col-span-1">
               <p>{t("avgRanks")}{match.effectiveRanking}</p>
            </div>
            <div className="col-span-1">
               <p>{match.time}</p>
            </div>
            <div className="col-span-1 row-span-3">
               <p>{FormatMap(match.matchMap)}</p>
            </div>
            <div className="col-span-1 row-span-3">
               <p>{match.rating}</p>
            </div>
            <div className="col-span-1 row-span-3">
               <p>{match.totalKills}-{match.totalDeaths}</p>
            </div>
            <div className="col-span-3 row-span-2">
               <p>{match.tripleKill}</p>
            </div>
         </div>
      </>
   )
}

export default MatchCard;