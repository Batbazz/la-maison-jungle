import logo from '../assets/logo.png'
import '../styles/Banner.css'

function Banner() {
  const title= 'La Maison jungle'
  return (
    <div className='lmj-banner'>
      <h1 className='lmj-title'>{title.toLowerCase()}</h1>
      <img src={logo} alt='La maison jungle' className='lmj-logo' />
    </div>
  )
}

export default Banner
