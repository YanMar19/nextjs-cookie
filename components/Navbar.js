import { useContext } from 'react'
import style from '../styles/Navbar.module.css'
import Link from 'next/link'
import AuthContext from '../context/AuthContext'

export default function Navbar() {
  const { logout, user } = useContext(AuthContext)

  return (
    <nav className={style.nav}>
      <Link href="/"><h2><a>Sylor Wooden Solutions</a></h2></Link>

      <div>
        {user ? <>
        <Link href="/users">
          <a>Χρήστες</a>
        </Link>
          <Link href="/initialization">
            <a>Αρχικοποίηση</a>
          </Link>
          <Link href="/products">
            <a>Προϊόντα</a>
          </Link>
          {/* <Link href="/signup">
            <a>Sign up</a>
          </Link> */}
          <>
            <a onClick={() => logout()}>Έξοδος</a>
          </>
        </> :         
          <Link href="/login">
            <a>Είσοδος</a>
          </Link>}
      </div>
        
    </nav>
  )
}