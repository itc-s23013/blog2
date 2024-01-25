<<<<<<< HEAD
<<<<<<< HEAD
const Header = () => {
  return <header>HEADER</header>
=======
import Logo from 'components/logo'
import Nav from 'components/nav'

const Header = () => {
  return (
    <header>
      <Logo />
      <Nav />
    </header>
  )
>>>>>>> chapter2
=======
import Logo from 'components/logo'
import Nav from 'components/nav'

const Header = () => {
  return (
    <header>
      <Logo boxOn />
      <Nav />
    </header>
  )
>>>>>>> chapter3
}
export default Header
