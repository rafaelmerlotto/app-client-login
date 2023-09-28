import { Link } from 'react-router-dom'



export default function Nav() {
  return (
    <>
    <nav>
   
        <ul>
            <Link className='link' to='/login'>LOGIN</Link>
            <Link  className='link' to='/register'>REGISTER</Link>
        </ul>
    </nav>
    </>
  )
}
