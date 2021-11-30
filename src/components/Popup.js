import { useEffect, useState } from 'react';
import '../css/popup.css'
import Card from "../components/Card";

const Popup = ({ isOpend, clossBtnClick, title, children }) => {
    const [show, setShow] = useState(false)
    const [showAnim, setShowAnim] = useState(false)
    useEffect(() => {
        setShow(isOpend)
        setTimeout(() => {
            setShowAnim(isOpend)
        }, 50);
    }, [isOpend])

    const ClosingPop = () => {
        setShow(false)
        clossBtnClick()
    }

    return <div className={`${(show ? '' : 'popup-closed ') + (showAnim ? 'popup-anim' : '')}`}>
        <div className='popup-wrap'>
            <Card title={title}>
                <div className='popup-contents'>
                    {children}
                </div>
            </Card>
        </div>
        <div className='popup-background' onClick={ClosingPop}></div>
    </div>
}

export default Popup;