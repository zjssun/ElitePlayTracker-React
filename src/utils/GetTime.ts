import moment from 'moment'

import { Matchinfo } from '../utils/modleType'

export function GetTime(date:string,format:string):string{
   const time = new Date(parseInt(date))
   return moment(time).format(format);
}

export function GetTimeList(playerMatch:Matchinfo[]){
   let timeList:string[] = [];

   playerMatch.forEach(item=>{ 
      timeList.push(GetTime(item.timestamp,'MMMM-DD-YYYY'));
   });
   timeList = Array.from(new Set(timeList));
   return timeList;
}

export function GetTimeListFromMatch(playerMatch:Matchinfo[]){
   const classifiedData = new Map();
   playerMatch.forEach(item => {
      const date = GetTime(item.timestamp,"MMDDYYYY");
      if(!classifiedData.has(date)){
         classifiedData.set(date,[]);
      }
      classifiedData.get(date).push(item);
   });
   const result = Array.from(classifiedData.values());
   return result;
}