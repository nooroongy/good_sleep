import { Link } from 'react-router-dom';
import '../css/footer.css'

function Footer(){
    return <div className='footer-wrap'>
        <Link to='record'>
            <button className='footer-btn'>Record</button>
        </Link>
        <Link to=''>
            <button className='footer-btn'>Home</button>
        </Link>
        <Link to='setting'>
            <button className='footer-btn'>Setting</button>
        </Link>
    </div>
}

export default Footer;