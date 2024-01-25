import Link from 'next/link'
<<<<<<< HEAD

const Logo = () => {
  return (
    <Link href='/'>
      <span>CUBE</span>
=======
import styles from 'styles/logo.module.css'

const Logo = ({ boxOn = false }) => {
  return (
    <Link href='/'>
      <span className={boxOn ? styles.box : styles.basic}>CUBE</span>
>>>>>>> chapter3
    </Link>
  )
}
export default Logo
