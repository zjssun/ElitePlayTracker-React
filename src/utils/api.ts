import axios from 'axios';

//https://samrol-express.me/
axios.defaults.baseURL = 'http://localhost:3000/';

export async function getMatchByName(name:string){
   return axios.get(`/getmatch/${name}`);
}