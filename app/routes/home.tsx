import type { Route } from "./+types/home";
import { useState,useEffect,useRef } from "react";
import {useLocation,useNavigate} from "react-router"
import { useTranslation } from "react-i18next";

import Header from "../components/Header";
import MatchArea from "../components/MatchArea";
import "../css/home.css"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

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
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger,ScrollSmoother);
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
    // Scroll Function
    const smoother = ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth: 1,
      smoothTouch:1,
      speed:3.5,
      effects: true,
      ignoreMobileResize:true,
      normalizeScroll: true
    });
    return () => {
      smoother.kill(); // 清理防止内存泄漏
    };
  },[location, navigate])

  return(
    <div className={`${checked? 'dark' : 'light'} Home`} ref={wrapperRef}>
        <div className="Body" ref={contentRef}>
          <Header ChanegeMode={ChanegeMode} isChecked={checked} status={status} Changelg={Changelg} />
          <MatchArea/>
        </div>
    </div>
  )
}
