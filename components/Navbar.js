import { useContext } from 'react'
import style from '../styles/Navbar.module.css'
import Link from 'next/link'
import AuthContext from '../context/AuthContext'

export default function Navbar() {
  const { logout, user } = useContext(AuthContext)

  return (
    <nav className={style.nav}>
      <Link href="/"><h2><a>JWT-Auth-Nextjs</a></h2></Link>

      <div>
        {/* <Link href="/">
          <a>Sign in</a>
        </Link> */}
        {user ? <>
          <Link href="/initialization">
          <a>Αρχικοποίηση</a>
        </Link>
        <Link href="/products">
          <a>Products</a>
        </Link>
        {/* <Link href="/signup">
          <a>Sign up</a>
        </Link> */}
        <div>
          <a onClick={() => logout()}>Logout</a>
        </div>
        </> : null}
      </div>
        
    </nav>
  )
}