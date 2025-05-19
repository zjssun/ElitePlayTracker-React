import type { Route } from "./+types/home";
import { useState,useEffect,useRef } from "react";
import {useLocation,useNavigate} from "react-router"
import { useTranslation } from "react-i18next";

import Header from "../components/Header";
import MatchArea from "../components/MatchArea";
import "../css/home.css"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Elite Player Tracker" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [checked, setChecked] = useState(false);
  const [status,setStatus] = useState(false);
  const {i18n} = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

   // Dark Mode Function
  const ChanegeMode=()=>{
    setChecked(!checked);
    localStorage.setItem('DarkMode' ,(!checked).toString());
  }

   // Language Function
  const Changelg=()=>{
    setStatus(!status); 
    if(!status){
      i18n.changeLanguage('en');
      localStorage.setItem('Language' ,'en');
    }else{
      i18n.changeLanguage('zh'); 
      localStorage.setItem('Language' ,'zh');
    }
  }

  useEffect(()=>{

    //Google Analytics
    const script1 = document.createElement("script");
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-CNLNVT7LF5";
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-CNLNVT7LF5');
    `;
    document.head.appendChild(script2);

    // Check Route is /
    if (location.pathname === '/') {
      navigate('/donk');
    }
    // Check if Dark Mode is enabled in Local Storage
    const localDarkMode = localStorage.getItem('DarkMode');
    if(localDarkMode){
      if(localDarkMode === 'true'){
        setChecked(true);
      }else{
        setChecked(false);
      }
    }else{
      localStorage.setItem('DarkMode' ,'false');
    }
    // Check if Language setting
    const Language = localStorage.getItem('Language');
    if(Language){
      if(Language === 'zh'){
        i18n.changeLanguage('zh');
        setStatus(false);
      }else{  
        i18n.changeLanguage('en');
        setStatus(true);
      }
    }else{
      localStorage.setItem('Language' ,'zh');
      i18n.changeLanguage('zh');
      setStatus(false);
    }
  },[])

  return(
    <div className={`${checked? 'dark' : 'light'} Home`}>
        <div className="Body">
          <Header ChanegeMode={ChanegeMode} isChecked={checked} status={status} Changelg={Changelg} />
          <MatchArea/>
        </div>
    </div>
  )
}
