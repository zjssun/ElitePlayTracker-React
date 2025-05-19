import { useState } from "react";
import "../css/notice.css"

interface Props{
   handleNoticeClose:()=>void;
}
export default function Notice({handleNoticeClose}:Props){
   
   return(
      <div className="notice-container">
         <div className="notice-content">
            <p className="notice-title">🛠️域名即将更改⚒️</p>
            <p>可以访问新域名:</p>
            <p className="notice-link"><a className="notice-link" href="https://eptracker.pro">https://eptracker.pro</a></p>
            <p>🗑️本域名将下线🔜</p>
            <button onClick={handleNoticeClose} className="notice-button">知道了</button>
         </div>
      </div>
   );
}