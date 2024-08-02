import { Link } from 'react-router-dom'
import {useTranslation} from 'react-i18next'

const NotFoundPage = () => {
  const {t} = useTranslation()

  return (
    <>
      <div className='mt-5'>
        <p className='text-center text-xl'>404</p>
        <div className='flex justify-center items-center gap-2 text-lg'>
          <i className="fa-solid fa-share"></i>
          <Link to="/match/All" className='underline underline-offset-4'>{t("NotFound")}</Link>
        </div>
      </div>
    </>
  )
}

export default NotFoundPage