import { SplitDate } from '../utils/ToolBox'
import {useTranslation} from 'react-i18next'

//gasp
import {gsap} from 'gsap'
import {useGSAP} from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { useRef } from 'react'

interface Props{
   time: string
}

const MatchDate = ({time}: Props) => {

  const {t} = useTranslation();
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  const DateText = useRef(null);
  useGSAP(()=>{
    gsap.fromTo(DateText.current,{"clip-path":"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", opacity:0, y:10},
      {"clip-path":"polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", opacity:1, y:0, duration: 0.45, ease: "power2.inOut", scrollTrigger: { trigger: DateText.current, start: "top 120%", end: "bottom 100%", scrub: 1 }}
    )
  },{scope: DateText})

  return (
    <>
      <div className='w-4/5 max-2xl:w-[95%] max-xl:w-[98%] mb-2 h-auto flex justify-start items-center' ref={DateText}>
         <p className='group/p text-text'>
            <span className='text-3xl max-sm:text-[1.75rem] mr-1'>{t(`${SplitDate(time)[0]}`)}</span>
            <span className='text-3xl max-sm:text-[1.75rem] mr-2'>{SplitDate(time)[1]}{t('day')}</span>
            <span className='text-xs opacity-0 font-medium group-hover/p:opacity-100 transitionAll border-2 border-text rounded-md px-1'>{SplitDate(time)[2]}</span>
         </p>
      </div>
    </>
  )
}

export default MatchDate