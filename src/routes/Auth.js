import { FB_AUTH } from '../components/_firebase'

const Auth = () => {
    function onClickSignInPopBtn() {
        FB_AUTH.signInWithGoogle(true);
    }

    return (<>
        {/* <button onClick={onClickSignInBtn}>login</button> */}
        <button onClick={onClickSignInPopBtn}>sign In With Google</button>
    </>)
}
export default (Auth);