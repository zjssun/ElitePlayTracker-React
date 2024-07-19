import {useParams} from 'react-router-dom'

const PlayData = () => {
   const params = useParams(); 
   return (
      <>
         <div>{params.player}</div>
      </> 
   )
}

export default PlayData