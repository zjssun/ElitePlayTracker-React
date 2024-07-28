import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export async function getMatchByName(name:string){
   return axios.get(`/getmatch/${name}`);
}