import type { Route } from "./+types/home";
import { useState,useEffect } from "react";
import {useLocation,useNavigate} from "react-router"
import { useTranslation } from "react-i18next";
import { playerList } from "../utils/ToolBox";

import Header from "../components/Header";
import MatchArea from "../components/MatchArea";
import Notice from "../components/Notice";

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
  const [showNotice, setShowNotice] = useState(false);

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

  //Notice button function
  const handleNoticeClose = () => {
    localStorage.setItem('noticed', 'true');
    setShowNotice(false);
  };


  useEffect(()=>{
      const noticed = localStorage.getItem('noticed') || false;
      if (!noticed) {
        setShowNotice(true);
      }

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

    // Google AdSense
    const adsScript = document.createElement("script");
    adsScript.async = true;
    adsScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8665891263297101";
    adsScript.crossOrigin = "anonymous";
    document.head.appendChild(adsScript);

    // Check Route is /
    if (location.pathname === '/' || !playerList.includes(location.pathname)) {
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
          {/* {showNotice && <Notice handleNoticeClose={handleNoticeClose} />} */}
          <Header ChanegeMode={ChanegeMode} isChecked={checked} status={status} Changelg={Changelg} />
          <MatchArea/>
        </div>
    </div>
  )
}
