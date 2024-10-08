import PlayTab from './pages/PlayerTab';
import Header from './components/Header';

import { useEffect,useState } from 'react';
import { useLocation,Navigate } from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {playerList} from './utils/ToolBox';
import Footer from './components/Footer';

//gasp
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function App() {
  const location = useLocation();
  if(location.pathname === '/match/'){
    return <Navigate to="/match/All" />;
  }  

  const [checked, setChecked] = useState(false);
  const [status,setStatus] = useState(false);

  const {i18n} = useTranslation()

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
    ScrollTrigger.refresh();
  },[location])

  
  return (
    <>
    <div className={`${checked? 'dark' : 'light'} font-sans w-full min-h-screen flex flex-col justify-start items-center bg-background transitionAll`}>
        <Header ChanegeMode={ChanegeMode} isChecked={checked} status={status} Changelg={Changelg} />
        
        <PlayTab playerList={playerList} />

        <Footer />
      </div>
    </>
  )
}

export default App
