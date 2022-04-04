import { FB_AUTH } from '../components/_firebase'
import '../css/auth.css'

const Auth = () => {
    function onClickSignInPopBtn() {
        FB_AUTH.signInWithGoogle(false);
    }

    return (<div className='auth__wrap'>
        <span className='auth__logo'>Good Sleep</span>
        <div className='auth__btn_wrap'>
            <button className='auth__btn' onClick={onClickSignInPopBtn}>sign In<br />With Google</button>
            <button className='auth__btn' >show demo</button>
        </div>
    </div>)
}
export default (Auth);