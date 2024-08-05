import axios from 'axios';

//https://samrol-express.me/
//http://localhost:3000/
axios.defaults.baseURL = 'https://samrol-express.me/';

export async function getMatchByName(name:string){
   return axios.get(`/getmatch/${name}`);
}