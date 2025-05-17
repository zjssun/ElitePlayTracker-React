import { SplitDate } from '../utils/ToolBox'
import {useTranslation} from 'react-i18next'

//gasp
import {gsap} from 'gsap'
import {useGSAP} from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { useRef } from 'react'

import '../css/matchDate.css'

interface Props{
   time: string;
}


export default function MatchDate({time}:Props){
   const {t} = useTranslation();
   gsap.registerPlugin(useGSAP, ScrollTrigger);
   const DateText = useRef(null);
   useGSAP(()=>{
      gsap.fromTo(DateText.current,{"clip-path":"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", opacity:0, y:10},
         {"clip-path":"polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", opacity:1, y:0, duration: 0.45, ease: "power2.inOut", scrollTrigger: { trigger: DateText.current, start: "top 120%", end: "bottom 100%", scrub: 1 }}
      )
   },{scope: DateText})

  return(
   <div className='matchDateContainer' ref={DateText}>
      <p className='matchDateText'>
         <span>{t(`${SplitDate(time)[0]}`)}</span>
         <span>{SplitDate(time)[1]}{t('day')}</span>
         <span>{SplitDate(time)[2]}</span>
      </p>
   </div>
  )
}