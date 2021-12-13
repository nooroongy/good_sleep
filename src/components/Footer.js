import { Link } from 'react-router-dom';
import '../css/footer.css'

function Footer(){
    return <div className='footer-wrap'>
        <Link to='good_sleep/record'>
            <button className='footer-btn sub-color font-color font-icon'>description</button>
        </Link>
        <Link to='good_sleep'>
            <button className='footer-btn sub-color font-color font-icon'>home</button>
        </Link>
        <Link to='good_sleep/setting'>
            <button className='footer-btn sub-color font-color font-icon'>settings</button>
        </Link>
    </div>
}

export default Footer;