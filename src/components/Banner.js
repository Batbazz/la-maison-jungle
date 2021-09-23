import logo from '../assets/logo.png'
import '../styles/Banner.css'
import Recommendation from './Recommendation'

function Banner() {
  const title= 'La Maison jungle'
  return (
    <div className='lmj-banner'>
      <div className='lmj-banner-row'>
        <h1 className='lmj-title'>{title.toLowerCase()}
          <img src={logo} alt='La maison jungle' className='lmj-logo' />
        </h1>
      </div>
      <div className='lmj-reco'>
        <Recommendation />
      </div>
    </div>
  )
}

export default Banner
