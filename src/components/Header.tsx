import logo_dark from '../assets/img/ept_logo_dark.png'
import logo_light from '../assets/img/ept_logo_light.png'


interface Props {
   isChecked:boolean
   status:boolean
   ChanegeMode:()=>void
   Changelg:()=>void
}

const Header = ({isChecked,ChanegeMode,status,Changelg}:Props) => {
  return (
   <>
      <header className='sticky top-0 z-50 w-full h-20 p-6 
      border-b-[1px] border-border-color bg-background
      shadow-md shadow-shadow-color select-none
      flex justify-center items-center transitionAll'>
         {/* logo */}
         <div className='flex items-center'>
            <img className='w-28 h-28' src={isChecked? logo_dark : logo_light} alt="" />
            <span className='flex-none text-2xl text-text'>Elite Play Tracker</span>
         </div>
         {/* spacer */}
         <div className="grow"></div>
         {/* Language switch */}
         <label className="flex-none mr-8 relative items-center cursor-pointer">
            <input type="checkbox" checked={status} onChange={Changelg} className=" hidden peer"/>
               <div className="peer outline-none duration-200 rounded-md shadow-inner
                after:rounded-md after:duration-500 w-24 h-10 bg-gray-200 peer-focus:outline-none after:content-['中文'] after:absolute after:outline-none after:h-8 after:w-8 
                after:bg-card-bg-color after:top-1 after:left-1 after:flex after:justify-center after:items-center text-sm
                after:text-text after:font-bold peer-checked:after:translate-x-14 peer-checked:after:content-['EN']">
            </div>
         </label>

         {/* github icon */}
         <a href="https://github.com/zjssun/ElitePlayTracker-React" target="_blank" className="flex-none flex items-center justify-center rounded-full transitionAll shadow-[0_0_5px_0_rgba(var(--dark-hover-color))] hover:shadow-[0_0_15px_1px_rgba(var(--dark-hover-color))] text-text mr-7 ">
            <i className="fa-brands fa-github text-[2.25rem]"></i>
         </a>

         {/* dark/light mode switch */}
         <label className="flex-none bg-white w-10 h-10 rounded-full 
         grid place-content-center cursor-pointer place-items-center
         leading-none shadow-[0_0_5px_0_rgba(var(--dark-hover-color))] hover:shadow-[0_0_15px_1px_rgba(var(--dark-hover-color))]
         transition-all duration-300" htmlFor="switch">

            <input id="switch" checked={isChecked} className="peer hidden" onChange={ChanegeMode} type="checkbox"/>
            <div className="col-start-1 col-end-1 row-start-1 row-end-1 transition-transform duration-500 scale-100 peer-checked:rotate-180 peer-checked:scale-0 ">
               <i className="fa-solid fa-sun text-xl"></i>
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