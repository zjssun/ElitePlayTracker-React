import donk from '../assets/img/donk.webp'
import elige from '../assets/img/elige.webp'
import im from '../assets/img/im.webp'
import jks from '../assets/img/jks.webp'
import jame from '../assets/img/jame.webp'
import jl from '../assets/img/jl.webp'
import m0nesy from '../assets/img/m0nesy.webp'
import niko from '../assets/img/niko.webp'
import ropz from '../assets/img/ropz.webp'
import s1mple from '../assets/img/s1mple.webp'
import w0nderful from '../assets/img/w0nderful.webp'
import zywoo from '../assets/img/zywoo.webp'
import  twistzz from '../assets/img/Twistzz.webp'
import dust2 from '../assets/img/dust2.jpeg'
import mirage from '../assets/img/Mirage.jpeg'
import inferno from '../assets/img/inferno.jpeg'
import nuke from '../assets/img/nuke.jpeg'
import vertigo from '../assets/img/Vertigo.jpeg'
import ancient from '../assets/img/ancient.jpeg'
import anubis from '../assets/img/Anubis.jpeg'

export const playerList = ['All','donk','EliGE','iM','jks','Jame','jL','m0NESY','niko','ropz','s1mple','Twistzz','w0nderful','ZywOo'];

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
         return 
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
   else{
      return name;
   }
}