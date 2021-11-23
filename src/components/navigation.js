import { connect } from 'react-redux'
import { FB_AUTH } from './_firebase'
import '../css/navigation.css'

const Navigation = ({user,isLogedIn}) => {
    function onClickSignBtn(){
        FB_AUTH.signOut()
    }

    return (<div className='navigation-wrap'>
        {!isLogedIn ? <></> : <button onClick={onClickSignBtn}>signOut</button>}
    </div>)
}

function mapStateToProps(state,props){
    const {user} = state;
    return({user})
}

export default connect(mapStateToProps)(Navigation);