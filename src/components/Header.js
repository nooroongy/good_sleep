import { connect } from 'react-redux'
import { FB_AUTH } from './_firebase'
import '../css/header.css'

const Header = ({user,isLogedIn}) => {
    function onClickSignBtn(){
        FB_AUTH.signOut()
    }

    return (<div className='header-wrap main-color'>
        {!isLogedIn ? <></> : <button onClick={onClickSignBtn} className='header-signout'>signOut</button>}
        <span className='header-nickname'>{user ? user.displayName:''} 의 수면생활</span>
    </div>)
}

function mapStateToProps(state,props){
    const {user} = state;
    return({user})
}

export default connect(mapStateToProps)(Header);