import { FB_AUTH } from '../components/_firebase'
import { connect } from "react-redux";
import { ACTION } from '../components/store';

const Auth = ({setUser}) => {
    function onClickSignInBtn() {
        FB_AUTH.signInWithGoogle();
        FB_AUTH.authChange(user=>{
            console.log(user)
        })
    }
    function onClickSignInPopBtn() {
        FB_AUTH.signInWithGoogle(true);
    }

    return (<>
        <button onClick={onClickSignInBtn}>login</button>
        <button onClick={onClickSignInPopBtn}>login2</button>
    </>)
}

function mapStateToProps(state, props) {
    return ({})
}

function mapDispatchProps(dispatch){
    return {
        setUser:(user) => dispatch(ACTION.set(user)),
    }
}

export default connect(mapStateToProps)(Auth);