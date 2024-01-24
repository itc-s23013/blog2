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
    </div>
  )
}
export default Hero
