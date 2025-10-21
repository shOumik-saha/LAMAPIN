import Img from '../img/img'
import { Link } from 'react-router'
import './leftBar.css'

const LeftBar = () => {
  return (
    <div className='leftBar'>
        <div className='menuIcons'>
            <Link to='/' className='menuIcon'>
                <Img src='/general/logo.png' className='logo' alt='menu icon' />
            </Link>
            <Link to='/' className='menuIcon'>
                <Img src='/general/home.svg' alt='menu icon' />
            </Link>
            <Link to='/create' className='menuIcon'>
                <Img src='/general/create.svg' alt='menu icon' />
            </Link>
            <Link to='/' className='menuIcon'>
                <Img src='/general/updates.svg' alt='menu icon' />
            </Link>
            <Link to='/' className='menuIcon'>
                <Img src='/general/messages.svg' alt='menu icon' />
            </Link>
        </div>
        <Link to='/' className='menuIcon'>
                <Img src='/general/settings.svg' alt='menu icon' />
        </Link>
    </div>
  )
}
export default LeftBar