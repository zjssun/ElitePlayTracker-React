import logo_dark from '../assets/img/ept_logo_dark.png'
import logo_light from '../assets/img/ept_logo_light.png'
import {Github,Sun,Moon} from "lucide-react"
import "../css/header.css"

interface Props {
   isChecked:boolean
   status:boolean
   ChanegeMode:()=>void
   Changelg:()=>void
}

export default function Header({isChecked,ChanegeMode,status,Changelg}:Props){
  return (
   <>
      <header className='header'>
         {/* logo */}
         <div className='logo'>
            <img src={isChecked? logo_dark : logo_light} alt="logo" />
            <span>Elite Play Tracker</span>
         </div>
         {/* spacer */}
         <div className="spacer"></div>
         {/* Language switch */}
         <label className="language">
            <input type="checkbox" checked={status} onChange={Changelg} className=""/>
         </label>

         {/* github icon */}
         <a href="https://github.com/zjssun/ElitePlayTracker-React" target="_blank" className="header-github">
            <Github size={36}  />
         </a>

         {/* dark/light mode switch */}
         <label className="toggle" htmlFor="switch">
            <input id="switch" checked={isChecked} onChange={ChanegeMode} type="checkbox"/>
            <div className="icon icon--sun">
               <Sun size={28}/>
            </div>
            <div className="icon icon--moon">
               <Moon size={28}/>
            </div>
         </label>
      </header>
   </>
  )
}