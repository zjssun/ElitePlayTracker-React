import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <>
      <div>404</div>
      <Link to="/match/all">Go to Homepage</Link>
    </>
  )
}

export default NotFoundPage