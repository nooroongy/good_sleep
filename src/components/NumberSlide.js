// import { useState } from 'react';
import '../css/numberslide.css'


const NumberSlide = ({ val = 0, min = 0, max = 9, setter = () => { } }) => {
    const onClickBtn = (e) => {
        const { target: { attributes: { add: { value } } } } = e;
        setter(curr => {
            const res = curr * 1 + value * 1;
            if (res > max) { return min * 1 }
            else if (res < min) { return max * 1 }
            else { return res }
        })
    }

    return <span className='numberslide-wrap'>
        <span className='numberslide-up-btn font-icon main-color' add='1' onClick={onClickBtn}>arrow_drop_up</span>
        <span className='numberslide-number-box'>
            <span className='numberslide-disply'>
                <span className='numberslide-prev-num main-color'>{val * 1 - 1}</span>
                <span className='numberslide-cur-num main-color'>{val * 1}</span>
                <span className='numberslide-next-num main-color'>{val * 1 + 1}</span>
            </span>
        </span>
        <span className='numberslide-down-btn font-icon main-color' add='-1' onClick={onClickBtn}>arrow_drop_down</span>
    </span>
}

export default NumberSlide;