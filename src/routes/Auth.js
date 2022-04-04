import { useEffect, useState } from 'react'
import { FB_AUTH } from '../components/_firebase'
import '../css/auth.css'

const Auth = ({ setIsDemo }) => {
    const [animStart,setAnimStart] = useState(false)

    useEffect(()=>{
        setTimeout(() => {
            setAnimStart(true)
        }, 100);
    },[])
    
    const onClickSignInPopBtn = () => {
        FB_AUTH.signInWithGoogle(false);
        setIsDemo(false);
    }
    
    const onClickShowDemoBtn = () => {
        setIsDemo(true);
    }

    return (<div className={`auth__wrap ${animStart ? 'auth__start' : ''}`}>
        <span className='auth__background'></span>
        <span className='auth__logo'>Good Sleep</span>
        <div className='auth__btn_wrap'>
            <button className='auth__btn' onClick={onClickSignInPopBtn}>sign In<br />With Google</button>
            <button className='auth__btn' onClick={onClickShowDemoBtn}>show demo</button>
        </div>
    </div>)
}
export default (Auth);