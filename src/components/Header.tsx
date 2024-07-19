import { useEffect } from 'react'

interface Props {
   isChecked:boolean
   ChanegeMode:(event:React.ChangeEvent<HTMLInputElement>)=>void
}

const Header = ({isChecked,ChanegeMode}:Props) => {
  return (
   <>
      <header className='w-full h-16 mb-1 p-5 
      border-b-[1px] border-border-color 
      shadow-md shadow-shadow-color select-none
      flex justify-center items-center'>
         <span className='flex-none text-2xl text-text'>Elite Play Tracker</span>
         <div className="grow"></div>
         <label className="flex-none bg-white w-12 h-12 rounded-full 
         grid place-content-center cursor-pointer place-items-center
         leading-none shadow-[0_0_20px_2px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_6px_rgba(0,0,0,0.2)]
         transition-all duration-300" htmlFor="switch">
            <input id="switch" checked={isChecked} className="peer hidden" onChange={ChanegeMode} type="checkbox"/>
            <div className="col-start-1 col-end-1 row-start-1 row-end-1 transition-transform duration-500 scale-100 peer-checked:rotate-180 peer-checked:scale-0 ">
               <i className="fa-solid fa-sun text-2xl"></i>
            </div>
            <div className="col-span-1 col-end-2 row-span-1 row-end-2 transition-transform duration-500 scale-0 peer-checked:scale-100">
               <i className="fa-solid fa-moon text-2xl"></i>
            </div>
         </label>
      </header>
   </>
  )
}

export default Header