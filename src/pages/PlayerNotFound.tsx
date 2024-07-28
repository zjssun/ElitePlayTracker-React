import { Link } from 'react-router-dom'

const PlayerNotFound = () => {
  return (
    <>
      <div>Not Found This Player</div>
      <Link to="/match/All">Go to Homepage</Link>
    </>
  )
}

export default PlayerNotFound