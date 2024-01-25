import Link from 'next/link'
<<<<<<< HEAD
=======
import styles from 'styles/nav.module.css'
>>>>>>> chapter3

const Nav = () => {
  return (
    <nav>
<<<<<<< HEAD
      <ul>
=======
      <ul className={styles.list}>
>>>>>>> chapter3
        <li>
          <Link href='/'>
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link href='/blog'>
            <span>Blog</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default Nav
