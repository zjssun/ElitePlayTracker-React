import donk from '../assets/img/donk.webp'
import elige from '../assets/img/elige.webp'
import im from '../assets/img/im.webp'
import jl from '../assets/img/jl.webp'
import m0nesy from '../assets/img/m0nesy.webp'
import niko from '../assets/img/niko.webp'
import ropz from '../assets/img/ropz.webp'
import s1mple from '../assets/img/s1mple.webp'
import w0nderful from '../assets/img/w0nderful.webp'
import zywoo from '../assets/img/zywoo.webp'
import twistzz from '../assets/img/Twistzz.webp'
import kyousuke from '../assets/img/kyousuke.webp'
import frozen from '../assets/img/forzen.webp'

// Map Images
import dust2 from '../assets/img/dust2.jpeg'
import mirage from '../assets/img/Mirage.jpeg'
import inferno from '../assets/img/inferno.jpeg'
import nuke from '../assets/img/nuke.jpeg'
import vertigo from '../assets/img/Vertigo.jpeg'
import ancient from '../assets/img/ancient.jpeg'
import anubis from '../assets/img/Anubis.jpeg'
import train from '../assets/img/train.png'

export const playerList = ['donk','EliGE','frozen','iM','jL','kyousuke','m0NESY','niko','ropz','s1mple','Twistzz','w0nderful','ZywOo'];

export function GetPlayerImg(Player:string){
   switch(Player){
      case "All":
         return "";
      case "donk":
         return donk;
      case "EliGE":
         return elige;
      case "iM":
         return im;
      case "jL":
         return jl;
      case "kyousuke":
         return kyousuke;
      case "m0NESY":
         return m0nesy;
      case "niko":
         return niko;
      case "ropz":
         return ropz;
      case "s1mple":
         return s1mple;
      case "w0nderful":
         return w0nderful;
      case "ZywOo":
         return zywoo;
      case "Twistzz":
         return twistzz;
      case "frozen":
         return frozen;
      default:
         return "";
   }
}

export function SplitDate(time:string){
   return time.split("-");   
}

export function GetMapImg(map:string){
   switch(map){
      case "de_dust2":
         return dust2;
      case "de_mirage":
         return mirage;
      case "de_inferno":
         return inferno;
      case "de_nuke":
         return nuke;
      case "de_vertigo":
         return vertigo;
      case "de_ancient":
         return ancient;
      case "de_anubis":
         return anubis;
      case "de_train":
         return train;
      default:
         return "";
   }
}

export function RenderName(name:string){
   if(name.includes("donk")){
       return "donk";
   }
   else if(name.includes("im")){
      return "iM";
   }
   else if(name.includes("jL")){
      return "jL";
   }
   else if(name.includes("CEMEN_BAKIN")){
      return "kyousuke";
   }
   else if(name.includes("frozen")){
      return "frozen";
   }
   else{
      return name;
   }
}