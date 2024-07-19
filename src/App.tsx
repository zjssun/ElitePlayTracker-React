import PlayData from './components/PlayerTab';
import Header from './components/Header';

import { useRef,useEffect,useState } from 'react';

function App() {
  const playerList = ['all','donk','EliGE','iM','jks','Jame','jL','m0nesy','niko','s1mple','w0nderful','ZywOo'];

  const [checked, setChecked] = useState(false);
  const ChanegeMode=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setChecked(!checked)
    console.log(checked);
    
    localStorage.setItem('DarkMode' ,(!checked).toString());
  }

  useEffect(()=>{
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
    
  },[])

  
  return (
    <>
    <div className={checked? 'dark' : 'light'}>
      <div className='w-full h-screen flex flex-col justify-center items-center bg-background'>
          <Header ChanegeMode={ChanegeMode} isChecked={checked} />
          <div className='w-8/12 h-screen bg-slate-500'>
            <PlayData playerList={playerList} />
          </div>
        </div>
    </div>
    </>
  )
}

export default App
