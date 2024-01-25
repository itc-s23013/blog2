<<<<<<< HEAD
<<<<<<< HEAD
const Hero = () => {
  return (
    <div>
      <h1>CUBE</h1>
      <p>アウトプットしていくサイト</p>
=======
const Hero = ({ title, subtitle, imageOn = false }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {imageOn && <figure> [画像] </figure>}
>>>>>>> chapter2
=======
import styles from 'styles/hero.module.css'

const Hero = ({ title, subtitle, imageOn = false }) => {
  return (
    <div>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {imageOn && <figure> [画像] </figure>}
>>>>>>> chapter3
    </div>
  )
}
export default Hero
