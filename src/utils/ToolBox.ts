import donk from '../assets/img/donk.webp'
import elige from '../assets/img/elige.webp'
import im from '../assets/img/im.webp'
import jks from '../assets/img/jks.webp'
import jame from '../assets/img/jame.webp'
import jl from '../assets/img/jl.webp'
import m0nesy from '../assets/img/m0nesy.webp'
import niko from '../assets/img/niko.webp'
import s1mple from '../assets/img/s1mple.webp'
import w0nderful from '../assets/img/w0nderful.webp'
import zywoo from '../assets/img/zywoo.webp'

//playerList = ['all','donk','EliGE','iM','jks','Jame','jL','m0nesy','niko','s1mple','w0nderful','ZywOo'];

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
      case "jks":
         return jks;
      case "Jame":
         return jame;
      case "jL":
         return jl;
      case "m0NESY":
         return m0nesy;
      case "niko":
         return niko;
      case "s1mple":
         return s1mple;
      case "w0nderful":
         return w0nderful;
      case "ZywOo":
         return zywoo;
      default:
         return "";
   }
}

export function SplitDate(time:string){
   return time.split("-");   
}

export function FormatMap(map:string){
   const word = map.split("_")[1];
   return word.charAt(0).toUpperCase() + word.slice(1);
}