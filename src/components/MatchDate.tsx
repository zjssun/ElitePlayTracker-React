import { SplitDate } from '../utils/ToolBox'
import {useTranslation} from 'react-i18next'

interface Props{
   time: string
}

const MatchDate = ({time}: Props) => {

  const {t} = useTranslation();

  return (
    <>
      <div className='w-4/5 mb-2 h-auto flex justify-start items-center'>
         <p className='group/p text-text'>
            <span className='text-3xl mr-1'>{t(`${SplitDate(time)[0]}`)}</span>
            <span className='text-3xl  xl mr-2'>{SplitDate(time)[1]}{t('day')}</span>
            <span className='text-xs opacity-0 font-medium group-hover/p:opacity-100 transitionAll border-2 border-text rounded-md px-1'>{SplitDate(time)[2]}</span>
         </p>
      </div>
    </>
  )
}

export default MatchDate